---
title: 单态–三重态量子比特
description: 以双量子点两电子自旋单态与零磁量子数三重态编码的量子比特。
aliases:
  - ST量子比特
  - S-T0量子比特
  - 单态-三重态量子比特
  - singlet-triplet qubit
tags:
  - 量子比特操控
  - 自旋
  - 双量子点
date: 2026-09-08
---

<div class="entry-lead">单态–三重态量子比特把两个电子的联合自旋态 $|S\rangle$ 和 $|T_0\rangle$ 作为逻辑基，操控轴分别来自交换作用与两点间磁场梯度。</div>

## 物理图像与编码

在串联[[fundamentals/double-quantum-dot|双量子点]]的 $(1,1)$ 电荷区，左右两点各囚禁一个电子。两个自旋 $1/2$ 合成一个单态和三个三重态：

$$
|S\rangle=\frac{|\uparrow\downarrow\rangle-|\downarrow\uparrow\rangle}{\sqrt{2}},\quad
|T_0\rangle=\frac{|\uparrow\downarrow\rangle+|\downarrow\uparrow\rangle}{\sqrt{2}},\quad
|T_+\rangle=|\uparrow\uparrow\rangle,\quad
|T_-\rangle=|\downarrow\downarrow\rangle .
$$

在弱耦合、零磁场下这四个态近似简并。沿[[fundamentals/charge-stability-diagram|电荷稳定图]]中 $(1,1)$–$(0,2)$ 反交叉线改变失谐 $\varepsilon$（两电荷态的能量差），进入 $\varepsilon>0$ 区域后两个电子占据同一点：基态是单态 $S(0,2)$，而三重态 $T(0,2)$ 因泡利不相容原理要求一个电子占据激发轨道，能量高出 $E_{ST}$（GaAs 中一般为数百 $\mu$eV，典型值约 $400\,\mu$eV），在操控与读出中不参与。施加外磁场 $B_{\mathrm{ext}}$ 后 $T_\pm$ 发生塞曼劈裂 $\pm g\mu_B B_{\mathrm{ext}}$，在 $J(\varepsilon)=g\mu_B B_{\mathrm{ext}}$ 处 $S$ 与 $T_+$ 交叉；交叉点一侧 $S$ 与 $T_0$ 构成有效二能级系统，即单态–三重态（$S$–$T_0$）量子比特。选择两个零磁量子数态编码的好处是：均匀磁场对二者产生的塞曼相移相同，比特对全局磁场涨落一阶免疫，剩下的退相干主要来自两点磁场的**差值**。

<!-- FIGURE: (1,1)–(0,2) 反交叉附近 S、T0、T± 各能级随失谐 ε 变化的示意图，标注交换能 J(ε)、(0,2) 区单态–三重态能级差 E_ST 与外磁场下的 S–T+ 交叉点 -->

这一编码方案的吸引力在于**全电控**：$z$ 轴旋转只需栅压脉冲调节 $J(\varepsilon)$，无需微波磁场，绕开了单自旋方案中金属条带加热与寻址的难题。方案由 Levy 于 2002 年提出，2005 年 Petta 等在 GaAs 双量子点中首次演示 $S$–$T_0$ 相干交换振荡；此后微磁体梯度方案被引入硅基器件（Eriksson 组），两个 $S$–$T_0$ 比特间的纠缠也由 Yacoby 组实现。在比特编码的家族中，它与[[qubit-control/single-spin-qubit|单自旋量子比特]]（一个电子）、[[resonant-exchange-qubit|交换型三电子编码]]构成按电子数递增的序列。

## 理论模型

$S$–$T_0$ 比特的理论描述分两层：先由 $(1,1)$–$(0,2)$ 电荷反交叉的两能级模型给出可调交换能 $J(\varepsilon)$，再把超精细核场作为准静态微扰加入，得到含两条控制轴的有效二能级哈密顿量。

### 交换能：从电荷反交叉到 $J(\varepsilon)$

点间隧穿保持自旋守恒，因此只有自旋相同的态相互耦合：$S(1,1)$ 与 $S(0,2)$ 耦合，而 $T_{0,\pm}$ 不与 $S(0,2)$ 耦合。在基 $\{S(0,2),\,S(1,1)\}$ 下，

$$
H=\begin{pmatrix} -\varepsilon & \Delta \\ \Delta & 0 \end{pmatrix},
$$

