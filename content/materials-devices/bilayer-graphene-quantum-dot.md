---
title: 双层石墨烯量子点
description: 用垂直位移场打开带隙、以栅极在双层石墨烯中定义的量子点，兼具可调谷 g 因子与电子/空穴双极性操作。
aliases:
 - BLG 量子点
 - bilayer graphene quantum dot
 - 石墨烯量子点
 - 双层石墨烯双极性量子点
tags:
 - 材料与器件
 - 石墨烯
 - 能谷
date: 2026-09-15
source: QAtlas
qatlas_id: qa_01m23aegphy5x0bme24fy1bqbd
source_updated: 2026-09-09T17:25:31Z
---

<div class="entry-lead">单层石墨烯没有带隙，栅极一夹就漏；双层石墨烯（BLG）在垂直位移场下打开可调带隙，静电定义的量子点由此成为可能。ETH Zurich 的实验进一步展示了这一平台的两个独特旋钮：谷 g 因子随量子点尺寸在 20–90 之间连续可调，以及同一器件上电子点与空穴点经第一载流子态直接互变的双极性操作。</div>

## 平台与器件

石墨烯中载流子态是四重简并的：自旋二重 × 能谷二重（$K^+$、$K^-$）。要把这四个自由度做成可寻址的量子点能级，需要解决单层石墨烯无带隙的问题：势垒栅压下去，费米面只是被推过狄拉克点，横向限制不成立。双层石墨烯的解法是利用垂直位移场 $D$ 打开带隙——带隙 $\Delta_\mathrm{gap}$ 随 $|D|$ 增大，栅极下方的局部带隙把无栅区的费米面"夹"出输运禁区，势垒由此成型。

实验器件为 hBN 封装的 BLG，配石墨背栅 $V_\mathrm{BG}$ 与顶栅两组：分裂栅（split gates，间距 100 nm）与指栅（finger gates，宽 20 nm、中心间距 75 nm）。背栅与顶栅的联合作用同时调节费米能 $E_F$ 与栅下带隙 $\Delta_\mathrm{gap}$。三栅极几何（背栅 + 分裂栅 + 中间指栅作 plunger）即可实现：仅调两根栅压就能连续改变量子点的电子尺寸、点–引线隧穿耦合以及载流子极性。

## 能谱与谷 g 因子

少载流子区以库仑共振测量提取单粒子能谱：把 plunger 电压经杠杆臂换算成能量，再减去与磁场无关的充电能（取相邻能级在反交叉或零场处的最小间距为 $E_\mathrm{ch}$）。垂直磁场 $B_\perp$ 下，最低两个能级（$K^-$、$K^+$ 谷态）在低场区线性劈裂：

$$
\Delta E_{K^-,K^+} = g_v\,\mu_B\,B_\perp,
$$

其中 $g_v$ 是**谷 g 因子**（类比自旋 $g$ 因子定义，$\mu_B$ 为玻尔磁子、$B_\perp$ 为垂直磁场）——谷劈裂对磁场的线性斜率直接给出 $g_v$，在与第三能级交叉前读取。

![[assets/figures/bilayer-graphene-quantum-dot/blg-fig1-level-spectrum.jpg]]

*不同充电能（即不同电子尺寸）量子点的单粒子能谱：纵轴为相对第一能级的能量（已扣除充电能），横轴为垂直磁场 $B_\perp$；灰色线标出低场下 $K^-$/$K^+$ 两谷态的线性劈裂，斜率即 $g_v\mu_B$。充电能 $E_\mathrm{ch}=9.2\ \mathrm{meV}$（i）与 $4.8\ \mathrm{meV}$（ii）的两个点显示：更大的点（更小 $E_\mathrm{ch}$）有更大的 $g_v$。图源：Tong et al. (2025)，Fig. 1(a)。*

实验发现 $g_v$ 与量子点电子尺寸系统相关。尺寸由充电能标定：把量子点近似为嵌在 hBN/非晶 Al₂O₃ 混合介质中的圆盘电容器，自电容

$$
C = 8\,\varepsilon_r\varepsilon_0\,r \quad\Rightarrow\quad E_\mathrm{ch} = \frac{e^2}{C},
$$

其中 $r$ 是量子点半径、$\varepsilon_r$ 是等效相对介电常数。充电能从 $11.4\ \mathrm{meV}$ 降到 $4.1\ \mathrm{meV}$ 对应半径从 $24\ \mathrm{nm}$ 涨到 $67\ \mathrm{nm}$，而 $g_v$ 在同一区间从 20 涨到 90——**纯静电调控实现 4.5 倍的谷 g 因子调节**，且只需两根栅压。势垒栅压 $V_{L,R}$ 从负到正同时改变点尺寸与隧穿耦合：更正的势垒使 p–n 结更窄更陡、隧穿更透明，库仑峰更宽更高；更负则相反。

