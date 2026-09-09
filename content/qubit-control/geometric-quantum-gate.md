---
title: 几何量子门
description: 让量子态沿参数空间闭合路径演化并利用几何相位实现旋转的量子门，对部分类型的噪声具有天然的抵抗性。
aliases:
  - 几何相位门
  - 几何门
  - geometric gate
  - holonomic gate
tags:
  - 量子比特操控
  - 鲁棒控制
date: 2026-09-08
---

<div class="entry-lead">几何量子门把门旋转角度编码进量子态在参数空间中所围的几何面积，对不改变闭合路径所围面积的微扰天然免疫；这一性质来自 Berry 相位而非来自能量与时间，因此不等于对所有噪声都鲁棒。</div>

## 物理图像：从 Berry 相位到几何门

量子态沿参数空间闭合路径演化回到起点时，所累积的总相位分成两部分：一部分由 [[materials-devices/charge-noise|电荷噪声]]与系统哈密顿量演化共同决定，称为动力学相位 $\phi_\mathrm{dyn}=-\int_0^\tau E(t)/\hbar\,dt$，其大小依赖于演化时间与瞬时能量；另一部分只取决于路径在参数空间中所围的几何面积，称为 Berry 相位（Berry phase）或几何相位 $\phi_\mathrm{g}$。在 1984 年由 M. V. Berry 系统给出数学形式之后，演化算符可写为

$$
U(\tau)=e^{i\phi_\mathrm{dyn}}\,e^{i\phi_\mathrm{g}}\,,
$$

其中 $\phi_\mathrm{g}=\oint \mathcal{A}\cdot d\mathcal{R}=\int \mathcal{F}\,d^2\mathcal{R}$，$\mathcal{A}$ 是参数空间的矢势（Berry 联络），$\mathcal{F}=\nabla\times\mathcal{A}$ 是对应的曲率（Berry 强度）。

几何量子门（geometric quantum gate）把"目标旋转角度"放进几何相位 $\phi_\mathrm{g}$：让量子态沿一条在参数空间（通常是布洛赫球或等效自旋相干张成的有效参数面）上闭合、且包围固定面积 $A$ 的路径演化，演化算符便等效于一个只由 $A$ 决定、与演化时间脱耦的旋转。这一思路天然带来一类鲁棒性——只要噪声不改变路径所围面积，它对最终旋转角的影响就被压制。

## 两条技术路线：绝热与非绝热

按照演化过程中是否满足绝热条件，几何门分为两类：

- **绝热几何门**：演化时间 $T$ 远大于能级瞬时能量差 $\Delta E$ 的倒数，使系统始终停留在某一瞬时本征态上。Berry 在 1984 年考虑的正是这种情形。固态量子比特的相干时间通常比绝热演化所需时间短一个量级以上，绝热几何门在实际器件中很难保持高保真度；
- **非绝热几何门**（nonadiabatic geometric gate）：放弃绝热条件，把整段演化切成三段（甚至多段）固定幅值、固定相位的脉冲，让动力学相位在闭合路径上相互抵消、只留下几何相位，从而把演化时间压到与比特 $T_2^*$ 同量级。1999 年至 2001 年间 X. B. Wang 与 P. Zanardi 等人分别独立提出非绝热几何计算的方案，开启了固体量子比特上演示几何门的实用化路径。

本站论文依据的工作属于非绝热方案，且进一步用"两段不同相位"实现了对两种典型噪声分别优化的 Path1 与 Path2，下文围绕这两条路径展开。

<!-- FIGURE: 布洛赫球上的非绝热几何门演化路径示意图：A→B→C→D→A（Path1）与 A→B→C'→D→A（Path2），两种路径所围面积相同（旋转角 $-2\gamma$ 相同），区别在于第二段的微波相位相差 $\pi/2$ -->

## 驱动哈密顿量与三段式闭合路径

非绝热几何门建立在受经典微波场驱动的二能级系统上。以 [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]为例，旋转坐标系下的有效哈密顿量是

