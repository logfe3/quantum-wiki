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

1. **映射**：把自旋或逻辑态转换为不同电荷占据、隧穿事件或谐振腔响应。半导体量子点中最常见的两类是能量选择隧穿读出（Elzerman readout）与泡利自旋阻塞读出（Pauli spin blockade, PSB）。前者把塞曼能级差作为"读出窗口"，后者把单态–三重态能级差作为读出窗口，可达数十至上百 μeV。
2. **获取**：在状态弛豫前，用传感器和放大链积累足够信噪比。硅基量子点中传感器多为单电子晶体管（SET）或[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]，超导电路则用[[readout-measurement/dispersive-readout|色散读出]]配合参量放大器。把传感器和积分线路的传递函数推到底，对应一次积分的信噪比

```math
\mathrm{SNR}=\frac{|C_e-C_g|^2}{\sigma_g^2+\sigma_e^2}
```

其中 $C_{g,e}$ 是两个态对应的高斯圆斑中心在 $I$–$Q$ 平面上的坐标，$\sigma_{g,e}$ 是圆斑半径。当系统噪声与态无关、信号为高斯分布时，态分离错误率

$$
E_\mathrm{sep}=\mathrm{erfc}\!\left(\sqrt{\mathrm{SNR}/2}\right).
$$

3. **判决**：用阈值、模板匹配或分类器把时间轨迹映射为状态标签。最简单的方法是投影阈值法——把 $I$–$Q$ 数据沿两圆斑中心连线投影、选单一阈值；多比特联合读出时可用抗串扰分类器（如浅层神经网络）。判决后得到两个态各自的正确判定概率 $F_\uparrow,F_\downarrow$，合成可见度 $V^R=F_\uparrow+F_\downarrow-1$；硅自旋比特在 §"参数与量级"所列参数下可达 $V^R\approx 85.4\%$。

仅报告两个直方图的分离度（"信号良好"）会高估完整读出性能。完整读出保真度必须同时计入三类错误——初始化错误（init）、自旋–电荷转换/态分离错误（sep）、以及积分期间的 $T_1$ 弛豫错误（$E_{T_1}\simeq 1-e^{-\tau/(2T_1)}$）。在表面码阈值（$\approx 1\%$）约束下，错误率通常先平均分配给三类，对应的读取时间预算 $\tau_\mathrm{th}=T_1/100$、所需的最小信噪比 $\mathrm{SNR}_\mathrm{th}\simeq 3.97$。

<!-- FIGURE: 单发读出三环节流程图：状态映射 → 信号获取 → 判决分类 -->

## 理论模型

### 能量选择隧穿读出

能量选择隧穿读出（Elzerman readout）由 Elzerman 等人于 2004 年提出，是最经典的[[qubit-control/single-spin-qubit|单自旋量子比特]]单发读出方案。它将源漏费米面调到单电子自旋向上 $|\!\uparrow\rangle$ 与自旋向下 $|\!\downarrow\rangle$ 两个塞曼能级之间：只有激发态 $|\!\uparrow\rangle$ 电子能隧穿出量子点，随后一个 $|\!\downarrow\rangle$ 电子从源漏回填——电荷传感器上出现一个"高电平脉冲"（blip）；基态 $|\!\downarrow\rangle$ 电子则停留在量子点中，信号保持"低电平"。

读出阶段的隧穿过程用费米黄金定则给出的速率方程描述，状态矢量 $\mathbf{P}=(P_\uparrow,P_\downarrow,P_0)^T$ 满足 $d\mathbf{P}/dt=Q\mathbf{P}$，转移矩阵为

$$
Q=\begin{pmatrix}
-W-\Gamma_\uparrow^\mathrm{out} & 0 & 0\\
W & -\Gamma_\downarrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{in}\\
\Gamma_\uparrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{out} & -\Gamma_\downarrow^\mathrm{in}
\end{pmatrix}
$$

其中 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out}$ 是激发态、基态电子隧穿出量子点的速率，$\Gamma_\downarrow^\mathrm{in}$ 是基态电子回填速率，$W=1/T_1$ 是自旋弛豫速率。矩阵不含时，解可直接写成 $\mathbf{P}(t)=e^{Qt}\mathbf{P}(0)$。$t$ 时刻量子点被排空的概率为

