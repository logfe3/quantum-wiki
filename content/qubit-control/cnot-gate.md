---
title: CNOT 门
description: 当控制比特为 1 时翻转目标比特、为通用量子计算提供纠缠能力的两比特门。
aliases:
 - 受控非门
 - Controlled-NOT
 - 受控非
 - controlled-not gate
tags:
 - 量子比特操控
 - 两比特门
date: 2026-09-08
---

<div class="entry-lead">CNOT 是条件逻辑：目标比特是否翻转取决于控制比特状态。与任意单比特旋转组合后，它构成通用量子门集；半导体量子点的两类典型实现分别基于电荷比特的强电容耦合（条件频移抑制）与自旋比特的常开交换（共振条件频率 + 虚拟相位补偿）。</div>

## 定义与逻辑结构

CNOT（controlled-NOT，受控非门）作用在两个比特上：控制比特 $c$ 与目标比特 $t$。当 $c=|1\rangle$ 时目标比特翻转，否则保持不变：

$$
|c\,t\rangle\;\longrightarrow\;|c\;t\oplus c\rangle .
$$

写成计算基 $\{|00\rangle,|01\rangle,|10\rangle,|11\rangle\}$ 上的 $4\times4$ 矩阵，它只在中间两个基矢之间交换：

$$
U_{\mathrm{CNOT}}=
\begin{pmatrix}
1&0&0&0\\
0&1&0&0\\
0&0&0&1\\
0&0&1&0
\end{pmatrix}.
$$

CNOT 自身不是通用门（只靠它无法生成任意酉变换），但与任意单比特旋转组合即构成通用量子门集：$U_{\mathrm{CNOT}}$ 加上 Bloch 球上绕任意轴的旋转可以构造任意两比特酉变换（由 Solovay–Kitaev 定理，任意单比特旋转可用有限长度的 Hadamard + $T$ 序列逼近）。在硅基自旋比特体系中常用的另一组等价分解是 CZ（控制 $Z$）加两路单比特 $\pi/2$；后者源自受控相位累积 $U_{\mathrm{CPhase}}(\pi\hbar/J)=\mathrm{diag}(1,1,1,-1)$，再以单比特 $Z(-\pi/2)$ 改写矩阵形式即为 CZ，进而由 CZ 与单比特门合成 CNOT。

<!-- FIGURE: 计算基 |00⟩,|01⟩,|10⟩,|11⟩ 下 CNOT 矩阵的列变换图像：当控制比特为 |1⟩ 时目标比特翻转 -->

## 半导体中的两类基本机理

在量子点体系中，"控制比特是否决定目标比特翻转"通常由两条不同的物理机理承担：

1. **条件频移抑制**（capacitive-coupling CNOT）：两个[[qubit-control/charge-qubit|电荷量子比特]]被强电容耦合，控制比特处于 $|1\rangle$ 时通过库仑相互作用把目标比特的失谐平衡点整体平移一个耦合能 $J$。事先把目标比特的脉冲高度调到"控制比特 $|0\rangle$ 时恰好把目标送到平衡点"——控制比特翻转到 $|1\rangle$ 后同一脉冲不再到达平衡点，拉莫振荡被抑制，目标比特保持不变。条件频移的强度 $J$ 直接决定"关"态抑制的彻底程度。
2. **常开交换 + 共振条件驱动**（resonantly driven CNOT）：两个[[qubit-control/single-spin-qubit|单自旋比特]]的[[qubit-control/exchange-interaction|交换相互作用]] $J$ 始终保持有限（$J\ll\Delta E_Z$，$\Delta E_Z$ 为两点塞曼能差）。由于反平行态能级下移 $J/2$，一个比特的拉莫尔频率依赖于另一个比特的状态，形成四个条件频率 $f_1^\downarrow$、$f_1^\uparrow$、$f_2^\downarrow$、$f_2^\uparrow$。在 $f_i^\uparrow$ 上驱动目标比特，则只有当控制比特为 $|\uparrow\rangle$ 时才发生拉比翻转——这就是受控旋转（CROT）门。

两条路线在 与 的论文中分别做了完整演示：前者用 GaAs/AlGaAs 强电容耦合双电荷比特实现了脉冲振幅控制的 CNOT，并测得 68% 的真值表保真度；后者在 Si-MOS 双量子点中把交换相互作用保持常开，用微波驱动条件频率实现 CROT，经相位补偿后合成 CNOT，并经门集层析（GST）测得约 64% 的保真度。

