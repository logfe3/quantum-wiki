---
title: 电化学势
description: 向量子点增加第 N 个载流子所需的能量，是判断电荷跃迁的直接量。
aliases:
 - 加电子能
 - 化学势
 - 电化学势能
tags:
 - 量子点基础
 - 能量
date: 2026-09-08
---

<div class="entry-lead">量子点的电化学势不是单一电极的电势，而是把电荷数从 N−1 改成 N 所需的自由能差，是判断电荷能否隧穿进出量子点的直接量。</div>

## 定义与基本图像

电化学势（electrochemical potential）是描述[[fundamentals/semiconductor-quantum-dot|半导体量子点]]充放电过程的核心量：对[[fundamentals/constant-interaction-model|常相互作用模型]]（CI 模型）下含有 $N$ 个电子的量子点，电化学势定义为把第 $N$ 个电子放入点中所需支付的最小能量，即

$$
\mu(N)=U(N)-U(N-1)
$$

其中 $U(N)$ 是含 $N$ 个电子时系统的总能量。$\mu(N)$ 同时包含了两个不可分割的部分——经典充电能 $E_C=e^2/C_\Sigma$（点电容储能）和单粒子能级 $E_N$（束缚势决定的分立能），所以它既是"化学势"，也是"静电势"；论文中明言"$\mu_N$ 即化学势和静电势之和"，、、等人也从不同起点给出完全等价的定义。

电化学势的物理意义在于：源极（source）、漏极（drain）电子库各自的费米面 $\mu_S$、$\mu_D$ 与 $\mu(N)$ 的相对位置直接决定了隧穿是否允许。固定源漏费米面、连续扫描栅压 $V_G$，$\mu(N)$ 在能量轴上线性移动，逐次掠过源漏费米面，便形成一列分立的电流峰（库仑振荡）；若 $\mu(N)$ 始终停留在 $\mu_S$ 与 $\mu_D$ 之外，顺序隧穿被[[fundamentals/coulomb-blockade|库仑阻塞]]，电子数被锁定为整数的 $N-1$ 或 $N$。电化学势因此是判断电荷态跃迁、读取电子数、设计[[qubit-control/charge-qubit|电荷量子比特]]工作点的直接判据。

<!-- FIGURE: 单量子点电化学势能级示意图：源漏费米面 µS、µD 与点内 µ(N−1)、µ(N) 的相对位置，以及阻塞/隧穿两种情形 -->

## 理论模型：常相互作用模型中的电化学势

### 单量子点的静电能与电化学势

常相互作用模型把量子点与外界的全部库仑相互作用压缩成一个总电容

$$
C_\Sigma=C_S+C_D+C_G
$$

分别对应点与源、漏、栅电极之间的电容；点内的单粒子能级 $E_n$（可含磁场依赖）则与电子数无关。漏极接地、源极加偏压 $V_{SD}$、栅压 $V_G$ 时，含 $N$ 个电子的量子点总能量为

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_{SD}+C_G V_G\right]^2}{2C_\Sigma}+\sum_{n=1}^{N}E_n(B)
$$

其中 $N_0$ 是电极电压全为零时点内补偿背景正电荷后的电子数。直接做差分即得电化学势：

$$
\mu(N)=\left(N-N_0-\frac{1}{2}\right)E_C-\frac{E_C}{|e|}\left(C_S V_{SD}+C_G V_G\right)+E_N.
$$

$E_C=e^2/C_\Sigma$ 是[[fundamentals/charging-energy|充电能]]（charging energy）。上述推导可以用电容矩阵方法给出更严格的版本（论文 1.10–1.15 式）：把量子点与各电极视作导体节点，节点电荷与电势由电容矩阵联系 $\vec{Q}=C\vec{V}$，系统总静电能为 $U=\tfrac{1}{2}\vec{V}_c^{\mathrm{T}}C_{cc}\vec{V}_c$。当点内电荷改变 $\delta Q$ 时电极上会感应电荷，为维持电极电势不变电源必须做功，且该功恰好等于点–电极相互作用项的变化（$W=\delta U_2$），故可归入量子点自由能的只剩点内项 $U_1$；对单点取 $C_{cc}=C_\Sigma$ 即得上式的二次型。这一推导说明 $Q^2/2C_\Sigma$ 并非单纯的几何电容储能，而是计入了电源做功的热力学自由能。

