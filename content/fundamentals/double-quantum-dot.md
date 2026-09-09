---
title: 双量子点
description: 两个可独立调节电荷数、并通过隧穿和电容相互作用耦合的量子点系统。
aliases:
  - DQD
  - 串联双量子点
tags:
  - 量子点基础
  - 双量子点
date: 2026-09-08
---

<div class="entry-lead">双量子点把两个“人造原子”放进同一可控电路。它既是研究分子式杂化的最小系统，也是电荷、自旋和混合编码量子比特的基本器件。</div>

## 两种耦合

点间[[tunnel-coupling|隧穿耦合]] $t_c$ 使左右局域态形成成键/反键杂化；互电容则让一侧电荷改变时移动另一侧的[[electrochemical-potential|电化学势]]。实验通过两个柱塞栅定义失谐 $\varepsilon$，通过势垒栅控制 $t_c$。

在电荷基 $\{|L\rangle,|R\rangle\}$ 下，最小哈密顿量为

$$
H=\frac{\varepsilon}{2}\sigma_z+t_c\sigma_x,
$$

本征能级在 $\varepsilon=0$ 处形成大小为 $2t_c$ 的反交叉。这一结构支撑[[qubit-control/charge-qubit|电荷比特]]、[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]和翻转模式自旋比特。

## 常见观测

零偏压下扫描两柱塞栅得到[[charge-stability-diagram|蜂窝图]]；有限偏压得到偏压三角形；若考虑自旋选择定则，可出现泡利自旋阻塞并用于自旋到电荷转换。

## 论文依据

- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 9–10：双量子点电荷态的测量与普适操控。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 4–5：多电子自旋阻塞与交换振荡。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF p. 4：锗空穴双量子点与腔耦合。
