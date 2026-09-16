---
title: 参量放大器饱和功率
description: 约瑟夫森参量放大器的 1 dB 压缩点：Kerr 非线性使信号光子推离最优泵浦条件并耗散泵浦，饱和功率按 κ/|K| 标度，可用 SQUID 阵列稀释非线性来系统性抬高。
aliases:
 - 1 dB 压缩点
 - 输入饱和功率
 - 动态范围
 - saturation power
 - P_1dB
 - 1 dB compression point
tags:
 - 读出与测量
 - 参量放大
 - 微波
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qv785qkpd44t1bbvbt3qra
source_updated: 2026-09-09T14:51:19Z
---

<div class="entry-lead">饱和功率（输入 1 dB 压缩点 $P_{1\mathrm{dB}}$）回答一个读出链最实际的问题：放大器还能"吃"多强的信号而不失真。约瑟夫森参量放大器的答案出人意料地简单——Planat 等人证明 $P_{1\mathrm{dB}}$ 正比于 $\kappa_\mathrm{eff}/|K_\mathrm{eff}|$（衰减率与自 Kerr 之比），因为信号光子会像 ac-Stark 频移那样把泵浦推离最优失谐、同时耗散泵浦光子；把单个 SQUID 换成 80 个 SQUID 的阵列稀释非线性，饱和功率就提高 15 dB。这把"动态范围"从器件实测指标变成了可设计的电路参数。</div>

## 为什么放大器会饱和

[[readout-measurement/parametric-amplifier|参量放大器]]靠 Kerr 型非线性实现增益，但**同一个非线性也在信号变强时破坏增益**。含泵浦驱动的简并 JPA 可以用非线性谐振子哈密顿量

$$
H_\mathrm{JPA} = \hbar\omega_\mathrm{eff} A^\dagger A + \hbar\frac{K_\mathrm{eff}}{2}\left(A^\dagger\right)^2 A^2
$$

描述，其中 $A$ 是腔场湮灭算符，$\omega_\mathrm{eff}$ 是有效谐振频率、$K_\mathrm{eff}$ 是自 Kerr 系数、$\kappa_\mathrm{eff}$ 是对传输线的耦合率。把场分解为强经典泵浦 $\alpha$ 加量子信号 $\hat a$ 并线性化，得到标准的信号/闲频增益 $g_{S,\Delta}$、$g_{I,\Delta}$（$\Delta$ 为相对泵浦的信号失谐）。增益对泵浦参数极其敏感：在增益脊（最优泵浦条件）附近，**泵浦频率偏离 5 MHz 就足以让增益损失超过 1 dB**。

饱和的微观机制由此清晰：腔内每秒进入 $n_s$ 个信号光子，每个信号光子都通过 Kerr 项改变腔的裸频率与泵浦光子数，等效于把最优泵浦频率推离

$$
\Delta f_p \approx n_s \times \frac{K_\mathrm{eff}}{\kappa_\mathrm{eff}}\ \ (\text{Hz}),
$$

增益随之沿增益脊滑落。完整描述只需在腔场运动方程中自洽地加入 $2iK\langle \hat a^\dagger \hat a\rangle \alpha$ 与 $iK\langle \hat a^2\rangle \alpha^*$ 两项：前者是信号光子数的 ac-Stark 型频移，后者涵盖**泵浦耗散（pump depletion）**——信号放大消耗泵浦光子、腔内泵浦稳态随之下降。没有其他拟合参数，这个模型就能复现实测的增益-输入功率曲线。

![[assets/figures/amplifier-saturation-power/planat2019-fig2-gain-map.jpg]]
*理论最大信号增益 $|g_{S,\Delta}|^2$ 随泵浦功率与泵浦频率的二维图（信号失谐 $\Delta=0$）：增益脊呈对角走向，更高增益需要更大泵浦功率与更低泵浦频率；插图显示泵浦频率偏离脊区仅数 MHz 增益即下降逾 1 dB——JPA 饱和的根源正是信号光子把工作点推离这条脊。图源：Planat et al. (2019), Fig. 2。*

## 标度律与 SQUID 阵列稀释

