---
title: 翻转模式量子比特
description: 在双量子点电荷对称点借助显著电偶极运动增强自旋 EDSR 与腔耦合的工作模式。
aliases:
  - flopping-mode qubit
  - 翻转模式自旋比特
  - 翻转模式
  - flopping-mode spin qubit
tags:
  - 扩展与自动化
  - 自旋量子比特
  - 强耦合
date: 2026-09-08
---

<div class="entry-lead">翻转模式让一个自旋的轨道波函数在双量子点之间强烈摆动。这个"大电偶极"同时增强微磁体梯度下的 EDSR 和自旋–光子耦合，把单自旋比特的 Rabi 频率、品质因子与腔耦合强度都拉高一个量级。</div>

## 物理图像与定义

翻转模式（flopping mode）是把单自旋[[qubit-control/single-spin-qubit|自旋量子比特]]编码在一个[[fundamentals/double-quantum-dot|双量子点]]中并把工作点调到**电荷失谐零点（symmetric point，$\varepsilon=0$）**的一种模式：电子不再被束缚在某个量子点的势阱里，而是处于左右两点的相干叠加态 $(\vert L\rangle\pm\vert R\rangle)/\sqrt{2}$ 之间，对交流电场（电极驱动或腔真空涨落）的响应因此变大——电偶极矩由"被束缚的小偶极"变为"覆盖点间距的大偶极"。在硅量子点中，硅材料本征自旋轨道耦合（[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振，EDSR]]）弱，传统方案只能依靠微磁体（钴薄膜等）产生梯度磁场，再经 EDSR 完成电控自旋旋转；而翻转模式则让梯度磁场在电子大尺度移动时被更充分地"采样"，从而使有效自旋–轨道耦合（synthetic spin–orbit coupling）整体放大。

物理上的关键有三点：

- **电偶极矩放大**：$\varepsilon=0$ 处左右本征态是 $\vert\pm\rangle=(\vert L\rangle\pm\vert R\rangle)/\sqrt{2}$，电荷分布跨整个双点，交流电场在 $\varepsilon$ 方向的微扰直接把电子在 $\vert L\rangle$、$\vert R\rangle$ 之间翻转；
- **梯度磁场被电子运动采样**：微磁体产生的纵向磁场差 $b_z$ 和横向磁场差 $b_\perp$ 在电子跨越双点时被依次感受，于是梯度磁场充当自旋–轨道耦合源；
- **隧穿耦合与塞曼能的角色变化**：当 $2t_c > E_z$ 时，零失谐处比特频率主要由 $2t_c$ 决定；而 $2t_c<E_z$ 时，零失谐处会出现一个对外磁场线性不敏感的"鼓包"，对应翻转模式自旋比特的电荷噪声甜点。

英文名 *flopping mode* 形象地描述了电子在两点之间"扑腾"的状态。

<!-- FIGURE: 双量子点翻转模式工作点示意：左图为电荷稳定图上的 (1,0)–(0,1) 反交叉区域，标注 $\varepsilon=0$；右图为双点势阱在 $\varepsilon=0$ 处电子云分布在两个量子点上的等值面 -->

## 理论模型：四能级哈密顿量与翻转模式比特

翻转模式自旋比特的工作点在 $\varepsilon=0$ 处由四能级哈密顿量描述。基矢取 $\{|L,\downarrow\rangle,|L,\uparrow\rangle,|R,\downarrow\rangle,|R,\uparrow\rangle\}$，把[[fundamentals/tunnel-coupling|隧穿耦合]] $t_c$、平均塞曼能 $E_z$、两点的纵向塞曼差 $\delta E_z = g\mu_B b_z$、横向塞曼差 $2t_\mathrm{SO}=g\mu_B b_\perp$ 一并写进来：

$$
H_\mathrm{fm}=\frac{1}{2}
\begin{pmatrix}
-\varepsilon-E_{z1} & -2t_\mathrm{SO} & 2t_c & 0\\
-2t_\mathrm{SO} & -\varepsilon+E_{z1} & 0 & 2t_c\\
2t_c & 0 & \varepsilon-E_{z2} & 2t_\mathrm{SO}\\
0 & 2t_c & 2t_\mathrm{SO} & \varepsilon+E_{z2}
\end{pmatrix},
$$

