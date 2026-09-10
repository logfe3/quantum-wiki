---
title: 自旋轨道耦合
description: 半导体量子点中把载流子自旋自由度与轨道自由度耦合起来的相对论效应，是空穴全电控自旋比特操控与电子自旋阻塞漏电流的核心机制。
aliases:
 - Rashba SOC
 - Dresselhaus SOC
 - 自旋-轨道耦合
 - spin-orbit coupling
tags:
 - 量子点基础
 - 自旋物理
 - 哈密顿量
date: 2026-09-08
---

<div class="entry-lead">自旋轨道耦合（spin-orbit coupling，SOC）来源于电子在电场中运动时感受到的有效磁场，是把载流子的轨道运动翻译为自旋旋转的"内置翻译器"。它既让硅电子自旋比特在无微磁体时无法被电场直接驱动，又让锗空穴自旋比特无需任何外部磁体就能做到百 MHz 量级的 Rabi 频率。</div>

## 物理图像：自旋在电场中"看到"磁场

在静止参考系中看，电场 $\mathbf{E}=-\nabla V/c\,e$（$V$ 是势能）只把载流子推来推去，与自旋无关。改到载流子的共动参考系——这正是狭义相对论告诉我们的事情——电场就变换出一个与之正比的"有效磁场"

$$
\mathbf{B}_{\text{SO}}=\frac{1}{m c\,e}\,\mathbf{p}\times\mathbf{E}
$$

它直接进入自旋的进动方程，从而把轨道运动耦合到自旋自由度。 在 1.2.2 节明确写出这一定义："在势场内运动的粒子的自旋和其动量相互作用，并通过电场耦合粒子的轨道动量和自旋自由度，这一效应被称为自旋轨道耦合……自旋轨道耦合又可以理解为一种有效的塞曼劈裂能，它可以将相反自旋的态混合到一起，从而导致自旋弛豫"。 用同一物理图像把它写成泡利形式（4.17 式）

$$
H_{\text{SO}}=\frac{\hbar}{4m_0^{2}c^{2}}\,\boldsymbol{\sigma}\cdot(\mathbf{p}\times\nabla V_{0})
$$

其中 $m_0$ 为自由电子质量、$\boldsymbol{\sigma}$ 为泡利矩阵、$V_0$ 为原子核产生的库仑势。在半导体中真正的关键不是单原子势，而是晶体势、异质结界势与外加栅极电势的组合——它们共同决定载流子"看到"的有效电场 $\mathbf{E}(\mathbf{r})$，进而决定 SOC 的强度与对称性。

<!-- FIGURE: 自旋轨道耦合物理图像：实验室参考系中只有电场；进入载流子共动参考系后电场变换出有效磁场 B_SO，作用于自旋 -->

SOC 一旦出现就会同时承担三件事：

1. **沟通单态–三重态**：把 $(1,1)$ 区的自旋三重态 $T(1,1)$ 与 $(0,2)$ 区的单态 $S(0,2)$ 直接耦合，是泡利自旋阻塞（Pauli spin blockade，PSB）漏电流的最主要来源之一；
2. **把电场转换为自旋驱动**：交流电场驱动载流子在量子点内做受迫振荡，SOC 把这一位移"翻译"为有效振荡磁场 $B_{\text{eff}}$，从而实现电偶极自旋共振（electric dipole spin resonance，EDSR）——这是空穴比特全电控自旋操控的物理基础；
3. **贡献退相干**：同一条 SOC 通道也把电荷涨落反向注入自旋频率，使比特对电荷噪声敏感，造成 $T_2^{*}$ 缩短，是"驱动强"与"相干好"难以同时最优的根因。

## SOC 的两大微观来源

半导体中所有的 SOC 项都可以从反演对称性的破缺方式分为两类。这一框架在[[materials-devices/silicon-mos|Si-MOS]]的 Chu Ning 2025 与平面锗的 Zhou Yuchen 2026 中都被独立地用作组织原则。

### Dresselhaus SOC：体反演不对称（BIA）

当晶体本身缺乏中心反演对称（典型的如闪锌矿 GaAs 或受应变的 Ge）时，晶格势的反对称分布会让某一自旋取向在能量上比另一自旋更受偏爱，从而在非零波矢 $\mathbf{k}$ 处打开自旋分裂。三维 Dresselhaus 哈密顿量为

