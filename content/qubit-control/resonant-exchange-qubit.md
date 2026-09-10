---
title: 共振交换量子比特
description: 以线性三量子点中的三个自旋编码、主要通过交换相互作用全电操控的量子比特。
aliases:
  - RX量子比特
  - 共振交换比特
  - RX qubit
  - resonant exchange qubit
tags:
  - 量子比特操控
  - 三量子点
  - 交换作用
date: 2026-09-08
---

<div class="entry-lead">共振交换量子比特将三个电子分别放入三个量子点，用总自旋子空间编码逻辑态；电压调节相邻交换作用，就能在不直接翻转单个自旋的情况下操控比特。</div>

## 物理图像与编码动机

共振交换（resonant exchange，RX）量子比特编码于线性[[fundamentals/double-quantum-dot|双量子点]]的自然推广——线性三量子点（triple quantum dot，TQD）中固定三个电子的体系，工作区域为每个点各囚禁一个电子的 $(1,1,1)$ 电荷态。与依赖外磁场劈裂的[[qubit-control/single-spin-qubit|单自旋量子比特]]不同，RX 比特的频率不依赖外磁场，完全由栅压控制的[[qubit-control/exchange-interaction|交换相互作用]]设定，因此无需在每个比特旁集成[[materials-devices/micromagnet|微磁体]]，也不依赖微波磁场驱动。

这一编码方案相对其他自旋比特的优势可以归纳为五点：

1. 比特频率电学可调，降低了大规模[[scaling-automation/quantum-dot-array|量子点阵列]]中逐比特寻址的布线复杂度；
2. 自旋态与电荷态相互杂化，比特带有较大的电偶极矩，容易与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]实现[[circuit-qed/strong-coupling|强耦合]]，适合构建微波光子总线；
3. 不依赖微磁体，器件结构简单，同时去除了金属杂散场引入的退相干通道；
4. 零磁场下即可编码，原则上可与需要低磁场环境的超导量子比特等体系混合集成；
5. 编码位于对全局噪声不敏感的无退相干子空间附近，有利于延长相干时间。

代价同样明确：三点结构比双点多出一个控制维度，电荷态空间更复杂，泄漏态更多，标定负担更重。

<!-- FIGURE: 固定总电子数为 3 时线性三量子点的电荷稳定图：中心 (1,1,1) 区被 (2,0,1)、(1,0,2)、(1,2,0)、(0,2,1) 等六种不对称电荷态包围，标注失谐参量 ε、Δ 的轴方向与 RX 比特的工作区域 -->

## 理论模型

### 三电子 Hubbard 模型与失谐参量

三个电子的线性三量子点用扩展 Hubbard 模型描述：

$$
\hat{H}_{\mathrm{TQD}}=\sum_{i=1}^{3}\mu_i\hat{n}_i+\sum_{i=1}^{3}\frac{U_i}{2}\hat{n}_i(\hat{n}_i-1)+\sum_{i\neq j}U_{ij}\hat{n}_i\hat{n}_j+\sum_{i\neq j,\sigma}\left(t_{ij}\hat{c}_{i\sigma}^{\dagger}\hat{c}_{j\sigma}+\mathrm{H.c.}\right),
$$

其中 $\hat{n}_i=\sum_\sigma \hat{c}_{i\sigma}^{\dagger}\hat{c}_{i\sigma}$ 是第 $i$ 个点的电子数算符，$\mu_i$、$U_i$ 分别是化学势与[[fundamentals/charging-energy|充电能]]，$U_{ij}$ 是点间相互作用，$t_{ij}$ 是[[fundamentals/tunnel-coupling|隧穿耦合]]；线性构型中可设 $t_{13}=0$。

实验上不直接控制各点化学势，而是控制两个失谐参量

$$
\varepsilon=\frac{\mu_{(2,0,1)}-\mu_{(1,0,2)}}{2},\qquad
\Delta=\mu_{(1,1,1)}-\frac{\mu_{(2,0,1)}+\mu_{(1,0,2)}}{2},
$$

