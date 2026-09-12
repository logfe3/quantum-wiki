---
title: 充电能
description: 量子点因有限电容而产生的逐个加入载流子的静电能标度。
aliases:
 - 库仑充电能
 - 充电能量
 - charging energy
tags:
 - 量子点基础
 - 能量
date: 2026-09-08
---

<div class="entry-lead">量子点很小，总电容也小；加入一个电子造成的静电能变化因此不可忽略，这个能量尺度就是充电能。</div>

## 物理图像与定义

充电能（charging energy）是[[fundamentals/semiconductor-quantum-dot|半导体量子点]]作为"导电小岛"时最直接的静电能量标度。一个尺寸百纳米量级、被两侧隧穿势垒夹在源极（source）与漏极（drain）电子库之间的小岛，其总电容 $C_\Sigma$ 仅有几 aF 到几百 aF；若岛上已有 $N-1$ 个载流子，再填入第 $N$ 个载流子会让岛上的静电荷从 $-(N-1-N_0)|e|$ 改变到 $-(N-N_0)|e|$，相应静电能 $Q^2/(2C_\Sigma)$ 的变化是 $|e|^2/C_\Sigma$ 量级。对典型器件这个能量在 1 meV 左右、对应温度约 10 K，远高于室温热涨落，因此在低温下表现为"加一个电子就要付一份静电学费"的离散充电效应。

充电能在不同文献里给出的形式略有差异。最常见的两种写法是

$$
E_C=\frac{e^2}{C_\Sigma},\qquad\text{或}\qquad \frac{e^2}{2C_\Sigma}
$$

差别仅来自电化学势中 $1/2$ 因子的归属方式：把电化学势 $\mu(N)$ 写成相邻能量差的中心点对称形式时出现 $e^2/C_\Sigma$，而把经典电容储能 $Q^2/(2C_\Sigma)$ 直接拆分为"逐份加电子的增量"时则得到 $e^2/(2C_\Sigma)$。两份写法所描述的物理（"加一份电子付多少静电费"）相同，只是边界位置差 $1/2$ 个 $E_C$；本站与[[fundamentals/constant-interaction-model|常相互作用模型]]统一采用 $E_C=e^2/C_\Sigma$。

充电能既不是[[fundamentals/two-dimensional-carrier-gas|载流子气]]材料的内禀性质，也不是束缚势的量子化结果，它纯粹由岛与外界的电容网络决定——这正是[[fundamentals/coulomb-blockade|库仑阻塞]]能在不依赖具体材料的前提下普遍成立的原因。同一个岛上对电子与空穴两种载流子的充电能数值相同，因为决定能标的是电荷量与电容网络，与载流子符号无关。

<!-- FIGURE: 单量子点的等效电路图：量子点作为"导电小岛"，经隧穿结电阻 $R_S, R_D$ 和电容 $C_S, C_D$ 与源、漏电子库相连，经电容 $C_G$ 与栅极耦合，总电容 $C_\Sigma=C_S+C_D+C_G$ -->

## 理论模型：从常相互作用模型推导

充电能的定量定义来自[[fundamentals/constant-interaction-model|常相互作用模型]]（constant interaction model, CI 模型）。CI 模型把整个系统压成两组变量：一组是经典电容网络描述的全部库仑作用，一组是量子力学给出的单粒子束缚能级。基于这一拆解，含 $N$ 个电子（$|e|$ 取正值）的量子点总能量为

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_{SD}+C_G V_G\right]^2}{2C_\Sigma}+\sum_{n=1}^{N}E_n(B)
$$

第一项为静电能 $Q^2/(2C_\Sigma)$，第二项是已占据单粒子能级之和，$N_0|e|$ 补偿背景离子正电荷。漏极接地、源极偏压 $V_{SD}$、栅压 $V_G$ 三组电极通过各自电容 $C_S$、$C_D$、$C_G$ 在岛上感应电荷。CI 模型的两条核心假设是：

