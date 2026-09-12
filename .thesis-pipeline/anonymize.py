#!/usr/bin/env python3
"""Anonymize quantum-dot-wiki for public release (v2: full source-page rewrite)."""
import os
import re
from pathlib import Path

ROOT = Path("/home/agony/projects/chenzhaoyun-com/quantum-dot-wiki")
SRC_DIR = ROOT / "content"
SOURCES_DIR = SRC_DIR / "sources"

# (display-name, year, old-slug, rough-topic)
AUTHOR_MAP = [
    ("周诚",   "2013", "zhou-cheng-2013", "双量子点中电子态的操控与测量"),
    ("尚汝南", "2014", "shang-runan-2014", "基于半导体量子点的电荷量子比特和量子输运"),
    ("张苗磊", "2014", "zhang-miaolei-2014", "谐振腔与量子点耦合体系的研究"),
    ("尤杰",   "2016", "you-jie-2016", "新型砷化镓量子点的制备与量子输运研究"),
    ("余国栋", "2016", "yu-guodong-2016", "多电荷量子比特的相干操控研究"),
    ("陈宝宝", "2017", "chen-baobao-2017", "量子点中的自旋量子比特"),
    ("韩天一", "2017", "han-tianyi-2017", "量子点中的射频测量"),
    ("王保传", "2017", "wang-baochuan-2017", "半导体量子点中量子比特编码研究"),
    ("孔伟成", "2018", "kong-weicheng-2018", "基于 transmon qubit 的量子芯片工作环境研究与优化"),
    ("李炎",   "2018", "li-yan-2018", "锗硅自组织纳米线量子点和微波谐振腔复合结构"),
    ("王柯",   "2020", "wang-ke", "低维半导体材料中门控量子点及自旋量子比特研究"),
    ("徐刚",   "2020", "xu-gang-2020", "基于锗纳米线量子点的空穴自旋及其复合结构研究"),
    ("陈明博", "2021", "chen-mingbo-2021", "半导体量子点与腔杂化系统的动力学耦合研究"),
    ("段鹏",   "2022", "duan-peng-2022", "超导量子比特快速高保真度读取的实验研究"),
    ("胡睿梓", "2022", "hu-ruizi-2022", "硅量子点中单自旋量子比特的实验研究"),
    ("刘汉伟", "2022", "liu-hanwei-2022", "半导体量子点阵列的自动调控方法研究"),
    ("林霆",   "2022", "lin-ting-2022", "微波谐振腔与半导体量子点的杂化系统研究"),
    ("顾思思", "2023", "gu-sisi-2023", "半导体量子点–高阻抗谐振腔杂化系统的基本表征与动力学"),
    ("杨杰诚", "2023", "yang-jiecheng-2023", "半导体量子点系统中微磁体的优化研究"),
    ("江顺利", "2025", "jiang-shunli-2025", "Si/SiGe 三量子点阵列–高阻抗谐振腔中的比特–光子耦合"),
    ("王宁",   "2025", "wang-ning-2025", "基于 Si/SiGe 量子点阵列的自旋比特操控及二维扩展研究"),
    ("楚凝",   "2025", "chu-ning-2025", "基于 Si-MOS 量子点的高保真度自旋量子比特操控研究"),
    ("马璟睿", "2026", "ma-jingrui-2026", "应变锗空穴–谐振腔耦合系统中缺陷机制与器件优化"),
    ("刘铮",   "2026", "liu-zheng-2026", "SOT 磁化翻转操控硅基自旋量子比特的方案及实验兼容性"),
    ("周雨晨", "2026", "zhou-yuchen-2026", "锗量子点中空穴自旋量子比特的操控研究"),
]

SLUG_TO_CODE = {slug: f"ref-{i+1:02d}" for i, (_, _, slug, _) in enumerate(AUTHOR_MAP)}
NAME_TO_CODE = {name: f"文献 {i+1}" for i, (name, _, _, _) in enumerate(AUTHOR_MAP)}
NAME_YEAR_TO_CODE = {(name, year): f"文献 {i+1}" for i, (name, year, _, _) in enumerate(AUTHOR_MAP)}

