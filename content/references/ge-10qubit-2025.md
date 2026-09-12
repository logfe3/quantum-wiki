---
title: Robust and localised control of a 10-spin qubit array in germanium
description: 二维 10 比特锗空穴阵列：3–4–3 布局、局部控制与惊人的比特均匀性，单比特保真度高于 99%。
aliases:
 - ge-10qubit-2025
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">二维 10 比特锗空穴阵列：3–4–3 布局、局部控制与惊人的比特均匀性，单比特保真度高于 99%。</div>

> [!info] 文献信息
> V. John *et al.*, “Robust and localised control of a 10-spin qubit array in germanium”, Nature Communications **16** (2025).
> [arXiv:2412.16044](https://arxiv.org/abs/2412.16044) · [DOI:10.1038/s41467-025-65577-3](https://doi.org/10.1038/s41467-025-65577-3)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Valentin John<sup>1\*</sup>†, C´ecile X. Yu<sup>1</sup>†, Barnaby van Straaten<sup>1</sup>, Esteban A. Rodr´ıguez-Mena<sup>3</sup>, Mauricio Rodr´ıguez<sup>3</sup>, Stefan Oosterhout<sup>2</sup>, Lucas E. A. Stehouwer<sup>1</sup>, Giordano Scappucci<sup>1</sup>, Stefano Bosco<sup>1</sup>, Maximilian Rimbach-Russ<sup>1</sup>, Yann-Michel Niquet<sup>3</sup>, Francesco Borsoi<sup>1</sup>, Menno Veldhorst<sup>1\*</sup>

<sup>1</sup>QuTech and Kavli Institute of Nanoscience, Delft University of Technology, P.O. Box 5046, Delft, 2600 GA, Delft, The Netherlands.

<sup>2</sup>QuTech and Netherlands Organisation for Applied Scientific Research, Delft, 2628 CK, The Netherlands.

<sup>3</sup>Universit´e Grenoble Alpes, CEA, IRIG-MEM-L Sim, Grenoble, 38000, France.

\*Corresponding author(s). E-mail(s): V.John@tudelft.nl; M.Veldhorst@tudelft.nl; †These authors contributed equally to this work.

## Abstract

Quantum computers require the systematic operation of qubits with high fidelity. For holes in germanium, the spin-orbit interaction allows for in situ electric fast and high-fidelity qubit gates. However, the interaction also causes a large qubit variability due to strong g-tensor anisotropy and dependence on the environment. Here, we leverage advances in material growth, device fabrication, and qubit control to realise a two-dimensional 10-spin qubit array, with qubits coupled up to four neighbours that can be controlled with high fidelity. By exploring the large parameter space of gate voltages and quantum dot occupancies, we demonstrate that plunger gate driving in the three-hole occupation enhances electric-dipole spin resonance (EDSR), creating a highly localised qubit drive. Our findings, confirmed with analytical and numerical models, highlight the crucial role of intradot Coulomb interaction and magnetic field direction. Furthermore, the ability to engineer qubits for robust control is a key asset for further scaling.

## 1 Introduction

Semiconductor spin qubits have seen significant progress over the last few years, with four-qubit and six-qubit quantum processors demonstrated across diferent platforms and encodings [1–4]. In a drive to scale beyond these systems, larger quantum dot arrays have been explored showcasing charge tune-up in a 4 4 quantum dot array using a crossbar architecture [5], qubit characterisation of a two-dimensional 10-quantum dot array by coherent single spin shuttling [6], and demonstration of a linear array comprising 12 qubits [7].

Hole spin qubits in planar strained Ge/SiGe heterostructures emerged as a compelling direction that can ofer electrical control, fast Rabi driving, long coherence times, and absence of valley degree of freedom [8]. The strong anisotropy

a

of the g-tensor for germanium hole spins creates sweet spots and lines, where qubit quality is maximized [9–12]. However, these optimal locations are hard to predict and sensitive to magnetic field angle variations [13, 14], which difer across quantum dots due to device-specific and cooldowndependent potential landscapes. Optimizing qubit performance at a fixed magnetic field direction is thus crucial for consistent high-fidelity operation across many qubits.

Most experiments in germanium extensively focused on quantum dots with single-hole occupation [1, 6, 10, 15–20]. Interestingly, silicon metaloxide-semiconductor (SiMOS) devices experience increased Rabi driving eficiencies for electron spins when occupying higher orbital states, such as the p or d shells, rather than the s shell [21]. A key question, therefore, is understanding the role of hole occupancy and the impact of the driving gate on the performance and crosstalk of EDSR in buried quantum wells with spin-orbit interaction.

In this work, we investigate a two-dimensional 10-quantum dot device hosting 10 qubits, with two central qubits each connected to four diferent neighbours in four directions. We systematically evaluate the EDSR driving eficiency of each qubit for quantum dots occupied with one, three, and five holes, to assess how charge configuration influences driving mechanisms. This analysis is extended across all 22 available gates in the device for each qubit, which gives us insights about the locality and crosstalk of EDSR driving. Additionally to probe the variation in noise sensitivity in each configuration, we perform longitudinal spin-electric susceptibility (LSES) measurements by analysing the changes in resonance frequency as a function of gate voltages under diferent charge configurations which is closely related to the qubit coherence. Crucially, we find that it is possible to have systematic eficient driving with limited crosstalk when operating with three-hole occupancy using the plunger gate.

## 2 The two-dimensional 10-spin qubit array

Figure 1a displays our device, comprising 10 quantum dots (QDs) arranged in a 3-4-3 configuration, and four charge sensors located at the cardinal points of the array, similarly to the device layout described in Refs. [6] and [22]. In this work, we have fabricated the quantum device on $\mathrm { { a \ G e / S i G e } }$ heterostructure grown on a germanium wafer [23], exhibiting a high mobility of $3 . 4 ( 1 ) \times 1 0 ^ { 6 } ~ \mathrm { { c m ^ { 2 } / V s } }$ , indicating a uniform and lownoise potential landscape for quantum dot arrays [24]. The quantum dots are defined and operated using plunger and barrier gates, as illustrated in Figure 1b. A magnetic field of 41.4 mT, tilted approximately 2-3 degrees from the in-plane orientation [24], is applied to the system. This low magnetic field amplitude enables us to perform qubit control with arbitrary waveform generators at low frequencies up to 400 MHz without the need of IQ-modulation with additional microwave generators.

![[assets/figures/references/ge-10qubit-2025/f3bee043506b04171631869c1a4cf45bd6cc2e7b3c2c323f755c3e12c2dadce2.jpg]]

![[assets/figures/references/ge-10qubit-2025/b0be810fb503a1703a608638076906adc11ebdbb6b981a5faae687d139146397.jpg]]

![[assets/figures/references/ge-10qubit-2025/8f25bbbcb3030a92629f612a60747a8ee90458d7946d1ef8b4b527def4c3412e.jpg]]  
Infidelity (%)  
Fig. 1 A high-fidelity 10-spin-qubit array in germanium. a, A false-coloured scanning electron microscope image of a nominally identical device, with the 10 quantum dot plunger gates highlighted in orange and the twelve barrier gates shown in blue. Four single hole transistors labelled as N, E, W and S are located at the edge of the array. The 10 qubits are labelled as Q1-Q10. The applied magnetic field is 41.4 mT. The scale bar on the bottom right represents 500 nm. $\mathbf { b } ,$ Simplified gate layout of the quantum dot array where the plunger gates are labelled as P1-P10 and the barrier gates as B1-B12. c, Randomised benchmarking single-qubit gate infidelities with the corresponding charge occupation of the 10 quantum dots annotated.

The 10-QD array is tuned to a dense charge configuration, with an odd number of holes at each QD site, defining 10 qubits labelled Q1–Q10. Each qubit is initialised and readout pairwise using Pauli spin blockade with a nearby charge sensor [25, 26]. Figure 1c shows the occupation of each quantum dot in the initial tune-up, along with the corresponding single-qubit gate infidelity, all below 0.6%, obtained through randomized benchmarking [27]. An in-depth noise analysis detailed in Ref. [24] indicates that the qubit performance is bounded by a hyperfine-limited $T _ { 2 } ^ { * }$ of approximately 2 µs arising from the out-of-plane component of the magnetic field, which could be alleviated by using purified germanium [28]. We also demonstrate tunable exchange interactions between neighbouring qubit pairs (see Supplementary Note S5), realising a 10-qubit system with increased connectivity up to four nearest neighbours.

## 3 Qubit drive eficiency and tunability

This two-dimensional 10-qubit array provides a suficiently large and robust platform to gather a comprehensive dataset on the efects of varying qubit sites and hole occupancies while avoiding device-to-device variability. By systematically performing the measurement protocol shown in Figure 2a, we characterise the LSES and driving eficiency across all qubits with one, three, and five-hole occupancy.

These driving properties are intimately linked to the sensitivity of the g-tensor to the electrostatics and its environment [29, 30]. Indeed, Rabi oscillations are governed by modulation of the transverse component of the g-tensor through AC gate voltages, while the LSES measures the gate ability to tune the longitudinal component, which influences qubit coherence in the chargenoise-limited regime via $T _ { 2 } ^ { * } ~ \propto ~ 1 / \xi$ , with $\xi \ =$ $\sqrt { \sum _ { \mathrm { g a t e } } ( \partial g ^ { * } / \partial V _ { \mathrm { g a t e } } ) ^ { 2 } }$ [10, 30]. Here, the efective g-factor for a given magnetic field is expressed as $g ^ { * } = | { \bf g } { \vec { b } } |$ , with g representing the g-tensor and $\vec { b } = \vec { B } / | \vec { B } |$ the normalised magnetic field direction. ξ is the total g-factor susceptibility over all the gates of the device, assuming uncorrelated $\mathrm { g } _ { \mathrm { - } }$ -factor tunability between diferent gates. The interplay between driving eficiency and longitudinal susceptibility can be captured by a quality factor, defined as $Q = f _ { \mathrm { R a b i } } / ( A _ { \mathrm { R a b i } } \cdot \xi )$ , enabling identification of operational sweet spots and their dependence on hole configurations.

Figure 2b summarises qubit statistics collected across the 10 qubits for single and triple-hole occupations, visualizing their ratios in a boxplot. As the hole occupancy increases from one to three, both $g ^ { * }$ and ξ show minimal variation, while the plunger driving eficiency improves by a median factor of 3.6. With a modest median increase of 1.3 in ξ, the quality factor improves by a median factor of $2 . 5 ^ { 1 }$ . Notably, the whisker representing the Rabi frequency ratio for single- and triple-hole occupancies extends towards infinity, as no measurable driving of Q3 using the gate P3 was observed in the single-hole occupancy within the applied voltage amplitude range, which confirms the importance of investigating the gate dependence of EDSR in large qubit arrays.

The underlying data of the g-factor variability is visualised in Figure 2c across diferent hole occupancies and qubit sites. Considering the large g-tensor anisotropy, these data reveal fairly minimal relative variation in g-factors across 10 qubits within a single device and diferent hole configurations, with an average g-factor of 0.58 0.03. The small variability of the g-factor can be attributed to the slightly out-of-plane magnetic field, since the out-of-plane component of the g-tensor is much larger and varies much less relative to the in-plane principal g-factors.

Exemplary data for the central qubits, Q5 and Q6, which are measured across all three hole occupancies, are shown in Figure 2d. In the following, we refer to plunger drive when the qubit is driven with a plunger gate, and barrier drive when a barrier gate is used. The data show a distinct increase in qubit plunger drive as the hole occupation increases from one to three, while the contributions from the barriers remain approximately unchanged. However, increasing the hole occupation to five reverses this pattern, with the qubit plunger drive becoming significantly weaker while the barrier drives become stronger. The observed $g ^ { * } .$ -tunability patterns include barriers exhibiting both negative and positive $\partial g ^ { * } / \partial V _ { \mathrm { g a t e } }$ , but the relative positions of these barriers do not reveal clear trends across the full array, making it challenging to identify their origin. Two distinct patterns are notable though. Barriers along the diagonal often have approximately opposite values, while barriers at the top or bottom of the array often share the same sign. The $\partial g ^ { * } / \partial V _ { \mathrm { g a t e } }$ associated with the qubit plunger is always positive, but its magnitude is comparable to that of the associated barriers. These patterns are supported and explained by numerical simulations in Supplementary Note S12.

![[assets/figures/references/ge-10qubit-2025/28c84f85e803cc5a721e1dabe719019d1343a37568ba25b9185c69a23db03a5d.jpg]]  
Fig. 2 Statistical analysis of the 10-spin qubit arrray. a, Flow diagram of $g ^ { * }$ -tunability and driving eficiency extraction. After selecting one of the qubits, Q1-Q10, and looping over the one-, three-, and five-hole occupation, the $g ^ { * } -$ tunability and drive eficiencies are extracted sequentially for each of the 10 plunger and 12 barrier gates. For the $g ^ { * }$ -tunability each of the gates is scanned in the range of 8mV while sweeping the microwave frequency across the corresponding qubit frequency on a dedicated fixed qubit gate. By fitting the peak in the recorded signal, the frequency slope can by determined in MHz/mV, which can be converted into a g-factor slope in $1 / \mathrm { m V }$ . For the driving eficiency the amplitude is swept from 1 to 15 mV, while applying a microwave pulse on each of the gates. By performing a fast-Fourier transform and fitting the dominant frequency contribution with a linear $\operatorname { f i t } ,$ the driving slope in $\mathrm { M H z } /$ mV can be extracted. $\mathbf { b } ,$ Boxplots in Spear style containing the ratios of $g ^ { * }$ , LSES, driving eficiency, and quality factor in the three- and one-hole occupation. Each boxplot contains 9 data points with all 10 qubits except $\boldsymbol { \mathrm { Q 2 . ~ c , ~ } g ^ { * } }$ of all 10 qubits in the one-, three-, and five-hole occupation. d, $g ^ { * }$ -tunability and driving eficiency for qubit Q5 and Q6 as a function of all 10 plunger and 12 barrier gates. Each row corresponds to a diferent hole occupation of one, three, and five respectively.

The trend of increased top plunger driving eficiency from one to three holes is observed in eight of the nine measured qubits (Q2 has only been measured in the five-hole regime). The exception is qubit $\mathrm { Q 4 }$ , which exhibits a constant plunger drive eficiency from one- to three-hole occupation. This behaviour may be related to the small charging energy of the dot, resulting in a larger wavefunction that already enables eficient drive in the single-hole regime. The complete dataset for $g ^ { * } .$ -tunability and driving eficiency across all qubits and gates is provided in Supplementary Note S8 and S9. Overall, the three-hole regime is a more favourable regime for operation, as the driving mechanisms are more robust, with importantly no instances of zero driving, unlike in the one-hole regime.

## 4 Driving locality in extended qubit arrays

EDSR driving is commonly expected to be a local phenomenon due to the localized nature of the electric field [31, 32]. Here, we leverage the densely occupied 10-qubit system to quantify this assertion. To do so, we analyse the acquired data by focusing on the driving eficiency of each gate to each qubit. Specifically, we evaluate the driving locality when applying a microwave pulse to any of the 22 available plunger and barrier gates. In this analysis, we consider four distinct cases involving either barrier or plunger drive and either oneor three-hole occupation. The five-hole occupation is excluded in this study due to insuficient data across the array. For each driving gate, the corresponding target qubit is defined as the qubit closest to the driving gate.

In Figure 3, driving eficiency is categorised by the physical distance of each gate to each qubit. Independent of direction, we then define nearest neighbours based on this physical proximity. Driving eficiency is quantified by the averaged results for all n-th nearest qubits over all driving gates. Figure 3a–d present the Rabi driving eficiencies as boxplots up to the sixth nearest neighbour for both barrier and plunger drive, with a corresponding maximum physical distance of 550 nm in the device plane (all distances of the n-th nearest qubits and their ranks are listed in Supplementary Table S4 and S5). To evaluate drive locality, we express our data in terms of the normalized driving eficiency $f _ { \mathrm { R a b i } } / f _ { \mathrm { R a b i } } ,$ <sub>target</sub>, obtained by normalizing the Rabi driving eficiency relative to that of the target qubit. Lower normalized driving eficiencies for distant qubits indicate less cross-talk and more localized driving. For qubits located beyond the sixth nearest neighbour, driving eficiency falls below $0 . 0 1 \mathrm { M H z / m V }$ which is below the sensitivity of the measurement within the range of applied drive amplitudes. We generally observe an expected decrease in driving eficiency for larger distances in both oneand three-hole cases, for both plunger and barrier drives. The drop in mean driving eficiency from the first to the second nearest qubit is largest for the three-hole plunger drive and single-hole barrier drive.

To illustrate the impact of cross-talk, we project the measured results onto an extended densely populated 2D spin qubit array. When driving a target qubit with a specific gate, the n-th nearest qubits are colour-coded according to the mean of the normalized Rabi eficiency measured experimentally and presented in the boxplots of Figure 3a–d. This visualization highlights how much each qubit would be afected when driven using a plunger or barrier gate under single- and triple-hole occupations.

Figure 3e and g show the projected crosstalk for barrier driving. By design, barrier gates drive two nearest-neighbour qubits equally, resulting in pronounced cross-talk between them. While cross-talk is slightly stronger in the single-hole occupation, driving eficiencies are slightly lower. Barrier drive can still be advantageous compared to single-hole plunger drive, as the latter may yield negligible or zero driving eficiencies, necessitating large drive amplitudes and increasing normalized eficiencies for next-nearest neighbours. As shown in Figure 3f, the single-hole plunger drive induces noticeable efects on next-nearest qubits.

![[assets/figures/references/ge-10qubit-2025/c9f2b4db1d2771532947bc3f98af748ee2172cefaba6ac46dfcc4e15beaea54f.jpg]]  
Fig. 3 Rabi driving locality a–d, Boxplots depicting the Rabi driving eficiency for all gates up to the sixth nearest qubit with indicated mean (green line) and median value (orange line). Data are shown for (a) barrier drive in the singlehole occupation, (b) plunger drive in the single-hole occupation, (c) barrier drive in the three-hole occupation, and (d) plunger drive in the three-hole occupation. The colour of each boxplot represents the Rabi frequency normalized to that of the target qubit. e–h, Projection of the normalized Rabi frequency onto an extended, densely populated 2D spin qubit array. Data are shown for barrier drive in the single-hole occupation (e), plunger drive in the single-hole occupation (f), barrier drive in the three-hole occupation (g), and plunger drive in the three-hole occupation (h).

The three-hole plunger drive improves driving eficiency while reducing normalized driving eficiencies for next-nearest qubits. Unlike in the single-hole occupation, non-driving regimes are avoided entirely in the three-hole case. This configuration achieves minimal cross-talk while maintaining the highest driving eficiencies, making it here the most favourable driving scheme in terms of eficiency and cross-talk mitigation in a 2D array with dense occupation.

## 5 Modelling of single- and multi-hole quantum dots

The improvement of driving eficiency in the threehole regime can be well captured by a phenomenological model, including only the two lowest available orbital levels, which are spin doublets with spin $S _ { z } ~ = ~ \pm 1 / 2$ . In the weak interaction case, these states are gapped by an orbital energy $\mathcal { E } ,$ and are coupled by Coulomb interactions that provide an inter-orbital exchange tunnelling energy $| t | \ll | \mathcal { E } |$ . As the orbitals have diferent wavefunctions, these states also have diferent g-factors $g _ { 1 }$ and $g _ { 2 }$ . We define the diference in g-factors as $\delta g = ( g _ { 1 } - g _ { 2 } ) / 2$

This model is analogous to that of floppingmode qubits [33, 34] under the exchange of orbital and positional degrees, where the presence of an orbital state nearby significantly enhances driving eficiency. We find that the g-tensor of the ground state $g _ { e } \approx g _ { 1 } - t ^ { 2 } \delta g / 2 \mathcal { E } ^ { 2 }$ has two contributions: a single-particle term $g _ { 1 }$ and an interaction correction $\propto t ^ { 2 } / \mathcal { E } ^ { 2 }$ . The resonant Rabi frequency depends on the change of the g-tensor caused by the driving gate potential

$$
f _ {R} = \left| \vec {f} _ {R} ^ {S P} + \vec {f} _ {R} ^ {M B} \right|,\tag{1}
$$

and can be decomposed into the single-particle (SP) magnetic response $| { \vec { f } } _ { R } ^ { S P } | ~ \propto ~ \partial _ { V _ { k } } g _ { 1 }$ caused by an electric modulation of the single-particle gtensor and the many-body (MB) interaction efect $| \vec { f } _ { R } ^ { M B } | \propto \partial _ { V _ { k } } t ^ { 2 } / \mathcal { E } ^ { 2 }$ caused by the modulation of the hybridization. The prefactor $t ^ { 2 } / \mathcal { E } ^ { 2 } \ \propto \ \ell ^ { 2 }$ is highly sensitive to changes in the confinement potential that afects the dot size ℓ [35]. As a result, when the driving gate is the top plunger gate, $f _ { R } ^ { M B }$ dominates the response, therefore driving eficiency is improved. On the other hand, $t ^ { 2 } / \mathcal { E } ^ { 2 }$ is only weakly sensitive to electric fields that shifts the wavefunction, and thus when the driving gate is a side barrier gate, the manybody correction is negligible and the driving is only determined by $f _ { R } ^ { \check { S } P }$ , which is typically small for roughly circular dots, and is only enhanced for squeezed dot shapes [36]. More details of this model can be found in Supplementary Note S12.

In addition to the phenomenological model, we also perform full configuration interaction simulations based on the four-band Luttinger-Kohn model in both single- and triple-hole quantum dots that are in good agreement with our experimental results. In these simulations, we explore diferent dot parametrisations to reproduce the typical patterns arising from the LSES and EDSR data of each qubit to each gate (see Supplementary Note S12). This study shows the dependence of the drive eficiency on the magnetic field angle in both single- and triple-hole regimes. Particularly, the many-body term $f _ { r e s } ^ { M B }$ becomes negligible when the magnetic field is well-aligned in-plane (see Supplementary Note S12). This suggests that for fully in-plane magnetic fields, transitioning from single- to triple-hole occupation does not improve plunger drive eficiency.

## 6 Conclusions

In this work, we show that spin qubits can be configured in a two-dimensional array, with qubits connected up to four neighbouring qubits, and operated with high single-qubit gate fidelity. We have explored the driving of all 10 qubits, to understand the locality of EDSR and obtain best and robust driving conditions. Our findings demonstrate that the pronounced g-tensor anisotropy in germanium can be exploited to engineer a set of qubit properties by means of hole occupation in conjunction with the magnetic field direction. In particular, we demonstrate that a slight out-of-plane magnetic field can enable uniform g-factors and in the three-hole occupation result in reproducible and dominant plungerdriven Rabi frequencies. This regime shows particular promise for achieving highly localised and systematic qubit control, critical for scaling to multi-qubit systems. Our work also demonstrates the ability to engineer qubit properties in semiconductor qubit arrays and highlights the need to assess the qubit performance as function of magnetic field strength and angle, quantum dot shape, and hole occupancy, to tailor these parameters to the specific architecture.

## Acknowledgements

We acknowledge Floor van Riggelen-Doelman for support in the data analysis, Chien-An Wang for fruitful discussions and Sander de Snoo for software support. This research was supported by the European Union through the ERC Starting Grant QUIST (850641), the Horizon 2020 research and innovation programme under the Grant Agreement No. 951852 (QLSI) and the Horizon Europe Framework Programme under grant agreement No. 101069515 (IGNITE). This research was sponsored in part by the Army Research Ofice (ARO) under Award No. W911NF-23-1-0110. The views, conclusions, and recommendations contained in this document are those of the authors and are not necessarily endorsed nor should they be interpreted as representing the oficial policies, either expressed or implied, of the Army Research Ofice (ARO) or the U.S. Government. The U.S. Government is authorized to reproduce and distribute reprints for Government purposes notwithstanding any copyright notation herein. F.B. acknowledges support from the NWO through the National Growth Fund program Quantum Delta NL (grant NGF.1582.22.001). M.R-R. acknowledges support from NWO under Veni Grant (VI.Veni.212.223)

## Author contributions

V.J., C.X.Y., F.B. and B.v.S. conducted the experiments and V.J. performed the analysis. S.O. fabricated the device, L.E.A.S. and G.S. supplied the heterostructures. E.R-M., M.R., S.B., M.R-R. and Y-M.N. performed the simulation and theoretical analysis, and S.B., M.R.-R. and Y-M.N. supervised the theory section. V.J., C.X.Y. and M.V. wrote the manuscript with input of all authors. M.V. supervised the project.

## Declarations

M.V. and G.S. are founding advisors of Groove Quantum BV and declare equity interests. The remaining authors declare that they have no competing interests.

## Data availability

The data supporting the findings of this study are openly available in the 4TU.ResearchData repository under the DOI: 10.4121/5ee5b0d3-e838-478e-990d-02c50b75eeab.

## References

[1] Hendrickx, N. W. et al. A four-qubit germanium quantum processor. Nature 591, 580–585 (2021). URL https://www.nature. com/articles/s41586-021-03332-6.

[2] Philips, S. G. J. et al. Universal control of a six-qubit quantum processor in silicon. Nature 609, 919–924 (2022). URL https://www.nature.com/ articles/s41586-022-05117-x.

[3] Zhang, X. et al. Universal control of four singlet–triplet qubits. Nature Nanotechnology (2024). URL https://www.nature.com/ articles/s41565-024-01817-9.

[4] Thorvaldson, I. et al. Grover’s algorithm in a four-qubit silicon processor above the fault-tolerant threshold (2024). URL https: //arxiv.org/abs/2404.08741v1.

[5] Borsoi, F. et al. Shared control of a 16 semiconductor quantum dot crossbar array. Nature Nanotechnology 19, 21– 27 (2024). URL https://www.nature.com/ articles/s41565-023-01491-3.

[6] Wang, C. A. et al. Operating semiconductor quantum processors with hopping spins. Science (New York, N.Y.) 385, 447–452 (2024). URL https://www.science.org/doi/10.1126/ science.ado5915.

[7] George, H. C. et al. 12-spin-qubit arrays fabricated on a 300 mm semiconductor manufacturing line (2024).

[8] Scappucci, G. et al. The germanium quantum information route. Nature Reviews Materials 6, 926–943 (2020). URL https://www.nature. com/articles/s41578-020-00262-z.

[9] Wang, Z. et al. Optimal operation points for ultrafast, highly coherent Ge hole spinorbit qubits. npj Quantum Information 7, 54 (2021).

[10] Hendrickx, N. W. et al. Sweet-spot operation of a germanium hole spin qubit with highly anisotropic noise sensitivity. Nature Materials 2024 1–8 (2024). URL https://www. nature.com/articles/s41563-024-01857-5.

[11] Carballido, M. J. et al. Compromise-Free Scaling of Qubit Speed and Coherence (2024).

[12] Bassi, M. et al. Optimal operation of hole spin qubits (2024). URL http://arxiv.org/ abs/2412.13069.

[13] Abadillo-Uriel, J. C., Rodr´ıguez-Mena, E. A., Martinez, B. & Niquet, Y.-M. Hole-Spin Driving by Strain-Induced Spin-Orbit Interactions. Physical Review Letters 131, 097002 (2023). URL https://link.aps.org/doi/10. 1103/PhysRevLett.131.097002.

[14] Mauro, L., Rodr´ıguez-Mena, E. A., Bassi, M., Schmitt, V. & Niquet, Y.-M. Geometry of the dephasing sweet spots of spin-orbit qubits. Physical Review B 109, 155406 (2024). URL https://link.aps.org/doi/10. 1103/PhysRevB.109.155406.

[15] Jirovec, D. et al. A singlet-triplet hole spin qubit in planar Ge. Nature Materials 2021 20:8 20, 1106–1112 (2021). URL https://www.nature.com/articles/ s41563-021-01022-2.

[16] van Riggelen, F. et al. Phase flip code with semiconductor spin qubits. npj Quantum Information 8, 124 (2022). URL https://www.nature.com/articles/ s41534-022-00639-8.

[17] Lawrie, W. I. L. et al. Simultaneous single-qubit driving of semiconductor spin qubits at the fault-tolerant threshold. Nature Communications 14, 3617 (2023). URL https://www.nature.com/ articles/s41467-023-39334-3.

[18] Wang, C. A. et al. Probing resonating valence bonds on a programmable germanium quantum simulator. npj Quantum Information 2023 9:1 9, 1–8 (2023). URL https://www. nature.com/articles/s41534-023-00727-3.

[19] John, V. et al. Bichromatic Rabi Control of Semiconductor Qubits. Physical Review Letters 132, 067001 (2024).

[20] van Riggelen-Doelman, F. et al. Coherent spin qubit shuttling through germanium quantum dots. Nature Communications 2024 15:1 15, 1–9 (2024). URL https://www. nature.com/articles/s41467-024-49358-y.

[21] Leon, R. C. et al. Coherent spin control of s-, p-, d- and f-electrons in a silicon quantum dot. Nature Communications 2020 11:1 11, 1–7 (2020). URL https://www.nature.com/ articles/s41467-019-14053-w.

[22] Rao, A. S. et al. MAViS: Modular Autonomous Virtualization System for Two-Dimensional Semiconductor Quantum Dot Arrays. ArXiv (2024). URL https://arxiv. org/abs/2411.12516v1.

[23] Stehouwer, L. E. A. et al. Germanium wafers for strained quantum wells with low disorder. Applied Physics Letters 123, 92101 (2023). URL https://pubs. aip.org/apl/article/123/9/092101/2908280/ Germanium-wafers-for-strained-quantum-wel

[24] Stehouwer, L. E. A. et al. Exploiting epitaxial strained germanium for scaling low noise spin qubits at the micron-scale. ArXiv (2024). URL http://arxiv.org/abs/2411.11526.

[25] Ono, K., Austing, D. G., Tokura, Y. & Tarucha, S. Current Rectification by Pauli Exclusion in a Weakly Coupled Double Quantum Dot System. Science 297, 1313–1317 (2002).

[26] Fransson, J. & R˚asander, M. Pauli spin blockade in weakly coupled double quantum dots. Physical Review B 73, 205333 (2006).

[27] Knill, E. et al. Randomized benchmarking of quantum gates. Physical Review A - Atomic,

Molecular, and Optical Physics 77, 012307 (2008). URL https://journals.aps.org/pra/ abstract/10.1103/PhysRevA.77.012307.

[28] Sigillito, A. J. et al. Electron Spin Coherence of Shallow Donors in Natural and Isotopically Enriched Germanium. Physical Review Letters 115 (2015).

[29] Crippa, A. et al. Electrical spin driving by \$g\$-matrix modulation in spin-orbit qubits. Physical Review Letters 120 (2017). URL http://arxiv.org/abs/1710.08690http://dx. doi.org/10.1103/PhysRevLett.120.137702.

[30] Piot, N. et al. A single hole spin with enhanced coherence in natural silicon. Nature Nanotechnology 17, 1072– 1077 (2022). URL https://www.nature.com articles/s41565-022-01196-z.

[31] Golovach, V. N., Borhani, M. & Loss, D. Electric-dipole-induced spin resonance in quantum dots. Physical Review B 74, 165319 (2006).

[32] Nowack, K. C., Koppens, F. H. L., Nazarov, Y. V. & Vandersypen, L. M. K. Coherent Control of a Single Electron Spin with Electric Fields. Science 318, 1430–1433 (2007).

[33] Benito, M. et al. Electric-field control and noise protection of the flopping-mode spin <sub>ith.</sub> qubit. Physical Review B 100, 125430 (2019). URL https://journals.aps.org/prb/abstract/ 10.1103/PhysRevB.100.125430.

[34] Croot, X. et al. Flopping-mode electric dipole spin resonance. Physical Review Research 2, 012006 (2020). URL https: //journals.aps.org/prresearch/abstract/10. 1103/PhysRevResearch.2.012006.

[35] DiVincenzo, D. P. & Loss, D. Coupled quantum dots as quantum gates. Physical Review B 59, 2070 (1999). URL https://journals.aps.org/prb/abstract/10. 1103/PhysRevB.59.2070.

[36] Bosco, S., Benito, M., Adelsberger, C. & Loss, D. Squeezed hole spin qubits in Ge quantum dots with ultrafast gates at low power.

## CONTENTS

Suppl. Note 1. Materials and Methods S2
Suppl. Note 2. Gate virtualisation S2
Suppl. Note 3. Qubit properties in the initial hole configuration S3
Suppl. Note 4. Single-qubit gate randomised benchmark S3
Suppl. Note 5. Exchange interaction in the 10-qubit array S5
Suppl. Note 6. Physical distance from gates to qubits S7
Suppl. Note 7. Dependence of g-factor on the hole occupancy S8
Suppl. Note 8. EDSR driving efficiency S9
Suppl. Note 9. g-factor tunability S10
Suppl. Note 10. LSES extraction S11
Suppl. Note 11. Driving efficiency extraction S14
Suppl. Note 12. Modelling of single- and multi-hole quantum dots S18
A. Models and device S18
B. Single-hole dots S19
C. Three-hole dots S20
1. Analytical expressions S21
2. FCI simulations S23
References S23

## Suppl. Note 1. MATERIALS AND METHODS

The device is fabricated on a Ge/SiGe heterostructure with a 16 nm germanium quantum well buried 55 nm below the semiconductor/oxide interface on a germanium substrate as described in Ref.[S1]. The ohmic contacts are created first through patterning and platinium depostion. For the gate stack,the barrier gate layer (20nm thick) is deposited, followed by the screening gate layer (30nm thick), and finally the plunger layer (40nm thick). All the gate layers are made of palladium, deposited at room temperature. The barrier gates are separated from the heterostructure by a 7 nm thick aluminium oxide and a 5nm oxide is deposited after the barrier and the screening layers.

The experiments are performed in a LD-400 Bluefors dilution fridge equipped with a solenoid superconducting magnet. Details of the set-up can be found in Ref.[S2].

![[assets/figures/references/ge-10qubit-2025/b7365e048c7407dd766102f179099f67e5fbb2cc4f5ff6ed479b42fd8dffcf68.jpg]]  
Supplementary Figure S1. Scanning electron microscope image of a device nominally identical to the one utilised in the experiments without any false colouring.

## Suppl. Note 2. GATE VIRTUALISATION

We use a set of virtual gates, defined in software, as outlined in Table S1. The first layer of virtualisation addresses crosstalk between gates and sensors as well as interactions between nearby quantum dots. This ensures that adjustments to the plunger or barrier gates do not shift the position of the charge sensor’s Coulomb peak or change nearby dots potentials. In the third layer of virtualisation, the charging voltage of each dot is normalised by rescaling the strength of its corresponding plunger. Finally, the third layer virtualizes the barrier gates, enabling independent tuning of the exchange interaction between dots without changing their charge states. For a complete gate virtualisation method, readers may refer to Ref.[S3].

Supplementary Table S1. Table illustrating the layers of our virtualization approach. S denotes sensor plunger gates, P (B) defines quantum dot plunger (barrier) gates.

<table><tr><td>Virt. layer</td><td>Description</td><td>Notation</td></tr><tr><td>1</td><td>Charge sensor and QD compensations</td><td>[vS, vP, vB] = M1·[S, P, B]</td></tr><tr><td>2</td><td>Normalisation of plungers with uniform charging voltages</td><td>N = M2·vP</td></tr><tr><td>3</td><td>Barriers to QDs</td><td>J = M3·[vB, N]</td></tr></table>

Supplementary Table S2. Qubit properties in the original charge configuration at 41.4mT.

<table><tr><td>label</td><td>Q1</td><td>Q2</td><td>Q3</td><td>Q4</td><td>Q5</td><td>Q6</td><td>Q7</td><td>Q8</td><td>Q9</td><td>Q10</td></tr><tr><td>Charge occupation</td><td>3</td><td>5</td><td>1</td><td>1</td><td>1</td><td>3</td><td>1</td><td>3</td><td>3</td><td>1</td></tr><tr><td>Larmor frequency (MHz)</td><td>302</td><td>293</td><td>319</td><td>347</td><td>361</td><td>321</td><td>355</td><td>335</td><td>327</td><td>331</td></tr><tr><td>g-factor</td><td>0.52</td><td>0.51</td><td>0.55</td><td>0.6</td><td>0.62</td><td>0.55</td><td>0.61</td><td>0.58</td><td>0.56</td><td>0.57</td></tr><tr><td>coherence time (ns)</td><td>2381</td><td>2252</td><td>1710</td><td>2238</td><td>2041</td><td>2134</td><td>2319</td><td>2207</td><td>2018</td><td>1975</td></tr><tr><td>Maximum driving strength (MHz/mV)</td><td>0.15</td><td>0.19</td><td>0.05</td><td>0.06</td><td>0.08</td><td>0.21</td><td>0.13</td><td>0.15</td><td>0.09</td><td>0.11</td></tr><tr><td>Single-qubit fidelity (%)</td><td>99.9</td><td>99.6</td><td>99.5</td><td>99.6</td><td>99.6</td><td>99.8</td><td>99.6</td><td>99.7</td><td>99.5</td><td>99.6</td></tr></table>

## Suppl. Note 4. SINGLE-QUBIT GATE RANDOMISED BENCHMARK

We perform randomised benchmarking to measure the single-qubit gate fidelity of the 10 qubits in the initial hole configuration, identified in Table S2, using the set of Cliford gates defined in Table S3. Details about this Cliford group can be found in Ref. [S4].

Supplementary Table S3. Single-qubit Cliford sequence and their composition. $\mathrm { X } _ { \pi / 2 }$ and $\mathrm { Z } _ { \pi / 2 }$ are referring to $\pi / 2$ rotation around the x-axis and the z-axis, respectively, of the Bloch sphere of a single-qubit. The average number of elementary gates per Cliford composition is 2 as the $\bar { \mathsf Z }$ rotation is generated by a change of qubit’s reference frame in software, which makes it error-free.

<table><tr><td>Clifford</td><td>Composition</td></tr><tr><td> $C_1$ </td><td> $X_{\pi/2}X_{-\pi/2}$ </td></tr><tr><td> $C_2$ </td><td> $X_{\pi/2}X_{\pi/2}$ </td></tr><tr><td> $C_3$ </td><td> $Z_{-\pi/2}X_{\pi/2}X_{\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_4$ </td><td> $X_{\pi/2}Z_{\pi/2}Z_{\pi/2}X_{\pi/2}$ </td></tr><tr><td> $C_5$ </td><td> $X_{\pi/2}Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_6$ </td><td> $X_{\pi/2}Z_{\pi/2}X_{\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_7$ </td><td> $X_{-\pi/2}Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_8$ </td><td> $X_{-\pi/2}Z_{\pi/2}X_{\pi/2}Z_{-\pi/2}$ </td></tr><tr><td> $C_9$ </td><td> $Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}X_{\pi/2}$ </td></tr><tr><td> $C_{10}$ </td><td> $Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}X_{-\pi/2}$ </td></tr><tr><td> $C_{11}$ </td><td> $Z_{\pi/2}X_{\pi/2}Z_{-\pi/2}X_{\pi/2}$ </td></tr><tr><td> $C_{12}$ </td><td> $Z_{\pi/2}X_{\pi/2}Z_{-\pi/2}X_{-\pi/2}$ </td></tr><tr><td> $C_{13}$ </td><td> $Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}X_{\pi/2}Z_{-\pi/2}$ </td></tr><tr><td> $C_{14}$ </td><td> $Z_{\pi/2}X_{-\pi/2}Z_{-\pi/2}X_{-\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_{15}$ </td><td> $X_{\pi/2}Z_{\pi/2}X_{-\pi/2}$ </td></tr><tr><td> $C_{16}$ </td><td> $X_{\pi/2}Z_{-\pi/2}X_{-\pi/2}$ </td></tr><tr><td> $C_{17}$ </td><td> $X_{-\pi/2}Z_{\pi/2}Z_{\pi/2}X_{-\pi/2}Z_{-\pi/2}$ </td></tr><tr><td> $C_{18}$ </td><td> $X_{-\pi/2}Z_{-\pi/2}Z_{-\pi/2}X_{-\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_{19}$ </td><td> $X_{\pi/2}Z_{-\pi/2}X_{\pi/2}$ </td></tr><tr><td> $C_{20}$ </td><td> $X_{\pi/2}Z_{\pi/2}X_{\pi/2}$ </td></tr><tr><td> $C_{21}$ </td><td> $Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}X_{\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_{22}$ </td><td> $Z_{-\pi/2}X_{\pi/2}Z_{\pi/2}X_{-\pi/2}Z_{-\pi/2}$ </td></tr><tr><td> $C_{23}$ </td><td> $X_{\pi/2}X_{\pi/2}Z_{\pi/2}$ </td></tr><tr><td> $C_{24}$ </td><td> $X_{-\pi/2}X_{-\pi/2}Z_{-\pi/2}$ </td></tr></table>

The randomised benchmarking data for all 10 qubits are shown in Figure S2. We assume an exponential decay of the form $P _ { \mathrm { e v e n } } = a F ^ { n } + b$ where $F$ is the circuit level fidelity, n is the number of Cliford operations, a and b are fitting parameters depending on the state preparation and measurement. The Cliford fidelity is then given by

$$
F _ {\mathrm{C}} = 1 - (1 - F) / 2,\tag{1}
$$

and the native gate fidelity is

$$
F _ {\mathrm{gate}} = 1 - (1 - F _ {\mathrm{C}}) / (2 N _ {\mathrm{avg}}),\tag{2}
$$

where $N _ { \mathrm { a v g } }$ is the average gate number per Cliford, which for our chosen Cliford set is 2. [S4].

![[assets/figures/references/ge-10qubit-2025/24e59d63df59aaf06f47653cde48132e41e4b11870fb3f8335056b45de72c14a.jpg]]

![[assets/figures/references/ge-10qubit-2025/2f6c08ab302aa5658578bd0575accb72016bbe08713d53e9d2b48e26fc1592e9.jpg]]

![[assets/figures/references/ge-10qubit-2025/19644ad3425c54b205b38760e86c325576c7a56077a071b53799b7b0f7cf6555.jpg]]

![[assets/figures/references/ge-10qubit-2025/20a86a4b6ee2bed7f971752763eaa1aa62f3ea3768821e5fc0d8fc4f4e2325ac.jpg]]

![[assets/figures/references/ge-10qubit-2025/96248df2e4fcb608bfa992dba7f32557b5279f732f407edd38ea7586105aa7cd.jpg]]

![[assets/figures/references/ge-10qubit-2025/f1f890a8459c4afd1883f1ab65b62dc25ed411ac09aff27444f352d462334888.jpg]]

![[assets/figures/references/ge-10qubit-2025/6a00a24c75f4640797ad650470097ba1e23e963de0180af67dbc1112e79173ad.jpg]]

![[assets/figures/references/ge-10qubit-2025/873068c9e22128394a9a7dac104cf66a2a3045cfaff0608244e8270b80182a44.jpg]]

![[assets/figures/references/ge-10qubit-2025/01ff62ba343e1190bc7266f56b664b53eb5891c6665808e954a85816dae749a4.jpg]]

![[assets/figures/references/ge-10qubit-2025/50edcac952a34e22e63f5f5ee160121feab3c79f3e2f6e856757804fabd10088.jpg]]  
Supplementary Figure S2. Single-qubit gate benchmark on the 10 qubits. The black dots correspond to the averaged randomised benchmarking data over 10 randomisations, the red line is the exponential fit to extract the gate fidelity $F _ { \mathrm { g a t e } }$ and the grey area covers the standard deviation of the data. The error bar only denotes the precision of the fit. We also remark that while the sequence lengths of 100 Cliford yields saturation for fidelities below 99.4%, larger length sequences may be needed to probe the precise fidelities of the better performing qubits.

## Suppl. Note 5. EXCHANGE INTERACTION IN THE 10-QUBIT ARRAY

Here we show the exchange interaction spectroscopy measurements for all the ten qubits where we observe the exchange splitting between each qubit and one neighbouring qubit, see Figure S3. Figure S4 shows qubit pairs, where we measured exchange interaction splitting for both qubits demonstrating the connectivity of the qubit array.

![[assets/figures/references/ge-10qubit-2025/a4d0f20b7dc9b0c216b82bc703c19cac7c79b5fb8339cdec137ca0ee290bc5c3.jpg]]

![[assets/figures/references/ge-10qubit-2025/5f388218876450e579c07d4a3783a6caaea78aee22f46783c2509f3573a44051.jpg]]

![[assets/figures/references/ge-10qubit-2025/8f1586b5e4e82ba21789825da153c3248501225bc4304b7d088be4766d515a81.jpg]]

![[assets/figures/references/ge-10qubit-2025/8be8b8adf118072ea60a0b50d5917cc1045e3a0e33cbd8c7f4c7763956f4e3b6.jpg]]

e  
![[assets/figures/references/ge-10qubit-2025/51b499547ca41db51a91b857710e3ea8457ff1817f848d9e2108ed9323932bff.jpg]]

f  
![[assets/figures/references/ge-10qubit-2025/ad835622bd5ccc98da9a738b1ebfcd039dde48ea2022889fdaeb589e62ed8a88.jpg]]

![[assets/figures/references/ge-10qubit-2025/0b7b9bccbfb375e5bc22fe1130297af4d3a7442de41affc1ae5c8f65e46d76a3.jpg]]

![[assets/figures/references/ge-10qubit-2025/0b7e96c542cfa3c3c682cfd589b153f66ed9d82b3a219f90f68919fb43a59032.jpg]]

![[assets/figures/references/ge-10qubit-2025/c1d66622d31852c5101dc6be79b0889253def5c8cee0b67de124c3faf7ce2a57.jpg]]

![[assets/figures/references/ge-10qubit-2025/dff6ad4ef0cd834068af8c342f6dc95535794155a9038ab0facc96c5db3b9bce.jpg]]  
Supplementary Figure S3. a-j. Exchange splitting for all ten qubits. The observed splitting of the qubit resonance frequency as a function of virtual barrier voltage is directly proportional to the exchange coupling between qubits.

f(MHz)

f (MHz)  
a  
![[assets/figures/references/ge-10qubit-2025/a1205b83ab4c207611b3f9072cf821370a31756b4d85a90638fdb02c2d6f6d99.jpg]]

![[assets/figures/references/ge-10qubit-2025/867413695bae12b4b3745ce9d8d1bb011dc06a348e24e99ac46fcca4fa73fc53.jpg]]

![[assets/figures/references/ge-10qubit-2025/67c89856537abb1c659c81ccd683debd3f3f7dcd1bef8f2c0902a81714c35aa6.jpg]]

b  
![[assets/figures/references/ge-10qubit-2025/fd3136502baf3186c02d2b36e320d6bf46578e969cb5a4f1193fe07d89bd699f.jpg]]

![[assets/figures/references/ge-10qubit-2025/49f832b5917442d08b83cd59123af0817e63a087eb04f4c95a652126a521aba6.jpg]]

![[assets/figures/references/ge-10qubit-2025/3d745f35d31ded41f5c367bf9ce588c7906d5234220799bdcb64faf8024528bf.jpg]]

c  
![[assets/figures/references/ge-10qubit-2025/6229677a6e1408e3ebd2be253cc495870d3dd5a1eaf2875098f9ead18c25ff44.jpg]]

![[assets/figures/references/ge-10qubit-2025/94eb2239d6b18e12aa91b8166182400dc4931cec43fedffe2b2870346745a416.jpg]]

![[assets/figures/references/ge-10qubit-2025/c2bde9760a450e9d63e2a90bbf4f426870eadc9de9abf01b19f0ff38cbd52498.jpg]]

d  
![[assets/figures/references/ge-10qubit-2025/b48ad0ef805daa280e675650721d56fe7828fdf872c8fc4f19fa7d0c3d487a01.jpg]]

![[assets/figures/references/ge-10qubit-2025/1959fa90af029bbae052bc5731590ab58f9445b79652d36774b05a4a2e99192c.jpg]]

![[assets/figures/references/ge-10qubit-2025/49356498b5718ae9fe146edc2660e4c1172c5fea1b60bc9148e7384ee034d696.jpg]]  
Supplementary Figure S4. a-d. Examplary data of exchange interaction between qubit pairs.

## Suppl. Note 6. PHYSICAL DISTANCE FROM GATES TO QUBITS

To categorise the driving eficiency of all gates to all qubits, we calculate the physical distance in the device plane from the expected qubit position at the centre of its top plunger, to any of the 22 gates. Afterwards, we rank each physical distance for plunger and barrier gates independent from each other, and assign it an integer number n corresponding to the n-th nearest qubit-to-gate distance. We use these assigned ranks to calculate an average value for the n-th nearest qubit for a plunger and barrier drive respectively.

Supplementary Table S4. Physical distance from each gate to each qubit in µm

<table><tr><td></td><td>P1</td><td>P2</td><td>P3</td><td>P4</td><td>P5</td><td>P6</td><td>P7</td><td>P8</td><td>P9</td><td>P10</td><td>B1</td><td>B2</td><td>B3</td><td>B4</td><td>B5</td><td>B6</td><td>B7</td><td>B8</td><td>B9</td><td>B10</td><td>B11</td><td>B12</td></tr><tr><td>Q1</td><td>0.00</td><td>0.28</td><td>0.55</td><td>0.20</td><td>0.20</td><td>0.44</td><td>0.70</td><td>0.28</td><td>0.39</td><td>0.62</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.49</td><td>0.62</td><td>0.22</td><td>0.22</td><td>0.29</td><td>0.40</td><td>0.53</td><td>0.65</td></tr><tr><td>Q2</td><td>0.28</td><td>0.00</td><td>0.28</td><td>0.44</td><td>0.20</td><td>0.20</td><td>0.44</td><td>0.39</td><td>0.28</td><td>0.39</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.40</td><td>0.29</td><td>0.22</td><td>0.22</td><td>0.29</td><td>0.40</td></tr><tr><td>Q3</td><td>0.55</td><td>0.28</td><td>0.00</td><td>0.70</td><td>0.44</td><td>0.20</td><td>0.20</td><td>0.62</td><td>0.39</td><td>0.28</td><td>0.62</td><td>0.49</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.65</td><td>0.53</td><td>0.40</td><td>0.29</td><td>0.22</td><td>0.22</td></tr><tr><td>Q4</td><td>0.20</td><td>0.44</td><td>0.70</td><td>0.00</td><td>0.28</td><td>0.55</td><td>0.83</td><td>0.20</td><td>0.44</td><td>0.70</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.49</td><td>0.62</td><td>0.76</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.49</td><td>0.62</td><td>0.76</td></tr><tr><td>Q5</td><td>0.20</td><td>0.20</td><td>0.44</td><td>0.28</td><td>0.00</td><td>0.28</td><td>0.55</td><td>0.20</td><td>0.20</td><td>0.44</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.49</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.49</td></tr><tr><td>Q6</td><td>0.44</td><td>0.20</td><td>0.20</td><td>0.55</td><td>0.28</td><td>0.00</td><td>0.28</td><td>0.44</td><td>0.20</td><td>0.20</td><td>0.49</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.49</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.22</td></tr><tr><td>Q7</td><td>0.70</td><td>0.44</td><td>0.20</td><td>0.83</td><td>0.55</td><td>0.28</td><td>0.00</td><td>0.70</td><td>0.44</td><td>0.20</td><td>0.76</td><td>0.62</td><td>0.49</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.76</td><td>0.62</td><td>0.49</td><td>0.35</td><td>0.22</td><td>0.10</td></tr><tr><td>Q8</td><td>0.28</td><td>0.39</td><td>0.62</td><td>0.20</td><td>0.20</td><td>0.44</td><td>0.70</td><td>0.00</td><td>0.28</td><td>0.55</td><td>0.22</td><td>0.22</td><td>0.29</td><td>0.40</td><td>0.53</td><td>0.65</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.35</td><td>0.49</td><td>0.62</td></tr><tr><td>Q9</td><td>0.39</td><td>0.28</td><td>0.39</td><td>0.44</td><td>0.20</td><td>0.20</td><td>0.44</td><td>0.28</td><td>0.00</td><td>0.28</td><td>0.40</td><td>0.29</td><td>0.22</td><td>0.22</td><td>0.29</td><td>0.40</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.10</td><td>0.22</td><td>0.35</td></tr><tr><td>Q10</td><td>0.62</td><td>0.39</td><td>0.28</td><td>0.70</td><td>0.44</td><td>0.20</td><td>0.20</td><td>0.55</td><td>0.28</td><td>0.00</td><td>0.65</td><td>0.53</td><td>0.40</td><td>0.29</td><td>0.22</td><td>0.22</td><td>0.62</td><td>0.49</td><td>0.35</td><td>0.22</td><td>0.10</td><td>0.10</td></tr></table>

Supplementary Table S5. Ranked physical distance determining the n-th nearest neighbours

<table><tr><td></td><td>P1</td><td>P2</td><td>P3</td><td>P4</td><td>P5</td><td>P6</td><td>P7</td><td>P8</td><td>P9</td><td>P10</td><td>B1</td><td>B2</td><td>B3</td><td>B4</td><td>B5</td><td>B6</td><td>B7</td><td>B8</td><td>B9</td><td>B10</td><td>B11</td><td>B12</td></tr><tr><td>Q1</td><td>1</td><td>3</td><td>6</td><td>2</td><td>2</td><td>5</td><td>8</td><td>3</td><td>4</td><td>7</td><td>1</td><td>1</td><td>2</td><td>4</td><td>6</td><td>8</td><td>2</td><td>2</td><td>3</td><td>5</td><td>7</td><td>9</td></tr><tr><td>Q2</td><td>3</td><td>1</td><td>3</td><td>5</td><td>2</td><td>2</td><td>5</td><td>4</td><td>3</td><td>4</td><td>4</td><td>2</td><td>1</td><td>1</td><td>2</td><td>4</td><td>5</td><td>3</td><td>2</td><td>2</td><td>3</td><td>5</td></tr><tr><td>Q3</td><td>6</td><td>3</td><td>1</td><td>8</td><td>5</td><td>2</td><td>2</td><td>7</td><td>4</td><td>3</td><td>8</td><td>6</td><td>4</td><td>2</td><td>1</td><td>1</td><td>9</td><td>7</td><td>5</td><td>3</td><td>2</td><td>2</td></tr><tr><td>Q4</td><td>2</td><td>5</td><td>8</td><td>1</td><td>3</td><td>6</td><td>9</td><td>2</td><td>5</td><td>8</td><td>1</td><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td><td>1</td><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr><tr><td>Q5</td><td>2</td><td>2</td><td>5</td><td>3</td><td>1</td><td>3</td><td>6</td><td>2</td><td>2</td><td>5</td><td>2</td><td>1</td><td>1</td><td>2</td><td>4</td><td>6</td><td>2</td><td>1</td><td>1</td><td>2</td><td>4</td><td>6</td></tr><tr><td>Q6</td><td>5</td><td>2</td><td>2</td><td>6</td><td>3</td><td>1</td><td>3</td><td>5</td><td>2</td><td>2</td><td>6</td><td>4</td><td>2</td><td>1</td><td>1</td><td>2</td><td>6</td><td>4</td><td>2</td><td>1</td><td>1</td><td>2</td></tr><tr><td>Q7</td><td>8</td><td>5</td><td>2</td><td>9</td><td>6</td><td>3</td><td>1</td><td>8</td><td>5</td><td>2</td><td>10</td><td>8</td><td>6</td><td>4</td><td>2</td><td>1</td><td>10</td><td>8</td><td>6</td><td>4</td><td>2</td><td>1</td></tr><tr><td>Q8</td><td>3</td><td>4</td><td>7</td><td>2</td><td>2</td><td>5</td><td>8</td><td>1</td><td>3</td><td>6</td><td>2</td><td>2</td><td>3</td><td>5</td><td>7</td><td>9</td><td>1</td><td>1</td><td>2</td><td>4</td><td>6</td><td>8</td></tr><tr><td>Q9</td><td>4</td><td>3</td><td>4</td><td>5</td><td>2</td><td>2</td><td>5</td><td>3</td><td>1</td><td>3</td><td>5</td><td>3</td><td>2</td><td>2</td><td>3</td><td>5</td><td>4</td><td>2</td><td>1</td><td>1</td><td>2</td><td>4</td></tr><tr><td>Q10</td><td>7</td><td>4</td><td>3</td><td>8</td><td>5</td><td>2</td><td>2</td><td>6</td><td>3</td><td>1</td><td>9</td><td>7</td><td>5</td><td>3</td><td>2</td><td>2</td><td>8</td><td>6</td><td>4</td><td>2</td><td>1</td><td>1</td></tr></table>

![[assets/figures/references/ge-10qubit-2025/9bc0a73a34f19bcdb5a88f861d39843324aa5b2a94fac133f3ba739cb19ec11b.jpg]]  
Supplementary Figure S5. Efective g-factor values of the 10 qubits in the single, three and five-hole occupation.

## Suppl. Note 8. EDSR DRIVING EFFICIENCY

Additional data of EDSR driving eficiency as a function of driving gate and charge occupation are shown in Figure S6.

a

Q1 (1h)

b

Q2 (5h)

c

Q3 (1h)

d

Q4 (1h)

![[assets/figures/references/ge-10qubit-2025/c06dc720557b3603bbba7ee60eab24c1b127c8058812cbceab6c971e817de378.jpg]]

Supplementary Figure S6. Extended data of the EDSR driving eficiency for Q1 (a), Q2 (b), Q3 (c), Q4 (d), Q7 (e), Q8 (f), Q9 (g), Q10 (h) in the single- and three- hole configuration for all qubits except Q2 which is only probed in the five-hole occupancy. Note that Q4 and Q7 show less prominent increase of the top plunger drive eficiency, which could be attributed to their large charging voltage as discussed in the main text.

Q1 (1h)

b

Q2 (5h)

c

Q3 (1h)

Q4 (1h)

![[assets/figures/references/ge-10qubit-2025/6af88d8c536ff945d5e2fb9e91dc9bd5e430b3832addad65364cb8ef1c3deb9b.jpg]]

Supplementary Figure S7. Extended data of the g-factor tunability for Q1 (a), Q2 (b), Q3 (c), Q4 (d), Q7 (e), Q8 (f), Q9 (g), Q10 (h) in the single- and three- hole configuration for all qubits except Q2 which is only probed in the five-hole occupancy. More details about data analysis can be found in Suppl. Note S10.

## Suppl. Note 10. LSES EXTRACTION

To extract the g-factor susceptibility of a qubit to each gate, microwave frequency sweeps around the larmor frequency have been performed, while changing the applied voltage on each gate one after the other. In this experiment, we used a chirp signal to probe the resonance frequency of each qubit. After, the resonance frequency for each configuration is determined and fitted with a linear fit. The corresponding slope indicates the gate susceptibilit $\partial f _ { \mathrm { R a b i } } / \partial V _ { \mathrm { g a t e } }$ . In Figure S8 and S9 examples of the data and the corresponding linear fits are plotted.

![[assets/figures/references/ge-10qubit-2025/371da014c74578a6e25cee854d87939f631d09d5530b7da1a54e1b3c9d5c9881.jpg]]  
Supplementary Figure S8. LSES contribution of plungers for Q6 with 1, 3, and 5 hole occupation.

a  
![[assets/figures/references/ge-10qubit-2025/78228c29d30536bc5cac1caadd54501e5a0b57e87a3f626bdb5f96192d8a3946.jpg]]

b  
Q6 (3h)  
![[assets/figures/references/ge-10qubit-2025/28eec66760300ef4ccb4616278a2172ae3d71dae2ad90dee90a81fa163d24cfb.jpg]]  
c

Q6 (5h)  
![[assets/figures/references/ge-10qubit-2025/37f3329b34771886c18c249ebf935487255757ba93c8ab132036420044c851f3.jpg]]  
Supplementary Figure S9. LSES contribution of barriers for Q6 with 1, 3, and 5 hole occupation.

## Suppl. Note 11. DRIVING EFFICIENCY EXTRACTION

To extract the EDSR driving eficiency, Rabi measurements are performed as a function of drive amplitude. Next a fast-Fourier transform is applied to the raw data, and then fitted. In Suppl. Figs. S10-S13 examples of the data and the corresponding linear fits are plotted. The slope determines the driving eficiency.

![[assets/figures/references/ge-10qubit-2025/75bb58dbe014721c3ad01c7a3a38d8276c9e0f59720bc0ce73c7635212fd2e60.jpg]]  
Supplementary Figure S10. EDSR driving of plungers for Q6 with 1, 3, and 5 hole occupation.

![[assets/figures/references/ge-10qubit-2025/076495152e2c6b67878383e301f6bc76c7222a7ef092c30654fb21a9624842ed.jpg]]  
Supplementary Figure S11. EDSR driving of barriers for Q6 with 1, 3, and 5 hole occupation.

![[assets/figures/references/ge-10qubit-2025/66029d43506ab3590c44c857bb7020d198fbb9c9fec9ab16bbece7e965a4a02b.jpg]]

![[assets/figures/references/ge-10qubit-2025/2fe07a2853d56c3f09ae5bcf104ab83f468443d0f0971421724339a64c525acd.jpg]]

Q6 (5h)  
![[assets/figures/references/ge-10qubit-2025/bb28d4fbe20466a055621efbdc44623af184c07934705f48c8a525e1991cf8e1.jpg]]  
Supplementary Figure S12. FFT and linear fit of EDSR driving of plungers for Q6 with 1, 3, and 5 hole occupation.

drive amplitude (mV) drive amplitude (mV) drive amplitude (mV) drive amplitude (mV) drive amplitude (mV) drive amplitude (mV)  
a  
Q6 (1h)  
![[assets/figures/references/ge-10qubit-2025/22a015c8bff5bcb83a12a5fcdcbc968ebba9c0b82bf8b86cb11a994f9382efe1.jpg]]

b  
Q6 (3h)  
![[assets/figures/references/ge-10qubit-2025/860adc9a7891bdb031848b4e9828459af3a684609cd21c191edbf42991be1f41.jpg]]

c  
Q6 (5h)  
![[assets/figures/references/ge-10qubit-2025/fb72b962224e7082fd310b8ecb6631e2d13fc71cf023fcc348809f1dfbd880ba.jpg]]  
drive amplitude (mV) drive amplitude (mV) drive amplitude (mV) drive amplitude (mV) drive amplitude (mV) drive amplitude (mV)

Supplementary Figure S13. FFT and linear fit of EDSR driving of barriers for Q6 with 1, 3, and 5 hole occupation.

![[assets/figures/references/ge-10qubit-2025/6b094f7910ec55d7d4177d51ec8f258aff43a94fc150e07d5192e55a8c925ba6.jpg]]  
Supplementary Figure S14. The simulated device geometry, which includes the three layers of gates (barrier gates NW/NE/SW/SE, screening gates, and plunger gate P). The yellow shape below the plunger gate is the iso-density surface that encloses 80% of the charge of the “centered” dot of Fig. S15a-c. The orientation of the magnetic field B<sup>⃗</sup> is characterized by the angles θ and ϕ in the crystallographic axes set x = [<sup>¯</sup>110], y = [110] and z = [001].

## Suppl. Note 12. MODELLING OF SINGLE- AND MULTI-HOLE QUANTUM DOTS

We have modelled the devices analytically and numerically to understand the trends highlighted by the experiments. We first introduce the structural models used in the simulations, then discuss the results for single-hole quantum dots. We finally derive an analytical model for the Rabi frequencies of multiply charged dots. This model, backed by numerical simulations, supports the enhancement of the Rabi frequencies in three-hole quantum dots.

## A. Models and device

We consider the simplified geometry of Fig. S14, comprising a central plunger gate separated from its four nearest neighbors by the north-west (NW), north-east (NE), south-east (SE), and south-west (SW) barrier gates. Screening gates are also included between the NW/NE and SW/SE gate lines, to prevent, in particular, accumulation below the plunger gate line. The heterostructure and gate stack as well as the dimensions of the gates are borrowed from the experimental layout. This model geometry is close to the environment of dots Q5 and Q6.

We compute the potential in the heterostructure with a finite-volume Poisson solver, then the single-hole wave functions with finite-diferences implementation of the four-band Luttinger-Kohn model [S5, S6], and finally the LSES and Rabi frequencies with the g-matrix formalism [S7–S9]. We also compute the three-hole ground state and g matrix with a full configuration interaction (FCI) method [S10]. Moreover, we construct a phenomenological theory that qualitatively captures the main features observed in the experiment by including only the few most relevant configurations of this FCI model.

We add fixed trapped charges with density $\sigma = 5 \times 1 0 ^ { 1 1 } e / \mathrm { c m ^ { 2 } }$ at the semiconductor $/ \mathrm { A l _ { 2 } O _ { 3 } }$ interface, either as a homogeneous sheet (which does not introduce disorder), or as a random distribution of point charges (see discussion below). We do not account here for the inhomogeneous strains imposed by the contraction of the metal gates upon cool-down [S11]. The results with such inhomogeneous strains are qualitatively similar; the Rabi frequencies with and without cool-down strains are broadly comparable at the experimental magnetic field orientation, while the average LSES of the barrier gates is typically smaller (resp. larger) than the experiment without (resp. with) these strains. This suggests that only part of the strains have been transferred to the heterostructure (due to, e.g., plasticity at the metal/oxide or oxide/semiconductor interfaces).

We first discuss the conclusions drawn from the modeling of single-hole dots, then of three-hole dots.

![[assets/figures/references/ge-10qubit-2025/c38538c58109b4712b483076112d1780f5ec5e8d34c693fbbe4a19a2750e7779.jpg]]

![[assets/figures/references/ge-10qubit-2025/84a2ea781ce13d605e6905d4e7140a53ad5f2982c72962062ee99eaa25f84532.jpg]]

![[assets/figures/references/ge-10qubit-2025/df1d0beae9be6518496b6d53a483a6208d31ebdabaeef5f09964add247898367.jpg]]

![[assets/figures/references/ge-10qubit-2025/cc6559d83926700d6ee2807ced6bbbb191d2bc95fb22eb7150726e864f916456.jpg]]

![[assets/figures/references/ge-10qubit-2025/7f3f5e7f276f09e96b7ece4d192f1e9c690a6179ad5ce9271bdd36f54a550e10.jpg]]

![[assets/figures/references/ge-10qubit-2025/aa636ca7cf02dedc70c031ee9efeafe8b9e1dce6cced804f90b0af62d4f9112b.jpg]]

![[assets/figures/references/ge-10qubit-2025/535255d5e3252951ef475894a8929079d7aa5b25b6f8f6d02d067eda3084902d.jpg]]

![[assets/figures/references/ge-10qubit-2025/a70dca1dedda5de7d184d8462d76a68457ab7c92f6813423931639b72d6b511a.jpg]]

![[assets/figures/references/ge-10qubit-2025/9be172423c5ae2d08cfa1b8046af5008bfc820b1b86ded49866042fe1e0f34a3.jpg]]  
Supplementary Figure S15. (a-c) LSES, Rabi frequencies $f _ { \mathrm { R } }$ and map of the squared wave function computed for a single hole in a “centered” dot. The LSES $\stackrel { \cdot } { \partial } g / \partial V$ of the plunger and barrier gates (per mV) are reported in panel a), while the Rab frequencies (in MHz/mV) are reported in panel b), and the bias voltages (in V) are reported in panel c). (d-f) Same for a “squeezed” dot at a diferent bias point. (g-i) Same for the displaced dot with charge disorder at the semiconductor $/ \mathrm { A l _ { 2 } O _ { 3 } }$ interface.

