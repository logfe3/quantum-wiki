---
title: 交换型两比特门
description: 以双量子点交换相互作用为耦合源的两比特门家族，包括 CPHASE、CZ、√SWAP、SWAP 及其衍生门。
aliases:
 - 交换门
 - SWAP
 - √SWAP
 - CPHASE
 - exchange gates
tags:
 - 量子比特操控
 - 两比特门
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvkmph5y7atd3rr2j5vqqy
source_updated: 2026-09-09T14:45:58Z
---

<div class="entry-lead">交换型两比特门把两个电子自旋之间的[[qubit-control/exchange-interaction|交换相互作用]] $J$ 转化为可程序化的两比特酉演化，按 $J$ 与塞曼能差 $\Delta E_Z$ 的相对大小分出 $\sqrt{\mathrm{SWAP}}$/SWAP、CPHASE/CZ、CROT/CNOT 三大族，是半导体量子点中最常用的两比特门路线。</div>

## 物理图像与门家族

把两个自旋 $1/2$ 各编码在相邻量子点中、以[[fundamentals/tunnel-coupling|隧穿耦合]] $t$ 与充电能 $U$ 之比构成的[[qubit-control/exchange-interaction|交换相互作用]] $J$ 接到一起，开/关 $J$ 即可让两比特联合态在直积基 $\{|↑↑\rangle,|↑↓\rangle,|↓↑\rangle,|↓↓\rangle\}$ 之间累积相位或交换振幅。在硅基自旋比特体系中，所有常用两比特门——CNOT、CZ、$\sqrt{\mathrm{SWAP}}$、SWAP、iSWAP、$\sqrt{\mathrm{iSWAP}}$——都可以只靠这一可调标量 $J$ 和相应的单比特虚拟 $Z$ 旋转实现。

$J$ 与塞曼能差 $\Delta E_Z$ 的比值决定本征态结构与可构造的门。按 §1.3.4 的分类：

- $J \gg \Delta E_Z$：系统本征态退化为单态–三重态基 $\{|S\rangle,|T_0\rangle,|T_+\rangle,|T_-\rangle\}$，调控 $J$ 直接实现 $\sqrt{\mathrm{SWAP}}$ 与 SWAP 类门；
- $J \ll \Delta E_Z$：本征态近似为自旋直积态，反平行态 $|↑↓\rangle$、$|↓↑\rangle$ 的能级整体下移 $J/2$，以此可构造 CPhase/CZ 与 CROT/CNOT 门；
- $J$ 在两者之间（$J \sim \Delta E_Z$）：本征态与直积态显著偏离，单比特门伴随额外的非共振相位累积，必须额外补偿。

 2025 §1.3.5也指出，硅基体系下的 $U_{\sqrt{\mathrm{SWAP}}}$ 通过控制交换耦合的开启时间 $J t/\hbar = \pi/2$ 实现，$J t/\hbar = \pi$ 则给出完整 SWAP 门；$\sqrt{\mathrm{SWAP}}$ 再配合单比特基带门即可在理论上构造 CNOT。该论文同时给出 iSWAP 振荡（[Dijkema et al., 2021]，cavity-mediated iSWAP）、$\sqrt{\mathrm{iSWAP}}$（量子模拟中的双比特门）等扩展。

<!-- FIGURE: 三大族交换型两比特门的本征态/工作点结构示意：J≫ΔEz 时 J(ε)≈Δ²/|ε| 的 S–T0 基；J≪ΔEz 时反平行态下移 J/2 的直积基；以及 J 关断态的 J_off≈150 kHz -->

## 模型哈密顿量

两电子自旋系统在外磁场沿 $z$ 方向的近似下可由各向同性海森堡哈密顿量描述：

$$
H = J\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + g\mu_B\bigl(B_1\!\cdot\!\mathbf{S}_1 + B_2\!\cdot\!\mathbf{S}_2\bigr) .
$$

其中 $J$ 由栅压可调，$\mathbf{S}_i=\boldsymbol\sigma_i/2$，$B_i$ 是第 $i$ 个点的局域磁场（含外磁场与微磁体贡献）。在直积基 $\{|\!\uparrow\uparrow\rangle,|\!\uparrow\downarrow\rangle,|\!\downarrow\uparrow\rangle,|\!\downarrow\downarrow\rangle\}$ 下，$H$ 写为（ 式 (1.18)； 式 (5.2)）

$$
H = \begin{pmatrix} \bar E_Z & 0 & 0 & 0 \\ 0 & -J/2+\Delta E_Z & J/2 & 0 \\ 0 & J/2 & -J/2-\Delta E_Z & 0 \\ 0 & 0 & 0 & -\bar E_Z \end{pmatrix}
$$

