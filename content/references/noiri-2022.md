---
title: Fast universal quantum gate above the fault-tolerance threshold in silicon
description: 硅自旋比特通用门保真度越过容错阈值：单比特 99.8%、两比特 99.5%，演示 Deutsch–Jozsa 与 Grover 算法。
aliases:
 - noiri-2022
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">硅自旋比特通用门保真度越过容错阈值：单比特 99.8%、两比特 99.5%，演示 Deutsch–Jozsa 与 Grover 算法。</div>

> [!info] 文献信息
> A. Noiri, K. Takeda, T. Nakajima, T. Kobayashi, A. Sammak, G. Scappucci & S. Tarucha, “Fast universal quantum gate above the fault-tolerance threshold in silicon”, Nature **601**, 338 (2022).
> [arXiv:2108.02626](https://arxiv.org/abs/2108.02626) · [DOI:10.1038/s41586-021-04182-y](https://doi.org/10.1038/s41586-021-04182-y)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Akito Noiri<sup>1,\*</sup>, Kenta Takeda<sup>1</sup>, Takashi Nakajima<sup>1</sup>, Takashi Kobayashi<sup>2</sup>, Amir Sammak<sup>3</sup>, Giordano Scappucci<sup>4</sup>, and Seigo Tarucha<sup>1,2,\*</sup>

## Affiliations:

<sup>1</sup>RIKEN, Center for Emergent Matter Science (CEMS), Wako-shi, Saitama 351-0198, Japan

<sup>2</sup>RIKEN, Center for Quantum Computing (RQC), Wako-shi, Saitama 351-0198, Japan

<sup>3</sup>QuTech and Netherlands Organisation for Applied Scientific Research (TNO), Stieltjesweg 1, 2628 CK Delft, Netherlands

<sup>4</sup>QuTech and Kavli Institute of Nanoscience, Delft University of Technology, Lorentzweg 1, 2628 CJ Delft, Netherlands

<sup>\*</sup>e-mail: akito.noiri@riken.jp or tarucha@riken.jp

## Summary paragraph:

Fault-tolerant quantum computers which can solve hard problems rely on quantum error correction<sup>1</sup>. One of the most promising error correction codes is the surface code<sup>2</sup>, which requires universal gate fidelities exceeding the error correction threshold of 99 per cent<sup>3</sup>. Among many qubit platforms, only superconducting circuits<sup>4</sup>, trapped ions<sup>5</sup>, and nitrogen-vacancy centers in diamond<sup>6</sup> have delivered those requirements. Electron spin qubits in silicon<sup>7–15</sup> are particularly promising for a large-scale quantum computer due to their nanofabrication capability, but the two-qubit gate fidelity has been limited to 98 per cent due to the slow operation<sup>16</sup>. Here we demonstrate a two-qubit gate fidelity of 99.5 per cent, along with single-qubit gate fidelities of 99.8 per cent, in silicon spin qubits by fast electrical control using a micromagnet-induced gradient field and a tunable two-qubit coupling. We identify the condition of qubit rotation speed and coupling strength where we robustly achieve high fidelity gates. We realize Deutsch-Jozsa and Grover search algorithms with high success rates using our universal gate set. Our results demonstrate the universal gate fidelity beyond the fault-tolerance threshold and pave the way for scalable silicon quantum computers.

## Main text:

Electron spins in silicon quantum dots are an attractive platform of a quantum computer with a long coherence time<sup>7–9</sup>, capability of high-temperature operation<sup>10,11</sup>, and potential scalability<sup>12–15</sup>. Singlequbit gate fidelity higher than the fault-tolerance threshold is now routinely achieved<sup>7,8,17</sup>. Two-qubit gate fidelity, on the other hand, still remains 98%<sup>16</sup>, below the threshold because of complexity of operation and/or slow operation compared to the coherence time<sup>16,18–20</sup>. Native two-qubit gates for spin qubits include $\sqrt { \mathrm { S W A P } } ^ { 2 1 - 2 4 }$ , controlled-phase<sup>9,18,20</sup>, and controlled-rotation (CROT)<sup>18,19</sup>, all relying on the exchange coupling. Rapid control of exchange coupling by gate voltage pulses enables $\sqrt { \mathrm { S W A P ^ { 2 1 - 2 4 } } }$ and controlled-phase gates<sup>9,18,20</sup> at the cost of requiring high-bandwidth and precise pulse engineering which obstructs a high-fidelity gate. In contrast, a CROT<sup>18,19</sup> can be implemented with less demanding pulse engineering in a fixed coupling<sup>16</sup>. With additional adjustments of single-qubit phases, a controlled-NOT (CNOT) gate with fidelity 98% is demonstrated. Since the fidelity is mostly limited by dephasing<sup>16</sup>, it is crucial to mitigate the dephasing effect by a faster operation to go beyond the fault-tolerance threshold. Furthermore, reliable and efficient tuning strategy of the high-fidelity gate is desired for scaling up the silicon spin qubits.

In this work, we realize a CNOT gate fidelity of 99.5% with a gate time of 103 ns in an isotopically enriched silicon quantum dot array. Our device satisfies three key elements to achieve this. First, the exchange coupling ℎ� is widely controllable to make it large enough at the charge-symmetry point where the effect of charge noise during a fast operation is suppressed<sup>19,22</sup>. Here ℎ is the plank constant. Second, the Zeeman energy difference between the qubits $h \mathrm { d } E _ { \mathrm { Z } }$ induced by a micromagnet is also large enough to allow a large ℎ�. Finally, the CROT gates are implemented by fast electric-dipole spin resonance (EDSR) controls of single spins driven in the slanting magnetic field induced by the micromagnet. These device features enable us to assess the single- and two-qubit gate performances over a wide range of parameters that were not accessible in the previous work<sup>16</sup>. The comprehensive study of the gate performances reveal that they mainly depend on the gate speed, from which we identify the gate condition where the CNOT gate fidelity higher than 99% is robustly achieved. In the same gate condition, single-qubit gate fidelities reach 99.8% for both qubits. Utilizing the high-fidelity universal quantum control, we implement the two-qubit Deutsch–Jozsa algorithm<sup>25</sup> and the Grover search algorithm<sup>26</sup> with the success rates of 96-97%. These results demonstrate the universal quantum control fidelity exceeding the surface code error correction threshold, showing that high-fidelity quantum processing is feasible in silicon spin qubits.

The device is a linearly coupled triple quantum dot fabricated on an isotopically enriched silicon/silicon-germanium heterostructure (Methods). Three layers of aluminum gates create confinement potentials to define the quantum dots<sup>15</sup> (Fig. 1a). The center (right) quantum dot has an electron which is operated as a qubit $\mathrm { Q } _ { 1 } \left( \mathrm { Q } _ { 2 } \right)$ while the left dot is not formed but used as an extension of the left reservoir. On top of the aluminum gates, a cobalt micromagnet is fabricated to generate a magnetic field gradient required for the fast EDSR control of both qubits<sup>27</sup> and also induce $\mathrm { d } E _ { \mathrm { Z } }$ for the CROT gates.

Figure 1b shows a typical charge stability diagram around the charge configurations to define the qubits. Each qubit is sequentially initialized and measured in a single-shot manner by energy-selective electron tunneling between the quantum dots and neighboring reservoirs<sup>28,29</sup> at the gate voltage conditions shown by the white circles in Fig. 1b. The qubits are manipulated around the chargesymmetry point in the (1,1) charge state (Extended Data Fig. 1) shown by the white square to suppress charge-noise sensitivity during operations<sup>19,22</sup>. Here, (c, r) denotes the number of electrons in the center (c) and right (r) dots.

This two-qubit system is capable of implementing the universal gate set. Under an EDSR control with a Rabi frequency of $f _ { \mathrm { R } } ,$ , a microwave frequency of $f _ { \mathrm { M W } }$ and its phase $\phi ,$ a Hamiltonian for the twoqubit system in the basis of |↑↑⟩, |↑<sup>̃</sup>↓⟩, |↓<sup>̃</sup>↑⟩, and |↓↓⟩ can be approximated $\mathrm { a s } ^ { 1 6 }$

$$
H = \frac {h}{2} \left( \begin{array}{c c c c} 2 E _ {\mathrm{Z}} & \Omega & \Omega & 0 \\ \Omega^ {*} & - \mathrm{d} \tilde {E} _ {\mathrm{Z}} - J & 0 & \Omega \\ \Omega^ {*} & 0 & \mathrm{d} \tilde {E} _ {\mathrm{Z}} - J & \Omega \\ 0 & \Omega^ {*} & \Omega^ {*} & - 2 E _ {\mathrm{Z}} \end{array} \right),
$$

where $h E _ { \mathrm { Z } }$ is the average Zeeman energy, ℎd $\widetilde { E } _ { \mathrm { Z } } = h \sqrt { \mathrm { d } E _ { \mathrm { Z } } ^ { 2 } + J ^ { 2 } }$ is the effective Zeeman energy difference between the qubits, and $\Omega = f _ { \mathrm { R } } \mathrm { e } ^ { i 2 \pi f _ { \mathrm { M W } } t + i \phi }$ is the EDSR driving. The tilde indicates the hybridization of the spin eigenstates |↑↓⟩ and |↓↑⟩ due to the exchange coupling. Then each EDSR frequency is given by $f _ { \mathrm { m } , \sigma } = E _ { \mathrm { Z } } \pm \bigl ( \mathrm { d } \tilde { E } _ { \mathrm { Z } } \pm J \bigr ) / 2$ (Fig. 1c) where m is the index of the target qubit $\mathrm { Q } _ { \mathrm { m } } ( \mathrm { m } = { 1 } \mathrm { o r } 2 )$ and $\sigma$ is the control qubit state |↑⟩ or |↓⟩. When the separations of $f _ { \mathrm { m } , \sigma }$ are larger than the width of each EDSR spectrum, a CROT gate can be implemented by driving one of the EDSR transitions<sup>16,19</sup> (Fig. 1d). An in-plane external magnetic field of $B _ { \mathrm { e x t } } = 0 . 4 0 8 ~ \mathrm { ~ T ~ }$ results in $E _ { \mathrm { Z } } \sim 1 5 7 0 0$ MHz. The micromagnet induces $\mathrm { d } E _ { \mathrm { Z } } \sim 3 0 0$ MHz and we can control � from a few MHz to tens of MHz by varying the barrier gate voltage. While a larger $f _ { \mathrm { R } }$ is desired for high-fidelity CROT gate, it also results in unwanted rotation of the off-resonant states. To cancel this unwanted rotation in both π and $\pi / 2$ CROT gates (Methods)<sup>16,30</sup>, hereafter we use $f _ { \mathrm { R } } = J / \sqrt { 1 5 }$ unless specifically noted.

Two important characteristics that can influence both single- and two-qubit gate performances are the dephasing and the decay of Rabi oscillation during the gate time. Figure 1e shows � (and $f _ { \mathrm { R } } )$ dependence of the dephasing times $T _ { 2 , \mathrm { m } , \sigma } ^ { * }$ measured for each transition (see also Extended Data Fig. 2d-f for detail). We find that $T _ { 2 , \mathrm { m } , \sigma } ^ { * }$ is almost constant in the measured range of � since they are mostly limited by single-qubit frequency noise rather than the fluctuation in � as corroborated by noise measurement (Extended Data Fig. 5a). This implies that increasing $f _ { \mathrm { R } }$ with keeping $J =$ $f _ { \mathrm { R } } { \sqrt { 1 5 } }$ is favorable to suppress the dephasing effect as larger � does not introduce extra dephasing. In contrast, we find that the Rabi decay depends on $f _ { \mathrm { R } } .$ . Figure 1f shows the $f _ { \mathrm { R } }$ dependence of Rabi decay $D _ { \mathrm { m } , \sigma }$ during a $\pi / 2$ CROT (see Extended Data Fig. 2j-l for detail). One can expect that the coherence-limited single- and two-qubit gate performances<sup>16,17,31</sup> are improved with decreasing $D _ { \mathfrak { m } , \sigma } { } ^ { 8 , 3 2 }$ . At small $( f _ { \mathrm { R } } \leq 2$ MHz) Rabi frequencies, $D _ { \mathrm { m } , \sigma }$ decreases with increasing $f _ { \mathrm { R } }$ since the effect of dephasing is suppressed. On the other hand, $D _ { \mathrm { m } , \sigma }$ increases with $f _ { \mathrm { R } }$ above approximately 5 MHz since the Rabi decay becomes faster possibly due to heating and/or population leakage<sup>8,32</sup>. In between the two regimes, $D _ { \mathrm { m } , \sigma }$ is minimized. This simple observation indicates that the best performance of single- and two-qubit gates should be obtained at $f _ { \mathrm { R } } \sim 5$ MHz.

Then, we measure basic qubit properties and assess single- and two-qubit gate fidelities at $f _ { \mathrm { R } } = 4 . 8 6 7$ MHz and $J = 1 8 . 8 5 ~ \mathrm { { \ M H z } }$ . The spin relaxation times for both qubits are much longer than the maximum operation time of 100 $\mu \mathrm { s }$ (Extended Data Fig. 2c) and therefore the spin relaxation effect is negligible in the gate performances. The dephasing times $T _ { 2 , \mathrm { m } , \sigma } ^ { * }$ are several µs (Fig. 1e) and they are enhanced by the Hahn echo sequence up to $\sim 3 0 ~ \mu \mathrm { s }$ (Extended Data Fig. 2i). Single-qubit gate fidelities are characterized by the Clifford-based randomized benchmarking (Fig. 2b and Methods)<sup>33</sup>. In this system, a single-qubit gate is constructed from two CROT gates (Fig. 2a). We obtain primitive gate fidelities of $F _ { \mathrm { p } , 1 } = 9 9 . 8 4 \pm 0 . 0 0 4 \%$ for $\mathrm { Q } _ { 1 }$ and $F _ { \mathrm { p } , 2 } = 9 9 . 8 4 \pm 0 . 0 0 4 \%$ for $\mathbf { Q } _ { 2 }$ (Fig. 2c). The two-qubit gate fidelity is also characterized by the Clifford-based two-qubit randomized benchmarking. All of the Clifford gates are constructed from the primitive gates shown in Fig. 2d, another set of gates where the roles of $\mathrm { Q } _ { 1 }$ and $\mathbf { Q } _ { 2 }$ are swapped and single-qubit phase gates acting on each $\mathrm { \ q u b i t ^ { 1 6 } }$ . Using the quantum circuit shown in Fig. 2e, we obtain a Clifford gate fidelity $F _ { \mathrm { C } } = 9 8 . 6 7 \pm 0 . 0 $ 1% which corresponds to a primitive gate fidelity $F _ { \mathrm { p } } = 9 9 . 4 8 \pm 0 . 0 0 4 \%$ as shown in Fig. $2 \mathrm { g }$ (Methods). Since all of the primitive gates similarly comprise two $\pi / 2$ CROT gates<sup>16</sup>, each primitive gate including the CNOT gate should have similar gate fidelity. To confirm this, we directly assess the CNOT gate fidelity $F _ { \mathrm { C N O T } }$ by the interleaved randomized benchmarking<sup>4,34</sup>. By comparing the sequence fidelity decay using the quantum circuit shown in Fig. 2e, f, we obtain $F _ { \mathrm { C N O T } } = 9 9 . 5 1 \pm 0 . 0 2 \%$ (Fig. 2g and Methods) which agrees with $F _ { \mathrm { p } }$

Next, we measure the impact of $f _ { \mathrm { R } }$ on the single- and two-qubit gate performances to study robustness of the high-fidelity gates. Figure 3a shows the $f _ { \mathrm { R } }$ dependence of single-qubit primitive gate fidelities $F _ { \mathrm { p , m } }$ . The best performance of $F _ { \mathrm { p , m } } \sim 9 9 . 8 $ % is obtained at $f _ { \mathrm { R } } = 2 \cdot 5$ MHz, in agreement with $f _ { \mathrm { R } }$ dependence of the Rabi decay (Fig. 1f). The two-qubit primitive gate fidelity $F _ { \mathrm { p } }$ also depends on $f _ { \mathrm { R } }$ as shown in Fig. 3b. For small $f _ { \mathrm { R } } ~ ( \leq 2 . 8 ~ \mathrm { M H z } )$ $F _ { \mathbf { p } }$ is below 99% and mostly limited by dephasing<sup>16</sup>. In this regime, $F _ { \mathfrak { p } }$ is much lower than $F _ { \mathrm { p , m } }$ since the dephasing effect mainly affects the control qubit that is left idle while the target qubit is driven in CROT gates. Therefore, suppressing the dephasing effect is more important in the two-qubit gates. By increasing $f _ { \mathrm { R } }$ , the dephasing effect can be suppressed and we obtain $F _ { \mathrm { p } }$ above 99%. By further increasing $f _ { \mathrm { R } } , \ F _ { \mathrm { p } }$ sharply drops due to the fast Rabi decay. As expected from $f _ { \mathrm { R } }$ dependence of the dephasing time and the Rabi decay (Fig. 1e, f), we obtain the best values of $F _ { \mathrm { p } } \sim 9 9 . 5 \%$ at $f _ { \mathrm { R } } = 4 { - } 5$ MHz. To consider the limiting factor of $F _ { \mathrm { p } }$ in this condition, we simulate the effect of dephasing (Methods and Extended Data Fig. 5a, b). We find that the infidelity due to dephasing is only 0.1% and therefore it is no longer the main limiting factor. The effect of Rabi decay is also small as indicated by the high-fidelitiy (99.84%) single-qubit gates (Fig. 2c). The remaining infidelity could originate from pulse calibration errors and long-term fluctuations in the device condition. These results indicate that the optimal gate condition is efficiently searched only from simple measurements of dephasing time and Rabi decay, which will be useful to tune up a large qubit array.

Finally, we implement the two-qubit Deutsch–Jozsa algorithm<sup>25</sup> and Grover search algorithm<sup>26</sup> to demonstrate the feasibility of high-fidelity quantum processing. The Deutsch–Jozsa algorithm (Fig. 4a) determines whether an unknown function $f _ { \mathrm { i } } ( x )$ mapping a single-bit input $x \in \{ 0 , 1 \} = \{ | { \uparrow } \rangle , | { \downarrow } \rangle \}$ to a single-bit output is constant $( f _ { 0 } ( x ) = 1 , f _ { 1 } ( x ) = 0 )$ or balanced $( f _ { 2 } ( x ) = x , f _ { 3 } ( x ) = 1 - x )$ by a single call of the function. The Grover search algorithm (Fig. 4b) finds the unique input two-bit string $x _ { 0 } = \mathrm { i j ~ \Omega ( i , j \in \{ 0 , 1 \} ) }$ ) of a function $f _ { \mathrm { i j } } ( x )$ which outputs 0 for $x \neq x _ { 0 }$ but 1 for ${ x } = { x } _ { 0 }$ by a single call of the function. Figure 4c-f $( 4 \mathrm { g - j ) }$ shows the real part of the density matrix (Methods) measured at each stage for $f _ { 2 } ~ ( f _ { 1 1 } )$ . All through the processing, the state fidelity compared to the ideal state is kept high $( > 9 6 \% )$ , which surpasses those previously obtained in silicon spin qubits<sup>18,35</sup>. We also obtain similar output state fidelities for the other functions (Extended Data Fig. 8). These results demonstrate that high-fidelity quantum processing is feasible in silicon spin qubits.

