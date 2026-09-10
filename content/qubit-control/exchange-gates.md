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
date: 2026-09-08
---

<div class="entry-lead">交换型两比特门把两个电子自旋之间的[[qubit-control/exchange-interaction|交换相互作用]] $J$ 转化为可程序化的两比特酉演化，按 $J$ 与塞曼能差 $\Delta E_Z$ 的相对大小分出 $\sqrt{\mathrm{SWAP}}$/SWAP、CPHASE/CZ、CROT/CNOT 三大族，是半导体量子点中最常用的两比特门路线。</div>

## 物理图像与门家族

把两个自旋 $1/2$ 各编码在相邻量子点中、以[[fundamentals/tunnel-coupling|隧穿耦合]] $t$ 与充电能 $U$ 之比构成的[[qubit-control/exchange-interaction|交换相互作用]] $J$ 接到一起，开/关 $J$ 即可让两比特联合态在直积基 $\{|↑↑\rangle,|↑↓\rangle,|↓↑\rangle,|↓↓\rangle\}$ 之间累积相位或交换振幅。在硅基自旋比特体系中，所有常用两比特门——CNOT、CZ、$\sqrt{\mathrm{SWAP}}$、SWAP、iSWAP、$\sqrt{\mathrm{iSWAP}}$——都可以只靠这一可调标量 $J$ 和相应的单比特虚拟 $Z$ 旋转实现（文献 21，PDF p. 19；文献 22，PDF p. 71）。

$J$ 与塞曼能差 $\Delta E_Z$ 的比值决定本征态结构与可构造的门。按文献 21 §1.3.4 的分类（PDF p. 19–20）：

- $J \gg \Delta E_Z$：系统本征态退化为单态–三重态基 $\{|S\rangle,|T_0\rangle,|T_+\rangle,|T_-\rangle\}$，调控 $J$ 直接实现 $\sqrt{\mathrm{SWAP}}$ 与 SWAP 类门；
- $J \ll \Delta E_Z$：本征态近似为自旋直积态，反平行态 $|↑↓\rangle$、$|↓↑\rangle$ 的能级整体下移 $J/2$，以此可构造 CPhase/CZ 与 CROT/CNOT 门；
- $J$ 在两者之间（$J \sim \Delta E_Z$）：本征态与直积态显著偏离，单比特门伴随额外的非共振相位累积，必须额外补偿。

文献 24 2025 §1.3.5（PDF p. 17）也指出，硅基体系下的 $U_{\sqrt{\mathrm{SWAP}}}$ 通过控制交换耦合的开启时间 $J t/\hbar = \pi/2$ 实现，$J t/\hbar = \pi$ 则给出完整 SWAP 门；$\sqrt{\mathrm{SWAP}}$ 再配合单比特基带门即可在理论上构造 CNOT。该论文同时给出 iSWAP 振荡（[Dijkema et al., 2021]，cavity-mediated iSWAP）、$\sqrt{\mathrm{iSWAP}}$（量子模拟中的双比特门）等扩展。

<!-- FIGURE: 三大族交换型两比特门的本征态/工作点结构示意：J≫ΔEz 时 J(ε)≈Δ²/|ε| 的 S–T0 基；J≪ΔEz 时反平行态下移 J/2 的直积基；以及 J 关断态的 J_off≈150 kHz -->

## 模型哈密顿量

两电子自旋系统在外磁场沿 $z$ 方向的近似下可由各向同性海森堡哈密顿量描述：

$$
H = J\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + g\mu_B\bigl(B_1\!\cdot\!\mathbf{S}_1 + B_2\!\cdot\!\mathbf{S}_2\bigr) .
$$

其中 $J$ 由栅压可调，$\mathbf{S}_i=\boldsymbol\sigma_i/2$，$B_i$ 是第 $i$ 个点的局域磁场（含外磁场与微磁体贡献）。在直积基 $\{|\!\uparrow\uparrow\rangle,|\!\uparrow\downarrow\rangle,|\!\downarrow\uparrow\rangle,|\!\downarrow\downarrow\rangle\}$ 下，$H$ 写为（文献 21 式 (1.18)，PDF p. 19；文献 22 式 (5.2)，PDF p. 79）

$$
H = \begin{pmatrix} \bar E_Z & 0 & 0 & 0 \\ 0 & -J/2+\Delta E_Z & J/2 & 0 \\ 0 & J/2 & -J/2-\Delta E_Z & 0 \\ 0 & 0 & 0 & -\bar E_Z \end{pmatrix},
$$

其中 $\bar E_Z = g\mu_B(B_{z,1}+B_{z,2})/2$、$\Delta E_Z = g\mu_B(B_{z,1}-B_{z,2})/2$。本征值为

$$
\epsilon(|\!\uparrow\uparrow\rangle) = \bar E_Z, \quad
\epsilon(|\!\downarrow\downarrow\rangle) = -\bar E_Z, \quad
\epsilon(|\!\uparrow\!\downarrow\rangle^\sim) = \frac{-J + \sqrt{J^2+\Delta E_Z^2}}{2}, \quad
\epsilon(|\!\downarrow\uparrow\rangle^\sim) = \frac{-J - \sqrt{J^2+\Delta E_Z^2}}{2} .
$$

当 $J \ll \Delta E_Z$ 时，本征态退化为直积态、$|↑↓\rangle^\sim \approx |↑↓\rangle$、$|↓↑\rangle^\sim \approx |↓↑\rangle$，反平行态能级下移 $J/2$；当 $J \gg \Delta E_Z$ 时，反平行子空间折叠成单态–三重态基。

