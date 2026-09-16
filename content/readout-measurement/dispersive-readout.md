---
title: 色散读出
description: 在远离真实能量交换的条件下，用量子态引起的谐振频移或相移进行读出。
aliases:
 - 色散测量
 - 色散耦合读出
 - dispersive readout
 - dispersive shift readout
tags:
 - 读出与测量
 - 电路QED
date: 2026-09-08
source: QAtlas
qatlas_id: qa_01m0qvhbkb4t9maz0pq7t6jmmf
source_updated: 2026-09-02T20:44:03Z
---

<div class="entry-lead">色散读出让探测光子主要"感受"量子系统，而不与它共振交换激发：不同量子态使谐振腔频率略有不同，反射或透射相位于是成为读出指针。</div>

## 物理图像

色散读出（dispersive readout）属于[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]架构中最常用的非破坏性量子态探测方式。它建立在[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]的基础上：当比特跃迁频率 $\omega_q$ 与谐振腔频率 $\omega_r$ 之间的失谐 $|\Delta|=|\omega_q-\omega_r|$ 远大于真空耦合强度 $g$ 时，比特与腔不再交换实光子，但腔的有效频率会被比特态移动——基态下腔频往一方向偏，激发态下往反方向偏，差值为 $2\chi$。只要选一个固定探测频率 $\omega_p$ 落在裸腔响应曲线的斜坡上，两态分别对应不同的相位或幅值，经一次积分就能把两个态分离出来。

色散读出的三个本质特征是：

- **非破坏性**：比特哈密顿量与色散测量算符对易，多次测量给出相同结果——这是[[readout-measurement/single-shot-readout|单发读出]]与反馈调控的基础。
- **电路级耦合**：在半导体量子点中"比特"可以是[[qubit-control/charge-qubit|电荷比特]]、[[qubit-control/single-spin-qubit|单自旋量子比特]]、或经微磁体或自旋轨道作用获得电荷成分的杂化比特；读出指针则是与该比特电偶极耦合的[[circuit-qed/microwave-resonator|微波谐振腔]]。
- **不可避免的反作用**：探测光子既提供信息也是扰动来源——测量诱导退相干（measurement-induced dephasing）、AC Stark 频移、以及经腔辐射的[[readout-measurement/purcell-filter|Purcell 通道]]都会与读出速度、信噪比（SNR）和保真度直接挂钩。

由于这套方法把比特态编码到一段独立可观测的相位或频率信号上，它在 2004 年 Wallraff 等人首次演示[[circuit-qed/circuit-quantum-electrodynamics|cQED]] 架构时就被用作主读出手段，并被沿用至半导体量子点–腔杂化体系）。这套布居测量能力反转过来就是[[readout-measurement/qubit-thermometry|超导比特温度计]]：热平衡下三能级布居比直接编码 60–200 mK 的环境温度。

<!-- FIGURE: 色散读出工作示意：比特 |g⟩、|e⟩ 与失谐 Δ 下的腔频响应曲线，两态对应腔频 ±χ 的双峰结构，标注探测频率 ω_p 选在斜坡处 -->

## 理论模型

### Jaynes–Cummings 哈密顿量与色散极限

色散读出的标准起点是[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings（JC）模型]]。旋转波近似（rotating-wave approximation, RWA）下，单比特–单模腔系统可写为（取 $\hbar=1$）

$$
H_{\mathrm{JC}}=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g\left(a^\dagger\sigma_-+a\sigma_+\right).
$$

这里 $a^\dagger$、$a$ 是腔光子的产生、湮灭算符，$\sigma_z$、$\sigma_\pm$ 是比特泡利算符，$g$ 是单光子耦合强度。JC 模型在[[circuit-qed/jaynes-cummings-model|JC 模型]]词条中已给出完整推导，这里只关心 $|\Delta|\gg g$ 的色散极限。当 $|\Delta|>10g$ 时，比特–腔通过虚光子交换能量；以 $g/\Delta$ 为小量对 JC 哈密顿量做 Schrieffer–Wolff 二阶微扰，等效色散哈密顿量为

$$
H_{\mathrm{disp}}\approx\left(\omega_r+\frac{g^2}{\Delta}\sigma_z\right)a^\dagger a+\frac{1}{2}\left(\omega_q+\frac{g^2}{\Delta}\right)\sigma_z.
$$

第一项告诉我们腔的有效频率依比特态平移

$$
\tilde\omega_{r,\pm}=\omega_r\pm\frac{g^2}{\Delta}\equiv\omega_r\pm\chi
$$

其中

$$
\chi=\frac{g^2}{\Delta}
$$

是色散频移（dispersive shift）。第二项则是比特侧的两项修正：与光子数 $n=a^\dagger a$ 成正比的 $2\chi n$ 称为交流斯塔克频移（ac Stark shift），可用来标定腔内光子数；与光子数无关的 $\chi$ 来自真空涨落，称为兰姆频移（Lamb shift）。 在对[[superconducting-qubits/transmon-qubit|transmon]]做色散读出建模时进一步用电路的非谐性 $\alpha$ 替换 $\Delta$，得

