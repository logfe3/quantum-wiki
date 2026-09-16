---
title: 横向各向异性相互作用的 Floquet 工程
description: 用蓝/红边带驱动可调耦合器，在 transmon 处理器上同时合成配对（XX−YY）与跳跃（XX+YY）相互作用并独立调控 XX 与 YY 分量；经合成空间 Aharonov–Bohm 干涉校准相位后构造横场 Ising 链并观测其动力学相变。
aliases:
 - Floquet 相互作用工程
 - anisotropic transverse interactions
 - 配对相互作用
 - 跳跃相互作用
 - 边带驱动耦合
tags:
 - 超导量子比特
 - 相互作用工程
 - 量子模拟
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvh03cg82x39nq9ab019k6
source_updated: 2026-09-04T14:00:31Z
---

<div class="entry-lead">transmon 之间的天然耦合在旋转波近似下只有"各向同性"的跳跃项 XX+YY——配对项 XX−YY 因破坏粒子数守恒而被禁戒，这让需要空间各向异性相互作用的模型（如 Kitaev 蜂窝格子模型）无从下手。Liang 等人在六比特可调耦合处理器上用 Floquet 工程同时点亮两条通道：蓝边带驱动激活双光子跃迁（配对项）、红边带驱动激活单光子交换（跳跃项），二者相干叠加后通过驱动相位独立选择 XX 或 YY。合成空间中三比特闭合回路的规范不变相位提供 Aharonov–Bohm 干涉"卡尺"，用它把整条链的横向相互作用校准到同一方向，即可合成横场 Ising 链并观测其动力学相变。</div>

## 为什么天然耦合是各向同性的

耦合量子比特对的原生哈密顿量为

$$
H = \sum_{i=1}^{2} \omega_i \sigma_i^{+} \sigma_i^{-} + g(t)\,(\sigma_1^{+} + \sigma_1^{-})(\sigma_2^{+} + \sigma_2^{-}),
$$

其中 $\omega_i$ 是比特 $Q_i$ 的跃迁频率、$\sigma_i^{\pm}$ 是升降算符、$g(t)$ 是可由耦合器磁通调制的耦合强度。当 $g \ll \omega_i$ 时取旋转波近似，只保留交换项 $\sigma_1^+\sigma_2^- + \sigma_1^-\sigma_2^+$（即 $XX+YY$，"跳跃"），而配对项 $\sigma_1^+\sigma_2^+ + \sigma_1^-\sigma_2^-$（即 $XX-YY$）因每次改变两个光子数而被禁戒。这与[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]的标准近似同源：横向相互作用被锁死在各向同性比值上。

## 蓝红边带：配对与跳跃的同时合成

实验方案是在**耦合器**上同时施加蓝、红两种边带驱动（经频率双工器合成）：蓝边带频率对准双光子共振 $\omega^b = \omega_1 + \omega_2$（如 4.336 GHz + 3.907 GHz = 8.240 GHz），激活 $|00\rangle \leftrightarrow |11\rangle$；红边带对准差频 $\omega^r = \omega_1 - \omega_2 = 0.428$ GHz，激活 $|01\rangle \leftrightarrow |10\rangle$。有效耦合哈密顿量为

$$
H_c = g_{1,2}^{b}\, e^{-i\phi_{1,2}^{b}} \sigma_1^{+}\sigma_2^{+} + g_{1,2}^{r}\, e^{-i\phi_{1,2}^{r}} \sigma_1^{+}\sigma_2^{-} + \mathrm{h.c.},
$$

其中 $g_{1,2}^{b,r}$ 与 $\phi_{1,2}^{b,r}$ 分别由蓝（红）边带驱动的幅度与相位独立设定。当 $g^b = g^r$ 时，选 $\phi^b = \phi^r$ 得纯 XX 相互作用，选 $\phi^b = \phi^r + \pi$ 得纯 YY——各向异性（XX 与 YY 的任意比例）由此成为两个微波相位之间的自由度。实验中 $g^b/2\pi = g^r/2\pi = 0.75$ MHz：从 $|00\rangle$ 出发观测 $|00\rangle \leftrightarrow |11\rangle$ 的真空 Rabi 振荡（配对通道），从 $|10\rangle$ 出发观测 $|01\rangle \leftrightarrow |10\rangle$ 振荡（跳跃通道）；合成 XX 后，两比特都朝 Bloch 球 X 方向制备时态保持不动，第二比特转到 Z 方向则被 XX 驱动绕 X 轴旋转——各向异性的"方向性"得到直接验证。

![[assets/figures/floquet-anisotropic-transverse-interactions/liang2024-fig1-six-qubit-device.jpg]]

*实验器件：六个 transmon 比特经可调耦合器连成一维链的超导量子处理器；放大视图显示单个"比特–耦合器–比特"单元。蓝/红边带驱动施加在耦合器上，分别激活配对与跳跃相互作用。图源：Liang et al. (2024)，Fig. 1。*

## 合成空间的 Aharonov–Bohm 干涉

三比特链中，配对与跳跃相互作用在计算基矢 $|000\rangle, |110\rangle, |011\rangle, |101\rangle$ 张成的"合成空间"里围出一个闭合回路。沿回路一周积累的规范不变几何相位

