---
title: 阈值无关读出
description: 不依赖固定信号幅度阈值、而利用时间轨迹结构判定隧穿事件的单发读出方法。
aliases:
  - 无阈值单发读出
  - 阈值无关单发读出
tags:
  - 读出与测量
  - 信号处理
date: 2026-09-08
---

<div class="entry-lead">传统单发读出常画一条固定阈值线；当传感器基线漂移或不同循环的幅值变化时，这条线会失效。阈值无关方法改为寻找轨迹中的相对变化或事件形态。</div>

## 物理图像：从"画线判决"到"反推修正"

在能量选择读出（Elzerman 读出）中，源漏费米面被调到自旋向上、向下两个能级之间：只有激发态 $|\uparrow\rangle$ 电子能隧穿出量子点，随后一个 $|\downarrow\rangle$ 电子回填，电荷传感器（SET 或 QPC）电流因此出现一个特征性的"高电平脉冲"（blip）。传统的[[readout-measurement/single-shot-readout|单发读出]]判决方式是选取一个时间窗口 $t_r$ 和一个电压阈值 $x_t$：窗口内信号最大值超过 $x_t$ 判为激发态，否则判为基态。

这种"画线"方式有两个结构性弱点：

- **最佳点极窄**：读取可见度 $V^R$ 是 $(t_r, x_t)$ 的二维函数，其最大值只落在相图上一个很小的区域；阈值偏离最佳值毫伏量级，判决误差就明显增大。
- **硬件天花板**：想把 $V^R$ 继续推高，只能改造测量线路或更换样品（例如压低电子温度、提高传感器信噪比），这些手段各自有物理上限，且要中断在跑的实验。

阈值无关读出（threshold-independent readout）的出发点是：与其费力寻找并守住那个唯一的最佳 $(t_r, x_t)$，不如把"阈值选错"本身建模为读取可见度的下降，再利用读取可见度与测量概率之间的**线性关联**把偏差的概率反推回来。这样，几乎任意 $(t_r, x_t)$ 下采集的数据都能被修正到接近真值，判决对阈值的绝对位置不再敏感。

<!-- FIGURE: 能量选择读出三阶段脉冲（排空 E–载入 L–读出 R）示意与激发态"跳出—回填"特征轨迹，标注时间窗口 t_r 与电压阈值 x_t -->

## 理论模型

### 读出阶段的速率方程

读出阶段量子点有三个相关状态：电子处于 $|\uparrow\rangle$、处于 $|\downarrow\rangle$、点已排空（概率分别为 $P_\uparrow, P_\downarrow, P_0$）。设激发态、基态电子跳出量子点的速率为 $\Gamma_\uparrow^\mathrm{out}$、$\Gamma_\downarrow^\mathrm{out}$，基态电子从源漏回填的速率为 $\Gamma_\downarrow^\mathrm{in}$，自旋弛豫速率为 $W=1/T_1$。概率矢量 $\mathbf{P}=(P_\uparrow,P_\downarrow,P_0)^T$ 满足速率方程 $d\mathbf{P}/dt=Q\mathbf{P}$，转移矩阵

$$
Q=\begin{pmatrix}
-W-\Gamma_\uparrow^\mathrm{out} & 0 & 0\\
W & -\Gamma_\downarrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{in}\\
\Gamma_\uparrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{out} & -\Gamma_\downarrow^\mathrm{in}
\end{pmatrix}.
$$

$Q$ 不含时，因此解可直接写成矩阵指数 $\mathbf{P}(t)=\exp(Qt)\,\mathbf{P}(0)$，初态取 $\mathbf{P}(0)=(P_I^\uparrow,\,1-P_I^\uparrow,\,0)^T$，其中 $P_I^\uparrow$ 是读出开始时电子处于激发态的概率——这是整个读出想测的物理量。点排空的概率（即传感器出现高电平的概率）有解析式：

