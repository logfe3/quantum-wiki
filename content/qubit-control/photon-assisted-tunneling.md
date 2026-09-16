---
title: 光子辅助隧穿
description: 载流子吸收或发射一个或多个驱动光子后跨越原本失谐能量差的隧穿过程。
aliases:
  - PAT
  - 光辅助隧穿
  - photon-assisted tunneling
  - 光子辅助隧穿过程
tags:
  - 量子比特操控
  - 微波谱学
date: 2026-09-08
---

<div class="entry-lead">当两个量子点的能级没有对齐时，微波光子可以补上能量差，使原本被抑制的隧穿重新发生；多光子过程满足近似的 $n h f=\Delta E$。</div>

## 物理图像

光子辅助隧穿（photon-assisted tunneling，PAT）描述的是这样一种过程：原本因能量失谐而被[[fundamentals/coulomb-blockade|库仑阻塞]]禁止的隧穿通道，在外加交流电场（典型为微波驱动）下被"打开"——电子通过吸收或发射一个乃至多个离散的光子能量 $hf$，跨越两个量子点之间的能量差 $\Delta E$ 完成隧穿。这是把一个直流（或低频）实验中看不见的能谱信息转化为可观测的电流信号的标准工具，在双量子点与多量子点[[qubit-control/charge-qubit|电荷量子比特]]中尤其常用。

物理上，把系统限制到只考虑每个量子点最高占据能级时，双量子点中电子从左点 $(N+1,M)$ 到右点 $(N,M+1)$ 的电荷转移可以约化为一个两能级体系（two-level system，TLS），其失谐量（detuning）记为 $\varepsilon$。无驱动时，自发隧穿只发生在 $\varepsilon=0$ 附近——电荷转移线（intra-dot tunneling line）就是两量子点电化学势对齐的轨迹。在门电极上叠加微波电压 $V_{ac}\cos(2\pi f t)$ 后，含时项把失谐改写为

$$
\varepsilon(t)=\varepsilon+V_{ac}\cos(2\pi f t)
$$

隧穿几率被周期势场调制：失谐 $\varepsilon$ 落在某个 $n h f$ 附近时，电子通过吸收（$n>0$）或放出（$n<0$）$|n|$ 个微波光子跨过能级差，即

$$
\Delta E=\varepsilon\,\alpha=n h f
$$

其中 $\alpha$ 是参与扫描的电极的[[fundamentals/charging-energy|杠杆臂]]（level arm），把栅压换算成能量。这套图景最早由 Tien–Gordon 在超导隧道结中提出，1994 年由 Kouwenhoven 等人首次在半导体量子点中实验验证，并迅速成为电荷比特表征的标准工具。

<!-- FIGURE: 双量子点能级示意图：(a) 阻塞情形 ε≠0，电子无法交换；(b) 加微波后 ε+nhf 与能级对齐，电子通过吸收/放出 n 个光子完成隧穿 -->

## 理论模型：Tien–Gordon 型隧穿率

PAT 的定量描述建立在含时隧穿问题的标准近似上。对一个无交流信号时电子隧穿几率 $\Gamma(E)$，当驱动频率为 $f$、幅值为 $V_{ac}$ 时，PAT 修正后的隧穿几率为

$$
\tilde{\Gamma}(E)=\sum_{n=-\infty}^{+\infty}J_{n}^{2}(\alpha)\,\Gamma(E+n h f)
$$

其中 $J_n(\alpha)$ 是第一类 $n$ 阶 Bessel 函数，约化参数

$$
\alpha=\frac{e V_{ac}}{h f}
$$

对应驱动强度与单光子能量的比值。在弱驱动极限（$\alpha\ll1$）下，$J_0^2(\alpha)\approx 1-\alpha^2$，$J_{\pm 1}^2(\alpha)\approx \alpha^2/4$，高阶项可忽略，PAT 信号只在 $\Delta E=\pm h f$ 处出现一对边带；强驱动（$\alpha\gtrsim 1$）时，$J_n^2(\alpha)$ 在 $|n|\lesssim \alpha$ 范围内都不可忽略，多条 $n$ 阶边带同时出现。$J_n^2(\alpha)$ 随 $\alpha$ 振荡的性质也是功率依赖 PAT 谱呈现 Bessel 振荡的原因。

