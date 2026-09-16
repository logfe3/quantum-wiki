---
title: 单电子晶体管
description: 用库仑岛与两侧隧穿势垒构成的高灵敏度电荷传感器；岛电荷改变一个 e 即可触发 SET 电流的周期性振荡。
aliases:
 - SET
 - 库仑岛静电计
 - SET 电荷计
 - 单电子隧穿晶体管
 - single-electron transistor
tags:
 - 读出与测量
 - 电荷传感
 - 库仑阻塞
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m237d20vvdnh4y7bht18tg0s
source_updated: 2026-09-09T16:03:04Z
---

<div class="entry-lead">单电子晶体管（single-electron transistor, SET）的核心是一只库仑岛：岛电荷改变一个电子，岛源漏电流便被周期性调制，岛外的静电计由此获得单 e 量级的灵敏度。</div>

## 物理图像

单电子晶体管本质上是一个由两个隧穿结串联、把一个极小的导电岛夹在源、漏极之间的[[fundamentals/coulomb-blockade|库仑阻塞]]器件。岛与外界的总电容

$$
C_\Sigma=C_S+C_D+C_G
$$

通常只有几 aF 到几百 aF，于是充电能（charging energy）

$$
E_C=\frac{e^2}{C_\Sigma}
$$

典型地达到 1 meV 量级），远高于稀释制冷机里的电子温度 $k_BT$，因此单电子隧穿被严格限制在一个一个地进行。

在[[fundamentals/constant-interaction-model|常相互作用模型]]（CI 模型）下，含 $N$ 个电子的岛总能量为

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_\mathrm{SD}+C_G V_G\right]^2}{2 C_\Sigma}+\sum_{n=1}^{N}E_n(B)
$$

其中 $V_\mathrm{SD}$、$V_G$ 分别为源漏偏压和栅压）。第 $N$ 个电子进入岛所需的最小能量即电化学势：

$$
\mu(N)=U(N)-U(N-1)=\left(N-N_0-\tfrac{1}{2}\right)E_C-\frac{1}{|e|}\left(C_S V_\mathrm{SD}+C_G V_G\right)+E_N.
$$

把岛电荷 $Q=-N|e|$ 与栅电容耦合 $C_G V_G$ 视为对岛电势的连续调节，SET 表现出两套独立可调的电压自由度：$V_G$ 平移 $\mu(N)$、$V_\mathrm{SD}$ 撑开"偏压窗口"。在 $(V_G, V_\mathrm{SD})$ 平面上扫描，源漏电流呈现规则的菱形图样——[[fundamentals/coulomb-diamond|库仑菱形]]：菱形内是[[fundamentals/coulomb-blockade|库仑阻塞]]区（电流为零，电子数恒定），菱形外才有非零电流。

<!-- FIGURE: SET 器件的等效电路图：导电岛（库仑岛）由两个隧穿结（C_S,R_S 与 C_D,R_D）与源、漏相连，由电容 C_G 与栅极耦合；标注 CΣ、C_G 与电子温度条件 R≫h/e²、e²/CΣ≫k_BT -->

## SET 作为邻位电荷传感器

SET 作为传感器的核心思想是：把被测量子点的电荷变化通过电容耦合到 SET 岛上，岛电势随之微调，SET 源漏电流 $I_\mathrm{SET}$ 出现台阶式跳变；跳变次数与幅度与被测点电荷改变一一对应）。

被测点与 SET 岛之间的互电容 $C_\mathrm{c}$ 与 SET 岛总电容 $C_\Sigma$ 之比定义了"杠杆臂"

$$
\alpha_\mathrm{c}=\frac{C_\mathrm{c}}{C_\Sigma}
$$

$\alpha_\mathrm{c}$ 越大，被测点一个电子所引起的 SET 岛电势改变越大，电流跳变越容易被分辨。这是 SET 与[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]共享的设计原则：传感器与被测点之间必须**仅电容耦合**而**不直接隧穿耦合**，传感器本身有自己的源漏引线。

