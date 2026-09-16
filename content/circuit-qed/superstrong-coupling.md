---
title: 超强耦合
description: 自发辐射线宽超过离散真空模间距（gρ>1）的 cQED 工作区：高阻抗约瑟夫森传输线与 transmon 直流连接，单个"原子"同时与多个频率可分辨的真空模杂化、反向修改真空——谱中不再有单个真空 Rabi 劈裂，代之以宽度 Γ 的态密度峰与原子诱导的 Kerr/cross-Kerr 光子-光子相互作用。
aliases:
 - superstrong coupling
 - 超强耦合区
 - 超强光物质耦合
 - 多模超强耦合
tags:
 - 电路量子电动力学
 - 耦合
 - 多模物理
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qv795jy9dwn074q1rpqp60
source_updated: 2026-08-24T09:18:57Z
---

<div class="entry-lead">真空涨落改变原子（自发辐射、Lamb 位移）是量子电动力学的常识；超强耦合把这个方向反过来——**单个原子修改真空**。Kuzmin、Manucharyan 等人（马里兰大学）把一个劈裂结 transmon 直流连接到 4×10⁴ 个约瑟夫森结组成的高阻抗传输线（Z∞ 逼近电阻量子 R_Q≈6.5 kΩ）：高阻抗 + 直流连接让 transmon 的自发辐射线宽 Γ≈600 MHz 压过约 50–60 MHz 的腔模间距——判据 $g\rho>1$（实验 gρ≈1.3、Γρ≈10）。谱里不再有单个真空 Rabi 劈裂，取而代之的是约 20 个模式共同参与的态密度峰：原子"溶进"了多模真空。这是通向 Kondo 型量子杂质模型光子模拟的门。</div>

## 判据：与强耦合、超强耦合（ultrastrong）的区分

三个工作区容易混淆，判据各不相同：

- **强耦合**（strong）：$g$ 超过损耗率 $\kappa$——见[[circuit-qed/strong-coupling|强耦合判据]]词条，比特与腔在衰减前多次交换激发；
- **超强耦合**（ultrastrong）：$g\sim\omega_0$——旋转波近似失效、激发数不守恒、基态带光子；
- **超强耦合**（superstrong，本词条）：$g\rho>1$，其中 $\rho = 2L/v$ 是长 $L$、光速 $v$ 的传输线真空模密度（$1/\rho$ 即自由谱区）——**自发辐射线宽超过模间距**，单个原子同时与多个频率可分辨的真空模杂化。实空间图像：激发交换快于光子往返线长所需时间 $2L/v$，单原子足以改写光子波函数的节点/腹点结构。

此前两个相关多模实验的 $\Gamma\rho\lesssim1$；本工作 $\Gamma\rho = 2\pi(g\rho)^2\approx10$——首次以逐模频率移动直接观测原子的辐射展宽。

## 器件与 Caldeira–Leggett 模型

![[assets/figures/superstrong-coupling/kuzmin2018-fig1-device.jpg]]

*器件：劈裂结（transmon"原子"）直流连接 4×10⁴ 结的高阻抗双线传输线，另一端接偶极天线做局域射频谱。链上集体模是光速 v≈10⁶ m/s、阻抗 Z∞~R_Q 的微波光子，等离子体带边 ω_p/2π≈20 GHz 由链单元结的等离子体共振设定；劈裂结的 E_J(Φ) 由外磁通调谐、非谐由充电能 E_C/h≈300 MHz 给出。图源：Kuzmin et al. (2018)，Fig. 1。*

开路传输线建模为无穷多个并联的串联 LC 振子（频率 $\omega_j = 2\pi(j-1/2)/\rho$、阻抗 $z_j = Z_\infty\omega_j\rho/4$），与线性化 transmon（$\omega_0=\sqrt{8E_JE_C}/\hbar - E_C/2\hbar$、$z_0 = R_Q\sqrt{2E_C/\pi^2E_J}$）直流耦合。哈密顿量是教科书级的 **Caldeira–Leggett 模型**（量子自由度 + 欧姆浴），含严格导出的 $A^2$ 项；单模耦合 $g_j = \frac{\omega_0}{2}\sqrt{z_0/z_j}$ 满足 $g_j^2\sim1/j$——微扰级数自动正则化，规避了电容耦合 transmon 多模 JC 模型的发散困难。辐射线宽有闭式

$$
\Gamma = \frac{1}{2\pi Z_\infty C_J},
$$

只依赖线阻抗与劈裂结电容——**阻抗翻倍、线宽减半**，被对照器件（Z∞=9.8 kΩ）的态密度峰宽度精确验证。

## 观测：真空态密度里的自发辐射线

![[assets/figures/superstrong-coupling/kuzmin2018-fig3-vacuum-dos.jpg]]

