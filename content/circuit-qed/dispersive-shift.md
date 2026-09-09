---
title: 色散频移
description: 二能级系统远离共振时，通过虚光子交换把谐振腔有效频率按比特态平移 g²/Δ 的二阶微扰现象，是色散读出与腔介导耦合的共同基础。
aliases:
  - 色散耦合
  - ac Stark 频移
  - dispersive shift
tags:
  - 电路量子电动力学
  - 读出与测量
date: 2026-09-08
---

<div class="entry-lead">当比特频率远离腔频时，两者不再交换实光子，但量子涨落仍允许它们通过虚光子相互作用：腔的有效频率被比特态平移 $g^2/\Delta$，比特频率被光子数平移 $2\chi n$——这三种频移统称为色散频移，构成色散读出与腔介导耦合的共同基础。</div>

## 物理图像

[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]] 描述的共振极限（$|\Delta|\ll g$）让比特与腔每周期交换一次激发，产生[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]与[[circuit-qed/strong-coupling|强耦合]]判据。当比特–腔失谐 $|\Delta|=|\omega_q-\omega_r|$ 远大于耦合强度 $g$（实用判据 $|\Delta|>10g$），实光子过程被能量守恒抑制，比特与腔不能直接交换激发，但量子力学的零点涨落仍然允许它们通过"虚光子"（virtual photon）交换能量——这是量子场论中"虚过程"在电路量子电动力学里的直接类比。

把这种虚过程累加到二阶，结果是三项可观测量级的小修正：

- **腔频依比特态平移** $\pm g^2/\Delta$：基态、激发态对应两个略有不同的腔频，差值为 $2\chi$，$\chi=g^2/\Delta$；
- **比特频率的光子数依赖**：腔内光子数 $n$ 把比特频率推 $2\chi n$，是腔内光子数的内禀标尺；
- **比特频率的常数项修正**：$\chi$，来自真空涨落，与光子数无关。

这三项共同构成"色散频移"（dispersive shift）的完整图景——它在英文文献里有时专指腔频的 $\pm g^2/\Delta$，有时泛指上述所有 $g^2/\Delta$ 量级的修正。本词条按本站惯例，把"色散频移"作为涵盖这三者的总称。

色散频移把"比特态"与"腔频"绑在一起，使测量腔的相位或频率响应成为比特态的非破坏性读出指针——这正是[[readout-measurement/dispersive-readout|色散读出]]的理论核心；同时它也通过虚光子把多个比特耦合到同一腔模，构成[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]的桥梁。

<!-- FIGURE: 三项色散频移的统一图示：横轴 $|\Delta|/g$，标注共振区（强耦合）与色散区（$\chi>\kappa,\gamma$）；纵轴分别画腔频平移、比特 ac Stark、Lamb 三条曲线 -->

## 理论模型

### 色散极限的 Schrieffer–Wolff 推导

起点是[[circuit-qed/jaynes-cummings-model|JC 哈密顿量]]（取 $\hbar=1$）

$$
H_{\mathrm{JC}}=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g\left(a^\dagger\sigma_-+a\sigma_+\right).
$$

把相互作用视作"腔比特非微扰部分"上的小扰动，定义失谐 $\Delta=\omega_q-\omega_r$，并令 $\lambda=g/\Delta\ll 1$。对 JC 哈密顿量做 Schrieffer–Wolff 幺正变换

$$
R=\exp\!\left[\lambda(a^\dagger\sigma_- - a\sigma_+)\right],
$$

把 $R$ 展开到 $\lambda$ 的二阶项（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 31），得到色散极限下的等效哈密顿量

$$
H_{\mathrm{disp}}\approx\left(\omega_r+\frac{g^2}{\Delta}\sigma_z\right)a^\dagger a+\frac{1}{2}\left(\omega_q+\frac{g^2}{\Delta}\right)\sigma_z.
$$

第一项显示腔的有效频率依比特态移动 $\pm g^2/\Delta$，定义**色散频移**

$$
\chi\equiv\frac{g^2}{\Delta}.
$$

第二项是比特侧的两项修正：与光子数 $n=a^\dagger a$ 成正比的 $2\chi n$ 称为**交流斯塔克频移**（ac Stark shift），它把比特频率当作腔内光子数的"内禀电压表"；与光子数无关的 $\chi$ 称为**兰姆频移**（Lamb shift），它源自真空涨落（[陈明博 2021]([[sources/chen-mingbo-2021]])，PDF p. 30；[林霆 2022]([[sources/lin-ting-2022]])，PDF p. 26）。把同一哈密顿量按比特项整理，可以等价写成

