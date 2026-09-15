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
date: 2026-09-08
---

<div class="entry-lead">参量放大器被放在低温读出链前端，用高增益把极弱的腔信号抬到后级放大器噪声之上，同时尽量少添加噪声。</div>

## 物理图像与定义

参量放大器（parametric amplifier）是一种**靠外加泵浦周期性调制非线性电抗**完成能量转换的器件。它本身没有内部直流偏置，也不靠半导体三极管/高电子迁移率晶体管（HEMT）的常规增益机制，而是把泵浦光子转化为信号–闲置（signal–idle）光子对，把外部驱动作为放大的能量来源。受益于泵浦只参与介质的非线性电极化、不引入额外的耗散通道，参量过程可以做到非常接近标准量子极限（standard quantum limit, SQL）的附加噪声，因此成为低温读出链路中不可替代的首级放大器。

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（circuit QED）的[[circuit-qed/microwave-resonator|微波谐振腔]]色散读出链路中，参量放大器通常紧邻样品，安装在稀释制冷机 20 mK 冷盘上、靠近读出腔反射端口的位置，作用是把经过数米低温同轴线衰减（典型 $-30\ \mathrm{dB}$ 量级）后已经弱到接近真空涨落的腔反射信号先抬升 $15$–$20\ \mathrm{dB}$，等效地让低温 HEMT（约 $4\ \mathrm{K}$、$T_H\approx 4\ \mathrm{K}$、增益约 $40\ \mathrm{dB}$）的噪声贡献被前级高增益压制。链路整体的等效输入温度

$$
T_{\mathrm{eff}} = T_J + \frac{T_H}{G_J} + \frac{T_R}{G_J G_H} + \cdots
$$

其中 $T_J$、$T_H$、$T_R$ 分别为参量放大器、低温 HEMT、室温放大器的等效噪声温度，$G_J$、$G_H$ 为各级增益。当 $G_J \gtrsim 15\ \mathrm{dB}$、$T_J \approx 150\ \mathrm{mK}$ 时，链路噪声主要被首级参量放大器自身决定，这是为什么读出实验要花大力气优化 JPA / IMPA 的原因。

按"是否同时放大两个正交分量"，参量放大器分为**保相（phase-preserving）**与**相敏（phase-sensitive）**两类；按"使用一个还是两个非线性元件"，又有 SQUID 或 SQUID 阵列构成的**谐振式参量放大器（JPA / IMPA）**与非线性传输线构成的**行波参量放大器（JTWPA / KIPA）**两类。本文重点放在超导量子比特读出中最常见的前者，并以 论文第四章的工作作为主线。

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

减小自科尔系数 $|K|$ 的绝对值可以提升饱和功率，但会同时减小非线性强度，因此是参数权衡的常见支点。

### 窄带宽 JPA 的实测特性

 论文 §4.3 给出的代表器件参数：电容 $C = 3.4\ \mathrm{pF}$、SQUID 临界电感 $L_J = 80\ \mathrm{pH}$、SQUID 几何电感 $L_S \approx 15\ \mathrm{pH}$，对应最大谐振频率 $f_{\max} = 1/[2\pi\sqrt{(L_J + L_S)C}] \approx 8.85\ \mathrm{GHz}$。芯片工艺采用光刻剥离工艺的 4 层结构（地平面 / $\mathrm{SiO}_2$ 介质 / 电容上极板 / 双角度斜蒸发 SQUID），相对简单。带宽按 $\Gamma_{\mathrm{BW}} \propto \kappa \propto 1/C$ 估算在几十 MHz 量级。

低温测试时两级环形器隔离输入/反射信号，反射信号经 4 K HEMT（约 40 dB）和室温放大器（约 55 dB）两级放大后到频谱仪或网络分析仪。完整测量流程为：(1) 测调制谱确认样品正常、(2) 粗扫工作参数（信号频率、磁通偏置、泵浦频率/功率）、(3) 精细调参提取带宽、(4) 测饱和功率、(5) 用 $\Delta\mathrm{SNR}$ 法推算噪声温度。定义"增益工作带宽"为**增益不小于 $15\ \mathrm{dB}$ 的最大连续频率范围**（有别于峰值半高宽定义），以实用为导向。论文报告该 JPA 工作带宽约 $50\ \mathrm{MHz}$、饱和信号输入功率约 $-20\ \mathrm{dBm}$（算上 $-101\ \mathrm{dB}$ 线路衰减后总饱和输入 $-121\ \mathrm{dBm}$）、工作带宽范围内噪声接近量子极限。

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

实测中环境阻抗并非理想 $50\ \Omega$：环形器端口阻抗有明显的感抗振荡，会把振荡反映到 IMPA 的增益曲线中，需要对环形器逐个筛选、把工作频率微调以避开振荡峰；连接线缆上的驻波也会让环境阻抗随频率变化变密；通过微调泵浦频率 $f_p$ 改变增益中心是常见的实验对策。

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

- **约瑟夫结行波参量放大器（JTWPA, Josephson traveling-wave parametric amplifier）**：把上千个几乎一致的约瑟夫森结 + 谐振单元串接成传输线，靠色散工程让三波/四波混频在宽频带内同时满足相位匹配，典型可在数 GHz 范围内维持 $\sim 20\ \mathrm{dB}$ 增益，饱和功率足以同时读取约 20 个超导量子比特。代价是制备工艺复杂、对结参数均一性要求极高；
- **动力学电感行波放大器（KTWPA, kinetic-inductance TWPA）**：利用超导薄膜的非线性动力学电感实现参量放大，工艺更简单但谐波控制更难；
- **SNAIL / rf-SQUID 阵列型**：在饱和功率与增益–带宽乘积上寻找更优折中，用更多结的人工非线性替代单个 SQUID；
- **Floquet 模式 TWPA**：把泵浦分解为周期调制的"模式"，可在更低泵浦功率下获得高增益。

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
- 量子效率 $\eta$ 还可以从信息论解读：$\lim_{t\to\infty} \Gamma_m/(2\Gamma_d) = \eta$，把放大器噪声与测量诱导退相干挂钩——这与[[readout-measurement/dispersive-readout|色散读出]]的腔光场动力学分析是同一思路。
