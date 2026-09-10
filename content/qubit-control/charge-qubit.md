---
title: 电荷量子比特
description: 以载流子在双量子点中的位置或电荷分布作为逻辑基态的量子比特。
aliases:
  - 电荷比特
  - 位置比特
  - charge qubit
tags:
  - 量子比特操控
  - 电荷
date: 2026-09-08
---

<div class="entry-lead">电荷量子比特把"电子在左点还是右点"编码成二能级。它的电偶极矩大、门操作快、易与微波腔耦合，但也因此对电场与电荷噪声敏感。</div>

## 物理图像与编码

电荷量子比特（charge qubit）是半导体[[fundamentals/double-quantum-dot|双量子点]]最直接的二能级编码：将最后一个电子的两种空间占据——左量子点 $|L\rangle=(1,0)$、右量子点 $|R\rangle=(0,1)$——选作计算基。体系被限制在**单电子电荷态**（或更一般地在**最近邻两个电荷态**）的子空间内，由栅压维持失谐在零点附近并保留左右隧穿通道，由此构成一个最低阶近似的两能级系统。

双量子点中共有 $(N,M)$、$(N+1,M)$、$(N,M+1)$、$(N+1,M+1)$ 四种电荷组态。当调节栅压使前一组态在能量上完全被排斥、只剩下 $(N+1,M)$ 与 $(N,M+1)$ 两者可比拟时，电荷量子比特的编码空间自然形成。这正是[文献 2]在介绍 Divincenzo 判据时所采用的图像：[文献 1]、[文献 5]等具体实验也都选择在这条"反交叉线"附近操作比特。

电荷量子比特具有几项先天优势：

- **电学可读**：基矢 $|L\rangle$、$|R\rangle$ 的电荷位置不同，直接影响近邻[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]或[[readout-measurement/rf-reflectometry|射频反射仪]]的电导，测量"对比度好"——这点与自旋比特必须依赖[[qubit-control/singlet-triplet-qubit|自旋阻塞]]才能把自旋状态映射回电荷态不同。
- **电学可操控**：门电极即可调节失谐与隧穿耦合，无需外加微波磁场。
- **强电偶极**：左右点相距约 100 nm 量级，等效电偶极矩 $ed$ 较大，是天然能与[[circuit-qed/microwave-resonator|微波谐振腔]]匹配的"原子"。

代价是**对电荷噪声极为敏感**：基矢本身就是电荷占据分布，门电极电压的任何涨落都会直接移动失谐量 $\varepsilon$。在 GaAs 门控量子点上，[文献 2]直接给出"GaAs 上电荷量子比特的退相干时间只能保持在 100 ps 量级，远不够做 10⁵ 个门操作"的判断——电荷量子比特的核心物理挑战即由此而来。

![[assets/figures/qubit-control/liu-2022-fig1-2-charge-and-ST-qubit-cartoon.jpg]]

*电荷量子比特（按电荷位置编码）与 S–T 量子比特（按双电子自旋态编码）卡通图（[文献 16]([[sources/liu-hanwei-2022]])，图 1.2）*

<!-- 原始占位：电荷量子比特的器件与编码示意：双量子点 SEM 图像、$(1,0)$ 与 $(0,1)$ 电荷分布、本征能级在失谐–隧穿耦合平面上的反交叉等高线 -->

## 理论模型

### 最小二能级哈密顿量

在仅保留 $(N+1,M)$、$(N,M+1)$ 两个电荷态时，二能级哈密顿量在电荷基矢下可写为

$$
H_{\mathrm{DQD}}=\frac{1}{2}\,\varepsilon\,\sigma_z+t_c\,\sigma_x,
$$

其中 $\varepsilon=\mu_R-\mu_L$ 是左右点的[[fundamentals/electrochemical-potential|电化学势]]差（即"失谐量"），$t_c=\langle L|W|R\rangle$ 是左右态间的[[fundamentals/tunnel-coupling|隧穿耦合]]强度。这是[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]、[[qubit-control/rabi-oscillation|Rabi 振荡]]、[[qubit-control/lzsm-interference|LZS 干涉]]等动力学讨论的统一出发点。

对角化给出本征能

