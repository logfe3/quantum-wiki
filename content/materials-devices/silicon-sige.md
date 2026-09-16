---
title: Si/SiGe 异质结
description: 在 SiGe 势垒中形成应变硅量子阱、用于长相干电子自旋量子比特的材料平台。
aliases:
 - 硅锗量子点
 - SiSiGe
 - Si/SiGe
 - SiGe 异质结
 - 应变硅量子阱
tags:
 - 材料与器件
 - 硅
date: 2026-09-08
---

<div class="entry-lead">Si/SiGe 用一层受双轴张应变的硅量子阱承载二维电子气，以低核自旋环境和可同位素纯化换取长相干，同时保持栅控量子点与半导体工艺的兼容性；代价是能谷自由度必须被稳定劈裂，且器件尺度被有效质量压到几十纳米。</div>

## 物理图像

Si/SiGe 异质结（Si/SiGe heterostructure）的核心是一个"三明治"：两层 SiGe 之间夹一层薄硅。硅的导带底低于两侧 SiGe，电子被纵向（生长方向 $z$）束缚在硅层内，形成[[fundamentals/two-dimensional-carrier-gas|二维电子气]]（two-dimensional electron gas, 2DEG）。衬底表面的多层金属栅极再在平面内挖出势阱与势垒，把电子横向局域到几十纳米尺度，得到[[fundamentals/semiconductor-quantum-dot|半导体量子点]]。

因此，一个 Si/SiGe 量子点是"两级限制"的产物：

- **纵向**由能带不连续性提供，来自材料生长，一旦长好就固定；
- **横向**由栅极电场提供，可在实验中连续调节——这正是[[fundamentals/tunnel-coupling|隧穿耦合]]、[[fundamentals/electrochemical-potential|电化学势]]、[[qubit-control/exchange-interaction|交换相互作用]]全都可以电控的原因。

![[assets/figures/materials-devices/yang-2023-fig1-1-sisiGe-band.jpg]]

*Si/SiGe 异质结的能带与结构示意图*

<!-- 原始占位：Si/SiGe 异质结层结构剖面（Si cap / SiGe spacer / Si 量子阱 / SiGe buffer / graded buffer / Si 衬底）与对应的导带底能级示意，标出费米面与三角势阱中的 2DEG -->

## 能带工程：应变与能谷

### 双轴张应变

SiGe 的晶格常数大于硅：$a_\mathrm{SiGe}=5.499\ \text{Å}$（30% Ge 含量）而 $a_\mathrm{Si}=5.431\ \text{Å}$。薄硅层外延生长在弛豫的 SiGe 虚拟衬底（virtual substrate）上时，会被迫与下方 SiGe 的面内晶格常数一致，从而承受双轴张应变（biaxial tensile strain）

$$
\varepsilon_\parallel=\frac{a_\mathrm{SiGe}-a_\mathrm{Si}}{a_\mathrm{Si}}\approx 1.25\%.
$$

应变有两个后果。其一，它进一步压低硅的导带底：仅靠带隙差（Si 的 $1.12\ \mathrm{eV}$ 略大于 30% Ge 的 SiGe 的 $0.98\ \mathrm{eV}$）并不足以形成电子阱，是应变把硅导带拉到 SiGe 导带以下，才在硅层里凿出一个真正的量子阱。其二，它解除了体硅导带的能谷简并。

### 谷简并的逐级解除

体硅的导带极小值沿 $\langle 100\rangle$ 方向有六个等价谷（valley），在 $k$ 空间表现为六个旋转椭球。简并的谷态给自旋比特提供了额外的泄漏与退相干通道，必须逐级解除：

1. **双轴张应变**把六重简并劈成面内四重的 $\Delta_4$ 与面外二重的 $\Gamma_2$，且 $\Delta_4$ 远高于 $\Gamma_2$，实际上退出讨论；
2. **纵向限制与栅极电场**破坏 $z$ 方向对称性，把剩下的 $\Gamma_2$ 二重简并劈开，能隙称为**谷劈裂**（valley splitting, VS），记作 $E_\mathrm{VS}$。

