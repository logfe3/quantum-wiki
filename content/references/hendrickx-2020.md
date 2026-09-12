---
title: Fast two-qubit logic with holes in germanium
description: 锗空穴自旋比特的快速两比特逻辑：强自旋轨道耦合免去微磁体即可电驱动，门时间进入 100 ns 量级。
aliases:
 - hendrickx-2020
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">锗空穴自旋比特的快速两比特逻辑：强自旋轨道耦合免去微磁体即可电驱动，门时间进入 100 ns 量级。</div>

> [!info] 文献信息
> N. W. Hendrickx *et al.*, “Fast two-qubit logic with holes in germanium”, Nature **577**, 487 (2020).
> [arXiv:1904.11443](https://arxiv.org/abs/1904.11443) · [DOI:10.1038/s41586-019-1919-3](https://doi.org/10.1038/s41586-019-1919-3)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

N.W. Hendrickx,<sup>1,</sup> <sup>∗</sup> D.P. Franke,<sup>1,</sup> <sup>∗</sup> A. Sammak,<sup>1</sup> G. Scappucci,<sup>2</sup> and M. Veldhorst<sup>2</sup>

<sup>1</sup>QuTech and Netherlands Organisation for Applied Scientific Research (TNO), Stieltjesweg 1, 2628 CK Delft, The Netherlands <sup>2</sup>QuTech and Kavli Institute ofNanoscience, Delft University of Technology, P.O. Box 5046, 2600 GA Delft, The Netherlands (Dated: April 26, 2019)

The promise of quantum computation with quantum dots has stimulated widespread research. Still, a platform that can combine excellent control with fast and high-fidelity operation is absent. Here, we show single and two-qubit operations based on holes in germanium. A high degree of control over the tunnel coupling and detuning is obtained by exploiting quantum wells with very low disorder and by working in a virtual gate space. Spin-orbit coupling obviates the need for microscopic elements and enables rapid qubit control with Rabi frequencies exceeding 100 MHz and a singlequbit fidelity of 99.3 %. We demonstrate fast two-qubit CX gates executed within 75 ns and minimize decoherence by operating at the charge symmetry point. Planar germanium thus matured within one year from a material that can host quantum dots to a platform enabling two-qubit logic, positioning itself as a unique material to scale up spin qubits for quantum information.

Gate-defined quantum dots were recognized early on as a promising platform for quantum information [1] and a plethora of materials stacks has been investigated as host material. Initial research mainly focused on the low disorder semiconductor gallium arsenide [2, 3]. Steady progress in the control and understanding of this system culminated in the initial demonstration and optimization of spin qubit operations [4, 5] and the realization of rudimentary analog quantum simulations [6]. However, the omnipresent hyperfine interactions in group III-V materials seriously deteriorate the spin coherence, despite attempts to mitigate this by nuclear polarization [7]. Drastic improvements to the coherence times could be achieved by switching to the group IV semiconductor silicon, in particular when defining spin qubits in isotopically purified host crystal with vanishing concentrations of nonzero nuclear spin [8]. This enabled single qubit rotations with fidelities beyond 99.9% [9] and the execution of two-qubit logic gates with fidelities up to 98% [10–13], underlining the potential of spin qubits for quantum computation. Nevertheless, quantum dots in silicon are often formed at unintended locations and control over the tunnel coupling determining the strength of two-qubit interactions is limited. Moreover, the absence of a sizable spin-orbit coupling for electrons requires the inclusion of microscopic components such as onchip striplines or nanomagnets close to each qubit, which seriously complicates the design of large and dense 2D-structures. This, combined with the limited control over the location and coupling of the dots, remains an outstanding challenge for the scalability of these systems and a platform that can overcome these limitations would be highly desirable.

Hole states in semiconductors typically exhibit strong spinorbit coupling, which has enabled the demonstration of fast single qubit rotations [14, 15] and additionally, unlike electrons, holes do not suffer from nearby valley states. In silicon, unfavorable band alignment prevents strain engineering of low disorder quantum wells for holes, restricting experiments to metaloxide-semiconductor (MOS) structures [16, 17]. Research on germanium mostly focused on self-assembled nanowires [18– 20] and demonstrated single-shot spin readout [21] and coherent spin control [15]. However, strained germanium quantum wells were recently shown to support the formation of gate-controlled planar hole quantum dots [22, 23]. Now, the crucial challenge is the demonstration of coherent control in this platform and the implementation of qubit-qubit gates for quantum information with holes.

Here, we make this step and demonstrate single and two qubit logic with holes in planar germanium. Fabrication is based on silicon substrates and standard manufacturing materials. We grow strained germanium quantum wells, measured to have high hole mobilities $\mu \ : > \ : 5 0 0 . 0 0 0 \ : \mathrm { c m ^ { 2 } / V s }$ and a low effective hole mass $m _ { h } = 0 . 0 9 m _ { e } \ [ 2 2 , 2 4 ]$ , and predicted to reach $m _ { h } = 0 . 0 5$ $m _ { e }$ at zero density [25, 26]. This allows us to define quantum dots of comparatively large size and we find excellent control over the exchange interaction between the two dots. We operate in a multi-hole mode, significantly reducing challenges in tuning and characterization, and thereby advantageous for scaling. We exploit the spin-orbit interaction for qubit driving and perform single qubit rotations at frequencies exceeding 100 MHz. This advantage of fast driving becomes further apparent in coherently accessing the Hilbert space of a two-qubit system. For example, in silicon the execution of a CNOT gate implemented with an on-chip stripline has been shown using microsecond long pulses [10, 13] and this timescale is typically reduced to 0.2-0.5 microseconds by incorporating nanomagnets [11, 12]. Here, we demonstrate that the spin-orbit coupling of holes in germanium together with the sizable exchange interaction enables a CNOT within $t _ { \mathrm { C X } } = 7 5$ ns.

A scanning electron microscope (SEM) image of the germanium two-qubit device is shown in Fig. 1A. In order to accumulate holes and define two quantum dots, the two circular plunger gates are set to negative potential $( V _ { \mathrm { P 1 } } , V _ { \mathrm { P 2 } } \approx - 2 ~ \mathrm { V } )$ . The tunnel coupling between the dots $t _ { 1 2 }$ and the tunnel couplings to the source and drain reservoirs $( t _ { 1 S } , t _ { 2 D } )$ are controlled by the barrier gates BC, BS and BD, respectively. Working in a virtual gate voltage space $( \mathrm { V } _ { \mathrm { V P 1 } } , \mathrm { V } _ { \mathrm { V P 2 } } , \mathrm { V } _ { t _ { 1 5 } } , \mathrm { V } _ { t _ { 2 \mathrm { D } } } ,$ and $\mathrm { V } _ { t _ { 1 2 } } ,$ respectively), we can independently tune these properties (see video mode operation in supplementary materials). We measure the transport current through the double dot system (Fig. 1C and 1D) and for certain hole occupations we observe a suppression of the transport current for a positive bias voltage $V _ { \mathrm { S D } } = 1 ~ \mathrm { m V } ,$ caused by Pauli-spin blockade (PSB) [27], see Fig. 1E. We make use of the blockade as an effective method for spin-to-charge conversion [3], as well as to initialize our two qubit system in the blocked |↓↓i ground state.

A  
![[assets/figures/references/hendrickx-2020/18021467f6fcfae5d80748c7f1a68a083197ab5a2abb13af947a4605d8a70437.jpg]]

![[assets/figures/references/hendrickx-2020/6155fafc770d8988bfa03477a6a0e7930bff4c4337e7a72184c94a9d33802a5b.jpg]]  
F

![[assets/figures/references/hendrickx-2020/d00fec13f972de130d2d8e5b23d09ee486deff1aa3777b95069b5e00d2d40769.jpg]]

G  
![[assets/figures/references/hendrickx-2020/77ba24028dae30ac86a28ba42e529419e5705d137e3301af1d3176673584d679.jpg]]  
B (T)  
FIG. 1. Fabrication and operation of a planar germanium double quantum dot. (A) False-colored SEM image of the two qubit device. Two hole quantum dots are formed in a high-mobility Ge quantum well and controlled by the electric gates. The direction of the external field $B _ { 0 }$ is indicated by the black arrow. (B) Schematic cross section of the system, where quantum dots are formed below plunger gates P1 and P2, while the different tunnelling rates can be controlled by barrier gates BS, BD and BC. (C) Transport current through the double dot as a function of plunger gates voltage for low (top) and strong (bottom) interdot coupling, mediated by a virtual tunnel gate. (D) Charge stability diagram of the qubit operation point. The detuning axis ε is indicated by the dotted line. (E) Transport current through the double dot as a function of plunger gate voltage for positive (left) and negative (right) bias. Pauli spin blockade becomes apparent from the suppression of the transport current for positive bias direction. (F) Illustration of the energy landscape in our double quantum dot system. (G) Resonance frequency of the two qubits as a function of the external magnetic field, showing the individual qubit resonances.

Taking advantage of the strong spin-orbit coupling [15, 26], we are able to implement a fast manipulation of the qubit states by electric dipole spin resonance (EDSR). We tune the device to a read-out point within the PSB-region (indicated by the label R in Fig. 1D) and apply an electric microwave excitation to gate P1. When the frequency of the microwave excitation matches the spin resonance frequency of either qubit, the PSB is lifted and an increase in the transport current can be observed. We extract the resonance frequency of each qubit as a function of external magnetic field strength $B _ { 0 }$ and observe two distinct qubit resonance lines with g-factors $g _ { 1 } = 0 . 3 5$ and $g _ { 2 } = 0 . 3 8$ (Fig. 1G). The difference in g-factors between the two dots is likely caused by slightly different hole fillings and thus quantum dot orbitals. Due to the influence of spin-orbit coupling, a strong orbital dependence of the effective g-factor is typically expected in hole quantum dots [17, 28]. Furthermore the effective g-factor can be tuned electrically as a direct result of the SOC [29] (see e.g. Fig. 4C and 4D), thereby guaranteeing independent control of the different qubits.

To allow for coherent control of the isolated spin states, a two-level voltage pulse on gates P1 and P2 is used to detune the dot potentials and prevent tunneling to and from the dots during the manipulation phase (label M in Fig. 1D). We measure the averaged transport current over N repeated pulse cycles and subtract a reference measurement to mitigate slow drifts in the transport current (cf. supplementary materials), as is indicated in Fig. 2A. The number of repetitions N of each cycle is chosen to result in a lock-in frequency of 89.75 Hz. During the readout (label R in Fig. 1E), no differential current is observed when the qubits are in their ↓↓ ground state, while a signal of typically $\Delta I _ { S D } \approx 0 . 3$ pA is measured for all other configurations and a total cycle length of $t _ { \mathrm { c y c l e } } = 9 0 0 \ \mathrm { n s }$ . This is in good agreement with a bias current $\Delta I = 2 e / t _ { \mathrm { c y c l e } } = 0 . 4 ~ \mathrm { p A }$ , as expected for the random loading of a hole spin. After readout, the system is left in the blocking ↓↓ state, serving as the initialization of our qubits.

We now operate the device in the single-qubit transport mode in an external field of $B _ { 0 } = 0 . 5$ T and use the second qubit as a readout ancilla. Coherent control over the qubit is demonstrated in a Rabi experiment, where the spin state of Q1 is measured as a function of microwave pulse length t and power P, as shown in Fig. 2B. By increasing the power of the microwave pulse, we can reach Rabi frequencies of over a 100 MHz, at an elevated $B _ { 0 } = 1 . 6 5 \ : \mathrm { T }$ (as shown in the supplementary materials).

To evaluate the performance of our device, we implement randomized benchmarking of the single qubit Clifford group [30] (Fig. 2C). The measured decay curve of the qubits state as a function of sequence length m is shown in Fig. 2D, from which we can extract a single qubit control fidelity of $F _ { \mathrm { C } } = 9 9 . 3 \%$ Each data point is averaged over approximately 100000 repetitions of 1500 randomly drawn gate sequences. For each of these sequences, two recovery gates $\mathbf { C } _ { \mathrm { { R e c o v e r y } } }$ are chosen such that the qubit is projected to the |↑i and |↓i state, respectively, realizing alternating cycles for lock-in detection. In Fig. 2E we show the gate fidelities for the different π and $\pi / 2$ gates as obtained by interleaved randomized benchmarking, where each randomly drawn gate is followed by the interleaved gate (cf. Fig. 2C). All individual gate fidelities are $F _ { \mathrm { C } } > 9 9 \%$ , with the infidelity for $\pi / 2$ gates being approximately twice as low as for the π gates, on account of the difference in pulse length.

We further characterize the individual qubits by measuring the coherence and relaxation times. We perform a Ramsey experiment, in which two $\pi / 2$ pulses are separated by time $\tau ,$ during which the qubit will evolve as a result of the implemented detuning. We fit the decay of the observed oscillations to $\Delta I _ { S D } = a \bar { \cos ( 2 \pi f \tau + \phi ) } \mathrm { e x p } \bar { \phi } - ( \tau / T _ { 2 } ^ { * } ) ^ { \alpha ^ { * } } )$ and find a spin coherence time of $T _ { 2 , Q 1 } ^ { * } ~ = ~ 8 1 7$ ns and $T _ { 2 , Q 2 } ^ { * }$ = 348 ns and decay coefficients of $\check { \alpha } _ { Q 1 } ^ { * } = 1 . 2 \pm 0 . 2$ and $\dot { \alpha } _ { Q 2 } ^ { * } = 1 . 5 \pm 0 . 2$ for Q1 and Q2 respectively. These coherence times are a few times larger than reported for germanium hut wires [15]. We note that due to the nature of the transport measurements, we cannot turn the coupling between the qubits fully off and thus a residual coupling of $J \approx 2 0$ MHz remains for these measurements, potentially limiting the single qubit performance.

