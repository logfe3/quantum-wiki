---
title: 铌同轴谐振腔
description: 整体铣削、无焊缝的铌 λ/4 同轴腔：水缓冲 BCP 刻蚀把单光子内品质因子推过 1.4×10⁹（比同几何铝腔高 15 倍），并系统量化刻蚀化学、空气暴露与氢化物对毫开尔文单光子相干的影响，transmon 集成后仍有 11.3 ms 腔量子存储。
aliases:
 - Nb 同轴腔
 - 铌四分之一波长腔
 - niobium coaxial cavity
 - Nb coaxial resonator
tags:
 - 电路量子电动力学
 - 谐振腔参数
 - 铌
 - 材料损耗
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvfvgnkkpvxz625nzr2fdv
source_updated: 2026-09-08T01:24:49Z
---

<div class="entry-lead">三维超导腔是长相干量子存储的天然候选，但要把腔体从铝换成铌，必须先驯服铌复杂的表面化学。Oriani 等人用整体铣削的 λ/4 同轴腔（无焊缝、单件材料，排除流阻焊接损耗）把问题拆成三个可控变量——刻蚀化学、空气暴露时间、降温条件——逐一量化：把传统磷酸缓冲的 BCP 换成水缓冲配方，单光子内品质因子稳定超过 $1.4\times10^9$（同几何铝腔的 15 倍）；刻蚀后 30 分钟内密封抽真空可以基本冻结氧化层生长；氢化物在常规降温速率下并不构成主要威胁。集成 transmon 后，腔仍保有 11.3 ms 的相干时间。</div>

## 腔体设计：无焊缝 λ/4 同轴结构

腔体由一段一端短路的同轴波导构成 $\lambda/4$ 模（$f_0\approx6.5\ \mathrm{GHz}$），同轴段再接一段截止频率高于基模的圆波导——渐逝损耗沿波导长度指数抑制。整个结构从单块铌铣出，**没有跨焊缝的超流**，因此可以干净地研究本征材料损耗机制。刻蚀、冲洗、干燥后用铟圈密封在铜法兰之间，抽到 $P<10^{-5}\ \mathrm{mbar}$ 后夹断密封，防止大气气体凝结与表面氧化物继续生长，再降温到 ≤45 mK。

## 刻蚀化学：水缓冲 BCP 的胜利

两种缓冲化学抛光（BCP）配方对照：传统的 $1{:}1{:}2$ $\mathrm{HF{:}HN O_3{:}H_3PO_4}$ 与替换缓冲液的 $1{:}1{:}2$ $\mathrm{HF{:}HNO_3{:}H_2O}$。

![[assets/figures/niobium-coaxial-cavity/oriani2025-fig1a-q-survey.jpg]]
*全部腔体的品质因子普查（按刻蚀配方、刻蚀后是否立即密封、是否出现 NbHx 分组；实心为 T<40 mK 单光子数据）：水缓冲 BCP 刻蚀的腔一致比磷酸缓冲好 5×，平均 $Q_\mathrm{int}=(1.40\pm0.128)\times10^9$；直接降温的腔全部超过 $1.3\times10^9$。脉冲探针谱学（箭头所指腔）在 $\bar n\approx1$–2000 光子范围内线宽无功率依赖，拟合给出 $Q_\mathrm{int}=1.47\times10^9$，近临界耦合下加载相干时间 ≥15 ms。同一只腔先后用两种配方刻蚀表现随配方改变，证明性能属于化学而非个体。图源：Oriani et al. (2025), Fig. 1。*

温度依赖拟合用标准 TLS 模型分解损耗通道：

$$
\frac{1}{Q_\mathrm{int}(T)} = \frac{1}{Q_0} + F_e\tan(\delta_{TLS})\tanh\!\left(\alpha\frac{\hbar\omega_0}{2k_bT}\right),
$$

其中 $F_e = t_\mathrm{ox}S_e/\epsilon_r$ 是电场表面参与比（$t_\mathrm{ox}$ 氧化层厚度、$S_e$ 由 HFSS 给出 $392\ \mathrm{m^{-1}}$），$Q_0=\mu_0\omega_0/(R_sS_m)$ 由残余表面电阻 $R_s$ 决定（$S_m=548\ \mathrm{m^{-1}}$）。水缓冲配方的损耗正切乘积 $F_e\tan\delta_{TLS}=1.8$–$5.3\times10^{-10}$（刻蚀熄灭后 30 分钟内密封），与电抛光椭圆铌腔的最好水平相当或更好，比磷酸缓冲好 **2–4×**；$R_s$ 好 **3–5×**。

![[assets/figures/niobium-coaxial-cavity/oriani2025-fig4a-etch-xps.jpg]]
*两种刻蚀配方的表面化学（XPS）：磷酸缓冲的测试片在表面与氧化层内部都有氟 1s 峰（684 eV），C 1s 拟合显示 CF/CF₂ 化合物——氟沾污持续进入氧化层；水缓冲片没有这些特征，只有表面的沾污碳。机理指向封闭同轴几何里黏稠反应产物层难以持续移除（pipetting 时可见蓝/绿色膜），磷酸改变反应动力学使含氟副产物滞留。图源：Oriani et al. (2025), Fig. 4。*

