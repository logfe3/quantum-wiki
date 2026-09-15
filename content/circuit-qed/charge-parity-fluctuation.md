---
title: 电荷宇称涨落与准粒子隧穿
description: 超导比特中准粒子跨结隧穿引起的电荷宇称随机开关，实时观测、弛豫通道分解与对相干的定量影响。
aliases:
 - 电荷宇称开关
 - 准粒子隧穿
 - quasiparticle tunneling
 - charge parity switching
tags:
 - 电路 QED
 - 准粒子
 - 相干性
 - 实时测量
date: 2026-09-13
source: QAtlas
qatlas_id: qa_01m0qv25xx9q7y3whwamkj3zcx
source_updated: 2026-09-12T20:56:50Z
---

<div class="entry-lead">准粒子跨过约瑟夫森结每隧穿一次，就往岛上留（或带走）一个不成对电子，把比特的宇称从偶翻成奇——跃迁频率随即移动半个宇称周期。用色散读出把宇称变成实时电报信号，可以数出每一次隧穿：实测开关时间约 0.8 ms，且准粒子隧穿只贡献约 5% 的弛豫事件——它不是相干的主要瓶颈，但决定着毫秒级相干的边界。</div>

## 物理图像：隧穿一次，宇称翻转一次

超导岛上每有一个准粒子（未配对的玻哥留波夫激发），岛上的电子宇称（电子数奇偶）就与库珀对数相差一个 $e$。对[[superconducting-qubits/transmon-qubit|transmon]]这样的电荷型比特，跃迁频率对偏置电荷 $n_g$ 有确定响应：一个准粒子跨结隧穿会把 $n_g$ 精确移动半个库珀对单位（$e$），使 $0\to1$ 跃迁频率在两个值 $f_e$、$f_o$ 之间切换——对应宇称从偶到奇。频率差 $2\Delta f=f_e-f_o$ 实测在 0 到 1.76 MHz 之间漂移（背景电荷运动的贡献），平均约 4.387 GHz 的跃迁频率因此呈现双稳态结构。

宇称翻转是随机的：每次准粒子隧穿发生时刻服从泊松统计，宇称随时间的演化是一个**对称随机电报信号（RTS）**——两个宇称态等概率，驻留时间指数分布。这个信号慢到可以直接实时追踪：用反馈复位让每次测量只要 6 µs，连续跑 15 s 的 Ramsey 序列，就把每次隧穿都记录下来。

![[assets/figures/charge-parity-fluctuation/f6dc09d73d341de5a2413c3fa4e4a9aa0aee053871080159987c4e8d227a5e3b.jpg]]

*比特跃迁频率的双稳态与漂移：(a) Ramsey 条纹实验（点）与双衰减正弦拟合（线），参考振荡器失谐 1 MHz，平均跃迁频率 $\omega_{01}/2\pi=4.387$ GHz；(b) transmon 前两个能级的电荷色散示意，$2e$ 周期性下准粒子跨结把 $n_g$ 移动 $e$，产生两个跃迁频率 $f_e$、$f_o$；(c) 重复 Ramsey 实验（每段 15 s）显示 $f_e$、$f_o$ 围绕 $\omega_{01}/2\pi$ 对称漂移，$2\Delta f$ 在 0–1.76 MHz 间。图源：Ristè et al. (2013)，Fig. 1。*

## 实时宇称检测与随机电报信号

把[[readout-measurement/dispersive-readout|色散读出]]做成**宇称测量计**：$\pi/2_y$ 脉冲制备叠加态后，空闲 $\Delta t=1/4\Delta f$ 让宇称积累 $\pm\pi/2$ 相位，再用 $\pi/2_x$ 脉冲把宇称映射到比特基态——偶宇称读出 $|0\rangle$、奇宇称读出 $|1\rangle$。配合反馈复位，整个序列每 6 µs 重复一次，得到宇称随时间的实时轨迹。

这条轨迹的功率谱有明确形式：

$$
S_M(f)=F^2\frac{4\Gamma_{\mathrm{rts}}}{(2\Gamma_{\mathrm{rts}})^2+(2\pi f)^2}+(1-F^2)\,\Delta t_{\mathrm{exp}},
$$

其中 $\Gamma_{\mathrm{rts}}$ 是宇称开关率、$F$ 是读出保真度、$\Delta t_{\mathrm{exp}}=6\ \mu s$ 是实验周期。洛伦兹型的低频分量来自 RTS 本身，平坦底座来自读出误差。拟合实测功率谱给出 $1/\Gamma_{\mathrm{rts}}=0.794\pm0.005$ ms、$F=0.92$——即平均每 0.8 ms 发生一次准粒子隧穿。驻留时间直方图与对称 RTS 模型完全吻合，确认两个宇称态等概率。

![[assets/figures/charge-parity-fluctuation/c468c6cb99041fe3d19dac81b1dbbb697363ff379841ab91bc676e45f8ff057d.jpg]]

