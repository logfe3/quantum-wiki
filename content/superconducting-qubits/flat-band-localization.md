---
title: 平带局域化与 Aharonov–Bohm 笼蔽
description: 用 transmon 阵列模拟菱形格子紧束缚模型：合成磁通把带色散从色散调到全平，平带本征态是紧致局域态（AB 笼蔽）；无序在色散带侧诱导 Anderson 局域化、在平带侧反而诱导退局域化，跨界附近呈现单参数标度坍缩。
aliases:
 - flat-band localization
 - 平带
 - 紧致局域态
 - compact localized states
 - AB caging
 - Aharonov–Bohm 笼蔽
 - 无序诱导退局域化
 - disorder-induced delocalization
tags:
 - 超导量子比特
 - 量子模拟
 - 平带物理
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvh0e0qh6extmhd41mqb05
source_updated: 2026-09-04T12:22:58Z
---

<div class="entry-lead">晶格中阻止粒子传播的机制不止一种：无序导致 Anderson 绝缘体，相互作用导致 Mott 绝缘体，而**平带**（whole band quenched kinetic energy）凭量子干涉把粒子"笼蔽"在原地。Rosen 等人（MIT/林肯实验室）用 16 比特 transmon 处理器中央的 10 个量子比特搭出菱形格子：参数耦合的复相位提供逐元胞可调的合成磁通 Φ，Φ 从 0 扫到 π 时能带由色散变全平，本征态收缩为紧致局域态。有趣的是无序扮演相反角色——色散带侧加无序让粒子更局域（经典 Anderson），平带侧加无序反而破坏笼蔽、让粒子重新传播（退局域化）；跨界附近的数据呈现半导体金属-绝缘体转变式的单参数标度坍缩。</div>

## 菱形格子与合成磁通

10 个磁通可调 transmon 排成三个菱形元胞加一个终端格点，格点间电容耦合。每个近邻对用一个比特的参数调制（频率对准失谐）激活粒子交换 $J/2\pi = 2$ MHz；在 A–C 子格的交换上附加复相位即得穿入每个 2×2 元胞的合成磁通 Φ（Peierls 相位方案与[[superconducting-qubits/synthetic-flux-qubit-ring|合成磁通与分数磁通量子]]同族）。有效哈密顿量为

$$
\frac{\hat H}{\hbar} = J \sum_{j=0}^{2}\left( \hat a_{A,j}^{\dagger}\hat a_{B,j} + e^{i\Phi}\hat a_{A,j}^{\dagger}\hat a_{C,j} + \hat a_{B,j}^{\dagger}\hat a_{A,j+1} + \hat a_{C,j}^{\dagger}\hat a_{A,j+1} \right) + \mathrm{H.C.},
$$

其中 $\hat a_{M,j}$ 是占据格点 $M_j$（$M\in\{A,B,C\}$，$j$ 为元胞编号）的玻色湮灭算符。比特平均非谐 $U/2\pi = -218(6)$ MHz，比 $J$ 大两个数量级，每个格点最多容纳一个粒子——等效硬核玻色子。Φ=0 时两条色散带夹一条零能平带；Φ 增大时色散带变窄、平带保持；到 **Φ=π 时三条带全部变平**（能量 0、±2J）——菱形格子罕见的性质：平带行为决定所有能量尺度上的动力学。

平带的单粒子本征态是**紧致局域态**（CLS）：只在五个格点（一个 A 格点及其相邻 B、C 格点）上有非零幅。物理图像是每个 2×2 元胞内的 Aharonov–Bohm 相消干涉——粒子绕元胞两条路径相位差为 π，传播振幅彼此抵消，即 AB 笼蔽。Φ=π 时所有本征态都是 CLS：在格点空间局域制备的激发只与近邻少数 CLS 重叠，因而无法传播。

![[assets/figures/flat-band-localization/rosen2024-fig1-rhombic-lattice.jpg]]

*transmon 阵列中的菱形格子：(a) 4×4 处理器显微照片，中央三条对角线（着色）构成三个菱形元胞，其余六比特失谐闲置；(b) 菱形格子示意，箭头键上诱导 Peierls 相位使每个 2×2 元胞穿入磁通 Φ；(c) 格点为非对称可调 transmon，近邻电容耦合；(d) Φ=0 的能带结构——两条色散带夹一条平带；(e) Φ=0 基态布居铺满全格点；(f) Φ=π 时三带全平；(g) 两个简并基态各自局域在一个 A 格点及相邻 B、C 格点上（紧致局域态）。图源：Rosen et al. (2024)，Fig. 1。*

## 磁通调输运：从弹道到笼蔽

单粒子量子行走实验：微波 π 脉冲把粒子制备在最左端格点 $A_0$，演化时间 $t$ 后撤去调制、测量全格点布居（4000 次单发测量后按总激发数后选择，并用读出混淆矩阵修正二阶误差）。输运用格点布居的均方根位置量化：

$$
\mathcal{D} = \sqrt{\sum_j j^2\, \langle \hat n_{A,j} + \hat n_{B,j} + \hat n_{C,j} \rangle},
$$

