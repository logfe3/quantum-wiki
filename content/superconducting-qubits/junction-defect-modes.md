---
title: 约瑟夫森结强耦合缺陷模
description: 约瑟夫森结势垒与结-衬底界面中与比特相干强耦合（g/2π≥0.5 MHz）的分立二能级缺陷；用交换谱学量化其谱密度 ρ_DM，结面积线性缩放与清洗工艺的系统研究。
aliases:
 - 强耦合缺陷模
 - strongly coupled defect modes
 - 结缺陷模
 - defect mode
tags:
 - 超导量子比特
 - 缺陷
 - 材料
 - 退相干
date: 2026-09-15
source: QAtlas
qatlas_id: qa_01m0qvghyxb2v5grevdgpz7khp
source_updated: 2026-09-05T12:32:52Z
---

<div class="entry-lead">超导比特的损耗叙事通常围绕**弱耦合 TLS 系综**与损耗角正切展开，但还有一小群"狠角色"：与比特相干交换能量、耦合强度达到系综数百倍的分立缺陷模。它们一旦与比特共振，可以直接废掉一只固定频率比特；对频率可调比特，它们卡死闲置频率选择、拖累磁通脉冲门与脉冲辅助读出的保真度。ETH Zurich 的 Colao Zanuz 等人 2025 年对 92 只频率可调比特做交换谱学，给出了这类强耦合缺陷模的定量画像：谱密度随结总面积线性缩放、热循环只重排不增减、清洗工艺改变不了它们的数目——却在三倍幅度上改变比特品质因子，证明强、弱两类缺陷物理上可分。</div>

## 物理图像：结区里的强电场

缺陷与比特的耦合来自电偶极相互作用

$$
g=\frac{\mathbf{p}\cdot\mathbf{E}}{\hbar}
$$

其中 $\mathbf{p}$ 是缺陷的电偶极矩、$\mathbf{E}$ 是比特在缺陷位置的电场振幅。界面区域的电场通常只有几 V/m，耦合率仅数百 kHz（弱耦合系综）；而约瑟夫森结隧道势垒内，零点电荷涨落 $n_\mathrm{zpf}$ 产生的电场可达数 kV/m：

$$
|\mathbf{E}_\mathrm{zpf}|\approx\frac{2e\,n_\mathrm{zpf}}{C\,d}
$$

其中 $e$ 是元电荷、$C$ 是比特总电容、$d$ 是势垒厚度（约 1–2 nm）。Al/AlOₓ/Al 结里两个区域被认定是强耦合缺陷的温床：非晶氧化势垒（电场最强且缺陷密集）与结-衬底界面（lift-off 工艺残留的有机物与粗糙衬底上的铝晶粒形貌）。势垒厚度的不均匀进一步展宽了耦合率分布。

![[assets/figures/junction-defect-modes/colaozanuz2025-fig1a-junction-schematic.jpg]]
*约瑟夫森结的三维示意（Al/AlOₓ/Al 结构，标注势垒与衬底）：氧化势垒与结-衬底界面是强耦合缺陷浓度最高的两个区域，结区零点电场达数 kV/m。图源：Colao Zanuz et al. (2025), Fig. 1(a)。*

## 测量：交换谱学与谱密度 ρ_DM

测量用**交换谱学**（swap spectroscopy）：把频率可调比特磁通脉冲扫过一段频率，布居在比特与共振缺陷之间相干交换，激发态布居损失 $P_L$ 对相互作用频率作图得到"交换谱"。谱上通常呈现两种特征：弱耦合缺陷系综贡献的平滑背景损耗，以及与分立强耦合缺陷共振处的尖锐损耗峰。定义**谱密度**

$$
\rho_\mathrm{DM}=\frac{\text{超过阈值的损耗峰数}}{\text{分析带宽}}
$$

计数阈值取 100 ns 相互作用时间内 $P_L=10\%$，对应纯相干交换下的耦合率下限

$$
\frac{g}{2\pi}\geq\frac{\arccos(1-2P_L)}{4\pi\tau}\Big|_{P_L=0.1,\ \tau=100\ \mathrm{ns}}=0.5\ \mathrm{MHz}
$$

其中 $\tau$ 是比特-缺陷相互作用时间。该阈值远高于背景损耗水平；对计数阈值的鲁棒性检验（0.05–0.57）不改变任何结论。92 只比特（结总面积 0.034–0.22 μm²，平均每只提供约 1.6 GHz 可扫带宽）的统计是量化这种稀疏共振事件的必要样本量。

## 三条定量结论

**结面积线性缩放。** 保持比特参数（$E_J$、$E_C$）相近，$\rho_\mathrm{DM}$ 随结总面积 $S=S_{j1}+S_{j2}$（SEM 实测）线性增长——缺陷在势垒内均匀分布、小结面积 + 高临界电流密度组合能成比例减少共振缺陷数。这也把强耦合缺陷的微观来源指向势垒内的 TLS（氧空位、氢沾污），其数量随势垒面积增长。

