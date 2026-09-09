---
title: 自旋轨道力矩操控
description: 用电流产生的自旋轨道力矩翻转微磁性结构，从而以基带方式调节量子点局域磁场。
aliases:
  - SOT操控
  - 自旋轨道力矩
  - 自旋轨道转矩
  - SOT基带门
  - 可控翻转磁体
tags:
  - 扩展与自动化
  - 自旋操控
  - 磁性器件
date: 2026-09-08
---

<div class="entry-lead">SOT 方案不靠连续微波共振，而是用短电流脉冲改变磁性器件的磁化方向，让量子点处的杂散场快速切换并直接旋转自旋量子化轴。</div>

## 物理图像与设计动机

硅基自旋量子比特通常由[[qubit-control/single-spin-qubit|单自旋量子比特]]编码，操控主要依赖[[qubit-control/electric-dipole-spin-resonance|EDSR]]：片上[[materials-devices/micromagnet|微磁体]]产生磁场梯度，交流电场驱动电子做受迫振荡，由等效合成自旋-轨道耦合实现 Rabi 翻转。该方案保真度高，但当阵列规模增大时暴露出三类问题：（一）微波频率拥挤，不同比特的拉莫尔频率差越来越窄，频分复用空间耗尽；（二）微波串扰，全局或相邻栅极间的微波通过电容耦合到非目标比特，引入受控相位误差；（三）电荷噪声经同一梯度通道耦合进自旋态，是限制 $T_2^\*$ 的主要来源。

自旋轨道力矩（spin–orbit torque, SOT）方案绕开这三点。SOT 器件是一个重金属/铁磁双层膜，电流沿重金属层流过时由自旋霍尔效应（spin Hall effect）产生横向自旋极化流，注入相邻铁磁层并对磁化施加力矩，使其在百皮秒到纳秒量级内完成翻转。当器件被集成在量子点附近时，铁磁层产生的杂散场（stray field）就是比特处的局域磁场；翻转杂散场等价于翻转自旋量子化轴，可在不施加任何微波的情况下，以基带（baseband）方波脉冲直接驱动单比特旋转。

与静态微磁体相比，SOT 方案在原理上提供四个新自由度：

- **可关断**：门操作间隙把磁体翻回"零场"组态，等效关闭梯度，电荷噪声通道随之切断；
- **可切换角度**：通过选择多个 SOT 单元的磁化平行/反平行组合，可以让量子化轴在不同方向之间离散切换；
- **不依赖高频**：方波脉冲只需皮秒至纳秒级翻转瞬间，避开了微波放大与布线阵列化的工程瓶颈；
- **兼容 CMOS 工艺**：重金属/铁磁多层膜采用磁控溅射生长，与标准硅后道工艺流程已可并存。

<!-- FIGURE: 硅基量子点集成 SOT 器件的剖面示意图：重金属层（Ta）位于量子点附近，铁磁层（CoFeB）朝上，外加直流脉冲注入重金属层产生自旋流并翻转铁磁层磁化方向；右下图示意翻转前后量子点处的杂散场矢量 -->

## 理论模型

### 自旋流的两种产生机制

SOT 的微观前提是把电荷流转化为自旋流。在重金属/铁磁（HM/FM）异质结中，主要有两条通道。

第一是自旋霍尔效应（spin Hall effect, SHE）。在重金属内部，自旋-轨道耦合使沿 $x$ 方向流动的电子按自旋取向在 $z$ 方向分成两束，形成纯自旋流：

$$
\boldsymbol{J}_s=\theta_\mathrm{SH}\,(\boldsymbol{J}_e\times\boldsymbol{\sigma}),
$$

其中 $\theta_\mathrm{SH}$ 是材料的本征自旋霍尔角。常见体系 Pt、Ta、W 的 $\theta_\mathrm{SH}\sim 0.1$–$0.5$，Pt 为正、Ta 与 W 为负。SHE 又分两类微观起源：外在机制是斜散射与侧跳，内在机制是能带中自旋-轨道耦合诱导的非零贝里曲率。

第二是 Rashba–Edelstein 效应（Rashba–Edelstein effect, REE）。在具有 Rashba 自旋-轨道耦合的二维界面或表面中，电子的自旋与动量被锁定为垂直关系，电荷流在界面处产生垂直于电流方向的非平衡自旋积累。REE 自旋极化方向仅由电流方向和 Rashba 锁定方向决定，在二维界面处效率较高，但在重金属层中 SHE 通常占主导。

