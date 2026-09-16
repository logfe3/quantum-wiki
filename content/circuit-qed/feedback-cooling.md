---
title: 微波光机械反馈冷却
description: 用测量基反馈把微波腔耦合的机械振子推向量子基态：近量子极限 JTWPA 让反馈环自身几乎不加热，SiN 膜冷却至 1.6 个声子；边带不对称既是测温手段也是陷阱——腔噪声与 Kerr 效应都能制造伪不对称。
aliases:
 - 反馈冷却
 - measurement-based feedback cooling
 - 边带不对称测温
 - sideband asymmetry
 - 基态冷却
tags:
 - 电路量子电动力学
 - 光机械
 - 机械振子
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvfxg44z7bc61y2vnsnmzm
source_updated: 2026-09-09T14:48:17Z
---

<div class="entry-lead">把一枚宏观膜片冷到"只剩一两个声子"，靠的不是更低的制冷机温度而是反馈：连续测量振子位移，把放大后的信号反相推回振子——等效阻尼把热运动"抽"走。微波频段做这件事多了一层物理：反馈环里的每一分噪声都会经执行端加热振子，因此放大器的附加噪声直接写进最终温度。一台近量子极限的 JTWPA 把这项代价压到最低，让高应力 SiN 膜达到 1.6 个声子。</div>

## 物理图像：测量基反馈为什么能冷却

机械振子的频率在 kHz–MHz 量级，稀释制冷机温度下热声子数 $n_m^T\gg1$——"冷到基态"必须主动做功。**测量基反馈冷却**（measurement-based feedback cooling）的回路是：干涉式（外差）测量振子位移 → 放大 → 乘以增益并反相 → 经执行端施加反馈力。反馈力的效果是把振子阻尼从本征 $\gamma$ 提高到 $\gamma_\mathrm{eff}=\gamma(1+G_\mathrm{fb})$：热噪声功率不变而带宽展宽，峰高按比例压低——等效温度 $T_\mathrm{eff}=T\cdot\gamma/\gamma_\mathrm{eff}$。与边带冷却（用红失谐驱动的动力学反作用）不同，反馈冷却对失谐不挑剔，但**放大链噪声会经反馈环回流加热振子**——这正是它对首级放大器附加噪声的苛刻要求的来源。

![[assets/figures/feedback-cooling/rej2024-fig2-device-schematic.jpg]]

*器件与测量链：SiN 膜芯片倒扣在微波腔上方，膜片的机械形变调制腔频率；三个相干音（冷却红/蓝边带音 + 弱测温音）注入腔内，输出经近量子极限 JTWPA 放大后做外差解调，反馈信号回注执行端。图源：Rej et al. (2024), Fig. 2。*

## 边带不对称测温

输出谱中机械边带的 Stokes（$A^-$，发射）与 anti-Stokes（$A^+$，吸收）权重不相等是量子振子的内禀性质——基态不能发射声子。动态反作用可忽略时，权重比直接给出声子占据：

$$
n_m = \frac{A^{+}}{A^{-} - A^{+}},
$$

其中 $A^{-}$、$A^{+}$ 分别是 Stokes 与 anti-Stokes 边带权重——基态（$n_m=0$）时 anti-Stokes 边带消失。在零失谐附近同时观测两条边带既保持解释的稳健性又避免动力学反作用偏置。这一"边带不对称当温度计"的姿态有两个系统性陷阱（下文），实验中的对策是用一个**弱独立测温音**与冷却音分离。

## 声子预算与实验结果

最优反馈条件下最终声子数满足预算方程

$$
n_m + \frac{1}{2} = n_T + n_\mathrm{ba} + n_\mathrm{fb},
$$

各项分别是热残余、量子反作用与反馈注入：

$$
n_T = \frac{\gamma}{\gamma_\mathrm{eff}}\left(n_m^T + \frac{1}{2}\right),\qquad
n_\mathrm{ba} = C_\mathrm{eff}\,\frac{\kappa^2}{\kappa^2 + 4\omega_m^2}\left(1 + 2n_c^T\right),
$$