<!-- FIGURE: 两条 CNOT 机理对比：左为电容耦合条件下拉莫振荡抑制；右为 J 常开时四个条件频率 f_i^σ 与 CROT 门构造 -->

## 理论模型（一）：GaAs 强电容耦合双电荷比特

### 双比特哈密顿量

把每个[[qubit-control/charge-qubit|电荷量子比特]]视为一个[[fundamentals/double-quantum-dot|双量子点]]，单电子编码为 $|L\rangle$、$R\rangle$；比特自身哈密顿量为

$$
H_q=\frac{\varepsilon_q\,\sigma_z+\Delta_q\,\sigma_x}{2}
$$

其中失谐 $\varepsilon_q$ 控制左右能级差，$\Delta_q=2t_c$ 为点内隧穿耦合。上下两组双量子点通过垂直方向的两个水平电极 $H_1$、$H_2$ 之间的几何间隙发生电容（偶极–偶极）耦合。设上比特能级差 $\varepsilon_1$、下比特能级差 $\varepsilon_2$，两组量子点间的电容耦合能为 $J$，则四能级哈密顿量为

$$
H_{2q}=\sum_{i=1}^{2}\frac{1}{2}\bigl(\varepsilon_i\sigma_z^{(i)}+\Delta_i\sigma_x^{(i)}\bigr)
+\frac{J}{4}\bigl(I-\sigma_z^{(1)}\bigr)\otimes\bigl(I-\sigma_z^{(2)}\bigr)
$$

其中耦合项 $\propto (I-\sigma_z^{(1)})(I-\sigma_z^{(2)})/4$ 来自 $|R\rangle_R\rangle_D$ 组合下的电容能修正（$\sigma_z$ 取 $+1$ 对应 $|L\rangle$）。在直积基 $\{|\!LR\rangle,|\!RR\rangle,|\!LL\rangle,|\!RL\rangle\}$ 下改写为矩阵：

$$
H_{2q}=\frac{1}{2}
\begin{pmatrix}
\varepsilon_1+\varepsilon_2+J/2 & \Delta_1 & \Delta_2 & 0\\
\Delta_1 & -\varepsilon_1-\varepsilon_2+J/2 & 0 & \Delta_2\\
\Delta_2 & 0 & \varepsilon_1-\varepsilon_2-J/2 & \Delta_1\\
0 & \Delta_2 & \Delta_1 & -\varepsilon_1+\varepsilon_2-J/2
\end{pmatrix}.
$$

论文对比了 Fujisawa 小组（完全对称四量子点）与改进的"上下不对称 + $H$ 电极在中间分开为 $H_1$、$H_2$"两种结构，前者的耦合项为 $\sigma_z^{(1)}\sigma_z^{(2)}/4$ 形式，后者为 $(I-\sigma_z^{(1)})(I-\sigma_z^{(2)})/4$ 形式。差异来自两个失谐运动的电子在两种几何中的相对位置不同：不结构使得控制比特的状态几乎不影响目标比特的失谐平衡点，从而方便构造动态受控逻辑门。

### CROT 条件与 CNOT 是其特例

把目标比特置于 $\varepsilon_1=J/2$ 处，并假设两组点内隧穿耦合相同 $\Delta_1=\Delta_2=\Delta$，可解析求出四个本征态。在 $|R\rangle_R\rangle_D$ 与 $|L\rangle_R\rangle_D$ 之间能级差 $\Delta$ 的条件下（即 $\Delta/J\approx1$ 且 $|\varepsilon_2^2-J^2|/2\Delta\gg1$），对下比特为 $|R\rangle_D$ 时上比特发生拉莫振荡、为 $|L\rangle_D$ 时振荡被抑制——这就是 CROT 门。CNOT 是 CROT 旋转角取 $\pi$ 的特例。

### 数值模拟：耦合 $J$ 对保真度的影响

固定下比特旋转 $\theta_L=\pi$、扫描上比特矩形脉冲宽度，模拟上面比特在 $|0\rangle_U$ 的概率，密度矩阵演化由 Lindblad 方程

$$
\dot\rho=-\frac{i}{\hbar}[H_{2q},\rho]-\frac{1}{T_2^*}\rho
$$

