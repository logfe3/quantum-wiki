---
title: 半导体量子点
description: 由纳米尺度势阱束缚少数电子或空穴、能级离散且可电调的人造原子。
aliases:
  - 量子点
  - 栅控量子点
tags:
  - 量子点基础
  - 器件
date: 2026-09-08
---

<div class="entry-lead">半导体量子点是把载流子在三个空间方向上都限制到纳米尺度的势阱。离散能级、可控电荷数和可调隧穿势垒，使它既像“人造原子”，又能直接接入电路。</div>

## 怎样形成

论文中的器件主要从[[two-dimensional-carrier-gas|二维载流子气]]出发：金属栅极施加电压，局域耗尽或积累电子/空穴；多个栅共同围出势阱，势垒栅控制与源漏或相邻量子点的耦合。另一类[[materials-devices/germanium-hut-wire|锗棚顶纳米线]]利用材料本身的横向限域，再由栅压沿线定义量子点。

当热能和能级展宽都小于[[charging-energy|充电能]]及轨道能级间隔时，电荷数可以逐个改变。实验上不直接“看见”量子点，而是从[[coulomb-blockade|库仑阻塞]]、[[coulomb-diamond|库仑菱形]]、[[charge-stability-diagram|电荷稳定图]]或电荷传感信号判断它是否形成。

## 为什么适合量子比特

- 电荷位置可编码[[qubit-control/charge-qubit|电荷量子比特]]。
- 单电子/空穴自旋可编码[[qubit-control/single-spin-qubit|单自旋量子比特]]。
- 多点、多电子组合可形成[[qubit-control/singlet-triplet-qubit|单态–三重态]]、杂化或共振交换编码。
- 栅控结构小、参数可调，并能与[[circuit-qed/microwave-resonator|微波谐振腔]]和射频传感器集成。

## 论文依据

- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 4：GaAs 栅控量子点、常相互作用模型与器件制备。
- [[sources/wang-ning-2025|王宁 2025]]，PDF pp. 7–8：Si/SiGe 量子点阵列及二维扩展。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF p. 4：锗棚顶纳米线空穴量子点。
