---
title: 强耦合判据
description: 相干耦合速率大于相关损耗率，使两个系统能在衰减前多次交换激发的工作区。
aliases:
  - 强耦合
  - 强耦合极限
  - 强耦合区
  - strong coupling
  - strong coupling regime
  - strong coupling limit
tags:
  - 电路量子电动力学
  - 耦合
date: 2026-09-08
---

<div class="entry-lead">"看到相互作用"不等于进入强耦合。强耦合要求量子比特与腔的相干交换速度足够快，在光子泄漏或比特退相干前留下可分辨的杂化动力学。</div>

## 物理图像

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（circuit quantum electrodynamics，cQED）中，"原子"由人工二能级——超导电路或半导体量子点——扮演，"腔"由[[circuit-qed/microwave-resonator|微波谐振腔]]扮演。"看到相互作用"是平庸的：只要比特与腔之间存在任何不为零的耦合 $g$，透射或反射谱就会出现弯曲、频移、展宽。但要让相干交换成为可分辨的量子动力学，就必须让激发在丢失之前能在两个子系统之间往返若干次。

这意味着耦合速率 $g$ 必须能与两类非相干过程竞争——腔光子向外的耗散（速率 $\kappa$）与比特自身的退相干（速率 $\gamma$）。当

$$
g>\max(\kappa,\gamma)
$$

时，相干交换就在损耗之前完成多次——系统进入**强耦合区**（strong coupling regime）。这一判据既适用于[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]描述的二能级–单模耦合，也适用于多模、多比特共享腔的场景；半导体量子点 cQED 的强耦合演示全部围绕它展开。

<!-- FIGURE: cQED 耦合区划分图：以 $g$、$\kappa$、$\gamma$ 划分弱耦合（Purcell 极限）、强耦合、超强耦合三区；标注各区的典型光谱特征 -->

## 从 Rabi 振荡到合作因子

### 时域与频域的两种刻画

强耦合的两个等价刻画是：

- **时域**：若系统初态制备为 $|e,0\rangle$，则激发在比特与腔模之间相干往返的速率为 $2g$——这就是[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 振荡]]。振荡能在 $\Gamma_\mathrm{eff}=(\kappa+\gamma)/2$ 的耗散包络下完成 $\sim 2g/(\kappa+\gamma)$ 个周期。
- **频域**：将比特频率扫过腔频，原本应在 $\omega_q=\omega_r$ 处"交叉"的两条谱线会拉开为间距 $2g$ 的两条杂化支——这就是真空 Rabi 劈裂。两条支的线宽等于腔耗散与比特退相干之和的一半 $(\kappa+\gamma)/2$，劈裂能谱可分辨的条件是

```math
2g>\kappa+\gamma .
```

半导体量子点的能谱通常以频域方式测量，因此文献中常把 $2g>\kappa+\gamma$ 视为"劈裂可分辨"的工作判据。

### 合作因子

为量化"相干 vs 非相干"的相对权重，引入**合作因子**（cooperativity）

$$
C=\frac{g^2}{\kappa\gamma}
$$

或常见等价的双倍写法 $C=4g^2/(\kappa\gamma)$、$C=2g^2/(\kappa\gamma)$——三种归一仅差一个常数因子，物理含义一致：相干耦合相对于腔耗散与比特退相干的几何平均。$C>1$ 表明系统进入"相干耦合占优"的工作区，但能否在谱上分辨还要看线宽定义、失谐、温度占据与拟合模型。

半导体 cQED 文献中，$C$ 常被作为单一数字横向对比不同器件（材料、比特类型、腔型）下的相干优劣——见下文的实验进展表。

## 模型哈密顿量与耦合速率

### JC 哈密顿量与有效耦合