其中 $E_{z1,z2}$ 是两点的塞曼能。把轨道部分先对角化得到能级 $\Omega=\sqrt{\varepsilon^2+4t_c^2}$ 与混合角 $\theta=\arctan(2t_c/\varepsilon)$（注意两套文献里 $\theta$ 与 $\psi=\arctan(2t_c/\varepsilon)$ 的取向恰好相反），便可分离出自旋部分。

### 零失谐特例：$\varepsilon=0$

零失谐处 $\theta=0$，轨道本征态 $|\pm\rangle=(|L\rangle\pm|R\rangle)/\sqrt{2}$。把 $H_\mathrm{fm}$ 用 $\{|-,\downarrow\rangle,|-,\uparrow\rangle,|+\,\downarrow\rangle,|+\,\uparrow\rangle\}$ 重新展开（参见[[sources/ref-20|文献 20]]，PDF pp. 70–71，式 5.1–5.4），得到

$$
E_{3,0}=\pm\tfrac{1}{2}\sqrt{(2t_c+E_z)^2+\Delta B_x^2},\qquad
E_{2,1}=\pm\tfrac{1}{2}\sqrt{(2t_c-E_z)^2+\Delta B_x^2},
$$

$$
|0\rangle\simeq|{-},\downarrow\rangle,\qquad
|3\rangle\simeq|{+},\uparrow\rangle,
$$

$$
|1\rangle=\cos\frac{\Phi}{2}|{-},\uparrow\rangle+\sin\frac{\Phi}{2}|{+},\downarrow\rangle,\qquad
|2\rangle=\sin\frac{\Phi}{2}|{-},\uparrow\rangle-\cos\frac{\Phi}{2}|{+},\downarrow\rangle,
$$

其中自旋–轨道混合角 $\Phi=\arctan(\Delta B_x/(2t_c-E_z))$。最低两个本征态 $|0\rangle$、$|1\rangle$ 即翻转模式比特 $|g\rangle$、$|e\rangle$。当 $\Delta B_x\ll 2t_c$ 时混合角 $\Phi$ 很小，$|1\rangle$ 中 $|+,\downarrow\rangle$ 成分压低，但仍带有一部分左/右混合的轨道态，因此自带电偶极。

### 比特频率

把 $\delta E_z=2t_\mathrm{SO}$ 当作微扰，用二阶非简并微扰给出最低两个能级之间的能量差（[[sources/ref-15|文献 15]]，PDF p. 108，式 5.10）：

$$
E_s\simeq E_z-\frac{E_z^2-\varepsilon^2}{2E_z(\Omega^2-E_z^2)}(2t_\mathrm{SO})^2-\frac{\varepsilon}{\Omega}\delta E_z.
$$

前一项是梯度磁场对 $E_z$ 的横向修正，第二项把"电子在左右两点的概率差"乘以两点塞曼差，体现为失谐对频率的线性贡献。当 $2t_c\gg E_z$ 时横向修正项是二阶小量，比特频率的"S 形"主要来自 $\varepsilon/\Omega\cdot\delta E_z$ 项；当 $2t_\mathrm{SO}$ 足够大时，$\varepsilon=0$ 附近会出现一个极值点——比特频率关于 $\varepsilon$ 的导数为零，对应电荷噪声的"甜点"。

### Rabi 频率

在[[qubit-control/rabi-oscillation|Rabi 振荡]]中，零失谐处微波驱动的电子在 $\vert+\rangle$、$\vert-\rangle$ 间翻转的速率为 $f_\mathrm{charge}=ed E_\mathrm{ac}$。再叠加 $2t_\mathrm{SO}$ 引入的自旋–轨道杂化后，比特 Rabi 频率为（[[sources/ref-15|文献 15]]，PDF p. 107，式 5.7）

$$
f_\mathrm{spin}(0)=\frac{4t_c t_\mathrm{SO}}{|4t_c^2-E_z^2|}\,f_\mathrm{charge},
$$

对一般失谐下

