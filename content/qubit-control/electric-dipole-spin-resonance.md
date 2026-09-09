---
title: 电偶极自旋共振
description: 借助自旋轨道耦合或磁场梯度，把交流电场转换成有效横向自旋驱动的技术。
aliases:
  - EDSR
  - 电驱动自旋共振
  - 电偶极自旋谐振
tags:
  - 量子比特操控
  - 自旋
date: 2026-09-08
---

<div class="entry-lead">EDSR 让栅电极发出的电场驱动自旋。微波先推动载流子波函数在量子点内做受迫振荡，再由空间磁场梯度或内禀自旋轨道耦合把这一位移转换为随时间变化的有效磁场，从而在塞曼共振频率附近实现 Rabi 振荡。</div>

## 物理动机

电子自旋本身没有电偶极矩——直接对电子加电场不会进入自旋空间。Loss–DiVincenzo 比特的标准[[qubit-control/single-spin-qubit|单自旋比特]]门因此需要片上天线产生交变磁场（ESR 方案），但大电流带来的加热把天线驱动的 Rabi 频率限制在 1 MHz 以下，且每根天线只能覆盖一片区域，与多比特阵列天然不兼容。

电偶极自旋共振（electric dipole spin resonance，EDSR）走另一条路：把微波电压加到定义量子点的栅极上，让栅电场先调制载流子的轨道波函数 $\mathbf{r}(t)$，再用空间不均匀磁场或材料内禀自旋轨道耦合把位移转换为自旋感受到的有效振荡磁场 $\mathbf{B}_\text{eff}(t)$。结果是门极既能定义量子点又能驱动自旋，不必再为每个比特设计独立天线，操控速率正比于梯度或自旋轨道强度，典型可达 10–30 MHz（硅电子体系）乃至百 MHz 量级（锗空穴体系）。代价是同一耦合通道也把[[materials-devices/charge-noise|电荷噪声]]反向注入自旋通道，使"驱动强"与"相干好"往往不能同时最大化。

<!-- FIGURE: ESR 与 EDSR 对照：ESR 由天线电流产生交变磁场直接驱动自旋；EDSR 由栅极微波电场驱动载流子振荡，经空间梯度磁场或内禀自旋轨道耦合转换为等效振荡磁场 -->

## 两条物理路径

按"位移如何映射为有效磁场"划分，EDSR 在硅基与锗基两条路线中走过的路径截然不同。

**人工合成自旋轨道耦合（合成 SOC，微磁体路线）**。在硅、Si/SiGe 与 Si-MOS 中，自旋轨道耦合极弱，需要在量子点附近集成[[materials-devices/micromagnet|微磁体]]（常用 Co、坡莫合金等微米尺度磁体）来提供空间不均匀磁场。微磁体的总磁场在量子点处通常写作 $B_\text{total}=B_z\,\hat{z}+b_z\,\hat{z}+b_\perp\,\hat{x}$：$B_z$ 是被外磁场磁化后的均匀分量；$b_z=\partial B_z/\partial x$ 是沿量子化轴的纵向梯度，用来给同阵列中的不同比特错开拉莫尔频率实现寻址；$b_\perp=\partial B_x/\partial z$ 是垂直于量子化轴的横向梯度，把电子位移 $eE_\text{ac}\ell_\text{orb}/\Delta_\text{orb}$（$\ell_\text{orb}$、$\Delta_\text{orb}$ 是量子点谐振子势的特征长度与轨道能级间距）转换为有效磁场 $B_\text{eff}\propto eE_\text{ac}\,|b_\perp|/\Delta_\text{orb}^2$。两套梯度分别服务于"寻址"与"驱动"，但它们无法独立调谐——几何上一旦微磁体形状固定，两者就同时被决定，这是[[materials-devices/micromagnet|微磁体优化]]研究反复权衡的核心。

**内禀自旋轨道耦合（本征 SOC，锗空穴路线）**。Ge/SiGe 异质结价带顶由 $J=3/2$ 重空穴主导，$p$ 轨道成分与晶格应变共同打开强 Rashba–Dresselhaus 型自旋轨道耦合，无需任何外部磁体就能把电场直接转换为等效磁场。该有效磁场可写为

$$
B_\text{eff}(t)=\frac{l_\text{dot}}{l_\text{SO}}\frac{eE(t)}{\Delta}\,\tilde\alpha,
$$

其中 $l_\text{SO}=\hbar/(m^*\sqrt{\alpha^2+\beta^2})$ 是自旋轨道长度（$\alpha,\beta$ 分别为 Rashba、Dresselhaus 系数），$l_\text{dot}$ 是量子点尺寸，$\Delta$ 是限制势能级间距（或 hh–lh 子带分裂），$\tilde\alpha$ 是无量纲的 SOC 强度。Ge 纳米线空穴体系 $l_\text{SO}\sim40$–$100\,\text{nm}$，比 GaAs 电子（$l_\text{SO}\gtrsim 1\,\mu\text{m}$）短一个量级以上，单位电场位移能产生更显著的自旋转动；同时空穴缺乏 $s$ 轨道超精细耦合，纯化 Ge 体系中核自旋噪声几乎可忽略。这两点是[[qubit-control/hole-spin-qubit|空穴自旋比特]]在 EDSR 速度与单比特门保真度上跑赢电子路线的物理基础。