物理上，$J_n^2(\alpha)$ 是电子从驱动场吸收或放出 $|n|$ 个光子的概率幅 $|J_n(\alpha)|^2$；整套表达式意味着单电子与微波场耦合的效果是把原来的单能级 $E$ 劈裂成一组准能级 $E+n h f$，权重按 Bessel 函数分布。这是 PAT 能作为"原位能谱仪"的根源——只要扫到 PAT 共振线，能量匹配点就被直接读出。

### 两能级体系下的哈密顿量与边带峰位置

把双量子点限制在电荷态 $\{|L\rangle=|N+1,M\rangle,\ |R\rangle=|N,M+1\rangle\}$ 两个态上，无驱动哈密顿量在失谐 $\varepsilon$ 与点间隧穿耦合 $t$ 之下写为

$$
H_0/\hbar=\frac{\varepsilon}{2}\sigma_z+t\,\sigma_x
$$

对应的本征态为缀饰态 $(|L\rangle\pm|R\rangle)/\sqrt{2}$，能级差 $\hbar\sqrt{\varepsilon^2+4t^2}$。在弱驱动极限下（$\alpha\ll 1$，保留至 $n=\pm 1$），微波场把失谐变为 $\varepsilon(t)=\varepsilon+V_{ac}\cos(2\pi f t)$，电子主要通过吸收或放出单光子完成跃迁；PAT 共振线在

$$
\alpha\,\varepsilon=\sqrt{(h f)^2-(2t)^2}
$$

处出现。这一关系是 PAT 谱的"指纹方程"：它把一阶共振峰的失谐位置 $\varepsilon$、微波频率 $f$ 与点间隧穿耦合 $t$ 联系起来，给出同时拟合杠杆臂 $\alpha$ 与耦合 $t$ 的标准方法。

当两个量子点之间没有直接隧穿耦合（$t=0$）时，PAT 共振条件回到 $\alpha\varepsilon = h f$，即纯能量匹配；当 $\varepsilon=0$ 时两侧的 PAT 谱与零失谐点重合；当驱动足够强、$\alpha\gtrsim 1$ 时还必须把更高阶 $J_n^2$ 项考虑进来，共振峰出现在 $h f\approx\sqrt{(\alpha\varepsilon)^2+(2t)^2}/|n|$ 的整数倍处，观测到的边带峰数等于 $2n_{\max}\approx 2\alpha$ 阶。

### 脉冲驱动与 T1 测量

把连续微波斩波成 50% 占空比、周期 $\tau$ 可调的方波包络，可以由一阶共振峰高度的衰减测量电荷弛豫时间 $T_1$。定义峰高比

$$
\frac{M(\tau)}{M(\tau_0)}=\frac{1}{2}+\frac{T_1}{\tau}\left(1-e^{-\tau/2T_1}\right)
$$

其中 $\tau_0$ 取几纳秒（远小于 $T_1$）以对应饱和峰高；当 $\tau\gg T_1$ 时比值趋于 $1/2$，$\tau\to 0$ 时趋于 $1$。把实验测得的 $M(\tau)$ 与上式拟合即可得到 $T_1$——这是 PAT 谱同时充当"弛豫计"的典型用法。同一斩波信号的低占位下，电子没有足够时间从激发态回到基态，PAT 共振峰趋于饱和高度；这一段正是拟合 $M(\tau_0)$ 的依据。

## 参数量级

| 量                  | 典型值                                                                           | 来源     |
| ------------------- | -------------------------------------------------------------------------------- | -------- |
| 微波频率 $f$        | $9$–$20\ \mathrm{GHz}$（GaAs 双量子点）                                          |          |
| 驱动功率            | $-5\ \mathrm{dBm}$（弱驱动）至 $12\ \mathrm{dBm}$（高驱动）                      |          |
| 最高观测 PAT 阶数   | 14 阶（$15\ \mathrm{GHz}$，$10\ \mathrm{dBm}$，GaAs）                            |          |
| 微波衰减            | $-22\ \mathrm{dBm}$（设备至样品实测）                                            |          |
| 点间隧穿耦合 $2t_c$ | $2.7$、$6.8$、$11\ \mathrm{GHz}$（三组 $V_m$）                                   |          |
| 杠杆臂 $\alpha$     | $6\%$、变化量 $<10\%$（非掺杂 GaAs 双量子点）                                    |          |
| 电子温度 $T_e$      | $80\ \mathrm{mK}$（无微波），$280\ \mathrm{mK}$（$28\ \mathrm{GHz}$ 微波加热后） |          |
| 电荷弛豫时间 $T_1$  | $8\ \mathrm{ns}$（GaAs，$1\ \mathrm{K}$ 以上电子温度）                           |          |
| 电荷弛豫时间 $T_1$  | $\approx 15\ \mathrm{ns}$（非掺杂 GaAs）                                         |          |
| 退相干时间 $T_2^*$  | $\approx 330\ \mathrm{ps}$（非掺杂 GaAs）                                        |          |
| 一阶 PAT 峰半高全宽 | $\approx 0.42\ \mathrm{mV}$（$28\ \mathrm{GHz}$，饱和功率）                      |          |
| PAT 提取的耦合能    | $7\ \mathrm{GHz}$（GaAs 串联双点）                                               |          |
| 中间电极调谐范围    | $2t_c$ 从 $10\ \mu\mathrm{eV}$ 至 $100\ \mu\mathrm{eV}$（指数拟合）              |          |
| 斩波混频器          | Marki M80420MS 1120                                                              | 、       |
| 信号源              | Agilent E8257D（GaAs） / HP 86732B（三量子点） / Agilent 8253D                   | 三篇论文 |

