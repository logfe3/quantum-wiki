---
title: 腔线宽与品质因子
description: 微波谐振腔的光子耗散速率 κ、内部/外部品质因子及其与强耦合、色散读出和比特退相干之间的关系。
aliases:
 - 品质因子
 - 腔损耗率
 - 腔衰变率
 - κ
 - Q factor
 - cavity linewidth
 - 谐振腔线宽
 - 谐振腔品质因数
tags:
 - 电路量子电动力学
 - 谐振腔参数
date: 2026-09-08
---

<div class="entry-lead">腔线宽 κ 描述单光子从谐振模式中泄露的总速率，与"品质因子"Q 成简单倒数关系；它是判别强耦合、限制色散读出信噪比、并决定比特相干是否被腔"拖垮"的核心参数。</div>

## 物理图像

[[circuit-qed/microwave-resonator|微波谐振腔]]中储存的电磁能量并非永久保留：腔光子会通过两条主要通道离开模式。一是**外部损耗** $\kappa_e$，经耦合电容（透射腔为 $\kappa_1+\kappa_2$，反射腔为单个端口）漏入馈线与测量线路；二是**内部损耗** $\kappa_i$，来自超导体准粒子激发、电极–衬底与金属–空气界面上的二能级系统（two-level system, TLS）介电损耗、微波辐射到自由空间的长直流电极寄生通道等。两者之和

$$
\kappa = \kappa_i + \kappa_e
$$

即总腔耗散率，也就是[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]主方程中驱动 $a$ 的耗散项。在频谱上，$\kappa$ 给出无加载腔的洛伦兹响应（见[[circuit-qed/microwave-resonator|微波谐振腔]]词条）的半高宽（full width at half maximum，FWHM），通常直接简称为"腔线宽"。

工程语境中，腔线宽常被换算成无量纲的**品质因子**（quality factor）

$$
Q = \frac{\omega_r}{\kappa}
$$

描述腔中能量从初值衰减到 $1/e$ 期间载波完成的平均振荡次数。相应地 $\kappa = \omega_r / Q$，即腔频与品质因子的商。在许多实验拟合里，$Q$ 比 $\kappa$ 更便于在不同频率的腔之间作横向比较。

<!-- FIGURE: 透射式谐振腔 $|S_{21}|$ 洛伦兹线型，半高宽对应 $\kappa$，峰值位于 $\omega_r$；标出耦合电容 $C_k$ 调节 $\kappa_e$ 的方向 -->

## 理论模型

### 三种品质因子的定义

把外部与内部损耗分开，得到：

$$
\frac{1}{Q_L} = \frac{1}{Q_e} + \frac{1}{Q_i},\qquad
Q_e = \frac{\omega_r}{\kappa_e},\qquad
Q_i = \frac{\omega_r}{\kappa_i}.
$$

其中 $Q_L$ 称为**有载品质因子**（loaded quality factor）或**总品质因子**，$Q_e$、$Q_i$ 分别由耦合端口与内部损耗主导。实验中通过测量 $S_{11}$ 或 $S_{21}$ 拟合得到的 FWHM 是 $\kappa/2\pi$（而非 $\kappa$），相应地 $Q = f_r/\mathrm{FWHM}$。

定义**耦合系数** $g_c = Q_i/Q_e$：

- $g_c<1$：**欠耦合**（under-coupled），腔与外界接触弱，$Q_L\approx Q_i$，适合用作窄带滤波器与高相干性量子存储；
- $g_c>1$：**过耦合**（over-coupled），$\kappa_e\gg\kappa_i$，$Q_L\approx Q_e$，腔中光子很快漏出，适合用作快速读出；
- $g_c=1$：**临界耦合**（critically coupled），透射功率最大、阻抗完全匹配。

### 集总模型与分布式等效

对集总 RLC 回路，无载品质因子 $Q_i = \omega_r R C$，加入外部负载 $R_L$ 后 $Q_e = \omega_r R_L C$，合并得到 $1/Q_L = 1/Q_i + 1/Q_e$。对分布式共面波导腔（coplanar waveguide，CPW），在谐振频率附近可等效为集总 RLC 模型：$R=Z_r/\alpha$，$L=Z_r l/(\omega_r\alpha)$，$C=\alpha/(\omega_r Z_r)$，其中 $\alpha$ 与衰减系数相关。当耦合电容 $C_k$ 较小（$q=\omega_r C_k R_L\ll1$）时，有载品质因数近似 $Q_L\approx 1/(2\omega_r C_k R_L C_l)$，耦合电容越大、$Q_L$ 越低。

### 与 $S$ 参数的对应

