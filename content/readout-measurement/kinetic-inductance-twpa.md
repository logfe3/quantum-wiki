---
title: 动力学电感行波参量放大器
description: 用高动力学电感超导薄膜（NbTiN 等）传输线的电流依赖电感做四波/三波混频的行波参量放大器——无约瑟夫森结工艺、动态范围高、带宽数 GHz、附加噪声接近量子极限。
aliases:
 - KI-TWPA
 - KIT
 - 动力学电感行波放大器
 - kinetic inductance TWPA
 - KTWPA
tags:
 - 读出与测量
 - 微波
 - 参量放大
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvhtrrac86y94aqp51zthr
source_updated: 2026-09-09T14:50:41Z
---

<div class="entry-lead">把非线性从"结"摊到"膜"上：动力学电感行波参量放大器（KI-TWPA）不用约瑟夫森结，而是利用 NbTiN 等超导薄膜的动力学电感随电流平方变化的弱非线性，让强泵浦与微弱信号在数厘米长的传输线上同行混频。换来的是结工艺免修、动态范围比 JPA/JTWPA 高一个量级、对磁场与高温更宽容，以及接近量子极限的附加噪声——代价是要精心的色散工程来维持相位匹配。</div>

## 器件族定位：为什么不用约瑟夫森结

[[readout-measurement/parametric-amplifier|参量放大器]]家族里，谐振式的[[readout-measurement/parametric-amplifier|JPA]]带宽窄、动态范围低；[[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器（JTWPA）]]把带宽推到数 GHz，但每个单元的约瑟夫森结仍是加工瓶颈，动态范围与磁场兼容性也受限。KI-TWPA 换一条路：**非线性来自超导薄膜本身的动力学电感** $L_k(I)\approx L_{k,0}\left[1+(I/I_*)^2\right]$（$I_*$ 是薄膜的特征电流），没有结、没有临界电流散斑，单片工艺即可，且天然耐受中等磁场与 4 K 温区。历史上它的短板是泵浦功率高（输入端 >−30 dBm）与外围元件庞杂——薄膜减薄到 10 nm 后泵浦需求已降一个量级（约 −45 dBm），外围集成化则见下文 ORCK。

## 四波混频器件物理（Faramarzi 2024）

### 短截线加载与色散工程

放大介质是 NbTiN 微带传输线，每隔 2.2 µm 并联一段平均长 10.8 µm、宽 340 nm 的容性短截线，用周期性加载把单位长度电感/电容比（即阻抗与色散）设计到目标值。关键一步是**对短截线长度再做周期调制**（周期 122.7 µm）：这在布里渊区边界产生一个约 12.5 GHz 的"人工带隙"，把传播常数 $k(\omega)$ 的线性色散打断——泵浦频率（10.6 GHz）被放在带隙边缘附近，利用带隙附近的强色散抵消非线性自相位调制，维持宽带相位匹配。

![[assets/figures/kinetic-inductance-twpa/faramarzi2024-fig1-stub-line-phasematching.jpg]]

*短截线加载线与相位匹配设计：(a) 传输线 SEM 图——容性短截线宽 340 nm、间距 2.2 µm、平均长 10.8 µm；(b) 传播常数 k 减去线性部分——短截线长度的周期调制（周期 122.7 µm）在 ~12.5 GHz 产生人工带隙，红箭头为泵浦音调相对带隙的位置；(c) 相位匹配失配量 Δβ₋ 随频率的变化，红线为泵浦自相位调制项，紫线为线性色散贡献，最大增益出现在外侧交点附近。图源：Faramarzi et al. (2024), Fig. 1。*

### 相位匹配判据

四波混频（4WM）中，信号、闲频与泵浦三个行波的相位匹配条件是

$$
\Delta\beta \equiv \kappa_s + \kappa_i - 2\kappa_p = -\,\kappa_p\,\frac{I_p^2}{4I_*^2},
$$

其中 $\kappa_s$、$\kappa_i$、$\kappa_p$ 分别是信号、闲频、泵浦的波矢；等号右边是泵浦的自相位调制项——泵浦电流 $I_p$ 流过动力学电感时非线性地改变自身相位速度，$I_*$ 是薄膜特征电流（实测 3.2 mA）。失配 $\Delta\beta\neq0$ 时增益按相位失配振荡、无法累计；设计目标就是让线性色散项（左边的 $\kappa_s+\kappa_i-2\kappa_p$）在信号带内正好等于负的自相位调制项。实测工作点 $I_p/I_*\approx0.12$（泵浦功率 −20.5±1.5 dBm，对应 $I_p\approx421\ \mu$A），模拟（含 $2\omega_p+\omega_s$、$3\omega_p$、$4\omega_p-\omega_s$ 等高阶混频产物）与实测增益曲线形状和幅度吻合。

### 增益谱结构与可调性

![[assets/figures/kinetic-inductance-twpa/faramarzi2024-fig2-gain-bands.jpg]]

