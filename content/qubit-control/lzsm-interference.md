---
title: LZSM 干涉
description: 周期或往返扫描避免交叉时，多次 Landau–Zener 跃迁路径发生的量子干涉。
aliases:
 - Landau-Zener-Stückelberg-Majorana干涉
 - LZS干涉
 - LZSM干涉
tags:
 - 量子比特操控
 - 干涉
date: 2026-09-08
---

<div class="entry-lead">LZSM 干涉把一次 Landau–Zener 跃迁当作分束器：两条量子路径在反交叉之间积累不同相位，第二次相遇时相长或相消；扫描足够多周期时，整张图样退化成参数空间的干涉条纹图。</div>

## 物理图像

LZSM 干涉（Landau–Zener–Stückelberg–Majorana interference）的出现场景是：含时二能级系统的失谐 $\varepsilon(t)$ 在时间上做周期性或往返扫描，使系统多次经过同一个[[qubit-control/landau-zener-transition|避免交叉]]。每次经过反交叉，瞬时本征能级之间的 Landau–Zener（LZ）跃迁以概率 $P_\mathrm{LZ}$ 把入射态"分束"成沿两条瞬时本征能级继续演化的两个分量；在两次穿越之间，两个分量沿不同能级 $E_+(t)$ 与 $E_-(t)$ 积累不同的动力学相位；当下一次反交叉再次把它们合束时，相位差决定了相长还是相消。这一过程在形式上与光学 Mach–Zehnder 干涉仪完全同构：

- 反交叉处的 LZ 跃迁 = 分束器；
- 两次穿越之间的绝热演化 = 两条长度不同的光路；
- 最终在反交叉处再次相遇 = 第二个分束器/合束器。

<!-- FIGURE: Mach–Zehnder 类比示意：横轴为时间，纵轴为本征能级 $E_\pm(t)$；标注两次穿越（$\times$ 标记）、两次穿越间的相位累积 $\phi$、两条路径分别走 $E_+$ 与 $E_-$ 的"光程" -->

该图像的三个关键推论是：

1. 条纹周期由相位累积条件 $\phi(\varepsilon_0,\,A,\,t_r)=2N\pi$ 给出，$N$ 为整数；
2. 条纹可见度 $V=4P_\mathrm{LZ}(1-P_\mathrm{LZ})$ 完全由单次穿越的[[qubit-control/landau-zener-transition|LZ 跃迁概率]]决定，因此可见度本身是测 $P_\mathrm{LZ}$ 的工具；
3. 条纹位置对静态失谐 $\varepsilon_0$、驱动幅度 $A$ 与扫描时间 $t_r$ 高度敏感，且对退相干不改变周期、只衰减幅度——这使 LZSM 干涉同时成为相干操控手段与噪声谱学探针。

## 模型哈密顿量与瞬时本征态

以双量子点的左右电荷态 $|L\rangle$、$|R\rangle$ 为裸基，体系含时哈密顿量（见[[qubit-control/landau-zener-transition|LZ 跃迁]]条目）

$$
H(t)=\frac{\varepsilon(t)}{2}\sigma_z+\Delta\sigma_x
$$

给出瞬时本征值

$$
E_\pm(t)=\pm\frac{1}{2}\sqrt{\varepsilon(t)^2+4\Delta^2}
$$

其中 $\varepsilon=E_R-E_L$ 为失谐，$2|\Delta|$ 为反交叉处最小能隙（亦称隧穿耦合，由[[fundamentals/tunnel-coupling|隧穿耦合]]给出）。瞬时本征态

$$
|\pm(t)\rangle=\cos\frac{\theta}{2}\,|L\rangle\pm\sin\frac{\theta}{2}\,|R\rangle,\qquad
\tan\theta(t)=\frac{2\Delta}{\varepsilon(t)}.
$$

远离反交叉（$|\varepsilon|\gg 2|\Delta|$）时 $|\pm\rangle$ 与裸态重合；在反交叉处 $\theta=\pi/2$，两条能级在能量上最近但身份互换。后续讨论中 $2\Delta$ 取正值（具体约定依文献而异，需与[[qubit-control/landau-zener-transition|LZ 跃迁]]条目约定一致）。

