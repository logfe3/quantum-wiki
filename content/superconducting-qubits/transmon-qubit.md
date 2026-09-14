---
title: Transmon 量子比特
description: 通过大并联电容提高约瑟夫森能与充电能之比，以指数方式压低电荷色散、同时保留可控非谐性的超导量子比特。
aliases:
 - transmon
 - 传输线并联等离子振荡量子比特
 - 并联电容电荷量子比特
tags:
 - 超导量子比特
 - 约瑟夫森结
 - 电荷噪声
 - 电路 QED
date: 2026-09-13
source: QAtlas
qatlas_id: qa_01m2cfph7refp0scnr5tzz28cm
source_updated: 2026-09-13T05:11:53Z
---

<div class="entry-lead">Transmon 并不是把电荷自由度完全丢掉，而是把 Cooper-pair box 推入较大的 $E_J/E_C$ 区域：低频偏置电荷几乎不再改变跃迁频率，微波电场却仍能有效驱动相邻能级。它用“指数获得的抗噪声能力”交换“仅按幂律减小的非谐性”，成为电路 QED 中最常用的人工原子之一。</div>

## 从 Cooper-pair box 到 transmon

Cooper-pair box（CPB）由两个超导岛和约瑟夫森结构成。岛上多一个或少一个库珀对会改变静电能，因此它天然具有非线性，但跃迁频率也会随环境偏置电荷 $n_g$ 明显漂移。早期 CPB 需要停在 $n_g=1/2$ 一类“甜点”上，才能消除一阶电荷噪声；一旦慢漂移把工作点推离甜点，退相干又会迅速增强。

Transmon 的关键改动很朴素：在结两端增加大并联电容 $C_B$，增大总电容 $C_\Sigma$，从而降低充电能

$$
E_C=\frac{e^2}{2C_\Sigma},\qquad C_\Sigma=C_J+C_B+C_g.
$$

约瑟夫森能 $E_J$ 不必同步减小，于是器件从 CPB 常见的 $E_J/E_C\lesssim 1$ 进入 $E_J/E_C\gg1$ 的 transmon 区域。原始方案通常讨论几十到数百的比值；这一区间仍保留足以选频操控的弱非谐性，又能把电荷色散压到很低。

![[assets/figures/references/koch-2007/7e6807c596dc94a7649b423bedfe7361f697eaee58ee75efbf5c16231b139c8c.jpg]]

*Transmon 的等效电路：约瑟夫森结（或 SQUID）由大电容 $C_B$ 并联，并通过 $C_g$ 与传输线谐振腔耦合。图源：[[references/koch-2007|Koch et al. (2007)]]，Fig. 1(a)。*

![[assets/figures/references/koch-2007/44b6d13de3ac41ab10882f10f26aee1dbbed2881f53b5b2c212e494b91b2d79a.jpg]]

*原始器件构型示意：延伸的超导岛形成传输线式并联电容，并把器件置于微波场反节附近。图源同上，Fig. 1(b)。*

## 电路哈密顿量

忽略谐振腔模时，transmon 与 CPB 具有相同形式的哈密顿量：

$$
\hat H=4E_C\left(\hat n-n_g\right)^2-E_J\cos\hat\varphi,
$$

其中：

- $\hat n$ 是跨结转移的库珀对数算符；
- $\hat\varphi$ 是结两端的规范不变相位差，二者满足 $[\hat\varphi,\hat n]=i$；
- $n_g=Q_r/(2e)+C_gV_g/(2e)$ 是以库珀对电荷为单位的有效偏置电荷；
- $E_J$ 控制相位势阱深度，$E_C$ 控制电荷数涨落的能量代价。

若用两个结组成 SQUID，则可用外磁通连续调节有效约瑟夫森能。对对称结的理想近似为

$$
E_J(\Phi)=E_{J,\max}\left|\cos\!\left(\pi\frac{\Phi}{\Phi_0}\right)\right|,
$$

$\Phi_0=h/(2e)$ 是超导磁通量子。固定频率 transmon 省去这条调谐通道，以减小磁通噪声；可调 transmon 则用频率机动性换取额外噪声和布线复杂度。