$$
f_\mathrm{spin}=\frac{4t_c t_\mathrm{SO}}{|\Omega^2-E_z^2|}\,f_\mathrm{charge}\cos\theta.
$$

两个分母分别表达两点隧穿耦合与塞曼能的相对大小，以及电子轨道波函数随失谐向单点收缩导致的衰减。**零失谐处 Rabi 频率的最大提升**就来自这两个因子同时变大的乘积。

## 工作点与"甜点"

对称点带来一个看似矛盾的结果：电偶极矩最大意味着对**电场噪声**最敏感，但同时失谐的一阶导数 $\partial f_q/\partial\varepsilon$ 又可以在特定条件下消失。出现这种"翻转模式甜点"的条件是（[[sources/ref-15|文献 15]]，PDF p. 108）：

- $2t_\mathrm{SO}$ 足够大使式 5.10 第二项贡献显著（$2t_c\gg E_z$ 条件不再成立）；
- 极值点位置正好落在 $\varepsilon\approx 0$ 附近。

满足这两个条件时，比特频率在零失谐附近取极值，电荷噪声的一阶贡献为零，比特相当于一个"自带甜点"的电荷比特。在品质因子 $Q=2T_2^\mathrm{Rabi}f_\mathrm{Rabi}$ 上表现为极大值。

实验上这种甜点的观测条件较为苛刻：硅中本征自旋轨道耦合弱，$t_\mathrm{SO}$ 主要靠微磁体的 $b_\perp$，只有 $2t_c$ 不太大时横向修正项才会和 $\delta E_z$ 项可比拟。Si/SiGe 中的早期实现选择 $2t_c\sim E_z$ 区段，让鼓包明显。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 工作点 | 双量子点 $\varepsilon=0$，混合态电子分布 | 翻转模式定义 |
| 隧穿耦合 $2t_c$ | $\sim 800\ \mathrm{GHz}$（Si-MOS，强隧穿耦合双量子点） | 文献 15 |
| 隧穿耦合 $2t_c$ | $\sim 70\ \mathrm{GHz}$（同片另一双点，可重复性验证） | 文献 15 |
| 隧穿耦合 $2t_c/(2\pi)$ | $8.0\ \mathrm{GHz}$（Si/SiGe RDQD），$9.4\ \mathrm{GHz}$（LDQD） | 文献 20 |
| 微磁体横向磁场差 $b_\perp$ | $\sim 0.02\ \mathrm{mT}$（Si-MOS 模拟值） | 文献 15 |
| 电荷翻转频率 $f_\mathrm{charge}$ | $2.36\pm0.12\ \mathrm{GHz}$（拟合式 5.9 反推） | 文献 15 |
| 比特谐振频率 $f_q$ | $\sim 19.82\ \mathrm{GHz}$（Si-MOS，$B_\mathrm{ext}\approx 604$–$605\ \mathrm{mT}$） | 文献 15 |
| 比特谐振频率 $f_q$ | $7.5$–$7.55\ \mathrm{GHz}$（Si/SiGe 三量子点） | 文献 20 |
| Rabi 频率 $f_\mathrm{Rabi}$ | $1.2620\pm0.002\ \mathrm{MHz}$（$\varepsilon=0$，Si-MOS） | 文献 15 |
| Rabi 频率 $\Omega_\mathrm{Rabi}/2\pi$ | $16.9\ \mathrm{MHz}$（RDQD），$13.7\ \mathrm{MHz}$（LDQD） | 文献 20 |
| 退相干时间 $T_2^\mathrm{Rabi}$ | $6.46\pm0.39\ \mu\mathrm{s}$（Si-MOS） | 文献 15 |
| 退相干时间 $T_2^\mathrm{Rabi}$ | $152\ \mathrm{ns}$（RDQD），$304\ \mathrm{ns}$（LDQD） | 文献 20 |
| 自旋退相干 $\gamma_s/2\pi$ | $4.6\ \mathrm{MHz}$（RDQD），$2.2\ \mathrm{MHz}$（LDQD） | 文献 20 |
| 品质因子 $Q$ | $2T_2^\mathrm{Rabi}f_\mathrm{Rabi}$，相比大失谐提升一个量级 | 文献 15 |
| 自旋–光子耦合 $2g_s/2\pi$ | $43.5\ \mathrm{MHz}$（RDQD），$27.6\ \mathrm{MHz}$（LDQD） | 文献 20 |
| 谐振腔线宽 $\kappa^*/2\pi$ | $7.5\ \mathrm{MHz}$（RDQD），$6.8\ \mathrm{MHz}$（LDQD） | 文献 20 |
| 全局电荷–光子耦合 $g_0/2\pi$ | $\sim 175\ \mathrm{MHz}$（Si/SiGe） | 文献 20 |
| 高阻抗腔阻抗 $Z_r$ | $\sim 2.5\ \mathrm{k\Omega}$（$f_r=7.332\ \mathrm{GHz}$，$\kappa/2\pi=5.13\ \mathrm{MHz}$） | 文献 20 |
| 电子温度 $T_e$ | $85.9$–$182.7\ \mathrm{mK}$（无微波 vs. $-5\ \mathrm{dBm}$ 微波驱动） | 文献 15 |
| 臂杆系数 $\alpha_\mathrm{LP}$ | $154\pm4\ \mathrm{meV/V}$（磁输运谱线标定） | 文献 15 |
| 臂杆系数 $\alpha_\mathrm{BC}$ | $340\ \mathrm{meV/V}$（第二个量子点） | 文献 15 |

