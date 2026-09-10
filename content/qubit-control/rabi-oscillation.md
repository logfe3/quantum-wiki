---
title: Rabi 振荡
description: 共振驱动二能级系统时，量子态占据在两逻辑态之间周期交换的相干运动。
aliases:
  - 拉比振荡
  - 拉比频率
  - Rabi frequency
tags:
  - 量子比特操控
  - 相干表征
date: 2026-09-08
---

<div class="entry-lead">Rabi 振荡是"能否连续控制量子比特"的第一张时间域名片：改变共振脉冲长度，读出概率应按近似正弦规律在两个逻辑态之间往返，振荡周期直接给出 Rabi 频率与 π 脉冲长度。</div>

## 物理图像

对任意二能级系统施加一个与其能级劈裂 $\hbar\omega_q$ 接近的横向驱动，逻辑态的占据会在两个态之间做周期性交换——这就是 **Rabi 振荡（Rabi oscillation）**。从布洛赫球上看，逻辑基态 $|0\rangle$、$|1\rangle$ 居于南北极；驱动等效于绕赤道内某根轴的旋转，共振条件下旋转频率为 $\Omega_R$，$t_\pi=\pi/\Omega_R$ 的脉冲正好实现绕该轴 $180^\circ$ 旋转，把初态从 $|0\rangle$ 翻到 $|1\rangle$。这一过程把"驱动强度"和"门操作长度"直接挂钩：放大微波幅度即可加快 Rabi 振荡，从而加快单比特门；这正是 [[qubit-control/charge-qubit|电荷比特]]门快、自旋比特门慢的物理根源。

