---
title: Si-MOS 量子点
description: 在硅–氧化层界面用积累栅和势垒栅定义的电子量子点平台，与经典 CMOS 工艺天然兼容。
aliases:
 - 硅MOS量子点
 - MOS量子点
 - SiMOS
tags:
 - 材料与器件
 - 硅
 - MOS
date: 2026-09-08
---

<div class="entry-lead">Si-MOS 量子点沿用金属–氧化物–半导体的积累思想：正栅压把电子吸引到 Si/SiO₂ 界面，重叠栅或多层栅再定义势阱和隧穿势垒，配合[[fundamentals/constant-interaction-model|常相互作用模型]]完成单电子加载与读出。</div>

## 物理图像与基本结构

Si-MOS（silicon metal-oxide-semiconductor）量子点直接复用工业 MOSFET 的积累模式：硅衬底上覆盖一层热生长 SiO₂，氧化层上方沉积一组金属栅极。给栅极加正电压后，能带向下弯曲，电子被吸引到 Si/SiO₂ 界面积累，形成[[fundamentals/two-dimensional-carrier-gas|二维电子气]]（2DEG）；再让相邻栅极把 2DEG 在面内切成势阱和势垒，便得到栅控量子点。这条路线与经典 CMOS 工艺完全兼容，可以用 300 mm 晶圆、成熟的光刻/薄膜/欧姆接触工艺制造，是目前最具扩展潜力的自旋量子比特载体之一。

器件结构上，论文采用三层堆叠栅极：

- 蓝色电极——**限制栅极**（confine gate）：沿垂直于引线方向约束电子气宽度，实验中通常置零。
- 绿色电极——**引线栅极**（lead gate）：与离子注入区（n++）搭接，作为量子点的电子库；正压开启时下方积累 2DEG。
- 粉色电极——**柱塞电极**（plunger gate）：定义量子点中心位置与势阱深度，相当于[[fundamentals/electrochemical-potential|电化学势]]的精细调节旋钮。
- 黄色电极——**势垒栅极**（barrier gate）：夹在量子点之间或量子点与电子库之间，控制点内–点间以及点–电子库的[[fundamentals/tunnel-coupling|隧穿耦合]]。

由于 Si/SiO₂ 界面是天然势垒而不是外延异质结，2DEG 的迁移率通常只有 $10^3$–$10^4\ \mathrm{cm^2/(V\cdot s)}$（对比 GaAs/AlGaAs 可达 $10^7$），同时硅较大的有效电子质量 ($m^*=0.19\,m_e$ vs. GaAs 的 $0.067\,m_e$) 迫使电极宽度压缩到 30–35 nm，使得调谐和栅极对准更加复杂）。但换来的好处是显著的：强界面约束给出 0.2–1 meV 的谷劈裂（详见下文），让量子比特可以在 1 K 量级的较高温度下工作，从而接入低温 CMOS 控制电路，走向大规模集成。

## 理论模型

### 常相互作用模型与电化学势

Si-MOS 中[[fundamentals/semiconductor-quantum-dot|量子点]]的[[fundamentals/coulomb-blockade|库仑阻塞]]、[[fundamentals/charging-energy|充电能]]与[[fundamentals/coulomb-diamond|库仑菱形]]全部沿用[[fundamentals/constant-interaction-model|常相互作用模型]]（constant interaction model, CI 模型）。设量子点与源、漏、栅的总电容为 $C_\Sigma=C_S+C_D+C_G$，含 $N$ 个电子的总能量为

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_S+C_D V_D+C_G V_G\right]^2}{2C_\Sigma}+\sum_{n=1}^{N}E_n
$$

其中 $N_0|e|$ 补偿异质结施主的正电荷背景，$E_n$ 是单粒子束缚能级。电化学势与加电子能（addition energy）分别为

