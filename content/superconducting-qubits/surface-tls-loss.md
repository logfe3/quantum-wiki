---
title: 表面 TLS 损耗与湿法刻蚀
description: 超导量子比特退相干的主要材料来源——界面与表面无定形介质中的两能级系统损耗；把 BOE 清洗换成 HF→NH4F 湿法刻蚀可使中位 T1 提升 22%、TLS 密度下降四成，微观机理指向硅表面氢钝化与抗氧化再生长。
aliases:
 - 表面介质损耗
 - TLS 损耗
 - 两能级系统损耗
 - surface loss
 - ammonium fluoride etch
 - NH4F 刻蚀
tags:
 - 超导量子比特
 - 材料损耗
 - 工艺
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgqg58mmv05vkm55ebmwr
source_updated: 2026-09-05T02:30:26Z
---

<div class="entry-lead">transmon 的电场只有一小部分落在无定形介质与界面上，但正是这一小部分主导了弛豫：界面里的两能级系统（TLS）以损耗角正切的形式耗散腔场。Kopas 等人对结沉积前的硅表面清洗做了一处化学替换——把缓冲氧化物刻蚀（BOE）换成"氢氟酸后接氟化铵"（HF→NH₄F）——并用跨两代芯片设计、多晶圆的大样本统计证明：中位 $T_1$ 从 45 µs 提升到 55 µs（$p=0.002$）、强耦合 TLS 密度从 1.9 降到 1.1 个/GHz、谐振器 TLS 损耗降 32%；AFM/XPS/接触角/STEM-EDS 把微观改进定位到硅表面的氢钝化与更慢的氧化再生长。</div>

## 损耗的界面分类学

典型 transmon 器件里可能承载 TLS 损耗的界面有五类：金属–衬底、衬底–空气、金属–空气、金属–金属，以及约瑟夫森结势垒。设计侧用**参与比**（电场能落在各介质的份额）权衡这些界面的贡献——挖槽谐振器降低衬底–空气参与比、大电容把电场移入低损耗区域都是这一思路。工艺侧则要在结沉积前把硅表面的原生氧化物处理干净：刻蚀液的化学决定了表面是粗糙还是平滑、是留有氧化层还是被氢钝 passivation。

![[assets/figures/surface-tls-loss/kopas2024-fig1-cross-section.jpg]]
*器件截面示意：湿法刻蚀处理的是衬底–空气与结–衬底两类界面（斜线标出）。BOE 为 5:1 的 NH₄F:HF 混合液 2 分钟；HF→NH₄F 为 2% HF 1 分钟 + 去离子水冲洗 + 40% NH₄F 2 分钟（连续蘸取搅动防气泡）。刻蚀后立即涂胶进入双角度蒸发结工艺，最小化表面暴露空气的时间。图源：Kopas et al. (2024), Fig. 1。*

## 器件统计：T₁、TLS 密度与 SPI

两套设计（无耦合的 16 比特测试片 + 32 比特方-八边形耦合阵列、倒装封帽）跨晶圆对比：

![[assets/figures/surface-tls-loss/kopas2024-fig2-relaxation-rates.jpg]]
*弛豫率分布（BOE 蓝 vs HF→NH₄F 橙，对数轴；× 为无耦合设计、圆点为耦合设计）：HF→NH₄F 组中位 $\Gamma_1=18$ kHz（四分位 15、25 kHz，对应中位 $T_1\approx55\ \mu$s），BOE 组中位 22 kHz（17、28 kHz，$T_1\approx45\ \mu$s）；Tukey HSD 检验 $p=0.002$、差值 95% 置信区间 1.8–8 kHz。两种设计的趋势一致。图源：Kopas et al. (2024), Fig. 2。*

Ramsey 弛豫与退相干率两组间无显著差异（$\Gamma_2,\Gamma_\phi$ 高于 $\Gamma_1$，受外因限制）。**强耦合 TLS** 用磁通谱学提取：扫比特频率时避免交叉的劈裂为

$$
\mathrm{splitting} = \sqrt{\Delta_\mathrm{TLS}^2 + 4g^2},
$$

其中 $\Delta_\mathrm{TLS}$ 是比特与 TLS 的频差、$g$ 是耦合强度。HF→NH₄F 组不但 TLS 更少、耦合也更弱：密度从 $\sim1.9$ 降到 $\sim1.1$ 个/GHz。归一化指标 **SPI（谱污染指数）**——一组比特中所有 TLS 耦合强度之和除以可调频率范围之和——从 0.0095 降到 0.0065（−32%）。

## 谐振器分解：TLS 项与功率无关项

谐振器没有结–衬底界面，功率依赖测量因此能把损耗分解为 TLS 项与功率无关项：

