---
title: Wigner 分子
description: 低密度限域电子因库仑排斥自组织成空间分立的"电子晶体"：拉长量子点中相继形成单链、zig-zag 链与多链结构，谷同位旋与对称性恢复把硅器件的具体物理带入这一经典图像。
aliases:
 - Wigner 分子化
 - Wigner 晶体
 - Wigner molecule
 - zig-zag 链
 - 电子晶体化
tags:
 - 量子点基础
 - 多电子物理
 - 电子关联
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgdccbr0qesxaqpg49wpn
source_updated: 2026-09-05T21:00:32Z
---

<div class="entry-lead">把电子密度压到足够低——相互作用能远超动能——电子会自发排开成空间分立的格子：这就是 Wigner 结晶，在小量子点里表现为有限尺寸版的"Wigner 分子"。在硅拉长量子点（比特间耦合线的原型）里，逐个加电子能看到链结构相续出现：先是一维单链，再多几个电子折成 zig-zag，再往上是并排的双链——链总是从方形端部的电荷积累处"长"出来。</div>

## 物理图像：从 CI 模型到电子晶体

[[fundamentals/constant-interaction-model|常相互作用模型]]把电子当纯经典电容网络处理，在充电能主导的区间够用；但相互作用继续升高（无量纲耦合 $\kappa$ 增大、或密度降低使 $r_s$ 增大）时，电子的空间分布本身开始重组——动能尽量弥散、库仑排斥尽量远离的折中使电子局域在分立位置上，形成"分子"式的电荷构型。[[fundamentals/semiconductor-quantum-dot|量子点]]中的 Wigner 分子化因此是**超越 CI 的第一个结构化多体效应**：加电子能不再平滑增加，电荷密度出现可与扫描探针成像对比的分立峰。

在一维极限（拉长量子点、准一维量子线）里，Wigner 分子呈现链式构造：单链 → zig-zag 双排 → 三排……相变位置由横向约束强度与电子数共同决定，与无限长线中经典点电荷的平衡构型（著名的一维 zig-zag 转变）同族，但**有限长度的方形端部**迫使电荷先在两端积累、链从边缘向内生长。

## 硅拉长量子点的计算方法（va-UHF + 宇称恢复）

Goldberg 等人发展的**谷增强非限制性 Hartree-Fock（va-UHF）**针对硅的两个复杂性：导带双谷（把谷当**同位旋**处理，与自旋并列为四重自由度：自旋 × 谷 × 轨道）与强关联。非限制性 HF 允许对称性破缺的解，通过推广到自旋+谷同位旋的自洽 **Pople-Nesbet 方程**迭代求解，可处理数十个电子。

![[assets/figures/wigner-molecule/goldberg2024-fig1-eqd-confinement.jpg]]

*拉长量子点的限域势：仿照实验制备的硅结构构造的"长艇-维京"型总限域势 U——纵向拉长、横向简谐约束（ħω_y）、方形端部，是量子比特间准一维耦合线的原型几何。图源：Goldberg et al. (2024), Fig. 1。*

破缺解之后必须做量子力学要求的**对称性恢复**：对与哈密顿量对易的纵向 y-宇称做投影，

$$
|\Psi\rangle \propto (1 + \hat{P}_y)\,|\Psi_{\mathrm{UHF}}\rangle,
$$

其中 $\hat P_y$ 是关于长轴的宇称算符、$|\Psi_{\mathrm{UHF}}\rangle$ 是破缺对称的单行列式解。投影后的态是破缺解的纠缠叠加，计算代价极小却给出实质改进——恢复后的 Wigner 分子链中 zig-zag 的左右不对称被抹平，电荷分布给出真正的**纠缠**分子构型而非经典折线。

## 链结构相图

![[assets/figures/wigner-molecule/goldberg2024-fig3-charge-density-chains.jpg]]

