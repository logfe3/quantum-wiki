---
title: 常相互作用模型
description: 用固定总电容和单粒子能级近似描述量子点逐个加电子的基础模型。
aliases:
 - 恒定相互作用模型
 - CI 模型
 - constant interaction model
tags:
 - 量子点基础
 - 模型
date: 2026-09-08
source: QAtlas
qatlas_id: qa_01m235n0a732fmef1ya3jgzb1x
source_updated: 2026-09-09T14:01:19Z
---

<div class="entry-lead">常相互作用模型把复杂电子–电子相互作用压缩成一个经典充电项，再叠加离散单粒子能级，是解释库仑阻塞和电荷稳定图的最小模型。</div>

## 基本假设

常相互作用模型（constant interaction model, CI 模型）是描述[[fundamentals/semiconductor-quantum-dot|半导体量子点]]静电学最常用的理论框架。它把一个包含几个到几百个电子、同时与源漏电子库和多根栅电极耦合的复杂多体系统简化为一个经典电容网络加一组刚性能级，基于两条假设：

1. 量子点内电子之间、以及点内电子与周围环境中电子的库仑相互作用，全部用一个不随电子数变化的恒定总电容描述：

```math
C_\Sigma = C_S + C_D + C_G
```

即量子点与源极（source）、漏极（drain）、栅极（gate）之间的电容之和；
2. 量子点的单粒子能谱 $E_n$（可含磁场依赖）由束缚势决定，与点内电子数目无关，电子只是逐个填充这些刚性能级。

第一条假设把量子多体相互作用完全经典化——所有交换、关联效应都被吸收进 $C_\Sigma$；第二条假设则保留了量子点的"原子性"来源：分立的轨道能级。两者结合，使系统总能量写成一个静电充电项与 occupied 能级之和，这就是全部理论结构。

<!-- FIGURE: 单量子点的常相互作用模型等效电路图：量子点经隧穿结（电阻并联电容 CS、CD）连接源、漏，经电容 CG 连接栅极 -->

## 单量子点：静电能与电化学势

漏极接地、源极偏压 $V_{SD}$、栅压 $V_G$ 时，含 $N$ 个电子的量子点总能量为

$$
U(N)=\frac{\left[-e(N-N_0)+C_S V_{SD}+C_G V_G\right]^2}{2C_\Sigma}+\sum_{n=1}^{N}E_n(B)
$$

其中 $N_0$ 是所有电极电压为零时补偿背景正电荷的电子数，$C_S V_{SD}$、$C_G V_G$ 分别是源极偏压与栅压经各自电容感应到点内的电荷。第一项是纯粹的经典静电能 $Q^2/(2C_\Sigma)$，第二项是已占据单粒子能级之和。

**推导梗概（电容矩阵方法）**：把量子点与各电极看作导体节点系统，节点电荷与电势由电容矩阵联系 $\vec{Q}=C\vec{V}$，系统总静电能为 $U=\frac{1}{2}\vec{Q}^{\mathrm{T}}C^{-1}\vec{Q}$。将矩阵按"量子点"与"电极"分块后，能量拆成三项：点内项、点–电极相互作用项、纯电极项。关键在于，当点内电荷改变 $\delta Q$ 时电极上会感应电荷，为维持电极电势不变电源必须做功，且该功恰好等于相互作用项的变化（$W=\delta U_2$），因此可归入量子点自由能的只剩点内项 $U_1=\frac{1}{2}\vec{V}_c^{\mathrm{T}}C_{cc}\vec{V}_c$。对单点取 $C_{cc}=C_\Sigma$ 即得上式的二次型。这一推导说明 $Q^2/2C_\Sigma$ 并非单纯的几何电容储能，而是计入了电源做功的热力学自由能。

向点中填入第 $N$ 个电子所需的最小能量即[[fundamentals/electrochemical-potential|电化学势]]（electrochemical potential）：

$$
\mu(N)=U(N)-U(N-1)=\left(N-N_0-\frac{1}{2}\right)E_C-\frac{E_C}{e}\left(C_S V_{SD}+C_G V_G\right)+E_N
$$

其中 $E_C=e^2/C_\Sigma$ 为[[fundamentals/charging-energy|充电能]]（charging energy）。相邻电化学势之差给出加电子能（addition energy）：

$$
E_\mathrm{add}=\mu(N+1)-\mu(N)=E_C+\Delta E
$$

$\Delta E=E_{N+1}-E_N$ 是相邻单粒子能级间隔。对百纳米量级量子点 $E_C\gg\Delta E$，加电子能近似恒定，$\mu(N)$ 等间距排列——这是库仑振荡近似等周期的根源。