其中 $\bar E_Z = g\mu_B(B_{z,1}+B_{z,2})/2$、$\Delta E_Z = g\mu_B(B_{z,1}-B_{z,2})/2$。本征值为

$$
\epsilon(|\!\uparrow\uparrow\rangle) = \bar E_Z, \quad
\epsilon(|\!\downarrow\downarrow\rangle) = -\bar E_Z, \quad
\epsilon(|\!\uparrow\!\downarrow\rangle^\sim) = \frac{-J + \sqrt{J^2+\Delta E_Z^2}}{2}, \quad
\epsilon(|\!\downarrow\uparrow\rangle^\sim) = \frac{-J - \sqrt{J^2+\Delta E_Z^2}}{2} .
$$

当 $J \ll \Delta E_Z$ 时，本征态退化为直积态、$|↑↓\rangle^\sim \approx |↑↓\rangle$、$|↓↑\rangle^\sim \approx |↓↑\rangle$，反平行态能级下移 $J/2$；当 $J \gg \Delta E_Z$ 时，反平行子空间折叠成单态–三重态基。

更微观的层面上，$J$ 来源于电荷态 $(1,1)$ 与 $(0,2)$ 之间的虚隧穿。Hubbard 极限下， 式 (1.19)–(1.20)给出

$$
J = \frac{2t^2}{U-\varepsilon-\Delta E_Z} + \frac{2t^2}{U-\varepsilon+\Delta E_Z} \;\xrightarrow{U\gg\varepsilon,\Delta E_Z}\; \frac{4t^2}{U}
$$

其中 $t$ 为点间隧穿耦合、$U$ 为量子点平均充电能、$\varepsilon$ 为左右电化学势失谐。把对称操作点 $\varepsilon=0$ 与两侧隧穿耦合相等代入， 式 (3.12)得到

$$
J(\varepsilon) = \frac{2t^2 U}{U^2-\varepsilon^2} .
$$

对称操作点处 $J$ 取得极小值且对 $\varepsilon$ 呈一阶不敏感——这是电荷噪声免疫与高保真 CZ 门工程的关键。

## $\sqrt{\mathrm{SWAP}}$/SWAP 族：$J \gg \Delta E_Z$ 工作区

当 $J$ 主导系统能量时，本征态切换到单态–三重态基。控制 $J$ 使系统演化 $J t/\hbar = \theta$ 即在单态–三重态子空间内旋转：

$$
U(\theta) = \begin{pmatrix} \cos(\theta/2) & -i\sin(\theta/2) \\ -i\sin(\theta/2) & \cos(\theta/2) \end{pmatrix}_{S, T_0} \otimes I_{T_+,T_-} .
$$

把 $\theta = \pi/2$ 限制在直积基 $\{|\!\uparrow\downarrow\rangle,|\!\downarrow\uparrow\rangle\}$ 上即得

$$
\sqrt{\mathrm{SWAP}} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & (1-i)/2 & (1+i)/2 & 0 \\ 0 & (1+i)/2 & (1-i)/2 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}
$$

$\theta=\pi$ 给出完整 SWAP

$$
\mathrm{SWAP} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} .
$$

$\sqrt{\mathrm{SWAP}}$ 与两个单比特 $\pi/2$ 旋转组合即可构造 CNOT（Loss & DiVincenzo, 1998, *Phys. Rev. A* 57, 120）；类似地，$\sqrt{\mathrm{SWAP}}$ 与 $-Y/2$ 单比特旋转组合给 iSWAP 的对应构造（ §1.3.4； 2025）。 2025 进一步把 SOT 辅助的单比特门与交换型 $\sqrt{\mathrm{SWAP}}$ 门组合，作为长程 SOT–微波–交换三层混合控制方案的核心两比特单元。

工程上 $\sqrt{\mathrm{SWAP}}$/SWAP 路线要求 $J$ 远高于 $\Delta E_Z$，因此门演化时间极短——但同时要求 $J$ 的关断比足够大，否则空闲态下的 $J_\text{off}$ 会引入缓慢的非共振驱动相位。报告在 transmon 量子比特中 $\sim 15\,\mathrm{ns}$ 的 iSWAP 门需要在 2 GS/s 的 AWG 上以 $\geq 30$ 个采样点拟合以保证波形分辨率。

## CPHASE/CZ 族：$J \ll \Delta E_Z$ 工作区

当 $J$ 远小于塞曼能差时，本征态退化为直积态，$J$ 不再驱动自旋翻转，而是让反平行态积累相位。 式 (3.10)给出