$$
\chi=\frac{g^2\alpha}{\Delta(\Delta+\alpha)}\simeq\frac{g^2\alpha}{\Delta^2}
$$

并指出 $\chi$ 与 $\alpha$ 同号。在半导体量子点体系中，全局耦合 $g_0=\frac{1}{2}\beta\omega_r\sqrt{Z_r/\pi\hbar}$ 正比于谐振腔特征阻抗 $Z_r$ 的平方根——这是 等工作中采用[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]路线的理论依据。

### 量子点中的耦合机制

半导体量子点的电荷自由度直接与腔电场耦合，因此电荷–光子耦合 $g_c$ 通常远大于自旋–光子耦合 $g_s$。在双量子点电荷比特中，比特本征态由失谐 $\varepsilon$ 与隧穿耦合 $t_c$ 共同决定，等效比特–光子耦合为 $g_{\mathrm{eff}}=g_0\sin\theta=2t_cg_0/(\hbar\omega_q)$）。混合角 $\theta=\arctan(2t_c/\varepsilon)$ 决定了电荷比特含有多少"真实电荷"成分，因此通过调节双量子点失谐可以连续地打开或关断色散耦合。

对于自旋比特，因为直接电偶极矩几乎为零，自旋–光子耦合必须经由微磁体梯度或自旋轨道机制在自旋态中引入少量电荷成分才能实现——典型实验测得 $2g_s/2\pi\sim 43.5$ MHz，远小于 $g_c/2\pi\sim 175$ MHz 的电荷比特值。

### 量子电容与等效电路描述

把量子点看作并联 $RC$ 电路是直观理解色散响应的另一途径。在 的反射式谐振腔实验中，量子点等效为一个并联 $RC$ 电路，复导纳（complex admittance）为

$$
Y(\omega)=\frac{1}{R_{\mathrm{eff}}}+j\omega C_{\mathrm{eff}}
$$

其中

$$
C_{\mathrm{eff}}=\frac{e^2\alpha^2}{\hbar\omega}\,\frac{\Gamma}{(\omega-\Omega)^2+\Gamma^2/4},\qquad
R_{\mathrm{eff}}=\frac{(\omega-\Omega)^2+\Gamma^2/4}{\omega\Gamma e^2\alpha^2/\hbar}
$$

$\Omega$ 是量子点能级跃迁频率、$\Gamma$ 是电子隧穿率（隧穿线宽）、$\alpha$ 是杠杆臂。当隧穿率 $\Gamma$ 远小于失谐 $|{\omega-\Omega}|$ 时，$R_{\mathrm{eff}}\to\infty$、$C_{\mathrm{eff}}\to 0$，即量子点对外呈纯虚电容响应，对应隧穿电容（tunneling capacitance）/量子电容（quantum capacitance）效应：量子点的电荷涨落引入额外的电容性电纳，使谐振腔频谱发生相位偏转。把这套等效电路挂到反射式谐振腔上即可通过测 $S_{11}$ 复响应直接反推量子点的 $R_{\mathrm{eff}}$、$C_{\mathrm{eff}}$，进而估计隧穿率——在 的石墨烯量子点器件中实测约 $1.6^\circ$ 相移、$4.2\times10^{-4}\ \mathrm{aF}$ 等效电容与 $37\ \mathrm{MHz}$ 隧穿率。这种"反射腔测复导纳"与色散读出本质上是同一物理图像的不同表述：量子点的电学状态改变腔的复阻抗，复阻抗的改变落到 $S_{11}$（或 $S_{21}$）上即可读取。

### fluxonium 的通量脉冲辅助读出

上述 $\chi$–$\kappa$–$\eta$ 联合优化假定比特偏置点固定；fluxonium 提供了第三个自由度——用磁通脉冲把比特临时调到色散频移更大的偏置点完成读出，再脉冲回甜点保真。以典型 fluxonium 参数（$E_J/2\pi=4.75$ GHz、$E_C/2\pi=1.25$ GHz、$E_L/2\pi=1.5$ GHz）为例：甜点 $\Phi_{ext}/\Phi_0=0.5$ 处 $\chi/2\pi\approx0.53$ MHz、$\kappa/2\pi=5$ MHz，即便完美测量效率也要约 155 ns 才达到 SNR=1；而把比特脉冲调到 $\Phi_{ext}/\Phi_0\approx0.64$（此处 $\Delta_{20}$ 趋零使 $|\chi/2\pi|\approx8$ MHz）后，同样的 155 ns 内 SNR 达 9.5（100% 效率），25% 效率下也仍有甜点完美效率约 5 倍的 SNR——见下图。