In conclusion, we demonstrate single- and two-qubit primitive gate fidelities of 99.8% and 99.5%, respectively, which are beyond the surface code error correction threshold<sup>3</sup>. Micromagnet-induced gradient field and tunable exchange coupling allow us to assess the single- and two-qubit gate fidelities with a variety of gate conditions and reveal a relationship between them. We identify that the Rab frequency for single-qubit rotation influences both single- and two-qubit gate fidelities. We find a range of Rabi frequency where we robustly achieve the two-qubit primitive and CNOT gate fidelities higher than 99%. The demonstrated universal quantum gate set allows us to implement two-qubit quantum algorithms with high fidelities. Our results are an important step toward realizing faulttolerant quantum computation in silicon spin qubits.

During the completion of this manuscript, we became aware of related experiments that demonstrate universal quantum control fidelity exceeding the fault-tolerance threshold in two electron spin qubits<sup>36</sup> and two nuclear spin qubits<sup>37</sup> in silicon.

![[assets/figures/references/noiri-2022/5aaca7820ec7d6bfedafebed2e51de32d4864ef6914a928a77d39a5c4d815758.jpg]]

![[assets/figures/references/noiri-2022/c196e446fe8bb2963a95a401a6ea2ba5031ffcc7e4391aa051702441f8c260bd.jpg]]

