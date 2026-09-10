---
title: Toffoli 门
description: 由两个控制比特共同决定是否翻转目标比特的三比特受控受控非门。
aliases:
  - CCNOT
  - 受控受控非门
  - CCNOT 门
tags:
  - 量子比特操控
  - 三比特门
date: 2026-09-08
---

<div class="entry-lead">Toffoli 门只有在两个控制比特都处于指定逻辑态时才翻转目标比特。它是经典可逆计算的通用门，也是检验三比特条件能谱与耦合控制的直接任务。</div>

## 定义与逻辑结构

Toffoli 门（controlled-controlled-NOT，受控受控非门）作用在三个比特上：两个控制比特 $c_1$、$c_2$ 与一个目标比特 $t$。仅当 $c_1=c_2=1$ 时目标比特翻转，其余六种输入保持不变：

$$
|c_1 c_2\,t\rangle\;\longrightarrow\;|c_1 c_2\;t\oplus(c_1\!\cdot\! c_2)\rangle .
$$

写成 $8\times 8$ 矩阵（基矢按 $|000\rangle,|001\rangle,\dots,|111\rangle$ 排列），它只在最后两个基矢 $|110\rangle\leftrightarrow|111\rangle$ 之间交换：

$$
U_{\mathrm{Toffoli}}=
\begin{pmatrix}
1&0&0&0&0&0&0&0\\
0&1&0&0&0&0&0&0\\
0&0&1&0&0&0&0&0\\
0&0&0&1&0&0&0&0\\
0&0&0&0&1&0&0&0\\
0&0&0&0&0&1&0&0\\
0&0&0&0&0&0&0&1\\
0&0&0&0&0&0&1&0
\end{pmatrix}.
$$

在经典可逆计算中，Toffoli 门自身就是通用门（可构造与、或、非、扇出），任何可逆经典电路都可由它实现；在量子线路中它是通用的三比特受控门，广泛出现在误差校正、算术电路与算法子程序中。它原则上可以用多个[[qubit-control/cnot-gate|CNOT 门]]加单比特门串联分解实现，直接三比特门的意义正在于大幅压缩中间门步数：对量子体系而言，门步数减少意味着在有限退相干时间内能完成更多有效运算。

## 为什么更难

三个比特带来 $2^3=8$ 维计算空间。直接实现 Toffoli 门要求目标比特的跃迁频率（或失谐平衡点）能分辨四种控制态 $|c_1c_2\rangle$，同时避免误激发、泄漏与相位错误。若用两比特门分解，电路变长、误差累积；若直接利用多体条件频移实现，则需要稳定且可校准的多比特耦合——这正是半导体体系直到 2016 年前后才有静态演示的原因。

## 理论模型：三电荷比特哈密顿量

文献 5论文把[[qubit-control/charge-qubit|电荷量子比特]]的耦合结构从两个推广到三个：每个比特是一个[[fundamentals/double-quantum-dot|双量子点]]，编码约定为——比特 1 中电子在左点为 $|0\rangle$、在右点为 $|1\rangle$；比特 2、3 则相反（右点为 $|0\rangle$、左点为 $|1\rangle$）。每个比特自身的哈密顿量为

$$
H_q=\frac{\varepsilon\,\sigma_z+\Delta\,\sigma_x}{2},
$$

其中 $\varepsilon$ 是能量失谐量，$\Delta=2t$ 是点内[[fundamentals/tunnel-coupling|隧穿耦合]]劈裂。比特间的电容（偶极）耦合写成投影算符形式：比特 1 与 2 都在 $|1\rangle$ 态时支付耦合能 $J_{12}$，

$$
H_{12}=J_{12}\,\frac{I-\sigma_z}{2}\otimes\frac{I-\sigma_z}{2}\otimes I,
\qquad
H_{13}=J_{13}\,\frac{I-\sigma_z}{2}\otimes I\otimes\frac{I-\sigma_z}{2};
$$

而比特 2、3 的几何位置使 $J_{23}$ 项对应比特 2 处于 $|1\rangle$、比特 3 处于 $|0\rangle$ 的组合：

$$
H_{23}=J_{23}\,I\otimes\frac{I-\sigma_z}{2}\otimes\frac{I+\sigma_z}{2}.
$$

完整的三比特哈密顿量为