$$
P_0(t)=\frac{\Gamma_\downarrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{tot}}\!\left(1-e^{-t\Gamma_\downarrow^\mathrm{tot}}\right)
+P_\uparrow^I\,\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{tot}}
\!\left(e^{-t\Gamma_\downarrow^\mathrm{tot}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right)
$$

其中 $\Gamma_\downarrow^\mathrm{tot}=\Gamma_\downarrow^\mathrm{out}+\Gamma_\downarrow^\mathrm{in}$，$P_\uparrow^I$ 是读取开始时电子处于激发态的概率。第一项与 $P_\uparrow^I$ 无关，是基态电子来回隧穿构成的"本底鼓包"；第二项与 $P_\uparrow^I$ 成正比，是平均信号上"鼓包"的来源。把多次轨迹归一化后用此式拟合即可提取三个隧穿速率。

若只关心窗口 $t_r$ 内电子"是否跳出过"——即忽略回填通道——则可令 $\Gamma_\downarrow^\mathrm{in}=0$，自旋–电荷转换可见度 $V^{STC}(t)=F_\uparrow^{STC}+F_\downarrow^{STC}-1$ 取得解析式：

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
V^R=V^{STC}\times V^E
$$

。这一分解把读出问题切成"映射"和"获取+判决"两段，便于分别优化。

要使 $V^{STC}$ 最大值超过 99%，需要同时满足 $E_Z/T_e>13$、$T_1\cdot\Gamma_\uparrow^\mathrm{out}>100$、$\Gamma_s/\Gamma_\uparrow^\mathrm{in}>12$。$E_Z/T_e$ 这条最难：它要求电子温度足够低或外磁场足够大，对应硅自旋比特中 $1\ \mathrm{T}$ 磁场下驱动场频率约 $28\ \mathrm{GHz}$。

### 泡利自旋阻塞读出

泡利自旋阻塞读出（Pauli spin blockade, PSB）利用双量子点 $(1,1)$–$(2,0)$（或 $(1,1)$–$(0,2)$）电荷跃迁线附近的能级结构区分自旋单态 $|S(1,1)\rangle$ 与三重态 $|T(1,1)\rangle$：在读取点，单态 $S(1,1)$ 可隧穿到 $S(2,0)$，而三重态由于泡利不相容原理无法落到 $S(2,0)$，只能到能量很高的 $T(2,0)$——"阻塞"。可读取的窗口等于左侧量子点内的轨道激发能，远大于电子的塞曼能，因此可在 $\sim 1\ \mathrm{K}$ 的较高温度下工作。

PSB 的一个变体是[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]的初始化–读出链路，它在 $(1,1)$–$(2,0)$ 跃迁线附近通过"先阻塞再绝热返回 $(1,1)$"完成三步：先绝热进入 $(2,0)$ 区把单态赶过去，再绝热返回 $(1,1)$ 读出。

还发现一种非阻塞区读出机制：把三重态 $T(1,3)$ 的弛豫路径引导到比单态少一个电子的中间亚稳态 $(0,3)$，从而把单态映射为 $(0,4)$、三重态映射为 $(0,3)$。因为 $(0,3)$–$(0,4)$ 的电荷差通过 QPC 传感后是 $(1,3)$–$(0,4)$ 的 1.6 倍，这种"信号放大"把读出信号增强到自旋阻塞方案的 2 倍左右。

### 速率方程方法（Monte-Carlo 拟合）

能量选择隧穿读出的完整模拟分三步：

1. **GMM 拟合**：对所有原始信号做概率密度统计，得到两个高斯分布的混合；用二维GMM（Gaussian mixture model）指定峰数为 2，分离出高低电平的均值 $\mu_1,\mu_2$。
2. **速率方程拟合**：用 §"能量选择隧穿读出"中的 $P_0(t)$ 解析式拟合平均信号，提取隧穿速率 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out},\Gamma_\downarrow^\mathrm{in}$。
3. **Monte-Carlo 复现**：用拟合参数生成无噪声的高低电平信号，加白噪声，再经 8 阶贝塞尔低通滤波（$10\ \mathrm{kHz}$ 截止）模拟实验线路；对模拟信号在窗口 $t_r$ 内取最大值并与电压阈值 $x_t$ 比较，得到 $F_\uparrow,F_\downarrow,V^R$。

