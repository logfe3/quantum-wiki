---
title: 比特寿命涨落统计
description: 用退极化率 Γ₁=1/T₁ 的长时间噪声谱把 TLS（1/f）与准粒子（白噪声）涨落定量分离，并以准粒子扩散-涨落模型解释器件足迹对寿命涨落的影响。
aliases:
 - T₁ 涨落
 - 寿命涨落谱学
 - Γ₁ 噪声谱
 - T1 fluctuation
 - lifetime fluctuation statistics
tags:
 - 超导量子比特
 - 退相干
 - 噪声表征
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgwmc7kt7vrnnfjqn6xkd
source_updated: 2026-09-04T19:05:18Z
---

<div class="entry-lead">比特的 $T_1$ 不是常数而是随机过程：门保真度随时间漂移的根源藏在 $\Gamma_1=1/T_1$ 的时间涨落里。对 $\Gamma_1(t)$ 做自相关傅里叶分析后发现谱形随温度换主导——低温下是 TLS 与热涨落器相互作用留下的 $1/f$ 与电报噪声，高温下是准粒子生成-复合涨落给出的白噪声。拟合 $S(f)=a/f+b$ 并对两个频段分别积分，就能把两类损耗通道对寿命**方差**的贡献干净地拆开。</div>

## 为什么关注涨落而不只是均值

量子纠错要求门保真度长期稳定，而实验反复观察到寿命越长的[[superconducting-qubits/transmon-qubit|transmon]]涨落越显著：$T_1$、$T_2$ 与比特频率都会在小时尺度上漂移。机制上，公认图像是**近共振 TLS**（无定形介质中的两能级缺陷）从比特取走能量，而这些高频 TLS 又通过偶极-偶极相互作用与一群低频热涨落器（TLF）耦合、自身参数随机游走——于是单个 TLS 的谱线在比特频率附近进出，造成 $\Gamma_1$ 的电报式跳变与 $1/f$ 谱（静态谱学视角见[[superconducting-qubits/junction-defect-modes|约瑟夫森结强耦合缺陷模]]）。另一条通道是**准粒子**：QP 数目的生成-复合涨落使结上的隧穿率随机起伏（宇称开关的直接观测见[[circuit-qed/charge-parity-fluctuation|电荷宇称涨落与准粒子隧穿]]）。两套机制在同一器件中同时存在，此前缺少能在同一组数据里把它们分开的方法。

## 分离方案：噪声谱的频形判据

对三个固定频率 transmon（A：小焊盘 $120\times510\ \mu\mathrm{m}^2$、间隙 20 µm；B/C：$150\times720\ \mu\mathrm{m}^2$、间隙 150 µm；C 的 Nb 焊盘另加 10 nm Ta 封帽降低表面介电损耗）在 7–153 mK 逐温度做**连续 72 小时** $T_1$ 测量，把每个 $\Gamma_1$ 点（单指数拟合，约 6–10 分钟一点）的时间序列转为噪声谱。Purcell 率（<1 kHz）、俘获磁通与封装腔模（10 GHz）均被排除后，退极化率写为两通道之和：

$$
\Gamma_1 = \Gamma_{\mathrm{TLS}} + \Gamma_{\mathrm{QP}},
$$

其中 TLS 项近似温度无关，QP 项由归一化 QP 密度 $x_{\mathrm{QP}}$ 经含修正贝塞尔函数 $K_0$ 的标准公式给出；$x_{\mathrm{QP}}$ 的温度依赖分解为非平衡（常数）与热平衡（指数）两项：

$$
x_{\mathrm{QP}}(T) = x_{\mathrm{QP}}^{0} + \sqrt{2\pi k_{\mathrm{B}}T/\Delta}\,\exp(-\Delta/k_{\mathrm{B}}T),
$$

其中 $x_{\mathrm{QP}}^0$ 是与温度无关的非平衡 QP 密度（来自高能辐射等），第二项是热激发的平衡 QP 密度，$\Delta$ 是 Al 的超导能隙。对均值 $\mu(\Gamma_1)$ 的温度曲线做全局拟合，可同时提取 $\Gamma_{\mathrm{TLS}}$、$x_{\mathrm{QP}}^0$ 与 $\Delta$。

![[assets/figures/t1-fluctuation-statistics/zhu2024-fig1-gamma1-fluctuation-spectrum.jpg]]

