---
title: 纵向耦合
description: 谐振腔坐标直接调制比特频率的 cQED 相互作用（辐射压的电路类比）：硬件级纯纵向耦合实测 g₀=2π×11.9 MHz 进入单光子强耦合区，红边带驱动可按需开启 Jaynes-Cummings 阶梯。
aliases:
 - 纵向相互作用
 - longitudinal coupling
 - 辐射压耦合
 - on-demand Jaynes-Cummings
 - 按需 JC 相互作用
tags:
 - 电路量子电动力学
 - 耦合
 - 量子非破坏测量
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvghebq459j087svwksvrp
source_updated: 2026-09-05T14:30:22Z
---

<div class="entry-lead">常规 cQED 里比特与腔以横向（偶极）耦合 $g(a^\dagger\sigma_-+\mathrm{h.c.})$ 相连；纵向耦合换成**辐射压式的调制**——比特的频率由腔的坐标（零点电流经互感产生的磁通）直接移动，$H_\mathrm{int}=\hbar g_0\,a^\dagger a\,(b+b^\dagger)$。Potts 等人（Delft）用精心设计的高纯度电路把这种相互作用做到硬件级：寄生横向耦合被压低三个量级，纵向耦合率 $g_0=2\pi\times11.9\ \mathrm{MHz}$ 比系统所有耗散率大一个量级——**单光子强耦合区**；再以红边带驱动线性化，即可按需开启一个高开关比的 Jaynes-Cummings 相互作用，沿阶梯做相干光子交换。</div>

## 机制：零点磁通调频

![[assets/figures/longitudinal-coupling/potts2025-fig1-device.jpg]]
*纯纵向耦合器件：线性谐振腔 b（叉指电容 + 细电感线，ω_b=2π×4.347 GHz）的零点电流在附近产生磁通，穿过 transmon 的外延 SQUID 环（距电感线约 1 µm）调制比特频率；比特另经电容耦合到常规读出腔 c（7.612 GHz）。比特电容板分裂并相互包裹以压低电偶极矩、抑制寄生横向耦合。图源：Potts et al. (2025), Fig. 1。*

把比特写成大非谐 Kerr 振子（工作点 6.10 GHz、$\alpha=-388$ MHz），相互作用在保留一阶项后为

$$
\hat{\mathcal H}_\mathrm{int}/\hbar = g_0\,\hat a^\dagger\hat a\,(\hat b+\hat b^\dagger),\qquad
g_0=\frac{\partial\omega_q}{\partial\Phi}\,\Phi_\mathrm{zpf},
$$

即比特**光子数**（等效于二能级极限下的 $\sigma_z$）与腔的**位置算符**耦合——这正是腔光力学辐射压相互作用的电路版本。耦合率由一条干净的参数链给出：零点电流 $I_\mathrm{zpf}=\sqrt{\hbar\omega_b/2L_b}\approx36.8$ nA、互感 $M\approx25.9$ pH（Biot-Savart 估算）、零点磁通 $\Phi_\mathrm{zpf}=MI_\mathrm{zpf}\approx461\ \mu\Phi_0$、工作点磁通灵敏度 $\partial\omega_q/\partial\Phi=2\pi\times26.0\ \mathrm{GHz/\Phi_0}$，得 $g_0\approx2\pi\times12.0$ MHz——与测量值 $2\pi\times11.9$ MHz 一致，且比最大耗散率（腔 $\kappa_b=2\pi\times116.6$ kHz、比特 $\gamma_q=2\pi\times677$ kHz）大一个量级以上。

**纯度**是器件设计的核心：寄生横向耦合仅 $g_{ab}=2\pi\times1.4$ MHz，临界光子数 $n_\mathrm{crit}=\Delta^2/4g_{ab}^2\approx350{,}000$，bare-to-dressed 转变在 $|\langle b\rangle|^2\approx20{,}000$ 处才出现——腔里可以容纳**大量相干驱动光子**而不破坏比特（这是传统横向 cQED 做不到的，也是把线性腔换成光力腔、走向机械薛定谔猫态实验的必要条件）。

## 按需 Jaynes-Cummings