### LLGS 方程与两类力矩

铁磁层磁化 $\boldsymbol{M}$ 的动力学由 Landau–Lifshitz–Gilbert–Slonczewski 方程描述：

$$
\frac{d\boldsymbol{M}}{dt}=-\gamma\boldsymbol{M}\times\boldsymbol{H}_\mathrm{eff}+\alpha\,\boldsymbol{M}\times\frac{d\boldsymbol{M}}{dt}
+\tau_\mathrm{DL}\frac{\boldsymbol{M}\times(\boldsymbol{M}\times\boldsymbol{\sigma})}{|\boldsymbol{M}\times\boldsymbol{\sigma}|}
+\tau_\mathrm{FL}\frac{\boldsymbol{M}\times\boldsymbol{\sigma}}{|\boldsymbol{M}\times\boldsymbol{\sigma}|},
$$

其中 $\gamma$ 是旋磁比、$\alpha$ 是无量纲 Gilbert 阻尼系数、$\boldsymbol{H}_\mathrm{eff}$ 是含外磁场、退磁场与各向异性场的有效场。SOT 项被分解为两个正交分量：

- $\tau_\mathrm{DL}\sim\boldsymbol{M}\times(\boldsymbol{M}\times\boldsymbol{\sigma})$ 称为类阻尼力矩（damping-like torque），方向与 Gilbert 阻尼平行，作用是放大或抵消阻尼，使磁矩更容易或更难趋于稳定方向；
- $\tau_\mathrm{FL}\sim\boldsymbol{M}\times\boldsymbol{\sigma}$ 称为类场力矩（field-like torque），方向与有效场同向，相当于给磁矩施加一个虚拟外场。

按铁磁层易磁化轴朝向，SOT 器件分为三类：易磁化轴沿电流方向（$x$ 型）、沿垂直电流的横向（$y$ 型）、垂直膜面（$z$ 型）。其中 $y$ 型器件的 $\boldsymbol{H}_\mathrm{FL}$ 直接沿电子极化方向，无需外加辅助场即可获得确定性翻转；$x$ 型器件则依赖 $\tau_\mathrm{DL}$ 直接驱动进动；$z$ 型器件因关于 $xy$ 平面的镜面对称，需要借助交换偏置、面内辅助磁场或结构不对称来打破对称才能定向翻转。

### 静态杂散场模型

为定量描述 SOT 翻转对量子点磁场环境的调控，将铁磁体近似为磁偶极子：

$$
\boldsymbol{B}_\mathrm{dip}(\boldsymbol{r})=\frac{\mu_0}{4\pi}\,\frac{3(\boldsymbol{m}\cdot\hat{\boldsymbol{r}})\hat{\boldsymbol{r}}-\boldsymbol{m}}{r^3},
$$

其中 $\boldsymbol{m}$ 是磁矩。当在量子点两侧对称设置两个尺寸为 $l=200\,\mathrm{nm}$、$w=100\,\mathrm{nm}$ 的 SOT 单元（面外磁化厚度 $2\,\mathrm{nm}$、面内磁化厚度 $5\,\mathrm{nm}$，磁体中心到量子点的水平距离 $d=80\,\mathrm{nm}$、垂直高度 $h=40\,\mathrm{nm}$），并且材料选为 CoFeB（饱和磁化强度 $M_s=1.6\times 10^6\,\mathrm{A/m}$）时，两单元产生的杂散场在量子点处矢量叠加。微磁学仿真（OOMMFc）给出：当两侧磁体平行时量子点处 $\boldsymbol{B}_1\approx(18.77,\,-10^{-3},\,-0.145)\,\mathrm{mT}$，沿 $+x$；一侧被 SOT 脉冲翻转到反平行时 $\boldsymbol{B}_2\approx(0.151,\,-0.095,\,10.34)\,\mathrm{mT}$，沿 $+z$。两组构型的磁场夹角接近 $\pi/2$，这是面内磁化 SOT 方案构造 $R(\pi/2)$ 旋转门的几何基础。

### 双点跳跃门到原位基带门

