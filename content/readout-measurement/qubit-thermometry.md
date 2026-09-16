---
title: 超导比特温度计
description: 用 transmon 三能级布居分布实现 60–200 mK 平衡态量子温度计：π 脉冲序列交换能级布居、色散读出布居比，配合两浴模型与量子 Fisher 信息精度下界。
aliases:
 - 量子温度计
 - 比特温度计
 - qubit thermometry
 - 布居分布温度计
 - x2 测量
tags:
 - 读出与测量
 - 量子态
 - 低温计量
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgx7q6kzd37r6gae7xawd
source_updated: 2026-09-04T17:33:34Z
---

<div class="entry-lead">把温度"读"成布居数：与热环境达到平衡的 transmon，其 g/e/f 三个能级的占据服从 Boltzmann 分布，布居比直接编码温度。π 脉冲序列像洗牌一样交换能级布居，再用普通色散读出测出占据分布——不依赖标定电阻或噪声温度计的初级测温法，覆盖 60–200 mK，精度逼近量子 Fisher 信息给出的理论下界。</div>

## 原理：布居分布即温度计

与温度 $T$ 的热浴平衡的量子系统处于热态：密度矩阵对角、布居 Boltzmann 分布

$$
p_i = \frac{\exp(-E_i/k_{\mathrm{B}}T)}{Z},\qquad Z=\sum_i \exp(-E_i/k_{\mathrm{B}}T),
$$

其中 $E_i$ 是第 $i$ 个能级能量、$Z$ 是配分函数、$k_{\mathrm{B}}$ 是玻尔兹曼常数。测出布居比（如 $p_e/p_g=\exp(-\hbar\omega_{ge}/k_{\mathrm{B}}T)$）即得热浴温度。对 [[superconducting-qubits/transmon-qubit|transmon]] 必须用 **qutrit（三能级）模型**：弱非谐性 $\alpha$ 使 $\hbar\omega_{ef}\approx\hbar\omega_{ge}$，例如 $\omega_{ge}/2\pi=6.65$ GHz、$\alpha/h=-230$ MHz 的 transmon 在 300 mK 已有 $p_e/p_g\approx0.35$、$p_f/p_g\approx0.12$——f 能级布居不可忽略，两能级近似会系统性读低温度。

### 测量协议：π 脉冲交换布居

标准[[readout-measurement/dispersive-readout|色散读出]]难以分辨 f 能级。解决方法是 $x_2$ 型脉冲序列：先用 $\pi_{ge}$、$\pi_{ef}$ 脉冲按不同顺序**交换**能级对（g↔e、e↔f）的布居，把目标能级的占据搬到可分辨的读出窗口再测量。三个布居比 A、B、C 各有三种脉冲顺序（共 $A_1\ldots C_3$ 九条提取路径），因弛豫与 f 级低布居的信噪比差异，实测中 B、C 类路径精度最优（单次测量相对误差 8.6–9.4%，A 类 14–42%）。

![[assets/figures/qubit-thermometry/lvov2024-fig1-scheme-sample.jpg]]

*实验方案与样品：(a) x₂ 测量的脉冲序列；(b) x₂ 测量的数值模拟示意；(c) π 脉冲序列如何逐步交换三能级布居、读出期间布居仍在演化；(d) 与波导耦合的 transmon 与读出谐振腔光学像（样品 Q2-III）；(e) transmon 光学像；(f) Al/AlO_x/Al 隧道结的 SEM 像。图源：Lvov et al. (2024), Fig. 1。*

## 有效温度与两浴模型

![[assets/figures/qubit-thermometry/lvov2024-fig2-two-bath-teff.jpg]]

*有效温度与两浴模型：(a) 各比特的 T_eff 随制冷机 MXC 温度变化——彩色虚线为存在固定温度热环境 T_env 时的模型曲线，灰色点线为一一对应；灰色竖带标出 >200 mK 后准粒子显著影响的区域；插图为两浴模型（冷/热环境、弱/强耦合）的 T_eff(T_MXC) 行为；(b) 样品 R4-I 的布居比 A、B、C 随温度的变化，插图显示低温下 p_e/p_g 饱和于 ~2.4%。图源：Lvov et al. (2024), Fig. 2。*

实测 $T_{\mathrm{eff}}(T_{\mathrm{MXC}})$ 不完全跟随制冷机混料室（MXC）温度：比特同时耦合两个热浴——制冷机冷板（$T_{\mathrm{MXC}}$）与一个固定有限温度的热环境（$T_{\mathrm{env}}$，来自 Chip 上的介观热浴/输入线等），相对耦合强度 $\gamma_{\mathrm{env}}/\gamma_1^0$ 决定 $T_{\mathrm{eff}}$ 的落点。低温端布居比饱和（$p_e/p_g\approx2.4\%$，对应饱和温度 65–85 mK）给出动态范围下限；高温端 >200 mK 后平衡[[circuit-qed/charge-parity-fluctuation|准粒子]]显著压低 $\tau_1$、扭曲布居，给出上限。工作区间内 $T_{\mathrm{eff}}$ 与 $T_{\mathrm{MXC}}$ 良好热化——测温范围 **60–200 mK**。

## 精度极限：Cramér–Rao 下界与量子 Fisher 信息