旋波近似（rotating-wave approximation，RWA）下，单比特–单模的耦合由 Jaynes–Cummings 哈密顿量描述（参见[[circuit-qed/jaynes-cummings-model|JC 模型]]词条）。对双量子点电荷比特，相互作用项的微观推导给出全局耦合强度（overall coupling strength，或 bare coupling strength）

$$
g_0=\omega_r c_c\sqrt{\frac{2Z_r}{R_Q}}
$$

其中 $c_c=C_L/C_\Sigma$ 是左量子点的杠杆臂（lever arm），$Z_r=\sqrt{L/C}$ 是腔的特征阻抗，$R_Q=h/e^2\approx 26\ \mathrm{k\Omega}$ 是电阻量子。有效耦合

$$
g_\mathrm{eff}=g_0\sin\theta=g_0\,\frac{2t_c}{\hbar\omega_q}
$$

其中 $\theta=\arctan(2t_c/\varepsilon)$ 是双量子点的混合角，$t_c$ 是点间隧穿耦合，$\varepsilon$ 是失谐。当 $\varepsilon\ll 2t_c$（最大混合）时 $\sin\theta\approx 1$，$g_\mathrm{eff}$ 取得最大值 $g_0$；当 $|\varepsilon|\gg 2t_c$ 时电子局域在单个点内，$\sin\theta\to 0$，耦合消失。

高阶模的耦合为

$$
g^{(n)}=g_0\sin\theta\,\frac{\omega_n}{\sqrt{\omega_r}}
$$

即随腔模频率升高而增大；实际实验常工作于基模。

### 透射响应与参数提取

通过输入–输出理论，透射式共面波导腔的透射系数为

$$
S_{21}(\omega)=\frac{-i\sqrt{\kappa_1\kappa_2}}{\omega_r-\omega+g_c\chi_c-i\kappa/2}
$$

其中 $\chi_c=g_c/(-\Delta+i\gamma)$ 是量子点的磁化系数，$\Delta=\omega_a-\omega$ 是比特–探测失谐，$\gamma=\gamma_1/2+\gamma_\phi$ 是比特的总退相干速率（$\gamma_1$ 弛豫、$\gamma_\phi$ 纯退相位）。反射式腔的 $S_{11}$ 形式类似，仅分子替换为 $i\kappa_i$。

把 $S_{21}$（或 $S_{11}$）的极点拆为实部与虚部，比特对腔的影响可写为

$$
\omega_r'=\omega_r-\frac{g_c^2\Delta}{\Delta^2+\gamma^2},\qquad
\kappa'=\kappa+\frac{2g_c^2\gamma}{\Delta^2+\gamma^2}.
$$

色散极限（$|\Delta|\gg g_c$）下实部主导，频移 $\Delta\omega_r\approx g_c^2/\Delta$ 与二阶微扰一致；近共振时虚部主导，腔线被比特"打开"额外耗散通道——这是从频谱判断工作区的判据之一。

<!-- FIGURE: $S_{21}$ 透射谱在 $\omega_a=\omega_r$（强耦合，可见两个峰）与 $|\Delta|\gg g$（色散极限，可见一条展宽/频移的腔线）下的对比 -->

## 强耦合的实现路径

### 提高耦合强度 $g$

半导体量子点的电偶极矩可达 $r\sim 100\ \mathrm{nm}$ 量级，远大于单原子；与之匹配的高阻抗腔（参见[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]词条）把每个光子的零点电压涨落放大 $\sqrt{Z_r/Z_0}$ 倍，使 $g_0\propto\sqrt{Z_r}$。两条成熟的工程路线：

- **SQUID 阵列腔**：约瑟夫森结的非线性电感把特征阻抗推到 $\sim 1\ \mathrm{k\Omega}$，并保留磁通原位可调腔频的优势；
- **高动态电感材料腔**：NbTiN、TiN、NbN 等超导薄膜的动能电感使 $Z_r$ 达到 $2\text{–}3.5\ \mathrm{k\Omega}$，并因 $T_c$ 高、临界场大而适合自旋比特实验。

