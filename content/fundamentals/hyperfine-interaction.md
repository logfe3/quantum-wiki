---
title: 超精细相互作用
description: 半导体量子点中电子或空穴自旋与周围晶格核自旋集合之间的耦合，是 GaAs 等 III–V 族比特退相干的主要来源。
aliases:
 - 核自旋相互作用
 - 超精细耦合
 - hyperfine interaction
tags:
 - 量子点基础
 - 自旋量子比特
 - 超精细相互作用
 - 核自旋
date: 2026-09-08
---

<div class="entry-lead">超精细相互作用把量子点内的一个载流子自旋与点内约 $10^6$ 个晶格核自旋耦合起来：s 轨道电子给出各向同性接触耦合，p 轨道空穴给出弱得多的偶极型耦合；它既是 GaAs 等 III–V 族比特退相干的主要根源，也是双量子点 S–T<sub>+</sub> 混合与动态核极化等效应的物理基础。</div>

## 物理图像

半导体量子点把一个或几个载流子局域在百纳米尺度的势阱里，载流子的波函数覆盖大约 $10^4$–$10^6$ 个晶格原子核。对[[fundamentals/semiconductor-quantum-dot|半导体量子点]]中的电子自旋而言，宿主晶格核自旋集体扮演一个巨大的"自旋浴"（spin bath），通过超精细相互作用（hyperfine interaction）耦合到载流子上。这一相互作用是宿主材料固有的属性：

- 在 GaAs、InAs 等 III–V 族化合物中，导带底由阳离子的 s 轨道构成，每个原子核都有非零自旋（${}^{69}\mathrm{Ga}$、${}^{71}\mathrm{Ga}$、${}^{75}\mathrm{As}$ 均为 $I=3/2$），与电子的接触式（contact）费米超精细耦合最强；
- 在 Si、Ge 等第四族元素半导体中，导带底同样为 s 轨道，但只有 ${}^{29}\mathrm{Si}$（$I=1/2$，天然丰度 4.67%）与 ${}^{73}\mathrm{Ge}$（$I=9/2$，天然丰度 7.76%）具有非零核自旋；其他同位素（${}^{28}\mathrm{Si}$、${}^{30}\mathrm{Si}$、${}^{70}\mathrm{Ge}$、${}^{72}\mathrm{Ge}$、${}^{74}\mathrm{Ge}$、${}^{76}\mathrm{Ge}$）核自旋均为零，使第四族比特天生具有更弱的超精细噪声；
- 价带顶的波函数是 p 型（重空穴/轻空穴），其超精细耦合是偶极型的、各向异性的 Ising 形式，强度比同体系的 s 轨道耦合小 1–2 个数量级，因此应变锗、硅中空穴比特对核自旋噪声天然不敏感）。

从工程角度看，超精细相互作用同时是噪声源与工具：它是 GaAs 等材料中[[qubit-control/single-spin-qubit|单自旋量子比特]]退相干的根本原因），但通过同位素纯化, 43）、动态核极化（dynamic nuclear polarization, DNP）和动态解耦序列，又可以把它压低或滤除, 138）。在双量子点的 S–T<sub>+</sub> 反交叉附近，超精细梯度又是驱动单态–三重态相干混合的内禀机制）。

## 理论模型

### 单电子哈密顿量

设电子自旋算符为 $\mathbf{S}$、第 $k$ 个核自旋算符为 $\mathbf{I}_k$，单电子与一组核自旋的超精细相互作用哈密顿量为

$$
H_{\mathrm{hf}}=\sum_k A_k\,\mathbf{I}_k\cdot\mathbf{S}
$$

其中 $A_k$ 是第 $k$ 个核的超精细耦合常数。对 s 轨道电子，它是接触式费米耦合 $A_k\sim |\psi(r_k)|^2\,\tfrac{8\pi}{3}\,\mu_0\,g\mu_B\,g_k\mu_N$；对 p 轨道空穴，$\mathbf{I}_k\cdot\mathbf{S}$ 项因角动量选择定则被严重压制，剩下的偶极相互作用只保留各向异性的 Ising 分量 $H_{\mathrm{hf}}^{(h)}\propto\sum_k A_k^{(\parallel)} I_k^z S^z$。

