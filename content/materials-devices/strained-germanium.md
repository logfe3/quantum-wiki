---
title: 应变锗空穴平台
description: 在应变锗量子阱中形成高迁移率二维空穴气、支持强自旋轨道全电操控的 Ge/SiGe 异质结平台。
aliases:
  - 平面锗量子点
  - 应变锗异质结
  - 平面锗空穴平台
  - strained germanium
  - Ge/SiGe heterostructure
tags:
  - 材料与器件
  - 锗
  - 空穴
date: 2026-09-08
---

<div class="entry-lead">应变锗（strained Ge）空穴平台以 Ge/SiGe 异质结承载高迁移率二维空穴气（2DHG），把较大的量子点尺寸、较强的自旋轨道耦合和工程化的门控加工路线结合在一起，是全电、高速空穴自旋比特的核心材料路线。</div>

## 物理图像与异质结构

应变锗空穴平台的核心是一条上下逐层外延生长的 Ge/SiGe 异质结，由下至上依次是：8 英寸 [[fundamentals/semiconductor-quantum-dot|硅衬底]]、应变弛豫的 SiGe 虚衬底、应变锗量子阱（典型厚度约 16 nm）与顶部 SiGe 势垒层（典型厚度 30–47 nm）。在量子阱与最上方介质之间通常还有一层自然形成的 SiO<sub>x</sub> 界面氧化层（约 1.5 nm）以及后续用 ALD 沉积的 Al<sub>2</sub>O<sub>3</sub> 栅介质层（典型 30 nm）。器件最顶层则用电子束光刻制备铝多层栅极，依靠负栅压在应变锗量子阱中诱导二维空穴气并用电极势阱将空穴进一步限制成单点或双点。

<!-- FIGURE: 应变锗 Ge/SiGe 异质结剖面示意，自下而上：Si 衬底 → SiGe 虚衬底 → 应变锗量子阱（~16 nm）→ SiGe 势垒层（~32–47 nm）→ SiOx 界面层 → Al<sub>2</sub>O<sub>3</sub> 栅氧层 → Al 多层栅极 -->

锗的晶格常数与 Si 相差约 4.2%，Ge 层外延在弛豫的 SiGe 虚衬底上时受到双轴压缩应变。该应变把锗的价带顶附近原本简并的 $j=3/2$ 四重态劈裂为两个能量间隔约数十 meV 的子带——重空穴（HH, $j_z=\pm 3/2$）和轻空穴（LH, $j_z=\pm 1/2$）。结合量子阱沿生长方向（$z$ 方向）的限域，最顶端被占据的子带是 HH 主导，但因 HH 与 LH 在动量空间中会发生强烈的混合（k·p 混合），面内 HH 态的等效朗德 $g$ 因子、自旋轨道场强度乃至有效质量都成为外电场、磁场方向的强函数，这正是应变锗平台"强自旋轨道耦合 + 可调 $g$ 因子"的微观来源。

栅极通过柱塞电极（plunger, P）与势垒电极（barrier, B）调节量子点内部的化学势与左右点之间的隧穿耦合，标准的双量子点结构由两套柱塞 + 三套势垒（B1, M, B2）组成，相邻栅极之间的 Al 原位氧化层（约 4 nm）实现电学隔离。

## 理论模型

### 应变修正的 Luttinger–Kohn 哈密顿量

应变锗中价带的微观描述建立在 $j=3/2$ 多带 k·p 模型上，原始的 Luttinger–Kohn 哈密顿量在立方对称下写成

$$
H_{\mathrm{LK}} = -\frac{\hbar^2}{2m_0}\!\left[(\gamma_1+\tfrac{5}{2}\gamma_s)k^2-2\gamma_s(\boldsymbol{k}\cdot\boldsymbol{J})^2\right],
$$

其中 $\gamma_1,\gamma_s$ 是 Luttinger 参数（Ge 中 $\gamma_1\approx 13,\ \gamma_s\approx 5$），$\boldsymbol{J}$ 是 $j=3/2$ 的自旋算符，$k^2=k_x^2+k_y^2+k_z^2$。求解该式给出两组本征解：重空穴和轻空穴，对应的有效质量分别是

$$
m_{\mathrm{HH}}=\frac{m_0}{\gamma_1-2\gamma_s},\qquad
m_{\mathrm{LH}}=\frac{m_0}{\gamma_1+2\gamma_s}.
$$

