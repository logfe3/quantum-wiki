#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"
import { readJsonl } from "./qa-utils.mjs"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, "..", "..")
const datasetRoot = path.join(repositoryRoot, "datasets", "quantum-wiki-qa")
const defaultConfigPath = path.join(datasetRoot, "config.yaml")
const scoreFields = ["mathematical_correctness", "physical_consistency", "instruction_following"]

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

function isScore(value) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 && value <= 1
}

function validateDecision(decision) {
  const errors = []
  if (typeof decision.id !== "string" || !decision.id.trim()) errors.push("missing_id")
  if (!["pending", "pass", "fail"].includes(decision.verdict)) errors.push("invalid_verdict")
  if (decision.verdict !== "pending") {
    for (const field of scoreFields) {
      if (!isScore(decision[field])) errors.push(`invalid_${field}`)
    }
    if (typeof decision.reviewer !== "string" || !decision.reviewer.trim()) {
      errors.push("missing_reviewer")
    }
    if (decision.verdict === "fail" && !(decision.notes ?? "").trim()) {
      errors.push("failed_item_requires_notes")
    }
    if (
      decision.verdict === "pass" &&
      scoreFields.some((field) => isScore(decision[field]) && decision[field] < 0.8)
    ) {
      errors.push("pass_score_below_0.8")
    }
  }
  return errors
}

async function readDecisions(target) {
  try {
    return await readJsonl(target)
  } catch (error) {
    if (error?.code === "ENOENT") return null
    throw error
  }
}

async function main() {
  const options = parseArguments(process.argv.slice(2))
  const configPath = path.resolve(repositoryRoot, String(options.config ?? defaultConfigPath))
  const config = YAML.parse(await readFile(configPath, "utf8"))
  const version = config.dataset.version
  const outputDirectory = path.resolve(repositoryRoot, config.dataset.outputDir)
  const decisionsPath = path.resolve(
    repositoryRoot,
    String(options.decisions ?? path.join(datasetRoot, "audits", `${version}.jsonl`)),
  )
  const reportPath = path.resolve(
    repositoryRoot,
    String(options.report ?? path.join(datasetRoot, "audits", `${version}-report.json`)),
  )
  const auditSample = await readJsonl(path.join(outputDirectory, "audit-sample.jsonl"))
  const decisions = await readDecisions(decisionsPath)

  if (decisions === null) {
    console.error(
      JSON.stringify(
        {
          status: "incomplete",
          error: "audit_decisions_missing",
          expected: path.relative(repositoryRoot, decisionsPath).split(path.sep).join("/"),
          template: path
            .relative(repositoryRoot, path.join(outputDirectory, "audit-decisions.template.jsonl"))
            .split(path.sep)
            .join("/"),
        },
        null,
        2,
      ),
    )
    process.exitCode = 1
    return
  }

  const sampleIds = new Set(auditSample.map((record) => record.id))
  const decisionsById = new Map()
  const invalid = []
  const unknownIds = []
  const duplicateIds = []
  for (const decision of decisions) {
    const errors = validateDecision(decision)
    if (errors.length > 0) invalid.push({ id: decision.id ?? null, errors })
    if (!sampleIds.has(decision.id)) unknownIds.push(decision.id)
    if (decisionsById.has(decision.id)) duplicateIds.push(decision.id)
    decisionsById.set(decision.id, decision)
  }

  const missingIds = [...sampleIds].filter((id) => !decisionsById.has(id))
  const pendingIds = [...sampleIds].filter((id) => decisionsById.get(id)?.verdict === "pending")
  const reviewed = [...sampleIds]
    .map((id) => decisionsById.get(id))
    .filter((decision) => decision && ["pass", "fail"].includes(decision.verdict))
  const failed = reviewed.filter((decision) => decision.verdict === "fail")
  const failureRate = reviewed.length === 0 ? null : failed.length / reviewed.length
  const structurallyComplete =
    invalid.length === 0 &&
    unknownIds.length === 0 &&
    duplicateIds.length === 0 &&
    missingIds.length === 0 &&
    pendingIds.length === 0
  const threshold = config.verification.batchRejectThreshold
  const status = !structurallyComplete
    ? "incomplete"
    : failureRate > threshold
      ? "rejected"
      : "approved"
  const report = {
    dataset: config.dataset.name,
    version,
    status,
    decision_file: path.relative(repositoryRoot, decisionsPath).split(path.sep).join("/"),
    sample_size: auditSample.length,
    reviewed: reviewed.length,
    passed: reviewed.length - failed.length,
    failed: failed.length,
    failure_rate: failureRate === null ? null : Number(failureRate.toFixed(4)),
    batch_reject_threshold: threshold,
    invalid,
    unknown_ids: unknownIds,
    duplicate_ids: duplicateIds,
    missing_ids: missingIds,
    pending_ids: pendingIds,
    generated_at: new Date().toISOString(),
  }

  await mkdir(path.dirname(reportPath), { recursive: true })
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8")
  const output = JSON.stringify(report, null, 2)
  if (status === "approved") console.log(output)
  else {
    console.error(output)
    process.exitCode = 1
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack : String(error))
  process.exitCode = 1
})