由于核自旋动力学比电子慢若干个数量级（核–核偶极相互作用时间尺度 $\tau_{\mathrm{dd}}\sim 10^3$–$10^4\ \mu\mathrm{s}$，远大于电子自旋动力学），通常采用准静态近似（quasi-static approximation）把所有核自旋的集体效应替换为一个有效磁场——Overhauser 场）：

$$
H_{\mathrm{hf}}=g\mu_B\,\mathbf{B}_N\cdot\mathbf{S},\qquad
\mathbf{B}_N=\frac{1}{g\mu_B}\sum_k A_k\,\mathbf{I}_k.
$$

这是一个 **Knight 场**（电子视角）/ **Overhauser 场**（核自旋视角）的双向命名：在电子自旋看来，核自旋集合等效成一个随时间缓慢涨落的磁场；在核自旋看来，电子自旋相当于一个外加磁场，方向沿电子自旋取向。

### 磁场量级

- **理论上限**：若 $N$ 个核全部沿 $z$ 方向完全极化，Overhauser 场幅值约为

```math
B_{N,\max}=\frac{1}{g\mu_B}\sum_k A_k\,I_k\sim 1\text{–}5\ \mathrm{T}
```

对 GaAs 量子点典型值。
- **未极化下的均方根涨落**：核自旋取向随机时，中心极限定理给出

```math
B_{N,\mathrm{rms}}\sim \frac{B_{N,\max}}{\sqrt{N}}.
```

对一个 $N\approx 10^6$ 的量子点，$B_{N,\mathrm{rms}}\approx 1\text{–}5\ \mathrm{mT}$）。$B_N$ 涨落的特征时间由核–核偶极相互作用决定（$\sim 10$–$100\ \mu\mathrm{s}$），与电子自旋动力学相比可视为准静态。
- **双量子点之间的梯度**：左右两点各自覆盖不同的核集合，差分

```math
\Delta\mathbf{B}_N=\mathbf{B}_{N,L}-\mathbf{B}_{N,R}
```

是双点 S–T<sub>±</sub> 比特操控的物理引擎, 138）。

对应的能量尺度为 $E_N=g\mu_B|\Delta\mathbf{B}_N|$，在平面锗空穴体系中实测约 $0.1\ \mathrm{meV}$。

### 双电子 S–T<sub>0</sub> 比特与 S–T<sub>+</sub> 比特

双量子点 (1,1) 区两电子自旋态可按 $\{T_+,T_0,T_-,S\}$ 基展开。设外磁场沿 $z$、交换相互作用为 $J(\epsilon)$、左右两点的 Overhauser 场分别为 $\mathbf{B}_{N,L}$、$\mathbf{B}_{N,R}$，则四个能级在 $\{|T_+\rangle,|T_0\rangle,|T_-\rangle,|S\rangle\}$ 基下的哈密顿量为，式 1.4）

```math
H=g\mu_B\begin{pmatrix}
B_Z & 0 & 0 & \tfrac{dB_x-\mathrm{i}\,dB_y}{2}\\[3pt]
0 & 0 & 0 & -dB_z\\[3pt]
0 & 0 & -B_Z & -\tfrac{dB_x+\mathrm{i}\,dB_y}{2}\\[3pt]
\tfrac{dB_x+\mathrm{i}\,dB_y}{2} & -dB_z & -\tfrac{dB_x-\mathrm{i}\,dB_y}{2} & -\tfrac{J(\epsilon)}{g\mu_B}
\end{pmatrix}
```

其中
```math
B_Z=B_{\mathrm{ext}}+\tfrac{1}{2}(B_{N,L}^z+B_{N,R}^z),\qquad
\mathbf{dB}=\tfrac{1}{2}(\mathbf{B}_{N,L}-\mathbf{B}_{N,R}).
```

极限 $B_Z\gg B_N$ 时把 $T_+$ 与 $S$ 张成有效二能级：

