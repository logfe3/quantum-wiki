---
title: Jaynes–Cummings 模型
description: 描述旋转波近似下单个二能级系统与单量子谐振模式交换激发的基础模型。
aliases:
  - JC模型
  - J-C模型
  - Jaynes-Cummings模型
tags:
  - 电路量子电动力学
  - 模型
date: 2026-09-08
---

<div class="entry-lead">Jaynes–Cummings 模型把复杂杂化器件约化成一个二能级和一个腔模，直接给出共振交换、真空 Rabi 劈裂和色散频移。</div>

## 历史与物理图像

1963 年，E. T. Jaynes 与 F. W. Cummings 为比较量子与半经典辐射理论，提出了一个二能级原子与单模量子化光场相互作用的最小模型，即今天的 Jaynes–Cummings 模型（Jaynes–Cummings model，JC 模型）。模型预言：当原子跃迁频率与腔模频率匹配且损耗足够小时，激发态原子会与腔内真空涨落场相干地吸收、辐射光子；这一真空 Rabi 振荡（vacuum Rabi oscillation）于 1996 年在里德堡原子（Rydberg atom）实验中首次被观测。

在[[circuit-quantum-electrodynamics|电路量子电动力学]]（cQED）中，"原子"由超导电路或半导体量子点中的人工二能级（电荷、自旋或杂化比特）扮演，"腔"由[[microwave-resonator|微波谐振腔]]扮演。JC 模型因此成为理解量子点–腔杂化系统全部核心现象——[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]、[[readout-measurement/dispersive-readout|色散读出]]、[[cavity-mediated-coupling|腔介导耦合]]——的共同语言。

<!-- FIGURE: cQED 参数空间图：以耦合强度 g 与失谐 Δ 划分共振耦合、准色散耦合与色散耦合区间 -->

## 从 Rabi 模型到 JC 哈密顿量

出发点是与单个谐振模式偶极耦合的二能级系统，由量子 Rabi 模型（quantum Rabi model）描述：

$$
H_{\mathrm{Rabi}}/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z
+g\left(a^\dagger+a\right)\left(\sigma_++\sigma_-\right),
$$

其中 $a^\dagger$、$a$ 是腔光子的产生、湮灭算符，$\omega_r$ 是腔模频率，$\omega_q$ 是比特跃迁频率，$\sigma_z$、$\sigma_\pm$ 是比特的泡利算符与升降算符，$g$ 是单光子耦合强度。相互作用项展开后含两类过程：$a^\dagger\sigma_-+a\sigma_+$ 描述激发在比特与腔之间的相干交换（总激发数守恒）；$a^\dagger\sigma_++a\sigma_-$ 描述比特与光子同时激发或同时弛豫的反旋项（counter-rotating terms）。

当系统满足旋转波近似（rotating-wave approximation，RWA）条件

$$
g\ll\omega_q,\omega_r,\qquad |\omega_q-\omega_r|\ll|\omega_q+\omega_r|,
$$

反旋项以约 $\omega_q+\omega_r$ 的频率快速振荡、平均为零，可以略去，得到 JC 哈密顿量：

$$
H_{\mathrm{JC}}/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z
+g\left(a^\dagger\sigma_-+a\sigma_+\right).
$$

在相互作用绘景中，交换项显出失谐依赖：$H_I/\hbar=g\left(a\sigma_+ e^{i\Delta t}+a^\dagger\sigma_- e^{-i\Delta t}\right)$，其中 $\Delta=\omega_q-\omega_r$ 为比特–腔失谐。对半导体量子点体系，$g$ 需要由器件微观参数计算：以双量子点电荷比特为例，$g_{\mathrm{eff}}=g_0\sin\theta=2t_c g_0/(\hbar\omega_q)$，其中 $\theta$ 是混合角，$t_c$ 是点间隧穿耦合；而全局耦合强度 $g_0=\frac{1}{2}\beta\omega_r\sqrt{Z_r/(\pi\hbar)}$ 正比于谐振腔特征阻抗 $Z_r$ 的平方根——这正是[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]路线提升耦合强度的理论依据。