硅电子 EDSR 与锗空穴 EDSR 在哈密顿量结构上同构（都是 $H_\text{drive}=\tfrac12 g\mu_B B_\text{eff}(t)\,\sigma_\perp$），只是 $B_\text{eff}$ 的微观来源不同——前者源自微磁体的合成 SOC，后者源自材料的本征 SOC。这把两套看似独立的实验纳入同一物理图像，也意味着两套体系面对同一类噪声——电荷涨落通过 SOC 通道回灌到自旋频率——必须用同一思路解决。

## 理论模型

### 单点 EDSR 哈密顿量

在实验室坐标系下，自旋比特在静磁场 $B_z$ 中的自由哈密顿量为 $H_0=-\tfrac12 g\mu_B B_z\,\sigma_z=\tfrac12 \hbar\omega_0\,\sigma_z$；EDSR 引入的驱动项可等效为垂直于量子化轴的有效振荡磁场 $B_\text{eff}(t)=B_1\cos(2\pi f_\text{drive}t+\varphi)$，总哈密顿量为

$$
H_\text{lab}=\tfrac12\hbar\omega_0\,\sigma_z+\tfrac12 g\mu_B B_1\cos(2\pi f_\text{drive}t+\varphi)\,\sigma_x.
$$

进入频率 $f_\text{drive}$ 的旋转坐标系并作[[qubit-control/rabi-oscillation|RWA]]，失谐 $\Delta f=f_\text{drive}-f_0$（$f_0=g\mu_B B_z/h$）时有效哈密顿量化为

$$
H_\text{rot}=\pi\hbar\Delta f\,\sigma_z+\tfrac12 g\mu_B B_1\big(\cos\varphi\,\sigma_x-\sin\varphi\,\sigma_y\big),
$$

即与[[qubit-control/rabi-oscillation|Rabi 振荡]]词条给出的形式一致。共振时态矢量在赤道面上以 Rabi 频率

$$
f_\text{Rabi}=\frac{g\mu_B B_1}{2h}
$$

进动，控制相位 $\varphi$ 即可实现绕 $x$ 或 $y$ 的任意单比特旋转。两者唯一区别是 $B_1$ 在 ESR 中来自天线电流、在 EDSR 中来自合成/本征 SOC 把电场转换出的等效磁场。

把驱动用耦合强度参数化，可以更直接地看出"电场 $\to$ 自旋"的传递链。对微磁体路线，在简谐势阱近似下（$\ell_\text{orb}=\sqrt{2\hbar/(m^*\omega_0)}$、$\Delta_\text{orb}=\hbar\omega_0$，$\omega_0$ 为势阱圆频率），

$$
B_\text{eff}=\frac{e E_\text{ac}\,\ell_\text{orb}\,|b_\perp|}{\Delta_\text{orb}},\qquad
f_\text{Rabi}\propto\frac{e E_\text{ac}\,|b_\perp|}{\Delta_\text{orb}^2},
$$

即 Rabi 频率与栅极电场幅度 $E_\text{ac}$、横向梯度 $b_\perp$ 成正比，与轨道能级间距的平方成反比——减小量子点尺寸既放大电偶极矩也放大梯度，但同时缩小了能级间距使比特更易受高频电荷噪声影响，是 EDSR 工程中典型的"两难折中"。

### 翻转模式（flopping mode）哈密顿量

单点 EDSR 的瓶颈是电子被束缚在单个势阱内，$E_\text{ac}$ 引起的波函数位移幅度有限。2017 年 Croot 等在 Si/SiGe 双量子点零失谐处实现"翻转模式 EDSR"——把电子放在隧穿耦合 $2t_c$ 远大于 $E_Z$ 的双量子点中，电荷本征态 $|+\rangle=(|L\rangle+|R\rangle)/\sqrt2$、$|-\rangle=(|L\rangle-|R\rangle)/\sqrt2$ 不再局域，电子在两点之间"翻转"，电偶极矩被隧穿耦合放大。

把自旋自由度一并纳入，基矢 $\{|L,\downarrow\rangle,|L,\uparrow\rangle,|R,\downarrow\rangle,|R,\uparrow\rangle\}$ 下胡睿梓论文给出

$$
H_\text{fm}=\frac{1}{2}
\begin{pmatrix}
-\varepsilon-E_{z1} & -2t_\text{SO} & 2t_c & 0\\
-2t_\text{SO} & -\varepsilon+E_{z1} & 0 & 2t_c\\
2t_c & 0 & \varepsilon-E_{z2} & 2t_\text{SO}\\
0 & 2t_\text{SO} & 2t_\text{SO} & \varepsilon+E_{z2}
\end{pmatrix},
$$

