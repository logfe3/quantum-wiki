// Local plugin: emit a small CSS bundle that fixes CJK rendering inside KaTeX
// math blocks (`.katex .cjk_fallback`, `.katex .mord.text`, etc.).
// Without this, Chinese characters inside `$...$` or `\text{...}` end up in the
// default math font and look mis-aligned with the rest of the formula.

import path from "path";
import fs from "fs/promises";

const CSS = `
/* --- CJK characters appearing inside KaTeX math blocks (KaTeX wraps them in
   <span class="mord cjk_fallback">). Force them onto a system font that
   actually has CJK glyphs, and lift them slightly so they sit on the same
   baseline as the surrounding math italic. --- */
.katex .cjk_fallback,
.katex .mord.text,
.katex .mathnormal.cjk_fallback {
  font-family: "Microsoft YaHei", "PingFang SC", "Hiragino Sans GB",
               "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Micro Hei",
               "Sarasa Mono SC", system-ui, -apple-system, "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 400;
}

/* Block-level (\text{}) content within math: same treatment, plus a touch of
   tracking so a multi-character 中文 label doesn't feel squished. */
.katex .mord.text > .cjk_fallback,
.katex .mathnormal.cjk_fallback {
  letter-spacing: 0.01em;
}

/* Drop the strict warnings about non-ASCII math: this only affects the
   dev-console message; KaTeX already rendered fine. */
.katex .katex-error,
.katex .mathit,
.katex .mathsf,
.katex .mathtt {
  font-family: "KaTeX_Main", "Cambria Math", "Latin Modern Math",
               "STIX Two Math", serif;
}
`;

// Mirror of the favicon emitter's write helper.
const write = async (ctx, slug, ext, content) => {
  const pathToPage = path.join(ctx.argv.output, slug + ext);
  const dir = path.dirname(pathToPage);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(pathToPage, content);
  return pathToPage;
};

export const CjkMath = () => ({
  name: "CjkMath",
  async *emit(ctx) {
    yield write(ctx, "static/cjk-math", ".css", CSS.trim() + "\n");
  },
  externalResources: () => ({
    css: [
      {
        content: "/static/cjk-math.css",
        inline: false,
      },
    ],
    js: [],
    additionalHead: [],
  }),
});

export default CjkMath;
