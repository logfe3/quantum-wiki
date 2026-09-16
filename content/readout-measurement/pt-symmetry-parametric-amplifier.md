---
title: 参量放大器中的 PT 对称性破缺
description: 把简并参量放大器的两个正交分量映射为增益/损耗二聚体，在泵浦失谐与泵浦强度阈值处观测到 PT 对称性破缺相变与奇异点。
aliases:
 - PT 对称性破缺
 - PT symmetry breaking
 - 奇异点
 - exceptional point
 - PT-dimer
 - 宇称时间对称
tags:
 - 读出与测量
 - 非厄米物理
 - 参量放大
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgwbcmg0qvnnhtjse22ft
source_updated: 2026-09-04T19:46:31Z
---

<div class="entry-lead">把[[readout-measurement/parametric-amplifier|参量放大器]]的两个正交分量分别看作"增益模"与"损耗模"，简并参量放大器就变成了教科书里的 PT 二聚体（PT-dimer）：泵浦强度扮演增益/损耗，泵浦失谐扮演两模之间的耦合。Gaikwad 等人在三波混频 JPA 的时间域瞬态响应中，直接观测到失谐越过阈值 $\delta=\nu$ 时本征值从实变虚的 PT 对称性破缺相变——超导微波电路由此获得了第一个"无损增益"型奇异点平台。</div>

## 物理背景：非厄米哈密顿量与 PT 二聚体

PT（宇称–时间，Parity–Time）对称性研究的出发点是：一类非厄米哈密顿量尽管本征值为复数的一般预期，在 PT 对称未破缺区仍可以拥有**全实谱**。最简单的范例是 PT 二聚体——两个相互耦合的模式 A、B，分别带有大小相等、符号相反的增益与损耗（各为 $\gamma/2$），两模之间以速率 $g$ 耦合。其有效哈密顿量与本征值为

$$
H_{\mathrm{PT}} = \begin{pmatrix} +i\gamma/2 & g \\ g & -i\gamma/2 \end{pmatrix} = g\,\sigma_x + i\frac{\gamma}{2}\,\sigma_z,
\qquad
\lambda_\pm = \pm\sqrt{g^2 - (\gamma/2)^2}
$$

其中 $\gamma$ 是增益/损耗速率（$+i\gamma/2$ 使模式振幅按 $e^{+\gamma t/2}$ 增长，$-i\gamma/2$ 使之衰减），$g$ 是两模耦合速率，$\sigma_x$、$\sigma_z$ 是泡利矩阵。当 $g>\gamma/2$ 时根号内为正，本征值全实——PT 对称**未破缺**；当 $g<\gamma/2$ 时本征值纯虚——PT 对称**破缺**，一个模式指数放大、另一个指数压缩；交界处 $g=\gamma/2$ 即**奇异点（exceptional point）**：哈密顿量不可对角化，两个本征态合并成同一个本征模。

![[assets/figures/pt-symmetry-parametric-amplifier/gaikwad2023-fig1a-pt-dimer.jpg]]

*PT 二聚体示意：两个耦合模式分别带增益与损耗，宇称操作交换两模、时间反演交换增益与损耗，系统整体在 PT 操作下不变。图源：Gaikwad et al. (2023), Fig. 1(a)。*

![[assets/figures/pt-symmetry-parametric-amplifier/gaikwad2023-fig1b-eigenvalue-spectrum.jpg]]

*PT 二聚体复本征值谱：横轴为耦合/增益比，本征值从纯虚（PT 破缺区）经奇异点过渡到纯实（PT 未破缺区），图中 $\gamma=1$。图源：Gaikwad et al. (2023), Fig. 1(b)。*

此前超导电路中的奇异点实验多采用**纯耗散**（被动 PT）方案——只靠损耗、靠衬底偏置的暗态等效出增益，增益本身仍来自带噪声的非相干过程。而量子力学的算符对易关系要求：任何"真增益"都必须附加量子噪声。唯一例外是**压缩**——一个正交分量被放大时其共轭分量被反放大，$G_\parallel G_\perp = 1$ 保持对易关系不破坏，即"无耗散增益"。简并参量放大器恰好是这种增益的自然载体。

## 从简并参量放大器到 PT 二聚体

三波混频简并参量放大器（信号与闲频简并，$\omega_s=\omega_i=\omega_p/2$）在旋转坐标系下的哈密顿量为

$$
H_{\mathrm{DPA}} = \delta\, a^\dagger a + \frac{\nu}{2}\left(i a^{\dagger 2} - i a^{2}\right)
$$

