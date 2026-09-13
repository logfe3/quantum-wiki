# 量子点百科

[![Deploy GitHub Pages](https://github.com/logfe3/quantum-wiki/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/logfe3/quantum-wiki/actions/workflows/deploy-pages.yml)

基于 [Quartz 5](https://quartz.jzhao.xyz/) 构建的中文量子器件论文知识库，覆盖半导体量子点、量子比特操控、材料与器件、读出测量、电路 QED、阵列扩展与自动化。

当前仓库包含 114 个 Markdown 页面：80 个主题词条、24 篇参考文献全文页、8 个栏目索引，以及首页和编写说明。站点提供全文搜索、目录树、关系图谱、反向链接、悬浮预览、暗色模式、阅读模式与本地化公式资源。

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

质量门禁要求完整 frontmatter、中文解释、KaTeX 展示公式、论文图件或 Mermaid 图解、站内双链和参考文献，并校验图片文件真实存在。栏目数量不设上限，但新栏目必须补充现有知识图谱，而不是形成孤立的论文镜像。

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
- `content/fundamentals/`：量子点基础，15 个词条；
- `content/materials-devices/`：材料与器件，8 个词条；
- `content/qubit-control/`：量子比特与操控，23 个词条；
- `content/superconducting-qubits/`：超导量子比特，当前包含 transmon 基础词条；
- `content/circuit-qed/`：腔与电路 QED，13 个词条；
- `content/readout-measurement/`：读出与测量，11 个词条；
- `content/scaling-automation/`：扩展与自动化，9 个词条；
- `content/references/`：24 篇参考文献全文页；
- `content/assets/`：词条使用的图片与附件；
- `quartz.config.yaml`：Quartz 插件、布局与站点基址配置；
- `qatlas.integration.yaml`：QAtlas 服务地址、缓存目录与发布质量规则；
- `scripts/qatlas-bridge.mjs`：QAtlas 健康检查、目录查询、Markdown 轮询和图件获取；
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
