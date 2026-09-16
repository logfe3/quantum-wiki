---
title: 电荷噪声
description: 来自陷阱、杂质、界面与电路漂移的随机电势涨落，会扰动量子点失谐和比特频率。
aliases:
 - 电势噪声
 - 1/f噪声
 - 低频电荷噪声
 - 能量涨落
tags:
 - 材料与器件
 - 噪声
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m237r743za0t0gb7j8hxgxxq
source_updated: 2026-09-09T15:54:21Z
---

<div class="entry-lead">电荷噪声是量子点实验里最"会变形"的噪声：它既能移动电荷跃迁线，也能通过电荷混合、交换作用或自旋轨道耦合转化为比特相位噪声。</div>

## 物理图像与定义

电荷噪声（charge noise）指器件中随机涨落的电势 $\delta V(t)$ 作用在量子点上，使点内[[fundamentals/electrochemical-potential|电化学势]]、双点失谐（detuning）以及由此派生的一切比特参数发生随时间的漂移。它不是某一种具体的微观机制，而是"所有把随机电场送到量子点位置上的过程"的统称。

工程上更方便的做法是把它折算成**能量涨落** $\Delta\varepsilon$：栅极电压涨落 $\Delta V$ 经杠杆臂（lever arm）$\alpha$ 转换为点内能量涨落

$$
\Delta\varepsilon=\alpha\,\Delta V .
$$

之所以要折算，是因为不同器件的隧穿率、$\alpha$ 各不相同，只有能量涨落才是可以横向比较的"器件噪声性能"指标。掺杂 GaAs 门控量子点上实测的典型值是数 $\mu\mathrm{eV}$，工艺优化后可压到亚 $\mu\mathrm{eV}$。

电荷噪声的关键特征是**低频主导**：其涨落的特征时间尺度在毫秒量级，功率谱密度在实验可及的频段近似正比于 $1/f$。这决定了它的两个实验后果——单次测量之间的稳定图会跳变、工作点会漂移；以及自由感应衰减（[[qubit-control/ramsey-interferometry|Ramsey]]）比自旋回波衰减得快得多。

<!-- FIGURE: 同一库仑峰在数小时内的重复扫描叠加图，展示峰位随时间的随机漂移与跳变 -->

## 微观起源

学界至今没有完全确定 $1/f$ 噪声的起源，但普遍认为其主要来源是**随机电荷涨落**：某个局域能级俘获或释放一个载流子，产生一次电势阶跃；大量具有不同特征时间的这类过程叠加，谱形自然趋近 $1/f$。在门控量子点中，被反复确认的具体通道有：

- **肖特基栅极到二维电子气的漏电流**。掺杂 GaAs 器件中，栅极电压涨落驱动电子从肖特基电极经掺杂层漏向[[fundamentals/two-dimensional-carrier-gas|二维电子气]]，被认为是纳米器件噪声的主要来源之一。相应的抑制思路也很直接：移除栅极下方的二维电子气（浅刻蚀），或干脆移除掺杂层（非掺杂异质结 + 顶栅积累）。
- **掺杂层中电离施主的电荷涨落**。这是[[materials-devices/gaas-algaas|GaAs/AlGaAs]] 调制掺杂结构的固有代价，也是转向非掺杂结构的主要动机。
- **半导体–介质界面的[[materials-devices/interface-defects|界面缺陷]]**。氧化层中的悬挂键在量子尺度上可视为一个二能级系统（two-level system, TLS）。这些 TLS 既向耦合系统贡献电荷噪声、限制比特相干，又能与[[circuit-qed/microwave-resonator|微波谐振腔]]交换能量、压低品质因子。同一批缺陷还通过"表面隧穿–俘获"过程屏蔽栅压，造成阈值电压漂移与工作电流衰减，使工作点校准变得困难。
- **栅氧厚度与工艺**。过厚的氧化铝会显著增加电荷噪声，因此栅氧厚度需要在绝缘可靠性与噪声之间折中——Si/SiGe 重叠栅器件中通常控制在 $7\ \mathrm{nm}$ 左右。

材料平台的差异主要体现在界面质量上：[[materials-devices/silicon-mos|Si-MOS]] 的电子被限制在 Si–SiO$_2$ 界面，界面质量低于外延结构，均匀性有限、电荷噪声更大；[[materials-devices/silicon-sige|Si/SiGe]] 与[[materials-devices/strained-germanium|应变锗]]的外延界面则把载流子推离表面缺陷，噪声环境相对干净。

## 噪声谱：1/f 模型

把栅极 $G_i$ 上的电压噪声写成自相关函数的傅里叶变换

$$
S_{G_i}(f)=\int_{-\infty}^{+\infty}dt\;e^{-2\pi i f t}\
\left\langle \delta V_{G_i}(t)\,\delta V_{G_i}(0)\right\rangle
$$

实验上常用的两种参数化形式为

$$
S_q(\omega)=\frac{2\pi A_q}{|\omega|}
\qquad
S(f)=S_{\mathrm{hf}}\left(\frac{f_0}{f}\right)^{\alpha}
$$

