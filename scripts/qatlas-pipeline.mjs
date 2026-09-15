#!/usr/bin/env node

import { exec, spawn } from "node:child_process"
import { existsSync } from "node:fs"
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const runsRoot = path.join(repositoryRoot, ".qatlas-cache", "runs")
const cacheRoot = path.join(repositoryRoot, ".qatlas-cache", "papers")
const promptDir = path.join(repositoryRoot, "scripts", "qatlas-prompts")
const schemaPath = path.join(repositoryRoot, "scripts", "qatlas-schemas", "editorial-plan.schema.json")
const bridgePath = path.join(repositoryRoot, "scripts", "qatlas-bridge.mjs")
const contentRoot = path.join(repositoryRoot, "content")

const RUN_ARTIFACTS = [
  "candidates.json",
  "wiki-index.json",
  "work-order.md",
  "editorial-plan.json",
  "agent-result.md",
  "review.json",
]

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

function writeAtomicAbsolute(target, data) {
  return writeFile(target, data)
}

async function runArtifactPath(runId, name) {
  return path.join(runsRoot, runId, name)
}

function parseNumberOption(options, key, fallback) {
  const value = Number(options[key] ?? fallback)
  return Number.isFinite(value) && value > 0 ? value : fallback
}

async function renderTemplate(templateName, replacements) {
  let text = await readFile(path.join(promptDir, templateName), "utf8")
  for (const [key, value] of Object.entries(replacements)) {
    text = text.split(`{{${key}}}`).join(value)
  }
  return text
}

async function writeJson(target, data) {
  await writeAtomicAbsolute(target, `${JSON.stringify(data, null, 2)}\n`)
}

// ---------------------------------------------------------------------------
// Wiki index
// ---------------------------------------------------------------------------

async function markdownFilesUnder(directory) {
  const output = []
  for (const child of await readdir(directory, { withFileTypes: true })) {
    const childPath = path.join(directory, child.name)
    if (child.isDirectory()) output.push(...(await markdownFilesUnder(childPath)))
    else if (child.isFile() && child.name.endsWith(".md")) output.push(childPath)
  }
  return output
}

function extractFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) return { frontmatter: {}, body: text }
  return { frontmatter: YAML.parse(match[1]) ?? {}, body: text.slice(match[0].length) }
}

function extractWikiLinks(body) {
  return [...body.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)].map((match) =>
    match[1].trim(),
  )
}

async function buildWikiIndex() {
  const files = await markdownFilesUnder(contentRoot)
  const pages = []
  for (const file of files) {
    const relative = path.relative(repositoryRoot, file).split(path.sep).join("/")
    const text = await readFile(file, "utf8")
    const { frontmatter, body } = extractFrontmatter(text)
    pages.push({
      path: relative,
      title: typeof frontmatter.title === "string" ? frontmatter.title : "",
      description: typeof frontmatter.description === "string" ? frontmatter.description : "",
      aliases: Array.isArray(frontmatter.aliases) ? frontmatter.aliases.map(String) : [],
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.map(String) : [],
      source: typeof frontmatter.source === "string" ? frontmatter.source : "",
      qatlas_id:
        typeof frontmatter.qatlas_id === "string" ? frontmatter.qatlas_id : "",
      wikiLinks: extractWikiLinks(body),
    })
  }
  const categories = [
    ...new Set(
      pages
        .map((page) => path.posix.dirname(page.path))
        .filter((directory) => directory.startsWith("content/") && directory !== "content"),
    ),
  ].sort()
  return { generatedAt: new Date().toISOString(), categories, pages }
}

function normalizeTitle(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
}

function candidateMatchesWiki(candidate, index) {
  const identifiers = new Set()
  if (candidate.paper_id) identifiers.add(candidate.paper_id)
  if (candidate.doi) identifiers.add(String(candidate.doi).toLowerCase())
  if (candidate.arxiv_id) identifiers.add(String(candidate.arxiv_id).toLowerCase())
  const title = normalizeTitle(candidate.title)
  for (const page of index.pages) {
    if (page.qatlas_id && identifiers.has(page.qatlas_id)) return page.path
    for (const alias of page.aliases) {
      const normalized = normalizeTitle(alias)
      if (normalized && (identifiers.has(normalized) || (title && normalized === title))) {
        return page.path
      }
    }
    if (title && normalizeTitle(page.title) === title) return page.path
  }
  return null
}

// ---------------------------------------------------------------------------
// QAtlas queries
// ---------------------------------------------------------------------------

async function bridgeJson(args) {
  const result = await new Promise((resolve) => {
    const child = spawn(process.execPath, [bridgePath, ...args], {
      cwd: repositoryRoot,
      stdio: ["ignore", "pipe", "pipe"],
    })
    let stdout = ""
    let stderr = ""
    child.stdout.on("data", (chunk) => {
      stdout += chunk
    })
    child.stderr.on("data", (chunk) => {
      stderr += chunk
    })
    child.on("error", (error) => {
      resolve({ ok: false, stdout, stderr: `${stderr}${error.message}` })
    })
    child.on("close", (code) => {
      resolve({ ok: code === 0, stdout, stderr })
    })
  })
  if (!result.ok) {
    throw new Error(
      `qatlas-bridge ${args.join(" ")} failed: ${result.stderr.trim() || "no stderr"}`,
    )
  }
  return JSON.parse(result.stdout)
}

