---
title: Zeeman 效应
description: 外磁场把载流子自旋简并态劈开为塞曼能级，是半导体自旋量子比特的天然二能级机制。
aliases:
 - 塞曼效应
 - 塞曼劈裂
 - Zeeman 劈裂
 - 朗德 g 因子
tags:
 - 量子点基础
 - 自旋
 - 磁相互作用
date: 2026-09-08
---

<div class="entry-lead">Zeeman 效应是外磁场把载流子自旋简并态劈开为两个塞曼能级的线性磁响应，它给出半导体自旋量子比特的天然二能级系统、能级差 $E_Z=g\mu_BB$ 由朗德（Landé）g 因子与玻尔磁子共同决定。</div>

## 物理图像

置于外磁场 $\mathbf{B}$ 中的载流子（电子或空穴），自旋 $\mathbf{S}$ 与磁场的线性相互作用把原本两重（或更高重）的自旋简并劈开成离散的子能级——这就是 Zeeman 效应。沿量子化轴（通常取 $\mathbf{B}$ 方向为 $z$）
$$
E_Z = g\,\mu_B\,B
$$

其中 $\mu_B = e\hbar/(2m_e)\approx 57.884\,\mu\mathrm{eV/T}$ 是玻尔磁子，$g$ 是无量纲的朗德（Landé）$g$ 因子，由材料能带结构与波函数细节共同决定。对自由电子 $g_s\approx 2.0023$，GaAs、Si、Ge 等常见半导体中导带电子的有效 $g$ 因子受自旋轨道耦合与晶格修正而偏离该值；价带空穴则因强自旋–轨道耦合而呈现强烈各向异性，常被处理为 $g$ 张量。

每个量子点中只装一个载流子时，两个 Zeeman 态 $|\!\downarrow\rangle$、$|\!\uparrow\rangle$ 是泄漏为零的理想二能级系统——这正是 1998 年 Loss 与 DiVincenzo 提出以量子点电子自旋编码量子比特（即 [[qubit-control/single-spin-qubit|单自旋量子比特]]）的物理起点。当一个点装两个电子时，自旋单态 $S$ 与三重态 $T_{-,0,+}$ 在外磁场下以 Zeeman 能 $E_Z$ 为单位进一步劈裂，构成 [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]] 的工作基础；当三个电子占据（1,1,1）配置、形成（1,1,1）–（2,0,1）反交叉时，$T_+$ 与 $S$ 在失谐 $\varepsilon$ 处满足 $J(\varepsilon)=g\mu_BB_\mathrm{ext}$ 即发生交叉，可以用来演示 [[qubit-control/lzsm-interference|LZSM 干涉]] 与交换振荡。

<!-- FIGURE: 外磁场 B 下单电子 Zeeman 劈裂能级图：|↓⟩、|↑⟩ 与 E_Z=gμB B 的标注，旁侧 |↑↓⟩ 与 |↑↑⟩ 等多电子组态的进一步劈裂示意 -->

## 理论模型

### 单自旋哈密顿量与拉莫尔进动

对单电子自旋，Zeeman 哈密顿量 $H_Z = g\mu_B\,\mathbf{B}\cdot\mathbf{S}/\hbar$，沿 $z$ 轴取外磁场后其本征值为 $\pm E_Z/2$、本征态即 $|\!\uparrow\rangle$、$|\!\downarrow\rangle$。当自旋被制备成叠加态后，绕 $z$ 轴以拉莫尔角频率（Lamor frequency）

$$
\omega_0 = \frac{g\mu_BB}{\hbar},\qquad f_0 = \frac{g\mu_BB}{h} = \gamma B
$$

自由进动，$\gamma=g\mu_B/h$ 即旋磁比（gyromagnetic ratio）。Hu Ruizi 2022 给出 Si 中 $g\approx 2$，对应 $\gamma\approx 28\,\mathrm{GHz/T}$，即每 1 T 外磁场对应约 28 GHz 的谐振频率；拉莫尔进动是 [[qubit-control/rabi-oscillation|Rabi 振荡]] 与 [[qubit-control/ramsey-interferometry|Ramsey 干涉]] 在静磁场下相位积累的根源。

