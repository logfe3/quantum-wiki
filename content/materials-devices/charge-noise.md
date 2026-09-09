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
date: 2026-09-08
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
S_{G_i}(f)=\int_{-\infty}^{+\infty}dt\;e^{-2\pi i f t}\,
\left\langle \delta V_{G_i}(t)\,\delta V_{G_i}(0)\right\rangle ,
$$

实验上常用的两种参数化形式为

$$
S_q(\omega)=\frac{2\pi A_q}{|\omega|},
\qquad
S(f)=S_{\mathrm{hf}}\left(\frac{f_0}{f}\right)^{\alpha},
$$

前者中 $A_q$ 是失谐参数 $q$ 的噪声在 $1\ \mathrm{Hz}$ 处的功率，后者把谱指数 $\alpha$ 留作可拟合量、$f_0$ 为参考频率。理想 $1/f$ 对应 $\alpha=1$；实测值通常略小于 1（例如平面锗空穴器件上拟合得到 $\alpha\approx0.907$），仍属于典型的 $1/f$ 型电荷噪声。

$\alpha$ 不能直接测量，但可以从回波衰减的形状反推。Hahn 回波幅度随等待时间的衰减写成

$$
\exp\left[-\left(\frac{\tau_{\mathrm{idle}}}{T_2^{\mathrm{Echo}}}\right)^{\beta}\right],
$$

拟合出的指数 $\beta$ 与谱指数满足 $\alpha=\beta-1$。这条关系把"波形长什么样"和"噪声谱多陡"直接联系起来，是仅凭比特实验就能读出噪声谱形的实用技巧。

## 噪声如何进入比特：三类耦合通道

电荷噪声本身只涨落电势。它能否伤害比特，取决于比特频率对电势的**导数**有多大。

### 电荷比特：一阶失谐耦合

[[qubit-control/charge-qubit|电荷量子比特]]的最小模型是

$$
H=\frac{\varepsilon}{2}\sigma_z+t_c\sigma_x ,
\qquad
\hbar\omega_{01}=\sqrt{\varepsilon^{2}+4t_c^{2}} ,
$$

其中 $\varepsilon$ 是双点失谐、$t_c$ 是[[fundamentals/tunnel-coupling|隧穿耦合]]。比特频率对失谐的敏感度

$$
\frac{\partial \omega_{01}}{\partial\varepsilon}
=\frac{1}{\hbar}\frac{\varepsilon}{\sqrt{\varepsilon^{2}+4t_c^{2}}}
$$

在 $\varepsilon=0$ 处为零、在 $|\varepsilon|\gg t_c$ 处饱和到 $1/\hbar$。这就是电荷比特"在反交叉点最抗噪、远离对称点退相干最快"的定量来源，也解释了为什么电荷比特虽有最大的电偶极矩、最容易做到[[circuit-qed/charge-photon-coupling|电荷–光子]]强耦合，相干时间却最短。

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
+\cdots\right]^{1/2},
$$

完整表达式还含 $\varepsilon$ 与 $\Delta$ 的交叉项，其权重由相关系数 $c=\mathrm{cov}(\varepsilon,\Delta)/(\sigma_\varepsilon\sigma_\Delta)$ 决定。这个形式的实用价值在于：当一阶导数被工作点设计压到零时，**二阶项和交叉项就成为剩余退相干的主导**，展宽随失谐的依赖曲线因此不是简单的 V 形，而是可以用上式整体拟合——拟合与实验数据吻合，即可判定电荷噪声是主导噪声源。

作为对照，同一体系中电子–声子相互作用引起的弛豫可用形变势哈密顿量与费米黄金定则估算：硅中声子贡献相对电荷噪声可忽略，而 GaAs 中电声相互作用占比相当大，不能忽略。

### 自旋比特：纵向自旋–电场敏感度

自旋本身不带电，电荷噪声必须"借道"才能影响它。借道方式有二：