## B. Single-hole dots

We start from a bias point (Fig. S15a-c) where the ground-state hole wave function is well centered within the dot. The diference of potentials between the plunger and barrier gates $\left( \simeq 1 7 5 \mathrm { m V } \right)$ is similar to the experiment. We do not account for disorder at this stage (the distribution of charges at the semiconductor $/ \mathrm { A l _ { 2 } O _ { 3 } }$ interface is homogeneous). The dot is nonetheless slightly squeezed due to the asymmetry of the structure.

The g-tensor of the hole can be diagonalized in order to identify the principal g-factors $g _ { X } , ~ g _ { Y }$ and $g _ { Z }$ and the gyro-magnetic axes $X , Y , Z ;$ in this axis set, the efective g-factor $g ^ { * }$ simply reads

$$
g ^ {*} = \sqrt {g _ {X} ^ {2} b _ {X} ^ {2} + g _ {Y} ^ {2} b _ {Y} ^ {2} + g _ {Z} ^ {2} b _ {Z} ^ {2}},\tag{3}
$$

where $( b _ { X } , b _ { Y } , b _ { Z } )$ are the coordinates of the unit vector oriented along the magnetic field $\vec { B } \ [ \mathrm { S 7 } , \ \mathrm { S 1 2 } ]$ . For a perfectly centered and symmetric dot, the gyro-magnetic axes coincide with the device x, $y , z$ axes; in the present case $g _ { x } ^ { * } \equiv | g _ { X } | = 0 . 1 6 , g _ { y } ^ { * } \equiv | g _ { Y } | = 0 . 0 4 3$ and $g _ { z } ^ { * } \equiv | g _ { Z } | = 1 3 . 4 6$ . This strong anisotropy between in-plane and outof-plane g-factors is characteristic of heavy-holes in Germanium. The imbalance between $g _ { X }$ and $g _ { Y }$ results from the slight squeezing of the dot [S9, S13]. For a magnetic field $\begin{array} { r } { \vec { B } = B ( 0 ; } \end{array}$ , sin $\theta ,$ cos θ) oriented $2 . 4 ^ { \circ }$ out of plane $( \theta = 9 2 . 4 ^ { \circ } )$ the calculated efective $\mathrm { g } \mathrm { - }$ -factor $g ^ { \ast } = 0 . 5 6$ is dominated by the out-of-plane component $g _ { Z }$