最低谷用于编码[[qubit-control/single-spin-qubit|单自旋量子比特]]。电子处于 $\Gamma_2$ 谷后，面内有效质量仅 $m^*=0.19\,m_0$，这是 Si/SiGe 电子迁移率较高的原因之一。

一条提高谷劈裂的材料策略是把少量 Ge 掺进量子阱本身（如 $\mathrm{Si_{0.972}Ge_{0.028}}$ 阱，按"最大化平均谷劈裂"的理论选取）：Ge 原子的随机分布平均上增强谷间耦合势，抬高了平均 $E_\mathrm{VS}$；代价是合金无序同步增大（迁移率、渗透密度下降），且仍会留下低劈裂"口袋"。Intel Tunnel Falls 一维阵列上 21 个点的实测（平均 $179\ \mu\mathrm{eV}$、最大 $540\ \mu\mathrm{eV}$、瑞利分布、跨栅关联约 720 nm）见[[fundamentals/valley-splitting|谷劈裂]]词条"介观关联"一节。统一理论进一步判明：这种均匀 Ge 增强属于无序主导区（热点仍在），而长周期摆动阱配合剪切应变可进入确定性增强区（见该词条"统一理论"一节）；异质结缺陷与谷劈裂的空间关联今后可用扫描栅显微的可移动单电子探针逐点成像（见该词条 SGM 测量方法一节）。

谷劈裂的定量描述可用两个谷态张成的二能级有效哈密顿量：

$$
H_v=\begin{pmatrix} 0 & \Delta_v \\ \Delta_v^{*} & 0\end{pmatrix}
\qquad E_\mathrm{VS}=2|\Delta_v|
$$

其中谷耦合 $\Delta_v$ 是界面势在两个谷态之间的矩阵元。这个写法直接解释了实验规律：界面越锐利、纵向电场把波函数压得越紧，$|\Delta_v|$ 越大；而 Si 量子阱与 SiGe 间隔层界面上的**原子台阶**会让不同横向位置的 $\Delta_v$ 相位不同、相干叠加相消，从而显著抑制谷劈裂。这也是 Si/SiGe 相对 [[materials-devices/silicon-mos|Si-MOS]] 的主要短板：MOS 的 Si/SiO₂ 界面势垒极陡，谷劈裂天然更大，而 Si/SiGe 的化学界面较"软"，$E_\mathrm{VS}$ 偏小，需要靠优化基片结构与生长工艺改善。

![[assets/figures/materials-devices/you-jie-2016-fig1-1-gaas-heterostructure.jpg]]

*掺杂 GaAs/AlGaAs 异质结层结构与垂直能带图*

<!-- 原始占位：谷简并逐级解除示意：体硅六重简并 → 应变后 Δ4（四重）与 Γ2（二重）→ 二维限制与电场下 Γ2 劈裂出 E_VS -->

## 理论模型

### 纵向限制：量子阱与二维电子气

未掺杂的 Si/SiGe 在接近绝对零度时本征载流子几乎为零，电子由离子注入区经引导栅（lead/accumulation gate）引入。给表面栅极加正电压使导带倾斜，当量子阱导带底被拉到费米面 $E_\mathrm{F}$ 以下时，电子在阱中聚集。电子在 $z$ 方向被量子阱顶部的三角势阱限制、能级分立，在 $x$–$y$ 平面内准自由运动——这就是 2DEG。

### 横向限制：谐振子势与轨道能

栅极在平面内造出的束缚势通常近似为对称谐振子势

$$
V(r)=\tfrac12 m^*\omega_0^2 r^2
\qquad \Delta_\mathrm{orb}=\hbar\omega_0
\qquad l_\mathrm{orb}=\sqrt{\frac{2\hbar}{m^*\omega_0}}
$$

$\Delta_\mathrm{orb}$ 为最低两个轨道的间距，$l_\mathrm{orb}$ 为势阱特征长度。用量子点物理尺寸 $l$ 作粗估，轨道能标为

$$
E_\mathrm{orb}\sim\frac{\hbar^2}{m^*l^2}.
$$

