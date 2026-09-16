---
title: 线图格子平带与 cQED 格子
description: 把耦合 CPW 谐振器网络当作人工紧束缚固体：全波模式自然实现布局图的线图，图论定理保证线图谱在 −2 处附带无穷简并平带与紧致局域态；非二部图与受挫跳跃是打开平带带隙的关键，k≥7 双曲镶嵌把平带物理推广到非欧几何。
aliases:
 - 线图格子
 - line graph lattice
 - cQED 格子
 - cQED lattices
 - 人工光子固体
 - 线图平带定理
tags:
 - 电路量子电动力学
 - 平带物理
 - 量子模拟
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qv7ph4gkytk7fqgjpdxc2k
source_updated: 2026-08-24T09:21:47Z
---

<div class="entry-lead">Kollár、Fitzpatrick、Sarnak 与 Houck 的这篇长文是"用超导电路造人工固体"的理论基石：每个 CPW 谐振器是一个格点、微波光子扮演电子，耦合电容在谐振器端点之间产生跳跃。妙处在于硬件几何自动选中一类特殊格子——布局图的**线图**（每个谐振器对应原图的一条边），而图论早已证明：线图的谱恰是原图谱的平移副本加上本征值 −2 处的无穷简并**平带**，其本征态是只覆盖单个 plaquette 的紧致局域态。配上"非二部图必须受挫"的符号物理与柔性谐振器可实现的 k≥7 双曲镶嵌，平带物理从二维欧氏格子被推广到整个常曲率几何谱系。</div>

## 从谐振器网络到图上的紧束缚模型

紧束缚极限下，晶格固体约化为图上的跳跃哈密顿量

$$
H_X = -t \sum_{\langle i, j \rangle} (a_i^{\dagger} a_j + a_j^{\dagger} a_i) = -t\, A_X,
$$

其中 $A_X$ 是图 $X$ 的邻接矩阵、$\langle i,j\rangle$ 遍历近邻对。数学文献惯用图拉普拉斯算符

$$
(\Delta_X \psi)_x = \mathbb{d}(x)\,\psi_x - \sum_{y \in \mathcal{N}_x} \psi_y,
\qquad
\Delta_X = d\,\mathbb{I} + \frac{H_X}{t},
$$

其中 $\mathbb{d}(x)$ 是顶点 $x$ 的度（配位数）、$\mathcal{N}_x$ 是其邻居集。对 $d$-正规图，两者只差常数偏移与标度因子，谱完全等价；此时 $H_X$ 的谱包含在 $[-d, d]$ 内。本文取 $t=-1$ 的约定——这不是任性：超导电路里由电容耦合诱导的跳跃**默认就是负的**。

CPW 谐振器网络把这幅图像变成硬件：谐振器替代在位势、驻波模式函数替代束缚态波函数、光子替代载流电子。端对端耦合电容 $C_c$ 在传输线拉格朗日量分析下给出总哈密顿量中的耦合项，经模式函数消元后得到有效跳跃

$$
t_{i,j} = -\frac{1}{2}\,\omega_0 C_c \times \varphi(i, x_{\mathrm{end}}^{(i)}) \times \varphi(j, x_{\mathrm{end}}^{(j)}),
$$

其中 $\omega_0$ 是谐振频率、$\varphi(i, x)$ 是第 $i$ 个谐振器的归一化驻波模式在端点处的取值——跳跃的**符号**由两个模式函数在耦合电容处同号还是反号决定。由此每个器件对应两个图：**布局图** $X$（每个耦合电容是一个顶点、每个谐振器是一条边）与**有效格子** $X_{\mathrm{eff}}$（每个谐振器是一个格点、共享端点的谐振器相连）——后者在数学上正是 $X$ 的线图 $L(X)$。

![[assets/figures/line-graph-flat-band/kollar2019-fig1-coupling-sign-gauge.jpg]]

*耦合电容处跳跃符号的"规范选择"：上下两行分别为在位模式函数 $\varphi(x)$ 与广义磁通 $\Phi(x)=\psi_i\varphi(x,i)$。全波模式在谐振器两端同号，$t_{i,j}$ 恒为负；半波模式两端反号，符号取决于每个谐振器模式取向的任意选择（规范）——二部图上可以选规范使所有 $t$ 同号，非二部图上必然出现无法消除的符号冲突（受挫跳跃）。图源：Kollár et al., Commun. Math. Phys. (2019)，Fig. 1。*

## s 波与 p 波：两类模式、两种物理

- **全波（s 波）模式** $\varphi(x) = \sqrt{2/cl}\cos(2\pi x/l)$：两端同号，取统一规范后 $t_{i,j}$ 处处相等且为负——无论近邻距离如何涨落，有效格子都是均匀跳跃的**线图**模型。这是最省心的实现。
- **半波（p 波）模式** $\varphi(x) = \sqrt{2/cl}\cos(\pi x/l)$：两端反号。在二部图（如简单方格、六角格）上可以全局选规范让所有耦合电容处同号；但**非二部图**（含奇环，如 kagome）上必然有些环无法闭合符号——跳跃受挫。这种受挫正是打开平带带隙的物理资源。

## 线图定理：平带的图论保证

核心数学事实：线图 $L(X)$ 的谱由原图谱决定——

$$
\sigma\big(A_{L(X)}\big) = \sigma(A_X)\ \text{的平移副本}\ \cup\ \{-2 \text{（无穷简并）}\},
$$

