---
title: 两比特门
description: 量子点自旋比特的两比特逻辑门实现：交换门、脉冲 CZ、CROT、常开交换与腔介导耦合，以及保真度表征路线。
aliases:
 - 双比特门
 - 两比特逻辑门
 - two-qubit gate
tags:
 - 量子比特操控
 - 两比特门
date: 2026-09-12
---

<div class="entry-lead">两比特门是把两个量子比特的态"纠缠起来"的操作，是通用量子计算不可缺的组件。半导体量子点中所有主流两比特门都建立在同一物理资源——可电调的交换相互作用——之上；不同方案的差别在于如何把交换能"切"成所需的纠缠逻辑：脉冲化（CZ、$\sqrt{\mathrm{SWAP}}$）、频域选择（CROT、常开耦合），还是让谐振腔代为传话（腔介门）。</div>

## 物理根源：可调交换耦合

固态比特相干耦合的历史起点是电荷比特：Pashkin 等人（2003，Nature 415）在两个电容耦合的 Cooper-pair box 上用脉冲技术产生量子振荡，振荡谱直接反映比特间相互作用，指示纠缠态的存在——这是固态多比特相干操控的首次演示，此后的自旋比特两比特门沿着"可调耦合"这条线发展。

两个相邻自旋电子经过点间[[fundamentals/tunnel-coupling|隧穿耦合]]杂化，得到海森堡型交换相互作用

$$
H_{12}=\frac{J}{4}\,\vec\sigma_1\cdot\vec\sigma_2 ,
$$

交换能 $J$ 随[[fundamentals/charge-stability-diagram|电荷稳定图]]上的失谐 $\epsilon$（把系统推向 $(1,1)$–$(0,2)$ 电荷过渡线）与点间势垒高度指数式变化：推得越近，$J$ 越大；拉回库仑阻塞深处，$J$ 指数趋零。这一"电子学旋钮"正是量子点方案相对固定耦合体系的最大优势——**耦合可以真正关断**，闲置比特之间几乎不互相打扰。

在 $(1,1)$ 子空间内，$J$ 作用在单态 $|S\rangle$ 与 $|T_0\rangle$ 之间：$H=-J|S\rangle\langle S|/2$。它既给出 ST 编码的 $z$ 旋转，也给出单自旋比特间的 Ising 型等效耦合 $J\sigma_z^{(1)}\sigma_z^{(2)}/4$（两单态能级差 $E_Z$ 远大于 $J$ 时），这是几乎所有"CZ 类"两比特门的工作机制。电容耦合电荷比特的对应演示见 [[references/li-2014-cnot-charge-qubits|Li et al. (2014) CNOT 全文页]]——5 GHz 门时钟下 CNOT 与过程层析首次在电荷比特中实现。

## 方案一：脉冲交换与 $\sqrt{\mathrm{SWAP}}$

[[references/loss-divincenzo-1998|Loss 与 DiVincenzo (1998)]] 的原始构想：把 $J(t)$ 打开一段时间 $\tau=\pi\hbar/J$ 即得 $\mathrm{SWAP}$，打开 $\pi\hbar/(2J)$ 配合单比特旋转即得通用逻辑。[[references/vanderwiel-2002|van der Wiel et al. (2002)]] 综述的赝自旋框架与脉冲实验奠定了实现路径；[[references/petta-prb-2005|Petta et al. (2005)]] 用栅压脉冲序列在双点中测得单态–三重态弛豫时间 $T_1$，确立了脉冲门时序设计的实验规范。

脉冲交换门的优点是原理上快（$J$ 可以做到 GHz 量级）、不依赖微波；难点是 $J$ 对失谐噪声指数敏感，脉冲经过高 $J$ 区时相位抖动大，需要[[qubit-control/dynamical-decoupling|动力学解耦]]或形变脉冲（把脉冲工作点选在 $J(\epsilon)$ 平缓处）来压制误差。

## 方案二：脉冲受控相位门（CZ）

把两个 $(1,1)$ 态 $|\!\uparrow\downarrow\rangle$、$|\!\downarrow\uparrow\rangle$ 的能级差用交换能移开：沿失谐方向脉冲到有限 $J$，停留 $\tau_{\mathrm{CZ}}=\hbar\pi/J$，即给 $|\!\uparrow\uparrow\rangle$ 与 $|\!\uparrow\downarrow\rangle$（或相应子空间）之间积累 $\pi$ 相位，得到受控相位门，配合单比特 Hadamard 就是 CNOT。

[[references/veldhorst-2015|Veldhorst et al. (2015)]] 在硅 MOS 双点中首次演示：交换耦合经失谐电脉冲开关，CZ 门时长 100 ns，两比特相干时间内可完成 100 次以上两比特门。后续工作发现脉冲过程中交换对噪声的敏感性会拖累保真度，于是发展出**解耦 CZ**（decoupled CZ）：把 CZ 嵌入 Ramsey 型回声序列，抵消无条件 $z$ 相位与慢噪声（[[references/watson-2018|Watson et al. (2018)]]、[[references/xue-2022|Xue et al. (2022)]] 采用此路线）。[[references/xue-2022|Xue et al.]] 进一步用门集合层析（GST）精细校准哈密顿量，把 CPHASE 门保真度做到 $99.65\%$。

