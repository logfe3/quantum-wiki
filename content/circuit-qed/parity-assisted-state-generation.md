---
title: 宇称辅助的非经典光态制备
description: 用超强耦合量子 Rabi 系统的 Z₂ 宇称选择定则实现双光子过程：同宇称态间单光子跃迁被禁戒、双光子和频共振经中间态绝热消去给出有效参量下转换哈密顿量，在 N 个多模腔上确定性制备非关联光子对、Bell 态与 W 态，制备时间随腔数按 1/N 缩短。
aliases:
 - 宇称选择定则
 - parity selection rules
 - quantum Rabi system
 - QRS
 - 双光子态制备
 - parity-assisted state generation
tags:
 - 电路量子电动力学
 - 非经典光态
 - 量子纠缠
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qv75ykw9q0rnw5mwtxam2j
source_updated: 2026-08-24T09:17:37Z
---

<div class="entry-lead">超强耦合（ultrastrong）不只打破旋转波近似，还送来一份"免费"的对称性资源：量子 Rabi 模型的 $\mathbb{Z}_2$ 宇称把能级分成 p=±1 两族，跨族跃迁被选择定则封死。Cárdenas-López、Romero、Solano 等人把这个禁戒当引擎用——基态与第二激发态同宇称，单光子到不了、双光子和频共振却能到；中间态绝热消去后得到一个有效的参量下转换哈密顿量。把 N 个多模腔挂上去，同一套共振条件 $\omega_1+\omega_2=\nu_{20}$ 依次产出非关联光子对（N=1）、Bell 态（N=2）、W 态（N≥3），且制备时间随腔数按 1/N 缩短——多模结构本身就是加速器。</div>

## 量子 Rabi 系统的宇称选择定则

超强耦合下二能级系统与腔模由量子 Rabi 哈密顿量描述（$\hbar=1$）：

$$
H_{\mathrm{QRS}} = \omega_{\mathrm{cav}} a^\dagger a + \frac{\omega_q}{2}\sigma^z + g(a+a^\dagger)(\sigma^+ + \sigma^-),
$$

其中 $\omega_q$ 为比特频率、$\omega_{\mathrm{cav}}$ 为腔频、$g$ 为耦合强度、$a$/$\sigma$ 分别为腔与比特算符。计数算符 $\Pi = \exp\left[i\pi\left(a^\dagger a + \sigma^+\sigma^-\right)\right]$ 与哈密顿量对易——**激发数宇称 $\mathbb{Z}_2$ 是严格对称性**，能级按 $p=\pm1$ 分族（记 $|n,p\rangle$，$n$ 为族内序号），跨族的单光子跃迁被禁戒。

取 $\omega_q = 0.8\,\omega_{\mathrm{cav}}$、$g = 0.6\,\omega_{\mathrm{cav}}$：最低三个能级构成级联（Ξ）结构，且 $|0,+\rangle$、$|2,+\rangle$ 同宇称而 $|1,-\rangle$ 反宇称——单光子无法连接 $|0,+\rangle\leftrightarrow|2,+\rangle$，但**双光子和频过程**可以：当两个腔模满足

