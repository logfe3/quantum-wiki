---
title: Floquet 驱动动力学
description: 用周期哈密顿量的准能级与 Floquet 态统一描述强连续驱动量子系统的方法。
aliases:
  - Floquet 态
  - Floquet理论
  - Floquet 理论
  - 周期驱动动力学
  - Floquet 准能量
tags:
  - 电路量子电动力学
  - 强驱动
date: 2026-09-08
---

<div class="entry-lead">当量子点被强周期驱动时，"吸收一束独立光子"的图像会变得零散；Floquet 理论把时间周期性本身当作对称性，用准能量（quasienergy）把多光子跃迁、免交叉和布居重分布统一到一张能带图里。</div>

## 物理图像：把时间当晶格看

Floquet 理论（Floquet theory）处理的是形如 $H(t+T)=H(t)$ 的周期哈密顿量（角频率 $\Omega=2\pi/T$）。对这种系统，薛定谔方程允许如下形式解：

$$
|\psi_\alpha(t)\rangle=e^{-i\mu_\alpha t/\hbar}|u_\alpha(t)\rangle,\qquad |u_\alpha(t+T)\rangle=|u_\alpha(t)\rangle.
$$

$|u_\alpha(t)\rangle$ 是周期为 $T$ 的 Floquet 态（Floquet state），对应常数 $\mu_\alpha$ 称为准能量（quasienergy）。它与固体物理中 Bloch 定理的结构完全类比：空间周期 $\leftrightarrow$ 准动量 $q$ 对应于时间周期 $\leftrightarrow$ 准能量 $\mu$。把 $\mu$ 与态同时平移 $m\hbar\Omega$（$m\in\mathbb{Z}$）并把 $|u_\alpha(t)\rangle$ 乘上 $e^{im\Omega t}$，物理态 $|\psi_\alpha(t)\rangle$ 不变，因此 Floquet 谱天然按 $\hbar\Omega$ 划分成宽度为 $\hbar\Omega$ 的"布里渊区"，每个布里渊区内放一份独立的准能量谱副本。

物理上，每一份副本对应一组相差 $m$ 个驱动光子的[[qubit-control/photon-assisted-tunneling|光子辅助]]边带。原能级在驱动下被复制成无穷多条相差整数倍 $\hbar\Omega$ 的"侧带"，它们相遇时耦合产生免交叉（avoided crossing）：在免交叉点附近，参与作用的两条 Floquet 态交换物理性质，准能量曲线被推开但平均能量精确相交。该图像在量子点电荷比特的[[qubit-control/lzsm-interference|LZSM 干涉]]中表现为条纹随驱动幅度 $A_d$ 的非平凡周期调制；在耦合到腔的杂化系统中表现为腔辅助 LZSM 条纹与月牙形孔洞（陈明博 2021，第 6 章）。

<!-- FIGURE: Floquet 准能量谱示意：横轴为失谐 $\varepsilon$，纵轴为准能量 $\mu_\alpha$，展示一组镜像排列的 Floquet 边带与免交叉点位置 -->

## 准能量、布里渊区与免交叉

把 Floquet 态做傅里叶展开 $|u_\alpha(t)\rangle=\sum_n c_\alpha^{(n)}e^{in\Omega t}$，并把 $\{c_\alpha^{(n)}\}$ 视为扩展 Hilbert 空间（extended Hilbert space）$\mathcal{H}_0\otimes\mathcal{H}_T$——Sambe 空间——的"基矢展开系数"，即可把含时薛定谔方程改写为与时间无关的矩阵本征值问题

$$
H_F|u\rangle=\mu|u\rangle,
$$

其中

$$
\langle\alpha,n|H_F|\beta,m\rangle=\frac{1}{T}\int_0^T \langle\alpha|H(t)|\beta\rangle\,e^{-i(n-m)\Omega t}\,dt+m\hbar\Omega\,\delta_{\alpha\beta}\delta_{nm}.
$$

$H_F$ 是 Floquet 矩阵，本身无穷维；数值上做截断 $|n|\le n_{\max}$，迭代 $n_{\max}$ 直到相邻两次的 $\mu$ 相对变化小于给定精度（例如 $1\%$）。在驱动双量子点这类小 Hilbert 空间问题中，$n_{\max}=30$ 通常已足够（陈明博 2021，式 6.18 与 §6.1.2）。