在无应变的体锗中 $m_{\mathrm{HH}}$ 比 $m_{\mathrm{LH}}$ 重约一个量级。但应变锗量子阱在垂直方向有强限域、面内有压缩应变，HH 与 LH 沿生长方向的能量差将拉开，最终占满顶层子带的 HH 在面内（即 $k_x,k_y$ 平面）的等效质量修正为

$$
m_{\mathrm{HH}}^{\parallel}=\frac{m_0}{\gamma_1+\gamma_s},\qquad
m_{\mathrm{LH}}^{\parallel}=\frac{m_0}{\gamma_1-\gamma_s},
$$

即"轻重空穴的角色互换"——HH 在面内反而变成了"轻"载流子，实验上其有效质量可达 $0.05\,m_0$ 量级。轻的有效质量带来两重红利：

1. 量子点的横向特征尺寸 $L\propto 1/\sqrt{m^*}$ 增大，应变锗量子点柱塞电极宽度可放宽到 100–120 nm 仍能保持较大能级分裂，显著缓解电子束光刻与多层栅对准的压力；
2. 邻近量子点之间的空穴波函数交叠更强，[[qubit-control/exchange-interaction|交换耦合]] $J$ 的可调范围更宽，长程 [[circuit-qed/cavity-mediated-coupling|腔介导]]或短程交换两种相互作用都更易调出。

### 自旋轨道耦合与漏电流谱

在动量表象下，HH/LH 混合给出的线性自旋轨道耦合可整理为 Rashba 与 Dresselhaus 两项之和

$$
H_{\mathrm{SOC}}=\alpha\,(k_y\sigma_x-k_x\sigma_y)+\beta\,(k_x\sigma_x-k_y\sigma_y),
$$

其中 $\alpha,\beta$ 依赖于电场与应变。论文中直接可测的物理量是"漏电流"——[[qubit-control/electric-dipole-spin-resonance|泡利自旋阻塞]]区中本应被禁止的电流分量。其来源有两类：

1. 双点间 [[qubit-control/hole-spin-qubit|$g$ 因子]]差异造成的 $T(1,1)\leftrightarrow S(0,2)$ 共振；
2. 自旋轨道耦合本身造成的能级混合。

两种机制贡献的漏电流对磁场方向与失谐的依赖不同：前者与磁场的取向呈 $\propto \Delta g\,\mu_B B$ 的线性响应，后者与 $\sqrt{B^2+B_{\mathrm{SO}}^2}$ 相关。把漏电流随磁场大小、方向与失谐的二维测量与数值模拟对照，可以反解自旋轨道场的方向与强度。在平面锗中测得自旋轨道耦合矢量大致沿异质结面外方向、与面外仅有约 $4\pm 6^\circ$ 的偏差，并通过改变势垒栅电压把自旋轨道耦合强度连续调节在 $15\ \mu\mathrm{eV}$ 至 $21\ \mu\mathrm{eV}$ 范围。

### 单比特门操控的等效哈密顿量

在仅有恒定外磁场 $B_0\hat{n}$ 与微波驱动 $E(t)\hat{e}$ 时，单空穴自旋比特在旋转坐标系下的等效哈密顿量可写成

$$
H_{\mathrm{rot}}=f_{\mathrm{Rabi}}\,(S_x\cos\phi-S_y\sin\phi),
$$

其中 $f_{\mathrm{Rabi}}\propto E\cdot\alpha_{\mathrm{SO}}/h$ 反映电场–自旋耦合把微波电场转换为等效磁场 $B_{\mathrm{eff}}$，相位 $\phi$ 由微波载波相位决定。论文样品上典型 Rabi 频率在 8–19 MHz 区间（如共振点测得 $f_{\mathrm{Rabi}}=11.61\ \mathrm{MHz}$），即可在不依赖微磁体的前提下实现纳秒–十纳秒量级的翻转。[[qubit-control/geometric-quantum-gate|几何相位门]]则通过在参数空间走闭合路径，使累计的几何相位天然抵消拉比频率抖动 $\delta f_{\mathrm{Rabi}}$ 或共振频率抖动 $\Delta f$。

### 准静态薛定谔–泊松求解