前者中 $A_q$ 是失谐参数 $q$ 的噪声在 $1\ \mathrm{Hz}$ 处的功率，后者把谱指数 $\alpha$ 留作可拟合量、$f_0$ 为参考频率。理想 $1/f$ 对应 $\alpha=1$；实测值通常略小于 1（例如平面锗空穴器件上拟合得到 $\alpha\approx0.907$），仍属于典型的 $1/f$ 型电荷噪声。CPMG 噪声谱学在 SiMOS 量子点上直接测得 2–20 kHz 段 $\alpha=-0.8\sim-1$ 的近 1/f 电荷噪声（白噪声底 350 rad²/s@>20 kHz），并把 3.6 kHz 尖峰溯源到直流电压源——见[[qubit-control/dynamical-decoupling|动力学解耦]]词条"实验落地"一节。

$\alpha$ 不能直接测量，但可以从回波衰减的形状反推。Hahn 回波幅度随等待时间的衰减写成

$$
\exp\left[-\left(\frac{\tau_{\mathrm{idle}}}{T_2^{\mathrm{Echo}}}\right)^{\beta}\right]
$$

拟合出的指数 $\beta$ 与谱指数满足 $\alpha=\beta-1$。这条关系把"波形长什么样"和"噪声谱多陡"直接联系起来，是仅凭比特实验就能读出噪声谱形的实用技巧。

## Si/SiGe 的系统测量：温度与栅氧厚度依赖

Connors 等人对重叠栅 Si/SiGe 量子点做了系统的噪声谱测量：在库仑峰两侧采集电流噪声功率谱，用幂律加洛伦兹项

$$
S_\varepsilon(f)=\frac{A}{f^{\beta}}+\frac{B}{f^2/f_0^2+1}
$$

拟合（$A$、$B$、$\beta$、$f_0$ 为拟合参数），在 1 Hz 处读出噪声幅值 $S_\varepsilon^{1/2}(1\,\mathrm{Hz})$ 与谱指数 $\gamma=-\partial\ln S_\varepsilon/\partial\ln f|_{1\,\mathrm{Hz}}$。三块器件的 Al₂O₃ 栅氧厚度分别为 0/15/46 nm，基温下的失谐噪声为 $0.84\pm0.04$、$0.93\pm0.18$、$1.77\pm0.09\ \mu\mathrm{eV}/\sqrt{\mathrm{Hz}}$——**噪声随栅氧厚度单调上升**，高温端尤其明显，因为更厚的氧化层把更多 TLS 缺陷放进栅–量子点电容的敏感区。

温度扫描（50 mK–1 K，细至 2–10 mK 步进）给出更细的结构：平均而言噪声近似 $1/f$（$\gamma\approx1$）、幅值随温度近似线性增长；但**点间差异强烈**——单个量子点的 $S_\varepsilon(T)$ 与 $\gamma(T)$ 显著偏离平均行为，甚至同一量子点在输运峰两侧测得的温度依赖都不同。

![[assets/figures/charge-noise/connors2019-fig2-noise-spectrum.jpg]]
*噪声谱测量：库仑峰两侧的电流噪声功率谱密度经杠杆臂换算为失谐噪声谱 $S_\varepsilon(f)$，幂律 + 洛伦兹项拟合（式见正文）在 1 Hz 处读出噪声幅值与谱指数 γ。图源：Connors et al. (2019), Fig. 2。*

![[assets/figures/charge-noise/connors2019-fig3-temperature-dependence.jpg]]
*电荷噪声的温度依赖（50 mK–1 K）：三块不同栅氧厚度（0/15/46 nm）器件的平均 $S_\varepsilon(1\,\mathrm{Hz})$ 随温度上升，且噪声随栅氧厚度单调增大（高温端尤甚）；γ 的分布（色带为 ±1 标准差）围绕 1 但点间弥散显著。图源：Connors et al. (2019), Fig. 3。*

**Dutta–Horn 模型**解释这种偏离：单个 TLS 的谱是洛伦兹型

$$
s_\varepsilon(f,T)=\frac{\tau_0 e^{E/k_BT}}{4\pi^2f^2\tau_0^2e^{2E/k_BT}+1}
$$

其中 $E$ 是激活能、$\tau_0$ 是特征尝试时间（切换时间 $\tau=\tau_0 e^{E/k_BT}$ 热激活）。频率远低于 $1/2\pi\tau$ 时白噪声且随温度指数下降，远高于时为 $f^{-2}$ 且随温度指数上升。总谱是所有 TLS 对激活能分布 $D(E)$ 的积分；McWhorter 的均匀分布给出严格 $1/f$ 与线性温度依赖，而 Dutta–Horn 允许 $D(E)$ 非均匀：

$$
S_\varepsilon(f,T)\propto D(\tilde{E})\,k_BT,\qquad \tilde{E}=-k_BT\ln(2\pi f\tau_0)
$$