## 本征态与 JC 阶梯

RWA 之后总激发数 $\hat{N}=a^\dagger a+\sigma_+\sigma_-$ 与哈密顿量对易，希尔伯特空间按激发数 $n$ 分解为相互独立的二维子空间 $\{|g,n\rangle,|e,n-1\rangle\}$（外加基态 $|g,0\rangle$）。逐块对角化得到缀饰态（dressed states）：

$$
\begin{aligned}
|{+},n\rangle&=\sin\phi_n\,|g,n\rangle+\cos\phi_n\,|e,n-1\rangle,\\
|{-},n\rangle&=\cos\phi_n\,|g,n\rangle-\sin\phi_n\,|e,n-1\rangle,
\end{aligned}
$$

混合角 $\phi_n=\frac{1}{2}\arctan\!\left(2g\sqrt{n}/\Delta\right)$，相应本征能量

$$
E_{g,0}=-\frac{\hbar\Delta}{2},\qquad
E_{\pm,n}=n\hbar\omega_r\pm\frac{\hbar}{2}\sqrt{4ng^2+\Delta^2}.
$$

这组随激发数逐层排列的本征态称为 JC 阶梯（Jaynes–Cummings ladder）。第 $n$ 层的劈裂 $\hbar\sqrt{4ng^2+\Delta^2}$ 随 $\sqrt{n}$ 增长，这一非线性标度是 JC 模型区别于两个经典耦合振子的标志性量子特征。

<!-- FIGURE: JC 阶梯能级图：左为共振（Δ=0）时 |g,n⟩ 与 |e,n−1⟩ 杂化出 2g√n 劈裂；右为大失谐时腔频 ±g²/Δ 偏移、比特频率获 (2n+1)g²/Δ 修正 -->

## 共振耦合：真空 Rabi 振荡与劈裂

按 $g$ 与 $\Delta$ 的相对大小，耦合行为分为共振区（$|\Delta|<g$）、准色散区（$g<\Delta<10g$）与色散区（$|\Delta|>10g$）。

共振（$\Delta=0$）时缀饰态是最大混合态 $|\pm,n\rangle=(|g,n\rangle\pm|e,n-1\rangle)/\sqrt{2}$，能级劈裂为 $2g\sqrt{n}$。若初态制备为 $|e,0\rangle=\frac{1}{\sqrt{2}}(|{+},1\rangle-|{-},1\rangle)$，系统演化为

$$
|\psi(t)\rangle=\cos(gt)\,|e,0\rangle+i\sin(gt)\,|g,1\rangle,
$$

即一个激发以速率 $g$ 在比特与空腔之间往返——真空 Rabi 振荡。频域上，$|\pm,1\rangle$ 之间 $2g$ 的间隔表现为透射/反射谱中的[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]，是实验提取 $g$ 的最直接手段；在自旋比特体系中测得的劈裂可达 $2g_s/2\pi=43.5$ MHz，在电荷比特体系中全局耦合可达 $g_0/2\pi=175$ MHz。观察到劈裂还要求谱线可分辨，即进入[[circuit-qed/strong-coupling|强耦合]]区 $g>\kappa,\gamma$；此时系统的有效总耗散为 $\Gamma_{\mathrm{eff}}=(\kappa+\gamma)/2$。

## 色散耦合：腔频移动与量子非破坏读出

大失谐 $|\Delta|\gg g$（实用判据 $|\Delta|>10g$）时，比特与腔不再交换实光子。以 $g/\Delta$ 为小量做二阶微扰（Schrieffer–Wolff 变换），JC 哈密顿量化为色散形式

$$
H_{\mathrm{disp}}/\hbar\approx\left(\omega_r+\frac{g^2}{\Delta}\sigma_z\right)a^\dagger a
+\frac{1}{2}\left(\omega_q+\frac{g^2}{\Delta}\right)\sigma_z.
$$

