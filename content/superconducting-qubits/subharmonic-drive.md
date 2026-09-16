---
title: 次谐波驱动
description: 以约 1/3 比特频率泵浦 transmon 固有 Kerr 非线性、用三个驱动光子合成一个比特光子的参量单比特控制方案；Rabi 速率随驱动幅度三次方增长，驱动线低通滤波与比特频率分离使弱衰减即可保相干。
aliases:
 - subharmonic driving
 - 分数频率驱动
 - 三光子驱动
 - 次谐波门
tags:
 - 超导量子比特
 - 参量驱动
 - 单比特门
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvehjnfrhqexsby6nd2005
source_updated: 2026-09-15T19:36:56Z
---

<div class="entry-lead">超导单比特门有个内生矛盾：要比特活得久就得弱耦合驱动线、加重衰减滤波，而衰减越重门就越慢，加功率又加热制冷机。次谐波驱动把"控制"与"耗散"在**频率空间**拆开：用约 $\omega_q/3$ 的低频信号泵浦 transmon 与生俱来的 Kerr 非线性，三个驱动光子合成一个比特光子——驱动线可以放一个只通低频的低通滤波器，比特频率处呈高阻带，衰减器减半、相干不损，Rabi 速率却按幅度**三次方**蹿升。Xia 等人在普通 transmon 上做到 37.4 ns 门、99.91% 保真度。</div>

## 物理机制：泵浦 Kerr 项的三光子过程

transmon 的主导非线性是约瑟夫森余弦势的四阶项（自 Kerr，典型 $-150$ 到 $-250\ \mathrm{MHz}$）。对失谐驱动 $\varepsilon(t)\cos\omega_d t$ 做位移变换后，哈密顿量为

$$
\hat H^{D}/\hbar = (\omega_q - \alpha)\,\hat q^\dagger\hat q + \frac{\alpha}{12}\left(\hat q + \eta e^{-i\omega_d t} + \mathrm{h.c.}\right)^4
$$

其中 $\hat q$（$\hat q^\dagger$）是比特湮灭（产生）算符，$\alpha<0$ 是自 Kerr（非谐性），$\eta=i\beta(\omega_d)\varepsilon(t)$ 是无量纲驱动强度、$\beta=2\omega_d/[(\omega_q-\alpha)^2-\omega_d^2]$ 是驱动线到比特的有效响应。展开四次项得到一族参量过程；次谐波驱动瞄准其中的 $4(\eta^* e^{i\omega_d t})^3\hat q+\mathrm{h.c.}$ 项——在 $\omega_d\approx\omega_q/3$ 处，它湮灭三个驱动光子、产生一个比特光子。转到以 $3\omega_d$ 旋转的坐标系并取 RWA 后：

$$
\hat H_{\mathrm{sub}}^{R}/\hbar = \underbrace{(2\alpha|\eta|^2 - 3\delta)}_{\text{失谐+ac-Stark}}\ \hat q^\dagger\hat q + \frac{\alpha}{2}\hat q^{\dagger2}\hat q^2 + \frac{\alpha}{3}\left(\eta^3 \hat q^\dagger + \eta^{*3}\hat q\right)
$$

其中 $\delta=\omega_d-\omega_q/3$ 是次谐波失谐。末项给出单比特 Rabi 驱动，末前项是残余 Kerr。这个公式预言两条核心标度：**Rabi 速率 $\Omega\propto|\eta|^3$（三次方）**、**ac-Stark 频移 $\Delta\omega=2\alpha|\eta|^2$（平方）**。所用非线性项在每只 transmon 中都天然存在、强度相近，因此方案无需任何特殊电路工程。

![[assets/figures/subharmonic-drive/xia2025-fig1a-lpf-schematic.jpg]]

*次谐波驱动架构：transmon（蓝）与 λ/2 读出谐振腔（橙）同置于蓝宝石芯片；驱动端口放置低通滤波器（绿），只放行 ω_d≈ω_ge/3 的驱动，在比特频率与读出腔频率处呈阻带——控制信号进得来、比特光子出不去，驱动线的重衰减器因此可以省去。图源：Xia et al. (2025), Fig. 1(a)。*

在 $\omega_q/3$ 附近扫频还能依次激活同一四次项家族的其他成员：$ge/3$、$ef/3$、$fh/3$ 三个四波混频过程彼此相隔 $\alpha/3$，八波混频的 $gf/6$、$eh/6$ 也清晰可见（$gf/6$ 正是常规谱学中 $gf/2$ 峰的次谐波对应物）。