*UHF 基态电荷密度（N=4–18，硅 EQD ~110 nm 长、ħω_y=2.5 meV）：上排为强相互作用（κ=11，硅典型值）——单链 Wigner 分子（N≤5）经 N*=5 转入单 zig-zag 链、N*=11 转入双 zig-zag 链，链从端部电荷积累处发起；下排为无相互作用极限（κ=300）——所有 N 均为单排离域结构、遵从自旋与同位旋泡利填充的 Aufbau 壳层。图源：Goldberg et al. (2024), Fig. 3。*

![[assets/figures/wigner-molecule/goldberg2024-fig4-tighter-confinement.jpg]]

*更强横向约束（ħω_y=10 meV，κ=11）下的电荷密度（N=1–20）：单排结构延续到 N≤11，zig-zag 转变推迟到 N*≈12–14（从两端发起、N=15–20 完全展开），第三排在该范围内尚未出现——横向约束越强、转变越晚。图源：Goldberg et al. (2024), Fig. 4。*

定量规律：

- 相互作用参数取硅典型值 $\kappa=11$（无相互作用对照 $\kappa=300$）；
- $\hbar\omega_y=2.5\ \mathrm{meV}$：单链 $N\le5$ → 单 zig-zag（$N^*=5$）→ 双 zig-zag（$N^*=11$）；
- $\hbar\omega_y=10\ \mathrm{meV}$：单排 $N\le11$ → zig-zag $N^*\approx12$–$14$，第三排需更大 N；
- 链的发起点总在**方形端部**的电荷积累处——有限长度效应，无限长线理论中没有的边界条件。

## 与量子信息与实验的接口

拉长量子点是比特间信息传输线（量子总线）的原型，多电子 Wigner 链的构型直接决定其输运与激发谱；对称性恢复态的纠缠性质则是把"经典折线"提升为量子资源的入口。作者指出这类结构适合未来的**成像显微实验**（扫描单电子显微术直接看电荷密度），也适用于其他材料（TMD 一维畴壁）。谷同位旋使硅的 Wigner 分子比砷化镓多一重内部分类——链上每个位置还可携带谷标记，与[[fundamentals/valley-splitting|谷劈裂]]工程直接耦合。

## 与其他概念的关系

- [[fundamentals/constant-interaction-model|常相互作用模型]]：CI 是无结构电容网络近似；Wigner 分子是相互作用继续增强后的第一个结构化多体态——峰间距统计失效的另一面；
- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]：Wigner 分子化的宿主与成像对象；
- [[fundamentals/valley-splitting|谷劈裂]]：谷同位旋参与壳层填充与链构型分类；
- [[scaling-automation/quantum-dot-array|量子点阵列]]：阵列模拟中"强关联 vs 集总电容"的两端，Hubbard 区与 Wigner 区的分界即 r_s 判据；
- [[fundamentals/charging-energy|充电能]]：Wigner 化使加电子能携带构型信息，超出平滑 CI 序列；
- [[qubit-control/resonant-exchange-qubit|共振交换量子比特]]等三量子点编码：多电子点的轨道-自旋结构是其能谱基础。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| EQD 长度 | ~110 nm（仿实验硅结构） | Goldberg 2024 |
| 相互作用参数 | κ = 11（硅典型）；无相互作用对照 κ = 300 | Goldberg 2024 |
| 横向约束 | ħω_y = 2.5 / 10 meV 两档 | Goldberg 2024 |
| 链相变（2.5 meV） | 单链 N≤5；单 zig-zag N*=5；双 zig-zag N*=11 | Goldberg 2024 |
| 链相变（10 meV） | 单排 N≤11；zig-zag N*≈12–14；第三排需更大 N | Goldberg 2024 |
| 可算电子数 | 数十个（va-UHF+投影恢复） | Goldberg 2024 |

## 参考文献

- Goldberg, A., Yannouleas, C., Landman, U. Electronic Wigner-Molecule Polymeric Chains in Elongated Silicon Quantum Dots and Finite-Length Quantum Wires. *Physical Review Applied* 21, 064063 (2024). DOI: 10.1103/PhysRevApplied.21.064063；arXiv:2406.05886（QAtlas 缓存：2406.05886）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