![[assets/figures/references/noiri-2022/a792a656620bf00dfd5a7f93c9799ba61b2aab57f2e5efd440feb4de4c354633.jpg]]

![[assets/figures/references/noiri-2022/1226505f018c65a63b1d0e0e343610e10e7d1f5f6960f62ad73bf2f7d4c87518.jpg]]

![[assets/figures/references/noiri-2022/f12e59988b177355053eea3b5d514d28a3b285eaf5434ca52f373b7a92899430.jpg]]

![[assets/figures/references/noiri-2022/ca5c1ffee2547cf892999755ea0d617f4d220577fcef4788dbc054ae1a4b74a8.jpg]]  
Figure 1. Two-qubit system. a, False color scanning microscope image of a device identical to the one measured. The qubits are located underneath the P1 and P2 gate electrodes. The white circle shows a charge sensor quantum dot embedded in a radio-frequency tank circuit<sup>38,39</sup>. The white scale bar indicates 100 nm. b, Charge stability diagram around the operation condition. Initialization and measurement for ${ \bf Q } _ { 1 } \ ( { \bf Q } _ { 2 } )$ is performed at the white circle labeled A (B). Qubits manipulation is performed at the charge-symmetry point shown in the white square labeled C. c, Energy diagram of the two-qubit system. Each colored arrow shows the state transition driven by EDSR with the microwave frequency $f _ { 1 , \downarrow } , f _ { 1 , \uparrow } , f _ { 2 , \downarrow }$ , and $f _ { 2 , \uparrow \cdot } { \bf d } ,$ EDSR spectra for $\mathrm { Q } _ { 1 }$ when $\mathbf { Q } _ { 2 }$ is spin-down (purple) and -up (magenta) and for $\mathrm { Q } _ { 2 }$ when $\mathrm { Q } _ { 1 }$ is spin-down (orange) and -up (yellow). e, � (and $f _ { \mathrm { R } } )$ dependence of the dephasing times (Extended Data Fig. 2d-f). We choose the charge-symmetry point

as the operation condition and control � by modifying the tunnel coupling between the quantum dots. The errors represent the estimated standard errors for the best-fit values. f, $f _ { \mathrm { R } }$ (and �) dependence of the Rabi decay during a $\pi / 2$ CROT obtained from the Rabi decay curves (Extended Data Fig. 2j-l). The errors represent the estimated standard errors for the best-fit values.

![[assets/figures/references/noiri-2022/efe1300ce0c690f07a98aea6448abe064ef2e17cbd1cb3b68b667a562b4c7aed.jpg]]

![[assets/figures/references/noiri-2022/3d6879e0bd925672693f3db50f35ed689f2828ad1e2273381baf4086193253ce.jpg]]

![[assets/figures/references/noiri-2022/6b6197d07a99e7870a2ec5a2992f3e0af4758d8fe8910cfef9362eb1e178042d.jpg]]  
Figure 2. Characterization of universal quantum control performances by randomized benchmarking. a, Example of a single-qubit gate constructed from two CROT gates to make it unconditional spin rotation. b, Quantum circuit to measure the single-qubit gate fidelity of $\mathrm { Q } _ { 1 }$ by the Clifford-based randomized benchmarking. As the spin rotation under finite exchange coupling is a CROT, we synthesize our unconditional single-qubit rotations to assess the averaged performance of single-qubit gate of $\mathrm { Q } _ { 1 }$ with various $\mathbf { Q } _ { 2 }$ states. The roles of $\mathrm { Q } _ { 1 }$ and $\mathrm { Q } _ { 2 }$ are swapped to measure the single-qubit gate fidelity of $\mathbf { Q } _ { 2 } , \mathbf { c } ,$ Single-qubit Clifford-based randomized benchmarking for $\mathrm { Q } _ { 1 }$ (purple) and $\mathrm { Q } _ { 2 } \mathrm { ( o r a n g e ) }$ . The uncertainty in the gate fidelities are obtained by a Monte Carlo method<sup>4</sup>. d, Quantum circuits for two-qubit primitive gates that rotate $\mathrm { Q } _ { 1 }$ . CNOT and zero-CNOT (Z-CNOT) gates flip the target qubit $\mathrm { Q } _ { 1 }$ when the control qubit $\mathbf { Q } _ { 2 }$ is spin-down and $- \mathbf { u } \mathbf { p } ^ { 1 6 }$ . We construct our Clifford gates so that the number of primitive gates per one Clifford gate is minimum, which results in 2.57 primitive gates per one Clifford gate on average<sup>16</sup>. Since the single-qubit phase gates are implemented by changing the reference frame of all subsequent microwave pulses in the software, we do not include them in the primitive gate count. e, Quantum circuit for two-qubit randomized benchmarking to measure the Clifford gate fidelity and the primitive gate fidelity $F _ { \mathbf { p } } . \mathbf { f } ,$ Quantum circuit for interleaved randomized benchmarking to measure the CNOT gate fidelity $F _ { \mathrm { C N O T } } . \ \mathbf { g } ,$ Results of the two-qubit Clifford-based randomized benchmarking. The uncertainty in gate fidelities are obtained by a Monte Carlo method<sup>4</sup>.

![[assets/figures/references/noiri-2022/7a57be511fdbb28960932cbfd216c6f14a3770d0f8d487678319cf7d1af75ab2.jpg]]

![[assets/figures/references/noiri-2022/4aa651e8ef409cce217bda62cc50565bf6149b3b000976bc216ecd565523cbf7.jpg]]  
Figure 3. Rabi frequency dependence of single- and two-qubit primitive gate fidelities. a, $f _ { \mathrm { R } }$ dependence of the single-qubit primitive gate fidelity extracted from single-tone single-qubit primitive gate fidelities (Extended Data Fig. 3d) as $F _ { \mathrm { p , m } } = F _ { \mathrm { p , m , \downarrow } } F _ { \mathrm { p , m , \uparrow } }$ . Here we measure single-tone singlequbit primitive gate fidelities to assess the impact of $f _ { \mathrm { R } }$ on the single-qubit gate performance withou involving the effect of � (Extended Data Fig. 3d). b, $f _ { \mathrm { R } }$ and � dependence of the two-qubit primitive gate fidelity. $f _ { \mathrm { R } } = J / \sqrt { 1 5 }$ is always satisfied. When the Rabi frequency is in between 2.8 and 5.7 MHz, both dephasing and Rabi decay effects are suppressed and the two-qubit primitive gate fidelity exceeds the fault-tolerance threshold. The uncertainty in the fidelities are obtained by a Monte Carlo method<sup>4</sup>.

