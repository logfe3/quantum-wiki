---
title: 自旋锁定量子比特
description: 用连续失谐驱动把 transmon 锁定在时钟条件上，使 dressed 比特对相位噪声一阶免疫，并在 dressed 基下完成受保护的 DRAG 单比特门与绝热 ZZ 两比特门。
aliases:
 - 自旋锁定
 - spin locking
 - spin-locked qubit
 - dressed qubit
 - 时钟条件
 - 连续动力学解耦
tags:
 - 超导量子比特
 - 连续驱动
 - 鲁棒控制
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvehaptp2cgjqmvvxvm15e
source_updated: 2026-09-15T21:28:11Z
---

<div class="entry-lead">[[qubit-control/dynamical-decoupling|动力学解耦]]靠脉冲翻转压制低频噪声，超导比特却一直难以享受它的红利——脉冲间隙的泄漏与失谐把好处吃掉。自旋锁定（spin locking）是它的连续波版本：给 transmon 加一个**不失谐到共振以外**的强驱动，把计算基搬到驱动缀饰（dressed）态上。Zuk 等人 2023 年的方案给出了 transmon 版的关键修正——驱动必须**正失谐**并满足时钟条件 $\delta\simeq\Omega^2/2\eta$，此时 dressed 能隙对频率涨落的一阶导数为零，$1/f$ 相位噪声下的退相干时间提升 300–600 倍；再配合 dressed 基 DRAG 门（10 ns，不保真度 $3\times10^{-6}$）与 bus-below-qubit 架构的绝热 CZ 门（100 ns，$2\times10^{-7}$），连续解耦首次完整嵌入超导量子计算的门操作流程。</div>

## 为什么两能级自旋锁定在 transmon 上会失效

对二能级系统，共振连续驱动 $(|0\rangle\pm|1\rangle)/\sqrt2$ 就是受保护缀饰态——相位噪声只引起缀饰轴的微小摆动。transmon 不是二能级系统：共振强驱动会把布居泵到 $|2\rangle$、$|3\rangle$ 等更高 Fock 态，而这些态对频率涨落的敏感度是**线性**的——保护荡然无存。出路是换一种驱动几何：驱动**正失谐**（$\delta>0$），让最低两个缀饰态 $|\tilde 0\rangle$、$|\tilde 1\rangle$ 主要由 $|0\rangle$ 与 $|1\rangle$ 构成、少量混入 $|2\rangle$，再用下面的时钟条件统一抵消两者的光子数敏感度。

## 时钟条件：transmon 的受保护工作点

旋转波近似下，失谐驱动 transmon 在旋转系中的哈密顿量为

$$
H = -\delta\, a^\dagger a - \frac{\eta}{2} a^{\dagger 2} a^2 + \frac{\Omega}{2}(a + a^\dagger)
$$

其中 $a$（$a^\dagger$）是湮灭（产生）算符，$\eta>0$ 是非谐性（$|1\rangle\to|2\rangle$ 与 $|0\rangle\to|1\rangle$ 的频率差），$\Omega$ 是驱动 Rabi 频率，$\delta=\omega_d-\omega$ 是驱动频率相对比特频率的失谐。设缀饰本征态为 $|\tilde i\rangle$、本征能为 $\tilde E_i$。相位噪声（频率涨落）引起的能量移动正比于各态的平均光子数，因此对相位噪声一阶免疫的条件是

$$
\langle\tilde 0|a^\dagger a|\tilde 0\rangle = \langle\tilde 1|a^\dagger a|\tilde 1\rangle,
\qquad\text{即}\qquad
\frac{d\tilde E_{01}}{d\delta} = 0
$$

这称为**时钟条件**（clock condition，与原子钟的微分灵敏度为零同构）。微扰论（小参数 $\epsilon=\Omega/\eta$ 展开）给出解析解

$$
\delta = \frac{\Omega^2}{2\eta} + \mathcal{O}(\epsilon^4),
\qquad
\tilde E_{01} = \Omega + \mathcal{O}(\epsilon^2)
$$

即最优失谐恒为正、随 $\Omega$ 平方增长；$|\Omega|\lesssim0.2\eta$ 时解析式与数值对角化吻合。该条件还顺带免疫来自**另一个色散耦合系统**（读出腔光子数涨落、TLS 布居涨落）的相位噪声——它们对比特的作用都是 $\chi a^\dagger a b^\dagger b$ 型，时钟条件同样消去其一阶效应。

![[assets/figures/spin-locked-qubit/zuk2023-fig2-clock-condition.jpg]]

*时钟条件的数值验证：(a) 缀饰能隙 $\tilde E_{01}$ 随失谐 δ 的变化（不同 Ω），圆点为数值极小、星标为解析预言 δ=Ω²/(2η)、Ẽ₀₁=Ω；(b) 满足时钟条件的 δ(Ω) 数值解，虚线拟合给出 δ/η=(1/2±0.002)(Ω/η)²；(c) 1/f 噪声下退相干时间 T_{φ,ρ} 随 δ 的变化——裸 transmon T_φ≈700 ns，最优失谐点提升 300–600 倍，且最大 T_{φ,ρ} 随 Ω 线性增长（插图）。图源：Zuk et al. (2023), Fig. 2。*