驱动。结果：

| $J/\hbar$ | 上比特拉莫振荡振幅 | 振荡抑制率 | 理想门保真度 |
| --- | --- | --- | --- |
| $0\ \mathrm{GHz}$ | $100\%$ | $0$ | — |
| $5\ \mathrm{GHz}$ | $46.7\%$ | $53.3\%$ | — |
| $30\ \mathrm{GHz}$ | $2.7\%$ | $97.3\%$ | $97.3\%$ |

把 GaAs 电荷比特典型的 $T_2^*\approx 0.3\ \mathrm{ns}$ 计入后，$J/\hbar=30\ \mathrm{GHz}$ 处的 CNOT 保真度从 $97.3\%$ 降至 $88.7\%$，纠缠度 $0.999\to 0.951$。这组数字直接量化了"强电容耦合 + 短相干时间"之间的折中：$J$ 越大，关态抑制越彻底，但门操作时间不变时相干损失越大。

## 理论模型（二）：Si-MOS 常开交换 + 共振驱动

### 海森堡模型与能谱

把电子放在硅基双量子点中、两点各通过微磁体引入磁场梯度，双电子自旋系统在磁场沿 $z$、忽略横向分量贡献的近似下由海森堡哈密顿量描述：

$$
H=J\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2+g\mu_B(B_1 S_{1z}+B_2 S_{2z}).
$$

在直积基 $\{|\!\uparrow\uparrow\rangle,|\!\uparrow\downarrow\rangle,|\!\downarrow\uparrow\rangle,|\!\downarrow\downarrow\rangle\}$ 下（$|\sigma_i\rangle$ 为第 $i$ 点电子自旋沿 $z$ 投影）写为

$$
H=
\begin{pmatrix}
\bar E_Z & 0 & 0 & 0\\
0 & -J/2+\Delta E_Z & J/2 & 0\\
0 & J/2 & -J/2-\Delta E_Z & 0\\
0 & 0 & 0 & -\bar E_Z
\end{pmatrix}
$$

其中 $\bar E_Z=(E_{Z1}+E_{Z2})/2$、$\Delta E_Z=E_{Z1}-E_{Z2}$。

当 $J\ll\Delta E_Z$ 时（本征态近似为自旋直积态），打开 $J$ 把反平行态 $|\!\uparrow\downarrow\rangle$ 与 $|\!\downarrow\uparrow\rangle$ 的能量整体下移 $J/2$，于是目标比特的拉莫尔频率依赖于控制比特的状态：

$$
f_{2}^\downarrow\equiv f_{Q2},\quad f_{2}^\uparrow\equiv f_{Q2}-J.
$$

在 $f_2^\uparrow$ 上驱动目标比特，只在控制比特为 $|\!\uparrow\rangle$ 时翻转——这就是 CROT。实验中（论文）失谐 $\varepsilon=0$ 处测得 $J=4.8(4)\ \mathrm{MHz}$，两点拉莫尔差 $\Delta E_Z=55.4\ \mathrm{MHz}$，比例 $J/\Delta E_Z\approx 0.087$，正好处于"$J$ 常开 + 共振条件驱动"工作区。

<!-- FIGURE: 双电子海森堡能级图：左为 J=0 时四点等距；右为 J≪ΔEz 时反平行态下移 J/2，四个条件频率 f1↓, f1↑, f2↓, f2↑ 分裂 -->

### 在本征基下做旋波近似

为定量给出 CROT 的演化算符，需把哈密顿量转到系统本征基。引入把直积基映射到本征基的变换 $V_0$，并施加一个沿 $x$ 方向幅度为 $A_R$、相位为 $\phi$ 的微波驱动，旋转坐标系下的有效哈密顿量（5.4 节）为

$$
H_R=\frac{J}{2}\lambda_I+\frac{J}{2}\lambda_Z+\frac{A_R}{2}(\cos\theta\cos\phi)\,\lambda_X+\frac{A_R}{2}(\cos\theta\sin\phi)\,\lambda_Y
+\frac{A_R}{2}(\cos\theta\cos\phi)\,\kappa_X+\frac{A_R}{2}(\cos\theta\sin\phi)\,\kappa_Y
$$

