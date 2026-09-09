---
title: 电荷稳定图
description: 扫描两个或更多栅压得到的电荷态相图，用于识别电荷数、耦合和跃迁边界。
aliases:
  - 蜂窝图
  - 稳定图
  - 电荷稳定性图
  - 库仑蜂窝图
tags:
  - 量子点基础
  - 数据
date: 2026-09-08
---

<div class="entry-lead">电荷稳定图把一组栅电压映射到量子点电荷占据。它是人工调点与自动调控共同使用的核心“地图”。</div>

## 物理图像

电荷稳定图（charge stability diagram）是栅压空间到量子点平衡电荷占据的映射：固定其他电极，扫描两个（或更多）栅压，每一点记录使系统能量最低的电荷组态 $(N_1,N_2,\dots)$。同一条目内部的 $(N_1,N_2)$ 固定不变，称为稳定区；相邻稳定区之间的边界是电荷态简并线，电子可在此隧穿进出，故在输运或电荷传感信号中表现为一条条"隧穿线"。

以最常用的串联[[fundamentals/double-quantum-dot|双量子点]]为例，取左、右柱塞栅压 $V_{g1}$、$V_{g2}$ 为坐标轴。源漏接地（$\mu_L=\mu_R=0$）时，基态电荷组态是同时满足 $\mu_1(N_1,N_2)<0$ 与 $\mu_2(N_1,N_2)<0$ 的最大 $(N_1,N_2)$，即总静电能 $U(N_1,N_2)$ 最小的组态。相图形态由点间耦合电容 $C_m$ 与点总电容之比控制：

- **弱耦合**（$C_m/C_{1(2)}\to 0$）：两点互不影响，相图退化为横竖两组平行线构成的矩形网格，相当于两个独立单点的[[fundamentals/coulomb-blockade|库仑阻塞]]峰各自扫描的叠加；
- **中间耦合**（$0<C_m/C_{1(2)}<1$）：矩形顶点被"劈开"，相图变成六边形蜂窝状，蜂窝图（honeycomb diagram）由此得名——这是实验中最常用的人工分子（artificial molecule）工作区，周诚论文中取 $C_m/C_{1(2)}\sim 0.5$ 为代表；
- **强耦合**（$C_m/C_{1(2)}\to 1$）：两个点在静电上无法区分，系统等价于一个电子数为 $N_1+N_2$、总电容更大的单量子点，相图退回一族斜向平行线。

![[assets/figures/fundamentals/yang-2023-fig1-4-charge-stability.jpg]]

*点间耦合强度 $C_m$ 不同时双量子点电荷稳定图的演化（[杨杰诚 2023]([[sources/yang-jiecheng-2023]])，图 1.4）*

<!-- 原始占位：双量子点电荷稳定图随点间耦合的演化：(a) 弱耦合矩形网格；(b) 中间耦合六边形蜂窝；(c) 强耦合单点极限。标注 (N1,N2) 电荷组态 -->

## 理论模型

### 电容网络与双点静电能

双量子点的经典描述是[[fundamentals/constant-interaction-model|常相互作用模型]]的电容网络版本：点 1 经电容 $C_L$ 接源极、点 2 经 $C_R$ 接漏极，各自经 $C_{g1}$、$C_{g2}$ 接柱塞栅，两点间由互电容 $C_m$ 耦合（忽略交叉电容时 $V_{g1}$ 只作用于点 1）。定义各点总电容 $C_1=C_L+C_{g1}+C_m$、$C_2=C_R+C_{g2}+C_m$，对电容矩阵求逆可得三个特征能量——两点各自的[[fundamentals/charging-energy|充电能]]与点间静电耦合能：

$$
E_{C1}=\frac{e^2}{C_1}\,\frac{1}{1-\dfrac{C_m^2}{C_1C_2}},\qquad
E_{C2}=\frac{e^2}{C_2}\,\frac{1}{1-\dfrac{C_m^2}{C_1C_2}},\qquad
E_{Cm}=\frac{e^2}{C_m}\,\frac{1}{\dfrac{C_1C_2}{C_m^2}-1}.
$$

系统静电能为

$$
U(N_1,N_2)=\frac{1}{2}N_1^2E_{C1}+\frac{1}{2}N_2^2E_{C2}+N_1N_2E_{Cm}+f(V_{g1},V_{g2}),
$$

其中栅压项

$$
f(V_{g1},V_{g2})=-\frac{1}{e}\left[C_{g1}V_{g1}\left(N_1E_{C1}+N_2E_{Cm}\right)+C_{g2}V_{g2}\left(N_1E_{Cm}+N_2E_{C2}\right)\right]+\text{const}(V_{g1},V_{g2}),
$$

