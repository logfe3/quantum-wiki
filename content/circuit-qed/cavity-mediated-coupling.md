---
title: 腔介导远程耦合
description: 多个量子比特通过共享微波谐振模式产生的非局域相干交换或有效相互作用。
aliases:
  - 谐振腔介导耦合
  - 量子总线
  - cavity bus
  - cavity-mediated coupling
  - 腔介导
  - 虚光子交换
tags:
  - 电路量子电动力学
  - 多比特
date: 2026-09-08
---

<div class="entry-lead">腔模的空间尺度远大于量子点间直接交换作用范围。只要多个比特都耦合到同一模式，它们即使不相邻，也能通过虚或真实光子互相作用，由此把近邻耦合扩展到芯片乃至模块尺度。</div>

## 物理图像

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]中，[[circuit-qed/microwave-resonator|微波谐振腔]]的中心导体可同时伸出多根电极，每根电极与一个[[fundamentals/double-quantum-dot|双量子点]]或量子点阵列电容耦合。一个腔模覆盖整个芯片，相距百微米乃至毫米的[[qubit-control/charge-qubit|电荷比特]]、[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]或[[scaling-automation/flopping-mode-qubit|翻转模式比特]]可以共享这一模式作为"量子总线"（quantum bus）。本站采用[[sources/ref-20|文献 20]]的术语，把这一总线的角色称为"在远距离节点间高效传递量子信息"。

腔介导耦合（cavity-mediated coupling）与近邻耦合的差别有两点：

- **作用范围**：直接交换作用（[[qubit-control/exchange-interaction|交换相互作用]]）和[[fundamentals/tunnel-coupling|隧穿耦合]]随距离指数衰减，只在百纳米量级有效；腔模覆盖整个芯片长度，对所有挂在同一总线上的比特提供等价的耦合；
- **媒介与可控性**：交换作用由栅压或磁场直接控制，腔介导耦合则由比特–腔失谐 $\Delta_k=\omega_{a,k}-\omega_r$、耦合强度 $g_k$ 与腔耗散 $\kappa$ 共同决定，色散极限下还可以有目的地打开或关闭。

腔的总线功能既包含相干交换——即激发从一个比特经腔到达另一个比特，又包含"集体"行为——多个比特共同调制腔响应，使腔作为它们整体的多比特探针。本词条按耦合机制（共振区 vs 色散区）与比特数（两比特 vs 多比特）两条线索展开。

<!-- FIGURE: 多个量子点与共享谐振腔的耦合结构示意：腔中心导体伸出多根耦合电极，每个电极旁画一个量子点对，标注 g_k 与 Δ_k；比特之间的相互作用通过共享光子模式传递 -->

## 理论模型

### 两比特 + 单模：Tavis–Cummings 哈密顿量

当 $K$ 个二能级比特共享一个单腔模，且满足旋转波近似（RWA）条件 $g_k\ll\omega_{a,k},\omega_r$、$|\omega_{a,k}-\omega_r|\ll|\omega_{a,k}+\omega_r|$ 时，[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 哈密顿量]]的自然推广是 Tavis–Cummings 哈密顿量（TC 模型，[[sources/ref-17|文献 17]] 式 5.1）：

$$
\hat H_{\mathrm{TC}}/\hbar=\omega_r\, a^\dagger a
+\frac{1}{2}\sum_{k=1}^{K}\omega_{a,k}\sigma_{z,k}
+\sum_{k=1}^{K} g_k\left(a^\dagger\sigma_{-,k}+a\sigma_{+,k}\right),
$$

其中 $a$、$a^\dagger$ 为腔光子湮灭、产生算符，$\sigma_{z,k}$、$\sigma_{\pm,k}$ 为第 $k$ 个比特的泡利与升降算符。模型的关键特性：

 1. **总激发数守恒**：RWA 后 $\hat N=a^\dagger a+\sum_k\sigma_{+,k}\sigma_{-,k}$ 与 $\hat H_{\mathrm{TC}}$ 对易，希尔伯特空间按激发数分解为相互独立的小子空间；
 2. **集体耦合增强**：当所有比特调至与腔共振 $\omega_{a,k}=\omega_r$ 时，低激发子空间的本征态为集体模式 $|0\rangle_C$（"暗态"）与 $|\pm\rangle_C$。以两比特为例（[[sources/ref-13|文献 13]] 式 3.2–3.3；[[sources/ref-17|文献 17]] 式 5.2–5.3），

