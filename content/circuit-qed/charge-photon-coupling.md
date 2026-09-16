---
title: 电荷–光子耦合
description: 量子点电荷偶极与微波腔零点电场之间的相互作用。
aliases:
  - 电荷光子耦合
  - charge-photon coupling
tags:
  - 电路量子电动力学
  - 电荷量子比特
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qv5cqjjan72591wdvw2t98
source_updated: 2026-09-09T15:04:32Z
---

<div class="entry-lead">电荷–光子耦合是量子点 cQED 中最直接的接口：腔电压调制量子点失谐，量子点极化反过来移动腔频率和线宽。</div>

## 物理图像

在[[circuit-qed/circuit-quantum-electrodynamics|电路量子电动力学]]（circuit QED, cQED）中，[[circuit-qed/microwave-resonator|微波谐振腔]]的电场涨落作用到半导体[[fundamentals/semiconductor-quantum-dot|量子点]]电极上，将电压扰动转换为点内电化学势（[[fundamentals/electrochemical-potential|电化学势]]）的调制；反过来，量子点电荷态的变化又会以电偶极矩的形式与腔电场发生耦合，表现为腔的谐振频率、线宽和透射（反射）幅值随比特态而变。这一"电压 ↔ 偶极矩"双向通道就是电荷–光子耦合的物理图像。

按"两端"来理解：

- **腔端**：腔内电场通过耦合电极作用到量子点。电极与量子点之间的电容把腔末端的电压算符 $V_{\rm rms}(a+a^\dagger)$ 转换为量子点一侧的电压扰动 $V^\dagger$，再由杠杆臂（lever arm）$\alpha=C_L/C_\Sigma$ 换算成电化学势的偏移 $\delta\mu=\alpha e V^\dagger$。
- **量子点端**：电极失谐量改变时，双量子点的两个电荷态 $|L\rangle$、$|R\rangle$ 之间发生相干振荡，量子点被周期极化，在腔侧看来这等价于一个时变电偶极矩。偶极矩的矩阵元与两个电荷态的相对位置以及电极杠杆臂直接相关——双量子点电极间距常在 $100\ \mathrm{nm}$ 量级，远大于单量子点，偶极矩也相应更大。

由于耦合是电偶极相互作用，对[[materials-devices/charge-noise|电荷噪声]]高度敏感；强耦合实验因此要在耦合强度、退相干速率、腔耗散和电子温度之间联合优化。

<!-- FIGURE: 微波谐振腔与双量子点的耦合结构：左点电极连接到 λ/2 共面波导腔的电压波腹，电极–量子点电容 C_L 引入杠杆臂 α = C_L / C_Σ；右图给出等效电路 -->

## 理论模型：哈密顿量与耦合公式

### 腔与量子点的电偶极相互作用

设腔模频率 $\omega_r$，产生、湮灭算符 $a^\dagger$、$a$。量子点处感受到的腔电压算符

$$
V^\dagger=V_{\rm rms}(a+a^\dagger)=\sqrt{\frac{\hbar\omega_r}{lC_l}}\,(a+a^\dagger)
$$

其中 $V_{\rm rms}$ 是真空涨落场的均方根电压，$lC_l$ 是腔的总电容。耦合电极对量子点的电容 $C_L$ 与量子点总电容 $C_\Sigma$ 之比 $c_c=C_L/C_\Sigma$ 即杠杆臂 $\alpha$。在双量子点电荷态 $\{|L\rangle,|R\rangle\}$ 基矢下，相互作用哈密顿量可写为

$$
H_{\rm int}=e\,c_c\,\tau_z\,V^\dagger
$$

其中 $\tau_z$ 是以 $|L\rangle$、$|R\rangle$ 为基矢的泡利 $z$ 算符。

将坐标旋转到双量子点本征矢 $\{|+\rangle,|-\rangle\}$，并用混合角 $\theta=\arctan(2t_c/\varepsilon)$（$t_c$ 是点间隧穿耦合，$\varepsilon$ 是左右点失谐量）分解 $H_{\rm int}$，得

$$
H_{\rm int}=\hbar\omega_r\,c_c\,\frac{2Z_r}{\sqrt{R_Q}}\,(\sigma_z\cos\theta+\sigma_x\sin\theta)(a+a^\dagger)
$$