## 实验特征与测量方法

### 隧穿耦合与失谐的标定

在 Si/SiGe 中强隧穿耦合（$2t_c\sim 800\ \mathrm{GHz}$）使双点的势垒形状接近单量子点，$(0,1)$–$(1,0)$ 的反交叉隧穿线在电荷稳定图上几乎消失，需要通过**翻转模式比特频率谱**反推零失谐位置（[[sources/ref-15|文献 15]]，PDF p. 108）。具体做法：保持微波脉冲的快速绝热通道（chirped pulse）扫过失谐点，记录不同 $\varepsilon$ 下比特谐振频率 $f_q(\varepsilon)$，曲线呈现"反交叉"形，零失谐位置对应曲线对称轴中心。再用式 5.10 拟合得到 $2t_c$、$\delta E_z$、$2t_\mathrm{SO}$ 等参数。

### Rabi 振荡

固定微波持续时间 $\tau_B$，扫描微波频率 $f_s$ 可得到 Rabi 振荡的"V 形条纹"图（V-shape chevron）：$f_s=f_q$ 时振幅最大，偏离时振荡频率增加、振幅降低（[[sources/ref-15|文献 15]]，PDF p. 109）。先扫频率后扫时间的好处是：长时间测量中比特频率若发生缓慢漂移，可以后期对 V 形图做中心对齐校正；先扫时间则无法补救。在 Si-MOS 单发读出条件下，文献 15 在 $\varepsilon\approx 0.5\ \mathrm{meV}$ 处测得 $f_\mathrm{Rabi}=1.089\pm0.002\ \mathrm{MHz}$，零失谐处 $f_\mathrm{Rabi}=1.262\ \mathrm{MHz}$（PDF p. 110）；相比 $\varepsilon=\pm 4.5\ \mathrm{meV}$ 处提升约一个量级，$T_2^\mathrm{Rabi}$ 几乎不变。

### 自旋退相干与质量因子

定义 $Q=2T_2^\mathrm{Rabi}f_\mathrm{Rabi}$。零失谐处 $f_\mathrm{Rabi}$ 增加一个量级而 $T_2^\mathrm{Rabi}$ 不变，$Q$ 同步提升一个量级。这说明翻转模式带来的额外电荷混合没有显著引入新的电荷噪声通道——样品中主导退相干的是微磁体导致的纵向磁场梯度（[[sources/ref-15|文献 15]]，PDF p. 110）。Ramsey 实验给出 $\varepsilon=0$ 与 $\varepsilon=1.5\ \mathrm{meV}$ 处的 $T_2^*\approx 0.42\ \mu\mathrm{s}$（PDF p. 111），两者基本一致，进一步支持上述结论。

### 谐振腔中的翻转模式

