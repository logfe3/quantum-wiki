---
title: 约瑟夫森结阵列中的 Thouless 量子泵浦
description: 电可调约瑟夫森结阵列（栅控每个岛）上实现 Rice-Mele 与 Harper-Hofstadter 拓扑泵浦，把 JJA 变成拓扑量子模拟平台。
aliases:
 - Thouless 泵浦
 - 约瑟夫森结阵列量子模拟
 - Thouless pumping
 - topological pumping
tags:
 - 扩展与自动化
 - 约瑟夫森结阵列
 - 量子模拟
 - 拓扑物理
date: 2026-09-14
source: QAtlas
qatlas_id: qa_01m0qvev13g8ktqs55njtd43vg
source_updated: 2026-09-14T01:54:21Z
---

<div class="entry-lead">把约瑟夫森结阵列的每个岛换成半导体-超导体杂化岛、配上可调侧栅，阵列就从被动元件变成**可编程多体系统**：周期性调谐各岛的电荷与隧穿耦合，可以实现 Thouless 量子泵浦——电荷沿链定量输运、或合成维度里出现拓扑能带。Rice-Mele 与 Harper-Hofstadter 两种泵浦方案是 JJA 作为拓扑量子模拟平台的入口。</div>

## 物理图像：从超电感到可编程岛链

[[circuit-qed/superinductance|约瑟夫森结阵列]]的传统角色是被动元件——用动力学电感提供超电感。半导体-超导体杂化工艺（外延 InAs/Al 纳米线、栅控弱连接，见[[superconducting-qubits/gatemon-qubit|gatemon]]）让每个岛的电荷能 $E_C$、约瑟夫森能 $E_J$、偏置电荷 $n_{g,j}$ 都可以独立栅控：一条"可编程岛链"由此诞生。岛工作在库仑阻塞区（$E_C$ 主导），逐岛调谐 $n_{g,j}$ 与隧穿耦合就驱动了**Thouless 量子泵浦**——绝热周期驱动下，每个周期有定量的电荷沿链输运一个元胞，输运量由泵浦周期的拓扑不变量（Berry 相位/陈数）决定。

拓扑相是固态量子模拟的理想目标：对无序、噪声、相互作用乃至耗散内禀稳健；加上时间周期驱动，可以进一步设计新型拓扑相——JJA 的栅控可编程性正好提供了所需的驱动自由度。

![[assets/figures/thouless-pumping-jja/88aa6e2b8e61ec6e733d77bc93384e0840d1b903b53907df3f9463f04fe49249.jpg]]

*可编程岛链的构型：半导体衬底（绿）上的超导岛链（深蓝），每个岛旁配一个 T 形侧栅，栅压独立调谐各岛的诱导电荷——这是 Rice-Mele 与 Harper-Hofstadter 泵浦方案的硬件载体。图源：Athanasiou et al. (2023)，Fig. 1。*

![[assets/figures/thouless-pumping-jja/d948ad49283b9889473e61e7070fb033c06d55d96293d32e9bd954ee92d9023b.jpg]]

*单岛的充电能与库仑阻塞：单岛充电能作为诱导电荷 $n_{g,j}$ 的函数（$N-1$、$N$ 等库珀对数态）——库仑阻塞谷的位置由 $n_{g,j}$ 决定，逐岛调谐 $n_{g,j}$ 即驱动电荷沿链的定量输运。图源：Athanasiou et al. (2023)，Fig. 2。*

## 两种泵浦方案

岛链的低能物理由标准量子相位模型描述：每个岛配相位算符 $\hat\varphi_j$ 与库珀对数算符 $\hat N_j$，哈密顿量分两部分——静电项与隧穿项。库仑阻塞区（$E_C>E_J$、$E_{CC}$）下，硬核玻色子近似给出

$$
\hat H=\sum_{j=1}^{M}E_C\left(\hat N_j-n_{g,j}\right)^2-\frac{1}{2}\sum_{j=1}^{M-1}E_{J,j}\left(\hat\Sigma_{j+1}^\dagger\hat\Sigma_j e^{-i\theta_{j,j+1}}+\hat\Sigma_j^\dagger\hat\Sigma_{j+1}e^{i\theta_{j,j+1}}\right),
$$

其中 $E_C=4e^2/C^{\mathrm{self}}$ 是单岛充电能（Al 岛约 750nm×80nm 时 $E_C\approx0.125$ meV $\approx h\cdot30$ GHz）、$n_{g,j}=V_{g,j}C_j^g/2e$ 是侧栅控制的诱导电荷、$E_{J,j}$ 由切割栅 $V_{c,j}$ 调谐（完全耗尽衬底时关断）、$\hat\Sigma_j=e^{i\hat\varphi_j}$ 把岛 $j$ 的库珀对数减一、Peierls 相位 $\theta_{j,j+1}=(2e/\hbar)\int_j^{j+1}\vec A\cdot d\vec x$ 计入磁场（Harper-Hofstadter 方案的合成磁场由此进入）。

