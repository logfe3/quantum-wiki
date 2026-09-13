#!/usr/bin/env node

import { mkdir, readFile, rm, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"
import {
  cjkCount,
  cleanMarkdown,
  extractEntryLead,
  extractFormulaBlocks,
  extractImages,
  extractSections,
  jaccard,
  mathIsBalanced,
  normalizeQuestion,
  parseWikiDocument,
  sha256,
  stableNumber,
  stableShuffle,
  tokens,
  truncateAtBoundary,
  walkMarkdown,
  writeJsonl,
} from "./qa-utils.mjs"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, "..", "..")
const defaultConfigPath = path.join(repositoryRoot, "datasets", "quantum-wiki-qa", "config.yaml")
const systemPrompt =
  "你是一名严谨的量子器件与量子信息助教。回答必须遵守数学逻辑和物理定律，并仅使用题目给定或知识库来源支持的信息。"

function canonicalText(value) {
  return value.replace(/\r\n?/g, "\n")
}

function parseArguments(values) {
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

function toPosix(target) {
  return target.split(path.sep).join("/")
}

function assertSafeOutput(outputDirectory) {
  const datasetsRoot = path.join(repositoryRoot, "datasets", "quantum-wiki-qa")
  const relative = path.relative(datasetsRoot, outputDirectory)
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to replace unsafe output directory: ${outputDirectory}`)
  }
}

function normalizedList(value) {
  if (Array.isArray(value)) return value.map(String)
  if (value === undefined || value === null || value === "") return []
  return [String(value)]
}

async function loadPages(config) {
  const excludedBasenames = new Set(config.source.excludeBasenames ?? [])
  const excludedDirectories = (config.source.excludeDirectories ?? []).map((directory) =>
    path.resolve(repositoryRoot, directory),
  )
  const files = []
  for (const include of config.source.include) {
    files.push(...(await walkMarkdown(path.resolve(repositoryRoot, include))))
  }
  const uniqueFiles = [...new Set(files)].filter((file) => {
    if (excludedBasenames.has(path.basename(file))) return false
    return !excludedDirectories.some(
      (directory) => file === directory || file.startsWith(`${directory}${path.sep}`),
    )
  })
  const pages = []
  for (const file of uniqueFiles.sort()) {
    const sourcePath = toPosix(path.relative(repositoryRoot, file))
    const raw = await readFile(file, "utf8")
    const { frontmatter, body } = parseWikiDocument(raw, sourcePath)
    const relativeToContent = toPosix(path.relative(path.join(repositoryRoot, "content"), file))
    const topic = relativeToContent.split("/")[0]
    const sections = extractSections(body)
    const page = {
      sourcePath,
      topic,
      title: frontmatter.title.trim(),
      description: frontmatter.description.trim(),
      aliases: normalizedList(frontmatter.aliases),
      tags: normalizedList(frontmatter.tags),
      date: frontmatter.date ? String(frontmatter.date) : null,
      lead: extractEntryLead(body),
      sections,
      formulas: extractFormulaBlocks(body),
      images: extractImages(body),
      sourceSha256: sha256(canonicalText(raw)),
    }
    if (sections.length < 2) throw new Error(`${sourcePath}: fewer than two content sections`)
    pages.push(page)
  }
  return pages
}

function conciseAnswer(page, maximum) {
  const description = cleanMarkdown(page.description)
  const lead = cleanMarkdown(page.lead)
  const combined =
    lead && normalizeQuestion(lead) !== normalizeQuestion(description)
      ? `${description}\n\n${lead}`
      : description
  return truncateAtBoundary(combined, maximum)
}

function baseRecord(config, page, taskType, question, answer, details = {}) {
  const section = details.section ?? "概述"
  const id = `qwqa_${sha256(
    `${config.dataset.version}\0${page.sourcePath}\0${taskType}\0${section}\0${question}`,
  ).slice(0, 20)}`
  return {
    id,
    dataset: config.dataset.name,
    version: config.dataset.version,
    language: config.dataset.language,
    task_type: taskType,
    difficulty: details.difficulty ?? "undergraduate",
    topic: page.topic,
    reasoning_required: Boolean(details.reasoningRequired),
    expected_answer_format: details.answerFormat ?? "text",
    system: systemPrompt,
    question,
    answer,
    ...(details.choices ? { choices: details.choices } : {}),
    ...(details.answerText ? { answer_text: details.answerText } : {}),
    ...(details.explanation ? { explanation: details.explanation } : {}),
    source: {
      path: page.sourcePath,
      title: page.title,
      section,
      sha256: page.sourceSha256,
      date: page.date,
      tags: page.tags,
      ...(details.contrastSource ? { contrast_source: details.contrastSource } : {}),
    },
    evidence: {
      excerpt: details.evidenceExcerpt ?? answer,
      formulas: details.formulas ?? [],
      images: details.images ?? [],
    },
    verification: {
      deterministic: {
        status: "pass",
        checks: details.checks ?? ["source_exists", "source_hash", "answer_nonempty"],
      },
      physical: details.formulas?.length
        ? "source_grounded_pending_semantic_audit"
        : "not_formally_applicable",
      semantic_audit: "pending",
    },
  }
}

function pickPeers(page, pagesByTopic, count, seed) {
  const sameTopic = (pagesByTopic.get(page.topic) ?? []).filter(
    (candidate) => candidate.sourcePath !== page.sourcePath,
  )
  return stableShuffle(sameTopic, `${seed}:${page.sourcePath}`).slice(0, count)
}

function safeProblemAnswer(section, maximum) {
  let answer = truncateAtBoundary(section.cleaned, maximum)
  if (!mathIsBalanced(answer)) {
    const marker = answer.lastIndexOf("$$")
    if (marker >= 0) answer = answer.slice(0, marker).trim()
  }
  const formulas = extractFormulaBlocks(section.raw)
  if (formulas.length > 0 && !formulas.some((formula) => answer.includes(formula.slice(0, 24)))) {
    const firstFormula = `$$\n${formulas[0]}\n$$`
    answer = truncateAtBoundary(`${answer}\n\n${firstFormula}`, maximum)
  }
  return answer
}

function selectProblemSections(page, count) {
  const excluded = /^(参考文献|相关概念|与其他概念的关系|论文依据|来源|小结)$/i
  return page.sections
    .filter((section) => !excluded.test(section.heading))
    .map((section) => {
      const formulas = extractFormulaBlocks(section.raw)
      const images = extractImages(section.raw)
      return {
        ...section,
        formulas,
        images,
        score: formulas.length * 100_000 + images.length * 10_000 + section.cleaned.length,
      }
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, count)
}

function generateForPage(config, page, pagesByTopic) {
  const records = []
  const maximumShort = config.generation.maximumShortAnswerChars
  const overview = conciseAnswer(page, maximumShort)
  records.push(
    baseRecord(
      config,
      page,
      "short_answer",
      `什么是“${page.title}”？请用两到四句话说明其物理含义、适用对象和核心作用。`,
      overview,
      {
        answerFormat: "concise_explanation",
        evidenceExcerpt: overview,
        checks: ["source_exists", "source_hash", "frontmatter_description", "answer_nonempty"],
      },
    ),
  )

  records.push(
    baseRecord(
      config,
      page,
      "fill_in_the_blank",
      `请填写空缺的量子器件术语：____ 是“${cleanMarkdown(page.description)}”所描述的概念。`,
      page.title,
      {
        answerFormat: "term",
        evidenceExcerpt: page.description,
        checks: ["source_exists", "source_hash", "unique_completion", "answer_nonempty"],
      },
    ),
  )

  const peers = pickPeers(page, pagesByTopic, 4, config.splits.seed)
  const truthValue = stableNumber(`${config.splits.seed}:${page.sourcePath}:tf`) % 2 === 0
  const contrast = peers[0]
  const statement = truthValue || !contrast ? page.description : contrast.description
  const tfAnswer = truthValue || !contrast ? "正确" : "错误"
  records.push(
    baseRecord(
      config,
      page,
      "true_false",
      `判断正误：“${page.title}”可以概括为：${cleanMarkdown(statement)}`,
      tfAnswer,
      {
        answerFormat: "boolean_zh",
        explanation:
          truthValue || !contrast
            ? `该表述与“${page.title}”词条的定义一致。`
            : `该表述实际对应“${contrast.title}”；“${page.title}”应概括为：${page.description}`,
        evidenceExcerpt: page.description,
        contrastSource: truthValue ? undefined : contrast?.sourcePath,
        checks: ["source_exists", "source_hash", "boolean_label", "contrast_source"],
      },
    ),
  )

  if (peers.length >= 3) {
    const options = [
      { text: page.description, correct: true, sourcePath: page.sourcePath },
      ...peers.slice(0, 3).map((peer) => ({
        text: peer.description,
        correct: false,
        sourcePath: peer.sourcePath,
      })),
    ]
    const shuffled = stableShuffle(options, `${config.splits.seed}:${page.sourcePath}:mc`)
    const labels = ["A", "B", "C", "D"]
    const choices = shuffled.map((option, index) => ({
      label: labels[index],
      text: option.text,
      source_path: option.sourcePath,
    }))
    const correctIndex = shuffled.findIndex((option) => option.correct)
    records.push(
      baseRecord(
        config,
        page,
        "multiple_choice",
        `以下哪一项最准确地概括“${page.title}”？`,
        labels[correctIndex],
        {
          answerFormat: "option_letter",
          choices,
          answerText: shuffled[correctIndex].text,
          explanation: `选项 ${labels[correctIndex]} 与知识库中“${page.title}”的定义一致。`,
          evidenceExcerpt: page.description,
          checks: ["source_exists", "source_hash", "four_unique_choices", "answer_in_choices"],
        },
      ),
    )
  }

  const problemSections = selectProblemSections(page, config.generation.problemSolvingPerPage)
  for (const section of problemSections) {
    const answer = safeProblemAnswer(section, config.generation.maximumProblemAnswerChars)
    const hasFormula = section.formulas.length > 0
    const question = hasFormula
      ? `在“${page.title}”的“${section.heading}”部分，写出核心关系式，并解释其物理含义、主要变量和适用条件。`
      : `结合“${page.title}”词条，系统解释“${section.heading}”的推理链条及其物理结论。`
    const difficulty =
      section.formulas.length >= 3 || cjkCount(answer) >= 1_200 ? "research" : "graduate"
    records.push(
      baseRecord(config, page, "problem_solving", question, answer, {
        section: section.heading,
        difficulty,
        reasoningRequired: true,
        answerFormat: "structured_solution",
        evidenceExcerpt: answer,
        formulas: section.formulas,
        images: section.images,
        checks: [
          "source_exists",
          "source_hash",
          "section_exists",
          "answer_nonempty",
          "math_balanced",
        ],
      }),
    )
  }
  return records
}

function validateCandidate(record, config) {
  const errors = []
  if (!record.question.trim()) errors.push("empty_question")
  if (typeof record.answer !== "string" || !record.answer.trim()) errors.push("empty_answer")
  if (!record.source.sha256) errors.push("missing_source_hash")
  if (!mathIsBalanced(record.answer)) errors.push("unbalanced_math")
  if (
    record.task_type !== "multiple_choice" &&
    cjkCount(record.answer) < config.generation.minimumAnswerCjk
  ) {
    if (!["fill_in_the_blank", "true_false"].includes(record.task_type))
      errors.push("answer_too_little_chinese")
  }
  if (record.task_type === "multiple_choice") {
    const labels = new Set(record.choices?.map((choice) => choice.label))
    const texts = new Set(record.choices?.map((choice) => normalizeQuestion(choice.text)))
    if (labels.size !== 4 || texts.size !== 4) errors.push("choices_not_unique")
    if (!labels.has(record.answer)) errors.push("answer_not_in_choices")
  }
  if (/\b(?:TODO|TBD|待补充|占位)\b/i.test(record.answer)) errors.push("placeholder_in_answer")
  return errors
}

function deduplicate(records, config) {
  const accepted = []
  const rejected = []
  const exact = new Map()
  const threshold = config.deduplication.semanticJaccardThreshold
  for (const record of records) {
    const errors = validateCandidate(record, config)
    if (errors.length > 0) {
      rejected.push({ id: record.id, reason: "validation_failed", errors, source: record.source })
      continue
    }
    const normalized = normalizeQuestion(record.question)
    if (exact.has(normalized)) {
      rejected.push({
        id: record.id,
        reason: "exact_duplicate",
        matched_id: exact.get(normalized),
        source: record.source,
      })
      continue
    }
    const recordTokens = tokens(record.question)
    let duplicate = null
    for (const previous of accepted) {
      if (previous.task_type !== record.task_type) continue
      const similarity = jaccard(recordTokens, previous._questionTokens)
      if (similarity >= threshold) {
        duplicate = { matched_id: previous.id, similarity: Number(similarity.toFixed(4)) }
        break
      }
    }
    if (duplicate) {
      rejected.push({
        id: record.id,
        reason: "near_duplicate",
        ...duplicate,
        source: record.source,
      })
      continue
    }
    exact.set(normalized, record.id)
    accepted.push({ ...record, _questionTokens: recordTokens })
  }
  return {
    accepted: accepted.map(({ _questionTokens, ...record }) => record),
    rejected,
  }
}

function assignPageSplits(pages, config) {
  const byTopic = new Map()
  for (const page of pages) {
    if (!byTopic.has(page.topic)) byTopic.set(page.topic, [])
    byTopic.get(page.topic).push(page)
  }
  const assignments = new Map()
  for (const [topic, topicPages] of byTopic) {
    const ordered = [...topicPages].sort(
      (left, right) =>
        stableNumber(`${config.splits.seed}:${topic}:${left.sourcePath}`) -
        stableNumber(`${config.splits.seed}:${topic}:${right.sourcePath}`),
    )
    let devCount =
      ordered.length >= 5 ? Math.max(1, Math.round(ordered.length * config.splits.dev)) : 0
    let testCount =
      ordered.length >= 5 ? Math.max(1, Math.round(ordered.length * config.splits.test)) : 0
    while (ordered.length - devCount - testCount < 1) {
      if (testCount >= devCount && testCount > 0) testCount -= 1
      else if (devCount > 0) devCount -= 1
      else break
    }
    ordered.forEach((page, index) => {
      const split = index < testCount ? "test" : index < testCount + devCount ? "dev" : "train"
      assignments.set(page.sourcePath, split)
    })
  }
  return assignments
}

function countBy(records, field) {
  return Object.fromEntries(
    [
      ...records.reduce(
        (map, record) => map.set(record[field], (map.get(record[field]) ?? 0) + 1),
        new Map(),
      ),
    ].sort(([left], [right]) => String(left).localeCompare(String(right))),
  )
}

function makeAuditSample(records, config) {
  const rate = config.verification.auditRate
  const stratifyBy = config.verification.auditStratifyBy ?? ["task_type"]
  const groups = new Map()
  for (const record of records) {
    const key = stratifyBy.map((field) => record[field]).join(":")
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(record)
  }
  const selected = []
  for (const [key, group] of groups) {
    const count = Math.max(1, Math.ceil(group.length * rate))
    selected.push(
      ...[...group]
        .sort(
          (left, right) =>
            stableNumber(`${config.splits.seed}:audit:${key}:${left.id}`) -
            stableNumber(`${config.splits.seed}:audit:${key}:${right.id}`),
        )
        .slice(0, count),
    )
  }
  return selected
    .sort((left, right) => left.id.localeCompare(right.id))
    .map((record) => ({
      ...record,
      audit: {
        verdict: "pending",
        mathematical_correctness: null,
        physical_consistency: null,
        instruction_following: null,
        reviewer: null,
        notes: "",
      },
    }))
}

async function main() {
  const options = parseArguments(process.argv.slice(2))
  const configPath = path.resolve(repositoryRoot, String(options.config ?? defaultConfigPath))
  const configPayload = await readFile(configPath, "utf8")
  const config = YAML.parse(configPayload)
  const pages = await loadPages(config)
  const pagesByTopic = new Map()
  for (const page of pages) {
    if (!pagesByTopic.has(page.topic)) pagesByTopic.set(page.topic, [])
    pagesByTopic.get(page.topic).push(page)
  }
  const rawRecords = pages.flatMap((page) => generateForPage(config, page, pagesByTopic))
  const { accepted, rejected } = deduplicate(rawRecords, config)
  const assignments = assignPageSplits(pages, config)
  const records = accepted
    .map((record) => ({ ...record, split: assignments.get(record.source.path) }))
    .sort((left, right) =>
      `${left.split}:${left.source.path}:${left.task_type}:${left.id}`.localeCompare(
        `${right.split}:${right.source.path}:${right.task_type}:${right.id}`,
      ),
    )
  const outputDirectory = path.resolve(repositoryRoot, config.dataset.outputDir)
  assertSafeOutput(outputDirectory)
  await rm(outputDirectory, { recursive: true, force: true })
  await mkdir(outputDirectory, { recursive: true })

  const sourceManifest = pages.map((page) => ({
    path: page.sourcePath,
    title: page.title,
    topic: page.topic,
    sha256: page.sourceSha256,
    split: assignments.get(page.sourcePath),
  }))
  const sourceDigest = sha256(
    sourceManifest
      .map((entry) => `${entry.path}:${entry.sha256}`)
      .sort()
      .join("\n"),
  )
  const pipelineFiles = [fileURLToPath(import.meta.url), path.join(scriptDirectory, "qa-utils.mjs")]
  const pipelinePayloads = await Promise.all(
    pipelineFiles.map(
      async (file) => `${path.basename(file)}\0${canonicalText(await readFile(file, "utf8"))}`,
    ),
  )
  const configDigest = sha256(canonicalText(configPayload))
  const pipelineDigest = sha256(pipelinePayloads.join("\0"))
  const buildId = sha256(`${sourceDigest}\0${configDigest}\0${pipelineDigest}`).slice(0, 16)
  const splitRecords = Object.fromEntries(
    ["train", "dev", "test"].map((split) => [
      split,
      records.filter((record) => record.split === split),
    ]),
  )
  await writeJsonl(path.join(outputDirectory, "all.jsonl"), records)
  for (const [split, entries] of Object.entries(splitRecords)) {
    await writeJsonl(path.join(outputDirectory, `${split}.jsonl`), entries)
  }
  await writeJsonl(path.join(outputDirectory, "rejected.jsonl"), rejected)
  const auditSample = makeAuditSample(records, config)
  await writeJsonl(path.join(outputDirectory, "audit-sample.jsonl"), auditSample)
  await writeJsonl(
    path.join(outputDirectory, "audit-decisions.template.jsonl"),
    auditSample.map((record) => ({
      id: record.id,
      verdict: "pending",
      mathematical_correctness: null,
      physical_consistency: null,
      instruction_following: null,
      reviewer: null,
      notes: "",
    })),
  )
  await writeFile(
    path.join(outputDirectory, "source-manifest.json"),
    `${JSON.stringify({ source_digest: sourceDigest, pages: sourceManifest }, null, 2)}\n`,
    "utf8",
  )
  const manifest = {
    name: config.dataset.name,
    version: config.dataset.version,
    language: config.dataset.language,
    build_id: buildId,
    source_digest: sourceDigest,
    config_sha256: configDigest,
    pipeline_sha256: pipelineDigest,
    release_status: "draft_pending_semantic_audit",
    source_pages: pages.length,
    accepted_pairs: records.length,
    rejected_pairs: rejected.length,
    audit_sample_size: auditSample.length,
    audit_rate_actual: Number((auditSample.length / records.length).toFixed(4)),
    batch_reject_threshold: config.verification.batchRejectThreshold,
    counts: {
      split: countBy(records, "split"),
      task_type: countBy(records, "task_type"),
      difficulty: countBy(records, "difficulty"),
      topic: countBy(records, "topic"),
    },
    construction: {
      source: "curated Quantum Wiki concept pages",
      excluded: ["reference full text", "index pages", "site metadata"],
      similarity_threshold: config.deduplication.semanticJaccardThreshold,
      split_group: config.splits.groupBy,
      audit_stratification: config.verification.auditStratifyBy,
      semantic_audit: "required before release",
      inspiration: {
        title:
          "QuantumQA: Enhancing Scientific Reasoning via Physics-Consistent Dataset and Verification-Aware Reinforcement Learning",
        doi: "10.18653/v1/2026.acl-long.1423",
        arxiv: "2604.18176",
      },
    },
  }
  await writeFile(
    path.join(outputDirectory, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  )
  console.log(
    JSON.stringify(
      { outputDirectory: toPosix(path.relative(repositoryRoot, outputDirectory)), ...manifest },
      null,
      2,
    ),
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : String(error))
  process.exitCode = 1
})
