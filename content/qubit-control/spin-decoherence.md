---
title: 自旋退相干
description: 自旋量子比特在自由演化与受控演化中相位相干性逐步丧失的物理机制、特征时间与典型量级。
aliases:
 - 退相干时间
 - T1 T2
 - T2* 退相位
 - 相干时间
 - 自旋相干
 - 退相位
tags:
 - 量子比特操控
 - 自旋
 - 相干性
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvk9x5jexm85d67mk56sw1
source_updated: 2026-09-09T14:04:35Z
---

<div class="entry-lead">自旋退相干不是单一物理量，而是由 $T_1$（纵向弛豫，丢失能量）与 $T_2$（横向退相干，丢失相位）两个独立时间常数连同其 Ramsey、Hahn echo、CPMG 等不同序列下表现出来的层级结构共同刻画的物理过程；前者由自旋–声子、电–声与自旋–轨道通道决定，后者由核自旋 Overhauser 场、电荷噪声与杂散磁场梯度通过比特频率 $f_0$ 注入的随机相位决定。</div>

## 物理图像

半导体量子点中的[[qubit-control/single-spin-qubit|单自旋量子比特]]以磁场下两个塞曼能级 $|{\uparrow}\rangle$、$|{\downarrow}\rangle$ 编码 $|0\rangle$、$|1\rangle$。理想情况下，叠加态
$|\psi\rangle=\cos(\theta/2)|0\rangle+e^{i\phi}\sin(\theta/2)|1\rangle$ 在布洛赫球上以拉莫尔频率 $f_0=g\mu_B B/h$ 自由进动、相位差 $\phi(t)=2\pi f_0 t$ 稳定增长；自旋–轨道相互作用和超精细相互作用（hyperfine interaction）把电子自旋与环境耦合，使比特状态会向环境"泄露"。这种泄露有两类：

- **能量泄露（$T_1$）**：自旋从激发态 $|{\uparrow}\rangle$ 通过自旋–声子或自旋–轨道–声子通道释放一个声子回到基态 $|{\downarrow}\rangle$，纵向磁化强度 $M_z$ 指数衰减 $M_z(t)=M_z(0)\,e^{-t/T_1}+M_z^\infty$。
- **相位泄露（$T_2$）**：环境磁场涨落（核自旋 Overhauser 场、栅极电压经磁场梯度调制的有效磁场等）让 $f_0$ 在不同次实验间随机偏移，赤道面上的相位 $\phi(t)$ 累加为高斯/指数分布，布居数平均值衰减为混态。

[[qubit-control/ramsey-interferometry|Ramsey]] 序列测得的 $T_2^*$ 把准静态与慢漂移噪声都算在退相干里，是 $T_2$ 的下限；[Hahn 回波]([[qubit-control/dynamical-decoupling]])、[CPMG-N]([[qubit-control/dynamical-decoupling]]) 等动力学解耦序列逐步把低频噪声"对消"，可读出的 $T_2^\mathrm{echo}$、$T_2^\mathrm{CPMG}$ 依次逼近材料与器件的本征极限。

<!-- FIGURE: 单自旋比特布洛赫球图像与三种相干时间：T1（纵向指数衰减）、T2*（Ramsey 自由进动可见度包络）、T2^echo（Hahn 回波重聚焦后的衰减） -->

## 理论模型

### 自旋–环境哈密顿量

把比特哈密顿量写为

$$
H(t)=\tfrac{1}{2}\,h\,[f_0+\delta f(t)]\,\sigma_z
$$

其中 $\delta f(t)=\delta f_\mathrm{hf}(t)+\delta f_\mathrm{charge}(t)+\delta f_\mathrm{grad}(t)$ 把三类主要噪声源累加：