async function discoverPapers(config, options) {
  const max = parseNumberOption(options, "max", 2)
  const perPage = 100
  const imageSelection = String(options.images ?? "referenced")
  const index = await buildWikiIndex()
  console.log(
    `Wiki index: ${index.pages.length} pages, ${index.categories.length} categories.`,
  )

  const candidates = []
  const excluded = []
  let page = 1
  while (candidates.length < max && page <= 5) {
    const args = [
      "list",
      "--page",
      String(page),
      "--per-page",
      String(perPage),
      "--status",
      "ready",
      "--has-md",
      "true",
    ]
    if (config.query) args.push("--query", config.query)
    const result = await bridgeJson(args)
    const items = result.items ?? []
    if (items.length === 0) break
    for (const item of items) {
      const existing = candidateMatchesWiki(item, index)
      if (existing) {
        excluded.push({ paper_id: item.paper_id, title: item.title, reason: `already in wiki: ${existing}` })
        continue
      }
      if (candidates.some((entry) => entry.paper_id === item.paper_id)) continue
      candidates.push(item)
      if (candidates.length >= max) break
    }
    page += 1
  }
  console.log(
    `Discovered ${candidates.length} candidate(s); ${excluded.length} excluded as already covered.`,
  )

  const enriched = []
  for (const candidate of candidates) {
    const identifier = candidate.arxiv_id || candidate.doi || candidate.paper_id
    process.stdout.write(`Fetching candidate ${candidate.title ?? candidate.paper_id} … `)
    try {
      const manifest = await bridgeJson([
        "fetch",
        "--id",
        identifier,
        "--images",
        imageSelection,
      ])
      const paperMarkdown = await readFile(
        path.join(manifest.outputDirectory, "paper.md"),
        "utf8",
      )
      const figures = JSON.parse(
        await readFile(path.join(manifest.outputDirectory, "figures.json"), "utf8"),
      )
      const metadata = JSON.parse(
        await readFile(path.join(manifest.outputDirectory, "metadata.json"), "utf8"),
      )
      enriched.push({
        paper_id: manifest.paperId,
        arxiv_id: manifest.arxivId,
        doi: manifest.doi,
        title: metadata.title ?? candidate.title,
        authors: metadata.authors ?? candidate.authors ?? [],
        source_updated: manifest.sourceUpdatedAt,
        status: candidate.status,
        cache_dir: path.relative(repositoryRoot, manifest.outputDirectory).split(path.sep).join("/"),
        markdown_chars: paperMarkdown.length,
        figures: (figures.figures ?? []).map((figure) => ({
          fig_no: figure.fig_no,
          caption: figure.caption,
          images: (figure.images ?? []).map((image) => image.name),
        })),
      })
      console.log("ok")
    } catch (error) {
      excluded.push({
        paper_id: candidate.paper_id,
        title: candidate.title,
        reason: `fetch failed: ${error instanceof Error ? error.message : String(error)}`,
      })
      console.log("failed")
    }
  }
  return { candidates: enriched, excluded, wikiIndex: index }
}

// ---------------------------------------------------------------------------
// Editorial plan schema validation (draft-07 subset, dependency-free)
// ---------------------------------------------------------------------------

function validateAgainstSchema(value, schema, location = "root") {
  const errors = []
  if (schema.type === "object") {
    if (typeof value !== "object" || value === null || Array.isArray(value)) {
      return [`${location}: expected object`]
    }
    for (const key of schema.required ?? []) {
      if (!(key in value)) errors.push(`${location}: missing required property "${key}"`)
    }
    for (const [key, subschema] of Object.entries(schema.properties ?? {})) {
      if (key in value) errors.push(...validateAgainstSchema(value[key], subschema, `${location}.${key}`))
    }
    if (schema.additionalProperties === false) {
      const allowed = new Set(Object.keys(schema.properties ?? {}))
      for (const key of Object.keys(value)) {
        if (!allowed.has(key)) errors.push(`${location}: unexpected property "${key}"`)
      }
    }
    for (const condition of schema.allOf ?? []) {
      if (condition.if) {
        const ifProperties = condition.if.properties ?? {}
        const matchesIf = Object.entries(ifProperties).every(([key, expectation]) => {
          if (!(key in value)) return false
          if (expectation.enum) return expectation.enum.includes(value[key])
          if ("const" in expectation) return value[key] === expectation.const
          return true
        })
        const everyKeyPresent = Object.keys(ifProperties).every((key) => key in value)
        if (matchesIf && everyKeyPresent) {
          errors.push(...validateAgainstSchema(value, condition.then, location))
        }
      } else {
        errors.push(...validateAgainstSchema(value, condition, location))
      }
    }
    return errors
  }
  if (schema.type === "array") {
    if (!Array.isArray(value)) return [`${location}: expected array`]
    if (schema.minItems !== undefined && value.length < schema.minItems) {
      errors.push(`${location}: expected at least ${schema.minItems} item(s)`)
    }
    value.forEach((item, position) => {
      errors.push(...validateAgainstSchema(item, schema.items, `${location}[${position}]`))
    })
    return errors
  }
  if (schema.enum) {
    if (!schema.enum.includes(value)) errors.push(`${location}: value must be one of ${schema.enum.join(", ")}`)
  }
  if (schema.type === "string") {
    if (typeof value !== "string") return [`${location}: expected string`]
    if (schema.pattern && !new RegExp(schema.pattern).test(value)) {
      errors.push(`${location}: string does not match pattern ${schema.pattern}`)
    }
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      errors.push(`${location}: string shorter than ${schema.minLength}`)
    }
    return errors
  }
  if (schema.type === "integer") {
    if (!Number.isInteger(value)) errors.push(`${location}: expected integer`)
    if (schema.minimum !== undefined && value < schema.minimum) {
      errors.push(`${location}: value below minimum ${schema.minimum}`)
    }
    return errors
  }
  return errors
}