*准粒子隧穿的实时测量：(a) Ramsey 型序列把比特变成电荷宇称测量计，等效于条件在奇宇称上的 $\pi$ 旋转；(b) 48 ms 长的典型测量轨迹快照，点为 6 µs 间隔的重复实验——每次跳变就是一次准粒子隧穿；(c) 宇称信号的双边功率谱，式 (1) 拟合给出 $1/\Gamma_{\mathrm{rts}}=0.794\pm0.005$ ms；(d) 宇称 $M=\pm1$ 的驻留时间直方图，灰线为保真度 $F=0.92$ 的对称 RTS 模型。图源：Ristè et al. (2013)，Fig. 2。*

## 弛豫通道分解：隧穿引起弛豫，还是只引起退相干？

准粒子隧穿有两种后果：**引起比特弛豫**（$|1\rangle\to|0\rangle$ 时把准粒子留在岛上，能量交给准粒子连续谱）或**只改变跃迁频率**（纯退相干）。用四能级模型 $|kl\rangle$（$k$ 比特态、$l$ 宇称态）和条件宇称自关联函数可以把两类速率分开：

$$
\Gamma_{10}^{eo}\approx\frac{x_{\mathrm{qp}}}{\pi}\sqrt{2\Delta\,\omega_{01}},
$$

其中 $x_{\mathrm{qp}}=n_{\mathrm{qp}}/2\nu_0\Delta$ 是以库珀对密度归一的准粒子密度（$\nu_0$ 是费米面单态密度、$\Delta$ 是 Al 超导能隙）——这个关系对准粒子的任意能量分布都成立。条件自关联测量（初末态分别固定为 $|0\rangle$、$|1\rangle$ 或弛豫后 $|0\rangle$）给出：

- $1/\Gamma_{00}^{eo}=0.92\pm0.04$ ms（$|0\rangle$ 态宇称开关）；
- $1/\Gamma_{11}^{eo}=0.70\pm0.06$ ms（$|1\rangle$ 态宇称开关）；
- $1/\Gamma_{10}^{eo}=3.3\pm1.0$ ms（**隧穿引起的弛豫**）。

对比实测总弛豫时间 $T_1=0.14$ ms：隧穿引起的弛豫率只占总弛豫事件的约 **5%**——准粒子隧穿不是当前 transmon 弛豫的主导机制，主要贡献来自其他通道（见[[superconducting-qubits/transmon-qubit|transmon]]词条的 $T_1$、$T_2$ 一节）。

![[assets/figures/charge-parity-fluctuation/79e11765b59c182c5bdf94c4f29b915617af34409a221650adad7fcb8958c36c.jpg]]

