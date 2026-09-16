---
title: 参量放大器
description: 通过泵浦调制非线性电抗、以接近量子极限的附加噪声放大微波信号的器件。
aliases:
 - 量子极限参量放大器
 - parametric amplifier
 - 约瑟夫森结参量放大器
 - JPA
 - IMPA
tags:
 - 读出与测量
 - 微波
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvjnpz6md7emw6xqp82ft9
source_updated: 2026-09-09T14:46:13Z
---

<div class="entry-lead">参量放大器被放在低温读出链前端，用高增益把极弱的腔信号抬到后级放大器噪声之上，同时尽量少添加噪声。</div>

## 物理图像与定义

参量放大器（parametric amplifier）是一种**靠外加泵浦周期性调制非线性电抗**完成能量转换的器件。它本身没有内部直流偏置，也不靠半导体三极管/高电子迁移率晶体管（HEMT）的常规增益机制，而是把泵浦光子转化为信号–闲置（signal–idle）光子对，把外部驱动作为放大的能量来源。受益于泵浦只参与介质的非线性电极化、不引入额外的耗散通道，参量过程可以做到非常接近标准量子极限（standard quantum limit, SQL）的附加噪声，因此成为低温读出链路中不可替代的首级放大器。

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（circuit QED）的[[circuit-qed/microwave-resonator|微波谐振腔]]色散读出链路中，参量放大器通常紧邻样品，安装在稀释制冷机 20 mK 冷盘上、靠近读出腔反射端口的位置，作用是把经过数米低温同轴线衰减（典型 $-30\ \mathrm{dB}$ 量级）后已经弱到接近真空涨落的腔反射信号先抬升 $15$–$20\ \mathrm{dB}$，等效地让低温 HEMT（约 $4\ \mathrm{K}$、$T_H\approx 4\ \mathrm{K}$、增益约 $40\ \mathrm{dB}$）的噪声贡献被前级高增益压制。链路整体的等效输入温度

$$
T_{\mathrm{eff}} = T_J + \frac{T_H}{G_J} + \frac{T_R}{G_J G_H} + \cdots
$$

其中 $T_J$、$T_H$、$T_R$ 分别为参量放大器、低温 HEMT、室温放大器的等效噪声温度，$G_J$、$G_H$ 为各级增益。当 $G_J \gtrsim 15\ \mathrm{dB}$、$T_J \approx 150\ \mathrm{mK}$ 时，链路噪声主要被首级参量放大器自身决定，这是为什么读出实验要花大力气优化 JPA / IMPA 的原因。

按"是否同时放大两个正交分量"，参量放大器分为**保相（phase-preserving）**与**相敏（phase-sensitive）**两类；按"使用一个还是两个非线性元件"，又有 SQUID 或 SQUID 阵列构成的**谐振式参量放大器（JPA / IMPA）**与非线性传输线构成的**行波参量放大器（JTWPA / KIPA）**两类。行波分支还有一族不用约瑟夫森结的成员——非线性来自超导薄膜动力学电感的[[readout-measurement/kinetic-inductance-twpa|动力学电感行波参量放大器（KI-TWPA）]]，动态范围与工艺宽容度更高。行波路线内部也分化出三条相位匹配方案：共振色散工程、SNAIL 非线性工程与周期阻抗调制（后者加窗后可获平坦增益，见[[readout-measurement/josephson-traveling-wave-amplifier|JTWPA]]词条"CP-JTWPA"一节）。本文重点放在超导量子比特读出中最常见的前者，并以 论文第四章的工作作为主线。

<!-- FIGURE: 典型低温读出链路：比特腔反射 → 20 mK 冷盘定向耦合器 → 20 mK JPA/IMPA → 4 K HEMT → 室温放大器；标出每级温度、增益与噪声贡献 -->

## 理论模型：含时二次哈密顿量与三波/四波混频

### 通用受驱动非线性振子

参量放大器在最简单情形下单模单端口，可以用一个受驱动的阻尼非线性振子描述，对应的含时二次哈密顿量为

$$
\hat{H} = \hbar \omega_0 \hat{a}^\dagger \hat{a} + i \hbar \frac{\lambda}{2}\left(\hat{a}^2 e^{2i(\omega_p t + \theta)} - \text{h.c.}\right)
$$

第一项是简谐振动模式，$\omega_0$ 为系统谐振频率；第二项是调制驱动，$\omega_p$、$\theta$ 为驱动频率与相位，$\lambda$ 为驱动强度。$\omega_p$ 取在系统谐振频率附近，所谓"附近"指差值 $|\omega_p - \omega_0| \lesssim \kappa$（$\kappa$ 是系统对环境的耗散率）。

定义旋转算符 $\hat{R} = e^{i\omega_p \hat{a}^\dagger \hat{a} t}$，在旋转表象下取旋转波近似（rotating-wave approximation, RWA）与马尔科夫近似（Markov approximation，假设 $\kappa(\omega)=\kappa$ 为常数），有效哈密顿量化为

$$
\hat{H}_{\mathrm{eff}} = \hbar \Delta \hat{a}^\dagger \hat{a} + i \hbar \frac{\lambda}{2}\left(\hat{a}^2 e^{2i\theta} - \text{h.c.}\right)
$$

其中 $\Delta = \omega_0 - \omega_p$ 为泵浦失谐。把环境–系统耦合作为耗散项、输入光场 $\hat{a}_{\mathrm{in}}$ 作为驱动项，可写出量子朗之万方程（quantum Langevin equation）

$$
\frac{d\hat{a}}{dt} = -i\Delta \hat{a} - \lambda e^{-2i\theta} \hat{a}^\dagger - \frac{\kappa}{2}\hat{a} + \sqrt{\kappa}\,\hat{a}_{\mathrm{in}}
$$

右边第一项为孤立系统海森堡运动方程，第二项为环境耗散，第三项为输入扰动。傅里叶变换到频域后用量子输入输出关系 $\sqrt{\kappa}\,\hat{a} = \hat{a}_{\mathrm{out}} + \hat{a}_{\mathrm{in}}$，可解出输出信号模场与两个增益系数 $g_S$、$g_I$——后者把闲置模的真空涨落耦合进来。

### 非简并模式（保相放大）

对失谐 $\Delta \neq 0$，设信号模与闲置模分别对应频域 $\pm\omega$，方程组可写成 $\vec{a}_{\mathrm{out}}(\omega)=\chi(\omega)\sqrt{\kappa}\,\vec{a}_{\mathrm{in}}(\omega)$，磁化率矩阵之逆为

$$
\chi^{-1}(\omega) = \begin{pmatrix} -i\omega + i\Delta + \kappa/2 & \lambda e^{-2i\theta} \\ \lambda e^{2i\theta} & -i\omega - i\Delta + \kappa/2 \end{pmatrix}.
$$

信号模输出为

$$
\hat{a}_{\mathrm{out}}^S(\omega) = g_S \hat{a}_{\mathrm{in}}^S(\omega) + g_I [\hat{a}_{\mathrm{in}}^I(-\omega)]^\dagger
$$

其中两个增益系数满足 $G_S \equiv |g_S|^2 = |g_I|^2 + 1$。信号增益

$$
G_S(\omega) = 1 + \frac{\kappa^2 \lambda^2}{\left(\frac{\kappa^2}{4} - \omega^2 - \lambda^2 + \Delta^2\right)^2 + \kappa^2 \omega^2}
$$

在 $\omega = 0$ 处取极大值

$$
G_{\max} = 1 + \frac{16\kappa^2 \lambda^2}{\left(\kappa^2 - 4(\lambda^2 - \Delta^2)\right)^2}.
$$

当 $G_{\max}\gg 1$ 时，对 $\omega$ 较小的失谐，增益形貌近似为洛伦兹型

$$
G_S(\omega) \approx \frac{G_{\max}}{1 + (\omega/\Gamma_{\mathrm{BW}})^2}, \qquad \Gamma_{\mathrm{BW}} \approx \frac{\kappa}{2\sqrt{G_{\max}}}
$$

即 $-3\ \mathrm{dB}$ 带宽 $\Gamma_{\mathrm{BW}}$ 与 $\sqrt{G_{\max}}$ 成反比——这是谐振式参量放大器的根本约束：**增益–带宽乘积基本为常数**，增大带宽必须以牺牲峰值增益为代价。

### 简并模式（相敏放大）

当泵浦失谐 $\Delta = 0$ 时，称放大器工作在简并模式（degenerate mode）。把光场算符分解为两个正交分量

$$
\begin{aligned}
\hat{a}_{\parallel}^{\mathrm{in,out}}(\omega) &= \hat{a}_S^{\mathrm{in,out}}(\omega) + e^{-2i\theta}[\hat{a}_I^{\mathrm{in,out}}(-\omega)]^\dagger, \\
\hat{a}_{\perp}^{\mathrm{in,out}}(\omega) &= \hat{a}_S^{\mathrm{in,out}}(\omega) - e^{-2i\theta}[\hat{a}_I^{\mathrm{in,out}}(-\omega)]^\dagger
\end{aligned}
$$

可以看出简并模式相当于沿驱动相位选出一个特定正交分量。两个正交分量各自独立地获得增益 $G_\parallel = |g_\parallel|^2$、$G_\perp = |g_\perp|^2$，并满足

$$
G_\parallel G_\perp = 1
$$

即放大一个分量必然压缩另一个分量。当输入场仅为真空涨落时，简并放大器对其中一个分量的量子涨落进行压缩，使其低于标准量子极限（standard quantum limit, SQL）——这就是**单模光场压缩态（squeezed state）**。因为被放大的正交分量由驱动相位 $\theta$ 选定，简并放大器也称为相敏放大器（phase-sensitive amplifier, PSA），相对地，非简并放大器称为保相放大器（phase-preserving amplifier）。

### 三波混频与四波混频

公式 (4.1) 中驱动频率为 $2\omega_p$，意味着信号模频率 $\omega_S$ 与闲置模频率 $\omega_I$ 满足

$$
\omega_S + \omega_I = 2\omega_p \quad (\text{即}\ \Omega_p\ \text{为实验室系下的泵浦频率})
$$

这是**三波混频（three-wave mixing）**条件，对应驱动频率约等于两倍谐振子频率，泵浦与信号–闲置模在频域上自然分离。

如果选取 $\varphi_{\mathrm{DC}} \approx 0$（即工作在外磁通偏置接近 0 的位置），可将 $E_J(\Phi_{\mathrm{ext}})$ 展开到二阶（此时一阶项消失），等效泵浦频率变为 $2\Omega_p$，混频条件变成

$$
\omega_S + \omega_I = 2\Omega_p \quad \Rightarrow \quad \omega_S + \omega_I = 2\omega_p
$$

即**四波混频（four-wave mixing）**，两个信号光子合成一个泵浦光子再分裂为两个信号光子。两种混频方式在实验上分别对应"工作在外磁通非零点"的磁通泵浦（首选三波）与"泵浦直接加在信号端"的直接泵浦（典型四波）。

