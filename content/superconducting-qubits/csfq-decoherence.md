---
title: 可调电容并联 flux qubit 的退相干
description: 可调电容并联 flux qubit（CSFQ）在量子退火设置下的退相干表征：本征 1/f 磁通噪声、控制电子噪声与高频段热噪声的贡献分解。
aliases:
 - CSFQ 退相干
 - flux qubit 退相干
 - 可调 flux qubit 退相干
 - capacitively shunted flux qubit decoherence
tags:
 - 超导量子比特
 - 磁通量子比特
 - 退相干
 - 量子退火
date: 2026-09-14
source: QAtlas
qatlas_id: qa_01m0qveprqxkk1968jdn5yewd3
source_updated: 2026-09-14T16:22:10Z
---

<div class="entry-lead">可调电容并联 flux qubit（CSFQ）把 [[superconducting-qubits/fluxonium-qubit|flux qubit]] 的电流相位关系用大并联电容"电容化"——既保留磁通操控的自由度，又把能级结构推向 transmon 化。它的退相干来自三方：两个量子点环路里的本征 1/f 磁通噪声、快速退火用的控制电子低频噪声、以及高频段的热噪声——Trappen 等人的系统表征为量子退火这一现实设置提供了噪声分解模板。</div>

## 物理图像：从 flux qubit 到 CSFQ

[[superconducting-qubits/fluxonium-qubit|Flux qubit]] 用三个（或四个）约瑟夫森结的环路构成，相位操控靠外磁通、能级结构靠 $E_J/E_C$；它的优势是操控快、非谐性大，劣势是对磁通噪声敏感、读出对比度低。**CSFQ**（capacitively shunted flux qubit）在环路上并联一个大电容：大电容把 $E_C$ 压低，能级结构走向 transmon 化（对电荷噪声的敏感度下降），同时保留磁通操控自由度和可调隧穿耦合——它是连接经典 flux qubit 与 [[superconducting-qubits/transmon-qubit|transmon]] 的中间形态，也是量子退火硬件（如 D-Wave 类架构）的主流比特。

CSFQ 的退相干来自三方面：环路的本征 1/f 磁通噪声（内禀）、快速退火协议使用的控制电子的低频噪声（外因，随退火速度引入）、以及比特频率较高时的热噪声（高频段主导）。

![[assets/figures/csfq-decoherence/37d83f8bfb00050eaa0fa2d7999c39044b15f6587c6f03a35810a991b3328206.jpg]]

*CSFQ 器件结构：电容并联的 flux qubit 示意图——X 环（红）与 Z 环分别承担不同操控自由度，大并联电容把 $E_C$ 压低使能级结构 transmon 化，同时保留磁通操控。图源：Trappen et al. (2023)，Fig. 1。*

## 退相干表征：三方噪声的分解

**退相干模型**：假设 Z 环与 X 环的 1/f 磁通噪声是退相干的唯一来源，噪声功率谱密度为

$$
S_{\Phi_z}=\frac{2\pi A_{\Phi_z}}{\omega},\qquad S_{\Phi_x}=\frac{2\pi A_{\Phi_x}}{\omega},
$$

其中 $A_{\Phi_z}$、$A_{\Phi_x}$ 是两环的 1/f 噪声幅值，另有相关噪声系数 $c_{zx}=C_{\Phi_z\Phi_x}/\sqrt{S_{\Phi_z}S_{\Phi_x}}$。频率对磁通的灵敏度直接从电路模型（不作二态近似）计算，噪声功率拟合 $T_\phi$ 随 $\Phi_z$ 的变化给出 $\sqrt{A_{\Phi_z}}=13.4\ \mu\Phi_0/\sqrt{\mathrm{Hz}}$、$\sqrt{A_{\Phi_x}}=7.4\ \mu\Phi_0/\sqrt{\mathrm{Hz}}$——与同工艺前期器件一致（磁通噪声功率按环路长宽比缩放）。

在量子退火设置（比特频率较高、退火脉冲较快）下实测，Trappen 等人发现：