```mermaid
flowchart LR
  A[增大并联电容 CΣ] --> B[充电能 EC 降低]
  B --> C[EJ / EC 增大]
  C --> D[电荷色散指数下降]
  C --> E[非谐性仅缓慢下降]
  D --> F[低频电荷噪声敏感度降低]
  E --> G[仍可选择性驱动 0→1 跃迁]
  F --> H[无需持续锁定电荷甜点]
  G --> I[可接入微波控制与色散读出]
```

## 弱非谐振子的能级

在 $E_J/E_C\gg1$ 时，相位波函数主要局域在 $\varphi=0$ 附近。把余弦势展开到四阶，系统可看作带 Duffing 非线性的谐振子：

$$
-E_J\cos\varphi\simeq-E_J+\frac{E_J}{2}\varphi^2-\frac{E_J}{24}\varphi^4.
$$

最低阶微扰给出第 $m$ 个能级

$$
E_m\simeq-E_J+\sqrt{8E_JE_C}\left(m+\frac12\right)
-\frac{E_C}{12}\left(6m^2+6m+3\right).
$$

因此基态到第一激发态的跃迁能和绝对非谐性近似为

$$
\hbar\omega_{01}\simeq\sqrt{8E_JE_C}-E_C,
\qquad
\alpha\equiv E_{12}-E_{01}\simeq-E_C.
$$

负的 $\alpha$ 表示 $|1\rangle\to|2\rangle$ 跃迁频率低于 $|0\rangle\to|1\rangle$。控制脉冲的带宽必须显著小于 $|\alpha|/\hbar$，否则会把布居泄漏到 $|2\rangle$ 及更高能级。因此 transmon 是“弱非谐多能级系统”，而不是天然只有两个能级的自旋；实验中把最低两级编码为逻辑比特，需要同时处理泄漏和交流 Stark 位移。

## 电荷色散为什么被指数压低

第 $m$ 个能级随偏置电荷近似呈余弦变化：

$$
E_m(n_g)\simeq E_m\!\left(\frac14\right)-\frac{\epsilon_m}{2}\cos(2\pi n_g),
$$

其中峰峰值 $\epsilon_m$ 在大 $E_J/E_C$ 极限满足

$$
\epsilon_m\simeq(-1)^m E_C\frac{2^{4m+5}}{m!}\sqrt{\frac{2}{\pi}}
\left(\frac{E_J}{2E_C}\right)^{m/2+3/4}
\exp\!\left[-\sqrt{8E_J/E_C}\right].
$$

式中最重要的不是前面的幂律，而是 $\exp[-\sqrt{8E_J/E_C}]$：提高 $E_J/E_C$ 会让波函数穿过相邻余弦势阱的概率迅速下降，偏置电荷只有在罕见的 $2\pi$ 相位滑移中才能留下可观测相位。因此低频电荷扰动虽会平移振子波包，却几乎不改变能级间距。

![[assets/figures/references/koch-2007/7ac8ac3964ff86b551ebc96c2a7ce76c87506a7be881c4e66eb9fbd3ad8caae7.jpg]]

*$E_J/E_C=1$ 的电荷区：能级随 $n_g$ 明显起伏，只在半整数甜点附近一阶不敏感。图源：[[references/koch-2007|Koch et al. (2007)]]，Fig. 2(a)。*

![[assets/figures/references/koch-2007/40efadb795a7aea70b1181f381a09cabbff870698616dd455e7b7dfec0e59662.jpg]]

*$E_J/E_C=30$ 时最低能级已近乎水平，说明器件在较宽 $n_g$ 范围内保持稳定，而不只依赖单一甜点。图源同上，Fig. 2(d)。*

转子类比把这件事画得更直观：$-E_J\cos\varphi$ 像把摆锤拉向 $\varphi=0$ 的重力势，$n_g$ 则像只在完整绕行时积累的 Aharonov–Bohm 相位。势阱越深，跨阱绕行越少，电荷色散就越小。

![[assets/figures/references/koch-2007/ee8d2c4ed9618cdfecb07786bbf0d44c13afb3e6dc70f0c1fc2bc1ca8facc23a.jpg]]