其中 $\mu_{(n_1,n_2,n_3)}$ 是对应电荷态的电化学势。$\varepsilon$ 衡量左右两侧双占据态 $(2,0,1)$ 与 $(1,0,2)$ 的相对能量，$\Delta$ 衡量 $(1,1,1)$ 相对二者的平均高度。二者经杆臂因子 $\alpha_\varepsilon$、$\alpha_\Delta$ 与虚拟电极电压线性关联：$V_\varepsilon=(V_{P1}-V_{P3})/2$，$V_\Delta=V_{P2}-(V_{P1}+V_{P3})/2$，测量时保持平均电压 $V_A=(V_{P1}+V_{P2}+V_{P3})/3$ 不变——这正是[[scaling-automation/virtual-gates|虚拟栅极]]技术在三点体系的形态。失谐零点取在 $(2,0,1)$、$(1,1,1)$、$(1,0,2)$ 三种电荷态[[fundamentals/charge-stability-diagram|电荷稳定图]]的交汇点。

### 自旋态空间与编码

设每个点只保留一个轨道态，三个电子共 20 个量子态：对称电荷态 $(1,1,1)$ 含 8 个自旋态，其余电荷态各含 2 个。自旋空间分解为 $\hat{H}_{3\mathrm{spin}}=\hat{H}_{1/2}\oplus\hat{H}_{1/2}\oplus\hat{H}_{3/2}$；当磁场梯度与自旋轨道耦合较弱时，总自旋 $S=3/2$ 的四重态能量显著偏高，可以略去。零磁场下 $S_z=\pm 1/2$ 两个 $S=1/2$ 双重态简并，以 $S_z=+1/2$ 为例，最低的两个 $(1,1,1)$ 态为

$$
|0_+\rangle=|s\rangle_{13}|\uparrow\rangle_2=\frac{1}{\sqrt{2}}\left(|\uparrow\uparrow\downarrow\rangle-|\downarrow\uparrow\uparrow\rangle\right),
$$

$$
|1_+\rangle=\sqrt{\frac{2}{3}}\,|t_+\rangle_{13}|\downarrow\rangle_2-\frac{1}{\sqrt{3}}\,|t_0\rangle_{13}|\uparrow\rangle_2=\frac{1}{\sqrt{6}}\left(2|\downarrow\downarrow\uparrow\rangle-|\uparrow\downarrow\downarrow\rangle-|\downarrow\uparrow\downarrow\rangle\right),
$$

其中 $|s\rangle_{ij}$、$|t_0\rangle_{ij}$、$|t_+\rangle_{ij}$ 是第 $i$、$j$ 点上两电子的单态与三重态。由此存在两种编码方式：**子空间编码**施加较大全局磁场解除 $S_z=\pm 1/2$ 简并，取其一作为比特空间；**子系统编码**不加磁场，以 $|0\rangle=|0_\pm\rangle$、$|1\rangle=|1_\pm\rangle$ 成对编码，只要没有任何相互作用区别对待 $\pm$ 分量，额外的自由度就只是一个旁观者，比特仍然定义良好。

将双占据电荷态 $|s\rangle_{11}|\uparrow\rangle_3$（即 $(2,0,1)$）与 $|\uparrow\rangle_1|s\rangle_{33}$（即 $(1,0,2)$）纳入，并略去需两次隧穿才能到达的构型，对称情形（$t_{12}=t_{21}\equiv t_l/\sqrt{2}$，$t_{23}=t_{32}\equiv t_r/\sqrt{2}$）下哈密顿量约化为以 $\{|0\rangle,|1\rangle\}$ 加四个双占据态为基的 $6\times 6$ 矩阵，其中 $|0\rangle$、$|1\rangle$ 与双占据态之间的耦合矩阵元为 $t_{l,r}/2$ 与 $\sqrt{3}\,t_{l,r}/2$——$\sqrt{3}$ 因子来自三重态成分与电荷态的耦合。

### EO 与 RX 两种工作区

同一组编码态随失谐位置不同给出两种比特：

- $\varepsilon=0$、$\Delta=U$（稳定图中心）附近编码**交换（exchange-only，EO）量子比特**：电荷几乎不移动，交换作用平时关闭、操作时经脉冲打开，仅靠交换即可实现通用门；但正因为电荷态不变，EO 比特很难与谐振腔耦合。
- $(\Delta+U)\gg\varepsilon$、靠近 $(2,0,1)$ 与 $(1,0,2)$ 电荷态的区域编码 **RX 量子比特**：交换作用始终打开，且比特态杂化了双占据电荷成分，天然带有电偶极矩，便于与谐振腔耦合。

