---
title: 光子辅助隧穿
description: 载流子吸收或发射一个或多个驱动光子后跨越原本失谐能量差的隧穿过程。
aliases:
  - PAT
  - 光辅助隧穿
tags:
  - 量子比特操控
  - 微波谱学
date: 2026-09-08
---

<div class="entry-lead">当两个量子点的能级没有对齐时，微波光子可以补上能量差，使原本被抑制的隧穿重新发生；多光子过程满足近似的 $n h f=\Delta E$。</div>

## 谱学用途

扫描微波频率与失谐，PAT 共振线把栅压距离换算成能量，从而标定杠杆臂、[[fundamentals/tunnel-coupling|隧穿耦合]]和激发态。峰宽与功率依赖还包含退相干、弛豫和驱动展宽信息。

在强驱动下，多个 $n$ 阶通道同时出现，不能再把每条线当作互不相关的跃迁；它们会通过[[lzsm-interference|LZSM 干涉]]或 Floquet 准能级统一描述。

## 与腔光子的区别

经典微波源产生的 PAT 通常对应强相干驱动；[[circuit-qed/charge-photon-coupling|量子点–腔耦合]]关注的则是受限腔模的单光子或少光子相互作用。两者都遵循能量匹配，但场的量子统计和回作用不同。

## 论文依据

- [[sources/shang-runan-2014|尚汝南 2014]]，PDF pp. 9–10：最高 14 阶 PAT 与 LZSM 图样。
- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 4：非掺杂 GaAs 电荷比特 PAT 及退相干参数。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF pp. 5–6：三量子点 PAT 表征。