历史地看，强耦合在半导体 cQED 中是伴随高阻抗腔实现的：2017 年 Wallraff 组用 SQUID 阵列腔把 GaAs 双量子点的 $g/2\pi$ 从约 6.7 MHz 提升到 119 MHz，首次演示门控量子点的强耦合；2018 年 Vandersypen 组用 NbTiN 腔在 Si 上把电荷比特推到 $g/2\pi=200$ MHz。

### 抑制损耗 $\kappa$ 与 $\gamma$

- **腔侧**：TiN 纳米线腔的 $\kappa/2\pi$ 已压到约 2.2 MHz；NbTiN 反射腔约 11 MHz；SQUID 阵列腔因结参数不均匀与氧化层损耗较高，约 $30\text{–}60$ MHz；
- **比特侧**：自旋比特的电偶极矩小、与电荷噪声解耦，$\gamma/2\pi$ 可低至 $2\text{–}5$ MHz；电荷比特虽然 $g$ 大但 $\gamma/2\pi$ 多在 $30\text{–}100$ MHz 量级。强耦合的达成往往需要在电荷混合与退相干之间选择最优工作点——这是、、三本论文反复讨论的实验经验。

论文中总结的判据为

$$
g_s>\kappa^\*,\gamma_s
$$

即自旋–光子耦合同时超过腔耗散与自旋退相干； 论文给出的共振区有效总耗散为

$$
\Gamma_\mathrm{eff}=\frac{\kappa+\gamma}{2}.
$$

## 参数与量级

### 实验进展横向对比

下表汇总 与 论文表 1.2/1.1 所列近年半导体量子点–腔杂化系统的关键参数（电荷比特为主，自旋与共振交换比特单列；$C=g^2/(\kappa\gamma)$ 为合作因子，按原文定义）。

| 单位           | 年份 | 材料 | 比特类型     | 腔材料 | $g/2\pi$ (MHz) | $\gamma/2\pi$ (MHz) | $\kappa/2\pi$ (MHz) |   $C$ |
| -------------- | ---- | ---- | ------------ | ------ | -------------: | ------------------: | ------------------: | ----: |
| Petta 组       | 2017 | Si   | 电荷         | Nb     |            6.7 |                 2.6 |                 1.0 |  17.3 |
| Wallraff 组    | 2017 | GaAs | 电荷         | SQUID  |            119 |                  40 |                12.3 |  28.8 |
| Vandersypen 组 | 2018 | Si   | 电荷         | NbTiN  |            200 |                  52 |            bare 2.7 | 142.5 |
| Vandersypen 组 | 2018 | Si   | 自旋         | NbTiN  |             13 |                 2.5 |      dispersive 5.4 |  12.5 |
| Petta 组       | 2018 | Si   | 电荷         | Nb     |             40 |                  35 |            bare 1.3 |  25.4 |
| Petta 组       | 2018 | Si   | 自旋         | Nb     |            5.5 |                 2.4 |      dispersive 1.8 |   7.0 |
| Wallraff 组    | 2018 | GaAs | 共振交换自旋 | NbTiN  |           31.4 |                19.6 |                47.1 |   1.1 |
| Wallraff 组    | 2018 | GaAs | 两电荷比特   | SQUID  |             53 |                 4.8 |                  33 |  17.7 |
| Wallraff 组    | 2020 | GaAs | 电四极矩     | SQUID  |            150 |                  32 |                  18 |  39.1 |
| Petta 组       | 2020 | Si   | 两自旋比特   | Nb     |           10.7 |                 4.7 |                 2.0 |  12.2 |
| 郭国平组       | 2021 | GaAs | 两电荷比特   | SQUID  |             80 |                  55 |                35.0 |   3.3 |
| 郭国平组       | 2021 | GaAs | 电荷         | NbTiN  |          104.5 |                  72 |                35.3 |   4.3 |

