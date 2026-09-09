---
title: 双量子点
description: 两个可独立调节电荷数、并通过隧穿和电容相互作用耦合的量子点系统。
aliases:
  - DQD
  - 串联双量子点
  - 双量子点系统
  - double quantum dot
  - 人造分子
tags:
  - 量子点基础
  - 双量子点
date: 2026-09-08
---

<div class="entry-lead">双量子点把两个"人造原子"放进同一可控电路。它既是研究分子式杂化的最小系统，也是电荷、自旋和混合编码量子比特的基本器件。</div>

## 物理图像：从人造原子到人造分子

双量子点（double quantum dot，DQD）由两个[[fundamentals/semiconductor-quantum-dot|量子点]]通过隧穿势垒与互电容串联或并联而成。当两个点空间距离足够近时，左右两点的局域态因隧穿而发生杂化，形成成键与反键类分子轨道——双量子点因此被称为"人造分子"（artificial molecule）。它在量子比特家族中扮演双重角色：

- 作为研究**分子式杂化**（hybridization）的最小平台：通过调节失谐 $\varepsilon$ 与点间[[fundamentals/tunnel-coupling|隧穿耦合]] $t_c$，实验上能完整扫过局域–非局域转变的相图；
- 作为多类量子比特的**物理载体**：同一器件只需选择不同的子空间编码，即可承载[[qubit-control/charge-qubit|电荷比特]]、[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]与各类衍生比特。

![[assets/figures/fundamentals/yang-2023-fig1-3-dqd-device.jpg]]

*双量子点器件结构与电子传输示意图（[杨杰诚 2023]([[sources/yang-jiecheng-2023]])，图 1.3）*

<!-- 原始占位：串联双量子点示意图：左右两点经互电容 $C_m$、互电阻 $R_m$ 耦合，各自经柱塞栅 $V_{g1}$、$V_{g2}$ 调能级；SEM 实物图标注源、漏、柱塞与势垒栅 -->

## 两种几何：串联与并联

按两点的空间排列与电子输运路径，双量子点分两类（周诚论文 1.4.3 节）：

- **串联双量子点**（series DQD）：两量子点首尾相接，电子必须依次通过左点再通过右点才能从源极到达漏极。两个点分别以隧穿率 $\Gamma_L$、$\Gamma_R$ 与源漏库耦合，点间耦合 $t_c$ 由中间势垒控制。绝大多数电荷/自旋比特实验采用此种结构；
- **并联双量子点**（parallel DQD）：两量子点各自独立地同时与源、漏两个电子库耦合，电子只需经过其中一个点即可形成电流。两点各自的隧穿率记为 $\Gamma_{L1}$、$\Gamma_{R1}$、$\Gamma_{L2}$、$\Gamma_{R2}$，点间仍存在耦合 $t_c$。

本词条后文主要以串联双量子点为模型——并联双点的等效电路与能级分析类似，只需把隧穿路径改成两个并联通道。

## 理论模型

### 等效电路与两类耦合

串联双量子点的经典图像是一个**电容–电阻网络**（周诚论文式 1.5；陈宝宝论文式 1.17–1.21）。左点 1 与右点 2 分别通过电容 $C_{g1}$、$C_{g2}$ 与柱塞栅 $V_{g1}$、$V_{g2}$ 耦合，通过电容 $C_L$、$C_R$ 与源、漏电子库耦合；两点间经**互电容** $C_m$ 与**隧穿电阻** $R_m$ 相互作用耦合。每个点的总电容为

$$
C_{1(2)}=C_{L(R)}+C_{g1(2)}+C_m.
$$

互电容 $C_m$ 引起纯粹的静电相互作用（电荷感应电荷），隧穿耦合 $t_c$（等价于混频矩阵元 $\Delta$）则把两个点的量子态杂化。两者大小可独立调节：$C_m$ 由几何间距与介电环境决定，$t_c$ 则通过夹在两点间的势垒栅电压指数式压低或抬高。

### 最小哈密顿量与避免交叉

只关心电荷自由度时，取左右局域态 $\{|L\rangle,|R\rangle\}$ 为基，双量子点构成一个二能级系统。引入失谐（detuning） $\varepsilon=E_R-E_L$ 与隧穿耦合 $t_c$，最小哈密顿量为