### 单次穿越的演化矩阵

把演化分成"远离反交叉的绝热段"与"反交叉附近的脉冲段"两段（绝热–脉冲模型），单次反交叉的演化矩阵可写为

$$
U_\mathrm{LZ}=
\begin{pmatrix}
\sqrt{1-P_\mathrm{LZ}}\,e^{i\varphi_\mathrm{LZ}} & i\sqrt{P_\mathrm{LZ}} \\
i\sqrt{P_\mathrm{LZ}} & \sqrt{1-P_\mathrm{LZ}}\,e^{-i\varphi_\mathrm{LZ}}
\end{pmatrix}
$$

其中混合角 $\theta_\mathrm{LZ}=2\sin^{-1}\sqrt{P_\mathrm{LZ}}$，相位

$$
\varphi_\mathrm{LZ}=\varphi_S-\frac{\pi}{2},\qquad
\varphi_S=\frac{\pi}{4}+\arg\Gamma(1-i\delta)+\delta(\ln\delta-1)
$$

$\varphi_S$ 为斯托克斯相位（Stokes phase），$\delta=\Delta^2/(\hbar v)$ 为绝热参数，$\Gamma$ 为伽玛函数。绝热极限 $\delta\to\infty$ 时 $P_\mathrm{LZ}\to 0$、$\varphi_S\to 0$；突发极限 $\delta\to 0$ 时 $P_\mathrm{LZ}\to 1$、$\varphi_S\to\pi/4$。在 Bloch 球上一次 LZ 跃迁可分解为 $U_\mathrm{LZ}=R_z(-\varphi_\mathrm{LZ})\,R_x(\theta_\mathrm{LZ})\,R_z(-\varphi_\mathrm{LZ})$。

### 两次穿越之间的绝热演化

两次穿越之间的绝热演化只产生绕 $\sigma_z$ 轴的相位，其算符为

$$
U_\phi=\exp\!\left(-i\frac{\phi}{2}\sigma_z\right)
$$

相位 $\phi$ 等于两条本征能级曲线之间在演化区间内所围的面积

$$
\phi=\frac{1}{\hbar}\int_{t_1}^{t_2}\!\bigl[E_+(t)-E_-(t)\bigr]dt
=\frac{1}{\hbar}\int_{t_1}^{t_2}\!\sqrt{\varepsilon(t)^2+4\Delta^2}\,dt.
$$

这正是光学 Mach–Zehnder 干涉仪中的"光程差"角色。

## 两次穿越：从分束到干涉

把两次 LZ 跃迁与中间绝热演化串联，可得总演化算符

$$
U=U_1\,U_\mathrm{LZ}\,U_2\,U_\mathrm{LZ}
=e^{-i\phi_1\sigma_z/2}\,U_\mathrm{LZ}\,e^{-i\phi_2\sigma_z/2}\,U_\mathrm{LZ}.
$$

以 $|-\rangle$ 入射、$|+\rangle$ 出射的概率幅为

$$
p_+=i\,e^{i\phi_1/2}\cos\!\left(\frac{\phi_2}{2}-\varphi_\mathrm{LZ}\right)\sin\theta_\mathrm{LZ}
$$

最终测量到的跃迁概率

$$
P_+=2P_\mathrm{LZ}(1-P_\mathrm{LZ})\bigl[1+\cos(\phi_2-2\varphi_\mathrm{LZ})\bigr]
$$

是 $\phi_2-2\varphi_\mathrm{LZ}$ 的余弦调制——这一相位被称作 Stückelberg 相位 $\varphi_\mathrm{St}$。两个极端情形清晰可读：

- 当 $\varphi_\mathrm{St}=2N\pi$ 时 $P_+$ 取极大值 $4P_\mathrm{LZ}(1-P_\mathrm{LZ})$，相长干涉；
- 当 $\varphi_\mathrm{St}=(2N+1)\pi$ 时 $P_+=0$，相消干涉。

