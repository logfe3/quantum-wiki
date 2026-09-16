---
title: SQUID 阵列谐振腔
description: 以多个超导量子干涉器件串联形成高且可调电感的高阻抗微波谐振器。
aliases:
  - SQUID阵列腔
  - 约瑟夫森结阵列谐振腔
  - SQUID 阵列腔
  - 约瑟夫森结阵列腔
tags:
  - 电路量子电动力学
  - 超导器件
date: 2026-09-08
---

<div class="entry-lead">SQUID 阵列把许多可磁通调节的约瑟夫森电感串起来，在较小几何长度内得到大总电感、高阻抗和可调谐振频率，是把半导体量子点推入强耦合 cQED 区间的关键器件路线之一。</div>

## 物理图像与定义

单个约瑟夫森结（Josephson junction）在库珀对隧穿中表现为强非线性动态电感（dynamic inductance），而其值

$$
L_J=\frac{\Phi_0}{2\pi\,I_c\cos\varphi}=\frac{\Phi_0}{2\pi\,I_c}\sec\varphi
$$

依赖于结相位 $\varphi$，因此能级间隔不均匀，不能直接当成线性谐振器使用。由两个相同约瑟夫森结并联组成的超导量子干涉仪（superconducting quantum interference device，SQUID）环路通过磁通 $\Phi_m$ 调制临界电流

$$
I_S(\Phi_m)=2I_c\left|\cos\frac{\pi\Phi_m}{\Phi_0}\right|,\qquad \Phi_0=h/2e
$$

对应的有效电感

$$
L_S(\Phi_m)=\frac{L_J}{2}\left|\cos\frac{\pi\Phi_m}{\Phi_0}\right|^{-1}
$$

在 $\Phi_m=0$ 处取极小、随磁通增大而单调上升。把 $N$ 个结构相同的 SQUID 串联起来组成中心导体，单个 SQUID 的强非线性被均摊到整个阵列上，阵列整体只在高光子数（高功率）下才显现明显的非线性响应；与此同时，腔的等效电感 $L_r\propto N L_S$ 与特征阻抗 $Z_r=\sqrt{L/C}$ 被显著抬高，并因 $L_S(\Phi_m)$ 的存在而成为磁通可调器件——这就是 **SQUID 阵列谐振腔**（SQUID array resonator）。同一条线路也可被用于制备参量放大器和约瑟夫森参量转换器，因此常被统称为"超导超电感"（superinductance）平台。

<!-- FIGURE: 单个 SQUID 与 N 个 SQUID 串联阵列的等效电路图：L_J、Φ_m 与 C_S、C_0 标注；阵列整体表现高电感、低非线性 -->

## 理论模型：拉格朗日量、色散关系与频率可调性

### 集总单元与拉格朗日量

把每个 SQUID 等效为一个电感 $L_S$ 与结电容 $C_S$ 的并联，再加上每个单元到地的几何电容 $C_0$。$N$ 个 SQUID 串联、节点磁通 $\Phi_n$ 处的系统拉格朗日量为

$$
\mathcal{L}=\sum_{n=1}^{N}\left[\frac{1}{2}C_0\dot\Phi_n^{\,2}+\frac{1}{2}C_S\left(\dot\Phi_n-\dot\Phi_{n+1}\right)^2-\frac{1}{2L_S}\left(\Phi_n-\Phi_{n+1}\right)^2\right]
$$

三项分别是对地电容、相邻 SQUID 间的电容以及 SQUID 电感中储存的能量。对 $\Phi_n$ 作傅里叶展开

$$
\Phi_n=\frac{1}{\sqrt N}\sum_k e^{i\pi k n/N}\Phi_k
$$

把拉格朗日量对角化。电容矩阵与电感矩阵分别为

$$
\mathbb C_{kk'}=\delta_{kk'}\left[\frac{C_0}{2}+C_S\left(1-\cos\frac{\pi k}{N}\right)\right],\qquad
\mathbb L_{kk'}=\frac{\delta_{kk'}L_S}{1-\cos(\pi k/N)}
$$

量子化后得到一系列独立模式

$$
\mathcal H=\sum_k\hbar\omega_k\left(a_k^\dagger a_k+\tfrac12\right),\qquad
\omega_k=\omega_0\sqrt{\frac{1-\cos(\pi k/N)}{C_0/(2C_S)+\left(1-\cos\frac{\pi k}{N}\right)}}
$$

其中 $\omega_0=1/\sqrt{L_SC_S}$ 为单个 SQUID 的等离子体频率（plasma frequency）。基频 $k=0$ 模式即工作模式：在 $C_S\gg C_0$ 的典型极限下

$$
\omega_r\equiv\omega_0\sqrt{\frac{C_0}{2C_S}}\propto\frac{1}{\sqrt{L_S(\Phi_m)}}
$$

