---
title: 交换相互作用
description: 由费米子反对称性和波函数重叠产生的自旋态能量差，是半导体两比特门的核心耦合。
aliases:
  - 交换耦合
  - 交换门
  - exchange coupling
  - Heisenberg exchange
tags:
  - 量子比特操控
  - 两比特门
date: 2026-09-08
---

<div class="entry-lead">交换相互作用把"电子能否交换位置"转换成"不同联合自旋态具有不同能量"，并由[[fundamentals/tunnel-coupling|隧穿耦合]]与[[fundamentals/charging-energy|充电能]]之比决定大小；它可由栅压快速调节，是量子点自旋两比特门最常用的相互作用。</div>

## 物理图像

交换相互作用（exchange interaction）的微观根源是费米子的全同性。两个自旋 $1/2$ 占据两个不同轨道 $\phi_l(\mathbf r)$、$\phi_r(\mathbf r)$ 时，总波函数必须在两个粒子的全置换下变号，这一约束迫使联合自旋态的能量依赖于自旋交换对称性——单态 $|S\rangle=(|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle)/\sqrt{2}$（反对称自旋、对称轨道）的库仑排斥比三重态 $T_0$（对称自旋、反对称轨道）低，差值即交换能 $J$。这一判据在双量子点中通过点间隧穿实现：电子可以经虚过程在左右两点间交换位置，使两个电荷态 $(1,1)$ 与 $(0,2)$ 杂化，从而把单态–三重态能隙映射为栅极可调的失谐 $\varepsilon$ 与势垒高度的函数。

<!-- FIGURE: 交换相互作用的物理起源示意：双占据 (0,2) 与单占据 (1,1) 两个电荷态之间的虚隧穿过程将电子"交换位置"的动力学映射为联合自旋态之间的能量差，标注 S(0,2)、S(1,1) 与 T(1,1) 能级、J(ε) 间隙、失谐 ε 与隧穿耦合 Δ 的位置 -->

实验上最常采用的双量子点（double quantum dot）模型把 (1,1) 与 (0,2) 两个电荷态视为一个两能级系统，只保留自旋守恒的耦合（隧穿保持自旋，因此 $T_{0,\pm}$ 不与 $S(0,2)$ 耦合）。把能量零点取在 $S(1,1)$ 上、$S(0,2)$ 能量为 $-\varepsilon$，以 $\{\,S(0,2),\,S(1,1)\,\}$ 为基的哈密顿量为

$$
H=\begin{pmatrix}-\varepsilon & \Delta \\ \Delta & 0\end{pmatrix},
$$

其中 $\Delta$ 表征点间隧穿耦合强度，$\varepsilon=\mu_1-\mu_2$ 为两电荷态的化学势失谐，本征能量 $(-\varepsilon\pm\sqrt{\varepsilon^2+4\Delta^2})/2$，较低单态与三重态的能量差定义为交换能

$$
J(\varepsilon)=\frac{\varepsilon+\sqrt{\varepsilon^2+4\Delta^2}}{2}.
$$

该式是双量子点两电子情形下交换相互作用最简洁的解析表达；在负大失谐极限 $|\varepsilon|\gg 2\Delta$ 下 $J(\varepsilon)\approx \Delta^2/|\varepsilon|$，交换能被指数式地压向零——这是[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]与[[qubit-control/charge-qubit|电荷量子比特]]共用的微观图像。

## 理论模型：从 Hubbard 极限到 Heisenberg 哈密顿量

### Heisenberg 有效自旋哈密顿量

从两电子系统出发，自旋自由度可以压缩为一个 Heisenberg 型有效哈密顿量。在 [[fundamentals/semiconductor-quantum-dot|半导体量子点]]两电子子系统中，扣除电荷态能标后只剩下自旋之间的各向同性交换。包含塞曼项的完整表达式为

$$
H=J\,\mathbf S_1\!\cdot\!\mathbf S_2+g\mu_B(B_1\!\cdot\!\mathbf S_1+B_2\!\cdot\!\mathbf S_2),
$$