![[assets/figures/dispersive-readout/1113f17c6491b2a0c0426b2f4f0733a865afc5fe70ecec62edce8d06dffd12e3.jpg]]

*fluxonium 与读出腔的等效电路：约瑟夫森结（$E_J$）、电容（$E_C$）、电感（$E_L$）并联成环，经耦合强度 $g$ 挂到频率 $\omega_r$ 的读出谐振腔上；外磁通 $\Phi_{ext}$ 穿环偏置，是通量脉冲的作用对象。图源：Stefanski & Andersen (2024)，Fig. 1。*

![[assets/figures/dispersive-readout/89fa9ee4baeb5f3c1bc2fd40ea1c579c34e504847ef7a6e2220efb92d699691d.jpg]]

*fluxonium 跃迁频率（a）、色散频移（b）与各跃迁对腔频的失谐（c–h）随 $E_J/2\pi$（横轴，4.5–5.5 GHz）与外磁通的变化；(b) 中色散频移在 $-5$～$+5$ MHz 间摆动，靠近半磁通量子点的两条暗线来自 $|3\rangle\leftrightarrow|1\rangle$ 跃迁与腔共振。读出点必须避开这些近共振区，否则比特与腔发生相干交换而非色散移动。图源：Stefanski & Andersen (2024)，Fig. 2。*

![[assets/figures/dispersive-readout/fc0fc427e98bbd1b8506e7cf4f90075bb892319c444e0962b8e23192917c1a8f.jpg]]

*通量脉冲辅助读出的噪声鲁棒性：(a) 在 25% 测量效率下叠加准静态磁通噪声 $\delta=\xi x\Phi_0$（$\xi$ 为噪声尺度、$x$ 为标准高斯采样），$\xi=10^{-2}$ 的极端噪声下 155 ns 的 SNR 仍接近甜点完美效率读出的 3 倍；(b) 同等噪声下甜点处 DRAG X 门误差大一个量级以上，说明读出方案不是磁通噪声的瓶颈。图源：Stefanski & Andersen (2024)，Fig. 5(a)。*

代价是两类新的误差通道。其一，读出点处比特–腔失谐减小，Purcell 弛豫加快：甜点处 $T_{1,\mathrm{P}}\approx 11$ ms，脉冲点降到约 560 µs，积分时间超过约 150 ns（100% 效率）后读出误差转为 Purcell 主导——这正是上文 Purcell 极限约束 $\kappa|\chi|\leqslant\pi\alpha/T_1$ 的具体体现，可用[[readout-measurement/purcell-filter|Purcell 滤波器]]进一步抑制。其二，脉冲上升沿扫过 $|3\rangle\to|1\rangle$ 避免交叉会引入非 QND 分量：50 ns 上升沿的非 QND 度约 $4.8\times10^{-3}$，25 ns 上升沿降到 $6.5\times10^{-4}$——读出速度与 QND 性之间需要按上文 QND 条件权衡。综合 Purcell、介质损耗、热激发与信号分离四项，200 ns 积分时通量脉冲方案的总误差 $10^{-3}$ 量级仍显著优于甜点静态读出的约 0.15（SNR 主导）。

### 腔响应的散射矩阵

在实验上观察到的不是哈密顿量本身，而是谐振腔的散射参数。在输入–输出形式下，透射式腔的透射系数为）

$$
S_{21}(\omega)=\frac{-i\sqrt{\kappa_1\kappa_2}}{\omega_r-\omega+g_c\chi_c-i\kappa/2}
$$

其中比特响应通过磁化率 $\chi_c=g_c/(-\Delta+i\gamma)$ 进入，$\gamma=\gamma_1/2+\gamma_\phi$ 汇总弛豫与纯退相位。整理后腔频与线宽获得两项修正：

$$
\omega_r'=\omega_r-\frac{g_c^2\Delta}{\Delta^2+\gamma^2},\qquad
\kappa'=\kappa+\frac{2g_c^2\gamma}{\Delta^2+\gamma^2}.
$$

色散区 $|\Delta|\gg g_c$ 实部主导，$\Delta\omega_r\approx g_c^2/\Delta$；近共振区虚部主导，比特为腔光子打开额外耗散通道，腔线展宽、可见度下降。反射式腔给出的复反射系数 $|\Gamma|e^{i\phi}$ 同时含有相位 $\phi=\arg\Gamma$ 与幅度 $|\Gamma|$，两路经 IQ 混频解调后分别得到同相 $I$ 与正交 $Q$ 分量，构成二维 IQ 平面上的态分离图。

### 强色散区与量子非破坏条件

要可靠地把两个比特态区分开，需要色散频移大于系统的耗散宽度，即

$$
\chi>\kappa,\ \gamma,\qquad \mathrm{（strong\ dispersive\ regime）}.
$$

同时测量算符 $\hat M$（腔透射或反射的某一相位分量）与比特哈密顿量 $\hat H_q$ 必须对易