$$
H=\frac{\varepsilon}{2}\sigma_z+t_c\sigma_x,
$$

其中 $\sigma_z=|R\rangle\langle L|-|L\rangle\langle R|$、$\sigma_x=|L\rangle\langle R|+|R\rangle\langle L|$。本征值为

$$
E_\pm=\pm\frac{1}{2}\sqrt{\varepsilon^2+4t_c^2},
$$

在 $\varepsilon=0$ 处形成大小为 $2t_c$ 的能隙——**避免交叉**（avoided crossing），或称反交叉（anti-crossing）。对应本征态为最大混合态 $(|L\rangle\pm|R\rangle)/\sqrt{2}$。

失谐 $\varepsilon$ 完全由电极电压决定：$\varepsilon$ 实质上是两个柱塞栅压差的线性组合；隧穿耦合 $t_c$ 则由势垒栅独立控制。这一解耦使得双量子点成为一个可"全电控"的参数化二能级系统，是几乎所有衍生比特的通用底座。

<!-- FIGURE: 双量子点能级示意图：横轴失谐 ε，透热基 |L⟩、|R⟩（虚线交叉）与绝热基 |±⟩（实线反交叉）；反交叉能隙 2tc、混合角 θ 与本征能量 E± -->

### 静电能与电化学势

完整描述需要回到常相互作用框架。设左、右点电子占据数分别为 $(N_1,N_2)$，静电能为（陈宝宝论文式 1.17）

$$
U(N_1,N_2)=\frac{1}{2}N_1^2E_{C1}+\frac{1}{2}N_2^2E_{C2}+N_1N_2E_{Cm}+f(V_{g1},V_{g2}),
$$

其中三点特征充电能为

$$
E_{C1}=\frac{e^2}{C_1}\frac{1}{1-C_m^2/(C_1C_2)},\quad
E_{C2}=\frac{e^2}{C_2}\frac{1}{1-C_m^2/(C_1C_2)},\quad
E_{Cm}=\frac{e^2}{C_m}\frac{1}{C_1C_2/C_m^2-1}.
$$

两点各自的[[fundamentals/electrochemical-potential|电化学势]]定义为向该点增加一个电子所需的最小能量（陈宝宝论文式 1.22–1.23）：

$$
\mu_1(N_1,N_2)=U(N_1,N_2)-U(N_1-1,N_2)=\left(N_1-\frac{1}{2}\right)E_{C1}+N_2E_{Cm}-\frac{1}{e}\left(C_{g1}V_{g1}E_{C1}+C_{g2}V_{g2}E_{Cm}\right),
$$

$$
\mu_2(N_1,N_2)=U(N_1,N_2)-U(N_1,N_2-1)=\left(N_2-\frac{1}{2}\right)E_{C2}+N_1E_{Cm}-\frac{1}{e}\left(C_{g1}V_{g1}E_{Cm}+C_{g2}V_{g2}E_{C2}\right).
$$

零偏压下平衡占据是同时满足 $\mu_1(N_1,N_2)<0$ 与 $\mu_2(N_1,N_2)<0$ 的最大 $(N_1,N_2)$——即 $U(N_1,N_2)$ 最小的电荷组态。$C_m\to 0$ 时 $E_{Cm}\to 0$，$U$ 分解为两个独立单点能量之和；$C_m/C_{1(2)}\to 1$ 时系统等价于电荷数为 $N_1+N_2$ 的单点。两个极限之间正是"人造分子"区。完整的蜂窝图边界方程推导与三相点位置见[[fundamentals/charge-stability-diagram|电荷稳定图]]。

### 混合角

在电荷基 $\{S(0,2),S(1,1)\}$ 下，沿失谐改变系统可调出有效交换能

$$
J(\varepsilon)=\frac{\varepsilon+\sqrt{\varepsilon^2+4\Delta^2}}{2}.
$$

更常用的做法是引入混合角（mixing angle）

$$
\theta=\arctan\!\left(\frac{2\Delta}{\varepsilon}\right),
$$

把绝热本征态写成