其中 $\varepsilon$ 是双量子点能级失谐、$2t_c$ 是隧穿耦合、$2t_\text{SO}=g\mu_B b_\perp$ 是微磁体横向梯度引入的等效 SOC、$\delta E_z=(E_{z1}-E_{z2})/2=g\mu_B b_z$ 是纵向梯度。把轨道部分对角化后，最低两个本征态 $|{-},\downarrow\rangle$、$|{-},\uparrow\rangle$ 之间的翻转速率为

$$
f_\text{spin}(\varepsilon)=\frac{4t_c\,t_\text{SO}\,f_\text{charge}\cos\theta}{|\Omega^2-E_z^2|},\qquad \Omega=\sqrt{\varepsilon^2+4t_c^2},\quad \tan\theta=\frac{\varepsilon}{2t_c},
$$

其中 $f_\text{charge}=e d E_\text{ac}/h$（$d$ 是点间距）是零失谐处电荷翻转的 Rabi 频率。零失谐时电偶极矩与等效 SOC 同时取极大，$f_\text{spin}$ 比大失谐处提高近一个量级；代价是纵向梯度 $\delta E_z$ 引入的 $\varepsilon\,\delta E_z/\Omega$ 项让比特频率随失谐漂移，把电荷噪声直接转成比特频率噪声。比特谐振频率

$$
E_s\simeq E_z-\frac{E_z^2-\varepsilon^2}{2E_z(\Omega^2-E_z^2)}(2t_\text{SO})^2-\frac{\varepsilon}{\Omega}\delta E_z
$$

定量给出了这一耦合：纵向梯度越大，谐振频率对失谐越敏感，$T_2^*$ 越短。翻转模式因此是典型的"以相干换速度"方案，对栅极电压噪声与微磁体几何的不均匀性都更敏感。

### 内禀 SOC 路线：锗空穴的 Luttinger–Kohn 描述

锗空穴体系的 EDSR 强度由价带顶的 Luttinger–Kohn 哈密顿量导出。强量子限域下重空穴（$J_z=\pm3/2$）与轻空穴（$J_z=\pm1/2$）的分裂 $\Delta_\text{hl}$ 远大于塞曼能，计算子空间取为 $\{|+3/2\rangle,|-3/2\rangle\}$。一旦结构反演不对称（Rashba 项）或体反演不对称（Dresselhaus 项）破坏反演对称性，会出现

$$
\mathcal H_\text{SOC}=\alpha(\boldsymbol\sigma\times\mathbf k)\cdot\mathbf E+\beta(k_x\sigma_x-k_y\sigma_y),
$$

对电场 $\mathbf E$ 的线性响应给出 EDSR 的有效驱动场。表征强度的关键量是自旋轨道长度 $l_\text{SO}=\hbar/[m^*\sqrt{\alpha^2+\beta^2}]$：Ge 纳米线空穴 $l_\text{SO}\sim40$–$100\,\text{nm}$，InAs 纳米线 $l_\text{SO}\sim100\,\text{nm}$，InSb 纳米线 $l_\text{SO}\sim200\,\text{nm}$，Si/SiGe 异质结电子 $l_\text{SO}\gtrsim 1\,\mu\text{m}$。越短的长度意味着同样电场产生越大有效磁场，Rabi 频率

$$
f_\text{Rabi}\propto \frac{e V_\text{AC}\,l_\text{dot}}{h\Delta}\sqrt{\alpha^2+\beta^2}
$$

直接随 $\sqrt{\alpha^2+\beta^2}$ 增长。

在双量子点 PSB 漏电流谱中，SOC 项 $H_\text{SO}=it_+|T_+\rangle\langle S_{20}|+it_-|T_-\rangle\langle S_{20}|+\text{h.c.}$ 把 $|T_\pm\rangle$ 与单态 $S(2,0)$ 杂化，在 $T_+$ 与 $S(2,0)$ 之间打开能量反交叉，其宽度 $2t_\text{SO}$ 即 SOC 强度。徐刚论文在锗纳米线双量子点上测得 $t_\text{SO}\sim38\pm4\,\mu\text{eV}$，并据此评估 $l_\text{SO}\sim40$–$100\,\text{nm}$，与其它一维体系对比凸显锗空穴的优势。

## 参数与量级

