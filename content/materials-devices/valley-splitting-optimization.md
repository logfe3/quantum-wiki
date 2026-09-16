---
title: 谷劈裂外延剖面优化
description: 把 Si/SiGe 量子阱内 Ge 浓度剖面的设计形式化为带约束的变分优化问题，用伴随态梯度与谱约束直接搜索"确定性增强、低无序涨落"的可靠大谷劈裂构型。
aliases:
 - 谷劈裂优化
 - 外延剖面优化
 - valley splitting optimization
 - modulated wiggle well
 - 调制摆动阱
tags:
 - 材料与器件
 - 硅
 - 谷劈裂
 - 优化设计
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvkpqn6jqbrzfp6f8zaewe
source_updated: 2026-08-27T18:38:10Z
---

<div class="entry-lead">摆动阱、Ge 尖峰、窄阱这些提高[[fundamentals/valley-splitting|谷劈裂]]的异质构建议此前都是"手工启发式"：给出一个参数化剖面，再逐例模拟其效果。Thayil 等人把这些设计统一为一个带约束的变分优化问题——以谷间耦合的确定性分量与合金无序分量为目标函数，用伴随态法计算梯度、用谱约束排除外延上不可实现的短周期解，让算法自己"长出"最优剖面。主要产物是调制摆动阱：它同时超越常规摆动阱的确定性与可靠性，还附赠 200 µeV 到超过 1 meV 的电场可调范围。</div>

## 从启发式设计到变分优化

Si/SiGe 量子阱里，谷间耦合矩阵元可以被阱内的 Ge 浓度剖面 $X(z)$ 剪裁。文献中已有一系列启发式构型：摆动阱、锐界面、Ge 尖峰、窄阱与均匀 Ge 掺杂——每个构型都以特定方式同时影响谷间耦合的**确定性分量**与**无序分量**。本词条介绍的路线（Thayil et al. 2025）不再预设剖面形状，而是把总剖面写成固定量子阱形状加待优化修正

$$
X(z) = X_\mathrm{QW}(z) + x(z),
$$

其中 $X_\mathrm{QW}(z)$ 是平滑台阶状的基准阱剖面，$x(z)$ 是自由形状的优化变量；剖面通过导带偏移 $\Delta E_c = 0.5\ \mathrm{eV}$ 进入纵向单谷哈密顿量，决定基态包络波函数 $\psi_0(z)$。

## 目标函数：确定性分量、无序分量与 Rice 分布

优化的"货币"是谷间耦合参数的统计分解。缓变包络+一阶简并微扰给出 $\Delta = \Delta_\mathrm{det} + \Delta_\mathrm{rand}$：确定性部分来自平均势，无序部分来自 Ge 原子随机占位的二项式涨落。大量格点贡献的中心极限定理使 $\Delta$ 服从复正态分布，于是谷劈裂

$$
E_\mathrm{VS} = 2|\Delta| \sim \mathrm{Rice}\!\left(\nu = 2|\Delta_\mathrm{det}|,\ \sigma^2 = 2\Gamma\right)
$$

服从 Rice 分布：$\nu$ 是确定性分量（无序消失时的谷劈裂），$\Gamma=\langle|\Delta_\mathrm{rand}|^2\rangle$ 是无序分量的方差，决定器件间涨落。两者之比用**确定性分量比**量化：

$$
Q = \frac{2|\Delta_\mathrm{det}|}{\langle E_\mathrm{VS}\rangle},\qquad \zeta = \frac{|\Delta_\mathrm{det}|}{\sqrt{2\Gamma}},\qquad Q = 2\sqrt{\tfrac{2}{\pi}}\,\frac{\zeta}{f(\zeta^2)},
$$

其中 $f(x)=\mathrm{e}^{-x}\left[(1+2x)I_0(x)+2xI_1(x)\right]$，$I_\nu$ 是第一类修正贝塞尔函数。$Q\to1$ 表示逐器件可复现；$\zeta\approx0.3507$ 时 $Q=1/2$，确定性分量与无序分量贡献相当——这条 $\nu/\sqrt{2\Gamma}=0.3507$ 分界线把参数空间切成"确定性增强区"与"无序主导区"（后者正是均匀 Ge 掺杂阱里低劈裂热点仍在的原因，见[[materials-devices/silicon-sige|Si/SiGe 异质结]]）。

三个正向优化目标据此定义（$E_\mathrm{ref}=1\ \mathrm{meV}$ 仅作无量纲化）：

- **(A) 最大化确定性分量**：$J_0^{(A)} = E_\mathrm{ref}/\nu$；
- **(B) 可靠增强**：$J_0^{(B)} = \sqrt{2\Gamma}/\nu = 1/(2\zeta)$，同时压低无序、抬高确定性，等价于最大化 $Q$；
- **(C) 最小化无序分量**：$J_0^{(C)} = \sqrt{2\Gamma}/E_\mathrm{ref}$，直接压制涨落。

