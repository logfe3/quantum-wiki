---
title: 约瑟夫森行波参量放大器
description: 把近千个 rf-SQUID 单元串成非线性传输线、靠行波混频在数 GHz 带宽内放大的器件；电流–相位关系的谐波权重是增益、带宽与稳定性之外的第三设计维度。
aliases:
 - JTWPA
 - Josephson traveling-wave parametric amplifier
 - 约瑟夫森行波放大器
 - 行波参量放大器
tags:
 - 读出与测量
 - 微波
 - 约瑟夫森结
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvehdta8pg92txh39j2v31
source_updated: 2026-09-15T20:26:43Z
---

<div class="entry-lead">谐振式 [[readout-measurement/parametric-amplifier|参量放大器]]（JPA/IMPA）的带宽被谐振腔卡死在数百 MHz 量级；把非线性元件从"一只腔"摊开成"一条线"——近千个 rf-SQUID 单元串接成的离散传输线——泵浦与信号边走边混频，就得到带宽数 GHz 的约瑟夫森行波参量放大器（JTWPA）。除了色散工程这条传统设计轴线，Guarcello 等人 2025 年的数值研究指出了第三个旋钮：约瑟夫森结**电流–相位关系（CPR）的谐波权重**。让 CPR 偏离纯正弦、带上二次谐波项，不仅能在零偏置下诱生三波混频，还把器件推入"高增益 ↔ 混沌失稳"的竞争区——最优权重 $J_{c_2}\approx-0.6$ 时，无需任何色散工程即可获得约 13 dB 增益。</div>

## 器件结构：990 单元的非线性传输线

JTWPA 的基本单元是一个对地电容 $C_{g}$ 与一个串联 rf-SQUID（约瑟夫森结与电感 $L_g$ 并联）构成的 LC 网络，把 $N$ 个这样的单元首尾相接就得到离散非线性传输线。Guarcello 等人按 DARTWARS 合作的设计参数建模：990 个单元、$C_g=24\ \mathrm{fF}$、$L_g=120\ \mathrm{pH}$、结电容 $C_J=200\ \mathrm{fF}$、结电阻 $R_J=20\ \mathrm{k\Omega}$，源端内阻与负载均为 $50\ \Omega$。泵浦与信号电压从源端注入，放大后的信号在负载端 $V_\mathrm{out}$ 上读出。每个结的电流用 RCSJ（电阻电容分路结）模型描述：

$$
I_{J,n}=C_J\frac{\hbar}{2e}\frac{d^2\varphi_n}{dt^2}+\frac{1}{R_J}\frac{\hbar}{2e}\frac{d\varphi_n}{dt}+I(\varphi_n)
$$

其中 $\varphi_n$ 是第 $n$ 个结的超导相位差，$C_J\frac{\hbar}{2e}\ddot{\varphi}_n$ 是结电容的位移电流项、$\frac{1}{R_J}\frac{\hbar}{2e}\dot{\varphi}_n$ 是准粒子耗散项，$I(\varphi_n)$ 是无耗散的约瑟夫森超流。整条线是 990 个耦合非线性微分方程，用三对角隐式有限差分法数值求解。

## 二次谐波 CPR：从正弦到非平庸基态

传统 JTWPA 设计假设结的 CPR 是纯正弦的 $I=I_c\sin\varphi$。但铁磁势垒结、半导体结、石墨烯结和非常规超导结中，高次谐波真实存在。本文研究的 CPR 带**二次谐波项**：

$$
I(\varphi)=J_{c_1}\sin\varphi+J_{c_2}\sin 2\varphi,\qquad
U(\varphi)=-J_{c_1}\cos\varphi-\frac{J_{c_2}}{2}\cos 2\varphi
$$

其中 $J_{c_1}$、$J_{c_2}$ 分别是一次、二次谐波的权重（归一化电流幅度），$U(\varphi)$ 是对应的约瑟夫森势能。基态相位 $\widetilde{\varphi}$ 由 $\partial U/\partial\varphi=0$ 决定：