$$
[\hat M,\hat H_q]=0
$$

保证多次测量不破坏比特态、给出相同结果。这是量子非破坏测量（quantum nondemolition, QND）的判定条件， 明确写出比特泡利算符 $\hat\sigma_z$ 与系统哈密顿量（式 2.21）满足对易关系，所以色散读出方案天然满足 QND。代价是该方案不可避免地把比特态与一个外部自由度（腔内光子数）纠缠，理论上限制了无反作用读出的极限灵敏度。

<!-- FIGURE: 透射式腔在色散区的 |S21| 与相位响应：基态与激发态分别对应实线与虚线，标注探测频率 ω_p 选在相位斜率最大点 -->

## 实验实现与特征

### 时间平均读出与单发读出

色散读出按数据采集方式分两类。

**时间平均（time-averaged）读出**：探测脉冲持续时间远长于比特相干时间 $T_2^*$，测得的是比特态时间平均的相位响应 $\Delta\phi=\langle\phi\rangle_t$。优点是不必等待腔达到稳态、对 $T_1$ 限制宽松，缺点是读不出瞬时态信息。 利用这种读出观察电荷比特的 Rabi 振荡与 Ramsey 干涉，通过解调相位响应直接拟合出 $T_2^*$ 与拉比频率。

**单发（real-time, single-shot）读出**：探测脉冲短于 $T_1$，在态弛豫之前就完成判决，输出一次实验的 0/1 结果。 在六比特超导芯片上实现了 $300$–$500\ \mathrm{ns}$ 积分、最高保真度 $98.14\%$。在半导体量子点体系中，单发读出常与[[readout-measurement/single-shot-readout|单发读出]]配合完成自旋态读出——例如 Elzerman 2004 年的开创性 GaAs 双量子点实验。

### 参数优化与信噪比

色散读出的核心权衡是 $\chi$、$\kappa$ 与积分时间 $t_m$ 的联合优化。给定比特退相干 $\gamma$ 与探测器量子效率 $\eta$，单位时间内获得的信号能量 $\propto \chi^2/\kappa$，噪声能量 $\propto 1/(\eta\,t_m)$，信噪比与读出错误率的关系为

$$
\mathrm{SNR}=\frac{8\chi^2}{\kappa}\frac{\eta t_m}{1}
$$

$$
E_{\mathrm{sep}}\approx\frac{1}{2}\mathrm{erfc}\!\left(\frac{\mathrm{SNR}}{2\sqrt{2}}\right).
$$

固定 $t_m$ 时 SNR 在 $(\chi,\kappa)$ 平面上有封闭的等值曲线；减小 $\kappa$ 同时会加长腔响应时间 $\tau_r=2/\kappa$，过小的 $\kappa$ 反而拖累读出速度。 把这条曲线推广为 $\kappa|\chi|\leqslant \pi|\alpha|/T_1$ 的 Purcell 极限，并指出 Purcell 滤波器和量子极限参量放大器可以同时压低噪声光子数与提高量子效率，把有效参数空间推到极限之外。

量子效率 $\eta=\eta_{\mathrm{col}}\eta_{\mathrm{amp}}$ 又可分解为信号收集效率与放大器效率两部分。 在仿真中明确：$\eta_{\mathrm{col}}$ 受限于 Purcell 滤波器与比特端口之间的阻抗匹配，而 $\eta_{\mathrm{amp}}$ 主要取决于首级放大器是否工作在量子极限。把 $\eta$ 从 $0.4$ 提高到 $0.5$ 已经能让整个参数空间从"完全无法达到阈值 SNR"切换到"小区域可读"，说明放大器改造是高保真读出的关键。

**通量脉冲调谐失谐的动态增强**（Swiadek et al. 2024）把通量脉冲辅助读出推广到 transmon：空闲时停在磁通甜点，读出瞬间用高斯滤波矩形脉冲把比特调近读出腔（$\Delta_{qr}/2\pi$ 从 −2.7 GHz 收到 −1.3 GHz）。增强来自两个机制：色散移 $\chi$ 增大 + Lamb 移位后的读出腔与 Purcell 滤波器更接近共振（**有效线宽**变大）。实测 **100 ns 内两能级读出错误 $2.5\times10^{-3}$**（对应 SNR 48.5）；系统标定给出 $\mathrm{SNR}\geq30$ 即可达 $\varepsilon_a\leq10^{-2}$（$\tau\geq100$ ns、全部失谐范围），而 SNR 超过约 50 后判给错误不再随 SNR 改善——进入弛豫/退相干主导区。

![[assets/figures/dispersive-readout/c46cb9435d7d53a204f170db06bdc51f2d285e8481bf12b1847afdea215e72c4.jpg]]

