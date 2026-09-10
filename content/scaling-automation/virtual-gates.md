---
title: 虚拟电极
description: 由多个物理栅压线性组合成的控制坐标，用于近似独立调节量子点化学势或势垒。
aliases:
 - 虚拟栅极
 - virtual gates
tags:
 - 扩展与自动化
 - 校准
date: 2026-09-08
---

<div class="entry-lead">物理栅极的电场没有硬边界。虚拟电极通过软件同时改变多根栅压，让某个目标参数变化、其他参数一阶保持不动。</div>

## 为什么需要虚拟电极

门控定义的[[fundamentals/semiconductor-quantum-dot|半导体量子点]]中，每根金属栅极产生的电场在空间上没有截断：一根柱塞栅（plunger gate）除了决定"自己的"量子点的[[fundamentals/electrochemical-potential|电化学势]]，还会通过寄生电容拉动邻近量子点的电化学势，甚至改变点间势垒的高度。这种**栅极串扰**（capacitive crosstalk）在[[fundamentals/charge-stability-diagram|电荷稳定图]]上表现为倾斜的电荷隧穿线——理想情况下某点的隧穿线应只沿自身柱塞栅方向延伸，串扰使其对另一根栅的电压也产生依赖。

单点、双点时代，实验者凭经验手动"回拧"其他栅压即可补偿；但当[[scaling-automation/quantum-dot-array|量子点阵列]]扩展到数十根栅极时，串扰使控制空间变成一个高维、强耦合的电压空间，人工调节逐渐失去可行性。虚拟电极（virtual gate，又称虚拟栅极）把"同时按精确比例拧动多根物理栅"封装成一个新的软件坐标：每个虚拟电极原则上只影响一个目标参数（某点的电化学势或某势垒的隧穿耦合），而把对其他参数的一阶影响消掉。它最早由代尔夫特理工大学 Vandersypen 组在九点 Fermi–Hubbard 阵列等工作中系统化，2019 年普林斯顿大学 Petta 组又将其发展为自动校准流程的一环，如今已成为阵列级调控与[[scaling-automation/automatic-tuning|自动调控]]的标准接口。

<!-- FIGURE: 物理栅极调控与虚拟电极调控的对比示意图：(a) 物理栅极下量子点受邻近多根栅极共同影响；(b) 虚拟电极下每个量子点只与对应虚拟电极耦合 -->

## 理论模型

### 线性映射与变换矩阵

在一个局部工作点附近，物理栅压变化 $\Delta\mathbf V$ 与各量子点电化学势变化 $\Delta\boldsymbol\mu$ 之间是线性关系。把变换矩阵记为 $\mathbf T$（即归一化的[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]），有

$$
\Delta\boldsymbol\mu=\alpha\,\mathbf T\,\Delta\mathbf V\equiv\alpha\,\Delta\mathbf U
$$

其中 $\alpha$ 是由器件杠杆臂决定的常量，$\Delta\mathbf U$ 被定义为虚拟电极的电压变化量。写成矩阵形式：

$$
\begin{pmatrix}\Delta\mu_1\\ \vdots\\ \Delta\mu_n\end{pmatrix}
=\alpha\begin{pmatrix}t_{11}&\cdots&t_{m1}\\ \vdots&\ddots&\vdots\\ t_{n1}&\cdots&t_{mn}\end{pmatrix}
\begin{pmatrix}\Delta V_1\\ \vdots\\ \Delta V_m\end{pmatrix}.
$$

理想情况下 $\mathbf T$ 应当近似单位阵——每个虚拟电极分量只驱动一个 $\Delta\mu_i$。测量与校准的任务就是求出实际的 $\mathbf T$，再用其逆矩阵组合物理栅压：

$$
\Delta\mathbf V=\mathbf T^{-1}\Delta\mathbf U=\alpha^{-1}\mathbf T^{-1}\Delta\boldsymbol\mu.
$$

在 Si/SiGe 2×2 阵列中采用的写法与此等价：$\mathrm{v}\mathbf G=\mathbf M\,\mathbf G$，其中 $\mathbf G$ 与 $\mathrm{v}\mathbf G$ 分别是由物理栅极（P1、B1 等）与虚拟栅极（vP1、vB1 等）构成的列向量，串扰矩阵 $\mathbf M$ 的维度达 $11\times 11$（7 根势垒栅 + 4 根柱塞栅），用 $\mathbf M^{-1}$ 对物理栅压做线性组合即得各虚拟电极。需要强调的是，虚拟电极的电压绝对值没有物理意义，有意义的只是其变化量 $\Delta\mathrm{vP}_i$，单位与物理栅压一致。

### 从隧穿线斜率提取变换矩阵