$$
\mu(N)=U(N)-U(N-1)=\left(N-N_0-\tfrac{1}{2}\right)E_C-\frac{E_C}{|e|}\left(C_S V_S+C_D V_D+C_G V_G\right)+E_N
$$

$$
E_\mathrm{add}(N)=\mu(N+1)-\mu(N)=E_C+\Delta E
$$

其中 $E_C=e^2/C_\Sigma$ 为充电能，$\Delta E=E_{N+1}-E_N$ 为单粒子能级间距。[[fundamentals/coulomb-blockade|库仑阻塞]]条件 $\mu_S\ge\mu(N)\ge\mu_D$ 与[[fundamentals/coulomb-diamond|库仑菱形]]边界、栅电容 $C_G$、杠杆臂 $\alpha=C_G/C_\Sigma$ 的提取方法均与[[fundamentals/coulomb-blockade|库仑阻塞]]词条一致。库仑菱形顶点给出充电能 $E_C\approx 1\ \mathrm{meV}$ 量级，由此可推出 $C_\Sigma\sim 100\ \mathrm{aF}$、量子点等效尺寸约 30–50 nm 的横向尺度。

### 双点两比特哈密顿量

Si-MOS 双量子点的两比特操控由海森堡交换主导，自旋动力学在 [[qubit-control/single-spin-qubit|Loss–DiVincenzo（LD）比特]] 编码下的总哈密顿量为

$$
H(t)=\tfrac{1}{4}\sum_{\langle i,j\rangle}J_{ij}(t)\,\boldsymbol{\sigma}_i\cdot\boldsymbol{\sigma}_j+\tfrac{1}{2}\sum_i g_i\mu_B\,\mathbf{B}_i\cdot\boldsymbol{\sigma}_i
$$

其中 $J_{ij}(t)$ 由失谐 $\epsilon$ 与中间势垒的隧穿耦合 $t_c$ 共同决定。在 [[fundamentals/double-quantum-dot|双量子点]] 的失谐–隧穿表象下，[[qubit-control/exchange-interaction|交换相互作用]]通常近似为

$$
J(\epsilon)\approx J_0\exp\!\left(\epsilon/\epsilon_0\right)
$$

即失谐增加时交换指数衰减。实验上通过高频频谱将 $J$ 的开/关比调制到 ~30 量级，对应论文 DCZ 门中 $J_\mathrm{on}/h\approx10\ \mathrm{MHz}$、$J_\mathrm{off}\approx300\ \mathrm{kHz}$。

### 谷物理

硅的导带最小值有六度简并，对称性破缺后残留两个 $\Gamma$ 谷，二者之间由界面电场与原子台阶引起的能级差称为**谷劈裂**（valley splitting, $E_\mathrm{v}$）。在 Si-MOS 中由于强界面约束与 $\langle 001\rangle$ 方向电场，$E_\mathrm{v}$ 通常在 0.2–1 meV，是 Si/SiGe 的 5–10 倍。低的谷简并度有两个直接后果：

- 自旋阻塞更稳固，[[qubit-control/singlet-triplet-qubit|S–T₀]] 比特初始化泄漏更少；
- 比特可在更高温度下运行（~1 K），让片上低温 CMOS 控制成为可能。

代价是谷能级仍参与自旋轨道耦合过程，需要在能级图上明确区分"谷态"与"轨道态"，否则会给 EDSR 与读出带来额外泄漏通道。

单电子 Si-MOS 谷劈裂随栅压/垂直电场的调谐行为可用非微扰多谷有效质量理论定量复现（SNL 与 UNSW 两组器件同框架模拟、理想平整界面需约 $-1.8\ \mathrm{V}$ 统一电压偏移才能拟合、由此判定界面无序主导，详见[[fundamentals/valley-splitting|谷劈裂]]词条"非微扰多谷有效质量理论"段）。

### 本征与合成自旋轨道耦合