由 $\mu(N)$ 对 $V_G$ 的线性依赖可直接读出杠杆臂（lever arm）的微观定义 $\alpha=C_G/C_\Sigma$；令相邻电荷态简并 $\mu(N+1;V_G)=\mu(N;V_G+\Delta V_G)$，得库仑峰的栅压周期

$$
\Delta V_G=\frac{e}{C_G}\left(1+\frac{\Delta E}{E_C}\right)\approx\frac{e}{C_G}
$$

即峰周期直接度量栅电容；多电子区 $\Delta E\ll E_C$ 时各电子充电能几乎相等（$\Delta\mu_N=\Delta\mu_{N-1}$），峰严格等间距出现。

## 双量子点推广与蜂窝图

常相互作用模型可以原样推广到[[fundamentals/double-quantum-dot|双量子点]]。以串联双点为例：点 1、点 2 分别经电容 $C_{g1}$、$C_{g2}$ 与栅极耦合，经 $C_L$、$C_R$ 与源漏耦合，两点之间经互电容 $C_m$ 静电耦合；各点总电容 $C_{1(2)}=C_{L(R)}+C_{g1(2)}+C_m$。系统静电能为

$$
U(N_1,N_2)=\frac{1}{2}N_1^2 E_{C1}+\frac{1}{2}N_2^2 E_{C2}+N_1 N_2 E_{Cm}+f(V_{g1},V_{g2})
$$

其中 $f$ 汇总栅压诱导项，三个特征能量为

$$
E_{C1(2)}=\frac{e^2}{C_{1(2)}}\,\frac{1}{1-\dfrac{C_m^2}{C_1 C_2}}
\qquad
E_{Cm}=\frac{e^2}{C_m}\,\frac{1}{\dfrac{C_1 C_2}{C_m^2}-1}.
$$

$E_{Cm}$ 是一点中电子数变化引起另一点电化学势的移动量，即点间静电耦合能。两个极限很有启发性：$C_m\to 0$ 时 $U$ 退化为两个独立单点能量之和；$C_m/C_{1(2)}\to 1$ 时 $U$ 化为 $\left[-(N_1+N_2)e+C_{g1}V_{g1}+C_{g2}V_{g2}\right]^2/2(C_1+C_2)$，强耦合双点在静电上等效于一个含 $N_1+N_2$ 个电子的大单点。

双点的电化学势

$$
\mu_1(N_1,N_2)=\left(N_1-\frac{1}{2}\right)E_{C1}+N_2 E_{Cm}-\frac{1}{e}\left(C_{g1}V_{g1}E_{C1}+C_{g2}V_{g2}E_{Cm}\right)
$$

（$\mu_2$ 由交换指标得到）对两个栅压均线性，因此固定电子数 $(N_1,N_2)$ 的区域在 $V_{g1}$–$V_{g2}$ 平面上是由直线围成的多边形。随 $C_m$ 从零增大，稳定图从正交直线的方格连续变形为六边形蜂窝结构——蜂窝图（honeycomb diagram），即双点[[fundamentals/charge-stability-diagram|电荷稳定图]]的标准形态；强耦合极限下蜂窝塌陷回单点的平行直线族。蜂窝顶点处 $\mu_S=\mu_1=\mu_2=\mu_D$ 四重简并，称为三相点（triple point），是双点输运与[[qubit-control/charge-qubit|电荷量子比特]]操控的工作点。

由简并条件可直接读出蜂窝图的边距：

$$
\Delta V_{g1(2)}=\frac{e}{C_{g1(2)}},\qquad
\Delta V_{g1(2)}^{m}=\frac{e\,C_m}{C_{g1(2)}\,C_{2(1)}}
$$

前者是单点充电对应的栅压周期，后者是邻近点加一个电子引起的电荷转变线平移，二者之比直接给出耦合强度 $C_m/C_{2(1)}$。计入量子能级修正后，$\Delta V_{g}$ 应替换为 $\frac{e}{C_g}\left(1+\frac{\Delta E}{E_C}\right)$ 的形式。

<!-- FIGURE: 双量子点蜂窝图随互电容增大从方格到六边形再到平行直线的演化，标注三相点与 ΔVg、ΔVgm -->

## 参数与量级

