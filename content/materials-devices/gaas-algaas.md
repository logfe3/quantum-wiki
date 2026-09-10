---
title: GaAs/AlGaAs 异质结
description: 利用能带错位形成高迁移率二维载流子气的经典栅控量子点材料平台。
aliases:
  - 砷化镓量子点
  - GaAs量子点
  - GaAs/AlGaAs 量子点
  - 砷化镓异质结
tags:
  - 材料与器件
  - GaAs
date: 2026-09-08
---

<div class="entry-lead">GaAs/AlGaAs 异质结提供成熟、高迁移率的[[fundamentals/two-dimensional-carrier-gas|二维电子气]]和灵活的表面栅控，是早期电荷、自旋以及量子点–腔实验的重要平台；其短处在于天然核自旋带来的纳秒级退相干，使高保真自旋工作逐步让位给硅、锗等"无核自旋"体系。</div>

## 物理图像与定义

GaAs/AlGaAs 异质结由分子束外延（MBE）按层依次生长 GaAs 与 Al<sub>x</sub>Ga<sub>1-x</sub>As 形成；当 Al 组分 $x\approx0.3$ 时，AlGaAs 的禁带宽度（约 $1.79\ \mathrm{eV}$）大于 GaAs（约 $1.42\ \mathrm{eV}$），导带与价带在界面处都出现不连续 $\Delta E_C$、$\Delta E_V$。在 n 型 AlGaAs 中掺 Si 后，电离施主的内建电场把 GaAs 一侧靠近界面的导带底向下弯至费米面以下，形成深度约几百 meV 的[[fundamentals/two-dimensional-carrier-gas|三角势阱]]。低温下电子只占据量子化的基态子带，分布在界面下方约 $90$–$100\ \mathrm{nm}$ 深处的一个薄层内，平面内自由运动——这就是[[fundamentals/two-dimensional-carrier-gas|二维电子气]]（two-dimensional electron gas, 2DEG）。GaAs 与 AlGaAs 的晶格常数几乎相同（失配 $\sim 0.1\%$），加 MBE 可形成原子级平整界面，使杂质散射极小，4.2 K 下 GaAs/AlGaAs 的 2DEG 迁移率可达 $10^{5}$–$10^{6}\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$，远超其他体系。

表面蒸镀的金属门电极在 2DEG 之上形成肖特基接触；负偏压时把覆盖区下方的 2DEG 排空，正偏压时把电子吸引至金属–半导体界面附近形成积累层。用细栅围出"岛"、用 barrier 栅隔出势垒，就把 2DEG 切成[[fundamentals/semiconductor-quantum-dot|半导体量子点]]——横向量子点的源、漏与量子点都在同一 2DEG 层内，载流子沿平行于界面的方向输运。AlGaAs 层中掺 Si 后做高温快速退火，可形成与 2DEG 连通的 Ni/Ge/Au 欧姆接触，把量子点信号引出到外部测量电路。

![[assets/figures/materials-devices/chen-baobao-2017-fig1-5-gaas-sqd-dqd-sem.jpg]]

*GaAs/AlGaAs 单量子点与双量子点典型扫描电镜照片（[陈宝宝 2017]([[sources/chen-baobao-2017]])，图 1.5）*

<!-- 原始占位：GaAs/AlGaAs 异质结层结构与垂直能带图——自上而下为 GaAs 盖帽、AlGaAs 隔离、n-AlGaAs 掺杂层、AlGaAs 缓冲、GaAs 基底；右侧能带示意导带在界面处形成三角势阱，标注 2DEG 位置 -->

## 异质结的能带与三角势阱

![[assets/figures/materials-devices/you-jie-2016-fig1-1-gaas-heterostructure.jpg]]

*掺杂 GaAs/AlGaAs 异质结层结构与垂直能带图（[尤杰 2016]([[sources/you-jie-2016]])，图 1.1）*

本组常用调制掺杂（modulation-doped）GaAs/AlGaAs 晶圆（尤杰 2016 给出的自上而下参数）：$10\ \mathrm{nm}$ GaAs 盖帽层、$50\ \mathrm{nm}$ AlGaAs 隔离层、$20\ \mathrm{nm}$ Si 掺杂 AlGaAs 重掺杂层（Si 浓度 $\sim 7\times 10^{17}\ \mathrm{cm^{-3}}$）、$15\ \mathrm{nm}$ AlGaAs 缓冲层、$500\ \mathrm{nm}$ GaAs 基底；Al 组分取 $30\%$。在该结构下 2DEG 形成在距表面约 $90\ \mathrm{nm}$ 处。尚汝南 2014 的样品同为 GaAs/Al<sub>0.3</sub>Ga<sub>0.7</sub>As 异质结，自上而下为 $10\ \mathrm{nm}$ GaAs 盖帽、$80\ \mathrm{nm}$ AlGaAs 层（含 Si 掺杂，$\sim 10^{18}\ \mathrm{cm^{-3}}$）、$500\ \mathrm{nm}$ GaAs 基底，未掺杂"空白层"与掺杂 n-AlGaAs 相距约 $20\ \mathrm{nm}$ 以减少散射，2DEG 同样位于表面下约 $90$–$100\ \mathrm{nm}$。周诚 2013 综述不同批次的晶圆参数：批次 #28 $n=3.2\times 10^{11}\ \mathrm{cm^{-2}}$、$\mu=1.5\times 10^{5}\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$；批次 #34 $n=2.0\times 10^{11}\ \mathrm{cm^{-2}}$、$\mu=0.6\times 10^{5}$；批次 #35 $n=3.0\times 10^{11}\ \mathrm{cm^{-2}}$、$\mu=3.2\times 10^{5}$。

