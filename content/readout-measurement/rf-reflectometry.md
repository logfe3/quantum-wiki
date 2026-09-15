---
title: 射频反射测量
description: 把量子器件嵌入阻抗匹配谐振电路，通过反射微波的幅值和相位快速读取状态。
aliases:
 - 射频反射式测量
 - RF reflectometry
 - RF 反射测量
tags:
 - 读出与测量
 - 射频
date: 2026-09-08
---

<div class="entry-lead">射频反射测量不等电流慢慢穿过长线缆，而是向匹配网络发送连续微波，从返回波的幅度和相位判断器件阻抗是否改变。</div>

## 为什么需要射频测量

量子点读出依赖紧邻的电荷传感器——[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]或单电子晶体管（single-electron transistor, SET）——把量子点电子数的跳变转换成电导变化。传感器在最灵敏工作点的电导通常为 $G<0.5\,e^2/h$，即电阻 $R>50\ \mathrm{k\Omega}$。传统做法是让直流/低频电流流过传感器，再经数米长的同轴线引出制冷机到室温放大器；这段引线的寄生电容高达数百皮法（典型微型同轴线约 $174\ \mathrm{pF/m}$，常用长度累积约 $600\ \mathrm{pF}$），与传感器电阻构成 RC 低通，把测量带宽压在

$$
f_{RC}=\frac{1}{2\pi R_{\mathrm{sens}}C_{\mathrm{line}}}\approx\frac{1}{2\pi\times 50\ \mathrm{k\Omega}\times 100\ \mathrm{pF}}\sim 30\ \mathrm{kHz}
$$

量级。数十 kHz 的带宽只能看到时间平均信号，无法追踪微秒量级的单电子隧穿事件，也就做不了[[readout-measurement/single-shot-readout|单发读出]]；同时低频段恰是 $1/f$ 噪声（见[[materials-devices/charge-noise|电荷噪声]]）最重的区域。

射频反射测量（radio-frequency reflectometry）的出路是**阻抗变换**：在传感器近旁放一个贴片电感 $L$，让它与不可避免的寄生电容 $C_p$ 组成谐振电路（储能电路，tank circuit），把传感器的高阻抗变换到传输线的特性阻抗 $Z_0=50\ \Omega$ 附近。这样测量频率被抬升到谐振频率 $\sim 200\ \mathrm{MHz}$ 的载波上，带宽由谐振电路的品质因子决定，可达数 MHz——比直流方案高约三个数量级。1998 年 Schoelkopf 等人首先在单电子晶体管上实现（RF-SET），带宽达百 MHz 量级；此后该技术被移植到 QPC（RF-QPC）和栅极（RF-DGS/栅极射频传感）上，只需改动片外电路而不需改动样品设计。

## 理论模型

### 反射系数

射频信号沿特性阻抗 $Z_0$ 的传输线入射到负载 $Z_L$ 上，阻抗失配处的电压反射系数为

$$
\Gamma=\frac{V_{\mathrm{ref}}}{V_{\mathrm{in}}}=\frac{Z_L-Z_0}{Z_L+Z_0}.
$$

$|\Gamma|=0$ 时无反射，入射功率被负载全部吸收；$|\Gamma|=1$ 时全反射。入射功率 $P_{\mathrm{in}}$ 中被反射回来的部分为

$$
P_{\mathrm{ref}}=|\Gamma|^2 P_{\mathrm{in}}.
$$

实验上用网络分析仪测散射参数，$S_{11}=10\log|\Gamma|^2=20\log|\Gamma|$（单位 dB）。注意 $Z_0=50\ \Omega$ 不是线缆的直流电阻，而是 $Z_0=\sqrt{L'/C'}$（$L'$、$C'$ 为单位长度电感与电容）定义的高频特性阻抗。

<!-- FIGURE: 射频反射测量信号链示意图：射频源→定向耦合器→衰减器→样品端 tank 电路→低温放大器→混频解调→基带 I/Q -->

### 储能电路与阻抗匹配

典型的负载端电路是：量子器件电阻 $R$（如 $R_{\mathrm{QPC}}$）与电感 $L$ 串联，片上及引线寄生电容 $C_p$ 并联在电阻两端。整体输入阻抗为

