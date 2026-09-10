---
title: 库仑阻塞
description: 小电容量子点中，因加电子能不满足输运条件而出现的电流抑制。
aliases:
 - 库伦阻塞
 - 库仑阻塞效应
tags:
 - 量子点基础
 - 量子输运
date: 2026-09-08
---

<div class="entry-lead">库仑阻塞的本质是能量守恒：即使量子点与源漏之间存在隧穿通道，若加入或移走一个载流子的能量不在偏压窗口内，顺序隧穿仍会停止。</div>

## 物理图像

库仑阻塞（Coulomb blockade）是介观物理中最基础的单电子效应：当一个导体岛（这里是[[semiconductor-quantum-dot|半导体量子点]]）通过两个隧穿势垒与源极（source）、漏极（drain）电子库相连时，岛内的载流子数 $N$ 只能取整数。一旦岛上已有 $N-1$ 个电子，再填入第 $N$ 个电子需要支付[[electrochemical-potential|电化学势]] $\mu(N)=U(N)-U(N-1)$；只要这个能量高于源、漏两侧的费米面，即

$$
\mu(N-1)<\mu_D<\mu_S<\mu(N)
$$

电子就既不能从源极跳入、也不能从漏极跳出，顺序隧穿（sequential tunneling）被禁止，源漏电流降为零，量子点上的电子数被锁定为一个确定的整数。反之，当某个 $\mu(N)$ 落入源漏费米面之间（$\mu_D<\mu(N)<\mu_S$）时，电子按"源极 $\to$ 量子点 $\to$ 漏极"的顺序逐个通过，称为单电子隧穿（single electron tunneling），电流大小由进、出两侧的隧穿率 $\Gamma_S$、$\Gamma_D$ 决定。

栅极电压可以连续地平移 $\mu(N)$ 相对源漏费米面的位置，因此随着栅压扫描，系统在"阻塞"与"导通"之间周期性切换，测到一列分立的电流峰——库仑振荡（Coulomb oscillation）：峰顶对应 $\mu_S=\mu(N)=\mu_D$ 的共振对齐点，峰间谷底就是阻塞区。阻塞区电子数固定不变，这使得实验上可以逐个数出并排空量子点中的电子，直到最后一个——量子点也因此被称为"人造原子"（artificial atom）。

![[assets/figures/fundamentals/shang-2014-fig1-3-sqd-blockade.jpg]]

*单量子点器件与库仑阻塞输运示意图*

<!-- 原始占位：量子点双势垒输运能级示意图：(a) 阻塞情形 μ(N−1) < μD < μS < μ(N)；(b) 单电子隧穿情形 μD < μ(N) < μS -->

## 理论模型：常相互作用模型

库仑阻塞的定量描述基于[[constant-interaction-model|常相互作用模型]]（constant interaction model, CI 模型），它包含两条假设：

1. 量子点中电子之间、以及电子与外界电极之间的库仑相互作用，全部压缩为一个常数总电容

```math
C_\Sigma=C_S+C_D+C_G
```

即点与源、漏、栅电容之和；
2. 点内单粒子能级 $E_n$ 由束缚势决定（可含磁场依赖），与电子填充数无关。

源极施加 $V_{SD}$、漏极接地、栅压 $V_G$ 时，含 $N$ 个电子的量子点总能量为

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_{SD}+C_G V_G\right]^2}{2C_\Sigma}+\sum_{n=1}^{N}E_n(B)
$$

其中 $N_0|e|$ 补偿异质结施主离子的正电荷背景。第 $N$ 个电子进入量子点所需的最小能量即电化学势：

$$
\mu(N)=U(N)-U(N-1)=\left(N-N_0-\frac{1}{2}\right)E_C-\frac{E_C}{|e|}\left(C_S V_{SD}+C_G V_G\right)+E_N
$$

其中 $E_C=e^2/C_\Sigma$ 为[[charging-energy|充电能]]（charging energy）。相邻电荷态的间距为加电子能（addition energy）：

$$
E_\mathrm{add}=\mu(N+1)-\mu(N)=E_C+\Delta E
$$

$\Delta E=E_{N+1}-E_N$ 是单粒子能级间隔。对百纳米量级的门控量子点，$C_\Sigma$ 很小，$E_C$ 远大于 $\Delta E$，因此电化学势近似等间距排列，库仑峰近似等周期出现。

### 从模型到可观测量

上式中 $\mu(N)$ 对栅压 $V_G$ 是线性的，斜率直接给出杠杆臂（lever arm）的微观定义：

$$
\frac{d\mu(N)}{dV_G}=-\frac{E_C}{|e|}C_G=-|e|\,\frac{C_G}{C_\Sigma}\equiv-|e|\alpha
$$