$$
E_\pm(\varepsilon)=\pm\frac{1}{2}\sqrt{\varepsilon^2+(2t_c)^2},
$$

其中混合角（hybridization angle）定义为

$$
\theta=\arctan\!\left(\frac{2t_c}{\varepsilon}\right)\in[0,\pi/2],
$$

描述本征态在本征基矢与电荷基矢之间的相对取向：

$$
\begin{aligned}
|+\rangle&=\cos\!\frac{\theta}{2}\,|L\rangle+\sin\!\frac{\theta}{2}\,|R\rangle,\\
|-\rangle&=\sin\!\frac{\theta}{2}\,|L\rangle-\cos\!\frac{\theta}{2}\,|R\rangle.
\end{aligned}
$$

反交叉最小能隙 $E_\mathrm{gap}^{\min}=2t_c$ 在 $\varepsilon=0$ 处取到；任意失谐下的能隙为 $E_\mathrm{gap}=\sqrt{\varepsilon^2+(2t_c)^2}$。这一能隙正是比特跃迁频率 $\hbar\omega_q=E_\mathrm{gap}$ 的来源。

[文献 1]将上式作为两能级体系的标准形式（式 5.1、5.14）反复使用；[文献 2]同样把它作为电荷比特讨论的起点；[文献 5]在式 3-2 中也明确写出 $H=\tfrac12\varepsilon\sigma_z+\Delta\sigma_x$（其中 $\Delta=t_c$），并基于此讨论光子辅助隧穿、拉莫振荡、LZS 干涉等动力学。

### 含时驱动与 Bloch 球表述

含时失谐 $\varepsilon(t)$ 把哈密顿量变为 $H(t)=\tfrac12\varepsilon(t)\sigma_z+t_c\sigma_x$。将 Bloch 矢量 $\vec{r}=(r_x,r_y,r_z)$ 定义为期望值 $\vec{r}=\langle\vec{\sigma}\rangle$，演化方程为

$$
\dot{\vec r}=\vec r\times\vec B,\qquad \vec B=(\varepsilon(t),\,0,\,2t_c)/\hbar,
$$

其中 $\vec B$ 是有效磁场。每当脉冲把失谐拉回 $\varepsilon=0$，$\vec B$ 沿 $+x$ 方向，比特态矢量绕 $x$ 轴旋转一个角度 $\theta$；脉冲幅度不为零时，$\vec B$ 在 $x$–$z$ 平面倾斜，演化同时具有 $z$ 分量的相位累积。整套操控可分解为

$$
R_x(\theta)=\exp(-i\theta\sigma_x/2),\qquad
R_z(\phi)=\exp(-i\phi\sigma_z/2),
$$

并由此组合出任意的单比特幺正变换。[文献 5]在式 3-5、3-6 与 [文献 1]在式 5.15 中明确写出 $R_x(\theta)$、$R_z(\phi)$ 的矩阵形式，并把它们作为 LZS 操控与脉冲驱动的通用构造模块。

### 周期驱动下的 Floquet 描述

当 $\varepsilon(t)=\varepsilon_0+A\sin\omega t$ 为周期函数时，哈密顿量满足 $H(t+T)=H(t)$，$T=2\pi/\omega$。Floquet 定理给出准静态本征态 $|\psi_\alpha(t)\rangle=e^{-i\epsilon_\alpha t/\hbar}|u_\alpha(t)\rangle$，其中 $|u_\alpha(t+T)\rangle=|u_\alpha(t)\rangle$，$\epsilon_\alpha$ 是准能量。在旋转波近似（$\omega\approx 2t_c/\hbar$）下，周期驱动相当于在电荷基矢上附加一个有效 Rabi 频率 $\Omega_R=\sqrt{A^2+(\hbar\omega-2t_c)^2}/(2\hbar)$，从而把电荷比特推进**强驱动非线性区**——这正是[文献 18]第 4–5 章中周期性驱动双量子点产生腔光子增益、研究杂化系统 Floquet 态的理论出发点。

## 操控方案

### Landau–Zener 跃迁与 LZS 干涉

将系统从 $\varepsilon\ll-2t_c$（远离反交叉一侧）缓慢扫过 $\varepsilon=0$ 的过程，由[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]的非绝热概率

