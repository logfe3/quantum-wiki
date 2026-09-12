---
title: Ramsey 干涉
description: 用两个相隔自由演化时间的 π/2 脉冲测量量子比特失谐与非均匀退相干。
aliases:
 - Ramsey条纹
 - 拉姆齐干涉
 - Ramsey 干涉
 - 拉姆齐干涉法
 - 拉姆塞干涉
tags:
 - 量子比特操控
 - 相干表征
date: 2026-09-08
---

<div class="entry-lead">Ramsey 序列让量子比特自己“走表”：第一个 π/2 脉冲建立叠加态，自由演化积累相位，第二个 π/2 脉冲把相位差转换成可读出的占据概率。</div>

## 历史与物理图像

Ramsey 干涉源于 Norman F. Ramsey 1949/1950 年提出的分离振荡场（separated oscillatory fields）方法，最初用于原子钟与受激发射实验：让一束粒子先后穿过两个空间分离、相位相干的微波场，得到的跃迁概率是粒子在两场之间飞行时间的振荡函数，振荡频率即为粒子本征频率与微波频率之差。Ramsey 因此获得 1989 年诺贝尔物理学奖。把这一思路搬到单个量子点上，两个相位相干的微波脉冲被替换为时间上分开的两个 π/2 旋转：第一个 π/2 把基态拉到赤道面上的最大叠加态，中间的自由演化时间 $t_\text{wait}$ 让相位积累，第二个 π/2 把积累的相位投影回 $z$ 轴用以读出。在量子点平台上，Ramsey 序列通常与 Rabi 振荡、动态解耦（[[qubit-control/dynamical-decoupling|动力学解耦]]）一起使用，是单比特相干表征的标准工具之一。

<!-- FIGURE: 分离振荡场的两类原始实验：原子束穿过两个相位相干微波腔（左）与单个量子比特上的 π/2–t–π/2 脉冲序列（右），二者给出等价的振荡信号 -->

## 脉冲序列与 Bloch 球演化

对 [[qubit-control/charge-qubit|电荷量子比特]]、[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/hole-spin-qubit|空穴自旋量子比特]]以及 [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]，Ramsey 操作均由两段相位连续的 π/2 脉冲组成：在驱动频率 $\omega_d$、绕 $x$ 轴旋转 $\pi/2$，间隔自由演化时间 $\Delta t$：

$$
\left(\frac{\pi}{2}\right)_x-\Delta t-\left(\frac{\pi}{2}\right)_x.
$$

Bloch 球上看，Ramsey 等价于"先转到赤道面 → 绕 $z$ 轴自由演化 → 再投回 $z$ 轴"的三步操作：

1. 第一个 $\pi/2$ 把基态 $|0\rangle$ 制备到等权叠加态 $(|0\rangle+|1\rangle)/\sqrt{2}$，对应 Bloch 矢量落在 $+y$ 方向；
2. 等待 $\Delta t$，Bloch 矢量绕 $+z$ 轴以角速度 $\Delta_{a,d}=\omega_a-\omega_d$ 旋转，累积相位 $\varphi=\Delta_{a,d}\Delta t$；
3. 第二个 $\pi/2$ 把累积相位翻译为 $|0\rangle$、$|1\rangle$ 上的占据概率：$P_\uparrow=\frac{1}{2}\left[1+\cos(\Delta_{a,d}\Delta t)\right]$。

对电荷比特， 在第 3.4 节给出了利用微波斩波实现这一序列的具体方式：先用绝热上升沿把电子初始化到平衡点（$(|L\rangle+|R\rangle)/\sqrt{2}$），然后控制微波宽度恰好旋转 $\pi/2$，再关闭微波等待时间 $t_e$，最后施加第二个 $\pi/2$ 并通过绝热下降沿测量 $|L\rangle$ 态占据概率。对自旋比特， 把任意波形发生器 AWG5208 与微波源 E8267D 配合：两段相位连续的 $\pi/2$ 微波之间是低电平等待，需要在计算第一段 $\pi/2$ 的相位时扣除等待时间内的相位累积，才能保证两次旋转的参考系一致。

<!-- FIGURE: Bloch 球上 Ramsey 三步操作：π/2 转到赤道 → 绕 z 自由演化 → 第二个 π/2 投回 z 轴 -->

## 理论模型：旋转参考系下的相干演化

把驱动微波频率设为参考系，原二能级哈密顿量

$$
H_0/\hbar=\tfrac{1}{2}\omega_a\sigma_z
$$

在旋转波近似下变换为失谐 $\Delta_{a,d}=\omega_a-\omega_d$ 与驱动幅 $A(t)$ 的有效哈密顿量：