SET 与[[readout-measurement/qpc-charge-sensor|QPC]] 的对比决定了它们的实验分工：

| 维度 | SET（库仑岛） | QPC（窄通道） |
| --- | --- | --- |
| 探测信号 | $I_\mathrm{SET}$ 库仑振荡峰 | 通道电导 $G_\mathrm{QPC}$ |
| 灵敏度 | $\sim 10^{-6}\,e/\sqrt{\mathrm{Hz}}$ 量级（RF-SET） | $\sim 10^{-4}\,e/\sqrt{\mathrm{Hz}}$ 量级（RF-QPC） |
| 带宽 | 直流带宽极低（数十 kHz），RF-SET 可达 $\sim 100$ MHz | 直流几十 kHz，RF-QPC 可达 $\sim 10$ MHz |
| 工艺难度 | 复杂（双隧穿结纳米尺度） | 较简单（与被测点同时加工） |
| 适用场景 | 超导电荷量子比特读出（早期） | 半导体量子点邻位电荷传感（主流） |

总结道："单电子晶体管的探测带宽与探测灵敏度非常好，但是制作工艺比较复杂（Lu et al., 2003），而量子点接触或者量子点电荷探测器往往比较容易在量子点加工时同步制作完成，所以在实际试验中，我们往往采用后两种方式。"这一句概括了半导体量子点实验中 SET 早期盛行、QPC 后期占主导的工艺脉络。

## 全石墨烯集成：一次刻蚀的 QD+SET 电荷传感

传统 SET 电荷计多为金属岛（Al/AlOₓ/Al 隧道结）工艺；Wang 等人 2010 年演示了**同材料、单步工艺**的替代路线：在单层石墨烯上用电子束光刻加氧等离子体刻蚀，一次定义出直径 90 nm 的量子点和直径 180 nm 的 SET 库仑岛，二者间距仅 50 nm（传统半导体 QD+QPC 方案的典型间距约 100 nm）。间距压缩直接增大点–传感器互电容，石墨烯量子点上每加入一个电子，SET 电导出现约 30% 的台阶式变化：

$$
\frac{\Delta G_\mathrm{SET}}{G_\mathrm{SET}}\approx 30\%\ \text{每单电子（50 nm 集成间距）}
$$

其中 $\Delta G_\mathrm{SET}$ 是被测点电荷改变 $1e$ 引起的 SET 电导变化、$G_\mathrm{SET}$ 是工作点电导。这么大的相对响应正是强电容耦合的收益，可用于时间分辨电荷测量或电荷/自旋比特读出。

![[assets/figures/single-electron-transistor/wang2010-fig1-graphene-qd-set-sem.jpg]]
*器件扫描电镜图：上方为直径 90 nm 的石墨烯量子点（主器件），下方为直径 180 nm 的 SET 库仑岛（电荷传感器），二者在一次刻蚀中成型、边缘间距 50 nm；亮线为势垒与侧栅，标尺 200 nm。图源：Wang et al. (2010), Fig. 1(a)。*

**锁相跨导读出。** 直流背景大时，可在侧栅上叠加方波调制脉冲，用与脉冲同步的锁相放大器直接测 SET 跨导 $dI_\mathrm{SET}/dV_{sg}$：量子点单电子充放电表现为跨导曲线上的尖锐尖峰/凹陷。该方式最重要的价值在于**直测电流失效区仍可工作**——石墨烯量子点在侧栅 0.2–0.5 V 区间输运电流小到常规手段测不到，而 SET 跨导信号依然清晰，与直接输运的库仑振荡峰完美对齐。

![[assets/figures/single-electron-transistor/wang2010-fig2-charge-detection.jpg]]
*同一侧栅扫下的三联图：(a) 量子点电导 $G_\mathrm{QD}$ 的库仑振荡；(b) SET 电导出现与之一一对应的台阶（约占总信号 30%）；(c) SET 跨导 $dI_\mathrm{SET}/dV_{sg}$ 的尖峰/凹陷，在 (a) 中无信号的 0.2–0.5 V 区间仍给出完整电荷态信息；红色虚线为对齐引导线，三幅图同一次扫描同步记录。图源：Wang et al. (2010), Fig. 2。*

