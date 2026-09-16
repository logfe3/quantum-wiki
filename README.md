# 量子点百科

[![Deploy GitHub Pages](https://github.com/logfe3/quantum-wiki/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/logfe3/quantum-wiki/actions/workflows/deploy-pages.yml)

基于 [Quartz 5](https://quartz.jzhao.xyz/) 构建的中文半导体量子点论文百科，覆盖量子点物理、材料与器件、量子比特操控、读出测量、量子点 cQED、阵列扩展与自动化。

`content` 当前包含 125 个 Markdown 页面：91 个量子点主题词条、25 篇核心参考文献全文页、7 个栏目索引，以及首页和编写说明。站点提供全文搜索、目录树、关系图谱、反向链接、悬浮预览、暗色模式、阅读模式与本地化公式资源。

- 在线站点：[https://logfe3.github.io/quantum-wiki/](https://logfe3.github.io/quantum-wiki/)
- GitHub 仓库：[https://github.com/logfe3/quantum-wiki](https://github.com/logfe3/quantum-wiki)
- 上游仓库：[https://git.chenzhaoyun.com/agony/quantum-dot-wiki](https://git.chenzhaoyun.com/agony/quantum-dot-wiki)

## 本地预览

需要 Node.js 22 或更高版本，以及 npm 10.9.2 或更高版本。仓库通过 `.node-version` 固定推荐版本。

```powershell
npm ci
npm run preview:local
```

构建完成后访问 <http://127.0.0.1:8088/>。`preview:local` 会先生成生产版静态文件，再启动仅监听本机回环地址的服务器。

只生成静态网站或重新启动已有产物时，分别运行：

```powershell
npm run build:site
npm run serve:local
```

静态产物生成在 `public/`，该目录已被 Git 忽略。

## GitHub Pages 部署

`.github/workflows/deploy-pages.yml` 会在 `main` 分支更新后自动完成以下流程：

1. 安装锁定依赖；
2. 使用 Quartz 生成 `public/`；
3. 上传 GitHub Pages artifact；
4. 发布到 `https://logfe3.github.io/quantum-wiki/`。

首次部署前，在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。之后推送到 `main` 即会自动更新网站，也可以在 Actions 页面手动运行 `Deploy Quartz to GitHub Pages`。

## QAtlas 增量内容

QAtlas 是论文发现与证据后端，最终产物仍是本仓库原有格式的中文 Wiki 词条。连接器不会把整个论文库直接发布，也不会把 PAT 写进仓库；原始 Markdown、元数据和临时图件保存在已忽略的 `.qatlas-cache/`。

先通过官方 CLI 的设备码流程保存一个仅含 `papers:read` 的 PAT：

```powershell
uvx --from qatlas-cli qatlas auth login `
  --server-url https://qatlas.hfnl.app.chenzhaoyun.com `
  --scopes papers:read
```

### 统一流水线

`npm run qatlas:pipeline` 把"发现 → 编辑决策 → 生成 → 质量检查"串成一条命令：

```powershell
npm run qatlas:pipeline -- run --query "silicon quantum dot readout" --max 2
```

也可以让系统自主连续扩充，但 `auto` 只允许在已包含最新 `github/main` 的 `feature/qatlas-*` 分支运行。它负责发现、规划、生成和审核，不会提交或推送；审核者确认范围和内容后再创建提交与 PR：

```powershell
npm run qatlas:pipeline -- auto --rounds 3
```

- 选题历史与自适应批量大小记录在 `.qatlas-cache/autodiscovery-state.json`（Git 忽略），中断后可续跑；
- `--rounds N` 限制轮数，省略则一直循环；Ctrl-C 随时停止；
- 每轮 review 四步（内容门禁、TypeScript、测试、生产构建）全过才提交，不过不推送。

`run` 命令的阶段细节：

- `discover`：查询 QAtlas、排除已导入论文、把候选论文的 Markdown 和图件缓存到 `.qatlas-cache/papers/`；
- `plan`：渲染编辑工作单（`.qatlas-cache/runs/<run-id>/work-order.md`），由规划 agent 按候选论文产出结构化决策（supplement / new_entry / new_category / skip），写入 `editorial-plan.json` 并按 `scripts/qatlas-schemas/editorial-plan.schema.json` 校验；
- `generate`：渲染生成工作单，由生成 agent 按决策创建或修改词条，并通过 QAtlas 内容门禁；
- `review`：内容门禁、TypeScript、测试与生产构建四步验证，结果写入 `review.json`；
- `status`：查看某次运行的工件与决策。

也可以分阶段执行：

```powershell
npm run qatlas:pipeline -- discover --query "spin qubit" --max 3
npm run qatlas:pipeline -- plan --run <run-id>
# agent 生成内容后：
npm run qatlas:pipeline -- generate --run <run-id>
npm run qatlas:pipeline -- review --run <run-id>
```

### 单独使用连接器

检查服务能力并筛选已有论文：

```powershell
npm run qatlas:doctor
npm run qatlas:list -- --query "spin qubit" --per-page 10
```

按 arXiv ID、DOI 或 QAtlas `qa_...` ID 获取论文。`--images` 可取 `none`、`referenced` 或逗号分隔的图号：

```powershell
npm run qatlas:fetch -- --id cond-mat/0703002 --images 1,2,3
```

参考文献页由 `qatlas:import-reference` 从缓存机械生成；概念词条必须单独用中文综合，不能直接复制论文正文。所有标记为 `source: QAtlas` 的页面在构建前都会执行：

```powershell
npm run check:qatlas-content
```

质量门禁要求完整 frontmatter、中文解释、KaTeX 展示公式、论文图件或 Mermaid 图解、站内双链和参考文献，并校验图片文件真实存在。编辑计划必须把候选标成 `quantum-dot-core`、`quantum-dot-enabling` 或 `off-topic`；活动决策相关性必须不低于 0.7。自动创建新栏目被禁用，纯超导比特、NV 色心、玻色腔编码等内容必须跳过。

## QA 数据集

`quantum-wiki-qa` 是从本仓库量子点词条构建的、可追溯中文问答数据集（v0.1.0，状态 `draft_pending_semantic_audit`）：91 个来源词条、509 组 Q/A，覆盖五种题型（简答 79、填空 91、判断 74、选择 90、问题求解 175），train/dev/test 按 `source_path` 隔离（411/48/50）。

- 来源范围扫描整个 `content` 目录（排除 `index.md`、`about.md`、`content/references` 论文全文、`content/assets`），新增顶级栏目自动纳入；
- 每条记录保存来源路径、章节、SHA-256、证据摘录、公式与插图引用，可回查原始词条；
- 重建与校验：

```powershell
node scripts/qa/build-wiki-qa.mjs
node scripts/qa/validate-wiki-qa.mjs
```

构建器是确定性的：来源摘要、配置摘要与生成管线摘要不变时输出逐字节相同；GitHub Actions 会重新生成并校验，词条或生成器更新而数据集未同步时拉取请求会失败。数据与格式细节见 `datasets/quantum-wiki-qa/README.md`。

## Windows 本地常驻部署

部署脚本会构建静态文件、注册当前用户的 Windows 登录自启任务，并仅监听本机回环地址：

```powershell
npm run deploy:local
```

部署完成后访问 <http://127.0.0.1:8088/>。查看状态或卸载：

```powershell
npm run status:local
npm run undeploy:local
```

任务名为 `QuantumThesisWiki`，运行日志保存在 `.local-deploy/server.log`。字体、KaTeX、D3 与 PixiJS 均由本机提供，离线时仍可显示公式和关系图谱。

## 内容结构

- `content/index.md`：网站首页；
- `content/about.md`：编写方法、取材边界与使用说明；
- `content/fundamentals/`：量子点基础，17 个词条；
- `content/materials-devices/`：材料与器件，12 个词条；
- `content/qubit-control/`：量子比特与操控，26 个词条；
- `content/circuit-qed/`：量子点腔与电路 QED，14 个词条；
- `content/readout-measurement/`：量子点读出与测量，9 个词条；
- `content/scaling-automation/`：扩展与自动化，13 个词条；
- `content/references/`：25 篇核心参考文献全文页；
- `content/assets/`：词条使用的图片与附件；
- `quartz.config.yaml`：Quartz 插件、布局与站点基址配置；
- `qatlas.integration.yaml`：QAtlas 服务地址、缓存目录与发布质量规则；
- `scripts/qatlas-bridge.mjs`：QAtlas 健康检查、目录查询、Markdown 轮询和图件获取；
- `scripts/qatlas-pipeline.mjs`：统一内容流水线（发现、编辑决策、生成、质量检查）；
- `scripts/qatlas-scope.mjs`：量子点相关性、栏目白名单和编辑计划范围门禁；
- `scripts/qatlas-import-reference.mjs`：从缓存生成参考文献全文页；
- `scripts/qa/`：QA 数据集构建器、校验器与审核门禁；
- `quartz/styles/custom.scss`：站点视觉样式。

## 重新抽取论文

网站内容已经生成，日常构建不需要 Python。只有在本地论文集合变化、需要重建检索语料时才运行：

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r scripts\requirements.txt
.\.venv\Scripts\python.exe scripts\extract_theses.py "D:\Users\Desktop\thesis"
```

抽取结果写入 `.extracted/` 并被 Git 忽略；原始 PDF 不会被修改或复制进网站。词条中的页码指 PDF 阅读器页码。

## 同步上游

本地仓库保留两个远程：`origin` 指向上游 Gitea，`github` 指向本项目。需要合并上游更新时：

```powershell
git fetch origin
git merge origin/main
git push github main
```

项目代码遵循仓库中的 MIT 许可证；论文与引用内容仍受各自来源的许可和引用要求约束。