## 量子极限噪声与量子效率

把闲置模没有输入信号的情形代入公式 (4.10)，输出光场可重写为

$$
\hat{a}_{\mathrm{out}} = \sqrt{G}\,\hat{a}_{\mathrm{in}} + \sqrt{\frac{G-1}{G}}\,\hat{b}_{\mathrm{in}}.
$$

第二项是由闲置模耦合进来的真空涨落。在大增益极限 $G \gg 1$ 下，将其折算到输入端的等效噪声为 $N_a = 0.5$——即半个光子。这半个光子的来源可以理解为：

- 输入输出对易关系 $[\hat{a}_{\mathrm{out}}^\dagger, \hat{a}_{\mathrm{out}}] = [\hat{a}_{\mathrm{in}}^\dagger, \hat{a}_{\mathrm{in}}] = 1$ 的必然结果；
- 海森堡不确定性原理的要求——保相放大器同时放大两个不对易的正交分量，若不引入额外噪声将违反不确定性关系。

因此**保相参量放大器的量子极限附加噪声为半个光子**，任何实际器件只能逼近而无法超越。

对于简并放大器，由 $G_\parallel G_\perp = 1$ 知可在放大某一分量同时压缩另一分量，不引入额外噪声也不会违反不确定性关系，**量子极限附加噪声为 $N_a = 0$**——这就是相敏放大的最大魅力。

量子效率（quantum efficiency, $\eta$）把放大器噪声与读取性能直接挂钩：

$$
\eta = \eta_{\mathrm{col}} \eta_{\mathrm{amp}},\qquad \eta_{\mathrm{amp}} = \frac{1}{N_a + 1}
$$

其中 $\eta_{\mathrm{col}}$ 是腔光子经衰减、损耗后到达放大器输入端口的比例，$\eta_{\mathrm{amp}}$ 只取决于放大器的附加噪声光子数。保相参量放大器 $N_a = 0.5$ 给出 $\eta_{\mathrm{amp}} = 2/3$，相敏参量放大器则可达到 $\eta_{\mathrm{amp}} = 1$。 论文第二章 §2.2.4 进一步指出，量子效率也可以从信息论角度解读为

$$
\lim_{t \to \infty} \frac{\Gamma_m}{2\Gamma_d} = \eta
$$

即腔光场达到稳态后，**信息采集速率**与 2 倍**测量微波驱动引起的退相干速率**之比。$\eta = 1$ 时意味着以最大速率、最小代价提取量子比特信息；$\eta = 0$ 时只是引起退相干而没有获得任何有用信息。

## 高阶非线性修正：Kerr 项对增益、量子效率与压缩的限制

上文的输入输出理论建立在"理想二次哈密顿量"上，把约瑟夫森余弦势只保留到四阶（Kerr）甚至更低。Boutin 等人对三种常用泵浦方案做了系统的高阶修正分析：**单色电流泵浦**经位移变换后同时产生三次项与四次项修正 $\mu \hat d^{\dagger 2}\hat d + \mu^* \hat d^\dagger \hat d^2 + \Lambda \hat d^{\dagger 2}\hat d^2$；**双色电流泵浦**与**单色磁通泵浦**的三次项相消，只剩单个 Kerr 四次项 $\Lambda \hat d^{\dagger 2}\hat d^2$。其中 Kerr 系数

$$
\Lambda = -\frac{E_J \Phi_{\mathrm{zpf}}^4}{4} = -\frac{E_C}{2}
$$

$E_J$ 是约瑟夫森能、$\Phi_{\mathrm{zpf}}$ 是磁通零点涨落、$E_C$ 是充电能（$\Lambda$ 即 transmon 型电路的自克尔，符号为负）。用两个泵浦 tone 替代单个电流泵，对理想 DPA 行为的偏离可降低约两个数量级；用约瑟夫森结阵列稀释非线性时 Kerr 按 $1/N^2$ 下降。

### 量子效率的重新定义与保相情形

把放大器附加噪声折算为输入端等效分束器，量子效率由输入–输出涨落关系定义：

$$
\langle|\hat a_{\mathrm{out}}|^2\rangle = \frac{G}{\eta}\left[(1-\eta)\frac{1}{2} + \eta\,\langle|\hat a_{\mathrm{in}}|^2\rangle\right],
\qquad
\eta = \frac{1}{1+2\mathcal{A}} \le \frac{G}{2G-1}
$$

其中 $G$ 是功率增益、$\mathcal{A}=(1-\eta)/2\eta$ 是折算到输入端的附加噪声、不等号来自保相放大的量子极限 $\mathcal{A}\ge\tfrac12(1-1/G)$——大增益下保相测量的量子效率上界为 $\eta\le 1/2$。数值主方程计算给出一个反直觉结论：**保相模式下 Kerr 修正几乎无害**——即使增益 20 dB、$|\Lambda|=0.01\kappa$，量子效率仍贴着量子极限（$|\Lambda|/\kappa=10^{-4}$ 与 $10^{-3}$ 的曲线与极限线几乎不可分辨），无需任何参数调谐。

![[assets/figures/parametric-amplifier/boutin2017-fig7-phase-preserving-quantum-efficiency.jpg]]
*保相量子效率 η 随增益的变化（Kerr 修正，$\omega=\Delta=\gamma=0$）：$|\Lambda|/\kappa=10^{-4}$（蓝菱形）与 $10^{-3}$（绿方块）在整个参数范围内均贴近量子极限（黑虚线）；只有更大的 Kerr（红圆）在高增益区出现可见下降。图源：Boutin et al. (2017), Fig. 7。*

### 相敏情形：相位选择成为生死线

同一个 Kerr 修正对相敏测量却是致命的：增益矩阵因 Kerr 变得非对称，非零交叉增益 $g_{12}$ 把共轭正交分量的噪声混入被测分量。此时量子效率 $\eta(\theta)$ 依赖于测量相位 $\theta$，且**最优相位不再是增益最大的相位 $\theta_m$，而是交叉增益 $|g_{12}|$ 最小的相位 $\theta_o$**。定量地：增益 25 dB、$|\Lambda/\kappa|=10^{-2}$ 时，$\theta_o$ 相位的量子效率约 0.9，而 $\theta_m$ 相位接近于零——两者相位差不到 0.2 rad（约 12°）。高增益 JPA 做相敏放大/压缩实验时，必须完整表征增益矩阵的相位与频率依赖再选工作点。

![[assets/figures/parametric-amplifier/boutin2017-fig9a-phase-sensitive-efficiency-reduction.jpg]]
*相敏量子效率的退化：(a) $1-\eta$ 随相敏增益的增大——实线为最大增益相位 $\theta_m$、虚线为最小交叉增益相位 $\theta_o$；增益 25 dB、$|\Lambda/\kappa|=10^{-2}$ 时 $\theta_o$ 仍保有 $\eta\approx0.9$ 而 $\theta_m$ 几乎完全退化。图源：Boutin et al. (2017), Fig. 9(a)。*

### 压缩饱和与非高斯特征

作为压缩源，理想 DPA 的（中心频率）压缩水平随增益无界增长；一旦考虑有限带宽滤波（实验常用的 256 ns boxcar 滤波、约 4 MHz 带宽），即使理想 JPA 也会因压缩带宽随增益收窄而饱和——这是增益–带宽权衡的又一体现。Kerr 修正则带来额外的饱和与回退：同一 JPA 从单色电流泵改为双色电流泵即可显著抬升最大压缩水平。在磁通泵浦 JPA 的实验上（器件 $C=3.2\ \mathrm{pF}$、$L_J(\Phi=0)=45\ \mathrm{pH}$、几何电感 35 pH、参与比 $p=0.8$，对应 $\Lambda/2\pi=-1.55\ \mathrm{MHz}$、$\bar\kappa/2\pi=130\ \mathrm{MHz}$、$\gamma=\kappa/10$，全部由独立测量给出、无拟合参数），数值计算定量重现了实测的最大压缩水平，证明高增益区压缩饱和的主因是高阶修正而非此前猜测的双稳阈值——饱和发生在泵浦功率低于分岔点之处。

![[assets/figures/parametric-amplifier/boutin2017-fig11-squeezing-experiment-vs-numerics.jpg]]
*磁通驱动 JPA 压缩水平的实验–数值对比：绿三角与红方块为测量链增益两种估计对应的实验上下界（误差棒为统计误差），蓝圆为无拟合参数的数值结果，浅蓝点划线为理想 DPA 预期——高阶修正解释了高增益区压缩水平的饱和。图源：Boutin et al. (2017), Fig. 11。*

高阶修正还破坏输出场的高斯性：理想 DPA 输出是高斯压缩态，含三次项时 Wigner 函数呈"月牙形"畸变、仅含 Kerr 四次项时呈"S 形"畸变；三阶累积量在纯 Kerr 情形严格为零、四阶累积量随增益与非线性增强。实验用 Lucy–Richardson 反卷积直接成像了输出场 Husimi Q 函数：24 dB 增益下观测到明显的 S 形非高斯畸变，与数值预言一致。改进路径有三：双色电流泵或磁通泵消除三次项、结阵列/附加线性电感稀释 Kerr、按 $\theta_o$ 相位与最优频率工作。

## 基于约瑟夫森结的实现：JPA

约瑟夫森结参量放大器（JPA, Josephson parametric amplifier）利用超导约瑟夫森结（典型为 SQUID 环路）提供的**无损、可调的非线性电感**实现公式 (4.1) 所要求的哈密顿量。等效电路是一个 SQUID 与电容并联构成的 transmon 类非线性 $LC$ 谐振腔，哈密顿量

$$
\hat{H} = 4 E_C \hat{n}^2 - E_J \cos\hat{\varphi}
$$

其中 $E_J(\Phi_{\mathrm{ext}}) = E_J^\Sigma |\cos(\pi \Phi_{\mathrm{ext}}/\Phi_0)|$ 受外磁通 $\Phi_{\mathrm{ext}}$ 调制，$E_C = e^2/2C$ 是库仑电荷能。

### 磁通泵浦与三波混频

JPA 工作在磁通泵浦模式（flux pump）时，外加驱动以磁通形式通过互感 $M$ 耦合到 SQUID 环路。设

$$
\Phi_{\mathrm{ext}} = \Phi_{\mathrm{DC}} + \Phi_{\mathrm{AC}} \cos(\Omega_p t + \theta_p)
$$

其中 $\Phi_{\mathrm{AC}} \ll \Phi_{\mathrm{DC}}$，可把 $E_J(\Phi_{\mathrm{ext}})$ 展开到一阶，得到有效哈密顿

$$
\hat{H}_{\mathrm{eff}} = \hbar \Delta_f \hat{a}^\dagger \hat{a} + i\hbar \frac{\lambda_f}{2}\left(\hat{a}^2 e^{2i\theta_f} - \text{h.c.}\right)
$$

