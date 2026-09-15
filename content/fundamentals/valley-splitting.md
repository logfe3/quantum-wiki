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
date: 2026-09-15
source: QAtlas
qatlas_id: qa_01m0qvj2bpc4tdn7bka6h8cacb
source_updated: 2026-09-09T15:40:50Z
---

<div class="entry-lead">谷劈裂（valley splitting, $E_\mathrm{VS}$）是硅量子点里把 $z$ 方向上残存的能谷二重简并分开的能隙：它决定了最低谷能级用于自旋比特编码时的"清洁度"，过小则准简并的谷态成为泄漏与退相干通道，过大则需更大磁场才能进入自旋–谷解耦区间。</div>

## 物理图像

### 能谷作为导带极小值的简并

硅是间接禁带半导体，导带极小值不位于 $\Gamma$ 点，而是沿六个等价 $\langle 100\rangle$ 方向位移到布里渊区 $k$-空间 $\pm 0.85\,(2\pi/a_\mathrm{Si})$ 附近，在 $k$ 空间表现为六个旋转椭球等能面。每个椭球代表一条谷能级（valley），全部等价的谷态都被电子等概率占据，构成六重简并。电子囚禁在量子点中时，这六个谷态本应一起进入量子点能谱，给自旋比特留下额外的"泄漏门"——所以量子点必须先把六重简并一级一级劈开，最终只留一个谷用于编码）。

### 从体硅到量子点的逐级劈裂

体硅导带六重简并在材料工程与器件工程中分三步被解除：

1. **双轴张应变**。Si/SiGe 异质结中 Si 量子阱被夹在弛豫 SiGe 缓冲层之间，SiGe 晶格常数 $a_\mathrm{SiGe}=5.499\ \text{Å}$（30% Ge 含量）大于 Si 的 $a_\mathrm{Si}=5.431\ \text{Å}$，薄硅层被迫与下方 SiGe 平面晶格常数一致，承受约 $1.25\%$ 的双轴张应变 $\varepsilon_\parallel$。应变使面外方向的两个 $\Delta$ 谷相对于面内四个 $\Delta$ 谷下移，原来的六重简并变为四重 $\Delta_4$（面内）与双重 $\Gamma_2$（面外），且 $\Delta_4$ 远高于 $\Gamma_2$。这一步骤把六重简并降至二重，并解释了为何电子处在 $\Gamma_2$ 谷时面内有效质量仍为 $m^{*}=0.19\,m_0$——这正是 Si/SiGe 量子点迁移率较高的根源。

2. **纵向限制与栅极电场**。栅压在 $z$ 方向施加电场，破坏 $\Gamma_2$ 的二重简并——所得到的能隙就是**谷劈裂** $E_\mathrm{VS}$。谷劈裂之后只剩最低谷用于自旋编码。

3. **磁场打开自旋劈裂**。在外磁场 $B_0$ 下每个谷能级再次按自旋方向劈裂，自旋向上与自旋向下的能级差 $E_z=g\mu_\mathrm{B}B_0$，完成自旋量子比特的能级准备。

<!-- FIGURE: 谷简并逐级解除示意：体硅六重简并 → 应变后 Δ4（四重）+ Γ2（二重）→ 二维限制与电场下 Γ2 进一步劈裂为 E_VS → 磁场下每个谷按自旋再劈裂 -->

### 点群对称性与电场调节

所引论文给出了对称性的语言刻画：在 Si-MOS 制备过程中体系点群从体硅的 $O_h$ 经应变硅的 $D_{2d}$ 降到电极加电势后的 $C_{2v}$，结构反演不对称性（structure inversion asymmetry, SIA）随之出现，对应 Rashba 自旋–轨道项 $H_\mathrm{SIA}=\alpha(\sigma_x k_y-\sigma_y k_x)$，方向总是沿 $z$——这意味着 Rashba 项不产生自旋各向异性。当谷对称性被进一步打破后，$z$ 方向的两个 $\Gamma$ 谷被对称界面电场和台阶劈开，能隙即为谷劈裂 $E_\mathrm{VS}$。文献报告"在 Si-MOS 中的大小通常在 $200$–$1000\ \mu\mathrm{eV}$"。