$$
\omega_1^{\ell} + \omega_2^{\ell'} = \nu_{20}
$$

（$\nu_{20}$ 为 QRS 基态到第二激发态的跃迁频率）且每个单模远离中间态（可绝热消去）时，得到有效哈密顿量

$$
\mathcal{H}_{\mathrm{eff}} = \mathcal{H}_{\mathrm{QRS}} + \mathcal{H}_{c} + \sum_{\ell,\ell'} \mathcal{J}_{\ell}^{\ell'}\left(b_\ell^\dagger c_{\ell'}^\dagger \mathcal{S}^- + b_\ell c_{\ell'} \mathcal{S}^+\right),
\qquad
\mathcal{J}_{\ell}^{\ell'} = J_1^\ell J_2^{\ell'}\, \chi_{01}\chi_{21}\left[\frac{1}{\Delta_{10}^{1}} + \frac{1}{\Delta_{21}^{2}}\right],
$$

其中 $b_\ell$/$c_{\ell'}$ 是两个腔族的模算符、$\mathcal{S}^+ = |2,+\rangle\langle0,+|$ 是有效二能级阶梯算符、$\chi_{kj} = \langle k,+|a|j,-\rangle$ 是腔算符在 QRS 本征基间的矩阵元、$\Delta_{kj}^{1,2} = \omega_{1,2}^\ell - \nu_{kj}$ 为失谐——这正是光学参量下转换的微波版，"非线性晶体"由宇称选择定则提供。

## 确定性态制备与多模加速

协议：先以保持宇称的微波脉冲（$\mathcal{H}_D = \Omega\cos(\nu_{20}t)\sigma^z$，同宇称间跃迁允许）把 QRS 从基态激发到 $|2,+\rangle$，再自由演化：

- $N=1$：演化 $t_S = \pi/2\mathcal{J}$ 得 $|0,+\rangle\otimes|1_{\omega_1}\rangle\otimes|1_{\omega_2}\rangle$——**两个非关联单光子**（频率不同）；
- $N=2$：$t_B = \pi/4\mathcal{J}$ 得两个频率各异的 **Bell 态** $|\Psi_{\omega_n}^+\rangle = \frac{1}{\sqrt2}(|1_{\omega_n}\rangle|0_{\omega_n}\rangle + |0_{\omega_n}\rangle|1_{\omega_n}\rangle)$；
- $N\geq3$：$t_W = \pi/6\mathcal{J}$ 得两个频率各异的 **W 态**（单光子在多腔上的叠加）。

多模加速来自结构：有效哈密顿量把初态耦合到目标态的矩阵元正比于腔数平方根之积 $\sqrt N\times\sqrt N$，制备时间按 **1/N** 缩短。示例参数（$\omega_{\mathrm{cav}}=2\pi\times13.12$ GHz、$g=0.6\omega_{\mathrm{cav}}$、$|\chi_{01}|=0.8188$、$|\chi_{21}|=1.235$）：$t_S\approx25.10$ ns、$t_B\approx12.55$ ns、$t_W\approx8.37$ ns（N=3）、$t_W\approx6.28$ ns（N=4）。

![[assets/figures/parity-assisted-state-generation/cardenaslopez2019-fig2-population-evolution.jpg]]

*从头算（完整量子 Rabi 哈密顿量）的布居演化，初态 $|2,+\rangle\otimes|0\rangle^{\otimes NM}$，腔数 N=1/2/3/4 递增：目标态（非关联光子对、Bell、W）的布居依次达到，且制备时间随 N 缩短——多模结构使有效耦合矩阵元按 N 增长。图源：Cárdenas-López et al., Symmetry (2019)，Fig. 2。*

协议还支持**密度矩阵复制**（对任意 QRS 初态，输出两腔上出现相同的约化密度矩阵——量子态"复印"）与**纠缠交换**：在每个腔上挂一个辅助超导比特，经交换操作把腔间纠缠转移到远距比特对上，得到真正多体纠缠（并发度与 negativity 验证）。

![[assets/figures/parity-assisted-state-generation/cardenaslopez2019-fig3-density-matrices.jpg]]

*重构的约化密度矩阵：制备后各腔模式（不同频率）的约化态——非对角元显示单光子相干地分布在多个腔上，与目标 Bell/W 态的预言一致。图源：Cárdenas-López et al., Symmetry (2019)，Fig. 3。*

## 电路实现

作者给出的超导实现方案：QRS 用磁通比特与谐振器实现 $g/\omega_{\mathrm{cav}}\sim0.1$ 量级的超强耦合（文中讨论可达 0.6 的深强参数），多模腔用扩展波长谐振器（相邻模间隔即为 $\omega_1$/$\omega_2$ 的自由度），驱动经比特天线注入。要点是非线性完全来自宇称选择定则与 QRS 谱的非谐——不需要额外的约瑟夫森参量器件。

## 与其他概念的关系

- [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]：RWA 极限下宇称对称分解为两个退耦的 JC 块；超强耦合把两个宇称扇区重新缝合，选择定则由 $\mathbb{Z}_2$ 严格给出。
- [[circuit-qed/bosonic-cqed|玻色 cQED 与腔编码量子计算]]：本词条制备的非经典态（Bell/W、单光子叠加）是那边的物理资源——一个管"怎么造"，一个管"怎么用"。
- [[circuit-qed/superstrong-coupling|超强耦合]]：同为"超越常规耦合层级"的物理——超强（superstrong，gρ>1）改真空结构，ultrastrong（g~ω）打开宇称禁戒通道；两者正交可叠加。
- [[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]：宇称禁戒的单光子跃迁正是"没有劈裂"的那条线——选择定则的谱学表现。
- [[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]：制备协议中的脉冲序列（先激发后演化）与 Floquet 工程共享"用驱动选通道"的思想。

## 参考文献

- Cárdenas-López, F. A., Romero, G., Lamata, L., Solano, E., Retamal, J. C. Parity-assisted generation of nonclassical states of light in circuit quantum electrodynamics. *Symmetry* 11, 372 (2019). DOI: 10.3390/sym11030372；arXiv:1808.07045（QAtlas 缓存：1808.07045）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
