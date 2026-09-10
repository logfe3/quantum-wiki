---
title: 谷劈裂
description: 硅等间接带隙半导体中量子点里把残留能谷二重简并分开的能隙，以及由此引入的泄漏与退相干通道。
aliases:
  - 谷间劈裂
  - valley splitting
  - 能谷劈裂
tags:
  - 量子点基础
  - 能谷
  - 自旋量子比特
date: 2026-09-08
---

<div class="entry-lead">谷劈裂（valley splitting, $E_\mathrm{VS}$）是硅量子点里把 $z$ 方向上残存的能谷二重简并分开的能隙：它决定了最低谷能级用于自旋比特编码时的"清洁度"，过小则准简并的谷态成为泄漏与退相干通道，过大则需更大磁场才能进入自旋–谷解耦区间。</div>

## 物理图像

### 能谷作为导带极小值的简并

硅是间接禁带半导体，导带极小值不位于 $\Gamma$ 点，而是沿六个等价 $\langle 100\rangle$ 方向位移到布里渊区 $k$-空间 $\pm 0.85\,(2\pi/a_\mathrm{Si})$ 附近，在 $k$ 空间表现为六个旋转椭球等能面。每个椭球代表一条谷能级（valley），全部等价的谷态都被电子等概率占据，构成六重简并。电子囚禁在量子点中时，这六个谷态本应一起进入量子点能谱，给自旋比特留下额外的"泄漏门"——所以量子点必须先把六重简并一级一级劈开，最终只留一个谷用于编码（[文献 22]([[sources/chu-ning-2025]])，PDF p. 25；[文献 21]([[sources/wang-ning-2025]])，PDF p. 40）。

### 从体硅到量子点的逐级劈裂

体硅导带六重简并在材料工程与器件工程中分三步被解除：

1. **双轴张应变**。Si/SiGe 异质结中 Si 量子阱被夹在弛豫 SiGe 缓冲层之间，SiGe 晶格常数 $a_\mathrm{SiGe}=5.499\ \text{Å}$（30% Ge 含量）大于 Si 的 $a_\mathrm{Si}=5.431\ \text{Å}$，薄硅层被迫与下方 SiGe 平面晶格常数一致，承受约 $1.25\%$ 的双轴张应变 $\varepsilon_\parallel$。应变使面外方向的两个 $\Delta$ 谷相对于面内四个 $\Delta$ 谷下移，原来的六重简并变为四重 $\Delta_4$（面内）与双重 $\Gamma_2$（面外），且 $\Delta_4$ 远高于 $\Gamma_2$。这一步骤把六重简并降至二重，并解释了为何电子处在 $\Gamma_2$ 谷时面内有效质量仍为 $m^{*}=0.19\,m_0$——这正是 Si/SiGe 量子点迁移率较高的根源（[文献 21]([[sources/wang-ning-2025]])，PDF pp. 39–40）。

2. **纵向限制与栅极电场**。栅压在 $z$ 方向施加电场，破坏 $\Gamma_2$ 的二重简并——所得到的能隙就是**谷劈裂** $E_\mathrm{VS}$。谷劈裂之后只剩最低谷用于自旋编码。

3. **磁场打开自旋劈裂**。在外磁场 $B_0$ 下每个谷能级再次按自旋方向劈裂，自旋向上与自旋向下的能级差 $E_z=g\mu_\mathrm{B}B_0$，完成自旋量子比特的能级准备（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 61–62）。

<!-- FIGURE: 谷简并逐级解除示意：体硅六重简并 → 应变后 Δ4（四重）+ Γ2（二重）→ 二维限制与电场下 Γ2 进一步劈裂为 E_VS → 磁场下每个谷按自旋再劈裂 -->

### 点群对称性与电场调节

文献 22 给出了对称性的语言刻画：在 Si-MOS 制备过程中体系点群从体硅的 $O_h$ 经应变硅的 $D_{2d}$ 降到电极加电势后的 $C_{2v}$，结构反演不对称性（structure inversion asymmetry, SIA）随之出现，对应 Rashba 自旋–轨道项 $H_\mathrm{SIA}=\alpha(\sigma_x k_y-\sigma_y k_x)$，方向总是沿 $z$——这意味着 Rashba 项不产生自旋各向异性。当谷对称性被进一步打破后，$z$ 方向的两个 $\Gamma$ 谷被对称界面电场和台阶劈开，能隙即为谷劈裂 $E_\mathrm{VS}$。文献 22 报告"在 Si-MOS 中的大小通常在 $200$–$1000\ \mu\mathrm{eV}$"（[文献 22]([[sources/chu-ning-2025]])，PDF pp. 70–71）。