在生长方向 $z$ 上，GaAs/AlGaAs 界面的三角势阱可近似为线性势 $V(z)=eFz$ 加无限高势垒，束缚态由 Airy 函数给出

$$
\psi_n(z)\propto\mathrm{Ai}\!\left[\frac{2m^*eF}{\hbar^2}\!\left(z-\frac{E_n}{eF}\right)\right],
$$

最低子带能量 $E_0\approx \gamma_1\!\left[\hbar^2 e^2 F^2/(2m^*)\right]^{1/3}$，其中 $\gamma_1$ 是 Airy 函数第一零点。有效电场 $F$ 来自电离施主的内建电场（n-AlGaAs 中）和表面栅压的诱导电场两部分；后者可调，因此通过栅压可微调 2DEG 的子带间距。平面内色散近似为抛物线 $E_{n,\mathbf{k}_\parallel}=E_n+\hbar^2 k_\parallel^2/(2m^*)$，GaAs 电子有效质量 $m^*=0.067\,m_0$，对应面内费米波长 $\lambda_F=\sqrt{2\pi/n_\mathrm{2D}}$ 在 $10^{11}\ \mathrm{cm^{-2}}$ 量级下约 $80\ \mathrm{nm}$。

更严格的自洽求解要把静电势 $\phi(z)$ 与 2DEG 电荷密度 $\rho(z)$ 通过一维[[fundamentals/two-dimensional-carrier-gas|薛定谔-泊松]]（Schrödinger-Poisson, S-P）方程联立

$$
-\frac{\hbar^2}{2}\frac{\partial}{\partial z}\!\left[\frac{1}{m^*(z)}\frac{\partial\psi_n}{\partial z}\right] + V(z)\psi_n = E_n\psi_n,\qquad
\frac{\mathrm{d}}{\mathrm{d}z}\!\left[\varepsilon_r(z)\frac{\mathrm{d}\phi(z)}{\mathrm{d}z}\right] = -\frac{e}{\varepsilon_0}\rho(z),
$$

自洽求解得到大栅压下 2DEG 深度、子带占据与势阱形状。这是商用软件 nextnano、SIMNAD 和部分自研脚本中处理 GaAs 量子点纵向势的标准流程。

## 从 2DEG 到栅控量子点

栅控门电极工艺主要分三类：浅刻蚀（传统掺杂型）、湿法刻蚀 mesa + 欧姆接触（传统掺杂型）和双层栅极（非掺杂积累型）。三类工艺的差异在噪声表现与可控性上各有取舍：

- **湿法刻蚀 + 欧姆接触**（尚汝南 2014 / 周诚 2013 / 余国栋 2016）：先以 $\mathrm{H_2SO_4:H_2O_2:H_2O=1:25:300}$ 配比的刻蚀液去掉 mesa 外的 2DEG（约 $200\ \mathrm{nm}$），再蒸镀 $10\ \mathrm{nm}$ Ni / $150\ \mathrm{nm}$ GeAu / $20\ \mathrm{nm}$ Ni，并在 $430^{\circ}\mathrm{C}$、$380\ \mathrm{torr}$ 氮氢混合气中退火 $3$–$5\ \mathrm{min}$ 形成欧姆接触。肖特基门电极采用 $\mathrm{Ti/Au}$，电子束光刻定义 $10\ \mathrm{nm}$ 量级的最细线宽。门电极功能通常按位置分：plunger gate 调节点内电子能级，barrier gate 调节量子点与电子库之间的隧穿势垒，middle gate 调节双点间的耦合强度，QPC gate 调节电荷传感通道。
- **浅刻蚀**（尤杰 2016）：在同一片掺杂基片上用电子束曝光加湿法浅刻蚀至掺杂层（$\sim 70$–$80\ \mathrm{nm}$）形成二维电子气窄带，把大部分肖特基电极下方的 2DEG 直接移除。其电荷噪声比同片传统栅极电控单量子点低约一个数量级，验证了"肖特基电极下方二维电子气是掺杂 GaAs 中 1/f 电荷噪声主要来源"的图像。
- **双层栅极 + 斜蒸发**（尤杰 2016）：用 MBE 在 GaAs 表面以下几十纳米处插入一层 $\sim 100\ \mathrm{nm}$ 氧化铝作栅氧，再斜蒸发蒸镀顶部大电极积累 2DEG，下层细栅形成势垒。完全去除掺杂层后，2DEG 的载流子不经 AlGaAs 掺杂层，2DEG 面密度可达 $3.2\times 10^{11}\ \mathrm{cm^{-2}}$，迁移率 $1.5$–$2.0\times 10^{5}\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$，与传统调制掺杂水平相当，但电荷噪声水平降到 $0.55$–$1.4\ \mu\mathrm{eV}$。

