---
title: Ramsey 干涉
description: 用两个相隔自由演化时间的 π/2 脉冲测量量子比特失谐与非均匀退相干。
aliases:
  - Ramsey条纹
  - 拉姆齐干涉
tags:
  - 量子比特操控
  - 相干表征
date: 2026-09-08
---

<div class="entry-lead">Ramsey 序列让量子比特自己“走表”：第一个 π/2 脉冲建立叠加态，自由演化积累相位，第二个 π/2 脉冲把相位差转换成可读出的占据概率。</div>

## 序列与信息

驱动频率与比特频率相差 $\delta$ 时，信号随等待时间 $\tau$ 以 $\delta$ 振荡，包络给出 $T_2^*$。这个时间同时包含真正的不可逆退相干和重复实验间缓慢漂移，因此通常短于[[dynamical-decoupling|回声或 CPMG]] 测得的相干时间。

Ramsey 条纹可用来精确标定共振频率、虚拟 Z 相位和工作点漂移。若包络不是简单指数，常提示 $1/f$ 电荷噪声、核自旋噪声或多个噪声时间尺度。

## 与 Rabi 的分工

[[rabi-oscillation|Rabi]]主要标定旋转速度与脉冲面积；Ramsey 主要标定相位演化和频率稳定性。两者合起来才足以定义可靠的单比特门。

## 论文依据

- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 7：电荷比特 Ramsey 操作。
- [[sources/lin-ting-2022|林霆 2022]]，PDF pp. 7–8：时间平均色散读出的 Ramsey 演化。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 8–9：Ramsey 与动力学解耦的噪声比较。
