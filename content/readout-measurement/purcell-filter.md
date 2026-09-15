---
title: Purcell 滤波器
description: 在读出频率保持传输、同时抑制量子比特经读出端口辐射弛豫的微波滤波结构。
aliases:
 - Purcell filter
 - 珀塞尔滤波器
 - Purcell 带阻滤波器
tags:
 - 读出与测量
 - 微波滤波
date: 2026-09-08
---

<div class="entry-lead">想加快色散读出，往往要增大谐振腔线宽；但开放的腔也给量子比特提供更强的辐射逃逸通道。Purcell 滤波器在两个目标之间"开一扇频率选择的门"。</div>

## 物理图像

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（cQED）架构中，量子比特与读出谐振腔处于强耦合，这既使[[readout-measurement/dispersive-readout|色散读出]]成为可能，也为比特提供了一条额外的耗散通道：比特激发可以"漏"进腔再辐射到外部环境，导致能量弛豫时间 $T_1$ 下降。这一效应由 E. M. Purcell 于 1946 年描述量子化系统与谐振腔耦合时首次提出，故称 Purcell 效应（Purcell effect），引起的附加弛豫速率称为 Purcell 速率（Purcell rate）。

原则上，减小腔耗散率 $\kappa_r$ 或增大比特–腔失谐 $\Delta$ 都能压低 Purcell 速率，但这与快速高保真度读出的要求直接冲突：快读要求腔线宽大（光子进出腔快）、色散频移 $\chi$ 大（信噪比随 $\chi$、$\kappa$ 增长），而这恰恰使 Purcell 弛豫变强。Purcell 滤波器（Purcell filter）正是为打破这一矛盾而引入的附加滤波电路：它让读出谐振频率附近的微波顺利通过到达放大链，同时在比特频率附近制造阻带或阻抗零点，降低比特经读出端口的自发辐射。它不是简单地把整条读出线"关小"——否则读出同样会变慢——而是利用比特与腔之间天然的频率间隔（通常数 GHz）做频率选择性隔离。

<!-- FIGURE: Purcell 滤波器工作示意：横轴频率，读出腔通带（约 7 GHz）处传输接近无损，比特频段（约 4–5 GHz）处为阻带，标注隔离度与保护带宽 -->

## 理论模型

### 色散耦合下的 Purcell 耗散

比特与腔处于色散耦合区时，系统由[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 哈密顿量]]描述，可用缀饰态（dressed state）双重态对角化。在单激发子空间，比特激发态对应的本征态为

$$
\widetilde{|0,e\rangle}\simeq|0,e\rangle-\frac{g}{\Delta}|1,g\rangle
$$

即比特激发态中混入了比例为 $g/\Delta$ 的"单光子 + 比特基态"成分。腔内光子以速率 $\kappa_r$ 经耦合电容泄漏到环境，这部分光子成分随之弛豫，等效于比特以 Purcell 速率弛豫：

$$
\gamma^{\mathrm{Purcell}}=\kappa_r\left|\langle 0,g|\,a\,\widetilde{|0,e\rangle}\right|^2\simeq\kappa_r\frac{g^2}{\Delta^2}.
$$

对[[superconducting-qubits/transmon-qubit|transmon]]比特，用色散频移 $\chi=g^2\alpha/[\Delta(\Delta+\alpha)]\simeq g^2\alpha/\Delta^2$（$\alpha$ 为非谐性）消去 $g$、$\Delta$，并折算到以赫兹计的频率单位，得

$$
T_1^{\mathrm{Purcell}}=\frac{2\pi\Delta^2}{\kappa g^2}\simeq\frac{2\pi\alpha}{\kappa\chi}.
$$

要求 Purcell 弛豫不显著缩短比特寿命（如 $T_1^{\mathrm{Purcell}}\geqslant 2T_1$），即给出读出参数的"Purcell 极限"约束

$$
\kappa|\chi|\leqslant\frac{\pi|\alpha|}{T_1}.
$$

