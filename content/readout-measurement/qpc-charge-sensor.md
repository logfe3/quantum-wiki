---
title: QPC 电荷传感器
description: 利用量子点接触电导对邻近单电子电荷变化的敏感性进行非侵入式探测。
aliases:
 - 量子点接触传感器
 - QPC电荷计
 - 量子点接触电荷探测器
 - QPC 探测器
tags:
 - 读出与测量
 - 电荷传感
date: 2026-09-08
---

<div class="entry-lead">QPC 电荷传感器是一条调到陡峭电导区的窄通道：邻近量子点多一个电子时，静电势略微改变，QPC 电流便产生可测变化。</div>

## 物理图像

量子点接触（quantum point contact，QPC）是表面栅极在[[fundamentals/two-dimensional-carrier-gas|二维电子气]]（2DEG）中挤压出的一条窄通道，宽度可与电子费米波长相比拟。调节两侧[[fundamentals/tunnel-coupling|隧穿势垒]]栅压 $V_Q$，通道电导出现量子化台阶

$$
G_\mathrm{QPC}=N\,\frac{e^2}{h},\qquad N=1,2,3,\dots
$$

直到完全夹断（pinch-off）。在最低一阶平台与夹断之间的过渡区，电导–栅压曲线斜率最大、对外局域静电势的响应最灵敏，此处通常对应 $G_\mathrm{QPC}\approx e^2/h$。把被测[[fundamentals/semiconductor-quantum-dot|半导体量子点]]放在 QPC 旁边，二者之间只通过电容耦合，量子点电荷改变一个电子 $e$ 时，QPC 通道内的势垒高度微微抬高或降低，电导发生一个台阶式跳变——这正是 QPC 作为"邻位电荷传感器"的物理图像。

QPC 之所以成为少电子量子点实验中不可替代的读出器件，是因为它只需要一条**与被测点并联而不串联**的探测通道：被测点的源漏可以完全关断（少电子极限下隧穿电流已无法测量），只要 QPC 仍保持有限电导，电荷态跳变就能被检测到。

<!-- FIGURE: 量子点与 QPC 相对位置示意图：被测 QD 由源漏电极之间的势垒包围，QPC 通道由另一对栅极定义在 QD 一侧，二者通过电容 C_c 耦合；标注 QPC 夹断偏置点、工作点 G≈e²/h 与少电子极限下 QD 源漏关断 -->

## 工作点选取

QPC 是非线性器件，灵敏度强烈依赖于工作点位置。沿夹断方向把栅压 $V_Q$ 从完全关断推到打开，QPC 电导依次出现量子化平台 $G_\mathrm{QPC}=N\,e^2/h$；最佳传感区在最后一级平台底部，即

$$
G_\mathrm{QPC}\lesssim \frac{e^2}{h},\qquad R_\mathrm{QPC}\gtrsim \frac{h}{e^2}\approx 25.8\ \mathrm{k}\Omega.
$$

进一步指出更严格的判据：当 $G_\mathrm{QPC}<0.5\,e^2/h$（即 $R_\mathrm{QPC}>50\ \mathrm{k}\Omega$）时 QPC 对量子点电荷变化的电导响应灵敏度最大。物理上，这个区域通道仅剩一两个亚带，势垒顶端轻微静电势改变就能显著调制透射系数。实际器件中 QPC 通道常不能形成理想单调量子化平台，而是在邻近栅极作用下自身演化为单量子点结构并出现库仑阻塞，此时把工作点改设在库仑峰两侧斜率最大处同样可获得最佳灵敏度。

工作点的稳定性也至关重要：栅压 $V_Q$ 的漂移会把工作点滑出灵敏区，造成信号丢失；这也是提到的阻抗匹配困难与工作点漂移问题，需要周期性重新标定。

<!-- FIGURE: QPC 电导随夹断栅压 V_Q 的曲线，标注量子化平台 N=1,2,3…、最佳传感区（最后一个平台底，十字位置）和灵敏度对比：单平台过渡区灵敏度 > 库仑峰两侧 > 平台顶部 -->

## 理论模型：电导与势的耦合

把被测量子点的电荷变化 $\Delta q=\pm e$ 看成对 QPC 通道势垒高度 $U$ 的微扰，最简单的线性响应给出