The spin coherence can be extended by performing a Hahn echoing sequence, consisting of $\pi / 2 , \pi$ and $\pi / 2$ pulses separated by waiting times τ. Fitting the observed decay as a function of the total waiting time $2 \tau$ to a power law $\begin{array} { r l } { \Delta I _ { S D } } & { { } = } \end{array}$ a exp $\left( - ( 2 \tau / T _ { 2 } ^ { * } ) ^ { \alpha ^ { H } } \right)$ , we find extended coherence times of $T _ { 2 , Q 1 } ^ { H } ~ = ~ 1 . 9 ~ \mu \mathfrak { s }$ s and $T _ { 2 , Q 2 } ^ { H } ~ = ~ 0 . 8$ µs and decay coefficients of $\alpha _ { Q 1 } ^ { H } = 1 . 5 \pm 0 . 1$ and $\alpha _ { Q 2 } ^ { H } = 2 . 5 \pm 0 . 3$ , for Q1 and Q2 respectively. Arsenic dopents in natural germanium attain values of $T _ { 2 } = 5 7 ~ \mu \mathrm { s }$ and can reach long quantum coherence with $T _ { 2 } ~ = ~ 2 T _ { 1 }$ in isotopically purified samples. The difference in quantum coherence may have different origins, for example due to a difference in hyperfine interaction, in which case a dramatic improvement may be expected for isotopically purified germanium quantum dots [31, 32].

