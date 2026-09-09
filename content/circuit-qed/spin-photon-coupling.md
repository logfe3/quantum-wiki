---
title: 自旋–光子耦合
description: 借助自旋–电荷混合，让微波腔电场与量子点自旋量子比特相互作用。
aliases:
  - 自旋光子耦合
  - spin-photon coupling
tags:
  - 电路量子电动力学
  - 自旋量子比特
date: 2026-09-08
---

<div class="entry-lead">微波光子的电场很容易推动电荷，却几乎不能直接翻转自旋。自旋–光子接口的核心，是加入足够的自旋–电荷混合，同时不丢掉自旋相干优势。</div>

## 混合机制

硅电子量子点可用[[materials-devices/micromagnet|微磁体]]梯度把电荷位移转成有效横向磁场；锗空穴利用内禀自旋轨道耦合；[[scaling-automation/flopping-mode-qubit|翻转模式]]让电子在双点间摆动以放大电偶极。有效耦合可粗略看成

$$
g_s \approx g_c \times \text{自旋–电荷混合系数}.
$$

混合越强，$g_s$ 越大，也越容易继承电荷噪声和腔损耗。

## 为什么重要

自旋比特本地相互作用通常短程。与腔光子耦合后，可通过共享模式实现远距离读出、状态交换和[[cavity-mediated-coupling|腔介导两比特作用]]。三量子点还允许共振交换比特与腔直接结合。

## 论文依据

- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF p. 4：微磁体梯度与自旋–光子强耦合。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 4–5：锗空穴–腔耦合强度评估。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 7–8：两个翻转模式与共振交换比特的腔强耦合。
