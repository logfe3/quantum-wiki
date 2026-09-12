---
title: Coherent spin qubit shuttling through germanium quantum dots
description: 空穴自旋比特在 9 点量子点链中穿梭并保持相干：自旋态搬运是阵列互联与寄存器间量子链路的候选方案。
aliases:
 - ge-shuttle-2024
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">空穴自旋比特在 9 点量子点链中穿梭并保持相干：自旋态搬运是阵列互联与寄存器间量子链路的候选方案。</div>

> [!info] 文献信息
> F. van Riggelen-Doelman *et al.*, “Coherent spin qubit shuttling through germanium quantum dots”, Nature Communications **15**, 5716 (2024).
> [arXiv:2308.02406](https://arxiv.org/abs/2308.02406) · [DOI:10.1038/s41467-024-49358-y](https://doi.org/10.1038/s41467-024-49358-y)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Floor van Riggelen-Doelman,<sup>1</sup> Chien-An Wang,<sup>1</sup> Sander L. de Snoo,<sup>1</sup> William I. L. Lawrie,<sup>1</sup> Nico W. Hendrickx,<sup>1</sup>

Maximilian Rimbach-Russ,<sup>1</sup> Amir Sammak,<sup>2</sup> Giordano Scappucci,<sup>1</sup> Corentin Déprez,<sup>1</sup> and Menno Veldhorst<sup>1</sup>

<sup>1</sup>QuTech and Kavli Institute of Nanoscience, Delft University of Technology,

PO Box 5046, 2600 GA Delft, The Netherlands

<sup>2</sup>QuTech and Netherlands Organisation for Applied Scientific Research (TNO), Delft, The Netherlands (Dated: August 7, 2023)

Quantum links can interconnect qubit registers and are therefore essential in networked quantum computing. Semiconductor quantum dot qubits have seen significant progress in the high-fidelity operation of small qubit registers but establishing a compelling quantum link remains a challenge. Here, we show that a spin qubit can be shuttled through multiple quantum dots while preserving its quantum information. Remarkably, we achieve these results using hole spin qubits in germanium, despite the presence of strong spin-orbit interaction. We accomplish the shuttling of spin basis states over efective lengths beyond 300 µm and demonstrate the coherent shuttling of superposition states over efective lengths corresponding to 9 µm, which we can extend to 49 µm by incorporating dynamical decoupling. These findings indicate qubit shuttling as an efective approach to rout qubits within registers and to establish quantum links between registers.

## INTRODUCTION

The envisioned approach for semiconductor spin qubits towards fault-tolerant quantum computation centers on the concept of quantum networks, where qubit registers are interconnected via quantum links [1]. Significant progress has been made in controlling few-qubit registers [2, 3]. Recent eforts have led to demonstrations of high fidelity single- and two-qubit gates [4, 5], quantum logic above one Kelvin [6–8] and operation of a 16 quantum dot array [9]. However, scaling up to larger qubit numbers requires changes in the device architecture [10– 13].

Inclusion of short-range and mid-range quantum links could be particularly efective to establish scalability, addressability, and qubit connectivity. The coherent shuttling of electron or hole spins is an appealing concept for the integration of such quantum links in spin qubit devices. Short-range coupling, implemented by shuttling a spin qubit through quantum dots in an array, can provide flexible qubit routing and local addressability [14, 15]. Moreover, it allows to increase connectivity beyond nearest-neighbour coupling and decrease the number of gates needed to execute algorithms. Midrange links, implemented by shuttling spins through a multitude of quantum dots, may entangle distant qubit registers for networked computing and allow for qubit operations at dedicated locations [14, 16–18]. Furthermore, such quantum buses could provide space for the integration of on-chip control electronics [1], depending on their footprint.

The potential of shuttling-based quantum buses has stimulated research on shuttling electron charge [19–21] and spin [15, 22–29]. While nuclear spin noise prevents high-fidelity qubit operation in gallium arsenide, demonstrations of coherent transfer of individual electron spins through quantum dots are encouraging [22–26]. In silicon, qubits can be operated with high-fidelity and this has been employed to displace a spin qubit in a double quantum dot [15, 27]. Networked quantum computers, however, will require integration of qubit control and shuttling through quantum dots.

Meanwhile, quantum dots defined in strained germanium (Ge/SiGe) heterostructures have emerged as a promising platform for hole spin qubits [30, 31]. The high quality of the platform allowed for rapid development of single spin qubits [32, 33], singlet-triplet qubits [34–36], a four qubit processor [2], and a 4 4 quantum dot array with shared gate control [9]. While the strong spin orbit interaction allows for fast and all-electrical control, the resulting anisotropic g-tensor [31, 37] complicates the spin dynamics and may challenge the feasibility of a quantum bus.

Here, we demonstrate that spin qubits can be shuttled through quantum dots. These experiments are performed with two hole spin qubits in a 2 2 germanium quantum dot array. Importantly, we operate in a regime where we can implement single qubit logic and coherently transfer spin qubits to adjacent quantum dots. Furthermore, by performing experiments with precise voltage pulses and sub-nanosecond time resolution, we can mitigate finite qubit rotations induced by spin-orbit interactions. In these optimized sequences we find that the shuttling performance is limited by dephasing and can be extended through dynamical decoupling.

## COHERENT SHUTTLING OF SINGLE HOLESPIN QUBITS

Fig. 1.a shows a germanium 2 2 quantum dot array identical to the one used in the experiment [2]. The chemical potentials and the tunnel couplings of the quantum dots are controlled with virtual gates $\mathrm { ( v P _ { i } , \ v B _ { i j } ) }$ , which consist of combinations of voltages on the plunger gates and the barrier gates. We operate the device with two spin qubits in quantum dots $\mathrm { Q D _ { 1 } }$ and $\mathrm { Q D _ { 2 } }$ and initialised

i  
![[assets/figures/references/ge-shuttle-2024/36f02f74a6d5a12e67bd47d69f5d91d01dfa90fca25e52a028a7ce6d77f2aaac.jpg]]

![[assets/figures/references/ge-shuttle-2024/2bcddd81e904817d4c3aa29295f3176414ee15e171ccf10c0e83cf6a81bfbdc9.jpg]]

![[assets/figures/references/ge-shuttle-2024/8da7a45e9754d554d969fe09730f9b4549e9ad7ee8fec18bc30c6dae3158d09c.jpg]]

![[assets/figures/references/ge-shuttle-2024/470ce67f6458dfc79ff746fae7ad9a68ee6185873f4608d90ed61958348d0610.jpg]]

![[assets/figures/references/ge-shuttle-2024/6ebcd7ea46a30c9ccb913c610878277ea950aa94daf4af369e989ab4a76b07f1.jpg]]

![[assets/figures/references/ge-shuttle-2024/1e10fc9994242ae5c7c5e823dcffc24a454b155380ccf16d56055acfa35315b9.jpg]]

![[assets/figures/references/ge-shuttle-2024/5da2b6a11f054da75149e7b5018e4863a36534b48f86a49dc821720d5310077c.jpg]]

![[assets/figures/references/ge-shuttle-2024/a80550e332661672d06a9b286e0e7ce7f216b83f35415c00d683aba8efaec547.jpg]]

![[assets/figures/references/ge-shuttle-2024/4b64c2ffb2966d99277a07781832a8967ccc8b262ba34512b0a7702ab3bf9601.jpg]]

![[assets/figures/references/ge-shuttle-2024/2079ac62b1acf5ea0cbe2214318dc91729e4bcd17e211653d19c55a2004702aa.jpg]]

![[assets/figures/references/ge-shuttle-2024/84041875de1f5e89c0f829d70654e154482319076a9b9bda560d28fb98ce559c.jpg]]

![[assets/figures/references/ge-shuttle-2024/de6192137ed8a2df9d494a194a95bbb383831f942ea3b47d7dee6a5ebe294dc1.jpg]]  
Figure 1. Coherent shuttling of hole spin qubits in germanium double quantum dots. a, A false colored scanning electron microscope image of a similar device to the one used in this work. The quantum dots are formed under the plunger gates (light blue) and separated by barrier gates (dark blue) which control the tunnel couplings. A single hole transistor is defined by the yellow gates and is used as charge sensor. The scale bar corresponds to 100 nm. b, Schematic showing the principle of bucket brigade mode shuttling. The detuning energy $\epsilon _ { 2 3 / 3 4 }$ between the two quantum dots is progressively changed such that it becomes energetically favorable for the hole to tunnel from one quantum dot to another. $\mathbf { c } ,$ Schematic of the pulses used for the shuttling experiments shown in (g) and (k), where the resonance frequency of the qubit is probed after the application of a detuning pulse using a 4 µs EDSR pulse. d, Schematic of the pulses used for coherent shuttling experiments of which the results are shown in (h) and (l). The qubit is prepared in a superposition state using $\textrm { a } \pi / 2$ pulse and is transferred to the empty quantum dot with a detuning pulse of varying amplitude, and then brought back to its initial position after an idle time. After applying another $\pi / 2$ pulse we readout the spin state. $\mathbf { e } , \mathbf { i } ,$ Schematic illustrating the shuttling of a spin qubit between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ (e) and between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ (i). f, j, Charge stability diagrams of $\mathrm { Q D _ { 2 } \mathrm { - Q D _ { 3 } } }$ (f) and $\mathrm { Q D _ { 3 } \mathrm { - Q D _ { 4 } } }$ (j). To shuttle the qubit from one site to another, the virtual plunger gate voltages are varied along the detuning axis (white arrow), which crosses the interdot charge transition line. g, k, Probing of the resonance frequency along the detuning axi for the double quantum dot $\mathrm { Q D _ { 2 } \mathrm { - Q D _ { 3 } } }$ (g) and $\mathrm { Q D _ { 3 ^ { - } } Q D _ { 4 } \ ( k ) }$ . The resonance frequencies of the spin in the diferent quantum dots are clearly visible, indicating the possibility to shuttle a hole while preserving its spin polarization. Nearby the charge transition, the resonance frequency cannot be resolved due to a combination of efects discussed in Supplementary Note 1. h, l, Coherent free evolution of a qubit during the shuttling between QD<sub>2</sub>-QD<sub>3</sub> (h) and $\mathrm { Q D _ { 3 } \mathrm { - Q D _ { 4 } \ ( l ) } }$ . Since the Larmor frequency varies along the detuning axes, the qubit initialized in a superposition state acquires a phase that varies with the idle time resulting in oscillations in the spin-up $\mathrm { P } _ { \uparrow }$ probabilities.

the $\mid \downarrow \downarrow \rangle$ state (see Methods). We use the qubit in $\mathrm { Q D _ { 1 } }$ as an ancilla to readout the hole spin in $\mathrm { Q D _ { 2 } }$ , using latched Pauli spin blockade [2, 38, 39]. The other qubit starts in $\mathrm { Q D _ { 2 } }$ and is shuttled to the other quantum dots by changing the detuning energies $\left( \epsilon _ { 2 3 / 3 4 } \right)$ between the quantum dots (Fig. 1.b, e and i). The detuning energies are varied by pulsing the plunger gate voltages as illustrated in Fig. 1.f and j. Additionally, we increase the tunnel couplings between $\mathrm { Q D _ { 2 } \mathrm { - Q D _ { 3 } } }$ and $\mathrm { Q D _ { 3 } \mathrm { - Q D _ { 4 } } }$ before shuttling to allow for adiabatic charge transfer.

The g-tensor of hole spin qubits in germanium is sensitive to the local electric field. Therefore, the Larmor frequency $\left( f _ { \mathrm { L } } \right)$ is diferent in each quantum dot [32–34]. We exploit this efect to confirm the shuttling of a hole spin from one quantum dot to another. In Fig. 1.c. we show the experimental sequence used to measure the qubit resonance frequency, while changing the detuning to transfer the qubit. Fig 1.g (k) shows the experimental results for spin transfers from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } \ ( Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } ) }$ . Two regions can be clearly distinguished in between which $f _ { \mathrm { L } }$ varies by 110 (130) MHz. This obvious change in $f _ { \mathrm { L } }$ clearly shows that the hole is shuttled from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } \ ( Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } ) }$ when applying a suficiently large detuning pulse. To investigate whether such transfer is coherent, we probe the free evolution of qubits prepared in a superposition state after applying a detuning pulse (Fig. 1.d) [27]. The resulting coherent oscillations are shown in Fig. 1.h (l). They are visible over the full range of voltages spanned by the experiment and arise from a phase accumulation during the idle time. Their frequency $f _ { \mathrm { o s c } }$ is determined by the diference in resonance frequency between the starting and end point in detuning as shown in Supplementary Figure 1. The abrupt change in $f _ { \mathrm { o s c } }$ marks the point where the voltage pulse is suficiently large to transfer the qubit from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ $\mathrm { ( Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } ) }$ . These results clearly demonstrate that single hole spin qubits can be coherently transferred.

