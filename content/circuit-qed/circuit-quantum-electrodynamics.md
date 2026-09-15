---
title: 电路量子电动力学
description: 用量子化微波电路研究人工原子与单个或少量微波光子相互作用的框架。
aliases:
 - cQED
 - circuit QED
 - 电路量子电动学
tags:
 - 电路量子电动力学
 - 理论
date: 2026-09-08
---

<div class="entry-lead">电路 QED 把腔量子电动力学搬到芯片上：传输线或集总谐振器提供量子化电磁模式，超导电路或半导体量子点充当可调“人工原子”。</div>

## 从腔 QED 到电路 QED

腔量子电动力学（cavity QED，CQED）研究单个原子与高品质光学或微波腔中光子模式的相干相互作用。其标志性现象——真空 Rabi 振荡（vacuum Rabi oscillation），即激发态原子与腔内真空涨落场之间来回交换一个量子——于 1996 年在里德堡原子（Rydberg atom）穿过三维超导微波腔的实验中首次被观测。电路量子电动力学（circuit QED，cQED）是这套物理在固态芯片上的实现：2004 年，耶鲁大学的 R. J. Schoelkopf 等人从理论（A. Blais 等的架构设计）与实验（[[references/wallraff-2004|A. Wallraff 等的强耦合观测]]）两方面证明，超导电路比特与共面波导谐振腔可以完全复现 CQED 的核心物理，并具备片上集成与可扩展的优势。此后这一框架被推广到半导体量子点体系：以双量子点电荷、自旋等自由度充当"人工原子"，以片上超导微波谐振腔充当"腔"。

与原子 CQED 相比，cQED 有四点结构性差异：

- **人工原子不可移动且参数可调**：量子点的跃迁频率可经栅压、隧穿耦合或磁场在位调节，与腔的耦合强度也随之改变，实验上可以在同一器件内扫过共振与色散等不同区间；
- **一维准平面结构**：共面波导谐振腔是准一维结构，电磁能量集中在中心导体与地平面之间微米量级的间隙中，模式体积远小于三维腔，真空电场更强；
- **强电偶极矩**：双量子点的电荷偶极矩可达 $e\times d$（$d$ 为点间距，百纳米量级），远大于天然原子，耦合强度 $g$ 因而可以很大，甚至逼近超强耦合区；
- **环境更"脏"**：固态比特与衬底、电极环境耦合紧密，退相干率 $\gamma$ 通常远大于真实原子，这是半导体 cQED 长期难以进入强耦合区的主要障碍。