门电极的电容参数与栅型紧密相关：尚汝南 2014 给出经验参考值——GaAs 中 plunger gate 杠杆臂 $\alpha\approx 0.05$、barrier gate $\alpha\approx 0.1$（无量纲）。横向量子点的典型尺寸约 $200\ \mathrm{nm}$，与费米波长同量级，因此量子点少电子区由若干条子带贡献。

## 量子点哈密顿量与平台特征

栅控量子点的能级用[[fundamentals/constant-interaction-model|常相互作用模型]]（CI 模型）描述：把电子–电子库仑作用与电子–电极耦合全部压缩为总电容 $C_\Sigma=C_S+C_D+C_G$，单粒子能级 $E_n(B)$ 与填充数无关。在源极加 $V_\mathrm{SD}$、漏极接地、栅压 $V_G$ 时，$N$ 电子态的总能量

$$
U(N)=\frac{\left[-|e|(N-N_0)+C_S V_\mathrm{SD}+C_G V_G\right]^2}{2C_\Sigma}+\sum_{n=1}^{N}E_n(B),
$$

[[fundamentals/electrochemical-potential|电化学势]] $\mu(N)=U(N)-U(N-1)$ 在百纳米级 GaAs 量子点中 $C_\Sigma$ 很小、$E_C=e^2/C_\Sigma$ 远大于 $\Delta E=E_{N+1}-E_N$，电化学势近似等间距排列，库仑峰近似等周期出现。

磁场下每个子带进一步按塞曼能 $E_Z=g^*\mu_B B$ 劈裂，GaAs 导带电子 $g^*=-0.44$（实验上拟合多量子点数据常得到 $|g^*|\sim 0.35$–$0.44$，陈宝宝 2017 在其实验中拟合 $g=-0.35$）。这给出电荷–自旋比特的统一哈密顿量

$$
H_\mathrm{qd}=\tfrac{1}{2}\varepsilon(t)\sigma_z+\Delta\sigma_x,
$$

其中 $\varepsilon$ 是电荷比特中两量子点电化学势之差（失谐），$\Delta$ 是点间隧穿[[fundamentals/tunnel-coupling|隧穿耦合]]；自旋比特则在 $\mu_B B$ 能量标度上额外引入 [[qubit-control/exchange-interaction|交换相互作用]] $J$，把单比特哈密顿量扩展为 Heisenberg 型。

GaAs 的另一项特征是天然核自旋：每个晶胞中 $^{69}\mathrm{Ga}$、$^{71}\mathrm{Ga}$、$^{75}\mathrm{As}$ 三种同位素均带有非零核自旋（$I=3/2$、$3/2$、$3/2$），电子自旋通过超精细相互作用与约 $10^{5}$–$10^{6}$ 个核自旋耦合，构成 Overhauser 场。这是 GaAs 自旋比特 $T_2^*$ 通常被限制在 $10$ ns 量级以下的核心原因（陈宝宝 2017 综述）。力学量上的后果是：自旋比特退相位由核自旋随机翻转主导，Hahn 回波能延长至 $\mu\mathrm{s}$ 但仍受 $1/f$ 噪声限制；同位素纯化（如富集 $^{28}\mathrm{Si}$ 或 $^{74}\mathrm{Ge}$）则把这条边界从材料层面打破，这是 GaAs 在长相干自旋比特路线上被 Si/SiGe 取代的根本原因。

## 改进型结构：浅刻蚀与非掺杂 GaAs

针对传统调制掺杂 GaAs 中 $T_1\sim 10\ \mathrm{ns}$、$T_2^*<1\ \mathrm{ns}$ 的短板，尤杰 2016 系统比较了三种改进路线：

- **浅刻蚀量子点**：在同一块调制掺杂 GaAs 基片上制作浅刻蚀量子点（$\sim 70$–$80\ \mathrm{nm}$）和传统单点对比，He-3 制冷机 $250\ \mathrm{mK}$ 下用 SR785 测 $1$–$9\ \mathrm{Hz}$ 电流噪声谱并积分到库仑峰位置的电流涨落 $\Delta I$。浅刻蚀量子点的 $\Delta I$ 比传统点低一个数量级，但与相同工艺的浅刻蚀点噪声级别相近，从而证实"肖特基电极电压涨落经由电极下方的二维电子气漏电流注入量子点是掺杂 GaAs 中 1/f 噪声的主要通道"。
- **非掺杂双层栅极结构**：完全去掉 MBE 生长的 Si 掺杂层，用 ALD 沉积 $\sim 100\ \mathrm{nm}$ 氧化铝作栅氧，斜蒸发镀 $120\ \mathrm{nm}$ 铝顶电极，正栅压在 GaAs/AlGaAs 界面附近感应出 2DEG（约在表面下 $45\ \mathrm{nm}$），势垒由下层细栅调节。同片范德堡样品测得 2DEG 面密度最高 $3.2\times 10^{11}\ \mathrm{cm^{-2}}$，迁移率 $1.5$–$2.0\times 10^{5}\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$。在此基础上完成的双量子点电荷噪声水平 $0.55$–$1.4\ \mu\mathrm{eV}$，与传统浅刻蚀点相当，证明移除掺杂层确实抑制了电荷噪声。
- **PAT 表征相干性**：在非掺杂双量子点上用 [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]（photon-assisted tunneling, PAT）测电荷量子比特的相干时间，$T_1\approx 15\ \mathrm{ns}$、$T_2^*\approx 330\ \mathrm{ps}$，与掺杂 GaAs 传统点相近（尤杰 2016 报告）。原因是绝缘层的微波加热把电子温度抬到 $\sim 280\ \mathrm{mK}$，所以进一步改善需要生长更低损耗的栅氧。