| 量 | 典型量级 | 说明 |
| --- | --- | --- |
| 总电容 $C_\Sigma$ | $\sim 10$–$100\ \mathrm{aF}$ | 百纳米门控量子点；浅刻蚀 GaAs 单点实测 $113\ \mathrm{aF}$ |
| 充电能 $E_C=e^2/C_\Sigma$ | $\sim 1\ \mathrm{meV}$ | 同器件实测 $1.5\ \mathrm{meV}$，对应 $E_C/k_\mathrm{B}\approx 17\ \mathrm{K}$ |
| 单粒子能级间隔 $\Delta E$ | $\sim 0.01$–$0.1\ \mathrm{meV}$ | 多电子区 $\Delta E\ll E_C$，加电子能以充电项为主 |
| 库仑峰栅压周期 $\Delta V_G$ | $\sim 1$–$10\ \mathrm{mV}$ | $\Delta V_G\approx e/C_G$，反比于栅电容 |
| 杠杆臂 $\alpha=C_G/C_\Sigma$ | $\sim 0.01$–$0.1$ | 栅压到点内电化学势的能量转换系数 |
| 点间耦合能 $E_{Cm}$ | $E_{Cm}\lesssim 0.3\,E_C$ | 由蜂窝图 $\Delta V_g^m/\Delta V_g$ 提取 |

可观测前提与[[fundamentals/coulomb-blockade|库仑阻塞]]相同：$E_C\gg k_\mathrm{B}T$ 且点–库接触电导 $G\ll 2e^2/h$，否则热激活与量子涨落抹平离散充电。

## 实验特征与参数提取

常相互作用模型的价值在于它把每一种标准测量图样都变成参数提取器：

- **库仑振荡**：零偏压栅压扫描中，$\mu(N)$ 依次掠过源漏费米面（$\mu_S=\mu(N)=\mu_D$）产生等周期电流峰；峰间距乘杠杆臂即加电子能，逐个排空电子可标定绝对电子数；
- **库仑菱形**：$V_G$–$V_{SD}$ 平面的微分电导图中，阻塞区展开为[[fundamentals/coulomb-diamond|库仑菱形]]，菱形半高给 $E_C$、宽度给 $C_G$、两边斜率给杠杆臂，菱形外的平行电导线给激发态间隔 $\Delta E$；
- **蜂窝图**：双点两个栅压扫描中，蜂窝边距之比给 $C_m/C$，三相点间距给各点充电能，是双点器件标定的第一步。

这些提取结果正是后续所有量子比特实验的标定基础：确定电子数、换算栅压–能量、评估点间耦合，然后才谈得上[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]或[[readout-measurement/rf-reflectometry|射频反射测量]]下的电荷态读出与操控。

## 适用范围与局限

CI 模型是纯经典静电模型，其失效场景同样有明确的诊断特征：

- **隧穿耦合导致的反交叉**：在三相点附近，点间[[fundamentals/tunnel-coupling|隧穿耦合]] $t_C$ 使 $(N_1,N_2)$ 与 $(N_1-1,N_2+1)$ 态杂化，电荷转变线发生弯曲、张开 $2t_C$ 的能隙。CI 模型不含任何隧穿矩阵元，无法解释这种弯曲——蜂窝图中直线的弯曲程度恰恰是提取 $t_C$ 的手段（ 明确指出这一局限）；
- **强关联与自旋效应**：模型不含自旋，无法描述交换作用、[[qubit-control/singlet-triplet-qubit|单重态–三重态]]劈裂、近藤效应等，需要加入自旋与关联项；
- **开放量子点与高温**：$G\sim 2e^2/h$ 或 $k_\mathrm{B}T\gtrsim E_C$ 时电荷量子化本身失效。

系统的量子化推广是 Hubbard 模型（或扩展 Fermi-Hubbard 模型）：

$$
H=-\sum_i\mu_i n_i+\sum_i\frac{U_i}{2}n_i(n_i-1)+\sum_{i\neq j}U_{ij}n_i n_j+H_t+H_J
$$

其中前三项——化学势、点内库仑排斥 $U_i$、点间排斥 $U_{ij}$——正对应 CI 模型的 $\mu(N)$、$E_C$ 与 $E_{Cm}$；CI 模型相当于丢掉隧穿项 $H_t$ 与交换项 $H_J$ 的经典极限。反过来，Hubbard 模型的参数 $U_i$、$U_{ij}$ 通常就用 CI 模型从蜂窝图标定。在多量子点阵列中，栅极–量子点交叉电容使 $\mu_i$ 同时依赖所有栅压，电荷转变线不再是直线簇，需要[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]与[[scaling-automation/virtual-gates|虚拟栅极]]技术补偿，这仍是 CI 模型框架下的直接延伸。

