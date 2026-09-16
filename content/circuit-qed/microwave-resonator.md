---
title: 微波谐振腔
description: 在微波频段储存电磁能量并形成离散模式的集总、传输线或三维结构。
aliases:
 - 微波谐振器
 - 超导谐振腔
 - 共面波导谐振腔
 - 谐振腔
tags:
 - 电路量子电动力学
 - 微波
date: 2026-09-08
source: QAtlas
qatlas_id: qa_01m23askwjjdmvv776m6y39es4
source_updated: 2026-09-09T16:59:26Z
---

<div class="entry-lead">微波谐振腔把连续传输线中的场压缩成一个或多个离散模式。它既是高灵敏度传感器，也能作为在相距较远量子比特之间传递相互作用的量子总线。</div>

## 物理图像

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（circuit QED, cQED）中，"腔"对应一根被边界条件截断的微波传输结构：电磁波在两个端点之间反射、叠加成驻波，只在满足整数倍半波长的离散频率上有非平凡解。每一个解就是一个谐振模式（mode），其中心频率 $\omega_r$、总耗散率 $\kappa$、外耦合率 $\kappa_e$ 与内耗散率 $\kappa_i$ 描述这个模式如何与外界交换能量。半导体量子点中的电荷或自旋自由度通过电场与腔内真空涨落耦合，从而以单个或几个微波光子的形式进入电路。

对[[fundamentals/semiconductor-quantum-dot|门控半导体量子点]]而言，谐振腔既是测量探针（通过反射或透射谱读取电荷态），也是相干接口（在强耦合下与量子点交换激发）；尺度从片上 [[circuit-qed/high-impedance-resonator|高阻抗]] 集总元件到全封闭的 3D 金属腔体，覆盖从百纳米到厘米的多个量级。

![[assets/figures/circuit-qed/gu-2023-fig1-6-cpw-cavity.jpg]]

*半波长共面波导透射腔结构、横截面与等效电路*

<!-- 原始占位：微波谐振腔的三类实现：集总 LC 元件、半波长共面波导、四分之一波长反射腔与三维矩形腔体 -->

## 三类实现

按几何尺度与电磁模式划分，半导体 cQED 实验中常见的微波腔有三类：

- **集总 LC 谐振器**：电感 $L$ 与电容 $C$ 在物理上可分辨，物理尺寸远小于工作波长。优点是模式体积小、零点电场强，但工艺容差与寄生参数敏感，多用于[[readout-measurement/parametric-amplifier|参量放大器]]、滤波电路等辅助器件；
- **分布式传输线腔**：共面波导（coplanar waveguide，CPW）或带状线（stripline）被截取为有限长度 $l$，两端开路或一端短路形成驻波。典型基模是 $\lambda/2$ 透射腔或 $\lambda/4$ 反射腔，频率 $\omega_n\propto(2n+1)\pi/(2l\sqrt{L_lC_l})$，与电长度反比；
- **三维腔体**：用整块超导金属（铝、铌）铣出矩形或圆柱形空腔，TE/TM 模式由腔长 $d$ 决定 $\omega_{mnp}$。介电参与度低、无大电流密度的细线结构，$Q$ 值可达 $10^5$–$10^6$，但与半导体器件的直流与射频引线集成更难。

这三类在本站论文中作为代表实现。

## 集总模型与量子化

最简的描述是从集总 LC 电路出发。设电容 $C$ 储存电能 $C V^2/2$，电感 $L$ 储存磁能 $L I^2/2=\Phi^2/(2L)$。取广义坐标 $\Phi$（电感磁通）与共轭动量 $Q$（电容电荷），泊松括号 $\{\Phi,Q\}=1$ 直接量子化为 $[\hat\Phi,\hat Q]=i\hbar$。引入满足 $[a,a^\dagger]=1$ 的湮灭、产生算符后

$$
\hat\Phi=\sqrt{\frac{\hbar Z_r}{2}}\left(a+a^\dagger\right),\qquad
\hat H_r=\hbar\omega_r\left(a^\dagger a+\tfrac{1}{2}\right)
$$

其中

$$
\omega_r=\frac{1}{\sqrt{LC}},\qquad Z_r=\sqrt{\frac{L}{C}}.
$$

零点能通常略去，写成 $\hat H_r=\hbar\omega_r a^\dagger a$。在 [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]中，这正是腔的"单模玻色子"描述。

集总模型同样适用于描述有载电路：将损耗电阻 $R$ 并入 RLC 回路，得到无载品质因数 $Q_i=\omega_r R C$；与外负载 $R_L$ 耦合后，引入外部品质因数 $Q_e=\omega_r R_L C$，有载 $Q_L$ 满足