The magnitudes of the LSES and Rabi frequencies computed at $B = 4 1 \mathrm { m T }$ are reasonably comparable to the experiment given the uncertainties of the model (strains, exact nature and distribution of traps, Coulomb interactions between neighboring $\mathrm { d o t s , ~ } . . . . )$ . The LSES show generic features weakly dependent on the bias point and disorder:

• The LSES of the plunger gate is always positive and usually comparable or larger than the magnitude of the LSES of the barrier gates.

• The LSES of the barrier gates alternate positive and negative signs.

Indeed, raising the plunger gate voltage primarily deconfines the dot, which results in an increase of both in-plane and out-of-plane g-factors, thus in a strongly positive LSES [S9]. On the opposite, raising a barrier gate voltage further confines but deforms the dot, which results, in particular, in a decrease of $g _ { Z } .$ . For such a symmetric dot, the LSES of all four barrier gates would actually be negative (blue) if these gates were only acting on the principal g-factors g<sub>X</sub>, g<sub>Y</sub> and $g z .$ . However, the barrier gates also tilt the gyro-magnetic X, Y, Z axes owing to the coupling between the in-plane and out-of-plane motions of the hole in the non-separable confinement potential of the dot (and owing to the inhomogeneous cool-down strains, when present) [S8, S11]. In particular, the gyro-magnetic $Z$ axis rotates by a small angle $\delta \theta < 0$ when raising the SW and SE gate voltages. This brings the magnetic field closer to the efective equatorial $( X Y )$ plane, which decreases the contribution from the out-of-plane g-factor $g _ { Z }$ in Eq. (3) and further reduces the net $g ^ { * }$ . On the opposite, raising the NW and NE gate voltages brings the magnetic field farther from the efective equatorial plane, which overcomes the decrease of $g _ { Z }$ and gives rise to a positive LSES.

