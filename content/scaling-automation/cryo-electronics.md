---
title: 低温电子学
description: 稀释制冷机内为量子点提供电压、读出与微波信号的衰减-滤波-放大链路，含 HEMT 放大器、低通滤波与 cryo-CMOS 控制芯片。
aliases:
  - cryo-CMOS
  - 低温放大器
  - 低温滤波
tags:
  - 扩展与自动化
  - 低温电子学
date: 2026-09-08
---

<div class="entry-lead">低温电子学（cryogenic electronics）指稀释制冷机内部及紧贴其冷板、为量子点提供偏置、操控和读出信号的电压-滤波-放大链路，是把宏观仪器和极低温比特连接起来的工程化层。</div>

## 物理图像与目标

一台稀释制冷机（dilution refrigerator）从室温到约 10 mK 通常分 5–6 级冷板——70 K、4 K、Still（约 0.7 K）、100 mK、Mixing Chamber（约 10–20 mK）。样品芯片安装在最低温的 MC 冷板上，但电压、微波和读出电流都必须从室温跨过这些冷板才能到达样品；反向地，量子点给出的 pA–nA 量级电流信号也要先被局部放大再被室温仪器读取。这一跨温区链路被称为**低温测控线路**（cryogenic wiring / cryo-electronics），它解决两个并行的问题：

1. **热噪声抑制**：从室温到 10 mK 的温度梯度意味着任何一根导线上都有热噪声电流
$$
i_{\text{th}}^{2}=4k_{B}T\,\Delta f/R,
$$
其中 $R$ 是线缆阻抗、$\Delta f$ 是工作带宽、$T$ 是等效电子温度。室温 $T\!\approx\!300$ K 与 mK 端相差 4 个量级，所以室温输入噪声必须先用衰减器"压低"，再用紧贴冷板的多级低通滤波器"滤除"。
2. **阻抗匹配与信号传输**：50 Ω 同轴线和 PCB 微带线只在端接 50 Ω 时无反射；跨冷板时接头（SMA、K2.92 等）的频率上限（典型 18–26.5 GHz）、半钢线（UT-85/UT-085 等）单位长度衰减、bonding 线自感（每根约 1 nH）共同决定了最大可用带宽。

从量子比特角度看，这条链路是 $T_1$、$T_2^*$、单发读出保真度与多比特扩展能力的"共同瓶颈"——同样的器件样品，更换低温电子学配置（衰减分布、滤波级数、HEMT 替换为 cryo-CMOS LNA 等）通常能把门保真度从约 0.99 推到约 0.999。

<!-- FIGURE: 稀释制冷机跨温区信号链路示意图：室温 → 70 K → 4 K → Still → 100 mK → MC，每级标注典型衰减/滤波/放大配置 -->

## 理论模型

### 热噪声与衰减分布

记室温端输入噪声功率谱密度为 $S_{V}^{\text{RT}}(f)=4k_{B}T_{\text{RT}}R$，经过 $i$ 级衰减器与滤波器后到达样品端的等效噪声温度为各冷板温度按衰减权重的加权平均：

$$
T_{N}=\frac{\displaystyle\sum_{k}T_{k}\,10^{-A_{k}/10}}{\displaystyle\sum_{k}10^{-A_{k}/10}},
$$

其中 $T_{k}$ 是第 $k$ 级冷板的物理温度、$A_{k}$ 是它后面的总衰减量（dB）。要使 $T_{N}\!\lesssim\!100$ mK，最末一级通常需要 20 dB 以上的衰减。

### 滤波器传输特性

低通滤波器的标准双端口散射参数（[[circuit-qed/microwave-resonator|谐振腔]]常用同套描述）记为

$$
S_{21}(\omega)=S_{21}^{0}\prod_{p}\frac{1}{1+i\omega/\omega_{p}},
$$