条纹可见度 $V=4P_\mathrm{LZ}(1-P_\mathrm{LZ})$ 只取决于单次穿越的 $P_\mathrm{LZ}$，在 $P_\mathrm{LZ}=1/2$ 时取最大值 $1$。这意味着只要测出 LZSM 条纹的可见度，就能反推 $P_\mathrm{LZ}$，进而独立检验 LZ 公式。

<!-- FIGURE: $P_+$ 随 Stückelberg 相位 $\varphi_\mathrm{St}$ 的余弦振荡；可见度 $V=4P_\mathrm{LZ}(1-P_\mathrm{LZ})$ 随 $P_\mathrm{LZ}$ 的钟形曲线 -->

### 尖脉冲极限：把"控制参数"显式化

以高斯型尖锐脉冲为例：脉冲幅度 $A$、上升沿时间 $t_r$，初始失谐 $\varepsilon_0$，扫速 $v=A/t_r$。在 $\Delta/v\ll 1$ 的尖脉冲极限下，绝热演化相位简化为

$$
\phi_i=\frac{(A-\varepsilon_0)^2}{A}\cdot\frac{t_r}{\hbar}
$$

相长干涉条纹出现在

$$
\varepsilon_0^{(N)}=A-\sqrt{\frac{2\pi\hbar AN}{t_r}}
$$

即失谐位置随条纹阶数 $N$ 以平方根压缩——这是 LZSM 条纹区别于一般[[qubit-control/rabi-oscillation|拉比振荡]]的指纹。

总演化在 Bloch 球上的合成旋转为

$$
\varphi=\frac{(A-\varepsilon_0)^2\,t_r}{A\hbar},\qquad
\theta=2\theta_\mathrm{LZ}=4\sin^{-1}\exp\!\left(-\frac{2\pi\Delta^2 t_r}{\hbar A}\right).
$$

由于 $A$、$t_r$、$\varepsilon_0$ 与 $\Delta$ 均独立可调，一次 LZSM 序列即可实现 Bloch 球上任意角度的旋转，对应普适单比特操控——这正是 GaAs 双量子点电荷比特上曹刚等人 2013 年的实验（Cao et al., *Nature Communications* 4, 1401）所演示的过程。

## 周期驱动与 Floquet 描述

实际实验中常给失谐施加单色微波 $\varepsilon(t)=\varepsilon_0+A_d\sin(2\pi\nu_d t)$。每个驱动周期两次穿越反交叉，多次 LZ 跃迁叠加出稳态干涉图样；此时需要用[[circuit-qed/floquet-dynamics|Floquet 理论]]系统化处理。

含时薛定谔方程 $H(t)|\psi\rangle=i\hbar\partial_t|\psi\rangle$ 在周期驱动下存在准能量（quasienergy）$\mu$ 与周期性的准能量态 $|\phi_\alpha(t)\rangle=|\phi_\alpha(t+T)\rangle$ 满足

$$
\bigl[H(t)-i\hbar\partial_t\bigr]|\phi_\alpha(t)\rangle=\mu_\alpha|\phi_\alpha(t)\rangle
$$

把含时问题化为 Sambe 空间 $\mathcal{H}_0\otimes\mathcal{H}_T$ 中的本征值问题

$$
H_F|\phi\rangle=\mu|\phi\rangle
$$

矩阵元为

$$
\langle\alpha,n|H_F|\beta,m\rangle=H^{(n-m)}_{\alpha\beta}+m\hbar\omega_d\,\delta_{\alpha\beta}\delta_{nm}.
$$

求解得到准能量具有类似固体能带的一维周期性（布里渊区），相邻 Floquet 态在布里渊区边界处发生"免交叉"，对应实验中观测到的 Floquet 谱线。Floquet 态的占据概率 $p_\alpha$ 由 Bloch–Redfield 主方程的稳态给出：在免交叉点附近 $p_0\approx p_1\approx 1/2$，远离免交叉点则集中占据在平均能量较低的 Floquet 态上。