这三条改进路线把 GaAs 平台从"标准噪声参考"推进到与 Si-MOS 可比的电荷噪声水平，但相干时间仍受 GaAs 自身核自旋与压电声子限制，因而高保真自旋工作逐步让位给硅、锗。

## 参数与量级

| 量 | 典型值 | 备注 / 来源 |
| --- | --- | --- |
| Al 组分 $x$ | $0.30$（多数实验组） | 尤杰 2016、尚汝南 2014、陈宝宝 2017 |
| Si 掺杂浓度 | $5$–$11\times 10^{17}\ \mathrm{cm^{-3}}$ | 尤杰 2016；2DEG 形成位置 $\sim 90\ \mathrm{nm}$ |
| 2DEG 面密度 $n_\mathrm{2D}$ | $2.0$–$3.2\times 10^{11}\ \mathrm{cm^{-2}}$ | 周诚 2013 批次 #28–#36 |
| 4.2 K 迁移率 $\mu$ | $0.6$–$3.2\times 10^{5}\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$ | 4.2 K 标准霍尔测量，周诚 2013 |
| 量子点横向尺寸 | $\sim 200\ \mathrm{nm}$ | 尚汝南 2014 |
| 总电容 $C_\Sigma$ | $113\ \mathrm{aF}$ | 浅刻蚀 GaAs 单点实测，尤杰 2016 |
| 充电能 $E_C$ | $1.5\ \mathrm{meV}$ | 同上 |
| 杠杆臂 $\alpha$ | plunger $\sim 0.05$、barrier $\sim 0.1$（无量纲） | 经验值，尚汝南 2014 |
| 电荷比特弛豫 $T_1$ | $\sim 10$–$15\ \mathrm{ns}$ | 掺杂型 vs 非掺杂型，尤杰 2016 |
| 自由退相干 $T_2^*$ | $<1\ \mathrm{ns}$（电荷）；$\sim 10\ \mathrm{ns}$（自旋） | 核自旋主导 |
| 电子温度 $T_e$ | 稀释制冷机 $\sim 100\ \mathrm{mK}$，He-3 $\sim 300\ \mathrm{mK}$ | 库仑峰半高宽反推，尚汝南 2014 |
| $g$ 因子 | $\|g^*\|\sim 0.35$–$0.44$ | GaAs 导带电子；陈宝宝 2017 拟合 $g=-0.35$ |
| QPC 阈值电导 | $G_\mathrm{QPC}\approx e^2/h$ | 灵敏度最高工作点，尤杰 2016 |
| 浅刻蚀深度 | $70$–$80\ \mathrm{nm}$ | $\mathrm{H_2SO_4:H_2O_2:H_2O=1:25:300}$，刻蚀速率 $5\ \mathrm{nm/s}$，尤杰 2016 |
| 顶栅电压 $V_\mathrm{TOP}$ | $\sim 3\ \mathrm{V}$ 产生 $3.2\times 10^{11}\ \mathrm{cm^{-2}}$ 积累 2DEG | 非掺杂结构，尤杰 2016 |
| 浅刻蚀点低频电流涨落 | 比传统栅控点低约一个数量级 | $1$–$9\ \mathrm{Hz}$ 积分，尤杰 2016 |

## 实验特征与测量方法

**直流输运 + 锁相放大**。标准测量是在源极叠加以锁相放大器 SR830 输出的 $20\ \mu\mathrm{V}$、$\sim 37\ \mathrm{Hz}$ 交流激励与直流偏压 $V_\mathrm{SD}$，扫描栅压 $V_G$ 测微分电导 $dI/dV_\mathrm{SD}$。多电子区相邻库仑峰等周期排列；峰间距给出门–点电容 $C_G=e/\Delta V$，峰高由隧穿率 $\Gamma_S$、$\Gamma_D$ 决定。增大 $V_\mathrm{SD}$ 时阻塞区展开为[[fundamentals/coulomb-diamond|库仑菱形]]，由菱形高度读 $E_C$、宽度读 $C_G$、两条边斜率给 $\alpha=1/(1/k_1+1/k_2)$，菱形外的平行线对应激发态能级间距 $\Delta E$。在 GaAs 双量子点上，这一参数提取流程可同时得到 $C_\Sigma$、$\alpha$ 与 $2t_c$，其中 $2t_c$ 可随中间电极电压从 $\sim 25\ \mu\mathrm{eV}$ 调到 $\sim 120\ \mu\mathrm{eV}$（指数型调节，尤杰 2016 拟合）。