更微观的层面上，$J$ 来源于电荷态 $(1,1)$ 与 $(0,2)$ 之间的虚隧穿。Hubbard 极限下，文献 21 式 (1.19)–(1.20)（PDF p. 20）给出

$$
J = \frac{2t^2}{U-\varepsilon-\Delta E_Z} + \frac{2t^2}{U-\varepsilon+\Delta E_Z} \;\xrightarrow{U\gg\varepsilon,\Delta E_Z}\; \frac{4t^2}{U},
$$

其中 $t$ 为点间隧穿耦合、$U$ 为量子点平均充电能、$\varepsilon$ 为左右电化学势失谐。把对称操作点 $\varepsilon=0$ 与两侧隧穿耦合相等代入，文献 21 式 (3.12)（PDF p. 53）得到

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
\sqrt{\mathrm{SWAP}} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & (1-i)/2 & (1+i)/2 & 0 \\ 0 & (1+i)/2 & (1-i)/2 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix},
$$

$\theta=\pi$ 给出完整 SWAP

$$
\mathrm{SWAP} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} .
$$

$\sqrt{\mathrm{SWAP}}$ 与两个单比特 $\pi/2$ 旋转组合即可构造 CNOT（Loss & DiVincenzo, 1998, *Phys. Rev. A* 57, 120）；类似地，$\sqrt{\mathrm{SWAP}}$ 与 $-Y/2$ 单比特旋转组合给 iSWAP 的对应构造（文献 21 §1.3.4，PDF p. 19；文献 24 2025，PDF p. 17）。文献 24 2025 进一步把 SOT 辅助的单比特门与交换型 $\sqrt{\mathrm{SWAP}}$ 门组合，作为长程 SOT–微波–交换三层混合控制方案的核心两比特单元。

工程上 $\sqrt{\mathrm{SWAP}}$/SWAP 路线要求 $J$ 远高于 $\Delta E_Z$，因此门演化时间极短——但同时要求 $J$ 的关断比足够大，否则空闲态下的 $J_\text{off}$ 会引入缓慢的非共振驱动相位。文献 9（PDF p. 64）报告在 transmon 量子比特中 $\sim 15\,\mathrm{ns}$ 的 iSWAP 门需要在 2 GS/s 的 AWG 上以 $\geq 30$ 个采样点拟合以保证波形分辨率。

## CPHASE/CZ 族：$J \ll \Delta E_Z$ 工作区

当 $J$ 远小于塞曼能差时，本征态退化为直积态，$J$ 不再驱动自旋翻转，而是让反平行态积累相位。文献 21 式 (3.10)（PDF p. 51）给出

$$
U_{\mathrm{CPhase}}(t) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & e^{i J t / 2\hbar} & 0 & 0 \\ 0 & 0 & e^{i J t / 2\hbar} & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix} .
$$

通过令 $t=\pi\hbar/J$ 再配合两个 $Z(-\pi/2)$ 单比特虚拟旋转，文献 21 式 (3.11)（PDF p. 51）得到 CZ 门

$$
U_{\mathrm{CZ}} = Z_1(-\pi/2)\,Z_2(-\pi/2)\,U_{\mathrm{CPhase}}(\pi\hbar/J) = \operatorname{diag}(1, 1, 1, -1) .
$$

CZ 门的实现条件只有两点：(1) 精确控制 $J$ 与演化时间 $t$ 使累积相位恰为 $\pi$；(2) 校准两个单比特 $Z$ 旋转的相位。文献 21 在自然 Si/SiGe 一维四量子点中以 $\Delta E_Z \approx 42\,\mathrm{MHz}$、$J \approx 6.25\,\mathrm{MHz}$、演化时间 $80\,\mathrm{ns}$ 完成 CZ 门，随机基准测得保真度 $90.96 \pm 7.48\%$（PDF p. 56）。

### 对称工作点与电荷噪声抑制

在对称工作点 $\varepsilon=0$ 附近，$J(\varepsilon)$ 对失谐一阶不敏感，电荷噪声的线性贡献被自动抵消。文献 21 §3.4.2（PDF p. 51）以 Hahn echo 型交换振荡（频率 $J/2$）精确标定 $J$ 与对称点位置，并把势垒栅 B2 的正脉冲与能级栅 B1 的等大反向脉冲叠加以增大波函数重叠，可把 $J$ 从几百 $\mathrm{kHz}$ 推到 $> 20\,\mathrm{MHz}$。代价是当脉冲幅度过大时，操作点可能漂出 $(1,1)$ 电荷区，导致 $J$ 拟合的弥散度增大；为此实验中需要求 $J$ 与失谐的依赖 $J = 2t^2U/(U^2-\varepsilon^2)+J_0$，并把对称点位置用作长期反馈的参考（PDF p. 53）。

### DCZ：动力学解耦抑制低频电荷涨落

把 CPhase 演化时间 $t_E$ 在中间用目标比特上的 $\pi$ 脉冲分成长度相等的两段，即得解耦形式 CZ（DCZ）：

$$
U_{\mathrm{DCZ}} = Z_1(-\pi/2)\,Z_2(-\pi/2)\,U_{\mathrm{CPhase}}(t_E/2)\,X_{\mathrm{target}}\,U_{\mathrm{CPhase}}(t_E/2) .
$$

$\pi$ 脉冲反转低频电荷涨落在两段演化中累积的相位，等效在演化时间内插入了 [[qubit-control/dynamical-decoupling|动力学解耦]]。文献 21 §3.4.5（PDF p. 57–58）以此制备四个 Bell 态、移除读出误差后平均保真度 $91\%$、纠缠度 $0.85$；文献 22 §5.5（PDF p. 90–91）则在 Si-MOS 双量子点中以非绝热 DCZ 方案测得 CZ/2 门保真度 $92.2\%$、Bell 态保真度 $84.09\%$，并强调 bias-tee 内 RC 滤波引入的高频波形畸变必须事先校准。