常数项只含栅压的二次项，不影响电荷态边界。两个极限行为可直接从 $U$ 读出：$C_m=0$ 时 $E_{Cm}=0$，$U$ 分解为两个独立单点能量之和；$C_m/C_{1(2)}\to 1$ 时系统等价于电荷数 $N_1+N_2$ 的单点。

### 电化学势与蜂窝边界

对 $U$ 做差分得到两点的[[fundamentals/electrochemical-potential|电化学势]]：

$$
\mu_1(N_1,N_2)=U(N_1,N_2)-U(N_1-1,N_2)=\left(N_1-\frac{1}{2}\right)E_{C1}+N_2E_{Cm}-\frac{1}{e}\left(C_{g1}V_{g1}E_{C1}+C_{g2}V_{g2}E_{Cm}\right),
$$

$$
\mu_2(N_1,N_2)=U(N_1,N_2)-U(N_1,N_2-1)=\left(N_2-\frac{1}{2}\right)E_{C2}+N_1E_{Cm}-\frac{1}{e}\left(C_{g1}V_{g1}E_{Cm}+C_{g2}V_{g2}E_{C2}\right).
$$

稳定区的三类边界由简并条件给出（取源漏为零电势参考）：

- **点 1 加电子线**：$\mu_1(N_1+1,N_2)=0$，斜率
$$\frac{dV_{g2}}{dV_{g1}}=-\frac{C_{g1}E_{C1}}{C_{g2}E_{Cm}};$$
- **点 2 加电子线**：$\mu_2(N_1,N_2+1)=0$，斜率
$$\frac{dV_{g2}}{dV_{g1}}=-\frac{C_{g1}E_{Cm}}{C_{g2}E_{C2}};$$
- **点间转移线**：$(N_1+1,N_2)$ 与 $(N_1,N_2+1)$ 简并，即 $\mu_1(N_1+1,N_2)=\mu_2(N_1,N_2+1)$，斜率
$$\frac{dV_{g2}}{dV_{g1}}=\frac{C_{g1}\left(E_{C1}-E_{Cm}\right)}{C_{g2}\left(E_{C2}-E_{Cm}\right)}.$$

由于 $E_{C1}/E_{Cm}=C_2/C_m\gg 1$，两组加电子线一组陡峭、一组平缓，而点间转移线呈对角走向；三类线两两一组围成六边形蜂窝原胞，原胞顶点即三相点。$C_m\to 0$ 时 $E_{Cm}\to 0$，加电子线分别趋于竖直与水平，蜂窝退化为矩形网格——蜂窝形变本身就是 $C_m$ 的直接度量。

### 隧穿耦合与 Hubbard 模型

纯经典图像中边界是锐利的直线。计入点间[[fundamentals/tunnel-coupling|隧穿耦合]] $t_C$ 后，$(N_1+1,N_2)$ 与 $(N_1,N_2+1)$ 杂化成键态与反键态，能级劈裂为 $2t_C$；在蜂窝图上表现为三相点附近的点间转移线发生弯曲（反交叉），弯曲程度直接标定 $t_C$ 的大小。更系统的量子描述是 Hubbard 模型：

$$
H=-\sum_i\mu_i n_i-\sum_{ij}t_{ij}\left(c_i^\dagger c_j+\mathrm{h.c.}\right)+\sum_i\frac{U_i}{2}n_i(n_i-1)+\sum_{ij}U_{ij}n_i n_j,
$$

其中 $n_i=c_i^\dagger c_i$ 为第 $i$ 点的粒子数算符，$U_i$、$U_{ij}$ 为点内与点间库仑相互作用。它与常相互作用模型存在映射 $U_i=e^2(C_i+\sum_jC_{ij})/C_\Sigma^2$、$U_{ij}=e^2C_{ij}/C_\Sigma^2$（$C_\Sigma$ 为所有等效电容之和）：去掉跃迁项 $H_t$ 时回到经典蜂窝图；保留 $H_t$ 时不同 $t_{ij}$ 使反交叉点位置与形貌改变，与实验更吻合。只做电荷态调控时经典模型已足够，需要精确描述点间隧穿过程时则须使用 Hubbard 模型。

## 三相点与偏压三角形

零偏压下，允许电流流过双点的条件是源、两点、漏的化学势全部对齐：$\mu_S=\mu_1=\mu_2=\mu_D$。这在蜂窝图中只在三条边交汇的顶点满足，称为三相点（triple point）。三相点分两类：

- **电子型**：电子沿"源极 $\to$ 左点 $\to$ 右点 $\to$ 漏极"顺序隧穿；
- **空穴型**：等效于一个空穴沿反方向通过双点。

两个三相点之间（点间转移线上）电子处于 $(N_1+1,N_2)$ 与 $(N_1,N_2+1)$ 的混合态，无法定义属于哪一点。