对异质结电势的精确预测依赖一维自洽 [[materials-devices/interface-defects|薛定谔–泊松（Schrödinger–Poisson, S-P）]]求解：在生长方向交替求解

$$
-\frac{\hbar^2}{2m_z}\frac{\partial^2\psi_i}{\partial z^2}+U(z)\psi_i=E_i\psi_i,
$$

$$
\frac{\partial^2\varphi}{\partial z^2}=-\frac{\rho(z)}{\varepsilon},
$$

直到价带、空穴波函数与电场三者同时自洽收敛。S-P 求解器直接给出给定栅压下的量子阱深度、束缚态能级和二维空穴气密度 $p_{\mathrm{2DHG}}$（实验上以 $\mathrm{cm^{-2}}$ 为单位）。论文把它扩展为"逆向"算法——把低温场效应管测得的载流子密度反代回求解器，即可反推出界面态的填充电荷 $p_{it}$ 与密度分布 $D_{it}(E)$。

### 缺陷辅助隧穿机制

空穴从量子阱经势垒层到达半导体–氧化层界面，被界面态或势垒层内位错俘获的过程对应三种隧穿机制：

- **直接隧穿**：电流密度

$$
J_{\mathrm{direct}}\propto \exp\!\left(-\frac{4\sqrt{2m^*}}{3\hbar eE}\,\phi_B^{3/2}\right),
$$

其中 $m^*$ 是势垒层空穴有效质量、$\phi_B$ 是势垒高度、$E$ 是外加电场。该机制在电场较弱时随栅压衰减最快，仅在高位移电场下才可与下两项相比；

- **Fowler–Nordheim（F-N）隧穿**：当电场足以把势垒三角化时，电子（或空穴）可在三角势垒中隧穿，电流密度

$$
J_{\mathrm{FN}}\propto E^2\exp\!\left(-\frac{4\sqrt{2m^*}}{3\hbar eE}\,\phi_B^{3/2}\right);
$$

- **陷阱辅助隧穿**：势垒层中的位错与界面态作为中间"阶梯"，使空穴分段穿越势垒，其电流密度依赖具体缺陷密度 $N_{\mathrm{trap}}$。论文估算出 Ge/SiGe 异质结中由位错贡献的缺陷密度约 $10^{6\sim 8}\ \mathrm{cm^{-2}}$，足以支撑陷阱辅助隧穿；

S-P 求解与三种隧穿电流叠加构成"界面态填充–缺陷密度提取"的完整图像：先从测量中取出 $p_{\mathrm{2DHG}}$，再以 S-P 反向求解 $p_{it}$，最后用隧穿模型交叉验证势垒层缺陷参数。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 应变锗量子阱厚度 $t_{\mathrm{Ge}}$ | $16\ \mathrm{nm}$（实验所用基片） | 文献 23 |
| 顶部 SiGe 势垒层厚度 $t_{\mathrm{SiGe}}$ | $32\ \mathrm{nm}$ 或 $47\ \mathrm{nm}$（不同基片） | 文献 25；文献 23 |
| 衬底 | 8 英寸硅，[[materials-devices/silicon-sige\|Si/SiGe]] 虚衬底上外延 Ge | 文献 25 |
| 外延方法 | 减压化学气相沉积 RPCVD | 文献 25 |
| 2DHG 迁移率 | 高达 $2\times 10^{6}\ \mathrm{cm^{2}V^{-1}s^{-1}}$ | 文献 23 |
| 界面氧化层 SiO<sub>x</sub> 厚度 | $\approx 1.5\ \mathrm{nm}$ | 文献 23 |
| 栅氧 Al<sub>2</sub>O<sub>3</sub> 厚度 | $30\ \mathrm{nm}$，干法（O<sub>3</sub>）生长 $100\,^\circ\mathrm{C}$ | 文献 23 |
| Luttinger 参数（Ge） | $\gamma_1\approx 13,\ \gamma_s\approx 5$ | 文献 23 |
| 面内 HH 有效质量 | $\sim 0.05\,m_0$ | 文献 23 |
| 量子点柱塞电极宽度 | $100$–$120\ \mathrm{nm}$ | 文献 25 |
| 限制电极 C2 宽度 | $\sim 90\ \mathrm{nm}$ | 文献 25 |
| 栅间 Al 原位氧化层 | $\approx 4\ \mathrm{nm}$ | 文献 25 |
| 自旋轨道耦合强度 | $15$–$21\ \mu\mathrm{eV}$（栅压可调） | 文献 25 |
| 自旋轨道场方向 | 与面外方向夹角 $4\pm 6^\circ$ | 文献 25 |
| 硼注入剂量 / 能量 | $1\times 10^{13}\ \mathrm{cm^{-2}}$、$13\ \mathrm{keV}$（47 nm 量子阱） | 文献 25 |
| Rabi 频率 $f_{\mathrm{Rabi}}$ | $8$–$19\ \mathrm{MHz}$，共振点 $11.61\ \mathrm{MHz}$ | 文献 25 |
| 相干时间 | $T_2^*=120\ \mu\mathrm{s}$（Ramsey），$T_2^H=1.2\ \mathrm{ms}$（Hahn echo，引用值） | 文献 25 |
| 最优工作点相干时间 | $T_2^*=17.6\ \mu\mathrm{s}$（低磁场 + 优化方向） | 文献 25 |
| 单比特门保真度 | 几何门 $>99.9\%$；动力学门最高 $99.82\%$（最优工作点） | 文献 25 |
| 基温 | $\approx 15\ \mathrm{mK}$（稀释制冷机） | 文献 25 |
| 未处理界面态密度 | $\sim 6\times 10^{12}\ \mathrm{cm^{-2}eV^{-1}}$（过氧化氢处理后参考值） | 文献 23 |
| 臭氧钝化后总界面态 | $p_{it}(\mathrm{O_3})\approx 8.58\times 10^{12}\ \mathrm{cm^{-2}}$ | 文献 23 |
| 势垒层位错密度 | $10^{6\sim 8}\ \mathrm{cm^{-2}}$ | 文献 23 |

