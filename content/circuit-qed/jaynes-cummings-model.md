---
title: Jaynes–Cummings 模型
description: 描述旋转波近似下单个二能级系统与单量子谐振模式交换激发的基础模型。
aliases:
  - JC模型
  - Jaynes-Cummings模型
tags:
  - 电路量子电动力学
  - 模型
date: 2026-09-08
---

<div class="entry-lead">Jaynes–Cummings 模型把复杂杂化器件约化成一个二能级和一个腔模，直接给出共振交换、真空 Rabi 劈裂和色散频移。</div>

## 哈密顿量

旋转波近似下，

$$
H/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z
+g\left(a^\dagger\sigma_-+a\sigma_+\right).
$$

$a^\dagger,a$ 创建/湮灭腔光子，$g$ 是单光子耦合。共振时，$|e,n\rangle$ 与 $|g,n+1\rangle$ 杂化；单激发子空间的劈裂为 $2g$。大失谐时可消去直接交换，得到约 $g^2/\Delta$ 的色散位移。

## 适用边界

量子点可能有多个轨道、谷、自旋和电荷态，强周期驱动还需[[floquet-dynamics|Floquet]] 描述。若耦合达到超强耦合区，反旋项不可忽略。真实拟合还必须加入腔损耗 $\kappa$、比特弛豫和纯退相干。

## 论文依据

- [[sources/zhang-miaolei-2014|张苗磊 2014]]，PDF pp. 4–5：量子点–腔耦合理论。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 7–8：真空 Rabi 劈裂与参数提取。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 7–8：多种三量子点比特的腔耦合。