## 理论模型

### 二能级有效哈密顿量

把 $\Gamma_2$ 两个谷态 $|v_+\rangle$、$|v_-\rangle$ 张成子空间，最低阶的有效哈密顿量为（[materials-devices/silicon-sige|Si/SiGe]] 词条中的写法）

$$
H_v=
\begin{pmatrix}
0 & \Delta_v \\
\Delta_v^{*} & 0
\end{pmatrix}
\qquad
E_\mathrm{VS}=2|\Delta_v|
$$

$\Delta_v$ 是界面势在两个谷态之间的矩阵元，反映了界面锐利度、纵向电场强度与谷相位分布的耦合。$|\Delta_v|$ 越大，$E_\mathrm{VS}$ 越大；界面越"模糊"，$\Delta_v$ 越被相消，$E_\mathrm{VS}$ 越小。

### 从晶体对称性到点群分析

对 Si-MOS 的具体讨论：

| 结构状态 | 点群 | 谷简并 |
| --- | --- | --- |
| 体硅 | $O_h$ | 六重 |
| 应变硅（Si/SiGe、Si-MOS） | $D_{2d}$ | 二重 $\Gamma_2$ |
| 电极加电势、不平整界面 | $C_{2v}$ | 完全劈裂 |

谷劈裂 $E_\mathrm{VS}$ 对应 $\Gamma_2$ 在 $C_{2v}$ 下的能量差。

### 谷劈裂的尺度估计

最低谷波函数被纵向电场压在界面势垒内侧，典型尺度为 Si-MOS 中 $z$ 方向波函数分布 $\sim 1$–$3\ \mathrm{nm}$、Si/SiGe 中 $\sim 5$–$10\ \mathrm{nm}$。当电场把波函数挤得更紧时，$|\Delta_v|\sim \langle v_+|U_\mathrm{int}|v_-\rangle$ 中的积分增大，$E_\mathrm{VS}$ 单调增大——这与"电场可调谷劈裂"的实验规律一致。

### 谷–轨道–自旋三耦合

在硅这类本征自旋–轨道耦合（intrinsic spin–orbit coupling, ISOC）较弱的体系中，谷的存在把自旋翻转的弛豫通道变成了"自旋–谷–轨道耦合"（spin–valley–orbit coupling）。 把自旋弛豫速率写成多个通道之和：

```math
T_1^{-1}=\Gamma_\mathrm{J,SV}+\Gamma_\mathrm{ph,SV}+\Gamma_\mathrm{J,SO}+\Gamma_\mathrm{ph,SO}+\Gamma_\mathrm{const}
```

下标 SO/SV 分别指自旋–轨道与自旋–谷两类混合，J 表示 Johnson 噪声，ph 表示声子噪声，$\Gamma_\mathrm{const}$ 是与磁场无关的本底通道。谷能级的存在**直接放大** $\Gamma_\mathrm{J,SV}$ 与 $\Gamma_\mathrm{ph,SV}$ 两个通道，是硅基自旋比特在某些磁场区间弛豫时间显著下降的重要原因。

### 与读取窗口的耦合

在 [[qubit-control/singlet-triplet-qubit|S–T₀ 比特]] 中，电子通过 $(1,1)$–$(0,2)$ 跃迁读取，读取窗口取决于左量子点中 $S(2,0)$ 与 $T(2,0)$ 的能级差。在硅量子点里，这个"轨道差"本来远大于塞曼劈裂，因此窗口远大于自旋选择性隧穿读出；但若 $(0,2)$ 态的电子被热激发到第一激发谷态，能级差被压回 $\sim E_\mathrm{VS}$ 量级，窗口立即受限——这就是 所说"在硅量子点样品中，由于谷能级的存在，仍然有可能导致读取窗口被限制"的根源。