$$
|+\rangle=\cos\frac{\theta}{2}|L\rangle+\sin\frac{\theta}{2}|R\rangle,\qquad
|-\rangle=-\sin\frac{\theta}{2}|L\rangle+\cos\frac{\theta}{2}|R\rangle.
$$

$\theta$ 是描述电荷混合程度的几何参数：在 $|\varepsilon|\gg\Delta$ 时 $\theta\to 0$ 或 $\pi$，本征态退化为纯局域态；在 $\varepsilon=0$ 时 $\theta=\pi/2$，左右完全混合。混合角的梯度 $d\theta/d\varepsilon$ 在电荷比特与微波腔耦合中格外重要：在[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]系统中，有效耦合强度 $g_\mathrm{eff}=g_0\sin\theta$ 被 $\sin\theta$ 调制，在 $\varepsilon=0$ 处达到最大。

### 从最小哈密顿量到完整 Hubbard 模型

当电荷态子空间不再仅限 $(1,1)$ 与 $(0,2)$，或需要考虑自旋、轨道自由度时，最小模型须升级为 Hubbard 哈密顿量：

$$
H=-\sum_i\mu_i n_i-\sum_{ij}t_{ij}\left(c_i^\dagger c_j+\mathrm{h.c.}\right)+\sum_i\frac{U_i}{2}n_i(n_i-1)+\sum_{ij}U_{ij}n_in_j,
$$

其中 $n_i=c_i^\dagger c_i$ 是第 $i$ 点的粒子数算符，$U_i$、$U_{ij}$ 来自电容网络，$t_{ij}$ 是隧穿矩阵元。Hubbard 模型与[[fundamentals/constant-interaction-model|常相互作用模型]]的对应关系是

$$
U_i=\frac{e^2(C_i+\sum_jC_{ij})}{C_\Sigma^2},\qquad U_{ij}=\frac{e^2C_{ij}}{C_\Sigma^2},
$$

其中 $C_\Sigma$ 是所有等效电容之和。去掉跃迁项 $H_t$ 时回到经典蜂窝图；保留 $H_t$ 时反交叉位置和形貌随之改变，与实验的精细结构吻合。

## 三相点与偏压三角形

零偏压下，电子依次通过双点的输运条件 $\mu_S=\mu_1=\mu_2=\mu_D$ 只在蜂窝图三条边的交汇处满足，称为**三相点**（triple point）。三相点分两类（陈宝宝论文图 1.10(d)）：

- **电子型**：电子沿"源 $\to$ 左点 $\to$ 右点 $\to$ 漏"顺序隧穿；
- **空穴型**：等效于一个空穴沿"源 $\to$ 右点 $\to$ 左点 $\to$ 漏"反向隧穿。

施加有限源漏偏压 $V_{SD}$ 后，简并条件放宽为偏压窗口内的一组不等式，每个三相点在相图上展开为**偏压三角形**（bias triangle）。三角形的三条边分别对应 $\mu_1$ 与源极费米面对齐、两点化学势互相对齐、$\mu_2$ 与漏极费米面对齐；边长正比于偏压大小，是提取杠杆臂的标准手段：

$$
eV_{SD}=\alpha_i\,e\,\delta V_{gi},\qquad \alpha_i=\frac{C_{gi}}{C_i}.
$$

徐刚论文在 Ge 纳米线双量子点中（$V_{SD}=2\ \mathrm{mV}$）直接量出偏压三角形边长，给出 $\alpha_L=0.14$、$\alpha_R=0.13$；进一步提取 $C_{G2}=6.7\ \mathrm{aF}$、$C_{G4}=6.2\ \mathrm{aF}$，$C_L\approx C_R\approx 47\ \mathrm{aF}$，对应充电能 $E_{CL}\approx 4.3\ \mathrm{meV}$、$E_{CR}\approx 4.6\ \mathrm{meV}$。

偏压进一步增大时激发态进入窗口，三角形内部出现与边平行的激发态电导线，可用于读出[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]等体系的能级间距。徐刚论文中即在偏压三角形底部观测到 $T(2,0)$–$S(2,0)$ 的能级差 $\Delta_{ST}\approx 1.1\ \mathrm{meV}$。

<!-- FIGURE: 蜂窝原胞放大图：标注加电子线、点间转移线、电子型与空穴型三相点，以及有限偏压下展开的一对偏压三角形 -->