## 理论模型

### 二能级有效哈密顿量

把 $\Gamma_2$ 两个谷态 $|v_+\rangle$、$|v_-\rangle$ 张成子空间，最低阶的有效哈密顿量为（[materials-devices/silicon-sige|Si/SiGe]] 词条中的写法）

$$
H_v=
\begin{pmatrix}
0 & \Delta_v \\
\Delta_v^{*} & 0
\end{pmatrix},
\qquad
E_\mathrm{VS}=2|\Delta_v|,
$$

$\Delta_v$ 是界面势在两个谷态之间的矩阵元，反映了界面锐利度、纵向电场强度与谷相位分布的耦合。$|\Delta_v|$ 越大，$E_\mathrm{VS}$ 越大；界面越"模糊"，$\Delta_v$ 越被相消，$E_\mathrm{VS}$ 越小。

### 从晶体对称性到点群分析

对 Si-MOS 的具体讨论（[文献 22]([[sources/chu-ning-2025]])，PDF pp. 70–71）：

| 结构状态 | 点群 | 谷简并 |
| --- | --- | --- |
| 体硅 | $O_h$ | 六重 |
| 应变硅（Si/SiGe、Si-MOS） | $D_{2d}$ | 二重 $\Gamma_2$ |
| 电极加电势、不平整界面 | $C_{2v}$ | 完全劈裂 |

谷劈裂 $E_\mathrm{VS}$ 对应 $\Gamma_2$ 在 $C_{2v}$ 下的能量差。

### 谷劈裂的尺度估计

最低谷波函数被纵向电场压在界面势垒内侧，典型尺度为 Si-MOS 中 $z$ 方向波函数分布 $\sim 1$–$3\ \mathrm{nm}$、Si/SiGe 中 $\sim 5$–$10\ \mathrm{nm}$。当电场把波函数挤得更紧时，$|\Delta_v|\sim \langle v_+|U_\mathrm{int}|v_-\rangle$ 中的积分增大，$E_\mathrm{VS}$ 单调增大——这与"电场可调谷劈裂"的实验规律一致。

### 谷–轨道–自旋三耦合

在硅这类本征自旋–轨道耦合（intrinsic spin–orbit coupling, ISOC）较弱的体系中，谷的存在把自旋翻转的弛豫通道变成了"自旋–谷–轨道耦合"（spin–valley–orbit coupling）。文献 22 把自旋弛豫速率写成多个通道之和（[文献 22]([[sources/chu-ning-2025]])，PDF p. 43）：

$$
T_1^{-1}=\Gamma_\mathrm{J,SV}+\Gamma_\mathrm{ph,SV}+\Gamma_\mathrm{J,SO}+\Gamma_\mathrm{ph,SO}+\Gamma_\mathrm{const}},
$$

下标 SO/SV 分别指自旋–轨道与自旋–谷两类混合，J 表示 Johnson 噪声，ph 表示声子噪声，$\Gamma_\mathrm{const}$ 是与磁场无关的本底通道。谷能级的存在**直接放大** $\Gamma_\mathrm{J,SV}$ 与 $\Gamma_\mathrm{ph,SV}$ 两个通道，是硅基自旋比特在某些磁场区间弛豫时间显著下降的重要原因。

### 与读取窗口的耦合

在 [[qubit-control/singlet-triplet-qubit|S–T₀ 比特]] 中，电子通过 $(1,1)$–$(0,2)$ 跃迁读取，读取窗口取决于左量子点中 $S(2,0)$ 与 $T(2,0)$ 的能级差。在硅量子点里，这个"轨道差"本来远大于塞曼劈裂，因此窗口远大于自旋选择性隧穿读出；但若 $(0,2)$ 态的电子被热激发到第一激发谷态，能级差被压回 $\sim E_\mathrm{VS}$ 量级，窗口立即受限——这就是文献 15 所说"在硅量子点样品中，由于谷能级的存在，仍然有可能导致读取窗口被限制"的根源（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 34）。

## 参数与量级

