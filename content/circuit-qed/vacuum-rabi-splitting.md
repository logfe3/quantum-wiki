---
title: 真空 Rabi 劈裂
description: 二能级系统与腔模在共振强耦合下，原本交叉的腔与比特谱线分裂成上、下两条相距约 2g 的杂化极化激元谱线。
aliases:
 - 真空拉比劈裂
 - vacuum Rabi splitting
 - 真空 Rabi 振荡
tags:
 - 电路量子电动力学
 - 谱学
date: 2026-09-08
---

<div class="entry-lead">即使腔中没有经典驱动光子，量子真空涨落也能与二能级相干地交换激发：共振时原本交叉的腔与比特谱线分裂成上、下两条杂化支，间距 2g 即"真空 Rabi 劈裂"——它是强耦合最直接的频域证据。</div>

## 物理图像与定义

真空 Rabi 劈裂（vacuum Rabi splitting）是把[[jaynes-cummings-model|Jaynes–Cummings 模型]]放在频域看的结果。腔内"零光子"状态的电磁场仍有量子涨落（零点能（zero-point fluctuation）），它的真空分量 $\langle a\rangle=0$、$\langle aa^\dagger\rangle\neq 0$ 仍能与紧邻的[[qubit-control/charge-qubit|二能级系统]]发生能量交换。当二能级跃迁频率 $\omega_q$ 与腔模频率 $\omega_r$ 之差 $\Delta=\omega_q-\omega_r$ 调至共振附近，腔–比特不再各自独立：本征模式变成两条极化激元（polariton）型的杂化支——上支 $|+,1\rangle$、下支 $|{-},1\rangle$，它们之间的最小能级差是 $2\hbar g$，其中 $g$ 是单光子耦合强度。在透射或反射谱中扫过这条劈裂正是实验上判定系统进入[[circuit-qed/strong-coupling|强耦合]]的最常用判据。

真空 Rabi 振荡（vacuum Rabi oscillation）是真空 Rabi 劈裂在时域的对偶现象：若初态为 $|e,0\rangle$，系统将以角频率 $2g$ 在 $|e,0\rangle\leftrightarrow|g,1\rangle$ 之间往返；该振荡首先在 1996 年里德堡原子（Rydberg atom）实验中观测到。

<!-- FIGURE: 真空 Rabi 劈裂的频域示意：横轴为比特失谐 Δ = ω_q − ω_r，未耦合的两条交叉线在共振处被推开 2g -->

## 理论模型：从 Rabi 模型到 JC 哈密顿量

出发点是与单模腔电偶极耦合的二能级系统，由量子 Rabi 模型描述：

$$
H_{\mathrm{Rabi}}/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g\left(a^\dagger+a\right)\left(\sigma_++\sigma_-\right).
$$

在[[circuit-quantum-electrodynamics|电路量子电动力学]]（cQED）常见的参数范围 $g\ll\omega_q,\omega_r$ 内，反旋项 $a^\dagger\sigma_++a\sigma_-$ 相对"正频项"以 $\omega_q+\omega_r$ 量级的频率快速振荡、平均为零，可被略去，得到 JC 哈密顿量

$$
H_{\mathrm{JC}}/\hbar=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g\left(a^\dagger\sigma_-+a\sigma_+\right).
$$

由于第三项只交换激发数（总激发数守恒），Hilbert 空间按激发数 $n$ 分解为相互独立的二维子空间 $\{|g,n\rangle,\,|e,n-1\rangle\}$。在该基下把 JC 哈密顿量逐块对角化，得到缀饰态（dressed states）

$$
\begin{aligned}
|+,n\rangle&=\sin\phi_n\,|g,n\rangle+\cos\phi_n\,|e,n-1\rangle,\\
|{-},n\rangle&=\cos\phi_n\,|g,n\rangle-\sin\phi_n\,|e,n-1\rangle
\end{aligned}
$$

混合角 $\phi_n=\frac{1}{2}\arctan\!\left(2g\sqrt{n}/\Delta\right)$，相应本征能量

$$
E_{g,0}=-\frac{\hbar\Delta}{2},\qquad
E_{\pm,n}=n\hbar\omega_r\pm\frac{\hbar}{2}\sqrt{4ng^2+\Delta^2}.
$$

将本征能量对激发数 $n$ 排列即得 JC 阶梯（Jaynes–Cummings ladder），每层 $n$ 上两支杂化态的能量差为

$$
\Delta E_n=\hbar\sqrt{4ng^2+\Delta^2}.
$$