## THE EFFECT OF STRONG SPIN-ORBIT INTERACTION ON SPIN SHUTTLING

The strong spin-orbit interaction in our system has a significant impact on the spin dynamics during the shuttling. It appears when shuttling a qubit in a  state between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ using fast detuning pulses with voltage ramps of 4 ns. Doing this generates coherent oscillations shown in Fig. 2.b that appear only when the qubit is in $\mathrm { Q D _ { 3 } }$ . They result from the strong spin-orbit interaction and the use of an almost in-plane magnetic field [40]. In this configuration, the direction of the spin quantization axis depends strongly on the local electric field [35, 37, 41–43] and can change significantly between neighbouring quantum dots. Therefore, a qubit in a spin basis state in $\mathrm { Q D _ { 2 } }$ becomes a superposition state in $\mathrm { Q D _ { 3 } }$ when diabatically shuttled. Consequently, the spin precesses around the quantization axis of $\mathrm { Q D _ { 3 } }$ until it is shuttled back (Fig. 2.a). This leads to qubit rotations and the aforementioned oscillations.

While these oscillations are clearly visible for voltage pulses with ramp times $t _ { \mathrm { r a m p } }$ of few nanoseconds, they fade as the ramp times are increased, as shown in Fig. $2 . \mathrm { c } ,$ and vanish for $t _ { \mathrm { r a m p } } > 3 0$ ns. The qubit is transferred adiabatically and can follow the change in quantization axis and therefore remains in the spin basis state in both quantum dots. From the visibility of the oscillations, we estimate that the quantization axis of $\mathrm { Q D _ { 3 } \ ( Q D _ { 4 } ) }$ is tilted by at least $4 2 ^ { \circ } \ ( 3 3 ^ { \circ } )$ compared to the quantization axis of $\mathrm { Q D _ { 2 } \ ( Q D _ { 3 } ) }$ . These values are corroborated by independent estimations made by fitting the evolution of $f _ { \mathrm { L } }$ along the detuning axes (see Supplementary Note 2).

Fig. 2.d and Fig. 2.e display the magnetic field dependence of the oscillations generated by diabatic shuttling. Their frequencies $f _ { \mathrm { o s c } }$ increase linearly with the field and match the Larmor frequencies $f _ { \mathrm { L } }$ measured for a spin in the target quantum dot. This is consistent with the explanation that the oscillations are due to the spin precessing around the quantization axis of the second quantum dot.

## SHUTTLING PERFORMANCE

To quantify the performance of shuttling a spin qubit, we implement the experiments depicted in Fig. 3.a, e and f [15, 27] and study how the state of a qubit evolves depending on the number of subsequent shuttling events. For hole spins in germanium, it is important to account for rotations induced by the spin-orbit interaction. This can be done by aiming to avoid unintended rotations, or by developing methods to correct them. An example of the first approach is transferring the spin qubits adiabatically. This implies using voltage pulses with ramps of tenths of nanoseconds, which are significant with respect to the dephasing time. However, this strongly limits the shuttling performance (see Supplementary Figure 5). Instead, we can mitigate rotations by carefully tuning the duration of the voltage pulses, such that the qubit performs an integer number of 2π rotations around the quantization axis of the respective quantum dot. This approach is demanding, as it involves careful optimization of the idle times in each quantum dot as well as the ramp times, as depicted in Fig. 3.b. However, it allows for fast shuttling, with ramp times of typically 4 ns and idle times of 1 ns, significantly reducing the dephasing experienced by the qubit during the shuttling. We employ this strategy in the rest of our experiments.

We first characterize the fidelity of shuttling spin basis states. We do this by preparing a qubit in a or state and transferring it multiple times between the quantum dots. Fig. 3.c and d display the spin-up fraction $\mathrm { P _ { \uparrow } }$ measured as a function of the number of shuttling steps $n .$ . The probability of ending up in the initial state shows a clear exponential dependence on n. No oscillations of $\mathrm { P _ { \uparrow } }$ with n are visible, confirming that the pulses have been successfully optimized to account for unwanted spin rotations. We find for the shuttling of basis states characteristic decay constants $n ^ { * } = 3 0 0 0$ shuttlings, corresponding to polarization transfer fidelities $F = \exp ( - 1 / n ^ { * } ) \simeq 9 9 . 9 7 ~ \%$ This is similar to the fidelities reached in silicon devices [15, 27], despite the anisotropic g-tensors due to the strong spin-orbit interaction in our platform.

We now focus on the performance of coherent shut-

a

![[assets/figures/references/ge-shuttle-2024/752c6e02148355fb45d8c7d452cd343098beb33aa26c0c2832ea8d7e602f0c7f.jpg]]

![[assets/figures/references/ge-shuttle-2024/7cb24ec2966c33d94bced77582748191d52233d0de585fd0ab9ea2e50b057778.jpg]]

![[assets/figures/references/ge-shuttle-2024/fceb83542436bb38ff191f27d133f1d53cf6a9589c167398e2cfeeba5fb348c5.jpg]]

![[assets/figures/references/ge-shuttle-2024/1b570d0a1213c0cdc58bb9f544f397dbdc379ae0befc8a36cda7e06c42aaa141.jpg]]

![[assets/figures/references/ge-shuttle-2024/d9de73c9db00b517135a39691dafd3d6fac175719cb41abcc7cb8251c7ae1245.jpg]]  
Figure 2. Rotations induced while shuttling by the diference in quantization axes. ${ \mathbf { a } } ,$ Schematic explaining the efect of the change in quantization axis direction that the qubit experiences during the shuttling process. The diference in quantization axis between quantum dots is caused by the strong spin-orbit interaction. b, Oscillations induced by the change in quantization axis while shuttling diabatically a qubit in a state between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ . Ramp times of 4 ns are used for the detuning pulses. $\mathbf { c } ,$ Oscillations due to the change in quantization axis at a fixed point in detuning, as function of the voltage pulse ramp time used to shuttle the spin. When the ramp time is long enough, typically above 30 ns, the spin i shuttled adiabatically and the oscillations vanish. d, Magnetic-field dependence of the oscillations induced by the diference in quantization axis. $\mathbf { e } ,$ Frequency of the oscillations $f _ { \mathrm { o s c } }$ induced by the change in quantization axis as a function of magnetic field for diferent shuttling processes. The oscillation frequency $f _ { \mathrm { o s c } }$ for $\mathrm { Q D _ { 3 } }$ is extracted from measurements displayed in (d) (and similar experiments for the other quantum dot pairs) and is plotted with points. $f _ { \mathrm { o s c } }$ scales linearly with the magnetic field. Comparing $f _ { \mathrm { o s c } }$ with resonance frequencies measured using EDSR pulses (data points depicted with stars) reveals that $f _ { \mathrm { o s c } }$ is given by the Larmor frequency of the quantum dot towards which the qubit is shuttled (black label).

tling. We prepare a superposition state via an EDSR $( \pi / 2 ) _ { \mathrm { X } }$ pulse, shuttle the qubit, apply another $\pi / 2$ pulse and measure the spin state. Importantly, one must account for zˆ-rotations experienced by the qubits during the experiments. Therefore, we vary the phase of the EDSR pulse $\Phi$ for the second $\pi / 2$ pulse. For each $n ,$ we then extract the amplitude A of the $\mathrm { P } _ { \uparrow }$ oscillations that appear as function of $\Phi$ [15, 27]. Fig. 3.g, h show the evolution of $A$ as a function of n for shuttling between adjacent quantum dots. We fit the experimental results using A<sub>0</sub> $\exp \left( - ( n / n ^ { * } ) ^ { \alpha } \right)$ and find characteristic decay constants $n _ { 2 3 } ^ { * } = 6 4 \pm 1$ and $n _ { 3 4 } ^ { * } = 7 7 \pm 2$ . Remarkably, these numbers compare favourably to $n ^ { * } \simeq 5 0$ measured in a SiMOS electron double quantum dot [27], where the spin-orbit coupling is weak.