## 标度律的实验验证

在普通参数的 transmon（$\omega_{ge}/2\pi=4.237\ \mathrm{GHz}$、$\alpha/2\pi=-148.7\ \mathrm{MHz}$、$T_1/T_{2R}/T_{2E}=41/21/72\ \mu s$，读出腔 6.498 GHz）上，Rabi 实验（100 ns 平顶脉冲）给出随幅度的明确幂律。两条曲线用**同一个**拟合函数、仅一个自由参数（室温–低温电压换算系数 $k$）：

$$
\Delta\omega(V_d) = 2\alpha(k\beta V_d)^2,
\qquad
\Omega(V_d) = \frac{2}{3}\alpha(k\beta V_d)^3
$$

其中 $V_d$ 是制冷机基级处的脉冲峰值电压（$k=2\pi\times1.25\times10^3\ \mathrm{MHz/mV}$）。实验点：$V_d=1.19\ \mathrm{mV}$ 时 Rabi 速率仅 $2\pi\times0.27\ \mathrm{MHz}$；增大 7.1 倍到 $8.48\ \mathrm{mV}$ 时达到 $2\pi\times68.04\ \mathrm{MHz}$——增长约 **250 倍**，正是三次方律（$7.1^3\approx358$，含饱和修正）。同幅度的 ac-Stark 达到非谐性的约 1.6 倍。三次方律意味着只需适度加功率就能换取快门，代价则是对幅度与相位漂移的敏感度也是共振驱动的三倍——实验用 PID 恒温盒稳定室温电子学来压制漂移。

![[assets/figures/subharmonic-drive/xia2025-fig3b-rabi-stark-scaling.jpg]]

*Rabi 速率与 ac-Stark 频移随驱动幅度的标度：红方为 Rabi 速率（∝V_d³，对数斜率 3）、蓝星为 ac-Stark（∝V_d²），两组数据由单参数 k 的同一拟合函数覆盖（4.71 mV 处 Rabi 2π×13.55 MHz、Stark 2π×−81.25 MHz≈0.55α；最高幅度点超出拟合范围仅作展示）。图源：Xia et al. (2025), Fig. 3(b)。*

## 相位跟踪与啁啾脉冲

大 ac-Stark 频移带来两个工程问题。其一是**相位累积**：驱动期间比特频率被移动，比特系与信号源系的转速不同步，第 $i$ 个门积累相位

$$
\varphi_i = \int_{t_i}^{t_{i+1}} \left[\omega_q + \Delta\omega(t) - 3\omega_d(t)\right] dt
$$

可用门后虚拟 Z 校正，或让脉冲频率随幅度**啁啾**、始终满足 $3\omega_d(t)=\omega_q+\Delta\omega(t)$。其二是**扫频穿越杂峰**：固定频率脉冲在上升/下降沿会扫过 $gf/6$ 等其他参量过程（失谐超过 $\alpha/6$ 时）造成泄漏；啁啾脉冲沿 ac-Stark 轨迹走、避开直接穿越，实测 Rabi 条纹的畸变明显减小。

## 为什么低通滤波不杀相干：三光子衰减可忽略

强耦合驱动线的新顾虑是比特光子经低频端口的多光子泄漏。给耦合强度乘上滤波函数 $\Theta(\nu)$（通带 $\omega_q/3+\vartheta$ 以上截止）后，三光子衰减率为

$$
\Gamma_3 = \frac{243}{32\pi^2}\frac{\gamma_1^3 |\alpha|^2}{\omega_q^4}\left(\frac{\vartheta}{\omega_q}\right)^2
$$

其中 $\gamma_1=2\pi\lambda^2$ 是未滤波的系统–浴耦合强度。由于 $\alpha$ 与 $\gamma_1$ 都远小于 $\omega_q$，$\Gamma_3$ 比内部损耗或驱动线残余耦合的共振衰减低许多个数量级——**即使驱动线耦合得很强，三光子泄漏也不构成 $T_1$ 瓶颈**。这使"低通滤波 + 次谐波驱动"成为快门与长相干兼得的组合；配套计算还表明该方案能降低快门场景下的制冷机热负荷——对大规模量子机器的功耗预算是实质性利好。

## 门保真度