1. **自旋轨道耦合 / $g$ 张量的电压依赖**。把空穴比特写成有效自旋 $1/2$ 系统
$$
H_s=\mathbf{S}\cdot\boldsymbol{\omega}_L(\mathbf{V}_G),
\qquad
\boldsymbol{\omega}_L(\mathbf{V}_G)=\frac{\mu_B}{\hbar}\,\mathsf{g}(\mathbf{V}_G)\cdot\mathbf{B},
$$
$g$ 张量显含栅压，于是拉莫尔频率 $f_L=\frac{\mu_B}{h}\left|\mathsf{g}(\mathbf{V}_G^0)\cdot\mathbf{B}\right|$ 也随栅压变化。定义**纵向自旋–电场敏感度**（longitudinal spin–electric susceptibility, LSES）
$$
D_{G_i}=\frac{\partial f_L}{\partial V_{G_i}^{0}},
$$
它的大小直接反映比特对电荷噪声的敏感程度，实验上就是"比特频率随柱塞栅压的斜率"。

2. **[[materials-devices/micromagnet|微磁体]]纵向梯度场**。微磁体的杂散场与电驱动位移结合给出横向梯度 $b_{tr}=(\vec{e}_{MW}\cdot\nabla)B_{MM}^{\perp}$，驱动[[qubit-control/electric-dipole-spin-resonance|EDSR]]；而其纵向分量与涨落电场结合给出 $b_{long}=(\vec{e}_{noise}\cdot\nabla)B_{MM}^{/\!/}$，直接把电荷噪声转成频率噪声。二者的比值定义了品质因子
$$
Q=\frac{\mathrm{d}B_{tr}^{tot}/\mathrm{d}y}
{\sqrt{\left(\mathrm{d}B_{long}/\mathrm{d}x\right)^{2}+\left(\mathrm{d}B_{long}/\mathrm{d}y\right)^{2}}},
$$
最大化 $Q$ 的面内磁场角并不沿磁体轴向，而是偏离一定角度。

在平面锗中，有效 $g$ 因子的各向异性源于重空穴–轻空穴（HH–LH）混合，而混合程度又由量子点的电势分布决定，因此 $g$ 与 LSES 都强烈依赖磁场取向。面内旋转磁场时

