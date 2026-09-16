---
title: 量子比特快速复位
description: 用片上双工器把读出通道与耗散通道物理分离、以低通线驻波耗散模在几十纳秒内把激发态比特复位到基态并保持 Purcell 保护的耗散工程架构。
aliases:
 - 量子比特复位
 - qubit reset
 - 快速复位
 - active reset
 - 耗散器复位
tags:
 - 超导量子比特
 - 耗散工程
 - 初始化
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvegtystvk2daaw3am4tjw
source_updated: 2026-09-16T00:05:56Z
---

<div class="entry-lead">快速复位是量子纠错、比特复用编译与开放系统模拟的共同前提，但它天然与比特保护矛盾：复位需要一条通向耗散浴的通路，而通路本身又会把比特的相干性漏给环境。Ding 等人 2025 年的架构用两片片上双工器（diplexer）把这对矛盾拆到两条频带上——高通支路照常传读出信号（读出腔可以放在比特频率之上，减少测量诱导跃迁），低通支路里一个 4.23 GHz 驻波"耗散模"专职复位；比特平时停在两支滤波器的共同阻带里，看不见任何耗散通道。把可调 transmon 调到与耗散模共振，100 ns 内 |e⟩→|g⟩ 复位残余误差仅 2.7%；利用相干布居反转还可压到 27 ns。</div>

## 架构：双工器分离读出与耗散

器件由两片对称的片上双工器经两条传输线连接：每片双工器由截止频率 3.35 GHz 的低通滤波器与截止频率 6.50 GHz 的高通滤波器（集总元件：叉指电容 + 螺旋电感，版图 3.7×0.8 mm²）组成。高通线耦合多只读出腔（7.2–7.4 GHz，落在通带内、外耦合平坦），承载频分复用读出；低通线长 25 mm，经 6.3 fF 电容耦合多只比特（约 4.8 GHz），并在两只低通滤波器之间形成一个全波长驻波模——耗散模（dissipator，设计值 4.23 GHz），类似两面反射镜夹出的 Fabry–Perot 腔，低通滤波器在该频率的有限透射（$S_{21}\approx-30\ \mathrm{dB}$）提供泄放通道。

频率分配是设计的关键：**比特（~4.8 GHz）落在高通与低通两个滤波器的共同阻带内**——相干操作时比特看到失配阻抗，不会向外部电路耗散（Purcell 保护）；读出腔在高通通带内正常工作；耗散模在低通线的阻带反射区内。由于读出腔不必迁就复位而压低频率，可以采用**腔在比特之上**的配置——高激发态杂化引起的测量诱导跃迁在此配置下更少，这正是[[readout-measurement/readout-induced-leakage|读出诱导泄漏]]问题的一个架构级缓解。

![[assets/figures/qubit-fast-reset/ding2025-fig1a-diplexer-architecture.jpg]]
*架构示意：两片片上双工器（各含高通 + 低通滤波器）经两条传输线相连；高通线耦合多只读出腔传读出信号，低通线经 6.3 fF 电容耦合多只比特并承载耗散模驻波，比特位于共同阻带内受 Purcell 保护。图源：Ding et al. (2025), Fig. 1(a)。*

![[assets/figures/qubit-fast-reset/ding2025-fig2-s21-diplexer.jpg]]
*整个双工器结构的实测与仿真传输系数 $S_{21}$：低通支路在 3.35 GHz 以下、高通支路在 6.50 GHz 以上导通，两条同设计样品一致性好；4–8 GHz 间的包络来自测量链中 HEMT 放大器带宽。图源：Ding et al. (2025), Fig. 2。*

## 复位动力学：指数耗散与相干反转

把可调 transmon 的频率从 4.86 GHz 调低到与耗散模共振（4.37 GHz），激发态布居经共振交换被耗散模泄放，按特征速率

$$
\Gamma\approx\frac{1}{21\ \mathrm{ns}}
$$

指数衰减。复位时长取约 $5\Gamma^{-1}$（100 ns）时残余误差约 2.7%。复位结束后把比特调回最大频率（远离耗散模），在 4.86 GHz 处稳态激发布居约 0.34%，由玻尔兹曼分布

$$
\frac{p_e}{p_g}=\exp\!\left(-\frac{\hbar\omega_q}{k_B T_{\mathrm{bath}}}\right)
$$

反推出等效浴温 $T_{\mathrm{bath}}=41\ \mathrm{mK}$；与耗散模共振时的平衡布居 1.35% 对应耗散器等效温度 49 mK——略高于稀释制冷机基温，来自经馈线混入的较高温板的残余辐射。

进一步的速度提升来自**相干布居反转**：不做指数等待，而是用脉冲让布居相干地翻回基态，复位时间可压缩到 **27 ns**。该技术同样适用于从第二激发态 $|f\rangle$ 的复位——对[[readout-measurement/readout-induced-leakage|泄漏]]到更高态的情形，级联复位门提供了清除手段。