*左：带有效磁通的量子转子类比；右：余弦势阱中的局域能级与波函数。图源：[[references/koch-2007|Koch et al. (2007)]]，Fig. 3。*

## 抗低频噪声与强交流耦合并不矛盾

电荷色散描述的是接近直流的绝热响应，即 $\partial\omega_{01}/\partial n_g$；微波操控取决于交流场在共振频率处连接不同本征态的矩阵元 $\langle i|\hat n|j\rangle$。两者不是同一个量。大 $E_J/E_C$ 使直流频率漂移指数下降，但相邻能级间矩阵元反而近似按

$$
|\langle j+1|\hat n|j\rangle|
\propto \sqrt{j+1}\left(\frac{E_J}{8E_C}\right)^{1/4}
$$

缓慢增加。因此 transmon 可以对低频电荷噪声迟钝，同时对共振微波保持较大的电偶极响应。这是它既长相干、又容易控制并能进入[[circuit-qed/strong-coupling|强耦合]]区的核心原因。

## 与微波谐振腔耦合

把 transmon 电容耦合到[[circuit-qed/microwave-resonator|微波谐振腔]]后，多能级 Jaynes–Cummings 型哈密顿量可写为

$$
\hat H=\hbar\omega_r a^\dagger a+
\sum_j\hbar\omega_j|j\rangle\langle j|+
\sum_j\hbar g_{j,j+1}
\left(a^\dagger|j\rangle\langle j+1|+a|j+1\rangle\langle j|\right).
$$

这里 $g_{j,j+1}$ 主要连接相邻能级，并随上述电荷矩阵元变化。在色散区 $|\Delta|=|\omega_{01}-\omega_r|\gg g$，消去直接交换项后得到比特态相关的腔频移动。把第二激发态纳入计算，常用近似为

$$
\chi\simeq\frac{g^2\alpha}{\Delta(\Delta+\alpha)}.
$$

这正是[[circuit-qed/dispersive-shift|色散频移]]和[[readout-measurement/dispersive-readout|色散读出]]中必须保留的 transmon 多能级修正：若把它误当成理想两能级系统，只写 $g^2/\Delta$，会错估频移大小、符号及“跨越区”（腔频位于 $\omega_{01}$ 与 $\omega_{12}$ 之间）的行为。

## 操控、读出与泄漏

- **单比特操控**：在 $\omega_{01}$ 附近施加 I/Q 微波包络，旋转速率由驱动幅度和 $\langle0|\hat n|1\rangle$ 决定。脉冲过短时频谱覆盖 $\omega_{12}$，造成 $|2\rangle$ 泄漏；实际常用带导数正交分量的脉冲抑制这一误差。
- **色散读出**：读取腔的相位或幅度响应，辨认腔频的 $\pm\chi$ 位移。为获得单发信噪比，输出链通常结合[[readout-measurement/parametric-amplifier|约瑟夫森参量放大器]]和低噪声低温放大器。
- **多比特复用**：多个读取腔可以频分复用，但腔间耦合、放大器饱和和公共馈线会引入[[readout-measurement/readout-crosstalk|读取串扰]]。

## $T_1$、$T_2$ 与工程限制

提高 $E_J/E_C$ 主要解决电荷色散，并不会自动消除所有退相干通道：

1. **Purcell 弛豫**：激发态混入少量腔光子成分，沿腔线宽 $\kappa$ 泄漏，最低阶速率为

   $$
   \Gamma_1^{\mathrm{Purcell}}\simeq\kappa\frac{g^2}{\Delta^2}.
   $$

   这推动了[[readout-measurement/purcell-filter|Purcell 滤波器]]的发展：在读取腔频率保持快速出射，同时抑制比特频率处的环境态密度。