The Rabi oscillations essentially result from the modulations of the principal g-factors g , g and $g _ { Z }$ by the driving gate (g-tensor modulation resonance or g-TMR) [S14]. The plunger gate is actually expected to be ineficient when the magnetic field is strictly in-plane [S8, S11]. Indeed, a disk-shaped quantum dot breathes homogeneously in the radio-frequency electric field of the plunger gate, which identically modulates $\left| g _ { X } \right|$ and $\left| g _ { Y } \right|$ , and therefore does not act on the spin precession axis. This gives rise to a large LSES (as highlighted above), but to no transverse coupling (Rabi oscillations). The eficiency of the plunger gate however increases when the dot is significantly squeezed (because breathing is not isotropic in the XY plane any more) and/or when the magnetic field goes out of plane.

The strength of these spin-orbit coupling mechanisms depends on the symmetry of the dot. The position and shape of the hole wave function can, in particular, be controlled by the barrier gates voltages. This is illustrated in Fig. S15d-f, where the bias has been tuned to squeeze the dot along the SW-NE axis. The LSES of three out of the four barrier gates are now negative as a result of the new imbalance between the variations of the principal g-factors and the rotations of the gyro-magnetic axes (around x, y and z). Yet the LSES of the plunger gate remains positive (whatever the position of the dot). Indeed, the dot is still essentially breathing when raising the plunger gate voltage, which increases all principal g-factors but hardly rotates the gyro-magnetic axes. The balance between the Rabi frequencies of the plunger and barrier gates is also impacted by the stronger asymmetry; in particular, the eficiency of the plunger gate is now comparable to the eficiency of the barrier gates (see above discussion).

