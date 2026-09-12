---
title: 单自旋量子比特
description: 以单个受限电子或空穴的两个 Zeeman 自旋态编码的量子比特。
aliases:
 - 自旋量子比特
 - 单电子自旋比特
 - Loss-DiVincenzo 量子比特
 - LD 比特
tags:
 - 量子比特操控
 - 自旋
date: 2026-09-08
---

<div class="entry-lead">单自旋量子比特用一个载流子的自旋向上、向下态编码 0 和 1。它不直接改变电荷分布，天然比电荷编码更抗低频电噪声，但操控与读出需要额外的自旋–电荷接口。</div>

## 物理图像与编码

把单个电子（或空穴）囚禁在[[fundamentals/semiconductor-quantum-dot|半导体量子点]]中，施加外磁场 $B$ 后，两个自旋态发生塞曼劈裂（Zeeman splitting）：

$$
E_Z=g\mu_B B
$$

其中 $g$ 是朗德（Landé）$g$ 因子，$\mu_B$ 是玻尔磁子。硅量子点中 $g\approx 2$，对应旋磁比 $\gamma\approx 28\,$GHz/T，即每 1 T 外磁场对应约 28 GHz 的谐振频率。取 $|\downarrow\rangle$ 为 $|0\rangle$、$|\uparrow\rangle$ 为 $|1\rangle$，自旋态就是布洛赫球上的一点 $|\psi\rangle=\cos(\theta/2)|0\rangle+e^{i\phi}\sin(\theta/2)|1\rangle$。由于单电子有且仅有两个自旋态，不存在向计算子空间之外泄漏的通道，是一个"理想"的二能级系统——这正是 Loss 与 DiVincenzo 1998 年提出以量子点电子自旋编码量子比特（常称 Loss–DiVincenzo 比特或 LD 比特）的出发点。

这一编码的代价在于自旋与环境耦合很弱：磁场中静止的自旋既难以快速翻转，也难以直接读取。因此单自旋比特的全部工程问题都集中在两个"接口"上——用交流场（ESR/EDSR）翻转自旋，以及用自旋–电荷转换读出自旋。

<!-- FIGURE: 磁场中量子点单电子的塞曼劈裂能级图，标注 E_Z = gμB B、拉莫尔频率 f0，旁边配布洛赫球上 |↓⟩、|↑⟩ 与叠加态的位置 -->

## 理论模型

### 自由哈密顿量与拉莫尔进动

量子比特的静态哈密顿量为 $H_0=-\hbar\omega_0 S_z$，拉莫尔进动角频率 $\omega_0=g\mu_B B/\hbar$，对应圆频率

$$
f_0=\frac{\omega_0}{2\pi}=\frac{g\mu_B B}{h}=\gamma B .
$$

任意叠加态在 $H_0$ 下绕布洛赫球 $z$ 轴以 $f_0$ 自由进动；噪声对 $f_0$ 的调制（如核自旋超精细场、经磁场梯度耦合进来的[[materials-devices/charge-noise|电荷噪声]]）即表现为相位退相干。

### 共振驱动：ESR 与旋波近似

单比特门通过施加垂直于外磁场的驱动场实现。在电子自旋共振（electron spin resonance，ESR）方案中，实验室坐标系下的哈密顿量为

$$
H_{\mathrm{lab}}=-\hbar\omega_0 S_z+2h\gamma B_1 S_x\cos(\omega_{\mathrm{drive}}t+\phi)
$$

其中 $B_1$ 为驱动磁场幅值，$\phi$ 为其相位，$S_i=\sigma_i$ 取泡利矩阵（论文的约定）。把线性振荡场分解为两个反向旋转的分量：与拉莫尔进动同向的分量在旋转坐标系 $R(t)=\exp(-i\omega S_z t/\hbar)$ 中近似为常数，反向分量以 $2\omega_0$ 快速振荡，在旋转波近似（rotating wave approximation，RWA）下舍去，得到旋转系中的有效哈密顿量

$$
H_{\mathrm{rot}}=\hbar(\omega_{\mathrm{drive}}-\omega_0)S_z+h\gamma B_1\left(S_x\cos\phi-S_y\sin\phi\right).
$$

共振（$\omega_{\mathrm{drive}}=\omega_0$）时态矢量绕由 $\phi$ 选定的赤道轴以[[qubit-control/rabi-oscillation|Rabi 频率]]

$$
f_{\mathrm{rabi}}=\gamma B_1
$$