$$
H'/\hbar=\tfrac{1}{2}(\omega_a-\omega_d)\sigma_z+A(t)\sigma_x.
$$

 在第 4.3 节给出了完整推导：把比特初态取为基态 $|\varphi(0)\rangle=|0\rangle$，则 Ramsey 序列结束后处于 $|1\rangle$ 的几率幅为

$$
\langle 1|\varphi(t_0)\rangle=\langle 1|U_{\pi/2}\exp\!\left[-i\frac{\Delta_{a,d}\Delta t}{2}\sigma_z\right]U_{\pi/2}|0\rangle
=C_0\cos\!\left(\tfrac{\Delta_{a,d}\Delta t}{2}\right)-iC_1\cos\!\left(\tfrac{\Delta_{a,d}\Delta t}{2}\right)
$$

其中 $C_0=\langle 1|U_{\pi/2}U_{\pi/2}|0\rangle$、$C_1=\langle 1|U_{\pi/2}\sigma_z U_{\pi/2}|0\rangle$。当驱动频率等于比特共振频率时，$U_{\pi/2}=U_{x/2}=\exp(-i\pi\sigma_x/4)$，于是 $C_0=1$、$C_1=0$，上式化为

$$
\langle 1|\varphi(t_0)\rangle=\cos\!\left(\tfrac{\Delta_{a,d}\Delta t}{2}\right).
$$

由 $|\langle 1|\varphi(t_0)\rangle|^2=\frac{1}{2}\left[1+\cos(\Delta_{a,d}\Delta t)\right]$ 直接看出，Ramsey 干涉信号的振荡周期是比特与驱动微波之间的频率差 $\Delta_{a,d}$——这正是用 Ramsey 序列精确标定比特共振频率的物理基础。

## 失谐条纹与 $T_2^*$ 的提取

实际体系中还存在环境噪声与重复实验之间的慢漂移，它们叠加到失谐上，使相位积累变为随机过程。常用的拟合模型是失谐为 $\Omega_\text{Ramsey}$ 的阻尼振荡：

$$
\rho(t_\text{wait})=\rho(0)\cos\!\left(\Omega_\text{Ramsey}\,t_\text{wait}\right)\exp\!\left(-\frac{t_\text{wait}}{T_2^*}\right)+\rho_0
$$

其中 $\rho(0)$ 是等待时间趋于零时比特处于参考态的概率，$\Omega_\text{Ramsey}$ 是驱动微波与比特共振频率之间的失谐量，$\rho_0$ 是平衡占据，所引论文的式 (2.16) 即此公式。当 $\Omega_\text{Ramsey}=0$ 时信号退化为纯指数衰减；$\Omega_\text{Ramsey}\neq 0$ 时则是以 $\Omega_\text{Ramsey}$ 为振荡频率的指数衰减包络。

注意 $T_2^*$ 与 Hahn-Echo 测得的 $T_2^\text{H}$ 不同：$T_2^*$ 包含缓慢漂移和准静态低频噪声，而 $T_2^\text{H}$ 通过在等待时间中点插入 $\pi$ 脉冲让相位反向积累，可以抵消对称的低频扰动。两者之差

$$
\Delta T_2=T_2^\text{H}-T_2^*
$$

定量刻画了准静态噪声贡献的退相干通道，是判断体系主要噪声类型的关键指纹。 第 5.3.4 节给出的 Ge 空穴自旋比特结果是 $T_2^*=136\ \mathrm{ns}$、$T_2^\text{Echo}=401\ \mathrm{ns}$、$T_2^\text{CPMG}=6.75\ \mu\mathrm{s}$（$N_\pi=230$），$T_2^\text{CPMG}/T_2^*\approx 50$；第 2.6.1 节给出另一组 Ge 数据 $T_2^*=120\ \mu\mathrm{s}$、$T_2^\text{H}=1.2\ \mathrm{ms}$、$T_2^\text{CPMG}=28\ \mathrm{ms}$，差距更为悬殊，提示该器件以 $1/f$ 噪声为主导。

## 滤波函数视角下的 $T_2^*$

把量子比特相位积累与噪声功率谱关联起来，可以把 $T_2^*$ 写成对噪声谱 $S(f)$ 的积分。 第 6.5 节给出的处理思路是：栅极电压噪声 $\delta V_{G_i}(t)$ 通过纵向自旋–电场灵敏度 $D_{G_i}=\partial f_L/\partial V_{G_i}^0$ 在自由演化时间内转化为拉莫尔频率的随机扰动，密度矩阵的非对角元在随机相位累积下衰减

