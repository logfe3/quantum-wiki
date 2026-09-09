---
title: 杂化量子比特
description: 同时利用自旋与电荷自由度编码、在操控速度和电荷噪声敏感性间折中的量子比特。
aliases:
  - 自旋电荷杂化量子比特
  - 杂化比特
  - hybrid qubit
  - spin-charge hybrid qubit
tags:
  - 量子比特操控
  - 编码
  - 双量子点
  - 三量子点
date: 2026-09-08
---

<div class="entry-lead">杂化量子比特不是某一种材料，而是一种编码思想：让逻辑态同时含自旋和电荷成分，以电荷偶极获得快速全电操控，又尽量保留自旋态的相干优势。</div>

## 物理图像与编码动机

自旋与电荷是半导体量子点里最常被拿来做比特的自由度：纯自旋编码（[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]）相干时间长但操控需要微波磁场，全电控的纯[[qubit-control/charge-qubit|电荷量子比特]]操控快但电荷噪声显著缩短 $T_2^*$。杂化（hybrid）方案选择多电子自旋–电荷组态作为逻辑基，让两个分量同时发挥作用：用**失谐与隧穿耦合的全电脉冲**快速驱动逻辑态间的 Rabi 振荡，再用**"平行/准平行能级"结构**压制失谐一阶电荷噪声的影响，得到比电荷比特慢得多的退相干、又比单自旋比特快得多的操控速度。

论文 [王保传 2017] 把这一思想归结为：从超导 transmon qubit 中两条"几乎平行"的能级获得启发，把双量子点中的三电子自旋–电荷组态当作天然存在这种平行结构的载体，由此得到杂化量子比特。其编码的两条共性是：（1）逻辑态 $|0\rangle$、$|1\rangle$ 各自由**总自旋 $S=1/2$、自旋分量 $S_z=\pm 1/2$ 的双重态**叠加而成，含有不同比例的电荷分布，从而既可被隧穿耦合驱动，又能通过失谐维持平行；（2）编码子空间远离总自旋 $S=3/2$ 的四重态，泄漏通道可被忽略。

## 常见实现

论文讨论的典型方案在[[fundamentals/double-quantum-dot|双量子点]]中放置三个电子，总自旋量子数相同的多个自旋–电荷组态形成逻辑子空间。栅压脉冲改变失谐和[[fundamentals/tunnel-coupling|隧穿耦合]]，从而改变能级劈裂并驱动旋转。

由于逻辑态含有不同电荷分布，读出和腔耦合较直接；但工作点若电荷成分过强，[[materials-devices/charge-noise|电荷噪声]]会快速降低相干性。实际设计要同时考虑泄漏到第三能级、脉冲带宽和初始化路径。

下面把当前文献中成熟的几类实现一并列出。

### Si/SiGe 双量子点中的三电子编码

[王保传 2017] 4.1 节给出第一个成熟的实现：选 $S=1/2,\ S_z=\pm 1/2$ 的双重态作为编码空间，三电子分布于 $(1,2)$–$(2,1)$ 反交叉附近，左点一个电子、右点两个电子：

$$
\begin{aligned}
|0\rangle_L &= |\!\downarrow\rangle_L\,|S\rangle_R,\\
|1\rangle_L &= \sqrt{\tfrac{1}{3}}\,|\!\uparrow\rangle_L\,|T_0\rangle_R+\sqrt{\tfrac{2}{3}}\,|\!\downarrow\rangle_L\,|T_+\rangle_R,
\end{aligned}
$$

其中 $|S\rangle_R$、$|T_0\rangle_R$、$|T_+\rangle_R$ 是右点两电子的单态与三重态。注意到 $|S\rangle_R$、$|T_0\rangle_R$、$|T_+\rangle_R$ 中的两个电子占据同一点而非分占两点，这正是它与[[qubit-control/singlet-triplet-qubit|$S$–$T_0$ 比特]]的本质区别。

由于存在第三个电子，这两个态之间没有直接的隧穿耦合；它们必须借助 $(1,2)$ 电子态下的基态 $|E\rangle=|S\rangle_R\,|\!\downarrow\rangle_L$（也是 $S=1/2,\ S_z=-1/2$ 子空间成员）作为中间态实现跃迁。以 $\{|0\rangle_L,\,|1\rangle_L,\,|E\rangle\}$ 为基写出 $S_z=-1/2$ 子空间的有效哈密顿量：