$$
H_{\text{D}}\propto p_{x}(p_{y}^{2}-p_{z}^{2})\,\sigma_{x}+p_{y}(p_{z}^{2}-p_{x}^{2})\,\sigma_{y}+p_{z}(p_{x}^{2}-p_{y}^{2})\,\sigma_{z}
$$

其中 $\sigma_{x,y,z}$ 是泡利矩阵。在二维限域下，生长方向 $z$ 的尺寸有限，可分解为线性项

$$
H_{\text{D}}^{(1)}=\frac{\beta}{\hbar}(\sigma_{x}p_{x}-\sigma_{y}p_{y})
$$

和三次项

$$
H_{\text{D}}^{(3)}=-\frac{\beta d^{2}}{\hbar^{3}\pi^{2}}\,p_{x}p_{y}(p_{y}\sigma_{x}-p_{x}\sigma_{y})
$$

其中 $\beta$ 是 BIA 的有效参数，$d$ 是材料在生长方向上的有效宽度（Zhou Yuchen 2026 式 4.18–4.20）。在 Si、Ge 等具有 $O_h$ 对称性的金刚石晶体中，BIA 在体材料中严格为零；只有应变或异质界面把对称性降低到 $D_{2d}$ 之后，界面反演不对称（IIA）才会产生形如上式的项。

### Rashba SOC：结构反演不对称（SIA）

当低维结构沿生长方向存在势能分布不对称——例如异质结界面、栅极电场、量子阱阱宽不对称——载流子在 $z$ 方向感受到非零平均电场 $\mathbf{E}$，并相应地在面内运动参考系中"看到"一个等效磁场。Rashba 自旋轨道耦合的哈密顿量写成与动量–自旋线性耦合的标准形式

$$
H_{\text{R}}^{(1)}=\frac{\alpha}{\hbar}(\sigma_{x}p_{y}-\sigma_{y}p_{x})
$$

其中 $\alpha$ 是 Rashba SOC 的有效参数。Chu Ning 2025 4.1.1 节用点群语言给出同样的判定：在 $D_{2d}$ 对称性（(001) 应变量子阱）下出现 IIA 项、对应 Dresselhaus 形式；在 $C_{2v}$ 对称性（不均匀掺杂或表面电场使 $x,y$ 不再等价）下出现 SIA 项、对应 Rashba 形式；两种形式外推到硅中可统一为 $\alpha(\sigma_{x}k_{y}-\sigma_{y}k_{x})$ 与 $\beta(\sigma_{x}k_{y}+\sigma_{y}k_{x})$。由于 Rashba 项的耦合方向总是垂直于 $x\text{-}y$ 平面（由 $(\boldsymbol{\sigma}\times\mathbf{k})_{z}$ 给出），它本身不产生面内各向异性；而 Dresselhaus 项的 $\beta$ 则让 $g$ 因子随磁场在面内方位角 $\phi$ 呈 $\sin 2\phi$ 调制，是各向异性的来源。

### 空穴特有的"轻重空穴混合"通道

对于价带空穴，额外的效应来自强限域下重空穴 ($J_z=\pm 3/2$) 与轻空穴 ($J_z=\pm 1/2$) 的子带分裂 $\Delta_{\text{hl}}$。纯重空穴态在理想模型下与面内自旋算符 $J_x$、$J_y$ 完全解耦，无法形成有效 SOC；但只要存在轻重空穴混合（HH–LH mixing）——例如生长方向偏离 [001]、存在应变或异质界面效应、$k_x,k_y$ 不再可忽略——就会诱导出与体材料同量级的 Rashba SOC（Zhou Yuchen 2026 式 4.37）

$$
\alpha_{\text{3D}}^{r}\,E_{z}(J_{x}k_{y}-J_{y}k_{x})\rightarrow \alpha_{\text{2D}}^{r}\,E_{z}(s_{x}k_{y}-s_{y}k_{x})
$$

其中 $\alpha_{\text{2D}}^{r}=\mathcal{O}(\alpha_{\text{3D}}^{r})$，$s_{x,y}$ 是重空穴子空间中的伪自旋 $1/2$ 算符。这正是平面应变锗异质结自旋轨道耦合虽然理论上"很弱"，实测却与一维纳米线同一量级的物理原因。

## 关键公式与推导梗概

### 自旋轨道长度 $l_{\text{SO}}$

当 Rashba 与 Dresselhaus 同时存在时，常引入等效自旋轨道长度