静态微磁体方案中，比特门操控建立在 Loss–DiVincenzo 提出的双点跳跃（hopping）门之上：电子在具有不同局域磁场的量子点之间隧穿，跳跃瞬间自旋态不变但磁场方向跳变，自旋在新量子化轴下进动一段时间后再跳回，由此实现任意轴旋转。引入辅助坐标系 $\hat{\boldsymbol{n}}=(\sin\theta,0,\cos\theta)$，左点 $L$ 和右点 $R$ 的塞曼哈密顿量分别为

$$
H_L=-\frac{\hbar\omega_0}{2}\sigma_z,\qquad
H_R=-\frac{\hbar\omega_0}{2}\big(\cos\theta\,\sigma_z+\sin\theta\,\sigma_x\big),
$$

其中 $\omega_0=g\mu_B B_0/\hbar$ 是拉莫尔频率。整体哈密顿量

$$
H=H_1+H_2,\qquad H_1=\frac{\varepsilon}{2}(|R\rangle\langle R|-|L\rangle\langle L|)+t_c(|L\rangle\langle R|+\mathrm{h.c.}),
$$

$$
H_2=|L\rangle\langle L|\otimes H_L+|R\rangle\langle R|\otimes H_R.
$$

要求跳跃时间 $\tau_\mathrm{jump}\ll 2\pi/\omega_0$ 满足非绝热条件，自旋态在跳跃瞬间不变而磁场跳变；跳跃后电子在 $R$ 点绕 $\hat{\boldsymbol{n}}$ 进动

$$
|\psi(t)\rangle=\cos\frac{\theta}{2}\,e^{-i\omega_0 t/2}|\!\uparrow\rangle_{\hat{\boldsymbol{n}}}
-\sin\frac{\theta}{2}\,e^{+i\omega_0 t/2}|\!\downarrow\rangle_{\hat{\boldsymbol{n}}},
$$

写回 $z$ 基下后控制等待时间 $t$ 即可得到任意轴旋转。这一方案要求 $\theta\neq 0$，而单 SOT 单元翻转前后杂散场是等大反向的 $\boldsymbol{B}_\mathrm{flipped}(\boldsymbol{r})=-\boldsymbol{B}_\mathrm{initial}(\boldsymbol{r})$，只让比特反向、不引入进动。

SOT 方案绕过该限制的两条路径：

1. **恒定外场 + 单 SOT 单元**：沿垂直电流方向（如 $y$）施加恒定辅助磁场 $\boldsymbol{B}_\mathrm{ext}$。因 SOT 单元关于 $y$ 对称，$\boldsymbol{B}_\mathrm{ext}$ 与 SOT 杂散场几乎正交；翻转前后总磁场夹角 $\theta$ 通过调幅 $\boldsymbol{B}_\mathrm{ext}$ 在 $0$ 到 $\pi$ 间连续可调。仿真表明在 $\theta\in[\pi/4,\,3\pi/4]$ 内只需一次翻转即可完成 $R_i(\pi/2)$，覆盖赤道面所需的最小单步角度。
2. **对称双 SOT 单元**：在量子点两侧放置相同器件，使其平行态磁场沿 $x$、反平行态沿 $z$，几何上天然给出 $\theta=\pi/2$；仿真结果（面内磁化）给出翻转前 $B_x\approx 18.77\,\mathrm{mT}$、翻转后 $B_z\approx 10.34\,\mathrm{mT}$。

操作序列由五步循环组成：（i）外场磁化 SOT 单元到初始态；（ii）撤外场，单元各向异性场维持磁化，量子化轴定为 $\boldsymbol{S}_1$；（iii）施加直流脉冲 $I_\mathrm{write}$（脉宽 $t_\mathrm{pulse}$ 在 ps–ns 量级），通过 SHE 翻转一侧单元磁化，量子化轴跳到 $\boldsymbol{S}_2$；（iv）保持 $\tau_1$ 使自旋绕 $\boldsymbol{S}_2$ 进动 $\varphi_1=\omega_0\tau_1$；（v）反向 $I_\mathrm{write}$ 把单元翻回 $\boldsymbol{S}_1$，再保持 $\tau_2$ 或跳到下一方向 $\boldsymbol{S}_3$。组合多轮循环即可把比特推到布洛赫球上的任意点。

### 门保真度与噪声分解

门保真度定义为对所有输入纯态平均后的输出态与理想幺正变换的重叠。在只存在相干噪声时