$$
H_{-1/2}/\hbar=
\begin{pmatrix}
2\Delta_1/\hbar & \Lambda & 0\\
\Lambda & -\varepsilon/2 & 0\\
0 & 0 & \Delta_0
\end{pmatrix},
$$

其中 $\varepsilon$ 是点间失谐，$\Lambda$ 反映 $|0\rangle_L$ 与中间态之间的隧穿耦合，$\Delta_1$ 与 Si 体系中的[[materials-devices/silicon-sige|谷劈裂 valley splitting]]绑定——单点 $S$–$T$ 能级差其实就是 valley splitting 的量级，故 $|0\rangle_L$ 与 $|1\rangle_L$ 的能级间隔由材料本身决定。论文 4.1 节进一步证明：在 $\varepsilon>0$ 的大失谐区，$|0\rangle_L$ 与 $|1\rangle_L$ 的能级几乎平行，形成"最佳工作点"；而 $|0\rangle_L$–$|E\rangle$ 之间存在能级反交叉，高度 $2\Lambda$。

由于 $|0\rangle_L$ 与 $|1\rangle_L$ 间隔本身几乎不随失谐变化，论文 4.1 节放弃直接驱动两态的方案，转而通过**两段非绝热过程**：先把体系快速拉到 $|0\rangle_L$–$|E\rangle$ 反交叉点 $\varepsilon_A$，完成绕 $x$ 轴的 $X$ 旋转，再在 $|1\rangle_L$–$|E\rangle$ 反交叉点 $\varepsilon_B$ 完成第二个 $X$ 旋转。组合 $U=B\,P_1(\phi_1)\,A(\theta)\,P_2(\phi_2)\,B$ 即实现 Bloch 球上任意角度 $(\beta,\gamma,\chi)$ 的转动，对应参数为

$$
\begin{aligned}
\theta &= 2\arccos\!\big[\sin(\gamma)\sin(\beta/2)\big],\\
\phi_1 &= \arccos\!\big[\cos(\gamma)\tan(\beta/2)\big]-\phi_B-\chi+\pi/2,\\
\phi_2 &= \arccos\!\big[\cos(\gamma)\tan(\beta/2)\big]-\phi_B+\chi+\pi/2,
\end{aligned}
$$

其中 $\phi_B$ 是 $B$ 操作中积累的额外相位。

<!-- FIGURE: 三能级非绝热脉冲序列：先在 εA 完成 A 操作（绕 x 轴任意角），再到 εB 完成 B 操作（绕 x 轴 π 旋转），两段之间插入改变 Bloch 球经度的 P 操作；右图为 Bloch 球上的等效操作分解 -->

### GaAs 双量子点中的"准平行"实现

[王保传 2017] 4.2 节把同一思想搬到 GaAs 双量子点。要点在于 GaAs 没有 valley splitting，单点 $S$–$T$ 间隔高达数百 $\mu$eV（远超操控可达范围），不能在 $(1,2)$–$(2,1)$ 区域直接沿用上一节编码。作者把体系整体扩展到 5 电子并在 $(2,3)$–$(1,4)$ 反交叉附近构造杂化比特——右点的最低轨道先被 2 个电子填满，第 3 个电子只参与高能动力学；等价态对应 $(1,2)$–$(2,1)$，但能级间隔由右点的两个 P 轨道 $\phi_1$、$\phi_2$ 之差决定，且这两个轨道对电极电压的响应**不同**，形成"准平行"的最佳工作点。

$S_z=+1/2$ 子空间下的有效哈密顿量（式 4.4）写作

$$
H_{+1/2}/\hbar=
\begin{pmatrix}
0 & \Delta_1 & 0\\
\Delta_1 & \xi & \Delta_2\\
0 & \Delta_2 & -\delta
\end{pmatrix},
$$