由上述机制可以直接读出设计规则：增益下降 1 dB 对应的信号光子数正比于 $\kappa_\mathrm{eff}/|K_\mathrm{eff}|$，因此

$$
P_{1\mathrm{dB}} \propto \frac{\kappa_\mathrm{eff}}{|K_\mathrm{eff}|}.
$$

减小 $|K_\mathrm{eff}|$ 的系统方法是**阵列稀释**：总相位降分配到 $N$ 个串联结上，每个结只经历 $\Phi_\mathrm{tot}/N$ 的相位降，四阶非线性（Kerr）按 $1/N$ 下降；若同时把每个结的临界电流增大 $N$ 倍（电感减小 $N$ 倍），非线性按 $1/N^2$ 下降。Planat 等人的器件用 $N=80$ 个 SQUID 构成 $\lambda/4$ 非线性谐振器，经远程地模型（remote ground model，计及阵列与地平面之间长程库仑屏蔽，特征长度 $a_0=4.3\ \mu$m）从双音谱学独立提取全部电路参数（$L_J=165$ pH、$C_J=370$ fF、$C_\mathrm{out}=24.7$ fF、$C_s=1$ fF），模式自 Kerr $K_{nn}=2\hbar\pi^4 E_J \eta_{nnnn}/(\Phi_0^4 C_J^2 \omega_n^2)$ 完全可预言——不引入拟合参数。

![[assets/figures/amplifier-saturation-power/planat2019-fig4a-gain-vs-theory.jpg]]
*增益谱的实验-理论对照（不同泵浦功率/频率四组，点为实验、线为无拟合参数理论）：基于独立提取的电路参数即可复现全部增益曲线；器件 −3 dB 带宽 45 MHz @ 20 dB 增益，增益-带宽乘积在扫描范围内保持 450 MHz。图源：Planat et al. (2019), Fig. 4(a)。*

实测结果：20 dB 增益下 $P_{1\mathrm{dB}} = -117\pm1.4\ \mathrm{dBm}$，理论预言 $-116\ \mathrm{dBm}$；作为对照，同频率（7.07 GHz）、同带宽（$Q=19$）的单 SQUID JPA 的自 Kerr 为 $K_\mathrm{single}/2\pi = 2.4\ \mathrm{MHz}$（阵列仅 $80\ \mathrm{kHz}$），其 $P_{1\mathrm{dB}}$ 只有 $-131\ \mathrm{dBm}$——**15 dB 的差距正是 $\kappa/|K|$ 比值之差**。

![[assets/figures/amplifier-saturation-power/planat2019-fig5b-p1db-vs-gain.jpg]]
*1 dB 压缩点随初始最大增益的变化（点为实验、线为最优泵浦条件下的理论）：阴影带展示泵浦功率漂移 ±0.03 dBm 造成的 $P_{1\mathrm{dB}}$ 变化可达 3 dBm——饱和功率是对泵浦偏置极敏感的量，跨文献对比必须在最优泵浦条件下进行；虚线为同频率、同带宽单 SQUID JPA 的 $P_{1\mathrm{dB}}$，比阵列器件低 15 dB。图源：Planat et al. (2019), Fig. 5(b)。*

## 使用饱和功率指标时的注意事项

