# 量子百科

基于 Quartz 5 的中文论文知识库。站点从 26 份本地学位论文中整理出 63 个核心概念词条、25 个独立论文来源页和 6 条主题主线，覆盖半导体量子点、量子比特操控、材料器件、读出测量、电路 QED 与阵列自动化。

参考站点的搜索、目录树、关系图谱、反向链接、悬浮预览、暗色模式与阅读模式均已保留；“许愿”功能未实现。

在线站点：https://logfe3.github.io/quantum-thesis-wiki/

## 本地常驻部署

部署脚本会生成生产版静态文件，注册当前用户的 Windows 登录自启任务，并仅监听本机回环地址：

    npm run deploy:local

部署完成后访问 http://127.0.0.1:8088/。查看状态或卸载：

    npm run status:local
    npm run undeploy:local

任务名为 QuantumThesisWiki，运行日志保存在 .local-deploy/server.log。服务不会开放给局域网设备。
字体、KaTeX、D3 与 PixiJS 均从本机提供，部署后无需联网即可完整显示公式和关系图谱。

## 本地预览

    npm install
    npx quartz plugin install --from-config
    npm run preview:local

打开 http://localhost:8089/。生产构建使用：

    npm run build:site

静态产物会生成在 public/，该目录已被 Git 忽略。

推送到 `main` 分支后，GitHub Actions 会自动构建并更新 GitHub Pages。

## 重新抽取论文

网站内容已经生成，日常预览不需要 Python。只有在论文集合变化、需要重建本地检索语料时才运行：

    python -m venv .venv
    .\.venv\Scripts\python.exe -m pip install -r scripts\requirements.txt
    .\.venv\Scripts\python.exe scripts\extract_theses.py "D:\Users\Desktop\thesis"

抽取结果写入 .extracted/ 并被 Git 忽略；原始 PDF 不会被修改或复制进网站。词条中的页码指 PDF 阅读器页码。

## 内容入口

- content/index.md：首页
- content/fundamentals/ 至 content/scaling-automation/：六类概念词条
- content/sources/：来源论文库
- quartz.config.yaml：Quartz 插件与中文站点配置
- quartz/styles/custom.scss：站点视觉样式

底层生成器为 [Quartz 5](https://quartz.jzhao.xyz/)，遵循其 MIT 许可。