考虑横向驱动场 $B_1\cos(\omega_\mathrm{drive}t+\phi)$，实验室系哈密顿量为

$$
H_\mathrm{lab}=\hbar\omega_0 S_z+h\gamma B_1 S_x\cos(\omega_\mathrm{drive}t+\phi)
$$

进入以 $\omega_\mathrm{drive}$ 旋转的坐标系后反向旋转分量以 $2\omega_0$ 振荡，在旋波近似（rotating wave approximation, RWA）下舍去，得到有效哈密顿量

$$
H_\mathrm{rot}=\hbar(\omega_\mathrm{drive}-\omega_0)S_z+h\gamma B_1\left(S_x\cos\phi-S_y\sin\phi\right)
$$

共振时态矢量绕由 $\phi$ 选定的赤道轴以 [[qubit-control/rabi-oscillation|Rabi 频率]] $f_\mathrm{rabi}=\gamma B_1$ 进动（Hu Ruizi 2022）。

### 多电子态的 Zeeman 哈密顿量

双量子点（1,1）配置下的两电子哈密顿量在 $\{T_+,T_0,T_-,S\}$ 基下（Chen Baobao 2017 公式 2.12–2.13）为

$$
H=g\mu_B
\begin{pmatrix}
B_Z & 0 & 0 & (dB_x-idB_y)/2\\
0 & 0 & 0 & -dB_z\\
0 & 0 & -B_Z & (-dB_x-idB_y)/2\\
(dB_x+idB_y)/2 & -dB_z & (-dB_x+idB_y)/2 & -J(\varepsilon)
\end{pmatrix}
$$

其中 $\bar{B}=\mathbf{B}_\mathrm{ext}+(\mathbf{B}_{\mathrm{nuc},l}+\mathbf{B}_{\mathrm{nuc},r})/2$，$d\mathbf{B}=(\mathbf{B}_{\mathrm{nuc},l}-\mathbf{B}_{\mathrm{nuc},r})/2$，$B_Z=|\bar{B}|$；$T_+$、$T_-$ 的本征能量各为 $+E_Z/2$、$-E_Z/2$，与单态 $S$ 的能量差则在 Zeeman 主导 $B_Z\gg B_\mathrm{nuc}$ 时回到 $E_Z$。这一形式是理解 $S$–$T_+$ 交叉点 $J(\varepsilon)=g\mu_BB_\mathrm{ext}$、[[qubit-control/lzsm-interference|LZSM 干涉]] 与交换振荡的共同起点。

若把自旋自由度与点间电荷自由度一并纳入（双点轨道–自旋联合 Hilbert），并在每个点独立定义 Zeeman 能 $E_{z1}=g_1\mu_BB_{z1}$、$E_{z2}=g_2\mu_BB_{z2}$，则可得到 [[qubit-control/single-spin-qubit|翻转模式单自旋比特]] 的 4×4 哈密顿量（Hu Ruizi 2022 公式 5.4）：

$$
H_\mathrm{fm}=\frac{1}{2}
\begin{pmatrix}
-\varepsilon-E_{z1} & -2t_\mathrm{SO} & 2t_c & 0\\
-2t_\mathrm{SO} & -\varepsilon+E_{z1} & 0 & 2t_c\\
2t_c & 0 & \varepsilon-E_{z2} & 2t_\mathrm{SO}\\
0 & 2t_c & 2t_\mathrm{SO} & \varepsilon+E_{z2}
\end{pmatrix}.
$$