$$
\frac{H}{h}=
\begin{pmatrix}
\Delta f & (1+\delta)f_\mathrm{Rabi}\,e^{-i\Phi}\\[4pt]
(1+\delta)f_\mathrm{Rabi}\,e^{i\Phi} & -\Delta f
\end{pmatrix},
$$

其中 $\Delta f=f_\mathrm{MW}-f_\mathrm{Larmor}$ 是微波与比特共振频率的失谐（刻画失谐噪声），$\delta$ 是拉比频率抖动（刻画系统性噪声），$\Phi$ 是微波相位。

要让动力学相位在闭合路径上抵消，并只保留所需几何相位，最简洁的做法是把演化切成三段，每段固定 $\Phi$ 与瞬时拉比频率：

$$
\int_{\tau_{k-1}}^{\tau_k}2\pi f_\mathrm{Rabi}\,dt=\theta_k,\qquad \Phi(t)=\phi_k,\quad t\in[\tau_{k-1},\tau_k],
$$

其中 Path2 方案的具体取值为

$$
\theta_1=\theta,\ \phi_1=\phi-\pi/2;\quad
\theta_2=\pi,\ \phi_2=\phi+\gamma-\pi/2;\quad
\theta_3=\pi-\theta,\ \phi_3=\phi-\pi/2.
$$

Path1 的差别只在第二段的相位取 $\phi_2=\phi+\gamma+\pi/2$，两条路径在布洛赫球上围出面积相同的闭合环路（Path1 走 $A\to B\to C\to D\to A$，Path2 走 $A\to B\to C'\to D\to A$），区别在于中间那段对哪种噪声更不敏感。

把三段演化乘起来，等效演化算符可写成简洁的"绕轴旋转"形式：

$$
U(\theta,\gamma,\phi)=\cos\gamma\,\mathbb{I}+i\sin\gamma
\begin{pmatrix}
\cos\theta & \sin\theta\,e^{-i\phi}\\[4pt]
\sin\theta\,e^{i\phi} & -\cos\theta
\end{pmatrix}
=\exp(i\gamma\,\mathbf{n}\cdot\boldsymbol{\sigma}),
$$

其中旋转轴 $\mathbf{n}=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$，旋转角 $-2\gamma$。当 $\theta=\pi/2$、$\phi=\pi/2$、$\gamma=0$ 时上式退化为单位算符，等价于绕 $X$ 轴做 $2\pi$ 旋转——这就是几何 $I$ 门；改变 $\theta,\phi,\gamma$ 三个参数即可实现任意单比特门。

## Path1 与 Path2 的"分工"

两条非绝热路径对两类常见电荷噪声的响应截然不同：

- **Path2**：第二段相位取 $\phi_2=\phi+\gamma-\pi/2$，专门用于抵抗失谐噪声 $\Delta f$。其等效旋转轴在闭合路径积分时对 $\Delta f$ 的一阶项自动抵消，因此 $\Delta f$ 出现小幅抖动时几何相位几乎不变；
- **Path1**：第二段相位取 $\phi_2=\phi+\gamma+\pi/2$，专门用于抵抗系统性噪声 $\delta$（即拉比频率的相对抖动 $\delta=\Delta f_\mathrm{Rabi}/f_\mathrm{Rabi}$）。

这种"针对性设计"的代价是几何门演化时间通常是等效动力学门的 $4$ 倍（Path2）至 $6$ 倍（增强型 Path3$\pi$），更长的演化时间意味着更多退相干积累——这是几何门方案中"鲁棒性 vs. 操作时间"的核心权衡。

<!-- FIGURE: 三种几何演化路径在布洛赫球上的对比：Path1（A→B→C→D→A）、Path2（A→B→C'→D→A，围面积相同但中间段相位相差 π/2）以及 Path3π（总旋转角 3π，可同时压制两种噪声） -->

## 噪声建模：两类噪声的不同时间行为

数值模拟几何门与动力学门的性能差异时，必须同时把"低频失谐噪声"和"高频系统性噪声"放进哈密顿量。论文依据中的模拟采用