$$
Z=j\omega L+\frac{1}{j\omega C_p+1/R}=j\omega L+\frac{R\left(1-j\omega R C_p\right)}{1+\omega^2R^2C_p^2}.
$$

谐振条件是阻抗虚部为零，由此解出谐振角频率与谐振时的输入阻抗：

$$
\omega_R=\sqrt{\frac{1}{LC_p}-\frac{1}{\left(RC_p\right)^2}},\qquad Z(\omega_R)=\frac{L}{RC_p}.
$$

绝大多数情况下 $R\gg\sqrt{L/C_p}$（即 $1/(LC_p)\gg 1/(RC_p)^2$），谐振频率简化为

$$
f_R\approx\frac{1}{2\pi\sqrt{LC_p}}
$$

只由 $L$ 与 $C_p$ 决定，与器件电阻无关。谐振时联立反射系数公式得

$$
|\Gamma|=\frac{L/(RC_p)-Z_0}{L/(RC_p)+Z_0}.
$$

可见 $\Delta R$ 被转换为 $\Delta\Gamma$：当谐振阻抗 $L/(RC_p)$ 恰好等于 $Z_0=50\ \Omega$（阻抗匹配）时 $\Gamma=0$，且在此点附近 $|\Gamma|$ 对 $R$ 的变化最陡峭——器件电阻的微小变化引起反射系数的剧烈变化。因此最佳工作点是让传感器电阻落在匹配电阻

$$
R_{\mathrm{match}}=\frac{L}{C_p Z_0}
$$

附近。以 $L=820\ \mathrm{nH}$、$C_p=0.8\ \mathrm{pF}$ 为例，$R_{\mathrm{match}}\approx 20\ \mathrm{k\Omega}$ 量级，恰与 QPC 灵敏区 $R\gtrsim 50\ \mathrm{k\Omega}$ 接近（模拟给出 $C_p=0.3\ \mathrm{pF}$、$L=820\ \mathrm{nH}$ 时最灵敏点约 $53\ \mathrm{k\Omega}$）。

### 品质因子与带宽

在谐振频率附近（$\omega R C_p\gg 1$），输入阻抗可化为等效串联 RLC 电路 $Z=j\omega L+1/(j\omega C_p)+R_{\mathrm{eff}}$，其中有效串联电阻

$$
R_{\mathrm{eff}}=\frac{L}{RC_p}
$$

即器件电阻被变换到串联臂上的镜像。电路的无载（内部）品质因子与外部品质因子分别为

$$
Q_{\mathrm{int}}=\frac{\omega_R L}{R_{\mathrm{eff}}}=\frac{R}{\sqrt{L/C_p}},\qquad Q_{\mathrm{ext}}=\frac{\omega_R L}{Z_0}=\frac{\sqrt{L/C_p}}{Z_0}
$$

有载品质因子 $1/Q_L=1/Q_{\mathrm{int}}+1/Q_{\mathrm{ext}}$。谐振电路的相对带宽

$$
\mathrm{BW}=\frac{f_R}{Q_L}=\sqrt{\frac{C_p}{L}}\left(Z_0+R_{\mathrm{eff}}\right)\cdot f_R\Big/f_R=\frac{f_R}{Q_L}
$$

即 $\mathrm{BW}\times Q=f_R$：品质因子与带宽互相制约。对比 $R_{\mathrm{eff}}$ 与 $Z_0$ 可区分两种耦合状态（施密特圆上直观可见）：

- $R_{\mathrm{eff}}>Z_0$（即 $R<R_{\mathrm{match}}$）：欠耦合（under-coupled），带宽受 $R_{\mathrm{eff}}$ 限制；
- $R_{\mathrm{eff}}<Z_0$（即 $R>R_{\mathrm{match}}$）：过耦合（over-coupled），带宽受外部 $Z_0$ 限制。

高电阻器件（如 Si-MOS 中 $R_{\mathrm{SET}}$ 可达数百 k$\Omega$ 乃至 M$\Omega$，而典型量子点电阻 $h/e^2\approx 25.8\ \mathrm{k\Omega}$）往往落在过耦合区，灵敏度与带宽都被外部负载压缩，需要额外的匹配电容 $C_m$ 把耦合状态调回匹配点。提高带宽只能靠压低 $C_p$（$f_R$ 升高）而非增大 $L$——增大 $L$ 会同时压低 $f_R$ 与带宽。