其中 $\Delta$ 表征隧穿耦合强度。本征能量为 $(-\varepsilon\pm\sqrt{\varepsilon^2+4\Delta^2})/2$。$T_0$（能量取为零点）与较低单态本征态的能量差定义为[[exchange-interaction|交换相互作用]]能

$$
J(\varepsilon)=\frac{\varepsilon+\sqrt{\varepsilon^2+4\Delta^2}}{2},
$$

在负大失谐极限 $J(\varepsilon)\approx \Delta^2/|\varepsilon|$，即交换能被指数式地压向零。这与 Hubbard 图像一致：在充电能 $U$ 远大于失谐与塞曼差时，$J= \dfrac{2t_c^2}{U-\varepsilon-\Delta E_z}+\dfrac{2t_c^2}{U-\varepsilon+\Delta E_z}\approx\dfrac{4t_c^2}{U}$，$t_c$ 为[[fundamentals/tunnel-coupling|隧穿耦合]]。失谐和势垒栅压都能调节 $J$，但二者对[[materials-devices/charge-noise|电荷噪声]]的敏感度不同。

### 核磁场与有效二能级哈密顿量

在 GaAs 中，每个电子通过超精细相互作用与约 $10^6$ 个核自旋耦合。核自旋动力学远慢于电子，可采用准静态近似，把核自旋库等效为冻结的有效磁场（奥弗豪泽场）。记两点电子感受到的平均场与差场分别为

$$
B=B_{\mathrm{ext}}+\frac{B_{\mathrm{nuc},l}+B_{\mathrm{nuc},r}}{2},\qquad
dB=\frac{B_{\mathrm{nuc},l}-B_{\mathrm{nuc},r}}{2},
$$

总哈密顿量为

$$
H=g\mu_B\big[B\cdot(S_l+S_r)+dB\cdot(S_l-S_r)\big]-J(\varepsilon)\,S_l\cdot S_r .
$$

以 $\{|T_+\rangle,|T_0\rangle,|T_-\rangle,|S\rangle\}$ 为基展开（各耦合项符号依赖于基矢相位约定）：

$$
\frac{H}{g\mu_B}=
\begin{pmatrix}
B_z & 0 & 0 & \dfrac{dB_x-i\,dB_y}{2} \\
0 & 0 & 0 & -dB_z \\
0 & 0 & -B_z & -\dfrac{dB_x-i\,dB_y}{2} \\
\dfrac{dB_x+i\,dB_y}{2} & -dB_z & -\dfrac{dB_x+i\,dB_y}{2} & -\dfrac{J(\varepsilon)}{g\mu_B}
\end{pmatrix}.
$$

可见：平均场的 $z$ 分量劈裂 $T_\pm$；**两点核场差的 $z$ 分量 $dB_z$ 耦合 $S$ 与 $T_0$**；差场的横向分量耦合 $S$ 与 $T_\pm$。当 $B_z\gg B_{\mathrm{nuc}}$ 时 $T_\pm$ 被塞曼能移出，$\{|T_0\rangle,|S\rangle\}$ 子空间的有效哈密顿量为

$$
H_{\mathrm{eff}}=\begin{pmatrix} 0 & -g\mu_B dB_z \\ -g\mu_B dB_z & -J(\varepsilon) \end{pmatrix},
$$

这就是 $S$–$T_0$ 比特的工作哈密顿量：对角元差 $J(\varepsilon)$ 提供 $z$ 轴，非对角元 $g\mu_B dB_z$ 提供 $x$ 轴。类似地，在 $S$–$T_+$ 交叉点附近，横向核场差以混合角 $\theta=\arctan\!\big[2\Delta/\big(\sqrt{\varepsilon^2+4\Delta^2}-\varepsilon\big)\big]$ 加权后驱动 $S\leftrightarrow T_+$，把交叉变成反交叉。

## 操控：交换轴与梯度轴

在布洛赫球上 $|S\rangle$、$|T_0\rangle$ 分居南北极，$J=0$ 时的本征态 $|\uparrow\downarrow\rangle$、$|\downarrow\uparrow\rangle$ 定义 $x$ 轴。