$$
U_{\mathrm{CPhase}}(t) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & e^{i J t / 2\hbar} & 0 & 0 \\ 0 & 0 & e^{i J t / 2\hbar} & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} .
$$

通过令 $t=\pi\hbar/J$ 再配合两个 $Z(-\pi/2)$ 单比特虚拟旋转， 式 (3.11)得到 CZ 门

$$
U_{\mathrm{CZ}} = Z_1(-\pi/2)\,Z_2(-\pi/2)\,U_{\mathrm{CPhase}}(\pi\hbar/J) = \operatorname{diag}(1, 1, 1, -1) .
$$

CZ 门的实现条件只有两点：(1) 精确控制 $J$ 与演化时间 $t$ 使累积相位恰为 $\pi$；(2) 校准两个单比特 $Z$ 旋转的相位。 在自然 Si/SiGe 一维四量子点中以 $\Delta E_Z \approx 42\,\mathrm{MHz}$、$J \approx 6.25\,\mathrm{MHz}$、演化时间 $80\,\mathrm{ns}$ 完成 CZ 门，随机基准测得保真度 $90.96 \pm 7.48\%$。要绕开两比特 Clifford 编译开销（平均 8.25 个单比特门 + 1.5 个 CPhase）拿到更紧的 CPhase 保真度，可用[[qubit-control/randomized-benchmarking|随机化基准测试]]的特征 RB（CRB）变体：以单比特 Clifford 对为参考序列、两比特 Pauli 为特征群交错 CPhase，在同类 Si/SiGe 双点器件上提取出 $92.0\pm0.5\%$ 的两比特空间 CPhase 保真度。

### 对称工作点与电荷噪声抑制

在对称工作点 $\varepsilon=0$ 附近，$J(\varepsilon)$ 对失谐一阶不敏感，电荷噪声的线性贡献被自动抵消。 §3.4.2以 Hahn echo 型交换振荡（频率 $J/2$）精确标定 $J$ 与对称点位置，并把势垒栅 B2 的正脉冲与能级栅 B1 的等大反向脉冲叠加以增大波函数重叠，可把 $J$ 从几百 $\mathrm{kHz}$ 推到 $> 20\,\mathrm{MHz}$。代价是当脉冲幅度过大时，操作点可能漂出 $(1,1)$ 电荷区，导致 $J$ 拟合的弥散度增大；为此实验中需要求 $J$ 与失谐的依赖 $J = 2t^2U/(U^2-\varepsilon^2)+J_0$，并把对称点位置用作长期反馈的参考。

### DCZ：动力学解耦抑制低频电荷涨落

把 CPhase 演化时间 $t_E$ 在中间用目标比特上的 $\pi$ 脉冲分成长度相等的两段，即得解耦形式 CZ（DCZ）：

$$
U_{\mathrm{DCZ}} = Z_1(-\pi/2)\,Z_2(-\pi/2)\,U_{\mathrm{CPhase}}(t_E/2)\,X_{\mathrm{target}}\,U_{\mathrm{CPhase}}(t_E/2) .
$$

$\pi$ 脉冲反转低频电荷涨落在两段演化中累积的相位，等效在演化时间内插入了 [[qubit-control/dynamical-decoupling|动力学解耦]]。 §3.4.5以此制备四个 Bell 态、移除读出误差后平均保真度 $91\%$、纠缠度 $0.85$； §5.5则在 Si-MOS 双量子点中以非绝热 DCZ 方案测得 CZ/2 门保真度 $92.2\%$、Bell 态保真度 $84.09\%$，并强调 bias-tee 内 RC 滤波引入的高频波形畸变必须事先校准。

<!-- FIGURE: DCZ 门的脉冲序列：J 演化时间 t_E/2 夹一个目标比特 π 脉冲，配合两侧 Z(-π/2) 旋转；与 CZ 的对比示意 -->

## CROT/CNOT 族：$J$ 常开 + 共振条件驱动

当 $J$ 始终保持有限而非门脉冲式开关时，系统本征态略偏离直积态。每个比特在不同控制比特态下有四个条件拉莫尔频率（ §5.3）：

$$
f_1^\downarrow = f_{Q1},\; f_1^\uparrow = f_{Q1} - J, \quad
f_2^\downarrow = f_{Q2},\; f_2^\uparrow = f_{Q2} - J .
$$

在 $f_i^\uparrow$ 上驱动目标比特，则只有当控制比特为 $|\!\uparrow\rangle$ 时目标比特才会翻转——这就是受控旋转（CROT）。 在 Si-MOS 双量子点中以 $\Delta E_Z = 55.4\,\mathrm{MHz}$、$J = 4.8(4)\,\mathrm{MHz}$ 实现 $J$ 常开下的 CROT，Rabi 振荡频率 $1.25\,\mathrm{MHz}$、$\pi$ 脉冲 $400\,\mathrm{ns}$。