<!-- FIGURE: DCZ 门的脉冲序列：J 演化时间 t_E/2 夹一个目标比特 π 脉冲，配合两侧 Z(-π/2) 旋转；与 CZ 的对比示意 -->

## CROT/CNOT 族：$J$ 常开 + 共振条件驱动

当 $J$ 始终保持有限而非门脉冲式开关时，系统本征态略偏离直积态。每个比特在不同控制比特态下有四个条件拉莫尔频率（文献 22 §5.3，PDF p. 72）：

$$
f_1^\downarrow = f_{Q1},\; f_1^\uparrow = f_{Q1} - J, \quad
f_2^\downarrow = f_{Q2},\; f_2^\uparrow = f_{Q2} - J .
$$

在 $f_i^\uparrow$ 上驱动目标比特，则只有当控制比特为 $|\!\uparrow\rangle$ 时目标比特才会翻转——这就是受控旋转（CROT）。文献 22 在 Si-MOS 双量子点中以 $\Delta E_Z = 55.4\,\mathrm{MHz}$、$J = 4.8(4)\,\mathrm{MHz}$ 实现 $J$ 常开下的 CROT，Rabi 振荡频率 $1.25\,\mathrm{MHz}$、$\pi$ 脉冲 $400\,\mathrm{ns}$（PDF p. 74–76）。

把海森堡哈密顿量转到本征基，并施加沿 $x$ 方向幅度 $A_R$、相位 $\phi$ 的微波驱动，旋转坐标系下的有效哈密顿量在 $\lambda$、$\kappa$ 两个子空间内分块对角化（文献 22 式 (5.11)–(5.12)，PDF p. 84）：

$$
H_R = \frac{J}{2}\lambda_I + \frac{J}{2}\lambda_Z + \frac{A_R}{2}\cos\theta\cos\phi\,\lambda_X + \frac{A_R}{2}\cos\theta\sin\phi\,\lambda_Y + \frac{A_R}{2}\cos\theta\cos\phi\,\kappa_X + \frac{A_R}{2}\cos\theta\sin\phi\,\kappa_Y,
$$

演化算符可因式分解为三项

$$
U_R(t) = \exp\!\left[-\frac{i}{2}\sqrt{J^2+\Delta E_Z^2}\,t\,\,ZI\right]\cdot\exp\!\left[-\frac{i}{2}\Omega_\lambda t\,\mathbf{n}_\lambda\!\cdot\!\boldsymbol\lambda\right]\cdot\exp\!\left[-\frac{i}{2}\Omega_\kappa t\,\mathbf{n}_\kappa\!\cdot\!\boldsymbol\kappa\right],
$$

其中 $\Omega_\lambda = \sqrt{A_R^2\cos^2\theta+J^2}$、$\Omega_\kappa = A_R\cos\theta$、$\theta = \arctan[2\Delta/(\sqrt{\varepsilon^2+4\Delta^2}-\varepsilon)]$。要实现真正的 CNOT 必须同时满足三个条件（文献 22 式 (5.12) 后文字，PDF p. 84）：

1. 微波相位 $\phi=0$；
2. $\lambda$ 子空间旋转 $\Omega_\lambda t = 2m\pi$；
3. $\kappa$ 子空间旋转 $\Omega_\kappa t = (2n-1)\pi$。

由于两个子空间的旋转速率不同，要让控制比特相位回到原位的同时让目标比特完成 $\pi$ 翻转，需要在 $\kappa$ 子空间最优时间 $15\pi/J$ 之外再补一段 $t_{\mathrm{extra}}^{\mathrm{CNOT}} = 2(2-\sqrt{15}\,\pi/2)/J$，总时长 $t_{\mathrm{tot}} = 4\pi/J$，比单独满足 $\kappa$ 子空间长 $3\%$（文献 22 §5.4.3，PDF p. 86）。

### 虚拟相位补偿

$CROT$ 与 $ZCROT$ 之间存在 $180^\circ$ 相位差，对控制比特施加虚拟 $Z$ 即可在两个门之间切换。剩下 $\lambda$ 子空间的累积相位来自 $J$ 常开下微波对相邻频率的非共振驱动，需要按门逐个补偿。文献 22 §5.4.3（PDF p. 86）给出校准序列：从四种校准序列的 Ramsey 拟合得到相位偏移

$$
(\theta_{\mathrm{CNOT12}}, \theta_{\mathrm{CNOT21}}, \theta_{\mathrm{ZCNOT12}}, \theta_{\mathrm{ZCNOT21}}) = (0.166\pi, 0.207\pi, -0.139\pi, -0.129\pi),
$$

由此反推非共振哈密顿相位误差

$$
(\phi_1^\uparrow, \phi_2^\uparrow, \phi_1^\downarrow, \phi_2^\downarrow) = (-0.0517\pi, -0.0415\pi, 0.0198\pi, 0.0248\pi) .
$$

完成校准后，CROT 与 ZCROT 可以合成 CNOT 与 ZCNOT，整个两比特 Clifford 群都建立在同一时长（$\sim 400\,\mathrm{ns}$）的 CROT 单元之上。这种"虚拟相位门"路线在 Si/SiGe 与 Si-MOS 体系中分别由 Noiri 等（文献 22 引文 [94]）与 Wister Huang （文献 22 引文 [114]）首次实现，单比特门通过两比特门的组合而非独立微波通道实现。

## 调控方式：失谐 vs 势垒

实现交换型两比特门通常有两条路径：