退相干压制的标度可以解析理解：偏离时钟条件 $\delta'$ 时，缀饰能隙的二阶导 $d^2\tilde E_{01}/d\delta'^2=1/\Omega+\mathcal{O}(\Omega^0)$——**增大 Ω 既加深保护势阱又线性延长退相干时间**。代价是驱动幅度噪声，但其效应按 Ω 的涨落平方进入，不在一阶敏感度里。

## dressed 基单比特门：DRAG 移植

在缀饰基中做门控有两难：微波场耦合电荷算符，而缀饰基中的 $a$ 没有选择定则——$|\tilde 0\rangle\to|\tilde 1\rangle$ 与 $|\tilde 1\rangle\to|\tilde 2\rangle$ 等跃迁同时被驱动。解法是移植 DRAG（derivative-removal-by-adiabatic-gate）方案：在全余弦势模型上叠加两个正交驱动项，脉冲取

$$
\Omega_x'(t) = \frac{A}{T_g\tilde n_{01}}\left(1-\cos\frac{2\pi t}{T_g}\right),
\qquad
\Omega_y'(t) = -\frac{l_D}{\eta}\frac{d}{dt}\Omega_x'(t)
$$

其中 $T_g$ 是门时间、$\tilde n_{01}=\langle\tilde 0|n|\tilde 1\rangle$ 是缀饰态间电荷矩阵元、$A$（面积）、$l_D$（DRAG 系数）与辅助驱动频率 $\omega_d'$ 是优化参数。数值模拟（ω/2π=5 GHz、η/2π=300 MHz、Ω=0.2η）给出 **X 门：T_g=10 ns，平均不保真度 $3\times10^{-6}$**；Ω=0.3η 的 X 门与 X_{π/4} 门有相近的时间与保真度。门足够快，锁定驱动与辅助驱动的幅度噪声在标准假设下不构成保真度瓶颈。缀饰基里的剩余单比特 Z 旋转可以在编译期用软件虚拟 Z 门吸收。

## 两比特门：bus-below-qubit 架构的绝热 ZZ 门

自旋锁定的最大难点是两比特门：横向电荷–电荷耦合会把许多缀饰能级搅在一起、无法瞄准特定跃迁。方案是把被锁定比特放进**bus-below-qubit 架构**——两只 transmon（Q1 被连续驱动、Q2 不驱动）由一只可调耦合器 C 连接，绝热扫耦合器频率产生有效 ZZ 哈密顿量

$$
H_{\mathrm{eff}} = \tilde g_{zz}(t)\,\tilde\sigma_z^{1}\sigma_z^{2},
\qquad
\tilde g_{zz}(t) = \tfrac14\{E_{\tilde 00}(t) - E_{\tilde 01}(t) - E_{\tilde 10}(t) + E_{\tilde 11}(t)\}
$$

其中 $\tilde\sigma_z^1$ 是被驱动比特缀饰基的 Pauli-Z、$\sigma_z^2$ 是未驱动比特的 Pauli-Z，$E_{\tilde ij}(t)$ 是缀饰比特处于 $|\tilde i\rangle$、比特 2 处于 $|j\rangle$、耦合器基态的瞬时（Floquet）能量。实现 CZ（差单比特 Z 旋转）只需 $\int_0^{T_g}\tilde g_{zz}(t)\,dt=\pi/4$。绝热 ZZ 门天然待在计算基内、不依赖瞄准跃迁，对串扰多体误差项也更鲁棒；自旋锁定还把直接二阶 ZZ 相互作用压小，使器件可以工作在跨立（straddling）区间之外。

![[assets/figures/spin-locked-qubit/zuk2023-fig5-bus-below-qubit.jpg]]

*bus-below-qubit 架构：Q1（被连续驱动、自旋锁定）与 Q2（未驱动）均为 transmon，C 为可调耦合器；Q1 全程被锁定，Q2 承担常规门控。只需锁定数据比特即可获得相位噪声保护。图源：Zuk et al. (2023), Fig. 5。*

![[assets/figures/spin-locked-qubit/zuk2023-fig6a-zz-vs-coupler.jpg]]

*有效 ZZ 耦合强度 |g̃_zz|/2π 随耦合器频率 ω_c/2π 的变化：ω_c≈3.58 GHz 处 g̃_zz≈0（闲置停靠点，同时相位噪声敏感度最低），绝热调到 ω_c≈4.31 GHz 得 |g̃_zz|/2π≈2.5 MHz，全程不穿越任何共振。图源：Zuk et al. (2023), Fig. 6(a)。*

