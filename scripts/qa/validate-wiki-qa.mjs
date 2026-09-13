#!/usr/bin/env node

import { readFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import katex from "katex"
import YAML from "yaml"
import {
  jaccard,
  mathIsBalanced,
  normalizeQuestion,
  readJsonl,
  sha256,
  tokens,
} from "./qa-utils.mjs"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, "..", "..")
const defaultConfigPath = path.join(repositoryRoot, "datasets", "quantum-wiki-qa", "config.yaml")

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
    } else options[key] = true
  }
  return options
}

function countBy(records, field) {
  const output = {}
  for (const record of records) output[record[field]] = (output[record[field]] ?? 0) + 1
  return Object.fromEntries(
    Object.entries(output).sort(([left], [right]) => left.localeCompare(right)),
  )
}

function sameJson(left, right) {
  return JSON.stringify(left) === JSON.stringify(right)
}

function requiredString(record, field, errors) {
  if (typeof record[field] !== "string" || !record[field].trim()) errors.push(`missing_${field}`)
}

function extractInlineFormulas(value) {
  const withoutDisplay = value.replace(/\$\$[\s\S]*?\$\$/g, "")
  return [...withoutDisplay.matchAll(/(?<!\\)\$([^$\r\n]+?)(?<!\\)\$/g)].map((match) => match[1])
}

function latexIsValid(value) {
  try {
    katex.renderToString(value, { throwOnError: true, strict: "ignore" })
    return true
  } catch {
    return false
  }
}

function validateRecord(record, config, sourceByPath) {
  const errors = []
  for (const field of [
    "id",
    "dataset",
    "version",
    "language",
    "task_type",
    "difficulty",
    "topic",
    "expected_answer_format",
    "system",
    "question",
    "answer",
    "split",
  ]) {
    requiredString(record, field, errors)
  }
  if (!/^qwqa_[a-f0-9]{20}$/.test(record.id ?? "")) errors.push("invalid_id")
  if (record.dataset !== config.dataset.name) errors.push("dataset_name_mismatch")
  if (record.version !== config.dataset.version) errors.push("dataset_version_mismatch")
  if (record.language !== config.dataset.language) errors.push("dataset_language_mismatch")
  if (typeof record.reasoning_required !== "boolean") errors.push("invalid_reasoning_flag")
  if (!config.generation.taskTypes.includes(record.task_type)) errors.push("unknown_task_type")
  if (!["undergraduate", "graduate", "research"].includes(record.difficulty)) {
    errors.push("unknown_difficulty")
  }
  if (!["train", "dev", "test"].includes(record.split)) errors.push("unknown_split")
  if (!record.source || typeof record.source !== "object") errors.push("missing_source")
  else {
    requiredString(record.source, "path", errors)
    requiredString(record.source, "title", errors)
    requiredString(record.source, "section", errors)
    requiredString(record.source, "sha256", errors)
    if (!/^[a-f0-9]{64}$/.test(record.source.sha256 ?? "")) errors.push("invalid_source_hash")
    if (
      record.source.path?.includes("/references/") ||
      path.basename(record.source.path ?? "") === "index.md"
    ) {
      errors.push("excluded_source_used")
    }
  }
  if (!record.evidence || typeof record.evidence !== "object") errors.push("missing_evidence")
  else {
    requiredString(record.evidence, "excerpt", errors)
    if (!Array.isArray(record.evidence.formulas)) errors.push("invalid_evidence_formulas")
    if (!Array.isArray(record.evidence.images)) errors.push("invalid_evidence_images")
  }
  if (record.verification?.deterministic?.status !== "pass") errors.push("deterministic_not_passed")
  if (!mathIsBalanced(record.answer)) errors.push("unbalanced_math")
  const formulas = [
    ...(record.evidence?.formulas ?? []),
    ...extractInlineFormulas(record.question ?? ""),
    ...extractInlineFormulas(record.answer ?? ""),
  ]
  if (formulas.some((formula) => !latexIsValid(formula))) errors.push("invalid_latex")
  if (/[�]|锟斤拷/.test(JSON.stringify(record))) errors.push("encoding_corruption")
  if (/\b(?:TODO|TBD|待补充|占位)\b/i.test(`${record.question}\n${record.answer}`)) {
    errors.push("placeholder")
  }
  if (record.task_type === "multiple_choice") {
    if (!Array.isArray(record.choices) || record.choices.length !== 4) errors.push("choice_count")
    const labels = new Set(record.choices?.map((choice) => choice.label))
    const texts = new Set(record.choices?.map((choice) => normalizeQuestion(choice.text)))
    const choiceSources = new Set(record.choices?.map((choice) => choice.source_path))
    if (["A", "B", "C", "D"].some((label) => !labels.has(label))) {
      errors.push("choice_labels")
    }
    if (texts.size !== 4 || choiceSources.size !== 4) errors.push("choice_uniqueness")
    if (!labels.has(record.answer)) errors.push("choice_answer")
    if (typeof record.answer_text !== "string" || !record.answer_text.trim()) {
      errors.push("missing_answer_text")
    }
    const selected = record.choices?.find((choice) => choice.label === record.answer)
    if (selected?.text !== record.answer_text) errors.push("choice_answer_text_mismatch")
    if (selected?.source_path !== record.source?.path) errors.push("choice_answer_source_mismatch")
    for (const choice of record.choices ?? []) {
      const source = sourceByPath.get(choice.source_path)
      if (!source) errors.push("choice_source_missing")
      else if (source.topic !== record.topic) errors.push("choice_source_topic_mismatch")
    }
  }
  if (record.task_type === "true_false" && !["正确", "错误"].includes(record.answer)) {
    errors.push("invalid_true_false_answer")
  }
  if (record.task_type === "true_false") {
    if (record.answer === "错误") {
      const contrast = sourceByPath.get(record.source?.contrast_source)
      if (!contrast) errors.push("false_statement_missing_contrast_source")
      else {
        if (contrast.path === record.source?.path) errors.push("contrast_source_is_primary")
        if (contrast.topic !== record.topic) errors.push("contrast_source_topic_mismatch")
      }
    }
    if (record.answer === "正确" && record.source?.contrast_source) {
      errors.push("true_statement_has_contrast_source")
    }
  }
  if (record.task_type === "fill_in_the_blank" && record.answer !== record.source?.title) {
    errors.push("fill_answer_title_mismatch")
  }
  if (record.task_type === "problem_solving" && record.reasoning_required !== true) {
    errors.push("problem_solving_without_reasoning_flag")
  }
  return errors
}