硅的本征自旋轨道耦合（intrinsic spin–orbit coupling, ISOC）很弱，无法靠纯电场直接驱动自旋。引入 [[materials-devices/micromagnet|微磁体]] 后，磁场梯度与电场驱动共同合成一个有效自旋轨道场，称为合成自旋轨道耦合（synthetic spin–orbit coupling, SSOC）。在 $D_{2d}$（界面反演不对称）加 $C_{2v}$（结构反演不对称）点群下，线性近似给出两个等价描述：

$$
H_\mathrm{IIA}=\beta(\sigma_x k_y+\sigma_y k_x),\qquad H_\mathrm{SIA}=\alpha(\sigma_x k_y-\sigma_y k_x)=\alpha(\boldsymbol{\sigma}\times\mathbf{k})_z
$$

其中 $\beta$ 由界面原子台阶粗糙度决定（相邻光滑台阶两侧 $\beta$ 符号相反），$\alpha$ 由金属电极引起的表面电场决定。前者携带面内各向异性、后者只贡献 Rashba 型 $z$ 方向，因此**只有 $\beta$ 项在 $g$ 因子中引入各向异性**：

$$
\delta g_\pm\approx 2\frac{|e|\langle z\rangle}{\mu_B\hbar}\,(-\alpha+\beta\sin 2\phi)
$$

其中 $\phi$ 为外磁场与 $[100]$ 晶向夹角。这一表达式是论文"微磁体诱导合成自旋轨道各向异性"工作的核心，它把**品质因子的最优工作点**从传统 $z$ 轴方向解耦——外磁场倾角可作为额外调控自由度，使 Rabi 频率与品质因子的最优配置不再受晶格方向限制。

## 参数与量级

| 量 | 典型值 | 说明 |
| --- | --- | --- |
| 衬底 | 浮区生长 8 英寸本征硅 + 70–140 nm 同位素纯化 ${}^{28}\mathrm{Si}$ 层 | ${}^{29}\mathrm{Si}$ 剩余约 60 ppm |
| 氧化层 | 热生长 SiO₂ 或堆叠 Al₂O₃（30 nm） | 决定有效电子质量与谷劈裂 |
| 电极宽度 | 30–35 nm | 由电子束光刻定义 |
| 2DEG 迁移率 | $10^3$–$10^4\ \mathrm{cm^2/(V\cdot s)}$ | 低于 GaAs、Si/SiGe，工艺可优化 |
| 充电能 $E_C$ | ~1 meV | 与总电容 $C_\Sigma\sim 100\ \mathrm{aF}$ 对应 |
| 谷劈裂 $E_\mathrm{v}$ | 0.2–1 meV | 强界面约束，远高于 Si/SiGe |
| 塞曼能级差 $\Delta E_z$（微磁体样品） | ~100 MHz（$\sim 0.4\ \mu\mathrm{eV}$） | 用于 CZ 门条件 |
| $J_\mathrm{on}/J_\mathrm{off}$ 开关比 | $\sim 30$（$J_\mathrm{on}/h=10\ \mathrm{MHz}$，$J_\mathrm{off}=300\ \mathrm{kHz}$） | DCZ 门工作点 |
| 相干时间 $T_2^*$ | ~624 ns | 双量子点区域 Rabi 振荡外推 |
| 单比特门保真度 | $>99.9\%$（单比特）、$\sim 99\%$（两比特，业界基准） | 同位素纯化硅 + 微磁体 + 调谐优化 |

<!-- FIGURE: Si-MOS 三层堆叠栅极截面：引线栅、限制栅、柱塞栅、势垒栅与 Si/SiO₂ 界面的相对位置，标注 SET 与 DQD 区域。 -->

## 实验特征与测量

### 输运与电荷探测

Si-MOS 量子点体系按探测方式分为三类：