没有滤波器时，信噪比随 $\chi$、$\kappa$ 增大，参数优化必然撞上这条边界，有效参数空间被压缩到很小；而合适的 Purcell 滤波器可使该限制不复存在，让读出速度逼近色散极限。

### 电路表述：由环境阻抗决定的弛豫

更一般地，把比特近似为并联于外部电路的非线性振子（Duffing 谐振子），其经外部电路的弛豫率由比特看到的端口导纳决定：

$$
\gamma^{\mathrm{Purcell}}=\frac{2\pi\,\mathrm{Re}\left[Y_q(\omega_q)\right]}{C_q}
$$

其中 $C_q$ 为比特自电容，$Y_q$ 为比特节点看向环境的导纳；等价地 $T_1=C_q/\mathrm{Re}[Y(\omega_q)]$（角频率与频率约定仅差 $2\pi$ 因子）。因此保护比特的问题被转化为微波工程问题：在比特频率处压低 $\mathrm{Re}[Y_q]$。对"比特–腔–滤波器–环境"级联做网络阻抗分析，可得

$$
\gamma^{\mathrm{Purcell}}\simeq\kappa_r\frac{g^2}{\Delta^2}\
\frac{\mathrm{Re}\left[Z_{\mathrm{ext}}(\omega_q)\right]}{\mathrm{Re}\left[Z_{\mathrm{ext}}(\omega_r)\right]}
$$

近似条件为 $g,\kappa_r\ll|\Delta|\ll\omega_{q,r}$，$Z_{\mathrm{ext}}$ 为腔外部（含滤波器与 $50\ \Omega$ 环境）的等效阻抗。传统不带滤波器的 cQED 电路中 $\mathrm{Re}[Z_{\mathrm{ext}}(\omega_q)]=\mathrm{Re}[Z_{\mathrm{ext}}(\omega_r)]=R_L$，上式退化为 $\kappa_r g^2/\Delta^2$；滤波器的作用就是让阻抗比远小于 1。

### 开路 $\lambda/4$ 带阻滤波器

一段末端开路、长度 $\lambda/4$ 的无损共面波导传输线，输入阻抗为

$$
Z_{\mathrm{in}}(\omega)=iZ_F\tan\frac{\pi(\omega-\omega_F)}{2\omega_F}
$$

其中 $Z_F$ 为传输线特征阻抗，$\omega_F$ 为其谐振频率。谐振点附近它等效于一个串联 $RLC$ 电路（$L=Z_F\pi/4\omega_F$）；谐振点处 $Z_{\mathrm{in}}=0$。把它并在腔与环境之间，则 $Z_{\mathrm{ext}}$ 为 $Z_{\mathrm{in}}$ 与 $R_L$ 的并联，在 $\Delta_{q,r}=\omega_{q,r}-\omega_F\ll\omega_F$ 近似下，滤波器对 Purcell 耗散率的抑制比为

$$
\frac{\mathrm{Re}\left[Z_{\mathrm{ext}}(\omega_r)\right]}{\mathrm{Re}\left[Z_{\mathrm{ext}}(\omega_q)\right]}
\simeq\frac{\Delta_r^2}{\Delta_q^2}.
$$

可见当滤波器频率对准比特频率（$\omega_F=\omega_q$，即 $\Delta_q=0$）时，$Z_{\mathrm{in}}(\omega_q)=0$ 把环境阻抗短路，比特频率的光子被完全反射而不泄漏，理想情况下 Purcell 效应被完全抑制。定义抑制比达 100 倍的频率范围为保护带宽，则

$$
\Gamma_{100}=\frac{\Delta_r}{5};
$$

以 $\omega_r/2\pi=7\ \mathrm{GHz}$、$\omega_F/2\pi=5\ \mathrm{GHz}$ 为例，$\Gamma_{100}=400\ \mathrm{MHz}$，足以覆盖可调耦合架构中比特的频率调节范围。滤波器自身与环境的耦合品质因数 $Q_F=Z_F/R_L$：减小特征阻抗（共面波导中即增大中央导带线宽比）可降低 $Q_F$、增大带宽，也可并联多个滤波器进一步展宽保护带。