$$
H_{\mathrm{disp}}\approx\omega_r a^\dagger a+\frac{1}{2}\left(\omega_q+2\chi\,a^\dagger a+\chi\right)\sigma_z,
$$

由此 ac Stark 频移把比特频率变成光子数的函数：腔内多一个光子，比特频率移动 $2\chi$。

> **取名记号**：英文文献中 "dispersive shift" 常专指腔频移动 $\chi=g^2/\Delta$；本站与林霆 2022 把"ac Stark shift"与"Lamb shift"并列为 $\chi$ 量级修正的两类。本词条统称三者即"色散频移"。

### 半导体量子点中的耦合强度

把上面的 $g$ 替换为器件的微观参数：对双量子点电荷比特，全局耦合（overall coupling strength）

$$
g_0=\frac{1}{2}\beta\omega_r\sqrt{Z_r/(\pi\hbar)},
$$

其中 $\beta=C_L/C_\Sigma$ 是杠杆臂，$Z_r$ 是谐振腔的特征阻抗（[江顺利 2025]([[sources/jiang-shunli-2025]])，PDF p. 40）。有效耦合 $g_{\mathrm{eff}}=g_0\sin\theta=2t_c g_0/(\hbar\omega_q)$，$\theta=\arctan(2t_c/\varepsilon)$ 是双量子点混合角。把 $g$ 替换为 $g_{\mathrm{eff}}$ 即得到半导体量子点的色散频移

$$
\chi_{\mathrm{eff}}=\frac{g_{\mathrm{eff}}^2}{\Delta}.
$$

色散耦合的强度因此直接受高阻抗腔 $Z_r$ 的放大——这正是半导体 cQED 几乎全部依赖[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]路线的核心理由。

### transmon 的多能级修正

对 transmon 这类多能级比特，色散频移的公式需要加入非谐性 $\alpha$ 的修正。把 JC 模型替换为含三次非线性项的多能级模型

$$
\hat H=\hat H_{\mathrm{lin}}+\frac{\hbar\alpha}{2}\,b^\dagger b^\dagger b b,
$$

做 Bogoliubov 变换对角化线性部分后，色散哈密顿量的腔频修正变为（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 32）

$$
\chi=\frac{g^2\alpha}{\Delta(\Delta+\alpha)}\simeq\frac{g^2\alpha}{\Delta^2}.
$$

当 $|\Delta|\gg|\alpha|$（transmon 通常满足）时，分母的 $\alpha$ 修正使 $|\chi|$ 比 JC 模型的 $g^2/\Delta$ 小得多；同时 $\chi$ 与 $\alpha$ 同号——transmon 的负非谐性使 $\chi<0$（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 40）。这个非谐性修正决定了 transmon 色散读出的"参数空间位置"，不能直接套用 JC 公式。

## 色散哈密顿量的三种解读

### 腔视角：腔频按比特态平移

$$
\tilde\omega_{r,\pm}=\omega_r\pm\chi.
$$

固定探测微波频率 $\omega_p$，比特态切换导致腔的相位响应出现 $\pm\chi$ 的移动；提取 $\chi$ 的最直接方式是扫描 $\omega_p$ 穿过裸腔响应曲线，比特态切换时整条曲线左右平移 $\pm\chi$。这是所有[[readout-measurement/dispersive-readout|色散读出]]实验的测量出发点。

### 比特视角：频率分两段修正

$$
\tilde\omega_q(n)=\omega_q+\chi+2\chi n.
$$

第一段 $\chi$（Lamb 频移）与光子数无关，仅来自真空涨落；第二段 $2\chi n$（ac Stark 频移）随腔内光子数线性变化。给定 $\chi$，把比特频率拟合到探测微波功率 $P_p$ 的函数即可反推腔内平均光子数 $n_p$——[林霆 2022]([[sources/lin-ting-2022]])，PDF p. 49）正是用这一方法在 Si/SiGe 双量子点上获得 $n_p\sim 1$ 的弱探测区。

### 测量视角：QND 条件