```math
|0\rangle_C=\frac{1}{g_C}(g_{c,1}|ge0\rangle-g_{c,2}|eg0\rangle),\qquad
|\pm\rangle_C=\frac{1}{\sqrt{2}g_C}\bigl(g_{c,2}|ge0\rangle+g_{c,1}|eg0\rangle\mp g_C|gg1\rangle\bigr),
```

其中 $g_C=\sqrt{g_{c,1}^2+g_{c,2}^2}$ 称为**集体增强耦合速率**（collectively enhanced coupling rate）。暗态 $|0\rangle_C$ 不含光子成分、与腔的偶极矩阵元为零，无法从基态 $|gg0\rangle$ 经单光子过程达到；而 $|\pm\rangle_C$ 之间的能级间距即**增强真空 Rabi 劈裂**，大小为 $2\hbar g_C$。这一增强反映了多个比特共同与光子耦合时，比单比特真空 Rabi 劈裂 $2g_k$ 更大的能级分裂。

### 色散极限：虚光子交换的有效相互作用

实用方案中比特常远离共振，以减小 $\kappa$ 引起的退相干与不必要的光子泄漏。设所有比特失谐 $\Delta_k=\omega_{a,k}-\omega_r$ 都远大于 $g_k$ 且 $\kappa,\gamma_k$，以 $g_k/\Delta_k$ 为小量对 TC 哈密顿量做二阶 Schrieffer–Wolff 变换，腔模可绝热消去，得到比特间的有效相互作用（见 [[circuit-qed/jaynes-cummings-model|JC 模型]]词条"色散极限"一节）

$$
H_{\mathrm{eff}}/\hbar=\sum_k \frac{\omega_{a,k}}{2}\sigma_{z,k}
+\sum_{k}\frac{g_k^2}{\Delta_k}\sigma_{+,k}\sigma_{-,k}
+\sum_{k<l}\Bigl(\frac{g_k g_l}{\bar\Delta_{kl}}a\,a^\dagger \sigma_{-,k}\sigma_{+,l}+\mathrm{h.c.}\Bigr),
$$

其中 $\bar\Delta_{kl}$ 是与配置相关的平均失谐（典型情形下各比特近似相等时 $\bar\Delta_{kl}\approx\Delta$）。两比特最简形式给出[[sources/ref-03|文献 3]]与多个后续论文（[[sources/ref-13|文献 13]]；[[sources/ref-17|文献 17]]）都使用的标度律

$$
J_{\mathrm{eff}}\sim \frac{g_1 g_2}{\Delta},
$$

它就是站名"腔介导远程耦合"的核心物理：**有效交换率随两个比特各自单光子耦合强度 $g_{1,2}$ 增大而增大，随比特–腔失谐 $\Delta$ 增大而减小**。$J_{\mathrm{eff}}$ 同时伴随每比特频率的色散频移 $\chi_k=g_k^2/\Delta$，相当于对每个比特施加一个状态依赖的 ac Stark 偏移（详见 [[circuit-qed/jaynes-cummings-model|JC 模型]]词条）。

对真实的两比特系统，若它们的失谐不相等，$J_{\mathrm{eff}}$ 仍可写为（参见 [[circuit-qed/jaynes-cummings-model]] 一节）

$$
J_{\mathrm{eff}}\approx\frac{g_1 g_2}{2}\left(\frac{1}{\Delta_1}+\frac{1}{\Delta_2}\right),
$$

不同失谐下的有效耦合强度不同，这一不对称为多比特同时调谐带来实际工程问题。

### 多比特与集体响应：$K$ 比特集体微波响应

把比特数 $K$ 推到两个以上，共振腔不再只有"两比特交换"这一种可观测量；比特系综对腔的整体响应成为新的诊断。[[sources/ref-17|文献 17]] 把 $K$ 个比特同时耦合到同一腔模时腔的反射式散射矩阵推广为

$$
S_{11}=-1+\frac{\kappa_e}{\,i(\omega_r-\omega_p)+\displaystyle\sum_k g_k\chi_k+\frac{\kappa}{2}\,},
$$