它同时预言 $\gamma\neq1$ 与非线性温度依赖互为因果——观测到其中一个即说明 $D(E)$ 非常数。Si/SiGe 数据对两者都观测到了，且 D-H 模型用 $\gamma(T)$ 反推的 $S_\varepsilon(T)$ 与实测吻合良好。结论：每个量子点感受到**自己的 TLS 系综**（激活能分布各不相同、非均匀），点间差异由此而来——电荷噪声至少部分来自半导体表面附近非均匀分布的二能级系统。

![[assets/figures/charge-noise/connors2019-fig4-dutta-horn.jpg]]
*单点偏离与 Dutta–Horn 拟合：单个量子点的 $S_\varepsilon(1\,\mathrm{Hz})$ 温度依赖（上排，同一量子点在输运峰左/右侧不同）显著非线性，γ(T)（下排）偏离 1；黑线为 D-H 模型用 γ(T) 数据反推的 $S_\varepsilon$ 与用 $S_\varepsilon$ 反推的 γ——非均匀 TLS 分布同时解释两种偏离。图源：Connors et al. (2019), Fig. 4。*

## 界面缺陷运动的微观模型：从位移到自旋劈裂噪声（Nowak 2023）

把 1/f 电荷噪声一路追到微观源头：半导体–氧化物界面（距量子点 $z_0=102\ \mathrm{nm}$ 的平面）上的局域电荷在两个位置间随机切换（TLF），每次位移 $\delta\mathbf r$ 拖动量子点的波函数、再经**纵向磁场梯度** $\Delta B_\parallel$ 转化为 Zeeman 劈裂涨落——这就是同位素纯化 Si/SiGe 中自旋退相干的微观链条。单个缺陷对自旋劈裂的扰动 $\delta\Omega(\mathbf r)$ 有限元计算给出两个关键不对称性：**$z$ 向位移比面内位移有效约一个量级**（电荷与其金属镜像构成的偶极矩在 $z$ 向运动时变化最快），面内则沿梯度方向（$x$）的导数约为 $y$ 向的两倍。

![[assets/figures/charge-noise/nowak2023-fig1-defect-spin-splitting-model.jpg]]

*微观模型：界面处（z₀=102 nm）的一个电荷缺陷随机位移 δr 拖动量子点波函数，经纵向磁场梯度 ΔB∥ 转化为自旋劈裂的改变 δΩ(x,y,z₀)——单缺陷扰动的空间结构与梯度（决定位移方向的有效性）由有限元计算给出。图源：Nowak et al. (2023), Fig. 1。*

多缺陷贡献近似可加（两电荷交叉验证误差 $\ll0.1$ neV），总噪声谱为各 TLF 洛伦兹谱之和。以实验观测的噪声幅度为锚点（$\sigma_\mathrm{spin}=1$ neV 对应 $T_2^{*}=1\ \mu s$；0.05–0.1 neV 对应 $T_2^{*}\approx20\ \mu s$，$\Delta B_\parallel=0.2\ \mathrm{mT/nm}$），对比两种位移模型：**各向同性**（三维高斯位移）噪声偏大、难以同时覆盖两个实验端点；**面内受限**（planar，位移限制在界面平面内）幅度约低 2 倍，在 $\rho\le10^{10}\ \mathrm{cm^{-2}}$、$\delta r\le0.5\ \mathrm{nm}$ 的合理参数区即可覆盖全部实验值，标度律为

$$
\langle\sigma_\mathrm{spin}^{(xy)}\rangle \approx \left[0.91\left(\frac{\rho}{10^{10}\,\mathrm{cm}^{-2}}\right)^{0.54}+0.030\right]\frac{\delta r}{\mathrm{nm}}\ \mathrm{neV}
\qquad
\left(\text{各向同性版系数 } 2.1\right)
$$

其中 $\rho$ 是界面缺陷面密度、$\delta r$ 是单次位移的 rms。两模型可由**跨器件 $T_2^{*}$ 统计的方差**区分（planar 模型方差更大）——$T_2^{*}$ 的器件间离散本身就是模型判别数据。

**关联诊断预言**：同一批缺陷既驱动自旋劈裂噪声（经梯度通道）也驱动轨道/基态能量噪声（经直接库仑通道）——缺陷密度 $10^{10}\ \mathrm{cm^{-2}}$ 时两类噪声之间应出现**可见关联**。同时测自旋劈裂噪声与轨道能量噪声（如 [[qubit-control/spin-decoherence|自旋退相干]]谱与电荷传感谱）并检验其关联，由此成为界面缺陷的直接探针。

![[assets/figures/charge-noise/nowak2023-fig4-correlation-prediction.jpg]]

*关联预言：单个缺陷对自旋（ζ）与轨道（基态能量）两个通道的耦合乘积的空间分布——缺陷位于两通道耦合乘积大的位置时，两类噪声显著关联；缺陷密度 10¹⁰ cm⁻² 下该关联应可实测。图源：Nowak et al. (2023), Fig. 4。*

## 噪声如何进入比特：三类耦合通道

电荷噪声本身只涨落电势。它能否伤害比特，取决于比特频率对电势的**导数**有多大。