明确地把 $\omega_r$ 与 SQUID 的等效电感 $L_S$ 联系起来。

<!-- FIGURE: SQUID 阵列色散曲线 $\omega_k$ 随模式指标 $k$ 的分布：基模 k=0 为工作点 -->

### 频率可调与阵列参数的选取

式 $\omega_r\propto 1/\sqrt{L_S(\Phi_m)}$ 给出 SQUID 阵列腔最常用的调控通道：通过样品盒外的磁线圈改变穿过每个 SQUID 环的 $\Phi_m$，等比例移动 $L_S$，从而原位调节 $\omega_r$。组展示 SQUID 反射腔的频率在 $I_\mathrm{coil}$ 扫描下从 6.6 GHz 下调到 6.2 GHz 以下；组在两个双量子点样品上得到 $\omega_r/2\pi$ 随 $I_\mathrm{coil}$ 周期性变化，最大值固定在 6.48 GHz；组报告 SQUID 阵列反射腔的可调范围 5.6–6.23 GHz。

为减小磁通噪声，工作时常固定在 $\omega_r$ 极大处。此外，腔频还要与量子点电荷态跃迁频率 4–8 GHz 对齐。改变 SQUID 数目 $N$、结面积（即 $I_c$ 与 $L_S$）与每单元 $C_0$ 是把 $\omega_r$ 调入工作频段的三个工程参数。

### 阻抗与耦合强度

SQUID 阵列作为高电感中心导体，把常规 50 Ω 共面波导腔的 $Z_r$ 推到 kΩ 量级。以与制备的反射腔为代表，腔阻抗 $Z_r$ 典型为 1 kΩ 左右，对比 50 Ω 共面波导实现约 $\sqrt{20}\approx 4.5$ 倍的耦合增强

$$
g_0=\frac12\beta\omega_r\sqrt{\frac{Z_r}{\pi\hbar}}
$$

其中 $\beta$ 是电极电容分压系数。该式的更详细推导与阻抗对耦合强度的标度关系见[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]词条。

## 结构与制备

实验中使用的 SQUID 阵列反射腔通常采用 Al/AlO$_x$/Al 工艺——双层电子束胶图形化、双角度斜蒸发镀铝与原位氧化形成结——随后做剥离（lift-off）得到重复单元。电路层面：SQUID 阵列的总长度约 200 µm，由 38 个 SQUID 串联；组则用 32 个 SQUID 串联构造 6.48 GHz 反射腔。把阵列一端通过大电容交流耦合到 50 Ω 馈线，另一端接地，形成 $\lambda/4$ 反射腔；电压波腹出现在耦合电容端，量子点的 plunger 电极从此处伸出耦合到 GaAs/AlGaAs 二维电子气上的双量子点。

为调节磁通，样品盒盖子上固定一个手绕铜线圈（或贴片线圈），由外部电流源 $I_\mathrm{coil}$ 驱动。同时把 PCB 微波线路设计成 50 Ω，与外部矢量网络分析仪匹配。

<!-- FIGURE: SQUID 阵列反射腔与两个双量子点的耦合样品版图：腔中心导体由 SQUID 串联、波腹处伸出 plunger 电极连接到两个点 -->

## 量子点 cQED 实验中的典型表现

### 单量子点电荷比特的真空 Rabi 劈裂

在 NbTiN 反射腔上得到 $2g_0/2\pi=74$ MHz 的电荷比特耦合；同一样品在 SQUID 阵列腔分支上，通过把 $\omega_r$ 调到与点间隧穿耦合 $2t_c$ 接近，得到真空 Rabi 劈裂。则展示 SQUID 阵列腔中单个电荷比特的真空 Rabi 劈裂 $2g_1/2\pi=2\times81$ MHz 和 $2g_2/2\pi=2\times80$ MHz，符合 SQUID 阵列提供的耦合强度量级。

### 两个双量子点的远程耦合

使用 SQUID 阵列腔同时集成两个双量子点电荷比特，把它们都调节到与腔共振并测出**增强真空 Rabi 劈裂**（enhanced vacuum Rabi splitting）$2g_\mathrm{eff}/2\pi=2\times112$ MHz，对应有效耦合

$$
g_\mathrm{eff}=\sqrt{g_1^2+g_2^2},\qquad g_\mathrm{eff}/2\pi\approx 113\ \mathrm{MHz}
$$

由两比特的集体贡献叠加。同一工作中还演示了两比特关联谱（two-qubit correlation map）的 X 状图案：通过 $\delta_1$–$\delta_2$ 平面扫描，把相对失谐与探测频率同时画出，X 图案的几何宽度直接给出 $g_0$，由此提取出 $(g_0,\gamma)/2\pi=(80,55)$ MHz。这与[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]词条描述的真空比特–比特相互作用一致。

### 三量子点探测与元胞自动机