The exponents, $\alpha _ { 2 3 } = 1 . 3 6 { \pm } 0 . 0 5$ and $\alpha _ { 3 4 } = 1 . 2 8 { \pm } 0 . 0 6$ reveal that the decays are not exponential. This contrasts with observations in silicon [15, 27], and suggests that the shuttling of hole spins in germanium is limited by other mechanisms. Two types of errors can be distinguished: those induced by the shuttling processes and errors due to the dephasing during free evolution. To investigate the efect of the latter, we modify the shuttling sequence and include a $( \pi ) _ { \mathrm { X } }$ echoing pulse in the middle as displayed in Fig. 3.e. Fig. 3.g and h show the experimental results and it is clear that in germanium the coherent shuttling performance is improved significantly using an echo pulse: we can extend the shuttling by a factor of four to five, reaching a characteristic decay of more than 300 shuttles. Similarly, the use of CPMG sequences incorporating two decoupling $( \pi ) _ { \mathrm { Y } }$ pulses (Fig. 3.f) allows further, though modest, improvements. These enhancements in the shuttling performance confirm that dephasing is limiting the shuttling performance contrary to observations in SiMOS [27]. We speculate that the origin of the difference is two-fold. Firstly, due to the stronger spin-orbit interaction, the spin is more sensitive to charge noise, resulting in a shorter dephasing times [44]. Secondly, the excellent control over the potential landscape in germanium allows minimizing the errors which are due to the shuttling itself.

## SHUTTLING THROUGH QUANTUM DOTS

For distant qubit coupling, it is essential that a qubit can be coherently shuttled through a series of quantum dots. This is more challenging, as it requires control and optimization of a larger amount of parameters. We perform two types of experiments to probe the shuttling through a quantum dot, labelled corner shuttling and triangular shuttling. Fig. 4.b shows a schematic of the corner shuttling, which consists of transferring a qubit from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ and back along the same route. The triangular shuttling, depicted in Fig. 4.e, consists of shuttling the qubit from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ , and then directly back to $\mathrm { Q D _ { 2 } }$ , without passing through $\mathrm { Q D _ { 3 } }$ (for the charge stability diagram $\mathrm { Q D _ { 4 } \mathrm { - Q D _ { 2 } } }$ and a detailed description see Supplementary Note 4).

a Pulses polarization and Ramsey $( n = 6 )$  
![[assets/figures/references/ge-shuttle-2024/2be3289dd5fdacd2991f78eaaf668f3ec9e399af4f28b319fca4ac5e1f7bee89.jpg]]

b  
![[assets/figures/references/ge-shuttle-2024/1ad19b0c004bddc899a14dbb8635075fea33219182c49240b73be51fd9ecc36e.jpg]]

![[assets/figures/references/ge-shuttle-2024/0c47eee271d769ab65b29dcd20248c5f30a1998b2a89bc38495326f289cf3dc8.jpg]]

![[assets/figures/references/ge-shuttle-2024/47763620ce49ba40aa44f7cb516959e6e81b2d21040db80389060d98cb0a2756.jpg]]

![[assets/figures/references/ge-shuttle-2024/b17fca1cb392b2fd2ae16883a513afbfcfff7ce06cbc1cda61dc0580106ccb62.jpg]]

![[assets/figures/references/ge-shuttle-2024/def79b78b622ed52f8d130577aa245042affe874597ccff0ba0fcb9f02a75d08.jpg]]

![[assets/figures/references/ge-shuttle-2024/cfa0a9fafcd54f35ed3afb7c28a8e17d33dafb76dec27475fc2f8510f05dcd6a.jpg]]

![[assets/figures/references/ge-shuttle-2024/dcfdaf56ec744446fa8e03494e07f90563579e718076d719fb7e477156b47379.jpg]]  
Figure 3. Quantifying the performance for the shuttling in double quantum dots. a, Schematic of the pulse sequence used for quantifying the performance of shuttling basis states (blue) or a superposition state (grey). The spin qubit is prepared in the quantum dot where the shuttling experiment starts, by either applying an identity gate (shuttling a  state), a $( \pi ) _ { \mathrm { X } }$ pulse (shuttling a state) or $( \pi / 2 ) _ { \mathrm { X } }$ pulse (shuttling a superposition state, also referred to as Ramsey shuttling experiments). Detuning pulses are applied to the plunger gates to shuttle the hole from one quantum dot to another, back and forth, and finally the appropriate pulses are applied to prepare for readout. Moving the qubit from one quantum dot to another is counted as one shuttling event $n = 1$ . Since the hole always needs to be shuttled back for readout, n is always an even number. The schematic shows an example for $n = 6$ . b, Zoom-in on the detuning pulses used for the shuttling. To make an integer number of 2π rotation(s) around the quantization axis of the second quantum $\operatorname* { d o t } ,$ , all ramp and idle times in the pulse need to be optimized. $\mathbf { c } , \mathbf { d } ,$ , Spin-up probabilities P measured after shuttling n times a qubit prepared in a spin basis state between $\mathrm { Q D _ { 2 } }$ and $\mathrm { { Q D _ { 3 } } \left( c \right) }$ and between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ (d). The decay of $\mathrm { P } _ { \uparrow }$ as a function of n is fitted to an exponential function $\mathrm { P } _ { \uparrow } = \mathrm { P } _ { 0 } \exp ( - n / n ^ { * } ) + \mathrm { P } _ { \mathrm { s a t } }$ . e, Pulse sequence used for implementing a Hahn echo shuttling experiment. In the middle of the shuttling experiment, an echo pulse $( \pi ) \mathrm { x }$ is applied in the quantum dot where the spin qubit was initially prepared. Example for $n = 1 2 .$ f, Pulse sequence for a CPMG shuttling experiment. Two (π)<sub>Y</sub> pulses are inserted between the shuttling pulses. Example for $n = 2 4$ . g, h, Performance of the shuttling of superposition state between $\mathrm { Q D _ { 2 } }$ and QD<sub>3</sub> (g) and QD<sub>2</sub> and $\mathrm { { Q D _ { 3 } } \ ( h ) }$ for diferent shuttling sequences. The decay of the coherent amplitude A of the superposition state are fitted by $A _ { 0 }$ exp $( - ( n / n ^ { * } ) ^ { \alpha } )$ ) where α is a fitting parameter.

To probe the feasibility of shuttling through a quantum dot, we measure the free evolution of a coherent state while varying the detuning between the respective quantum dots. The results are shown in Fig 4.a. We find a remarkably clear coherent evolution for hole spin transfer from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ and to $\mathrm { Q D _ { 2 } }$ . We observe one sharp change in the oscillation frequency for each transfer to the next quantum dot. We also note that after completing one round of the triangular shuttling, the phase evolution becomes constant, in agreement with a qubit returning to its original position. We thereby conclude that we can shuttle through quantum dots as desired.

We now focus on quantifying the performance of shuttling through quantum dots by repeated shuttling experiments. To allow comparisons with previous experiments, we define n as the number of shuttling steps between two quantum dots. Meaning that one cycle in the corner shuttling experiments results in $n = 4$ , while a loop in triangular shuttling takes $n = 3$ steps. The results for shuttling basis states are shown in Fig. 4.c and 4.f. We note that the spin polarization decays faster compared to the shuttling in double quantum dots, in particular for the triangular shuttling. The corresponding fidelities per shuttling step are $F \simeq 9 9 . 9 6 \ \%$ for the corner shuttling and $F \geq 9 9 . 6 3 $ % for the triangular shuttling.

b  
![[assets/figures/references/ge-shuttle-2024/657b0840e061077cdf2a65782fc635f71f1b23129059cdae74f7c09cecbb0967.jpg]]

![[assets/figures/references/ge-shuttle-2024/7de26b2c38417a61d1a63475d3811d8d9c747cda2b5fd5fb0fabdb34fd4733d6.jpg]]

c  
![[assets/figures/references/ge-shuttle-2024/21673265a2a35bfb9ad2c01adc104a792849f6979d41465cc827acc8ee484871.jpg]]

d  
![[assets/figures/references/ge-shuttle-2024/78cf32e9c8f50d1ea673b6cbfdfead619f07b8612409b067ce5d9656d2eb3819.jpg]]

![[assets/figures/references/ge-shuttle-2024/fc08eb8dd00e1ac344356c8f30b1c0e3288f4cbd399b877b8b1b25006c2119a6.jpg]]

f  
![[assets/figures/references/ge-shuttle-2024/bf6a66eeb1adaa6ff87b3db1ec7015e9acb666d36a51c955f2cbeb24669927a9.jpg]]

g  
![[assets/figures/references/ge-shuttle-2024/44fb448dec2fb53db850aa86f90a3f91bfec94e0add6741e71e93163af9a1af7.jpg]]  
Figure 4. Coherent shuttling through quantum dots. a, Results of free evolution experiments, similar to those displayed in ${ \mathrm { F i g . } }$ 1.h and l for the corner and triangular shuttling processes. In these experiments, the amplitude of the detuning pulse is increased in steps, in order to shuttle a qubit from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ and back (top panel), from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ and back (second panel). The measurement in the third panel is identical to the measurement in the second panel, but the final point in the charge stability diagram is stepped towards the charge degeneracy point between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 4 } }$ . In the bottom panel the qubit is shuttled in a triangular fashion: from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ $\mathrm { Q D _ { 2 } }$ . The ramp times for this experiment are chosen in such a way that the shuttling is adiabatic with respect to the changes in quantization axis. b, $\mathbf { e } ,$ Schematic illustrating the shuttling of a spin qubit around the corner: from QD<sub>2</sub> to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ and back via $\mathrm { { Q D _ { 3 } } \ ( b ) }$ and in a triangular fashion: from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 3 } }$ to $\mathrm { Q D _ { 4 } }$ and directly back to $\mathrm { { Q D _ { 2 } } \ ( e ) }$ . The double arrow from $\mathrm { Q D _ { 4 } }$ to $\mathrm { Q D _ { 2 } }$ indicates that this pulse is made in two steps, in order for the spin to shuttle via the charge degeneracy point of $\mathrm { Q D _ { 4 } \mathrm { ~ - ~ } Q D _ { 2 } }$ and avoid crossing charge transition lines. c, f, Performance for the corner shuttling (c) and the triangular shuttling (f) of a qubit prepared in the basis states. d, g, Performance for shuttling a qubit prepared in a superposition state for the corner shuttling (d) and the triangular shuttling (g) and for diferent shuttling sequences. Shuttling performance for diferent processes are summarized in Supplementary Table 1.