$$
P_0(t)=\frac{\Gamma_\downarrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{tot}}\left(1-e^{-t\Gamma_\downarrow^\mathrm{tot}}\right)
+P_I^\uparrow\,\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{tot}}
\left(e^{-t\Gamma_\downarrow^\mathrm{tot}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right),
$$

其中 $\Gamma_\downarrow^\mathrm{tot}=\Gamma_\downarrow^\mathrm{out}+\Gamma_\downarrow^\mathrm{in}$。第一项与 $P_I^\uparrow$ 无关，是基态电子来回隧穿构成的本底；含 $P_I^\uparrow$ 的第二项正是平均信号上"鼓包"的来源。把多次轨迹平均归一化后用此式拟合，即可提取三个隧穿速率（一般 $\Gamma_\uparrow^\mathrm{out}\gg W$，拟合时可忽略 $W$）。

### 三种可见度及其因子化

对阈值判决的每个环节可以分别定义保真度 $F_\uparrow, F_\downarrow$（某自旋态被正确判定的概率），并合成可见度 $V=F_\uparrow+F_\downarrow-1$。论文中区分了三层：

- **自旋–电荷转换可见度** $V^{STC}$：只考虑时间窗口 $t_r$——窗口内激发态电子是否跳出过、基态电子是否误跳出。因为只关心"是否跳出过"，可以去掉回填通道，用修改后的转移矩阵求出解析解：

```math
V^{STC}(t)=\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}
\left(e^{-t\Gamma_\downarrow^\mathrm{out}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right),
```

求极值点得最佳时间窗口

$$
t_\mathrm{opt}^{STC}=\frac{1}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}
\ln\frac{W+\Gamma_\uparrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{out}}
\;\xrightarrow{\;\Gamma_\uparrow^\mathrm{out}\gg W\;}\;
\frac{1}{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}\ln\frac{\Gamma_\uparrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{out}}.
$$

物理上这是一场赛跑：窗口太短激发态来不及跳出，太长基态也开始跳出，最优值由两个隧穿速率之比的对数决定。

- **电荷探测可见度** $V^E$：选定 $t_r$ 后，只考虑阈值 $x_t$ 对信号最大值分布的划分。设两态信号在窗口内最大值的概率密度为 $N_\uparrow(x)$、$N_\downarrow(x)$，则 $F_i=\int N_i(x)\,dx$（积分限分别为阈值的一侧）。由于最大值分布没有解析式，$V^E$ 只能靠 Monte-Carlo 模拟数值获得。
- **读取可见度** $V^R=F_\uparrow^R+F_\downarrow^R-1$：对 $(t_r, x_t)$ 两个参数的整体表征。把两阶段判决的正确/错误路径全部展开，可严格证明因子化关系

```math
V^R=V^{STC}\times V^E.
```

由于 $V^{STC}$ 与 $V^E$ 的最优点并不重合（$V^E$ 随窗口增大而下降），$V^R$ 的最佳窗口与 $t_\mathrm{opt}^{STC}$ 略有偏移。这一关系也提供了便捷算法：$V^E=V^R/V^{STC}$，不必单独模拟。

### 阈值无关的核心：线性关联与反推

设读出开始时激发态概率为 $P_I^\uparrow$。经过自旋–电荷转换，窗口内探测到隧穿事件的概率为

$$
P(t)=F_\uparrow^{STC}P_I^\uparrow+(1-F_\downarrow^{STC})(1-P_I^\uparrow);
$$

再经过阈值比较，最终测得的"激发态"概率为

$$
P_M^\uparrow=P(t)F_\uparrow^E+(1-P(t))(1-F_\downarrow^E)
=P_I^\uparrow\times V^{STC}V^E+(1-F_\downarrow^R)
=P_I^\uparrow\times V^R+\alpha,
$$

其中 $\alpha=1-F_\downarrow^R$ 是暗计数（dark count）本底。这就是阈值无关读出的基石：**测量概率 $P_M^\uparrow$ 对读取可见度 $V^R$ 严格线性，斜率恰是待测量 $P_I^\uparrow$**，而 $P_I^\uparrow$ 本身与读出参数无关。于是一旦用 Monte-Carlo 模拟算出工作点 $(t_r,x_t)$ 处的 $V^R$ 和 $\alpha$，就可以直接反推出去除读出误差后的期望概率

$$
P_E^\uparrow=\frac{P_M^\uparrow-\alpha}{V^R}.
$$