**$z$ 轴（交换轴）**：把系统脉冲到 $J(\varepsilon)\gg |g\mu_B dB_z|$ 的失谐位置，态矢量以频率 $J(\varepsilon)/h$ 绕 $z$ 轴进动，积累 $S$ 与 $T_0$ 间的相对相位。由于初始化只能制备 $|S\rangle$（北极），而交换振荡的可见度在态处于赤道时最大，标准流程借助绝热跟随把初态搬到赤道：在 $(0,2)$ 区初始化 $S(0,2)$ 后，用快速绝热脉冲越过 $S$–$T_+$ 交叉进入 $(1,1)$ 区，再缓慢斜坡关闭 $J(\varepsilon)$，系统跟随瞬时本征态演化为核场本征态 $|\uparrow\downarrow\rangle$ 或 $|\downarrow\uparrow\rangle$（取决于即时核场）；随后非绝热地打开 $J(\varepsilon)$ 进动时间 $\tau_E$，最后用反向绝热跟随把 $x$ 轴映射回 $z$ 轴读出。单态概率随 $\tau_E$ 与 $\varepsilon$ 呈现清晰的振荡条纹，增大点间隧穿耦合可提高振荡频率。

**$x$ 轴（梯度轴）**：驱动到 $J\approx 0$ 的大失谐处，$g\mu_B dB_z$ 使 $S$ 与 $T_0$ 互相转化。困难在于 GaAs 中核场差是随机的：热涨落使 $x$ 旋转的角度逐次实验抖动，退相干时间 $T_2^*$ 只有约 $10\,$ns，与平均旋转周期同量级。可靠的 $x$ 轴操作需要稳定且足够大的磁场梯度，两条主流路线是在量子点旁集成[[materials-devices/micromagnet|微磁体]]，或通过动态核自旋极化（dynamic nuclear polarization，DNP）泵浦出稳定的核场梯度。两条不共线轴组合即可合成普适单比特门。

交换振荡在实验上表现为 QPC 微分电导随失谐 $\varepsilon$ 与演化时间 $\tau_E$ 的二维条纹图：固定失谐做线切即得阻尼正弦的振荡曲线，频率给出 $J(\varepsilon)/h$；增大点间隧穿耦合 $2t_c$，振荡明显加快。这组"频率–失谐"数据同时是标定 $J(\varepsilon)$ 曲线、与自旋漏斗结果互相校验的手段。

<!-- FIGURE: S–T0 比特的布洛赫球：|S⟩、|T0⟩ 位于南北极，J(ε) 驱动绕 z 轴进动，核场/微磁体梯度驱动绕 x 轴旋转 -->

## 初始化、读出与表征

**初始化**：在 $(0,2)$ 区等待远大于弛豫时间的时长，系统弛豫到基态 $S(0,2)$，再脉冲分离到 $(1,1)$ 区即得 $|S\rangle$。分离脉冲需满足"快速绝热"条件：既要快于核场引起的 $S$–$T$ 混合时间（避免被核场翻转），又要慢于隧穿劈裂对应的绝热极限（避免激发到高能态）——这一时间窗口是整条操控流水线的基准。

**读出（自旋–电荷转换）**：在 $(1,1)$–$(0,2)$ 反交叉的正失谐一侧，单态基态为 $(0,2)$ 电荷构型而三重态基态仍为 $(1,1)$。操作结束后把系统快速驱动到读出窗口（$\varepsilon<E_{ST}$）：末态为单态则跃迁到 $S(0,2)$，末态为三重态则因 $T(0,2)$ 能量过高而被"阻塞"在 $(1,1)$——这就是泡利自旋阻塞（Pauli spin blockade）。两种自旋由此映射为两种电荷构型，可由[[readout-measurement/qpc-charge-sensor|QPC 电荷传感器]]或射频单电子晶体管分辨，是[[readout-measurement/single-shot-readout|单发读出]]的基础。

实验上观测阻塞有两种方式。**输运法**：在源漏间加偏压，反偏压下输运循环 $(0,1)\to(1,1)\to(0,2)\to(0,1)$ 在形成三重态时中断，偏压三角形内电流被抑制，而正偏压下循环 $(0,1)\to(0,2)\to(1,1)\to(0,1)$ 只经过 $S(0,2)$，电流畅通——正反偏压的不对称（整流特征）即自旋阻塞的指纹；该法要求点间与点–库耦合都适中，并非所有样品都能测到。**脉冲栅法**：不依赖电流，先在 $(0,1)$ 区初始化，再移到加载点无自旋选择地装入第二个电子（$S$ 与三个 $T$ 近似等概率），最后脉冲到 $(0,2)$ 区内的测量点停留大部分周期；当测量点落在由三条电荷跃迁（延长）线围成的"阻塞三角形"内时，QPC 信号介于 $(1,1)$ 与 $(0,2)$ 两种构型之间，表明部分时间系统被阻塞在 $(1,1)$。由三角形内信号随脉冲周期的指数衰减可提取三重态弛豫时间，陈宝宝论文样品上测得约 $70\,\mu$s。