![[assets/figures/references/noiri-2022/5036f691c476bcdd1780e2decb033f1e733a78c549262fcb3c24aed5ce7ab63e.jpg]]  
Figure 4. Two-qubit quantum processing. a, Quantum circuit for the two-qubit Deutsch–Jozsa algorithm<sup>18</sup>. $f _ { \mathrm { i } } ( x )$ is implemented by an oracle $O _ { \mathrm { D } } = \mathrm { I } _ { 2 }$ for $f _ { 0 } , \mathrm { ~ X } _ { 2 }$ for $f _ { 1 }$ , $\mathrm { Z } - \mathrm { C N O T } _ { 2 }$ for $f _ { 2 }$ , and $\mathrm { C N O T } _ { 2 }$ for $f _ { 3 }$ where the subscript 2 after gates indicates that the target qubit is $\mathbf { Q } _ { 2 } .$ . b, Quantum circuit for the two-qubit Grover search algorithm<sup>18</sup>. $f _ { \mathrm { i j } } ( x )$ is implemented by an oracle $O _ { \mathrm { G } } = O _ { 1 1 } =$ $( \Upsilon _ { 2 } / 2 ) ( \mathrm { C N O T } _ { 2 } ) ( - \Upsilon _ { 2 } / 2 )$ for $f _ { 1 1 }$ $O _ { 1 0 } = ( \mathrm { Y } _ { 1 } / 2 ) ( \mathrm { Z } - \mathrm { C N O T } _ { 1 } ) ( - \mathrm { Y } _ { 1 } / 2 )$ for $f _ { 1 0 }$ $O _ { 0 1 } = \mathrm { ( - Y _ { 1 } / }$ 2) $( \mathrm { C N O T } _ { 1 } ) ( \mathrm { Y } _ { 1 } / 2 )$ for $f _ { 0 1 }$ , and $O _ { 0 0 } = ( - \mathrm { Y } _ { 2 } / 2 ) ( \mathrm { Z } - \mathrm { C N O T } _ { 2 } ) ( \mathrm { Y } _ { 2 } / 2 )$ for $f _ { 0 0 }$ . c-f, Real part of the measured density matrix (Methods) for $f _ { 2 }$ after initialization (c), preparation of the input state (d), application of the oracle (e), and the completion of the processing (f). i-k, Real part of the measured density matrix for $f _ { 1 1 }$ at each stage shown in b. The absolute values of the matrix elements for the imaginary parts are less than 0.028 (c), 0.046 (d), 0.051 (e), 0.050 (f), 0.013 (g), 0.072 (h), 0.081 (i), and 0.079 (j). The uncertainty in the state fidelities � are obtained by a Monte Carlo method<sup>16,18,40</sup>.

## Methods:

## Measurement setup.

The sample is cooled down in a dry dilution refrigerator (Oxford Instruments Triton) with a base temperature of ∼ 20 mK. The electron temperature is ∼ 60 mK. The dc gate voltages are supplied by a 24-channel digital-to-analog converter (QDevil ApS QDAC), which is low-pass filtered at a cutoff frequency of 800 Hz. The voltage pulses applied to the P1 and P2 gate electrodes are generated by an arbitrary waveform generator (Tektronix AWG5014C). The EDSR microwave pulses are generated using an I/Q modulated signal generator (Anapico APMS20G with a Marki microwave MLIQ-0218 I/Q mixer) and applied to the bottom screening gate. The I/Q modulation signals are generated by another arbitrary waveform generator (Tektronix AWG70002A) triggered by the arbitrary waveform generator used for generating the gate voltage pulses. The microwave signals are sideband-modulated by frequencies ranging from -240 to 180 MHz from the baseband frequency in order to avoid the unintentional spin rotation due to leakage (the typical isolation is ∼ 50 dBc after calibration of the I/Q imbalances and the dc offsets) as well as switch the microwave frequencies rapidly. During the initialization and measurement stages, additional pulse modulations are used to provide further isolation of the microwave signals. The Rabi frequencies of single-qubit rotations are controlled by the amplitudes of I/Q modulation signals.

## Sample fabrication.

The quantum dots are defined at the isotopically enriched silicon quantum well (residual <sup>29</sup>silicon concentration of 800 parts per million) 50 nm below the wafer surface. Three layers of overlapping aluminum gates are fabricated by electron-beam lithography and lift-off processes<sup>15</sup>. Each layer is insulated by the thin native aluminum oxide. The micromagnet made of a stack of titanium and cobalt films with thicknesses of 5 and 250 nm is placed on top of the overlapping gates with a 30 nm thick insulating layer (aluminum oxide grown by an atomic layer deposition) in between. The micromagnet design is similar to those in previous reports<sup>8,19,27,40</sup>.

## Sequence fidelity and gate fidelity extraction in randomized benchmarking.

The sequence fidelity of single-qubit randomized benchmarking is obtained by the following procedure. According to the standard randomized benchmarking protocol, we measure spin-up probability as a function of the number of Clifford gates �. Then the spin-up probability $\mathrm { P } _ { \uparrow }$ follows $\mathrm { P } _ { \uparrow } ( n ) = A _ { s } p _ { s } ^ { n } + C _ { s }$ , where $p _ { s }$ is the depolarizing parameter, $A _ { s }$ and $C _ { s }$ are the constants to absolve the state preparation and measurement errors. Here, the recovery Clifford gate is chosen so that the final ideal state is spin-up. We also obtain another data set where the final ideal state is spindown by choosing different recovery gates. In this case, the spin-up probability $\mathrm { P } _ { \uparrow } ^ { \prime }$ follows ${ \mathrm { P } } _ { \uparrow } ^ { \prime } ( n ) =$ $B _ { s } p _ { s } ^ { n } + C _ { s } ,$ , where $B _ { s }$ is the constant determined by state preparation and measurement errors. Then the sequence fidelity $F _ { s } ( n )$ is obtained from $F _ { s } ( n ) = \mathrm { P } _ { \uparrow } ( n ) - \mathrm { P } _ { \uparrow } ^ { \prime } ( n ) = ( A _ { s } - B _ { s } ) p _ { s } ^ { n }$ , eliminating the uncertainty of determining $C _ { s } ^ { ~ 7 , 1 8 , 4 0 , 4 1 }$ . Here the fitting parameter $A _ { s } - B _ { s }$ absorbs the state preparation and measurement errors. We average 16 random sequences, each of which are repeated 400 times to measure $F _ { s } ( n )$ . The Clifford gate fidelity $F _ { \mathrm { C , m } }$ is obtained by $F _ { \mathrm { C , m } } = ( 1 + p _ { s } ) / 2$ where m is the qubit number 1 or 2. Since a Clifford gate contains 1.875 primitive gates on average, we extract the primitive gate fidelity $F _ { \mathrm { p , m } }$ as $F _ { \mathrm { p , m } } = 1 - ( 1 - F _ { \mathrm { C , m } } ) / 1 . 8 7 5$

Similarly, the sequence fidelity of two-qubit randomized benchmarking is extracted by the following procedure. We measure $\mathrm { P } _ { \uparrow \uparrow } ( n ) = A _ { \mathrm { t } } p _ { \mathrm { t } } ^ { n } + C _ { \mathrm { t } }$ as a function of � where $\mathrm { P } _ { \uparrow \uparrow }$ is the joint probability of spin-up in both qubits, $p _ { \mathrm { t } }$ is the depolarizing parameter, $A _ { \mathrm { t } }$ and $C _ { \mathrm { t } }$ are the constants to absolve the state preparation and measurement errors. Here, the recovery Clifford gate is chosen so that the final ideal state is spin-up for both qubits. We also measure another data set where the final ideal state is spin-down for both qubits and obtain $\mathrm { P } _ { \uparrow \uparrow } ^ { \prime } ( n ) = B _ { \mathrm { t } } p _ { \mathrm { t } } ^ { n } + C _ { \mathrm { t } } . ~ B _ { \mathrm { t } }$ is the constant determined by state preparation and measurement errors. Then the sequence fidelity $F _ { \mathrm { t } } ( n )$ is extracted from $F _ { \mathrm { t } } ( n ) =$ $\mathrm { P } _ { \uparrow \uparrow } ( n ) - \mathrm { P } _ { \uparrow \uparrow } ^ { \prime } ( n ) = ( A _ { \mathrm { t } } - B _ { \mathrm { t } } ) p _ { \mathrm { t } } ^ { n }$ . We average 60 random sequences each of which are repeated 400 times to measure $F _ { \mathrm { t } } ( n )$ . The two-qubit Clifford gate fidelity is obtained by $F _ { \mathrm { C } } = ( 1 + 3 p _ { \mathrm { t } } ) / 4$ . Since a Clifford gate contains 2.57 primitive gates on average, we extract the primitive gate fidelity $F _ { \mathrm { p } }$ as $F _ { \mathrm { p } } = 1 - ( 1 - F _ { \mathrm { C } } ) / 2 . 5 7$ . The obtained gate fidelity using this protocol agrees with that obtained using the standard protocol<sup>4,16</sup> (only measures $\mathrm { P } _ { \uparrow \uparrow } = A _ { \mathrm { t } } p _ { \mathrm { t } } ^ { n } + C _ { \mathrm { t } } )$ as shown in Extended Data Fig. 4.

Fidelity of the CNOT gate is obtained as follows<sup>4</sup>. We first measure $F _ { \mathrm { t } } ( n )$ by applying random Clifford gates (Fig. 2e) and obtain the depolarizing parameter $p _ { \mathrm { r e f } }$ as a reference. We also measure $F _ { \mathrm { t } } ( n )$ by applying the CNOT gate between each random Clifford gates (Fig. 2f) and obtain the depolarizing parameter � . Then we extract the CNOT gate fidelity as $F _ { \mathrm { C N O T } } = ( 1 +$ $3 p _ { \mathrm { C N O T } } / p _ { \mathrm { r e f } } ) / 4$

The errors of the gate fidelities are obtained by a Monte Carlo method<sup>4</sup>. We fit the resulting fidelity distribution by the Gaussian distribution and extract its standard deviation.

