// Local plugin: inline a small CSS bundle that fixes CJK rendering inside KaTeX
// math blocks (`.katex .cjk_fallback`, `.katex .mord.text`, etc.).
// Without this, Chinese characters inside `$...$` or `\text{...}` end up in the
// default math font and look mis-aligned with the rest of the formula.
// CSS 必须内联（inline: true）：以外部文件 + 根路径引用时在
// baseUrl 带子路径的部署下会 404。

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

export const CjkMath = () => ({
  name: "CjkMath",
  // 空 emit 仅用于让插件加载器把本插件归类为 emitter，
  // 否则 externalResources 不会被收集
  async *emit() {},
  externalResources: () => ({
    css: [
      {
        content: CSS.trim(),
        inline: true,
      },
    ],
    js: [],
    additionalHead: [],
  }),
});

export default CjkMath;