$$
\begin{aligned}
H_{3q}=&\frac{\varepsilon_1\sigma_z+\Delta_1\sigma_x}{2}\otimes I\otimes I
+I\otimes\frac{\varepsilon_2\sigma_z+\Delta_2\sigma_x}{2}\otimes I
+I\otimes I\otimes\frac{\varepsilon_3\sigma_z+\Delta_3\sigma_x}{2}\\
&+J_{12}\,\frac{I-\sigma_z}{2}\otimes\frac{I-\sigma_z}{2}\otimes I
+J_{13}\,\frac{I-\sigma_z}{2}\otimes I\otimes\frac{I-\sigma_z}{2}
+J_{23}\,I\otimes\frac{I-\sigma_z}{2}\otimes\frac{I+\sigma_z}{2}.
\end{aligned}
$$

关键的结构简化是：比特 2 与比特 3 被无开口的电极隔开，实测 $J_{23}\ll J_{12},J_{13}$，可安全忽略。于是目标比特 1 的失谐平衡点位置由两个控制比特的态**相加地**决定：控制态为 $|11\rangle$ 时平衡点移动 $J_{12}+J_{13}$，$|10\rangle$（或 $|01\rangle$）时只移动 $J_{12}$（或 $J_{13}$），$|00\rangle$ 时不移动。这个"条件能级移动"就是 Toffoli 条件的物理载体。

### 工作机理：条件拉莫振荡抑制

操控采用非绝热矩形脉冲。事先把脉冲高度调节到"控制比特 2、3 都为 $|1\rangle$ 时，脉冲恰好把比特 1 送到失谐平衡点 $\varepsilon_1=0$"：此时比特 1 在 $|0\rangle$ 与 $|1\rangle$ 之间做拉莫振荡（翻转），改变脉冲宽度即可看到振荡。只要任一控制比特离开 $|1\rangle$ 态，条件耦合 $J_{12}$ 或 $J_{13}$ 就把平衡点移开，同一脉冲不再到达平衡点，拉莫振荡被抑制；抑制程度由耦合能大小决定，抑制足够强时完全看不到翻转。这样，"仅当两个控制比特都为 $|1\rangle$ 时目标比特才翻转"的 Toffoli 真值关系就实现了。

同一机理的两比特版本（CNOT）在第 4 章做过定量模拟：耦合 $J/\hbar=5\ \mathrm{GHz}$ 时目标比特拉莫振荡振幅只剩 $46.7\%$（抑制 $53.3\%$）；$J/\hbar=30\ \mathrm{GHz}$ 时振幅只剩 $2.7\%$（抑制 $97.3\%$），理想门保真度达 $97.3\%$；计入 GaAs 电荷比特的退相干时间 $T_2^*=0.3\ \mathrm{ns}$ 后保真度降到 $88.7\%$。这组数字说明：条件频移方案的门保真度本质上由 $J$ 与失谐、退相干的相对大小决定，$J$ 越大，"关"态抑制越干净。

<!-- FIGURE: 三电荷比特的八能级示意图，标注四种控制态下目标比特跃迁频率的条件移动 J12、J13、J12+J13 -->

## 器件结构与耦合调节

三比特结构经历了两轮设计。第一种参考四量子点对称样品，用三个互成 $120^\circ$ 的中央电极分隔三个比特，理论上三比特地位完全对等；但实际测量中暴露出三个问题——六量子点下每个点只分到 $60^\circ$ 扇区、门电极太少难以调到少电子区，QPC 通道受邻近电极电容串扰、信号本底抖动剧烈，且无法向更多比特扩展——最终被放弃。第二种方案在已验证的双电荷比特结构右侧水平增加一个比特（两排非对称布局），保留了控制比特间耦合的开口水平电极，并可沿水平方向逐个添加比特，具备良好的可扩展性，成为最终方案。

耦合调节沿用双比特结构中的水平门电极：在两个双点间施加负电压 $V_H$ 抬高势垒、抑制电子隧穿，同时电极开口允许电容耦合连续可调。双比特样品的标定显示，$V_H$ 变化约 $100\ \mathrm{mV}$ 即可把 $J/\hbar$ 从几乎为零连续调到 $29.5\ \mathrm{GHz}$，且这一可调性对多个电子占据数区域都成立。三比特样品上先调水平电极使比特 1 与 3 强耦合，再调公共电极使比特 1 与 2 强耦合，最后调各比特内部电极获得合适的点内劈裂 $2t$。比特 2 与 3 之间因被无开口电极隔开，耦合天然很小——这与此前无开口电极样品的测量一致，为忽略 $J_{23}$ 提供了实验依据。