$$
\frac{H}{h}=
\begin{pmatrix}
\Delta f+\delta f_\mathrm{Larmor} & \big[(1+\delta)f_\mathrm{Rabi}+\delta f_\mathrm{Rabi}\big]e^{-i\Phi}\\[4pt]
\big[(1+\delta)f_\mathrm{Rabi}+\delta f_\mathrm{Rabi}\big]e^{i\Phi} & -\Delta f-\delta f_\mathrm{Larmor}
\end{pmatrix},
$$

并对两类噪声做不同的时间演化假设：

- $\delta f_\mathrm{Larmor}$（来自电荷噪声或核自旋涨落引起的比特共振频率抖动）：在每经过 $M$ 个 $\pi/2$ 门操作后离散更新一次，体现其"低频、长相关"特征。$M$ 用来刻画低频噪声幅度发生变化的时间尺度；
- $\delta f_\mathrm{Rabi}$（来自微波功率抖动引起的拉比频率抖动）：在每个量子门操作后立即更新，体现其"快变、弱相关"特征。

在实测体系中，把 [[qubit-control/ramsey-interferometry|Ramsey 实验]]测得的退相位时间 $T_2^*$ 代入关系式 $\delta f_\mathrm{Larmor}=1/\sqrt{2\pi T_2^*}$ 可以估算体系中内在失谐噪声幅度，论文实测器件给出 $\delta f_\mathrm{Larmor}\approx 1.66\text{–}1.80\,\mathrm{MHz}$、$\delta f_\mathrm{Rabi}\approx 58.5\,\mathrm{kHz}$、$M=24$，与相干性质估算得到的初始值在同一量级。

<!-- FIGURE: Path2 与动力学门在不同 Δf 下的保真度对比，上半为绝对保真度，下半为两种方案保真度差值，箭头强调 Δf 增大时动力学门下降明显更快 -->

## 参数与量级

把几何门方案代入平面锗空穴自旋量子比特实测体系，下表汇总关键参数与代表性数值。所有数值与论文第 5 章实验条件保持一致。

| 量 | 典型值 | 备注 |
| --- | --- | --- |
| 工作磁场 $B$ | 数十 mT 量级 | 比特经 [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]] (EDSR) 驱动 |
| 拉比频率 $f_\mathrm{Rabi}$ | $8\text{–}19\,\mathrm{MHz}$ | 几何门实测区间 |
| 拉比频率抖动 $\delta=\Delta f_\mathrm{Rabi}/f_\mathrm{Rabi}$ | $0\text{–}\pm 0.2$ | 用于评估 Path1 鲁棒性 |
| 失谐噪声幅度 $\Delta f$ | $0\text{–}\pm 2.5\,\mathrm{MHz}$（$X/2,Y/2$）；$0\text{–}\pm 1.2\,\mathrm{MHz}$（$I$） | 用于评估 Path2 鲁棒性 |
| 内在比特频率抖动 $\delta f_\mathrm{Larmor}$ | $1.66\text{–}1.80\,\mathrm{MHz}$（拟合值） | 由 $T_2^*\approx 136\,\mathrm{ns}$ 估算 |
| 比特频率漂移（55 h 监测） | 标准差 $0.794\,\mathrm{MHz}$，近高斯分布 | 来源可能是 TLS 抖动或室温信号热噪声 |
| 动力学门 $X/2,Y/2$ 保真度（$f_\mathrm{Rabi}=19\,\mathrm{MHz}$） | $99.81\%$、$99.88\%$（GST） | 参考基线 |
| Path2 几何 $I,X/2,Y/2$ 最高保真度 | $99.98\%$、$99.80\%$、$99.97\%$（GST） | $f_\mathrm{Rabi}=8\text{–}19\,\mathrm{MHz}$ 全程 $>99\%$ |
| Path2 演化时间 | 约动力学门的 $4$ 倍 | 长演化时间换取噪声鲁棒 |
| Path3$\pi$ 演化时间 | 约动力学门的 $6$ 倍 | 同时压制两类噪声，但保真度受演化时间拖累 |
| Path1 全程保真度 | 多数工作点低于 $99\%$ | 当前体系系统性噪声弱于失谐噪声 |