其中 $\lambda_{I,X,Y,Z}$ 与 $\kappa_{I,X,Y,Z}$ 分别是两个独立子空间（$\lambda$ 子空间与 $\kappa$ 子空间）内的泡利算符，$\theta=\arctan\!\big[2\Delta/(\sqrt{\varepsilon^2+4\Delta^2}-\varepsilon)\big]$ 是混合角。演化算符可因式分解为三项

$$
U_R(t)=\exp\!\left[-\frac{i}{2}\sqrt{J^2/4+\Delta E_Z^2}\,t\,\,ZI\right]
\cdot\exp\!\left[-\frac{i}{2}\Omega_\lambda t\,\mathbf{n}_\lambda\!\cdot\!\boldsymbol\lambda\right]
\cdot\exp\!\left[-\frac{i}{2}\Omega_\kappa t\,\mathbf{n}_\kappa\!\cdot\!\boldsymbol\kappa\right]
$$

其中 $\Omega_\lambda=\sqrt{A_R^2\cos^2\theta+J^2}$、$\Omega_\kappa=A_R\cos\theta$。要实现真正的 CNOT 门必须同时满足三个条件：

1. 微波相位 $\phi=0$；
2. $\lambda$ 子空间旋转 $\Omega_\lambda t=2m\pi$，把控制比特在 $\lambda$ 子空间中的相位带回原位；
3. $\kappa$ 子空间旋转 $\Omega_\kappa t=(2n-1)\pi$，让目标比特完成 $\pi$ 翻转。

由于 $\Omega_\kappa=A_R\cos\theta$ 而 $\Omega_\lambda$ 还含 $J$，两条件对应不同的微波持续时间：分别解得 $t_\lambda=2m\pi/\Omega_\lambda$ 与 $t_\kappa=(2n-1)\pi/\Omega_\kappa$，合成一个完整 CNOT 的总时长 $t_{\mathrm{tot}}=4\pi/J$，比单独满足 $\kappa$ 子空间的 $15\pi/J$ 多出 $3\%$。这段多余时间就是控制比特 $\lambda$ 子空间的相位累积，也是虚拟相位补偿的对象。

### 虚拟 $Z$ 与虚拟相位补偿

CROT 与 ZCROT 之间的相位相差 $180^\circ$，后者的额外相位可通过控制比特上的虚拟 $Z$ 旋转（直接调节后续 AWG 脉冲相位）一次性补齐；剩下 $3\%$ 的 $\lambda$ 子空间相位来自 $J$ 常开下微波对相邻频率的"非共振驱动"，需要按门逐个补偿。论文给出的解析关系把每个受控旋转门 $f_{m,\sigma}$ 在四个直积基 $\{|\!\downarrow\downarrow\rangle,|\!\downarrow\uparrow\rangle,|\!\uparrow\downarrow\rangle,|\!\uparrow\uparrow\rangle\}$ 上累积的相位列成相位误差补偿表，对后续每个脉冲在物理施加前先减去表中的累积相位。实验中从四种校准序列的 Ramsey 拟合得到相位偏移

$$
(\theta_{\mathrm{CNOT12}},\theta_{\mathrm{CNOT21}},\theta_{\mathrm{ZCNOT12}},\theta_{\mathrm{ZCNOT21}})
=(0.166\pi,0.207\pi,-0.139\pi,-0.129\pi)
$$

由此反推出非共振哈密顿相位误差

$$
(\phi_1^\uparrow,\phi_2^\uparrow,\phi_1^\downarrow,\phi_2^\downarrow)
=(-0.0517\pi,-0.0415\pi,0.0198\pi,0.0248\pi).
$$

完成这些校准后，可通过 CROT 与 ZCROT 合成 CNOT 与 ZCNOT，整个两比特 Clifford 群都建立在同一时长（约 400 ns）的 CROT 单元之上。

<!-- FIGURE: J 常开下 CNOT 门控制比特 λ 子空间相位校准流程图：初始化 → 目标门 → 拉姆齐读出相位 → 表中累积 → 下一门预补偿 -->

## 真值表测量与门保真度

CNOT 门的实验验证通常分两步：先用过程层析或随机基准测出完整的 $4\times4$ 矩阵并报告保真度；再用四种输入态 $|00\rangle$、$01\rangle$、$10\rangle$、$11\rangle$ 各做一次 CNOT 后的输出概率分布给出一目了然的真值表。

