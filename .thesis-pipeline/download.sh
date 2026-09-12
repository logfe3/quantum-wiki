#!/usr/bin/env bash
set -uo pipefail
cd "$(dirname "$0")"
while IFS=$'\t' read -r token name; do
  out="pdfs/${name}"
  if [ -s "$out" ]; then echo "SKIP $name"; continue; fi
  echo ">>> downloading: $name"
  LARKSUITE_CLI_NO_UPDATE_NOTIFIER=1 lark-cli drive +download --file-token "$token" --output "$out" --overwrite --as user --format json > /dev/null 2>> download.err \
    && echo "OK  $name" || echo "FAIL $name"
done < manifest.tsv
echo "=== done ==="
ls -la pdfs/ | head -30
