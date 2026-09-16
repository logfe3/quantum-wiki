---
title: 超导二极管非互易性
description: 用非对称 SQUID 超导二极管在 cQED 中实现相干非互易：方向依赖的动力学电感给出方向依赖谱移，复数比特耦合 J·e^{iφ} 支持非互易 half-iSWAP 门与方向性 Bell 态制备。
aliases:
 - 超导二极管
 - superconducting diode
 - 非互易耦合
 - SD 效应
 - 方向性纠缠
tags:
 - 电路量子电动力学
 - 非互易
 - 约瑟夫森器件
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvkdfd0jwcezvwzgpvb8yj
source_updated: 2026-08-28T10:32:16Z
---

<div class="entry-lead">读出链里的环形器靠铁氧体磁体实现"只进不出"，笨重且难集成。超导二极管效应给出另一条路：同时打破 inversion 与时间反演对称后，超导态本身的正向/反向临界电流不相等——非互易性成为**基态性质**。把它做成 cQED 电路元件，方向依赖的电感直接 translate 成方向依赖的谐振频率与耦合相位，进而支撑非互易的比特-比特门：纠缠可以按指定方向"单向发货"。</div>

## 超导二极管效应

超导二极管（SD）的特征是方向依赖的临界电流 $I_c^+\neq I_c^-$，已在体超导体、约瑟夫森结与 SQUID 中实现。其起源是 inversion（I）与时间反演（T）对称性的同时破缺——与依赖耗散工程的传统非互易路线（参量泵浦环形器等）不同，SD 的非互易性写在超导自由能与序参量演化里，原则上无耗散。可用的调控旋钮包括磁通、自旋轨道耦合、自发对称破缺态与手性微波。

cQED 实现取**非对称 SQUID**：磁通偏置 $\Phi_b$ 设定二极管方向（$\Phi_b=\pm|\Phi_b|$ 对应正向/反向偏置），外加电流 $I_a=I_\pm$ 设定信号方向。方向依赖的临界电流 translate 成方向依赖的动力学电感：

$$
L_\pm = L_0\left[1 + (I_a/I_c^\pm)^2\right],
$$

其中 $L_0$ 是特征电路电感、$I_c^\pm$ 是两个方向的临界电流。把 SD 并联电容 $C$，即得一个**单磁通线可调的非互易谐振器**，两个方向的共振频率

$$
\omega_r^\pm = 1/\sqrt{L^\pm C}
$$

分开——这是所有下游非互易功能的种子。

![[assets/figures/superconducting-diode/dirnegger2025-fig1-sd-nonreciprocal-coupling.jpg]]

*超导二极管与非互易比特耦合：(a) 两个比特电感耦合到一个由非对称 SQUID（蓝）构成的 SD，外部磁通 Φ 偏置——正向偏置时库珀对结合（可通过），反向时解体（被阻断）；(b) 时间反演破缺使比特间耦合一般为复数 J₁₂ = J·e^{iφ₁₂}，非局域相位 φ 由 SD 中非对称模式传播的非互易响应决定。图源：Dirnegger et al. (2025), Fig. 1。*

## 谱学特征：S₂₁ ≠ S₁₂

![[assets/figures/superconducting-diode/dirnegger2025-fig2-spectroscopy.jpg]]

*SD 双端口网络的谱学表征：(a) 固定泵频 ω_p/ω_r=0.99 时的透射谱（δω=0 时正反向重合）；(b) δω=50 MHz 时 S₂₁ 与 S₁₂ 出现清晰的不对称谱移；(c) 对应的非互易比 R(ω)。模拟含 Kerr 非线性 Λ/ω_r=10⁻⁷ 与双光子损耗 κ/ω_r=10⁻⁴，显示 SD 非互易性对非理想性稳健；(d) 三阶约瑟夫森非线性 c₃ 随磁通与结传输率的变化。图源：Dirnegger et al. (2025), Fig. 2。*

用 Heisenberg–Langevin 方程（含 Kerr 非线性、驱动与环境耦合）计算两端口透射谱：零泵失谐时正反向对称；泵失谐 $\delta\omega=50\ \mathrm{MHz}$ 时 $S_{21}$ 与 $S_{12}$ 出现清晰不对称谱移。非互易比 $R(\omega)$ 量化这一不对称——且在真实 Kerr（$\Lambda/\omega_r=10^{-7}$）与双光子损耗（$\kappa/\omega_r=10^{-4}$）下依然稳健。**$S_+(\omega)\neq S_-(\omega)$ 是 SD 的中心基准关系**：谱学上直接可测、且不需要任何耗散。

## 非互易比特耦合与方向性布居转移

以 SD 为中介，两比特间的有效耦合为**复数**

$$
J_{12} = J\,e^{i\varphi_{12}},
$$

