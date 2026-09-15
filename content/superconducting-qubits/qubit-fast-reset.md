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
date: 2026-09-15
source: QAtlas
qatlas_id: qa_01m0qvggr1cjxy422bh8w6cmyc
source_updated: 2026-09-05T16:43:52Z
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
- 与量子电路冰箱、内禀 Purcell 滤波器、参量磁通调制等方案一道，本架构属于超导比特"耗散工程"复位工具箱的一员。

## 参考文献

- Ding, J., Li, Y., Wang, H., Xue, G., Su, T., Wang, C., Sun, W., Li, F., Zhang, Y., Gao, Y., Peng, J., Jiang, Z. H., Yu, Y., Yu, H., Yan, F. Multi-Purpose Architecture for Fast Reset and Protective Readout of Superconducting Qubits. *Physical Review Applied* 23, 014012 (2025). DOI: 10.1103/PhysRevApplied.23.014012；arXiv:2407.21332（QAtlas 缓存：2407.21332）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