$$
\frac{\Delta G_\mathrm{QPC}}{G_\mathrm{QPC}}=\frac{1}{G_\mathrm{QPC}}\frac{\partial G_\mathrm{QPC}}{\partial U}\,\Delta U
=-\frac{1}{G_\mathrm{QPC}}\frac{\partial G_\mathrm{QPC}}{\partial U}\,C_\mathrm{c}^{-1}\,\Delta q
$$

其中 $C_\mathrm{c}$ 是 QPC 与被测点之间的互电容，负号来自同号电荷相斥。把 QPC 视为准一维通道、仅剩最低亚带，Landauer-Büttiker 公式给出

$$
G_\mathrm{QPC}=\frac{e^2}{h}\,T(E_F),\qquad T=\frac{1}{1+e^{-2\pi(E_F-U)/\hbar\omega_y}}
$$

其中 $\omega_y$ 是横向限制频率；夹断区 $E_F\lesssim U$ 时电导对 $U$ 的导数最大，于是工作点天然落在夹断附近。这一指数灵敏度解释了为什么"夹断前一两个平台底部"是 QPC 传感器的最佳工作点。

灵敏度也可以用"杠杆臂" $\alpha_\mathrm{c}=C_\mathrm{c}/C_\mathrm{QPC,\Sigma}$ 量化：$\alpha_\mathrm{c}$ 越大，一个电子引起的 QPC 静电势改变越显著，电导跳变越容易被检测到。耦合强弱由两点的几何距离与中间栅极决定，实验中通常通过在 QPC 与 QD 之间插入细长的绝缘电极来微调。

## 三种直流读出方式

按 QPC 端电流是否经外加调制解调，QPC 电荷传感可分三种实现：

1. **QPC 直流输运**：QPC 源漏两端加微伏量级交流激励与几百 $\mu\mathrm{V}$ 直流偏压，用锁相放大器读取电导。QD 电荷跳变时 QPC 电导出现台阶。
2. **QPC 交流输运**：与直流输运原理相同，只是交流频率更高（如锁相 SR830 的几十 kHz 量级），抗干扰能力增强；但交流信号可能在 QD 中感应附加噪声。
3. **QPC modulation**：在 QD 的某个 plunger 电极上叠加 2–3 mV 的小幅交流调制（约几十 Hz 到几 MHz），同时在 QPC 源漏加几百 $\muV$ 直流偏压，读取的解调电流正比于 $\partial G_\mathrm{QPC}/\partial V_\mathrm{gate}$，相当于 QPC 输运信号的物理微分信号。这一信号在少电子区比 QPC transport 更清晰，因为调制只放大电荷跳变处的边缘，背景被滤掉。

三种方法给出的电荷跳变位置完全一致（图见），差别在灵敏度与抗干扰：直流输运绝对幅度最大、QPC modulation 对比度最高、AC 输运抗工频干扰能力最强。

<!-- FIGURE: 三种 QPC 测量方法对比图（QD transport vs QPC transport vs QPC modulation），显示相同扫描栅压下电荷跳变位置一致，调制信号对比度最高 -->

## 从直流到射频：RF-QPC

直流 QPC 测量的带宽受直流线缆寄生电容与锁相积分时间限制，通常只在数十 kHz 量级），不足以追踪单次隧穿事件或与脉冲操控同步。把 QPC 接入阻抗匹配谐振电路，再以射频反射方式读出，构成的 RF-QPC 把带宽推到 MHz–百 MHz 量级）。

### 阻抗匹配与谐振电路

射频反射读出的关键是让 QPC 阻抗与 $50\ \Omega$ 同轴线特征阻抗匹配。电压反射系数

$$
\Gamma=\frac{Z-Z_0}{Z+Z_0},\qquad S_{11}=20\log|\Gamma|\ \mathrm{(dB)}
$$

其中 $Z$ 为 QPC 的实测负载阻抗，$Z_0=50\ \Omega$。阻抗完全匹配时 $|\Gamma|=0$，全部射频功率被 QPC 吸收；完全失配时 $|\Gamma|=1$，信号被全反射回射频源。把 QPC 与一个并联到地电感 $L$ 串联，可构造 LC 谐振子

$$
f_R=\frac{1}{2\pi\sqrt{L\,C_p}}
$$