在共振极限 $\Delta=0$ 下，缀饰态是最大混合态 $|\pm,n\rangle=(|g,n\rangle\pm|e,n-1\rangle)/\sqrt{2}$，能级劈裂 $\Delta E_n=2\hbar g\sqrt{n}$，按 $\sqrt{n}$ 增长——这一非线性标度是 JC 阶梯区别于两个经典耦合振子的标志性量子特征。

<!-- FIGURE: JC 阶梯：左半图为 Δ=0 时的 2g√n 劈裂阶梯；右半图为 |Δ|≫g 时腔频 ±g²/Δ 偏移与比特频率 (2n+1)g²/Δ 的 ac Stark 修正 -->

## 共振极限：避免交叉与 2g 劈裂

由上式可得单激发层（$n=1$）的极化激元频率

$$
\omega_\pm=\frac{\omega_q+\omega_r}{2}\pm\sqrt{g^2+\frac{\Delta^2}{4}}.
$$

这是真空 Rabi 劈裂的核心公式：

- $\Delta=0$ 时，$\omega_\pm=\omega_r\pm g$，两支最小间距为 $\hbar\cdot 2g$；固定 $\omega_r$ 扫描 $\omega_q$ 穿过共振，原本应"交叉"的两条谱线变为典型量子力学的**避免交叉**（avoided crossing）图像，最小间距即真空 Rabi 劈裂。
- $|\Delta|\gg g$ 时，$\sqrt{g^2+\Delta^2/4}\approx|\Delta|/2+g^2/|\Delta|$，上、下支分别趋近于 $\omega_q$、$\omega_r$，杂化模式几乎完全恢复"比特样"和"腔样"。
- 在 $g<|\Delta|<10g$ 的准色散区，$\omega_\pm$ 仍清晰可分但已不对称，振幅/相位响应随失谐交换，劈裂大小的拟合仍能给出可靠的 $g$，但必须同时拟合线宽与可见度。

真空 Rabi 劈裂之所以常被用作强耦合判据，是因为它由"系统本征值"决定，与驱动功率、温度占据无直接关联——只要能谱线可分辨，就必然 $g>\kappa/2,\gamma/2$（详见下文）。

## 远离共振：色散极限与缀饰态的振幅/相位

把 JC 哈密顿量按 $g/|\Delta|$ 做二阶微扰（Schrieffer–Wolff 变换）得到色散哈密顿量

$$
H_{\mathrm{disp}}/\hbar\approx\left(\omega_r+\frac{g^2}{\Delta}\sigma_z\right)a^\dagger a
+\frac{1}{2}\left(\omega_q+\frac{g^2}{\Delta}\right)\sigma_z.
$$

从腔的角度看，腔频依比特态移动 $\pm g^2/\Delta\equiv\pm\chi$；从比特角度看，比特频率获得 $(2n+1)g^2/\Delta$ 的修正，其中 $2\chi n$ 与腔内光子数 $n$ 成正比、称为交流斯塔克频移（ac Stark shift），与光子数无关的 $\chi$ 来自真空涨落、称为兰姆频移（Lamb shift）。这正是[[readout-measurement/dispersive-readout|色散读出]]与光子数标定的理论基础。

把避免交叉的数据放进 $g^2/(\Delta^2+\gamma^2)$ 的形式，可同时拟合两条谱线的频率移动 $\delta\omega_\pm$ 与线宽展宽 $\delta\kappa_\pm$：

$$
\omega_r'=\omega_r-\frac{g^2\Delta}{\Delta^2+\gamma^2},\qquad
\kappa'=\kappa+\frac{2g^2\gamma}{\Delta^2+\gamma^2}.
$$

上式表明：色散区虚部可忽略、$\delta\omega_r\approx g^2/\Delta$，近共振区实部与虚部同时变化、谱线既分裂又展宽。这是判断一个谱线移动到底是强耦合还是单纯色散响应的关键差异。

<!-- FIGURE: 三组代表性参数（电荷比特大 g、自旋比特小 g、准色散区）的避免交叉拟合结果对比 -->

## 强耦合判据与合作因子

"看到 2g 劈裂"等同于强耦合成立的充分证据。设 $g$ 为相干耦合速率，$\kappa$ 为腔的总衰减率（$\kappa=\kappa_i+\kappa_e$，分别来自内禀损耗与外端口耦合），$\gamma=\gamma_1/2+\gamma_\phi$ 为比特的退相干率（$\gamma_1$ 是能量弛豫、$\gamma_\phi$ 是纯退相位）。两个常见刻度：

- 强弱耦合边界：$g>\kappa,\gamma$，等价于两支极化激元谱线能彼此分辨。
- 合作因子（cooperativity）：$C=2g^2/(\kappa\gamma)$（或按某些教材定义为 $C=4g^2/(\kappa\gamma)$）；$C>1$ 表示相干交换速率超过损耗速率一次以上，但能否分辨谱线还需结合 $\kappa/2$、$\gamma$ 与拟合模型共同判定。