其中 $\omega_{p}$ 是各阶极点频率；通过把所有 $S_{21}$ 串联并乘以各级衰减的 $10^{-A_{k}/20}$，可估算有效带宽内的总噪声透射。文献 9实测得到，PT2 + MC 两级 20 dB 衰减加 500 MHz 低通可整体衰减 60 dB（PDF p. 66）。

### HEMT 与低温放大器的噪声指标

低温放大器放在 MC 冷板或 4 K 冷板，**紧贴**量子点以缩短信号在低温衰减器中的传输路径。商用 HEMT（LNF-LNC4_8C 等）的关键指标包括：

- 频段：4–8 GHz（用于 transmon 读出）；
- 增益：约 40 dB（典型平坦值）；
- 噪声温度 $T_{\text{amp}}^{\text{noise}}\!\approx\!2.1\ \text{K}$（4 K 端测得），相对量子极限 $T_{\text{QNL}}=hf/k_{B}\!\sim\!0.5$–$1$ K 仍偏高。

对半导体量子点，2 K 量级等效输入噪声已经接近高频电子学噪声地板，是 charge sensor 单发读出（SNR$\!\approx\!3$）的关键限制之一。在 transmon 读出链路中，为进一步压低噪声，在 HEMT 与量子芯片之间通常再插入**约瑟夫森参量放大器**（J-Amp，含 J-TWPA、J-IMPA 等），其增益可达 20–30 dB、噪声温度低至 300–600 mK，文献 9实测最低 800 mK（PDF p. 98）。

### cryo-CMOS：把控制电子放进制冷机

当比特数扩展到 100 个以上时，每个比特独立引出几十根偏置线将撞上 Rent 规则的引脚墙。**cryo-CMOS** 指在 4 K 或更低温度下仍能正常工作的标准 CMOS 集成电路，承担直流偏置产生、波形整形与读出解调。在 4 K 冷板上，单比特操控保真度可达到 99%，并且整芯片可同时驱动多个比特，因此被国际多个小组列为多比特扩展的关键路径（PDF p. 118）。当前主流架构把 cryo-CMOS 放在 4 K 冷板或 PT2 stage（典型 3 K），把传统 HEMT 推后或干脆省掉；CMOS 在 4 K 下的 $f_T$ 比室温下降约 30%–50%，但仍远高于比特操控时钟。

### 半导体量子点端的特殊考量

相比 transmon，半导体量子点的链路上还有两点不同：

- **极低电流信号**：SET/单空穴晶体管（single-hole transistor, SHT）输出电流在 pA–nA 量级，需要 SR570/SR560 等电流-电压放大器先做 $10^{7}$–$10^{8}$ V/A 量级的跨阻放大，再进入高速 ADC。低频直流读出链路工作带宽约 10 kHz–3 kHz，对应 5 MSa/s 量级采样。
- **射频反射读出**：若采用 RF-SET 或谐振反射式读出，则工作频段从 DC 提到 MHz–GHz 量级，对应阻抗匹配、$S_{21}$ 凹陷深度与带宽都成为主要约束——本节不展开，详见[[readout-measurement/rf-reflectometry|射频反射读出]]。

<!-- FIGURE: 跨温区衰减+滤波+放大链路侧视图：左室温 AWG/微波源，中部标 PT2/MC 级衰减/RC/铜粉滤波/HEMT，右接量子点 -->

## 双链路案例：triton-300 改装实例

文献 2（2014）改装 Oxford Triton-300 的实践给出了半导体量子点实验一个完整链路模板。该链路按"热沉 → 铜粉滤波器 → PCB 板载滤波器"三级级联（PDF pp. 44–46）：