NAME_RE = re.compile("|".join(re.escape(n) for n, _, _, _ in AUTHOR_MAP))

DEGREE_SUBJECTS = ["光学", "物理学", "电子信息", "电子科学与技术", "集成电路工程", "集成电路"]


def make_source_page(idx: int, name: str, year: str, slug: str, topic: str):
    """Build a fully anonymized sources page from scratch."""
    code = f"ref-{idx+1:02d}"
    title = f"文献 {idx+1}（参考文献）"
    # Generic description (drop name + degree subject)
    description = f"参考文献，{topic}。"
    body = (
        "---\n"
        f"title: {title}\n"
        f'description: "{description}"\n'
        f"aliases:\n"
        f"  - 参考文献 {idx+1}\n"
        f"tags:\n"
        f"  - 来源论文\n"
        f"  - 参考文献\n"
        f"source: \"{code}.pdf\"\n"
        f"date: 2026-09-08\n"
        "---\n\n"
        f'<div class="paper-meta"><span>参考文献</span><span>{idx+1}</span></div>\n\n'
        "## 摘要级概括\n\n"
        "见正文内容（如有摘要片段附在词条正文）；本站不公开原始文件。\n\n"
        "## 本站取材\n\n"
        "见各概念词条正文中的「## 论文依据」部分。\n"
    )
    return code, body


def rewrite_entries_and_links():
    """Walk all non-source content, strip names, update wikilinks."""
    for path in SRC_DIR.rglob("*.md"):
        rel = path.relative_to(SRC_DIR)
        if rel.parts[0] == "sources":
            continue
        text = path.read_text(encoding="utf-8")

        # Update wikilinks [[sources/<old-slug>|label]] -> [[sources/<new-slug>|label-replaced]]
        def link_repl(m):
            old_slug = m.group(1)
            label = m.group(2)
            new_slug = SLUG_TO_CODE.get(old_slug)
            if new_slug is None:
                return m.group(0)
            # Replace author-name patterns in label
            new_label = label
            for (nm, yr), code in NAME_YEAR_TO_CODE.items():
                new_label = new_label.replace(f"{nm} {yr}", code).replace(nm, code)
            return f"[[sources/{new_slug}|{new_label}]]"
        text = re.sub(r"\[\[sources/([a-z0-9\-]+)\|([^\]]+)\]\]", link_repl, text)

        # Line-by-line rewrite (skip frontmatter)
        lines = text.split("\n")
        in_fm = False
        fm_count = 0
        new_lines = []
        for ln in lines:
            if ln.strip() == "---":
                fm_count += 1
                in_fm = (fm_count % 2 == 1)
                new_lines.append(ln)
                continue
            if in_fm:
                # Keep frontmatter identity but strip names from titles/aliases
                # If it's a tag/source line mentioning a name, drop it
                if NAME_RE.search(ln) and not re.search(r"\[\[.*?\]\]", ln):
                    # scrub names
                    ln = NAME_RE.sub("", ln)
                new_lines.append(ln)
                continue
            # Replace "Author YYYY" -> "文献 NN" (citation style)
            for (nm, yr), code in NAME_YEAR_TO_CODE.items():
                ln = ln.replace(f"{nm} {yr}", code)
                ln = ln.replace(f"{nm}{yr}", code)
            # Replace lone author name -> "文献 NN"
            ln = re.sub(rf"({'|'.join(re.escape(n) for n,_,_,_ in AUTHOR_MAP)})",
                        lambda m: NAME_TO_CODE[m.group(0)], ln)
            ln = ln.replace("学位论文", "论文").replace("毕业论文", "论文")
            ln = ln.replace("中国科学技术大学", "国内相关高校").replace("USTC", "国内相关高校")
            ln = re.sub(r"[，,]\s*[，,]", "，", ln)
            ln = re.sub(r" +([，,。;:])", r"\1", ln)
            new_lines.append(ln)
        text = "\n".join(new_lines)
        path.write_text(text, encoding="utf-8")