把海森堡哈密顿量转到本征基，并施加沿 $x$ 方向幅度 $A_R$、相位 $\phi$ 的微波驱动，旋转坐标系下的有效哈密顿量在 $\lambda$、$\kappa$ 两个子空间内分块对角化（ 式 (5.11)–(5.12)）：

$$
H_R = \frac{J}{2}\lambda_I + \frac{J}{2}\lambda_Z + \frac{A_R}{2}\cos\theta\cos\phi\,\lambda_X + \frac{A_R}{2}\cos\theta\sin\phi\,\lambda_Y + \frac{A_R}{2}\cos\theta\cos\phi\,\kappa_X + \frac{A_R}{2}\cos\theta\sin\phi\,\kappa_Y
$$

演化算符可因式分解为三项

$$
U_R(t) = \exp\!\left[-\frac{i}{2}\sqrt{J^2+\Delta E_Z^2}\,t\,\,ZI\right]\cdot\exp\!\left[-\frac{i}{2}\Omega_\lambda t\,\mathbf{n}_\lambda\!\cdot\!\boldsymbol\lambda\right]\cdot\exp\!\left[-\frac{i}{2}\Omega_\kappa t\,\mathbf{n}_\kappa\!\cdot\!\boldsymbol\kappa\right]
$$

其中 $\Omega_\lambda = \sqrt{A_R^2\cos^2\theta+J^2}$、$\Omega_\kappa = A_R\cos\theta$、$\theta = \arctan[2\Delta/(\sqrt{\varepsilon^2+4\Delta^2}-\varepsilon)]$。要实现真正的 CNOT 必须同时满足三个条件（ 式 (5.12) 后文字）：

1. 微波相位 $\phi=0$；
2. $\lambda$ 子空间旋转 $\Omega_\lambda t = 2m\pi$；
3. $\kappa$ 子空间旋转 $\Omega_\kappa t = (2n-1)\pi$。

由于两个子空间的旋转速率不同，要让控制比特相位回到原位的同时让目标比特完成 $\pi$ 翻转，需要在 $\kappa$ 子空间最优时间 $15\pi/J$ 之外再补一段 $t_{\mathrm{extra}}^{\mathrm{CNOT}} = 2(2-\sqrt{15}\,\pi/2)/J$，总时长 $t_{\mathrm{tot}} = 4\pi/J$，比单独满足 $\kappa$ 子空间长 $3\%$（ §5.4.3）。

### 虚拟相位补偿

$CROT$ 与 $ZCROT$ 之间存在 $180^\circ$ 相位差，对控制比特施加虚拟 $Z$ 即可在两个门之间切换。剩下 $\lambda$ 子空间的累积相位来自 $J$ 常开下微波对相邻频率的非共振驱动，需要按门逐个补偿。 §5.4.3给出校准序列：从四种校准序列的 Ramsey 拟合得到相位偏移

$$
(\theta_{\mathrm{CNOT12}}, \theta_{\mathrm{CNOT21}}, \theta_{\mathrm{ZCNOT12}}, \theta_{\mathrm{ZCNOT21}}) = (0.166\pi, 0.207\pi, -0.139\pi, -0.129\pi)
$$

由此反推非共振哈密顿相位误差

$$
(\phi_1^\uparrow, \phi_2^\uparrow, \phi_1^\downarrow, \phi_2^\downarrow) = (-0.0517\pi, -0.0415\pi, 0.0198\pi, 0.0248\pi) .
$$

完成校准后，CROT 与 ZCROT 可以合成 CNOT 与 ZCNOT，整个两比特 Clifford 群都建立在同一时长（$\sim 400\,\mathrm{ns}$）的 CROT 单元之上。这种"虚拟相位门"路线在 Si/SiGe 与 Si-MOS 体系中分别由 Noiri 等与 Wister Huang 首次实现，单比特门通过两比特门的组合而非独立微波通道实现。

## 调控方式：失谐 vs 势垒

实现交换型两比特门通常有两条路径：

- **失谐脉冲**（pulse on $V_{P_1}-V_{P_2}$）：在远离失谐零点的位置工作，门操作波形简单、只需在柱塞电极上加高速脉冲；但 $J$ 对失谐的导数 $|\partial J/\partial \varepsilon|$ 较大，电荷噪声通过 $\delta\varepsilon$ 直接调制比特频率，退相干严重（ §1.3.4； §5.1）。
- **势垒脉冲**（pulse on $V_B$）：在对称操作点 $\varepsilon=0$ 处通过势垒栅调节 $t$，$J$ 对 $\varepsilon$ 一阶不敏感，可有效抑制电荷噪声；但需要额外的高频势垒栅控线（ §3.4.2）。

