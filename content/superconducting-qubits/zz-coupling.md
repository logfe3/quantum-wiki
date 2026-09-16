---
title: ZZ 相互作用
description: 耦合量子比特中 |11⟩ 态能量对两比特能量之和的偏离（交叉克尔项）：既是要压到 2π×100 kHz 以下的串扰误差源，又是绝热 CZ 门的资源；可调耦合器架构下的完整机制分解给出两类零 ZZ 区与系统化设计旋钮。
aliases:
 - ZZ 耦合
 - 交叉克尔耦合
 - ZZ coupling
 - cross-Kerr
 - 静态 ZZ
tags:
 - 超导量子比特
 - 两比特门
 - 串扰
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgpmk25yqz0t3d987hx40
source_updated: 2026-09-05T04:46:47Z
---

<div class="entry-lead">两个相互耦合的量子比特不再是"各算各的账"：把对方激发与否计入后，每个比特的频率都会被对方的态微小修正。这一交叉克尔修正——$ZZ$ 相互作用 $\zeta$——量度 $|11\rangle$ 态能量偏离两比特能量之和的程度。它是双刃剑：作为残余串扰，它要在 100 ns 量级的门时间里压到 $2\pi\times100\ \mathrm{kHz}$ 以下才能让退相干主导误差；作为资源，把它调到 $2\pi\times5\ \mathrm{MHz}$ 就能以 $t_g=\pi/\zeta$ 实现绝热 CZ 门。Fors 等人对"两固定频率 transmon + 磁通可调耦合器"这一标准架构给出了从直觉图像到五阶微扰再到精确对角化的完整机制分解：一切都可以还原为能级排斥的排列与平衡。</div>

## 定义与工程基准

对一对经某种媒介耦合的比特，裸哈密顿量里 $|11\rangle$ 的能量恰好等于 $|01\rangle$ 与 $|10\rangle$ 能量之和；耦合 $V$ 通常会破坏这个等式。在对角化的 dressed 哈密顿量中，多出来的那一项就是 ZZ 相互作用

$$
\zeta = E_{11}' - E_{10}' - E_{01}' + E_{00}',
$$

其中 $E_{ij}'$ 是总哈密顿量的本征能量（含高激发态的贡献）；它等价于哈密顿量中正比于 $\sigma_z\otimes\sigma_z$ 的项，故称交叉克尔项。时变参数下 $\zeta=\zeta(t)$ 给出动态 ZZ。