def rewrite_about_and_root_index():
    for rel in ["about.md", "index.md"]:
        path = SRC_DIR / rel
        text = path.read_text(encoding="utf-8")
        # Replace 学位论文/毕业论文 with 论文
        text = text.replace("学位论文", "论文").replace("毕业论文", "论文")
        text = text.replace("中国科学技术大学", "国内相关高校").replace("USTC", "国内相关高校")
        # Scrub any author names
        text = NAME_RE.sub("", text)
        text = re.sub(r"[，,]\s*[，,]", "，", text)
        text = re.sub(r" +([，,。;:])", r"\1", text)
        # Generalize 26/25 count phrasing
        text = text.replace("26 份来源 PDF", "25 篇参考文献")
        text = text.replace("26 份 PDF", "25 篇参考论文")
        text = text.replace("26 份", "25 份")
        text = text.replace("共约 3600 页", "")
        text = re.sub(r"，\s*，", "，", text)
        path.write_text(text, encoding="utf-8")


def rewrite_sources_index():
    """Rewrite sources/index.md table to anonymized form."""
    path = SOURCES_DIR / "index.md"
    if not path.exists():
        return
    text = path.read_text(encoding="utf-8")
    # Build new table from AUTHOR_MAP
    rows = []
    for i, (_, year, slug, topic) in enumerate(AUTHOR_MAP):
        n = i + 1
        code = f"ref-{i+1:02d}"
        rows.append(f"| {year} | 文献 {n} | [{topic}](./{code}) |")
    # Find the table boundaries (| 年份 | ... | and ending |)
    lines = text.split("\n")
    new_lines = []
    in_table = False
    table_done = False
    skip_until_blank = False
    # rewrite: replace the table block with a fresh one
    # Simpler: emit new frontmatter + intro + table
    new_text = (
        "---\n"
        "title: 来源论文库\n"
        "description: 本站 25 篇参考文献及其研究主题索引。\n"
        "tags:\n"
        "  - 来源论文\n"
        "  - 索引\n"
        "date: 2026-09-08\n"
        "---\n\n"
        "本站共读取 25 篇参考论文，统一编号为「文献 1」至「文献 25」。下表按年代顺序列出每篇的研究主题；具体页面请进入对应文献条目查看。\n\n"
        "| 年份 | 编号 | 主题 |\n"
        "| ---: | :--- | :--- |\n"
        + "\n".join(rows) + "\n\n"
        "> [!info] 页码口径\n"
        "> 概念词条中的「PDF p. N」表示对应文献 PDF 文件阅读器显示的第 N 页。这样即使论文前置页使用罗马数字，读者仍能稳定定位。\n"
    )
    path.write_text(new_text, encoding="utf-8")


def main():
    # 1. Rewrite each source page (full replacement) + rename
    for i, (name, year, slug, topic) in enumerate(AUTHOR_MAP):
        old = SOURCES_DIR / f"{slug}.md"
        if old.exists():
            code, body = make_source_page(i, name, year, slug, topic)
            (SOURCES_DIR / f"{code}.md").write_text(body, encoding="utf-8")
            old.unlink()
            print(f"  OK sources/{slug}.md -> sources/{code}.md")
        else:
            print(f"  MISS sources/{slug}.md")

    # 2. Rewrite sources/index.md
    rewrite_sources_index()
    print("  OK sources/index.md")

    # 3. Walk content/ entries
    rewrite_entries_and_links()
    print("  OK content/**/*.md entries")

    # 4. About + root index
    rewrite_about_and_root_index()
    print("  OK about.md + content/index.md")


if __name__ == "__main__":
    main()