即 $\alpha=C_G/C_\Sigma$——栅压改变 $1\ \mathrm{mV}$ 时点内电化学势移动 $\alpha\ \mathrm{meV}$。令相邻两个电荷态在同一源漏条件下简并，$\mu(N+1;V_G)=\mu(N;V_G+\Delta V_G)$，可得库仑峰的栅压周期

$$
\Delta V_G=\frac{E_C+\Delta E}{|e|\alpha}=\frac{e}{C_G}\left(1+\frac{\Delta E}{E_C}\right)\approx\frac{e}{C_G}
$$

多电子区 $\Delta E\ll E_C$ 时峰严格等周期。这解释了为什么栅压扫描中阻塞谷与导通峰交替等距出现，也说明峰周期本身就是栅电容的直接度量。同理，$\mu(N)$ 对 $V_{SD}$ 的斜率为 $-|e|C_S/C_\Sigma$，源、漏、栅三个方向斜率的差异正是库仑菱形倾斜边界的来源。

### 阻塞出现的两个条件

- **温度足够低**：$E_C\gg k_\mathrm{B}T$。当环境热涨落大于充电能时，电子可以靠热激活越过充电势垒，库仑阻塞便无法维持。$E_C=1.5\ \mathrm{meV}$ 对应 $E_C/k_\mathrm{B}\approx 17\ \mathrm{K}$，因此清晰的阻塞输运通常要求稀释制冷机量级的电子温度。
- **势垒足够封闭**：连接量子点与电子库的量子点接触电导须满足 $G\ll 2e^2/h$，使电子以隧穿方式逐个进出；等价地，隧穿引起的能级展宽 $\hbar\Gamma$ 须远小于 $E_C$，否则离散充电被抹平。

### 顺序隧穿速率

在最低阶（顺序隧穿）近似下，电子进、出量子点的速率由费米黄金定则（Fermi golden rule）给出，并受费米–狄拉克占据因子调制：

$$
\Gamma^{\mathrm{in}}_{\alpha}=\Gamma_{\alpha}\,f\!\left(\mu(N)-\mu_\alpha,\,T_e\right),\qquad
\Gamma^{\mathrm{out}}_{\alpha}=\Gamma_{\alpha}\left[1-f\!\left(\mu(N)-\mu_\alpha,\,T_e\right)\right]
$$

其中 $\alpha\in\{S,D\}$，$f$ 为费米–狄拉克函数，$T_e$ 为电子温度。阻塞条件 $\mu(N)>\mu_S,\mu_D$ 正对应 $\Gamma^{\mathrm{in}}$ 被占据因子指数压制；对存在塞曼劈裂 $E_z$ 的自旋分辨能级，只需把 $\mu(N)$ 替换为相应的自旋能级，即可得到自旋选择的进、出速率，这是[[readout-measurement/single-shot-readout|单发读出]]速率方程的出发点。

## 偏压窗口与库仑菱形

有限源漏偏压 $V_{SD}$ 在源漏费米面之间打开宽度为 $eV_{SD}$ 的偏压窗口（bias window）。只要 $\mu(N)$ 落入窗口就有电流；栅压与偏压联合扫描时，允许输运的区域在 $V_G$–$V_{SD}$ 平面上展开为一个个关于 $V_{SD}=0$ 对称的菱形——[[coulomb-diamond|库仑菱形]]（Coulomb diamond）。菱形内部电子数固定、无电流；菱形顶点对应 $e|V_{SD}|\approx E_C$，偏压窗口超过充电能后任何栅压下都有能级留在窗口内，阻塞彻底解除。

<!-- FIGURE: 微分电导随栅压与源漏偏压变化的库仑菱形相图，标注充电能 E_C、能级间隔 ΔE 与两条边的斜率 -->

库仑菱形是单量子点的"参数提取器"：

- 菱形沿栅压方向的宽度 $\Delta V_g$ 对应一个电子的填充，给出栅电容 $C_G=e/\Delta V_g$；
- 菱形半高给出充电能 $E_C$，进而得总电容 $C_\Sigma=e^2/E_C$；
- 菱形两条边分别对应点能级与源极、漏极对齐，由斜率 $k_1$、$k_2$ 可得栅极的电压–能量转换系数（杠杆臂，lever arm）$\alpha=1/(1/k_1+1/k_2)$；零偏压测量中亦可直接用 $\alpha=|V_{SD}|/\Delta V_g$ 标定；
- 窗口进一步增大时，激发态能级进入窗口，电子可经基态或激发态两条路径隧穿，菱形外出现与边平行的激发态电导线；当 $\mu(N)$ 与 $\mu(N+1)$ 同时落入窗口，两个电子可同时参与输运。由此可从菱形图直接读出 $E_\mathrm{add}$ 与激发态间距 $\Delta E$。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 横向量子点尺寸 | $\sim 200\ \mathrm{nm}$（GaAs 二维电子气门控定义） | |
| 量子点尺度 | 百纳米量级，$E_C\gg\Delta E$，化学势近似等间距 | |
| 总电容 $C_\Sigma$ | $113\ \mathrm{aF}$（浅刻蚀 GaAs 单点实测） | |
| 充电能 $E_C$ | $1.5\ \mathrm{meV}$（同器件，$E_C=e^2/C_\Sigma$） | |
| 杠杆臂 $\alpha$ | $0.027$–$0.06\ \mathrm{meV/mV}$（不同电极、不同器件） | |
| 输运电导 | $G\ll 2e^2/h$（阻塞 regime 前提） | |