把无加载谐振腔看作二端口网络，由输入–输出理论可写透射系数

$$
S_{21}(\omega) = \frac{-i\sqrt{\kappa_1\kappa_2}}{(\omega_r-\omega)-i\kappa/2},\qquad
|S_{21}|^2(\omega) = A\,\frac{\kappa_1\kappa_2}{(\omega-\omega_r)^2+(\kappa/2)^2}
$$

半高宽即 $\kappa/2\pi$；相位响应 $\phi(\omega)=\arctan\!\big(2(\omega-\omega_r)/\kappa\big)$ 在 $\omega=\omega_r$ 处跨越 $\pi/2$。反射腔相应地

$$
S_{11}(\omega) = 1 + \frac{i\kappa_i}{(\omega_r-\omega)-i(\kappa_i+\kappa_e)/2}
$$

谱线在 $\omega_r$ 处出现反射谷，谷的宽度仍由 $\kappa$ 决定。

当量子点等"比特"耦合到腔时，比特磁化率 $\chi=g_c/(-\Delta+i\gamma)$ 进入 $S$ 参数分母的修正项：

$$
S_{21}(\omega) = \frac{-i\sqrt{\kappa_1\kappa_2}}{(\omega_r-\omega)+g_c\chi-i\kappa/2}
$$

按实部、虚部分解得到比特对腔频与腔线宽的同时调制

$$
\omega_r' = \omega_r - \frac{g_c^2\Delta}{\Delta^2+\gamma^2},\qquad
\kappa' = \kappa + \frac{2g_c^2\gamma}{\Delta^2+\gamma^2}.
$$

色散区（$|\Delta|\gg g_c$）实部主导，腔频按 $\pm g_c^2/\Delta$ 偏移；近共振时虚部主导，腔线宽增大——这是从谱线判断系统是否"被比特加载"的最直接判据。

### 物理意义的另一种解读：能量与寿命

腔线宽的时域对应是光子数寿命 $\tau_{\rm ph}$：

$$
\kappa = \frac{2\pi}{\tau_{\rm ph}},\qquad Q = \omega_r \tau_{\rm ph}.
$$

即 $\tau_{\rm ph}$ 是腔内平均光子数衰减到 $1/e$ 所需时间。"高 $Q$ 长寿命"与"窄线宽"是同一物理现象的频域、时域表达。专门指出，"在实验中，我们一般习惯使用线宽（损耗速率）而非品质因子来描述谐振腔的性能"，因为拟合 $S$ 参数时直接读出的就是 $\kappa/2\pi$。

<!-- FIGURE: 同一腔的时域光子数衰减（指数包络，时间常数 $1/\kappa$）与频域洛伦兹响应（半高宽 $\kappa/2\pi$）的对应关系 -->

## 损耗通道的物理来源

### 外部损耗 $\kappa_e$

$\kappa_e$ 由耦合电容与阻抗共同决定。以透射腔为例，端口 $\nu$ 的外耦合率

$$
\kappa_\nu \propto \omega_r^3 Z_r Z_{0,\nu} C_{\mathrm{ext},\nu}^2
$$

其中 $Z_{0,\nu}=50\ \Omega$ 为馈线特征阻抗，$C_{\mathrm{ext},\nu}$ 为端口耦合电容。这一标度有两层物理含义：(1) 提高 $Z_r$ 在同样 $C_{\mathrm{ext}}$ 下会显著增大 $\kappa_e$，因此高阻抗腔虽然提升真空电场，但也更难"封闭"光子，需要更精细地设计耦合端口；(2) 端口电容平方的依赖使 $\kappa_e$ 对工艺容差敏感——光刻偏差 10% 就会带来约 20% 的线宽变化。

### 内部损耗 $\kappa_i$

$\kappa_i$ 是本征损耗，由腔本身的电磁能量耗散通道决定：

- **超导准粒子损耗**：温度升高或外加磁场抑制超导能隙时，准粒子浓度上升、库珀对隧穿受阻，电阻损耗出现。通过变温实验指出 NbTiN 等高动态电感材料由于 $T_c$ 高、临界场大，准粒子损耗对磁场更不敏感；
- **电极–衬底界面 TLS 损耗**：金属–介质界面的非晶态缺陷在低温下饱和为 $\tan\delta\sim 10^{-3}$–$10^{-4}$ 的介电损耗，是限制 $Q_i$ 的主要因素。NbTiN、TiN 等薄膜的工艺优化（表面氢氟酸清洗、原位保护层）能把 TLS 损耗抑制约一个量级；
- **金属–空气界面 TLS**：与上条类似但处于上表面，与光刻胶残留、氧化层厚度有关；
- **辐射损耗**：长直流电极在微波频段如同天线，把腔内能量辐射进自由空间或邻近电路。总结为"材料损耗、表面缺陷、界面损耗、辐射损耗以及超导损耗"五类；
- **磁通抑制损耗**：SQUID 阵列腔在偏离磁通极大点时，电感非线性显著、循环电流增加，正常导体损耗进入工作区，因此其 $\kappa_i$ 通常比高动态电感腔高一个量级。上述通道在 中被概括为"材料损耗、表面缺陷、界面损耗、辐射损耗以及超导损耗"五类。