1. 全部库仑作用压缩成常数总电容 $C_\Sigma=C_S+C_D+C_G$，不随 $N$ 变化；
2. 单粒子能谱 $E_n(B)$（可含磁场依赖）由束缚势决定，与电子填充无关。

由 $\mu(N)=U(N)-U(N-1)$ 可得电化学势

$$
\mu(N)=\left(N-N_0-\frac{1}{2}\right)E_C-\frac{E_C}{|e|}\left(C_S V_{SD}+C_G V_G\right)+E_N.
$$

充电能 $E_C=e^2/C_\Sigma$ 出现在 $\mu(N)$ 的两个位置：作为相邻 $\mu(N)$ 之间均匀偏移的"楼梯步高"，以及作为栅压–能量转换系数（即[[fundamentals/constant-interaction-model|杠杆臂]]） $\alpha=C_G/C_\Sigma$ 的母因子。换言之，充电能既是点内静电学的能量标度，也是栅压读出中"1 mV 对应多少 meV"换算系数的来源。

### 推导梗概：$Q^2/(2C_\Sigma)$ 的来源

把量子点和所有电极当成节点 $i$，节点电荷 $\vec{Q}$ 与电势 $\vec{V}$ 由电容矩阵 $\vec{Q}=C\vec{V}$ 联系起来，系统总静电能为 $U=\frac{1}{2}\vec{V}^\mathrm{T}\,C\,\vec{V}=\frac{1}{2}\vec{Q}^\mathrm{T}\,C^{-1}\,\vec{Q}$。把矩阵按"点"与"电极"分块，能量拆成点内项、点–电极相互作用项、纯电极项。当点内电荷变化 $\delta Q$ 时，电极会感应出反向电荷以维持电势不变，电源做功恰好抵消相互作用项的变化，归入点自由能的只剩点内项 $U_1=\frac{1}{2}\vec{V}_c^\mathrm{T}\,C_{cc}^{-1}\,\vec{V}_c$。对单点取 $C_{cc}=C_\Sigma$ 就得到上式的 $Q^2/(2C_\Sigma)$ 形式。以及都按此路径推导出 CI 模型公式，明确指出经典静电能项里已经计入了电极感应电荷与电源做功。

<!-- FIGURE: 量子点电荷态从 $N-1$ 变为 $N$ 时的电化学势阶梯图，标注 $E_C$（步高）与 $E_N$（能级差），强调 $\mu(N+1)-\mu(N)=E_C+\Delta E$ -->

### 加电子能与充电能的区别

实际测到的是加电子能（addition energy）

$$
E_\mathrm{add}=\mu(N+1)-\mu(N)=E_C+\Delta E
$$

其中 $\Delta E=E_{N+1}-E_N$ 是相邻单粒子能级间隔。对百纳米量级门控量子点 $E_C\gg\Delta E$，加电子能近似等于充电能；少电子区或轨道简并处 $\Delta E$ 不再可忽略，需要把加电子能拆开理解。少电子区 $E_\mathrm{add}$ 还会因电子–电子关联（[[qubit-control/singlet-triplet-qubit|单态–三重态]]交换劈裂、自旋阻塞等）出现奇偶振荡，使库仑峰高度呈 $2:1:2:1\ldots$ 交替——这是 CI 模型之外的修正。

## 可观测前提与温度标度

"加一个电子需要付静电费"成为可观测量，需要让这份静电费在测量系统中不被热涨落或量子涨落抹平：

$$
E_C\gg k_\mathrm{B}T,\ \hbar\Gamma
$$

其中 $\Gamma$ 是量子点与储库之间的隧穿率，$\hbar\Gamma$ 是能级展宽。这是[[fundamentals/coulomb-blockade|库仑阻塞]]出现的两条基本条件（参见[[fundamentals/coulomb-blockade|库仑阻塞]]词条），但它们都直接以 $E_C$ 写出来。换言之，充电能的数值同时决定了阻塞窗口的"能量高度"和"温度门槛"。