2. **介质与界面损耗**：电场落在无定形介质、表面氧化层和界面缺陷上会耦合两能级缺陷。大电容只在电场主要储存在低损耗区域时才真正有利。
3. **磁通噪声**：SQUID 可调器件的 $E_J(\Phi)$ 会把磁通波动映射到频率波动；固定频率器件没有这条调谐灵活性，却通常更安静。
4. **准粒子与辐射**：非平衡准粒子穿隧、红外辐射、封装模和控制线噪声都可能限制 $T_1$。实时宇称测量给出它的定量贡献——隧穿引起的弛豫只占约 5%（见[[circuit-qed/charge-parity-fluctuation|电荷宇称涨落与准粒子隧穿]]），但残余准粒子密度决定毫秒级相干的边界。因此[[scaling-automation/cryo-electronics|低温电子学]]、屏蔽、滤波和封装与芯片设计同等重要。

$T_2$ 同时受能量弛豫和纯退相干限制，常写成

$$
\frac1{T_2}=\frac1{2T_1}+\frac1{T_\varphi}.
$$

当电荷噪声被指数压低后，实验瓶颈往往转移到材料损耗、磁通噪声、残余光子和准粒子；“对电荷不敏感”不能等同于“对环境完全不敏感”。

## 典型参数与设计权衡

| 参数 | 常见量级或关系 | 物理含义 |
| --- | --- | --- |
| $E_J/E_C$ | 约 $20$–$100$，也可更高 | 越大越抗电荷噪声，但相对非谐性越小 |
| $E_C/h$ | 数百 MHz | 近似决定 $|\alpha|/h$ 与允许的控制带宽 |
| $\omega_{01}/2\pi$ | 数 GHz | 微波控制与读取链工作的中心频段 |
| $\alpha/h$ | 通常为负，量级约 $-E_C/h$ | 区分 $0\to1$ 与 $1\to2$ 跃迁、限制泄漏 |
| $g/2\pi$ | 数十到百 MHz 量级 | 决定与腔交换和色散读出的速度 |
| $|\Delta|/g$ | 色散读出时远大于 1 | 越大越抑制交换与 Purcell 衰减，但 $|\chi|$ 也会减小 |

这些参数不是独立旋钮：增大并联电容会同时降低 $E_C$、缩小非谐性并改变电场参与比；提高耦合电容可增大 $g$，也可能增强辐射损耗；增加磁通可调范围会提升编程灵活性，却扩大频率拥挤和磁通噪声问题。设计目标不是把某个比值无限推高，而是在门速度、泄漏、读出速度、频率碰撞和相干时间之间寻找系统级最优点。

## 与其他概念的关系

- Transmon 是 CPB 的大 $E_J/E_C$ 极限，但它的逻辑态是跨多个电荷数态的叠加，不是“固定电荷态”。
- [[superconducting-qubits/fluxonium-qubit|Fluxonium 量子比特]]是与之互补的路线：同样依赖大 $E_J/E_C$ 压低电荷色散，但用大电感重塑势阱，在小电容下保留数百 MHz 的非谐性；两条路线在非谐性、磁通噪声和读出频移上各有取舍。
- 它与[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]共同构成“人工原子＋微波腔”平台；强交流偶极矩使其容易达到[[circuit-qed/strong-coupling|强耦合]]。
- 弱非谐性使[[circuit-qed/dispersive-shift|色散频移]]必须计入至少前三个能级，也使快速门需要显式控制泄漏。
- 腔既提供[[readout-measurement/dispersive-readout|色散读出]]通道，也通过 Purcell 效应打开弛豫通道，因此读取速度和寿命需要由[[readout-measurement/purcell-filter|Purcell 滤波器]]共同优化。
- 扩展到多比特后，频率分配、控制线热负载、低温放大和封装模进入[[scaling-automation/cryo-electronics|低温电子学]]与系统工程问题。

## 参考文献

- [[references/koch-2007|Koch et al., Physical Review A 76, 042319 (2007)]]：提出 transmon，推导电荷色散、非谐性、腔耦合、Purcell 弛豫及主要噪声通道。
- [QAtlas 记录](https://qatlas.hfnl.app.chenzhaoyun.com/en/papers/qa_01m2cfph7refp0scnr5tzz28cm) · [arXiv:cond-mat/0703002](https://arxiv.org/abs/cond-mat/0703002) · [DOI:10.1103/PhysRevA.76.042319](https://doi.org/10.1103/PhysRevA.76.042319)