*Γ₁ 的时间涨落与噪声谱：(a) 比特 B 在 7 mK（蓝）与 153 mK（红）的典型 Γ₁ 时间序列——低温呈电报式跳变（TLS-TLF 相互作用特征），高温呈白噪声行为（QP 主导）；(b) 对应的 Γ₁ 噪声谱，实线为 S(f)=a/f+b 拟合，虚线为其余温度的拟合——主导噪声源随温度从 TLS 过渡到 QP。图源：Zhu et al. (2024), Fig. 1。*

涨落的分离判据来自谱形：TLS-TLF 机制预言低频 $1/f$；QP 生成-复合涨落本应是洛伦兹谱，但测量频段远低于 QP 复合率（kHz 量级），洛伦兹尾部退化为**白噪声**。于是把实测谱拟合为

$$
S_{\Gamma_1}(f) = a/f + b,
$$

$a$ 归 TLS、$b$ 归 QP，在测量频段内分别积分即得 $\sigma_{\mathrm{TLS}}^2(\Gamma_1)$ 与 $\sigma_{\mathrm{QP}}^2(\Gamma_1)$。

## 均值与方差的温度分解

![[assets/figures/t1-fluctuation-statistics/zhu2024-fig2-mean-rate-decomposition.jpg]]

*平均退极化率 μ(Γ₁) 的温度依赖（三个比特）：点划线为拟合的 TLS 贡献、虚线为非平衡+平衡 QP 贡献、实线为两者之和。100 mK 以下 μ(Γ₁) 弱温度依赖，153 mK 附近各比特趋于同一值。图源：Zhu et al. (2024), Fig. 2。*

均值分解给出三个关键定量结果：

- 三个比特的拟合能隙一致（$\Delta/2\pi\approx38$–$40\ \mathrm{GHz}$，略低于文献典型值，归因于 Al 膜厚与工艺差异）；
- $\Gamma_{\mathrm{TLS}}$ 比值 A:B ≈ 1.9 与三维电磁模拟的表面介质**能量参与比（EPR）**之比吻合（小焊盘 EPR 约为大焊盘 2 倍）；B:C ≈ 3.9 小于 NbO_x 与 TaO_x 损耗角之比 ~10，因 Ta 封帽只覆盖 Nb 顶面未覆盖侧壁——与[[superconducting-qubits/surface-tls-loss|表面 TLS 损耗]]的界面工程图像一致；
- 结名义相同的三个比特，$x_{\mathrm{QP}}^0$ 却呈几何依赖：小焊盘（A）是大焊盘（B/C）的约 2.5 倍——QP 扩散模型给出 2.7 的比值，机制是小焊盘中高能辐射产生的 QP 到结的输运距离更短。

## 准粒子扩散-涨落模型与有效体积

![[assets/figures/t1-fluctuation-statistics/zhu2024-fig3-variance-qps-tls.jpg]]

*Γ₁ 方差的温度依赖：(a) QP 贡献 σ²_QP——100 mK 以下弱依赖、更高温度快速上升；小足迹比特 A 的方差比 B/C 高至少一个量级，实线为扩散-涨落模型拟合；(b) TLS 贡献 σ²_TLS——整体弱温度依赖，A 同样显著偏大。图源：Zhu et al. (2024), Fig. 3。*

假设 QP 数目服从泊松分布（方差等于均值），QP 引起的 $\Gamma_1$ 方差为

$$
\sigma_{\mathrm{QP}}^2(\Gamma_1) = \eta^2(T)\left(\frac{x_{\mathrm{QP}}^{0}}{n_{\mathrm{CP}}\,V_{\mathrm{eff}}^{0}} + \frac{x_{\mathrm{QP}}^{\mathrm{th}}}{n_{\mathrm{CP}}\,V_{\mathrm{eff}}^{\mathrm{th}}}\right),
$$

其中 $n_{\mathrm{CP}}$ 是库珀对数密度，$\eta(T)$ 是把单个 QP 隧穿事件转换为退极化率涨落的系数（含 $E_J$、$E_C$、贝塞尔函数 $K_0$ 与温度因子），$V_{\mathrm{eff}}^{0}$ 与 $V_{\mathrm{eff}}^{\mathrm{th}}$ 分别是非平衡与热平衡 QP 的**有效体积**——涨落的有效统计单元。拟合结果（Table I）：A/B/C 的 $V_{\mathrm{eff}}^{0}$ 分别为 0.062/0.290/0.807 µm³，比值 C(B):A ≈ 13(5)，正与 $V_{\mathrm{eff}}^{0}\propto(1/x_{\mathrm{QP}}^{0})^{3}$ 的立方标度一致（QP 密度越高、扩散-复合尺度 $(v_F\tau_r)^3$ 越小）；$x_{\mathrm{QP}}^0$ 为 1.4×10⁻⁷（A）与 5.5×10⁻⁸（B/C）。热平衡有效体积 $V_{\mathrm{eff}}^{\mathrm{th}}\approx0.025$–$0.039\ \mu\mathrm{m}^3$，三个比特趋同且接近 Al 结本身体积（~0.013 µm³）——因为热 QP 由低能隙的 Al 结区主导产生。