![[assets/figures/qubit-fast-reset/ding2025-fig4ab-reset-efficiency.jpg]]
*|e⟩→|g⟩ 复位效率：(a) 实验时序（平台时间 $t_p$ 内比特与耗散模共振）；(b) 复位后残余布居随共振保持时间的指数衰减，特征速率 Γ≈1/(21 ns)，100 ns（约 5Γ⁻¹）后残余误差约 2.7%。图源：Ding et al. (2025), Fig. 4(a–b)。*

## 量子电路冰箱：电压可调的耗散旋钮

与双工器"频率上分道"不同，**量子电路冰箱（QCR, quantum-circuit refrigerator）**在时域上做文章：给读出腔并联一个超导–绝缘–正常金属–绝缘–超导（SINIS）结，平时不加偏压、SINIS 对腔"隐形"，复位瞬间加电压脉冲——偏压驱动的**光子辅助准粒子隧穿**开始从腔抽取能量，腔的耗散率被临时抬高。耗散率的电压依赖写作

$$
\kappa_{\mathrm{eff}}(V_b) = \kappa_r + \delta\gamma_{\mathrm{QCR}}(V_b)
$$

其中 $\kappa_r$ 是无偏压时的本底腔耗散率，$\delta\gamma_{\mathrm{QCR}}$ 是 QCR 附加冷却速率。微观上它由 SINIS 在腔光子数态 $|m\rangle\to|m'\rangle$ 之间的跃迁率给出：$\delta\gamma_{\mathrm{QCR}}=\Gamma_{0,1}(V_b)-\Gamma_{1,0}(V_b)$，跃迁率 $\Gamma_{m,m'}$ 由隧穿电阻 $R_T$（实测 72 kΩ）、normal 岛充电能与态分布函数决定。实验上用脉冲前后腔信号幅度比的对数斜率提取 $\delta\gamma_{\mathrm{QCR}}$：最优偏压在 $eV_b/2\Delta=1.03$（$\Delta$ 为 Al 铅的超导能隙 193 μeV）附近，腔耗散率较本底（$\kappa_r=2.36\times10^6\ \mathrm{s^{-1}}$）**提升约一个数量级**，且理论曲线（无拟合参数）与实测吻合。

![[assets/figures/qubit-fast-reset/yoshioka2023-fig1a-qcr-device.jpg]]

*QCR 器件总览：Nb（紫）刻蚀出读出腔与馈线；腔的一端经叉指电容耦合 SINIS 结（Cu/Al 双角度蒸发），另一端耦合 transmon 比特；SINIS 偏压线由 bias-T 分离直流与脉冲。图源：Yoshioka et al. (2023), Fig. 1(a)。*

![[assets/figures/qubit-fast-reset/yoshioka2023-fig3b-qcr-relaxation-vs-bias.jpg]]

*腔耗散率随 SINIS 偏压的变化：横轴为归一化偏压 eV_b/2Δ；黑点划线为 QCR 关闭时的本底 κ_r，绿点为开启后的实测值，蓝/红理论线分别给出 δγ_QCR 与 κ_eff=κ_r+δγ_QCR——阈值之上耗散率增大约一个量级，eV_b/2Δ≈1.03 处 ON/OFF 比最大。图源：Yoshioka et al. (2023), Fig. 3(b)。*

### 复位协议与实测速度

复位协议沿用微波侧带方案：两个驱动脉冲把激发态能量搬运成腔光子、再靠腔耗散泄放——$\Omega_{\mathrm{Rabi}}$ 脉冲把 $|e,0\rangle$ 泵到 $|f,0\rangle$，$g_{\mathrm{Rabi}}$ 脉冲使 $|f,0\rangle$ 与 $|g,1\rangle$ 交换能量，腔光子以 $\kappa_{\mathrm{eff}}$ 泄放后比特落回 $|g,0\rangle$。系统哈密顿量（含侧带项）为

$$
\hat H/\hbar = \omega_r \hat a^\dagger\hat a + \omega_{ge}\hat b^\dagger\hat b + \frac{\alpha}{2}\hat b^{\dagger2}\hat b^2 + \lambda(\hat b^\dagger\hat a + \hat b\hat a^\dagger) + \frac{g_{\mathrm{Rabi}}}{\sqrt2}(\hat b^{\dagger2}\hat a\, e^{i\omega_{f0g1}t} + \mathrm{h.c.}) + \frac{\Omega_{\mathrm{Rabi}}}{\sqrt2}(\hat b\, e^{i\omega_{ef}t} + \mathrm{h.c.})
$$