$$
\mathcal{F}=\frac{1}{2}+\frac{1}{6}\sum_{i=x,y,z}\bigl|\mathrm{Tr}\bigl(U_\mathrm{ideal}^\dagger U_\mathrm{actual}\sigma_i\bigr)\bigr|^2,
$$

其中 $\sigma_i$ 为泡利矩阵。对 SOT 门方案，主要噪声源彼此独立，总保真度近似为各因素贡献的乘积：

$$
\mathcal{F}_\mathrm{total}=\mathcal{F}_\mathrm{sw}\cdot(1-\delta\mathcal{F}_\mathrm{pos})\cdot(1-\delta\mathcal{F}_\mathrm{static})
\cdot(1-\delta\mathcal{F}_\mathrm{fin})\cdot(1-\delta\mathcal{F}_\mathrm{decoh})\cdot(1-\delta\mathcal{F}_\mathrm{other}).
$$

逐项拆解如下：

- **有限翻转时间** $\tau_\mathrm{sw}$：翻转期间磁场连续变化，自旋可能部分跟随磁场方向产生额外旋转。线性近似给出保真度损失 $\delta\mathcal{F}_\mathrm{fin}\approx \tfrac{1}{2}(\omega_0\tau_\mathrm{sw}/2)^2$，当 $\omega_0\tau_\mathrm{sw}\ll 1$ 时可忽略。优化方向是把 $\tau_\mathrm{sw}$ 压低到 $1\,\mu\mathrm{s}$ 以下；
- **SOT 翻转非理想**：临界电流密度不足或热涨落导致部分失败。设成功概率 $p_\mathrm{sw}$、失败时磁矩不变，则单比特保真度
$$
\mathcal{F}_\mathrm{sw}=p_\mathrm{sw}+\frac{1-p_\mathrm{sw}}{6}\bigl(1+\cos\theta_\mathrm{ideal}\bigr),
$$
典型 $p_\mathrm{sw}=0.999$、$\theta_\mathrm{ideal}=\pi/2$ 时 $\delta\mathcal{F}_\mathrm{sw}\approx 8.3\times 10^{-4}$；
- **量子点位置偏移**：设面内偏移 $\Delta=\sqrt{\Delta x^2+\Delta y^2}$，磁体间距 $D\approx 360\,\mathrm{nm}$，按偶极子展开给出净磁场方向偏角 $\delta\theta\approx 3\Delta/D$，进而保真度损失 $\delta\mathcal{F}_\mathrm{pos}\approx \tfrac{1}{4}(\delta\theta)^2\approx (3\Delta/D)^2/4$；
- **静态磁场方向偏差**：磁各向异性、外场不均匀、工艺误差引入与设计轴的静态偏角 $\delta\theta_\mathrm{mag}$ 与相对强度误差 $\epsilon=\delta B/B_1$，损失 $\delta\mathcal{F}_\mathrm{static}\approx \tfrac{1}{4}[(\delta\theta_\mathrm{mag})^2+(\epsilon\theta_\mathrm{ideal})^2]$；
- **奥斯特场**：SOT 电流在 HM 层中流动时产生环绕磁场 $B_\mathrm{Oe}\sim \mu_0 J w/(2\pi d)$，叠加在目标磁场上引入静态误差。可通过把奥斯特场计入总磁场夹角的设计中抵消。

取典型参数 $p_\mathrm{sw}=0.999$、$D=360\,\mathrm{nm}$、$\Delta=10\,\mathrm{nm}$、$\delta B/B_1=10^{-3}$、$\theta_\mathrm{ideal}=\pi/2$，可估算 $\mathcal{F}_\mathrm{total}\approx 0.9957$（99.57%），高于容错量子计算通常要求的 99% 阈值。

### 两比特门的扩展

通用量子计算还需要纠缠门。SOT 单比特门可与[[qubit-control/exchange-interaction|交换相互作用]]组合构造[[qubit-control/cnot-gate|CNOT]]。双量子点交换耦合

$$
H_\mathrm{ex}=J\,\boldsymbol{S}_1\cdot\boldsymbol{S}_2,
$$