对受驱电荷比特，受腔的相位平均磁化系数（phase-averaged susceptibility）表征腔响应

$$
\chi^{(0)}(\nu)=(p_0-p_1)\sum_k\frac{|Z_{10,k}|^2}{2\pi\nu-2\pi\mu/\hbar+2\pi k f_d+i\gamma/2}
$$

其中 $Z_{10,k}$ 是偶极算符 $\tau_z$ 在 Floquet 态间的第 $k$ 阶傅里叶分量。腔反射信号幅值 $|S_{11}|$ 因此能直接读出 Floquet 布居与干涉相位。

### 双共振条件与"月牙"孔洞

当 Floquet 态间的跃迁共振条件 $\mu/h=kf_d$（$k$ 为整数）与腔辅助跃迁条件 $\mu/h=\nu_r+k'f_d$ 同时满足，即双共振条件

$$
kf_d=\mu/h=\nu_r+k'f_d\quad(k\neq k')
$$

对应驱动频率 $f_d=\nu_r/2,\,\nu_r/3,\ldots$ 时，干涉图样出现新现象：每个干涉条纹从中部被劈开，出现"月牙"形孔洞（crescent-shaped hole），孔洞中心腔反射信号被强烈抑制。物理解释是：在准能量免交叉附近 Floquet 态布居数重新分布，$p_0-p_1$ 接近 0，$\chi^{(0)}$ 与腔响应同步塌陷。该现象与光学烧孔类似，在 GaAs 双量子点–高阻抗 SQUID 阵列腔（$2t_c/h=6.2$ GHz、$\nu_r=6.51$ GHz、$f_d=3.3$ GHz）上被直接观测到（论文第 6 章）。

## 量子点体系的具体实现

### 电荷比特：脉冲扫过反交叉

[[qubit-control/charge-qubit|电荷量子比特]]把单个电子在双量子点中的位置 $|L\rangle$/$|R\rangle$ 编码为基矢，失谐由栅压脉冲控制。在 GaAs/AlGaAs 双量子点（电极几何约 250 nm、2DEG 在表面下 95 nm、密度 $3.2\times10^{11}$ cm$^{-2}$、迁移率 $1.5\times10^5$ cm$^2$/V·s）中，调节栅压把反交叉能隙调至 $2\Delta=20.7\ \mu$eV（$\approx 5$ GHz，由拉比频率标定），用 Agilent 81134A 脉冲码型发生器经 Anritsu K251 T 型偏置器叠加直流偏置施加在电极 A3 上，样品装载于 Oxford Triton 400 无液氦稀释制冷机中（T=30 mK），由量子点接触（QPC）作为[[readout-measurement/qpc-charge-sensor|电荷传感器]]读取电荷分布。固定脉冲形状后扫描静态失谐 $\varepsilon_0$，占据概率随 $\phi_i\propto(A-\varepsilon_0)^2$ 周期性振荡；相长干涉条纹位置 $\varepsilon_0^{(N)}=A-\sqrt{2\pi\hbar AN/t_r}$ 与理论预言定量吻合。

### 单态–三重态比特的 $S$–$T_+$ 反交叉

[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]中，核场横向分量把 $S$–$T_+$ 交叉变成反交叉，可用相同的 LZSM 框架做相干控制：

- 单次以速率 $v$ 穿过反交叉，停留在 $S$ 的概率为 $|A_S|^2=P_\mathrm{LZ}=e^{-2\pi\Delta_{ST}^2/\hbar v}$；
- 中间停留 $\tau_S$ 后沿失谐 $\varepsilon$ 演化，相位累积

```math
\phi=\frac{1}{\hbar}\int\!\bigl[E_S(\varepsilon(t))-E_{T_+}(\varepsilon(t))\bigr]dt;
```

- 第二次穿越再次经过反交叉并发生干涉。在 $P_\mathrm{LZ}=1/2$ 的理想工作点，每次穿越等效于一个 Hadamard 门，中间相位累积等效于绕 $z$ 轴旋转，二者合成普适单比特操作；
- 同一反交叉的"绝热穿过、非绝热返回"循环每圈翻转一个核自旋，实现动态核自旋极化（DNP），在两点间建立稳定的磁场梯度（论文第 2.2.4 节）。