其中 $J$ 即交换相互作用（标量），$\mathbf S_i=\boldsymbol\sigma_i/2$ 是第 $i$ 个电子的自旋算符，$B_i$ 是第 $i$ 点位置处的磁场。当 $B_z\gg B_{\mathrm{nuc}}$（塞曼能远大于核场平均）时，三重态 $T_\pm$ 被冻结，剩下 $\{|S\rangle,|T_0\rangle\}$ 二维子空间，有效哈密顿量在 $\{|T_0\rangle,|S\rangle\}$ 基下写为

$$
H_{\mathrm{eff}}=\begin{pmatrix}0 & -g\mu_B\,dB_z \\ -g\mu_B\,dB_z & -J(\varepsilon)\end{pmatrix},
$$

其中 $dB_z=(B_{\mathrm{nuc},l}-B_{\mathrm{nuc},r})/2$ 是两点核场差的 $z$ 分量。这个两能级系统在布洛赫球上以 $|S\rangle$、$|T_0\rangle$ 为南北极，$J(\varepsilon)$ 驱动绕 $z$ 轴进动、核场梯度驱动绕 $x$ 轴旋转——[[qubit-control/singlet-triplet-qubit|单态–三重态比特]]的工作哈密顿量即由此而来。

当 $B_1\ne B_2$、存在沿 $z$ 的塞曼能差 $\Delta E_z=g\mu_B(B_{z,1}-B_{z,2})/2$ 时，[[qubit-control/single-spin-qubit|单自旋量子比特]]的两比特系统在 $\{|↑↑\rangle,|↑↓\rangle,|↓↑\rangle,|↓↓\rangle\}$ 基下的完整矩阵（文献 21 式 (1.18)）为

$$
H=\begin{pmatrix}\bar E_z & 0 & 0 & 0 \\ 0 & -J/2+\Delta E_z & J/2 & 0 \\ 0 & J/2 & -J/2-\Delta E_z & 0 \\ 0 & 0 & 0 & -\bar E_z\end{pmatrix},
$$

其中 $\bar E_z=g\mu_B(B_{z,1}+B_{z,2})/2$。交换作用把 $|\!\uparrow\downarrow\rangle$、$|\!\downarrow\uparrow\rangle$ 这两个反对平行态的能级下移 $J/2$，从而使一个比特的拉莫频率依赖于另一个比特的状态——这就是两比特门条件相位的来源。

### Hubbard 极限与失谐依赖

更完整的描述来自扩展 Hubbard 模型。在 [[fundamentals/double-quantum-dot|双量子点]]两电子、保留最近邻相互作用 $U$ 与点间隧穿 $t$ 的极限下，交换相互作用写成两侧虚过程之和（文献 21 式 (1.19)）

$$
J=\frac{2t^2}{U-\varepsilon-\Delta E_z}+\frac{2t^2}{U-\varepsilon+\Delta E_z},
$$

在 $U\gg\varepsilon,\Delta E_z$ 的所谓"Hubbard 极限"下退化为常见形式

$$
J\approx\frac{4t^2}{U}.
$$

当两个量子点的充电能相同、失谐可调时（文献 21 式 (3.12)），精细依赖为

$$
J(\varepsilon)=\frac{2t^2U}{U^2-\varepsilon^2},
$$

失谐 $\varepsilon=0$ 处 $J$ 取得极小值且对 $\varepsilon$ 呈一阶不敏感——这正是"对称工作点"（sweet spot）的理论依据。物理上，$J\sim t^2/U$ 反映了二阶微扰：电子从一个点隧穿到另一个点要支付充电能 $U$，反过来再隧穿回来，于是交换能正比于 $t^2/U$。同样地，把电荷态空间从两电子扩展到三电子（如 $(1,1,1)$ 与两个 $(2,0,1)/(1,0,2)$ 双占据态），就得到[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]的 $6\times 6$ 哈密顿量；而[[qubit-control/hybrid-qubit|杂化量子比特]]则在更多电子（$3\text{–}5$ 个）的电子–空穴对称图中得到。

<!-- FIGURE: J(ε) 与 4t²/U 的对照示意图：左图为 S(0,2)–S(1,1) 反交叉能级随失谐 ε 的变化（标注 J(ε)、隧穿耦合 Δ 与负大失谐渐近 J≈Δ²/|ε|）；右图为在 Hubbard 极限下 J vs ε 的曲线，标出对称工作点 ε=0 处的一阶不敏感 -->

### 谷态与轨道的修正