## Estimation of resonance frequencies fluctuations.

Time dependence of the resonance frequencies $f _ { 1 , \downarrow } , f _ { 1 , \uparrow } , f _ { 2 , \downarrow }$ , and $f _ { 2 , \uparrow }$ are extracted from repeated Ramsey fringe measurements. We sequentially measure Ramsey fringes for $\mathbf { Q } _ { 1 } \left( \mathbf { Q } _ { 2 } \right)$ when $\mathbf { Q } _ { 2 } \left( \mathbf { Q } _ { 1 } \right)$ is spin-down and -up by changing the evolution time from 0.04 µs to 4.0 µs with 0.04 µs step. Then we estimate each resonance frequency from single record of Ramsey fringe by Bayesian estimation<sup>31,42</sup>. This single cycle takes 1.706 s. We repeat the measurement 10,000 cycles and extract time dependence of $f _ { 1 , \downarrow } , f _ { 1 , \uparrow } , f _ { 2 , \downarrow }$ , and $f _ { 2 , \uparrow }$ . The fluctuation of $J / 2 ( \Delta J / 2 = ( \Delta f _ { 1 , \uparrow } - \Delta f _ { 1 , \downarrow } ) / 2 )$ , singlequbit frequencies of $\mathrm { Q } _ { 1 } \ ( \Delta f _ { 1 } = ( \Delta f _ { 1 , \uparrow } + \Delta f _ { 1 , \downarrow } ) / 2 )$ , and $\mathrm { Q } _ { 2 } \ ( \Delta f _ { 2 } = ( \Delta f _ { 2 , \uparrow } + \Delta f _ { 2 , \downarrow } ) / 2 )$ are shown in Extended Data Fig. 5a. Since the fluctuation of each resonance frequency is $\Delta f _ { \mathrm { m } , \sigma } = \Delta f _ { \mathrm { m } } \pm \Delta J / 2$ and $\Delta f _ { \mathrm { m } }$ is larger than $\Delta J / 2$ , the dephasing times are mostly limited by the noise in single-qubit frequencies rather than that of � and therefore � does not have a significant impact on the dephasing times as shown in Fig. 1e.

## Theoretical description of controlled-rotation.

To understand the time evolution of the system under EDSR control, it is simpler to consider in a time dependent rotating frame $R = \mathrm { d i a g ~ } ( \mathrm { e } ^ { - i 2 \pi E _ { \mathrm { Z } } t } , \mathrm { e } ^ { - i \pi ( - \mathrm { d } \tilde { E } _ { \mathrm { Z } } - J ) t } , \mathrm { e } ^ { - i \pi ( \mathrm { d } \tilde { E } _ { \mathrm { Z } } - J ) t } , \mathrm { e } ^ { i 2 \pi E _ { \mathrm { Z } } t } )$ Then the Hamiltonian is described by $\begin{array} { r } { { \cal H } _ { \mathrm { R } } ( t ) = R H { \cal R } ^ { \dagger } - \frac { i h } { 2 \pi } \frac { \partial R } { \partial t } { \cal R } ^ { \dagger } } \end{array}$

$$
= \frac {h}{2} \left( \begin{array}{c c c c} 0 & f _ {R} \mathrm{e} ^ {- i 2 \pi (f _ {2, \uparrow} - f _ {\mathrm{MW}}) t + i \phi} & f _ {R} \mathrm{e} ^ {- i 2 \pi (f _ {1, \uparrow} - f _ {\mathrm{MW}}) t + i \phi} & 0 \\ f _ {R} \mathrm{e} ^ {i 2 \pi (f _ {2, \uparrow} - f _ {\mathrm{MW}}) t - i \phi} & 0 & 0 & f _ {R} \mathrm{e} ^ {- i 2 \pi (f _ {1, \downarrow} - f _ {\mathrm{MW}}) t + i \phi} \\ f _ {R} \mathrm{e} ^ {i 2 \pi (f _ {1, \uparrow} - f _ {\mathrm{MW}}) t - i \phi} & 0 & 0 & f _ {R} \mathrm{e} ^ {- i 2 \pi (f _ {2, \downarrow} - f _ {\mathrm{MW}}) t + i \phi} \\ 0 & f _ {R} \mathrm{e} ^ {i 2 \pi (f _ {1, \downarrow} - f _ {\mathrm{MW}}) t - i \phi} & f _ {R} \mathrm{e} ^ {i 2 \pi (f _ {2, \downarrow} - f _ {\mathrm{MW}}) t - i \phi} & 0 \end{array} \right).
$$

The off-diagonal terms result in a CROT gate by choosing one of the resonance frequencies $f _ { 1 , \downarrow } , f _ { 1 , \uparrow }$ $f _ { 2 , \downarrow }$ , and $f _ { 2 , \uparrow }$ . Here the effect of oscillating terms with an oscillation frequency much larger than $f _ { \mathrm { R } }$ is averaged out during the $\pi / 2$ CROT time $t _ { \mathrm { h p } } = 1 / ( 4 f _ { \mathrm { R } } )$ . When � is comparable to $f _ { \mathrm { R } }$ , the terms oscillating with a frequency of � results in unwanted off-resonant rotation of the target qubit. The offresonant rotation follows the Hamiltonian $\frac { h } { 2 } \binom { \pm J } { f _ { \mathrm { R } } } \quad \frac { f _ { \mathrm { R } } } { \mp J } \bigg )$ and therefore the target qubit rotates along a tilted axis with an effective Rabi frequency $\tilde { f } _ { \mathrm { R } } = \sqrt { f _ { \mathrm { R } } ^ { 2 } + J ^ { 2 } }$ . To suppress the effect, $\tilde { f } _ { \mathrm { R } } t _ { \mathrm { h p } }$ must be an integer, and therefore we use the Rabi frequency such that $f _ { R } = J / \sqrt { 1 6 \mathrm { k } ^ { 2 } - 1 }$ where k is an integer<sup>16,30</sup>.

## Simulation of two-qubit gate infidelity by quasi-static noise in resonance frequencies.

We simulate the effect of the resonance frequency noise<sup>16</sup> on the two-qubit primitive gate fidelity. We assume the noise is quasi-static in the single measurement of 100 µs but changes in between the measurements. We use the measured time dependence of $\Delta J$ , Δd $\tilde { E } _ { \mathrm { Z } } = \Delta f _ { 2 } - \Delta f _ { 1 }$ , and $\Delta E _ { z } = ( \Delta f _ { 1 } +$ $\Delta f _ { 2 } ) / 2$ (Extended Data Fig. 5a) to simulate the effect. We calculate $\pi / 2$ CROT operators by $\mathrm { U } _ { \mathrm { C R O T } } = \prod _ { \mathrm { k } = 0 } ^ { \mathrm { k } = \mathrm { N } } \mathrm { e } ^ { - \mathrm { i } 2 \pi ( H _ { \mathrm { R } } ( \mathrm { k } \Delta t ) + \Delta H _ { \mathrm { R } } ) \Delta t / h }$ where $\Delta H _ { \mathrm { R } } = \mathrm { d i a g } ( 2 h \Delta E _ { \mathrm { Z } } , - h \Delta \mathrm { d } \tilde { E } _ { \mathrm { Z } } - h \Delta J , h \Delta \mathrm { d } \tilde { E } _ { \mathrm { Z } } -$ $h \Delta J , - 2 h \Delta E _ { \mathrm { Z } } ) / 2 , \ \Delta t = t _ { \mathrm { h p } } / \mathrm { N } ,$ and N is a large integer $( \Nu = 1 0 0 0$ in our calculation) and obtain operators of the primitive gates. Then we calculate the probability of the ideal final state as a function of the number of randomly chosen Clifford gates. We average 60 random sequences, each of which is repeated 100 times with different Δ�, $\Delta \mathrm { d } \tilde { E } _ { \mathrm { Z } } ,$ and $\Delta E _ { z }$ . Then we extract the two-qubit primitive gate infidelity. In the simulation, � is fixed at $\sqrt { 1 5 } f _ { R } . f _ { R }$ dependence of the infidelity is shown in

Extended Data Fig. 5b. Around the optimal gate condition $f _ { \mathrm { R } } = 4 { - } 5$ M $\mathbf { { \bar { d } } } \mathbf { z } ,$ the infidelity is only ∼ 0.1%.

Future works will include a CNOT gate with pulsed exchange control<sup>19</sup> to make the system suitable for scaling up. In addition to switching the exchange coupling, this requires an additional idle time of $( 2 - \sqrt { 1 5 } / 2 ) / J$ in all of the primitive gates to make the total gate time 2/� to remove unwanted controlled-phase accumulation during the exchange pulse<sup>19,30</sup>. We simulate this case as shown in Extended Data Fig. 5c. Around $f _ { \mathrm { R } } = 4 { - } 5 ~ \mathrm { M H z } .$ , the infidelity caused by the additional idle time is less than 0.1%. Therefore, we anticipate a CNOT gate fidelity higher than 99% with exchange pulses is within reach.

## State tomography.