1. **热沉**：测量与控制线为 Lakeshore SS1 微型同轴线（不锈钢内外导体，FEP 介质，截面积约 49 mm²），在 PT1/PT2/Still/100 mK/MC 五级冷板上用镀金多层夹板"三明治"热沉固定，热交换路径长度的延长使 100 根以上 SS1 线同时放入时 MC 端温度漂移不超过 5 mK。
2. **铜粉滤波器**：50 μm 直径青铜粉与环氧树脂混合填充 25-pin D 型接头外壳，把 25 路直流信号在 GHz 频段同时滤波，结构紧凑到可以放在 MC 冷板上、紧贴样品；替代了传统放在室温的体积过大的铜粉盒。
3. **PCB 板载滤波器**：板载 DC–300 MHz RC 贴片滤波器 + DC–1 GHz 铁氧体磁珠低通滤波器，覆盖铜粉滤波器失效的 1 GHz 以下频段，同时承担 ESD 防护（防止装样过程中静电击穿栅极）。

热沉 - 铜粉 - PCB 三级叠加的效果：文献 2实测把源漏偏置噪声压到 500 fA 以下。

## transmon 案例：Triton 400 改造

文献 9（2018）对 Oxford Triton 400 的改造展示了超导比特链路的当代实践（PDF pp. 65–67）：

- **Z-control（flux offset）**：PT2 层加 1.5 kΩ RC 滤波器抑制 2 MHz–2 GHz；MC 层加自制铜粉滤波器 + 1.9 MHz 低通，整体对 ≥2.2 MHz 实现 >60 dB 衰减。
- **Z-control（flux pulse）**：PT2 + MC 两级各加 20 dB 衰减器，MC 后再加 500 MHz 低通抑制高阶杂散。
- **XY-control 与 readout in**：不施加滤波器（信号与噪声同频段），PT2 加 20 dB 衰减，readout in 通道 MC 再加 50 dB，总衰减 70 dB；XY-control 仅在 MC 加 20 dB，最后统一再加 DC–12 GHz 低通抑制毫米波。
- **readout out**：MC 端经 3 个环形器（一个端口留给 J-Amp）后接 HEMT（LNF-LNC4_8C，4–8 GHz，40 dB 增益，$T_{\text{noise}}\!\approx\!2.1$ K）；HEMT 输出端口加 3 dB 衰减器缓解阻抗失配引起的脉冲变形，再传回室温。

## 半导体量子点案例：Triton-500 Si-MOS 链路

文献 22（2025）使用 Triton-500 + Cooner AS636-1SS 同轴线（PDF pp. 64–65）：

- 直流线在每一级冷板用热沉绕线固定，线与线之间是独立同轴屏蔽，串扰远低于双绞线；寄生电容结合大电阻本身具有低通滤波效果，故 MC 层不另加滤波器。
- 高频线使用 UT-85 半钢线 + SMA 头（最大有效频率 26.5 GHz），4 K 加 6 dB、MC 加 10 dB 衰减；如需更高频段可换 K2.92 头。
- readout 链路室温用 Stanford SIM-928 + 1000:1 分压器作 SET 偏置，DLPCA-200 转阻放大器输出电压信号，再经二级 JFET 放大（SIM-910）放大 100 倍，最后 Bessel 滤波以保持相位延迟不变性，由 Alazar ATS9440 高速采集卡以 100 kSa/s 采样。

## 关键物理量与量级