上述形式只在最低轨道、单一谷能级近似下成立。当量子点中存在显著谷劈裂但谷态未被外磁场或应力完全冻结时，$(1,1)$ 区里会混入轨道/谷激发态的 $(1,1)$ 成分，使两个单态在失谐 $\varepsilon=0$ 附近就有非零能量差——单态–三重态间隙 $E_{ST}$（GaAs 中约 $400\,\mu\mathrm{eV}$）就是谷态–轨道结构在 $S$–$T_0$ 子空间的投影。电场微扰会调制谷态间的隧穿耦合，从而在 $J(\varepsilon)$ 之上叠加快速振荡结构（文献 6 3.6 节）。此外，电偶极自旋共振、谷间跃迁、自旋轨道耦合等机制都会引入额外的失谐依赖与各向异性项，把简单的标量 $J$ 推广为含各向异性张量或 Dzyaloshinskii–Moriya 型的扩展形式。

## 交换能的可调性：失谐、势垒与对称工作点

交换相互作用的优势在于完全电控：改变点间势垒高度可调节 $t$（式 (3.12) 中的 $t_c$），改变左右栅压可调节 $\varepsilon$。两者都能改变 $J$，但对[[materials-devices/charge-noise|电荷噪声]]的敏感度截然不同：

- **失谐方式**（pulse on $V_{P1}-V_{P2}$）：在远离失谐零点的区域（$|\varepsilon|$ 大）工作，门操作时间短、对 $J$ 的调节范围宽；但 $J$ 对失谐的导数 $|\partial J/\partial \varepsilon|$ 也大，电荷涨落 $\delta\varepsilon$ 直接以 $h\cdot\delta J$ 的形式造成比特频率漂移，退相干严重；
- **势垒方式**（pulse on $V_B$）：在失谐零点 $\varepsilon=0$ 附近工作，$J$ 对 $\varepsilon$ 一阶不敏感；只要势垒栅压变化引起的失谐串扰被补偿，电荷噪声对相干性的影响就被压制，是 Si/SiGe 体系中保真度超过 $99\%$ 的两比特门的标配——文献 21 中 CZ 门的对称操作点即据此标定，对称操作点处 $J\approx 6.25\,\mathrm{MHz}$，门演化时间 $80\,\mathrm{ns}$。

为同时获得势垒方式的电荷噪声免疫与大的 $J$，常用正反电压脉冲（B1 与 B2 等大反向）把两个点拉得更近、增加波函数重叠，对应 $J$ 从几百 $\mathrm{kHz}$ 到超过 $20\,\mathrm{MHz}$ 可调。$J$ 过大会带来两个副作用：(1) 门操作位置超出 $(1,1)$ 电荷区，导致 $J$ 拟合值的弥散度增大；(2) 比特与[[circuit-qed/jaynes-cummings-model|谐振腔]]的耦合有可能从色散区过度到近共振区，腔响应需要重新拟合。

在 $(1,1)$ 区同时与 $(0,2)$ 和 $(2,0)$ 耦合的对称器件中，可以找到使两侧杂化带来的电偶极矩相互抵消的工作点——此时 $J$ 对失谐一阶不敏感（文献 6 p. 39）。代价是控制势垒的栅极不可避免地牵动失谐，需要在多个栅极上施加同步补偿脉冲，[[scaling-automation/virtual-gates|虚拟栅极]]技术是系统化实现这一补偿的常用工具。

## 两种门策略

把交换相互作用转化为两比特门有两条主要路线。

### 脉冲式：交换振荡与 CPhase

经典路线是"门开-门闭"。把系统从 $J\approx 0$（大负失谐）拉到 $J\gg\Delta E_z$ 的工作点并保持时间 $\tau_E$，再返回 $J\approx 0$。在 $J\gg\Delta E_z$ 极限下，本征态退化为单态–三重态基 $\{|S\rangle,|T_+\rangle,|T_0\rangle,|T_-\rangle\}$，调节 $\tau_E$ 实现 $\sqrt{\mathrm{SWAP}}$ 类的两比特门；在 $J\ll\Delta E_z$ 极限下（文献 21 式 (1.18)），本征态近似为自旋直积态，反平行能级下移 $J/2$，CPhase 演化算符为