注：表中"bare"与"dispersive"分别指裸腔线宽（无耦合比特时的 $\kappa$）与色散读出条件下提取的线宽。

### 本仓库论文中的强耦合实现

| 比特类型         | 体系                                                                |                                           $g/2\pi$ | $\gamma/2\pi$ | $\kappa/2\pi$ |  $C$ | 来源 |
| ---------------- | ------------------------------------------------------------------- | -------------------------------------------------: | ------------: | ------------: | ---: | ---- |
| 电荷比特         | GaAs DQDs + NbTiN 高阻抗反射腔                                      |                    74 MHz（DQD1）、119 MHz（DQD2） |    视比特而异 |   11 MHz 量级 |    — |      |
| 电荷比特         | GaAs DQD + SQUID 阵列反射腔（$\nu_r=6.758$ GHz，$Z_r\approx 1$ kΩ） |                                             57 MHz |             — |      58.9 MHz |    — |      |
| 电荷比特         | Si/SiGe RDQD + TiN 纳米线腔（$Z_r\approx 3.5$ kΩ，$f_r=4.993$ GHz） |                                            175 MHz |             — |       2.2 MHz |    — |      |
| 翻转模式自旋比特 | Si/SiGe 三量子点（RDQD/LDQD） + TiN 腔                              |                                21.8 MHz / 13.8 MHz |             — |             — |    — |      |
| 自旋–光子耦合    | Si/SiGe DQD + TiN 腔                                                |            43.5 MHz（$2g_s/2\pi$，真空 Rabi 劈裂） |             — |       2.2 MHz |    — |      |
| 共振交换比特     | Si/SiGe 三量子点 + TiN 腔                                           | $g_\mathrm{RX}/2\pi=65$ MHz，$g_{c0}/2\pi=168$ MHz |      16.9 MHz |             — | $>1$ |      |

## 实验证据与边界

### 直接证据

- **频域**：观测到间距 $2g$ 的真空 Rabi 劈裂，线宽近似 $(\kappa+\gamma)/2$。这是最常用的强耦合指纹。
- **时域**：探测真空 Rabi 振荡，即激发在 $|e,0\rangle$ 与 $|g,1\rangle$ 之间以 $\sim 2g$ 的速率往返若干次。需要时间分辨的探测（如脉冲序列、time-tagged 测量），比频域更直接但对测量带宽要求更高。

### 必须排除的"假象"

仅有一条弯曲谱线或单纯的腔频移**不足以**证明强耦合：

- **经典耦合**：驱动功率过高时，经典 Rabi 模型也能预言弯曲谱，弯曲形状与真空 Rabi 劈裂相似；
- **功率展宽**：高功率下腔线本身的非线性展宽也能拉出"双峰"假象；
- **多能级效应**：量子点的更高激发态（轨道、谷、电荷）若同时参与跃迁，会产生与真空 Rabi 劈裂混淆的多峰结构；
- **Fano 干涉**：高阻抗腔的细中心导体与寄生通道耦合常导致谱线不对称，未做 Fano 修正的拟合会把 $2g$ 系统性低估。

可靠的判断需要同时拟合频率、线宽、功率依赖，并确认工作点与目标量子点的调参一致。论文即强调"劈裂大小等于 $2g_c$，免交点处两条谱线的展宽等于 $(\kappa+\gamma)/2$；真空 Rabi 劈裂是半导体双量子点与腔强耦合的直接证据"。

## 强弱耦合区的物理差异

| 区       | 判据                                         | 光谱特征                                        | 时间行为                                  |
| -------- | -------------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| 弱耦合   | $g\ll\kappa,\gamma$                          | 一条被比特展宽/频移的腔线，无可分辨双峰         | 指数衰减，无相干振荡                      |
| 强耦合   | $g>\kappa,\gamma$（等价 $2g>\kappa+\gamma$） | 两条杂化支，间距 $2g$，线宽 $(\kappa+\gamma)/2$ | 真空 Rabi 振荡，周期 $\pi/g$              |
| 超强耦合 | $g/\omega_r\gtrsim 0.1$                      | 双峰仍可见，但谱线对失谐不再对称                | 反旋项显著，JC 模型失效，需回到 Rabi 模型 |