硅基体系下保真度超过 $99\%$ 的 CZ 门几乎都采用势垒脉冲， 在自然硅中通过正反电压脉冲（B1/B2 等大反向）把 $J$ 从几百 $\mathrm{kHz}$ 推到 $>20\,\mathrm{MHz}$，对称操作点处 $J \approx 6.25\,\mathrm{MHz}$、演化 $80\,\mathrm{ns}$。势垒脉冲的代价是势垒栅不可避免地牵动失谐，需要 [[scaling-automation/virtual-gates|虚拟栅极]]技术做动态补偿。

 §5.1指出 Si-MOS 样品的中间势垒栅 MB 没有高频控制线，势垒脉冲无法实施，必须采用 $J$ 常开 + 共振条件驱动的 CROT 路线；这是"样品条件决定门策略"的典型案例。

### 第三条路线：栅极角色互换（Park 2025）

Si/SiGe 平台有一个结构性不利：SiGe 间隔层把量子点与控制电极隔开，杠杆臂偏小，势垒栅对 $J$ 的调控力度先天不足——残余交换在多比特阵列里积累成多余的 $ZZ$ 相移。用微波驱动有残余耦合的比特时，时间演化算符中除了单比特操作项还多出一个正比于 $J/\Omega$ 的 $ZZ$ 项（$\Omega$ 是 Rabi 频率）；高保真单比特操作要求 $J\ll\Omega$，而两比特门又要求 $J$ 能在短时标内动态开关——两头都压在"可调性"上。

Park 等人给出的解法不改硬件、只换电压配置：在**等宽交叠纳米栅**器件上把靠近（远离）自旋比特的栅改作势垒（柱塞）栅——所谓 interchanged tuning。同一器件上原位切换角色后仍保持多比特控制，而交换耦合的可调性（对势垒脉冲幅度的指数斜率，单位 dec/V）全面提升：

| 最近邻对比 | 常规配置 | 角色互换配置 |
| --- | --- | --- |
| 比特对 1 | 7.25 dec/V | 16.6 dec/V |
| 比特对 2 | 3.87 dec/V | 11.4 dec/V |
| 比特对 3 | 4.32 dec/V | 15.4 dec/V |

![[assets/figures/exchange-gates/park2025-fig1-interchanged-tuning.jpg]]

*等宽交叠纳米栅与角色互换调谐：把靠近（远离）比特的纳米栅指派为势垒（柱塞）栅，电压重配置即原位切换调谐策略、同时保持多比特控制——SiGe 间隔层导致的杠杆臂劣势由此被绕开。图源：Park et al. (2025), Fig. 1。*

约 16 dec/V 的可调性此前只在界面更近、杠杆臂更大的 Si-MOS 中实现过；角色互换让 Si/SiGe（比特远离电噪声界面的优势得以保留）也能达到同量级。实测 $J$ 随势垒脉冲幅度先指数增长、在大幅值处偏离单一指数——对应势垒被压低后两点并合为单个大量子点、隧穿耦合趋于饱和的渐近行为；高可调性本身使全耦合区间的精确标定成为可能。

![[assets/figures/exchange-gates/park2025-fig4-exchange-tunability.jpg]]

*交换耦合可调性的对比：常规与角色互换配置下 J 随势垒脉冲幅度的依赖（衰减正弦振荡提取 J/2，聚焦实验常用的几 MHz 区间做指数拟合）——角色互换使所有最近邻对的可调性提升数倍至一个量级，并呈现双点并合导致的非单一指数行为。图源：Park et al. (2025), Fig. 4。*

这一策略还有测量学红利：量子点可以在任意栅下形成，把"探针点"挪到不同位置即可逐点测绘微磁体梯度场、[[fundamentals/valley-splitting|谷劈裂]]的空间分布与杂质噪声的空间特征。

## 参数与量级