$$
\sin\widetilde{\varphi}=0\qquad\text{或}\qquad\cos\widetilde{\varphi}=-\frac{1}{2g},\qquad g\equiv\frac{J_{c_2}}{J_{c_1}}
$$

$g$ 是二次与一次谐波权重之比。当 $|g|<1/2$ 时基态只能是 $\widetilde{\varphi}=0$（$J_{c_1}>0$）或 $\pi$（$J_{c_1}<0$）；当 $|g|\geq 1/2$ 且 $J_{c_2}<0$ 时出现**非平庸基态** $\widetilde{\varphi}=\pm\arccos(1/2g)$——势能极小点偏离 $\varphi=0$，结"天生"工作在一个偏置相位上。把 $\widetilde{\varphi}(J_{c_1},J_{c_2})$ 画成图就得到基态相位图，它是读全篇结果的地图。

![[assets/figures/josephson-traveling-wave-amplifier/guarcello2025-fig1b-ground-state-map.jpg]]
*基态相位图 $\widetilde{\varphi}(J_{c_1},J_{c_2})$：横纵坐标为两个谐波权重，颜色编码基态相位；$|g|\geq1/2$ 且 $J_{c_2}<0$ 的区域出现偏离 0/π 的非平庸基态。图源：Guarcello et al. (2025), Fig. 1(b)。*

![[assets/figures/josephson-traveling-wave-amplifier/guarcello2025-fig1cd-cpr-energy.jpg]]
*$(J_{c_1},J_{c_2})=(1,-0.6)$ 处的电流–相位关系 $I(\varphi)$ 与约瑟夫森势能 $U(\varphi)$：势能极小点明显偏离 $\varphi=0$，对应非平庸基态相位。图源：Guarcello et al. (2025), Fig. 1(c)(d)。*

小相位展开进一步揭示两个特殊点。归一化电流在小 $\varphi$ 下满足

$$
\gamma(\varphi,g)\simeq(1+2g)\,\varphi-(1+8g)\,\varphi^3
$$

其中 $\varphi$ 是相对基态的相位偏移、$g=J_{c_2}/J_{c_1}$。一阶（线性电感）系数在 $g=-1/2$、三阶（非线性）系数在 $g=-1/8$ 处分别变号——这两点标记了器件行为的突变边界，与数值增益图上的转折一致。

## 增益、闲频与三波/四波混频的共存

输出信号的傅里叶谱给出增益定义：

$$
\mathrm{Gain}=20\log_{10}\!\left[\frac{V_\mathrm{out}(\nu_\mathrm{sign})}{V_\mathrm{sign}}\right]
$$

其中 $V_\mathrm{out}(\nu_\mathrm{sign})$ 是负载端信号频率分量幅度、$V_\mathrm{sign}$ 是注入信号幅度。在 $\nu_\mathrm{pump}=7\ \mathrm{GHz}$、$\nu_\mathrm{sign}=6\ \mathrm{GHz}$、$J_{c_2}=-0.6$ 的代表性工作点，谱图上同时出现两个闲频：四波混频（4WM）闲频 $\nu_\mathrm{idle}=2\nu_\mathrm{pump}-\nu_\mathrm{sign}=8\ \mathrm{GHz}$，以及**三波混频（3WM）闲频 $\nu_\mathrm{idle}=\nu_\mathrm{pump}-\nu_\mathrm{sign}=1\ \mathrm{GHz}$**。后者尤其值得注意：3WM 通常需要直流偏置或磁通偏置才能出现，而这里偏置电流为零，3WM 完全由 CPR 的二次谐波项诱生——非正弦 CPR 本身就扮演了"内建偏置"的角色。