- **低频段**：弛豫率在约 3 GHz 以下由 1/f 磁通噪声主导，加上偏置线热噪声与可能的 TLS 缺陷贡献；退相干（$T_\phi$）由**内禀磁通噪声**主导——自旋回波比 Ramsey 长 5 倍、所有衰减都能用 Gaussian 包络拟合，都与 1/f 噪声主导一致；
- **高频段**：在比特频率较高的区域，热噪声从偏置电路传入成为主导——模型中加入 ohmic 磁通噪声或电荷噪声并不能显著改善模拟与实测的吻合，说明高频段的噪声来源是热而不是磁通/电荷噪声；
- **控制电子噪声**：把 X 偏置源从 AWG 换成低噪声直流源后，Ramsey $T_\phi$ 从约 80 ns 改善到约 150 ns——模型估计 AWG 自身的 1/f + 白噪声就能导致 $T_\phi\sim350$ ns，与实测改善量级一致。缓解方案：低温 bias-T 合并直流与快信号（降低噪声源的耦合强度），或对快信号重滤波并在原位修正失真。

这一分解的实际意义：内禀磁通噪声只能靠材料与界面工艺压低；控制电子噪声可以靠滤波与退火协议优化；热噪声则要靠衰减链与工作点选择（见[[scaling-automation/cryo-electronics|低温电子学]]）。CSFQ 的退相干表征因此为"现实退火设置"给出了可操作的噪声分解模板。

![[assets/figures/csfq-decoherence/b15ebfedbfdfeab7db05d056051801dd0574e85ddc51081eec1d17d6ead49ab1.jpg]]

*CSFQ 的退相干表征：实测弛豫/退相干率随工作点的变化，与噪声模型的对比——低频段由本征磁通噪声与控制电子噪声主导，高频段热噪声从偏置电路传入成为主要贡献。图源：Trappen et al. (2023)，Fig. 3。*

## 片上滤波：快控与长相干兼得

词条前文的控制电子噪声是"快控的代价"；**片上驱动线滤波器**从电路设计侧解决：驱动线集成阻带滤波器（阻带中心对准比特频率），驱动信号畅通而环境噪声被反射——退相干保护的比特同时实现**快速控制**（强耦合驱动线不再引入退相干）与**长相干**（噪声被滤波器挡住）。这与控制电子侧的对策（换低噪声源）互补：一个改电路，一个改源。

![[assets/figures/csfq-decoherence/73f3d51015f378ea3615dc32b3a586e0273e726bd546d1df58fbb22415a240b3.jpg]]

*片上滤波的退相干保护比特：驱动线集成阻带滤波器——比特频率处噪声被反射、驱动信号畅通，快控与长相干兼得。图源：arXiv:2402.08906，Fig. 1。*

![[assets/figures/csfq-decoherence/60c6142b7c2f7d36ad27bda096a0f6b04649b013236bdc9dcca7bbd0d099edb1.jpg]]

*滤波器的退相干抑制：有/无滤波的退相干率对比——阻带内噪声被数量级压制。图源：arXiv:2402.08906，Fig. 2。*

## 与其他概念的关系

- 与[[superconducting-qubits/fluxonium-qubit|fluxonium]]的互补：两者都靠磁通操控，但 CSFQ 用大并联电容把能级推向 transmon 化，牺牲部分非谐性换取电荷噪声免疫——是"磁通操控 + 电容保护"的中间路线。
- [[circuit-qed/charge-parity-fluctuation|电荷宇称涨落与准粒子隧穿]]是 transmon 侧的噪声分解模板（准粒子隧穿只占弛豫 5%）；本词条是 flux qubit 侧的对应物（1/f 磁通噪声 + 控制电子噪声 + 热噪声）——两条路线的噪声来源截然不同。
- 1/f 磁通噪声与[[superconducting-qubits/fluxonium-qubit|fluxonium]]甜点的第一阶磁通噪声免疫同源：CSFQ 的工作点选择同样利用磁通偏置的一阶不敏感区。
- 控制电子噪声的贡献把退相干与[[scaling-automation/cryo-electronics|低温电子学]]的滤波、衰减设计直接联系起来；热噪声的高频主导则要求衰减链按频段优化。

## 参考文献

- Trappen, R., Dai, X., Yurtalan, M. A., et al. (2023). *Decoherence of a tunable capacitively shunted flux qubit*. npj Quantum Information（arXiv:2307.13961）. [DOI:10.1038/s42005-025-02360-2](https://doi.org/10.1038/s42005-025-02360-2) · [arXiv:2307.13961](https://arxiv.org/abs/2307.13961)
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
