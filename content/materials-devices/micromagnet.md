---
title: 微磁体
description: 集成在量子点附近、提供静态磁场差和空间梯度以支持自旋寻址与电驱动的微纳磁体。
aliases:
  - 微型磁体
  - micromagnet
tags:
  - 材料与器件
  - 自旋操控
date: 2026-09-08
---

<div class="entry-lead">微磁体把空间位置编码进磁场：不同量子点获得不同 Zeeman 频率，电子在交流电场下微小移动又会感受到横向振荡场。</div>

## 两类梯度

纵向梯度 $\partial B_z/\partial x$ 用于分离相邻比特共振频率、产生条件频移；横向梯度 $\partial B_\perp/\partial x$ 把电子位移转成[[qubit-control/electric-dipole-spin-resonance|EDSR]] 驱动。理想设计希望横向梯度大、无用纵向梯度和场曲率小，但两者受到几何与磁化方向共同约束。

## 优化与工艺

磁体长宽厚度、间隙、量子点位置误差都会改变场分布。杨杰诚论文以可迭代变形方法针对目标区域优化，并提出微磁体与栅极同层以简化流程、减小垂直距离。楚凝论文进一步表明外磁场方向与合成自旋轨道场的夹角会决定 Rabi 频率和品质因子最优点。

微磁体也增加磁噪声、工艺复杂度和阵列频率拥挤，[[scaling-automation/spin-orbit-torque-control|SOT 基带操控]]是另一条探索路线。

## 论文依据

- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF p. 4：迭代优化和同层微磁体方案。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 7–9：微磁体诱导的各向异性与最优方向。
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 7–8：传统微波/微磁体扩展问题与 SOT 方案。
