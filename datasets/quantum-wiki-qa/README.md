# Quantum Wiki QA

`quantum-wiki-qa` 是从本仓库中文量子器件 Wiki 词条构建的、可追溯的问答型数据集。首版用于验证从知识库到训练/评测数据的完整流程，不复制参考论文全文，也不复制 QuantumQA 的数据样本。

> [!IMPORTANT]
> `v0.1.0` 当前状态是 `draft_pending_semantic_audit`。自动校验已通过，但完成抽样物理一致性审核前，不应标记为正式发布版。

## 当前快照

| 指标               |          数量 |
| ------------------ | ------------: |
| Wiki 来源页面      |            91 |
| 接受的 Q/A         |           509 |
| 生成后拒绝的候选   |            37 |
| 人工审核样本       |   27（5.30%） |
| train / dev / test | 411 / 48 / 50 |

题型分布：简答题 79、填空题 91、判断题 74、选择题 90、问题求解题 175。

栏目覆盖：fundamentals 94、materials-devices 65、qubit-control 144、circuit-qed 81、readout-measurement 53、scaling-automation 72。来源范围扫描整个 `content` 目录，但量子点范围门禁只允许六个既有栏目，并排除 `index.md`、`about.md`、`content/references` 与 `content/assets`。纯超导比特、NV 色心、玻色腔编码等相邻平台不会进入数据集。

## 设计原则

本项目借鉴 [QuantumQA（ACL Anthology）](https://aclanthology.org/2026.acl-long.1423/) 及其 [arXiv 版本](https://arxiv.org/abs/2604.18176) 的三项思路：覆盖多种科学问答任务、让复杂题保留可检查的推导与公式、结合确定性检查和语义/物理审核。这里采用的是适合本 Wiki 的轻量实现，并非对论文数据集的复刻。

- 五种任务：`short_answer`、`fill_in_the_blank`、`true_false`、`multiple_choice`、`problem_solving`。
- 答案只由 Wiki 正文、词条元数据及同栏目干扰项构造；`content/references/**` 中的论文全文明确排除。
- 每条记录保存来源路径、章节、SHA-256、证据摘录、公式与插图引用，可回查到原始词条。
- train/dev/test 按 `source_path` 分组并按栏目分层，同一词条不会跨集合，减少内容泄漏。
- 问题使用 0.85 的词元 Jaccard 阈值去除近重复项。
- 问题求解题保存的是可审阅的参考答案，不包含模型私有思维链。

## 目录与文件

配置、格式及构建工具：

- `config.yaml`：数据版本、来源范围、切分比例和质量阈值。
- `schema.json`：单条 Q/A 的 JSON Schema（Draft 2020-12）。
- `audit-decision.schema.json`：人工审核决定的 JSON Schema。
- `scripts/qa/build-wiki-qa.mjs`：确定性构建器。
- `scripts/qa/validate-wiki-qa.mjs`：数据、来源、切分和去重校验器。
- `scripts/qa/check-qa-audit.mjs`：人工审核完整性及批次发布门禁。

`v0.1.0/` 中的生成物：

- `all.jsonl`：全部接受记录。
- `train.jsonl`、`dev.jsonl`、`test.jsonl`：按来源页面隔离的三个集合。
- `rejected.jsonl`：候选被拒原因，不用于训练。
- `source-manifest.json`：来源页面、哈希与切分归属。
- `manifest.json`：版本、构建 ID、统计与发布状态。
- `audit-sample.jsonl`：按题型与难度分层抽取的审核样本，含完整题目和证据。
- `audit-decisions.template.jsonl`：只含样本 ID 和待填写审核字段的模板。

JSONL 每行是一条独立 JSON 对象。核心字段为 `question`、`answer`、`task_type`、`difficulty`、`source`、`evidence`、`verification` 和 `split`；选择题还包含 `choices`、`answer_text` 与 `explanation`，每个选项用 `source_path` 标记来源词条。完整约束以 [schema.json](./schema.json) 为准。

## 重建与自动校验

从仓库根目录运行：

```powershell
node scripts/qa/build-wiki-qa.mjs
node scripts/qa/validate-wiki-qa.mjs
node --test scripts/qa/qa-utils.test.mjs scripts/qa/check-qa-audit.test.mjs
```

构建器不写入当前时间，并把换行统一后再计算哈希，因此可跨 Windows 与 Linux 复现。`build_id` 同时绑定来源摘要、配置摘要和生成管线摘要；三者不变时会产生逐字节相同的输出。GitHub Actions 会重新生成数据并执行 `git diff --exit-code`，因此词条、配置或生成器已更新但数据集未同步时，拉取请求会失败。

## 人工语义与物理审核

1. 复制审核模板，保留原始模板不变：

   ```powershell
   New-Item -ItemType Directory -Force datasets/quantum-wiki-qa/audits
   Copy-Item datasets/quantum-wiki-qa/v0.1.0/audit-decisions.template.jsonl datasets/quantum-wiki-qa/audits/v0.1.0.jsonl
   ```

2. 依据 `audit-sample.jsonl` 中相同 `id` 的题目、答案、公式和来源逐项审核。把 `verdict` 改为 `pass` 或 `fail`，为下列三项填写 0 到 1 的分数，并填写审核人：

   - `mathematical_correctness`
   - `physical_consistency`
   - `instruction_following`

   `pass` 的三个分数都不得低于 0.8；`fail` 必须在 `notes` 中说明原因。

3. 执行发布门禁：

   ```powershell
   node scripts/qa/check-qa-audit.mjs
   ```

检查器要求 27 条样本全部审核。失败率超过配置中的 5% 时整批拒绝；未审核、重复 ID、未知 ID 或格式错误同样不能通过。结果写入 `datasets/quantum-wiki-qa/audits/0.1.0-report.json`。通过后仍应由仓库维护者确认授权和版本号，再修改发布状态或创建 Release。

## 已知限制

- `v0.1.0` 是规则驱动基线，问题表达相对模板化，不能替代专家编写的高难度原创题。
- “来源一致”只说明答案可在当前 Wiki 中追溯，并不自动证明 Wiki 本身没有物理错误。
- 图片目前以路径和图注记录，没有转成视觉问答样本。
- 公式做结构完整性和来源追踪检查；等价变形、量纲和极限情形仍需语义/物理审核。
- 数据集许可证暂记为 `pending-owner-review`。仓库代码的 MIT 许可证不自动决定 Wiki 派生数据的许可，正式发布前需由维护者确认内容权利与数据许可证。

## 量子点范围门禁

QAtlas 编辑计划必须标注 `quantum-dot-core` 或 `quantum-dot-enabling`，相关性不低于 0.7，并说明与量子点的直接联系。构建前会运行 `check:quantum-dot-scope`；不在允许栏目、没有明确量子点联系或试图新建栏目时直接失败。每次 Wiki 变更后必须重建本数据集，旧审核决定不会沿用到新的来源摘要。
