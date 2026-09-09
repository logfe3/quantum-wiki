---
title: 交换相互作用
description: 由费米子反对称性和波函数重叠产生的自旋态能量差，是半导体两比特门的核心耦合。
aliases:
  - 交换耦合
  - exchange coupling
tags:
  - 量子比特操控
  - 两比特门
date: 2026-09-08
---

<div class="entry-lead">交换相互作用把“电子能否交换位置”转换成“不同联合自旋态具有不同能量”。它可由电压快速调节，是量子点自旋两比特门最常用的相互作用。</div>

## 从隧穿到交换

在双量子点的简化 Hubbard 图像中，远离真实双占据但允许虚隧穿时，

$$
J \sim \frac{4t_c^2}{U},
$$

$t_c$ 是[[fundamentals/tunnel-coupling|隧穿耦合]]，$U$ 是双占据能量代价。更完整表达会依赖失谐、谷态和轨道。调势垒或失谐都能改变 $J$，但对电荷噪声的敏感度不同。

## 两种门策略

脉冲式策略把 $J$ 从近零打开一段时间，积累条件相位；常开策略保持有限 $J$，在系统本征基中设计单/双比特联合控制并用虚拟相位补偿。[[dynamical-decoupling|解耦序列]]可插入条件相位门以抵消慢噪声。

交换作用也定义[[singlet-triplet-qubit|单态–三重态]]和[[resonant-exchange-qubit|共振交换]]编码的本征能级。

## 论文依据

- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 4–5：多电子双量子点交换振荡。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 7–9：常开交换 CNOT 与动态交换 DCZ。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 8：可控最近邻和次近邻耦合阵列。