Disorder can also change the symmetry of the hole wave function [S15]. It turns out that disorder, even weak, has a strong impact on the sign of the LSES of the barrier gates, owing to the presence of “sweet lines” (zero LSES) of these gates near the equatorial plane of the unit sphere describing the magnetic field orientation [S9]. The disorder may shufle these sweet lines so that the magnetic field can practically end up on either side (positive or negative LSES). The efects of disorder are illustrated in Fig. S15g-i, for a particular distribution of positive point charges $( \sigma = 5 \times 1 0 ^ { 1 1 } e / \mathrm { c m ^ { - 2 } } )$ at the semiconductor $/ \mathrm { A l _ { 2 } O _ { 3 } }$ interface. We emphasize that this disorder is actually weak and has little incidence on the position and shape of the hole wave function (same bias point as in Fig. S15a-c). It has, nonetheless, significant impact on their derivatives (thus on the sign of the LSES and magnitude of the Rabi frequencies). Indeed, disorder does not only control the symmetry of the dot (together with the bias voltages); it also changes the response of the hole to electrical perturbations (as it “pins” the motion of the dot to some extent). This particular realization of disorder is in qualitative agreement with the experimental data for Q6 (color pattern of the LSES and Rabi frequencies); we can not claim however that Fig. S15i is a fair representation of the wave function of the singly-occupied Q6 as the matching bias/disorder is not unique for a single magnetic field orientation.