其中 $C_p$ 是 QPC 源漏对地的寄生电容。砷化镓样品 $C_p\approx 0.3$–$1\ \mathrm{pF}$，石墨烯样品因二维材料覆盖面积大而 $C_p\approx 4$–$6\ \mathrm{pF}$，极端情形可达 $30\ \mathrm{pF}$ 以上，寄生电容越大带宽越窄。实验常用 $L=820\ \mathrm{nH}$、$C_p\approx 0.82\ \mathrm{pF}$ 给出 $f_R=193.8\ \mathrm{MHz}$。

谐振电路的有载品质因子由 QPC 阻抗、$L$、$C_p$ 共同决定。当 $R_\mathrm{eff}=L/(R_\mathrm{QPC}\,C_p)>Z_0$ 时电路工作在欠耦合区，带宽由 $R_\mathrm{QPC}$ 决定，但 QPC 工作点在 $R_\mathrm{QPC}>50\ \mathrm{k}\Omega$ 时难以进入欠耦合区；当 $R_\mathrm{eff}<Z_0$ 时为过耦合区，带宽由特征阻抗 $Z_0$ 决定。RF-QPC 一般工作在过耦合区。

### 灵敏度公式

设 QPC 电导以调制频率 $\omega_m$ 在工作点附近正弦变化 $\Delta G_\mathrm{QPC}$，反射信号在载波两侧出现一对边带（sideband），幅度比与反射系数变化 $\Delta\Gamma$ 挂钩。用频谱仪测得上边带信噪比 $\mathrm{SNR}$（dB），则射频 QPC 的电导灵敏度为

$$
\delta G_\mathrm{QPC}=\frac{1}{\sqrt{2}}\,\Delta G_\mathrm{QPC}\cdot 10^{-\mathrm{SNR}/20}\,\Delta f^{-1/2}
$$

其中 $\Delta f$ 为频谱仪分辨率带宽）。$1/\sqrt{2}$ 因子来自上下两个边带，最终解调后只保留上边带能量。已知 $\Delta G_\mathrm{QPC}/\Delta q$（杠杆臂系数 $\alpha_\mathrm{c}$ 与一个电子电荷的乘积），即可得电荷灵敏度

$$
\delta q=\frac{\delta G_\mathrm{QPC}}{\Delta G_\mathrm{QPC}/\Delta q}.
$$

实测砷化镓 RF-QPC：$\Delta G_\mathrm{QPC}\sim 0.05\,e^2/h$、$\mathrm{SNR}=26\ \mathrm{dB}$、$\Delta f=10\ \mathrm{kHz}$，得电导灵敏度 $\delta G_\mathrm{QPC}\approx 1.4\times 10^{-5}\,e^2/h/\sqrt{\mathrm{Hz}}$，电荷灵敏度 $\delta q\approx 4.7\times 10^{-4}\,e/\sqrt{\mathrm{Hz}}$）。工作在 -90 dBm 射频功率下，扫描边带 SNR 与功率成正比；更高功率下 SNR 改善，但辐射反作用（back-action）增强，会向量子点注入散粒噪声。

### 带宽与速度

带宽定义为扫描调制频率时上边带 SNR 跌落到 -3 dB 的频率。砷化镓 RF-QPC 典型带宽 1–10 MHz 量级。带宽使得 RF-QPC 可以追踪单次隧穿事件——对 $1.1\times 10^{-4}\,e/\sqrt{\mathrm{Hz}}$ 的灵敏度，2 MHz 带宽对应的最小可探测电荷 $\delta q_{\min}=\delta q\cdot\sqrt{2\,\mathrm{BW}}\sim 10^{-4}\,e$ 量级，可分辨一个电子 $e$ 所需积分时间约 $10\ \mu\mathrm{s}$。

更高速度要求更高带宽——把 RF-QPC 与快速锯齿波扫描结合，可在数十秒内完成传统方法数十分钟的相图采集，测量速度提升约两个量级。多路复用（multiplex readout）则借助不同载波频率在同一根射频线上同时读出多个 QPC，每个 QPC 用一个独立解调通道。

