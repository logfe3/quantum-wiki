---
title: 人工巨原子
description: 在多个相隔可比光子波长的点上耦合到波导的人工原子：路径相位干涉使环境耦合可设计——次/超辐射、暗态保护与频率-功率选择性滤波，把比特寿命延长一个量级而不牺牲读出速度。
aliases:
 - 巨原子
 - giant atom
 - 巨原子约瑟夫森量子滤波器
 - giant-atom JQF
 - 波导量子电动力学
tags:
 - 电路量子电动力学
 - 波导 QED
 - Purcell 保护
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgzcs5xjanmkykv5ewe5q
source_updated: 2026-09-04T16:54:46Z
---

<div class="entry-lead">普通"小原子"在波导上只占一个点，比波长小得多；**巨原子**在多个点上耦合波导、点间距离与光子波长相仿——从各耦合点出发的发射一路干涉，环境耦合从此变成可设计的干涉仪。把一只频率可调的 transmon 做成巨原子放在比特的读出/控制波导上，它就成了一只"量子滤波器"：对比特衰变发出的单光子全反射，对读出与控制的强信号视而不见——比特寿命延长十倍，读出速度分毫不损。</div>

## 物理图像：当原子"大"过波长

波导 QED 里的人工原子通常是点状耦合：衰减率、反射谱都由单点耦合强度一次性决定。**巨原子**（giant atom）把同一原子经 $N$ 个耦合点接到波导、点间距与传输光子波长可比——从不同点发射的波积累不同相位，相长或相消由几何直接控制。两点耦合的基本相位量是

$$
\phi = \omega\,\Delta x / v_p,
$$

其中 $\omega$ 是光子角频率、$\Delta x$ 是（耦合点到参考点的）波导距离、$v_p$ 是波导相速度。这给出一族可设计的干涉态：

- **超辐射**：$\phi = n\cdot2\pi$——两点发射相长，等效环境耦合增强；
- **次辐射**：$2\phi=(n+\tfrac12)\cdot2\pi$——发射相消，波导透射完全看不到原子（如同原子在镜前与自身反射像干涉）；
- 波导还介导发射体之间的**交换相互作用** $J_{ij}=2\pi g_i g_j\,\omega\sin\phi$（$g_i$、$g_j$ 是两个发射体与波导模式的单点耦合），$\phi$ 取 $\pi$ 的整数倍时该项归零——两个系统退耦为独立本征体系。

## 巨原子约瑟夫森量子滤波器（JQF）

Hu 等人把这一概念工程化为**巨原子 JQF**：固定频率 transmon 比特经 λ/2 读出谐振腔接到蜿蜒波导中点，频率可调的 transmon 型巨原子对称地在两个点上耦合同一条波导，两点到中点的距离 $\Delta x$ 满足 $\phi=\omega_q\Delta x/v_p=\pi$。三个性质由此涌现：

1. **暗态保护**：把 JQF 调到与比特共振时，波导介导的交换作用因 $\sin\phi=0$ 而消失，而巨原子在比特频率上的**多点反射**把比特激发态变成近似的非衰减暗态——等效于一只无损的窄带反射滤波器立在波导上；
2. **频率选择性**：读出信号频率远离比特/JQF，几乎不受影响——读出谐振腔-波导耦合 $\kappa_r$ 不必为保寿命而妥协（对照：常规[[readout-measurement/purcell-filter|Purcell 滤波器]]方案中 $\kappa_r/2\pi>11\ \mathrm{MHz}$ 时 $T_1$ 被压到 7 µs 以下）；
3. **功率选择性**：巨原子是二能级系统——探针功率超过约 −40 dBm 即饱和失效。控制比特的单比特门信号比 JQF 谱学弱功率高 100 倍以上，自动"穿过"滤波器。

![[assets/figures/giant-atom/hu2024-fig1-giant-atom-jqf.jpg]]

*巨原子 JQF 器件：(a) 伪色显微图——固定频率 transmon 比特（橙）经 λ/2 CPW 读出谐振腔（红）与指状电容接入蜿蜒波导（蓝），频率可调 transmon 型 JQF（粉）在两个分离的点上耦合波导；磁通线（绿）与防俘获磁通孔保证偏置不扰相干。(b) 示意——各率参量与耦合点间距 Δx，满足相位条件 φ=ω_q·Δx/v_p=π。图源：Hu et al. (2024), Fig. 1。*