## 实验特征与测量方法

**器件制备与表征。** 应变锗空穴平台的典型制备流程分为微米级与纳米级两层：微米级负责离子注入、台阶（mesa）刻蚀、氧化铝/硅帽层刻蚀与欧姆接触，常用激光直写光刻加 RIE（SF<sub>6</sub>:O<sub>2</sub>=10:10、30 W）；纳米级则用 30 kV 电子束曝光套刻多层铝栅（套刻误差 $\lt 20\ \mathrm{nm}$），层间依靠 Al 原位氧化形成约 4 nm 绝缘层，最后通过低温显影与低功率超声剥离避免基片应力裂纹。离子注入硼（B，剂量 $1\times 10^{13}\ \mathrm{cm^{-2}}$、能量 $13\ \mathrm{keV}$）经快速退火激活形成 p 型欧姆接触，台阶结构用于隔离大面积引线电极以降低漏电。

**二维空穴气的输运。** 标准 Hall-bar 场效应管被用来读出 $p_{\mathrm{2DHG}}$、迁移率与开启电压：在 4.2 K 液氦和 $\sim 15\ \mathrm{mK}$ 稀释制冷机两个温区分别做初步筛选与精细测量。在常规工作点下，栅压驱动一部分空穴经表面隧穿机制抵达 SiO<sub>x</sub>/Al<sub>2</sub>O<sub>3</sub> 界面并被缺陷捕获，导致阈值电压随时间漂移；论文用循环扫描阈值电压法量化这种漂移，提取钝化前后的总界面态密度。

**量子点的标准输运与电荷稳定图。** 通过在所有栅极加负电压形成限域势阱，可在双量子点电荷稳定图中观测到典型的偏压三角形；当双量子点等效为 $(1,1)\to(0,2)$ 的隧穿循环时正偏压三角形底部出现泡利自旋阻塞梯形区。库仑阻塞峰、库仑菱形与漏电流随磁场、失谐的变化是表征自旋轨道场的基础数据。

**漏电流磁谱与自旋轨道场方向。** 在不同方向三维外磁场下扫描泡利自旋阻塞区的漏电流幅值，可以拟合出 $B=0$ 处的"残余漏电流"（自旋轨道耦合贡献）与斜率（$g$ 因子差异贡献），进而把等效自旋轨道耦合场的主轴解出。论文报告的取向与异质结面外接近一致，并通过改变势垒栅电压把耦合强度在 $15$–$21\ \mu\mathrm{eV}$ 内连续调节。