将翻转模式比特嵌入[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]的杂化器件（[[sources/ref-20|文献 20]]，PDF pp. 74–77），有效自旋–光子耦合强度可以表示为

$$
g_s \approx \frac{g\mu_B\Delta B_x}{2(2t_c-\hbar\omega_r)}\,g_c,
$$

即相对电荷–光子耦合 $g_c$ 引入一个 $\Delta B_x/(2t_c-\hbar\omega_r)$ 的比例因子。当 $2t_c$ 与 $\hbar\omega_r$ 接近时 $g_s$ 增大、$\gamma_s/\gamma_c$ 同步上升；为了兼顾强自旋–光子耦合与较小退相干，常把工作点选在 $2t_c$ 略小于 $\hbar\omega_r$ 的位置。判据仍然是 $g_s>\kappa^*,\gamma_s$，对应[[circuit-qed/strong-coupling|强耦合]]区。

## 阵列意义：从双点到三量子点

把翻转模式比特放在[[scaling-automation/quantum-dot-array|量子点阵列]]中能解决两个传统自旋比特在大规模扩展中遇到的难题：

- **电偶极矩大 → 易与腔耦合**：单个比特无需直接连接到腔电极也能形成强自旋–光子耦合。文献 20 在 Si/SiGe 三量子点中分别把翻转模式比特编码在 RDQD（QD2–QD3，电极 P2/P3 直接连腔）与 LDQD（QD1–QD2，所有电极均不连腔）中，测得 $g_s/2\pi$ 分别为 21.8 MHz 和 13.8 MHz（[[sources/ref-20|文献 20]]，PDF p. 68；表 5.1 见 PDF p. 86）。LDQD 的成功演示表明谐振腔的耦合半径远大于自身栅极覆盖范围，可以把分布在多个量子点上的比特同时与同一腔模耦合。
- **翻转模式的 Rabi 频率高 → 操控快**：文献 20 在 RDQD 与 LDQD 中分别实现 $\Omega_\mathrm{Rabi}/2\pi=16.9\ \mathrm{MHz}$ 与 $13.7\ \mathrm{MHz}$ 的 Rabi 频率，$T_2^\mathrm{Rabi}$ 分别为 152 ns 与 304 ns（PDF p. 85）。在多比特共享腔模时这些参数直接决定门操作的串扰水平和读取速度。

阵列中的具体编码方式有两种：

- **直接连接**：比特占据 RDQD，其中一个量子点（QD3）的电极直接连到腔电极；这是早期 Si/SiGe 自旋–光子强耦合实验的常见做法。
- **间接耦合**：比特占据 LDQD，三个电极（P1/B1/P2）都不与腔电极相连；通过介电环境与共享栅极电容实现与腔的耦合。这一做法把强耦合从"电极邻接"解放出来，使得同一条腔总线上的比特不必密集排列在腔电极附近，为更大规模的[[scaling-automation/two-dimensional-array|二维量子点阵列]]留出空间。

此外，三量子点阵列还允许"备品比特"——LDQD 中未被利用的量子点可作为电荷态探针或辅助比特使用（[[sources/ref-20|文献 20]]，PDF p. 79）。

## 优势、代价与权衡

**优势：**

- 大电偶极矩 + 梯度磁场 → EDSR 效率提升一至三个数量级，Rabi 频率可达十 MHz 以上；
- 比特频率可由 $2t_c$ 调谐，相邻比特之间可以通过电压失谐来寻址；
- 与高阻抗腔配合即可获得强自旋–光子耦合，为[[circuit-qed/cavity-mediated-coupling|腔介导]]长程耦合打开通道。

**代价：**

- 电荷混合增加 → 比特**频率**对电场噪声更敏感；只有当 $2t_\mathrm{SO}$ 大到能形成"翻转模式甜点"时才有一阶电荷噪声保护；
- 隧穿耦合 $2t_c$ 与谐振腔频率 $\omega_r$ 必须接近（$2t_c\sim\hbar\omega_r$）才能拿到大的 $g_s$，这增加了样品设计的耦合带宽要求；
- 比特的电学可调性较差：比特频率仍依赖 $E_z\propto g\mu_B B_\mathrm{ext}$，不能通过电极电压快速、独立地调节每个比特；
- 单发读出需要快速穿过反交叉区，否则 Landau–Zener 隧穿会把激发态泄露到基态（[[sources/ref-15|文献 15]]，PDF p. 97）。