其中 $\chi_k=g_k/[\,i(\omega_{a,k}-\omega_p)+\gamma_k\,]$ 是第 $k$ 个比特的极化率。**集体微波响应**即 $\sum_k g_k\chi_k$ 项：比特系综的影响按线性叠加进入分母。当 $\sum_k g_k\chi_k\ll\kappa/2$ 时腔响应可线性展开，相位响应也满足 $\phi_{\max}\approx\sum_k\phi_k$，这就是**线性区**；当 $\sum_k g_k\chi_k$ 增大并越过 $\kappa/2$，比特不再彼此独立地扰动腔，集体相位响应进入非线性区，每个比特感受到的有效耦合被其它比特的存在所改写。这一从线性到非线性的过渡可用于定量提取系综的整体协同性 $C_{\mathrm{total}}=\sum_k C_k=\sum_k 2g_k^2/(\kappa\gamma_k)$，见 [[circuit-qed/strong-coupling|强耦合]]词条。

### 共振交换比特与腔的耦合

把[[qubit-control/resonant-exchange-qubit|共振交换比特]]（RX 比特）编码进三量子点（$|0\rangle_{\mathrm{RX}}$、$|1\rangle_{\mathrm{RX}}$ 是 Hubbard 哈密顿量最低的两个本征态）后，腔场以三量子点电荷总数算符

$$
\hat H_I=\hbar g_{c0}\bigl(\hat n_3+\nu\hat n_2-\hat n_1\bigr)(a^\dagger+a)
$$

作用在系统上（[[sources/ref-20|文献 20]] 式 6.28）。固定总电子数为 3，可重新整理为 $\hat H_I=2\hbar g_{c0}(\hat n_3+\alpha\hat n_2)(a^\dagger+a)$，其中 $\alpha=(\nu+1)/2$。在 RWA 下变换到 RX 本征基，得到

$$
\hat H_{I,\mathrm{RX}}=\hbar g_{\mathrm{RX}}(a^\dagger\hat\sigma_-+a\hat\sigma_+),
$$

耦合强度 $g_{\mathrm{RX}}$ 与电荷–腔全局耦合 $g_{c0}$ 的关系是（[[sources/ref-20|文献 20]] 式 6.31–6.33）

$$
g_{\mathrm{RX}}=g_{c0}\Bigl[c_{2,\mathrm{RX}}^{|1\rangle}\bigl(c_{2,\mathrm{RX}}^{|0\rangle}\bigr)^*-\alpha\bigl(c_{3,\mathrm{RX}}^{|1\rangle}\bigl(c_{3,\mathrm{RX}}^{|0\rangle}\bigr)^*+c_{2,\mathrm{RX}}^{|1\rangle}\bigl(c_{2,\mathrm{RX}}^{|0\rangle}\bigr)^*\bigr)\Bigr],
$$

其中展开系数 $c_{k,\mathrm{RX}}^{|0\rangle},c_{k,\mathrm{RX}}^{|1\rangle}$ 表示 RX 比特态中第 $k$ 个量子点电荷态 $(2,0,1)$、$(1,0,2)$ 的权重。**RX 比特靠近电荷反交叉区**（$\Delta+U\gg\varepsilon$），与电荷态耦合强，因此电偶极矩大、对腔的耦合 $g_{\mathrm{RX}}$ 也显著大于纯自旋比特的 $g_s$，是构建"可电学调频 + 与腔强耦合"比特的有力候选。两种极限下的简化：

- $\varepsilon=0$，$t_l=t_r=t$：$g_{\mathrm{RX}}=\sqrt{3}t^2\,\big/\sqrt{(2t^2+\Delta^2-\Delta\sqrt{4t^2+\Delta^2})(6t^2+\Delta^2-\Delta\sqrt{12t^2+\Delta^2})}\,\cdot g_{c0}$，
- $\Delta=0$，$t_l=t_r=t$：$g_{\mathrm{RX}}=t^2/(t^2+\varepsilon^2/2)\cdot\sqrt{1-\alpha^2\varepsilon^2/(t^2+\varepsilon^2/2)}\cdot g_{c0}$。

这两式定量地把"频率电学可调"与"与腔强耦合"两条特性同时给出。

### 增强耦合与等效耦合的区分

注意区分**增强真空 Rabi 劈裂**对应的耦合 $g_{\mathrm{eff}}=\sqrt{g_1^2+g_2^2}$（共振区）和**色散极限有效交换** $J_{\mathrm{eff}}\sim g_1g_2/\Delta$（色散区）：