### 对读出谐振腔的反作用

滤波器不能只为比特服务，还必须不拖慢读出。理想情形 $\Delta_r\sim\omega_F$ 时，滤波器在腔频处阻抗趋于无穷大（相当于开路），对谐振腔几乎无影响。另一常见情形 $\Delta_r\ll\omega_F$ 时，滤波器在腔频附近等效为一个电感 $L_F$，网络变换后腔的等效耦合品质因数变为

$$
Q_{\mathrm{eff}}=Q_C\left(\frac{R_L}{Z_F}\right)^2\left(\frac{2\omega_F}{\pi\Delta_F}\right)^2
$$

其中 $Q_C$ 为无滤波器时腔的耦合 $Q$ 值，$\Delta_F=\omega_r-\omega_F$；等效耗散率 $\kappa_{\mathrm{eff}}=\omega_r/Q_{\mathrm{eff}}$。设计腔的外部耗散率本身常用公式 $\kappa_r=\omega_r^3 C_k^2 R_L Z_r$（$C_k$ 为腔与读出线的耦合电容，$Z_r$ 为腔特征阻抗）：谐振频率 7 GHz、$C_k=10\ \mathrm{fF}$ 对应耗散率约 3.4 MHz。对带通型滤波器（滤波器作为腔与环境之间的谐振模式），腔的有效线宽为

$$
\kappa_{\mathrm{eff}}=\frac{4Q_pJ^2}{\omega_p+4\delta_p^2Q_p^2/\omega_p}
$$

其中 $J$ 为滤波器与读取腔的耦合强度，$\omega_p$、$Q_p$ 为滤波器的设计频率与品质因数，$\delta_p$ 为两者的频率失谐。这使得读取腔可以采用更大的外部线宽而不牺牲对比特的保护——典型读取腔 $\kappa_{\mathrm{ext}}\sim2\pi\times3\ \mathrm{MHz}$，在 Purcell 滤波器贡献下可提升至 $\sim2\pi\times30\ \mathrm{MHz}$，腔与信号线的有效能量交换率提高约十倍。

## 参数与量级

| 量 | 典型值 | 说明 |
| --- | --- | --- |
| 读出腔频率 $\omega_r/2\pi$ | 约 7 GHz（如 7.316 GHz） | 仿真设计 |
| 比特频率 $\omega_q/2\pi$ | 4–5 GHz（如 4.6 GHz） | 与滤波器中心频率 4.65 GHz 对准 |
| 腔耦合电容 $C_k$ | 约 10 fF（仿真取 12.9 fF） | 对应腔耗散率数 MHz；拟合 $Q_C\approx2275$ |
| 比特–腔耦合电容 $C_g$ | 约 12 fF | 仿真参数 |
| Purcell 弛豫率 $\gamma_\kappa$ | $\sim2\pi\times10\ \mathrm{kHz}$（$\kappa(g/\Delta)^2$ 量级） | 对 transmon 的估计 |
| 保护带宽 $\Gamma_{100}$ | 400 MHz（$\omega_F/2\pi=5$ GHz 设计）；毫秒级 $T_1$ 保护带宽可达 1 GHz | |
| 隔离度 | $>20\ \mathrm{dB}$（带宽 $>1$ GHz，）；30 dB（阻抗变换线式，） | 实测 |
| 插入损耗 | 带通腔式 $<0.002\ \mathrm{dB}$（仿真）；阻抗变换线式 $<3\ \mathrm{dB}$（实测，最好近似无损） | |

## 实验特征与验证