## 参数与量级

| 体系 | 谷劈裂 $E_\mathrm{VS}$ | 典型测量方法 | 来源 |
| --- | --- | --- | --- |
| Si/SiGe 量子点 | 几 $\mu\mathrm{eV}$ – $100\ \mu\mathrm{eV}$ 量级 | 隧穿线随磁场的拐点（磁输运） | |
| Si-MOS 量子点（典型） | $200$–$1000\ \mu\mathrm{eV}$ | 同上，Si/SiO₂ 界面势垒更陡 | |
| Si-MOS 实验报道 | $\sim 170\ \mu\mathrm{eV}$（某样品） | $E_\mathrm{VS}=g\mu_\mathrm{B}B_\mathrm{kink}$ 拐点法，臂杆系数 $\alpha_\mathrm{LP}=0.33$ | |
| Si-MOS（meV 量级） | 接近 $\sim 1\ \mathrm{meV}$ 的强电场极限 | 强电场下 $\Gamma_2$ 显著分离 | |
| 含 Ge 量子阱全阵列（21 点） | 平均 $179\ \mu\mathrm{eV}$、最大 $540(30)\ \mu\mathrm{eV}$，瑞利分布 | DAPS，Intel Tunnel Falls，$\mathrm{Si_{0.972}Ge_{0.028}}$ 阱 | Marcks 2025 |
| 谷劈裂空间关联长度 | $\ell_C=19.2\ \mathrm{nm}$（≈平均点半径）；局域范围衰减尺度 $6.4(6)\ \mathrm{nm}$ | 连续谷探针自相关拟合 | Marcks 2025 |
| 阵列尺度关联 | $n=6$ 栅反关联、$n=12$ 正关联，总体约 $720\ \mathrm{nm}$ | 排列检验，$p<0.05$ | Marcks 2025 |
| 应变锗空穴 | 应变直接解除谷简并，$E_\mathrm{VS}$ 不再是关心量 | — | |

<!-- FIGURE: 不同体系谷劈裂量级对比柱状图：Si/SiGe 几十 μeV、Si-MOS 200–1000 μeV、应变锗 Ge/SiGe 价带无谷简并；纵轴为对数能标 -->

## 实验特征 / 测量方法

### 磁输运（magnetotransport）拐点法

最直接的标定方法是看量子点中前几条电子隧穿线随磁场的演化。在固定栅压区间扫描磁场 $B$，把隧穿线斜率发生变化的拐点磁场 $B_\mathrm{kink}$ 与塞曼能对齐：

$$
E_\mathrm{VS}=g\mu_\mathrm{B}B_\mathrm{kink}.
$$

 在 Si-MOS 样品中实际测得 $B_\mathrm{kink}\approx 1.49\ \mathrm{T}$，对应 $E_\mathrm{VS}=170\ \mu\mathrm{eV}$，臂杆系数 $\alpha_\mathrm{LP}=0.33$。第二、三、四个电子隧穿线斜率方向交替变化，恰好可以验证谷–自旋能级结构。该方法依赖 [[fundamentals/charge-stability-diagram|电荷稳定图]] 和精确的臂杆系数标定。

### 微波谷谱（valley spectroscopy）

把谷激发与微波光子耦合，在 [[circuit-qed/dispersive-readout|色散读出]] 框架下读取谷劈裂对应的频率响应。陈思思 2023 与 都用片上谐振腔探测三量子点中的谷态与激发能级：在双量子点–腔杂化系统中观测"谷劈裂能级信号"，再结合 [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]] 读取谷–自旋耦合强度）。这种做法的优势在于可同时获得能谷–微波光子的强耦合关系，把"谷物理"和[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]纳入同一张能谱图。

### 通过电荷跃迁观测谷–轨道耦合

隧穿线随栅压扫描的非线性偏移反映电化学势对栅压的杠杆臂，结合电子数依赖的"增加能 $E_\mathrm{add}$" 可推出谷–轨道耦合对能级重整化的贡献—— 指出"硅量子点的增加能随电子数明显下降"与谷–轨道耦合有直接关系。