定义色散频移 $\chi=g^2/\Delta$。从腔的角度看，腔频依比特态移动 $\pm\chi$：比特处于基态（$\langle\sigma_z\rangle=-1$）与激发态（$+1$）时腔频偏移方向相反。测量腔的透射或反射相位即可推断比特态，且该测量算符与比特哈密顿量对易，构成量子非破坏测量（quantum nondemolition measurement，QND），是[[readout-measurement/dispersive-readout|色散读出]]的理论基础。

把同一哈密顿量按比特项整理，

$$
H_{\mathrm{disp}}/\hbar\approx\omega_r a^\dagger a
+\frac{1}{2}\left(\omega_q+2\chi\,a^\dagger a+\chi\right)\sigma_z,
$$

可见比特频率也获得两项修正：与腔内光子数成正比的 $2\chi n$ 称为交流斯塔克频移（ac Stark shift），可用来标定腔内光子数；与光子数无关的 $\chi$ 来自真空涨落，称为兰姆频移（Lamb shift）。能从谱上分辨比特态（或光子数）要求 $\chi>\kappa,\gamma$，满足此条件的系统称为处于强色散区（strong dispersive regime）。

## 参数与量级

半导体量子点 cQED 实验中的典型参数（取自本站论文依据所列工作）：

| 参数 | 典型量级 | 说明 |
| --- | --- | --- |
| 腔频 $\omega_r/2\pi$ | 约 5–7 GHz（如 4.993、7.332 GHz） | 需与比特频率匹配 |
| 比特频率 $\omega_q/2\pi$ | 2–20 GHz | 随器件与编码方式变化 |
| 自旋–光子耦合 $g_s/2\pi$ | 约 7–22 MHz | 劈裂 $2g_s/2\pi$ 最大测得 43.5 MHz |
| 电荷–光子耦合 $g_c/2\pi$ | 约 175 MHz，最大 619 MHz | 619 MHz 对应 $g_c/\omega_r\sim0.11$，进入超强耦合区 |
| 腔耗散 $\kappa/2\pi$ | 约 2–8 MHz | 高阻抗腔品质因数可达数千 |
| 比特退相干 $\gamma/2\pi$ | 自旋约 2–5 MHz，电荷约 50–100 MHz | 决定强耦合判据 $g>\kappa,\gamma$ |

## 实验可观测量

JC 物理通过腔的散射参数进入测量。透射式腔的透射系数

$$
S_{21}(\omega)=\frac{-i\sqrt{\kappa_1\kappa_2}}{\omega_r-\omega+g_c\chi_c-i\kappa/2},
$$

其中比特的响应通过磁化率 $\chi_c=g_c/(-\Delta+i\gamma)$ 进入，$\gamma=\gamma_1/2+\gamma_\phi$ 汇总弛豫与退相位。按实部、虚部分解，比特同时移动腔频与展宽：

$$
\omega_r'=\omega_r-\frac{g_c^2\Delta}{\Delta^2+\gamma^2},\qquad
\kappa'=\kappa+\frac{2g_c^2\gamma}{\Delta^2+\gamma^2}.
$$

色散区（$|\Delta|\gg g_c$）实部主导，$\Delta\omega_r\approx g_c^2/\Delta$，与微扰论结果一致；近共振区虚部主导，比特为腔光子打开额外耗散通道，腔线展宽、可见度下降。扫描比特频率穿过腔频时，避免交叉（avoided crossing）的最小间距给出 $2g$；调节双量子点失谐 $\varepsilon$ 还会通过 $\sin\theta$ 因子调制耦合，使劈裂在 $\varepsilon=0$ 处最大。

## 适用边界与推广

