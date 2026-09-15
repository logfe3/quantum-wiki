---
title: 高阻抗谐振腔
description: 特性阻抗远高于 50 Ω、具有更大零点电压涨落以增强电偶极耦合的微波谐振器。
aliases:
 - 高阻抗腔
 - 高阻抗谐振器
 - high-impedance resonator
 - high-impedance cavity
tags:
 - 电路量子电动力学
 - 强耦合
date: 2026-09-08
source: QAtlas
qatlas_id: qa_01m23778fds0mdycfmxf0668q7
source_updated: 2026-09-09T16:49:46Z
---

<div class="entry-lead">高阻抗腔通过增大每个光子的零点电压，让同一个量子点电偶极感受到更强微波场，是半导体量子比特进入强耦合区的关键器件。</div>

## 物理图像与定义

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（cQED）架构中，半导体量子点通过电偶极相互作用与[[circuit-qed/microwave-resonator|微波谐振腔]]耦合，而商用微波器件与传输线的标准特性阻抗为 50 Ω，常规共面波导（coplanar waveguide，CPW）腔也按 50 Ω 设计以匹配测量线路。**高阻抗谐振腔**（high-impedance resonator，高阻抗腔）指特性阻抗 $Z_r$ 被刻意提高到 $1\sim 3.5$ kΩ 量级的超导微波谐振腔：在腔频 $\omega_r$ 固定（需匹配量子比特 4–8 GHz 的典型工作频段）的前提下，提高 $Z_r$ 等价于增大腔内每个光子的零点电压涨落（zero-point voltage fluctuation），从而直接放大[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]强度 $g$。

物理上这对应着阻抗变换：零点能量 $\hbar\omega_r/2$ 在电容与电感间均分，高 $Z_r=\sqrt{L/C}$ 意味着电磁能量更偏向电场一侧，电压波腹处的零点电压随之增大。因此量子点总是制备在腔的电压波腹处，并由腔中心导体伸出的电极直接连接到量子点的 plunger 栅极上。

![[assets/figures/circuit-qed/gu-2023-fig1-8-vacuum-rabi-comparison.jpg]]

*早期量子点–腔真空 Rabi 劈裂实验汇总（Petta 组 SQUID 阵列腔、Wallraff 组 NbTiN 反射腔、Vandersypen 组两自旋比特虚光子耦合，引自 ，图 1.8）*

<!-- 原始占位：高阻抗 CPW 腔示意图：窄中心导体、电压驻波分布与波腹处的量子点耦合电极 -->

## 理论模型：阻抗如何进入耦合强度

### 腔模的量子化与零点电压

把腔的基频模式等效为 LC 振子，磁通 $\hat\Phi$ 与电荷 $\hat Q$ 满足 $[\hat\Phi,\hat Q]=i\hbar$，引入产生、湮灭算符后

$$
\hat\Phi=\sqrt{\frac{\hbar Z_r}{2}}\left(a+a^\dagger\right),\qquad
\hat H_r=\hbar\omega_r\left(a^\dagger a+\tfrac{1}{2}\right)
$$

其中 $Z_r=\sqrt{L/C}$，$\omega_r=1/\sqrt{LC}$。对长度为 $l$、单位长度电容 $C_0$ 的 $\lambda/2$ CPW 腔，$\omega_r=\pi/(l Z_r C_0)$，电压波腹处的量子化电压为

$$
\hat V=V_\mathrm{zpf}\left(a+a^\dagger\right),\qquad
V_\mathrm{zpf}=\sqrt{\frac{\hbar\omega_r}{l C_0}}=\omega_r\sqrt{\frac{\hbar Z_r}{\pi}}
$$