### Fano 干涉与拟合模型

高阻抗腔的中心导体常为亚微米线宽，与寄生微波通道（pad、bonding wire）形成多通道耦合，导致 $S_{11}$ 或 $S_{21}$ 出现明显不对称线型——Fano 共振。直接套用纯洛伦兹线型会引入系统误差，$\kappa$ 与 $g_c$ 都被低估。报告："通过使用带有 Fano 效应的 Lorentzian 曲线拟合后，我们确定谐振腔的中心频率与线宽"。也明确指出对 SQUID 阵列腔须用 Fano-Lorentz 模型，提取的 $\kappa/2\pi$ 才能用于后续物理量分析。

## 参数与量级

下表汇总本站论文中报告的腔参数。同一工作中不同腔型用于不同实验，因此数据点之间的差异主要来自腔型选择与工艺成熟度，而非单一物理量。

| 腔型 | $Z_r$ | $\omega_r/2\pi$ | $\kappa/2\pi$ | $\kappa_i/2\pi$ | $\kappa_e/2\pi$ | $Q_L$ | 来源 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 50 Ω CPW 透射腔（锗硅纳米线 DQD） | 50 Ω | 5.92 GHz | — | — | — | — | |
| 标准 CPW 反射腔耦合单量子点 | 50 Ω | 5.992 GHz | — | 14.53 MHz | — | $Q_i=824,\,Q_e=824$ | ，p. 23 |
| 双端口透射腔（双 DQD） | 50 Ω | 6.53 GHz | — | 30.0 MHz | 数十 MHz | — | ，pp. 55、60 |
| 全封闭 3D 铝腔（20 mK） | — | 9.45 GHz | $\sim 50$ kHz | — | — | $\sim 2\times10^5$ | ，p. 63 |
| 开槽 3D 铝腔（20 mK） | — | — | — | — | — | $\sim 10^5$ | ，p. 63 |
| 加直流引线的 3D 铝腔 | — | — | — | — | — | $\sim 8\times10^3$ | ，p. 63 |
| NbTiN 高动态电感反射腔 | $\sim 2$ kΩ | 6.045 GHz | — | 11.3 MHz | 4.50 MHz | — | |
| TiN $\lambda/2$ 腔（自旋强耦合用） | $\sim 3.5$ kΩ | 4.993 GHz | 2.2 MHz | — | — | $Q_L\sim 2270$ | ，p. 55 |
| TiN $\lambda/2$ 腔（自旋强耦合用 7.3 GHz） | $\sim 2.5$ kΩ | 7.332 GHz | 5.13 MHz | — | — | $Q_L\sim 1430$ | ，p. 69 |
| NbTiN 反射腔 / SQUID 阵列腔 | $\sim 1$ kΩ | 6.758 GHz | 58.9 MHz | 36.9 MHz | 22.0 MHz | — | ，p. 87 |
| SQUID 阵列反射腔（38 SQUID） | $\sim 1$ kΩ | 5.6–6.23 GHz | 30–60 MHz | — | — | — | ，p. 41 |

按工程经验（、 总结）：

- 标准 50 Ω 共面波导腔：$Q_L$ 在 $10^3$–$10^4$，对应 $\kappa/2\pi$ 数 MHz；
- 三维金属腔：$Q_L$ 可达 $10^5$–$10^6$，但与半导体直流引线集成困难，加引线后跌至 $10^3$–$10^4$；
- 高动态电感材料（NbTiN、TiN）腔：$Q_L\sim 10^3$，$T_c$ 高、临界场大，适合自旋比特实验；
- SQUID 阵列腔：$Q_L\sim 10^2$–$10^3$，磁通可调但耗散偏高。

## 在 cQED 中的关键作用

### 强耦合判据与腔线宽

[[circuit-qed/strong-coupling|强耦合]]判据写为

$$
g > \kappa,\gamma,\qquad\text{或等价}\qquad 2g > \kappa+\gamma
$$