1. **直流输运**：给源漏加 0.05 mV 偏压，直接读取 $I_\mathrm{SD}$；适合多电子区，少电子区电流小于 $10^{-16}\ \mathrm{A}$ 不可测。
2. **锁相调制测量**：在源漏上叠加 73.37 Hz、约 1.6 mV 的交流激励，锁相放大器提取信号；信号量更大但无法单发读出。
3. **直流感应探测**：通过[[readout-measurement/single-shot-readout|单发读出]]相邻的[[fundamentals/semiconductor-quantum-dot|单电子晶体管]]（SET）电流 $I_\mathrm{SET}$ 变化感知待测点的电荷态。在 Si-MOS 中 SET 的灵敏度 $S\propto d^{-3}$，要求 SET 与待测点距离 $<100\ \mathrm{nm}$。

少电子区通常采用后两种方式。论文中比特读出使用 [[qubit-control/single-spin-qubit|单电子 LD 比特]] 的[[readout-measurement/single-shot-readout|Elzerman]] 能量选择读出：通过把右量子点与源费米面对齐，让自旋向上电子隧穿离开量子点、自旋向下留在点内，再以 SET 探测尾电流差异。

### 自旋单发读出

为减小阈值漂移和电荷跳跃带来的误分类，论文提出阈值无关的单发读出后处理方法，把测得的实时轨迹直接按高斯混合聚类得到自旋向上/向下的可见度与保真度。该方法在 150 mK 电子温度下给出 $\sim 0.7$ 的可见度，是 Si-MOS 自旋单发读出的标准方案。

### RF-SET 与劈裂栅极

为提升读出速率与带宽，论文提出**劈裂栅极**（split gate）方案：把原来单层的引线栅极拆分为引线栅极和积累栅极两部分，射频信号从积累栅极打入，引线栅极保持零电压以关闭下方的 2DEG 通道。这一改动把 $C_g$ 从泄露通道变为耦合通道，使阻抗匹配对 $C_g$ 的容忍范围从 $\sim 0$ 扩展到 0.1–5 pF，从而把离子注入区到 SET 中心的距离放宽到 $150\ \mu\mathrm{m}$，为大规模集成腾出芯片中心面积。模拟使用 ADS（Advanced Design System）电路仿真，参数典型值 $L=860\ \mathrm{nH}$、$C_t=0.48\ \mathrm{pF}$、$C_m=40\ \mathrm{pF}$、$R_\mathrm{lead}=8.3\ \mathrm{M\Omega}$，对应谐振频率 $f_\mathrm{res}=160.1\ \mathrm{MHz}$。

实测结果：

- 电荷读出保真度 $F_\mathrm{charge}=99.86\%$（140 ns 积分时间）；
- 信噪比 $\mathrm{SNR}=5.72$；
- 隧穿率（随机电报信号 RTS）$f_\mathrm{RTS}=145.7\ \mathrm{kHz}$；
- 测量带宽 $>2\ \mathrm{MHz}$；
- 与同样基于欧姆方法的 Ge/SiGe 器件相比（SNR >10，35 dB 信号量），Si-MOS 因 $R_\mathrm{QD}\sim 0.5$–$1\ \mathrm{M\Omega}$ 较大需用匹配电容 $C_m$ 调谐，过耦合仍可调到阻抗匹配。

<!-- FIGURE: 劈裂栅极 RF-SET 结构示意图，引线栅与积累栅分开，标注离子注入区到 SET 中心的 150 μm 距离与阻抗匹配网络。 -->

### 单比特操控

Si-MOS 中的单比特操控主要通过两种途径：

- **电子自旋共振**（ESR, electron spin resonance）：通过微波天线在量子点附近产生振荡磁场；Koppens 2006 在 GaAs 中首次实现相干单自旋 ESR 控制，MOS 体系随后亦广泛沿用。
- **电偶极自旋共振**（EDSR, electric-dipole spin resonance）：把 [[materials-devices/micromagnet|微磁体]] 集成在量子点附近，提供杂散梯度场，再通过微波电场驱动电子位移，借助 SSOC 完成自旋翻转。优点是全电操控、可避免天线在极低温下的加热；缺点是杂散磁场引起退相干、磁化轴不能完全沿外磁场。