**Rice-Mele 泵浦**：一维交替耦合岛链，周期性调谐两个参数——各岛的诱导电荷 $n_{g,j}$（改变 onsite 势）与相邻岛的隧穿耦合 $t_{j,j+1}$（改变跳跃幅度）。一个泵浦周期内，等效哈密顿量沿 Rice-Mele 圆环绕 Dirac 点一周，陈数 ±1 对应每周期定量输运一个电子（或库珀对）；输运方向由环绕方向决定。数值模拟考察了库仑阻塞区岛链的长时间行为，确认绝热条件（泵浦周期远长于岛内弛豫、远短于退相干）下的定量输运。拓扑性质让泵浦电流对 $E_{J,j}(V_{c,j})$ 的具体形状稳健——只要单调且足够规则。

**Harper-Hofstadter 方案**：把额外自由度（自旋、频率或链维度）当作合成维度，让 JJA 的实空间格子与合成维度耦合，等效磁场下出现 Harper-Hofstadter 能带——拓扑平带与手性边缘态。JJA 的栅控自由度天然提供了合成维度的耦合项，是实现这类格点模型的候选平台。

### 合成磁矢势：规范场工程的阵列实现

与泵浦同族的拓扑物理是**合成规范场**：2D 超导比特阵列中，对比特耦合做参数调制（相位偏置随时间旋转），等效于给系统加上**人工磁场**——Hopings $J_{ij}e^{i	heta_{ij}(t)}$ 的相位因子正是矢势的佩尔斯替换。MIT/Lincoln Lab 的实现在方阵列上生成合成磁矢势，观测等效磁场下的激发谱——规范场工程从 JJA（本词条主体）推广到比特阵列。

![[assets/figures/thouless-pumping-jja/8c8a03f276b81ec346b9d1f41593ff1253d1afc71136bb67784f8309d296efcf.jpg]]

*合成磁矢势的实现：2D 比特阵列+参数调制耦合——佩尔斯相位等效人工磁场。图源：Rosen et al. (2024)，Fig. 1。*

![[assets/figures/thouless-pumping-jja/297f3a4bf4ebf9a85a4dc01cf69b6d1a95999904535365044817f00418d4056c.jpg]]

*等效磁场下的激发谱：合成矢势引起的能谱变化——规范场工程的直接观测。图源：Rosen et al. (2024)，Fig. 2。*

## 与其他概念的关系

- 硬件载体是[[circuit-qed/superinductance|约瑟夫森结阵列与超电感]]的可调版本：每个岛的栅控来自[[superconducting-qubits/gatemon-qubit|gatemon]]的半导体-超导体杂化工艺，库仑阻塞物理与[[fundamentals/coulomb-blockade|库仑阻塞]]一致。
- 逐岛栅控的电压分配由[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]与[[scaling-automation/virtual-gates|虚拟电极]]描述；岛间相位与电荷的一致性控制也依赖[[scaling-automation/frequency-homogenisation|频率均匀化]]的思想。
- 半导体-超导体杂化岛与[[materials-devices/germanium-hut-wire|锗棚顶纳米线]]等纳米结构平台同属材料学基础；岛链上的电荷泵浦与[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]的输运物理同源，但这里是拓扑保护的定量输运。
- 超导平台的量子模拟家族还有数字一支：大步长 Trotter 电路作为 Floquet 系统的 Z₂ 格点规范理论模拟（预热化平台内测量，38/116 比特），见[[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]的"Floquet 预热化"一节——模拟拓扑物态（本词条）与模拟规范理论动力学的预热态是同一平台路线的两条支线。家族的玻色子模拟一支：电容耦合 transmon 环经 Leviton Floquet 调制注入合成磁通、模拟吸引玻色子的亮孤子并读出分数磁通量子，见[[superconducting-qubits/synthetic-flux-qubit-ring|合成磁通与分数磁通量子]]词条。

## 参考文献

- Athanasiou, S., Nielsen, I. E., Wauters, M., & Burrello, M. (2023). *Thouless pumping in Josephson junction arrays*. SciPost Physics **16**, 083. [DOI:10.21468/SciPostPhys.16.3.083](https://doi.org/10.21468/SciPostPhys.16.3.083) · [arXiv:2308.13597](https://arxiv.org/abs/2308.13597)
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