- **反旋项**：当 $g/\omega_r$ 达到约 0.1（超强耦合区，ultrastrong coupling），RWA 失效，JC 模型须回到完整 Rabi 模型；电荷比特–腔耦合已在这一边界实现（$g_c/\omega_r\sim0.11\pm0.01$）。
- **多能级推广**：量子点常有多个轨道、谷与电荷态。当耦合强度远小于腔内跃迁能量差时，可直接推广为多能级 JC 模型 $H=H_{\mathrm{dot}}+\hbar\omega_r a^\dagger a+g\tau_z(a^\dagger+a)$，其中 $\tau_z$ 是各点占据数加权的广义偶极算符；配合量子朗之万方程与输入输出理论即可计算腔响应。
- **损耗与驱动**：真实拟合必须加入 $\kappa$、弛豫 $\gamma_1$ 与退相位 $\gamma_\phi$；强周期驱动下的修饰谱需[[floquet-dynamics|Floquet]] 描述。
- **多比特共享腔模**：在色散区对共同腔模取二阶微扰，可得到比特间的[[cavity-mediated-coupling|腔介导有效交换作用]] $\sim g_1g_2/\Delta$。

## 与其他概念的关系

JC 模型是[[circuit-quantum-electrodynamics|电路量子电动力学]]的最小构件：其共振极限对应[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]与[[circuit-qed/strong-coupling|强耦合]]判据；色散极限对应[[readout-measurement/dispersive-readout|色散读出]]与 QND 测量。在半导体实现中，"二能级"可以是[[qubit-control/charge-qubit|电荷比特]]（电偶极强、退相干快）、经微磁体或自旋轨道机制获得电荷混合的[[circuit-qed/spin-photon-coupling|自旋比特]]，以及多量子点杂化编码；耦合的微观大小由[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]的杠杆臂、混合角与腔阻抗决定。

## 延伸阅读

- E. T. Jaynes, F. W. Cummings, "Comparison of quantum and semiclassical radiation theories with application to the beam maser", Proceedings of the IEEE (1963). [DOI: 10.1109/proc.1963.1664]
- A. Wallraff et al., "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics", Nature (2004). [DOI: 10.1038/nature02851]
- A. Blais et al., "Cavity quantum electrodynamics for superconducting electrical circuits: An architecture for quantum computation", Physical Review A (2004). [DOI: 10.1103/PhysRevA.69.062320]
- A. Blais, A. L. Grimsmo, S. M. Girvin, A. Wallraff, "Circuit Quantum Electrodynamics", Reviews of Modern Physics (2021). [DOI: 10.1103/RevModPhys.93.025005]

## 论文依据

- [[sources/zhang-miaolei-2014|张苗磊 2014]]，PDF p. 80：JC 模型哈密顿量（式 6.1–6.3）与按激发数分块对角化；pp. 83–84：强色散区与弱色散区的划分及其测量含义。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF p. 15：JC 模型的提出（1963）与里德堡原子真空 Rabi 振荡；pp. 28–30：旋波近似条件、缀饰态与本征能量（式 2.2–2.9）、色散哈密顿量、ac Stark 与 Lamb 频移、强耦合与强色散判据；p. 45：腔透射/反射响应公式与最强电荷比特耦合 619 MHz（$g_c/\omega_r\sim0.11$）；p. 116：超强耦合区 JC 模型失效的讨论。
- [[sources/lin-ting-2022|林霆 2022]]，PDF pp. 37–40：Rabi 模型到 JC 模型的旋波近似推导、缀饰态（式 2.39–2.44）、共振/准色散/色散区间划分、真空 Rabi 振荡与劈裂、色散频移与 ac Stark/Lamb 频移（式 2.45–2.46）。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 38–39：JC 模型推导、相互作用绘景与共振/色散两种极限（式 2.37–2.48）；p. 40：耦合强度公式 $g_0=\frac{1}{2}\beta\omega_r\sqrt{Z_r/\pi\hbar}$ 与 2–20 GHz 比特频率范围；pp. 55、62、78：$f_r=4.993$ GHz 与 $\kappa/2\pi=2.2$ MHz 的腔参数、$g_0/2\pi=175$ MHz 强耦合提取、$2g_s/2\pi=43.5$ MHz 自旋真空 Rabi 劈裂。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 63–64：三量子点–腔杂化系统的多能级 JC 模型（式 3.2–3.4）与量子朗之万方程、输入输出边界条件。