纵向相互作用不含光子交换项，但用**红失谐边带驱动**（$\omega_d\approx\omega_q-\omega_b$，经 XY 线打到比特）位移线性化 $\hat a=\langle\hat a\rangle+\delta\hat a$ 后，取二能级近似与 RWA：

$$
\hat{\mathcal H}_\mathrm{int}/\hbar = g\,(\hat\sigma_-\hat b^\dagger+\hat\sigma_+\hat b),\qquad g=g_0|\langle\hat a\rangle|,
$$

——一个**按需开启**的 Jaynes-Cummings 相互作用，耦合率 $g$ 由驱动幅度连续设定、关断时残余耦合近乎为零（高开关比）。注意这里是**单光子边带**跃迁（驱动频率低于比特与腔频），不同于常规 cQED 的双光子边带。

![[assets/figures/longitudinal-coupling/potts2025-fig2-ondemand-jc.jpg]]
*按需强耦合：红边带驱动使比特-腔频率差处开启有效 JC 相互作用，增强耦合率 g=g₀|⟨a⟩| 由驱动设定；驱动关断时相互作用几乎完全消失（高开关比）。图源：Potts et al. (2025), Fig. 2。*

![[assets/figures/longitudinal-coupling/potts2025-fig3-jc-swaps.jpg]]
*JC 阶梯上的相干交换：从单激发出发的 Rabi 条纹随驱动幅度的演化，归一化布居在比特与腔之间相干交换——沿阶梯逐级上移的光子交换被直接观测；比特的 AC-Stark 频移同时提供腔内光子数的绝对定标。图源：Potts et al. (2025), Fig. 3。*

## 应用指向

- **纯 QND 读出与全连接**：纵向耦合的哈密顿量与 $\sigma_z$ 对易，读出不引入光子数涨落导致的退相干；多比特共享一个腔时纵向耦合天然支持**全对全连接**。
- **非高斯态工程**：单光子强耦合区保留相互作用的全部非线性——耗散工程可产生具有 Wigner 负性的态（薛定谔猫态协议）。
- **引力退相干实验**：纵向 cQED 允许向线性腔注入大量相干驱动；把腔换成集成光力学器件，经"双重态交换"可生成**机械**薛定谔猫态，用于检验引力对量子叠加的作用。
- **与最优控制读出的对照**：对色散（横向）读出用 Pontryagin 最优脉冲优化后，其 SNR 在大临界光子数区间已可媲美纵向读出方案——见[[readout-measurement/dispersive-readout|色散读出]]词条"读出脉冲的最优控制"一节。

## 与其他概念的关系

- [[circuit-qed/charge-photon-coupling|电荷–光子耦合]]：横向（偶极）耦合是 cQED 的默认通道，本词条是其纵向对偶——物理（调频 vs 换态）、哈密顿量形式（σ_z vs σ_±）与应用（QND/大光子数 vs 快交换/强杂化）成对映。
- [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]：按需 JC 把 JC 相互作用变成驱动可开关的资源——耦合率、时长皆由边带驱动设定。
- [[circuit-qed/dispersive-shift|色散频移]]：纵向耦合的 AC-Stark 频移用于光子数绝对定标，与色散区横向耦合的 $\chi$ 移位互补。
- [[circuit-qed/strong-coupling|强耦合判据]]：$g_0$ 大于所有耗散率一个量级，是"单光子强耦合"的纵向版判据。
- [[superconducting-qubits/flowermon-qubit|Flowermon]] 等对偶性设计同属"用电路对称性/拓扑压低寄生通道"的家族——这里压低的是横向偶极矩。

## 参考文献

- Potts, C. A., Dekker, R. C., Deve, S., Strijbis, E. W., Steele, G. A. Strong Intrinsic Longitudinal Coupling in Circuit Quantum Electrodynamics. *Physical Review Letters* 134, 153603 (2025). DOI: 10.1103/physrevlett.134.153603；arXiv:2407.02024（QAtlas 缓存：2407.02024）。
- 色散读出的最优控制脉冲（SNR 对照方）：Zhou, M., Cárdenas-López, F. A., Sugny, D., Chen, X. (2024). arXiv:2412.20149，另见[[readout-measurement/dispersive-readout|色散读出]]词条参考文献。