### 谷劈裂对单发读出的限制

 在 Si-MOS 中详细测量了"自旋选择性隧穿读出"和"泡利自旋阻塞读出"两条路径：前者受源漏费米面热展宽限制、后者在硅量子点里又受到谷激发态的限制。当 $E_\mathrm{VS}\lesssim 200\ \mu\mathrm{eV}$ 时，硅中两电子 $(1,1)$–$(0,2)$ 读取的窗口被压回 $E_\mathrm{VS}$ 量级，读出保真度会随温度与磁场条件漂移。这也解释了为什么 Si-MOS 比 Si/SiGe 更易在 $1\ \mathrm{K}$ 量级获得高保真单发读出。

**尺寸与位置的定量依赖**：谷劈裂不仅由界面台阶决定，还随量子点的尺寸和位置系统变化——有效质量近似+原子级界面建模给出完整的参数图：小点（波函数紧贴界面，台阶效应强）劈裂大而涨落也大；大点劈裂小但更均匀；点在台阶间的位置决定劈裂的相位。这给"谷劈裂的可设计性"给出定量边界：通过点尺寸/位置设计可以规避低劈裂区，但不能完全消除涨落。

![[assets/figures/fundamentals-valley/5d8d5a8dd960dcf78a539c492beb995739405a737fdbdc7df4866c25c7418712.jpg]]

*谷劈裂的尺寸/位置依赖：有效质量+原子界面的联合建模——小点劈裂大但涨落大，大点均匀但劈裂小。图源：arXiv:2310.17393，Fig. 1。*

![[assets/figures/fundamentals-valley/ad3f8be932cbe54319264e7fcf4f74d41ec1bd5f684c4029aa262f060c329c3a.jpg]]

*台阶位置的相位效应：点在台阶间的位置决定劈裂——可设计性的定量边界。图源：arXiv:2310.17393，Fig. 2。*

### 自旋-谷弛豫寿命与高温运行

上节的静态建模之外，谷劈裂的两个动态维度：

**自旋-谷弛豫**：激发谷态的寿命 $T_{1v}$ 随谷劈裂可调的测量——谷劈裂减小时，基谷-激发谷的声子辅助弛豫通道打开，$T_{1v}$ 从毫秒级急剧缩短。这把"谷劈裂多大才够"从经验规则（$>k_BT$）升级为动力学定量：弛豫率随劈裂的依赖直接标定泄漏通道的强度。

![[assets/figures/fundamentals-valley/35eed7a969d518c1025d6eb50c0fc9eb3f45af23bdbd1088a6d1620f395976a1.jpg]]

*自旋-谷寿命的可调测量：$T_{1v}$ 随谷劈裂的变化——劈裂减小打开声子辅助弛豫通道，寿命急剧缩短。图源：Yang et al. (2013)，Fig. 1。*

![[assets/figures/fundamentals-valley/52b96c31b61a6be145162dbfaaf6446a0797de16306820b89d4839d4ae080ebf.jpg]]

*弛豫率的劈裂依赖：泄漏通道的动力学定量——"劈裂多大才够"的定量标定。图源：Yang et al. (2013)，Fig. 2。*

**限域驱动的高温劈裂**：埋层硅量子阱中，强限域势（垂直方向的窄阱）把谷劈裂推到 **4K 以上**（$>4,k_BT$@4K）——高温运行（对照超导比特的 200 mK 路线）在半导体侧的谷劈裂条件被满足。限域增强的机理：窄阱提高界面处的波函数振幅，台阶散射效应增强。

![[assets/figures/fundamentals-valley/6c8a9993762250db34f759aa8a608079dac89efb16f1ce3b55ab02fb0b4996ce.jpg]]

*限域驱动的高劈裂：埋层量子阱的强限域——谷劈裂超过 4K 热能，高温运行条件满足。图源：arXiv:2607.09570，Fig. 1。*