变换矩阵的非对角元不需要逐点拟合电容，可直接从电荷稳定图读出。关键观察是：**沿量子点 $i$ 的电荷隧穿线移动时，该点的电化学势不变**，即 $\Delta\mu_i=0$。代入线性映射，并在只扫描两根栅极（横轴 $p$、纵轴 $q$）的二维相图中化简，得

$$
\Delta\mu_i=\alpha\left(t_{i,q}\Delta V_q+t_{i,p}\Delta V_p\right)=0.
$$

约定对角元归一化为 1，则非对角元直接等于隧穿线斜率的相反数：

$$
t_{i,i}=1,\qquad t_{i,p}=-\frac{\Delta V_q}{\Delta V_p}\equiv-r_i
$$

$r_i$ 即量子点 $i$ 的隧穿线斜率。给出的实例中，某双量子点器件测得 $r_1=-8$、$r_2=-0.325$，于是

$$
\mathbf T=\begin{pmatrix}1&-1/r_1\\ -r_2&1\end{pmatrix}=\begin{pmatrix}1&0.125\\ 0.325&1\end{pmatrix}
\qquad
\mathbf T^{-1}=\begin{pmatrix}1.042&-0.13\\ -0.339&1.042\end{pmatrix}.
$$

扫描虚拟电极而非物理栅极重新测量，同一对电荷隧穿线变得互相垂直——两条隧穿线不再相互影响，独立控制即告建立。这一"隧穿线变直/变正交"正是虚拟电极生效的直接实验判据。

<!-- FIGURE: 虚拟电极应用前后的双量子点电荷稳定图对比：物理栅极下隧穿线倾斜，虚拟电极下 (0,1)-(1,0) 区域隧穿线相互垂直 -->

### 多点阵列的迭代更新

把虚拟电极扩展到 $n$ 个量子点时，不需要一次性测量完整的 $n\times m$ 矩阵。相邻双点依次建立局部变换矩阵后，新旧矩阵按乘法复合即可：

$$
\mathbf M_n=\mathbf M_{\mathrm{update}}\,\mathbf M_{n-1}
$$

$\mathbf M_{n-1}$ 为更新前的矩阵，$\mathbf M_{\mathrm{update}}$ 为从新加入双点的电荷稳定图提取的矩阵。其物理基础是：在对新点更新之前，旧虚拟电极对新点的影响与对应物理栅极完全相同，因此新矩阵可以直接在旧坐标下测量。这一递推结构使矩阵更新的测量开销只随阵列规模线性增长，是虚拟电极可扩展性的关键。论文附录给出的矩阵更新实例 $\mathbf M_3=\mathbf M_2\mathbf M_1$（耦合增大后重测斜率并复合）是同一规则。

### 虚拟势垒栅极

同一思想可推广到点间[[fundamentals/tunnel-coupling|隧穿耦合]]的独立调节，称为虚拟势垒栅极（virtual barrier gate）。但势垒栅对隧穿耦合的调控不是线性的，而是强指数依赖：

$$
t_{ij}=t_0+t_1\exp\!\left(\beta_{ij}\,\mathrm{vB}_{ij}\right)
$$

$\beta_{ij}$ 表征该势垒栅的调控能力。在 2×2 阵列中测得四个最近邻势垒的 $\beta$ 值从 $1.42\times10^{-2}$ 到 $6.85\times10^{-2}\ \mathrm{mV}^{-1}$ 不等，最弱者仅为最强者的 21%。硅基阵列中最近邻隧穿耦合之间的串扰通常很弱（以 $t_{\mathrm{ref}}=60\ \mu\mathrm{eV}$ 为参考点表征时基本不动），但并非严格为零：例如增大 $\mathrm{vB}_{41}$ 会把 QD4 推离 QD3 而显著压低 $t_{34}$。此时可从数据提取交叉调控系数 $\beta'=-1.03\pm0.11\times10^{-2}\ \mathrm{mV}^{-1}$，在扫 $\mathrm{vB}_{41}$ 的同时按此系数补偿 $\mathrm{vB}_{34}$，实现对各最近邻耦合的独立控制——这正是指数型"虚拟势垒"的手动实现。

## 自动化实现

虚拟电极把串扰补偿变成纯代数运算，因此天然适合交给计算机。两个关键环节：