### RX 有效哈密顿量与比特频率

RX 工作区远离其他电荷态，只保留 $(1,1,1)$、$(2,0,1)$、$(1,0,2)$ 三种构型即得四态有效哈密顿量（能量零点取在 $(1,1,1)$ 态）：

$$
\hat{H}_{\mathrm{eff}}=
\begin{pmatrix}
0 & 0 & t_l/2 & t_r/2\\
0 & 0 & \sqrt{3}\,t_l/2 & -\sqrt{3}\,t_r/2\\
t_l/2 & \sqrt{3}\,t_l/2 & -\varepsilon-\Delta & 0\\
t_r/2 & -\sqrt{3}\,t_r/2 & 0 & \varepsilon-\Delta
\end{pmatrix}.
$$

能量最低的两个本征态 $|0\rangle_{\mathrm{RX}}$、$|1\rangle_{\mathrm{RX}}$ 编码比特，比特能量 $E_{\mathrm{RX}}=E_{|1\rangle_{\mathrm{RX}}}-E_{|0\rangle_{\mathrm{RX}}}$ 是 $\varepsilon$、$\Delta$、$t_l$、$t_r$ 的函数。在 $(\varepsilon,\Delta)$ 平面上，$E_{\mathrm{RX}}$ 的等高线呈两种形态：$\varepsilon$ 较大时分裂为左右两支，$\varepsilon$ 较小时分裂为上下两支，分支形态由 $t_l$、$t_r$ 决定。由于单次实验中隧穿耦合近似固定，比特频率写作 $\omega_{\mathrm{RX}}(\varepsilon,\Delta)$；特别地，当 $\varepsilon=\Delta=0$ 且 $t_l=t_r=t$ 时

$$
\omega_{\mathrm{RX}}\approx 0.52\,t,
$$

显著低于同隧穿耦合下双点[[qubit-control/charge-qubit|电荷量子比特]]的频率 $\omega_{\mathrm{ch}}=2t$。这一系数差异在实验上直接决定了观测 RX 比特需要比电荷比特更大的隧穿耦合。

<!-- FIGURE: H_eff 各能级随 ε 的变化（固定 Δ、t_l=t_r），红蓝两色标出编码比特的最低两个能级；旁边给出 E_RX 在 (ε,Δ) 平面的等高线能谱，显示左右两支与上下两支两种形态 -->

## 与谐振腔的耦合

量子点与谐振腔的相互作用写为

$$
\hat{H}_I=\hbar g_{c0}\left(\hat{n}_3+\nu\hat{n}_2-\hat{n}_1\right)\left(\hat{a}^{\dagger}+\hat{a}\right),
$$

其中 $g_{c0}$ 是电荷与谐振腔的全局耦合强度（见[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]），$\nu$ 衡量电容串扰，$\nu=0$ 时退化为双点情形。总电子数固定时可省去常数项，改写为 $\hat{H}_I=2\hbar g_{c0}(\hat{n}_3+\alpha\hat{n}_2)(\hat{a}^{\dagger}+\hat{a})$，$\alpha=(\nu+1)/2$。在 RX 本征基下做旋转波近似，即得[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]形式

$$
\hat{H}_{I,\mathrm{RX}}=\hbar g_{\mathrm{RX}}\left(\hat{a}^{\dagger}\hat{\sigma}_-+\hat{a}\hat{\sigma}_+\right),
$$

耦合强度 $g_{\mathrm{RX}}$ 等于 $g_{c0}$ 乘以 $|0\rangle_{\mathrm{RX}}$ 与 $|1\rangle_{\mathrm{RX}}$ 之间双占据电荷成分之差的组合（即两本征态展开系数的相应矩阵元）。两个极限情形有解析式：$\varepsilon=0$、$t_l=t_r=t$ 时 $g_{\mathrm{RX}}$ 为 $t$、$\Delta$ 与 $\alpha$ 的有理函数；$\Delta=0$、$t_l=t_r=t$ 时