更长相干时间下的数值模拟把 $\delta f_\mathrm{Larmor}$ 推低至 $0.012\,\mathrm{MHz}$（对应文献中报道的 $T_2^\mathrm{Hahn}=17.6\,\mu\mathrm{s}$），此时 Path2 几何门在更宽 $\Delta f$ 范围内仍稳定优于动力学门——这说明几何门的优势随着噪声减小不是消失，而是从"大幅度保真度领先"过渡到"宽工作点保持优势"。

## 实验特征与测量方法

**操控波形。** 几何门的微波脉冲由任意波形发生器（AWG）输出：Path2 的总长 $t_\mathrm{geo}\approx 4 t_{\pi/2,\mathrm{dyn}}$（$t_{\pi/2,\mathrm{dyn}}$ 是动力学 $X/2$ 门时长），分为三段，相位按上述表达式依次跳变，相位切换时间由 AWG 的相位调制精度决定，典型分辨率 $100\,\mathrm{ps}$ 量级。

**保真度表征。** 用量子门集层析（GST，gate set tomography）得到 $I,X/2,Y/2$ 三个基本门的泡利转移矩阵，进而报告几何门集在每个拉比频率下的整体保真度。GST 的优势在于可以同时给出哈密顿量误差、随机误差、非幺正/非平衡误差三类分量的分解，从而判断"剩余失谐"是否仍存在。论文实测体系中 GST 报告三类误差的相对量级与 Path2 优于动力学门的实验观测一致。

**故意注入噪声。** 把人为可控的失谐 $\Delta f$ 与拉比抖动 $\delta$ 注入微波参考（例如以额外正弦调制实现 $\Delta f$），对比动力学门与几何门保真度随 $\Delta f$、$\delta$ 的变化曲线。Path2 在 $\Delta f=\pm 2.5\,\mathrm{MHz}$（$X/2,Y/2$）或 $\Delta f=\pm 1.2\,\mathrm{MHz}$（$I$）下仍保持 $>99\%$ 的保真度，而动力学门同步下降。Path1 在 $|\delta|$ 较小（如 $|\delta|<0.1$）时不及动力学门，但 $|\delta|$ 超过约 $0.2$ 后 Path1 不再下降，动力学门则持续走低——这是几何门对系统性噪声的"延迟失效"行为。

**长期频率漂移与免标定。** 在 55 h 内以 $\tau_\mathrm{idle}=40\,\mathrm{ns}$ 的固定等待时间持续监测比特共振频率漂移，得到标准差 $0.794\,\mathrm{MHz}$ 的近似高斯分布，全程落在 Path2 容差 $\pm 2.5\,\mathrm{MHz}$ 之内。这意味着在该器件上几何门可以在约两天的窗口内省去对拉莫尔频率的反复标定，缓解多比特阵列的标定开销。

<!-- FIGURE: 55 h 内比特共振频率漂移的时间演化（上）与高斯分布直方图（下），标注标准差 0.794 MHz 与 Path2 容差窗口 ±2.5 MHz -->

## 从单比特到两比特：走向通用几何计算

两比特几何门可以把上述三段式闭合路径推广到由交换相互作用驱动的双比特希尔伯特空间。考虑双量子点中两枚空穴自旋，哈密顿量为

$$
H(t)=J(t)(\mathbf{S}_L\cdot\mathbf{S}_R-1/4)+\mathbf{S}_L\cdot\mathbf{B}_L+\mathbf{S}_R\cdot\mathbf{B}_R,
$$

在双比特基矢 $\{|00\rangle,|01\rangle,|10\rangle,|11\rangle\}$ 下展开为

$$
H(t)=
\begin{pmatrix}
E_z+J/2 & 0 & 0 & 0\\
0 & \delta E_z/2 & J/2 & 0\\
0 & J/2 & -\delta E_z/2 & 0\\
0 & 0 & 0 & -E_z+J/2
\end{pmatrix},
$$