- **核自旋 Overhauser 场涨落** $\delta f_\mathrm{hf}$：电子与点内 $N\sim 10^4$–$10^6$ 个晶格核自旋通过费米接触超精细耦合 $H_\mathrm{hf}=A\,\mathbf{I}\cdot\mathbf{S}$，平均场 $\langle B_\mathrm{nuc}\rangle$ 对 GaAs 约 $1$–$5\ \mathrm{mT}$（相当于百 MHz 量级的拉莫尔频率偏移），涨落部分则随核自旋扩散、动态核极化过程在毫秒到秒尺度上漂移。 把核磁场等效为准静态场，明确写出 $H_\mathrm{hf}=g\mu_B \sum_i B_{\mathrm{nuc},i}\cdot \mathbf{S}_i$（式 2.12 与式 3.10），并把 S–T0、S–T+ 反交叉附近的相干动力学归因于 $\mathbf{d}B = (\mathbf{B}_{\mathrm{nuc},L}-\mathbf{B}_{\mathrm{nuc},R})/2$（即两点核磁场之差，式 2.13）。
- **栅极电压电荷噪声 $\delta V_{G_i}(t)$**：通过自旋–轨道耦合或人工磁场梯度把噪声注入比特频率，$\delta f_\mathrm{charge}(t)=\sum_i (\partial f_0/\partial V_{G_i})\,\delta V_{G_i}(t)$。硅体系典型灵敏度 $|\partial f_0/\partial V_{G_i}|\sim 10$–$100\ \mathrm{MHz/mV}$；锗空穴自旋因强 SOC 可达 $0.1$–$10\ \mathrm{MHz/mV}$ 量级。其微观载体（单体电荷涨落器）在 Si/SiGe 中已可逐个表征并经反馈钉扎——见[[materials-devices/charge-noise|电荷噪声]]词条的单体 TLF 表征与反馈稳定两节。
- **杂散磁场梯度**：微磁体或邻近电极磁性材料提供的 $\partial B/\partial \mathbf{r}$ 与电子波函数位置变化耦合进入 $f_0$；梯度越强，EDSR 越快但同时也越容易把电场噪声转译为比特频率抖动。

### $T_1$ 与自旋–声子、自旋–轨道机制

$T_1$ 反映"激发态→基态"的能量弛豫。在 Si/SiGe、Si-MOS 中，自旋–晶格耦合以形变势声子为主，硅里还能通过谷激发态泄漏（spin–valley mixing）产生额外通道。 把弛豫速率写为多通道相加：

$$
T_1^{-1}=\Gamma_{J,\mathrm{SV}}+\Gamma_{\mathrm{ph},\mathrm{SV}}+\Gamma_{J,\mathrm{SO}}+\Gamma_{\mathrm{ph},\mathrm{SO}}+\Gamma_\mathrm{const}
$$

其中下标 SV、SO 分别表示自旋–谷混合与自旋–轨道混合，$J$ 表示 Johnson 噪声、ph 表示声子、const 表示与外磁场无关的常值通道（式 2.7）。当 $E_Z$ 与谷能级劈裂 $E_\mathrm{VS}$ 重合时，自旋–谷混合打开一条特别强的弛豫通道，$T_1$ 会从 ms 量级骤降到 μs 量级——这是硅自旋比特独有的失效模式，磁输运上表现为 $B_\mathrm{kink}$ 处 $T_1$ 的"V 形"谷。

在 GaAs 双量子点的电荷比特中，$T_1$ 主要受电子–声子耦合与电荷态间的隧穿耦合控制，典型值在纳秒量级。

### 硅点 $T_1$ 的声子弛豫理论：幂律、各向异性与谷弛豫

Tahan 与 Joynt 对单电子硅量子点的声子弛豫做了系统计算（形变势、多极展开），把自旋、轨道、谷三类激发的弛豫放进同一框架。能量弛豫在 ~100 mK 由**自发单声子发射**主导（光子发射因末态密度低得多而可忽略），能级图像如下：轨道弛豫（第一激发轨道→基态）、自旋弛豫（电子比特 $T_1$）与谷弛豫（激发谷→基态谷）各有独立的通道与标度。

![[assets/figures/spin-decoherence/tahan2013-fig2-relaxation-levels.jpg]]

*硅施主（左）与硅量子点（右）的低能级与三类弛豫过程示意：圆圈数字 1/2/3 分别为轨道弛豫、自旋弛豫（电子比特 $T_1$）与谷弛豫；量子点中低能级来自不同轨道波函数叠加 ±z 两谷，谷劈裂介于对称/反对称谷组合之间、可为 0 至 meV——谷激发可能落进 Zeeman 与轨道能级的窗口内。图源：Tahan & Joynt (2013), Fig. 2。*

**自旋弛豫的三种机制与磁场幂律**。对体相硅施主，两条经典机制是"谷重布居"（声子改变六个谷的布居权重）与"单谷机制"（Roth 型带间耦合）。在应变硅量子阱中只有 $\pm z$ 两谷被占据：SOC 只把对称谷基态与某一个双重态分量混合，**谷重布居机制的矩阵元在量子点极限下消失**；单谷机制保留，其 $1/T_1\propto B^5$，且磁场沿晶体轴 $[001]$ 或 $[011]$ 时严格为零——这是它的特征指纹，但绝对量很小。量子点特有的是**界面 SOC**（结构反转不对称 + 界面对称破缺产生的 Rashba $\alpha$ 与 Dresselhaus $\beta$ 型项；硅无体相反转不对称，二者完全来自界面，比例因样品而异）：