- 前者出现在能级直接可分辨的强耦合实验中，由本征态叠加直接读出；
- 后者描述的是绝热消去腔模后的比特间相互作用强度，控制两比特门的演化速度。

在 [[sources/ref-17|文献 17]] 的两比特电荷比特实验中，两个比特都满足强耦合条件 $g_k>\gamma_k,\kappa/2$，单比特耦合分别为 $(g_1,\gamma_1)/2\pi=(81,65)\ \mathrm{MHz}$、$(g_2,\gamma_2)/2\pi=(80,55)\ \mathrm{MHz}$；把两个比特都调至 $\omega_{a,k}=\omega_r$，观测到的增强真空 Rabi 劈裂为 $2g_{\mathrm{eff}}/2\pi=2\times112\ \mathrm{MHz}$，与 $g_{\mathrm{eff}}'=\sqrt{g_1^2+g_2^2}/2\pi\approx 113\ \mathrm{MHz}$ 高度一致（[[sources/ref-17|文献 17]] pp. 67–69）。这表明两比特确实是以腔内光子为媒介实现了远程相干耦合——而不是经由电极之间的杂散电容或直接库仑相互作用。

## 参数与量级

下表汇总本站论文中报道的腔介导耦合实验参数与提取结果：

| 参数 | 实验 1 | 实验 2 | 实验 3 |
| --- | --- | --- | --- |
| 比特类型 | 双量子点电荷比特 ×2 | 双量子点电荷比特 ×2 | 翻转模式自旋比特 ×2 |
| 腔型 | 双端口 CPW 透射腔 | 双端口 CPW 透射腔 | NbTiN 高阻抗反射腔 |
| 腔频 $\omega_r/2\pi$ | 6.53 GHz | 6.0 GHz | $\sim 5$ GHz |
| 腔耗散 $\kappa/2\pi$ | $\sim 30$ MHz（$\kappa_i/2\pi=30$ MHz 量级） | — | $\kappa^*/2\pi=7.5$ MHz（RDQD） / 6.8 MHz（LDQD） |
| 单比特耦合 $g/2\pi$ | $g_1=81$, $g_2=80$ MHz | $g_{c,1},g_{c,2}\sim 119$ MHz（Wallraff 参数） | $2g_s/2\pi=43.5$ MHz（RDQD）/ 27.6 MHz（LDQD） |
| 单比特退相干 $\gamma/2\pi$ | 65 / 55 MHz | — | 4.6 / 2.2 MHz |
| 集体/增强耦合 $g_{\mathrm{eff}}/2\pi$ | $2g_{\mathrm{eff}}/2\pi=2\times112$ MHz | $2g_C/2\pi\approx 177$ MHz | 强耦合进入 |
| 数据来源 | [[sources/lin-ting-2022\|文献 17]] pp. 67–69 | [[sources/chen-mingbo-2021\|文献 13]] p. 64 | [[sources/jiang-shunli-2025\|文献 20]] pp. 61–63 |

| 多比特扩展 | $\omega_r/2\pi$ | $Z_r$ | 比特数 | 单比特 $g_k/2\pi$ | 协同性 $C_{\mathrm{total}}$ | 来源 |
| --- | --- | --- | --- | --- | --- | --- |
| NbTiN 高阻抗腔 + 5 个 DQD | 6.48 GHz | $\sim 2\ \mathrm{k\Omega}$ | 5 个电荷比特 | $g_k/2\pi$ 拟合值 55、$-$18、$-$28、$-$55 MHz | $>17.6$（线性区极限） | [[sources/lin-ting-2022\|文献 17]] pp. 78–88 |
| SQUID 阵列反射腔 + 2 个 DQD | 6.0 GHz | $\sim 1\ \mathrm{k\Omega}$ | 2 个电荷比特 | $g_k/2\pi\sim 119$ MHz | — | [[sources/chen-mingbo-2021\|文献 13]] p. 64 |
| Si/SiGe 三量子点 + 高阻抗腔 | 4.993 / 7.332 GHz | 2.5–3.5 kΩ | 1 RX 比特、2 个不同位置翻转模式比特 | $2g_s/2\pi$ 最大 43.5 MHz | $g_s>\kappa^*,\gamma_s$ | [[sources/jiang-shunli-2025\|文献 20]] pp. 56–63, 89–102 |