| 体系 | 谷劈裂 $E_\mathrm{VS}$ | 典型测量方法 | 来源 |
| --- | --- | --- | --- |
| Si/SiGe 量子点 | 几 $\mu\mathrm{eV}$ – $100\ \mu\mathrm{eV}$ 量级 | 隧穿线随磁场的拐点（磁输运） | [文献 21]([[sources/wang-ning-2025]])，PDF p. 40 |
| Si-MOS 量子点（典型） | $200$–$1000\ \mu\mathrm{eV}$ | 同上，Si/SiO₂ 界面势垒更陡 | [文献 22]([[sources/chu-ning-2025]])，PDF p. 71 |
| Si-MOS 实验报道 | $\sim 170\ \mu\mathrm{eV}$（某样品） | $E_\mathrm{VS}=g\mu_\mathrm{B}B_\mathrm{kink}$ 拐点法，臂杆系数 $\alpha_\mathrm{LP}=0.33$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 92 |
| Si-MOS（meV 量级） | 接近 $\sim 1\ \mathrm{meV}$ 的强电场极限 | 强电场下 $\Gamma_2$ 显著分离 | [文献 22]([[sources/chu-ning-2025]])，PDF p. 44 |
| 应变锗空穴 | 应变直接解除谷简并，$E_\mathrm{VS}$ 不再是关心量 | — | [文献 22]([[sources/chu-ning-2025]])，PDF p. 26 |

<!-- FIGURE: 不同体系谷劈裂量级对比柱状图：Si/SiGe 几十 μeV、Si-MOS 200–1000 μeV、应变锗 Ge/SiGe 价带无谷简并；纵轴为对数能标 -->

## 实验特征 / 测量方法

### 磁输运（magnetotransport）拐点法

最直接的标定方法是看量子点中前几条电子隧穿线随磁场的演化。在固定栅压区间扫描磁场 $B$，把隧穿线斜率发生变化的拐点磁场 $B_\mathrm{kink}$ 与塞曼能对齐（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 92）：

$$
E_\mathrm{VS}=g\mu_\mathrm{B}B_\mathrm{kink}.
$$

文献 15 在 Si-MOS 样品中实际测得 $B_\mathrm{kink}\approx 1.49\ \mathrm{T}$，对应 $E_\mathrm{VS}=170\ \mu\mathrm{eV}$，臂杆系数 $\alpha_\mathrm{LP}=0.33$。第二、三、四个电子隧穿线斜率方向交替变化，恰好可以验证谷–自旋能级结构。该方法依赖 [[fundamentals/charge-stability-diagram|电荷稳定图]] 和精确的臂杆系数标定（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 60–62）。

### 微波谷谱（valley spectroscopy）

把谷激发与微波光子耦合，在 [[circuit-qed/dispersive-readout|色散读出]] 框架下读取谷劈裂对应的频率响应。陈思思 2023 与文献 20 都用片上谐振腔探测三量子点中的谷态与激发能级：在双量子点–腔杂化系统中观测"谷劈裂能级信号"，再结合 [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]] 读取谷–自旋耦合强度（[文献 18]([[sources/gu-sisi-2023]])，PDF pp. 15–16；[文献 20]([[sources/jiang-shunli-2025]])，PDF p. 22）。这种做法的优势在于可同时获得能谷–微波光子的强耦合关系，把"谷物理"和[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]纳入同一张能谱图。

### 通过电荷跃迁观测谷–轨道耦合

隧穿线随栅压扫描的非线性偏移反映电化学势对栅压的杠杆臂，结合电子数依赖的"增加能 $E_\mathrm{add}$" 可推出谷–轨道耦合对能级重整化的贡献——文献 22 指出"硅量子点的增加能随电子数明显下降"与谷–轨道耦合有直接关系。

### 谷劈裂对单发读出的限制

文献 15 在 Si-MOS 中详细测量了"自旋选择性隧穿读出"和"泡利自旋阻塞读出"两条路径：前者受源漏费米面热展宽限制、后者在硅量子点里又受到谷激发态的限制（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 33–34）。当 $E_\mathrm{VS}\lesssim 200\ \mu\mathrm{eV}$ 时，硅中两电子 $(1,1)$–$(0,2)$ 读取的窗口被压回 $E_\mathrm{VS}$ 量级，读出保真度会随温度与磁场条件漂移。这也解释了为什么 Si-MOS 比 Si/SiGe 更易在 $1\ \mathrm{K}$ 量级获得高保真单发读出（[文献 22]([[sources/chu-ning-2025]])，PDF p. 25）。

## 与其他概念的关系

- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]：量子点是谷劈裂的实验室载体；谷劈裂属于量子点内禀属性而非电极调控量。
- [[fundamentals/two-dimensional-carrier-gas|二维载流子气]]：谷自由度本来属于 2DEG/2DHG；引入量子点之后把六重简并逐步解除。
- [[materials-devices/silicon-sige|Si/SiGe]]：通过双轴张应变实现第一级劈裂（$\Delta_4$ vs $\Gamma_2$），但 Si/SiGe 化学界面较"软"，原子台阶会显著抑制谷劈裂。
- [[materials-devices/silicon-mos|Si-MOS]]：Si/SiO₂ 界面更陡，$E_\mathrm{VS}$ 通常比 Si/SiGe 高 5–10 倍，是其可在 $1\ \mathrm{K}$ 量级工作的关键。
- [[materials-devices/strained-germanium|应变锗]]：Ge/SiGe 在价带顶把 LH/HH 简并与谷简并一并解开，因此空穴自旋比特不再受谷劈裂困扰——这是应变锗作为长相干平台的额外优势。
- [[materials-devices/germanium-hut-wire|锗棚顶纳米线]]：自组装 Ge/Si 核壳结构同样把谷简并去除，与应变态锗互补。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]：自旋量子比特的能量基底由"最低谷 × 自旋"张成，谷劈裂决定最低谷与第一激发谷之间的能隙。
- [[qubit-control/singlet-triplet-qubit|S–T₀ 比特]]：在硅双量子点中 $(0,2)$ 态能级差取决于谷与轨道的混合，$E_\mathrm{VS}$ 较小时读出窗口受限。
- [[qubit-control/exchange-interaction|交换相互作用]]：文献 15 指出 Si-MOS 中"$E_\mathrm{VS}$ 在 meV 量级，对应磁场大于 $1\ \mathrm{T}$"——所以高于 $1\ \mathrm{T}$ 的工作磁场下 valley 激发态可以忽略，双比特门哈密顿量可以只保留自旋自由度（[文献 22]([[sources/chu-ning-2025]])，PDF p. 44；[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 27–28）。
- [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]：文献 19 强调，在异质结界面上人为引入原子台阶可以**人为放大**自旋–谷–轨道耦合，从而显著增强基于自旋–轨道耦合的 EDSR 翻转频率（[文献 19]([[sources/yang-jiecheng-2023]])，PDF pp. 22–24）。
- [[qubit-control/electric-dipole-spin-resonance|EDSR]] 的另一种实现：通过电压控制谷相位、间接调节自旋–轨道矩阵元。
- [[circuit-qed/dispersive-readout|色散读出]] 与 [[circuit-qed/cavity-mediated-coupling|腔介导耦合]]：用片上谐振腔探测谷态与谷能级（[文献 18]([[sources/gu-sisi-2023]])，PDF p. 15）。
- [[materials-devices/charge-noise|电荷噪声]]：谷相位随电噪声起伏，会给 $E_\mathrm{VS}$ 引入额外低频涨落；这正是文献 24 所列"能谷劈裂及 SOC 效应的空间涨落"之一（[文献 24]([[sources/liu-zheng-2026]])，PDF p. 38）。
- [[scaling-automation/spin-orbit-torque-control|SOT 操控]]：通过自旋轨道力矩改变杂散场方向，可在不破坏谷劈裂的前提下调节有效自旋–轨道耦合。

## 延伸阅读

- Yang C. H., Rossi A., Ruskov R., et al., "Spin-valley lifetimes in a silicon quantum dot with tunable valley splitting", *Nature Communications* (2013). [DOI: 10.1038/ncomms3069]
- Mi X., Péterfalvi C. G., Burkard G., Petta J. R., "High-resolution valley spectroscopy of Si quantum dots", *Physical Review Letters* (2017). [arXiv: 1703.02671]
- Burkard G., Petta J. R., "Dispersive readout of valley splittings in cavity-coupled silicon quantum dots", *Physical Review B* (2016). [DOI: 10.1103/PhysRevB.94.195305]
- Hollmann A., Struck T., Langrock V., et al., "Large, tunable valley splitting and single-spin relaxation mechanisms in a Si/SiGe quantum dot", *Physical Review Applied* (2020). [DOI: 10.1103/PhysRevApplied.14.034008]

## 论文依据

- [[sources/ref-21|文献 21]]，PDF pp. 39–40：体硅导带六重简并 → 应变后 $\Delta_4$/$\Gamma_2$ → 二维限制与电场下 $\Gamma_2$ 进一步解简并（谷劈裂 $E_\mathrm{VS}$），给出 $a_\mathrm{SiGe}=5.499\ \text{Å}$、$a_\mathrm{Si}=5.431\ \text{Å}$、$m^{*}=0.19\,m_0$，并强调 Si 量子阱与 SiGe 间隔层界面原子台阶会显著抑制谷劈裂。
- [[sources/ref-21|文献 21]]，PDF p. 40：完整 Si/SiGe"三明治"结构参数——10 nm Si 量子阱 + 30 nm SiGe 间隔层 + 2 nm Si 帽层，并指出 SiGe 间隔层厚度（典型 $30$–$60\ \mathrm{nm}$）需在远端散射与栅控强度之间折中。
- [[sources/ref-22|文献 22]]，PDF p. 25：硅导带最小值六倍简并度与"小谷劈裂（$100$–$300\ \mu\mathrm{eV}$）导致准简并自旋和谷态，阻碍多量子比特控制"，明确指出谷自由度必须被解除以维持[[qubit-control/single-spin-qubit|单自旋量子比特]]的高保真操控。
- [[sources/ref-22|文献 22]]，PDF p. 43：硅中自旋弛豫速率分解 $T_1^{-1}=\Gamma_\mathrm{J,SV}+\Gamma_\mathrm{ph,SV}+\Gamma_\mathrm{J,SO}+\Gamma_\mathrm{ph,SO}+\Gamma_\mathrm{const}$，强调谷能级存在会"大大影响自旋寿命"。
- [[sources/ref-22|文献 22]]，PDF pp. 70–71：Si-MOS 点群对称性从 $O_h \to D_{2d} \to C_{2v}$ 的逐步降低过程、$\Gamma_2$ 谷简并度在限制势与电场下的分裂（valley-splitting），典型范围 $200$–$1000\ \mu\mathrm{eV}$。
- [[sources/ref-22|文献 22]]，PDF p. 44：在 Si-MOS 中由于 valley 劈裂在 meV 量级，工作磁场大于 $1\ \mathrm{T}$ 时不考虑 valley 激发态的影响，$(1,1)$–$(0,2)$ 区间哈密顿量可只保留自旋自由度。
- [[sources/ref-22|文献 22]]，PDF p. 70：结构反演不对称性引起的 Rashba 自旋–轨道项 $H_\mathrm{SIA}=\alpha(\sigma_x k_y-\sigma_y k_x)$ 与谷能级简并解除；指出在硅量子点制备过程中点群从 $O_h$ 经 $D_{2d}$ 降至 $C_{2v}$。
- [[sources/ref-15|文献 15]]，PDF pp. 33–34：在硅量子点中，由于谷能级（valley state）的存在，泡利自旋阻塞读取的窗口可能被限制；自旋弛豫热点（hotspots）需要把比特移动到接近平衡点，利用自旋–谷–轨道混合加速初始化。
- [[sources/ref-15|文献 15]]，PDF pp. 60–62：硅量子点中前四个电子隧穿线随磁场变化的实验数据；臂杆系数 $\alpha_\mathrm{LP}=0.33$；谷能级在磁场下进一步劈裂的能级图。
- [[sources/ref-15|文献 15]]，PDF p. 92：磁输运测量得到拐点磁场 $B_\mathrm{kink}\approx 1.49\ \mathrm{T}$，对应 $E_\mathrm{VS}=170\ \mu\mathrm{eV}$ 的硅量子点实验值。
- [[sources/ref-19|文献 19]]，PDF pp. 22–24：能谷是硅导带中的极小值；晶体硅中能谷最低处六重简并；界面台阶引入空间反演不对称性使能谷最低处解简并，进而急剧增强自旋–轨道耦合所诱发的 EDSR 效应；自旋–谷–轨道耦合（"能谷与轨道混合"）的机制同时适用于 Si/SiO₂ 与 Si/SiGe 体系下的量子比特。
- [[sources/ref-20|文献 20]]，PDF p. 22：谐振腔已被用于探测三量子点中的激发态能级以及硅材料中的能谷态；利用辅助比特进行高保真度读出。
- [[sources/ref-20|文献 20]]，PDF p. 69：在三量子点系统中利用腔探测能谷态，同时利用其中一个辅助比特进行高保真度量子比特读取。
- [[sources/ref-18|文献 18]]，PDF pp. 15–16：利用片上腔探测到的谷劈裂能级信号；自旋阻塞导致的隧穿线两支信号；片上谐振腔已用于实现谷劈裂（valley splitting）信号、隧穿耦合（intervalley tunnel coupling）等的读出。
- [[sources/ref-06|文献 6]]，PDF p. 27：电极定义的量子点系统提供电荷、自旋、能谷等多种自由度用于编码，并指出"这些自由度也是退相干通道的来源"。
- [[sources/ref-24|文献 24]]，PDF p. 38：硅基自旋比特的关键工艺挑战之一是"电荷噪声、能谷劈裂及 SOC 效应的空间涨落"会引入额外的校准复杂度。
- [[sources/ref-23|文献 23]]，PDF pp. 16–17：应变锗空穴有效质量可通过 Luttinger-Kohn 哈密顿量给出重空穴/轻空穴有效质量表达式；应变后价带 LH/HH 互换，使得价带顶空穴有效质量低至约 $0.05\,m_0$。