其中 $R_Q=h/e^2\approx 25.8\ \mathrm{k\Omega}$ 是电阻量子，$Z_r=\sqrt{L/C}$ 是腔的特征阻抗。

### 全局耦合强度与有效耦合

把与比特布居（$\sigma_z$）共线部分抽出来，定义"全局耦合强度"（bare coupling）

$$
g_0=\omega_r\,c_c\,\frac{2Z_r}{\sqrt{R_Q}}
$$

它是耦合电极–量子点电容比 $c_c$、腔特征阻抗 $Z_r$ 与腔频 $\omega_r$ 三者的乘积。在[[circuit-qed/jaynes-cummings-model|JC 模型]]的旋波近似（RWA）下，保留 $a^\dagger\sigma_-$ 与 $a\sigma_+$ 两项，完整的电荷比特–腔哈密顿量为

$$
H=H_r+H_{\rm DQD}+H_{\rm int}\approx\hbar\omega_r\!\left(a^\dagger a+\tfrac{1}{2}\right)+\tfrac{\hbar\omega_a}{2}\sigma_z+\hbar\,g_0\sin\theta\,(a^\dagger\sigma_-+a\sigma_+)
$$

其中 $\omega_a=\sqrt{\varepsilon^2+(2t_c)^2}/\hbar$ 是电荷比特的跃迁频率。比对 JC 模型可见，电荷比特与腔的有效耦合强度为

$$
g_c=g_0\sin\theta=g_0\,\frac{2t_c}{\hbar\omega_a}.
$$

混合角 $\theta$ 因此具有"极化率"的物理意义：失谐量很小（$\varepsilon\to 0$）时 $\sin\theta\to 1$，电子波函数均分到两个点，量子点的极化率达到最大，$g_c$ 取到 $g_0$；失谐量很大（$\varepsilon\gg 2t_c$）时 $\sin\theta\to 0$，电子被局限在一个点内，$g_c\to 0$。

对 $n$ 阶高阶模的耦合强度为

$$
g^{(n)}=g_0\sin\theta\sqrt{\omega_n/\omega_r}
$$

即与模频率比的平方根成正比。

### 透射系数与腔响应

对透射式共面波导腔，利用输入–输出理论拟合实验数据，可得透射系数

$$
S_{21}=\frac{-i\sqrt{\kappa_1\kappa_2}}{\omega_r-\omega+g_c\chi-i\kappa/2}
$$

其中双量子点的磁化率

$$
\chi=\frac{g_c}{-\Delta+i\gamma},\qquad \Delta=\omega_a-\omega,\qquad \gamma=\gamma_1/2+\gamma_\phi.
$$

按实部、虚部分解，腔的频移与展宽分别为

$$
\Delta\omega_r\simeq\frac{g_c^2\Delta}{\Delta^2+\gamma^2},\qquad \Delta\kappa\simeq\frac{2g_c^2\gamma}{\Delta^2+\gamma^2}.
$$

对反射式腔，相应的反射系数

$$
S_{11}=1+\frac{i\kappa_i}{\omega_r-\omega+g_c\chi-i\kappa/2}
$$

其中 $\kappa=\kappa_i+\kappa_e$ 由内部损耗 $\kappa_i$ 和外部损耗 $\kappa_e$（线耦合至传输线）共同决定。当 $g_c$ 很小或 $|\Delta|$ 很大、$\chi\approx 0$ 时，$S_{21}$、$S_{11}$ 简化为无加载谐振腔的洛伦兹响应。

### 真空 Rabi 振荡与强耦合判据

把比特制备到激发态，演化在 $|e,0\rangle$ 与 $|g,1\rangle$ 之间以速率 $g_c$ 振荡，频域上即得到[[circuit-qed/vacuum-rabi-splitting|真空 Rabi 劈裂]]。要求劈裂可分辨，需要

$$
g_c>\kappa,\gamma
$$

即系统进入[[circuit-qed/strong-coupling|强耦合]]区。系统中总耗散的有效线宽为 $\Gamma_{\rm eff}=(\kappa+\gamma)/2$，真空 Rabi 振荡可被观测的条件是 $g_c>\Gamma_{\rm eff}$，即 $2g_c>\kappa+\gamma$。

<!-- FIGURE: 电荷比特–腔透射谱：随比特失谐扫描腔响应，给出真空 Rabi 劈裂 2g_c（共振时），以及在色散区的双峰位置与腔频偏移 -->