## C. Three-hole dots

We now address the three-hole case, starting with a discussion of the efects of Coulomb interactions on Rabi oscillations, next illustrated with FCI calculations.

The multi-spin system of many particles is exactly described by the Hamiltonian [S16]

$$
\begin{array}{l} H = \sum_ {\alpha} (\epsilon_ {\alpha} \sigma_ {0} + \mu_ {B} \pmb {\sigma} \cdot g _ {\alpha} \mathbf {B}) \\ \quad + \sum_ {\alpha \neq \beta} \tau_ {\alpha , \beta} ^ {s _ {\alpha}, s _ {\beta}} c _ {\alpha , s _ {\alpha}} ^ {\dagger} c _ {\beta , s _ {\beta}} \\ \quad + \sum_ {\alpha , \beta , \gamma , \delta} \Gamma_ {\alpha , \beta , \gamma , \delta} ^ {s _ {\alpha}, s _ {\beta}, s _ {\gamma}, s _ {\delta}} c _ {\alpha , s _ {\alpha}} ^ {\dagger} c _ {\beta , s _ {\beta}} c _ {\gamma , s _ {\gamma}} ^ {\dagger} c _ {\delta , s _ {\delta}}, \end{array}\tag{4}
$$

where $\sigma _ { 0 }$ is the $2 \times 2$ identity matrix, and ${ \pmb { \sigma } } = ( \sigma _ { x } , \sigma _ { y } , \sigma _ { z } ) ^ { T }$ is the Pauli-vector consisting of the three Pauli matrices. $\tau _ { \alpha , \beta }$ are the standard inter-orbital tunneling elements between orbital α and β with spin $s _ { \alpha } , s _ { \beta } = \uparrow , \downarrow$ and $\Gamma _ { \alpha , \beta , \gamma , \delta }$ are the Coulomb matrix elements connecting $\alpha , \beta , \gamma , \delta$ orbitals with spin $s _ { \alpha } , s _ { \beta } , s _ { \gamma } , s _ { \delta } = \uparrow , \downarrow$ . The associated many-body wavefunctions can for example be constructed from single-particle eigenstates as described in Ref. [S16]. In that case, $\tau _ { \alpha , \beta } = 0$