传统方法只在 $V^R$ 的最大点采信数据；阈值无关方法则允许在几乎整个参数平面上取值再修正——判据从"信号是否越过某条线"变成"该工作点的可见度是多少"，阈值本身从答案中消去。论文以 $|P_E^\uparrow/P_I^\uparrow-1|<1\%$ 的参数区域面积 $A_\mathrm{eff}$ 量化方法的有效性，阈值无关方法将 $A_\mathrm{eff}$ 扩大了约 60 倍。

## 参数提取与 Monte-Carlo 模拟

$V^R(t_r,x_t)$ 的相图需要知道每条轨迹最大值在两个态下的分布 $N_{\uparrow,\downarrow}(x)$，这无法用解析式表达，只能靠 Monte-Carlo 生成模拟轨迹：按隧穿速率逐采样点做均匀随机抽样决定电子是否跳出/回填，生成归一化隧穿信号，再按高低电平均值 $\mu_1,\mu_2$ 赋幅值、加入白噪声、并以数字滤波模拟测量链路的 8 阶贝塞尔低通（截止 10 kHz）。模拟所需的全部参数分三步从实验数据提取：

1. **高斯混合模型**（Gaussian mixture model, GMM）：把全部读出信号的概率密度分布分解为两个高斯峰，提取高低电平均值 $\mu_1,\mu_2$；
2. **速率方程拟合**：用上一节的 $P_0(t)$ 解析式拟合平均轨迹的鼓包，提取 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out},\Gamma_\downarrow^\mathrm{in}$；
3. **最大值分布拟合**：生成带噪声与滤波的模拟轨迹，统计每条轨迹最大值 $x_\mathrm{max}$ 的分布并与实验分布比较，拟合噪声幅度 $\sigma_1,\sigma_2$。

模拟与实验最大值分布的残差（拟合优度）在不同时间窗口下稳定在 0.98 附近，表明模型自洽。

## 参数与量级

以下数值取自硅量子点单自旋器件（四层重叠铝电极）在 $B_\mathrm{ext}=1.5\ \mathrm{T}$ 下的实测与模拟（文献 15，第 3 章）：

| 量 | 数值 | 说明 |
| --- | --- | --- |
| $\Gamma_\uparrow^\mathrm{out}$ | $6.0\pm0.1\ \mathrm{kHz}$ | 激发态跳出速率 |
| $\Gamma_\downarrow^\mathrm{out}$ | $27\pm2\ \mathrm{Hz}$ | 基态跳出速率（决定窗口上限） |
| $\Gamma_\downarrow^\mathrm{in}$ | $1.39\pm0.04\ \mathrm{kHz}$ | 基态回填速率 |
| 采样率 $\Gamma_s$ | $50\ \mathrm{kHz}$ | 采集卡 ATS-460 |
| $1/T_1$ | $112\pm6\ \mathrm{s^{-1}}$ | 自旋弛豫速率 |
| 电子温度 $T_e$ | $180.5\pm8.1\ \mathrm{mK}$ | $E_z/T_e=11.22$，略低于 13 的高可见度判据 |
| $t_\mathrm{opt}^{STC}$ | $0.84\ \mathrm{ms}$ | 对应 $V^{STC}=97.15\%$ |
| $V^R_\mathrm{max}$ | $85.4\%$ | 最佳 $(t_r,x_t)$ 处的读取可见度 |
| $A_\mathrm{eff}$ 提升 | $\times 60$ | 误差 $<1\%$ 的参数空间面积 |
| 高温边界 | $T_e=0.7\ \mathrm{K}$ @ $1.5\ \mathrm{T}$ | 超过此温度 $A_\mathrm{eff}$ 不再优于传统方法，此时 $V^R_\mathrm{max}\approx50\%$ |

要使 $V^{STC}$ 超过 99%，需同时满足 $E_z/T_e>13$、$T_1\Gamma_\uparrow^\mathrm{out}>100$、$\Gamma_s/\Gamma_\downarrow^\mathrm{in}>12$；该实验中后两条满足，瓶颈是 $E_z/T_e$，即电子温度偏高。

## 实验特征与适用范围