- **失谐脉冲**（pulse on $V_{P_1}-V_{P_2}$）：在远离失谐零点的位置工作，门操作波形简单、只需在柱塞电极上加高速脉冲；但 $J$ 对失谐的导数 $|\partial J/\partial \varepsilon|$ 较大，电荷噪声通过 $\delta\varepsilon$ 直接调制比特频率，退相干严重（文献 21 §1.3.4，PDF p. 20；文献 22 §5.1，PDF p. 69）。
- **势垒脉冲**（pulse on $V_B$）：在对称操作点 $\varepsilon=0$ 处通过势垒栅调节 $t$，$J$ 对 $\varepsilon$ 一阶不敏感，可有效抑制电荷噪声；但需要额外的高频势垒栅控线（文献 21 §3.4.2，PDF p. 51）。

硅基体系下保真度超过 $99\%$ 的 CZ 门几乎都采用势垒脉冲，文献 21 在自然硅中通过正反电压脉冲（B1/B2 等大反向）把 $J$ 从几百 $\mathrm{kHz}$ 推到 $>20\,\mathrm{MHz}$，对称操作点处 $J \approx 6.25\,\mathrm{MHz}$、演化 $80\,\mathrm{ns}$（PDF p. 53）。势垒脉冲的代价是势垒栅不可避免地牵动失谐，需要 [[scaling-automation/virtual-gates|虚拟栅极]]技术做动态补偿。

文献 22 §5.1（PDF p. 69）指出 Si-MOS 样品的中间势垒栅 MB 没有高频控制线，势垒脉冲无法实施，必须采用 $J$ 常开 + 共振条件驱动的 CROT 路线；这是"样品条件决定门策略"的典型案例。

## 参数与量级

| 量 | 典型值 | 实验/来源 |
| --- | --- | --- |
| 交换能 $J$（GaAs，交换振荡） | 几十 $\mathrm{MHz}$ 至 $\mathrm{GHz}$ 量级 | 文献 6，PDF p. 28 |
| 交换能 $J$（Si/SiGe，CZ 工作点） | $6.25\,\mathrm{MHz}$（演化 $80\,\mathrm{ns}$） | 文献 21，PDF p. 53 |
| 交换能 $J$（Si-MOS，$J$ 常开） | $4.8(4)\,\mathrm{MHz}$（$\varepsilon=0$） | 文献 22，PDF p. 74 |
| 交换能 $J$（Si-MOS，$J$ 关闭残余） | $\sim 150\,\mathrm{kHz}$ | 文献 21，PDF p. 52 |
| $J$ 调节范围（势垒脉冲） | 几百 $\mathrm{kHz}$ 到 $\geq 20\,\mathrm{MHz}$ | 文献 21，PDF p. 52 |
| $\Delta E_Z$（Si/SiGe 一维四点） | $\approx 42\,\mathrm{MHz}$ | 文献 21，PDF p. 50 |
| $\Delta E_Z$（Si-MOS 双点） | $55.4\,\mathrm{MHz}$ | 文献 22，PDF p. 72 |
| $J/\Delta E_Z$（$J$ 常开工作区） | $\approx 0.087$ | 文献 22，PDF p. 72 |
| CZ 演化时间（Si/SiGe，势垒脉冲） | $80\,\mathrm{ns}$ | 文献 21，PDF p. 53 |
| DCZ CZ/2 演化时间（Si-MOS） | $92.2\%$ 保真度对应单段 | 文献 22，PDF p. 90 |
| CROT 拉比频率（Si-MOS，$J$ 常开） | $1.25\,\mathrm{MHz}$（$\pi$ 脉冲 $400\,\mathrm{ns}$） | 文献 22，PDF p. 76 |
| CNOT 总时长（$J$ 常开，Si-MOS） | $t_\text{CNOT}=4\pi/J\approx 833\,\mathrm{ns}$ | 文献 22，PDF p. 86 |
| $\sqrt{\mathrm{SWAP}}$ 时长（Hubbard 极限） | $J t/\hbar = \pi/2$；$J=4t^2/U$ | 文献 21，PDF p. 20 |
| iSWAP 时长（超导 transmon 参考） | $\sim 15\,\mathrm{ns}$（30 个 AWG 点拟合） | 文献 9，PDF p. 64 |
| CZ 门 RB 保真度（自然 Si/SiGe） | $90.96\pm 7.48\%$ | 文献 21，PDF p. 56 |
| DCZ Bell 态保真度（自然 Si/SiGe） | 平均 $91\%$（移除读出误差） | 文献 21，PDF p. 58 |
| DCZ Bell 态保真度（Si-MOS） | $84.09\%$ | 文献 22，PDF p. 90 |
| 单比特门保真度（自然 Si/SiGe） | $X,Y$ 门 $>99\%$（$83\,\mathrm{ns}$） | 文献 21，PDF p. 50 |
| $\lambda$ 子空间相位补偿占比 | $\approx 3\%$ | 文献 22，PDF p. 86 |
| 微磁体梯度（典型 EDSR） | $\partial B_x/\partial z$ 达 $0.1\,\mathrm{mT/nm}$ 量级 | 文献 21，PDF p. 18 |

## 实验特征与测量

**交换振荡**。把两个电子初始化到 $|↓↓\rangle$，沿失谐轴施加方波脉冲把系统暂时拉入 $(0,2)$ 区附近，再返回 $(1,1)$ 测量 $Q_1$ 的自旋上态概率。振荡频率恰好为 $J/2$（在控制比特 $|\!\downarrow\rangle$ 子空间内），这是 $J$ 最直接的表征方式。文献 6 §2.2.3（PDF p. 28）在 GaAs 双量子点 $(1,1)$–$(2,0)$ 区域附近观测到交换振荡（图 2.9），并将其作为 $S$–$T_0$ 比特的标准读出与 $z$ 旋转工具。