*通量脉冲增强色散读出的原理：比特-腔-Purcell 滤波器系统里，读出瞬间用通量脉冲减小 $\omega_q$ 与 $\omega_r$ 的失谐——$\chi$ 增大（更大频移差）同时有效线宽 $\kappa$ 变大（Lamb 移位后腔与滤波器更共振），SNR 随积分时间的上升斜率随之变陡。图源：Swiadek et al. (2024)，Fig. 1。*

![[assets/figures/dispersive-readout/d4b5142828251790a735bf6a92159ca0b5e4885f95eb2c75ee23e83e37402d52.jpg]]

*SNR 与判给错误的定量关系：各失谐/积分时间组合下实测 SNR 对平均判给错误——SNR≥30 给 $\varepsilon_a\leq10^{-2}$，最佳点 $2.5\times10^{-3}$ 对应 SNR 48.5；SNR 超过约 50 后错误率饱和（弛豫主导）。图源：Swiadek et al. (2024)，Fig. 4。*

**捕获-色散-释放协议**（Sete et al. 2013）用可调耦合器重构测量时序：**捕获**（微波脉冲入腔后关闭耦合器，腔与传输线断开）→ **色散**（绝热调谐比特频率深入非线性色散区，场积累比特态依赖的相位）→ **释放**（打开耦合器放出场做零差检测）。读出期间腔完全隔离，**自动消除 Purcell 问题**（不需要滤波器）；强非线性色散区中 JC 非线性还把腔场压缩到**低于标准量子限**的正交压缩态，测量误差随之显著下降。

![[assets/figures/dispersive-readout/c64aadaa03f41a72847190e1b9a9ffcf3f2e5e49b0bc67e1a66e60c7dba4e141.jpg]]

*捕获-色散-释放读出：RF 脉冲经小电容 $C_{in}$ 入腔，可调耦合器控制腔与输出线的通断；比特频率 $\omega_q(t)$ 绝热调谐（红线），"捕获/色散/释放"三阶段在时域分隔——色散阶段的失谐 $\Delta$ 决定相位积累，释放后的场经放大与零差检测读出。图源：Sete et al. (2013)，Fig. 1。*

![[assets/figures/dispersive-readout/8c3f42ccff9cea639c1f03d3b481387da5cf5e9bb6332f2dca60faab4cea67ac.jpg]]

*协议的相位空间轨迹：腔场在捕获-色散-释放过程中沿比特态依赖的轨道演化——JC 非线性使场压缩（椭圆短轴低于标准量子限），测量误差随之压缩。图源：Sete et al. (2013)，Fig. 2。*


**单协议全参数表征**：QEC 系统的迭代设计-测试循环需要准确的模型与表征工具——单一协议（少标定前提）一次测出读出链全部关键参数：色散移 $chi$、读出腔与滤波器线宽、馈线耦合率、测量诱导退相干率。此前这些参数需要多个独立实验分别标定，单协议方案把它们并入一次扫描，直接喂给设计迭代。

![[assets/figures/dispersive-readout/d6e3a70b39d914ad2f41137f3d7518eeb8a2e21dba22b8756c9d4c1593b6484c.jpg]]

*单协议表征方案：一次测量同时提取色散移、线宽、耦合与退相干——读出链参数的"一站式"标定为 QEC 设计迭代服务。图源：arXiv:2402.00413，Fig. 1。*

![[assets/figures/dispersive-readout/207c758faecd0f78daf05844ead87d73b4eade4d084db2fe241216084026cd24.jpg]]

*表征结果与模型吻合：提取的参数直接预测读出性能——设计与实测的闭环。图源：arXiv:2402.00413，Fig. 2。*

**快速高保真的参数联合优化**：端到端设计（比特-腔-滤波器-放大链参数联合）把单发色散读出推到速度-保真度前沿——每个环节不再单独优化，整体 SNR 预算重新分配后，数十纳秒量级的高保真单发成为常规操作。

![[assets/figures/dispersive-readout/83a07584db6a29e78694bc3649bf76f1698d7a789fef132d60173edfda14c7fd.jpg]]

*联合参数设计下的快速读出性能：速度-保真度的 Pareto 前沿——端到端优化把工作点推到此前不可达的区域。图源：arXiv:1701.06933，Fig. 2。*

![[assets/figures/dispersive-readout/d9bdc64666afcd8f4830bdfec502db72a6ca97f3aaf6b449fd07167c17b97a23.jpg]]

*高保真单发的实测直方图：两态判别分布的分离与残余误差分解。图源：arXiv:1701.06933。*

### 频分复用与多比特扩展