上表还揭示两个工程经验：

 1. **增强耦合 $g_{\mathrm{eff}}$ 的可分辨性依赖集体增强**，而不是单个 $g_k$ 的大小。当两个比特都满足强耦合条件时，$g_{\mathrm{eff}}=\sqrt{g_1^2+g_2^2}$ 直接反映在劈裂宽度上；
 2. **协同性 $C_{\mathrm{total}}=\sum_k C_k$** 是衡量系综是否能进入非线性集体响应的关键参数。[[sources/ref-17|文献 17]] 用 5 个电荷比特同时挂在 NbTiN 高阻抗腔上得到 $C_{\mathrm{total}}>17.6$，集体相位响应进入非线性区（$\phi_{\mathrm{lin}}\sim 45°$ 处开始明显），这就是利用集体耦合"探测–表征"多比特系统的能力。

## 实验特征与测量

### 增强真空 Rabi 劈裂

把两个比特都调至 $\omega_{a,k}=\omega_r$，然后扫描探测频率 $\omega_p$（与失谐量 $\delta_k$）记录 $|S_{11}(\omega_p)|$，在两个比特与光子都共振的频率上原本的 $2g_k$ 单比特劈裂扩大为 $2g_{\mathrm{eff}}=2\sqrt{g_1^2+g_2^2}$，并在中心处出现一个因暗态 $|0\rangle_C$ 不可达而消失的中线（[[sources/ref-13|文献 13]] 式 3.2–3.3；[[sources/ref-17|文献 17]] 图 5.6）。这是远程相干耦合最直接的指纹。

### 两比特关联谱

固定 $\omega_p=\omega_r$ 而把两个比特的失谐量 $\delta_1,\delta_2$ 同时作为扫描轴，腔响应 $|S_{11}(\delta_1,\delta_2)|$ 在 $(\delta_1,\delta_2)$ 平面上呈现十字、井、双峰、嵌套等多种几何（[[sources/ref-17|文献 17]] 图 5.9，pp. 70–71）。其散射矩阵为

$$
S_{11}(\delta_1,\delta_2)=-1+\frac{\kappa_e}{g_1\chi_1+g_2\chi_2+\kappa/2},
$$

四个典型模式由 $(2t_1,2t_2)$ 与 $\omega_r$ 的相对大小决定：

 1. $(2t_1,2t_2)>\omega_r$：两比特都高于腔频，腔响应为单峰十字图案，色散响应近似线性叠加；
 2. $2t_2=\omega_r$ 而 $2t_1>\omega_r$：比特 2 共振、比特 1 在大失谐端，图案由单峰变为沿 $\delta_2=0$ 对称的双峰，比特 1 的远端影响由 $g_1^2\chi_1$ 修饰演化；
 3. $(2t_1,2t_2)$ 接近但都高于 $\omega_r$：出现嵌套型曲线，比特之间的相互作用清晰可见；
 4. 两比特都低于 $\omega_r$：类似情形，耦合强度提取更为准确。

这种二维扫描是判断"两比特是否经腔而非杂散电容相互作用"的有效工具：杂散电容的串扰可通过 [[circuit-qed/strong-coupling|强耦合]]词条描述的辅助测量来排除，[[sources/ref-17|文献 17]] p. 65 报告当采用远离耦合电极的栅极对进行失谐量控制时，杂散电容耦合 $\lesssim 10^{-6}$ 量级，可以忽略。

### 集体微波响应的线性–非线性过渡

多个比特同时挂在同一腔上时（[[sources/ref-17|文献 17]] 第 6 章），集体响应 $\sum_k g_k\chi_k$ 的增大使分母中的腔光子寿命相对变短，相位响应进入非线性。这一过渡在数据上以"最大相位响应 $\phi_{\max}$ vs 累加线性估计 $\phi_{\mathrm{lin}}$"曲线的明显偏离呈现，对应 $\sum_k g_k\chi_k\sim\kappa/2$ 的位置（[[sources/ref-17|文献 17]] 图 6.7）。这一现象本身即可作为集体高协同性 $C_{\mathrm{total}}$ 的实验指纹，而无需逐比特地把它们都调到共振。

### 比特与腔无直接电极连接：扩展到任意位置