### 色散极限与腔频移动

当比特–腔失谐远大于耦合（$|\Delta|\gg g_c$）时，JC 哈密顿量在二阶微扰下化为

$$
H_{\rm disp}\approx\left(\omega_r+\frac{g_c^2}{\Delta}\sigma_z\right)a^\dagger a+\frac{1}{2}\left(\omega_a+\frac{g_c^2}{\Delta}\right)\sigma_z
$$

由此得到[[readout-measurement/dispersive-readout|色散读出]]的核心：腔频依比特态移动 $\pm g_c^2/\Delta$，相干读取比特态而几乎不扰动比特本身。

## 杠杆臂的提取

杠杆臂 $\alpha$ 是电化学势–电压转换系数，直接决定了腔电压扰动被放大到失谐量多少倍。常用提取方法有三种：

1. **库仑菱形法**：由相邻电子数对应的库仑菱形，得到加电子能 $E_{\rm add}$ 与栅压周期 $\Delta V_G$

```math
\alpha=\frac{E_{\rm add}}{|e|\,\Delta V_G}
```

利用菱形两条边的斜率可独立校验 $\alpha$ 的电压–能量转换关系。在 Si/SiGe 三量子点中，由库仑菱形测得电极 lever arm 约为 $126\ \mathrm{meV/V}$。2. **光子辅助隧穿法**：对量子点电极施加微波驱动 $f_d$，电子可吸收 $n$ 个光子（$n$ 为整数）跨越失谐量，边带间距即一个光子的能量，$h f_d$ 与电极电压周期 $\Delta V$ 之比即 $\alpha/h$。例如固定 $f_d=10\ \mathrm{GHz}$、微扰 $eV_{\rm AC}\,h f_d\ll(2t_c)^2$ 即可读出 lever arm。3. **two-tone 谱法**：固定失谐 $\varepsilon=0$，把驱动频率 $f_d$ 与电极电压 $V_L$ 联合扫描，bit 跃迁能与电极电压的拟合斜率 $\alpha=\Delta\varepsilon/\Delta V_L$ 同样给出杠杆臂。

三种方法互为校验；实验中通常先用库仑菱形给出一个粗估值，再由光子辅助隧穿或 two-tone 谱做精细校准。

## 硅 cQED 器件架构：LC 滤波与损耗工程

![[assets/figures/charge-photon-coupling/mi2017-fig1-silicon-cqed-device.jpg]]

_硅混合 cQED 器件：λ/2 CPW 腔的两个电压波腹处各放一个 Si 双量子点；每条直流偏置线都串入片上 LC 低通滤波器以阻止腔光子经偏置线泄漏；剖面示出定义 DQD 的重叠 Al 栅与 Si/SiGe 层——为降低内损，腔中心极正下方的量子阱被选择性地挖除。图源：Mi et al. (2017), Fig. 1。_

1. **偏置线 LC 低通滤波**。此前设计的显著微波泄漏来自腔与各直流偏置线之间的寄生电容——偏置线变成把 $Q$ 拉低的泄漏通道。对策是**每条**栅偏置线（以及腔的直流抽头）都串入片上 LC 滤波器：叉指电容 $C_f\approx1\ \mathrm{pF}$ + 螺旋电感 $L_f\approx13\ \mathrm{nH}$，足印仅 $700\times200\ \mu\mathrm{m}$，ABCD 矩阵模型与实测 $|S_{21}|$ 吻合。同型无滤波器件 $Q<1000$，加滤波后升到 5400。
2. **量子阱挖除**。腔中心极与地之间的间隙电场最强、介质损耗最敏感——把该区域的量子阱与 $\mathrm{Al_2O_3}$ 选择性刻蚀掉可进一步压低内损。
3. **波腹放置**。两只 DQD 分别放在 $\lambda/2$ 腔的两个电压波腹处，最大化电场–电偶极耦合。

![[assets/figures/charge-photon-coupling/mi2017-fig2-lc-filter-cavity.jpg]]

_LC 滤波器与腔表征：(a) 片上 LC 滤波器（螺旋电感 + 叉指电容）的光学显微、局部放大与电路模型；(b) 实测滤波器传输 |S21|²（红）与 ABCD 矩阵预测（黑）一致；(c) DQD 处于库仑阻塞时的腔传输——洛伦兹拟合给出 Q=5400（f_c/Q 对应 κ/2π=1.4 MHz）。图源：Mi et al. (2017), Fig. 2。_