*1 K 下的实测增益：(a) 泵浦 10.6 GHz 经室温定向耦合器注入——增益分布在三个频带，~12.5 GHz 的间隙来自周期调制的人工带隙，虚线为模拟增益曲线；(b) 不同泵浦频率下信号带位置显著移动——带宽与峰值增益可由泵频调谐。图源：Faramarzi et al. (2024), Fig. 2。*

增益占据**分离的信号带（4–8 GHz，总覆盖 3–9 GHz）与高频闲频带**，闲频（镜像）音不落在信号带内——这与三波混频（3WM）器件形成关键对比：3WM 需要直流偏置，且泵浦位于增益带中心频率的两倍、闲频关于 $f_{pump}/2$ 对称折叠回信号带，密集频分复用读出时镜像碰撞直接影响产额。4WM 免直流偏置、信号带完整无镜像污染，且**信号带位置随泵浦频率可调**——这正是暗物质扫描等需要移动探测频段的应用所要的性质；闲频带还携带信号的冗余副本，可用作双频段工作的频率转换模式。

## 噪声与动态范围

![[assets/figures/kinetic-inductance-twpa/faramarzi2024-fig4-noise-yfactor.jpg]]

*Y 因子噪声测量：(a) 热（3.18 K）/冷（~20 mK）50 Ω 负载经低温继电器切换作为噪声源，双工器在增益谱上下间隙注入并分离泵浦与闲频；(b) 级联噪声模型；(c) 4.6–8 GHz 的系统噪声与 KI-TWPA 附加噪声（量子数单位），虚线为标准量子极限。图源：Faramarzi et al. (2024), Fig. 4。*

用热/冷负载 Y 因子法测量：4.6–8 GHz 内**系统噪声 1–3 个量子、放大器附加噪声 $0.5\le N_A\le1.5$ 量子**——触及标准量子极限（SQL = 0.5 量子）附近。提取附加噪声时需按级联模型扣除前后级损耗 $L_1$、$L_2$、HEMT 附加噪声（实测 ~5 K ≈ 13 量子）与增益 $G_{PA}$ 的贡献；噪声曲线上的纹波反映失配与未计入损耗的不确定度。动态范围方面：15 dB 增益下 **1 dB 压缩点在输入 −58 dBm**——比典型 JPA 高出一个量级以上，正是多谐振腔阵列读出最需要的性质。

## 片上集成化：ORCK（Howe 2025）

传统 KI-TWPA 的实际痛点不在芯片而在外围：偏置 tee、定向耦合器、双工器等厘米级商品元件既占制冷机容积、又贡献可超 1 dB 的插入损耗，直接恶化系统噪声。**ORCK**（on-chip rf component KIT）首次把运行必需的全部射频元件微加工到放大器芯片上：两个 bias tee（蝶形交叠电容 + α-Si 介质构成隔直，曲折 NbTiN 构成直流支路）和一个 Podell wiggly 定向耦合器（耦合度 ~−20 dB @ 10–20 GHz），配合经电磁仿真优化的 SMA 引脚直接键合封装，消除中间 PCB 与阻抗突变。

![[assets/figures/kinetic-inductance-twpa/howe2025-fig1-orck-package.jpg]]

*ORCK 集成封装：(a) 传统 KIT 安装（中）需要成对双工器（蓝）与偏置 tee（银） vs. ORCK 包装（下）——不需要任何外部射频元件；(b) 键合封装的 ORCK，SMA 引脚经仿真优化后直接键合；(c) 10 mm × 10 mm 芯片上的 ORCK 特写——~8 cm 放大介质（短截线加载倒置微带）盘成中央双螺旋。图源：Howe et al. (2025), Fig. 1。*

放大介质本身是 1 µm 宽、10 nm 厚 NbTiN 倒置微带，用**阶梯式色散工程**维持宽带相位匹配：30 个未加载单元（$Z_0$ 目标 50 Ω）+ 4 个加载单元（80 Ω）构成一个超胞，1200 个超胞盘成双螺旋。整体安装足迹缩小约 5 倍。

### 真增益 vs. on/off 增益

ORCK 工作同时澄清了一个广泛适用的测量学陷阱：常报的 **on/off 增益**（泵浦开/关的 $|S_{21}|$ 之比）会高估放大器的真实贡献，因为关态传输本身含内损耗。**真增益**为

$$
\tilde{G}_1 = G_1\,\eta_{1-2},
$$

其中 $G_1$ 是 on/off 增益、$\eta_{1-2}$ 是放大器内部（关态）传输效率。对多数 TWPA（约瑟夫森式与动力学电感式皆然）这一差别不可忽略——ORCK 实测 on/off 与真增益之差**最大达 15 dB**。

![[assets/figures/kinetic-inductance-twpa/howe2025-fig5-true-vs-onoff-gain.jpg]]

*50 mK 下 ORCK 的增益与内损耗：(a) on/off 增益与真增益并列——两者差最高 15 dB；(b) 经线损校准的器件传输——增益曲线上的深凹陷源自片上 bias tee 直流支路的谐振（对比含/不含 bias tee 的 6 端口与 4 端口版本可定位来源）。图源：Howe et al. (2025), Fig. 5。*

### 系统噪声与参考面