*宇称自关联函数与弛豫通道分解：(a) 两次宇称测量 $M_1$、$M_3$ 之间隔等待时间 $\tau$，后选择 $M_1=1$ 制备 $|0e\rangle$ 态，插入 $\pi$ 旋转可测不同比特态组合的自关联；(c) 比特处于 $|0\rangle$（点）、$|1\rangle$（方块）或弛豫后 $|0\rangle$（菱形）的宇称自关联 $R_{kk'}(\tau)$——速率方程拟合给出四组逆速率，其中隧穿引起的弛豫 $1/\Gamma_{10}^{eo}=3.3$ ms 远慢于总弛豫 $1/\Gamma_{10}=0.14$ ms。图源：Ristè et al. (2013)，Fig. 3。*

## 直接探测：波导散射与多比特相关事件

Ramsey 序列的宇称检测之外，还有**不需要脉冲序列**的连续探测路线。Amin 等人把偏置荷敏感的 transmon 直接耦合到波导（不经读出腔），用连续微波音探测相干散射：宇称直接移动比特跃迁频率（$\pm$ 两态各对应一个反射系数 $r^\pm$），散射信号的时间轨迹直接给出每次隧穿事件——无需 Ramsey 干涉、无需脉冲时序，即使没有量子极限放大器也能实时探测，探测带宽不再受读出腔线宽限制。

![[assets/figures/charge-parity-fluctuation/a5bc352771f60fb44170c08f4058ff43909dc7ac6934595e886ec199491cc096.jpg]]

*波导耦合准粒子探测器：transmon（近似二能级系统，蓝）直接耦合到波导（绿），宇称移动跃迁频率使散射信号在两个反射系数之间跳变——连续波测量即可实时探测每次隧穿。图源：Amin et al. (2024)，Fig. 1(a)。*

![[assets/figures/charge-parity-fluctuation/4f39ff37fa11ec965b46cf2f83aa927b1502a7a0b8867ca29578eb4cae3db6cd.jpg]]

*1 秒长的实测时间轨迹：上/下面板分别是 $r^+$ 与 $r^-$ 的反射系数——两迹线的跳变互相印证，每次翻转就是一次准粒子隧穿。图源：Amin et al. (2024)，Fig. 2(a)。*

把两个这样的探测器放到同一芯片、接到同一波导上，就能研究**相关错误**——对量子纠错的阈值计算这是关键输入。Sundelin 等人同时检测两个共处芯片的电荷敏感 transmon 的隧穿事件（时间分辨率数十微秒），发现两类动态：**背景隧穿**率在单赫兹量级、跨器件**不相关**（泊松独立）；**爆发事件**（burst）约每分钟一次、跨器件**高度相关**——特征寿命 7 ms，期间两个器件的隧穿率同时暴涨约一千倍。时间符合分析直接给出了相关/非相关事件的分解。

![[assets/figures/charge-parity-fluctuation/5e516abc74f94ec8f398c79349110234a4672b25ae670e66a65f3ac80064e182.jpg]]

*双探测器器件与谱学：两个 transmon 耦合到同一波导，各自作为准粒子探测器（QPD1、QPD2）——宇称移动各自的跃迁频率 $\omega_{1,2}^{\pm}$，同时监测两路散射信号。图源：Sundelin et al. (2026)，Fig. 1(a)。*

![[assets/figures/charge-parity-fluctuation/0d2950836e6413b32fce68da1d402bb12c4d19b6bb5b85e935f412e11b9078f8.jpg]]

*代表性实时轨迹与爆发分类：准粒子爆发（burst）期间两器件的解调透射信号同时出现密集跳变——爆发寿命约 7 ms、隧穿率暴涨千倍且跨器件相关；背景事件则不相关。图源：Sundelin et al. (2026)，Fig. 2。*

**局域红外辐照的可控实验**把准粒子来源从被动观察变为主动控制：聚焦红外源照射比特局部，系统研究准粒子的产生-弛豫动力学——辐照功率、照射位置与准粒子率的关系被定量标定，为屏蔽设计（词条下文）与混合器件（有意引入辐射的体系）同时提供基准数据。

![[assets/figures/charge-parity-fluctuation/4c2b42b03e5840973aa824e0a46b7a39d7d69099aee8569e57ec5bb71d789c6c.jpg]]

*局域红外辐照实验：聚焦光源照射超导比特局部——准粒子产生率的可控调节。图源：arXiv:2312.05892，Fig. 1。*

![[assets/figures/charge-parity-fluctuation/8b80dbbfc299a314de1946fe996dd8f156258548a52da47c8eeb243bbfbef224.jpg]]

*准粒子动力学表征：辐照功率-准粒子率-弛豫时间的定量关系——可控来源下的系统标定。图源：arXiv:2312.05892，Fig. 2。*

## 温度依赖与低温柔景

在 20–170 mK 范围升温重测：宇称开关率 $\Gamma_{\mathrm{rts}}$、$\Gamma_{00}^{eo}$、$\Gamma_{11}^{eo}$、$\Gamma_{10}^{eo}$ 同步上升，$T_1$ 却对温度不敏感直到约 150 mK——之后 $R_{10}(\tau\to0)$ 变号，标志准粒子隧穿成为主导弛豫机制。用式 (2) 反推 $T_r=20$ mK 时的准粒子密度 $n_{\mathrm{qp}}=0.04\pm0.01\ \mu\mathrm{m}^{-3}$，与计量学器件中报道的最低值一致；低温下 $\Gamma_{10}^{eo}$ 的压制比热平衡分布预期的弱得多，说明残余准粒子来自红外辐射等非热来源——改进屏蔽可进一步压低。

## 与其他概念的关系

- 宇称检测的物理基础是[[readout-measurement/dispersive-readout|色散读出]]：跃迁频率对宇称的依赖正是电荷色散的表现，高保真度单发读出（$F=0.92$）是实时宇称追踪的前提。
- [[superconducting-qubits/transmon-qubit|Transmon]] 的 $T_1$、$T_2$ 工程限制一节把准粒子列为噪声通道之一——本词条给出了它的定量贡献：约 5% 的弛豫事件、0.8 ms 的退相干时标。
- 准粒子密度对辐射屏蔽敏感——这把准粒子物理与[[scaling-automation/cryo-electronics|低温电子学]]中的滤波、屏蔽设计直接联系起来。
- 宇称开关对拓扑量子计算有额外意义：Majorana 比特的拓扑保护正是以宇称守恒为前提，隧穿事件直接威胁它（见原文引言及 [[superconducting-qubits/gatemon-qubit|gatemon]] 词条的磁场兼容性）。
- [[superconducting-qubits/flowermon-qubit|Flowermon 扭转铜酸比特]]用 d 波序参量的宇称守恒把单准粒子隧穿的耗散通道从对称性上关掉——与本词条实测的"每次隧穿改变宇称"（s 波 transmon）形成 s 波 vs d 波的对照。
- [[superconducting-qubits/csfq-decoherence|可调电容并联 flux qubit 的退相干]]是磁通比特侧的噪声分解对应物：1/f 磁通噪声 + 控制电子噪声 + 热噪声，与本词条（准粒子隧穿 + 宇称开关）共同构成超导比特噪声来源的完整图景。

## 参考文献

- Ristè, D., Bultink, C. C., Tiggelman, M. J., Schouten, R. N., Lehnert, K. W., & DiCarlo, L. (2013). *Millisecond charge-parity fluctuations and induced decoherence in a superconducting qubit*. Nature Communications **4**, 1913. [DOI:10.1038/ncomms2936](https://doi.org/10.1038/ncomms2936) · [arXiv:1212.5459](https://arxiv.org/abs/1212.5459)
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
