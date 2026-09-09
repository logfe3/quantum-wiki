---
title: 色散读出
description: 在远离真实能量交换的条件下，用量子态引起的谐振频移或相移进行读出。
aliases:
  - 色散测量
  - dispersive readout
tags:
  - 读出与测量
  - 电路QED
date: 2026-09-08
---

<div class="entry-lead">色散读出让探测光子主要“感受”量子系统，而不与它共振交换激发：不同量子态使谐振腔频率略有不同，反射或透射相位于是成为读出指针。</div>

## 色散区

在简化[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]中，当失谐 $|\Delta|=|\omega_q-\omega_r|$ 远大于耦合 $g$，有效频移尺度约为

$$
\chi \approx \frac{g^2}{\Delta}.
$$

探测频率选在谐振曲线陡坡，微小 $\pm\chi$ 被转换为明显相位或幅值差。量子点还可能以量子电容和隧穿电容改变腔响应。

## 不是完全无回作用

腔内光子会造成测量诱导退相干、AC Stark 频移和功率相关非线性；腔也可能通过[[purcell-filter|Purcell 通道]]缩短 $T_1$。读出速度、信噪比与回作用需要联合优化。

## 论文依据

- [[sources/zhang-miaolei-2014|张苗磊 2014]]，PDF pp. 4–5：反射腔幅相测量量子点复导纳。
- [[sources/lin-ting-2022|林霆 2022]]，PDF pp. 7–8：时间平均色散读出 Rabi 与 Ramsey。
- [[sources/duan-peng-2022|段鹏 2022]]，PDF pp. 7–8：超导比特色散读出链路优化。
