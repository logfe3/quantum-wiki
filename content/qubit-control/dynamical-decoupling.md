---
title: 动力学解耦
description: 用精心安排的翻转脉冲平均低频噪声、延长量子叠加态有效相干时间的方法。
aliases:
 - Hahn echo
 - CPMG
 - 自旋回声
 - 哈恩回波
 - 动态解耦
 - 回波技术
tags:
 - 量子比特操控
 - 噪声
date: 2026-09-08
source: QAtlas
qatlas_id: qa_01m0qv6qhgp1mk2am2vvmjws3r
source_updated: 2026-09-09T14:48:24Z
---

<div class="entry-lead">动力学解耦不是消灭噪声，而是让量子比特在序列不同区间对慢噪声积累相反相位，从而在末端重新聚焦；脉冲数越多，解耦"窗口"越推向高频、剩余噪声投影到比特相位上的面积越小，测得的相干时间越接近材料的本征退相干。</div>

## 物理图像与历史脉络

动力学解耦（dynamical decoupling，DD）起源于核磁共振：1950 年 E. Hahn 在 [[fundamentals/semiconductor-quantum-dot|量子点]]等固态自旋体系中流行的"Hahn 回波"序列（[[qubit-control/ramsey-interferometry|Ramsey]] + 中点 $\pi$ 脉冲）已经证明，只要噪声在两次自由演化中保持近似不变，前后段累积的相位可以互相抵消；1958 年 H. Y. Carr 与 E. M. Purcell 提出在演化中插入多个 $\pi$ 脉冲提高对快噪声的抑制，后由 S. Meiboom 与 D. Gill 改进为绕 $y$ 轴施加脉冲的 CPMG（Carr–Purcell–Meiboom–Gill）序列，从而避免 $\pi$ 脉冲面积误差累积。这一思路在 1990 年代被 L. Viola 与 S. Lloyd 推广到通用量子信息场景，并命名为"动力学解耦"。

在半导体量子点体系里，DD 最初被用来压制电荷量子比特的低频电荷噪声；自旋比特广泛使用之后，DD 既被作为"延长 $T_2$"的工程手段，也被作为"测量噪声谱"的诊断手段（dynamical decoupling noise spectroscopy）。这里的"动力学"二字强调了脉冲由外加微波主动产生，区别于物质内禀的"自然解耦"（如自旋–电荷的某种对称点保护）。

## 从 Ramsey 衰衰减到回声重聚焦

考虑一个二能级量子比特在磁场失谐为 $\delta=\omega_\mathrm{MW}-\omega_q$ 时的自由演化。Ramsey 序列 $\pi/2$–$\tau$–$\pi/2$ 让比特在赤道面上转动 $\delta\tau$ 的角度，再被第二个 $\pi/2$ 投影到 $z$ 轴。实验中测得的布居数通常用

$$
P_\uparrow(\tau)=\rho(0)\cos(\Omega_\mathrm{Ramsey}\tau)\exp\!\left(-\frac{\tau}{T_2^*}\right)+\rho_0
$$

拟合，$\Omega_\mathrm{Ramsey}$ 是微波与比特频率的失谐，$T_2^*$ 是包络衰减时间。Ramsey 对低频（准静态）噪声最敏感——任何在两次读出之间缓慢漂移的频率都会贡献随机相位——因此 $T_2^*$ 通常显著短于材料的本征退相干时间 $T_2$。

Hahn 回声序列 $\pi/2$–$\tau/2$–$\pi$–$\tau/2$–$\pi/2$ 在两次演化之间插入一个绕 $x$ 轴（或 $y$ 轴）的 $\pi$ 脉冲。设噪声为缓慢变化的比特频率漂移 $\delta\omega(t)$，则两段演化中累积的相位分别为 $\phi_1=\int_0^{\tau/2}\delta\omega(t)\,dt$ 与 $\phi_2=\int_{\tau/2}^{\tau}\delta\omega(t)\,dt$，中间的 $\pi$ 把后者反号；只要 $\delta\omega$ 在总等待时间内近似不变，$\phi_1+\phi_2\approx 0$，比特态在末端重新聚焦。残留的不可逆相位涨落由噪声的高频分量与脉冲面积误差贡献，因此