Finally, we perform measurements of the spin relaxation times $T _ { 1 }$ of the qubits by applying a π pulse and waiting for time τ before performing readout. We observe spin relaxation times of $T _ { 1 , Q 1 } = 9$ µs and $T _ { 1 , Q 2 } = 3 ~ \mu \mathrm { s }$ . Furthermore, we find that these relaxation times increase exponentially when lowering the tunnel coupling between each qubit and its respective reservoir (data in supplementary materials) and longer relaxation times have been reported for germanium nanowires [18, 21], giving good prospect for significantly increasing the relaxation time by closing the reservoir barrier during operation.

When the manipulation of both qubits is combined, the coupling of the two qubits (exchange interaction J) becomes apparent. As is illustrated in Fig. 4A, the resonance frequency of each of the qubits is shifted when the respective other qubit is prepared in its ↑ state. The strength of this interaction depends on the inter-dot tunnel coupling $t _ { 1 2 }$ as well as the detuning  of the dot potentials. By changing the depth of voltage pulse to point M (dashed line in Fig. 1E), we can map J as a function of . This is shown in Fig. 4C and 4D, where the subtraction of two pulse sequences in the measurement (see Fig. 4B) results in a positive signal for the unprepared qubit resonances and a negative signal for the prepared states (cf. supplementary materials). As shown in Fig. 4E, the exchange coupling that is reflected in the frequency difference between the initial and prepared resonance positions, is very well described by a simple description using $\dot { J } = 4 U t _ { 1 2 } ^ { 2 } / ( U ^ { \bar { 2 } } - ( \alpha \epsilon - U _ { 0 } ) ^ { 2 } )$ [1, 33]. Here, $U$ is the charging energy of the quantum dots, $\alpha = 0 . 2 3$ is the lever arm of P1 and P2, the interdot tunnel coupling is $t _ { 1 2 } / h = 1 . 8$ GHz. In addition, the strength of $t _ { 1 2 }$ can be tuned using the central barrier BC (Fig. 4F). Here, we use a virtual gate voltage $V _ { t _ { 1 2 } } ,$ where $V _ { \mathrm { B C } }$ is set while compensating its influence on the dot potentials by appropriate corrections to $V _ { \mathrm { P l } }$ and $V _ { \mathrm { P } 2 } \ [ 6 , 3 4 ]$ . As a result of this full control over the coupling, we are able to operate the qubits at a mostly charge-insensitive point of symmetric detuning while choosing an exchange coupling strength large enough for rapid two qubit controlled rotations.

