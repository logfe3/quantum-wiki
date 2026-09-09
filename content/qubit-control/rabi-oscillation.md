---
title: Rabi 振荡
description: 共振驱动二能级系统时，量子态占据在两逻辑态之间周期交换的相干运动。
aliases:
  - 拉比振荡
tags:
  - 量子比特操控
  - 相干表征
date: 2026-09-08
---

<div class="entry-lead">Rabi 振荡是“能否连续控制量子比特”的第一张时间域名片：改变共振脉冲长度，读出概率应按近似正弦规律在两个逻辑态之间往返。</div>

## 驱动图像

若二能级劈裂为 $\hbar\omega_q$，以频率 $\omega_d\approx\omega_q$ 的横向场驱动，在旋转波近似下共振 Rabi 频率与有效驱动矩阵元成正比。一个持续时间 $t_\pi=\pi/\Omega_R$ 的脉冲实现 $\pi$ 旋转。

实际信号包络会因准静态失谐、驱动幅度噪声、泄漏和弛豫衰减。振荡频率随微波幅度的线性区间、衰减时间和可见度共同用于选择工作点。

## 不同实现

[[charge-qubit|电荷比特]]可由失谐或势垒调制直接驱动；[[single-spin-qubit|自旋比特]]常通过[[electric-dipole-spin-resonance|EDSR]]；腔杂化系统还可用[[readout-measurement/dispersive-readout|色散信号]]时间平均地观察振荡。

## 论文依据

- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 7：微波驱动电荷比特 Rabi 操控。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 4–5：硅单自旋与翻转模式 Rabi。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 7–9：锗空穴 Rabi 和门保真度。
