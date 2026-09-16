import assert from "node:assert/strict"
import test from "node:test"
import { validateContentScope, validatePlanScope } from "./qatlas-scope.mjs"

const config = {
  scope: {
    minimumRelevance: 0.7,
    allowedScopes: ["quantum-dot-core", "quantum-dot-enabling"],
    allowedCategories: ["fundamentals", "circuit-qed"],
  },
  publication: { allowNewCategories: false },
}

test("accepts a high-relevance quantum-dot plan", () => {
  const errors = validatePlanScope(
    [
      {
        paper_id: "qa_example",
        decision: "new_entry",
        target_path: "content/fundamentals/example.md",
        quantum_dot_scope: "quantum-dot-core",
        quantum_dot_relevance: 0.9,
        quantum_dot_connection: "该论文直接研究双量子点中的电子输运。",
      },
    ],
    config,
  )
  assert.deepEqual(errors, [])
})

test("rejects off-topic, low-relevance, disallowed-category plans", () => {
  const errors = validatePlanScope(
    [
      {
        paper_id: "qa_transmon",
        decision: "new_category",
        target_path: "content/superconducting-qubits/transmon.md",
        quantum_dot_scope: "off-topic",
        quantum_dot_relevance: 0.1,
        quantum_dot_connection: "没有直接关系。",
      },
    ],
    config,
  )
  assert.ok(errors.some((error) => error.includes("allowed quantum-dot scope")))
  assert.ok(errors.some((error) => error.includes("at least 0.7")))
  assert.ok(errors.some((error) => error.includes("not allowed")))
  assert.ok(errors.some((error) => error.includes("new categories are disabled")))
})

test("allows an off-topic paper only when the plan skips it", () => {
  assert.deepEqual(
    validatePlanScope(
      [
        {
          paper_id: "qa_transmon",
          decision: "skip",
          quantum_dot_scope: "off-topic",
          quantum_dot_relevance: 0,
          quantum_dot_connection: "论文只研究 transmon，与量子点没有直接关系。",
        },
      ],
      config,
    ),
    [],
  )
})

test("requires QAtlas pages to state a quantum-dot connection", () => {
  assert.deepEqual(
    validateContentScope(
      "content/circuit-qed/example.md",
      { source: "QAtlas", title: "高阻抗腔", description: "增强量子点的电荷–光子耦合。" },
      "用于半导体自旋比特的远程耦合。",
      config,
    ),
    [],
  )
  assert.ok(
    validateContentScope(
      "content/circuit-qed/example.md",
      { source: "QAtlas", title: "玻色编码", description: "超导腔中的猫态编码。" },
      "本文只讨论 transmon 与超导腔。",
      config,
    ).some((error) => error.includes("no explicit quantum-dot connection")),
  )
})