| 量 | 典型值 | 备注 / 出处 |
| --- | --- | --- |
| 稀释制冷机 MC 端温度 | $\approx 10$–$20\ \mathrm{mK}$ | 文献 2（PDF p. 42） |
| Triton-400 PT2 stage 温度 | $\approx 3\ \mathrm{K}$ | 文献 9（PDF p. 65） |
| 4 K 冷板噪声温度贡献 | $T_{4\text{K}}\!\approx\!2.1\ \mathrm{K}$（HEMT LNF-LNC4_8C） | 文献 9（PDF p. 67） |
| 铜粉滤波器填充介质 | 直径 50 μm 青铜粉 + 环氧树脂 | 文献 2（PDF p. 45） |
| PCB 板载 RC 滤波器 | DC–300 MHz | 文献 2（PDF p. 46） |
| 板载铁氧体磁珠滤波器 | DC–1 GHz | 文献 2（PDF p. 46） |
| readout in 总衰减（transmon） | 70 dB（PT2 20 + MC 50） | 文献 9（PDF p. 67） |
| XY-control 总衰减（transmon） | 40 dB（PT2 20 + MC 20） | 文献 9（PDF p. 67） |
| flux pulse 衰减 | $20\text{dB}+20\text{dB}$ | 文献 9（PDF p. 66） |
| flux offset 总滤波 | RC（2 MHz–2 GHz）+ 铜粉 + 1.9 MHz 低通 = $>60$ dB at $\ge 2.2$ MHz | 文献 9（PDF p. 66） |
| Lakeshore SS1 线截面积 | 49 mm² | 文献 2（PDF p. 46） |
| 100 根 SS1 线引入 MC 端温漂 | $\le 5\ \mathrm{mK}$ | 文献 2（PDF p. 46） |
| 改装 Triton-300 源漏噪声 | $<500\ \mathrm{fA}$ | 文献 2（PDF p. 46） |
| Si-MOS 直流线寄生滤波截止 | ~1.9 MHz（min-circuits BLP-1.9+） | 文献 22（PDF p. 65） |
| Si-MOS 高频线衰减分布 | 4 K 6 dB + MC 10 dB | 文献 22（PDF p. 64） |
| 4 K cryo-CMOS 单比特操控保真度 | 99% | 文献 15 综述引文（PDF p. 118） |
| HEMT 增益（4–8 GHz） | $\approx 40\ \mathrm{dB}$ | 文献 9（PDF p. 67）/ 文献 17（PDF p. 117） |
| HEMT 噪声温度 | $\approx 2.1\ \mathrm{K}$ | 文献 9（PDF p. 67） |
| J-TWPA 增益带宽（1.2 GHz 3 dB） | 5 dB 峰值增益 | 文献 9（PDF p. 98） |
| J-IMPA 饱和功率 | $\sim\!-120\ \mathrm{dBm}$ | 文献 9（PDF p. 98） |
| 微波源脉冲调制开关比 | 40 dB → 120 dB（启用 PM） | 文献 22（PDF p. 63） |
| bias-tee K251 频段 | RF 1 MHz–40 GHz / DC DC–20 kHz | 文献 22（PDF p. 65） |
| 锁相放大器 SR830 激励幅值 | $\sim 1\ \mathrm{mV}$（柱塞栅） | 文献 25（PDF p. 69） |
| SR570/SR560 低通截止 | 10 kHz / 3 kHz | 文献 25（PDF p. 73） |
| ADC 采样率（量子点电荷读出） | $5\ \mathrm{MSa/s}$ | 文献 25（PDF p. 74） |
| RF-SET 谐振频率 | 160.1 MHz | 文献 22（PDF p. 129） |
| RF-SET $S_{21}$ 凹陷峰谷差 | 30 dB | 文献 22（PDF p. 129） |
| RF-SET RTS 频率 | 145.7 kHz | 文献 22（PDF p. 129） |

## 实验特征