## 参数与量级

| 量 | 典型值 / 范围 | 来源 |
| --- | --- | --- |
| 反交叉能隙 $2t_c$（电荷比特） | $20.7\ \mu\mathrm{eV}\approx 5\ \mathrm{GHz}$（GaAs，门控定义） | 周诚 2013（拉比频率标定） |
| 充电能 $E_{C1},E_{C2}$ | $1.5\ \mathrm{meV}$（浅刻蚀 GaAs 单点）；$4$–$6\ \mathrm{meV}$（锗硅纳米线空穴点） | 尤杰 2016、李炎 2018 |
| 充电能 $E_{C1},E_{C2}$（双量子点） | $4.3\ \mathrm{meV}$、$4.6\ \mathrm{meV}$（Ge 纳米线双点） | 徐刚 2020 |
| 点间隧穿 $t_c$（自旋阻塞提取） | $45\pm 5\ \mu\mathrm{eV}$（Ge 纳米线双点，自旋轨道 $t_{SO}=27\pm 3\ \mu\mathrm{eV}$） | 徐刚 2020 |
| 杠杆臂 $\alpha_i=C_{gi}/C_i$ | $0.14$、$0.13$（Ge 纳米线双点） | 徐刚 2020 |
| 栅电容 $C_{gi}$ | $6.7\ \mathrm{aF}$（左）、$6.2\ \mathrm{aF}$（右）（Ge 纳米线双点） | 徐刚 2020 |
| 耦合电容比 $C_m/C_{1(2)}$ | $\sim 0$（弱）$/0.5$（人造分子区）$/1$（强） | 周诚 2013、陈宝宝 2017 |
| $(0,2)$ 单态–三重态能级差 $E_{ST}$ | 数百 $\mu$eV（GaAs 约 $400\ \mu\mathrm{eV}$）；Ge 双点约 $1.1\ \mathrm{meV}$（多空穴） | 陈宝宝 2017、徐刚 2020 |
| Ge 纳米线双点朗德 $g$ 因子 | $3.4\pm 0.2$ | 徐刚 2020 |
| 工作温度 | $30\ \mathrm{mK}$（稀释制冷机） | 周诚 2013（GaAs） |

## 实验特征与测量

### 电荷稳定图

双量子点最常用的"地图"是[[fundamentals/charge-stability-diagram|电荷稳定图]]：扫描两个柱塞栅压 $V_{g1},V_{g2}$，记录使系统能量最低的电荷组态 $(N_1,N_2)$。它分弱、中、强三种形态（周诚论文图 1.7）：

- **弱耦合**（$C_m/C_{1(2)}\sim 0$）：矩形网格，相当于两个独立单点的[[fundamentals/coulomb-blockade|库仑阻塞]]峰叠加；
- **中间耦合**（$C_m/C_{1(2)}\sim 0.5$）：六边形蜂窝——典型的人造分子工作区；
- **强耦合**（$C_m/C_{1(2)}\sim 1$）：斜向平行线族，等价于一个大单点。

实验上观测蜂窝图有两种主流方法。**直接输运**测量源漏电流或微分电导：信号只在三相点与偏压三角形附近出现，蜂窝内部是一片"黑"。**电荷传感**（[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]、SET 或[[readout-measurement/rf-reflectometry|射频反射测量]]）则可在整个相图上描出全部电荷转移线，并数出每个 $(N_1,N_2)$ 的绝对电子数；后者测量速度远高于传统方法。

徐刚论文在 Ge 纳米线双量子点中演示了"高度可调"的隧穿耦合：在固定 $V_{SD}=0.5\ \mathrm{mV}$ 时，把中间栅 $V_{G3}$ 从 $0\ \mathrm{V}$ 调到 $-0.04\ \mathrm{V}$，可以直接把蜂窝图从清晰锐利的分立三相点形态过渡到模糊蜂窝、再到典型蜂窝——整个形态演化即 $t_c$ 标定的图像化。

<!-- FIGURE: 棚顶型 Ge 纳米线双量子点的可调耦合演化：$V_{G3}=0,-0.02,-0.04\ \mathrm{V}$ 三幅相图对比 -->