代表参数（ω/2π=5 GHz、η/2π=300 MHz、Ω=0.2η、比特 2 为 4.55 GHz/η₂/2π=200 MHz、耦合 g_{1c}/2π=190 MHz、g_{2c}/2π=200 MHz、g_{12}/2π=−30 MHz）下的 CZ：门时间 100 ns、平均不保真度 $2\times10^{-7}$——实际意义上是相干极限（$T_1$ 主导：$T_1=100\ \mu s$ 时门期 $T_1$ 贡献约 $10^{-3}$），主要误差源是绝热性相关的泄漏。把耦合减到 g_{1c}=g_{2c}=150 MHz、g_{12}=−5 MHz（更易工艺实现）时 CZ 不保真度 $\approx2\times10^{-5}$；压缩到 80 ns 则升至 $3\times10^{-4}$，与当前最优 transmon 的 $T_1$ 贡献相当——门速的实用上界由 $T_1$ 与绝热性的平衡决定。

## 表面码语境：只锁定数据比特即可

在表面码里，数据比特的相位噪声若不锁定会通过 CZ 门污染 ancilla 读出。数值与表面码模拟表明方向相反的传播（ancilla→数据）被压制：**只自旋锁定数据比特、ancilla 照常测量**就足以保护码，免去了频繁测量缀饰态的麻烦。锁定数据比特后码阈值仅小幅变化（Z 错误模型下 p_th≈0.52%），实验复杂度却减半——这是该方案面向容错架构的模块化卖点：同一芯片上可以只给需要的比特上锁。

## 适用边界

- **锁定驱动必须强**：要压过耦合与相位噪声（$\Omega\gg g,\sigma_f$），典型取 $\Omega=0.2$–$0.3\,\eta$；这要求驱动线有足够带宽与功率线性度。
- **失谐必须调到时钟条件**：δ=Ω²/(2η) 附近的容差随 Ω 增大而变宽（二阶导 1/Ω），但 Ω 太大时解析式失效、需数值标定 δ(Ω) 曲线。
- **门保真度实际受 $T_1$ 限制**：方案压制的是相位噪声（纯退相位），对能量弛豫无保护；$T_1$ 主导时 CZ 保真度上界 ≈T_g/T₁。
- **闲置点需要 ZZ 自由点**：耦合器停靠点须满足 $\tilde g_{zz}=0$，工艺涨落会移动该点、主要影响门速而非保真度。

## 与其他概念的关系

- [[qubit-control/dynamical-decoupling|动力学解耦]]：自旋锁定是其连续波版本——脉冲翻转序列换成永久驻留的缀饰态，在超导比特上绕开了脉冲泄漏问题；两者共享"以高频调制换低频噪声免疫"的思想。
- [[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]：缀饰态就是周期驱动哈密顿量的 Floquet 态，时钟条件是 Floquet 准能级对驱动参数微分灵敏度为零的条件；本词条是 Floquet 框架在门保护上的具体应用。
- [[superconducting-qubits/transmon-qubit|transmon 量子比特]]：非谐性 η 既是锁定可行性的保证（η→∞ 退化为二能级共振锁定），也是限制（Ω≲0.3η 否则泄漏失控）；弱非谐性可调 transmon 的短退相干时间正是该方案瞄准的痛点。
- [[qubit-control/single-qubit-gate|单比特门]]与[[qubit-control/cnot-gate|CNOT 门]]：dressed 基 DRAG 门与绝热 ZZ CZ 门分别是连续解耦版单/两比特门的实例，剩余 Z 旋转由软件虚拟 Z 吸收。
- [[materials-devices/charge-noise|电荷噪声]]：相位噪声（频率涨落）的低频部分正是被时钟条件压制的对象；幅度噪声只以平方阶进入。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 驱动 Rabi 频率 Ω | 0.2–0.3 η（η/2π=300 MHz 时 60–90 MHz） | Zuk 2023 |
| 时钟条件失谐 δ | Ω²/(2η)，解析有效至 Ω≲0.2η | Zuk 2023 |
| 退相干提升倍数 | 300–600（裸 T_φ≈700 ns，1/f 噪声） | Zuk 2023 |
| X 门（dressed 基 DRAG） | T_g=10 ns，平均不保真度 3×10⁻⁶ | Zuk 2023 |
| CZ 门（bus-below-qubit） | T_g=100 ns，不保真度 2×10⁻⁷（相干极限）；80 ns 版 3×10⁻⁴ | Zuk 2023 |
| ZZ 自由点/工作点 | ω_c≈3.58 GHz 停靠；4.31 GHz 得 \|g̃_zz\|/2π≈2.5 MHz | Zuk 2023 |
| CZ 门期 T₁ 贡献 | ≈T_g/T₁（T₁=100 μs 时 ~10⁻³） | Zuk 2023 |
| 表面码阈值（锁定数据比特） | p_th≈0.0052（Z 错误模型） | Zuk 2023 |

## 参考文献

- Zuk, I., Cohen, D., Gorshkov, A. V., Retzker, A. Robust gates with spin-locked superconducting qubits. *Physical Review Research* 6, 013217 (2024). DOI: 10.1103/physrevresearch.6.013217；arXiv:2306.09149（QAtlas 缓存：2306.09149）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
