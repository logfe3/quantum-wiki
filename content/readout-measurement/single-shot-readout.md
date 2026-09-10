---
title: 单发读出
description: 在一次实验循环内判定单个量子态结果，而不是只得到多次重复的平均值。
aliases:
  - 单次读出
  - single-shot readout
  - 单发测量
  - 实时读出
tags:
  - 读出与测量
  - 量子态
date: 2026-09-08
---

<div class="entry-lead">单发读出要求一次积分得到的信号就足以把两个状态分开；它输出每次实验的离散结果，是反馈、量子纠错和统计测量的基础。</div>

## 三个环节

一次完整的单发读出（single-shot readout）由三个串行环节组成，每一环节的物理来源与误差贡献都可以独立建模：

1. **映射**：把自旋或逻辑态转换为不同电荷占据、隧穿事件或谐振腔响应。半导体量子点中最常见的两类是[[#能量选择隧穿读出|能量选择隧穿读出]]（Elzerman readout，[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 34–35）与[[#泡利自旋阻塞读出|泡利自旋阻塞读出]]（Pauli spin blockade, PSB；[文献 6]([[sources/chen-baobao-2017]])，PDF p. 4）。前者把塞曼能级差作为"读出窗口"，后者把单态–三重态能级差作为读出窗口，可达数十至上百 μeV。
2. **获取**：在状态弛豫前，用传感器和放大链积累足够信噪比。硅基量子点中传感器多为单电子晶体管（SET）或[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]，超导电路则用[[readout-measurement/dispersive-readout|色散读出]]配合[[readout-measurement/parametric-amplifier|参量放大器]]。把传感器和积分线路的传递函数推到底，对应一次积分的信噪比
$$
\mathrm{SNR}=\frac{|C_e-C_g|^2}{\sigma_g^2+\sigma_e^2},
$$
其中 $C_{g,e}$ 是两个态对应的高斯圆斑中心在 $I$–$Q$ 平面上的坐标，$\sigma_{g,e}$ 是圆斑半径（[文献 14]([[sources/duan-peng-2022]])，PDF p. 62）。当系统噪声与态无关、信号为高斯分布时，态分离错误率
$$
E_\mathrm{sep}=\mathrm{erfc}\!\left(\sqrt{\mathrm{SNR}/2}\right).
$$
3. **判决**：用阈值、模板匹配或分类器把时间轨迹映射为状态标签。最简单的方法是投影阈值法——把 $I$–$Q$ 数据沿两圆斑中心连线投影、选单一阈值；多比特联合读出时可用[[readout-measurement/readout-crosstalk|抗串扰分类器]]（如浅层神经网络，文献 14，PDF pp. 134–136）。判决后得到两个态各自的正确判定概率 $F_\uparrow,F_\downarrow$，合成可见度 $V^R=F_\uparrow+F_\downarrow-1$；硅自旋比特在 §"参数与量级"所列参数下可达 $V^R\approx 85.4\%$（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 64）。

仅报告两个直方图的分离度（"信号良好"）会高估完整读出性能。完整读出保真度必须同时计入三类错误——初始化错误（init）、自旋–电荷转换/态分离错误（sep）、以及积分期间的 $T_1$ 弛豫错误（$E_{T_1}\simeq 1-e^{-\tau/(2T_1)}$，[文献 14]([[sources/duan-peng-2022]])，PDF p. 65）。在表面码阈值（$\approx 1\%$）约束下，错误率通常先平均分配给三类，对应的读取时间预算 $\tau_\mathrm{th}=T_1/100$、所需的最小信噪比 $\mathrm{SNR}_\mathrm{th}\simeq 3.97$（[文献 14]([[sources/duan-peng-2022]])，PDF p. 65）。

<!-- FIGURE: 单发读出三环节流程图：状态映射 → 信号获取 → 判决分类 -->

## 理论模型

### 能量选择隧穿读出

能量选择隧穿读出（Elzerman readout）由 Elzerman 等人于 2004 年提出，是最经典的[[qubit-control/single-spin-qubit|单自旋量子比特]]单发读出方案。它将源漏费米面调到单电子自旋向上 $|\!\uparrow\rangle$ 与自旋向下 $|\!\downarrow\rangle$ 两个塞曼能级之间：只有激发态 $|\!\uparrow\rangle$ 电子能隧穿出量子点，随后一个 $|\!\downarrow\rangle$ 电子从源漏回填——电荷传感器上出现一个"高电平脉冲"（blip）；基态 $|\!\downarrow\rangle$ 电子则停留在量子点中，信号保持"低电平"（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 34）。

读出阶段的隧穿过程用费米黄金定则给出的速率方程描述，状态矢量 $\mathbf{P}=(P_\uparrow,P_\downarrow,P_0)^T$ 满足 $d\mathbf{P}/dt=Q\mathbf{P}$，转移矩阵为

$$
Q=\begin{pmatrix}
-W-\Gamma_\uparrow^\mathrm{out} & 0 & 0\\
W & -\Gamma_\downarrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{in}\\
\Gamma_\uparrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{out} & -\Gamma_\downarrow^\mathrm{in}
\end{pmatrix},
$$

其中 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out}$ 是激发态、基态电子隧穿出量子点的速率，$\Gamma_\downarrow^\mathrm{in}$ 是基态电子回填速率，$W=1/T_1$ 是自旋弛豫速率（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 66–67）。矩阵不含时，解可直接写成 $\mathbf{P}(t)=e^{Qt}\mathbf{P}(0)$。$t$ 时刻量子点被排空的概率为

$$
P_0(t)=\frac{\Gamma_\downarrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{tot}}\!\left(1-e^{-t\Gamma_\downarrow^\mathrm{tot}}\right)
+P_\uparrow^I\,\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{tot}}
\!\left(e^{-t\Gamma_\downarrow^\mathrm{tot}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right),
$$

其中 $\Gamma_\downarrow^\mathrm{tot}=\Gamma_\downarrow^\mathrm{out}+\Gamma_\downarrow^\mathrm{in}$，$P_\uparrow^I$ 是读取开始时电子处于激发态的概率。第一项与 $P_\uparrow^I$ 无关，是基态电子来回隧穿构成的"本底鼓包"；第二项与 $P_\uparrow^I$ 成正比，是平均信号上"鼓包"的来源。把多次轨迹归一化后用此式拟合即可提取三个隧穿速率。

若只关心窗口 $t_r$ 内电子"是否跳出过"——即忽略回填通道——则可令 $\Gamma_\downarrow^\mathrm{in}=0$，自旋–电荷转换可见度 $V^{STC}(t)=F_\uparrow^{STC}+F_\downarrow^{STC}-1$ 取得解析式（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 67–68）：

$$
V^{STC}(t)=\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}
\!\left(e^{-t\Gamma_\downarrow^\mathrm{out}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right).
$$

物理上这是一场赛跑：窗口太短激发态来不及跳出，太长基态也开始跳出，最优窗口由两个隧穿速率之比的对数决定：

$$
t_\mathrm{opt}^{STC}=\frac{1}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}
\ln\frac{W+\Gamma_\uparrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{out}}
\;\xrightarrow{\;\Gamma_\uparrow^\mathrm{out}\gg W\;}\;
\frac{1}{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}\ln\frac{\Gamma_\uparrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{out}}.
$$