论文进一步利用快速绝热通道（rapid adiabatic passage）和啁啾波形快速标定 ESR 频率并观察 [[qubit-control/rabi-oscillation|Rabi 振荡]]；在双量子点对称点演示 [[scaling-automation/flopping-mode-qubit|翻转模式]] EDSR，使 Rabi 频率与品质因子相比传统方案提高约一个数量级。

### 两比特门

两比特操控依赖 [[qubit-control/exchange-interaction|交换相互作用]] $J(\epsilon)$。论文在 Si-MOS 双量子点上实现了两种协议：

- **$J$ 常开 CNOT**：把 $J$ 固定在甜点处，单比特旋转与两比特纠缠共享同一工作点；通过对系统哈密顿量本征态演化做解析推导，构建相位误差补偿表，精确校准四个基（$|\!\!\downarrow\downarrow\rangle,|\!\!\downarrow\uparrow\rangle,|\!\!\uparrow\downarrow\rangle,|\!\!\uparrow\uparrow\rangle$）上的累积相位。该方案摆脱了对部分脉冲波形整形的需求，并与虚拟 CZ 门兼容。
- **动态解耦 CZ（DCZ）**：在 CZ/2 演化（$t=50\ \mathrm{ns}$，$J/h=10\ \mathrm{MHz}$）之间插入 $X_{\pi/2}$ 重新聚焦脉冲，使 Stark 频移带来的额外相位自动抵消，数学形式为 $\mathrm{DCZ}=U_{\mathrm{CZ}/2}\,X_{\pi/2}\,X_{\pi/2}\,U_{\mathrm{CZ}/2}$。随机基准测试给出 DCZ 门保真度 83.4%（对应 CZ/2 92.2%）、单比特门平均保真度 99.5%、Bell 态保真度 84.1%（消除 SPAM 后 93.7%）。

<!-- FIGURE: Si-MOS 双量子点电荷稳定图与两比特能谱，标注四个 ESR 共振峰位置与 $\Delta E_z$、$J$ 的相对大小。 -->

## 优势与挑战

**优势**

- 与 [[materials-devices/gaas-algaas|GaAs/AlGaAs]] 相比，自然 Ga、As 核自旋完全消除，配合 ${}^{28}\mathrm{Si}$ 纯化使[[qubit-control/rabi-oscillation|Rabi 振荡]]外推的 $T_2^*$ 从 <100 ns 提升到数百纳秒到数十微秒量级。
- 与 [[materials-devices/silicon-sige|Si/SiGe]] 相比，Si-MOS 中 Si/SiO₂ 界面在 $\langle 001\rangle$ 方向约束更强，谷劈裂高出 5–10 倍，允许 1 K 量级温度运行并集成低温 CMOS 控制电路。
- 与 CMOS 工业全兼容，可直接使用 300 mm 晶圆产线，理论上可扩展到数百万量子比特规模。这条路线的保真度里程碑已兑现：300 mm 代工（DUV/电子束混合工艺 + 20 nm 热氧化界面 + 800 ppm ²⁸Si 外延）的 Si-MOS 比特经 RBM/GST 双基准测得 99.9% 单比特控制保真度（1 Hz 处电荷噪声仅 0.4 µeV）——见[[qubit-control/single-qubit-gate|单比特门]]词条"300 mm 晶圆厂路线"一节。

**挑战**

