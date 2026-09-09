---
title: Landau–Zener 跃迁
description: 二能级系统扫过避免交叉时，在绝热跟随与非绝热跃迁之间发生的可控分束过程。
aliases:
  - LZ跃迁
  - Landau-Zener跃迁
tags:
  - 量子比特操控
  - 二能级系统
date: 2026-09-08
---

<div class="entry-lead">Landau–Zener 跃迁回答一个核心问题：把二能级系统快速扫过反交叉时，量子态会跟着瞬时本征态走，还是留在原来的局域态？</div>

## 概率与时间尺度

取 $H=(vt/2)\sigma_z+(\Delta/2)\sigma_x$，失谐以速度 $v$ 线性扫描，避免交叉最小能隙为 $\Delta$。在这一约定下，非绝热留在原透热支的概率为

$$
P_\mathrm{LZ}=\exp\left(-\frac{\pi\Delta^2}{2\hbar v}\right).
$$

慢扫或大能隙趋向绝热，快扫或小能隙趋向非绝热。不同论文对 $\Delta$ 与 $t_c$ 的定义可能相差因子 2，代公式前必须核对哈密顿量。

## 量子比特中的角色

在[[charge-qubit|电荷比特]]中，失谐脉冲扫过左右电荷态反交叉，LZ 过程相当于可调反射率的量子分束器。一次跃迁可做态制备；两次跃迁及中间相位累积形成[[lzsm-interference|LZSM 干涉]]，可组合成 Bloch 球旋转。

## 论文依据

- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 9–10：LZ 跃迁、相位累积和普适电荷比特操控。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF pp. 9–10：高阶光子辅助过程中的 LZSM 干涉。