每个比特配一个独立谐振腔、把多个腔挂到同一根总线上、用不同载波频率分别解调，是 cQED 多比特读出的标准做法。超导侧的代表性方案（Heinsoo et al. 2018）在**单根 1.2 GHz 宽的读出通道**里复用五个比特：80 ns 读出脉冲（谐振器占用 <250 ns）、五比特平均正确判给概率高、被同时测量的非目标比特退相干在 1% 以内——每谐振器配独立 Purcell 滤波器抑制离共振驱动的串扰（串扰由非目标比特的退相干定量表征）。多阶带通路线则是"单滤波器服务整条总线"：按低通原型综合的 $N$ 阶带通 Purcell 滤波器通带更宽、阻带隔离随阶数指数加深，一个 4 阶传输线实现即可让 4 只比特读出腔分接不同级复用（见[[readout-measurement/purcell-filter|Purcell 滤波器]]的多阶综合设计一节）。在半导体量子点体系中， 用高阻抗 SQUID 阵列腔把五个双量子点集成到同一腔上，观测到集体色散响应——线性近似下相位响应 $\phi_{\mathrm{sim}}\propto nP$ 与参与耦合的比特数 $n$ 成正比。当多个比特频率接近同一腔模时，会出现局域破坏性干涉（$g_1\chi_1$ 与 $g_2\chi_2$ 虚部反号），此时总响应反而被压制，需要错开比特频率来恢复可读性。

![[assets/figures/dispersive-readout/36f98588fb131b299ba58521c1724790e230b74aa622917c1ab53cb7425fbdfb.jpg]]

*五比特频分复用读出的透射谱：各读出谐振器的 $|S_{\mathrm{out},i}(\nu_d)|$ 随驱动频率的分布——五个腔挤在 1.2 GHz 带宽内，频分复用单通道读出；每个腔配独立 Purcell 滤波器（见[[readout-measurement/purcell-filter|Purcell 滤波器]]词条）。图源：Heinsoo et al. (2018)，Fig. 3(a)。*

### 实验判据

色散读出工作良好的实验判据包括：

- 探测 $\chi$ 的最直接方式是扫探测微波频率穿过裸腔谐振曲线，比特态切换时整条曲线左右平移 $\pm\chi$。当 $\chi>\kappa/2$ 时，两条响应曲线已可肉眼分离；$\chi>\kappa$ 时进入强色散区；
- 测 ac Stark 频移：固定探测微波频率，改变驱动脉冲长度 $t_d$，比特谱线随 $2\chi n$ 移动，$n$ 即腔内平均光子数；
- 通过测 Lamb 频移：腔内无驱动光子时比特频率仍被真空涨落推 $\chi$，与 $g^2/\Delta$ 自洽。

## 参数与量级

| 量 | 典型值 | 说明 / 来源 |
| --- | --- | --- |
| 比特–腔失谐 $|\Delta|/2\pi$ | 几 GHz（远大于 $g$） | 实用判据 $|\Delta|>10g$ |
| 谐振腔频率 $\omega_r/2\pi$ | $4.993$、$6.48$、$7.332$ GHz | ； |
| 比特频率 $\omega_q/2\pi$ | 2–20 GHz | 由器件与编码决定 |
| 电荷–光子耦合 $g_c/2\pi$ | 175 MHz 量级；$g_c/\omega_r\sim 0.11$ 进入超强耦合 | 双量子点电荷比特 |
| 自旋–光子耦合 $g_s/2\pi$ | $21.75$ MHz（$2g_s/2\pi=43.5$ MHz） | Si/SiGe 单自旋比特 |
| 腔线宽 $\kappa/2\pi$ | $2$–$8$ MHz；高阻抗腔可低至 $\sim 2.2$ MHz | 取决于耦合 $Q$ |
| 色散频移 $\chi/2\pi$ | $\sim 1$–$10$ MHz；与 $g^2/\Delta$ 同量级 | transmon 典型 $\chi/2\pi\approx 1$ MHz；半导体电荷比特可至 $\sim 7$ MHz |
| 比特退相干 $\gamma$ | 自旋 $2$–$5$ MHz；电荷 $50$–$100$ MHz | 决定强色散区判据 |
| 单发读出 SNR | $\geq 5.7$ 即可达 $99.86\%$ 保真度 | 140 ns 积分 |
| 六比特单发保真度 | 最高 $98.14\%$（积分 $300$–$500$ ns、120） | 含 Purcell 滤波与 JPA |
| 量子效率 $\eta$ | transmon 仿真 $\eta\geq 0.5$ 才达阈值 SNR | 收集效率与放大效率的乘积 |

**测量诱导跃迁的全表征**：提高读出功率加速测量，但读出光子的**非弹性散射**会把比特推到非计算态——$|0angle	o|2angle$、$|1angle	o|3angle$ 跃迁率随功率**线性**增长（与无参数理论定量吻合），而 $Gamma_{0	o1}$、$Gamma_{1	o0}$、$Gamma_{1	o2}$ 近似功率无关（由平衡环境的热跃迁决定，符合细致平衡 $Gamma_{1	o0}=e^{hbaromega_q/k_BT}Gamma_{0	o1}$，$Tapprox16$ mK）。这组数据把"QND 破坏的微观机制"定量化：读出功率的提高以非弹性散射跃迁为代价，最高相关功率下 $|1angle	o|4angle^+$ 跃迁仍被强抑制。