![[assets/figures/fundamentals-valley/77f8488e62760f43bdf3be6ae3f8b60612f257e0ae2d5491174e4ad272c34098.jpg]]

*机理与验证：窄阱增强界面波函数振幅——台阶散射效应增强的定量。图源：arXiv:2607.09570，Fig. 2。*

### 跨阵列的介观关联：合金无序的统计指纹（Marcks 2025）

单点、单器件的谷劈裂测量之上，还有"跨阵列均匀性"这一可扩展性维度：多比特器件横跨介观距离，谷劈裂是否处处够大直接决定良率与电子穿梭方案。Marcks 等人在 Intel 制造的 Tunnel Falls 一维量子点阵列（1.3 μm 沟道、栅间距 60 nm、最多 12 点、可成点位置 21 个）上系统回答了这个问题——量子阱为含 Ge 的 $\mathrm{Si_{0.972}Ge_{0.028}}$（4.6 nm 厚，夹在 $\mathrm{Si_{0.7}Ge_{0.3}}$ 中，参数按"最大化平均谷劈裂"的理论建议选取）。

测量用**失谐轴脉冲谱学**（detuning axis pulsed spectroscopy, DAPS）在双点组态下读单电子谷劈裂；更关键的是**连续谷探针**技术：不把谷劈裂当作量子点的属性，而是平移目标点势阱，让电子波函数沿沟道连续扫过材料——谷劈裂随位置 $x_\mathrm{dot}$ 起伏的曲线直接探测底层无序。对曲线做自相关 $C_{E_V}$ 并拟合理论模型，得到**关联长度 $\ell_C = 19.2\ \mathrm{nm}$，与该数据集的平均点半径 19 nm 吻合**：观测到的 $E_V$ 涨落来自电子波函数对更快材料涨落的平均，探针分辨率受点半径限制。联合概率密度分析进一步给出：给定某点谷劈裂后，间距 $\Delta x$ 处谷劈裂的预期范围按 $6.4(6)\ \mathrm{nm}$ 的尺度指数衰减，在 $\Delta x\to\ell_C$ 时饱和——局域合金无序关联在波函数尺度内消逝。

![[assets/figures/valley-splitting-correlations/marcks2025-fig2-daps.jpg]]

*DAPS 谷劈裂测量：(a) 双量子点单电子能级示意与脉冲时序——沿失谐轴脉冲越过极化线，谷激发态的热占据随谷劈裂变化反映到电荷态统计上；(b) 测得谱线用双洛伦兹拟合提取 $E_V$，误差由谱线线宽给出。图源：Marcks et al. (2025)，Fig. 2。*

跨全阵列 21 个点的统计：平均谷劈裂 $\overline{E_V}=179\ \mu\mathrm{eV}$、最大 $540(30)\ \mu\mathrm{eV}$，直方图符合合金无序主导理论预言的瑞利分布（有限抽样下的偏斜属预期行为）；$E_V$ 与点半径无系统依赖，确认无序主导而非尺寸主导。阵列尺度的归一化自相关 $C_{V V,n}$ 在相隔 $n=6$ 个栅（负关联）与 $n=12$ 个栅（正关联）处出现最大幅度，对应约 720 nm 的总体关联长度——用**排列检验**（permutation test）评估显著性：把数据随机重排生成零分布，真实统计量落在零分布中的位置给出 p 值；以 $p=0.05$ 为界，$n=6$ 的反关联比 $n=12$ 的关联更显著。亚 100 nm（波函数尺度）与 >1 μm（器件尺度）两个长度尺度上的关联都与合金无序主导的模拟一致。

![[assets/figures/valley-splitting-correlations/marcks2025-fig5-full-array.jpg]]

*全阵列谷劈裂：(a) 21 个量子点的 $E_V$（误差由 DAPS 线宽给出）；(b) 直方图与理论瑞利分布（实线）的对照；(c) $E_V$ 与电子半径无系统依赖；(d) 空间序列的傅里叶变换无长程振荡分量；(e) 归一化自相关 $C_{V V,n}$，$n=6$ 反关联、$n=12$ 正关联最大；(f) 排列检验 p 值。图源：Marcks et al. (2025)，Fig. 5。*