在半导体 cQED 中，超强耦合尚未稳定演示。论文记录了 Wallraff 组利用约瑟夫森结阵列达到的 $g_c/\omega_r\sim 0.11\pm 0.01$，是首次进入超强耦合区的工作；该区下 JC 模型失效，反旋项贡献不可忽略，真空会出现虚光子云，是 cQED 仍待探索的物理前沿。

**深强耦合区**（$g/\omega\sim1$）是这条阶梯的下一级：耦合强度与振子频率同量级时，连 Rabi 模型的微扰图像也需重新审视——能谱出现由简并点（Juddian points）组织的**绝热结构**，跃迁服从新的选择定则。Yoshihara 等人用磁通比特与 LC 振子的电感耦合实现 $g/\omega\approx1.8$（超深强耦合），在透射谱中直接分辨出绝热能级与对称点附近的选择定则变化——"深强耦合能否在真实物理系统实现"的争论由此给出实验定论。阶梯之外还有正交的一级：**超强耦合**（superstrong，判据 $g\rho>1$，自发辐射线宽超过多模真空的自由谱区）——单原子同时杂化多个真空模、反向修改真空态密度，见超强耦合词条。

![[assets/figures/strong-coupling/be29996c125f518ffa71e990b48c17aa875de661eb692326f0e37d5710aa49ef.jpg]]

_深强耦合电路的透射谱：两个电路（不同耦合强度）的计算跃迁频率与实测谱——$g/\omega\approx1$ 以上能谱组织成绝热分支，Juddian 简并点处的避免交叉清晰可见。图源：Yoshihara et al. (2017)，Fig. 2。_

![[assets/figures/strong-coupling/9283c5ca4b1f8cf932c4f01b8dab7526a99ee018206c11e1e5f88a86d22781de.jpg]]

_对称点附近的选择定则与透射谱：深强耦合区的跃迁强度重新分布——传统 JC 选择定则失效后，哪些跃迁可见由绝热能级的对称性决定。图源：Yoshihara et al. (2017)，Fig. 3。_

**模拟路线**与直接实现并列：量子 Rabi 模型在深强耦合区的物理也可以用 cQED 芯片**模拟**——设计等效哈密顿量映射，用可调耦合架构在芯片上重现深强耦合区的能谱与动力学特征，而不必让真实器件承受 $g/omegasim1$ 的苛刻条件。模拟路线的灵活性（参数可调、体系可选）让它成为深强耦合物理的补充研究工具。

![[assets/figures/strong-coupling/39208f5cab935004377cc46498c91c3c5f96b647ffb89262eecb1642c0cbf940.jpg]]

_量子 Rabi 模型深强耦合区的芯片模拟：等效哈密顿量映射与器件设计——模拟路线的参数灵活性。图源：arXiv:2402.06958，Fig. 1。_

![[assets/figures/strong-coupling/ad7f2ef57d4082f3076e32a8af5605c4efc68482e95091025c45a9a74ed9ccd4.jpg]]

_深强耦合区的模拟结果：能谱与动力学特征——与直接实现的实验数据交叉验证。图源：arXiv:2402.06958，Fig. 2。_

### 超强耦合区的系统物理

词条的耦合阶梯表已列超强耦合行；这一区的**系统物理**值得展开：JC 模型失效后回到量子 Rabi 模型——**A² 项**（规范不变性要求的双线性项）不可忽略，它确保能谱有下界；**真空不动点**（基态光子数为有限值——真空本身被杂化）；虚光子云的可探测签名。综述（Kockum 系）把这一区的实验与理论系统对接。