时间演化算符 $U_\mathrm{ex}(t)=\exp(-iJ\sigma_x t/2\hbar)$，通过控制 $J$ 的开启时间实现 $\sqrt{\mathrm{SWAP}}$（$Jt/\hbar=\pi/2$）或完整 SWAP（$Jt/\hbar=\pi$）。静态微磁体方案中梯度磁场引入塞曼失谐 $\Delta E_Z$，抑制 SWAP；SOT 器件能在执行两比特门前翻转磁化构型，使两比特量子化轴平行从而压制 $\Delta E_Z$，而单比特操控阶段又恢复磁场梯度。CNOT 门由此可分解为

$$
U_\mathrm{CNOT}=(I\otimes R_y(-\pi/2))\,U_{\sqrt{\mathrm{SWAP}}}\,(R_z(\pi)\otimes R_y(\pi/2))\,U_{\sqrt{\mathrm{SWAP}}},
$$

其中单比特旋转均由 SOT 基带操控门完成。

## 参数与量级

SOT 单元的尺寸与材料参数（取自本站论文依据所列工作）：

| 量 | 典型值 | 来源 |
| --- | --- | --- |
| 重金属自旋霍尔角 $\theta_\mathrm{SH}$ | $0.1$–$0.5$（Pt、Ta、W），拓扑绝缘体 $\geq 1$ | 刘铮 2026，p. 38 |
| Ta 层电阻率 | $100$–$200\,\mu\Omega\cdot\mathrm{cm}$ | 刘铮 2026，p. 39 |
| 多层膜结构 | Ta(8)–CoFeB($t$)–MgO(1)–Ta(3)，$t=1\,\mathrm{nm}$ 面外、$t=3$–$5\,\mathrm{nm}$ 面内 | 刘铮 2026，p. 41–42 |
| SOT 单元几何 | $l=200\,\mathrm{nm}$，$w=100\,\mathrm{nm}$；磁体中心到量子点水平距离 $d=80\,\mathrm{nm}$，垂直高度 $h=40\,\mathrm{nm}$ | 刘铮 2026，p. 26 |
| CoFeB 饱和磁化强度 | $M_s=1.6\times 10^6\,\mathrm{A/m}$ | 刘铮 2026，p. 26 |
| 面内磁化构型翻转前/后磁场 | $\approx 18.77\,\mathrm{mT}$（沿 $x$）/$\approx 10.34\,\mathrm{mT}$（沿 $z$） | 刘铮 2026，p. 28 |
| 面外磁化构型磁场（平行态） | $\approx 2.5\,\mathrm{mT}$（沿 $z$） | 刘铮 2026，p. 28 |
| 磁体间距 $D$ | $\approx 360\,\mathrm{nm}$ | 刘铮 2026，p. 34 |
| 面外器件矫顽场 $H_c$ | $\approx 19\,\mathrm{mT}$ | 刘铮 2026，p. 53 |
| 交换偏置场 $H_\mathrm{EB}$ | $\approx 9\,\mathrm{mT}$ | 刘铮 2026，p. 53 |
| 翻转电流阈值 $I_c$ | $\approx 20\,\mathrm{mA}$（20 mK 下，$H_x=40\,\mathrm{mT}$，$t_\mathrm{pulse}=20\,\mathrm{ms}$，$t_\mathrm{delay}=20\,\mathrm{s}$） | 刘铮 2026，p. 55 |
| 翻转时间（已实现） | ms–百 $\mu\mathrm{s}$ 量级 | 刘铮 2026，p. 69 |
| 翻转时间（路线目标） | $\lesssim 1\,\mu\mathrm{s}$ | 刘铮 2026，p. 69 |
| 翻转时间（路线上限） | 百 ps | 刘铮 2026，p. 39 |
| 写入电流引起的温升 | 长脉冲可达约 1 K；短脉冲约 50 mK | 刘铮 2026，p. 61 |
| 整体器件电阻 | $\approx 100\,\Omega$（优化扇出电极后），未优化 $1$–$2\,\mathrm{k}\Omega$ | 刘铮 2026，p. 48 |
| 刻蚀侧壁斜坡 | $\approx 48.37^\circ$，对 30 nm 氧化铝衬底损伤 $\leq 1\,\mathrm{nm}$ | 刘铮 2026，p. 48 |
| 刻蚀后表面粗糙度 $R_a$ | $0.402\,\mathrm{nm}$（IBE），刻蚀前 $0.201\,\mathrm{nm}$ | 刘铮 2026，p. 47 |

## 实验特征与测量

### 磁光克尔效应（MOKE）表征