与公式 (4.2) 形式完全相同。其中

$$
\lambda_f = \frac{1}{4}\omega_a \varphi_{\mathrm{AC}} \tan\varphi_{\mathrm{DC}},\qquad \Delta_f = \omega_a - \Omega_p/2,\qquad \theta_f = \theta_p - \pi/4
$$

即**等效泵浦强度正比于磁通调制幅度**，泵浦频率约为系统谐振频率的两倍——三波混频条件自动满足，泵浦与信号–闲置模在频率上自然分离，对减少泵浦泄漏到信号链路非常有利。

### 直接泵浦与四波混频

JPA 工作在直接泵浦模式（direct pump）时，泵浦信号直接从信号端口输入。SQUID 替代单个约瑟夫森结后电路可视为 transmon 类型，哈密顿量为

$$
\hat{H} = \hbar \tilde{\omega}_a \hat{a}^\dagger \hat{a} + \hbar \frac{K}{2}\hat{a}^\dagger \hat{a}^\dagger \hat{a}\hat{a}
$$

其中 $K = -E_C/\hbar$ 为自科尔系数（即 transmon 哈密顿量中的非谐），$\tilde{\omega}_a = \omega_a + K$。把输入场写成稳态驱动加微扰信号之和，可以证明

$$
\Delta_d = \Delta - 2\lambda_d,\qquad \lambda_d = -K|\alpha|^2,\qquad \theta_d = \angle(\alpha/\dot\alpha) + \pi/4
$$

有效泵浦满足 $\omega_S + \omega_I = 2\Omega_p$，即四波混频，泵浦频率正好落在增益带宽中心。然而泵浦的反射功率远高于信号，因此输出端必须用定向耦合器注入反相信号抵消反射泵浦，否则会饱和后级 HEMT。

### 饱和信号输入功率

当输入信号功率增大到一定程度时，增益将下降 1 dB，对应的输入功率称为**饱和信号输入功率（saturation input power, $P_{1\mathrm{dB}}$）**。从两种泵浦方式看，原因分别是：

- 磁通泵浦：高阶展开给出等效泵浦失谐增量 $-K \langle \hat{a}^\dagger \hat{a} \rangle$（$K<0$），信号光子数增加使有效失谐变大，增益下降；
- 直接泵浦：信号光子在朗之万方程中贡献 $K \langle \delta\hat{a}^\dagger \delta\hat{a} \rangle$，使有效失谐减小、增益下降；
- 从能量角度：固定泵浦功率时，提高信号功率意味着消耗更多泵浦光子，腔内稳态光子数减少、有效泵浦下降——称为**泵浦耗散（pump depletion）**。

减小自科尔系数 $|K|$ 的绝对值可以提升饱和功率，但会同时减小非线性强度，因此是参数权衡的常见支点。这一机制的定量理论（$P_{1\mathrm{dB}}\propto\kappa_\mathrm{eff}/|K_\mathrm{eff}|$、信号光子对最优泵浦条件的 ac-Stark 型推离、无拟合参数的实验对照与 SQUID 阵列稀释设计）见专页[[readout-measurement/amplifier-saturation-power|参量放大器饱和功率]]。

### 窄带宽 JPA 的实测特性

 论文 §4.3 给出的代表器件参数：电容 $C = 3.4\ \mathrm{pF}$、SQUID 临界电感 $L_J = 80\ \mathrm{pH}$、SQUID 几何电感 $L_S \approx 15\ \mathrm{pH}$，对应最大谐振频率 $f_{\max} = 1/[2\pi\sqrt{(L_J + L_S)C}] \approx 8.85\ \mathrm{GHz}$。芯片工艺采用光刻剥离工艺的 4 层结构（地平面 / $\mathrm{SiO}_2$ 介质 / 电容上极板 / 双角度斜蒸发 SQUID），相对简单。带宽按 $\Gamma_{\mathrm{BW}} \propto \kappa \propto 1/C$ 估算在几十 MHz 量级。

低温测试时两级环形器隔离输入/反射信号，反射信号经 4 K HEMT（约 40 dB）和室温放大器（约 55 dB）两级放大后到频谱仪或网络分析仪。完整测量流程为：(1) 测调制谱确认样品正常、(2) 粗扫工作参数（信号频率、磁通偏置、泵浦频率/功率）、(3) 精细调参提取带宽、(4) 测饱和功率、(5) 用 $\Delta\mathrm{SNR}$ 法推算噪声温度。定义"增益工作带宽"为**增益不小于 $15\ \mathrm{dB}$ 的最大连续频率范围**（有别于峰值半高宽定义），以实用为导向。论文报告该 JPA 工作带宽约 $50\ \mathrm{MHz}$、饱和信号输入功率约 $-20\ \mathrm{dBm}$（算上 $-101\ \mathrm{dB}$ 线路衰减后总饱和输入 $-121\ \mathrm{dBm}$）、工作带宽范围内噪声接近量子极限。

## rf-SQUID 阵列 JPA：把谐振式饱和功率推到 JTWPA 量级

单结/单环 JPA 即使拓宽带宽，也难以在 20 dB 增益下达到多腔同时读出所需的输入饱和功率——瓶颈在大信号下结上的电流与相位差。Kaufman 等人（NIST + 匹兹堡）的方案是**几何电感旁路的 rf-SQUID 阵列**：每个单元由约瑟夫森结（$L_J\approx 60\ \mathrm{pH}$、$5.5\ \mu\mathrm{A}$）并联一小段超导引线的几何电感 $L_s$（12–15 pH）构成，再把 $N=25$ 个单元串联分担相位。整阵零偏置有效电感约 290 pH，配 $C=2\ \mathrm{pF}$ 电容得到 $\omega_0/2\pi\approx 6\ \mathrm{GHz}$；另加耦合电容 $C_c\approx 0.26\ \mathrm{pF}$ 把谐振处的环境阻抗抬到约 $100\ \Omega$、品质因子提到 $Q\approx 10$。芯片用 NIST 改型铌三层工艺制备，结的高一致性保证了长阵列的良率。

设计方法上他们拒绝一切非线性截断：对结正弦非线性的展开在接近饱和时需延伸到 7–8 阶才能描述行为，截断会遮蔽高功率物理。取而代之的是在时域直接求**周期稳态解**——含泵浦与信号的完整经典运动方程

$$
\partial_t^2\varphi(t) + \gamma\partial_t\varphi(t) + \omega_L^2\varphi(t) + \omega_J^2\sin\!\left[\frac{\varphi(t)+\varphi_\mathrm{ext}}{N}\right] = 2\gamma\partial_t\varphi_\mathrm{in}(t),
$$

其中 $\gamma=(CZ_0)^{-1}$ 是外耗散率、$\omega_L^2=1/(CL_s\cdot N)$ 与 $\omega_J^2=1/(CL_J)$ 是两个频率常数、$N$ 把相位降分摊到整个阵列。数值扫描给出清晰的设计空间：**最大可达增益沿 $(\beta Q)^{-1}$ 等值线**（$\beta=L_s/L_J$ 为旁路比），$(\beta Q)^{-1}\gtrsim 0.65$ 的区域根本打不到 20 dB 增益；而**最高饱和功率恰好分布在这条边界上**——设计空间内饱和功率相差超过 10 dB。这与 SNAIL/JPC 放大器里"高 $pQ$ 更安全"的讨论同构：$\beta$ 越小器件越线性、越难泵浦，饱和功率与可泵性在边界上达成最优折中。

![[assets/figures/parametric-amplifier/kaufman2025-fig2-design-space.jpg]]
*rf-SQUID 阵列 JPA 的设计空间：横轴旁路电感（给定 $L_J\approx 60$ pH）、纵轴品质因子 $Q$；虚线/点线为等 $(\beta Q)^{-1}$ 线，橙菱形与红方块为两个实际器件（$\beta=0.25$ 与 0.21）。可泵性（能否达到 20 dB 增益）与最大饱和功率都由同一比值 $(\beta Q)^{-1}\approx0.65$ 的边界划定。图源：Kaufman et al. (2025), Fig. 2。*

![[assets/figures/parametric-amplifier/kaufman2025-fig2-p1db-prediction.jpg]]
*周期稳态仿真预言的设计空间子区域输出 $P_{1\mathrm{dB}}$：最高饱和功率贴着可泵性边界分布，设计空间内相差逾 10 dB——饱和功率从一开始就是设计变量而非事后实测指标。图源：Kaufman et al. (2025), Fig. 2。*

15 mK 下以 $2\omega$ 泵浦（三波混频）实测：多个偏置点增益超过 20 dB，**输入饱和功率最高 $-91.5\ \mathrm{dBm}$、平均 $(-94.2\pm1.4)\ \mathrm{dBm}$**，是已报道谐振式约瑟夫森参量放大器中的最高值之一，与含近百倍结数的 JTWPA 相当（饱和功率的标度理论见[[readout-measurement/amplifier-saturation-power|参量放大器饱和功率]]）；平均瞬时带宽 $(20\pm6)\ \mathrm{MHz}$，增益形貌随泵浦失谐变化，部分归因于线阻抗纹波（器件线宽 300–500 MHz 与百 MHz 尺度的环境纹波相互作用，与上文环境法布里–珀罗干涉一节的机制一致）。泵浦功率较高（约 $-25$ 至 $-30\ \mathrm{dBm}$），但对照测量表明它未额外损害比特相干性；放大器开启时 $T_{2R}$ 的压低指向放大器与比特间隔离不足，可加环形器以少量量子效率为代价弥补。

![[assets/figures/parametric-amplifier/kaufman2025-fig3b-saturation-power.jpg]]
*$N=25$、旁路 14.5 pH 器件在多个偏置点上的输入饱和功率（黑线为接近平均值的代表性偏置点）：平均 $(-94.2\pm1.4)$ dBm、最高 −91.5 dBm——谐振式器件首次进入 JTWPA 的功率处理量级，足以支撑数百通道同时测量的功率需求（带宽尚待阻抗匹配网络扩展）。图源：Kaufman et al. (2025), Fig. 3(b)。*

量子效率不用 Y-factor 而用**弱测量反作用层析**标定：放大器偏置在 25 dB 保相增益，把 transmon 制备到 $|+X\rangle$ 态后做两次顺序测量，第一次弱测量的反作用使 $\langle X\rangle_c$、$\langle Y\rangle_c$ 随测量结果 $Q_m$ 呈正弦振荡——频率由测量强度 $\bar I_m/\sigma$ 决定，幅度按量子效率指数衰减；独立设定测量强度后拟合振荡包络即得全链 $\eta$。

![[assets/figures/parametric-amplifier/kaufman2025-fig4c-quantum-efficiency.jpg]]
*弱测量反作用的层析：$I_m=0$ 线切的 $\langle X\rangle_c$、$\langle Y\rangle_c$ 振荡拟合给出全链量子效率 $(62.4\pm1.4)\%$（含损耗与 4 K/室温后级噪声，是 rf-SQUID JPA 本身的安全下界）——属保相放大已报道的最高值之列，说明高功率泵浦并未牺牲效率。图源：Kaufman et al. (2025), Fig. 4(c)。*

