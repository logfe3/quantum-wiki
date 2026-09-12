#!/usr/bin/env bash
# 2 并发跑剩余 25 篇 MinerU pipeline
set -uo pipefail
cd "$(dirname "$0")"
run_one() {
  local pdf="$1" base
  base=$(basename "$pdf" .pdf)
  [ -f "mineru-out/$base/auto/$base.md" ] && { echo "SKIP $base"; return; }
  echo ">>> START $base $(date +%H:%M:%S)"
  if mineru -p "$pdf" -o mineru-out -b pipeline -m auto > "mineru-logs/$base.log" 2>&1; then
    echo "OK  $base $(date +%H:%M:%S)"
  else
    echo "FAIL $base"
  fi
}
mkdir -p mineru-logs
export -f run_one
ls pdfs/*.pdf | grep -v '尚汝南' | xargs -P 2 -I{} bash -c 'run_one "$@"' _ {}
echo "=== ALL DONE ==="
ls mineru-out/