## 实验特征

### 标准测量流程

PAT 测量通常在电荷稳定图（蜂窝相图）的电荷转移线附近进行。实验上，先用 QPC 输运或 QPC 调制方法定位 $(N+1,M)\leftrightarrow(N,M+1)$ 的电荷转移线，固定好两侧点的失谐 $\varepsilon$，然后从高频同轴线或专用微波电极（如右侧 plunger gate）施加 GHz 量级的微波。对扫描得到的微分电导 $dI/dV$，在转移线两侧对称位置会出现若干条平行线（边带峰），每条对应一个 $n$ 阶 PAT 过程。增大微波频率，边带峰位置向外移动；增大微波功率，高阶边带峰逐渐出现并加亮。

### 频率依赖与耦合提取

把一阶 PAT 共振峰到电荷转移线中心的失谐 $\varepsilon$ 测出来，变化微波频率 $f$，按照

$$
\alpha\varepsilon=\sqrt{(h f)^2-(2t)^2}
$$

拟合，即可同时给出 $\alpha$ 和 $t$。在 GaAs 串联双量子点上，这一拟合曾从 $9\ \mathrm{GHz}$ 到 $20\ \mathrm{GHz}$ 的扫频数据中提取出隧穿耦合能 $2t_c=7\ \mathrm{GHz}$——比从蜂窝图六边形几何中读出的电容耦合能（$16\ \mathrm{GHz}$）还要小一半，是单独测量[[fundamentals/tunnel-coupling|隧穿耦合]]的直接手段。

### 功率依赖：Bessel 振荡与 LZSM 干涉

随驱动功率提高，一阶 PAT 峰的强度 $J_1^2(\alpha)$ 按 Bessel 函数振荡——在某些特定功率附近，一阶峰强度几乎为零，功率继续增大时高阶峰才接替上来。这种"峰高按 Bessel 函数振荡"的特征是 PAT 区别于普通跃迁的指纹。功率足够大、$\alpha$ 超过 1 之后，PAT 共振条件与[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]耦合，系统从分立的边带峰过渡到连续的干涉图样——这就是[[qubit-control/lzsm-interference|LZSM 干涉]]。在电子温度 $2\ \mathrm{K}$ 以上的 GaAs 双量子点中，14 阶 PAT 过程同时配合 LZSM 干涉图样被观察到。

### 弛豫与退相干

PAT 共振峰的强度与宽度承载相干信息：

- **弛豫时间 $T_1$**：把连续微波斩波成 50% 占空比可调周期 $\tau$ 的脉冲，PAT 峰高作为 $\tau$ 的函数按

```math
\frac{M(\tau)}{M(\tau_0)}=\frac{1}{2}+\frac{T_1}{\tau}\left(1-e^{-\tau/2T_1}\right)
```

衰减，拟合得 $T_1$；

- **退相干时间 $T_2^*$**：饱和一阶 PAT 共振峰的半高全宽（FWHM）$\Delta V_{\mathrm{FWHM}}$ 通过杠杆臂换算成能量 $\hbar\Delta\omega=\alpha\,\Delta V_{\mathrm{FWHM}}$，再除以 $\hbar$ 得 $T_2^*=1/\Delta\omega$。在非掺杂 GaAs 双量子点上，曾测得 FWHM $\approx 0.42\ \mathrm{mV}$、$\alpha=0.06\ \mathrm{meV/mV}$，对应 $\hbar\Delta\omega\approx 12.6\ \mu\mathrm{eV}$，即 $T_2^*\approx 330\ \mathrm{ps}$。