$$
P_{\mathrm{LZ}}=\exp\!\left(-\frac{2\pi t_c^2}{\hbar\,v}\right),\qquad v=\frac{dE_\mathrm{gap}}{dt}
$$

刻画，其中 $v$ 是能级间隔的变化率。绝热–脉冲模型（adiabatic–impulse model）把穿过反交叉等价为一次"分束"——离开反交叉后两个本征态积累不同相位，再次穿过反交叉时发生[[qubit-control/lzsm-interference|干涉]]。由绝热相位

$$
\phi_i=\frac{1}{\hbar}\int_{t_1}^{t_2}\sqrt{\varepsilon(t)^2+(2t_c)^2}\,dt,
$$

可以整理出三角波驱动的旋转角与相位（[文献 1]式 5.16–5.18，[文献 5]式 3-8、3-9）：

$$
\theta=4\arcsin\!\sqrt{P_{\mathrm{LZ}}},\qquad
\phi_i=\frac{(A-\varepsilon_0)^2\tau_r}{\hbar A}.
$$

只要合适选择三角波幅度 $A$ 与上升时间 $\tau_r$，LZS 过程就能把任意初态转到 Bloch 球上的任意目标态，构成与 Rabi 振荡等价的"普适旋转门"。[文献 1]在第 5 章用一整章给出该方案的完整推导，并在第 6 章进一步用此脉冲实现对 Kibble–Zurek 机制的量子模拟。

### 矩形脉冲与 Larmor 振荡

理想矩形脉冲把电子"瞬间"拉到反交叉点再保持 $\tau_p$ 时间再返回。绝热地把电子送到 $\varepsilon=0$ 相当于绕 $x$ 轴旋转 $-\pi/2$，停留 $\tau_p$ 时间使 Bloch 矢量在 $x$–$y$ 平面内绕 $z$ 轴自由进动角度 $\varphi=\sqrt{\varepsilon^2+(2t_c)^2}\,\tau_p/\hbar$，回落后再绕 $x$ 轴 $+\pi/2$ 回到电荷基矢。整个过程在 $|L\rangle$、$|R\rangle$ 占据概率之间产生周期振荡，振荡频率即为 $2t_c/h$——这就是[文献 5]第 3.3 节展示的"拉莫振荡"（Larmor oscillation）。

### 微波驱动与 Rabi 振荡

对失谐施加一个微波 $\varepsilon(t)=\varepsilon_0+A\sin\omega t$，并在简并点附近 ($\Delta\omega=\omega-2t_c/\hbar\ll A$) 共振驱动，比特在 $|L\rangle$、$|R\rangle$ 之间的占据概率按[文献 5]式 3-12

$$
P_L(t)=\tfrac12\,\frac{A^2}{A^2+(\hbar\Delta\omega)^2}\!\left[1-\cos\!\sqrt{A^2+(\hbar\Delta\omega)^2}\,t/\hbar\right]
$$

振荡，振荡频率即有效 Rabi 频率 $\Omega_R=\sqrt{A^2+(\hbar\Delta\omega)^2}/\hbar$。在[文献 5]引用的 Si/SiGe 双量子点实验中（Eriksson 组），微波频率 $f_\mathrm{mw}=1$ GHz 的 Rabi 振荡清晰可见，并拟合得到退相干时间 $T_2^*=1.5$ ns——这是早期电荷比特相干性的代表性数字。

在两个 $\pi/2$ 微波脉冲之间插入等待时间 $t_e$，构成 [[qubit-control/ramsey-interferometry|Ramsey]] 序列；进一步在 $t_e$ 中点加入 $\pi$ 相位翻转脉冲，则得到 Hahn 回波，能拟合得到去低频噪声影响后的 $T_2$。

### 光子辅助隧穿与光场耦合

把失谐视为量子化的微波光子场驱动时，电子可以"借"或"还"整数个光子能量在阻塞区外的失谐点上发生[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]（PAT）。令光子频率为 $f$，则光子辅助的隧穿条件为

$$
\alpha\varepsilon=(hf)^2-(2t_c)^2,
$$

