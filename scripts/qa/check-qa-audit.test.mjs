import assert from "node:assert/strict"
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { spawnSync } from "node:child_process"
import test from "node:test"
import { readJsonl } from "./qa-utils.mjs"

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(scriptDirectory, "..", "..")
const checkerPath = path.join(scriptDirectory, "check-qa-audit.mjs")
const templatePath = path.join(
  repositoryRoot,
  "datasets",
  "quantum-wiki-qa",
  "v0.1.0",
  "audit-decisions.template.jsonl",
)

function serializeJsonl(records) {
  return `${records.map((record) => JSON.stringify(record)).join("\n")}\n`
}

async function runChecker(decisions) {
  const temporaryDirectory = await mkdtemp(path.join(os.tmpdir(), "quantum-wiki-qa-audit-"))
  const decisionsPath = path.join(temporaryDirectory, "decisions.jsonl")
  const reportPath = path.join(temporaryDirectory, "report.json")
  try {
    await writeFile(decisionsPath, serializeJsonl(decisions), "utf8")
    const result = spawnSync(
      process.execPath,
      [checkerPath, "--decisions", decisionsPath, "--report", reportPath],
      { cwd: repositoryRoot, encoding: "utf8" },
    )
    const report = JSON.parse(await readFile(reportPath, "utf8"))
    return { result, report }
  } finally {
    await rm(temporaryDirectory, { recursive: true, force: true })
  }
}

function reviewedDecision(record, verdict = "pass") {
  return {
    ...record,
    verdict,
    mathematical_correctness: verdict === "pass" ? 1 : 0.5,
    physical_consistency: verdict === "pass" ? 1 : 0.5,
    instruction_following: verdict === "pass" ? 1 : 0.5,
    reviewer: "automated-gate-test",
    notes: verdict === "fail" ? "Intentional failure used to test the batch threshold." : "",
  }
}

test("audit gate approves a complete sample with passing expert decisions", async () => {
  const template = await readJsonl(templatePath)
  const { result, report } = await runChecker(template.map((record) => reviewedDecision(record)))
  assert.equal(result.status, 0, result.stderr)
  assert.equal(report.status, "approved")
  assert.equal(report.reviewed, template.length)
  assert.equal(report.failed, 0)
})

test("audit gate rejects incomplete coverage", async () => {
  const template = await readJsonl(templatePath)
  const { result, report } = await runChecker(
    template.slice(1).map((record) => reviewedDecision(record)),
  )
  assert.equal(result.status, 1)
  assert.equal(report.status, "incomplete")
  assert.deepEqual(report.missing_ids, [template[0].id])
})

test("audit gate rejects a batch above the five-percent failure threshold", async () => {
  const template = await readJsonl(templatePath)
  const decisions = template.map((record, index) =>
    reviewedDecision(record, index < 2 ? "fail" : "pass"),
  )
  const { result, report } = await runChecker(decisions)
  assert.equal(result.status, 1)
  assert.equal(report.status, "rejected")
  assert.equal(report.failed, 2)
  assert.ok(report.failure_rate > report.batch_reject_threshold)
})