电荷探测可见度 $V^E=F_\uparrow^E+F_\downarrow^E-1$ 没有解析式（最大值分布依赖 8 阶贝塞尔滤波等硬件参数），只能用 Monte-Carlo 模拟数值获得。最终读出可见度严格满足因子化关系

$$
V^R=V^{STC}\times V^E,
$$

（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 68）。这一分解把读出问题切成"映射"和"获取+判决"两段，便于分别优化。

要使 $V^{STC}$ 最大值超过 99%，需要同时满足 $E_Z/T_e>13$、$T_1\cdot\Gamma_\uparrow^\mathrm{out}>100$、$\Gamma_s/\Gamma_\uparrow^\mathrm{in}>12$（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70）。$E_Z/T_e$ 这条最难：它要求电子温度足够低或外磁场足够大，对应硅自旋比特中 $1\ \mathrm{T}$ 磁场下驱动场频率约 $28\ \mathrm{GHz}$（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 34）。

### 泡利自旋阻塞读出

泡利自旋阻塞读出（Pauli spin blockade, PSB）利用双量子点 $(1,1)$–$(2,0)$（或 $(1,1)$–$(0,2)$）电荷跃迁线附近的能级结构区分自旋单态 $|S(1,1)\rangle$ 与三重态 $|T(1,1)\rangle$：在读取点，单态 $S(1,1)$ 可隧穿到 $S(2,0)$，而三重态由于泡利不相容原理无法落到 $S(2,0)$，只能到能量很高的 $T(2,0)$——"阻塞"。可读取的窗口等于左侧量子点内的轨道激发能，远大于电子的塞曼能，因此可在 $\sim 1\ \mathrm{K}$ 的较高温度下工作（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 34）。