TLS 方差一侧：$\sigma_{\mathrm{TLS}}^2(\Gamma_1)$ 整体弱温度依赖并带局域结构，小足迹比特 A 显著偏大——与 TLS 理论（单 TLS-TRL 系综相互作用方差）及 A 更大的表面介质 EPR 定性一致。

## 设计启示

- **足迹-涨落权衡**：缩小焊盘降低 EPR、提高平均 $T_1$，却把非平衡 QP 密度抬高 2.5 倍、QP 涨落方差抬高一个量级——寿命均值与稳定性不能只优化一个；
- **区分损耗通道的方法学**：均值温度曲线 + 噪声谱频形联合分解，使 $\Gamma_{\mathrm{TLS}}$、$x_{\mathrm{QP}}^0$、$\Delta$、$V_{\mathrm{eff}}$ 在同一器件上自洽提取；
- **涨落是工艺指纹**：$\sigma_{\mathrm{TLS}}^2$ 对表面介电（封帽、侧壁覆盖）敏感，$\sigma_{\mathrm{QP}}^2$ 对几何与辐射环境敏感——涨落统计比均值更能分辨失效模式。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 测量协议 | 7–153 mK，每温度连续 ~72 h | Zhu 2024 |
| 噪声谱模型 | $S(f)=a/f+b$（TLS/QP 分离） | Zhu 2024 |
| 拟合能隙 $\Delta/2\pi$ | 38.0 / 38.2 / 39.6 GHz（A/B/C） | Zhu 2024 |
| 非平衡 QP 密度 $x_{\mathrm{QP}}^0$ | 1.4×10⁻⁷（A）；5.5×10⁻⁸（B/C），比值 ~2.5 | Zhu 2024 |
| QP 有效体积 $V_{\mathrm{eff}}^{0}$ | 0.062 / 0.290 / 0.807 µm³，比值 ∝(1/x⁰)³ | Zhu 2024 |
| 热平衡有效体积 $V_{\mathrm{eff}}^{\mathrm{th}}$ | 0.025–0.039 µm³ ≈ 结体积 0.013 µm³ | Zhu 2024 |
| TLS 退极化率 $\Gamma_{\mathrm{TLS}}$ | 1.2×10⁻² / 6.2×10⁻³ / 1.6×10⁻³ µs⁻¹（A/B/C） | Zhu 2024 |
| 涨落几何效应 | 小足迹 σ²_QP 高 ≥1 个量级 | Zhu 2024 |

## 与其他概念的关系

- [[superconducting-qubits/junction-defect-modes|约瑟夫森结强耦合缺陷模]]：静态交换谱学测 TLS 谱密度 ρ_DM，本词条的时间统计方法补上 TLS 的**动力学**（涨落）维度；
- [[circuit-qed/charge-parity-fluctuation|电荷宇称涨落与准粒子隧穿]]：宇称开关是单次 QP 隧穿的离散可观测，本词条的白噪声方差是 QP 系综涨落的连续统计像；
- [[superconducting-qubits/surface-tls-loss|表面 TLS 损耗与湿法刻蚀]]：Γ_TLS 的 EPR 标度与界面损耗角工程同源；
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：被测对象；固定频率单结设计使磁通与 Purcell 通道可排除；
- [[superconducting-qubits/qubit-fast-reset|量子比特快速复位]]与门调度：寿命涨落直接决定校准的时效性。

## 参考文献

- Zhu, S., You, X., Alyanak, U., Bal, M., Crisa, F., Garattoni, S., Lunin, A., Pilipenko, R., Murthy, A., Romanenko, A., Grassellino, A. Disentangling the Impact of Quasiparticles and Two-Level Systems on the Statistics of Superconducting Qubit Lifetime (2024). DOI: 10.1103/X4NY-17LK；arXiv:2409.09926（QAtlas 缓存：2409.09926）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