$$
g(\theta)=\sqrt{g_a^{2}\cos^{2}(\theta-\theta_0)+g_b^{2}\sin^{2}(\theta-\theta_0)},
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
\delta\phi(t)=2\pi\int_{-\infty}^{+\infty}dt'\sum_i D_{G_i}\,\delta V_{G_i}(t')\,\eta_t(t'),
$$

其中 $\eta_t(t')$ 描述脉冲序列的符号翻转。对含 $N_\pi$ 个 $\pi$ 脉冲的 CPMG 序列

$$
\eta_t^{\mathrm{CPMG}}(t')=\sum_{k=0}^{N_\pi}(-1)^{k}\,
\Theta(t_{k+1}-t')\,\Theta(t'-t_k),
$$

$\Theta$ 为 Heaviside 阶跃函数，Hahn 回波对应 $N_\pi=1$。旋转坐标系中密度矩阵非对角元的衰减为

$$
\left\langle\tilde\rho_{01}(t)\right\rangle
=\tilde\rho_{01}(0)\,e^{-\frac{1}{2}\left\langle\delta\phi^{2}(t)\right\rangle},
\qquad
\left\langle\delta\phi^{2}(t)\right\rangle
=4\pi^{2}\int_{-\infty}^{+\infty}df\sum_i D_{G_i}^{2}\,S_{G_i}(f)\,
\left|\tilde\eta_t(f)\right|^{2},
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
$$
J=\frac{2tU}{U^{2}-\epsilon^{2}},
$$
$t$ 为点间隧穿耦合、$U$ 为[[fundamentals/charging-energy|充电能]]。$J$ 在 $\epsilon=0$ 处取极小值、对 $\epsilon$ 一阶不敏感，因此实验上不再用失谐脉冲、而是用快速电压脉冲直接抬降点间势垒来开关 $J$，可有效抑制电荷噪声对 $J$ 的干扰。需要注意的是，正反脉冲会使两点电化学势非对称偏移，实测对称点常偏离失谐零点，需用 Hahn 回波型序列单独标定（引入[[scaling-automation/virtual-gates|虚拟栅极]]可缓解）。
- **空穴自旋比特的磁场取向甜点**。由于 LSES 随磁场角呈抛物线型变化，选择使 $|D_{G_i}|$ 最小的磁场方向即可显著抑制退相干。理论进一步指出，LSES 为零的方向在描述磁场取向的单位球面上不是孤立点，而是连成连续轨迹（"最优操控线"，sweet lines），且轨迹位置可由栅压调控——这为在多比特阵列中寻找**共同**最优磁场配置提供了可能。

代价是普遍存在的："操控速度–相干时间"权衡。强自旋轨道耦合是一把双刃剑：它带来超快全电学操控，也放大自旋–电场敏感度。实验上确实看到 $f_{\mathrm{Rabi}}$ 与 $T_2^{\mathrm{Echo}}$ 随磁场角呈相反趋势，使品质因子 $Q_E=2\,T_2^{\mathrm{Echo}}f_{\mathrm{Rabi}}$ 不再有单调规律。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 能量涨落 $\Delta\varepsilon$（传统掺杂 GaAs 单点） | $3.1\pm1.1\ \mu\mathrm{eV}$ | 尤杰 2016 |
| 能量涨落 $\Delta\varepsilon$（浅刻蚀 GaAs 单点） | $0.50\pm0.23\ \mu\mathrm{eV}$ | 尤杰 2016 |
| 能量涨落 $\Delta\varepsilon$（非掺杂 GaAs 单点） | $0.55$–$1.4\ \mu\mathrm{eV}$ | 尤杰 2016 |
| 杠杆臂 $\alpha$（用于 $\Delta\varepsilon=\alpha\Delta V$） | $0.05$（浅刻蚀）/ $0.03\ \mathrm{meV/mV}$（传统） | 尤杰 2016 |
| 噪声谱指数 $\alpha$ | $0.907$（由 $\beta=1.907\pm0.23$ 反推） | 周雨晨 2026 |
| 电荷涨落特征时间尺度 | 毫秒量级（低频主导） | 江顺利 2025 |
| 比特频率抖动（55 h Ramsey 监测） | 近似高斯分布，$\sigma=0.794\ \mathrm{MHz}$ | 周雨晨 2026 |
| 内禀失谐噪声幅度 $\delta f_{\mathrm{Larmor}}$ | $\approx1.66\ \mathrm{MHz}$（由 $T_2^{*}$ 估算），拟合取 $1.80\ \mathrm{MHz}$ | 周雨晨 2026 |
| 平面锗空穴比特 $T_2^{*}$ | $169.9\ \mathrm{ns}$，随面内磁场角近似不变 | 周雨晨 2026 |
| 平面锗空穴比特 $T_2^{\mathrm{Echo}}$ | Q1 $500\to2200\ \mathrm{ns}$；Q2 $400\to800\ \mathrm{ns}$ | 周雨晨 2026 |
| 甜点处单比特门保真度增益 | $+2\%$，最高 $99.82\%$ | 周雨晨 2026 |
| RX 比特退相干率 $\gamma_{\mathrm{RX}}/2\pi$ | $16.9\ \mathrm{MHz}$ | 江顺利 2025 |
| Si-MOS 微磁体器件 $T_2^{*}$ / $T_2^{\mathrm{echo}}$ | $624\ \mathrm{ns}$ / $60.2\ \mu\mathrm{s}$ | 楚宁 2025 |
| 电流噪声积分频段 | $1$–$9\ \mathrm{Hz}$（浅刻蚀）；$5$–$45\ \mathrm{Hz}$（非掺杂） | 尤杰 2016 |
| 温度依赖 | $250\ \mathrm{mK}\to1\ \mathrm{K}$，峰顶电流涨落上升约 $20\%$ | 尤杰 2016 |

## 实验测量方法

### 输运法：库仑峰上的电流噪声

这是把电荷噪声折算成能量的经典方案，四个步骤：

1. **定标**。先测[[fundamentals/coulomb-diamond|库仑菱形]]提取杠杆臂 $\alpha$。
2. **测谱**。把量子点调到[[fundamentals/coulomb-blockade|库仑阻塞]]区（避开能量量子化的影响），源极加直流偏压（如 $200\ \mu\mathrm{V}$，用直流而非交流以排除激励信号干扰），漏极电流经前置放大器转成电压后送入频谱仪，得到电流噪声谱 $S_I(f)$。在库仑峰的峰底（阻塞区）、斜率最大处、峰顶三个位置分别取谱：峰底零电流处测到的实际上是隧穿几率涨落 $\Delta\Gamma$ 引起的噪声，可作为本底。
3. **积分**。对低频段积分得到电流涨落
$$
\Delta I=\sqrt{\int_{f_1}^{f_2}\left[S_I^{2}(f)-S_{BG}^{2}(f)\right]df},
$$
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

## 延伸阅读

- M. Kȩpa, N. Focke, Ł. Cywiński, and J. A. Krzywda, "Simulation of 1/f charge noise affecting a quantum dot in a Si/SiGe structure" (2023). [DOI: 10.1063/5.0151029，arXiv:2303.13968]
- Yuan-Chi Yang, S. Coppersmith, and M. Friesen, "High-fidelity single-qubit gates in a strongly driven quantum-dot hybrid qubit with 1/f charge noise", *Physical Review A* (2019). [DOI: 10.1103/PhysRevA.100.022337]
- F. Martins, F. Malinowski, P. D. Nissen, E. Barnes, S. Fallahi, G. Gardner, M. Manfra, C. Marcus, and F. Kuemmeth, "Noise Suppression Using Symmetric Exchange Gates in Spin Qubits", *Physical Review Letters* (2015). [DOI: 10.1103/PhysRevLett.116.116801]
- T. Pathan and D. Vashaee, "Quantifying Charge Noise Sources in Quantum Dot Spin Qubits via Impedance Spectroscopy, DLTS, and C-V Analysis", *Advanced Quantum Technologies* (2025). [DOI: 10.1002/qute.202500948]

## 论文依据

- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 64：$1/f$ 噪声是各材料体系纳米器件的共同问题、被认为是比特退相干的主因；随机电荷涨落被认为是其主要来源；肖特基电极到二维电子气的漏电流是门控 GaAs 器件的主要噪声通道。
- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 68：库仑阻塞区低频噪声的测量方案（SR785 直流源 + 频谱仪、SR570 前放）、库仑峰三点取谱、峰底零电流处噪声对应隧穿几率涨落 $\Delta\Gamma$，以及积分电流涨落公式 (4-1)。
- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 70：$\Delta V=\Delta I/|dI/dV|$ 与 $\Delta\varepsilon=\alpha\Delta V$ 的换算、电流噪声与微分电导一一对应、峰顶数据须舍弃；$250\ \mathrm{mK}\to1\ \mathrm{K}$ 电流涨落上升约 $20\%$；浅刻蚀 $\alpha=0.05$、传统 $\alpha=0.03\ \mathrm{meV/mV}$。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 70–71：浅刻蚀量子点能量涨落 $0.50\pm0.23\ \mu\mathrm{eV}$ 与传统量子点 $3.1\pm1.1\ \mu\mathrm{eV}$ 的统计对比（相差约一个数量级）。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 82–83：非掺杂 GaAs 单量子点噪声级别 $0.55$–$1.4\ \mu\mathrm{eV}$，$5$–$45\ \mathrm{Hz}$ 积分频段，证实移除掺杂层可降低电荷噪声。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF p. 100：电荷噪声时间尺度为毫秒量级、低频主导；哈密顿量对 $(\varepsilon,\Delta)$ 的二阶展开；$1/f$ 谱假设 $S_q(\omega)=2\pi A_q/|\omega|$。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF p. 101：含一阶、二阶与交叉项的退相位率 $\gamma_\phi$ 表达式，以及比特展宽随失谐依赖的电荷噪声模型拟合结论。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 102–103：电子–声子相互作用哈密顿量与费米黄金定则估算，硅中声子贡献可忽略而 GaAs 中不可忽略。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 137：最优工作点（sweet spot）定义为拉莫尔频率对电荷噪声敏感性最小处；最优操控线（sweet lines）为单位球面上的连续轨迹，可由栅压调控。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 143：LSES 的定义与提取方法，$g$ 因子各向异性公式 $g(\theta)=\sqrt{g_a^2\cos^2(\theta-\theta_0)+g_b^2\sin^2(\theta-\theta_0)}$ 及拟合值。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 145：LSES 解析近似公式 (6.6) 及其符号来源（波函数在 $z$ 向扩展与面内压缩）。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 147：$H_s=\mathbf{S}\cdot\boldsymbol{\omega}_L(\mathbf{V}_G)$、栅压分解 $V_{G_i}=V_{G_i}^0+\delta V_{G_i}$、Hahn 回波衰减指数 $\beta$ 与谱指数 $\alpha=\beta-1=0.907$；$T_2^{\mathrm{Echo}}$ 从 $500\ \mathrm{ns}$ 提升至 $2200\ \mathrm{ns}$。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 149：滤波函数形式的退相干理论——$\langle\delta\phi^2(t)\rangle$ 的谱积分表达、Ramsey 滤波函数，以及 $T_2^{*}$ 与 $T_2^{\mathrm{Echo}}$ 的近似公式 (6.21)、(6.22)。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 150：由 55 小时 Ramsey 漂移与 CPMG 阶数扫描重构横跨多个数量级的宽频噪声谱、提取 $S^{\mathrm{lf}}$ 与 $S^{\mathrm{hf}}$，以及势垒栅极噪声通道缺失导致模拟低估 $T_2^{\mathrm{Echo}}$ 各向异性。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 128：55 小时内比特频率抖动近似高斯分布、标准差 $0.794\ \mathrm{MHz}$；$\delta f_{\mathrm{Larmor}}\approx1.66\ \mathrm{MHz}$ 的估算与 $1.80\ \mathrm{MHz}$ 的拟合值。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 152：强自旋轨道耦合的"双刃剑"效应——$f_{\mathrm{Rabi}}$ 与 $T_2^{\mathrm{Echo}}$ 随磁场角呈相反趋势。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 153：甜点处单比特门保真度提升约 $2\%$、最高 $99.82\%$。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 47：过厚的氧化铝会显著增加电荷噪声，Si/SiGe 器件栅氧层厚度通常控制在 $7\ \mathrm{nm}$ 左右。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 67：在对称操作点用快速电压脉冲调控点间势垒高度开关 $J$，可有效抑制电荷噪声影响。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 69：$J=2tU/(U^2-\epsilon^2)$，$J$ 在 $\epsilon=0$ 处对失谐一阶不敏感；实测对称操作点偏离失谐零点，需用 Hahn echo 型序列标定。
- [[sources/chu-ning-2025|楚宁 2025]]，PDF p. 25：Si-MOS 界面质量低于外延结构，均匀性有限、电荷噪声更大。
- [[sources/chu-ning-2025|楚宁 2025]]，PDF p. 26：锗中衬底电荷噪声经自旋轨道耦合导致 $g$ 因子随时间涨落，是空穴比特退相干的主要障碍。
- [[sources/chu-ning-2025|楚宁 2025]]，PDF p. 80：横向梯度 $b_{tr}$ 与纵向梯度 $b_{long}=(\vec{e}_{noise}\cdot\nabla)B_{MM}$ 的定义，后者与涨落电场结合导致退相干。
- [[sources/chu-ning-2025|楚宁 2025]]，PDF p. 82：品质因子 $Q$ 的梯度比值定义、最优面内磁场角偏离磁体轴向；该器件 $T_2^{*}=624\ \mathrm{ns}$、$T_2^{\mathrm{echo}}=60.2\ \mu\mathrm{s}$。
- [[sources/ma-jingrui-2026|马璟睿 2026]]，PDF p. 22：氧化层悬挂键等效为二能级系统（TLS），既为谐振腔提供额外耗散通道、又向耦合系统贡献电荷噪声；界面缺陷俘获载流子造成阈值电压漂移与工作电流衰减。
- [[sources/ma-jingrui-2026|马璟睿 2026]]，PDF p. 37：在同一衬底上并行制备场效应管与量子点器件，研究界面缺陷对空穴比特电荷噪声的贡献及界面电荷"产生–隧穿–俘获"的完整图像。
