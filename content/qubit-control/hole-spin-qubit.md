---
title: 空穴自旋量子比特
description: 以半导体价带空穴的两个自旋态编码、可利用强自旋轨道耦合全电操控的量子比特。
aliases:
  - 空穴量子比特
  - 锗空穴自旋比特
tags:
  - 量子比特操控
  - 空穴自旋
  - 锗
date: 2026-09-08
---

<div class="entry-lead">空穴自旋兼具相对弱的超精细耦合和较强的自旋轨道耦合，尤其在锗平台中可不用片上微波磁场就实现快速全电操控。</div>

## 为什么是空穴

价带态具有显著轨道成分，使栅电场能通过自旋轨道耦合改变有效自旋。于是同一套栅极既可定义[[fundamentals/semiconductor-quantum-dot|量子点]]，又可执行[[electric-dipole-spin-resonance|EDSR]]。论文覆盖[[materials-devices/germanium-hut-wire|锗棚顶纳米线]]和[[materials-devices/strained-germanium|平面应变锗]]两种实现。

## 优势与代价

强电控提升 Rabi 速度，也把电荷噪声重新耦合到自旋频率与驱动强度。$g$ 因子和自旋轨道场具有方向依赖，因此外磁场方向会同时改变操控效率和相干性。[[geometric-quantum-gate|几何门]]、势垒栅调控和噪声不敏感工作点都是论文中探索的优化路径。

自旋阻塞漏电流还能用来反推自旋轨道场方向、强度和双点 $g$ 因子差。

## 论文依据

- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 4–5：锗棚顶纳米线空穴 EDSR 与腔耦合。
- [[sources/wang-ke|王柯 2020]]，PDF pp. 9–10：空穴自旋 Rabi、Larmor 与 Hahn echo。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 7–9：平面锗几何门与最优工作点。