其中 $\delta$ 是 $|2\rangle$ 与 $|3\rangle$ 之间的失谐，$\xi$ 反映两个 P 轨道对电极电压的不同响应，$\delta=\Delta_1=\Delta_2=\xi=0$ 时 $|2\rangle$ 与 $|3\rangle$ 能级完全平行；实际器件中参数取 $2\Delta_1=9.2\ \mathrm{GHz}$、$2\Delta_2=7.5\ \mathrm{GHz}$、$\xi=1.3$、$\delta=0$，能级间隔随失谐几乎不变，直至 $\varepsilon\approx 55\ \mu\mathrm{eV}$ 处出现第二个反交叉点 $\varepsilon_B$——这就是杂化比特的"最佳工作点"。

### 三量子点平行能级：电学可调的下一代

[王保传 2017] 第六章进一步把杂化比特思想推到线性[[scaling-automation/quantum-dot-array|三量子点]]——[[fundamentals/double-quantum-dot|双量子点]]的自然推广。论文把电子态选在多电子区的 $(6,2,3)$–$(7,1,3)$ 反交叉附近。由于右点 $R$ 与中间点 $C$、左点 $L$ 的交换作用非对称（$J_{LC}\neq J_{CR}$），$(1,1,1)$ 子空间内自旋态

$$
|0\rangle=\sqrt{\tfrac{2}{3}}\,|\!\uparrow\rangle_L|S\rangle_{CR}-\sqrt{\tfrac{1}{3}}\,|\!\downarrow\rangle_L|T_+\rangle_{CR},\quad
|1\rangle=|S_T\rangle_{LR}|\!\uparrow\rangle_C
$$

的能量间隔近似为 $\sqrt{J_{LC}^2+J_{CR}^2-J_{LC}J_{CR}}$，由两个交换作用共同决定。实验中通过调节电极 $D_6$（即改变 $C$–$R$ 失谐进而改变 $J_{CR}$）可以在 $2\ \mathrm{GHz}$–$15\ \mathrm{GHz}$ 之间连续调节这个间隔——这是普通双量子点杂化比特做不到的"电学可调"能力。代价是：能级间隔越大，与平行条件的偏离越显著，$T_2^*$ 从约 $6\ \mathrm{ns}$ 跌到约 $1\ \mathrm{ns}$，相干时间与电学可调范围之间存在直接权衡。

<!-- FIGURE: 线性三量子点 (6,2,3)–(7,1,3) 反交叉附近的两组 Larmor 振荡条纹：绿色"侧躺 V 字"对应电荷比特振荡，粉色几乎平行对应杂化比特振荡；振荡频率随 D6 电压在 2–15 GHz 区间连续可调 -->

## 理论模型梗概

三电子杂化比特的能级图像可以总结为以下几点：

1. 在 $(1,2)$–$(2,1)$ 反交叉附近，$S_z=\pm 1/2$ 子空间含三个低能双重态——$|0\rangle_L$、$|1\rangle_L$ 与 $|E\rangle$（中间态）。后两者与 $|E\rangle$ 之间存在隧穿耦合 $\Delta_1$、$\Delta_2$，但 $|0\rangle_L$ 与 $|1\rangle_L$ 之间无直接耦合，必须借 $|E\rangle$ 间接驱动。
2. 把 $|0\rangle_L$ 与 $|E\rangle$ 写在反交叉附近的标准两态基上，哈密顿量化为

$$
H_{\mathrm{cross}}=\begin{pmatrix} -\varepsilon/2 & \Delta\\ \Delta & 0 \end{pmatrix},
$$

其中 $\varepsilon$ 是失谐、$\Delta$ 是耦合。本征能级为 $(-\varepsilon\pm\sqrt{\varepsilon^2+4\Delta^2})/2$，在反交叉 $\varepsilon=0$ 处能级间隔最小、为 $2\Delta$。在远离反交叉 $\varepsilon\gg\Delta$ 处，两个本征态近似回到裸态，能级间隔近似等于裸态能量差（Si 体系中即 valley splitting，GaAs 体系中即 $S$–$T$ 间隔），两条能级几乎平行。

3. $|0\rangle_L$ 与 $|1\rangle_L$ 在大失谐区的能级间隔来源于自旋结构本身（Si 中的 valley splitting、GaAs 中的 $S$–$T$ 间隔），因此**几乎不随失谐变化**。这是杂化比特相对电荷比特最关键的"一阶噪声免疫"。