$\kappa$ 与比特退相干率 $\gamma$ 同列。给出的"自旋–腔强耦合判据"为 $g_s > \kappa^*,\gamma_s$，其中 $\kappa^*$ 是被比特负载后的腔展宽。对半导体量子点，自旋比特的 $\gamma/2\pi\sim 2$–$5$ MHz 与高阻抗 TiN 腔的 $\kappa/2\pi\sim 2$–$5$ MHz 已经相当接近；因此进一步压低 $\kappa$ 是把系统推入强色散区（$\chi>\kappa,\gamma$）的关键。 在 Si/SiGe 三量子点 + TiN 腔上实现 $2g_s/2\pi=43.5$ MHz 的自旋真空 Rabi 劈裂，正是 $\kappa/2\pi=2.2$ MHz 这一极低线宽支撑的。

### 色散读出与腔展宽

在[[readout-measurement/dispersive-readout|色散读出]]中，腔频按 $\pm\chi=\pm g^2/\Delta$ 移动比特态对应的两个值。区分这两个值需要信噪比 $2|\chi|/\kappa$ 足够大。指出，在他们体系中"腔的品质因子过高且比特相干寿命过短，导致了我们无法使用单发色散读出方案"，即对 $T_1$ 短的电荷比特而言，把 $\kappa$ 调到 $\gtrsim 1/T_1$ 的过耦合区，反而能加快读出、避免光子堆积引起的加热。

### Purcell 效应与"被比特加载"的腔

当比特与腔在色散区耦合时，比特会通过自发辐射通道加快腔内光子耗散——Purcell 效应——把有效 $\kappa$ 拉大：

$$
\kappa_{\rm eff}(\omega_q) = \kappa + \kappa_P(\omega_q),\qquad
\kappa_P(\omega_q) = \frac{g^2\kappa}{\Delta^2+(\kappa/2)^2}.
$$

Purcell 滤波（参见[[readout-measurement/purcell-filter|Purcell 滤波]]词条）通过引入与腔匹配的带阻结构抑制这一通道，保护比特相干。

### 合作因子与品质因子

半导体 cQED 衡量相干交换相对损耗的常用单一数字是合作因子

$$
C = \frac{g^2}{\kappa\gamma} = \frac{Q_L}{\omega_r}\cdot\frac{g^2}{\gamma}.
$$

$C>1$ 是"相干耦合占优"的前提之一。提升 $C$ 既要增大 $g$（用高阻抗腔），也要压低 $\kappa$ 与 $\gamma$。本站论文中最强电荷比特耦合$g_0/2\pi=175$ MHz 与最低腔耗散 $\kappa/2\pi=2.2$ MHz 在同一器件上同时实现，$C\sim 150$。

## 实验特征与拟合流程

### 从 $S$ 参数到 $(\omega_r,\kappa)$

实验流程通常为：

1. 用矢量网络分析仪采集室温 $S$ 参数，作为器件是否损坏的初筛；
2. 降至低温（通常 $< 50$ mK），微调磁通偏置（对 SQUID 阵列腔）以对准工作点；
3. 在工作点附近细扫频率窗，拟合 $|S_{21}(\omega)|$ 或 $|S_{11}(\omega)|$ 为 Fano-Lorentz 线型，提取 $\omega_r$、$\kappa$、Fano 因子；
4. 在不同探测功率下重复（3），确认低光子数极限下 $\kappa$ 不再随功率变化（避免非线性展宽）。

功率依赖本身是诊断信息：高功率下双光子吸收、SQUID 非线性等机制会让 $\kappa$ 增大；低功率极限下的 $\kappa$ 才是参与 $g>\kappa,\gamma$ 判据的"本征线宽"。报告 NbTiN 腔的拟合过程正是按这一流程获得 $(\kappa,\kappa_i,\kappa_e)/2\pi=(58.9,36.9,22.0)$ MHz。

### 栅压扫描中的线宽变化

把双量子点失谐 $\varepsilon$ 当扫描变量，腔的色散响应是抛物线型 $\omega_a=\sqrt{\varepsilon^2+(2t_c)^2}$，而腔线宽 $\kappa$ 在 $\varepsilon=0$ 附近出现最小值；这与隧穿耦合 $2t_c$ 与腔频 $\omega_r$ 接近时的"反交叉"对应。在 Si/SiGe 三量子点上同时拟合 $\omega_r$ 与 $\kappa$ 作为 $\varepsilon$ 的函数，得到 $g_0/(2\pi)=175$ MHz 的全局耦合，并提取电荷比特退相干 $\gamma_c/(2\pi)=99$ MHz。

### 内外部损耗的分离