First, we remove the measurement error from the measured joint probabilities $\mathrm { P _ { M } } = ( \mathrm { P } _ { \downarrow \downarrow } , \mathrm { P } _ { \downarrow \uparrow } , \mathrm { P } _ { \uparrow \downarrow } , \mathrm { P } _ { \uparrow \uparrow } )$ and obtain the joint probabilities $\mathsf { P } = ( \mathsf { P } _ { \downarrow \downarrow } , \mathsf { P } _ { \downarrow \uparrow } , \mathsf { P } _ { \uparrow \downarrow } , \mathsf { P } _ { \uparrow \uparrow } )$ which is used to extract its density matrix. To do this, we measure a readout correction matrix C as shown in Extended Data Fig. 7. Here, four computational basis states ( |↑↑⟩, |↑<sup>̃</sup>↓⟩, |↓<sup>̃</sup>↑⟩, and |↓↓⟩ ) are prepared and joint probabilities are measured<sup>43</sup>. Then, P is obtained such that $\mathrm { P } = \mathrm { C } ^ { - 1 } \mathrm { P } _ { \mathrm { M } }$

Next, we perform maximum likelihood estimation to make the density matrix physical<sup>16,18,19,40</sup>. A physical density matrix � can be described using a complex lower triangular matrix having real

diagonal elements T as $\rho = \mathrm { T T } ^ { \dagger } / \mathrm { T r ( T } ^ { \dagger } \mathrm { T ) }$ . Then we minimize the cost function

$$
C (\mathbf {t}) = \sum_ {\nu = 1} ^ {1 6} \frac {(\langle \psi_ {\nu} | \rho (\mathbf {t}) | \psi_ {\nu} \rangle - P _ {\nu}) ^ {2}}{2 \langle \psi_ {\nu} | \rho (\mathbf {t}) | \psi_ {\nu} \rangle},
$$

where $\mathbf { t } = ( \mathrm { t } _ { 1 } , \mathrm { t } _ { 2 } , \dots , \mathrm { t } _ { 1 6 } )$ is the real parameters of T, $\mathrm { P } _ { \nu }$ is the probability projected at a state $| \psi _ { \nu } \rangle$ obtained by averaging measurement results of 10,000 shots with measurement error correction. To extract � , 16 combinations of $( \mathrm { I } , \mathrm { X } / 2 , \mathrm { Y } / 2 , \mathrm { X } )$ pre-rotations acting on Q1 and Q2 are used<sup>4,18</sup>. The uncertainty of the state fidelity is obtained by a Monte Carlo method assuming that the measured single-shot probabilities follow multinomial distributions<sup>16,18,40</sup>. Then, the obtained fidelity distribution is fitted by the Gaussian distribution and extract its standard deviation. We find that just after preparing |↓↓⟩, the state fidelity is only 98% (Fig. 4c, g) and subsequent qubit controls do not decrease the state fidelity much (< 2%) (Fig. 4d-f, 4h-j). This indicates that the imperfection of state preparation and measurement error removal contributes ∼ 1-2% infidelity to the obtained state infidelities.

Data availability:

The data that support the findings of this study will be available from URL.

## Code availability:

All codes used in this study are available upon reasonable request from the corresponding authors.

## References:

Nielsen, M. A. & Chuang, I. L. Quantum Computation and Quantum Information. Cambridge Univ. Press (2000).

2. Fowler, A. G., Mariantoni, M., Martinis, J. M. & Cleland, A. N. Surface codes: Towards practical large-scale quantum computation. Phys. Rev. A 86, 032324 (2012).

3. Wang, D. S., Fowler, A. G. & Hollenberg, L. C. L. Surface code quantum computing with error rates over 1%. Phys. Rev. A 83, 020302(R) (2011).

4. Barends, R. et al. Superconducting quantum circuits at the surface code threshold for fault tolerance. Nature 508, 500–503 (2014).

5. Ballance, C. J., Harty, T. P., Linke, N. M., Sepiol, M. A. & Lucas, D. M. High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits. Phys. Rev. Lett. 117, 060504 (2016).

6. Rong, X. et al. Experimental fault-tolerant universal quantum gates with solid-state spins under ambient conditions. Nat. Commun. 6, 8748 (2015).

7. Veldhorst, M. et al. An addressable quantum dot qubit with fault-tolerant control-fidelity. Nat. Nanotechnol. 9, 981–985 (2014).

8. Yoneda, J. et al. A quantum-dot spin qubit with coherence limited by charge noise and fidelity higher than 99.9%. Nat. Nanotechnol. 13, 102–106 (2018).

9. Veldhorst, M. et al. A two-qubit logic gate in silicon. Nature 526, 410–414 (2015).

10. Petit, L. et al. Universal quantum logic in hot silicon qubits. Nature 580, 355–359 (2020).

11. Yang, C. H. et al. Silicon quantum processor unit cell operation above one Kelvin. Nature 580, 350–354 (2020).

12. Li, R. et al. A crossbar network for silicon quantum dot qubits. Sci. Adv. 4, eaar3960 (2018).

13. Vandersypen, L. M. K. et al. Interfacing spin qubits in quantum dots and donors - hot, dense and coherent. npj Quantum Inf. 3, 34 (2017).

14. Jones, C. et al. Logical Qubit in a Linear Array of Semiconductor Quantum Dots. Phys. Rev. X 8, 21058 (2018).

15. Zajac, D. M., Hazard, T. M., Mi, X., Nielsen, E. & Petta, J. R. Scalable Gate Architecture for a One-Dimensional Array of Semiconductor Spin Qubits. Phys. Rev. Appl. 6, 054013 (2016).

16. Huang, W. et al. Fidelity benchmarks for two-qubit gates in silicon. Nature 569, 532–536 (2019).

17. Yang, C. H. et al. Silicon qubit fidelities approaching incoherent noise limits via pulse engineering. Nat. Electron. 2, 151–158 (2019).

18. Watson, T. F. et al. A programmable two-qubit quantum processor in silicon. Nature 555, 633– 637 (2018).

19. Zajac, D. M. et al. Resonantly driven CNOT gate for electron spins. Science 359, 439–442 (2018).

20. Xue, X. et al. Benchmarking Gate Fidelities in Si/SiGe Two-Qubit Device. Phys. Rev. X 9, 021011 (2019).

21. J. R. Petta et al. Coherent Manipulation of Coupled Electron Spins in Semiconductor Quantum Dots. Science 309, 2180–2184 (2005).

22. Reed, M. D. et al. Reduced Sensitivity to Charge Noise in Semiconductor Spin Qubits via Symmetric Operation. Phys. Rev. Lett. 116, 110402 (2016).

23. Takeda, K., Noiri, A., Yoneda, J., Nakajima, T. & Tarucha, S. Resonantly driven singlet-triplet spin qubit in silicon. Phys. Rev. Lett. 124, 117701 (2020).

24. Sigillito, A. J., Gullans, M. J., Edge, L. F., Borselli, M. & Petta, J. R. Coherent transfer of quantum information in silicon using resonant SWAP gates. npj Quantum Inf. 5, 110 (2019).

25. Deutsch, D. & Jozsa, R. Rapid solution of problems by quantum computation. Proc. R. Soc. London. A 439, 553–558 (1992).

26. Grover, L. Quantum Mehannics Helps in Searching for a Needle in a Haystack. Phys. Rev. Lett. 79, 325–328 (1997).

27. Yoneda, J. et al. Robust micro-magnet design for fast electrical manipulations of single spins in quantum dots. Appl. Phys. Express 8, 084401 (2015).

28. Elzerman, J. M. et al. Single-shot read-out of an individual electron spin in a quantum dot. Nature 430, 431–435 (2004).

29. Morello, A. et al. Single-shot readout of an electron spin in silicon. Nature 467, 687–691 (2010).

30. Russ, M. et al. High-fidelity quantum gates in Si/SiGe double quantum dots. Phys. Rev. B 97, 085421 (2018).

31. Nakajima, T. et al. Coherence of a driven electron spin qubit actively decoupled from quasi-static noise. Phys. Rev. X 10, 11060 (2020).

32. Takeda, K. et al. A fault-tolerant addressable spin qubit in a natural silicon quantum dot. Sci. Adv. 2, e1600694 (2016).

33. Knill, E. et al. Randomized benchmarking of quantum gates. Phys. Rev. A 77, 012307 (2008).

34. Magesan, E. et al. Efficient measurement of quantum gate error by interleaved randomized benchmarking. Phys. Rev. Lett. 109, 080505 (2012).

35. Xue, X. et al. CMOS-based cryogenic control of silicon quantum circuits. Nature 593, 205–210 (2021).

36. Xue, X. et al. Computing with spin qubits at the surface code error threshold. arXiv:2107.00628 (2021).

37. Mądzik, M. T. et al. Precision tomography of a three-qubit electron-nuclear quantum processor in silicon. arXiv:2106.03082v2 (2021).

38. Noiri, A. et al. Radio-Frequency-Detected fast charge sensing in undoped silicon quantum dots. Nano Lett. 20, 947–952 (2020).

39. Connors, E. J., Nelson, J. & Nichol, J. M. Rapid high-fidelity spin state readout in Si/SiGe quantum dots via radio-frequency reflectometry. Phys. Rev. Appl. 13, 024019 (2020).

40. Takeda, K. et al. Quantum tomography of an entangled three-spin state in silicon. Nat. Nanotechnol. (2021). doi:10.1038/s41565-021-00925-0

41. Muhonen, J. T. et al. Quantifying the quantum gate fidelity of single-atom spin qubits in silicon by randomized benchmarking. J. Phys. Condens. Matter 27, 154205 (2015).

42. Shulman, M. D. et al. Suppressing qubit dephasing using real-time Hamiltonian estimation. Nat. Commun. 5, 5156 (2014).

