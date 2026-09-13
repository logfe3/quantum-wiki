import assert from "node:assert/strict"
import test from "node:test"
import {
  cleanMarkdown,
  extractEntryLead,
  extractFormulaBlocks,
  extractImages,
  extractSections,
  jaccard,
  mathIsBalanced,
  normalizeQuestion,
  parseWikiDocument,
  stableShuffle,
  tokens,
} from "./qa-utils.mjs"

const fixture = `---
title: 色散读出
description: 通过频移间接测量量子比特状态。
tags:
  - 读出
---

<div class="entry-lead">
色散读出避免与量子比特直接交换激发。
</div>

## 物理图像

在大失谐条件下，谐振腔频率依赖量子比特状态。

$$
H/\\hbar=(\\omega_r+\\chi\\sigma_z)a^\\dagger a
$$

![[assets/dispersive-readout.svg]]
*图 1：色散读出示意图*

## 适用条件

需要满足 $|\\Delta| \\gg g$。
`

test("parses Wiki frontmatter, lead, sections, formulas, and figures", () => {
  const { frontmatter, body } = parseWikiDocument(fixture, "fixture.md")
  assert.equal(frontmatter.title, "色散读出")
  assert.equal(extractEntryLead(body), "色散读出避免与量子比特直接交换激发。")

  const sections = extractSections(body)
  assert.deepEqual(
    sections.map((section) => section.heading),
    ["物理图像", "适用条件"],
  )
  assert.deepEqual(extractFormulaBlocks(body), ["H/\\hbar=(\\omega_r+\\chi\\sigma_z)a^\\dagger a"])
  assert.deepEqual(extractImages(body), [
    { path: "assets/dispersive-readout.svg", caption: "图 1：色散读出示意图" },
  ])
})

test("cleans Wiki links without discarding their visible labels", () => {
  assert.equal(
    cleanMarkdown(
      "参见 [[qubit-control/rabi-oscillation|拉比振荡]] 与 [论文](https://example.com)。",
    ),
    "参见 拉比振荡 与 论文。",
  )
})

test("normalizes Markdown-escaped conjugation stars for LaTeX consumers", () => {
  assert.equal(cleanMarkdown("线宽为 $\\kappa^\\*$。"), "线宽为 $\\kappa^*$。")
  assert.deepEqual(extractFormulaBlocks("$$g_s>\\kappa^\\*,\\gamma_s$$"), [
    "g_s>\\kappa^*,\\gamma_s",
  ])
})

test("stable shuffle is deterministic and leaves its input unchanged", () => {
  const input = ["a", "b", "c", "d"]
  const first = stableShuffle(input, "fixed-seed")
  const second = stableShuffle(input, "fixed-seed")
  assert.deepEqual(first, second)
  assert.deepEqual(input, ["a", "b", "c", "d"])
  assert.deepEqual([...first].sort(), input)
})

test("detects balanced display, inline, and fenced mathematics", () => {
  assert.equal(mathIsBalanced("$x$ 与 $$y=x^2$$"), true)
  assert.equal(mathIsBalanced("```math\ny=x^2\n```"), true)
  assert.equal(mathIsBalanced("$x 与 y"), false)
  assert.equal(mathIsBalanced("$$y=x^2"), false)
  assert.equal(mathIsBalanced("```math\ny=x^2"), false)
})

test("normalization and token overlap support deterministic deduplication", () => {
  assert.equal(normalizeQuestion("什么是 SQUID？"), "什么是squid")
  const left = tokens("解释量子比特的色散读出")
  const identical = tokens("解释量子比特的色散读出")
  const unrelated = tokens("自动标定微波脉冲")
  assert.equal(jaccard(left, identical), 1)
  assert.ok(jaccard(left, unrelated) < 0.2)
})