**单比特门与最优工作点。** 用 EDSR（电偶极自旋共振）实现单比特操控时，$f_{\mathrm{Rabi}}=8$–$19\ \mathrm{MHz}$ 区间均能跑出超过 99% 的几何门保真度，共振点 $f_{\mathrm{Rabi}}=11.61\ \mathrm{MHz}$。Ramsey、Hahn echo、CPMG 三种序列分别给出 $T_2^*$、$T_2^H$、$T_2^{\mathrm{CPMG}}$，与它们之间的差值反映低频噪声在退相干中的相对贡献。通过降低外磁场强度并旋转磁场至"自旋对电荷噪声电学敏感性最小"的方向，相干时间可由 $136\ \mathrm{ns}$（常规点）拉长到 $17.6\ \mu\mathrm{s}$，动力学门保真度提升约 2 个百分点至 $99.82\%$，门集层析（GST）评估证明该最优工作点处的操控质量超过容错阈值。

**谐振腔杂化与镂空腔设计。** 应变锗量子点可与超导共面波导（CPW）[[circuit-qed/microwave-resonator|谐振腔]]耦合，沿用 [[circuit-qed/jaynes-cummings-model|Jaynes-Cummings 模型]]描述

$$
H=\frac{\hbar\omega_q}{2}\sigma_z+\hbar\omega_r\!\left(a^\dagger a+\tfrac{1}{2}\right)+\hbar g\,(a^\dagger\sigma_-+a\sigma_+),
$$

其中耦合强度 $g\propto \sqrt{Z_r}$，$Z_r=\sqrt{L_l/C_l}$ 为谐振腔的特征阻抗。应变锗中界面缺陷对应的微观 [[materials-devices/interface-defects|二能级系统（TLS）]]与腔场的耦合同样满足 JC 型结构

$$
H_{\mathrm{TLS}}=\frac{\hbar\omega_q}{2}\sigma_z+\hbar\omega_r\!\left(a^\dagger a+\tfrac{1}{2}\right)+\hbar g_{\mathrm{TLS}}\,(a^\dagger\sigma_-+a\sigma_+),
$$

并通过该通道耗散腔内能量，表现为 $Q$ 值下降。论文针对这一问题提出基于湿法刻蚀的"镂空谐振腔"——把 CPW 中央导体下方及周围的承托层挖空，使电磁场集中区域与界面缺陷所在区域在空间上解耦，从而同时提高 $g$ 和 $Q$。

<!-- FIGURE: 应变锗双量子点器件 SEM 伪彩图与栅极下方截面示意，标注柱塞、势垒、限制三类电极以及 2DHG 位置 -->

<!-- FIGURE: 不同磁场方向下漏电流 $I_{\mathrm{PSB}}$ 随 $B$ 的拟合结果：主轴方向贡献最大，偏离时下降 -->

<!-- FIGURE: 镂空 CPW 谐振腔结构示意——中央导体悬空、与衬底通过细支撑梁相连，电磁场避开界面态 -->

## 噪声、缺陷与优化路径

应变锗平台的"软肋"是工作点漂移与界面缺陷带来的多种退相干通道，论文围绕"理解缺陷机制 → 设计抗缺陷器件"的两条主线展开：

- **工作点漂移**：二维空穴气积累时空穴向表面隧穿并被缺陷捕获，使阈值电压随循环扫描单调漂移。S-P 反向求解把漂移量映射回 $p_{it}$，在低温（$\approx 4.5\ \mathrm{K}$）下即可定量给出臭氧钝化后的总界面态约 $8.58\times 10^{12}\ \mathrm{cm^{-2}}$；
- **谐振腔耗散**：氧化层悬挂键在量子尺度上表现为二能级系统，与 CPW 腔电磁场强耦合时会消耗腔内能量、降低 $Q$。论文把"湿法刻蚀镂空"作为器件层面的工程方案——把电磁场集中区域与界面缺陷所在区域在空间上隔离，从而在不影响腔频率设计灵活度的前提下同时提高 $g$ 和 $Q$；
- **位错陷阱辅助隧穿**：势垒层中由晶格失配引入的位错密度约 $10^{6\sim 8}\ \mathrm{cm^{-2}}$，在陷阱辅助隧穿机制下充当中间态，降低空穴被界面缺陷捕获的能垒。降低这种隧穿的根本办法仍是提高晶格质量——通过优化生长工艺抑制位错增殖。