For the corner shuttling, the faster decay of the basis states suggests a slight increase of the systematic error per shuttling. This may originate from the use of a more elaborated pulse sequence, which makes pulse optimization more challenging. Nonetheless, the characteristic decay constant $n ^ { * }$ remains above 2000 and corresponds to efective distances beyond 300 µm (taking a 140 nm quantum dot spacing). The fast decay for the triangular shuttling is likely originating from the diag onal shuttling step. The tunnel coupling between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 4 } }$ is low and more challenging to control, due to the absence of a dedicated barrier gate. The low tunnel coupling demands slower ramp times $( t _ { \mathrm { r a m p } } \simeq 3 6 ~ \mathrm { n s } )$ for the hole transfer. This increases the time spent close to the $( 1 , 1 , 0 , 0 ) – ( 1 , 0 , 0 , 1 )$ charge degeneracy point where spin randomization induced by excitations to higher energy states is enhanced [45].

Remarkably, we find that the performance achieved for coherent corner shuttling (as shown in Fig. 4.d) are comparable to those of coherent shuttling between neighbouring quantum dots. This stems from the performance being limited by dephasing. However, the performance for the CPMG sequence appears inferior when compared to the single echo-pulse sequence. Since the shuttling sequence becomes more complex, we speculate that it is harder to exactly compensate for the change in quantization axes. Imperfect compensation may introduce transversal noise, which is not fully decoupled using the

CPMG sequence. Moreover, close to the anticrossing, the spin is subject to high frequency noise [45], whose efect is not corrected and can be enhanced depending on the dynamical decoupling sequence.

The performance of the coherent triangular shuttling, displayed in Fig. 4.g, fall short compared to the corner shuttling. Yet, the number of shuttles reached remains limited by dephasing as shown by the large improvement of $n ^ { * }$ obtained using dynamical decoupling. The weaker performance are thus predominantly a consequence of the use of longer voltage ramps. A larger number of coherent shuttling steps may be achieved by increasing the diagonal tunnel coupling, which could be obtained by incorporating dedicated barrier gates.

## CONCLUSION

We have demonstrated coherent spin qubit shuttling through quantum dots. While holes in germanium provide challenges due to an anisotropic g-tensor, we find that spin basis states can be shuttled $n ^ { * } = 2 2 3 0$ times and coherent states up to $n ^ { * } = 6 7$ times and even up to $n ^ { * } = 3 5 0$ times when using echo pulses. The small effective mass and high uniformity of strained germanium allow for a comparatively large quantum dot spacing of 140 nm. This results in efective length scales for shuttling basis states of $l _ { \mathrm { s p i n } } = 3 1 2$ µm and for coherent shuttling of $l _ { \mathrm { c o h } } = 9$ µm. By including echo pulses we can extend the efective length scale to $l _ { \mathrm { c o h } } = 4 9 \ \mu \mathrm { m }$ . These results compare favourably to efective lengths obtained in silicon [15, 27–29]. We note that using efective lengths to predict the performance of practical shuttling links requires caution, as the spin dynamics will dependent on the noise of the quantum dot chain. For example, if the noise is local, echo pulses may proof less efective. However, in that case, motional narrowing may facilitate the shuttling [22, 25, 29, 46, 47]. Furthermore, operating at even lower magnetic fields and exploiting purified germanium will boost the coherence time and thereby the ability to coherently shuttle.

While we have focused on bucket-brigade-mode shuttling, our results also open the path to conveyor-mode shuttling in germanium, where qubits would be coherently displaced in propagating potential wells using shared gate electrodes. This complementary approach holds promise for making scalable mid-range quantum links and has recently been successfully investigated in silicon [29], though on limited length scales. However, for holes in germanium the small efective mass and absence of valley degeneracy will be beneficial in conveyor-mode shuttling.

Importantly, quantum links based on shuttling and spin qubits are realized using the same manufacturing techniques. Their integration in quantum circuits may provide a path toward networked quantum computing.

## METHODS

## Materials and device fabrication

The device is fabricated on a strained $\mathrm { G e / S i G e }$ heterostructure grown by chemical vapour deposition [30, 48]. From bottom to top the heterostructure is composed of a 1.6 µm thick relaxed Ge layer, a 1 µm step graded ${ \mathrm { S i } } _ { 1 - x } { \mathrm { G e } } _ { x }$ (x going from 1 to 0.8) layer, a 500 nm relaxed $\mathrm { S i _ { 0 . 2 } G e _ { 0 . 8 } }$ layer, a strained 16 nm Ge quantum well, a 55 nm $\mathrm { S i _ { 0 . 2 } G e _ { 0 . 8 } }$ spacer layer and $\mathrm { a } < 1$ nm thick Si cap. Contacts to the quantum well are made by depositing 30 nm of aluminium on the heterostructure after etching of the oxidized Si cap. The contacts are isolated from the gate electrodes using a 10 nm aluminium oxide layer deposited by atomic layer deposition. The gates are defined by depositing $\mathrm { T i } / \mathrm { P d }$ bilayers. They are separated from the each other and from the substrate by $7$ nm of aluminium oxide.

## Experimental procedure

To perform the experiments presented, we follow a systematic procedure composed of several steps. We start by preparing the system in a $^ { ( 1 , 1 , 1 , 1 ) }$ charge state with the hole spins in $\mathrm { Q D _ { 1 } }$ and $\mathrm { Q D _ { 2 } }$ initialized in a state, while the other spins are randomly initialized. Subsequently, $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ are depleted to bring the system in a $( 1 , 1 , 0 , 0 )$ charge configuration. After that, the virtual barrier gate voltage $\mathrm { v B } _ { 1 2 }$ is increased to isolate the ancilla qubit in $\mathrm { Q D _ { 1 } }$ . The tunnel couplings between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ and, depending on the experiment, between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ are then increased by lowering the corresponding barrier gate voltages on $\mathrm { \Delta V B _ { 2 3 } }$ and $\mathrm { v B _ { 3 4 } }$ This concludes the system initialization.

Thereafter, the shuttling experiments are performed. Note that to probe the shuttling between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D } _ { 4 } .$ the qubit is first transferred adiabatically (with respect to the change in quantization axis) from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D } _ { 3 } .$ To determine the final spin state after the shuttlings, the qubit is transferred back adiabatically to $\mathrm { Q D _ { 2 } }$ . Next, the system is brought back in the $^ { ( 1 , 1 , 1 , 1 ) }$ charge state, the charge regime in which the readout is optimized. This is done by first increasing $\mathrm { v B } _ { 3 4 }$ and $\mathrm { v B } _ { 3 4 }$ , then decreasing $\mathrm { v B } _ { 1 2 }$ and finally reloading one hole in both $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ . We finally readout the spin state via latched Pauli spin blockade by transferring the qubit in $\mathrm { Q D _ { 1 } }$ to $\mathrm { Q D _ { 2 } }$ and integrating the signal from the charge sensor for 7 µs. Spin-up probabilities are determined by repeating each experiment a few thousand times (typically 3000). Details about the experimental setup can be found in ref. [2].

## Achieving sub nanosecond resolution on the voltage pulses

The voltage pulses are defined as a sequence of ramps with high precision floating point time stamps and voltages. The desired gate voltage $V ( t )$ sequence is generated numerically, sampled at 1 $\mathrm { G S a / s }$ (maximum rate achievable with our setup) and then applied on the sample using arbitrary wave form generators (AWGs). To increase the resolution despite the finite sampling rate, we shift the ramps on the desired gate voltage sequence by fractions of nanoseconds. Shifting a ramp by τ results in a shift of the voltages by $- \tau { \frac { \mathrm { d } V ( t ) } { \mathrm { d } t } }$ . The AWGs outputting the voltage ramp have a higher order low-pass filter with a cut-of frequency of approximately 400 MHz that smoothens the output signal and efectively removes the efect of the time discretization. The time shift of a pulse is not afected by the filter as the time shift does not change the frequency spectrum of the pulse. Thus the voltage sequence efectively generated on the sample is only delayed by τ allowing to achieve a sub nanosecond resolution.

## ACKNOWLEDGEMENTS

We thank A. M. J. Zwerver, M. de Smet, L. M. K. Vandersypen, V. V. Dobrovitski and all the members of the Veldhorst group for inspiring discussions. M.V. acknowledges support through two projectruimtes and a Vidi grant, associated with the Netherlands Organization of Scientific Research (NWO), and an ERC Starting Grant. Research was sponsored by the Army Research Ofice (ARO) and was accomplished under Grant No. W911NF- 17-1-0274. The views and conclusions

[1] Vandersypen, L. M. K. et al. Interfacing spin qubits in quantum dots and donors—hot, dense, and coherent. npj Quantum Information 3, 34 (2017).

[2] Hendrickx, N. W. et al. A four-qubit germanium quantum processor. Nature 591, 580–585 (2021).

[3] Philips, S. G. J. et al. Universal control of a six-qubit quantum processor in silicon. Nature 609, 919–924 (2022).

[4] Lawrie, W. I. L. et al. Simultaneous single-qubit driving of semiconductor spin qubits at the fault-tolerant threshold. Nature Communications 14 (2023).

[5] Mills, A. R. et al. Two-qubit silicon quantum processor with operation fidelity exceeding 99%. Science Advances 8, eabn5130 (2022).

[6] Petit, L. et al. Universal quantum logic in hot silicon qubits. Nature 580, 355–359 (2020).

[7] Yang, C. H. et al. Operation of a silicon quantum processor unit cell above one kelvin. Nature 580, 350–354 (2020).

[8] Camenzind, L. C. et al. A hole spin qubit in a fin fieldefect transistor above 4 kelvin. Nature Electronics 5, 178–183 (2022).

[9] Borsoi, F. et al. Shared control of a 16 semiconductor quantum dot crossbar array. arXiv 2209.06609 (2022).

[10] Van Meter, R. & Horsman, D. A blueprint for building a quantum computer. Communications of the ACM 56, 84–93 (2013).

[11] Wecker, D., Bauer, B., Clark, B. K., Hastings, M. B. & Troyer, M. Gate-count estimates for performing quantum chemistry on small quantum computers. Phys. Rev. A 90, 022305 (2014).

contained in this document are those of the authors and should not be interpreted as representing the oficial policies, either expressed or implied, of the Army Research Ofice (ARO), or the U.S. Government. The U.S. Government is authorized to reproduce and distribute reprints for Government purposes notwithstanding any copyright notation herein. This work is part of the ’Quantum Inspire – the Dutch Quantum Computer in the Cloud’ project (with project number [NWA.1292.19.194]) of the NWA research program ’Research on Routes by Consortia (ORC)’, which is funded by the Netherlands Organization for Scientific Research (NWO).

## DATA AVAILABILITY

Data supporting this work are available on a Zenodo repository at https://doi.org/10.5281/zenodo.8214452.

## COMPETING INTERESTS

