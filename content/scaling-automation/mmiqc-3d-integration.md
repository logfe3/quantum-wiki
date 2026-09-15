---
title: 多层微波集成量子电路与三维集成
description: 用微加工腔、超导晶圆键合与多层布线把 transmon 集成为立体量子电路（MMIQC），解决规模化布线与隔离的工艺路线。
aliases:
 - MMIQC
 - 微加工集成量子电路
 - 三维集成量子电路
 - multilayer microwave integrated quantum circuit
tags:
 - 扩展与自动化
 - 三维集成
 - 超导工艺
 - 电路 QED
date: 2026-09-15
source: QAtlas
qatlas_id: qa_01m0qv5etenmdk1tey9p90h2x5
source_updated: 2026-09-15T05:49:25Z
---

<div class="entry-lead">平面电路的引线都从芯片边缘走，比特一多就互相干扰；把电路"立起来"——微加工腔做屏蔽隔离、超导晶圆键合做层间连接、多层布线做信号分配——就是多层微波集成量子电路（MMIQC）。首个含 transmon 的演示器件做到了：微加工存储腔 34.3 µs 寿命（单光子能量下 Q 值 200 万）、g/2π=49 MHz 的强色散耦合——立体化不牺牲相干性。</div>

## 物理图像：从平面到立体

[[circuit-qed/circuit-quantum-electrodynamics|cQED]] 的平面工艺（共面波导+比特在同一层）在几十个比特后撞墙：输入输出引线拥挤、元件间串扰随密度上升、屏蔽困难。**3D 集成**的思路是把成熟的微波工程工艺搬到量子电路：微机械加工的立体腔（micromachined cavity）兼做**量子存储**与**屏蔽外壳**（防止串扰）；多层晶圆用**超导键合**垂直互连，信号走立体布线不再挤在同一平面。这继承了 3D cQED（立体腔的高 Q 值）与平面工艺（光刻可扩展性）各自的优点。

垂直化的收益是三重的。**布线维度**：平面电路的引线全部从芯片边缘引出， Rent 规则的引脚墙随比特数指数收紧（见[[scaling-automation/cryo-electronics|低温电子学]]的同样分析）；立体电路让信号在层间垂直分配，边缘引线只保留必要的输入输出。**隔离维度**：每个微加工腔天然是一块法拉第屏蔽——腔与腔之间的串扰被金属壁物理隔断，不再依赖平面设计的频率规划。**存储维度**：立体腔的模体积大、表面参与比低，单光子 Q 值可以做得很高——这正是[[circuit-qed/bosonic-cqed|玻色编码]]需要的长寿命存储。

## 首个 MMIQC 器件：构型与参数

多模色散系统的有效哈密顿量（含任意数量的模）为

$$
\frac{H}{\hbar}=\sum_i\omega_i a_i^\dagger a_i-\sum_{i\neq j}\chi_{ij}\,a_i^\dagger a_i\,a_j^\dagger a_j-\sum_i\frac{\alpha_i}{2}a_i^{\dagger2}a_i^2,
$$

其中每个模的跃迁频率为 $\omega_i$、非谐性为 $\alpha_i$（transmon 最大），模对之间以色散移强度 $\chi_{ij}$ 相互作用——MMIQC 的双腔+比特器件就是这一多模框架的最小实例。

Brecht 等人演示的**双腔单比特** MMIQC 基本单元：

- **微加工存储腔**：单光子能量下寿命 34.3 µs、品质因子 **200 万**——超导晶圆键合是关键工艺（键合界面不引入显著损耗）；
- **transmon 集成**：光刻图形化的 transmon 嵌入微加工腔，$T_1=6.4\ \mu s$、$T_2^{\mathrm{Echo}}=11.7\ \mu s$——首个进入微加工立体腔的相干比特；
- **耦合参数**：比特-腔色散耦合 $\chi_{q\mu}/2\pi=-1.17$ MHz、JC 相互作用强度 $g/2\pi=49$ MHz——**强色散区**（$\chi>\kappa$）的 cQED 操作轻松达成。

比特-腔耦合用**电场图像**与电路模型双路描述：与平面/3D 电路的偶极天线构型不同，微加工腔的极端纵横比（晶圆厚度远小于腔面尺度）不允许传统伸入式天线——改为把电路光刻在**腔壁**上，让图形化导体的电磁场与腔模直接耦合。 specialised 几何（比特电容经腔壁开窗伸入）使电场主要集中在耦合缝，几何参数直接控制 $g$。

![[assets/figures/mmiqc-3d-integration/558d43dbc6a829dffc522f4e3f082637916424863a6059a39ee7e1dd2e240c0d.jpg]]

*MMIQC 器件结构：光刻图形化的 transmon 与两个微加工腔集成——多层硅片经光刻、刻蚀与金属键合构成立体电路，比特电容经腔壁开窗与腔场耦合。图源：Brecht et al. (2016)，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/fe980a574306647815ff758b48e8c69a1a03fadf9de774304675dbb24c24163f.jpg]]