The advantage of this reduced sensitivity to detuning noise is demonstrated in Fig. 4G, where the dephasing time $T _ { 2 } ^ { * }$ of both qubits is measured as a function of . Here, $T _ { 2 } ^ { * }$ directly reflects the slope of the frequency dependence of $f _ { 1 , ( 3 ) }$ for Q1 and $\mathbf { Q } 2 .$ with the longest average phase coherence reached in the flat region $V _ { \epsilon } \approx 6 ~ \mathrm { { m } { \bar { V } } . }$

The direct control over the tunnel coupling enables us to set the exchange interaction to a sizable strength of $J / h = 3 9$ MHz at the symmetry point, as demonstrated in Fig. 5A. We exploit this regime to obtain fast selective driving and operate in an exchange always-on mode. Full control is obtained by applying microwave pulses at the four resonant frequencies, while further gate pulses controlling J are not needed. A pulse at a single resonance frequency will result in a conditional rotation of the target qubit, as we show in Fig. 5B. The slight off-resonant driving that can be observed on $f _ { 1 \downarrow }$ is mitigated by choosing the driving speed such that $t _ { \pi , \mathrm { r e s } } = t _ { 4 \pi , \mathrm { o f f - r e s } } .$ A fast CX-operation is thus achieved within $\tau _ { \mathrm { C X , Q 1 } } = 5 5$ ns and $\tau _ { \mathrm { C X } , \mathrm { Q } 2 } = 7 5$ ns, with Q1 and Q2 as the target qubits respectively.