**$J(\varepsilon)$ 的标定（自旋漏斗）**：把 $S(0,2)$ 快速绝热地脉冲到失谐 $\varepsilon$ 处等待 $\tau_S\gg T_2^*$（保证与核场充分混合）再返回读出。当脉冲尖端落在 $S$–$T_+$ 交叉线上（$J(\varepsilon)=g\mu_B B_{\mathrm{ext}}$）时，核场横向分量驱动 $S$–$T_+$ 混合，单态概率下降；在 $(\varepsilon, B_{\mathrm{ext}})$ 平面上呈现漏斗状特征，沿漏斗线即可逐点提取 $J(\varepsilon)$。

**$S$–$T_+$  Landau–Zener–Stückelberg 干涉**：$S$–$T_+$ 反交叉可用[[landau-zener-transition|Landau–Zener 跃迁]]做相干控制。单次以速率 $v$ 穿过反交叉时，停留在 $S$ 的振幅满足 $|A_S|^2=P_{LZ}=\exp(-2\pi\Delta_{ST}^2/\hbar v)$（$\Delta_{ST}$ 为反交叉能隙）；在两次穿越之间于失谐 $\varepsilon$ 处停留 $\tau_S$，积累相位 $\varphi=\frac{1}{\hbar}\int\{E_S[\varepsilon(t)]-E_{T_+}[\varepsilon(t)]\}dt$，返回时发生干涉。理想情形 $P_{LZ}=1/2$ 时每次穿越等效于一个 Hadamard 门，相位积累等效于绕 $z$ 轴旋转，二者合成普适单比特操作——这是[[lzsm-interference|LZSM 干涉]]在自旋比特中的形态。此外，反复"绝热穿过、非绝热返回" $S$–$T_+$ 反交叉，每循环翻转一个核自旋，可实现动态核自旋极化，在两点间建立稳定梯度供 $x$ 轴操作使用。

## 参数与量级

| 参数 | 典型量级 | 说明 |
| --- | --- | --- |
| $(0,2)$ 单态–三重态能级差 $E_{ST}$ | 数百 $\mu$eV（GaAs 约 $400\,\mu$eV） | 限定读出窗口 $\varepsilon<E_{ST}$ |
| 交换能 $J(\varepsilon)$ | 近零到反交叉处最大，连续可调 | $z$ 轴旋转频率 $J/h$ |
| 核场差耦合 $g\mu_B dB_z$（GaAs） | 对应 $T_2^*\approx 10\,$ns | 随机梯度限制 $x$ 轴操控 |
| 每个电子耦合的核自旋数（GaAs） | 约 $10^6$ | 准静态奥弗豪泽场的来源 |
| $T_2^*$（Si 中 $S$–$T_0$ 比特） | $\approx 360\,$ns | 同位素纯化抑制核场涨落 |
| $T_2$（GaAs，动力学解耦） | $\approx 0.87\,$ms | 以门时间为代价抑制低频噪声 |
| 三重态弛豫 $T_1$（阻塞窗口内） | 数十 $\mu$s（论文样品约 $70\,\mu$s） | 由阻塞信号衰减提取 |
| $S$–$T_+$ 交叉条件 | $J(\varepsilon)=g\mu_B B_{\mathrm{ext}}$ | 自旋漏斗与 LZS 的工作点 |

## 噪声、相干与对称工作点

$S$–$T_0$ 比特的退相干有两个主要来源。其一是超精细核场：$dB_z$ 的准静态涨落使绕 $x$ 轴（以及含 $x$ 分量的任意）旋转的角度逐次抖动，是 GaAs 器件中 $T_2^*$ 短至约 $10\,$ns 的原因；改用核自旋为零的[[materials-devices/silicon-sige|Si/SiGe]] 或 Si-MOS 平台并同位素纯化 $^{28}$Si，可把 $T_2^*$ 延长到数百 ns，配合[[dynamical-decoupling|动力学解耦]]还可压制低频成分（GaAs 中 $T_2$ 达 $0.87\,$ms）。其二是电荷噪声：$J(\varepsilon)$ 本质上来自 $(1,1)$ 与 $(0,2)$ 单态的杂化，失谐涨落 $\delta\varepsilon$ 直接调制比特频率，敏感度正比于 $dJ/d\varepsilon$——增大 $J$ 加快门操作的同时必然加大对电荷噪声的敏感度，且 $S$ 态混入 $S(0,2)$ 成分使系统带有电偶极矩。

