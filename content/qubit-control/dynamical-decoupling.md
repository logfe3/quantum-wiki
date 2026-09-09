---
title: 动力学解耦
description: 用精心安排的翻转脉冲平均低频噪声、延长量子叠加态有效相干时间的方法。
aliases:
  - Hahn echo
  - CPMG
  - 自旋回声
tags:
  - 量子比特操控
  - 噪声
date: 2026-09-08
---

<div class="entry-lead">动力学解耦不是消灭噪声，而是让量子比特在序列不同区间对慢噪声积累相反相位，从而在末端重新聚焦。</div>

## 从回声开始

Hahn echo 序列为 $\pi/2-\tau/2-\pi-\tau/2-\pi/2$。中间的 $\pi$ 脉冲交换两逻辑态，使准静态频率偏移在前后半程抵消。CPMG 等多脉冲序列把滤波窗口推向更高频，可用于推断噪声谱。

解耦后测得的 $T_2$ 通常长于[[ramsey-interferometry|Ramsey]] 的 $T_2^*$，二者差距说明低频噪声占比。若脉冲本身有幅相误差，增加脉冲数未必继续改善。

## 用在门操作中

两比特条件相位演化也可与单比特翻转组合成解耦门，在保留目标相互作用的同时抵消某些静态频移。设计时必须检查翻转是否也反转了目标哈密顿量。

## 论文依据

- [[sources/wang-ke|王柯 2020]]，PDF pp. 9–10：锗空穴 Hahn echo 与相干延长。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF pp. 5–6：电荷比特回声操控。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 8–9：Hahn echo、CPMG 与低频噪声。