$$
U_{\mathrm{CPhase}}(t)=\begin{pmatrix}1 & 0 & 0 & 0 \\ 0 & e^{iJt/2\hbar} & 0 & 0 \\ 0 & 0 & e^{iJt/2\hbar} & 0 \\ 0 & 0 & 0 & 1\end{pmatrix}.
$$

配合两侧 $Z(-\pi/2)$ 旋转即得 CZ 门

$$
U_{\mathrm CZ}=Z_1\!\left(-\tfrac{\pi}{2}\right) Z_2\!\left(-\tfrac{\pi}{2}\right) U_{\mathrm{CPhase}}\!\left(\tfrac{\pi\hbar}{J}\right)=\operatorname{diag}(1,1,1,-1).
$$

[[qubit-control/singlet-triplet-qubit|单态–三重态比特]]的 $z$ 轴旋转（文献 6 式 (2.10)）即由同一 $J(\varepsilon)$ 驱动，交换振荡频率 $J/h$ 给出直接读出。Gao、Wang 等组在 GaAs 双量子点中观察到的交换振荡条纹（文献 6 图 2.9）是这一策略的典型实验呈现。

### 常开式：虚拟相位与 CROT/CNOT

另一条路线是把 $J$ 保持为有限常量，避开门脉冲的复杂度。代价是本征态偏离直积态、所有单比特门都成为条件旋转（CROT），必须靠"虚拟相位"——通过微波驱动相位、AWG 波形时序或额外 $Z$ 旋转——补偿控制比特与目标比特积累的额外相位。Si-MOS 双量子点（文献 22）的方案是固定 $\varepsilon=0$ 处 $J=4.8(4)\,\mathrm{MHz}$，在四个共振频率 $\{f_{1\downarrow},f_{1\uparrow},f_{2\downarrow},f_{2\uparrow}\}$ 上同时施加双频微波脉冲分别驱动两个比特，再在 CNOT 与 ZCNOT 之间用 $\pm Z/2$ 旋转补齐相位差（文献 22 式 (5.13)–(5.16)）。这一策略的好处是样品无需中间势垒的高频控制线，且两比特 Clifford 群中所有基础门长度相同、便于多比特扩展；Noiri 等在 SiGe 上以这种方式实现超过 $99\%$ 的 CNOT 保真度（文献 22 引文 [94]）。

### DCZ：用动力学解耦抑制低频噪声

CZ 门对电荷涨落敏感的本质是相位积累时间太长。把 CPhase 演化分成长度相等的两段、中间插入一个目标比特的 $\pi$ 脉冲（Hahn echo 形式），即得 DCZ 门

$$
U_{\mathrm{DCZ}}=Z_1(-\pi/2)Z_2(-\pi/2)\,U_{\mathrm{CPhase}}(t/2)\,X_{\mathrm{target}}\,U_{\mathrm{CPhase}}(t/2),
$$

π 脉冲把目标比特在两段演化中积累的低频噪声反向抵消，等效在演化时间内插入了动力学解耦（[[qubit-control/dynamical-decoupling|动力学解耦]]）。文献 21 在自然 Si/SiGe 中用此方案把两比特门保真度从 CZ 的 $\approx 91\%$ 提升到 Bell 态制备的 $\approx 91\%$（含读出修正），并在四个 Bell 态上同时实现 $87\text{–}93\%$ 的态层析保真度。文献 22 同样以非绝热 DCZ 方案在 Si-MOS 中测得 CZ/2 门保真度 $92.2\%$、Bell 态保真度 $84.1\%$，并强调高频波形畸变（bias-tee 内 RC 滤波引入的方波脉冲响应失真）必须事先校准。

### 虚拟相位补偿与虚拟 CZ 门

常开方案的进一步推广是把相位补偿整合到 AWG 波形中、通过软件层面的相位抵消实现"虚拟 CZ 门"——不需要物理脉冲、也不消耗演化时间。文献 22 系统化给出相位误差补偿表：当控制比特为 $|\!\uparrow\rangle$ 时用 $Z/2$、为 $|\!\downarrow\rangle$ 时用 $-Z/2$，并通过构造相位表把所有 $\pm\pi/2$ 的相位因子化为 AWG 波形相位。虚拟 CZ 与非绝热 SWAP、DCZ 在同一硬件上组合即可合成完整两比特 Clifford 群，是把交换型两比特门推向模块化编程的关键一步。