定义平均 Zeeman 能 $\bar{E}_z=(E_{z1}+E_{z2})/2$ 与两点差 $\delta E_z=(E_{z1}-E_{z2})/2=g\mu_Bb_z$，后者正比于两点间纵向磁场梯度 $b_z$（通常来自[[materials-devices/micromagnet|微磁体]]）；$2t_\mathrm{SO}=g\mu_Bb_\perp$ 则是横向梯度引入的等效自旋–轨道耦合。这两项共同决定了 EDSR 操控速率以及 [[scaling-automation/flopping-mode-qubit|翻转模式]] 比特的频率选择定则。

### g 因子：标量、矢量与张量

对有效质量近似的导带电子，Zeeman 相互作用可用各向同性的标量 $g$ 描述；但价带重空穴因 $\mathbf{L}\cdot\mathbf{S}$ 强耦合、$J=3/2$ 角动量空间显著，且受应变、限制势打破球对称，$g$ 通常退化为二阶张量

$$
H_Z = \mu_B\,\mathbf{B}\cdot\underline{\underline{g}}\cdot\mathbf{S}
$$

矩阵元可由 Luttinger–Kohn $\mathbf{k}\cdot\mathbf{p}$ 模型导出。在 [001] 应变限制下，纯重空穴 $|J=3/2,J_z=\pm 3/2\rangle$ 在垂直限制方向上有 $g_\perp=6\kappa$、平行方向 $g_\parallel=0$，呈现极限各向异性（Zhou Yuchen 2026）。实际器件中常因 HH–LH 混合、生长方向偏离、应变梯度等因素使 $g_\parallel$ 偏离零、$g_\perp$ 偏离 $6\kappa$，并可通过栅压连续调谐。

张量形式决定了**两量子点之间 g 因子的差异**是解除 [[qubit-control/pauli-spin-blockade|泡利自旋阻塞]] 的一条独立通道：当 $g_L\neq g_R$ 时，即使 $\mathbf{B}$ 严格平行于双点连线方向，$|S\rangle$ 与 $|T_+\rangle$ 在失谐 $\varepsilon$ 处的能量差也不再严格相等，而是出现 $\Delta E_Z = (g_L-g_R)\mu_BB/2$ 的偏移，从而出现漏电流（Zhou Yuchen 2026 与 PDF p. 86）。

## 各向异性 g 因子与材料体系

不同材料体系的 $g$ 因子差异显著，且常呈各向异性：

| 体系 | 标量/有效 $g$ | 各向异性比 | 来源 |
| --- | --- | --- | --- |
| Si 导带电子 | $\approx 2$（各向同性） | — | Hu Ruizi 2022 |
| GaAs 导带电子 | $\approx -0.4$（各向同性） | — | Chen Baobao 2017 |
| Ge/SiGe 平面异质结（面内） | $g_\mathrm{in}\sim 0.2$–$0.3$ | $g_\mathrm{out}/g_\mathrm{in}\sim 18$ | Xu Gang 2020 |
| Ge/Si 核壳纳米线 | $g\sim 2$ | $g_\mathrm{max}/g_\mathrm{min}\sim 13$ | Xu Gang 2020 |
| 棚顶型 Ge 纳米线 | $g\sim 3.4$–$3.5$（混合态） | $g_\mathrm{max}/g_\mathrm{min}\sim 18$ | Xu Gang 2020、p. 56、p. 60 |
| 平面 Ge（应变）重空穴 | $g_x\gg g_y\approx g_z$（强各向异性） | 极限 $g_\perp/g_\parallel$ 可达数十 | Zhou Yuchen 2026 |

不同量子点之间由于限制势差异、形状不对称、衬底应力分布不同，即便同一晶片上加工出的两个点的有效 $g$ 因子也可能不相等。Xu Gang 2020 在棚顶型 Ge 纳米线双量子点上分别提取 $g_L\sim 3.9$、$g_R\sim 3.7$；Zhou Yuchen 2026 进一步在面外磁场下拟合得到 $g_\perp\sim 8$，与 $g_x\gg g_y\approx g_z$ 的定性图像一致。