async function loadAndValidatePlan(runDir) {
  const planPath = path.join(runDir, "editorial-plan.json")
  if (!existsSync(planPath)) {
    throw new Error(
      `editorial-plan.json not found in the run directory. The planning agent should read work-order.md and write ${path.relative(repositoryRoot, planPath)}.`,
    )
  }
  const plan = JSON.parse(await readFile(planPath, "utf8"))
  const schema = JSON.parse(await readFile(schemaPath, "utf8"))
  const errors = validateAgainstSchema(plan, schema)
  if (errors.length > 0) {
    throw new Error(
      `editorial-plan.json failed schema validation:\n${errors.map((error) => `  - ${error}`).join("\n")}`,
    )
  }
  const candidates = JSON.parse(await readFile(path.join(runDir, "candidates.json"), "utf8"))
  const candidateIds = candidates.candidates.map((candidate) => candidate.paper_id)
  const planIds = plan.map((entry) => entry.paper_id)
  for (const candidateId of candidateIds) {
    if (!planIds.includes(candidateId)) {
      throw new Error(`editorial-plan.json is missing a decision for candidate ${candidateId}`)
    }
  }
  const duplicates = planIds.filter((id, position) => planIds.indexOf(id) !== position)
  if (duplicates.length > 0) {
    throw new Error(`editorial-plan.json has duplicate decisions for: ${duplicates.join(", ")}`)
  }
  for (const candidateId of planIds) {
    if (!candidateIds.includes(candidateId)) {
      throw new Error(`editorial-plan.json references unknown paper ${candidateId}`)
    }
  }
  return plan
}

// ---------------------------------------------------------------------------
// Codex execution
// ---------------------------------------------------------------------------

function runCodex(sandbox, prompt, timeoutMinutes) {
  return new Promise((resolve) => {
    const child = spawn("codex", ["exec", "--ephemeral", `--sandbox`, sandbox, "-C", repositoryRoot, "-"], {
      cwd: repositoryRoot,
      shell: true,
      stdio: ["pipe", "pipe", "pipe"],
    })
    let stdout = ""
    let stderr = ""
    const timer = setTimeout(() => child.kill(), timeoutMinutes * 60_000)
    child.stdout.on("data", (chunk) => {
      stdout += chunk
      process.stdout.write(chunk)
    })
    child.stderr.on("data", (chunk) => {
      stderr += chunk
    })
    child.on("error", (error) => {
      clearTimeout(timer)
      resolve({ ok: false, stdout, stderr: `${stderr}${error.message}` })
    })
    child.on("close", (code) => {
      clearTimeout(timer)
      resolve({ ok: code === 0, stdout, stderr })
    })
    child.stdin.write(prompt)
    child.stdin.end()
  })
}

function extractJsonArray(text) {
  const fenced = text.match(/```json\s*([\s\S]*?)```/)
  const attempt = (candidate) => {
    try {
      const parsed = JSON.parse(candidate)
      return Array.isArray(parsed) ? parsed : null
    } catch {
      return null
    }
  }
  if (fenced) {
    const parsed = attempt(fenced[1].trim())
    if (parsed) return parsed
  }
  const direct = attempt(text.trim())
  if (direct) return direct
  const start = text.indexOf("[")
  const end = text.lastIndexOf("]")
  if (start !== -1 && end > start) return attempt(text.slice(start, end + 1))
  return null
}

// ---------------------------------------------------------------------------
// Review
// ---------------------------------------------------------------------------

async function runStep(name, command, args) {
  process.stdout.write(`Running ${name} …\n`)
  const isShellString = typeof command === "string" && args.length === 0
  const result = await new Promise((resolve) => {
    const child = isShellString
      ? exec(command, { cwd: repositoryRoot, windowsHide: true, maxBuffer: 64 * 1024 * 1024 })
      : spawn(command, args, {
          cwd: repositoryRoot,
          stdio: ["ignore", "pipe", "pipe"],
        })
    let output = ""
    if (isShellString) {
      child.stdout.on("data", (chunk) => {
        output += chunk
      })
      child.stderr.on("data", (chunk) => {
        output += chunk
      })
      child.on("close", (code) => {
        resolve({ ok: code === 0, output })
      })
    } else {
      child.stdout.on("data", (chunk) => {
        output += chunk
      })
      child.stderr.on("data", (chunk) => {
        output += chunk
      })
      child.on("error", (error) => {
        resolve({ ok: false, output: `${output}${error.message}` })
      })
      child.on("close", (code) => {
        resolve({ ok: code === 0, output })
      })
    }
  })
  const tail = result.output.trim().split("\n").slice(-25).join("\n")
  console.log(tail)
  console.log(result.ok ? `${name}: PASS` : `${name}: FAIL`)
  return { name, ok: result.ok, outputTail: tail }
}

