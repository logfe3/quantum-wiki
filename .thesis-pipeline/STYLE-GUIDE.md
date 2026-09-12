# quantum-dot-wiki 词条扩充规范（子代理必读）

## 目标

把速写级词条（约 30 行）扩充为完整的中文百科词条（150–400 行），重点补**理论细节**：模型哈密顿量、关键公式与推导梗概、参数量级、实验特征、与其他词条的关系。内容必须忠于本仓库 26 篇学位论文的实际内容，外部文献只进「延伸阅读」。

## 硬性规则

1. **保留 frontmatter**（title/description/aliases/tags/date 不动；可按需补充 aliases）。
2. **保留开头 `<div class="entry-lead">` 导语**，可润色但保持一句话概括本质。
3. **「## 论文依据」仍是最后一个 H2**，格式：`- [[sources/<slug>|<作者> <年份>]]，PDF p. N 或 pp. N–M：一句话说明该页内容`。页码必须用 `python3 .thesis-pipeline/findpage.py <txt> <关键词>` 实际定位，禁止编造。
4. 数学用 KaTeX 兼容语法：行内 `$...$`，独立 `$$...$$`。禁用 `\newcommand`、`\tag`、自定义宏；矩阵用 `\begin{pmatrix}`。
5. 站内链接用 Obsidian 写法 `[[slug|显示文字]]`，跨目录带前缀 `[[qubit-control/single-spin-qubit|单自旋量子比特]]`；链接目标必须真实存在（content/ 下的词条 slug）。不确定是否存在时不要链接。
6. 图片引用 `![[assets/figures/<分类>/<文件>.png]]` 或 `![描述](../assets/...)`——**本轮不插图片**，图片位用 HTML 注释占位 `<!-- FIGURE: 期望的图内容 -->`。
7. 中文科技写作，术语首次出现给英文原名（如 电荷稳定图（charge stability diagram））；数值给量级与单位。
8. 每个词条给「## 延伸阅读」：1–4 条经典文献，用 `qatlas search "<英文关键词>" --max-results 5 --top 5 --no-agent` 查找真实文献，格式 `- 作者, "标题", 期刊/会议 (年份). [DOI/arXiv 链接]`。只引用搜索结果真实返回的条目。

## 推荐结构（按词条性质取舍）

- 导语（entry-lead）
- ## 物理图像 / 定义
- ## 理论模型（哈密顿量、公式、推导梗概）
- ## 参数与量级（可用表格）
- ## 实验特征 / 测量方法
- ## 与其他概念的关系（双链）
- ## 延伸阅读
- ## 论文依据

## 论文文本位置

`.thesis-pipeline/texts/*.txt` 是 26 篇论文的 pdftotext 全文（`\f` 分页，页码=第几个分页符+1）。用 grep 定位相关章节，用 findpage.py 拿页码。论文↔slug 对应见 `content/sources/index.md` 和各 sources 页。
