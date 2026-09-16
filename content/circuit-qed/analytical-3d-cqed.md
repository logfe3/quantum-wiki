---
title: 三维 cQED 全波解析解
description: 为"同轴馈电矩形波导腔 + 偶极天线型 transmon"构造的解析量子全波解：用腔微扰论与天线理论闭式给出哈密顿量全部场参数，作为验证黑箱量化/EPR 等数值方法的基准，并揭示各方法的收敛性与效率差异。
aliases:
 - 解析全波量子化
 - 三维 cQED 解析解
 - analytical full-wave cQED
 - mode-matching quantization
tags:
 - 电路量子电动力学
 - 计算方法
 - 三维腔
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvfjs2vrg6hpfc6t145rgy
source_updated: 2026-09-09T00:18:42Z
---

<div class="entry-lead">三维 cQED 器件的建模长期依赖数值量化（黑箱电路量化、能量参与比 EPR），但两类方法都要为每个模式保留大量量子态才收敛，矩阵维度随模式数指数增长；而计算电磁学惯用的"解析解基准"（如散射的 Mie 级数）在 cQED 里一直空缺。Moon 等人设计了一个刻意保持解析可解的几何——同轴馈电的矩形波导腔、transmon 做成电小偶极天线——让哈密顿量的全部场参数都能用腔微扰论与天线理论闭式写出，并与 EPR、数值本征模方法全面对照：场论表述最少 Fock 态即收敛，扫频任务从 28 小时缩到 6 分钟。</div>

## 为什么需要解析解

通用 cQED 数值量化目前主要有两条路线：**黑箱电路量化**用全波仿真求多端口阻抗矩阵、拟合出 Foster 等效电路再量子化——精度与用户介入的曲线拟合相互牵制；**EPR（能量参与比）量化**改用全波本征模分解，免去拟合，但把量子比特非线性当作线性结果的微扰处理，需要每个模式保留大量 Fock 态才收敛。由于哈密顿矩阵维度按 $M^N$（$M$ 为每模式态数、$N$ 为模式数）增长，收敛慢直接限制可分析系统的规模。更尴尬的是：验证新数值方法缺乏参考数据——实验数据受制造精度与不可控因素限制，而传统电磁学里解析解（Mie 级数之于球散射）这条验证路线在 cQED 中不存在。本词条介绍的几何就是为了补上这块基准。

## 解析可解的几何

![[assets/figures/analytical-3d-cqed/moon2024-fig2-cavity-transmon.jpg]]
*解析可解的 3D cQED 系统：矩形波导腔由两根同轴探针馈电，腔内放一只（或两只）transmon——由电小偶极天线（长 1 mm、半径 0.04 mm、端隙 0.102 mm）跨接负载电容 $C_L=50.34\ \mathrm{fF}$ 构成，沿主模电场方向取向、位于腔中央平面。场量子化按模式匹配在子域内解析完成。图源：Moon et al. (2024), Fig. 2。*

系统受到两组设计约束：偶极子长度远小于腔模空间变化尺度（腔模在偶极看来如同平面波，自由空间天线理论公式适用），两 transmon 相距足够远（互耦可忽略）。空腔情形结合量子输入输出理论可解析处理单光子散射，甚至给出 Hong–Ou–Mandel（HOM）双光子干涉曲线——这是计算量子电磁学常用的定性验证探针。

## 哈密顿量场参数的闭式表达

总哈密顿量里需要从几何确定的场参数只有三类，全部有解析式：

**腔模频率** $\omega_k$ 用腔微扰论计算——场量子化流程要求 transmon 不在场中时的频率，因此只需计入同轴探针的微扰。

**transmon 电容**：总电容 $C_\Sigma = C_\mathrm{ant} + C_L$，其中负载电容 $C_L$（结电容 + 集总元件）是设计给定值，唯一需要从几何求的是偶极的几何电容

$$
C_\mathrm{ant} = \frac{\tan(k\ell/2)}{120\,\omega_0\left(\ln(\ell/2r) - 1\right)},
$$

其中 $\ell$ 为偶极长度、$r$ 为偶极圆柱半径、$k$ 为腔内介质波数、$\omega_0$ 为腔基模频率。配合电荷跃迁矩阵元

$$
\langle j|\hat n|j+1\rangle \approx -i\left(\frac{E_J}{8E_C}\right)^{1/4}\sqrt{\frac{j+1}{2}}
$$

（$E_J$、$E_C$ 为约瑟夫森能与充电能），transmon 的本征频率与非谐性即可解析或简单数值求出。

**耦合强度** $g_{k,j}$ 里的空间积分用接收天线的 **Thevenin 等效电路**严格求出：等效电压源的幅度是发射模电流分布 $f_{TX}(\mathbf r)$（电小偶极为三角形分布）对腔场 $\mathbf E_k$ 的加权积分；假设腔场在偶极长度上不变，得

$$
V_{RX} = \frac{1}{2}\,\hat{\ell}\cdot\mathbf E_k(\mathbf r_0)\,\ell,\qquad
V_t = \frac{C_\mathrm{ant}}{C_\mathrm{ant}+C_L}\,V_{RX},
$$