代入 $m^*=0.19\,m_0$：$l=30\ \mathrm{nm}$ 给出 $E_\mathrm{orb}\approx0.45\ \mathrm{meV}$，$l=20\ \mathrm{nm}$ 给出约 $1\ \mathrm{meV}$。这条关系同时解释了硅基器件的加工压力：$m^*$ 比 GaAs 大得多，要拿到同样的轨道能标，量子点必须做得更小（Si/SiGe 约 $60\ \mathrm{nm}$，Si-MOS 约 $30\ \mathrm{nm}$）。

### 电荷自由度：常相互作用模型

量子点的充放电由[[fundamentals/constant-interaction-model|常相互作用模型]]描述，[[fundamentals/charging-energy|充电能]]为

$$
E_C=\frac{e^2}{C_\Sigma}
$$

$C_\Sigma$ 是量子点总电容。相邻[[fundamentals/coulomb-blockade|库仑阻塞]]峰的间距对应加电子能

$$
E_\mathrm{add}=E_C+E_\mathrm{orb}+E_\mathrm{spin}
$$

其中 $E_\mathrm{spin}$ 为自旋（塞曼）劈裂。可分辨的库仑峰要求两个条件：$E_C\gg k_\mathrm{B}T_e$，以及量子点与源漏的隧穿电阻 $R_t\gg h/e^2$。Si/SiGe 量子点的 $E_C$ 通常约 $3\ \mathrm{meV}$（对应 $E_C/k_\mathrm{B}\approx35\ \mathrm{K}$），而液氦温度 $4.2\ \mathrm{K}$ 已相当于 $362\ \mathrm{\mu eV}$ 的热涨落——所以 $4.2\ \mathrm{K}$ 下通常看不到清晰库仑峰，实验必须在 $10$–$20\ \mathrm{mK}$ 的稀释制冷机中进行。

### 自旋比特与 EDSR

外磁场 $B_0$ 下电子自旋塞曼劈裂 $E_z=g\mu_\mathrm{B}B_0$，以拉莫尔频率 $\omega_0=E_z/\hbar$ 进动。加一个垂直于 $B_0$ 的交变磁场后
$$
H(t)=\frac{\hbar\omega_0}{2}\sigma_z+\hbar\Omega_\mathrm{R}\cos(\omega_1 t+\varphi)\,\sigma_x
\qquad \Omega_\mathrm{R}=\frac{g\mu_\mathrm{B}B_\mathrm{ac}}{\hbar}.
$$

转到驱动场的旋转坐标系并作旋波近似：

$$
H_\mathrm{rot}=\frac{\hbar\Delta\omega}{2}\sigma_z+\frac{\hbar\Omega_\mathrm{R}}{2}\left[\cos\varphi\,\sigma_x-\sin\varphi\,\sigma_y\right]
\qquad \Delta\omega=\omega_0-\omega_1 .
$$

$\Delta\omega$ 给出绕 $z$ 轴的旋转，$\varphi$ 选定赤道面内的旋转轴，二者合起来就是普适单比特操作：共振（$\Delta\omega=0$）且 $\varphi=0$ 时得到绕 $x$ 轴的[[qubit-control/rabi-oscillation|拉比振荡]]，$\varphi=\pi/2$ 得到绕 $y$ 轴的旋转。