- **泵浦偏置敏感性**：泵浦功率 0.03 dBm 的漂移可使 $P_{1\mathrm{dB}}$ 变化达 3 dBm；报告与对比饱和功率必须锁定最优泵浦条件（增益脊）。
- **增益-带宽代价不在此处**：阵列稀释 $K$ 不改变增益-带宽乘积（该器件保持 450 MHz），但 $K$ 同时决定增益与饱和，稀释后需要更大泵浦功率。
- **外推边界**：模型要求 $L_\mathrm{stray}\ll L_J$（器件中 30 pH vs 165 pH）。作者外推 $N=150$、$C_\mathrm{out}=50$ fF 的设计可在 20 dB 增益下得到 95 MHz 带宽与 $P_{1\mathrm{dB}}=-102\ \mathrm{dBm}$（泵浦 $-66\ \mathrm{dBm}$，与 JTWPA 量级相当），但此时近似开始失效，需进一步理论。
- **行波器件的对应量**：3WM 行波放大器中泵浦耗散主导饱和，$P_{1\mathrm{dB}}\approx P_p/(4G_0)$（4WM 因 SPM/XPM 相位失配再减半为 $P_p/(8G_0)$），rf-SQUID 单元可解耦线性与非线性参数从而打破饱和-长度权衡——见[[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]词条"rf-SQUID TWPA"一节。低插损架构同时抬高饱和功率：CP-JTWPA 在 20.5 dB 增益下做到 −99 dBm（同词条"CP-JTWPA"一节）。
- **谐振式的最新高点**：rf-SQUID 阵列 JPA（几何电感旁路 + $\beta=L_s/L_J$ 设计空间）把谐振式器件的 $P_{1\mathrm{dB}}$ 推到 $-91.5\ \mathrm{dBm}$，与结数多两个量级的 JTWPA 相当——见[[readout-measurement/parametric-amplifier|参量放大器]]词条"rf-SQUID 阵列 JPA"一节。
- **动力学电感分支的天然优势**：非线性来自薄膜而非结的[[readout-measurement/kinetic-inductance-twpa|KI-TWPA]]在 15 dB 增益下 $P_{1\mathrm{dB}}$ 达 $-58\ \mathrm{dBm}$——比约瑟夫森式器件高约一个量级，多谐振腔阵列同时读出的功率预算因此宽裕得多（其代价是色散工程更繁重）。
- **工艺维度的互补路线**：单步电子束光刻的 IEJPA（[[readout-measurement/parametric-amplifier|参量放大器]]词条"单步光刻阻抗工程 JPA"一节）用 3 结阵列集总变压器把谐振式 $P_{1\mathrm{dB}}$ 做到 $-114\ \mathrm{dBm}$——饱和功率与多步工艺 state-of-the-art（$-108$ 至 $-110\ \mathrm{dBm}$）相当而制备周转显著缩短，其建模教训是阻抗工程区的高增益必须保留结的完整正弦非线性（四次截断失效）。

## 与其他概念的关系

- [[readout-measurement/parametric-amplifier|参量放大器]]：饱和机制（磁通泵浦/直接泵浦的 Kerr 失谐与泵浦耗散）的定性小节在该词条，本词条给出其定量理论枢纽；Kerr 修正对量子效率与压缩的影响亦见该词条"高阶非线性修正"一节。
- [[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]：行波器件用巨大结数换取高饱和功率，rf-SQUID TWPA 把 $P_{1\mathrm{dB}}$ 提到 −84 dBm。
- [[readout-measurement/dispersive-readout|色散读出]]与[[readout-measurement/readout-crosstalk|读出串扰]]：多比特频分复用时放大链的饱和功率决定可同时读出的比特数；接近饱和的互调失真还会引入额外的读出串扰。
- [[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]：阵列稀释非线性（Kerr 按 $1/N^2$ 下降）是两个词条共享的电路思想。
- [[readout-measurement/parametric-amplifier|参量放大器]]（"Blochnium/Quarton 架构"一节）：Quarton 主从两级结层次给出符号可控的有效 Kerr（$E_c/6N(1/M-\alpha_c^*)$），是均匀阵列稀释之外另一条理论上的 Kerr 工程路线（BJPA，仿真 $P_{1\mathrm{dB}}\approx-92$ dBm，尚待实验）。

## 参考文献

- Planat, L., Dassonneville, R., Puertas Martinez, J., Foroughi, F., et al. Understanding the saturation power of Josephson Parametric Amplifiers made from SQUIDs arrays. *Physical Review Applied* 11, 034014 (2019). DOI: 10.1103/physrevapplied.11.034014；arXiv:1809.08476（QAtlas 缓存：1809.08476）。
- Kerr 修正对 JPA 增益、量子效率与压缩的定量限制：Boutin, S. et al. *Physical Review Applied* 8, 054030 (2017)，见[[readout-measurement/parametric-amplifier|参量放大器]]词条参考文献。
- rf-SQUID 阵列 JPA 的高饱和实现：Kaufman, R. et al. *Physical Review Applied* 24, 014052 (2025)，见[[readout-measurement/parametric-amplifier|参量放大器]]词条参考文献。