其中 $\alpha$ 是栅压到能量的杠杆臂（lever arm）。改变微波频率测量一阶峰位置即可反推 $2t_c$ 与 $\alpha$——[文献 5]在式 3-3 中给出该关系，并实测得到中间门电极电压 $-1.01$ V 时 $2t_c=13.2$ GHz、加大到 $-1.08$ V 时降到 $2.4$ GHz。

把这一思想与电路量子电动力学（[[circuit-qed/circuit-quantum-electrodynamics|cQED]]）结合，光子不再是外加微波而是[[circuit-qed/microwave-resonator|腔内真空场]]，双量子点与腔的相互作用即由[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]主导。

## 参数量级

下表汇总典型实验体系中的参数量级，覆盖本节引用的论文与延伸文献：

| 量 | 典型值 | 来源 / 备注 |
| --- | --- | --- |
| 点间隧穿耦合 $2t_c$ | $\sim$ 几 GHz 至 $\sim$ 30 GHz | [文献 5]：$-1.01$ V 门压下 $13.2$ GHz |
| $2t_c$（GaAs 双点，特定工作点） | $20.7\ \mu\mathrm{eV}\approx 5.0$ GHz | [文献 1]第 5 章实测值 |
| 反交叉最小能隙 | $2t_c$，约 $5$–$30\ \mu\mathrm{eV}$ | 即 $\hbar\omega_q^{\min}$ |
| 比特跃迁频率 $\omega_q/2\pi$ | $2$–$20$ GHz | 取决于 $\varepsilon$ 与 $2t_c$ |
| 微波 Rabi 频率 | $0.1$–$1$ GHz | [文献 5] Si/SiGe 1 GHz |
| 自由感应衰减 $T_2^*$ | $\sim 1$–$2$ ns（GaAs、Si/SiGe 早期） | $T_2^*=1.5$ ns，[文献 5] |
| 自旋回波 $T_2$ | 数 ns（GaAs）、$\sim 100$ ns 量级（Si/SiGe、Si-MOS） | 平台相关 |
| 杠杆臂 $\alpha$ | $0.02$–$0.06\ \mathrm{meV/mV}$ | 取决于电极几何 |
| 电荷比特–腔耦合 $g_c/2\pi$ | $6.7$ MHz（首例强耦合）至 $175$ MHz，最大 $619$ MHz | [文献 18] 第 1 章综述 |
| 比特退相干 $\gamma_c/2\pi$ | $\sim 50$–$100$ MHz | 决定强耦合判据 $g_c>\kappa,\gamma_c$ |
| 腔耗散 $\kappa/2\pi$ | $2$–$8$ MHz（高阻抗腔） | [文献 18] $6.23$ GHz、$\kappa/2\pi\approx 2.2$ MHz |
| 工作温度 | $\le 100$ mK（电子温度） | [文献 18] $T_e=80$ mK |
| 工作失谐 | $|\varepsilon|$ 在 $0$ 至 $\pm 10t_c$ 范围扫描 | 由栅压控制 |

## 实验特征

### 测量与读出

电荷量子比特的 $|L\rangle$、$|R\rangle$ 占据概率最直接的读出通道是近邻[[readout-measurement/qpc-charge-sensor|QPC]] 或单电子晶体管（SET）。电子在左点时 QPC 电流减小，反之增大，由此反推比特态。这一"直接读出"是电荷比特相对自旋比特的天然优势——[文献 2] 1.4.3 节即强调："对电荷量子比特来说，测量是相对简单的事情，因为 0 和 1 两个量子态直接与电荷分布相关。" 工作在低频段时可加锁相放大读取，工作在 MHz 量级动态信号时则需要[[readout-measurement/rf-reflectometry|射频反射测量]]以获取足够带宽。

也可以把比特耦合到[[circuit-qed/microwave-resonator|微波谐振腔]]上做[[readout-measurement/dispersive-readout|色散读出]]：比特跃迁频率 $\omega_q$ 与腔频 $\omega_r$ 失谐 $|\Delta|=|\omega_q-\omega_r|\gg g_c$ 时，比特使腔频移动 $\chi=g_c^2/\Delta$ 并附加额外耗散，由反射或透射相位即可推比特态。[[circuit-qed/jaynes-cummings-model|JC 模型]]在色散极限下给出此结果。