速度与相干之间的折中因此是 $S$–$T_0$ 比特工程的核心。缓解办法是**对称工作点**（sweet spot）：$(1,1)$ 同时与 $(0,2)$、$(2,0)$ 耦合，总可以在 $(1,1)$ 区内找到一点使两侧杂化带来的偶极矩相互抵消，此时 $J$ 对失谐一阶不敏感，改为通过隧穿耦合调节 $J$；代价是控制势垒的栅极不可避免地牵动失谐，需要在三个栅极上施加同步补偿脉冲。在此之上，复合脉冲（用分段旋转抵消静态控制误差）与[[dynamical-decoupling|动力学解耦]]序列（用快速反转平均掉慢噪声）分别从空间和时间两个维度进一步抑制误差，是把门保真度推向容错阈值的常用工具。

## 与其他概念的关系

与[[qubit-control/single-spin-qubit|单自旋量子比特]]相比，$S$–$T_0$ 编码的全部操控可由栅压脉冲（全电控）完成，无需微波磁场或强局域驱动，代价是每个比特占用两个电子、且需要稳定的磁场梯度。其 $z$ 轴与本站[[exchange-interaction|交换相互作用]]词条共享同一微观起源；$x$ 轴所需的梯度与[[materials-devices/micromagnet|微磁体]]方案互通。向更多电子数推广，三电子情形给出[[resonant-exchange-qubit|共振交换量子比特]]与[[hybrid-qubit|杂化量子比特]]，其 $\{|S\rangle,|T_0\rangle\}$ 子空间结构在两重态–四重态体系中会以相似形式复现。多电子双量子点中还会出现四重态阻塞等超出两电子模型的结构（陈宝宝论文第 3 章），不能简单套用本词条的哈密顿量。两个 $S$–$T_0$ 比特之间可借杂化偶极矩的电容耦合实现纠缠（Yacoby 组已演示）；在硅基阵列中，同一交换哈密顿量在 $J\gg\Delta E_z$ 极限下给出 $\sqrt{\mathrm{SWAP}}$ 类两比特门，与单自旋编码的门集互补。

## 延伸阅读

- J. R. Petta et al., "Coherent Manipulation of Coupled Electron Spins in Semiconductor Quantum Dots", Science (2005). [DOI: 10.1126/science.1116955]
- M. D. Shulman et al., "Demonstration of Entanglement of Electrostatically Coupled Singlet-Triplet Qubits", Science (2012). [DOI: 10.1126/science.1217692]
- X. Wu et al., "Two-axis control of a singlet–triplet qubit with an integrated micromagnet", Proceedings of the National Academy of Sciences (2014). [DOI: 10.1073/pnas.1412230111]

## 论文依据

- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 29–31：$S(1,1)$–$S(0,2)$ 两能级哈密顿量、$J(\varepsilon)$ 公式及其大失谐渐近、含核磁场的四态哈密顿量与 $S$–$T_0$ 有效二能级哈密顿量、$S$–$T_+$ 反交叉。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 33–36：自旋阻塞的输运与脉冲栅两种观测方式、读出窗口与三重态弛豫时间约 $70\,\mu$s。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 37–39：交换振荡的脉冲流程与布洛赫球图像、自旋漏斗标定 $J(\varepsilon)$、电荷噪声敏感度 $dJ/d\varepsilon$ 与对称工作点。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 39–41：$S$–$T_+$ LZS 干涉（$P_{LZ}$ 公式与 Hadamard 类比）、动态核自旋极化提供梯度、$T_2^*$ 与 $T_2$ 的代表性数值。
- [[sources/wang-baochuan-2017|王保传 2017]]，PDF pp. 26–29：$S$–$T_0$ 编码的态定义、$E_{ST}\approx 400\,\mu$eV、核场混合下的二能级哈密顿量、交换振荡脉冲序列与自旋–电荷转换读出。
- [[sources/wang-ning-2025|王宁 2025]]，PDF pp. 35–36：Hubbard 极限下的交换相互作用表达式及 $\sqrt{\mathrm{SWAP}}$ 门构造；p. 30：双量子点两电子编码为单态–三重态量子比特的方案列举。
