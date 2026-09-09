---
title: 电偶极自旋共振
description: 借助自旋轨道耦合或磁场梯度，把交流电场转换成有效横向自旋驱动的技术。
aliases:
  - EDSR
  - 电驱动自旋共振
tags:
  - 量子比特操控
  - 自旋
date: 2026-09-08
---

<div class="entry-lead">EDSR 让栅电极发出的电场驱动自旋。电场先推动载流子波函数，再由空间磁场梯度或内禀自旋轨道耦合把位移转换为随时间变化的有效磁场。</div>

## 两条物理路径

在硅电子量子点中，片上[[materials-devices/micromagnet|微磁体]]产生横向梯度：交流栅压让电子往返移动，电子因而感受到振荡磁场。锗空穴则可直接利用较强的内禀自旋轨道耦合，减少额外磁性结构。

共振条件仍近似是 $hf=E_Z$，而 Rabi 频率取决于电偶极位移、梯度或自旋轨道矩阵元。纵向梯度会把电荷噪声转成频率噪声，所以“驱动强”与“相干好”不总能同时最大化。

## 工程意义

EDSR 兼容片上电极和频分控制，但阵列中会遇到微波串扰、频率拥挤与器件不均一。[[scaling-automation/flopping-mode-qubit|翻转模式]]可增强电偶极，[[geometric-quantum-gate|几何门]]和磁场方向优化可提升噪声鲁棒性。

## 论文依据

- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF p. 4：微磁体梯度、EDSR 与优化。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 4–5：硅自旋 EDSR 和翻转模式。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 7–9：锗空穴内禀自旋轨道 EDSR。