### 自旋阻塞与自旋–电荷转换

把自旋自由度纳入图像后，双量子点出现一种标志性的实验现象——**泡利自旋阻塞**（Pauli spin blockade，PSB）。它由两个事实共同导致（陈宝宝论文 2.2.2 节）：

1. 点间隧穿保持自旋守恒；
2. 同一轨道的两个电子不能同自旋（泡利不相容原理）。

考虑 $(1,1)$–$(0,2)$ 跃迁区。负失谐 $\varepsilon<0$ 时电子分居两点，$(1,1)$ 单态 $S$、三重态 $T_{0,\pm}$ 近似简并；正失谐 $\varepsilon>0$ 时基态是 $S(0,2)$，$T_{0,\pm}(0,2)$ 因一个电子必须占据激发轨道而高出 $E_{ST}$（GaAs 中约 $400\ \mu\mathrm{eV}$）。两个电子态在 $\varepsilon<0$ 时构成有效二能级系统，在 $\varepsilon>0$ 时单态可顺利进入 $(0,2)$ 而三重态被阻塞——这就是**自旋到电荷的转换**（spin-to-charge conversion），把不可直接读出的自旋态映射为 $(1,1)$ 与 $(0,2)$ 两种电荷构型。两种共三种方式可在实验上观测 PSB：

- **输运法**：在源漏间加偏压，反偏压下循环 $(0,1)\to(1,1)\to(0,2)\to(0,1)$ 在形成三重态时中断，对应偏压三角形内电流被抑制；正偏压下循环反向、只经过 $S(0,2)$，电流畅通。**正反偏压的不对称**（整流特征）是 PSB 的输运指纹；
- **脉冲栅法**：不依赖电流，先在 $(0,1)$ 区初始化、再到加载点无自旋选择地装入第二个电子（$S$ 与三个 $T$ 近似等概率），最后脉冲到 $(0,2)$ 区内的测量点停留大部分周期；当测量点落在由三条电荷跃迁延长线围成的"阻塞三角形"内时，QPC 信号介于 $(1,1)$ 与 $(0,2)$ 之间——证明部分时间系统被阻塞在 $(1,1)$。陈宝宝论文样品上由信号衰减拟合给出三重态弛豫时间约 $70\ \mu\mathrm{s}$；
- **偏压三角形法**：徐刚论文在 Ge 纳米线双量子点中比较正反偏压下的三角形：正向偏压三角形底部基态线上电流被抑制，发生 PSB；反向偏压三角形畅通无阻。从阻塞三角形宽度读出 $\Delta_{ST}\approx 1.1\ \mathrm{meV}$；在不同磁场下重复此测量，得到 $\Delta_{ST}(B)=\Delta_{ST}(0)-g\mu_B B$，线性拟合给出 $g=3.4\pm 0.2$。

非零磁场下三重态 $T_\pm$ 进一步发生塞曼劈裂，漏电流随磁场呈"谷形"特征。Ge 纳米线双量子点的强自旋轨道耦合使 $S$、$T$ 在外磁场下混合解除阻塞，产生漏电流的双峰结构。徐刚论文用

$$
I(B)=\Gamma_\mathrm{rel}\,\frac{(\omega-B^2+\tau^2)[\omega(1+4\gamma)+B^2-\tau^2]}{6\gamma\omega^2+2B^2\eta^2 t^2},\quad \tau=t\sqrt{1+3\eta^2},
$$

拟合漏电流，提取 $t\approx 45\pm 5\ \mu\mathrm{eV}$、$t_{SO}\approx 27\pm 3\ \mu\mathrm{eV}$。

<!-- FIGURE: 自旋阻塞的偏压三角形对比图：正向偏压三角形底边基态电流被抑制（绿色虚线带），反向偏压三角形畅通 -->

### 从双量子点到衍生比特

双量子点的真正威力在于**同一硬件**承载多种编码：