**带宽与灵敏度。** 以调制脉冲频率扫描 SET 跨导增益，−3 dB（0.707）点给出器件带宽约 600 Hz——受杂散电容限制，高频响应迅速下降。电荷灵敏度用标准折算法标定：在 SET 背栅上施加相当于 $5\times10^{-2}$ 个电子的信号、测到信噪比为 1 的响应，即

$$
\delta q=\frac{5\times 10^{-2}\ e}{\sqrt{\Delta f}}\bigg|_{\mathrm{SNR}=1}\;\Rightarrow\; \delta q\approx 1\times 10^{-3}\ e/\sqrt{\mathrm{Hz}}
$$

其中 $\Delta f$ 为测量带宽、$e$ 为元电荷。这一水平与此前 GaAs 量子点 + 超导 Al SET 系统的灵敏度相当，而石墨烯 SET 工艺更简单可靠、且能在液氦温度以上工作。

**探测激发态谱。** 在源漏偏压–侧栅平面上，SET 跨导信号复现出量子点的库仑菱形，且菱形边旁平行线的激发态谱线在探测器信号中比直接输运测量更清晰——高偏压下多个激发能级参与隧穿的细节因此可读。这对获取[[fundamentals/coulomb-diamond|库仑菱形]]之外的量子点能级信息（进而推断电子自旋态）至关重要。

![[assets/figures/single-electron-transistor/wang2010-fig4b-set-detected-diamonds.jpg]]
*SET 跨导信号 $dI_\mathrm{SET}/dV_{sd}$–$V_{sg}$ 平面上的库仑菱形：与量子点直测菱形完全匹配，菱形边外多条平行线对应量子点激发态参与隧穿；这些谱线在探测器通道中比直接输运更醒目。图源：Wang et al. (2010), Fig. 4(b)。*

石墨烯平台的物理动机在于其弱自旋轨道耦合与近乎消失的超精细相互作用（^{12}C 核自旋为零）——这正是[[materials-devices/bilayer-graphene-quantum-dot|石墨烯量子点]]走向"无核自旋量子世界"固态比特的出发点，而 QD+SET 同材集成是其中的读出基本单元。

## 直流 SET 的输出曲线

直流偏置下 SET 的源漏电流随栅压呈周期性"库仑振荡"——每经历一次 $\mu(N)$ 与源漏费米面对齐，就有一个共振隧穿峰。峰间距由 $C_G$ 决定：

$$
\Delta V_G = \frac{e}{C_G}
$$

而峰高则由 $V_\mathrm{SD}$ 决定：在低偏压极限 $eV_\mathrm{SD}\ll E_C$ 下，库仑振荡峰值电流

$$
I_\mathrm{peak}\approx \frac{e}{2 C_\Sigma}\,\frac{V_\mathrm{SD}}{R_T},\qquad R_T=R_S+R_D
$$

被两个隧穿结的串联电阻 $R_T$ 限制。一旦 $eV_\mathrm{SD}>E_C$（偏压窗口打开到能容纳两个相邻 $\mu(N)$），电流峰展宽为"库仑台阶"，相邻 $\mu(N)$ 同时贡献隧穿，$I$–$V_G$ 曲线进入饱和区。

把 SET 工作点选在库仑振荡峰的斜率最大处（峰侧），任何外部静电势微扰都会引起 $I_\mathrm{SET}$ 的大幅度变化，这正是 SET 作为静电计的"线性工作区"。工作点同样存在漂移问题：栅压、温度、磁场和被测点的局域电荷环境都会缓慢推移库仑振荡的位置，导致灵敏度下降，需要周期性重新标定。

<!-- FIGURE: 直流 SET 的源漏电流随栅压的库仑振荡曲线：周期性电流峰，峰间距 ΔV_G = e/C_G；标注最佳传感工作点（峰侧斜率最大处） -->