## 空气暴露与氧化层演化

铌的 TLS 位于无序 $\approx5$ nm 的 $\mathrm{Nb_2O_5}$ 表面氧化层（$\mathrm{NbO_x}$ 态）。

![[assets/figures/niobium-coaxial-cavity/oriani2025-fig3a-air-exposure.jpg]]
*密封时机的影响（同一只腔的对照）：刻蚀后 30 分钟内密封抽真空 vs 在干燥盒敞放 22 天——未密封腔的单光子 $Q_\mathrm{int}$ 低约 22%、TLS 损耗正切高约 75%；XPS 拟合显示氧化层从 3.6 nm 长到 4.9 nm（+38%）。厚度增长不足以解释 75% 的损耗增长——氧化物的形态与组分同样重要。图源：Oriani et al. (2025), Fig. 3。*

按厚度线性外推只能解释约一半的损耗增长，说明**氧化物组分/形态**（氧空位多少）与厚度同为主要变量；快速密封（<90 分钟）能把 TLS 损耗压到电抛光铌腔未做氧化物扩散处理时的水平。

## 氢化物 NbHₓ：被高估的威胁

间隙氢在 50–100 K 之间形成 $\mathrm{NbH_x}$，像低 $T_c$ 的近邻超导体，构成磁损耗通道。把水缓冲刻蚀的腔反复升到 100 K 保持（每循环在 50–100 K 停留 10 小时），$Q_\mathrm{int}$ 随循环数单调下降、单光子品质因子累计降 36%；ToF-SIMS 显示氢深入体材约 50 µm（伦敦穿透层之下很远），而氧在 10 nm 内即消失。但常规降温（150–75 K 区间 $0.3$–$0.5\ \mathrm{K/min}$）下所有腔性能不随多次降温变化——SRF 文献建议的 $>1\ \mathrm{K/min}$ 并非必需；即便人为诱发氢化物，损伤也有限。温度依赖的 $Q_\mathrm{int}$ 峰值位置与经 650 °C 以上烘烤的腔一致，说明单个降温循环后 $T_c$ 未受明显影响。

## transmon 集成：11.3 ms 腔存储

集成 transmon（刻意把色散耦合压小到 29 kHz 以抑制经损耗比特的 inverse Purcell 退相干；transmon $T_1,T_2=60,29\ \mu$s，满足 $\chi>1/T_2$）后，用光子数分裂谱的时间依赖拟合提取**单光子腔寿命 $11.3\pm0.42\ \mathrm{ms}$**，与裸腔 ringdown（≈12–16 ms）相当。损耗预算：腔对比特/读出腔的参与分别对应 1/300 ms 与 1/2 s 的极限，驱动针耦合限制在 1/25–100 ms——实测损耗是本征腔损与蓝宝石衬底引入的组合。

**与 SRF 椭圆腔的换算**：同轴几何的电场填充因子约为 5 GHz TESLA 椭圆腔设计的 3 倍，折算后 $R_s$ 距同频最好椭圆铌腔在 3 倍以内、有效 TLS 损耗正切反而低 2–4×。结合成熟的氧化物移除与氮掺杂工艺，作者预计单光子性能还有至少 3 倍提升空间。

## 与其他概念的关系

- [[circuit-qed/cavity-linewidth|腔线宽与品质因子]]：本词条是"品质因子能做多高"的当前三维腔上限数据点（$Q_i>1.4\times10^9$ vs 铝腔 $10^5$–$10^8$）。
- [[circuit-qed/microwave-resonator|微波谐振腔]]：三维腔体家族的铌同轴分支；铝矩形腔与焊接/引线损耗的对照见该词条。
- [[circuit-qed/bosonic-cqed|玻色 cQED 与腔编码量子计算]]：毫秒-十毫秒级腔相干时间是腔编码纠错（猫态/GKP/二项式码）的硬件前提，11.3 ms 存储直接服务这一路线。
- [[superconducting-qubits/surface-tls-loss|表面 TLS 损耗与湿法刻蚀]]：硅表面的氢钝化/抗氧化叙事在铌表面的镜像——那里用 HF→NH₄F 改善结-衬底界面，这里用水缓冲 BCP 抑制氟沾污并冻结氧化层生长；两篇工作共同说明刻蚀化学是 TLS 损耗的一级设计变量。
- [[superconducting-qubits/junction-defect-modes|约瑟夫森结强耦合缺陷模]]：同为表面/界面缺陷家族，本词条处理宏观品质因子视角的弱耦合 TLS 系综与磁损耗，该词条处理结势垒内的分立强耦合缺陷。

## 参考文献

- Oriani, A. E., Zhao, F., Roy, T., Anferov, A., He, K., Agrawal, A., Banerjee, R., Chakram, S., Schuster, D. I. Niobium coaxial cavities with internal quality factors exceeding 1.5 billion for circuit quantum electrodynamics (2025). arXiv:2403.00286（QAtlas 缓存：2403.00286）。