即零点电压随 $\sqrt{Z_r}$ 增长——这是高阻抗路线的核心标度关系。几何上，CPW 的电容与电感可由保角映射（conformal mapping）计算：$C=4\varepsilon_0\varepsilon_\mathrm{eff}\,K(k_g)/K(k_g')$，$L=\mu_0 K(k_g')/(4K(k_g))$，其中 $K$ 为第一类完全椭圆积分、$k_g=w/(w+2s)$ 由中心导体宽 $w$ 与地间距 $s$ 决定；增大 $s$、减小 $w$ 分别减小电容、增大电感，是几何层面提高 $Z_r$ 的手段，但可调范围有限。

### 电偶极耦合强度

在电偶极近似（量子点尺度 ~100 nm 远小于腔波长）下，相互作用哈密顿量为 $\hat H_c=\hat{\boldsymbol d}\cdot\hat{\boldsymbol E}$。设量子点电偶极矩为 $re$、偶极方向与腔电场平行，腔电压经电容分压系数 $\nu=C_c/(C_c+C_d)$ 耦合到量子点，得到

$$
g_0=\frac{r\nu}{\hbar s}\sqrt{\frac{\hbar\omega_r}{l C_0}}
=\frac{r\nu}{s}\,\omega_r\sqrt{\frac{Z_r}{\pi\hbar}}
$$

其中 $s$ 为量子点到地的有效距离。同一结果的常用等价写法是以电阻量子 $R_Q=h/e^2\approx26$ kΩ 归一化：

$$
g_0=\omega_r\,c_c\sqrt{\frac{2Z_r}{R_Q}}
$$

$c_c$ 为耦合电极到量子点的杠杆臂（lever arm）。两种写法都给出 $g_0\propto\sqrt{Z_r}$：腔频必须锚定在比特频段，阻抗就成为唯一可工程化放大的因子。量子点本征基下的有效横向耦合还要乘以混合角因子，$g_\mathrm{eff}=g_0\sin\theta=2t_c g_0/(\hbar\omega_q)$（见[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]）。作为量级估计，$Z_r$ 从 50 Ω 提高到 1 kΩ 带来约 $\sqrt{20}\approx4.5$ 倍的耦合增强；论文中 $Z_r\approx3.5$ kΩ 的 TiN 腔相对 50 Ω 腔理论上可提升约 8.4 倍。

## 两条实现路线

由于 $Z_r\propto\sqrt{L_0}$（$L_0$ 为单位长度电感），核心问题是把电感做大。实验上有两条成熟路线。

### SQUID 阵列腔

约瑟夫森结在小电流下是强非线性电感。由约瑟夫森方程 $I=I_c\sin\varphi$ 与 $\mathrm{d}\varphi/\mathrm{d}t=2eV/\hbar$，结合 $V=L_J\,\mathrm{d}I/\mathrm{d}t$ 得结电感

$$
L_J=\frac{\Phi_0}{2\pi I_c\cos\varphi}=\frac{L_{J0}}{\cos\varphi}
$$

$\Phi_0=h/2e$ 为磁通量子。对称 SQUID 是两个结并联成的环路，干涉使临界电流 $I_{cS}(\Phi_m)=2I_c|\cos(\pi\Phi_m/\Phi_0)|$，从而

$$
L_{SJ}(\Phi_m)=\frac{L_J}{2}\left|\cos\frac{\pi\Phi_m}{\Phi_0}\right|^{-1}
$$

电感可被穿过环路的外加磁通 $\Phi_m$ 原位调节。单个结的非线性太强、能级间隔不等，无法直接用作线性谐振器；把 $N$ 个 SQUID 串联成分布式[[circuit-qed/squid-array-resonator|SQUID 阵列腔]]可以摊薄非线性（仅在高光子数下显现），同时保留磁通可调性。对节点磁通做傅里叶展开后，阵列哈密顿量对角化为一系列模式

$$
\omega_k=\omega_0\,\sqrt{\frac{1-\cos(\pi k/N)}{\dfrac{C_{d0}}{2C_S}+\left(1-\cos\frac{\pi k}{N}\right)}}
$$