### 加电子能（addition energy）

相邻两个电化学势之差称为加电子能（addition energy）：

$$
E_\mathrm{add}=\mu(N+1)-\mu(N)=E_C+\Delta E
$$

其中 $\Delta E=E_{N+1}-E_N$ 是单粒子能级间隔。论文中强调，$E_\mathrm{add}$ 是"每向量子点中增加一个电子所需要增加的能量"，可理解为填充一个电子的综合代价。对百纳米量级量子点，$C_\Sigma$ 很小，$E_C\gg\Delta E$，电化学势近似等间距排列，库仑峰近似等周期出现；少电子区（最后几个电子）则 $\Delta E$ 不可忽略，加电子能随 $N$ 起伏，直接泄露单粒子能谱。

### 杠杆臂的微观起源

$\mu(N)$ 对 $V_G$ 线性依赖的斜率给出[[fundamentals/coulomb-diamond|库仑菱形]]提取杠杆臂（lever arm）的微观定义：

$$
\frac{d\mu(N)}{dV_G}=-\frac{E_C}{|e|}C_G=-|e|\,\frac{C_G}{C_\Sigma}\equiv-|e|\alpha
$$

即 $\alpha=C_G/C_\Sigma$——栅压改变 $1\ \mathrm{mV}$ 时点内电化学势移动 $\alpha\ \mathrm{meV}$。令相邻两个电荷态在同一源漏条件下简并，$\mu(N+1;V_G)=\mu(N;V_G+\Delta V_G)$，可得库仑峰的栅压周期

$$
\Delta V_G=\frac{E_C+\Delta E}{|e|\alpha}=\frac{e}{C_G}\left(1+\frac{\Delta E}{E_C}\right)\approx\frac{e}{C_G}
$$

多电子区 $\Delta E\ll E_C$ 时峰严格等间距。换言之，库仑峰间距本身即是栅电容 $C_G$ 的直接度量，而峰间距乘以杠杆臂就是加电子能 $E_\mathrm{add}$——这是把栅压轴换算为能量轴的两种标准做法。

## 偏压窗口与输运判据

### 阻塞条件

在源漏偏压为零或很小（$\mu_S=\mu_D=\mu$）时，源漏费米面对齐；电化学势 $\mu(N)$ 是否掠过这一公共费米面决定电流是否出现。当 $\mu_S=\mu(N)=\mu_D$ 时，共振隧穿开启，电流峰出现；当 $\mu(N)$ 偏离费米面，且

$$
\mu(N-1)<\mu_D<\mu_S<\mu(N)
$$

电子既不能从源极跳入也不能从漏极跳出，顺序隧穿被禁止，进入[[fundamentals/coulomb-blockade|库仑阻塞]]区。论文 1.5 节明确指出，"阻塞区电子数目保持不变"，这一性质是实验上逐个数出量子点中电子数、把量子点用作"人造原子"的基础。

<!-- FIGURE: 库仑振荡曲线：栅压轴上一列等间距电流峰，峰顶处 µ(N)=µS=µD，峰间谷地为阻塞区 -->

### 偏压窗口