[[sources/ref-20|文献 20]] 在 Si/SiGe 三量子点中实现了一个特别的扩展：在三量子点的两端（RDQD、LDQD）分别编码翻转模式自旋比特，**LDQD 的所有电极都不与谐振腔直接相连**——RDQD 的电极把 RDQD 中的比特与腔耦合，LDQD 中的比特则通过与 RDQD 之间的电荷耦合（量子点间隧穿）以及 RDQD–腔的耦合链路，最终通过腔响应被读出（[[sources/ref-20|文献 20]] pp. 56–63）。LDQD 的强耦合参数为 $2g_{sL}/2\pi=27.6\ \mathrm{MHz}$，$\gamma_{sL}/2\pi=2.2\ \mathrm{MHz}$，$\kappa^*/2\pi=6.8\ \mathrm{MHz}$——仍然满足 $g_{sL}>\kappa^*,\gamma_{sL}$。这一结果直接证明谐振腔可耦合"更远距离的量子比特"，对大规模扩展有重要意义。

### 色散读出与量子非破坏测量

色散极限下比特与腔的耦合被"凝固"为状态依赖的腔频移 $\chi_k=g_k^2/\Delta_k$（详见 [[readout-measurement/dispersive-readout|色散读出]]）。这一频移的集体贡献在多比特情形下变为 $\chi_{\mathrm{tot}}=\sum_k\chi_k$，即可作为多比特状态的腔介导读出手段——只要 $\chi_{\mathrm{tot}}>\kappa$，不同比特态组合在腔谱上可以分辨。

### 失谐不一致时的标度律

实际器件中两个比特往往不可能都恰好调在与腔相同频率。设 $\Delta_1\neq\Delta_2$，有效交换为

$$
J_{\mathrm{eff}}\approx\frac{g_1g_2}{2}\left(\frac{1}{\Delta_1}+\frac{1}{\Delta_2}\right),
$$

即有效耦合随两个失谐的调和均值倒数缩放——$\Delta$ 较大的比特（远离腔）对 $J_{\mathrm{eff}}$ 的贡献会被 $\Delta$ 较小的一侧主导。这一点在 [[sources/ref-20|文献 20]] 的 RX 比特设计中得到利用：通过 $\varepsilon$、$\Delta$ 两个失谐参量在电学上独立调节 RX 比特的频率与电偶极权重，从而在保持 $g_{\mathrm{RX}}$ 不变的前提下改变比特–腔失谐。

## 扩展能力与代价