$$
\frac{1}{Q_L}=\frac{1}{Q_i}+\frac{1}{Q_e}.
$$

定义耦合系数 $g_c=Q_i/Q_e$：$g_c>1$ 为过耦合（光子快速漏出，适于快速读出），$g_c<1$ 为欠耦合（$Q$ 高，适于量子存储），$g_c=1$ 为临界耦合（最大功率传输）。

## 分布式传输线谐振腔

### 模式与频率

把一根长度为 $l$、单位长度电容 $C_l$、电感 $L_l$ 的传输线两端开路，电磁场在 $l$ 内形成驻波：

$$
\omega_n=\frac{(n+1)\pi}{2l\sqrt{L_lC_l}},\quad n=0,1,2,\dots
$$

$n=0$ 的基模为半波长 $\lambda/2$ 模式，对应两端开路透射腔；一端开路一端短路时基模变为 $\lambda/4$（反射腔），更高阶模为 $(2n+1)\omega_0$。CPW 的几何电容、电感可由保角映射得到

$$
C_l=4\varepsilon_0\varepsilon_{\mathrm{eff}}\frac{K(k')}{K(k)},\qquad
L_l=\frac{\mu_0}{4}\frac{K(k')}{K(k)}
$$

其中 $k=w/(w+2s)$ 由中心导体宽 $w$ 与地间距 $s$ 决定，$\varepsilon_{\mathrm{eff}}\approx(1+\varepsilon_r)/2$ 在衬底远厚于膜厚的条件下成立。

### 特征阻抗

超导材料制成的传输线 $R_l, G_l\approx0$，特征阻抗化为

$$
Z_r=\sqrt{\frac{L_l}{C_l}}=\sqrt{\frac{L_r}{C_r}}
$$

商用微波器件为 $50\ \Omega$，因此传统 CPW 腔也按 $50\ \Omega$ 设计以避免反射与失真；但半导体 cQED 中需要偏离此惯例——腔电压的零点涨落正比于 $\sqrt{Z_r}$，提高 $Z_r$ 即放大量子点所感受到的真空电场（详见[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]）。这是[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]路线的理论根源。

### 输入阻抗与等效电路

对于长度为 $l$、终端开路的传输线，定义 $\beta=\omega\sqrt{L_lC_l}$，输入阻抗

$$
Z_{\mathrm{in}}=-j Z_r\cot(\beta l).
$$

当 $\beta l=\pi/2$ 时，$Z_{\mathrm{in}}\to\infty$，对应 $\lambda/2$ 谐振，与并联 RLC 等效；当终端短路、$l=\lambda/4$ 时也给出类似的并联谐振。这说明分布式传输线在某一频率附近的响应完全由一个集总 RLC 模型描述，其参数为 $R=Z_r/\alpha$，$L=Z_r l/(\omega_r\alpha)$，$C=\alpha/(\omega_r Z_r)$，其中 $\alpha$ 与衰减系数相关。在缝耦合或电容耦合的情况下，缝隙的阻抗倒相作用会让等效电路由并联 RLC 变为串联 RLC。

## 三维腔体

矩形波导两端短路即可形成矩形 3D 谐振腔。设波导宽边 $a$、窄边 $b$、长度 $d$，TE/TM 模式频率

$$
\omega_{mnp}=\frac{1}{\sqrt{\mu\varepsilon}}\sqrt{\left(\frac{m\pi}{a}\right)^2+\left(\frac{n\pi}{b}\right)^2+\left(\frac{p\pi}{d}\right)^2},\qquad m,n,p=0,1,2,\dots
$$

腔长 $d$ 须为半波导波长的整数倍，对应短路 $\lambda/2$ 谐振。 用 HFSS 设计了一个 $9.5\ \mathrm{GHz}$ 附近的矩形 3D 腔，并在 $20\ \mathrm{mK}$ 温度下测得全封闭铝腔 $Q\sim 2\times10^5$，开槽腔 $Q\sim 10^5$，加直流引线后 $Q$ 降至 $\sim 8\times10^3$。3D 腔的优势是没有中心细线、导体损耗极小，但同轴线 TEM 模到 3D 腔 TE 模的模式转换效率低，需要把同轴线芯直接插入腔中精细调节长度。三维腔家族的两个新方向：整体铣削的铌 λ/4 同轴腔把单光子内品质因子推过 $1.4\times10^9$（transmon 集成后仍有 11.3 ms 相干），见[[circuit-qed/niobium-coaxial-cavity|铌同轴谐振腔]]；"同轴馈电矩形腔 + 偶极天线型 transmon"几何的全部量子参数可解析闭式求出、用作数值量化方法的基准，见[[circuit-qed/analytical-3d-cqed|三维 cQED 全波解析解]]。

## 散射矩阵与端口网络

实际测量的对象是端口的散射参数 $S_{ij}$。对单端口反射腔，由输入–输出理论可得反射系数

$$
S_{11}(\omega)=-1+\frac{2Q/Q_e}{1-2iQ(\omega/\omega_r-1)}
$$

对双端口透射腔

$$
S_{21}(\omega)=\frac{Q/\sqrt{Q_{e,1}Q_{e,2}}}{1+2iQ(\omega/\omega_r-1)},\qquad
S_{ii}(\omega)=-1+\frac{Q/Q_{e,i}}{1-2iQ(\omega/\omega_r-1)}.
$$

其中 $Q_{e,i}=\omega_r/\kappa_{e,i}$。当耦合电容 $C_k$ 很小时，$q=\omega_r C_k R_L\ll1$，有载品质因数可近似为 $Q_L\approx 1/(2\omega_r C_k R_L C_l)$，即耦合电容越大、$Q_L$ 越低。当比特也耦合到腔时，散射参数需引入比特磁化率 $\chi=i g_c/[(\omega_a-\omega)+i\gamma]$ 的修正：

$$
S_{11}(\omega)=-1+\frac{\kappa_e}{i(\omega_r-\omega)+g_c\chi+\kappa/2},\qquad
S_{21}(\omega)=\frac{\sqrt{\kappa_{e,1}\kappa_{e,2}}}{i(\omega_r-\omega)+g_c\chi+\kappa/2}
$$

其中 $\kappa=\kappa_i+\kappa_e$，$\gamma=\gamma_1/2+\gamma_\phi$。当 $g_c\chi\to0$ 时回到无加载谐振腔的洛伦兹响应。

## 耦合电容工程：从 C_κ 标定到 Q_L 设计

外耦合 $\kappa_e$（即 $Q_L$）不是测量出来再接受的事实，而是**用耦合电容设计出来**的自由度。Göppl 等人对 2–9 GHz 一批 Al CPW 腔（中心导体 $w=10\ \mu$m、缝隙 $s=6.6\ \mu$m，高阻硅衬底 550 nm 热氧化层）做了系统标定：耦合元件分两类——**间隙电容**（宽度 $w_g=10$–$50\ \mu$m，$C_\kappa$ 约 0.24–0.44 fF）与**指形电容**（1–8 对指，指长 $l_f=100\ \mu$m、指宽/间距 3.3 μm，$C_\kappa$ 约 4–56 fF），在 2.3 GHz 基频器件上把 $Q_L$ 从 $3.7\times10^2$ 连续铺到 $2.3\times10^5$。

集总 LCR 模型给出设计规律：把 $C_\kappa$ 与馈线 $R_L$ 的串联经 Norton 变换映射为并联的 $R^*$、$C^*$，过耦合区（$Q_\mathrm{ext}\ll Q_\mathrm{int}$）的有载品质因数

$$
Q_\mathrm{ext}\approx\frac{\bar{C}}{2\omega_n\bar{R}_L\,C_\kappa^2}\qquad\Rightarrow\qquad Q_L\propto C_\kappa^{-2}
$$

其中 $\bar{C}$、$\bar{R}_L$ 是映射后的等效集总参数、$\omega_n$ 是第 $n$ 模角频率——$Q_L$ 随耦合电容平方反比下降；欠耦合区（$Q_\mathrm{ext}\gg Q_\mathrm{int}$）则饱和在内禀品质因数 $Q_\mathrm{int}\approx2.3\times10^5$（20 mK、本征损耗极限）。同一套模型同时预言频率牵引（$C^*$ 改变谐振频率）与插入损耗，ABCD 传输矩阵法更覆盖全谱（含高次谐波模式），两模型对全部 12 只器件的共振频率、品质因数与插损一致描述——设计即预言。

这套标定直接对应两类应用的分工：**过耦合**（大 $C_\kappa$、低 $Q_L$、宽带）用于腔内比特态的快速测量；**欠耦合**（小 $C_\kappa$、$Q_L\to Q_\mathrm{int}$、长光子寿命）用于把腔当光子存储器。

![[assets/figures/microwave-resonator/goppl2008-fig1-cpw-capacitor-geometry.jpg]]
*电容耦合 CPW 腔的版图与截面：左侧指形电容（多对指交叠增大 $C_\kappa$）、右侧间隙电容（小 $C_\kappa$）；中心导体宽 $w=10$ µm、缝隙 $s=6.6$ µm，双层衬底上铝膜光刻成型。图源：Göppl et al. (2008), Fig. 1。*

![[assets/figures/microwave-resonator/goppl2008-fig5-lcr-model-mapping.jpg]]
*分布参数到集总 LCR 的模型映射：对称耦合传输线腔等效为并联 LCR 振子，$C_\kappa$ 与 $R_L$ 的串联经 Norton 变换变为并联 $R^*$、$C^*$——品质因数下降与频率牵引由此统一进入集总设计公式。图源：Göppl et al. (2008), Fig. 5。*

![[assets/figures/microwave-resonator/goppl2008-fig6a-ql-vs-ckappa.jpg]]
*$Q_L$ 对耦合电容 $C_\kappa$ 的实验标定（红点）与模型预言（蓝线）：过耦合区沿 $C_\kappa^{-2}$ 虚线下降（小电容端饱和于 $Q_\mathrm{int}\approx2.3\times10^5$），0.24–56.4 fF 的电容设计覆盖约三个量级的 $Q_L$。图源：Göppl et al. (2008), Fig. 6(a)。*

## 损耗通道与品质因数

总耗散 $\kappa=\kappa_i+\kappa_e$ 中，外耦合 $\kappa_e$ 由耦合电容决定（$\kappa_\nu\propto\omega_r^3 Z_r Z_{0,\nu} C_{\mathrm{ext},\nu}^2$，因此阻抗越高、同样耦合电容下外耦合越强）。内耗散的主要通道是

- **超导准粒子损耗**：温度升高或磁通抑制超导能隙时增加；
- **介质与界面二能级系统**（TLS）：电极–衬底界面、隧穿结氧化层中的非晶态缺陷，在低温下饱和为 $\tan\delta\sim 10^{-3}$–$10^{-4}$ 的介电损耗；
- **微波辐射与泄漏**：长直流电极在微波频段如同一根天线，把腔内能量辐射进自由空间或邻近电路，常用片上[[readout-measurement/purcell-filter|Purcell 滤波]]结构抑制。

对常规 CPW 腔，$Q$ 在 $10^3$–$10^4$ 之间；3D 腔可达 $10^5$–$10^6$；高阻抗动态电感腔（如 NbTiN、TiN）通常 $Q\sim 10^3$；SQUID 阵列腔受结参数离散与氧化层缺陷影响，$Q\sim 10^2$–$10^3$。本站论文中具体的内耗散/外耗散值由矢量网络分析仪拟合散射谱直接得到（如论文双量子点电荷比特实验中 $\omega_r/2\pi=6.53\ \mathrm{GHz}$，$\kappa_i/2\pi=30.0\ \mathrm{MHz}$、$\kappa_e/2\pi$ 数十 MHz 量级）。

## 参数与量级

本站论文中报道的实际腔参数（来源标记见论文依据）：

| 腔型 | $Z_r$ | $\omega_r/2\pi$ | $\kappa/2\pi$ | 关键参数 | 来源 |
| --- | --- | --- | --- | --- | --- |
| 标准 CPW 透射腔 | 50 Ω | 5.92 GHz | κᵢ/2π ≈ 数十 MHz，κₑ 可调 | 半波长开路，CPW 标准阻抗 | |
| 反射式超导腔（铝制） | 50 Ω | 6.045 GHz | κᵢ/2π ≈ 11.3 MHz，κₑ/2π ≈ 数十 MHz | 半波长双线，奇模激励 | |
| 三维铝腔（20 mK） | — | 9.45 GHz | $Q\sim 2\times10^5$ | 全封闭 | |
| 双端口透射腔耦合两个 DQD | 50 Ω | 6.53 GHz | κᵢ/2π=30.0 MHz | 测得 $g_0/2\pi\sim81\ \mathrm{MHz}$ | |
| 高阻抗 SQUID 阵列腔 | ~1 kΩ | 磁通可调 | 30–60 MHz | 38 个 SQUID 串联 | |
| 高阻抗 NbTiN 腔 | ~2 kΩ | ~6 GHz | ~11 MHz | w=0.32 µm，11 nm 膜 | |
| 高阻抗 TiN λ/2 腔 | ~3.5 kΩ | 4.993 GHz | 2.2 MHz | 10 nm 膜，Lₖ=265.9 pH/□ | |
| 高阻抗 TiN 腔（7.3 GHz） | ~2.5 kΩ | 7.332 GHz | 5.13 MHz | 用于自旋–光子耦合 | |
| Göppl 标定型 CPW 腔（2.3 GHz 基频） | 50 Ω 级 | 2.27–2.35 GHz | $Q_L=3.7\times10^2$–$2.3\times10^5$ | $C_\kappa$ 0.24（间隙）–56.4 fF（8+8 指）；$Q_L\propto C_\kappa^{-2}$ | Göppl 2008 |
| Göppl 器件内禀品质因数 | — | — | $Q_\mathrm{int}\approx2.3\times10^5$（20 mK） | 欠耦合饱和值 | Göppl 2008 |

耦合强度的收益与之同步：50 Ω CPW 透射腔中 $g/2\pi\sim6.5$–$20\ \mathrm{MHz}$ 停留在弱耦合区；SQUID 阵列腔把 GaAs 双量子点的耦合提升到 $g/2\pi\approx119\ \mathrm{MHz}$；3.5 kΩ TiN 腔支撑了 $g_0/2\pi=175\ \mathrm{MHz}$ 的电荷比特强耦合。

## 实验特征与典型应用

微波谐振腔是半导体 cQED 实验中几乎唯一的读出与耦合通道。典型应用如下：

- **反射式谐振测量量子点复导纳**：将量子点等效为与谐振腔耦合的复阻抗 $Y(\omega)=G(\omega)+i\omega C(\omega)$，通过反射谱的幅值与相位拟合提取 $G$、$C$，从而分辨[[fundamentals/charge-stability-diagram|电荷稳定图]]中的隧穿线（改变 $C$）与共隧穿线（改变 $G$）。 用此方法在锗硅纳米线空穴量子点上测得 $g_c/2\pi=148\ \mathrm{MHz}$；
- **色散读出**：在 $|\Delta|\gg g$ 的大失谐区，腔频按 $\chi=g^2/\Delta\sigma_z$ 移动，测量腔相位即可读出比特态而不破坏它，是[[readout-measurement/dispersive-readout|色散读出]]的基础；
- **真空 Rabi 劈裂与强耦合判定**：比特频率穿过腔频时，谱线出现最小间距 $2g$ 的避免交叉，要求 $g>\kappa,\gamma$，对应[[circuit-qed/strong-coupling|强耦合]]判据；
- **腔介导远程耦合**：两比特共享同一腔模时，经虚光子交换得到有效相互作用 $\sim g_1g_2/\Delta$，把近邻（百纳米）相互作用扩展到毫米尺度，对应[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]；
- **电荷稳定图与栅极传感**：把腔响应直接作为快速电荷探针，不必额外放置[[readout-measurement/qpc-charge-sensor|QPC/SET 传感器]]，对应[[readout-measurement/gate-based-sensing|栅极射频传感]]。

## 与其他概念的关系

- 哈密顿量与全部能级结构见[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]与[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]；共振极限的标志是[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]，进入它的判据是[[circuit-qed/strong-coupling|强耦合]]；
- 大失谐极限支撑[[readout-measurement/dispersive-readout|色散读出]]与 QND 测量；强周期驱动下的修饰谱由[[circuit-qed/floquet-dynamics|Floquet 动力学]]描述；
- 腔侧的实现路线：常规微波谐振腔、提升耦合的[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与可调频的[[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]；
- 比特侧的耦合通道：[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]（强偶极、快退相干）与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]（微磁体、自旋轨道、[[scaling-automation/flopping-mode-qubit|翻转模式]]等电荷混合机制）；
- 多比特共享同一腔模则构成[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]的硬件基础；
- 性能瓶颈来自[[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/interface-defects|界面缺陷]]，常见平台包括[[materials-devices/gaas-algaas|GaAs/AlGaAs]]、[[materials-devices/silicon-sige|Si/SiGe]]、[[materials-devices/silicon-mos|Si-MOS]] 与[[materials-devices/germanium-hut-wire|锗棚顶纳米线]]。
- 需要特斯拉级磁场（自旋/拓扑比特）的场景须改用[[circuit-qed/field-resilient-resonator|耐磁场超导谐振腔]]：涡旋钉扎与薄膜几何把 $Q_i\simeq10^5$ 保持到面内 6 T。

## 参考文献

- Göppl, M., Fragner, A., Baur, M., Bianchetti, R., Filipp, S., Fink, J. M., Leek, P. J., Puebla, G., Steffen, L., Wallraff, A. Coplanar waveguide resonators for circuit quantum electrodynamics. *Journal of Applied Physics* 104, 113904 (2008). DOI: 10.1063/1.3010859；arXiv:0807.4094（QAtlas 缓存：0807.4094）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
