#!/usr/bin/env node

import { existsSync } from "node:fs"
import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")

function parseOptions(values) {
  const options = {}
  for (let index = 0; index < values.length; index += 1) {
    const value = values[index]
    if (!value.startsWith("--")) continue
    const key = value.slice(2)
    const next = values[index + 1]
    if (next && !next.startsWith("--")) {
      options[key] = next
      index += 1
    } else {
      options[key] = true
    }
  }
  return options
}

function required(options, key) {
  const value = options[key]
  if (!value || value === true) throw new Error(`Missing required --${key} value.`)
  return String(value)
}

function yamlString(value) {
  return JSON.stringify(String(value))
}

function stripLeadingTitle(markdown) {
  return markdown.replace(/^#\s+[^\r\n]+\r?\n+/, "").trimStart()
}

function ensureReferencesHeading(markdown) {
  if (/^## (?:参考文献|References)\s*$/im.test(markdown)) return markdown
  return markdown.replace(/\r?\n(?=\[1\]\s)/, "\n\n## References\n\n")
}

function referencedImageNames(markdown) {
  const names = new Set()
  const expression = /images\/([0-9a-f]{64}\.(?:jpg|jpeg|png|gif|webp))/gi
  for (const match of markdown.matchAll(expression)) names.add(match[1])
  return [...names]
}

function rewriteImages(markdown, slug) {
  const assetRoot = `assets/figures/references/${slug}`
  return markdown
    .replace(
      /!\[[^\]]*\]\(images\/([0-9a-f]{64}\.(?:jpg|jpeg|png|gif|webp))\)/gi,
      (_, name) => `![[${assetRoot}/${name}]]`,
    )
    .replace(
      /src=(["'])images\/([0-9a-f]{64}\.(?:jpg|jpeg|png|gif|webp))\1/gi,
      (_, quote, name) => `src=${quote}../${assetRoot}/${name}${quote}`,
    )
}

function trimTrailingWhitespace(markdown) {
  return markdown.replace(/[ \t]+$/gm, "")
}

async function main() {
  const options = parseOptions(process.argv.slice(2))
  const cacheDirectory = path.resolve(repositoryRoot, required(options, "cache"))
  const slug = required(options, "slug")
  const description = required(options, "description")
  const citation = required(options, "citation")
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("--slug must contain lowercase letters, digits, and hyphens only.")
  }

  const metadata = JSON.parse(await readFile(path.join(cacheDirectory, "metadata.json"), "utf8"))
  const originalMarkdown = await readFile(path.join(cacheDirectory, "paper.md"), "utf8")
  const imageNames = referencedImageNames(originalMarkdown)
  const sourceImageDirectory = path.join(cacheDirectory, "images")
  const targetImageDirectory = path.join(
    repositoryRoot,
    "content",
    "assets",
    "figures",
    "references",
    slug,
  )
  const targetFile = path.join(repositoryRoot, "content", "references", `${slug}.md`)
  if (existsSync(targetFile) && !options.overwrite) {
    throw new Error(
      `${path.relative(repositoryRoot, targetFile)} already exists; pass --overwrite to replace it.`,
    )
  }

  const cachedImages = new Set(
    existsSync(sourceImageDirectory) ? await readdir(sourceImageDirectory) : [],
  )
  const missingImages = imageNames.filter((name) => !cachedImages.has(name))
  if (missingImages.length > 0) {
    throw new Error(
      `${missingImages.length} referenced image(s) are missing from the cache. Re-run qatlas:fetch with --images referenced.`,
    )
  }
  await mkdir(targetImageDirectory, { recursive: true })
  for (const name of imageNames) {
    await copyFile(path.join(sourceImageDirectory, name), path.join(targetImageDirectory, name))
  }

  const aliases = [slug]
  if (metadata.arxiv_id) aliases.push(metadata.arxiv_id)
  const tags = String(options.tags ?? "参考文献,QAtlas")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean)
  const date = String(options.date ?? new Date().toISOString().slice(0, 10))
  const links = []
  if (metadata.arxiv_id) {
    links.push(`[arXiv:${metadata.arxiv_id}](https://arxiv.org/abs/${metadata.arxiv_id})`)
  }
  if (metadata.doi) links.push(`[DOI:${metadata.doi}](https://doi.org/${metadata.doi})`)
  links.push(`[QAtlas](https://qatlas.hfnl.app.chenzhaoyun.com/en/papers/${metadata.paper_id})`)
  const frontmatter = [
    "---",
    `title: ${yamlString(metadata.title)}`,
    `description: ${yamlString(description)}`,
    "aliases:",
    ...aliases.map((alias) => ` - ${yamlString(alias)}`),
    "tags:",
    ...tags.map((tag) => ` - ${yamlString(tag)}`),
    `date: ${date}`,
    "source: QAtlas",
    `qatlas_id: ${yamlString(metadata.paper_id)}`,
    `source_updated: ${yamlString(metadata.updated_at ?? date)}`,
    "---",
  ].join("\n")
  const body = trimTrailingWhitespace(
    rewriteImages(ensureReferencesHeading(stripLeadingTitle(originalMarkdown)), slug),
  )
  const document = `${frontmatter}\n\n<div class="entry-lead">${description}</div>\n\n> [!info] 文献信息\n> ${citation}\n> ${links.join(" · ")}\n> 原文由 QAtlas 从论文资源转换为机器可读 Markdown；公式与图注以正式出版物为准。\n\n## 全文\n\n${body.trim()}\n`
  await writeFile(targetFile, document, "utf8")
  console.log(
    JSON.stringify(
      {
        targetFile: path.relative(repositoryRoot, targetFile),
        copiedImages: imageNames.length,
        sourcePaperId: metadata.paper_id,
      },
      null,
      2,
    ),
  )
}

main().catch((error) => {
  console.error(
    `QAtlas reference import failed: ${error instanceof Error ? error.message : String(error)}`,
  )
  process.exitCode = 1
})