![[assets/figures/dispersive-readout/6a0e513a155cf7e3915e6ecd30efa2002fa45cf20447dd41641b6fff657e2292.jpg]]

*测量诱导跃迁的实验：磁通可调 transmon + 四分之一波长读出腔——单发直方图可分辨 $|0angle$ 到 $|4angle$ 全部能级，跃迁率由变时长脉冲序列提取。图源：Connolly et al. (2025)，Fig. 2(a-d)。*

![[assets/figures/dispersive-readout/160da93caae4e8073914f628547d6fb44d66e5e6948f2f0ccbe42e9b4735d60e.jpg]]

*跃迁率随功率的完整表征：$|0angle	o|2angle$ 与 $|1angle	o|3angle$ 线性增长（非弹性光子散射，实线为无参数理论）——读出功率的 QND 代价被定量标定。图源：Connolly et al. (2025)，Fig. 2(e)。*

## 不是完全无回作用

色散读出虽然比电荷直接输运温和得多，但仍不可避免地引入三类反作用：

- **测量诱导退相干（measurement-induced dephasing）**：探测光子反复被比特散射，关联到比特 $\sigma_z$，使比特相位被随机化。退相干率近似为 $\Gamma_\phi\simeq \kappa\chi^2/(g^2+\chi^2)$——增大 $\chi$ 既能改善读出，也加速退相干；
- **AC Stark 频移**：腔内光子数 $n$ 通过 $2\chi n$ 推比特频率，使比特共振条件被读出脉冲本身移动。这在标定 $\chi$ 时有用，但在长读出门操作时必须把 $n$ 锁稳；
- **Purcell 弛豫**：比特激发态混入 $(g/\Delta)$ 比例的"单光子 + 比特基态"成分，这部分成分以 $\kappa$ 速率漏出腔外，等效于比特以 $\gamma^{\mathrm{Purcell}}\simeq\kappa_r g^2/\Delta^2$ 速率弛豫。对 transmon，这一约束可写为 $T_1^{\mathrm{Purcell}}\simeq 2\pi\alpha/(\kappa\chi)$，要求 $\kappa|\chi|\leqslant \pi\alpha/T_1$。

因此读出速度、SNR 与反作用必须联合优化。最直接的修正是插入[[readout-measurement/purcell-filter|Purcell 滤波器]]在比特频段抑制环境阻抗，在读出频段保持通畅，使上述 Purcell 极限被有效解除）。在低噪声侧，靠近量子极限的[[readout-measurement/parametric-amplifier|参量放大器]]（如 JPA、TWPA）进一步把放大器贡献的噪声光子数压到 1 以下；首级放大器的动态范围同样重要——多比特频分复用读出时，信号总功率受首级 1 dB 压缩点约束，高动态范围的[[readout-measurement/kinetic-inductance-twpa|动力学电感行波参量放大器]]（压缩点 −58 dBm、附加噪声 0.5–1.5 量子、可片上集成全部射频元件）是候选方案之一。

## 读出脉冲的最优控制（Zhou 2024）

联合优化的另一个自由度是**读出脉冲的形状**。把耗散 LC 腔的 Langevin 方程（等价于主方程下相干态幅度 $\alpha(t)$ 的演化，耗散率 $\kappa$）写成线性控制问题——状态 $\alpha(t)$、控制场 $\varepsilon(t)$——**Pontryagin 极大原理**给出能量-时间双优的解析脉冲：最优控制 $\varepsilon=-\hat B^Tp$，伴随变量 $p$ 由边界条件（初态 $\alpha(0)=0$、末态 $|\alpha(t_f)\rangle=10e^{i\vartheta}$，$\vartheta=\pi/2+\tan^{-1}(\kappa/2\omega_r)$）唯一确定。

![[assets/figures/dispersive-readout/zhou2024-fig2a-energy-cost.jpg]]
*能量代价随脉冲时长 t_f 的变化（α_f=10、κ⁻¹≈16 µs）：优化脉冲（PMP）在绝热极限饱和为常数 4κ|α_f|²，而 Hahn 正弦脉冲 ε_h=Ω₀sin²(πt/2t_f) 与其 counter-diabatic（CD）辅助都按 κ²t_f 随时长线性增长；短脉冲区（t_f<10 µs）两者都指数上升，但优化脉冲始终更低——CD 比绝热基准节能、仍不敌能量最优解。图源：Zhou et al. (2024), Fig. 2。*

三个层次的对比结论：

