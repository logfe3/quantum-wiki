---
title: 单自旋量子比特
description: 以单个受限电子或空穴的两个 Zeeman 自旋态编码的量子比特。
aliases:
  - 自旋量子比特
  - 单电子自旋比特
tags:
  - 量子比特操控
  - 自旋
date: 2026-09-08
---

<div class="entry-lead">单自旋量子比特用一个载流子的自旋向上、向下态编码 0 和 1。它不直接改变电荷分布，天然比电荷编码更抗低频电噪声，但操控与读出需要额外的自旋–电荷接口。</div>

## 能级与操控

外磁场产生 Zeeman 劈裂 $E_Z=g\mu_BB$。在横向振荡磁场共振时可产生[[rabi-oscillation|Rabi 旋转]]；量子点器件更常借助[[materials-devices/micromagnet|微磁体]]或材料内禀自旋轨道耦合，把交流栅电场转成[[electric-dipole-spin-resonance|EDSR]] 驱动。

初始化和读出一般通过能量选择隧穿或泡利自旋阻塞，把自旋映射为可由[[readout-measurement/single-shot-readout|单发电荷读出]]区分的状态。控制品质由 Rabi 频率、$T_1$、$T_2^*$、回声相干时间和门保真度共同描述。

## 材料差异

硅中的核自旋环境较安静，适合长相干；锗空穴有较强自旋轨道耦合，适合全电快速操控；GaAs 的成熟器件则为多种自旋阻塞和多电子编码提供早期实验基础。

## 论文依据

- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 4–5：硅单自旋比特制备、操控与读出。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 4–5：GaAs 双量子点自旋态与阻塞。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 7–9：锗空穴自旋的全电操控。