施加有限源漏偏压 $V_{SD}$ 后，简并条件放宽为偏压窗口内的一组不等式，每个三相点在相图上展开成一对三角形区域——偏压三角形（bias triangle）。三角形的三条边分别对应 $\mu_1$ 与源极费米面对齐、两点化学势互相对齐、$\mu_2$ 与漏极费米面对齐；边长正比于偏压大小。三角形尺寸是提取杠杆臂（lever arm）的标准手段：沿栅压方向量出三角形边长 $\delta V_{gi}$，则

$$
eV_{SD}=\alpha_i\,e\,\delta V_{gi},\qquad \alpha_i=\frac{C_{gi}}{C_i},
$$

即栅压轴上的三角形宽度经杠杆臂换算后恰好等于所加偏压。偏压进一步增大时激发态进入窗口，三角形内出现激发态输运线，可用于读取[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]等体系的能级间距。

<!-- FIGURE: 单个蜂窝原胞放大图：标注加电子线、点间转移线、电子型与空穴型三相点，以及有限偏压下展开的一对偏压三角形及其对应的电化学势对齐关系 -->

## 参数与量级

| 量 | 典型值 / 标度 | 说明 |
| --- | --- | --- |
| 耦合电容比 $C_m/C_{1(2)}$ | $\sim 0$（弱）/ $\sim 0.5$（人工分子区）/ $\to 1$（强） | 决定相图从矩形网格到蜂窝再到单点极限的演化 |
| 三相点间隔 | $\Delta V_{im}=|e|C_m/(C_1C_2)$ | 蜂窝原胞被劈开的间距，直接度量 $C_m$ |
| 杠杆臂 $\alpha_i=C_{gi}/C_i$ | $\sim 0.1\ \mathrm{eV/V}$；实测 $126\ \mathrm{meV/V}$（Si/SiGe 三量子点，库仑菱形法） | 栅压–能量转换系数，由偏压三角形或[[fundamentals/coulomb-diamond|库仑菱形]]提取 |
| 隧穿劈裂 $2t_C$ | 由三相点附近转移线弯曲程度标定 | 反交叉形貌是自动调点中判断耦合强弱的特征 |
| 典型扫描窗口 | $45\ \mathrm{mV}\times 45\ \mathrm{mV}$ 量级 | 神经网络识别用的单张子图尺寸（约 1.5 mV/像素） |

## 测量方法

**直接输运**：测量通过双点的源漏电流或微分电导。优点是直接反映输运条件；缺点是只在三相点与偏压三角形附近有信号，蜂窝内部一片"黑"，且少电子区电流常低于噪声。

**电荷传感**：用邻近的[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]（或 SET）感知点内电子数的离散跳变，可在整个相图上描出全部电荷转移线，是绘制蜂窝图的主流方案。通过在相图上从耗尽区向目标区域数穿过的充电线数目，可以确定每个蜂窝格的绝对电子数 $(N_1,N_2)$。射频化后即为[[readout-measurement/rf-reflectometry|射频反射测量]]。

**腔探测**：将双点耦合到微波谐振腔，用反射幅值与相位读取蜂窝图。其独特优势是在传统直流输运完全测不到信号的区域（如源漏隧穿率过低时），腔响应仍能灵敏区分电荷态；且腔对蜂窝图不同边界（源漏线与点间转移线）的响应不同，可直接区分跃迁类型。江顺利论文中用腔相位响应测得三量子点电荷稳定图，进一步观测到三个点化学势同时简并的四相点（quadruple point）。

需要注意，传感器响应曲线、[[materials-devices/charge-noise|电荷噪声]]引起的漂移与测量带宽滤波都会改变图像外观，不能仅凭视觉模板对电荷态下结论。

## 阵列推广与自动调控

$N$ 个量子点的完整稳定图是 $N$ 维栅压空间中的分界面结构：双点时是线段分隔电荷态，三点时已经是三维空间中的面，实验上只能取二维切片观察。三量子点的二维切片中出现多条不同斜率的源漏隧穿线相交，形成八个三相点；调节势垒使两条点间转移简并重合时，八个三相点演化为四个三相点加两个四相点，四相点处四个电荷态能量简并——这是三量子点系统可调性的直接证据，也支撑量子元胞自动机等现象的观测。

维数灾难使人工读图不可行：二维切片必须对所有栅对两两测量，信息量随点数爆炸。工程上的解决方案是用[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]构造[[scaling-automation/virtual-gates|虚拟电极]]，把每个点的化学势方向正交化后再扫描；分析端则用神经网络做[[scaling-automation/charge-state-recognition|电荷态识别]]：以"隧穿线是否存在"标记电子数变化、以反交叉点形貌判定欠耦合/适中耦合/过耦合，从最后一条电荷转移线的位置定位少电子区，支撑[[scaling-automation/automatic-tuning|自动调控]]流水线。

## 与其他概念的关系