### 灵敏度公式

用边带法标定灵敏度：给器件叠加频率 $\omega_m$ 的已知电导（或电荷）调制，载波 $\omega_0$ 的反射谱在 $\omega_0\pm\omega_m$ 处出现边带。RF-QPC 的电导灵敏度与电荷灵敏度分别为

$$
S_g=\frac{1}{\sqrt{2}}\,dg_{\mathrm{qpc}}\,(\Delta f)^{-1/2}\,10^{-\mathrm{SNR}/20},\qquad
S_q=\frac{1}{\sqrt{2}}\,dq_{\mathrm{qpc}}\,(\Delta f)^{-1/2}\,10^{-\mathrm{SNR}/20}
$$

其中 $1/\sqrt{2}$ 来自上下两个边带，$\Delta f$ 是频谱仪分辨带宽（常设 $10\ \mathrm{kHz}$），$\mathrm{SNR}$ 是边带信噪比（dB），$dq_{\mathrm{qpc}}=e\cdot\alpha$ 为一个电子电量乘以杠杆臂因子。灵敏度决定了积分时间：电荷灵敏度 $S_q\sim 10^{-4}\ e/\sqrt{\mathrm{Hz}}$ 意味着单个电子隧穿事件可在微秒量级内被分辨。

### 零拍解调

反射信号经低温放大后与本振（LO，与载波同频）在混频器中相乘。设器件电阻以频率 $\omega_m$ 小幅度调制，进入混频器前的信号为

$$
V_{\mathrm{ref}}=V_{\mathrm{in}}\left[\Gamma_0+\Delta\Gamma\cos\omega_m t\right]\cos\omega_0 t+n(t).
$$

与 $\cos\omega_0 t$ 相乘并利用 $\cos^2\omega_0 t=(1+\cos 2\omega_0 t)/2$ 展开，各项集中在 $\omega_m$ 与 $2\omega_0\pm\omega_m$ 两个频段；由于 $\omega_0\gg\omega_m$，低通滤波器滤除 $2\omega_0$ 附近的分量后，基带输出

$$
V_d=\frac{1}{2}V_{\mathrm{in}}\,\Delta\Gamma\cos\omega_m t
$$

正比于 $\Delta\Gamma$，即实时复现了器件电阻的变化。若 LO 与载波存在相位差，同样的解调把幅度信息分到同相（$I$）与正交（$Q$）两路，可同时读出 $|\Gamma|$ 与相位 $\phi=\arg\Gamma$。

### 电阻感应与电容（色散）感应

被测阻抗的变化分两类：

- **电阻变化**（RF-SET/RF-QPC）：谐振频率 $f_R$ 不变，只改变谐振谷的深度与相位跳变的锐度；
- **电容变化**（[[readout-measurement/gate-based-sensing|栅极射频传感]]）：量子点的量子电容或隧穿电容改变总电容，谐振谷位置移动、相位 $\phi=\arg\Gamma$ 偏转，属色散型响应，与[[readout-measurement/dispersive-readout|色散读出]]共享同一物理图像。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 传输线特性阻抗 $Z_0$ | $50\ \Omega$ | 射频标准 |
| 传感器灵敏区电阻 | $R_{\mathrm{QPC}}\gtrsim 50\ \mathrm{k\Omega}$（$G<0.5\,e^2/h$）；量子点电阻 $\sim h/e^2\approx 25.8\ \mathrm{k\Omega}$；Si-MOS SET 可达数百 k$\Omega$–M$\Omega$ | ； |
| 直流引线电容 | $\sim 100$–$600\ \mathrm{pF}$（$174\ \mathrm{pF/m}$ 同轴线） | ； |
| 直流测量带宽 $f_{RC}$ | $\sim 30\ \mathrm{kHz}$ | ； |
| 片上寄生电容 $C_p$ | GaAs $0.3$–$1\ \mathrm{pF}$；石墨烯 $4$–$6\ \mathrm{pF}$（个别 $>30\ \mathrm{pF}$） | |
| 贴片电感 $L$ | $500$–$1000\ \mathrm{nH}$（常用 $820\ \mathrm{nH}$） | |
| 谐振频率 $f_R$ | $70$–$400\ \mathrm{MHz}$（GaAs 实测 $193.8\ \mathrm{MHz}$） | |
| 探测带宽 | 数 MHz（GaAs RF-QPC $2.5\ \mathrm{MHz}$；石墨烯 $7.5\ \mathrm{MHz}$；RF-DGS $1.5\ \mathrm{MHz}$） | |
| 电导灵敏度 | $1.4\times10^{-5}\ e^2/h/\sqrt{\mathrm{Hz}}$（GaAs RF-QPC） | |
| 电荷灵敏度 | $4.7\times10^{-4}\ e/\sqrt{\mathrm{Hz}}$（GaAs RF-QPC）；经典实验范围 $10^{-6}$–$10^{-3}\ e/\sqrt{\mathrm{Hz}}$ | |
| 读出保真度 | $99.86\%$（积分 $140\ \mathrm{ns}$，带宽 $>2\ \mathrm{MHz}$，Si-MOS 劈裂栅） | |

 附录 B 汇总了经典射频反射实验的参数对比：谐振频率从 $205\ \mathrm{MHz}$（RF-QPC）到 $1091\ \mathrm{MHz}$（RF-SET），带宽 $1$–$20\ \mathrm{MHz}$，最优电荷灵敏度 $3.2\times10^{-6}\ e/\sqrt{\mathrm{Hz}}$（Schoelkopf 的 RF-SET）。