$$
g_{\mathrm{RX}}=\frac{t^2}{\varepsilon^2+2t^2}\left[1-\alpha\left(1+\frac{\varepsilon^2}{\varepsilon^2+2t^2}\right)\right]g_{c0}.
$$

可见 $g_{\mathrm{RX}}$ 随 $|\varepsilon|$ 增大而衰减：远离电荷反交叉时比特态的双占据成分减小，偶极矩随之减弱。计算 $g_{\mathrm{RX}}$ 需要五个参量 $\varepsilon$、$\Delta$、$t_l$、$t_r$、$\alpha$，全部可由电荷稳定图与比特能谱实验提取。

## 参数与量级

以文献 20论文在 Si/SiGe 三量子点阵列上的实验为代表（谐振腔频率 $\omega_r/(2\pi)=7.332$ GHz）：

| 参数 | 典型量级 | 说明 |
| --- | --- | --- |
| 隧穿耦合 $t_l$、$t_r$ | $12.15$ GHz、$12.35$ GHz（频率单位） | 由比特能谱拟合提取 |
| 比特频率 $\omega_{\mathrm{RX}}/(2\pi)$（$\varepsilon=\Delta=0$） | $\approx 0.52\,t$，实验器件上 $6.22$ GHz | 低于腔频，受势垒串扰限制 |
| 全局电荷–腔耦合 $g_{c0}/(2\pi)$ | $168$ MHz | 由真空 Rabi 劈裂拟合 |
| RX–腔耦合 $g_{\mathrm{RX}}/(2\pi)$ | $65$ MHz | 由 $g_{c0}$ 与本征态系数算出 |
| 比特退相干 $\gamma_{\mathrm{RX}}/(2\pi)$ | $16.9$ MHz | 双色调制谱 Fano 修正拟合 |
| 强耦合判据 | $g_{\mathrm{RX}}>\gamma_{\mathrm{RX}}$ 且 $g_{\mathrm{RX}}>\kappa$ | 本器件满足 |
| 声子计算温度 | $T=200$ mK | 稀释制冷机典型工作温度 |
| 量子点尺寸 $a$、点间距 $l$ | $30$ nm、$100$ nm | 高斯波函数近似 |
| Si 声速 $c_l$、$c_t$ | $9.33$ km/s、$5.42$ km/s | 纵向/横向声学声子 |
| Si 形变势 $\Xi_d$、$\Xi_u$ | $5$ eV、$8.77$ eV | 膨胀/单轴形变势 |

作为对照，2018 年 GaAs 体系的 RX–腔强耦合实验中 $g/(2\pi)\approx 31.4$ MHz、$\gamma/(2\pi)\approx 19.6$ MHz、$\kappa/(2\pi)\approx 47.1$ MHz，协同系数约 $1.1$，仅勉强进入强耦合区。

## 实验特征与测量

**确定工作点**：RX 比特编码于总电子数为 3 的 $(1,1,1)$ 区，但三电子体系中没有可用的充电线信号，需先用谐振腔测出含四相点（quadruple point）的电荷稳定图，辨认 $(1,1,1)$ 区域，再关闭源漏与点间的电子交换（降低 lead 电极电压），使稳定图退化为只有点间隧穿线的三电子图形，其中 $(2,0,1)$ 与 $(1,0,2)$ 直接隧穿的虚线因要求过大耦合而通常观测不到。

**能谱测量**：由于 $\omega_{\mathrm{RX}}\approx 0.52\,t\ll 2t$，必须用势垒栅把 $t_l$、$t_r$ 同时推到较大值才能让比特频率接近腔频；困难在于栅间串扰——抬高 $V_{B2}$ 增大 $t_{12}$ 会同时压低 $t_{23}$，需配合外侧势垒补偿。用虚拟电极扫描 $(\varepsilon,\Delta)$，谐振腔幅值响应在 $\omega_{\mathrm{RX}}=\omega_r$ 处出现极小值；提取共振点得左右两支曲线（表明耦合仍偏小），用 $\hat{H}_{\mathrm{eff}}$ 拟合即得 $t_l$、$t_r$。