在本站论及的强耦合实验中给出双量子点电荷比特与 NbTiN 腔的全局耦合 $2g_{0,1}/2\pi\approx 74\ \mathrm{MHz}$、$2g_{0,2}/2\pi\approx 119\ \mathrm{MHz}$；也有实验报告单比特 $g/2\pi=81\ \mathrm{MHz}$、退相干 $\gamma/2\pi=65\ \mathrm{MHz}$；另有工作在 Si/SiGe 三量子点中获得电荷比特 $g_0/2\pi=175\ \mathrm{MHz}$、$\gamma_c/2\pi=99\ \mathrm{MHz}$，翻转模式自旋比特 $2g_s/2\pi=43.5\ \mathrm{MHz}$、$\gamma_s/2\pi=4.6\ \mathrm{MHz}$，所有这些系统都满足 $g>\kappa,\gamma$，因此真空 Rabi 劈裂可以直接在腔反射/透射谱上读出。

## 实验特征与参数提取

### 频域特征

把比特工作点固定在失谐可调的状态（典型方法是把双量子点的失谐量 $\varepsilon$ 与隧穿耦合 $2t_c$ 调至 $\omega_q=\sqrt{\varepsilon^2+(2t_c)^2}$ 接近 $\omega_r$），再扫描腔的探测频率 $f_p$：

- 共振点附近一条谱线分裂为两条，对称地落在 $\omega_r$ 两侧；
- 劈裂幅度 $\approx 2g$；拟合两条谱线的中点随失谐的移动可交叉验证 $\omega_r$ 与 $\omega_q$；
- 共振点处两条谱线的展宽几乎相同，等于 $(\kappa+\gamma)/2$ 的某种平均，是简化判据 $g>\kappa,\gamma$ 的直接证据。

### 拟合方法

若直接拟合避免交叉图，可将每条谱线分别用洛伦兹（Lorentzian）线型处理，提取每个失谐点上的中心频率 $\omega_\pm^\*$ 与展宽 $\kappa_\pm^\*$，然后用上面的极化激元频率公式与展宽公式同时拟合得到 $g$、$\gamma$ 与 $\omega_r$。当 $2g$ 与线宽可比、谱线明显不对称时，必须使用包含 $g\chi$ 的输入–输出反射率公式

$$
S_{11}=1+\frac{\kappa_i}{i(\omega_r-\omega)+g\chi-i\kappa/2},\qquad \chi=\frac{g}{i(\omega_a-\omega_p)+\gamma}
$$

整体拟合；若 $g$ 与 $\gamma$ 之间存在强相关，应先通过其他独立手段（如双色调制测出 $\omega_a$、$T_1$、$T_\phi$，或光子辅助隧穿测出 lever arm $\alpha$）固定部分参数，再做整体拟合。

### 时域对应

把比特从 $|g,0\rangle$ 出发、用 $\pi$ 脉冲激发到 $|e,0\rangle$，探测腔透射信号将呈现 $2g$ 振荡。这一时域上的真空 Rabi 振荡是频域劈裂的傅里叶对偶。在电荷比特体系中，振荡一般在数十纳秒内可见；自旋比特 $g$ 较小（典型 MHz 量级），振荡周期延伸至百纳秒以上，需要扣除 $T_2^\*$ 影响才能可靠提取。

### 可靠性边界

$2g$ 小于腔和比特的有效线宽时，劈裂无法分辨；反之，**两个无关模式**或**经典寄生共振**也可能产生避免交叉形谱线，因此不能仅凭"看到两条谱线"判定强耦合。可靠判据通常包含：

1. 同时拟合频率、线宽和可见度，三者一致地指向同一组 $g$、$\kappa$、$\gamma$；
2. 在大幅调节驱动功率、温度、磁场时，$2g$ 数值基本不变，仅线宽变化；
3. 失谐扫描下两条谱线的形状与 JC 模型的预言一致（包括混合角 $\phi_n$ 随 $\Delta$ 的非平凡调制）；
4. 与目标量子点的参数（隧穿耦合 $2t_c$、杠杆臂 $\alpha$、阻抗 $Z_r$）相互自洽。

<!-- FIGURE: 一组代表性的真空 Rabi 劈裂原始数据与拟合曲线，标注 g、κ、γ 的提取方法 -->

## 多比特与集体响应：增强真空 Rabi 劈裂

把多个量子比特同时与同一腔模耦合，JC 模型推广为 Tavis–Cummings 哈密顿量