## 方案三：频域选择门（CROT 与常开耦合）

**CROT / 受控旋转**：交换耦合使目标比特的共振频率依赖控制比特的状态（频移 $\delta\nu\approx J/h$）。在控制比特处于 $|\!\uparrow\rangle$ 时对目标比特施加其共振 $\pi$ 脉冲，即得条件翻转（CROT）；$\sqrt{\mathrm{CROT}}$ 两次即 CNOT。[[references/veldhorst-2015|Veldhorst et al. (2015)]] 同时演示了 CROT 与 CZ 两条路径；[[references/noiri-2022|Noiri et al. (2022)]] 以 CNOT 形式把保真度推进到 99.5%（门时长 103 ns，同位素富集硅/SiGe）。

**常开交换 + 频率选择**：不脉冲交换，让 $J$ 固定在较小值，用单比特门的频率选择性与交换引起的频移相配合实现纠缠门。[[references/watson-2018|Watson et al. (2018)]] 的可编程两比特处理器即采用此方案，免去高带宽脉冲工程，代价是闲置时邻居频率被"顶"开一个 $J/h$，增加[[readout-measurement/readout-crosstalk|串扰]]管理负担。

## 方案四：ST 编码与多比特耦合

单态–三重态比特之间的耦合可以是纯静电的（电容耦合或共享势垒交换）：一个比特的 $S$–$T_0$ 能级差随自身交换能变化，对邻居表现为可开关的 $zz$ 耦合。[[references/shulman-2012|Shulman et al. (2012)]] 用动力学解耦序列在耦合保持的同时压制各比特的噪声退相干，对两比特态做完整层析，测得纠缠度（concurrence）与 Bell 态保真度，首次证明**纯静电耦合**足以产生量子纠缠。ST 编码门不需要微波，但两比特门对失谐噪声敏感、且编码态没有"磁矩"，长程耦合需要额外结构。

## 方案五：锗空穴与腔介导长程耦合

**锗空穴处理器**：平面锗中空穴[[fundamentals/spin-orbit-coupling|自旋轨道耦合]]强，双点的 $g$ 因子各向异性不同，使两比特既能用交换脉冲也能靠 $g$ 差异做频率选择。[[references/hendrickx-2020|Hendrickx et al. (2020)]] 实现快速两比特逻辑（比特全电驱动，$f_R>100\ \mathrm{MHz}$，各别门保真度 $>99\%$）；[[references/hendrickx-2021|Hendrickx et al. (2021)]] 扩展到 $2\times2$ 四比特阵列，演示 Grover 搜索，验证二维扩展能力。

**腔介导耦合**：把量子点嵌入[[circuit-qed/microwave-resonator|微波谐振腔]]，自旋经电荷杂化与腔光子发生[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]。[[references/samkharadze-2018|Samkharadze et al. (2018)]] 在硅中实现自旋–光子强耦合（耦合率超过腔线宽与自旋退相干率），为"隔开几十微米的两个点通过腔交换光子产生两比特门"提供了实验基础（理论框架见[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]与[[circuit-qed/strong-coupling|强耦合]]）。该路线用空间换集成度，是跨越互联瓶颈的候选方案。

## 保真度表征与代表性结果

两比特门的保真度报告有三条路线，口径不同，比较时要小心：

1. **Bell 态层析**：制备 Bell 态并测密度矩阵，保真度上限受制备与读出误差影响，通常**高于**真实门保真度；
2. **交织随机化基准（interleaved RB）**：把目标门嵌入 Clifford 序列，给出该门的平均保真度，是常用口径；标准/交错/同时/特征 RB 的完整方法学见[[qubit-control/randomized-benchmarking|随机化基准测试]]——正是这套方法（以 CRB 绕过两比特 Clifford 的编译开销）首次给出 Si/SiGe 双比特器件 CPhase 门 $92.0\pm0.5\%$ 的真实两比特保真度；
3. **门集合层析（GST）**：完整重建误差生成元，能区分相干误差与随机误差，[[references/xue-2022|Xue et al. (2022)]] 与 [[references/philips-2022|Philips et al. (2022)]] 采用。

代表性两比特门结果（文中报告值，非同条件对比）：