The authors declare no competing interests. Correspondence should be sent to M. V. (M.Veldhorst@tudelft.nl).

[12] Reiher, M., Wiebe, N., Svore, K. M., Wecker, D. & Troyer, M. Elucidating reaction mechanisms on quantum computers. PNAS 114, 7555–7560 (2017).

[13] Franke, D. P., Clarke, J. S., Vandersypen, L. M. K. & Veldhorst, M. Rent’s rule and extensibility in quantum computing. Microprocessors and Microsystems 67, 1–7 (2019).

[14] Li, R. et al. A crossbar network for silicon quantum dot qubits. Science Advances 4, eaar3960 (2018).

[15] Noiri, A. et al. A shuttling-based two-qubit logic gate for linking distant silicon quantum processors. Nature Communications 13, 5740 (2022).

[16] Taylor, J. M. et al. Fault-tolerant architecture for quantum computation using electrically controlled semiconductor spins. Nature Physics 1, 177–183 (2005).

[17] Boter, J. M. et al. The spider-web array–a sparse spin qubit array. Phys. Rev. Applied 18, 024053 (2022).

[18] Künne, M. et al. The SpinBus architecture: Scaling spin qubits with electron shuttling. arXiv 2306.16348 (2023).

[19] Mills, A. R. et al. Shuttling a single charge across a one-dimensional array of silicon quantum dots. Nature Communications 10, 1063 (2019).

[20] Seidler, I. et al. Conveyor-mode single-electron shuttling in Si/SiGe for a scalable quantum computing architecture. npj Quantum information 8, 100 (2022).

[21] Xue, R. et al. Si/SiGe QuBus for single electron information-processing devices with memory and micronscale connectivity function. arXiv 2306.16375 (2023).

[22] Flentje, H. et al. Coherent long-distance displacement of individual electron spins. Nature Communications 8, 501 (2017).

[23] Fujita, T., Baart, T. A., Reichl, C., Wegscheider, W. & Vandersypen, L. M. K. Coherent shuttle of electron-spin states. npj Quantum Information 3, 22 (2017).

[24] Mortemousque, P.-A. et al. Coherent control of individual electron spins in a two-dimensional quantum dot array. Nature Nanotechnology 16, 296–301 (2021).

[25] Mortemousque, P.-A. et al. Enhanced spin coherence while displacing electron in a two-dimensional array of quantum dots. PRX Quantum 2, 030331 (2021).

[26] Jadot, B. et al. Distant spin entanglement via fast and coherent electron shuttling. Nature Nanotechnology 16, 570––575 (2021).

[27] Yoneda, J. et al. Coherent spin qubit transport in silicon. Nature Communications 12, 4114 (2021).

[28] Zwerver, A. M. J. et al. Shuttling an electron spin through a silicon quantum dot array. PRX Quantum 4, 030303 (2023).

[29] Struck, T. et al. Spin-EPR-pair separation by conveyormode single electron shuttling in Si/SiGe. arXiv 2307.04897 (2023).

[30] Sammak, A. et al. Shallow and undoped germanium quantum wells: A playground for spin and hybrid quantum technology. Advanced Functional Materials 29, 1807613 (2019).

[31] Scappucci, G. et al. The germanium quantum information route. Nature Reviews Materials 6, 926–943 (2021).

[32] Hendrickx, N. W. et al. A single-hole spin qubit. Nature Communications 11, 3478 (2020).

[33] Hendrickx, N. W., Franke, D. P., Sammak, A., Scappucci, G. & Veldhorst, M. Fast two-qubit logic with holes in germanium. Nature 577, 487–491 (2020).

[34] Jirovec, D. et al. A singlet-triplet hole spin qubit in planar Ge. Nature Materials 20, 1106––1112 (2021).

[35] Jirovec, D. et al. Dynamics of hole singlet-triplet qubits with large g-factor diferences. Phys. Rev. Lett. 128, 126803 (2022).

[36] Wang, C.-A. et al. Probing resonating valence bonds on a programmable germanium quantum simulator. npj Quantum Information 9 (2023).

[37] Hendrickx, N. W. et al. Sweet-spot operation of a germanium hole spin qubit with highly anisotropic noise sensitivity. arXiv 591, 2305.13150 (2023).

[38] Studenikin, S. A. et al. Enhanced charge detection of spin qubit readout via an intermediate state. Applied Physics Letters 101, 233101 (2012).

[39] Harvey-Collard, P. et al. High-fidelity single-shot readout for a spin qubit via an enhanced latching mechanism. Phys. Rev. X 8, 021046 (2018).

[40] Lawrie, W. I. L. Spin qubits in silicon and germanium. PhD Thesis (2022).

[41] Mutter, P. M. & Burkard, G. All-electrical control of hole singlet-triplet spin qubits at low-leakage points. Phys. Rev. B 104, 195421 (2021).

[42] Bosco, S., Benito, M., Adelsberger, C. & Loss, D. Squeezed hole spin qubits in Ge quantum dots with ultrafast gates at low power. Phys. Rev. B 104, 115425 (2021).

[43] Wang, C.-A., Scappucci, G., Veldhorst, M. & Russ, M. Modelling of planar germanium hole qubits in electric and magnetic fields. arXiv 2208.04795 (2022).

[44] Stano, P. & Loss, D. Review of performance metrics of spin qubits in gated semiconducting nanostructures. Nature Review Physics 4, 672–688 (2022).

[45] Krzywda, J. A. & Cywiński, Ł. Interplay of charge noise and coupling to phonons in adiabatic electron transfer between quantum dots. Phys. Rev. B 104, 075439 (2021).

[46] Huang, P. & Hu, X. Spin qubit relaxation in a moving quantum dot. Phys. Rev. B 88, 075301 (2013).

[47] Langrock, V. et al. Blueprint of a scalable spin qubit shuttle device for coherent mid-range qubit transfer in disordered Si/SiGe/SiO<sub>2</sub>. PRX Quantum 4, 020305 (2023).

[48] Lodari, M. et al. Light efective hole mass in undoped Ge/SiGe quantum wells. Phys. Rev. B 100, 041304 (2019).

# Supplementary Material: Coherent spin qubit shuttling through germanium quantum dots

Floor van Riggelen-Doelman,<sup>1</sup> Chien-An Wang,<sup>1</sup> Sander L. de Snoo,<sup>1</sup> William I. L. Lawrie,<sup>1</sup> Nico W. Hendrickx,<sup>1</sup> Maximilian Rimbach-Russ,<sup>1</sup> Amir Sammak,<sup>2</sup> Giordano Scappucci,<sup>1</sup> Corentin D´eprez,<sup>1</sup> and Menno Veldhorst<sup>1</sup>

<sup>1</sup>QuTech and Kavli Institute of Nanoscience, Delft University of Technology,

PO Box 5046, 2600 GA Delft, The Netherlands

<sup>2</sup>QuTech and Netherlands Organisation for Applied Scientific Research (TNO), Delft, The Netherlands (Dated: August 7, 2023)

This Supplementary Material includes :

• Supplementary Notes 1-6

• Supplementary Figures 1-8

• Supplementary Table 1

• Supplementary References 1-8

![[assets/figures/references/ge-shuttle-2024/9ef19dcc9bb8574ab9e7f9bfbf3de28c32646d6f4cb8109b5c32bc77bcd911b1.jpg]]

![[assets/figures/references/ge-shuttle-2024/6b7ac411bc2cbdd4c1a482ff8e6e004ad7c08eb01e81acf14c8667e4fe4ff5de.jpg]]  
Supplementary Figure 1. Evolution of the Larmor frequency for shuttling in double quantum dots. a, b, Larmor frequency diferences $\Delta f = f _ { \mathrm { L } } ( \mathrm { v P 3 } ) - f _ { \mathrm { L } } ^ { \mathrm { Q D 2 } } ~ ( \mathrm { a } )$ and $\Delta f = \hat { f _ { \mathrm { L } } } ( \mathrm { v P } \bar { 4 ) } - f _ { \mathrm { L } } ^ { \mathrm { Q D 3 } }$ (b) measured along the detuning axis of $\mathrm { Q D _ { 2 } \mathrm { - Q D _ { 3 } } }$ (a) and $\mathrm { Q D _ { 3 ^ { - } } Q D _ { 4 } \ ( b ) }$ . The quantum dot where the shuttling experiment starts is taken as the reference point for the frequency. $\Delta f$ is independently evaluated from measurements of the resonance frequency using an EDSR pulse (data displayed in Fig. 1.g and k) and from the frequency of the coherent oscillations that appear when a qubit is shuttled in a superposition state (data displayed in $\mathrm { F i g }$ . 1.h and l). Both sets of data points overlap in (a) and (b), confirming that coherent oscillations arise due to a change in Larmor frequency along the detuning axis. For the free evolution experiments, the shuttling between QD<sub>2</sub> and QD<sub>3</sub> (shown in (a)) is completely adiabatic (ramp times of 40 ns) while the shuttling between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ (shown in (b)) is only partially adiabatic (ramp times of 4 ns). In the latter case, the frequency diference measured is barely afected by the limited adiabaticity as the visibility M of the oscillations induced by the change in quantization axis $( M < 0 . 1$ from Supplementary Figure 2) is suficiently small compared to that of the oscillations arising from the phase evolution of the superposition state $( V \approx 0 . 5$ when the hole is in $\mathrm { Q D _ { 4 } ) }$ . Moreover, the Larmor frequency of both a spin in $\mathrm { Q D _ { 3 } }$ and in $\mathrm { Q D _ { 4 } }$ is very close to 1 GHz. The free evolution experiments were performed with 1 ns time precision, meaning that the oscillations due to the diabaticity of the shuttling only show up as an aliasing pattern and do not disturb the oscillations due to free evolution.

