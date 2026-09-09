---
title: LZSM 干涉
description: 周期或往返扫描避免交叉时，多次 Landau–Zener 跃迁路径发生的量子干涉。
aliases:
  - Landau-Zener-Stückelberg-Majorana干涉
  - LZS干涉
tags:
  - 量子比特操控
  - 干涉
date: 2026-09-08
---

<div class="entry-lead">LZSM 干涉把一次 Landau–Zener 跃迁当作分束器：两条量子路径在反交叉之间积累不同相位，第二次相遇时相长或相消。</div>

## 干涉条件

两次[[landau-zener-transition|LZ 跃迁]]之间的动力学相位近似为

$$
\phi_\mathrm{dyn}=\frac{1}{\hbar}\int_{t_1}^{t_2}\left[E_+(t)-E_-(t)\right]dt.
$$

再加上穿越反交叉产生的 Stokes 相位，最终占据概率随驱动幅度、频率、静态失谐和[[fundamentals/tunnel-coupling|耦合能隙]]呈条纹。可见度受到退相干和弛豫限制，因此干涉图本身也是系统参数的谱学探针。

## 实验形态

矩形或正弦驱动都能产生干涉；强周期驱动时更适合用[[circuit-qed/floquet-dynamics|Floquet 态]]理解。腔耦合系统还可能出现腔光子辅助的 LZSM 图样和布居重分布导致的信号抑制。

## 论文依据

- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 9–10：双量子点 LZ 路径与相位控制。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 7：电荷比特的 LZS 操控。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 7–8：腔光子辅助 LZSM 与 Floquet 布居。