## 射频 SET：从直流瓶颈到 100 MHz 带宽

直流 SET 的带宽被两个 RC 通道限制：岛-源、岛-漏两个隧穿结的串联电阻 $R_T$ 与外接引线的寄生电容 $C_p$ 构成低通滤波器

$$
f_\mathrm{RC}=\frac{1}{2\pi R_T C_p}\sim 10\ \mathrm{kHz}\ \text{量级}
$$

这与 QPC 的传统测量带宽处于同一数量级）。1998 年 Schoelkopf 等人把 SET 与一个阻抗匹配谐振电路耦合，以射频反射方式读出岛电流变化，构成的 RF-SET 把带宽推到 100 MHz 量级，同时保留了 SET 的超高电荷灵敏度）。

### 等效电路与谐振频率

射频 SET 的等效电路与 RF-QPC 同构：把 SET 视为一个电阻 $R_\mathrm{SET}$（在库仑峰侧取工作点时通常为数十 kΩ 到几百 kΩ 量级）与两个隧穿结电容之和的串联，再与一个外部电感 $L$、寄生电容 $C_p$ 组成谐振子

$$
f_R=\frac{1}{2\pi\sqrt{L\,C_\Sigma+C_p}}.
$$

阻抗

$$
Z(\omega)=j\omega L+\frac{R_\mathrm{SET}\,(1-j\omega R_\mathrm{SET} C_\Sigma)}{1+\omega^2 R_\mathrm{SET}^2 C_\Sigma^2}
$$

谐振条件 $\mathrm{Im}\,Z=0$ 给出与 RF-QPC 相同的

$$
f_R\approx\frac{1}{2\pi\sqrt{L\,(C_\Sigma+C_p)}}
$$

。当 $R_\mathrm{eff}=L/(R_\mathrm{SET}\,(C_\Sigma+C_p))>Z_0$（特征阻抗 $Z_0=50\ \Omega$）时电路工作在欠耦合区，带宽由 SET 电阻决定；反之进入过耦合区，带宽由 $Z_0$ 决定。RF-SET 一般工作在过耦合区。

### 灵敏度

设 SET 岛电荷受外部以调制频率 $\omega_m$ 在工作点附近作小幅变化 $\Delta Q$，反射信号在载波两侧出现一对边带，幅度比与反射系数变化 $\Delta\Gamma$ 挂钩。电导灵敏度

$$
\delta G_\mathrm{SET}=\frac{1}{\sqrt{2}}\,\Delta G_\mathrm{SET}\cdot 10^{-\mathrm{SNR}/20}\,\Delta f^{-1/2}
$$

除以杠杆臂系数 $\Delta G_\mathrm{SET}/\Delta q$ 即得电荷灵敏度

$$
\delta q=\frac{\delta G_\mathrm{SET}}{\Delta G_\mathrm{SET}/\Delta q}
$$

其中 $\Delta f$ 是频谱仪分辨率带宽）。$1/\sqrt{2}$ 因子来源于只解调上边带、下边带丢弃。Schoelkopf 1998 年首次报告的 RF-SET 在 $L=620$ nH、$C_p=0.37$ pF 下给出 $f_0=332$ MHz、带宽 7 MHz、电荷灵敏度高达 $3.2\times 10^{-6}\,e/\sqrt{\mathrm{Hz}}$。

### 多路复用

RF-SET 同样适用波分复用（wavelength division multiplexing, WDM）：多个 SET 由不同的 LC 谐振频率区分，共用一根射频同轴线输入载波、输出反射信号，每个 SET 由 IQ 混频器独立解调。2002 年 Stevenson 等人报告了 RF-SET 阵列的多路复用实现。

<!-- FIGURE: RF-SET 测量电路示意图：射频源经定向耦合器、低温衰减器进入样品盒；SET 与电感 L、寄生电容构成谐振电路；反射信号经环形器、低温放大器、室温放大器后由 IQ 混频器解调 -->

### 传输式 RF-SET：免定向耦合器的读出（Fattal 2025）