```math
H_{S-T_+}=\begin{pmatrix}
0 & -g\mu_B\,dB_Z\\
-g\mu_B\,dB_Z & -J(\epsilon)
\end{pmatrix},\quad
H_{S-T_+}^{\perp}=g\mu_B\begin{pmatrix}
B_Z & \tfrac{dB_x-\mathrm{i}\,dB_y}{2}\cos\theta\\[3pt]
\tfrac{dB_x+\mathrm{i}\,dB_y}{2}\cos\theta & -J(\epsilon)/g\mu_B
\end{pmatrix}
```

其中 $\theta=\arctan(2\Delta/\sqrt{\epsilon^2+4\Delta^2})$ 由失谐 $\epsilon$ 与隧穿耦合 $\Delta$ 决定。结果是 Overhauser 场的 **z 分量梯度**耦合 $S\leftrightarrow T_0$，**横向分量梯度**驱动 $S\leftrightarrow T_+$，把 $S$–$T_+$ 简并交叉变为反交叉。

在奇数电子区，$\tilde D_{+1/2}$–$\tilde Q_{+3/2}$ 子空间同样需要显式写出 $H_{\mathrm{hf}}$：本征态 $|{\downarrow}\rangle\otimes|T_+\rangle$ 与 $|{\uparrow}\rangle\otimes|T_0\rangle$ 在布洛赫球上位于与 $z$ 轴夹角约 70.5° 的轴上，正是 Overhauser 梯度赋予布洛赫矢量一个确定的"z 旋转轴"。

### 退相干与 Ramsey 衰减

把 Overhauser 场视为随时间准静态涨落的局域磁场，电子自旋绕 $\mathbf{B}_N$ 进动，频率 $f_L=(g\mu_B/h)|\mathbf{B}_{\mathrm{ext}}+\mathbf{B}_N|$。在 GaAs 中典型的 $|\mathbf{B}_N|$ 涨落分布近似高斯，对应单发[[qubit-control/ramsey-interferometry|Ramsey]]衰减为高斯包络

$$
P_\uparrow(t_{\mathrm{evol}})=A\,\exp\!\left[-\left(\frac{t_{\mathrm{evol}}}{T_2^*}\right)^2\right]+B
$$

其中 $T_2^*$ 由 Overhauser 涨落的均方根决定。GaAs 单自旋比特 $T_2^*\sim 10$–$20\ \mathrm{ns}$；自然硅 $T_2^*\sim 0.3$–$1\ \mu\mathrm{s}$；${}^{28}\mathrm{Si}$ 同位素纯化后（${}^{29}\mathrm{Si}$ 残余 60 ppm 量级）可达数十微秒）。Hahn 回波和 CPMG 序列通过反转累积相位把准静态 Overhauser 噪声"重聚焦"掉，$T_{2,\mathrm{echo}}$、$T_2^{\mathrm{CPMG}}$ 可以远大于 $T_2^*$。值得注意的是，核自旋噪声的束缚并非不可逾越：优化微磁体 EDSR 把天然硅（4.67% ${}^{29}\mathrm{Si}$）的 $T_2^*$ 推到约 2 µs、单比特保真度 99.6%（见[[qubit-control/single-qubit-gate|单比特门]]词条的天然硅容错门槛一节）——不经纯化也可越过容错阈值。

<!-- FIGURE: 三种材料体系中 $T_2^*$ 的 Ramsey 包络对比：GaAs 高斯快速衰减（~10 ns）、自然硅指数衰减（~1 μs）、${}^{28}\mathrm{Si}$ 长寿命衰减（~100 μs） -->

## 参数与量级