其中 $\hat a$（$\hat b$）是腔（比特）算符，$\lambda/2\pi=136\ \mathrm{MHz}$ 是比特–腔耦合，$\omega_{f0g1}/2\pi=2.499\ \mathrm{GHz}$ 是侧带跃迁频率；两脉冲幅度取满足 $\Omega_{\mathrm{Rabi}}$–$g_{\mathrm{Rabi}}$ 最优配比（实验固定 $g_{\mathrm{Rabi}}/2\pi=28.4\ \mathrm{MHz}$）。器件参数：$\omega_r/2\pi=6.538\ \mathrm{GHz}$、$\omega_{ge}/2\pi=4.663\ \mathrm{GHz}$、$\alpha/2\pi=-261.8\ \mathrm{MHz}$、$T_1=9.6\ \mu s$。最优偏压下实测：**残布居在约 180 ns 内降到 1% 以下（99% 复位）**，与主方程模拟一致；由此推出的稳态基态占据 99.89% 与实测 $99.5\pm0.5\%$ 吻合。对比之下，靠该比特自然弛豫达到 99% 需要 42 μs——加速两百多倍。f0g1 强脉冲的 ac-Stark 频移与 QCR 偏压引起的 Lamb 频移都需要事先校准。

![[assets/figures/qubit-fast-reset/yoshioka2023-fig5-initialization-time.jpg]]

*最优参数（eV/2Δ=1.03、g_Rabi/2π=28.4 MHz）下的初始化实测：横轴为初始化脉冲长度，纵轴为 Rabi 布居测量提取的 |e⟩ 残布居——约 180 ns 处越过 99% 复位线，与主方程数值模拟吻合。图源：Yoshioka et al. (2023), Fig. 5。*

### 速度极限与权衡

QCR 路线的复位速度由腔耗散率上限决定，而后者反比于 SINIS 隧穿电阻：降低 $R_T$、增大 SINIS–腔耦合电容可把 99% 复位压到 100 ns 以内。理论极限是 SINIS 直接耦合比特（预言 6 ns），但代价是比特寿命缩短约 12.6%；经腔中介的方案对比特相干的代价小于 1%——这是"耗散通路物理隔离（双工器）"与"耗散旋钮电压开关（QCR）"两条路线共享的核心权衡。QCR 关闭时仍需核对偏压状态对比特 $T_1$ 的影响；f0g1 泵浦线的高功率脉冲也要求对 ac-Stark 做逐幅度校准。

## 适用条件与边界

- **需要频率可调比特**：复位依赖把比特调到耗散模共振，固定频率比特需改用参量调制或全微波驱动等方案。
- **耗散模温度是下限**：复位的稳态残余由耗散器等效温度决定（本文 49 mK），更低的残余需要芯片上/封装内的独立低温终端来隔离馈线噪声。
- **多比特共享一条耗散通道**：架构面向多比特阵列（低通线可挂多只比特），代价是耗散模成为公共资源，同时复位时的串扰需在调度中规避。
- **被动初始化的替代**：热弛豫等待无需任何硬件但受 $T_1$ 限制（数十至数百 µs）；反馈式复位依赖测量与反馈延迟。耗散器方案把复位时间压到 ns 量级且无需测量。

## 与其他概念的关系

- [[readout-measurement/purcell-filter|Purcell 滤波器]]：同属"耗散的频谱管理"——Purcell 滤波器在读出频段开窗、比特频段阻挡；本架构用双工器把读出与耗散分成两条物理通路，读出腔因此摆脱"必须低于比特"的约束。
- [[qubit-control/spin-initialization|自旋初始化]]：半导体自旋比特的被动/测量基初始化与本词条的主动耗散复位互为镜像——前者靠弛豫到基态，后者靠工程化的耗散通道主动抽运。
- [[readout-measurement/dispersive-readout|色散读出]]：高通支路承载的频分复用读出不受复位架构影响，腔在比特之上的配置还降低了测量诱导态跃迁。
- [[readout-measurement/readout-induced-leakage|读出诱导泄漏]]：泄漏态清算是复位协议的任务之一，从 $|f\rangle$ 态的级联复位是两条词条的共同接口。
- [[superconducting-qubits/transmon-qubit|transmon 量子比特]]：实验载体为频率可调 transmon，其 SQUID 调频范围决定能否够到耗散模。
- 与量子电路冰箱（见上文 QCR 一节：SINIS 偏压把腔耗散率电压可调地抬高约一个量级）、内禀 Purcell 滤波器、参量磁通调制等方案一道，本架构属于超导比特"耗散工程"复位工具箱的一员。

## 参考文献

- Yoshioka, T., Mukai, H., Tomonaga, A., Takada, S., Okazaki, Y., Kaneko, N., Nakamura, S., Tsai, J.-S. Active Initialization Experiment of Superconducting Qubit Using Quantum-circuit Refrigerator. arXiv:2306.10212 (2023)（QAtlas 缓存：2306.10212）。
- Ding, J., Li, Y., Wang, H., Xue, G., Su, T., Wang, C., Sun, W., Li, F., Zhang, Y., Gao, Y., Peng, J., Jiang, Z. H., Yu, Y., Yu, H., Yan, F. Multi-Purpose Architecture for Fast Reset and Protective Readout of Superconducting Qubits. *Physical Review Applied* 23, 014012 (2025). DOI: 10.1103/PhysRevApplied.23.014012；arXiv:2407.21332（QAtlas 缓存：2407.21332）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
