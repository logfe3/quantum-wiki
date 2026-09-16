---
title: TiN/AlN 全氮化物超导组件
description: 用 TiN 电极与 AlN 势垒构建全氮化物约瑟夫森结与谐振腔的 CMOS 兼容材料平台：临界电流随 AlN 厚度从 150 µA 压到 2.5 µA，TiN 谐振腔损耗角低至 1.5×10⁻⁶。
aliases:
 - 全氮化物超导比特
 - TiN/AlN/TiN 结
 - all-nitride qubit
 - TiN 超导组件
 - 氮化物约瑟夫森结
tags:
 - 超导量子比特
 - 材料
 - 工艺
date: 2026-09-16
source: QAtlas
qatlas_id: qa_01m0qvgwmzdv38r2aad11pkkdh
source_updated: 2026-09-04T19:02:34Z
---

<div class="entry-lead">主流 transmon 的 Al/AlO_x/Al 结有两块心病：无定形氧化铝势垒是 TLS 的温床，铝在稀 HF 里的化学不稳定性又卡住了工艺窗口。全氮化物路线把电极换成化学惰性的 TiN、势垒换成溅射 AlN——全部步骤（光刻、溅射、反应离子刻蚀）可平移到硅晶圆级 CMOS 工艺。TiN 谐振腔内品质因子已进入 10⁶ 区间，TiN/AlN/TiN 结的临界电流可由 AlN 厚度在 150 µA 到 2.5 µA 间调谐。</div>

## 材料动机

[[superconducting-qubits/transmon-qubit|Transmon]] 的主流材料体系（Nb/Al/AlO_x）中，无定形介质界面的两能级系统是主导损耗（见[[superconducting-qubits/surface-tls-loss|表面 TLS 损耗]]）；同时 Al 在 HF 中不稳定，限制了与其他工艺步骤的组合。TiN 的优势有三：