其中 $C_{d0}$ 是每个 SQUID 的对地电容、$C_S$ 是 SQUID 自身电容、$\omega_0=1/\sqrt{L_SC_S}$ 是单个 SQUID 的等离子体频率（plasma frequency）。基频 $k=0$ 模式即工作模式，满足 $\omega_r\propto1/\sqrt{L_S(\Phi_m)}$，扫磁场即可原位调节腔频与阻抗——这是 SQUID 阵列路线相对材料路线的独有优势，历史上同一结构也被用于制备[[readout-measurement/parametric-amplifier|参量放大器]]。

### 高动态电感材料腔

第二条路线利用强无序超导薄膜的动态电感（kinetic inductance）：库珀对具有惯性，交流驱动下无法瞬时响应，其动能 $E_k=\frac{1}{2}L_k I^2$ 形式上就是电感储能。对长 $l$、宽 $w$、厚 $h$ 的超导纳米线
$$
L_k=\frac{m_e\,l}{2n_s e^2 w h}
$$

$n_s$ 为库珀对密度。单位面积动态电感（方块电感，sheet inductance）$L_s=m_e/(2n_s e^2 h)$ 是选材的横向比较标准；单位长度电感 $L_0\propto1/(wh)$，因此工艺上尽量做窄中心导体、做薄薄膜（厚度受膜质量稳定性限制，典型 8–11 nm）。借助磁穿透深度 $\lambda^2(T)=m_e/(\mu_0 n_s(T) e^2)$ 可写成 $L_k(T)=\mu_0\lambda^2(T)\,l/(wh)$，故优先选择穿透深度大的材料；按 Ginzburg–Landau 关系 $n_s(T)\approx n_s(0)(1-T/T_c)$，动态电感在 $T\to T_c$ 时发散式增强。动态电感占总电感的比例 $\alpha=L_k/(L_k+L_m)$ 称动态电感分数，高阻抗腔中 $\alpha$ 可超过 90%。常用材料包括 NbTiN、TiN、NbN 与颗粒铝（granular aluminum）等。

**颗粒铝的超电阻量子实现**：grAl 薄膜的方块电感可达 2 nH/□（方块电阻指数依赖氧气流量），但高阻抗薄膜的复现性曾是主要障碍——蒸发参数的微小漂移就改变电阻。Janík 等人用**无线欧姆计**在蒸发过程中原位测量薄膜电阻，首次实现了动力学电感的可控沉积：阻抗超过 $13\ \mathrm{k}\Omega$（超过电阻量子 $R_Q\approx6.5\ \mathrm{k}\Omega$，见[[circuit-qed/superinductance|超电感]]）的 grAl CPW 腔现在可以复现地制备。把 7.9 kΩ 的 grAl 反射腔与平面锗三量子点集成（按 DQD 运行），实测强电荷-光子耦合 $g_c/2\pi=(566\pm2)$ MHz——远超此前量子点 cQED 器件（无序氮化物或 JJA 腔）约 3.8 kΩ 的阻抗上限（$g_c\propto\sqrt{Z}$，见[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]）。grAl 路线还兼容磁场（自旋比特必需）与剥离工艺，为高保真远程两比特门打开路径。

![[assets/figures/high-impedance-resonator/59ac00e73211050c679454e6743f3e82133dfa4609fe1cd6a0ebc8e237e13a7b.jpg]]

*7.9 kΩ grAl CPW 腔与锗量子点的集成：反射式谐振腔的 grAl 中心导体（深蓝，约 111 µm 长、200 nm 宽、25 nm 厚）延伸到九栅定义的三量子点区（本实验按双量子点运行）；插图为器件截面示意。图源：Janík et al. (2024)，Fig. 3(a,b)。*

![[assets/figures/high-impedance-resonator/a0c36b997cd053b80bf8df9eec7518ca2f5c48fc84112b0ba270e4aaa7267237.jpg]]