### 电荷比特：一阶失谐耦合

[[qubit-control/charge-qubit|电荷量子比特]]的最小模型是

$$
H=\frac{\varepsilon}{2}\sigma_z+t_c\sigma_x
\qquad
\hbar\omega_{01}=\sqrt{\varepsilon^{2}+4t_c^{2}}
$$

其中 $\varepsilon$ 是双点失谐、$t_c$ 是[[fundamentals/tunnel-coupling|隧穿耦合]]。比特频率对失谐的敏感度

$$
\frac{\partial \omega_{01}}{\partial\varepsilon}
=\frac{1}{\hbar}\frac{\varepsilon}{\sqrt{\varepsilon^{2}+4t_c^{2}}}
$$

在 $\varepsilon=0$ 处为零、在 $|\varepsilon|\gg t_c$ 处饱和到 $1/\hbar$。这就是电荷比特"在反交叉点最抗噪、远离对称点退相干最快"的定量来源，也解释了为什么电荷比特虽有最大的电偶极矩、最容易做到[[circuit-qed/charge-photon-coupling|电荷–光子]]强耦合，相干时间却最短。

上述失谐耦合描述的是**横向**噪声通道（驱动弛豫）；高频端弛豫的定量关系由约瑟夫森电荷比特的单发读出实验直接测定：若电荷噪声引起的能量涨落谱密度为 $S_U(\omega)$，弛豫率由 Fermi 黄金规则给出

$$
\Gamma_1=\frac{\pi S_U(\omega)}{2\hbar^2}\sin^2\theta,
$$

其中 $\sin^2\theta=E_J^2/(E_J^2+U^2)$ 表征比特经电荷自由度与噪声库的耦合强度。Astafiev 等人用它判定了主导弛豫机制：实测 $\Gamma_1$ 随 $E_J$ 呈清晰的 $E_J^2$ 依赖（$\Delta E/h\approx100$ GHz 处），说明弛豫是库珀对隧穿而非双准粒子序贯隧穿；在甜点处 $\Gamma_1=\pi S_U(\omega=E_J/h)/2\hbar^2$ 直接读出噪声谱的频率依赖——**高频段谱密度粗略正比于比特激发能**。这把电荷噪声的图景从低频 $1/f$（本词条主线）延伸到高频 Ohmic 型自发发射：同一个噪声库，低频端表现为退相位与图跳变，高频端表现为弛豫。

![[assets/figures/charge-noise/41672d79c69dc9b4cf91c27ebc4def22f77e5e22b2b7447137673432591a7f3e.jpg]]

*弛豫率与噪声谱的测量：(a) 器件示意图（SET 读出约瑟夫森电荷比特）；(b) 弛豫率 $\Gamma_1$ 的测量方案——SET 置于 JQP 峰（实心圆）与阻塞区（其他符号）的对比。图源：Astafiev et al. (2004)，Fig. 1。*

![[assets/figures/charge-noise/6905ffdeecdafe3fe2aa28aba97ccbe13a93a1d1a6b4f0f0049edc9cba2b02fd.jpg]]

*弛豫率随 $E_J$ 与失谐的依赖：(a) $\Gamma_1$ 在甜点（开三角）与 $\Delta E/h\approx100$ GHz（开圆）随 $E_J$ 的变化——甜点处直接给出 $S_U(\omega)$ 的频率依赖；远离甜点时 $\Gamma_1$ 随 $|\Delta E|$ 增大而下降、随 $E_J^2$ 增长，确认电荷涨落主导。图源：Astafiev et al. (2004)，Fig. 2。*

### 交换类比特：二阶展开与协方差

对[[qubit-control/resonant-exchange-qubit|共振交换比特]]这类由两个失谐参数 $(\varepsilon,\Delta)$ 共同控制的比特，需要把哈密顿量展开到二阶。设电荷噪声使两个失谐各自偏移 $\delta q$（$q=\varepsilon,\Delta$），均值为零、服从高斯分布，则

$$
\delta\omega_x=\frac{\partial\omega_{\mathrm{RX}}}{\partial\varepsilon}\delta\varepsilon
+\frac{\partial\omega_{\mathrm{RX}}}{\partial\Delta}\delta\Delta
+\frac{1}{2}\frac{\partial^{2}\omega_{\mathrm{RX}}}{\partial\varepsilon^{2}}\delta\varepsilon^{2}
+\frac{1}{2}\frac{\partial^{2}\omega_{\mathrm{RX}}}{\partial\Delta^{2}}\delta\Delta^{2}
+\frac{\partial^{2}\omega_{\mathrm{RX}}}{\partial\varepsilon\,\partial\Delta}\delta\varepsilon\,\delta\Delta+\cdots
$$

假设所有电荷涨落具有 $1/f$ 谱，只保留导致退相位的纵向项，退相位率的主项为