其中耦合幅度 $J$ 由电感耦合强度决定，而非局域相位 $\varphi_{12}$ 由 SD 的非互易响应决定——磁通偏置调 $\varphi$ 从 0 扫到 $\pm\pi/2$：

- $\varphi=0$：耦合互易，两比特布居动力学对称，纠缠双向等量；
- $\varphi=\pm\pi/2$：布居转移**方向化**——激发沿一个方向增强、反方向受抑，系统内建"隔离器"行为。同时纠缠（concurrence）在 half-iSWAP 时标（$t=\pi/4J$）附近逼近 1.0，且 $C_{01}\neq C_{10}$；纠缠转移对比度 $\Delta C(t)$ 在 $\varphi=\pm\pi/2$、$\Gamma/J=2$（$\Gamma$ 为集体交叉衰变）处最大，并在相当大的参数空间内维持。

## 方向性 Bell 态：非互易 half-iSWAP 门

![[assets/figures/superconducting-diode/dirnegger2025-fig4-bell-tomography.jpg]]

*half-iSWAP（t=π/4J）后的 Bell 态层析：(a–d) 无衰变（γ=Γ=0）时 φ ∈ {π/2, −π/2, π/4, −π/4} 的密度矩阵——Bell 态携带可调的非平庸相位（Im[ρ]≠0）；(e–f) 含集体交叉衰变 Γ/J=1 时，φ=π/2 生成 |Ψ−⟩ 保真度 ~80%，而 φ=−π/2 方向保真度 <50%（~30%）——纠缠的生成与分发是方向性的。图源：Dirnegger et al. (2025), Fig. 4。*

把初态 $|01\rangle$ 演化到 $t=\pi/4J$（half-iSWAP）：无衰变时四个 $\varphi$ 取值都给出携带可调非平庸相位的 Bell 态（$\mathrm{Im}[\rho]\neq0$）。加入集体交叉衰变后出现**真正的非互易**：$\varphi=+\pi/2$ 方向生成 $|\Psi_-\rangle$ 保真度约 80%，$\varphi=-\pi/2$ 方向低于 50%（约 30%）——二极管非互易性与衰变协同作用，使纠缠的生成与分发具有方向性。这构成**非互易 entangling 门**的最小演示：同一器件既是定向信号路由器又是定向纠缠源。

## 定位与前景

- **vs 耗散型非互易**：参量泵浦环形器/隔离器靠时变耗散打破互易；SD 路线的非互易来自基态对称性，"passive"（单根磁通线控制）、可片上集成；
- **应用图景**：全连接微波量子网络中的高保真信号路由与纠缠分发——非互易性嵌入器件级而非链路级；对读出链的意义是替代笨重的磁性隔离器（见[[scaling-automation/cryo-electronics|低温电子学]]链路中的隔离器位置）；
- **现状**：目前为理论与数值方案（Heisenberg–Langevin 谱学、主方程动力学），器件级实验验证是下一步。

## 与其他概念的关系

- [[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]：共用 SQUID 非线性电感平台——对称 SQUID 给出可调互易电感，非对称 SQUID + 磁通偏置给出非互易电感；
- [[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]：互易版本的比特-比特耦合；SD 把耦合常数推广为复数并赋予方向；
- [[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]：泵浦调谐的非互易谱移属于周期驱动调制家族；
- [[superconducting-qubits/zz-coupling|ZZ 相互作用]]：另一类可调耦合——相位型耦合的互易对照；
- [[circuit-qed/strong-coupling|强耦合判据]]：非互易耦合同样需在退相干前完成门操作（half-iSWAP 时标 π/4J）。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 谐振器频率 ω_r/2π | 5 GHz（模拟基准） | Dirnegger 2025 |
| 泵参数 | ω_p/ω_r = 0.99；δω = 50 MHz 触发 S₂₁/S₁₂ 分裂 | Dirnegger 2025 |
| 非理想性容限 | Kerr Λ/ω_r = 10⁻⁷、双光子损耗 κ/ω_r = 10⁻⁴ 下非互易稳健 | Dirnegger 2025 |
| 耦合相位扫描 | φ ∈ [−π/2, π/2]；±π/2 给出最大方向性 | Dirnegger 2025 |
| 方向性 Bell 态 | φ=π/2：\|Ψ−⟩ 保真度 ~80%；φ=−π/2：<50%（~30%）；Γ/J=1 | Dirnegger 2025 |
| 纠缠对比度峰值 | ΔC(t=π/4J) 最大于 Γ/J=2、φ=±π/2 | Dirnegger 2025 |

## 参考文献

- Dirnegger, N., Narang, P., Arora, A. Nonreciprocal quantum information processing with superconducting diodes in circuit quantum electrodynamics (2025). arXiv:2511.20758（QAtlas 缓存：2511.20758）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