施加有限源漏偏压 $V_{SD}$ 后，源漏费米面拉开 $\mu_S-\mu_D=eV_{SD}$，形成宽度为 $eV_{SD}$ 的偏压窗口（bias window）。只要 $\mu(N)$ 落在窗口内（$\mu_D<\mu(N)<\mu_S$），电子就可按"源极→量子点→漏极"的顺序隧穿产生电流；只要 $\mu(N)$ 落在窗口外，对应区域电流归零。进入窗口的能级数随 $V_{SD}$ 增加：单能级隧穿时只有基态导通；偏压窗口达到 $E_C$ 后两条电化学势 $\mu(N)$ 与 $\mu(N+1)$ 同时进入窗口，两个电子可同时隧穿；进一步增大 $V_{SD}$ 还会把 $N$ 电子态的轨道或自旋激发态拉入窗口，在阻塞区内部打开新的电导通道——这正是[[fundamentals/coulomb-diamond|库仑菱形]]外激发态平行线、以及[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]边带的共同来源。

联合扫描 $V_{SD}$ 与 $V_G$ 时，把所有 $\mu(N)$ 与源漏费米面对齐的等值线画在同一张图上即得到一组关于 $V_{SD}=0$ 对称的菱形阻塞区，菱形内部电子数固定、无电流，菱形外部允许隧穿。菱形半高给充电能、宽度给栅电容、两条斜边的斜率给杠杆臂、菱形外的平行线给激发态间距——库仑菱形因此被称作单量子点的"参数提取器"，具体提取公式详见[[fundamentals/coulomb-diamond|库仑菱形]]词条。

## 双量子点的电化学势

### 双点静电能与三个特征能量

电化学势的概念可以原样推广到[[fundamentals/double-quantum-dot|双量子点]]。以串联双点为例：点 1、点 2 分别经 $C_L$、$C_R$ 与源漏耦合，经 $C_{g1}$、$C_{g2}$ 与栅极耦合，经互电容 $C_m$ 互相耦合；定义各点总电容 $C_{1(2)}=C_{L(R)}+C_{g1(2)}+C_m$，则系统静电能为

$$
U(N_1,N_2)=\frac{1}{2}N_1^2 E_{C1}+\frac{1}{2}N_2^2 E_{C2}+N_1 N_2 E_{Cm}+f(V_{g1},V_{g2})
$$

其中三个特征能量

$$
E_{C1(2)}=\frac{e^2}{C_{1(2)}}\,\frac{1}{1-\dfrac{C_m^2}{C_1 C_2}},\qquad
E_{Cm}=\frac{e^2}{C_m}\,\frac{1}{\dfrac{C_1 C_2}{C_m^2}-1}
$$

分别对应两点各自的充电能与点间静电耦合能。两个极限很有说明力：$C_m\to 0$ 时 $E_{Cm}=0$，$U$ 退化为两个独立单点能量之和；$C_m/C_{1(2)}\to 1$ 时系统等价于一个含 $N_1+N_2$ 个电子、$C_1+C_2$ 总电容的大单点。

### 双点电化学势

与单点类似，把 $U(N_1,N_2)$ 对电子数做差分得到两个点的电化学势：

$$
\mu_1(N_1,N_2)=\left(N_1-\frac{1}{2}\right)E_{C1}+N_2 E_{Cm}-\frac{1}{|e|}\left(C_{g1}V_{g1}E_{C1}+C_{g2}V_{g2}E_{Cm}\right)
$$

$$
\mu_2(N_1,N_2)=\left(N_2-\frac{1}{2}\right)E_{C2}+N_1 E_{Cm}-\frac{1}{|e|}\left(C_{g2}V_{g2}E_{C2}+C_{g1}V_{g1}E_{Cm}\right).
$$

它们的物理含义是：$\mu_1$ 是点 2 中已有 $N_2$ 个电子时再向点 1 加一个电子所需的能量；$\mu_2$ 是点 1 中已有 $N_1$ 个电子时再向点 2 加一个电子所需的能量。$\mu_{1,2}$ 对 $V_{g1}$、$V_{g2}$ 都是线性依赖，因此固定 $(N_1,N_2)$ 的稳定区在 $V_{g1}$–$V_{g2}$ 平面上是由直线围成的多边形。