## 实验实现与特征

### 信号链

典型稀释制冷机中的反射链路：射频源输出经定向耦合器分两路——一路直达混频器 LO 端作参考；另一路经射频开关、滤波与约 $36\ \mathrm{dB}$ 的冷端衰减后，经装在混合腔冷盘上的定向耦合器到达样品端 tank 电路。反射波从耦合器直通端引出，先后经 4 K 冷盘上的低温放大器（约 $40\ \mathrm{dB}$ 增益，如工作于 $0.1$–$2\ \mathrm{GHz}$ 的 HEMT 放大器）与室温放大器（约 $55\ \mathrm{dB}$），再进混频器 RF 端解调，最后经低通滤波与电压前放（SR560，10–50 倍）由示波器或采集卡读取。样品板上用 T 型偏置器（bias tee）把射频与直流/低频线合到同一电极，反射端常接约 $100\ \mathrm{pF}$ 电容到地为载波提供回路。低温放大器额定功耗约 $0.5\ \mathrm{W}$，会把二级冷盘温度抬高约 1 K，是链路设计中的实际约束。

### 标定流程

1. **找谐振**：不接解调电路，用网络分析仪扫 $S_{11}$，调节传感器栅压观察谐振谷位置与深度随电阻的变化，确定 $f_R$ 与最佳匹配工作点；由 $f_R$ 与已知 $L$ 反推 $C_p$（如 $L=820\ \mathrm{nH}$、$f_0=193.8\ \mathrm{MHz}$ 得 $C_p=0.82\ \mathrm{pF}$）。
2. **对照验证**：同时记录解调电压 $V_{\mathrm{rf}}$ 与传统输运电流 $I_{\mathrm{QPC}}$，扫描直接及非直接耦合的栅极，确认两者峰位一一对应，证明射频信号确实载有量子点电荷态信息。
3. **边带标定**：在栅极上叠加已知幅度的正弦/方波调制（如 $1\ \mathrm{MHz}$、$10\ \mathrm{mV}$），用频谱仪（分辨带宽 $10\ \mathrm{kHz}$）测载波两侧边带的信噪比（典型 $26\ \mathrm{dB}$），结合独立测得的电导变化量代入灵敏度公式；扫描调制频率直至边带跌落 $3\ \mathrm{dB}$，即得探测带宽。

### 三种接法

- **RF-SET / RF-QPC**：把 SET 或 QPC 的源漏电阻接入匹配网络，感知邻近量子点的电荷态，是最成熟的方案；
- **RF-DGS / 栅极射频传感**：匹配网络直接挂到量子点的某个栅极上，读取该栅看到的复导纳（含量子电容），可在电路中串入变容二极管（varactor）使谐振频率电可调（如 $L=680\ \mathrm{nH}$ 加变容二极管），省去专用传感器，利于[[scaling-automation/quantum-dot-array|量子点阵列]]扩展；缺点是灵敏响应区域窄；
- **腔读出**：把量子点嵌入高品质因子的[[circuit-qed/microwave-resonator|微波谐振腔]]（或[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]），读取腔的频移与损耗，与电路量子电动力学架构天然衔接。