<table><tr><td>Shuttling process</td><td> $n^*$  for  $|\downarrow\rangle$  transfer</td><td> $n^*$  for  $|\uparrow\rangle$  transfer</td><td> $n^*$  for  $\frac{|\downarrow\rangle+i|\uparrow\rangle}{\sqrt{2}}$  transfer</td><td> $\alpha$  for  $\frac{|\downarrow\rangle+i|\uparrow\rangle}{\sqrt{2}}$  transfer</td></tr><tr><td> $QD_2 \rightleftharpoons QD_3$ </td><td> $3.36\times10^{3} \pm 90$ </td><td> $3.2\times10^{3} \pm 100$ </td><td>Ramsey:  $64 \pm 1$ Hahn:  $376 \pm 5$ CPMG:  $450 \pm 20$ </td><td>Ramsey:  $1.36\pm0.05$ Hahn:  $1.44\pm0.04$ CPMG:  $1.14\pm0.06$ </td></tr><tr><td> $QD_3 \rightleftharpoons QD_4$ </td><td> $2.9\times10^{3} \pm 100$ </td><td> $3.1\times10^{3} \pm 100$ </td><td>Ramsey:  $77 \pm 2$ Hahn:  $332 \pm 6$ CPMG:  $500 \pm 10$ </td><td>Ramsey:  $1.28\pm0.06$ Hahn:  $1.17\pm0.04$ CPMG:  $1.3\pm0.07$ </td></tr><tr><td>Corner $QD_2 \rightarrow QD_3 \rightarrow QD_4$  $\rightarrow QD_3 \rightarrow QD_2$ </td><td> $2.23\times10^{3} \pm 80$ </td><td> $2.28\times10^{3} \pm 70$ </td><td>Ramsey:  $67 \pm 2$ Hahn:  $350 \pm 20$ CPMG:  $260 \pm 20$ </td><td>Ramsey:  $1.11\pm0.06$ Hahn:  $1.2\pm0.1$ CPMG:  $0.76\pm0.07$ </td></tr><tr><td>Triangular $QD_2 \rightarrow QD_3 \rightarrow QD_4 \rightarrow QD_2$ </td><td> $380\pm40$ </td><td> $270\pm30$ </td><td>Ramsey:  $19 \pm 1$ Hahn:  $78 \pm 3$ </td><td>Ramsey:  $1.08\pm0.07$ Hahn:  $1.07\pm0.05$ </td></tr></table>

Supplementary Table 1. Summary of shuttling performance. For the spin basis state shuttling experiments, the spin polarization decays with the number of shuttles n are fitted by $\mathrm { P } _ { 0 } \exp ( - ( n / n ^ { * } ) ) + \mathrm { P } _ { \mathrm { s a t } }$ . For the coherent shuttling experiments, the coherence decays are fitted by A<sub>0</sub> exp $( - ( n / n ^ { * } ) ^ { \alpha } )$ $n ^ { * }$ represents the number of shuttles that can be achieved before the polarization the coherence or drops by $1 / \mathrm { e } .$

## Supplementary Note 1. Qubit resonance frequency nearby the interdot charge transition

In Fig. 1.g and k, we show the evolution of the qubit resonance frequency $f _ { \mathrm { L } }$ along the detuning axis of the $\mathrm { Q D _ { 2 ^ { - } } }$ $\mathrm { Q D _ { 3 } }$ quantum dot pair and of the $\mathrm { Q D _ { 3 } \mathrm { - Q D _ { 4 } } }$ quantum dot pair. $f _ { \mathrm { L } }$ is measured by shuttling the spin and applying a 4 µs long EDSR pulse on one plunger gate. While $f _ { \mathrm { L } }$ can be clearly determined when the hole is well-localized in one quantum dot, it cannot be measured nearby the charge transition as the spin-up probability has a high value over the whole range of frequency spanned. We think that this is the result of a combination of diferent efects.

Since the two quantum dots have diferent quantization axes, the system efectively behaves as a flopping-mode qubit nearby the charge transition [1–4] and the EDSR driving is thus expected to be more eficient. This appears, in Fig. 1.g, when the qubit is in $\mathrm { Q D _ { 2 } } ;$ : along the resonance line, we observe an alternation of high and low spin-up probabilities that witness rapid variations of the Rabi frequency. As a consequence, the power broadening increases significantly in the vicinity of the charge transition which prevents us from resolving the qubit resonance frequency. Likewise, the gradient of shear strains induced by the thermal contraction of the gate electrodes can lead to large increases of the Rabi frequency [5]. It is likely that this efect is enhanced in the vicinity of the charge transition, as the hole is delocalized between the two quantum dots and its wavefunction extends below the edges of severa gates. Finally, nearby the charge transition, excitations to higher energy states induced by charge noise are more likely to occur [6], especially on the relatively long timescale of 4 µs. These transitions to higher energy states lead to a randomization of the spin states, which explain the large spin-up probabilities observed over the full frequency range.

## Supplementary Note 2. Quantifying the quantization axis tilt angle

## A. Estimation based on the visibility of the oscillations induced by the change in quantization axis

The tilt angle θ between the quantization axis of two diferent quantum dots can be estimated based on the amplitude of the oscillations induced by diabatically shuttling a qubit in the state. This approximation relies on a simple geometric construction in the Bloch sphere.

Supplementary Figure 2.a shows the Bloch sphere projected on the plane defined by the quantization axes of the two quantum dots (dark blue and dark green). At the beginning of the experiment, the qubit is initialized in the state (red arrow). After shuttling to the neighboring quantum dot, the qubit state changes due to the diference between the quantization axes. In the Bloch sphere, it can be represented by rotations of the state vector around the second quantization axis. After half a period (orange arrow), the state projection on the quantization axis of the quantum dot where the experiment started difers maximally from that of the initial state. This sets the visibility M of the oscillations induced by the change of quantization axis.

a  
![[assets/figures/references/ge-shuttle-2024/01ac69c1c623ff428275d23508e29d0b3e6534142d47a57bdb1705233b51cd3a.jpg]]

b  
![[assets/figures/references/ge-shuttle-2024/b499eaf454d4fbf6a3c6f2c4f5b213efcae3860aa77a4e0fad4c12574ba58cfa.jpg]]

c  
d  
![[assets/figures/references/ge-shuttle-2024/d477385ed72451ff1b2559039ea1d21e947f02ee2fd62e13f9b81a47fe90be8b.jpg]]

![[assets/figures/references/ge-shuttle-2024/c3d13ae7bb2f822caec4e4d7593568b4a1e42dbc040ae2d88b36d04446583881.jpg]]  
Supplementary Figure 2. Estimation of the tilt angle based on the amplitude of the oscillations induced by the diference in quantization axis. ${ \mathbf { a } } ,$ Geometric construction in the Bloch sphere allowing to determine the tilt angle θ between the quantization axes of adjacent quantum dots (blue and dark green). θ is determined from the visibility M of the oscillations induced by the change in quantization axes and the visibility of the Rabi oscillations V. $\mathbf { b } , \mathbf { c } ,$ Oscillations induced while shuttling a qubit in a state between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ (b) and between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ (c) for increasing ramp times. d, Amplitude of the oscillations as function of the ramp times.

In practise, this visibility is reduced due to imperfect initialization and readout. This can be taken into account by assuming that the state vectors have a norm $V / 2 < 0 . 5$ with V being the visibility of Rabi oscillations measured in the quantum dot where the shuttling experiment starts. We neglect relaxation which is irrelevant at the time scale of few nanoseconds [7] and thus assume that the norm of the vector state stays constant during the rotations. We find that:

$$
\theta = \frac {1}{2} \arccos (1 - 2 M / V) \mathrm{with} 0 \leq \theta \leq \pi .\tag{1}
$$

We use this expression to evaluate $\theta _ { 2 3 } \ \left( \theta _ { 3 4 } \right)$ , the tilt angle between the quantization axes of $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } \ ( Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } ) }$ . Supplementary Figure 2.b and c show the amplitudes $M / 2$ of the oscillations induced by the change in quantization axis as function of the pulse ramp time $t _ { \mathrm { r a m p } }$ . As discussed in the main text, the amplitudes drop rapidly to zero as $t _ { \mathrm { r a m p } }$ increases, because the shuttling becomes more adiabatic with respect to the diference in quantization axis. For the evaluation of $\theta$ we use the amplitude $M / 2 = 0 . 1 4 \ ( 0 . 0 7 )$ of the oscillations at the shortest $t _ { \mathrm { r a m p } } = 2$ ns. We remark that there is no clear saturation of M at the smallest ramp times, which suggests that the shuttling process is still not fully diabatic and that higher visibilities could be achieved by shuttling faster. Rabi oscillations for the driving of the qubit in $\mathrm { Q D _ { 2 } \ ( Q D _ { 3 } ) }$ have a visibility of $V = 0 . 6 1 \ ( 0 . 4 8 )$ giving us $\theta _ { 2 3 } \geq 4 2 ^ { \circ } \ ( \theta _ { 3 4 } \geq 3 3 ^ { \circ } )$ . These large values for θ illustrate the strong influence of the local electric field on the direction of the quantization in germanium hole spin qubits operated with an in-plane external magnetic field.

## B. Estimations based on fits with a four-level model

To get additional independent evaluation of the tilt angles, we can fit the evolution of the qubit resonance with a four-level model. To derive such a model, we consider a single hole in a germanium double quantum dot placed in an external magnetic field B. We assume that there is a finite tunnel coupling $t _ { \mathrm { c } }$ between the two quantum dots $\mathrm { Q D _ { A } }$ and $\mathrm { Q D _ { B } }$ and their quantization axis are tilted with respect to each other by an angle θ. This last assumption is suficient to take into account all efects of the spin-orbit interaction, providing a suitable basis transformation and a renormalization of the tunneling terms.

The system can then be described in the basis $\{ \left| \mathrm { A } , \uparrow _ { \mathrm { A } } \right. , \left| \mathrm { A } , \downarrow _ { \mathrm { A } } \right. , \left| \mathrm { B } , \uparrow _ { \mathrm { A } } \right. , \left| \mathrm { B } , \downarrow _ { \mathrm { A } } \right. \}$ , where $\langle \mathrm { A } \rangle$ or $\mathrm { \Delta ^ { 6 } B ^ { \prime } }$ indicates the position of the hole in quantum dot $\mathrm { Q D _ { A } }$ or $\mathrm { Q D _ { B } }$ and $\uparrow _ { \mathrm { A } }$ or <sub>A</sub> specifies its spin states in the frame of quantum dot $\mathrm { A }$ . Its Hamiltonian is then given by:

$$
H _ {\mathrm{model}} = H _ {\mathrm{charge}} + H _ {\mathrm{Zeeman}} = \left( \begin{array}{c c c c} \epsilon & 0 & t _ {\mathrm{c}} & 0 \\ 0 & \epsilon & 0 & t _ {\mathrm{c}} \\ t _ {\mathrm{c}} & 0 & - \epsilon & 0 \\ 0 & t _ {\mathrm{c}} & 0 & - \epsilon \end{array} \right) + \frac {1}{2} B \mu_ {\mathrm{B}} \left( \begin{array}{c c c c} g _ {\mathrm{A}} (\epsilon) & 0 & 0 & 0 \\ 0 & - g _ {\mathrm{A}} (\epsilon) & 0 & 0 \\ 0 & 0 & g _ {\mathrm{B}} (\epsilon) \cos (\theta) & g _ {\mathrm{B}} (\epsilon) \sin (\theta) \mathrm{e} ^ {\mathrm{i} \varphi} \\ 0 & 0 & g _ {\mathrm{B}} (\epsilon) \sin (\theta) \mathrm{e} ^ {- \mathrm{i} \varphi} & - g _ {\mathrm{B}} (\epsilon) \cos (\theta) \end{array} \right)\tag{2}
$$