整个流程给出可见度 $V^R=F_\uparrow^R+F_\downarrow^R-1$，同时还可由实验数据最大值分布反推噪声 $\sigma_1,\sigma_2$。

### 读出可见度与测量概率的线性关联

的关键观察是：在固定 $(t_r,x_t)$ 平面扫一圈，可以同时记录两个量——读出可见度 $V^R$（由上述模拟流程得到）和实际测量概率 $P_\uparrow^M$（由指数弛豫拟合幅值 $\rho$ 反推）。两者在 $(t_r,x_t)$ 二维相图上几乎重合，意味着测量概率与可见度之间存在线性关系

$$
P_\uparrow^M=P_\uparrow^I\cdot V^R+\alpha
$$

其中 $\alpha$ 称为暗计数（dark count），来自基态电子被误判为激发态的尾部概率。由此可以直接反推

$$
P_\uparrow^E=\frac{P_\uparrow^M-\alpha}{V^R}
$$

把阈值偏离最佳位置带来的偏差用 $V^R$ 的下降"修正"回去——这就是[[readout-measurement/threshold-independent-readout|阈值无关读出]]的核心思想。新方法将读取结果误差 $<1\%$ 的参数空间 $A_\mathrm{eff}$ 相对传统方法扩大约 60 倍。

## 量子点中的映射

单自旋可通过能量选择隧穿实现"自旋向上会离开、向下保留"；两电子系统可用泡利自旋阻塞让单态和三重态进入不同电荷配置。多电子区则可借助泡利自旋阻塞读出|亚稳态电荷中继机制把单态和三重态映射到相差一个电子的电荷配置上，使读出信号放大。

无论采用哪种映射方式，自旋–电荷转换后还需要把电荷跳变转换为电学信号：

- 紧邻的[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]或 SET 直接测量电导跳变；其缺点是直流方案带宽仅数十 kHz，无法追踪 μs 量级隧穿事件。
- [[readout-measurement/rf-reflectometry|射频反射测量]]（RF-SET / RF-QPC）通过贴片电感 $L$ 与寄生电容 $C_p$ 组成谐振电路，把传感器的高电阻 $R$ 匹配到 $50\ \Omega$ 传输线，测量频率抬升到 $\sim 200\ \mathrm{MHz}$，带宽可达数 MHz；
- 半导体量子点与微波谐振腔耦合后，[[readout-measurement/gate-based-sensing|栅极射频传感]]或[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]直接把隧穿事件转换为腔频/相位变化，可在 ns 量级完成判决。

## 参数与量级

下面汇集几组被仓库 26 篇论文验证过的典型数值；除非另注，均指硅或 GaAs 门控量子点。