![[assets/figures/junction-defect-modes/colaozanuz2025-fig3b-rho-vs-junction-area.jpg]]
*强耦合缺陷模累计谱密度 ρ_DM 对结总面积 S 的依赖：总面积从 0.034 到 0.22 μm² 的四种晶圆批次（不同颜色）数据落在同一条线性拟合（虚线）附近——小结面积直接买来更少的共振缺陷。图源：Colao Zanuz et al. (2025), Fig. 3(b)。*

**热循环重排但总数守恒。** 同一器件（17 只比特）历经八次降温：单只比特的交换谱在每次热循环后面目全非（缺陷频率构型重排），但整片处理器的 $\rho_\mathrm{DM}$ 保持不变——缺陷既不消失也不新增，只是重新配置。

**清洗改 Q 不改 ρ_DM。** 显影后、铝沉积前的四种结区清洗工艺——(A) 原位氩离子铣、(B) 氧等离子灰化、(C1) 灰化+1 min BHF、(C2) 灰化+10 min BHF——对 $\rho_\mathrm{DM}$ 均无显著影响；但品质因子（$\omega_\mathrm{qb}/2\pi=6.0\pm0.5$ GHz 处测 $T_1$）相差近三倍：$Q_A=(0.46\pm0.23)\times10^6$、$Q_B=(1.32\pm0.36)\times10^6$、$Q_{C1}=(1.28\pm0.34)\times10^6$、$Q_{C2}=(0.78\pm0.23)\times10^6$。离子铣损伤衬底拉低 $Q$；过长 BHF 经电阻堆扩散腐蚀铝结构并留下氟化物残留。强耦合模数目与 $Q$ 的**不相关**是关键证据：弱耦合与强耦合缺陷在本质或位置上物理可分。

![[assets/figures/junction-defect-modes/colaozanuz2025-fig4a-rho-vs-cleaning.jpg]]
*四种清洗工艺（A 离子铣 / B 灰化 / C1、C2 灰化+BHF）下器件的谱密度 ρ_DM：各处理之间无显著差异（绿色虚线为全体清洗样品的均值与不确定度）——强耦合缺陷模的数目不由结区清洗决定。图源：Colao Zanuz et al. (2025), Fig. 4(a)。*

![[assets/figures/junction-defect-modes/colaozanuz2025-fig4b-quality-factors.jpg]]
*各清洗工艺下单比特品质因子 Q（点）与陪测谐振腔内部品质因子（短横线）：离子铣最低、灰化最高、BHF 时长增加反而降低——与 ρ_DM 的不相关说明弱/强耦合缺陷物理可分。图源：Colao Zanuz et al. (2025), Fig. 4(b)。*

## 适用条件与设计准则

- **对频率可调比特最致命**：磁通激活的两比特门、脉冲辅助读出与复位都要做频率远征，路径上撞见强耦合缺陷即遭耦合损耗；固定频率比特则只在恰好共振时受害。
- **设计准则一：小结面积**。在维持 $E_J$、$E_C$ 的前提下缩小结面积（提高临界电流密度），$\rho_\mathrm{DM}$ 按面积线性下降。
- **设计准则二：清洗选灰化**。氧等离子灰化给出最高品质因子；避免离子铣（损伤衬底）与过长 BHF（腐蚀铝、氟残留）。
- **测量方法的约束**：$\rho_\mathrm{DM}$ 依赖相互作用时间与计数阈值的选择（阈值升高计数减少），但结面积缩放趋势对阈值鲁棒；由于小结同时伴随高电流密度，该研究无法区分两种因素的独立贡献。

## 与其他概念的关系

- [[materials-devices/interface-defects|界面缺陷]]：弱耦合 TLS 系综与 tanδ 损耗预算的框架覆盖"背景"损耗；本词条的强耦合分立缺陷模是另一族——数目稀少、单独可分辨、由结区而非大面积界面主导，两类缺陷对工艺的响应不同证明它们物理可分。
- [[superconducting-qubits/transmon-qubit|transmon 量子比特]]：受害主体——固定频率 transmon 怕共振、频率可调 transmon 怕频率远征；结尺寸缩放直接进入 transmon 结设计规则。
- [[superconducting-qubits/csfq-decoherence|可调电容并联 flux qubit 的退相干]]：频率可调比特族的退相干表征方法与噪声分解思路同源，强耦合缺陷模是其中"分立共振"型的损耗通道。
- [[qubit-control/two-qubit-gate|两比特门]]：磁通激活门依赖频率远征，强耦合缺陷模限制路径选择并侵蚀门保真度。
- [[superconducting-qubits/qubit-fast-reset|量子比特快速复位]]：脉冲辅助复位同样扫频经过缺陷区，需在调度中规避共振。

## 参考文献

- Colao Zanuz, D., Ficheux, Q., Michaud, L., Orekhov, A., Hanke, K., Flasby, A., Bahrami Panah, M., Norris, G. J., Kerschbaum, M., Remm, A., Swiadek, F., Hellings, C., Lazăr, S., Scarato, C., Lacroix, N., Krinner, S., Eichler, C., Wallraff, A., Besse, J.-C. Mitigating Losses of Superconducting Qubits Strongly Coupled to Defect Modes. *Physical Review Applied* 23, 044054 (2025). DOI: 10.1103/PhysRevApplied.23.044054；arXiv:2407.18746（QAtlas 缓存：2407.18746）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