各向异性是设计 [[qubit-control/geometric-quantum-gate|几何量子门]] 的基础：通过选择 $\mathbf{B}$ 使得 g 张量主轴、点间隧穿耦合、自旋–轨道场方向三者相对取向最佳，可以同时抑制电荷噪声耦合与避开某些退相干热点（Zhou Yuchen 2026）。

## 参数与量级

| 物理量 | 典型量级 | 含义 / 实验条件 |
| --- | --- | --- |
| Zeeman 能 $E_Z$ | $\sim 100\,\mu\mathrm{eV}$（$B=1\,\mathrm{T}$、$g=2$） | 约 $k_B\cdot 1.2\,\mathrm{K}$；要求电子温度 $T_e\lesssim 100$ mK |
| 旋磁比 $\gamma$（Si） | $\approx 28\,\mathrm{GHz/T}$ | $f_0=19.787\,\mathrm{GHz}$ 对应 $B\approx 0.7\,\mathrm{T}$（Hu Ruizi 2022） |
| 玻尔磁子 $\mu_B$ | $57.884\,\mu\mathrm{eV/T}$ | Zeeman 能量换算系数 |
| 朗德 $g$（自由电子） | $g_s\approx 2.0023$ | 真空中 ESR 标定值 |
| 有效 $g$（Si 电子） | $\approx 2$ | Hu Ruizi 2022 |
| 有效 $g$（GaAs 电子） | $\approx -0.4$ | Chen Baobao 2017 |
| 有效 $g$（Ge 平面空穴） | $g_\mathrm{in}\sim 0.2$–$0.3$，$g_\mathrm{out}/g_\mathrm{in}\sim 18$ | Xu Gang 2020 |
| $E_Z/T_e$ 读出条件 | $>13$（99% 可见度） | Hu Ruizi 2022，$B=1.5\,\mathrm{T}$，$T_e\approx 180\,\mathrm{mK}$ |
| 测量外场 $B$（自旋比特） | $0.5$–$1.5\,\mathrm{T}$ | 受稀释制冷机磁体与 Zeeman 频率限制 |
| $B_\mathrm{kink}$（Si） | 由 $g\mu_B B_\mathrm{kink}=E_\mathrm{VS}$ 给出 | 谷能级标定拐点 |

$g$ 因子与 $B$ 直接决定了 Zeeman 频率 $f_0$，进而是 [[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]] 与 [[qubit-control/hole-spin-qubit|空穴自旋量子比特]] 的工作频率、电荷–自旋接口窗口尺寸，以及与超导[[circuit-qed/microwave-resonator|微波谐振腔]]耦合时的失谐量。

## 实验特征与测量

### 1. 从 Zeeman 频率直接提取 $g$

最直接的标定方法是把微波扫频通过预测的 Zeeman 频率区间，记录自旋翻转信号（ESR / EDSR）峰位 $f_0$，由 $g = hf_0/(\mu_B B)$ 反推 $g$ 因子：

- Xu Gang 2020 用 [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]] 在自旋阻塞区扫频 + 扫场，得到棚顶型 Ge 纳米线双量子点的 $g\approx 3.5$；
- 同一体系的另一种标定方法是在泡利自旋阻塞下测量三重态 $T_+$ 与单态 $S$ 的反交叉位置 $\varepsilon$，由 $J(\varepsilon)=g\mu_BB$ 线性拟合 $g$，得到 $g=3.4\pm 0.2$。

### 2. 用泡利自旋阻塞反交叉扫场

泡利自旋阻塞下，$S$–$T_+$ 反交叉的位置随外场线性移动，斜率即 $g\mu_B$。这是 GaAs、Si、Ge 等多电子区常用的标定方式，Xu Gang 2020 中两个量子点分别给出 $g_L\sim 3.9$、$g_R\sim 3.7$，并由此判断两点 g 因子差异来自几何尺寸与限制势不同。

### 3. 硅中的 $B_\mathrm{kink}$ 方法