*超导晶圆键合的演示：微加工存储腔在单光子能量下 34.3 µs 寿命（Q=2×10⁶）——键合界面不成为损耗瓶颈，是 MMIQC 路线可行性的核心验证。图源：Brecht et al. (2016)，Fig. 2。*

```mermaid
flowchart LR
  A[平面 cQED 极限: 布线拥挤/串扰] --> B[3D 集成思路]
  B --> C[微加工腔: 存储+屏蔽]
  B --> D[超导晶圆键合: 层间互连]
  B --> E[多层布线: 信号立体分配]
  C --> F[MMIQC 基本单元: 双腔+比特]
  D --> F
  E --> F
  F --> G[验证: Q=2M / T1=6.4µs / g=49MHz]
  G --> H[可扩展到复杂立体电路]
```

## 设计工具链与扩展终点

**3D 电磁仿真的设计验证**：立体电路的参数（耦合 $g$、色散移 $\chi$、腔频 $\omega_r$）不再能靠平面经验公式估计——InductEx 这类三维电磁场求解工具（原为 RSFQ 电路开发）被系统用于超导比特版图的参数提取：读出操作的两比特芯片仿真覆盖全部无源结构，设计参数（电感、电容、耦合）从版图直接数值提取，闭合"设计→仿真→制造→测量"的验证环。

**扩展终点：表面码阈值**：MMIQC 的立体化终点是容错表面码处理器——那里对门保真度的定量要求由 Corcoles 等人的阈值实验标定：五比特超导芯片上单比特门保真度 **99.4%**、两比特 CZ 门 **99.0%**，均超过当时表面码阈值估计的下限；重复测量（repetition code）演示了逻辑态在多次纠错循环中的稳定。从 MMIQC 基本单元到表面码处理器，中间隔着的是布线密度、串扰控制与工艺一致性——三维集成正是针对这三者的路线。

![[assets/figures/mmiqc-3d-integration/e3f4f9cb4760274b6fa866aa2215f3ab3e481fac9c0475346c66b0b6c6b4fa3d.jpg]]

*InductEx 仿真流程：两比特芯片读出操作的三维电磁仿真——超导版图的全部无源结构（谐振腔、馈线、耦合电容）经数值场求解提取设计参数。图源：InductEx 分析报告（2023），Fig. 1。*

![[assets/figures/mmiqc-3d-integration/8c6e6b43bbbf245dc6026695530370075cfe3ca26e6e1cef2201fb881c231482.jpg]]

*表面码阈值实验的芯片架构：集成约瑟夫森量子电路的光学照片——五比特方形阵列（数据比特+测量比特），表面码的最小重复单元。图源：Corcoles et al. (2014)，Fig. 1(a)。*

![[assets/figures/mmiqc-3d-integration/18eb41349344d3ceb340650fb7806a1f1e43cc01da771e2ef2a90b21120a8dfd.jpg]]

*CZ 门的物理与随机化基准：两比特门的频率轨迹与保真度测量——99.0% 的 CZ 保真度超过表面码阈值要求，为超导平台"可用于容错计算"给出最早的定量证据。图源：Corcoles et al. (2014)，Fig. 3。*


**倒装芯片（flip-chip）平台**是三维集成的另一形态：两块芯片面对面键合，比特芯片与读出芯片分层。多悬浮（multifloating）transmon 设计配合**开孔（apertures）工艺**缓解 TLS 损耗——悬浮构型减少比特电容与损耗衬底的接触面积，开孔切断衬底中的 TLS 参与通道。

![[assets/figures/mmiqc-3d-integration/6374d86732e41fc24bcb3d319e78369cc1480c99acbbebfe0328ee48b1214a77.jpg]]

*3D 倒装芯片平台的多悬浮 transmon：两芯片面对面构型，悬浮比特设计+开孔工艺缓解 TLS 损耗。图源：IEEE LMWT (2025)，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/eb5b940f2bef4fc94bf248c33fb9b1dd32de115bb25bb0b882e91f2b95830e25.jpg]]

*建模与分析：悬浮比特的电磁仿真与相干参数预测。图源：IEEE LMWT (2025)，Fig. 2。*

**SQuADDS 设计数据库**把单工具扩展为系统化数据基础设施：经过验证的超导比特/谐振腔设计参数库（实验对照校准）+ 标准化仿真工作流——设计者按目标参数检索已验证构型、仿真确认、再与库内实验数据对照，设计不再是每次从零开始。开源数据库+可复现工作流让"设计→仿真→制造→测量"的闭环成为社区共享资源。

![[assets/figures/mmiqc-3d-integration/0078335b5c73b83d151a29e828553c7ae6f4d3824bccc8bcc978f8be114d6542.jpg]]

*SQuADDS 工作流总览：验证设计数据库的检索-仿真-对照流程——设计参数从已验证构型出发而非从零开始。图源：Shanto et al. (2023)，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/75458dd85c95a659640b94a483f72cf54568e1fe32824365eac3c8d1b8a7a07f.jpg]]

*仿真验证示例：谐振腔线宽 $kappa$ 随仿真收敛参数的变化——数据库内置的收敛性检查保证设计参数可靠。图源：Shanto et al. (2023)，Fig. 2(a)。*