### 已知限制

- **增强型器件的泄漏**：耗尽型 GaAs 中射频信号经欧姆接触的低阻通道直达 SET；而 Si-MOS、Si/SiGe 增强型器件中，二维电子气与引线栅极之间存在耦合电容 $C_g$——即使 $C_p$ 仅 $0.1\ \mathrm{pF}$，对 $100$–$200\ \mathrm{MHz}$ 载波其电抗也只有几 k$\Omega$，远小于 $R_{\mathrm{SET}}\sim 500\ \mathrm{k\Omega}$，载波大部经此低阻通道泄漏，$\Delta S_{11}$ 不足 $0.1\ \mathrm{dB}$。解法之一是采用劈裂栅（split-gate）射频架构并加入匹配电容，使离子注入区可远离 SET 中心 $150\ \mu\mathrm{m}$ 仍实现高保真读出。
- **回作用**：读出功率过大将加热电子、驱动跃迁或饱和放大器；射频载波对二能级系统的持续驱动引入动态耗散（可用 Sisyphus 电阻建模），会明显缩短样品的纵向弛豫时间 $T_1$。
- **互扰**：多个谐振器共用传输线时可能产生[[readout-measurement/readout-crosstalk|读出串扰]]；不同频率的谐振器挂同一根线做波分复用（wavelength-division multiplexing, WDM）是多通道并行读取的扩展路径。

<!-- FIGURE: 网络分析仪实测 S11 随传感器栅压的变化：谐振谷深度随电阻改变，匹配点附近最灵敏 -->

**反馈控制扩展动态范围**：RF 反射传感器的速度-范围权衡（高带宽测量时传感器易饱和）由反馈解决——闭环控制实时调整传感器偏置，跟踪被测电荷的大幅漂移而不饱和。动态范围扩展后，传感器在高速模式下也能覆盖从单电子到多电子的宽电荷范围。

![[assets/figures/rf-reflectometry/ce650aa6c9dd0e76545b66b3bd549f46ab66f689f5d0a4a4e729cc289d5c5efa.jpg]]

*反馈控制的 RF 传感器：闭环偏置调整跟踪电荷漂移——速度-范围权衡的反馈解法。图源：arXiv:2307.05077，Fig. 1。*

![[assets/figures/rf-reflectometry/f005a34cc70ff26c3f06896355c6e117b6d0f5569a4ae89f3959c067e0726b12.jpg]]

*动态范围扩展效果：开环 vs 闭环的可测电荷范围对比。图源：arXiv:2307.05077，Fig. 2。*

## 与其他概念的关系

- 被测对象通常是[[fundamentals/coulomb-blockade|库仑阻塞]]区边缘的单电子隧穿事件；射频读出的高速率使[[readout-measurement/single-shot-readout|单发读出]]与实时电荷态追踪成为可能，扫描双栅即可高速绘制[[fundamentals/charge-stability-diagram|电荷稳定图]]。
- 传感器本体见[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]；不用专用传感器、直接读栅极复导纳的变体见[[readout-measurement/gate-based-sensing|栅极射频传感]]；读取谐振腔频移的推广形式见[[readout-measurement/dispersive-readout|色散读出]]。
- 测量频率抬升到百 MHz 后避开了低频 $1/f$ [[materials-devices/charge-noise|电荷噪声]]区，链路噪声转而由首级低温放大器决定，进一步可用[[readout-measurement/parametric-amplifier|参量放大器]]逼近量子极限。
- 在[[materials-devices/silicon-mos|Si-MOS]] 与 Si/SiGe 增强型器件中，二维电子气（见[[fundamentals/two-dimensional-carrier-gas|二维载流子气]]）与栅极的耦合电容造成射频泄漏，是硅基射频读出的特有难题。
- 高带宽与频分复用能力是[[scaling-automation/quantum-dot-array|量子点阵列]]规模化读出的关键技术之一。


## 参考文献

- 射频反射测量在硅体系电荷/自旋读出中的应用：[[references/zwanenburg-2013|Zwanenburg et al., RMP 85, 961 (2013)]]、[[references/veldhorst-2015|Veldhorst et al., Nature 526, 410 (2015)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