对未经图形化的完整多层膜，可用磁光克尔显微镜在室温下非破坏地判定面内磁化构型是否具有良好磁性。原理是磁性材料中自旋向上与向下电子的态密度不同，对左旋与右旋圆偏振光的复折射率也不同，导致反射线偏振光的偏振面旋转（克尔转角）与椭偏率出现与磁化相关的变化。极向克尔（磁化沿膜面法向）信号最强，是观察磁畴的主要方式。反对称化处理 $\theta_k(B)=\bigl[\theta_k^\mathrm{raw}(B)-\theta_k^\mathrm{raw}(-B)\bigr]/2$ 可以消除偶函数本底与常数项；原始数据若含有与磁场线性相关的一次项，需先线性拟合扣除再做反对称化。

### 各向异性磁阻、反常霍尔效应与平面霍尔效应

完成 Hall Bar 图形化与刻蚀后，电学输运是读出磁化状态的主要工具。磁性层中电阻随磁化方向变化源于本征自旋-轨道耦合与 $s$–$d$ 散射的各向异性，沿 $x$ 通电流、磁化与电流夹角 $\alpha$ 时

$$
\rho_{xx}(\alpha)=\rho_{xx}^\perp+(\rho_{xx}^\parallel-\rho_{xx}^\perp)\cos^2\alpha,
$$

称各向异性磁阻（anisotropic magnetoresistance, AMR）。读取横向电压则给出平面霍尔效应（planar Hall effect, PHE）

$$
\rho_{xy}=\rho_1\,m_x m_y=\tfrac{1}{2}\rho_1 m_0^2\sin 2\theta,
$$

它直接对应 AMR 张量的非对角项，常用于读出面内磁化。反常霍尔效应（anomalous Hall effect, AHE）

$$
\rho_{xy}=\rho_2\,m_z,
$$

则在仅有 $z$ 方向磁化分量时给出与 $m_z$ 成正比的横向电阻，是面外 SOT 器件最直接的磁化读出。

### 单向自旋霍尔磁阻与差分 PHE

仅靠 AMR/AHE 无法读取面内磁化翻转（因为 $\theta\to\theta+\pi$ 时 $\cos^2\theta$ 与 $\sin 2\theta$ 都不变）。两条补救路径：

- **单向自旋霍尔磁阻**（unidirectional spin Hall magnetoresistance, USMR）：HM/FM 界面的自旋积累方向与电流方向耦合，产生与电流极性相关的电阻项 $\rho_{xx}=\rho_0+\rho_\mathrm{AMR}+\gamma(\boldsymbol{M}\cdot\boldsymbol{\sigma})|\boldsymbol{J}_\mathrm{DC}|$，反向电流并相减得 $\Delta\rho_{xx}=2\gamma M\cos\theta\,I_\mathrm{DC}$。用锁相放大器在 $2\omega$ 频率提取二次谐波项，可抑制大部分本征噪声，但 USMR 信号量通常仅在 $\mathrm{m}\Omega$ 量级；
- **差分平面霍尔效应**：在垂直易磁化轴的方向施加微小扰动磁场 $H_x$，$\rho_{xy}$ 对 $H_x$ 的响应斜率正比于 $m_x$ 分量，翻转前后斜率符号反向，因此差分读出 $\Delta R_{xy}=R_{xy}(+H_x)-R_{xy}(-H_x)$ 可以分辨磁矩是否翻转。该方法对面内磁化构型 SOT 器件已被用于 mK 温区磁化探测。

### 极低温 SOT 翻转测试

在稀释制冷机混合室（约 20 mK）首次实现电控 SOT 翻转是验证量子点兼容性的关键里程碑。测试序列：Keithley 6221 源表先输出直流写脉冲 $I_\mathrm{write}$（脉宽 $t_\mathrm{pulse}$），等待 $t_\mathrm{delay}$ 让热信号衰减，再以低幅交流读电流 $I_\mathrm{read}$ 经 SR830 锁相读出 $R_{xy}$，重复并扫描 $I_\mathrm{write}$ 得 $R_{xy}$–$I_\mathrm{write}$ 曲线。面外器件在 $t_\mathrm{pulse}=20\,\mathrm{ms}$、$t_\mathrm{delay}=20\,\mathrm{s}$、$H_x=40\,\mathrm{mT}$ 辅助场下测得翻转电流 $I_c\approx 20\,\mathrm{mA}$。低温下临界电流较室温预期偏大，主要原因是磁阻尼因子随温度降低而增大。面内器件在 mK 温区未能直接读到翻转信号，归因于磁层较厚导致临界电流密度显著上升、热预算与稀释制冷机制冷功率不匹配、以及 USMR 信号远弱于热信号。

