---
title: Si-MOS 量子点
description: 在硅–氧化层界面用积累栅和势垒栅定义的电子量子点平台。
aliases:
  - 硅MOS量子点
  - MOS量子点
tags:
  - 材料与器件
  - 硅
  - MOS
date: 2026-09-08
---

<div class="entry-lead">Si-MOS 量子点沿用金属–氧化物–半导体的积累思想：正栅压把电子吸引到 Si/SiO₂ 界面，重叠栅或多层栅再定义势阱和隧穿势垒。</div>

## 优势

器件结构与成熟硅工艺相近，载流子可从零开始积累，适合少电子和阵列设计。同位素纯化硅可降低核自旋噪声，配合[[micromagnet|微磁体]]实现[[qubit-control/electric-dipole-spin-resonance|EDSR]]。

## 挑战

氧化层界面的粗糙、固定电荷和陷阱会引入[[interface-defects|界面缺陷]]与[[charge-noise|电荷噪声]]；多层细栅还带来寄生电容、工艺对准和射频布线约束。硅能谷也可能形成低能泄漏通道。

## 论文中的实现

楚凝论文在 Si-MOS 中研究微磁体诱导的操控各向异性、交换常开 CNOT、解耦 CZ 与劈裂栅射频读出；胡睿梓论文则侧重单自旋、单发读出和翻转模式操控。

## 论文依据

- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 4–5：Si-MOS 单自旋比特与翻转模式。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 7–9：两比特门、微磁体与射频结构。