| 量 | 典型值 | 实验/来源 |
| --- | --- | --- |
| 交换能 $J$（GaAs，交换振荡） | 几十 $\mathrm{MHz}$ 至 $\mathrm{GHz}$ 量级 | |
| 交换能 $J$（Si/SiGe，CZ 工作点） | $6.25\,\mathrm{MHz}$（演化 $80\,\mathrm{ns}$） | |
| 交换能 $J$（Si-MOS，$J$ 常开） | $4.8(4)\,\mathrm{MHz}$（$\varepsilon=0$） | |
| 交换能 $J$（Si-MOS，$J$ 关闭残余） | $\sim 150\,\mathrm{kHz}$ | |
| $J$ 调节范围（势垒脉冲） | 几百 $\mathrm{kHz}$ 到 $\geq 20\,\mathrm{MHz}$ | |
| $\Delta E_Z$（Si/SiGe 一维四点） | $\approx 42\,\mathrm{MHz}$ | |
| $\Delta E_Z$（Si-MOS 双点） | $55.4\,\mathrm{MHz}$ | |
| $J/\Delta E_Z$（$J$ 常开工作区） | $\approx 0.087$ | |
| CZ 演化时间（Si/SiGe，势垒脉冲） | $80\,\mathrm{ns}$ | |
| DCZ CZ/2 演化时间（Si-MOS） | $92.2\%$ 保真度对应单段 | |
| CROT 拉比频率（Si-MOS，$J$ 常开） | $1.25\,\mathrm{MHz}$（$\pi$ 脉冲 $400\,\mathrm{ns}$） | |
| CNOT 总时长（$J$ 常开，Si-MOS） | $t_\text{CNOT}=4\pi/J\approx 833\,\mathrm{ns}$ | |
| $\sqrt{\mathrm{SWAP}}$ 时长（Hubbard 极限） | $J t/\hbar = \pi/2$；$J=4t^2/U$ | |
| iSWAP 时长（超导 transmon 参考） | $\sim 15\,\mathrm{ns}$（30 个 AWG 点拟合） | |
| CZ 门 RB 保真度（自然 Si/SiGe） | $90.96\pm 7.48\%$ | |
| CPhase 门 CRB 保真度（自然 Si/SiGe 双点） | $92.0\pm0.5\%$（两比特空间，交错 CRB 提取） | |
| 交换可调性（常规配置，Si/SiGe 等宽栅） | 7.25 / 3.87 / 4.32 dec/V（三个最近邻对） | Park 2025 |
| 交换可调性（角色互换配置） | 16.6 / 11.4 / 15.4 dec/V——Si/SiGe 首次达 Si-MOS 量级 | Park 2025 |
| 残余 ZZ 约束 | 单比特保真度要求 $J\ll\Omega$（附加 $(J/\Omega)ZZ$ 项） | Park 2025 |
| DCZ Bell 态保真度（自然 Si/SiGe） | 平均 $91\%$（移除读出误差） | |
| DCZ Bell 态保真度（Si-MOS） | $84.09\%$ | |
| 单比特门保真度（自然 Si/SiGe） | $X,Y$ 门 $>99\%$（$83\,\mathrm{ns}$） | |
| $\lambda$ 子空间相位补偿占比 | $\approx 3\%$ | |
| 微磁体梯度（典型 EDSR） | $\partial B_x/\partial z$ 达 $0.1\,\mathrm{mT/nm}$ 量级 | |

## 实验特征与测量

**交换振荡**。把两个电子初始化到 $|↓↓\rangle$，沿失谐轴施加方波脉冲把系统暂时拉入 $(0,2)$ 区附近，再返回 $(1,1)$ 测量 $Q_1$ 的自旋上态概率。振荡频率恰好为 $J/2$（在控制比特 $|\!\downarrow\rangle$ 子空间内），这是 $J$ 最直接的表征方式。 §2.2.3在 GaAs 双量子点 $(1,1)$–$(2,0)$ 区域附近观测到交换振荡（图 2.9），并将其作为 $S$–$T_0$ 比特的标准读出与 $z$ 旋转工具。

**Hahn echo 标定**。控制比特 $|\!\downarrow\rangle$ 子空间内的交换振荡额外积累两组比特的频移（包括量子点位置移动导致的微磁体梯度漂移），采用 Hahn echo 波形 $\pi/2$–$J(t_E)$–$\pi$–$J(t_E)$–$\pi/2$ 即可消除这一频移，使振荡频率严格等于 $J/2$。 §3.4.2以此把 $J$ 的标定精度推到 $150\,\mathrm{kHz}$ 量级。

**四个条件频率的能谱测量**。$J$ 常开方案的核心是逐一测量 $f_1^\downarrow, f_1^\uparrow, f_2^\downarrow, f_2^\uparrow$ 四个条件频率。固定控制比特初态，对目标比特扫描拉莫尔频率得到两条共振线（取决于控制比特态）；交换两条线的角色重复一次即可画出四个频率，线间距直接给出 $\Delta E_Z$ 与 $J$（ §5.3）。