**Hahn echo 标定**。控制比特 $|\!\downarrow\rangle$ 子空间内的交换振荡额外积累两组比特的频移（包括量子点位置移动导致的微磁体梯度漂移），采用 Hahn echo 波形 $\pi/2$–$J(t_E)$–$\pi$–$J(t_E)$–$\pi/2$ 即可消除这一频移，使振荡频率严格等于 $J/2$。文献 21 §3.4.2（PDF p. 51–52）以此把 $J$ 的标定精度推到 $150\,\mathrm{kHz}$ 量级。

**四个条件频率的能谱测量**。$J$ 常开方案的核心是逐一测量 $f_1^\downarrow, f_1^\uparrow, f_2^\downarrow, f_2^\uparrow$ 四个条件频率。固定控制比特初态，对目标比特扫描拉莫尔频率得到两条共振线（取决于控制比特态）；交换两条线的角色重复一次即可画出四个频率，线间距直接给出 $\Delta E_Z$ 与 $J$（文献 22 §5.3，PDF p. 72）。

**CROT 与 ZCROT 校准**。CROT 使目标比特 $\pi$ 翻转、控制比特绕 $z$ 转 $\pi$，因此与 ZCROT 之间存在 $180^\circ$ 相位差，对控制比特施加虚拟 $Z$ 即可切换。这是 $J$ 常开方案能合成全部两比特 Clifford 群的关键。实验中需要通过调节 AWG 幅度（而非微波源功率）使 $f_1^\downarrow$ 与 $f_2^\downarrow$ 同步拉比，并把另外两个 ZCROT 的幅度按比例校准。校准比例不是常量，工作点漂移或电压整体偏移时需要重新标定（文献 22 §5.4.2，PDF p. 76）。

**对称工作点的精标**。$J(\varepsilon) = 2t^2 U/(U^2-\varepsilon^2)$ 在 $\varepsilon=0$ 处对失谐一阶不敏感。文献 21 §3.4.2（PDF p. 53）以 Hahn echo + 傅里叶变换测出振荡频率极小值点即对称操作点的位置；实际操作中由于正反电压脉冲会引起两侧电化学势的非对称偏移，对称点常常偏离失谐零点，需要虚拟栅极技术做长期反馈。

**量子态层析与随机基准**。CZ 门保真度通常用两比特随机基准（两比特 RB）测出：随机选取两比特 Clifford 门（每个 Clifford 门由 CZ 与单比特 $X$、$Y$、$Z$ 旋转分解）作为序列、最后用一个逆门把比特拉回初态，测量 $|↓↓\rangle$ 的存活概率随序列长度 $m$ 的衰减。文献 21 §3.4.4（PDF p. 56–57）用此方法测得 $F_\text{CZ} = 90.96 \pm 7.48\%$。Bell 态保真度则用量子态层析（QST）测出，文献 21 §3.4.5（PDF p. 58）制备四个 Bell 态、移除读出误差后平均保真度 $91\%$、纠缠度 $0.85$。

## 与比特编码的关系

- **[[qubit-control/single-spin-qubit|单自旋比特]]**：两比特系统由海森堡 $H = J\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + g\mu_B(B_1\!\cdot\!\mathbf{S}_1+B_2\!\cdot\!\mathbf{S}_2)$ 描述，$J$ 出现在控制比特与目标比特之间。CPhase、CROT、共振 CNOT 都基于此 $J$（文献 21 §1.3.4，PDF p. 19；文献 22 §5.4，PDF p. 77–78）。
- **[[qubit-control/singlet-triplet-qubit|单态–三重态比特]]**：$J(\varepsilon)$ 直接给出 $z$ 轴旋转频率，$x$ 轴来自两点磁场梯度（自然核场或 [[materials-devices/micromagnet|微磁体]]）。文献 6 第 2 章把 $J(\varepsilon) = (\varepsilon+\sqrt{\varepsilon^2+4\Delta^2})/2$ 及其大失谐渐近 $J\approx\Delta^2/|\varepsilon|$ 作为 $S$–$T_0$ 编码的源头公式（PDF p. 30）。
- **[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]**：$J_l$ 与 $J_r$ 同时打开，比特频率 $\omega_\text{RX}\approx 0.52\,t$（详见词条）；交换型两比特门的 $\sqrt{\mathrm{SWAP}}$/SWAP 路线在 RX 三点中可直接构造三比特受控相位与受控 SWAP。
- **[[qubit-control/hybrid-qubit|杂化量子比特]]**：3–5 电子、电子–空穴混合，把单占据与双占据电荷态空间扩大，交换项被推广为更复杂的矩阵，但仍以 $J\sim t^2/U$ 的微扰结构为骨架。
- **[[qubit-control/charge-qubit|电荷量子比特]]**：电荷比特依赖点间隧穿产生的失谐依赖 $J$ 实现条件相位，门时间短但退相干快；自旋比特把同一 $J$ 映射到自旋态能量差上，门时间较长但相干性好得多。

读出也常借助交换相互作用：[[qubit-control/lzsm-interference|LZSM 干涉]]、自旋漏斗与[[readout-measurement/single-shot-readout|单发读出]]均通过调制 $J(\varepsilon)$ 让系统在不同自旋态下走出不同轨迹，从而把自旋信息转换为电荷信号。

## 噪声与相干

交换门的保真度受三组噪声支配：