![[assets/figures/surface-tls-loss/kopas2024-fig3-tls-loss.jpg]]
*CPW 谐振器功率依赖提取的 TLS 损耗 $F\delta_\mathrm{TLS}^0$：BOE 组 $2.5\times10^{-6}$、HF→NH₄F 组 $1.7\times10^{-6}$，降低 32%——与比特 SPI 的降幅一致。图源：Kopas et al. (2024), Fig. 3。*

功率无关损耗两组几乎相同（$\delta_\mathrm{PI}=4.7$ vs $4.3\times10^{-7}$，差异 8.5%、离散大），排除了氢进入铌膜的解释——TOF-SIMS 深度剖面也未发现 Nb 膜中 H、O、C、F 浓度的差异。谐振器同样改善而它没有结界面，这一事实把相当一部分 TLS 定位到**衬底–空气界面**——与"该界面暴露在不受控大气中"的直觉相反，是个反直觉结论。

## 微观机理：氢钝化与抗氧化

材料表征链给出三个互相印证的证据：

![[assets/figures/surface-tls-loss/kopas2024-fig5-reoxidation.jpg]]
*大气再氧化的 XPS 追踪：刻蚀刚结束时（t=0）HF→NH₄F 样品的 Si 2p 谱只剩 99.4 eV 的元素硅峰，而 BOE 样品在 102–104 eV 已有氧化硅信号；随后的氧化再生长速率相近，但 HF→NH₄F 在所有时间点都保持更少的氧化物——清洗与结沉积之间的窗口期里界面更干净。图源：Kopas et al. (2024), Fig. 5。*

- **接触角**：HF→NH₄F 处理的硅表面更疏水，指向更多氢钝 passivation、更少残留氧化物的 Si(100) 表面（NH₄F 在 Si(111) 上可形成原子级确定的单氢化物终端）；
- **AFM**：HF→NH₄F 使背景粗糙度下降、但引入少量约 10 nm 高的小峰（RMS 1.95 → 2.29 nm）——小峰来自 HF 步骤，只用 NH₄F 不会出现；粗糙度增加却损耗下降，说明粗糙度不是这里的决定变量；
- **STEM-EDS**：结的 Al–Si 界面为 2–4 nm 非晶层，两组结构无差异；界面氧浓度 HF→NH₄F 组更低（$7.36\pm2.66$ vs $9.54\pm2.90$ at%）——但逐器件对比氧浓度与 $T_1$ 无清晰相关，单个器件的弛豫无法由界面平均氧含量预言。

**方法论教训**正是这篇工作的另一价值：工艺改动必须靠大样本 + 对照组 + 统计检验（Tukey HSD）才能下结论——单器件的 $T_1$ 涨落远大于工艺效应，微观表征也只能覆盖器件面积的极小部分。

## 与其他概念的关系

- [[superconducting-qubits/junction-defect-modes|约瑟夫森结强耦合缺陷模]]：同一"强耦合 TLS"谱学方法测出的另一族缺陷——位于结势垒内、数目随结面积线性增长；本词条的改善主要发生在衬底–空气与结–衬底界面，两类缺陷物理可分、对工艺的响应不同。
- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：其退相干叙事中"介质与界面损耗"一条的定量展开与工艺对策。
- [[superconducting-qubits/csfq-decoherence|可调电容并联 flux qubit 的退相干]]：器件级退相干通道分解的另一个案例——那里低频段由磁通噪声主导，本词条处理的是耗散型 TLS 通道。
- [[materials-devices/interface-defects|界面缺陷]]：半导体–介质界面缺陷的通用框架（弱耦合 TLS 系综与 $\tan\delta$ 预算）在超导侧的对应。铌表面的镜像版本——水缓冲 BCP 刻蚀 + 快速密封把铌同轴腔 TLS 损耗正切压到 $\sim10^{-10}$ 量级（氟沾污与氧化层演化主导）——见[[circuit-qed/niobium-coaxial-cavity|铌同轴谐振腔]]词条：两案对照说明刻蚀化学是跨材料的一级 TLS 设计变量。
- [[superconducting-qubits/t1-fluctuation-statistics|比特寿命涨落统计]]：界面损耗的均值效应（本词条）之外，TLS 还制造 $\Gamma_1$ 的低频 1/f 涨落——表面介质 EPR 越大的小足迹比特涨落越显著，为工艺验收增加"稳定性"维度。
- [[superconducting-qubits/tin-aln-qubit-components|TiN/AlN 全氮化物超导组件]]：材料侧的另一条路线——用化学惰性的氮化物电极/势垒替代 Al/AlO_x，从源头减少无定形氧化物界面；溅射 AlN 势垒的缺陷谱密度与 AlO_x 的系统对比是后续关键实验。

## 参考文献

- Kopas, C. J., Goronzy, D. P., Pham, T., Torres Castanedo, C. G., Cheng, M. et al. Enhanced Superconducting Qubit Performance Through Ammonium Fluoride Etch (2024). DOI: 10.1088/2633-4356/ad88cc；arXiv:2408.02863（QAtlas 缓存：2408.02863）。