$$
l_{\text{SO}}=\frac{\hbar}{m^{*}\sqrt{\alpha^{2}+\beta^{2}}}
$$

把 SOC 强度归一化为单一量纲（Zhou Yuchen 2026 式 4.22； 式 3.3.2 也独立给出同一形式）。 通过测量 PSB 漏电流在零磁场附近的"双峰谷"结构拟合出 $t_{\text{SO}}$、再除以量子点尺寸 $l_{\text{dot}}$，得到

$$
\frac{t_{\text{SO}}}{t}\sim \frac{l_{\text{dot}}}{l_{\text{SO}}}\quad\Longrightarrow\quad l_{\text{SO}}\sim\frac{\hbar}{\sqrt{m^{*}\Delta_{ST}}}\sim 40\text{–}100\,\mathrm{nm}
$$

其中 $\Delta_{ST}=1.1\ \mathrm{meV}$ 是 $T(2,0)$ 与 $S(2,0)$ 之间的能量差。这是 GaAs 电子（$l_{\text{SO}}\gtrsim 1\ \mu\mathrm{m}$）的近一个量级差距，也是锗空穴 EDSR 速度跑赢硅电子的物理来源。

### EDSR 等效磁场

SOC 把载流子的轨道位移翻译为自旋感受到的有效磁场，这是 EDSR 的核心。 在 2.1.3 节明确给出

$$
B_{\text{eff}}=\frac{l_{\text{dot}}}{l_{\text{SO}}}\frac{eE(t)}{\Delta}\,B_{\text{ext}}
$$

其中 $l_{\text{dot}}$ 为量子点尺寸、$\Delta$ 为量子点能级间隔、$B_{\text{ext}}$ 为外加静磁场（式 2.8）。 在 2.4.1 节把它写成同一形式（式 2.6）

$$
B_{\text{eff}}=B_{z}\frac{l_{\text{dot}}}{l_{\text{SO}}}\frac{eE(t)}{\Delta}
$$

并指出"对于平面应变锗量子点体系而言，价带空穴具有显著增强的 Rashba 与 Dresselhaus 型自旋–轨道耦合，使得 EDSR 能够在完全不依赖微磁体的情况下实现高效的全电学自旋操控"。

 在 1.3.3 节给出由微磁体横向梯度 $b_{\perp}=\partial B_{x}/\partial z$ 引入的另一种 EDSR 等效磁场（式 1.16）

$$
B_{\text{eff}}^{\text{(SSOC)}}=\frac{eE_{\text{ac}}\,\ell_{\text{orb}}\,|b_{\perp}|}{\Delta_{\text{orb}}^{2}}\propto \frac{eE_{\text{ac}}\,|b_{\perp}|}{\Delta_{\text{orb}}^{2}}
$$

其中 $\ell_{\text{orb}}=\sqrt{2\hbar/(m^{*}\omega_0)}$ 与 $\Delta_{\text{orb}}=\hbar\omega_0$ 分别是简谐势阱的特征长度与最低两个轨道能级间距。这一项与材料本征 SOC 在哈密顿量结构上完全同构——都是 $H_{\text{drive}}=\tfrac12 g\mu_B B_{\text{eff}}(t)\,\sigma_\perp$——只是 $B_{\text{eff}}$ 的微观来源不同：前者源自微磁体横向梯度，后者源自材料 Rashba/Dresselhaus。两种"等效 SOC"在 Rabi 频率与 $T_2^{\text{Rabi}}$ 的折中上面对完全相同的电荷噪声机制，这是 Si-MOS 微磁体路线与 Ge 空穴本征路线在工程上共享的物理基础。

### PSB 漏电流中的 SOC 指纹

在双量子点 PSB 区域，SOC 把三重态 $T(1,1)$ 与单态 $S(0,2)$ 通过虚过程直接耦合，解除阻塞并产生漏电流。Zhou Yuchen 2026 把这五态 ($T_+,T_-,T_0,S_{11},S_{02}$) 写成 $5\times5$ 哈密顿量（式 4.25）

$$
H=\begin{pmatrix}
0 & iB & 0 & 0 & it_{\text{SO}}\\
-iB & 0 & 0 & 0 & it_{\text{SO}}\\
0 & 0 & 0 & \xi B & it_{\text{SO}}\\
0 & 0 & \xi B & 0 & t_c\\
-it_{\text{SO}} & -it_{\text{SO}} & -it_{\text{SO}} & t_c & 0
\end{pmatrix}
$$

