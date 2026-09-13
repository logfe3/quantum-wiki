#!/usr/bin/env node

import { createHash } from "node:crypto"
import { existsSync } from "node:fs"
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const integrationConfigPath = path.join(repositoryRoot, "qatlas.integration.yaml")

function parseArguments(argv) {
  const [command = "help", ...values] = argv
  const options = {}
  const positionals = []
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index]
    if (!value.startsWith("--")) {
      positionals.push(value)
      continue
    }
    const key = value.slice(2)
    const next = values[index + 1]
    if (next && !next.startsWith("--")) {
      options[key] = next
      index += 1
    } else {
      options[key] = true
    }
  }
  return { command, options, positionals }
}

async function loadIntegrationConfig() {
  if (!existsSync(integrationConfigPath)) return {}
  return YAML.parse(await readFile(integrationConfigPath, "utf8")) ?? {}
}

function credentialCandidates() {
  if (process.env.QATLAS_HOSTS_FILE) return [process.env.QATLAS_HOSTS_FILE]
  if (process.platform === "win32") {
    return [path.join(process.env.LOCALAPPDATA ?? "", "qatlas", "hosts.yml")]
  }
  if (process.platform === "darwin") {
    return [path.join(os.homedir(), "Library", "Application Support", "qatlas", "hosts.yml")]
  }
  return [
    path.join(
      process.env.XDG_CONFIG_HOME ?? path.join(os.homedir(), ".config"),
      "qatlas",
      "hosts.yml",
    ),
  ]
}