| 量 | GaAs（电子） | ${}^{\mathrm{nat}}\mathrm{Si}$（电子） | ${}^{28}\mathrm{Si}$（电子） | 应变 Ge（空穴） |
| --- | --- | --- | --- | --- |
| 宿主核自旋 | ${}^{69,71}\mathrm{Ga}$、${}^{75}\mathrm{As}$，$I=3/2$ | 4.67% ${}^{29}\mathrm{Si}$，$I=1/2$ | ${}^{29}\mathrm{Si}$ 60 ppm 级 | ${}^{73}\mathrm{Ge}$ 7.76%，$I=9/2$ |
| 轨道特征 | s（导带） | s（导带） | s（导带） | p（价带） |
| 耦合形式 | 接触式各向同性 | 接触式各向同性 | 接触式各向同性 | 偶极型，Ising 各向异性 |
| $B_{N,\mathrm{rms}}$ | 1–5 mT） |
| 典型 $T_2^*$ | ~10–20 ns | ~0.3–1 μs | >100 μs | 17.6 μs |
| 梯度能量 $E_N$ | $g\mu_B|\Delta B_N|\sim 0.1\ \mathrm{meV}$ | ~同量级 | ~同量级 | $\sim 0.1\ \mathrm{meV}$ |
| 残余噪声通道 | 电荷噪声 + 超精细 | 电荷噪声 + 残余超精细 | 谷间散射、电荷噪声 | Ising 各向异性 + 电荷噪声 |

数字仅给量级；具体值强烈依赖器件尺寸、纯化水平、温度与外磁场方向。

<!-- FIGURE: 不同材料中 $B_N$ 涨落分布的高斯包络示意：GaAs 自然硅 纯化硅 Ge 空穴 -->

## 实验特征与测量方法

### Overhauser 移位（平均场）

把核自旋整体极化到期望值 $\langle\mathbf{I}\rangle$，Overhauser 场等效于一个可调直流磁场，等价于电子自旋共振频率发生 $\Delta f=g\mu_B B_N/h$ 的移位。这是动态核极化（DNP）的核心反馈量：在电子自旋共振附近调节泵浦频率或功率，$\Delta f$ 随之漂移；锁住 $\Delta f$ 即把核自旋极化稳定在期望值。

### 单发 Overhauser 场读取

通过双量子点 S–T<sub>+</sub> 漏电流测量可以单发读出 Overhauser 梯度。漏电流峰值随外磁场 $B_{\mathrm{ext}}$ 增大而单调衰减，形成以 $B_{\mathrm{ext}}=0$ 为中心、半高宽由 Overhauser 涨落有效幅值决定的电流峰：半高宽直接给出 $B_N$ 的均方根。隧穿耦合 $t\ll E_N$ 时 $S$ 与 $T$ 显著混合、泡利阻塞解除；$t\gg E_N$ 时退化为隧穿主导，漏电流峰被压平。

### $T_2^*$ 与动态解耦

- $T_2^*$（自由演化 Ramsey 衰减）：反映准静态 Overhauser 噪声的均方根，对应频率 $\sigma_f=g\mu_B\sigma_B/h$。
- Hahn 回波（单 $\pi$ 脉冲）：重聚焦准静态噪声但保留高频涨落，给出 $T_2^{\mathrm{echo}}$。
- CPMG / Uhrig 序列（多 $\pi$ 脉冲）：把滤波窗推到更高频率，得到 $T_2^{\mathrm{CPMG}}$。在硅与锗中常用 2–1000 个 $\pi$ 脉冲把相干时间拉长 1–2 个数量级。

### 同位素纯化与材料工程

把 ${}^{29}\mathrm{Si}$ 丰度从天然 4.67% 压到 60 ppm 级（浮区生长 8 英寸 ${}^{28}\mathrm{Si}$，${}^{29}\mathrm{Si}$ 残余约 60 ppm）后，电子自旋比特的 $T_2^*$ 从 <100 ns 跃升到数十微秒到毫秒量级，单比特门保真度达到 >99.9%）。同理，把 ${}^{73}\mathrm{Ge}$ 丰度压低（核自旋贫化的 ${}^{70}\mathrm{Ge}$/${}^{28}\mathrm{Si}^{70}\mathrm{Ge}$ 量子阱）也已经在应变锗体系中演示。这是材料工程压制超精细噪声最直接的路径。

### 与自旋轨道耦合的竞争

在 Si/SiGe、Ge/SiGe 等体系中，自旋轨道耦合与超精细相互作用同时存在，共同决定退相干通道。Si-MOS 双量子点的退相干实验中需要同时拟合声子–自旋轨道通道与残余 Overhauser 通道。在应变锗平面器件中，由于空穴 Ising 型超精细相互作用只在某一晶向显著，沿面内磁场工作可以把它进一步压低。