As a result of the pulsing, we observe a minor shift in the resonance frequency of both qubits. This was observed before in Si/SiGe quantum dots [35], and we speculate this to be caused by a rectification of the AC microwave signal, leading to a slight change in the exchange interaction between the dots. We compensate the temporary change in resonance frequency by applying phase corrections to all following pulses (see supplementary materials). In Fig. 5C we show the effect of a controlled rotation on the control qubit with applied phase corrections. We first apply $\mathtt { a } X ( \pi / 2 )$ pulse to Q2, followed by a $\theta _ { 1 }$ conditional rotation of Q1. Finally, we apply a virtual $Z ( \phi )$ gate by directly switching the phase on the final conditional $\pi / 2$ pulse on Q2 $( f _ { 3 } )$ . We observe larger phase rotations on Q1 after 0 and 4π rotations on Q2 as compared to a 2π rotation on $\mathbf { Q } 2$ . This 4π periodicity is in agreement with fermionic statistics and suggests an echoing pulse correcting residual environmental coupling (see supplementary material). The full π phase shift on Q2 for a conditional 2π rotation on Q1, as a result of the $\theta / 2$ phase that is accumulated by the control qubit, demonstrates the application of a coherent CX gate.

The demonstration of a universal gate set with all electrical control and without the need of any microscopic structures provide great prospects to scale up spin qubits using holes in strained germanium. These quantum dots are furthermore contacted by superconductors [22, 36, 37] that may be shaped into microwave resonators for spin-photon coupling, providing opportunities for a platform that can combine semiconducting, superconducting, and topological systems for hybrid technology with fast and coherent control over individual hole spins. Moreover, the demonstrated quantum coherence and level of control make planar germanium a natural candidate to engineer artificial Hamiltonians for quantum simulation going beyond classically tractable experiments.

A  
![[assets/figures/references/hendrickx-2020/5ecf4fe72361678c88a2183cdce4211e0200c5ee919044d5c02a03348d69a22e.jpg]]

![[assets/figures/references/hendrickx-2020/f048b340bcb9f4f9b81bcc5dbd1af22aab07b66bcec1796cb4bc46185d4aa20b.jpg]]

![[assets/figures/references/hendrickx-2020/2ae0c17fe90d8d1fac67a28d607973e7ca46bc161d6fd081b461fa2eee81ce7f.jpg]]  
FIG. 2. Coherent control and gate fidelity of a planar germanium qubit. (A) Measurement sequence used for the Rabi driving measurements. Measurement cycli with EDSR pulses are alternated with reference cycli without a microwave tone, allowing for an efficient background current subtraction. Each cycle is repeated N times, such that measurement and reference cycles alternate at a typical lock-in frequency of $\bar { f } _ { m e a s } = 8 9 . 7 5$ Hz (as discussed in the supplementary materials). (B) Colour map of the differential bias current $\Delta I _ { S D }$ as a function of microwave pulse time t and power P and clear Rabi rotations on Q1 can be observed. (C) Schematic illustration of the (interleaved) randomized benchmarking sequence applied to Q1. (D) Differential bias current as a function of the number of applied Clifford gates in the randomized benchmarking sequence on Q1. Q2 is used as an ancilla for the readout. The extracted control fidelity is $F _ { \mathrm { C } } = 9 9 . 3 \pm 0 . 0 5 \%$ . (E) Gate fidelities for the different π and $\pi / 2$ gates.