| 文献 | 平台 | 门 / 表征 | 结果 |
| --- | --- | --- | --- |
| [[references/shulman-2012\|Shulman 2012]] | GaAs ST 比特 | Bell 态层析 + 动力学解耦 | 首次静电耦合纠缠 |
| [[references/veldhorst-2015\|Veldhorst 2015]] | Si-MOS 电子 | CZ 100 ns / CROT | 首个硅两比特逻辑门 |
| [[references/watson-2018\|Watson 2018]] | Si-MOS 电子 | 常开交换 CZ，RB | Bell 态保真度 85–89%，1Q Clifford 98.8% |
| [[references/hendrickx-2020\|Hendrickx 2020]] | 平面锗空穴 | 交换 + $g$ 差异，交织 RB | 各别门 $F_C>99\%$，1Q 99.3% |
| [[references/hendrickx-2021\|Hendrickx 2021]] | 平面锗空穴 $2\times2$ | CZ，RB | 四比特阵列通用控制，1Q 最高 $>99.9\%$ |
| [[references/noiri-2022\|Noiri 2022]] | Si/SiGe 电子 | CNOT 103 ns，交织 RB | 2Q 99.5%、1Q 99.8% |
| [[references/xue-2022\|Xue 2022]] | Si/SiGe 六比特 | 解耦 CPHASE，GST | CPHASE 99.65%，全部门 $>99.5\%$ |
| [[references/philips-2022\|Philips 2022]] | Si/SiGe 六比特 | 全门集，RB | 1Q $\sim99.9\%$，Bell 态 89–95% |

## 参数与量级

| 量 | 典型值 | 说明 |
| --- | --- | --- |
| 交换能 $J$ 范围 | $1\ \mathrm{kHz}$–$10\ \mathrm{GHz}$ | 随失谐/势垒指数可调，"关断"即进入闲置 |
| CZ 门时长 | $50$–$500\ \mathrm{ns}$ | $\tau=\pi\hbar/J$；[[references/veldhorst-2015\|Veldhorst 2015]] 取 100 ns |
| CNOT/CROT 门时长 | $\sim 100$ ns–$1\ \mu\mathrm{s}$ | 受选择性频移 $\delta\nu=J/h$ 限制 |
| 频率选择条件 | $J/h\gg$ 线宽 | 需超过微波脉冲谱宽与 Rabi 频率 |
| 两比特保真度现状 | 98%–99.7% | 2022 年后全面越过表面码阈值 [[references/xue-2022\|Xue 2022]] |
| 腔介耦合距离 | $\gtrsim 10\ \mu\mathrm{m}$ | 受限干腔尺寸与[[circuit-qed/charge-photon-coupling\|电荷–光子耦合]]强度 |

## 与其他概念的关系

- 两比特门的物理基础是[[qubit-control/exchange-interaction|交换相互作用]]与[[fundamentals/tunnel-coupling|隧穿耦合]]；脉冲路径的设计语言是[[fundamentals/charge-stability-diagram|电荷稳定图]]与[[fundamentals/electrochemical-potential|电化学势]]。
- 纯交换的普适逻辑见[[qubit-control/exchange-gates|交换型两比特门]]；组合出的 CNOT 见[[qubit-control/cnot-gate|CNOT 门]]，三比特推广见[[qubit-control/toffoli-gate|Toffoli 门]]。
- 门质量的敌人是[[qubit-control/spin-decoherence|自旋退相干]]（尤其经由电荷噪声通道），解救手段是[[qubit-control/dynamical-decoupling|动力学解耦]]与哈密顿量工程。
- 处理器层面的读写集成、串扰管理与校准自动化见[[scaling-automation/quantum-dot-array|量子点阵列]]、[[readout-measurement/readout-crosstalk|读出串扰]]与[[scaling-automation/automatic-tuning|自动调控]]。
- 不同编码下的两比特门实现差异见[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]、[[qubit-control/single-spin-qubit|单自旋量子比特]]与[[qubit-control/hole-spin-qubit|空穴自旋量子比特]]。

## 参考文献

- 固态比特相干耦合起点：Pashkin et al., Nature 415, 144 (2003)（两耦合电荷比特的量子振荡，[[references/li-2014-cnot-charge-qubits|Li et al. 2014]] CNOT 演示的前身）。
- 原始方案与脉冲物理：[[references/loss-divincenzo-1998|Loss & DiVincenzo, PRA 57, 120 (1998)]]；[[references/vanderwiel-2002|van der Wiel et al., RMP 74, 801 (2002)]]；[[references/petta-prb-2005|Petta et al., PRB 72, 161301(R) (2005)]]。
- CZ 与 CROT 的硅首秀：[[references/veldhorst-2015|Veldhorst et al., Nature 526, 410 (2015)]]；常开交换处理器：[[references/watson-2018|Watson et al., Nature 555, 633 (2018)]]。
- 越过容错阈值与系统表征：[[references/noiri-2022|Noiri et al., Nature 601, 338 (2022)]]；[[references/xue-2022|Xue et al., Nature 601, 343 (2022)]]；[[references/philips-2022|Philips et al., Nature 609, 919 (2022)]]。
- 锗空穴与二维扩展：[[references/hendrickx-2020|Hendrickx et al., Nature 577, 487 (2020)]]；[[references/hendrickx-2021|Hendrickx et al., Nature 591, 580 (2021)]]。
- ST 比特纠缠与腔介耦合：[[references/shulman-2012|Shulman et al., Science 336, 202 (2012)]]；[[references/samkharadze-2018|Samkharadze et al., Science 359, 1123 (2018)]]。
- 领域综述：[[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]、[[references/hanson-2007|Hanson et al., RMP 79, 1217 (2007)]]。