*强电荷-光子耦合的谱学证据：谐振腔微波谱随驱动频率与 DQD 失谐的变化——真空 Rabi 劈裂在电荷跃迁线处清晰可辨，耦合强度 $g_c/2\pi=566$ MHz 由劈裂直接读出。图源：Janík et al. (2024)，Fig. 4(a)。*

<!-- FIGURE: 两条路线对比：SQUID 阵列腔（磁通可调）与 NbTiN/TiN 纳米线腔的显微结构与等效电路 -->

### NbN 薄膜的动态电感标定

NbN 材料路线的定量地基来自 Zhang/Petta 组的系统标定：动态电感方块值可用两条独立途径提取。**直流途径**测正常态方块电阻 $R_\square^*$ 与临界温度 $T_C$，按 BCS 关系计算：

$$
L_{k,S}=\frac{\hbar R_\square^{*}}{\pi\Delta_0},\qquad \Delta_0=1.76\,k_B T_C
$$

其中 $\hbar$ 是约化普朗克常数、$\Delta_0$ 是零温超导能隙。**微波途径**用 hanger 式 λ/4 腔：一块芯片上 12 个不同长度的谐振腔共用中央传输线（中心导体 $a=10\ \mu$m、缝隙 $s=6.2\ \mu$m），总电感 $L=L_m+L_k$ 使 $f\propto1/\sqrt{L}$ 对长度 $l$ 拟合即得 $L_{k,S}$——30 nm 膜给出 20.9 pH/□，与直流值 19.3 pH/□ 一致（磁电感仅 $L_{m,S}=4.4$ pH/□）。

厚度扫描给出设计曲线：$t$ 从 52 nm 减到 15 nm，$R_\square^*$ 从 75.1 升到 273.9 Ω/□、$T_C$ 从 11.1 K 缓降到 9.2 K，$L_{k,S}$ 则从 9.4 涨到 **41.2 pH/□**；12.5 nm 膜最高 58.7 pH/□。对照组 50 nm Nb 膜只有 0.5 pH/□——NbN 的动态电感高出一至两个量级。换算到耦合增益：同设计 λ/2 腔从 50 nm Nb 换到 15 nm NbN，$Z_C\times5.6$，由 $g_{c(s)}\propto\sqrt{Z_C}\propto L^{1/4}$ 预期电荷（自旋）–光子耦合 **2.4×** 增强——把过去 $g_c\approx58$ MHz 量级的器件推向更深强耦合区的直接路径（且避开 SQUID 阵列与自旋比特磁场的冲突）。

![[assets/figures/high-impedance-resonator/zhang2023-fig2b-hanger-resonators-s21.jpg]]
*hanger 式 λ/4 腔芯片的微波表征：$|S_{21}(f)|$ 上 12 个不同长度腔的谐振 dip（红色标注，30 nm NbN 膜），插图为单个 5.9 GHz 谐振的放大。图源：Zhang et al. (2023), Fig. 2(b)。*

![[assets/figures/high-impedance-resonator/zhang2023-fig2c-frequency-vs-length.jpg]]
*谐振频率对腔长的依赖：$f\propto1/l$ 的传输线模型拟合（实线，总电感含动态电感贡献）给出 30 nm NbN 膜 $L_{k,S}=20.9$ pH/□，与直流提取一致。图源：Zhang et al. (2023), Fig. 2(c)。*

![[assets/figures/high-impedance-resonator/zhang2023-fig3-lks-thickness-dependence.jpg]]
*$L_{k,S}$ 的厚度依赖：直流（跨超导转变的输运）与微波（hanger 腔拟合）两种提取途径在全部厚度上一致；低于 50 nm 后 $L_{k,S}$ 快速上升，12.5 nm 膜达 58.7 pH/□。图源：Zhang et al. (2023), Fig. 3。*