腔的品质因子分解：$f_c=7.67\ \mathrm{GHz}$、$Q=5400$ 对应总光子损耗率 $\kappa/2\pi=f_c/Q=1.4\ \mathrm{MHz}$；Sonnet 电磁仿真给出输入输出耦合各 $\kappa_{\mathrm{in}}/2\pi=\kappa_{\mathrm{out}}/2\pi=0.4\ \mathrm{MHz}$，剩余 $0.6\ \mathrm{MHz}$ 归于腔下介质层内损与 LC 滤波器的残余泄漏——实测滤波器在 $f_c$ 处提供约 20 dB 衰减（ABCD 理论预期 24 dB），多极 LC 或带阻滤波是进一步的改进方向。在该架构上，零差测量的腔透射直接显示 DQD [[fundamentals/charge-stability-diagram|电荷稳定图]]，点间电荷跃迁处的腔响应给出电荷–腔耦合 $g_c/2\pi=23\ \mathrm{MHz}$——硅中电子与微波光子有效耦合、通往相干电子–光子相互作用的第一步（同一平台随后实现强自旋–光子耦合，见[[references/samkharadze-2018|Samkharadze 2018]]）。在这一架构上把操控与读出全部搬到腔接口的全微波电荷比特方案，见[[qubit-control/charge-qubit|电荷量子比特]]的"全微波操控"一节。

## 参数与量级

本站论文与典型文献给出的电荷–光子耦合参数如下（量级仅供参考）：

| 量                             | 典型值                                                                            | 备注                                                           |
| ------------------------------ | --------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 腔特征阻抗 $Z_r$               | $50\ \Omega$（标准共面波导）$\to$ 约 $1$–$3.5\ \mathrm{k\Omega}$（高阻抗腔）      | 高阻抗腔由 SQUID 阵列、动态电感薄膜或几何 LC 实现              |
| 杠杆臂 $\alpha$                | $\sim 0.1$ – $\sim 0.3$                                                           | 库仑菱形、光子辅助隧穿或 two-tone 谱标定                       |
| 比特–腔失谐 $\Delta/2\pi$      | 0 – 数 GHz                                                                        | 在色散极限下 $                                                 | \Delta | >10\,g_c$ |
| 比特频率 $f_q=\omega_a/2\pi$   | $2$ – $20\ \mathrm{GHz}$                                                          | 与腔频 $\sim 5$–$7\ \mathrm{GHz}$ 接近                         |
| 双量子点电极间距               | $\sim 100\ \mathrm{nm}$                                                           | 决定电偶极矩大小                                               |
| 有效电荷–光子耦合 $g_c/2\pi$   | $\sim 30$ – $\sim 300\ \mathrm{MHz}$                                              | Si/SiGe 三量子点 + TiN 腔测得 $g_0/2\pi\sim 175\ \mathrm{MHz}$ |
| 腔耗散 $\kappa/2\pi$           | 约 $2$ – $10\ \mathrm{MHz}$                                                       | 高品质因数高阻抗腔可达数千 $Q$                                 |
| 比特退相干 $\gamma/2\pi$       | 电荷比特约 $50$ – $100\ \mathrm{MHz}$                                             | 受电荷噪声主导                                                 |
| 强耦合判据 $g_c>\kappa,\gamma$ | 典型满足于高阻抗腔 + 强混合角                                                     | 失谐 $\varepsilon=0$ 时最易实现                                |
| 硅 cQED 架构腔品质因子         | $Q=5400$（$f_c=7.67$ GHz、$\kappa/2\pi=1.4$ MHz；无滤波同型器件 $Q<1000$）        | Mi 2017                                                        |
| 片上 LC 偏置线滤波器           | $C_f\approx1$ pF + $L_f\approx13$ nH，$700\times200\ \mu m$，$f_c$ 处衰减约 20 dB | Mi 2017                                                        |
| 硅架构电荷–腔耦合              | $g_c/2\pi=23$ MHz（点间电荷跃迁处腔响应提取）                                     | Mi 2017                                                        |