### 周期微波驱动与腔探测

把微波以电极方式耦合到失谐 $\varepsilon(t)=\varepsilon_0+A_d\cos(2\pi\nu_d t)$ 时，每次驱动周期内两次穿越反交叉，相当于对 Stückelberg 相位 $\varphi_\mathrm{St}$ 做周期性扫描。在 GaAs 双量子点–SQUID 阵列高阻抗腔体系（论文第 6 章）中：

- 隧穿耦合速率 $2t_c/h=6.2$ GHz，谐振腔 $\nu_r=6.51$ GHz；
- 耦合强度 $g_c/2\pi\approx 70$ MHz，超过退相干速率 $\gamma/2\pi\approx 50$ MHz 与腔耗散速率 $\kappa/2\pi\approx 65.2$ MHz，处于强耦合区；
- 在 $f_d=3.3$ GHz（$\approx\nu_r/2$）驱动下，干涉条纹中部劈开为月牙孔洞，腔反射信号幅值在孔洞处被显著抑制。

强周期驱动的另一表现：与[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]（PAT）共享同一实验条件。在双量子点 PAT 实验（15 GHz 微波）中，峰高随功率在某些功率点几乎归零、峰位等间距、高功率下出现更多阶数的峰——这三个特征正是 LZSM 干涉区别于单光子 PAT 的指纹。

## 参数与量级

| 量 | 典型值 | 体系 / 来源 |
| --- | --- | --- |
| 反交叉能隙 $2\Delta$ | $20.7\ \mu$eV（$\approx 5$ GHz，由拉比频率标定） | GaAs/AlGaAs 双量子点电荷比特 |
| 量子点几何尺寸 | $\approx 250$ nm；2DEG 位于表面下 95 nm | 同上 |
| 2DEG 电子密度 / 迁移率 | $3.2\times10^{11}$ cm$^{-2}$ / $1.5\times10^5$ cm$^2$/V·s | 同上 |
| 稀释制冷机温度 | $30$ mK（Oxford Triton 400） | 同上 |
| 脉冲源 | Agilent 81134A + Anritsu K251 偏置 T | 同上 |
| 微波驱动频率 | $15$ GHz（PAT/LZS 实验） | 章节引用 |
| $S$–$T_+$ LZS 工作磁场 | 数十至上百 mT | GaAs 自旋比特 |
| 强耦合腔辅助 LZSM | $\nu_r=6.51$ GHz、$2t_c/h=6.2$ GHz、$g_c/2\pi\approx 70$ MHz | GaAs 双点–SQUID 阵列腔 |
| 双共振频率 | $f_d\approx\nu_r/2=3.3$ GHz | 同上 |
| Bloch 球单比特门操作保真度 | $\sim 68\%$（振幅控制） | 双电荷比特 CNOT 中由 LZS 实现控制比特相位 |

## 实验特征与判据

**条纹周期对参数的依赖**：固定脉冲形状扫描静态失谐，$P_+$ 关于 $\varepsilon_0$ 的振荡周期由

$$
\varepsilon_0^{(N)}=A-\sqrt{\frac{2\pi\hbar AN}{t_r}}
$$

控制——条纹位置随 $N$ 平方根压缩，与[[qubit-control/rabi-oscillation|拉比振荡]]的等周期条纹明显不同，是 LZSM 干涉的指纹特征。

**可见度反推 $P_\mathrm{LZ}$**：理想情形下 $V=4P_\mathrm{LZ}(1-P_\mathrm{LZ})$；测出 $V$ 即可反推 $P_\mathrm{LZ}$，再独立检验 LZ 公式 $P_\mathrm{LZ}=e^{-2\pi\Delta^2/\hbar v}$。在论文中这一关系被进一步用于模拟 Kibble–Zurek（KZ）机制中的拓扑缺陷密度。