## 实验实现要点

- **强隧穿耦合**：$2t_c\gtrsim 800\ \mathrm{GHz}$ 的双量子点形成"准单点"，$(0,1)$–$(1,0)$ 反交叉线消失，零失谐工作点需要靠翻转模式频率谱反推，而非直接看电荷稳定图；
- **绝热读出**：单发读出阶段的电子隧穿速率必须调到合适范围（保证读取保真度），同时必须保证控制阶段穿越反交叉区时为绝热过程，避免 Landau–Zener 泄漏（[[sources/ref-15|文献 15]]，PDF p. 97）；
- **微波加在承载隧穿耦合的电极**：文献 15 将 bias-tee 上的微波通过电极 LP 注入，在 4 K 盘叠加直流；文献 20 则使用 SHFQC 测控一体机直接驱动电极 P1/P2，并校准触发延迟（约 $-100\ \mathrm{ns}$）；
- **高阻抗腔**：$Z_r\sim 1$–$2\ \mathrm{k\Omega}$ 量级，配合翻转模式比特可使 $g_s$ 进入数 MHz 到数十 MHz；
- **可重复性**：同一片样品上不同双量子点重复翻转模式能谱（如 $2t_c\sim 70\ \mathrm{GHz}$ vs. $800\ \mathrm{GHz}$），验证该模式不依赖特定器件几何。

## 与其他概念的关系

- [[qubit-control/single-spin-qubit|单自旋量子比特]]：翻转模式比特是其在双量子点中、零失谐工作点上的一个特例。$|\varepsilon|\gg 2t_c$ 时翻转模式比特退化为标准的 Loss–DiVincenzo 单自旋比特；
- [[fundamentals/double-quantum-dot|双量子点]]：翻转模式必须编码在双量子点上，电荷稳定图的反交叉区域是其工作窗口；
- [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振（EDSR）]]：翻转模式是对 EDSR 驱动效率的工程化放大，其物理本质仍是电场借助自旋–轨道耦合驱动自旋翻转；
- [[fundamentals/tunnel-coupling|隧穿耦合]]：$2t_c$ 同时决定工作点（$f_q\approx 2t_c$）、翻转模式 Rabi 频率的提升幅度（$f_\mathrm{spin}\propto t_c t_\mathrm{SO}$）以及甜点是否存在；
- [[qubit-control/rabi-oscillation|Rabi 振荡]]：翻转模式的标志性实验特征是 Rabi 频率在零失谐处提升一个量级而退相干基本不变；
- [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]：翻转模式把自旋比特的有效电偶极矩放大为电荷比特量级，从而可以经高阻抗腔达到强耦合；
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与[[circuit-qed/strong-coupling|强耦合]]：翻转模式比特与高阻抗腔配合是当前在硅量子点中实现自旋–光子强耦合的主要路线之一；
- [[qubit-control/resonant-exchange-qubit|共振交换量子比特]]：同样依赖梯度磁场与电偶极矩实现快速电控，但 RX 比特把比特频率放到交换能 $J$ 上而摆脱对 $B_\mathrm{ext}$ 的依赖，是翻转模式的互补替代方案；
- [[qubit-control/singlet-triplet-qubit|单态–三重态比特]]：翻转模式可视为单电子版的"对称点"操作，与 S-T 比特中利用反交叉点做 adiabatic passage 的思路相通。

## 延伸阅读