$$
\langle\tilde\rho_{01}(t)\rangle=\tilde\rho_{01}(0)\exp\!\left[-\tfrac{1}{2}\langle\delta\phi^2(t)\rangle\right]
$$

其中

$$
\langle\delta\phi^2(t)\rangle=4\pi^2\sum_i D_{G_i}^2\int df\,S_{G_i}(f)\,|\tilde\eta_t(f)|^2.
$$

脉冲序列通过滤波函数 $\eta_t(t')$ 改变低频/高频权重。对应 Ramsey 序列有

$$
|\tilde\eta_t^\text{R}(f)|^2=\left(\frac{\sin(\pi f t)}{\pi f}\right)^2
$$

它对低频噪声 $\sim 1/f^\alpha$（$\alpha\approx 1$）给出最强的权重，因此 $T_2^*$ 对低频噪声高度敏感。利用对数平均 $f_\text{lf}$、$f_\text{hf}$， 把

$$
\frac{1}{T_2^*}\approx 2\pi\sqrt{\ln\!\left(\frac{f_\text{hf}}{f_\text{lf}}\right)}\sqrt{f_\text{lf}}\,\sum_i\left(\frac{\partial f_{Q_1}}{\partial V_{P_i}^\text{lf}}\right)^2 S_{P_i}^\text{hf}
$$

作为拟合公式，与实验吻合良好。这正是为何通过 Ramsey 实验测得的相干时间往往比体系本征 $T_2$ 短得多：它本质上是体系对低频噪声敏感度的直接量度。

## 关键参数与量级

| 量 | 典型值 | 物理含义 / 备注 | 来源 |
| --- | --- | --- | --- |
| 共振频率 $\omega_a/2\pi$ | 4–20 GHz | 电荷、自旋比特工作频段 | |
| Ramsey 振荡频率 | $\Delta_{a,d}/2\pi$ | 等于驱动失谐 | |
| GaAs 双量子点电荷比特 $T_2^*$ | 1.5 ns | Si/SiGe 双量子点上的早期演示 | |
| Si 自旋比特 $T_2^*$ | 0.42 ± 0.31 µs（$\varepsilon=0$）；0.43 ± 0.02 µs（$\varepsilon=1.5$ meV） | 翻转模式电偶极自旋共振 | |
| Ge 空穴自旋 $T_2^*$ | 120 µs / 136 ns | 不同器件、不同章节 | |
| Ge 空穴自旋 $T_2^\text{H}$ | 1.2 ms / 401 ns | Hahn-Echo | |
| Ge 空穴自旋 $T_2^\text{CPMG}$ | 28 ms / 6.75 µs（$N_\pi=230$） | CPMG 序列 | |
| 品质因子 $Q=f_\text{Rabi}\cdot T_2^*$ | 最高约 40 | 与 $f_\text{Rabi}$ 同向变化 | |
| 等待时间中 Ramsey 失谐 | 20 MHz | 用于扫频条纹 | |
| 微波驱动谐振频率 | 19.8221 GHz（Si 自旋比特）；$f_\text{Rabi}=1.089\pm 0.002$ MHz | 翻转模式样品 | |
| $\pi/2$ 脉冲长度 | 0.229 µs | 由 Rabi 频率折算 | |
| 单空穴比特最优工作点 $T_2^\text{H}$ | 17.6 µs（IBM）；88 µs（De Franceschi） | "sweet spot" 工作磁场 | |

需要注意：在电荷比特体系中，电偶极矩大、隧穿耦合 $2t_c$ 强（往往大于驱动频率），使得电荷比特本身的 $T_2^*$ 只有纳秒量级；但因为单比特门也只需纳秒级时间完成，相对相干性仍能支持可观数量的脉冲操作。

## 实验特征与测量方案

### 共振频率标定

固定 $\Delta t$，扫描驱动微波频率 $\omega_d$，得到 Ramsey 振荡频率 $f_\text{Ramsey}=\Delta_{a,d}/2\pi$ 随 $\omega_d$ 的关系。直线 $f_\text{Ramsey}=\omega_a/2\pi-\omega_d/2\pi$ 与 $f_\text{Ramsey}=0$ 的交点即比特共振频率 $\omega_a$。 在第 4.3 节末尾验证了 $f_\text{Ramsey}=\Delta_{a,d}/2\pi$ 这一线性关系，并在 $\Delta t=n/\Delta_{a,d}$（$n=0,2,4,\dots$）位置用绿色虚线标出比特在操控微波驱动下占据 $|1\rangle$ 概率最大处。

### 相干时间提取

固定驱动频率 $\omega_d$ 略偏离 $\omega_a$（典型失谐 10–20 MHz），扫描 $\Delta t$，把振荡包络拟合到 $\rho(0)\cos(\Omega_\text{Ramsey}\Delta t)\exp(-\Delta t/T_2^*)+\rho_0$ 即可提取 $T_2^*$。 的工作给出 $\varepsilon=0$ 与 $\varepsilon=1.5$ meV 两个能级失谐处的 $T_2^*$，均约 $0.42\ \mu\mathrm{s}$，说明该翻转模式样品在两个工作点上的相干时间基本一致。

### 长时间漂移监测

把等待时间固定在某一个值上，连续运行几十小时（如 第 6.5 节的 55 小时），直接观察比特相位随时间的缓慢漂移；这一方法常与[[scaling-automation/automatic-tuning|自动化标定]]流程结合，用来校正虚拟 Z 门和工作点漂移。

### 噪声谱反演

通过不同失谐下的多次 Ramsey 拟合，把 $T_2^*$ 对失谐 $\Omega_\text{Ramsey}$ 的依赖关系反演出低频段的噪声功率谱密度 $S(f)$；再配合 CPMG、UDD 等序列测得的 $T_2$，可以重构覆盖宽频段的噪声谱 第 6.5 节结果。

### 读出方式

Ramsey 信号既可以用电荷比特传统的电荷传感器（[[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]）读出，也可以用时间平均色散读出（time-averaged dispersive readout）——通过微波谐振腔的反射系数，把比特相位信息转化为腔反射幅值，避免了在纳秒量级等待时间内对单发读出的苛刻要求。色散读出的相位响应使比特相干演化可以从谐振腔微波响应中恢复，且测量本身对相干时间无破坏。

## 与其他操控/概念的关系

- [[qubit-control/rabi-oscillation|Rabi 振荡]]主要标定旋转速度与脉冲面积，Ramsey 主要标定相位演化与频率稳定性，两者合起来才足以定义可靠的单比特门。
- 在 Ramsey 序列中点插入 $\pi$ 脉冲即得 Hahn-Echo；继续插入多个 $\pi$ 脉冲则得 [[qubit-control/dynamical-decoupling|CPMG 等动力学解耦序列]]，可以分别抑制低频与高频段噪声，把可观测相干时间向 $T_2$ 本征值推进。
- [[qubit-control/charge-qubit|电荷比特]]因电偶极矩强、隧穿耦合大，$T_2^*$ 通常只有纳秒；[[qubit-control/single-spin-qubit|单自旋量子比特]]与[[qubit-control/hole-spin-qubit|空穴自旋量子比特]]则因偶极矩弱、相干时间长得多，但代价是驱动效率低、需要 EDSR 或微磁体辅助。
- 若在 Ramsey 等待时间内用[[qubit-control/exchange-interaction|交换相互作用]] $J(t)$ 打开/关闭两比特耦合，则演化为 Ramsey 型两比特门协议，可用来标定 $J$ 的大小与时间演化——见 第 3.4 节对 CZ 门相位标定的描述。
- Ramsey 测得的 $T_2^*$ 对低频 $1/f$ 噪声敏感，而 $1/f$ 噪声在[[materials-devices/charge-noise|电荷噪声]]、核自旋 Overhauser 场涨落与[[materials-devices/interface-defects|界面缺陷]]等通道中普遍存在，因此 $T_2^*$ 与体系材料、栅极介电、磁场取向等密切相关。

## 测量注意点

1. **两段 $\pi/2$ 必须相位连续**：参考系不一致相当于在两个脉冲之间额外插入了一个未知的 $z$ 旋转，振荡相位会出现整体偏移。微波源与 AWG 配合时，要把等待时间内的相位补偿进第一段 $\pi/2$ 的相位寄存器 。
2. **驱动频率与比特频率需故意失谐**：纯共振时（$\Delta_{a,d}=0$）信号退化为无振荡的指数衰减，无法拟合失谐 $\Omega_\text{Ramsey}$；失谐也不宜过大，否则振荡过快、采样不足。
3. **多次平均抑制单发读出噪声**：与 Rabi 实验一样，每次单发读出结果需要做 $10^3$–$10^4$ 次平均才能把统计误差压到 1% 以下。
4. **判断包络形状**：若拟合后残差仍呈周期性，说明包络不只是简单指数衰减，提示存在多个噪声时间尺度（$1/f$ 电荷噪声、核自旋噪声、慢漂移并存）。此时可考虑多指数或高斯包络。


## 参考文献

- 自旋比特 Ramsey/回声表征的系统叙述：[[references/hanson-2007|Hanson et al., RMP 79, 1217 (2007)]]、[[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
