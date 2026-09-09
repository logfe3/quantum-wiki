---
title: 能量选择性读出
description: 通过把源漏费米面调到单电子塞曼两个能级之间，使激发态电子隧穿出、基态电子留下，从而把单自旋映射到电荷跳变。
aliases:
  - Elzerman 读出
  - 能选读出
  - energy-selective readout
  - 自旋选择性隧穿读出
  - spin-selective tunneling readout
tags:
  - 读出与测量
  - 自旋量子比特
  - 单发读出
date: 2026-09-08
---

<div class="entry-lead">能量选择性读出（energy-selective readout，Elzerman readout）通过把源漏费米面调到单电子塞曼两个能级之间，让激发态电子隧穿出量子点而基态电子留下，把单自旋映射为一次可被电荷传感器检测的电荷跳变。</div>

## 物理图像

在二维电子气或硅基 MOS 量子点中，最简单的一比特[[qubit-control/single-spin-qubit|单自旋量子比特]]编码在塞曼劈裂后的两个电子自旋态 $|\!\uparrow\rangle$（激发态）与 $|\!\downarrow\rangle$（基态）上，二者能量差为塞曼能 $E_Z = g\mu_B B$。直接测量自旋极难，但若让两个自旋态对应到不同的电荷占据，电荷跳变就可以被紧邻的[[readout-measurement/qpc-charge-sensor|QPC]]或单电子晶体管（SET）读取——这正是自旋–电荷转换的核心思想。

能量选择性读出的实现方式是：把源漏费米面调到 $|\!\uparrow\rangle$ 与 $|\!\downarrow\rangle$ 两个自旋能级之间。

- $|\!\uparrow\rangle$ 电子的电化学势 $\mu_\uparrow$ 高于源漏费米面 $E_F$，该电子被"能量允许"隧穿到源漏，把空位让出；
- $|\!\downarrow\rangle$ 电子的 $\mu_\downarrow$ 低于 $E_F$，无法隧穿，留在量子点中。

随后源漏以 $|\!\downarrow\rangle$ 速率回填一个低能电子，把量子点重新占据为基态。这一"激发态先出、基态后入"的单次事件，在传感器上产生一个特征的高电平脉冲（blip）；如果电子本来就处于 $|\!\downarrow\rangle$，信号一直保持低电平。两种轨迹一一对应，电子自旋被转换为可由阈值判定的电荷跳变（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 34；[楚凝 2025]([[sources/chu-ning-2025]])，PDF pp. 38–39）。

<!-- FIGURE: E–W–R 三段脉冲波形与量子点能级示意图：Empty（费米面高于两能级，量子点排空）→ Wait（费米面低于两能级，随机自旋电子载入）→ Readout（费米面介于两能级之间，↑ 跳出、↓ 留下） -->

读出窗口（readout window）由塞曼能 $E_Z$ 决定。窗口越宽，塞曼能级对热涨落越不敏感，但需要的驱动频率也越高：硅中 $g\approx 2$，$1\ \mathrm{T}$ 磁场对应的拉莫尔频率约 $28\ \mathrm{GHz}$（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 34）。这是[[qubit-control/single-spin-qubit|单自旋比特]]实验中微波驱动与读出窗口之间的"高频代价"。

## 与泡利自旋阻塞的对比

半导体自旋量子比特的[[readout-measurement/single-shot-readout|单发读出]]主要依赖两条自旋–电荷转换路径：

- **能量选择性读出**：把电子自旋映射到"是否跳出量子点"，读出窗口 = 塞曼能 $E_Z$；
- [[qubit-control/pauli-spin-blockade|泡利自旋阻塞]]（Pauli spin blockade，PSB）：把单态 $S$ 与三重态 $T$ 映射到双量子点不同电荷构型，读出窗口 = 单量子点内的单态–三重态能隙 $E_{ST}$。

两者的定量对比：