## 与比特编码的关系

交换相互作用是多个比特编码的共同基元：

- **单态–三重态比特**（$S$–$T_0$，两个电子）：$J(\varepsilon)$ 直接给出 $z$ 轴旋转频率；$x$ 轴来自两点磁场梯度（自然核场或[[materials-devices/micromagnet|微磁体]]）。读出利用 $S$–$T_+$ 漏斗与泡利自旋阻塞。文献 6 第 2 章给出的 $J(\varepsilon)=(\varepsilon+\sqrt{\varepsilon^2+4\Delta^2})/2$ 与大失谐渐近 $J\approx\Delta^2/|\varepsilon|$ 是这一编码的源头公式。
- **单自旋比特**（每比特一个电子）：$J$ 出现在两比特海森堡哈密顿量 $H=J\mathbf S_1\!\cdot\!\mathbf S_2+g\mu_B(B_1\!\cdot\!\mathbf S_1+B_2\!\cdot\!\mathbf S_2)$ 中，作为控制比特与目标比特之间的耦合强度；CPhase、CROT、共振 CNOT 都基于此 $J$。文献 21 与文献 22 都把这一哈密顿量作为两比特操控的出发点。
- **共振交换比特**（三个电子，$(1,1,1)$ 工作区）：$J_l$ 与 $J_r$ 同时打开，比特频率 $\omega_{\mathrm{RX}}\approx 0.52\,t$（文献 20 式 (6.20)）；同时与[[circuit-qed/jaynes-cummings-model|JC 模型]]形式耦合强度 $g_{\mathrm{RX}}$ 随失谐 $\varepsilon$ 增大而衰减（详见[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]词条）。
- **杂化比特**（$3\text{–}5$ 电子，电子–空穴混合）：把单占据与双占据电荷态空间扩大后，交换项被推广为更复杂的矩阵，但仍以 $J\sim t^2/U$ 的微扰结构为骨架。
- **多比特阵列**：在 2×2 或更长链中，相邻电子间的最近邻 $J$ 由"势垒栅"直接控制；通过中心势垒栅 CB 调控的次近邻 $J$ 为[[scaling-automation/quantum-dot-array|量子点阵列]]提供额外耦合维度（文献 21 第 4 章），既可用于研究量子自旋液体等强关联相态，也对阵列中串扰抑制与表面码纠错至关重要。

<!-- FIGURE: 四种主要自旋比特编码中交换相互作用所扮演的角色：S–T0 比特直接以 J(ε) 为 z 轴；单自旋比特把 J 作为两比特海森堡耦合；共振交换比特以 J_l、J_r 共同给出比特频率；杂化比特则在更大电荷态空间中保留 J~t²/U 的微扰骨架 -->

读出也常借助交换相互作用：[[qubit-control/lzsm-interference|LZSM 干涉]]、自旋漏斗与[[readout-measurement/single-shot-readout|单发读出]]均通过调制 $J(\varepsilon)$ 让系统在不同自旋态下走出不同轨迹，从而把自旋信息转换为电荷信号。

## 参数与量级

| 量 | 典型量级 | 实验/来源 |
| --- | --- | --- |
| 交换能 $J$（GaAs 双点） | 几十 $\mathrm{MHz}$ 量级可调，最高到 $\mathrm{GHz}$ | 文献 6 |
| 交换能 $J$（Si/SiGe 双点，CZ 门工作点） | $6.25\,\mathrm{MHz}$（演化 $80\,\mathrm{ns}$） | 文献 21 |
| 交换能 $J$（Si-MOS，$J$ 常开方案） | $4.8(4)\,\mathrm{MHz}$（$\varepsilon=0$） | 文献 22 |
| $J$ 关闭时剩余耦合 | 约 $150\,\mathrm{kHz}$（Si/SiGe） | 文献 21 |
| $J$ 可调范围（势垒脉冲） | 几百 $\mathrm{kHz}$ 到 $\geq 20\,\mathrm{MHz}$ | 文献 21 |
| $S$–$T_0$ 比特中核场差 $g\mu_B dB_z$（GaAs） | 对应 $T_2^*\approx 10\,\mathrm{ns}$ | 文献 6 |
| $(0,2)$ 单态–三重态能级差 $E_{ST}$（GaAs） | 约 $400\,\mu\mathrm{eV}$ | 文献 21 |
| 充电能 $U$（Hubbard 极限中的 $J\sim 4t^2/U$） | Si/SiGe 量子点约 $3\,\mathrm{meV}$（库仑振荡） | 文献 21 |
| 单比特门保真度（自然 Si/SiGe，Si-MOS） | $99.19\text{–}99.9\%$ | 文献 21，文献 22 |
| 两比特门保真度（CZ） | $90.96\pm 7.48\%$（Si/SiGe） | 文献 21 |
| Bell 态保真度（DCZ，移除读出误差） | 平均 $91\%$（Si/SiGe） | 文献 21 |
| DCZ 门 $J$ 关闭残余（Si-MOS） | 约 $300\,\mathrm{kHz}$ | 文献 22 |
| 全局电荷–腔耦合 $g_{c0}/2\pi$（RX 比特典型） | $168\,\mathrm{MHz}$ | 文献 20 |
| RX–腔耦合 $g_{\mathrm{RX}}/2\pi$ | $65\,\mathrm{MHz}$ | 文献 20 |

