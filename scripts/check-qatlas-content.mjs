#!/usr/bin/env node

import { existsSync } from "node:fs"
import { readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const contentRoot = path.join(repositoryRoot, "content")
const configPath = path.join(repositoryRoot, "qatlas.integration.yaml")

async function markdownFiles(entry) {
  const absolute = path.resolve(repositoryRoot, entry)
  const information = await stat(absolute)
  if (information.isFile()) return absolute.endsWith(".md") ? [absolute] : []
  const output = []
  for (const child of await readdir(absolute, { withFileTypes: true })) {
    const childPath = path.join(absolute, child.name)
    if (child.isDirectory()) output.push(...(await markdownFiles(childPath)))
    else if (child.isFile() && child.name.endsWith(".md")) output.push(childPath)
  }
  return output
}

function parseDocument(text, file) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) throw new Error(`${file}: missing YAML frontmatter`)
  return { frontmatter: YAML.parse(match[1]) ?? {}, body: text.slice(match[0].length) }
}

function hasDisplayFormula(body) {
  return /\$\$[\s\S]+?\$\$|```math\r?\n[\s\S]+?```/.test(body)
}

function hasVisual(body) {
  return /!\[\[[^\]]+\]\]|!\[[^\]]*\]\([^)]+\)|```mermaid\r?\n[\s\S]+?```/.test(body)
}

function internalLinkCount(body) {
  return [...body.matchAll(/\[\[[^\]]+\]\]/g)].length
}

function cjkCount(body) {
  return [...body].filter((character) => character >= "\u3400" && character <= "\u9fff").length
}

function embeddedAssets(body) {
  return [...body.matchAll(/!\[\[(assets\/[^\]|]+)(?:\|[^\]]+)?\]\]/g)].map((match) => match[1])
}

async function validateFile(file, rules) {
  const relative = path.relative(repositoryRoot, file).split(path.sep).join("/")
  const text = await readFile(file, "utf8")
  const { frontmatter, body } = parseDocument(text, relative)
  if (String(frontmatter.source ?? "").toLowerCase() !== "qatlas") return null

  const errors = []
  for (const key of ["title", "description", "tags", "date", "qatlas_id", "source_updated"]) {
    if (frontmatter[key] === undefined || frontmatter[key] === null || frontmatter[key] === "") {
      errors.push(`missing frontmatter field: ${key}`)
    }
  }
  if (!Array.isArray(frontmatter.tags) || frontmatter.tags.length < 2) {
    errors.push("frontmatter tags must contain at least two values")
  }
  if (!/<div class="entry-lead">[\s\S]+?<\/div>/.test(body)) {
    errors.push("missing entry-lead block")
  }
  if (rules.requireFormula && !hasDisplayFormula(body)) errors.push("missing display formula")
  if (rules.requireVisual && !hasVisual(body)) errors.push("missing image or Mermaid diagram")
  if (rules.requireInternalLinks && internalLinkCount(body) < 2) {
    errors.push("fewer than two internal wiki links")
  }
  const isReference = frontmatter.tags.includes("参考文献")
  const hasReferences = isReference
    ? /^## (?:参考文献|References)\s*$/im.test(body)
    : /^## 参考文献\s*$/m.test(body)
  if (rules.requireReferences && !hasReferences) {
    errors.push("missing references section")
  }
  if (rules.requireChineseExplanation && !isReference && cjkCount(body) < 800) {
    errors.push("Chinese explanation is shorter than 800 CJK characters")
  }
  if (/\]\(images\/|src=["']images\//.test(body)) {
    errors.push("contains an unrewritten QAtlas images/ path")
  }
  if (/\b(?:TODO|TBD|待补充|占位)\b/i.test(body)) errors.push("contains a draft placeholder")
  for (const asset of embeddedAssets(body)) {
    if (!existsSync(path.join(contentRoot, asset))) errors.push(`missing embedded asset: ${asset}`)
  }
  return { relative, errors }
}

async function main() {
  const config = YAML.parse(await readFile(configPath, "utf8")) ?? {}
  const rules = config.publication ?? {}
  const entries = process.argv.slice(2)
  const roots = entries.length > 0 ? entries : ["content"]
  const files = (await Promise.all(roots.map(markdownFiles))).flat()
  const results = (await Promise.all(files.map((file) => validateFile(file, rules)))).filter(
    Boolean,
  )
  if (results.length === 0) {
    console.log("No QAtlas-backed content found to validate.")
    return
  }
  let failures = 0
  for (const result of results) {
    if (result.errors.length === 0) {
      console.log(`✓ ${result.relative}`)
      continue
    }
    failures += 1
    console.error(`✗ ${result.relative}`)
    for (const error of result.errors) console.error(`  - ${error}`)
  }
  console.log(`Checked ${results.length} QAtlas-backed page(s); ${failures} failed.`)
  if (failures > 0) process.exitCode = 1
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 1
})