1. **电荷噪声**（$1/f$）：直接以 $|\partial J/\partial\varepsilon|$ 为比例调制比特频率。势垒脉冲在对称工作点利用一阶不敏感抑制低频部分；DCZ/解耦序列进一步在时间域内平均。Si/SiGe 体系中，电荷噪声通过微磁体的杂散梯度场与自旋耦合，是 $T_2$ 被压在数微秒的主要原因（文献 21 §3.1，PDF p. 39）。
2. **核自旋噪声**：GaAs 中约 $10^6$ 个核自旋的奥弗豪泽场造成 $T_2^*\approx 10\,\mathrm{ns}$；改用 $^{28}\mathrm{Si}$ 同位素纯化样品可把 $S$–$T_0$ 比特的 $T_2^*$ 延长到约 $360\,\mathrm{ns}$，并经动力学解耦把 $T_2$ 推到 $0.87\,\mathrm{ms}$（文献 6 p. 31 引文 [40]）。
3. **隧穿耦合涨落**：势垒栅的电压漂移改变 $t$，进而按 $J\sim t^2$ 调制交换能。在大失谐工作点上，电荷噪声通过 $t$ 的二阶依赖（$\partial^2 J/\partial \varepsilon^2$）仍会留下残余退相干；通过反馈控制势垒栅电压把 $J$ 锁定到目标值可进一步压低低频漂移。

速度与相干之间的折中是所有交换门工程的核心：增大 $J$ 加快门操作同时必然加大 $|\partial J/\partial q|$，因此提升保真度的根本途径是降低材料/器件层面的噪声（异质结界面、微磁体优化、栅氧层厚度），而不是简单地"开得更大"。

## 与其他概念的关系

- 与[[qubit-control/exchange-interaction|交换相互作用]]：$J$ 是交换型两比特门的耦合源——CPHASE/CZ 把 $J$ 用作条件相位源，CROT 把 $J$ 用作条件频移源，$\sqrt{\mathrm{SWAP}}$/SWAP 直接以 $J$ 为演化生成元；Hubbard 极限下 $J=4t^2/U$ 是双比特门速率的标尺。
- 与[[qubit-control/cnot-gate|CNOT 门]]：CNOT 是交换型两比特门的通用目标（CPHASE + 两路 $Z(-\pi/2)$、CROT + 虚拟相位补偿、$\sqrt{\mathrm{SWAP}}$ + 两路 $X(\pi/2)$）；三族门策略都把 CNOT 视为两比特 Clifford 群的生成元。
- 与[[qubit-control/toffoli-gate|Toffoli 门]]：Toffoli 是 CNOT 的三比特推广，可由 CNOT + 单比特门串联构造，也可在三比特条件频移的 $J$ 常开方案中直接静态演示（文献 5，PDF pp. 99–107；文献 22 §5.4，PDF p. 73）。
- 与[[qubit-control/dynamical-decoupling|动力学解耦]]：用于 CPhase 演化中抑制低频噪声，DCZ/Hahn echo 是其直接产物（文献 21 §3.4.5，PDF p. 57；文献 22 §5.5，PDF p. 90）。
- 与[[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/silicon-mos|Si-MOS]]/[[materials-devices/gaas-algaas|GaAs/AlGaAs]]/[[materials-devices/silicon-sige|Silicon–Germanium]]：前者决定门时长上限，后者决定 $T_2^*$、$J$ 调节能力与典型工作点。
- 与[[scaling-automation/virtual-gates|虚拟栅极]]：对称工作点的精确标定与动态补偿离不开虚拟栅极，它是把"用势垒调 $J$、不污染失谐"工程化的核心工具。
- 与[[circuit-qed/jaynes-cummings-model|JC 模型]]与[[qubit-control/resonant-exchange-qubit|共振交换比特]]：常开 $J$ 的 RX 比特天然带电偶极矩，与微波谐振腔的耦合强度 $g_\text{RX}$ 由 $J$ 失谐依赖调制，JC 阶梯与色散读出可原样套用。
- 与[[qubit-control/geometric-quantum-gate|几何量子门]]：当旋转误差（功率失配、过冲、上升沿）成为主要错误源时，可借助几何相位或分段复合脉冲把残留误差压到二阶。

<!-- FIGURE: 交换型两比特门相关概念关系图：以 J(ε,t,U) 为中心节点，向外连接三大族（√SWAP/SWAP、CPHASE/CZ、CROT/CNOT）、两种调控方式（失谐脉冲、势垒脉冲）、DCZ/解耦、虚拟栅极/电荷噪声等子模块 -->

## 延伸阅读

- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots", *Physical Review A* 57, 120 (1998). [DOI: 10.1103/PhysRevA.57.120]
- J. R. Petta, A. C. Johnson, J. M. Taylor, E. A. Laird, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard, "Coherent Manipulation of Coupled Electron Spins in Semiconductor Quantum Dots", *Science* 309, 2180 (2005). [DOI: 10.1126/science.1116955]
- R. Hanson, L. P. Kouwenhoven, J. R. Petta, S. Tarucha, and L. M. K. Vandersypen, "Spins in few-electron quantum dots", *Reviews of Modern Physics* 79, 1217 (2007). [DOI: 10.1103/RevModPhys.79.1217]
- D. P. DiVincenzo, D. Bacon, J. Kempe, G. Burkard, and K. B. Whaley, "Universal quantum computation with the exchange interaction", *Nature* 408, 339 (2000). [DOI: 10.1038/35042541]
- G. Burkard, T. D. Ladd, A. Pan, J. M. Petta, M. P. Wardrop, and A. C. Doherty, "Semiconductor spin qubits", *Reviews of Modern Physics* 95, 025003 (2023). [DOI: 10.1103/RevModPhys.95.025003]

