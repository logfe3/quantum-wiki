#!/usr/bin/env python3
"""findpage.py — 在 pdftotext 输出中按正则找关键词所在的 PDF 页码（阅读器页码，从 1 起）。
用法: python3 findpage.py <txt文件> <正则> [-n 最多命中页数]
输出: 每个命中页一行: 页码<TAB>命中行摘要
"""
import re
import sys

def main():
    path, pattern = sys.argv[1], sys.argv[2]
    max_hits = int(sys.argv[4]) if len(sys.argv) > 4 and sys.argv[3] == "-n" else 8
    text = open(path, encoding="utf-8", errors="replace").read()
    pages = text.split("\f")
    rx = re.compile(pattern)
    hits = 0
    for i, page in enumerate(pages, 1):
        m = rx.search(page)
        if m:
            line = next((ln.strip() for ln in page.splitlines() if rx.search(ln)), "")
            print(f"{i}\t{line[:100]}")
            hits += 1
            if hits >= max_hits:
                break
    if not hits:
        print("NO MATCH")

if __name__ == "__main__":
    main()