$$
\Phi = \phi_{1,2}^{r} + \phi_{2,3}^{b} - \phi_{2,3}^{r} - \phi_{1,2}^{b}
$$

由四段驱动的相位差决定，调节任一相位即可连续扫描回路"磁通"。从 $|000\rangle$ 出发，系统可经 $|110\rangle$ 或 $|011\rangle$ 两条路径到达 $|101\rangle$：$\Phi=0$ 时相长干涉，四个态都呈现常规 Rabi 振荡；$\Phi=\pi$ 时相消干涉把 $|101\rangle$ 的布居完全压制——即合成空间中的 **Aharonov–Bohm 笼蔽**。若改从纠缠态 $(|110\rangle+|011\rangle)/\sqrt{2}$ 出发，上下两个三角形回路各自携带 $\pi$ 磁通，粒子被钉扎在初态附近。这一干涉效应与[[superconducting-qubits/synthetic-flux-qubit-ring|合成磁通与分数磁通量子]]词条中用 Peierls 相位构造人造磁通是同一思想的两面：一个作用于实空间键，一个作用于合成空间跃迁。

![[assets/figures/floquet-anisotropic-transverse-interactions/liang2024-fig3-synthetic-loop.jpg]]

*量子比特三体在合成空间中的闭合回路：相邻配对（蓝）与跳跃（红）相互作用把 $|000\rangle$、$|110\rangle$、$|011\rangle$、$|101\rangle$ 四个计算基态连成环，环内规范不变相位 $\Phi$ 由四段驱动相位决定——扫描任一相位即可观测到 $|101\rangle$ 布居的 AB 干涉，$\Phi=\pi$ 时被完全压制（AB 笼蔽）。图源：Liang et al. (2024)，Fig. 3。*

## 横场 Ising 链与动力学相变

把蓝边带频率统一失谐 $\omega_{i,i+1}^{b} = \omega_i + \omega_{i+1} + \Delta^b$，六比特链的有效哈密顿量变为

$$
H_{\mathrm{eff}} = \sum_{i=1}^{N} \frac{\Delta^{b}}{4} \sigma_i^{z} + \sum_{i=1}^{N-1} \left( g_{i,i+1}^{b} e^{-i\phi_{i,i+1}^{b}} \sigma_i^{+}\sigma_{i+1}^{+} + g_{i,i+1}^{r} e^{-i\phi_{i,i+1}^{r}} \sigma_i^{+}\sigma_{i+1}^{-} + \mathrm{h.c.} \right),
$$

其中 $\Delta^b/4$ 的失谐项扮演人工横场 $B_z$（次近邻比特特意失谐以避免串扰）。经 AB 干涉把所有 $\phi_{i,i+1}^{b,r}$ 校准到零、$g^b = g^r = J = 2\pi\times0.75$ MHz 后，系统映射为标准横场 Ising 链（TFIC）：$B_z/J$ 从大到小扫过临界点时，平均自旋关联 $\mathcal{C}_{zz}$ 从顺磁相转变为铁磁相；Loschmidt 回波 $\mathcal{L}(t)$ 的首次极小值随 $B_z/J$ 的非单调变化给出动力学相变的指纹，实验数据与不含拟合的数值模拟吻合。

![[assets/figures/floquet-anisotropic-transverse-interactions/liang2024-fig4b-tfic-dpt.jpg]]

*横场 Ising 链的动力学相变：平均自旋关联 $\mathcal{C}_{zz}$（标记点为实验、线为数值模拟）随归一化磁场 $B_z/J$ 的变化——$B_z/J$ 大时自旋无关联（顺磁相），减小横场后关联建立（铁磁相），中间穿过动力学相变区。图源：Liang et al. (2024)，Fig. 4 面板 (b)。*

## 与其他概念的关系

- [[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]：本词条是 Floquet 方法在**相互作用合成**上的应用——周期驱动把有效哈密顿量从原生 JC 耦合改写为含幅度与复相位的任意横向相互作用。
- [[superconducting-qubits/zz-coupling|ZZ 相互作用]]：可调耦合器架构下纵向 ZZ 与本词条的横向 XX/YY 是互补的调控目标；前者服务两比特门与串扰抑制，后者服务量子模拟与各向异性自旋模型。
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：器件载体；可调耦合器既是 ZZ 的"开关"，也是边带驱动的注入端口。
- [[superconducting-qubits/synthetic-flux-qubit-ring|合成磁通与分数磁通量子]]：同为用驱动相位构造规范场的方案；本词条在合成空间、该词条在实空间格点上实现 Peierls 相位。
- Kitaev 蜂窝格子模型（展望）：XX/YY/ZZ 全套各向异性相互作用是该模型的原料，本工作补上了此前缺失的横向各向异性一角。

## 参考文献

- Liang, Y., Huang, W., Zhang, L., Tao, Z., Tang, K., Chu, J., Qiu, J., Sun, X., Zhou, Y., Zhang, J., Zhang, J., Guo, W., Liu, Y., Chen, Y., Liu, S., Zhong, Y., Niu, J., Yu, D. Floquet Engineering of Anisotropic Transverse Interactions in Superconducting Qubits (2024). arXiv:2410.10208（QAtlas 缓存：2410.10208）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