其中 $\gamma$、$\gamma_\mathrm{eff}$ 是本征与反馈增强后的机械阻尼，$n_m^T$ 是热声子数；$C_\mathrm{eff}$ 是有效合作度，$\kappa$ 是[[circuit-qed/cavity-linewidth|腔线宽]]、$\omega_m$ 机械频率，$n_c^T$ 是**加热后的腔内热光子数**——微波实验中强驱动常常把腔"烘热"，使反作用项翻倍；$n_\mathrm{fb}$ 是反馈环（主要是放大器噪声经执行端回流）注入的声子。实验（高应力 SiN 膜微波光机械平台 + [[readout-measurement/josephson-traveling-wave-amplifier|JTWPA]]，附加噪声近量子极限）把振子冷却到 $n_m=1.6$——主要限制是微波诱导加热。

![[assets/figures/feedback-cooling/rej2024-fig6-feedback-cooling.jpg]]

*反馈冷却结果：机械振子的有效阻尼随反馈增益增长（Stokes/anti-Stokes 两路提取一致），对应等效温度持续压低——最佳条件下达到 1.6 个热声子，受微波诱导加热限制。图源：Rej et al. (2024), Fig. 6。*

## 边带不对称的两个陷阱

**腔噪声与 noise squashing**：经典腔噪声叠加在零点噪声上，定性上不可分辨，且对 anti-Stokes 边带造成相消干涉（"噪声压榨"）；热腔的噪声发射为洛伦兹型，在小失谐、未分辨边带极限下不可忽略，必须计入拟合。

**Kerr 伪不对称**：更微妙的是腔的非线性。腔频率随电磁能量移动（Kerr 哈密顿 $H_K=K(a^\dagger)^2a^2$），多音照射下强音的拍频对腔频做快速热调制，线性化后的 Kerr 项

$$
K_\mathrm{eff} = 8K\,A_p A_t
$$

（$A_p$、$A_t$ 是泵音与测温音的振幅）会**人为制造**边带不对称——与量子发射/吸收不平衡的信号形态难以区分。实测中：弱探测下观察到的边带不对称只有部分来自量子效应；当探测音耦合很强（$G_p/2\pi\simeq11$ MHz 量级）时，不对称**完全**由 Kerr 效应主导。结论：把边带不对称解读为量子证据前，必须先排除（或建模扣除）多音 + 腔非线性的经典赝源。

![[assets/figures/feedback-cooling/rej2024-fig5-sideband-asymmetry.jpg]]

*反馈冷却中的边带不对称：测温音的 Stokes/anti-Stokes 权重随反馈增益的演化（点）与理论预期（线，含腔噪声与 Kerr 效应建模）——不对称只有部分来自量子发射/吸收不平衡，其余归于经典赝源。图源：Rej et al. (2024), Fig. 5。*

## 与其他概念的关系

- [[circuit-qed/hbar-quantum-acoustodynamics|高次体声波谐振器量子声动力学]]：同为"微波腔 × 机械振子"家族——那边用 HBAR 多模做存储与传输，这边用反馈把膜推向基态；
- [[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]：反馈冷却的温度地板直接由其附加噪声设定；
- [[circuit-qed/cavity-linewidth|腔线宽]]：κ 进入反作用声子项与边带分辨判据；
- [[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]：多音照射下的周期调制视角——Kerr 线性化正是把拍频调制抽成有效参数；
- [[readout-measurement/parametric-amplifier|参量放大器]]：近量子极限放大是所有反馈冷却方案的共同前提。

## 参数与量级

| 量 | 数值 | 说明 |
| --- | --- | --- |
| 最终声子数 | n_m = 1.6（主要受微波诱导加热限制） | Rej 2024 |
| 平台 | 高应力 SiN 膜 + 微波腔（膜倒扣封装） | Rej 2024 |
| 首级放大 | JTWPA，附加噪声近量子极限 | Rej 2024 |
| 测温公式 | n_m = A⁺/(A⁻−A⁺) | Rej 2024 |
| 反作用项 | n_ba = C_eff·κ²/(κ²+4ω_m²)·(1+2n_c^T) | Rej 2024 |
| Kerr 伪不对称 | K_eff = 8K·A_p·A_t；强探测（G_p/2π≈11 MHz）时完全主导 | Rej 2024 |

## 参考文献

- Rej, E., Cutting, R., Datta, D., Tiencken, N., et al. Near-ground state cooling in electromechanics using measurement-based feedback and Josephson parametric amplifier (2024). arXiv:2403.02319（QAtlas 缓存：2403.02319）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