![[assets/figures/references/hendrickx-2020/c4eea37052d0481312ffa0cff44bf1120550705247982717b2c53745a0d3d202.jpg]]  
FIG. 3. Relaxation, dephasing and coherence times. Characteristic time scales of both qubits Q1 and Q2. For Q1 we find a coherence time $T _ { 2 } ^ { * } = 8 1 7$ ns (top left), which can be extended by applying a Hahn echo to $T _ { 2 } ^ { H } = 1 . 9 \mu \mathrm { s }$ (top middle). Furthermore, we observe a spin relaxation time $T _ { 1 } = 9 ~ \mu \mathrm { s }$ (top right). For Q2 we observe a slightly shorter coherence time $T _ { 2 } ^ { * } = 3 4 8$ ns (bottom left). Applying a Hahn echo extends this coherence time to $\grave { T } _ { 2 } ^ { H } = 0 . 8 \mu \mathrm { s }$ (bottom middle), and a spin relaxation time $T _ { 1 } = 3 \mu \mathrm { s }$ (bottom right) can be observed.

## ACKNOWLEDGMENTS

We thank L.M.K. Vandersypen, S. Dobrovitski and J. Helsen for valuable discussions. We acknowledge support through a FOM Projectruimte of the Foundation for Fundamental Research on Matter (FOM), associated with the Netherlands Organisation for Scientific Research (NWO).

A  
![[assets/figures/references/hendrickx-2020/ecb1e5db8f0ec935f3670f109095dccee77362f6aa1e2c090e9de444dd866239.jpg]]  
C

![[assets/figures/references/hendrickx-2020/82b78c229bb2335fe091ababccac7ba99231a7792f687e2f46fc6896384d081f.jpg]]

G  
H  
![[assets/figures/references/hendrickx-2020/0b60279ca16d0586cf95b6a522af193907bdda75293a7c780c14f1d2789c6899.jpg]]  
FIG. 4. Tunable exchange coupling and operation at the charge symmetry point (A) Illustration of the relevant energy levels in our hole double quantum dot with a finite exchange coupling J between the dots. Four individual transitions can be driven, corresponding to the conditional rotations of the two qubit system. (B) Measurement pulse cycles used to map out the exchange splitting of Q1 (top) and Q2 (bottom). As a result of the demodulation of the alternating cycles, transition $f _ { 1 , ( 3 ) }$ gives a negative signal and transition $f _ { 2 , ( 4 ) }$ results in a positive signal. (C,D) EDSR spectra of Q1 (C) and Q2 (D) as a function of the detuning ε. The exchange splitting can be tuned to a minimum at $\varepsilon = 0$ and increases closer to the $( m , n ) - ( m + 1 , n - 1 )$ and $( m , n ) - ( m - 1 , n + 1 )$ charge transitions. (E) Exchange interaction as a function of ε as extracted from (C,D). Fitting the exchange coupling yields an interdot tunnel coupling $t _ { 1 2 } = 1 . 8$ GHz and charging energy $U = 1$ .46 meV. (F) The interdot tunnel coupling can also be controlled by gate BC. Changing the potential on this gate, while keeping $\varepsilon = 0$ , allows for a good control over the exchange interaction between the two qubits. (G) Coherence time $\bar { T _ { 2 } ^ { * } }$ of both qubits as a function of detuning voltage $V _ { \varepsilon } .$ . When the slope of the resonance line is equal to zero, the qubit is expected to be in first order insensitive to charge noise. Solid lines indicate fits of the data to $\begin{array} { r } { \left( a \frac { \delta f _ { r e s } } { \delta V _ { \varepsilon } } + T _ { 0 } \right) ^ { - 1 } } \end{array}$ with $\frac { \delta f _ { r e s } } { \delta V _ { \varepsilon } }$ the numerical derivative of the resonance line frequency as a function of detuning, $T _ { 0 }$ the residual decoherence and a a scaling factor. It can be observed that indeed $T _ { 2 } ^ { * }$ is longest when the slope of the resonance line is closest to zero. (H) Resonance frequency of transition $f _ { 1 }$ and $f _ { 3 }$ as a function of detuning.

![[assets/figures/references/hendrickx-2020/25295b7fa65852656cf73cd17892c43c61ce97710d6061097d5adc5055efa13b.jpg]]  
B