Consequently, our system of interest, a single dot filled by 3 holes and orbitals $\alpha , \beta , \gamma , \delta = \left\{ \left| 0 \right. , \left| 1 \right. , \cdots , \left| k \right. \right\}$ is described by

$$
H = \left( \begin{array}{c c c c} \boldsymbol {\sigma} \cdot g _ {E _ {0}} \mathbf {B} + \sigma_ {0} \mathcal {E} _ {\mathrm{orb}, E _ {0}} & \sigma_ {0} t _ {E _ {0}, E _ {1}} & \dots & \sigma_ {0} t _ {E _ {0}, E _ {k}} \\ \sigma_ {0} t _ {E _ {1}, E _ {0}} & \boldsymbol {\sigma} \cdot g _ {E _ {1}} \mathbf {B} + \sigma_ {0} \mathcal {E} _ {\mathrm{orb}, E _ {1}} & \dots & \vdots \\ \vdots & \vdots & \ddots & \vdots \\ \sigma_ {0} t _ {E _ {k}, E _ {0}} & \dots & \dots & \boldsymbol {\sigma} \cdot g _ {E _ {k}} \mathbf {B} + \sigma_ {0} \mathcal {E} _ {\mathrm{orb}, E _ {k}} \end{array} \right).\tag{5}
$$

Here, $\left| E _ { 0 } \right.$ describes a configuration where the ground state orbital 0 is doubly occupied and the remaining hole occupies the lowest excited orbital 1 . The states $| E _ { k } \rangle$ with $k > 0$ are excited configurations. Considering only single excitations, the tunnel matrix elements are given by $\begin{array} { r } { t _ { \alpha , \beta } = \tau _ { \alpha , \beta } + \sum _ { \gamma } ( \Gamma _ { \alpha , \beta , \gamma , \gamma } + \Gamma _ { \gamma , \gamma , \alpha , \beta } + \Gamma _ { \alpha , \gamma , \gamma , \beta } + \Gamma _ { \gamma , \beta , \alpha , \gamma } ) } \end{array}$ where the sum $\gamma$ goes over all occupied orbitals. Similarly, the orbital energies are given by $\begin{array} { r } { \mathcal { E } _ { \mathrm { o r b } , \alpha } = \epsilon _ { \alpha } + \sum _ { \gamma } ( \epsilon _ { \gamma } + } \end{array}$ $\Gamma _ { \alpha , \alpha , \gamma , \gamma } + \Gamma _ { \gamma , \gamma , \alpha , \alpha } + \Gamma _ { \alpha , \gamma , \gamma , \alpha } + \Gamma _ { \gamma , \alpha , \alpha , \gamma } )$ . Additionally, we neglect the spin-orbit interactions, which are usually small in Germanium, especially at the intra-dot scale. However, in general, one can add the spin-orbit contributions to all inter-orbital transition matrix elements $\sigma _ { 0 } t _ { \alpha , \beta } \to \cos ( \zeta _ { \alpha , \beta } ) \sigma _ { 0 } t _ { \alpha , \beta } + \sin ( \zeta _ { \alpha , \beta } ) \pmb { \sigma } \cdot \mathbf { t } _ { \mathrm { s o i } , \alpha , \beta }$ and orbital energies $\sigma _ { 0 } \mathcal { E } _ { \mathrm { o r b } , \alpha }  \cos ( \zeta _ { \alpha } ) \sigma _ { 0 } \mathcal { E } _ { \mathrm { o r b } , \alpha } + \sin ( \zeta _ { \alpha } ) \pmb { \sigma } \cdot \mathcal { E } _ { \mathrm { o r b } , \mathrm { s o i } , \alpha }$ . In the main text, we focused on the weak coupling strength case $| t _ { E _ { 0 } , E _ { k } } | / ( \mathcal { E } _ { \mathrm { o r b } , E _ { k } } - \mathcal { E } _ { \mathrm { o r b } , E _ { 0 } } ) | \ll 1$ using perturbation theory. While this captures the main experimental features, such as the strongly altered Rabi frequencies with respect to the single hole case, we show below that our model holds more generally.

## 1. Analytical expressions

We now consider the strong coupling case. For simplicity, we assume $| t _ { E _ { 0 } , E _ { 1 } } | / ( \xi _ { \mathrm { o r b } , E _ { 1 } } - \xi _ { \mathrm { o r b } , E _ { 0 } } ) \gg | t _ { E _ { 0 } , E _ { k } } | / ( \xi _ { \mathrm { o r b } , E _ { k } } -$ $\mathcal { E } _ { \mathrm { o r b } , E _ { 0 } } ) |$ , which is expected for two-fold quasi-degeneracy, e.g. p-orbitals of the 2D harmonic oscillator. Consequently, we focus solely on the space spanned by $\{ \vert E _ { 0 } \rangle , \vert E _ { 1 } \rangle \}$ . This simplification allows us to construct a simple yet meaningful analytical theory, which is analogous to that of a flopping mode spin qubit. With this theory, we can qualitativel interpret many experimental features. We note, that the case of multiple strongly coupled orbitals can be treated similarly. To be more quantitative, we perform FCI simulations of the system in the next section. These numerical simulations also extend to squeezed quantum dots, similar to that shown for a single hole in Fig. S15d-f. Even for such squeezed dots, we find a good qualitative match with this simple, efective model.

The ground-states are given by block-diagonalizing the lowest two levels of Hamiltonian (5). Up to energy shifts, the ground-state Hamiltonian is well-approximated by

$$
H _ {\mathrm{eff}} \approx \frac {1}{2} \left[ \pmb {\sigma} \cdot g _ {E _ {0}} \mathbf {B} + \pmb {\sigma} \cdot g _ {E _ {1}} \mathbf {B} + \cos (\zeta) \left(\pmb {\sigma} \cdot g _ {E _ {0}} \mathbf {B} - \pmb {\sigma} \cdot g _ {E _ {1}} \mathbf {B}\right) \right],\tag{6}
$$

with $\zeta = \arctan ( \mathcal { E } _ { \mathrm { o r b } , E _ { 1 } } - \mathcal { E } _ { \mathrm { o r b } , E _ { 0 } } , 2 t _ { E _ { 0 } , E _ { 1 } } )$ . The intra-dot Coulomb interaction hybridizes the spin and orbital degrees similarly to multi-dot spin-charge qubits such as the flopping-mode qubit. Consequently, we expect that the resulting system could behave similarly and that the many-body interaction may explain the enhancement of Rabi frequencies observed in the experiment.

The Rabi frequency from driving gate $V ^ { ( k ) }  V ^ { ( k ) } + V _ { \mathrm { a c } } ^ { ( k ) }$ is given by

$$
f _ {R} = \frac {\mu_ {B} V _ {\mathrm{ac}} ^ {(k)}}{2 h} \frac {| | (g \mathbf {B}) \times (\frac {d g}{d V} \mathbf {B}) | |}{| | g \mathbf {B} | |}.\tag{7}
$$

![[assets/figures/references/ge-10qubit-2025/17a1adab27ec5ceb83a1bed95ca23c5154d1f1dbb148a7d7cd7f95e819551194.jpg]]  
Supplementary Figure S16. Dependence of the driving prefactor $| g _ { E _ { 0 } } \mathbf { B } \times g _ { E _ { 1 } } \mathbf { B } | / B ^ { 2 }$ on the magnetic field angle θ for a (solid) isotropic and (dashed) squeezed dot and $\phi = 9 0 ^ { \circ }$ . Two holes fill the ground-state s-orbital; in the isotropic configuration, the remaining hole of $| E _ { 0 } \rangle$ and $\left| E _ { 1 } \right.$ occupies the p-orbitals $| p _ { [ 1 0 0 ] } \rangle$ and $\left| p _ { [ 0 1 0 ] } \right.$ of a 2D harmonic oscillator, while in the squeezed configuration, the remaining hole occupies the $p \textmd { - }$ and d-orbitals $\left| p _ { [ 1 0 0 ] } \right.$ and $| p _ { [ 2 0 0 ] } \rangle$ . For this calculation, we used approximate expressions for the g-tensors taken from Ref. [S11], neglecting strains and assuming separability $( \langle p _ { \xi } p _ { \chi } \rangle = \delta _ { \xi , \chi } )$ , and the relation $\langle p _ { \xi } ^ { \bar { 2 } } \rangle _ { n } = ( 2 n + 1 ) \langle \bar { p _ { \xi } ^ { 2 } } \rangle _ { 0 } ,$ where n is the n-th excited harmonic oscillator state in $\xi , \chi = [ 1 0 0 ] , [ 0 1 0 ]$ directions. Furthermore, we used $\langle p _ { [ 1 0 0 ] , [ 0 1 0 ] } ^ { 2 } \rangle _ { _ { 0 } } = \frac { \hbar } { 2 } ( 3 0 \mathrm { n m } ) ^ { - 2 }$ for the isotropic and $\begin{array} { r } { \left. p _ { [ 1 0 0 ] } ^ { 2 } \right. _ { 0 } = \frac { \hbar } { 2 } ( 3 5 \mathrm { n m } ) ^ { - 2 } } \end{array}$ and $\begin{array} { r } { \left. p _ { [ 0 1 0 ] } ^ { 2 } \right. _ { 0 } = \frac { \hbar } { 2 } ( 2 5 \mathrm { n m } ) ^ { - 2 } } \end{array}$ for the squeezed configuration.