## 论文依据

- [[sources/ref-21|文献 21]]，PDF pp. 19–20：§1.3.4 两比特门综述——典型两比特门包括 CNOT、√SWAP、CZ；海森堡模型哈密顿量（式 1.17）、直积基下的四态矩阵（式 1.18）；Hubbard 极限下 $J = 2t^2/(U-\varepsilon-\Delta E_Z)+2t^2/(U-\varepsilon+\Delta E_Z)$（式 1.19）及其简化形式 $J=4t^2/U$（式 1.20）；$J\gg\Delta E_Z$ 构造 √SWAP、$J\ll\Delta E_Z$ 构造 CPhase/CZ 的两种工作模式。
- [[sources/ref-21|文献 21]]，PDF p. 20：CPhase 时间演化算符（式 1.21）与 CZ 门 $U_\text{CZ}=Z_1(-\pi/2)Z_2(-\pi/2)U_\text{CPhase}(\pi\hbar/J)$（式 1.22）；通过控制 $J$ 的开关过程即可实现两比特门操作。
- [[sources/ref-21|文献 21]]，PDF p. 21：§1.3.4 末段——对称操作（失谐零点）通过改变点间势垒高度实现 $J$ 的全电控制、对电荷噪声一阶不敏感，目前已实现保真度超过 $99\%$ 的 CZ 门、最短门操作时间 $40\,\mathrm{ns}$。
- [[sources/ref-21|文献 21]]，PDF pp. 50–51：§3.4.1 CZ 门的实现过程及挑战——双电子自旋系统可用海森堡模型描述，$\Delta E_Z\approx 42\,\mathrm{MHz}$、$J\approx 6.25\,\mathrm{MHz}$，因此原生两比特门采用 CPhase 门。
- [[sources/ref-21|文献 21]]，PDF p. 51：CPhase 时间演化算符 $U_\text{CPhase}(t) = \operatorname{diag}(1, e^{iJt/2\hbar}, e^{iJt/2\hbar}, 1)$（式 3.10）与 CZ 门 $U_\text{CZ}=Z_1(-\pi/2)Z_2(-\pi/2)U_\text{CPhase}(\pi\hbar/J)$（式 3.11）。
- [[sources/ref-21|文献 21]]，PDF pp. 51–52：§3.4.2 交换相互作用的表征及校准——Hahn echo 型波形序列（图 3.9a）测得的交换振荡频率恰为 $J/2$，最小可标定到 $150\,\mathrm{kHz}$ 左右；正反电压脉冲（B1/B2 等大反向）增大波函数重叠，$J$ 调节范围从几百 $\mathrm{kHz}$ 到 $\geq 20\,\mathrm{MHz}$。
- [[sources/ref-21|文献 21]]，PDF p. 53：$J(\varepsilon) = 2t^2U/(U^2-\varepsilon^2)$（式 3.12）在 $\varepsilon=0$ 处对失谐一阶不敏感；对称操作点处 $J \approx 6.25\,\mathrm{MHz}$、演化时间 $80\,\mathrm{ns}$。
- [[sources/ref-21|文献 21]]，PDF pp. 54–55：§3.4.3 CZ 门的实现——控制比特分别制备到 $|\!\downarrow\rangle$、$|\!\uparrow\rangle$ 时目标比特的振荡曲线完全反相（图 3.12），两种情况下目标比特演化速率均为 $J/2$、方向相反（图 3.13）；CZ 门所需的单比特相位在 $\pm 90^\circ$ 附近。
- [[sources/ref-21|文献 21]]，PDF pp. 56–57：§3.4.4 两比特门随机基准测试——$F_\text{CZ} = 90.96 \pm 7.48\%$（图 3.14）；序列保真度在 10 个 Clifford 门左右即完全衰减，限制因素为参数 $B$ 的较大不确定度。
- [[sources/ref-21|文献 21]]，PDF pp. 57–58：§3.4.5 两比特纠缠态的高保真度制备——DCZ 门用 $\pi$ 脉冲把 $J$ 演化分成两段，抑制低频噪声；以 DCZ 门制备四个 Bell 态、移除读出误差后保真度分别为 $87\%$、$92\%$、$93\%$、$92\%$（图 3.16）。
- [[sources/ref-22|文献 22]]，PDF pp. 69–71：§5.1–§5.2 Si-MOS 两比特门研究背景——通过失谐调节 $J$ 时电荷噪声强烈，早期 GaAs 两比特门保真度不高；势垒脉冲在对称操作点（sweet spot）具有二阶不敏感性，但本样品 MB 电极没有高频线，必须采用 $J$ 常开方案。
- [[sources/ref-22|文献 22]]，PDF p. 72：§5.3 两比特能谱标定——$\Delta E_Z = 55.4\,\mathrm{MHz}$、$J = 4.7\,\mathrm{MHz}$ 满足 $J\ll\Delta E_Z$ 条件时本征态近似为自旋直积态，适合实现 CZ 门和 CNOT 门；$\Delta E_Z \ll J$ 时反平行态变为 S 和 T 态，适合 SWAP 门操作。
- [[sources/ref-22|文献 22]]，PDF p. 73：§5.4 $J$ 常开方案——CNOT 门主要有两种方式，开关 $J$ 加微波（更复杂但更通用，如 Toffoli 门）与 $J$ 常开 + 共振条件驱动（澳大利亚 Wister Huang 与日本 Akito Noiri 分别在 Si-MOS 与 SiGe 实现）；本样品条件适合后者。
- [[sources/ref-22|文献 22]]，PDF p. 74：§5.4.1 交换作用常开下的 CROT 门——固定在 $\varepsilon=0$ 处测得 $J=4.8(4)\,\mathrm{MHz}$，$J$ 随失谐呈指数上升趋势；控制比特 $|\!\downarrow\rangle$、$|\!\uparrow\rangle$ 下受控比特共振频率的偏移即为 $J$。
- [[sources/ref-22|文献 22]]，PDF p. 76：CROT 拉比振荡频率 $1.25\,\mathrm{MHz}$，$t_{\pi\text{CROT}} = 400\,\mathrm{ns}$ 内实现 CROT 门；控制比特读出为持续拉比振荡，受控目标比特的振荡则受控制比特状态调制。
- [[sources/ref-22|文献 22]]，PDF p. 79：式 (5.1)–(5.3)——两比特哈密顿量 $H(t) = J(\mathbf{S}_L\!\cdot\!\mathbf{S}_R - 1/4) + \mathbf{S}_L\!\cdot\!\mathbf{B}_L + \mathbf{S}_R\!\cdot\!\mathbf{B}_R$、直积基下的矩阵 $H_0$、本征值 $\epsilon(|\!\uparrow\!\downarrow\rangle^\sim) = (-J + \sqrt{J^2+\Delta E_Z^2})/2$ 与 $\epsilon(|\!\downarrow\uparrow\rangle^\sim) = (-J - \sqrt{J^2+\Delta E_Z^2})/2$。
- [[sources/ref-22|文献 22]]，PDF p. 84：§5.4.3 $H_R$ 在 $\lambda$、$\kappa$ 子空间内的分块对角化（式 5.11）与演化算符的三项分解（式 5.12）；CNOT 实现的三个条件（$\phi=0$、$\Omega_\lambda t=2m\pi$、$\Omega_\kappa t=(2n-1)\pi$）。
- [[sources/ref-22|文献 22]]，PDF p. 86：$\lambda$ 子空间相位补偿——$t_{\text{extra}}^{\text{CNOT}} = 2(2-\sqrt{15}\,\pi/2)/J$，占总微波时长 $3\%$；两种补偿方案（开关 $J$ 时序法与 $J$ 常开非共振微波法，图 5.12）。
- [[sources/ref-22|文献 22]]，PDF p. 86：四种校准序列与拟合得到的相位偏移 $(\theta_\text{CNOT12}, \theta_\text{CNOT21}, \theta_\text{ZCNOT12}, \theta_\text{ZCNOT21}) = (0.166\pi, 0.207\pi, -0.139\pi, -0.129\pi)$，反推非共振哈密顿相位误差 $(\phi_1^\uparrow, \phi_2^\uparrow, \phi_1^\downarrow, \phi_2^\downarrow) = (-0.0517\pi, -0.0415\pi, 0.0198\pi, 0.0248\pi)$。
- [[sources/ref-22|文献 22]]，PDF p. 90：§5.5 Si-MOS 中的非绝热 DCZ 门——CZ 门通过固定时间 $t$ 的失谐脉冲实现，$\Delta E_Z \gg J$ 时系统本征态为双自旋直积态，相互作用可用伊辛哈密顿量近似；U(t)（式 5.20）由 $Z_L(-Kt/2\hbar)Z_R(-Kt/2\hbar)$ 与 $\operatorname{diag}(1,1,1,e^{-iJt/\hbar})$ 构成。
- [[sources/ref-22|文献 22]]，PDF p. 91：DCZ 门随机基准测试——保真度 $83.4\%$、对应 CZ/2 门保真度 $92.2\%$、Bell 态保真度 $84.09\%$。
- [[sources/ref-06|文献 6]]，PDF p. 28：§2.2.3 交换振荡——GaAs 双量子点 $(1,1)$–$(2,0)$ 区域附近测到的交换振荡（图 2.9a），交换振荡的频率为 $J/h$，是 $S$–$T_0$ 比特的直接读出与 $z$ 旋转工具。
- [[sources/ref-06|文献 6]]，PDF p. 30：$S(1,1)$–$S(0,2)$ 两能级哈密顿量（式 2.9）与交换能 $J(\varepsilon) = (\varepsilon + \sqrt{\varepsilon^2+4\Delta^2})/2$（式 2.10），作为交换型两比特门的源头公式；大失谐渐近 $J\approx\Delta^2/|\varepsilon|$（式 2.11）。
- [[sources/ref-06|文献 6]]，PDF p. 53：§3.6 交换振荡——测量交换振荡的失谐脉冲（图 3.5a）、布洛赫球演化（b）、失谐–时间二维图（c）以及 $J(\varepsilon)$ 解析函数（d）的拟合形式。
- [[sources/ref-24|文献 24]]，PDF p. 17：硅基体系下通过控制交换耦合开启时间实现 √SWAP 门（$J t/\hbar = \pi/2$）或完整 SWAP 门（$J t/\hbar = \pi$）；√SWAP 门与单比特基带旋转组合即在理论上构造 CNOT；SOT 辅助的单比特门与交换型 √SWAP 组合是长程 SOT–微波–交换三层混合控制方案的核心两比特单元。
- [[sources/ref-24|文献 24]]，PDF p. 17：cavity-mediated iSWAP 振荡（Dijkema et al., 2021）作为远程交换型两比特门方案的前期工作。
- [[sources/ref-09|文献 9]]，PDF p. 64：超导 transmon 量子比特中 $\sim 15\,\mathrm{ns}$ 的 iSWAP 门需要 2 GS/s AWG 的 $\geq 30$ 个采样点拟合以保证波形分辨率；$\sqrt{\text{iSWAP}}$ 对应 $gt=\pi/2$，iSWAP 对应 $gt=\pi$（式 2.5 与相关说明）。