**耦合强度提取**：固定 $\Delta=0$、扫描 $\varepsilon$，透射谱呈现[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]；对每个 $\varepsilon$ 提取腔频并拟合，得 $g_{c0}$，再代入耦合公式得 $g_{\mathrm{RX}}$。

**退相干测量与机制**：把驱动微波加在中间点电极 $P_2$ 上，固定 $\varepsilon=0$ 做双色调制谱，用含 Fano 修正的洛伦兹线型拟合比特展宽。实验测得 $\gamma_{\mathrm{RX}}$ 随 $\Delta$ 变化，并可被[[materials-devices/charge-noise|电荷噪声]]模型定量解释：设失谐涨落 $\delta q$（$q=\varepsilon,\Delta$）服从零均值高斯分布、具有 $1/f$ 谱 $S_q(\omega)=2\pi A_q/|\omega|$，把 $\omega_{\mathrm{RX}}(\varepsilon,\Delta)$ 展开到二阶，退相位率 $\gamma_\phi$ 由一阶导数项 $(\partial\omega_{\mathrm{RX}}/\partial q)^2\,\mathrm{var}(q)$ 与二阶项 $(\partial^2\omega_{\mathrm{RX}}/\partial q^2)^2\,\mathrm{var}(q)^2$ 及协方差交叉项共同构成。拟合与数据符合良好，确认电荷噪声是该 Si/SiGe 器件的主要退相干源；而磁噪声（外磁场抖动、核自旋、微磁体杂散场）在硅基体系中贡献很小。

**声子弛豫估算**：用费米黄金定则计算电子–声子耦合引起的弛豫，波函数取高斯型，矩阵元 $\langle n|e^{i\mathbf{k}\cdot\mathbf{r}}|n'\rangle$ 可解析积分，谱函数分纵向与横向声学声子两支。以上表参数代入，结论是硅中声子对 RX 比特退相干的贡献相对电荷噪声可忽略；同一模型用于 GaAs 则给出相当大的贡献，因此 GaAs 器件中电声相互作用不可忽略——这也是[[materials-devices/silicon-sige|Si/SiGe]] 平台相对 GaAs 的一个实质性优势。

## 与其他概念的关系

在按电子数递增的编码家族中，RX 比特是三电子成员：一个电子对应[[qubit-control/single-spin-qubit|单自旋量子比特]]，两个电子对应[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]，三个电子的 $(1,1,1)$ 构型则按失谐工作点分为 EO 比特与 RX 比特——二者共享同一组自旋编码态，区别仅在于 EO 位于稳定图中心、电荷不动，RX 位于双占据电荷态附近、交换常开。EO 方案仅靠交换脉冲即可合成通用门，RX 方案则以持续的电荷杂化换取与谐振腔耦合的能力。文献 8论文在 GaAs 三量子点中观察到的近平行能级（能级间隔在宽失谐范围内几乎不变、可由第三点栅压在约 $2$–$15$ GHz 间调节）正是这类三电子编码态低能结构的实验印证：相干性随能级间隔增大而变差，提示了电学可调性与电荷噪声敏感度之间的内在权衡。

与[[scaling-automation/flopping-mode-qubit|翻转模式量子比特]]相比，二者都借助自旋–电荷杂化获得电偶极矩，但路径不同：翻转模式让单个电子在双点间做与自旋相关的运动以增强 EDSR 型驱动，比特频率跟随全局磁场，逐比特调频困难；RX 编码把三个自旋的集体态作为逻辑态，驱动力来自交换参量调制，频率纯电可调，更适合与腔总线结合做[[circuit-qed/strong-coupling|强耦合]]与长程互连。相对纯电荷编码的[[qubit-control/charge-qubit|电荷量子比特]]，RX 比特退相干慢约一个量级（同一论文中翻转模式比特 $\gamma/(2\pi)\approx 4.6$ MHz、RX 比特 $16.9$ MHz、而电荷比特通常在百 MHz 量级），但仍显著快于纯自旋编码，这正是电荷杂化的代价。