其中 $E_z=B_z\hbar+(B_z^L+B_z^R)/2$、$\delta E_z=B_z^L-B_z^R$。在对称工作点附近 $J\gg E_z,\delta E_z$，可用 $J/2$ 作微扰耦合 $|01\rangle$ 与 $|10\rangle$ 子空间。令交换耦合经微波调制 $J(t)=j_0+j(t)\cos(\omega_J t+\phi)$，在旋波近似下耦合子空间有效哈密顿量可写为

$$
H_R(t)=\frac{j(t)}{2}\big(\cos\phi\,\tilde\sigma_x+\sin\phi\,\tilde\sigma_y\big),
$$

其中 $\tilde\sigma_x,\tilde\sigma_y$ 是 $\{|01\rangle,|10\rangle\}$ 子空间的有效泡利矩阵。把单比特 Path2 的三段式相位设计原样移植过来，可得两比特等效演化算符：

$$
U(\xi,\upsilon,\phi)=
\begin{pmatrix}
1 & 0 & 0 & 0\\
0 & \cos\xi+i\sin\xi\cos\upsilon & i\sin\xi\sin\upsilon\,e^{-i\phi} & 0\\
0 & i\sin\xi\sin\upsilon\,e^{i\phi} & \cos\xi-i\sin\xi\cos\upsilon & 0\\
0 & 0 & 0 & 1
\end{pmatrix},
$$

当 $\phi=0$、$\upsilon=\xi=\pi/2$ 时 $U$ 等价于 iSWAP 门；两次 iSWAP 与若干单比特操作即可合成 CNOT，从而构成通用的几何门集。

实际实现上，几何两比特门同样存在"演化时间更长、对其他噪声鲁棒性下降"的权衡；目前论文依据中尚未演示两比特几何门，但给出了上述理论框架与实施路径。

## 与其他概念的关系

- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]：本词条的几何门是在平面锗空穴自旋比特上演示的；该比特依赖 [[materials-devices/strained-germanium|应变锗]]中内禀的强自旋轨道耦合实现全电 EDSR 操控，本身对电荷噪声敏感，几何门正是为这一痛点而引入的优化方案。
- [[qubit-control/rabi-oscillation|Rabi 振荡]] 与 [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]：几何门建立在受经典微波场驱动的二能级 Rabi 模型之上，[[qubit-control/rabi-oscillation|Rabi 频率]] $f_\mathrm{Rabi}$ 既是动力学门的速度量度，也是几何门三段式脉冲中累计角度的积分量度。
- [[qubit-control/ramsey-interferometry|Ramsey 干涉]] 与 [[qubit-control/dynamical-decoupling|动态解耦]]：Ramsey 给出 $T_2^*$，进而决定内在失谐噪声 $\delta f_\mathrm{Larmor}$ 的估算值；CPMG 等动态解耦序列把 $T_2$ 从百纳秒延长到微秒量级，本身就是一种与几何门互补的抗噪声手段。
- [[materials-devices/charge-noise|电荷噪声]]：几何门的"几何"鲁棒性只针对不改变闭合路径所围面积的微扰；电荷噪声中的低频 $1/f$ 分量表现为路径面积抖动，是几何门最直接压制的对象；但高频电荷涨落、电荷阶跃等改变路径形状的扰动仍会破坏几何相位。
- 缀饰自旋量子比特（dressed spin qubit）与 GRAPE（gradient ascent pulse engineering）最优控制：同属"鲁棒单比特操控"方案。缀饰态方案通过连续驱动把系统静态化，GRAPE 通过梯度上升算法设计波形补偿特定噪声；几何门则属于"换一个自由度（路径面积）来编码门"的第三类方案，三者经常在同一器件上互为对照。

## 延伸阅读

