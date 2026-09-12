---
title: Universal control of a six-qubit quantum processor in silicon
description: 硅六比特处理器的通用控制：QubitPhat 器件架构、随机化基准与完整两比特门集，代表当前自旋比特集成度前沿之一。
aliases:
 - philips-2022
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">硅六比特处理器的通用控制：QubitPhat 器件架构、随机化基准与完整两比特门集，代表当前自旋比特集成度前沿之一。</div>

> [!info] 文献信息
> S. G. J. Philips *et al.*, “Universal control of a six-qubit quantum processor in silicon”, Nature **609**, 919 (2022).
> [arXiv:2202.09252](https://arxiv.org/abs/2202.09252) · [DOI:10.1038/s41586-022-05117-x](https://doi.org/10.1038/s41586-022-05117-x)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Stephan G.J. Philips∗<sup>1</sup>, Mateusz T. Mądzik<sup>∗1</sup>, Sergey V. Amitonov<sup>1</sup>, Sander L. de Snoo<sup>1</sup>, Maximilian Russ<sup>1</sup>, Nima Kalhor<sup>1</sup>, Christian Volk<sup>1</sup>, William I.L. Lawrie<sup>1</sup>, Delphine Brousse<sup>2</sup>, Larysa Tryputen<sup>2</sup>, Brian Paquelet Wuetz<sup>1</sup>, Amir Sammak<sup>2</sup>, Menno Veldhorst<sup>1</sup>, Giordano Scappucci<sup>1</sup>, and Lieven M.K. Vandersypen<sup>†</sup> <sup>1</sup>

<sup>1</sup>QuTech and the Kavli Institute of Nanoscience, Delft University of Technology, 2600 GA Delft, The Netherlands.

<sup>2</sup>QuTech and Netherlands Organization for Applied Scientific Research (TNO), Delft, The Netherlands.

February 21, 2022

Future quantum computers capable of solving relevant problems will require a large number of qubits that can be operated reliably. However, the requirements of having a large qubit count and operating with high-fidelity are typically conflicting. Spins in semiconductor quantum dots show long-term promise but demonstrations so far use between one and four qubits and typically optimize the fidelity of either single- or two-qubit operations, or initialization and readout. Here we increase the number of qubits and simultaneously achieve respectable fidelities for universal operation, state preparation and measurement. We design, fabricate and operate a six-qubit processor with a focus on careful Hamiltonian engineering, on a high level of abstraction to program the quantum circuits and on eficient background calibration, all of which are essential to achieve high fidelities on this extended system. State preparation combines. initialization by measurement and real-time feedback with quantum-non-demolition measurements. These advances will allow for testing of increasingly meaningful quantum protocols and constitute a major stepping stone towards large-scale quantum computers.

On the path to practical large-scale quantum computation, electron spin qubits in semiconductor quantum dots [1] show promise due to their inherent potential for scaling[ through their small size [2, 3], long-lived coherence [4] and compatibility with advanced semiconductor manufacturing techniques [5]. Nevertheless, spin qubits currently lag behind in scale when compared to superconducting, trapped ions and photonic platforms, which have demonstrated control of several dozen qubits [6, 7, 8]. By comparison, using semiconductor spin qubits, control of up to four qubits was. achieved [9] and entanglement of up to three qubits was quantified [10, 11, 12].

Furthermore, the experience with other qubit platforms shows that in scaling up, maintaining the quality of the control requires significant eforts, for instance to deal with the denser motional spectrum in trapped ions [13], to avert crosstalk in superconducting circuits [14] or to avoid increased losses in photonic circuits [15]. For small semiconductor spin qubit systems, state-of-the-art single-qubit gate fidelities exceed 99.9% [16, 17, 18] and two-qubit gates well above 99% fidelity have been demonstrated recently [19, 20, 21, 11]. Most quantum dot based demonstrations sufer from rather low initialization or readout fidelities, with typical visibilities of no more than 60-75%, with one recent exception [21]. Conversely, high-fidelity spin readout has been claimed based on an analysis of the readout error mechanisms, but these claims have not been validated in combination with high-fidelity qubit control [22, 23]. While high-fidelity initialization, readout, single-qubit gates and two-qubit gates have thus been demonstrated individually in small systems, almost invariably one or more of these parameters are significantly comprised while optimizing others. A major challenge and important direction for the field is therefore to achieve high fidelities for all components while at the same time enlarging the qubit count.

Here we study a system of six spin qubits in a linear quantum dot array and test what performance can be achieved using known methods such as multi-layer gate patterns for independent control of the two-qubit exchange interaction [24, 25, 26] and micromagnet gradients for electricdipole spin resonance and selective qubit addressing [27]. Furthermore, we introduce several novel techniques for semiconductor qubits that, collectively, are critical to improve on the results and facilitate scalability, such as initialization by measurement using real-time feedback [28], qubit initialization and measurement without reservoir access, and eficient calibration routines. Initialization and readout circuits span over the full six-qubit array. We characterize the quality of the control by preparing maximally entangled states of two and three spins across the array.

The six-qubit array is defined electrostatically in the <sup>28</sup>Si quantum well of a <sup>28</sup>Si/SiGe heterostructure, between two sensing quantum dots, as seen in Figure 1a (see Methods).

![[assets/figures/references/philips-2022/8bf6b8987134ef8a9cdcabec0e7ce3965e96497e44e43b3a68be0252a0636117.jpg]]  
Fig. 1 | Device initialization, measurement and calibration a, A false-colored scanning electron microscope image of a device similar to the one used in the experiments. Each color represents a diferent metallization layer. Plunger (blue) and barrier (green) gates are used to define quantum dots in the channel between the screening gates (red). Two cobalt micromagnets (yellow) are placed on top of the gate stack. b-c, Buildings blocks used for readout and initialization in this experiment. Panel b shows the circuit used to perform a single QND measurement of qubit 3, panel c shows the circuit used for spin measurement and initialization using a parity measurement. The double line in the diagram indicates that X<sub>180</sub> rotation is conditional on the measurement outcome. d, shows an example of a conditional rotation used to initialize the qubits. The sequence shown is applied repeatedly with short time intervals, with the final state of one cycle being the initial state of the next (up to spin relaxation). (1) shows the even parity probability of the first measurement, (2) shows the even parity probability after the bit flip conditional on the first measurement outcome. e, Schematic showing the total scheme used for the initialization and readout of all six qubits. f, Calibration graph used in the experiments. The numbers on the right show the number of parameters that are calibrated in each step

The multi-layer gate pattern allows for excellent control of the charge occupation of each quantum dot, and of the tunnel couplings between neighbouring quantum dots. These parameters are controlled independently through linear combinations of gate voltages, known as virtual gates [29]. The inter-dot pitch is chosen to be 90 nm, which for this 30 nm deep quantum well yields easy access to the regime with one electron in each dot, for short indicated as the (1,1,1,1,1,1) charge occupation. Low valley splittings on Si/SiGe devices have hindered progress in the past [30], but in this device all valley splittings are in the range of 100-300 µeV (See Supplementary materials).

In designing the qubit measurement scheme, we focused on achieving short measurement cycles in combination with highfidelity readout, as this accelerates testing of all other aspects of the experiment. For measuring the outer qubit pairs, we use Pauli-Spin blockade (PSB) to probe the parity of the two spins (rather than diferentiating between singlet and triplet states), exploiting the fact that the $\mathrm { { T _ { 0 } } }$ triplet relaxes to the singlet well before the end of the 10 µs readout window. We tune the outer dot pairs of the array to the (3,1) electron occupation, where the readout window is larger than in the (1,1) regime (see Extended Data 1). Since the sensing dots are less sensitive to the charge transition between the center dots, the middle qubits are measured by quantum-non-demolition (QND) measurements that map the state of qubit 3(4) on qubit 2(5) via a conditional rotation (CROT) (Fig. 1b) [16, 31]. In this way, for every iteration of the experiment, 4 bits of information are retrieved which depend on the state of all 6 physical qubits. Iterative operation permits full readout of the 6-qubit system.

Qubit initialization is based on measurements of the spin state across the array followed by real-time feedback to place all qubits in the target initial state. This scheme has the benefit of not relying on slow thermalization and that no access to electron reservoirs is needed to bring in fresh electrons, which is helpful for scaling to larger arrays. In fact, we had experiment runs of more than one month in which the electrons stayed within the array continuously. For qubits 3 and 4, real-time feedback simply consists of flipping the qubit if the measurement returned . Initialization of qubits 1-2 (or 5-6) using parity measurements and real-time feedback is illustrated in Figure 1d. First, assuming that the qubits start from a random state, we perform a parity measurement that will cause the state to either collapse to an even ( , ) or odd ( / ) parity (see Methods). After the measurement, a π pulse is applied to qubit 1 in case of even parity, which converts the state to odd parity (feedback latency 660 ns). Subsequently, we perform a second measurement, which converts either of the odd parity states to . Specifically, when pulsing towards the readout operating point, both and  relax into the singlet state ((4,0) charge occupation). When pulsing adiabatically from the (4,0) back to the (3,1) charge configuration, the singlet is mapped onto the state. If the qubit initialization is successful, the second measurement should return an odd parity (typically 95% success rate). To further boost the initialization fidelity we use the outcome of the second measurement to post-select successful experiment runs (see Extended Data Fig. 1d). Figure 1d shows initialization by measurement of the first two qubits. The first readout outcome (blue) shows Rabi oscillations controlled by a microwave burst of variable duration applied near the end of the previous cycle (see methods for more details).

c  
![[assets/figures/references/philips-2022/7300a1f4f36c4ad1079d314f6e06d791465b7f2dff5ba18c71c35c36cb7c1ac3.jpg]]

b  
![[assets/figures/references/philips-2022/2414c5fd07f3f1fbcc7a2cb82fea5d49b6abd1ae81a9de2db4be1229d6c5760d.jpg]]

![[assets/figures/references/philips-2022/0e15e016b1cbd48ab6381082e8b12acf9c85221412c029fed596eb1f636c9784.jpg]]

d  
![[assets/figures/references/philips-2022/9af96df1e3dcf022ae4c56bd7a9b2a73bc0ae7416d83ac2c6e552b395293f24f.jpg]]

e

<table><tr><td>Qubit</td><td> $T_{2}^{*}(us)$ </td><td> $T_{2}^{h}(us)$ </td><td>Vis(%)</td></tr><tr><td>1</td><td> $3.0 \pm 0.2$ </td><td> $14.0 \pm 3.2$ </td><td>95.5</td></tr><tr><td>2</td><td> $2.5 \pm 0.1$ </td><td> $21.1 \pm 6.7$ </td><td>95.5</td></tr><tr><td>3</td><td> $3.7 \pm 0.3$ </td><td> $40.1 \pm 4.5$ </td><td>98</td></tr><tr><td>4</td><td> $3.7 \pm 0.3$ </td><td> $37.2 \pm 3.8$ </td><td>97</td></tr><tr><td>5</td><td> $5.9 \pm 0.4$ </td><td> $44.7 \pm 8.2$ </td><td>93.5</td></tr><tr><td>6</td><td> $5.1 \pm 0.4$ </td><td> $26.7 \pm 4.8$ </td><td>96.5</td></tr></table>

Fig. 2 | Experiment overview a, Rabi oscillations for every qubit, taken sequentially. The spin fraction refers to the spin-up fraction for qubits 2-5 and to the spin-down fraction for qubits 1 and 6. The drive amplitudes were adjusted in order to obtain uniform Rabi frequencies of 5 MHz. b, Qubit frequency for each the six qubits. c, Rabi frequency of each qubit as a function of the applied microwave power. d, Randomized benchmarking results for each qubit, using a 5 MHz Rabi frequency. The reported fidelity is the average single-qubit gate fidelity. The error bars (2σ) are calculated using the covariance matrix of the fit. e, Table showing the dephasing time T∗, Hahn echo decay time and visibilities for each qubit.

The second readout outcome (green) shows the state after the real-time classical feedback step. The oscillation has largely vanished, indicating successful initialization by measurement and feedback.

The sequence to initialize and measure all qubits is shown in Figure 1e (see Extended Data 2 for the unfolded quantum circuit). We sequentially initialize qubit pair 5-6, then qubit 4, then qubits 1-2, and finally qubit 3, using the steps described above (for compactness, the steps appear as simultaneous in the diagram). In order to further enhance the measurement and initialization fidelities, we repeat the QND measurement three times, alternating the order of qubit 3 and 4 measurements. We post-select runs with three identical QND readout outcomes in both the initialization and measurement steps (except for Fig. 5 below, where readout simply uses majority voting). After performing the full initialization procedure depicted in Fig. 1e, the six qubit array is initialized in the state . In all measurements below, we initialize either two, three or all six qubits, depending on the requirement of the specific quantum circuit we intend to run. We leave the unused qubits randomly initialized, as the visibilities decrease when initializing all 6 qubits within a single shot sequence (see Extended Data 3). When operating on individual qubits, the initialization and measurement procedures yield visibilities of 93.5-98% (see Fig. 2e). To put these numbers in perspective, if the readout error for both 0 and 1 were 1% alongside an initialization error of 1%, the visibility would be 96%.

We manipulate the qubits via electric-dipole spin resonance (EDSR) [32]. A micromagnet located above the gate-stack is designed to provide both qubit addressability and a driving field gradient (see Fig. 1a and Supplementary Data). We can address each qubit individually and drive coherent Rabi oscillations as depicted in figure 2. We observe no visible damping in the first five periods. The data in figure 2c shows that the qubit frequencies are not spaced linearly, deviating from our prediction based on numerical simulations of the magnetic field gradients (Supplementary Figure 1). However, the smallest qubit frequency separation of 20 MHz is suficient for selective qubit addressing with our operating speeds varying between 2 MHz and 5 MHz. The Rabi frequency is linear in the driving amplitude over the typical range of microwave power used in the experiment (Fig. 2c). We operate single-qubit gates sequentially, to ensure we stay in this linear regime and to keep the calibration simple. We characterize the single-qubit properties of each qubit separately. Figure 2d shows results of randomized benchmarking experiments. All average single-qubit gate fidelities are between $9 9 . 7 7 \% \pm$ 0.04 and $9 9 . 9 6 \% \pm 0 . 0 1$ , which demonstrates that even within this extended qubit array, we retain high-fidelity single-qubit control. The coherence times of each qubit are tabulated in figure 2e. We expect spin coherence to be limited by charge noise coupling in by the micromagnet [33].

![[assets/figures/references/philips-2022/f05c09546d2fa3154138d97f39fab02b1cad7181fa388d12df68b2848b7f9720.jpg]]

a  
c  
![[assets/figures/references/philips-2022/b70af275ee09d523b0f7cc46175e7e31c31c6012850d7aa915970c6705cf4b6b.jpg]]

![[assets/figures/references/philips-2022/b2925751c6252f9f0e02a3bc82b28fc1b1d77a48753bb6756ae1cbb9b05aa9b2.jpg]]  
e

![[assets/figures/references/philips-2022/ea835d24b41e491fb2bf38ec2335dae06c87910e59abb970fa4026e890919d20.jpg]]  
d

![[assets/figures/references/philips-2022/76e81c9f13c73b5a8528c3b046c7f7d309661e53912ced8833d8f41caee27d5d.jpg]]

![[assets/figures/references/philips-2022/45f438227bad7d28c362c7dcf35acfddf5eb1f03445b03d2cbee526d8ce64924.jpg]]

g  
![[assets/figures/references/philips-2022/55e76438471f96aec41f3b34ecd95fc396c98385dea4741467de945d70f2afce.jpg]]

![[assets/figures/references/philips-2022/4e4bff9b741de79c853fceafedc3dbc00b6285de28f9e8bc43af36c650ee0aba.jpg]]

![[assets/figures/references/philips-2022/162aaf9a718269099bca71de498de5c781f6481b727d6e4eded283c7956d98d3.jpg]]

![[assets/figures/references/philips-2022/453e19dbe2deb34a726b014fcd5b05bf0e66bfa8aa21bc96ae3c89f821b23117.jpg]]  
Fig. 3 | Two-qubit gate characterization a, Quantum circuit used to measure CPhase oscillations between a pair of qubits. b-f, Measured spin probabilities as a function of the total evolution time 2t for neighbouring qubit pairs for diferent virtual barrier gate voltages (with 0 and 1 corresponding to the exchange switched of and at its maximum value). g, Maximum exchange coupling measured for each qubit pair, and the corresponding residual exchange coupling for the other pairs, achievable within the AWG pulsing range without DC retuning. Bottom row: $J _ { \mathrm { i j } }$ with all exchange couplings switched of (see Supplementary Data for error bars). h, Exchange coupling versus virtual barrier gate voltage for all qubit pairs. i, Schematic showing the energy levels in the absence (left) and presence (middle, right) of the efective Ising ZZ interaction under exchange (see main text). Due to the ZZ coupling term, the antiparallel spin states are lowered in energy, and pick up an additional phase as a function of time, resulting in a CPhase evolution. The shifted energy levels also allow for conditional microwave-driven rotations (CROT), which we use during initialization and readout. j, Pulse shape of the exchange amplitude throughout a gate voltage pulse used for the CZ gate, and the corresponding pulse shape converted to gate voltage.

Two-qubit gates are implemented by pulsing the (virtual) barrier gate between adjacent dots while staying at the symmetry point. Pulsing the barrier gate leads to a ZZ interaction (throughout, X, Y and Z stand for the Pauli operators, I for the identity, and ZZ is shorthand for the tensor product of two Pauli Z operators, etc), given that the efect of the flip-flop terms of the spin exchange interaction is suppressed due to the diferences in the qubit splittings [36]. The quantum circuit in Fig. 3a measures the time evolution under the ZZ component of the Hamiltonian only, as the single-qubit π pulses in between the two exchange pulses decouple any $\mathrm { I Z / Z I }$ terms [37]. The measured signal oscillates at a frequency $J / 2$ (Fig. 3b-f) as a function of the barrier gate pulse duration, corresponding to Controlled Phase (CPhase) evolution. When pulsing only the barrier gate between the target qubit pair, the desired on/of ratio of $J _ { \mathrm { i j } } \ ( { > } 1 0 0 )$ could not be achieved. We solve this, without sacrificing operation at the symmetry point, by using a linear combination of the virtual barrier gates (vB1-vB6). Specifically, the barrier gates around the targeted quantum dot pair are pulsed negatively to push the corresponding electrons closer together and thereby enhance the exchange interaction (see Extended Data Fig. 1). The exponential dependence of $J _ { \mathrm { i j } }$ on virtual barrier gates is seen in Fig. 3h. In Fig. 3g we investigate the residual exchange of idle qubit pairs, while one qubit pair is pulsed to its maximal exchange value within the operating range. The results show minimal residual exchange amplitudes in the ofstate between the other pairs.

Through suitable timing, we use the CPhase evolution to implement a Controlled-Z (CZ) gate. Fig. 3j shows the pulse shape that is used to ensure a high degree of adiabaticity throughout the CZ gate [19]. We use a Tukey window as waveform, with a ramp time of $\begin{array} { r } { \tau _ { \mathrm { r a m p } } = \frac { 3 } { \sqrt { \delta B ^ { 2 } + J _ { \mathrm { m a x } } ^ { 2 } } } } \end{array}$ [38]. This pulse shape is defined in units of energy and we convert it into barrier voltages using the measured voltage to exchange energy relation [19].

![[assets/figures/references/philips-2022/dee97ec9ff763764e355223f994d63f13229e252a44d879f27124774dac2d2a1.jpg]]

![[assets/figures/references/philips-2022/1a6a6ab119178a3f79a365a1945bb640a930f8fd48ca8c51175d0a03dd27ce1d.jpg]]

![[assets/figures/references/philips-2022/65ab508004aca9abd9d5dc60a31d5cf9d27b758ad5ba9b6b51645dd8a33c1228.jpg]]

![[assets/figures/references/philips-2022/2a33fcf048b382e71c5c1f4e6caf68a09d88b0e608b2de67782982a53343262a.jpg]]

![[assets/figures/references/philips-2022/8324bcddefff96dd636a390fb74c599de5471fb578ab5f5b68ccf05c37939a16.jpg]]  
Fig. 4 | Bell state tomography a-e, Measured two-qubit density matrices for each pair of neighboring qubits, after removal of state preparation and measurement (SPAM) errors (see Supplementary Data for the uncorrected density matrices). The target Bell states are indicated and outlined with the wireframes. f, Colorwheel with phase information for the density matrices presented in panels a-e. g, Quantum circuits used for converting parity readout (ZZ) into efective single-qubit readout (IZ and ZI). h, State fidelities of the measured density matrices with respect to the target Bell states and the concurrences for the measured density matrices. Error bars (2σ) are derived from Monte-Carlo bootstrap resampling [34, 35, 10]. State fidelities without readout error removal, Q12: 88.2%, Q23: 83.8%, Q34: 78.0%, Q45: 91.3%, Q56: 91.3%.

One of the challenges when operating larger quantum processors is to track and compensate any dynamical changes in qubit parameters to ensure high-fidelity operation, initialization and readout. Another challenge is to keep track of and compensate for cross-talk efects imparted by both single- and two-qubit gates on the phase evolution of each qubit. We per form automated calibrations, as shown in Fig. 1f, and correct 108 parameters in total. The detailed description of each calibration routine is included in the methods section and Ex tended Data Fig. 4. Twice a week, we run the full calibration scheme, which takes about one hour. Every morning, we run the calibration scheme leaving out the phase corrections for single-qubit operations and the dependence of $J _ { \mathrm { i j } }$ on the virtual barrier gates $\mathrm { v B _ { i j } }$ . Sometimes, specific calibrations, especially qubit frequencies and readout coordinates, are rerun throughout the day, as needed. Supplementary Data figure 3 plots the evolution of the calibrated values for a number of qubit parameters over the course of one month.

With single- and two-qubit control established across the six-qubit array, we proceed to create and quantify pairwise entanglement across the quantum dot array as a measure of the quality of the qubit control (Fig. 4a-e). These experiments benefited from a high level of abstraction in the measurement software, allowing us to flexibly program a variety of quantum circuits acting on any of the qubits, drawing on the ta ble of 108 calibration parameters that is kept updated in the background and on the detailed waveforms to achieve highfidelity gates. The parity readout of the outer qubits yields a native ZZ measurement operator. We measure single-qubit expectation values by mapping the ZZ operator to a ZI/IZ operator, as shown in figure 4g. This allows full reconstruction of the density matrix. The state fidelity is calculated using $F = \left. \psi | \rho | \psi \right.$ , where ψ is the target state and ρ is the measured density matrix. The target states are maximally entangled Bell states. The obtained density matrices measured across the six-dot array have a state fidelity ranging from 88% to 96%, which is considerably higher than the Bell state fidelities of 78% to 89% reported on two-qubit quantum dot devices just a few years ago [37, 35, 39].

As a final characterization of the qubit control across the array, we prepare Greenberger–Horne–Zeilinger (GHZ) states, which are the most delicate entangled states of three qubits [40, 41]. Fig. 5a shows the quantum circuit we used to prepare the GHZ states. The full circuit, including initialization and measurement, contains up to 14 CROT operations, 2 CZ operations, 42 parity measurements, 16 single-qubit rotations conditional on real-time feedback, and 5 single-qubit $\mathrm { X _ { 9 0 } }$ rotations (see Extended Data Fig. 2). The measurement operators for quantum state tomography are generated in a similar manner as for the Bell states. In order to reconstruct three-qubit density matrices, we perform measurements in 26 (for qubits 234 and 345) or 44 (for qubit 123 and 456) diferent basis and repeat each set 2000 times to collect statistics. A full dataset consisting of 52000 (88000) single-shot repetitions takes about 5 minutes to acquire, thanks to the eficient uploading of waveforms to the waveform generator (see Methods) and the short single-shot cycle times. Figs. 5b-e show the measured density matrices for qubits 123, 234, 345 and 456. The obtained state fidelities range from 71% to 84% (see Methods for a brief discussion of dephasing efects from heating). For comparison, the record GHZ state fidelity re ported recently for a triple quantum dot spin qubit system is 88% [10]. The same data set from [10] analyzed without readout correction yields 45.8% fidelity, while our results with no readout error removal range from 52.8% to 67.2% (see Supplementary Data). From the same data sets, we calculate entanglement witnesses, which clearly demonstrate three-qubit entanglement (see Supplementary Data).

![[assets/figures/references/philips-2022/11cdbc968ce37333e6adc37e3eb34028fb4f7425eb8973846ce0d94535f8ac97.jpg]]

![[assets/figures/references/philips-2022/41da345f5b2c0a4120d78cd0afb23cc2f8c335999aaee4b33351de22ffecb15f.jpg]]

![[assets/figures/references/philips-2022/4ec157dbfc7b375c575a53f9c2d726248d707cfdbeef7aaf8b593ffee5416951.jpg]]

![[assets/figures/references/philips-2022/be8173c333052a18ebc1c1f92967fd4c35e97ecc518b1dcb1d98a5c9f072ffb1.jpg]]

![[assets/figures/references/philips-2022/64eb58a84b451f52260d92cad6552e157cc80195f3cec24e4b41ed9bcb90dd0f.jpg]]  
Qubits Fidelity (%)Φ (rad) Witness 1-2-3 2.41 $7 6 . 8 \pm 2 . 2$ $- 0 . 3 2 7 \pm 0 . 0 2 2$ 2-3-4 -0.32 $7 1 . 4 \pm 3 . 2$ $- 0 . 2 9 7 \pm 0 . 0 3 8$ 3-4-5 1.67 $7 2 . 2 \pm 4 . 0$ $- 0 . 2 9 1 \pm 0 . 0 3 6$ 4-5-6 2.68 $8 3 . 6 \pm 2 . 2$ $- 0 . 3 8 0 \pm 0 . 0 2 4$  
Fig. 5 | Three-qubit Greenberger–Horne–Zeilinger state tomography a, Circuit diagram used to prepare the GHZ states. The $\mathrm { U } _ { \mathrm { m a p } }$ operation is the unitary that is executed in case we measure the IZ or ZI projections on qubits 1/2 and $5 / 6 ,$ , similar to the Bell state experiments. b-e, Density matrices of the prepared GHZ states using qubit 123, 234, 345 and 456, obtained using quantum state tomography, after removal of SPAM errors (see Supplementary Data for the uncorrected density matrices). The black wireframes correspond to the ideal GHZ state. f, Colorwheel with phase information for the density matrices presented in panels d-e. g, Table showing the state fidelities and entanglement witness values for the diferent qubit sets. We choose φ in $| \psi _ { \mathrm { G H Z } } \rangle = ( | 0 0 0 \rangle + e ^ { i \phi } | 1 1 \bar { 1 } \rangle ) \sqrt { 2 }$ , with respect to the highest state fidelity. State fidelities without SPAM removal, Q123: 64.3%, Q234: 52.8%, Q345: 52.7%, Q456: 67.2%

The demonstration of universal control of six qubits in a <sup>28</sup>Si/SiGe quantum dot array advances the field in multiple ways. While scaling to a record number of qubits for a quantum dot system, we achieve Rabi oscillations for each qubit with visibilities of 93.5-98%, implying high readout and initialization fidelities. Initialization uses a novel scheme relying on qubit measurement and real-time feedback. Readout relies on Pauli spin blockade and quantum-non-demolition measurements. This combination of initialization and readout allows to the device to be operated while retaining the six electrons in the linear quantum dot array, alleviating the need for access to electron reservoirs. All single-qubit gate fidelities are around 99.9% and the high quality of the two-qubit gates can be inferred from the 89-95% fidelity Bell states prepared across the array. The development of a modular software stack, eficient calibration routines and reliable device fabrication have been essential for this experiment. Future work must focus on understanding and mitigating heating efects leading to frequency shifts and reduced dephasing times, as we find this to be the limiting factor in executing complicated quantum circuits on many qubits. The use of simultaneous single-qubit rotations and simultaneous two-qubit CZ gates will keep pulse sequences more compact. This will require accounting for cross-talk efects, which we anticipate will be easiest for the two-qubit gates. We estimate that the concepts used here for control, initialization and readout can be used without substantial modification in arrays that are twice as long, as well as in small two-dimensional arrays. Scaling further will require additional elements such as cross-bar addressing or on-chip quantum links [42].

## Methods

## Device fabrication

Devices are fabricated on an undoped <sup>28</sup>Si/SiGe heterostructure featuring an 8 nm strained <sup>28</sup>Si quantum well, with a residual <sup>29</sup>Si concentration of 0.08%, grown on a strainrelaxed $\mathrm { S i _ { 0 . 7 } G e _ { 0 . 3 } }$ bufer layer. The quantum well is separated from the surface by a 30 nm thick $\mathrm { S i _ { 0 . 7 } G e _ { 0 . 3 } }$ spacer and a sacrificial 1 nm Si capping layer. The gate stack consists of 3 layers of Ti:Pd metallic gates (3:17, 3:27, 3:27 nm) isolated from each other by 5 nm $\mathrm { { A l } _ { 2 } \mathrm { { O } _ { 3 } } }$ dielectrics, deposited using atomic layer deposition. A ferromagnetic Ti:Co (5:200 nm) layer on top of the gate stack creates a local magnetic field gradient for qubit addressing and manipulation. Further details of device fabrication methods can be found at [26].

## Microwave crosstalk and synchronization condition

In Fig. 2, the single-qubit gates are chosen to be operated at a 5 MHz Rabi frequency and all single-qubit randomized benchmarking (RB) results are taken at this frequency as well. When operating all qubits within the same sequence, we were unable to operate at a 5 MHz Rabi frequency as qubits 2(3) and 5(4) are too close to each other in frequency. We used the synchronization condition [43, 44] to choose Rabi frequencies for the single-qubit gates for which the qubit that sufers cross-talk does not undergo a net rotation while the target qubit is rotated by 90 degrees or multiples thereof (see Extended Data figure 5). The Rabi frequencies for the state tomography experiments are as follows (qubit 1-6): 4.6 MHz, 1.9 MHz, 4.2 MHz, 3.6 MHz, 2.4 MHz and 5 MHz.

## Automated calibration routines

Calibrations are a crucial part in operating a multi-qubit device. Figure 1d list the necessary parameters that need to be corrected periodically and the Extended Data Fig. 4 shows an example calibration for each parameter type. In each panel, the value extracted in the corresponding calibration is indicated.

We perform the full calibration routine twice a week at most, and throughout the day we execute parts of the calibration protocol, when we suspect a parameter has drifted $\left( \mathrm { e . g . } \right.$ . when we observe a reduced visibility). For each calibrated parameter, an automated script detects the optimal value and updates the record in the variable manager. In our framework, the operator chooses to accept this value or to re-run the calibration.

Sensing dot – (5 s) – The calibrations routine starts by calibrating the sensing dots (Extended Data Fig. 4a) to the most sensitive operating point for parity mode PSB readout. We scan the (virtual) plunger voltage of the sensing dot for two diferent charge configurations of the corresponding double dot, corresponding to the singlet and triplet states. One configuration is well in the (3,1) region, the other well in the (4,0) region, in order to be insensitive to small drifts in the gate voltages. The calibration returns the plunger voltage for which the largest diference is obtained in the sensing dot signal between these two cases (Extended Data Fig. 4a). From this diference, we also set the threshold in the demodulated

IQ signal of the RF-readout, to allow singlet/triplet diferentiation (the IQ signal is converted to a scalar by adjusting the phase of the signal). The threshold is chosen halfway between the signals for the two charge configuration. During qubit manipulation, the sensing dot is kept in Coulomb blockade. It is only pulsed to the readout configuration when executing the readout.

Readout point – (35 s) – The parity mode PSB readout is calibrated by finding the optimal voltage of the plunger gates near the anticrossing for the readout. The readout point is only calibrated along one axis (vP1 or vP5), for simplicity, and since the performance of the PSB readout is similar at any location along the anticrossing. In the calibration shown in Extended Data Fig. 4b, we initialize either a singlet ( ) or a triplet ( , using a single-qubit gate) state and sweep the plunger gate to find to optimal readout point.

Q1 $/ 2 / 5 / 6$ resonance frequency (rough) – (17 s) – We perform a course scan of the resonance frequencies of qubits 1, 2, 5 and 6 (Extended Data Fig. 4c) around the previously saved values. We fit the Rabi formula

$$
P _ {s} (t) = \frac {\Omega^ {2}}{\Omega^ {2} + \Delta^ {2}} \sin^ {2} \left(\frac {\sqrt {\Omega^ {2} + \Delta^ {2}}}{2} t\right)\tag{1}
$$

to the experimental data and extract the resonance frequency.

## QND readout: CROT Q32/Q45 $f _ { r e s }$ – (14 s)

Subsequently, we calibrate the QND readout for qubits 3 and 4. To perform QND readout, we need to calibrate a CROT gate. We choose to use a controlled rotation two-qubit gate, as it requires little calibration (compared to the CPhase) given that we can ignore phase errors during readout.

We set the exchange to 10-20 MHz via barrier gate pulses and scan the CROT driving frequency (Extended Data Fig. 4d) around the previously saved values. Again, we fit the Rabi formula

$$
P _ {s} (t) = \frac {\Omega^ {2}}{\Omega^ {2} + \Delta^ {2}} \sin^ {2} \left(\frac {\sqrt {\Omega^ {2} + \Delta^ {2}}}{2} t\right)\tag{2}
$$

to extract the optimal resonance frequency.

## QND readout: CROT Q32/Q45 pulse width – (25 s)

– Next, we tune the optimal microwave burst duration for the CROT gate, by driving Rabi oscillations (Extended Data Fig. 4e) in the presence of the exchange coupling. We fit the decaying sinusoid

$$
P _ {s} (t) = \frac {A}{2} \sin (\omega t - \phi_ {0}) e ^ {- \frac {t}{\tau}} + B\tag{3}
$$

and extract the pulse width the for CROT gate.

Q3/4 resonance frequency $\mathbf { ( r o u g h ) \_ } \mathbf { ( 2 8 \ s ) } \_$ With QND readout established, we scan the driving frequency for qubit 3 and 4 in a similar manner as we did for $Q 1 / 2 / 5 / 6$ (Extended Data Fig 4f). The calibration scripts will automatically use QND readout for Q3 and Q4 calibration, in place of PSB readout for Q1, Q2, Q5, Q6.

Q1-6 resonance frequency and amplitude (fine) – (Q1, Q2, Q5, Q6 frequency 22 s, amplitude 23 s; Q3, Q4 frequency 32 s, amplitude 34 s) – We calibrate more accurately the qubit frequency and driving amplitude using an error amplification sequence (Extended Data Fig. 4g-h), where we execute an $\mathrm { { X _ { 9 0 } } }$ gate 18 times and sweep either the frequency or the amplitude of the microwave burst. We fit the data using the Rabi formula once again

$$
P _ {s} (t) = \frac {\Omega^ {2}}{\Omega^ {2} + \Delta^ {2}} \sin^ {2} \left(\frac {\sqrt {\Omega^ {2} + \Delta^ {2}}}{2} t\right)\tag{4}
$$

to extract the resonance frequency. The amplitude of the microwave burst is controlled via the $\mathrm { I / Q }$ input channels of the vector source we used. To calibrate the amplitude for an X<sub>90</sub> rotation, we vary the amplitude applied to the $\mathrm { I / Q }$ input and fit the result to

$$
P _ {s} (x) = \alpha e ^ {- \frac {(x - \mu) ^ {2}}{2 \sigma^ {2}}}.\tag{5}
$$

This functional form is not strictly correct but it does find the optimal amplitude for an $\mathrm { X _ { 9 0 } }$ rotation. We suspect that the longer amplification sequences gave better results, as they more closely resemble the sequence lengths used for randomized benchmarking (including some ’heating efects’).

In these calibrations, we only calibrate the $\mathrm { X _ { 9 0 } }$ gate. The $\mathrm { Y } _ { 9 0 }$ gate is implemented similarly to the $\mathrm { X _ { 9 0 } } .$ but phase shifted. Z gates are performed in software by shifting the reference frame. $\mathrm { X _ { 1 8 0 } }$ and $\mathrm { Y } _ { 1 8 0 }$ rotations are performed by applying two 90 degree rotations. We do not simultaneously drive two or more qubits.

Q1-6 $\mathbf { X } _ { 9 0 }$ phase crosstalk – (Q1, Q2, Q5, Q6  27 s; Q3, Q4 45 s) – Any single-qubit gate causes the Larmor frequency of the other qubits to shift slightly due to the applied microwave drive. We compensate for this by applying a virtual Z rotation to every qubit after a single-qubit gate has been performed. The Ramsey based sequence is used to calibrate the required phase corrections (Extended Data Fig. 4i) and data is fitted with

$$
P _ {s} (\phi) = - \frac {A}{2} \cos (\phi - \phi_ {0}) + B\tag{6}
$$

to extract the necessary phase correction, $\phi _ { 0 } .$ . A single $\mathrm { { X _ { 9 0 } } }$ pulse on one qubit will impart phase errors on qubits 2 to 6. Thus we need to calibrate separately 30 diferent phase factors, five for each qubit.

$J _ { \mathrm { i j } }$ vs $\mathbf { v B _ { \mathrm { i j } } } \mathrm { ~ - ~ }$ (Qubit pairs 12, 56  146 s; Qubit pairs 23, 45 207 s; Qubit pair ${ \bf 3 4 } \to { \bf 2 9 9 } { \mathrm { ~ s } } ) \to -$ Two-qubit gates are implemented by applying a voltage pulse that increases the tunnel coupling between the respective quantum dots. To enable two-qubit gates, we take the following elements into account:

• Exchange strength. We operate the two-qubit gates at exchange strengths $J _ { \mathrm { o n } }$ where the quality factor of the oscillations is maximal. This condition is found for $J _ { \mathrm { o n } }$ ≈ 5 MHz.

• Adiabacity condition. When the Zeeman energy diference $( \Delta E _ { \mathrm { z } } )$ and the exchange $( J ( t ) )$ are of the same order of magnitude, care has to be taken to maintain adiabaticity throughout the CPhase gate. We do this by applying a Tukey based pulse, where the ramp time is chosen as $\tau _ { \mathrm { r a m p } } = \frac { 3 } { \sqrt { \Delta E _ { \mathrm { z } } ^ { 2 } + J _ { \mathrm { o n } } ^ { 2 } } } ~ [ 3 8 ] .$

• Single-qubit phase shifts. As we apply the exchange pulse, the qubits will physically be slightly displaced. This causes a frequency shift and hence phase accumulation, which needs to be corrected for.

In order to satisfy these conditions, we need to know the relationship between the barrier voltage and the exchange strength. We construct this relation by measuring the exchange strength (see figure 3a) for the last 25% of the virtual barrier pulsing range $( J > 1$ MHz regime). We fit the exchange to an exponential and extrapolate this to any exchange value (Extended Data Fig. 4j). This allows us to generate the adiabatic pulse as described in the main text and choose the target exchange value.

CZ duration – (Qubit pairs 12, 56 29 s; Qubit pairs 23, 45  34 s; Qubit pair 34  45 s) – The gate voltage pulse to implement a CZ operation uses a Tukey shape in J by inverting the relationship $J ( \mathrm { v B _ { i j } } )$ The maximum value of J is capped at $J _ { \mathrm { o n } }$ . The actual largest value of J used and the length of the pulse then determine the phase acquired under $\mathrm { Z Z }$ evolution. We first analytically evaluate the accumulated ZZ evolution as a function of these parameters around the target of π evolution under $\mathrm { Z Z , }$ and then experimentally fine tune the actual accumulated ZZ evolution by executing a Ramsey circuit with a decoupled CPhase evolution in between the two $\pi / 2$ rotations. An example of such a calibration measurement is shown in Extended Data Fig. 4k.

CZ phase crosstalk – (Q1, Q2, Q5, Q6 <30 s; Q3, Q4  <50 s) – After the exchange pulse is executed, single-qubit phases have to be corrected. We correct these phases on all the qubits, whether participating or not in the two-qubit gate. We calibrate the required phase corrections in a very similar way as done for the single-qubit gate phase corrections. An example of the circuit and measurement is given in Extended Data Fig. 4l-m. The exact calibration runtime depends on the CZ pulse width and can vary by couple of seconds depending on the target qubit.

## Heating efects

We observed several efects that bear a signature of heating in our experiments. When microwaves (MWs) are applied to the EDSR line of the sample, several qubit properties change by an amount that depends on the applied driving power and the duty cycle of applying power versus no power. This efect has also been observed in other works [45]. We report our findings in Extended Data Fig. 6 and will discuss adjustments made to the sequences of the experiments to reduce their efects. The main heating efects are a reduction of the signal-to-noise ratio (SNR) of the sensing dot and a change of the qubit resonance frequency and T∗ 2

In Extended Data Fig. 6a-d, we investigate the efect of a MW burst applied to the EDSR driving gate, after which the signal of the sensing dot is measured. We observe changes in the background signal and in the peak signal (the electro chemical potential of the sensing dot is not afected, as the peak does not shift in gate voltage). Since the background signal rises more than the peak signal, the net signal is reduced. This reduction depends on the magnitude and duration of the applied MW pulse (Extended Data Fig. 6b). The original SNR can be recovered by introducing a waiting time after the MW pulse. The typical timescale needed to restore the SNR is in the order of 100 µs (see Extended Data Fig. 6c-d). We added for all (RB) data taken in this paper a waiting of 100 µs (500 µs) after the manipulation stage to achieve a good bal ance between SNR and experiment duration. Spin relaxation between manipulation and readout is negligible, given that no $\mathrm { T _ { 1 } }$ decay was observed on a timescale of 1 ms within the measurement accuracy. We did not introduce extra waiting times after feedback/CROT pulses in the initialization/readout cycle, as the power to perform these pulses did not limit the SNR.

Extended Data Fig. 6f gives more insight in what makes the background and peak signal of the sensing dots change. The impedance of the sensing dot is measured using RFreflectometry. The background of the measured signal depends on the inductance of the surface-mount inductor, the capacitance to ground[22, 46, 47] and the resistance to ground of the RF readout circuit. Extended Data Fig. 6f shows the response of the readout circuit under diferent MW powers (the RF power is kept fixed). A frequency shift (0.5 MHz) and a reduction in quality factor is observed. This can be indicative of an increase in capacitance and dissipation in the readout circuit. Presently the microscopic mechanisms that cause this behavior are unknown.

The second efect is observed when looking at the qubit properties themselves. Extended Data Fig. 6e shows that both the dephasing time T∗<sub>2</sub> measured in a Ramsey experiment and the qubit frequency are altered by the microwave radiation. In the actual experiments, we apply a MW prepulse of 1-4 µs before the manipulation stage to make the qubit frequency more predictable, though this comes at the cost of a reduced $\mathrm { T _ { 2 } ^ { * } }$ . The pre-pulse can be applied either at the start or at the end of the pulse sequence, with similar efects. This indicates that heating efects on the qubit frequency persist for longer than the total time of a single-shot experiment ( 600 µs), diferent from the efect on the sensing dot signal. Also the microscopic mechanisms behind the qubit frequency shift and $\mathrm { T _ { 2 } ^ { * } }$ reduction remain to be understood.

## Parity mode PSB readout

Pauli spin blockade (PSB) readout is a method used to convert a spin state to a more easily detectable charge state[48]. Several factors need to be taken into account for this conversion, to enable good readout visibilities. Extended Data Fig. 1a-b shows the energy level diagrams for PSB readout performed in the (1,1) and (3,1) charge occupation. The diagrams use valley energies of 65 µeV, to illustrate where problems can occur. When looking at Extended Data Fig. 1, we can observe two potential issues:

• The excited valley state with is located below the ground valley state with . We assume in the diagram that the (2,0) singlet state ( S, 0 ) is coupled to both the (1,1) ground valley state and the (1,1) excited valley state. In this case, during the initialisation/readout pulses, population can be moved into the excited valley state. This problem can be solved by working at a lower magnetic field, such that $E _ { \mathrm { v } } > E _ { \mathrm { z } }$ (panel Extended Data Fig. 1b).

• When operating in the (1,1) charge occupation, the readout window is quite small, as the size is determined by the diference between the valley energy and the Zeeman energy. A common way to prevent this problem is by operating in the (3,1) electron occupation.

With both measures in place, we consistently obtain high visibilities of Rabi oscillations ( 94%) on every device tested.

In the following we describe the procedure used to tune up the parity mode Pauli Spin Blockade.

1. Find an appropriate tunneling rate at the (3,1) anticrossing. An initial guess of a good tunneling rate can be found using video mode tuning. We use the arbitrary waveform generator to record at high speed frames of the charge stability diagram (5 µs averaging per frame, t<sub>image</sub> = 200 ms). While the frames are measured, we vary the tunnel coupling, while looking at the (3,1) (4,0) anticrossing until the pattern shown in Extended Data Fig. 1c is observed. This figure shows that depending on the (random) initial state, the transition from (3,1) to (4,0) occurs at either location (i) or location (ii). This is exactly what needs needs to happen when the readout is performed.

2. Find the readout point. We hold point (1) fixed in the center of the (3,1) charge occupation (Extended Data Fig. 1c). Point (2) is scanned with the AWG along the detuning axis as shown in Extended Data Fig. 1c. We pulse from point (1) to point (2) and measure the state (ramp time of 2 µs), then we pulse back to point (1). When plotting the measured singlet probability, a gap is seen between the case where a singlet is prepared versus a random spin state is prepared (Extended Data Fig. 1d). The center of this region is a good readout point.

3. Optimizing the readout parameters. The main optimization parameters are the detuning (), tunnel coupling (t<sub>c</sub>) and ramp time to ramp towards the PSB region. We also independently calibrate the ramp time and tunnel cou pling from the readout zone towards the operation point of the qubits. When ramping in towards the readout point, it is important to be adiabatic with respect to the tunnel coupling. We do not need to be adiabatic with respect to spin, as both and relax quickly to the singlet state (faster than we can measure, <1 ns). When pulsing from the readout to the operation point, more care has to be taken. When using the ramp time which performs well for readout, we notice that we initialize a mixed state, as we are not adiabatic with respect to spin. This can be solved by pulsing the tunnel coupling to a larger value before initiating the initialization ramp (Extended Data Fig 1g).

We show in the Extended Data Fig. 1e-f, that the histograms for parallel and anti-parallel spin states are well separated, allowing for a spin readout fidelity exceeding 99.97% for both qubits 1-2 and for qubits 5-6. This number could be further increased by integrating the signal for longer, but is not the limiting process. This way of quantifying the spin readout fidelity is commonly used in the literature but it leaves out errors occurring during the ramp time (mapping of qubit states to the readout basis states). This can be a significant efect, as seen from the measured visibility of the Rabi oscillations.

## Setup and the Real-time feedback using FPGA

Setup A detailed schematic of the experimental setup is presented in Extended Data Fig. 7, listing all the key components used in the experiment.

Programming quantum circuits The quantum circuits are implemented in the form of microwave bursts for single qubit operations, gate voltage pulses for two-qubit gates, and gate voltage pulses combined with RF bursts for readout. The gate voltage pulses are generated by an arbitrary wave generator (AWG). The microwave bursts are generated through IQ modulation of a MW vector source carrier frequency. The input signals for the IQ modulation are generated by the same AWG as used for the voltage pulses. The IQ modulation defines the amplitude envelope of the microwave bursts, the output frequency and the phase shifts. Virtual-Z gates are implemented by incrementing the reference phase of the NCO (see below) and are used to e.g. correct phase errors introduced by crosstalk. The generated control signals are stored in memory with a resolution of 1 ns.

Microwave bursts applied to the six qubit sample are supplied by a single MW source with a carrier frequency set at 16.3 GHz. We address the six diferent qubits using single side-band IQ modulation of the carrier to displace the frequency of the microwave output signal to the frequency of the target qubit. As each qubit has a diferent resonance frequency (and diferent from carrier frequency), it is necessary to track the phase evolution at the qubit Larmor precession frequency to ensure phase coherent MW bursts for successive single-qubit operations. To realize that, we define in the AWG six continuously running numerically controlled oscillators (NCO), one for each qubit. These NCOs keep track of the qubits’ phase evolution with respect to the carrier frequency. We choose this approach instead of pre-calculating phase factors for every pulse in a sequence, which is a not a scalable approach with a growing complexity of the quantum circuits.

The digitizer is synchronised with the AWG to acquire qubit readout data. In a single-shot we can include multiple readout segments, each defined in a digitizer instruction list. A step in this list specifies a measurement time window, a wait time and the threshold for the qubit state. The input signal is integrated during the measurement window and the result is compared with a threshold to determine the qubit state. This outcome, 0 or 1, can be passed directly to the AWG via a PXI trigger line shared by digitizer and AWGs, to realize real-time feedback on the measurement output.

Real-time feedback In the initialization and readout sequences the execution of selected gates depends on the outcomes of intermediate measurements, allowing for real-time qubit state corrections. The total time from the end of the measurement until the start of the conditional gate (burst) on the device should be much shorter than the qubit relaxation time T<sub>1</sub>, and ideally also shorter than 1 µs – the time needed for the adiabatic passage back to the manipulation point after the parity measurement – such that no unnecessary idling time is spent. This fast control loop is realized with a custom FPGA program in the arbitrary wave generator (AWG) and digitizer as shown in Extended Data Fig. 8. The total latency for the closed loop feedback is 660 ns, which fits the design requirements.

## Data availability

The raw data and analysis that support the findings of this study are available in the Zenodo repository (https://doi.org/10.5281/zenodo.6138474)

## Code availability

The measurement and analysis code is available in the Zenodo repositories (core-tools https://zenodo.org/badge/latestdoi/264858832; pulse library https://zenodo.org/badge/latestdoi/113251242; qubit abstraction layer https://zenodo.org/badge/latestdoi/253903530; state-tomography https://zenodo.org/record/6135943).

## References

[1] Vandersypen, L. M. & Eriksson, M. A. Quantum computing with semiconductor spins. Physics Today 72, 8– 38 (2019).

[2] Borselli, M. G. et al. Pauli spin blockade in undoped Si/SiGe two-electron double quantum dots. Applied Physics Letters 99, 063109 (2011).

[3] Zajac, D., Hazard, T., Mi, X., Wang, K. & Petta, J. R. A reconfigurable gate architecture for Si/SiGe quantum dots. Applied Physics Letters 106, 223507 (2015).

[4] Veldhorst, M. et al. An addressable quantum dot qubit with fault-tolerant control-fidelity. Nature Nanotechnology 9, 981–985 (2014).

[5] Zwerver, A. et al. Qubits made by advanced semiconductor manufacturing. arXiv:2101.12650 (2021).

[6] Arute, F. et al. Quantum supremacy using a programmable superconducting processor. Nature 574, 505– 510 (2019).

[7] Egan, L. et al. Fault-tolerant control of an errorcorrected qubit. Nature 598, 281–286 (2021).

[8] Zhong, H.-S. et al. Quantum computational advantage using photons. Science 370, 1460–1463 (2020).

[9] Hendrickx, N. W. et al. A four-qubit germanium quantum processor. Nature 591, 580–585 (2021).

[10] Takeda, K. et al. Quantum tomography of an entangled three-qubit state in silicon. Nature Nanotechnology 1–5 (2021).

[11] Mądzik, M. T. et al. Precision tomography of a threequbit donor quantum processor in silicon. Nature 601, 348–353 (2022).

[12] Takeda, K., Noiri, A., Nakajima, T., Kobayashi, T. & Tarucha, S. Quantum error correction with silicon spin qubits. arXiv:2201.08581 (2022).

[13] Bruzewicz, C. D., Chiaverini, J., McConnell, R. & Sage, J. M. Trapped-ion quantum computing: Progress and challenges. Applied Physics Reviews 6, 021314 (2019).

[14] Zhang, E. J. et al. High-fidelity superconducting quantum processors via laser-annealing of transmon qubits. arXiv:2012.08475 (2020).

[15] Arrazola, J. et al. Quantum circuits with many photons on a programmable nanophotonic chip. Nature 591, 54– 60 (2021).

[16] Yoneda, J. et al. A quantum-dot spin qubit with coherence limited by charge noise and fidelity higher than 99.9%. Nature Nanotechnology 13, 102–106 (2018).

[17] Yang, C. et al. Silicon qubit fidelities approaching incoherent noise limits via pulse engineering. Nature Electronics 2, 151–158 (2019).

[18] Lawrie, W. et al. Simultaneous driving of semiconductor spin qubits at the fault-tolerant threshold. arXiv:2109.07837 (2021).

[19] Xue, X. et al. Quantum logic with spin qubits crossing the surface code threshold. Nature 601, 343–347 (2022).

[20] Noiri, A. et al. Fast universal quantum gate above the fault-tolerance threshold in silicon. Nature 601, 338–342 (2022).

[21] Mills, A. et al. Two-qubit silicon quantum processor with operation fidelity exceeding 99%. arXiv:2111.11937 (2021).

[22] Connors, E. J., Nelson, J. & Nichol, J. M. Rapid highfidelity spin-state readout in Si/SiGe quantum dots via rf reflectometry. Physical Review Applied 13, 024019 (2020).

[23] Harvey-Collard, P. et al. High-fidelity single-shot readout for a spin qubit via an enhanced latching mechanism. Physical Review X 8, 021046 (2018).

[24] Angus, S. J., Ferguson, A. J., Dzurak, A. S. & Clark, R. G. Gate-defined quantum dots in intrinsic silicon. Nano Letters 7, 2051–2055 (2007).

[25] Zajac, D., Hazard, T., Mi, X., Nielsen, E. & Petta, J. R. Scalable gate architecture for a one-dimensional array of semiconductor spin qubits. Physical Review Applied 6, 054013 (2016).

[26] Lawrie, W. I. L. et al. Quantum dot arrays in silicon and germanium. Applied Physics Letters 116, 080501 (2020).

[27] Pioro-Ladriere, M., Tokura, Y., Obata, T., Kubo, T. & Tarucha, S. Micromagnets for coherent control of spincharge qubit in lateral quantum dots. Applied Physics Letters 90, 024105 (2007).

[28] Ristè, D., van Leeuwen, J. G., Ku, H.-S., Lehnert, K. W. & DiCarlo, L. Initialization by measurement of a superconducting quantum bit circuit. Physical Review Letters 109, 050507 (2012).

[29] Volk, C. et al. Loading a quantum-dot based “qubyte” register. npj Quantum Information 5, 1–8 (2019).

[30] Kawakami, E. et al. Electrical control of a long-lived spin qubit in a Si/SiGe quantum dot. Nature Nanotechnology 9, 666–670 (2014).

[31] Xue, X. et al. Repetitive quantum nondemolition measurement and soft decoding of a silicon spin qubit. Physical Review X 10, 021006 (2020).

[32] Obata, T. et al. Coherent manipulation of individual electron spin in a double quantum dot integrated with a micromagnet. Physical Review B 81, 085317 (2010).

[33] Kha, A., Joynt, R. & Culcer, D. Do micromagnets expose spin qubits to charge and johnson noise? Applied Physics Letters 107, 172101 (2015).

[34] Simmons, S. et al. Entanglement in a solid-state spin ensemble. Nature 470, 69–72 (2011).

[35] Huang, W. et al. Fidelity benchmarks for two-qubit gates in silicon. Nature 569, 532–536 (2019).

[36] Meunier, T. et al. Experimental signature of phononmediated spin relaxation in a two-electron quantum dot. Physical Review Letters 98, 126601 (2007).

[37] Watson, T. et al. A programmable two-qubit quantum processor in silicon. Nature 555, 633–637 (2018).

[38] Martinis, J. M. & Geller, M. R. Fast adiabatic qubit gates using only σz control. Physical Review A 90, 022307 (2014).

[39] Zajac, D. M. et al. Resonantly driven cnot gate for electron spins. Science 359, 439–442 (2018).

[40] Greenberger, D. M., Horne, M. A. & Zeilinger, A. Going beyond bell’s theorem. In Bell’s theorem, quantum theory and conceptions of the universe, 69–72 (Springer, 1989).

[41] Rajagopal, A. & Rendell, R. Robust and fragile entanglement of three qubits: Relation to permutation symmetry. Physical Review A 65, 032328 (2002).

[42] Vandersypen, L. et al. Interfacing spin qubits in quantum dots and donors—hot, dense, and coherent. npj Quantum Information 3, 1–10 (2017).

[43] Heinz, I. & Burkard, G. Crosstalk analysis for singlequbit and two-qubit gates in spin qubit arrays. Physical Review B 104, 045420 (2021).

[44] Russ, M. et al. High-fidelity quantum gates in Si/SiGe double quantum dots. Physical Review B 97, 085421 (2018).

[45] Takeda, K. et al. Optimized electrical control of a Si/SiGe spin qubit in the presence of an induced frequency shift. npj Quantum Information 4, 1–6 (2018).

[46] Noiri, A. et al. Radio-frequency-detected fast charge sensing in undoped silicon quantum dots. Nano Letters 20, 947–952 (2020).

[47] Liu, Y.-Y. et al. Radio-frequency reflectometry in siliconbased quantum dots. Physical Review Applied 16, 014057 (2021).

[48] Ono, K., Austing, D., Tokura, Y. & Tarucha, S. Current rectification by pauli exclusion in a weakly coupled double quantum dot system. Science 297, 1313–1317 (2002).

## Acknowledgments

We acknowledge R. Schouten for general advice and help on the measurement electronics, M. Almendros and his team for a collaborative development of FPGA hardware control, H. Van Der does and N. Philips for the design of the sample printed circuit board, Z. Jiang, A.-M. Zwerver, L. Peters and F. Unseld for assistance with the testing of samples, M. Eriksson and his team for contributions to sample fabrication, and members of the Vandersypen group for useful discussions. We acknowledge financial support from the Marie Skłodowska-Curie actions—Nanoscale solid-state spin systems in emerging quantum technologies—Spin-NANO, grant agreement number 676108. This research was sponsored by the Army Research Ofice (ARO) under grant numbers W911NF-17-1-0274 and W911NF-12-1-0607. The views and conclusions contained in this document are those of the authors and should not be interpreted as representing the official policies, either expressed or implied, of the ARO or the US Government. The US Government is authorized to reproduce and distribute reprints for government purposes notwithstanding any copyright notation herein. Development and maintenance of the growth facilities used for fabricating samples is supported by DOE (DE-FG02-03ER46028). We acknowledge support from Keysight’s University Research Collaborations.

## Author contributions

S.G.J.P. and M.T.M. performed the experiment with help from C.V. Data analysis was carried out by S.G.J.P., M.T.M. and M.R., who also performed the numerical simulations of the Bell and GHZ states. S.G.J.P. and S.L.S. wrote the libraries used to control the experiment. S.L.S. wrote the library used for real-time feedback and made the supporting FPGA images. S.G.J.P., M.T.M., M.R. and L.M.K.V. contributed to the interpretation of the data. S.V.A., N.K., D.B., W.I.L.L., M.V. and L.T contributed to device fabrication and A.S., B.P.W and G.S designed and grew the Si/SiGe heterostructure. S.G.J.P., M.T.M. and L.M.K.V. wrote the manuscript with comments by all authors. L.M.K.V. conceived and supervised the project.

![[assets/figures/references/philips-2022/5675277fb5f044c0bb0a1e906f38ac6ab839d11843422dbbf9af8769d8d0bd15.jpg]]

![[assets/figures/references/philips-2022/fb84fe3fe666c60e46d5fa444ed96da626767ce19b5cd1266af1388e82b60bdf.jpg]]

![[assets/figures/references/philips-2022/114d94452a4732fb9877cc0b12ec1f818dad8834c9d7e7651577b3655d221065.jpg]]

![[assets/figures/references/philips-2022/b1ebf738abfef81c40699725f4a58c46d518211f0bd1de05afe02b01314569a6.jpg]]

![[assets/figures/references/philips-2022/0e50e69dec0c5b0e24158ab79913996a6972e6513c7da0da78b88c3e1e9e9025.jpg]]

![[assets/figures/references/philips-2022/7ef0c2326ac856b0e1328b918d70d9ab66c1aef38679a9cffdcf52122c3f757c.jpg]]

![[assets/figures/references/philips-2022/efaacc05e6cdeef0a274dc0352b137064c5abdc4954af451d0b4b1e881ba0536.jpg]]

![[assets/figures/references/philips-2022/58cc438b73866f845c21d7aaf23503ac7716c4a8a9abcb9ab467c47ff16fcdc0.jpg]]

Extended Data Fig. 1 | Pauli Spin Blockade readout a, Energy diagram for a double quantum dot as a function of the detuning between the $( 1 , 1 ) / ( 2 , 0 )$ charge electron occupation. The Zeeman energy $\left( E _ { \mathrm { z } } \right)$ for qubit $1 / 2$ is set to $7 4 / 7 5$ µeV (18/18.2 GHz) and the valley energy $\left( \epsilon _ { \mathrm { v } } \right)$ of dot 1 is set to 65 µeV. We set $\epsilon _ { \mathrm { c } }$ for the second dot to a much larger value to shift part of the energy spectrum out of view and simplify the visual analysis. The charge and valley occupations are indicated in the top right of this panel. $\mathbf { b } ,$ Energy diagram in the $( 3 , 1 ) / ( 4 , 0 )$ charge occupation. This panel uses identical parameter values as panel ${ \mathbf { a } } ,$ except for the Zeeman energy for qubit 1 and 2, $2 5 / 2 6 ~ \mathrm { \textmu e V }$ (6 and $6 . 2 \ \mathrm { G H z } )$ . The excited state energy of dot 1 in the $^ { ( 4 , 0 ) }$ charge occupation is given by the orbital energy instead of the valley splitting. c Experimental charge stability diagram taken at the $( 3 , 1 ) / ( 4 , 0 )$ anticrossing for dots 1 and 2. The point indicated with $_ { 1 } \cdot$ indicates the qubit operation point and the point indicated as $" 2 "$ indicates the readout point. The inset zooms in on the anticrossing, allowing one to observe the spin selective tunneling for the diferent input states (the readout zone). d In our experiment we initialize via measurement and post-selection. In the plot we can see the efects of two subsequent readouts. First readout ’m1 $( \mathrm { r a w } ) ^ { \dag }$ shows the initial singlet fraction (electron spins are not intentionally randomized and by nature of the executed measurement sequence, a singlet state is preserved for next single shot). Second measurement $\mathrm { \ ' } _ { \mathrm { m 2 } } \mathrm { \cdot }$ shows the outcome from post-selection on the result of $\ ' _ { \mathrm { m l } } \cdot$ (realized as per-measurement-point post-processing in software). Within the readout zone (shaded area) the initialized singlet fraction is greatly amplified. e-f Probability density function of the PSB readout signal between qubit pairs 12 and 56 (10 µs integration time), recorded in the course of the Rabi oscillations of qubit $1 / 5$ in figure 2. The Gaussians are fitted to the two distributions and charge readout fidelities, estimated from their overlap, exceeding 99.9%. No $\mathrm { T _ { 1 } }$ decay was observed at the readout point $( \mathrm { T _ { 1 } } > > 1 0 0 ~ \mathrm { \mu s } )$ . g, Gate voltage pulses applied to perform PSB readout on qubit pair 12. The diferent background colors indicate the ramp towards the readout point (green), measurement at the readout point (yellow) and the adiabatic ramp back to the operating point (red)

![[assets/figures/references/philips-2022/2399995e07398ccf0256921439200ca3edd8c59d42b20cc1655183f387a073a7.jpg]]

![[assets/figures/references/philips-2022/7144609cde8ee55866bbf89af11ef0c9bcd74f428cf8392d01670ab6ba662c34.jpg]]

Q234 GHZ-state preparation  
![[assets/figures/references/philips-2022/c82b0fd08bd26ba597cf60a4c7d183d431665ce9c1a4d90129b986bd7c610923.jpg]]

Readout  
![[assets/figures/references/philips-2022/3e0a81f88d202cd10bfcb44c9307ecd8473ad5177c0dab7ff99b9347bdd01355.jpg]]  
Extended Data Fig. 2 | Full quantum circuits. a, This circuit was used to produce the data presented in Fig. 5c. The diferent background colors indicate the diferent parts of the sequence (yellow – initialization, green – manipulation (including the tomography pulses), blue – readout).

d Q1-6 initialized  
![[assets/figures/references/philips-2022/6433660850bc972e4a59a523f4df4cdb63872cbae90c0c057b194f9955f9a922.jpg]]

![[assets/figures/references/philips-2022/e6b5b1355973f0d038f3ec060c5f3d3e90066edbd3dce30d9d63b7fdc810a218.jpg]]

![[assets/figures/references/philips-2022/a32bcaa42c81961b1b31bed2864b84b55216a03344f31e1b66525efd2fa7a227.jpg]]

![[assets/figures/references/philips-2022/f68befcc71f192f9c71770bf6ca39789ef0164c34ae0528328ce1f8770ffd004.jpg]]  
Extended Data Fig. 3 | Loss in visibility when initializing all qubits. a, Gate sequence used to demonstrate the efect of running diferent qubit initialization routines. Microwave bursts with variable duration are performed sequentially on qubits 2, 3, 4 and 5, as shown in the schematic. In all cases, readout is performed on all the qubits, but we vary which qubits are initialized for a particular experiment. b-d, Results of the sequence displayed in panel a, when qubit 1-3 (b), 4-6 (c) or 1-6 (d) are initialized. The shaded numbers in the panels indicate the visibility of the measured qubit. With all qubits initialized we observe a visibility loss on qubit 4 and to a lesser extent qubit 3. A visibility loss in principle can originate from a reduced readout or initialization fidelity. We keep the readout sequence identical for a, b, and c. Additionally, we include a 500 µs waiting time prior to readout, to minimize any efects of MW pulsing during initialization or manipulation stage on the readout performance (see Methods). Although, we cannot be certain that the readout fidelity is unafected by the initialization of all qubits, we speculate that the majority of the observed visibility loss is due to a reduced initialization fidelity, possibly due to the sensitivity of the CROTs to qubit frequency shifts. This interpretation is consistent with the fact that mostly qubit 4 sufers a lower visibility, as qubit 4 is initialized before qubits 1,2 and 3. If instead we reverse the initialization order, qubit 3 displays lowered visibility (data not shown).

![[assets/figures/references/philips-2022/a2aebe0e19f1c5c469a19474d277ba2bd550cdfd3f6edf27234771095a837501.jpg]]

![[assets/figures/references/philips-2022/5be9cf86dcdec933144445e80e550a8840fc2c866b6013e1234ee631c3891ae1.jpg]]

![[assets/figures/references/philips-2022/78d46e463931afb7d1ec91521ef86ec557caa684f163acc1c8b4d0fcfc96d52e.jpg]]

![[assets/figures/references/philips-2022/b085de6cf0a98e270d875d9b4e744dc52f32ea2b465b04737bfce47d7e4f0625.jpg]]

![[assets/figures/references/philips-2022/9b33741f4a55f57f574cb6ac60fa3b37df219fa05ba43943128837eb28261efa.jpg]]

![[assets/figures/references/philips-2022/8b9d85001252a5756d1ea5e879c1945c8f889317ae9afcf3ce20897a57124d2e.jpg]]

![[assets/figures/references/philips-2022/178e17831c4eff60db06f307126d5374cee2db30a67a3358a35e48834d5775ba.jpg]]

![[assets/figures/references/philips-2022/3b78c7cd0f1277983da2a886da0aff197076b46b14b8a699191b50d5f8aa7687.jpg]]

![[assets/figures/references/philips-2022/0c215a8149ebb6cd17c3e5067c318c89772d456dca306cb953c2a3d56ba9d813.jpg]]

![[assets/figures/references/philips-2022/a3fd24e6e904da6dad185eb11d367a710148f14367462ea726d3edad5f62ff63.jpg]]

![[assets/figures/references/philips-2022/ea4f17e2f6adacac25e12a9de6cbea58b71790f83a5acb79b02aff0e514badef.jpg]]

![[assets/figures/references/philips-2022/403bcc698b29643a915e4ffcd609a46148417c68dd9a06fba01c6ad179bc87bc.jpg]]

![[assets/figures/references/philips-2022/1720af9dd594459d198da05614e678e88a76750b8b162b9e498d89c3c86710e9.jpg]]

![[assets/figures/references/philips-2022/6835704fc593a979d93dab2a57887b73a4138c5e7e1d63a3192bdb9be15b7c99.jpg]]

![[assets/figures/references/philips-2022/343f10e8939a6fbea49badd4deda595d4f9ce0527544c99cd579d0213bfa2a9f.jpg]]

![[assets/figures/references/philips-2022/b418a3f684b7fb3e0f90d1ecee1a6af2358998346cf50223f6f9792b0d20ca8b.jpg]]

![[assets/figures/references/philips-2022/9f3a2671e0aa59baab640e51e169164ada63abcc9cdc3941217bee9d4c0db1fd.jpg]]

![[assets/figures/references/philips-2022/656232395760f5b58edb21e7d19363068ab49544854c667d0382392da552f6df.jpg]]

![[assets/figures/references/philips-2022/90963ccd46875fed3b027a6084d495d31247c6091163ff2428f7eb1961150aa7.jpg]]

![[assets/figures/references/philips-2022/01de4cbb342bb4045b73ae90b8d7cfea18e07f2711328df52509b8520c3024ba.jpg]]

![[assets/figures/references/philips-2022/3cfc3a6702b3a8a6273a8a4bb4a46882a5f2ce33f98fa3ae7757f454f6b2734b.jpg]]

![[assets/figures/references/philips-2022/d6638be30855635ef8dc1e4f4c7d65c032782b8766860fe69f5f40085cdd07f9.jpg]]

![[assets/figures/references/philips-2022/6cb6a79faa6349f57d9cd503581fce438260a49efcfba91771c2bd08618dce31.jpg]]  
Extended Data Fig. 4 | Calibrations a-m Each panel shows a typical experimental dataset obtained in one of the calibration routines for the relevant experimental parameters. Every panel indicates in the header the calibration name and the corresponding number of calibration parameters. Below the header, the values extracted from the data is indicated. See the methods section for a detailed description. n, Table showing the formulas used to fit the data for the indicated figure panels.

![[assets/figures/references/philips-2022/7cc1e5064663a04facbf8eef4faaae27e315f98829614f5128a6f3ce0298e37f.jpg]]

![[assets/figures/references/philips-2022/95e00ab0baa387f95d23be0664ce5cc9009e3104b86932492f10fe786cd6dc4b.jpg]]

$$
y = a + b x + c x ^ {2} + d x ^ {3} + e x ^ {4} + f x ^ {5} + g x ^ {6}
$$

a  
![[assets/figures/references/philips-2022/1cd69fa5843c809cd104724317faff2890041da2919900f1c3d19318e4ef9396.jpg]]

![[assets/figures/references/philips-2022/2233781898590bc71fb22d2a858c8d3a4ebf1f644536521f7571cf23b062d808.jpg]]

![[assets/figures/references/philips-2022/64b53f63e35cfbd0892bb5426322a796f0711f3c63a180328aff9b9e8384c34a.jpg]]

![[assets/figures/references/philips-2022/649abcdb7fe8a35772b687952c711792dcd1a518fe0e4d75fceab16cb62bf154.jpg]]

e Qubit 5 Rab  
![[assets/figures/references/philips-2022/953b51f2e96c0ffe0d6b5111199d12e2169b127fa41a93f61ce561f2c4d1f7fa.jpg]]

Qubit 6 Rabi  
![[assets/figures/references/philips-2022/4dfa2b6df8d03dc0347f48d43043c5264ba7c397afe23d46dee0a72f942d64b3.jpg]]

g Qubit 2 Rabi (sync)  
![[assets/figures/references/philips-2022/6b5ee4bf66ca4dc7b293717253b569c5e774a13c756b5a5847bdfb3431deb89d.jpg]]  
h Synchronisation condition:  
Extended Data Fig. 5 | Crosstalk a-f, In this experiment all qubits are initialized. We observed the presence of crosstalk by measuring the expectation values of the native observables on the sample. a-e, Rabi oscillations executed on diferen qubits in each panel. Panels b, c and e display coherent oscillations of nominally idle qubits, which are a clear indication of crosstalk at the chosen Rabi frequencies. Qubits 1 and 2 show flipped measurement outcomes due to a miscalibration of sensing dot 1. This bears no influence on the conclusion from this experiment. g, Example of qubit 2 driven at the frequency determined by the synchronization condition. In this case the crosstalk to qubit 5 (qubit with the closest resonance frequency) was nullified by design for every multiple of a 90 degree rotation. h, Expressions [43] used to calculate the synchronization condition shown in panel $\mathbf { g } .$

$$
{ \begin{array}{r l} {\Omega_ {2}} & {= {\frac {\Delta}{\sqrt {1 6 n ^ {2} - \alpha_ {2 5} ^ {2}}}}} \\ & {= {\frac {9 . 4 5 M H z}{\sqrt {1 6 n ^ {2} - 0 . 9 8 5 ^ {2}}}}} \\ & {= 2. 4 5 M H z \qquad {\mathrm{(forn=1)}}} \end{array} }
$$

$$
\alpha_ {2 5} = \frac {\Omega_ {2} (P)}{\Omega_ {5} (P)}
$$

![[assets/figures/references/philips-2022/152d4d5c0f3afed6143181610389a4903fa6fcbd4e66f1fa70e9b43c1828bd74.jpg]]

![[assets/figures/references/philips-2022/2468fb73bc407f8eee9fd55df05b074982396974f9cfb0ae71de38f119846068.jpg]]

b  
![[assets/figures/references/philips-2022/e02115b9b200ec5fea8e4038fd06cf81c575cb2810e8dce982ce3241f1a736bc.jpg]]

c  
![[assets/figures/references/philips-2022/ca6d76c4b39947b8ee5fd4da596a47c1bd2d75c60e0b10c2c9c71e3e5272fb02.jpg]]

![[assets/figures/references/philips-2022/1963946e44b8b98630d18b7ab8106b385ba719276743bb5b6b41e3e200b9fe06.jpg]]

![[assets/figures/references/philips-2022/4f4410164de36ac8ed1807e2b946e9b342face08b2728d8368dea7ba1d759f7a.jpg]]

e  
![[assets/figures/references/philips-2022/26aad6ac0cceb1dc4b1d681ca18ec4106b3e07bc2f9f8cb0b4d49edb10642f2a.jpg]]

f  
![[assets/figures/references/philips-2022/a5f5db9515e9d8c2ef963beef5a71a51b33f32fc0af85464e232695a09e13cb7.jpg]]

![[assets/figures/references/philips-2022/4e401746a588477f2761cea1ccc30650717cdb0e49c23a6684a1dd181b8fd1fe.jpg]]

![[assets/figures/references/philips-2022/0cf5ccae7d5a71d31137e27d16abb92dadd85c3fe147b87b454cf4127b560ab3.jpg]]

g  
![[assets/figures/references/philips-2022/a5266e59c23922d6d3734fa1077b8f92185329a74ddd3e24c0209eff2556536c.jpg]]  
Extended Data Fig. 6 | Heating efects a, A microwave burst of 16 GHz at 12 dBm output power and of a variable duration is applied before scanning the sensing dot virtual plunger gate. We observe no shift of the Coulomb peak, indicated by the white line, but the background signal increases significantly. Also the peak signal increases, but by a smaller amount. b, Linecut along the Coulomb peak and linecut parallel to the Coulomb peak of panel a, showing the peak and background signal as a function of the MW burst duration, for two diferent powers. The shaded area indicates the net signal, which is smaller the larger the applied power and the longer its duration. $\mathbf { c } ,$ Variation on panel $\mathbf { b } ,$ where we introduce a waiting time after the microwave burst, as indicated in the schematic. The longer the wait time, the more the original SNR is recovered, and the higher the readout fidelity will be. d, Rabi oscillations with diferent waiting times introduced before the qubit readout. The 500 µs wait time allows for recording long lived Rabi oscillations, while with no wait time prior readout, the contrast vanishes as the perceived spin fraction converge towards 1, due to shifts in the sensing dot signal and background (the threshold for single-shot analysis was kept fixed). e, Schematic showing the circuit used to investigate the efect of a pre-pulse (labelled MW burst (t)) on the qubit properties. A microwave burst of 6 dBm is applied before running a Ramsey experiment. We extract the change in $\mathrm { T } _ { 2 } ^ { * }$ and Larmor frequency for qubit 5 for diferent microwave burst times as shown in the plots. f Return loss of the RF readout circuit for diferent powers of continued microwave driving (i.e. driving at the qubit frequencies, not for the RF readout). We observe both a shift in the RF resonance frequency and a degradation of the quality factor with higher power excitation. $\mathbf { g } ,$ Extracted dephasing times $\mathrm { T _ { 2 } ^ { * } }$ with and without pre-pulse (4 µs, 6 dBm), measured as illustrated in e.

![[assets/figures/references/philips-2022/4ea8fd0aa95173fdea4b60d88da575b207346cc28c38ef90a4254fedfbc9816d.jpg]]

Double DC Block (Pasternack PE8210)

Ferrite core

90 degree phase shifter

Mixer

Attenuator with -x dB

Cryogenic amplifier (Cosmic Microwave Technology CITLF3)

Extended Data Fig. 7 | Experiment setup a, Schematic overview of the experimental setup. The bulk of the experiment is controlled by Arbitrary Waveform Generators (AWG, Keysight M3202A) and digitizers (DIG , Keysight M3201A) in a PXI chassis (used for synchronization and feedback). The AWG’s generate baseband pulses (0-300MHz) used for readout and two-qubit gates. These baseband signals are provided to all plunger and barrier gates of the quantum dots. Sensing dot plungers are also connected to AWG channels to allow for fully compensated virtual plungers. In addition, we use the AWG’s to generate the $\mathrm { I / Q }$ input signals for the vector source (Keysight PSG E8267D), used to perform single-qubit gates. Using this source, a large IQ modulation bandwidth (800 MHz) can be obtained by using the diferential IQ inputs. The diferential signal is generated using Balun’s (Marki bal-0006), which reduce the number of AWG channels and ensure excellent timing (AWG channel pairs 1,2 and 3,4 have a larger skew ( 30 ps) compared to just channel 1 and 2). We use a homemade combiner to allow for both baseband and MW control on the EDSR driving gate. Coils with ferrite cores are used to reduce low-frequency noise generated by the instruments. In addition, we use double DC blocks for any RF/MW signal used in this experiment. The schematic shows in yellow the diferent temperature stages of the dilution refrigerator at which the signals are attenuated and thermalized. All plunger gates have discrete attenuators in the line with a total attenuation of 28 dB, and barrier gates of 20 dB in addition to the attenuation from the coax line itself. The barrier gates have less attenuation because of the large voltage pulses needed to achieve the desired $J _ { \mathrm { o n } } / J _ { \mathrm { o f f } }$ ratio. We use bias tees on the sample PCB with a RC time constant of 100 ms to combine baseband and microwave signals with a static DC voltage. We generate the carrier signal using a homemade RF source (one carrier per sensing dot), which we route into the dilution refrigerator using a combiner. A marker output channel of the AWG’s is connected to the the RF sources in order to only output RF power during the readout. At the 10 mK stage, we use a directional coupler to separate the reflected signal $( S _ { 1 1 } )$ from the incoming RF carrier. A coplanar waveguide routing the RF signal on the sample PCB is split in two and connects to bias tees, each one going to a sensing dot. Bias tees with a low resistance are chosen as it also allows us to perform DC measurements as needed. NbTiN inductors (low $C _ { \mathrm { p } } , \mathrm { h i g h } \mathrm { Q } )$ are wire-bonded directly to the source contacts on the sample [22, 46] (see Supplementary materials). When the carrier signal reflects from the sensing dots, it passes again through the directional coupler and is amplified both at the 4 Kelvin stage and at room temperature. The signal is fed through two sets of mixers (1 for each SD) to demodulate the signal to baseband. We finally sample the I and Q channels with the digitizer in the PXI chassis. On the FPGA, we average the signal for a specified amount of time and optionally convert it into a boolean value using a threshold (see Extended Date figure 8). Besides the fast baseband/RF/MW pulses, all the gates of the sample are also connected to battery-powered DACs built in-house, which supply the DC operating voltages. These DACs are very stable voltage sources that provide an 18-bit voltage resolution over a 2 V range. b, Image of the PCB used to mount the sample. In the zoomed-in image in red, the qubit chip and two smaller chips with NbTiN high-kinetic inductance inductors are visible.

![[assets/figures/references/philips-2022/72bf490eb7c071aa857a19d5e7fa2bb56857ab3af6adb659ab46a66db1f2e87a.jpg]]

Extended Data Fig. 8 | Implementation of real time feedback a, The sensing dot signal obtained via RF reflectometry arrives at the digitizer on two input channels (I and Q). The digitizer rotates the combined I and Q input with an angle $\Delta \phi$ and converts the vector into a scalar by dropping the Q signal. Upon a trigger from the instruction sequence, the signal is averaged for a time $t _ { \mathrm { m e a s u r e } }$ and compared with a threshold to infer the qubit state. The result is written both to the DRAM and the PXI trigger line. b, We use IQ modulation to shape the MW pulses that are used for EDSR qubit control. The waveform memory stores the amplitude (envelope) and phase information for all the microwave bursts used in the experiment, as well as for the necessary single-qubit phase corrections. We upload waveforms for microwave bursts corresponding to $\mathrm { X _ { 9 0 } }$ $\mathrm { X _ { - 9 0 } }$ , Y<sub>90</sub> and $\mathrm { Y _ { - 9 0 } }$ rotations for each qubit. The pulse table contains the start and stop memory addresses of each control pulse present in the waveform memory. For every single-shot experiment, the AWG steps through the instruction sequence, which defines all the single-qubit gate pulses that need to be executed during the experiment. When the ofset flag of an instruction in the instruction sequence is 1, the current value on the PXI trigger (0/1) is added to the pulse number that will be played from the pulse table. This bitwise addition implements real-time feedback. In the present experiment, either $\mathrm { X _ { 9 0 } }$ bursts will be executed or zero amplitude bursts, depending on the PXI trigger value. When an instruction sequence is ran, the amplitude and phase information are read from the waveform memory for the selected pulse numbers one after the other. The diferential phase (∆ phase) is added for every rendered sample to the phase accumulator (which controls the qubit frequency) and is then converted to an in-phase (I) and quadrature (Q) signal by the phase-to-amplitude converters (PAC). These I and Q signals are multiplied with the amplitude envelope of the waveform and are then passed to the outputs of the AWG and from there to the vector source. We can run up to twelve sequencers in parallel in a single AWG. In this case 6 sequencers are used, one for every qubit.

<table><tr><td></td><td>vB0</td><td>vB1</td><td>vB2</td><td>vB3</td><td>vB4</td><td>vB5</td><td>vB6</td></tr><tr><td> $V_{J_{12}}$ </td><td>-1</td><td>1</td><td>-1.6</td><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td> $V_{J_{23}}$ </td><td>0</td><td>-0.2</td><td>1</td><td>-0.5</td><td>0</td><td>0</td><td>0</td></tr><tr><td> $V_{J_{34}}$ </td><td>0</td><td>0</td><td>-0.3</td><td>1</td><td>-0.3</td><td>0</td><td>0</td></tr><tr><td> $V_{J_{45}}$ </td><td>0</td><td>0</td><td>0</td><td>-0.9</td><td>1</td><td>-0.9</td><td>0</td></tr><tr><td> $V_{J_{56}}$ </td><td>0</td><td>0</td><td>0</td><td>-0.2</td><td>-0.9</td><td>1</td><td>0</td></tr></table>

Extended Data Table 1 | Exchange pulses. In order to achieve suficiently high $J _ { \mathrm { o n } } / J _ { \mathrm { o f f } }$ , we use a combination of barrier gate pulses, where we pulse a barrier gate in between the target qubit pair to a more positive voltage and at the same time we pulse the voltage on the barrier gates on the outer side of target qubit pair to a less positive voltage. This pushes the two quantum dots towards each other further enhancing the tunnel coupling.

# SUPPLEMENTARY MATERIALS Universal control of a six qubit quantum processor in silicon

Stephan G.J. Philips∗<sup>1</sup>, Mateusz T. Mądzik<sup>∗1</sup>, Sergey V. Amitonov<sup>1</sup>, Sander L. de Snoo<sup>1</sup>, Maximilian Russ<sup>1</sup>, Nima Kalhor<sup>1</sup>, Christian Volk<sup>1</sup>, William I.L. Lawrie<sup>1</sup>, Delphine Brousse<sup>2</sup>, Larysa Tryputen<sup>2</sup>, Brian Paquelet Wütz<sup>1</sup>, Amir Sammak<sup>2</sup>, Menno Veldhorst<sup>1</sup>, Giordano Scappucci<sup>1</sup>, and Lieven M.K. Vandersypen<sup>†</sup> <sup>1</sup>

<sup>1</sup> QuTech and the Kavli Institute of Nanoscience, Delft University of Technology, 2600 GA Delft, The Netherlands.

<sup>2</sup> QuTech and Netherlands Organization for Applied Scientific Research (TNO), Delft, The Netherlands.

February 18, 2022

## Contents

1 Micromagnet design 2   
2 Different samples tested for this experiment 4   
3 Coherence times and visibilities 5   
4 Calibration log 6 $^{15}$ 5 Sample design 7   
6 Entanglement Witnesses 8   
7 Quantum state tomography 8   
8 Error channels in the experimental data: dephasing and "heating" 9   
8.1 State tomography simulations . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9 $^{20}$ 8.2 Discussion . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10

## 1 Micromagnet design

Most micromagnets used in spin qubit experiments have been designed to support up to 2 to 3 qubits [1, 2, 3]. In this experiment, a suitable gradient was needed across a six-qubit device. A schematic of the micromagnet design, along with the coordinate system is shown in Supplementary Fig. 1. When designing the magnet, we set the following requirements:

• Target Rabi frequency of 5-10 MHz. The higher the driving speed, the more operations can be completed within the coherence time. We limit the target frequency to 10 MHz as we have found the Rabi frequency to become non-linear in the driving amplitude for higher Rabi frequencies (see also ref. [4]). Based on prior experience, this translates to a target gradient in the transverse component of the micromagnet stray field of at least 1 mT/nm.

• All the qubits are driven by a single gate using frequency multiplexing. Overlap in resonance frequencies must thus be avoided. We target a frequency diference of 100 MHz between diferent qubits when the micromagnets are fully magnetized. This value is chosen as it results in an acceptable level of crosstalk when driving the qubits at a Rabi frequency of 5-10 MHz.

• Following [4], we aim at a maximal decoherence gradient $\begin{array} { r } { \big ( \vert \frac { \partial B _ { \mathrm { z } } } { \partial z } \vert + \vert \frac { \partial B _ { \mathrm { z } } } { \partial y } \vert \big ) } \end{array}$ of 0.1 mT/nm. In this way, qubit coherence is not impacted assuming an intrinsic qubit linewidth of $\delta f \sim 1 0 ~ \mathrm { k H z } ^ { \circ } .$ . We report the decoherence gradient calculated at the center of the quantum dot location.

To design the micromagnets, we parametrized a model of the magnets and optimized a number of design parameters (e.g. the magnet-magnet separation, height of the magnets, size and angle of the slanting part and distance from the quantum well). The core of the calculations was based on the python package magpylib [5], which allows for fast analytical solutions of simple magnet geometries (our wrapper can be found at [6]). We assume full magnetization of the micromagnet in our simulations. The result of the optimization is shown in Supplementary Fig. 1 b-f. In panel b-c, one can visually inspect the micromagnet stray magnetic field profile. Panel d-f show line cuts of magnetic properties described above, along the length of the six-qubit array. We are able to satisfy all our design targets.

Supplementary Fig. 1g-i show the measured frequency distributions of the qubits on three samples from diferent fabrication runs. The measured frequency profile for sample A is comparable to the simulated profile of Supplementary Fig. 1d. For samples B and C, the measured frequencies are very diferent than expected based on the simulations. The parabolic trend seen in Sample C (the sample discussed in the main text paper) can be roughly reproduced by assuming that the magnet boundary is displaced. The solid white lines in Supplementary Fig. 1j show the bottom and the top of the magnet, indicating that the micromagnet sidewalls are slightly tilted, which indeed efectively displaces the magnet boundary. When simulating the frequency profile with the black dashed line as the magnet boundary (as a rough approximation), we obtain the profile shown in purple in Supplementary Fig. 1i. The qubit frequencies reported in these plots are reproducible between diferent cooldowns of the same device.

e  
d  
a  
![[assets/figures/references/philips-2022/09222a253644373879f6c5810db17b29d8561a01c8b0a6790a66e8682d6f3ced.jpg]]

![[assets/figures/references/philips-2022/dd047c6f39a7d52845f508670313e921c4e5624daa0ec811cb5323d4a90d534a.jpg]]

![[assets/figures/references/philips-2022/ad295e2cabb8ea8631fda0752830ebfd743dd9453f65fd9f053051c69b8408ab.jpg]]

![[assets/figures/references/philips-2022/afb31c7e82b68f05fe58cca81f10ffb147c74bc1bd932eaf13c9d898ab318111.jpg]]

![[assets/figures/references/philips-2022/e29deca75a7a5bdf52597bd0c5aaa966ef6ff67e6922ef5d09d20d9f750da895.jpg]]

![[assets/figures/references/philips-2022/fdbd37141f992b2debd1bd68801c1eda7f75eff20492cd8a60e578e80165e9ea.jpg]]

![[assets/figures/references/philips-2022/2ca42b9aeba23252b8d8f366f545e3596579e8b43aa62605e55e2a712b5985f9.jpg]]

![[assets/figures/references/philips-2022/882d59a02f8f585b69d6fe07d2f000b4acfd0165a588002c7d8135673638b12a.jpg]]

![[assets/figures/references/philips-2022/53d3abc8aa5f69caec0a516212dba52eeb5e900b60456b658ece3fa52eea0510.jpg]]

![[assets/figures/references/philips-2022/53b7d5ab241f3af3d1588c7f2d93c0dd9251e057cba2fad47f8dd482057fb1a3.jpg]]  
Supplementary Figure 1 | Micromagnet simulations and experimental values ${ \mathbf { a } } ,$ Sketch of the micromagnet structure in 3D. The micromagnets are magnetized along the z direction, with a magnetization vector of $M = ( 0 \mathrm { ~ T ~ } , 0 \mathrm { ~ T ~ } .$ 1.5 T) as estimated from the experiments. The maximum magnetisation is reached in the experiment when 0.1-0.2T external field is applied to the magnets. $\mathbf { b } ,$ Simulation of the total field generated by the micromagnets in the $\mathbf { Z } , \mathbf { y }$ plane, where the quantum dots reside. A projection of the micromagnets is shown by the black lines overlaid in the figure. $\mathbf { c } ,$ Simulation of the total field generated by the micromagnets in the $\mathbf { \delta Z } , \mathbf { X }$ plane. d, Simulated values for the qubit frequencies (without the contribution of the externally applied magnetic field) along the y axis, with the target qubit positions indicated. $\mathbf { e } ,$ Simulated values for the (transverse) driving gradient of the micromagnet $\begin{array} { r } { ( | \frac { \partial B _ { \mathrm { x } } } { \partial z } | + | \frac { \partial B _ { \mathrm { y } } } { \partial z } | ) } \end{array}$ along the $_ \mathrm { y }$ axis, with the target qubit positions indicated. $\mathbf { f } ,$ Simulated values of the decoherence gradient of the micromagnet $\begin{array} { r } { \big ( \vert \frac { \partial B _ { \mathrm { z } } } { \partial z } \vert + \vert \frac { \partial B _ { \mathrm { z } } } { \partial y } \vert \big ) } \end{array}$ along the y axis, with the target qubit positions indicated. $\mathbf { g - i }$ Experimentally measured qubit frequencies for three diferent samples with the same micromagnet design. All frequencies in the plots are taken in reference to one qubit, to clearly display the diference in qubit frequency distribution versus the diferent fields applied to the sample. The simulated curve in panel i is computed assuming the magnet boundary is as indicated by the dashed black line in panel j. j, False colored SEM image of a sample similar to sample C and fabricated in the same fabrication run. The white lines indicates the top and bottom edge of the micromagnet, with inner lines indicating the intended step boundary. The black, dashed line is the average distance between top and bottom edge of the magnets.

2 Diferent samples tested for this experiment

<table><tr><td></td><td>Device A</td><td>Device B</td><td>Device C</td></tr><tr><td></td><td colspan="3">Design</td></tr><tr><td>Number of qubits</td><td>6</td><td>6</td><td>6</td></tr><tr><td>Number of sensing dots</td><td>3</td><td>2</td><td>2</td></tr><tr><td>Access to reservoir from dots</td><td>1, 6</td><td>1, 3, 4, 6</td><td>1, 6</td></tr><tr><td>Dot pitch</td><td>100 nm</td><td>80 nm</td><td>90 nm</td></tr><tr><td>Tuning for sufficient  $t_c$ </td><td>3,1,3,1,3,1</td><td>1,1,1,1,1,1</td><td>1,1,1,1,1,1</td></tr><tr><td>Comment</td><td>Right SD unusable due to faulty source contact</td><td></td><td></td></tr><tr><td></td><td colspan="3">Valley splitting (μeV)</td></tr><tr><td>Dot 1</td><td>160</td><td>118.9</td><td>220</td></tr><tr><td>Dot 2</td><td>130</td><td>160.8</td><td>140</td></tr><tr><td>Dot 3</td><td>0</td><td>113.4</td><td>105</td></tr><tr><td>Dot 4</td><td>173</td><td>160.9</td><td>138</td></tr><tr><td>Dot 5</td><td>-</td><td>56.8</td><td>220</td></tr><tr><td>Dot 6</td><td>-</td><td>148.4</td><td>300</td></tr><tr><td>Comment</td><td>Valley splitting in dot 3 too low for qubit experiments</td><td></td><td></td></tr><tr><td></td><td colspan="3">Dephasing time  $T_2^*(μs)$ </td></tr><tr><td>Dot 1</td><td>12.7</td><td>3.0</td><td>3.0</td></tr><tr><td>Dot 2</td><td>5.5</td><td>3.2</td><td>2.5</td></tr><tr><td>Dot 3</td><td>3.4</td><td>6.0</td><td>3.7</td></tr><tr><td>Dot 4</td><td>7.2</td><td>3.0</td><td>3.7</td></tr><tr><td>Dot 5</td><td>-</td><td>6.5</td><td>5.9</td></tr><tr><td>Dot 6</td><td>-</td><td>6.4</td><td>5.1</td></tr><tr><td></td><td colspan="3">Hahn echo decay time  $T_2^h(μs)$ </td></tr><tr><td>Dot 1</td><td>24.8</td><td>77</td><td>14.0</td></tr><tr><td>Dot 2</td><td>28.1</td><td>47</td><td>21.1</td></tr><tr><td>Dot 3</td><td>-</td><td>75</td><td>40.1</td></tr><tr><td>Dot 4</td><td>26.9</td><td>48</td><td>37.2</td></tr><tr><td>Dot 5</td><td>-</td><td>58</td><td>44.7</td></tr><tr><td>Dot 6</td><td>-</td><td>41</td><td>26.7</td></tr><tr><td></td><td colspan="3">General comment</td></tr><tr><td></td><td>Sample discarded due to low valley splitting in dot 3</td><td>Sample discarded due to low EDSR drive quality</td><td>Sample used in this experiment</td></tr></table>

Supplementary Data Table 1 | Properties of diferent samples tested for this experiment. In the course o this experiment, we have modified the sample design to match the requirements set for 6-qubit control. Device A has been discarded due to the low valley splitting in dot 3. Additionally, we could only use 4 out of 6 quantum dots, due to a failure on the right sensing dot. Due to the 100 nm dot pitch, it was necessary to tune the device to the (3,1,3,1,3,1) charge configuration in order to achieve suficient tunnel coupling $t _ { \mathrm { c } }$ between adjacent dots. Device B allowed for 6-qubit operation, however, the EDSR drive quality was poor, with Rabi oscillations decaying within a few periods. We have used Device C with a 90 nm pitch for the data presented in the main text. The reported valley splittings are measured using magnetospectroscopy. Since there are no reservoirs available in the middle of the device, we measure the valley splitting by performing spectroscopy on the anticrossing between the (2,0) and (1,1) at a relatively low tunnel coupling [7].

![[assets/figures/references/philips-2022/88db68369c8f6042b3ea5989de61363768d442869b6f3b49573b330842400c1b.jpg]]

![[assets/figures/references/philips-2022/58bd2e53f3315009ed1a08d2a2f5de4e021f84f9e00dbcc73a4d3c08a7bb3c45.jpg]]

![[assets/figures/references/philips-2022/52357181f5d8b490c7ea60a91240ed03ec1a1b31b6165ede7c279a8389ba82e3.jpg]]  
Supplementary Figure $\mathbf { 2 } \mid \mathbf { T } _ { 2 } ^ { * } , \mathbf { T } _ { 2 } ^ { h }$ and visibility measurements $\mathbf { a } , \mathrm { T } _ { 2 } ^ { * }$ measurement for each qubit. These measurements were measured without any pre-pulse and are fitted to a Gaussian decay: $\begin{array} { r } { P _ { s } ( t ) = A \mathrm { c o s } ( \omega t + \phi ) \mathrm { e x p } \left( - \frac { t ^ { 2 } } { \mathrm { T } _ { 2 } ^ { * 2 } } \right) + B , } \end{array}$ b $\mathrm { T } _ { 2 } ^ { h }$ measurement for each qubit. These measurements are also performed without any pre-pulse and are fitted using : $\begin{array} { r } { P _ { s } ( t ) = A \mathrm { e x p } \left( - \frac { t ^ { n } } { \mathrm { T } _ { 2 } ^ { h  n } } \right) + B . } \end{array}$ . c, Detailed plots of the Rabi oscillations shown in the main text. The errors contributing to loss of visibility are estimated by eye.

![[assets/figures/references/philips-2022/c2d6ea7b6edd6dbde2cabd90ee74a7c79478b8020ab5a01d16945db4affd9dfd.jpg]]

![[assets/figures/references/philips-2022/25d1ef16e52f4c6478b2571862d89d51cccececa54794024b94e3b6cf97c0cc0.jpg]]

![[assets/figures/references/philips-2022/6bf1675c6c40d2a707e97fc608d9b3335efc3c56545fb97f5eea0bd387f5a530.jpg]]  
Supplementary Figure 3 | Calibration log of the sample during a period of approximately one month. Every data point in the calibration plot represents a result of a calibration measurement a, Calibration results of the sensing dot and readout point. The panels with the blue dots show the calibration results of the optimal operating point of SD1 (top) and SD2 (bottom). The purple dots show the readout point used for the parity readout for dot pair 12 (top) and 56 (bottom). b, Calibration results for the qubit resonance frequency, one plot per qubit. We plotted the deviation from the average resonance frequency. c, Controlled rotation calibration. The calibrated values for the driving frequency and burst duration for $\mathrm { C R O T _ { 2 3 } }$ and $\mathrm { C R O T _ { 4 5 } }$ are shown.

## 5 Sample design

A CAD image of the device design in shown in Supplementary Fig. 4a,b. The samples are designed without a physical mesa. A mesa is often used to prevent leakage at the bondpads where damage by a wirebonder could create a contact to the 2DEG residing below. Instead, we deposit a 200 nm silicon nitride layer underneath the bondpads to prevent leakage to the 2DEG below (Supplementary Fig. 4c). In addition, all the gates in the plunger and barrier gate layer run over a screening gate layer, blocking any current flow between the bondpad and the center of the device, as long as the screening gates are not accumulated (Supplementary Fig. 4d). As a last measure, part of the gate fan-out wiring is reduced to patterned nanowires (Supplementary Fig. 4e), which need higher voltages to accumulate.

We designed an on-chip coplanar waveguide with a characteristic impedance of 50 Ohm to optimize the power delivery of the microwave excitation. For the RF readout, we use a low capacitance design where the readout signal is applied via the source contact [8, 9, 10]. We ensure low parasitic capacitance by placing the source contact close to the center of the device ((Supplementary Fig. 4a)) and wire bond directly to these source contacts. Furthermore, running the accumulation gates over a screening gate prevents the creation of a large capacitance between accumulated 2DEG and the accumulation gate, which helps achieve a good RF readout.

![[assets/figures/references/philips-2022/71e8b61b48eabbb86caedbe89714edab9a270a0c9bd197fd2e63e37dfc8a3486.jpg]]  
Supplementary Figure 4 | Sample design a, CAD image of the sample layout. b, Zoom in of a, showing the active region of the device. c, Silicon nitride (SiN) below the bondpad prevents punch-through of the bondwire to the quantum well. d, Screening gates block current flow below the gates between the bondpads and the active device area. e, Narrow segments of the gates increase the accumulation voltage underneath, and thereby also block current flow underneath.

## 6 Entanglement Witnesses

Entanglement witnesses are an eficient means to check whether a state is entangled. A witness is constructed in such a manner that its expectation value is negative in case the state is entangled. When choosing an entanglement witness, usually one needs to balance the number of operators measured versus the possible states that can be detected. Examples for GHZ states include the optimal, stabilizer and Mermin witness [11]. We choose a witness which requires a few more measurements but is able to detect entanglement across a larger part of the space with entangled states:

$$
W = I I I - \left| \psi_ {\mathrm{GHZ}} \right> \left<   \psi_ {\mathrm{GHZ}} \right|.\tag{1}
$$

This operator can be decomposed into Pauli operators. For three qubits, this results in:

$$
\begin{array}{c}W = \frac {3}{8} \left<   I I I \right> - \frac {1}{8} \left<   I Z Z \right> - \frac {1}{8} \left<   X X X \right> + \frac {1}{8} \left<   X Y Y \right> +\\\frac {1}{8} \left<   Y X Y \right> + \frac {1}{8} \left<   Y Y X \right> - \frac {1}{8} \left<   Z I Z \right> - \frac {1}{8} \left<   Z Z I \right> .\end{array}\tag{2}
$$

We use similar procedures as for the state tomography to remove the SPAM error of the witness operators.

## 7 Quantum state tomography

Quantum state tomography is used to obtain the density matrices for the qubits. We used the maximum likelihood method to obtain the density matrices reported in this paper.

The concept of quantum state tomography is based on the idea that every density matrix can be decomposed in a set of orthogonal basis states (e.g. Pauli basis):

$$
\rho = | \psi \rangle \langle \psi | = \frac {1}{2 ^ {N}} \sum_ {i} ^ {4 ^ {N}} \langle \psi | \hat {V _ {i}} | \psi \rangle \cdot \hat {V _ {i}},\tag{3}
$$

where $\hat { V _ { i } }$ is the $\mathrm { i } ^ { t h }$ basis state. Here $\hat { V _ { i } }$ are of the form $\{ I , X , Y , Z \} ^ { \otimes N }$ , and N is the number of qubits. In the experiment we measure the expectation value $M _ { i }$ of all the possible $\hat { V } _ { i } { ' } \mathrm { s } ; M _ { i } = \langle \psi | V _ { i } | \psi \rangle$ and reconstruct a first estimate of the density matrix using equation 3. To ensure that the obtained density matrix $\rho$ is valid, we take the closest positive semi-definite matrix and ensure that the norm of $\rho$ is one.

The resulting state can be used as input for the Maximum Likelihood Estimation (MLE) [12]. This is procedure to obtain the most likely state for a given set of $M _ { i }$ , using an optimizer for the following cost function:

$$
\sum_ {i} ^ {4 ^ {N}} | M _ {i} - t r (\rho V _ {i}) |\tag{4}
$$

To make this method work well, we use so called $T$ matrices, which is the lower triangular matrix, where every non-zero entry is a variable. The relation to the density matrix is $\rho = T T ^ { \dagger }$ . An initial guess of $T$ is obtained by performing a Cholesky decomposition on the density matrix used as input for MLE.

The fidelity of the estimated density matrix can be further increased by taking into account the readout errors of the system. When measuring an observable, the following matrix can be used to describe the measurement process:

$$
P _ {\mathrm{meas}} = S _ {k} P _ {\mathrm{real}} = \left( \begin{array}{c c} F _ {k, - 1} & 1 - F _ {k, + 1} \\ 1 - F _ {k, - 1} & F _ {k, + 1} \end{array} \right) P _ {\mathrm{real}}\tag{5}
$$

where $P _ { \mathrm { m e a s } }$ are the measured spin spin probabilities for the $\mathrm { k } ^ { t h }$ observable (while we are interested in the real probability amplitudes). $P _ { \mathrm { r e a l } } \dot { F } _ { k , - 1 } ~ ( F _ { k , + 1 } )$ is the corrected for readout error probability to obtain 1 (+1) as measurement outcome for the $k ^ { t h }$ observable. These numbers are derived from the visibility of single-qubit Rabi oscillations such as in main text Fig. 2, but taken with the same initialization and readout sequences as are used in the circuits for preparing the density matrix.

The following observables are measured:

<table><tr><td>k</td><td>observable</td></tr><tr><td>1</td><td>ZIIIIII</td></tr><tr><td>2</td><td>IZIIII</td></tr><tr><td>3</td><td>ZZIIII</td></tr><tr><td>4</td><td>IIZIII</td></tr><tr><td>5</td><td>IIIZII</td></tr><tr><td>6</td><td>IIIZIZI</td></tr><tr><td>7</td><td>IIIZIZ</td></tr><tr><td>8</td><td>IIIZIZZ</td></tr></table>

and have their own associated $S _ { k }$ matrix. We decompose other measurement operators we want to measure into elements of this set, for example ZZZIII is decomposed into a combination of the ZZIIII and IIZIII operators, which we can simultaneously measure. The procedure we would use to generate to expectation value would be give by :

$$
\langle Z Z Z I I I \rangle = \mathrm{Tr} (Z Z \cdot (S _ {3} \otimes S _ {4}) ^ {- 1} \cdot P _ {\mathrm{meas}})\tag{6}
$$

Where $P _ { \mathrm { m e a s } }$ is a vector with the probabilities of the four possible measurement outcomes.

A comment needs to be made on the validity of this approach, as the SPAM errors are most likely spread over initialization and readout. The above method of removing readout errors could then artificially result in faulty results (e.g. expectation values above 1) in specific circumstances. As an example, let us assume that initialization and readout are error-prone for one qubit (Q1) and perfect for the other qubit (Q2). Characterization of SPAM errors would give us a matrix $S _ { 1 }$ with which to correct the measurement outcomes for Q1.

Now consider performing state tomography after running a CNOT or SWAP operation:

$$
\begin{array}{c c c} | Q 1 \rangle & \bullet & \boxed {\times} \\ | Q 2 \rangle & \oplus & \boxed {\times} \end{array}
$$

|<sup>Q1</sup>i

$$
\begin{array}{c c} \times & \boxed {\times} \\ \times & \boxed {\times} \end{array}
$$

In the first case, correction using the matrix $S _ { 1 }$ will accurately remove the SPAM errors from the measured values for Q1. For qubit two, errors have been propagated from Q1, but these errors are not removed by the analysis as there are no SPAM errors on Q2 by itself. In this case, SPAM error removal thus only removes a subset of the errors introduced by SPAM. In the second case, we get for both qubits the wrong results. For Q1 the corrected expectation values could exceed one (which would be non-physical), whereas for Q2 there is no correction even though initialization errors on Q1 have propagated to Q2. In the experiments that are performed in this work, the circuits focus on entangling rather than swapping states. Fo that reason we believe that we do not introduce nonphysical elements by applying the SPAM correction; rather it cannot remove all errors and will tend to worsen the actual fidelity.

## 8 Error channels in the experimental data: dephasing and “heating”

In order to examine the impact of dephasing on the measured density matrices of main text Figs. 4-5, we compare with the results of two numerical simulations performed according to the following methodology.

## 8.1 State tomography simulations

The multi-qubit system is well approximated by the Hamiltonian

$$
H = H _ {\mathrm{Zeeman}} + H _ {\mathrm{Heisenberg}},\tag{7}
$$

consisting of the Zeeman interaction

$$
H _ {\mathrm{Zeeman}} = \sum_ {j = 1} ^ {6} \frac {g _ {j} \mu_ {B}}{2} \boldsymbol {B} _ {j} \cdot \boldsymbol {\sigma} _ {j}\tag{8}
$$

and the isotropic Heisenberg exchange interaction

$$
H _ {\text { Heisenberg }} = \sum_ {\langle j, k \rangle} \frac {J _ {j , k}}{4} \boldsymbol {\sigma} _ {j} \cdot \boldsymbol {\sigma} _ {k}.\tag{9}
$$

Here, $\sigma _ { j }$ is the vector of the Pauli matrices acting on qubit j, $B _ { j } = ( v _ { a c , j } ( t ) ) \partial B _ { x , j } \cos ( 2 \pi f _ { j } ) , 0 , B _ { z , j } ) ^ { T }$ is the combined magnetic field, $\partial B _ { x , j }$ the micromagnet gradient orthogonal to the qubit array axis (expressed in units of Tesla/V), $v _ { a c , j }$ the voltage amplitude applied for driving EDSR, and $J _ { j , k } = J _ { \mathrm { r e s } , j , k } \exp ( 2 \alpha _ { j , k } v _ { B , j , k } ( t ) )$ is the exchange interaction between qubit j and $k ,$ where $J _ { \mathrm { r e s } , j , k }$ is the residual exchange for $v _ { B , j , k } ( t ) ) = 0$ . The sum $\langle j , k \rangle$ runs over all neighboring pairs in the linear array.

For the numerical simulations, we solve the time-dependent Schrödinger equation

$$
i \hbar \frac {d}{d t} | \psi (t) \rangle = H | \psi (t) \rangle\tag{10}
$$

by discretizing $H ( t + \Delta t )$ into segments of length $\Delta t$ taking $H ( t )$ constant in the time-interval $[ t , t + \Delta t ]$ . We compute the unitary propagator according to

$$
U (t + \Delta t) = e ^ {- \frac {i}{\hbar} H (t + \Delta t)} U (t),\tag{11}
$$

where $\hbar = h / ( 2 \pi )$ is the reduced Planck constant. The simulations are performed in the multiply rotating frame which removes the Larmor precession of each qubit around the average external magnetic field $\textstyle \sum _ { j = 1 } ^ { N } B _ { z , j } / N$ . By making the so-called rotating wave approximation (RWA) we neglect counter-rotating terms such that we can choose $\Delta t = 1 0$ ps as a suficiently small time step.

The simulated GHZ states are the final states $\rho _ { f } = U _ { f } \rho _ { \mathrm { i n i t } } U _ { f } ^ { \dagger }$ obtained by applying the pulse sequence of main text Fig. 5a to the ideal input state $\rho _ { \mathrm { i n i t } }$ (here $U _ { f }$ is shorthand for the product of the successively applied unitary operations). For simplicity each GHZ simulation is performed on the subspace of only the involved qubits, motivated by the small residual exchange to the other qubits.

Low-frequency noise is included in the simulation via quasistatic fluctuations $H _ { \mathrm { Z e e m a n } }  H _ { \mathrm { Z e e m a n } } + \sum \xi _ { J } \sigma _ { z , j }$ and averaging the final result over 5000 random initializations. Here $\xi _ { J }$ are Gaussian stochastic variables with mean $\langle \xi _ { J } \rangle = 0$ and variance $\langle \xi _ { J } ^ { 2 } \rangle = h ^ { 2 } / 2 ( \pi \mathrm { T } _ { 2 , j } ^ { * } ) ^ { 2 }$

## 8.2 Discussion

In the tables below we present a comparison of the experimental results (RAW data: without SPAM error removal; Processed data: with SPAM error removal) to the outcomes of the two simulations with diferent input parameters. The first simulation uses the $\mathrm { T _ { 2 } ^ { * } }$ values from the table in main text Fig. 2e. The second simulation takes the $\mathrm { T _ { 2 } ^ { * } }$ values obtained after a 4 µs microwave bursts applied of-resonance before the pulse sequence used to measure $\mathrm { T _ { 2 } ^ { * } }$ . We find systematically that such a prepulse causes both a shift in the qubit frequency and a reduction in $\mathrm { T _ { 2 } ^ { * } }$ , by amounts that depend on the microwave burst duration and power (see Extended Data Fig. 7). In the actual experiments, prepulses shorter than 4 µs are used, to strike a balance between saturating the frequency shift and not reducing T∗<sub>2</sub> too much. We can thus expect that dephasing reduces the of-diagonal elements in the measured density matrices of Fig. 4-5 by an amount that lies in between the case of the two simulations, with the shorter and longer sets of $\mathrm { T _ { 2 } ^ { * } }$ values. Furthermore, the longer the state preparation sequence, the shorter the resulting T∗, which is consistent with the fact that the of-diagonal entries are lower for the GHZ states of qubits 2-4 and 3-5 than for GHZ states of qubits 1-3 or 4-6.

The diagonal entries deviate most from the ideal expectation for the GHZ states involving qubits 2-4 and 3-5. State preparation of qubits 1-3 or qubits 4-6 by itself works very well, but we find consistently that state preparation of qubits 4-6 is somewhat degraded when it follows state preparation of qubits 1-3 (see Extended Data Fig. 3), and vice versa. In the simulations we assume perfect initial states in order to probe only the efects of dephasing.

Finally, the qubit frequency shifts from the prepulses and the pulses applied during state preparation lead to reproducible phase shifts seen in the experimentally prepared GHZ states, deviating from the ideal GHZ state $( | 0 0 0 \rangle + | 1 1 1 \rangle ) / \sqrt { 2 }$

The frequency shifts and reduced dephasing times generally bear signatures of heating, as in previous reports [13, 14]. Their microscopic origin is at present not well understood.

Generally, we find that the reduced coherence times in the second simulation provides us with state fidelities closely resembling the experimental data after SPAM removal. We neglect the non-ideal phase component in the experimental data when making this comparison, as we have omitted frequency shits and virtual-Z gates in our simulation.

Qubits 12

<table><tr><td></td><td colspan="4">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw data</td><td colspan="4"> $\begin{pmatrix} 0.46e^{0.0i} & 0.047e^{-1.989i} & 0.063e^{1.827i} & 0.414e^{-0.0i} \\ 0.047e^{1.989i} & 0.034e^{0.0i} & 0.02e^{-0.016i} & 0.018e^{-2.087i} \\ 0.063e^{-1.827i} & 0.02e^{0.016i} & 0.03e^{0.0i} & 0.104e^{-1.708i} \\ 0.414e^{0.0i} & 0.018e^{2.087i} & 0.104e^{1.708i} & 0.476e^{0.0i} \end{pmatrix}$ </td><td>88.2%</td></tr><tr><td>Processed data</td><td colspan="4"> $\begin{pmatrix} 0.461e^{0.0i} & 0.046e^{-2.008i} & 0.07e^{1.814i} & 0.424e^{0.001i} \\ 0.046e^{2.008i} & 0.03e^{0.0i} & 0.016e^{-0.052i} & 0.013e^{-2.489i} \\ 0.07e^{-1.814i} & 0.016e^{0.052i} & 0.03e^{0.0i} & 0.106e^{-1.721i} \\ 0.424e^{-0.001i} & 0.013e^{2.489i} & 0.106e^{1.721i} & 0.479e^{0.0i} \end{pmatrix}$ </td><td>89.4%</td></tr><tr><td>Full T2* simulation</td><td colspan="4"> $\begin{pmatrix} 0.502e^{0.0i} & 0.004e^{1.455i} & 0.017e^{-2.195i} & 0.468e^{-0.096i} \\ 0.004e^{-1.455i} & 0.004e^{-0.0i} & 0.003e^{0.095i} & 0.005e^{-1.923i} \\ 0.017e^{2.195i} & 0.003e^{-0.095i} & 0.004e^{0.0i} & 0.017e^{2.172i} \\ 0.468e^{0.096i} & 0.005e^{1.923i} & 0.017e^{-2.172i} & 0.49e^{-0.0i} \end{pmatrix}$ </td><td>96.2%</td></tr><tr><td>Reduced T2* simulation</td><td colspan="4"> $\begin{pmatrix} 0.499e^{0.0i} & 0.003e^{1.687i} & 0.017e^{-2.074i} & 0.405e^{-0.093i} \\ 0.003e^{-1.687i} & 0.009e^{0.0i} & 0.007e^{0.073i} & 0.005e^{-2.411i} \\ 0.017e^{2.074i} & 0.007e^{-0.073i} & 0.01e^{0.0i} & 0.015e^{2.118i} \\ 0.405e^{0.093i} & 0.005e^{2.411i} & 0.015e^{-2.118i} & 0.483e^{0.0i} \end{pmatrix}$ </td><td>89.4%</td></tr></table>

Supplementary Data Table 2 | Experimental vs simulated state tomography for qubits 12

Qubits 23

<table><tr><td></td><td colspan="4">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw data</td><td></td><td></td><td></td><td></td><td>83.8%</td></tr><tr><td>Processed data</td><td></td><td></td><td></td><td></td><td>90.4%</td></tr><tr><td>Full  $T_2^*$  simulation</td><td></td><td></td><td></td><td></td><td>96.1%</td></tr><tr><td>Reduced  $T_2^*$  simulation</td><td></td><td></td><td></td><td></td><td>88.8%</td></tr></table>

Supplementary Data Table 3 | Experimental vs simulated state tomography for qubits 23

Qubits 34

<table><tr><td></td><td colspan="4">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw data</td><td colspan="4"> $\begin{pmatrix} 0.149e^{0.0i} & 0.04e^{1.2i} & 0.055e^{-0.241i} & 0.025e^{1.213i} \\ 0.04e^{-1.2i} & 0.395e^{0.0i} & 0.377e^{-0.173i} & 0.104e^{-1.446i} \\ 0.055e^{0.241i} & 0.377e^{0.173i} & 0.424e^{0.0i} & 0.092e^{-1.393i} \\ 0.025e^{-1.213i} & 0.104e^{1.446i} & 0.092e^{1.393i} & 0.032e^{0.0i} \end{pmatrix}$ </td><td>78.0%</td></tr><tr><td>Processed data</td><td colspan="4"> $\begin{pmatrix} 0.072e^{0.0i} & 0.048e^{0.805i} & 0.055e^{0.08i} & 0.009e^{0.598i} \\ 0.048e^{-0.805i} & 0.434e^{0.0i} & 0.444e^{-0.182i} & 0.105e^{-1.531i} \\ 0.055e^{-0.08i} & 0.444e^{0.182i} & 0.466e^{0.0i} & 0.103e^{-1.389i} \\ 0.009e^{-0.598i} & 0.105e^{1.531i} & 0.103e^{1.389i} & 0.028e^{0.0i} \end{pmatrix}$ </td><td>88.6%</td></tr><tr><td>Full T2* simulation</td><td colspan="4"> $\begin{pmatrix} 0.004e^{0.0i} & 0.017e^{-0.771i} & 0.017e^{-1.079i} & 0.003e^{0.014i} \\ 0.017e^{0.771i} & 0.49e^{0.0i} & 0.485e^{-0.264i} & 0.003e^{0.832i} \\ 0.017e^{1.079i} & 0.485e^{0.264i} & 0.503e^{0.0i} & 0.003e^{1.344i} \\ 0.003e^{-0.014i} & 0.003e^{-0.832i} & 0.003e^{-1.344i} & 0.003e^{0.0i} \end{pmatrix}$ </td><td>96.5%</td></tr><tr><td>Reduced T2* simulation</td><td colspan="4"> $\begin{pmatrix} 0.009e^{-0.0i} & 0.014e^{-0.723i} & 0.015e^{-1.134i} & 0.007e^{-0.002i} \\ 0.014e^{0.723i} & 0.485e^{0.0i} & 0.429e^{-0.261i} & 0.004e^{0.255i} \\ 0.015e^{1.134i} & 0.429e^{0.261i} & 0.499e^{0.0i} & 0.002e^{0.823i} \\ 0.007e^{0.002i} & 0.004e^{-0.256i} & 0.002e^{-0.827i} & 0.008e^{-0.0i} \end{pmatrix}$ </td><td>90.6%</td></tr></table>

Supplementary Data Table 4 | Experimental vs simulated state tomography for qubits 34

Qubits 45

<table><tr><td></td><td colspan="4">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw data</td><td colspan="4"> $\begin{pmatrix} 0.049e^{0.0i} & 0.026e^{-3.07i} & 0.035e^{-2.819i} & 0.012e^{-1.345i} \\ 0.026e^{3.07i} & 0.469e^{0.0i} & 0.444e^{-0.125i} & 0.033e^{-0.174i} \\ 0.035e^{2.819i} & 0.444e^{0.125i} & 0.476e^{0.0i} & 0.037e^{0.005i} \\ 0.012e^{1.345i} & 0.033e^{0.174i} & 0.037e^{-0.005i} & 0.006e^{0.0i} \end{pmatrix}$ </td><td>91.3%</td></tr><tr><td>Processed data</td><td colspan="4"> $\begin{pmatrix} 0.025e^{0.0i} & 0.028e^{-3.057i} & 0.037e^{-2.829i} & 0.006e^{-1.595i} \\ 0.028e^{3.057i} & 0.481e^{0.0i} & 0.481e^{-0.125i} & 0.036e^{-0.181i} \\ 0.037e^{2.829i} & 0.481e^{0.125i} & 0.489e^{0.0i} & 0.038e^{0.027i} \\ 0.006e^{1.595i} & 0.036e^{0.181i} & 0.038e^{-0.027i} & 0.005e^{0.0i} \end{pmatrix}$ </td><td>96.2%</td></tr><tr><td>Full  $T_2^*$  simulation</td><td colspan="4"> $\begin{pmatrix} 0.002e^{0.0i} & 0.008e^{0.103i} & 0.007e^{0.12i} & 0.002e^{-0.152i} \\ 0.008e^{-0.103i} & 0.491e^{0.0i} & 0.493e^{-0.005i} & 0.015e^{-1.539i} \\ 0.007e^{-0.12i} & 0.493e^{0.005i} & 0.505e^{0.0i} & 0.016e^{-1.596i} \\ 0.002e^{0.152i} & 0.015e^{1.539i} & 0.016e^{1.596i} & 0.002e^{0.0i} \end{pmatrix}$ </td><td>99.2%</td></tr><tr><td>Reduced  $T_2^*$  simulation</td><td colspan="4"> $\begin{pmatrix} 0.009e^{0.0i} & 0.009e^{0.122i} & 0.004e^{0.402i} & 0.009e^{-0.032i} \\ 0.009e^{-0.122i} & 0.483e^{0.0i} & 0.472e^{-0.008i} & 0.016e^{-1.255i} \\ 0.004e^{-0.402i} & 0.472e^{0.008i} & 0.498e^{-0.0i} & 0.015e^{-1.611i} \\ 0.009e^{0.032i} & 0.016e^{1.255i} & 0.015e^{1.611i} & 0.01e^{0.0i} \end{pmatrix}$ </td><td>96.3%</td></tr></table>

Supplementary Data Table 5 | Experimental vs simulated state tomography for qubits 45

Qubits 56

<table><tr><td></td><td colspan="4">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw data</td><td colspan="4"> $\begin{pmatrix} 0.471e^{0.0i} & 0.031e^{0.392i} & 0.023e^{0.785i} & 0.442e^{-1.471i} \\ 0.031e^{-0.392i} & 0.03e^{0.0i} & 0.014e^{-2.554i} & 0.01e^{-2.85i} \\ 0.023e^{-0.785i} & 0.014e^{2.554i} & 0.024e^{0.0i} & 0.035e^{-1.983i} \\ 0.442e^{1.471i} & 0.01e^{2.85i} & 0.035e^{1.983i} & 0.475e^{0.0i} \end{pmatrix}$ </td><td>91.3%</td></tr><tr><td>Processed data</td><td colspan="4"> $\begin{pmatrix} 0.481e^{0.0i} & 0.032e^{0.322i} & 0.023e^{0.723i} & 0.464e^{-1.472i} \\ 0.032e^{-0.322i} & 0.021e^{0.0i} & 0.012e^{-2.715i} & 0.012e^{-2.715i} \\ 0.023e^{-0.723i} & 0.012e^{2.715i} & 0.012e^{0.0i} & 0.038e^{-1.976i} \\ 0.464e^{1.472i} & 0.012e^{2.715i} & 0.038e^{1.976i} & 0.486e^{0.0i} \end{pmatrix}$ </td><td>94.6%</td></tr><tr><td>Full  $T_2^*$  simulation</td><td colspan="4"> $\begin{pmatrix} 0.486e^{0.0i} & 0.022e^{1.851i} & 0.004e^{2.973i} & 0.49e^{-1.525i} \\ 0.022e^{-1.851i} & 0.002e^{0.0i} & 0.001e^{-1.495i} & 0.023e^{2.942i} \\ 0.004e^{-2.973i} & 0.001e^{1.495i} & 0.001e^{0.0i} & 0.004e^{1.595i} \\ 0.49e^{1.525i} & 0.023e^{-2.942i} & 0.004e^{-1.595i} & 0.51e^{0.0i} \end{pmatrix}$ </td><td>98.7%</td></tr><tr><td>Reduced  $T_2^*$  simulation</td><td colspan="4"> $\begin{pmatrix} 0.483e^{0.0i} & 0.022e^{1.861i} & 0.005e^{2.481i} & 0.47e^{-1.532i} \\ 0.022e^{-1.861i} & 0.006e^{0.0i} & 0.005e^{-1.526i} & 0.022e^{3.038i} \\ 0.005e^{-2.481i} & 0.005e^{1.526i} & 0.005e^{-0.0i} & 0.004e^{1.576i} \\ 0.47e^{1.532i} & 0.022e^{-3.038i} & 0.004e^{-1.576i} & 0.506e^{0.0i} \end{pmatrix}$ </td><td>96.4%</td></tr></table>

<table><tr><td></td><td colspan="8">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw</td><td> $\begin{pmatrix} 0.397e^{0.0i} & 0.086e^{-1.097i} & 0.063e^{0.258i} & 0.019e^{0.66i} & 0.014e^{2.445i} & 0.02e^{1.085i} & 0.031e^{-1.891i} & 0.273e^{-2.422i} \\ 0.086e^{1.097i} & 0.073e^{0.0i} & 0.029e^{1.785i} & 0.026e^{2.629i} & 0.002e^{2.976i} & 0.009e^{1.871i} & 0.011e^{-1.89i} & 0.073e^{-1.506i} \\ 0.063e^{-0.258i} & 0.029e^{-1.785i} & 0.036e^{0.0i} & 0.005e^{-0.253i} & 0.007e^{1.466i} & 0.01e^{-0.216i} & 0.007e^{0.719i} & 0.007e^{-2.843i} \\ 0.019e^{-0.66i} & 0.026e^{-2.629i} & 0.005e^{0.253i} & 0.019e^{-0.0i} & 0.003e^{-0.266i} & 0.01e^{2.866i} & 0.012e^{0.104i} & 0.025e^{1.939i} \\ 0.014e^{-2.445i} & 0.002e^{-2.976i} & 0.007e^{-1.466i} & 0.003e^{0.266i} & 0.019e^{0.0i} & 0.006e^{-1.548i} & 0.033e^{-0.018i} & 0.004e^{2.072i} \\ 0.02e^{-1.085i} & 0.009e^{-1.871i} & 0.01e^{0.216i} & 0.01e^{-2.866i} & 0.006e^{1.548i} & 0.038e^{0.0i} & 0.021e^{2.329i} & 0.051e^{-2.922i} \\ 0.031e^{1.891i} & 0.011e^{1.89i} & 0.007e^{-0.719i} & 0.012e^{-0.104i} & 0.033e^{0.018i} & 0.021e^{-2.329i} & 0.075e^{0.0i} & 0.036e^{0.225i} \\ 0.273e^{2.422i} & 0.073e^{1.506i} & 0.007e^{2.843i} & 0.025e^{-1.939i} & 0.004e^{-2.072i} & 0.051e^{2.922i} & 0.036e^{-0.225i} & 0.343e^{0.0i} \end{pmatrix}$ </td><td>64.3%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Proc. data</td><td> $\begin{pmatrix} 0.446e^{-0.0i} & 0.097e^{-1.031i} & 0.073e^{0.283i} & 0.029e^{0.896i} & 0.027e^{-2.833i} & 0.023e^{1.295i} & 0.042e^{-2.219i} & 0.348e^{-2.419i} \\ 0.097e^{1.031i} & 0.023e^{-0.0i} & 0.016e^{1.478i} & 0.007e^{1.982i} & 0.009e^{-2.083i} & 0.007e^{2.616i} & 0.01e^{-1.553i} & 0.075e^{-1.427i} \\ 0.073e^{-0.283i} & 0.016e^{-1.478i} & 0.025e^{-0.0i} & 0.002e^{-0.007i} & 0.008e^{3.012i} & 0.003e^{0.796i} & 0.007e^{-2.201i} & 0.029e^{-2.789i} \\ 0.029e^{-0.896i} & 0.007e^{-1.982i} & 0.002e^{0.007i} & 0.005e^{0.0i} & 0.004e^{0.1i} & 0.002e^{-2.748i} & 0.006e^{0.066i} & 0.027e^{2.74i} \\ 0.027e^{2.833i} & 0.009e^{2.083i} & 0.008e^{-3.012i} & 0.004e^{-0.1i} & 0.017e^{-0.0i} & 0.009e^{-1.125i} & 0.02e^{0.235i} & 0.013e^{0.849i} \\ 0.023e^{-1.295i} & 0.007e^{-2.616i} & 0.003e^{-0.796i} & 0.002e^{2.748i} & 0.009e^{1.125i} & 0.046e^{0.0i} & 0.026e^{2.394i} & 0.067e^{-3.039i} \\ 0.042e^{2.219i} & 0.01e^{1.553i} & 0.007e^{2.201i} & 0.006e^{-0.066i} & 0.02e^{-0.235i} & 0.026e^{-2.394i} & 0.04e^{-0.0i} & 0.054e^{0.474i} \\ 0.348e^{2.419i} & 0.075e^{1.427i} & 0.029e^{2.789i} & 0.027e^{-2.74i} & 0.013e^{-0.849i} & 0.067e^{3.039i} & 0.054e^{-0.474i} & 0.399e^{-0.0i} \end{pmatrix}$ </td><td>77.0%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Full T2* sim.</td><td> $\begin{pmatrix} 0.493e^{-0.0i} & 0.001e^{-1.982i} & 0.002e^{-0.351i} & 0.053e^{-2.604i} & 0.019e^{-1.276i} & 0.0e^{-0.658i} & 0.011e^{0.76i} & 0.396e^{-1.53i} \\ 0.001e^{1.982i} & 0.001e^{0.0i} & 0.0e^{0.476i} & 0.0e^{-0.572i} & 0.0e^{0.062i} & 0.0e^{-1.265i} & 0.001e^{1.531i} & 0.0e^{1.451i} \\ 0.002e^{0.351i} & 0.0e^{-0.476i} & 0.0e^{0.0i} & 0.0e^{-2.35i} & 0.0e^{-1.02i} & 0.0e^{-1.77i} & 0.0e^{1.501i} & 0.001e^{-0.814i} \\ 0.053e^{2.604i} & 0.0e^{0.572i} & 0.0e^{2.35i} & 0.017e^{0.0i} & 0.011e^{1.3i} & 0.0e^{2.095i} & 0.001e^{-2.416i} & 0.043e^{1.491i} \\ 0.019e^{1.276i} & 0.0e^{-0.062i} & 0.0e^{1.02i} & 0.011e^{-1.3i} & 0.012e^{0.0i} & 0.0e^{-1.003i} & 0.001e^{2.965i} & 0.026e^{0.633i} \\ 0.0e^{0.658i} & 0.0e^{1.265i} & 0.0e^{1.77i} & 0.0e^{-2.095i} & 0.0e^{1.003i} & 0.0e^{0.0i} & 0.0e^{-2.634i} & 0.0e^{-0.848i} \\ 0.011e^{-0.76i} & 0.001e^{-1.531i} & 0.0e^{-1.501i} & 0.001e^{2.416i} & 0.001e^{-2.965i} & 0.0e^{2.634i} & 0.002e^{0.0i} & 0.013e^{-2.335i} \\ 0.396e^{1.53i} & 0.0e^{-1.451i} & 0.001e^{0.814i} & 0.043e^{-1.491i} & 0.026e^{-0.633i} & 0.0e^{0.848i} & 0.013e^{2.335i} & 0.474e^{-0.0i} \end{pmatrix}$ </td><td>87.9%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Red. T2* sim.</td><td> $\begin{pmatrix} 0.466e^{0.0i} & 0.003e^{-0.999i} & 0.002e^{0.256i} & 0.069e^{-2.041i} & 0.011e^{-1.024i} & 0.0e^{-0.8i} & 0.008e^{0.82i} & 0.277e^{-1.565i} \\ 0.003e^{0.999i} & 0.004e^{-0.0i} & 0.001e^{1.009i} & 0.0e^{-2.306i} & 0.0e^{-0.363i} & 0.0e^{-0.942i} & 0.002e^{1.507i} & 0.001e^{-1.168i} \\ 0.002e^{-0.256i} & 0.001e^{-1.009i} & 0.0e^{0.0i} & 0.001e^{-2.491i} & 0.001e^{-1.231i} & 0.0e^{-1.847i} & 0.0e^{1.574i} & 0.001e^{-0.912i} \\ 0.069e^{2.041i} & 0.0e^{2.306i} & 0.001e^{2.491i} & 0.041e^{0.0i} & 0.018e^{1.232i} & 0.0e^{1.362i} & 0.001e^{-2.064i} & 0.029e^{1.494i} \\ 0.011e^{1.024i} & 0.0e^{0.363i} & 0.001e^{1.231i} & 0.018e^{-1.232i} & 0.036e^{0.0i} & 0.0e^{-0.915i} & 0.002e^{-2.666i} & 0.053e^{1.266i} \\ 0.0e^{0.8i} & 0.0e^{0.942i} & 0.0e^{1.847i} & 0.0e^{-1.362i} & 0.0e^{0.915i} & 0.0e^{-0.0i} & 0.0e^{-1.978i} & 0.0e^{-0.039i} \\ 0.008e^{-0.82i} & 0.002e^{-1.507i} & 0.0e^{-1.574i} & 0.001e^{2.064i} & 0.002e^{2.666i} & 0.0e^{1.978i} & 0.004e^{0.0i} & 0.013e^{-2.489i} \\ 0.277e^{1.565i} & 0.001e^{1.168i} & 0.001e^{0.912i} & 0.029e^{-1.494i} & 0.053e^{-1.266i} & 0.0e^{0.039i} & 0.013e^{2.489i} & 0.448e^{-0.0i} \end{pmatrix}$ </td><td>73.4%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

Supplementary Data Table 6 | Experimental vs simulated state tomography for qubits 56  
Qubits 123  
Supplementary Data Table 7 | Experimental vs simulated state tomography for qubits 123

Qubits 234

$$
0. 0 4 e ^ {- 0. 3 0 6 i}
$$

$$
\begin{array}{c} 0. 0 4 e \\ 0. 0 2 5 e ^ {1. 3 6 5 i} \end{array}
$$

$$
0. 0 4 e ^ {- 0. 0 i}
$$

$$
0. 0 0 7 e ^ {1. 5 7 1 i}
$$

$$
0. 0 1 e ^ {- 3. 0 4 2 i}
$$

$$
0. 0 1 e ^ {3. 0 4 2 i}
$$

$$
0. 0 0 3 e ^ {- 1. 2 4 9 i}
$$

$$
0. 0 2 7 e ^ {- 0. 0 i}
$$

$$
0. 0 0 7 e ^ {- 2. 8 6 3 i}
$$

$$
0. 0 0 7 e ^ {2. 8 6 3 i}
$$

$$
0. 0 3 3 e ^ {0. 0 i}
$$

$$
0. 0 0 4 e ^ {- 0. 0 i}
$$

$$
0. 0 0 7 e ^ {0. 4 6 4 i}
$$

$$
0. 0 0 3 e ^ {0. 7 8 5 i}
$$

$$
0. 0 3 1 e ^ {2. 4 9 2 i}
$$

$$
0. 1 1 7 e ^ {- 1. 2 1 4 i}
$$

$$
0. 0 0 4 e ^ {0. 0 i}
$$

$$
0. 0 1 4 e ^ {3. 1 4 2 i}
$$

$$
0. 0 1 4 e ^ {- 3. 1 4 2 i}
$$

$$
0. 0 2 1 e ^ {2. 2 5 3 i}
$$

$$
0. 0 0 7 e ^ {0. 9 8 3 i}
$$

$$
0. 0 1 7 e ^ {- 1. 6 8 8 i}
$$

$$
0. 0 0 2 e ^ {1. 5 7 1 i}
$$

$$
0. 0 2 4 e ^ {- 0. 1 6 5 i}
$$

$$
0. 0 1 4 e ^ {2. 5 5 4 i}
$$

$$
0. 0 0 3 e ^ {- 0. 7 8 5 i}
$$

$$
0. 0 7 e ^ {0. 0 i}
$$

$$
0. 0 2 1 e ^ {- 2. 2 5 3 i}
$$

$$
0. 0 1 7 e ^ {1. 6 8 8 i}
$$

$$
0. 0 2 1 e ^ {2. 3 2 2 i}
$$

$$
0. 0 2 1 e ^ {- 2. 3 2 2 i}
$$

$$
0. 0 0 7 e ^ {- 0. 9 8 3 i}
$$

$$
0. 0 3 1 e ^ {- 0. 0 i}
$$

$$
0. 0 1 2 e ^ {- 0. 4 2 7 i}
$$

$$
0. 0 1 2 e ^ {0. 4 2 7 i}
$$

$$
0. 0 1 e ^ {0. 1 9 7 i}
$$

$$
0. 0 2 4 e ^ {0. 1 6 5 i}
$$

$$
0. 0 7 5 e ^ {2. 2 7 1 i}
$$

$$
0. 0 6 8 e ^ {- 2. 8 4 3 i}
$$

$$
0. 2 6 5 e ^ {0. 0 i}
$$

$$
0. 0 5 1 e ^ {0. 2 3 6 i}
$$

$$
0. 0 3 4 e ^ {- 1. 2 6 8 i}
$$

$$
0. 1 3 9 e ^ {1. 3 6 1 i}
$$

$$
0. 0 2 1 e ^ {- 2. 4 5 9 i}
$$

$$
0. 0 5 8 e ^ {2. 6 9 3 i}
$$

$$
0. 0 0 1 e ^ {- 0. 0 i}
$$

$$
0. 0 1 8 e ^ {1. 1 8 i}
$$

$$
0. 0 3 4 e ^ {1. 2 6 8 i}
$$

$$
0. 0 1 9 e ^ {2. 3 9 3 i}
$$

$$
0. 0 0 3 e ^ {1. 8 9 3 i}
$$

$$
0. 0 0 3 e ^ {0. 0 i}
$$

$$
0. 0 0 2 e ^ {2. 6 7 8 i}
$$

$$
0. 0 0 4 e ^ {3. 1 4 2 i}
$$

$$
0. 0 0 1 e ^ {0. 7 8 5 i}
$$

$$
0. 0 0 1 e ^ {0. 0 i}
$$

$$
0. 0 0 5 e ^ {- 0. 0 i}
$$

$$
0. 0 0 5 e ^ {- 0. 9 2 7 i}
$$

$$
0. 0 2 7 e ^ {1. 9 1 6 i}
$$

$$
0. 1 3 9 e ^ {- 1. 3 6 1 i}
$$

$$
0. 0 1 8 e ^ {- 1. 1 8 i}
$$

$$
0. 0 0 4 e ^ {- 3. 1 4 2 i}
$$

$$
0. 0 1 3 e ^ {- 2. 6 4 2 i}
$$

$$
0. 0 6 8 e ^ {- 0. 0 i}
$$

$$
0. 0 2 8 e ^ {- 0. 0 7 1 i}
$$

$$
0. 0 1 6 e ^ {2. 3 1 3 i}
$$

$$
0. 0 0 4 e ^ {2. 6 7 8 i}
$$

$$
0. 0 0 4 e ^ {1. 3 2 6 i}
$$

$$
0. 0 4 2 e ^ {1. 0 2 2 i}
$$

$$
0. 0 5 8 e ^ {- 2. 6 9 3 i}
$$

$$
0. 0 0 5 e ^ {0. 9 2 7 i}
$$

$$
0. 0 0 8 e ^ {2. 8 9 7 i}
$$

$$
0. 0 3 2 e ^ {0. 4 9 2 i}
$$

$$
0. 0 4 5 e ^ {0. 0 i}
$$

$$
0. 0 2 8 e ^ {0. 0 7 1 i}
$$

$$
0. 0 2 6 e ^ {- 1. 5 3 2 i}
$$

$$
0. 0 8 e ^ {2. 9 0 3 i}
$$

$$
0. 5 0 1 e ^ {0. 0 i}
$$

$$
0. 0 0 2 e ^ {- 2. 3 1 1 i}
$$

$$
0. 0 e ^ {2. 8 7 2 i}
$$

$$
0. 0 0 2 e ^ {2. 3 1 1 i}
$$

$$
0. 0 1 2 e ^ {- 2. 5 9 6 i}
$$

$$
0. 0 0 9 e ^ {- 0. 0 5 8 i}
$$

$$
0. 0 0 3 e ^ {0. 0 i}
$$

$$
0. 3 0 5 e ^ {0. 0 i}
$$

$$
0. 0 e ^ {0. 7 6 1 i}
$$

$$
0. 0 0 1 e ^ {1. 7 8 4 i}
$$

$$
0. 0 1 1 e ^ {0. 9 9 2 i}
$$

$$
0. 0 e ^ {- 2. 8 9 9 i}
$$

$$
0. 0 e ^ {- 2. 0 4 7 i}
$$

$$
0. 0 e ^ {- 2. 8 7 2 i}
$$

$$
0. 0 e ^ {- 0. 2 1 2 i}
$$

$$
0. 4 0 1 e ^ {- 1. 6 2 1 i}
$$

$$
0. 0 e ^ {- 0. 7 6 1 i}
$$

$$
0. 0 e ^ {- 0. 0 i}
$$

$$
0. 0 0 3 e ^ {1. 7 9 2 i}
$$

$$
0. 0 e ^ {- 2. 7 4 2 i}
$$

$$
0. 0 0 1 e ^ {1. 3 9 9 i}
$$

$$
0. 0 e ^ {1. 5 4 9 i}
$$

$$
0. 0 1 2 e ^ {2. 5 9 6 i}
$$

$$
0. 0 e ^ {2. 8 9 9 i}
$$

$$
\mathrm{T} _ {2} ^ {*}
$$

$$
0. 0 e ^ {2. 7 4 2 i}
$$

$$
0. 0 e ^ {1. 4 5 i}
$$

$$
0. 0 e ^ {- 1. 9 9 i}
$$

$$
0. 0 0 2 e ^ {- 0. 0 i}
$$

$$
0. 0 e ^ {1. 9 1 i}
$$

$$
0. 0 e ^ {1. 4 4 i}
$$

$$
0. 0 e ^ {0. 2 1 2 i}
$$

$$
0. 0 0 1 e ^ {- 1. 7 8 4 i}
$$

$$
0. 0 0 5 e ^ {- 1. 5 2 7 i}
$$

$$
0. 0 0 3 e ^ {- 1. 7 9 2 i}
$$

$$
\begin{array}{c} 0. 0 e ^ {1. 5 6 1 i} \\ 0. 0 e ^ {1. 9 9 i} \end{array}
$$

$$
0. 0 e ^ {- 1. 9 1 i}
$$

$$
0. 0 e ^ {- 1. 5 4 9 i}
$$

$$
0. 4 0 1 e ^ {1. 6 2 1 i}
$$

$$
0. 0 e ^ {- 1. 4 4 i}
$$

$$
0. 0 e ^ {- 1. 4 5 6 i}
$$

$$
0. 0 0 9 e ^ {- 1. 5 3 2 i}
$$

$$
0. 0 e ^ {- 1. 5 9 6 i}
$$

$$
0. 0 0 4 e ^ {0. 0 i}
$$

$$
0. 0 0 5 e ^ {1. 5 2 7 i}
$$

$$
0. 0 0 1 e ^ {- 2. 8 8 2 i}
$$

$$
0. 4 8 6 e ^ {0. 0 i}
$$

$$
\overline {{0 . 0 e ^ {2 . 5 1 7 i}}}
$$

$$
0. 0 1 3 e ^ {2. 6 6 9 i}
$$

$$
0. 4 8 9 e ^ {0. 0 i}
$$

$$
0. 0 0 7 e ^ {0. 0 0 7 i}
$$

$$
0. 0 0 8 e ^ {1. 9 4 4 i}
$$

$$
0. 0 1 7 e ^ {- 0. 0 i}
$$

$$
0. 0 e ^ {1. 8 3 5 i}
$$

$$
0. 0 0 1 e ^ {1. 2 1 8 i}
$$

$$
0. 0 e ^ {1. 0 8 8 i}
$$

$$
0. 0 0 8 e ^ {0. 7 9 7 i}
$$

$$
0. 0 e ^ {2. 0 7 1 i}
$$

$$
0. 0 e ^ {- 2. 5 1 7 i}
$$

$$
0. 0 e ^ {- 0. 0 i}
$$

$$
0. 0 e ^ {3. 0 3 9 i}
$$

$$
0. 0 e ^ {0. 0 0 3 i}
$$

$$
0. 0 e ^ {- 1. 0 0 4 i}
$$

$$
0. 0 0 9 e ^ {1. 7 4 5 i}
$$

$$
0. 0 e ^ {- 1. 8 6 7 i}
$$

$$
0. 0 0 1 e ^ {2. 3 4 9 i}
$$

$$
0. 0 e ^ {1. 7 6 i}
$$

$$
0. 0 e ^ {- 3. 0 3 9 i}
$$

$$
0. 0 e ^ {1. 6 0 9 i}
$$

$$
\mathrm{T} _ {2} ^ {*}
$$

$$
0. 0 e ^ {- 2. 5 3 7 i}
$$

$$
0. 0 e ^ {1. 0 0 4 i}
$$

$$
0. 0 e ^ {- 2. 2 2 4 i}
$$

$$
0. 0 0 4 e ^ {0. 0 i}
$$

$$
0. 0 e ^ {- 2. 0 4 1 i}
$$

$$
0. 0 e ^ {- 1. 8 3 5 i}
$$

$$
0. 0 e ^ {1. 8 6 7 i}
$$

$$
0. 0 e ^ {- 2. 2 5 1 i}
$$

$$
0. 0 e ^ {2. 5 3 7 i}
$$

$$
0. 0 e ^ {2. 0 4 1 i}
$$

$$
0. 0 0 8 e ^ {- 0. 7 9 7 i}
$$

$$
0. 0 e ^ {- 0. 0 i}
$$

$$
0. 0 0 9 e ^ {- 1. 7 4 5 i}
$$

$$
0. 0 e ^ {- 1. 6 7 7 i}
$$

$$
0. 0 e ^ {- 1. 7 6 i}
$$

$$
\backslash 0. 2 4 4 e ^ {1. 6 5 1 i}
$$

$$
0. 0 0 1 e ^ {- 2. 3 4 9 i}
$$

$$
0. 0 e ^ {- 1. 6 0 9 i}
$$

$$
0. 0 0 5 e ^ {- 1. 6 3 6 i}
$$

$$
0. 0 0 5 e ^ {- 1. 4 7 5 i}
$$

$$
0. 0 0 1 e ^ {- 3. 0 0 8 i}
$$

$$
0. 0 1 7 e ^ {0. 0 i}
$$

$$
0. 0 0 9 e ^ {3. 0 7 3 i}
$$

Supplementary Data Table 8 | Experimental vs simulated state tomography for qubits 234  
Qubits 345

<table><tr><td></td><td colspan="8">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw</td><td> $\begin{pmatrix} 0.419e^{-0.0i} & 0.066e^{-3.036i} & 0.021e^{1.326i} & 0.032e^{-0.351i} & 0.055e^{1.278i} & 0.014e^{2.2i} & 0.016e^{-1.695i} & 0.163e^{-1.626i} \\ 0.066e^{3.036i} & 0.045e^{-0.0i} & 0.011e^{1.107i} & 0.003e^{0.785i} & 0.006e^{2.111i} & 0.004e^{0.245i} & 0.029e^{2.971i} & 0.034e^{1.541i} \\ 0.021e^{-1.326i} & 0.011e^{-1.107i} & 0.038e^{-0.0i} & 0.009e^{-2.034i} & 0.013e^{0.322i} & 0.045e^{-0.223i} & 0.006e^{2.246i} & 0.013e^{-0.733i} \\ 0.032e^{0.351i} & 0.003e^{-0.785i} & 0.009e^{2.034i} & 0.03e^{-0.0i} & 0.029e^{0.51i} & 0.018e^{2.476i} & 0.008e^{-1.166i} & 0.009e^{-0.709i} \\ 0.055e^{-1.278i} & 0.006e^{-2.111i} & 0.013e^{-0.322i} & 0.029e^{-0.51i} & 0.053e^{-0.0i} & 0.006e^{2.111i} & 0.006e^{2.467i} & 0.063e^{-2.492i} \\ 0.014e^{-2.2i} & 0.004e^{-0.245i} & 0.045e^{0.223i} & 0.018e^{-2.476i} & 0.006e^{-2.111i} & 0.064e^{-0.0i} & 0.001e^{0.785i} & 0.02e^{0.785i} \\ 0.016e^{1.695i} & 0.029e^{-2.971i} & 0.006e^{-2.246i} & 0.008e^{1.166i} & 0.006e^{-2.467i} & 0.001e^{-0.785i} & 0.044e^{-0.0i} & 0.055e^{0.862i} \\ 0.163e^{1.626i} & 0.034e^{-1.541i} & 0.013e^{0.733i} & 0.009e^{0.709i} & 0.063e^{2.492i} & 0.02e^{-0.785i} & 0.055e^{-0.862i} & 0.308e^{-0.0i} \end{pmatrix}$ </td><td>52.7%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Proc. data</td><td> $\begin{pmatrix} 0.508e^{0.0i} & 0.088e^{-3.051i} & 0.025e^{1.373i} & 0.051e^{-0.159i} & 0.084e^{1.139i} & 0.029e^{2.207i} & 0.032e^{-1.633i} & 0.295e^{-1.618i} \\ 0.088e^{3.051i} & 0.021e^{0.0i} & 0.004e^{0.983i} & 0.006e^{-2.976i} & 0.012e^{-1.92i} & 0.008e^{0.519i} & 0.008e^{2.356i} & 0.047e^{1.528i} \\ 0.025e^{-1.373i} & 0.004e^{-0.983i} & 0.023e^{-0.0i} & 0.011e^{-1.951i} & 0.006e^{0.322i} & 0.026e^{-0.19i} & 0.006e^{-2.82i} & 0.021e^{-0.82i} \\ 0.051e^{0.159i} & 0.006e^{2.976i} & 0.011e^{1.951i} & 0.009e^{0.0i} & 0.009e^{1.46i} & 0.013e^{1.966i} & 0.006e^{-1.406i} & 0.021e^{-1.279i} \\ 0.084e^{-1.139i} & 0.012e^{1.92i} & 0.006e^{-0.322i} & 0.009e^{-1.46i} & 0.023e^{-0.0i} & 0.002e^{1.107i} & 0.018e^{3.031i} & 0.085e^{-2.573i} \\ 0.029e^{-2.207i} & 0.008e^{-0.519i} & 0.026e^{0.19i} & 0.013e^{-1.966i} & 0.002e^{-1.107i} & 0.033e^{0.0i} & 0.002e^{3.142i} & 0.028e^{0.608i} \\ 0.032e^{1.633i} & 0.008e^{-2.356i} & 0.006e^{2.82i} & 0.006e^{1.406i} & 0.018e^{-3.031i} & 0.002e^{-3.142i} & 0.023e^{0.0i} & 0.067e^{0.828i} \\ 0.295e^{1.618i} & 0.047e^{-1.528i} & 0.021e^{0.82i} & 0.021e^{1.279i} & 0.085e^{2.573i} & 0.028e^{-0.608i} & 0.067e^{-0.828i} & 0.361e^{0.0i} \end{pmatrix}$ </td><td>72.9%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Full T2* sim.</td><td> $\begin{pmatrix} 0.505e^{-0.0i} & 0.01e^{-3.135i} & 0.0e^{-1.611i} & 0.017e^{-2.681i} & 0.009e^{-0.231i} & 0.0e^{1.195i} & 0.009e^{1.029i} & 0.436e^{-1.593i} \\ 0.01e^{3.135i} & 0.001e^{-0.0i} & 0.0e^{0.719i} & 0.0e^{0.599i} & 0.0e^{3.079i} & 0.0e^{-0.815i} & 0.001e^{1.851i} & 0.009e^{1.588i} \\ 0.0e^{1.611i} & 0.0e^{-0.719i} & 0.0e^{0.0i} & 0.0e^{-2.441i} & 0.0e^{-0.707i} & 0.0e^{-1.69i} & 0.0e^{1.904i} & 0.0e^{0.198i} \\ 0.017e^{2.681i} & 0.0e^{-0.599i} & 0.0e^{2.441i} & 0.004e^{0.0i} & 0.003e^{1.874i} & 0.0e^{-1.456i} & 0.0e^{-1.86i} & 0.013e^{1.704i} \\ 0.009e^{0.231i} & 0.0e^{-3.079i} & 0.0e^{0.707i} & 0.003e^{-1.874i} & 0.003e^{-0.0i} & 0.0e^{3.088i} & 0.0e^{2.633i} & 0.004e^{-0.028i} \\ 0.0e^{-1.195i} & 0.0e^{0.815i} & 0.0e^{1.69i} & 0.0e^{1.456i} & 0.0e^{-3.088i} & 0.0e^{0.0i} & 0.0e^{-2.822i} & 0.001e^{-2.469i} \\ 0.009e^{-1.029i} & 0.001e^{-1.851i} & 0.0e^{-1.904i} & 0.0e^{1.86i} & 0.0e^{-2.633i} & 0.0e^{2.822i} & 0.001e^{0.0i} & 0.01e^{-2.652i} \\ 0.436e^{1.593i} & 0.009e^{-1.588i} & 0.0e^{-0.198i} & 0.013e^{-1.704i} & 0.004e^{0.028i} & 0.001e^{2.469i} & 0.01e^{2.652i} & 0.485e^{0.0i} \end{pmatrix}$ </td><td>93.1%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Red. T2* sim.</td><td> $\begin{pmatrix} 0.487e^{-0.0i} & 0.011e^{-2.918i} & 0.001e^{0.452i} & 0.046e^{-1.967i} & 0.008e^{-0.127i} & 0.0e^{1.278i} & 0.006e^{0.929i} & 0.306e^{-1.619i} \\ 0.011e^{2.918i} & 0.005e^{0.0i} & 0.0e^{1.38i} & 0.001e^{1.284i} & 0.0e^{-3.015i} & 0.0e^{-0.068i} & 0.003e^{1.696i} & 0.006e^{1.584i} \\ 0.001e^{-0.452i} & 0.0e^{-1.38i} & 0.0e^{-0.0i} & 0.0e^{-2.864i} & 0.0e^{-0.839i} & 0.0e^{-1.559i} & 0.0e^{1.747i} & 0.0e^{0.092i} \\ 0.046e^{1.967i} & 0.001e^{-1.284i} & 0.0e^{2.864i} & 0.018e^{-0.0i} & 0.008e^{1.817i} & 0.0e^{-1.418i} & 0.0e^{-1.828i} & 0.01e^{1.739i} \\ 0.008e^{0.127i} & 0.0e^{3.015i} & 0.0e^{0.839i} & 0.008e^{-1.817i} & 0.017e^{-0.0i} & 0.0e^{-2.874i} & 0.001e^{-2.46i} & 0.035e^{1.259i} \\ 0.0e^{-1.278i} & 0.0e^{0.068i} & 0.0e^{1.559i} & 0.0e^{1.418i} & 0.0e^{2.874i} & 0.0e^{-0.0i} & 0.0e^{-1.608i} & 0.001e^{-2.041i} \\ 0.006e^{-0.929i} & 0.003e^{-1.696i} & 0.0e^{-1.747i} & 0.0e^{1.828i} & 0.001e^{2.46i} & 0.0e^{1.608i} & 0.004e^{0.0i} & 0.008e^{-2.818i} \\ 0.306e^{1.619i} & 0.006e^{-1.584i} & 0.0e^{-0.092i} & 0.01e^{-1.739i} & 0.035e^{-1.259i} & 0.001e^{2.041i} & 0.008e^{2.818i} & 0.468e^{0.0i} \end{pmatrix}$ </td><td>78.4%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

Supplementary Data Table 9 | Experimental vs simulated state tomography for qubits 345

Supplementary Data Table 10 | Experimental vs simulated state tomography for qubits 456

## References

Qubits 456

<table><tr><td></td><td colspan="8">Density Matrices</td><td>Fidelity</td></tr><tr><td>Raw</td><td> $\begin{pmatrix} 0.425e^{-0.0i} & 0.026e^{0.951i} & 0.038e^{2.246i} & 0.013e^{0.838i} & 0.013e^{-0.0i} & 0.008e^{-0.785i} & 0.064e^{-2.09i} & 0.298e^{-2.702i} \\ 0.026e^{-0.951i} & 0.025e^{-0.0i} & 0.015e^{0.133i} & 0.026e^{2.575i} & 0.006e^{-2.82i} & 0.004e^{0.983i} & 0.006e^{3.142i} & 0.025e^{3.062i} \\ 0.038e^{-2.246i} & 0.015e^{-0.133i} & 0.062e^{-0.0i} & 0.017e^{1.34i} & 0.013e^{-1.249i} & 0.024e^{1.785i} & 0.008e^{-1.052i} & 0.012e^{1.654i} \\ 0.013e^{-0.838i} & 0.026e^{-2.575i} & 0.017e^{-1.34i} & 0.053e^{0.0i} & 0.001e^{0.785i} & 0.005e^{1.373i} & 0.011e^{-1.661i} & 0.025e^{0.373i} \\ 0.013e^{0.0i} & 0.006e^{2.82i} & 0.013e^{1.249i} & 0.001e^{-0.785i} & 0.051e^{-0.0i} & 0.018e^{3.031i} & 0.018e^{1.107i} & 0.007e^{2.034i} \\ 0.008e^{0.785i} & 0.004e^{-0.983i} & 0.024e^{-1.785i} & 0.005e^{-1.373i} & 0.018e^{-3.031i} & 0.018e^{-0.0i} & 0.009e^{-1.46i} & 0.012e^{2.897i} \\ 0.064e^{2.09i} & 0.006e^{-3.142i} & 0.008e^{1.052i} & 0.011e^{1.661i} & 0.018e^{-1.107i} & 0.009e^{1.46i} & 0.043e^{-0.0i} & 0.043e^{0.07i} \\ 0.298e^{2.702i} & 0.025e^{-3.062i} & 0.012e^{-1.654i} & 0.025e^{-0.373i} & 0.007e^{-2.034i} & 0.012e^{-2.897i} & 0.043e^{-0.07i} & 0.323e^{-0.0i} \end{pmatrix}$ </td><td>67.2%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Proc. data</td><td> $\begin{pmatrix} 0.477e^{-0.0i} & 0.012e^{1.03i} & 0.042e^{2.339i} & 0.012e^{0.54i} & 0.005e^{-1.373i} & 0.009e^{-0.464i} & 0.07e^{-2.06i} & 0.398e^{-2.7i} \\ 0.012e^{-1.03i} & 0.008e^{-0.0i} & 0.012e^{-0.245i} & 0.008e^{2.897i} & 0.001e^{-2.356i} & 0.006e^{1.249i} & 0.001e^{1.571i} & 0.026e^{3.027i} \\ 0.042e^{-2.339i} & 0.012e^{0.245i} & 0.037e^{-0.0i} & 0.008e^{3.017i} & 0.016e^{-1.695i} & 0.027e^{1.798i} & 0.006e^{0.785i} & 0.022e^{1.849i} \\ 0.012e^{-0.54i} & 0.008e^{-2.897i} & 0.008e^{-3.017i} & 0.013e^{-0.0i} & 0.004e^{-2.356i} & 0.002e^{0.0i} & 0.007e^{-2.034i} & 0.016e^{0.245i} \\ 0.005e^{1.373i} & 0.001e^{2.356i} & 0.016e^{1.695i} & 0.004e^{2.356i} & 0.014e^{-0.0i} & 0.018e^{-2.856i} & 0.007e^{0.785i} & 0.001e^{2.356i} \\ 0.009e^{0.464i} & 0.006e^{-1.249i} & 0.027e^{-1.798i} & 0.002e^{-0.0i} & 0.018e^{2.856i} & 0.027e^{-0.0i} & 0.009e^{-2.191i} & 0.012e^{-3.058i} \\ 0.07e^{2.06i} & 0.001e^{-1.571i} & 0.006e^{-0.785i} & 0.007e^{2.034i} & 0.007e^{-0.785i} & 0.009e^{2.191i} & 0.016e^{-0.0i} & 0.048e^{-0.501i} \\ 0.398e^{2.7i} & 0.026e^{-3.027i} & 0.022e^{-1.849i} & 0.016e^{-0.245i} & 0.001e^{-2.356i} & 0.012e^{3.058i} & 0.048e^{0.501i} & 0.408e^{-0.0i} \end{pmatrix}$ </td><td>84.1%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Full T2* sim.</td><td> $\begin{pmatrix} 0.506e^{-0.0i} & 0.02e^{-3.108i} & 0.0e^{-1.711i} & 0.009e^{-2.784i} & 0.011e^{1.122i} & 0.0e^{-2.141i} & 0.011e^{-0.069i} & 0.46e^{-1.496i} \\ 0.02e^{3.108i} & 0.002e^{-0.0i} & 0.0e^{0.721i} & 0.0e^{0.354i} & 0.0e^{-2.052i} & 0.0e^{1.072i} & 0.001e^{2.121i} & 0.018e^{1.63i} \\ 0.0e^{1.711i} & 0.0e^{-0.721i} & 0.0e^{-0.0i} & 0.0e^{-1.364i} & 0.0e^{0.185i} & 0.0e^{-1.978i} & 0.0e^{1.674i} & 0.0e^{0.532i} \\ 0.009e^{2.784i} & 0.0e^{-0.354i} & 0.0e^{1.364i} & 0.001e^{0.0i} & 0.001e^{1.674i} & 0.0e^{-1.443i} & 0.0e^{3.047i} & 0.008e^{1.578i} \\ 0.011e^{-1.122i} & 0.0e^{2.052i} & 0.0e^{-0.185i} & 0.001e^{-1.674i} & 0.001e^{0.0i} & 0.0e^{-3.131i} & 0.0e^{-1.442i} & 0.011e^{-2.825i} \\ 0.0e^{2.141i} & 0.0e^{-1.072i} & 0.0e^{1.978i} & 0.0e^{1.443i} & 0.0e^{3.131i} & 0.0e^{-0.0i} & 0.0e^{0.706i} & 0.0e^{0.43i} \\ 0.011e^{0.069i} & 0.001e^{-2.121i} & 0.0e^{-1.674i} & 0.0e^{-3.047i} & 0.0e^{1.442i} & 0.0e^{-0.706i} & 0.001e^{-0.0i} & 0.012e^{-1.417i} \\ 0.46e^{1.496i} & 0.018e^{-1.63i} & 0.0e^{-0.532i} & 0.008e^{-1.578i} & 0.011e^{2.825i} & 0.0e^{-0.43i} & 0.012e^{1.417i} & 0.488e^{-0.0i} \end{pmatrix}$ </td><td>95.7%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td>Red. T2* sim.</td><td> $\begin{pmatrix} 0.502e^{0.0i} & 0.019e^{-3.07i} & 0.0e^{-1.149i} & 0.014e^{-2.15i} & 0.008e^{1.123i} & 0.0e^{-2.499i} & 0.008e^{0.003i} & 0.322e^{-1.485i} \\ 0.019e^{3.07i} & 0.003e^{0.0i} & 0.0e^{1.061i} & 0.001e^{0.812i} & 0.0e^{-2.372i} & 0.0e^{1.046i} & 0.002e^{1.814i} & 0.012e^{1.648i} \\ 0.0e^{1.149i} & 0.0e^{-1.061i} & 0.0e^{-0.0i} & 0.0e^{-1.547i} & 0.0e^{-0.05i} & 0.0e^{-1.724i} & 0.0e^{1.464i} & 0.0e^{0.92i} \\ 0.014e^{2.15i} & 0.001e^{-0.812i} & 0.0e^{1.547i} & 0.005e^{-0.0i} & 0.003e^{1.592i} & 0.0e^{-1.601i} & 0.0e^{2.5i} & 0.006e^{1.544i} \\ 0.008e^{-1.123i} & 0.0e^{2.372i} & 0.0e^{0.05i} & 0.003e^{-1.592i} & 0.005e^{0.0i} & 0.0e^{-3.067i} & 0.0e^{-1.701i} & 0.011e^{2.717i} \\ 0.0e^{2.499i} & 0.0e^{-1.046i} & 0.0e^{1.724i} & 0.0e^{1.601i} & 0.0e^{3.067i} & 0.0e^{-0.0i} & 0.0e^{-0.312i} & 0.0e^{-0.553i} \\ 0.008e^{-0.003i} & 0.002e^{-1.814i} & 0.0e^{-1.464i} & 0.0e^{-2.5i} & 0.0e^{1.701i} & 0.0e^{0.312i} & 0.002e^{0.0i} & 0.011e^{-1.472i} \\ 0.322e^{1.485i} & 0.012e^{-1.648i} & 0.0e^{-0.92i} & 0.006e^{-1.544i} & 0.011e^{-2.717i} & 0.0e^{0.553i} & 0.011e^{1.472i} & 0.483e^{0.0i} \end{pmatrix}$ </td><td>81.4%</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>

[1] Pioro-Ladriere, M., Tokura, Y., Obata, T., Kubo, T. & Tarucha, S. Micromagnets for coherent control of spin-charge qubit in lateral quantum dots. Applied Physics Letters 90, 024105 (2007).

[2] Yoneda, J. et al. Robust micromagnet design for fast electrical manipulations of single spins in quantum dots. Applied Physics Express 8, 084401 (2015).

[3] Dumoulin Stuyck, N. et al. Low dephasing and robust micromagnet designs for silicon spin qubits. Applied Physics Letters 119, 094001 (2021).

[4] Yoneda, J. et al. A quantum-dot spin qubit with coherence limited by charge noise and fidelity higher than 99.9%. Nature Nanotechnology 13, 102–106 (2018).

[5] Ortner, M. & Coliado Bandeira, L. G. Magpylib: A free python package for magnetic field computation. SoftwareX (2020).

[6] Philips, S. uM Simulator for spin qubits (2022). URL https://github.com/stephanlphilips/MM\_sim/.

[7] Wuetz, B. P. et al. Atomic fluctuations lifting the energy degeneracy in Si/SiGe quantum dots. arXiv:2112.09606 (2021).

[8] Noiri, A. et al. Radio-frequency-detected fast charge sensing in undoped silicon quantum dots. Nano Letters 20, 947–952 (2020).

[9] Connors, E. J., Nelson, J. & Nichol, J. M. Rapid high-fidelity spin-state readout in Si/SiGe quantum dots via rf reflectometry. Physical Review Applied 13, 024019 (2020).

[10] Liu, Y.-Y. et al. Radio-frequency reflectometry in silicon-based quantum dots. Physical Review Applied 16, 014057 (2021).

[11] Gühne, O. & Tóth, G. Entanglement detection. Physics Reports 474, 1–75 (2009).

[12] Hradil, Z., Řeháček, J., Fiurášek, J. & Ježek, M. 3 maximum-likelihood methodsin quantum mechanics. In Quantum state estimation, 59–112 (Springer, 2004).

[14] Takeda, K. et al. Optimized electrical control of a Si/SiGe spin qubit in the presence of an induced frequency shift. npj Quantum Information 4, 1–6 (2018).

[13] Watson, T. et al. A programmable two-qubit quantum processor in silicon. Nature 555, 633–637 (2018).