### 经典统计检验：峰间距分布 vs Wigner 猜想（Simmel 1999）

CI 模型还有一个可被统计检验的推论：把单粒子能级 $\epsilon_i$ 视为无相互作用的随机谱，CI+随机矩阵理论（RMT）预言库仑振荡的**归一化峰间距** $S$（$\langle S\rangle=1$）服从 Wigner 猜想

$$
P_W(S)=\frac{\pi}{2}\,S\,e^{-\frac{\pi}{4}S^2},
$$

其涨落约 $0.52\langle S\rangle$；若能级有自旋简并，分布还应是双峰。Simmel 等人在硅 MOSFET 叠层栅量子点上做了强相互作用区间的检验——器件约 200×200 nm，$C_\Sigma\approx85$ aF、$E_C\approx1.9$ meV；Weyl 公式 $\Delta\epsilon=2\pi\hbar^2/(gm^*A)=15\ \mu$eV（$g=4$ 计入自旋与谷简并）给出 $E_C/\Delta\epsilon\approx125$、相互作用参数 $r_s=2.1$，均远超此前 GaAs/AlGaAs 实验（$r_s\approx1$）。关键的方法学差异是用**顶栅扫描改变密度**而非用 plunger 栅挤压器件——峰间距统计不被器件形变污染。

![[assets/figures/constant-interaction-model/simmel1999-fig1a-device-cross-section.jpg]]
*器件截面（叠层栅 Si MOSFET 量子点）：p 型 Si 衬底上依次为约 20 nm 下氧化层、下栅层、约 80 nm 上氧化层与覆盖全部源漏的上栅；上栅电压感生 Si/SiO₂ 界面处的二维电子气，下栅图形在其中凿出约 250×270 nm 的量子点——上栅扫密度、下栅控势垒，使峰间距统计免于器件形变干扰（320 mK 测量）。图源：Simmel et al. (1999), Fig. 1。*

结果：峰间距分布**单峰、近高斯**，既不遵从 Wigner 猜想、也没有自旋简并双峰；归一化涨落 $\sigma_\mathrm{rms}\approx0.06$，对应约 115 µeV——是平均能级间距 $\Delta\epsilon$ 的 7.5 倍、CI+RMT 预言的 **15 倍**（考虑 $k_BT\approx\Delta\epsilon$ 的热展宽修正后为 30–45 倍）。由于 $E_C/\Delta\epsilon\approx125$，涨落幅度 $\approx0.06\,E_C$ 强烈指向**加电子能的涨落随 $E_C$ 而非 $\Delta\epsilon$ 标度**——电子–电子相互作用（充电能本身的涨落）主导了统计，CI+RMT 组合在此区间失效；自旋简并的双峰结构也被 $r_s>1$ 的相互作用冲掉。这一"峰间距统计"自此成为检验 CI 模型适用边界的标准实验范式。


## 与其他概念的关系

- 模型的两条假设直接定义了[[fundamentals/charging-energy|充电能]] $E_C=e^2/C_\Sigma$ 与[[fundamentals/electrochemical-potential|电化学势]] $\mu(N)$，二者是本模型的核心输出；
- $\mu(N)$ 是否落入偏压窗口决定[[fundamentals/coulomb-blockade|库仑阻塞]]的发生与否，阻塞区在有限偏压下展开为[[fundamentals/coulomb-diamond|库仑菱形]]；
- 双点版本给出[[fundamentals/charge-stability-diagram|电荷稳定图]]蜂窝结构的全部几何，三相点是[[qubit-control/charge-qubit|电荷量子比特]]与[[qubit-control/singlet-triplet-qubit|单重态–三重态量子比特]]的操控基点；
- 模型不含[[fundamentals/tunnel-coupling|隧穿耦合]]，三相点附近的反交叉弯曲正是超出本模型的信号，用于提取 $t_C$；
- 阵列化时，交叉电容串扰由[[scaling-automation/virtual-gates|虚拟栅极]]在本模型框架内补偿，支撑[[scaling-automation/automatic-tuning|自动调控]]。


## 参考文献

- 常相互作用模型及其在输运实验中的验证：[[references/vanderwiel-2002|van der Wiel et al., RMP 74, 801 (2002)]]。
- Simmel, F., Abusch-Magder, D., Wharam, D. A., Kastner, M. A., Kotthaus, J. P. Statistics of the Coulomb blockade peak spacings of a silicon quantum dot (1999). arXiv:cond-mat/9901274（QAtlas 缓存：cond-mat_9901274）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