- **链路分级不能倒置**：文献 9指出，把所有衰减器都集中放在 MC 层理论上能更好地抑制上级噪声，但会让 MC 层总功耗超过冷头制冷功率，反而推高样品温度；正确做法是按 PT2/MC 两级分摊。同一链路对 Z-control（窄带、低噪声敏感）必须用 RC + 铜粉 + 低通级联，而 XY-control 与 readout in（信号与噪声同频段）只允许衰减、不允许滤波。
- **阻抗失配决定 HEMT 实际增益**：HEMT 输出端反射回来的信号会带回 2.1 K 的噪声，并对量子比特产生扰动；解决方法是 HEMT 后加 3 dB 衰减器并使用 3 个环形器级联把反射信号导入 50 Ω 接地端口。
- **bonding 线自感是关键瓶颈**：文献 9指出，每根 1 mm 左右的 wire-bonding 线约 1 nH 自感，会引起驻波与信号泄露；立体封装（弹簧针 + 铜腔）把驻波模式挤压到 20 GHz 以上。
- **铜粉滤波器位置是工程关键**：传统体积过大无法放入制冷机底部，必须用绕线柱间共用滤波铜粉 + SMA → 25-pin D 型接头的方案把体积压到 MC 端可放；这是把滤波效果从"室温"挪到"芯片附近"的代表性改动。
- **大电流偏置带来的离子注入区加热**：Petta 组在 SiGe 体系上利用 HEMT 放大器 + RF-SET 读出把 CZ 门保真度显著提高，验证了 cryo-LNA 对双比特门的实际增益（文献 22 综述引文）。
- **JTWPA 等放大器自身有噪声反射**：因此不能直接放在量子芯片后级，必须用环形器把放大器反射的噪声导入 50 Ω 端口——这是 transmon 链路"3 个环形器 + 1 个 HEMT + 1 个 J-Amp"布局的物理依据。

## 与其他概念的关系

- [[scaling-automation/automatic-tuning|自动调控]]把所有电压配置视作"在 cryo-electronics 的能力范围内做闭环寻优"；cryo-CMOS 实时产生 + 自动调控实时更新是闭环自动化的两条互补路径。
- [[scaling-automation/virtual-gates|虚拟电极]]与[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]关注的是同一根栅极在 cryo-electronics 的有限动态范围（典型 ±10 V、14-bit）下的电压精度分配；cryo-CMOS 可在 4 K 端做实时电压补偿，是虚拟电极的硬件实现。
- [[readout-measurement/single-shot-readout|单发读出]]的信噪比直接受 cryo-LNA 噪声温度与带宽限制：HEMT 噪声温度 2 K 对应电荷传感器的本底噪声下限，再低就需要 cryo-CMOS 或 J-Amp。
- [[readout-measurement/rf-reflectometry|射频反射读出]]把链路上限从 kHz 提到 100 MHz 以上，对应 cryo-electronics 切换到匹配网络 + 高频衰减 + cryo-LNA 的配置。
- [[readout-measurement/parametric-amplifier|参量放大器]]（J-Amp/J-TWPA）是 cryo-electronics 在量子比特读出端的近量子极限放大，与本节 HEMT 形成代次互补。
- [[circuit-qed/purcell-filter|Purcell filter]]把"读出链路对 qubit 退相干的影响"用 $Q_p$ 与 $\omega_p$ 解析地纳入链路设计，是 cryo-electronics 在 readout 端的设计参数。
- [[materials-devices/charge-noise|电荷噪声]]是 cryo-electronics 必须抑制的扰动源；文献 2指出同轴线 + 热沉方案能直接降低离子注入区因加热产生的额外电荷跳变。
- [[qubit-control/geometric-quantum-gate|几何量子门]]的噪声鲁棒性取决于 cryo-electronics 对共振频率噪声的注入量；文献 25 中"几何门对比传统动力学门在 1 K 噪声下表现更稳"的几何增益，部分来自 cryo-electronics 决定的噪声谱形。

## 延伸阅读

- X. Xue, B. Patra, J. P. G. van Dijk, et al., "CMOS-based cryogenic control of silicon quantum circuits", *Nature* (2021). [DOI: 10.1038/s41586-021-03469-4]
- S. J. Pauka, K. Das, R. Kalra, et al., "A cryogenic CMOS chip for generating control signals for multiple qubits", *Nature Electronics* (2021). [DOI: 10.1038/s41928-020-00528-y]
- B. Patra, J. P. G. van Dijk, S. Subramanian, et al., "A scalable cryo-CMOS controller for the wideband frequency-multiplexed control of spin and superconducting qubits", *Nature Electronics* (2024). [DOI: 10.1038/s41928-024-01139-5]
- L. A. Tracy, D. R. Luhman, et al., "Sub-mW Cryogenic InP HEMT LNA for Qubit Readout", *IEEE TMTT* (2024). [DOI: 10.1109/TMTT.2023.3312471]
- J. M. Hornibrook, J. I. Colless, I. D. Conway Lamb, et al., "Cryogenic radio-frequency readout of semiconductor quantum dots: Instrumentation and methods", *Review of Scientific Instruments* (2014). [DOI: 10.1063/1.4901343]

