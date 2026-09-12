---
title: 微磁体
description: 集成在量子点附近、提供静态磁场差和空间梯度以支持自旋寻址与电驱动的微纳磁体。
aliases:
 - 微型磁体
 - micromagnet
 - 微磁铁
 - 梯度磁场磁体
 - 倾斜塞曼场
tags:
 - 材料与器件
 - 自旋操控
date: 2026-09-08
---

<div class="entry-lead">微磁体把空间位置编码进磁场：不同量子点获得不同 Zeeman 频率，电子在交流电场下微小移动又会感受到横向振荡场。</div>

## 物理图像：用铁磁薄膜替代自旋轨道耦合

微磁体（micromagnet）指集成在量子芯片上、尺度在微米到亚微米之间的铁磁结构（实验中几乎总是钴，Co），它在量子点所在位置产生空间非均匀的杂散场（stray field）。它之所以成为硅基自旋比特的标配硬件，根源在于硅的本征自旋轨道耦合（intrinsic spin–orbit coupling，ISOC）极弱：弱 ISOC 有利于延长自旋相干时间，却也使得纯电学信号无法直接驱动自旋翻转。

量子点处的总磁场由两部分叠加：

$$
\mathbf{B}_{\mathrm{tot}}(\mathbf{r})=\mathbf{B}_{\mathrm{ext}}+\mathbf{B}_{\mathrm{MM}}(\mathbf{r})
\qquad
E_z=g\mu_B\left|\mathbf{B}_{\mathrm{tot}}\right|,\qquad hf_L=E_z
$$

其中 $\mathbf{B}_{\mathrm{ext}}$ 是均匀外磁场，$\mathbf{B}_{\mathrm{MM}}$ 是被磁化的微磁体产生的杂散场，$g$ 为朗德 $g$ 因子，$\mu_B$ 为玻尔磁子，$f_L$ 为拉莫尔（Larmor）频率。$\mathbf{B}_{\mathrm{MM}}$ 依赖位置，于是**自旋翻转频率变成了电子位置的函数**——这正是自旋轨道耦合的定义性效果。因此微磁体提供的机制被称为合成自旋轨道耦合（synthetic spin–orbit coupling，SSOC）或人工自旋轨道耦合。

与材料自带的 ISOC 相比，SSOC 的来源是时间反演对称性破缺而非晶体结构反演不对称。这带来两条重要后果：其一，SSOC 消除了"Van Vleck 抵消效应"，产生有限的纵向自旋–电场耦合，因而自旋对电噪声更敏感；其二，SSOC 的空间分布完全由磁体几何形状与相对位置决定，因此**可以设计、可以优化**，而 ISOC 只能被材料和界面给定。

<!-- FIGURE: 双量子点器件剖面图：栅极层、绝缘层、Co 微磁体，标出杂散场磁力线、外磁场方向与两个量子点位置 -->

微磁体在硅基自旋比特系统中承担三项互相独立的职责：