### 焦耳热与反常能斯特效应

写入电流通过焦耳热在器件中产生瞬时温升。当脉冲过长（典型如 $t_\mathrm{pulse}=250\,\mathrm{ms}$、$t_\mathrm{delay}=1\,\mathrm{s}$）时，$R_{xy}$ 中观察到与 $j^2$ 成正比的大幅漂移，量级远高于真实翻转信号。这一热信号主要由反常能斯特效应（anomalous Nernst effect, ANE）贡献：

$$
\boldsymbol{E}_\mathrm{ANE}=C_\mathrm{ANE}\,j^2\,(\boldsymbol{M}\times\nabla T),
$$

其中 $C_\mathrm{ANE}$ 是材料常数、$\nabla T$ 是电流焦耳热引起的温度梯度。在所讨论的器件构型中，$\nabla T$ 主要在 $xz$ 平面内，$\boldsymbol{E}_\mathrm{ANE}$ 沿 $y$，恰好与 AHE 读出方向一致，因此热信号会直接叠加在磁阻读出上。变温磁性测试（1.5 K 到 300 K，结合 PPMS）显示 ANE 量级约 200–500 $\mathrm{m}\Omega$，比室温 Ta/CoFeB 文献报道（1–20 $\mathrm{m}\Omega$）高出一个量级以上。缓解方案包括：（i）优化 SOT 材料，降低电阻率同时提高 $\theta_\mathrm{SH}$；（ii）轨道霍尔效应材料可把自旋注入效率提高数个量级；（iii）深硅刻蚀切断量子点与 SOT 磁体之间的热链路；（iv）"高温比特"路线容许 SOT 翻转引起的温升；（v）交换偏置提供无场翻转路径，减小辅助外磁场所需的额外电流。

### 交换偏置

面外磁化器件的磁滞回线整体偏离零场，对称中心沿磁场轴偏移约 $H_\mathrm{EB}\approx 9\,\mathrm{mT}$，称为交换偏置（exchange bias）。物理起源是铁磁/反铁磁界面未补偿自旋对铁磁层施加单向各向异性。在原 CoFeB/MgO/Ta 多层膜中并不存在反铁磁物质，变温测试表明 $H_\mathrm{EB}$ 从 1.5 K 到 300 K 几乎不消失，结合退火工艺引入氧离子扩散，最可能来源是 CoFeB/MgO 界面处形成的 $\alpha$-$\mathrm{Fe}_2\mathrm{O}_3$（Néel 温度约 950 K）。$H_\mathrm{EB}$ 引入了等效的内建有效场，打破 $xy$ 平面镜面对称性，因而有望实现无外场辅助下的确定性垂直翻转，省去辅助磁场带来的额外线路与热负载。

## 与其他概念的关系

- [[qubit-control/single-spin-qubit|单自旋量子比特]]：SOT 操控的最终目的是构造单比特（乃至两比特）门操作，所操控的物理量是单电子自旋的量子化轴；
- [[materials-devices/micromagnet|微磁体]]：静态微磁体是 SOT 方案的前身；SOT 单元可视为"按需可开关"的微磁体，工作原理与几何布局一致，但增加了电学翻转能力；
- [[qubit-control/electric-dipole-spin-resonance|EDSR]]：EDSR 用微波 + 静态梯度磁场驱动自旋；SOT 操控用方波电流翻转磁场代替微波，避开了阵列化中的频率拥挤与串扰；
- [[qubit-control/exchange-interaction|交换相互作用]]与[[qubit-control/cnot-gate|CNOT 门]]：SOT 单比特门结合交换耦合可构造 CNOT，是通用量子计算的关键拼图；
- [[scaling-automation/flopping-mode-qubit|翻转模式量子比特]]与[[qubit-control/geometric-quantum-gate|几何量子门]]：SOT 切换量子化轴的能力也支持在 SOT 器件辅助下做非绝热几何门（Aharonov–Anandan 相位门）与绝热几何门，是单比特门的另一族实现；
- [[materials-devices/charge-noise|电荷噪声]]：SOT 把磁场梯度做成可关断，从而在门操作间隙切断电荷噪声耦合自旋的通道，理论上可显著延长 $T_2^\*$；
- [[qubit-control/singlet-triplet-qubit|单态-三重态比特]]与[[qubit-control/resonant-exchange-qubit|共振交换比特]]：共享同一梯度磁场的方案；SOT 翻转可以在它们的双比特操作阶段临时消除塞曼失谐，恢复理想 SWAP。