把脉冲序列换成"$\pi/2$—等待—$\pi/2$"，就得到 [[qubit-control/ramsey-interferometry|Ramsey 干涉]]；把驱动频率缓慢扫过谐振点则得到 [[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]。三者共同构成单比特相干表征的"三件套"，也是从 Rabi 振荡提取相干时间与 [[qubit-control/electric-dipole-spin-resonance|EDSR]] 强度的基础。

![[assets/figures/qubit-control/wang-ke-2020-fig1-6-bloch-sphere.jpg]]

*布洛赫球：|0⟩/|1⟩ 位于南北极，球面上任一点对应一个量子比特的纯态（[王柯 2020]([[sources/wang-ke]])，图 1.6）*

<!-- 原始占位：布洛赫球上 Rabi 振荡示意图：南北极为 |0⟩/|1⟩，共振驱动下态矢量绕 x 轴进动，转过 π 角即实现 π 脉冲 -->

## 理论模型：哈密顿量与旋转波近似

以自旋 $1/2$ 或等效二能级为例。沿 $z$ 方向加静磁场 $B_\text{ext}$，使两逻辑态的塞曼能差为 $\hbar\omega_0=g\mu_B B_\text{ext}$；再在垂直方向施加频率 $\omega_\text{drive}$、初相位 $\varphi$ 的交变磁场（或等效交变磁场）$B_\text{ac}\cos(\omega_\text{drive} t+\varphi)$，则实验室系哈密顿量为

$$
H_\text{lab}=-\frac{\hbar\omega_0}{2}\sigma_z+2\hbar\gamma B_1 \cos(\omega_\text{drive} t+\varphi)\,\sigma_x,
$$

其中 $\gamma$ 为旋磁比（硅中约 $28\ \mathrm{GHz/T}$），$B_1$ 为驱动场幅度。把余弦拆成两个反向旋转的分量，与拉莫尔进动同向的分量在随自旋转动的坐标系中是常数，反向分量以 $2\omega_0$ 振荡——这一**旋转波近似（rotating-wave approximation, RWA）** 忽略反向的高频振荡，得到旋转系下的有效哈密顿量

$$
H_\text{rot}=\hbar(\omega_\text{drive}-\omega_0)\sigma_z+\hbar\gamma B_1\left(\sigma_x\cos\varphi-\sigma_y\sin\varphi\right).
$$

驱动项给出绕赤道内某根轴的常旋转，旋转角频率定义为 **Rabi 频率**

$$
\Omega_R=\gamma B_1,\qquad f_\text{Rabi}=\gamma B_1/2\pi.
$$

对电荷比特，相同结构在电荷空间实现：$\hbar\omega_q$ 取双量子点反交叉处的能级差，$\Omega_R$ 由门电极上交流电压幅度决定；自旋比特则在自旋空间实现同一图像，区别只在于 $\Omega_R$ 的物理来源——是 ESR 天线电流、EDSR 的电场-自旋转换、还是翻转模式（flopping mode）的电荷-自旋混合增强。

### 共振与失谐：π 脉冲、π/2 脉冲与布洛赫球

**共振条件** $\omega_\text{drive}=\omega_0$ 下 $H_\text{rot}$ 中 $\sigma_z$ 项消失，态矢量在布洛赫球上绕 $(\cos\varphi,\,-\sin\varphi,\,0)$ 方向以 $\Omega_R$ 进动。对 $\varphi=0$ 即绕 $x$ 轴，

$$
P_{\uparrow}(t)=\frac{1}{2}\left[1-\cos(\Omega_R t)\right],\qquad
P_{\downarrow}(t)=\frac{1}{2}\left[1+\cos(\Omega_R t)\right].
$$

两个标志性脉冲是

$$
t_{\pi/2}=\frac{\pi}{2\Omega_R},\qquad t_\pi=\frac{\pi}{\Omega_R},
$$

分别把态矢量推到赤道和翻转到对极；任意单比特旋转都可通过调节 $t_\text{MW}$ 与 $\varphi$ 组合实现（绕 $z$ 轴的旋转通过"虚拟 $Z$ 门"——仅改变后续脉冲的相位——实现，无需额外物理时间）。

**失谐** $\Delta=\omega_\text{drive}-\omega_0\neq 0$ 时演化方程仍可解。把 $H_\text{rot}$ 对角化得到**广义 Rabi 频率**

$$
\Omega_\text{eff}=\sqrt{\Omega_R^2+\Delta^2},
$$

态占据按 $\cos(\Omega_\text{eff} t)$ 振荡但振幅衰减。设初态为 $|\downarrow\rangle$，则

$$
P_{\uparrow}(t)=\frac{1}{2}\left[1-\frac{2\Omega_R^2}{\Omega_R^2+\Delta^2}\cos\!\big(\sqrt{\Omega_R^2+\Delta^2}\,t\big)\right].
$$

失谐为零时还原共振结果；失谐很大时振荡幅度被 $\Omega_R/\Delta$ 压低——这给出谐振峰宽度与 $T_2^*$ 的直接联系。扫频测到的共振峰半高宽约 $\Delta_\text{FWHM}=1/(\pi T_2^*)$，故用啁啾脉冲或长脉冲都可快速估计退相干时间。

<!-- FIGURE: 共振（Δ=0）下 Rabi 振荡占据概率随时间的理想正弦曲线，以及大失谐下被压低、加快的失谐振荡曲线 -->

### 含弛豫与退相干的衰减振荡

实际信号必含衰减。把非相干过程分为能量弛豫 $T_1$ 与纯退相位 $T_\varphi$，通常把 Rabi 振荡拟合为

$$
P_\uparrow(t)=A\exp\!\left(-\frac{t}{T_{2}^\text{Rabi}}\right)\sin(\Omega_R t+\varphi_0)+B.
$$

这里 $T_{2}^\text{Rabi}$ 是**驱动下的退相干时间**，与 Ramsey 实验的 $T_2^*$、Hahn-echo 实验的 $T_2^\text{Hahn}$ 不一定相同；它反映驱动过程中的总相位损失，包括电荷噪声、磁场噪声与驱动幅度波动。为兼顾"门快"与"相干好"，实验上引入**品质因子**

$$
Q=2\,T_{2}^\text{Rabi}\,f_\text{Rabi}=\frac{T_{2}^\text{Rabi}}{T_\pi},\qquad T_\pi=\frac{1}{2f_\text{Rabi}}.
$$

$Q$ 越高意味着在相干时间内可完成越多的旋转循环；$Q\gtrsim 100$ 通常对应平均单比特门保真度超过 99%。

## 参数与量级

下表汇总本站论文与外部文献中给出的 Rabi 振荡特征量级。频率与品质因子的具体值强烈依赖材料体系、驱动方式与工作点（失谐 $\varepsilon$、磁场方向 $\theta_B$）：

| 体系与实现 | $f_\text{Rabi}$ | $T_{2}^\text{Rabi}$ | $Q$ | 工作点 / 备注 | 来源 |
| --- | --- | --- | --- | --- | --- |
| Si/SiGe 双量子点电荷比特（微波驱动） | $\sim 1\ \mathrm{GHz}$（振荡周期） | $T_2^*\approx 1.5\ \mathrm{ns}$ | 约 9（按 $2T_2^*f_\text{Rabi}$ 计） | Eriksson 小组数据 | 余国栋 2016 |
| Si 单电子自旋比特（ESR / EDSR） | $1.256\ \mathrm{MHz}$ | $5.4\ \mu\mathrm{s}$ | 约 13.5 | $f_0=19.787\ \mathrm{GHz}$ | 胡睿梓 2022 |
| Si 翻转模式单自旋比特 | $1.2620\ \mathrm{MHz}$ | $6.46\ \mu\mathrm{s}$ | 约 16.3 | $\varepsilon=0$（对称点） | 胡睿梓 2022 |
| Si 翻转模式单自旋比特 | $0.135\ \mathrm{MHz}$ | $7.01\ \mu\mathrm{s}$ | 约 1.9 | $\varepsilon=3\ \mathrm{meV}$（远离对称点） | 胡睿梓 2022 |
| Si/SiGe 一维阵列 EDSR | 最大约 $10\ \mathrm{MHz}$ | 与 $A_\text{MW}$ 相关 | 最大 $>300$ | 最佳 $A_\text{MW}\approx 7\ \mathrm{mV}$ | 王宁 2025 |
| Si-MOS 自旋比特（条形微磁体） | $0.58$–$2.38\ \mathrm{MHz}$ | — | $5$–$100$ | $\theta_B$ 在 90°–340° 间扫描 | 楚凝 2025 |
| 应变 Ge 空穴自旋比特 | 与驱动功率呈线性，最大达百 MHz 量级 | — | — | 翻转模式 + 内禀自旋轨道耦合 | 周雨晨 2026 |
| 单电子自旋比特 ESR（GaAs） | 最大 $3.3\ \mathrm{MHz}$，$t_{\pi/2}\approx 75\ \mathrm{ns}$ | — | — | 经典早期实验 | 王保传 2017 |

几个值得记住的量级：

- 自旋比特 ESR 的 $f_\text{Rabi}$ 通常在 1–10 MHz 之间，对应 $t_\pi$ 约 50–500 ns；
- 电荷比特微波驱动可达数百 MHz 至数 GHz，门快但 $T_2^*$ 短；
- 翻转模式（flopping mode）能在对称点把 $f_\text{Rabi}$ 和 $Q$ 同时提升约一个量级；
- 微磁体几何与磁场方向 $\theta_B$ 决定 SSOC 各向异性，最佳 $Q$ 并不一定在常规 $\theta_B=0$ 方向。

## 实验特征与测量

**基本测量流程。** 标定比特谐振频率 $f_0$ 之后，把微波频率固定在 $f_0$，扫描脉冲持续时间 $t_\text{MW}$，逐点测量 $|0\rangle$ 态的概率 $P_\uparrow(t)$——这就是 Rabi 振荡曲线。对自旋比特，先用啁啾（chirp）脉冲或快速绝热通道粗扫谐振峰，再用单频微波精标 $f_0$；电荷比特则直接在能级反交叉处施微波。拟合上述衰减正弦即可提取 $f_\text{Rabi}$、$T_{2}^\text{Rabi}$、振幅 $A$、相位 $\varphi_0$ 与基线 $B$。

**Rabi 振荡条纹与 V 形图。** 把微波脉冲长度固定、扫描微波频率 $f_s$，得到条纹图：共振点处振荡幅度最大，$f_s$ 偏离 $f_0$ 时频率升高、幅度衰减，整体呈"V 形"——这是诊断谐振点是否稳定的重要工具。条纹图还能直接读出 $f_0$ 的偏移并对长期漂移做后处理校准。

**功率优化与 $Q$ 因子曲线。** 改变微波幅值 $A_\text{MW}$ 重复 Rabi 测量，可同时提取 $f_\text{Rabi}$ 与 $T_{2}^\text{Rabi}$：$f_\text{Rabi}$ 随 $A_\text{MW}$ 线性增加，$T_{2}^\text{Rabi}$ 在低功率段受限于比特本征退相干、高功率段受限于微波加热，$Q=2T_{2}^\text{Rabi}f_\text{Rabi}$ 在某一中间功率出现峰值——这就是**最佳工作点**，与单比特门保真度的最优值对应。

**频率扫描测 $T_2^*$。** 用频率啁啾脉冲或长脉冲扫频测谐振峰，半高宽反推出 $T_2^*\approx 1/(\pi\Delta_\text{FWHM})$，作为 Rabi 振荡前预表征。啁啾脉冲还可绕过 Landau–Zener 透射概率的限制——Landau–Zener 输运给出绝热演化概率 $P=1-\exp\!\big(-4\pi^2 f_\text{Rabi}^2/(\partial_t\Delta f)\big)$，当啁啾速率 $\partial_t\Delta f$ 远小于 $f_\text{Rabi}^2$ 时近似绝热。

**各向异性诊断。** 在 Si-MOS 翻转模式比特中，把外磁场沿面内旋转 $\theta_B$，可观察到 $f_\text{Rabi}$、$T_{2}^\text{Rabi}$ 与 $Q$ 的非正弦各向异性——这是微磁体合成自旋轨道耦合（SSOC）与材料本征自旋轨道耦合（ISOC）的共同签名。最佳品质因子位置往往不在 $\theta_B=0$，而是偏向一定角度——这是工程化优化单比特门的关键抓手。

<!-- FIGURE: 实验 Rabi 振荡数据图：左列为衰减正弦拟合，给出 f_Rabi 与 T_2^Rabi；右列为 V 形条纹图，标注 f_0 与 V 形斜率 -->

## 不同实现路径

不同量子比特体系的 Rabi 振荡在物理图像上完全一致，但 $\Omega_R$ 的物理来源与可达量级差异巨大：

- **电荷比特（[[qubit-control/charge-qubit|charge qubit]]）**：以双量子点中电子在左/右的位置作为逻辑态，能级差 $\hbar\omega_q$ 可达数百 MHz 至 GHz。微波直接驱动门电极即可获得 $\Omega_R$ 在 100 MHz 量级的 Rabi 振荡——门快但对电荷噪声敏感；可同时用于 [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]、[[qubit-control/lzsm-interference|LZSM 干涉]]等高频实验。
- **单自旋比特（[[qubit-control/single-spin-qubit|single-spin qubit]]）**：以电子自旋 $|\uparrow\rangle/|\downarrow\rangle$ 为基态。早期通过片上 ESR 天线施加横向交变磁场，$\Omega_R=\gamma B_1$，典型 $f_\text{Rabi}$ 在 MHz 量级；现代实验普遍改用 [[qubit-control/electric-dipole-spin-resonance|EDSR]]，用交流电场代替天线，配合微磁体磁场梯度或内禀自旋轨道耦合把电场转换为有效交变磁场。
- **翻转模式单自旋比特（flopping mode qubit）**：在双量子点对称点 $\varepsilon=0$ 处工作，载流子波函数在两量子点间高度杂化，电偶极增强使 $f_\text{Rabi}$ 与 $Q$ 同步提升约一个量级；同时获得电荷比特式的甜点（对失谐电荷噪声不敏感）。该思路也用于 [[qubit-control/resonant-exchange-qubit|共振交换比特]] 与 [[qubit-control/hybrid-qubit|杂化比特]]。
- **空穴自旋比特（[[qubit-control/hole-spin-qubit|hole-spin qubit]]）**：在 Ge、Si/Ge 异质结中利用内禀自旋轨道耦合做 EDSR，$f_\text{Rabi}$ 可达数百 MHz；磁场方向与微磁体几何的优化可同时改善相干时间与操控保真度。
- **单三重态比特（[[qubit-control/singlet-triplet-qubit|singlet-triplet qubit]]）**：通常用电脉冲做 $J$ 调制实现 $|S\rangle$ 与 $|T_0\rangle$ 之间的 Landau–Zener 翻转；微波 Rabi 振荡方案也有报道，但应用较少。
- **腔驱动读出（[[readout-measurement/dispersive-readout|dispersive readout]]）**：比特与 [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 腔]]耦合时，连续微波可同时驱动比特 Rabi 振荡与腔透射信号，二者时间分辨的对比可分离纯退相位 $T_\varphi$ 与能量弛豫 $T_1$。