$$
\frac{1}{T_1}\propto B^{7}\times\left[(\alpha^{2}+\beta^{2})\,\frac{3+\cos 2\Theta}{4}+(\alpha^{2}-\beta^{2})\sin^{2}\Theta\cos 2\Phi+\cdots\right]
$$

其中 $\Theta$、$\Phi$ 是磁场相对 $[001]$ 的极角与方位角。**$B^7$ 幂律是点特异 SOC 的标志**，与 GaAs 点（压电声子主导）和硅施主（体相 SOC）的 $B^5$ 形成鲜明对照；主项 $(\alpha^2+\beta^2)(3+\cos2\Theta)/4$ 沿 $z$ 轴**不**消失（又与 Roth 型相反），要单独分离 $\alpha$ 与 $\beta$ 需测更小的 $(\alpha^2-\beta^2)\sin^2\Theta\cos2\Phi$ 项——椭圆量子点会放大它。$T_1$–$B$ 图还给出理论–实验对比的有效边界：**只在简并点以下比较才有效**——Zeeman 能扫过第一激发轨道能级（该尺寸的点约 0.3–0.4 meV）时出现自旋"热点"，$T_1$ 骤降。

![[assets/figures/spin-decoherence/tahan2013-fig5-t1-vs-field.jpg]]

*理想圆量子点的自旋弛豫时间 T₁ 随磁场的理论曲线（Eq. 12，√(α²+β²)=4 μeV·nm、B∥[110]）：对角线自下而上对应轨道能隙 Δ=0.02→8 meV（点越小越大）；竖线与对角线的交点是简并点（热点位置），理论只在简并点以下与实验可比。数据点为已发表的 SiGe 点（HRL、Wisconsin）与 SiO₂ 点（UCLA）实验值。图源：Tahan & Joynt (2013), Fig. 5。*

**轨道与谷弛豫：多极展开的必要性**。形变势声子弛豫速率的严格计算须保留**全部多极贡献**——电偶极近似在轨道弛豫（第一激发轨道→基态）与谷弛豫上都会明显偏离精确结果（小能隙/大结构时尤甚）。谷弛豫由横/纵声子共同贡献：理想界面下谷弛豫速率随谷劈裂 $\Delta_v$ 变化，并在波函数 $z$ 向延展随电场变化时被**增强**——$z$ 方向限域越紧，动量空间波函数越宽，谷间声子散射越快。对典型硅点 $\Delta_v<1\ \mathrm{meV}$ 的区间，理论给出可直接对比的谷弛豫时间曲线（[[fundamentals/valley-splitting|谷劈裂]]词条的谷激发寿命问题由此获得定量参照）。

![[assets/figures/spin-decoherence/tahan2013-fig10-valley-relaxation.jpg]]

*理想界面量子点激发谷态的总弛豫时间（横+纵声子）随谷劈裂 Δ_v 的变化：实线为含全部多极的精确结果、虚线为电偶极近似——偶极近似在谷弛豫上系统性偏差明显；典型硅点 Δ_v<1 meV 区间有直接实验意义。图源：Tahan & Joynt (2013), Fig. 10。*

### $T_2$：随机相位累积

考虑比特在 $\tau$ 时间内的自由演化。设失谐 $\delta\omega(t)=2\pi\delta f(t)$ 是平稳随机过程，相对方差

$$
\langle\delta\phi^2(\tau)\rangle=\int_0^\tau\!dt_1\!\int_0^\tau\!dt_2\,\langle\delta\omega(t_1)\delta\omega(t_2)\rangle
=\int_{-\infty}^{+\infty}\!df\,S_{\delta\omega}(f)\,|\tilde\eta_\tau(f)|^2
$$

其中 $S_{\delta\omega}(f)$ 是 $\delta\omega$ 的功率谱密度（power spectral density，PSD），$|\tilde\eta_\tau(f)|^2$ 是序列对应的滤波函数。对纯 [[qubit-control/ramsey-interferometry|Ramsey]] 序列 $\eta_\tau(t)=+1$（$0<t<\tau$），滤波函数 $|\tilde\eta_\mathrm{Ramsey}(f)|^2=[\sin(\pi f \tau)/(\pi f)]^2$ 在 $f\lesssim 1/\tau$ 近似为常数，对 $1/f^\alpha$ 类低频噪声权重最大，Ramsey 衰减常呈高斯或拉伸指数形式