噪声标定用散粒噪声隧道结（SNTJ）作已知白噪声源，按含级联效率 $\eta_k$、信号–闲频增益不对称性与超噪 $N_{\mathrm{ex},1}$ 的级联模型拟合。高增益、低 HEMT 噪声极限下系统噪声归结为

$$
N_{\mathrm{sys}} = N_{\mathrm{ex},1} + 0.5,
$$

即量子极限（0.5 量子，来自闲频模式的真空占据经增益不对称性混入信号输出）加上器件超噪。ORCK 的关键优势在于**参考面前移**：偏置与耦合元件已在芯片上，噪声参考面直接落在 ORCK 封装输入端（≈被测器件输出端），不再隔着有耗外部元件链。

![[assets/figures/kinetic-inductance-twpa/howe2025-fig6-system-noise.jpg]]

*以 ORCK 为首级放大器的系统噪声：对 SNTJ 输入噪声的线性拟合提取超噪，3 dB 带宽内中位系统噪声 <3.5 量子，参考面在 ORCK 输入端。图源：Howe et al. (2025), Fig. 6。*

实测 ORCK：**2.8 GHz 3 dB 带宽、中位真增益 17.5 dB、3 dB 带宽内中位系统噪声 3.4 量子**（参考面在封装输入端）——与当代 JTWPA 相当或更优，且免除外围元件后某些配置可再降约 2 个量子。增益曲线上的凹陷源自 bias tee 直流支路谐振，后续可用滤波综合或去 Q 设计消除。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 信号带 | 4–8 GHz（总覆盖 3–9 GHz），闲频带分离无镜像污染 | Faramarzi 2024 |
| 最大增益 | >20 dB（4WM） | Faramarzi 2024 |
| 1 dB 压缩点 | 输入 −58 dBm @ 15 dB 增益 | Faramarzi 2024 |
| 附加噪声 | 0.5–1.5 量子（4.6–8 GHz，Y 因子法） | Faramarzi 2024 |
| 泵浦 | 10.6 GHz、−20.5±1.5 dBm，$I_p/I_*=0.119$，$I_*=3.2$ mA | Faramarzi 2024 |
| 人工带隙 | ~12.5 GHz（短截线长度调制周期 122.7 µm） | Faramarzi 2024 |
| 10 nm 薄膜泵浦需求 | ~−45 dBm（较 20 nm 膜降一个量级） | Howe 2025 |
| ORCK 集成 | 2×bias tee + 定向耦合器（−20 dB @ 10–20 GHz）全片上，足迹 ×1/5 | Howe 2025 |
| ORCK 性能 | 2.8 GHz 3 dB 带宽，中位真增益 17.5 dB，系统噪声 3.4 量子 | Howe 2025 |
| on/off vs 真增益 | 差最高 15 dB（$\tilde G_1=G_1\eta_{1-2}$） | Howe 2025 |
| HEMT 第二级 | ~5 K ≈ 13 量子（4–8 GHz） | Faramarzi 2024 |

## 与其他概念的关系

- [[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]：同属行波参量放大，非线性源不同（结 vs 薄膜动力学电感）；KI-TWPA 动态范围与磁场/温度宽容度更高，JTWPA 泵浦效率与相位匹配旋钮更丰富——约瑟夫森侧的最新 CP-JTWPA 也借用周期调制 + 窗函数包络做相位匹配（与 KI-TWPA 的短截线调制同源），并以开路短截线电容实现 <1 dB 插损；
- [[readout-measurement/parametric-amplifier|参量放大器]]：家族总纲——JPA 谐振窄带、TWPA 行波宽带，本词条是 TWPA 的薄膜电感分支；
- [[readout-measurement/amplifier-saturation-power|参量放大器饱和功率]]：KI-TWPA 的 −58 dBm 压缩点是高动态范围读出（多谐振腔阵列）的关键资源；
- [[readout-measurement/dispersive-readout|色散读出]]与[[readout-measurement/rf-reflectometry|射频反射测量]]：量子极限首级放大器是这两类测量的灵敏度天花板所在；
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]：共用"高动力学电感超导薄膜"材料工艺（NbTiN）；
- [[scaling-automation/cryo-electronics|低温电子学]]：ORCK 式片上集成直接削减制冷机内元件数与布线复杂度。

## 参考文献

- Faramarzi, F., Stephenson, R., Sypkens, S., Eom, B. H., LeDuc, H., Day, P. A 4-8 GHz Kinetic Inductance Travelling-Wave Parametric Amplifier Using Four-Wave Mixing with Near Quantum-Limit Noise Performance (2024). DOI: 10.1063/5.0208110；arXiv:2402.11751（QAtlas 缓存：2402.11751）。
- Howe, L., Giachero, A., Vissers, M., Wheeler, J., Austermann, J., Hubmayr, J., Ullom, J. Compact Superconducting Kinetic Inductance Traveling Wave Parametric Amplifiers with On-chip rf Components (2025). DOI: 10.1109/TASC.2025.3553466；arXiv:2503.03608（QAtlas 缓存：2503.03608）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