Purcell 滤波器的仿真验证不能只算 $S$ 参数： 的做法是在电磁仿真中给比特节点设一个虚拟端口，断开后由该端口的反射系数 $S_{33}$ 提取比特看向环境的输入阻抗，代入 $T_1=1/\gamma^{\mathrm{Purcell}}$ 直接得到"仅考虑 Purcell 耗散"的比特寿命谱，从而把保护效果量化为 $T_1$ 上限随频率的曲线。仿真中发现两个需要规避的效应：滤波器与读出总线交点处特征阻抗失配会产生驻波，在 $S_{21}$ 谱上形成透射峰，若落在比特频段反而会增强 Purcell 效应，需通过选择节点间距（如 5.6–7.6 mm）把这些峰移出比特频段；滤波器中央导带线宽 $W$ 增大则保护带宽增大，$W=20\ \mu\mathrm{m}$、两滤波器长度差 $\delta l=0.5\ \mathrm{mm}$ 时毫秒保护带宽达 1 GHz，但 $|\delta l|$ 过大会显著降低 $T_1$ 峰值，故实用设计常取 $\delta l=0$。

实测方面，文献中的开路 $\lambda/4$ 带阻滤波器芯片（一条滤波器供线耦合 5 个读取谐振腔）第一轮测试 $S_{21}$ 谱紊乱，归因于滤波器与总线交点处电流大、磁场能量密度高，在地平面引起局域环流串扰；在附近地平面做密集跨结构引线键合（wire-bonding）后，测得比特频段与腔频段之间隔离度大于 20 dB 的带宽超过 1 GHz，与仿真相符。文献给出了两种替代实现：五段式阻抗变换线滤波器，单独成芯片接在量子芯片各信号通道入口，实测 5.8–6.8 GHz 导通带（放读取腔频率）与以 4.2 GHz 为中心隔离带之间隔离度达 30 dB、插损 $<3$ dB 且直流直通（可兼作 flux 控制线的低通滤波）；以及可与比特共芯片集成的半波长谐振腔式滤波器，实现 6.58 GHz 导通带、400 MHz 的 3 dB 带宽、5–6 GHz 内隔离度 $>20$ dB。配合屏蔽与滤波环境改造，transmon 平均 $T_1$ 从约 $0.6\ \mu\mathrm{s}$ 提高到 $5\ \mu\mathrm{s}$。此外，为每个读取腔配置独立的 Purcell 滤波器还能抑制多比特频分复用读取中的[[readout-measurement/readout-crosstalk|读取串扰]]。

## 带通与带阻的比较

文献中的 Purcell 滤波器多属带通型（短路 $\lambda/4$ 或 $\lambda/2$ 谐振器作为通带）：对比特频率的保护范围更大，但腔频附近通带一般只有约 200 MHz，限制了可频分复用挂载的读取腔数目；且输入端的串联电容使腔泄漏的信号 99.9% 从输出端流出（对称结构则有一半信号流回输入端而损失，降低测量量子效率）。文献提出的开路 $\lambda/4$ 带阻型方案对比特的保护范围相对较小，但腔频通带很宽、阻带内 Purcell 耗散率更低，适合比特频率调节范围有限（固定耦合样品约 1 GHz 以内、可调耦合样品仅数百 MHz）而需要大复用规模的架构；在该论文比较分析的 8 种等效电路设计中，还可以在带通方案的基础上于输入/输出端叠加带阻枝节，或在带阻方案上并联多个滤波器，以兼顾保护带宽、通带宽度与信号方向性。

## 本征滤波：不添加元件的耦合位置工程

外置滤波器增加器件复杂度与足印，多比特集成时是负担。**本征 Purcell 滤波**（intrinsic Purcell filter）走另一条路：不添加任何电路元件，仅利用读出谐振器自身**分布参量多模性质**——优化输出线与 $\lambda/2$ 谐振器的**耦合位置**，使谐振器的高次模式在比特频率处形成等效滤波。实测谐振器介导的比特衰减被抑制**超过两个量级**（带宽 600 MHz），并据此实现 **40 ns 读出（99.1% 保真度）+ 100 ns 无条件复位（残余激发 <1.7%）**——复位能力（把比特主动泵回基态）是快速算法循环的关键，此前外置滤波方案中较少覆盖。

