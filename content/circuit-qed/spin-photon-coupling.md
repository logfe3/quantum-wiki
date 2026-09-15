---
title: 自旋–光子耦合
description: 借助自旋–电荷混合，让微波腔电场与量子点自旋量子比特相互作用。
aliases:
 - 自旋光子耦合
 - spin-photon coupling
 - 自旋-光子强耦合
 - 自旋–腔耦合
tags:
 - 电路量子电动力学
 - 自旋量子比特
date: 2026-09-08
---

<div class="entry-lead">微波光子的电场很容易推动电荷，却几乎不能直接翻转自旋。自旋–光子接口的核心，是加入足够的自旋–电荷混合，同时不丢掉自旋相干优势。</div>

## 物理问题：为什么自旋难直接耦合腔

电子[[qubit-control/single-spin-qubit|自旋量子比特]]具有毫秒到秒量级的相干时间，是[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（cQED）中天然的长寿命二能级。然而自旋的磁偶极跃迁矩阵元约 $10^{-2}\ \mu_\mathrm{B}$，对应的自发辐射速率约 $10\ \mathrm{Hz}$，与典型腔场增强的真空 Rabi 频率 MHz 量级相差甚远——直接磁偶极耦合在现有[[circuit-qed/microwave-resonator|微波谐振腔]]中不可能实现[[circuit-qed/strong-coupling|强耦合]]。

工程上把"自旋–腔接口"拆成两步：先把腔电场转成电子能看到的自旋信号，再把自旋信号馈回腔。两种主流机制是：

1. **微磁体梯度诱导电偶极自旋共振**（EDSR）：在量子点上方集成[[materials-devices/micromagnet|微磁体]]，由其磁场梯度 $\partial B/\partial x$ 把交流电场下的电子位移转换为有效横向磁场，电子在 $|e,0\rangle$ 与 $|g,1\rangle$ 之间的隧穿过程遂可翻转自旋。代表材料是 Si/SiGe 平面异质结和 Si/SiGe 三量子点。
2. **内禀自旋–轨道耦合诱导混合**：在[[materials-devices/germanium-hut-wire|锗纳米线]]、[[materials-devices/strained-germanium|应变锗]]量子阱、碳纳米管等强自旋–轨道材料里，自旋态本身已带轨道分量，电偶极对自旋态的矩阵元自动非零。

两种机制的本质相同：自旋–光子耦合 $g_s$ 总是正比于电荷–光子耦合 $g_c$ 乘以一个自旋–电荷混合因子。

<!-- FIGURE: 微磁体梯度（a）与自旋轨道场（b）把腔电场转为自旋驱动的两种示意图 -->

## 模型哈密顿量

### 单电子哈密顿量与梯度场

把双量子点中一个电子在自旋–轨道–电荷混合下的哈密顿量写为（ 公式 2.17，对应单电子体系）

$$
H=\frac{\varepsilon}{2}\tau_z + t_c\,\tau_x + \frac{g\mu_\mathrm{B} B_z}{2}\sigma_z + \frac{g\mu_\mathrm{B} B_x}{2}\sigma_x
$$

其中 $\varepsilon$ 为左右量子点能级差、$t_c$ 为点间隧穿耦合；$\tau_{x,z}$ 是轨道泡利算符，$\sigma_{x,z}$ 是自旋泡利算符；$B_z$ 为外加静磁场在量子点处的纵向分量，$B_x$ 是[[materials-devices/micromagnet|微磁体]]产生的与 $B_z$ 垂直的横向磁场分量。同一论文公式 2.18 给出腔场与电荷态的耦合项

$$
H_c=g_c\,(a+a^\dagger)\otimes\tau_z.
$$

在自旋–轨道基 $\{|\!+\!\uparrow\rangle,|\!+\!\downarrow\rangle,|\!-\!\uparrow\rangle,|\!-\!\downarrow\rangle\}$ 下展开，并对角化得四个本征能量与对应本征态；自旋–轨道混合角 $\theta=\arctan(2t_c/\Omega)$，其中 $\Omega=\sqrt{\varepsilon^2+4t_c^2}$。

### 耦合矩阵元与 $g_s$ 公式

展开后电偶极矩阵元为（ 公式 2.26–2.27）

$$
d_{01}^{(2)}=-\cos\theta\sin\!\left(\frac{\phi}{2}\right),\qquad
d_{02}^{(2)}=-d_{13}^{(2)}=\cos\theta\cos\!\left(\frac{\phi}{2}\right)
$$

其中 $\phi$ 由外磁场与微磁体磁场决定。自旋–光子耦合强度 $g_s$ 与电荷–光子耦合 $g_c$ 的关系（ 公式 2.28）为

$$
g_s=g_c\,\bigl|d_{01}^{(2)}\bigr|\propto g_c\,\frac{B_x}{2}
$$

即 $g_s$ 随微磁体在量子点处产生的横向梯度场 $B_x$ 线性增长。代价是当 $\Omega=E_Z$ 时 $\bigl|d_{01}^{(2)}\bigr|\to\infty$ 的趋势受到自旋退相干 $\gamma_s$ 同步增大的限制——工程上必须在耦合与退相干之间权衡选择工作点。

<!-- FIGURE: 双量子点反交叉附近的 $g_s(\varepsilon)$ 曲线与 $\gamma_s(\varepsilon)$ 曲线，标注工程最优工作点 -->

### 的输入–输出推导

以电偶极近似给出更系统的描述。相互作用哈密顿量

$$
H_I=g_c\,(a+a^\dagger)\sum_{n,m=0}^{3}d_{nm}\,|n\rangle\langle m|
$$

作用于四态电荷基 $\{|\!L\uparrow\rangle,|\!L\downarrow\rangle,|\!R\uparrow\rangle,|\!R\downarrow\rangle\}$ 上，矩阵元 $d_{nm}$ 满足反对称结构。在 $\sqrt{(\Omega-B_z)^2+B_x^2}\ll\Omega+B_z$ 条件下
$$
d_{01}\simeq-\cos\theta\sin\!\left(\frac{\phi}{2}\right),\qquad
d_{02}\simeq\cos\theta\cos\!\left(\frac{\phi}{2}\right).
$$

由此得到强自旋–光子耦合条件与简化形式：

$$
g_s=g_\mathrm{eff}\cdot\frac{g\mu_\mathrm{B}\,\Delta B_x\,|\Delta\tau|\cos\theta}{2\hbar(\Delta_\tau^2+\gamma_c^2)}\;\xrightarrow[\varepsilon=0,\ |\Delta\tau|\gg\gamma_c]{}\;g_s\approx g_c\,\frac{g\mu_\mathrm{B}\,\Delta B_x}{2(2t_c-\hbar\omega_r)}.
$$

关键比例

$$
\frac{g_s}{g_c}\propto\frac{\Delta B_x}{2t_c-\hbar\omega_r},\qquad
\frac{\gamma_s}{\gamma_c}\propto\!\left(\frac{\Delta B_x}{2t_c-\hbar\omega_r}\right)^{\!2}
$$

表明：

- 自旋–光子耦合 $g_s$ 与电荷–光子耦合 $g_c$ 同号、随 $\Delta B_x$ 增强；
- 自旋退相干 $\gamma_s$ 随 $\Delta B_x$ 增强更快，**强电荷–光子耦合不是强自旋–光子耦合的充分条件**；
- 减小分母 $2t_c-\hbar\omega_r$（即把隧穿耦合与腔频调到同一尺度）是同时获得较大 $g_s$ 与可接受 $\gamma_s$ 的关键。

### 空穴自旋体系：自旋轨道长度 $\lambda_SO$

锗空穴的自旋–光子耦合经内禀自旋–轨道耦合而来。在双量子点零失谐附近，给出的形式为

$$
g_s\approx 2\,g_c\left(\frac{\Delta E_0\,E_Z}{E_\mathrm{qb}}\right)\!\left(\frac{L}{\lambda_SO}\right)\!\eta,\qquad \eta=\frac{s}{\sqrt{1-s^2}},\quad s=e^{-L/l}
$$

其中 $\Delta E_0$ 为单量子点轨道能级间隔、$E_Z$ 为塞曼能、$E_\mathrm{qb}\approx 2t_c$ 为零失谐处的比特能级、$L$ 为双量子点中心间距、$\lambda_SO$ 为自旋–轨道长度（$\lambda_SO$ 越小耦合越强）、$l$ 为单量子点尺寸。

在双量子点最大杂化点 $\varepsilon=0$，代入论文参数（$\Delta E_0\approx1\ \mathrm{meV}$，$E_Z\approx25\ \mu\mathrm{eV}$，$E_\mathrm{qb}\approx 40\ \mu\mathrm{eV}$，$L\approx 40\ \mathrm{nm}$，$\lambda_SO\approx 40\ \mathrm{nm}$）得到

$$
g_s/2\pi\approx 3\ \mathrm{MHz}.
$$

在 $|\varepsilon|\gg 2t_c$ 区，电子局域于单量子点内，耦合形式简化为

$$
g_s\approx g_c\,\frac{E_Z}{\Delta E_0}\,\frac{l}{\lambda_SO}
$$

代入同样参数得到 $g_s/2\pi\approx 0.22\ \mathrm{MHz}$，与 InAs 纳米线体系的 $g_s/2\pi\sim 0.2\ \mathrm{MHz}$ 同量级。

## 三类工程实现

### Si/SiGe：微磁体 + 高阻抗腔

硅基[[qubit-control/single-spin-qubit|单自旋量子比特]]与[[circuit-qed/microwave-resonator|微波腔]]的直接电偶极耦合极弱（$g/2\pi\sim 10\ \mathrm{Hz}$），工程上用[[materials-devices/micromagnet|微磁体]]梯度把电子位移转换成 EDSR 驱动。2017 年 Vandersypen 组在 Si 上首次实现自旋–光子强耦合（$g_s/2\pi\approx 11\ \mathrm{MHz}$）；2018 年 Petta 组在 Si 双量子点上独立演示 $g_s/2\pi\approx 5.5\ \mathrm{MHz}$（ 综述）。

关键经验：

- 微磁体间隙与磁化方向决定梯度强弱与符号， 论文综述了 Tarucha 组（GaAs）和 Petta 组（Si/SiGe）的横向–纵向梯度优化；
- 微磁体同时引入垂直外磁场的"有害梯度"，使自旋态更易受电场噪声影响； 论文给出退相干提升约 3 个数量级的优化微磁体设计。

### Si/SiGe 三量子点：翻转模式量子比特

[[scaling-automation/flopping-mode-qubit|翻转模式（flopping-mode）量子比特]]把电子轨道波函数锁定在双量子点零失谐附近的成键态，对交流电场响应最大，电偶极自然放大。 在 Si/SiGe 三量子点中依次编码两个翻转模式比特并实现与同一 TiN 高阻抗腔的强耦合：

| 比特位置 | $2t_c/2\pi$ | $2g_s/2\pi$ | $\gamma_s/2\pi$ | $\kappa^\*/2\pi$ | 备注 |
| --- | ---: | ---: | ---: | ---: | --- |
| RDQD（直接接腔） | 9.4 GHz | 43.5 MHz | 4.6 MHz | 7.5 MHz | $g_s>\gamma_s,\kappa^\*$ |
| LDQD（无直接电极） | 8.0 GHz | 27.6 MHz | 2.2 MHz | 6.8 MHz | $g_s>\gamma_s,\kappa^\*$ |

RDQD 中测得的 43.5 MHz 真空 Rabi 劈裂，是目前 Si/SiGe 平台自旋–光子强耦合的最高纪录之一；LDQD 没有腔电极直接相连，证明同一腔可在更大空间范围内耦合多个翻转模式比特，为[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]奠定硬件基础。

### Ge 空穴：内禀自旋轨道耦合

锗空穴载流子由于 $P$ 轨道成分，自旋–轨道耦合强度远高于 III–V 与硅（Ge/Si 核壳纳米线 $t_\mathrm{SO}\sim 38\pm 4\ \mu\mathrm{eV}$，$\lambda_\mathrm{SO}\sim 40$–$100\ \mathrm{nm}$）。锗空穴比特因此可在不集成微磁体的情况下完成全电操控，同时为自旋–光子耦合提供另一条不依赖外加梯度场的路径。

| 体系 | $g_c/2\pi$ | 评估 $g_s/2\pi$ | $\gamma_s/2\pi$ | 来源 |
| --- | ---: | ---: | ---: | --- |
| 锗纳米线双量子点（$\varepsilon=0$） | 15 MHz | 3 MHz | 约 10 MHz（理论预测） | |
| 锗纳米线单量子点（$|\varepsilon|\gg 2t_c$） | 15 MHz | 0.22 MHz | 约 10 MHz | |
| 锗硅自组织纳米线单量子点 | 几十 MHz | 接近强耦合水平 | — | |
| 应变锗空穴–腔耦合 | — | 体系可拓展到翻转模式 | — | |
| Si/SiGe 翻转模式（LDQD） | — | 27.6 MHz | 2.2 MHz | |

首次在锗硅自组织纳米线单量子点上利用载流子压缩系数与耦合电容提取 $g_c$，并进一步评估该体系下自旋–腔耦合"接近强耦合水平"； 进一步在应变锗体系中引入镂空结构谐振腔以抑制界面缺陷引入的额外耗散，为高 $Q$ 腔上获得强自旋–光子耦合提供器件方案。

<!-- FIGURE: 三类自旋–光子耦合方案（Si 微磁体、Si 翻转模式、Ge 空穴自旋轨道）的器件结构与能级对照 -->

## 强自旋–光子耦合的实验判据

进入[[circuit-qed/strong-coupling|强耦合]]区要求相干交换速率快于腔耗散与自旋退相干之和的一半。对自旋比特，判据可写为

$$
g_s>\kappa^*,\quad \gamma_s
$$

其中 $\kappa^\*$ 是与电荷比特耦合后腔的有效展宽。频域证据是[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]，间距 $2g_s$ 的两条谱线在线宽 $(\kappa^\*+\gamma_s)/2$ 的包络内可分辨；时域证据是激发在 $|e,0\rangle$ 与 $|g,1\rangle$ 之间的真空 Rabi 振荡。

注意两点工程细节：

1. **裸腔线宽 vs 杂化后线宽**：当电荷比特已耦合到腔、腔线宽已从 $\kappa$ 拓宽到 $\kappa^\*$ 时，再观察自旋耦合必须用 $\kappa^\*$ 而非 $\kappa$；
2. **Fano 修正**：高阻抗腔的细中心导体易与寄生通道耦合，谱线常偏离对称洛伦兹形，未做 Fano 修正会系统低估 $2g_s$。

## 参数与量级

下表汇总本站论文中所列工作中实际演示或理论评估的自旋–光子耦合参数。电荷–光子耦合 $g_c$、自旋–光子耦合 $g_s$、腔耗散 $\kappa$ 与自旋退相干 $\gamma_s$ 是四个核心参数。

| 体系 | 自旋比特编码 | $g_c/2\pi$ | $g_s/2\pi$（评估/实测） | $\kappa/2\pi$ | $\gamma_s/2\pi$ | 来源 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Si/SiGe 单自旋 + 微磁体 | LD 单自旋 | — | 约 5–11 MHz（实验） | 1–5 MHz | 2.4–2.5 MHz | 综述 |
| Si/SiGe 翻转模式 RDQD + TiN 3.5 kΩ 腔 | flopping-mode | 175 MHz（$g_0$） | 21.8 MHz（$g_s/2\pi$），$2g_s/2\pi=43.5$ MHz（实测） | 7.5 MHz（杂化后） | 4.6 MHz | |
| Si/SiGe 翻转模式 LDQD + TiN 3.5 kΩ 腔 | flopping-mode | 同上 | 13.8 MHz（$g_s/2\pi$），$2g_s/2\pi=27.6$ MHz（实测） | 6.8 MHz（杂化后） | 2.2 MHz | |
| Si/SiGe 三量子点 RX 比特 + TiN 腔 | 共振交换 | 168 MHz（$g_{c0}$） | 65 MHz（$g_\mathrm{RX}/2\pi$） | — | 16.9 MHz | |
| 锗纳米线双量子点（$\varepsilon=0$） | 空穴自旋（理论） | 15 MHz（实测） | 约 3 MHz（评估） | 6.6 MHz | 约 10 MHz（理论） | |
| 锗纳米线单量子点（$|\varepsilon|\gg 2t_c$） | 空穴自旋（理论） | 15 MHz（实测） | 0.22 MHz（评估） | 6.6 MHz | 约 10 MHz（理论） | |
| 锗硅自组织纳米线单量子点 | 空穴自旋 | 几十 MHz | 接近强耦合水平（评估） | — | — | |
| InAs 纳米线 | 空穴/电子自旋（理论） | — | 约 0.2 MHz | — | — | 引用 |

量级判读：

- $g_s/\kappa \gtrsim 1$ 且 $g_s/\gamma_s\gtrsim 1$ 才算进入强耦合区。的 43.5/7.5≈5.8、43.5/4.6≈9.5 两组比值都远高于 1，是强耦合的硬证据。
- 自旋–光子强耦合的瓶颈常不在 $\gamma_s$，而在腔的杂化展宽 $\kappa^\*$：电荷比特已耦合到同一腔之后，$\kappa^\*$ 显著增大。提高 $Q$ 值（[[circuit-qed/high-impedance-resonator|高阻抗腔]]的 TiN 路线、镂空结构等）能直接改善 $\kappa^\*$，从而释放更多 $g_s$ 余量。
- 锗空穴体系当前 $g_s$ 比 Si/SiGe 微磁体路线小 1–2 个数量级，但具备无需集成微磁体、可全电控、易于二维扩展的天然优势，是中长期自旋–光子耦合阵列的候选。

## 实验特征与测量

### 频域：真空 Rabi 劈裂

对自旋比特，测量方法与电荷比特基本相同：固定腔探测频率 $f_p$，扫描外磁场 $B_\mathrm{ext}$ 让自旋的塞曼频率 $f_q=g\mu_\mathrm{B} B_\mathrm{tot}/h$ 扫过 $f_r$。当 $f_q\approx f_r$ 时，腔透射/反射谱分裂为两条相距 $2g_s$ 的杂化支，劈裂大小可直接读出 $g_s$。 在 RDQD 中以 $B_\mathrm{ext}=508.0\ \mathrm{mT}$ 实现共振，测得 $2g_s/2\pi=43.5\ \mathrm{MHz}$。

### 时域：Rabi 振荡与 Ramsey 干涉

翻转模式自旋比特可在 RDQD 上做 Rabi 振荡。Rabi 频率 $f_R\propto B_x\cdot eV_0/h$ 反映微磁体横向梯度与驱动幅度的乘积；拉姆齐干涉提取纯退相位时间 $T_2^\*$。翻转模式比单点 EDSR 低 3 个数量级的驱动功率、更高的品质因子。

### 测量带宽限制

当 $2g_s/2\pi$ 接近或超过自旋驱动带宽时，传统双色脉冲测量会受限于腔的滤波特性；强自旋–光子耦合系统中常借助 Rabi–Ramsey 分离脉冲序列把驱动和读出解耦，避免腔带宽把读出信号压平。

<!-- FIGURE: 翻转模式自旋比特的 Rabi–Ramsey 时序图与典型 $T_2^\*$ 提取 -->

## 适用边界与权衡

- **反旋项**：当 $g_s/\omega_r\gtrsim 0.1$ 时[[circuit-qed/jaynes-cummings-model|JC 模型]]失效，需回到完整 Rabi 模型。 论文中电荷比特已达 $g_c/\omega_r\sim 0.175$ 边缘，但 $g_s/\omega_r$ 仍远小于 0.1，JC 框架仍准确。
- **电荷噪声–耦合折中**：$g_s\propto g_c\propto V_\mathrm{zpf}\sqrt{Z_r}$，$g_c$ 越大电荷噪声引入的自旋退相干越大；强耦合要求 $\partial B_x/\partial x$ 足够大、$T_2^\*$ 足够长，二者同时由栅极结构与材料质量决定。
- **磁场兼容性**：自旋比特需面内磁场区分自旋态；[[circuit-qed/squid-array-resonator|SQUID 阵列腔]]对磁场敏感、不兼容；TiN、NbTiN 等高 $T_c$ 超导材料腔是自旋比特实验的主流（见[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]）。
- **多比特共享腔**：多个自旋比特共享同一[[circuit-qed/microwave-resonator|微波腔]]时，色散区可推出有效交换作用 $J_\mathrm{eff}\sim g_{s,1}g_{s,2}/\Delta$（见[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]）；但多比特 $g_{s,i}$ 大小不一、频率拥挤时，需仔细设计失谐与[[readout-measurement/dispersive-readout|色散读出]]频点。
- **替代路线**：[[scaling-automation/spin-orbit-torque-control|SOT 磁化翻转]]、单光子辅助的 EDSR、或借助[[qubit-control/hybrid-qubit|杂化比特]]等机制可在不同边界条件下避开微磁体，但仍要求某种形式的自旋–电荷混合。

## 与其他概念的关系

- [[circuit-qed/jaynes-cummings-model|JC 模型]]是描述自旋–光子耦合的基本框架；色散极限给出[[readout-measurement/dispersive-readout|色散读出]]与[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]的判据。
- [[circuit-qed/charge-photon-coupling|电荷–光子耦合]]是自旋–光子耦合的硬件基础：$g_s\propto g_c$ 决定了上限。
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]通过 $g_0\propto\sqrt{Z_r}$ 同时放大 $g_c$ 与 $g_s$；TiN 3.5 kΩ 腔的 $\kappa/2\pi=2.2\ \mathrm{MHz}$ 是当前自旋比特强耦合演示的硬件支撑。
- [[materials-devices/micromagnet|微磁体]]是 Si/SiGe 路线中引入自旋–电荷混合的核心元件；其梯度场是 $g_s\propto B_x$ 的物理来源。
- [[qubit-control/electric-dipole-spin-resonance|EDSR]]是单个自旋通过自旋–电荷混合翻转的机制，与自旋–光子耦合共用同一套混合机制：两者都从 $g_c$ 经同一矩阵元 $d_{01}^{(2)}$ 转换而来。
- [[circuit-qed/nv-center-cavity-bus|NV 色心腔总线]]是互补的磁耦合路线：量子点自旋经微磁体混入电荷走电偶极耦合，NV 色心直接用腔的微波磁场（磁偶极）——同一总线思想在两类自旋体系上的两种实现。
- [[scaling-automation/flopping-mode-qubit|翻转模式量子比特]]在双量子点零失谐点把 $g_s$ 推高一个数量级，是目前 Si/SiGe 平台上自旋–光子强耦合的最高 $g_s$ 来源。
- [[qubit-control/resonant-exchange-qubit|共振交换量子比特]]可与腔直接耦合，避免微磁体集成； 在 Si/SiGe 三量子点上测得 $g_\mathrm{RX}/2\pi=65\ \mathrm{MHz}$。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]利用内禀自旋–轨道耦合，可省去微磁体；、 在锗纳米线和应变锗上评估 $g_s$。
- [[circuit-qed/strong-coupling|强耦合判据]]给出 $g_s>\kappa,\gamma_s$ 的实验指标； 论文以 $g_s>\kappa^\*,\gamma_s$ 为自旋比特的对应判据。


## 参考文献

- 硅中自旋–光子强耦合的里程碑实验：[[references/samkharadze-2018|Samkharadze et al., Science 359, 1123 (2018)]]；空穴体系见 [[references/hendrickx-2021|Hendrickx et al., Nature 591, 580 (2021)]] 及文献库内锗–腔耦合工作。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