特殊情形：当耦合电容 $C_L$ 与 $C_R$ 的差可由外部电极独立调节时，$g_c\propto(C_L-C_R)/C_\Sigma$，可大范围调谐耦合；这种设计曾实现最大 $g_c/2\pi\approx 619\ \mathrm{MHz}$，对应 $g_c/\omega_r\sim 0.11$，进入[[circuit-qed/strong-coupling|超强耦合]]（ultrastrong coupling）区，RWA 失效。

## 实验特征与测量方法

### 真空 Rabi 劈裂的观测

制备一个与腔共振的电荷比特（$\omega_a=\omega_r$），通过腔的透射/反射谱读取 $|S_{21}(\omega)|$ 或 $|S_{11}(\omega)|$：当 $g_c>\kappa,\gamma$ 时，单一洛伦兹线在 $\omega_r$ 两侧分裂为两个峰，间距 $2g_c$。调节双量子点失谐 $\varepsilon$ 会通过 $\sin\theta$ 因子连续调制 $g_c$，劈裂幅度在 $\varepsilon=0$（$\sin\theta=1$）处最大。

### 色散频移与电荷稳定图读取

色散区 ($\Delta\gg g_c$) 腔频随比特态偏移 $\pm g_c^2/\Delta$。在零失谐时（$\Delta=0$），$g_c^2/\Delta$ 发散但被有限的 $\gamma$ 正则化；实验中以小驱动功率标定 $g_c^2/\Delta$ 即可反推 $|g_c|$。沿比特失谐 $\varepsilon$ 扫描时，腔响应绘出抛物线型色散关系 $\hbar\omega_a=\sqrt{\varepsilon^2+(2t_c)^2}$，这正是双量子点电荷比特的特征色散。

把扫描电极画成二维图，$|S_{11}|$ 在隧穿线附近发生幅值变化，可作为[[fundamentals/charge-stability-diagram|电荷稳定图]]的腔读取版本——量子点之间的隧穿线（$|S_{11}|$ 增强）与量子点–源漏的充电线（$|S_{11}|$ 减弱）形成对比，前者源于腔的频移被转化为反射幅值信号，后者源于电子跳迁同时耗散腔光子。

### 光子辅助隧穿与 two-tone 谱

在量子点电极上施加微波驱动 $f_d$ 时，电子可吸收/发射整数个光子（PAT）。边带间距 $h f_d$ 与电极电压周期 $\Delta V$ 之比即 lever arm $\alpha/h$；同时，光子辅助隧穿在 $|S_{11}|$ 上表现为沿失谐轴等距排列的亮线。

two-tone 谱用一路探测微波（$\omega_p=\omega_r$）和一路驱动微波（$\omega_d$）联合照射，扫描 $\omega_d$ 与电极电压，bit 跃迁能量 $\hbar\omega_a=\sqrt{\varepsilon^2+(2t_c)^2}$ 表现为抛物线型共振峰。沿抛物线拟合可直接给出隧穿耦合 $2t_c$ 和 lever arm $\alpha$。

### 量子点发光与腔增益

当源漏加上 $V_{\rm SD}\neq 0$ 的直流偏置、并在偏压三角形的 $\varepsilon\approx 0$ 边附近工作时，电子可在源–漏偏置窗口内连续隧穿，并在每次非弹性隧穿中释放出能量为 $\hbar\omega_a$ 的微波光子：当这一频率与腔频匹配时，光子被腔俘获并存储。若腔光子发射过程超过腔耗散，即 $g_c/\kappa>1$，则在 $|S_{21}|$ 或 $|S_{11}|$ 上测到超过阻塞区本底的"腔增益"信号 $|S_{21}|/|S_{21}^{(c)}|>1$（其中 $|S_{21}^{(c)}|$ 是库仑阻塞区内的腔信号）。在 GaAs 双量子点–SQUID 阵列腔系统中，最大腔增益 $|S_{21}|\approx 1.13$ 在驱动频率 $\nu_d=3.6\ \mathrm{GHz}$ 处获得。

### 强周期驱动的修饰耦合

在 Floquet 工程中，对比特或腔施加频率 $f_d$ 的强周期驱动，系统的准能级与态布居随 $f_d$ 重新分布，耦合 $g_c$ 可由 effective coupling $g_{\rm eff}=g_0\sin\theta_k$ 替代，$\theta_k$ 依赖驱动幅度与相位。这条路径上可以观察到腔光子辅助的 LZSM 干涉（[[qubit-control/lzsm-interference|LZSM 干涉]]）。