4. 哈密顿量对失谐 $\varepsilon$ 的一阶导数在最佳工作点为零——等价地，比特频率 $E_{01}(\varepsilon)$ 在一段大失谐范围内保持常数，对以 $1/f$ 谱为主的[[materials-devices/charge-noise|电荷噪声]]天然免疫。

[陈宝宝 2017] 第 3 章把同一思想从双量子点三电子态的能谱角度独立验证：$|D_S(1,2),+1/2\rangle$ 与 $|D_T(1,2),+1/2\rangle$ 两个自旋–电荷双重态在 (1,2) 区域大负失谐处近似平行；对 $|D_T(1,2),+1/2\rangle$ 的一个主要退相干来源是**核磁场梯度驱动它向 $|Q(1,2),+1/2\rangle$ 泄漏**，能级越平行泄漏越显著，因此最佳工作点是"电荷噪声免疫"与"核自旋泄漏"之间的折中点。

## 参数与量级

下面把论文中给出的关键数值汇总：

| 量 | 典型值 | 备注 / 来源 |
| --- | --- | --- |
| Si/SiGe 双量子点 Larmor 振荡频率 | $5.2\ \mathrm{GHz}$（$\varepsilon=0$）；$\Delta_1/h\approx 2.6\ \mathrm{GHz}$ | 王保传 2017，PDF p. 50 |
| Si/SiGe 双量子点 $T_2^*$（$\varepsilon=0$） | 约 $2\ \mathrm{ns}$ | 王保传 2017，PDF p. 50 |
| Si/SiGe 双量子点 Ramsey $T_2^*$（$\varepsilon>100\ \mu\mathrm{eV}$） | $>10\ \mathrm{ns}$，脉冲 $\sigma_z$ 速度约 $10\ \mathrm{GHz}$ | 王保传 2017，PDF p. 51 |
| Si/SiGe valley splitting（编码能级差的物理来源） | $10$–$100\ \mu\mathrm{eV}$（典型值约 $50\ \mu\mathrm{eV}$） | 王保传 2017，PDF p. 52 |
| GaAs 双量子点 $2\Delta_1$、$2\Delta_2$ | $9.2\ \mathrm{GHz}$、$7.5\ \mathrm{GHz}$ | 王保传 2017，PDF p. 55 |
| GaAs 双量子点第二个反交叉位置 $\varepsilon_B$ | $\approx 55\ \mu\mathrm{eV}$ | 王保传 2017，PDF p. 55 |
| GaAs 双量子点 $T_2^*$（Larmor） | $8.1\ \mathrm{ns}$，振荡频率 $2.43\ \mathrm{GHz}$ | 王保传 2017，PDF p. 56 |
| GaAs 双量子点 Ramsey $T_2^*$ | $6\ \mathrm{ns}$（$E_0>0$） | 王保传 2017，PDF p. 56 |
| 纯电荷比特 $T_2^*$（对比） | $\approx 100\ \mathrm{ps}$ | 王保传 2017，PDF p. 51 |
| 三量子点平行能级振荡频率 | $3.4$–$3.8\ \mathrm{GHz}$（失谐 $-209$ –$-150\ \mu\mathrm{eV}$） | 王保传 2017，PDF p. 82 |
| 三量子点平行能级 $T_2^*$ | $4.0\ \mathrm{ns}$ | 王保传 2017，PDF p. 82 |
| 三量子点平行能级频率可调范围 | $2$–$15\ \mathrm{GHz}$（$D_6$ 调节 $120\ \mathrm{mV}$） | 王保传 2017，PDF p. 83 |
| 三量子点平行能级 $T_2^*$ 随能级间隔变化 | 约 $6\ \mathrm{ns}$（小间隔）→ 约 $1\ \mathrm{ns}$（大间隔） | 王保传 2017，PDF p. 83 |

可以看出，杂化比特把 $T_2^*$ 从纯电荷比特的几百 ps 提升到数 ns 到十余 ns，相对增益约 $10$–$100$ 倍，而操控频率仍在 GHz 量级，与电荷比特相当。

## 实验特征与读出