**电荷稳定图与蜂窝结构**。两个 plunger gate 同时扫描时得到[[fundamentals/charge-stability-diagram|电荷稳定图]]，蜂窝的每个六边形对应固定的 $(N,M)$ 电子占据。蜂窝顶点对应量子点间隧穿线，在 $(N+1,M)\leftrightarrow(N,M+1)$ 之间形成两能级体系，哈密顿量仍取 $H_\mathrm{qd}=\tfrac{1}{2}\varepsilon\sigma_z+\Delta\sigma_x$。通过微波驱动可在该处出现 [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]] 边带：驱动把原能级劈裂为 $E+n\hbar f$，$n$ 阶边带的强度由第一类 Bessel 函数 $J_n^2(\alpha)$ 决定（$\alpha=eV_\mathrm{ac}/\hbar f$）。尚汝南 2014 在 GaAs 双点上观察到至多 14 阶光子过程，同时测得电荷态弛豫时间 $T_1\approx 8\ \mathrm{ns}$。

**电荷传感**。紧邻量子点的[[readout-measurement/qpc-charge-sensor|QPC]] 是高灵敏度的电荷传感器：在量子点上加 $V_Q$、$V_U$ 负压形成 QPC 通道，把其电导调至 $G_\mathrm{QPC}\approx e^2/h$（斜率最大处）以获得最佳灵敏度。量子点每进出 1 个电子，QPC 电流出现跳变台阶；QPC modulation（栅极上加交流 + 微弱直流）把跳变转换为锁相可读的微分信号。[[readout-measurement/rf-reflectometry|射频反射测量]]把 QPC/SET 与 LC 谐振电路耦合，把电荷跳变转换为射频阻抗变化，可用网络分析仪单发测量。这一技术在 GaAs 双量子点上支撑了 [[readout-measurement/single-shot-readout|单发读出]]：Elzerman 等人 2004 年的标志性工作即在 GaAs 单量子点上完成单电子自旋单发读出，是自旋量子比特工程化的基础之一。

**谐振腔耦合**。GaAs 2DEG 也可与片上 NbTiN 或 SQUID 阵列[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]共片集成。顾思思 2023 在 GaAs/AlGaAs 衬底上先湿法刻蚀掉腔区域的 2DEG（避免对腔的耗散），再溅射 NbTiN 做透射腔（$Z_r\approx 2\ \mathrm{k\Omega}$，$\kappa/2\pi\approx 11\ \mathrm{MHz}$）并把双量子点的 plunger 接到腔中心导体。量子点–腔全局耦合强度 $g_0=\beta\omega_r\sqrt{Z_r/(\pi\hbar)}$，由混合角 $\theta$ 与[[circuit-qed/charge-photon-coupling|电荷–光子耦合]]杠杆臂进一步调制为 $g=g_0\sin\theta$。这是 GaAs 自旋比特接入[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]与[[circuit-qed/jaynes-cummings-model|JC 模型]]杂化能级的主要路线，腔幅值与相位信号可直接读出量子点电荷态。

**自旋比特操控**。在 GaAs 双点上 $S$-$T_0$ 比特的演化由交换相互作用 $J(\varepsilon)$ 驱动，$J$ 随失谐 $\varepsilon$ 单调变化——这是 [[qubit-control/singlet-triplet-qubit|S-T 比特]] 与 [[qubit-control/exchange-interaction|交换门]] 的物理基础。Patel 等人在 GaAs 双点上用此哈密顿量演示了 99.5% 保真度的闭合回路控制；但代价是每次操作都要先初始化到 $|S\rangle$（用 $|S\rangle$ 与 $|T_-\rangle$ 之间的塞曼能差），并通过[[qubit-control/landau-zener-transition|Landau-Zener 跃迁]]在 $\varepsilon=0$ 附近绝热穿过反交叉。Landau-Zener-Stückelberg 干涉在 GaAs 双点上由尚汝南 2014 直接测得，是研究电荷比特相干性与非绝热跃迁的标准工具。

**两比特逻辑门**。余国栋 2016 在 GaAs/AlGaAs 四量子点上设计强电容耦合双电荷比特：上下两组双点通过中间电极的开口耦合，耦合能 $J$ 可在 $J/\Delta$ 范围调节。当 $\Delta/J=1$、$\varepsilon_1=\sqrt{2}\Delta/2$ 时，系统形成两比特受控旋转门（CROT）的本征结构；CNOT 是其 $\pi$ 旋转特例。同一小组进一步在三电荷比特结构上演示了静态 Toffoli 门：两个控制比特 $|L\rangle$ 或 $|R\rangle$ 通过耦合能 $J_{12}$、$J_{13}$ 抑制目标比特的拉莫振荡，因此只有当两个控制比特同时为 $|1\rangle$ 时目标比特才发生 $|0\rangle\leftrightarrow|1\rangle$ 翻转。

## 主要限制

**核自旋噪声**。每个电子自旋与约 $10^{6}$ 个 $^{69,71}\mathrm{Ga}$ 与 $^{75}\mathrm{As}$ 核自旋通过超精细耦合，构成 quasi-static 的 Overhauser 场 $B_\mathrm{nuc}$，其涨落决定了 $T_2^*$。GaAs 中动力学解耦（如 CPMG 序列）可将 $T_2$ 拉长到约 $0.87\ \mathrm{ms}$（陈宝宝 2017 综述），但电荷比特对核自旋不敏感，因此同位素纯化对电荷比特不构成主要限制，而自旋比特则直接受其制约。