where ϵ is the detuning energy of the double quantum dot system (taken as zero at the charge transition), $\mu _ { \mathrm { B } }$ is the Bohr magneton and the $g _ { i }$ are the $g \cdot$ factors in the diferent quantum dots, $\varphi$ is the azimuthal angle between the two quantization axes. We note that this model is similar to that of a flopping-mode qubit [1]. Diagonalizing the Hamiltonian, we obtain the qubit resonance frequency $f _ { \mathrm { L } }$ given by:

$$
f _ {\mathrm{L}} = \frac {\mu_ {\mathrm{B}} B}{h} \frac {\sqrt {(2 \epsilon^ {2} + t _ {\mathrm{c}} ^ {2}) (g _ {\mathrm{A}} (\epsilon) ^ {2} + g _ {\mathrm{B}} (\epsilon) ^ {2}) + 2 \epsilon (g _ {\mathrm{B}} (\epsilon) ^ {2} - g _ {\mathrm{A}} (\epsilon) ^ {2}) \sqrt {\epsilon^ {2} + t _ {\mathrm{c}} ^ {2}} + 2 g _ {\mathrm{A}} (\epsilon) g _ {\mathrm{B}} (\epsilon) t _ {\mathrm{c}} ^ {2} \cos (\theta)}}{2 \sqrt {\epsilon^ {2} + t _ {\mathrm{c}} ^ {2}}},\tag{3}
$$

The evolution of $f _ { \mathrm { L } }$ along the detuning axes can then be fitted to extract the tilt angles and the tunnel couplings between neighbouring quantum dots. For this purpose, we first express the detuning energies in terms of gate voltages as $\epsilon _ { 2 3 } = \eta _ { 2 3 } ( \mathrm { v P _ { 3 } - v P _ { 3 } ^ { 0 } } )$ and $\epsilon _ { 3 4 } = \eta _ { 3 4 } ( \mathrm { v P } _ { 4 } - \mathrm { v P } _ { 4 } ^ { 0 } )$ where $\eta _ { 2 3 } = 0 . 1 6 6$ and $\eta _ { 3 4 } = 0 . 1 5 0$ are the efective lever arms along the detuning axis. They are defined as $\eta _ { 2 3 } = \beta _ { 3 } + \beta _ { 2 } \gamma _ { 2 3 }$ and $\eta _ { 3 4 } = \beta _ { 4 } ^ { * } + \beta _ { 3 } ^ { * } \gamma _ { 3 4 }$ where $\beta _ { i } ^ { ( * ) }$ are the virtual gate lever arms measured nearby the $\mathrm { Q D _ { 2 } \mathrm { - Q D _ { 3 } \ ( Q D _ { 3 } \mathrm { - Q D _ { 4 } ) } } }$ charge transition via photon-assisted tunnelling experiments [8] and where the $\gamma _ { i j } = | \Delta \mathrm { v P } _ { i } / \Delta \mathrm { v P } _ { j } |$ are the slopes of the detuning axis. We then extract the evolution of $f _ { \mathrm { L } }$ as function of $\mathrm { v P _ { 3 } \ ( v P _ { 4 } ) }$ from the data displayed in Supplementary Figure $3 . { \mathrm { a } } { - } { \mathrm { b } }$ (Supplementary Figure $4 . \mathrm { a - c } )$ and fit it with $\mathrm { { e q . } ( 3 ) }$ Supplementary Figure 3.c-d display the evolution of $f _ { \mathrm { L } }$ along the $\epsilon _ { 2 3 }$ detuning axis which is fitted to the above model assuming a linear dependence of $g$ with $\mathrm { v P _ { 3 } }$ . We observe that the model reproduces well the measured evolution. This allows to estimate an interdot tunnel coupling $t _ { \mathrm { c } }$ of $8 . 7 \pm 0 . 3 ~ \mathrm { G H z }$ and a tilt angle $\theta _ { 2 3 } ~ \mathrm { o f } = 5 1 . 8 \pm 0 . 7 ^ { \circ }$ . The latter is consistent with the lower bound found using the previous method.

Supplementary Figure 4.d-e display the evolution of $f _ { \mathrm { L } }$ along the $\epsilon _ { 3 4 }$ detuning axis. In this case, fitting the data does not allow to extract the tilt angle, even if we assume a quadratic dependence of the g-factor with the gate voltage. Indeed, for $0 ^ { \circ } \leq \theta \lesssim 4 0 ^ { \circ }$ , the shape of $f _ { \mathrm { L } }$ curve is nearly solely determined by the tunnel coupling and the variation of the $g \cdot$ -factor with $\mathrm { v P } _ { 4 } .$ . Consequently, the data can be equally well fitted by models where $\theta _ { 3 4 }$ is fixed $0 ^ { \circ }$ , $1 0 ^ { \circ } , 2 0 ^ { \circ } , 3 0 ^ { \circ } \mathrm { o r } 4 0 ^ { \circ }$ . This leads to large uncertainty on the value of $\theta _ { 3 4 }$ that prevents us to extract it. Nevertheless, the tunnel coupling between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ can still be estimated from these fits and, for $\theta _ { 3 4 }$ fixed to $4 0 ^ { \circ } ( 3 0 ^ { \circ } )$ , we find $t _ { \mathrm { c } } = 1 5 \pm 2 \ ( t _ { \mathrm { c } } = 1 2 \pm 2 )$ GHz.

What does become clear, however, is that we cannot obtain proper fits of the data with model where $\theta _ { 3 4 }$ is fixed to values larger than $4 0 ^ { \circ }$ . The underlying reason appears when plotting the expected evolution of $f _ { \mathrm { L } }$ in such model: for $\theta _ { 3 4 } \gtrsim 5 0 ^ { \circ }$ , f<sub>L</sub> should display a minimum that we do not observe experimentally. This suggests that $\theta _ { 3 4 }$ is lower than 50◦.

a  
![[assets/figures/references/ge-shuttle-2024/ffc8ad7f12daf2672bf9a120006fe17acb4072633df6c69940f539b40b18c8f8.jpg]]

b  
![[assets/figures/references/ge-shuttle-2024/1033387b65327a82d4a4a80ff1985d9c39e87e6ac404c3da869d8f351e3e0f25.jpg]]

![[assets/figures/references/ge-shuttle-2024/d554a7cd07288c8525de480e7e41fbb14b35812ad4bf4a305292bede9fa58f9e.jpg]]

![[assets/figures/references/ge-shuttle-2024/97adb9c9de0360fd99e683695e0704da9a1070aad316dae6a9a58487d16406fe.jpg]]  
Supplementary Figure 3. Evaluation of the tilt angle between $\mathbf { Q D _ { 2 } }$ and $\mathbf { Q D _ { 3 } }$ quantization axes using a four-level model. a, Free evolution experiments for shuttling a qubit in superposition state between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ back-and-forth. The superposition state is prepared in $\mathrm { Q D } _ { 2 } .$ b, Zoom-in on the vicinity of the charge transition. The two data sets are identical to those displayed in Fig. 1.h. c, d, Resonance frequency extracted from the oscillations along the detuning axis in (a) and (b) and fit with the model of eq. (3).

![[assets/figures/references/ge-shuttle-2024/7537564851cfde1ffcb501f76f6201935157f73dd84edf78f759c6c5b22a8379.jpg]]

![[assets/figures/references/ge-shuttle-2024/e13cda7082fb235cb8f7a18730ce43793a752541ae4e47216caf780f4b89fbd1.jpg]]

![[assets/figures/references/ge-shuttle-2024/de73ed12d8482374f25ba57c210ffd3037131efd235249dafe9fc99e9ba43b89.jpg]]

![[assets/figures/references/ge-shuttle-2024/57fb4faf95aec7a3633c6259e93d6615a03db4502286e50e6b8db3fbb749c9b3.jpg]]

![[assets/figures/references/ge-shuttle-2024/0e7419d59516f97aa1897b9fc9f0608a504d5768788a5d7a6ca5ab72e6668e2a.jpg]]  
Supplementary Figure 4. Evaluation of the tilt angle between $\mathbf { Q D _ { 3 } }$ and $\mathbf { Q D _ { 4 } }$ quantization axes using a four-level model. a, b, c, Free evolution experiments for the adiabatic shuttling of a qubit in superposition state between $\mathrm { Q D _ { 3 } }$ and $\mathrm { Q D _ { 4 } }$ back-and-forth. In (a) the qubit is prepared in superposition in $\mathrm { Q D } _ { 4 } ,$ while in (b) and (c) the superposition state is prepared in $\mathrm { Q D _ { 3 } }$ . c, Evolution of the resonance frequency along the detuning axis, extracted from the oscillations in $\mathrm { ( a ) }$ , (b) and (c), and fits with models of $\mathrm { e q . }$ . (3) where the tilt angle is fixed. The expected evolution for $\theta _ { 3 4 } = 5 0 ^ { \circ }$ is computed using the parameters extracted from the fit with $\theta _ { 3 4 } = 4 0 ^ { \circ }$

e  
![[assets/figures/references/ge-shuttle-2024/d8417734222903163ea02abce3ae3a1bbdb9e6554d35167edf86b12a3f537797.jpg]]

![[assets/figures/references/ge-shuttle-2024/40a3077be009366912ba3b909da15e0b1fcdf9ad2d2446bb61a995af2e4c900e.jpg]]

![[assets/figures/references/ge-shuttle-2024/2aab0fb8c2a7d355512d5825f4fe4003205097cd6b3326041d10b5d0e2076b6b.jpg]]

d  
![[assets/figures/references/ge-shuttle-2024/1eb7a38b114ccc5bb2d921535e6fccf184d2037355bc83ccdb9b4c2e8e051ea6.jpg]]

![[assets/figures/references/ge-shuttle-2024/2c0207f72aaf018a0f39873923bf4b8776790fbdd877384dcb1b787564cd5511.jpg]]

f  
![[assets/figures/references/ge-shuttle-2024/4c5d44148f0aa19646c616485e2b6d4a37f3f025c693836652745d9aa4bcca23.jpg]]  
Supplementary Figure 5. Performance of adiabatic shuttling. a, b, c, Spin polarization as a function of the number of shuttling steps n for a qubit initialized in the basis states. d, e, f, Amplitude as a function of the number of shuttling steps n for qubits initialized in a superposition state, without (Ramsey) and with echo pulse (Hahn).

