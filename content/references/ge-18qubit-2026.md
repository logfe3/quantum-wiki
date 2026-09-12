---
title: Simultaneous operation of an 18-qubit modular array in germanium
description: 可扩展 $2\times N$ 模块化架构的 18 比特锗阵列同时操作，代表空穴自旋比特集成度的最新进展。
aliases:
 - ge-18qubit-2026
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">可扩展 $2\times N$ 模块化架构的 18 比特锗阵列同时操作，代表空穴自旋比特集成度的最新进展。</div>

> [!info] 文献信息
> J. J. Dijkema *et al.*, “Simultaneous operation of an 18-qubit modular array in germanium”, arXiv:2604.01063 (2026).
> [arXiv:2604.01063](https://arxiv.org/abs/2604.01063)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Jurgen J. Dijkema,<sup>1,</sup> <sup>∗</sup> Xin Zhang,<sup>1,</sup> <sup>∗</sup> Achilleas Bardakas,<sup>1</sup> Daniel Bouman,<sup>1</sup> Alice Cuzzocrea,<sup>1</sup> David van Driel,<sup>1</sup> Davide Girardi,<sup>1</sup> Lucas E.A. Stehouwer,<sup>1</sup> Giordano Scappucci,<sup>2</sup> Anne-Marije J. Zwerver,<sup>1</sup> and Nico W. Hendrickx<sup>1</sup>

<sup>1</sup>Groove Quantum B.V., Lorentzweg 1, 2628 CJ Delft, Netherlands

<sup>2</sup>QuTech and Kavli Institute of Nanoscience, Delft University of Technology, Lorentzweg 1, 2628 CJ Delft, Netherlands (Dated: April 2, 2026)

Utility-scale quantum computing requires the integration and operation of a large-scale qubit register. Semiconductor spin qubits are a primary candidate for this, due to the prospects of building integrated hybrid quantum-classical architectures. However, scaling spin-qubit systems while preserving performance and control has remained a challenge. Here, we demonstrate the operation of an 18-qubit array in germanium based on an extendable 2×N architecture. We achieve simultaneous initialization, control, and readout across the entire array, enabled by parallel operation of modular unit cells. Across the array, we achieve average and median single-qubit gate fidelities of 99.8% and 99.9%, respectively. Finally, we characterize the nearest-neighbor exchange couplings throughout the device and implement high-quality controlled-Z gates to generate a three-qubit Greenberger-Horne-Zeilinger (GHZ) state. These results demonstrate that spin-qubit arrays can be scaled while maintaining high-fidelity operation and establish a modular, extendable architecture for planar semiconductor quantum processors.

## I. INTRODUCTION

The realization of utility-scale quantum computing depends on the development of hardware architectures that can scale to a large number of qubits while eficiently managing the associated wiring and control overhead [1]. Semiconductor-based quantum technologies are particularly promising in this regard, as they build directly on the mature infrastructure of the semiconductor industry [2–4]. Leveraging advanced manufacturing and packaging technologies can enable the integration of quantum hardware with classical control electronics [5, 6], thereby realizing the required quantum-classical architectures that mitigate the wiring bottleneck [7–10].

Rapid progress in small-scale devices has enabled highfidelity qubit operations [11–16], initial demonstrations of error-correction codes [17–21], and remote entanglement through qubit shuttling [22–24]. In parallel, array sizes have been scaled to 6–12 qubits in one-dimensional silicon devices [25–28] and 4–10 qubits in two-dimensional germanium architectures [29–31]. However, these demonstrations have remained largely confined to individual, sequential qubit operations and often rely on bespoke, nonmodular device layouts. Consequently, an experimental demonstration of a modular, extensible unit-cell architecture capable of supporting simultaneous high-fidelity control and parallelized readout across an integrated twodimensional grid has been lacking.

Here, we present an 18-qubit germanium quantum processing unit (QPU) based on a 2 × N architecture that is extendable to arbitrary length. The device is composed of modular six-qubit unit cells with dedicated charge sensors and achieves single-qubit gate fidelities above 99% across the full array. Furthermore, we demonstrate that diferent unit cells can be initialized, operated, and read out in parallel, ensuring that the overhead associated with state preparation and measurement (SPAM) does not increase with system size. These results constitute the largest spin-qubit array demonstrated to date and establish a blueprint for scalable two-dimensional semi conductor quantum processors.

## II. DEVICE AND MEASUREMENT PROTOCOL

The 18-qubit device, as shown in Fig. 1a, is defined in a Ge/SiGe heterostructure [32, 33] and consists of three repeated 2x3-qubit unit cells. The unit-cell design features a locally one-dimensional gate fan-out, enabling straightforward extension of the architecture to larger arrays (see Extended Data Fig 1). Each unit cell contains a dedicated charge sensor that can read out the charge state of all quantum dots within the cell. The external magnetic field orientation is chosen such that all qubits operate near the in-plane sweet spot of minimal hyperfine interaction (Extended Data Fig 3) [34–36], at $B _ { x } { = } 0 . 8 3$ mT, $B _ { y } { = } 5 0 ~ \mathrm { m T }$ , and $B _ { z } { = } 1 0 ~ \mathrm { m T }$ . The qubits are labeled $\mathrm { Q _ { 1 } } .$ $\mathrm { Q _ { 1 8 } }$ , and the three charge sensors are labeled $\mathrm { S } _ { 1 } , \mathrm { S } _ { 2 }$ , and $\mathrm { S _ { 3 } } .$ , respectively.

Using the three charge sensors together, we can resolve the charge configuration of the entire quantum dot array. Fig. 1b presents the charge stability diagram (CSD) for all vertical double quantum dot (DQD) pairs as a function of their detuning $\varepsilon _ { i j } = ( \mathrm { v P } _ { i } - \mathrm { v P } _ { j } ) / 2$ and total energy $U _ { i j } = ( \mathrm { v P } _ { i } + \mathrm { v P } _ { j } ) / 2$ , where $\mathrm { v P } _ { i }$ and $\mathrm { v P } _ { j }$ denote the virtualized plunger gate voltages [37] of quantum dots i and $j ,$ respectively (details in Methods). For each DQD, except Q9,Q10, the charge configuration at $\varepsilon _ { i j } = 0$ corresponds to the (1, 1) regime, where $( N _ { i } , N _ { j } )$ denotes the hole occupation of quantum dots i and $j .$

g  
a  
![[assets/figures/references/ge-18qubit-2026/9b38f281f79c03e07e8bf29d35cd9ef9fb02bd8e6984f7d738f14a78d5cc0b5a.jpg]]

![[assets/figures/references/ge-18qubit-2026/81ca2b2a349bcaf8821057dc574cffb782e37dd3ae37227de8a10f14c0048ad4.jpg]]

![[assets/figures/references/ge-18qubit-2026/5c18048b605a6ecb14ae73a0624791e63625a9cc8656093c5725c64641bd7862.jpg]]

![[assets/figures/references/ge-18qubit-2026/2cb113f2cfccd18b5331557be3b44135a8c5c49ea13db92ac91fcb1104ccdbee.jpg]]

![[assets/figures/references/ge-18qubit-2026/c98c636c4a98bbc1dca94542960a95fd9abddaf5df1dc0f2a853b03463cbf7de.jpg]]

![[assets/figures/references/ge-18qubit-2026/53a43293a308301432754fc8b9773416b60b10bf43a4fa1251cc4680985829c0.jpg]]

![[assets/figures/references/ge-18qubit-2026/bf563a95eefc1ef7a004b0473e040797bedb47546e6be66bb5779272fe152e11.jpg]]

![[assets/figures/references/ge-18qubit-2026/7d7b7e904b677f86590c84ef085108f84f30986e808b47a64147ab1e7b50236c.jpg]]

![[assets/figures/references/ge-18qubit-2026/d3b58cebd8d3d3630fd58e40194faef1b23b29126572444e3a9515252ceac934.jpg]]  
Fig. 1. Device and measurement protocol of the 18-qubit modular array. a, False-colored scanning electron micro scope image of the 18-qubit device. Ohmic contacts, screening gates, plunger gates, and barrier gates are indicated in green, magenta, blue and red, respectively. The 18 qubits, located below the plunger gates, are labeled $\mathrm { { Q _ { 1 } \mathrm { { - Q _ { 1 8 } } } } }$ . Three charge sensors $\mathrm { S } _ { i } \ ( i$ the unit cell index) are positioned above $\mathrm { ( S _ { 1 } , S _ { 3 } ) }$ and below (S ) the array. The reference frame of the external magnetic field $B _ { x , y , z }$ is indicated by the black arrows. $\mathbf { b } ,$ Few-hole charge stability diagram in the operational regime for all vertica double quantum dot (DQD) pairs $\mathrm { Q } _ { i } \mathrm { Q } _ { j } ,$ shown as a function of the detuning $\left( \epsilon _ { i j } \right)$ and on-site $\left( U _ { i j } \right)$ energy. c-h, Tuning procedure to characterize the spin qubits. c, Charge stability diagram of a representative DQD, measured as a function of the virtual plunger gates voltages $\mathrm { v P } _ { i }$ and ${ \mathrm { v P } } _ { j } .$ d, The charge stability diagram of the two-hole regime shows the relevant charge transitions, with Pauli spin blockade (PSB) appearing as a latched signal near the (1,1)-(0,2) transition, when sweeping towards positive detuning. A typical pulse sequence, including initialization (I), operation (O) and readout (R), is indicated. $\mathbf { e } ,$ Singlet-triplet $\mathrm { ( S - T _ { 0 } ) }$ oscillations measured in the blocked state probability $P _ { \mathrm { b l o c k e d } }$ as a function of the dwell time at the operation point $\tau _ { \mathrm { { O } } }$ . f, Spin resonance spectroscopy using a chirped microwave pulse, showing two resonance peaks corre sponding to the two spins in the DQD. g, Rabi chevron pattern showing the spin-flip probability as a function of microwave pulse duration $\left( t _ { \mathrm { d r i v e } } \right)$ and drive frequency $\left( f _ { \mathrm { d r i v e } } \right)$ . h, Exchange-coupling spectroscopy, where the splitting of the target qubit resonance frequency $f _ { \mathrm { q u b i t } }$ as a function of the applied barrier gate voltage $V _ { \mathrm { B } }$ , with the control qubit initialized in the |↓ (squares) or |↑⟩ (circles) state.

To characterize the single-qubit properties across the array, we follow the tuning procedure illustrated in Fig. 1c-h. First, individual CSDs are measured to obtain the full 18-quantum-dot charge configuration, with an example shown in Fig. 1c (further CSD measurements of all DQD pairs are provided in Extended Data Fig 2). Next, Pauli spin blockade (PSB) is identified at the relevant interdot crossings, as illustrated in 1d for the (1,1)- (0,2) charge transition. The readout of the spin parity in the DQD is confirmed through the observation of $\mathrm { S - T _ { 0 } }$ oscillations (Fig. 1e) as a function of the duration of a diabatic detuning pulse across the anti-crossing. While PSB readout can be observed for both vertical and horizontal DQDs, we operate the device by performing a parity readout of the vertical DQDs (readout pairs, see Methods for details). Next, we identify the singlespin qubit resonance frequencies by applying chirped microwave pulses to the plunger gates and detecting spin resonance. This is illustrated in Fig. 1f, where two resonance lines correspond to single-spin resonances of the two spins in the respective DQD. We confirm coherent qubit control by measuring the blocked state probability as a function of microwave drive pulse durations t<sub>drive</sub> and drive frequency $f _ { \mathrm { d r i v e } }$ (Fig. 1g). Finally, we characterize the tunability of the exchange interaction within the DQD through spectroscopy while applying a voltage pulse of varying depth $V _ { \mathrm { { B } } }$ to the interdot barrier gate. A chirped microwave burst is applied to the target qubit while preparing the control qubit in either basis state. As shown in Fig. 1h, the resonance frequency of the target qubit clearly splits depending on the state of the control qubit and the depth of the barrier voltage pulse, providing clear evidence of a tuneable exchange coupling between the qubits.

![[assets/figures/references/ge-18qubit-2026/3c11ef5a7ab5eed9813e0b91f1e36ddb6009deebec6237457407afce9703473f.jpg]]  
Fig. 2. Statistical analysis of single-qubit coherence and gate fidelities across the array. a, Chevron pattern measurements for all 18 spin-qubits, showing four full rotations as a function of the drive frequency $\left( f _ { \mathrm { d r i v e } } \right)$ . All measurements are performed sequentially without changing the dc voltage settings of the device. b, Color scale mapping of the qubit driving eficiency $\left( f _ { \mathrm { R a b i } } / A \right.$ , top panel) and g-factors (bottom panel) for all qubits. c-e, Empirical cumulative distribution function (ECDF) of $T _ { 2 } ^ { \ast } ~ ( { \bf c } ) , ~ T _ { 2 } ^ { \mathrm { C P M G } }$ (d), and the single qubit gate error probability (e) of all 18-qubits, respectively. The black and red dashed lines show the average and median values, respectively. The mean, median, and standard deviation of the distribution are summarized in the top right corner.

## III. SINGLE-QUBIT GATE

Following the measurement protocol described above, we calibrate single-qubit gates for all 18 qubits while maintaining the same gate voltage ofsets, enabling operation of all qubits within a single device configuration. All qubits are operated at comparatively low frequency, improving qubit coherence [35] and reducing control architecture complexity. Single qubit control is demonstrated through the observation of 18 Rabi chevron patterns shown in Fig. 2a, where the drive amplitude and pulse duration are calibrated to observe four full qubit rotations. The spatial distribution of qubit g-factors and driving eficiencies $f _ { \mathrm { R a b i } } / A$ , with A the driving amplitude, are shown in Fig. 2b (more details in Extended Data Fig 4). Both the measured g-factors and driving eficiencies are consistent with other reports in germanium [31, 35, 38]. The observed spread of the g-factors across the devices likely arises from strain fluctuations that can be reduced by employing Ge/SiGe heterostructures grown on Ge substrates [31, 39].

Next, we characterize qubit coherence by performing Ramsey and Carr-Purcell-Meiboom-Gill (CPMG) measurements to extract the dephasing and coherence times $T _ { 2 } ^ { * }$ and $T _ { 2 } ^ { \mathrm { C P M G } }$ . The distributions of phase coherence times across the array are shown as empirical cumulative distribution functions (ECDFs) in Fig. 2c and d (details in Extended Data Fig 5 and Extended Data

Fig 6). We find an average $T _ { \mathrm { 2 , a v g } } ^ { \ast }$ of 6.2(2) µs, with a standard deviation of $T _ { 2 , \sigma } ^ { * } \ = \ \stackrel {  } { 1 . 8 } ( 1 ) \ \mu \mathrm { s } .$ The average $T _ { \mathrm { 2 } } ^ { \mathrm { C P M G } }$ is 0.47(5) ms, with a standard deviation of $\check { T } _ { 2 } ^ { \mathrm { C P M G } } = 0 . 2 4 ( 3 )$ ms. The large diference between $T _ { 2 } ^ { * }$ and $T _ { 2 } ^ { \mathrm { C P M G } }$ indicates that coherence is limited by lowfrequency noise (Extended Data Fig 6). We note that due to a finite spread of qubit g-tensor orientations (see Extended Data Fig 3), the external magnetic field cannot be aligned with all hyperfine sweet spots [35]. As a result, further improvements in qubit coherence are expected when operating in isotopically purified germanium quantum wells, where hyperfine noise is strongly suppressed for all field orientations [34, 35].

To quantify the single-qubit control fidelities, we perform randomized benchmarking on all the qubits in the array (Fig. 2e, see Methods and Extended Data Fig 7 for more details). For all qubits, the extracted pri mary gate fidelity $F _ { \mathrm { g } }$ exceeds 99.4%, with an average fidelity of $F _ { \mathrm { g } , \mu } = 9 9 . \bar { 8 } \%$ . To suppress of-resonant driving of neighboring qubits, we employ Tukey-shaped microwave pulses, which reduce spectral leakage and mitigate crosstalk. Further improvements in control fidelity are expected by applying even more optimized pulse shaping [16, 40].

![[assets/figures/references/ge-18qubit-2026/7e5aabb9b968e30fb9dc5c37cc5147d9421af715bb7a944654a548d4a6817324.jpg]]

![[assets/figures/references/ge-18qubit-2026/e02f263d9262c7752dfe2e011eb04d3c2573a86c8b952ac5b3f2ae84654641a5.jpg]]  
Fig. 3. Multi-qubit initialization, control and readout. a, Pulse sequence used for multi-qubit initialization, control, and readout. The horizontal lines correspond to the vertical pairs of the array. The shaded regions indicate the three unit cells. Within each unit cell, initialization and reference operations (I/R) are executed sequentially across the three pairs, while the same sequence is performed in parallel across all unit cells. During the control stage, X gates are applied to individua qubits. Finally, each unit cell is read out by a dedicated charge sensor that measures the parity of the three corresponding vertical pairs sequentially, allowing simultaneous readout of all unit cells. b, Measurement results of each vertical pair using the multi-qubit sequence described in a, with the simultaneous control of all qubits in the bottom channel of the device (pink). For comparison, we overlay the results of a similar experiment, where an individual-qubit sequence is used (blue). The presented data are vertically ofset by 1 per qubit. c, Measured spin flip probabilities $P _ { \mathrm { f l i p } }$ for all vertical pairs as a function of the addressed qubit. Each column corresponds to a measurement of the full array after a single X-gate is applied to the targeted qubit.

## IV. MULTI-QUBIT INITIALIZATION AND READOUT

Operating a quantum processing unit requires the abil ity to initialize, control, and read out all qubits within the processor in a scalable manner. Here, we demonstrate simultaneous state preparation and readout of the full 18-qubit array using the multi-qubit sequence illustrated in Fig. 3a. Initialization and readout are organized on a unit-cell basis, with all unit cells being prepared and measured simultaneously following the same protocol. Within each unit cell, the three vertical qubit pairs are initialized sequentially: first the left pair, then the right pair, and finally the center pair. The same ordering is used during readout. Such sequential ordering avoids simultaneous initialization or readout of neighboring vertical pairs, which could otherwise introduce unwanted interactions between horizontally adjacent qubits and degrade state-preparation or readout fidelities. Also, the long spin relaxation times of the qubits ensure that their states remain preserved while other pairs in the unit cell are sequentially prepared or measured. Each charge sensor is primarily sensitive to the quantum dots within its own unit cell, which enables parallel readout across different unit cells without introducing measurement crosstalk. The protocol is executed in parallel at the unit-cell level, enabling eficient operation of the array and ensuring that SPAM overhead does not increase with the size of the quantum processor.

To verify simultaneous initialization, control, and readout across the array, we apply microwave drives of varying duration to one qubit per vertical pair within a single sequence (see circuit in Fig. 3a). The resulting Rabi oscillations are shown in Fig. 3b, where all nine evennumbered qubits are operated simultaneously. The high visibility of the oscillations confirms successful parallel qubit initialization, control, and readout. The Rabi visibility, defined by the oscillation amplitude, is comparable between individual and simultaneous operation (see Extended Data Fig 11). The minor reduction in visibility is attributed to a slight broadening of the charge-sensor Coulomb peaks induced by the additional pulsing and can be mitigated by an improved charge-sensor design.

To further examine the crosstalk, we start from the fully initialized 18-qubit state and apply an X-gate to a single qubit, followed by a parity measurement of all vertical qubit pairs using the protocol described above. This yields a parity bit string for the entire array for ev ery measurement shot, allowing us to extract the parity probability for every qubit pair. This experiment is repeated while addressing a diferent qubit for every cycle. The resulting data are shown in Fig. 3c and exhibit a characteristic diagonal pattern, confirming low crosstalk in the single-qubit control, simultaneous initialization, and readout across the full array. We note that there is a small crosstalk in the charge readout of Q11,Q12 when ${ \mathrm { Q 5 } } , { \mathrm { Q 6 } }$ are read out. This can be attributed to a finite sensitivity of $\mathrm { S _ { 2 } }$ to the charge state of Q5,Q6, combined with a limited sensitivity to Q11,Q12. Such charge crosstalk can be suppressed by improving the sensor response to the target qubit pair (Q11,Q12 in this case), allowing for better state thresholding. Furthermore, we note that this protocol can be extended from a parity readout on 9 qubit pairs to a full readout of all 18 qubits by using CNOT gate projections before performing the parity readout [25].

## V. TWO-QUBIT GATE AND QUANTUM ALGORITHM

In addition to scalable initialization and readout, universal quantum computing requires an entangling twoqubit gate. In spin qubit systems, such gates are typically implemented via the exchange interaction between nearest-neighbor qubits [41], which depends exponentially on the interdot barrier potential. We characterize the exchange coupling J for all vertical qubit pairs as a function of the applied barrier gate voltage $\Delta V _ { \mathrm { B } }$ by performing qubit spectroscopy for both basis states of the neighboring qubit. The resulting state-dependent splitting of the resonance frequency, shown in Fig. 4a, provides a direct measure of the exchange interaction. From these data, we extract an average exchange tunability of 19±2.9 mV/dec (Fig. 4b), comparable to state-of-the-art results and suficient for high-fidelity one- and two-qubit gate operations [42].

Using this gate-controllable exchange interaction, we implement a controlled-phase (CZ) gate between qubits Q9 and Q10. The CZ gate is realized using an adiabatic, Hamming-window-shaped voltage pulse applied to the virtual interdot barrier gate [12, 43]. To suppress sensitivity to detuning voltage noise, the operation is performed at the zero detuning point, which is identified by embedding a decoupled CZ (DCZ) pulse within a Ramsey sequence while sweeping the detuning and pulse duration. The corresponding quantum circuit is shown in Fig. 4c and the resulting fingerprint oscillations are presented in Fig. 4d. At zero detuning $( \varepsilon _ { 9 , 1 0 } = 0 )$ , we observe high-quality exchange oscillations, indicative of a high-fidelity two-qubit gate.

We realize a CZ gate between Q9 and Q10 by calibrating both the single qubit phases (due to g-tensor modulation) and the conditional phase acquired during the interaction. Fig. 4e shows the conditional phase calibration by applying repeated CZ operations, where the absence of beating at $\bar { V } / V _ { J } = 1$ confirms proper phase alignment and correct gate calibration. The same procedure is applied to the horizontal qubit pair Q7,Q9 (see Extended Data Fig 9), demonstrating two-qubit control along both directions of the array. To demonstrate the connectivity in this two-dimensional architecture, we generate a three-qubit Greenberger-Horne-Zeilinger (GHZ) state on qubits Q7, Q9, and Q10 by applying the circuit shown in Fig. 4f. The required CNOT operations are decomposed into combinations of native Y and CZ gates [25]. We verify the generation of the GHZ state by measuring parity oscillations as a function of applied single-qubit phases. The efective ZZZ measurement is implemented using two parity readouts on qubit pairs Q7,Q8 and Q9,Q10, with Q8 acting as an ancilla (see Methods). The resulting oscillations are shown in Fig. 4g, where the oscillation frequency scales with the number of qubits on which the phase is varied, confirming the presence of multi-qubit entanglement.

## VI. CONCLUSION

In summary, we have demonstrated the operation of a modular 18-qubit array based on an extendable architecture of germanium spin qubits, featuring simultaneous initialization, control and readout across the full array. The architecture enables parallel operation on a unit-cell basis, such that the overhead associated with state preparation and qubit measurement does not increase with sys tem size. We achieve high-fidelity single-qubit control across all qubits, tunable exchange coupling, and implement two-qubit gates that enable the generation of multiqubit entangled states across both directions of the twodimensional array. These results establish a scalable platform for two-dimensional semiconductor quantum processors. By leveraging advanced semiconductor manufacturing to scale the number of qubits in both dimensions and improve device uniformity, together with the integration of cryogenic control electronics, this architecture provides a viable pathway toward fault-tolerant quantum computation based on semiconductor spin qubits.

## ACKNOWLEDGEMENTS

We thank all team members from the spin-qubit groups at QuTech for the helpful discussions, collective setup debugging, and general interactions, particularly the indepth discussions with Irene Fernandez de Fuentes, Yuta Matsumoto, and Maximilian Rimbach-Russ. Furthermore, we are grateful for software support and useful discussions with Sander de Snoo. We also thank QuTech technical staf for their support in building and maintaining our experimental setups. Finally, we thank the staf of the Kavli Nanolab Delft for cleanroom support. We acknowledge the support of the European Union through the EIC Transition Grant GROOVE 101113173. The authors also acknowledge support from Holland High Tech through the PPS TKI-HTSM project HiLoGe. This publication is supported by QuTech NWO funding Part III ’Application based research – Demonstrators’, with Project number 601.QT.001 Part III-C\_Groove, financed by the Dutch Research Council (NWO).

![[assets/figures/references/ge-18qubit-2026/23d653db6b02f4f2529245886aba562a47ffc803419765437abac3d86914e71a.jpg]]

![[assets/figures/references/ge-18qubit-2026/e33f8c9f72a64a371f26aa8cd0579bb7e8bb8cbc5214c446261c2a94645f2eee.jpg]]

![[assets/figures/references/ge-18qubit-2026/e71d2c68e95ee72298bb1e64d9b73bf59c2a1ed2561b412cb0de1a940605e618.jpg]]

![[assets/figures/references/ge-18qubit-2026/9cd120dafeab5e6cbf5103923cf99a834c15d2ff9fa33d8efb888827e5d262d7.jpg]]

![[assets/figures/references/ge-18qubit-2026/ce6b04e365bd4c190f84899f522dba73b2b11a5b35bb7020a96655bffe03a5d3.jpg]]  
Fig. 4. Two-qubit couplings and quantum gate circuits in $\mathbf { a \ 2 } \times \mathbf { 2 }$ plaquette. a, Two-qubit spectroscopy for all nine vertical qubit pairs in the 18-qubit array. The measurements show the splitting of the qubit resonance frequency $\left( f _ { \mathrm { q u b i t } } - f _ { 0 } \right)$ as a function of the applied barrier gate pulse amplitude $( \Delta V _ { \mathrm { B } } )$ , for a spin-down (circles) and spin-up (squares) initialization of the control qubit. This frequency splitting directly reflects the exchange interaction between the two qubits. b, Exchange tunability for each vertical qubit pair, defined as the barrier pulse amplitude required to change the exchange coupling by one order of magnitude. The average exchange tunability is ∼ 19 ± 3 mV/dec. c, Quantum circuit of a decoupled controlled-phase (CZ) gate interleaved within a Ramsey sequence on Q9. d, Return probability $P _ { \mathrm { b l o c k e d } }$ after the decoupled CZ circuit, as a function of detuning $\varepsilon _ { 9 , 1 0 }$ and total barrier pulse duration $2 t _ { \mathrm { p u l s e } } . \ \mathbf { e } _ { \mathrm { : } }$ , Amplitude calibration of the CZ gate. Return probability $P _ { \mathrm { b l o c k e d } }$ by repeating $N _ { \mathrm { C Z } }$ times the CZ pulses in a decoupling sequence, as a function of the relative pulse amplitude $V / V _ { J }$ and $N _ { \mathrm { C Z } }$ . The magenta dashed line shows the calibrated amplitude of the CZ gate. f, Quantum circuit for preparing a three qubit GHZ state and measuring parity oscillations. For each experimental implementation (magenta, green, orange), only the correspondingly colored R<sub>z</sub> gates are applied. g, Parity oscillations of the three-qubit GHZ state as a function of the applied phase $\theta ,$ for single-qubit (1 R<sub>z</sub>), two-qubit (2 R<sub>z</sub>) and three-qubit (3 R<sub>z</sub>) phase rotations.

## AUTHOR CONTRIBUTIONS

J.J.D., X.Z., and N.W.H. designed the experiments. J.J.D., X.Z., D.v.D., and D.G. performed the data analysis, interpretation, and presentation. A.B. fabricated the device on material provided by L.E.A.S. and G.S. D.G. performed device screening and characterization. D.B., A.B., and D.v.D. contributed to the experimental hardware setup; A.C. contributed to the experimental software setup. J.J.D., X.Z., and N.W.H. wrote the manuscript with input from all co-authors. A.-M.J.Z. and N.W.H. supervised the project.

## COMPETING INTERESTS

N.W.H. and A.-M.J.Z are directors of Groove Quantum B.V. A.B., A.C., A-M.J.Z., D.B., D.v.D., D.G., G.S., J.D., N.W.H., and X.Z. declare equity interest in Groove Quantum. The other authors declare no competing interests.

## METHODS

## Device and setup

The quantum processor is fabricated on a Ge/SiGe heterostructure with a buried strained germanium quantum well. The device contains an overlapping gate stack, consisting of three separate electrically isolated gate layers, and ohmic contacts to the quantum well. The device is thermally anchored to the mixing chamber of a dilution refrigerator with a base temperature of around 14 mK. The charge sensors are measured using radio-frequency reflectometry, with tank circuits formed by NbTiN inductors mounted on the PCB and the spurious capacitance of the bonding wires and metal lines on the board and chip. Sensor reflectometry is performed using Qblox QRM modules. All plunger and barrier gates of the device are connected to Qblox QCM modules that generate all control signals.

## Initialization protocol

To intialize the full QPU, we follow the conceptual protocol described in the main text. For each readout pair, we first align the DQD detuning to a relaxation hot spot to allow for a fast decay into the lowest-energy even parity charge state (e.g. S(2,0) or S(0,2)). Next, we take a reference measurement to account for slow charge sensor drifts and adiabatically ramp the DQD detuning to the middle of the odd parity charge state (e.g. (1,1)), thereby initializing either a |↓↓⟩ or |↓↑⟩ spin state, depending on the relative size of the diferent anticrossings [44]. The initialization state for the entire device is |↓↓↓↓↓↓↑↓↓↑↓↑↓↓↓↓↑↓⟩, which is inferred from the sign of the frequency shifts observed in the two-qubit spectroscopy (Fig. 4a).

## Randomized benchmarking

We perform randomized benchmarking to measure the single-qubit fidelities of the 18 qubits reported in Fig. 1b. For each qubit, the data are extracted as the diference between the benchmarking measurements with target states |0⟩ and |1⟩. The resulting randomized benchmarking data and fits are shown in Extended Data Fig 7. To fit the data points, we assume that they follow an exponential decay of the form $P = A F ^ { n } + B$ , with A and B as fitting parameters, F as the circuit level fidelity, and n as the number of Cliford operations. To calculate the Cliford fidelity, we use the following expression:

$$
F _ {C} = 1 - (1 - F) / 2\tag{1}
$$

while the native gate fidelity is defined by:

$$
F _ {\mathrm{gate}} = 1 - (1 - F _ {C}) / (2 N _ {\mathrm{avg}})\tag{2}
$$

in which $N _ { \mathrm { a v g } }$ is the average gate number per Cliford and is equal to 2 for our chosen Clifords [31]. Importantly, we measured the fidelities using the same voltage settings across the entire 18-qubit array.

$$
\mathrm{Gatevirtualization}
$$

We employ a four-layer gate-virtualization scheme to mitigate control crosstalk [45]. In the first layer, we compensate the the influence of the device gates on the charge sensors. In the second layer, we orthogonalize the plunger gates, enabling independent control of the chemical potential of each quantum dot. In the third layer, we normalize the charging energies of the quantum dots. Finally, in the fourth layer, we compensate the cross talk from the interdot barrier gates onto the quantum dot chemical potentials.

## Parity readout

In the GHZ-state measurements, the parity readouts of (Q7,Q8) and (Q9,Q10) provide access to a four-body correlator. From the joint parity outcomes, we extract the expectation value $\langle Z _ { 7 } Z _ { 8 } Z _ { 9 } Z _ { 1 0 } \rangle \ = \ P _ { \mathrm { E E } } \ - \ P _ { \mathrm { E O } } \ -$ $P _ { \mathrm { O E } } + P _ { \mathrm { O O } }$ , where P<sub>EE</sub>, P<sub>EO</sub>, P<sub>OE</sub> and $P _ { \mathrm { O O } }$ are the joint probabilities for the even/even, even/odd, odd/even and odd/odd parity outcomes, respectively. Since Q8 is initialized in |↓⟩ and remains unchanged throughout the circuit, $\left. Z _ { 8 } \right. = - 1$ , such that $\langle Z _ { 7 } Z _ { 9 } \bar { Z } _ { 1 0 } \rangle = - \langle \bar { Z } _ { 7 } Z _ { 8 } Z _ { 9 } Z _ { 1 0 } \rangle$

## Automatic calibration

To compensate for slow drifts and ensure stable device operation, an automated calibration procedure is executed regularly. This procedure is structured as a sequence of deterministic calibration steps, each followed by automated evaluation of the data and updating of the corresponding calibration parameters. Extended Data Fig 10 illustrates the calibration flow applied to our 18- qubit device, highlighting the sequence of routines required to track and correct daily fluctuations in the system. The procedure starts with a sensor-to-flank calibration, where all charge sensors are tuned at their most sensitive operating points. This is followed by a series of Rabi-based calibrations on individual qubits, including optimization of the readout sequence, qubit drive frequency, qubit drive amplitude, and state discrimination thresholds.

As each calibration stage is dependent on the successful completion of the preceding one, we implement a structured and hierarchical workflow. The calibration diagram, automatically generated as part of the calibration routine, provides a compact visual summary of the calibration status, enabling a quick verification of the successful execution of all steps. This methodology supports a gradual transition from manual to fully automated calibration while retaining the possibility for human oversight and intervention when needed.

[1] Mohseni, M. et al. How to build a quantum supercomputer: Scaling from hundreds to millions of qubits. arXiv preprint arXiv:2411.10406 (2024).

[2] Zwerver, A. et al. Qubits made by advanced semiconductor manufacturing. Nature Electronics 5, 184–190 (2022).

[3] Neyens, S. et al. Probing single electrons across 300-mm spin qubit wafers. Nature 629, 80–85 (2024).

[4] Steinacker, P. et al. Industry-compatible silicon spinqubit unit cells exceeding 99% fidelity. Nature 1–7 (2025).

[5] Xue, X. et al. Cmos-based cryogenic control of silicon quantum circuits. Nature 593, 205–210 (2021).

[6] Bartee, S. K. et al. Spin-qubit control with a milli-kelvin cmos chip. Nature 1–6 (2025).

[7] Vandersypen, L. M. et al. Interfacing spin qubits in quantum dots and donors—hot, dense, and coherent. npj Quantum Information 3, 34 (2017).

[8] Veldhorst, M., Eenink, H. G., Yang, C.-H. & Dzurak, A. S. Silicon cmos architecture for a spin-based quantum computer. Nature communications 8, 1766 (2017).

[9] Franke, D. P., Clarke, J. S., Vandersypen, L. M. & Veldhorst, M. Rent’s rule and extensibility in quantum computing. Microprocessors and Microsystems 67, 1–7 (2019).

[10] Gonzalez-Zalba, M. et al. Scaling silicon-based quantum computing using cmos technology. Nature Electronics 4, 872–884 (2021).

[11] Stano, P. & Loss, D. Review of performance metrics of spin qubits in gated semiconducting nanostructures. Nature Reviews Physics 4, 672–688 (2022).

[12] Xue, X. et al. Quantum logic with spin qubits crossing the surface code threshold. Nature 601, 343–347 (2022).

[13] Mills, A. R. et al. Two-qubit silicon quantum processor with operation fidelity exceeding 99%. Science Advances 8, eabn5130 (2022).

[14] Mądzik, M. T. et al. Precision tomography of a threequbit donor quantum processor in silicon. Nature 601, 348–353 (2022).

[15] Huang, J. Y. et al. High-fidelity spin qubit operation and algorithmic initialization above 1 k. Nature 627, 772–777 (2024).

[16] Wu, Y.-H. et al. Simultaneous high-fidelity singlequbit gates in a spin qubit array. arXiv preprint arXiv:2507.11918 (2025).

[17] Takeda, K., Noiri, A., Nakajima, T., Kobayashi, T. & Tarucha, S. Quantum error correction with silicon spin qubits. Nature 608, 682–686 (2022).

[18] Van Riggelen, F. et al. Phase flip code with semiconductor spin qubits. npj Quantum information 8, 124 (2022).

[19] Undseth, B. et al. Weight-four parity checks with silicon spin qubits. arXiv preprint arXiv:2601.23267 (2026).

[20] Zhang, C. et al. Quantum error detection in a silicon quantum processor. Nature Electronics 1–9 (2026).

[21] Zhang, C. et al. Universal logical operations in a silicon quantum processor. Nature Nanotechnology 1–7 (2026).

[22] De Smet, M. et al. High-fidelity single-spin shuttling in silicon. Nature Nanotechnology 20, 866–872 (2025).

[23] Matsumoto, Y. et al. Two-qubit logic and teleportation with mobile spin qubits in silicon. arXiv preprint arXiv:2503.15434 (2025).

[24] Ademi, Z. et al. Distributing entanglement between distant semiconductor qubit registers using a shared-control

shuttling link. arXiv preprint arXiv:2510.26860 (2025).

[25] Philips, S. G. et al. Universal control of a six-qubit quantum processor in silicon. Nature 609, 919–924 (2022).

[26] George, H. C. et al. 12-spin-qubit arrays fabricated on a 300 mm semiconductor manufacturing line. Nano Letters 25, 793–799 (2024).

[27] Nickl, A. et al. Eight-qubit operation of a 300 mm simos foundry-fabricated device. arXiv preprint arXiv:2512.10174 (2025).

[28] Edlbauer, H. et al. An 11-qubit atom processor in silicon. Nature 648, 569–575 (2025).

[29] Hendrickx, N. W. et al. A four-qubit germanium quantum processor. Nature 591, 580–585 (2021).

[30] Zhang, X. et al. Universal control of four singlet–triplet qubits. Nature Nanotechnology 20, 209–215 (2025).

[31] John, V. et al. Robust and localised control of a 10-spin qubit array in germanium. Nature Communications 16, 10560 (2025).

[32] Lodari, M. et al. Low percolation density and charge noise with holes in germanium. Materials for Quantum Technology 1, 011002 (2021).

[33] Scappucci, G. et al. The germanium quantum information route. Nature Reviews Materials 6, 926–943 (2021).

[34] Fischer, J., Coish, W. A., Bulaev, D. V. & Loss, D. Spin decoherence of a heavy hole coupled to nuclear spins in a quantum dot. Phys. Rev. B 78, 155329 (2008).

[35] Hendrickx, N. et al. Sweet-spot operation of a germanium hole spin qubit with highly anisotropic noise sensitivity. Nature Materials 23, 920–927 (2024).

[36] Yu, C. X. et al. Optimising germanium hole spin qubits with a room-temperature magnet. arXiv preprint arXiv:2507.03390 (2025).

[37] Hensgens, T. et al. Quantum simulation of a fermi– hubbard model using a semiconductor quantum dot array. Nature 548, 70–73 (2017).

[38] Seidler, I. et al. Spatial uniformity of g-tensor and spinorbit interaction in germanium hole spin qubits. arXiv preprint arXiv:2510.03125 (2025).

[39] Stehouwer, L. E. A. et al. Exploiting strained epitaxial germanium for scaling low-noise spin qubits at the micrometre scale. Nature Materials 24, 1906–1912 (2025).

[40] Rimbach-Russ, M., Philips, S. G., Xue, X. & Vandersypen, L. M. Simple framework for systematic highfidelity gate operations. Quantum Science and Technology 8, 045025 (2023).

[41] Loss, D. & DiVincenzo, D. P. Quantum computation with quantum dots. Physical Review A 57, 120 (1998).

[42] Heinz, I., Mills, A. R., Petta, J. R. & Burkard, G. Analysis and mitigation of residual exchange coupling in linear spin-qubit arrays. Physical Review Research 6, 013153 (2024).

[43] Wang, C.-A. et al. Operating semiconductor quantum processors with hopping spins. Science 385, 447–452 (2024).

[44] Tsoukalas, K. et al. A dressed singlet-triplet qubit in germanium. Nature Communications 17, 699 (2026).

[45] Rao, A. S. et al. Modular autonomous virtualization system for two-dimensional semiconductor quantum dot arrays. Physical Review X 15, 021034 (2025).

EXTENDED DATA  
![[assets/figures/references/ge-18qubit-2026/c0387b2a604208e5b8ebd8d167ee77b6bb6326964c47e01f0ebbd3b17f9d600d.jpg]]  
Extended Data Fig. 1. Extendable 2 × N quantum dot array in germanium. a, Schematic of the generalized $2 \times N$ quantum dot architecture. The 18-qubit array studied in the main text, is based on a repeating 2x3 unit cell that can be extended along one dimension. Each unit cell includes a dedicated charge sensor, while ohmic contacts on either end of the array act as reservoirs to load holes into the system. This modular design enables the realization of arrays with various sizes (e.g. 6, 12, or 18 qubits) and can be extended into larger systems. b-d, Examples of layouts generated from the 2xN architecture: b, 2x3 array; $\mathbf { c } ,$ 2x6 array; d, 2x9 array, corresponding to the device studied in the main text (see Fig. 1a). Ohmic contacts, screening gates, plunger gates, and barrier gates are indicated in green, magenta, blue and red, respectively.

![[assets/figures/references/ge-18qubit-2026/cef1f8fdb9ae7ba4d1058de7895807518a2796d74907626ab5bcad1565adc0f7.jpg]]  
Extended Data Fig. 2. Horizontal and vertical double quantum dot charge stability diagrams in the 18-qubit array. Charge stability diagrams of all double quantum dot (DQD) pairs, measured as a function of the virtual plunger gates voltages of two neighboring dots $( v P _ { i } , \ v P _ { j } )$ , for both horizontal (e.g. Q1,Q3) and vertical (e.g. Q1,Q2) pairs. Blue circles indicate the plungers gate defining the quantum dots. The gate virtualization minimizes crosstalk between control gates, ensuring that tuning a given dot does not significantly shift the chemical potentials of neighboring dots. For all DQD pairs, the top-right corner in the CSD, corresponds to the (0,0) charge configuration.

![[assets/figures/references/ge-18qubit-2026/14156571665745d79f455f10ce9b4154294299827c52065dea8a898ea7f12b12.jpg]]  
Extended Data Fig. 3. Magnetic field sweep and identification of the operating conditions for qubit control. The out-of-plane magnetic field $B _ { x }$ is swept between 0 and 2 mT to identify optimal operating conditions, as defined by the sweet plane of minimal hyperfine interaction at the g-tensor equation [35]. Due to the finite variations in qubit g-tensors, a single global sweet spot in the $B _ { x }$ -field cannot be found for all qubits. A field of $B _ { x } = 0 . 8 3$ mT (white dashed lines) is therefore chosen as a compromise, placing most qubits close to their respective sweet spots.

a  
![[assets/figures/references/ge-18qubit-2026/08a9e983d6bbcc2debd9973ab2e1e411b1afe2aaf61c8990c7f972acd7d31574.jpg]]

b  
![[assets/figures/references/ge-18qubit-2026/3a11f4b22c09def90f96b0a8515fe3d3d1c57996c0410f3c5633ada4fc138808.jpg]]  
Extended Data Fig. 4. Rabi and Larmor frequencies in the 18-qubit array. Colour maps of the extracted Rabi frequencies (a) and Larmor frequencies (b), obtained from the measurements shown in Fig. 2a.

![[assets/figures/references/ge-18qubit-2026/6393108c869b123666a8358d27beade930e78fdb1ca518d209975b7e6842051b.jpg]]  
Extended Data Fig. 5. Extracted $T _ { 2 } ^ { * }$ values in the 18-qubit array. Ramsey measurements used to extract qubit coherence across the array. For each qubit, the corresponding dephasing time $T _ { 2 } ^ { * }$ is extracted by fitting the data to $P _ { \mathrm { { b l o c k } } } =$ $A e ^ { - ( t / T _ { 2 } ^ { * } ) ^ { 2 } } \cos { ( 2 \pi f t + \phi ) } + C$ where $A , \phi , f$ and C are fit parameters.

![[assets/figures/references/ge-18qubit-2026/997db78c0fe397736aa2b6e5788104db593a40bac9d3138c64e596621ecdad95.jpg]]  
Extended Data Fig. 6. Extracted $T _ { 2 } ^ { \mathbf { C P M G } }$ values in the 18-qubit array. CPMG measurements used to extract qubit coherence across the array, using a Carr-Purcell-Meiboom-Gill sequence with N = 256 refocussing pulses. For each qubit, the corresponding decoherence time $T _ { 2 } ^ { \mathrm { C P M G } }$ is extracted by fitting the data to: $P _ { \mathrm { b l o c k } } = A e ^ { - ( t / T _ { 2 } ^ { \mathrm { C P M G } } ) ^ { \alpha } } + C$ where $A , \alpha ,$ and C are fit parameters. We note that qubit Q4 sufers from coupling to a coherent noise source, resulting in an additional oscillation in the decay. To allow us to extract the envelope decay, we include an oscillatory component in the fit function.

Extended Data Fig. 7. Single-qubit gate randomized benchmarking in the 18-qubit array. For every qubit, single-qubit gate randomized benchmarking results are reported. The data are extracted as the diference between randomized benchmarking measurements with target states |0⟩ and |1⟩ (see Methods for details).  
![[assets/figures/references/ge-18qubit-2026/38570c712dd3606e2c7e871b56fde8c21c7fa8c1217c1ece638f89eff57c5ef4.jpg]]

Extended Data Fig. 8. Tunability of the qubit Larmor frequency, as extracted from the two-qubit gate spectroscopy. Values of the qubit Larmor frequency tunability as a function of the vertical interdot barrier voltage, expressed as the slope of the linear component observed in the exchange spectroscopy (Fig.4a).

![[assets/figures/references/ge-18qubit-2026/6822cf0e962e0b3039d9d41ef47bda93eb332ef42b1085b28a55ee05cb344e02.jpg]]  
Extended Data Fig. 9. Exchange coupling in a 2×2 plaquette. Illustration of gate tunability of the exchange coupling as a function of the barrier gate voltage pulse depth, for the three qubit pairs involved in the measurement of GHZ parity oscillations (Q7,Q8, Q7,Q9, and Q9,Q10).

![[assets/figures/references/ge-18qubit-2026/119e07a554c67fe190c1921f9d37eac1f0509dfac3b678fd3f022ee6fd67964a.jpg]]  
Extended Data Fig. 10. Automatic calibration of the qubit array. Calibration flow for an 18-qubit device showing the sequence of automated routines that are used to maintain stable operation and compensate for daily variations.

![[assets/figures/references/ge-18qubit-2026/83e3af7b2d23eba85aa6a1928c8a80bbc272a3d5472e8c52b264e3e75e201b0b.jpg]]  
Extended Data Fig. 11. Visibility comparison of individual and simultaneous Rabi oscillations. The visibility is defined as $V = P _ { \mathrm { m a x } } - P _ { \mathrm { m i n } }$ , where $P _ { \mathrm { m a x } }$ and $P _ { \mathrm { m i n } }$ are the maximal and minimal probabilities in a sinusoidal fit to the measured Rabi oscillations. The data used to extract these visibilities is shown in Fig. 3b