async function loadToken(serverUrl, required = true) {
  if (process.env.QATLAS_TOKEN?.trim()) return process.env.QATLAS_TOKEN.trim()
  const hostname = new URL(serverUrl).hostname.toLowerCase()
  for (const candidate of credentialCandidates()) {
    if (!candidate || !existsSync(candidate)) continue
    const document = YAML.parse(await readFile(candidate, "utf8")) ?? {}
    const hosts = document.hosts ?? {}
    for (const [key, value] of Object.entries(hosts)) {
      const normalizedKey = key
        .replace(/^https?:\/\//, "")
        .replace(/\/$/, "")
        .toLowerCase()
      if (normalizedKey === hostname && typeof value?.token === "string" && value.token.trim()) {
        return value.token.trim()
      }
    }
  }
  if (!required) return null
  throw new Error(
    `No QAtlas credential found for ${hostname}. Run qatlas auth login --server-url ${serverUrl}.`,
  )
}

function apiUrl(serverUrl, endpoint) {
  return new URL(endpoint, serverUrl.endsWith("/") ? serverUrl : `${serverUrl}/`)
}

async function request(
  serverUrl,
  endpoint,
  { token, method = "GET", body, accept, allow = [] } = {},
) {
  const headers = { Accept: accept ?? "application/json" }
  if (token) headers.Authorization = `Bearer ${token}`
  if (body !== undefined) headers["Content-Type"] = "application/json"
  const response = await fetch(apiUrl(serverUrl, endpoint), {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(120_000),
  })
  if (!response.ok && !allow.includes(response.status)) {
    const detail = (await response.text()).slice(0, 800)
    throw new Error(`${method} ${endpoint} failed with HTTP ${response.status}: ${detail}`)
  }
  return response
}

async function requestJson(serverUrl, endpoint, options) {
  const response = await request(serverUrl, endpoint, options)
  return response.json()
}

function encodeIdentifier(identifier) {
  return identifier.split("/").map(encodeURIComponent).join("/")
}

function safeCacheName(identifier) {
  return identifier.replace(/[^A-Za-z0-9._-]+/g, "_").replace(/^_+|_+$/g, "")
}

async function writeAtomic(target, data) {
  await mkdir(path.dirname(target), { recursive: true })
  const temporary = `${target}.${process.pid}.tmp`
  await writeFile(temporary, data)
  await rm(target, { force: true })
  await rename(temporary, target)
}

async function resolvePaper(serverUrl, token, identifier) {
  const query = new URLSearchParams({ page: "1", per_page: "1" })
  if (identifier.startsWith("qa_")) query.set("paper_id", identifier)
  else if (/^10\.\d{4,9}\//i.test(identifier)) query.set("doi", identifier)
  else query.set("arxiv_id", identifier)
  const result = await requestJson(serverUrl, `/api/papers?${query}`, { token })
  const item = result.items?.[0]
  if (!item) throw new Error(`Paper not found in QAtlas: ${identifier}`)
  const detail = await requestJson(serverUrl, `/api/papers/${encodeURIComponent(item.paper_id)}`, {
    token,
  })
  return { ...item, ...detail }
}

async function fetchMarkdown(serverUrl, token, paperId, waitSeconds) {
  const deadline = Date.now() + waitSeconds * 1000
  const endpoint = `/api/papers/${encodeIdentifier(paperId)}/markdown`
  while (Date.now() < deadline) {
    const response = await request(serverUrl, endpoint, {
      token,
      accept: "text/markdown, application/json",
      allow: [202],
    })
    if (response.status === 200) return Buffer.from(await response.arrayBuffer())
    const retryAfter = Number.parseInt(response.headers.get("retry-after") ?? "5", 10)
    await new Promise((resolve) => setTimeout(resolve, Math.max(1, retryAfter) * 1000))
  }
  throw new Error(`Timed out waiting for Markdown conversion after ${waitSeconds} seconds.`)
}

function referencedImageNames(markdown) {
  const names = new Set()
  const expression = /images\/([0-9a-f]{64}\.(?:jpg|jpeg|png|gif|webp))/gi
  for (const match of markdown.matchAll(expression)) names.add(match[1])
  return [...names]
}

function selectedImageNames(markdown, figures, selection) {
  if (selection === "none") return []
  if (selection === "referenced" || selection === "all") return referencedImageNames(markdown)
  const requested = new Set(
    selection
      .split(",")
      .map((value) => Number.parseInt(value.trim(), 10))
      .filter(Number.isInteger),
  )
  const names = new Set()
  for (const figure of figures.figures ?? []) {
    if (!requested.has(Number(figure.fig_no))) continue
    for (const image of figure.images ?? []) names.add(image.name)
  }
  return [...names]
}

async function downloadImages(serverUrl, token, resolvedId, names, outputDirectory) {
  await mkdir(outputDirectory, { recursive: true })
  let cursor = 0
  const worker = async () => {
    while (cursor < names.length) {
      const index = cursor
      cursor += 1
      const name = names[index]
      if (!/^[0-9a-f]{64}\.(?:jpg|jpeg|png|gif|webp)$/i.test(name)) {
        throw new Error(`Unsafe QAtlas image name: ${name}`)
      }
      const endpoint = `/api/papers/${encodeIdentifier(resolvedId)}/images/${encodeURIComponent(name)}`
      const response = await request(serverUrl, endpoint, { token, accept: "image/*" })
      await writeAtomic(path.join(outputDirectory, name), Buffer.from(await response.arrayBuffer()))
    }
  }
  await Promise.all(Array.from({ length: Math.min(6, names.length) }, worker))
}

async function doctor(config) {
  const serverUrl = config.serverUrl
  const token = await loadToken(serverUrl, false)
  const health = await requestJson(serverUrl, "/api/health")
  const info = await requestJson(serverUrl, "/api/server/info")
  const stats = token ? await requestJson(serverUrl, "/api/papers/stats", { token }) : null
  console.log(
    JSON.stringify(
      {
        serverUrl,
        authenticated: Boolean(token),
        health: health.data ?? health,
        capabilities: info.capabilities,
        paperStats: stats,
      },
      null,
      2,
    ),
  )
}

async function listPapers(config, options) {
  const token = await loadToken(config.serverUrl)
  const query = new URLSearchParams({
    page: String(options.page ?? 1),
    per_page: String(Math.min(100, Number(options["per-page"] ?? 20))),
    sort: String(options.sort ?? "updated_at"),
  })
  if (options.query) query.set("q", options.query)
  if (options.status !== "any") query.set("status", options.status ?? "ready")
  if (options["has-md"] !== "any") query.set("has_md", options["has-md"] ?? "true")
  const result = await requestJson(config.serverUrl, `/api/papers?${query}`, { token })
  console.log(JSON.stringify(result, null, 2))
}

async function fetchPaper(config, options) {
  const identifier = options.id
  if (!identifier || identifier === true)
    throw new Error("fetch requires --id <arxiv-id|doi|qa-id>.")
  const token = await loadToken(config.serverUrl)
  const paper = await resolvePaper(config.serverUrl, token, identifier)
  const paperIdentifier = paper.arxiv_id || paper.doi || paper.paper_id
  const cacheRoot = path.resolve(repositoryRoot, options.output ?? config.cacheDir)
  const outputDirectory = path.join(cacheRoot, safeCacheName(paperIdentifier))
  const markdownBuffer = await fetchMarkdown(
    config.serverUrl,
    token,
    paper.paper_id,
    Number(options.wait ?? 600),
  )
  const markdown = markdownBuffer.toString("utf8")
  const figures = await requestJson(
    config.serverUrl,
    `/api/papers/${encodeURIComponent(paper.paper_id)}/figures`,
    { token },
  )
  const imageSelection = String(options.images ?? "none")
  const imageNames = selectedImageNames(markdown, figures, imageSelection)
  if (imageNames.length > 0) {
    await downloadImages(
      config.serverUrl,
      token,
      figures.resolved_id ?? paper.paper_id,
      imageNames,
      path.join(outputDirectory, "images"),
    )
  }
  await writeAtomic(
    path.join(outputDirectory, "metadata.json"),
    `${JSON.stringify(paper, null, 2)}\n`,
  )
  await writeAtomic(
    path.join(outputDirectory, "figures.json"),
    `${JSON.stringify(figures, null, 2)}\n`,
  )
  await writeAtomic(path.join(outputDirectory, "paper.md"), markdownBuffer)
  const manifest = {
    serverUrl: config.serverUrl,
    fetchedAt: new Date().toISOString(),
    paperId: paper.paper_id,
    arxivId: paper.arxiv_id || null,
    doi: paper.doi || null,
    sourceUpdatedAt: paper.updated_at,
    markdownSha256: createHash("sha256").update(markdownBuffer).digest("hex"),
    imageSelection,
    imageCount: imageNames.length,
  }
  await writeAtomic(
    path.join(outputDirectory, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  )
  console.log(JSON.stringify({ outputDirectory, ...manifest }, null, 2))
}

function printHelp() {
  console.log(`QAtlas bridge for the Quartz wiki

Usage:
  node scripts/qatlas-bridge.mjs doctor
  node scripts/qatlas-bridge.mjs list [--query TEXT] [--page N] [--per-page N]
  node scripts/qatlas-bridge.mjs fetch --id ID [--images none|referenced|1,2,3] [--wait SEC]

Authentication is loaded from QATLAS_TOKEN or the official qatlas CLI hosts.yml file.
Downloaded source material is written below .qatlas-cache/ and must not be committed.`)
}

async function main() {
  const { command, options } = parseArguments(process.argv.slice(2))
  const fileConfig = await loadIntegrationConfig()
  const config = {
    serverUrl:
      options.server ??
      process.env.QATLAS_SERVER_URL ??
      fileConfig.serverUrl ??
      "https://qatlas.hfnl.app.chenzhaoyun.com",
    cacheDir: fileConfig.cacheDir ?? ".qatlas-cache/papers",
  }
  if (command === "doctor") return doctor(config)
  if (command === "list") return listPapers(config, options)
  if (command === "fetch") return fetchPaper(config, options)
  printHelp()
}

main().catch((error) => {
  console.error(`QAtlas bridge failed: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
})