| 量 | 典型值 | 实验条件 | 来源 |
| --- | --- | --- | --- |
| Rabi 频率（硅电子，Si/SiGe，1 倍频） | 10–30 MHz | 微磁体梯度 EDSR | 综述 |
| Rabi 频率（硅电子，Si-MOS） | 0.04–2.5 MHz | 微磁体梯度 EDSR | 楚凝 2025 |
| Rabi 频率（硅电子，翻转模式，零失谐） | 1.262 MHz（提升 1 个量级） | $2t_c\sim800\,\text{GHz}$ 双量子点 | 胡睿梓 2022 |
| 横向磁场梯度 $b_\perp$ | $\sim0.02\,\text{mT}$ | 翻转模式拟合 | 胡睿梓 2022 |
| 横向梯度 $b_\perp$ | 0.2 mT/nm | 杨杰诚微磁体设计 | 杨杰诚 2023 |
| 纵向梯度 $b_z$ | 0.4 mT/nm / 0.98 mT/nm | 微磁体设计 | 杨杰诚 2023 |
| 寻址最低梯度要求 | $>0.58\,\text{mT/nm}$ | 双比特寻址 | 杨杰诚 2023 |
| 自旋比特 $T_2^*$（Si/SiGe，微磁体） | $\sim0.8\,\mu\text{s}$ | 自然硅 Si/SiGe 四量子点 | 王宁 2025 |
| 自旋比特 $T_2^*$（Si/SiGe，翻转模式） | 0.42 μs | 零失谐 | 胡睿梓 2022 |
| $T_2^\text{Rabi}$（Si，翻转模式） | 5.53–7.01 μs | 不同失谐 | 胡睿梓 2022 |
| $f_\text{Rabi}$（锗空穴，平面应变） | 11.61 MHz，最大 19 MHz | 增强型锁存读出 | 周雨晨 2026 |
| $T_2^\text{Rabi}$（锗空穴，平面应变） | 1.77 μs | $f_\text{Rabi}=11.61\,\text{MHz}$ | 周雨晨 2026 |
| 品质因子 $Q=2T_2^\text{Rabi}f_\text{Rabi}$ | 41.10 | 锗空穴 EDSR | 周雨晨 2026 |
| $f_\text{Rabi}$（锗空穴，纳米线） | $542\pm2$ MHz（@9 dBm），最快 $698\pm2$ MHz | 自旋阻塞读出 | 徐刚 2020 |
| $T_2^*$（锗空穴，纳米线） | $65\pm2$ ns | 240 mK 液氦制冷机 | 徐刚 2020 |
| $T_2^\text{Hahn}$（锗空穴，纳米线） | $523\pm41$ ns | 回波抑制超精细 | 徐刚 2020 |
| $g$ 因子（锗空穴，平面） | 0.29、0.39 | 双点各一 | 周雨晨 2026 |
| $g$ 因子（锗空穴，纳米线） | $g_L\sim3.9,\ g_R\sim3.7$ | 双点差 | 徐刚 2020 |
| 自旋轨道长度 $l_\text{SO}$（锗空穴纳米线） | 40–100 nm | — | 徐刚 2020 |
| 自旋轨道耦合强度 $t_\text{SO}$（锗空穴纳米线） | $38\pm4\,\mu\text{eV}$ | PSB 漏电流谱拟合 | 徐刚 2020 |
| 自旋比特 $T_1$（Si/SiGe，自然硅） | 94–116 ms | Si/SiGe 四量子点 | 王宁 2025 |
| 单比特门保真度 | 99.21–99.63%（RB） | 锗空穴 EDSR | 周雨晨 2026 |
| 翻转模式自旋–腔耦合 $g_s/2\pi$ | 13.8–21.8 MHz | Si/SiGe 三量子点 | 江顺利 2025 |
| 翻转模式自旋比特腔内 Rabi | 13.7、16.9 MHz | Si/SiGe 三量子点 | 江顺利 2025 |
| 翻转模式比特频率（腔耦合） | 7.3802–7.495 GHz | Si/SiGe | 江顺利 2025 |
| 微磁体磁化强度 $B_M$ | 95.7 mT（$\alpha=0.32$） | Co 微磁体，250 nm | 江顺利 2025 |

> [!note] 表中第二、三列为论文实测条件；许多指标随外磁场、温度、栅极工作点变化有较大分散，引用时应回到原始文献核对。

## 实验特征

**用 EDSR 峰定位比特频率。** 自旋共振峰的等效宽度通常只有 MHz 量级（对应约 0.036 mT），盲扫效率极低。改用频率随时间线性扫过的啁啾（chirp）脉冲 $B_\text{drive}'=B_1\cos[2\pi(f_\text{drive}+ct)t+\varphi]$：在旋转系中等价于让失谐缓慢扫过零点；当扫频速率 $\partial(\Delta f)/\partial t\ll f_\text{Rabi}^2$ 时发生[[qubit-control/landau-zener-transition|绝热 Landau–Zener 转移]]，自旋被确定性地翻转到激发态，信号峰高与带宽同时提升。胡睿梓论文在 Si-MOS 单点上用带宽 4 MHz、时长 0.1 ms 的啁啾脉冲将比特谐振峰快速框定在 19.79 GHz 附近，再用单频微波精标；周雨晨论文在锗空穴 EDSR 上把啁啾脉冲带宽 50 MHz、时长 50 μs 用于双比特频率搜索；王宁论文对 Si/SiGe 自旋比特施加 50 MHz 带宽、20 μs 时长的 chirp 直接看到 EDSR 峰，再换小功率单频精细标定到 Q1、Q2 频率 19.2771 GHz 和 19.2354 GHz。