## 与其他概念的关系

- **Rabi 振荡 vs. Ramsey 干涉**：$\pi/2$—等待—$\pi/2$ 序列把相位演化投影为幅度振荡，提取 $T_2^*$；而 Rabi 直接测 $\Omega_R$ 与 $T_{2}^\text{Rabi}$。二者分别给出"门有多快"与"相干有多长"，共同支撑门保真度的随机基准测试。
- **Rabi 振荡 vs. Landau–Zener 跃迁**：连续频率扫描过反交叉点时，若通过速率满足 Landau–Zener 绝热条件则几乎完全绝热跟随，否则以一定概率停留在初态；脉冲 Rabi 振荡则近似突变驱动。Landau–Zener 概率 $P=1-\exp(-4\pi^2 f_\text{Rabi}^2/\partial_t\Delta f)$ 直接把两条路径联系起来。
- **Rabi 振荡 vs. 单比特门保真度**：$Q$ 因子给出保真度的初步上限，$Q=300$ 已对应 $>99.6\%$；真正报出的保真度还需扣除 state-preparation-and-measurement（SPAM）误差与 [[qubit-control/dynamical-decoupling|动力学解耦]] 序列中的累积误差。
- **Rabi 振荡 vs. 几何门**：在 [[qubit-control/geometric-quantum-gate|几何相位门]] 中，Rabi 振荡仍是底层驱动工具，但门末态由几何相位决定，对某些噪声（共振频率抖动）更鲁棒；二者并不互斥。
- **Rabi 振荡 vs. 退相干机制**：$T_{2}^\text{Rabi}$ 与 [[materials-devices/charge-noise|电荷噪声]]、核自旋噪声、驱动幅度噪声都耦合，是诊断噪声谱的载体；通过测不同 $A_\text{MW}$ 下的 $T_{2}^\text{Rabi}$ 可把电荷噪声与纯高频去耦区分开。
- **Rabi 振荡 vs. 真空 Rabi 振荡**：腔量子电动力学中"原子"与腔真空场交换光子给出真空 Rabi 振荡（见 [[circuit-qed/jaynes-cummings-model|JC 模型]] 与 [[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]）；这里的 Rabi 振荡特指外加经典驱动下的态占据交换。二者形式相似、驱动来源不同。

## 延伸阅读

- E. Kawakami, P. Scarlino, D. R. Ward, D. E. Savage, M. G. Lagally, M. Friesen, S. N. Coppersmith, M. A. Eriksson, L. M. K. Vandersypen, "Microwave-driven coherent operation of a semiconductor quantum dot charge qubit", *Nature Nanotechnology* (2014). [DOI: 10.1038/nnano.2014.336]
- M. Veldhorst, J. C. C. Hwang, C. H. Yang, A. W. Leenstra, B. de Ronde, J. P. Dehollain, J. T. Muhonen, F. E. Hudson, K. M. Itoh, A. Morello, A. S. Dzurak, "A fault-tolerant addressable spin qubit in a natural silicon quantum dot", *Nature Nanotechnology* (2016). [arXiv: 1602.07833]
- J. C. C. Hwang et al., "Dynamic sweet spot of driven flopping-mode spin qubits in planar quantum dots", *Physical Review B* (2024). [DOI: 10.1103/PhysRevB.110.245301]
- S. Bosco, J. Zou, D. Loss, "Simple model for electrical hole spin manipulation in semiconductor quantum dots: Impact of dot material and orientation", *arXiv* (2019). [arXiv: 1901.09563]

## 论文依据

- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 63–65：双量子点单电荷比特的微波驱动 Rabi 振荡与 Ramsey 操作综述（第 3 章导言），以及 Si/SiGe 电荷比特 Rabi 振荡实测数据。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 7：论文摘要列出"微波驱动的拉比振荡以及 Ramsey 操作"作为单比特操控方法之一。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 69–71：图 3.7 Eriksson 小组 Si/SiGe 电荷比特 Rabi 振荡，振荡周期约 1 GHz、$T_2^*=1.5\ \mathrm{ns}$；以及布洛赫球面上 Rabi 旋转与 Ramsey、Hahn-echo 的几何解释。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 4–5：摘要明确"成功观测到 Rabi 振荡"以及翻转模式"比特 Rabi 振荡频率和质量因子提高了一个数量级"。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 25–26：式 (1.1)–(1.2) 给出实验室系与旋转系哈密顿量，旋波近似下的 $H_\text{rot}=\hbar(\omega_\text{drive}-\omega_0)S_z+\hbar\gamma B_1(S_x\cos\varphi-S_y\sin\varphi)$，以及 Rabi 频率 $f_\text{Rabi}=\gamma B_1$ 的定义。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 91–92：式 (4.7) $P(t)=A\exp(-t/T_{2}^\text{Rabi})\sin(f_\text{Rabi} t)$ 拟合单自旋 Rabi 振荡，给出 $f_\text{Rabi}=1.256\pm 0.003\ \mathrm{MHz}$、$T_{2}^\text{Rabi}=5.4\pm 0.4\ \mu\mathrm{s}$。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 109–110：翻转模式自旋比特 Rabi 振荡的 V 形条纹与失谐依赖，在 $\varepsilon=0$ 处 $f_\text{Rabi}=1.2620\pm 0.002\ \mathrm{MHz}$、$T_{2}^\text{Rabi}=6.46\pm 0.39\ \mu\mathrm{s}$，$\varepsilon=3\ \mathrm{meV}$ 处降至 $0.135\ \mathrm{MHz}$；式 $Q=2T_{2}^\text{Rabi}f_\text{Rabi}$ 的定义。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 7：几何相位单比特门"在较宽的拉比频率范围内均可实现超过 99% 的操控保真度"，与传统动力学门对比验证噪声鲁棒性。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 14：5.3.3 节"空穴自旋比特的拉比振荡与品质因子"作为系统表征的一环。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 18：图 5.7 给出"量子比特的共振频率以及拉比振荡"。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 24：早期砷化镓量子点 Rabi 操控"本征相干时间 $T_2^*$ 仅约为 10 ns，通过引入动力学解耦序列相干时间可延长至毫秒量级，并在此基础上实现最高约 99.5% 的单比特操控保真度"。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 24：单电子自旋比特 Rabi 振荡原理，ESR 共振条件 $h\nu=g_e\mu_B B_\text{ac}$，"翻转的快慢，即拉比振荡频率，取决于 $B_\text{ac}$ 的振幅（或者说功率）"。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 25：实验上 Rabi 振荡曲线示例，最大 $f_\text{Rabi}=3.3\ \mathrm{MHz}$，对应 $t_{\pi/2}\approx 75\ \mathrm{ns}$。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF pp. 23–24：图 1.7 给出 Rabi 振荡在布洛赫球上的三个时间阶段示意，以及把 Rabi 振荡作为 $|0\rangle\leftrightarrow|1\rangle$ 反转基本操作。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF p. 68：通过 Rabi 振荡构造 $|LL\rangle$ 与 $|RL\rangle$ 之间的可调耦合 $J$。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 108、125：通过电荷量子比特的相干振荡（coherent oscillation）测得 Rabi 频率，从而得到失谐势垒隧穿率与能级反交叉参数。
- [[sources/wang-ning-2025|王宁 2025]]，PDF pp. 33–34：式 (1.14)–(1.15) 给出实验室系与旋转系哈密顿量、$\Omega_R=g\mu_B B_\text{ac}/\hbar$ 的 Rabi 频率定义，以及"当 $\varphi=0$ 时，电子自旋将绕 $x$ 轴在 $|0\rangle$ 态和 $|1\rangle$ 态旋转，称为拉比振荡"的布洛赫球图像。
- [[sources/wang-ning-2025|王宁 2025]]，PDF pp. 60、63–64：双轴操控的 Rabi 振荡条纹（图 3.4a）以及式 (3.4)–(3.5) $Q=T_{2}^\text{Rabi}/T_\pi$，$Q>300$ 时对应单比特门保真度超过 99.6%；最佳工作点在 $A_\text{MW}\approx 7\ \mathrm{mV}$ 附近。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 7：Si-MOS 量子点中通过 Rabi 振荡表征合成自旋轨道耦合各向异性，发现"比特操控最优位置由微磁体结构决定的合成自旋轨道耦合场分布决定"。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 41：式 (2.6) 给出失谐情形下的 Rabi 振荡概率公式 $P_{\uparrow\downarrow}=\frac{1}{2}\big[1-2\Omega_R^2/(\Omega_R^2+\Delta^2)\cos(\sqrt{\Omega_R^2+\Delta^2}\,t)\big]$。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF pp. 75–77：拉比频率各向异性在 $\theta_B=90°$ 时 $f_\text{Rabi}=2.38\ \mathrm{MHz}$、$\theta_B=340°$ 时 $0.58\ \mathrm{MHz}$（相差 4.1 倍）；品质因子 $Q$ 在 270° 附近达到极大值约 100，在 340° 附近降至约 5；以及品质因子定义 $Q=(d\mathbf{B}_\text{tr}^\text{tot}/dy)/\sqrt{(dB_\text{long}/dy)^2+(dB_\text{long}/dx)^2}$。
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF p. 27：SOT 操控方案中的 Rabi 频率公式 $\Omega=g\mu_B B_1/(2\hbar)$，与驱动场相位 $\varphi$ 共同决定旋转轴。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 18、19：图 5.7 与表 5.1（不同 $f_\text{Rabi}$ 下的单比特几何门保真度）作为 Rabi 振荡与门性能的直接对照。