### 相干性来源与退相干

电荷比特的退相干主要来自[[materials-devices/charge-noise|电荷噪声]]——栅压的 $1/f$ 涨落直接调制失谐 $\varepsilon$，导致相位累积的不确定。对 GaAs 双量子点，[文献 2]直接给出"退相干时间只能保持在 100 ps 量级"的悲观判断；对 Si/SiGe，[文献 5] 报告的 Rabi 振荡拟合给出 $T_2^*\approx 1.5$ ns，仍只允许约 10 个门操作。

缓解办法有几条路径：

- **工作点选取**：在 $|\varepsilon|\gg 2t_c$ 区，比特态与 $|L\rangle$、$|R\rangle$ 几乎重合，但此处斜率 $\partial\omega_q/\partial\varepsilon$ 大，电荷噪声影响强；$\varepsilon=0$ 附近，$\omega_q=2t_c/\hbar$ 是"平点"（sweet spot），一阶不敏感，但 Larmor 频率被隧穿耦合涨落而非失谐涨落限制。
- **动力学解耦**：Hahn 回波、CPMG、动态解耦脉冲把低频 $1/f$ 噪声的高频分量平均掉，提升 $T_2$ 至 $T_2^*$ 的数倍至一个量级。
- **材料平台**：Si/SiGe 与 Si-MOS 的核自旋天然丰度低于 GaAs 的三种同位素，外延/氧化界面更"安静"，自旋比特相干时间可延长到百微秒量级。电荷比特也因此受益——尽管其优势不及自旋比特显著。
- **杂化编码**：把电荷分量适度稀释到自旋/轨道自由度中，参见[[qubit-control/hybrid-qubit|杂化量子比特]]。

### 与腔的耦合：色散、强耦合与超强耦合

电荷比特的大电偶极矩使之天然能与腔电场耦合。[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]给出全局耦合强度

$$
g_c=g_0\sin\theta,\qquad g_0=\omega_r\,c_c\,\frac{2Z_r}{\sqrt{R_Q}},
$$

其中 $\theta=\arctan(2t_c/\varepsilon)$ 是混合角，$c_c$ 是杠杆臂，$Z_r$ 是腔的特征阻抗，$R_Q=h/e^2\approx 25.8\ \mathrm{k\Omega}$ 是电阻量子。在 $\varepsilon=0$ 附近 $\sin\theta\to 1$，耦合达到最大值 $g_c\approx g_0$。提高 $Z_r$（使用[[circuit-qed/high-impedance-resonator|高阻抗腔]]或[[circuit-qed/squid-array-resonator|SQUID 阵列腔]]）成为突破 $g_c>\kappa,\gamma_c$ [[circuit-qed/strong-coupling|强耦合]]判据的关键：2011 年 Petta 组首次在电荷比特–腔体系看到真空 Rabi 劈裂时 $g/2\pi\approx 6.7$ MHz；2017 年 Wallraff 组使用 SQUID 阵列腔把耦合提高到 $g/2\pi\approx 119$ MHz（[文献 18] 第 1 章 1.5 节综述）。更进一步，Scarlino 等 2022 年通过 In-situ 调节 $t_c$ 实现 $g_c/\omega_r\approx 0.11$，进入[[circuit-qed/jaynes-cummings-model|JC 模型]]失效的**超强耦合**（ultrastrong coupling）区。

电荷比特在 cQED 中的另一重要应用是作为增益介质。把双量子点放在某一 $\varepsilon$ 点并施加周期驱动，可以产生粒子数反转，使电荷比特向腔发射微波光子——[文献 18] 第 4 章报道了 GaAs 双量子点驱动下的腔透射幅值增益，并在第 5 章中研究了周期驱动双点–腔耦合系统的 Floquet 谱。

### 比特间的电容耦合与多比特门

两个电荷比特通过电极间的电容耦合到一起，可以实现两比特门。两个比特各自由 $H^{(i)}=\tfrac12\varepsilon_i\sigma_z^{(i)}+t_c\sigma_x^{(i)}$ 描述，整体哈密顿量增加一项

$$
H_{\mathrm{int}}=\tfrac14 J\,\sigma_z^{(1)}\otimes\sigma_z^{(2)},
$$