**V 形 Rabi 条纹与品质因子。** 在 EDSR 峰中心把微波频率固定，扫描脉冲长度 $t_\text{burst}$ 即可得到阻尼振荡 $P(t)=A e^{-t/T_2^\text{Rabi}}\sin(2\pi f_\text{Rabi}t)+P_0$，从中拟合 $f_\text{Rabi}$ 与 $T_2^\text{Rabi}$。再把驱动频率 $f_\text{drive}$ 与脉冲长度同时扫描得到 V 形（chevron）图样——失谐 $\Delta f$ 下振荡频率变为 $\sqrt{f_\text{Rabi}^2+(\Delta f)^2}$，振幅随 $|\Delta f|$ 衰减。常用品质因子 $Q=2T_2^\text{Rabi}f_\text{Rabi}=T_2^\text{Rabi}/t_\pi$ 衡量相干时间内可执行的 $\pi$ 操作数。王宁论文在自然硅 Si/SiGe 上用 Rabi 振荡品质因子权衡相干时间与操控速度，从而确定最佳微波驱动功率；周雨晨论文给出锗空穴平面器件 $Q=41.1$（$f_\text{Rabi}=11.61\,\text{MHz}$，$T_2^\text{Rabi}=1.77\,\mu\text{s}$），并基于 $Q$ 用经验公式 $F=\tfrac12(1+e^{-Q/2})$ 粗估单比特门保真度。

**双轴操控与虚拟 $z$ 门。** EDSR 共振峰中心通过调节驱动相位 $\varphi$ 实现绕 $x$ 或 $y$ 的旋转，离共振点则因 $\arctan(\Delta f/f_\text{Rabi})$ 的倾角旋转轴倾斜，旋转角频率变 $\sqrt{f_\text{Rabi}^2+(\Delta f)^2}$。这与[[qubit-control/ramsey-interferometry|Ramsey 干涉]]结合，即可在不施加额外脉冲的条件下用相位累积实现"虚拟 $z$ 门"，配合绕 $x$ 或 $y$ 的物理脉冲组成普适单比特门集。王宁论文通过 Ramsey 干涉在双比特阵列上验证了相对相位 $\Delta\varphi$ 的 $2\pi$ 周期间接切换旋转轴的能力。

**EDSR 与腔耦合。** 在片上把自旋比特与超导微波腔耦合时，EDSR 谱线随驱动功率移动给出[[qubit-control/charge-qubit|AC Stark 频移]] $\Delta f_q=(2n_\text{ph}g_s^2/\Delta)/(2\pi)$（$n_\text{ph}$ 为腔内平均光子数，$\Delta=f_q-f_r$ 为失谐）。江顺利论文在三量子点 Si/SiGe 体系中用 EDSR 谱线随 SHFQC 输出功率的变化反推腔内光子数：实验所用 $-30\,\text{dBm}$ 对应约 0.4 个腔内光子；同时三量子点中两条翻转模式比特（R/LDQD）的 Rabi 频率与相干时间分别为 $f_\text{Rabi}^\text{R}/2\pi=16.9\,\text{MHz}$、$T_2^\text{Rabi}=152\,\text{ns}$（RDQD）与 $f_\text{Rabi}^\text{L}/2\pi=13.7\,\text{MHz}$、$T_2^\text{Rabi}=304\,\text{ns}$（LDQD），自旋–光子耦合 $g_s/2\pi$ 在 13.8–21.8 MHz 之间。这一组数把 EDSR 从"自旋比特驱动手段"扩展为"自旋–腔杂化系统的频率标定工具"。

**纵向梯度对寻址的支持。** EDSR 中的纵向磁场梯度 $b_z=\partial B_z/\partial x$ 并不直接驱动 Rabi 振荡，但能让两个量子点的塞曼能 $E_{z,i}=g\mu_B(B_\text{ext}+b_z x_i)$ 错开 $\Delta E_z=g\mu_B b_z\,\Delta x$，使得阵列中相邻比特以不同频率共振。杨杰诚论文给出双比特寻址所需的最小纵向梯度约为 $0.58\,\text{mT/nm}$。当同一微磁体同时提供横向梯度 $b_\perp$ 用于驱动与纵向梯度 $b_z$ 用于寻址时，二者的几何耦合无法独立调谐——这是[[materials-devices/micromagnet|微磁体优化]]研究反复权衡的核心。

**电荷噪声经 EDSR 通道的耦合。** EDSR 的副产物是把同一 SOC 通道反向开给电荷噪声：栅极电压或邻位电荷的涨落 $\delta V(t)$ 经 $b_\perp$ 耦合为附加磁场涨落 $\delta B_\text{eff}=b_\perp\,\delta r/V_\text{gate}$，表现为比特频率的 $1/f$ 噪声。翻转模式尤其严重，因为纵向梯度 $b_z$ 也会把失谐变化 $\delta\varepsilon$ 注入 $E_s$。论文常用 CPMG 或动力学解耦把 $T_2^*$ 从几百 ns 延长到几 μs，但 EDSR 的根本对策仍指向减小 $b_z$、减小电荷噪声或寻找[[qubit-control/geometric-quantum-gate|几何门]]等对噪声不敏感的操控方案。