Si 量子点具有谷能级（valley）自由度。当 $E_Z < E_\mathrm{VS}$ 时第二个电子优先填自旋向上的 $\nu_-$，隧穿线随 $B$ 单调变化；当 $E_Z > E_\mathrm{VS}$ 时第二个电子改填自旋向下的 $\nu_+$，隧穿线斜率反转。两条斜率交点即 $g\mu_B B_\mathrm{kink} = E_\mathrm{VS}$，是磁输运直接测量谷能级劈裂 $E_\mathrm{VS}$ 的标准手段（Hu Ruizi 2022）。论文器件实测 $E_\mathrm{VS}=170\,\mu\mathrm{eV}$。当 $E_Z$ 与 $E_\mathrm{VS}$ 接近时，自旋–谷混合使 $T_1$ 迅速下降，是硅自旋比特特有的失效通道。

### 4. Zeeman 频率的退相干提取

在固定微波功率下改变脉冲时长测 Rabi 振荡，振荡频率即 $f_\mathrm{rabi}$；扫失谐得到的 V 形（chevron）图样顶点即为共振频率 $f_0$。Ramsey 序列给出 $T_2^*$，Hahn 回波与 [[qubit-control/dynamical-decoupling|CPMG]] 进一步压低准静态噪声。Hu Ruizi 2022 中 Rabi 振荡拟合 $f_\mathrm{rabi}=1.256\,\mathrm{MHz}$，$T_2^\mathrm{rabi}=5.4\,\mu\mathrm{s}$；Zhou Yuchen 2026 在 Ge 空穴上得到 $f_\mathrm{rabi}=11.61\,\mathrm{MHz}$、$T_2^\mathrm{rabi}=1.77\,\mu\mathrm{s}$、品质因子 $Q\approx 41$。

### 5. Kondo 峰的 Zeeman 劈裂

当奇数占据量子点处于 Kondo 区时，零偏压电导峰在外磁场下随 Zeeman 能劈裂为两个子峰，间距即 $E_Z$——这是验证[[fundamentals/coulomb-blockade|库仑阻塞]]背景下 Zeeman 相互作用存在的早期标志性实验。

## 与其他概念的关系

- [[qubit-control/single-spin-qubit|单自旋量子比特]]：两个 Zeeman 态即 $|\!\downarrow\rangle$、$|\!\uparrow\rangle$，$E_Z$ 决定比特频率与读出窗口。
- [[qubit-control/pauli-spin-blockade|泡利自旋阻塞]] 与 [[qubit-control/singlet-triplet-qubit|单态–三重态量子比特]]：以 $S$–$T_0$ 失谐为 $z$ 轴、$T_+$–$T_-$ 间 $E_Z$ 差为参考标尺；$g$ 因子差异与核磁场共同决定免噪点。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]：以重空穴 g 张量为基本参量，强各向异性既是各向异性操控的来源，也是电荷噪声敏感性的根源。
- [[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]（EDSR）：把 $E_Z$ 频率与栅压微波场耦合，$2t_\mathrm{SO}=g\mu_Bb_\perp$ 中的 $g$ 直接决定有效驱动强度。
- [[materials-devices/micromagnet|微磁体]]：通过提供 $b_z$、$b_\perp$ 梯度把 Zeeman 哈密顿量空间化，实现寻址与翻转模式比特。
- [[fundamentals/coulomb-blockade|库仑阻塞]]：在阻塞区内 Zeeman 频率决定 Elzerman 读出的窗口；Kondo 零偏压峰的 Zeeman 劈裂是早期验证。
- [[circuit-qed/spin-photon-coupling|自旋–光子耦合]]：自旋–光子耦合强度正比于 $g$，强各向异性 g 张量可用于选择耦合方向。
- [[qubit-control/exchange-interaction|交换相互作用]] 与 [[qubit-control/lzsm-interference|LZSM 干涉]]：与 $E_Z$ 在同一能量标度上竞争，是 $S$–$T_+$ 反交叉与 Landau–Zener 跃迁概率的决定因素之一。