## 噪声与相干

交换门的保真度受三组噪声支配：

1. **电荷噪声**（$1/f$）：直接以 $|\partial J/\partial\varepsilon|$ 为比例调制比特频率。势垒方式（对称工作点）利用一阶不敏感抑制低频部分；DCZ/解耦序列进一步在时间域内平均。对 Si/SiGe 而言，电荷噪声通过微磁体的杂散梯度场与自旋耦合，是把 Si/SiGe 的 $T_2$ 压在数微秒的主要原因（文献 21 §3.3）。
2. **核自旋噪声**：在 GaAs 中通过超精细相互作用耦合，约 $10^6$ 个核自旋的奥弗豪泽场造成 $T_2^*\approx 10\,\mathrm{ns}$；改用核自旋为零的 $^{$28$}\mathrm{Si}$ 同位素纯化样品（文献 21 引文 [6]）可把 $S$–$T_0$ 比特的 $T_2^*$ 延长到约 $360\,\mathrm{ns}$，并经动力学解耦把 $T_2$ 推到 $0.87\,\mathrm{ms}$（文献 6 p. 31 引文 [40]）。
3. **隧穿耦合涨落**：势垒栅的电压漂移改变 $t$，进而按 $J\sim t^2$ 调制交换能。在大失谐工作点上，电荷噪声往往通过 $t$ 的二阶依赖（$\partial^2 J/\partial \varepsilon^2$）仍会留下残余退相干；通过反馈控制势垒栅电压、把 $J$ 锁定到目标值可进一步压低低频漂移。

速度与相干之间的折中是所有交换门工程的核心：增大 $J$ 加快门操作同时必然加大 $|\partial J/\partial q|$，因此提升保真度的根本途径是降低材料/器件层面的噪声（异质结界面、微磁体优化、栅氧层厚度），而不是简单地"开得更大"。

## 与其他概念的关系

- 与[[fundamentals/tunnel-coupling|隧穿耦合]]：$t$ 是 $J$ 的微观来源；增大 $t$ 同时增大 $J$，但也增加泄漏到更高电荷态的概率，因此优化方向是在保持高 $J$ 的同时控制势垒栅压的电压范围。
- 与[[fundamentals/charging-energy|充电能]]$U$：Hubbard 极限下 $J\sim 4t^2/U$，减小 $U$（做大器件）会同时减小 $J$ 和增大能级间隔，是设计上的反向制约。
- 与[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/singlet-triplet-qubit|单态–三重态比特]]与[[qubit-control/resonant-exchange-qubit|共振交换比特]]：交换是它们的共同耦合机制，区别在于所编码的电子数和是否需要外磁场梯度提供第二条操控轴。
- 与[[qubit-control/charge-qubit|电荷量子比特]]：电荷比特依赖点间隧穿产生的失谐依赖 $J$ 实现条件相位，门时间短但退相干快；自旋比特把同一 $J$ 映射到自旋态的能量差上，门时间较长但相干性好得多。
- 与[[qubit-control/dynamical-decoupling|动力学解耦]]、[[qubit-control/lzsm-interference|LZSM 干涉]]：前者（DCZ、Hahn echo）抑制低频电荷/核噪声；后者把 $S$–$T_+$ 反交叉用作 Hadamard 类门和动态核极化工具，都直接调控 $J(\varepsilon)$ 或其在反交叉附近的相位。
- 与[[readout-measurement/single-shot-readout|单发读出]]与[[materials-devices/charge-noise|电荷噪声]]：泡利自旋阻塞把自旋态映射为电荷信号依赖 $(0,2)$ 区 $S$–$T$ 能隙，电荷噪声则同时是退相干来源和读出误判的来源——测量与操控在 $J(\varepsilon)$ 的两端互为镜像。
- 与[[scaling-automation/virtual-gates|虚拟栅极]]：对称工作点的精确标定与动态补偿离不开虚拟栅极，它是把"用势垒调 $J$、不污染失谐"工程化的核心工具。
- 与[[circuit-qed/jaynes-cummings-model|JC 模型]]与[[qubit-control/resonant-exchange-qubit|共振交换比特]]：常开 $J$ 的 RX 比特天然带电偶极矩，因此与微波谐振腔的耦合强度由 $g_{\mathrm{RX}}$ 描述；JC 阶梯与色散读出可以原样套用。