**CROT 与 ZCROT 校准**。CROT 使目标比特 $\pi$ 翻转、控制比特绕 $z$ 转 $\pi$，因此与 ZCROT 之间存在 $180^\circ$ 相位差，对控制比特施加虚拟 $Z$ 即可切换。这是 $J$ 常开方案能合成全部两比特 Clifford 群的关键。实验中需要通过调节 AWG 幅度（而非微波源功率）使 $f_1^\downarrow$ 与 $f_2^\downarrow$ 同步拉比，并把另外两个 ZCROT 的幅度按比例校准。校准比例不是常量，工作点漂移或电压整体偏移时需要重新标定（ §5.4.2）。

**对称工作点的精标**。$J(\varepsilon) = 2t^2 U/(U^2-\varepsilon^2)$ 在 $\varepsilon=0$ 处对失谐一阶不敏感。 §3.4.2以 Hahn echo + 傅里叶变换测出振荡频率极小值点即对称操作点的位置；实际操作中由于正反电压脉冲会引起两侧电化学势的非对称偏移，对称点常常偏离失谐零点，需要虚拟栅极技术做长期反馈。

**量子态层析与随机基准**。CZ 门保真度通常用两比特随机基准（两比特 RB）测出：随机选取两比特 Clifford 门（每个 Clifford 门由 CZ 与单比特 $X$、$Y$、$Z$ 旋转分解）作为序列、最后用一个逆门把比特拉回初态，测量 $|↓↓\rangle$ 的存活概率随序列长度 $m$ 的衰减。 §3.4.4用此方法测得 $F_\text{CZ} = 90.96 \pm 7.48\%$。Bell 态保真度则用量子态层析（QST）测出， §3.4.5制备四个 Bell 态、移除读出误差后平均保真度 $91\%$、纠缠度 $0.85$。

## 与比特编码的关系

- **[[qubit-control/single-spin-qubit|单自旋比特]]**：两比特系统由海森堡 $H = J\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + g\mu_B(B_1\!\cdot\!\mathbf{S}_1+B_2\!\cdot\!\mathbf{S}_2)$ 描述，$J$ 出现在控制比特与目标比特之间。CPhase、CROT、共振 CNOT 都基于此 $J$（ §1.3.4； §5.4）。
- **[[qubit-control/singlet-triplet-qubit|单态–三重态比特]]**：$J(\varepsilon)$ 直接给出 $z$ 轴旋转频率，$x$ 轴来自两点磁场梯度（自然核场或 [[materials-devices/micromagnet|微磁体]]）。 第 2 章把 $J(\varepsilon) = (\varepsilon+\sqrt{\varepsilon^2+4\Delta^2})/2$ 及其大失谐渐近 $J\approx\Delta^2/|\varepsilon|$ 作为 $S$–$T_0$ 编码的源头公式。
- **[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]**：$J_l$ 与 $J_r$ 同时打开，比特频率 $\omega_\text{RX}\approx 0.52\,t$（详见词条）；交换型两比特门的 $\sqrt{\mathrm{SWAP}}$/SWAP 路线在 RX 三点中可直接构造三比特受控相位与受控 SWAP。
- **[[qubit-control/hybrid-qubit|杂化量子比特]]**：3–5 电子、电子–空穴混合，把单占据与双占据电荷态空间扩大，交换项被推广为更复杂的矩阵，但仍以 $J\sim t^2/U$ 的微扰结构为骨架。
- **[[qubit-control/charge-qubit|电荷量子比特]]**：电荷比特依赖点间隧穿产生的失谐依赖 $J$ 实现条件相位，门时间短但退相干快；自旋比特把同一 $J$ 映射到自旋态能量差上，门时间较长但相干性好得多。

读出也常借助交换相互作用：[[qubit-control/lzsm-interference|LZSM 干涉]]、自旋漏斗与[[readout-measurement/single-shot-readout|单发读出]]均通过调制 $J(\varepsilon)$ 让系统在不同自旋态下走出不同轨迹，从而把自旋信息转换为电荷信号。

## 噪声与相干

交换门的保真度受三组噪声支配：