把 $E_C$ 翻译成温度方便选制冷机：$E_C/k_\mathrm{B}\approx17.6\,(E_C/\mathrm{meV})\,\mathrm{K}$。$E_C=1.5\ \mathrm{meV}$ 对应 $\sim 17\ \mathrm{K}$，意味着 He-3 制冷机（$\sim 300\ \mathrm{mK}$）即可看到清晰阻塞，但电子温度往往高于晶格温度，多需要在稀释制冷机（$T_\mathrm{base}\sim 10$–$20\ \mathrm{mK}$）下做精细测量。明确指出："当环境的热涨落大于充电能时，库仑阻塞效应便无法发生"，这也是大多数量子点实验对低温和电导门槛提出严格要求的原因。

## 双量子点：点间耦合能 $E_{Cm}$

充电能在[[fundamentals/double-quantum-dot|双量子点]]系统中自然推广为三组特征能量。串联双点中左右各点总电容为 $C_{1(2)}=C_{L(R)}+C_{g1(2)}+C_m$，对电容矩阵求逆给出

$$
\begin{aligned}
E_{C1}&=\frac{e^2\,C_2}{C_1 C_2-C_m^2},\qquad
E_{C2}=\frac{e^2\,C_1}{C_1 C_2-C_m^2},\\
E_{Cm}&=\frac{e^2\,C_m}{C_1 C_2-C_m^2}.
\end{aligned}
$$

$E_{C1}$、$E_{C2}$ 仍是各自的充电能，$E_{Cm}$ 是点间静电耦合能（有时记作 $U$ 或 $U_\mathrm{coup}$），衡量一点电荷数变化对另一点电化学势的移动量。系统静电能

$$
U(N_1,N_2)=\frac{1}{2}N_1^2 E_{C1}+\frac{1}{2}N_2^2 E_{C2}+N_1 N_2 E_{Cm}+f(V_{g1},V_{g2})
$$

中三项 $E_{C1},E_{C2},E_{Cm}$ 共同决定[[fundamentals/charge-stability-diagram|蜂窝图]]的几何：

- $E_{C1}$、$E_{C2}$ 决定两组加电子线的栅压周期 $\Delta V_{g1(2)}=e/C_{g1(2)}$（在多电子区 $\Delta E\ll E_C$ 时近似成立）；
- $E_{Cm}$ 决定原胞被劈开的间距 $\Delta V_{g1(2)}^m=e C_m/(C_{g1(2)}C_{2(1)})$；
- 二者之比 $\Delta V_{g1(2)}^m/\Delta V_{g1(2)}=C_m/C_{2(1)}$ 直接给出耦合电容占比。

两个极限行为很有启发性：

- **$C_m\to 0$**（$E_{Cm}\to 0$）：$U$ 退化为两个独立单点的能量之和，相图为两组平行正交直线构成的矩形网格；
- **$C_m/C_{1(2)}\to 1$**（$E_{Cm}\gg E_{C1},E_{C2}$）：$U$ 等效为单一总量子点 $\left[-(N_1+N_2)|e|+C_{g1}V_{g1}+C_{g2}V_{g2}\right]^2/(2(C_1+C_2-C_m))$，相图塌缩为一族斜向平行线。

中间区域 $C_m/C_{1(2)}\sim 0.5$ 是"人造分子"区，相图呈标准六边形蜂窝结构。和均按这一公式给出双点静电能与 $E_{C1},E_{C2},E_{Cm}$，并明确两个极限。

## 充电能与轨道能级的关系

充电能描述静电学，[[fundamentals/electrochemical-potential|电化学势]]则把静电和轨道能级统一在一起：

$$
\mu(N)=\underbrace{E_C\,\text{项}}_{\text{静电}}+\underbrace{E_N}_{\text{轨道}}.
$$