## 约束与谱约束：让解保持外延可行

总代价泛函 $J = J_0 + J_1 + J_2 + J_3 + J_4$ 把目标与四类约束加在一起：$J_1$ 用伴随波函数 $\chi(z)$ 作空间分布的拉格朗日乘子，强制 $\psi_0$ 是含 $x(z)$ 的薛定谔问题的基态；$J_2$ 用乘子 $\kappa$ 保证波函数归一化；$J_3$ 惩罚越出 $[0, X_b]$（$X_b=0.3$）的局域 Ge 浓度；$J_4$ 把阱内平均 Ge 浓度钉在预算 $x_\mathrm{Ge}$ 上——优化变成"在固定 Ge 预算内如何分布"的问题。

最关键的发明是**谱约束**。无约束优化几乎总收敛到 $2k_0$ 短周期摆动阱（周期 $\pi/k_0\approx2.4$ 单层，接近原子层厚度，外延无法生长）。为排除这类解，把代价泛函中的剖面替换为低通滤波后的版本

$$
x(z)\ \longrightarrow\ \tilde{x}(z) = \Xi(z)\,(K*x)(z),\qquad K(k) = \Theta(k_c - |k|),
$$

其中 $\Xi(z)$ 是量子阱指示函数（抑制滤波振铃泄出阱外），$K$ 是矩形低通滤波器，截止波数 $k_c$ 表征外延设备可实现的最高调制频率。梯度按相反顺序（先乘指示函数再滤波）获得；作者特别指出只滤梯度不滤泛函会造成函数—梯度失配、破坏收敛。数值上用 L-BFGS 加 Wolfe 线搜索最小化，从平坦剖面出发，罚参数 $\beta$ 从 $10^4$ 渐增到 $10^6$。

## 优化出的构型

![[assets/figures/valley-splitting-optimization/thayil2025-fig2-optimized-profiles.jpg]]

*Ge 预算固定 $x_\mathrm{Ge}=5\%$ 时变分优化的解族：四列分别为外延 Ge 剖面、$\bar F=5\ \mathrm{mV/nm}$ 下的势能与基态包络、乘积函数 $S(z)$ 的功率谱密度（PSD）、以及谷间耦合参数 $\Delta$ 在复平面的统计分布。目标 (A)/(B) 收敛到主波数近 $2k_1$ 的调制摆动阱，目标 (C) 给出窄阱，降低截止波数 $k_c=0.07\times2\pi/a_0$ 后目标 (A) 给出 Ge 尖峰；最下排为常规 $2k_1$ 摆动阱对照。图源：Thayil et al. (2025), Fig. 2。*

在 $k_c = 0.5\times2\pi/a_0$ 下，目标 (A) 与 (B) 都收敛到**调制摆动阱**：主导波数在 $2k_1$ 附近，

$$
k_1 = \frac{2\pi}{a_0}(1-\varepsilon_{zz}) - k_0 \approx 0.1694\times\frac{2\pi}{a_0},\qquad \lambda = \frac{\pi}{k_1}\approx 1.6\ \mathrm{nm}\approx 11.8\ \mathrm{ML},
$$

即由谷极小到（应变的）布里渊区边界的倒空间距离决定的长周期（$k_0=0.8394\times2\pi/a_0$，$a_0=0.543\ \mathrm{nm}$，$\mathrm{ML}=a_0/4$）。它与常规正弦摆动阱的差别在于振幅沿 $z$ 被非对称地调制以匹配电场压出的波函数分布：包络被拉伸到铺满整个阱域，与 Ge 调制的重叠最大化，共振被最优地激发——这一点直接体现在乘积函数

$$
S(z) = \left(\Delta E_c\, X(z) + U_F(z)\right)\psi_0^2(z)
$$

的 PSD 在 $2k_1$ 处的强峰上。目标 (C) 则给出**窄阱**：把 Ge 堆积成下界面附近的平台，电子被局域在无 Ge 的窄段里，与 Ge 原子的重叠减小、涨落被压低（$Q=0.85$、$\zeta=0.9$，确定性增强偏弱）。把 $k_c$ 压到 $0.07\times2\pi/a_0$ 以封锁 $2k_1$ 共振后，目标 (A) 给出**Ge 尖峰**：上界面下方约 3 nm 处的单个 Ge 峰，靠势与波函数的高阶效应间接激发 $2k_1$ 共振，但与 Ge 富集区的强重叠也带来大的无序分量。

**反向目标**同样有信息量：最小化确定性分量 (D) 给出（近）均匀 Ge 分布——其 PSD 在 $2k_1$ 处有尖锐凹陷，谷劈裂完全由无序贡献，这从优化角度解释了为什么均匀 Ge 阱平均劈裂抬高却仍是"热点温床"；最大化无序分量 (E) 给出波函数重叠区 Ge 加浓的剖面（窄阱的镜像）；最大化 Rice 分布方差 (F) 给出带非零基线 Ge 的摆动阱型结构。