其中 $\xi=(g_L-g_R)/(g_L+g_R)$ 描述左右点之间的 $g$ 因子差异、$t_c$ 为双点隧穿耦合。当 $B\to 0$ 时基态为 $S_{02}$ 与最大混合三重态的等幅叠加（式 4.27），漏电流谷深由自旋弛豫速率 $\Gamma_{\text{rel}}$ 决定；当 $B\to\infty$ 时基态变为纯 $T_+$，漏电流升至饱和 $I_{\text{max}}=4\Gamma_{\text{rel}}$。把 SOC 与 $g$ 因子差异共同代入主方程求解并对实验漏电流谱进行拟合，可同时提取 $t_{\text{SO}}$、$t_c$、$\xi$、$\Gamma_{\text{rel}}$ 等多个物理参数。这是当前定量提取 SOC 强度的标准方法。

 在 3.3.1 节给出同一物理的另一种拟合公式（式 3.1）

$$
I(B)=\Gamma_{\text{rel}}\,\frac{(\omega-B^{2}+\tau^{2})[\omega(1+4\gamma)+B^{2}-\tau^{2}]}{6\gamma\omega^{2}+2B^{2}\eta^{2}t^{2}}
$$

其中 $\omega=\sqrt{(B^{2}-\tau^{2})^{2}+8B^{2}\eta^{2}t^{2}}$、$\tau=t\sqrt{1+3\eta^{2}}$、$\eta=t_{\text{SO}}/t$，对 Ge 纳米线 PSB 数据拟合得到 $t_{\text{SO}}\sim 38\pm 4\ \mu\mathrm{eV}$、$t\sim 84\pm 7\ \mu\mathrm{eV}$。

## 参数与量级

下面汇总本仓库论文及对应文献中实测或评估的 SOC 参数，给出量级感。

| 量 | 典型值 | 实验体系 / 备注 | 来源 |
| --- | --- | --- | --- |
| 自旋轨道长度 $l_{\text{SO}}$ | $\gtrsim 1\ \mu\mathrm{m}$ | GaAs/AlGaAs 2DEG | |
| 自旋轨道长度 $l_{\text{SO}}$ | $40\text{–}100\,\mathrm{nm}$ | 锗棚顶纳米线空穴点 | |
| 自旋轨道长度 $l_{\text{SO}}$ | $1.5\text{–}35.4\,\mathrm{nm}$（可调） | 锗棚顶纳米线（栅压调） | 引文 |
| 自旋轨道长度 $l_{\text{SO}}$ | 低至 $0.5\,\mathrm{nm}$ | Ge/Si 纳米线 Rabi $>1\,\mathrm{GHz}$ | 引文 |
| 自旋轨道长度 $\lambda_{\text{SO}}$ | $28\text{–}57\,\mathrm{nm}$ | 锗硅自组织纳米线 | |
| SOC 强度 $t_{\text{SO}}$ | $38\pm 4\ \mu\mathrm{eV}$ | Ge 纳米线双点 PSB 拟合 | |
| SOC 强度 $t_{\text{SO}}$ | $15\text{–}21\ \mu\mathrm{eV}$（可调） | 平面应变锗双点 | |
| SOC 强度 $\Delta_{\text{SO}}$ | $34\ \mu\mathrm{eV}$（平行）、$42\ \mu\mathrm{eV}$（垂直） | 锗硅自组织纳米线理论 | |
| SOC 强度 $\Delta_{\text{SO}}$ | $35\text{–}50\ \mu\mathrm{eV}$（电偶极实验） | 锗硅自组织纳米线 | |
| SOC 强度 | 理论 $\gtrsim 1\,\mathrm{meV}$ | Ge/Si 核壳纳米线 | 引文 |
| SOC 强度 | $\sim 6\,\mathrm{meV}$ | Ge/Si 核壳纳米线实验 | 引文 |
| 横向梯度 $b_\perp$ | $\sim 0.02\,\mathrm{mT}$ | 翻转模式拟合 | |
| 横向梯度 $b_\perp$ | $0.2\,\mathrm{mT/nm}$ | 微磁体设计 | |
| 纵向梯度 $b_z$ | $0.4\text{–}0.98\,\mathrm{mT/nm}$ | 微磁体设计 | |
| Rabi 频率（锗空穴，平面应变） | $11.61\,\mathrm{MHz}$，最大 $19\,\mathrm{MHz}$ | 本征 SOC | |
| Rabi 频率（锗空穴，纳米线） | $542\pm 2\,\mathrm{MHz}$（@9 dBm），最快 $698\pm 2\,\mathrm{MHz}$ | 本征 SOC | |
| Rabi 频率（硅电子，Si/SiGe） | $10\text{–}30\,\mathrm{MHz}$ | 微磁体合成 SOC | |
| Rabi 频率（硅电子，Si-MOS） | $0.04\text{–}2.5\,\mathrm{MHz}$ | 微磁体合成 SOC | |
| 自旋–光子耦合 $g_s/2\pi$ | $2\text{–}4\,\mathrm{MHz}$ | 锗硅自组织纳米线评估 | |
| 自旋–光子耦合 $g_s/2\pi$ | $13.8\text{–}21.8\,\mathrm{MHz}$ | Si/SiGe 三量子点翻转模式 | |