- M. V. Berry, "Quantal phase factors accompanying adiabatic changes", *Proceedings of the Royal Society of London A* (1984). [DOI: 10.1098/rspa.1984.0023]
- X.-B. Wang and M. Keiji, "Nonadiabatic conditional geometric phase shift with NMR", *Physical Review Letters* (2001); 及 P. Zanardi, M. Rasetti, "Holonomic quantum computation", *Physics Letters A* (1999)——非绝热几何计算的两篇奠基性工作（综合参考）。
- J. W. Zhao et al., "Single-spin-qubit geometric gate in a silicon quantum dot", *Physical Review Applied* (2024). [DOI: 10.1103/PhysRevApplied.21.014044]
- K. Z. Li et al., "Universal, high-fidelity quantum gates based on superadiabatic, geometric phases on a solid-state spin-qubit at room temperature", *npj Quantum Information* (2018). [DOI: 10.1038/s41534-018-0098-7]
- Y. Liang et al., "Nonadiabatic holonomic quantum computation and its optimal control", *Science China Information Sciences* (2023). [DOI: 10.1007/s11432-023-3824-0]

## 论文依据

- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 7：首次在平面锗空穴自旋量子比特中实验实现基于几何相位的单量子比特门，并以几何相位门提升操控的噪声鲁棒性。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 82–83：几何量子门引入动机（噪声鲁棒性、高一致性、高保真度）；典型的低频电荷噪声主导下传统动力学门的局限。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 85：Berry 1984 年几何相位工作、Wang/Zanardi 1999–2001 年非绝热几何计算方案、阿贝尔/非阿贝尔分类及空穴自旋比特作为非绝热几何计算平台的定位。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 102–103：双段驱动哈密顿量（式 5.5）与 Path1/Path2 三段式相位设计（式 5.6），等效演化算符 $U(\theta,\gamma,\phi)=\exp(i\gamma\,\mathbf{n}\cdot\boldsymbol{\sigma})$（式 5.7）及几何 $I$ 门特例 $\theta=\pi/2,\phi=\pi/2,\gamma=0$。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 104–105：图 5.13 给出 Path1 与 Path2 在布洛赫球上的演化路径、表 5.1 给出 $f_\mathrm{Rabi}=8.23\text{–}18.97\,\mathrm{MHz}$ 下 Path2 几何 $I,X/2,Y/2$ 门保真度最高 99.98%、99.80%、99.97%。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 106：Path2 vs Path3$\pi$ 保真度对比（5.4.2 节），Path3$\pi$ 因约 $6$ 倍动力学门操作时间而被拖低。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 107：Path2 在 $\Delta f=\pm 2.5\,\mathrm{MHz}$（$X/2,Y/2$）、$\Delta f=\pm 1.2\,\mathrm{MHz}$（$I$）下保持 $>99\%$ 保真度；55 h 内比特共振频率漂移标准差 $0.794\,\mathrm{MHz}$，完全落在 Path2 容差之内。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 108：含 $\delta f_\mathrm{Larmor}$、$\delta f_\mathrm{Rabi}$ 的有限哈密顿量（式 5.8）及两类噪声的时间更新假设；拟合得到 $\delta f_\mathrm{Larmor}=1.80\,\mathrm{MHz}$、$\delta f_\mathrm{Rabi}=58.48\,\mathrm{kHz}$、$M=24$。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 109–110：Path1 对系统性噪声 $\delta$ 的鲁棒性实验（$\delta\approx \pm 0.2$ 时反超动力学门）以及 Path1 对失谐噪声 $\Delta f$ 几乎无抵抗的对比（图 5.18、5.19），明确"几何门只对目标噪声占主导时展现优势"。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 111：更长 $T_2^*$ 与更小 $\delta f_\mathrm{Larmor}$（如 17.6 $\mu$s 对应 0.012 MHz）下的数值模拟，验证几何门在低噪声极限下仍稳定优于动力学门。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 112–113：双比特几何门理论方案（式 5.9–5.11）、三段式闭合路径（式 5.12–5.14）与两比特等效演化算符（式 5.15），取 $\phi=0,\upsilon=\xi=\pi/2$ 即得 iSWAP；iSWAP×2 配合单比特操作合成 CNOT。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 113–114：5.4.8 节讨论最优方案选择、最优操控点（sweet spot）与几何门操作时间之间的权衡，指出非循环、非绝热方案可在缩短演化时间的同时保留几何鲁棒性。