稳定区内电子数固定不变，等价条件为"两组电化学势都低于源漏费米面"，即 $\mu_1,\mu_2<0$；基态电荷组态是同时满足该条件的最大 $(N_1,N_2)$。两类边界由简并条件给出：$\mu_i(N_1,N_2)=0$ 对应点 $i$ 与某一储库对齐的充电线，$\mu_1(N_1+1,N_2)=\mu_2(N_1,N_2+1)$ 对应两点间的电荷转移线。三类边界两两交汇围成六边形蜂窝原胞，蜂窝的形态直接反映 $C_m/C_{1(2)}$ 的大小；详细推导与几何详见[[fundamentals/charge-stability-diagram|电荷稳定图]]词条。

### 三相点

零偏压下允许电流通过双点的条件是源极、左点、右点、漏极的电化学势全部对齐：

$$
\mu_S=\mu_1(N_1,N_2)=\mu_2(N_1,N_2)=\mu_D.
$$

这一条件只在三条边交汇的顶点满足，称为三相点（triple point）。三相点分两类——电子型（电子沿"源极→左点→右点→漏极"顺序隧穿）与空穴型（等效于一个空穴沿反方向通过双点）——它们在蜂窝图上成对出现于同一条电荷转移线的两端。蜂窝图边距直接给出各点的栅电容与点间耦合电容：

$$
\Delta V_{g1(2)}=\frac{|e|}{C_{g1(2)}},\qquad
\Delta V_{g1(2)}^{m}=\frac{|e|C_m}{C_{g1(2)}C_{2(1)}}.
$$

前一式是单点充电对应的栅压周期，后一式是邻近点加一个电子引起的充电线平移，两者之比直接给出 $C_m/C_{2(1)}$——这是从蜂窝图提取点间耦合的标准做法。

### 偏压三角形

施加有限源漏偏压后，简并条件放宽为偏压窗口内的一组不等式，每个三相点在相图上展开成一对三角形——偏压三角形（bias triangle）。三条边分别对应 $\mu_1$ 与源极费米面对齐、$\mu_2$ 与漏极费米面对齐、两点化学势互相对齐。三角形尺寸正比于偏压大小，沿栅压方向量出三角形边长 $\delta V_{gi}$，结合偏压 $V_{SD}$ 即可提取各电极杠杆臂：

$$
eV_{SD}=\alpha_i\,e\,\delta V_{gi},\qquad \alpha_i=\frac{C_{gi}}{C_i}
$$

即栅压轴上的三角形宽度经杠杆臂换算后恰好等于所加偏压。偏压进一步增大时，激发态能级进入窗口，三角形内出现激发态输运线，可用于读取[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]等体系的能级间距。

### 量子修正与隧穿耦合

CI 模型是纯经典理论。、论文明确指出，CI 模型无法解释三相点附近电荷转移线的弯曲。引入第 $n$ 个单粒子能级修正后，向点 $i$ 中能级 $n$ 填充一个电子所需电化学势可以写成经典电化学势与单粒子能级之和 $\mu_{i,n}=\mu_i^{c}+E_n$；这一修正把加电子能改写为

$$
\mu_{1,m}(N_1+1,N_2)-\mu_{1,n}(N_1,N_2)=E_{C1}+(E_m-E_n)=E_{C1}+\Delta E
$$

并使栅压周期含 $1+\Delta E/E_{C1(2)}$ 因子。进一步计入点间[[fundamentals/tunnel-coupling|隧穿耦合]] $t_C$，$(N_1+1,N_2)$ 与 $(N_1,N_2+1)$ 杂化成键态与反键态，能级劈裂为 $2t_C$；在蜂窝图上表现为三相点附近的转移线发生反交叉弯曲，弯曲程度直接标定 $t_C$ 的大小。更系统的量子描述是 Hubbard 模型：