- **斜率自动提取**：自动调控流程用霍夫线变换（Hough line transform）从电荷稳定图中检测（可能残缺、被遮挡的）隧穿线段并返回斜率，配合卷积神经网络（[[scaling-automation/charge-state-recognition|电荷态识别]]）对相图分类，虚拟电极的建立可以完全无人工干预。
- **量子点遍历**（quantum dot switching）：阵列调控按"双点为最小重复单元"进行——先把 QD1–QD2 调至少电子区并建立 VP1–VP2，再加入 QD3 组成新双点调控，旧虚拟电极保护已调好的点不受影响；共用的 QD2 因排空电压已知而起过渡作用。每加入一个新点，就按上节的乘法规则更新一次变换矩阵。流程还配有回跳机制：迭代超出电压范围仍未成功时回到初始化位置、抬高势垒初值重来。在一枚含 15 根栅极（5 根势垒栅 + 4 根柱塞栅 + 传感器栅）的四量子点器件上演示了全流程：加入 QD3 前后重测 VP1–VP2 相图，少电子区位置几乎不动，证明虚拟电极对既有电荷态的保护能力。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 隧穿线斜率实例 $r_1,\ r_2$ | $-8$、$-0.325$（GaAs 双点，对应串扰约 3%–12%） | |
| 四量子点器件栅极数 | 15 根（5 势垒 + 4 柱塞 + 2 个 SET 的栅极） | |
| 串扰矩阵维度 | $11\times11$（Si/SiGe 2×2 阵列，7 势垒 + 4 柱塞） | |
| 四点充电能 $U_1$–$U_4$ | 2.83、5.02、3.05、4.63 meV | |
| 平均杠杆臂 $\alpha$ | $\approx0.12\ \mathrm{eV/V}$ | |
| 最近邻隧穿耦合调节范围 | 约 $25\ \mu\mathrm{V}$ 到超过 $200\ \mu\mathrm{V}$ | |
| 势垒调控系数 $\beta_{ij}$ | $(1.42$–$6.85)\times10^{-2}\ \mathrm{mV}^{-1}$ | |
| 耦合串扰补偿系数 $\beta'$ | $-1.03\pm0.11\times10^{-2}\ \mathrm{mV}^{-1}$（vB41→t34） | |

## 现实限制与维护

虚拟电极是**局部线性化**的产物，其有效性有明确边界：

- **工作点漂移**：栅压响应随电子数、势垒状态变化，线性矩阵只在建立时的工作点附近成立。增大隧穿耦合会使量子点位置明显移动，原本正交的电荷隧穿线重新倾斜——虚拟电极失效。实验中表现为大幅度扫虚拟势垒电压时，反交叉点位置显著移动。
- **周期性重标定**：为维持调控性，需定期重测串扰系数并复合更新矩阵（$\mathbf M_3=\mathbf M_2\mathbf M_1$）。阵列运行时间越长、耦合调得越强，更新越频繁。
- **非线性自由度**：电化学势方向的串扰是电容性的、近似线性，虚拟电极可以干净地消除；但势垒–耦合方向是指数关系，电容矩阵无法完整描述，虚拟势垒栅极常需配合逐点提取的 $\beta$ 系数手动补偿。
- **不均匀性的吸收**：各点充电能不一致时，均匀填充需要给虚拟电极加不同的扫描系数 $k_i=U_i/U_0$（以 $U_4=3.00\ \mathrm{meV}$ 为基准，$k_1$–$k_4$ 取 0.67、0.71、0.97、1.00）；做双点谱学时再换用失谐轴与能量轴 $\epsilon_{ij}=k_i\mathrm{vP}_i-k_j\mathrm{vP}_j$、$U_{ij}=k_i\mathrm{vP}_i+k_j\mathrm{vP}_j$——它们是虚拟电极的进一步线性组合，相当于把相图旋转 45° 并按充电能缩放。

## 与其他概念的关系

- [[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]是虚拟电极的物理输入：虚拟电极就是该矩阵逆矩阵的行向量，矩阵条件数过大时控制轴近线性相关，反演会放大噪声。
- 变换矩阵元由[[fundamentals/charge-stability-diagram|电荷稳定图]]上电荷隧穿线的斜率给出；虚拟电极生效的判据也画在同一张图上（隧穿线变正交）。
- 电化学势方向的线性来自[[fundamentals/constant-interaction-model|常相互作用模型]]：栅压只通过电容分压平移 $\mu_i$。势垒方向则受[[fundamentals/tunnel-coupling|隧穿耦合]]的指数律支配，是虚拟电极最薄弱的一环；通过虚拟势垒设定的耦合强度直接决定[[qubit-control/exchange-interaction|交换相互作用]] $J$。
- 虚拟电极是[[scaling-automation/quantum-dot-array|量子点阵列]]与[[scaling-automation/two-dimensional-array|二维阵列]]调控的软件底座：它把高维串扰空间对角化，使[[scaling-automation/automatic-tuning|自动调控]]可以逐点、逐双点推进，也是[[scaling-automation/charge-state-recognition|电荷态识别]]结果转化为调控动作的接口层。
