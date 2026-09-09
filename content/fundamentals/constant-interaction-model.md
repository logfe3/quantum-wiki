---
title: 常相互作用模型
description: 用固定总电容和单粒子能级近似描述量子点逐个加电子的基础模型。
aliases:
  - 恒定相互作用模型
tags:
  - 量子点基础
  - 模型
date: 2026-09-08
---

<div class="entry-lead">常相互作用模型把复杂电子–电子相互作用压缩成一个经典充电项，再叠加离散单粒子能级，是解释库仑阻塞和电荷稳定图的最小模型。</div>

## 核心假设

模型假设量子点的总电容 $C_\Sigma$ 不随电子数显著变化，相互作用只通过静电能体现。含 $N$ 个电子时可写成

$$
U(N)=\sum_{i=1}^{N}E_i+\frac{\left(-Ne+Q_\mathrm{ext}\right)^2}{2C_\Sigma}.
$$

$E_i$ 是轨道能级，$Q_\mathrm{ext}$ 汇总栅极、源漏等外部电极感应的电荷。相邻电荷态的能量差给出[[electrochemical-potential|电化学势]]，而 $e^2/C_\Sigma$ 决定主要的[[charging-energy|充电能]]尺度。

## 能解释什么

- 栅压扫描中的周期性库仑峰；
- [[coulomb-blockade|库仑阻塞]]区的边界；
- [[coulomb-diamond|库仑菱形]]的尺寸；
- 双量子点电容耦合产生的蜂窝结构。

它不能精确描述强关联、能级相关电容或开放量子点中的高阶过程，但非常适合做器件初始标定。

## 论文依据

- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 7：以该模型串联电化学势、充电能、库仑阻塞与蜂窝图。
- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 4：单、双量子点的基础表征。
- [[sources/han-tianyi-2017|韩天一 2017]]，PDF p. 7：射频测量前的量子点理论基础。