$$
H=-\sum_i\mu_i n_i-\sum_{ij}t_{ij}(c_i^\dagger c_j+\mathrm{h.c.})+\sum_i\frac{U_i}{2}n_i(n_i-1)+\sum_{ij}U_{ij}n_i n_j
$$

其中 $U_i=e^2(C_i+\sum_j C_{ij})/C_\Sigma^2$，$U_{ij}=e^2 C_{ij}/C_\Sigma^2$，与 CI 模型在去掉隧穿项时完全对应；论文 1.36–1.38 式明确给出该映射，并指出"考虑 $H_t$ 时不同的 $t_{ij}$ 取值会导致反交叉点出现轻微的偏移"——这是自动调点算法判定点间耦合强弱的物理依据。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 横向量子点尺寸 | $\sim 200\ \mathrm{nm}$（GaAs 二维电子气门控定义） | |
| 总电容 $C_\Sigma$ | $113\ \mathrm{aF}$（浅刻蚀 GaAs 单点实测） | |
| 充电能 $E_C$ | $1.5\ \mathrm{meV}$（同器件，$E_C=e^2/C_\Sigma$） | |
| 杠杆臂 $\alpha$（GaAs） | plunger gate $0.05$，barrier gate $0.1$（无量纲） | |
| 杠杆臂 $\alpha$（GaAs） | $0.027$–$0.06\ \mathrm{meV/mV}$（不同电极、不同器件） | |
| 充电能 $E_C$（Ge/Si 纳米线空穴点） | $4$–$6\ \mathrm{meV}$ | |
| 杠杆臂 $\alpha$（Ge/Si 纳米线空穴点） | $0.20$–$0.25\ \mathrm{eV/V}$ | |
| 栅–点电容 $C_G$ | $C_{RP}=3.1\ \mathrm{aF}$，$\alpha_{RP}=0.027\ \mathrm{meV/mV}$ | |
| 阻塞前提 | $E_C\gg k_\mathrm{B}T$ 且 $G\ll 2e^2/h$ | |
| 交流激励 | $20\ \mu\mathrm{V}$、$37.1\ \mathrm{Hz}$（锁相 SR830） | |

量级背后的物理直觉是：百纳米量级门控量子点的 $C_\Sigma\sim 10$–$100\ \mathrm{aF}$，对应充电能 $E_C\sim 1$–$10\ \mathrm{meV}$、$E_C/k_\mathrm{B}\approx 10$–$100\ \mathrm{K}$，故清晰的阻塞输运通常要求稀释制冷机量级的电子温度；空穴量子点由于器件尺寸更小、有效质量不同，充电能可达数 meV，杠杆臂更大但电子温度敏感度也更高。

## 实验特征与测量

**库仑振荡与电子数标定。** 零偏压下扫描栅压，$\mu(N)$ 依次掠过源漏费米面 $\mu_S=\mu(N)=\mu_D$ 产生等周期电流峰（库仑振荡）；峰间距乘以杠杆臂即为加电子能 $\Delta\mu_N=\mu_N-\mu_{N-1}$，多电子区各电子的充电能几乎相等，峰间距均匀。阻塞区电子数严格整数的性质，使实验上可逐个排空电子直至最后一个，作为标定量子点绝对电子数的常规手段。

**库仑菱形与杠杆臂提取。** 联合扫描 $V_{SD}$ 与 $V_G$ 即得[[fundamentals/coulomb-diamond|库仑菱形]]。菱形半高 $\approx E_C$、宽度 $\Delta V_G=e/C_G$、两条边斜率 $k_1$、$k_2$ 联合给出杠杆臂 $\alpha=1/(1/k_1+1/k_2)$；零偏压测量中亦可直接用 $\alpha=|V_{SD}|/\Delta V_g$ 标定。三种提取方法在实验上应相互一致；若斜率法与几何法偏差明显，往往提示栅压在扫描范围内改变了点的形状（电容随栅压漂移）或存在未被计入的交叉电容。