| 量                                            | 典型值                                                                                  | 来源  |
| --------------------------------------------- | --------------------------------------------------------------------------------------- | ----- |
| 外磁场 $B_\mathrm{ext}$                       | $1.5\ \mathrm{T}$（硅单自旋单发读出）                                                   |       |
| 电子温度 $T_e$                                | $180.5\pm 8.1\ \mathrm{mK}$（稀释制冷机）                                               |       |
| $E_Z/T_e$                                     | $11.22$（限制 $V^{STC}$）                                                               |       |
| $1/T_1$                                       | $112\pm 6\ \mathrm{s^{-1}}$（$T_1\approx 8.9\ \mathrm{ms}$）                            |       |
| 激发态跳出速率 $\Gamma_\uparrow^\mathrm{out}$ | $6.0\pm 0.1\ \mathrm{kHz}$                                                              |       |
| 基态跳出速率 $\Gamma_\downarrow^\mathrm{out}$ | $27\pm 2\ \mathrm{Hz}$                                                                  |       |
| 回填速率 $\Gamma_\downarrow^\mathrm{in}$      | $1.39\pm 0.04\ \mathrm{kHz}$                                                            |       |
| 采集卡采样率 $\Gamma_s$                       | $50\ \mathrm{kHz}$（8 阶贝塞尔低通 $10\ \mathrm{kHz}$）                                 |       |
| 最佳时间窗口 $t_\mathrm{opt}^{STC}$           | $0.84\ \mathrm{ms}$                                                                     |       |
| 最佳时间窗口 $t_\mathrm{opt}^R$               | $0.90\ \mathrm{ms}$                                                                     |       |
| 最大 $V^{STC}$                                | $97.15\%$                                                                               |       |
| 最大 $V^R$                                    | $85.4\%$（同参数）                                                                      |       |
| $T_1\cdot\Gamma_\uparrow^\mathrm{out}$ 判据   | $>100$                                                                                  |       |
| $\Gamma_s/\Gamma_\uparrow^\mathrm{in}$ 判据   | $>12$                                                                                   |       |
| PSB 窗口                                      | $\sim 1\ \mathrm{K}$（轨道激发，远大于塞曼能）                                          |       |
| PSB 增强机制放大倍数                          | $2$（$(0,3)$–$(0,4)$ vs $(1,3)$–$(0,4)$）                                               |       |
| $T_\mathrm{RO}$（$T(0,4)\to(0,3)$）           | $1.1\ \mathrm{\mu s}$                                                                   |       |
| $T_\mathrm{RI}$（$(0,3)\to S(0,4)$）          | $10\ \mathrm{\mu s}$                                                                    |       |
| 自旋阻塞弛豫 $T_1$                            | $89\ \mathrm{\mu s}$                                                                    |       |
| 阈值无关 $A_\mathrm{eff}$ 提升                | $\times 60$                                                                             |       |
| 超导六比特读取时间                            | $300$–$500\ \mathrm{ns}$                                                                | , 120 |
| 超导六比特最高保真度                          | $98.14\%$                                                                               |       |
| 表面码读取阈值                                | $E_\mathrm{th}=0.01$，$\mathrm{SNR}_\mathrm{th}\simeq 3.97$，$\tau_\mathrm{th}=T_1/100$ |       |
| 临界光子数条件                                | $n_\mathrm{crit}=\alpha^2/(4g^2)\simeq \alpha/(4\chi)\gg 1$                             |       |
| IMPA 增益                                     | $>15\ \mathrm{dB}$，带宽 $>600\ \mathrm{MHz}$，噪声达量子极限                           |       |

## 实验特征

### 多比特分类与抗串扰

多比特联合读出会把所有比特同时投影到一根数据总线上，每个比特对应一个独立的中频分量。解调流程分三步：数字下变频（乘以 $\sin/\cos$）→ FIR 低通滤波 → 匹配滤波权重求平均。经典投影阈值法把 $I$–$Q$ 平面上的两个高斯圆斑向中心连线方向投影、选单一阈值；机器学习方法（KMeans, GMM, SVM, FNN）则用更多特征提升分类精度。

针对多比特之间的读取串扰，有工作提出基于浅层神经网络的态分类器：每比特两个隐藏层、ReLU 激活；网络与数据解调流程完全匹配，可在 FPGA 上实时部署。论文报告六比特联合读出在多个比特上的平均保真度都有提升。

### 自旋–电荷转换与信号增强

在 GaAs 双量子点的 (1,3)–(0,4) 电荷跃迁附近， 通过改变隧穿速率 $\Gamma_L,\Gamma_R$ 设计了"亚稳态中继"机制：单态 $S(1,3)$ 直接弛豫到 $S(0,4)$，三重态 $T(1,3)$ 先经 $T(0,4)$ 再隧穿到 $(0,3)$ 亚稳态。由于 $(0,3)$–$(0,4)$ 比 $(1,3)$–$(0,4)$ 电荷差大一倍，QPC 互导信号也相应放大；额外 $\pi$ 相移成为该机制的指纹特征。

### 失谐窗口与电子温度