**误差来源。** 反推公式的准确性直接依赖模拟所得 $V^R$ 的准确性。数值计算中阈值需离散化成区间：用区间右边界计算时几乎所有参数都满足 $|P_E^\uparrow/P_I^\uparrow-1|<1\%$，而改用区间中点或左边界（阈值仅移动 $1\ \mathrm{mV}$）合格区域就迅速缩小。误差根源是模拟与实验最大值分布之间的微小错位：其**累积误差**的形状与最大值分布相似，在双峰之间的低谷处归零——因此最佳工作区恰落在双峰间的低谷附近，而非 $V^R$ 的最大点。错位误差的绝对值本身很小且特征不明显，难以在拟合中直接排除，这是方法的主要残余误差。

**电子温度边界。** 隧穿速率受费米–狄拉克占据因子调制：

$$
\Gamma_{\uparrow,\downarrow}^\mathrm{out}=[1-f(\epsilon\pm E_z/2,T_e)]\,\Gamma^\mathrm{out},\qquad
\Gamma_{\uparrow,\downarrow}^\mathrm{in}=f(\epsilon\pm E_z/2,T_e)\,\Gamma^\mathrm{in},
$$

其中 $\epsilon$ 是源漏费米面到两点能级中点的距离。由实测比值 $R_G=\Gamma_\uparrow^\mathrm{out}/\Gamma_\downarrow^\mathrm{out}$ 可反解

$$
\epsilon=-k_\mathrm{B}T_e\ln\frac{1-R_G}{R_G\,e^{-E_z/2k_\mathrm{B}T_e}-e^{E_z/2k_\mathrm{B}T_e}},
$$

进而求出裸速率 $\Gamma^\mathrm{out},\Gamma^\mathrm{in}$；假设它们与温度无关，即可外推任意 $T_e$ 下的读出表现。结论是：阈值无关方法的 $A_\mathrm{eff}$ 随温度升高而缩小，在 $B=1.5\ \mathrm{T}$ 下约 $0.7\ \mathrm{K}$ 处与传统方法持平——传统阈值法因 $E_z/T_e>13$ 的要求在 $100\ \mathrm{mK}$ 以上就难以工作，而阈值无关方法把可用的温度上限提高了近一个量级。作为参照，Si-MOS 实验中 $150\ \mathrm{mK}$ 的电子温度已把自旋单发读出可见度压到约 0.7，成为自旋–电荷转换保真度的主要瓶颈（文献 22）。

**适用边界。** 该框架针对"两态差异表现为一个时间隧穿事件"的能量选择读出；它不能修复映射阶段本身的缺陷——自旋弛豫 $W$ 和热激发已包含在速率方程中，会直接吃掉可见度。方法也不是"零超参数"：仍需标定隧穿速率、噪声、滤波响应，并选择离散化区间与合格误差标准。对于以静态电平差异为主的读出（如[[readout-measurement/rf-reflectometry|射频反射测量]]的双峰直方图），阈值判决本身已足够稳健；而在更高温区，基于泡利自旋阻塞的读出因可隔离电子库而更有优势。

## 与其他概念的关系

- 本方法是[[readout-measurement/single-shot-readout|单发读出]]在判决环节的一种实现：映射（自旋–电荷转换）与获取环节不变，只替换判决与后处理。
- 隧穿事件的物理基础是[[fundamentals/coulomb-blockade|库仑阻塞]]下电子数的逐个变化；读出点在[[fundamentals/charge-stability-diagram|电荷稳定图]]上的位置（源漏费米面夹在两自旋能级之间）决定了"只有激发态能跳出"的选择性。
- 电荷信号由邻近传感器拾取，如[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]或 SET；信号链的带宽与滤波（贝塞尔低通）进入 Monte-Carlo 模型，连接[[materials-devices/charge-noise|电荷噪声]]环境。
- 待测的 $P_I^\uparrow$ 通常来自[[qubit-control/single-spin-qubit|单自旋量子比特]]的 $T_1$ 弛豫曲线或门操作末态；修正后的 $P_E^\uparrow$ 直接改善这些实验的对比度。
- 更大规模的阈值/边界自动标定属于[[scaling-automation/automatic-tuning|自动调控]]与电荷态识别问题；阈值无关思想（用模型修正代替死守最佳工作点）与之一脉相承。

