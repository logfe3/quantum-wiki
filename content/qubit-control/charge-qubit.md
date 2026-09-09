---
title: 电荷量子比特
description: 以载流子在双量子点中的位置或电荷分布作为逻辑基态的量子比特。
aliases:
  - 电荷比特
tags:
  - 量子比特操控
  - 电荷
date: 2026-09-08
---

<div class="entry-lead">电荷量子比特把“电子在左点还是右点”编码成二能级。它的电偶极矩大、门操作快、易与微波腔耦合，但也因此对电场与电荷噪声敏感。</div>

## 编码与哈密顿量

在单电子双量子点中，局域态 $|L\rangle$ 与 $|R\rangle$ 可作为计算基。最小模型为

$$
H=\frac{\varepsilon}{2}\sigma_z+t_c\sigma_x,
$$

其中失谐 $\varepsilon$ 控制左右能量差，[[fundamentals/tunnel-coupling|隧穿耦合]] $t_c$ 控制反交叉能隙。快速脉冲、微波或绝热扫描可分别实现突变、共振和能级跟随操控。

## 操控和限制

论文使用[[landau-zener-transition|Landau–Zener 跃迁]]、[[lzsm-interference|LZSM 干涉]]、[[photon-assisted-tunneling|光子辅助隧穿]]、[[rabi-oscillation|Rabi]] 与[[ramsey-interferometry|Ramsey]] 表征相干动力学。强电偶极还让它容易达到[[circuit-qed/charge-photon-coupling|电荷–光子强耦合]]。主要代价是 $\varepsilon$ 直接受[[materials-devices/charge-noise|电荷噪声]]扰动，远离对称点时退相干通常更快。

## 论文依据

- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 7–8：单、多电荷比特的相干操控与逻辑门。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 9–10：双量子点电荷比特的普适旋转。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 7–8：周期驱动电荷比特与高阻抗腔。
