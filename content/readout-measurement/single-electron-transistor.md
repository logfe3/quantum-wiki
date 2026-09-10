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
date: 2026-09-08
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

典型地达到 1 meV 量级（[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 25；[文献 7]([[sources/han-tianyi-2017]])，PDF p. 7），远高于稀释制冷机里的电子温度 $k_BT$，因此单电子隧穿被严格限制在一个一个地进行。

在[[fundamentals/constant-interaction-model|常相互作用模型]]（CI 模型）下，含 $N$ 个电子的岛总能量为

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_\mathrm{SD}+C_G V_G\right]^2}{2 C_\Sigma}+\sum_{n=1}^{N}E_n(B),
$$

其中 $V_\mathrm{SD}$、$V_G$ 分别为源漏偏压和栅压（[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 25；[文献 7]([[sources/han-tianyi-2017]])，PDF p. 18）。第 $N$ 个电子进入岛所需的最小能量即电化学势：

$$
\mu(N)=U(N)-U(N-1)=\left(N-N_0-\tfrac{1}{2}\right)E_C-\frac{1}{|e|}\left(C_S V_\mathrm{SD}+C_G V_G\right)+E_N.
$$

把岛电荷 $Q=-N|e|$ 与栅电容耦合 $C_G V_G$ 视为对岛电势的连续调节，SET 表现出两套独立可调的电压自由度：$V_G$ 平移 $\mu(N)$、$V_\mathrm{SD}$ 撑开"偏压窗口"。在 $(V_G, V_\mathrm{SD})$ 平面上扫描，源漏电流呈现规则的菱形图样——[[fundamentals/coulomb-diamond|库仑菱形]]：菱形内是[[fundamentals/coulomb-blockade|库仑阻塞]]区（电流为零，电子数恒定），菱形外才有非零电流。

<!-- FIGURE: SET 器件的等效电路图：导电岛（库仑岛）由两个隧穿结（C_S,R_S 与 C_D,R_D）与源、漏相连，由电容 C_G 与栅极耦合；标注 CΣ、C_G 与电子温度条件 R≫h/e²、e²/CΣ≫k_BT -->

## SET 作为邻位电荷传感器

SET 作为传感器的核心思想是：把被测量子点的电荷变化通过电容耦合到 SET 岛上，岛电势随之微调，SET 源漏电流 $I_\mathrm{SET}$ 出现台阶式跳变；跳变次数与幅度与被测点电荷改变一一对应（[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 34；[文献 14]([[sources/duan-peng-2022]])，PDF p. 52）。

被测点与 SET 岛之间的互电容 $C_\mathrm{c}$ 与 SET 岛总电容 $C_\Sigma$ 之比定义了"杠杆臂"

$$
\alpha_\mathrm{c}=\frac{C_\mathrm{c}}{C_\Sigma},
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

[文献 1]([[sources/zhou-cheng-2013]])（PDF p. 75）总结道："单电子晶体管的探测带宽与探测灵敏度非常好，但是制作工艺比较复杂（Lu et al., 2003），而量子点接触或者量子点电荷探测器往往比较容易在量子点加工时同步制作完成，所以在实际试验中，我们往往采用后两种方式。"这一句概括了半导体量子点实验中 SET 早期盛行、QPC 后期占主导的工艺脉络。

## 直流 SET 的输出曲线

直流偏置下 SET 的源漏电流随栅压呈周期性"库仑振荡"——每经历一次 $\mu(N)$ 与源漏费米面对齐，就有一个共振隧穿峰。峰间距由 $C_G$ 决定：

$$
\Delta V_G = \frac{e}{C_G},
$$

而峰高则由 $V_\mathrm{SD}$ 决定：在低偏压极限 $eV_\mathrm{SD}\ll E_C$ 下，库仑振荡峰值电流

$$
I_\mathrm{peak}\approx \frac{e}{2 C_\Sigma}\,\frac{V_\mathrm{SD}}{R_T},\qquad R_T=R_S+R_D
$$

被两个隧穿结的串联电阻 $R_T$ 限制（[文献 7]([[sources/han-tianyi-2017]])，PDF pp. 18–20）。一旦 $eV_\mathrm{SD}>E_C$（偏压窗口打开到能容纳两个相邻 $\mu(N)$），电流峰展宽为"库仑台阶"，相邻 $\mu(N)$ 同时贡献隧穿，$I$–$V_G$ 曲线进入饱和区。

把 SET 工作点选在库仑振荡峰的斜率最大处（峰侧），任何外部静电势微扰都会引起 $I_\mathrm{SET}$ 的大幅度变化，这正是 SET 作为静电计的"线性工作区"。工作点同样存在漂移问题：栅压、温度、磁场和被测点的局域电荷环境都会缓慢推移库仑振荡的位置，导致灵敏度下降，需要周期性重新标定（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 7）。

<!-- FIGURE: 直流 SET 的源漏电流随栅压的库仑振荡曲线：周期性电流峰，峰间距 ΔV_G = e/C_G；标注最佳传感工作点（峰侧斜率最大处） -->

## 射频 SET：从直流瓶颈到 100 MHz 带宽

直流 SET 的带宽被两个 RC 通道限制：岛-源、岛-漏两个隧穿结的串联电阻 $R_T$ 与外接引线的寄生电容 $C_p$ 构成低通滤波器

$$
f_\mathrm{RC}=\frac{1}{2\pi R_T C_p}\sim 10\ \mathrm{kHz}\ \text{量级},
$$

这与 QPC 的传统测量带宽处于同一数量级（[文献 7]([[sources/han-tianyi-2017]])，PDF pp. 37–38；[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 82）。1998 年 Schoelkopf 等人把 SET 与一个阻抗匹配谐振电路耦合，以射频反射方式读出岛电流变化，构成的 RF-SET 把带宽推到 100 MHz 量级，同时保留了 SET 的超高电荷灵敏度（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 38；[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 82；[文献 14]([[sources/duan-peng-2022]])，PDF p. 52）。

### 等效电路与谐振频率

射频 SET 的等效电路与 RF-QPC 同构：把 SET 视为一个电阻 $R_\mathrm{SET}$（在库仑峰侧取工作点时通常为数十 kΩ 到几百 kΩ 量级）与两个隧穿结电容之和的串联，再与一个外部电感 $L$、寄生电容 $C_p$ 组成谐振子

$$
f_R=\frac{1}{2\pi\sqrt{L\,C_\Sigma+C_p}}.
$$

阻抗

$$
Z(\omega)=j\omega L+\frac{R_\mathrm{SET}\,(1-j\omega R_\mathrm{SET} C_\Sigma)}{1+\omega^2 R_\mathrm{SET}^2 C_\Sigma^2},
$$

谐振条件 $\mathrm{Im}\,Z=0$ 给出与 RF-QPC 相同的

$$
f_R\approx\frac{1}{2\pi\sqrt{L\,(C_\Sigma+C_p)}}
$$

（[文献 7]([[sources/han-tianyi-2017]])，PDF pp. 39–40）。当 $R_\mathrm{eff}=L/(R_\mathrm{SET}\,(C_\Sigma+C_p))>Z_0$（特征阻抗 $Z_0=50\ \Omega$）时电路工作在欠耦合区，带宽由 SET 电阻决定；反之进入过耦合区，带宽由 $Z_0$ 决定。RF-SET 一般工作在过耦合区。

### 灵敏度

设 SET 岛电荷受外部以调制频率 $\omega_m$ 在工作点附近作小幅变化 $\Delta Q$，反射信号在载波两侧出现一对边带，幅度比与反射系数变化 $\Delta\Gamma$ 挂钩。电导灵敏度

$$
\delta G_\mathrm{SET}=\frac{1}{\sqrt{2}}\,\Delta G_\mathrm{SET}\cdot 10^{-\mathrm{SNR}/20}\,\Delta f^{-1/2},
$$

除以杠杆臂系数 $\Delta G_\mathrm{SET}/\Delta q$ 即得电荷灵敏度

$$
\delta q=\frac{\delta G_\mathrm{SET}}{\Delta G_\mathrm{SET}/\Delta q},
$$

其中 $\Delta f$ 是频谱仪分辨率带宽（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 41；[文献 1]([[sources/zhou-cheng-2013]])，PDF pp. 93–94）。$1/\sqrt{2}$ 因子来源于只解调上边带、下边带丢弃。Schoelkopf 1998 年首次报告的 RF-SET 在 $L=620$ nH、$C_p=0.37$ pF 下给出 $f_0=332$ MHz、带宽 7 MHz、电荷灵敏度高达 $3.2\times 10^{-6}\,e/\sqrt{\mathrm{Hz}}$（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 85；文献 [3] 同页引用）。

### 多路复用

RF-SET 同样适用波分复用（wavelength division multiplexing, WDM）：多个 SET 由不同的 LC 谐振频率区分，共用一根射频同轴线输入载波、输出反射信号，每个 SET 由 IQ 混频器独立解调。2002 年 Stevenson 等人报告了 RF-SET 阵列的多路复用实现（[文献 7]([[sources/han-tianyi-2017]])，PDF 参考文献 [21] 附近）。

<!-- FIGURE: RF-SET 测量电路示意图：射频源经定向耦合器、低温衰减器进入样品盒；SET 与电感 L、寄生电容构成谐振电路；反射信号经环形器、低温放大器、室温放大器后由 IQ 混频器解调 -->

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 岛总电容 $C_\Sigma$ | 几 aF—几百 aF（纳米尺度金属岛或半导体岛） | 文献 1 |
| 充电能 $E_C=e^2/C_\Sigma$ | 约 1 meV 量级 | 文献 1；文献 7 |
| 栅电容 $C_G$ 对应 $\Delta V_G$ | 单峰间距 $\Delta V_G=e/C_G$（典型 $\Delta V_G\sim$ 几 mV—几十 mV） | 文献 7 |
| 隧穿电阻 $R_T$ | $R_T\gg h/e^2$（库仑阻塞条件） | 文献 7 |
| 直流 SET 库仑振荡峰间距 | $\Delta V_G=e/C_G$ | 文献 7 |
| 直流工作点电流 | $I_\mathrm{peak}\approx e V_\mathrm{SD}/(2 C_\Sigma R_T)$ | 文献 7 |
| 直流带宽 | 数十 kHz 量级（受 $R_T C_p$ 限制） | 文献 7；文献 1 |
| RF-SET 谐振频率 | 332 MHz（Schoelkopf，$L=620$ nH、$C_p=0.37$ pF） | 文献 7 |
| RF-SET 带宽 | 7–24 MHz 量级 | 文献 7 |
| RF-SET 电荷灵敏度 | $3.2\times 10^{-6}\,e/\sqrt{\mathrm{Hz}}$（Schoelkopf 1998）；$2.4\times 10^{-5}\,e/\sqrt{\mathrm{Hz}}$（Wei Lu） | 文献 7 |
| 射频功率 | $-90$ dBm 量级（折中灵敏度与反作用） | 文献 1 |

## 实验特征与典型应用

**逐个数电子。** SET 的库仑振荡峰间距 $\Delta V_G=e/C_G$ 是绝对标尺，扫描栅压时每经历一个峰，岛电荷增加/减少一个电子。利用这一点可以精确数出岛上的电子数，是少电子量子点实验的标准初始化手段之一（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 18；[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 25）。

**自旋–电荷转换。** SET 本身只测电荷，要读自旋需要先把自旋态映射到电荷分布。最常见的机制是[[readout-measurement/single-shot-readout|单发读出]]中的泡利自旋阻塞：在双量子点中 $(1,1)\to(0,2)$ 单态隧穿被允许、三态被禁止，隧穿后电荷态不同，再由 SET 或 QPC 读取。早期实验即采用 SET 完成单发自旋读出（[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 34 列举 SET 与 QPC 为半导体量子比特读出的两种基本选项）。

**电荷噪声谱学。** 即使在库仑阻塞区（直流电流为零），SET 工作点处 $I_\mathrm{SET}$ 仍受局域电荷涨落调制，因此 SET 也是测量[[materials-devices/charge-noise|电荷噪声]]的工具。RF-SET 把这种能力扩展到 MHz 量级，可以研究更宽频段的电荷涨落。

**快速相图采集。** 把 RF-SET 与快速锯齿波扫描结合，可在数十秒内完成传统方法数十分钟的相图采集，测量速度提升约两个量级（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 64 给出 RF-QPC 的同类应用）。

**超导电荷量子比特的早期读出。** 在电路量子电动力学（circuit-QED）发展起来之前，超导量子比特的读出主要依靠 SET 或 DC-SQUID。但这两种读取方式与量子比特的强耦合导致相干时间较短、反作用影响显著，难以做到非破坏性测量。2004 年 Blais 等人提出 circuit-QED 后，SET 在超导比特读出中的角色被谐振腔色散读出取代（[文献 14]([[sources/duan-peng-2022]])，PDF p. 52；[（已压缩）超导量子比特快速高保真度读取的实验研究]([[sources/文献 14-压缩-2022]])，PDF p. 47）。

<!-- FIGURE: 双量子点被 SET 与 QPC 同时探测的器件俯视图：双点居中、SET 在一侧、QPC 在另一侧，分别由独立的源漏电极和栅极定义 -->

## 局限与替代方案

- **工艺复杂**：SET 要求两个串联隧穿结、岛尺寸在数十 nm 量级，金属岛 SET 通常依赖电子束光刻与阴影蒸发的精确套刻，半导体 SET 则依赖栅极定义的静电岛；加工难度高于 QPC（[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 75）。
- **工作点漂移**：随栅压、温度、磁场变化，库仑振荡位置会漂移出灵敏区，需要周期性重新标定（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 7）。
- **直流带宽极低**：受 $R_T C_p$ 限制，直流 SET 仅数十 kHz 量级（[文献 7]([[sources/han-tianyi-2017]])，PDF p. 38）。
- **射频反作用**：过高的射频功率会向岛注入散粒噪声与热激发，破坏被测态，需要折中灵敏度与反作用（[文献 1]([[sources/zhou-cheng-2013]])，PDF p. 94；[文献 7]([[sources/han-tianyi-2017]])，PDF p. 7）。
- **替代方案**：在半导体量子点体系中已被[[readout-measurement/qpc-charge-sensor|QPC]]取代主流地位；栅极色散读出（[[readout-measurement/gate-based-sensing|gate-based sensing]]）和[[readout-measurement/dispersive-readout|色散读出]]则在多比特共用射频线场景下提供了另一种非破坏性电荷传感路径。

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

## 延伸阅读

- R. J. Schoelkopf, P. Wahlgren, A. A. Kozhevnikov, P. Delsing, D. E. Prober, "The radio-frequency single-electron transistor (RF-SET): a fast and ultrasensitive electrometer", *Science* 280(5367): 1238–1242 (1998). [DOI: 10.1126/science.280.5367.1238]
- W. Lu, Z. Ji, L. Pfeiffer, K. W. West, A. J. Rimberg, "Real-time detection of electron tunnelling in a quantum dot", *Nature* 423(6938): 422–425 (2003). [DOI: 10.1038/nature01642]
- T. A. Fulton, G. J. Dolan, "Observation of single-electron charging effects in small tunnel junctions", *Physical Review Letters* 59(1): 109–112 (1987). [DOI: 10.1103/PhysRevLett.59.109]
- D. V. Averin, K. K. Likharev, "Coulomb blockade of single-electron tunneling, and coherent oscillations in small tunnel junctions", *Journal of Low Temperature Physics* 62(3–4): 345–373 (1986). [DOI: 10.1007/BF00683469]
- A. Aassime, D. Gunnarsson, K. Bladh, P. Delsing, "Radio-frequency single-electron transistor as readout device for qubits: Charge sensitivity and back-action", *Applied Physics Letters* 79(24): 4031–4033 (2001).

## 论文依据

- [[sources/ref-01|文献 1]]，PDF p. 25：1.4.2 节用常相互作用模型推导库仑阻塞、电化学势、充电能，给出 SET 工作所需的 $R\gg h/e^2$、$e^2/C_\Sigma\gg k_BT$ 条件。
- [[sources/ref-01|文献 1]]，PDF p. 34：图 1.11 与正文指出在半导体门控量子点旁边用 SET 或 QPC 读取量子比特信息；明确 SET 与 QPC 是两种基本读出方案。
- [[sources/ref-01|文献 1]]，PDF p. 75：3.7 节总结三种电荷探测器（SET、QPC、被改作传感器的量子点）并比较优缺点，指出 SET 灵敏度高但工艺复杂，实际实验多采用 QPC 或 QPC 演化的库仑阻塞工作点。
- [[sources/ref-01|文献 1]]，PDF p. 82：4.1.2 节综述射频反射式测量发展史：Schoelkopf 1998 提出 RF-SET，Cassidy/Müller/Reilly 2007 把技术移植到 RF-QPC。
- [[sources/ref-01|文献 1]]，PDF pp. 93–94：式 4.20–4.21 给出射频反射式电导灵敏度与电荷灵敏度的换算；图 4.11 给出 SNR 与射频功率的反作用折中。
- [[sources/ref-07|文献 7]]，PDF p. 7：摘要列出 RF-QPC、RF-DGS 与 RF-SET 三类射频反射式电荷探测器。
- [[sources/ref-07|文献 7]]，PDF pp. 18–20：1.2.2 节系统给出 CI 模型下量子点总能量、电化学势 $\mu(N)$、库仑振荡与库仑菱形，是 SET 静电学的标准推导。
- [[sources/ref-07|文献 7]]，PDF pp. 37–38：3.1.1 节计算传统直流测量带宽 $f_\mathrm{RC}=1/(2\pi R_\mathrm{QPC} C_p)\sim 30$ kHz，并指出传统测量无法降低 $1/f$ 噪声。
- [[sources/ref-07|文献 7]]，PDF p. 38：3.1.2 节指出 Schoelkopf 1998 把射频反射式测量应用到单电子晶体管上组成 RF-SET，实现了高带宽约 100 MHz 与高灵敏度的测量。
- [[sources/ref-07|文献 7]]，PDF pp. 39–40：式 3.5–3.16 给出 RF 反射式电路的输入阻抗、谐振频率、欠耦合/过耦合条件与带宽公式。
- [[sources/ref-07|文献 7]]，PDF p. 41：式 3.17、3.18 给出 RF-QPC/RF-SET 电导灵敏度与电荷灵敏度的换算公式。
- [[sources/ref-07|文献 7]]，PDF p. 61：参考文献 [3] 引 Schoelkopf 1998 RF-SET 原文 Science 280:1238。
- [[sources/ref-07|文献 7]]，PDF p. 64：4.2 节快速测量指出"这一方法首先在射频单电子晶体管中使用（Biercuk et al., 2006），后来也发展到了射频量子点接触之中"。
- [[sources/ref-07|文献 7]]，PDF p. 85：附录 B 经典射频反射式实验参数对比表（Schoelkopf RF-SET $f_0=332$ MHz、$C_p=0.37$ pF、$L=620$ nH、BW=7 MHz、Q=24、$\delta q=3.2\times 10^{-6}\,e/\sqrt{\mathrm{Hz}}$）。
- [[sources/ref-07|文献 7]]，PDF p. 86：附录 B 参考文献给出 RF-SET、Wei Lu Nature 2003、Vink/Cassidy/Reilly RF-QPC 等经典工作。
- [[sources/ref-14|文献 14]]，PDF p. 52：第 2 章指出 circuit-QED 出现之前对超导量子比特的读取主要依靠 SET（single-electron transistor）或 DC-SQUID，但两者与比特强耦合导致相干时间较短；2004 年 Blais 等人提出 circuit-QED 后逐步被谐振腔色散读出取代。另见压缩版 PDF p. 47（同句论述）。