PSB 的一个变体是[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]的初始化–读出链路，它在 $(1,1)$–$(2,0)$ 跃迁线附近通过"先阻塞再绝热返回 $(1,1)$"完成三步：先绝热进入 $(2,0)$ 区把单态赶过去，再绝热返回 $(1,1)$ 读出（[文献 6]([[sources/chen-baobao-2017]])，PDF pp. 39–41）。

[文献 6]([[sources/chen-baobao-2017]]) 还发现一种非阻塞区读出机制：把三重态 $T(1,3)$ 的弛豫路径引导到比单态少一个电子的中间亚稳态 $(0,3)$，从而把单态映射为 $(0,4)$、三重态映射为 $(0,3)$。因为 $(0,3)$–$(0,4)$ 的电荷差通过 QPC 传感后是 $(1,3)$–$(0,4)$ 的 1.6 倍，这种"信号放大"把读出信号增强到自旋阻塞方案的 2 倍左右（PDF pp. 70–73）。

### 速率方程方法（Monte-Carlo 拟合）

能量选择隧穿读出的完整模拟分三步（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 62–65）：

1. **GMM 拟合**：对所有原始信号做概率密度统计，得到两个高斯分布的混合；用二维[[#延伸阅读|GMM]]（Gaussian mixture model）指定峰数为 2，分离出高低电平的均值 $\mu_1,\mu_2$。
2. **速率方程拟合**：用 §"能量选择隧穿读出"中的 $P_0(t)$ 解析式拟合平均信号，提取隧穿速率 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out},\Gamma_\downarrow^\mathrm{in}$。
3. **Monte-Carlo 复现**：用拟合参数生成无噪声的高低电平信号，加白噪声，再经 8 阶贝塞尔低通滤波（$10\ \mathrm{kHz}$ 截止）模拟实验线路；对模拟信号在窗口 $t_r$ 内取最大值并与电压阈值 $x_t$ 比较，得到 $F_\uparrow,F_\downarrow,V^R$。

整个流程给出可见度 $V^R=F_\uparrow^R+F_\downarrow^R-1$，同时还可由实验数据最大值分布反推噪声 $\sigma_1,\sigma_2$。

### 读出可见度与测量概率的线性关联

[文献 15]([[sources/hu-ruizi-2022]]) 的关键观察是：在固定 $(t_r,x_t)$ 平面扫一圈，可以同时记录两个量——读出可见度 $V^R$（由上述模拟流程得到）和实际测量概率 $P_\uparrow^M$（由指数弛豫拟合幅值 $\rho$ 反推）。两者在 $(t_r,x_t)$ 二维相图上几乎重合，意味着测量概率与可见度之间存在线性关系

$$
P_\uparrow^M=P_\uparrow^I\cdot V^R+\alpha,
$$

其中 $\alpha$ 称为暗计数（dark count），来自基态电子被误判为激发态的尾部概率（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 71）。由此可以直接反推

$$
P_\uparrow^E=\frac{P_\uparrow^M-\alpha}{V^R},
$$

把阈值偏离最佳位置带来的偏差用 $V^R$ 的下降"修正"回去——这就是[[readout-measurement/threshold-independent-readout|阈值无关读出]]的核心思想。新方法将读取结果误差 $<1\%$ 的参数空间 $A_\mathrm{eff}$ 相对传统方法扩大约 60 倍（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 73）。

### 色散读出与超导体系

超导量子比特的单发读出通常采用[[readout-measurement/dispersive-readout|色散读出]]：比特与谐振腔失谐 $|\Delta|=|\omega_q-\omega_r|$ 远大于耦合 $g$ 时，腔频被比特态移动 $\pm\chi$（色散频移，$\chi=g^2/\Delta$）。在 [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]框架下，色散哈密顿量为

$$
H_\mathrm{disp}\approx\!\left(\omega_r+\frac{g^2}{\Delta}\sigma_z\right)\!a^\dagger a+\frac{1}{2}\!\left(\omega_q+\frac{g^2}{\Delta}\right)\!\sigma_z.
$$

测量算符与比特哈密顿量对易，因此多次测量给出相同结果——这是量子非破坏测量（QND）的理论依据，也是反馈控制的基础。

对六比特超导芯片的典型实验给出（[文献 14]([[sources/duan-peng-2022]])，PDF p. 119）：

| 比特 | SNR | $E_\mathrm{sep}$ (%) | 总 $E$ (%) | $E-E_\mathrm{sep}$ (%) |
|:--: |:--: |:--: |:--: |:--: |
| Q1 | 4.20 | 0.30 | 2.09 | 1.79 |
| Q2 | 3.91 | 0.57 | 2.59 | 2.02 |
| Q3 | 6.27 | 0.001 | 1.86 | 1.86 |
| Q4 | 4.04 | 0.43 | 3.15 | 2.72 |
| Q5 | 3.70 | 0.89 | 2.48 | 1.59 |
| Q6 | 3.01 | 3.33 | 4.95 | 1.62 |

Q3 的 $E_\mathrm{sep}$ 仅 $0.001\%$，几乎全部错误来自弛豫与串扰；Q6 的 SNR 较低，是因为其腔频落在[[readout-measurement/parametric-amplifier|阻抗匹配参量放大器（IMPA）]]增益边缘，态分离错误占总错误的 $67\%$。在 300–500 ns 读取时间下 $|0\rangle$ 态保真度最高 99.52%，$|1\rangle$ 态最高 97%（[文献 14]([[sources/duan-peng-2022]])，PDF p. 120）。

## 量子点中的映射

单自旋可通过能量选择隧穿实现"自旋向上会离开、向下保留"；两电子系统可用泡利自旋阻塞让单态和三重态进入不同电荷配置（[文献 6]([[sources/chen-baobao-2017]])，PDF pp. 39–41）。多电子区则可借助[[#泡利自旋阻塞读出|亚稳态电荷中继]]机制把单态和三重态映射到相差一个电子的电荷配置上，使读出信号放大（[文献 6]([[sources/chen-baobao-2017]])，PDF pp. 70–73）。

无论采用哪种映射方式，自旋–电荷转换后还需要把电荷跳变转换为电学信号：

- 紧邻的[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]或 SET 直接测量电导跳变；其缺点是直流方案带宽仅数十 kHz，无法追踪 μs 量级隧穿事件（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 40）。
- [[readout-measurement/rf-reflectometry|射频反射测量]]（RF-SET / RF-QPC）通过贴片电感 $L$ 与寄生电容 $C_p$ 组成谐振电路，把传感器的高电阻 $R$ 匹配到 $50\ \Omega$ 传输线，测量频率抬升到 $\sim 200\ \mathrm{MHz}$，带宽可达数 MHz；
- 半导体量子点与微波谐振腔耦合后，[[readout-measurement/gate-based-sensing|栅极射频传感]]或[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]直接把隧穿事件转换为腔频/相位变化，可在 ns 量级完成判决。

## 参数与量级

下面汇集几组被仓库 26 篇论文验证过的典型数值；除非另注，均指硅或 GaAs 门控量子点。

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 外磁场 $B_\mathrm{ext}$ | $1.5\ \mathrm{T}$（硅单自旋单发读出） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 电子温度 $T_e$ | $180.5\pm 8.1\ \mathrm{mK}$（稀释制冷机） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| $E_Z/T_e$ | $11.22$（限制 $V^{STC}$） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| $1/T_1$ | $112\pm 6\ \mathrm{s^{-1}}$（$T_1\approx 8.9\ \mathrm{ms}$） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 激发态跳出速率 $\Gamma_\uparrow^\mathrm{out}$ | $6.0\pm 0.1\ \mathrm{kHz}$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 基态跳出速率 $\Gamma_\downarrow^\mathrm{out}$ | $27\pm 2\ \mathrm{Hz}$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 回填速率 $\Gamma_\downarrow^\mathrm{in}$ | $1.39\pm 0.04\ \mathrm{kHz}$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 采集卡采样率 $\Gamma_s$ | $50\ \mathrm{kHz}$（8 阶贝塞尔低通 $10\ \mathrm{kHz}$） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 最佳时间窗口 $t_\mathrm{opt}^{STC}$ | $0.84\ \mathrm{ms}$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 最佳时间窗口 $t_\mathrm{opt}^R$ | $0.90\ \mathrm{ms}$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 71 |
| 最大 $V^{STC}$ | $97.15\%$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 最大 $V^R$ | $85.4\%$（同参数） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 64 |
| $T_1\cdot\Gamma_\uparrow^\mathrm{out}$ 判据 | $>100$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| $\Gamma_s/\Gamma_\uparrow^\mathrm{in}$ 判据 | $>12$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| PSB 窗口 | $\sim 1\ \mathrm{K}$（轨道激发，远大于塞曼能） | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 34 |
| PSB 增强机制放大倍数 | $2$（$(0,3)$–$(0,4)$ vs $(1,3)$–$(0,4)$） | [文献 6]([[sources/chen-baobao-2017]])，PDF p. 73 |
| $T_\mathrm{RO}$（$T(0,4)\to(0,3)$） | $1.1\ \mathrm{\mu s}$ | [文献 6]([[sources/chen-baobao-2017]])，PDF p. 70 |
| $T_\mathrm{RI}$（$(0,3)\to S(0,4)$） | $10\ \mathrm{\mu s}$ | [文献 6]([[sources/chen-baobao-2017]])，PDF p. 70 |
| 自旋阻塞弛豫 $T_1$ | $89\ \mathrm{\mu s}$ | [文献 6]([[sources/chen-baobao-2017]])，PDF p. 69 |
| 阈值无关 $A_\mathrm{eff}$ 提升 | $\times 60$ | [文献 15]([[sources/hu-ruizi-2022]])，PDF p. 73 |
| 超导六比特读取时间 | $300$–$500\ \mathrm{ns}$ | [文献 14]([[sources/duan-peng-2022]])，PDF pp. 7, 120 |
| 超导六比特最高保真度 | $98.14\%$ | [文献 14]([[sources/duan-peng-2022]])，PDF p. 7 |
| 表面码读取阈值 | $E_\mathrm{th}=0.01$，$\mathrm{SNR}_\mathrm{th}\simeq 3.97$，$\tau_\mathrm{th}=T_1/100$ | [文献 14]([[sources/duan-peng-2022]])，PDF p. 65 |
| 临界光子数条件 | $n_\mathrm{crit}=\alpha^2/(4g^2)\simeq \alpha/(4\chi)\gg 1$ | [文献 14]([[sources/duan-peng-2022]])，PDF p. 65 |
| IMPA 增益 | $>15\ \mathrm{dB}$，带宽 $>600\ \mathrm{MHz}$，噪声达量子极限 | [文献 14]([[sources/duan-peng-2022]])，PDF p. 120 |

## 实验特征

### E–L–R 三段脉冲序列

硅量子点单发读出的典型时间序列由三段方波组成（[文献 15]([[sources/hu-ruizi-2022]])，PDF pp. 34, 61）：

- **E（Empty，排空）**：将 RP 电极电压调到远离电荷跃迁线的位置，强制把量子点中电子排空到源漏；
- **L（Load，载入）**：在等待时间 $t_\mathrm{wait}$ 内把 RP 电压推到 (0,1) 区，把单个电子载入量子点，电子自旋方向随机；
- **R（Readout，读出）**：把 RP 电压调到自旋两个能级之间的输运线上，让激发态电子跳出、基态电子留下；通过紧邻的 SET 监测信号变化。

重复多次扫描 $t_\mathrm{wait}$ 即可得自旋激发态概率随等待时间的衰减曲线，用指数函数拟合 $P_\uparrow^M(t_\mathrm{wait})=\rho\cdot e^{-t_\mathrm{wait}/T_1}+\alpha$ 提取自旋弛豫时间 $T_1$。参数 $\rho=P_\uparrow^M(t_\mathrm{wait}\to 0)$ 是弛豫过程振幅，$\alpha$ 是暗计数。

<!-- FIGURE: E–L–R 三段脉冲波形与量子点能级示意；标注排空、载入、读出三个阶段的栅压位置 -->

### 多比特分类与抗串扰

多比特[[readout-measurement/readout-crosstalk|联合读出]]会把所有比特同时投影到一根数据总线上，每个比特对应一个独立的中频分量（文献 14，PDF pp. 125–127）。解调流程分三步：数字下变频（乘以 $\sin/\cos$）→ FIR 低通滤波 → 匹配滤波权重求平均。经典投影阈值法把 $I$–$Q$ 平面上的两个高斯圆斑向中心连线方向投影、选单一阈值；机器学习方法（KMeans, GMM, SVM, FNN）则用更多特征提升分类精度。

针对多比特之间的[[readout-measurement/readout-crosstalk|读取串扰]]，[文献 14]([[sources/duan-peng-2022]]) 提出基于浅层神经网络的态分类器（PDF pp. 134–137）：每比特两个隐藏层、ReLU 激活；网络与数据解调流程完全匹配，可在 FPGA 上实时部署。论文报告六比特联合读出在多个比特上的平均保真度都有提升（PDF p. 138）。

### 自旋–电荷转换与信号增强

在 GaAs 双量子点的 (1,3)–(0,4) 电荷跃迁附近，[文献 6]([[sources/chen-baobao-2017]]) 通过改变隧穿速率 $\Gamma_L,\Gamma_R$ 设计了"亚稳态中继"机制：单态 $S(1,3)$ 直接弛豫到 $S(0,4)$，三重态 $T(1,3)$ 先经 $T(0,4)$ 再隧穿到 $(0,3)$ 亚稳态。由于 $(0,3)$–$(0,4)$ 比 $(1,3)$–$(0,4)$ 电荷差大一倍，QPC 互导信号也相应放大；额外 $\pi$ 相移成为该机制的指纹特征（PDF pp. 70–73）。

### 失谐窗口与电子温度

能量选择隧穿读出要求读出窗口（塞曼能 $E_Z$）显著大于源漏费米面的热展宽 $k_\mathrm{B}T_e$。典型约束 $E_Z/T_e>13$ 直接决定需要的磁场强度或电子温度上限（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 70）。降低电子温度的常用手段包括低热导率线材（Lakshore SS1 微型同轴）、增加热沉和接触面积、在测量线路上加滤波器等。论文讨论了 $T_e=0.7\ \mathrm{K}$、$B_\mathrm{ext}=1.5\ \mathrm{T}$ 下进行单发读出的初步可行性（PDF p. 70）。

### 量子效率与 Purcell 约束

在超导色散读出中，量子效率 $\eta=\eta_\mathrm{col}\,\eta_\mathrm{amp}$ 由信号收集效率与放大器效率共同决定（[文献 14]([[sources/duan-peng-2022]])，PDF pp. 64–65）。色散耦合要求临界光子数 $n_\mathrm{crit}=\alpha^2/(4g^2)\simeq \alpha/(4\chi)\gg 1$，否则色散近似本身失效；而 $\kappa$ 与 $|\chi|$ 过大时，[[readout-measurement/purcell-filter|Purcell 效应]]会通过 $T_1^\mathrm{Purcell}\simeq \kappa\, g^2/(2\pi\alpha\chi)$ 限制比特寿命。设计参数最优化要求 $\mathrm{SNR}_\mathrm{th}\simeq 3.97$、$\tau_\mathrm{th}=T_1/100$，并通过 Purcell 滤波器、宽带 IMPA 来满足（[文献 14]([[sources/duan-peng-2022]])，PDF pp. 65–66）。

## 与其他概念的关系

- 自旋–电荷转换是单发读出的物理核心；转换机制分[[#能量选择隧穿读出|能量选择隧穿]]（窗口 ≈ 塞曼能）和[[#泡利自旋阻塞读出|泡利自旋阻塞]]（窗口 ≈ 轨道激发能）两类，前者受电子温度限制，后者可在较高温度下工作。
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]与单电子晶体管（SET）把隧穿事件转换为电导变化，是电荷读出最常用的紧邻传感器；其带宽限制（直流方案仅数十 kHz）由[[readout-measurement/rf-reflectometry|射频反射测量]]或[[readout-measurement/gate-based-sensing|栅极射频传感]]突破。
- 自旋量子比特的两类基本读出分别面向[[qubit-control/single-spin-qubit|单自旋量子比特]]与[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]；前者常配合能量选择隧穿，后者常配合泡利自旋阻塞。
- 单发读出的错误来源由 $V^R=V^{STC}\times V^E$（或 $E=E_\mathrm{init}+E_\mathrm{sep}+E_{T_1}$）严格分解；可见度下降的硬件根源可借助[[readout-measurement/purcell-filter|Purcell 滤波器]]、[[readout-measurement/parametric-amplifier|参量放大器]]或更低温电子温度来改善。
- 多比特联合读出引入[[readout-measurement/readout-crosstalk|读取串扰]]，需用浅层神经网络分类器（[文献 14]([[sources/duan-peng-2022]])，PDF pp. 134–137）或独立的[[readout-measurement/purcell-filter|Purcell 滤波器]]来抑制。
- 固定阈值对参数变化敏感时，可改用[[readout-measurement/threshold-independent-readout|阈值无关读出]]，把 $V^R$ 下降显式反推回 $P_\uparrow^I$，将 $|P_\uparrow^E/P_\uparrow^I-1|<1\%$ 的参数空间扩大约 60 倍（[文献 15]([[sources/hu-ruizi-2022]])，PDF p. 73）。
- 单发读出得到离散结果是量子纠错（如表面码，距离-3 需读取错误率 $<1\%$）和实时反馈控制的必要前提，也是测量[[materials-devices/charge-noise|电荷噪声]]和[[qubit-control/rabi-oscillation|Rabi 振荡]]等动力学过程时的基础工具。

## 延伸阅读

- J. M. Elzerman, R. Hanson, L. H. Willems van Beveren, B. Witkamp, L. M. K. Vandersypen, and L. P. Kouwenhoven, "Single-shot read-out of an individual electron spin in a quantum dot", *Nature* (2004). [DOI: 10.1038/nature03088]
- A. Morello, J. J. Pla, F. A. Zwanenburg, K. W. Chan, K. Y. Tan, H. Huebl, M. Möttönen, C. D. Nugroho, C. Yang, J. A. van Donkelaar, A. D. C. Alves, D. N. Jamieson, C. C. Escott, L. C. L. Hollenberg, R. G. Clark, and A. S. Dzurak, "Single-shot readout of an electron spin in silicon", *Nature* (2010). [DOI: 10.1038/nature09392]
- T. Walter, P. Kurpiers, S. Gasparinetti, P. Magnard, A. Potočnik, Y. Salathé, M. Pechal, M. Mondal, M. Oppliger, C. Eichler, and A. Wallraff, "Rapid high-fidelity single-shot dispersive readout of superconducting qubits", *Physical Review Applied* (2017). [DOI: 10.1103/PhysRevApplied.7.054020]
- X. Xue, M. Russ, N. Samkharadze, B. Undseth, A. Sammak, G. Scappucci, and L. M. K. Vandersypen, "Quantum logic with spin qubits crossing the surface code threshold", *Nature* (2022). [DOI: 10.1038/s41586-021-04273-w]
- "Threshold-independent method for single-shot readout of spin qubits in semiconductor quantum dots", *arXiv* (2022). [arXiv: 2206.03650]
- "Rapid single-shot parity spin readout in a silicon double quantum dot with fidelity exceeding 99%", *npj Quantum Information* (2023). [arXiv: 2309.00225]

## 论文依据

- [[sources/ref-15|文献 15]]，PDF p. 4：摘要指出硅量子点单自旋单发读出与高保真度读出和操控是核心目标。
- [[sources/ref-15|文献 15]]，PDF pp. 34–35：1.3.2–1.3.3 节系统阐述自旋–电荷转换两条主要路径——能量选择隧穿（Elzerman）与泡利自旋阻塞（PSB），给出窗口大小、温度适用范围的对比。
- [[sources/ref-15|文献 15]]，PDF pp. 59–65：第 3 章研究背景与单发读出信号处理流程（GMM 拟合、速率方程、Monte-Carlo 模拟、贝塞尔滤波），给出最大 $V^R=85.4\%$ 的实验值。
- [[sources/ref-15|文献 15]]，PDF pp. 66–68：3.3.3–3.3.6 节给出读出阶段的速率方程与转移矩阵 $Q$、$P_0(t)$ 解析解、自旋–电荷转换可见度 $V^{STC}$ 的解析式与最佳时间窗口，以及 $V^R=V^{STC}\times V^E$ 的因子化证明。
- [[sources/ref-15|文献 15]]，PDF pp. 70–73：3.4 节提出阈值无关单发读出方法——读取可见度与测量概率的线性关联 $P_\uparrow^M=P_\uparrow^I V^R+\alpha$、反推公式 $P_\uparrow^E=(P_\uparrow^M-\alpha)/V^R$、有效参数空间扩大 60 倍的定量结果；并给出 $E_Z/T_e>13$、$T_1\cdot\Gamma_\uparrow^\mathrm{out}>100$、$\Gamma_s/\Gamma_\uparrow^\mathrm{in}>12$ 三个高可见度条件，以及 $T_e=0.7\ \mathrm{K}$、$B_\mathrm{ext}=1.5\ \mathrm{T}$ 下的可行性论证。
- [[sources/ref-15|文献 15]]，PDF p. 70：参数表给出实测隧穿速率 $\Gamma_\uparrow^\mathrm{out}=6.0\pm 0.1\ \mathrm{kHz}$、$\Gamma_\downarrow^\mathrm{out}=27\pm 2\ \mathrm{Hz}$、$\Gamma_\downarrow^\mathrm{in}=1.39\pm 0.04\ \mathrm{kHz}$、$\Gamma_s=50\ \mathrm{kHz}$、$T_e=180.5\pm 8.1\ \mathrm{mK}$、$1/T_1=112\pm 6\ \mathrm{s^{-1}}$，最大 $V^{STC}=97.15\%$。
- [[sources/ref-06|文献 6]]，PDF p. 4：摘要阐述 GaAs 双量子点自旋阻塞读取自旋态的实验方案。
- [[sources/ref-06|文献 6]]，PDF pp. 39–41：奇数电子区自旋阻塞测量阶段，$S$–$T_0$ 子空间的 LZS 干涉与 PSB 读取，并给出"先阻塞再绝热返回"的三步脉冲序列。
- [[sources/ref-06|文献 6]]，PDF pp. 70–73：第 4 章"双量子点中自旋状态的增强读取"提出 (1,3)–(0,4) 区亚稳态中继机制，把三重态 $T(1,3)$ 引导到 $(0,3)$ 亚稳态，从而把 QPC 互导信号增强到自旋阻塞方案的约 2 倍；并提取 $T_\mathrm{RO}=1.1\ \mathrm{\mu s}$、$T_\mathrm{RI}=10\ \mathrm{\mu s}$、$T_1=89\ \mathrm{\mu s}$ 等特征时间。
- [[sources/ref-14|文献 14]]，PDF pp. 7–8：摘要指出在六比特超导芯片上实现约 300–500 ns、98.14% 保真度的多比特快速高保真度读取，并把"线路设计 + 放大器 + 串扰抑制"作为研究主线。
- [[sources/ref-14|文献 14]]，PDF pp. 62–63：给出高斯圆斑 SNR 定义 $|C_e-C_g|^2/(\sigma_g^2+\sigma_e^2)$ 以及态分离错误率 $E_\mathrm{sep}=\mathrm{erfc}(\sqrt{\mathrm{SNR}/2})$ 的精确推导。
- [[sources/ref-14|文献 14]]，PDF p. 65：给出 $E_{T_1}\simeq 1-e^{-\tau/(2T_1)}$、表面码阈值 $E_\mathrm{th}=0.01$、平均分配得到的 $\mathrm{SNR}_\mathrm{th}\simeq 3.97$ 与 $\tau_\mathrm{th}=T_1/100$ 的最优化设计准则。
- [[sources/ref-14|文献 14]]，PDF pp. 119–120：六比特联合读出表 4.1 给出 Q1–Q6 的 SNR、$E_\mathrm{sep}$、总错误率与剩余错误率；最高 $|0\rangle$ 态保真度 99.52%、$|1\rangle$ 态 97%。
- [[sources/ref-14|文献 14]]，PDF pp. 125–137：第 5 章基于浅层神经网络的态分类器（数字解调、低通滤波、匹配滤波、投影阈值），并把 SNND 应用于六比特联合读出串扰抑制。
- [[sources/ref-14|文献 14]]，PDF p. 120：IMPA 实现增益 $>15\ \mathrm{dB}$、带宽 $>600\ \mathrm{MHz}$、饱和功率 $\sim -110\ \mathrm{dBm}$、噪声温度达到量子极限，是六比特联合读出高保真度的关键硬件支撑。