色散哈密顿量中测量算符（即腔某一相位分量）与比特泡利 $\sigma_z$ 对易：$[\hat M,\sigma_z]=0$。[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 61）把这一点写得很清楚——色散读出满足量子非破坏测量（quantum nondemolition, QND）条件，因此末态不被读出动作破坏，可用于多次同基测量、容错纠错与实时反馈。

## 参数与量级

色散频移的实用大小由三个参数共同决定：耦合 $g$、失谐 $\Delta$、以及比特非谐性 $\alpha$（transmon）。下表汇总本站论及的几个代表性工作以及本仓库论文给出的实验提取值。

| 体系 / 来源 | $g/2\pi$ | $\Delta/2\pi$ | 非谐 $\alpha/2\pi$ | $\chi/2\pi$（实验或公式） |
| --- | ---: | ---: | ---: | ---: |
| GaAs DQD + NbTiN 反射腔（[陈明博 2021]([[sources/chen-mingbo-2021]])，PDF p. 116） | $g_c/2\pi\sim 100$ MHz | 较大 | — | 比特态切换引起腔频几个 MHz 量级移动 |
| Si/SiGe RDQD + TiN 腔（[江顺利 2025]([[sources/jiang-shunli-2025]])，PDF p. 62） | $g_0/2\pi=175$ MHz | 调谐范围覆盖 $\omega_r=4.993$ GHz | — | 由 $\chi=g^2/\Delta$ 给出 |
| Si/SiGe RDQD 翻转模式自旋（[江顺利 2025]([[sources/jiang-shunli-2025]])，PDF p. 78） | $g_s/2\pi=21.75$ MHz | 偏离腔频若干 GHz | — | ac Stark 频移可见；读出由 $\chi$ 提供 |
| GaAs DQD + SQUID 阵列腔（[林霆 2022]([[sources/lin-ting-2022]])，PDF pp. 48、63） | $g/2\pi=103$ MHz | $\omega_a=5.565$ GHz、$\omega_r=6.53$ GHz | — | $\chi/2\pi=11$ MHz 实测 |
| transmon + 共面腔（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 40） | $g/2\pi$ 由约瑟夫森能决定 | 工作点远离非谐 | $\alpha/2\pi\sim -200$ MHz | $|\chi|$ 由 $\chi=g^2\alpha/\Delta^2$ 给出；$\chi<0$ 与 $\alpha$ 同号 |
| transmon 单发读出（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 32） | 几十 MHz | $\sim 6$ GHz | $\alpha/2\pi\sim -250$ MHz | $|\chi|/2\pi\sim 1$ MHz 量级 |

> 自旋比特的色散频移通常比电荷比特小一到两个量级：[江顺利 2025]([[sources/jiang-shunli-2025]])，PDF p. 78）测得 $2g_s/2\pi=43.5$ MHz，对应 $\chi_s/2\pi$ 仅约百 kHz 量级，需更高 $Q$ 腔或更长积分时间才能稳定读出。

## 实验特征与测量方法

### 静态提取：扫频 + 双色调制

最常见的实验提取方法是组合使用"扫频探测"与"双色调制"：

1. **扫频探测**：固定比特工作点，扫描探测微波频率 $\omega_p$ 穿过裸腔响应曲线，比特基态、激发态分别对应一条谐振曲线 $\omega_r\pm\chi$；两条曲线在 $\chi>\kappa/2$ 时肉眼可分，在 $\chi>\kappa$ 时进入强色散区（[陈明博 2021]([[sources/chen-mingbo-2021]])，PDF p. 30）；
2. **双色调制（two-tone spectroscopy）**：固定 $\omega_p=\omega_r-\chi$ 测量比特频率，扫描驱动微波频率 $\omega_d$，比特共振时腔的响应回到 $\omega_r$。把测得的 $\omega_a$ 与 $\chi$ 代入 $\chi=g^2/\Delta$ 即可反推 $g=\sqrt{\chi(\omega_a-\omega_r)}$——[林霆 2022]([[sources/lin-ting-2022]])，PDF pp. 47–48 提出方法，PDF p. 63 实测 $\chi/2\pi=11$ MHz、$g/2\pi=103$ MHz。

### 动态提取：ac Stark 与 Lamb 频移

固定探测微波频率，改变驱动脉冲长度 $t_d$，比特谱线随 $2\chi n$ 移动——这是 ac Stark 频移的直接观察。在固定 $t_d$ 但改变探测微波功率 $P_p$ 时，比特频率的一次项系数 $\alpha_{\mathrm{fit}}$ 满足

$$
\alpha_{\mathrm{fit}}P_p=2n_p\chi=\Delta\omega_a-\chi,
$$

由此可得腔内平均光子数 $n_p=\alpha_{\mathrm{fit}}P_p/(2\chi)$——[林霆 2022]([[sources/lin-ting-2022]])，PDF p. 49）用此方法测出 $n_p\sim 1$ 的弱探测区。当 $n_p\to 0$（极弱探测）时残留的 $\chi$ 即 Lamb 频移，可用真空涨落来源自洽。

### 透射与反射的散射参数

通过输入–输出理论，透射式共面波导腔的透射系数为（[陈明博 2021]([[sources/chen-mingbo-2021]])，PDF p. 45；[林霆 2022]([[sources/lin-ting-2022]])，PDF p. 28）

$$
S_{21}(\omega)=\frac{-i\sqrt{\kappa_1\kappa_2}}{\omega_r-\omega+g_c\chi_c-i\kappa/2},
$$

其中 $\chi_c=g_c/(-\Delta+i\gamma)$ 是比特磁化率，$\gamma=\gamma_1/2+\gamma_\phi$ 汇总弛豫与纯退相位。按实部、虚部分解即得

$$
\omega_r'=\omega_r-\frac{g_c^2\Delta}{\Delta^2+\gamma^2},\qquad
\kappa'=\kappa+\frac{2g_c^2\gamma}{\Delta^2+\gamma^2}.
$$

色散极限（$|\Delta|\gg g_c$）下实部主导，$\Delta\omega_r\approx g_c^2/\Delta$；近共振区虚部主导，比特为腔光子打开额外耗散通道——这是色散读出与"比特展宽"两类实验现象的判据。

### 临界光子数与色散近似的边界

色散极限本身有适用范围：当腔内光子数超过**临界光子数**（critical photon number）

$$
n_{\mathrm{crit}}=\frac{\Delta^2}{4g^2}\simeq\frac{|\Delta|}{4|\chi|}\gg 1,
$$

色散展开失效，必须回到完整 JC 或 Rabi 模型（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 33）。在 transmon 体系中一般要求 $n_p<n_{\mathrm{crit}}/10$ 以维持色散读出的可解释性。对 $|\Delta|/2\pi\sim 6$ GHz、$g/2\pi\sim 50$ MHz 的典型值，$n_{\mathrm{crit}}$ 在数十到一百量级——这一上限决定了色散读出的最大可用探测功率。

<!-- FIGURE: $|\Delta|/g$ 区间划分与临界光子数 $n_{\mathrm{crit}}$ 边界，纵轴画 $|\chi|$ 与 $n_p$ 关系 -->

## 测量诱导退相干与回作用

色散频移并非完全"免费"的读出工具。探测光子既提供信息也是扰动来源——在主方程中，色散读出引入两项额外的比特退相干通道：

- **测量诱导退相干（measurement-induced dephasing）**：$\Gamma_d(t)=2\chi\,\mathrm{Im}[\alpha_g(t)\alpha_e^\*(t)]$，随探测光子数增大而增大（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 33）；
- **ac Stark 频移的反作用**：比特等效频率被腔光场推 $\omega_{ac}(t)=\tilde\omega_q+2\chi\,\mathrm{Re}[\alpha_g\alpha_e^\*]$，强探测下比特频率显著偏离标定值。

把测量速率 $\Gamma_m(t)=\eta\kappa|\beta(t)|^2$（$\beta=\alpha_e-\alpha_g$，$\eta$ 是量子效率）与退相干速率之比定义为 $\eta=\lim_{t\to\infty}\Gamma_m/(2\Gamma_d)$——它是把"读出"与"扰动"统一起来的单标量（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 40）。$\eta=1$ 对应最大测量速率与最小退相干代价；$\eta=0$ 则只扰动不读出。

因此"调高探测功率"看似能提升 SNR，实则会同时增大 $\Gamma_d$、扭曲比特频率、并在 $n_p\to n_{\mathrm{crit}}$ 时破坏色散近似。优化的中心议题是把 SNR、读出速度与比特退相干三项代价一起压到阈值以下——这是[段鹏 2022]([[sources/duan-peng-2022]])，PDF pp. 37–40、p. 67）的"读取参数最优化设计"以及 Purcell 滤波器、量子极限参量放大器的存在理由。

## 与其他概念的关系

- **与[[circuit-qed/jaynes-cummings-model|JC 模型]]**：色散频移是 JC 模型在 $|\Delta|\gg g$ 极限下的二阶微扰结果；JC 阶梯在色散极限退化为腔频平移与比特 ac Stark/Lamb 三项修正。
- **与[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]**：共振极限的频域表现是两条极化激元谱线间距 $2g$；色散极限退化为腔频单线平移 $\pm\chi$——两条路径由 $|\Delta|/g$ 的相对大小相互切换。
- **与[[circuit-qed/strong-coupling|强耦合判据]]**：强耦合是色散频移可被观察的前提（$g$ 要大）；色散读出进一步要求 $\chi>\kappa,\gamma$ 的**强色散区**（strong dispersive regime）才能可靠分辨比特态。
- **与[[readout-measurement/dispersive-readout|色散读出]]**：色散频移是色散读出的物理基础；读出侧进一步引入主方程、SME、量子效率、SNR 与保真度的工程问题。
- **与[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]**与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]：$\chi=g^2/\Delta$ 把色散频移直接绑定到 $g$ 的微观来源；自旋比特经微磁体或自旋轨道获得的小 $g_s$ 给出 $\chi_s\ll\chi_c$。
- **与[[circuit-qed/cavity-mediated-coupling|腔介导远程耦合]]**：把多个比特共享同一腔模并在色散区做二阶微扰，可得两比特间的有效交换 $\sim g_1g_2/\Delta$——本质上是色散频移的"反向利用"。
- **与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]**：$g_0\propto\sqrt{Z_r}$ 决定了 $\chi\propto Z_r$；半导体 cQED 中 $\chi/2\pi$ 从弱耦合腔的 $\lesssim 1$ MHz 提升到高阻抗腔的数 MHz 量级，是[[circuit-qed/strong-coupling|强耦合]]与色散读出同时改善的关键。
- **与[[readout-measurement/purcell-filter|Purcell 滤波器]]**：减小 $\kappa$ 同时压窄读出带宽，会减小 $\chi/\kappa$ 区间；Purcell 滤波器在保护 $T_1$ 的同时必须保留足够的 $\chi/\kappa$。

