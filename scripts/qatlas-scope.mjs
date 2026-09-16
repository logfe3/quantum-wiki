const defaultConnectionTerms = [
  "quantum dot",
  "double quantum dot",
  "量子点",
  "双量子点",
  "spin qubit",
  "hole spin",
  "charge qubit",
  "自旋比特",
  "空穴自旋",
  "电荷比特",
  "charge sensor",
  "电荷传感",
  "qpc",
  "single-electron transistor",
  "单电子晶体管",
  "si/sige",
  "si-mos",
  "gaas/algaas",
  "strained germanium",
  "应变锗",
  "valley splitting",
  "谷劈裂",
]

function normalizedPath(value) {
  return String(value ?? "").replaceAll("\\", "/")
}

export function categoryFromTarget(targetPath) {
  const parts = normalizedPath(targetPath).split("/").filter(Boolean)
  return parts[0] === "content" ? (parts[1] ?? "") : ""
}

export function validatePlanScope(plan, config = {}) {
  const scope = config.scope ?? {}
  const minimum = Number(scope.minimumRelevance ?? 0.7)
  const allowedScopes = new Set(scope.allowedScopes ?? ["quantum-dot-core", "quantum-dot-enabling"])
  const allowedCategories = new Set(scope.allowedCategories ?? [])
  const errors = []

  for (const [index, entry] of plan.entries()) {
    if (entry.decision === "skip") continue
    const location = `plan[${index}] (${entry.paper_id})`
    if (!allowedScopes.has(entry.quantum_dot_scope)) {
      errors.push(`${location}: active decision must use an allowed quantum-dot scope`)
    }
    if (
      typeof entry.quantum_dot_relevance !== "number" ||
      !Number.isFinite(entry.quantum_dot_relevance) ||
      entry.quantum_dot_relevance < minimum
    ) {
      errors.push(`${location}: quantum_dot_relevance must be at least ${minimum}`)
    }
    if (
      typeof entry.quantum_dot_connection !== "string" ||
      entry.quantum_dot_connection.trim().length < 12
    ) {
      errors.push(`${location}: quantum_dot_connection must explicitly explain the connection`)
    }
    const category = categoryFromTarget(entry.target_path)
    if (!allowedCategories.has(category)) {
      errors.push(`${location}: target category "${category || "<missing>"}" is not allowed`)
    }
    if (entry.decision === "new_category" && config.publication?.allowNewCategories !== true) {
      errors.push(`${location}: new categories are disabled for the quantum-dot wiki`)
    }
  }
  return errors
}

export function validateContentScope(relativePath, frontmatter, body, config = {}) {
  const scope = config.scope ?? {}
  const allowedCategories = new Set(scope.allowedCategories ?? [])
  const category = categoryFromTarget(relativePath)
  const errors = []
  if (category === "references") return errors
  if (!allowedCategories.has(category)) {
    errors.push(`category "${category || "<missing>"}" is outside the quantum-dot scope`)
  }

  if (String(frontmatter.source ?? "").toLowerCase() !== "qatlas") return errors
  const terms = scope.connectionTerms ?? defaultConnectionTerms
  const searchable = [
    frontmatter.title,
    frontmatter.description,
    ...(Array.isArray(frontmatter.aliases) ? frontmatter.aliases : []),
    ...(Array.isArray(frontmatter.tags) ? frontmatter.tags : []),
    body,
  ]
    .filter(Boolean)
    .join("\n")
    .toLowerCase()
  if (!terms.some((term) => searchable.includes(String(term).toLowerCase()))) {
    errors.push("QAtlas content has no explicit quantum-dot connection")
  }
  return errors
}