反射式 RF-SET 的链路离不开定向耦合器（或双环形器）分离入射/反射——多通道扩展时这是可观的硬件开销。Fattal 等人（IMEC）演示了**传输式**替代：Si/SiGe 平台上与双量子点单片集成的 SET，经键合线接到**超导 Nb 螺旋电感**构成阻抗变换网络，载波经耦合电容穿过谐振器、透射信号直接检测——

$$
\text{载波} \to \text{耦合电容} \to \underbrace{L_\mathrm{Nb}\ \text{+ SET}}_{\text{阻抗变换谐振器}} \to \text{透射输出}
$$

无需任何定向耦合器件，装置显著简化，且天然适合频分复用。开启过程的三分区分析（总电容效应 $C_T$、RF 损耗 $R_\mathrm{Loss}$、SET 电阻 $R_\mathrm{SET}$ 随全局开启的演化）给出阻抗网络与器件设计的优化依据。读出基准用双量子点的两类电荷跃迁标定：IQ 平面上两高斯斑的信噪比

$$
\mathrm{SNR} = \frac{|\mu_1-\mu_2|}{\tfrac12(\sigma_1+\sigma_2)}
$$

（$\mu_i$、$\sigma_i$ 为两斑均值与标准差）。短积分区 $\mathrm{SNR}\propto t^{1/2}$（白噪声主导）、长积分区饱和（1/f 噪声）；**SNR=1 的最小积分时间做到 0.1–1 μs 量级**（点间跃迁 ICT 优于点–库跃迁 DRT，差异直接反映两类跃迁的电偶极矩大小），与最先进的反射式 RF-SET 相当。谐振器在**面内 0.5 T 磁场**下性能不受影响——兼容自旋比特的工作磁场。

![[assets/figures/single-electron-transistor/fattal2025-fig1-transmission-rf-set-circuit.jpg]]

*传输式 RF-SET 电路：PCB 上的共面波导经表面贴装耦合电容连接 Si/SiGe 芯片——单片集成的 SET（邻近双量子点）经键合线接到超导 Nb 螺旋电感构成阻抗变换谐振器，透射信号直接检测，无需定向耦合器。图源：Fattal et al. (2025), Fig. 1。*

![[assets/figures/single-electron-transistor/fattal2025-fig5-turnon-regions.jpg]]

*RF-SET 开启过程的三分区：总电容效应 C_T、RF 损耗 R_Loss 与 SET 电阻 R_SET 随全局开启电压的演化——分区行为是阻抗变换网络与器件设计的优化依据。图源：Fattal et al. (2025), Fig. 5。*

![[assets/figures/single-electron-transistor/fattal2025-fig6-snr-benchmark.jpg]]

*读出基准：(a)(b) 用传输式 RF-SET 监测的单点电荷稳定图（积分 1 ms）；(c)(d) 沿路径跨越点间跃迁（ICT）与点–库跃迁（DRT）的 IQ 分布——高斯斑对给出 SNR 随积分时间的标度，SNR=1 最小积分时间达 0.1–1 μs 量级，与反射式方案相当。图源：Fattal et al. (2025), Fig. 6。*

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 岛总电容 $C_\Sigma$ | 几 aF—几百 aF（纳米尺度金属岛或半导体岛） | |
| 充电能 $E_C=e^2/C_\Sigma$ | 约 1 meV 量级 | ； |
| 栅电容 $C_G$ 对应 $\Delta V_G$ | 单峰间距 $\Delta V_G=e/C_G$（典型 $\Delta V_G\sim$ 几 mV—几十 mV） | |
| 隧穿电阻 $R_T$ | $R_T\gg h/e^2$（库仑阻塞条件） | |
| 直流 SET 库仑振荡峰间距 | $\Delta V_G=e/C_G$ | |
| 直流工作点电流 | $I_\mathrm{peak}\approx e V_\mathrm{SD}/(2 C_\Sigma R_T)$ | |
| 直流带宽 | 数十 kHz 量级（受 $R_T C_p$ 限制） | ； |
| RF-SET 谐振频率 | 332 MHz（Schoelkopf，$L=620$ nH、$C_p=0.37$ pF） | |
| RF-SET 带宽 | 7–24 MHz 量级 | |
| RF-SET 电荷灵敏度 | $3.2\times 10^{-6}\,e/\sqrt{\mathrm{Hz}}$（Schoelkopf 1998）；$2.4\times 10^{-5}\,e/\sqrt{\mathrm{Hz}}$（Wei Lu） | |
| 石墨烯集成 SET 电荷灵敏度 | $1\times 10^{-3}\,e/\sqrt{\mathrm{Hz}}$（Wang 2010，$5\times10^{-2}e$ 信号 SNR=1 折算） | |
| 石墨烯集成 SET 带宽 | 约 600 Hz（−3 dB，杂散电容限制） | |
| 石墨烯集成单电子响应 | $\Delta G_\mathrm{SET}/G_\mathrm{SET}\approx 30\%$（QD–SET 间距 50 nm） | |
| 射频功率 | $-90$ dBm 量级（折中灵敏度与反作用） | |
| 传输式 RF-SET（Si/SiGe） | SNR=1 最小积分 0.1–1 μs（ICT 优于 DRT）；免定向耦合器；面内 0.5 T 磁场兼容 | Fattal 2025 |