**电荷噪声**。$1/f$ 噪声是 GaAs 量子点电荷比特的退相干主因。传统调制掺杂结构中噪声功率谱密度 $S(f)\propto 1/f^\alpha$ 在低频区 $\alpha\sim 1$，强度由肖特基电极下方二维电子气中的漏电流涨落决定——尤杰 2016 用浅刻蚀点与非掺杂双层栅极结构验证了这一点；通过移除电极下方 2DEG 或彻底去掉掺杂层，可把电荷噪声降低一个数量级，但 $T_2^*$ 仍被电极–栅氧界面的双能级系统（TLS）[[materials-devices/interface-defects|界面缺陷]]限制。

**压电声子**。GaAs 不是中心对称晶体，量子点中电荷起伏会通过压电耦合产生声子辐射，引起电荷态弛豫与退相位。电声相互作用 $V$ 是 GaAs 中电荷比特 $T_1$ 难突破 10 ns 量级的重要原因之一（顾思思 2023 把声子谱密度函数 $J(\omega)$ 写入其主方程），在硅、锗等中心对称材料中此通道大幅减弱。

**平行导通**。若 n-AlGaAs 层太厚、掺杂太重或栅压太大，n-AlGaAs 自身的导带底会被弯至费米面以下，形成第二条子带（"平行导通"），把栅极电场屏蔽掉一部分。尚汝南 2014 提出鉴别方法：在 Hall bar 上加顶栅负压，若电阻先升后突然降低再升，即说明已出现平行导通，该晶圆不适合做全电控量子点。

**2DEG 对微波的吸收**。当 GaAs 量子点被集成到 3D 或片上谐振腔时，2DEG 充当一层耗散介质，使高阻抗腔的 $Q$ 值大幅降低。顾思思 2023 指出必须先把腔区域的 2DEG 湿法刻蚀掉，再在量子点电极上施加足够大的负压耗尽电极下方的 2DEG，才能与超导腔实现可用的耦合——这是 GaAs–超导 cQED 实验工艺上比 Si 多一步的根本原因。

## 与其他概念的关系

- [[fundamentals/two-dimensional-carrier-gas|二维载流子气]]：GaAs/AlGaAs 是 2DEG 最经典的载体之一，详见该词条中关于三角势阱、自洽薛定谔-泊松求解与多种体系参数对照的内容。
- [[fundamentals/coulomb-blockade|库仑阻塞]]与[[fundamentals/coulomb-diamond|库仑菱形]]：在 GaAs 量子点上得到最早的清晰演示，$E_C\sim 1.5\ \mathrm{meV}$、$C_\Sigma\sim 113\ \mathrm{aF}$ 是尤杰 2016 的实测参考值。
- [[fundamentals/charge-stability-diagram|电荷稳定图]]：双量子点的蜂窝结构与三量子点的多斜率线（顾思思 2023 图 1.4b）都首先在 GaAs 上得到实验检验。
- [[qubit-control/charge-qubit|电荷量子比特]]与[[qubit-control/singlet-triplet-qubit|单态-三态量子比特]]：GaAs 是这两种编码方式的"原产地"，余国栋 2016 在 GaAs 多电荷比特上演示 Toffoli 门（控制比特 2 与 3 同时为 $|1\rangle$ 才翻转目标比特 1）。
- [[qubit-control/single-spin-qubit|单自旋量子比特]]与[[qubit-control/electric-dipole-spin-resonance|电偶极自旋共振]]：GaAs 自旋比特受核自旋与压电声子限制，$T_2^*$ 仅纳秒量级；这一硬约束使高保真自旋工作转向 Si/SiGe 与 Si-MOS。
- [[qubit-control/photon-assisted-tunneling|光子辅助隧穿]]与[[qubit-control/lzsm-interference|LZS 干涉]]：尚汝南 2014 在 GaAs 双量子点上观察到 14 阶光子过程和 LZS 干涉，是研究电荷比特能谱与相干性的主要工具。
- [[readout-measurement/qpc-charge-sensor|QPC 电荷传感]]与[[readout-measurement/single-shot-readout|单发读出]]：Elzerman 等人在 GaAs 单点上首次完成自旋单发读出。
- [[readout-measurement/rf-reflectometry|射频反射测量]]：在 GaAs 量子点上把 QPC 与 LC 谐振电路耦合，可实现快速电荷读出。
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与[[circuit-qed/spin-photon-coupling|自旋–光子耦合]]：顾思思 2023 在 GaAs/AlGaAs 上用 NbTiN 透射腔（$Z_r\approx 2\ \mathrm{k\Omega}$）实现 GaAs 三量子点–腔杂化系统。
- [[materials-devices/charge-noise|电荷噪声]]：GaAs 中 $1/f$ 噪声的物理来源、测量方法与抑制策略在浅刻蚀与非掺杂结构中给出完整的因果链。
- [[materials-devices/interface-defects|界面缺陷]]：栅氧–半导体界面的 TLS 决定 GaAs 电荷比特的 $T_1$ 与 $T_2^*$ 下界，与核自旋噪声是两个独立的退相干通道。
- 同族体系：[[materials-devices/silicon-mos|Si-MOS]] 与 [[materials-devices/silicon-sige|Si/SiGe]] 在晶格失配与核自旋上与 GaAs 形成互补；[[materials-devices/strained-germanium|应变锗空穴平台]] 与[[materials-devices/germanium-hut-wire|锗棚顶纳米线]] 走另一条强自旋轨道 + 全电控路线。