能量选择隧穿读出要求读出窗口（塞曼能 $E_Z$）显著大于源漏费米面的热展宽 $k_\mathrm{B}T_e$。典型约束 $E_Z/T_e>13$ 直接决定需要的磁场强度或电子温度上限。降低电子温度的常用手段包括低热导率线材（Lakshore SS1 微型同轴）、增加热沉和接触面积、在测量线路上加滤波器等。论文讨论了 $T_e=0.7\ \mathrm{K}$、$B_\mathrm{ext}=1.5\ \mathrm{T}$ 下进行单发读出的初步可行性。

### 量子效率与 Purcell 约束

在超导色散读出中，量子效率 $\eta=\eta_\mathrm{col}\,\eta_\mathrm{amp}$ 由信号收集效率与放大器效率共同决定。色散耦合要求临界光子数 $n_\mathrm{crit}=\alpha^2/(4g^2)\simeq \alpha/(4\chi)\gg 1$，否则色散近似本身失效；而 $\kappa$ 与 $|\chi|$ 过大时，Purcell 效应会通过 $T_1^\mathrm{Purcell}\simeq \kappa\, g^2/(2\pi\alpha\chi)$ 限制比特寿命。设计参数最优化要求 $\mathrm{SNR}_\mathrm{th}\simeq 3.97$、$\tau_\mathrm{th}=T_1/100$，并通过 Purcell 滤波器、宽带 IMPA 来满足。

## 与其他概念的关系

- 自旋–电荷转换是单发读出的物理核心；转换机制分能量选择隧穿读出|能量选择隧穿（窗口 ≈ 塞曼能）和泡利自旋阻塞读出|泡利自旋阻塞（窗口 ≈ 轨道激发能）两类，前者受电子温度限制，后者可在较高温度下工作。
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]与单电子晶体管（SET）把隧穿事件转换为电导变化，是电荷读出最常用的紧邻传感器；其带宽限制（直流方案仅数十 kHz）由[[readout-measurement/rf-reflectometry|射频反射测量]]或[[readout-measurement/gate-based-sensing|栅极射频传感]]突破。
- 自旋量子比特的两类基本读出分别面向[[qubit-control/single-spin-qubit|单自旋量子比特]]与[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]；前者常配合能量选择隧穿，后者常配合泡利自旋阻塞。
- 单发读出的错误来源由 $V^R=V^{STC}\times V^E$（或 $E=E_\mathrm{init}+E_\mathrm{sep}+E_{T_1}$）严格分解；可见度下降的硬件根源可借助Purcell 滤波器、参量放大器或更低温电子温度来改善。
- 多比特联合读出引入读取串扰，需用浅层神经网络分类器或独立的Purcell 滤波器来抑制。
- 固定阈值对参数变化敏感时，可改用[[readout-measurement/threshold-independent-readout|阈值无关读出]]，把 $V^R$ 下降显式反推回 $P_\uparrow^I$，将 $|P_\uparrow^E/P_\uparrow^I-1|<1\%$ 的参数空间扩大约 60 倍。
- 单发读出得到离散结果是量子纠错（如表面码，距离-3 需读取错误率 $<1\%$）和实时反馈控制的必要前提，也是测量[[materials-devices/charge-noise|电荷噪声]]和[[qubit-control/rabi-oscillation|Rabi 振荡]]等动力学过程时的基础工具。硅平台上谷劈裂会压缩读出窗口或干扰自旋选择性隧穿——共振隧穿读出架构的分析表明小谷区（$E_\mathrm{VS}<\Delta_z$）电流非线性反而有利，且两种谷区都保有 $t_\mathrm{dec}/t_\mathrm{meas}>100$（误差 <1%）的工作区，见[[fundamentals/valley-splitting|谷劈裂]]词条的共振隧穿读出一节。

## 参考文献

- 自旋单发读出的两条里程碑：能量选择读出 [[references/elzerman-2004|Elzerman et al., Nature 430, 431 (2004)]] 与硅施主自旋读出 [[references/morello-2010|Morello et al., Nature 467, 687 (2010)]]。

> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