![[assets/figures/parametric-amplifier/kaufman2025-fig4d-separation-fidelity.jpg]]
*800 ns 积分读出脉冲的 IQ 直方图（超 $10^6$ 次计数，红/蓝为 $|g\rangle/|e\rangle$ 占比）高斯拟合给出 99.3% 态分离保真度；受限于该样品偏小的 $2\chi/\kappa=0.348$ 与读出诱导态跃迁（高腔光子数下 transmon 激发），而非放大器本身——高饱和放大链已经把瓶颈推回比特-腔一侧。图源：Kaufman et al. (2025), Fig. 4(d)。*

## 不换芯片扩带宽：并联 JPA 与轴子搜寻应用

单只窄带宽 JPA 的频率调谐范围有限（典型几十 MHz），要覆盖更宽的目标频段通常得更换芯片重新降温——对超导比特实验只是麻烦，对需要扫过巨大未知频段的轴子（axion）搜寻实验则是致命的停机成本。Haloscope 实验把微波腔浸在高磁场中等待轴子转化为功率仅 $10^{-24}$–$10^{-22}\ \mathrm{W}$ 的光子，其频率扫描速度

$$
S\propto\frac{g_\gamma^4}{(\mathrm{SNR})^2}\,\eta\,\frac{1}{T_s^2}\,B_0^4 V^2 C^2 Q^2
$$

其中 $g_\gamma$ 是模型相关的轴子–光子耦合常数（KSVZ 取 0.97、DFSZ 取 0.36），SNR 为目标信噪比，$\eta$ 是数据获取效率，$T_s$ 是**系统噪声温度**，$B_0$ 是外磁场、$V$ 腔体积、$C$ 模式形状因子、$Q$ 腔品质因子。扫描速度对 $T_s$ 的平方反比依赖，正是轴子实验坚持把首级放大做到量子极限的原因。

IBS/CAPP 的解法是**并联组合**：把三只中心频率错开、各覆盖约 50 MHz 的磁通驱动 JPA 并联在同一块 PCB 上，共用一个由 200 匝超导线绕成的直流磁通偏置线圈。由于 1–2 GHz 频段器件与封装尺寸远小于波长，长线效应可忽略，三只 JPA 互不干扰地同时工作——重叠频段选噪声温度更低的那只即可。实测三只 JPA 均有约 20 dB 峰值增益、单只带宽 48–52 MHz，并联后单次降温即可覆盖约 140 MHz（约为单只的三倍），Y-factor 法测得系统噪声温度约 150 mK、贴近量子噪声极限。这与 IMPA 的阻抗匹配路线正交：一个在**单芯片内**追求更宽带宽，一个用**多芯片组合**把调谐覆盖拼宽；更换 JPA 需两到三周降温维护的停机成本由此省去。

![[assets/figures/parametric-amplifier/uchaikin2024-fig3-parallel-jpa-readout.jpg]]
*读出方案对比：左为单 JPA 读出链（环形器分离入射/反射信号），右为三只 JPA 并联的读出方案——并联支路共享信号通路，各自独立泵浦。图源：Uchaikin et al. (2024), Fig. 3。*

![[assets/figures/parametric-amplifier/uchaikin2024-fig4b-parallel-jpa-tuning.jpg]]
*三只并联 JPA（泵浦关闭）的谐振频率随公共偏置电流的变化：三条曲线各自可调、中心频率错开，拼合后把单次降温的频率覆盖扩到约 140 MHz。图源：Uchaikin et al. (2024), Fig. 4（右）。*

![[assets/figures/parametric-amplifier/uchaikin2024-fig5-system-noise-temperature.jpg]]
*系统噪声温度随频率的变化，三只 JPA 各用一种颜色表示；输入端接 36 mK 恒温 50 Ω 噪声源（Y-factor 法），棕色线为量子噪声极限——三段拼合覆盖下噪声温度约 150 mK、紧贴量子极限。图源：Uchaikin et al. (2024), Fig. 5。*

## 阻抗匹配突破：IMPA

### 增益–带宽乘积限制

JPA 的增益–带宽乘积满足

$$
G_{\max} \Gamma_{\mathrm{BW}}^2 \approx \frac{\kappa^2}{4}
$$

对纯欧姆型环境（$\kappa$ 为常数）这是常数。要做到 $15\ \mathrm{dB}$ 增益与 $600\ \mathrm{MHz}$ 带宽（用于多比特频分复用读出）单靠减小电容增大 $\kappa$ 会牺牲饱和功率，因为 $|K| \propto 1/C$，电容越小饱和输入功率越低——单器件层面就形成"增益–带宽–饱和功率"的三角约束。

### 环境阻抗工程

2015 年 Roy 等人提出，**只要环境阻抗 $Z_{\mathrm{in}}(\omega)$ 不再是纯欧姆型，而是频率依赖的形式**，增益公式中的频率相关项可以被抵消，增益曲线变平坦。具体做法是让

$$
Z_{\mathrm{in}}(\omega) = R + i\alpha\omega
$$

即在 $50\ \Omega$ 基础上叠加一个线性虚部，系数 $\alpha$ 由阻抗变换器提供。把增益展开为泰勒级数 $G(\omega) = G_0 + G_2 \omega^2 + G_4 \omega^4 + \cdots$ 后，对磁通泵浦情形

$$
G_2 = 128 \frac{\lambda_f^2 \left(\kappa_0^2 + 4(\lambda_f^2 - \Delta_f^2)\right)\left(\alpha^2 C (\Delta_f^2 - \lambda_f^2) + \alpha - C R^2\right)}{C^3 R^4 \left(\kappa_0^2 + 4(\Delta_f^2 - \lambda_f^2)\right)^2}
$$

令 $G_2 = 0$ 即得**阻抗匹配条件**

$$
\alpha_{\mathrm{opt}} = R \frac{\kappa_0 \pm \sqrt{\kappa_0^2 - 4(\lambda_f^2 - \Delta_f^2)}}{2(\lambda_f^2 - \Delta_f^2)}.
$$

满足此条件且 $G_0 \to \infty$ 时，带宽可推到 $\Gamma_{\mathrm{BW}} \approx (\kappa_0/2) G_0^{-1/4}$，相比原来的 $G_0^{-1/2}$ 标度**带宽显著扩大**。实验上 $G_0$ 不会趋于无穷大（一般 $20\ \mathrm{dB}$），更实际的带宽关系为 $\Gamma_{\mathrm{BW}} \approx \kappa_0 G_0^{-1/4}$。

### 共面波导阻抗变换器

实现 $Z_{\mathrm{in}}(\omega) = R + i\alpha\omega$ 的一种工程方案是用共面波导（coplanar waveguide, CPW）阻抗变换器。一段 $\lambda/4$ 传输线把环境阻抗从 $R_L = 50\ \Omega$ 变换到 $R = Z_{\lambda/4}^2/R_L$，再接一段 $\lambda/2$ 传输线引入线性虚部：

$$
Z_{\mathrm{in}}(\omega) = Z_{\lambda/2}\frac{Z_1(\omega) + i Z_{\lambda/2}\tan\left(\pi \frac{\omega + \Omega_p/2}{\omega_t}\right)}{Z_{\lambda/2} + i Z_1(\omega)\tan\left(\pi \frac{\omega + \Omega_p/2}{\omega_t}\right)}.
$$

虚部线性系数 $\alpha$ 与阻抗变换器特征阻抗的关系为

$$
\alpha = \frac{\pi}{2\omega_t}\left[Z_{\lambda/4}\left(1 - \frac{R}{R_L}\right) + \frac{R^2}{2 Z_{\lambda/2}}\right]
$$

由设计参数 $\omega_t$、$C$、$Z_{\lambda/2}$、$Z_{\lambda/4}$ 唯一确定。注意 $\alpha$ 是一个**确定的设计值**，而 $\alpha_{\mathrm{opt}}$ 是**可调的工作参数**——这意味着需要在参数空间中筛选出既满足设计目标、又有足够容差的参数组合。设计流程通常给定最小增益 $G_{\min}$ 与最小带宽 $\Gamma_{\min}$，把最大带宽要求换算为最大增益上限 $G_{\max} = (\kappa_0/\Gamma_{\min})^4$，再考虑 $\lambda_f$ 上下限、$\Delta_f$ 取 $\kappa_0/3$、泵浦近似 $\varphi_{\mathrm{AC}} \leqslant \varphi_{\mathrm{DC}}/3$ 等物理约束，逐点筛选参数。

论文 §4.4.2 给出的设计算例：目标 $G_{\min} = 18\ \mathrm{dB}$、$\Gamma_{\min} = 400\ \mathrm{MHz}$、$f_t = 6.8\ \mathrm{GHz}$，选定 $C = 3\ \mathrm{pF}$、$Z_{\lambda/2} = 60\ \Omega$、$Z_{\lambda/4} = 33\ \Omega$，理论预言 $G_0 = 22.7\ \mathrm{dB}$、$\Gamma_{\mathrm{BW}}/2\pi = 600\ \mathrm{MHz}$。进一步考虑电容工艺涨落（同一晶圆上极板面积有多个版本），把 $Z_{\lambda/4}$ 降到 $32\ \Omega$ 以内可将电容误差容忍度从 $0.5\ \mathrm{pF}$ 提升到 $1\ \mathrm{pF}$ 以上。

### 片外 vs. 片上阻抗变换

工程实现上有两条路：

- **片外 PCB 板方案**：把阻抗变换器印刷在 PCB 上，用约 $10\ \mathrm{cm}$ 长低温同轴线与样品相连。优点是 JPA 与阻抗变换器可独立筛选、商业 PCB 工艺成熟；缺点是商用 PCB 板导带线宽在毫米量级，与高频波长相当，一维传输线模型可能失效、并激发杂散模。基底介电常数大的板材时域阻抗测量更清晰（高 $\varepsilon_r$ 可减小中央导带线宽比）。
- **片上集成方案**：把阻抗变换器与 JPA 集成在同一芯片上（用第一层大结构工艺即可制备），规避了上述问题。但**引线键合（wire bonding）的等效电感**对片上方案影响很大——$1\ \mathrm{mm}$ 长铝线电感约 $1\ \mathrm{nH}$，对片上方案而言相当于把 $R_L$ 替换为 $R_L + i(\omega+\Omega_p/2)L_{\mathrm{wb}}$，使实部虚部都偏离设计值；片外方案因为引线电感位于 JPA 与 $\lambda/2$ 段之间，相当于在 $Z_{\mathrm{in}}$ 上加 $i\omega L_{\mathrm{wb}}$，影响相对小。 仿真显示片上方案 $L_{\mathrm{wb}} = 1\ \mathrm{nH}$ 时 6–7 GHz 范围内都不能达到设计目标，$L_{\mathrm{wb}} = 0.4\ \mathrm{nH}$ 时才接近理想情况，因此实验上必须优化封装体设计、缩短引线并多线并联以减小总电感。