<!-- FIGURE: 非对称两排三电荷比特样品的门电极布局示意，标注三个双量子点比特、水平耦合电极 H1/H2 与 QPC 探测通道 -->

## 参数与量级

以下数值均取自文献 5论文的 GaAs/AlGaAs 样品（二维电子气位于表面下约 $90\ \mathrm{nm}$，$250\ \mathrm{mK}$ 下迁移率 $1.5\times10^{5}\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$、密度 $2.3\times10^{11}\ \mathrm{cm^{-2}}$；稀释制冷机最低温度约 $30\ \mathrm{mK}$）。论文把耦合能同时用 $\mu\mathrm{eV}$ 与频率 $J/\hbar$ 表示（换算惯例为 $119\ \mu\mathrm{eV}\leftrightarrow 29\ \mathrm{GHz}$）。

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 耦合能 $J_{12}$ | $95\ \mu\mathrm{eV}$（约 $23\ \mathrm{GHz}$） | 比特 1–2，$|000\rangle\to|110\rangle$ 跳变测量 |
| 耦合能 $J_{13}$ | $140\ \mu\mathrm{eV}$（约 $34\ \mathrm{GHz}$） | 比特 1–3，$|000\rangle\to|101\rangle$ 跳变测量 |
| 耦合能 $J_{23}$ | $\approx 0$（忽略） | 控制比特间被无开口电极隔开 |
| 双比特 $J$ 调谐范围 | $0\to 29.5\ \mathrm{GHz}$ / $\Delta V_H\approx 100\ \mathrm{mV}$ | 门电压连续可调，对多个电子数区域普适 |
| 杠杆臂 $\alpha$ | $54.6\ \mu\mathrm{eV/mV}$ | 门电压–能量转换系数 |
| 比特内劈裂 $\Delta=2t$ | $\approx 6\ \mathrm{GHz}$（双比特样品 $\Delta_U\approx6.2$、$\Delta_L\approx6.0\ \mathrm{GHz}$） | 决定拉莫振荡频率 |
| 典型脉冲宽度 | $\pi$ 脉冲约 $120\ \mathrm{ps}$；真值表测量取 $3\pi=360\ \mathrm{ps}$ | 太短难以精确控制，太长受退相干限制 |
| 退相干时间 $T_2^*$（GaAs 电荷比特） | $\approx 0.3\ \mathrm{ns}$ | 模拟计算采用值 |
| 模拟门保真度 | $97.3\%$（理想，$J/\hbar=30\ \mathrm{GHz}$）；$88.7\%$（含 $T_2^*$） | 两比特 CNOT 同机理模拟 |
| 实验 CNOT 保真度 | $68\%$ | 双电荷比特真值表测量 |

## 实验特征与测量

实验准备分三步：先把三个比特各自调节到少电子区的标准双量子点区域（在各自的[[fundamentals/charge-stability-diagram|电荷稳定图]]蜂窝图中圈定工作区）；再调节耦合电极使 $J_{12}$、$J_{13}$ 进入强耦合区；耦合能的测量与双比特相同——沿失谐方向扫描，电子占据态跳变（如 $|000\rangle\to|110\rangle$）在 QPC 信号上呈现台阶，用杠杆臂 $\alpha$ 换算成能量即得 $J$。

静态演示的信号非常直观：在比特 1 上施加固定高度的矩形脉冲、扫描脉冲宽度，用 QPC 监测比特 1 的电导。四个控制态中**只有** $|11\rangle$ 对应的 $|{\ast}11\rangle$ 条件下出现电导随脉宽的振荡；当比特 3 调到 $|0\rangle$（$|{\ast}10\rangle$）或比特 2 调到 $|0\rangle$（$|{\ast}01\rangle$、$|{\ast}00\rangle$）时，脉冲因条件耦合抑制无法到达平衡点，振荡完全消失。沿四种控制态取线对比，构成 Toffoli 真值表的静态验证。

需要强调两点边界：其一，这是**静态演示**——验证的是条件电荷配置与条件振荡抑制，不是完整相干三比特过程，不能直接换算为门保真度；其二，动态 Toffoli 门要求对三个比特施加同步的多路精密脉冲，受限于当时样品上多路信号同步、QPC 信号清晰度与通道间串扰，论文未能完成动态操作与保真度测量。作为参照，同一机理的双比特 CNOT 在同一论文中给出了 $68\%$ 的实验保真度。