即线图的态密度是原图态密度加一个 $-2$ 处的 δ 函数平带（以 $t=-1$ 约定）。最著名的例子：六角格（石墨烯）的线图是 **kagome 格子**——kagome 的色散带就是六角格的色散带，加上 $-2$ 处的平带。平带本征态是**紧致局域态**（compact localized states）：振幅只分布在一个六边形 plaquette 的六个格点上、按正负交替排列，绕 plaquette 的跳跃相消干涉使其完全不能泄漏——与[[superconducting-qubits/flat-band-localization|平带局域化与 Aharonov–Bohm 笼蔽]]词条中 transmon 阵列观测到的 CLS 是同一族构造。推广同样干净：3-正规树的线图因树无环、平带态变为指数局域（非紧致）；双曲空间中的七角格（heptagon-graphene）的线图——七角-kagome——因奇环太短，最小局域态要覆盖 14 条边的环、跨两个 plaquette。

## 带隙条件与最大带隙

平带要"可用"（相互作用才有唯一的开销通道、有限样品中简并才不被边界抹平），它必须与色散谱隔开一个带隙。论文的判据体系：

- **非二部性是必要条件**：二部图的谱关于 0 对称（粒子-空穴对称），平带必然触及色散谱边缘，无隙；非二部图破坏该对称，谱底可以拉开更大间隙。
- **受挫跳跃是物理实现**：非二部图上 s 波统一规范不存在，半波模式的符号冲突即受挫——几何（图结构）与动力学（跳跃符号）在此绑定。
- **最大带隙**：对 3-正规布局图，原图最小本征值最大可达 $-2$，对应平带上方带隙恰为 1（以 $|t|$ 为单位）；达到该界的图（除有限例外）是 Hoffman 图族，可实现为"3-正规图 → 3,2-双正规细分图 → 线图"的复合构造 $L(\mathbb{S}(X))$——从欧氏 3-正规格出发仍得到欧氏格。

![[assets/figures/line-graph-flat-band/kollar2019-fig8-linegraph-bands.jpg]]

*线图格子的能带结构对比：展示方格等布局图与其线图的色散带及 −2 处平带，平带与色散谱之间的间隙由原图的最小本征值决定——二部布局的平带触及谱边，非二部/受挫布局才能把平带孤立出来。图源：Kollár et al., Commun. Math. Phys. (2019)，Fig. 8。*

## 非欧几何：k≥7 双曲镶嵌

以正 $k$ 边形做 3-正规镶嵌得到图族 $T_k$：$k=3,4,5$ 是球面（柏拉图立体：四面体、立方体、十二面体）；$k=6$ 是欧氏六角格；**$k\geq 7$ 是无限双曲镶嵌**。双曲格子没有 Bloch 理论可用，但图论与 $C^*$-代数方法仍然给出：谱包含在 $[-3,3]$、因双曲性谱远离 $\pm 3$ 两端、至多有限个带隙。线图算符的谱相应落在 $[-2,4]$ 且 $-2$ 处平带谱孤立——**平带物理不依赖欧氏几何**。硬件上，柔性（可弯折）CPW 谐振器让物理布局可以忠实地铺出双曲镶嵌，这是天然材料做不到的。

![[assets/figures/line-graph-flat-band/kollar2019-fig10-modified-kagome.jpg]]

*修饰 kagome 格子：在 kagome（六角格线图）基础上改动布局得到的格子族，包括七角-五角-kagome 等构造——用于演示"3-正规非二部布局 + 线图"如何系统产生带隙最大化的平带格子，以及 k≥7 双曲镶嵌的有效格子。图源：Kollár et al., Commun. Math. Phys. (2019)，Fig. 10。*

## 与其他概念的关系

- [[superconducting-qubits/flat-band-localization|平带局域化与 Aharonov–Bohm 笼蔽]]：理论层（本词条：线图定理、带隙判据、硬件方案）与实验层（该词条：transmon 阵列上平带局域化/退局域化的量子行走观测）互补；紧致局域态是共同的本征态语言。
- [[circuit-qed/microwave-resonator|微波谐振腔]]：CPW 谐振器是格点的物理载体；分布式元件的长波自由度（全波/半波模式）决定了跳跃的符号与"规范"结构。
- [[superconducting-qubits/synthetic-flux-qubit-ring|合成磁通与分数磁通量子]]：同属 circuit QED 量子模拟家族——一个用驱动相位在实空间合成规范场，一个用图结构（线图/受挫）合成平带拓扑。
- [[scaling-automation/thouless-pumping-jja|约瑟夫森结阵列中的 Thouless 量子泵浦]]：超导平台上格点模型量子模拟的另一实现；JJA 走拓扑输运，谐振器格子走平带/相互作用多体物理。
- [[fundamentals/two-dimensional-carrier-gas|二维载流子气]]：天然固体中"人工格子"的对照——谐振器格子的近邻连接不受欧氏嵌入限制，均匀跳跃可在无高对称性的布局中实现。

## 参考文献

- Kollár, A. J., Fitzpatrick, M., Sarnak, P., Houck, A. A. Line-Graph Lattices: Euclidean and Non-Euclidean Flat Bands, and Implementations in Circuit Quantum Electrodynamics. *Communications in Mathematical Physics*. DOI: 10.1007/s00220-019-03645-8；arXiv:1902.02794（QAtlas 缓存：1902.02794）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