## 实验结果

![[assets/figures/giant-atom/hu2024-fig3-t1-vs-bias.jpg]]

*比特寿命随 JQF 偏置的变化：(a) 扫描 JQF 偏置电压逐点测 T₁——JQF 调到与比特共振（约 −0.324 V）时寿命显著延长；(b) 最优/最差偏置的对比——T₁ 从 JQF 闲置点（远失谐）的 9.1 µs 延长到工作点的 107 µs，提升超过十倍。图源：Hu et al. (2024), Fig. 3。*

器件本征 Purcell 极限约 9 µs（有效环境耦合 $\kappa_q\approx2\pi\times15\ \mathrm{kHz}$）；JQF 工作时 $T_1$ 从 9.1 µs 达到 **107 µs（>10 倍）**。次辐射谱（$2\phi=3\pi$ 处透射无扰动）与功率饱和特性（−40 dBm 阈值之上幅度/相位特征消失）直接验证了干涉与二能级本质。

![[assets/figures/giant-atom/hu2024-fig4-irb-comparison.jpg]]

*JQF 工作与否的单比特门对比：交错随机化基准（IRB）等门级指标在 JQF 开启时同步改善——环境工程直接转化为门质量。图源：Hu et al. (2024), Fig. 4。*

## 定位与前景

- **vs Purcell 滤波器**：Purcell 滤波器在读出频段导通、比特频段抑制，是固定频域的被动滤波；巨原子 JQF 频率**原位可调**且区分单光子与强信号——当平面 transmon 相干时间迈向 500 µs 以上、而快速读出又要求大 $\kappa_r$ 时，它是突破"改良 Purcell 极限"天花板的主动方案；
- **免量子极限放大器读出**：大 $\kappa_r$ + 巨原子保护的组合让高保真读出不再依赖 JPA/TWPA——对大规模芯片避开带宽与饱和约束有直接意义（对照[[readout-measurement/dispersive-readout|色散读出]]的链路讨论）；
- **桥接 cQED 与波导 QED**：巨原子天然生活在开放波导里，为量子网络的中继、路由与非线性光学接口提供新构件。

## 与其他概念的关系

- [[readout-measurement/purcell-filter|Purcell 滤波器]]：同一问题（保护比特免经读出口衰减）的两代方案——被动频域滤波 vs 可调干涉滤波；
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：比特与巨原子本体都是 transmon——器件谱可调性来自 SQUID 磁通调谐；巨原子的路径相位干涉工具也可用于双比特非互易（相干-耗散平衡方案见[[circuit-qed/superconducting-diode|超导二极管非互易性]]"相干-耗散平衡"一节）；
- [[readout-measurement/dispersive-readout|色散读出]]：巨原子 JQF 保护的对象；读出速度由 $\kappa_r$ 决定而不再被 Purcell 权衡绑架；
- [[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]与[[circuit-qed/strong-coupling|强耦合判据]]：巨原子谱学（超/次辐射）是它们在开放波导中的干涉推广；
- [[circuit-qed/superconducting-diode|超导二极管]]：同为"把新物理元件嵌入 cQED 波导"的方向——一个做非互易路由，一个做选择性滤波。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 相位条件 | φ = ω_q·Δx/v_p = π（JQF 工作点） | Hu 2024 |
| 本征 Purcell 极限 | T₁ ≈ 9 µs（κ_q ≈ 2π×15 kHz） | Hu 2024 |
| JQF 工作时 T₁ | 107 µs（vs 闲置 9.1 µs，>10 倍） | Hu 2024 |
| 功率选择性阈值 | 探针 > −40 dBm 时巨原子饱和（控制信号高 100 倍以上） | Hu 2024 |
| 次辐射条件 | 2φ = (n+1/2)·2π；实测于 ~7050 MHz | Hu 2024 |
| 交换相互作用 | J_ij = 2π·g_i·g_j·ω_q·sin φ（φ=π 整数倍时为零） | Hu 2024 |

## 参考文献

- Hu, J., Li, D., Qie, Y., et al., Frisk Kockum, A., Nori, F., An, S. Engineering the Environment of a Superconducting Qubit with an Artificial Giant Atom (2024). arXiv:2410.15377（QAtlas 缓存：2410.15377）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