## 论文依据

- [[sources/ref-02|文献 2]]，PDF p. 42（2.6 章开头）：实现 mK 量级极低温环境——Triton-300 稀释制冷机；He-3/He-4 稀释原理；五级冷板 70 K/4.2 K/800 mK/100 mK/10–20 mK 结构。
- [[sources/ref-02|文献 2]]，PDF p. 42：无液氦 Triton-300 结构，使用多级脉冲管制冷机代替液氦预冷；4.2 K、800 mK、100 mK、10–20 mK 冷板。
- [[sources/ref-02|文献 2]]，PDF pp. 43–44（2.7 章开头）：改装实例面对的两个基本问题——样品环境温度/热噪声与电路噪声；典型 24 引线样品。
- [[sources/ref-02|文献 2]]，PDF pp. 44–46：热沉部分——Lakeshore SS1 五层夹板式热沉 + PT1/PT2/Still/100 mK/MC 五级分布；线夹式热沉。
- [[sources/ref-02|文献 2]]，PDF p. 45：铜粉滤波器——50 μm 青铜粉 + 环氧树脂 + 25-pin D 型接头，体积可压入 MC 冷板。
- [[sources/ref-02|文献 2]]，PDF p. 46：PCB 板载滤波器——DC–300 MHz RC 贴片 + DC–1 GHz 铁氧体磁珠，覆盖铜粉滤波器失效的 1 GHz 以下频段；Lakeshore SS1 截面积 49 mm²；100 根线 MC 端温漂不超过 5 mK。
- [[sources/ref-02|文献 2]]，PDF p. 46：三级级联后源漏噪声 <500 fA；与传统漆包线/铜粉盒方案对比。
- [[sources/ref-25|文献 25]]，PDF p. 68（3.2.2 节开头）：稀释制冷机测量——基底温度约 15 mK；SHT 用于电荷探测。
- [[sources/ref-25|文献 25]]，PDF pp. 68–69（3.2.2.1 节）：电荷探测实验——SHT 工作于库仑峰侧峰，电流阶跃反映空穴数变化。
- [[sources/ref-25|文献 25]]，PDF p. 69（3.2.2.1 图 3.11c）：调制测量电路——SR830 + 40 dB 衰减 + 1000:1 分压 + 信号叠加器；典型 1 mV 交流调制。
- [[sources/ref-25|文献 25]]，PDF p. 70（3.2.2.1 末）：直流电荷探测——SR570 + SR560 + Agilent 34410 + ATS9440；调制 vs 直流的分工。
- [[sources/ref-25|文献 25]]，PDF p. 72（3.3.1 节开头）：测量仪器分室温/4 K/15 mK 三层；覆盖 DC 与微波信号传输。
- [[sources/ref-25|文献 25]]，PDF p. 73：AWG M8190（125 MSa/s）+ AWG5208（2 GSa/s）+ E8267D PSG；SR570/SR560 分别配 10 kHz/3 kHz 低通；ATS9440 高速采集卡。
- [[sources/ref-25|文献 25]]，PDF p. 74：5 MSa/s 采样率，量化时间窗口与时间分辨率。
- [[sources/ref-25|文献 25]]，PDF p. 74：测量线路——IQ 调制校准、波形对准补偿 60 μs 通道延迟。
- [[sources/ref-09|文献 9]]，PDF pp. 65–67（3.2.1 节）：Triton 400 低温线路改造方案——PT2/MC 两级衰减/滤波分布；Z-control 60 dB 滤波、XY-control 40 dB 衰减、readout out 链路 HEMT + 3 个环形器。
- [[sources/ref-09|文献 9]]，PDF p. 67：HEMT 选型——LNF-LNC4_8C，4–8 GHz，40 dB 增益，2.1 K 噪声温度；HEMT 输出端口 3 dB 衰减 + 环形器隔离。
- [[sources/ref-09|文献 9]]，PDF pp. 66–67：readout in 加 50 dB 衰减（PT2 20 + MC 50），XY-control 仅 MC 20 dB，统一加 DC–12 GHz 低通抑制毫米波。
- [[sources/ref-09|文献 9]]，PDF pp. 75–77（3.3.2 节）：线路衰减器的施加与计算——所有衰减器堆在 MC 层反而抬高温度，应在 PT2/MC 两级分摊。
- [[sources/ref-09|文献 9]]，PDF pp. 85–86（3.5.1 节）：J-TWPA 设计——200 个基本单元、含 12 个结 + 3 个电容；4–8 GHz >10 dB 平坦增益、6 GHz 中心 1 GHz 3 dB 带宽、峰值 20 dB。
- [[sources/ref-09|文献 9]]，PDF pp. 98–99（3.5.4 节）：J-IMPA 在 flux-pump 模式下 1.2 GHz 3 dB 带宽、29 dB 最大增益；噪声温度低至 800 mK。
- [[sources/ref-17|文献 17]]，PDF p. 117：低温放大器型号 LNF-LNC4_8C（4–8 GHz、40 dB）；室温放大器 LNF-LNR4_8C；矢量网络分析仪 TD3619C 100 kHz–8.5 GHz；锁相 SR830、AWG M8195A 65 GSa/s、微波源 EXG 9 kHz–13 GHz。
- [[sources/ref-17|文献 17]]，PDF p. 116：直流电压 1:5 分压 + 滤波器；4 K 端 RC 滤波器；锁相激励 1:1000 分压 + 低通 → 20–50 μV 加到源极；微波信号 VNA → 30 dB 衰减 + DC 滤波器 → 各级衰减 + 环形器 → 谐振腔 → 反射 → HEMT + 两级室温放大。
- [[sources/ref-22|文献 22]]，PDF p. 64：Triton-500 + Cooner AS636-1SS 同轴直流线（每层热沉绕线）+ UT-85 半钢高频线（4 K 6 dB + MC 10 dB 衰减）。
- [[sources/ref-22|文献 22]]，PDF p. 65：1.9 MHz BLP-1.9+ 低通；Anritsu K-251 bias-tee（RF 1 MHz–40 GHz / DC DC–20 kHz）；Tek AWG5204 5 MSa/s；SIM-928 + DLPCA-200 + SIM-910 JFET；Alazar ATS9440 100 kSa/s。
- [[sources/ref-22|文献 22]]，PDF p. 64：IQ 混频与脉冲调制开关比从 40 dB 提升到 120 dB。
- [[sources/ref-22|文献 22]]，PDF p. 125（6.3.2 节）：Si-MOS RF-SET 结构设计——劈裂栅极使 $C_g$ 从泄漏通道变为耦合通道。
- [[sources/ref-22|文献 22]]，PDF p. 129（6.4.1 节）：RF-SET 实测——160.1 MHz 谐振、$S_{21}$ 凹陷峰谷差 30 dB、9 MSa/s 采样 + 140 ns 积分 SNR 5.72、读出保真度 99.86%、RTS 频率 145.7 kHz、2 MHz 带宽内无衰减。
- [[sources/ref-15|文献 15]]，PDF p. 118（6.2.2 节）：低温控制电路综述——1000 个比特需超过 3000 接口，4 K cryo-CMOS 集成控制电路已成为主流路径；引用 [15]–[18]（Xue 2021、Pauka 2021、Petit 2020、Yang 2020）的 99% 单比特保真度。