针对电子–空穴退相干本身，则在操控层面给出三组互补的优化：[[qubit-control/geometric-quantum-gate|几何相位门]]抑制频率抖动 $\Delta f$ 与拉比频率抖动 $\delta f_{\mathrm{Rabi}}$、Hahn echo 与 CPMG 序列剥离低频电荷噪声、由磁场方向 + 栅压联合优化的最优工作点把比特对电荷噪声的电学敏感性降至最低。

## 与其他概念的关系

- 与 [[materials-devices/silicon-sige|Si/SiGe 异质结]]共享栅控量子点的工程框架，但用价带空穴代替导带电子，从而获得更轻的有效质量、更弱的超精细与较强的自旋轨道耦合；与 [[materials-devices/germanium-hut-wire|锗棚顶纳米线]]同为锗基空穴比特，但依靠二维异质结而非一维自组织纳米线，更易扩展为二维阵列；
- 与 [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]的耦合机制——EDSR、几何门、低噪声工作点——直接来自该平台的自旋轨道场和电学可调 $g$ 因子；
- 与 [[materials-devices/interface-defects|界面缺陷]]双向耦合：界面态既是量子点阈值电压漂移的根源，也是 [[circuit-qed/microwave-resonator|谐振腔]] $Q$ 值下降的通道；理解与抑制缺陷是平台工程优化的核心；
- 与 [[materials-devices/charge-noise|电荷噪声]]通过自旋轨道耦合间接相连：自旋轨道耦合越强、操控越快，但比特对电场扰动也越敏感。最优工作点策略本质上是把两者折中；
- 与 [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]构成材料层与系统层的对接：应变锗给出强电偶极、高 $g$ 因子各向异性，谐振腔提供长程耦合媒介，二者共同支撑[[circuit-qed/spin-photon-coupling|空穴–光子杂化]]与未来的 [[circuit-qed/cavity-mediated-coupling|腔介导长程比特耦合]]；
- 与 [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]、[[qubit-control/rabi-oscillation|Rabi 振荡]]、[[qubit-control/ramsey-interferometry|Ramsey 干涉]]、[[qubit-control/dynamical-decoupling|动力学解耦]]、[[qubit-control/geometric-quantum-gate|几何量子门]]等操控技术形成上下游：平台决定了哪些操控策略最有效。

## 延伸阅读

- G. Scappucci et al., "The germanium quantum information route", *Nature Reviews Materials* (2021). [DOI: 10.1038/s41578-020-00262-z]
- C. Kloeffel et al., "Theory of hole-spin qubits in strained germanium quantum dots", *Physical Review B* (2021). [DOI: 10.1103/PhysRevB.103.125201]
- N. W. Hendrickx et al., "Fast two-qubit logic with holes in germanium", *Nature* (2019). [DOI: 10.1038/s41586-019-1919-3]
- D. J. Ibb or al, "A germanium hole spin qubit", *Nature Communications* (2018). [DOI: 10.1038/s41467-018-06418-4]

## 论文依据