<!-- FIGURE: Ramsey 衰减、Hahn 回波、CPMG 序列下电子自旋相位累积随时间的演化对比，标注 $T_2^*$、$T_2^{\mathrm{echo}}$、$T_2^{\mathrm{CPMG}}$ -->

## 与其他概念的关系

- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]是超精细相互作用的舞台：量子点的有限尺寸使 $N\sim 10^6$ 的核集体表现为宏观"自旋浴"，但同时又允许栅压、电场调节电子波函数覆盖范围，进而调节 $A_k$ 加权平均。
- [[fundamentals/constant-interaction-model|常相互作用模型]]描述量子点电荷学，不含自旋；把 $\mathbf{S}$ 自由度补齐后就有了包含超精细相互作用的扩展 Hubbard 模型。
- [[materials-devices/gaas-algaas|GaAs/AlGaAs]] 是核自旋富集体系的代表：每个阳离子都有 $I=3/2$，超精细噪声最强；这也是为什么 GaAs 自旋比特成为研究超精细物理的优选平台）。
- [[materials-devices/silicon-mos|Si-MOS]] 与 [[materials-devices/silicon-sige|Si/SiGe]] 通过 ${}^{28}\mathrm{Si}$ 同位素纯化把 ${}^{29}\mathrm{Si}$ 压到 60 ppm 级，把 $T_2^*$ 推进到数十微秒以上, 43）。
- [[materials-devices/strained-germanium|应变锗]] 空穴比特利用 p 轨道耦合的 Ising 各向异性与 ${}^{73}\mathrm{Ge}$ 同位素贫化两重手段把超精细噪声压低，配合面内磁场在 IBM 锗三比特实验中给出 17.6 μs 的 $T_2^*$）。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]的相干时间上限由 Overhauser 涨落决定；Loss–DiVincenzo 比特的工作点往往需要满足 $J(\epsilon)\ll g\mu_B B_N$ 才能让核磁场驱动比特旋转。
- [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]直接利用 Overhauser 梯度作为比特操控手段：横向梯度驱动 S–T<sub>+</sub>、纵向梯度驱动 S–T<sub>0</sub>。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]天然利用 p 轨道弱超精细，在应变锗与硅纳米线体系中是降低核噪声的首选编码）。
- [[qubit-control/ramsey-interferometry|Ramsey 干涉]]与 [[qubit-control/dynamical-decoupling|动态解耦]]是探测与抑制超精细噪声的标准工具；Hahn 回波、CPMG、Uhrig 序列分别瞄准准静态、缓变、快变分量。
- [[materials-devices/micromagnet|微磁体]]引入的梯度磁场与 Overhauser 涨落在 [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）中共存，是单比特 Rabi 频率与相干时间的共同决定因素。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]的去相位由 Overhauser 涨落与电荷噪声共同贡献：纯化硅中 Rabi 振荡外推的 $T_2^*$ 远高于 GaAs。
- [[qubit-control/exchange-interaction|交换相互作用]]与超精细梯度共同决定双量子点 S–T<sub>0</sub> 与 S–T<sub>+</sub> 反交叉的能级图，是[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]与[[qubit-control/pauli-spin-blockade|泡利自旋阻塞]]读出的核心。
- [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]也受 Overhauser 场修正：超精细场移动自旋 Zeeman 频率（改变与腔的失谐）并修正有效耦合强度，III-V 体系腔介导两比特门的保真度随核态构型涨落（见该词条"超精细场对腔介导耦合的修正"一节）。
- [[readout-measurement/qh-edge-channel-charge-sensor|量子霍尔边缘通道电荷传感器]]反向利用超精细劈裂做资源：同位素纯化 ^28Si 中单个 ^31P 施主 D⁰ 能级的 60 MHz 超精细劈裂大于光学线宽，使 12 条 D⁰→D⁰X 跃迁可以按核自旋分辨，光泵浦"选核自旋、电读电荷态"由此实现单核自旋 QND 读出。


## 参考文献

- 核自旋与电子自旋退相干（GaAs 对比硅）的经典综述：[[references/hanson-2007|Hanson et al., RMP 79, 1217 (2007)]]；现代视角见 [[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
