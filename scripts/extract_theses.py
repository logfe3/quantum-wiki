"""Extract a searchable, local-only text corpus from the source theses.

The original PDFs remain untouched. Extracted text is written to .extracted,
which is intentionally ignored by Git and never published by Quartz.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path

import pymupdf


def safe_name(path: Path) -> str:
    stem = re.sub(r'[<>:"/\\|?*]+', "-", path.stem).strip(" .")
    digest = hashlib.sha1(path.name.encode("utf-8")).hexdigest()[:8]
    return f"{stem}-{digest}.txt"


def text_quality(text: str) -> dict[str, int | float | str]:
    cjk = sum("\u3400" <= char <= "\u9fff" for char in text)
    replacement = text.count("�")
    visible = sum(not char.isspace() for char in text)
    ratio = round(cjk / max(visible, 1), 4)
    quality = "good" if cjk >= 200 and replacement < cjk else "english-or-degraded"
    return {
        "characters": len(text),
        "cjkCharacters": cjk,
        "replacementCharacters": replacement,
        "cjkRatio": ratio,
        "quality": quality,
    }


def extract_pdf(source: Path) -> tuple[str, int]:
    pages: list[str] = []
    with pymupdf.open(source) as document:
        page_count = len(document)
        for index, page in enumerate(document, start=1):
            page_text = page.get_text("text", sort=True).strip()
            pages.append(f"\n\n===== PDF PAGE {index} =====\n\n{page_text}")
    return "".join(pages).lstrip(), page_count


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "source",
        nargs="?",
        type=Path,
        default=Path(r"D:\Users\Desktop\thesis"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(".extracted/theses"),
    )
    args = parser.parse_args()

    args.output.mkdir(parents=True, exist_ok=True)
    records: list[dict[str, object]] = []

    for source in sorted(args.source.glob("*.pdf"), key=lambda path: path.name):
        text, page_count = extract_pdf(source)
        output_name = safe_name(source)
        (args.output / output_name).write_text(text, encoding="utf-8")
        record: dict[str, object] = {
            "source": source.name,
            "sourcePath": str(source),
            "extractedText": output_name,
            "pages": page_count,
        }
        record.update(text_quality(text))
        records.append(record)
        print(
            f"[{len(records):02d}] {source.name}: {page_count} pages, "
            f"{len(text):,} characters ({record['quality']})",
            flush=True,
        )

    (args.output / "index.json").write_text(
        json.dumps(records, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"\nWrote {len(records)} records to {args.output.resolve()}")


if __name__ == "__main__":
    main()