**脉冲驱动**：[王保传 2017] 4.1 节采用与[[qubit-control/charge-qubit|电荷量子比特]]相同的非绝热栅压脉冲技术（详见 [[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]）：先在低电平初始化到 $(2,1)$ 的基态 $|E\rangle$，再用一个快速上升沿把失谐打到 $\varepsilon_A$（$|0\rangle_L$–$|E\rangle$ 反交叉点），停留实现 $X$ 操作；最后用反向脉冲回到读出点。整个序列可视为一次 Larmor 振荡，振荡角频率 $\Omega_L=2\Delta_1/\hbar$。为完成任意比特操作，至少需要两次反交叉处的脉冲并配合调整 Bloch 球经度的 P 操作。实验上由于上升沿有限，A、B、P 操作并不严格独立，用单段非绝热脉冲即可观测到清晰的 Larmor 振荡（$f\approx 5.2\ \mathrm{GHz}$）；加上相位等待时间再做读出，得到 Ramsey 干涉条纹。在大失谐处（$\varepsilon>100\ \mu\mathrm{eV}$）振荡条纹几乎平行于失谐轴，干涉频率不随 $\varepsilon$ 变化，直接证明"平行能级"的工作假设。

**GaAs 实现的脉冲序列**更复杂：因为 $|0\rangle_L$、$|1\rangle_L$ 在 $\varepsilon=0$ 处没有反交叉，必须先缓慢斜坡（绝热过程）把体系从 $\varepsilon=-55\ \mu\mathrm{eV}$ 拖到 $\varepsilon=0$，再非绝热地跳到 $\varepsilon_B\approx 55\ \mu\mathrm{eV}$（第二个反交叉），最后反向绝热回到读出点。这样做的目的是保留 $|2\rangle$、$|3\rangle$ 之间的相位相干性，同时用第二个反交叉实现 Larmor 振荡。

**读出**：由于 $|0\rangle$ 与 $|1\rangle$ 对应不同的电荷分布（如 $(1,2)$ 与 $(2,1)$），可用[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]在脉冲结束后读取末态电荷分布，结合[[readout-measurement/single-shot-readout|单发读出]]可分辨末态自旋。论文样品上同时使用了 $0.1\ \mathrm{mV}$、$173\ \mathrm{Hz}$ 锁相调制与 $0.2\ \mathrm{mV}$ QPC 偏置的标准[[readout-measurement/qpc-charge-sensor|QPC 锁相]]测量。

**关键诊断**：大失谐区振荡条纹的平行程度直接反映"最佳工作点"的质量——平行度越高，$\partial E_{01}/\partial\varepsilon$ 越小，电荷噪声免疫性越好；但与此同时，能级间隔变大带来的核磁场泄漏（GaAs）或 valley splitting 微扰（Si）会引入新的退相干通道，论文样品上 $T_2^*$ 因此呈现出"先随失谐增大变长、再被泄漏限制"的非单调行为。

## 与相邻编码的区别

杂化比特容易与同属三电子族的其他编码混淆，下面列出关键差异：

- 单态–三重态编码主要在两电子自旋子空间操作：仅用 $|S\rangle$、$|T_0\rangle$ 两个自旋态，电荷部分固定在 $(0,2)$ 或 $(1,1)$，依赖外磁场驱动。
- [王保传 2017] 第六章中描述的杂化比特与[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]（RX 比特）共享同一组三电子编码态 $\{|0_+\rangle,|1_+\rangle\}$，但 RX 工作点靠近 $(2,0,1)$–$(1,0,2)$ 双占据电荷态、交换常开、比特频率纯电可调（$\omega_\mathrm{RX}\approx 0.52\,t$），主要服务于与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]的[[circuit-qed/strong-coupling|强耦合]]；杂化比特工作点远离双占据电荷态、靠第三电子的 valley splitting 或 S–T 间隔提供平行能级，强调相干性优先。
- "杂化" 更强调逻辑态本身的自旋–电荷混合；而 RX/EO（交换型）更强调三自旋总自旋子空间内的集体动力学。

## 与其他概念的关系