腔总线带来的不只是"远程耦合"——它同时引入若干新的工程问题：

 1. **集体衰减与频率拥挤**：腔的耗散 $\kappa$ 直接耦合到所有挂在它上面的比特，任何一个比特的纯态操作都会把腔频移动 $\chi_k$；两个比特靠近时它们的色散响应区会重叠，造成频率拥挤。[[sources/ref-17|文献 17]] p. 82 报告 5 比特同时接近共振时工作点会持续漂移，因此被迫放弃把 5 个比特同时调到共振，改用多比特关联谱作诊断；
 2. **残余 ZZ 耦合与状态相关频移**：除主项 $J_{\mathrm{eff}}$ 之外，色散极限还会引入 $\sigma_z^1\sigma_z^2$ 形式的耦合（即所谓 ZZ 耦合），表现为两比特各自频率被对方状态微小修正。这一效应在比特数增多时迅速扩大，可能超过量子门保真度容差；
 3. **校准与控制复杂度**：多比特共享同一总线，每个比特的失谐独立可调但色散响应相互纠缠，$C_{\mathrm{total}}>1$ 后腔响应的拟合需要把多个比特的耦合强度与失谐同时作为参数。这是 [[circuit-qed/strong-coupling|强耦合]]词条所描述的"高协同性"体系的代价；
 4. **"连得上"≠"并行运行"**：比特数增多并不自动意味着可并行操控比特频率。要实现可独立寻址的并行门，要么为每个比特配置独立的微磁体或局部磁场，要么为每个比特配置独立的局部总线（如 SQUID 阵列腔可在不同频率区域提供多模总线，见 [[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]）。

反过来，腔总线带来的额外收益同样显著：

 - **远距离相干耦合**：跨越芯片乃至模块，绕开近邻交换作用百纳米量级的距离限制；
 - **多比特集体诊断**：通过 $|S_{11}(\delta_1,\ldots,\delta_K)|$ 一次性读出多个比特的耦合强度与失谐，而不必逐个比特单独表征；
 - **频分复用**：利用腔的高阶模式或多模腔（SQUID 阵列腔、NbTiN 多模腔）为不同比特分配独立通道，[[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]词条有详细描述；
 - **电学可调比特的支持**：[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]通过栅极调节 $\varepsilon$、$\Delta$ 改变比特频率但保持 $g_{\mathrm{RX}}$ 较大，可由同一总线接口；
 - **跨体系互联**：基于腔的总线还可把半导体量子比特与超导[[qubit-control/cnot-gate|CNOT]]门结构（如 transmon）连成混合系统——[[sources/ref-20|文献 20]] p. 90 提到 RX 比特与 transmon 经同一腔的长程耦合已被演示。

## 与其他概念的关系

 - [[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]是腔介导耦合所在的基本框架；最小二能级模型见 [[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]；多比特推广即 Tavis–Cummings 哈密顿量（见本文）。共振极限的标志是 [[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]] 与 [[circuit-qed/strong-coupling|强耦合]]判据；色散极限支撑 [[readout-measurement/dispersive-readout|色散读出]] 与 QND 测量。
 - [[circuit-qed/microwave-resonator|微波谐振腔]]提供总线载体；常规阻抗 $50\ \Omega$ CPW 腔适合弱耦合探测，提升耦合则依赖 [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]（NbTiN、TiN、SQUID 阵列），后者正是 [[sources/ref-17|文献 17]] 与 [[sources/ref-20|文献 20]] 实现 $C_{\mathrm{total}}>17.6$ 与 $g_0/2\pi\sim 175\ \mathrm{MHz}$ 的关键。[[circuit-qed/squid-array-resonator|SQUID 阵列谐振腔]]则提供可调频与多模支持。
 - 比特侧的通道由 [[circuit-qed/charge-photon-coupling|电荷–光子耦合]]（强偶极、快速退相干）与 [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]（微磁体梯度、自旋轨道、翻转模式）决定；[[scaling-automation/flopping-mode-qubit|翻转模式比特]] 与 [[qubit-control/resonant-exchange-qubit|共振交换量子比特]] 都是为兼顾"电学可调 + 与腔强耦合"而提出的编码。
 - 近邻作用的对照：[[qubit-control/exchange-interaction|交换相互作用]]、[[fundamentals/tunnel-coupling|隧穿耦合]]与 [[qubit-control/cnot-gate|CNOT]] 门通过直接相互作用实现，工作距离百纳米；腔介导耦合通过共享模式跨越芯片尺度。当阵列规模超过几个比特时，两者通常混合使用：节点内用近邻，节点间用腔总线。
 - 性能瓶颈：[[materials-devices/charge-noise|电荷噪声]]仍是色散频移 $\chi_k=g_k^2/\Delta_k$ 与有效交换 $J_{\mathrm{eff}}$ 稳定性的主要限制；不同平台（[[materials-devices/gaas-algaas|GaAs/AlGaAs]]、[[materials-devices/silicon-sige|Si/SiGe]]、[[materials-devices/silicon-mos|Si-MOS]]、[[materials-devices/germanium-hut-wire|锗棚顶纳米线]]）在退相干和电荷噪声量级上各有差异。

## 延伸阅读

- J. Majer et al., "Coupling superconducting qubits via a cavity bus", *Nature* (2007). [DOI: 10.1038/nature06184]
- A. Stockklauser et al., "Strong Coupling Cavity QED with Gate-Defined Double Quantum Dots Enabled by a High Impedance Resonator", *Physical Review X* (2017). [DOI: 10.1103/PhysRevX.7.011030]
- F. Borjans, X. Croot, X. Mi, J. Petta, "Resonant microwave-mediated interactions between distant electron spins", *Nature* (2020). [DOI: 10.1038/s41586-019-1867-y]
- J. Dijkema et al., "Cavity-mediated iSWAP oscillations between distant spins", *Nature Physics* (2024). [DOI: 10.1038/s41567-024-02694-8]

## 论文依据

- [[sources/ref-17|文献 17]]，PDF p. 16：第 1 章绪论中以超导腔作为量子总线连接多个量子比特的扩展方案，与 [[sources/ref-20|文献 20]] 中关于两类扩展的对照一致；PDF pp. 67–68：Tavis–Cummings 哈密顿量（式 5.1）、集体增强耦合 $g_{\mathrm{eff}}=\sqrt{g_1^2+g_2^2}$ 与暗态本征态（式 5.2–5.3）；PDF p. 69：实验测得 $(g_1,\gamma_1)/2\pi=(81,65)\ \mathrm{MHz}$、$(g_2,\gamma_2)/2\pi=(80,55)\ \mathrm{MHz}$ 及增强真空 Rabi 劈裂 $2g_{\mathrm{eff}}/2\pi=2\times112\ \mathrm{MHz}$，与理论 $g_{\mathrm{eff}}'\approx 113\ \mathrm{MHz}$ 吻合；PDF pp. 70–71：两比特关联谱散射矩阵（式 5.4–5.5）与四种典型几何模式（$2t_1,2t_2$ 与 $\omega_r$ 的相对大小）；PDF p. 65：栅极间电容串扰 $\lesssim 10^{-6}$ 量级，确认远程相干耦合由腔承担；PDF pp. 78–88：NbTiN 高阻抗腔（$Z_r\sim 2\ \mathrm{k\Omega}$，$\omega_r/2\pi=6.48\ \mathrm{GHz}$）同时耦合 5 个电荷比特的实验、单比特耦合 $(g_k/2\pi)=(55,-18,-28,-55)\ \mathrm{MHz}$、$\kappa$ 与各 $C_k$、整体 $C_{\mathrm{total}}>17.6$、从线性到非线性的集体微波响应过渡（$\phi_{\mathrm{lin}}\sim 45°$ 处开始明显），并讨论了无法把 5 比特同时调到共振的工程现实。
- [[sources/ref-20|文献 20]]，PDF pp. 4–5：第 1.2 节区分近邻耦合与长程耦合，引入通过腔实现长程耦合的动机与强耦合条件；PDF p. 6：第 1.3 节把腔定位为"量子总线"，提出在三量子点中编码多个比特再由腔互连的两步方案；PDF pp. 56–63：翻转模式自旋比特与高阻抗腔的强耦合（RDQD：$2g_s/2\pi=43.5\ \mathrm{MHz}$、$\gamma_s/2\pi=4.6\ \mathrm{MHz}$、$\kappa^*/2\pi=7.5\ \mathrm{MHz}$；LDQD：$2g_{sL}/2\pi=27.6\ \mathrm{MHz}$、$\gamma_{sL}/2\pi=2.2\ \mathrm{MHz}$、$\kappa^*/2\pi=6.8\ \mathrm{MHz}$），其中 LDQD 的所有电极都不与谐振腔直接相连，首次演示经腔的远距离比特耦合；PDF pp. 73–90：共振交换量子比特（RX 比特）编码、Hubbard 哈密顿量（式 6.1）、失谐参量 $\varepsilon,\Delta$（式 6.2）、RX 比特与腔的相互作用（式 6.28–6.30）与耦合强度公式（式 6.31–6.33），用以解释为何 RX 比特同时具备"频率电学可调"与"较大电偶极矩"；PDF p. 90：基于谐振腔介导的 RX 比特与超导 transmon 比特之间的长程耦合演示。
- [[sources/ref-13|文献 13]]，PDF p. 63：两电荷比特与腔的强耦合结构设计（$2t_c/2\pi\sim 6.0\ \mathrm{GHz}$），把两个比特都调至与腔共振 $\omega_{a,1}=\omega_{a,2}=\omega_r$；PDF p. 64：Tavis–Cummings 集体本征态（式 3.2）与增强真空 Rabi 劈裂 $g_C=\sqrt{g_{c,1}^2+g_{c,2}^2}$（式 3.3），实验测得 $2g_C/2\pi\approx 177\ \mathrm{MHz}$，并指出暗态 $|0\rangle_C$ 在偶极耦合上为零，因此腔谱上看不到中线。
- [[sources/ref-03|文献 3]]，PDF pp. 4–5：把微波谐振腔作为远程量子总线的研究设计动机——通过共享单频光子谐振环境耦合相距较远的量子比特；PDF p. 66：把微波谐振腔作为量子总线耦合多个量子比特的研究方案综述。