**QEC 码仿真框架**补全设计工具链的第三块：SQuADDS（器件设计库）+ InductEx（版图仿真）+ **qec_code_sim**（纠错码效果估计）——开源 Python 框架把超导比特噪声模型与 QEC 码仿真对接：给定硬件噪声参数（门错误率、测量错误、相关错误），估计各种码（表面码、重复码等）的逻辑错误率——编码选择与硬件参数之间的连接件。

![[assets/figures/mmiqc-3d-integration/0197144be9149d1dbfa85c26ea45ea6d0f82e93ad293bfb2831c636b345ccfc9.jpg]]

*qec_code_sim 框架：噪声模型→码仿真→逻辑错误率估计——硬件参数与编码选择的连接。图源：arXiv:2402.06745，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/a99abf8a0ddf184ae1b7b80e941d1987ef974f9d5d7037e89aa16119088e2742.jpg]]

*码效果对比示例：不同码在同一噪声模型下的逻辑错误率——编码-硬件协同设计的量化工具。图源：arXiv:2402.06745，Fig. 2。*

**机械设计自动化**把设计工具链推向智能化：连续变量量子系统的动力学不直观、暴力数值优化代价高——自动化设计空间探索（参数化电路族+目标函数引导的搜索）直接产出"受保护"的比特设计（错误率指标作为优化目标）。从 SQuADDS 的参数库检索到机械设计的自动搜索，设计范式的递进。

![[assets/figures/mmiqc-3d-integration/38761e65bab614d968e8f2936f03691c2ce23eaae79e4594f1b70b69887f0d85.jpg]]

*机械设计自动化：参数化电路族+目标函数搜索——"保护"成为可优化的设计目标。图源：arXiv:2403.03451，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/fac42d3abe968caa06fb10c4978cb1d0cbf1c593ec05581adb9f0aca3acc99ff.jpg]]

*自动设计产出的器件：搜索找到的保护比特构型——与人工设计的对照。图源：arXiv:2403.03451，Fig. 2。*

**百万比特的模块化路线图**：容错量子计算机需要百万物理比特——单芯片不可行，模块化是必然：芯片（千比特）→ 模块（万比特）→ 机架（百万比特）的层级扩展。每层的接口（量子互连、经典通信、热管理）定义其潜力与限制；模块化的量化分析（I/O 密度、互连保真度、冷却功率的层级预算）给出路线图的工程约束——MMIQC 的终极愿景由此定界。

![[assets/figures/mmiqc-3d-integration/babc1e590b5ef60c2044ad6d1408a291b7d71db334a3da7a3d03846c70c93293.jpg]]

*模块化层级路线图：芯片→模块→机架——每层接口（量子互连/经典通信/热管理）定义潜力与限制。图源：arXiv:2406.06015，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/95de3fdcd73f606f5b36b50cd3a8401437feb183c05571ef6612a0d3cc2ff242.jpg]]

*百万比特的工程约束：I/O 密度、互连保真度、冷却功率的层级预算——模块化的量化边界。图源：arXiv:2406.06015，Fig. 2。*

**即插即用的模块化实现**：高效率即插即用超导比特网络——模块的物理连接层（对照百万比特路线图的理论层）：模块间的高效耦合（量子态传输保真度）与快速更换能力，把"模块化"从架构图推进到工程实物。

![[assets/figures/mmiqc-3d-integration/dc801e3a1f993628b2020720590a63764981a7acf44c236fddeea6d0ab944182.jpg]]

*即插即用模块网络：模块间的物理连接层——高效耦合与快速更换。图源：arXiv:2407.16743，Fig. 1。*

![[assets/figures/mmiqc-3d-integration/6bb76ae3b75d4dd5b1a68c10e7710d4329bae773defaddca816bd487ef29a479.jpg]]

*模块间传输效率：量子态在模块间的传输保真度。图源：arXiv:2407.16743，Fig. 2。*

## 与其他概念的关系

- [[scaling-automation/cryo-electronics|低温电子学]]管"从室温到芯片"的垂直链路，MMIQC 管"芯片内部"的立体化——两者共同构成扩展的封装维度。
- [[circuit-qed/bosonic-cqed|玻色 cQED]]是微加工腔的天然"客户"：高 Q 立体腔正是猫态/GKP 码需要的长寿命存储，MMIQC 为玻色编码提供可扩展的硬件底座。
- 与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]的平面路线互补：一个在"耦合强度"维度提升（$g\propto\sqrt{Z_r}$），一个在"隔离与布线"维度提升。
- [[scaling-automation/quantum-dot-array|量子点阵列]]同样面临布线墙——半导体侧的 3D 集成（如背面互连）与超导 MMIQC 的工艺思想相通。

## 参考文献

- Brecht, T., Chu, Y., Axline, C., Pfaff, W., Blumoff, J. Z., Chou, K., Krayzman, L., Frunzio, L., & Schoelkopf, R. J. (2016). *Micromachined integrated quantum circuit containing a superconducting qubit*. [arXiv:1611.02166](https://arxiv.org/abs/1611.02166)
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