### 测量线路的实际影响

实测中环境阻抗并非理想 $50\ \Omega$：环形器端口阻抗有明显的感抗振荡，会把振荡反映到 IMPA 的增益曲线中，需要对环形器逐个筛选、把工作频率微调以避开振荡峰；连接线缆上的驻波也会让环境阻抗随频率变化变密；通过微调泵浦频率 $f_p$ 改变增益中心是常见的实验对策。这一现象的完整定量理论见下节。

## 动力学电感阻抗工程：KIMPA（Hung 2025）

阻抗工程路线此前只被铝基约瑟夫森结实现过——它被锁在铝的临界温度与弱磁场里，且目标阻抗 $Z_\mathrm{NR}$ 被压在 $10\ \Omega$ 以下、需要数 pF 的大分流电容（平板电容还引入介质损耗）。Hung 等人（RIKEN）用**三级阻抗变换器**把它推广到动力学电感材料：在常规两段 $\lambda/4$ 变换之外增加一段特征阻抗 $180\ \Omega$ 的 $\lambda/4$ 传输线，把 $Z_\mathrm{NR}$ 的可达值提升一个量级到数十欧姆，分流电容需求随之降到 $330\ \mathrm{fF}$。

![[assets/figures/parametric-amplifier/hung2025-fig1-kimpa-circuit.jpg]]
*KIMPA 电路：高动力学电感 NbTiN $\lambda/4$ CPW（20 nm 厚、250 nm 宽纳米线）构成的非线性谐振器经三级阻抗变换器（两段 $\lambda/4$ 变换 + 一段 180 Ω 的 $\lambda/4$ 线）耦合到 50 Ω 环境，配 330 fF 分流电容，三波混频泵浦。图源：Hung et al. (2025), Fig. 1。*

![[assets/figures/parametric-amplifier/hung2025-fig3-characterization.jpg]]
*KIMPA 的反射谱表征：$S_{11}$ 的幅度与相位（蓝）随信号频率的变化与数值模型（含泵浦调制）吻合——阻抗工程后的非线性谐振器在 8.4 GHz 中心附近形成宽带工作区。图源：Hung et al. (2025), Fig. 3。*

![[assets/figures/parametric-amplifier/hung2025-fig4-saturation.jpg]]
*饱和功率表征：信号增益随失谐与输入功率的色图给出压缩行为——输出饱和功率达 $-51\pm3\ \mathrm{dBm}$，比约瑟夫森结基反射式放大器高约 25 dB，源于 NbTiN 纳米线的高临界电流。图源：Hung et al. (2025), Fig. 4。*

性能包络：**17 dB 保相增益、450 MHz 带宽（中心 8.4 GHz）、附加噪声 0.5–1.3 量子、输出饱和功率 $-51\pm3$ dBm**。材料权衡由此清晰：动力学电感（NbN/NbTiN）以高 $T_c$、大临界电流换來输入压缩点 $-65$–$-55$ dBm、强磁场兼容（自旋比特读出的刚需，见[[circuit-qed/field-resilient-resonator|耐磁场超导谐振腔]]）与更高工作温度，代价是本征非线性低、需要更高泵浦功率才能达到同等带宽与增益——结基与 KI 基放大器的选择是运行条件、动态范围与泵浦约束之间的三角权衡。

## 单步光刻阻抗工程 JPA：IEJPA（Patel 2025）

阻抗工程与阻抗匹配路线共同的隐性成本是**工艺步数**：常规 IE-JPA 用多步光刻（光刻与电子束曝光交替、穿插介质与金属沉积）制作变压器与 JPA；Klopfenstein 锥阻抗匹配更是要厘米尺度的混合微带-CPW 结构。Patel 等人（IISc）的 IEJPA 把整套器件——阻抗变压器与 JPA——压进**单次电子束光刻 + Dolan 桥双角（±45°）铝蒸发**：MAA/PMMA 双层胶一次曝光成型，全部约瑟夫森结（JPA 的 dc-SQUID 与变压器的结阵列）在同一次原位氧化（700 mTorr、20 分钟）中形成。器件全平面、无传输线段：JPA 由 dc-SQUID（面积 $138\ \mu\mathrm{m}^2$、零偏临界电流 $1.8\ \mu\mathrm{A}$）并联 $1.6\ \mathrm{pF}$ 叉指电容构成；变压器是**三个标称相同的约瑟夫森结串联**（每个临界电流 585 nA，模拟 1.69 nH 线性电感）再串 $420\ \mathrm{fF}$ 叉指电容，形成集总串联 LC——用结阵列而非几何电感是为了把芯片足迹压到最小。

![[assets/figures/parametric-amplifier/patel2025-fig1-iejpa-micrograph.jpg]]

*IEJPA 假色光学显微照片：(a) 整体布局——左侧绿色为输入焊盘、蓝色为阻抗变压器（集总串联 LC）、黄色为 JPA 本体；(b) 变压器结阵列的放大视图；(c) JPA 中 SQUID 的放大视图。变压器与 JPA 在同一次电子束光刻中成型。图源：Patel et al. (2025)，Fig. 1。*

15 mK 下反射式四波混频运行，优化后（泵浦 5.347 GHz、$-88\ \mathrm{dBm}$）实测 **18 dB 增益、400 MHz 带宽**（中心约 5.3 GHz），**附加噪声逼近 0.5 光子量子极限，1 dB 压缩点约 $-114\ \mathrm{dBm}$**。与多步工艺的 state-of-the-art 对比：阻抗工程路线 20 dB/640 MHz/$-110\ \mathrm{dBm}$，阻抗匹配路线 15 dB/700 MHz/$-108\ \mathrm{dBm}$——指标相当而工艺显著简化，直接提升器件良率与制备周转，也使片上集成进量子比特架构（省去芯片间互连的插损）更现实。

![[assets/figures/parametric-amplifier/patel2025-fig2a-gain.jpg]]

*实测功率增益随信号频率的变化（泵浦 5.342 GHz、$-88\ \mathrm{dBm}$）：横轴信号频率、纵轴增益，约 18 dB 平坦增益覆盖约 400 MHz；增益曲线上的纹波来自 JPA 与轻微失配的环形器端口之间线缆中的驻波，缩短连线可减小。图源：Patel et al. (2025)，Fig. 2 面板 (a)。*

附加噪声用泵浦开/关的信噪比变化配合 Friis 公式估计：

$$
n_{\mathrm{add}} = L\,T_{\mathrm{HEMT}}\left[\frac{\mathrm{SNR}_{\mathrm{off}}}{\mathrm{SNR}_{\mathrm{on}}} - \frac{1}{G}\right]\frac{k_b}{\hbar\omega},
$$

其中 $T_{\mathrm{HEMT}}$ 是 HEMT 线性化噪声温度（取数据手册标称 3.6 K），$L$ 是 JPA 输出到 HEMT 输入之间的损耗（实测约 1.8 dB，主要来自环形器与线缆），$G$ 是 JPA 增益，$\mathrm{SNR}_{\mathrm{on/off}}$ 为泵浦开/关时频谱仪测得的信噪比，$k_b$、$\hbar$、$\omega$ 分别为玻尔兹曼常数、约化普朗克常数与信号角频率。该估计在增益带内逼近标准量子极限虚线；作者注明更精确的表征需 SNTJ 噪声温度计。

![[assets/figures/parametric-amplifier/patel2025-fig2b-added-noise.jpg]]

*估计的附加噪声光子数 $n_{\mathrm{add}}$ 随频率的变化：实线为 SNR/Friis 法估计值，虚线为量子极限放大器的标准量子极限（0.5 光子）——增益带内附加噪声逼近量子极限。图源：Patel et al. (2025)，Fig. 2 面板 (b)。*

![[assets/figures/parametric-amplifier/patel2025-fig2c-p1db.jpg]]

*1 dB 压缩点随频率的变化（磁通、泵浦频率与功率固定在最优工作点）：增益带内饱和输入功率约 $-114\ \mathrm{dBm}$，与[[readout-measurement/amplifier-saturation-power|参量放大器饱和功率]]词条讨论的 Kerr 稀释路线互补——这里的抓手是工艺与阻抗工程，而非结阵列稀释非线性。图源：Patel et al. (2025)，Fig. 2 面板 (c)。*

### 全正弦非线性：四次截断在阻抗工程区失效

这一工作还带来一个理论教训。既有阻抗工程 JPA 理论只保留 JPA 结的最低阶（四次）非线性、并把变压器当作线性电感；实测增益谱（18 dB 峰、带宽明显收窄）无法被该模型拟合。Patel 等人从第一性出发重推：完整哈密顿量 $\hat H = \hat H_J + \hat H_T + \hat H_{\mathrm{int}} + \hat H_{\mathrm{env}}$，其中 JPA 项保留**完整余弦非线性**

$$
\hat{H}_{J} = - \frac{\hbar \Omega_{J}}{4} (\hat{A}_{J} - \hat{A}_{J}^{\dagger})^{2} - E_{J} \cos\!\left(c_{2}(\hat{A}_{J} + \hat{A}_{J}^{\dagger})\right),
$$

$\Omega_J$ 是 JPA 谐振频率、$\hat A_J$ 是腔内模式湮灭算符、$E_J$ 是约瑟夫森能、$c_2 = (2\pi/\phi_0)\sqrt{\hbar Z_J/2}$ 是约瑟夫森结上的标度零点相位涨落（$Z_J = \Omega_J L_J$ 为线性化阻抗）。变压器项对 $M$ 个相同结的阵列同样保留完整余弦，环境耦合经马尔科夫近似给出变压器线宽 $\kappa = R\Omega_{T,\mathrm{eff}}/Z_T$。

泵浦用强经典幅值处理：把 $\hat A_{T,J}(t) = (\alpha_{T,J} + \hat a_{T,J})e^{-i\omega_p t}$ 分解后，经典泵浦方程中出现**贝塞尔函数** $J_1(A_{\mathrm{eff}})$、$J_1(A_{\mathrm{jpa}})$ 项，线性化信号方程中出现 $J_0$（频率牵引）与 $J_2$（参量增益）项——这正是正弦非线性不做截断的直接指纹。联立信号–闲置方程与输入输出关系得散射形式

$$
\hat{a}_{\mathrm{out}}(\Delta) = \sqrt{G(\Delta)}\,\hat{a}_{\mathrm{in}}(\Delta) + \sqrt{G(\Delta) - 1}\,\hat{a}_{\mathrm{in}}^\dagger(-\Delta),
$$