**偏压窗口与阻塞判据的实验图像。** 把 $\mu(N)$ 与源漏费米面画在同一能量轴上，凡 $\mu(N)$ 落在偏压窗口内的栅压区允许隧穿，凡 $\mu(N)$ 落在窗口外的栅压区被阻塞。这一图像是理解[[fundamentals/coulomb-diamond|库仑菱形]]、[[fundamentals/charge-stability-diagram|电荷稳定图]]与[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]边带的共同语言。

**双点三相点与偏压三角形。** 在[[fundamentals/charge-stability-diagram|电荷稳定图]]上，三相点是零偏压下唯一允许顺序隧穿的位置；有限偏压下每个三相点展成一对偏压三角形，三角形的边长与偏压成正比，由此直接读取杠杆臂与点间隧穿劈裂。沿三相点附近的转移线扫失谐，可以在 QPC 电导中观测到特征台阶——这是[[qubit-control/charge-qubit|电荷量子比特]]杂化能 $2t_C$ 的最直接读出。

**腔探测与色散读出。** 把量子点耦合到[[circuit-qed/microwave-resonator|微波谐振腔]]后，固定探测频率于腔的谐振点，腔的幅值与相位信号也能完整复现电化学势对齐图：在传统直流输运微弱到无法辨认的区域，腔信号仍可灵敏区分电荷态；这是[[readout-measurement/dispersive-readout|色散读出]]思想在电化学势测量中的体现。

**强驱动与光子辅助。** 强微波驱动下电子可吸收光子跨越失谐，使阻塞区出现与边平行的光子复制线（[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]）；这些复制线在能量轴上的间隔正是光子能量 $\hbar\omega$，是定标腔场强度与电化学势能标的另一把尺。

## 与其他概念的关系

- [[fundamentals/charging-energy|充电能]] $E_C$ 是电化学势的能量根源；$\mu(N)$ 是否落入偏压窗口直接判断[[fundamentals/coulomb-blockade|库仑阻塞]]的发生与否。
- [[fundamentals/constant-interaction-model|常相互作用模型]]给出 $\mu(N)$ 的显式公式、$\Delta V_G$ 与杠杆臂 $\alpha$ 的定量预言；它的双点版本给出[[fundamentals/double-quantum-dot|双量子点]]两个电化学势 $\mu_1,\mu_2$ 及其蜂窝结构。
- 阻塞区在有限偏压下展开为[[fundamentals/coulomb-diamond|库仑菱形]]；双点的对应图样是[[fundamentals/charge-stability-diagram|电荷稳定图]]，由三相点展宽得到偏压三角形——二者都是电化学势对齐条件在不同参数平面上的切片。
- 强驱动下阻塞区出现[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]边带；探测这些边带可标定腔场强度。电化学势的失谐 $\epsilon=\mu_1-\mu_2$ 又是[[qubit-control/charge-qubit|电荷量子比特]]与[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]的天然操控坐标。
- 点间[[fundamentals/tunnel-coupling|隧穿耦合]] $t_C$ 使三相点附近转移线弯曲，其大小既由电荷比特杂化能决定，也可从反交叉形貌直接读出。
- 在[[scaling-automation/quantum-dot-array|量子点阵列]]中，每个量子点的电化学势同时被多个物理栅极经交叉电容调制，需要用[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]构造[[scaling-automation/virtual-gates|虚拟电极]]才能独立调节；这是阵列化电化学势调控的核心。
- 电化学势决定阻塞区电子数严格为整数的性质，也是[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]逐个数电子、标定绝对电子数的物理基础；射频化后即[[readout-measurement/rf-reflectometry|射频反射测量]]。


## 参考文献

- 电化学势与库仑阻塞、稳定图的关系：[[references/vanderwiel-2002|van der Wiel et al., RMP 74, 801 (2002)]]、[[references/hanson-2007|Hanson et al., RMP 79, 1217 (2007)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