其中 $J=U_{LL}+U_{RR}-U_{LR}-U_{RL}$ 是两个比特分别占据"同位"与"异位"两种组态时的库仑相互作用能之差。[文献 5] 第 4 章给出 $H_{2q}=\sum_{i=1,2}\tfrac12(\varepsilon_i\sigma_z^{(i)}+\Delta_i\sigma_x^{(i)})+\tfrac{J}{4}\sigma_z^{(1)}\otimes\sigma_z^{(2)}$（式 4-5），并实验上演示了振幅控制与相位控制两种 [[qubit-control/cnot-gate|CNOT 门]] 方案，保真度 68%（与当时国际半导体双电荷比特最好水平相当）。三电荷比特阵列上则可演示 [[qubit-control/toffoli-gate|Toffoli 门]]（[文献 5] 第 5 章）。

更长远地，可以在两个电荷比特之间夹一个共享的高阻抗腔，由[[circuit-qed/cavity-mediated-coupling|腔光子介导]]实现长程耦合——[文献 18] 第 1 章 1.5 节综述了相关进展。

## 与其他概念的关系

电荷量子比特是[[fundamentals/double-quantum-dot|双量子点]]所有编码方案中最直接的一种。它的物理基础由[[fundamentals/tunnel-coupling|隧穿耦合]]、[[fundamentals/electrochemical-potential|电化学势]]（失谐 $\varepsilon$）和[[fundamentals/charging-energy|充电能]]共同支撑；[[fundamentals/charge-stability-diagram|电荷稳定图]]的蜂窝结构给出了它的"工作地图"，[[fundamentals/coulomb-blockade|库仑阻塞]]则在蜂窝图远离反交叉的格子里决定了电荷态的稳定性。

动态层面，比特的相干控制直接调用[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]（单次穿过反交叉的分束）与[[qubit-control/lzsm-interference|LZS 干涉]]（多次穿过反交叉的相位累积）；时间域上的脉冲序列则通过[[qubit-control/rabi-oscillation|Rabi 振荡]]与[[qubit-control/ramsey-interferometry|Ramsey 干涉]]给出频域的相干谱。微波与比特失谐的耦合进一步引出[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]与[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）的对应表述。

电荷比特对外的耦合通道有两类：第一类是电极间的**直接电容耦合**，由交换库仑相互作用实现两比特门或多比特阵列；第二类是通过[[circuit-qed/microwave-resonator|微波谐振腔]]的**电偶极耦合**，对应[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]与[[circuit-qed/jaynes-cummings-model|JC 模型]]物理。这两类通道的强弱分别由几何距离与腔阻抗决定。

由于电荷比特的电学敏感，其**杂化**与**扩展编码**具有现实意义：

- [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]把电荷位置编码为 $(1,1)$ 单态与三重态之间的相对关系，保留了部分电荷读取能力但利用自旋塞曼能作为主要自由度，相干时间更长。
- [[qubit-control/hybrid-qubit|杂化量子比特]]在三电子组态中同时含自旋与电荷分量，保留电学快速操控优势的同时把失谐一阶的电荷噪声抑制到二阶。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]几乎不含电荷分量，相干时间最长但操控依赖微波磁场或 EDSR。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]、[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]等也可看作电荷比特的近亲，只是在不同自由度间做了取舍。

## 延伸阅读

- K. D. Petersson, J. R. Petta, H. Lu, A. C. Gossard, "Quantum Coherence in a One-Electron Semiconductor Charge Qubit", *Physical Review Letters* (2010). [DOI: 10.1103/PhysRevLett.105.246804]
- T. Hayashi, T. Fujisawa, H. D. Cheong, Y. H. Jeong, Y. Hirayama, "Coherent Manipulation of Electronic States in a Double Quantum Dot", *Physical Review Letters* (2003). [DOI: 10.1103/PhysRevLett.91.226804]
- G. Cao, H.-O. Li, G.-D. Yu, B.-C. Wang, B.-B. Chen, X.-X. Song, M. Xiao, G.-C. Guo, H.-W. Jiang, X. Hu, G.-P. Guo, "Tunable Hybrid Qubit in a GaAs Double Quantum Dot", *Physical Review Letters* (2016). [DOI: 10.1103/PhysRevLett.116.086801]
- P. Scarlino, J. H. Ungerer, D. J. van Woerkom, M. Mancini, P. Stano, C. Müller, A. J. Landig, J. V. Koski, C. Reichl, W. Wegscheider, T. Ihn, K. Ensslin, A. Wallraff, "In situ Tuning of the Electric-Dipole Strength of a Double-Dot Charge Qubit: Charge-Noise Protection and Ultrastrong Coupling", *Physical Review X* (2022). [DOI: 10.1103/PhysRevX.12.031004]