$$
\rho_\uparrow(\tau)=A\,\cos(\Omega_\mathrm{Ramsey}\tau)\,e^{-(\tau/T_2^*)^{1+\alpha'}}+B
$$

$\alpha'=0$ 对应白噪声、$\alpha'=1$ 对应准静态 $1/f$ 噪声、$0<\alpha'<1$ 是混合噪声谱的常见取值 §2.4.2）。

Hahn 回波在中点插入 $\pi$ 脉冲把 $\eta$ 在前后两段反号，使低频段 $|\tilde\eta_\mathrm{Hahn}(f)|^2\sim f^2$ 抑制低频噪声；CPMG-$N$ 把脉冲加密到 $N$ 个，滤波窗口推至 $f\sim N/\tau$，$T_2^\mathrm{CPMG}$ 可较 $T_2^\mathrm{Hahn}$ 再延长一个量级以上。完整推导与噪声谱重建见[[qubit-control/dynamical-decoupling|动力学解耦]]词条。把比特反过来当"噪声谱仪"用（固定脉冲间隔提取 $T_2^S$、换算 $S(\omega)=\pi^2/4T_2^S$）可以把退相干分解为低频磁噪声、中频 1/f 电荷噪声与白噪声底并定位仪器峰——SiMOS 实例见该词条"实验落地"一节。

### 退相干时间层级与品质因子

实际体系里通常要区分三个层级：

- $T_2^\mathrm{Rabi}$：受控驱动期间相干性，由微波功率、谱扩散、加热决定；
- $T_2^*$：自由演化期间、不带重聚焦的退相位，由全部低频噪声决定；
- $T_2^\mathrm{Hahn}$/$T_2^\mathrm{CPMG}$：插入 $\pi$ 脉冲后逐步压低低频噪声，把可观测相干时间向本征极限推进。

在工程上常用品质因子 $Q=2f_\mathrm{Rabi}\,T_2^\mathrm{Rabi}=T_2^\mathrm{Rabi}/t_\pi$ 描述"相干时间内能完成多少个 $\pi$ 操作"；对 Ramsey/Hahn 序列也有类似的 $Q^*=f_\mathrm{Rabi}\,T_2^*$ 与 $Q^\mathrm{Hahn}=f_\mathrm{Rabi}\,T_2^\mathrm{Hahn}$ §3.3.4）。

### 非马尔可夫 1/f 噪声的随机模型与 GST 误差分解（Chiu 2025）

滤波函数框架默认噪声平稳且常用准静态或经典系综近似；Si/SiGe 自旋比特的 1/f 电荷噪声却是典型的**非马尔可夫**过程（方差随时间发散），而 RB/GST 等表征协议的理论基础又是马尔可夫近似——这个错位常让从退相干时间反推的"噪声强度"失真。Chiu 等人给出闭环的建模-表征-优化流程：

**微观到谱**：从[[qubit-control/electric-dipole-spin-resonance|EDSR]]的自旋-位置耦合出发构造自旋-声子型噪声通道（电荷噪声经微波磁体梯度进入自旋频率）， bath 关联函数用多指数模式叠加——每个模式以速率 $\gamma$ 指数衰减、幅度权重取

$$
P(\gamma) \propto 1/\gamma,
$$

叠加后即得 1/f 频谱。主方程虽是时间局域的，但耗散核随时间变化，仍属非马尔可夫；借助扩展辅助刘维尔空间可把记忆效应并入高效求解与后续最优控制。

![[assets/figures/spin-decoherence/chiu2025-fig1-decoherence-simulation.jpg]]

*随机噪声模型对退相干实验的复现：含非相干噪声的数值模拟（Ramsey/CPMG）与真实器件参数下的实验行为一致，优于纯相干（随机初相）噪声模型——为 GST 分析提供可信的噪声底。图源：Chiu et al. (2025), Fig. 1。*

**GST 误差生成元的相干/非相干分解**：把含噪门的时间演化通道取矩阵对数得"误差生成元"，随机（非相干）部分形如 $S_P[\rho]=\sigma_p\rho\sigma_p-\rho$。在旋转框架中比特主要经 z 向随机误差生成元失去相干。关键结论：此前工作为拟合实验退相干时间而调大**相干**噪声强度，会**低估**门保真度；引入本模型的非相干通道后，误差生成元强度与实验一致、平均门保真度更贴近实测值。

![[assets/figures/spin-decoherence/chiu2025-fig2-gst-generators.jpg]]

*GST 误差生成元与纠缠不保真度比值：非马尔可夫 1/f 模型下的误差生成元分解（相干 vs 非相干）——随机误差生成元主导，避免了用过大相干噪声强度拟合退相干时间所导致的门保真度低估。图源：Chiu et al. (2025), Fig. 2。*

**Krotov 优化脉冲**：在非马尔可夫噪声模型下用 Krotov 最优控制合成脉冲，可大幅降低 1/f 电荷噪声的误差贡献；且经 CPMG 滤波函数分析，针对非相干噪声优化的脉冲对相干噪声同样比常规高斯脉冲更鲁棒——"为一类噪声优化、对多类噪声受益"。

![[assets/figures/spin-decoherence/chiu2025-fig4-filter-spectrum.jpg]]

*优化脉冲的滤波谱：从控制矩阵 [R(t)] 转换的归一化滤波谱展示优化脉冲在多大频率范围上抑制电荷噪声——相比常规脉冲显著压低非马尔可夫误差贡献。图源：Chiu et al. (2025), Fig. 4。*

## 噪声通道与材料体系

### 超精细噪声：GaAs 与硅、锗的根本差异

GaAs 中每个量子点电子与 $\sim 10^6$ 个 $^{69}\mathrm{Ga}$/$^{71}\mathrm{Ga}$/$^{75}\mathrm{As}$ 核自旋接触耦合，Overhauser 场 $\langle B_\mathrm{nuc}\rangle\sim 1$–$5\ \mathrm{mT}$、典型涨落 $\Delta B_\mathrm{nuc}\sim 1$–$5\ \mathrm{mT}$，对应 $T_2^*\sim 10$ ns §3.5）。Ge/SiGe 异质结中 $^{73}\mathrm{Ge}$ 丰度约 7.7%，超精细噪声比 GaAs 弱约一个量级，$T_2^*$ 可达数十至上百 ns 量级。自然硅中 $^{29}\mathrm{Si}$ 丰度 4.7%，$T_2^*$ 典型为 0.5–1 μs；同位素纯化到 $^{28}\mathrm{Si}$ 富集度 $>99.9\%$ 后，$T_2^*$ 可突破 100 μs、$T_2$ 可达 ms 量级。

### 电荷噪声与栅极灵敏度

栅极电压噪声通过两种通道注入自旋比特：

1. **直接通过自旋–轨道耦合**：典型于 Ge/SiGe 空穴自旋；栅极灵敏度可高至 $10\ \mathrm{MHz/mV}$，所以同样的 $S_{V}(f)$ 比硅电子自旋更"致命"。硅电子自旋的劈裂噪声则多经**磁场梯度**通道（界面缺陷运动拖动波函数、经 $\Delta B_\parallel$ 转化为 Zeeman 涨落）注入——其微观模型与"自旋劈裂噪声 ↔ 轨道能量噪声关联"的缺陷诊断预言见[[materials-devices/charge-noise|电荷噪声]]的界面缺陷微观模型一节。
2. **通过人工磁场梯度**：典型于 EDSR 体系；梯度越大 EDSR 越快，但电场到自旋频率的耦合也越大。

无论哪种通道，$T_2^*$ 都可以写成对噪声 PSD 的积分。设栅极噪声 $S_{V}(f)=A/f^\alpha$，则

$$
\frac{1}{T_2^*}\sim 2\pi\sqrt{\ln(f_\mathrm{hf}/f_\mathrm{lf})}\sqrt{f_\mathrm{lf}}\sum_i\!\left(\frac{\partial f_0}{\partial V_{G_i}}\right)^{\!2}S_{V_i}(f)
$$

；这意味着提高 $T_2^*$ 既要降噪（材料、电极工艺）也要降灵敏度（优化工作点）。

### 杂散磁场与微磁体

微磁体或磁性电极漏磁在量子点处产生 $\partial B/\partial \mathbf{r}$，一方面通过梯度增强 EDSR，另一方面也会随样品移动把 $f_0$ 暴露在低频磁场噪声下。设计时常在"驱动强"与"相干好"之间折中：横向梯度给驱动、纵向梯度给寻址（错开比特频率），但两者同时增大也意味着把更多电荷、磁场噪声注入自旋通道。

## 参数与量级

| 体系 | 比特类型 | $T_1$ | $T_2^*$ | $T_2^\mathrm{Hahn}$ | $T_2^\mathrm{CPMG}$ | $T_2^\mathrm{Rabi}$ | 备注 / 来源 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| GaAs 双量子点电荷比特 | [[qubit-control/charge-qubit\|电荷比特]] | $\sim 8\ \mathrm{ns}$ | — | $1.36\pm 0.40\ \mathrm{ns}$（拟合 $T_2$） | — | — | PDF p. 47–51 |
| GaAs 三电子区 LZS 干涉 | S–T 类 | — | $7.0\ \mathrm{ns}$ | — | — | — | 高斯衰减余弦拟合 |
| Ge 棚顶纳米线空穴自旋 | [[qubit-control/hole-spin-qubit\|空穴自旋]] | — | $65\pm 2\ \mathrm{ns}$ | $523\pm 41\ \mathrm{ns}$ | — | — | 拉伸指数拟合 $\alpha=0.9$ |
| 平面锗双量子点空穴自旋（章节 5.3） | 空穴自旋 | — | $136\ \mathrm{ns}$ | $401\ \mathrm{ns}$ | $6.75\ \mathrm{\mu s}$（$N_\pi=230$） | — | PDF p. 98 |
| 平面锗双量子点空穴自旋（章节 2.6.1） | 空穴自旋 | — | $120\ \mathrm{\mu s}$ | $1.2\ \mathrm{ms}$ | $28\ \mathrm{ms}$ | — | 优质器件， |
| 自然 Si/SiGe 自旋比特 Q1 | 单自旋 | $116\ \mathrm{ms}$ | $0.9\ \mathrm{\mu s}$ | $15.5\ \mathrm{\mu s}$ | — | $27.6\ \mathrm{\mu s}$（Q2，$f_\mathrm{Rabi}=3.5\ \mathrm{MHz}$） | PDF pp. 44–47 |
| 自然 Si/SiGe 自旋比特 Q2 | 单自旋 | $94\ \mathrm{ms}$ | $0.7\ \mathrm{\mu s}$ | $11.3\ \mathrm{\mu s}$ | — | $27.6\ \mathrm{\mu s}$ | |
| Si-MOS 单自旋 | 单自旋 | $1/T_1=112\pm 6\ \mathrm{s^{-1}}$ | $624\ \mathrm{ns}$ | $60.2\ \mathrm{\mu s}$ | — | $5.4\ \mathrm{\mu s}$ | PDF p. 70 |
| 翻转模式 Si 单自旋（零失谐） | 单自旋 | — | $0.42\pm 0.31\ \mathrm{\mu s}$ | — | — | — | PDF pp. 89–91 |
| GaAs 单自旋（早年 EDSR 文献） | 单自旋 | — | $\sim 10\ \mathrm{ns}$ | $\sim \mu\mathrm{s}$（echo 后） | $0.87\ \mathrm{ms}$（DD 后） | — | §1.4.4； 引 Veldhorst 等 |
| 同位素纯化 $^{28}\mathrm{Si}$ 单自旋 | 单自旋 | — | $120\ \mathrm{\mu s}$ | — | $28\ \mathrm{ms}$ | — | PDF p. 28 引 Veldhorst 等 |

补充几个跨体系的常用经验值：

- 栅极电压灵敏度 $|\partial f_0/\partial V_{G_i}|$：硅电子 $10$–$100\ \mathrm{MHz/mV}$，锗空穴 $1$–$10\ \mathrm{MHz/mV}$；电荷噪声 PSD $S_V(f)\sim 10^{-8}$–$10^{-6}\ \mathrm{V^2/Hz}$@1 Hz 直接决定 $T_2^*$ 上限。
- 弛豫速率的温度依赖：硅中 $T_1$ 在低温下主要由声子与 Johnson 通道决定，温度升高时声子贡献迅速变大；GaAs 中 $T_1$ 主要受电–声子耦合控制。
- CPMG 阶数：N 从 25、75 提升到 230 时，$T_2^\mathrm{CPMG}$ 近似线性增长，对应低频噪声投影随 N 系统性下降。
- 自旋–电荷混合：在翻转模式单自旋比特里，$T_1$ 会被人为的"翻转"通道压制；这一通道让 Rabi 频率提高一个量级，但代价是电荷噪声灵敏度同步上升。
- 硅点自旋弛豫幂律：界面 SOC $\propto B^7$（主项 $(\alpha^2+\beta^2)(3+\cos2\Theta)/4$，$B\parallel z$ 不消失）；体相单谷机制 $\propto B^5$（沿 [001]/[011] 严格为零）；GaAs 点与硅施主均 $\propto B^5$（不同原因）。Tahan 2013
- 自旋热点位置：Zeeman 能 = 第一激发轨道能隙（0.3–0.4 meV 量级的点），理论–实验对比只在简并点以下有效。Tahan 2013
- 谷弛豫：多极展开必要（电偶极近似系统偏差）；$z$ 限域越紧谷弛豫越快（动量展宽）；典型 $\Delta_v<1$ meV 区间有理论曲线。Tahan 2013

## 实验特征与测量

### $T_1$ 的脉冲测量

施加 $\pi$ 脉冲把比特制备到激发态 $|{\uparrow}\rangle$，等待 $t_\mathrm{wait}$ 后再施加 $\pi$ 脉冲把残存布居转回基态并测量，扫描 $t_\mathrm{wait}$ 得到 $P_\uparrow(t_\mathrm{wait})=A\,e^{-t_\mathrm{wait}/T_1}+B$。对 GaAs 电荷比特， 通过斩波–锁相方法在双量子点电荷比特上拟合出 $T_1\approx 8\ \mathrm{ns}$；对 Si/SiGe 单自旋， 用 Elzerman 单发读出直接拟合，$T_1$ 在 100 ms 量级。硅中 $T_1$ 远大于读出时间，因此对读出保真度的影响可忽略；但在 GaAs 电荷比特中 $T_1$ 与操作时间同量级，必须考虑。

### $T_2^*$ 的 Ramsey 测量

标准 Ramsey 序列：$\pi/2$–$t_\mathrm{wait}$–$\pi/2$，扫描 $t_\mathrm{wait}$ 得到相位振荡包络 $P(t_\mathrm{wait})=A\,\cos(\Omega_\mathrm{Ramsey}\,t_\mathrm{wait})\,\exp[-(t_\mathrm{wait}/T_2^*)^{1+\alpha'}]+B$；失谐 $\Omega_\mathrm{Ramsey}/2\pi$ 通常取 5–20 MHz，便于拟合振荡频率。文献给出翻转模式单自旋比特 $\varepsilon=0$ 与 $\varepsilon=1.5\ \mathrm{meV}$ 两点的 $T_2^*\approx 0.42\ \mathrm{\mu s}$；另一组中 Q1/Q2 分别为 $0.9/0.7\ \mathrm{\mu s}$，包络为高斯衰减；另有锗空穴实验测得 $T_2^*=136\ \mathrm{ns}$（20 MHz 失谐）。

### $T_2^\mathrm{Hahn}$ 与 $T_2^\mathrm{CPMG}$

在 Ramsey 序列中点插入一个 $\pi$ 脉冲即得 Hahn 回波 $\pi/2$–$\tau/2$–$\pi$–$\tau/2$–$\pi/2$，包络拟合公式 $P_\uparrow(\tau)=A\exp[-(\tau/T_2^\mathrm{Hahn})^{1+\alpha'}]+B$，$\alpha'$ 反映噪声谱形状。自然 Si/SiGe Q1/Q2 在 $\alpha'\approx 1$ 下给出 $T_2^\mathrm{Hahn}=15.5/11.3\ \mathrm{\mu s}$（约 $17/16$ 倍 $T_2^*$），Si-MOS 实测 $T_2^\mathrm{Hahn}=60.2\ \mathrm{\mu s}$（约 96 倍 $T_2^*$）。把 $N$ 个 $\pi$ 脉冲等距插入得到 CPMG-$N$， 在锗空穴上 $N_\pi=230$ 给出 $T_2^\mathrm{CPMG}=6.75\ \mathrm{\mu s}$（约 50 倍 $T_2^*$）。

### Rabi 振荡与 $T_2^\mathrm{Rabi}$

驱动期间改变脉冲时长 $t_\mathrm{MW}$，扫出 $P(t_\mathrm{MW})=A\,\sin(2\pi f_\mathrm{Rabi}\,t_\mathrm{MW}+\phi)\,\exp(-t_\mathrm{MW}/T_2^\mathrm{Rabi})+B$；$T_2^\mathrm{Rabi}$ 同时反映驱动期间的相干性与微波加热。 在 Q2 上 $A_\mathrm{MW}\approx 7\ \mathrm{mV}$ 时 $f_\mathrm{Rabi}=3.5\ \mathrm{MHz}$、$T_2^\mathrm{Rabi}=27.6\ \mathrm{\mu s}$，$Q\approx 19$； 翻转模式样品 $f_\mathrm{Rabi}=1.256\pm 0.003\ \mathrm{MHz}$、$T_2^\mathrm{Rabi}=5.4\pm 0.4\ \mathrm{\mu s}$。

### 噪声谱重建

把不同序列（Ramsey、Hahn、CPMG、UDD）测得的 $T_2$ 与已知滤波函数联立，可反推 $S_{\delta\omega}(f)$。[[qubit-control/dynamical-decoupling|动力学解耦]]序列扫描实际上给出"在频率 $f\sim 1/\tau$ 处累积了多少相位方差"的快照；拟合 $\alpha'$ 由 $\alpha'=\alpha-1$ 关系给出 PSD 斜率 §6.5.3： 通过 55 小时 Ramsey + CPMG 联立拟合，得到锗空穴自旋体系的噪声 PSD 为 $1/f^{0.92}$，覆盖 $10^{-4}$–$10^{10}\ \mathrm{Hz}$ 频段。

### 测量注意

- **微波加热**会随脉冲数累积，CPMG 阶数过高时 $T_2^\mathrm{CPMG}(N)$ 不再单调上升甚至回落。
- **双脉冲相位连续性**：两段 $\pi/2$ 之间若相位不连续，会引入额外的虚拟 $z$ 旋转；使用 AWG 时必须把等待时间内的相位累加补偿进第一段脉冲。
- **拟合模型选择**：纯指数、高斯、拉伸指数分别对应白噪声、纯 $1/f$ 噪声与混合噪声谱；模型错误会让拟合参数偏离真实 $T_2$。
- **谷能级混淆**：硅中 $B_\mathrm{kink}$ 附近 $T_1$ 骤降但 $T_2^*$ 未必同向响应，需分别测量 $T_1(B)$ 与 $T_2^*(B)$ 以诊断自旋–谷混合通道。

## 与其他概念的关系

- [[qubit-control/ramsey-interferometry|Ramsey 干涉]]是 $T_2^*$ 的标准测量协议；它对低频 $1/f$ 噪声最敏感，是 $T_2$ 的"下限"。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]的衰减 $T_2^\mathrm{Rabi}$ 与 Ramsey、Hahn、CPMG 一起构成完整的相干图景：分别反映驱动期间、自由演化期间、聚焦低频噪声后的相干性。
- [[qubit-control/dynamical-decoupling|动力学解耦]]通过 $\pi$ 脉冲"对消"而非"消除"低频噪声，是把 $T_2^*$ 推向 $T_2$ 本征值的主要工程手段；它同时给出测量噪声谱的工具（DD noise spectroscopy）。
- [[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/interface-defects|界面缺陷]]是退相干的两大来源；材料工艺、同位素纯化、栅极介电优化与 DD 共同组成延长 $T_2$ 的多重防线——Si/SiGe 的噪声谱测量显示噪声幅值随栅氧厚度与温度上升（50 mK–1 K 近似线性），升温运行或加厚介质层都会付出噪声代价。
- [[qubit-control/electric-dipole-spin-resonance|EDSR]]与[[materials-devices/micromagnet|微磁体]]加快 Rabi 频率的同时把电荷、磁场噪声耦合进比特频率，是"驱动强"与"相干好"难以兼得的根源。
- [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]以交换相互作用 $J$ 为 $z$ 轴，$T_2^*$ 主要由电荷噪声决定；它的回波逻辑（DCZ）与自旋比特完全平行。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]因强自旋–轨道耦合使 $T_2^*$ 较短（数十至上百 ns），但 $T_2^\mathrm{CPMG}$ 可突破 ms 量级；DD 在该体系同时是最重要的延长手段和噪声谱诊断工具。
- [[circuit-qed/circuit-quantum-electrodynamics|cQED]]侧利用腔介导耦合与色散读出时，腔频 $1/f$ 噪声同样会让自旋–光子相位累积；其形式与自旋比特本身的退相干可统一处理。


## 参考文献

- Tahan, C., Joynt, R. Relaxation of excited spin, orbital, and valley qubit states in single electron silicon quantum dots. *Physical Review B* 89, 075302 (2014). DOI: 10.1103/physrevb.89.075302；arXiv:1301.0260（QAtlas 缓存：1301.0260）。
- Chiu, W.-e., Huang, C.-H., Wu, Y.-H., Goan, H.-S. Effect of Stochastic Charge Noise in Si/SiGe Quantum-Dot Spin Qubits (2025). arXiv:2510.22189（QAtlas 缓存：2510.22189）。
- 自旋退相干机制（核自旋、电荷噪声、自旋轨道）的系统论述：[[references/hanson-2007|Hanson et al., RMP 79, 1217 (2007)]]、[[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