其中 $a$（$a^\dagger$）是信号频率的光子湮灭（产生）算符，$\delta \equiv \omega_p/2 - \omega_0$ 是泵浦半频相对放大器谐振频率 $\omega_0$ 的失谐，$\nu$ 是泵浦强度（对约瑟夫森电感的调制深度），末两项描述两个信号光子与一个泵浦光子之间的三波混频。变换到正交分量基 $I=(a+a^\dagger)/\sqrt2$、$Q=(a-a^\dagger)/i\sqrt2$，海森堡运动方程变为

$$
i\,\partial_t \binom{I}{iQ} = \begin{pmatrix} i\nu & \delta \\ \delta & -i\nu \end{pmatrix} \binom{I}{iQ}
$$

这个演化矩阵正是 PT 二聚体哈密顿量：**泵浦 $\nu$ 充当增益/损耗 $\gamma/2$ 的角色，失谐 $\delta$ 充当耦合 $g$**。PT 相变阈值对应

$$
|\delta| = \nu
$$

失谐大（$|\delta|>|\nu|$）时泵浦太弱、钉不住信号相位，两个正交分量做**振荡**演化——PT 对称未破缺；失谐小（$|\delta|<|\nu|$）时泵浦足以给一个分量相干增益、同时压缩另一个分量——PT 对称破缺。与以往"两个物理模式"的 PT 系统不同，这里整套 PT 物理发生在**单个电磁模式的两个正交分量**之间。

## 器件实现：一阶磁通敏感的窄带三波混频放大器

![[assets/figures/pt-symmetry-parametric-amplifier/gaikwad2023-fig2-device-schematic.jpg]]

*简并参量放大器器件：(a) 光学显微照片；(b) 等效电路——端口 1 同时注入泵浦与信号，端口 2 弱耦合输出以监测放大器动力学；(c) 磁通偏置在工作点使泵浦对约瑟夫森电感产生一阶调制；(d) 泵浦开/关时的透射谱，泵浦开启后谐振附近出现约 4.2 dB 的增强。图源：Gaikwad et al. (2023), Fig. 2。*

实验器件是为 PT 动力学"慢化"而专门设计的窄带三波混频放大器：电容 $C_a=1.085\ \mathrm{pF}$、线性电感 $L_a=0.92\ \mathrm{nH}$、约瑟夫森电感 $L_J=0.516\ \mathrm{nH}$（由 4 个 SQUID 串联实现，每个 SQUID 临界电流 $3.2\ \mu\mathrm{A}$、环路面积 $5.5\times5\ \mu\mathrm{m^2}$），经 $C_c=84\ \mathrm{fF}$ 与 50 Ω 端口耦合，无磁通偏置时谐振频率 4.028 GHz、品质因子 $2\times10^4$。外线圈把直流磁通偏置在约 $\Phi_0/6$，使泵浦对约瑟夫森电感的调制**线性化为一阶磁通敏感**——泵浦直接以 $\omega_p$ 调制电感，信号探测在 $\omega_s=\omega_p/2$。器件工作在 20 mK，泵浦线总衰减 50 dB，输出经两个低温环形器和 HEMT 放大后测量。

## 时间域观测：从振荡到放大的相变

由于输出端口的耗散 $\kappa$，PT 动力学表现在**瞬态**响应里：$t=0$ 时刻同时开启泵浦与信号，对解调后的正交分量 $(I,Q)$ 做时间追踪。信号经 $\Delta/2\pi=5\ \mathrm{MHz}$ 的单边带外差移频实现与泵浦的相位锁定干涉，保证长时间相位稳定；放大器工作在简并模式，放大是相敏的——与泵浦同相的分量被放大、正交分量被压缩。在三个依次增强的泵浦强度下扫描失谐，观测到清晰的三段行为：

![[assets/figures/pt-symmetry-parametric-amplifier/gaikwad2023-fig4-pt-breaking-transition.jpg]]

*PT 对称性破缺相变的实验证据：三组泵浦强度（$\nu/2\pi=0.013$、0.046、0.072 MHz，依次增强）下正交分量 $I$ 的时间响应随失谐 $\delta$ 的变化（灰度图，归一化到 7.6 μs 处稳态值）；侧栏为选定失谐处 $(I,Q)$ 的相空间轨迹，底栏为从瞬态提取的振荡频率（数据点）与 PT-dimer 模型本征值（红曲线）——振荡区频率实数（未破缺）、放大区频率纯虚（破缺），边界即奇异点。图源：Gaikwad et al. (2023), Fig. 4。*