<!-- FIGURE: 交换相互作用相关概念的关系图：以 J(t, ε, U) 为中心节点，向外连接隧穿耦合 t、充电能 U、失谐 ε、对称工作点、S–T0/单自旋/RX/杂化比特编码、DCZ/解耦、LZSM/单发读出、虚拟栅极/电荷噪声等子模块 -->

## 延伸阅读

- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots", *Physical Review A* 57, 120 (1998). [DOI: 10.1103/PhysRevA.57.120]
- J. R. Petta, A. C. Johnson, J. M. Taylor, E. A. Laird, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard, "Coherent Manipulation of Coupled Electron Spins in Semiconductor Quantum Dots", *Science* 309, 2180 (2005). [DOI: 10.1126/science.1116955]
- R. Hanson, L. P. Kouwenhoven, J. R. Petta, S. Tarucha, and L. M. K. Vandersypen, "Spins in few-electron quantum dots", *Reviews of Modern Physics* 79, 1217 (2007). [DOI: 10.1103/RevModPhys.79.1217]
- G. Burkard, T. D. Ladd, A. Pan, J. M. Petta, M. P. Wardrop, and A. C. Doherty, "Semiconductor spin qubits", *Reviews of Modern Physics* 95, 025003 (2023). [DOI: 10.1103/RevModPhys.95.025003]

## 论文依据