## 设计经验：调出色散读出工作点

把色散频移从"理论预言"推到"实验可读"，本站几本论文总结了若干经验：

1. **避开源漏隧穿线**：源漏电子库隧穿会显著缩短电荷比特相干时间，$\gamma$ 急剧增大使得 $\chi>\gamma$ 不再成立（[林霆 2022]([[sources/lin-ting-2022]])，PDF pp. 43–45）；
2. **探测频率选在 $\omega_p=\omega_r-\chi$ 或 $\omega_r$ 上**：前者对小驱动功率敏感，后者在大功率下饱和但对频谱移动观察直接（[林霆 2022]([[sources/lin-ting-2022]])，PDF p. 47）；
3. **保持 $n_p\lesssim n_{\mathrm{crit}}/10$**：保证色散近似成立，同时把测量诱导退相干压到可接受范围（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 33）；
4. **同时优化 $\kappa$、$\eta$ 与 $\chi$**：SNR$\propto\chi^2/\kappa$ 与 $\eta t_m$，单纯减小 $\kappa$ 会拉长腔响应时间 $1/\kappa$，需配合 Purcell 滤波器与量子极限放大器（[段鹏 2022]([[sources/duan-peng-2022]])，PDF pp. 37–40）；
5. **transmon 体系需考虑非谐修正**：$\chi=g^2\alpha/\Delta(\Delta+\alpha)$ 而非 $g^2/\Delta$；$\chi$ 与 $\alpha$ 同号，负非谐性使 $\chi<0$（[段鹏 2022]([[sources/duan-peng-2022]])，PDF p. 40）；
6. **自旋比特的弱 $\chi$ 需要更长积分**：$\chi_s$ 通常比 $\chi_c$ 小一两个量级，必须用更高 $Q$ 腔或更长积分时间补偿。