## 实验特征与典型应用

**逐个数电子。** SET 的库仑振荡峰间距 $\Delta V_G=e/C_G$ 是绝对标尺，扫描栅压时每经历一个峰，岛电荷增加/减少一个电子。利用这一点可以精确数出岛上的电子数，是少电子量子点实验的标准初始化手段之一）。

**自旋–电荷转换。** SET 本身只测电荷，要读自旋需要先把自旋态映射到电荷分布。最常见的机制是[[readout-measurement/single-shot-readout|单发读出]]中的泡利自旋阻塞：在双量子点中 $(1,1)\to(0,2)$ 单态隧穿被允许、三态被禁止，隧穿后电荷态不同，再由 SET 或 QPC 读取。早期实验即采用 SET 完成单发自旋读出。

**电荷噪声谱学。** 即使在库仑阻塞区（直流电流为零），SET 工作点处 $I_\mathrm{SET}$ 仍受局域电荷涨落调制，因此 SET 也是测量[[materials-devices/charge-noise|电荷噪声]]的工具。RF-SET 把这种能力扩展到 MHz 量级，可以研究更宽频段的电荷涨落。

**快速相图采集。** 把 RF-SET 与快速锯齿波扫描结合，可在数十秒内完成传统方法数十分钟的相图采集，测量速度提升约两个量级。

**超导电荷量子比特的早期读出。** 在电路量子电动力学（circuit-QED）发展起来之前，超导量子比特的读出主要依靠 SET 或 DC-SQUID。但这两种读取方式与量子比特的强耦合导致相干时间较短、反作用影响显著，难以做到非破坏性测量。2004 年 Blais 等人提出 circuit-QED 后，SET 在超导比特读出中的角色被谐振腔色散读出取代。

<!-- FIGURE: 双量子点被 SET 与 QPC 同时探测的器件俯视图：双点居中、SET 在一侧、QPC 在另一侧，分别由独立的源漏电极和栅极定义 -->

## 局限与替代方案

- **工艺复杂**：SET 要求两个串联隧穿结、岛尺寸在数十 nm 量级，金属岛 SET 通常依赖电子束光刻与阴影蒸发的精确套刻，半导体 SET 则依赖栅极定义的静电岛；加工难度高于 QPC。
- **工作点漂移**：随栅压、温度、磁场变化，库仑振荡位置会漂移出灵敏区，需要周期性重新标定。
- **直流带宽极低**：受 $R_T C_p$ 限制，直流 SET 仅数十 kHz 量级。
- **射频反作用**：过高的射频功率会向岛注入散粒噪声与热激发，破坏被测态，需要折中灵敏度与反作用）。此外，传感库仑耦合本身的量子反作用（which-path 退相干）与功率反作用是两个独立通道——量子点型传感器的退相干能标由被测系统隧穿展宽 ħΓ 设定，与 QPC 型（k_BT）不同，见[[readout-measurement/charge-sensor-backaction|电荷传感反作用与 which-path 退相干]]。
- **替代方案**：在半导体量子点体系中已被[[readout-measurement/qpc-charge-sensor|QPC]]取代主流地位；栅极色散读出（[[readout-measurement/gate-based-sensingate-based sensing]]）和[[readout-measurement/dispersive-readout|色散读出]]则在多比特共用射频线场景下提供了另一种非破坏性电荷传感路径。