**（GaAs/AlGaAs 电容耦合）**：把两个电荷比特都调到少电子区，取 $J=119\ \mu\mathrm{eV}\approx 29\ \mathrm{GHz}$、$\Delta_U\approx 6.2\ \mathrm{GHz}$、$\Delta_L\approx 6.0\ \mathrm{GHz}$。先制备输入态（控制比特 $3\pi=360\ \mathrm{ps}$ 的非绝热脉冲，目标比特同幅度的 $\pi$ 或 $3\pi$ 脉冲），然后做 CNOT 操作并用 QPC 通道测量上下比特处于 $|0\rangle$ 的概率。实验测得传输矩阵

$$
T_{\mathrm{measured}}=
\begin{pmatrix}
0.09 & 0.89 & 0.002 & 0.02\\
0.87 & 0.12 & 0.01 & 0.002\\
0.06 & 0.02 & 0.74 & 0.18\\
0.02 & 0.07 & 0.23 & 0.68
\end{pmatrix}
$$

对照理想矩阵可由式 $F=1-\sum_{i\neq j}|T_{ij}|$ 得出真值表保真度约 $68\%$。论文还指出 $|\!11\rangle$ 输入态制备需要把脉冲高度调整为原幅度加耦合能补偿（条件频移），这是电容耦合 CNOT 在多比特工作时的典型边界条件。

**（Si-MOS 常开交换）**：论文对两个单比特分别做 GST 测试，得到 $Q_L$ 比特单比特门保真度 $I=93.3\%$、$X=97.0\%$、$Y=97.2\%$，$Q_R$ 比特 $I=92.4\%$、$X=99.5\%$、$Y=99.6\%$；两个比特的 $T_2\approx 400\ \mathrm{ns}$，样品中 $T_2^*$ 也仅数百纳秒。在此基础上对 CNOT 做 GST 测得保真度约 $64\%$，论文明确指出主要限制来自极短的相干时间。叠加波形的畸变、AWG 幅度校准、非共振驱动相位补偿等步骤虽然已经完成，仍无法突破相干时间的硬上限。

**（Si/SiGe 一维四量子点）**：采用先做 CZ（CPhase 演化时间 $t=\pi\hbar/J$）再合成 CNOT 的路线。在对称操作点（失谐零点 $\varepsilon=0$）$J\approx 6.25\ \mathrm{MHz}$、演化时间 $80\ \mathrm{ns}$；为抑制电荷噪声引入 Hahn echo 波形标定 $\Delta E_Z$ 偏移并精确校准相位。论文给出 $X$、$Y$ 单比特门（$83\ \mathrm{ns}$）保真度超过 $99\%$，并用 IRB 方法量化比特间串扰。两比特 RB 给出 CZ 门保真度 $F_{\mathrm{CZ}}=90.96\pm 7.48\%$，CZ 与单比特门合成即得 CNOT。

## 参数与量级

