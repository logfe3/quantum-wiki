---
title: 量子储备池计算
description: 把输入编码为腔位移幅度、以 Fock 态占据概率为输出神经元的储备池机器学习：单个 transmon–谐振腔 cQED 系统即可提供大量非线性特征，线性权重单步训练免疫梯度与 barren plateau 问题。
aliases:
 - 量子储层计算
 - QRC
 - quantum reservoir computing
 - 储备池计算
tags:
 - 电路量子电动力学
 - 量子机器学习
 - 玻色模式
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvjfyffr9r8zat0q13cnyd
source_updated: 2026-08-30T11:29:37Z
---

<div class="entry-lead">训练量子系统做机器学习的最大障碍是训练本身：梯度估计昂贵、优化景观布满 barren plateau。储备池计算绕开这一层——量子系统当"黑盒"非线性特征提取器，只在输出端训练一层线性权重，单步求解。一个 transmon 加一个读出谐振腔就够了：数据写成腔位移的幅度，Fock 态 $|0\rangle$–$|4\rangle$ 的占据概率在不同时刻被采样出来就是神经元，非线性由测量过程与 Kerr 效应免费提供。</div>

## 原理：为什么储备池不需要训练量子系统

储备池计算（reservoir computing）把神经网络分成两部分：一个**固定**的高维非线性动力学系统（储备池）与一个**可训练**的线性读出层。只要储备池的特征对输入非线性且足够多样，训练就只剩线性回归——不存在梯度消失，也免疫量子神经网络的 barren plateau 问题。量子储备池计算（QRC）用相干量子系统做储备池：量子动力学的希尔伯特空间天然高维，且原则上能直接处理量子输入数据。

实验瓶颈一直在于"从单个物理系统拿到足够多的**非线性**输出特征"。Carles 等人的方案用最简 cQED 器件解决了这个问题：Ta 共面波导 $\lambda/2$ 谐振腔（$\omega_c=2\pi\times7.617\ \mathrm{GHz}$）电容耦合一个 transmon 辅助比特（$\omega_q=2\pi\times6.210\ \mathrm{GHz}$），输入数据编码为腔共振驱动**幅度**，输出特征是 Fock 态占据概率在若干时刻的采样值——$n$ 个态 × $k$ 个时刻共 $nk$ 个特征。

![[assets/figures/quantum-reservoir-computing/carles2025-fig1-qrc-concept-device.jpg]]

*量子储备池方案与器件：(a) 输入数据编码进共振驱动的幅度（绿），量子系统（蓝）作储备池，输出特征（紫圆）取自不同时刻 t₁、t₂ 的 Fock 态 |0⟩–|n⟩ 占据概率，共 2n 个特征，由一层线性权重（虚线）分类；(b) 电路示意与 (c) 版图——Ta 共面波导谐振腔（蓝）经 Purcell 滤波器（绿）接传输线，电容耦合 transmon（紫）。图源：Carles et al. (2025), Fig. 1。*

## 器件物理：色散哈密顿量与激活函数

系统由色散区哈密顿量描述：

$$
H = \omega_c a^\dagger a + \frac{1}{2}\left(\omega_q + \chi\, a^\dagger a + K_{cq}\,(a^\dagger a)^2\right)b^\dagger b + \frac{K_{cc}}{2}(a^\dagger a)^2,
$$

其中 $a$、$b$ 是腔与 transmon 的湮灭算符；$\chi=2\pi\times22.29\ \mathrm{MHz}$ 是色散耦合率（使比特频率依赖腔内光子数——这正是 Fock 态测量的物理基础，见[[readout-measurement/dispersive-readout|色散读出]]）；$K_{cc}=-2\pi\times300\ \mathrm{kHz}$ 是腔自 Kerr 系数（腔从比特继承的非线性）；$K_{cq}\approx-2\pi\times0.44\ \mathrm{MHz}$ 是光子数对色散移的高阶修正。腔总耗散 $\kappa_{\mathrm{tot}}=2\pi\times(560\pm60)\ \mathrm{kHz}$。

**激活函数**来自 Fock 态占据概率对相干态幅度的非线性依赖：理想相干态 $|\alpha\rangle$ 的占据呈 Poisson 分布

$$
P_n(\alpha) = e^{-|\alpha|^2}\,\frac{|\alpha|^{2n}}{n!},
$$

其中 $\alpha$ 是腔相干态幅度（正比于编码的数据值）、$n$ 是光子数。实测分布因 Kerr 效应偏离 Poisson 统计——这**不是**缺陷：模拟显示额外的 Kerr 非线性反而提升储备池性能（在更高维度上弯曲特征空间）。编码范围内的 Kerr 频移 $\Delta f_c\approx1.7\ \mathrm{MHz}$ 超过腔线宽，故输入脉冲取 200 ns（谱宽 5 MHz > 频移）以覆盖漂移的共振。

![[assets/figures/quantum-reservoir-computing/carles2025-fig2-fock-neurons.jpg]]