## 工程挑战与权衡

EDSR 把"驱动"与"电荷敏感性"绑在了同一条耦合通道上，工程权衡表现在三处。

**微磁体几何优化。** 增大 $b_\perp$ 直接提高 $f_\text{Rabi}$，但同器件的 $b_z$ 也常被放大；杨杰诚论文以可迭代变形方法针对目标区域优化磁体几何，并提出微磁体与栅极同层以缩短垂直距离。Liu-zheng 论文指出，无论如何优化，传统微磁体方案仍存在不可关闭的静态杂散场，因此提出基于[[scaling-automation/spin-orbit-torque-control|自旋轨道力矩]]的开关磁体作为进一步演化方向。

**翻转模式的速度–相干折中。** 翻转模式把单点电偶极矩放大到 $e d E_\text{ac}$，但 $T_2^*$ 几乎不变（胡睿梓论文中 6.46 μs、5.53 μs、7.01 μs 几乎相同），$T_2^*$ 主导的低频噪声源被识别为微磁体的纵向梯度 $b_z$。所以品质因子 $Q$ 的提升主要来自 $f_\text{Rabi}$ 增大一个数量级——速度而非相干时间。

**锗空穴中的栅压可调 SOC 与各向异性。** 锗空穴 SOC 强但同时把栅极电场与 $g$ 因子、SOC 强度都耦合在一起；周雨晨论文观察到随失谐变化时比特频率与驱动效率同时漂移，因此把磁场方向作为额外自由旋钮——通过让外磁场偏离高对称方向，可同时优化 $g$ 因子的电场敏感度与品质因子。Wang-ning 论文同样强调磁场方向会影响 EDSR 各向异性，楚凝论文在 Si-MOS 上报告面内磁场方向旋转后 $T_2^*$ 与 $f_\text{Rabi}$ 同步变化，并据此锁定最优工作点。

**微波串扰与频率拥挤。** 阵列中每个比特都通过同一片上天线或栅极接收微波，物理上不可避免地引入驱动场串扰；翻转模式在大失谐点处 $f_\text{spin}$ 衰减但仍有非零背景，加剧了"关不掉"的泄漏。一种典型缓解是结合[[scaling-automation/virtual-gates|虚拟门]]与[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]对每个栅极加线性补偿，使 EDSR 脉冲期间邻近比特电荷态保持不变。

## 与其他概念的关系