高 $L_k$ 薄膜的第二个用途是**片上 LC 滤波器**：量子点直流栅线上的微波泄漏是腔 $Q$ 与比特 $T_1$ 的隐形杀手，用 NbN 薄膜做的紧凑 LC 滤波器在典型腔频 $f_c=8$ GHz 附近提供最高 60 dB 衰减，占用面积比此前设计显著缩小——材料研究直接转化为 cQED 器件的布线工程。

![[assets/figures/high-impedance-resonator/zhang2023-fig4-lc-filters.jpg]]
*两种片上 LC 滤波器设计的 $|S_{21}(f)|$（实线测量、虚线仿真）：高动态电感 NbN 使滤波器在 8 GHz 腔频附近达到最高 60 dB 衰减，同时保持紧凑脚印。图源：Zhang et al. (2023), Fig. 4。*

## 参数与量级

本站论文中实际制备并用于量子点耦合实验的高阻抗腔：

| 腔型 | $Z_r$ | $\omega_r/2\pi$ | $\kappa/2\pi$ | 关键工艺参数 | 来源 |
| --- | --- | --- | --- | --- | --- |
| 常规 50 Ω CPW 腔（参照） | 50 Ω | 4–8 GHz | 视耦合设计而定 | 标准阻抗匹配 | — |
| SQUID 阵列反射腔 | 约 1 kΩ | 磁通可调 | 约 30–60 MHz | 38 个 SQUID 串联，Al/AlO$_x$/Al 双角度斜蒸发 | |
| NbTiN 透射腔 | 约 2 kΩ | GHz 量级 | 约 11 MHz | 11 nm 膜，中心导体 $w\approx0.32$ µm，距地 20 µm | |
| TiN $\lambda/2$ 腔 | 约 3.5 kΩ | 4.993 GHz | 2.2 MHz | 10 nm 膜，$T_c\approx3.5$ K，$L_k=265.9$ pH/□ | |
| NbN hanger 式 λ/4 腔（15 nm 膜） | 由 $L_{k,S}=41.2$ pH/□ 设计 | 2–8 GHz 可设计 | — | $t$ 15–52 nm 标定：$L_{k,S}$ 41.2→9.4 pH/□；12.5 nm 最高 58.7 pH/□ | Zhang 2023 |
| NbN 片上 LC 滤波器 | — | — | 8 GHz 附近衰减至 60 dB | 高 $L_k$ NbN 紧凑设计 | Zhang 2023 |

耦合强度的实际收益：2017 年 Wallraff 组用 SQUID 阵列腔把 GaAs 双量子点的耦合从早期 $g/2\pi\approx6.7$ MHz 提升到 $g/2\pi\approx119$ MHz 并首次实现门控量子点的[[circuit-qed/strong-coupling|强耦合]]；论文的 NbTiN 高阻抗反射腔上测得两个电荷比特的 $2g_0/2\pi$ 分别为 74 MHz 与 119 MHz；论文的 3.5 kΩ TiN 腔支撑了 $g_0/2\pi=175$ MHz 的电荷比特强耦合。半导体 cQED 对腔阻抗的典型设计目标为 $1\sim2$ kΩ。

## 耗散与实验特征

腔的总耗散 $\kappa=\kappa_\mathrm{ext}+\kappa_\mathrm{int}$，品质因数 $Q=\omega_r/\kappa$。外部耗散来自与馈线的耦合电容，端口 $\nu$ 处

$$
\kappa_\nu=\frac{2}{\pi}\,\omega_r^3\,Z_r Z_{0,\nu}\,C_{\mathrm{ext},\nu}^2
$$

注意 $\kappa_\nu\propto Z_r$：阻抗越高，同样的耦合电容下外耦合越强，因此高阻抗腔必须显著减小耦合电容才能保持临界耦合，这也是高阻抗腔难以直接匹配 50 Ω 馈线的定量根源。内部耗散的主要通道是超导准粒子电阻损耗、介质与[[materials-devices/interface-defects|界面缺陷]]中的二能级系统（two-level system，TLS）介电损耗，以及量子点电极的微波泄漏——后者常在量子点电极上集成片上滤波器抑制。