配合逆参与率 $\mathcal{I} = \sum_{M,j}\langle \hat n_{M,j}\rangle^2$（越大越局域）。Φ=0 时 $\mathcal{D}$ 先线性增长（弹道输运）后在有限格子边界上振荡反射；Φ 趋近 π 时传播减慢；Φ=π 时粒子被关在第一个元胞内，$\mathcal{D}\approx 0$ 对所有时刻成立——时间平均的 $\bar{\mathcal{D}}$ 随 Φ 单调下降，与含时数值模拟逐点吻合。

![[assets/figures/flat-band-localization/rosen2024-fig2-flux-localization.jpg]]

*平带局域化随磁通的演化：粒子制备在最左端格点后自由传播，图为 A 子格各格点布居随时间与磁通的变化（测量与模拟对照）。Φ=0 与 2π（最大色散）时粒子到达最右端格点并被边界反射；Φ 趋近 π 时可达范围逐渐收缩；Φ=π 时粒子被完全限制在第一个元胞内——紧致局域态的直接观测。图源：Rosen et al. (2024)，Fig. 2。*

## 无序的双面性：Anderson 局域化 vs 退局域化

在位能量无序用

$$
H_D = \delta \sum_{j=0}^{3}\sum_M \epsilon_{M,j}\, \hat a_{M,j}^{\dagger}\hat a_{M,j}
$$

加入，$\epsilon_{M,j}$ 取自单位方差高斯分布（10 个固定无序构型取平均），$\delta$ 为无序强度。两个 regime 的行为截然相反：

- **Φ=0（色散带）**：增大 $\delta$ 让粒子越来越难到达远端格点——教科书式 Anderson 局域化；
- **Φ=π（平带）**：零无序时粒子被笼蔽、远端布居恒为零；有限无序破坏平带干涉后粒子反而开始传播——**无序诱导退局域化**。但 $\delta \gtrsim 2J$ 后常规 Anderson 局域化重新占主导，粒子再次局域。

注意对任意 $\delta>0$ 局域长度都有限（系统整体仍是绝缘体），退局域化只是提高电导、并非产生金属。

跨界附近出现更深的结构：弱无序下 $\Phi\approx0.7\pi$ 时 $\bar{\mathcal{D}}$ 对无序强度几乎不敏感。按金属-绝缘体转变分析的传统做单参数标度，取 $\Phi_C = 0.69\pi$、$\kappa = 1.7$，数据按 $\delta|\Phi-\Phi_C|^{\kappa}$ 重标后近似坍缩到单一曲线。本征态分析却找不到临界点——有限尺寸/有限时间数值检查表明坍缩不是伪影。这个"看似量子临界、实为突然跨界"的现象被作者理解为**本征态局域化与平带群速度压制两种机制的竞争**。

![[assets/figures/flat-band-localization/rosen2024-fig4-crossover-scaling.jpg]]

*局域化-退局域化跨界与关联无序：时间为 10 个无序构型平均的 $\bar{\mathcal{D}}$ 随无序强度 δ 的变化（虚线为模型）。弱无序下随 Φ 趋近 π，行为从 Anderson 局域化（δ 增大、$\bar{\mathcal{D}}$ 减小）翻转为退局域化（δ 增大、$\bar{\mathcal{D}}$ 增大）；Φ≈0.7π 时 $\bar{\mathcal{D}}$ 对弱无序不敏感。图源：Rosen et al. (2024)，Fig. 4。*

关联无序进一步印证机制：对称无序（$\epsilon_{B,j}=\epsilon_{C,j}$）下 Φ=π 时每个本征态仍被限制在原来的五个格点内——粒子保持局域（存在对无序免疫的零能扩展态，类比随机二聚体模型）；反对称无序（$\epsilon_{B,j}=-\epsilon_{C,j}$）下零能扩展态同样存在，退局域化最显著。多粒子情形（硬核相互作用，$U\approx100J$）：Φ=π 附近仍可见局域化倾向，但粒子不再被关进单个元胞——**相互作用同样破坏平带干涉**，且细节依赖初始组态（如 $A_0+B_0$ 初始时 Φ=0 附近也出现局域化，$B_0+C_0$ 初始则没有）。

## 与其他概念的关系

- [[superconducting-qubits/synthetic-flux-qubit-ring|合成磁通与分数磁通量子]]：同用驱动相位实现 Peierls 规范场；本词条把它用作"带色散旋钮"，该词条用作量子模拟的拓扑资源。
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]与[[superconducting-qubits/floquet-anisotropic-transverse-interactions|横向各向异性相互作用的 Floquet 工程]]：同一代参数耦合/边带技术的两个应用方向——一个合成自旋模型相互作用，一个合成含规范场的紧束缚模型。
- [[scaling-automation/thouless-pumping-jja|约瑟夫森结阵列中的 Thouless 量子泵浦]]：超导量子模拟平台上格点模型 + 规范场的另一实现，与本词条互为补充（泵浦 vs 平带）。
- [[fundamentals/wigner-molecule|Wigner 分子]]：另一类"相互作用决定空间构型"的局域化物理；平带笼蔽则是纯干涉效应，无序与相互作用扮演破坏者的角色。

## 参考文献

- Rosen, I. T., Muschinske, S., Barrett, C. N., Rower, D. A., Das, R., Kim, D. K., Niedzielski, B. M., Schuldt, M., Serniak, K., Schwartz, M. E., Yoder, J. L., Grover, J. A., Oliver, W. D. Flat-band (de)localization emulated with a superconducting qubit array (2024). arXiv:2410.07878（QAtlas 缓存：2410.07878）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