- 氧化层界面粗糙、固定电荷与陷阱带来[[materials-devices/interface-defects|界面缺陷]]与[[materials-devices/charge-noise|电荷噪声]]，进一步通过自旋轨道耦合转译为[[qubit-control/ramsey-interferometry|Ramsey]] 退相位；
- 多层细栅（30–35 nm）增加寄生电容、工艺对准和射频布线难度；
- 中间势垒栅极缺少高频调控线，使[[qubit-control/cnot-gate|CZ]] 门的精密开关受限于直流线路的响应；
- 谷能级虽然较高，但仍参与自旋轨道耦合，需要在能级图中严格区分"谷态"与"轨道态"以免引入初始化/读出泄漏。

## 与其他概念的关系

- [[fundamentals/constant-interaction-model|常相互作用模型]]是 Si-MOS 中量子点充电能与电化学势的标准描述，决定了库仑阻塞、库仑菱形和栅电容提取方案。
- [[fundamentals/two-dimensional-carrier-gas|二维电子气]]在 Si-MOS 中通过正栅压积累形成，与 GaAs 异质结的调制掺杂方式形成对照。
- [[materials-devices/micromagnet|微磁体]]在 Si-MOS 中主要提供 SSOC 的合成场，使 EDSR 成为标准操控方案，并显著影响 $g$ 因子的各向异性。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]是 Si-MOS 最常见的编码，配合 EDSR 或 ESR 完成单比特门；多比特扩展使用[[qubit-control/exchange-interaction|交换相互作用]] $J$。
- [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]在 Si-MOS 中通常依靠微磁体梯度场实现，是替代 ESR 的全电操控方案。
- [[qubit-control/cnot-gate|CNOT 门]]的常开协议与 [[qubit-control/dynamical-decoupling|动态解耦]] CZ（DCZ）在 Si-MOS 双量子点中都已实现，分别对应相位补偿与脉冲解耦两种保真度提升路线。
- [[readout-measurement/single-shot-readout|单发读出]]沿用 Elzerman 能量选择读出，配合 [[readout-measurement/threshold-independent-readout|阈值无关读出]]后处理获得稳定可见度。
- [[readout-measurement/rf-reflectometry|射频反射读出]]在 Si-MOS 中需要使用 [[scaling-automation/spin-orbit-torque-control|劈裂栅极]]方案绕开引线栅极的射频泄露。硅中积累型栅传感器的第一个系统实证（Rossi 2017，$f_R=343\ \mathrm{MHz}$、杠杆臂约 $0.1\ \mathrm{eV/V}$）见[[readout-measurement/gate-based-sensing|栅极射频传感]]。
- [[qubit-control/singlet-triplet-qubit|S–T₀]] 比特在 Si-MOS 中受惠于较高谷劈裂，初始化与读出泄漏更少。ST 自由感应衰减的角度测绘进一步定量了这一优势：SiMOS 的谷劈裂比 Si/SiGe 高 2–5 倍、自旋–谷耦合大一个量级（更强的界面限域所致），而各向异性形状两平台几乎相同（面内最大沿 [110]）——见[[fundamentals/valley-splitting|谷劈裂]]词条"自旋–谷耦合的角度测绘"一节。
- [[scaling-automation/flopping-mode-qubit|翻转模式量子比特]]已在 Si-MOS 双点对称点演示，使 Rabi 频率与品质因子提高约一个数量级。
- [[materials-devices/gaas-algaas|GaAs/AlGaAs]]、[[materials-devices/silicon-sige|Si/SiGe]]、[[materials-devices/strained-germanium|应变锗]]、[[materials-devices/germanium-hut-wire|锗纳米线]]等其他平台在迁移率、谷简并、自旋轨道强度和制备工艺上各有取舍，Si-MOS 的独特优势是 CMOS 兼容性与较高的谷劈裂。


## 参考文献

- Si-MOS 量子点与两比特门的器件级描述：[[references/veldhorst-2015|Veldhorst et al., Nature 526, 410 (2015)]]、[[references/watson-2018|Watson et al., Nature 555, 633 (2018)]]；综述见 [[references/zwanenburg-2013|Zwanenburg et al., RMP 85, 961 (2013)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
