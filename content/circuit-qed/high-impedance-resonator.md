---
title: 高阻抗谐振腔
description: 特性阻抗远高于 50 Ω、具有更大零点电压涨落以增强电偶极耦合的微波谐振器。
aliases:
  - 高阻抗腔
  - high-impedance resonator
tags:
  - 电路量子电动力学
  - 强耦合
date: 2026-09-08
---

<div class="entry-lead">高阻抗腔通过增大每个光子的零点电压，让同一个量子点电偶极感受到更强微波场，是半导体量子比特进入强耦合区的关键器件。</div>

## 为什么阻抗重要

对等效 LC 模式，$Z_r=\sqrt{L/C}$。在频率固定时提高 $Z_r$ 意味着增大电感、减小电容，零点电压尺度满足

$$
V_\mathrm{zpf}\propto\sqrt{\hbar\omega_r Z_r}.
$$

电偶极耦合 $g$ 因而随 $V_\mathrm{zpf}$ 增强。高动能电感 NbTiN 纳米线和[[squid-array-resonator|SQUID 阵列]]都是获得大电感的路线。

## 设计代价

细线与大电场提高了表面、介质和[[materials-devices/interface-defects|界面缺陷]]参与度；SQUID 阵列还带来磁通噪声与结参数不均匀。高阻抗结构也更难直接匹配 50 Ω 馈线，需要合适的外耦合与封装。

## 论文依据

- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 7–8：SQUID 阵列与 NbTiN 高阻抗腔。
- [[sources/lin-ting-2022|林霆 2022]]，PDF pp. 7–8：远程两比特和五电荷比特集成。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 7–8：Si/SiGe 三量子点比特强耦合。
