# 内容生成工作单（QAtlas → Quantum Wiki）

你是本站（中文量子器件知识库）的内容生成 agent。编辑决策已定（见下方 editorial plan），请按决策**创建或修改 Wiki 页面**。这是一个人工审核流水线：不要提交、推送或合并任何 Git 操作。

本站严格定位为**半导体量子点百科**。只生成计划中 `quantum-dot-core` 或 `quantum-dot-enabling` 且相关性不低于 0.7 的活动决策；不得添加纯超导比特、NV 色心、玻色腔编码或其他仅与广义量子计算相关的内容。支撑技术必须在正文开头明确说明其对量子点实验的直接作用。

## 编辑决策（editorial-plan.json 内容）

```json
{{PLAN_JSON}}
```

## 论文资料

{{PAPERS_SECTION}}

## 现有 Wiki 索引摘要

```json
{{WIKI_INDEX_SUMMARY}}
```

## 页面内容硬性要求（概念页，逐条检查）

1. frontmatter 必含：`title`（中文）、`description`（中文一句话）、`aliases`、`tags`（≥2 个，第一个用栏目名）、`date`（今天）、`source: QAtlas`、`qatlas_id`（qa_...）、`source_updated`（论文 metadata 的 updated_at）。
2. 正文以 `<div class="entry-lead">……</div>` 开头，两三句中文概括物理图像，风格对照现有词条。
3. 用中文**综合**解释，不能把论文摘要或全文直接当词条；数值、公式和历史性结论必须能追溯到缓存论文（paper.md / figures.json）。
4. 至少一个 `$$…$$` 展示公式，并逐个说明公式中符号的物理含义（公式主题见决策里的 `formula_topics`）。
5. 至少一幅图：优先复用 QAtlas 论文图，其次 Mermaid 图解。图片从缓存目录复制到 `content/assets/figures/<英文-slug>/`，正文用 `![[assets/figures/<英文-slug>/<文件名>]]` 嵌入；**每幅图下面加一行斜体说明**，解释坐标、变量和结论，并标注图源（论文 + fig_no）。不能只贴图不解释。
6. 至少两个有语义的站内双链 `[[content/路径|显示名]]`，指向 Wiki 索引里真实存在的页面。
7. 末尾 `## 参考文献` 一节，引用缓存论文（作者、年份、标题、期刊/DOI/arXiv），风格对照现有词条。
8. 中文正文不少于 800 个 CJK 字符。
9. 不留占位文本（TODO/TBD/待补充/占位），不留未重写的 `images/...` 路径。
10. `supplement` 决策：修改已有词条时保持原结构，只插入或深化论文支持的内容，并按 `links_to_update` 同步相关页面的反向链接。
11. `new_category` 决策：除词条外，同步更新 `content/index.md`、新栏目 `index.md`、`quartz.config.yaml`、`content/references/index.md`、`content/about.md`、`README.md`（对照现有栏目的写法）。

## 论文图复制说明

- 缓存图片在每篇论文的缓存目录 `images/` 子目录下（文件名为 64 位十六进制 hash）。
- `figures.json` 的每个条目有 `fig_no`、`caption`、`images[].name`；决策里 `figure_numbers` 指向的图必须复制进 `content/assets/figures/<英文-slug>/` 后再嵌入。
- 若需要的图不在缓存里，运行 `npm run qatlas:fetch -- --id <论文标识> --images <fig_no 列表>` 补抓后再复制。

## 收尾

全部页面写完后，把修改摘要写入 `{{RUN_DIR}}/agent-result.md`（Markdown）：列出每个决策做了什么、动了哪些文件、嵌入了哪些图、建立了哪些双链。摘要要能让审核者不读全文也能核对。

不要运行 Git 命令；质量门禁由流水线的 review 阶段执行。