- **操控**：横向梯度（垂直于量子化轴）等效引入合成自旋轨道耦合，使交流电场即可驱动自旋翻转，即[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）。
- **寻址与读出**：纵向梯度（平行于量子化轴）令不同位置的比特获得不同拉莫尔频率，支持频率寻址的独立操控；同时它打破双量子点中两电子自旋态的简并，使单重态与三重态在能量上分离，从而允许用电荷探测方式读取自旋态（泡利自旋阻塞，Pauli spin blockade）。
- **耦合**：SSOC 使自旋获得电偶极矩，从而与微波谐振腔光子发生有效相互作用，实现比特间的长程[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]。

## 两类梯度与三个场分量

把总场方向定义为 $z$（量子化轴），微磁体杂散场可以分解为纵向（平行 $\mathbf{B}_{\mathrm{tot}}$）与横向（垂直 $\mathbf{B}_{\mathrm{tot}}$）两部分，对应两类梯度：

$$
b_{\mathrm{tr}}=\left(\mathbf{e}_{\mathrm{MW}}\cdot\nabla\right)B_{\mathrm{MM}}^{\perp}
\qquad
b_{\mathrm{long}}=\left(\mathbf{e}_{\mathrm{noise}}\cdot\nabla\right)B_{\mathrm{MM}}^{\parallel}
$$

其中 $\mathbf{e}_{\mathrm{MW}}$ 是面内微波驱动电场的单位矢量，$\mathbf{e}_{\mathrm{noise}}$ 是面内电荷噪声涨落电场的单位矢量。二者的物理角色完全相反：

- **横向梯度 $b_{\mathrm{tr}}$（有效梯度）**：与微波驱动引起的电子位移结合，产生有效交流磁场，驱动 Rabi 振荡。它越大，EDSR 越快。
- **纵向梯度 $b_{\mathrm{long}}$（有害梯度）**：与电荷噪声引起的随机位移结合，把电荷涨落转写成比特频率抖动，成为限制 $T_2^*$ 的主要噪声通道。它越小越好。

对于电子沿 $y$ 方向被微波驱动、双量子点沿 $x$ 方向排列的常见构型，真正起作用的是三个梯度：$d\mathbf{B}_{\mathrm{tr}}/dy$（驱动）、$d\mathbf{B}_{\mathrm{long}}/dy$（退相干）与 $d\mathbf{B}_{\mathrm{long}}/dx$（同时贡献退相干与跨点寻址）。横向梯度还可进一步拆成面内分量 $d\mathbf{B}_{\mathrm{tr}}^{\mathrm{in}}/dy$ 与面外分量 $d\mathbf{B}_{\mathrm{tr}}^{\mathrm{out}}/dy$——当量子点距磁体下表面仅约 20 nm 时（典型 Si-MOS 器件），面内分量对总横向梯度的贡献不可忽略；若该距离达到 100 nm（微磁体跨在栅极之上的 Si/SiGe 器件常见情形），面内贡献即变得极小。

<!-- FIGURE: 条形微磁体在量子点附近的三维杂散梯度矢量图，标注横向/纵向梯度分解与面内、面外横向分量 -->

## 理论模型

### 含微磁体的单点哈密顿量

设外磁场沿 $x$ 方向、微磁体沿 $z$ 方向的场随 $x$ 线性变化，梯度记作 $b_{sl}$（slanting field gradient），单电子哈密顿量为

$$
H_{MM}=\frac{p^2}{2m_e}+V(x,y)-\frac{g\mu_B B_0}{2}\sigma_x-\frac{g\mu_B b_{sl}x}{2}\sigma_z .
$$

前两项是动能与量子点约束势，第三项是外磁场造成的 Zeeman 劈裂，第四项即微磁体项：当电子被电场推动沿 $x$ 移动时，它在 $z$ 方向感受到一个随位置变化的附加场 $b_{sl}x$。

### 一阶微扰与 EDSR 驱动强度

把第四项当作微扰，用一阶非简并微扰论修正基态波函数：

$$
|g,\sigma\rangle=|1,\sigma\rangle+\sum_{q>1}\frac{\langle q|\tfrac{g\mu_B b_{sl}x}{2}|1\rangle}{\Delta_q+E_z\sigma}\,|q,-\sigma\rangle
$$

其中 $|1,\sigma\rangle$、$|q,-\sigma\rangle$ 是不含微磁项时的轨道本征态，$\Delta_q$ 为轨道能级间距，$E_z$ 为 Zeeman 劈裂能。微磁项把不同自旋、不同轨道的态混合起来——这正是"合成"自旋轨道耦合的微观含义。

对系统施加微波电场 $V(t)=eE_{ac}\cos(\omega t+\phi)$，两个自旋相反的缀饰基态之间出现非零矩阵元：

$$
\langle g,1|V(t)|g,-1\rangle
=\frac{g\mu_B b_{sl}V(t)\,l_{\mathrm{orb}}^{2}\,\Delta}{2\left(\Delta^{2}-E_z^{2}\right)}
\approx\frac{g\mu_B b_{sl}V(t)\,l_{\mathrm{orb}}^{2}}{2\Delta}
$$

最后一步用到 $\Delta\gg E_z$（轨道间距远大于 Zeeman 能）。由此得到 EDSR 的比特操控速率：

$$
\Omega_{\mathrm{EDSR}}=\frac{g\mu_B b_{sl}\,eE_{ac}\,l_{\mathrm{orb}}^{2}}{2\hbar\Delta}\propto b_{sl}.
$$

**结论：Rabi 频率正比于微磁体提供的横向磁场梯度。** 要实现快速自旋操控，就必须为量子点区域提供尽可能大的 $b_{sl}$。

等价地，可以把这一效应写成"电子位移产生的有效交流磁场"：

$$
B_{\mathrm{eff}}=\frac{eE_{ac}\,l_{\mathrm{orb}}^{2}\,|b_{sl}|}{\Delta_{\mathrm{orb}}}\propto\frac{eE_{ac}|b_{sl}|}{\Delta_{\mathrm{orb}}^{2}}
$$

其中假设量子点处于圆频率为 $\omega_0$ 的对称谐振子势阱，特征长度 $l_{\mathrm{orb}}=\sqrt{2\hbar/m^{*}\omega_0}$、最低两轨道能级差 $\Delta_{\mathrm{orb}}=\hbar\omega_0$，$m^{*}$ 为硅中电子有效质量。两个因子都由量子点尺寸决定：**点越"软"（约束越弱），轨道间距越小、电偶极响应越强，同样梯度下 EDSR 越快**。更完整的表达式还含一个形成因子 $K_{mn}$，用以描述具体轨道波函数交叠。

### 三个设计量：有效梯度、有害梯度与磁场差

工程上通常把微磁体性能压缩为三个可直接从仿真读出的标量（双量子点沿 $y$ 轴分列于 $y=\pm 50$ nm）：

$$
\Delta B_z(x,y)=\left|B_z(0,+50\ \mathrm{nm})-B_z(0,-50\ \mathrm{nm})\right|
$$

$$
b_{\mathrm{deph}}(x,y)=\left|\partial B_y(x,y)/\partial y\right|
\qquad
b_{\mathrm{coup}}(x,y)=\left|\partial B_z(x,y)/\partial y\right|.
$$

$\Delta B_z$ 是两点间垂直于外磁场的磁场差，决定比特寻址能力与自旋–光子耦合强度；$b_{\mathrm{coup}}$ 是有效（横向）梯度，决定 Rabi 频率；$b_{\mathrm{deph}}$ 是有害（纵向）梯度，决定退相干。由于 $\Delta B_z$ 本质上是 $b_{\mathrm{coup}}$ 沿 $y$ 的路径积分，而在两点之间 $b_{\mathrm{coup}}$ 变化不大，可近似认为

$$
\frac{1}{T_{\pi}}\propto b_{\mathrm{coup}}\propto\Delta B_z
\qquad
T_2^{*}\propto\frac{\hbar}{\gamma_e\,b_{\mathrm{deph}}\,\sigma}
$$

其中 $T_\pi$ 是 $\pi$ 旋转所需时间，$\gamma_e$ 是电子旋磁比，$\sigma$ 是电荷噪声引起的电子位移均方差。

### 品质因子与目标函数

单比特在退相干时间内能执行的门数，由 Rabi 振荡品质因子刻画：

$$
Q=\frac{T_2^{*}}{T_{\pi}}\propto\frac{\Delta B_z}{b_{\mathrm{deph}}}.
$$

考虑到磁场以外还有其他环境噪声（其贡献记作常数 $C$，与 $b_{\mathrm{deph}}$ 相加），品质因子修正为 $Q\propto\Delta B_z/(b_{\mathrm{deph}}+C)$，于是可以定义一个**与 $1/Q$ 成正比的目标函数**：

$$
R=\frac{b_{\mathrm{deph}}+C}{\Delta B_z}.
$$

$R$ 越小，微磁体结构越优。参数 $C$ 用来调节两项的权重：$C$ 大时目标函数被 $\Delta B_z$ 主导（追求快操控与强耦合），$C$ 小时被 $b_{\mathrm{deph}}$ 主导（追求长相干）。参考文献给出的噪声量级对应 $C\approx 0.04$ 与 $2$，实际优化中常取 $C=5$、$0.5$、$0.05$ 三档做对比。若还要兼顾寻址，可以在 $R$ 中再加一项正比于寻址所需磁场差倒数的惩罚项，用两个权重系数同时调节。

需要强调的是：$b_{\mathrm{coup}}$ 与 $b_{\mathrm{deph}}$ 之间存在结构性矛盾。仿真显示，当中心区域的有效梯度被做大时，有害梯度也会向中心区域靠拢，$T_2^{*}$ 随之缩短——**两者不可兼得，只能取平衡点**。目标函数的意义正是把这个平衡点量化。

### 翻转模式：把微磁体写进双点哈密顿量

当电子波函数跨越双量子点、处于零失谐的成键–反键叠加态时（[[scaling-automation/flopping-mode-qubit|翻转模式]]），电偶极矩显著增大，微磁体的作用可以直接写进 $4\times 4$ 哈密顿量。在基矢 $(|L,\downarrow\rangle,|L,\uparrow\rangle,|R,\downarrow\rangle,|R,\uparrow\rangle)$ 下：

$$
H_{\mathrm{fm}}=\frac{1}{2}
\begin{pmatrix}
-\varepsilon-E_{z1} & -2t_{SO} & 2t_c & 0\\
-2t_{SO} & -\varepsilon+E_{z1} & 0 & 2t_c\\
2t_c & 0 & \varepsilon-E_{z2} & 2t_{SO}\\
0 & 2t_c & 2t_{SO} & \varepsilon+E_{z2}
\end{pmatrix}
$$

其中 $\varepsilon$ 是双点能级失谐，$2t_c$ 是点间[[fundamentals/tunnel-coupling|隧穿耦合]]，$E_z=(E_{z1}+E_{z2})/2$ 是平均 Zeeman 劈裂。微磁体在这里贡献了两个参数：

$$
\delta E_z=\frac{E_{z1}-E_{z2}}{2}=g\mu_B b_z
\qquad
2t_{SO}=g\mu_B b_{\perp}
$$

$b_z$、$b_\perp$ 分别是两点间的纵向与横向磁场差。$t_{SO}$ 项正是引起轨道态与自旋杂化的项——它既是自旋能被电学驱动的原因，也是自旋能与腔光子耦合的原因。实验中在零失谐点测得的 Rabi 频率比 $\varepsilon=\pm 4.5$ meV 处高约一个数量级，品质因子 $Q\equiv 2T_2^{\mathrm{rabi}}f_{\mathrm{rabi}}$ 同样提升一个数量级，与该模型一致。

## 各向异性：外磁场方向是一个自由度

由于 $\mathbf{B}_{\mathrm{MM}}$ 是矢量场，而量子化轴由 $\mathbf{B}_{\mathrm{tot}}$ 决定，**旋转面内外磁场的方向 $\theta_B$ 会同时改变磁体的磁化方向与梯度在量子化轴上的投影**，从而调制几乎所有比特参数。把微磁体在三个笛卡尔方向的诱导场记作 $B_{\mathrm{MM}}^{X,Y,Z}$，投影关系为

$$
B_{\parallel}=B_{\mathrm{MM}}^{X}\cos\theta_B+B_{\mathrm{MM}}^{Y}\sin\theta_B,\qquad
B_{\perp}=B_{\mathrm{MM}}^{X}\sin\theta_B+B_{\mathrm{MM}}^{Y}\cos\theta_B,\qquad
B_{z}=B_{\mathrm{MM}}^{Z}.
$$

在同位素纯化 $^{28}\mathrm{Si}$ 衬底的 Si-MOS 双量子点上（条形 Ti/Co 微磁体，长边沿 $y$），旋转 $\theta_B$ 的系统测量给出如下图景：

- **拉莫尔频率**：共振磁场随 $\theta_B$ 呈周期 $180°$ 的正弦调制，相移约 $8.3°$（源自量子点与条形磁体在 $y$ 方向的不对称）。这与 ISOC 各向异性的正弦规律形式相同。
- **Rabi 频率**：呈明显的**非正弦**调制，最大值与最小值相差约 4.1 倍（$\theta_B=90°$ 处 $f_{\mathrm{rabi}}=2.38$ MHz，$\theta_B=340°$ 处 $0.58$ MHz）。非正弦行为正是 SSOC 区别于 ISOC 的判据——它来自面内与面外横向梯度对总梯度的竞争贡献，且与磁体形状、相对位置有关，一般写不出解析式。
- **品质因子**：$Q_{\mathrm{rabi}}=2f_{\mathrm{rabi}}T_2^{\mathrm{rabi}}$ 同样非正弦，实测在 $\theta_B=270°$ 附近达到约 100，在 $340°$ 附近仅约 5。定义仿真品质因子

```math
Q=\frac{d\mathbf{B}_{\mathrm{tr}}^{\mathrm{tot}}/dy}{\sqrt{\left(d\mathbf{B}_{\mathrm{long}}/dx\right)^{2}+\left(d\mathbf{B}_{\mathrm{long}}/dy\right)^{2}}}
```

（假设电荷噪声各向同性），数值计算给出最优角度在 $15°$ 与 $130°$，即**偏离传统工作点（沿磁体长轴）一定角度**：在这些方向上纵向梯度 $d\mathbf{B}_{\mathrm{long}}/dy$ 被显著抑制，而横向梯度仍保持较高。这是一条纯粹靠转动磁场、不改动器件就能提升保真度的优化路径。

- **斯塔克位移**：也呈周期性。外磁场沿 $x$ 时可达 $240$ MHz/V，沿 $y$ 时降到约 $50$ MHz/V 甚至过零——过零点意味着柱塞栅电噪声对比特频率的一阶影响最小。不过实测 $T_2^{*}$ 的各向异性并没有呈现同样清晰的周期性，说明 $T_2^{*}$ 还受斯塔克位移之外的多种因素支配。

<!-- FIGURE: 拉莫尔频率、Rabi 频率、Q 因子随面内磁场角度 θ_B 的实测与仿真对比曲线 -->

同样的自由度也被用于阵列设计：把微磁体相对量子点连线旋转一个固定角度（如 $15°$），未来做多比特实验时就可以用"整体转动外磁场"的方式差异化调节不同位置比特的频率。

## 结构优化与仿真方法

### 两套仿真工具

- **RADIA**：欧洲同步辐射光源机构开源的 Mathematica 扩展包，内部假设磁性材料沿外磁场方向完全磁化，建模简单、计算快、可编程性强，适合做大批量迭代优化。
- **OOMMF**（Object Oriented MicroMagnetic Framework）：数值求解 Landau–Lifshitz–Gilbert 方程，能真实地给出磁体边界的磁化分布与随时间演化的磁化，但可编程性弱、难以嵌入迭代循环。

典型工作流是"RADIA 迭代出结构 → OOMMF 复核"。两者的差别本身就有物理含义：OOMMF 显示矩形微磁体边缘的磁化向外扩展，磁感线向两侧发散，有效梯度无法向中心的量子点区域聚焦；而多边形微磁体的磁化分布向中心聚集，磁感线集中指向量子点区域——这解释了为什么形状优化能在几乎不改变材料与厚度的前提下提升梯度。

### 可迭代变形的多边形微磁体

一种针对目标区域的形状优化方案如下：沿 $x$ 轴每 10 nm 设一个可动网格点，每个点可沿 $y$ 轴以 10 nm 步长前进或后退；每移动一次就重新仿真、计算目标函数 $R$，若新结构的 $R$ 小于原值的 $0.9999$ 倍则接受替换（阈值略小于 1 可加速收敛并消除仿真精度带来的细小不规则边界）。遍历所有格点记为一次迭代，重复至 $R$ 不再变化。为简化计算，结构被强制沿 $x$、$y$ 轴对称。

结果与检验：

- 迭代约 100 次后形状基本定形；靠近量子点中心的边界收敛最快，远端边界收敛最慢（边缘对中心场的影响弱）。
- 权重 $C$ 决定最优形状的曲率：$C$ 小（重视 $b_{\mathrm{deph}}$）时曲率大，$C$ 大时曲率小。初始间隙 300 nm 的结构在 $C=5,\ 0.5,\ 0.05$ 下分别收敛到 180 nm、220 nm、400 nm 的间隙。
- **全局性检验**：用数百个随机初始形状做迭代，在同一目标函数下总是收敛到相同结构，说明几乎不存在其他局部最优解。

与文献中已优化的矩形设计对比（双点间隙 100 nm、$B_0=0.7$ T 沿 $y$、厚度 200 nm、量子点位于磁体下方 120 nm），OOMMF 给出：矩形中心 $b_{\mathrm{coup}}=0.465$ mT/nm，多边形提升到 $0.606$ mT/nm，约高 30%；在 $b_{\mathrm{deph}}$ 几乎相同的条件下 $Q$ 值提升约 30%。代价是 $b_{\mathrm{deph}}\approx 0$ 的"甜区"尺寸减半（在 120 nm 深度处由 $\pm 300$ nm 缩到 $\pm 150$ nm），但仍在工艺精度可接受范围内。综合评估，多边形结构的 $Q$ 值比矩形高 20%–30%。

工艺上，200 nm 厚度的多边形磁体可用单层胶（950 PMMA A4，低转速 2000 rpm 以保证胶厚大于 200 nm）制备；单层胶没有明显底切（undercut），有利于多边形边界的成形与边缘蒸镀质量。双层胶虽能做到 300 nm 厚，但底切较大。

<!-- FIGURE: 迭代收敛过程：初始矩形 → N=1/10/100 次迭代后的多边形轮廓，以及不同 C 值下的形状差异 -->

### 同层工艺：把微磁体和栅极做在一层

传统方案是"栅极 → 再生长一层氧化铝 → 蒸镀微磁体"的多层结构。改进方案是在设计栅极时预留约 300 nm 宽的空档区域，制作完栅极后直接在同一层重新匀胶、曝光、显影、镀膜，做出与栅极不重叠的微磁体。由于事先留了空档，微磁体不会与小电极短路；磁体与基片之间又有此前工艺留下的氧化铝绝缘层阻断，也不会与基片导通。

同层方案的收益是双重的：省去一层绝缘层生长、缩短工艺周期；更重要的是微磁体在垂直方向上离量子点近了约 20 nm。以 Si/SiGe 异质结（二维电子气距表面约 30 nm，欧姆接触工艺已生长 20 nm 氧化铝）为例，同层结构下磁体–量子点垂直距离 $d\approx 50$ nm，多层结构则约 70 nm。

在这两种 $d$ 下分别扫描形状参数，结论为：

| 参数 | 同层（$d=50$ nm） | 多层（$d=70$ nm） | 说明 |
| --- | --- | --- | --- |
| 长度 | 1000 nm（$R$ 最小） | 2000 nm（$R$ 单调递减，取工艺上限） | 超过该长度后新增部分离量子点太远，$\Delta B_z$、$b_{\mathrm{deph}}$ 几乎不再变化 |
| 宽度 | 600 nm | 340 nm | $\Delta B_z$ 随宽度单调增，但 $b_{\mathrm{deph}}$ 在该宽度处有尖锐极小（量子点位置处磁场斜率过零，两侧斜率反号） |
| 厚度 | 200 nm | 200 nm | 两种结构下 $b_{\mathrm{deph}}$ 在 200 nm 处均有尖锐极小 |
| 间隔 | 380–400 nm | 380–400 nm | 间隔过大时量子点区域梯度明显下降 |

四种器件结构的最终对比（$C=0.05$）：

| 结构 | $\Delta B_z$ | $b_{\mathrm{deph}}$ | 目标函数 $R$ |
| --- | ---: | ---: | ---: |
| 多层 + 矩形 | 25.05 mT | $2.1\times10^{-3}$ mT/nm | $2.08\times10^{-3}$ |
| 多层 + 多边形 | 28.24 mT | $1.4\times10^{-3}$ mT/nm | $1.82\times10^{-3}$ |
| 同层 + 矩形 | 35.23 mT | $2.5\times10^{-4}$ mT/nm | $1.49\times10^{-3}$ |
| 同层 + 多边形 | 38.91 mT | $2\times10^{-5}$ mT/nm | $1.29\times10^{-3}$ |

即：仅把矩形微磁体从多层工艺改为同层工艺，$Q$ 值即提升约 40%；再把矩形迭代改进为优化后的多边形，总提升约 60%。最优结构下 $\Delta B_z=38.91$ mT，按已有自旋–光子强耦合实验的判据（$\Delta B_z\gtrsim 20$ mT 即可实现 $g_s>\gamma_s,\kappa_s$）满足强耦合要求；同时 EDSR 操作下（电子位移振幅约 1 nm）Rabi 频率约 6 MHz，可满足操控需求。

同层方案的限制在于必须为磁体预留空档，因此对难以留出合适位置的器件（如 $2\times2$ 量子点阵列、一维多点阵列）并不适用。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 磁体材料 | Co（铁磁性强、微纳工艺成熟），下垫 Ti 黏附层防脱落 | / |
| 饱和磁化强度 $M$ | $1.8$ T（仿真常用假设） | |
| 工作磁化强度 | $0.4$ T（先加大外场饱和磁化，再降至约 100 mT 工作区，利用磁滞回线） | |
| 条形磁体尺寸（Si-MOS） | 长 $3.5\ \mu\mathrm{m}$、宽 $0.9\ \mu\mathrm{m}$，Ti/Co $10/250$ nm | |
| 仿真最优结构（Si/SiGe 同层） | 长 1000 nm、宽 600 nm、厚 200 nm、间隔 380–400 nm | |
| 磁体–量子点垂直距离 $d$ | 20 nm（Si-MOS）、50 nm（同层）、70 nm（多层）、110–120 nm（早期方案） | / |
| 有效横向梯度 $b_{\mathrm{coup}}$ | $>0.58$ mT/nm 方可支持高速操控；矩形 0.465 → 多边形 0.606 mT/nm | |
| 有害纵向梯度 $b_{\mathrm{deph}}$ | $2\times10^{-5}$–$2.1\times10^{-3}$ mT/nm（依结构） | |
| 两点磁场差 $\Delta B_z$ | 25–39 mT（仿真）；GaAs 寻址判据 $>18$ mT；自旋–光子强耦合 $\gtrsim 20$ mT | |
| 量子点处磁体附加场 $B_M$ | $95.7$ mT（Si/SiGe 三点阵列实测拟合） | |
| Rabi 频率 $f_{\mathrm{rabi}}$ | 1.26–2.4 MHz（Si-MOS 实测）；约 6 MHz（同层多边形仿真）；文献可达 30 MHz | / / / |
| Rabi 品质因子 $Q_{\mathrm{rabi}}$ | 5–100，随面内磁场角度变化 | |
| 翻转模式横向场差 $b_\perp$ | $\sim 0.02$ mT，对应 $f_{\mathrm{charge}}=2.36\pm0.12$ GHz | |
| EDSR 下电子位移振幅 | $\sim 1$ nm | |
| 比特频率预估不确定度 | $\sim 1$ GHz（磁体尺寸/形状/材料差异），而共振峰宽仅 $\sim 1$ MHz | |

## 实验特征与测量

**找峰是第一道门槛。** 微磁体的存在使得量子点处的实际磁场无法精确预知：一方面钴磁体在极低温下的磁化曲线未知，另一方面量子点的确切形成位置只能由[[fundamentals/charge-stability-diagram|电荷稳定图]]粗略估计。比特频率的预估精度只有 GHz 量级，而自旋共振峰宽仅 MHz 量级（换算成等效磁场约 0.036 mT），逐点扫频几乎不可能找到。标准解法是 chirp（啁啾）波形：一段频率线性调制的长脉冲，在短时间内扫过较宽频带，只要覆盖比特频率就能高保真翻转自旋，表现为一个与调制带宽同宽的信号峰（EDSR 峰）。典型参数为带宽 1–50 MHz、持续时间 $20\ \mu\mathrm{s}$–$500\ \mu\mathrm{s}$。

**表征微磁体的三条路径：**

- **旋转外磁场**：固定微波频率，扫描 $\theta_B$ 与外磁场强度，记录共振位置、$f_{\mathrm{rabi}}$、$T_2^{\mathrm{rabi}}$、$Q_{\mathrm{rabi}}$、斯塔克位移与两比特频率差 $\Delta E_z$。把实测各向异性与磁体杂散场的数值模拟相比对，是目前确认 SSOC 主导（而非 ISOC 主导）的最直接判据——**正弦调制指向 ISOC，非正弦调制指向微磁体**。
- **失谐扫描**：在双量子点中扫描 $\varepsilon$ 并记录 Rabi 频率，零失谐处出现的 V 形条纹与频率跃升可用翻转模式模型拟合，反解出 $t_{SO}$ 与 $b_\perp$。
- **磁场标定**：由比特频率对外磁场的线性拟合 $f_q=\alpha g\mu_B B_{\mathrm{ext}}/h+g\mu_B B_M/h$，斜率给出样品处的磁场衰减因子（实测 $\alpha=0.32$），截距给出微磁体在量子点处的附加场 $B_M$。

**退相干签名**：在采用微磁体 EDSR 的样品中，$T_2^{*}$ 普遍在 $1\ \mu\mathrm{s}$ 量级，主因被归结为电荷噪声经由微磁体杂散梯度场耦合到自旋。一个有力的旁证是：改变双点失谐时 Rabi 频率变化一个数量级，而 $T_2^{\mathrm{rabi}}$ 几乎不变，说明噪声来源不是驱动通道本身，而是纵向梯度。这也解释了为何优化微磁体形状（抑制 $b_{\mathrm{deph}}$）能显著延长相干时间。

## 局限与替代路线

微磁体带来的问题与它带来的能力同源：

1. **不可关断**。微磁体一经磁化便产生静态杂散场，梯度在整个量子操作过程中持续存在，与电荷噪声的耦合始终打开，从根本上限制了自旋相干时间的进一步提升。
2. **失谐常开**。比特间的 Zeeman 能级差一直存在，虽可用于寻址，却限制了比特间的信息交换与阵列扩展。
3. **阵列频率拥挤与布线复杂**。要保证寻址，密集阵列中每个比特都需要合适的局域梯度；同时相邻比特的频率间隔又必须大于 $f_{\mathrm{rabi}}+1/T_2^{*}$（工程上简化为频率差大于 $2f_{\mathrm{rabi}}$）。以 $|g|=0.40$ 的 GaAs 量子点为例，若 $f_{\mathrm{rabi}}=50$ MHz，则 $\Delta B_z$ 必须大于 18 mT。在二维阵列中同时满足所有比特的这类约束，会大幅推高工艺复杂度。
4. **几何冲突**。同层方案不适用于 $2\times2$ 阵列等难以预留空档的器件；磁体平行于双量子点连线放置（自旋–光子耦合常用构型）还会加剧有害梯度。

由此衍生出几条替代或补充路线：

- **可切换微磁体**：用方波电流经自旋轨道力矩（SOT）控制磁体的磁化翻转，实现磁场的动态调制。这样可以在比特操控间隙关闭梯度以抑制电荷噪声，方波控制也降低了对波形精度的要求并抑制串扰，参见[[scaling-automation/spin-orbit-torque-control|SOT 基带操控]]。
- **强本征自旋轨道耦合材料**：锗空穴体系与锗纳米线本征 SOC 强，无需天线或微磁体即可全电学快速操控，见[[qubit-control/hole-spin-qubit|空穴自旋比特]]与[[materials-devices/strained-germanium|应变锗]]。
- **不依赖梯度场的编码**：[[qubit-control/singlet-triplet-qubit|单重态–三重态比特]]、[[qubit-control/resonant-exchange-qubit|共振交换比特]]等多点编码方案基于[[qubit-control/exchange-interaction|交换相互作用]]，可以绕开微磁体。
- **软件层缓解**：用[[qubit-control/dynamical-decoupling|动力学解耦]]抑制低频噪声，用同步条件（synchronization）规避串扰。

## 与其他概念的关系

- 微磁体是[[qubit-control/electric-dipole-spin-resonance|EDSR]] 在弱自旋轨道耦合材料中的使能器件，直接决定[[qubit-control/single-spin-qubit|单自旋比特]]的[[qubit-control/rabi-oscillation|Rabi 频率]]与门时间。
- 它同时是最主要的退相干通道：[[materials-devices/charge-noise|电荷噪声]]经纵向梯度转写为比特频率涨落，限制[[qubit-control/ramsey-interferometry|Ramsey]] 实验测得的 $T_2^{*}$。
- 它提供的 $\Delta B_z$ 是双比特门（如 CZ）的必要条件之一——有微磁体的样品中 $\Delta E_z$ 通常在 100 MHz 量级，且可通过磁体设计精确定位；也是[[readout-measurement/single-shot-readout|单发读出]]中泡利自旋阻塞机制的前提。
- 在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]方向，它把自旋与电荷杂化，使自旋比特能与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]达到[[circuit-qed/strong-coupling|强耦合]]，实现[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]与长程比特互连。
- 在[[scaling-automation/flopping-mode-qubit|翻转模式比特]]中，微磁体的横向、纵向场差直接进入双点哈密顿量，成为 $t_{SO}$ 与 $\delta E_z$ 两个参数。
- 器件层面，它与[[materials-devices/silicon-mos|Si-MOS]]、[[materials-devices/silicon-sige|Si/SiGe]] 的栅极堆叠工艺深度耦合，是[[scaling-automation/two-dimensional-array|二维阵列]]与[[scaling-automation/quantum-dot-array|量子点阵列]]扩展中的关键约束之一。


## 参考文献

- 微磁体辅助 EDSR 的器件实现：[[references/veldhorst-2015|Veldhorst et al., Nature 526, 410 (2015)]]、[[references/noiri-2022|Noiri et al., Nature 601, 338 (2022)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