其中 $\hat\ell$ 是沿偶极的单位矢量、$\mathbf r_0$ 为偶极中心——跨在负载电容上的感应电压 $V_t$ 正是 $g_{k,j}$ 需要的量。$C_\mathrm{ant}$ 的公式精度是整个解析解的主要误差源；用自由空间偶极的 FEM 电容替换（9.091→8.035 fF）可大幅改善。

## 色散区参数与本征值组合

哈密顿矩阵在"transmon 自由能态 × 各腔模 Fock 态"的张量积基下写出。色散区（$g_{k,j}/|\omega_k-\omega_{j,j+1}|\ll1$）的实验关键量都由低能本征值组合读出，以两比特两腔模（下标 $ij$ 为比特、$k\ell$ 为腔模）为例：

$$
\chi = E_{1010} - E_{1000} - E_{0010} - E_{0000},\qquad
\zeta = E_{1100} - E_{1000} - E_{0100} - E_{0000},
$$

即 ac Stark 移（比特-腔对）与 [[superconducting-qubits/zz-coupling|ZZ 相互作用]]速率（比特-比特对）——后者与可调耦合器架构中 $\zeta$ 的定义完全同构，这里给出的是解析可算的实现。基态能量被减去以归零。

## 与数值方法的对照

![[assets/figures/analytical-3d-cqed/moon2024-fig8a-convergence-anharmonicity.jpg]]
![[assets/figures/analytical-3d-cqed/moon2024-fig8b-convergence-frequency.jpg]]
*数值收敛性对比（基准为各方法自身 15 Fock 态结果）：非谐性 α 与第一跃迁频率 ω₀₁ 随每模式 Fock 态数的收敛——场论表述（解析或数值本征模输入）在最少态数即收敛，EPR 方法需要大量 Fock 态才收敛。原因在于前者把非线性显式纳入量子比特子系统的分析，后者把非线性当作线性结果的微扰。矩阵维度按 M^N 增长，快速收敛就是可扩展性。图源：Moon et al. (2024), Fig. 8。*

单比特基准（腔中央、$L_J=9.4\ \mathrm{nH}$、两个腔模）：数值本征模法 $\omega_{01}/2\pi=6.44\ \mathrm{GHz}$、$\alpha/2\pi=-379\ \mathrm{MHz}$、$\chi/2\pi=-0.025\ \mathrm{MHz}$；解析解的相对误差分别为 0.84%、−1.92%、−10.38%（EPR 为 0.21%、−4.81%、−2.23%）——对解析解改进偶极电容后误差显著下降。把 transmon 在腔截面内移动扫描 $\chi$ 得到的空间图（三方法一致）还给出适用边界：偶极离腔壁数毫米以内近似才开始失效。

![[assets/figures/analytical-3d-cqed/moon2024-fig10-ac-stark-vs-frequency.jpg]]
*ac Stark 移 χ 随比特频率的扫描（扫 $L_J$=7.420→5.806 nH、另一比特固定 6 GHz）：解析（修正电容后）、数值本征模与 EPR 三法全程吻合；共振尖峰处色散近似失效（曲线断点），两尖峰之间即 straddling 区间。效率对比：51 个频点上，场论法只需一次 3D FEM 本征模计算（~320 s）加 51 次哈密顿对角化（~50 s，共 ~6 分钟）；EPR 每个频点都要重跑 FEM（~320 分钟）加对角化（~1372 分钟），总计超过 28 小时。图源：Moon et al. (2024), Fig. 10。*

![[assets/figures/analytical-3d-cqed/moon2024-fig11-zz-rate-vs-frequency.jpg]]
*双比特 ZZ 速率 ζ 随一只比特频率的扫描（11–12 GHz，另一比特固定 11.5 GHz，经由在两比特位置均有峰的 TE₁₀₂ 模介导）：解析（含修正电容）、数值本征模与阻抗法结果一致，形状与 ac Stark 扫描的理论预期相似。图源：Moon et al. (2024), Fig. 11。*

## 与其他概念的关系

- [[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]：本词条是其三维器件一侧的"建模与验证"基础设施——黑箱量化、EPR 与宏观 cQED 场论三种量化路线的公共基准。
- [[circuit-qed/microwave-resonator|微波谐振腔]]：解析几何的载体是矩形波导腔与同轴探针耦合，其模式与耦合设计见该词条三维腔体一节。
- [[superconducting-qubits/zz-coupling|ZZ 相互作用]]与[[circuit-qed/dispersive-shift|色散频移]]：解析解给出这两个量的闭式/准闭式计算路径与本征值组合定义，可与可调耦合器架构的机制分解互相印证。
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：偶极天线 + 负载电容的 3D transmon 实现是其"天线视角"的定量表述。

## 参考文献

- Moon, S., Na, D.-Y., Roth, T. E. Analytical Quantum Full-Wave Solutions for a 3D Circuit Quantum Electrodynamics System (2024). arXiv:2401.03033（QAtlas 缓存：2401.03033）。
- 对照方法原文：黑箱量化与 EPR 方法的收敛行为讨论见该文引言及其参考文献 [8]–[10]。