其中 $\Delta = \omega_s - \omega_p$、$G(\Delta)$ 为增益。数值对照（器件参数 $\Omega_J/2\pi = 6.5\ \mathrm{GHz}$、$L_J = 0.37\ \mathrm{nH}$、$L_T = 1.9\ \mathrm{nH}$ 等全部取自独立表征）显示：只含四次非线性的模型（红虚线）系统性偏离实测；保留完整正弦非线性（绿点线）正确预言增益带宽收窄，但远离泵浦中心处仍有偏差——作者归因于推导 $\kappa$ 时的马尔科夫近似（本器件 $Q$ 不高，近似条件不严格满足）。与"rf-SQUID 阵列 JPA"一节拒绝非线性截断的时域周期稳态方法对照：两条路线殊途同归，都说明**阻抗工程区的高增益行为必须保留结的完整非线性**才能定量建模。

![[assets/figures/parametric-amplifier/patel2025-fig4-gain-models.jpg]]

*实测增益（蓝实线）与不同理论模型的对比（泵浦 $\omega_p = 2\pi\times5.347$ GHz）：黄点划线为去掉变压器的全非线性 JPA——对照可见阻抗工程对带宽的扩展；红虚线为仅保留四次非线性的 IEJPA 模型，明显偏离实验；绿点线为保留 JPA 与变压器完整正弦非线性（至旋转波近似）的模型，正确预言带宽收窄、但远离泵浦处仍有偏差（马尔科夫近似的残余）。图源：Patel et al. (2025)，Fig. 4。*

## Blochnium/Quarton 架构：BJPA 与频率选择性增益（Salmanogli 2025）

理论提案路线的最新一支把**Blochnium**——Chirolli 等提出的四次非谐"准电荷"超导元件（见[[superconducting-qubits/fluxonium-qubit|Fluxonium 量子比特]]的近亲，但工作在电荷极限、以四阶非谐著称）——用作参量放大的非线性源。**BJPA（Blochnium JPA）**的基本单元是 **Quarton**：一个主 SQUID（约瑟夫森能 $E_{Jm}$）带 $M$ 个从 SQUID（$E_{Js}$），再把 $N$ 个 Quarton 串成 λ/4 谐振器阵列，寄生对地电容 $C_g$ 把单元链耦合为整体。分析流程是标准的电路量子化：先把 Lagrangian 写成矩阵形式 $\mathcal{L}_t = \frac{1}{2}\dot{\phi}^T\hat{C}\dot{\phi} - \frac{1}{2}\phi^T\hat{L}^{-1}\phi$（$\hat{C}$、$\hat{L}^{-1}$ 为三对角矩阵，编码从/主结的电容电感连接），由 $\Omega^2 = \hat{C}^{-1}\hat{L}^{-1}$ 的本征值/本征矢得到各模式的等效参数 $C_{\mathrm{eff}} = \Psi_i^T\hat{C}\Psi_i$、$L_{\mathrm{eff}}^{-1} = \Psi_i^T\hat{L}^{-1}\Psi_i$ 与阻抗 $Z_{\mathrm{eff}} = \sqrt{L_{\mathrm{eff}}/C_{\mathrm{eff}}}$，λ/4 谐振器由此映射为等效 LC 振子加非线性元件。

关键结果在有效 Kerr 上：对余弦非线性行泰勒展开到四阶后，总哈密顿量化为

$$
H_t = \omega_{\mathrm{eff}}\, a^\dagger a - \frac{E_c}{6N}\left(\frac{1}{M} - \alpha_c^*\right) a^{\dagger 2} a^{2},
$$

其中 $E_c$ 是充电能、$N$ 是主 SQUID 数、$M$ 是每个 Quarton 的从结数、$\alpha_c^* \equiv \Gamma_{a_c}/M$ 是主/从结面积比（$E_{Jm} = \alpha_c E_{Js}$）。**结阵列几何直接进入非线性格式**——$1/M$ 与 $\alpha_c^*$ 之差可正可负，Kerr 因此可调乃至（原则上）消除：这是对[[readout-measurement/amplifier-saturation-power|参量放大器饱和功率]]词条"SQUID 阵列按 $1/N^2$ 稀释 Kerr"路线的补充——Quarton 用主从两级层次代替均匀阵列，给出符号可控的设计自由度。动力学经量子朗之万方程 $\dot a = -i\omega_{\mathrm{eff}}a - iKa^\dagger aa - \frac{\kappa}{2}a + \sqrt{\kappa}a_{\mathrm{in}}$ 处理，相干泵浦的稳态归结为归一化三次方程 $[\frac{1}{4}+\delta^2]n - 2\delta\zeta n^2 + \zeta^3 n^3 - 1 = 0$（$n$ 为归一化腔内光子数、$\delta$ 为泵浦失谐/线宽、$\zeta \propto K$）。

![[assets/figures/parametric-amplifier/salmanogli2025-fig24-blochnium-quarton.jpg]]

*Blochnium/Quarton 结构（λ/4 谐振器实现）：N 个 Quarton 串联，每个 Quarton 含一个主 SQUID（约瑟夫森能 $E_{Jm}$）与 M 个从 SQUID（$E_{Js}$），寄生电容 $C_g$ 把链耦合为整体；相位降 φ 均匀分布到各 SQUID。主从两级层次使有效 Kerr 按 $E_c/6N(1/M-\alpha_c^*)$ 可调乃至消除。图源：Salmanogli et al. (2025)，Fig. 24。*

**修改版 BJPA** 进一步把两个 Quarton（A、B）经中央谐振器耦合为一个单元再级联：9 节点 Lagrangian 的电容/电感矩阵出现新的 $C_X = C_1+C_2+C_s+2C_m+2C_j$ 与 $L_X = 4+L/L_s$ 项，动力学与原 BJPA 分道扬镳。最有趣的是它的**梳状频率选择性增益**：简并泵浦（$F_{\mathrm{pump}} = 7.12$ GHz，8×192 结）下，C 波段（4–8 GHz）内的增益谱不是平坦带而是~25 dB 尖峰与近 0 dB 深谷相间的梳齿。作者把这从缺陷转为设计：频分复用读出中把各比特腔频对准增益峰，峰间深谷天然压制非目标频率上比特能量向读出链的泄漏——增益谱与频率规划合为一体，免除外部滤波。

![[assets/figures/parametric-amplifier/salmanogli2025-fig26-modified-bjpa.jpg]]

*修改版 BJPA 单元：两个 Quarton（各含主 SQUID 与四个从结、共享寄生电容 $C_g$）经中央 λ/4 谐振器（Res.）耦合，多个单元级联成多级放大器——Quarton 主结经 $\phi_{\mathrm{ext}}$ 磁通偏置控制非线性能景。图源：Salmanogli et al. (2025)，Fig. 26。*

![[assets/figures/parametric-amplifier/salmanogli2025-fig28-comb-gain.jpg]]

*修改版 BJPA 的梳状增益谱（$F_{\mathrm{pump}}=7.12$ GHz、8×192 结、$P_{\mathrm{sig}}=-150$ dBm、$I_{\mathrm{pump}}=3.96$ µA）：C 波段内 25 dB 量级的增益尖峰与深谷相间——把频分复用读出的频率规划与放大器响应合为一体，增益峰对准各比特腔频、谷底压制非目标频率泄漏。图源：Salmanogli et al. (2025)，Fig. 28。*

仿真对比表（均为理论/仿真值，实验尚待验证）：单结 JPA 增益 20–25 dB 但 $P_{1\mathrm{dB}}$ 仅 −115 至 −133 dBm；均匀结阵列把 $P_{1\mathrm{dB}}$ 抬到 −125 至 −95 dBm；BJPA（N=70、M=8）仿真 ~25 dB 增益、$P_{1\mathrm{dB}}\approx-92$ dBm、C 波段可调；修改版 BJPA 保持 ~25 dB 峰值、$P_{1\mathrm{dB}}$ 优于 ~−115 dBm、一阶输出模式占主导（三阶谐波被压制）。注意事项：BJPA 系列目前停留在理论建模与电路仿真层面，阻抗匹配（仿真中 $S_{11}$ 与 $S_{21}$ 差异小、提示端口失配）与大面积阵列的相位均匀性是落地前必须解决的工程问题；"Blochnium 高相干性、抗准粒子毒化"的器件学主张也仍需实验检验。

## 环境法布里–珀罗干涉：增益谱的环境整形

Kono 等人 2026 年把"环境失配"从麻烦升级为设计对象：JPA 与环形器之间的阻抗失配让这段波导成为一个**有效法布里–珀罗（FP）腔**——JPA 的反射界面与环形器的失配界面是两面"镜"，信号在腔内往返再回到 JPA 参与放大。基于量子输入输出理论，组合系统的解析反射谱 $S_{11}(\delta)$（$\delta$ 为相对 JPA 频率的失谐）由七个参数完全确定：JPA 的外耦合率 $\kappa$ 与内损耗率 $\kappa_0$、两面镜的透射率 $\eta$ 与 $\eta_0$、FP 腔**自由谱区** $\Delta$、**往返相位** $\varphi_0$ 与泵浦幅度 $\Omega_p$。核心定标判据由 $\Delta$ 相对 $\kappa$ 的比值给出：

$$
\Delta>\kappa:\ \text{近似洛伦兹增益}\qquad
\Delta<\kappa:\ \text{间距为}\ \Delta\ \text{的纹波}\qquad
\Delta\approx\kappa:\ \text{纹波融合成平顶增益谱}
$$

——FP 干涉不只是畸变源：把 $\Delta$ 设计到与 $\kappa$ 匹配可以**整形出平顶宽带增益**，这是 IMPA 阻抗变换之外的另一条环境工程路线。设计的底层权衡是：增益带宽 $B\approx\kappa/(2\sqrt G)$ 要求 $\Omega_p\approx\kappa$（泵浦效率随约瑟夫森参与比 $p_J$ 上升），而压缩点 $\propto 1/K$（$K$ 为自克尔）随 $p_J$ 下降——**泵浦效率与动态范围在 $p_J$ 上对立**。

![[assets/figures/parametric-amplifier/kono2026-fig1-jpa-fabry-perot-circuit.jpg]]

*JPA–波导–环形器组合：磁通驱动集总元件 JPA（电容并联 SQUID 阵列）经波导接环形器，环形器的阻抗失配提供弱反射——JPA 与失配点之间形成有效法布里–珀罗腔，往返反射波重新进入 JPA 参与干涉。图源：Kono et al. (2026), Fig. 1。*

![[assets/figures/parametric-amplifier/kono2026-fig3b-fp-gain-regimes.jpg]]

*FP 干涉对增益谱的理论整形：不同自由谱区 Δ（相对 κ）下的计算增益谱——Δ>κ 时近似洛伦兹，Δ<κ 时出现间距 Δ 的纹波，Δ≈κ 时纹波融合为平顶谱（最大增益均取 20 dB）。图源：Kono et al. (2026), Fig. 3(b)。*

