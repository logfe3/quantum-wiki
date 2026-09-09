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

其中 $f_{Q_i}$ 是第 $i$ 个栅极对应的比特频率；$S_{G_i}(f)=\int dt\,e^{-2\pi ift}\langle\delta V_{G_i}(t)\delta V_{G_i}(0)\rangle$ 是栅极电压噪声的功率谱密度；$\tilde\eta_t(f)=\int dt\,e^{-2\pi ift}\eta_t(t)$ 是脉冲序列对应的滤波函数（filter function），$\eta_t(t)$ 在驱动期间为 $\pm 1$（按 $\pi$ 翻转符号）以把"哪段演化贡献什么相位"编码进来。

在 Ramsey 序列里滤波函数为

$$
|\tilde\eta_\mathrm{Ramsey}(f)|^2=\left(\frac{\sin(\pi f t)}{\pi f}\right)^2,
$$

对低频 $f\lesssim 1/t$ 近似常数。Hahn 回声则把低频 $1/f$ 噪声"对消"，相应 $|\tilde\eta_\mathrm{Hahn}(f)|^2$ 在 $f\lesssim 1/t$ 急剧下降。CPMG- $N$ 把滤波窗口向高频推、整流更深，因而对同样的噪声 PSD 给出更小的累积相位方差，$T_2^\mathrm{CPMG}$ 可以比 $T_2^\mathrm{Hahn}$ 再延长一个量级以上。

幂律噪声 $S(f)=A/f^\alpha$ 下，Ramsey 与回声衰减往往呈"拉伸指数"