## 延伸阅读

- R.-Z. Hu et al., "Threshold-independent method for single-shot readout of spin qubits in semiconductor quantum dots" (2022). [arXiv:2206.03650]
- A. Morello et al., "Single-shot readout of an electron spin in silicon", *Nature* (2010). [DOI: 10.1038/nature09392]
- R. Hanson, L. P. Kouwenhoven, J. R. Petta, S. Tarucha, and L. M. K. Vandersypen, "Spins in few-electron quantum dots", *Reviews of Modern Physics* (2007). [DOI: 10.1103/RevModPhys.79.1217]

## 论文依据

- [[sources/ref-15|文献 15]]，PDF p. 62：读取可见度定义 $V^R=F_\uparrow^R+F_\downarrow^R-1$、保真度的阈值积分表达与 Monte-Carlo 模拟的必要性。
- [[sources/ref-15|文献 15]]，PDF pp. 63–64：高斯混合模型、速率方程拟合、最大值分布拟合三步参数提取流程，以及 8 阶贝塞尔低通的数字模拟。
- [[sources/ref-15|文献 15]]，PDF pp. 65–66：转移矩阵 $Q$、$\mathbf{P}(t)=\exp(Qt)\mathbf{P}(0)$ 与 $P_0(t)$ 解析式（式 3.3–3.4）。
- [[sources/ref-15|文献 15]]，PDF pp. 66–67：自旋–电荷转换可见度 $V^{STC}(t)$ 解析解与最佳时间窗口 $t_\mathrm{opt}^{STC}$ 公式（式 3.5–3.8）。
- [[sources/ref-15|文献 15]]，PDF p. 68：因子化关系 $V^R=V^{STC}\times V^E$ 的完整推导（式 3.10）。
- [[sources/ref-15|文献 15]]，PDF p. 70：高读取可见度条件 $E_z/T_e>13$、$T_1\Gamma_\uparrow^\mathrm{out}>100$、$\Gamma_s/\Gamma_\downarrow^\mathrm{in}>12$ 与全部实验参数（$\Gamma_\uparrow^\mathrm{out}=6.0\ \mathrm{kHz}$ 等）、$t_\mathrm{opt}^{STC}=0.84\ \mathrm{ms}$ 与 $V^{STC}=97.15\%$。
- [[sources/ref-15|文献 15]]，PDF p. 71：线性关联 $P_M^\uparrow=P_I^\uparrow\times V^R+\alpha$ 的推导（式 3.11–3.13）。
- [[sources/ref-15|文献 15]]，PDF p. 72：反推公式 $P_E^\uparrow=(P_M^\uparrow-\alpha)/V^R$（式 3.14）、最大值双峰分布低谷处误差最小、$A_\mathrm{eff}$ 提升 60 倍。
- [[sources/ref-15|文献 15]]，PDF p. 73：拟合误差分析——离散化区间边界选择（$1\ \mathrm{mV}$ 偏移）与累积误差在双峰间归零。
- [[sources/ref-15|文献 15]]，PDF pp. 74–75：费米–狄拉克调制的隧穿速率（式 3.15）、由 $R_G$ 反解 $\epsilon$（式 3.16）与 $0.7\ \mathrm{K}$ @ $1.5\ \mathrm{T}$ 的温度边界；本章小结。
- [[sources/ref-22|文献 22]]，PDF p. 38：Elzerman 读出原理——源漏费米面置于两自旋能级之间，要求费米面热展宽小于塞曼劈裂。
- [[sources/ref-22|文献 22]]，PDF p. 138：传统阈值法选取 $V_0$ 最大化电荷态读出保真度，$F_\mathrm{charge}=99.8\%$、$140\ \mathrm{ns}$ 积分下信噪比 5.72。
- [[sources/ref-22|文献 22]]，PDF p. 143：$150\ \mathrm{mK}$ 电子温度下自旋单发读出可见度仅约 0.7，成为读出保真度瓶颈；PSB 读出对高温工作的优势。
