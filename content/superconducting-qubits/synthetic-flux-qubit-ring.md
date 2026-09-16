---
title: 合成磁通与分数磁通量子
description: 电容耦合 transmon 环实现强吸引 Bose-Hubbard 模型，Leviton 洛伦兹脉冲的 Floquet 频率调制给 hopping 加 Peierls 相位形成合成磁通，亮孤子的持续电流以分数磁通量子为周期——经微波反射谱读出的量子模拟方案。
aliases:
 - 合成规范场
 - 分数磁通
 - synthetic flux
 - Leviton 协议
 - fractional flux quanta
tags:
 - 超导量子比特
 - 量子模拟
 - 合成规范场
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgv9h4h8r7pjhwg4254j1
source_updated: 2026-09-04T22:01:00Z
---

<div class="entry-lead">把 $N_s$ 个电容耦合的 transmon 排成环，低能等离激元就是一群**相互吸引**的玻色子（弱非谐性给出 $U\approx E_C$ 的在位吸引），环上再穿一个"合成磁通"——Chirolli 等人用 Leviton 洛伦兹脉冲序列对 transmon 频率做 Floquet 调制，让 hopping 带 Peierls 相位且**保持平移不变、不离开磁通甜点**。这个平台模拟的是冷原子中难以观测的亮孤子物理：孤子的持续电流与能带以**分数磁通量子**为周期（周期 $\propto 1/N_p$，$N_p$ 为玻色子数），而 transmon 环天然工作在 $N_p$ 适中的区间，分数化信号可以在微波反射谱里直接读出。</div>

## 平台：transmon 环上的吸引 Bose-Hubbard 模型

![[assets/figures/synthetic-flux-qubit-ring/chirolli2025-fig1-transmon-ring.jpg]]
*电容耦合 transmon 环：(a) $N_s$ 个 transmon 经耦合电容 $C_0$ 相连，低能等离激元作为玻色子在站点间 hopping，实现环上吸引玻色子的 Bose-Hubbard 模型；(b) Floquet 调制协议——用劈裂结的时变磁通局部调制 transmon 频率。图源：Chirolli et al. (2025), Fig. 1。*

环上系统的低能有效哈密顿量为

$$
H_0=\sum_{j=1}^{N_s}\left[\omega n_j-\frac{U}{2}n_j(n_j-1)-J_0\left(a_{j+1}^\dagger a_j+\mathrm{H.c.}\right)\right],
$$

其中 $a_{N_s+1}\equiv a_1$ 保证环形边界、$\omega\simeq\sqrt{8E_CE_J}-E_C$、在位吸引 $U\simeq E_C$（来自约瑟夫森势的弱非谐）、hopping $J_0\simeq\dfrac{C_0}{C_J+C_g}\sqrt{\dfrac{E_CE_J}{8}}$（$C_0\ll C_J,C_g$）。与约瑟夫森结阵列中库珀对的**排斥**相互作用相反，这里的玻色子间作用是**吸引**的；典型参数落在 $J_0\ll U\ll\omega$ 的强相互作用区。关键的平台优势：transmon 环自然工作在**玻色子数适中**（$N_p$ 不大）的区间——这正是冷原子中难以进入、而亮孤子分数化现象最显著的参数窗口。

## Leviton 协议：保持平移不变与甜点的合成规范场

合成磁场不能像冷原子那样推动物质波，必须靠 Floquet 调制注入。对 transmon 频率做周期为 $T$ 的调制 $\omega_j(t)=\omega-\delta\omega_j(t)$（经劈裂结的时变磁通，要求 $2\pi/T\gg J_0,U$），幺正变换后取时间平均得有效 Floquet 哈密顿量，目标是让 hopping 获得 Peierls 相位 $J_0\to J_0 e^{i\Phi/N_s}$。已有方案（静态梯度 + 匹配的正弦调制、多频率着色调制、硬核玻色子极限下的双比特门组）要么把 transmon 拉离甜点、要么破坏平移不变、要么够不到相互作用物理。

**Leviton 协议**用洛伦兹脉冲序列解决全部三个问题：

$$
\delta\omega_j(t)=\sum_k\frac{2\tau}{(t-t_j-kT)^2+\tau^2},
$$

其中 $t_j$ 是站点相关的参考时延、$\tau$ 为脉宽。Leviton 以指数型傅里叶谱与 $2\pi$ 量子化相位推进著称（最初作为量子霍尔边缘态的无噪声电子激发提出）。调制 $N_m\ge2$ 个**相邻** transmon，相邻站点间的 hopping 变为