## 延伸阅读

- D. I. Schuster et al., "ac Stark Shift and Dephasing of a Superconducting Qubit Strongly Coupled to a Cavity Field", *Physical Review Letters* (2005). [DOI: 10.1103/PhysRevLett.94.123602]
- A. Blais, R.-S. Huang, A. Wallraff, S. M. Girvin, R. J. Schoelkopf, "Cavity quantum electrodynamics for superconducting electrical circuits: An architecture for quantum computation", *Physical Review A* (2004). [DOI: 10.1103/PhysRevA.69.062320]
- A. Blais, A. L. Grimsmo, S. M. Girvin, A. Wallraff, "Circuit Quantum Electrodynamics", *Reviews of Modern Physics* (2021). [DOI: 10.1103/RevModPhys.93.025005]
- T. Walter et al., "Rapid High-Fidelity Single-Shot Dispersive Readout of Superconducting Qubits", *Physical Review Applied* (2017). [DOI: 10.1103/PhysRevApplied.7.054020]

## 论文依据

- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF p. 15：JC 模型与色散读出发展史；pp. 28–30：旋波近似与色散极限，色散哈密顿量推导（式 2.7）、色散频移 $\Delta\omega_r\approx g_c^2/\Delta$ 与腔频响应；pp. 28–30：比特 ac Stark 频移 $2ng^2/\Delta$ 与 Lamb 频移 $g^2/\Delta$ 的命名与解释，强色散区判据 $g^2/\Delta>\kappa,\gamma$；p. 45：$S_{21}$、$S_{11}$ 透射/反射公式与比特对腔频/线宽的影响（式 2.58–2.62）；p. 116：电荷比特最强耦合 $g_c/\omega_r\sim 0.11$ 与色散读出参数范围。
- [[sources/lin-ting-2022|林霆 2022]]，PDF pp. 25–26：色散耦合区（$|\Delta|\gg g$）的 Schrieffer–Wolff 推导、色散哈密顿量与 ac Stark、Lamb 频移（式 2.45–2.46）；p. 41：腔频 $\omega_r'=\omega_r+g^2\chi$ 修正与色散简化 $\chi=g^2/(\omega_a-\omega_r)$；pp. 47–48：双色调制频谱提取 $\chi=g^2/(\omega_a-\omega_r)$ 的方法；p. 63：实验测得 $|\chi|/2\pi=11$ MHz、$\omega_a=5.565$ GHz、$g/2\pi=103$ MHz；p. 49：利用 ac Stark 频移 $n_p=\alpha P_p/(2\chi)$ 测腔内光子数；pp. 53–55：色散读出原理与时间平均色散读出的相位响应公式 $\phi=\tan^{-1}(2g^2/\kappa\Delta)\sigma_z$（PDF p. 69 强调 $\chi/2\pi=11$ MHz 较小导致单发读出困难）。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF p. 40：全局耦合 $g_0=\frac{1}{2}\beta\omega_r\sqrt{Z_r/(\pi\hbar)}$ 与有效耦合 $g_{\mathrm{eff}}=g_0\sin\theta$；p. 62：Si/SiGe RDQD 与 TiN 腔 $\chi=g^2/\Delta$ 的色散频移提取；p. 78：RDQD 翻转模式自旋比特色散读出与 $2g_s/2\pi=43.5$ MHz 对应的弱 $\chi_s$；p. 100：RX 比特双色调制谱拟合与色散读出在共振交换比特中的应用。
- [[sources/duan-peng-2022|段鹏 2022]]，PDF p. 31：JC 哈密顿量色散极限的幺正变换 $R=\exp[\lambda(a^\dagger\sigma_--a\sigma_+)]$ 与二阶展开（式 2.11–2.12），明确命名"色散频移 $\chi=g^2/\Delta$"；p. 32：transmon 多能级修正 $\chi=g^2\alpha/[\Delta(\Delta+\alpha)]$、$|\chi|$ 较 JC 模型更小、$\chi$ 与 $\alpha$ 同号（式 2.19、2.16–2.18）；p. 33：临界光子数 $n_{\mathrm{crit}}=\Delta^2/(4g^2)$ 与色散近似失效条件；pp. 33–36：微波驱动下色散哈密顿量（式 2.21）、腔场稳态 $\alpha_{e/g}$、测量诱导退相干 $\Gamma_d=2\chi\mathrm{Im}[\alpha_g\alpha_e^\*]$ 与 ac Stark 频移 $\omega_{ac}$；p. 40：色散频移 $\chi$ 与 transmon 非谐 $\alpha$ 同号的物理解释；p. 61：测量算符 $\sigma_z$ 与色散哈密顿量对易，色散读出满足 QND 条件；pp. 37–40：SNR、量子效率 $\eta=\eta_{\mathrm{col}}\eta_{\mathrm{amp}}$、$\lim_{t\to\infty}\Gamma_m/(2\Gamma_d)=\eta$ 与读取参数最优化设计；pp. 7、120：六比特 transmon 芯片上 $300$–$500$ ns 积分、$98.14\%$ 单发读出保真度。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 63–64：三量子点–腔杂化系统的多能级 JC 模型（式 3.2–3.4）与量子朗之万方程、输入输出边界条件，色散哈密顿量在多能级量子点中的推广。