<!-- FIGURE: 射频反射式 QPC 测量电路示意图：射频源经定向耦合器、低温衰减器进入样品盒，电感 L 与 QPC 电阻 R_QPC 及寄生电容 C_p 构成谐振电路；反射信号经环形器、低温放大器、室温放大器后由 IQ 混频器解调 -->

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 工作点电导 $G_\mathrm{QPC}$ | 约 $e^2/h$（最佳灵敏区） | ； |
| 工作点电导上限 | $G_\mathrm{QPC}<0.5\,e^2/h$（$R_\mathrm{QPC}>50\ \mathrm{k}\Omega$） | |
| 调制信号幅度 | $2$–$3\ \mathrm{mV}$（QPC modulation） | |
| 直流偏压（QPC 端） | 几百 $\mu\mathrm{V}$ | ； |
| 锁相交流激励 | $20\ \mu\mathrm{V}$（SR830） | ； |
| RF-QPC 谐振频率 | $193.8\ \mathrm{MHz}$（GaAs，$L=820\ \mathrm{nH}$，$C_p=0.82\ \mathrm{pF}$） | |
| 寄生电容 $C_p$ | $0.3$–$1\ \mathrm{pF}$（GaAs）；$4$–$6\ \mathrm{pF}$（石墨烯） | |
| 电导灵敏度 $\delta G$ | $1.4\times 10^{-5}\,e^2/h/\sqrt{\mathrm{Hz}}$ | ； |
| 电荷灵敏度 $\delta q$ | $4.7\times 10^{-4}\,e/\sqrt{\mathrm{Hz}}$（GaAs RF-QPC）；$1.1\times 10^{-4}\,e/\sqrt{\mathrm{Hz}}$（反射式超导腔） | |
| RF-QPC 带宽 | $2.5\ \mathrm{MHz}$（GaAs）；$1$–$20\ \mathrm{MHz}$（综合文献） | ； |
| QPC 器件尺寸 | 通道长度 $\sim 250\ \mathrm{nm}$（GaAs，2DEG 密度 $2\times 10^{11}\ \mathrm{cm^{-2}}$，迁移率 $0.6\times 10^5\ \mathrm{cm^2/Vs}$） | |

## 实验特征与典型应用

**逐个数电子。** QPC 与被测 QD 之间的电容耦合不要求电流流过 QD 本身，因此可以在 QD 与源漏完全电隔离的少电子区工作。逐个减小 plunger 栅压，QD 中的电子逐个排出，每排出一个电子 QPC 电导跳一次台阶，由此可以精确标定 QD 的绝对电子数）。这一方法适用于库仑阻塞区电子数严格为整数的特点，是少电子量子点实验的标准初始化手段。

**电荷稳定图与偏压三角。** QPC 可以逐栅压扫描绘制 QD 内电子数分布（即[[fundamentals/charge-stability-diagram|电荷稳定图]]），也可与 QD 源漏偏压同步扫描得到蜂窝图或偏压三角形。由于 QPC modulation 的微分信号对比度高，常用此方法获取双量子点完整相图。

**自旋–电荷转换。** QPC 本身只测电荷，要读自旋需要先把自旋态映射到电荷分布。典型机制是泡利自旋阻塞（Pauli spin blockade）：双量子点中 $(1,1)\to(0,2)$ 单态隧穿被允许、三态隧穿被禁止，隧穿后电荷态不同，再由 QPC 读取。这构成了[[readout-measurement/single-shot-readout|单发自旋读出]]的基础：2004 年 Elzerman 等人在 GaAs 双量子点上首次实现 QPC 单发电荷读出，进而完成单电子自旋读出。

**单发读出与隧穿动力学。** 射频 QPC 的微秒级积分时间已经短于单次隧穿事件的平均间隔，可用阈值判定方法读取单次隧穿。这也使得 QPC 可以作为时间分辨工具研究隧穿动力学、朗道–齐纳过程与电荷噪声谱。

**电荷噪声谱学。** QPC 把 QD 内电荷的微弱涨落放大为电导信号，因此即使在 QD 库仑阻塞区（直流电流为零），仍可经 QPC 通道读取低频 $1/f$ 噪声，是表征[[materials-devices/charge-noise|电荷噪声]]环境的常用手段。

## 局限与替代方案