理论把 $g_v$ 及其尺寸依赖归因于 **Berry 曲率**效应（与石墨烯量子点接触中的机制同源）：小点在动量空间铺得开、态拾取的轨道磁矩有限，$g_v$ 小；大点的波函数被挤进 BLG 色散的三个"微谷"（mini-valleys）中，那里轨道磁矩最大，$g_v$ 随尺寸增长。浅限制势与大带隙都有利于进入后一区域。

![[assets/figures/bilayer-graphene-quantum-dot/blg-fig7-gv-vs-size.jpg]]

*理论模型：圆对称量子点中谷 g 因子随点尺寸的变化，以及最低点态 $\Psi$ 在动量空间的分布。小点动量空间支撑宽、$g_v$ 低；大点波函数挤入 BLG 色散的微谷（轨道磁矩最大处），$g_v$ 随尺寸上升。图源：Tong et al. (2025)，Fig. 7。*

## 双极性操作

BLG 量子点的另一独特能力是**双极性**（bipolar operation）：点内载流子可与引线同极性（n 型通道中的电子点），也可反极性（n 型通道中被负 plunger 栅压顶起的空穴点），后者的隧穿势垒由 p–n 结构成。固定背栅与分裂栅、扫 plunger 电压，可以连续观察到量子点从电子点到空穴点的转变：有限偏压测量中，占据数 0 的大菱形区（$V_M$ 从 $-5.2$ 到 $-5.6\ \mathrm{V}$）跨越带隙，其尺寸给出点内第一电子态与第一空穴态间隔约 $30\ \mathrm{meV}$——点内带隙的下界估计。两种极性的点都有清晰的库仑菱形与激发态，杠杆臂与充电能相近，说明几何相似。

![[assets/figures/bilayer-graphene-quantum-dot/blg-fig3-bipolar-diamonds.jpg]]

*双极性操作的库仑菱形：(a) 有限偏压下标注载流子占据数的菱形序列，占据数 0 的大菱形（$V_M=-5.2$ 至 $-5.6\ \mathrm{V}$）横跨带隙，给出约 30 meV 的第一电子–空穴态间隔；(b) 沟道顶视图：n 型沟道中空穴点（i）与电子点（ii）的形成方式，红/蓝/白分别为 p 型、n 型与带隙区。图源：Tong et al. (2025)，Fig. 3。*

双极性不只是演示：它允许在**同一器件、同一材料环境**中比较电子与空穴的能谱、g 因子与耦合参数，而无需更换异质结；对空穴自旋比特与[[qubit-control/hole-spin-qubit|空穴物理]]研究是天然对照组。器件几何还直接可扩展——增加指栅即成双量子点（论文用五根指栅演示了双点电荷稳定图），向[[fundamentals/double-quantum-dot|双量子点]]与阵列延伸的路径明确。

## 与其他概念的关系

- [[fundamentals/valley-splitting|谷劈裂]]：硅量子点的谷劈裂来自导带 $\Delta$ 谷的界面耦合（量级 10–1000 μeV、难调）；BLG 的 $K^\pm$ 谷劈裂由磁场下 $g_v\mu_B B$ 给出，且 $g_v$ 本身静电可调 4.5 倍——两种"谷物理"机制与调控手段完全不同，互为对照。
- [[fundamentals/two-dimensional-carrier-gas|二维载流子气]]：BLG 是继 GaAs/AlGaAs、Si/SiGe 之后的第三代二维平台，位移场开带隙替代了异质结带阶，介电环境（hBN）决定电容与充电能标度。
- [[fundamentals/charging-energy|充电能]]：既是尺寸的代理量（圆盘电容模型），也是单粒子谱提取的扣除项——本平台把"充电能 ↔ 点尺寸 ↔ $g_v$"串成一条可测链。
- [[qubit-control/hole-spin-qubit|空穴自旋量子比特]]：双极性操作让电子/空穴点在同一器件互变，为空穴比特的低功耗、正电压操作提供材料侧参照。
- [[fundamentals/semiconductor-quantum-dot|半导体量子点]]：BLG 点是"无宿主掺杂、全栅定义"的极限情形——所有限制（带隙、势垒、尺寸）都由静电场而非材料生长决定。
- [[readout-measurement/single-electron-transistor|单电子晶体管]]：单层石墨烯平台上量子点与 SET 电荷计可同材一次刻蚀集成（间距 50 nm、每电子约 30% 电导响应），是石墨烯量子点走向"无核自旋量子世界"固态比特的读出基本单元。

## 参考文献

- Tong, C., Garreis, R., Knothe, A., Eich, M., Sacchi, A., Watanabe, K., Taniguchi, T., Fal'ko, V., Ihn, T., Ensslin, K., Kurzmann, A. *Tunable Valley Splitting and Bipolar Operation in Graphene Quantum Dots* (2025). arXiv:2009.04337（QAtlas 缓存：2009.04337）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