const tscCommand = path.join(repositoryRoot, "node_modules", "typescript", "bin", "tsc")
const tsxCommand = path.join(repositoryRoot, "node_modules", "tsx", "dist", "cli.mjs")

async function reviewRun(runId) {
  const runDir = path.join(runsRoot, runId)
  if (!existsSync(runDir)) throw new Error(`Run directory not found: ${runId}`)
  const startedAt = new Date().toISOString()
  const steps = []
  steps.push(
    await runStep("content gate", process.execPath, [
      path.join(repositoryRoot, "scripts", "check-qatlas-content.mjs"),
    ]),
  )
  steps.push(await runStep("typescript", process.execPath, [tscCommand, "--noEmit"]))
  steps.push(await runStep("tests", process.execPath, [tsxCommand, "--test"]))
  steps.push(await runStep("production build", "npm run build:site", []))
  const review = {
    runId,
    startedAt,
    finishedAt: new Date().toISOString(),
    steps,
    allPassed: steps.every((step) => step.ok),
    preview: {
      command: "npm run preview:local",
      url: "http://127.0.0.1:8088/",
    },
  }
  await writeJson(await runArtifactPath(runId, "review.json"), review)
  console.log(
    review.allPassed
      ? `All review steps passed. Preview with: npm run preview:local → ${review.preview.url}`
      : "One or more review steps FAILED; see review.json for details.",
  )
  return review
}

// ---------------------------------------------------------------------------
// Commands
// ---------------------------------------------------------------------------

async function loadIntegrationConfig() {
  const configPath = path.join(repositoryRoot, "qatlas.integration.yaml")
  if (!existsSync(configPath)) return {}
  return YAML.parse(await readFile(configPath, "utf8")) ?? {}
}