43. Dewes, A. et al. Characterization of a two-transmon processor with individual single-shot qubit readout. Phys. Rev. Lett. 108, 057002 (2012).

## Acknowledgements

We thank the Microwave Research Group in Caltech for technical support. This work was supported financially by Core Research for Evolutional Science and Technology (CREST), Japan Science and Technology Agency (JST) (JPMJCR15N2 and JPMJCR1675), MEXT Quantum Leap Flagship Program (MEXT Q-LEAP) grant Nos. JPMXS0118069228, JST Moonshot R&D Grant Number JPMJMS2065, and JSPS KAKENHI grant Nos. 16H02204, 17K14078, 18H01819, 19K14640, and 20H00237. T.N. acknowledges support from JST PRESTO Grant Number JPMJPR2017.

## Author contributions

A.N. and K.T. fabricated the device and performed the measurements. T.N. and T.K. contributed the data acquisition and discussed the results. A.S and G.S developed and supplied the <sup>28</sup>silicon/silicongermanium heterostructure. A.N. wrote the manuscript with inputs from all co-authors. S.T. supervised the project.

## Competing interests

The authors declare that they have no competing interests.

## Additional information

Correspondence and requests for materials should be addressed to A.N. or S.T.

![[assets/figures/references/noiri-2022/2142c0a4f889f14a664755adbbcec2bfe7d512a52ee5bfbe0d2a1c109d45f674.jpg]]

![[assets/figures/references/noiri-2022/2c68314ffc4544e347db0376811bf9e4b4d9f4617990ef74430037b67284d9e0.jpg]]

![[assets/figures/references/noiri-2022/c8e07ba2c496026cd89d90a2f4e634a199a891e6cf18ba29761b5b628280ee22.jpg]]

![[assets/figures/references/noiri-2022/37cdb3a5e8179ae93de1a74dfd13ad1bed64111a88bee8d948de9846e9010b00.jpg]]

![[assets/figures/references/noiri-2022/7e8f5bac487af9727bc0d7fb32c97fa73b01b562af8c1acece83f290d07ce731.jpg]]

![[assets/figures/references/noiri-2022/649acb52df4558f931b85633fb629d14b7a2209bb7de31c2e323261f36c5ff0c.jpg]]  
Extended Data Figure 1. Detuning dependence of EDSR spectra. a, Stability diagram around the (1,1) charge state. $\mathbf { b } ,$ Quantum circuit for producing c. The microwave frequency of the π CROT on $\mathrm { Q } _ { 1 }$ is changed to measure EDSR spectra. $\mathbf { c } ,$ Detuning dependence of EDSR spectra o $\mathrm { \dot { \langle } Q \vert }$ . The detuning axis and its origin are shown as the white arrow and square in a. Three black symbols show the conditions where the dephasing times $T _ { 2 , 1 , \downarrow } ^ { * }$ shown in d-f are measured. d-f, Ramsey fringe of $\mathrm { Q } _ { 1 }$ when $\mathrm { Q } _ { 2 }$ is spin-down measured at the detuning = −0.009 V (d), $0 \mathrm { ~ V ~ } ( \mathbf { e } )$ , and $0 . 0 0 9 \mathrm { ~ V ~ } ( \mathbf { f } )$ . The integration time is $8 7 \ : s$ for all of the traces. The errors in $T _ { 2 , 1 , \downarrow } ^ { * }$ represent the estimated standard errors for the best-fit values. We observe longer (shorter) $T _ { 2 , 1 , \downarrow } ^ { * }$ when the slope of the EDSR frequency against the detuning is smaller (larger), indicating the detuning charge noise limits $T _ { 2 , 1 , \downarrow } ^ { * }$ at the charge-symmetry point where a finite slope exists due to the micromagnet-induced gradient field. A similar tendency is also observed in all the $T _ { 2 , \mathrm { m } , \sigma } ^ { * }$

![[assets/figures/references/noiri-2022/4f58434fc94e10cd94c7a33d1dd741512153ae19f02e4fe5bf756c4c4356f0db.jpg]]

![[assets/figures/references/noiri-2022/d2316082cdd1e2eda218b4430a219410db09a0267d51dbee09641c6956f1c644.jpg]]

![[assets/figures/references/noiri-2022/ec84d9b9b49e2435bb29667bac000938edb223a24c4e18a0caf1093a16c6b7da.jpg]]

![[assets/figures/references/noiri-2022/948690e101a26765f4bf0990adcc1d635d5fffa9bbf334ace3c78763970d0bca.jpg]]

![[assets/figures/references/noiri-2022/7d411526989c16b9a396744081f9d7b3df01aea5908bf953e160490cee3d5d4b.jpg]]

![[assets/figures/references/noiri-2022/1b3502833f3184b4ca0282b80c9d5dbb49d0569beb93119026c4de5206e65711.jpg]]

![[assets/figures/references/noiri-2022/55bf273dfe721c2ab4c54667241029e05cfcb40155cf1955fc18a7efb6585446.jpg]]

![[assets/figures/references/noiri-2022/951475ff1fb5d17c14590eaedb569c8169483b2c12ca02f099aa0cf5caf40200.jpg]]

![[assets/figures/references/noiri-2022/a4227b6738e4d8e077790c441a1a3b69e8e151ff461b5fb7f639be0eecea421a.jpg]]

![[assets/figures/references/noiri-2022/2d510986c0bd4a406235437e85637bcb1bf9b4bdfe3448b5e1efcd296d32830d.jpg]]

![[assets/figures/references/noiri-2022/86fbde2ccd52ff9c6d91b4a49759691ab977f3f8f1fa341eafe1bd9d12495fe4.jpg]]

![[assets/figures/references/noiri-2022/e4f815d313701c4574eabf6a7a0eea1cdc69af319a60e6cc6cf3dc0894719ab2.jpg]]  
Extended Data Figure 2. Qubits characterizations. a, b, Sequences to measure spin relaxation times for $\mathrm { Q } _ { 1 }$ when $\mathbf { Q } _ { 2 }$ is spin-down, $T _ { 1 , 1 , \downarrow }$ (a) and -up, $T _ { 1 , 1 , \uparrow }$ (b). c, Spin-up probability as a function of the wait time. All of the traces do not show a decaying property indicating that spin relaxation is negligible for both qubits. The purple (magenta) curve is obtained using the sequence shown in a (b). The roles of $\mathrm { Q } _ { 1 }$ and $\mathbf { Q } _ { 2 }$ are swapped to measure the data for $\mathbf { Q } _ { 2 }$ . Each trace is offset by 0.45 for clarity. All of the measurements are performed with $J = 1 8 . 8 5$ MHz and $f _ { \mathrm { R } } = 4 . 8 6 7 ~ \ : \mathrm { \ M H z }$ . d, e, Ramsey

sequences to measure dephasing times for $\begin{array} { r l } { \mathrm { Q 1 } , } & { { } T _ { 2 , 1 , \downarrow } ^ { * } } \end{array}$ and $T _ { 2 , 1 , \uparrow \cdot } ^ { * } \mathbf { f } ,$ Ramsey fringes of $\mathrm { Q } _ { 1 }$ and $\mathrm { Q } _ { 2 }$ fitted with Gaussian decaying oscillation functions. The integration time is 87 s for all of the traces. The errors represent the estimated standard errors for the best-fit values. Each trace is offset by 0.6 for clarity. g, h, Echo sequences to measure echo times for $\mathrm { Q } _ { 1 } , \ T _ { 2 , 1 , \downarrow } ^ { \mathrm { e c h o } }$ and $T _ { 2 , 1 , \uparrow } ^ { \mathrm { e c h o } }$ . A phase of the final $\pi / 2$ rotation is changed and the amplitude of the measured oscillation as a function of the phase is plotted in i. i, Echo amplitudes as a function of the evolution time. The exponent of the decay is 1.5, 1.2, 1.8, and 1.6 for $T _ { 2 , 1 , \downarrow } ^ { \mathrm { e c h o } } , \ T _ { 2 , 1 , \uparrow } ^ { \mathrm { e c h o } } , \ T _ { 2 , 2 , \downarrow } ^ { \mathrm { e c h o } }$ , and $T _ { 2 , 2 , \uparrow } ^ { \mathrm { e c h o } }$ . The errors represent the estimated standard errors for the best-fit values. Each trace is offset by 0.2 for clarity. j, $\mathbf { k } ,$ Measurement of Rabi decay time for $\mathrm { Q } _ { 1 } , \ T _ { 2 , 1 , \downarrow } ^ { \mathrm { R a b i } }$ , and $T _ { 2 , 1 , \uparrow } ^ { \mathrm { R a b i } }$ . We measure Rabi oscillations by varying microwave burs time $t _ { \mathrm { M W } }$ from 0.01 µs to 0.41 µs with a separation of 0.01 µs. Rabi oscillations for longer �<sub>MW</sub> (offset by 20, 40, and 80 µs) are also measured and the amplitudes of the oscillations are plotted in l. l, Rabi oscillation amplitude as a function of the microwave burst time with decaying fits. The decay follows $R _ { \mathrm { m } , \sigma } ( t ) = \exp \bigl ( - t / T _ { 2 , \mathrm { m } , \sigma } ^ { \mathrm { R a b i } } \bigr ) W ( t )$ where $\begin{array} { r } { W ( t ) = \left( 1 + t ^ { 2 } / \left( f _ { \mathrm { R } } \big ( T _ { 2 , \mathrm { m } , \sigma } ^ { * } \big ) ^ { 2 } \right) ^ { 2 } \right) ^ { - 1 / 4 } } \end{array}$ represents the effect of dephasing<sup>31</sup>. From the fit, we extract the Rabi decay during a $\pi / 2$ CROT as $D _ { \mathrm { m } , \sigma } =$ $R _ { \mathrm { m } , \sigma } ( t = 1 / ( 4 f _ { \mathrm { R } } ) )$ . The errors represent the estimated standard errors for the best-fit values. Each trace is offset by 0.5 for clarity.