- [[qubit-control/single-spin-qubit|单自旋量子比特]]：EDSR 是单自旋比特在 ESR 天线之外的"全电驱动"选项；ESR 与 EDSR 的差异仅在于 $B_1$ 的来源——天线电流还是合成/本征 SOC 转换出的等效磁场。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]：锗空穴把 EDSR 推到本征 SOC 极致，Rabi 频率可比电子体系高两个量级；同时把电荷噪声直接注入自旋通道，$T_2^*$ 较短——磁场方向优化与[[qubit-control/geometric-quantum-gate|几何门]]是为缓解此问题。
- [[qubit-control/charge-qubit|电荷比特]]：EDSR 是电荷比特线性驱动的延伸——电荷比特本身即由 $\varepsilon$ 直接驱动，不需要等效磁场；EDSR 把同一电场经 SOC 转换为自旋驱动，因此[[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]与 EDSR 共用同一驱动源。
- [[scaling-automation/flopping-mode-qubit|翻转模式单自旋比特]]：EDSR 的高电偶极矩版本，把双量子点 $\varepsilon\approx0$ 处的隧穿耦合放大为有效驱动场；零失谐处的 Rabi 频率提升一个量级而 $T_2^*$ 基本不变。
- [[materials-devices/micromagnet|微磁体]]：硅电子 EDSR 的物理载体——同一磁体同时提供驱动所需的 $b_\perp$ 与寻址所需的 $b_z$，优化微磁体几何即优化 EDSR 与寻址性能。
- [[qubit-control/geometric-quantum-gate|几何量子门]]：用周期性驱动的累积相位规避对 $f_\text{Rabi}$ 稳定性的要求，在 $b_\perp$ 偏小或 $T_2^*$ 偏短的体系上把单比特门保真度推到 99% 以上。
- [[qubit-control/rabi-oscillation|Rabi 振荡]]、[[qubit-control/ramsey-interferometry|Ramsey 干涉]]、[[qubit-control/landau-zener-transition|Landau–Zener 跃迁]]、[[qubit-control/dynamical-decoupling|动力学解耦]]：EDSR 在时间域呈现为这些通用操控协议的物理实现——哈密顿量相同，只是 $B_1$ 的来源不同。
- [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]：EDSR 提供的合成/本征 SOC 也是把自旋比特与微波腔耦合的同一通道；江顺利论文在三量子点翻转模式自旋比特与高阻抗谐振腔之间达到 $g_s/2\pi\sim21.8\,\text{MHz}$ 的强耦合。
- [[readout-measurement/single-shot-readout|单发读出]]与[[readout-measurement/rf-reflectometry|射频反射测量]]：EDSR 驱动的自旋态通常经自旋–电荷转换读出；翻转模式 EDSR 的读出额外要求测量波形满足绝热条件，避免电子穿越能级反交叉导致激发态泄漏（胡睿梓论文第 5 章）。
- [[materials-devices/charge-noise|电荷噪声]]：EDSR 通道也是电荷噪声注入自旋频率的通道；翻转模式中 $b_z$ 的存在使失谐电荷涨落直接表现为比特频率 $1/f$ 噪声，是 Si/SiGe 体系 $T_2^*\lesssim1\,\mu\text{s}$ 的主要限制之一。
- [[scaling-automation/spin-orbit-torque-control|SOT 操控]]与[[scaling-automation/cross-capacitance-matrix|交叉电容矩阵]]：分别是对静态微磁体与多比特栅极串扰两条工程优化方向。

## 延伸阅读

- K. C. Nowack, F. H. L. Koppens, Yu. V. Nazarov, L. M. K. Vandersypen, "Coherent Control of a Single Electron Spin with Electric Fields", *Science* (2007). [DOI: 10.1126/science.1148092]
- F. H. L. Koppens, C. Buizert, K. J. Tielrooij, I. T. Vink, K. C. Nowack, T. Meunier, L. P. Kouwenhoven, L. M. K. Vandersypen, "Driven coherent oscillations of a single electron spin in a quantum dot", *Nature* (2006). [DOI: 10.1038/nature05065]
- M. Pioro-Ladrière, T. Obata, Y. Tokura, Y.-S. Shin, T. Kubo, K. Yoshida, T. Taniyama, S. Tarucha, "Electrically driven single-electron spin resonance in a slanting Zeeman field", *Nature Physics* (2008). [DOI: 10.1038/nphys1053]
- V. N. Golovach, M. Borhani, D. Loss, "Electric-dipole-induced spin resonance in quantum dots", *Physical Review B* (2006). [DOI: 10.1103/PhysRevB.74.165319]
- S. Nadj-Perge, S. M. Frolov, E. P. A. M. Bakkers, L. P. Kouwenhoven, "Spin–orbit qubit in a semiconductor nanowire", *Nature* (2010). [DOI: 10.1038/nature09682]
- R. Hanson, L. P. Kouwenhoven, J. R. Petta, S. Tarucha, L. M. K. Vandersypen, "Spins in few-electron quantum dots", *Reviews of Modern Physics* (2007). [DOI: 10.1103/RevModPhys.79.1217]

## 论文依据

- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 34–36：ESR 与 EDSR 的对照（$B_\text{eff}$ 等效概念、微波电场推动电子在梯度磁场中振荡、典型 Rabi 速率 10–30 MHz）以及"翻转模式"电偶极自旋共振的引入背景。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 85–87、p. 92：翻转模式单自旋比特的四态哈密顿量（式 5.3–5.6）、零失谐处 $f_\text{spin}(0)=4t_c t_\text{SO} f_\text{charge}/|4t_c^2-E_Z^2|$ 与一般失谐下的 $f_\text{spin}$（式 5.7、5.9）、谐振频率 $E_s$ 公式（式 5.10）、翻转模式在 Si/SiGe 与 Si-MOS 上的实现。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 88–90：翻转模式比特谐振频率随双量子点失谐变化的双量子点点间耦合 $2t_c\sim705$–$914\,\text{GHz}$ 与 $2t_c\sim71\,\text{GHz}$ 两组拟合、横向磁场差 $b_\perp\sim0.02\,\text{mT}$；pp. 90–92：零失谐处 $f_\text{Rabi}=1.2620\pm0.002\,\text{MHz}$（提升一个量级）、$T_2^\text{Rabi}=6.46\,\mu\text{s}$、$T_2^*=0.42\,\mu\text{s}$、$Q$ 提升一个量级。
- [[sources/hu-ruizi-2022|胡睿梓 2022]]，PDF pp. 95–96：摘要中的翻转模式 EDSR 与"双量子点对称点"实现思路。
- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF p. 4：EDSR 与自旋–光子耦合所需的磁场梯度研究、微磁体优化与同层栅极方案。
- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF pp. 21–24：Rashba/Dresselhaus 自旋轨道耦合哈密顿量、微磁体 Rabi 频率与梯度关系式；pp. 30–31：比特寻址所需纵向梯度大于 $0.58\,\text{mT/nm}$。
- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF p. 35：翻转模式（flopping-mode）EDSR 的提出与"传统 EDSR 中电子被局限在势垒内、电偶极矩较小"的物理图景。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 40–41：锗空穴 EDSR 的物理图像——电场 $E(t)$ 推动波函数振荡、自旋轨道耦合转换为等效磁场 $B_\text{eff}$、自旋轨道长度 $l_\text{SO}=\hbar/[m^*(\alpha+\beta)]$；电场–自旋耦合的完整推导。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF p. 52：EDSR 路线图（ESR vs EDSR，依赖微波天线还是栅极交流电场）。
- [[sources/zhou-yuchen-2026|周雨晨 2026]]，PDF pp. 113–117：锗空穴 EDSR 实验——啁啾脉冲快速搜索拉莫尔频率、双比特 $f_1=5.60\,\text{GHz}$ 与 $f_2=7.53\,\text{GHz}$（$B_0=1333\,\text{mT}$）、$g_1=0.29$ 与 $g_2=0.39$；Rabi 振荡 $f_\text{Rabi}=11.61\,\text{MHz}$、$T_2^\text{Rabi}=1.77\,\mu\text{s}$、$Q=41.10$；最大 $f_\text{Rabi}=19\,\text{MHz}$；$T_2^*=136\,\text{ns}$、$T_2^\text{Echo}=401\,\text{ns}$、$T_2^\text{CPMG}=6.75\,\mu\text{s}$（$N_\pi=230$）；RB 门保真度 99.21–99.63%。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 33：基于微磁体的 EDSR 操控示意图——微波电场驱动电子在横向梯度磁场中振荡产生等效交变磁场；pp. 34–35：自旋轨道耦合来源（微磁体磁场梯度或材料本征 SOC）、EDSR 与 ESR 的对比、硅体系典型 Rabi 频率 30 MHz 与单比特门保真度超过 99.9%；式 1.16 给出 EDSR 等效磁场 $B_\text{eff}=(eE_\text{ac}^2 l_\text{orb}|b_\text{sl}|)/\Delta_\text{orb}^2\propto eE_\text{ac}|b_\text{sl}|/\Delta_\text{orb}^2$。
- [[sources/wang-ning-2025|王宁 2025]]，PDF p. 55：基于微磁体的 EDSR 操控实验中自然硅退相干时间普遍约 1 μs；pp. 60–62：Si/SiGe 一维四量子点中 EDSR 寻找 Q1/Q2 共振频率（19.2771 GHz / 19.2354 GHz）、Ramsey 测 $T_2^*=0.9\,\mu\text{s}$（Q1）/ $0.7\,\mu\text{s}$（Q2）。
- [[sources/chu-ning-2025|楚凝 2025]]，PDF p. 33：硅基半导体量子计算按驱动方式的分类（ESR / 微磁体 EDSR / 本征 SOC 全电操控）；pp. 17–18：Si-MOS 上微磁体 EDSR 与永磁体全局控制的发展现状。
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 4–5：微磁体的两类梯度（横向 $b_\perp$ 用于 EDSR 驱动、纵向 $b_z$ 用于比特寻址）；pp. 12–14：ESR 与 EDSR 对照与 Flopping-mode EDSR 方案的提出。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 16–17：一维 Rashba 自旋轨道耦合 $H_\text{SO}=\alpha_R\kappa_y\sigma_x$ 下的 EDSR 推导——电场调制 $\kappa_y(t)$、总哈密顿量 $H=H_Z+H_\text{SO}$ 在 $B_z$ 下的矩阵形式。
- [[sources/xu-gang-2020|徐刚 2020]]，PDF pp. 59–66：锗纳米线空穴 EDSR 谱线测量、$g$ 因子提取（$g_L\sim3.9$、$g_R\sim3.7$）、自旋轨道长度 $l_\text{SO}\sim40$–$100\,\text{nm}$、PSB 漏电流谱提取 $t_\text{SO}\sim38\pm4\,\mu\text{eV}$；Rabi 振荡最快 $f_R\sim698\pm2\,\text{MHz}$（@9 dBm 为 $542\pm2\,\text{MHz}$）；$T_2^*\sim65\pm2\,\text{ns}$、$T_2^\text{Hahn}\sim523\pm41\,\text{ns}$。
- [[sources/jiang-shunli-2025|江顺利 2025]]，PDF pp. 69–70：硅基 EDSR 通过微磁体梯度磁场与自旋轨道耦合把自旋–电荷杂化；pp. 86–87：谐振腔的 EDSR 谱线随驱动功率移动（AC Stark 频移）给出腔内光子数（实验用 $-30\,\text{dBm}$ 对应约 0.4 个光子）；pp. 85、87：翻转模式比特与谐振腔的耦合（$g_s/2\pi=13.8$–$21.8\,\text{MHz}$、$f_\text{Rabi}/2\pi=13.7$–$16.9\,\text{MHz}$、$T_2^\text{Rabi}=152$–$304\,\text{ns}$、$T_2^*=89\,\text{ns}$）；p. 48：Co 微磁体几何与 $B_M=95.7\,\text{mT}$ 的实测值。