![[assets/figures/purcell-filter/6a4e3bb2048ee9e724cb01af20c0d16aedc90bb0a798a60a08eb3cf4492515e4.jpg]]

*本征 Purcell 滤波器：transmon 耦合到半波长谐振器，输出线在优化位置耦合——谐振器的分布参量多模性质在比特频率处自动形成滤波，无需任何附加元件。图源：Sunada et al. (2022)，Fig. 1。*

![[assets/figures/purcell-filter/0914ef2b06d9d0a0816823b3d5b53e882314bdaeb74a65353d596bd3539477e3.jpg]]

*本征滤波的透射谱：外耦合率随频率的变化显示多模结构——通带（腔频附近）畅通、比特频率处强抑制，Purcell 衰减在 600 MHz 带宽内被压低两个量级以上。图源：Sunada et al. (2022)，Fig. 2。*

**本征滤波的多比特复用**：Spring 等人把本征滤波路线从单比特推进到多比特——读出腔线宽做到 **42 MHz**（"大线宽"极限），四比特**同时 56 ns 读出**、平均判给保真度 **99.77%**（最高单比特超 99.9%）。这是本征滤波（耦合位置工程）与频分复用的结合：不需要外置滤波器也不需要每腔独立滤波，单根读出线完成四比特快速高保真读出——与下文的宽带 4 极路线（单滤波器复用）构成多比特读出的两种极简方案。

![[assets/figures/purcell-filter/77ab7747e1814225efe34fb25d541c29caeaf18e977caac79bf4fc53c5845728.jpg]]

*本征滤波多比特读出构型：读出谐振器与滤波谐振器的总体布置（含辅助陷波滤波）——分布参量设计让同一根读出线支撑多比特频分复用，同时保持 Purcell 保护。图源：Spring et al. (2024)，Fig. 1(a)。*

![[assets/figures/purcell-filter/b17bb504bb21ac368c14649827cd372f0b6f375aa50c6ba6552f652a564c795f.jpg]]

*耦合 $\lambda/4$ 谐振器的分布电路模型：耦合元件与各谐振器的互连决定多模本征滤波的传输特性——大线宽（42 MHz）与 Purcell 抑制由同一组分布参数同时优化。图源：Spring et al. (2024)，Fig. 3(a)。*

## 宽带紧凑滤波：微波工程合成的 4 极设计

频分复用需要宽通带（多个读出腔都要落在通带内），而单极滤波器通带只有约 200 MHz；每腔独立滤波（第 18 轮 Heinsoo 方案）足印又太大。**4 极螺旋 CPW 滤波器**用微波工程的耦合谐振器滤波器合成（Chebyshev 多项式）解决这个矛盾：四个紧密排列的螺旋 CPW 谐振器经互感耦合，足印仅 **0.29 mm²**（transmon 量级）、实测通带 **794/915 MHz**（4.3 K，PF-C/PF-M 两种设计）、带外大衰减抑制 Purcell 损耗。按 $\kappa_r/2\pi=10$ MHz、腔间距 $10\kappa_r$ 的复用规则，单个滤波器可支撑 **7~9 个复用读出腔**——宽带单滤波复用与每腔独立滤波是两条互补的多比特路线。

![[assets/figures/purcell-filter/a091727b93e71c57d39e6dde2a30a9b682595dfbaea3a7828be5723fa81ab5fa.jpg]]

*4 极 Purcell 滤波器设计：四个直接电感耦合的螺旋 CPW 谐振器构成 Chebyshev 带通滤波——设计目标（中心频率、3 dB 带宽、带内波纹）由耦合系数 $M_{ij}$ 与外品质因子 $Q_e$ 直接综合。图源：Park et al. (2023)，Fig. 1(a)。*