| 维度 | 能量选择性读出 | 泡利自旋阻塞读出 |
| --- | --- | --- |
| 适用比特 | 单自旋比特（Loss–DiVincenzo） | 单态–三重态比特、奇数电子区编码 |
| 读出窗口 | $E_Z = g\mu_B B$，数十至上百 $\mu$eV | $E_{ST}$，GaAs 数百 $\mu$eV，Si 可达 meV |
| 工作温度 | $T_e\ll E_Z/k_B$（典型 $<200$ mK） | $\sim 1$ K（窗口远大于 $k_BT_e$） |
| 是否需要源漏 | 必须保留源漏费米面 | 可隔离源漏（点内隧穿） |
| 典型读出时间 | $0.5$–$5$ ms | 微秒量级（点间隧穿） |
| 读出保真度（SiMOS） | $V^R\approx 85\%$（胡睿梓 2022） | $>99\%$（[王宁 2025]([[sources/wang-ning-2025]])，PDF p. 32） |

能量选择性读出的优势是原理最简单、对量子点结构要求最低；代价是依赖源漏费米面，因此读出保真度受电子温度限制。PSB 不依赖源漏，可达更高温度与更高保真度，目前是硅基多比特扩展的标准读出方案（[楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 127；[王宁 2025]([[sources/wang-ning-2025]])，PDF p. 95）。

## 理论模型

### 单电子塞曼哈密顿量

单电子在外磁场 $B$ 下的最低两个能级由[[fundamentals/electrochemical-potential|电化学势]]的塞曼分裂描述：

$$
\mu_\sigma = \mu_0 + \sigma\,E_Z/2,\qquad E_Z = g\mu_B B,\qquad \sigma=\pm 1\ (\text{对应}\ \uparrow,\downarrow).
$$

把费米面调到 $E_F\in(\mu_\downarrow,\mu_\uparrow)$，隧穿选择定则为：只有 $\mu_\uparrow>E_F$ 的电子能从量子点隧穿到源漏，隧穿速率为 $\Gamma_\uparrow^\mathrm{out}$。

### 速率方程模型

读出阶段的动力学涉及三个状态——"激发态未被排出" $P_\uparrow$、"基态未被排出" $P_\downarrow$、"量子点已被排出过" $P_0$——状态矢量 $\mathbf{P}=(P_\uparrow,P_\downarrow,P_0)^T$ 满足 $d\mathbf{P}/dt=Q\mathbf{P}$，转移矩阵为（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF pp. 66–67）：

$$
Q=\begin{pmatrix}
-W-\Gamma_\uparrow^\mathrm{out} & 0 & 0\\[2pt]
W & -\Gamma_\downarrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{in}\\[2pt]
\Gamma_\uparrow^\mathrm{out} & \Gamma_\downarrow^\mathrm{out} & -\Gamma_\downarrow^\mathrm{in}
\end{pmatrix},
$$

其中 $W=1/T_1$ 是自旋弛豫速率，$\Gamma_\uparrow^\mathrm{out}$ 与 $\Gamma_\downarrow^\mathrm{out}$ 分别是激发态、基态电子的隧穿出速率，$\Gamma_\downarrow^\mathrm{in}$ 是基态电子从源漏回填的速率。$Q$ 不含时，解为 $\mathbf{P}(t)=e^{Qt}\mathbf{P}(0)$。$t$ 时刻量子点已被排空的概率为

$$
P_0(t)=\frac{\Gamma_\downarrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{tot}}\!\left(1-e^{-t\Gamma_\downarrow^\mathrm{tot}}\right)
+P_\uparrow^I\,\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{tot}}
\!\left(e^{-t\Gamma_\downarrow^\mathrm{tot}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right),
$$

其中 $\Gamma_\downarrow^\mathrm{tot}=\Gamma_\downarrow^\mathrm{out}+\Gamma_\downarrow^\mathrm{in}$。第一项与 $P_\uparrow^I$ 无关，是基态电子来回隧穿构成的"本底鼓包"；第二项与 $P_\uparrow^I$ 成正比，是平均信号上"自旋鼓包"（spin bump）的来源，实验上把这条曲线拟合即可提取三个隧穿速率（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 66；[楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 39）。

### 自旋–电荷转换可见度

若只关心时间窗口 $t_r$ 内电子是否跳出过——即忽略回填通道（$\Gamma_\downarrow^\mathrm{in}=0$），自旋–电荷转换可见度的解析式为（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 66）

$$
V^{STC}(t)=F_\uparrow^{STC}(t)+F_\downarrow^{STC}(t)-1
=\frac{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}
\!\left(e^{-t\Gamma_\downarrow^\mathrm{out}}-e^{-t(W+\Gamma_\uparrow^\mathrm{out})}\right),
$$

最佳时间窗口取导数零点：

$$
t_\mathrm{opt}^{STC}=\frac{1}{W+\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}
\ln\frac{W+\Gamma_\uparrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{out}}
\;\xrightarrow{\;\Gamma_\uparrow^\mathrm{out}\gg W\;}\;
\frac{1}{\Gamma_\uparrow^\mathrm{out}-\Gamma_\downarrow^\mathrm{out}}\ln\frac{\Gamma_\uparrow^\mathrm{out}}{\Gamma_\downarrow^\mathrm{out}}.
$$

物理上这是一场赛跑：窗口太短激发态来不及跳出，太长基态也开始跳出，最优值由两隧穿速率之比的对数决定。

### 读出可见度的因子化

完整的读取可见度严格满足因子化关系（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 68）

$$
V^R = V^{STC}\times V^E,
$$

其中 $V^{STC}$ 是时间窗口选取决定的"映射"段，$V^E$ 是阈值选取决定的"获取+判决"段，$V^E$ 没有解析解，需要用 Monte-Carlo 方法模拟得到。分解后两段可分别优化：$V^{STC}$ 的最大值只与隧穿速率有关，$V^E$ 主要受传感器和放大链硬件（噪声、低通滤波）影响。

## 参数与量级

仓库 26 篇学位论文中报道的典型实测参数：

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 外磁场 $B_\mathrm{ext}$ | $1.5\ \mathrm{T}$（SiMOS，单发自旋） | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 电子温度 $T_e$ | $180.5\pm 8.1\ \mathrm{mK}$（稀释制冷机） | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 塞曼–温度比 $E_Z/(k_BT_e)$ | $11.22$（限制 $V^{STC}$） | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 自旋弛豫速率 $1/T_1$ | $112\pm 6\ \mathrm{s^{-1}}$（$T_1\approx 8.9$ ms） | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 激发态跳出速率 $\Gamma_\uparrow^\mathrm{out}$ | $6.0\pm 0.1\ \mathrm{kHz}$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 基态跳出速率 $\Gamma_\downarrow^\mathrm{out}$ | $27\pm 2\ \mathrm{Hz}$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 回填速率 $\Gamma_\downarrow^\mathrm{in}$ | $1.39\pm 0.04\ \mathrm{kHz}$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 采集卡采样率 $\Gamma_s$ | $50\ \mathrm{kHz}$（8 阶贝塞尔低通 $10\ \mathrm{kHz}$） | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| SET 电阻（$\uparrow$ / $\downarrow$） | $625\ \mathrm{k\Omega}$ / $500\ \mathrm{k\Omega}$（SiMOS） | [楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 127 |
| 寄生电容 $C_p$ | $0.2\ \mathrm{pF}$（SiMOS 仿真） | [楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 127 |
| 最佳时间窗口 $t_\mathrm{opt}^{STC}$ | $0.84\ \mathrm{ms}$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 最佳时间窗口 $t_\mathrm{opt}^R$ | $0.90\ \mathrm{ms}$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 最大 $V^{STC}$ | $97.15\%$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| 最大 $V^R$ | $85.4\%$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 64 |
| 阈值无关 $A_\mathrm{eff}$ 提升 | $\times 60$ | [胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70 |
| Elzerman 读出时间（Si/SiGe） | $\sim 5$ ms | [王宁 2025]([[sources/wang-ning-2025]])，PDF p. 111 |
| 单比特读出时间（两比特联合） | $28$ ms（$1000$ 次平均） | [楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 87 |

要让 $V^{STC}$ 最大值超过 $99\%$，需要同时满足三个条件（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70）：

$$
E_Z/(k_B T_e) > 13,\qquad T_1\cdot\Gamma_\uparrow^\mathrm{out} > 100,\qquad \Gamma_s/\Gamma_\downarrow^\mathrm{in} > 12.
$$

第一个条件最难满足——它要求电子温度足够低（$T_e< E_Z/13\,k_B$）或外磁场足够大，对应 $1\ \mathrm{T}$ 磁场下驱动场频率约 $28\ \mathrm{GHz}$（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 34）。在 SiMOS 样品中 150 mK 电子温度下自旋单发读出信号的可见度只有 $\sim 0.7$（[楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 143），是限制读出保真度的关键瓶颈。

## 实验特征

### E–W–R 三段脉冲序列

硅量子点单发读出的典型时间序列由三段方波组成（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 34；[楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 74）：

1. **E（Empty，排空）**：把 RP 电压调到远离电荷跃迁线的位置，强制把量子点电子排空到源漏；
2. **W（Load，载入）**：等待时间 $t_\mathrm{wait}$ 内把 RP 电压推到 $(0,1)$ 区，单个电子以随机自旋进入量子点；
3. **R（Readout，读出）**：RP 电压调到自旋两能级之间的输运线上，激发态电子跳出、基态电子留下，由紧邻 SET 监测。

把 $t_\mathrm{wait}$ 从短到长扫描，可以得到自旋激发态概率的指数衰减曲线 $P_\uparrow^M(t_\mathrm{wait})=\rho\,e^{-t_\mathrm{wait}/T_1}+\alpha$，振幅 $\rho$ 是初始激发态概率、暗计数 $\alpha$ 来自基态误判。

### 读出位置标定与 spin-bump

并非任意读出位置都能实现自旋选择性读出：电压太高时两自旋态都能跳出，电压太低时两自旋态都不跳出。标定方法（[楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 39）：用 E–W–R 序列固定 Empty/Load 电压而扫描 Readout 高度，再跟两个连续的 Load–Read 作为监视位（无论第一位读出结果如何，后面两位的电子状态必然回到 $|\!\downarrow\rangle$，因此监视位的"高电平比例" $>0.2$ 即说明暗计数过多，需重新标定）。合适的读出位置会出现 50:50 的高低电平分布，平均信号 $x(t)$ 呈"自旋鼓包"（spin bump）形状——这是 Elzerman 读出的指纹特征。

### 单发读出的速率方程拟合流程

完整模拟分三步（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 59）：

1. **GMM 拟合**：用二维高斯混合模型（Gaussian mixture model）拟合原始信号的概率密度分布，得到高低电平的均值 $\mu_1,\mu_2$；
2. **速率方程拟合**：用 $P_0(t)$ 解析式拟合平均信号，提取 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out},\Gamma_\downarrow^\mathrm{in}$；
3. **Monte-Carlo 复现**：用拟合参数生成无噪声的高低电平信号，加白噪声，经 8 阶贝塞尔低通滤波（$10\ \mathrm{kHz}$ 截止）模拟实验线路，对窗口 $t_r$ 内取最大值并与电压阈值 $x_t$ 比较，得到 $F_\uparrow,F_\downarrow,V^R$。

### 射频反射放大与 RF-SET

直流 SET 测量的带宽受直流线缆寄生电容与锁相积分时间限制，仅数十 kHz 量级（[韩天一 2017]([[sources/han-tianyi-2017]])，PDF p. 38），不足以追踪 Elzerman 读出中 $\sim\ \mathrm{ms}$ 量级的隧穿事件细节。把 SET 接入阻抗匹配谐振电路，以[[readout-measurement/rf-reflectometry|射频反射]]方式读出，构成 RF-SET，把带宽推到 MHz–百 MHz 量级，可逐次追踪单次隧穿事件。

硅基 SiMOS 中典型 RF-SET 设计：贴片电感 $L$ 与寄生电容 $C_p$ 组成谐振电路，把 SET 的高电阻（$R_\mathrm{SET}\sim 625\ \mathrm{k\Omega}$）匹配到 $50\ \Omega$ 传输线；通过劈裂栅极（split-gate）方法在累积栅极 AL1 上连接射频端口，把 $C_g$ 从"泄漏通道"转化为"耦合通道"，阻抗匹配的 $C_g$ 范围扩大到 $0.1$–$5\ \mathrm{pF}$（[楚凝 2025]([[sources/chu-ning-2025]])，PDF pp. 127–128）。

### 与泡利自旋阻塞的扩展联合

在 GaAs 双量子点的 (1,3)–(0,4) 区附近，陈宝宝等人发现一种非阻塞区读出机制：把三重态 $T(1,3)$ 的弛豫路径引导到比单态少一个电子的中间亚稳态 $(0,3)$，从而把单态映射为 $(0,4)$、三重态映射为 $(0,3)$。$(0,3)$–$(0,4)$ 的电荷差通过 QPC 传感后是 $(1,3)$–$(0,4)$ 的 1.6 倍，这种"信号放大"把读出信号增强到自旋阻塞方案的 2 倍左右（[陈宝宝 2017]([[sources/chen-baobao-2017]])，PDF pp. 66–73）。尽管这条机制仍以电荷占据作为媒介，但其核心思想——通过控制弛豫路径放大自旋–电荷转换效率——是能量选择性读出思想的多电子区推广。

### 多比特联合与读出时间代价

Elzerman 读出与自旋穿梭（spin-shuttle）结合可推广到两比特体系：右比特 $Q_R$ 不直接与源漏电子库耦合，而是先把电子隧穿到左比特 $Q_L$，再在 $Q_L$ 端与源漏费米面交换完成读出（[楚凝 2025]([[sources/chu-ning-2025]])，PDF pp. 86–87）。这种"左点代理"读出牺牲读出时间换取结构兼容性，整体单发读出时间约 28 ms（$1000$ 次平均）。

## 与其他概念的关系

- 自旋–电荷转换的两条主要路径——能量选择性读出与[[qubit-control/pauli-spin-blockade|泡利自旋阻塞]]——共享"把不可直接测量的自旋映射到电荷跳变"的核心思想，差别在窗口大小与适用比特类型。
- [[readout-measurement/single-shot-readout|单发读出的三环节]]（映射 → 获取 → 判决）中，能量选择性读出属于第一步"映射"环节；后续由[[readout-measurement/qpc-charge-sensor|QPC / SET]]获取、放大、分类。
- [[readout-measurement/threshold-independent-readout|阈值无关读出]]以能量选择性读出为载体，把可见度 $V^R$ 的下降显式反推回 $P_\uparrow^I$，把 $|P_\uparrow^E/P_\uparrow^I-1|<1\%$ 的参数空间扩大约 60 倍（[胡睿梓 2022]([[sources/hu-ruizi-2022]])，PDF p. 70）。
- [[readout-measurement/rf-reflectometry|射频反射测量]]与[[readout-measurement/gate-based-sensing|栅极射频传感]]是从直流 SET 出发、对 Elzerman 读出隧穿事件的硬件加速，把带宽推到 MHz 量级。
- [[readout-measurement/dispersive-readout|色散读出]]在超导量子比特中扮演类似角色——它也是把量子态映射到腔频/相位变化，是 Elzerman 思想在微波频段的延伸。
- [[materials-devices/charge-noise|电荷噪声]]通过调制势垒高度影响 $\Gamma_\uparrow^\mathrm{out},\Gamma_\downarrow^\mathrm{out}$，是限制能量选择性读出保真度的关键环境扰动。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]是能量选择性读出的天然载体；[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]与[[qubit-control/hole-spin-qubit|空穴自旋量子比特]]则更倾向 PSB 或色散读出。
- 在多电子编码与二维扩展的趋势下，Elzerman 读出逐渐被 PSB + RF-reflectometry 取代（[楚凝 2025]([[sources/chu-ning-2025]])，PDF p. 143；[王宁 2025]([[sources/wang-ning-2025]])，PDF p. 111），但在初始化、低温基准测量、远距离自旋搬运等场景仍是首选。

## 延伸阅读

- J. M. Elzerman, R. Hanson, L. H. Willems van Beveren, B. Witkamp, L. M. K. Vandersypen, and L. P. Kouwenhoven, "Single-shot read-out of an individual electron spin in a quantum dot", *Nature* (2004). [DOI: 10.1038/nature02693]
- A. Morello, J. J. Pla, F. A. Zwanenburg, K. W. Chan, K. Y. Tan, H. Huebl, M. Möttönen, C. D. Nugroho, C. Yang, J. A. van Donkelaar, A. D. C. Alves, D. N. Jamieson, C. C. Escott, L. C. L. Hollenberg, R. G. Clark, and A. S. Dzurak, "Single-shot readout of an electron spin in silicon", *Nature* (2010). [DOI: 10.1038/nature09392]
- R. Hanson, L. H. Willems van Beveren, I. T. Vink, J. M. Elzerman, W. J. M. Naber, F. H. L. Koppens, L. P. Kouwenhoven, and L. M. K. Vandersypen, "Single-shot readout of electron spin states in a quantum dot using spin-dependent tunnel rates", *Physical Review Letters* (2005). [DOI: 10.1103/PhysRevLett.94.196802]
- X. Xue, M. Russ, N. Samkharadze, B. Undseth, A. Sammak, G. Scappucci, and L. M. K. Vandersypen, "Quantum logic with spin qubits crossing the surface code threshold", *Nature* (2022). [DOI: 10.1038/s41586-021-04273-w]
- D. Keith, Y. Chung, L. Kranz, et al., "Ramped measurement technique for robust high-fidelity spin qubit readout", *Science Advances* (2022). [DOI: 10.1126/sciadv.abq0455]
- K. Takeda, A. Noiri, T. Nakajima, L. C. Conti, G. C. Tettamanzi, S. D. Oosterhout, F. A. Zwanenburg, "Rapid single-shot parity spin readout in a silicon double quantum dot with fidelity exceeding 99%", *npj Quantum Information* (2023). [arXiv: 2309.00225]
- C. H. Yang, R. C. C. Leon, J. C. C. Hwang, A. Saraiva, et al., "Approaching ideal visibility in singlet-triplet qubit operations using energy-selective tunneling-based Hamiltonian estimation", *Physical Review Letters* (2022). [DOI: 10.1103/PhysRevLett.129.040501]

## 论文依据

- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF p. 34：1.3.2–1.3.3 节系统阐述自旋–电荷转换两条主要路径——能量选择性隧穿（Elzerman）与泡利自旋阻塞（PSB），给出窗口大小、温度适用范围的对比；明确"主误差源是源漏费米面热展宽"。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 59–65：第 3 章研究背景与单发读出信号处理流程（GMM 拟合、速率方程、Monte-Carlo 模拟、贝塞尔滤波），给出最大 $V^R=85.4\%$ 的实验值。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 66–67：3.3.3–3.3.4 节给出读出阶段的速率方程与转移矩阵 $Q$、$P_0(t)$ 解析解、自旋–电荷转换可见度 $V^{STC}$ 的解析式与最佳时间窗口 $t_\mathrm{opt}^{STC}=0.84$ ms。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF p. 68：3.3.6 节严格推导 $V^R=V^{STC}\times V^E$ 的因子化关系，并由此得到 $V^E=V^R/V^{STC}$ 的解析反推。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF p. 70：参数表给出实测隧穿速率 $\Gamma_\uparrow^\mathrm{out}=6.0\pm 0.1$ kHz、$\Gamma_\downarrow^\mathrm{out}=27\pm 2$ Hz、$\Gamma_\downarrow^\mathrm{in}=1.39\pm 0.04$ kHz、$\Gamma_s=50$ kHz、$T_e=180.5\pm 8.1$ mK、$1/T_1=112\pm 6$ s$^{-1}$、最佳 $t_\mathrm{opt}^{STC}=0.84$ ms、最大 $V^{STC}=97.15\%$；并给出 $V^{STC}>99\%$ 的三个条件 $E_Z/T_e>13$、$T_1\cdot\Gamma_\uparrow^\mathrm{out}>100$、$\Gamma_s/\Gamma_\uparrow^\mathrm{in}>12$。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF p. 70：3.4 节阈值无关读出方法——读取可见度与测量概率的线性关联 $P_\uparrow^M=P_\uparrow^I V^R+\alpha$、反推公式 $P_\uparrow^E=(P_\uparrow^M-\alpha)/V^R$、有效参数空间扩大 60 倍的定量结果。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 38–39：2.2.1 节"Elzerman 读取"详细推导硅基体系中基于源漏电子交换的读出方案，给出图 2.1 中 Si-MOS 的电荷稳定图（排空、加载、读出三阶段圆点）与三种情况下的电化学势变化；并指出"后续实验中排空阶段可省去，因为读取后电子已初始化到 $|\!\downarrow\rangle$"。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 39：2.2.2 节自旋单发读出位置的标定方法——排空–加载–读取三级脉冲序列加两个连续监视位、扫描 Readout 高度的 spin-bump 特征、"自旋向上和自旋向下比例理论上是 50:50"。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 74：图 4.3(c) 测量方案示意图——在读出阶段（10 ms）执行能量选择性读出，$|\!\uparrow\rangle$ 电子隧穿到电子储存器并加载 $|\!\downarrow\rangle$ 电子完成初始化；$|\!\downarrow\rangle$ 电子不发生跃迁。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 86–87：5.2 节把单比特 Elzerman 读取与自旋穿梭技术结合推广到两比特体系——右比特 $Q_R$ 通过左比特 $Q_L$ 与源漏费米面进行电子交换；整体单发读出时间约 28 ms、$1000$ 次平均。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 127–128：6.3.2 节 RF-SET 结构设计与劈裂栅极方法仿真——SET 阻抗在自旋向上与自旋向下时分别为 $625\ \mathrm{k\Omega}$ 与 $500\ \mathrm{k\Omega}$，对应 RTS 高低电平；阻抗匹配 $C_g$ 范围 $0.1$–$5\ \mathrm{pF}$，远宽于欧姆方法的 $C_g=0$ 唯一值。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 143：7.2.1 节自旋比特读出的优化讨论——Elzerman 读出速率受 $\Gamma$ 限制、保真度受 150 mK 电子温度影响（可见度 $\sim 0.7$）；PSB 读出可在无电子库情况下进行、点间隧穿耦合 $t_c$ 通常远大于点–库隧穿速率 $\Gamma$、结合射频反射可达更快速度与更高保真度。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 32：1.3.2 节把能量选择性读出与 PSB 直接对比——Elzerman 依赖于源漏电子库、保真度容易受电子温度影响、需要线路滤波抑制热涨落；PSB 可在更高温度下工作、读出及初始化保真度可超过 $99\%$、自旋–电荷转换过程快（μs 量级）。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 95：6.2.1 节展望读出方法优化——本论文中 Elzerman 读出时间为 5 ms，远大于自旋比特操控时间；未来采用 PSB + 射频反射测量是国际上普遍采用的方案。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 66–73：第 4 章"双量子点中自旋状态的增强读取"提出 (1,3)–(0,4) 区亚稳态中继机制——把三重态 $T(1,3)$ 的弛豫路径引导到 $(0,3)$ 亚稳态，把单态映射为 $(0,4)$、三重态映射为 $(0,3)$，从而把 QPC 互导信号放大 2 倍；并提取 $T_\mathrm{RO}=1.1\ \mathrm{\mu s}$、$T_\mathrm{RI}=10\ \mathrm{\mu s}$、$T_1=89\ \mathrm{\mu s}$ 等特征时间。
- [[sources/han-tianyi-2017|韩天一 2017]]，PDF pp. 23, 62：参考文献与综述明确给出 Elzerman 等人 2004 年 GaAs 自旋单发读出的原始文献，并阐述 RF-QPC / RF-SET 是从直流 SET 出发提升带宽的工程方案。