$$
\hat H_{\mathrm{TC}}/\hbar=\omega_r a^\dagger a+\sum_k\frac{\omega_{a,k}}{2}\hat\sigma_{z,k}+\sum_k g_k\!\left(a^\dagger\hat\sigma_{-,k}+a\hat\sigma_{+,k}\right).
$$

两比特同时与腔共振（$\omega_{a,1}=\omega_{a,2}=\omega_r$）时，单光子子空间变为三维，本征态出现一个**暗态**（dark state）

$$
|0\rangle_C=\frac{1}{g_C}\!\left(g_{c,1}|ge,0\rangle-g_{c,2}|eg,0\rangle\right),\qquad g_C=\sqrt{g_{c,1}^2+g_{c,2}^2}
$$

它不含光子态成分，无法通过探测微波从基态 $|gg,0\rangle$ 跃迁，因此腔频谱上看不到中间那条线，只剩 $|+,1\rangle$、$|{-},1\rangle$ 两个相距 $2\hbar g_C$ 的本征态——**增强真空 Rabi 劈裂**（enhanced vacuum Rabi splitting）。

 在 SQUID 阵列腔中测得单比特 $g_1/2\pi=81\ \mathrm{MHz}$、$g_2/2\pi=80\ \mathrm{MHz}$，两者同时共振时 $2g_{\mathrm{eff}}/2\pi=2\times 112\ \mathrm{MHz}$，与 $\sqrt{g_1^2+g_2^2}\approx 113\ \mathrm{MHz}$ 的理论值一致。 在 NbTiN 反射腔中测得两比特 $2g_C/2\pi\approx 177\ \mathrm{MHz}$，但因每个比特到腔的耦合强度有限、比特退相干又较快，谱线宽度已接近 $2g$，因此只能定性确认集体增强，无法在此基础上进一步实现两比特门。

> 推广到 $N$ 个比特时，集体耦合强度 $g_C=\sqrt{\sum_k g_k^2}$，相应地在 $|+,1\rangle$、$|{-},1\rangle$ 之外出现 $N-1$ 个暗态；当各 $g_k$、$\omega_{a,k}$ 出现非均匀展宽时，多比特关联谱将退化为多个分立共振与展宽的叠加，这是[[scaling-automation/quantum-dot-array|多比特扩展]]的核心约束之一。

<!-- FIGURE: 两比特 Tavis-Cummings 增强劈裂的能级图与频谱：暗态 |0⟩_C 不可见，上、下支间距 2g_C -->

## 与其他概念的关系

- [[jaynes-cummings-model|Jaynes–Cummings 模型]]：真空 Rabi 劈裂是 JC 阶梯第 $n=1$ 层的频域表现；强耦合极限对应完全劈裂（$\omega_\pm=\omega_r\pm g$），色散极限对应二阶微扰给出的色散哈密顿量。
- [[circuit-qed/strong-coupling|强耦合判据]]：真空 Rabi 劈裂是强耦合的**充分**频域证据；合作因子 $C=2g^2/(\kappa\gamma)$ 衡量系统"相干交换相对损耗"的强度，但能否分辨谱线还依赖线宽定义与拟合模型。
- [[circuit-qed/charge-photon-coupling|电荷–光子耦合]]：双量子点电荷比特与腔的电偶极耦合 $g_c=g_0\sin\theta$（$\theta$ 为混合角），真空 Rabi 劈裂由此变成在 $\varepsilon=0$、$2t_c=\omega_r$ 时最明显的实验特征。
- [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]：自旋比特与微波腔的磁耦合极弱，借助自旋–轨道耦合或微磁体梯度场把电荷成分"借"给自旋，再现自旋真空 Rabi 劈裂（典型 $2g_s/2\pi$ 数 MHz 至数十 MHz）。
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]：把 $Z_r$ 提高到 $\mathrm{k\Omega}$ 量级，可显著增大全局耦合 $g_0$；本站多次测得的 74、81、119、175 MHz 量级都来自 NbTiN 纳米线腔或 SQUID 阵列腔。
- [[readout-measurement/dispersive-readout|色散读出]]：进入色散区 $|\Delta|>10g$ 后，避免交叉让位于腔频移动 $\pm g^2/\Delta$，劈裂消失，但比特态信息保留在腔响应里。
- [[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]：多比特同时处于强耦合区时，真空 Rabi 劈裂被增强为 $2g_C$；若仅一个比特处于色散区，则腔介导有效交换为 $\sim g_1g_2/\Delta$。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]：真空 Rabi 振荡是频域真空 Rabi 劈裂的傅里叶对偶；驱动 Rabi 振荡（$\Omega_R$）则属于外部驱动项，不属于真空场物理。