![[assets/figures/valley-splitting-correlations/marcks2025-fig6-permutation.jpg]]

*排列检验的显著性评估：(a) 随机重采样一维序列上的自相关零检验分布，(b) 对 $n=6,12$ 的零分布（直方图）与真实数据统计量（绿色虚线）对照，阴影面积为 p 值。图源：Marcks et al. (2025)，Fig. 6。*

对器件设计的含义：含百分之几 Ge 的量子阱确实抬高平均谷劈裂，但无序同样留下低劈裂"口袋"，会压低制造良率并威胁穿梭；跨栅与跨器件尺度的关联意味着相邻比特的谷致误差**不独立**，阵列级纠错与建模需要介观统计输入。

### 计算框架的第三块与构型扩展

**扩展区有效质量近似**（含应变）：第三种计算框架——有效质量近似（词条已有）在扩展区（布里渊区边界）处理谷间耦合，应变作为形变势进入。三种框架（有效质量/原子界面/扩展区+应变）对照使用，覆盖不同精度-效率权衡。

![[assets/figures/fundamentals-valley/df3065fb9eef651738ff0a9e582552af589e41a2a5e2c49de1d915aefddabe18.jpg]]

*扩展区有效质量近似：含应变的谷劈裂计算——第三种理论框架。图源：arXiv:2309.05219，Fig. 1。*

![[assets/figures/fundamentals-valley/f22c7b08aaee3a6b85fe70228dcb6b686294cd371e40d41f4897b3ff4171ed59.jpg]]

*框架验证：三种方法的劈裂预测对照。图源：arXiv:2309.05219，Fig. 2。*

**硅角点的电场调谐**：纳米线角点（corner dot）构型——电场直接调谐谷劈裂，构型自由度+电场自由度的双重调控。

![[assets/figures/fundamentals-valley/4a2f942a5871e7d10ae415fed65455f57c2c5670401bfc631d7597db482bef42.jpg]]

*硅角点的谷劈裂电场调谐：纳米线角构型——构型+电场双重调控。图源：Ibberson et al. (2018)，Fig. 1。*

![[assets/figures/fundamentals-valley/519916958e7e4a11f7968864372e18e3ba1d206ab3b989e7f7907392a9c374ee.jpg]]

*角点的调谐范围：电场扫描下的劈裂变化。图源：Ibberson et al. (2018)，Fig. 2。*

**非微扰多谷有效质量理论**（Gamble 2016）：第四种框架——波函数的动量空间支撑被限制在两个低 lying 导带极小附近，谷间耦合非微扰地进入，配合静电模拟可直接算真实器件构型，且支持对随机界面的**高通量采样**。用它同时模拟 SNL 与 UNSW 两个单电子 Si-MOS 实验的谷劈裂-栅压曲线，发现理想平整界面下需要给全部电极加约 $-1.8\ \mathrm{V}$ 的统一偏移 $V_0$ 才能贴合数据——远超典型阈值电压漂移，本身即成为界面无序存在的定量判据；引入无序界面采样后理论与实验定量一致。

![[assets/figures/valley-splitting-mvemt/gamble2016-fig2-mvemt-vs-experiment.jpg]]

*多谷有效质量理论与单电子 Si-MOS 实验的对照：(a) SNL 器件、(b) UNSW 器件，点为实验（误差带），曲线为用实验电压加 $0\sim-2\ \mathrm{V}$ 统一偏移 $V_0$ 生成的理论族；最佳拟合 $V_0\approx-1.8\ \mathrm{V}$ 远超典型阈值漂移，指向界面无序。右轴为对应的垂直电场。图源：Gamble et al. (2016)，Fig. 2。*

## 与其他概念的关系

- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]：量子点是谷劈裂的实验室载体；谷劈裂属于量子点内禀属性而非电极调控量。
- [[fundamentals/two-dimensional-carrier-gas|二维载流子气]]：谷自由度本来属于 2DEG/2DHG；引入量子点之后把六重简并逐步解除。
- [[materials-devices/silicon-sige|Si/SiGe]]：通过双轴张应变实现第一级劈裂（$\Delta_4$ vs $\Gamma_2$），但 Si/SiGe 化学界面较"软"，原子台阶会显著抑制谷劈裂。
- [[materials-devices/silicon-mos|Si-MOS]]：Si/SiO₂ 界面更陡，$E_\mathrm{VS}$ 通常比 Si/SiGe 高 5–10 倍，是其可在 $1\ \mathrm{K}$ 量级工作的关键。
- [[materials-devices/strained-germanium|应变锗]]：Ge/SiGe 在价带顶把 LH/HH 简并与谷简并一并解开，因此空穴自旋比特不再受谷劈裂困扰——这是应变锗作为长相干平台的额外优势。
- [[materials-devices/germanium-hut-wire|锗棚顶纳米线]]：自组装 Ge/Si 核壳结构同样把谷简并去除，与应变态锗互补。
- [[materials-devices/bilayer-graphene-quantum-dot|双层石墨烯量子点]]：另一种"谷物理"——$K^\pm$ 谷劈裂由谷 g 因子 $g_v\mu_B B$ 给出且 $g_v$ 随点尺寸静电可调 4.5 倍，与硅的界面耦合机制互为对照。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]：自旋量子比特的能量基底由"最低谷 × 自旋"张成，谷劈裂决定最低谷与第一激发谷之间的能隙。
- [[qubit-control/singlet-triplet-qubit|S–T₀ 比特]]：在硅双量子点中 $(0,2)$ 态能级差取决于谷与轨道的混合，$E_\mathrm{VS}$ 较小时读出窗口受限。
- [[qubit-control/exchange-interaction|交换相互作用]]： 指出 Si-MOS 中"$E_\mathrm{VS}$ 在 meV 量级，对应磁场大于 $1\ \mathrm{T}$"——所以高于 $1\ \mathrm{T}$ 的工作磁场下 valley 激发态可以忽略，双比特门哈密顿量可以只保留自旋自由度）。
- [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]： 强调，在异质结界面上人为引入原子台阶可以**人为放大**自旋–谷–轨道耦合，从而显著增强基于自旋–轨道耦合的 EDSR 翻转频率。
- [[qubit-control/electric-dipole-spin-resonance|EDSR]] 的另一种实现：通过电压控制谷相位、间接调节自旋–轨道矩阵元。
- [[circuit-qed/dispersive-readout|色散读出]] 与 [[circuit-qed/cavity-mediated-coupling|腔介导耦合]]：用片上谐振腔探测谷态与谷能级。
- [[materials-devices/charge-noise|电荷噪声]]：谷相位随电噪声起伏，会给 $E_\mathrm{VS}$ 引入额外低频涨落；这正是 所列"能谷劈裂及 SOC 效应的空间涨落"之一。
- [[scaling-automation/spin-orbit-torque-control|SOT 操控]]：通过自旋轨道力矩改变杂散场方向，可在不破坏谷劈裂的前提下调节有效自旋–轨道耦合。


## 参考文献

- 硅量子点中的谷劈裂与谷物理：[[references/zwanenburg-2013|Zwanenburg et al., RMP 85, 961 (2013)]]、[[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]。
- 跨阵列谷劈裂关联与合金无序统计：Marcks, J. C. et al. *Valley Splitting Correlations Across a Silicon Quantum Well Containing Germanium* (2025). arXiv:2504.12455（QAtlas 缓存：2504.12455）。
- 非微扰多谷有效质量理论与单电子 Si-MOS 对照：Gamble, J. K. et al. *Valley splitting of single-electron Si MOS quantum dots* (2016). arXiv:1610.03388（QAtlas 缓存：1610.03388）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