$$
T_2^\mathrm{Hahn} \gg T_2^*
$$

是常态。

## 噪声谱–滤波函数描述

更形式地，把比特哈密顿量写作 $H(t)=\tfrac{1}{2}[\omega_q+\delta\omega(t)]\sigma_z$，其中 $\delta\omega(t)$ 由栅极电压噪声 $\delta V_{G_i}(t)$ 通过电学灵敏度 $\partial\omega_q/\partial V_{G_i}$ 耦合进来。自旋态 $|\uparrow\rangle$ 与 $|\downarrow\rangle$ 之间积累的随机相位方差为

$$
\langle\delta\phi^2(t)\rangle=4\pi^2\sum_i\left(\frac{\partial f_{Q_i}}{\partial V_{G_i}}\right)^2\!\int_{-\infty}^{+\infty}\!df\, S_{G_i}(f)\,|\tilde\eta_t(f)|^2
$$

其中 $f_{Q_i}$ 是第 $i$ 个栅极对应的比特频率；$S_{G_i}(f)=\int dt\,e^{-2\pi ift}\langle\delta V_{G_i}(t)\delta V_{G_i}(0)\rangle$ 是栅极电压噪声的功率谱密度；$\tilde\eta_t(f)=\int dt\,e^{-2\pi ift}\eta_t(t)$ 是脉冲序列对应的滤波函数（filter function），$\eta_t(t)$ 在驱动期间为 $\pm 1$（按 $\pi$ 翻转符号）以把"哪段演化贡献什么相位"编码进来。滤波函数分析也可以反过来指导**脉冲设计**：在非马尔可夫 1/f 电荷噪声模型下用 Krotov 最优控制合成的脉冲，其滤波谱在目标频段显著压低噪声权重，且对相干噪声也比常规高斯脉冲更鲁棒（见[[qubit-control/spin-decoherence|自旋退相干]]词条的随机噪声模型一节）。

在 Ramsey 序列里滤波函数为

$$
|\tilde\eta_\mathrm{Ramsey}(f)|^2=\left(\frac{\sin(\pi f t)}{\pi f}\right)^2
$$

对低频 $f\lesssim 1/t$ 近似常数。Hahn 回声则把低频 $1/f$ 噪声"对消"，相应 $|\tilde\eta_\mathrm{Hahn}(f)|^2$ 在 $f\lesssim 1/t$ 急剧下降。CPMG- $N$ 把滤波窗口向高频推、整流更深，因而对同样的噪声 PSD 给出更小的累积相位方差，$T_2^\mathrm{CPMG}$ 可以比 $T_2^\mathrm{Hahn}$ 再延长一个量级以上。

幂律噪声 $S(f)=A/f^\alpha$ 下，Ramsey 与回声衰减往往呈"拉伸指数"