测量上，用矢量网络分析仪测透射/反射系数即可提取 $\omega_r$、$\kappa$ 与 $Q$：

$$
S_{21}(\omega)=\frac{\sqrt{\kappa_1\kappa_2}}{i(\omega_r-\omega)+\kappa/2},\qquad
S_{11}(\omega)=\frac{\kappa_\mathrm{ext}}{i(\omega_r-\omega)+\kappa/2}-1.
$$

实际谱线常因寄生传输通道、阻抗失配或感容混合耦合而偏离对称洛伦兹线型，拟合时需引入 Fano 因子修正；高阻抗腔中细线与介质参与度更高，这类不对称尤为常见。

## 设计代价与局限

- **损耗随阻抗上升**：细线、薄膜与强电场增大了表面与介质 TLS 的参与度；SQUID 腔中结参数不均匀与氧化层缺陷使 $\kappa/2\pi$ 达 30–60 MHz，材料腔（NbTiN）可把 $\kappa/2\pi$ 压到约 11 MHz、TiN 腔到 2.2 MHz。
- **磁场兼容性**：SQUID 阵列的电感由磁通调控，对外磁场极其敏感，与需要面内磁场的自旋比特实验冲突；高动态电感材料腔（尤其 NbTiN，$T_c$ 高、临界场大）磁场抗性更好，是自旋–光子耦合实验的主流选择。
- **非线性与功率上限**：SQUID 阵列只在光子数较少时线性；动态电感材料的非线性同样在强驱动下显现。
- **匹配与封装**：高 $Z_r$ 使外耦合设计窗口变窄（$\kappa_\nu\propto Z_r C_\mathrm{ext}^2$），电极引线还引入微波泄漏通道；倒装焊（flip-chip）三维集成被提出用于隔离电极耗散与介电损耗、进一步提高 $Q$。
- **量子点侧的代价**：为获得大电偶极矩常需增大点间距或调整栅极结构，与[[materials-devices/charge-noise|电荷噪声]]保护、比特操控之间存在折衷。

## 与其他概念的关系

高阻抗腔是[[circuit-qed/microwave-resonator|微波谐振腔]]在半导体 cQED 中的专用形态：它放大的是[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]的全局强度 $g_0$，而实际进入[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]的有效耦合 $g_\mathrm{eff}=g_0\sin\theta$ 还取决于量子点的混合角。阻抗提升直接服务于[[circuit-qed/strong-coupling|强耦合]]判据 $g>\kappa,\gamma$ 的达成与[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]的观测；在色散区，它同时放大色散频移 $\chi=g^2/\Delta$，提升[[readout-measurement/dispersive-readout|色散读出]]的信噪比与灵敏度。经[[materials-devices/micromagnet|微磁体]]获得电荷混合的自旋比特（[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]，$g_s\propto g_c$）同样受益于高阻抗；多个比特共享高阻抗腔模则构成[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]的硬件基础。[[circuit-qed/squid-array-resonator|SQUID 阵列腔]]词条详述其磁通可调性与阵列电磁学。阻抗超过电阻量子的定量定义与 JJA 动力学电感的完整表征（内耗、自谐振、相位滑移率）见[[circuit-qed/superinductance|超电感与约瑟夫森结阵列]]。高临界场氮化物材料（NbTiN/NbN）同时是[[circuit-qed/field-resilient-resonator|耐磁场超导谐振腔]]的材料基础——高阻抗与磁场兼容两条需求在选材上合流。

## 参考文献

- Zhang, X., Zhu, Z., Ong, N. P., Petta, J. R. Developing high-impedance superconducting resonators and on-chip filters for semiconductor quantum dot circuit quantum electrodynamics (2023). arXiv:2306.16499（QAtlas 缓存：2306.16499）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