async function resolveRunId(options) {
  if (options.run && options.run !== true) return String(options.run)
  if (!existsSync(runsRoot)) throw new Error("No pipeline runs found; run discover first.")
  const runs = (await readdir(runsRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
  if (runs.length === 0) throw new Error("No pipeline runs found; run discover first.")
  return runs[runs.length - 1]
}

// ---------------------------------------------------------------------------
// Autodiscovery: topic selection + adaptive batch + state
// ---------------------------------------------------------------------------

const DEFAULT_STATE = { usedTopics: [], lastBatchSize: 3, rounds: 0, history: [] }

async function loadAutoState(stateFile) {
  const absolute = path.resolve(repositoryRoot, stateFile)
  if (!existsSync(absolute)) return { ...DEFAULT_STATE }
  try {
    return { ...DEFAULT_STATE, ...(JSON.parse(await readFile(absolute, "utf8")) ?? {}) }
  } catch {
    return { ...DEFAULT_STATE }
  }
}

async function saveAutoState(stateFile, state) {
  const absolute = path.resolve(repositoryRoot, stateFile)
  await mkdir(path.dirname(absolute), { recursive: true })
  await writeAtomicAbsolute(absolute, `${JSON.stringify(state, null, 2)}\n`)
}

function deriveTopicsFromWikiIndex(wikiIndex, seedTopics) {
  const seeded = new Set(seedTopics.map((topic) => topic.toLowerCase()))
  const englishTokens = new Map()
  for (const page of wikiIndex.pages) {
    for (const alias of page.aliases) {
      if (!/[a-z]{4,}/i.test(alias)) continue
      const normalized = alias.toLowerCase().trim()
      if (seeded.has(normalized)) continue
      englishTokens.set(normalized, (englishTokens.get(normalized) ?? 0) + 1)
    }
    for (const tag of page.tags) {
      if (!/[a-z]{4,}/i.test(tag)) continue
      const normalized = tag.toLowerCase().trim()
      if (seeded.has(normalized)) continue
      englishTokens.set(normalized, (englishTokens.get(normalized) ?? 0) + 1)
    }
  }
  return [...englishTokens.entries()]
    .sort((left, right) => right[1] - left[1])
    .map(([topic]) => topic)
    .slice(0, 12)
}

function pickNextTopic(state, seedTopics, wikiIndex) {
  const derived = deriveTopicsFromWikiIndex(wikiIndex, seedTopics)
  const used = new Set(state.usedTopics.map((topic) => topic.toLowerCase()))
  const unusedSeed = seedTopics.find((topic) => !used.has(topic.toLowerCase()))
  if (unusedSeed) return { topic: unusedSeed, origin: "seed" }
  const unusedDerived = derived.find((topic) => !used.has(topic.toLowerCase()))
  if (unusedDerived) return { topic: unusedDerived, origin: "derived-from-main" }
  // All known topics used: restart the cycle with a fresh index-derived list
  const fallback = derived[0] ?? seedTopics[0]
  return { topic: fallback, origin: "cycle-restart" }
}

function nextBatchSize(state, autodiscovery) {
  const base = Number(autodiscovery?.batchSize ?? 3)
  const last = Number(state.lastBatchSize ?? base)
  const lastRound = state.history?.[state.history.length - 1]
  if (!lastRound) return Math.min(5, base)
  if (lastRound.outcome === "clean") return Math.min(5, last + 1)
  if (lastRound.outcome === "partial" || lastRound.outcome === "failed") {
    return Math.max(1, last - 1)
  }
  return last
}

async function syncMainWithRemote() {
  const git = (args) =>
    new Promise((resolve) => {
      const child = spawn("git", args, { cwd: repositoryRoot, stdio: ["ignore", "pipe", "pipe"] })
      let output = ""
      child.stdout.on("data", (chunk) => {
        output += chunk
      })
      child.stderr.on("data", (chunk) => {
        output += chunk
      })
      child.on("error", (error) => resolve({ ok: false, output: `${output}${error.message}` }))
      child.on("close", (code) => resolve({ ok: code === 0, output }))
    })
  const status = await git(["status", "--porcelain"])
  if (!status.ok) throw new Error(`git status failed: ${status.output}`)
  if (status.output.trim() !== "") {
    throw new Error(
      `Working tree is not clean; commit or stash before running auto:\n${status.output}`,
    )
  }
  const fetch = await git(["fetch", "github"])
  if (!fetch.ok) throw new Error(`git fetch failed: ${fetch.output}`)
  const behind = await git(["rev-list", "--count", "main..github/main"])
  if (behind.ok && Number.parseInt(behind.output.trim(), 10) > 0) {
    const pull = await git(["pull", "--ff-only", "github", "main"])
    if (!pull.ok) throw new Error(`git pull failed: ${pull.output}`)
    console.log("Synced latest main from github.")
  }
}

async function commitBatchToMain(topic, roundIndex, papers) {
  const git = (args) =>
    new Promise((resolve) => {
      const child = spawn("git", args, { cwd: repositoryRoot, stdio: ["ignore", "pipe", "pipe"] })
      let output = ""
      child.stdout.on("data", (chunk) => {
        output += chunk
      })
      child.stderr.on("data", (chunk) => {
        output += chunk
      })
      child.on("error", (error) => resolve({ ok: false, output: `${output}${error.message}` }))
      child.on("close", (code) => resolve({ ok: code === 0, output }))
    })
  const status = await git(["status", "--porcelain"])
  if (!status.ok || status.output.trim() === "") {
    return { committed: false, message: "nothing to commit" }
  }
  const add = await git(["add", "content", "package.json", "qatlas.integration.yaml", "README.md", "quartz.config.yaml"])
  if (!add.ok) throw new Error(`git add failed: ${add.output}`)
  const identifiers = papers
    .map((paper) => paper.arxiv_id || paper.doi || paper.paper_id)
    .filter(Boolean)
    .join(", ")
  const message = [
    `QAtlas auto batch ${roundIndex}: topic "${topic}"`,
    "",
    `Papers: ${identifiers || "(none)"}`,
    "Generated by the QAtlas auto pipeline; review gate passed",
    "(content gate, TypeScript, tests, production build).",
  ].join("\n")
  const commit = await git(["commit", "-m", message])
  if (!commit.ok) throw new Error(`git commit failed: ${commit.output}`)
  const push = await git(["push", "github", "main"])
  if (!push.ok) throw new Error(`git push failed: ${push.output}`)
  return { committed: true, message: commit.output.trim().split("\n")[0] }
}

async function commandDiscover(options) {
  const query = typeof options.query === "string" ? options.query : ""
  if (!query) throw new Error("discover requires --query TEXT.")
  const config = await loadIntegrationConfig()
  const { candidates, excluded, wikiIndex } = await discoverPapers(
    { query, cacheDir: config.cacheDir },
    options,
  )
  const runId = new Date().toISOString().replace(/[-:]/g, "").replace(/\..+/, "").replace("T", "-")
  const runDir = path.join(runsRoot, runId)
  await mkdir(runDir, { recursive: true })
  const { pages: _pages, ...indexSummary } = wikiIndex
  await writeJson(await runArtifactPath(runId, "candidates.json"), {
    query,
    generatedAt: wikiIndex.generatedAt,
    candidates,
    excluded,
  })
  await writeJson(await runArtifactPath(runId, "wiki-index.json"), wikiIndex)
  console.log(`Run ${runId}: ${candidates.length} candidate(s) cached, artifacts written.`)
  void indexSummary
  return runId
}
async function writeWorkOrder(runId) {
  const runDir = path.join(runsRoot, runId)
  const candidatesDocument = JSON.parse(await readFile(path.join(runDir, "candidates.json"), "utf8"))
  const wikiIndex = JSON.parse(await readFile(path.join(runDir, "wiki-index.json"), "utf8"))
  const schema = JSON.parse(await readFile(schemaPath, "utf8"))
  const example = (schema.items.properties ?? null) ?? {}
  const indexSummary = {
    generatedAt: wikiIndex.generatedAt,
    categories: wikiIndex.categories,
    pages: wikiIndex.pages.map((page) => ({
      path: page.path,
      title: page.title,
      description: page.description,
      aliases: page.aliases,
      tags: page.tags,
    })),
  }
  const workOrder = await renderTemplate("editorial-plan.md", {
    CANDIDATES_JSON: JSON.stringify(candidatesDocument.candidates, null, 2),
    WIKI_INDEX_SUMMARY: JSON.stringify(indexSummary, null, 2),
    SCHEMA_EXAMPLE: JSON.stringify(example, null, 2),
  })
  await writeAtomicAbsolute(path.join(runDir, "work-order.md"), workOrder)
  console.log(`Work order written to ${path.relative(repositoryRoot, path.join(runDir, "work-order.md"))}`)
  return { runDir, candidatesDocument }
}

async function commandPlan(options) {
  const runId = await resolveRunId(options)
  const { runDir, candidatesDocument } = await writeWorkOrder(runId)
  const executor = String(options.executor ?? "agent")
  if (executor === "codex") {
    console.log("Planning with codex (read-only sandbox) …")
    const workOrder = await readFile(path.join(runDir, "work-order.md"), "utf8")
    const result = await runCodex("read-only", workOrder, parseNumberOption(options, "timeout-min", 30))
    const plan = extractJsonArray(result.stdout)
    if (!plan) throw new Error("Could not extract a JSON array from codex output; see stdout above.")
    await writeJson(path.join(runDir, "editorial-plan.json"), plan)
  }
  const plan = await loadAndValidatePlan(runDir)
  const decisions = plan
    .map((entry) => `${entry.paper_id}: ${entry.decision}`)
    .join("\n  ")
  console.log(`Editorial plan valid for run ${runId}:\n  ${decisions}`)
  console.log(
    `Candidates fetched: ${candidatesDocument.candidates.length}; excluded: ${candidatesDocument.excluded.length}.`,
  )
  if (executor !== "codex") {
    console.log(
      `Next: the generation agent reads ${path.relative(repositoryRoot, path.join(runDir, "work-order.md"))}, writes wiki pages, then:\n` +
        `  npm run qatlas:pipeline -- generate --run ${runId}`,
    )
  }
  return runId
}

function paperSection(candidate) {
  const lines = [
    `### ${candidate.title ?? candidate.paper_id}`,
    `- paper_id: ${candidate.paper_id}`,
    candidate.arxiv_id ? `- arXiv: ${candidate.arxiv_id}` : null,
    candidate.doi ? `- DOI: ${candidate.doi}` : null,
    `- authors: ${(candidate.authors ?? []).join(", ")}`,
    `- source_updated: ${candidate.source_updated}`,
    `- 缓存目录: ${candidate.cache_dir}（paper.md 为论文全文，figures.json 为图注索引）`,
    `- figures: ${JSON.stringify(candidate.figures ?? [], null, 2)}`,
  ].filter(Boolean)
  return lines.join("\n")
}

async function commandGenerate(options) {
  const runId = await resolveRunId(options)
  const runDir = path.join(runsRoot, runId)
  const plan = await loadAndValidatePlan(runDir)
  const candidatesDocument = JSON.parse(await readFile(path.join(runDir, "candidates.json"), "utf8"))
  const wikiIndex = JSON.parse(await readFile(path.join(runDir, "wiki-index.json"), "utf8"))
  const candidateById = new Map(candidatesDocument.candidates.map((candidate) => [candidate.paper_id, candidate]))
  const indexSummary = {
    generatedAt: wikiIndex.generatedAt,
    categories: wikiIndex.categories,
    pages: wikiIndex.pages.map((page) => ({
      path: page.path,
      title: page.title,
      description: page.description,
      aliases: page.aliases,
      tags: page.tags,
    })),
  }
  const papersSection = plan
    .map((entry) => {
      const candidate = candidateById.get(entry.paper_id)
      if (!candidate) return `### ${entry.paper_id}\n\n（候选论文资料缺失）`
      return paperSection(candidate)
    })
    .join("\n\n")
  const workOrder = await renderTemplate("generate-draft.md", {
    PLAN_JSON: JSON.stringify(plan, null, 2),
    PAPERS_SECTION: papersSection,
    WIKI_INDEX_SUMMARY: JSON.stringify(indexSummary, null, 2),
    RUN_DIR: path.relative(repositoryRoot, runDir).split(path.sep).join("/"),
  })
  const executor = String(options.executor ?? "agent")
  if (executor === "codex") {
    console.log("Generating with codex (workspace-write sandbox) …")
    const result = await runCodex("workspace-write", workOrder, parseNumberOption(options, "timeout-min", 30))
    await writeAtomicAbsolute(path.join(runDir, "agent-result.md"), result.stdout)
  }
  const active = plan.filter((entry) => entry.decision !== "skip")
  for (const entry of active) {
    const target = path.resolve(repositoryRoot, entry.target_path)
    if (!existsSync(target)) {
      throw new Error(
        `Generation incomplete: target page ${entry.target_path} does not exist. The generation agent must create it and write agent-result.md into the run directory.`,
      )
    }
  }
  if (!existsSync(path.join(runDir, "agent-result.md"))) {
    throw new Error(
      `agent-result.md is missing in ${path.relative(repositoryRoot, runDir)}. The generation agent must write a summary there.`,
    )
  }
  const gate = await runStep("content gate (changed pages)", process.execPath, [
    path.join(repositoryRoot, "scripts", "check-qatlas-content.mjs"),
    ...new Set(active.map((entry) => path.posix.dirname(entry.target_path))),
  ])
  if (!gate.ok) {
    throw new Error("Content gate failed on the generated pages; fix the pages and re-run generate.")
  }
  console.log(
    `Generation verified for run ${runId}: ${active.length} page(s) created/updated and gated.` +
      (executor !== "codex"
        ? `\nNext: npm run qatlas:pipeline -- review --run ${runId}`
        : ""),
  )
  return runId
}

async function commandReview(options) {
  const runId = await resolveRunId(options)
  return reviewRun(runId)
}

async function commandStatus(options) {
  if (options.run && options.run !== true) {
    const runId = String(options.run)
    const runDir = path.join(runsRoot, runId)
    if (!existsSync(runDir)) throw new Error(`Run directory not found: ${runId}`)
    const lines = [`Run ${runId}`]
    for (const name of RUN_ARTIFACTS) {
      const exists = existsSync(path.join(runDir, name))
      lines.push(`  ${exists ? "[x]" : "[ ]"} ${name}`)
    }
    const planPath = path.join(runDir, "editorial-plan.json")
    if (existsSync(planPath)) {
      const plan = JSON.parse(await readFile(planPath, "utf8"))
      for (const entry of plan) lines.push(`  plan: ${entry.paper_id} → ${entry.decision}`)
    }
    const reviewPath = path.join(runDir, "review.json")
    if (existsSync(reviewPath)) {
      const review = JSON.parse(await readFile(reviewPath, "utf8"))
      lines.push(`  review: ${review.allPassed ? "all steps passed" : "FAILED"}`)
      for (const step of review.steps) lines.push(`    ${step.ok ? "PASS" : "FAIL"} ${step.name}`)
    }
    console.log(lines.join("\n"))
    return
  }
  if (!existsSync(runsRoot)) {
    console.log("No pipeline runs found.")
    return
  }
  const runs = (await readdir(runsRoot, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
  if (runs.length === 0) {
    console.log("No pipeline runs found.")
    return
  }
  for (const runId of runs) {
    const runDir = path.join(runsRoot, runId)
    const present = RUN_ARTIFACTS.filter((name) => existsSync(path.join(runDir, name)))
    console.log(`${runId}  artifacts: ${present.length}/${RUN_ARTIFACTS.length}`)
  }
  console.log(`(latest run: ${runs[runs.length - 1]})`)
}

async function commandRun(options) {
  const runId = await commandDiscover(options)
  const executor = String(options.executor ?? "agent")
  if (executor === "codex") {
    await commandPlan(options)
    await commandGenerate(options)
    return reviewRun(runId)
  }
  await writeWorkOrder(runId)
  console.log(
    `\nPipeline paused for the agent-in-the-loop steps:\n` +
      `  1. Read .qatlas-cache/runs/${runId}/work-order.md\n` +
      `  2. Write .qatlas-cache/runs/${runId}/editorial-plan.json (schema: scripts/qatlas-schemas/editorial-plan.schema.json)\n` +
      `  3. npm run qatlas:pipeline -- plan --run ${runId}\n` +
      `  4. Generate the wiki pages per the plan, write agent-result.md into the run dir\n` +
      `  5. npm run qatlas:pipeline -- generate --run ${runId}\n` +
      `  6. npm run qatlas:pipeline -- review --run ${runId}`,
  )
  return runId
}

async function commandAuto(options) {
  const config = await loadIntegrationConfig()
  const autodiscovery = config.autodiscovery ?? {}
  const stateFile = String(autodiscovery.stateFile ?? ".qatlas-cache/autodiscovery-state.json")
  const totalRounds = parseNumberOption(options, "rounds", 0)
  const executor = String(options.executor ?? "agent")
  const topicsToTry = Math.max(1, parseNumberOption(options, "topics", 3))
  let state = await loadAutoState(stateFile)

  console.log(
    `Auto pipeline starting: ${totalRounds > 0 ? `${totalRounds} round(s)` : "unlimited rounds"}, ` +
      `batch ${nextBatchSize(state, autodiscovery)}, state file ${stateFile}.`,
  )
  const results = []
  let round = 1
  while (totalRounds <= 0 || round <= totalRounds) {
    console.log(`\n=== Round ${round} ===`)
    await syncMainWithRemote()
    const wikiIndex = await buildWikiIndex()
    const batchSize = nextBatchSize(state, autodiscovery)
    console.log(`Wiki index: ${wikiIndex.pages.length} pages. Batch size: ${batchSize}.`)

    let runId = null
    let chosenTopic = null
    let discoverOutcome = "failed"
    try {
      for (let attempt = 0; attempt < topicsToTry; attempt += 1) {
        const selection = pickNextTopic(state, autodiscovery.seed_topics ?? [], wikiIndex)
        console.log(`Topic (${selection.origin}): "${selection.topic}"`)
        try {
          const candidateRunId = await commandDiscover({ query: selection.topic, max: batchSize, images: "referenced" })
          const discovered = JSON.parse(
            await readFile(path.join(runsRoot, candidateRunId, "candidates.json"), "utf8"),
          )
          if ((discovered.candidates ?? []).length === 0) {
            console.log(`Topic "${selection.topic}" returned no candidates; trying the next topic.`)
            state.usedTopics.push(selection.topic)
            continue
          }
          runId = candidateRunId
          chosenTopic = selection
          discoverOutcome = "ok"
          break
        } catch (error) {
          console.log(`Discover failed for "${selection.topic}": ${error.message}`)
          state.usedTopics.push(selection.topic)
        }
      }
    } catch (error) {
      console.log(`Discover phase failed: ${error.message}`)
    }
    if (discoverOutcome !== "ok" || !runId || !chosenTopic) {
      state.rounds += 1
      state.history.push({ round, topic: null, outcome: "failed", reason: "no discoverable candidates" })
      await saveAutoState(stateFile, state)
      console.log("Round failed at discovery; continuing to the next round.")
      results.push({ round, outcome: "failed" })
      round += 1
      continue
    }

    state.usedTopics.push(chosenTopic.topic)
    let roundOutcome = "failed"
    let failureReason = ""
    try {
      await writeWorkOrder(runId)
      if (executor === "codex") {
        await commandPlan({ run: runId, executor })
        await commandGenerate({ run: runId, executor })
      } else {
        // The calling agent performs plan + generate between pipeline invocations.
        // Persist state first so an interrupted round still records topic usage.
        state.rounds += 1
        state.usedTopics.push(chosenTopic.topic)
        state.history.push({ round, topic: chosenTopic.topic, outcome: "in-progress" })
        await saveAutoState(stateFile, state)
        console.log(
          `AGENT-TASK plan: read .qatlas-cache/runs/${runId}/work-order.md and write ` +
            `.qatlas-cache/runs/${runId}/editorial-plan.json (schema: scripts/qatlas-schemas/editorial-plan.schema.json), ` +
            `then run: npm run qatlas:pipeline -- plan --run ${runId}`,
        )
        return { runId, round, topic: chosenTopic.topic, state, stateFile, awaiting: "plan" }
      }
      roundOutcome = "ok"
    } catch (error) {
      failureReason = error.message
      console.log(`Round failed: ${failureReason}`)
    }
    state.rounds += 1
    state.history.push({ round, topic: chosenTopic.topic, outcome: roundOutcome, reason: failureReason || undefined })
    await saveAutoState(stateFile, state)
    results.push({ round, outcome: roundOutcome, runId, topic: chosenTopic.topic })
    round += 1
  }
  console.log(`\nAuto pipeline finished: ${results.length} round(s).`)
  return results
}

function printHelp() {
  console.log(`QAtlas → Quantum Wiki content pipeline

Usage:
  node scripts/qatlas-pipeline.mjs run --query TEXT [--max N] [--executor agent|codex] [--images none|referenced|1,2,3]
  node scripts/qatlas-pipeline.mjs discover --query TEXT [--max N] [--images ...]
  node scripts/qatlas-pipeline.mjs plan --run ID [--executor agent|codex]
  node scripts/qatlas-pipeline.mjs generate --run ID [--executor agent|codex]
  node scripts/qatlas-pipeline.mjs review --run ID
  node scripts/qatlas-pipeline.mjs status [--run ID]
  node scripts/qatlas-pipeline.mjs auto [--rounds N] [--executor agent|codex] [--max N]

Stages:
  discover  query QAtlas, exclude papers already in the wiki, download candidates into .qatlas-cache/papers
  plan      render work-order.md and validate editorial-plan.json against the schema
  generate  render the generation work order and verify the produced pages pass the content gate
  review    run content gate, TypeScript, tests, and production build; write review.json
  status    inspect a run's artifacts
  auto      self-driving loop: pick a topic from the latest main, discover, plan, generate,
            review; commit and push main after a clean review. Topic history and the adaptive
            batch size live in the autodiscovery state file (.qatlas-cache/autodiscovery-state.json).

editorial-plan.json is written by the planning agent (the calling agent, or codex with --executor codex).
All run artifacts live under .qatlas-cache/runs/<run-id>/ (Git-ignored).`)
}

async function main() {
  const { command, options } = parseArguments(process.argv.slice(2))
  if (command === "discover") return commandDiscover(options)
  if (command === "plan") return commandPlan(options)
  if (command === "generate") return commandGenerate(options)
  if (command === "review") return commandReview(options)
  if (command === "status") return commandStatus(options)
  if (command === "run") return commandRun(options)
  if (command === "auto") return commandAuto(options)
  printHelp()
}

main().catch((error) => {
  console.error(`QAtlas pipeline failed: ${error instanceof Error ? error.message : String(error)}`)
  process.exitCode = 1
})