- **工作点漂移**：随栅压、磁场、温度变化，QPC 工作点会漂移出灵敏区，需要周期性重新标定。
- **电荷–自旋分离**：QPC 不直接读自旋，所有自旋测量都要先经自旋–电荷转换；直接读自旋需要[[readout-measurement/gate-based-sensing|栅极色散读出]]或[[readout-measurement/dispersive-readout|色散腔读出]]等其它机制。
- **射频反作用**：过高的射频功率会向量子点注入散粒噪声与热激发，破坏被测态，需要折中灵敏度与反作用）。
- **寄生电容受限**：在石墨烯或大面积 2DEG 样品中寄生电容过大，谐振频率过低、带宽显著变窄，需要重新设计谐振电路（如引入可调电容）。

### 散粒噪声极限的 RF 模式

传感器灵敏度的终极标尺是**散粒噪声极限**：RF-QPC 在数十 MHz 带宽下运行时，电荷灵敏度不由后级放大器噪声限制，而是由 QPC 自身的散粒噪声（分流噪声 $S_I=2eI	imes F$，$F$ 为 Fano 因子）决定——这是量子传感器的基本极限。实测达到散粒噪声极限意味着传感器设计已无多余的 classical 噪声源，进一步的灵敏度提升只能靠增大测量带宽或量子噪声压制。

![[assets/figures/qpc-charge-sensor/a72c9c02fb4e2b79d84537f0773eb0daaa885b78d97929571e2ea49ce4e88ee8.jpg]]

*RF-QPC 散粒噪声极限：数十 MHz 带宽的电荷检测——灵敏度由 QPC 自身散粒噪声决定。图源：Roch et al. (2007)，Fig. 1。*

![[assets/figures/qpc-charge-sensor/a4dd42be775d4651369ec22ffbf90e795839060a7814cf333406bcae259950e9.jpg]]

*灵敏度标定：RF-QPC 的电荷灵敏度随带宽/偏置的变化——散粒噪声极限的定量验证。图源：Roch et al. (2007)，Fig. 2。*

## 与其他概念的关系

- [[fundamentals/coulomb-blockade|库仑阻塞]]给出被测点的能量判据：阻塞区电子数固定，QPC 的台阶跳变才能与离散电荷变化一一对应。
- [[fundamentals/electrochemical-potential|电化学势]]对齐条件决定 QD 在何时发生隧穿，从而决定 QPC 信号跳变位置。
- [[fundamentals/tunnel-coupling|隧穿耦合]]控制被测点与源漏的耦合强度；少电子实验要求弱耦合，但 QPC 不依赖这一耦合，因此可以在 QD 源漏完全关断时仍然工作。
- [[fundamentals/charge-stability-diagram|电荷稳定图]]是 QPC 扫描得到的主要图样；蜂窝图与偏压三角形是 QPC 调制测量的标准产出。
- [[readout-measurement/rf-reflectometry|射频反射测量]]是 QPC 的高频化版本，引入阻抗匹配电路后带宽可达 MHz–百 MHz 量级，是从直流 QPC 到高速读出的桥梁。
- [[readout-measurement/gate-based-sensing|栅极色散传感]]通过把 QD 串入谐振腔栅极直接读取电容变化，无需 QPC 通道，是另一种非破坏性电荷传感方式，适合多比特共用一条射频线的场景。
- [[readout-measurement/dispersive-readout|色散读出]]把电荷态映射为微波谐振腔的频率/相位偏移，与 QPC 同为非破坏性电荷传感手段，但作用机制是色散频移而非电导调制。
- [[materials-devices/charge-noise|电荷噪声]]是 QPC 主要噪声源之一：低频 $1/f$ 噪声既来自 QPC 自身通道也来自邻近 QD 的局域陷阱，QPC 也是测量这种噪声的工具。
- [[readout-measurement/qh-edge-channel-charge-sensor|量子霍尔边缘通道电荷传感器]]是同一只 QPC 在强磁场 IQHE 平台下的另一副骨架：传感信号从零场电容耦合的电导调制换成对向边缘态在施主上的背散射，把灵敏度空间局域化到 QPC 下方一个施主体积内。


## 参考文献

- QPC/SET 电荷传感与自旋读出的集成：[[references/elzerman-2004|Elzerman et al., Nature 430, 431 (2004)]]、[[references/zwanenburg-2013|Zwanenburg et al., RMP 85, 961 (2013)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