## 实验特征与测量

标准测量方案是在直流偏压 $V_{SD}$ 上叠加微伏量级交流激励（如锁相放大器输出的 $20\ \mu\mathrm{V}$、几十 Hz 信号），扫描 $V_{SD}$ 与栅压并记录微分电导，直接成像库仑菱形。零偏压的栅压扫描给出库仑振荡：多电子区各电子的充电能几乎相等，峰间距均匀；用杠杆臂把峰间距换算成能量即得 $\Delta\mu_N$。利用阻塞区电子数严格整数的性质，逐个排空电子直至最后一个，是标定量子点绝对电子数的常规手段。

阻塞并不只出现在输运通道本身：紧邻量子点的电荷传感器（[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]或[[readout-measurement/rf-reflectometry|射频反射测量]]）同样依靠"阻塞区电子数突变改变邻近电导"来感知电荷态。此外，阻塞区零平均电流下的低频 $1/f$ 噪声仍可通过静电耦合被测量，是表征器件[[materials-devices/charge-noise|电荷噪声]]环境的手段之一。

## 阻塞之外：高阶输运

"阻塞"禁止的只是顺序隧穿，并非绝对零电导：

- **共隧穿**（cotunneling）：电子经虚占据中间态一次性穿过量子点，属于更高阶过程，在阻塞谷中产生弱但有限的电流；
- **近藤效应**（Kondo effect）：当点内净自旋为 $1/2$（电子数为奇）时，点自旋与电子库传导电子在低温下屏蔽成单态。把量子点映射为安德森杂质模型（Anderson impurity model）。

 哈密顿量写作

 ```math
H=H_R+H_L+H_{QD}+H_I,\quad H_{QD}=\sum_{\sigma}\epsilon_d\,d^\dagger_\sigma d_\sigma+U n_\uparrow n_\downarrow
```

 ```math
H_I=\sum_{k\sigma}V_{Rk\sigma}\left[c^\dagger_{Rk\sigma}d_\sigma+\mathrm{h.c.}\right]+\sum_{k\sigma}V_{Lk\sigma}\left[c^\dagger_{Lk\sigma}d_\sigma+\mathrm{h.c.}\right]
```

 其中 $U$ 即点内库仑相互作用。系统在 Kondo 温度

 ```math
T_K=\sqrt{U\Gamma}\,\exp\!\left[-\frac{\pi|\epsilon_d|\,(\epsilon_d+U)}{2U\Gamma}\right]
```

 以下于阻塞谷中央产生零偏压电导峰（zero-bias peak, ZBP）——在原本 $dI/dV=0$ 的阻塞区出现电导。实验判据有二：加平行磁场后峰按塞曼能劈裂为二；升温后峰高下降直至消失；
- **光子辅助过程**：强微波驱动下，电子可吸收光子能量跨越失谐，在阻塞区诱导[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]（photon-assisted tunneling）边带。

因此，"库仑阻塞"总是相对特定的输运阶次、温度与测量分辨率而言的。

## 与其他概念的关系

- [[charging-energy|充电能]] $E_C$ 是阻塞的能量根源；阻塞条件 $E_C\gg k_\mathrm{B}T,\ \hbar\Gamma$ 定义了其可观测窗口。
- [[electrochemical-potential|电化学势]] $\mu(N)$ 是否落入偏压窗口，是判断阻塞与否的直接判据。
- [[constant-interaction-model|常相互作用模型]]给出阻塞区边界、峰周期与菱形尺寸的定量预言。
- 有限偏压下阻塞区展开为[[coulomb-diamond|库仑菱形]]；在[[double-quantum-dot|双量子点]]中，两个点各自的阻塞条件与点间能级对齐共同编织出[[charge-stability-diagram|电荷稳定图]]的蜂窝结构。
- 隧穿势垒的透明度由[[tunnel-coupling|隧穿耦合]]控制，它同时决定阻塞的"封闭程度"与库仑峰的高度。