两者的实验贡献常常混合在 $\mu(N+1)-\mu(N)$ 里。区分它们需要两种方法：

1. **多电子区统计**：当点内填充几十到几百个电子时，单粒子能级间隔趋向连续，$\Delta E$ 远小于 $E_C$，库仑峰周期 $\Delta V_G\approx e/C_G$ 几乎不随 $N$ 变化。把实测周期与杠杆臂相乘得到的"加电子能"几乎全来自充电能。
2. **少电子区反常**：当填充数降到 $0$–$10$ 电子范围，轨道量子化和电子关联开始占主导：相邻 $\mu(N)$ 间隔出现明显起伏，相邻库仑菱形高度在 $E_C$ 与 $E_C+\Delta E$ 之间交替。直接画出各电子的 $E_\mathrm{add}$ 序列（"加电子谱"），就能区分静电贡献与轨道贡献。少电子区还会因塞曼劈裂、谷劈裂、自旋阻塞等机制出现精细结构，此时必须用[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]等的物理图像来读图。

 在 Si/SiGe 二维阵列中直接给出每个点 1 电子、2 电子区的充电能与杠杆臂，并指出充电能在不同栅压条件下可能略有变化；则在锗硅纳米线空穴点上利用磁场下库仑菱形的塞曼劈裂区分奇偶载流子数，间接验证少电子区单粒子谱的修正。

## 参数与量级

| 量 | 典型值 / 标度 | 来源 |
| --- | --- | --- |
| 总电容 $C_\Sigma$ | $\sim 10$–$100\ \mathrm{aF}$（百纳米门控点） | |
| 总电容 $C_\Sigma$ | $113\ \mathrm{aF}$（浅刻蚀 GaAs 单点实测） | |
| 充电能 $E_C=e^2/C_\Sigma$ | $1.5\ \mathrm{meV}$（同器件） | |
| 充电能 $E_C$ | $\sim 3\ \mathrm{meV}$（Si/SiGe 量子点典型值） | |
| 充电能 $E_C$ | $4$–$6\ \mathrm{meV}$（锗硅纳米线空穴点，腔读出） | |
| 充电能 $E_C$ | $5$–$10\ \mathrm{meV}$（锗硅自组织纳米线空穴点） | |
| 充电能 $E_C$ | $2.83$ / $5.02$ / $3.05$ / $4.63\ \mathrm{meV}$（Si/SiGe 2×2 阵列四个量子点） | |
| 充电能温度 $E_C/k_\mathrm{B}$ | $E_C=1.5\ \mathrm{meV}$ 时约 $17\ \mathrm{K}$ | |
| 单粒子能级间隔 $\Delta E$ | $\sim 0.01$–$0.1\ \mathrm{meV}$（多电子区） | |
| 杠杆臂 $\alpha=C_G/C_\Sigma$ | $\sim 0.027$–$0.06\ \mathrm{meV/mV}$（GaAs） | |
| 杠杆臂 $\alpha$ | $\sim 0.12\ \mathrm{eV/V}$（Si/SiGe 平均值） | |
| 杠杆臂 $\alpha$ | $0.20$–$0.25\ \mathrm{eV/V}$（锗硅纳米线空穴点） | |
| 点间耦合能 $E_{Cm}$ | $E_{Cm}\lesssim 0.3\,E_C$ | |
| 阵列中点–点耦合库仑 $V_{ij}$ | $\sim 0.05$–$0.2\ \mathrm{meV}$（Si/SiGe 2×2） | |
| 大量子点充电能 | $1.05\ \mathrm{meV}$（4 点强耦合塌缩） | |

可以看出充电能在不同体系中跨度很大：GaAs 浅刻蚀大点 $\sim 1.5\ \mathrm{meV}$，锗硅纳米线小点 $\sim 5\ \mathrm{meV}$，Si/SiGe 单点 $\sim 3\ \mathrm{meV}$；同一 2×2 阵列四个点之间也可能有数倍差距，反映了[[materials-devices/silicon-sige|屏蔽板形状]]、[[materials-devices/charge-noise|电荷噪声]]、器件工艺细节的累积效应。