$$
P_\uparrow(\tau)\approx A\exp\!\left[-\left(\frac{\tau}{T_2}\right)^{1+\alpha'}\right]+B
$$

其中衰减指数 $\alpha'=0$ 对应白噪声、$\alpha'=1$ 对应准静态 $1/f$ 噪声、$0<\alpha'<1$ 则常见于实际体系（典型实验拟合给出 $\alpha'=0.5$–$0.9$）。这意味着 $T_2^\mathrm{CPMG}\propto N^\gamma$ 中 $\gamma$ 与 $\alpha$ 直接相关，是从数据反推噪声谱的入口。

## 实验落地：SiMOS 自旋比特的噪声谱学（Chan 2018）

Chan 等人把上述"CPMG=带通滤波器"的方案在 SiMOS 量子点自旋比特上完整落地（富集 ⁸⁰⁰ ppm ²⁹Si 外延、$B_\mathrm{dc}=1.4$ T、$f_0=38.7765$ GHz、g=1.9789），把比特当成纳米电路里的**噪声谱仪**。操作要领：固定 $\pi$ 脉冲间隔 $\tau_w$、逐步增加脉冲数 $N$ 直到自旋翻转概率完全衰减，对每个 $\tau_w$ 用拉伸指数 $P(t)=P_0\exp[-(t/T_2^S)^n]+P_\infty$ 提取 $T_2^S$，再按

$$
S(\omega)=\frac{\pi^2}{4\,T_2^S(\omega)},\qquad f=\frac{1}{2\tau_w}
$$

换算成噪声功率谱；可用频段为 1.3–50 kHz（低频端受 $T_2^\mathrm{H}$ 限制、高频端受最短 $\pi$ 脉冲限制）。器件的相干指标链为 $T_1\approx1$ s、$T_2^*=33\pm8\ \mu$s、$T_2^\mathrm{H}=401\pm42\ \mu$s、$T_2^\mathrm{CP}=1.5\pm0.2$ ms（N=7）、$T_2^\mathrm{CPMG}=6.7\pm2.9$ ms（N=122 饱和）；RBM 给出 Clifford 门 99.83%、本征门 99.91%（IQ 矢量微波源 + ESR 频率实时反馈），保证谱学不被控制脉冲限制。

![[assets/figures/dynamical-decoupling/chan2018-fig2-randomized-benchmarking.jpg]]
*随机化基准先行：各 Clifford 门（REF/I/X/Y/±X/2/±Y/2）交错基准给出 99.83% 门保真度、本征门 99.91%——先证明控制不是瓶颈，相干时间与噪声谱学数据才有意义。图源：Chan et al. (2018), Fig. 2。*

![[assets/figures/dynamical-decoupling/chan2018-fig3b-noise-spectrum.jpg]]
*SiMOS 量子点自旋比特的噪声功率谱（CPMG 谱学，误差棒为指数拟合 95% 置信区间）：f<2 kHz 段 α=−2.5（$C_1/\omega^{2.5}$，$C_1=3\times10^{13}$）；2–20 kHz 段 α=−0.8~−1 的近 1/f 电荷噪声（$C_2/\omega$ 或 $C_3/\omega^{0.8}$）；f>20 kHz 白噪声底 350 rad²/s；f≈3.6 kHz 的尖峰经独立测量溯源到 SIM928 直流电压源（0.2 Hz–50 kHz 平均 $V_\mathrm{rms}\approx1.27\ \mu$V）。图源：Chan et al. (2018), Fig. 3。*

三个方法论结论值得单列：

1. **谱的分区诊断**：低频 $\alpha=-2.5$ 段在同一低温磁体系统中的 Si:P 施主实验里系数不同（$C_1=6\times10^{11}$），提示该段未必是磁体线圈漂移；2–20 kHz 的近 1/f 段归为[[materials-devices/charge-noise|电荷噪声]]——量子点比施主对此更敏感，定量根源是更大的 Stark 位移（本器件 $dg/dV_{G1}=-36.21$ MHz/V、$dg/dV_{G2}=-22.88$ MHz/V）。
2. **音调注入校准**：向栅极注入 20 kHz 正弦音（白底饱和频率），自旋上概率从约 $160\ \mu\mathrm{V_{pp}}$ 起在音调频率处显著下降——与施主体系的 ~200 µVpp 相当（其噪声底低 ~35 倍）；三次（6.66 kHz）与五次（4 kHz）**奇次**谐波可见而偶次谐波被 CPMG 滤波函数抑制，直接验证了滤波函数描述。
3. **仪器峰溯源**：3.6 kHz 尖峰在施主实验中未见，对 SIM928 电压源做独立谱测量发现同频尖峰——噪声谱学能把测量电子学的缺陷定位到具体器件，指导滤波或换源。

## 关键序列家族

### Hahn 回波

最基础的 DD 序列，仅含一个 $\pi$ 脉冲；通常绕 $x$ 轴施加以与前后两个 $\pi/2$ 轴正交。优点是结构简单、对直流频移最敏感；缺点是只能压制"在 $\tau/2$ 内近似不变"的低频噪声。

### CPMG / XY- $N$

CPMG- $N$ 把 $N$ 个 $\pi$ 脉冲等距插入长度为 $\tau$ 的演化段，脉冲通常绕 $y$ 轴施加。绕 $y$ 轴的好处是单个 $\pi$ 脉冲的面积误差不会沿序列累积（XY-4、XY-8 进一步把脉冲在 $x$、$y$ 间交替以同时压制 $x$、$y$ 两类旋转误差）。CPMG 把滤波窗口推向 $\sim N/\tau$ 量级，$N$ 越大对中高频噪声压制越深，但每多一个脉冲，$\pi$ 脉冲的面积误差与加热效应也累积越多，因此 $T_2^\mathrm{CPMG}(N)$ 通常先随 $N$ 上升、再在加热或脉冲失真主导时饱和甚至回落。

### CDD / UDD / 周期动力学解耦

进一步的高级序列包括 Khodjasteh–Lidar 提出的级联动力学解耦（concatenated DD，CDD），以及 G. S. Uhrig 推导的最优单轴序列 UDD（对纯 $1/f^\alpha$ 噪声，$N$ 脉冲的非等距间隔被精确算出），它们把滤波函数在更低频段也压成高阶零。半导体量子点体系中 CDD 与 UDD 较少使用，主要原因是实际噪声谱并非纯幂律、且多脉冲带来的加热代价常常超过收益；CPMG- $N$ 仍是默认选项。

### 与门操作融合：解耦门（DD 门）

把 DD 序列"包裹"在两比特条件相位演化（[[qubit-control/cnot-gate|CZ]]）两侧，即把交换 $J$ 的开启时间切成前后相等两段、中间插一个 $\pi$ 翻转，就得到"解耦 CZ"（DCZ）门：

$$
U_\mathrm{DCZ}=\pi_{X,1}\otimes\pi_{X,2}\;U_\mathrm{CZ}\;\pi_{X,1}\otimes\pi_{X,2}\;U_\mathrm{CZ}
$$

DCZ 不改变 CZ 自身的相位条件，但让条件演化过程中累积的低频单比特相位被 $\pi$ 脉冲翻转、前后两段相互抵消，从而把单比特相位噪声从两比特门错误预算中显著剔除。该思路可推广到任意被"准静态"相位噪声污染的演化（如[[qubit-control/exchange-interaction|交换振荡]]本身的标定）。

<!-- FIGURE: 脉冲序列时序对比：Ramsey、Hahn echo、CPMG-N、DCZ，每条对应滤波函数窗与累积相位方差示意 -->

## 参数与量级

下表汇总本站论文中几类典型量子点上动力学解耦实验的实测数据；不同材料、不同噪声环境下，$T_2^\mathrm{Hahn}/T_2^*$ 与 $T_2^\mathrm{CPMG}/T_2^\mathrm{Hahn}$ 的提升幅度差异很大。

| 体系 | 比特类型 | $T_2^*$ | $T_2^\mathrm{Hahn}$ | $T_2^\mathrm{CPMG}$（$N$） | 提升比 |
| --- | --- | --- | --- | --- | --- |
| GaAs 双量子点电荷比特 | [[qubit-control/charge-qubit|电荷比特]] | $112\pm 21\ \mathrm{ps}$ | $1.36\pm 0.40\ \mathrm{ns}$（拟合 $T_2$） | — | $T_2^\mathrm{Hahn}/T_2^*\approx 12$ |
| Ge 棚顶纳米线空穴自旋 | [[qubit-control/hole-spin-qubit|空穴自旋]] | $65\pm 2\ \mathrm{ns}$ | $523\pm 41\ \mathrm{ns}$ | — | $\approx 8$ |
| Ge 棚顶纳米线空穴自旋 | 空穴自旋 | $65\pm 2\ \mathrm{ns}$ | $523\pm 41\ \mathrm{ns}$（$\alpha=0.9$） | — | $\approx 8$ |
| 平面锗双量子点空穴自旋 | 空穴自旋 | $136\ \mathrm{ns}$ | $401\ \mathrm{ns}$ | $6.75\ \mathrm{\mu s}$（$N_\pi=230$） | $\approx 50$ |
| 平面锗双量子点空穴自旋 | 空穴自旋 | — | 较常规点提升约 $5\times$ | — | $\approx 5$ |
| 自然 Si/SiGe 自旋比特 Q1/Q2 | 自旋比特 | $0.9/0.7\ \mathrm{\mu s}$ | $15.5/11.3\ \mathrm{\mu s}$（$\alpha'\approx 1$） | — | $\approx 17/16$ |
| Si-MOS 自旋比特 | 自旋比特 | $624\ \mathrm{ns}$ | $60.2\ \mathrm{\mu s}$ | — | $\approx 96$ |
| GaAs 自旋比特（ 引用文献） | 自旋比特 | — | $T_2\approx 0.87\ \mathrm{ms}$（DD 后） | — | — |

补充几个本节反复引用的具体参数：

- 栅极电压灵敏度 $|\partial f/\partial V_{G_i}|$ 一般 $10$–$100\ \mathrm{MHz/mV}$，锗自旋比特常取 $1$–$10\ \mathrm{MHz/mV}$；乘以实测噪声 PSD 的 $S_{G_i}(f)$（如锗平面器件 $S\sim 10^5$–$10^{10}\ \mathrm{Hz^2/Hz}$）直接给出累积相位方差。
- CPMG 阶数 $N$ 从 25、75 提升到 230 时，$T_2^\mathrm{CPMG}$ 近似线性增长，对应低频噪声投影随 $N$ 系统性下降（见 图 5.8）。
- 高阶 CPMG 受微波加热限制：脉冲数太多会抬升信号本底、压缩可见度，因此"无限增大 $N$"在实验中并不成立。

## 实验特征与测量

**脉冲序列实施。** 所有 DD 序列都需要精确控制 $\pi/2$ 与 $\pi$ 脉冲的幅度、相位与时序。最常见做法是用两台相位相干的任意波形发生器（AWG）分别产生 $X$、$Y$ 两个通道的脉冲，经叠加器合成 IQ 信号送入微波链路；相位校准误差（$X$–$Y$ 正交偏差）会直接降低 CPMG 的鲁棒性，因此常借助 Rabi 振荡品质因子 $Q$ 与单比特[[qubit-control/ramsey-interferometry|Ramsey]] 进行预校准。

**拟合模型选择。** 拉伸指数 $\exp[-(\tau/T_2)^{1+\alpha'}]$ 比简单指数更接近真实数据：当 $\alpha'=0$ 时退化为白噪声极限，$\alpha'=1$ 时退化为准静态极限，中间值则提示混合噪声谱。拟合时应让 $\alpha'$ 与 $T_2$ 同时自由拟合，再用 [[materials-devices/charge-noise|电荷噪声]] 模型的 PSD 形状交叉检验。

**1/f 拟合。** 在锗空穴体系中把 CPMG 序列下测得的不同 $N$ 对应 $T_2^\mathrm{CPMG}$ 与 Ramsey 数据联合拟合，得到噪声 PSD 满足 $1/f^{0.92}$（Hahn-echo 的拟合给出 $\alpha=0.907$），并由此重建覆盖 $10^{-4}$–$10^{10}\ \mathrm{Hz}$ 的功率谱密度曲线。这种"序列扫描 → 滤波函数已知 → 反演 PSD"的做法即所谓 DD 噪声谱学（dynamical decoupling noise spectroscopy）。

**门操作中的解耦。** 在两比特门实现里，可以把 Hahn 回波波形套在 CZ（CPhase）演化外侧——即 DCZ 门：在 $\pi/2$–$\tau/2$–$\pi$–$\tau/2$–$\pi/2$ 的"骨架"内，将中间的 $\tau/2$–$\tau/2$ 自由演化替换为对称点处 $J$ 的两次开启/关闭，从而在 $J$ 演化期间执行条件相位，同时用 $\pi$ 翻转压制单比特低频相位噪声。

**失败模式与诊断。**

- 拉伸指数 $\alpha'$ 偏离预期（过大或过小），提示脉冲失真或测量带宽外的额外噪声通道。
- $T_2^\mathrm{CPMG}$ 随 $N$ 上升后回落，是微波加热的指纹：测量信号本底抬升、可见度下降、拟合误差迅速放大。
- $T_2^\mathrm{Hahn}\approx T_2^*$ 而非显著延长，说明噪声并非"准静态"，而是脉冲间隔内变化剧烈——通常意味着电学线路的高频噪声或邻近电荷跳跃。

## 解耦与其他相干延长手段的差异

- **工作点优化**：调整外磁场方向、栅压偏置使比特对电荷噪声的灵敏度最小化，本身即可延长 $T_2^*$ 与 $T_2^\mathrm{Hahn}$；在锗空穴体系中已有实验找到一个最优磁场方向，使 $T_2^\mathrm{Hahn}$ 提升约 $5$ 倍、量子门集层析（GST）报告的单比特门错误率下降 50%。DD 与工作点优化并非互斥：前者对"剩余低频噪声"起作用，后者把"低频噪声到比特的耦合通道"先压缩。
- **同位素纯化**：在硅中把 $^{29}\mathrm{Si}$ 富集度降到 $<0.1\%$ 可让 $T_2^*$ 上百倍延长（核自旋噪声直接被压制）；这是材料层面"消除噪声源"，而 DD 是控制层面"忽略噪声"。
- **几何量子门**：[[qubit-control/geometric-quantum-gate|几何相位门]]通过把累积相位只编码在演化路径的几何部分来免疫部分失谐噪声，对低频电荷噪声有效；DD 则是显式对消两段时间内的相位积累。两者可以组合使用。
- **dressed-state 量子比特**：把比特定义为微波修饰态（Floquet 缀饰态）可以赋予比特某些对称性，使部分噪声矩阵元消失；与 DD 同样属于"对消而非消除"思路。

### 动态生成无退相干子空间

解耦的更高层应用：不只压制噪声，而是**主动诱导对称性**生成无退相干子空间/子系统（DFS/DSS）——系统天然可能不具备支撑 DFS 的对称性，但动力学解耦的脉冲序列可以**人工制造**这种对称性：把信息编码到对称保护态上，集体噪声被对称性抵消。这把解耦从"被动防御"（延长 $T_2$）推广到"主动编码保护"（DFS 容错），与量子纠错形成互补的噪声对策层级。

![[assets/figures/dynamical-decoupling/cd3ec8db69fe628342be1c1ea95c94805bdeb7b26e3a7f7e78c6ae27e921cd33.jpg]]

*动力学解耦诱导的 DFS：脉冲序列人工制造对称性——信息编码进对称保护态，集体噪声被对称性抵消。图源：arXiv:2402.07278，Fig. 1。*

![[assets/figures/dynamical-decoupling/834cb9eae6677f3fbcebf655603f44be1246e143ba9d6d11074bfdd9f976bf89.jpg]]

*DFS 生成的实验演示：解耦序列前后编码态的保真度——对称保护下的信息存活时间显著延长。图源：arXiv:2402.07278，Fig. 2。*

## 与其他概念的关系

- [[qubit-control/ramsey-interferometry|Ramsey 干涉]]测得的 $T_2^*$ 是 DD 实验的参照：$T_2^\mathrm{Hahn}/T_2^*$ 与 $T_2^\mathrm{CPMG}/T_2^\mathrm{Hahn}$ 的提升幅度直接体现低频、中频噪声的相对占比。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]的衰减 $T_2^\mathrm{Rabi}$ 与 DD 测得的 $T_2^\mathrm{Hahn}$、$T_2^\mathrm{CPMG}$ 一起构成完整的相干图景：前者反映驱动期间的相干性，后两者反映自由演化期间的相干性。
- [[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/interface-defects|界面缺陷]]是 DD 主要抑制的噪声源；DD 也常用来反推这些噪声源的 PSD 形状。
- [[qubit-control/exchange-interaction|交换相互作用]]条件演化本身可以被 DD 包裹，构成 DCZ 与交换振荡的标定方法。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]因强自旋–轨道耦合使比特对电场敏感，是 DD 收益最明显的比特类型之一；同时其 $1/f$ 噪声强，DD 也是噪声谱分析的主要工具。
- [[circuit-qed/circuit-quantum-electrodynamics|cQED]]中的腔介导耦合同样可以使用 DD 思想延长有效相干；色散读出侧的 DD 等价于"把腔探测时间分布到多个非相邻窗口"以抑制腔 $1/f$ 频移。

## 参考文献

- Chan, K. W., Huang, W., Yang, C. H., Hwang, J. C. C., Hensen, B., Tanttu, T., Hudson, F. E., Itoh, K. M., Laucht, A., Morello, A., Dzurak, A. S. Assessment of a silicon quantum dot spin qubit environment via noise spectroscopy. *Physical Review Applied* 10, 044017 (2018). DOI: 10.1103/physrevapplied.10.044017；arXiv:1803.01609（QAtlas 缓存：1803.01609）。