## 与其他概念的关系

- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]本身就是 SET 岛的物理实现：被两侧隧穿势垒夹住的栅控岛既可以作为被测的量子比特，也可以改装为邻位 SET 传感器。
- [[fundamentals/coulomb-blockade|库仑阻塞]]是 SET 工作的物理基础：只有充电能大于热涨落、隧穿电阻大于电阻量子时，单电子隧穿才会以单 e 步骤严格发生。
- [[fundamentals/constant-interaction-model|常相互作用模型]]给出 SET 静电学的全部定量结果：电化学势 $\mu(N)$、充电能 $E_C$、库仑振荡峰间距 $\Delta V_G=e/C_G$。
- [[fundamentals/electrochemical-potential|电化学势]]对齐条件决定 SET 何时发生隧穿，进而决定 $I_\mathrm{SET}$ 何时出现电流峰。
- [[fundamentals/charge-stability-diagram|电荷稳定图]]是 SET 扫描得到的主要图样：在 $(V_G, V_\mathrm{SD})$ 平面上的库仑菱形是 SET 与单量子点共有的特征。
- [[fundamentals/tunnel-coupling|隧穿耦合]]决定 SET 工作电流大小：隧穿电阻 $R_T$ 越大、单 e 隧穿越严格，但峰值电流也越小。
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]是 SET 的主要替代方案：两者都是邻位电容耦合的电荷传感，但 QPC 工艺简单、与被测点同时加工，因此在半导体量子点实验中取代 SET 成为主流。
- [[readout-measurement/rf-reflectometry|射频反射测量]]是把 SET 的直流带宽从 kHz 推到 100 MHz 的关键技术，RF-SET 与 RF-QPC 共用同一套阻抗匹配与 IQ 解调框架。
- [[readout-measurement/dispersive-readout|色散读出]]通过把电荷态映射为谐振腔频率/相位偏移实现非破坏性传感，与 SET 同样支持单发读出，但作用机制是色散频移而非源漏电流调制。
- [[readout-measurement/single-shot-readout|单发读出]]在 SET 出现之前主要依赖 SET（早期超导比特实验），在 SET 出现后则更多依赖 QPC、栅极传感或色散读出。
- [[materials-devices/charge-noise|电荷噪声]]既是 SET 主要噪声来源（限制灵敏度）也是 SET 可以测量的对象：工作点处 $I_\mathrm{SET}$ 的低频 $1/f$ 涨落直接反映被测点的电荷环境。
- [[materials-devices/bilayer-graphene-quantum-dot|石墨烯量子点]]平台可实现 QD 与 SET 同材一次刻蚀集成：50 nm 近距强耦合给出每电子约 30% 的电导响应，是石墨烯自旋比特读出的基本单元。

## 参考文献

- Fattal, I., Van Damme, J., Raes, B., Godfrin, C., Jaliel, G., Chen, K., Van Caekenberghe, T. et al. Radio frequency single electron transmission spectroscopy of a semiconductor Si/SiGe quantum dot. arXiv:2504.05016 (2025)（QAtlas 缓存：2504.05016）。
- Wang, L.-J. et al. A Graphene Quantum Dot with a Single Electron Transistor as Integrated Charge Sensor. *Applied Physics Letters* **97**, 262113 (2010). DOI: 10.1063/1.3533021；arXiv:1008.4868（QAtlas 缓存：1008.4868）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