![[assets/figures/josephson-traveling-wave-amplifier/guarcello2025-fig2-gain-phase-space.jpg]]
*泵浦功率扫描的完整诊断（$J_{c_2}=-0.6$，$\nu_\mathrm{pump}=7$ GHz、$\nu_\mathrm{sign}=6$ GHz）：(a) $P_\mathrm{pump}=-63.5$ dBm 时输出谱，红/橙虚线为泵浦/信号频率，青/蓝点划线为 4WM/3WM 闲频；(b) 增益随泵浦功率的变化，低功率区即达约 13 dB；(c) 傅里叶谱图；(d) 相空间肖像 $V'_\mathrm{out}$–$V_\mathrm{out}$；(e) Poincaré 截面均值与标准差。图源：Guarcello et al. (2025), Fig. 2。*

## 稳定性判据：增益–混沌竞争

泵浦功率升高时器件依次经历三个区：(i) $P_\mathrm{pump}\lesssim-62.5\ \mathrm{dBm}$ 增益（非单调）升至 13 dB 以上；(ii) 中间区增益平滑回升；(iii) $P_\mathrm{pump}\gtrsim-59.5\ \mathrm{dBm}$ 增益点剧烈散开——**混沌响应**的标志，傅里叶谱也随之展宽为连续背景。稳定性可以用 Poincaré 截面定量判别：在相空间肖像上取 $V_\mathrm{out}=0$ 的穿越点集，其 $V'_\mathrm{out}$ 分布的标准差

$$
\sigma_{V'_\mathrm{PS}}\ll 0.01\ \text{（稳定周期轨道）}\qquad\text{vs.}\qquad \sigma_{V'_\mathrm{PS}}\gtrsim 0.01\ \text{（混沌转变）}
$$