async function main() {
  const options = parseArguments(process.argv.slice(2))
  const configPath = path.resolve(repositoryRoot, String(options.config ?? defaultConfigPath))
  const configPayload = await readFile(configPath, "utf8")
  const config = YAML.parse(configPayload)
  const outputDirectory = path.resolve(repositoryRoot, config.dataset.outputDir)
  const manifest = JSON.parse(await readFile(path.join(outputDirectory, "manifest.json"), "utf8"))
  const sourceManifest = JSON.parse(
    await readFile(path.join(outputDirectory, "source-manifest.json"), "utf8"),
  )
  const records = await readJsonl(path.join(outputDirectory, "all.jsonl"))
  const splitFiles = Object.fromEntries(
    await Promise.all(
      ["train", "dev", "test"].map(async (split) => [
        split,
        await readJsonl(path.join(outputDirectory, `${split}.jsonl`)),
      ]),
    ),
  )
  const auditSample = await readJsonl(path.join(outputDirectory, "audit-sample.jsonl"))
  const auditTemplate = await readJsonl(
    path.join(outputDirectory, "audit-decisions.template.jsonl"),
  )

  const failures = []
  const sourceByPath = new Map(sourceManifest.pages.map((source) => [source.path, source]))
  const ids = new Set()
  const normalizedQuestions = new Set()
  const splitBySource = new Map()
  for (const record of records) {
    const recordErrors = validateRecord(record, config, sourceByPath)
    if (ids.has(record.id)) recordErrors.push("duplicate_id")
    ids.add(record.id)
    const normalized = normalizeQuestion(record.question)
    if (normalizedQuestions.has(normalized)) recordErrors.push("duplicate_question")
    normalizedQuestions.add(normalized)
    const priorSplit = splitBySource.get(record.source.path)
    if (priorSplit && priorSplit !== record.split) recordErrors.push("source_split_leakage")
    splitBySource.set(record.source.path, record.split)
    const declaredSource = sourceByPath.get(record.source.path)
    if (!declaredSource) recordErrors.push("source_missing_from_manifest")
    else {
      if (declaredSource.sha256 !== record.source.sha256) {
        recordErrors.push("record_source_hash_mismatch")
      }
      if (declaredSource.split !== record.split) recordErrors.push("record_source_split_mismatch")
      if (declaredSource.topic !== record.topic) recordErrors.push("record_source_topic_mismatch")
      if (declaredSource.title !== record.source.title)
        recordErrors.push("record_source_title_mismatch")
    }
    if (recordErrors.length > 0) failures.push({ id: record.id, errors: recordErrors })
  }

  for (const source of sourceManifest.pages) {
    const current = await readFile(path.join(repositoryRoot, source.path), "utf8")
    if (sha256(canonicalText(current)) !== source.sha256) {
      failures.push({ id: source.path, errors: ["stale_source_hash"] })
    }
    if (!splitBySource.has(source.path))
      failures.push({ id: source.path, errors: ["source_uncovered"] })
  }
  const digest = sha256(
    sourceManifest.pages
      .map((entry) => `${entry.path}:${entry.sha256}`)
      .sort()
      .join("\n"),
  )
  if (digest !== sourceManifest.source_digest || digest !== manifest.source_digest) {
    failures.push({ id: "manifest", errors: ["source_digest_mismatch"] })
  }
  const pipelineFiles = [
    path.join(scriptDirectory, "build-wiki-qa.mjs"),
    path.join(scriptDirectory, "qa-utils.mjs"),
  ]
  const pipelinePayloads = await Promise.all(
    pipelineFiles.map(
      async (file) => `${path.basename(file)}\0${canonicalText(await readFile(file, "utf8"))}`,
    ),
  )
  const configDigest = sha256(canonicalText(configPayload))
  const pipelineDigest = sha256(pipelinePayloads.join("\0"))
  const buildId = sha256(`${digest}\0${configDigest}\0${pipelineDigest}`).slice(0, 16)
  if (manifest.config_sha256 !== configDigest) {
    failures.push({ id: "manifest", errors: ["config_digest_mismatch"] })
  }
  if (manifest.pipeline_sha256 !== pipelineDigest) {
    failures.push({ id: "manifest", errors: ["pipeline_digest_mismatch"] })
  }
  if (manifest.build_id !== buildId) {
    failures.push({ id: "manifest", errors: ["build_id_mismatch"] })
  }

  for (const [split, entries] of Object.entries(splitFiles)) {
    const expected = records.filter((record) => record.split === split).map((record) => record.id)
    const actual = entries.map((record) => record.id)
    if (!sameJson(actual, expected))
      failures.push({ id: `${split}.jsonl`, errors: ["split_mismatch"] })
  }
  if (manifest.accepted_pairs !== records.length) {
    failures.push({ id: "manifest", errors: ["accepted_count_mismatch"] })
  }
  for (const [field, expected] of Object.entries({
    split: countBy(records, "split"),
    task_type: countBy(records, "task_type"),
    difficulty: countBy(records, "difficulty"),
    topic: countBy(records, "topic"),
  })) {
    if (!sameJson(manifest.counts[field], expected)) {
      failures.push({ id: "manifest", errors: [`${field}_counts_mismatch`] })
    }
  }

  const auditIds = new Set()
  for (const record of auditSample) {
    if (!ids.has(record.id))
      failures.push({ id: record.id, errors: ["audit_record_not_in_dataset"] })
    if (auditIds.has(record.id))
      failures.push({ id: record.id, errors: ["duplicate_audit_record"] })
    auditIds.add(record.id)
  }
  const auditStratifyBy = config.verification.auditStratifyBy ?? ["task_type"]
  const auditGroupKey = (record) => auditStratifyBy.map((field) => record[field]).join(":")
  const expectedAuditGroups = new Set(records.map(auditGroupKey))
  const actualAuditGroups = new Set(auditSample.map(auditGroupKey))
  for (const group of expectedAuditGroups) {
    if (!actualAuditGroups.has(group)) {
      failures.push({ id: "audit-sample", errors: [`missing_stratum_${group}`] })
    }
  }
  const expectedTemplate = auditSample.map((record) => ({
    id: record.id,
    verdict: "pending",
    mathematical_correctness: null,
    physical_consistency: null,
    instruction_following: null,
    reviewer: null,
    notes: "",
  }))
  if (!sameJson(auditTemplate, expectedTemplate)) {
    failures.push({ id: "audit-decisions.template.jsonl", errors: ["template_mismatch"] })
  }

  const threshold = config.deduplication.semanticJaccardThreshold
  for (let leftIndex = 0; leftIndex < records.length; leftIndex += 1) {
    const left = records[leftIndex]
    const leftTokens = tokens(left.question)
    for (let rightIndex = leftIndex + 1; rightIndex < records.length; rightIndex += 1) {
      const right = records[rightIndex]
      if (left.task_type !== right.task_type) continue
      const similarity = jaccard(leftTokens, tokens(right.question))
      if (similarity >= threshold) {
        failures.push({
          id: `${left.id}:${right.id}`,
          errors: [`near_duplicate_${similarity.toFixed(4)}`],
        })
      }
    }
  }

  if (failures.length > 0) {
    console.error(JSON.stringify({ status: "fail", failures: failures.slice(0, 100) }, null, 2))
    process.exitCode = 1
    return
  }
  console.log(
    JSON.stringify(
      {
        status: "pass",
        records: records.length,
        source_pages: sourceManifest.pages.length,
        audit_sample: auditSample.length,
        source_digest: digest,
        split_counts: countBy(records, "split"),
        task_counts: countBy(records, "task_type"),
      },
      null,
      2,
    ),
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : String(error))
  process.exitCode = 1
})