![[assets/figures/qubit-thermometry/lvov2024-fig6-accuracy-qfi.jpg]]

*测温精度与理论极限：(a) 基温 T_MXC≈22 mK 下有效温度的时间轨迹；(b) 单次测量相对误差随归一化温度的变化——符号为三个样品的时间平均实验数据，同时汇总文献里的 Rabi 振荡法、关联法与原始 π 脉冲法；实线为三能级 QFI 极限（式 31）、黑色虚线为二能级情形（式 30）——所有数据点应位于 Cramér–Rao 下界之上。图源：Lvov et al. (2024), Fig. 6。*

温度计精度的终极限制由**量子 Fisher 信息（QFI）**与 Cramér–Rao 不等式给出：二能级探针（能隙 $\hbar\omega_{ge}$）的单次测量相对误差 $|\Delta T/\langle T\rangle|_{\mathrm{sm}}$ 有解析下界；三能级（能隙组合 $x_{gf}=\hbar\omega_{gf}/k_{\mathrm{B}}T$）情形相应推广。对本实验（$\omega_{ge}=7.04$ GHz、$N_{\mathrm{av}}\approx2^{17}$ 次平均、测量时长 29 s、$T=65$ mK）：QFI 极限相对误差 0.7%、噪声等效温度 $\mathrm{NET}_{\mathrm{QFI}}\approx2.5\ \mathrm{mK}/\sqrt{\mathrm{Hz}}$。实验实际误差（8.6–9.4%，NET≈28.5 mK·√Hz）比量子极限高约一个量级，差距主要来自读出链信噪比——对照表明使用[[readout-measurement/parametric-amplifier|量子极限参量放大器]]的关联法测量几乎触及 QFI 界。两个改进方向：提高 π 脉冲效率与优化读出腔 $\chi/\kappa$；用磁通可调谱（调 $\hbar\omega_{ge}/k_{\mathrm{B}}T$ 到最优比）把"次优"三能级探针改造成针对目标温区的优化温度计。

## 应用与定位

- **在片介观热浴测温**：普通温度计量不到的地方——比特直接测自己所在芯片环境的有效温度，为量子热力学实验（热输运、麦克斯韦妖、on-chip 制冷）提供局部温度基准；
- **无 SNR 强依赖**：与依赖幅度标定的方法不同，布居比法对读出链增益漂移不敏感；
- **动态范围**：60–200 mK 恰好覆盖稀释制冷机 mK–100 mK 区段中常规 Cernox/ RuO₂ 电阻计最不灵敏的区间，与[[scaling-automation/cryo-electronics|低温电子学]]链路的温度监测互补。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 测温范围 | 60–200 mK（低限由布居饱和 65–85 mK、高限由 QP 效应设定） | Lvov 2024 |
| 布居模型 | qutrit，$p_i=\exp(-E_i/k_BT)/Z$；$p_e/p_g$ 饱和 ~2.4% | Lvov 2024 |
| 提取路径 | $A_{1\ldots3},B_{1\ldots3},C_{1\ldots3}$ 九种 π 脉冲顺序；B/C 最优 | Lvov 2024 |
| 单次测量误差 | 8.6–9.4%（B/C 路径）；A 类 14–42% | Lvov 2024 |
| QFI 极限 | 0.7% @65 mK（$N_{av}\approx2^{17}$）；NET_QFI≈2.5 mK/√Hz | Lvov 2024 |
| 两浴模型 | 制冷机 $T_{\mathrm{MXC}}$ + 固定 $T_{\mathrm{env}}$，耦合比 $\gamma_{\mathrm{env}}/\gamma_1^0$ | Lvov 2024 |
| 典型器件 | $\omega_{ge}/2\pi=7.04$ GHz，$\tau_1(0)\approx5.5\ \mu$s，π 脉冲 165 ns，读出 2 µs | Lvov 2024 |

## 与其他概念的关系

- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：三能级结构与弱非谐性决定了必须用 qutrit 模型；
- [[readout-measurement/dispersive-readout|色散读出]]与[[readout-measurement/single-shot-readout|单发读出]]：布居测量的读出层，$\chi/\kappa$ 与放大器噪声直接决定与 QFI 界的距离；
- [[circuit-qed/charge-parity-fluctuation|准粒子]]：>200 mK 的动态范围上限来自平衡 QP 对 $\tau_1$ 的压制；
- [[readout-measurement/parametric-amplifier|参量放大器]]：量子极限首级放大是逼近 Cramér–Rao 下界的关键（关联法 + JPA 已几乎触界）；
- [[scaling-automation/cryo-electronics|低温电子学]]：在片测温为制冷机监测与量子热力学实验提供局部温度基准；"比特当温度计"的思路也被反过来用于验证输入线热化——fluxonium 的退相干率给出柔性微波带状线的残余光子数上界（<3.5×10⁻³）与 0.28 ms 热化时间。

## 参考文献

- Lvov, D. S., Lemziakov, S. A., Ankerhold, E., Peltonen, J. T., Pekola, J. P. Thermometry Based on a Superconducting Qubit. *Physical Review Applied* 23, 054079 (2025). DOI: 10.1103/PhysRevApplied.23.054079；arXiv:2409.02784（QAtlas 缓存：2409.02784）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