![[assets/figures/strong-coupling/83af7d4dc8198cf4f43607eade6694150f5e9cef0f33c6af73a12004ab6b03d7.jpg]]

_超强耦合区 cQED 的物理图景：Rabi 模型、A² 项、真空不动点——JC 失效后的完整框架。图源：Kockum et al. 综述 (2014)，Fig. 1。_

![[assets/figures/strong-coupling/e025a1b7f76c86cee5cc42d327fb11d4305f9afc8e82419e7d61f3fee982933d.jpg]]

_超强耦合的实验版图：各平台的耦合强度对比——从微波到光学。图源：Kockum et al. 综述 (2014)，Fig. 2。_

## 与其他概念的关系

- 深强耦合的原始实验全文见 [[references/wallraff-2004|Wallraff 2004 同批 cQED 奠基文献]]与本词条引用的 Yoshihara et al. (2017)。

- **与[[circuit-qed/jaynes-cummings-model|JC 模型]]**：强耦合是 JC 模型在共振极限下的物理后果；JC 模型给出强耦合所需的 $g>\kappa,\gamma$、真空 Rabi 劈裂 $2g\sqrt{n}$、色散极限下频移 $g^2/\Delta$。
- **与[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]**：劈裂是强耦合最常用的频域证据；判据 $2g>\kappa+\gamma$ 要求谱线可分辨。
- **与[[circuit-qed/high-impedance-resonator|高阻抗腔]]**：提高 $Z_r$ 是增大 $g_0$（从而 $g_\mathrm{eff}$）的硬件路径；半导体 cQED 中的强耦合演示几乎全部依赖高阻抗腔。
- **与[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]**：双量子点电荷比特的耦合 $g_c=g_0\sin\theta=2t_c g_0/(\hbar\omega_q)$ 由杠杆臂、混合角、腔阻抗共同决定。
- **与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]**：自旋比特本身磁偶极矩小（直接耦合 $10\text{–}100$ Hz 量级），需经微磁体梯度场或自旋轨道机制引入电荷混合，把 $g_s$ 推到与 $g_c$ 同量级；典型半导体 cQED 自旋强耦合中 $g_s/2\pi\approx 5\text{–}22$ MHz。
- **与[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]**：进入强耦合区后，多个比特可共享同一腔模并通过腔光子交换激发，构成远程纠缠与两比特门的硬件基础。
- **与[[circuit-qed/floquet-dynamics|Floquet 动力学]]**：强周期驱动下，JC 模型需推广到 Floquet 描述；强耦合区是观测腔光子辅助 LZSM 干涉等非平衡现象的必要条件。

## 设计经验：寻找强耦合工作点

、、三本论文在不同的腔型与材料体系中总结出寻找强耦合工作点的若干经验（综合 PDF pp. 43–45, pp. 57–58, pp. 60–62）：

1. **优先选取响应强的点间隧穿线**：谐振腔扫描电荷稳定图时，那些幅值/相位响应强的隧穿线一般对应较高的 $g$；
2. **避开源漏隧穿线**：源漏电子库隧穿会缩短电荷比特的相干时间，$\gamma$ 急剧增大；
3. **关注隧穿线的连续性**：源漏耦合过弱的隧穿线常出现"断断续续"，需增大偏置电极电压以保证电子可及时补充；
4. **耦合强度依赖电子空间分布**：电荷填充数相近的两个比特有相近的 $g$；多电子比特因电偶极矩更大通常 $g$ 更大；
5. **回避杂点**：蜂窝图中存在第二套隧穿线往往预示器件内有意外的量子点，会污染主比特的频率与耦合；
6. **调节 $2t_c$ 接近 $\omega_r$**：当隧穿速率 $2t_c/\hbar$ 与腔频 $\omega_r$ 重合时 $\sin\theta$ 接近 1，可直接提取全局耦合强度 $g_0$。
