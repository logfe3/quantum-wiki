---
title: 虚拟电极
description: 由多个物理栅压线性组合成的控制坐标，用于近似独立调节量子点化学势或势垒。
aliases:
  - 虚拟栅极
  - virtual gates
tags:
  - 扩展与自动化
  - 校准
date: 2026-09-08
---

<div class="entry-lead">物理栅极的电场没有硬边界。虚拟电极通过软件同时改变多根栅压，让某个目标参数变化、其他参数一阶保持不动。</div>

## 线性补偿

在一个局部工作区，可把物理栅压变化 $\Delta\mathbf V$ 到量子点化学势变化 $\Delta\boldsymbol\mu$ 写为

$$
\Delta\boldsymbol\mu=\mathbf C\,\Delta\mathbf V,
$$

$\mathbf C$ 是[[cross-capacitance-matrix|交叉电容矩阵]]。若矩阵可逆或可求伪逆，就能构造虚拟柱塞轴 $\Delta\mathbf V=\mathbf C^{-1}\Delta\boldsymbol\mu_\mathrm{target}$。

## 现实限制

栅压响应随工作点、电子数和势垒状态变化，线性矩阵只在局部有效；势垒调节对隧穿耦合近似指数，也不是电容矩阵能完全描述的。阵列调节过程中需周期性重测斜率并更新虚拟轴。

虚拟电极把人工经验变成可计算坐标，是[[automatic-tuning|自动调控]]从双量子点扩展到阵列的关键接口。

## 论文依据

- [[sources/liu-hanwei-2022|刘汉伟 2022]]，PDF pp. 7–8：虚拟电极与量子点遍历结合的阵列自动调控。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 8：可控最近邻/次近邻耦合的 2×2 阵列。