直接拟合只能给出 $\kappa$。要把 $\kappa_i$、$\kappa_e$ 拆开，常用方法：

- **改变耦合电容**：重复加工多批器件把 $C_{\rm ext}$ 在数倍范围内变化，截距给出 $\kappa_i/2\pi$；
- **反射–透射联合拟合**：在同一器件上同时拟合 $S_{11}$ 与 $S_{21}$，由独立参数 $\kappa_i$、$\kappa_e$ 同时被约束；
- **时域 ring-down**：短脉冲激发腔，观测 $|a(t)|^2$ 的指数衰减，$\tau_{\rm ph}=1/\kappa$ 直接给出总耗散；与频域拟合交叉验证。

在锗硅纳米线量子点上用反射式谐振腔分离 $(\kappa_i,\kappa_e)/2\pi=(11.3,4.50)$ MHz；则在 NbTiN 反射腔上得到 $(\kappa_i,\kappa_e)/2\pi=(36.9,22.0)$ MHz。

## 设计经验：寻找 $\kappa$ 合适的工作点

本站论文中反复出现的 $\kappa$ 设计经验（综合本站三本论文）：

1. **强耦合追求低 $\kappa$**：$\kappa/2\pi$ 从 30 MHz 压到 2–5 MHz，$g>\kappa,\gamma$ 的余量扩大一个量级。这是高动态电感材料腔（NbTiN、TiN）优于 SQUID 阵列腔的关键；
2. **快速读出追求高 $\kappa$**：电荷比特 $T_1$ 较短，腔中光子堆积会引起比特加热；适度过耦合（$g_c>1$）反而有利，专门指出需"优化响应时间以及内外部品质因子之比"；
3. **磁通敏感度与 $\kappa_i$ 的取舍**：SQUID 阵列腔的 $\kappa_i$ 偏高，但对 $\omega_r$ 的磁通可调性便于扫共振；NbTiN/TiN 腔 $\kappa_i$ 低但不可调——设计时需在二者之间权衡；
4. **Fano 拟合的必要性**：高阻抗腔的不对称线型必须用 Fano-Lorentz 处理，否则 $\kappa$ 系统性偏低、$g_c$ 随之低估；
5. **变温诊断**：通过变温测量 $Q_i(T)$ 的下降拐点判断是准粒子损耗还是 TLS 损耗主导，从而指导工艺改进方向。

## 与其他概念的关系

- **腔本体物理**：腔线宽是[[circuit-qed/microwave-resonator|微波谐振腔]]的核心参数，与"$Z_r$ 越高 $\kappa_e$ 越大"、"$\kappa$ 拆为 $\kappa_i+\kappa_e$"等基本事实一起构成 cQED 实验的工程语言；
- **强耦合判据**：$\kappa$ 与 $g$、$\gamma$ 一起决定系统是否进入[[circuit-qed/strong-coupling|强耦合]]区；$\kappa$ 同时还是色散读出信噪比 $2\chi/\kappa$ 的分母；
- **JC 模型与色散读出**：$\kappa$ 进入[[circuit-qed/jaynes-cummings-model|JC 模型]]的开放系统主方程；色散频移与 Purcell 展宽（[[readout-measurement/dispersive-readout|色散读出]]）都依赖 $\kappa$ 的相对大小；
- **高阻抗腔**：（参见[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]）是同时提升 $Z_r$ 与压低 $\kappa_i$ 的硬件路线，承载了从 NbTiN 到 TiN 的多条器件工艺；
- **比特退相干**：$\gamma$ 与 $\kappa$ 在合作因子 $C=g^2/(\kappa\gamma)$ 中对称出现，是判断比特–腔组合相干优劣的"两半"；
- **腔介导耦合**：在色散区两比特经虚光子交换得到有效相互作用 $\sim g_1g_2/\Delta$，但若 $\kappa$ 太大、虚光子寿命短于比特–比特相位积累时间，远程耦合会被腔耗散拖垮，对应[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]词的硬件约束；
- **Purcell 滤波**：（参见[[readout-measurement/purcell-filter|Purcell 滤波]]）通过外部带阻结构把有效 $\kappa$ 抑制到不影响比特自发辐射的水平，是 Purcell 效应反向应用的典型例；
- **平台材料**：$\kappa_i$ 强烈依赖材料与界面工艺，主要平台为[[materials-devices/gaas-algaas|GaAs/AlGaAs]]、[[materials-devices/silicon-sige|Si/SiGe]]、[[materials-devices/silicon-mos|Si-MOS]] 与[[materials-devices/strained-germanium|应变锗]]等异质结。