求解得到准能量 $\mu_\alpha$，把它们按 $\hbar\Omega$ 周期折叠到一个第一布里渊区（first Brillouin zone）内：$-\tfrac{1}{2}\hbar\Omega<\mu_\alpha\le\tfrac{1}{2}\hbar\Omega$。Floquet 谱形如固体能带：能带之间可以靠得很近但不真正相交，构成免交叉点。在免交叉处 Floquet 态交换物理性质，准能量与平均能量

$$
\bar{E}_\alpha=\frac{1}{T}\int_0^T \langle u_\alpha(t)|H(t)|u_\alpha(t)\rangle\,dt
$$

的行为不同——$\mu_\alpha$ 受斥推开，$\bar{E}_\alpha$ 精确相交。这是 Floquet 态动力学中"准能量共振条件 $\mu/h\approx kf_d$"与"平均能量/布居条件 $\bar{E}_\alpha=\bar{E}_\beta$"分道扬镳的根源，也是后续"双共振 LZSM"与"月牙孔洞"等现象的能谱基础（陈明博 2021，§6.1–6.5）。

## 双量子点电荷比特的 Floquet 哈密顿量

把 Floquet 理论应用到门控[[fundamentals/double-quantum-dot|双量子点]]（DQD）的电荷比特——即[[qubit-control/charge-qubit|电荷比特]]——上时，可以给出"如何由器件参数算出 Floquet 矩阵"的标准示例。设 DQD 在 $\{|L\rangle,|R\rangle\}$ 基矢下的含时哈密顿量为

$$
H(t)=\tfrac{1}{2}\varepsilon(t)\,\tau_z+t_c\,\tau_x,\qquad \varepsilon(t)=\varepsilon_0+A_d\cos(\Omega t).
$$

这里 $\varepsilon_0$ 是失谐偏移量，$A_d$ 是驱动幅度，$\Omega=2\pi f_d$ 是驱动角频率，$t_c$ 是点间隧穿耦合。把 Floquet 形式解 $|\psi(t)\rangle=\sum_n e^{in\Omega t-i\mu t/\hbar}(c_L^{(n)}|L\rangle+c_R^{(n)}|R\rangle)$ 代入薛定谔方程，可得系数递推关系（陈明博 2021，式 6.17）

$$
\begin{aligned}
-\tfrac{1}{2}\varepsilon_0\,c_L^{(n)}+t_c\,c_R^{(n)}-\tfrac{1}{4}A_d\!\left(c_L^{(n+1)}+c_L^{(n-1)}\right)&=(\mu-n\hbar\Omega)\,c_L^{(n)},\\
\tfrac{1}{2}\varepsilon_0\,c_R^{(n)}+t_c\,c_L^{(n)}+\tfrac{1}{4}A_d\!\left(c_R^{(n+1)}+c_R^{(n-1)}\right)&=(\mu-n\hbar\Omega)\,c_R^{(n)}.
\end{aligned}
$$

按 $\{|c_L^{(n)}\rangle,|c_R^{(n)}\rangle\}$ 顺序排列即得 Floquet 矩阵 $H_F$ 的三对角块结构（陈明博 2021，式 6.18）：对角块含 $\pm\tfrac{1}{2}\varepsilon_0$ 与 $t_c$，每个块通过 $\tfrac{1}{4}A_d$ 与左右邻块耦合，整体加上 $n\hbar\Omega$ 的等差阶梯。截断后数值对角化即得 $\mu_\alpha$ 与 $|u_\alpha(t)\rangle$。

物理上，每一对 $(L,n),(R,n)$ 描述"电荷在 $\{|L\rangle,|R\rangle\}$ 之一、并吸收了 $n$ 个驱动光子"的态；$\tfrac{1}{4}A_d$ 把它们与相邻光子数块耦合，于是 Floquet 边带直接显式地描述了[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]（photon-assisted tunneling）的多光子过程。同一套结构也适用于门控电压驱动或磁通驱动，只需把 $\varepsilon(t)$ 替换为相应的含时失谐。

## 开放系统：Floquet-Bloch-Redfield 与稳态占据