点集凝聚成簇意味着稳定的周期轨道，弥散则对应混沌。把 $(P_\mathrm{pump},J_{c_2})$ 参数平面上的增益图与 $\sigma_{V'_\mathrm{PS}}$ 图叠起来看，结论是：$J_{c_2}>0$ 时增益对谐波权重不敏感；$J_{c_2}<0$ 时增益显著抬升、在 $J_{c_2}\approx-0.6$ 附近达到最大（约 13 dB，无色散工程），但器件同时更易混沌、稳定泵浦区间变窄；**最宽的稳定泵浦范围出现在 $J_{c_2}\approx-0.15$**。高增益与高稳定性在参数空间里互相争地盘——CPR 谐波权重是权衡两者的设计旋钮。

![[assets/figures/josephson-traveling-wave-amplifier/guarcello2025-fig3a-gain-map.jpg]]
*增益图 $\mathrm{Gain}(P_\mathrm{pump},J_{c_2})$：横轴泵浦功率、纵轴二次谐波权重，颜色为信号增益，红色区域为混沌响应；白色虚线标记 $J_{c_2}=-0.6$（增益最优），$J_{c_2}<0$ 侧增益更高但混沌区逼近。图源：Guarcello et al. (2025), Fig. 3(a)。*

## 大信号建模：SDD 黑盒元件与谐波平衡

上述 CPR 谐波工程用的是时域瞬态有限差分，另一条互补路线是 Shiri 等人 2024 年教程系统展示的**谐波平衡（harmonic balance, HB）大信号仿真**：把电路拆成线性与非线性两个子电路，线性部分在频域用导纳/阻抗表示，非线性部分在时域求解，再在公共端口上按各次谐波做"平衡"匹配。非线性元件本身用 Keysight ADS 的符号定义器件（symbolically defined device, SDD）实现"黑盒"数学布线——直接由约瑟夫森关系 $I=I_c\sin\varphi$、$\dot\varphi = 2eV/\hbar$ 写出端口方程，相位由对电压积分（频域 $1/j\omega$ 权重）产生，**不需要对约瑟夫森势能做多项式展开，也不需要预设非线性强度或泵浦性质**——这是与耦合模理论、输入输出理论等解析路线（通常只保留泰勒展开首项、假设经典泵浦不耗尽）的本质区别。

大信号与小信号的差异可以用单个单元（约瑟夫森结 + 对地电容）的输入阻抗说明：输入功率 $P_{\mathrm{in}}=-140\ \mathrm{dBm}$ 时 HB 结果与线性 S 参数分析完全重合；功率升到 $-80\ \mathrm{dBm}$ 后两者明显偏离——线性分析对强非线性电路失效，必须用 HB。HB 收敛依赖**瞬态辅助谐波平衡（TAHB）**：先跑瞬态仿真确认电路达稳态的时刻（例如 2000 结 JJ-TWPA 中泵浦波传过全链耗时 $t_d=11.7\ \mathrm{ns}$，稳态判据取 $t>40\ \mathrm{ns}$），再以该时域解作为 HB 初值。量化噪声时还需配合 X 参数方法或全量子模型——HB 本身只覆盖经典动力学。

## SNAIL-TWPA：磁通偏置切换三波/四波混频

**SNAIL**（superconducting nonlinear asymmetric inductance element，SNAIL-13 指一支路上 1 个结、另一支路 3 个结）是不对称 SQUID 的推广：两支路临界电流满足 $I_{c1}=\alpha I_{c2}$，环路相位条件自动保证磁通量子化（对称 SQUID 即 $N=1$、$\alpha=1$ 的特例）。把 SNAIL 势能对相位展开，$\phi^3$ 项与 $\phi^4$ 项分别对应三波与四波混频强度——**磁通偏置是切换两者的旋钮**：零偏置时 4WM 主导、输出谱只含奇次谐波；偏置到最优磁通 $F=\Phi/\Phi_0=0.4$ 时 4WM 被抑制、3WM 主导，偶次谐波随之出现。与 4WM 相比，3WM 的泵浦频率总是位于增益谱之上且在谱外，强泵浦不会意外激发频谱内的量子比特——这是 SNAIL-TWPA 相对 JJ-TWPA 的关键优势。

![[assets/figures/josephson-traveling-wave-amplifier/shiri2024-fig12-snail-twpa-flux-harmonics.jpg]]
*磁通偏置对混频过程的切换：440 单元 SNAIL-TWPA 在 8.5 GHz、$I_p=100\ \mathrm{nA}$ 单音泵浦下的输出谱。红色（$\Phi/\Phi_0=0$）只有奇次谐波——4WM 主导；蓝色（$\Phi/\Phi_0=0.4$）偶次谐波同时出现——3WM 主导。图源：Shiri et al. (2024), Fig. 12。*

对 440 单元、单元含 SNAIL-13（$I_{c1}=3\ \mu\mathrm{A}$、$C_{j1}=8.2\ \mathrm{fF}$、$\alpha=1/3.75$）与 $C=150\ \mathrm{fF}$ 对地电容的 SNAIL-TWPA，HB 仿真的增益谱与实测（泵浦 $f_p=8.5\ \mathrm{GHz}$、输入泵浦功率 $-97\ \mathrm{dBm}$、信号幅度小于泵浦千分之一）定量吻合，验证了 SDD+HB 路线的可靠性；增益谱上的纹波来自输入输出端阻抗失配造成的多次反射，可用法布里–珀罗腔模型复现，并用混合耦合器/双工器压制。磁通从 $0.40\Phi_0$ 调到 $0.45\Phi_0$ 会增大 SNAIL 电感、压低截止频率——设计时每个磁通点都要重调电容以维持 50 Ω 匹配。

![[assets/figures/josephson-traveling-wave-amplifier/shiri2024-fig14-snail-twpa-gain-spectrum.jpg]]
*440 单元 SNAIL-TWPA 的增益谱：蓝线为实测、黄线为 HB 仿真（泵浦 8.5 GHz，实验输入泵浦功率 $-97\ \mathrm{dBm}$，仿真信号电流取泵浦的 1/1000）。如 3WM 预期，泵浦位于增益谱高端之外；谱纹波源于端口阻抗失配的多次反射。图源：Shiri et al. (2024), Fig. 14。*增益纹波与环境的耦合并非 TWPA 独有：谐振式 JPA 与环形器失配构成的有效法布里–珀罗腔同样产生纹波并可用输入输出模型定量整形（平顶宽带增益），见[[readout-measurement/parametric-amplifier|参量放大器]]的"环境法布里–珀罗干涉"一节——两类器件的纹波诊断与相位建模共用同一套物理。

## 泵浦谐波间的功率交换：耦合模方程

强泵浦在传输线内自生成高次谐波，谐波间相互混频并交换功率，是 3WM 行波放大器增益受损的主要机制。把相位波方程的试解写为各次泵浦谐波之和，可得到把第 $m$ 次谐波与上下各次谐波耦合起来的**重标度耦合模方程**

$$
\frac{d a_{m}}{d \xi} = m \left(\sum_{n=m+1}^{M} a_{n} a_{n-m}^{*}\, \mathrm{e}^{i\mu \xi d_{n,m}} - \frac{1}{2}\sum_{n=1}^{m-1} a_{n} a_{m-n}\, \mathrm{e}^{-i\mu \xi d_{n,m}}\right)
$$

其中 $a_m = m A_m(x)/A_1(0)$ 是第 $m$ 次谐波的归一化幅度（$A_1(0)$ 为输入端泵浦基波幅度），$\xi(x) = c_3\omega_1^2 A_1(0) x / (4a\omega_0^2)$ 是**有效传播长度**（$c_3$ 是势能展开中的三波混频系数、$a$ 是单元物理长度、$\omega_0=1/\sqrt{LC}$ 是单元谐振频率），$\mu = (k_2-2k_1)/[c_3\omega_1^2 A_1(0)/(4a\omega_0^2)]$ 是**有效相位失配**（$k_1$、$k_2$ 为一、二次谐波波数），$d_{m,n}=\tfrac12 mn(m-n)$ 是数值因子。最简单的 $M=2$、完全相位匹配（$\mu=0$）情形有解析解 $a_1(\xi)=\mathrm{sech}(\xi)$、$a_2(\xi)=\tanh(\xi)$：基波功率沿传播方向转化为二次谐波，在**频率转换距离** $\xi=1$ 处两者相当，全程满足功率守恒 $|a_1|^2+|a_2|^2=1$——这就是非线性光学中熟知的二次谐波生成（SHG）。在 SNAIL-13（$I_{c1}=2.53\ \mu\mathrm{A}$、$I_{c2}=1.26\ \mu\mathrm{A}$、$C_{\mathrm{SNAIL}}=25\ \mathrm{fF}$、$C_0=159\ \mathrm{fF}$、偏置 $0.45\Phi_0$、$c_3=1.11$）上，HB 仿真与耦合模方程数值解在五个谐波的功率交换上定量一致，且 HB 天然给出全部谐波沿线的振荡细节（二次谐波功率约每 40 个单元、即约 $40\times15\ \mu\mathrm{m}$ 振荡一次）；增大泵浦功率或泵浦频率会加快交换振荡。设计启示：在色散中为泵浦二次谐波开一个**阻带（带隙）**即可切断谐波间的耦合链，实验上确实带来了增益提升——这与本词条上文的共振相位匹配（RPM）、CPR 谐波工程同属"色散/非线性整形"工具箱。

![[assets/figures/josephson-traveling-wave-amplifier/shiri2024-fig16-pump-harmonic-power-exchange.jpg]]
*泵浦前五次谐波在 100 单元 SNAIL-TWPA 中的功率交换（$f_p=10\ \mathrm{GHz}$、$I_p=400\ \mathrm{nA}$、$F=0.45$）：实线为 HB 仿真、虚线为耦合模方程（Eq. 13）数值解，两者定量一致；二次谐波功率约每 40 个单元完成一次交换振荡。在二次谐波处设置带隙切断该交换是已验证的增益提升手段。图源：Shiri et al. (2024), Fig. 16。*

低功率区还有一条干净的自检规律：输出端各次谐波功率随输入泵浦功率的斜率比为 $1:2:3$——非线性转移函数 $y=y_0+ax+bx^2+cx^3+\cdots$ 的直接指纹，可用于检验模型与测量的一致性。

## 设计语境与适用边界

- **与色散工程互补**：常规 JTWPA 用共振相位匹配（周期性嵌入 LC 谐振器）抵消相位失配；CPR 谐波工程提供了不改动传输线几何的另一条路线，13 dB 增益在**无色散工程**前提下获得。
- **归一化 CPR 才是自变量**：数值扫描固定临界电流 $I_c=2\ \mu\mathrm{A}$、只变归一化 CPR 形状 $i(\varphi,g)$，从而把增益变化归因于 CPR 形状而非临界电流（后者会同时改变等离子体频率与结电感、引入负载失配）。
- **边界条件重要**：负载匹配的边界条件会显著影响传输线动力学、甚至抑制混沌——这是约瑟夫森传输线模拟的已知共性。
- **简化假设**：模型未含硅能带谷轨道态等复杂效应，且假定结参数完全一致；实际器件的结间涨落会进一步压缩稳定区。

## 与其他概念的关系

- [[readout-measurement/parametric-amplifier|参量放大器]]：JTWPA 是其行波分支——用"一条线"换取谐振式 JPA/IMPA 拿不到的 GHz 级带宽与高饱和功率，代价是工艺复杂与对结均一性的苛刻要求；本文补充的 CPR 谐波权重是该家族的新设计维度。谐振式 JPA 一侧的高阶 Kerr 修正对量子效率与压缩的定量限制（以及用结阵列稀释非线性的对策）见该词条"高阶非线性修正"一节——同样的非线性稀释思路也适用于行波器件的单元设计。
- [[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]与[[circuit-qed/superinductance|超电感与约瑟夫森结阵列]]：同属"用约瑟夫森非线性电感构建微波电路"的家族，区别在于 SQUID 阵列做谐振式高阻抗腔、JTWPA 把同样的非线性摊成分布式传输线。
- [[readout-measurement/rf-reflectometry|射频反射测量]]：JTWPA 作为首级近量子极限放大器嵌入反射读出链，把 HEMT 噪声贡献压到可忽略。
- [[scaling-automation/cryo-electronics|低温电子学]]：JTWPA 是稀释制冷机读出链中 HEMT 之前的低温第一级候选，多比特频分复用读出依赖其宽带增益。
- [[readout-measurement/dispersive-readout|色散读出]]：数 GHz 增益带宽让一台 JTWPA 同时服务整条多腔总线的频分复用读出。
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]：动力学电感行波放大器（KTWPA）与本词条器件共用"非线性电感摊开成线"的思路，只是非线性来自超导薄膜而非约瑟夫森结。

## 参考文献

- Shiri, D., Nilsson, H. R., Telluri, P., Fadavi Roudsari, A., Shumeiko, V., Fager, C., Delsing, P. Modeling and Harmonic Balance Analysis of Parametric Amplifiers for Qubit Read-out. *IEEE Microwave Magazine* (2024). DOI: 10.1109/mmm.2024.3429141；arXiv:2306.05177（QAtlas 缓存：2306.05177）。
- Guarcello, C., Barone, C., Carapella, G., Filatrella, G., Giachero, A., Pagano, S. Effect of a 2nd-harmonic current–phase relation on the behavior of a Josephson Traveling Wave Parametric Amplifier. *Applied Physics Letters* (2025). DOI: 10.1063/5.0262555；arXiv:2502.00804（QAtlas 缓存：2502.00804）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