## 延伸阅读

- T. Ando, A. B. Fowler, and F. Stern, "Electronic properties of two-dimensional systems", *Reviews of Modern Physics* (1982). [DOI: 10.1103/RevModPhys.54.437]
- R. Hanson, L. P. Kouwenhoven, J. R. Petta, S. Tarucha, and L. M. K. Vandersypen, "Spins in few-electron quantum dots", *Reviews of Modern Physics* (2007). [DOI: 10.1103/RevModPhys.79.1217]
- J. M. Elzerman, R. Hanson, L. H. W. van Beveren, B. Witkamp, L. M. K. Vandersypen, and L. P. Kouwenhoven, "Single-shot read-out of an individual electron spin in a quantum dot", *Nature* (2004). [DOI: 10.1038/nature02693]
- D. J. Reilly et al., "High-fidelity readout of an electron spin in a semiconductor quantum dot via single-shot measurement and dynamic nuclear polarization", *Nature* (2008). [DOI: 10.1038/nature06482]
- J. R. Petta, A. C. Johnson, J. M. Taylor, E. A. Laird, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard, "Coherent manipulation of coupled electron spins in semiconductor quantum dots", *Science* (2005). [DOI: 10.1126/science.1116955]
- M. D. Reed et al., "Reduced sensitivity to charge noise in semiconductor spin qubits via symmetric operation", *Physical Review Letters* (2016). [DOI: 10.1103/PhysRevLett.116.110402]

## 论文依据

- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 12–13：调制掺杂 GaAs/AlGaAs 异质结结构（10 nm GaAs 盖帽、50 nm AlGaAs 隔离、20 nm 掺 Si AlGaAs 重掺杂层、15 nm AlGaAs 缓冲、500 nm GaAs 基底）、Si 掺杂浓度 $\sim 7\times 10^{17}\ \mathrm{cm^{-3}}$、2DEG 形成机理与能带弯曲、距表面约 90 nm。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 14–15：传统 GaAs 栅极电控量子点的结构（欧姆接触、肖特基门电极、QPC 通道）与传统点 $T_1\sim 10\ \mathrm{ns}$、$T_2^*<1\ \mathrm{ns}$ 的退化时间。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 16–18：1.4.1–1.4.2 节系统给出常相互作用模型 $U(N)$、$\mu(N)$ 公式、库仑阻塞条件 $\mu(N-1)<\mu_D<\mu_S<\mu(N)$ 与库仑菱形定义，$C_G=e/\Delta V$、$\alpha=1/(1/k_1+1/k_2)$ 的提取方法。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 53–57：浅刻蚀量子点的湿法刻蚀工艺（$\mathrm{H_2SO_4:H_2O_2:H_2O=1:25:300}$，$\sim 5\ \mathrm{nm/s}$，刻蚀 15 s，深度 70–80 nm）、与同片传统点的 1/f 噪声对比及电荷噪声下降一个数量级的实验证据。
- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 68：浅刻蚀量子点库仑菱形图，$37.1\ \mathrm{Hz}$、$20\ \mu\mathrm{V}$ 激励测得 $\alpha=0.05\ \mathrm{meV/mV}$。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 67–68：电子型非掺杂双层栅极 GaAs 双量子点结构（100 nm 氧化铝、120 nm 斜蒸发铝顶栅）、2DEG 在表面下约 45 nm 形成、范德堡测量 2DEG 面密度与迁移率、单量子点库仑菱形图。
- [[sources/you-jie-2016|尤杰 2016]]，PDF p. 80：非掺杂 GaAs 双量子点的电荷噪声级别 $0.55$–$1.4\ \mu\mathrm{eV}$，与浅刻蚀点相当，证明移除掺杂层确实抑制电荷噪声。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 81–82：电荷稳定相图、耦合强度 $2t_c$ 随门电极电压从 $25\ \mu\mathrm{eV}$ 调节到 $120\ \mu\mathrm{eV}$、电子温度 $\sim 300\ \mathrm{mK}$（base 250 mK）以及 DiCarlo 模型的拟合公式 5-1。
- [[sources/you-jie-2016|尤杰 2016]]，PDF pp. 75–80：非掺杂 GaAs 双量子点中的光子辅助隧穿实验，$T_1\approx 15\ \mathrm{ns}$、$T_2^*\approx 330\ \mathrm{ps}$，与掺杂型结果相近；绝缘层微波加热把电子温度抬到约 280 mK。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF pp. 16–17：典型 GaAs/Al<sub>0.3</sub>Ga<sub>0.7</sub>As 异质结层结构与 2DEG 形成（三角势阱，距表面 90–100 nm）、4.2 K 下迁移率 $10^5$–$10^6\ \mathrm{cm^2\,V^{-1}\,s^{-1}}$。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF pp. 17–18：全电控量子点的肖特基接触、平行导通判据与 Hall bar 甄别方法、典型 2DEG 密度与迁移率、量子点横向尺寸 $\sim 200\ \mathrm{nm}$。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF p. 54：经验杠杆臂参考值——plunger gate 0.05、barrier gate 0.1；电子温度测量方法（库仑峰半高宽反推）。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF pp. 56–59：GaAs 双量子点上光子辅助隧穿实验（$J_n^2(\alpha)$ 强度）、至多 14 阶光子过程、LZS 干涉以及电荷态弛豫时间 $T_1\approx 8\ \mathrm{ns}$。
- [[sources/shang-runan-2014|尚汝南 2014]]，PDF p. 68：双电荷比特 GaAs/AlGaAs 样品材料参数（电子密度 $2.0\times 10^{11}\ \mathrm{cm^{-2}}$、迁移率 $6\times 10^4$、2DEG 距表面约 100 nm）。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 22–23：GaAs/AlGaAs 异质结生长顺序与三角势阱形成，2DEG 位于异质结表面下 30–200 nm 单一平面，迁移率最高达 $1.5\times 10^5\ \mathrm{cm^2/Vs}$。
- [[sources/zhou-cheng-2013|周诚 2013]]，PDF pp. 70–71：低温经典霍尔效应测量 2DEG 面密度与迁移率，本组晶圆批次典型值表（批次 #28 $3.2\times 10^{11}$/1.5$\times 10^5$、#34 $2.0\times 10^{11}$/0.6$\times 10^5$、#35 $3.0\times 10^{11}$/3.2$\times 10^5$、#36 $2.4\times 10^{11}$/1.5$\times 10^5$）。
- [[sources/han-tianyi-2017|韩天一 2017]]，PDF pp. 17–18：GaAs/AlGaAs 异质结能带与 2DEG 形成原理、电容模型 $C_\Sigma=113\ \mathrm{aF}$ 与 $E_C=1.5\ \mathrm{meV}$ 实测。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 7–8：GaAs/AlGaAs 多电荷量子比特的强电容耦合与受控逻辑非门、Toffoli 门操作实现两比特/三比特逻辑门。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 21–22：1.2.3 节 GaAs 中二维电子气的形成与异质结能带图、Si 掺杂 N 型 Al<sub>0.3</sub>Ga<sub>0.7</sub>As 与 GaAs 带隙差 $\Delta E_g=0.37\ \mathrm{eV}$、导带偏移 $\Delta E_C$。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 75–77：双电荷比特四量子点哈密顿量 (4.5)–(4.6)、CROT 与 CNOT 的参数条件 $\Delta/J=1$ 与 $|\varepsilon_2|=\sqrt{2}\Delta/2$。
- [[sources/yu-guodong-2016|余国栋 2016]]，PDF pp. 99–104：三电荷比特四量子点结构（Thalineau 对称方案、本组线性排列）、比特 1、2、3 之间的耦合能 $J_{12}$、$J_{13}$、$J_{23}$，以及 Toffoli 逻辑门的静态演示。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF pp. 12–13：GaAs/Al<sub>0.3</sub>Ga<sub>0.7</sub>As 异质结结构、2DEG 形成位置、电子与约百万核自旋的超精细耦合。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF p. 41：GaAs 中动力学解耦将 $T_2$ 延长到 $0.87\ \mathrm{ms}$ 的实验依据。
- [[sources/chen-baobao-2017|陈宝宝 2017]]，PDF p. 51：最佳拟合 $g=-0.35$ 用于分析实验中的 Zeeman 劈裂。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF p. 16：GaAs/AlGaAs、Si/SiGe 等体系作为门控量子点的简要对比。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF p. 22：腔–量子点耦合强度 $g=\beta\omega_r\sqrt{Z_r/(\pi\hbar)}$，腔阻抗 $Z_r$ 提升到 kΩ 量级后耦合大幅增强。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 41–42：GaAs/AlGaAs 衬底上 SQUID 阵列反射腔（$Z_r\sim 1\ \mathrm{k\Omega}$、$\kappa/2\pi\sim 30$–$60\ \mathrm{MHz}$）与双量子点的耦合样品工艺、湿法刻蚀掉腔区域 2DEG 以减少耗散；NbTiN 透射腔阻抗提升到 $2\ \mathrm{k\Omega}$、$\kappa/2\pi\approx 11\ \mathrm{MHz}$。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 70–71：GaAs 三量子点自旋哈密顿量中两个环境因素（核自旋场 $g^*\mu_B B_\mathrm{nuc}/h\approx 13$–$40\ \mathrm{MHz}$、温度 $k_B T/h\approx 1\ \mathrm{GHz}$）的取舍。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF pp. 77–78：周期驱动 GaAs 双量子点在电声相互作用帮助下实现粒子数反转，腔幅值增益约 1.16。
- [[sources/gu-sisi-2023|顾思思 2023]]，PDF p. 106：声子谱密度函数 $J(\omega)$ 与电声相互作用 $V$ 在 Floquet 态动力学中的作用。