以 $\pi$ 与 $\pi/2$ 旋转（X/Y 轴）为基本操作、Z 轴用零成本虚拟 Z 门：受硬件限制，$\pi$ 门取 50.9 ns、$\pi/2$ 门取 37.4 ns 平滑平顶脉冲。随机基准与交错随机基准给出：**Clifford 平均保真度 99.604(9)%，X/√X/Y/√Y 门分别为 99.79(1)%/99.91(1)%/99.76(2)%/99.91(1)%**——最快门 37.4 ns、最高保真度 99.91%。

![[assets/figures/subharmonic-drive/xia2025-fig5-randomized-benchmarking.jpg]]

*随机基准与交错随机基准：红迹为次谐波驱动下 Clifford 门的平均保真度衰减（99.604(9)%），绿/蓝迹给出具体门（X、√X、Y、√Y）的保真度提取。图源：Xia et al. (2025), Fig. 5。*

## 适用边界与扩展

- **幅度上限存在**：强驱动下相干振荡消失、布居流向更高激发态——一个态相关的上边界给门速封顶，其机制仍在研究中。
- **漂移敏感度 ×3**：三次方律对幅度/相位漂移的敏感度是共振驱动的三倍，需要稳定室温电子学环境（恒温盒）与定期重校准。
- **对其他比特可移植**：换用不对称结的三阶/五阶项即可把方案搬到 $\omega_q/2$ 或 $\omega_q/5$ 驱动，或推广到其他含原生非线性的系统。
- **次谐波家族**：$ef/3$、$fh/3$、$gf/6$ 等过程同样可做门控；本词条聚焦 $ge/3$ 主过程。

## 与其他概念的关系

- [[superconducting-qubits/transmon-qubit|transmon 量子比特]]：方案直接泵浦每只 transmon 都有的自 Kerr 项，无需特殊设计；非谐性大小决定驱动频率（ω_q/3）与 Stark 标度（Δω 以 α 为单位）。
- [[readout-measurement/parametric-amplifier|参量放大器]]：同为"用泵浦非线性电抗换取有效低阶相互作用"的参量思路——JPA 里泵 Kerr 做增益与压缩，这里泵 Kerr 做比特旋转。
- [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]：量子点输运中"吸收 n 个光子跨过能量差"与次谐波驱动"三个驱动光子合成一个比特光子"是同一类多光子过程在不同平台的体现。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]：次谐波的 chevron 条纹与共振驱动形状相同，差别只在 Ω(V) 从线性变三次方——标度律本身就是该机制的指纹。
- [[superconducting-qubits/spin-locked-qubit|自旋锁定量子比特]]：另一条"连续驱动换鲁棒性"的路线（锁相位噪声），与本词条的"频率分离换相干保护"互补，两者都重定义了驱动线的角色。

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 驱动频率 | $\omega_d \approx \omega_q/3$（4.237 GHz 比特 → ~1.412 GHz） | Xia 2025 |
| Rabi/ac-Stark 标度 | $\Omega=\tfrac23\alpha(k\beta V_d)^3$、$\Delta\omega=2\alpha(k\beta V_d)^2$，单参数 k=2π×1.25×10³ MHz/mV | Xia 2025 |
| Rabi 速率范围 | 2π×0.27 MHz @1.19 mV → 2π×68.04 MHz @8.48 mV（≈250×） | Xia 2025 |
| 参考工作点 | 4.71 mV：Rabi 2π×13.55 MHz、Stark 2π×−81.25 MHz（0.55α） | Xia 2025 |
| 三光子衰减 Γ₃ | ∝ γ₁³α²ϑ²/ω_q⁴，比共振衰减低多个量级（可忽略） | Xia 2025 |
| 门长 | π 门 50.9 ns、π/2 门 37.4 ns（平顶平滑脉冲） | Xia 2025 |
| 门保真度 | Clifford 平均 99.604(9)%；X/√X/Y/√Y 99.79/99.91/99.76/99.91(1)% | Xia 2025 |
| 实验比特参数 | ω_ge/2π=4.237 GHz、α/2π=−148.7 MHz、T₁/T₂R/T₂E=41/21/72 μs | Xia 2025 |
| 杂散过程间距 | ge/3、ef/3、fh/3 相隔 α/3；gf/6、eh/6 为八波过程 | Xia 2025 |

## 参考文献

- Xia, M., Zhou, C., Liu, C., Patel, P., Cao, X., Lu, P., Mesits, B., Mucci, M., Gorski, D., Pekker, D., Hatridge, M. Fast superconducting qubit control with subharmonic drives. arXiv:2306.10162 (2025)（QAtlas 缓存：2306.10162）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