- [[qubit-control/single-spin-qubit|单自旋量子比特]]相干时间长但需要微波磁场；杂化比特牺牲部分相干性换取全电操控。
- [[qubit-control/singlet-triplet-qubit|$S$–$T_0$ 比特]]的工作哈密顿量由交换能与核场梯度共同给出；杂化比特通过引入第三个电子，把 $|0\rangle$ 与 $|1\rangle$ 之间天然形成的平行能级当作"内建甜点"。
- [[qubit-control/charge-qubit|电荷量子比特]]在 $\varepsilon=0$ 反交叉处操作、操控速度最快（可达数十 GHz），但 $T_2^*$ 只有 ps 量级；杂化比特在大失谐区工作、相干性提升约两个量级，操控速度仍在数 GHz。
- [[qubit-control/resonant-exchange-qubit|共振交换量子比特]]在失谐另一端靠近双占据区，借助电荷杂化增强与谐振腔的耦合；杂化比特则借助电荷杂化压制电荷噪声——两者方向相反、目标互补。
- 在[[qubit-control/exchange-interaction|交换相互作用]]的工作点附近，杂化比特也可以借助[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）增强自旋操控；这是把"自旋–电荷混合"用作工具的另一面。
- 与[[materials-devices/charge-noise|电荷噪声]]的抗衡是杂化比特的核心设计点——通过把逻辑态放在 $dE_{01}/d\varepsilon=0$ 的一阶甜点（甚至二阶甜点）抑制低频 $1/f$ 噪声，把退相干时间从电荷比特的几百 ps 提升到数 ns。
- 杂化比特与[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]的非绝热过程深度耦合：所有操控都依赖快速改变失谐以穿越反交叉。
- 杂化比特与[[qubit-control/rabi-oscillation|Rabi 振荡]]、[[qubit-control/ramsey-interferometry|Ramsey 干涉]]共享同一组测量手段——失谐–脉冲持续时间二维相图、振荡曲线拟合、平行条纹的"角度"作为工作点质量指标。
- 由于含有显著的电荷分布，杂化比特天然带有较大的电偶极矩，便于与[[circuit-qed/microwave-resonator|微波谐振腔]]直接耦合——这是它在[[circuit-qed/strong-coupling|强耦合]]实验中受到青睐的原因之一。

## 延伸阅读

- D. Kim et al., "Tunable Hybrid Qubit in a GaAs Double Quantum Dot", *Physical Review Letters* 116, 086801 (2016). [DOI: 10.1103/PhysRevLett.116.086801]
- Z. Shi et al., "Fast Hybrid Silicon Double-Quantum-Dot Qubit", *Physical Review Letters* 108, 140503 (2012). [DOI: 10.1103/PhysRevLett.108.140503]
- B. Thorgrimsson et al., "High-fidelity ac gate operations of a three-electron double quantum dot qubit", *Physical Review B* 93, 035409 (2016). [DOI: 10.1103/PhysRevB.93.035409]
- A. C. Betz et al., "High-fidelity single-qubit gates in a strongly driven quantum-dot hybrid qubit with $1/f$ charge noise", *Physical Review A* 100, 022337 (2019). [DOI: 10.1103/PhysRevA.100.022337]

## 论文依据

- [[sources/wang-baochuan-2017|王保传 2017]]，PDF pp. 5–6：论文摘要与目录中明确把杂化量子比特列为第四章主题，4.1 节"基于电子自旋和电荷分布混合编码的杂化量子比特"对应正文 p. 45 起。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 45：超导 transmon qubit 中"两条几乎平行能级"的启发、杂化比特的核心思想——通过多电子自旋态构造平行的能级结构，并利用不同电荷分布实现测量。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 46：三电子编码 $|0\rangle_L$、$|1\rangle_L$ 表达式及其在 Si 双量子点中的能级归属（$|S\rangle_R$、$|T_0\rangle_R$、$|T_+\rangle_R$ 两个电子占据同一点而非分占两点）。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 47：式 4.1（$S_z=-1/2$ 子空间三能级哈密顿量）、能级反交叉点 $\varepsilon_A$、$\varepsilon_B$ 与高度 $2\Lambda$ 的定义。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 49：非绝热脉冲下两态反交叉哈密顿量（式 4.2）、绕 $x$ 轴 $\pi$ 转动的 B 操作；任意单比特操作由 A、B、P 组合实现的说明。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 50：Si/SiGe 双量子点实验样品结构、电荷稳定图、非绝热脉冲驱动到 $(1,2)$–$(2,1)$ 反交叉、Larmor 振荡频率 $5.2\ \mathrm{GHz}$、$\Delta_1/h\approx 2.6\ \mathrm{GHz}$、$T_2^*\approx 2\ \mathrm{ns}$（$\varepsilon=0$ 处）。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 51：Ramsey 干涉条纹在大失谐区几乎平行、$T_2^*>10\ \mathrm{ns}$（$\varepsilon>100\ \mu\mathrm{eV}$）；与纯电荷比特 $T_2^*\approx 100\ \mathrm{ps}$ 对比，杂化比特相干时间提升约 $100$ 倍。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 52：Si 体系中 valley splitting $10$–$100\ \mu\mathrm{eV}$ 给出编码能级间隔，并解释了 Si/SiGe 体系适合杂化比特的材料原因。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 53：GaAs 单点 $S$–$T$ 间隔约数百 $\mu\mathrm{eV}$、不适合 $(1,2)$–$(2,1)$ 直接编码的论证；转而在 $(2,3)$–$(1,4)$ 区域构造等效编码。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 54：GaAs 双量子点样品结构、$0.1\ \mathrm{mV}$/$173\ \mathrm{Hz}$ 锁相调制与 $0.2\ \mathrm{mV}$ QPC 偏置的测量参数、$(2,3)$–$(1,4)$ 反交叉附近的脉冲隧穿相图。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 55：式 4.4（$S_z=+1/2$ 子空间 GaAs 三能级哈密顿量）与典型参数 $2\Delta_1=9.2\ \mathrm{GHz}$、$2\Delta_2=7.5\ \mathrm{GHz}$、$\xi=1.3$、$\delta=0$；$\varepsilon\approx 55\ \mu\mathrm{eV}$ 处的第二个反交叉点即"最佳工作点"。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 56：GaAs 双量子点 Larmor 振荡 $f=2.43\ \mathrm{GHz}$、$T_2^*=8.1\ \mathrm{ns}$；Ramsey $T_2^*\approx 6\ \mathrm{ns}$（$E_0>0$ 区域）、与纯电荷比特 $T_2^*\approx 100\ \mathrm{ps}$ 对比；额外消相干来源（核自旋超精细、准平行能级保护不足）的讨论。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 57：4.3 节小结，指出 Si 体系 valley splitting 与 GaAs 体系 $S$–$T$ 间隔均**难以电学调节**，由此引出三量子点方向。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 64：GaAs 双量子点杂化比特因右点不对称而存在的电荷噪声敏感性，可能减弱抵抗外界电荷噪声的能力。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 82：三量子点多电子区 $(6,2,3)$–$(7,1,3)$ 反交叉附近的 Larmor 振荡相图，粉色"近平行"条纹对应杂化比特振荡、振荡频率 $3.4$–$3.8\ \mathrm{GHz}$、$T_2^*=4.0\ \mathrm{ns}$。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF p. 83：通过调节电极 $D_6$（改变 $C$–$R$ 失谐进而调节 $J_{CR}$），把平行能级间隔从约 $2\ \mathrm{GHz}$ 调至 $15\ \mathrm{GHz}$；同时 $T_2^*$ 从约 $6\ \mathrm{ns}$ 降至约 $1\ \mathrm{ns}$，是电学可调性与相干性之间的直接权衡。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF pp. 90–92：6.4 节"一个可能的理论解释"——把 $(6,2,3)$–$(7,1,3)$ 等价约化为 $(0,2,1)$–$(1,1,1)$，在 $(1,1,1)$ 子空间内用非对称交换作用 $J_{LC}\neq J_{CR}$ 给出 $|0\rangle$、$|1\rangle$ 间隔公式 $\sqrt{J_{LC}^2+J_{CR}^2-J_{LC}J_{CR}}$，定性地解释了平行能级及其可调性。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 4–5：论文摘要中明确列出三电子编码（含杂化比特）的研究内容。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF p. 56：从多电子双量子点能谱的角度独立验证 $|D_S(1,2),+1/2\rangle$ 与 $|D_T(1,2),+1/2\rangle$ 两个态可编码杂化比特——它们在 (1,2) 大负失谐区能级间隔几乎不随失谐变化，因此对电荷噪声具有较强免疫力；但能级越平行，核磁场梯度驱动的 $|D_T\rangle\to|Q\rangle$ 泄漏越严重，最佳工作点需要在两者之间折中；参考文献 Shi et al., "Tunable hybrid qubit in a GaAs double quantum dot" (2015)。