*Fock 态概率作为神经元：(a) 双音谱学——反射相位随比特驱动频率与腔驱动幅度变化，从右到左的共振对应腔内 0–4 个光子修饰的比特频率，黄线标出数据编码幅度范围；(b) 上：测量脉冲序列（200 ns 位移脉冲 D_α → 条件 π_n 脉冲 → 1 µs 等待 → 高功率读出）；下：|0⟩–|4⟩ 占据概率随位移幅度的变化（点为 10⁴ 次平均，线为 Lindblad 主方程拟合，耗散率与 Kerr 为自由参数）。图源：Carles et al. (2025), Fig. 2。*

## 任务一：正弦/方波分类

![[assets/figures/quantum-reservoir-computing/carles2025-fig3-sine-square-task.jpg]]

*正弦/方波分类：(a) 400 个随机排列的正弦/方波周期、每周期 8 个离散步长；(b) 两个连续位移脉冲编码相邻数据点、π_n + 高功率读出，概率在第二个脉冲期间 4 个时刻采样（t_i = i×50 ns）；(c) 8 个最信息特征的预测；(d) 精度随测量态数 N 的变化（实线为不同去相干 κ_φ 的模拟）；(e–g) 精度随采样步数、测量次数与编码范围的变化。图源：Carles et al. (2025), Fig. 3。*

任务同时考验非线性与记忆：纯线性网络只能做单阈值判决，上限 68.75%；经典循环网络需 25 个神经元达 100%。量子储备池的结果：**20 个测量特征（21 个输出神经元含偏置）达 99.8% 精度；只用 8 个最信息特征仍有 99.5%**——显著少于经典储备池所需，与先前模拟一致。最信息特征混合了不同态、不同时刻的概率（$P_0^{t_2},P_0^{t_3},P_0^{t_4},P_1^{t_3},P_2^{t_1},P_2^{t_2},P_3^{t_1},P_4^{t_1}$），实用中可在训练阶段识别、推理时只测这几个。记忆来自两次位移脉冲的叠加与腔的有限寿命；模拟显示精度随比特去相干 $\kappa_\phi$ 增加显著下降——量子相干性本身是学习资源。

## 任务二：Mackey-Glass 混沌时序预测

对准混沌（$\tau=17$）Mackey-Glass 序列做时间延迟预测：每次预测前重注入前 20 个输入（各 100 ns）提供记忆，特征为 $|0\rangle$–$|4\rangle$ 概率，评价用归一化均方根误差

$$
\mathrm{NRMSE} = \frac{1}{\Delta\tilde{y}}\sqrt{\frac{\sum_k (y_k - \tilde{y}_k)^2}{N}},
$$

其中 $y_k$ 是预测、$\tilde{y}_k$ 是目标（延迟 $d$ 后的序列值）、$\Delta\tilde{y}=\max(\tilde{y})-\min(\tilde{y})$ 是目标值域、$N$ 是数据点数。NRMSE 在延迟为准振荡周期整数倍处出现极小（目标与输入高相关），随混沌度增加收敛到平均值——储备池同时具备非线性映射与短期记忆的证据。

## 训练：一步线性回归

读出层是带 $L_2$ 正则化的线性权重：对特征向量 $\mathbf{x}$ 预测 $\hat{y}=\mathbf{w}^\top\mathbf{x}$，权重由岭回归闭式解出，正则化参数 $\beta$ 惩罚大权重。**整个训练不含对量子系统的任何梯度优化**——这是储备池范式相对量子神经网络的核心工程优势。

## 与其他概念的关系

- [[circuit-qed/bosonic-cqed|玻色 cQED 与腔编码量子计算]]：同为"用腔的多能级做计算资源"——那边编码量子信息，这边做机器学习特征；
- [[readout-measurement/dispersive-readout|色散读出]]：$\chi$ 使比特频率依赖光子数，既是读出机制也是这里 Fock 态测量的物理基础；
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：仅作辅助读出比特，不参与计算——硬件极简性的来源；
- [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]与[[circuit-qed/cavity-linewidth|腔线宽]]：储备池动力学的底层模型与耗散参数；
- [[scaling-automation/charge-state-recognition|电荷态识别]]：同样"物理系统非线性特征 + 轻量分类器"的思路在量子点侧的对应。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 器件 | Ta CPW λ/2 腔 7.617 GHz + transmon 6.210 GHz | Carles 2025 |
| 色散耦合 χ/2π | 22.29 MHz | Carles 2025 |
| 腔自 Kerr K_cc/2π | −300±50 kHz；K_cq/2π ≈ −0.44 MHz | Carles 2025 |
| 腔总耗散 κ_tot/2π | 560±60 kHz | Carles 2025 |
| 输入编码 | 位移幅度 α_in ∈ [1, ~10.4] MHz（Kerr 频移 1.7 MHz），脉冲 200 ns | Carles 2025 |
| 正弦/方波分类 | 99.8%（20 特征）；99.5%（8 特征）；线性上限 68.75%；经典需 25 神经元 | Carles 2025 |
| Mackey-Glass | τ=17 准混沌，重注入 20 步 ×100 ns | Carles 2025 |
| 采样时刻 | t_i = i×50 ns，i∈[1,4] | Carles 2025 |

## 参考文献

- Carles, B., Dudas, J., Balembois, L., Grollier, J., Marković, D. Experimental quantum reservoir computing with a circuit quantum electrodynamics system (2025). arXiv:2506.22016（QAtlas 缓存：2506.22016）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