![[assets/figures/valley-splitting-optimization/thayil2025-fig6-regime-comparison.jpg]]

*各优化构型在 $\nu$–$\sqrt{2\Gamma}$ 平面上的位置（Ge 预算 5%）：虚线 $\nu/\sqrt{2\Gamma}=0.3507$（对应 $Q=0.5$）分隔无序主导区与确定性增强区。目标 (A)/(B) 的调制摆动阱深入确定性增强区且优于常规摆动阱；窄阱只有弱确定性增强；反向目标 (D)/(E) 的解深陷无序主导区。对照还给出阱内无 Ge、界面平滑（0.5 nm）与锐利（0 nm）的常规量子阱位置。图源：Thayil et al. (2025), Fig. 6。*

## 电场可调性：从 200 µeV 到 1 meV 的开关

![[assets/figures/valley-splitting-optimization/thayil2025-fig4-field-tunability.jpg]]

*平均谷劈裂 $\langle E_\mathrm{VS}\rangle$ 随垂直电场 $F$ 的变化（同样 5% Ge 预算）：非对称的调制摆动阱与 Ge 尖峰表现出强且非对称的场依赖（阴影为 Rice 分布 [25%, 75%] 分位带），可在高、低劈裂区间之间电学切换；常规摆动阱只有微弱且 $F\to-F$ 对称的依赖。场灵敏度 $\partial\langle E_\mathrm{VS}\rangle/\partial F$ 在设计场 $F_\mathrm{opt}=5\ \mathrm{mV/nm}$ 附近达到峰值；下方两排剖面显示波函数随场强被压入（或移出）Ge 富集段，非对称剖面的不同部分在高、低劈裂区间被分别探测。图源：Thayil et al. (2025), Fig. 4。*

调制摆动阱的剖面非对称性带来一个意外的工程红利：$\langle E_\mathrm{VS}\rangle$ 从大负场下的约 $200\ \mu\mathrm{eV}$ 连续调到大正场下的超过 $1\ \mathrm{meV}$，且全程确定性分量占主导（灵敏度峰值在设计场 $F_\mathrm{opt}=5\ \mathrm{mV/nm}$ 附近）。机理是波函数的限域位置随电场移动——大负场下波函数不触碰 Ge 富集调制、结构表现得像普通平滑界面阱；大正场下波函数只压在最富 Ge 的区段上。作者指出这种宽范围可调性可用于按需切换高低谷劈裂：例如在两比特门或读出前压低声子辅助的谷弛豫速率、或在执行前确保确定的谷态（与[[qubit-control/spin-decoherence|自旋退相干]]中谷激发通道的控制互补）；对依靠能级劈裂调谐的[[qubit-control/hybrid-qubit|杂化量子比特]]也有潜在用途。宽范围场调谐需要背栅等先进器件设计支持。

## 与其他概念的关系

- [[fundamentals/valley-splitting|谷劈裂]]：本词条的物理对象；其"统一理论"一节给出这里所用 Rice 统计、$2k_1$ 共振与剪切应变机制的解析框架（应变设定为 $\varepsilon_\parallel=1.14\%$、$\varepsilon_\perp=-0.88\%$、沿 [110] 剪切应变 $0.1\%$，经经验赝势进入 Bloch 因子）。
- [[materials-devices/silicon-sige|Si/SiGe 异质结]]：优化所设计的外延层 stack 本身；均匀 Ge 掺杂（Tunnel Falls 路线）在此框架中被判为无序主导区的解。
- [[materials-devices/laser-annealing-contacts|激光退火欧姆接触]]：优化的剖面以单层精度定义，后续工艺必须保住它不被热预算抹平。
- [[qubit-control/spin-decoherence|自旋退相干]]与[[qubit-control/hybrid-qubit|杂化量子比特]]：场可调谷劈裂的两个应用出口。
- 计算层面，剖面优化所依赖的包络函数模型本身的适用性与参考能唯一性问题，见谷劈裂词条"非局域多谷包络函数理论"一节。

## 参考文献

- Thayil, A., Ermoneit, L., Schreiber, L. R., Koprucki, T., Kantner, M. *Optimization of Si/SiGe Heterostructures for Large and Robust Valley Splitting in Silicon Qubits* (2025). arXiv:2512.18064（QAtlas 缓存：2512.18064）。
- 统一理论基础（Rice 统计、$2k_1$ 共振与剪切应变解锁）：Thayil, A., Ermoneit, L., Kantner, M. *Theory of Valley Splitting in Si/SiGe Spin-Qubits: Interplay of Strain, Resonances and Random Alloy Disorder*. *Physical Review B* (2025). DOI: 10.1103/4sdz-f9cr；arXiv:2412.20618（QAtlas 缓存：2412.20618），另见[[fundamentals/valley-splitting|谷劈裂]]词条参考文献。