C  
![[assets/figures/references/hendrickx-2020/ec44a9d2e9fef046ae25b3e307d92f468f64a7d387c7dbfac955a3a393e4b6fd.jpg]]  
FIG. 5. Fast two-qubit logic with germanium qubits. (A) EDSR spectra of both qubits. Resonance peaks can be observed, corresponding to the four individual transitions indicated in Fig. 4A. The peaks are power broadened and the line width is thus determined by the Rabi frequency. (B) Controlled qubit rotations can naturally be performed by selectively driving each of the four transitions. A CX gate is achieved when $t _ { p } = t _ { \pi }$ on $f _ { 1 } .$ A small off-resonant driving effect can be observed, which we mitigate by tuning $t _ { \pi , \mathrm { r e s } } = t _ { 4 \pi , \mathrm { o f f - r e s } }$ . (C) Colour plot of $\Delta I _ { S D }$ as a function of Q1 CX-pulse length $\theta _ { 1 }$ and the phase of the second $\pi / 2 \cdot$ -rotation on $\mathbf { Q } 2 \phi _ { 3 }$ . Due to the $\theta / 2 Z$ -rotation on the control qubit, a π phase shift can be observed on $\boldsymbol { \mathrm { Q 2 } }$ for a conditional 2π rotation on Q1 (f<sub>1</sub>).

[1] D. Loss and D. P. DiVincenzo, Phys. Rev. A 57, 120 (1998).

[2] F. H. L. Koppens, C. Buizert, K. J. Tielrooij, I. T. Vink, K. C. Nowack, T. Meunier, L. P. Kouwenhoven, and L. M. K. Vandersypen, Nature 442, 766 (2006).

[4] H. Bluhm, S. Foletti, I. Neder, M. Rudner, D. Mahalu, V. Uman-

[3] J. R. Petta, A. C. Johnson, J. M. Taylor, E. A. Laird, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard, Science 309, 2180 (2005).

sky, and A. Yacoby, Nature Physics 7, 109 (2011).

[5] S. Foletti, H. Bluhm, D. Mahalu, V. Umansky, and A. Yacoby, Nature Physics 5, 903 (2009).

[6] T. Hensgens, T. Fujita, L. Janssen, X. Li, C. J. Van Diepen, C. Reichl, W. Wegscheider, S. Das Sarma, and L. M. K. Vandersypen, Nature 548, 70 (2017).

[7] H. Bluhm, S. Foletti, D. Mahalu, V. Umansky, and A. Yacoby, Phys. Rev. Lett. 105 (2010), 10.1103/PhysRevLett.105.216803.

[8] M. Veldhorst, J. C. C. Hwang, C. H. Yang, A. W. Leenstra, B. d. Ronde, J. P. Dehollain, J. T. Muhonen, F. E. Hudson, K. M. Itoh, A. Morello, and A. S. Dzurak, Nat. Nanotech. 9, 981 (2014).

[9] J. Yoneda, K. Takeda, T. Otsuka, T. Nakajima, M. R. Delbecq, G. Allison, T. Honda, T. Kodera, S. Oda, Y. Hoshi, N. Usami, K. M. Itoh, and S. Tarucha, Nat. Nanotech. , 102 (2017).

[10] M. Veldhorst, C. H. Yang, J. C. C. Hwang, W. Huang, J. P. Dehollain, J. T. Muhonen, S. Simmons, A. Laucht, F. E. Hudson, K. M. Itoh, A. Morello, and A. S. Dzurak, Nature 526, 410 (2015).

[11] D. M. Zajac, A. J. Sigillito, M. Russ, F. Borjans, J. M. Taylor, G. Burkard, and J. R. Petta, Science 359, 439 (2018).

[12] T. F. Watson, S. G. J. Philips, E. Kawakami, D. R. Ward, P. Scarlino, M. Veldhorst, D. E. Savage, M. G. Lagally, M. Friesen, S. N. Coppersmith, M. A. Eriksson, and L. M. K. Vandersypen, Nature 555, 633 (2018).

[13] W. Huang, C. H. Yang, K. W. Chan, T. Tanttu, B. Hensen, R. C. C. Leon, M. A. Fogarty, J. C. C. Hwang, F. E. Hudson, K. M. Itoh, A. Morello, A. Laucht, and A. S. Dzurak, arXiv:1805.05027 [cond-mat, physics:quant-ph] (2018), arXiv: 1805.05027.

[14] S. Nadj-Perge, S. M. Frolov, E. P. a. M. Bakkers, and L. P. Kouwenhoven, Nature 468, 1084 (2010).

[15] H. Watzinger, J. Kukuka, L. Vukui, F. Gao, T. Wang, F. Schffler, J.-J. Zhang, and G. Katsaros, Nature Communications 9, 3902 (2018).

[16] R. Li, F. E. Hudson, A. S. Dzurak, and A. R. Hamilton, Nano Lett. 15, 7314 (2015).