*单粒子光子态密度（DOS）随频率的变化：(a) 覆盖约 20 个模式的宽峰（洛伦兹线型、单位面积——transmon 贡献的那一个额外态）叠加在缓增的传输线背景（带边 ω_p/2π=22.6 GHz 的 van Hove 奇点所致）；拟合给出 Z∞=4.9 kΩ。(b) 阻抗翻倍到 9.8 kΩ 的对照器件：DOS 峰宽精确减半，验证 Γ=1/2πZ∞C_J。(c) DOS 峰位随磁通移动、精确跟随劈裂结 transmon 的裸共振，峰宽与频率无关且等于理论辐射线宽 Γ≈600 MHz（±50 MHz）。图源：Kuzmin et al. (2018)，Fig. 3。*

反射谱给出间隔约 50–60 MHz 的规则共振列，随磁通周期性扰动——但**没有单个真空 Rabi 劈裂**，固定磁通的原始谱甚至看不出原子跃迁。信息藏在逐模频移里：从测得的模式频率重构态密度 $\mathrm{DOS} = (\pi/L)/(\omega_{j+1}-\omega_j)$，得到覆盖约 20 个模式的洛伦兹峰（单位面积=原子的一个额外态），峰位跟随 transmon 裸共振、峰宽等于理论辐射线宽 Γ≈600 MHz——自发辐射线以"原子在多模真空上留下的态密度印记"形式被读出。

## 原子诱导的光子-光子相互作用

把 Kerr 项（$K=E_C/2$）用杂化后的准粒子光子算符 $c_j$ 表达：

$$
H/h \approx \sum_j\left(\tilde\omega_j c_j^\dagger c_j + K_j (c_j^\dagger c_j)^2\right) + \sum_{i\neq j}\chi_{i,j}\, c_i^\dagger c_i\, c_j^\dagger c_j,
$$

$K_j$ 是诱导 Kerr（Bose–Hubbard 在位排斥），$\chi_{i,j}$ 是诱导 cross-Kerr。实验验证：高功率谱中 DOS 峰内的模式比峰外移动快得多（过驱动到阈值后劈裂结相位摆幅超过 2π、等效电感发散，共振跳回裸值）；用约单光子驱动峰内一个模式（j=108）再弱功率扫邻近模式，测得 $\chi_{i,j}$ 在 DOS 峰最大处最强、随模式离开原子共振的 Γ 邻域迅速衰减——与微扰计算一致（仅光子数-功率换算可调）。

![[assets/figures/superstrong-coupling/kuzmin2018-fig4-power-dependence.jpg]]

*原子诱导非线性：(a) DOS 峰（7.12 GHz 处）内模式随驱动功率的移动远强于峰外；(b) 固定驱动模式 j=108（7.014 GHz，DOS 峰顶）时邻近模式的色散频移 χ_{i,j}——峰内最大、离开 Γ 邻域后迅速衰减，蓝标为原子大失谐对照，实线为无非拟合参数理论（仅纵轴标度可调）；(c) 若干模式的频移随功率的变化。图源：Kuzmin et al. (2018)，Fig. 4。*

一个反直觉的标度：裸 transmon 模是 $\Gamma\rho\approx10$ 个正则模的近等权叠加，每模幅度 $1/\sqrt{\Gamma\rho}$，故诱导 Kerr/cross-Kerr 按 $E_C/(\Gamma\rho)^2\sim E_C/100$ 缩小——**增强光物质耦合反而把四次非谐稀释到大群线性模上**、压制多体效应。出路是缩小劈裂结到 $E_J/E_C\sim1$：大相位量子涨落使余弦级数展开失效，系统进入 **边界 sine-Gordon 量子场论**——在 $Z_\infty=R_Q$ 有临界点的量子杂质模型（联系耗散量子相变与一维相互作用电子）；或换用磁通/[[superconducting-qubits/fluxonium-qubit|fluxonium]] 类二能级比特，在玻色表象下实现自旋-1/2 Kondo 杂质模型。超强与超强（ultrastrong）叠加时，每个微观模式仍可 individually 访问而多体效应完全展开——系统尺寸本身成为实验旋钮。

## 与其他概念的关系

- [[circuit-qed/strong-coupling|强耦合判据]]：同一"耦合层级阶梯"的下一级——强耦合比损耗、超强比模密度、ultrastrong 比模式频率，三者正交可叠加。
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与[[circuit-qed/superinductance|超电感与约瑟夫森结阵列]]：器件载体——4×10⁴ 结链提供 Z∞~R_Q 的"理想量子电阻"，其内部模式频率可分辨、逐个可访问。
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：这里的"原子"；其四次非谐在超强耦合下被稀释（E_C/100 标度），推动向 fluxonium/小结杂质模型升级。
- [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]：单模 + RWA 的描述在 gρ>1 失效，须换 Caldeira–Leggett 欧姆浴模型。
- [[superconducting-qubits/qubit-array-level-statistics|比特阵列能级统计与混沌抑制]]：同为"用超导电路做杂质/多体物理"的路线——那边是玻色-哈伯德阵列，这边是边界 sine-Gordon/Kondo 杂质。

## 参考文献

- Kuzmin, R., Mehta, N., Grabon, N., Mencia, R., Manucharyan, V. E. Superstrong coupling in circuit quantum electrodynamics (2018). arXiv:1809.10739（QAtlas 缓存：1809.10739）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