## 论文依据

- [[sources/ref-02|文献 2]]，PDF p. 20：1.4 节 Divincenzo 五条判据与"电荷比特定义即读出"的天然优势。
- [[sources/ref-02|文献 2]]，PDF p. 22：1.4.1 节电荷量子比特的定义、$|0\rangle\equiv(1,0)$/$|1\rangle\equiv(0,1)$ 编码、二能级哈密顿量 $H_{\mathrm{DQD}}=\varepsilon(t)\sigma_z/2+\Delta\sigma_x$ 与 Bloch 球表述。
- [[sources/ref-02|文献 2]]，PDF pp. 23–24：1.4.2 节 Rabi 振荡（理想矩形脉冲与 Bloch 球面三步演化）和 LZS 干涉（绝热–脉冲模型，式 1.2、1.3）。
- [[sources/ref-02|文献 2]]，PDF p. 25：1.4.3 节电荷比特与自旋比特读出方式的对比（QPC 直接读出 vs 自旋阻塞读出）。
- [[sources/ref-02|文献 2]]，PDF p. 27：1.4.4 节 GaAs 双量子点电荷比特退相干时间仅约 100 ps 量级、$1/f$ 噪声来源讨论、Hahn 回波延长的限制。
- [[sources/ref-01|文献 1]]，PDF pp. 9–10：摘要中提出用受控 Landau–Zener 跃迁实现电荷比特 Bloch 球面上任意角度旋转的"普适操作"。
- [[sources/ref-01|文献 1]]，PDF pp. 10–11：摘要中报告利用电荷量子比特对 Kibble–Zurek 机制进行量子模拟。
- [[sources/ref-01|文献 1]]，PDF pp. 29–31：二能级体系的标准推导，能量失谐 $\varepsilon=E_\beta-E_\alpha$、耦合能 $\Delta=\langle\beta|W|\alpha\rangle$，反交叉能隙 $\sqrt{\varepsilon^2+(2\Delta)^2}$。
- [[sources/ref-01|文献 1]]，PDF pp. 103–106：第 5 章完整给出 Landau–Zener 跃迁概率 $P_{\mathrm{LZ}}=\exp(-2\pi\Delta^2/\hbar v)$（式 5.4）、绝热相位累积（式 5.10）、双通道干涉的演化矩阵 $U=U_1U_{\mathrm{LZ}}U_2U_{\mathrm{LZ}}$（式 5.11）、干涉概率 $P_+=\cos^2(\phi_2/2-\phi_{\mathrm{LZ}})\sin^2\theta_{\mathrm{LZ}}$（式 5.12）。
- [[sources/ref-01|文献 1]]，PDF pp. 107–108：GaAs 双量子点电荷比特实验，$2\Delta=20.7\ \mu\mathrm{eV}$、哈密顿量 $H=\varepsilon(t)\sigma_z/2+\Delta\sigma_x$（式 5.14）、$R_x(\theta)$/$R_z(\phi)$ 操控形式。
- [[sources/ref-01|文献 1]]，PDF p. 107：QPC 作为电荷探测器的读出方案。
- [[sources/ref-05|文献 5]]，PDF p. 63：第 3 章由双量子点构成的单电荷量子比特开始，双量子点编码电荷比特的 $|L\rangle$、$|R\rangle$ 选作基矢。
- [[sources/ref-05|文献 5]]，PDF p. 65：3.2 双量子点的光子辅助隧穿开始。
- [[sources/ref-05|文献 5]]，PDF p. 66：双量子点哈密顿量 $H=\varepsilon\sigma_z/2+\Delta\sigma_x$（式 3-2）；光子辅助隧穿条件 $\alpha\varepsilon=(hf)^2-(2t)^2$（式 3-3），实测 $2t=13.2$ GHz（门压 $-1.01$ V）、$2t=2.4$ GHz（$-1.08$ V）。
- [[sources/ref-05|文献 5]]，PDF p. 67：3.3 双量子点的脉冲拉莫振荡（Bloch 球三步旋转），振荡频率 $2\Delta/h$。
- [[sources/ref-05|文献 5]]，PDF p. 68：3.4 双量子点的 LZS 效应及四步演化过程 $U=R_z(-\phi_{\mathrm{LZ}})R_x(\theta_{\mathrm{LZ}})R_z(-\phi_{\mathrm{LZ}})R_z(\phi_i)R_z(-\phi_{\mathrm{LZ}})R_x(\theta_{\mathrm{LZ}})R_z(-\phi_{\mathrm{LZ}})$（式 3-4）。
- [[sources/ref-05|文献 5]]，PDF p. 69：旋转角 $\theta=4\arcsin\sqrt{P_{\mathrm{LZ}}}$ 与相位 $\phi_i=(A-\varepsilon_0)^2\tau_r/\hbar A$（式 3-8、3-9）；3.4 节中微波 Rabi 振荡概率 $P_L(t)$（式 3-12）。
- [[sources/ref-05|文献 5]]，PDF p. 70：Si/SiGe 双量子点 Rabi 振荡实测：微波频率 1 GHz 下拟合得到 $T_2^*=1.5$ ns；Ramsey 操作流程与 Hahn 回波。
- [[sources/ref-05|文献 5]]，PDF p. 75：双电荷比特四量子点结构、能量表达式 $E_{LL}=\varepsilon_1+\varepsilon_2+J/2$（式 4-1）与 $J=U_{LL}+U_{RR}-U_{LR}-U_{RL}$ 的耦合能定义。
- [[sources/ref-05|文献 5]]，PDF p. 83：双电荷比特整体哈密顿量 $H_{2q}=\tfrac12(\varepsilon_U\sigma_z^{(1)}+\Delta_U\sigma_x^{(1)})\otimes I+I\otimes\tfrac12(\varepsilon_L\sigma_z^{(2)}+\Delta_L\sigma_x^{(2)})+\tfrac{J}{2}I\otimes\sigma_z^{(1)}\otimes I\otimes\sigma_z^{(2)}$（式 4-15）。
- [[sources/ref-05|文献 5]]，PDF p. 93：$H_{2q}$ 的矩阵展开形式（式 4-14）与上下两个双点内耦合能同为 5 GHz 时的能级模拟。
- [[sources/ref-05|文献 5]]，PDF p. 96：双电荷比特耦合强度 $J/\hbar$ 可在 0–29.5 GHz 范围调节；$J/\hbar=30$ GHz 时理论逻辑门保真度最高 97.3%，实验实测 $J/\hbar=29$ GHz 下 CNOT 保真度 68%；$T_2^*=0.3$ ns 限制下保真度降至 88.7%。
- [[sources/ref-05|文献 5]]，PDF pp. 9–10：摘要中报告双电荷比特 CNOT 门保真度 68% 与三电荷比特 Toffoli 门静态演示。
- [[sources/ref-18|文献 18]]，PDF p. 18：双量子点电荷比特二能级哈密顿量 $H_{\mathrm{DQD}}=\tfrac12(\varepsilon\sigma_z+2t\sigma_x)$（式 1.2）及反交叉能级，转变频率 $\omega_q=\sqrt{\varepsilon^2+4t^2}/\hbar$。
- [[sources/ref-18|文献 18]]，PDF p. 23：综述中电荷比特–腔强耦合（Petta 组 $g/2\pi\approx 6.7$ MHz、Wallraff 组 SQUID 阵列腔 $g/2\pi\approx 119$ MHz）与超强耦合 $g_c/\omega_r\approx 0.1$ 的进展。
- [[sources/ref-18|文献 18]]，PDF p. 7：摘要中报告周期驱动电荷比特作为增益介质产生腔光子的总体思路（第 4 章核心内容）。