半导体 cQED 的早期实验（2011–2015 年）覆盖碳纳米管、InAs 纳米线、石墨烯与 GaAs/AlGaAs 异质结等多种材料，测得的耦合强度多在 $g/2\pi\sim 10$–$140\ \mathrm{MHz}$，但电荷比特退相干率高达数百 MHz 乃至 GHz 量级，系统整体停留在弱耦合区，只能用于腔辅助的比特态探测。转折点出现在 2016 年：L. M. K. Vandersypen 组提出用高动态电感材料（如 NbTiN）制备[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]，利用真空涨落场正比于 $\sqrt{Z_r}$ 的标度把耦合强度提升一个量级；2017 年 Wallraff、Ensslin 与 Ihn 合作组则实现了[[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]方案。在此基础上，2018 年前后多个小组先后实现了电荷比特与自旋比特的强耦合，半导体 cQED 进入与超导体系相当的参数区间。

<!-- FIGURE: 半导体 cQED 发展时间线：2011–2015 弱耦合探测期（各材料体系参数表）、2016 高阻抗腔转折、2018 起电荷与自旋强耦合 -->

## 理论模型

### 谐振腔的量子化

cQED 的"腔"本质上是一个量子化的电磁谐振模式。以最简的集总 LC 电路为例：电容储能 $\frac{1}{2}CV^2$、电感储能 $\frac{1}{2}LI^2$，取磁通 $\phi=LI$ 与电荷 $q$ 为广义坐标与广义动量，经典哈密顿量为

$$
H_{\mathrm{LC}}=\frac{q^2}{2C}+\frac{\phi^2}{2L}.
$$

由泊松括号 $\{\phi,q\}=1$ 直接正则量子化，$[\hat{\phi},\hat{q}]=i\hbar$，引入满足 $[a,a^\dagger]=1$ 的湮灭、产生算符后，哈密顿量化为量子简谐振子

$$
\hat{H}_r=\hbar\omega_r\left(a^\dagger a+\frac{1}{2}\right),\qquad \omega_r=\frac{1}{\sqrt{LC}}
$$

即[[circuit-qed/microwave-resonator|微波谐振腔]]的单模描述，通常略去零点能写成 $\hbar\omega_r a^\dagger a$。

实际器件更多使用分布式的共面波导谐振腔（coplanar waveguide resonator，CPW resonator）：中心导体宽 $w$、与两侧地平面间隔 $s$，电磁场在有限长度的传输线内形成驻波。其单位长度几何电容与几何电感由保角映射给出
$$
C_l=4\varepsilon_0\varepsilon_{\mathrm{eff}}\frac{K(k')}{K(k)},\qquad
L_l=\frac{\mu_0}{4}\frac{K(k')}{K(k)},\qquad
k=\frac{w}{w+2s},\quad k'=\sqrt{1-k^2}
$$

其中 $K$ 为第一类完全椭圆积分，$\varepsilon_{\mathrm{eff}}$ 为有效介电常数（衬底厚度远大于膜厚时 $\varepsilon_{\mathrm{eff}}\approx(1+\varepsilon_r)/2$）。与集总 LC 不同，CPW 腔支持一系列模式：两端开路的透射腔基模为半波长模式，频率 $\omega_0=1/(2l\sqrt{L_lC_l})$；一端短路的反射腔基模为 $\lambda/4$，高阶模频率为 $(2n+1)\omega_0$。腔频与长度 $l$ 成反比，设计灵活。超导（铝、铌、NbTiN 等）制成的腔电阻损耗可忽略，特征阻抗为

$$
Z_r=\sqrt{\frac{L_l}{C_l}}=\sqrt{\frac{L_r}{C_r}}.
$$

传统 CPW 腔为匹配商用微波器件取 $Z_r\approx 50\ \Omega$；而 cQED 恰恰需要偏离这一惯例——提高 $Z_r$ 即提高真空电场与耦合强度，这是高阻抗腔路线的出发点。真实腔的光子以速率 $\kappa=\kappa_i+\kappa_e$ 耗散：外部损耗 $\kappa_e$ 来自与馈线端口的耦合（透射腔为两端口之和），内部损耗 $\kappa_i$ 来自超导准粒子电阻、界面二能级系统介电损耗等通道。

### 原子–腔相互作用：Rabi 与 JC 哈密顿量

二能级"人工原子"与单腔模经电偶极相互作用耦合，最小模型为量子 Rabi 模型：

$$
H_{\mathrm{Rabi}}/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g\left(a^\dagger+a\right)\left(\sigma_-+\sigma_+\right)
$$

其中 $\omega_q$ 是比特跃迁频率，$g$ 是单激发耦合强度。绝大多数实验满足旋转波近似条件 $g\ll\omega_q,\omega_r$ 且 $|\omega_q-\omega_r|\ll|\omega_q+\omega_r|$，反旋项被平均掉，得到 [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]

$$
H_{\mathrm{JC}}/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g\left(a^\dagger\sigma_-+a\sigma_+\right)
$$

其缀饰态、JC 阶梯、真空 Rabi 劈裂与色散极限的完整推导见该词条。从 cQED 的角度看，系统的全部行为由三个速率分类：耦合强度 $g$、腔光子耗散率 $\kappa$、比特退相干率 $\gamma$。当 $g>\kappa,\gamma$ 时系统进入[[circuit-qed/strong-coupling|强耦合]]区，激发在丢失前可在比特与腔之间完成多次往返，有效总耗散为 $\Gamma_{\mathrm{eff}}=(\kappa+\gamma)/2$；在大失谐 $|\Delta|\gg g$ 的色散区，相互作用归结为频移 $\chi=g^2/\Delta$，当 $\chi>\kappa,\gamma$ 时进入强色散区，可以单发分辨比特态或腔内光子数。

### 耦合强度的微观来源

耦合强度 $g$ 由"比特偶极矩 × 腔真空电场"决定。对长度为 $l$、单位长度电容 $C_0$ 的谐振腔，其末端量子化电压为

$$
\hat{V}=\sqrt{\frac{\hbar\omega_r}{lC_0}}\left(a+a^\dagger\right).
$$

量子点经电容分压系数 $\nu$ 耦合到该电压；在电偶极近似下，相互作用哈密顿量 $\hat{H}_{\mathrm{int}}=\hat{\boldsymbol{d}}\cdot\hat{\boldsymbol{E}}$ 与 JC 形式的耦合项对比，给出全局耦合强度

$$
g_0=\frac{r\nu}{\hbar s}\sqrt{\frac{\hbar\omega_r}{lC_0}}
=\frac{1}{2}\beta\,\omega_r\sqrt{\frac{Z_r}{\pi\hbar}}
$$

其中 $r$ 为偶极矩大小、$s$ 为量子点到地平面的距离，$\beta$ 是量子点的差分杠杆臂因子。第二个等号代入 $Z_r=\sqrt{L_0/C_0}$，清楚地显示 $g_0\propto\sqrt{Z_r}$：阻抗每提高一个量级，耦合约增强三倍（$\sqrt{10}$ 倍），高阻抗腔（从 $50\ \Omega$ 到数 $\mathrm{k}\Omega$）因此是提升耦合的核心手段；另一条途径是提高杠杆臂因子 $\beta$，依赖电极与异质结结构设计。

全局耦合还要乘上比特本征态的偶极矩阵元才是有效耦合。以双量子点[[qubit-control/charge-qubit|电荷比特]]为例
$$
g_{\mathrm{eff}}=g_0\sin\theta=g_0\,\frac{2t_c}{\hbar\omega_q}
$$

其中 $\theta$ 为混合角、$t_c$ 为点间[[fundamentals/tunnel-coupling|隧穿耦合]]。耦合随失谐 $\varepsilon$ 通过 $\sin\theta$ 被调制，在简并点 $\varepsilon=0$ 处最大——实验中扫描栅压观察劈裂随 $\varepsilon$ 的变化即可验证这一预言。

## 参数空间与区间划分

cQED 实验可按耦合强度 $g$ 与失谐 $\Delta=\omega_q-\omega_r$（以最大退相干率 $\gamma$ 为单位归一化）划分成几个性质迥异的区间：

| 区间 | 条件 | 物理特征 | 典型用途 |
| --- | --- | --- | --- |
| 共振强耦合区 | $|\Delta|\ll g$，$g>\kappa,\gamma$ | 激发相干往返，能谱出现 $2g$ [[circuit-qed/vacuum-rabi-splitting\|真空 Rabi 劈裂]] | 量子态在比特与光子间转移 |
| 准色散区 | $g<\Delta<10g$ | 交换与频移并存 | 过渡区间 |
| 弱色散区 | $|\Delta|>10g$，$\chi<\kappa,\gamma$ | 腔频随比特态微小移动 | 连续弱测量、比特态探测、辐射控制延长相干 |
| 强色散区 | $|\Delta|>10g$，$\chi=g^2/\Delta>\kappa,\gamma$ | 谱上可分辨比特态与光子数 | [[readout-measurement/dispersive-readout\|色散读出]]、QND 测量、光子数分辨、新型比特编码 |

这一"相图"给出 cQED 的通用设计语言：同一个器件只需调节比特频率（栅压或磁场），就能在"交换量子信息"与"读出量子信息"两种模式间切换。

半导体量子点 cQED 的典型参数量级（取自本站论文中所列实验）：

| 参数 | 典型量级 | 说明 |
| --- | --- | --- |
| 腔频 $\omega_r/2\pi$ | 4–8 GHz（如 4.993、7.332 GHz） | 须与比特频率（2–20 GHz）匹配 |
| 腔耗散 $\kappa/2\pi$ | 约 0.5–8 MHz | 高阻抗腔品质因数可达数千 |
| 电荷–光子耦合 $g_c/2\pi$ | 数十 MHz，最大 619 MHz | 619 MHz 对应 $g_c/\omega_r\sim0.11$，逼近超强耦合 |
| 自旋–光子耦合 $g_s/2\pi$ | 约 7–22 MHz | 劈裂 $2g_s/2\pi$ 最大测得 43.5 MHz |
| 电荷比特退相干 $\gamma_c/2\pi$ | 约 100 MHz（硅基最优），早期 GaAs 达 0.4–1.1 GHz | 强耦合的主要瓶颈 |
| 自旋比特退相干 $\gamma_s/2\pi$ | 约 2–5 MHz | 自旋相干性好 1–2 个量级 |

<!-- FIGURE: 以 g/γ 与 Δ/γ 为轴的 cQED 参数相图，标注共振强耦合区、弱色散区与强色散区及其用途 -->

## 半导体实现：电荷与自旋两条路线

**电荷比特路线**利用双量子点间巨大的电荷偶极矩（$e$ 乘点间距），容易获得强耦合：有效耦合 $g_{\mathrm{eff}}=g_0\sin\theta$ 在简并点达到全局耦合 $g_0$，配合高阻抗腔已实现 $g_0/2\pi=175\ \mathrm{MHz}$（Si/SiGe），GaAs 体系更达到 619 MHz。代价是[[materials-devices/charge-noise|电荷噪声]]直接作用于比特频率，$\gamma_c$ 难以压到 100 MHz 以下，相干时间短。

**自旋比特路线**的相干性优 1–2 个量级（$\gamma_s/2\pi\sim$ 数 MHz），但电子自旋的磁偶极与腔电场天然不耦合。解决办法是为自旋人为引入少量电荷混合：在[[materials-devices/micromagnet|微磁体]]的梯度磁场 $\Delta B_x$ 中（等效于人造自旋轨道耦合），自旋本征态含有随点位置变化的电荷成分。此时有效自旋–光子耦合强度（以双量子点为例）为

$$
g_s=g_{\mathrm{eff}}\,\frac{g\mu_B\Delta B_x\,|\Delta_\tau|\cos\theta}{2\hbar\left(\Delta_\tau^2+\gamma_c^2\right)}
\;\xrightarrow{\ \varepsilon=0,\ |\Delta_\tau|\gg\gamma_c\ }\;
g_c\,\frac{g\mu_B\Delta B_x}{2\left(2t_c-\hbar\omega_r\right)}
$$

而自旋继承的退相干满足

$$
\frac{\gamma_s}{\gamma_c}\propto\left(\frac{\Delta B_x}{2t_c-\hbar\omega_r}\right)^2 .
$$

两式对比可见关键设计原则：$\gamma_s/\gamma_c$ 随电荷混合程度二次方缩小，而 $g_s/g_c$ 只按一次方缩小，因此**强电荷耦合并非强自旋耦合的必要条件**——用少量电荷混合换取远好于电荷比特的相干是划算的；代价是 $g_s$ 绝对值变小，须配合低损耗腔（强耦合条件 $g_s>\kappa^{*},\gamma_s$，其中 $\kappa^{*}$ 是腔内电荷比特负载后的腔展宽）。沿此思路，Si/SiGe 体系已实现 $2g_s/2\pi=43.5\ \mathrm{MHz}$ 的自旋真空 Rabi 劈裂。除微磁体外，[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]还可通过材料本身的自旋轨道耦合（如锗[[qubit-control/hole-spin-qubit|空穴自旋比特]]）或[[scaling-automation/flopping-mode-qubit|翻转模式]]（flopping-mode）编码增强，后者让电子在两个量子点间振荡以获得大偶极矩，已实现翻转模式比特与腔的强耦合及双比特经虚光子的[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]。

## 实验特征与测量

cQED 系统的信息几乎全部经腔的散射参数（$S_{11}$、$S_{21}$）读出：

- **避免交叉与真空 Rabi 劈裂**：扫描比特频率穿过腔频，透射/反射谱出现最小间距 $2g$ 的避免交叉（avoided crossing），是提取 $g$ 的最直接手段；
- **栅压扫描的色散响应**：即使弱耦合（$g$ 只有数 MHz），扫描栅压时腔反射相位与幅值仍在量子点能级与腔频"对上话"的位置移动。例如在双量子点的[[fundamentals/charge-stability-diagram|电荷稳定图]]中，点间跃迁线（interdot transition line）处电子在两点间转移，能级差 $\sqrt{(2t_c)^2+\varepsilon^2}\sim 10\ \mathrm{GHz}$ 与单光子能量（$\sim 26\ \mu\mathrm{eV}$）同量级，腔信号明显移动；而共隧穿线对应总电子数改变，能量尺度是[[fundamentals/charging-energy|充电能]]（$\sim 10\ \mathrm{meV}$），腔毫无响应。这一对比使腔本身成为成像电荷稳定图、提取 $g$、$t_c$ 与 $\gamma$ 的探针；
- **量子非破坏读出**：色散区测量算符与比特哈密顿量对易，投影测量不改变比特态，可重复测量提高保真度；
- **腔作为量子总线**：多个比特共享同一腔模，在色散区经虚光子交换产生远程有效耦合 $\sim g_1g_2/\Delta$，是实现毫米级长程比特耦合与两比特门的主流方案，直接回应大规模扩展中近邻相互作用作用距离过短的难题。


**学习路径导引**：面向初学者的全景综述（APS Reviews 类教学文）把超导比特设计谱系、耦合架构与测量方案组织成统一的学习框架——本站词条群恰好按这一框架分层展开：机制层（[[circuit-qed/jaynes-cummings-model|JC 模型]]→[[circuit-qed/strong-coupling|强耦合]]→[[circuit-qed/dispersive-shift|色散频移]]）、器件层（[[superconducting-qubits/transmon-qubit|transmon]]→[[superconducting-qubits/fluxonium-qubit|fluxonium]]→[[superconducting-qubits/gatemon-qubit|gatemon]]→[[superconducting-qubits/flowermon-qubit|flowermon]]）、应用层（[[readout-measurement/dispersive-readout|色散读出]]→[[circuit-qed/bosonic-cqed|玻色编码]]→[[scaling-automation/mmiqc-3d-integration|三维集成]]）。

![[assets/figures/circuit-quantum-electrodynamics/cd2c4de4d8ede86b79a08490585e9b68c96feaddc2be697732b3567b96dfec01.jpg]]

*cQED 学习框架总览：超导比特与电路量子电动力学的教学全景——器件谱系、耦合架构与测量方案的分层组织。图源：cQED 入门综述 (2018)，Fig. 1。*

![[assets/figures/circuit-quantum-electrodynamics/fcaabfd46fc72fb5ab78459d337aa3cf5ef60322f303184f84f4dc0fd6459844.jpg]]

*相干时间的指数提升：十五年间能量弛豫与退相干时间的演进——每代器件对应一类损耗机制的识别与压制。图源：cQED 入门综述 (2018)，Fig. 2。*

**方法论工具箱**：开放量子系统方法综述把比特建模的主方程族系统化——Lindblad（马尔可夫、跳跃算符）、Redfield（弱耦合、非马尔可夫修正）、Floquet-Markov（周期驱动）、 generalized master equations（强耦合）——各方法适用的耦合强度/记忆时间/驱动 regime 明确划分，是学习路径导引的方法论延伸。

![[assets/figures/circuit-quantum-electrodynamics/9e4e9bbfa222a786489024c75e8d351c4996b17fa9f98fa8dd4fa86ad46ab458.jpg]]

*开放量子系统方法地图：Lindblad/Redfield/Floquet-Markov 等主方程方法的适用 regime 划分——耦合强度与记忆时间两个轴。图源：arXiv:2402.19241，Fig. 1。*

![[assets/figures/circuit-quantum-electrodynamics/415ee6a52b2ca0ae241e8091ae39b430bb2884657be670df0e2b71b040cd8c46.jpg]]

*方法应用示例：不同主方程在具体比特系统上的预测对比——方法选择的实践指南。图源：arXiv:2402.19241，Fig. 2。*

**权威综述的二十年视角**（Blais/Schoelkopf/Girvin 系，Nature Physics 2020）：cQED 从 1999 年首次相干测量到量子纠错器件的二十年发展系统回顾——机制、器件、架构三条主线的演进脉络与每一步的驱动因素。与学习路径导引（前文）的入门综述互补：这篇是深度综述，覆盖物理细节与技术演进的完整因果链。

![[assets/figures/circuit-quantum-electrodynamics/8b596841b225d051308e9c3bdb827108a53182f3db1ac879110d69b60ca1b0c6.jpg]]

*cQED 二十年发展的系统框架：机制-器件-架构三条主线的演进。图源：Nature Physics 综述 (2020)，Fig. 1。*

![[assets/figures/circuit-quantum-electrodynamics/644cf51cf227b6bec0f08695c048d8871054bb77301f7a62260ebfa4a0231d6c.jpg]]

*技术演进因果链：相干时间提升-架构变化-纠错需求的关联。图源：Nature Physics 综述 (2020)，Fig. 2。*

## 与其他概念的关系

- 最小模型与全部能级结构见[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]；共振极限的标志性观测是[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]，进入它的判据是[[circuit-qed/strong-coupling|强耦合]]；大失谐极限支撑[[readout-measurement/dispersive-readout|色散读出]]与 QND 测量。
- 腔侧的实现路线：常规[[circuit-qed/microwave-resonator|微波谐振腔]]、提升耦合的[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与可调频的[[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]。
- 比特侧的耦合通道：[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]（强偶极、快退相干）与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]（微磁体、自旋轨道、[[scaling-automation/flopping-mode-qubit|翻转模式]]等电荷混合机制）。
- cQED 的更高层应用：腔不只是工具——[[circuit-qed/bosonic-cqed|玻色 cQED]]用谐振子的多能级空间直接编码容错量子比特，是 cQED 从"读出架构"到"计算平台"的方向延伸。
- 多比特扩展经[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]实现；比特的"人工原子"载体是[[fundamentals/semiconductor-quantum-dot|半导体量子点]]与[[fundamentals/double-quantum-dot|双量子点]]上的[[qubit-control/charge-qubit|电荷比特]]、[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/hole-spin-qubit|空穴自旋比特]]、[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]等编码。
- 性能瓶颈主要来自[[materials-devices/charge-noise|电荷噪声]]与材料界面质量（如[[materials-devices/silicon-sige|Si/SiGe]]、[[materials-devices/gaas-algaas|GaAs/AlGaAs]] 平台）；强驱动修饰谱需[[circuit-qed/floquet-dynamics|Floquet 动力学]]描述。