<!-- FIGURE: 各材料体系 SOC 强度与自旋轨道长度对比：GaAs、Si/SiGe、Si-MOS、Ge/SiGe 平面异质结、Ge/Si 核壳纳米线、Ge 棚顶纳米线 -->

## 实验特征

### 泡利自旋阻塞漏电流谱

最直接的 SOC 指纹出现在 PSB 区域的漏电流 $I(B)$ 上。零磁场附近 SOC 引起的漏电流呈"零磁场为谷的双峰"结构（ 图 3.5(c)、 图 4.8）：谷的半高宽正比于 $t_{\text{SO}}/t$，谷深由自旋弛豫速率 $\Gamma_{\text{rel}}$ 决定。当磁场超过 $B_{\text{dip}}\sim t\sqrt{\Gamma_{\text{rel}}/\Gamma}/\alpha$ 后漏电流上升到饱和，形成完整双峰结构。 在平面锗异质结上沿 $x,y,z$ 三个正交方向分别拟合漏电流谱，得到表 4.1 中各方向的 $t_{\text{SO}}$ 数值：$B_x$ 方向 $t_{\text{SO}}=14\ \mu\mathrm{eV}$、$B_y$ 方向 $t_{\text{SO}}=8\ \mu\mathrm{eV}$、$B_z$ 方向 $t_{\text{SO}}=3\ \mu\mathrm{eV}$，定量体现 SOC 场的各向异性。

### SOC 场的方向性

把外加磁场在三个正交平面内连续旋转，可以在恒定磁场幅度下测得漏电流的角分布，从而反推 SOC 矢量 $\mathbf{t}_{\text{SO}}$ 的指向。 4.4.2 节给出这一方法的具体步骤：分别在 $x y$、$x z$、$y z$ 平面旋转磁场，把 $I(B,\theta)$ 拟合为 $A\sin(b\theta+\psi)+I_0$ 后，三个平面的相位 $\psi$ 分别为 $89\pm 2^\circ$、$94\pm 6^\circ$、$110\pm 7^\circ$，由此判定 SOC 场主要指向面外方向、与面外 $x$ 轴之间夹角约 $4\pm 6^\circ$。面内两个方向上的各向同性漏电流表明量子点面内 SOC 强度近似相等；与面外方向的显著差异则来自轻重空穴混合通道对 Rashba 项的贡献。

### 电极可调的 SOC

通过改变势垒栅极电压 $V_{B2}$，可以同时调控点间隧穿耦合 $t_c$ 与 SOC 强度 $t_{\text{SO}}$。 表 4.2 给出三组数据：$\Delta V_{B2}=0\ \mathrm{mV}$ 时 $t_{\text{SO}}=15\ \mu\mathrm{eV}$、$\Delta V_{B2}=50\ \mathrm{mV}$ 时 $t_{\text{SO}}=18\ \mu\mathrm{eV}$、$\Delta V_{B2}=175\ \mathrm{mV}$ 时 $t_{\text{SO}}=21\ \mu\mathrm{eV}$，$l_{\text{SO}}$ 同步从 $57\ \mathrm{nm}$ 变到 $65\ \mathrm{nm}$。这意味着在规模化量子比特阵列中可以分区域设定 SOC 强度——存储区用弱 SOC 拉长相干时间、操控区用强 SOC 提升 Rabi 频率。

### 多模式 EDSR 谱线

