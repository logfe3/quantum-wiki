import { createHash } from "node:crypto"
import { readFile, readdir, writeFile } from "node:fs/promises"
import path from "node:path"
import YAML from "yaml"

export async function walkMarkdown(directory) {
  const output = []
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name)
    if (entry.isDirectory()) output.push(...(await walkMarkdown(target)))
    else if (entry.isFile() && entry.name.endsWith(".md")) output.push(target)
  }
  return output.sort()
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex")
}

export function parseWikiDocument(raw, sourcePath) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/)
  if (!match) throw new Error(`${sourcePath}: missing YAML frontmatter`)
  const frontmatter = YAML.parse(match[1]) ?? {}
  const body = raw.slice(match[0].length)
  if (typeof frontmatter.title !== "string" || !frontmatter.title.trim()) {
    throw new Error(`${sourcePath}: missing title`)
  }
  if (typeof frontmatter.description !== "string" || !frontmatter.description.trim()) {
    throw new Error(`${sourcePath}: missing description`)
  }
  return { frontmatter, body }
}

export function displayNameFromWikiTarget(target) {
  const leaf = target.split("/").at(-1) ?? target
  return leaf.replaceAll("-", " ")
}

export function cleanMarkdown(markdown) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/!\[\[[^\]]+\]\]/g, "")
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, label) =>
      String(label ?? displayNameFromWikiTarget(target)).trim(),
    )
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\)/g, "$1")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/?[a-zA-Z][^>]*>/g, "")
    .replace(/\\\*/g, "*")
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
}

export function extractEntryLead(body) {
  const match = body.match(/<div class="entry-lead">([\s\S]*?)<\/div>/)
  return match ? cleanMarkdown(match[1]) : ""
}

export function extractSections(body) {
  const sections = []
  const lines = body.split(/\r?\n/)
  let current = null
  for (const line of lines) {
    const heading = line.match(/^##\s+(.+?)\s*$/)
    if (heading) {
      if (current) {
        current.raw = current.lines.join("\n").trim()
        current.cleaned = cleanMarkdown(current.raw)
        sections.push(current)
      }
      current = { heading: cleanMarkdown(heading[1]), lines: [] }
      continue
    }
    if (current) current.lines.push(line)
  }
  if (current) {
    current.raw = current.lines.join("\n").trim()
    current.cleaned = cleanMarkdown(current.raw)
    sections.push(current)
  }
  return sections.filter((section) => section.cleaned.length > 0)
}

export function extractFormulaBlocks(markdown) {
  const blocks = []
  const expression = /\$\$\s*([\s\S]*?)\s*\$\$|```math\s*\r?\n([\s\S]*?)\r?\n```/g
  for (const match of markdown.matchAll(expression)) {
    const formula = String(match[1] ?? match[2] ?? "")
      .replace(/\\\*/g, "*")
      .trim()
    if (formula) blocks.push(formula)
  }
  return blocks
}

export function extractImages(markdown) {
  const lines = markdown.split(/\r?\n/)
  const images = []
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/)
    if (!match) continue
    let caption = ""
    for (let offset = index + 1; offset < Math.min(lines.length, index + 4); offset += 1) {
      const candidate = lines[offset].trim()
      if (!candidate) continue
      caption = cleanMarkdown(candidate.replace(/^\*|\*$/g, ""))
      break
    }
    images.push({ path: match[1], caption })
  }
  return images
}

export function truncateAtBoundary(text, maximum) {
  if (text.length <= maximum) return text
  const candidate = text.slice(0, maximum)
  const paragraph = candidate.lastIndexOf("\n\n")
  if (paragraph >= maximum * 0.55) return candidate.slice(0, paragraph).trim()
  const sentence = Math.max(candidate.lastIndexOf("。"), candidate.lastIndexOf("；"))
  if (sentence >= maximum * 0.55) return candidate.slice(0, sentence + 1).trim()
  return candidate.trim()
}

const stopWords = new Set([
  "什么",
  "如何",
  "根据",
  "词条",
  "概念",
  "以下",
  "一项",
  "描述",
  "正确",
  "核心",
  "物理",
  "the",
  "and",
  "for",
  "with",
  "from",
])

export function tokens(value) {
  const normalized = value.toLowerCase()
  const output = new Set()
  for (const word of normalized.match(/[a-z0-9α-ω]+/g) ?? []) {
    if (word.length > 1 && !stopWords.has(word)) output.add(word)
  }
  for (const sequence of normalized.match(/[\u3400-\u9fff]+/g) ?? []) {
    if (sequence.length === 1) output.add(sequence)
    for (let index = 0; index < sequence.length - 1; index += 1) {
      const gram = sequence.slice(index, index + 2)
      if (!stopWords.has(gram)) output.add(gram)
    }
  }
  return output
}

export function jaccard(left, right) {
  if (left.size === 0 || right.size === 0) return 0
  let intersection = 0
  for (const value of left) if (right.has(value)) intersection += 1
  return intersection / (left.size + right.size - intersection)
}

export function normalizeQuestion(question) {
  return question.toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, "")
}

export function stableNumber(value) {
  return Number.parseInt(sha256(value).slice(0, 12), 16)
}

export function stableShuffle(values, seed) {
  return [...values]
    .map((value, index) => ({
      value,
      score: stableNumber(`${seed}:${index}:${JSON.stringify(value)}`),
    }))
    .sort((left, right) => left.score - right.score)
    .map((entry) => entry.value)
}

export function mathIsBalanced(value) {
  const displayMarkers = (value.match(/\$\$/g) ?? []).length
  const mathFenceOpenings = (value.match(/```math\b/g) ?? []).length
  const completeMathFences = (value.match(/```math\s*\r?\n[\s\S]*?\r?\n```/g) ?? []).length
  const withoutDisplayMath = value.replace(/\$\$[\s\S]*?\$\$/g, "")
  const inlineMarkers = (withoutDisplayMath.match(/(?<!\\)\$(?!\$)/g) ?? []).length
  return (
    displayMarkers % 2 === 0 && inlineMarkers % 2 === 0 && mathFenceOpenings === completeMathFences
  )
}

export function cjkCount(value) {
  return (value.match(/[\u3400-\u9fff]/g) ?? []).length
}

export async function writeJsonl(target, records) {
  const payload = records.map((record) => JSON.stringify(record)).join("\n")
  await writeFile(target, payload ? `${payload}\n` : "", "utf8")
}

export async function readJsonl(target) {
  const payload = await readFile(target, "utf8")
  return payload
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line, index) => {
      try {
        return JSON.parse(line)
      } catch (error) {
        throw new Error(`${target}:${index + 1}: invalid JSON: ${error.message}`)
      }
    })
}