| 量 | 典型值 | 实验/来源 |
| --- | --- | --- |
| 双电荷比特耦合 $J$（GaAs） | $0\to 29.5\ \mathrm{GHz}$，$100\ \mathrm{mV}$ 范围连续可调 | |
| 双电荷比特工作 $J$（CNOT） | $119\ \mu\mathrm{eV}\approx 29\ \mathrm{GHz}$ | |
| 点内隧穿耦合 $\Delta_U,\Delta_L$（GaAs） | $\approx 6.2\ \mathrm{GHz}$、$6.0\ \mathrm{GHz}$ | |
| 杠杆臂 $\alpha$（GaAs） | $54.6\ \mu\mathrm{eV/mV}$ | |
| 双电荷比特门脉冲 | $3\pi=360\ \mathrm{ps}$（取 $\pi=120\ \mathrm{ps}$） | |
| 双电荷比特 CNOT 保真度（实验真值表） | $68\%$ | |
| 双电荷比特 CNOT 理想保真度（模拟） | $97.3\%$（$J/\hbar=30\ \mathrm{GHz}$） | |
| 双电荷比特 CNOT 含 $T_2^*$（模拟） | $88.7\%$（$T_2^*=0.3\ \mathrm{ns}$） | |
| 振荡抑制率（$J/\hbar=30\ \mathrm{GHz}$） | $97.3\%$ | |
| 振荡抑制率（$J/\hbar=5\ \mathrm{GHz}$） | $53.3\%$ | |
| 自旋比特 $\Delta E_Z$（Si-MOS） | $55.4\ \mathrm{MHz}$ | |
| 自旋比特 $J$（Si-MOS，$\varepsilon=0$） | $4.8(4)\ \mathrm{MHz}$ | |
| CROT 拉比频率 | $1.25\ \mathrm{MHz}$（$\pi$ 脉冲 $400\ \mathrm{ns}$） | |
| CNOT 时长（$J$ 常开方案） | $4\pi/J\approx 833\ \mathrm{ns}$ | |
| CNOT 时长（仅 $\kappa$ 子空间） | $15\pi/J\approx 3.13\ \mu\mathrm{s}$ | |
| $\lambda$ 子空间相位补偿占比 | $\approx 3\%$ | |
| 自旋比特 $T_2^*$（Si-MOS） | $\sim 400\ \mathrm{ns}$ | |
| CNOT GST 保真度（Si-MOS） | $\approx 64\%$ | |
| Si/SiGe CZ $J$（样品） | $\approx 6.25\ \mathrm{MHz}$ | |
| Si/SiGe CZ 演化时间 | $80\ \mathrm{ns}$ | |
| Si/SiGe $\Delta E_Z$ | $\approx 42\ \mathrm{MHz}$ | |
| Si/SiGe $J_{\mathrm{off}}$ | $\approx 150\ \mathrm{kHz}$ | |
| Si/SiGe CZ 门 RB 保真度 | $90.96\pm 7.48\%$ | |
| Si/SiGe 单比特门 RB 保真度 | $>99\%$（$X$、$Y$，$83\ \mathrm{ns}$） | |

## 实验特征与读出

**条件频移的真值表指纹**。电容耦合 CNOT 在 QPC 通道上的特征是"目标比特振荡是否出现"完全由控制比特态决定：固定控制比特 $\theta_L=\pi$（$|0\rangle_L\to|1\rangle_L$）后扫描目标比特矩形脉冲宽度，$P^U_0(\theta_L=0)$ 给出完整拉莫振荡、$P^U_0(\theta_L=\pi)$ 几乎恒为 1——后者的抑制程度就是关态保真度的直接度量。

**四个条件频率的能谱测量**。$J$ 常开方案的核心标定是四个条件频率 $f_1^\downarrow$、$f_1^\uparrow$、$f_2^\downarrow$、$f_2^\uparrow$ 的逐一测量。固定控制比特初态、对目标比特扫描拉莫尔频率得到两条共振线（取决于控制比特态），交换两条线的角色重复一次即可画出四个频率。从线间距可直接读出 $\Delta E_Z$ 与 $J$（$J=f_1^\uparrow-f_1^\downarrow=f_2^\uparrow-f_2^\downarrow$）。

**拉比频率非均匀与功率校准**。$f_i^\downarrow$ 与 $f_i^\uparrow$ 的驱动拉比频率在相同微波功率下不一定相等，原因是控制比特不同自旋态下目标比特的 Rabi 振荡振幅不同。实验通过调节 AWG 幅度（而非微波源功率）使 $f_1^\downarrow$ 与 $f_2^\downarrow$ 同步，并把另外两个 ZCROT 的幅度按比例校准。幅度比例不是常量，需在工作点漂移或电压整体偏移时重新标定。

**CROT 与 ZCROT 的相位差**。CROT 使目标比特 $\pi$ 旋转、控制比特绕 $z$ 转 $\pi$，因此 CROT 与 ZCROT 之间存在 $180^\circ$ 相位差，对控制比特做一次虚拟 $Z$ 即可在两个门之间切换，这是 $J$ 常开方案能合成全部两比特 Clifford 群的关键。

**对称工作点抑制电荷噪声**。CPhase/CZ 路线中，$J(\varepsilon)$ 在 $\varepsilon=0$ 处对失谐一阶不敏感（$dJ/d\varepsilon|_{\varepsilon=0}=0$），是首选工作点；该点需要先用 Hahn echo 型波形结合傅里叶变换精标，再固定脉冲宽度改变 $J$ 或固定 $J$ 改变宽度。论文给出 $J(\varepsilon)=2tU/(U^2-\varepsilon^2)$ 形式，并在对称点附近观察到振荡图案关于失谐对称分布。