1. **能量**：$J_E^\mathrm{opt}\to4\kappa|\alpha(t_f)|^2$（常数），Hahn 与 CD 均为 $\propto\kappa^2 t_f$——耗散越强、脉冲越长，最优脉冲的优势越大。
2. **中间光子数**：两类脉冲到达同一末态 $\langle N\rangle=|\alpha_f|^2$，但优化脉冲**全程保持更低中间光子数**——对非谐性强、易电离的 transmon（高功率读出的已知瓶颈）更安全。
3. **量子速度极限**：Mandelstam–Tamm 界 $\int_0^{t_f}\Delta H\,dt\geq S_0$（Fubini–Study 测地距离）给出最小时间随最大驱动幅度 $1/\varepsilon_\max$ 的标度；能量最优、时间最优与 Hahn+CD 三种方案的量子效率 $\eta$ 排序随之量化。

用于色散读出（腔与比特色散耦合）时，优化脉冲在**低、中、高临界光子数**三个区间都给出高 SNR；共振腔或比特频率失配下的稳健性也系统表征过：

![[assets/figures/dispersive-readout/zhou2024-fig5a-snr-mismatch.jpg]]
*SNR 对共振腔频率失配的依赖（不同临界光子数 n̄_crit）：最优脉冲在失配窗口内保持高 SNR；在大临界光子数区间，色散读出加最优脉冲的 SNR 已可媲美纵向耦合读出方案（后者见[[circuit-qed/longitudinal-coupling|纵向耦合]]词条）——两条读出路线在性能上汇合。图源：Zhou et al. (2024), Fig. 5。*

## 与其他概念的关系

- [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]是色散读出的哈密顿量基础：把比特–腔耦合按 $g/\Delta$ 展开，得到色散频移 $\chi=g^2/\Delta$、AC Stark 频移 $2\chi n$ 与 Lamb 频移 $\chi$。[[circuit-qed/strong-coupling|强耦合]]判据 $g>\kappa,\gamma$ 与强色散判据 $\chi>\kappa,\gamma$ 是两个层次的可观测条件。
- [[circuit-qed/microwave-resonator|微波谐振腔]]是测量指针：透射式腔测 $S_{21}$，反射式腔测 $S_{11}$；[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]把 $g$ 推到 $\sim 100$ MHz 量级，是半导体量子点–腔杂化的关键使能技术。
- 半导体量子点中的"比特"可以是[[qubit-control/charge-qubit|电荷比特]]（强耦合、短 $T_1$）、[[qubit-control/single-spin-qubit|单自旋量子比特]]（长 $T_1$、弱耦合）或[[qubit-control/hybrid-qubit|杂化比特]]；色散读出既适用于电荷比特也通过自旋–电荷转换适用于自旋比特。
- 色散频移 $\chi$ 与腔线宽 $\kappa$ 在读出速度和 Purcell 弛豫之间形成基本矛盾——[[readout-measurement/purcell-filter|Purcell 滤波器]]通过引入频率选择性阻抗零点解决这一矛盾。
- IQ 解调后的 I/Q 平面分类（阈值、模板匹配、神经网络）属于[[readout-measurement/threshold-independent-readout|阈值无关读出]]范畴；[[readout-measurement/readout-crosstalk|读出串扰]]是频分复用多比特系统中色散读出的重要误差来源。
- 量子电容与隧穿电容描述的复导纳效应把色散读出与[[readout-measurement/gate-based-sensing|栅极射频传感]]联系起来：两者都是"量子点状态 → 阻抗 → 反射相位"链路上的不同端点。
- 在[[scaling-automation/quantum-dot-array|量子点阵列]]扩展中，色散读出通过[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]同时承担读出与比特间相互作用两种角色。
- [[superconducting-qubits/fluxonium-qubit|Fluxonium 量子比特]]没有严格选择定则，色散频移对各能级求和后可远超 transmon 的 $g^2\alpha/\Delta(\Delta+\alpha)$；其通量脉冲辅助读出（见上文"fluxonium 的通量脉冲辅助读出"）把 $\chi$–$\kappa$ 优化扩展到磁通偏置这一额外维度。
- 色散读出不只是读比特态——把测量序列做成宇称选择（$\pi$ 脉冲条件在奇宇称上），它就成了实时宇称测量计，能逐次追踪[[circuit-qed/charge-parity-fluctuation|电荷宇称涨落与准粒子隧穿]]：6 µs 一次的单发读出配合反馈复位即可记录每次隧穿事件。
- 腔的约瑟夫森非线性在强驱动下带来分岔与"亮态"跳变——色散读出的这两条非线性扩展是[[readout-measurement/single-shot-readout|单发读出]]在超导比特侧的实验基础（见该词条"cQED 中的腔分岔单发读出"与"JC 非线性亮态跳变读出"）。


## 参考文献

- 色散读出与自旋–光子接口的实验基础：[[references/samkharadze-2018|Samkharadze et al., Science 359, 1123 (2018)]]。
- Zhou, M., Cárdenas-López, F. A., Sugny, D., Chen, X. Optimal Control for Open Quantum System in Circuit Quantum Electrodynamics (2024). arXiv:2412.20149（QAtlas 缓存：2412.20149）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