硅的本征自旋–轨道耦合很弱，Si/SiGe 因此不像 [[materials-devices/strained-germanium|应变锗]] 那样能直接电驱自旋，而要在栅极之上集成[[materials-devices/micromagnet|微磁体]]人为造出磁场梯度，用[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）操控。微波电场推动电子波函数在横向梯度场中往复振荡，等效交变磁场为

$$
B_\mathrm{eff}=\frac{eE_\mathrm{ac}\,l_\mathrm{orb}^{2}\,|b_\mathrm{sl}|}{\Delta_\mathrm{orb}}
\propto\frac{eE_\mathrm{ac}|b_\mathrm{sl}|}{\Delta_\mathrm{orb}^{2}}
$$

其中 $E_\mathrm{ac}$ 是微波电场幅值，$b_\mathrm{sl}=\partial B_x/\partial z$ 是微磁体的横向磁场梯度。把 $l_\mathrm{orb}^2=2\hbar/(m^*\omega_0)$ 与 $\Delta_\mathrm{orb}=\hbar\omega_0$ 代入即得

$$
B_\mathrm{eff}=\frac{2eE_\mathrm{ac}|b_\mathrm{sl}|}{m^*\omega_0^{2}}=\frac{2\hbar^{2}eE_\mathrm{ac}|b_\mathrm{sl}|}{m^{*}\Delta_\mathrm{orb}^{2}}
$$

也就是说驱动效率对轨道能隙是平方反比的：势阱越软、量子点越大，同样功率能翻转得越快。这条标度是[[scaling-automation/flopping-mode-qubit|翻转模式量子比特]]的直接动机——把电子放到双量子点失谐零点，电偶极矩显著增大，Si/SiGe 中曾用此法把驱动效率提高近三个数量级。

### 交换相互作用与两比特门

两个各占据一个电子的相邻量子点构成海森堡自旋对：

$$
H=J\,\boldsymbol{S}_1\cdot\boldsymbol{S}_2+g\mu_\mathrm{B}\left(\boldsymbol{B}_1\cdot\boldsymbol{S}_1+\boldsymbol{B}_2\cdot\boldsymbol{S}_2\right).
$$

在直积基 $\{|{\uparrow\uparrow}\rangle,|{\uparrow\downarrow}\rangle,|{\downarrow\uparrow}\rangle,|{\downarrow\downarrow}\rangle\}$ 下可写成

$$
H=\begin{pmatrix}
\bar{E}_z & 0 & 0 & 0\\
0 & -J/2+\Delta E_z & J/2 & 0\\
0 & J/2 & -J/2-\Delta E_z & 0\\
0 & 0 & 0 & -\bar{E}_z
\end{pmatrix}
$$

$\bar{E}_z=g\mu_\mathrm{B}(B_{z1}+B_{z2})/2$ 为平均塞曼能，$\Delta E_z=g\mu_\mathrm{B}(B_{z1}-B_{z2})/2$ 为塞曼能差——在 Si/SiGe 中它由微磁体的纵向梯度提供，正是比特寻址的依据。

在 Hubbard 极限下，交换强度为

$$
J=\frac{2t^2}{U-\epsilon-\Delta E_z}+\frac{2t^2}{U-\epsilon+\Delta E_z}
\ \xrightarrow{\ U\gg\epsilon,\Delta E_z\ }\ \frac{4t^2}{U}
$$

$t$ 为点间隧穿耦合，$U$ 为平均充电能，$\epsilon=\mu_1-\mu_2$ 为失谐。

$J$ 与 $\Delta E_z$ 的比值决定可用的门类型。Si/SiGe 自旋比特实验通常处于 $J\ll\Delta E_z$：本征态近似为直积态，打开 $J$ 后反平行态能级下移 $J/2$，一个比特的共振频率依赖另一个比特的自旋态，由此可做受控旋转乃至[[qubit-control/cnot-gate|CNOT 门]]。若不加微波，只开关 $J$ 让相位累积 $\phi_{1(2)}=Jt/(2\hbar)$，取 $t=\pi\hbar/J$ 并补两个单比特 $Z$ 旋转即得 CZ 门：

$$
U_\mathrm{CZ}=Z_1\!\left(\tfrac{\pi}{2}\right)Z_2\!\left(\tfrac{\pi}{2}\right)U_\mathrm{CPhase}\!\left(\tfrac{\pi\hbar}{J}\right)=\mathrm{diag}(1,1,1,-1).
$$

实验上调 $J$ 有两条路：改失谐 $\epsilon$，或在 $\epsilon=0$ 处改点间势垒。后者称为**对称操作**（symmetric operation）——失谐零点处自旋比特对[[materials-devices/charge-noise|电荷噪声]]一阶不敏感，因此是抑制退相干的首选工作点。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| Si 量子阱厚度 | $10\ \mathrm{nm}$ | 、 |
| SiGe 间隔层厚度 | $30\ \mathrm{nm}$（常用区间 $30$–$60\ \mathrm{nm}$） | |
| Si 帽层 / SiGe 缓冲层 / 渐变缓冲层 | $2\ \mathrm{nm}$ / $500\ \mathrm{nm}$ / $\sim3\ \mathrm{\mu m}$ | |
| Ge 组分 $x$ | $0.30$–$0.33$ | 、 |
| 晶格常数 | $a_\mathrm{Si}=5.431\ \text{Å}$，$a_\mathrm{SiGe}=5.499\ \text{Å}$ | |
| 面内有效质量 | $m^*=0.19\,m_0$ | |
| 量子点尺寸 | $\sim60\ \mathrm{nm}$ | |
| 充电能 $E_C$ | $\sim3\ \mathrm{meV}$（2×2 阵列实测 $2.68$–$3.74\ \mathrm{meV}$） | |
| 杠杆臂 $\alpha$ | $\approx0.12\ \mathrm{eV/V}$ | |
| 最近邻隧穿耦合 $t_{ij}$ | 约 $25$–$200\ \mathrm{\mu eV}$ 连续可调，平均值可推到近 $300\ \mathrm{\mu eV}$ | |
| 次近邻隧穿耦合 | 零附近 → $>100\ \mathrm{\mu eV}$（中心栅调控） | |
| 比特频率 | $19.2771$ / $19.2354\ \mathrm{GHz}$（$B_\mathrm{ext}=500\ \mathrm{mT}$，含微磁体贡献） | |
| 自旋弛豫 $T_1$ | $116\ \mathrm{ms}$ / $94\ \mathrm{ms}$ | |
| 退相干 $T_2^{*}$（自然硅） | $0.9\ \mathrm{\mu s}$ / $0.7\ \mathrm{\mu s}$ | |
| Hahn echo $T_2^\mathrm{Hahn}$ | $15.5\ \mathrm{\mu s}$ / $11.3\ \mathrm{\mu s}$ | |
| Rabi 频率 | 随驱动幅值线性增长，最高约 $10\ \mathrm{MHz}$ | |
| 门保真度（自然硅） | 单比特 $>99\%$，CZ $\approx91\%$ | |

## 材料生长与器件工艺

异质结用化学气相沉积（CVD）生长，顺序是：P 型 Si(100) 衬底 → Ge 组分渐变的 SiGe 缓冲层（约 $3\ \mathrm{\mu m}$，降低穿透位错）→ 化学机械抛光（CMP）平整界面 → 固定组分 SiGe 虚拟衬底（$500\ \mathrm{nm}$）→ Si 量子阱（$10\ \mathrm{nm}$）→ SiGe 间隔层（$30\ \mathrm{nm}$）→ Si 帽层（$2\ \mathrm{nm}$，防氧化）。

三个厚度是折中出来的：

- **量子阱**过厚会超过临界厚度、应变弛豫，过薄则显著降低迁移率；
- **间隔层**过薄会引入远端散射降低迁移率，过厚则削弱栅极对量子点的控制力；
- **界面锐利度**直接决定谷劈裂，原子台阶必须尽量抑制。

器件侧，Si/SiGe 采用**重叠栅极**（overlapping gate）结构，逐层铝栅之间靠等离子体氧化生成的约 $5\ \mathrm{nm}$ 致密氧化铝绝缘，层间保持约 $20\ \mathrm{nm}$ 厚度差以免爬坡断裂。栅极按功能分三层：屏蔽栅（screening gate，定义一维导电沟道）、能级栅与引导栅（plunger / lead gate，调电化学势并把离子注入区的电子引入）、势垒栅（barrier gate，控制点间与点–库隧穿）。做自旋比特时再加一层微磁体，共四层电子束曝光。

绝缘层做了差异化设计：场氧层约 $15\ \mathrm{nm}$（保证栅极与离子注入区绝缘），栅氧层约 $7\ \mathrm{nm}$（更薄以减少氧化铝中的电荷缺陷，抑制[[materials-devices/charge-noise|电荷噪声]]）。核心区用电子束光刻（最小线宽可达 $20\ \mathrm{nm}$，套刻精度优于 $\pm10\ \mathrm{nm}$），外围扇出电极用激光直写，两者以金属"补丁"互连，兼顾精度与效率。

<!-- FIGURE: 重叠栅极三层结构俯视 SEM 伪彩图与横截面示意，标注屏蔽栅/能级栅/势垒栅与其下方形成的量子点位置 -->

## 实验特征与测量

**降温前后的常规表征。** 先测沟道开启与逐栅夹断（pinch-off）曲线确认每个栅极都能关断沟道；再扫能级栅看[[fundamentals/coulomb-blockade|库仑阻塞]]峰。因为 $E_C\sim3\ \mathrm{meV}$ 相对 $4.2\ \mathrm{K}$ 的热涨落不够大，液氦温区一般看不到清晰库仑峰，必须进稀释制冷机。

**单点参数。** 输运测量给出[[fundamentals/coulomb-diamond|库仑菱形]]，从中提取充电能与杠杆臂；库仑峰宽度可反推电子温度。二维四点阵列的实测显示四个点都能排空到零电子区，$\alpha$ 一致在 $0.12\ \mathrm{eV/V}$ 附近，而 $E_C$ 在 $2.68$–$3.74\ \mathrm{meV}$ 之间浮动，差异主要来自屏蔽栅形状。

**双点与阵列。** 用邻近的单电子晶体管（SET）作[[readout-measurement/qpc-charge-sensor|电荷传感]]测[[fundamentals/charge-stability-diagram|电荷稳定图]]，蜂窝的反交叉给出点间耦合；未掺杂高阻 2DEG 上传感点欧姆接反射仪不可行时，可把谐振电感接到传感点积累栅并以 $R_D$ 解耦欧姆接触——1 s 采完高分辨稳定图并支持单发电荷/自旋读出，见[[readout-measurement/gate-based-sensing|栅极射频传感]]的积累栅电导传感一节。栅极之间存在电容串扰，隧穿线并不与坐标轴平行，需要先建立[[scaling-automation/virtual-gates|虚拟栅极]]（由[[scaling-automation/cross-capacitance-matrix|串扰矩阵]]定义）才能独立调节各点电化学势。在 2×2 [[scaling-automation/two-dimensional-array|二维阵列]]中，两次"同步扫描"即可一次看到四对双点的反交叉，实验相图与 Hubbard 模型模拟（平均 $E_C=3\ \mathrm{meV}$、最近邻 $t=0.1\ \mathrm{meV}$、最近邻库仑 $V=0.2\ \mathrm{meV}$、次近邻 $t=0$、$V=0.05\ \mathrm{meV}$、$\alpha=0.12\ \mathrm{eV/V}$）相符。势垒栅对 $t_{ij}$ 的调控呈指数依赖；对角与反对角（次近邻）耦合在中心栅零压时接近零，正好满足表面码只要最近邻耦合的拓扑要求。

**自旋比特。** 微磁体产生的杂散场使比特频率有约 $1\ \mathrm{GHz}$ 的不确定度，而共振峰宽仅 $\sim1\ \mathrm{MHz}$，逐点扫频效率极低；实用做法是先用 chirp 波形（如 $50\ \mathrm{MHz}$ 带宽、$20\ \mathrm{\mu s}$）粗扫出 EDSR 峰，再降功率精扫。判据是改变外磁场时峰按 $g\mu_\mathrm{B}/h\approx28\ \mathrm{MHz/mT}$ 移动——$B_\mathrm{ext}$ 增加 $10\ \mathrm{mT}$ 时实测峰移 $295\ \mathrm{MHz}$，与理论 $280\ \mathrm{MHz}$ 相符。由共振峰半高全宽 $\sigma_f$ 可初估

$$
T_2^{*}=\frac{2\sqrt{\ln 2}}{\pi\sigma_f}.
$$

在 $B_\mathrm{ext}=500\ \mathrm{mT}$ 下测得两个比特频率 $19.2771$ 与 $19.2354\ \mathrm{GHz}$：两者相差 $41.7\ \mathrm{MHz}$，正是微磁体纵向梯度带来的寻址间隔；而 $19.28\ \mathrm{GHz}$ 对应总场约 $690\ \mathrm{mT}$，说明微磁体贡献了近 $190\ \mathrm{mT}$ 的纵向场。

**相干性测量。** $T_1$ 用"$\pi$ 脉冲 + 等待"的指数衰减拟合；$T_2^{*}$ 用[[qubit-control/ramsey-interferometry|Ramsey 干涉]]，包络为高斯

$$
P^{\uparrow}(\tau)=A\sin(2\pi\Delta f\,\tau+\phi)\exp\left[-\left(\frac{\tau}{T_2^{*}}\right)^{2}\right]+B;
$$

[[qubit-control/dynamical-decoupling|动力学解耦]]的最简形式 Hahn echo 用

$$
P^{\uparrow}(\tau)=A\exp\left[-\left(\frac{\tau}{T_2^\mathrm{Hahn}}\right)^{1+\alpha'}\right]+B
$$

拟合，衰减指数 $\alpha'$ 指示噪声谱型：$\alpha'=0$ 对应白噪声，$\alpha'=1$ 对应准静态噪声。

## 相干性与噪声

Si/SiGe 的相干优势来自核自旋：硅天然富集零核自旋同位素，还可进一步同位素纯化。历史节点上，2012 年 Si/SiGe 量子点中的自旋比特首次做到 $T_2^{*}=360\ \mathrm{ns}$，已是同期 GaAs 的 40 倍。

但纯化并不是万能解。自然硅 Si/SiGe 器件实测 $T_2^{*}\approx0.7$–$0.9\ \mathrm{\mu s}$；Hahn echo 只把它拉长十几倍到 $11$–$16\ \mathrm{\mu s}$，而若噪声纯粹来自核自旋，回波理论上应能提升数百倍。衰减指数指向接近 $1/f^2$ 的谱型，说明除核自旋外还有显著的低频[[materials-devices/charge-noise|电荷噪声]]。更关键的是，纯化硅器件里 $T_2^{*}$ 同样普遍只有几微秒——微磁体在带来可寻址梯度场的同时，也把电荷噪声通过杂散梯度场"翻译"成了磁噪声。因此 Si/SiGe 的相干性瓶颈已经从核自旋转移到电荷噪声与微磁体设计的耦合上，抑制路径包括优化微磁体几何、减薄栅氧以减少氧化铝中的电荷缺陷（[[materials-devices/interface-defects|界面缺陷]]），以及在失谐零点作对称操作。

在有限相干时间内提高门数量是另一条工程路线：用 Rabi 振荡的品质因子 $Q=T_2^\mathrm{Rabi}/T_\pi$（$T_\pi=1/2f_\mathrm{Rabi}$）权衡速度与相干性，$Q$ 随驱动幅值先升后降（低功率受限于速度，高功率受限于微波加热），取峰值处的驱动参数。自然硅四点阵列中 $Q$ 可超过 300，对应单 $\pi$ 脉冲保真度估计 $F\approx1-1/Q>99.6\%$；随机基准测试确认单比特门保真度超过 $99\%$，CZ 门约 $91\%$，配合动力学解耦的 DCZ 门可制备平均保真度 $91\%$ 的贝尔态。

## 与谐振腔的杂化

Si/SiGe 的另一条扩展路线是把量子点接到微波腔上，做[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]式的远程互连。由于电偶极矩有限，传统 $50\ \Omega$ 腔难以进入[[circuit-qed/strong-coupling|强耦合]]区；实用做法是用高动态电感薄膜（如 TiN，方块动态电感 $L_k=265.9\ \mathrm{pH/\square}$）做[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]。真空涨落电压 $\propto\sqrt{Z_r}$，因此耦合强度按

$$
\frac{g}{g_{50\Omega}}=\sqrt{\frac{Z_r}{50\ \Omega}}
$$

放大：$Z_r\approx3.5\ \mathrm{k\Omega}$ 相对 $50\ \Omega$ 理论上增益约 $8.4$ 倍。

在 Si/SiGe 三量子点–高阻抗腔器件（$f_r=4.993\ \mathrm{GHz}$，$\kappa/2\pi=2.2\ \mathrm{MHz}$）中：

- [[qubit-control/charge-qubit|电荷量子比特]]与腔的全局耦合 $g_0/2\pi=175\ \mathrm{MHz}$，比特退相干 $\gamma_c/2\pi=99\ \mathrm{MHz}$，满足 $g_0>\gamma_c,\kappa$，可观测到[[circuit-qed/vacuum-rabi-splitting|真空拉比劈裂]]。有效耦合随失谐按 $g=g_0(2t_c/\omega_q)$ 变化。
- 引入微磁体后的[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]为 $2g_s/2\pi=43.5\ \mathrm{MHz}$，此时比特展宽 $\gamma_s/2\pi=4.6\ \mathrm{MHz}$、杂化后腔展宽 $\kappa^{*}/2\pi=7.5\ \mathrm{MHz}$，同样落在强耦合区。

电荷比特退相干率远高于自旋比特（$99$ vs $4.6\ \mathrm{MHz}$），这正是 Si/SiGe 混合系统把研究重心从电荷自由度转向自旋自由度的实验理由。

## 与其他材料平台的比较

| 平台 | 量子点尺寸 | 主要优势 | 主要挑战 |
| --- | --- | --- | --- |
| [[materials-devices/gaas-algaas\|GaAs/AlGaAs]] | 百纳米以上 | 迁移率极高、加工容易 | 全部同位素含非零核自旋，$T_2^{*}$ 仅纳秒量级 |
| Si/SiGe | $\sim60\ \mathrm{nm}$ | 迁移率高、无序低、可同位素纯化、与产线兼容、易二维扩展 | 谷劈裂偏小、本征自旋–轨道弱需微磁体、电荷噪声 |
| [[materials-devices/silicon-mos\|Si-MOS]] | $\sim30\ \mathrm{nm}$ | 衬底稳定、与 CMOS 完全兼容、2DEG 贴近表面栅控灵敏 | 界面缺陷与电荷陷阱多、迁移率低、易形成杂点 |
| [[materials-devices/strained-germanium\|Ge/SiGe]] | 百纳米量级 | 本征自旋–轨道强，无需微磁体即可全电控快速操控 | 热预算低，与现有产线兼容性受限 |
| Si:³¹P 施主 | $\sim2\ \mathrm{nm}$ | 原子级一致性 | 制备与调控极困难 |

## 与其他概念的关系

- 异质结提供[[fundamentals/two-dimensional-carrier-gas|二维电子气]]，栅极再把它切成[[fundamentals/semiconductor-quantum-dot|量子点]]、[[fundamentals/double-quantum-dot|双量子点]]乃至[[scaling-automation/quantum-dot-array|量子点阵列]]。
- 单点性质经[[fundamentals/coulomb-blockade|库仑阻塞]]与[[fundamentals/coulomb-diamond|库仑菱形]]表征，双点及以上经[[fundamentals/charge-stability-diagram|电荷稳定图]]表征，参数换算依赖杠杆臂与[[fundamentals/constant-interaction-model|常相互作用模型]]。
- 比特层面：[[qubit-control/single-spin-qubit|单自旋量子比特]]由[[qubit-control/electric-dipole-spin-resonance|EDSR]] + [[materials-devices/micromagnet|微磁体]]操控，两比特门经[[qubit-control/exchange-interaction|交换相互作用]]实现；读出用[[readout-measurement/single-shot-readout|单发读出]]或[[readout-measurement/dispersive-readout|色散读出]]。
- 扩展层面：[[scaling-automation/virtual-gates|虚拟栅极]]与[[scaling-automation/cross-capacitance-matrix|串扰矩阵]]是阵列可调性的前提，[[scaling-automation/two-dimensional-array|二维阵列]]是表面码纠错的物理载体。
- 杂化层面：[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]把[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]推入[[circuit-qed/strong-coupling|强耦合]]区，为远程互连铺路。
- 限制层面：[[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/interface-defects|界面缺陷]]是当前相干时间的主要瓶颈。
- 编码层面：[[qubit-control/charge-qubit|电荷量子比特]]在非掺杂 Si/SiGe 四量子点上已实现双轴相干控制与 80 ps 条件 π 相位翻转（电容耦合 ≈18 GHz），是平台快门控动力学的实验基准。
- 工艺层面：[[materials-devices/laser-annealing-contacts|激光退火欧姆接触]]用局部固相外延替代 700 °C 全局退火激活注入施主，保住界面锐度与 Ge 浓度剖面——热预算敏感的先进异质结的接触方案。


## 参考文献

- Si/SiGe 量子点测控的代表性实验：[[references/noiri-2022|Noiri et al., Nature 601, 338 (2022)]]、[[references/xue-2022|Xue et al., Nature 601, 343 (2022)]]；综述见 [[references/zwanenburg-2013|Zwanenburg et al., RMP 85, 961 (2013)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
