#!/usr/bin/env node

import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"
import { validateContentScope } from "./qatlas-scope.mjs"

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const contentRoot = path.join(repositoryRoot, "content")

async function walk(directory) {
  const output = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (["assets", "references"].includes(entry.name)) continue
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) output.push(...(await walk(target)))
    else if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
      output.push(target)
    }
  }
  return output
}

function parseDocument(text, relative) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) throw new Error(`${relative}: missing YAML frontmatter`)
  return { frontmatter: YAML.parse(match[1]) ?? {}, body: text.slice(match[0].length) }
}

async function main() {
  const config = YAML.parse(
    await readFile(path.join(repositoryRoot, "qatlas.integration.yaml"), "utf8"),
  )
  const files = await walk(contentRoot)
  const failures = []
  let qatlasPages = 0
  for (const file of files) {
    const relative = path.relative(repositoryRoot, file).split(path.sep).join("/")
    if (relative === "content/about.md") continue
    const { frontmatter, body } = parseDocument(await readFile(file, "utf8"), relative)
    if (String(frontmatter.source ?? "").toLowerCase() === "qatlas") qatlasPages += 1
    const errors = validateContentScope(relative, frontmatter, body, config)
    if (errors.length > 0) failures.push({ file: relative, errors })
  }
  if (failures.length > 0) {
    console.error(JSON.stringify({ status: "fail", failures }, null, 2))
    process.exitCode = 1
    return
  }
  console.log(
    JSON.stringify(
      { status: "pass", concept_pages: files.length - 1, qatlas_pages: qatlasPages },
      null,
      2,
    ),
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : String(error))
  process.exitCode = 1
})