<!-- FIGURE: 不同体系（GaAs、Si/SiGe、Ge/Si 纳米线、InAs 纳米线）充电能实验值与对应总电容的横向比较柱状图 -->

## 实验特征与测量

充电能本身不是一个直接测量量，而是从标准测量图样中提取的物理量。常见路径有三条：

### 库仑峰栅压周期

零偏压下扫描柱塞栅，电流峰对应 $\mu(N)$ 与源漏费米面简并点。峰间距

$$
\Delta V_G=\frac{e}{C_G}\left(1+\frac{\Delta E}{E_C}\right)\approx\frac{e}{C_G}
$$

在多电子区近似仅由栅电容决定——这恰好说明 $\Delta V_G$ 直接度量 $C_G$，而 $C_G$ 与 $C_\Sigma$ 之比就是杠杆臂。乘上 $\alpha$ 后得到加电子能 $E_\mathrm{add}$；多电子区 $E_\mathrm{add}\approx E_C$，由此反推充电能。明确把 $\Delta\mu_N=\mu_N-\mu_{N-1}$ 等同于充电能，并在多电子区取等周期近似。

### 库仑菱形半高

在 $V_G$–$V_{SD}$ 平面上画[[fundamentals/coulomb-diamond|库仑菱形]]，菱形高度方向（$V_{SD}$ 轴）的顶点对应 $e|V_{SD}^\mathrm{tip}|=E_\mathrm{add}\approx E_C$。这是直接读取充电能的最常用方法，详见[[fundamentals/coulomb-diamond|库仑菱形]]。换言之，库仑菱形本身就是"充电能的能量尺"，配上宽度方向的 $\Delta V_G$ 还能同时给出 $C_G$ 与杠杆臂 $\alpha$。多电子区相邻菱形高度近似相等，少电子区则按 $E_C+\Delta E$ 交替，直接给出加电子谱。

### 蜂窝图三相点间距

双点或多点情形下，[[fundamentals/charge-stability-diagram|蜂窝图]]中加电子线周期 $\Delta V_g$ 与点间转移线引起的原胞劈裂间距 $\Delta V_g^m$ 之比直接给出耦合电容占比 $C_m/C_{2(1)}$。三相点本身则需要 $\mu_S=\mu_1=\mu_2=\mu_D$ 四重简并条件。三相点间距随 $C_m$ 增大而增大，可以同时提取两个充电能与 $E_{Cm}$——给出了完整的参数提取路径。

### 谐振腔色散读出

把量子点与[[circuit-qed/microwave-resonator|微波谐振腔]]耦合，在库仑谷中量子点压缩系数 $\chi=\partial N/\partial\mu$ 趋于零，腔的频移由点内充电能经 $\delta f_R\propto -C_\mathrm{dot}/C_\mathrm{res}\,f_0$ 给出；库仑峰处压缩系数上升，频移方向反转。正是从 $\delta f_R$、$\delta f_D$ 反推出 $\Gamma=1.5\ \mathrm{meV}$、$U=E_C=5\ \mathrm{meV}$ 的充电能与隧穿率。这一手段的最大优势是直流输运信号微弱到无法辨认的区域，腔响应仍清晰可读。

### 阻塞与更高阶输运

充电能不只决定[[fundamentals/coulomb-blockade|库仑阻塞]]，也决定阻塞窗口内可观测的更高阶效应：

- **共隧穿**（cotunneling）：当 $|eV_{SD}|<E_C$ 时，顺序隧穿被禁止；但电子仍可通过虚占据中间态一次性穿过量子点，电流 $\propto V_{SD}^2/E_C^2$。这是"充电能越高、共隧穿越被抑制"的直接推论；
- **光子辅助隧穿**（photon-assisted tunneling, PAT）：微波驱动下电子吸收 $n\hbar\omega$ 跨越失谐，阻塞区内出现等距 PAT 复制线，间距由驱动频率给出。这是用外部驱动绕开充电能门槛的实验手段；
- **近藤效应**（Kondo effect）：当点内净自旋为 $1/2$ 时，点自旋与库电子在低温下屏蔽成单态，产生零偏压电导峰；Kondo 温度