**它要多小才够小？** 设想执行一个 iSWAP 门而系统带有残余 ZZ。ZZ 只给 $|11\rangle$ 积累相位 $\phi_\zeta=\int_0^{t_g}\zeta(t')\mathrm{d}t'\equiv\bar\zeta t_g$，平均门保真度为

$$
F = 1 - \frac{3}{10}\left[1-\cos(\bar\zeta t_g)\right] \approx 1 - \frac{3}{20}(\bar\zeta t_g)^2 .
$$

把它与非相干误差（$F = 1 - \frac{d}{2(d+1)}t_g\sum_k(\Gamma_1^{(k)}+\Gamma_\phi^{(k)})$，$d=4$）对齐，得到等效基准

$$
\bar\zeta = \sqrt{\frac{16}{3\,t_g T_1}} :
$$

取 $t_g=100\ \mathrm{ns}$、$T_1=100\ \mu\mathrm{s}$，**残余 ZZ 必须低于约 $2\pi\times100\ \mathrm{kHz}$**，弛豫才是主导误差源。

**它要多大才够用？** 绝热 CZ 门需要 $\phi_\zeta=\pi$，即 $t_g=\pi/\bar\zeta$；100 ns 的 CZ 要求 $\bar\zeta=2\pi\times5\ \mathrm{MHz}$。两式合起来给出设计目标：**ZZ 必须能在 $2\pi\times100\ \mathrm{kHz}$ 与 $2\pi\times5\ \mathrm{MHz}$ 之间受控切换**——这正是磁通可调耦合器架构的使命。

## 架构与有效哈密顿量

![[assets/figures/zz-coupling/fors2024-fig1-circuit.jpg]]
*标准可调耦合器架构：两个固定频率 transmon 比特（蓝、绿）之间同时存在直接电容耦合 $g_{12}$ 与一个磁通可调的耦合器 transmon（橙）；$g_{13}$、$g_{23}$ 为比特-耦合器耦合。有效哈密顿量在保留三谐振子非谐性的前提下把每个 transmon 近似为非简谐振子。图源：Fors et al. (2024), Fig. 1。*

把每个 transmon 近似为非简谐振子后，系统由频率 $\omega_i$、非谐性 $\alpha_i<0$ 与三个耦合强度 $g_{12},g_{13},g_{23}$ 完全刻画。有效哈密顿量**守恒总激发数宇称**：把耦合边画成图（哈密顿顿图表示），激发数为偶的子空间与奇子空间解耦——这决定了哪些耦合能参与主导机制。

## 直觉图像：九条能级排斥与 24 种构型

耦合把避免交叉引进能谱，表现为虚构的"能级排斥"。排斥的方向由参与能级的排序（裸失谐 $\Delta_{ij}$ 的符号）决定、强度随耦合增大/失谐减小而增大。作用于定义 $\zeta$ 的四个能量（$|000\rangle,|010\rangle,|100\rangle,|110\rangle$）上的**主排斥共九条**——例如 $|002\rangle$ 对 $|110\rangle$ 的排斥要经过 $|101\rangle$、$|011\rangle$ 中介（高阶排斥）。

![[assets/figures/zz-coupling/fors2024-fig3-level-repulsions.jpg]]
*九条主能级排斥：(a) 二能级系统 $|010\rangle$–$|100\rangle$ 的避免交叉（本征能级偏离裸能级）；(b) 哈密顿图上作用于 ZZ 四能量的排斥（黑箭头），$|002\rangle$ 的排斥经 $|101\rangle$、$|011\rangle$ 中介；(c) 能级图表示与两个"平衡构型"示例——第一激发子空间里的排斥对 ZZ 贡献符号相反，平衡的排斥排列预言零 ZZ 参数区。图源：Fors et al. (2024), Fig. 3。*

在 $\omega_1>\omega_2$、负且相等的非谐性、$\omega_i\gg|\alpha|$ 三个合理假设下，三个最低激发流形的能级排序只有 **24 种构型**（11 种 $|\Delta_{12}|<|\alpha|$、13 种 $|\Delta_{12}|>|\alpha|$，再乘上耦合器频率的排序）——把无穷参数空间折叠成有限个区域。逐构型检查排斥的平衡：

- **9 个构型**中来自比特态（$|200\rangle,|020\rangle$）的排斥可以被含耦合器激发的态（$|001\rangle,|011\rangle,|101\rangle,|002\rangle$）的排斥抵消——潜在零 ZZ 区；
- 其余 15 个构型排斥失衡，多数正排斥积累出正 ZZ（反之负）；
- **最强 ZZ** 出现在把尽可能多的排斥同向排列时：$|\Delta_{12}|<|\alpha|$ 且耦合器频率低于两比特（$\Delta_{13},\Delta_{23}<0$），贴近 $\omega_3'\to0^-$ 的极点。

![[assets/figures/zz-coupling/fors2024-fig4-intuitive-map.jpg]]
*直觉图像的预测地图：横轴为相对平均比特频率的平移耦合器频率 $\omega_3'=\omega_3-(\omega_1+\omega_2)/2$、纵轴比特失谐 $\Delta_{12}$；黑实线为构型边界（共振条件 $\Delta_{ij}=0$），白区为 9 个可能的零 ZZ 构型、蓝/橙为负/正 ZZ、深橙为最强 ZZ 区。图对 $\Delta_{12}\to-\Delta_{12}$ 对称。图源：Fors et al. (2024), Fig. 4。*

## 机制图像：Schrieffer–Wolff 图形学的粗粒化

直觉图像假设排斥可加、不计大小。Schrieffer–Wolff 变换把 $\zeta$ 展开为系统参数的微扰级数，并用图形规则逐阶求值；把共享参数依赖的子序列归并为"机制"，级数被粗粒化为**六项**：四条**关联能级排斥**（按 $\Delta_{12}$、$\Delta_{13}$、$\Delta_{23}$ 关联，例如 $|100\rangle$ 受 $|010\rangle$ 的排斥与 $|110\rangle$ 受 $|020\rangle$ 的排斥共享 $1/\Delta_{12}$ 型依赖、对 ZZ 贡献反号）、一条来自 $|002\rangle$ 的**收缩二阶排斥**、以及**三环机制** $\zeta_3$。后者线性于耦合之积：

$$
\zeta_3 \propto \frac{g_{12}\,g_{13}\,g_{23}}{\Delta_{12}\Delta_{13}}\ (\times\ \text{高阶修正}),
$$

在浮置 transmon 中任一耦合变号即可翻转 $\zeta_3$ 的符号而其余机制不变——一个纯符号设计旋钮。

![[assets/figures/zz-coupling/fors2024-fig6-mechanisms.jpg]]
*激发守恒机制的解析预测（$g_{13}=g_{23}$、$g_{12}=g_{13}/30$、$\alpha_i=3g_{13}$）：(c)–(f) 逐机制贡献，(a) 四条关联排斥与二阶排斥之和，(b) 加上三环机制后的总 $\zeta$。两类零 ZZ 区清晰可见——能级排斥型（依赖 $|002\rangle$ 排斥实现平衡）与三环型（水平带内由 $\zeta_3$ 抵消）；最强 ZZ 在水平带内逼近极点 $\omega_3'\to0^-$（非微扰区，只能数值处理）。图源：Fors et al. (2024), Fig. 6。*

**控制旋钮**：耦合器非谐性 $\alpha_3$ 横移极点 $\omega_3'=-\alpha_3$、从而移动能级排斥型零 ZZ 区的位置（$|\alpha_3|$ 增大时该区向更大 $\omega_3'$ 延伸）；比特直接耦合 $g_{12}$ 平移三环型零 ZZ 区——$g_{12}$ 增大时向 $\omega_3'=0$ 靠拢并与排斥型区合并，变负后区域绕到负半平面。非激发守恒机制与五阶修正把预测进一步补全：在远离极点的区域它们只是小修正，两种零 ZZ 区的拓扑保持。

## 数值验证与设计流程

精确对角化电路哈密顿量验证了解析机制图像：两类零 ZZ 区与强 ZZ 区的位置预测均吻合（贴近极点处微扰失效，数值给出定量答案）；收敛性要求每个 transmon 子空间保留足够电荷态数与总激发数截断。设计流程因此是：用 24 构型地图与机制分解圈定零/强 ZZ 参数区 → 用 $\alpha_3$、$g_{12}$（以及浮置比特的耦合符号）把工作点安放到目标区域 → 磁通脉冲在"关"（$<2\pi\times100\ \mathrm{kHz}$）与"开"（$2\pi\times5\ \mathrm{MHz}$ 量级）之间切换执行绝热 CZ。三维腔构型中 ζ 还可由解析全波方法（偶极天线理论 + 本征值组合）闭式算出，见[[circuit-qed/analytical-3d-cqed|三维 cQED 全波解析解]]词条；大规模阵列中邻近比特态对 g 与 ζ 的修正则由张量网络（MTDMRG-X）直接在多体本征态上提取，见该词条"大规模分支"一节。

## 与其他概念的关系

- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：ZZ 的载体与高激发态来源——非谐性 $\alpha_i$ 决定构型边界与极点位置。
- [[superconducting-qubits/floquet-anisotropic-transverse-interactions|横向各向异性相互作用的 Floquet 工程]]：与纵向 ZZ 互补的调控目标——可调耦合器上的边带驱动合成任意配比的 XX/YY 横向相互作用，服务量子模拟而非门串扰抑制。
- [[superconducting-qubits/real-time-qec-decoding|实时低延迟量子纠错解码]]：容错速度预算反过来约束 ZZ 工程——CZ 门保真度是稳定性实验逻辑错误率的主要器件瓶颈之一。
- [[superconducting-qubits/spin-locked-qubit|自旋锁定量子比特]]：其两比特门方案（绝热 ZZ 门）直接消费本词条的机制分解——零 ZZ 区即闲置工作点的候选。
- [[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]：总线架构中 ZZ 作为"残余耦合"出现（该词条"扩展能力与代价"一节）；谐振腔诱导相位（RIP）方案还能把可控 ZZ 推广到亚米级距离，见该词条"谐振腔诱导相位的长程 ZZ"一节。
- [[readout-measurement/dispersive-readout|色散读出]]与[[readout-measurement/readout-crosstalk|读出串扰]]的近亲：ZZ 本质是两个 $\chi$ 型态依赖频移的卷积，与色散移共享物理；多比特频繁分复用时残余 ZZ 是系统级串扰源。
- [[superconducting-qubits/fluxonium-qubit|Fluxonium]]等正非谐性体系：机制集合不变，只是第二激发子图的构型增多——直觉图像可直接扩展。

## 参考文献

- Fors, S. P., Fernández-Pendás, J., Frisk Kockum, A. Comprehensive explanation of ZZ coupling in superconducting qubits (2024). arXiv:2408.15402（QAtlas 缓存：2408.15402）。
- 长程可控 ZZ 的谐振腔诱导相位实现：Deng, X. et al. *Physical Review Letters* 134, 020801 (2025). DOI: 10.1103/physrevlett.134.020801；arXiv:2408.16617（QAtlas 缓存：2408.16617），另见[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]词条。