## 与其他概念的关系

- [[qubit-control/cnot-gate|CNOT 门]]：Toffoli 是 CNOT 的三比特推广，本词条的条件频移机理与双比特受控门完全同源；反过来 Toffoli 也可分解为 CNOT 与单比特门的序列，但门步数大幅增加。
- [[qubit-control/charge-qubit|电荷量子比特]]：本词条内容全部基于电荷编码——比特态即电子在双点中的位置，耦合是偶极–偶极（电容）相互作用。在自旋编码中，Toffoli 类多比特受控旋转通常经由交换耦合的 CNOT 序列构造（文献 22论文即把 $J$ 常开下的 CNOT 视为迈向 Toffoli 等多比特受控旋转的基础）。
- [[fundamentals/charge-stability-diagram|电荷稳定图]]与[[fundamentals/coulomb-blockade|库仑阻塞]]：比特初始化、工作点选取与耦合能读取都在蜂窝图框架内完成；电容耦合能 $J$ 本质上是常相互作用模型中点间耦合静电能的推广。
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]：全部状态读取经由 QPC 电导完成，QPC 通道质量直接决定了三比特方案（尤其被放弃的对称结构）的可行性。
- [[materials-devices/gaas-algaas|GaAs/AlGaAs 材料平台]]：核自旋噪声导致的短 $T_2^*$ 是门保真度的主要瓶颈，也是后续转向硅基平台的动机之一。
- [[scaling-automation/quantum-dot-array|量子点阵列]]：两排非对称结构的水平扩展思路，正是多点阵列化路线的雏形；多比特条件下的调参复杂度也预示了自动调控的必要性。

## 延伸阅读

- H.-O. Li et al., "Controlled-Not Quantum Logic Gate in Two Strongly Coupled Semiconductor Charge Qubits", arXiv (2014). [arXiv: 1411.2177]
- A. Fedorov et al., "Implementation of a Toffoli Gate with Superconducting Circuits", *Nature* (2012). [DOI: 10.1038/nature10713]
- Y. Kim et al., "High-fidelity three-qubit iToffoli gate for fixed-frequency superconducting qubits", arXiv (2021). [arXiv: 2108.10288]
- "Neural-network-designed three-qubit gates robust against charge noise and crosstalk in silicon", arXiv (2023). [arXiv: 2305.13132]

## 论文依据

- [[sources/ref-05|文献 5]]，PDF pp. 99–102：三电荷比特两轮结构设计（$120^\circ$ 旋转对称结构的三大困难与非对称两排方案的扩展性优势），比特 2、3 间耦合 $J_{23}$ 很小的结构依据。
- [[sources/ref-05|文献 5]]，PDF pp. 102–104：三比特哈密顿量（式 5.1–5.6）、忽略 $J_{23}$ 的简化、Toffoli 矩阵（式 5.7）与条件拉莫振荡抑制的实现思路。
- [[sources/ref-05|文献 5]]，PDF pp. 104–107：$J_{12}=95\ \mu\mathrm{eV}$、$J_{13}=140\ \mu\mathrm{eV}$ 的测量，静态 Toffoli 演示（仅 $|{\ast}11\rangle$ 出现振荡）与动态操作的困难。
- [[sources/ref-05|文献 5]]，PDF pp. 81–82：杠杆臂 $\alpha=54.6\ \mu\mathrm{eV/mV}$，$J/\hbar$ 随 $V_H$ 约 $100\ \mathrm{mV}$ 内从 0 连续调到 $29.5\ \mathrm{GHz}$。
- [[sources/ref-05|文献 5]]，PDF pp. 85–87：$J/\hbar=5/30\ \mathrm{GHz}$ 下拉莫振荡抑制率 $53.3\%/97.3\%$、理想保真度 $97.3\%$ 与 $T_2^*=0.3\ \mathrm{ns}$ 下 $88.7\%$ 的模拟，双比特实验 $J=119\ \mu\mathrm{eV}$（$29\ \mathrm{GHz}$）。
- [[sources/ref-05|文献 5]]，PDF pp. 89–91：双电荷比特 CNOT 真值表测量与 $68\%$ 实验保真度，$3\pi$ 脉冲取 $360\ \mathrm{ps}$。
- [[sources/ref-22|文献 22]]，PDF p. 89：Si-MOS 中 $J$ 常开方案的 CNOT 是更多比特受控旋转（如 Toffoli 门）的基础。