$$
\gamma_\phi=\frac{1}{2\pi\hbar}\left[\sum_{q=\varepsilon,\Delta}
\left(\frac{1}{4}\left(\frac{\partial\omega_{\mathrm{RX}}}{\partial q}\right)^{2}\mathrm{var}(q)
+\frac{1}{16}\left(\frac{\partial^{2}\omega_{\mathrm{RX}}}{\partial q^{2}}\right)^{2}\mathrm{var}(q)^{2}\right)
+\cdots\right]^{1/2}
$$

完整表达式还含 $\varepsilon$ 与 $\Delta$ 的交叉项，其权重由相关系数 $c=\mathrm{cov}(\varepsilon,\Delta)/(\sigma_\varepsilon\sigma_\Delta)$ 决定。这个形式的实用价值在于：当一阶导数被工作点设计压到零时，**二阶项和交叉项就成为剩余退相干的主导**，展宽随失谐的依赖曲线因此不是简单的 V 形，而是可以用上式整体拟合——拟合与实验数据吻合，即可判定电荷噪声是主导噪声源。

作为对照，同一体系中电子–声子相互作用引起的弛豫可用形变势哈密顿量与费米黄金定则估算：硅中声子贡献相对电荷噪声可忽略，而 GaAs 中电声相互作用占比相当大，不能忽略。

### 自旋比特：纵向自旋–电场敏感度

自旋本身不带电，电荷噪声必须"借道"才能影响它。借道方式有二：

1. **自旋轨道耦合 / $g$ 张量的电压依赖**。把空穴比特写成有效自旋 $1/2$ 系统

```math
H_s=\mathbf{S}\cdot\boldsymbol{\omega}_L(\mathbf{V}_G)
\qquad
\boldsymbol{\omega}_L(\mathbf{V}_G)=\frac{\mu_B}{\hbar}\,\mathsf{g}(\mathbf{V}_G)\cdot\mathbf{B}
```

$g$ 张量显含栅压，于是拉莫尔频率 $f_L=\frac{\mu_B}{h}\left|\mathsf{g}(\mathbf{V}_G^0)\cdot\mathbf{B}\right|$ 也随栅压变化。定义**纵向自旋–电场敏感度**（longitudinal spin–electric susceptibility, LSES）

$$
D_{G_i}=\frac{\partial f_L}{\partial V_{G_i}^{0}}
$$

它的大小直接反映比特对电荷噪声的敏感程度，实验上就是"比特频率随柱塞栅压的斜率"。

2. **[[materials-devices/micromagnet|微磁体]]纵向梯度场**。微磁体的杂散场与电驱动位移结合给出横向梯度 $b_{tr}=(\vec{e}_{MW}\cdot\nabla)B_{MM}^{\perp}$，驱动[[qubit-control/electric-dipole-spin-resonance|EDSR]]；而其纵向分量与涨落电场结合给出 $b_{long}=(\vec{e}_{noise}\cdot\nabla)B_{MM}^{/\!/}$，直接把电荷噪声转成频率噪声。二者的比值定义了品质因子

```math
Q=\frac{\mathrm{d}B_{tr}^{tot}/\mathrm{d}y}
{\sqrt{\left(\mathrm{d}B_{long}/\mathrm{d}x\right)^{2}+\left(\mathrm{d}B_{long}/\mathrm{d}y\right)^{2}}}
```

最大化 $Q$ 的面内磁场角并不沿磁体轴向，而是偏离一定角度。

在平面锗中，有效 $g$ 因子的各向异性源于重空穴–轻空穴（HH–LH）混合，而混合程度又由量子点的电势分布决定，因此 $g$ 与 LSES 都强烈依赖磁场取向。面内旋转磁场时

$$
g(\theta)=\sqrt{g_a^{2}\cos^{2}(\theta-\theta_0)+g_b^{2}\sin^{2}(\theta-\theta_0)}
$$

对应的自旋–电场敏感度解析近似为

$$
\frac{\partial g}{\partial V}=\frac{1}{g}
\left(g_x\frac{\partial g_x}{\partial V}\cos^{2}\theta
+g_y\frac{\partial g_y}{\partial V}\sin^{2}\theta\right).
$$

<!-- FIGURE: LSES 与 Hahn 回波相干时间随面内磁场角 θxy 的变化对照图，两条曲线呈镜像关系 -->

## 退相干的滤波函数理论

把上述"敏感度 × 噪声谱"整合成相干时间，需要滤波函数（filter function）形式。栅压噪声在自由演化中累积随机相位