## 退相干来源与权衡

电荷–光子耦合的优势——直接的电偶极接口——也带来劣势：电荷比特对[[materials-devices/charge-noise|电荷噪声]]高度敏感，$T_2^\ast$ 通常在数十到数百纳秒量级，$T_2$ 在 $\mu$s 量级。硅锗、硅 MOS 体系的电荷噪声已被多次表征为 1/f 主导，$\hbar\gamma_{\rm charge}$ 与 $\Delta\varepsilon$ 共同决定能谱的各向异性展宽。Si/SiGe 体系还通过对比声子耦合的贡献，确认电荷噪声在量子比特退相干中占主导。

因此，电荷–光子耦合常常是"探测用的接口"而不是"长寿命的存储单元"：许多实验用高阻抗腔的色散响应读出[[qubit-control/single-spin-qubit|单自旋量子比特]]、[[qubit-control/singlet-triplet-qubit|单态–三态量子比特]]或[[qubit-control/resonant-exchange-qubit|共振交换量子比特]]的自旋态；自旋本身不直接与电场耦合，需要借助自旋–电荷混合或微磁体梯度来"借用"电荷比特的大电偶极矩。这一桥梁也由[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]一词专门刻画。

## 与其他概念的关系

- **JC 模型与真空 Rabi 劈裂**：电荷–光子耦合在 RWA 下回到[[circuit-qed/jaynes-cummings-model|JC 哈密顿量]]；$g_c$ 给出的真空 Rabi 劈裂是[[circuit-qed/strong-coupling|强耦合]]实验的标志。
- **高阻抗腔**：耦合强度 $g_0\propto 2Z_r/\sqrt{R_Q}$，因此[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]（SQUID 阵列、动态电感薄膜）成为提升 $g_c$ 的关键路线——材料侧的定量支撑是 NbN 薄膜标定（15 nm 膜 $L_{k,S}=41.2$ pH/□，对比 50 nm Nb 仅 0.5 pH/□），同设计下预期 $Z_C\times5.6$、$g_c\times2.4$。
- **电荷稳定图与库仑菱形**：电荷比特的 $\varepsilon$ 扫描由[[fundamentals/charge-stability-diagram|电荷稳定图]]的隧穿线标定；菱形半高与栅压周期给出[[fundamentals/coulomb-diamond|库仑菱形]]的 $E_{\rm add}$ 与 $\alpha$。
- **双量子点与隧穿耦合**：双量子点电极间距 $\sim 100\ \mathrm{nm}$ 决定电偶极矩大小；电极间隧穿耦合 $t_c$ 决定电荷比特频率 $\omega_a$ 与混合角 $\theta$。
- **电荷噪声与退相干**：耦合越强意味着量子点越"暴露"在电场中，[[materials-devices/charge-noise|电荷噪声]]的耦合通道也越显著，$T_2$ 越短。
- **Floquet 动力学**：强周期驱动下耦合强度会被重整，对应[[circuit-qed/floquet-dynamics|Floquet 动力学]]中的"修饰耦合"与 LZSM 干涉。
- **腔介导耦合**：两个或更多电荷比特通过共享高阻抗腔的虚拟光子交换得到有效相互作用，是[[circuit-qed/cavity-mediated-coupling|腔介导耦合]]最直接的实验载体。
- **色散读出与单发读出**：色散区下 $g_c^2/\Delta$ 既可作单比特读出，也可作[[readout-measurement/dispersive-readout|色散读出]]与远程比特间 iSWAP/CZ 门。

## 参考文献

- Mi, X., Cady, J. V., Zajac, D. M., Stehlik, J., Edge, L. F., Petta, J. R. Circuit Quantum Electrodynamics Architecture for Gate-Defined Quantum Dots in Silicon. _Applied Physics Letters_ 110, 043502 (2017). DOI: 10.1063/1.4974536；arXiv:1610.05571（QAtlas 缓存：1610.05571）。
- 横向偶极耦合的对偶通道——纵向耦合（比特频率被腔坐标调制、辐射压的电路类比，硬件级纯纵向实现 g₀=2π×11.9 MHz 进入单光子强耦合区）见纵向耦合词条。
- 电荷–光子耦合在硅量子点–腔体系中的测定：[[references/samkharadze-2018|Samkharadze et al., Science 359, 1123 (2018)]]。

> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