## 适用边界与推广

- **三比特推广**：把同样的条件频移思想推广到[[qubit-control/toffoli-gate|Toffoli 门]]：三电荷比特中目标比特失谐平衡点由两个控制比特状态**相加**地决定，$|11\rangle$ 态对应 $J_{12}+J_{13}$、$|10\rangle$ 或 $|01\rangle$ 对应单一耦合、$|00\rangle$ 不偏移，因此仅在两控制比特同时为 $|1\rangle$ 时目标比特才完成拉莫振荡翻转——这是 Toffoli 的静态演示版本。$J$ 常开方案中，论文明确把 CNOT 视为"Toffoli 等多比特受控旋转的基础"。
- **$\sqrt{\mathrm{SWAP}}$ 路线**：当 $J\gg\Delta E_Z$ 时系统本征态变为单态-三重态基，调控 $J$ 可直接实现 $\sqrt{\mathrm{SWAP}}$ 门，再结合单比特 $\pi$ 旋转合成 CNOT。这是 Hubbard 极限下的等价表达，论文中由 $J=4t^2/U$ 主导。
- **CPhase/CZ 路线**：交换作用只作为条件相位来源，演化 $t=\pi\hbar/J$ 给出 $\mathrm{diag}(1,1,1,-1)$ 即 CZ 矩阵，再以两路单比特 $Z(-\pi/2)$ 改写即得 CNOT。优势是无需微波、波形简单；代价是门时长直接由 $J$ 决定，$J$ 越小门越长，受退相干约束更大。
- **动态解耦 CNOT**：在 CPhase 演化中间插入解耦序列可同时抑制电荷与核自旋噪声，论文在 Si-MOS 上演示了非绝热 DCZ 门作为补充方案。
- **几何门与复合脉冲**：当 CNOT 中的旋转误差（功率失配、过冲、上升沿）成为主要错误源时，可借助[[qubit-control/geometric-quantum-gate|几何量子门]]或分段复合脉冲把残留误差压到二阶，硅基与超导体系都已有报告把单比特门推到 $99.9\%$ 以上。

## 与其他概念的关系

- [[qubit-control/charge-qubit|电荷量子比特]]：电容耦合 CNOT 的"两个比特 + 强偶极–偶极耦合"模型即两电荷量子比特的直接推广；本词条中的 $J(\varepsilon)$ 曲线与条件频移机理贯穿、两篇论文。
- [[qubit-control/exchange-interaction|交换相互作用]]：自旋比特 CNOT 的耦合源——$J$ 常开方案以有限 $J$ 为前提，CPhase/CZ 方案把 $J$ 用作条件相位源；Hubbard 极限下 $J=4t_c^2/U$ 是双比特门速率的标尺。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]：$J$ 常开 CNOT 需要每个比特独立可寻址的拉莫尔频率，磁场梯度（[[materials-devices/micromagnet|微磁体]]）与 ESDR（[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]）共同提供这一前提；单比特保真度是 CNOT 误差的下界。
- [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]：$S$–$T_0$ 比特的 $z$ 轴（交换轴）与 $x$ 轴（磁场梯度轴）组合也可实现两比特条件门，是另一族以交换为核心的两比特门路线。
- [[qubit-control/toffoli-gate|Toffoli 门]]：CNOT 的三比特推广既可由 CNOT 与单比特门串联构造，也可直接由三比特条件频移静态演示，本词条的条件抑制机理即其基础。
- [[qubit-control/dynamical-decoupling|动力学解耦]]：用于 CPhase/CZ 演化中抑制电荷噪声与核自旋噪声，论文中明确把它与非绝热 CZ 结合形成 DCZ。
- [[readout-measurement/single-shot-readout|单发读出]]：CNOT 真值表测量依赖输入态制备与输出态单发读出；QPC 与射频反射读出都是当前的主流接口。
- [[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/gaas-algaas|GaAs/AlGaAs]]、[[materials-devices/silicon-mos|Si-MOS]]：前者决定 CNOT 的最大允许门时长，后者决定 $T_2^*$ 与典型 $J$ 调谐能力——电容耦合 GaAs 路线受短 $T_2^*$ 拖累（保真度 68%），常开 Si-MOS 路线则受短 $T_2^*$ 与微波校准误差双重影响（保真度 64%）。