把 SQUID 阵列反射腔耦合到一个 GaAs 三量子点上：plunger 电极 PR 连接到电压波腹。在 $\omega_r/2\pi=6.23$ GHz 的反射腔谱上，腔的内部耗散、外部耗散与总耗散分别拟合得到，借助高阻抗腔的灵敏度探测到三量子点中的量子元胞自动机（quantum cellular automata，QCA）现象与[[qubit-control/photon-assisted-tunneling|光子辅助跃迁]]过程。

### 腔损耗与量子点–腔耦合的同步表征

给出 NbTiN/SQUID 阵列腔的拆解损耗 $(\kappa,\kappa_i,\kappa_e)/2\pi=(58.9,36.9,22.0)$ MHz；SQUID 阵列分支上损耗偏大，主要来自阵列内部 SQUID 参数不均匀与氧化层界面介电损耗。

## 参数与量级

| 量                           | 典型值                                        | 来源                            |
| ---------------------------- | --------------------------------------------- | ------------------------------- |
| SQUID 数目 $N$               | 32 / 38                                       | （p. 111）；（p. 50）           |
| 阵列总长度                   | 约 200 µm                                     | （p. 50）                       |
| 单 SQUID 等效电感 $L_S$      | 由 $I_c$ 与 $\Phi_m$ 决定，$\Phi_0/2I_c$ 量级 | （p. 41）                       |
| 腔频 $\omega_r/2\pi$         | 5.6–6.6 GHz 可调                              | （p. 61）；（p. 62）；（p. 78） |
| 特征阻抗 $Z_r$               | 约 1 kΩ                                       | （p. 41）                       |
| 全局电荷–光子耦合 $g_0/2\pi$ | 数十至 100 MHz 量级（见文中具体实验）         | ；                              |
| 总腔耗散 $\kappa/2\pi$       | 30–60 MHz（SQUID 阵列路线）                   | （p. 41）                       |
| 内部损耗 $\kappa_i/2\pi$     | 约 36.9 MHz                                   | （p. 87）                       |
| 比特退相干 $\gamma/2\pi$     | 电荷比特 22–55 MHz                            | （pp. 85、88）                  |

## 优势与局限

**优势**：

- $Z_r$ 在 1 kΩ 量级，把 $g\propto\sqrt{Z_r}$ 直接放大，与 50 Ω 腔相比实现约 4.5 倍耦合增强；
- 单器件同时实现高阻抗与原位频率可调：通过 $I_\mathrm{coil}$ 在 0.5 GHz 量级范围内扫频，便于在不调量子点电极的情况下完成共振、避免交叉、关联谱扫描；
- 阵列整体非线性弱，可工作在线性区间直至较高光子数；
- 用标准 Al/AlO$_x$/Al 工艺即可制备，与半导体量子点工艺兼容。

**限制**：

- $\kappa/2\pi$ 通常在 30–60 MHz，相比 NbTiN/TiN 高动态电感材料腔（11 MHz、2.2 MHz）大一个量级，主要源于结参数不均匀与界面 TLS 损耗；
- 对磁通极度敏感：$\omega_r$ 与 $L_S(\Phi_m)$ 直接耦合，微弱磁噪声就足以引起频率抖动；这与需要面内磁场的自旋比特实验冲突，组后来改用 NbTiN 抗磁路线；
- 在强周期驱动下，磁通可调性同时意味着非线性进入非线性区，必须区分想要的量子点动力学与腔自身非线性响应；
- 与[[materials-devices/charge-noise|电荷噪声]]共处：高频电极电压对 $\omega_r$ 的扰动约 $10$–$20$ kHz 量级，扫描时仍需注意栅压对腔频的反向耦合。

## 与其他概念的关系

- 在[[circuit-qed/circuit-quantum-electrodynamics|cQED 体系]]中，SQUID 阵列腔是[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]的一种实现方式，与 NbTiN/TiN 动态电感腔并列；
- 它的物理本质是大量约瑟夫森结的串联，因此单个结的非线性电感公式是讨论阵列哈密顿量的入口；阻抗提升对应[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]的全局增强；
- 频率可调性使其在[[circuit-qed/jaynes-cummings-model|JC 模型]]的失谐 $\Delta$ 上多了一个工程自由度：可以扫 $\omega_r$ 替代扫比特频率做避免交叉、关联谱与光子辅助过程实验；
- 把两个电荷比特同时接到 SQUID 阵列腔的电压波腹上，构成[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]，而多个电荷比特共享同一腔模对应[[scaling-automation/quantum-dot-array|量子点阵列]]与集体微波响应；
- 与[[readout-measurement/dispersive-readout|色散读出]]配合时，色散频移 $\chi=g^2/\Delta$ 因 $g$ 增大而变大，但 $\kappa$ 较大又限制了读出速度；
- 同一结构亦可作参量放大器使用，借助 SQUID 阵列的磁通可调非线性实现量子限制放大。