- M. Benito, X. Croot, C. Adelsberger, S. Putz, X. Mi, J. R. Petta, G. Burkard, "Electric-field control and noise protection of the flopping-mode spin qubit", *Physical Review B* (2019). [DOI: 10.1103/PhysRevB.100.125430]
- R.-Z. Hu, R.-L. Ma, M. Ni, Y. Zhou, N. Chu, W.-Z. Liao, Z.-Z. Kong, G. Cao, G.-L. Wang, H.-O. Li, G.-P. Guo, "Flopping-mode spin qubit in a Si-MOS quantum dot", *Applied Physics Letters* (2023). [DOI: 10.1063/5.0137259]
- J. Cayao, M. Benito, G. Burkard, "Programmable two-qubit gates in capacitively coupled flopping-mode spin qubits", *Physical Review B* (2020). [DOI: 10.1103/PhysRevB.101.195438]
- S. M. Young, M. Brickson, J. R. Petta, N. T. Jacobson, "Benchmarking low-power flopping-mode spin qubit fidelities in Si/SiGe devices with alloy disorder", *arXiv:2503.10578* (2025).

## 论文依据

- [[sources/ref-15|文献 15]]，PDF p. 96：第 5 章引言开篇给出双量子点零失谐处电子云在两点之间分布的物理图像。
- [[sources/ref-15|文献 15]]，PDF p. 97：第 5 章引言同时指出翻转模式 EDSR 在 Si/SiGe 中将驱动效率提升三个数量级，并在 Si-MOS 量子点中首次实现；同页讨论波形设置与 Landau–Zener 隧穿泄漏对读出绝热性的要求。
- [[sources/ref-15|文献 15]]，PDF p. 105：5.3.2 节"翻转模式单自旋量子比特的原理"，给出双量子点四能级哈密顿量（式 5.3–5.4）、轨道对角化以及零失谐特例下的本征态。
- [[sources/ref-15|文献 15]]，PDF p. 107：式 5.7 给出零失谐下比特 Rabi 频率 $f_\mathrm{spin}(0)=4t_c t_\mathrm{SO} f_\mathrm{charge}/|4t_c^2-E_z^2|$。
- [[sources/ref-15|文献 15]]，PDF p. 108：式 5.9 与式 5.10，分别给出一般失谐下的 Rabi 频率与最低两个能级差 $E_s$ 的二阶微扰展开；同页讨论 $2t_\mathrm{SO}$ 较大时 $\varepsilon=0$ 附近出现"鼓包"（电荷噪声甜点）的条件。
- [[sources/ref-15|文献 15]]，PDF p. 108：5.3.3 节"翻转模式单自旋量子比特的谐振频率谱"给出比特频率 $f_q$ 随 $\varepsilon$ 变化的 S 形曲线及拟合方法。
- [[sources/ref-15|文献 15]]，PDF p. 109：5.3.4 节给出 Rabi 振荡 V 形条纹的测量流程与读出可见度约 30% 的分析。
- [[sources/ref-15|文献 15]]，PDF p. 110：不同失谐处的 Rabi 振荡测量，$\varepsilon=0$ 处 $f_\mathrm{Rabi}=1.2620\pm0.002\ \mathrm{MHz}$、$T_2^\mathrm{Rabi}=6.46\pm0.39\ \mu\mathrm{s}$；同页定义品质因子 $Q=2T_2^\mathrm{Rabi}f_\mathrm{Rabi}$ 并指出零失谐处 $Q$ 提升一个量级。
- [[sources/ref-15|文献 15]]，PDF p. 111：5.3.5 节给出 Ramsey 实验的测量序列与 $\varepsilon=0$ 处 $T_2^*=0.42\pm0.31\ \mu\mathrm{s}$、$\varepsilon=1.5\ \mathrm{meV}$ 处 $T_2^*=0.43\pm0.02\ \mu\mathrm{s}$。
- [[sources/ref-15|文献 15]]，PDF p. 112：5.3.6 节"翻转模式单自旋量子比特的可重复性"在另一双量子点（$2t_c\sim 70\ \mathrm{GHz}$）中重复翻转模式能谱；同页 5.4 节"本章小结"汇总 $f_\mathrm{Rabi}$ 提升一个量级、$T_2^\mathrm{Rabi}$ 保持稳定、$Q$ 因子同步提升等关键结论。
- [[sources/ref-15|文献 15]]，PDF p. 99：5.2.2 节"硅量子点的磁输运谱线"中标定电极 LP 对第一个量子点的臂杆系数 $\alpha_\mathrm{LP}=154\pm4\ \mathrm{meV/V}$。
- [[sources/ref-15|文献 15]]，PDF p. 100：5.2.3 节给出量子点电子温度测量结果：$-5\ \mathrm{dBm}$ 驱动下 $T_e=182.7\pm0.6\ \mathrm{mK}$，无驱动时 $T_e\approx 85.9\ \mathrm{mK}$（第一个量子点）、$72.5\ \mathrm{mK}$（第二个量子点）。
- [[sources/ref-20|文献 20]]，PDF p. 68：第 5 章引言给出在三量子点系统中依次编码两个翻转模式自旋比特并实现与同一腔模强耦合的总体实验框架，耦合强度 21.8 MHz 与 13.8 MHz，Rabi 频率 16.9 MHz。
- [[sources/ref-20|文献 20]]，PDF p. 69：5.2.1 节"器件结构"描述微磁体角度（$15^\circ$）与器件参数（$f_r=7.332\ \mathrm{GHz}$、$Z_r=2.5\ \mathrm{k\Omega}$、$\kappa/2\pi=5.13\ \mathrm{MHz}$）。
- [[sources/ref-20|文献 20]]，PDF pp. 70–71：5.2.2 节"能级结构"给出三量子点中翻转模式比特编码的四能级哈密顿量（式 5.1）、基矢变换与零失谐本征态（式 5.3–5.4），并定义自旋–轨道混合角 $\Phi$。
- [[sources/ref-20|文献 20]]，PDF pp. 74–76：5.3.2 节自旋–光子耦合理论推导（式 5.8–5.16），给出 $g_s\approx g\mu_B\Delta B_x g_c/[2(2t_c-\hbar\omega_r)]$ 的极限表达式与强自旋–光子耦合判据 $g_s>\kappa^*,\gamma_s$。
- [[sources/ref-20|文献 20]]，PDF p. 77：5.3.3 节"自旋比特与谐振腔的强耦合"，RDQD 中测得 $2g_s/(2\pi)=43.5\ \mathrm{MHz}$、$\kappa^*/(2\pi)=7.5\ \mathrm{MHz}$、$\gamma_s/(2\pi)=4.6\ \mathrm{MHz}$。
- [[sources/ref-20|文献 20]]，PDF p. 79：LDQD 中翻转模式自旋比特（无电极直接连接腔）的强耦合演示，$2g_s^L/(2\pi)=27.6\ \mathrm{MHz}$、$\kappa^*/(2\pi)=6.8\ \mathrm{MHz}$、$\gamma_s^L/(2\pi)=2.2\ \mathrm{MHz}$。
- [[sources/ref-20|文献 20]]，PDF p. 86：表 5.1 汇总 RDQD 与 LDQD 两个翻转模式比特的耦合强度、隧穿耦合、退相干、Rabi 频率与 Rabi 退相干时间。
- [[sources/ref-20|文献 20]]，PDF pp. 83–85：5.4.3 节 Rabi 振荡实验与拟合公式（式 5.20），提取 $\Omega_\mathrm{Rabi}^R/(2\pi)=16.9\ \mathrm{MHz}$、$T_2^\mathrm{Rabi}=152\ \mathrm{ns}$（RDQD），以及 LDQD 中的 13.7 MHz / 304 ns。
- [[sources/ref-20|文献 20]]，PDF pp. 85–86：5.4.4 节 Ramsey 干涉实验给出 RDQD 的 $T_2^*=89\ \mathrm{ns}$，与腔强耦合下的相干极限相符。
- [[sources/ref-20|文献 20]]，PDF pp. 86–87：5.5 节 AC Stark 效应，$f_q=f_q(P=0)+2n_\mathrm{ph}g_s^2/\Delta$，$-30\ \mathrm{dBm}$ 输入对应腔内约 0.4 个光子。
- [[sources/ref-20|文献 20]]，PDF p. 88：5.6 节本章小结明确指出 LDQD 没有电极直接连接腔的强耦合演示是"自旋强耦合实验突破双量子点限制"的依据；同章末尾点出"翻转模式频率依赖外磁场，难以独立调谐"是其在大规模扩展中的固有限制。