[17] S. D. Liles, R. Li, C. H. Yang, F. E. Hudson, M. Veldhorst, A. S. Dzurak, and A. R. Hamilton, Nat. Comm. 9 (2018), 10.1038/s41467-018-05700-9.

[18] Y. Hu, F. Kuemmeth, C. M. Lieber, and C. M. Marcus, Nat. Nanotech. 7, 47 (2012).

[19] M. Brauns, J. Ridderbos, A. Li, E. P. A. M. Bakkers, and F. A. Zwanenburg, Phys. Rev. B 93, 121408 (2016).

[20] A. P. Higginbotham, T. W. Larsen, J. Yao, H. Yan, C. M. Lieber, C. M. Marcus, and F. Kuemmeth, Nano Lett. 14, 3582 (2014).

[21] L. Vukui, J. Kukuka, H. Watzinger, J. M. Milem, F. Schffler, and G. Katsaros, Nano Lett. 18, 7141 (2018).

[22] N. W. Hendrickx, D. P. Franke, A. Sammak, M. Kouwenhoven, D. Sabbagh, L. Yeoh, R. Li, M. L. V. Tagliaferri, M. Virgilio, G. Capellini, G. Scappucci, and M. Veldhorst, Nature Communications 9, 2835 (2018).

[23] W. J. Hardy, C. T. Harris, Y.-H. Su, Y. Chuang, J. Moussa, L. N. Maurer, J.-Y. Li, T.-M. Lu, and D. R. Luhman, Nanotechnology 30, 215202 (2019).

[24] A. Sammak, D. Sabbagh, N. W. Hendrickx, M. Lodari, B. P. Wuetz, A. Tosato, L. Yeoh, M. Bollani, M. Virgilio, M. A. Schubert, P. Zaumseil, G. Capellini, M. Veldhorst, and G. Scappucci, Advanced Functional Materials 29, 1807613 (2019).

[25] C. Morrison, P. Winiewski, S. D. Rhead, J. Foronda, D. R. Leadley, and M. Myronov, Appl. Phys. Lett. 105, 182401 (2014).

[26] L. A. Terrazos, E. Marcellina, S. N. Coppersmith, M. Friesen, A. R. Hamilton, X. Hu, B. Koiller, A. L. Saraiva, D. Culcer, and R. B. Capaz, arXiv:1803.10320 [cond-mat] (2018), arXiv: 1803.10320.

[27] K. Ono, D. G. Austing, Y. Tokura, and S. Tarucha, Science 297, 1313 (2002).

[28] A. V. Nenashev, A. V. Dvurechenskii, and A. F. Zinovieva, Phys. Rev. B 67, 205301 (2003).

[29] F. Maier, C. Kloeffel, and D. Loss, Phys. Rev. B 87 (2013), 10.1103/PhysRevB.87.161305.

[30] E. Knill, D. Leibfried, R. Reichle, J. Britton, R. B. Blakestad, J. D. Jost, C. Langer, R. Ozeri, S. Seidelin, and D. J. Wineland, Phys. Rev. A 77, 012307 (2008).

[31] K. Itoh, W. L. Hansen, E. E. Haller, J. W. Farmer, V. I. Ozhogin, A. Rudnev, and A. Tikhomirov, J. Mater. Res. 8, 1341 (1993).

[32] K. M. Itoh and H. Watanabe, MRS Commun. 4, 143 (2014).

[33] M. Russ, D. M. Zajac, A. J. Sigillito, F. Borjans, J. M. Taylor, J. R. Petta, and G. Burkard, Phys. Rev. B 97, 085421 (2018).

[34] C. J. van Diepen, P. T. Eendebak, B. T. Buijtendorp, U. Mukhopadhyay, T. Fujita, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen, Appl. Phys. Lett. 113, 033101 (2018).

[35] K. Takeda, J. Yoneda, T. Otsuka, T. Nakajima, M. R. Delbecq, G. Allison, Y. Hoshi, N. Usami, K. M. Itoh, S. Oda, T. Kodera, and S. Tarucha, npj Quantum Information 4, 54 (2018).

[36] N. W. Hendrickx, M. L. V. Tagliaferri, M. Kouwenhoven, R. Li, D. P. Franke, A. Sammak, A. Brinkman, G. Scappucci, and M. Veldhorst, Phys. Rev. B 99, 075435 (2019).

[37] F. Vigneau, R. Mizokuchi, D. C. Zanuz, X. Huang, S. Tan, R. Maurand, S. Frolov, A. Sammak, G. Scappucci, F. Lefloch, and S. De Franceschi, Nano Lett. 19, 1023 (2019).