Here the total g-tensor is given by

$$
g = \frac {1}{2} \left[ g _ {E _ {0}} + g _ {E _ {1}} + \cos (\zeta) \left(g _ {E _ {0}} - g _ {E _ {1}}\right) \right]\tag{8}
$$

and the derivative with respect to gate voltages are

$$
\frac {d g}{d V ^ {(k)}} = \cos^ {2} \left(\frac {\zeta}{2}\right) \frac {d g _ {E _ {0}}}{d V ^ {(k)}} + \sin^ {2} \left(\frac {\zeta}{2}\right) \frac {d g _ {E _ {1}}}{d V ^ {(k)}} + \frac {1}{2} \left(g _ {E _ {0}} - g _ {E _ {1}}\right) \frac {d \cos (\zeta)}{d V ^ {(k)}},\tag{9}
$$

$$
\frac {d \cos (\zeta)}{d V ^ {(k)}} = 2 \frac {t _ {E _ {0} , E _ {1}} \left(\frac {d}{d V ^ {(k)}} \mathcal {E} _ {\mathrm{orb} , E _ {1}} - \frac {d}{d V ^ {(k)}} \mathcal {E} _ {\mathrm{orb} , E _ {0}}\right) + \left(\mathcal {E} _ {\mathrm{orb} , E _ {1}} - \mathcal {E} _ {\mathrm{orb} , E _ {0}}\right) \frac {d}{d V ^ {(k)}} t _ {E _ {0} , E _ {1}}}{\left(\mathcal {E} _ {\mathrm{orb} , E _ {1}} - \mathcal {E} _ {\mathrm{orb} , E _ {0}}\right) ^ {2} + t _ {E _ {0} , E _ {1}} ^ {2}}.\tag{10}
$$

The Rabi frequency thus has two important contributions: A conventional g-tensor contribution arising from the sum and diferences of the two individual g-tensors and a novel many-body contribution that provides a similar enhancement in driving eficiency as the flopping mode qubit. The many-body contribution can be explicitly expressed by

$$
\begin{array}{r l} & {\mathbf {f} _ {R} ^ {M B} \equiv \frac {\mu_ {B} V _ {\mathrm{ac}} ^ {(k)}}{8 h | | g \mathbf {B} | |} \left[ g _ {E _ {0}} + g _ {E _ {1}} + \cos (\zeta) (g _ {E _ {0}} - g _ {E _ {1}}) \right] \mathbf {B} \times \left[ \frac {d \cos (\zeta)}{d V ^ {(k)}} (g _ {E _ {0}} - g _ {E _ {1}}) \right] \mathbf {B}} \\ & {\qquad = - \frac {\mu_ {B} V _ {\mathrm{ac}} ^ {(k)}}{4 h | | g \mathbf {B} | |} \frac {d \cos (\zeta)}{d V ^ {(k)}} g _ {E _ {0}} \mathbf {B} \times g _ {E _ {1}} \mathbf {B}.} \end{array}\tag{11}
$$

(12)

Since Coulomb matrix elements and orbital energies are strongly afected by deformations (breathing) and less by lateral movement, the top plunger gate can lead to a larger Rabi frequency than nearby barrier gates.

To better illustrate the additional efects emerging in the three-hole quantum dots, we plot in ${ \mathrm { F i g } } .$ . S16 the prefactor $| g _ { E _ { 0 } } { \bf B } \times g _ { E _ { 1 } } { \bf B } | / B ^ { 2 }$ of the many-body contribution as a function of the out-of-plane magnetic field angle $\theta \ : ( \phi = 9 0 ^ { \circ } )$ We consider an isotropic dot as well as a dot squeezed along [010], and use the equations of Ref. [S11] for $g _ { E _ { 0 } }$ and $g _ { E _ { 1 } }$ , neglecting the shear strain contribution. We observe that the many-body contribution is small (but not zero) for exactly in-plane magnetic fields, maximal at $\theta = 4 5 ^ { \circ }$ , and vanishes at $\theta = 0 ^ { \circ }$ . Furthermore, we see that the novel contribution is weaker for the squeezed configuration due to the smaller induced rotation angle between $g _ { E _ { 0 } } \mathbf { B }$ and $g _ { E _ { 1 } }$ B for $\phi = 9 0 ^ { \circ }$ . However, this suppression is partially recovered for a magnetic field at $\phi = 4 5 ^ { \circ }$

This many-body contribution adds to the conventional single-particle $g \cdot$ -factor modulations. We further note that this conventional contribution also difers from the single-hole case as the symmetry of the occupied orbitals is not the same. The conventional contribution also experiences an enhancement that depends on the elongation of the orbitals and on the magnetic field direction [S13]. While in this experiment the total Rabi frequency is enhanced, we stress that in general these two contributions can interfere constructively or destructively, and thus we cannot exclude a priori particular scenarios where the three-hole Rabi frequencies decrease compared to non-interacting holes. This highlights the complexity of the spin dynamics in the many-particle case. We provide an illustration in the next section using configuration interaction simulations that account for all contributions.

![[assets/figures/references/ge-10qubit-2025/1837afb21f0a5af7529fb3dbff10a8ccf513c5f6b35ccc55e9bed77f3000824c.jpg]]  
Supplementary Figure S17. (a) LSES, (b) Rabi frequencies $f _ { \mathrm { R } }$ and (c) map of the density computed for three holes in a “squeezed” dot similar to Fig. S15d-f. The LSES of the plunger and barrier gates (per mV) are reported in panel a), while the Rabi frequencies (in MHz/mV) are reported in panel b), and the bias voltages (in V) are reported in panel c).

## 2. FCI simulations

In our FCI simulations, we diagonalize exactly the many-body Hamiltonian [Eq. (5)] in a basis of all Slater deter minants built from the first 48 single-particle orbitals computed on the finite-diferences grid (Sec. Suppl. Note 12 B) [S10]. We illustrate the role of Coulomb interactions on a squeezed three-hole dot similar to Fig. S15d-f. The LSES and Rabi frequencies of each gate, as well as the map of the three-hole density are plotted in Fig. S17. The density is visibly more extended along the major axis of the dot than in Fig. S15f, partly because the Coulomb interactions tend to split the holes apart [S10]. However, the main qualitative features are the same as in the single hole case: the LSES of the plunger gate remains positive, while the LSES of the barrier gates still show a mixed blue/red pattern. Noticeably, the Rabi frequencies achieved with the plunger gate are now larger than those achieved with the barrier gates. This feature is quite generic (though not systematic); it is already prominent in the non-interacting limit, where the ground-state orbital is filled with two holes, leaving one unpaired spin in the first excited state with an approximate p-like envelope. This p-like envelope gives rise to faster Rabi oscillations than the more isotropic s-like envelope of the ground state because it breathes far more inhomogeneously in the field of the plunger gate. This behavior extends in the interacting regime, where Coulomb interactions moreover mix orbital configurations and thus induce additional g-factors modulations, as discussed in the previous section.

Our analytical and numerical models reproduce and explain many generic features of the experimental data, includ ing the sign of the LSES of the plunger gate, the versatility of the color patterns of the LSES of the barrier gates, and the enhancement of the Rabi frequency of the plunger gate in three-hole dots. It provides insights into the physics at work in these devices. It shows, in particular, that the LSES and Rabi oscillations result from a combination of g-TMR mechanisms involving modulations of the principal g-factors as well as rotations of the gyro-magnetic axes The strength of these mechanisms is dependent on the symmetry of the hole wave function, thus on the balance between barrier gate voltages and on disorder. The latter moreover pins the motion of the hole to some extent, and can thus significantly change the response to electrical perturbations, especially in the vicinity of the sweet lines of the barrier gates.

[S1] L. E. A. Stehouwer, C. X. Yu, B. van Straaten, A. Tosato, V. John, D. D. Esposti, A. Elsayed, D. Costa, S. D. Oosterhout, N. W. Hendrickx, M. Veldhorst, F. Borsoi, and G. Scappucci, Exploiting epitaxial strained germanium for scaling low noise spin qubits at the micron-scale, ArXiv (2024).

[S2] C. A. Wang, V. John, H. Tidjani, C. X. Yu, A. S. Ivlev, C. D´eprez, F. van Riggelen-Doelman, B. D. Woods, N. W. Hendrickx, W. I. Lawrie, L. E. Stehouwer, S. D. Oosterhout, A. Sammak, M. Friesen, G. Scappucci, S. L. de Snoo,

M. Rimbach-Russ, F. Borsoi, and M. Veldhorst, Operating semiconductor quantum processors with hopping spins, Science (New York, N.Y.) 385, 447 (2024).

[S3] A. S. Rao, D. Buterakos, B. van Straaten, V. John, C. X. Yu, S. D. Oosterhout, L. Stehouwer, G. Scappucci, M. Veldhorst, F. Borsoi, and J. P. Zwolak, MAViS: Modular Autonomous Virtualization System for Two-Dimensional Semiconductor Quantum Dot Arrays, ArXiv (2024).

[S4] X. Xue, T. Watson, J. Helsen, D. Ward, D. Savage, M. Lagally, S. Coppersmith, M. Eriksson, S. Wehner, and L. Vandersypen, Benchmarking gate fidelities in a Si/SiGe two-qubit device, Physical Review X 9, 021011 (2019).

[S5] J. M. Luttinger and W. Kohn, Motion of Electrons and Holes in Perturbed Periodic Fields, Physical Review 97, 869 (1955).

[S6] M. Willatzen and L. C. Lew Yan Voon, The k p method: Electronic properties of semiconductors, The k p Method: Electronic Properties of Semiconductors , 1 (2009).

[S7] B. Venitucci, L. Bourdet, D. Pouzada, and Y. M. Niquet, Electrical manipulation of semiconductor spin qubits within the g -matrix formalism, Physical Review B 98, 155319 (2018).

[S8] B. Martinez, J. C. Abadillo-Uriel, E. A. Rodr´ıguez-Mena, and Y.-M. Niquet, Hole spin manipulation in inhomogeneous and nonseparable electric fields, Physical Review B 106, 235426 (2022).

[S9] L. Mauro, E. A. Rodr´ıguez-Mena, M. Bassi, V. Schmitt, and Y.-M. Niquet, Geometry of the dephasing sweet spots of spin-orbit qubits, Physical Review B 109, 155406 (2024).

[S10] J. C. Abadillo-Uriel, B. Martinez, M. Filippone, and Y. M. Niquet, Two-body Wigner molecularization in asymmetric quantum dot spin qubits, Physical Review B 104, 195305 (2021).

[S11] J. C. Abadillo-Uriel, E. A. Rodr´ıguez-Mena, B. Martinez, and Y.-M. Niquet, Hole-Spin Driving by Strain-Induced Spin-Orbit Interactions, Physical Review Letters 131, 097002 (2023).

[S12] A. Abragam and B. Bleaney, Electron Paramagnetic Resonance of Transition Ions (Presses Universitaires de France, 1971).

[S13] S. Bosco, M. Benito, C. Adelsberger, and D. Loss, Squeezed hole spin qubits in Ge quantum dots with ultrafast gates at low power, Physical Review B 104, 10.1103/PhysRevB.104.115425 (2021).

[S14] The tilt of the gyromagnetic axes induced by the drive (owing to the coupling between the in-plane and vertical motions or to inhomogeneous strains) makes little contribution to the Rabi frequencies here; Indeed, it gives rise to ${ \mathrm { ~ a ~ } } \propto \sigma _ { z }$ drive term in the Hamiltonian [S8, S11], which is “transverse” (inducing Rabi oscillations) when the magnetic field is in-plane, but becomes longitudinal (enhancing LSES) once B<sup>⃗</sup> goes out-of-plane and the heavy-hole spin gets locked onto the z axis.

[S15] B. Martinez, S. de Franceschi, and Y.-M. Niquet, Mitigating variability in epitaxial-heterostructure-based spin-qubit devices by optimizing gate layout, ArXiv (2024).

[S16] G. Burkard, T. D. Ladd, A. Pan, J. M. Nichol, and J. R. Petta, Semiconductor spin qubits, Reviews of Modern Physics 95, 025003 (2023).