弱泵浦（$\nu/2\pi=0.013\ \mathrm{MHz}$）时全部失谐都处于振荡区；泵浦增强到 $\nu/2\pi=0.046$、$0.072\ \mathrm{MHz}$ 后，$|\delta|<\nu$ 的窗口逐渐张开、窗口内 $I$ 单调指数饱和——正是"振荡（未破缺）→ 放大（破缺）"的 PT 相变。定量比较采用含自克尔项 $\chi$ 与探测强度 $\lambda$ 的主方程模型：用 QuTiP 求解初态为基态的含耗散演化（$\sqrt{\kappa}a$ 项，$\kappa/2\pi=0.19\ \mathrm{MHz}$ 由实测品质因子给出），拟合三组泵浦强度并提取自克尔 $\chi/2\pi\approx0.095\ \mathrm{MHz}$——模型本征值曲线（红实线）与数据提取的振荡频率吻合。自克尔项同时解释了数据关于零失谐的不对称：克尔能总使谐振频率下移，负失谐侧动力学被它主导。要进一步在奇异点附近研究量子关联与纠缠，需要设法降低器件的自克尔（例如用约瑟夫森结阵列稀释非线性）。

## 意义与适用边界

- **增益无耗散、无噪声代价**：与以往超导电路中靠纯损耗实现的"被动 PT"不同，这里的增益来自压缩——一个分量放大、共轭分量反放大，不违反算符对易关系，也不引入非相干噪声。
- **奇异点应用入口**：奇异点附近的增强传感、非互易器件与拓扑物性模拟是 PT 物理的三大应用方向；本工作把它们首次接入"可相干操控的微波量子放大器"这一平台。
- **瞬态而非稳态**：PT 动力学因输出端口耗散只出现在瞬态（微秒量级）响应中，工作点必须"每次重新开机"——这既是实验技巧（相位锁定外差），也意味着稳态增益谱本身不直接显示奇异点。
- **自克尔是主要非理想性**：$\chi/2\pi\approx0.095\ \mathrm{MHz}$ 使相变边界不对称、并可能限制奇异点附近的量子特性研究。

## 高阶推广：非厄米量子比特与 2^n 阶奇异点的纠缠加速（Feyisa 2024）

上述 PT 二聚体是**二阶**奇异点。同一概念家族可以沿"阶数"与"用途"两个方向推广：把非厄米性装进**量子比特**本身，奇异点的阶数随比特数指数增长，并反过来成为多体纠缠的加速器。

**非厄米比特的构造**（已在超导电路中实验实现）：驱动-耗散的 transmon 是个 qutrit $\{|g\rangle,|e\rangle,|f\rangle\}$；用三维腔中的阻抗失配元件让 $|e\rangle$ 比 $|f\rangle$ 衰减得快、并把 $|g\rangle$ 选择性移出，$\{|e\rangle,|f\rangle\}$ 子空间就构成一个非厄米比特。$n$ 个这样弱耦合的比特由

$$
\hat H=\sum_{j=1}^{n}\left[\left(\Delta_j-\frac{i\gamma_j}{2}\right)\hat\sigma_j^\dagger\hat\sigma_j+\Omega_j\hat\sigma_j^x\right]+\sum_{j\neq k}J_{jk}\left(\hat\sigma_j^\dagger\hat\sigma_k+\hat\sigma_j\hat\sigma_k^\dagger\right)
$$

描述（$\Omega_j$ 驱动幅度、$\Delta_j$ 失谐、$\gamma_j$ 为 $|e\rangle$ 衰减率），$\Delta_j=0$ 时满足被动 PT 对称。**关键结果**：在共振 Rabi 频率 $\Omega=\gamma/4$ 处，$n$ 个无耦合比特出现 $2^n$ 阶奇异点——阶数恰好等于希尔伯特空间维数（三比特为 8 阶，全部本征值聚为 $E_{\mathrm{EP}}=-3i\gamma/4$）；弱耦合 $J=10^{-3}\ \mathrm{rad/\mu s}$ 把它劈裂为四阶与三阶奇异点、并在两侧生成二阶奇异点（强耦合区仍存），更弱的耦合（$10^{-4}$–$10^{-6}$）给出五阶。

![[assets/figures/pt-symmetry-parametric-amplifier/feyisa2024-fig2-tripartite-entanglement.jpg]]
*三比特纠缠动力学（纠缠熵与残余三体缠结）：PT 对称区（Ω≥Ω_EP）内靠近八阶奇异点时，布居与相位的同时重排使三体纠缠迅速生成——比厄米比特在弱耦合下快数千倍。图源：Feyisa et al. (2024), Fig. 2。*