1. **电荷噪声**（$1/f$）：直接以 $|\partial J/\partial\varepsilon|$ 为比例调制比特频率。势垒脉冲在对称工作点利用一阶不敏感抑制低频部分；DCZ/解耦序列进一步在时间域内平均。Si/SiGe 体系中，电荷噪声通过微磁体的杂散梯度场与自旋耦合，是 $T_2$ 被压在数微秒的主要原因（ §3.1）。
2. **核自旋噪声**：GaAs 中约 $10^6$ 个核自旋的奥弗豪泽场造成 $T_2^*\approx 10\,\mathrm{ns}$；改用 $^{28}\mathrm{Si}$ 同位素纯化样品可把 $S$–$T_0$ 比特的 $T_2^*$ 延长到约 $360\,\mathrm{ns}$，并经动力学解耦把 $T_2$ 推到 $0.87\,\mathrm{ms}$（ p. 31 ）。
3. **隧穿耦合涨落**：势垒栅的电压漂移改变 $t$，进而按 $J\sim t^2$ 调制交换能。在大失谐工作点上，电荷噪声通过 $t$ 的二阶依赖（$\partial^2 J/\partial \varepsilon^2$）仍会留下残余退相干；通过反馈控制势垒栅电压把 $J$ 锁定到目标值可进一步压低低频漂移。

速度与相干之间的折中是所有交换门工程的核心：增大 $J$ 加快门操作同时必然加大 $|\partial J/\partial q|$，因此提升保真度的根本途径是降低材料/器件层面的噪声（异质结界面、微磁体优化、栅氧层厚度），而不是简单地"开得更大"。

## 与其他概念的关系

- 与[[qubit-control/exchange-interaction|交换相互作用]]：$J$ 是交换型两比特门的耦合源——CPHASE/CZ 把 $J$ 用作条件相位源，CROT 把 $J$ 用作条件频移源，$\sqrt{\mathrm{SWAP}}$/SWAP 直接以 $J$ 为演化生成元；Hubbard 极限下 $J=4t^2/U$ 是双比特门速率的标尺。
- 与[[qubit-control/cnot-gate|CNOT 门]]：CNOT 是交换型两比特门的通用目标（CPHASE + 两路 $Z(-\pi/2)$、CROT + 虚拟相位补偿、$\sqrt{\mathrm{SWAP}}$ + 两路 $X(\pi/2)$）；三族门策略都把 CNOT 视为两比特 Clifford 群的生成元。
- 与[[qubit-control/toffoli-gate|Toffoli 门]]：Toffoli 是 CNOT 的三比特推广，可由 CNOT + 单比特门串联构造，也可在三比特条件频移的 $J$ 常开方案中直接静态演示。
- 与[[qubit-control/dynamical-decoupling|动力学解耦]]：用于 CPhase 演化中抑制低频噪声，DCZ/Hahn echo 是其直接产物（ §3.4.5； §5.5）。
- 与[[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/silicon-mos|Si-MOS]]/[[materials-devices/gaas-algaas|GaAs/AlGaAs]]/[[materials-devices/silicon-sige|Silicon–Germanium]]：前者决定门时长上限，后者决定 $T_2^*$、$J$ 调节能力与典型工作点。
- 与[[scaling-automation/virtual-gates|虚拟栅极]]：对称工作点的精确标定与动态补偿离不开虚拟栅极，它是把"用势垒调 $J$、不污染失谐"工程化的核心工具。
- 与[[circuit-qed/jaynes-cummings-model|JC 模型]]与[[qubit-control/resonant-exchange-qubit|共振交换比特]]：常开 $J$ 的 RX 比特天然带电偶极矩，与微波谐振腔的耦合强度 $g_\text{RX}$ 由 $J$ 失谐依赖调制，JC 阶梯与色散读出可原样套用。
- 与[[qubit-control/geometric-quantum-gate|几何量子门]]：当旋转误差（功率失配、过冲、上升沿）成为主要错误源时，可借助几何相位或分段复合脉冲把残留误差压到二阶。

<!-- FIGURE: 交换型两比特门相关概念关系图：以 J(ε,t,U) 为中心节点，向外连接三大族（√SWAP/SWAP、CPHASE/CZ、CROT/CNOT）、两种调控方式（失谐脉冲、势垒脉冲）、DCZ/解耦、虚拟栅极/电荷噪声等子模块 -->


## 参考文献

- 交换门的原始方案与相干交换实验：[[references/loss-divincenzo-1998|Loss & DiVincenzo, PRA 57, 120 (1998)]]、[[references/petta-prb-2005|Petta et al., PRB 72, 161301(R) (2005)]]。
- 交换耦合的现代门实现：[[references/watson-2018|Watson et al., Nature 555, 633 (2018)]]、[[references/xue-2022|Xue et al., Nature 601, 343 (2022)]]。
- Park, J., Jang, H., Sohn, H., Song, Y., Degli Esposti, D., Scappucci, G., Kim, D. Highly Tunable Two-Qubit Interactions in Si/SiGe Quantum Dots by Interchanging the Roles of Qubit-Defining Gates. *Nano Letters*（2025）. DOI: 10.1021/acs.nanolett.6c00044；arXiv:2512.20142（QAtlas 缓存：2512.20142）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