当量子点间隧穿耦合足够大时，$T_+(1,1)$ 与 $S$ 态在 SOC 作用下发生反交叉。 在 Ge 纳米线双点上通过调谐中间栅压 $V_{G3}$，在 EDSR 谱上同时观测到四条线：来自 $T_-(1,1)\to S$（红虚线）和 $T_0\to T_+$（黑虚线）；减小 $t_c$ 后变为 $T_-(1,1)\to T_0$（棕虚线）和 $S\to T_+$（绿虚线）。各模式的相对强度直接由 $\Delta_{\text{SO}}^{DD}/t$ 控制，反交叉的能量宽度 $2t_{\text{SO}}$ 就是 SOC 强度的直接读数。

### 弛豫热点

 1.3.3 节指出，双量子点零失谐附近 $T_1$ 显著下降，形成"弛豫热点"（hotspot），物理来源正是 SOC（或自旋–谷–轨道混合）把 $|S\rangle$ 与 $|T_\pm\rangle$ 在失谐为零处杂化。这一现象同时是双点初始化与电荷态–自旋态混合读取的物理基础，也是"零失谐处比特频率受失谐噪声影响最大"的根源。

## 本征 SOC 与合成 SOC

Chu Ning 2025 4.1 节给出半导体自旋比特体系中两类 SOC 的人为区分。

**本征 SOC（ISOC）** 来自材料本身的对称性破缺，由 Rashba、Dresselhaus 系数 $\alpha,\beta$ 表征。硅中电子 ISOC 极弱（$l_{\text{SO}}\gtrsim 1\ \mu\mathrm{m}$，有效耦合不足以直接驱动 EDSR），需要外部辅助；锗空穴 ISOC 强一到两个量级，可独立完成 EDSR。

**合成 SOC（SSOC）** 由集成微磁体在量子点处引入磁场梯度 $\partial B_z/\partial z\equiv b_{sl}$ 产生，它破坏时间反演对称性，从而打开电偶极自旋共振通道（Hu Ruizi 2022 1.3.4 节）。SSOC 的驱动强度由

$$
\Omega_{\text{EDSR}}=\frac{g\mu_B\,b_{sl}\,eE_{\text{ac}}\,\ell_{\text{orb}}^{2}}{2h\Delta_{\text{orb}}}\propto b_{sl}
$$

给出（Chu Ning 2025 式 4.11），即 Rabi 频率与微磁体提供的横向梯度 $b_{sl}$ 成正比。SSOC 与 ISOC 在自旋弛豫上表现不同：SSOC 由变形势声子发射引起的弛豫呈 $B^5$ 依赖，ISOC 呈 $B^7$ 依赖。同一器件中两套机制可以同时存在，但 SSOC 通常主导硅基比特的 EDSR，ISOC 主导锗空穴比特的 EDSR。

## 与其他概念的关系

- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]是 SOC 的载体；SOC 强度与平台材料、生长方向、量子点几何密切相关。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]与[[qubit-control/hole-spin-qubit|空穴自旋比特]]都依赖 SOC 实现 EDSR；后者直接利用内禀 SOC，前者需借助合成 SOC（微磁体）。
- [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]是 SOC 把电场翻译为自旋驱动的最直接应用，$f_{\text{Rabi}}\propto l_{\text{dot}}/l_{\text{SO}}$；同一通道也把[[materials-devices/charge-noise|电荷噪声]]反向注入自旋频率。
- [[qubit-control/pauli-spin-blockade|泡利自旋阻塞]]区域的漏电流是 SOC 强度的标准探针：通过拟合 $I(B)$ 谷–双峰结构提取 $t_{\text{SO}}$。
- [[scaling-automation/flopping-mode-qubit|翻转模式自旋比特]]在双量子点零失谐处把电偶极矩放大，依赖 SOC 沟通自旋与电荷。
- [[materials-devices/micromagnet|微磁体]]提供合成 SOC；[[materials-devices/strained-germanium|应变锗]]与[[materials-devices/germanium-hut-wire|锗棚顶纳米线]]提供强本征 SOC。
- [[qubit-control/exchange-interaction|交换相互作用]]负责两比特门；SOC 则是单比特 EDSR 与漏电流读取的核心。
- [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]通过 SOC 把自旋态杂化到电荷态上，从而获得与腔光子的有效耦合。
- [[scaling-automation/spin-orbit-torque-control|自旋轨道力矩操控]]是另一类基于 SOC 的基带门控机制，但作用于宏观磁体而非量子点自旋。