- [[sources/ref-25|文献 25]]，PDF pp. 7–9：创新性说明与摘要——自旋轨道场性质、几何门、最优磁场工作点三个层面的系统研究框架。
- [[sources/ref-25|文献 25]]，PDF pp. 61–62：3.1.3 节微纳加工——硼注入 SRIM 模拟，剂量 $1\times 10^{13}\ \mathrm{cm^{-2}}$、能量 $13\ \mathrm{keV}$，对应 47 nm 量子阱深度。
- [[sources/ref-25|文献 25]]，PDF pp. 53–54：3.1.1 节 Ge/SiGe 异质结构——RPCVD 在 8 英寸硅衬底上外延量子阱结构，15–40 nm Si<sub>1-x</sub>Ge<sub>x</sub> 势垒层。
- [[sources/ref-25|文献 25]]，PDF p. 78：4.1 节研究背景——应变锗空穴有效质量较小且可被量子限域与应变工程灵活调控；空穴主要来源于 $p$ 轨道，超精细相互作用较弱。
- [[sources/ref-25|文献 25]]，PDF pp. 80, 99：4.2 节——泡利自旋阻塞漏电流反推出的自旋轨道耦合强度在 $15$–$21\ \mu\mathrm{eV}$ 区间连续可调；自旋轨道场与面外方向夹角约 $4\pm 6^\circ$。
- [[sources/ref-25|文献 25]]，PDF pp. 115–117：5.3 节——量子比特共振点 $f_{\mathrm{Rabi}}=11.61\ \mathrm{MHz}$，$T_2^*=136\ \mathrm{ns}$、$T_2^{\mathrm{Echo}}=401\ \mathrm{ns}$。
- [[sources/ref-25|文献 25]]，PDF pp. 124–128：5.4 节几何相位门 Path1/Path2——分别在 $f_{\mathrm{Rabi}}=8$–$19\ \mathrm{MHz}$ 范围内实现 $>99\%$ 操控保真度并对 $\Delta f$、$\delta f_{\mathrm{Rabi}}$ 抖动具有强抗噪性。
- [[sources/ref-25|文献 25]]，PDF pp. 131, 138：6 章最优工作点——磁场方向优化使相干时间拉长到 $17.6\ \mu\mathrm{s}$，Hahn echo 在该方向下 $T_2^H$ 提升至 $88\ \mu\mathrm{s}$，动力学门保真度最高 $99.82\%$。
- [[sources/ref-23|文献 23]]，PDF pp. 7–8：摘要——臭氧表面钝化、含界面态的自洽 S-P 求解与隧穿模型、减弱缺陷参与的镂空谐振腔设计。
- [[sources/ref-23|文献 23]]，PDF pp. 25–27：2.1.1 节应变锗外延异质结——Luttinger–Kohn 哈密顿量（公式 2.1）与应变修正（公式 2.4–2.5），面内 HH 有效质量可低至 $0.05\,m_0$；塞曼劈裂 $E_Z=g\mu_B B$ 与电场可调 $g(V)$。
- [[sources/ref-23|文献 23]]，PDF pp. 27–30：2.1.2–2.1.3 节共面波导谐振腔与 JC 哈密顿量——谐振腔结构、$Q=f_0/\delta f$ 的定义；Jaynes–Cummings 哈密顿量（公式 2.9）与 $g\propto \sqrt{Z_r}$ 的耦合强度依赖。
- [[sources/ref-23|文献 23]]，PDF pp. 33–38：2.3–2.4 节界面态提取与现有研究——传统 C-V/G-V/CP 方法在应变锗器件中不适用的三条原因（能带结构不同、低温下陷阱无法充放电、价带弯曲使空穴只能单向进入缺陷）以及 Hutchins-Delgado 等的过氧化氢/硝酸钝化结果对比。
- [[sources/ref-23|文献 23]]，PDF pp. 39–43：3.1.1 节薄膜生长——TMA+臭氧干法在 100 °C 下沉积 30 nm Al<sub>2</sub>O<sub>3</sub>，避免 GeO<sub>2</sub> 在常规 TMA+水 ALD 中溶水带来的薄膜质量问题；变温 AFM 表征给出实际厚度与目标厚度的对比。
- [[sources/ref-23|文献 23]]，PDF pp. 47–48：3.2–3.3 节循环扫描阈值电压与臭氧钝化——提取臭氧钝化后总界面态 $p_{it}(\mathrm{O_3})\approx 8.58\times 10^{12}\ \mathrm{cm^{-2}}$（公式 3.3），并与过氧化氢/硝酸/氢氟酸钝化结果对比。
- [[sources/ref-23|文献 23]]，PDF pp. 50–55：4.2 节自洽 S-P 求解器与"逆向 S-P"反推界面态密度的数值方法。
- [[sources/ref-23|文献 23]]，PDF pp. 63–67：5 章界面缺陷捕获的隧穿机制——直接、Fowler–Nordheim 与陷阱辅助三种隧穿机制的电流密度公式及其在不同电场区间的相对贡献；势垒层位错密度约 $10^{6\sim 8}\ \mathrm{cm^{-2}}$。
- [[sources/ref-23|文献 23]]，PDF pp. 76–80：6 章镂空谐振腔设计——基于湿法刻蚀的悬空 CPW 谐振腔结构与电磁学仿真；按 $g\propto\sqrt{Z_r}\propto\sqrt{1/C_l}$ 提高耦合强度（公式 6.1）；空间隔离降低 TLS 对 $Q$ 的耗散（公式 6.2–6.3）。