在 PT 对称区（$\Omega\geq\Omega_{\mathrm{EP}}$，相等虚本征值经归一化移除、实本征值主导动力学），靠近高阶奇异点的**多体纠缠生成比厄米情形加速上千倍**；厄米比特并非不能生成高保真 GHZ 态——用强驱动与大耦合常数也能在可比时间内达到保真度 $>0.9995$，代价是控制资源。方案对大 $n$ 可扩展，把非厄米性与高阶奇异点定位成多体量子技术的资源。

![[assets/figures/pt-symmetry-parametric-amplifier/feyisa2024-fig4-four-qubit-entanglement.jpg]]
*四比特情形：更高阶（2⁴=16 阶）奇异点的影响使四体纠缠生成比三比特更快——阶数随比特数指数增长的直接回报。图源：Feyisa et al. (2024), Fig. 4。*

与本词条主体的对照由此清晰：参量放大器里 PT 破缺给出**二阶**奇异点的增益/损耗物理（读出应用），非厄米比特里 $2^n$ 阶奇异点给出**多体动力学**的加速（纠缠生成应用）——同一数学结构的两个工程出口。

## 与其他概念的关系

- [[readout-measurement/parametric-amplifier|参量放大器]]：PT 对称性破缺是简并（相敏）工作模式的新视角——同一台 JPA，既能当量子极限放大器用（稳态增益），也能当 PT 二聚体用（瞬态动力学）；泵浦失谐在标准增益理论里只是调谐参数，在 PT 图像里则成为决定对称相的"耦合"。
- [[readout-measurement/dispersive-readout|色散读出]]：PT 放大器仍是[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]读出链的一员，其稳态行为服从常规参量放大理论；PT 视角补充的是瞬态与奇异点附近的动力学。
- [[readout-measurement/single-shot-readout|单发读出]]：相敏放大的"无损增益"性质（一个正交分量无附加噪声）正是单发读出追求高量子效率的物理基础，PT 图像给出了这一性质的几何化表述。
- [[readout-measurement/rf-reflectometry|射频反射测量]]：实验用两个低温环形器分离输入输出并配合 HEMT，是反射式参量放大测量的标准链路。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 器件电容 $C_a$ / 线性电感 $L_a$ / 约瑟夫森电感 $L_J$ | $1.085\ \mathrm{pF}$ / $0.92\ \mathrm{nH}$ / $0.516\ \mathrm{nH}$ | Gaikwad 2023 |
| SQUID 阵列 | 4 个串联，临界电流 $3.2\ \mu\mathrm{A}$，环路 $5.5\times5\ \mu\mathrm{m^2}$ | Gaikwad 2023 |
| 谐振频率（无磁通偏置）/ 品质因子 | $4.028\ \mathrm{GHz}$ / $2\times10^4$ | Gaikwad 2023 |
| 直流磁通偏置 | $\approx\Phi_0/6$（一阶磁通敏感工作点） | Gaikwad 2023 |
| 稳态增益（表征用） | 约 $4.2\ \mathrm{dB}$ | Gaikwad 2023 |
| 外差频率 $\Delta/2\pi$ | $5\ \mathrm{MHz}$ | Gaikwad 2023 |
| 泵浦强度（三组）$\nu/2\pi$ | $0.013$、$0.046$、$0.072\ \mathrm{MHz}$ | Gaikwad 2023 |
| 输出端口耗散 $\kappa/2\pi$ | $0.19\ \mathrm{MHz}$（由品质因子） | Gaikwad 2023 |
| 自克尔系数 $\chi/2\pi$ | $\approx0.095\ \mathrm{MHz}$（模型拟合） | Gaikwad 2023 |
| PT 破缺阈值 | $|\delta|=\nu$ | 理论，Eq. (6) |

## 参考文献

- Gaikwad, C., Kowsari, D., Chen, W., Murch, K. W. Observing Parity Time Symmetry Breaking in a Josephson Parametric Amplifier. *Physical Review Research* 5, L042024 (2023). DOI: 10.1103/physrevresearch.5.l042024；arXiv:2306.14980（QAtlas 缓存：2306.14980）。
- Feyisa, C. G., You, J. S., Ku, H.-Y., Jen, H. H. Accelerating multipartite entanglement generation in non-Hermitian superconducting qubits. *Quantum Science and Technology* (2024). DOI: 10.1088/2058-9565/adafd9；arXiv:2409.03414（QAtlas 缓存：2409.03414）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