$$
P_\uparrow(\tau)\approx A\exp\!\left[-\left(\frac{\tau}{T_2}\right)^{1+\alpha'}\right]+B,
$$

其中衰减指数 $\alpha'=0$ 对应白噪声、$\alpha'=1$ 对应准静态 $1/f$ 噪声、$0<\alpha'<1$ 则常见于实际体系（典型实验拟合给出 $\alpha'=0.5$–$0.9$）。这意味着 $T_2^\mathrm{CPMG}\propto N^\gamma$ 中 $\gamma$ 与 $\alpha$ 直接相关，是从数据反推噪声谱的入口。

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

下表汇总本站论文依据中几类典型量子点上动力学解耦实验的实测数据；不同材料、不同噪声环境下，$T_2^\mathrm{Hahn}/T_2^*$ 与 $T_2^\mathrm{CPMG}/T_2^\mathrm{Hahn}$ 的提升幅度差异很大。

| 体系 | 比特类型 | $T_2^*$ | $T_2^\mathrm{Hahn}$ | $T_2^\mathrm{CPMG}$（$N$） | 提升比 |
| --- | --- | --- | --- | --- | --- |
| GaAs 双量子点电荷比特 | [[qubit-control/charge-qubit|电荷比特]] | $112\pm 21\ \mathrm{ps}$ | $1.36\pm 0.40\ \mathrm{ns}$（拟合 $T_2$） | — | $T_2^\mathrm{Hahn}/T_2^*\approx 12$ |
| Ge 棚顶纳米线空穴自旋（徐刚 2020） | [[qubit-control/hole-spin-qubit|空穴自旋]] | $65\pm 2\ \mathrm{ns}$ | $523\pm 41\ \mathrm{ns}$ | — | $\approx 8$ |
| Ge 棚顶纳米线空穴自旋（王柯 2020） | 空穴自旋 | $65\pm 2\ \mathrm{ns}$ | $523\pm 41\ \mathrm{ns}$（$\alpha=0.9$） | — | $\approx 8$ |
| 平面锗双量子点空穴自旋（周雨晨 2026，5.3 节） | 空穴自旋 | $136\ \mathrm{ns}$ | $401\ \mathrm{ns}$ | $6.75\ \mathrm{\mu s}$（$N_\pi=230$） | $\approx 50$ |
| 平面锗双量子点空穴自旋（周雨晨 2026，最优工作点） | 空穴自旋 | — | 较常规点提升约 $5\times$ | — | $\approx 5$ |
| 自然 Si/SiGe 自旋比特 Q1/Q2（王宁 2025） | 自旋比特 | $0.9/0.7\ \mathrm{\mu s}$ | $15.5/11.3\ \mathrm{\mu s}$（$\alpha'\approx 1$） | — | $\approx 17/16$ |
| Si-MOS 自旋比特（楚凝 2025） | 自旋比特 | $624\ \mathrm{ns}$ | $60.2\ \mathrm{\mu s}$ | — | $\approx 96$ |
| GaAs 自旋比特（陈宝宝 2017 引用文献） | 自旋比特 | — | $T_2\approx 0.87\ \mathrm{ms}$（DD 后） | — | — |

补充几个本节反复引用的具体参数：

- 栅极电压灵敏度 $|\partial f/\partial V_{G_i}|$ 一般 $10$–$100\ \mathrm{MHz/mV}$，锗自旋比特常取 $1$–$10\ \mathrm{MHz/mV}$；乘以实测噪声 PSD 的 $S_{G_i}(f)$（如锗平面器件 $S\sim 10^5$–$10^{10}\ \mathrm{Hz^2/Hz}$）直接给出累积相位方差。
- CPMG 阶数 $N$ 从 25、75 提升到 230 时，$T_2^\mathrm{CPMG}$ 近似线性增长，对应低频噪声投影随 $N$ 系统性下降（见周雨晨 2026 图 5.8）。
- 高阶 CPMG 受微波加热限制：脉冲数太多会抬升信号本底、压缩可见度，因此"无限增大 $N$"在实验中并不成立。

## 实验特征与测量

**脉冲序列实施。** 所有 DD 序列都需要精确控制 $\pi/2$ 与 $\pi$ 脉冲的幅度、相位与时序。最常见做法是用两台相位相干的任意波形发生器（AWG）分别产生 $X$、$Y$ 两个通道的脉冲，经叠加器合成 IQ 信号送入微波链路；相位校准误差（$X$–$Y$ 正交偏差）会直接降低 CPMG 的鲁棒性，因此常借助 Rabi 振荡品质因子 $Q$ 与单比特[[qubit-control/ramsey-interferometry|Ramsey]] 进行预校准。

**拟合模型选择。** 拉伸指数 $\exp[-(\tau/T_2)^{1+\alpha'}]$ 比简单指数更接近真实数据：当 $\alpha'=0$ 时退化为白噪声极限，$\alpha'=1$ 时退化为准静态极限，中间值则提示混合噪声谱。拟合时应让 $\alpha'$ 与 $T_2$ 同时自由拟合，再用 [[materials-devices/charge-noise|电荷噪声]] 模型的 PSD 形状交叉检验。

**1/f 拟合。** 周雨晨 2026 在锗空穴体系中把 CPMG 序列下测得的不同 $N$ 对应 $T_2^\mathrm{CPMG}$ 与 Ramsey 数据联合拟合，得到噪声 PSD 满足 $1/f^{0.92}$（Hahn-echo 的拟合给出 $\alpha=0.907$），并由此重建覆盖 $10^{-4}$–$10^{10}\ \mathrm{Hz}$ 的功率谱密度曲线。这种"序列扫描 → 滤波函数已知 → 反演 PSD"的做法即所谓 DD 噪声谱学（dynamical decoupling noise spectroscopy）。

**门操作中的解耦。** 在两比特门实现里，可以把 Hahn 回波波形套在 CZ（CPhase）演化外侧——即 DCZ 门：在 $\pi/2$–$\tau/2$–$\pi$–$\tau/2$–$\pi/2$ 的"骨架"内，将中间的 $\tau/2$–$\tau/2$ 自由演化替换为对称点处 $J$ 的两次开启/关闭，从而在 $J$ 演化期间执行条件相位，同时用 $\pi$ 翻转压制单比特低频相位噪声。

**失败模式与诊断。**

- 拉伸指数 $\alpha'$ 偏离预期（过大或过小），提示脉冲失真或测量带宽外的额外噪声通道。
- $T_2^\mathrm{CPMG}$ 随 $N$ 上升后回落，是微波加热的指纹：测量信号本底抬升、可见度下降、拟合误差迅速放大。
- $T_2^\mathrm{Hahn}\approx T_2^*$ 而非显著延长，说明噪声并非"准静态"，而是脉冲间隔内变化剧烈——通常意味着电学线路的高频噪声或邻近电荷跳跃。

## 解耦与其他相干延长手段的差异

- **工作点优化**：调整外磁场方向、栅压偏置使比特对电荷噪声的灵敏度最小化，本身即可延长 $T_2^*$ 与 $T_2^\mathrm{Hahn}$；周雨晨 2026 在锗空穴体系中找到一个最优磁场方向，使 $T_2^\mathrm{Hahn}$ 提升约 $5$ 倍、量子门集层析（GST）报告的单比特门错误率下降 50%。DD 与工作点优化并非互斥：前者对"剩余低频噪声"起作用，后者把"低频噪声到比特的耦合通道"先压缩。
- **同位素纯化**：在硅中把 $^{29}\mathrm{Si}$ 富集度降到 $<0.1\%$ 可让 $T_2^*$ 上百倍延长（核自旋噪声直接被压制）；这是材料层面"消除噪声源"，而 DD 是控制层面"忽略噪声"。
- **几何量子门**：[[qubit-control/geometric-quantum-gate|几何相位门]]通过把累积相位只编码在演化路径的几何部分来免疫部分失谐噪声，对低频电荷噪声有效；DD 则是显式对消两段时间内的相位积累。两者可以组合使用。
- **dressed-state 量子比特**：把比特定义为微波修饰态（Floquet 缀饰态）可以赋予比特某些对称性，使部分噪声矩阵元消失；与 DD 同样属于"对消而非消除"思路。

## 与其他概念的关系

- [[qubit-control/ramsey-interferometry|Ramsey 干涉]]测得的 $T_2^*$ 是 DD 实验的参照：$T_2^\mathrm{Hahn}/T_2^*$ 与 $T_2^\mathrm{CPMG}/T_2^\mathrm{Hahn}$ 的提升幅度直接体现低频、中频噪声的相对占比。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]的衰减 $T_2^\mathrm{Rabi}$ 与 DD 测得的 $T_2^\mathrm{Hahn}$、$T_2^\mathrm{CPMG}$ 一起构成完整的相干图景：前者反映驱动期间的相干性，后两者反映自由演化期间的相干性。
- [[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/interface-defects|界面缺陷]]是 DD 主要抑制的噪声源；DD 也常用来反推这些噪声源的 PSD 形状。
- [[qubit-control/exchange-interaction|交换相互作用]]条件演化本身可以被 DD 包裹，构成 DCZ 与交换振荡的标定方法。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]因强自旋–轨道耦合使比特对电场敏感，是 DD 收益最明显的比特类型之一；同时其 $1/f$ 噪声强，DD 也是噪声谱分析的主要工具。
- [[circuit-qed/circuit-quantum-electrodynamics|cQED]]中的腔介导耦合同样可以使用 DD 思想延长有效相干；色散读出侧的 DD 等价于"把腔探测时间分布到多个非相邻窗口"以抑制腔 $1/f$ 频移。

## 延伸阅读

- E. L. Hahn, "Spin echoes", *Physical Review* (1950). [DOI: 10.1103/PhysRev.80.580]
- H. Y. Carr, E. M. Purcell, "Effects of diffusion on free precession in nuclear magnetic resonance experiments", *Physical Review* (1954). [DOI: 10.1103/PhysRev.94.630]
- L. Viola, S. Lloyd, "Dynamical suppression of decoherence in two-state quantum systems", *Physical Review A* (1998). [DOI: 10.1103/PhysRevA.58.2733]
- G. S. Uhrig, "Keeping a quantum bit alive by optimized $\pi$-pulse sequences", *Physical Review Letters* (2007). [DOI: 10.1103/PhysRevLett.98.100504]

## 论文依据

- [[sources/wang-ke|王柯 2020]]，PDF pp. 92–94：GaAs 空穴自旋 Rabi 与 EDSR 表征；pp. 93 的 Hahn 回波拟合给出 $I=A\exp\!\left(-(\tau/T_2^\mathrm{Hahn})^{1+\alpha}\right)$，$\alpha=0.9$，$T_2^\mathrm{Hahn}=523\pm 41\ \mathrm{ns}$，较 $T_2^*=65\pm 2\ \mathrm{ns}$ 提升约 8 倍。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 64–66：Ge 棚顶纳米线空穴自旋的 $T_2^*=65\pm 2\ \mathrm{ns}$、Hahn 回波 $T_2^\mathrm{Hahn}=523\pm 41\ \mathrm{ns}$，明确把回波延长归因于压制缓慢变化的核磁场涨落。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 7–9：摘要与绪论明确"对比 Ramsey 与动力学解耦序列证实低频噪声占主导"；PDF pp. 46–47（§2.5）：CPMG- $N$ 序列原理与 $T_2^\mathrm{CPMG}$ 随 $N$ 提升的物理意义；PDF pp. 117–118（§5.3.4）：锗空穴自旋比特 $T_2^*=136\ \mathrm{ns}$、$T_2^\mathrm{Echo}=401\ \mathrm{ns}$、$T_2^\mathrm{CPMG}=6.75\ \mathrm{\mu s}$（$N_\pi=230$，约 50 倍延长）；PDF p. 149（§6.5.3）：滤波函数 $\tilde\eta_t(f)$ 与噪声谱重建，Hahn-echo 拟合 $\alpha=0.907$；PDF p. 150（§6.5.4）：基于 55 小时 Ramsey + CPMG 数据重建的 $1/f^{0.92}$ 噪声谱；PDF p. 32（§1.4）：最优工作点处 $T_2^\mathrm{Hahn}$ 较常规工况提升约 5 倍、GST 错误率下降 50%、单比特门保真度最高 $99.82\%$。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF pp. 47–51（§3.4）：GaAs 电荷量子比特的回声序列实施，$\pi/2$ 脉冲 180 ps、$\pi$ 脉冲 300 ps、脉冲高度 $V_p=150\ \mathrm{\mu eV}$；回声幅度随总演化时间衰减拟合 $T_2=1360\pm 400\ \mathrm{ps}$，远长于 Ramsey 测得的 $112\pm 21\ \mathrm{ps}$，并指出该体系以低频电荷噪声为主。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 62（§3.3.3）：Hahn echo 序列示意图与公式 $P^\uparrow(\tau)=A\exp\!\left(-(\tau/T_2^\mathrm{Hahn})^{1+\alpha'}\right)+B$，Q1/Q2 退相干时间从 $T_2^*\approx 0.9/0.7\ \mathrm{\mu s}$ 提升至 $T_2^\mathrm{Hahn}=15.5/11.3\ \mathrm{\mu s}$，拟合指数 $\alpha'\approx 1$ 提示 $1/f^2$ 类准静态噪声；PDF pp. 73–75（§3.4.5）：DCZ 门波形与实现，Hahn echo 包裹 CPhase 演化以抑制低频单比特相位噪声并制备 Bell 态。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 43（§2.4.2）：Hahn echo 与 CPMG 序列原理，以及回波"重聚焦准静态场相位"的物理解释；PDF p. 82（§4.4）：Si-MOS 量子点 $T_2^*=624\ \mathrm{ns}$ 与 Hahn 回波 $T_2^\mathrm{Echo}=60.2\ \mathrm{\mu s}$，提升约 96 倍。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF p. 27（§1）：用 Bloch 球语言图示回波"前后段相位反转抵消"原理，并综述 GaAs 体系中回波延长 $T_2$ 至微秒量级的早期结果。