实际的半导体量子点总会与声子库、电荷噪声库等环境耦合。Floquet 理论在封闭系统下只给出 $|u_\alpha(t)\rangle$ 的"骨架"；要把体系带到稳态并给出 Floquet 态占据概率 $p_\alpha$，需要把 Bloch–Redfield 主方程推广到 Floquet 表象。顾思思 2023（第 2.5.2 节、附录 4.C）采用 Floquet-Bloch-Redfield 理论：

- 以 Floquet 态 $\{|u_\alpha(t)\rangle\}$ 作为 Liouville 空间的基矢，写出非微扰 Liouvillian $\mathcal{L}(t)$ 的传播子 $\mathcal{U}(t,t')$；
- 在弱耗散近似（Markovian bath）下，Bloch–Redfield 张量 $R_{\alpha\beta\gamma\delta}$ 由环境关联函数的 Fourier 分量给出；
- 取长时间极限得到稳态 $\{p_\alpha\}$：通常系统优先占据平均能量最低的 Floquet 态；但在准能量免交叉附近，两个 Floquet 态的混合系数 $p_0\approx p_1\approx 1/2$，使系统从近纯态过渡到最大混合态。

开放系统框架下 Floquet 理论的几种常见近似之间的差别：

| 理论 | 近似条件 | 适用 |
| --- | --- | --- |
| 纯 Floquet 定理 | 无耗散 | 理想封闭系统、谱学结构 |
| Floquet-Bloch-Redfield | 系统–库耦合弱（Born）、记忆短（Markov） | 半导体量子点典型条件 |
| Floquet-Lindblad | 时间局域主方程，$\mathcal{L}_F$ 为定常 Floquet-Lindbladian | 高频驱动、近简并 |
| Floquet 速率方程 | Born–Oppenheimer 类，慢自由度近似 | 电荷隧穿主导 |

弱耗散意味着可以把 Bloch–Redfield 张量对环境关联函数做 Fourier 分量分解，并在每个 $(n,m)$ 通道独立求和；这正是顾思思 2023 附录 4.C 中给出的具体计算过程。

## 腔作为 Floquet 探针：相位平均磁化率

把[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（circuit QED，cQED）腔引入后，Floquet 态的占据、准能量差以及 Floquet 态–腔跃迁矩阵元都会进入可观测响应。受驱双量子点–腔杂化系统在色散区（探测频率 $\nu_p$ 接近 $\nu_r$）的反射信号为（陈明博 2021，式 6.19）

$$
S_{11}=1+\frac{i\kappa_i}{2\pi\nu_r-2\pi\nu+g_c^2\chi^{(0)}(\nu)-i\kappa/2},
$$

其中相位平均磁化率（phase-averaged susceptibility）

$$
\chi^{(0)}(\nu)=(p_0-p_1)\sum_k\frac{|Z_{10,k}|^2}{2\pi\nu-(\mu_1-\mu_0)/h+kf_d+i\gamma/2}
$$

是 Floquet–腔耦合的核心可观测量。式子由三部分组成：

1. 准能量共振条件 $\mu/h=2\pi\nu+k'f_d$（$k'$ 整数）——保证分母为零；
2. 占据差 $p_0-p_1\approx\pm 1$——保证 $|p_0-p_1|\approx 1$；
3. Floquet 矩阵元 $Z_{10,k}=\tfrac{1}{T}\int_0^T \langle u_0(t)|\tau_z|u_1(t)\rangle e^{-i k\Omega t}dt$ 的第 $k$ 阶傅里叶分量——保证非零的"边带跃迁"。

由于 $\chi^{(0)}$ 包含 $p_0-p_1$ 这一占据因子，Floquet 态在免交叉附近的重分布会直接通过 $\chi^{(0)}$ 反映到腔信号上。这是 Floquet 动力学之所以能"被腔读到"的根本机制。顾思思 2023（第 4 章附录 4.B）给出了与之对应的透射公式

$$
S_{21}(\omega)=\frac{i\sqrt{\kappa_1\kappa_2}}{(\omega_r-\omega)+g^2\chi(\omega)-i\kappa/2}+q,
$$

其中 $\chi(\omega)$ 是双量子点系统在 Floquet 表象下的响应函数，$q$ 描述腔线型偏差；二者均按 $(p_\alpha-p_\beta)|Z_{\alpha\beta,k}|^2/[\omega+(\mu_\alpha-\mu_\beta)-k\Omega+i\gamma/2]$ 的形式对所有 Floquet 态对 $(\alpha,\beta)$ 与边带阶 $k$ 求和（式 4.4）。同一框架的更一般版本（顾思思 2023，式 5.14–5.16）把驱动–腔–量子点视作一个整体，由非平衡微扰理论（Kubo 型响应）给出 $a(\omega)=\chi^{(0)}(\omega)\xi(\omega)$，再代入输入输出边界得 $S_{21}(\omega)=-i\sqrt{\kappa_1\kappa_2}\chi^{(0)}(\omega)$，$S_{11}(\omega)=1-i\kappa_1\chi^{(0)}(\omega)$。

## 双共振 LZSM 与 Floquet 态消耗

当两个共振条件同时满足——Floquet 态间跃迁共振条件 $\mu/h=kf_d$（$k\in\mathbb{Z}$）与腔辅助跃迁条件 $\mu/h=\nu_r+k'f_d$（$k'\in\mathbb{Z}$）——出现双共振（double resonance）：

$$
kf_d=\frac{\mu}{h}=\nu_r+k'f_d\quad\Longrightarrow\quad f_d=\frac{\nu_r}{n},\ \ n\in\mathbb{Z}\setminus\{1\}.
$$

陈明博 2021（第 6 章）在半腔频 $f_d=\nu_r/2$ 附近观察到：当 $f_d$ 从 3.2 GHz 调到 3.5 GHz 时，原来的腔辅助 LZSM 条纹从中间劈裂，形成"月牙"形孔洞。物理根源是 Floquet 态占据：在 $kf_d\approx\mu/h$ 附近两个 Floquet 态相干相长、$p_0\approx p_1\approx 1/2$，于是 $\chi^{(0)}\propto (p_0-p_1)\to 0$，腔反射信号被抑制。月牙孔洞的位置随 $f_d$ 平移，方向与 $p_0$ 减小区域一致；改变 $\nu_r$（SQUID 阵列电流调谐）破坏双共振条件则月牙消失（陈明博 2021，图 6.6）。把 $\nu_r$ 推到另一个满足 $\nu_r/(n+1)\approx f_d$ 的位置，月牙又重现——这种"在/不在"的开关行为是 Floquet 态布居受共振条件调控的最直接证据。

<!-- FIGURE: 双共振 LZSM 干涉谱示意：横轴为失谐 $\varepsilon$，纵轴为驱动功率 $P$，在半腔频驱动下的干涉条纹中间嵌入月牙形孔洞，孔洞位置随 $f_d$ 平移 -->

把同样思路沿布里渊区推进，理论上 $f_d=\nu_r/3,\nu_r/4,\ldots$ 都应当出现高阶双共振条纹；但失谐量涨落 $\sigma_\varepsilon\approx 2.5\ \mu\mathrm{eV}$（陈明博 2021）会把细窄的月牙抹平，使 $1/3$ 腔频以下的图案退化为"蟹钳"形状（陈明博 2021，图 6.7）。

## Floquet 增益与粒子数反转

Floquet 框架下还预言了与"消耗"互补的另一类现象：在合适的参数下，受驱双量子点可以反过来向腔发射微波光子，使腔透射或反射幅值 $|S_{21}|>1$，称为 Floquet 增益（Floquet gain）。顾思思 2023（第 4 章）报告的最大归一化增益约 $1.16$，对应 GaAs 双量子点–NbTiN 透射腔样品（$g/2\pi\approx 56\ \mathrm{MHz}$，$\kappa/2\pi\approx 11.2\ \mathrm{MHz}$，$g/\kappa\approx 5.0$）。

增益的 Floquet 图像是：把双量子点放在准能量布里渊区里看，相邻两个 Floquet 态 $|\phi_{1,0}\rangle$ 与 $|\phi_{0,-k}\rangle$ 之间由于 GaAs 的电声耦合（piezoelectric electron-phonon coupling）出现非平衡占据——激发态占据超过基态，即等效粒子数反转（population inversion）；一旦它们的能级差 $\Delta + k\hbar\Omega$（$\Delta=\mu_1-\mu_0$）与腔频匹配 $\Delta + k\hbar\Omega=\hbar\omega_r$，系统就会向腔发射一个腔光子（顾思思 2023，§4.5，图 4.3）。整个发射–损耗竞争由比值 $g/\kappa$ 量化：增益只在 $g/\kappa$ 足够大时出现。Stehlik 等人在早期 SQUID–双量子点样品（$g/\kappa\approx 0.3$）中只能看到 $|S_{21}|<1$ 的损耗条纹，看不到增益（顾思思 2023，§4.5 引用 [20]）；把 $g/\kappa$ 推到约 $5$ 才能观测到清晰增益。

增益对驱动频率 $\nu_d$、隧穿耦合 $2t$、耦合强度 $g$ 的依赖均可由 Floquet–输入输出公式（顾思思 2023，式 4.3–4.4）给出：$|S_{21}|^2$ 在 $\nu_d$ 区间 $3.15$–$3.7\ \mathrm{GHz}$ 内先增后减，在 $2t/h\approx 5.3\ \mathrm{GHz}$ 附近出现三个清晰可辨的增益区 G1/G2/G3（顾思思 2023，图 4.4）。

## 多比特耦合系统的 Floquet 理论

当多个量子点共享同一个腔模（[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]）时，Floquet 理论要推广到"耦合系统作为整体"。顾思思 2023（§5.4）给出适用于 $M$ 个量子点共享一个腔模的框架：

- Hilbert 空间为 $\mathcal{H}=\mathcal{H}_r\otimes\bigotimes_{j=1}^M\mathcal{H}_{q,j}$，仅保留最低的 $N$ 个腔光子态；
- 在最低激发数（$0$ 或 $1$ 光子）截断下，把每个量子点的 $\sigma_x,\sigma_z$ 写成 Kronecker 积形式（顾思思 2023，式 5.17–5.19），得到 $2M\times 2^{M-1}N$ 维的矩阵表示；
- 在驱动周期 $T=2\pi/\Omega$ 下，把这个大矩阵写成 Floquet 矩阵 $H_F$，结构与单比特情形相同（顾思思 2023，式 5.20）；
- 对该耦合系统做非平衡微扰理论（响应函数方法），把多比特耦合自然包含——$\chi^{(0)}(\omega)$ 现在涉及所有 Floquet 态对的 $|Z_{\alpha\beta,k}|^2$ 之和（顾思思 2023，式 5.10–5.16）；
- 当两个量子点的驱动频率相同时，耦合系统仍以 $T=1/\nu_d$ 为周期；若两个频率不可通约（incommensurable），则系统没有共同周期，需另行处理（顾思思 2023，§5.4.3）。

这套"耦合系统 Floquet 理论"是色散读出理论（[[readout-measurement/dispersive-readout|色散读出]]）的推广：色散读出只考虑 $\sum_j g_j^2\chi_j(\omega)$ 的简单叠加，忽略了腔介导的量子点间相互作用；当 $g/\kappa$ 较大时该近似失效，新理论是更准确的替代。

## 参数与量级

半导体量子点 cQED 系统中 Floquet 实验的典型参数（取自本站论文依据所列工作）：

| 参数 | 典型量级 | 来源 |
| --- | --- | --- |
| 驱动频率 $f_d$ | $1.4$–$3.7\ \mathrm{GHz}$（远低于 $\nu_r$） | 顾思思 2023 |
| 腔频 $\nu_r/2\pi$ | $5.196\ \mathrm{GHz}$（NbTiN 透射腔）、$6.51\ \mathrm{GHz}$（SQUID 反射腔） | 陈明博 2021；顾思思 2023 |
| 失谐偏移 $\varepsilon_0$ | 扫描范围约 $\pm 100\ \mu\mathrm{eV}$ | 陈明博 2021 |
| 驱动幅度 $A_d$ | 几到几十 $\mu\mathrm{eV}$（$P=-40\ \mathrm{dBm}$ 对应 $A_d\approx 11.4\ \mu\mathrm{eV}$） | 顾思思 2023 |
| 隧穿耦合 $2t_c/h$ | $5.2$–$6.2\ \mathrm{GHz}$ | 陈明博 2021；顾思思 2023 |
| 电荷–腔耦合 $g/2\pi$ | $56$–$70\ \mathrm{MHz}$ | 陈明博 2021；顾思思 2023 |
| 腔耗散 $\kappa/2\pi$ | $11.2\ \mathrm{MHz}$（NbTiN）至 $58.9\ \mathrm{MHz}$（SQUID） | 顾思思 2023；陈明博 2021 |
| 比特退相干 $\gamma/2\pi$ | $50$–$100\ \mathrm{MHz}$ | 陈明博 2021；顾思思 2023 |
| Floquet 截断阶 $n_{\max}$ | $30$（收敛判据 $1\%$） | 陈明博 2021 |
| 失谐涨落 $\sigma_\varepsilon$ | 几 $\mu\mathrm{eV}$（准静态电荷噪声） | 陈明博 2021；顾思思 2023 |
| Floquet 增益峰值 $|S_{21}|_{\max}$ | 约 $1.16$（NbTiN 透射腔）；约 $1.1$（SQUID 反射腔） | 顾思思 2023；陈明博 2021 |
| 增益临界 $g/\kappa$ | $\gtrsim 1$（$\approx 5$ 时增益清晰可测） | 顾思思 2023 |

## 实验特征与测量

Floquet 动力学实验有四个标志性的可观测特征：

1. **Floquet 谱条纹**：扫描 $\varepsilon_0$ 与 $A_d$（即 $P_d$），由色散读出得到的反射/透射幅值呈现沿 $A_d\ge|\varepsilon_0|$ 边界出现的干涉条纹——这是经典[[qubit-control/lzsm-interference|LZSM 干涉]]图样，在 Floquet 框架下被解释为准能量共振条件 $\mu/h=kf_d$ 时的"布居共振"。
2. **月牙形孔洞（crescent holes）**：在半腔频 $f_d=\nu_r/2$ 附近的双共振条件下，每个 Floquet 谱条纹从中间劈开出现月牙。月牙位置、深度随 $f_d$ 平移，随 $\nu_r$ 改变而开关（陈明博 2021，图 6.4–6.6）。这是 Floquet 态布居 $p_0\approx p_1$ 的最直接图像证据。
3. **腔幅值增益条纹（gain strips）**：在 $g/\kappa$ 足够大的样品上，Floquet 态间电声耦合导致的等效粒子数反转使 $|S_{21}|>1$ 区域出现——颜色变深的"热斑"。典型最大增益约 $1.16$（顾思思 2023）。
5. **驱动频率依赖**：固定其它参数扫 $f_d$，增益与月牙都会随 $f_d$ 移动；这一可移动性是区分 Floquet 共振与简单电荷隧穿的关键。

标准测量线路：稀释制冷机混合腔室 $T\approx 20\ \mathrm{mK}$（电子温度约几十至百 mK），矢量网络分析仪输出弱探测微波（$\sim -30\ \mathrm{dBm}$，经约 $70\ \mathrm{dB}$ 衰减到达样品），通过[[readout-measurement/rf-reflectometry|射频反射]]或透射测量 $S_{11}$、$S_{21}$。数据拟合时把高斯卷积宽度 $\sigma_\varepsilon\approx 2.5$–$3.3\ \mu\mathrm{eV}$ 代入以反映准静态电荷噪声。

## 与其他概念的关系

- [[qubit-control/lzsm-interference|LZSM 干涉]]是 Floquet 理论的低阶表现：当只有一对准能量共振在起作用时，Floquet 形式解简化为两条态之间的 Stückelberg 相位积累与干涉。
- [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]对应 Floquet 谱在 $\varepsilon_0,A_d$ 上的边带结构；多光子辅助过程就是 Floquet 矩阵中 $|n\pm 1|$ 块的耦合。
- [[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]是 Floquet 免交叉附近的瞬态图像；Floquet 理论则把它推广到稳态干涉与平均能量曲线。
- [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]描述无驱动二能级–腔耦合；含驱动时需要把 JC 模型换成 Floquet 化的耦合系统（顾思思 2023，§5.4）。
- [[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]提供腔输入输出框架与色散响应公式；Floquet 动力学把这一框架的"时间依赖性"明确吸收进 Floquet 表象。
- [[circuit-qed/strong-coupling|强耦合]]（$g>\kappa,\gamma$）是 Floquet 态消耗与增益条纹能被分辨的实验前提；$g/\kappa$ 的大小直接决定增益能否出现。
- [[circuit-qed/cavity-mediated-coupling|腔介导耦合]]系统中，Floquet 理论需要从单比特推广到耦合系统矩阵（顾思思 2023，§5.4）；色散读出近似忽略的量子点间相互作用此时进入 Floquet 响应函数。
- [[readout-measurement/dispersive-readout|色散读出]]给出 Floquet 动力学进入实验信号的具体公式（$\chi^{(0)}$ 在 $S_{11},S_{21}$ 中的位置）。

## 延伸阅读

- J. H. Shirley, "Solution of the Schrödinger equation with a Hamiltonian periodic in time", *Physical Review* (1965). [DOI: 10.1103/PhysRev.138.B979]
- H. Sambe, "Steady states and quasienergies of a quantum-mechanical system in an oscillating field", *Physical Review A* (1973). [DOI: 10.1103/PhysRevA.7.2203]
- S. Kohler, T. Dittrich, P. Hänggi, "Floquet-Markovian description of the parametrically driven, dissipative harmonic quantum oscillator", *Physical Review E* (1997). [DOI: 10.1103/PhysRevE.55.300]
- M. Grifoni, P. Hänggi, "Driven quantum tunneling", *Physics Reports* (1998). [DOI: 10.1016/S0370-1573(98)00022-2]
- J. V. Koski, A. J. Landig, A. Pályi et al., "Floquet spectroscopy of a strongly driven quantum dot charge qubit with a microwave resonator", *Physical Review B* (2018). [arXiv: 1802.03810]
- M. Chen, B. Wang, S. Kohler et al., "Floquet state depletion in ac-driven circuit QED", *Physical Review B* (2020). [arXiv: 2011.03697]

## 论文依据

- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 97–100：Floquet 理论简介，含 Floquet 形式解、Sambe 空间、Floquet 矩阵与截断求和（式 6.1–6.18）。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF p. 101：受驱双量子点 Floquet 矩阵的系数递推与 $n_{\max}=30$ 截断。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 102–104：受驱 DQD–SQUID 腔实验参数（$\nu_r=6.51\ \mathrm{GHz}$，$\kappa/2\pi=65.2\ \mathrm{MHz}$，$g_c/2\pi\approx 70\ \mathrm{MHz}$，$\gamma/2\pi\approx 50\ \mathrm{MHz}$，$2t_c/h=6.2\ \mathrm{GHz}$）；相位平均磁化率 $\chi^{(0)}$（式 6.20）；腔辅助 LZSM 共振条件与布居判据；双共振条件 $kf_d=\mu/h=\nu_r+k'f_d$；月牙形孔洞与 $p_0\approx p_1$ 的对应。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 105–106：Floquet 准能量布里渊区内的能谱、平均能量曲线与布居占据的模拟与实验对比，验证月牙孔洞对应 Floquet 态混合态。
- [[sources/chen-mingbo-2021|陈明博 2021]]，PDF pp. 107–110：通过改变 $\nu_r$、$\nu_d$ 验证双共振条件的开关行为；$f_d=\nu_r/3$ 高阶双共振模拟与"蟹钳"形状预言。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 51–53：Floquet 理论简介，Floquet 形式解、布里渊区结构、Floquet 矩阵与时间演化算符（式 2.36–2.40）；封闭/开放系统的 Floquet 处理。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 78–83：受驱双量子点–NbTiN 腔样品参数（$\nu_r/2\pi=5.196\ \mathrm{GHz}$，$\kappa/2\pi=11.2\ \mathrm{MHz}$，$g/2\pi=56\ \mathrm{MHz}$，$\gamma/2\pi=100\ \mathrm{MHz}$，$2t/h=5.3\ \mathrm{GHz}$）；Floquet 矩阵具体形式（式 4.2）；Floquet 态布里渊区结构与电声耦合导致的等效粒子数反转；腔光子发射速率与 $g/\kappa$ 的依赖；最大增益 $|S_{21}|\approx 1.16$。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 84–86：增益对 $\nu_d$、$2t$、$g$ 的依赖（式 4.3–4.4）；等效耦合强度 $g_{\mathrm{eff}}=g|Z_{\alpha\beta,k}|$。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 99–104：色散读出理论的局限性与多 DQD–腔耦合系统的 Floquet 响应理论（输入输出关系、非平衡微扰、$\chi^{(0)}$ 的 Floquet–Bloch–Redfield 计算）。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 104–106：耦合系统 Floquet 理论——$M$ 个 DQD 与腔的 Kronecker 积构造、Floquet 矩阵块结构、不可通约频率的处理。