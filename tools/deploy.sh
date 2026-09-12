#!/usr/bin/env bash
# 手动部署：本地构建 + tar 上传到 aliyun2（wiki.chenzhaoyun.com/quantum-dot-wiki）
# aliyun2 是通用 wiki 宿主：产物落到 /var/www/wiki.chenzhaoyun.com/html/quantum-dot-wiki，
# nginx 通用 location 已支持 $uri.html 回退，无需为本站单独配置 location
set -euo pipefail
cd "$(dirname "$0")/.."

# 必须用 build:site 而非裸 quartz build：后者每次构建会清空 public/，
# 需要 prepare-local-assets 把 katex 的 css/字体、vendor 的 d3/pixi 拷回 public/static/，
# 否则线上 katex.min.css 404，公式全部无样式。
npm run build:site

tar -C public -cf - . | ssh aliyun2 "sudo bash /opt/quantum-dot-wiki/deploy/deploy-from-tar.sh"
echo "线上验证："
curl -fsS -o /dev/null -w "GET /quantum-dot-wiki/ -> %{http_code}\n" https://wiki.chenzhaoyun.com/quantum-dot-wiki/
curl -fsS -o /dev/null -w "GET /quantum-dot-wiki/fundamentals/coulomb-blockade -> %{http_code}\n" https://wiki.chenzhaoyun.com/quantum-dot-wiki/fundamentals/coulomb-blockade