**与 KZ 机制的对应**：LZSM 干涉与 KZ 机制存在一一对应——扫速倒数 $1/v$ ↔ 淬火时间 $\tau_Q$、能级间隔倒数 $1/E_\Delta$ ↔ 弛豫时间 $\tau$、LZ 跃迁概率 $P_\mathrm{LZ}$ ↔ 归一化拓扑缺陷密度 $\rho_d$。在电荷比特上固定脉冲宽度、连续改变脉冲幅度调节扫速 $v$，测出 $P_\mathrm{LZ}(v)$ 即可重现 KZ 预言的 $\rho_d(\tau_Q/\tau_0)$ 关系（论文第 6 章）。这一对应把 LZSM 干涉的可见度直接连接到非平衡相变的标度律。

**退相干的作用**：退相干不改变条纹的周期结构，只压低条纹幅度，且高阶条纹衰减更快。把条纹可见度按阶数展开做 Fourier 变换可同时提取 $T_2^*$（高斯衰减）和 $T_2$（指数衰减）：

$$
P_\mathrm{FT}(k_A,k_\varepsilon)\propto\exp\!\left(-\frac{k_\varepsilon}{T_2}-\frac{k_\varepsilon^2}{2T_2^{*2}}\right)
$$

使 LZSM 干涉成为[[materials-devices/charge-noise|电荷噪声]]谱学的内建工具。

**双共振驱动的"月牙"孔洞**：在双量子点–高阻抗腔杂化系统中，固定 $f_d\approx\nu_r/2$ 扫描失谐与驱动功率，干涉条纹中部被劈开为月牙形孔洞，孔洞中心腔反射信号被强烈抑制；这是 Floquet 态布居在准能量免交叉附近重分布的实验特征（论文第 6 章）。

**读出方式**：在电荷比特中，末态 $|L\rangle$/$|R\rangle$ 直接由 QPC 传感；在自旋比特中先经泡利自旋阻塞做自旋–电荷转换；在腔杂化系统中则由谐振腔透射或反射信号 $|S_{11}|$ 成像整个干涉相图（见[[readout-measurement/dispersive-readout|色散读出]]）。

## 与其他概念的关系

- 模型哈密顿量与[[fundamentals/double-quantum-dot|双量子点]]杂化的两能级描述完全相同，能隙 $2\Delta$ 即[[fundamentals/tunnel-coupling|隧穿耦合]]决定的反交叉间隔；工作点位于[[fundamentals/charge-stability-diagram|电荷稳定图]]的量子点间隧穿线上。
- 与单次穿越的[[qubit-control/landau-zener-transition|LZ 跃迁]]互为补充：LZ 条目侧重单次跃迁概率与绝热参数，LZSM 条目侧重多次穿越的相位累积与干涉图样；二者共用同一组绝热–脉冲模型与 Stokes 相位。
- 与驻留反交叉的[[qubit-control/rabi-oscillation|拉比振荡]]、相位积累的[[qubit-control/ramsey-interferometry|拉姆齐干涉]]共同构成二能级系统相干操控的三种基本范式；LZSM 方案的优点是不依赖在 $\varepsilon=0$ 处精确定时、对波形失真更鲁棒，缺点是逻辑门由多次穿越拼接。
- 在[[qubit-control/charge-qubit|电荷量子比特]]、[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]与[[qubit-control/single-spin-qubit|单自旋量子比特]]中分别对应失谐反交叉、$S$–$T_+$ 反交叉与自旋翻转避免交叉的扫越操控。
- 强微波驱动下与[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]共享同一实验条件；周期驱动情形的系统化处理见[[circuit-qed/floquet-dynamics|Floquet 动力学]]；与[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]结合可由[[readout-measurement/dispersive-readout|色散读出]]直接成相图（见[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]）。
- 条纹对比度受[[materials-devices/charge-noise|电荷噪声]]限制；可见度与 LZ 概率的对应关系使其成为系统参数谱学探针。
- LZ 跃迁概率与 KZ 机制中拓扑缺陷密度的对应，使 LZSM 干涉成为非平衡相变量子模拟的可控平台（见论文第 6 章）。