- **电荷比特**：取 $|L\rangle$、$R\rangle$ 为计算基，最小哈密顿量即上文二能级模型。失谐 $\varepsilon$ 控制 $z$ 轴、隧穿耦合 $t_c$ 控制 $x$ 轴，脉冲、微波或绝热扫描分别实现突变、共振和能级跟随操控；
- **单态–三重态比特**：取 $|S(1,1)\rangle$ 与 $|T_0(1,1)\rangle$ 为计算基，$z$ 轴由交换能 $J(\varepsilon)$ 给出（全电控），$x$ 轴由两点磁场差给出；
- **混合与共振交换比特**：把比特子空间扩展到 $(0,2)$–$(2,0)$ 与 $(1,1)$ 的三电子/三空穴区；
- **光子辅助隧穿**与**LZSM 干涉**：在双量子点失谐上叠加单色或脉冲驱动，重复穿越反交叉得到相干干涉条纹——尚汝南论文在 GaAs 双量子点上观察到 14 阶光子过程，并证明其本质是 LZS 干涉；
- **腔杂化**：双量子点整体充当微波腔的"人工原子"，耦合强度由电偶极与混合角共同决定，是[[circuit-qed/circuit-quantum-electrodynamics|cQED]]在半导体中的主要载体。

双量子点也是构造更大系统的基本单元——三量子点、四量子点阵列与量子元胞自动机都以它为基本构建块。

## 与其他概念的关系

- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]：双量子点由两个单点组成，继承了库仑阻塞、电化学势、隧穿耦合等所有单点概念；
- [[fundamentals/constant-interaction-model|常相互作用模型]]：给出双量子点电容网络与静电能的定量预言；
- [[fundamentals/electrochemical-potential|电化学势]] $\mu_1,\mu_2$ 的简并条件定义了蜂窝图的全部边界；
- [[fundamentals/charging-energy|充电能]] $E_{C1},E_{C2},E_{Cm}$ 决定蜂窝沿栅压方向的周期与原胞被劈开的间距；
- [[fundamentals/tunnel-coupling|隧穿耦合]] $t_c$ 使三相点附近出现量子弯曲，决定反交叉能隙 $2t_c$；
- [[fundamentals/charge-stability-diagram|电荷稳定图]]：双量子点的标准观测图，蜂窝结构与偏压三角形是其全部信息；
- [[fundamentals/coulomb-blockade|库仑阻塞]]与[[fundamentals/coulomb-diamond|库仑菱形]]：在单点层面是同一阻塞条件的另一面，推广到双点变为蜂窝；
- [[qubit-control/charge-qubit|电荷量子比特]]：以双量子点中单电子的左右局域态为逻辑基，最小哈密顿量与本词条 §理论模型一节完全相同；
- [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]：以 $(1,1)$ 区两电子自旋态为逻辑基，使用本词条的"自旋阻塞"作为读出；
- [[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]与[[qubit-control/lzsm-interference|LZSM 干涉]]：以双量子点的反交叉为分束器，多次穿越构成普适单比特旋转；
- [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]：双量子点失谐上的周期驱动，PAT 图像与 LZS 图像在强微波下趋于一致；
- [[circuit-qed/charge-photon-coupling|电荷–光子耦合]]：双量子点通过电偶极与微波腔耦合，有效强度 $g_\mathrm{eff}\propto\sin\theta$ 在 $\varepsilon=0$ 处最大；
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]与[[readout-measurement/rf-reflectometry|射频反射测量]]：在蜂窝图上读出全部电荷转移线的标准手段。

## 延伸阅读

- W. G. van der Wiel, S. De Franceschi, J. M. Elzerman, T. Fujisawa, S. Tarucha, and L. M. K. Vandersypen, "Electron transport through double quantum dots", *Reviews of Modern Physics* (2002). [DOI: 10.1103/RevModPhys.75.1]
- R. Hanson, L. P. Kouwenhoven, J. R. Petta, S. Tarucha, and L. M. K. Vandersypen, "Spins in few-electron quantum dots", *Reviews of Modern Physics* (2007). [DOI: 10.1103/RevModPhys.79.1217]
- G. Cao et al., "Ultrafast universal quantum control of a quantum-dot charge qubit using Landau–Zener–Stückelberg interference", *Nature Communications* (2013). [DOI: 10.1038/ncomms2412]
- "Rapid single-shot parity spin readout in a silicon double quantum dot with fidelity exceeding 99%", *npj Quantum Information* (2023). [DOI: 10.1038/s41534-024-00813-0]

## 论文依据

- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 26–28：1.4.3 节给出双量子点定义（人造分子）与串联、并联两类几何（式 1.5、$C_{1(2)}$），以及 $C_m/C_{1(2)}\sim 0,\,0.5,\,1$ 三种耦合强度下的蜂窝图演化（图 1.5–1.7）。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 28–31：1.5 节把电子占据双量子点不同位置视作二能级系统，给出最小哈密顿量与布洛赫球编码，能级反交叉 $E_\mathrm{gap}=2|\Delta|$。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 32–34：1.6.2 节把双量子点列为自旋比特、电荷比特与 singlet–triplet 比特的共同物理载体（图 1.11）。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 107–112：双量子点中单电子电荷量子比特的最小哈密顿量 $H=(\varepsilon/2)\sigma_z+\Delta\sigma_x$、$|L\rangle,|R\rangle$ 基矢、反交叉能隙 $2\Delta=20.7\ \mu\mathrm{eV}$ 由拉比振荡标定，以及高斯脉冲驱动的 LZS 干涉与布洛赫球任意角度旋转。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 123–124：GaAs/AlGaAs 双量子点电荷比特样品参数——二维电子气形成于表面下 $95\ \mathrm{nm}$、电子密度 $3.2\times 10^{11}\ \mathrm{cm^{-2}}$、电子迁移率 $1.5\times 10^5\ \mathrm{cm^2/Vs}$、量子点几何尺寸约 $250\ \mathrm{nm}$。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 20–21：1.2.4 节给出双量子点静电能 $U(N_1,N_2)$ 与充电能 $E_{C1},E_{C2},E_{Cm}$ 公式（式 1.17–1.21）以及电化学势 $\mu_1,\mu_2$（式 1.22–1.23）。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 21–22：弱、中、强三种耦合下的蜂窝图演化，三相点的电子型与空穴型两种类型，偏压三角形与杠杆臂 $\alpha_1,\alpha_2$（式 1.24–1.25）。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 33–36：自旋阻塞的两种观测（输运法与脉冲栅法）；正反偏压不对称即 PSB 指纹；脉冲栅法测得三重态弛豫时间约 $70\ \mu\mathrm{s}$。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 29–30：2.2.1 节 $(1,1)$–$(0,2)$ 反交叉的两能级哈密顿量、失谐 $\varepsilon$、隧穿耦合 $\Delta$ 与单态–三重态量子比特工作哈密顿量（式 2.9）。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 13–14：双量子点电路模型、电化学势 $\mu_L,\mu_R$ 公式（式 1.3–1.4）、零偏压下 $C_m=0$ 时的方格相图与 $C_m>0$ 时的蜂窝图演化（图 1.2(c)(d)）。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF p. 14：偏压三角形的形成与内部激发态输运线（图 1.3）。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 53–54：Ge 纳米线双量子点样品结构（五根 Ti/Pd 顶层栅极，$V_{G3}$ 调节隧穿耦合）；不同 $V_{G3}$ 下相图从分立三相点到典型蜂窝的过渡（图 3.1–3.2）。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 54–55：$V_{SD}=2\ \mathrm{mV}$ 偏压三角形给出 $C_{G2}=6.7\ \mathrm{aF}$、$C_{G4}=6.2\ \mathrm{aF}$、$\alpha_L=0.14$、$\alpha_R=0.13$、$E_{CL}\approx 4.3\ \mathrm{meV}$、$E_{CR}\approx 4.6\ \mathrm{meV}$（图 3.2(d)）。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 55–56：Ge 双量子点中泡利自旋阻塞——正反偏压三角形底部基态电流被抑制，从阻塞宽度提取 $\Delta_{ST}\approx 1.1\ \mathrm{meV}$（图 3.3）。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 56–57：磁场下 $\Delta_{ST}(B)=\Delta_{ST}(0)-g\mu_B B$ 线性拟合给出 $g=3.4\pm 0.2$（图 3.4）；漏电流随磁场的双峰谷形结构由强自旋轨道耦合驱动，拟合得到 $t\approx 45\pm 5\ \mu\mathrm{eV}$、$t_{SO}\approx 27\pm 3\ \mu\mathrm{eV}$（图 3.5，式 3.1）。