a  
![[assets/figures/references/noiri-2022/993f4d202735c3eb723636df9704b1cdeb556d04e8a9829ebe251c2671d34dc2.jpg]]

b  
![[assets/figures/references/noiri-2022/de05e11a6e6f86d72ceadf1611cf3de596e0fa611e2dbac7d7ddbcf2962c165c.jpg]]

c  
![[assets/figures/references/noiri-2022/1ad80aecaa49acffcb471fe42858564133c9076c0d193794ad28797c5e4b13ee.jpg]]

d  
![[assets/figures/references/noiri-2022/0bf9436c141276f5660ef0530295a19f312728f55a6ae57d903d96df662075fb.jpg]]  
Extended Data Figure 3. Single-tone single-qubit gate performance. a, b, Quantum circuits of single-tone single-qubit Clifford-based randomized benchmarking for $\mathrm { Q } _ { 1 }$ when Q is spin-down (a) and -up (b). $\mathbf { c } ,$ Single-tone single-qubit primitive gate fidelities $F _ { \mathrm { p , m } , \sigma }$ assessed by the Clifford-based randomized benchmarking. The purple (magenta) curve is obtained using the sequence shown in a (b). The roles of $\mathrm { Q } _ { 1 }$ and $\mathbf { Q } _ { 2 }$ are swapped to measure the data for Q<sub>2</sub>. $f _ { \mathrm { R } } = 4 . 8 6 7$ MHz and $J = 1 8 . 8 5$ MHz are used. Each trace is offset by 0.15 for clarity. The uncertainty in the gate fidelities are obtained by a Monte Carlo method<sup>4</sup>. The obtained fidelities are consistent with those obtained in Fig. 2c as $F _ { \mathrm { p , m } } \sim F _ { \mathrm { p , m , \downarrow } } F _ { \mathrm { p , m , \uparrow } }$ . d, Rabi frequency dependence of single-tone single-qubit primitive gate infidelities. Since the control qubit state is fixed in this measurement, the off-resonant rotation does not matter so that $f _ { \mathrm { R } }$ can be varied under a fixed � of 32.0 MHz. Therefore, the impact of $f _ { \mathrm { R } }$ on the single-qubit gate performance is assessed without involving the effect of �. We find that the fidelities depend on $f _ { \mathrm { R } }$ and the best values are obtained at $f _ { \mathrm { R } } = 2 \AA { - } 5$ MHz. The uncertainty in the gate fidelities are obtained by a Monte Carlo method<sup>4</sup>.

![[assets/figures/references/noiri-2022/c1d447a78ba9361ae518ee190555d305f389345b73d30b848d211831fef6d55d.jpg]]

![[assets/figures/references/noiri-2022/309258fd087aa926e926dec31e1d27907a413743766f4e2aca5dd94e4092f51e.jpg]]  
Extended Data Figure 4. Two-qubit gate fidelity extraction. a, Number of Clifford gates � dependence of the projection state probability $\mathsf { P } _ { \uparrow \uparrow } { } ^ { 4 , 1 6 }$ . The ideal final state is spin-up for both qubits. To extract gate fidelity, we need to measure the saturation value of $\mathrm { P } _ { \uparrow \uparrow }$ with a large � (Methods). The uncertainty in the gate fidelity is obtained by a Monte Carlo method<sup>4</sup>. $\mathbf { b } ,$ Gate fidelity extraction from the sequence fidelity $F _ { \mathrm { t } } .$ . In addition to the data in a, we measure another data set where the final ideal state is spin-down for both qubits and then obtain $F _ { \mathrm { t } }$ as shown in blue (Methods). The saturation value of $F _ { \mathrm { t } }$ is almost zero $( F _ { \mathrm { t } } ( 2 7 1 ) = - 0 . 0 0 7 )$ as expected. Gate fidelity extraction using only the data up to $n = 6 2$ is shown in red. The uncertainty in the gate fidelities are obtained by a Monte Carlo method<sup>4</sup>. The trace is offset by 0.1 for clarity. The obtained gate fidelities agree well with that obtained in the standard protocol in a. The uncertainty in the fidelity is larger in a due to the uncertainty of the saturation value of $\mathrm { P } _ { \uparrow \uparrow \cdot } ~ f _ { \mathrm { R } } = 5 . 7 3 2$ MHz and � = 22.2 MHz are used.

b  
C  
![[assets/figures/references/noiri-2022/b55d88d923df8550f08ff4194dc9786c52908a7d8480cb427bc20ebf88f85743.jpg]]

![[assets/figures/references/noiri-2022/9d0779c585e10cdfe7fc3605572d9825f858be8d61028dee1bffbfe90a22efcc.jpg]]

![[assets/figures/references/noiri-2022/71aaeaa73f7cedecbba8292beae6e712e6df7e8d0f010cd6a44d208d81535e36.jpg]]  
Extended Data Figure 5. Estimation of two-qubit primitive gate infidelity by resonance frequency noise. a, Time dependence of $\Delta J / 2 = ( \Delta f _ { 1 , \uparrow } - \Delta f _ { 1 , \downarrow } ) / 2$ (blue), $\Delta f _ { 1 } = ( \Delta f _ { 1 , \uparrow } + \Delta f _ { 1 , \downarrow } ) / 2$ (purple), and $\Delta f _ { 2 } = ( \Delta f _ { 2 , \uparrow } + \Delta f _ { 2 , \downarrow } ) / 2$ (orange) extracted from repeated Ramsey fringe measurements (Methods). � is fixed at 18.85 MHz. Each trace is offset by 0.25 MHz for clarity. Single-qubit frequency noises $( \Delta f _ { 1 }$ and $\Delta f _ { 2 } )$ are larger than that of the exchange noise $\Delta J / 2$ . b, Simulation of a two-qubit primitive gate infidelity by the frequency noises obtained in a (Methods). $\mathbf { c } _ { \mathbf { \Re } }$ Similar to b but the case with inserting an idle time for both qubits to remove the controlled-phase accumulation during the CROT when switching � on and off<sup>19,30</sup>.

![[assets/figures/references/noiri-2022/16b19edaf4c35c804f977cb5b8b749133ceefa9b6dde4746b41ae4bc36beddd8.jpg]]

![[assets/figures/references/noiri-2022/271650268c0abf4598047f85569f954fe4c7132bbabae81f3d1a5c08d25cc6a6.jpg]]  
Extended Data Figure 6. Detuning dependence of the two-qubit gate performance. a, Detuning dependence of �. � at the charge-symmetry point (detuning = 0 mV) is 18.85 MHz. b, Detuning dependence of the two-qubit primitive gate fidelity $F _ { \mathrm { p } }$ (indigo circles) and the Rabi decay during the $\pi / 2$ CROT (colored squares) obtained similarly to Fig. 1f. Around the charge-symmetry point, we reproducibly obtain $F _ { \mathrm { p } }$ higher than 99%. In large positive and negative detuning, $F _ { \mathrm { p } }$ sharply drops mainly due to the fast Rabi decay. The uncertainty in the gate fidelity is obtained by a Monte Carlo method<sup>4</sup>. The errors in the Rabi decay represent the estimated standard errors for the best-fit values.

![[assets/figures/references/noiri-2022/863236d4e3ec3a11d157c2efd351aad47f724b9ef996faf455c8bd845b9ad4bd.jpg]]  
Extended Data Figure 7. Measurement error calibration in state tomography. Typical joint probabilities measured with preparing |↑↑⟩ , |↑<sup>̃</sup>↓⟩ , |↓<sup>̃</sup>↑⟩ , and |↓↓⟩ . At � = 18.85 MHz, $\vert \widetilde { \downarrow \uparrow } \rangle =$ 0.9995|↓↑⟩ + 0.0310|↑↓⟩.

![[assets/figures/references/noiri-2022/715c57d2e255361e2a80ab62ede699fcdbd4d9362929ad5c25c5cf6512cca6a6.jpg]]  
Extended Data Figure 8. Output state of Deutsch–Jozsa algorithm and Grover search algorithm. a-c, Real part of the measured density matrix for the final output states for $f _ { 0 }$ (a), $f _ { 1 }$ (b), and $f _ { 3 }$ (c) in the Deutsch–Jozsa algorithm (Fig. 4a). d-f, Real part of the measured density matrix for the final output states for $f _ { 1 0 }$ (d), $f _ { 0 1 }$ (e), and $f _ { 0 0 }$ (f) in the Grover search algorithm (Fig. 4b). The absolute values of the matrix elements for the imaginary parts are less than 0.055 (a), 0.056 (b), 0.040 (c), 0.111 (d), 0.072 (e), and 0.081 (f). The uncertainty in the state fidelities � are obtained by a Monte Carlo method<sup>16,18,40</sup>.