$$
Je^{-i\gamma}=\left\langle J_0 e^{-i\int^t dt'\,[\delta\omega(t')-\delta\omega(t'-\delta t)]}\right\rangle_T
\ \simeq\ J_0 e^{-2\pi i\delta t/T}\quad\left(e^{-4\pi\tau/T}\ll1\right),
$$

即相位 $\gamma$ 随相邻脉冲时延 $\delta t$ 近似线性可调、而幅度 $J/J_0$ 几乎不受影响。

![[assets/figures/synthetic-flux-qubit-ring/chirolli2025-fig2a-hopping-phase.jpg]]
*Leviton 调制下两相邻 transmon 间 hopping 的相位随脉冲时延 δt/T 的变化（四个归一化脉宽 τ/T）：相位近似线性覆盖 0–2π，合成磁通由此任意设定；同时 hopping 幅度对 δt 仅弱依赖（见原文图 2b）——调制"只加相位、不伤耦合"。图源：Chirolli et al. (2025), Fig. 2。*

协议的三重优点：**平移不变性保持**（脉冲序列沿环整体平移等价）、**甜点工作**（调制经由劈裂结磁通在甜点附近完成，抗磁通噪声）、**不依赖硬核极限**（保留了 $U$ 有限时才有的亮孤子物理）。

## 分数磁通量子：亮孤子的读出

强吸引玻色子在环上形成**亮孤子**——其指纹是磁通量子分数化：系统能量/持续电流对磁场的周期从非相互作用情形的 $\Phi_0$ 缩短为 $\Phi_0/N_p$ 的分数。这个 $N_p$ 依赖在冷原子中因粒子数大而难以直接观测；transmon 环上 $N_p$ 适中，分数化可及。

读出用"散射实验"：对环施加微波驱动，测量反射波。

![[assets/figures/synthetic-flux-qubit-ring/chirolli2025-fig3-reflection-spectrum.jpg]]
*反射谱随合成磁通 Φ、驱动失谐 ω_d−ω 与驱动强度的演化：孤子能带对磁通的分数周期（N_p=2 区间为 Φ₀/2）在反射谱的振荡中显形——分数磁通量子的直接读出通道。图源：Chirolli et al. (2025), Fig. 3。*

**实验可行性边界**（$N_p=2$ 区间，$J=0.041$ GHz、$U=0.188$ GHz）：孤子的有效 hopping $J_{(2)}=0.018$ GHz；要求弛豫与退相干足够慢——$N_p\gamma_1,\gamma_\phi\ll J_{(N_p)}/N_s$，取 $\gamma_1=1$ MHz、与传输线谐振腔耦合 $\Gamma=1$–10 MHz、$\gamma_\phi=0$ 时分数化振荡可见（超出即被抹平）。

## 与其他概念的关系

- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：平台基元——弱非谐性同时提供比特与吸引玻色子相互作用；劈裂结的时变磁通是频率调制的执行器。
- [[circuit-qed/floquet-dynamics|Floquet 驱动动力学]]：Leviton 协议是 Floquet 方法的一个具体工程化——用脉冲形状的谱性质（指数谱 + 量子化相位）让时间平均后的有效哈密顿量精确可控。
- [[scaling-automation/thouless-pumping-jja|约瑟夫森结阵列中的 Thouless 量子泵浦]]：同一"超导电路模拟拓扑/规范物理"家族的另支——JJA 里用栅控做 Rice-Mele/Harper-Hofstadter 泵浦，这里用 transmon 环做吸引玻色子 + 合成磁通。
- [[superconducting-qubits/flat-band-localization|平带局域化与 Aharonov–Bohm 笼蔽]]：Peierls 相位方案的另一应用——菱形格子中合成磁通调带色散，Φ=π 时三带全平、本征态紧致局域。
- [[superconducting-qubits/floquet-anisotropic-transverse-interactions|横向各向异性相互作用的 Floquet 工程]]：规范场思想在合成空间的对应物——计算基矢闭合回路的驱动相位差充当可调磁通，观测 AB 干涉与笼蔽。
- [[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]：微波反射读出共享同一套散射谱学语言。
- 展望（原文）：孤子在量子计量中的潜力、Aharonov–Bohm 振荡、格点规范理论的介观模拟——与强相互作用冷原子、拓扑光子学构成互补的合成规范场平台。

## 参考文献

- Chirolli, L., Polo, J., Catelani, G., Amico, L. Synthetic fractional flux quanta in a ring of superconducting qubits (2025). DOI: 10.1103/d3rk-kh1k；arXiv:2409.06511（QAtlas 缓存：2409.06511）。