![[assets/figures/purcell-filter/a85afdb2f88b49c8f7037a3b24c43bae7c2fb72680da6a4b0727a79628766ec8.jpg]]

*4.3 K 实测散射参数：PF-C 与 PF-M 两种设计的 $S_{21}$——通带 794/915 MHz（与仿真吻合），带外快速滚降提供 Purcell 保护；通带宽度决定可复用的读出腔数（7~9 个）。图源：Park et al. (2023)，Fig. 2。*

## 非线性滤波：器件端抗光子噪声

线性 Purcell 滤波器靠频选抑制比特经腔的能量弛豫，但对**残余腔光子引起的退相干**只有"抑制输入端噪声流入"一条对策。Sunada 等人提出并演示了**非线性 Purcell 滤波器**——透射系数依赖输入场幅度：读出脉冲（强）自动**收窄读出腔的有效线宽**，提升比特对输入场的灵敏度；而噪声光子（弱）感受到的仍是宽线宽的低灵敏度响应。器件实测：

- **噪声容限提升 3 倍**（相对线性滤波器件）——Hahn 回波退相干率对入射噪声功率的容忍度；
- **测量率再提升 3 倍**（利用非线性滤波器的分岔）——合计相对线性情形约 9 倍测量率增强；
- **40 ns 读出脉冲**实现 99.4% 读出保真度 + 99.2% QND 保真度。

这条"器件端"路线与"输入端"对策（滤波、衰减、隔离）互补：不需要牺牲读出带宽换取相干时间，是快速高保真读出与长相干兼得的关键工具。

![[assets/figures/purcell-filter/ddf5ce2eafea7a069a51f5c7f866c859672f5b6471673dbacede05938464a0dc.jpg]]

*非线性 Purcell 滤波器抑制光子噪声诱导退相干的原理：强读出脉冲使滤波器进入非线性区、收窄读出腔有效线宽（灵敏度↑），弱噪声光子则感受宽线宽（灵敏度↓）——同一器件对信号与噪声的不同响应。图源：Sunada et al. (2024)，Fig. 1。*

![[assets/figures/purcell-filter/53f0a04b6214c315d098cff8e8bf4bd6971bcfe1fd1c2de79b1bd81094cdc88e.jpg]]

*非线性 Purcell 滤波器件：含非线性滤波器的读出链芯片照片——读出谐振器经非线性元件接到测量线，实现幅值依赖的透射。图源：Sunada et al. (2024)，Fig. 2(a)。*

## 与其他概念的关系

- Purcell 效应是[[readout-measurement/dispersive-readout|色散读出]]的固有代价：色散频移 $\chi$ 与腔线宽 $\kappa$ 同时决定读出速度与 Purcell 弛豫，滤波器解除了二者的绑定。
- 多比特频分复用读出中，**每谐振器独立 Purcell 滤波**是抑制离共振驱动串扰的关键（Heinsoo et al. 2018：五比特 1.2 GHz 带宽复用、非目标比特退相干 <1%）——串扰由非目标比特的退相干率定量表征，见[[readout-measurement/readout-crosstalk|读出串扰]]词条。
- 滤波器依托[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]的缀饰态图像：被抑制的正是缀饰态中 $g/\Delta$ 比例的光子成分经腔的泄漏。
- 与[[readout-measurement/parametric-amplifier|低噪声参量放大]]互补：前者允许更开放、更快的读出腔，后者减少达到目标信噪比所需的积分时间；两者结合才能把读出推向快速高保真极限。
- 在频分复用多比特读取中，每腔独立的滤波器同时是抑制[[readout-measurement/readout-crosstalk|读取串扰]]的手段。
- 滤波器保护的最终指标是比特的 $T_1$，其完整预算应包含芯片上全部外部阻抗的贡献并实测验证，而非只看理想 $S$ 参数；在半导体量子点–腔杂化体系中，弱杂化区的谱线展宽现象同样源于 Purcell 效应。