理论工具上，RX–腔系统稳态行为由[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]描述，失谐工作时进入[[readout-measurement/dispersive-readout|色散读出]]区域；其退相干对失谐噪声导数的依赖与各类比特的"甜点"（sweet spot）思想一脉相承——在 $\partial\omega_{\mathrm{RX}}/\partial q=0$ 的对称工作点，一阶电荷噪声被消除，这已发展为"对称操作 RX 比特"的专门方案。三电子哈密顿量也是理解[[qubit-control/hybrid-qubit|杂化量子比特]]等多电子编码的公共出发点。

## 延伸阅读

- J. Medford et al., "The Resonant Exchange Qubit", Physical Review Letters 111, 050501 (2013). [DOI: 10.1103/PhysRevLett.111.050501]
- A. C. Doherty and M. P. Wardrop, "Two-Qubit Gates for Resonant Exchange Qubits", Physical Review Letters 111, 050503 (2013). [DOI: 10.1103/PhysRevLett.111.050503]
- M. Russ and G. Burkard, "The asymmetric resonant exchange qubit under the influence of electrical noise", Physical Review B 91, 235411 (2015). [DOI: 10.1103/PhysRevB.91.235411]
- A. J. Landig et al., "Coherent spin–photon coupling using a resonant exchange qubit", Nature 560, 179 (2018). [DOI: 10.1038/s41586-018-0365-y]

## 论文依据

- [[sources/ref-20|文献 20]]，PDF pp. 89–91：RX 比特相对其他编码的五点优势、三电子 Hubbard 模型（式 6.1）、失谐参量 $\varepsilon$、$\Delta$ 定义及与虚拟电极电压的关系（式 6.2）、三电子电荷稳定图结构。
- [[sources/ref-20|文献 20]]，PDF pp. 91–94：20 态与自旋空间分解 $\hat{H}_{1/2}\oplus\hat{H}_{1/2}\oplus\hat{H}_{3/2}$、$S_z=\pm 1/2$ 编码态（式 6.16–6.19）、子空间与子系统两种编码方式、EO 与 RX 工作区的区分、$6\times 6$ 哈密顿量（式 6.11）及四态有效哈密顿量（式 6.20）。
- [[sources/ref-20|文献 20]]，PDF pp. 95–96：$\omega_{\mathrm{RX}}\approx 0.52t$（$\varepsilon=\Delta=0$）、耦合哈密顿量（式 6.28–6.29）、Jaynes–Cummings 形式与 $g_{\mathrm{RX}}$ 公式（式 6.30–6.33）。
- [[sources/ref-20|文献 20]]，PDF pp. 96–100：工作点确定流程（四相点与关闭源漏）、能谱测量与 $t_l=12.15$ GHz、$t_r=12.35$ GHz、$\omega_{s\mathrm{RX}}/(2\pi)=6.22$ GHz 的提取，$g_{c0}/(2\pi)=168$ MHz 与 $g_{\mathrm{RX}}/(2\pi)=65$ MHz 的拟合，双色调制谱测得 $\gamma_{\mathrm{RX}}/(2\pi)=16.9$ MHz 并确认强耦合。
- [[sources/ref-20|文献 20]]，PDF pp. 100–103：电荷噪声 $1/f$ 模型与退相位率展开式（式 6.35–6.36）、电子–声子相互作用哈密顿量与费米黄金定则计算、声子参数及"硅中声子贡献可忽略、GaAs 中不可忽略"的结论。
- [[sources/ref-08|文献 8]]，PDF pp. 82–85：EO 与 RX 共用同一组三电子编码态、简化能级模型、比特编码在 $(1,1,1)$ 最低两个能级。
- [[sources/ref-08|文献 8]]，PDF pp. 88–90：三量子点多电子区近平行能级的相干振荡（$3.4$–$3.8$ GHz 近不随失谐变化、消相干时间约 $4$ ns）、栅压将能级间隔从约 $2$ GHz 调至 $15$ GHz 且相干性随之变差的权衡。
- [[sources/ref-13|文献 13]]，PDF pp. 19–20：Wallraff 组在 GaAs 三量子点 RX 比特上通过交换作用实现自旋–电荷杂化并观测到与腔的强耦合；表 1.2 给出 $g=31.4$ MHz、$\gamma=19.6$ MHz、$\kappa=47.1$ MHz 的定量对照。