微波驱动本身对样品的加热效应往往会使电子温度从 $80$ mK 升至 $280$ mK 量级，从而限制可提取的最短 $T_2^*$；改进绝缘层、把微波加热效应降到更低电子温度是延长 $T_2^*$ 的关键工程方向。

### 三量子点中的边带峰

在[[fundamentals/double-quantum-dot|双量子点]]中，PAT 边带峰总是出现在转移线两侧、对称分布。在线性耦合三量子点中，三个充电线交汇处会出现三种交叉区域：左右两个直接隧穿耦合的量子点之间（区域 3）会出现与双量子点 PAT 完全相同的对称边带峰；没有直接隧穿耦合的两个外侧点之间（区域 2）则只在一侧出现边带峰——其根源是中间量子点的虚跃迁把电子从一个外侧点经虚态传递到另一外侧点，整个过程仍由微波驱动场 $h f$ 提供光子数补偿。三量子点 PAT 是用 PAT 探测"间接耦合"信息的一个标志实验。

### 与单发读出的区别

PAT 用连续微波驱动、把电荷转移过程"打开"为电流；而[[readout-measurement/single-shot-readout|单发读出]]则用单个短脉冲把电荷态（自旋态）制备到目标态并立刻测量。两者在器件结构上类似，但 PAT 是相干谱学工具、给出 $T_1$、$T_2^*$ 与 $t$ 等参数；单发读出是测量读出工具、给出比特态的离散结果。

## 与腔光子的区别

经典微波源产生的 PAT 通常对应强相干驱动——驱动场相干长度远大于隧穿事件，场被视为经典周期势，[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]则要求受限腔模（相干长度可与隧穿时间相比）的少光子场。两者都遵循能量匹配 $n h f=\Delta E$，但场的量子统计和回作用不同：

- **PAT（强相干驱动）**：$\alpha\gg 1$ 时进入 Floquet 准能级图像，能谱分裂成由 Bessel 函数加权的边带；
- **腔耦合（弱、少光子）**：$\alpha\lesssim 1$，进入[[circuit-qed/jaynes-cummings-model|JC 哈密顿量]]框架，共振时出现[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]，色散时出现[[readout-measurement/dispersive-readout|色散频移]]。

可以把 PAT 看作"经典强驱动极限下的电荷–光子耦合"：当 $\alpha$ 大到 RWA 失效时需要回到完整的 Rabi 模型，这与 JC 模型的反旋项区间在物理上接续。

## 与其他概念的关系

- [[fundamentals/tunnel-coupling|隧穿耦合]] $t$：PAT 共振峰位置的指纹方程 $\alpha\varepsilon=\sqrt{(h f)^2-(2t)^2}$ 中显含 $t$，因此 PAT 是独立于六边形几何的隧穿耦合直接测量手段；
- [[fundamentals/coulomb-blockade|库仑阻塞]]：PAT 把阻塞区内的"无电流"重新打开为可观测的边带峰电流，是阻塞条件下提取能谱的关键途径；
- [[fundamentals/charge-stability-diagram|电荷稳定图]]：PAT 测量固定在电荷转移线中点进行，稳定图提供坐标系；反过来 PAT 又能给出蜂窝图几何不能分辨的隧穿耦合；
- [[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]与[[qubit-control/lzsm-interference|LZSM 干涉]]：当驱动足够强、$\alpha$ 大到使失谐随时间扫过反交叉时，PAT 与 LZSM 干涉统一为同一个周期驱动二能级系统的 Floquet 描述；
- [[qubit-control/charge-qubit|电荷量子比特]]与[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]：PAT 谱是电荷比特的原位表征工具，给出 $T_1$、$T_2^*$ 与[[fundamentals/charging-energy|充电能]]等关键参数；
- [[circuit-qed/charge-photon-coupling|电荷–光子耦合]]与[[circuit-qed/jaynes-cummings-model|JC 模型]]：PAT 是腔量子电动力学在"经典极限"下的对应，色散读出与 PAT 共振条件在数学上接续；
- [[materials-devices/gaas-algaas|GaAs/AlGaAs 异质结]]：传统 GaAs 双量子点是 PAT 谱学的标准平台，非掺杂 GaAs 把 $T_2^*$ 的天花板提高到了接近传统器件的水平；
- [[materials-devices/charge-noise|电荷噪声]]：PAT 共振峰的展宽部分源于低频电荷噪声，是测量 [[materials-devices/charge-noise|电荷噪声]]对相干时间影响的直接途径。