## 延伸阅读

- T. Chen et al., "An SOT-switchable micromagnet scheme of adiabatic geometric gates for silicon spin qubits", *Chinese Physics B* (2025). [DOI: 10.1088/1674-1056/addcd3]
- Y. Lim et al., "SWAP Gate for Spin Qubits Based on Silicon Devices Integrated with a Micromagnet", *Nano Letters* (2024). [DOI: 10.1021/acs.nanolett.4c05540]
- B. Dieny et al., "Field-Free Spin–Orbit Torque Magnetization Switching in a Single-Phase Ferromagnetic and Spin Hall Oxide", *Nano Letters* (2024). [DOI: 10.1021/acs.nanolett.4c01788]
- C. O. Avci et al., "Unidirectional spin Hall magnetoresistance in ferromagnet/normal metal bilayers", *Nature Physics* (2015). [DOI: 10.1038/nphys3356]

## 论文依据

- [[sources/liu-zheng-2026|刘铮 2026]]，PDF p. 19：传统微磁体的局限与李方阁等提出的可切换微磁体方案；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 17–19：Loss–DiVincenzo 单自旋比特、硅基阵列规模、6 量子比特阵列与微磁体集成；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 30–32：自旋霍尔效应、Rashba–Edelstein 效应、SOT 与 STT 的差异；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 32–33：SOT 器件按易磁化轴的 $x$/$y$/$z$ 三型分类与翻转对称性；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 37–38：基于 SOT 的原位基带操控方案的五步操作序列；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 40–41：面内磁化 SOT 器件构型与仿真磁场 $\boldsymbol{B}_1$、$\boldsymbol{B}_2$；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 42–43：面外磁化器件与外场辅助下的角度调节；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 44–49：门保真度公式与有限翻转时间、翻转非理想、位置偏移、磁场偏差、奥斯特场各项噪声；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF p. 50：典型参数下 $\mathcal{F}_\mathrm{total}\approx 0.9957$（99.57%）；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF p. 51：SOT 单比特门与交换耦合构造 CNOT 的分解；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 52–53：重金属与磁性层材料选择（Ta、CoFeB、MgO）与自旋霍尔角量级；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 55–57：磁控溅射多层膜与 CoFeB/MgO 退火诱导 PMA；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 57–60：MOKE 测量原理、反对称化处理、面内器件磁性表征；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 60–62：RIE/ICP/IBE 刻蚀对比、AFM 粗糙度数据与 IBE 工艺最终选择；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 63–65：低电阻扇出电极（$\sim 100\,\Omega$）与刻蚀侧壁斜坡 $\approx 48.37^\circ$；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 64–67：AMR、PHE、AHE 读出面内/面外磁化的原理与适用边界；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 69–70：20 mK 下面外器件首次 SOT 翻转（$I_c\approx 20\,\mathrm{mA}$）与极低温下的热信号特征；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 70–72：交换偏置 $H_\mathrm{EB}\approx 9\,\mathrm{mT}$、来源分析（$\alpha$-$\mathrm{Fe}_2\mathrm{O}_3$）与无场翻转潜力；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 72–75：反常能斯特效应（ANE）解释与变温磁性测试的温升估计（约 1 K 长脉冲，约 50 mK 短脉冲）；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF pp. 76–80：USMR 与差分平面霍尔效应读出面内磁化、面内 SOT 翻转困难分析；
- [[sources/liu-zheng-2026|刘铮 2026]]，PDF p. 83：未来路线（$\tau_\mathrm{sw}\lesssim 1\,\mu\mathrm{s}$、Bias Tee、深硅刻蚀、轨道霍尔效应材料、"高温比特"、可切换几何门）；
- [[sources/yang-jiecheng-2023|杨杰诚 2023]]，PDF p. 4：作为对照的静态微磁体设计与迭代优化。