```math
T_K=\sqrt{U\Gamma}\,\exp\!\left[-\frac{\pi|\epsilon_d|(\epsilon_d+U)}{2U\Gamma}\right]
```

中的 $U$ 正是充电能；$U$ 越大则 $T_K$ 越低，Kondo 峰越难观测。

充电能同时也是[[materials-devices/charge-noise|电荷噪声]]与[[materials-devices/interface-defects|界面缺陷]]的能量参考标度：当缺陷态的能量落在 $\mu(N)$ 附近时，电子在缺陷和量子点之间隧穿，造成 $E_C$ 漂移与库仑峰跳变。阵列规模扩大时，这种漂移会显著放大，需要[[scaling-automation/virtual-gates|虚拟栅极]]与[[scaling-automation/automatic-tuning|自动调控]]补偿。

## 与其他概念的关系

- [[fundamentals/constant-interaction-model|常相互作用模型]]的两条假设给出了充电能的"为什么"和"如何进入电化学势"。$E_C=e^2/C_\Sigma$ 是该模型最直接的预测，没有 CI 模型就无从定义充电能。
- [[fundamentals/coulomb-blockade|库仑阻塞]]的发生条件 $E_C\gg k_\mathrm{B}T,\hbar\Gamma$ 直接以充电能为标度；[[fundamentals/coulomb-diamond|库仑菱形]]的半高与顶点处 $e|V_{SD}^\mathrm{tip}|=E_C$ 是充电能的几何读取。
- [[fundamentals/electrochemical-potential|电化学势]] $\mu(N)=\mu_\mathrm{elec}(N)+E_N$ 把充电能与单粒子能级合并在一起；阻塞判据与菱形边界都由 $\mu(N)$ 与源漏费米面的相对位置给出。
- [[fundamentals/charge-stability-diagram|电荷稳定图]]的栅压周期直接由 $e/C_{gi}$ 给出（多电子区 $\Delta E\ll E_C$ 时），耦合电容 $C_m$ 决定的原胞劈开间距对应 $E_{Cm}$。因此充电能（更准确地说是 $E_{C1},E_{C2},E_{Cm}$）就是稳定图的"几何尺"。
- [[fundamentals/tunnel-coupling|隧穿耦合]]在三相点附近使转移线发生弯曲，弯曲程度给出 $t_C$；当 $t_C\sim E_{Cm}$ 时，经典蜂窝图塌缩为集体库仑阻塞态，讨论了这一临界行为。
- [[qubit-control/charge-qubit|电荷量子比特]]以失谐 $\varepsilon$ 操控能级移动，$\varepsilon$ 的零点定义为两个局域态的能量对齐——而这个能量对齐本质上是 $\mu_1$ 与 $\mu_2$ 的重合，需要 $E_C$、$E_{Cm}$、$t_C$ 三者共同支撑。
- 多量子点阵列与[[scaling-automation/quantum-dot-array|量子点阵列]]研究中，充电能不均匀（QD2 与 QD4 因屏蔽板形状更"小"而 $E_C$ 更大）是均匀填充电子的核心障碍，需要按各点充电能调节扫描系数或用虚拟栅极补偿。
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]与[[readout-measurement/rf-reflectometry|射频反射测量]]依靠阻塞区电子数整数突变引起附近电导跳变来感知电荷——本质上仍依赖 $E_C$ 大到足以稳定每个电子数。


## 参考文献

- 充电能与常相互作用模型的实验对照：[[references/vanderwiel-2002|van der Wiel et al., RMP 74, 801 (2002)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