- [[sources/ref-06|文献 6]]，PDF p. 11：两比特操作通过两电子之间的交换相互作用实现，引出后续比特编码与门操控。
- [[sources/ref-06|文献 6]]，PDF p. 27：电极定义量子点系统是固态量子计算的优秀平台，列出单自旋、$S$–$T_0$、交换比特、杂化比特等已实现的编码方案。
- [[sources/ref-06|文献 6]]，PDF p. 30：$S(1,1)$–$S(0,2)$ 两能级哈密顿量（式 2.9）与交换能 $J(\varepsilon)=(\varepsilon+\sqrt{\varepsilon^2+4\Delta^2})/2$（式 2.10），作为交换相互作用的源头公式。
- [[sources/ref-06|文献 6]]，PDF pp. 37–38：交换振荡图 2.9 与自旋漏斗、绝热跟随把 $|S\rangle$ 从北极搬到赤道、增大隧穿耦合以加快振荡频率的实验讨论。
- [[sources/ref-06|文献 6]]，PDF p. 39：在 $(1,1)$ 同时与 $(0,2)$、$(2,0)$ 耦合的对称器件中找到使偶极矩相互抵消的对称工作点，$J(\varepsilon)$ 由失谐和隧穿耦合共同调节。
- [[sources/ref-06|文献 6]]，PDF p. 41：第 2 章小结，明确指出交换振荡和 LZS 干涉是后续章节实验的基础。
- [[sources/ref-06|文献 6]]，PDF pp. 53–56：交换振荡的脉冲序列（a）、布洛赫球演化（b）、失谐–时间二维图（c）以及 J(ε) 解析函数（d）的拟合形式；多电子区 J(ε) 通过沿失谐轴平移 $-E_R$ 得到。
- [[sources/ref-06|文献 6]]，PDF p. 67：偶数电子区 $(1,3)$–$(0,4)$ 中信号放大机制，把右侧点中两个基态电子当作惰性核后低能谱与 $(1,1)$–$(0,2)$ 情形类似。
- [[sources/ref-21|文献 21]]，PDF pp. 19–20：双自旋系统的海森堡模型哈密顿量（式 1.17）、四态矩阵（式 1.18）以及 Hubbard 极限下 $J=2t^2/(U-\varepsilon-\Delta E_z)+2t^2/(U-\varepsilon+\Delta E_z)$（式 1.19）与简化形式 $J=4t^2/U$（式 1.20）。
- [[sources/ref-21|文献 21]]，PDF pp. 37–38：势垒调控可在失谐零点处通过改变点间势垒高度实现对 $J$ 的全电控制，对应"对称操作"；离子注入等手段抑制[[materials-devices/charge-noise|电荷噪声]]，目前已在硅基体系中实现保真度超过 $99\%$ 的 CZ 门。
- [[sources/ref-21|文献 21]]，PDF pp. 51–53：CPhase 演化算符（式 3.10）与 CZ 门 $U_{\mathrm{CZ}}=Z_1(-\pi/2)Z_2(-\pi/2)U_{\mathrm{CPhase}}(\pi\hbar/J)$（式 3.11）；用 Hahn echo 型波形以 $J/2$ 频率精确标定 $J$、剩余耦合可达约 $150\,\mathrm{kHz}$。
- [[sources/ref-21|文献 21]]，PDF pp. 53–54：$J(\varepsilon)=2t^2U/(U^2-\varepsilon^2)$（式 3.12），对称操作点处 $J$ 极小且对失谐一阶不敏感；正反电压脉冲（B1/B2 等大反向）增大波函数重叠以获得更大的 $J$ 值。
- [[sources/ref-21|文献 21]]，PDF p. 56：确定两比特操作所需 $J\approx 6.25\,\mathrm{MHz}$、演化时间 $80\,\mathrm{ns}$，为后续 CZ 门提供参数基线。
- [[sources/ref-21|文献 21]]，PDF pp. 75–76：DCZ 门用 Hahn echo 波形把 $J$ 演化分成时间相等的两段，抑制低频噪声；以此实现 Bell 态 $|Φ^+\rangle$、$|Φ^-\rangle$、$|Ψ^+\rangle$、$|Ψ^-\rangle$ 的态层析，移除读出误差后保真度分别达 $87\%$、$92\%$、$93\%$、$92\%$。
- [[sources/ref-21|文献 21]]，PDF p. 88：$2×2$ 量子点阵列的同步扫描与 Hubbard 模型模拟给出各点充电能 $U_1\text{–}U_4$ 与最近邻隧穿耦合，并展示最近邻 $t$ 与次近邻 $J$ 的可独立调控能力。
- [[sources/ref-22|文献 22]]，PDF pp. 88–90：两比特体系能谱标定，$J=4.7\,\mathrm{MHz}$、$\Delta E_z=55.4\,\mathrm{MHz}$ 满足 $\Delta E_z\gg J$ 条件时本征态近似为自旋直积态，反平行能级整体下移 $J/2$，构成 CROT/CNOT 的能级基础。
- [[sources/ref-22|文献 22]]，PDF p. 91：固定在 $\varepsilon=0$ 处保持 $J$ 大小测得 $J=4.8(4)\,\mathrm{MHz}$，$J$ 随失谐呈指数上升趋势；此处使用 Si-MOS 双量子点，势垒栅 MB 无高频线、只能通过失谐调节 $J$。
- [[sources/ref-22|文献 22]]，PDF pp. 97–99：在 $J$ 常开情况下实现 CNOT 与 ZCNOT 门（式 5.13–5.16），用 $Z/2$ 与 $-Z/2$ 旋转补偿控制比特相位，$J=\sqrt{15}A_R$ 关系保证合成单比特门时非目标 $\lambda$ 子空间旋转 $2\pi$。
- [[sources/ref-22|文献 22]]，PDF pp. 105–106：构建相位误差补偿表实现虚拟相位系统校准，所有 $\pm\pi/2$ 相位因子化为 AWG 波形相位，可在无物理操作下实现等效 CZ 门功能。