For completeness, we also investigate the performance of the shuttling processes when the shuttling pulses are adiabatic, i.e. when there is no rotation induced by the diference between the quantization axes of the quantum dots. Supplementary Figure 5 shows the results of such investigations for the shuttling of basis states and for the shuttling of superposition states. In both cases, we obtain significantly lower performance compared to those achieved with diabatic pulses (see Figure 3 in the main text). According to our findings, dephasing can largely explain this diference in performance for the coherent shuttling experiments. As the time required for each shuttling event is increased in the adiabatic experiments, the qubit experiences more dephasing during each shuttling step and the phase coherence is lost after a smaller number of shuttling steps n. The use of echoing pulses allows us to get an improvement of the coherent shuttling performance by a factor 6 to 8, larger than those obtained for diabatic shuttling.

For shuttling of basis states, the lower performance suggests that the probability of having a spin-flip during a shuttling increases if the latter is performed adiabatically. This could originate from the longer time spent in the vicinity of the charge transition, where spin randomization induced by charge noise is enhanced [6]. Overall, the data in Supplementary Figure 5 clearly show that an approach based on diabatic spin shuttling is preferable for hole spin qubits in germanium.

## Supplementary Note 4. Charge stability diagram of pair $\bf { Q D _ { 2 } } \mathrm { - } \bf { Q D _ { 4 } }$ and triangular shuttling

The charge stability diagram of the quantum dot pair $\mathrm { Q D _ { 2 } \mathrm { - Q D _ { 4 } , } }$ measured in a configuration identical to that of the triangular shuttling, is displayed in Supplementary Figure 6. No clear interdot charge anticrossing is visible, which suggests that the tunnel coupling between the two quantum dots is very low. This is expected, considering the device geometry, and it forces us to split the final pulse for the triangular shuttling in two parts. As depicted in Supplementary Figure 6, the voltages are first changed to bring the system close to the $( 1 , 1 , 0 , 0 ) \ – ( 1 , 0 , 0 , 1 )$ degeneracy point before applying a second pulse that brings the system in the (1,1,0,0) charge state. This reduces the probability that we excite the $( 1 , 1 , 0 , 1 )$ charge state, while transferring the qubit.

![[assets/figures/references/ge-shuttle-2024/beb2bbf929aab8209f205170c6cd20dc33d45c3391055644416d2c5c37954e30.jpg]]  
Supplementary Figure 6. Charge stability diagram of quantum dot pair $\mathbf { Q D _ { 2 } . . Q D _ { 4 } } .$ . No clear interdot transition can be distinguished. The shuttling of a spin qubit from $\mathrm { Q D _ { 2 } }$ to $\mathrm { Q D _ { 4 } }$ is performed using two voltages pulses (white arrows).

Supplementary Note 5. Optimization of the shuttling pulses to mitigate the efects of spin-orbit interaction

In this section, we illustrate and discuss the importance of careful pulse optimization. Supplementary Figure 7 shows the results of experiments where we probe the performance of the coherent shuttling between $\mathrm { Q D _ { 2 } }$ and $\mathrm { Q D _ { 3 } }$ using the Ramsey sequence depicted in Fig. 3.a. The detuning pulses used for all these experiments are identical, except for the idle time $t _ { \mathrm { i d l e } }$ in $\mathrm { Q D _ { 3 } }$ (idle time 2 in Fig. 3.b). This idle time in $\mathrm { Q D _ { 3 } }$ was optimized to 0.95 ns for the experiments displayed in the main text.

We observe that the evolution of amplitudes extracted at the end of the shuttling sequence is strongly dependent on the idle time in $\mathrm { Q D _ { 3 } }$ . For $t _ { \mathrm { i d l e } } = 0 . 9$ and $t _ { \mathrm { i d l e } } = 1$ ns, which are close to the optimum, the amplitude shows a smooth and progressive decay. When $t _ { \mathrm { i d l e } }$ is increased, oscillations of the amplitude as function of the number of shuttling steps n appear and their periodicity varies with $t _ { \mathrm { i d l e } }$ . These oscillations witness the rotations induced by the change of quantization axes, which are imperfectly compensated for $t _ { \mathrm { i d l e } } \geq 1 . 1$ ns. They lead to coherent errors after each shuttling event, which add $\mathrm { u p } .$ , and significantly modify the state of the qubit. For example, for $t _ { \mathrm { i d l e } } = 1 . 6$ ns, the superposition state is virtually transformed to a spin basis state after a few shuttling rounds. This emphasizes the necessity of optimizing the voltages pulses to compensate for the efect of rotations induced by the spin-orbit interaction.

The optimized idle times for the each shuttling processes can be found by performing measurements similar to those displayed in Supplementary Figure $^ { 7 , }$ and by looking for regular decay of the amplitude as function of $n .$ This optimization can also be done similarly studying the decay of the spin-up probabilities in spin basis state shuttling experiments.

Supplementary Note 6. Qubit dynamics during coherent shuttling experiments for non-optimized idle times

In Supplementary Figure $^ { 7 , }$ we see that for non-optimized idle times, like $t _ { \mathrm { i d l e } } ~ = ~ 1 . 5$ ns, the amplitude of the oscillations with the phase can saturate to a finite value. This is in contrast to what we observe for optimized idle times $t _ { \mathrm { i d l e } } = 0 . 9 / 1$ ns, which decay to zero. To understand this feature, we carry out simulations of the dynamics of a qubit initialized in the $\frac { | { \downarrow } \rangle + i | { \uparrow } \rangle } { \sqrt { 2 } }$ superposition state which is shuttled between two neighboring quantum dots. Each shuttling step is modelled by a rotation. This rotation arises from the precession around the quantization axis of the quantum dot towards which the qubit is shuttled. We also calculate for every even n the expected measurement result, i.e. the amplitude of the $\mathrm { P } _ { \uparrow }$ oscillations that appear when the phase $\Phi$ of the second $\pi / 2$ pulse is varied. This is shown in Supplementary Figure $8 . { \mathrm { c } } .$ , with two examples corresponding to a non-optimized idle time and an optimized idle time.

Supplementary Figure 8.a displays the trajectory in the Bloch sphere of the qubit for the first 16 shuttling steps, in the reference frame of the quantum dot where the shuttling experiment starts. The diferent states of the qubit map a circle which is tilted compared to the equator. The product of the two rotations generated by shuttling back and forth is equivalent to a single rotation around a fixed axis. Consequently, multiple shuttling cycles can be seen as successive rotations around this fixed axis which elucidates the trajectory observed in the Bloch sphere. This also explains the oscillations of the amplitude as function of n seen in Supplementary Figure 7, as the distance between origin and the projection of the state on xy-plane can vary significantly depending on the number of shuttles for an non-optimized idle time. In contrast, when the idle times are well-optimized, the qubit states are on the equator of the Bloch sphere and no oscillations of the amplitude with n can be observed.

![[assets/figures/references/ge-shuttle-2024/deb25361ecd9be2b5a1846aefee26f51fb0370c3723db39f74308a65e5146a55.jpg]]  
Supplementary Figure 7. Signatures of non-optimized idle times in Ramsey shuttling experiments. Results of coherent shuttling experiments between QD<sub>2</sub> and QD<sub>3</sub> obtained using Ramsey sequences. The idle time spent in QD<sub>3</sub> is diferent for the results shown in the diferent subplots, as indicated by the titles. For non-optimized idle times, oscillations of the amplitude as function of the number of shuttles n appear and the amplitude can saturate to a non-zero value at large n.

Next, we include the efects of dephasing in the simulations, by assuming that the qubit frequencies fluctuate between repetitions of a given experiment with a fixed n. We observe that the state of the qubit is spread along a circle with a distribution that becomes more uniform as n increases, meaning when the qubit experiences more dephasing. An example is shown in Supplementary Figure 8.b for $n = 9 8$ , corresponding to the data shown in Supplementary Figure 8.c. The center of the circle, which is equivalent to the statistical average of the qubit state when the qubit is completely dephased, is not on the equator on Bloch sphere. This explains the finite amplitude observed in the measurements at large n. Except for the revival of the amplitude observed for $t _ { \mathrm { i d l e } } = 2 . 1$ ns, these simulations capture most of the features observed in Supplementary Figure 7.

![[assets/figures/references/ge-shuttle-2024/9842c64284a6100fb484a2e5eb3fa48fd4d1330137ebadeb396d6a56fd2da770.jpg]]

![[assets/figures/references/ge-shuttle-2024/9414730723869869d005257df61003aea7550e40b458c312393d0940e0bb3b75.jpg]]  
Supplementary Figure 8. Simulation of the efect of non-optimized idle times. ${ \mathbf { a } } ,$ Distribution of the qubit states after an even number of shuttles, for an non-optimized idle time. b, Spread of the qubit state after a large number of shuttles, when the qubit is dephased. $\mathbf { c } ,$ Simulated measurement results, i.e. amplitude of the oscillations appearing while varying the phase of the second $\pi / 2$ pulse, as a function of $^ { n , }$ for a non-optimized idle time and an optimized idle time.

[1] Benito, M. et al. Electric-field control and noise protection of the flopping-mode spin qubit. Phys. Rev. B 100, 125430 (2019).

[2] Croot, X. et al. Flopping-mode electric dipole spin resonance. Phys. Rev. Res. 2, 012006 (2020).

[3] Mutter, P. M. & Burkard, G. Natural heavy-hole flopping mode qubit in germanium. Phys. Rev. Res. 3, 013194 (2021).

[4] Hu, R.-Z. et al. Flopping-mode spin qubit in a Si-Mos quantum dot. Applied Physics Letters 122, 134002 (2023).

[5] Abadillo-Uriel, J. C., Rodr´ıguez-Mena, E. A., Martinez, B. & Niquet, Y.-M. Hole spin driving by strain-induced spin-orbit interactions. arXiv 2212.03691 (2022).

[6] Krzywda, J. A. & Cywi´nski, L. Interplay of charge noise and coupling to phonons in adiabatic electron transfer between quantum dots. Phys. Rev. B 104, 075439 (2021).

[7] Lawrie, W. I. L. et al. Quantum dot arrays in silicon and germanium. Applied Physics Letters 116, 080501 (2020).

[8] Oosterkamp, T. et al. Microwave spectroscopy of a quantum-dot molecule. Nature 395, 873–876 (1998).