$$
\delta\phi(t)=2\pi\int_{-\infty}^{+\infty}dt'\sum_i D_{G_i}\,\delta V_{G_i}(t')\,\eta_t(t')
$$

其中 $\eta_t(t')$ 描述脉冲序列的符号翻转。对含 $N_\pi$ 个 $\pi$ 脉冲的 CPMG 序列

$$
\eta_t^{\mathrm{CPMG}}(t')=\sum_{k=0}^{N_\pi}(-1)^{k}\
\Theta(t_{k+1}-t')\,\Theta(t'-t_k)
$$

$\Theta$ 为 Heaviside 阶跃函数，Hahn 回波对应 $N_\pi=1$。旋转坐标系中密度矩阵非对角元的衰减为

$$
\left\langle\tilde\rho_{01}(t)\right\rangle
=\tilde\rho_{01}(0)\,e^{-\frac{1}{2}\left\langle\delta\phi^{2}(t)\right\rangle}
\qquad
\left\langle\delta\phi^{2}(t)\right\rangle
=4\pi^{2}\int_{-\infty}^{+\infty}df\sum_i D_{G_i}^{2}\,S_{G_i}(f)\
\left|\tilde\eta_t(f)\right|^{2}
$$

即**退相干速率 = 噪声谱与滤波函数的重叠积分**。Ramsey 序列的滤波函数

$$
\left|\tilde\eta_t^{R}(f)\right|^{2}=\left(\frac{\sin(\pi f t)}{\pi f}\right)^{2}
$$

在 $f\to0$ 处不衰减，因此对低频分量全盘接收；对 $1/f$ 谱做积分会在低频端发散，须用实验时长与带宽设定截止 $f_l$、$f_h$，得到

$$
\frac{1}{T_2^{*}}\approx 2\pi\sqrt{\ln\!\left(\frac{f_h}{f_l}\right) f_0
\sum_i\left(\frac{\partial f_{Q}}{\partial V_{P_i}}\right)^{2}S_{P_i}^{\mathrm{lf}}} .
$$

$\pi$ 脉冲把滤波函数的低频响应压掉，回波时间因而由较高频段的噪声幅度决定；取 $\alpha=0.907$ 时

$$
\frac{1}{T_2^{\mathrm{Echo}}}\approx 7.6\,f_0^{1/\alpha}
\left(\sum_i\left(\frac{\partial f_{Q}}{\partial V_{P_i}}\right)^{2}S_{P_i}^{\mathrm{hf}}\right)^{0.695}.
$$

两式的对比解释了实验中反复出现的现象：$T_2^{*}$ 常常对工作点变化不敏感（被幅度很大的低频分量钉住），而 $T_2^{\mathrm{Echo}}$ 会随敏感度 $D_{G_i}$ 明显起伏。反过来，用不同 $N_\pi$ 的 CPMG 测一组 $T_2^{\mathrm{CPMG}}$，再配合长时间 Ramsey 频率监测，就能反演出跨越多个数量级的噪声谱——这是[[qubit-control/dynamical-decoupling|动力学解耦]]序列作为"噪声谱仪"的用法。

## 最优工作点

既然伤害正比于导数，压制电荷噪声的通用策略就是把工作点放在**导数为零**的位置，即最优工作点（sweet spot）。三个典型例子：

- **电荷比特的对称点** $\varepsilon=0$：$\partial\omega_{01}/\partial\varepsilon=0$，一阶失谐噪声被完全抑制，代价是失去了用失谐调频的手段。
- **交换门的对称操作点**。交换耦合与失谐 $\epsilon=\alpha(V_{P2}-V_{P1})$ 的关系为

```math
J=\frac{2tU}{U^{2}-\epsilon^{2}}
```

$t$ 为点间隧穿耦合、$U$ 为[[fundamentals/charging-energy|充电能]]。$J$ 在 $\epsilon=0$ 处取极小值、对 $\epsilon$ 一阶不敏感，因此实验上不再用失谐脉冲、而是用快速电压脉冲直接抬降点间势垒来开关 $J$，可有效抑制电荷噪声对 $J$ 的干扰。需要注意的是，正反脉冲会使两点电化学势非对称偏移，实测对称点常偏离失谐零点，需用 Hahn 回波型序列单独标定（引入[[scaling-automation/virtual-gates|虚拟栅极]]可缓解）。
- **空穴自旋比特的磁场取向甜点**。由于 LSES 随磁场角呈抛物线型变化，选择使 $|D_{G_i}|$ 最小的磁场方向即可显著抑制退相干。理论进一步指出，LSES 为零的方向在描述磁场取向的单位球面上不是孤立点，而是连成连续轨迹（"最优操控线"，sweet lines），且轨迹位置可由栅压调控——这为在多比特阵列中寻找**共同**最优磁场配置提供了可能。

代价是普遍存在的："操控速度–相干时间"权衡。强自旋轨道耦合是一把双刃剑：它带来超快全电学操控，也放大自旋–电场敏感度。实验上确实看到 $f_{\mathrm{Rabi}}$ 与 $T_2^{\mathrm{Echo}}$ 随磁场角呈相反趋势，使品质因子 $Q_E=2\,T_2^{\mathrm{Echo}}f_{\mathrm{Rabi}}$ 不再有单调规律。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 能量涨落 $\Delta\varepsilon$（传统掺杂 GaAs 单点） | $3.1\pm1.1\ \mu\mathrm{eV}$ | |
| 能量涨落 $\Delta\varepsilon$（浅刻蚀 GaAs 单点） | $0.50\pm0.23\ \mu\mathrm{eV}$ | |
| 能量涨落 $\Delta\varepsilon$（非掺杂 GaAs 单点） | $0.55$–$1.4\ \mu\mathrm{eV}$ | |
| 杠杆臂 $\alpha$（用于 $\Delta\varepsilon=\alpha\Delta V$） | $0.05$（浅刻蚀）/ $0.03\ \mathrm{meV/mV}$（传统） | |
| 噪声谱指数 $\alpha$ | $0.907$（由 $\beta=1.907\pm0.23$ 反推） | |
| 电荷涨落特征时间尺度 | 毫秒量级（低频主导） | |
| 比特频率抖动（55 h Ramsey 监测） | 近似高斯分布，$\sigma=0.794\ \mathrm{MHz}$ | |
| 内禀失谐噪声幅度 $\delta f_{\mathrm{Larmor}}$ | $\approx1.66\ \mathrm{MHz}$（由 $T_2^{*}$ 估算），拟合取 $1.80\ \mathrm{MHz}$ | |
| 平面锗空穴比特 $T_2^{*}$ | $169.9\ \mathrm{ns}$，随面内磁场角近似不变 | |
| 平面锗空穴比特 $T_2^{\mathrm{Echo}}$ | Q1 $500\to2200\ \mathrm{ns}$；Q2 $400\to800\ \mathrm{ns}$ | |
| 甜点处单比特门保真度增益 | $+2\%$，最高 $99.82\%$ | |
| RX 比特退相干率 $\gamma_{\mathrm{RX}}/2\pi$ | $16.9\ \mathrm{MHz}$ | |
| Si-MOS 微磁体器件 $T_2^{*}$ / $T_2^{\mathrm{echo}}$ | $624\ \mathrm{ns}$ / $60.2\ \mu\mathrm{s}$ | 楚宁 2025 |
| 电流噪声积分频段 | $1$–$9\ \mathrm{Hz}$（浅刻蚀）；$5$–$45\ \mathrm{Hz}$（非掺杂） | |
| 温度依赖 | $250\ \mathrm{mK}\to1\ \mathrm{K}$，峰顶电流涨落上升约 $20\%$ | |
| Si/SiGe 失谐噪声（基温，1 Hz） | 0.84 / 0.93 / 1.77 µeV/√Hz（栅氧 0 / 15 / 46 nm Al₂O₃） | Connors 2019 |
| Si/SiGe 噪声温度依赖 | 平均近似线性、随栅氧厚度单调上升（50 mK–1 K） | Connors 2019 |
| 自旋劈裂噪声锚点 | $\sigma_\mathrm{spin}=1$ neV（$T_2^{*}=1\ \mu s$）；0.05–0.1 neV（$T_2^{*}\approx20\ \mu s$），$\Delta B_\parallel=0.2$ mT/nm | Nowak 2023 |
| 界面缺陷模型参数 | planar 位移模型：$\rho\le10^{10}$ cm⁻²、$\delta r\le0.5$ nm 覆盖实验区间；$z$ 向位移比面内有效 ~10× | Nowak 2023 |

## 实验测量方法

### 输运法：库仑峰上的电流噪声

这是把电荷噪声折算成能量的经典方案，四个步骤：

1. **定标**。先测[[fundamentals/coulomb-diamond|库仑菱形]]提取杠杆臂 $\alpha$。
2. **测谱**。把量子点调到[[fundamentals/coulomb-blockade|库仑阻塞]]区（避开能量量子化的影响），源极加直流偏压（如 $200\ \mu\mathrm{V}$，用直流而非交流以排除激励信号干扰），漏极电流经前置放大器转成电压后送入频谱仪，得到电流噪声谱 $S_I(f)$。在库仑峰的峰底（阻塞区）、斜率最大处、峰顶三个位置分别取谱：峰底零电流处测到的实际上是隧穿几率涨落 $\Delta\Gamma$ 引起的噪声，可作为本底。
3. **积分**。对低频段积分得到电流涨落

```math
\Delta I=\sqrt{\int_{f_1}^{f_2}\left[S_I^{2}(f)-S_{BG}^{2}(f)\right]df}
```

$S_{BG}$ 为系统噪声本底。
4. **换算**。$\Delta V=\Delta I/\left|dI/dV\right|$，再乘 $\alpha$ 得 $\Delta\varepsilon$。

一个重要的自洽性判据：$\Delta I$ 沿库仑峰扫描应出现两个峰，与微分电导 $|dI/dV|$ 的两个峰一一对应，即电流噪声正比于微分电导——这说明噪声确实来自栅极电压涨落，而不是别的机制。峰顶附近 $|dI/dV|\to0$ 会让 $\Delta V$ 发散，这几个点必须舍弃。

<!-- FIGURE: 沿库仑峰的四联图：积分电流涨落 ΔI、库仑峰电流与 |dI/dV|、换算得到的 ΔV、以及能量涨落 Δε -->

### 比特谱学法

- **$T_2^{*}$ 与多脉冲解耦时间之比**。$T_2^{\mathrm{Echo}}/T_2^{*}$ 越大，说明噪声越集中在低频；配合 CPMG 阶数扫描可重构噪声谱。
- **回波衰减指数**。拟合 $\beta$ 得 $\alpha=\beta-1$，直接给出谱形。
- **长时间频率监测**。固定等待时间做 Ramsey，连续数十小时跟踪共振频率漂移，得到极低频端（$10^{-5}\ \mathrm{Hz}$ 量级）的谱点。
- **LSES 扫描**。三段式（Empty–Load–Readout）脉冲中改变 Load 阶段的柱塞栅压，测比特频率随 $\delta V_P$ 的线性斜率，即 $\partial f_Q/\partial V_P$；不同栅极给出的 LSES 可正可负，符号反映波函数在该栅极作用下是被拉伸还是被压缩。
- **腔谱线宽**。在[[circuit-qed/circuit-quantum-electrodynamics|cQED]] 构型中，用双色调制谱提取比特展宽随失谐的依赖关系，再用上文的二阶电荷噪声模型整体拟合。

需要强调：**不同方法测到的噪声投影不完全相同**。输运法测的是量子点自身能量涨落，比特谱学法测的是"噪声谱 × 该比特敏感度 × 该序列滤波函数"的加权积分。此外，比特模型往往只包含能施加快速脉冲的柱塞栅极，势垒栅极相关的噪声通道容易被遗漏——这正是数值模拟能复现 $T_2^{*}$ 却低估 $T_2^{\mathrm{Echo}}$ 各向异性的原因之一。

## 抑制手段

| 层次 | 手段 | 效果 |
| --- | --- | --- |
| 材料 | 移除掺杂层（非掺杂异质结 + 顶栅积累） | GaAs 单点能量涨落降至 $0.55$–$1.4\ \mu\mathrm{eV}$ |
| 工艺 | 浅刻蚀移除栅极下方二维电子气，切断漏电流通道 | 相对传统结构降低约一个数量级 |
| 工艺 | 界面钝化处理、控制栅氧厚度 | 降低界面态密度与 TLS 参与度 |
| 工作点 | 电荷比特对称点、交换门对称操作点、磁场取向甜点 | 消去一阶敏感度 |
| 波形 | 势垒脉冲代替失谐脉冲控制 $J$ | 抑制电荷噪声对 $J$ 的干扰 |
| 序列 | Hahn 回波 / CPMG 动力学解耦 | 滤除低频分量，$T_2$ 可提升数倍至数十倍 |
| 器件设计 | 优化微磁体几何、优化腔电场分布远离缺陷区 | 减小纵向梯度、降低缺陷耦合 |

## 与其他概念的关系

- 电荷噪声直接移动[[fundamentals/electrochemical-potential|电化学势]]，因此[[fundamentals/charge-stability-diagram|电荷稳定图]]中的跃迁线会随时间漂移、[[fundamentals/coulomb-blockade|库仑阻塞]]峰会跳变，这也是[[scaling-automation/automatic-tuning|自动调控]]必须处理的稳定性问题。
- 它是[[qubit-control/charge-qubit|电荷比特]]相干时间的主要限制因素；对[[qubit-control/single-spin-qubit|单自旋比特]]和[[qubit-control/hole-spin-qubit|空穴自旋比特]]，则经 $g$ 因子、自旋轨道耦合或微磁体梯度间接作用。
- 通过[[qubit-control/exchange-interaction|交换作用]] $J(\epsilon)$，电荷噪声成为[[qubit-control/singlet-triplet-qubit|单重态–三重态比特]]、[[qubit-control/resonant-exchange-qubit|共振交换比特]]和[[qubit-control/hybrid-qubit|杂化比特]]两比特门误差的来源。
- [[materials-devices/interface-defects|界面缺陷]]既是电荷噪声的微观载体，也是[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]内损耗的来源，二者需一起优化才能满足[[circuit-qed/strong-coupling|强耦合]]判据。
- 测量层面，[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]与[[readout-measurement/rf-reflectometry|射频反射测量]]既是探测电荷噪声的工具，其自身工作点也受电荷噪声漂移影响。
- 在[[scaling-automation/flopping-mode-qubit|翻转模式比特]]与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]中，比特被有意置于电荷–自旋混合区以增大偶极矩，代价正是更强的电荷噪声敏感性。


## 参考文献

- Nowak, B., Cywiński, Ł. Correlations of spin splitting and orbital fluctuations due to 1/f charge noise in the Si/SiGe quantum dot. *Applied Physics Letters* 122, 242001 (2023). DOI: 10.1063/5.0156358；arXiv:2305.06011（QAtlas 缓存：2305.06011）。
- 电荷噪声对门保真度的影响与对策：[[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]、[[references/ge-sweetspot-2024|Hendrickx et al., Nat. Mater. 23, 920 (2024)]]。
- Connors, E. J., Nelson, J., Qiao, H., Edge, L. F., Nichol, J. M. Low-frequency charge noise in Si/SiGe quantum dots. *Physical Review B* 100, 165305 (2019). DOI: 10.1103/PhysRevB.100.165305；arXiv:1907.07549（QAtlas 缓存：1907.07549）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