- **化学惰性**：室温抗氧化、耐 HF，与 CMOS 后端工艺兼容；
- **低损耗**：蓝宝石上 TiN 膜的 transmon 已演示 300 µs 寿命、品质因子逼近 8×10⁶；
- **高动力学电感**：可缩小元件版图足迹（另见[[circuit-qed/superinductance|超电感]]与[[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]对高动力学电感材料的利用）。

此前全氮化物结多用 NbN 电极；以 TiN 为电极、溅射 AlN 为势垒的完整工艺流与定量表征是本词条主题（Schoof et al. 2024）。

## 工艺流程

![[assets/figures/tin-aln-qubit-components/schoof2024-fig1-fabrication.jpg]]

*TiN/AlN/TiN 结与 TiN 谐振腔的制备与成像：(a) 分步工艺示意——硅片 BOE 清洗、TiN 反应溅射、光刻/RIE 图形化、AlN 势垒溅射与原位 TiN 顶电极沉积；(b) 制成结的 SEM 细节；(c) 谐振腔与馈线的截面尺寸示意；(d) 400 °C/2.5 µbar 工艺谐振腔芯片的激光显微像，深色直线为改善地面板等电位的键合丝桥。图源：Schoof et al. (2024), Fig. 1。*

4 英寸高阻 Si(100) 芯片经丙酮/异丙醇超声与 BOE 7:1 清洗（氢终端化硅面）后：反应溅射 120 nm TiN 膜（温度/压强为系统变量）→ 光刻 + RIE 图形化谐振腔或底电极条纹（4 µm 宽、80 µm 长）→ 再次 BOE 去除 TiN 表面氧氮化物 → 溅射 AlN 势垒（50 W、11 µbar、10Ar/15N₂，沉积速率 0.99±0.03 nm/min，AFM+椭偏仪双重标定）→ **不破真空**原位沉积 60 nm TiN 顶电极 → 顶电极图形化并轻微过刻入底电极以拉开边缘间距、降低短路风险。

## TiN 膜与谐振腔性能

![[assets/figures/tin-aln-qubit-components/schoof2024-fig2-material-properties.jpg]]

*材料特性与性能指标：(a) 不同溅射条件下 120 nm TiN 膜的归一化电阻-温度曲线——Tc 随溅射温度升高、随压强降低；(b) AlN 溅射厚度（红）与干法刻蚀深度（黑）随时间的 AFM 标定；(c) 100 mK 下谐振腔内品质因子 Q_i 随平均光子数的依赖（各溅射参数 5–8 个谐振腔平均）——高温低压溅射的 Q_i 更高。图源：Schoof et al. (2024), Fig. 2。*

四组溅射条件下 $T_c$ 落在 4.5–4.9 K（400 °C/2.5 µbar 最高 4.9 K；不确定度 ±0.03 K 由升降温回滞宽度估计）。100 mK 下谐振腔损耗角

$$
\delta_i = 1.5\text{–}6.2\times10^{-6},
$$

其中 400 °C/2.5 µbar 膜最优——且在空气中老化三天后仍显著优于 4 µbar 对照（后者为 HF 浸后即测）。值得注意的是 $T_c$ 与 $Q_i$ 并不一一对应：高温溅射可能带来更大的多晶晶粒、更少的晶界缺陷，从而降低损耗。标准 TLS 模型拟合不完全收敛，因测量功率范围内损耗未饱和，$Q_i(T)$ 的系统测量留待后续。

## TiN/AlN/TiN 结的电学表征

![[assets/figures/tin-aln-qubit-components/schoof2024-fig3-junction-iv.jpg]]

*结的伏安特性随 AlN 势垒厚度变化（300 mK）：(a) 无势垒（连续 TiN 膜）——临界电流为击穿超导态的电流；(b) 仅 HF 浸底电极形成的原生势垒；(c) 2.0±0.2 nm AlN；(d) 5.0±0.5 nm AlN。各图上方标注 $I_C$ 以上斜率给出的正常态电阻。图源：Schoof et al. (2024), Fig. 3。*

0.3 K 下的 V-I 扫描给出（约半数器件短路，归因于微米级结面积内缺陷、后工艺静电放电等）：

| 势垒 | $I_C$ | $R_N$ |
| --- | --- | --- |
| 原生 TiO_xN_y | 150±10 µA | 230±20 Ω |
| AlN 2.0±0.2 nm | 5.7±0.2 µA | 80±10 Ω |
| AlN 5.0±0.5 nm | 2.5±0.1 µA | 180±10 Ω |
| AlN 10 nm | 无可测 $I_C$ | — |

两个已知厚度的 AlN 结上 $I_C$ 与 $R_N$ 反比标度，符合 Ambegaokar–Baratoff 关系的低温近似：

$$
I_C R_N \approx \frac{\pi\Delta}{2e},
$$

其中 $\Delta$ 是超导能隙、$R_N$ 是正常态电阻（此处取 $I_C$ 以上 V-I 斜率的粗略近似，忽略可能的并联本征分流电阻）。由此估出 $\Delta=0.29\pm0.01$ meV，与报道的 TiN 能隙（0.505 meV）同量级；原生势垒样品给出不合理的 22 meV，归因于未知厚度与不均匀性使该关系失效。V-I 曲线呈非回滞（过阻尼）约瑟夫森特征；但微米级 crossbar 结边缘的本征分流与超导针孔贡献尚不能完全排除。

## 现状与路线图

本工作是迈向功能比特的材料平台阶段成果：谐振腔 $Q_i$ 已进入 10⁶ 区间、结的 $I_C$ 可由势垒厚度调谐，但**尚无基于该体系的相干比特演示**。作者规划的下一步：$Q_i(T)$ 系统测量以研究 TLS 损耗饱和特性、优化氮含量与结晶性质、发展并表征功能单比特。判读这条路线的成熟度时可对照：全氮化物体系（NbN 电极）此前已有结演示，TiN/AlN 组合把 CMOS 晶圆级可平移性放在第一位。

## 与其他概念的关系

- [[superconducting-qubits/transmon-qubit|Transmon 量子比特]]：目标应用；$E_J\propto I_C$ 由 AlN 厚度设定；
- [[superconducting-qubits/surface-tls-loss|表面 TLS 损耗与湿法刻蚀]]：更换势垒/电极材料以减少 TLS 温床是与界面工程互补的材料侧路线；
- [[circuit-qed/microwave-resonator|微波谐振腔]]：TiN 谐振腔 $\delta_i\sim10^{-6}$ 是平台的读出腔基础；
- [[circuit-qed/high-impedance-resonator|高阻抗谐振腔]]与[[circuit-qed/superinductance|超电感]]：TiN 的高动力学电感是缩小版图的共用资源；
- [[superconducting-qubits/junction-defect-modes|约瑟夫森结强耦合缺陷模]]：AlN 势垒的缺陷谱密度与 AlO_x 的系统对比是后续关键实验。

## 参考文献

- Schoof, B., Singer, M., Lang, S., Gupta, H., Zahn, D., Weber, J., Tornow, M. Development of TiN/AlN-based superconducting qubit components. *IEEE Quantum Week / QCE 2024*（2024）. DOI: 10.1109/QCE60285.2024.00145；arXiv:2409.07227（QAtlas 缓存：2409.07227）。
> 完整文献库（含各篇站内全文页）见 [[references/index|参考文献库]]。