- [[fundamentals/coulomb-blockade|库仑阻塞]]是稳定区内部电子数固定、电流为零的物理根源；[[fundamentals/coulomb-diamond|库仑菱形]]是单点稳定图在栅压–偏压平面上的对应物。
- [[fundamentals/constant-interaction-model|常相互作用模型]]给出蜂窝几何的全部经典预言；[[fundamentals/electrochemical-potential|电化学势]] $\mu_i$ 的简并条件定义了每条边界。
- [[fundamentals/charging-energy|充电能]] $E_{Ci}$ 决定蜂窝沿栅压方向的周期，点间耦合能 $E_{Cm}$ 决定原胞被劈开的间距。
- [[fundamentals/tunnel-coupling|隧穿耦合]] $t_C$ 使三相点附近出现量子弯曲，其大小既由[[qubit-control/charge-qubit|电荷比特]]杂化能决定，也可从反交叉形貌读出。
- 稳定图是[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]谱、[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]测量的共同坐标系：这些实验都固定在蜂窝图的特定位置（如点间转移线中点）进行。
- 它是[[scaling-automation/quantum-dot-array|量子点阵列]]规模化中的核心数据结构，配合[[scaling-automation/virtual-gates|虚拟电极]]与[[scaling-automation/automatic-tuning|自动调控]]算法使用。

## 延伸阅读

- W. G. van der Wiel, S. De Franceschi, J. M. Elzerman, T. Fujisawa, S. Tarucha, and L. P. Kouwenhoven, "Electron transport through double quantum dots", *Reviews of Modern Physics* (2002). [DOI: 10.1103/revmodphys.75.1]
- N. L. Foulk and S. Das Sarma, "Theory of charge stability diagrams in coupled quantum dot qubits", *Physical Review B* (2024). [DOI: 10.1103/PhysRevB.110.205428]
- L. M. K. Vandersypen et al., "Real-time detection of single-electron tunneling using a quantum point contact", *Applied Physics Letters* (2004). [DOI: 10.1063/1.1815041]

## 论文依据

- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 20–21：串联双点等效电路与静电能 $U(N_1,N_2)$、$E_{C1}/E_{C2}/E_{Cm}$ 公式（式 1.17–1.21）。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 21–22：双点电化学势 $\mu_1/\mu_2$（式 1.22–1.23）与蜂窝图构建；电子型与空穴型三相点。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF p. 22：大偏压下三相点展成偏压三角形，由三角形尺寸提取杠杆臂 $\alpha_1,\alpha_2$（式 1.24–1.25）。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF p. 81：QPC 电荷感应测得规则蜂窝相图，从耗尽区数充电线确定各格绝对电子数。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 26：双点充电能与耦合静电能公式（式 1-7～1-9），$C_m\to 0$ 与 $C_m/C_{1(2)}\to 1$ 两个极限（式 1-10、1-11）。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 27–28：蜂窝图随耦合强度的演化与原胞结构（三相点、$\Delta V_g$ 与 $\Delta V_g^m$ 标注）。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF p. 30：隧穿耦合 $2t_C$ 使三相点附近转移线弯曲；偏压三角形各边对应的电化学势对齐关系。
- [[sources/liu-hanwei-2022|刘汉伟 2022]]，PDF p. 27：零偏压蜂窝图与有限偏压偏压三角形的输运图像；三角形边长正比于偏压。
- [[sources/liu-hanwei-2022|刘汉伟 2022]]，PDF pp. 39–40：Hubbard 模型哈密顿量（式 1.36–1.38）及其与常相互作用模型的映射；考虑跃迁项后反交叉点偏移。
- [[sources/liu-hanwei-2022|刘汉伟 2022]]，PDF pp. 56–58：稳定图特征提取——最后一条隧穿线定位少电子区，反交叉形貌判定点间耦合，三相点间隔 $\Delta V_{im}=|e|C_m/(C_1C_2)$。
- [[sources/liu-hanwei-2022|刘汉伟 2022]]，PDF p. 76：神经网络输入子图按约 1.5 mV/像素、$45\ \mathrm{mV}\times45\ \mathrm{mV}$ 切割。
- [[sources/li-yan-2018|李炎 2018]]，PDF p. 98：点间电容耦合使蜂窝图交叉点劈裂成两个点。
- [[sources/li-yan-2018|李炎 2018]]，PDF p. 111：直流输运探测不到信号的区域，谐振腔幅值与相位仍可灵敏探测电荷态。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF p. 58：库仑菱形法测得电极杠杆臂 $126\ \mathrm{meV/V}$。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 64–66：谐振腔相位响应测三量子点电荷稳定图，八个三相点演化为四个三相点加两个四相点。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF p. 28：不同耦合区域（$C_m/C_{1(2)}\sim 0,\ 0.5,\ 1$）的蜂窝图形态。