进动：幅值决定旋转速度，相位决定旋转轴。改变后续脉冲的相位即可实现绕 $z$ 轴的旋转，即"虚拟 $z$ 门"（virtual Z-gate），不需要真实施加 $z$ 方向脉冲。失谐 $\Delta f$ 非零时，旋转轴偏离赤道平面、倾角为 $\arctan(\Delta f/f_{\mathrm{rabi}})$，有效振荡频率变为 $\sqrt{f_{\mathrm{rabi}}^2+(\Delta f)^2}$——实验上扫描失谐与脉冲时长得到的 V 形（chevron）条纹即由此而来，也是标定共振频率的标准手段。

### 电偶极自旋共振（EDSR）与翻转模式

直接驱动磁场需要片上天线，电流加热限制了操控速率（通常小于 1 MHz）。[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）改为用栅极上的微波电场晃动电子，借助空间梯度磁场（[[materials-devices/micromagnet|微磁体]]提供）或材料内禀自旋轨道耦合，把电荷的振荡转换成自旋感受到的等效振荡磁场，操控速率正比于梯度，典型可达 10–30 MHz。横向梯度 $\delta B_x$ 用于驱动，纵向梯度 $\delta B_z$ 则把不同量子点的 $f_0$ 错开以实现寻址。

把电子放进失谐为 $\varepsilon$、隧穿耦合为 $2t_c$ 的[[fundamentals/double-quantum-dot|双量子点]]中，可进一步放大电偶极矩，即"翻转模式"（flopping-mode）单自旋比特。在基矢 $(|L,\downarrow\rangle,|L,\uparrow\rangle,|R,\downarrow\rangle,|R,\uparrow\rangle)$ 下，论文给出的哈密顿量为

$$
H_{\mathrm{fm}}=\frac{1}{2}
\begin{pmatrix}
-\varepsilon-E_{z1} & -2t_{\mathrm{SO}} & 2t_c & 0\\
-2t_{\mathrm{SO}} & -\varepsilon+E_{z1} & 0 & 2t_c\\
2t_c & 0 & \varepsilon-E_{z2} & 2t_{\mathrm{SO}}\\
0 & 2t_c & 2t_{\mathrm{SO}} & \varepsilon+E_{z2}
\end{pmatrix}
$$

其中 $2t_{\mathrm{SO}}=g\mu_B b_\perp$ 是微磁体横向梯度引入的等效自旋轨道耦合，$\delta E_z=(E_{z1}-E_{z2})/2=g\mu_B b_z$ 是两点塞曼能差。大失谐时电子局域在单点内，电偶极矩小；零失谐时电荷本征态为 $(|L\rangle\pm|R\rangle)/\sqrt{2}$，电子在两"点间来回翻转"，电偶极矩最大。对轨道自由度对角化后可得零失谐处的自旋翻转速率

$$
f_{\mathrm{spin}}(0)=\frac{4t_c\,t_{\mathrm{SO}}\,f_{\mathrm{charge}}}{|4t_c^2-E_z^2|},\qquad h f_{\mathrm{charge}}=e\,d\,E_{\mathrm{ac}}
$$

$d$ 为点间距、$E_{\mathrm{ac}}$ 为驱动电场强度；失谐增大时电偶极矩与等效自旋轨道耦合同时减弱，$f_{\mathrm{spin}}$ 下降。纵向梯度 $\delta E_z$ 还会使比特频率随失谐漂移，$E_s\simeq E_z-\dfrac{E_z^2-\varepsilon^2}{2E_z(\Omega^2-E_z^2)}(2t_{\mathrm{SO}})^2-\dfrac{\varepsilon}{\Omega}\delta E_z$（$\Omega=\sqrt{\varepsilon^2+4t_c^2}$），这把电荷噪声直接耦合进比特频率——翻转模式用相干时间换取了速度，论文中零失谐处的 Rabi 频率比大失谐处提高了一个数量级。

## 初始化与读出

自旋态无法被电荷传感器直接分辨，读出必须先做自旋–电荷转换（spin-to-charge conversion），主流有两条路线。

**能量选择隧穿（Elzerman 读出）**：调节栅压使库费米面恰好落在 $|\uparrow\rangle$ 与 $|\downarrow\rangle$ 两个能级之间（读出窗口），激发态电子可以隧穿出量子点、随后一个自旋向下电子隧穿进来，在邻近单电子晶体管（SET）上留下一个"脉冲"信号；基态电子则无动作。配合排空–等待–读出（E–W–R）三段脉冲，一次测量即给出一个自旋投影结果，是[[readout-measurement/single-shot-readout|单发读出]]的标准实现。读出结束时电子必然落在 $|\downarrow\rangle$，因而读出同时完成了初始化。其主要误差源是费米面热展宽，要求 $E_Z/k_BT_e$ 足够大。

**[[fundamentals/coulomb-blockade|泡利自旋阻塞]]读出**：在双量子点 $(1,1)$–$(0,2)$ 反交叉附近，单态可以进入 $S(0,2)$ 而三重态被泡利不相容原理阻塞在 $(1,1)$，两种自旋构型映射为两种电荷构型。由于区分依据是 $(0,2)$ 单态–三重态能级差（轨道能级量级，远大于塞曼能），读出窗口大得多，可在约 1 K 的较高温度下工作——但硅中的谷能级可能压缩这一窗口。该路线也是[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]的读出基础。

读出质量的定量条件由隧穿速率给出：论文中实现 $>99\%$ 电荷–自旋转换可见度要求 $E_Z/T_e>13$、$T_1\cdot\Gamma_\uparrow^{\mathrm{out}}>100$、$\Gamma_s/\Gamma_\downarrow^{\mathrm{in}}>12$（$\Gamma_s$ 为采样率）；实验样品在 $B=1.5\,$T、$T_e\approx180\,$mK 下测得 $\Gamma_\uparrow^{\mathrm{out}}=6.0\,$kHz、$\Gamma_\downarrow^{\mathrm{out}}=27\,$Hz、$1/T_1=112\pm6\,$s$^{-1}$，限制因素为 $E_Z/T_e\approx11.2<13$。在此基础上发展出的[[readout-measurement/threshold-independent-readout|阈值无关单发读出]]利用多次测量概率间的关联，放宽了对电压阈值与时间窗口的要求。

## 参数与量级

| 参数 | 典型量级 | 说明 |
| --- | --- | --- |
| $g$ 因子（硅） | $\approx 2$ | 旋磁比 $\gamma\approx28\,$GHz/T |
| 塞曼劈裂 $E_Z/h$ | 每特斯拉约 $28\,$GHz | 论文实测 $f_0=19.787\,$GHz（$B\approx0.7\,$T） |
| 量子点充电能 | 约 $20\,$meV（电极尺度约 20 nm） | 要求 $k_BT\ll E_C$，液氦温度已满足 |
| 硅谷能级劈裂 $E_{\mathrm{VS}}$ | 数十到数百 $\mu$eV；论文样品 $170\,\mu$eV | 与 1 T 的塞曼能接近，需磁输运标定 |
| 电子温度 $T_e$ | $100$–$250\,$mK | 能量选择读出要求 $E_Z/T_e>13$ |
| 自旋弛豫 $T_1$ | ms 到 s 级（论文样品 $1/T_1\approx112\,$s$^{-1}$） | 主要来自自旋–声子耦合；远长于 $T_2^*$ |
| Rabi 频率（ESR 天线） | $<1\,$MHz | 受天线加热限制 |
| Rabi 频率（EDSR） | $1$–$30\,$MHz | 论文实测 1.256 MHz（单点）、锗空穴 11.61 MHz |
| $T_2^{\mathrm{rabi}}$ | 数 $\mu$s | 硅 5.4 μs、锗空穴 1.77 μs（论文实测） |
| $T_2^*$ | GaAs 约 10 ns；纯化硅可达数十 $\mu$s | 超精细噪声为主，回波/CPMG 可延长 |
| 单比特门保真度 | $>99\%$ | 锗空穴 RB：99.2–99.6%；Si-MOS 平均 99.5% |

## 实验特征

**谷能级标定**：硅导带六重简并在界面处劈裂，剩余二重简并再被界面电势劈裂出谷能级劈裂 $E_{\mathrm{VS}}$。磁输运测量中，第二个电子的隧穿线随磁场先升后降，拐点处 $g\mu_B B_{\mathrm{kink}}=E_{\mathrm{VS}}$——论文由此定出 $E_{\mathrm{VS}}=170\,\mu$eV。当 $E_Z$ 与 $E_{\mathrm{VS}}$ 接近时自旋–谷混合会使 $T_1$ 骤降，是硅自旋比特特有的失效通道。

**快速绝热通道寻峰**：谐振峰等效宽度往往只有 MHz 量级（对应约 0.036 mT），盲目扫频效率极低。改用频率随时间线性增加的啁啾脉冲 $B_{\mathrm{drive}}'=B_1\cos\big[2\pi(f_{\mathrm{drive}}+ct)t+\phi\big]$，在旋转系中等价于让失谐缓慢扫过零点；当扫频速率满足 $\frac{\partial(\Delta f)}{\partial t}\ll f_{\mathrm{rabi}}^2$ 时发生[[qubit-control/landau-zener-transition|绝热 Landau–Zener 转移]]，自旋被确定性地翻转到激发态，峰高与带宽同时提升，可先把共振位置框定在数 MHz 内再用单频微波精标。

**Rabi 振荡与品质因子**：共振处改变脉冲时长 $t_{\mathrm{wait}}$，自旋向上概率呈阻尼正弦 $P(t)=A\,e^{-t/T_2^{\mathrm{rabi}}}\sin(2\pi f_{\mathrm{rabi}}t)$；扫失谐则给出前述 V 形条纹。常用品质因子 $Q=2T_2^{\mathrm{rabi}}f_{\mathrm{rabi}}=T_2^{\mathrm{rabi}}/t_\pi$ 衡量相干时间内可完成的 $\pi$ 操作数（锗空穴论文实测 $Q\approx41$），并可粗略估计保真度 $F=\frac{1}{2}\big(1+e^{-Q/2}\big)$；严格表征则用随机基准测试（RB）与门集层析（GST）。

**相干时间谱系**：[[qubit-control/ramsey-interferometry|Ramsey 序列]]给出 $T_2^*$，Hahn 回波抑制准静态噪声给出 $T_2^{\mathrm{echo}}$，多脉冲 [[qubit-control/dynamical-decoupling|CPMG 动力学解耦]]进一步滤除低频噪声。论文的锗空穴比特上三者分别为 136 ns、401 ns 与 6.75 μs（$N_\pi=230$，约为 $T_2^*$ 的 50 倍），且 $T_2^{\mathrm{CPMG}}$ 随 $N_\pi$ 线性增长，指示低频噪声主导。

## 材料体系差异

- **硅（[[materials-devices/silicon-sige|Si/SiGe]] 与 [[materials-devices/silicon-mos|Si-MOS]]）**：自旋轨道耦合弱、可同位素纯化 $^{28}$Si 消除核自旋噪声，$T_2^*$ 比 GaAs 长约三个数量级，是长相干路线的首选；代价是 EDSR 必须依赖微磁体。Si-MOS 中单比特平均保真度已达 99.5%，射频读取保真度达 99.86%（论文）。
- **锗空穴（[[materials-devices/strained-germanium|应变锗]]）**：重空穴有效 $g$ 因子强各向异性且自旋轨道耦合强，无需微磁体即可全电驱动，Rabi 频率轻松超过 10 MHz；代价是同样的耦合把电荷噪声引入自旋通道，$T_2^*$ 较短。详见[[qubit-control/hole-spin-qubit|空穴自旋量子比特]]。
- **GaAs（[[materials-devices/gaas-algaas|GaAs/AlGaAs]]）**：器件成熟、自旋阻塞读出窗口大，但约 $10^6$ 个核自旋的超精细噪声把 $T_2^*$ 压到约 10 ns，历史上更多用于确立自旋阻塞、交换振荡等基础物理（、论文）。

## 与其他概念的关系

单自旋编码是半导体自旋比特家族的"单电子"基准：用两个电子的 $(1,1)$ 电荷区则得到[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]（以[[qubit-control/exchange-interaction|交换相互作用]]为 $z$ 轴），三个电子给出[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]与[[qubit-control/hybrid-qubit|杂化量子比特]]。两个相邻单自旋比特之间最直接的两比特门同样来自交换哈密顿量 $H=hJ\left(\mathbf{S}_1\cdot\mathbf{S}_2-\tfrac14\right)+hf_1S_{z1}+hf_2S_{z2}$：当 $J$ 远小于两点拉莫尔频率差 $|f_1-f_2|$ 时等效为受控相位（CZ 类），$J$ 较大时则趋于 $\sqrt{\mathrm{SWAP}}$ 类。操控接口方面，本词条与[[qubit-control/electric-dipole-spin-resonance|EDSR]]、[[materials-devices/micromagnet|微磁体]]互为支撑；读出侧依赖[[readout-measurement/single-shot-readout|单发读出]]与[[readout-measurement/rf-reflectometry|射频反射测量]]；退相干机制（超精细噪声与经磁场梯度进入的[[materials-devices/charge-noise|电荷噪声]]）则由[[qubit-control/dynamical-decoupling|动力学解耦]]专门处理。翻转模式所放大的自旋–电荷杂化，同时也是自旋–光子耦合（通往腔量子电动力学词条）的微观来源。


## 参考文献

- 首次单自旋相干驱动与自旋读出：[[references/koppens-2006|Koppens et al., Nature 442, 766 (2006)]]、[[references/elzerman-2004|Elzerman et al., Nature 430, 431 (2004)]]。
- 硅与锗中单自旋比特的现代实现：[[references/veldhorst-2015|Veldhorst et al., Nature 526, 410 (2015)]]、[[references/hendrickx-2020|Hendrickx et al., Nature 577, 487 (2020)]]；综述见 [[references/burkard-2023|Burkard et al., RMP 95, 025003 (2023)]]。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