实验（磁通驱动 SQUID 阵列 JPA，9.0–9.6 GHz 可调）证实并利用了这一图像：实测净增益谱随 JPA 频率剧烈变形——双峰、三峰乃至单峰平顶，解析模型逐谱拟合全部复现；拟合参数本身成为**环境诊断工具**（$\varphi_0$ 随 JPA 频率线性变化对应确定的腔长、$1-\eta$ 给出失配幅度，从而把"JPA 固有动力学"与"环境效应"干净分离）。性能量级：20 dB 净增益、3 dB 带宽 ~50 MHz（最高净增益 44 dB 时收窄到 ≲0.2 MHz）；在 $\omega_c/2\pi=9.375\ \mathrm{GHz}\pm\Delta$ 范围内，20 dB 带宽随 JPA 频率**周期性**地在 10–50 MHz 间变化（42 dB 时 0.1–1.5 MHz）——信号与 FP 反射的相长/相消干涉使带宽时增时减；1 dB 压缩点同样依赖往返相位 $\varphi_0$，动态范围可由工作点选择优化。行波器件侧，低温 TRL 校准的在役 S 参数测量证实了同一图像：JTWPA 的 $S_{11}/S_{22}$ 随增益的增长可由"泵关失配反射被逐次放大"的多次反射模型定量复现（$r_1=r_2\approx0.14$），见[[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]"在役 S 参数计量学"一节。

![[assets/figures/parametric-amplifier/kono2026-fig5a-measured-gain-spectra.jpg]]

*实测净增益谱（约 20 dB，JPA 频率 9.0–9.6 GHz 扫描）：因低温布线中的阻抗失配，谱形随 JPA 频率显著偏离洛伦兹——出现双峰/三峰/平顶等干涉图样；解析输入输出模型（含 FP 腔）对全部谱形定量拟合，参数随频率的演化给出环境失配与腔长的诊断。图源：Kono et al. (2026), Fig. 5(a)。*

## 参数与量级

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 设计电容 $C$ | $3.4\ \mathrm{pF}$（JPA）；$3\ \mathrm{pF}$（IMPA 设计基准） | |
| SQUID 临界电感 $L_J$ | $80\ \mathrm{pH}$ | |
| SQUID 几何电感 $L_S$ | $\approx 15\ \mathrm{pH}$ | |
| 最大谐振频率 $f_{\max}$ | $8.85\ \mathrm{GHz}$ | |
| 阻抗变换器频率 $f_t$ | $6.8\ \mathrm{GHz}$ | |
| 阻抗变换器特征阻抗 $Z_{\lambda/4}$、$Z_{\lambda/2}$ | $33\ \Omega$、$60\ \Omega$（理论设计基准） | |
| 阻抗匹配线性虚部系数 $\alpha$ | 由 $\omega_t$、$C$、$Z_{\lambda/2}$、$Z_{\lambda/4}$ 决定（公式 4.57） | |
| 增益工作带宽定义 | $G \geqslant 15\ \mathrm{dB}$ 的最大连续频率范围 | |
| JPA 工作带宽 | $\sim 50\ \mathrm{MHz}$（$\kappa$ 几十 MHz） | |
| JPA 饱和信号输入功率 | $-20\ \mathrm{dBm}$（片上）；$-121\ \mathrm{dBm}$（含 $-101\ \mathrm{dB}$ 线缆衰减） | |
| IMPA 实测带宽 | $> 600\ \mathrm{MHz}$（15 dB 增益下） | |
| IMPA 饱和信号输入功率 | $\sim -110\ \mathrm{dBm}$ | |
| 等效噪声温度 $T_J$ | $\sim 150\ \mathrm{mK}$（量子极限 $\hbar\omega/2 k_B$ 量级） | |
| 链路等效输入温度 | $T_{\mathrm{eff}} = T_J + T_H/G_J + \cdots$ | |
| JTWPA 饱和信号输入功率 | 足以同时读取约 20 个超导量子比特（一般综述） | Macklin 2015 等 |
| 并联 JPA 单只带宽/增益 | 48–52 MHz @ 20 dB（三只中心频率错开，1.2–1.33 GHz） | Uchaikin 2024 |
| 并联 JPA 组合覆盖 | 约 140 MHz（单次降温，约为单只 3 倍） | Uchaikin 2024 |
| 并联 JPA 系统噪声温度 | 约 150 mK（Y-factor 法，36 mK 恒温噪声源） | Uchaikin 2024 |
| 高阶修正 Kerr 系数（磁通泵浦实验器件） | $\Lambda/2\pi=-1.55\ \mathrm{MHz}$（$C=3.2\ \mathrm{pF}$、$L_J=45\ \mathrm{pH}$、参与比 0.8，由独立测量推得） | Boutin 2017 |
| 磁通泵浦实验腔衰减率 | $\bar\kappa/2\pi=130\ \mathrm{MHz}$、$\gamma=\kappa/10$ | Boutin 2017 |
| Kerr 对保相量子效率的影响 | $|\Lambda|=0.01\kappa$、增益 20 dB 时仍近量子极限 | Boutin 2017 |
| Kerr 对相敏量子效率的影响 | 增益 25 dB、$|\Lambda/\kappa|=10^{-2}$：$\theta_o$ 相位 $\eta\approx0.9$、$\theta_m$ 相位 $\approx0$（相位差 <0.2 rad） | Boutin 2017 |
| 压缩水平滤波带宽 | 256 ns boxcar（约 4 MHz），理想 JPA 亦因带宽收窄而饱和 | Boutin 2017 |
| FP-JPA 净增益/带宽 | 20 dB @ ~50 MHz；最高 44 dB（片上 45 dB）时 ≲0.2 MHz | Kono 2026 |
| FP 带宽周期变化 | 20 dB 下 10–50 MHz、42 dB 下 0.1–1.5 MHz（JPA 频率在 ω_c±Δ 内扫描） | Kono 2026 |
| FP 谱形判据 | Δ>κ 洛伦兹 / Δ<κ 纹波（间距 Δ）/ Δ≈κ 平顶；1 dB 压缩点依赖往返相位 φ₀ | Kono 2026 |
| rf-SQUID 阵列 JPA 饱和功率 | 最高 $-91.5\ \mathrm{dBm}$、平均 $(-94.2\pm1.4)\ \mathrm{dBm}$ @ >20 dB 增益（$N=25$、$\beta=0.25/0.21$、$L_J=60$ pH、$Q\approx10$） | Kaufman 2025 |
| rf-SQUID 阵列 JPA 带宽与量子效率 | 平均瞬时带宽 $(20\pm6)$ MHz；全链 $\eta=(62.4\pm1.4)\%$（弱测量反作用层析）；99.3% 态分离保真度（800 ns） | Kaufman 2025 |
| rf-SQUID 阵列设计边界 | 最大可达增益沿 $(\beta Q)^{-1}$ 等值线，$(\beta Q)^{-1}\gtrsim0.65$ 无法达到 20 dB；最大饱和功率贴该边界（设计空间内相差 >10 dB） | Kaufman 2025 |
| KIMPA（NbTiN 三级阻抗变换） | $Z_\mathrm{NR}$ 提升到数十 Ω（10×）、分流电容 330 fF；17 dB 增益、450 MHz 带宽@8.4 GHz、附加噪声 0.5–1.3 量子、输出饱和 $-51\pm3$ dBm（比 JJ 基高 ~25 dB） | Hung 2025 |
| BJPA（Blochnium/Quarton，理论仿真） | Kerr = $E_c/6N(1/M-\alpha_c^*)$ 符号可调；~25 dB 增益、C 波段可调、$P_{1\mathrm{dB}}\approx-92$ dBm（N=70、M=8）；修改版梳状增益峰 ~25 dB、谷底压制泄漏 | Salmanogli 2025 |
| 量子极限附加噪声 $N_a$ | $0.5$（保相）、$0$（相敏） | Caves 1982 |

## 实验特征与低温测量

### 反射谱与品质因子

对单端口 JPA，散射参数

$$
S_{21}(\omega) = \frac{\hat{a}_{\mathrm{out}}(\omega)}{\hat{a}_{\mathrm{in}}(\omega)} = \frac{\kappa - \gamma + 2i(\omega - \omega_a)}{\kappa + \gamma - 2i(\omega - \omega_a)}
$$

其中 $\gamma$ 为内部损耗率，$\kappa = 1/(R_L C)$ 为端口耦合耗散率。$\gamma \to 0$ 时 $|S_{21}|\equiv 1$，但**相位**仍携带动率学信息——从相位上提取 $\omega_a$ 与 $\kappa$。$\gamma \neq 0$ 时幅值谱在 $\omega_a$ 处出现谷，谷越深内部损耗越大。

### 工作带宽、饱和功率与噪声温度三步走

完整表征流程：第一步测调制谱确认样品正常（用网络分析仪扫 $S_{21}$，观察谐振频率随磁通偏置的周期性变化）；第二步粗扫增益形貌，先把网分设为单点频率 $f_s + \delta$，固定 $f_p = 2 f_s$，扫磁通偏置与泵浦功率，目标 $G_{\max} > 15\ \mathrm{dB}$，逐步增大 $\delta$（$5\to 10\to 50\to 150\ \mathrm{MHz}$）估带宽；第三步精细调参提取增益形貌 $G_J(\omega)$；第四步测饱和功率——增益下降 $1\ \mathrm{dB}$ 对应的输入功率；第五步用 $\Delta\mathrm{SNR}$ 法

$$
T_J = T_H\left(\frac{1}{\Delta\mathrm{SNR}\cdot G_J} - \frac{1}{\Delta\mathrm{SNR}}\right) + T_0\left(\frac{1}{\Delta\mathrm{SNR}} - 1\right)
$$

推算放大器噪声温度。$\Delta\mathrm{SNR}$ 是 JPA 增益开关前后系统信噪比的提升（越大越好）。其中 $T_H$ 用 Y 因子法在 HEMT 接 $20\ \mathrm{mK}$ 冷负载与 $6\ \mathrm{K}$ 热负载两种条件下独立标定，$T_0$ 直接取真空涨落（$20\ \mathrm{mK}$ 下即 $0.5$ 个光子噪声）；最后得系统输入噪声温度 $T_{\mathrm{sys}} = (T_H + T_0)/\Delta\mathrm{SNR}$。

### 多比特频分复用读出

读出链路把多个比特腔频分复用（frequency-division multiplexing, FDM）到同一条数据总线：每比特分配一个独立的腔频率 $f_i$，微波源产生的载波经任意波形发生器（AWG）给出的中频（IF）信号调制后通过混频器下变频到比特腔频率；反射信号经同一总线取出，再用同一本振混频上变频为 IF，由 ADC 采集后做数字正交 $IQ$ 解调、低通 FIR 滤波、匹配滤波（权重取 $|0\rangle$、$|1\rangle$ 两态均值的差）后给出最终 $I$、$Q$。整个链路对 IMPA 提出的要求就是：**足够宽的工作带宽**（覆盖所有比特腔）、**足够高的饱和功率**（不被最强比特饱和）、**足够低的附加噪声**（让所有比特 $\eta_{\mathrm{amp}} \to 1$）。

 §4.4.4 报告在六比特超导量子芯片上，使用 IMPA 后 $|\,0\rangle$ 态读取保真度最高可达 $99.52\%$、$|\,1\rangle$ 态最高 $97\%$，平均读取保真度最高 $98.14\%$，单次读取时间 $300$–$500\ \mathrm{ns}$。各比特的态分离错误率均在 $1\%$ 以内（除 Q6 因腔频位于 IMPA 增益带边、信噪比仅 $3.01$ 而态分离错误率达 $3.33\%$），分离错误率占总错误的比重大，说明首要瓶颈是信噪比而非态制备或弛豫。

<!-- FIGURE: 六比特读取结果图：六个 IQ 圆斑分别对应 Q1–Q6 状态聚类，标注 SNR、态分离错误率 E_sep 与总错误率 E -->

## 行波参量放大器与其他变体

谐振式 JPA / IMPA 的带宽受谐振带宽限制，带宽做到约 GHz 量级已接近极限。要进一步扩大带宽与饱和功率，需改用**行波结构**：

- **约瑟夫结行波参量放大器（JTWPA, Josephson traveling-wave parametric amplifier）**：把上千个几乎一致的约瑟夫森结 + 谐振单元串接成传输线，靠色散工程让三波/四波混频在宽频带内同时满足相位匹配，典型可在数 GHz 范围内维持 $\sim 20\ \mathrm{dB}$ 增益，饱和功率足以同时读取约 20 个超导量子比特。代价是制备工艺复杂、对结参数均一性要求极高；其器件结构、电流–相位关系谐波工程与增益–稳定性权衡见专页[[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]；
- **动力学电感行波放大器（KTWPA, kinetic-inductance TWPA）**：利用超导薄膜的非线性动力学电感实现参量放大，工艺更简单但谐波控制更难；
- **SNAIL / rf-SQUID 阵列型**：在饱和功率与增益–带宽乘积上寻找更优折中，用更多结的人工非线性替代单个 SQUID；SNAIL-TWPA 的磁通偏置切换 3WM/4WM 与大信号谐波平衡建模见专页[[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]——磁通偏到 $0.4\Phi_0$ 抑制四波混频后，泵浦频率位于增益谱之外，可避免强泵浦对频谱内量子比特的意外激发。rf-SQUID TWPA 更进一步：线性色散与非线性强度可独立设计（配合多周期电容变化的双阻带色散工程），用与常规 JTWPA 相当的单元数把饱和功率抬高一个量级至 $-84\ \mathrm{dBm}$、增益带宽超过一个倍频程，打破"饱和功率换器件长度"的权衡——见该词条"rf-SQUID TWPA"一节；谐振式一侧，上文 rf-SQUID 阵列 JPA 的 $-91.5\ \mathrm{dBm}$ 说明同一单元思想在两种拓扑都奏效；
- **Floquet 模式 TWPA**：把信息编码在泵浦周期调制的瞬时 Floquet 模式（而非单频模式）以消除寄生边带泄漏，再绝热匹配回单频模式；首个实验实现给出 >20 dB 增益@3 GHz、<0.5 dB 插入损耗与本征量子效率 92.1%（TWPA 最高）——结构、wQED/测量诱导退相干效率定标与比特读出演示见专页[[readout-measurement/josephson-traveling-wave-amplifier|约瑟夫森行波参量放大器]]"Floquet 模式 TWPA"一节；

对 §4.4 中提到的低温放大器方案而言，JTWPA 是工业级、IMPA 是实验室级、JPA 是单比特级——三者各有适用场景。

### 器件-材料-电路：三维扩展

**外围电路**决定 TWPA 的实际性能上限：3WM 行波放大器嵌入双工器+混合耦合器+阻抗匹配网络——信号-泵浦分离、反射抑制、通带平坦化全部由外围完成。理想增益的 TWPA 没有外围电路就到不了量子极限。

![[assets/figures/parametric-amplifier/f85fc17485d135fba72c0e81040fcb7dae782128a31dad4019f0d048a24704e7.jpg]]

*TWPA 外围电路系统：双工器+混合耦合器+匹配网络——信号-泵浦分离与反射抑制。图源：arXiv:2310.11909，Fig. 1。*

![[assets/figures/parametric-amplifier/46395977efdbec29e287d567aafd8db75cb8bb3ab0f413285efa1ff1f31a3b8e.jpg]]

*外围电路的效果：嵌入前后的增益/噪声性能对比。图源：arXiv:2310.11909，Fig. 2。*

**材料维度**：量子极限 TWPA 的 NbTiN 薄膜——高动力学电感（低损耗四波混频介质）的薄膜工艺直接影响量子极限性能；与超导比特侧的 NbTiN 高阻抗腔（词条间的材料呼应）共享工艺基础。

![[assets/figures/parametric-amplifier/7b8c729f49198072bd2fa302b5213018af8d49ac5757ef7f3046e7e4a0ae7d7e.jpg]]

*NbTiN 薄膜表征：高动力学电感薄膜的参数测量——量子极限 TWPA 的材料基础。图源：Mantegazzini et al. (2024)，Fig. 1。*

![[assets/figures/parametric-amplifier/05f0c292747acf542d77d12a236286378c7bb4379af3b5cdf7a6e88413e92544.jpg]]

*量子极限性能验证：NbTiN TWPA 的噪声测量——接近量子极限的附加噪声。图源：Mantegazzini et al. (2024)，Fig. 2。*

**JPA 的宽带变体**：CPW 型阻抗变换 JPA——带宽-增益权衡的阻抗变换方案，鲁棒低噪声设计。

![[assets/figures/parametric-amplifier/e926252a6f8cca35c60c10eb033f3dfeb46dd095b4d6b2abde74e11266195905.jpg]]

*宽带 CPW 阻抗变换 JPA：带宽-增益权衡的新方案——鲁棒低噪声设计。图源：arXiv:2310.17084，Fig. 1。*

![[assets/figures/parametric-amplifier/aed5da97d4fb7b4d33ff6b95f7830b267177bc17fb1b19a72aecfb070d5a9500.jpg]]

*性能验证：增益/带宽/噪声的三维指标。图源：arXiv:2310.17084，Fig. 2。*

## 与其他概念的关系

- 参量放大器作为读出链首级，与[[readout-measurement/rf-reflectometry|射频反射测量]]共享同一反射链路：前者抬高后者输出信号的电平，让 HEMT 的噪声贡献被压制；[[readout-measurement/purcell-filter|Purcell 滤波器]]则放在腔与 JPA 之间，保护比特 $T_1$ 不因开放读出端口而缩短。
- 参量放大器提升的量子效率直接进入色散读出的信噪比——参见[[readout-measurement/dispersive-readout|色散读出]]。相敏放大器的 $N_a = 0$ 在理论上比保相放大的 $N_a = 0.5$ 高出 $50\%$ 的量子效率，对[[readout-measurement/single-shot-readout|单发读出]]与[[readout-measurement/threshold-independent-readout|阈值无关读出]]影响显著。
- 多比特读出时多腔共享总线，需要[[readout-measurement/readout-crosstalk|读出串扰]]抑制；IMPA 的宽带宽让所有比特腔都落在增益带内，从而用同一台首级放大器服务整条总线——这是 FDM 的硬件前提。
- 在物理实现层面，JPA 是[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]非线性电路的具体应用之一：SQUID 提供的非线性电感与[[circuit-qed/jaynes-cummings-model|Jaynes–Cummings 模型]]中"原子"扮演的角色类似，只不过这里是把它当作非线性介质利用而非与腔交换激发。[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]路线则把同样的非线性推到传输线整体的非线性电感中（KTWPA）。
- 量子效率 $\eta$ 还可以从信息论解读：$\lim_{t\to\infty} \Gamma_m/(2\Gamma_d) = \eta$，把放大器噪声与测量诱导退相干挂钩——这与[[readout-measurement/dispersive-readout|色散读出]]的腔光场动力学分析是同一思路。高增益下 Kerr 修正使相敏量子效率强烈依赖相位（见上文"高阶非线性修正"一节），而简并工作模式的瞬态动力学还映射出 PT 对称性破缺相变——见[[readout-measurement/pt-symmetry-parametric-amplifier|参量放大器中的 PT 对称性破缺]]。

## 参考文献

- Kono, S., Ilves, J., van Loo, A. F., Sunada, Y., Chang, C. W. S., Takeda, Y., Yuki, K., Miyamura, T., Matsuura, K., Koshino, K., Nakamura, Y. High-gain and large-bandwidth Josephson parametric amplifier influenced by Fabry-Pérot interference. arXiv:2604.13881 (2026)（QAtlas 缓存：2604.13881）。
- Boutin, S., Toyli, D. M., Venkatramani, A. V., Eddins, A. W., Siddiqi, I., Blais, A. Effect of higher-order nonlinearities on amplification and squeezing in Josephson parametric amplifiers. *Physical Review Applied* 8, 054030 (2017). DOI: 10.1103/physrevapplied.8.054030；arXiv:1708.00020（QAtlas 缓存：1708.00020）。
- Uchaikin, S. et al. Improving Amplification Bandwidth by Combining Josephson Parametric Amplifiers for Active Axion Search Experiments at IBS/CAPP. *Journal of Low Temperature Physics* (2024). DOI: 10.1007/s10909-024-03090-5（QAtlas 缓存：10.1007_s10909-024-03090-5）。
- Kaufman, R., Liu, C., Cicak, K., Mesits, B., Xia, M., Zhou, C., Nowicki, M., Aumentado, J., Pekker, D., Hatridge, M. Simple, High Saturation Power, Quantum-limited, RF SQUID Array-based Josephson Parametric Amplifiers. *Physical Review Applied* 24, 014052 (2025). DOI: 10.1103/physrevapplied.24.014052；arXiv:2402.19435（QAtlas 缓存：2402.19435）。
- Hung, C.-C., Kutsuma, H., Chang, C. W. S., van Loo, A. F., Nakamura, Y. Broadband Kinetic-Inductance Parametric Amplifiers with Impedance Engineering (2025). arXiv:2504.17145（QAtlas 缓存：2504.17145）。
- Salmanogli, A., Zandi, H., Esmaeili, M., Eskandari, A., Akbari, M. Technical Review on RF-Amplifiers for Quantum Computer Circuits: New Architectures of Josephson Parametric Amplifier (2025). arXiv:2507.13187（QAtlas 缓存：2507.13187）。
- 饱和功率的定量理论（$P_{1\mathrm{dB}}\propto\kappa/|K|$、SQUID 阵列稀释）：Planat, L. et al. *Physical Review Applied* 11, 034014 (2019)，见[[readout-measurement/amplifier-saturation-power|参量放大器饱和功率]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
