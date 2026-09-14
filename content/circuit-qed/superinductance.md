---
title: 超电感与约瑟夫森结阵列
description: 阻抗超过电阻量子的零直流电阻电感，由约瑟夫森结阵列的动力学电感实现，是大相位涨落量子器件的电磁环境基础。
aliases:
 - 超电感
 - 约瑟夫森结阵列电感
 - superinductance
 - kinetic inductance array
tags:
 - 电路 QED
 - 约瑟夫森结
 - 超导器件
 - 动力学电感
date: 2026-09-14
source: QAtlas
qatlas_id: qa_01m23ap2s074qvyxnk4dap4rzy
source_updated: 2026-09-13T13:00:13Z
---

<div class="entry-lead">超电感是"直流电阻为零、但 RF 阻抗超过电阻量子 $R_Q\approx6.5\ \mathrm{k}\Omega$"的电感——几何电感做不到（受真空阻抗限制），约瑟夫森结阵列的动力学电感却可以。它同时压制电荷涨落与偏置电荷漂移，是 fluxonium 的大电感、高阻抗谐振腔的共同物理基础；实测内耗 <20 ppm、相位滑移率 <1 mHz，性能足以支撑毫秒级相干器件。</div>

## 为什么需要超电感：细结构常数的牵制

利用超导相位大涨落的量子器件（[[superconducting-qubits/fluxonium-qubit|fluxonium]]、stransmon、bloch 振荡器件）面临一个电磁环境难题：**同时**压制电荷量子涨落和偏置电荷的低频漂移。对无耗散 LC 振荡器，基态下磁通涨落与电荷涨落之比是

$$
\frac{\delta\varphi}{\delta q}=\frac{Z_0}{R_Q},
$$

其中 $Z_0=\sqrt{L/C}$ 是振荡器特征阻抗，$R_Q=h/(2e)^2\approx6.5\ \mathrm{k}\Omega$ 是超导电阻量子。细结构常数 $\alpha=1/137$ 造成磁通与电荷涨落的根本不对称：只用几何电感电容时，$Z_0$ 无法超过真空阻抗 $Z_{vac}=\sqrt{\mu_0/\epsilon_0}$，于是 $\delta\varphi/\delta q<Z_{vac}/R_Q=8\alpha$——电荷涨落至少比磁通涨落大一个数量级。要反转这个比值，需要 $Z_0>R_Q$ 的电感，即**超电感**：零直流电阻（不耗散偏置电流）、RF 阻抗超过 $R_Q$（1–10 GHz 频段）、低耗散、自谐振频率远高于工作频段。

几何电感受真空阻抗限制做不到；约瑟夫森结的**动力学电感**（超流惯性）没有这个上限——把约瑟夫森结串成阵列（JJA），每个结贡献 $L_J$，总电感随结数线性增长，$E_J\gg E_C$ 的大结保证相位滑移（phase slip）足够罕见。

![[assets/figures/superinductance/8e3f690553ad38f26e74d1034d0eea4efa19c590b1fa567775b9e2c112a9f383.jpg]]

*约瑟夫森结阵列与谐振器结构：(a) JJA 示意图，对地电容 $C_0$、结电容 $C_J$、结电感 $L_J$；(b) 无桥技术制备的 JJA 扫描电镜图；(c) LC 谐振器光学图——大焊盘实现谐振电容与 CPW 馈线耦合电容，两焊盘之间的 JJA 实现超电感，地平面带捕磁孔；(d) 低频集总模型，串联的相位滑移元（分裂菱形）代表所有结的集体相位滑移贡献，特征能量 $E_S$。图源：Roushan et al. (2012)，Fig. 1。*

## 实测性能：内耗、自谐振与相位滑移

用 $E_J\gg E_C$ 的大约瑟夫森结做阵列，实测三项关键指标：

- **低内耗**：谐振器内耗 <20 ppm（$Q_{int}>3.7\times10^4$）——远低于几何电感典型值，满足低耗散要求；
- **高自谐振**：裸超电感最低谐振频率 14.2 GHz，满足"自谐振远高于 1–10 GHz 工作频段"的设计判据；集总模型拟合给出单结参数 $L_J=1.9$ nH、$C_J=40$ fF、$C_0=0.04$ fF，与室温电阻测量（$L_J=2.1$ nH）一致；
- **极低相位滑移率**：160 结环路在磁通扫描下测得相位滑移间隔超过一小时——滑移率远低于 1 mHz，比更短阵列的既有报道低得多。

![[assets/figures/superinductance/31e496bd9923050c8ba069002b6d55965482e1e2829aef0e24976b4298316baf.jpg]]

*微波传输谱与内耗：(a) 80 结谐振器的典型微波传输数据（单光子量级循环功率），实线为 $Q_{int}>3.7\times10^4$ 的理论预测，插图为内品质因子随温度的变化；(b) 160 结环路同样测量，$Q_{int}>5.6\times10^4$。图源：Roushan et al. (2012)，Fig. 2。*

![[assets/figures/superinductance/49ac2a837bc9ac2f9b35b4ffed16a31a5d83ad0579c02b3b1d78179a3efa4e56.jpg]]

*相位滑移率的测量：(a) 160 结环路谐振器最低模频率随外加磁通的变化——磁通增加时环内持久电流增大、模频率下降，一次相位滑移事件表现为频率跳变（整数个磁通量子数 $m$ 变化），磁通扫描多个量子后才发生一次滑移，典型间隔超过一小时（滑移率远低于 1 mHz）；主动复位方案（高功率脉冲激发 $k\ge2$ 模）让环路回到最低磁通态后继续追踪，离散倒抛物线可明确标定环内磁通量子数。图源：Roushan et al. (2012)，Fig. 4。*

## 与其他概念的关系

- [[superconducting-qubits/fluxonium-qubit|Fluxonium]] 的大电感 $E_L$ 正是 JJA 动力学电感——fluxonium 的深周期势阱直接依赖本词条的超电感实现；其相位滑移率决定阱间隧穿（也即电荷色散）的幅度。
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与 [[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]是同一物理基础在读出侧的应用：特征阻抗 $Z_0>R_Q$ 的谐振腔把真空耦合 $g$ 推到 100 MHz 量级，是半导体量子点-腔杂化的关键使能技术。
- 相位滑移与[[circuit-qed/charge-parity-fluctuation|电荷宇称涨落]]同属"罕见隧穿事件"类噪声：相位滑移是磁通空间的隧穿，准粒子隧穿改变电荷宇称——两者都受指数压低机制保护，但物理来源不同。
- JJA 的可调版本（每个岛配侧栅）是[[scaling-automation/thouless-pumping-jja|Thouless 量子泵浦]]的载体——把超电感从被动元件变成拓扑量子模拟平台。

## 参考文献

- Roushan, P. et al. (2012). *Microwave characterization of Josephson junction arrays: implementing a low loss superinductance*. Physical Review Letters **109**, 137002. [DOI:10.1103/PhysRevLett.109.137002](https://doi.org/10.1103/PhysRevLett.109.137002) · [arXiv:1206.2964](https://arxiv.org/abs/1206.2964)
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
