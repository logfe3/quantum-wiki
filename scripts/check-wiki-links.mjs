#!/usr/bin/env node

import { existsSync } from "node:fs"
import { readdir, readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const contentRoot = path.join(repositoryRoot, "content")

async function walk(directory) {
  const output = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      if (entry.name !== "assets") output.push(...(await walk(target)))
    } else if (entry.isFile() && entry.name.endsWith(".md")) output.push(target)
  }
  return output
}

function wikiTarget(file) {
  return path.relative(contentRoot, file).split(path.sep).join("/").replace(/\.md$/, "")
}

async function main() {
  const files = await walk(contentRoot)
  const targets = new Set(files.map(wikiTarget))
  const basenames = new Set([...targets].map((target) => target.split("/").at(-1)))
  const failures = []

  for (const file of files) {
    const body = await readFile(file, "utf8")
    const relative = path.relative(repositoryRoot, file).split(path.sep).join("/")
    for (const match of body.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\\?\|[^\]]+)?\]\]/g)) {
      const raw = match[1].trim()
      let target = raw
        .replace(/^content\//, "")
        .replace(/\.md$/, "")
        .replace(/\\$/, "")
      if (target.startsWith("assets/") || target.includes("…")) continue
      const exists = targets.has(target) || (!target.includes("/") && basenames.has(target))
      if (!exists) failures.push({ file: relative, target: raw })
    }
    for (const match of body.matchAll(/!\[\[(assets\/[^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
      if (!existsSync(path.join(contentRoot, match[1]))) {
        failures.push({ file: relative, target: match[1], error: "missing_asset" })
      }
    }
  }

  if (failures.length > 0) {
    console.error(JSON.stringify({ status: "fail", failures }, null, 2))
    process.exitCode = 1
    return
  }
  console.log(JSON.stringify({ status: "pass", markdown_files: files.length }, null, 2))
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : String(error))
  process.exitCode = 1
})
