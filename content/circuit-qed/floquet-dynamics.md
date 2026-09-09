---
title: Floquet 驱动动力学
description: 用周期哈密顿量的准能级与周期态描述强连续驱动量子系统的方法。
aliases:
  - Floquet态
  - 周期驱动动力学
tags:
  - 电路量子电动力学
  - 强驱动
date: 2026-09-08
---

<div class="entry-lead">当量子点被强周期驱动时，“吸收一束独立光子”的图像会变得零散。Floquet 理论把时间周期性本身当作对称性，用准能级统一多光子跃迁、干涉和布居。</div>

## 基本结构

若 $H(t+T)=H(t)$，薛定谔方程的解可写成

$$
|\psi_\alpha(t)\rangle=e^{-i\epsilon_\alpha t/\hbar}|u_\alpha(t)\rangle,
\qquad |u_\alpha(t+T)\rangle=|u_\alpha(t)\rangle.
$$

$\epsilon_\alpha$ 是模 $\hbar\Omega$ 定义的准能量。周期驱动把原能级复制成相差整数个驱动光子的侧带，侧带相遇并耦合产生避免交叉和复杂的[[qubit-control/lzsm-interference|LZSM 干涉]]。

## 腔作为探针

腔响应取决于 Floquet 态之间跃迁矩阵元和稳态布居，而不只取决于裸能级。因此某些驱动参数下，即便存在允许跃迁，布居重分布仍会使腔信号减弱；在粒子数反转时则可能出现增益。

## 论文依据

- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 7–8：腔光子辅助 LZSM 与 Floquet 布居抑制。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 7–8：单、双量子点–腔系统的 Floquet 响应理论和增益。
