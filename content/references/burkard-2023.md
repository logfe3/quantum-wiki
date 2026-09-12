---
title: Semiconductor spin qubits
description: 半导体自旋比特的最新权威综述：编码（单自旋/ST/交换型）、驱动、读出、耦合与扩展的全景图。
aliases:
 - burkard-2023
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">半导体自旋比特的最新权威综述：编码（单自旋/ST/交换型）、驱动、读出、耦合与扩展的全景图。</div>

> [!info] 文献信息
> G. Burkard, T. D. Ladd, J. M. Nichol, A. Pan & J. R. Petta, “Semiconductor spin qubits”, Reviews of Modern Physics **95**, 025003 (2023).
> [arXiv:2112.08863](https://arxiv.org/abs/2112.08863) · [DOI:10.1103/RevModPhys.95.025003](https://doi.org/10.1103/RevModPhys.95.025003)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Guido Burkard

Department of Physics, University of Konstanz, D-78457 Konstanz, Germany

Thaddeus D. Ladd and Andrew Pan

HRL Laboratories LLC, 3011 Malibu Canyon Road, Malibu, California 90265, USA

John M. Nichol

Department of Physics and Astronomy, University of Rochester, Rochester, New York 14627, USA

Jason R. Petta

Department of Physics, Princeton University, Princeton, New Jersey 08544, USA

The spin degree of freedom of an electron or a nucleus is one of the most basic properties of nature and functions as an excellent qubit, as it provides a natural two-leve system that is insensitive to electric fields, leading to long quantum coherence times. This coherence survives when the spin is isolated and controlled within nanometer-scale, lithographically fabricated semiconductor devices, enabling the existing microelectronics industry to help advance spin qubits into a scalable technology. Driven by the burgeoning field of quantum information science, worldwide eforts have developed semiconductor spin qubits to the point where quantum state preparation, multiqubit coherent control, and single-shot quantum measurement are now routine. The small size, high density, long coherence times, and available industrial infrastructure of these qubits provide a highly competitive candidate for scalable solid-state quantum information processing. We review the physics of semiconductor spin qubits, focusing not only on the early achievements of spin initialization, control, and readout in GaAs quantum dots, but also on recent advances in Si and Ge spin qubits, including improved charge control and readout, coupling to other quantum degrees of freedom, and scaling to larger system sizes. We begin by introducing the four major types of spin qubits: single spin qubits, donor spin qubits, singlet-triplet spin qubits, and exchange-only spin qubits. We then review the mesoscopic physics of quantum dots, including single-electron charging, val leys, and spin-orbit coupling. We next give a comprehensive overview of the physics of exchange interactions, a crucial resource for single- and two-qubit control in spin qubits. The bulk of this review is centered on the presentation of results from each major spin qubit type, the present limits of fidelity, and a brief overview of alternative spin qubit platforms. We then give a physical description of the impact of noise on semiconductor spin qubits, aided in large part by an introduction to the filter function formalism. Lastly, we review recent eforts to hybridize spin qubits with superconducting systems, including charge-photon coupling, spin-photon coupling, and long-range cavity-mediated spin-spin interactions. Cavity-based readout approaches are also discussed. This review is intended to give an appreciation for the future prospects of semiconductor spin qubits, while highlighting the key advances in mesoscopic physics over the past two decades that underlie the operation of modern quantum-dot and donor spin qubits.

CONTENTS
I. Introduction 2 D. Zeeman interactions and spin-orbit coupling 15
E. Valleys 17
F. Hyperfine interactions 18
II. Basics of spin qubits 4 IV. Spin-spin interactions 19
A. Loss-DiVincenzo (LD) spin qubit 4 A. Kinetic exchange in the Fermi-Hubbard hopping model 20
B. Donor spin qubits and Kane's proposal 5 B. Heitler-London and Hund-Mulliken models 20
C. Singlet-triplet (ST₀ and ST±) qubits 6 C. FCI calculations of exchange 21
D. Exchange-only (EO) and resonant-exchange (RX) qubits 8 D. Discussion of theoretical approaches for calculating exchange 22
E. Spin qubits with additional charge degrees of freedom 9 E. Pauli spin blockade 23
F. Long-range couplers 24
III. Mesoscopic physics of dots and donors 10 1. Spin transport, spin SWAPs, and spin-CTAP 24
A. Quantum confinement 10 2. Superexchange 25
1. Bulk bandstructure 10 3. Capacitive and electric dipole-dipole couplings 25
2. Bandstructure engineering 11 4. Cavity QED 25
3. Electrostatic gating 12
B. Electron-electron interactions in QDs 12 V. Quantum gates and quantum circuits 25
C. Isolating and detecting single charges 14 A. Loss-DiVincenzo single spin qubits 26

1. Initialization and readout 26  
2. Single-qubit gates 27  
3. Two-qubit gates 28  
4. Limits of fidelity - randomized benchmarking 29  
B. Donor spin qubits 30  
1. Donor electron spin control and readout 30  
2. Donor nuclear spin control and readout 31  
3. Two-qubit gates 31  
4. Limits of fidelity - randomized benchmarking 31  
C. Singlet-triplet qubits 32  
1. Initialization and readout 32  
2. Single-qubit gates 32  
3. Two-qubit gates 34  
4. Limits of fidelity - randomized benchmarking 34  
D. Exchange-only qubits 35  
1. Initialization and readout 35  
2. Exchange-only single-qubit gates 35  
3. Resonant-exchange single-qubit gates 36  
4. Two-qubit gates 36  
5. Limits of fidelity - randomized benchmarking 37  
E. Alternative material platforms 37  
1. Carbon nanotubes 37  
2. Spin-orbit qubits 38  
3. Holes in Si and Ge/GeSi 38  
F. Discussion 39  

VI. Dephasing and decoherence 40  
A. Filter function formalism 40  
1. $T_{1}$ via noise correlation function 40  
2. Filter function derivation 40  
3. Dephasing time $T_{2}^{*}$ 41  
4. Decoherence time $T_{2}$ and rotating frame timescales 42  
5. Filters for multi-spin qubits 42  
6. Non-Markovian and contextual noise 43  
B. Spin dephasing due to hyperfine interactions 43  
C. Phonon-mediated spin relaxation 44  
D. Charge noise 45  

VII. Hybrid systems 46  
A. Overview of superconducting circuit QED 47  
B. Coherent interactions in quantum dot circuit QED 47  
1. Charge-photon coupling 47  
2. Spin-photon coupling 48  
3. Cavity-mediated spin-spin interactions 49  
C. Applications for readout 50  
D. New avenues of research in cQED 50  

VIII. Outlook 51  

A. Spin Rotation Gates 52  
Acknowledgments 53  
References 53

## I. INTRODUCTION

Quantum computers are fundamentally capable of vastly outperforming all classical computers for a growing list of problems (Childs and van Dam, 2010; DiVincenzo, 1995; Ekert and Jozsa, 1996; Feynman, 1982; Jordan, 2021; Montanaro, 2016; Nielsen and Chuang, 2000; Shor, 1997). In order to perform a quantum computation, the information to be processed must be represented in a suitable physical form (Landauer, 1991). Semiconductor spin qubits are one platform that has fulfilled the main criteria for the implementation of quantum computation.

The requirements for quantum computation can be stated as follows (DiVincenzo, 1998; DiVincenzo, 2000): 1) The elementary units of information need to be stored in a scalable quantum register. In analogy to binary logic where bits take on the value of 0 or 1, quantum information is typically stored in the form of quantum bits (qubits). A qubit is a quantum two-level system with orthogonal, i.e. distinguishable, basis states |0i and |1i. Systems with spin-1/2 are perhaps the simplest example of this encoding, although other spin-based possibilities exist, as we will discuss. 2) A further requirement is that the qubits can be prepared in a fiducial state, e.g. |00 . . . 0i. 3) The quantum system must remain coherent for times much longer than the duration of elementary logic gates, since decoherence causes computational errors. 4) Along with maintaining coherence, a high-fidelity gate set (single qubit and two qubit gates) must be attainable. 5) Finally, it is required that a suficiently large part of the quantum register can be read out at the end of a computation.

The spin degree of freedom quite naturally defines a qubit, as spin-up or spin-down in the case of one electron (Loss and DiVincenzo, 1998), or as two distinct nuclear spin states (Kane, 1998). As we will show, spin qubits have satisfied the DiVincenzo criteria. Electron spins can be electrically initialized and read out with high fidelity using energy dependent tunneling or the Pauli exclusion principle (Elzerman et al., 2004; Petta et al., 2005). While coupling of the charge to electric fields allows for electrical control of spin states, the small magnetic moment of the electron spin is weakly coupled to the environment leading to long spin coherence times. Semiconductors may be ideal hosts for solid state qubits, as materials such as Si can be chemically and isotopi cally purified to extremely high levels. As Kane pursuasively points out (Kane, 1998), “Because of the advanced state of Si materials technology and the tremendous efort currently underway in Si nanofabrication, Si is the obvious choice for the semiconductor host.” Experiments on large spin ensembles demonstrating seconds-long electron spin coherence times and hours-long nuclear spin coherence times in isotopically enriched silicon give credence to Kane’s statement (Saeedi et al., 2013; Tyryshkin et al.,

![[assets/figures/references/burkard-2023/9a58565bb3562d3284a52375d1ab78065ce54947af89ee91eaa6f7708317acc6.jpg]]  
FIG. 1 The four major qubit types covered in this review, with images depicting the original proposals, early devices, and modern devices. a) Loss-Divincenzo (LD) single spin qubits (Loss and DiVincenzo, 1998),(Elzerman et al., 2004),(Mills et al., 2019b). (b) Donor spin qubits (Kane, 1998),(Morello et al., 2010),(He et al., 2019). (c) Singlet-triplet (ST) spin qubits (Levy, 2002),(Petta et al., 2005),(Fedele et al., 2021). (d) Exhange-only (EO) spin qubits (DiVincenzo et al., 2000),(Medford et al., Courtesy of DiV2013a),(Ha et al., 2021).

2012).

Elzerman Nature 2005 Morello Nature 2010Single spins have been controlled with electron spin resonance (Koppens et al., 2006) and two-electron spin states with exchange coupling (Petta et al., 2005). Silicon quantum devices have achieved high fidelity single qubit (Yoneda et al., 2018) and two-qubit gates (Veld horst et al., 2015b; Watson et al., 2018; Zajac et al., 2018), and recent advances have pushed the fidelity beyond the thresholds required to enter a regime for faulttolerant operation (Mills et al., 2021; Noiri et al., 2021; Xue et al., 2021b).

Another motivation for harnessing the spin degree of freedom is scale. Given that a fully-error corrected quantum computer is likely to require at least one million physical qubits (Fowler et al., 2012), the small ∼ 100 nm intrinsic scale of quantum dots (QDs) lends itself to the creation of a dense quantum computing architecture that could be mass-produced by the semiconductor microelectronics industry (Vandersypen et al., 2017). At the same time, the small size scale of a spin qubit can lead to engineering challenges associated with addressing each qubit and achieving suficient connectivity for quantum error correction. Indeed, many recent exciting physics results from the QD community have shown that spins can be coherently coupled to microwave photons (Landig et al., 2018; Mi et al., 2018a; Samkharadze et al., 2018), providing tantalizing opportunities for long-range coupling of spin qubits and readout (Borjans et al., 2020, 2021a; Mi et al., 2018a; Petersson et al., 2012; Zheng et al., 2019).

The scope of this review is limited to semiconductor spin qubits in shallow donors and gate-defined QDs. Electronic and nuclear spins of point defects in widebandgap semiconductors such as diamond or SiC are outside the scope of this review, and we refer the interested reader to Childress and Hanson, 2013 and Doherty Fedele PRX Quant. 2021 Ha arXiv 2021<sub>et al., 2013. Optically addressable and self-assembled</sub> Fig. 1a Fig. 1b<sub>QDs have provided seminal studies toward semiconduc</sub> tor spin qubits, including early measures of semiconductor spin decoherence rates, but are more relevant for photonic implementations of quantum information systems that are not the focus of this review (Bracker et al., 2005; De Greve et al., 2011; Imamoglu et al., 1999; Kroutvar et al., 2004; Warburton, 2013). Topological quantum computation, both with anyons in quantum Hall systems (Das Sarma et al., 2006) and with Majorana fermions in superconductor-semiconductor hybrid systems (Das Sarma et al., 2015; Mourik et al., 2012) will not be covered.

The following Sec. II will introduce the four major types of spin qubits, namely the single-spin qubit, donor spin qubit, singlet-triplet spin qubit, and exchange-only spin qubit. Figure 1 gives an overview of the four qubit types, with images illustrating the theoretical proposals, early devices, and modern devices. Readers familiar with the basic spin qubit types can skip ahead to Sec. III, which covers the mesoscopic physics underpinning the operation of semiconductor spin qubits. The initiated reader may want to directly delve into the subsequent sections for selected topics. Details regarding the control of spin-spin interactions, in particular exchange, can be found in IV. The implementation of quantum gates and circuits for the various spin qubit flavors is discussed in Sec. V. Dephasing and decoherence of spin qubits due to uncontrolled interactions with their environment is covered in Sec. VI. Hybrid systems consisting of semiconductor spin qubits embedded into superconducting circuits can be found in Sec. VII. We conclude by commenting on future directions for the field (Sec. VIII).

## II. BASICS OF SPIN QUBITS

In this Section, we introduce the various kinds of spin qubits. At the most basic level, we can classify spin qubit types based on the number of spins used to encode the qubit. Figure 2 shows the Bloch spheres and control axes for single spin qubits, two-spin singlet-triplet qubits, and three-spin exchange only qubits. For example, the single spin Loss-DiVincenzo qubit encodes quantum information in the spin state of a single electron. A static magnetic field lifts the degeneracy between the spin-up and spin-down states of the electron, while a transverse ac magnetic field drives coherent rotations between spin-up and spin-down (Loss and DiVincenzo, 1998).

At a more detailed level (see Table I), the diferent types of spin qubits are distinguished by how they encode spins into qubits; by the number and species of particle that carries the spin (atomic nucleus, electron, hole); by their placement in a single-site or multi-site arrangement, where a site can be a QD or a donor atom; and by their initialization, measurement, and control methods, all of which we elaborate on in this section.

Common to all semiconductor spin qubits is the confinement of spin to isolated sites. In semiconductors, in contrast to metals, the density of conduction electrons can be depleted to be arbitrarily low. The density may in fact be engineered, starting from zero in an intrinsic semiconductor at low temperature. This allows for the restriction of electron motion to two dimensions (2D) in quantum wells (QWs) or at interfaces between two materials (Ando et al., 1982), and further to one or even zero dimensions (1D or 0D) with electrostatic tailoring of the potential landscape (Kouwenhoven et al., 2001; van der Wiel et $a l .$ , 2002). Confinement in all spatial dimensions is achieved in QDs which localize electrons and act as artificial atoms (Kastner, 1992). A collection of electrons, each of which is confined to one such QD, provides a nearly ideal arena for the realization of spin-based quantum information processing (Loss and DiVincenzo, 1998).

Another commonality to all flavors of semiconductor spin qubits is some use of the exchange interaction. The physics of exchange will be discussed in more detail in Secs. III.B and IV, but the basic principle is that when the wavefunctions of two electrons in two distinguishable locations overlap, the energy of the spin-singlet state is lowered relative to the three spin triplet states by an amount called the exchange coupling J. This effect (sometimes referred to as pseudo-exchange or kinetic exchange) occurs due to the ability of electrons in the spin-asymmetric singlet state to move to and from the same location (while maintaining a totally antisymmetric wavefunction, as per the Pauli exclusion principle), whilst such motion is forbidden for the symmetric triplet states. The lowered energy of the singlet relative to the triplets for spins i and j is captured by the Heisenberg exchange Hamiltonian $H = J _ { i j } { \bf S } _ { i } \cdot { \bf S } _ { j }$ , where $\mathbf { S } _ { i }$ denotes the quantum operator for the spin of the electron residing in the i-th site. From a quantum control perspective, an appeal of spin qubits is that $J _ { i j }$ can typically be tuned over many orders of magnitude by adjusting gate voltages (Petta et al., 2005). Depending on the type of spin qubit, the exchange interaction may be used for both single (Eng et al., 2015; Levy, 2002; Petta et $a l .$ , 2005) and two-qubit gates (Nowack et al., 2011; Veldhorst et al., 2015b; Watson et al., 2018; Zajac et al., 2018).

## A. Loss-DiVincenzo (LD) spin qubit

The spin- $1 / 2$ of an electron represents a natural realization of a qubit. The encoding for a single electron spin ‘Loss-DiVincenzo’ qubit is a direct mapping $\mathbf { S } _ { i } ~ = ~ \sigma _ { i } / 2$ between spin operators and encoded Pauli operators. In the limit of tight electronic confinement, with one electron per dot, the electron spin dynamics are governed by the Heisenberg exchange Hamiltonian (as discussed above) and the single-electron Zeeman Hamiltonian, leading to a total Hamiltonian of the form:

$$
H (t) = \frac {1}{4} \sum_ {\langle i, j \rangle} J _ {i j} (t) \pmb {\sigma} _ {i} \cdot \pmb {\sigma} _ {j} + \frac {1}{2} \sum_ {i} g _ {i} \mu_ {B} \mathbf {B} _ {i} \cdot \pmb {\sigma} _ {i},\tag{1}
$$

where $\mathbf { B } _ { i }$ and $g _ { i }$ are the (efective) magnetic field and g-factor at site i.

The Loss-DiVincenzo qubit requires a method of initialization and measurement of single electron spin states. The original proposal (Loss and DiVincenzo, 1998) suggested spin-selective ferromagnetic elements in the device, however actual practice has employed spin-selective tunneling to a Fermionic bath of electrons (Elzerman et al., 2004), in which a large static magnetic field $B \gg k _ { B } T _ { e } / g \mu _ { B }$ enables tunneling of the higher energy QD spin-state to the Fermi sea, while tunneling from the lower energy spin state is energetically forbidden. Here $k _ { B }$ is Boltzmann’s constant and $T _ { e }$ is the electron temperature. The presence or absence of a tunneling event, as measured using sensitive charge detectors (see Sec. III.C), is then used to infer the orientation of the electron spin. This spin readout protocol is commonly refered to as ‘Elzerman readout’ and it requires relatively large magnetic fields, which in turn sets the Larmor frequency for spins in the tens of GHz range.

![[assets/figures/references/burkard-2023/e8a3c0bcbf462493acdf3c9e19531908b9a8f53af1e30654808bc5fbd365f0a3.jpg]]  
FIG. 2 a) Spin configurations, b) Bloch spheres, and c) energy level diagrams associated with Loss-DiVincenzo (LD) single spin qubits, two-spin singlet-triplet (ST<sub>0</sub>) qubits, and three-spin exchange-only (EO) spin qubits. Donor spin qubits also rely on single-spins, similar to the LD case. We conventionally identify the north pole of the Bloch sphere with the qubit |0i state and the south pole with |1i, irrespective of which state is lower in energy. For the LD qubit, a static magnetic field $B _ { \mathrm { e f f } } ^ { z }$ defines the quantization axis of the single spin, while a transverse (and smaller) ac magnetic field $B _ { \mathrm { e f f } } ^ { x } ( t )$ drives coherent spin rotations between spin-up and spin-down. We identify $| 0 \rangle = | { \downarrow } \rangle$ and $| 1 \rangle = | \uparrow \rangle$ and note that the level ordering in c) holds for $g > 0 ~ \mathrm { e . g . }$ for Si. For the $\mathrm { S T _ { 0 } }$ qubit, exchange coupling J and a longitudinal magnetic field gradient $\Delta B ^ { z }$ provide two orthogonal control axes. For the EO spin qubit, nearest-neighbor exchange couplings $J _ { 1 2 }$ and $J _ { 2 3 }$ provide two control axes that are separated by $1 2 0 ^ { \circ }$ on the Bloch sphere.

For this qubit type, the single-spin B-dependent (Zeeman) terms provide single-qubit control. Timedependent control of $\mathbf { B } _ { i }$ or $g _ { i }$ is required for the implementation of single-qubit gates; this has been realized using a combination of static and oscillatory magnetic fields within the framework of electron spin resonance (ESR) (Koppens et $a l .$ , 2006; Pla et $a l . ,$ 2012; Veldhorst et al., 2015b), or using oscillatory electric fields in combination of spin-orbit coupling (Nadj-Perge et al., 2010; Nowack et al., 2007) or magnetic field gradients (Brunner et al., 2011; Yoneda et $a l .$ , 2018; Zajac et al., 2018) by applying electric dipole spin resonance (EDSR).

The exchange coupling, which can be adjusted with gate voltages (Petta et al., 2005), allows for timedependent two-qubit control and hence the realization of entangling two-qubit gates between nearest-neighbor spins (Nowack et al., 2011). Recent implementations of Loss-DiVincenzo qubits use static field gradients for B, pulsed or ac-driven exchange for $J _ { i j } ( t )$ , and oscillatory electric fields (Watson et al., 2018; Zajac et al., 2018) to achieve full control of a two-qubit system.

## B. Donor spin qubits and Kane’s proposal

Shortly after the publication of the Loss-DiVincenzo proposal on quantum computation with QDs, Bruce Kane published a proposal to use the nuclear spins of $\mathrm { ^ { 3 1 } P }$ donor atoms in silicon to construct a quantum computer (Kane, 1998). Nuclear spins are highly coherent since the nuclear gyromagnetic ratio, $\gamma _ { n } / 2 \pi = 1 7 . 2 ~ \mathrm { M H z / T }$ $\mathrm { f o r \ ^ { 3 1 } P , }$ is nearly 2,000 times smaller than the electron gyromagnetic ratio $\gamma _ { e } / 2 \pi \approx 2 8 ~ \mathrm { G H z / T }$ , and their lack of mobility in a solid-state host inhibits charge-hybridizing or spin-orbit-related decoherence mechanisms (which are discussed in detail in section VI).

Kane proposed using the $I = 1 / 2$ nuclear spin of $\mathrm { a \ ^ { 3 1 } P }$ donor in Si as a quantum bit. $\mathrm { 3 1 \dot { P } }$ is a shallow donor in Si with a 45 meV ionization energy (Feher, 1959; Wilson and Feher, 1961). The donor electron has a hydrogenic slike ground state with an efective Bohr radius of 1.8 nm (Smith et al., 2017). To maintain a high degree of nuclear spin coherence, the donor nuclear spins would ideally be embedded in a host material composed of $I = 0$ isotopes as background nuclear spins can lead to decoherence. Despite their small efective mass and widespread use in mesoscopic physics, common III-V semiconductors such as GaAs and InAs only have stable isotopes with $I \ne 0$ In contrast, Si is primarily composed of $I = 0$ nuclear spin isotopes $^ { 2 8 } \mathrm { S i }$ and <sup>30</sup>Si. The remaining 5% of $I = 1 / 2 \mathrm { ~ } ^ { 2 9 } \mathrm { S i }$ can be removed through isotopic enrichment.

TABLE I Spin qubit configurations grouped by the number of spin-1/2 particles per qubit (rows) and number of sites – usually QDs (columns). Spins are indicated by grey dots (electrons/holes) or white dots (nuclei), numbered to adhere to the basis description of Table II. Sites are indicated by pink circles; their overlap indicates “always-on exchange,” meaning that the spins contained are somewhat delocalized across the site even for the idle qubit.  
![[assets/figures/references/burkard-2023/7fba70f1b1c5a0802403cc5a205fa4258d26b0dda96ad1ee7bd40b55358602da.jpg]]

Gate voltage control of the donor-bound electronic wavefunction is a crucially important aspect of the Kane quantum computer. Kane proposed using an array of $^ { 3 1 } \mathrm { { F } }$ donor atoms placed ≈ 200 <sup>˚</sup>A beneath the Si surface as the register of qubits. By adjusting the voltage $V _ { g }$ on an A-gate placed above each donor, the donor electron can be pulled away from the donor towards the $\mathrm { S i / S i O _ { 2 } }$ interface to reduce the hyperfine interaction $A ( V _ { g } )$ and control the nuclear spin resonance frequency. Nuclear spin exchange is mediated by electrons achieved using gates called J-gates, which are located between adjacent donor sites. The J-gate voltage influences the overlap between adjacent donor electron wavefunctions, and through the hyperfine interaction, the nuclear spin exchange coupling. Measurements of the nuclear spin state are performed by again leveraging the tunability of the electronic wavefunction using gates. Nuclear spin initialization can be achieved using the same steps for nuclear spin state readout, with an additional radio-frequency driven rotation to the desired starting spin state if required.

Since Kane’s proposal, many elements of this qubit type have been demonstrated, and in so doing many critical variations on the donor-qubit concept have emerged. $\mathrm { ^ { 3 1 } P }$ nuclei have been placed in isotopically enhanced silicon substrates using both masked ion-implantation methods (Morello et al., 2010) and scanning tunneling microscopy (Fuechsle et al., 2012). Control of the ex change interaction between $\mathrm { ^ { 3 1 } P }$ donor-bound electrons has been demonstrated using both fabrication methods (He et al., 2019; Madzik et al., 2020). The initialization and readout of a single $\mathrm { ^ { 3 1 } P }$ nuclear spin has been performed with over 99% fidelity (Pla et $a l .$ 2013), the Agate-modulated hyperfine interaction has been used as envisioned by Kane to tune electron and nuclear Larmor resonances (Madzik et $a l . .$ 2020), and multi-qubit electron and nuclear processes have been characterized with gate-set-tomography for total single and two-qubit gate fidelities exceeding 99% (Madzik et $a l .$ , 2021; Nielsen et al., 2021). A key challenge of the Kane proposal is that the required exchange interaction is highly sensitive to the $\mathrm { 3 1 } \bar { \mathrm { P } }$ donor placement (Koiller et al., 2001), requiring either impeccable fabrication tolerance or more tolerant forms of two-qubit gates, several of which have been proposed (Broome et al., 2018; Tosi et al., 2017).

## C. Singlet-triplet (ST<sub>0</sub> and ST<sub>±</sub>) qubits

Both the Loss-DiVincenzo (Loss and DiVincenzo, 1998) and Kane (Kane, 1998) proposals for quantum computing involve single-spin qubits manipulated with a combination of static and oscillating electric and magnetic fields. The oscillating fields can be dificult to localize in nanoscale devices, and the power dissipated by those fields can be problematic at cryogenic temperatures. In addition, the primary source of dephasing for single-spin qubits is the magnetic noise associated with the semiconductor environment, which can be large in materials such as GaAs, which have spinful nuclei (see Sec. VI). In part to overcome these control and dephasing challenges, spin qubits can be realized through different sets of multi-spin states associated with groups of electrons (Table I).

TABLE II Spin qubit encodings: The first column N is the number of spin- $1 / 2$ particles per qubit, followed by a named “Type” of qubit discussed in this review. The two qubit states |0i and |1i are then specified in terms of both conserved and qubit-dependent “q-number” describing the total angular momentum; here m always refers to the total spin projection, whereas $S _ { j k \cdots }$ <sub>·</sub> refers to the combined total spin angular momentum of spins $j , k , \dots$ Clebsch-Gordan coeficients translate these spin angular momentum combinations into “States.” For the three-spin case, m may take either value $\pm 1 / 2$ in the encoded subspace. The final column shows the encoded Pauli operators σ of the qubit in terms of the spin operators $\dot { \bf S } _ { j }$ of each spin- $1 / 2$ particle j. The qubit states are the ±1 eigenstates of $\sigma ^ { z } ;$ ; degeneracies in these eigenstates indicate gauge freedom, and the null space of these operators are leakage states. For the LD qubit, the constant relating the logical qubit to the spin changes with the g-factor; the minus value shown here is consistent with the Si $g > 0$ choice used in Fig. 2.

<table><tr><td>N</td><td>Type</td><td></td><td>q-numbers</td><td>States</td><td>Encoded Qubit Pauli Operators</td></tr><tr><td rowspan="2">1</td><td rowspan="2">Loss-DiVincenzo</td><td>|0⟩</td><td>m = -1/2</td><td>|↓⟩</td><td rowspan="2">σ = -2S1</td></tr><tr><td>|1⟩</td><td>m = +1/2</td><td>|↑⟩</td></tr><tr><td rowspan="3"></td><td rowspan="3">Singlet-Triplet (ST0)</td><td>|0⟩</td><td>S12 = m = 0</td><td>|S⟩ = (|↑↓⟩ - |↓↑⟩)/√2</td><td>σx = S1z - S2z</td></tr><tr><td rowspan="2">|1⟩</td><td rowspan="2">S12 = 1, m = 0</td><td rowspan="2">|T0⟩ = (|↑↓⟩ + |↓↑⟩)/√2</td><td>σy = 2ẑ · S2 × S1</td></tr><tr><td>σz = 2(S1z S2z - S1 · S2)</td></tr><tr><td rowspan="3">2</td><td rowspan="3">Flip-Flop</td><td>|0⟩</td><td rowspan="3">m = 0</td><td>|↑↓⟩</td><td>σx = 2(S1 · S2) - S1z S2z</td></tr><tr><td rowspan="2">|1⟩</td><td rowspan="2">|↓↑⟩</td><td>σy = 2ẑ · S2 × S1</td></tr><tr><td>σz = S1z - S2z</td></tr><tr><td rowspan="3"></td><td rowspan="3">Singlet-Triplet (ST+)</td><td>|0⟩</td><td>S12 = m = 0</td><td>|S⟩</td><td>σx = (S2x - S1x)/√2 + √2(S1z S2x - S1x S2z)</td></tr><tr><td rowspan="2">|1⟩</td><td rowspan="2">S12 = m = 1</td><td rowspan="2">|T+⟩ = |↑↑⟩</td><td>σy = (S1y - S2y)/√2 + √2(S1y S2z - S1z S2y)</td></tr><tr><td>σz = -(S1z + S2z)/2 - S1 · S2 - S1z S2z</td></tr><tr><td rowspan="3">3</td><td rowspan="3">Exchange-Only (DF Subsystem), RX, AEON, Hybrid</td><td>|0⟩</td><td>S123 = 1/2</td><td>|S⟩|m⟩</td><td>σx = 2(S2 - S1) · S3/√3</td></tr><tr><td rowspan="2">|1⟩</td><td>S12 = 0</td><td>(√2 |T2m⟩| - m⟩</td><td>σy = 4(S1 × S2 · S3)/√3</td></tr><tr><td>S12 = 1</td><td>- |T0⟩|m⟩)/√3</td><td>σz = 2[(S1 + S2) · S3 - 2S1 · S2]/3</td></tr><tr><td rowspan="4">4</td><td rowspan="4">Exchange-Only (DF Subspace), QUEX, Singlet-Singlet</td><td>|0⟩</td><td>S1234 = m = 0</td><td>|S⟩|S⟩</td><td>σx = 2[S1 × S2 · S3 × S4 + (S2 - S1) · (S3 - S4)/4]/√3</td></tr><tr><td rowspan="3">|1⟩</td><td>S12 = S34 = 0</td><td>(|T+⟩|T-⟩ + |T-⟩|T+⟩</td><td>σy = [S1 × S2 · (S3 - S4) + S3 × S4 · (S1 - S2)]/√3</td></tr><tr><td rowspan="2">S12 = S34 = 1</td><td rowspan="2">- |T0⟩|T0⟩)/√3</td><td>σz = 2(S1 × S4 · S2 × S3 + S1 × S3 · S2 × S4)/3</td></tr><tr><td>+ [(S1 - S4) · (S3 - S2) + (S1 - S3) · (S4 - S2)]/6</td></tr></table>

Conceptually, the simplest extension of the single-spin qubit is a qubit formed from two electrons in a double quantum dot (DQD), utilizing the controlled singlettriplet splitting ofered by the exchange interaction to define the singlet-triplet $\left( \mathrm { S T _ { 0 } } \right)$ qubit (Levy, 2002; Petta et al., 2005). The |Si and $\left| \mathrm { T } _ { 0 } \right.$ states are defined in Table II. Along with the basis states, the encoded qubit Pauli operators $\boldsymbol { \sigma } ^ { x } , \boldsymbol { \sigma } ^ { y }$ and $\sigma ^ { z }$ are defined such that the ±1 eigenstates of $\sigma ^ { z }$ are the encoded states and the 0- eigenstates are leakage states (polarized triplet states $T _ { \pm }$ in this case). Additionally, all of the encoded Paulioperators have the correct commutation relations.

To understand how physical interactions map to encoded qubit operations, any spin operator X can be de composed into encoded Pauli operators as $\begin{array} { r } { X = \sum _ { j } c ^ { j } \sigma ^ { j } } \end{array}$ with $c ^ { j } = \mathrm { T r } \{ X \sigma ^ { j } \} / 2$ . Thus in the encoded ST<sub>0</sub> qubit subspace, and ignoring an overall phase factor, the $\mathrm { S T _ { 0 } }$ qubit Hamiltonian in the presence of exchange and mag-

netic field gradients is

$$
H _ {\mathrm{ST} _ {0}} = J _ {1 2} \frac {\sigma^ {z}}{2} + \mu_ {B} \Delta (g ^ {*} B ^ {z}) \frac {\sigma^ {x}}{2}.\tag{2}
$$

Here, the exchange coupling $J _ { i j }$ can be experimentally controlled by adjusting QD gate voltages (Petta et $a l .$ 2005) and $\Delta ( g ^ { * } B ^ { z } )$ is the efective diference in magnetic field between the two dots along an applied global field direction (z-direction).

The $\mathrm { S T _ { 0 } }$ qubit exists in a decoherence-free subspace (DFS) with respect to global magnetic fields that couple to the spin of the electron since $m { = } 0$ for both |Si and $\left| \mathrm { T } _ { 0 } \right.$ (Lidar et al., 1998). As a result of the tunable exchange coupling $J , \mathrm { { S T _ { 0 } } }$ qubits feature full electrical control with baseband voltage pulses (Petta et al., 2005). Although the $\mathrm { S T _ { 0 } }$ qubit is insensitive to global magnetic fields, it remains sensitive to local magnetic-field fluctuations as a result of the $\Delta B ^ { z }$ term in the Hamiltonian. The $\sigma ^ { x }$ term may result from quasi-static hyperfine fields (Petta et al., 2008; Taylor et al., 2007), g-factor variations (Jock et $a l .$ 2018; Liu et al., 2021), or micromagnet field gradients.

Pauli spin blockade, a manifestation of exchange coupling (Sec. V.C), enables straightforward, rapid, and high-fidelity measurement of joint spin states. A spin blockade measurement converts singlets and triplets to diferent spatial configurations of the two electrons in the DQD, which can easily be distinguished with a nearby charge sensor (Barthel et al., 2010; Borjans et al., 2021a; Petta et al., 2005).

Since the initial demonstration (Petta et al., 2005), $\mathrm { S T _ { 0 } }$ qubits and variants thereof have been the focus of intense research. Single-qubit gates have been studied in GaAs QDs (Bluhm et $a l .$ , 2010b; Shulman et $a l .$ , 2014) and in Si QDs (Fogarty et al., 2018; Jock et al., 2018; Maune et $a l .$ , 2012; Wu et al., 2014). Capacitive coupling of $\mathrm { S T _ { 0 } }$ qubits can yield an entangling operation (Nichol et al., 2017; Shulman et $a l .$ , 2012; Taylor et al., 2007). Early results on $\mathrm { S T _ { 0 } }$ qubits coupled via a superconducting resonator or exchange coupling are also encouraging (Bottcher et al., 2021).

In the presence of a global magnetic field, the Zeeman energy can compensate for exchange, and the polarized triplet $( | \mathrm { T } _ { + } \rangle$ in GaAs or |T<sub>−</sub>i in Si) can become degenerate with the singlet state. This degeneracy can be lifted via transverse magnetic field gradients (Taylor et $a l .$ , 2007), spin-orbit coupling, or spin-valley coupling, and an efective $\mathrm { S T _ { + } }$ qubit can be formed in GaAs (or ST<sub>−</sub> qubit in $\mathrm { S i } ;$ we will loosely refer to both types as $\mathrm { S T _ { \pm } }$ qubits, with the understanding that the relevant triplet state is dependent on the sign of the $g -$ factor). In the $\{  { | \mathrm { S } \rangle } ,  { | \mathrm { T } _ { + } \rangle } \}$ basis the encoded Hamiltonian is $H _ { \mathrm { S T _ { + } } } = E _ { \mathrm { S T _ { + } } } \sigma ^ { z } / 2 + \Delta _ { \mathrm { S T } } \sigma ^ { x } / 2$ , where the electricallytunable qubit splitting $E _ { \mathrm { S T } _ { + } } ~ = ~ E _ { Z } - J ,$ for average Zeeman energy $E _ { Z }$ . The size of the coupling $\Delta _ { \mathrm { S T } }$ depends on multiple factors, including transverse nuclear fields (Petta et al., 2010) and spin-orbit coupling (Nichol et $a l .$ , 2015). Various methods relating to Landau-Zener-St¨uckelberg interferometry enable full control over $\mathrm { S T _ { + } }$ qubits (Gaudreau et $a l .$ , 2012; Petta et al., 2010). To date, ac-driven $\mathrm { S T _ { \pm } }$ Rabi oscillations have not been observed. Two-qubit gates based on capacitive coupling have been proposed (Ribeiro et al., 2010).

A qubit related to the $\mathrm { S T _ { 0 } }$ qubit is the flip-flop qubit for two spins, which take $| { \uparrow \downarrow } \rangle$ and |↓↑i as eigenstates. As can be seen by the spin-operators defining the encoded $\sigma ^ { j }$ operators in Table II, this qubit is efectively a rotation of the $\mathrm { S T _ { 0 } }$ qubit about the y-axis of the Bloch sphere. The rotated $\mathrm { S T _ { 0 } }$ Bloch sphere provides a more natural description when the efective magnetic field gradient between the two spins is the dominant term in the Hamiltonian. The large field gradient regime is more commonly encountered with LD qubits in the presence of a micromagnet field gradient (Watson et al., 2018; Zajac et al., 2018) or with electron spins bound to spin-carrying donor nuclei (Tosi et al., 2017).

## D. Exchange-only (EO) and resonant-exchange (RX) qubits

Quantum computing using LD qubits requires two different types of interactions described by Eq. (1): (i) an entangling spin-spin coupling, typically the exchange interaction, that can be used to realize two-qubit gates (Petta et al., 2005), and (ii) an efective local magnetic field that splits the qubit spin-up and spin-down states in a chosen basis and thus enables the execution of singlequbit gates (Koppens et al., 2006). In a circuit-based model with separable initial states, single-qubit gates alone are not suficient for universal quantum computation. However, universal quantum computation is possible with the exchange interaction alone if employing qubits defined by an encoded subspace with constant total spin (Bacon et al., 2000; DiVincenzo et al., 2000; Kempe et al., 2001).

In Sec. II.C we indicated that singlet-triplet qubits consisting of two spin-1/2 particles require efective magnetic field gradients to realize two-axis qubit operations; however the Hilbert space of three or more spin-1/2 particles contains subspaces of dimension two or greater with identical spin quantum numbers, on which exchange may al low universal control. Mathematically, the Hilbert space of two spins may be combined by angular momentum rules as $\mathcal { H } _ { 1 / 2 } \otimes \mathcal { H } _ { 1 / 2 } = \mathcal { H } _ { 0 } \oplus \mathcal { H } _ { 1 }$ where $\mathcal { H } _ { S }$ denotes the $2 S + 1$ dimensional representation space of the rotation group for a spin-S system. Since exchange conserves total spin $S$ as well as all spin projections $m ,$ exchange can at most provide a phase diference between the $S = 0$ (singlet) and $S = 1$ (triplet) representations. In the case of three spin-1/2 particles, angular momentum rules decompose the total spin Hilbert space into a direct sum of two total-spin-1/2 subspaces and one total spin-3/2, i.e.

$\mathcal { H } _ { 1 / 2 } { \otimes } \mathcal { H } _ { 1 / 2 } { \otimes } \mathcal { H } _ { 1 / 2 } = \mathcal { H } _ { 1 / 2 } { \oplus } \mathcal { H } _ { 1 / 2 } { \oplus } \mathcal { H } _ { 3 / 2 }$ . Exchange gives full control within the two copies of spin-1/2 subspaces, which provide the qubit.

The 2S+1 states in subspace $\mathcal { H } _ { S }$ with total spin S are characterized by the angular momentum projection, or m, quantum number. Since exchange conserves m, this degree of freedom is not accessed by exchange-only control. For $\mathrm { S T _ { 0 } }$ and for four-spin qubits in the $S ~ = ~ 0$ subspace, $m \ = \ 0$ However, for the three spin-case there are two copies of the $S = 1 / 2$ qubit corresponding to $m = \pm 1 / 2$ Any exchange operation within a single, three-spin qubit behaves the same regardless of m. One possibility is to operate the three-spin qubit at high magnetic fields, where the m value of the polarized ground state provides the “decoherence-free subspace” qubit. However, since the two subspaces perform equivalently, the second possibility is to leave m unpolarized, and ignore this degree of freedom; doing so results in a “decoherence-free subsystem” qubit. This is straightforward for single-qubit gates, but puts additional constraints on exchange-based two-qubit gates (DiVincenzo et al., 2000). The states of the $S = 1 / 2$ decoherence free subsystem qubit are shown in Table II, for arbitrary m. We note in this table that for 3-spin and 4-spin DFS qubits, unlike the single-spin or two-spin cases, the decomposition of encoded Pauli-operators into spin operators feature no notion of direction; the qubit is controlled via the controlled fractional permutations of spins, rather than physical rotations about any preferred axis.

From Table II, we see that for three spins in the $S _ { 1 2 3 } =$ $1 / 2$ subsystem, exchange coupling between spins 1 and $2 ,$ as for singlet-triplet qubits, appear as a $\sigma ^ { z }$ . Exchange coupling between spins 2 and 3 has weight both as $\sigma ^ { x }$ and $\sigma ^ { z }$ , combining to the ˆn axis shown in Fig. 2. Composite gates enabling arbitrary single-qubit operations may be composed of combinations of these exchange operations.

Quantum gate operation for the EO qubit proceeds by sequentially pulsing on and of the exchange coupling $J _ { i j } ( t )$ for pairs of spins i and j (parallel pulsing of disjoint pairs is possible) while the magnetic field is held at a constant value identical for all qubits (e.g. zero field for all qubits). Since the pulse duration is chosen suficiently long such that the pulse bandwidth in frequency space is smaller than $J _ { i j }$ , this type of operation is referred to as dc operation. In the idle state without quantum gates being executed, the exchange coupling is set to zero everywhere $( J _ { i j } \ = \ 0 )$ ; all qubit states are degenerate, and ideally there is no phase evolution between superposed states in the laboratory frame. As we will discuss further in Sec. V.D, exchange between pairs of qubits from distinct qubits allows for the implementation of a universal twoqubit gate (DiVincenzo et al., 2000).

An alternative mode of operation for EO qubits is termed the resonant-exchange (RX) qubit. The RX qubit difers from the dc-mode EO qubit in that the nearestneighbor exchange couplings are constantly set to the same non-zero value $J = J _ { 1 2 } = J _ { 2 3 } $ , opening an energy gap between the qubit states |0i and |1i. Singlequbit gates can then be executed with ac exchange pulses $\Delta J ( t ) = J _ { 1 2 } - J _ { 2 3 } \propto \cos ( \omega t )$ where $\hbar \omega = J$ (Medford et al., 2013a,b; Taylor et al., 2013). Two-qubit gates can be obtained using dc pulses for the exchange coupling between pairs of spins belonging to diferent qubits (Doherty and Wardrop, 2013), or presumably via capacitive couplings, as demonstrated for the case of $\mathrm { S T _ { 0 } }$ qubit (Shulman et al., 2012).

While allowing for narrow-band ac operation, alwayson exchange coupling also—to some extent—exposes the qubit to electric noise. The discussion of possible ways to protect RX qubits from electric noise at suitable operating points where the qubit is insensitive to noise (sweet spots) has led to the asymmetric resonant-exchange (ARX) qubit (Russ and Burkard, 2015a) and always-on exchange-only (AEON) (Shim and Tahan, 2016) qubit concepts. The AEON qubit allows for one-qubit and twoqubit operations while always remaining at a sweet spot. Magnetic field gradients are also a source of unwanted noise for exchange-only qubits. For any of these threespin encodings, matrix elements due to local gradients will, in general, cause leakage from the total S subspace in which the qubit is encoded into another S subspace.

## E. Spin qubits with additional charge degrees of freedom

The spin qubits discussed above operate in the regime of half-filling, with one particle per site, as represented by the diagonal entries in Table I. The half-filled charge configuration restricts the degrees of freedom to the spin of the particles, while particle hopping only occurs virtually (with small quantum amplitude) to produce the exchange interaction between spins. The exchange interaction as so far described is a weak and temporary charge hybridization; always-on exchange qubits (RX, ARX, AEON) as described in the prior section weakly connect dots into larger structures to hybridize spin and charge. In this section, we describe qubit variants that take this to the extreme of putting multiple spins into common sites, or correlating sites to spin, to more strongly exploit spincharge hybridization for qubit initialization and readout, electric-field control, and electric-dipole coupling to other qubits or cavity electric fields.

An instructive example is the flopping-mode qubit, which consists of a single electron that can occupy either the left or right site of a DQD (Benito et al., 2019a; Croot et $a l .$ , 2020; Mutter and Burkard, 2021). The charge can be coupled to the spin by spin-orbit coupling or an external magnetic field gradient, and delocalization of the charge across the DQD near zero level detuning enhances the electric dipole moment compared to a single QD (Cottet and Kontos, 2010; Hu et al., 2012). Judicious control of the energy level detuning and tunneling strength between the two sites permits a tunability of the electric dipole. Therefore strong coupling to the electric field or other qubits can be obtained when needed, while there is a small susceptibility to charge noise at small coupling or sweet spots when the qubit is idle. Increasing the number of sites available to a single particle to three allows for the formation of a charge quadrupole qubit (Friesen et al., 2017; Koski et al., 2020).

Rather than extending the number of sites for a single particle, one can also decrease the number of sites for the three-particle EO qubit. Reduction from three to two sites leads to the QD hybrid qubit (Kim et al., 2014; Koh et al., 2012; Shi et al., 2012, 2014). While this design essentially fixes the intra-site exchange coupling to a non-zero value, it still allows for fast electrical control of a qubit via the energy detuning and tunnel coupling. Although charge noise is a concern for the hybrid qubit, its impact is reduced due to the similarity of the orbital wavefunctions of the intra-site singlet and triplet states. Reducing the number of sites further to a single site, one obtains the spin-charge qubit (Kyriakidis and Burkard, 2007), see Table I.

Four spins in four dots can define a pulsed EO qubit via the decoherence-free-subspace with total spin $S = 0$ This qubit is initialized into its ground state via two spin singlets (Bacon et al., 2000). RX-like operation is possible using at least three always-on exchange interactions between four dots (Sala and Danon, 2017). Alternatively, a hybrid quadrupolar exchange-only (QUEX) mode of operation is possible with four spins in three dots, using a valley or orbital splitting in the central dot as an efective always-on exchange coupling (Russ et al., 2018a).

## III. MESOSCOPIC PHYSICS OF DOTS AND DONORS

In this section, we review the basic principles behind the operation of QDs and donors, which form the basis for semiconductor spin qubits. In subsection III.A we discuss how electrons, which exist in bulk semicon ductors as delocalized Bloch states, can be confined in QDs by the heterostructure and externally applied potentials. The essential role of Coulomb interactions in defining QD states and the exchange interaction is covered in subsection III.B. Subsection III.C summarizes the development of QD device designs and charge sensing technology. We conclude by covering interactions with other microscopic degrees of freedom in semiconductor QDs, such as spin-orbit coupling (SOC) and its relation to the Zeeman Hamiltonian (III.D), valley states in silicon (III.E) and lattice nuclei (III.F). Several of these topics have also been reviewed elsewhere, e.g., Hanson et al., 2007; van der Wiel et al., 2002; and Zwanenburg et al., 2013, and we will emphasize recent developments where applicable.

## A. Quantum confinement

Semiconductor spin qubits rely on the full threedimensional (3D) confinement of electrons. Figure 3 illustrates some of the most commonly employed spin qubit designs and the resulting electronic confinement potentials. In most planar QD systems, a layered semicon ductor heterostructure generates confinement in the zdirection (generally the growth direction), while electrostatic gates confine electrons in the xy-plane [see Figs. 3 (a,c,d,e)]. In the case of donor spin qubits [see Fig. 3 (b)], 3D confinement is generated by the Coulomb potential of the dopant atom in the semiconductor. FinFET approaches [Fig. 3(f)] use a combination of etching and electrostatic gating to define QDs. We begin our discussion of confinement by considering the bulk bandstructure of the most common materials used to fabricate spin qubits, namely GaAs and Si.

## 1. Bulk bandstructure

Figure 4 shows the first Brillouin zone and electronic bandstructure of GaAs and Si (Yu and Cardona, 2010), which arise due to the crystalline potential of each material. While the full bandstructure is quite complex, much of its practical impact on the properties of QDs is captured by the efective mass approximation (EMA) describing the conduction band minima and valence band maxima. In this approach, the crystal potential efects are encapsulated by a renormalized kinetic energy operator in the Schr¨odinger equation, yielding the singleparticle Hamiltonian (Yu and Cardona, 2010)

$$
H _ {\mathrm{EMA}} = \sum_ {i = x, y, z} \frac {- \hbar^ {2}}{2 m ^ {i}} \frac {\partial^ {2}}{\partial (r ^ {i}) ^ {2}} + U (\mathbf {r}) + \mu_ {B} \mathbf {S} \cdot \hat {g} \cdot \mathbf {B},\tag{3}
$$

with efective masses $m ^ { i }$ and the position vector $\mathbf { r } \ =$ $( r ^ { x } , r ^ { y } , r ^ { z } ) = ( x , y , z )$ . In this equation we have also included the slowly varying potential $U ( \mathbf { r } )$ which includes, e.g., the electrostatic potential generated by the gate electrodes, as well as the Zeeman term with the efective gtensor $\hat { g }$ which is discussed further in Sec. III.D.

The efective mass may be isotropic or anisotropic depending on the material; in the former case, we can define a single efective mass $m ^ { * } = m ^ { x , y , z }$ . For instance, free electrons in GaAs [Fig. 4(a)], occupy the isotropic Γ (k = 0) point conduction band minimum and are described by $m ^ { * } = 0 . 0 6 7 m$ , where m is the bare electron mass. Bulk silicon [Fig. 4(b)], by contrast, has a six-fold degenerate conduction band minimum along the h100i $( \Delta )$ directions in k-space; each valley has an anisotropic efective mass of 0.92m and 0.19m in its longitudinal and transverse directions, respectively, where m is the free electron mass. The six-fold valley degeneracy is broken

a) Donors

![[assets/figures/references/burkard-2023/28d22b600d32b4920404b89b8b304aa9afdf604c850f1986f185f88b82d733f2.jpg]]  
FIG. 3 Device designs commonly used to confine electron spins. Vertical confinement is illustrated in the plots of E(z) and lateral confinement is illustrated in the xy-plane. (a) Donor electrons are confined by the positive potential of the donor atom and manipulated with gates defined through conventional or STM lithography. (b) Depletion mode device design commonly used in early GaAs experiments. (c,d) Modern SiMOS and Si/SiGe devices utilize overlapping gate architectures to achieve tight control of QD electrons. In SiMOS, electrons are localized at the $\mathrm { S i O _ { 2 } / S i }$ interface (c). In Si/SiGe (d), the electrons reside in a buried quantum well. (e) SLEDGE (single layer etch-defined gate electrodes) devices utilize a single layer of gates patterned on the top surface of a Si/SiGe heterostructure. The gates are contacted from above using vias, which allows gate wiring to fan out away from the active area of the device in multiple planes. (f) FinFETs use a combination of dry etching and electrostatic gating to confine QD electrons.

in Si devices by heterostructure and electrostatic confinement which induces a valley splitting, which is discussed in more detail in III.E.

The efective mass approximation is suficient for understanding many QD properties. However, microscopic details of important phenomena such as spin-orbit and valley splitting are sensitive to band mixing and atomistic efects beyond the efective mass approximation. Microscopic descriptions of such efects can be obtained from more complicated bandstructure models, for instance using k·p or tight-binding Hamiltonians (Yu and Cardona, 2010). Such models are also useful in particular to describe valence band holes, where multiple bands are relevant due to Γ point degeneracies and SOC. As pictured in Fig. 4, this leads to heavy hole (HH) and light hole (LH) bands which are degenerate at Γ, as well as a splitof (SO) band which is lowered in energy by the bulk spin-orbit splitting.

## 2. Bandstructure engineering

To trap single spins, quantum confinement is necessary and is typically provided by a combination of materialand electrostatically-defined spatial barriers. For donors in bulk silicon, 3D confinement is provided by the impurity potential itself as depicted in Fig. 3(a). This potential decays as $1 / r$ away from the impurity, but has localized corrections in the immediate vicinity of the donor site; the latter short-range efects are called “centralcell” corrections (Pantelides, 1978). In epitaxial Si/SiGe and GaAs/AlGaAs heterostructures, by contrast, electrons are confined in the out-of-plane (growth) direction by the conduction band ofsets occurring at semiconductor interfaces (Abram and Jaros, 1989; Ando et al., 1982; Bastard, 1991).

For instance, many seminal results in mesoscopic physics were obtained with two-dimensional electron gas (2DEG) devices fabricated on Schottky-gated GaAs/AlGaAs heterostructures [Fig. 3(b)]. Sandwiching a thin GaAs layer between two $\mathrm { { A l } } _ { x } \mathrm { { G a } } _ { 1 - x } \mathrm { { A s } }$ layers creates a 2DEG in the GaAs layer due to its lower conduction band edge. A 2DEG can also be formed at a single heterointerface, e.g., GaAs/AlGaAs, which confines electrons inside GaAs in a nearly triangular confinement potential. In most cases, the electrons are provided by doping the adjacent $\mathrm { { A l } } _ { x } \mathrm { { G a } } _ { 1 - x } \mathrm { { A s } }$ layer with Si atoms (Manfra, 2014). Undoped enhancement-mode devices, where electrons are electrostatically forced into the quantum well with a top gate, are also being investigated (Mak et al., 2013; Tracy et al., 2014).

![[assets/figures/references/burkard-2023/7601b54be9f4282bf162397f2679cf2e54baea982cb9aaf769a791d960ccc5f0.jpg]]  
FIG. 4 Bulk Brillouin zone (upper panels) and bandstructure (lower panels) as a a function of k along the h100i and h111i directions for (a) GaAs and (b) Si. The nondegenerate conduction band minimum in GaAs is centered at the Γ point $( k = 0 )$ , while Si has six equivalent conduction band minima along the high-symmetry h100i (∆) directions and an anisotropic efective mass. The heavy-hole (HH) and lighthole (LH) valence bands for both materials are separated in energy from the split-of (SO) band by the spin-orbit splitting.

In Si metal-oxide-semiconductor (MOS) devices, the 2DEG is formed at the Si-oxide interface. The large band gaps of most oxides allow for very large band ofsets, in turn enabling very high out-of-plane electric fields to be applied by metal gates without inducing leakage. As a result, MOS electrons are confined in an approximately triangular potential formed by the Si-oxide conduction band ofset on one side and the gate-induced electric field on the other, illustrated by the potential cut in Fig. 3(c).

2DEGs can be similarly formed in Si/SiGe heterostructures, where strain is appreciable due to the 4% larger lattice constant of Ge compared to Si (Sch¨afler, 1997). For spin qubit applications, a thin tensile-strained Si layer is typically sandwiched between lattice-relaxed $\mathrm { S i } _ { x } \mathrm { G e } _ { 1 - x }$ alloy layers, which induces a conduction band ofset that traps electrons in the Si QW. Undoped heterostructures are now the norm for Si/SiGe QWs, as electron accumulation can be totally gate-modulated (Deelman et al., 2016). The induced out-of-plane electric fields in these structures are therefore comparatively modest, as shown in Figs. 3(d,e). Finally, FinFETs extend MOS architectures utilizing etching and electrostatic gating to confine

![[assets/figures/references/burkard-2023/b38271def9ebf632c7b4da618017344b8649f114691a5e76fce6972d486f6f7c.jpg]]  
FIG. 5 Electrostatic confinement. (a) 1D states can be formed in a QPC due to the potential constriction from a split gate. (b) Electrostatic confinement in both in-plane directions of a QW lead to 0D QD states. (c) Two QDs placed in series form a DQD. Depletion-mode gates are pictured here.

QD electrons [Fig. 3(f)].

## 3. Electrostatic gating

Once a QW has been formed in a planar heterostructure, confinement in the in-plane dimensions can further reduce the efective dimensionality of the electronic states. In-plane confinement is achieved through the electrostatic potential U(r) in Eq. (3), which is typically induced by metal gate electrodes above the heterostructure. A confining potential along a single direction creates a quasi-1D channel, which can form a quantum point contact (QPC) [Fig. 5(a)]. Finer-grained electrostatic confinement along both in-plane directions can form effectively 0D QDs. The potential minima define QD locations where electrons can be trapped [Fig. 5(b)].

Gate voltage changes alter both the QD electrochemical potential as well as the shape of the confining potential. QDs can be connected in series to make larger structures, such as the DQD depicted in Fig. 5(c). In a DQD, the interdot barrier height can be voltage-controlled to modulate the interdot tunnel coupling $t _ { c } \ [ \mathrm { F i g . 6 ( c ) } ]$ Typical devices use separate plunger and barrier gates to control the dot electrochemical potentials and interdot barriers, respectively. In practice, geometrical crosscapacitances influence the potential under neighboring gates (van der Wiel et al., 2002), and voltage compensation of multiple gates is required to independently control each dot potential, a procedure sometimes referred to as defining “virtual gates” (van Diepen et al., 2018; Hensgens et al., 2017; Keller et al., 1996; Mills et al., 2019b).

## B. Electron-electron interactions in QDs

Bandstructure and electrostatic confinement allow the formation of 0D QD states and trapping of individual electrons (and hence spins). As more electrons are added to a QD, the electron-electron Coulomb interaction becomes critical to the properties of the whole system. Trapped electrons in a QD electrostatically repulse any other electron attempting to join that dot. This classical efect defines the charging energy $E _ { C } = e ^ { 2 } / C$ , where C is the total dot capacitance. Coulomb repulsion is drastically illustrated by the phenomenon of Coulomb blockade in electron transport through QDs. Biasing a QD in Coulomb blockade fixes its electron occupation, a prerequisite for defining any spin qubit (Hanson et al., 2007; Kouwenhoven et $a l . ,$ 2001).

a)  
![[assets/figures/references/burkard-2023/54477350ca8f3e5f0070ee7333ba107e57b3f6377d3c493ee9ad0e20d5924708.jpg]]  
b)

![[assets/figures/references/burkard-2023/e6c6e5f070a7333b4bdebe16692086e9e5754ee40f8e7024cc239b1bccde8d34.jpg]]

![[assets/figures/references/burkard-2023/c3460bb8889a91dc7685c04d2b9f0597e5e01ac9011c98f76564c623344bfc87.jpg]]  
d)

![[assets/figures/references/burkard-2023/d2f87b685e557db022eef1bbb6736cf8b033d8ae5fd02284dd4186a1279eb486.jpg]]  
FIG. 6 (a) DQD confinement potential. (b) DQD charge stability diagram fron Zajac et $a l .$ , 2018. (c) DQD energy levels near the (1,0)-(0,1) interdot charge transition. (d) DQD energy levels in the two-electron regime, showing the crossover from the $( 2 , 0 )  ( 1 , 1 )  ( 0 , 2 )$ charge state.

While Coulomb blockade can be understood conceptually by classical considerations, quantum efects further modify and enrich the physics. The full energy penalty for changing electron occupation is called the addition energy $E _ { \mathrm { a d d } }$ , which can be qualitatively understood with a simple constant interaction model in which $E _ { \mathrm { a d d } } = E _ { C } + E _ { \mathrm { o r b } }$ Here $E _ { \mathrm { o r b } }$ is the change in singleparticle energy that appears when an extra electron must occupy a new orbital level to enter the QD, due to the Pauli exclusion principle prohibiting more than two electrons from occupying a single energy level.

Transport through multiple QDs connected in series proceeds when the electrochemical potentials of the individual QDs lie within the source-drain bias window and tunneling from one dot to the next is downhill in energy (van der Wiel et al., 2002). We consider the level structure of a DQD in detail [Fig. 6(a)], as it illustrates several key QD control principles. Figure 6(b) shows a DQD charge stability diagram, with charge states denoted $( N _ { 1 } , N _ { 2 } )$ , where $N _ { i }$ is the number of electrons in dot i. For a single-electron DQD $( N _ { 1 } + N _ { 2 } = 1 )$ , there are two relevant charge states, (1,0) and (0,1), and we can approximate the DQD in that basis as a two-level

![[assets/figures/references/burkard-2023/c5201d4281cafca40fa63ee4eaffeb7fe62d59e63b289914d7b473832dedb0d2.jpg]]

![[assets/figures/references/burkard-2023/09eb2d6a8b4d662f21e3b9d3c4ab427fdf4dbb95b1c3a8828d2803a9aa309d24.jpg]]  
FIG. 7 Low-energy orbital spectrum of a one- and twoelectron QD. (a) A one-electron QD with a parabolic potential has excited states equally spaced by $E _ { \mathrm { o r b } }$ (only excitations along one dimension are shown for simplicity, and a small Zeeman splitting illustrates the spin degeneracy). (b) For two electrons, the total energy is increased by $E _ { \mathrm { a d d } }$ and the lowest singlet and triplet eigenstates are shown with the combinations of the orbital wavefunctions that dominate each state. The singlet-triplet splitting J is due to the triplet occupation of the excited orbital, though the energy of the latter is lowered from the one-electron orbital splitting by direct exchange $2 \mathcal { I }$

system with Hamiltonian

$$
H _ {c} = \left( \begin{array}{c c} \varepsilon / 2 & t _ {c c} \\ t _ {c c} & - \varepsilon / 2 \end{array} \right),\tag{4}
$$

where the detuning $\varepsilon = \mu _ { 1 } - \mu _ { 2 }$ is the diference in electrochemical potentials of the two dots. Hopping between diferent charge states is described by the tunnel coupling $t _ { c } ,$ which is generally an exponential function of the interdot barrier height. As illustrated in Fig. 6(c), the ground state charge occupancy changes from (1,0) to (0,1) as $\varepsilon$ changes sign, while around zero detuning the eigenstates are hybridized by $t _ { c }$ into antibonding and bonding combinations of the charge states.

For a two-electron DQD (where $N _ { 1 } + N _ { 2 } = 2 )$ , the (2,0), (1,1), and (0,2) charge states are possible. However, the DQD detuning must be highly biased for the doubly occupied (2,0) or (0,2) charge state to become the ground state due to Coulomb repulsion. As a result, the DQD ground state changes from (2,0) to (1,1) to (0,2) as ε increases, as illustrated in Fig. 6(d). In practice, voltage modulation of detuning and tunnel coupling is critical for nearly all spin qubit control modalities.

Spin-spin Heisenberg exchange interactions are a key resource for spin qubits. Microscopically these interactions arise from the interplay of the Pauli exclusion principle, the external potential, and Coulomb interactions; given its complexity and importance, we refer the reader to Sec. IV for a detailed discussion of this topic. Here we illustrate these principles by discussing the energy spectrum of two electrons in a single QD, which is also practically important for spin manipulation and measurement.

![[assets/figures/references/burkard-2023/06e0c1388a4d3d79df5adfbd4517dfb9e6d91013f1c5d6709a0094a516e3dc29.jpg]]  
FIG. 8 (a–c) Few electron single, double, and triple QDs (Ciorga et al., 2000), (Elzerman et al., 2003), (Schr¨oer et al., 2007). (d) 8-site 1D QD array (Volk et al., 2019). (e) $3 \times 3$ QD array (Mortemousque et al., 2021). (f,g) SiMOS single and DQD devices (Angus et al., 2007),(Lai et al., 2011). (h) Donor device fabricated using STM lithography (He et al., 2019). (i) Single-layer etch defined 1 × 6 QD array in Si/SiGe (Ha et al., 2021). (j) 1 × 9 QD array fabricated using overlapping Al gates on Si/SiGe (Zajac et al., 2016). (k) Enhancement mode Ge/GeSi structure (Hendrickx et al., 2021). Holes are confined in (k), while the remaining devices isolate electrons. Images are sized to share common dimensional scales.

As illustrated in Fig. 7, the one-electron states of a single QD include an orbital ground and first excited state, separated in energy by $E _ { \mathrm { o r b } }$ . When a second electron is added to the dot, the spatial wavefunctions must be either symmetric or antisymmetric under particle exchange, corresponding to spin singlet and triplet states, respectively. Singlets can have both electrons occupy the same or diferent (spin-degenerate) orbitals, while spatial antisymmetry requires that triplets must have electrons in separate orbitals. Restricting ourselves to the two lowest orbital states for simplicity, the ground state spin singlet comes from double occupation of the ground orbital, while the triplet is higher in energy as it must place one electron each in the ground and first excited orbitals, as shown in Fig. 7. Hence the singlet-triplet splitting $J = E _ { T } - E _ { S }$ is positive. This example illustrates the general principle that any two-electron system (even spanning multiple QDs) has a singlet ground state in the absence of magnetic fields (Lieb and Mattis, 1962).

Note that in general for a two-electron QD, $J \ < \ E _ { \mathrm { o r b } } ,$ the single-particle orbital splitting, because the triplet state is lowered in energy by the direct Coulomb exchange interaction $2 \mathcal { I } ^ { 1 }$ . In practice, contributions from other orbitals are also quantitatively important, but they do not substantially change the qualitative physical picture. These arguments can also be extended to include excited valley states, which are often the lowest energy excitations in Si QDs; in such cases, the lowest excited triplet may occupy the excited valley rather than orbital state, giving rise to a even richer two-electron spectrum (Ercan et al., 2021; Hada and Eto, 2003).

## C. Isolating and detecting single charges

In this section we more closely examine spin qubit designs and the various approaches for detecting the number of charges trapped in a QD. Figure 8 gives an overview of the various single electron QD designs that have been utilized by the spin qubit community. Common “stadium-style” depletion-mode GaAs gate electrode designs are shown in Figs. 8(a-e). The use of undoped Si/SiGe wafers, and overlapping gate stacks that gate the dots from the top, has been a paradigm shift for the community; one that has arguably propelled the field of Si spin qubits forward in recent years. Top gates allow for tighter confinement, yield larger capacitive cou pling to QD electrons, and can be fabricated in multiple layers. Figures 8(f,g) show examples of SiMOS single QD and DQD designs (Angus et al., 2007; Lai et al., 2011). Figures 8(h,i) illustrate dual-rail designs, where linear QD arrays are partnered with a parallel channel of charge detectors. The device in Fig. 8(h) is a Si/SiGe TQD with an opposing charge sensor (Reed et al., 2016). A linear 9 dot array with 3 charge sensors is shown in Fig. 8(i) (Zajac et al., 2016). These overlapping gate designs have been successfully extended to small 2D arrays in other material systems, as illustrated by the $2 \times 2$ Ge QD array in Fig. 8(j) (Hendrickx et al., 2021). QD fabrication methods are also transitioning from academicscale liftof processes to industry-compatible subtractive processes that are more amenable to the development of multilayer devices (Geyer et al., 2021; Ha et al., 2021). SiMOS CMOS nanowire devices fabricated in industrialgrade research foundries are similar to FinFETS, show single-electron, single-qubit operation, and have highlighted the promise of pathways to qubits which may scale in comparable fashion as silicon transistor technologies (Ansaloni et al., 2020; Zwerver et al., 2021).

![[assets/figures/references/burkard-2023/58a544ef11a9c4e15a2f6401abeae23b55dab6a07594b8f5b06f26f2b4dc9239.jpg]]

![[assets/figures/references/burkard-2023/10f2a7866680a4c2e5f3d1e1b6165aad527b4358651668d357cb934f048607fb.jpg]]  
FIG. 9 (a) QPC charge detector to probe the charge occupation of a single QD (Field et al., 1993). (b) RF-QPC for fast sensing of a DQD (Reilly et al., 2007). (c) Fast charge sensing of a DQD using a RF-QD charge sensor (Barthel et $a l . ,$ 2010). (d) Donor device fabricated using STM lithography and probed using RF-reflectometry (Keith et al., 2019b). (e) cQED device for detecting charge and spin states in a cavitycoupled InAs nanowire DQD (Petersson et al., 2012). (f) Dispersive gate sensing of charge states in a fin-FET device (Gonzalez-Zalba et al., 2015).

Charge sensing techniques can be adapted for highly sensitive single-shot spin readout by utilizing Pauli spin blockade, as will be presented in detail for diferent types of spin qubits in the following sections (Barthel et $a l .$ 2009; Elzerman et al., 2004; Pakkiam et $a l .$ , 2018; West et al., 2019). We now describe how the QPC charge sensors in the devices shown in Figs. 8(b,c,e)] and QD charge sensors shown in Figs. 8(d,h-j)] are used to measure changes in the charge occupation of QD devices (DiCarlo et al., 2004; Field et al., 1993).

The absolute number of electrons confined in a QD can be determined through charge detection using a QPC or a QD as a charge detector (Field et al., 1993). The measurement bandwidth can be greatly increased using radio frequency (RF)-reflectometry (Schoelkopf et al., 1998), as later demonstrated with RF-QPCs [Fig.9(b)] and RF sensor dots [Fig.9(c)] (Barthel et al., 2010; Reilly et al., 2007). A recent development is dispersive gate sensing, where microwave reflection of of a QD gate is used to infer the QD charge occupation (Colless et al., 2013; Urdampilleta et al., 2019; West et al., 2019; Zheng et al., 2019). Dispersive sensing has the potential to scale to larger system sizes, as additional QD or QPC sensors are not needed. Finally, as will be discussed in detail in Sec. VII, dispersive charge and spin state readout can be achieved in the circuit quantum electrodynamics (cQED) architecture [Fig. 9(e)]. Baseband and microwave charge detection approaches have greatly benefited from the development of cryogenic amplifiers (Macklin et $a l .$ , 2015; Vink et al., 2007).

## D. Zeeman interactions and spin-orbit coupling

Direct magnetic manipulation of the electron spin S in solids is generally described by the Zeeman Hamiltonian

$$
H (t) = \mu_ {B} \mathbf {S} \cdot \hat {g} (t) \cdot \mathbf {B} _ {\mathrm{eff}} (t),\tag{5}
$$

where $\mu _ { B }$ is the Bohr magneton $( = 5 8 \ \mu \mathrm { e V / T ) }$ . In contrast to free electrons where the coupling is described by a scalar g-factor $g \approx 2 ,$ , the crystal field in solids can lead to an anisotropic magnetic response captured by an effective g-tensor $\hat { g }$ (Slichter, 2010). The efective magnetic field $\mathbf { B } _ { \mathrm { e f f } }$ can include externally applied fields as well as internal fields due to hyperfine or spin-orbit efects. Time-dependent modulation of this Hamiltonian enables coherent single-spin rotations, as detailed in Sec. V.A.2. As SOC is a crucial ingredient to both $\hat { g }$ and $\mathbf { B } _ { \mathrm { e f f } }$ , we discuss it further here along with the ways it can be utilized to manipulate individual spins.

SOC arises from the relativistic coupling of spin to electric fields and is described by the Hamiltonian $H _ { \mathrm { S O } } =$ $\frac { g \mu _ { B } } { \hbar m c ^ { 2 } } ( \nabla V \times \mathbf { p } ) \cdot \mathbf { S }$ , where V is the electric potential and p is the electron momentum (Zutic et al., 2004). In essence, an electron spin moving in a potential experiences an effective momentum-dependent magnetic field $\mathbf { B } _ { \mathrm { e f f } , \mathrm { S O } }$ . For spherically symmetric potentials, such as the hydrogen atom, this coupling takes the commonly cited isotropic form L · S. In semiconductor heterostructures, the ∇V term arises from internal crystal fields and potential discontinuities at material interfaces (Hanson et al., 2007; Zutic et al., 2004).

The spin-orbit interaction in bulk solids increases with atomic number; thus, the spin-orbit splitting (equal to the valence band splitting in Fig. 4) is 44 meV in Si but about 300 and 340 meV in Ge and GaAs, respectively. In bulk semiconductors, the p-like valence bands are particularly strongly coupled by SOC, while the efects on s-like conduction band electrons, such as in GaAs, are weaker but significant for spin qubit control, for example by altering the g-factor. In bulk silicon, the electron g-factor remains close to 2 and is only weakly anisotropic (Roth, 1960), while electrons in bulk GaAs have an isotropic g-factor of −0.44, which can be further (and anisotropically) modified in QWs (van Beveren et al., 2005; Kogan et al., 2004; Yugova et al., 2007).

a)  
![[assets/figures/references/burkard-2023/8e04b5836153cf4f0fbd064787ef282fa5bf63227353e093124cd534f95005c0.jpg]]  
FIG. 10 (a) Spin-orbit interactions in QDs arise microscopically from the inversion asymmetries due to the bulk crystal structure (BIA), structural efects (SIA) like external fields, and interfaces (IIA). Under an applied magnetic field into the page, the local momentum of the electron wave function rotates (as depicted by arrows), causing local couplings to the atomic-scale gradients induced by these asymmetries which sum to the efective couplings in Eq. (6). (b) Efective spinorbit field direction for Dresselhaus- and Rashba-type interactions as a function of in-plane momentum at the Fermi surface momentum k<sub>F</sub> [see Eq. (7)].

Additional SOC efects arise in 2D QWs due to confinement and lowered symmetries, which for electrons are largely described by the efective Hamiltonian<sup>2</sup>

$$
H _ {\mathrm{SO}} = 2 \gamma_ {R} (p ^ {y} S ^ {x} - p ^ {x} S ^ {y}) + 2 \gamma_ {D} (p ^ {x} S ^ {x} - p ^ {y} S ^ {y}).\tag{6}
$$

where $\gamma _ { R }$ and $\gamma _ { D }$ are the so-called Rashba and Dresselhaus SOC coeficients. These interactions fundamentally arise from inversion symmetry breaking at diferent scales. Structural inversion asymmetries (SIA) due to confining electric fields lead to Rashba couplings, while Dresselhaus interactions relate to the bulk inversion asymmetry (BIA) of the zincblende lattice in GaAs and to heterostructure interface inversion asymmetry (IIA) in Si QWs (Golub and Ivchenko, 2004; Nestoklon et al., 2008; Prada et al., 2011). Figure 10(a) illustrates these diferent sources of microscopic asymmetries and their connection to spin-orbit coupling. Intuitively, a QD electron undergoes cyclotron motion due to an applied magnetic field, leading to SOC efects as its local momentum samples these asymmetries (Jock et al., 2018). Additional spin-orbit couplings beyond the linear terms in Eq. (6), such as terms cubic in momentum $p ,$ can also be relevant, for instance for quantum-confined holes.

The Hamiltonian of Eq. (6) introduces additional gtensor modulations by coupling the vector potential A of an external magnetic field to spin via the momentum, $\mathbf { p }  \mathbf { p } - e \mathbf { A }$ . For example, choosing the Coulomb gauge for an in-plane magnetic field ${ \bf B } = B ^ { x } \hat { x }$ one obtains Bdependent terms $e B ^ { x } z ( \gamma _ { R } S ^ { x } - \gamma _ { D } S ^ { y } )$ in $H _ { \mathrm { S O } }$ If the SO couplings $\gamma _ { R , D }$ contain interfacial contributions, this introduces spin-dependent level shifts which contribute both diagonal and of-diagonal g-tensor terms $g _ { x x }$ and $g _ { x y }$ . Further g-tensor corrections arise from the admixture of excited orbital states (de Sousa and Das Sarma, 2003; Stano and Fabian, 2005) or valley states in Si QDs (Harvey-Collard et al., 2019; Nestoklon et al., 2008; Prada et al., 2011; Ruskov et al., 2018; Veldhorst et al., 2015a). These couplings can be sensitive to local device disorder, causing interdot g-factor gradients in Si/SiGe (Ferdous et al., 2018) and in MOS dots for electrons and holes (Jock et al., 2018; Tanttu et al., 2019; Voisin et al., 2016). The efects of SOC on electronic g-factors have also been investigated in metallic nanoparticles (Petta and Ralph, 2001, 2002), InAs (Schroer et al., 2011) and InSb nanowire DQDs (Nadj-Perge et al., 2012), and selfassembled QDs (Nakaoka et al., 2007), among other systems.

The Hamiltonian in Eq. (6) can also be interpreted as the action of a momentum-dependent spin-orbit field

$$
\mathbf {B} _ {\mathrm{eff,SO}} = (\gamma_ {D} + \gamma_ {R}) \sin \theta \hat {e} _ {[ 1 1 0 ]} + (\gamma_ {D} - \gamma_ {R}) \cos \theta \hat {e} _ {[ 1 \bar {1} 0 ]}\tag{7}
$$

where θ denotes the angle between p and the [110] direction (Kavokin, 2001). Figure 10(b) shows the diferent orientation dependencies of Rashba and Dresselhaus SOC fields. This efective field imparts a directional dependence to matrix elements involving momentum, includ ing interdot tunneling and intradot orbital spin-flip transitions (Hofmann et al., 2017; Stepanenko et al., 2012). This also enables controlling electron spins with orbital motion, or electric dipole spin resonance (EDSR), as first described in Rashba and Efros, 2003. For example, if we apply a static magnetic field ${ \bf B } _ { 0 } = B _ { 0 } \hat { z }$ and take $\hat { \ b { g } } ( t ) = \ b { g } \mathbb { 1 }$ , the orbital motion of the electron with $p _ { y } ( t ) = p _ { 0 }$ cos(ωt) yields $H _ { R } = 2 \gamma _ { R } p _ { 0 } \cos ( \omega t ) S ^ { x }$ , which can be used to drive Rabi oscillations in a rotating frame.

Golovach et al., 2006 developed the theory for EDSR in 2DEG-based QD systems, while Flindt et al., 2006 considered EDSR in nanowire devices with strong SOC. Golovach and Loss find that a harmonic QD subject to an oscillating electric field can be described by an efective Hamiltonian $H _ { \mathrm { e f f } } \ = \ { \textstyle \frac { 1 } { \hbar } } ( g \mu _ { B } \mathbf { B } \cdot \mathbf { S } + \mathbf { h } ( t ) \cdot \mathbf { S } )$ , with $\mathbf { h } ( t ) \ = \ 2 g { \boldsymbol { \mu } } _ { B } \mathbf { B } \times \Omega ( t )$ , where $\Omega ( t )$ is a dimensionless driving field. The coupling strength (and hence efective Rabi frequency) scales linearly with the amplitude of the oscillating electric field, and the drive is maximal when Ω(t) and B are orthogonal. The driving strength is $\Omega ( t ) \sim r _ { 0 } ( t ) / \lambda _ { \mathrm { S O } }$ , where $\lambda _ { \mathrm { S O } } \sim \lambda _ { \pm } = \hbar / m ^ { * } ( \gamma _ { D } \pm \gamma _ { R } )$ is the spin-orbit length and $\mathbf { r } _ { 0 } ( t ) = - e \mathbf { E } ( t ) / ( m ^ { * } \omega _ { 0 } ^ { 2 } )$ denotes the shift of the QD due to the electric field where $\mathbf { E } ( t )$ and $\hbar \omega _ { 0 }$ are the electric field and confinement energy of the QD.

An alternative to the ac-driven displacement of the entire electronic wave function in a spin-orbit field, driving ac electric fields can also distort the confining potential and hence the wave function, which manifests as an ef fective time-modulation of the anisotropic g-tensor which can also cause spin rotations. In general, $\hat { \boldsymbol g } = \hat { \boldsymbol g } ( \boldsymbol V ( t ) )$ where $V ( t )$ is a time-dependent gate voltage on the device (Venitucci et al., 2018). The first demonstration of spin control using g-tensor resonance was in a 2D GaAs/AlGaAs heterostructure, where the Al concentration was purposely graded to achieve a spatially varying gˆ (Kato et al., 2003). Driving the system with an electric field yielded spin rotations that were optically detected using time-resolved Kerr rotations. Recent progress utilizing g-tensor modulation has occurred in hole spin qubits, taking advantage of the natural anisotropies of the valence band, as discussed in Sec. V.E.3.

“Synthetic” spin-orbit fields can also be induced by translating a spin along an extrinsic magnetic field gra dient, typically generated in QDs by a nearby micromagnet. As proposed by Tokura et al., 2006, this enables “slanting Zeeman field” spin resonance or EDSR in a magnetic field gradient, as external driving electric fields $E _ { \mathrm { a c } }$ displace the electron within the QD, allowing it to experience the spatially varying transverse magnetic field. The efective ac magnetic field strength can be calculated from perturbation theory as

$$
B _ {\mathrm{ac}} = \frac {e E _ {\mathrm{ac}} \ell_ {\mathrm{orb}} ^ {2}}{E _ {\mathrm{orb}}} | b _ {\mathrm{SL}} |,\tag{8}
$$

where $E _ { \mathrm { o r b } }$ is the QD orbital splitting, $\ell _ { \mathrm { o r b } }$ is the orbital length scale, and $b _ { \mathrm { S L } } = \partial B ^ { z } / \partial x$ is the transverse magnetic field gradient. The resulting Rabi frequency $f _ { \mathrm { R a b i } } = g \mu _ { B } B _ { \mathrm { a c } } / ( 2 h )$ is linearly proportional to $E _ { \mathrm { a c } }$ and b<sub>SL</sub> (Pioro-Ladriere et al., 2008).

Finally, while typical EDSR operation displaces the spin within a single QD, which limits the interaction strength in tightly-confined QDs (Hu et al., 2012), low power electrical spin control can be achieved by increasing the displacement of the electron through the use of DQDs [Fig. 17(d)]. Benito et al., 2019a considered this “flopping-mode” spin qubit consisting of a single electron confined in a semiconductor DQD in the presence of both a homogeneous external magnetic field Bzˆ and a transverse field gradient created with a micromagnet $\Delta B ^ { x } \approx b _ { \mathrm { S L } } \Delta z / 2$ , where $2 \Delta B ^ { x }$ is the diference in the xcomponent of the magnetic field from the left to right side of the DQD separated by $\Delta z$ (Benito et al., 2017). When $\Delta B ^ { x }$ is appreciable, ac driving of the electron across the DQD can lead to low-power single spin rotations (Croot et al., 2020).

## E. Valleys

A modification of the simple picture of electron confinement presented in Sec. III.A occurs in Si, where the conduction band features six equivalent minima, referred to as “valleys,” as shown in Fig. 4(b). The valley degree of freedom can complicate the level structure of quantum-confined states (Gyure et al., 2021; Sch¨afler, 1997; Zwanenburg et al., 2013). For donors in bulk silicon, each valley contributes a degenerate state in the EMA. This degeneracy is lifted by valley-orbit coupling with the tetrahedral donor central-cell potential, leading to a nondegenerate ground state composed of a symmetric linear combination of the six valleys, as shown in Fig. 11(a). By contrast, the four in-plane $( x , y )$ valleys are raised in energy by strain in $\mathrm { S i / S i G e }$ quantum wells (Sch¨afler, 1997) and higher subband quantization energy in MOS devices (Ando et al., 1982). This leaves two longitudinal $k _ { z }$ valleys whose degeneracy is lifted by the heterointerfaces, giving rise to the valley splitting, as illustrated in Fig. 11(b). Controlling and maximizing this splitting is critical for Si-based spin qubits, as it is typically the lowest energy excitation in a single-electron QD.

Valley splitting arises from atomic-scale interactions of the electron with the heterostructure potential, where the EMA is most questionable (Friesen and Coppersmith, 2010; Saraiva et al., 2009) and numerical full-band calculations using tight-binding or pseudopotentials can ofer atomistic insight (Boykin et al., 2004; Zhang et al., 2013). Nonetheless, many key features can be described within an augmented efective mass framework, where the full wave function is expanded in terms of envelope and Bloch functions for each relevant valley

$$
\psi (\mathbf {r}) = \sum_ {j = 1} ^ {N _ {v} = (2, 6)} F _ {j} (\mathbf {r}) e ^ {i \mathbf {k} _ {j} \cdot \mathbf {r}} u _ {j} (\mathbf {r}).\tag{9}
$$

Here $\mathbf { k } _ { j }$ and $u _ { j } ( \mathbf { r } )$ are the wave vector and periodic part of the Bloch function, respectively, for the $j ^ { \bar { t } h }$ valley, and $F _ { j }$ is the envelope function for that valley. For donors in bulk silicon, the $N _ { v }$ sum runs over all 6 valleys, whereas only the two $k _ { \pm z }$ valleys matter for QDs. Each valley envelope function is the solution of

$$
\left(T _ {i} + U (\mathbf {r})\right) F _ {i} (\mathbf {r}) + \sum_ {j \neq i} V _ {i j} ^ {\mathrm{VO}} (\mathbf {r}) F _ {j} (\mathbf {r}) = E F _ {i} (\mathbf {r}),\tag{10}
$$

![[assets/figures/references/burkard-2023/a19d73b63173d6fe934a9e88731c4fedf33f4bcf1c5ff55d9613694e785802cf.jpg]]  
FIG. 11 (a) The valley splitting of donors in bulk Si from the admixture of the six-fold degenerate valleys (depicted in the Brillouin zone) leads to three sets of states. (b) In Si QDs, the electric fields in MOS and strain in Si/SiGe raises four in-plane valley energies and the relevant valley splitting is between the two out-of-plane valleys. (c) The admixture of valley states leads to rapidly varying modulations in the donor ground state, pictured from an efective mass calculation presented in (Gamble et al., 2015). (d) The full ground and excited state wave functions in Si QDs oscillate rapidly due to the intervalley phase. Interference of the valley Bloch functions minimizes the interface overlap for the ground state.

where T<sub>i</sub> is the efective mass kinetic operator for the $i ^ { t h }$ valley, $U ( \mathbf { r } )$ is the external potential, and $V _ { i j } ^ { \mathrm { V O } }$ is the valley-orbit coupling matrix element, which can be fit to data or estimated from a model potential (Gamble et al., 2015). For donors, the magnitude of the valleyorbit splitting is mostly set by the central cell correction, though it is sensitive to local strain. However, the super position of valley states introduces a complicated interference pattern in the full donor wave function $\psi ( \mathbf { r } )$ [see in Fig. 11(c)]. As a result, the inter-donor tunnel coupling and exchange coupling are very sensitive to placement of donors in the Si crystal lattice (Gamble et al., 2015; Koiller et al., 2002; Salfi et al., 2018).

If we consider a QW with a sharp heterointerface at $z = z _ { i } ,$ we can estimate the interfacial intervalley coupling as $V _ { + z , - z } ^ { \mathrm { V O } } = v _ { 0 } \delta ( z - z _ { i } )$ (Friesen et al., 2007; Saraiva et al., 2009). Taking the valley-free envelope function $F ( z )$ as the solution of the intravalley part of Eq. (10), we can evaluate the intervalley matrix element of $V _ { + z , - z } ^ { \mathrm { V O } }$ to obtain the valley mixing $\Delta _ { \mathrm { V O } } = v _ { 0 } | F ( z _ { i } ) | ^ { 2 } e ^ { 2 i k _ { z } z _ { i } }$ . As this is a complex-valued matrix element, the valley splitting is equal to twice its norm $( \mathrm { V S } ~ = ~ 2 | \Delta _ { \mathrm { V O } } | )$ This simple example illustrates that the valley splitting is dependent on the electron overlap with the interface, which can be increased by using vertical electric fields or reducing the QW width.

Experiments show that the tunable out-of-plane electric fields in MOS structures allow for a wide range of valley splittings 50–500 µeV (Gamble et al., 2016; Petit et al., 2018; Yang et al., 2013). Electric field tuning is weaker in Si/SiGe QWs due to the smaller conduction band ofset and the valley splitting is most strongly influenced by interface quality and QW width, with values up to 200–300 µeV reported in high-quality interfaces and narrow wells (Borselli et al., 2011; Chen et al., 2021; Hollmann et al., 2020). Beyond improving the epitaxial quality, other methods have been proposed for achieving uniformly high valley splitting by modulating the Ge content of the barrier or QW regions (McJunkin et al., 2021; Zhang et al., 2013).

The valley mixing phase $\phi _ { V } = \mathrm { a r g } ( \Delta _ { \mathrm { V O } } )$ is also significant as it characterizes the superposition of valleys in the ground state. In general this phase minimizes the ground state overlap with the interface, lowering its energy, as shown in Fig. 11(d). Changes in this phase due to disorder modify the valley character of the ground and excited states of diferent QDs, enabling intervalley tunneling (Borjans et al., 2021b; Burkard and Petta, 2016; Culcer et al., 2010; Mi et al., 2017c).

## F. Hyperfine interactions

Nuclear spins in semiconductors act as both a nuisance and potential resource for spin qubits. For example, fluctuating hyperfine fields limit $T _ { 2 } ^ { * } \sim 1 0$ ns (Petta et al., 2005) in GaAs spin qubits, leading to strongly damped Rabi oscillations (Koppens et al., 2006). On the other hand, electric field control of the hyperfine coupling constant A features prominently in Kane’s proposal (Kane, 1998). The hyperfine interaction between one electron (carrying spin operator S and orbital angular momentum operator L) with many nuclei at positions ${ \bf R } _ { k }$ carrying spin $\mathbf { I } _ { k }$ is described by the Hamiltonian (Abragam, 1961):

$$
\begin{array}{l} H _ {\mathrm{hf}} = \frac {\mu_ {0}}{4 \pi} g _ {0} \mu_ {B} \hbar \gamma_ {n} \int d ^ {3} \mathbf {r} \\ \Psi^ {*} (\mathbf {r}) \sum_ {k} \bigg [ \frac {\mathbf {L} - \mathbf {S}}{| \mathbf {r} - \mathbf {R} _ {k} | ^ {3}} + 3 \frac {[ (\mathbf {r} - \mathbf {R} _ {k}) \cdot \mathbf {S} ] (\mathbf {r} - \mathbf {R} _ {k})}{| \mathbf {r} - \mathbf {R} _ {k} | ^ {5}} \\ \qquad + \frac {8 \pi}{3} \delta (\mathbf {r} - \mathbf {R} _ {k}) \mathbf {S} \bigg ] \cdot \mathbf {I} _ {k} \psi (\mathbf {r}). \end{array}\tag{11}
$$

Here, $g _ { 0 }$ is the bare electron g-factor, $\gamma _ { n }$ is the nuclear gyromagnetic ratio, and $\psi ( \mathbf { r } )$ is the full electron wave function (not the efective mass envelope function $F _ { j } ( \mathbf { r } ) )$ The last term with $\delta ( \mathbf { r } )$ is the Fermi contact term and is dominant for conduction electrons in both GaAs and Si; it is isotropic and as such its efects are immune to the relative orientation of applied magnetic field with crystalline axes. The magnetic dipole-dipole terms are usually smaller, but they can contribute to the dephasing of electron spin resonance of donors and QDs in Si at lowmagnetic field (Witzel et al., 2007; Zhao et al., 2019).

For the Fermi contact hyperfine interaction, we obtain

$$
H _ {\mathrm{hf,contact}} = \sum_ {k} \hbar A _ {k} \mathbf {S} \cdot \mathbf {I} _ {k},\tag{12}
$$

where

$$
A _ {k} = \frac {\mu_ {0}}{4 \pi} g \mu_ {B} \gamma_ {n} \eta | \psi (\mathbf {R} _ {k}) | ^ {2}.\tag{13}
$$

Here $\psi ( { \bf R } _ { k } )$ is the efective mass envelope wavefunction at each nucleus location and $\eta$ is the bunching $f a c -$ tor, which captures the microscopic overlap of the Bloch wavefunction with the nucleus. The envelope wavefunction is normalized, $\begin{array} { r } { \sum _ { k } | \psi ( { \bf R } _ { k } ) | ^ { 2 } = ~ 1 } \end{array}$ , where the sum is over all nuclear sites in the crystal. For $\mathrm { ^ { 3 1 } P }$ in $\mathrm { S i } ,$ as well as $^ { 2 9 } \mathrm { S i }$ in Si and all Ga and Al nuclei in GaAs, η has been both measured (Feher, 1959; Paget et al., 1977) and calculated (Assali et al., 2011; Philippopoulos et al., 2020); however for some species such as $^ { 7 3 } \mathrm { G e }$ in SiGe, only estimates are available, typically from spin-qubit experiments (Kerckhof et al., 2021).

The dynamics of the nuclei themselves, in particular the magnetic nuclear dipole-dipole interactions, is also of critical importance in determining how the nuclear spin bath evolves. In the frequent case that one QD electron overlaps with many nuclear spins, the hyperfine interaction behaves as an efective “Overhauser” magnetic field that the electron spin experiences, which fluctuates in time due to nuclear dynamics (Taylor et al., 2007). These efects are central to spin qubit dephasing and decoherence, and are discussed extensively in Section VI.

## IV. SPIN-SPIN INTERACTIONS

The most important physical mechanism leading to interactions between spin qubits is the exchange interaction. Exchange results from a combination of Fermi statistics, electron tunneling, and Coulomb repulsion; some common notation is required to combine these aspects. We must first define a many-particle basis, which is generally done in terms of single-particle basis functions $\phi _ { m } ( \mathbf { r } ) \chi _ { \sigma }$ , for spatial orbitals enumerated by $m ,$ spin $\sigma = \uparrow , .$ ↓, and position r. The spinor obeys $\chi _ { \sigma } ^ { \dagger } \chi _ { \sigma ^ { \prime } } = \delta _ { \sigma \sigma ^ { \prime } }$ . Exchange depends on the Pauli exclusion principle, which means that the multiparticle wavefunction $\Psi _ { \sigma _ { 1 } \sigma _ { 2 } \ldots } ( \mathbf { r } _ { 1 } , \mathbf { r } _ { 2 } , \ldots )$ must be fully antisymmetric for arbitrarily labeled electrons $^ { 1 , 2 , \dots }$ This may be formally assured via the use of a Slater determinant, i.e.

$$
\begin{array}{l} \Psi_ {m _ {1} \sigma_ {1}, m _ {2} \sigma_ {2}, \ldots m _ {N} \sigma_ {N}} (\mathbf {r} _ {1}, \mathbf {r} _ {2}, \ldots , \mathbf {r} _ {N}) = \\ \frac {1}{\sqrt {N}} \left| \begin{array}{c c c c} \phi_ {m _ {1}} (\mathbf {r} _ {1}) \chi_ {\sigma_ {1}} & \phi_ {m _ {2}} (\mathbf {r} _ {1}) \chi_ {m _ {2}} & \ldots & \phi_ {m _ {N}} (\mathbf {r} _ {1}) \chi_ {\sigma_ {N}} \\ \phi_ {m _ {1}} (\mathbf {r} _ {2}) \chi_ {\sigma_ {1}} & \phi_ {m _ {2}} (\mathbf {r} _ {2}) \chi_ {m _ {2}} & \ldots & \phi_ {m _ {N}} (\mathbf {r} _ {2}) \chi_ {\sigma_ {N}} \\ \vdots & \vdots & \ddots & \vdots \\ \phi_ {m _ {1}} (\mathbf {r} _ {N}) \chi_ {\sigma_ {1}} & \phi_ {m _ {2}} (\mathbf {r} _ {N}) \chi_ {\sigma_ {2}} & \ldots & \phi_ {m _ {N}} (\mathbf {r} _ {N}) \chi_ {\sigma_ {N}} \end{array} \right|. \end{array}\tag{14}
$$

Equivalently, this wavefunction may be described by anticommuting annihilation operators $c _ { m \sigma }$ . The operator $c _ { m \sigma } ^ { \dagger }$ creates a conduction electron in orbital state $\phi _ { m } ( \mathbf { r } )$

and spin state σ and we write

$$
\left| \Psi_ {m _ {1} \sigma_ {1}, m _ {2} \sigma_ {2}, \dots m _ {N} \sigma_ {N}} \right\rangle = c _ {m _ {1} \sigma_ {1}} ^ {\dagger} c _ {m _ {2} \sigma_ {2}} ^ {\dagger} \dots c _ {m _ {N} \sigma_ {N}} ^ {\dagger} | \mathrm{vac} \rangle ,\tag{15}
$$

where $| \mathrm { v a c } \rangle$ is the vacuum containing no electrons. Using this notation, the general many-body Hamiltonian within the EMA approximation [Eq. (3)] reduces to

$$
\begin{array}{c} {H =} \\ {\sum_ {\sigma} \sum_ {m n} T _ {m n} c _ {m \sigma} ^ {\dagger} c _ {n \sigma} + \frac {1}{2} \sum_ {\sigma_ {1} \sigma_ {2}} \sum_ {m n \ell p} V _ {m n \ell p} c _ {m \sigma_ {1}} ^ {\dagger} c _ {n \sigma_ {2}} ^ {\dagger} c _ {\ell \sigma_ {2}} c _ {p \sigma_ {1}},} \end{array}\tag{16}
$$

with single-particle kinetic and potential energy integral

$$
T _ {m n} = \int d ^ {3} \mathbf {r} \phi_ {m} ^ {*} (\mathbf {r}) \left[ - \frac {\hbar^ {2}}{2} \nabla \cdot (\boldsymbol {\beta} \cdot \nabla) + U (\mathbf {r}) \right] \phi_ {n} (\mathbf {r}).\tag{17}
$$

Here $\beta = ( m _ { x } ^ { - 1 } , m _ { y } ^ { - 1 } , m _ { z } ^ { - 1 } )$ gives the inverse efective masses and $U ( \mathbf { r } )$ is the externally-applied potential due to gate biasing and built-in electric fields. The general Coulomb integral is

$$
\begin{array}{l} V _ {m n \ell p} = \\ \int d ^ {3} {\bf r} _ {1} d ^ {3} {\bf r} _ {2} \phi_ {m} ^ {*} ({\bf r} _ {1}) \phi_ {n} ^ {*} ({\bf r} _ {2}) \frac {e ^ {2}}{4 \pi \epsilon_ {r} \epsilon_ {0} | {\bf r} _ {1} - {\bf r} _ {2} |} \phi_ {\ell} ({\bf r} _ {2}) \phi_ {p} ({\bf r} _ {1}), \end{array}\tag{18}
$$

where $\epsilon _ { r }$ is the semiconductor relative permittivity (which may in general depend on position); any image efects due to metal gates are ignored for simplicity. Note that both of these integrals are independent of spin.

This notation allows us to distinguish two flavors of the exchange interaction, direct and kinetic. Direct exchange is simply illustrated for two orbitals, perhaps labeled 1 and 2, with high spatial overlap, such as orbital states in a common dot or donor. If we ask how the Coulomb interaction impacts the energy of a doubly-occupied orbital state, the dominant terms of the Coulomb integral in our single-particle basis can then be broken up into the direct Coulomb term $\kappa ,$ corresponding to the case m $\neq n , m = p ,$ , and $n = \ell ,$ such as $V _ { 1 2 2 1 } ;$ and the direct exchange term ${ \mathcal { I } } .$ , corresponding to $m = n$ and $\ell = p ,$ such as $V _ { 1 1 2 2 }$ . These two terms separate a pair of twoelectron energy levels by the energy $\kappa - \mathcal { I } / 2$ for triplet spin states (spatially antisymmetric, spin symmetric), and by $\kappa + 3 \mathcal { I } / 2$ for singlet spin states (spatially symmetric, spin antisymmetric). Hence, the combination of Coulomb repulsion and Pauli exclusion raises the energy of the singlet relative to the triplet state by the amount $2 \mathcal { I }$ Although this direct exchange term is important, leading in particular to Hund’s rule when filling orbitals, spin qubit control mostly leverages the distinct and more highly-controllable kinetic exchange interaction, which is due to the efect of the Pauli exclusion principle on the (spin-independent) $T _ { m n }$ and K terms. We address this interaction in the next section.

## A. Kinetic exchange in the Fermi-Hubbard hopping model

Kinetic exchange is most easily introduced using the simplified Fermi-Hubbard hopping model where we presume that electrons are rather tightly bound into their single-electron orbitals $\phi _ { j } ( \mathbf { r } )$ Here, $\phi _ { j } ( \mathbf { r } )$ describe ground-state occupation in dot $j ,$ with negligible dot-todot Coulomb interactions (K) and dot-to-dot direct exchange interactions $( \mathcal { I } _ { j k } )$ , as discussed above. In this approximation, the only relevant Coulomb interaction is the on-site Coulomb interaction with magnitude $U = V _ { j j j j }$ and the kinetic energy transition matrix $T _ { j k }$ is described in terms of a constant tunnel coupling $t _ { c } = T _ { 1 2 }$ between sites 1 and 2, and voltage-controlled chemical potentials $\mu _ { j }$ for the diagonal elements $T _ { j j }$ . Constraining the discussion to two electrically charged spin-1 $_ { - } / 2$ particles (such as electrons) filling two sites, and neglecting any magnetic field at first for simplicity, the Fermi-Hubbard Hamiltonian is

$$
\begin{array}{c} H _ {\mathrm{FH}} = \sum_ {\sigma = \uparrow , \downarrow} \bigg [ \sum_ {j = 1, 2} \mu_ {j} c _ {j \sigma} ^ {\dagger} c _ {j \sigma} + t _ {c} (c _ {1 \sigma} ^ {\dagger} c _ {2 \sigma} + c _ {2 \sigma} ^ {\dagger} c _ {1 \sigma}) \bigg ] \\ + \sum_ {j = 1, 2} U c _ {j \uparrow} ^ {\dagger} c _ {j \uparrow} c _ {j \downarrow} ^ {\dagger} c _ {j \downarrow}. \end{array}\tag{19}
$$

The possible (linearly independent) quantum states described by Eq. (19) can be characterized by their charge and spin configurations. For two charges in two sites, the possible charge configurations are (2, 0), (1, 1), and (0, 2) where $( n _ { i } , n _ { j } )$ indicates the numbers of particles on sites 1 and 2. The exclusion principle allows but one spin configuration for (2, 0) and (0, 2) with one spin up and one spin down particle, and hence total spin zero (spin singlet). For (1, 1) there are four possibilities, one spin singlet state and three spin triplet states. We may choose our energy-zero such that $\mu _ { 1 } + \mu _ { 2 } = 0$ and define the detuning $\mu _ { 1 } - \mu _ { 2 } = \epsilon .$ . We therefore arrive at

$$
\begin{array}{r l} & H = (U - \epsilon) | S (0, 2) \rangle \langle S (0, 2) | + (U + \epsilon) | S (2, 0) \rangle \langle S (2, 0) | \\ & \qquad + \sqrt {2} t _ {c} (| S (2, 0) \rangle \langle S (1, 1) | + | S (0, 2) \rangle \langle S (1, 1) | + \text {h.c.}), \end{array}\tag{20}
$$

where S indicates that all three states occurring in this Hamiltonian are spin singlets, while the three spin triplet states are at zero energy. Diagonalizing this Hamiltonian for $| t _ { c } | \ll U \pm \epsilon$ and $| \epsilon | < U$ , one finds a low-energy hybridized singlet state

$$
| \mathrm{S} \rangle \simeq | \mathrm{S} (1, 1) \rangle - \frac {\sqrt {2} t _ {c}}{U - \epsilon} | \mathrm{S} (0, 2) \rangle - \frac {\sqrt {2} t _ {c}}{U + \epsilon} | \mathrm{S} (2, 0) \rangle ,\tag{21}
$$

![[assets/figures/references/burkard-2023/10c7b232fd7deacaa4aad89ef3c08df5afc00dd7eefeb52b4cb82611927bbc33.jpg]]  
FIG. 12 Energy levels, exchange coupling $^ { J , }$ and wavefunctions in a DQD with two particles. (a) Two-particle energy levels as a function of level detuning . Tunnel coupling $t _ { c }$ leads to level repulsion between the singlet states (blue) where the on-site Coulomb energy U equals $\pm \epsilon .$ . J is the energy diference between the low-energy spin singlet and the spin triplets (red). Wavefunctions for (b) the symmetric (i.e.  = 0) and (c) detuned DQD.

up to terms of order $t _ { c } ^ { 2 } / ( U \pm \epsilon ) ^ { 2 }$ , with energy $- J$ where

$$
J = \frac {4 U t _ {c} ^ {2}}{U ^ {2} - \epsilon^ {2}} + O \left(\frac {t _ {c} ^ {3}}{(U \pm \epsilon) ^ {3}}\right)\tag{22}
$$

represents the exchange coupling. Virtual hopping between the two sites lowers the energy of the lowest spin singlet by J relative to the spin triplet energy [Fig. 12]; this is the kinetic exchange interaction.

The other singlet states are at higher energies, separated by roughly $U \pm \epsilon$ . Excited (2,0) and (0,2) triplets (discussed in Sec. III.B) are at similarly high energies. Neglecting those higher states one finds as the efective Hamiltonian for the (1, 1) charge configuration

$$
H = - J | \mathrm{S} \rangle \langle \mathrm{S} | = \frac {J}{2} (S ^ {2} - 2) = J \mathbf {S} _ {i} \cdot \mathbf {S} _ {j} + \mathrm{const.},\tag{23}
$$

where $\mathbf { S } = \mathbf { S } _ { i } + \mathbf { S } _ { j }$ denotes the total spin of sites i and $j ,$ and the constant can be omitted to yield $\operatorname { E q } .$ . (1).

## B. Heitler-London and Hund-Mulliken models

To gain a more microscopic understanding of the exchange J in Eq. (1) as well as the parameters of the Fermi-Hubbard model (19), the localization of electrons to a single site realized by a QD in a 2D electron system can be modelled with high accuracy with a harmonic potential $V ( \mathbf { r } ) = m \omega _ { 0 } ^ { 2 } ( x ^ { 2 } + y ^ { 2 } ) / 2$ . Here, $\hbar \omega _ { 0 }$ is the orbital level spacing of the QD and $\mathbf { r } = ( x , y )$ . The exchange coupling between spins of electrons residing in two adjacent QDs i and $j$ can then be modelled using a quartic potential $V ( \mathbf { r } )$ which is locally harmonic in its two minima, with d the inter-dot spacing. The exchange energy can be obtained as the energy diference of spin singlet and triplet states for the two-electron orbital Hamilto nian including the Coulomb interaction,

$$
\begin{array}{l} H = \sum_ {i = 1, 2} \left(\frac {1}{2 m} \left(\mathbf {p} _ {i} - e \mathbf {A} \left(\mathbf {r} _ {i}\right)\right) ^ {2} + e \mathbf {r} _ {i} \cdot \mathbf {E} + V (\mathbf {r} _ {i})\right) \\ + \frac {e ^ {2}}{4 \pi \epsilon_ {r} \epsilon_ {0} | \mathbf {r} _ {1} - \mathbf {r} _ {2} |}, \end{array} \tag {（}\tag{24}
$$

where E, B, and A denote the electric and magnetic fields, and the vector potential.

The Heitler-London (HL) method evaluates the energies of the spin singlet (triplet) trial wavefunctions with antisymmetric (symmetric) spin state |Si $\left( \left| \mathrm { T } _ { \alpha } \right. \right)$ and corresponding symmetric (antisymmetric) orbital wavefunctions in the (1, 1) charge configuration,

$$
\left| \Psi_ {\pm} \right\rangle = \frac {1}{\sqrt {2 (1 \pm \Sigma^ {2})}} \left(\left| i j \right\rangle \pm \left| j i \right\rangle\right),\tag{25}
$$

in order to guarantee an overall antisymmetric wavefunction under particle exchange as required for Fermions. Here $\sigma = \langle i | j \rangle$ denotes the overlap between the singleparticle ground-state wavefunctions of the electron localized on adjacent sites i and $j \neq i .$ The exchange energy $J = \langle \Psi _ { - } | H | \Psi _ { - } \rangle - \langle \Psi _ { + } | H | \Psi _ { + } \rangle$ decays exponentially with increasing interdot spacing d and magnetic field B for large B. The sign of J can correspond to antiferromagnetic $( J > 0 )$ or ferromagnetic $( J < 0 )$ coupling. While $J > 0$ is obligatory for $B = 0$ for a two-electron system, J can display a sign change from positive to negative at finite $B > 0$ (Burkard et al., 1999a; Zumb¨uhl et al., 2004), or in multi-electron QDs (Deng et al., 2018; Malinowski et al., 2019; Martins et al., 2017).

The main shortcomings of the HL method are that it does not take into account doubly occupied sites and that, while it provides the exchange energy for the Heisenberg Hamiltonian (1), it cannot deliver the parameters of the Hubbard model (19).

The Hund-Mulliken (HM) or molecular-orbital model extends the HL model to include doubly occupied sites by expanding the Hilbert space with two spin singlet states with orbital wavefunctions |iii and |jji corresponding to the (2, 0) and (0, 2) charge states (Burkard et al., 1999a). The single-particle states |ii and |ji are first orthonormalized to form a convenient basis. The exchange energy

is found as

$$
J = \frac {1}{2} \left(\sqrt {U ^ {2} + \frac {1 6 t _ {c} ^ {2}}{U ^ {2}}} - U\right) - 2 \mathcal {J} \approx \frac {4 t _ {c} ^ {2}}{U} - 2 \mathcal {J},\tag{26}
$$

where $U _ { i } = U _ { j } = U > 0$ and $t _ { i j } = t _ { c }$ correspond to the efective on-site Coulomb and tunneling matrix elements in $\operatorname { E q } .$ (19), and $\mathcal { I }$ is the direct exchange contribution due to the long-range Coulomb interaction. The approximation holds in the Hubbard limit $t _ { c } \ll U$ . If direct exchange efects can be neglected we recover the result Eq. (22) for $\epsilon = 0 .$

Extensions of the HL approach include the efect of an inhomogeneous field (de Sousa et al., 2001), s-p hybridization of single-dot orbitals (Burkard et al., 1999a), and a symmetry-breaking variational approach (Yannouleas and Landman, 2002). The HM model has been extended to include on-site triplet states (White and Ramon, 2018). Spin-orbit coupling, in the presence of a magnetic field, can render the exchange coupling anisotropic by contributing a Dzyaloshinskii-Moriya interaction D · $( \mathbf { S } _ { i } \times \mathbf { S } _ { j } )$ to the Hamiltonian (Barufa et al., $^ { 2 0 1 0 \mathrm { a } , \mathrm { b } ; }$ Chutia et al., 2006; Kavokin, 2001, 2004; Liu et al., 2018).

## C. FCI calculations of exchange

The approximate analytic models described above give important insights into the exchange interaction, but do not completely capture the impact of band structure and electrostatic confinement. These can be fully accounted for by solving the complete Hamiltonian of Eq. (16), which in general must be done numerically (Reimann and Manninen, 2002). The full configuration interaction (FCI) method is an eficient and systematic way to solve multi-electron Hamiltonians and is thus an invaluable tool for understanding exchange interactions in realistic spin qubit devices.

In the FCI approach, first developed for quantum chemistry (Szabo and Ostlund, 1996), a set of 2K singleparticle spin orbital basis states $\{ \phi _ { m } ( \mathbf { r } ) \chi _ { \sigma } \}$ is chosen which are product states of real-space basis functions and spinors; the former may be convenient analytic functions or eigenstates of the single-particle operator T in Eq. (16) (Gyure et al., 2021; Joecker et al., 2020; Rontani, 2006). Often, $K \approx 2 0 - 4 0$ orbitals are needed to obtain fully converged dot or donor states. From this single particle basis, the set of all possible N-particle Slater determinants is constructed, which is used as the multielectron basis in which Eq. (16) is diagonalized. All matrix elements of the Hamiltonian in this basis can be expressed solely with single-electron terms and two-electron Coulomb integrals in Eq. (18), which can be computed using the single-particle states $\phi _ { m }$ . This ensures that all exchange and correlation efects are included, provided a large enough single-particle basis is used.

![[assets/figures/references/burkard-2023/da947222f790d8f7efaf29f1d732eb310a9a99e010b19d2c3417704d57f8aeb5.jpg]]

b)  
![[assets/figures/references/burkard-2023/98019a763eab22ca68d5842f99f31b32ec36bfda2b39b621dc6c60fca84ce624.jpg]]

![[assets/figures/references/burkard-2023/ac830c44f55c2407179a28aba8799bb0875ec3e5092bb1e81dc8787c25b25db2.jpg]]

d)  
![[assets/figures/references/burkard-2023/fc698a33475fe98e562cf7b4b52cb7ef1e1a5f41d495cf78975bd3d213b51f27.jpg]]  
FIG. 13 (a)-(d) Simulation of the change in the DQD potential (gray) and electron density (pink) as the interdot barrier is lowered to increase exchange from approximately 10 kHz to 1 GHz. The potential is generated by solving the Poisson equation for a representative Si/SiGe DQD, which is then used in an FCI calculation to obtain the wave functions and $\textit { J } \left( K = 3 0 \right.$ single-particle eigenstates are used to construct the basis). At practically useful multi-MHz levels of exchange, the electrostatic barrier vanishes and the electrons shift closer together, separated primarily by their Coulomb repulsion.

The resulting N-electron eigenstates are linear combinations of Slater determinants and (in the absence of spin-orbit or magnetic gradients) can be classified by their spin properties, including total spin $S ^ { 2 }$ and spin projection $S ^ { z }$ . For instance, exchange J can be computed from the energy splitting between the lowest two-electron singlet and triplet eigenstates. As the total number of Slater determinants scales as $\binom { 2 K } { N }$ , FCI calculations become intractable for large $N ;$ however, realistic two- and three-electron systems are well within the capabilities of modern computers.

## D. Discussion of theoretical approaches for calculating exchange

The most basic model for describing controlled exchange is the Fermi-Hubbard hopping model, Eq. (19), with constant U, detuning  taken as a linear function of gate voltage, and tunnel coupling $t _ { c }$ taken as an exponential function of gate voltage. The model makes predic tions for exchange as a function of voltage that are not well replicated by experiments, with the largest deviations at high values of exchange (Reed et al., 2016). This is unsurprising, given the change in character of tunneling barriers as dots combine shown in Fig. 13. Nonetheless, this model is of high value for providing qualitative understanding in exchange-based experiment design.

The HL model is surely more quantitative, but has some limitations on its validity (Calder´on et al., 2006; Saraiva et $a l .$ , 2007); in the weak interdot coupling limit the HL results agree qualitatively with exact diagonalization results with some quantitative modifications (Melnikov and Leburton, 2006). Experimental results in laterally coupled vertical DQD show that the Heitler–London model forms a good approximation of the two-electron wavefunction (van der Wiel et al., 2006).

Since the HM method takes into account double occupation of sites, its range of validity in charge config uration space is greater than that of the HL approach. The HM predictions have been experimentally verified in Hatano et al., 2008. The validity of the single-particle description even for multi-electron QDs has been discussed in Bakker et $a l .$ , 2015 and Hu and Das Sarma, 2001. A comparison of the Hartree-Fock, HM, Heisenberg, and Hubbard models using a double-well potential consisting of a linear combination of Gaussians can be found in Hu and Das Sarma, 2000.

The determination of J with high accuracy and predictive power is possible with FCI (Hu and Das Sarma, 2001). Since the magnitude and sensitivity of J depend on both material properties (such as the efective mass and permittivity) and device electrostatics, the accuracy depends in turn on accurate modeling of the device structure. The sensitivity of FCI to material parameters reveals phenomena which may not be obvious from sitebased methods, e.g., the specific charge configurations for “sweet spots” where a qubit is resilient against charge noise (Vion et al., 2002).

As an example, in Fig. 13 we compare the numerically computed electrostatic potential and electron density in a typical Si DQD as J increases. Qualitatively we expect to modulate exchange by lowering the tun nel barrier between well-separated electrons; however, in practice the reduced confinement displaces the electrons significantly towards each other as exchange is activated. Indeed, at large J no external potential barrier between the electrons exists at all, and the Coulomb repulsion it self acts as the efective barrier; hence, the notion of a separable dot basis does not hold as the electron states transition smoothly between a double- and single-dot limit. Such efects are particularly important when considering simultaneous exchange between multiple pairs of electrons (van Diepen et al., 2021; Pan et al., 2020; Qiao et $a l .$ , 2020), which requires coordinated spatial displacements; describing such efects accurately within site-based approaches like the Fermi-Hubbard, Heitler-London and Hund-Milliken models discussed above requires major modifications.

More generally, numerical FCI calculations are important for describing the efects of electron-electron interactions on QD level structure, such as Wigner molecule behavior (Ercan et al., 2021). Similarly, such calculations can capture the impact on J of locally-sensitive parameters such as valley splitting and spin-orbit coupling.

![[assets/figures/references/burkard-2023/c55c54af9a514947c8f7e4dbc593fb05a7ad627eca11b5bd9e753539ff64af70.jpg]]  
FIG. 14 PSB in a DQD. (a) (2,0) singlet initialization occurs by biasing the left QD such that $\mu _ { S _ { ( 2 , 0 ) } } < E _ { F } < \mu _ { T _ { ( 2 , 0 ) } } .$ Qubit operations and readout are then performed by changing bias positions along the (2,0)-(1,1) detuning axis. Readout is implemented by detuning such that the singlet ground state is (2,0). Interdot tunneling is prohibited by PSB for the spin triplet state (lower right panel), allowing spin-to-charge conversion. (b) Charge stability diagram in the vicinity of the (2,0)-(1,1) anticrossing.

FCI calculations have revealed the complex dependency of exchange couplings in donors (Gamble et al., 2015; Tankasala et al., 2018) and QDs (Gyure et al., 2021; Hu and Das Sarma, 2001; Nielsen et al., 2012), and been used to study charge noise sensitivity (Shim and Tahan, 2018) and mediated exchange in multi-electron dots (Deng and Barnes, 2020; Nielsen et al., 2013).

## E. Pauli spin blockade

An important manifestation of exchange, well understood from the Fermi-Hubbard model discussed in Sec. IV.A, is Pauli spin blockade (PSB). As illustrated in Fig. 14, the ground state of a two-electron DQD can be either the (1, 1) or (2, 0) charge configuration<sup>3</sup> depending on the DQD level detuning $\epsilon = \mu _ { 1 } - \mu _ { 2 }$ . As discussed in Sec. III.B, the (2, 0) ground state is a spin singlet. Thus, when the detuning  satisfies $- U - J ^ { \operatorname* { m a x } } < \epsilon < - U$ , singlets occupy the (2, 0) charge state, but the triplet spin states remain in the (1,1) configuration (Fig. 12). The maximum value of the exchange coupling, J<sup>max</sup>, depends on the energy separation between the ground and first excited states in the left QD. In GaAs QDs, this spacing typically depends on the orbital energy spacing, which can be of order meV. In Si QDs, this energy spacing can depend on the valley splitting, which can be tens to hundreds of $\mu \mathrm { e V }$ , or the orbital energy spacing, depending on the number of electrons. This phenomenon, wherein spin states map onto distinct charge configurations, constitutes PSB.

The experimental realization and confirmation of PSB first occurred in vertical GaAs DQDs, which are fabricated by etching semiconductor heterostruc tures (Kouwenhoven and Marcus, 1998). Electrical transport measurements in the first experiments provided evidence of current rectification via PSB (Ono et al., 2002). Even at this early stage, these experiments were motivated by the possibility of using electron spins as quantum bits. Following the initial demonstration of PSB, pulsed-gate measurements showed that the triplet-singlet relaxation time was much longer than charge relaxation times, confirming the suitability of singlet and triplet states for quantum information purposes (Fujisawa et al., 2002). PSB was later observed in planar GaAs DQDs with higher electron occupations (Johnson et al., 2005a) and used in pulsed-gate experiments to measure tripletsinglet relaxation as a function of magnetic field (Johnson et al., 2005b).

PSB is an essential tool for the initialization and readout of many types of spin qubits. Pairs of electrons in the same QD can easily be initialized as spin singlets by enabling electron tunneling between that dot and a nearby electron reservoir (Botzem et al., 2018; Maune et al., 2012; Petta et al., 2005). After initialization, spin singlets can be separated via interdot tunneling into separate dots. If the two electrons are separated adiabatically in the presence of a magnetic gradient, the singlet transitions to a spin-zero product state, thus enabling the straightforward creation of product states (Foletti et al., 2009; Petta et al., 2005).

Following evolution of the spin states, these steps can be reversed to project a pair of electrons onto the singlet triplet basis. A simple readout method involves rapidly pulsing the detuning $\mathrm { ~ t o ~ } - U - J ^ { \operatorname* { m a x } } < \epsilon < - U$ after manipulation. In this state, the singlet-triplet energy splitting is extremely sensitive to environmental charge noise. The joint spin state dephases rapidly, and an external charge detector, such as a QPC (Petta et al., 2005) or QD (Barthel et al., 2009), can extract information about the charge state of the DQD using one of the techniques discussed in Sec. III.C, thus projecting its spin state. If the detuning is pulsed adiabatically with respect to any magnetic gradients, one spin-zero product state maps to the singlet, and all other spin states map to triplet. Gen erally, PSB readout is straightforward to implement, and can enable rapid (µs-scale or shorter) and high-fidelity (> 98%) readout fidelity of diferent qubit types (Barthel et al., 2010, 2009; Borjans et al., 2021a; Connors et al., 2020; Noiri et al., 2020; Reilly et al., 2007).

![[assets/figures/references/burkard-2023/40c81b1c660ac1fa975983884025a4629dbb37cfd9db542d927fc07cbb4a3644.jpg]]  
FIG. 15 Various approaches for achieving long-range spin coupling: a) Surface acoustic waves (Bertrand et al., 2016), b) Charge transport (Baart et al., 2016), c) Superexchange (Baart et al., 2017), d) Spin-SWAPs (Kandel et al., 2019), e) Spin-CTAP (Gullans and Petta, 2020), f) Capacitive coupling (Shulman et al., 2012), and g) Coupling through a spin chain (Bose, 2003).

## F. Long-range couplers

Despite its simplicity and speed, Heisenberg exchange only directly couples nearest-neighbor spins, as it relies on wavefunction overlap. The requirement for close proximity of the spins [see Fig. 13] poses challenges for the design, fabrication, and operation of large-scale spin-based quantum information processors. This section reviews the various approaches for creating an efective long-range coupling between distant spins. Many of these approaches are in the early stages of development. As such, the experimental characterization of quantum state transfer fidelities using protocols such as randomized benchmarking and gate set tomography is one important future avenue of research in this area.

## 1. Spin transport, spin SWAPs, and spin-CTAP

Perhaps one of the most conceptually straightforward ways to achieve long-range connectivity is to physically transport qubits across a device. The two main approaches that have been investigated include using a surface acoustic wave (SAW) as a conveyor belt for electrons and “bucket brigade” style single electron shuttling. SAWs are travelling acoustic waves that are typically generated in piezoelectric materials, such as GaAs, using interdigitated transducers (Datta, 1986). Early experiments in GaAs/AlGaAs heterostructures demonstrated single charge (McNeil et al., 2011) and spin (Bertrand et al., 2016) transport between two QDs [Fig. 15(a)]. Spin state transport using SAWs has recently been demonstrated with high fidelity (Jadot et al., 2021). SAW implementations of spin state transport may have long term limitations due to power dissipation, SAW directionality, and the relatively large size requirements of SAW transducers. Some of these scaling challenges may be alleviated using charge and spin shuttling.

Charge shuttling involves moving an electron through an array of QDs by periodically modulating the confinement potential. Early experimental implementations of charge shuttling in superconducting devices were motivated by the metrological desire to have a high-speed current standard (Keller et al., 1999). A theoretical proposal by Taylor et al. suggested using a bucket brigade charge shuttle to transfer quantum information between semiconductor spin qubits (Taylor et al., 2005). To achieve charge transfer, the detuning between adjacent QDs is ramped across the interdot charge transition. Early experiments in GaAs demonstrated spin shuttling [Fig. 15(b)] (Baart et al., 2016; Fujita et al., 2017). In Si, charge shuttling has been achieved in a linear array of 9 QDs (Mills et al., 2019b), and spin shuttling has been quantitatively characterized in a SiMOS DQD (Yoneda et al., 2021). Conveyor-mode charge shuttling through a 400 nm long open channel defined by a series of electrodes has been demonstrated in Seidler et al., 2021.

Another approach for achieving spin state transfer without the physical transfer of charges is to use a sequence of pairwise spin SWAPs to couple spatially separated spin qubits [Fig. 15(d)]. Spin SWAPs can be achieved using exchange pulses, as proposed in the original Loss-DiVincenzo proposal (Kandel et al., 2021; Loss and DiVincenzo, 1998; Petta et al., 2005). Spin SWAPs can also be implemented in systems with a magnetic field gradient by periodically modulating the exchange coupling (Nichol et al., 2017). First demonstrations were achieved in GaAs, with more recent high fidelity demonstrations having been achieved in Si/SiGe QDs (Nichol et al., 2017; Sigillito et al., 2019b).

Greentree et al., 2004 proposed using coherent transport via adiabatic passage (CTAP), in analogy to stimulated Raman adiabatic passage (STIRAP) commonly used in atomic physics(Vitanov et al., 2017), to achieve charge transfer in QD arrays. Theoretically, the idea has been extended to spin by Gullans and Petta, 2020, where it was shown that time-varying exchange pulses can be used to transfer spin states with high fidelity [Fig. 15(e)]. Experimental results by Kandel et al., 2021 in GaAs QD arrays give a proof of concept that such adiabatic protocols are viable.

## 2. Superexchange

To create an efective long-range exchange coupling between distant spins, sometimes referred to as superexchange, an additional QD-based mediator (typically a single QD or a chain of occupied QDs) is physically interposed between the two spins of interest. Through a process involving a virtual occupation or excitation of the mediator, the spins coupled to the mediator experience an efective, indirect exchange interaction (Bose, 2003; Friesen et al., 2007).

When two electrons are coupled to a single QD mediator [Fig. 15(c)], they can experience an efective tunnel coupling, which depends on the electrochemical potential of the lowest unoccupied level of the mediator, through a virtual tunneling process (Braakman et al., 2013; Loss and DiVincenzo, 1998). This virtual tunneling process for electrons also creates a virtual exchange interaction for spin states. Although the occupation of the inner QD never physically changes, this scenario creates an indirect coupling between the outer QDs, which preserves the coherence of both charge (Braakman et al., 2013) and spin (Baart et al., 2017; Chan et al., 2021; Malinowski et al., 2019) states. Direct, coherent spin exchange with mediator electrons is also possible in a multiply-occupied QD mediator (Malinowski et al., 2019).

Superexchange can also occur with a multi-QD mediator (Qiao et al., 2021b). One of most commonly studied systems, which is predicted to exhibit superexchange, is an extended, strongly-coupled spin chain (Campos Venuti et al., 2006; Oh et al., 2010; W´ojcik et al., 2005), to which two end spins are weakly coupled. The use of a spin chain as a long range coupler of spins, also referred to as the “spin bus”, has been examined by Bose, 2003, Bose, 2007, and extensively by Friesen et al., 2007; these works show that a series chain of N QDs with nearest neighbor exchange coupling J may provide an efective end-to-end exchange coupling of J/ N [Fig. 15(g)].

## 3. Capacitive and electric dipole-dipole couplings

Spin-qubit encodings with a charge-qubit character offer a natural coupling scheme with more reach than exchange: the electric field created by charge displacement in one qubit can be used to control the state by displacing the charge of another qubit [Fig. 15(f)]. At short range, this is efectively a quantum cross-capacitance ef fect; at larger distances, it has the character of an electrically mediated efective dipole-dipole coupling. It translates to a spin coupling due to exchange, field gradients or spin-orbit (Cayao et al., 2020; Shulman et al., 2012; Stepanenko and Burkard, 2007; Taylor et al., 2005), or due to the hyperfine splitting between electrons and nuclei. The latter efect may benefit the scaling of donor systems, since the electric dipole of a donor impurity may be “stretched” by the action of a gate above the device, enabling electric control of a long-distance dipole-dipole coupling. Since this long-range coupling has a weak spatial dependence in comparison to exchange, it may allow donor devices to be fabricated through a controlled ion implantation process, with the inevitable placement straggle compensated for by gate calibration (Tosi et al., 2017). Coupling a donor to a dot may ofer similar advantages (Harvey-Collard et al., 2017). Such spin-relevant capacitive interactions are most efective when coupling to microwave excitations in a resonator, which we address in the next subsection and in Sec. VII.

## 4. Cavity QED

Three sets of experiments in 2004 demonstrated coherent coupling of solid-state qubits to photons, opening the door to long-range qubit coupling approaches employing photons in the microwave (Wallraf et al., 2004) and optical regimes (Reithmaier et al., 2004; Yoshie et al., 2004). Long-range coupling of two superconducting qubits using a microwave cavity was achieved shortly thereafter (Majer et al., 2007; Sillanpaa et al., 2007). The concept of a cavity-bus for coupling superconducting qubits is now widespread (Blais et al., 2021). Concepts for coupling spin qubits to cavities date as far back at 1999 (Imamoglu et al., 1999), with a resurgence of theoretical activity taking place again in 2004–2007 (Burkard and Imamoglu, 2006; Childress et al., 2004; Jin et al., 2012; Trif et al., 2008). Given the explosive growth of this area of quantum information science, we devote Sec. VII to a review of progress in QD cQED and its potential for providing long-range spin-spin couplings for qubits. We also note for completeness various proposals and experiments demonstrating coupling of superconducting qubits to phonons, an area of which is ripe for exploration using QDs (Gustafsson et al., 2014).

## V. QUANTUM GATES AND QUANTUM CIRCUITS

Over the last two decades, there has been immense progress developing spin qubit technologies using the interactions and building blocks discussed in the previous sections. In this section, we delve into the theoretical and experimental status of the qubit types introduced in

Sec. II. For each qubit type, we discuss how initialization and readout have been physically implemented, strategies followed for performing single- and two-qubit gate operations, and the current status of gate fidelities.

For comparative fidelity in this review, we put particular emphasis on randomized benchmarking (RB). The RB experiment consists of random sequences of quantum gates $C _ { R } C _ { N } \ldots C _ { 2 } C _ { 1 }$ applied to an initial state, where the $( N + 1 ) ^ { \mathrm { t h } }$ “recovery” gate $C _ { R }$ is chosen so that each sequence would, in the absence of error, have the logical action of identity (Magesan et al., 2011). The $C _ { j } \mathrm { s }$ are drawn from the Cliford group, the group of gates which transform any multi-qubit Pauli-operator P (as $C _ { j } ^ { \dagger } P C _ { j } )$ into another Pauli operator (i.e. the Cliford group is the normalizer of the n-qubit Pauli group.) Besides forming a discrete group for computational ease of composing to identity, this choice of operations “twirls” generic errors on the gates $C _ { j }$ into a uniform, incoherent, depolarization-like error, enabling a potentially complex error structure to collapse into a single-exponential decay when averaging over the results of measuring the initial state probability after many random sequences. The exponential decay constant resulting from simple leastsquares fitting of repeated measurements over random circuits provides the single benchmark number, interpreted as an average gate infidelity. The infidelity of a particular Cliford gate, such as the CZ or CNOT entangling gate, can be extracted by measuring the decay whilst interleaving this gate amongst all the Clifords, and subtracting of the measured decay rate without interleaving. For a review of RB and its variants, see Helsen et al., 2020.

Example randomized benchmarking data from a number of semiconductor spin qubits are shown in Fig. 24; these results will be discussed in more detail in following sections. One-qubit RB (1Q RB) and two-qubit RB (2Q RB) are important accomplishments, in part because the ability to perform RB, which requires the application of many (preferably 1000s) of programmed, calibrated operations on a qubit, shows that the whole system, including cryogenics, control hardware, wiring, and qubits, are co-performing in a way necessary for operation as a future quantum computer. Quantum state, process, and gate-set tomography (GST) (Mohseni et al., 2008) use repeated state estimation to identify specific errors, and may give complementary information to a qubit’s computational utility, and hence these methods provide additional fidelity metrics in the sections that follow.

## A. Loss-DiVincenzo single spin qubits

The control of a single LD qubit follows the same principles as the coherent control of large spin ensembles, a subject with a long history in electron spin resonance (ESR) and nuclear magnetic resonance (NMR)

(Abragam, 1961; Slichter, 2010). However, single-spin control faces additional challenges that are absent in ensemble experiments. In bulk ESR/NMR, initialization is typically performed by waiting for the ensemble to thermalize; at typical magnetic fields and temperatures, the resulting polarization is quite small, but this is compen sated for in the measurement signal-to-noise ratio by the large size of the spin ensemble. For single-spin qubits, an initialization routine giving nearly 100% polarization is required, and waiting for thermalization is prohibitively time-consuming. Hence coherent single-spin control requires fast, high-fidelity initialization and measurement procedures, and this is where the review of LD qubits begins.

## 1. Initialization and readout

The first experimental demonstration of single spin readout was achieved by Elzerman et $a l .$ , 2004 in a GaAs QD. In the same issue of Nature, electrical detection of single spin resonance in a Si transistor was also reported (Xiao et al., 2004). Elzerman et al., 2004, and many similar works since then, use energy-dependent tunneling, providing a high-enough magnetic field for the Zeeman splitting $E _ { Z } = g \mu _ { B } B$ to greatly exceed the thermal energy $k _ { B } T _ { e }$ for electron temperature $T _ { e } { } ^ { 4 }$ . Initialization and readout are then achieved through single-electron tunneling between the QD and an electron reservoir (see Fig. 16). Tunneling is controlled by adjusting the QD energy level relative to the Fermi level of the reservoir $E _ { F }$ using time-dependent gate voltage pulses $V _ { g } ( t )$ These gate voltage pulses can be very short ∼ 100 ps, as had been previously demonstrated in charge qubits (Fujisawa et al., 2002; Hayashi et al., 2003; Petersson et al., 2010; Petta et al., 2004).

The modest g-factor in GaAs required Elzerman et al., 2004 to operate with $B = 1 0 \mathrm { ~ T ~ }$ . The gate voltage pulse sequence for readout, illustrated in Fig. 16, first emptied the QD and then pulled the energy of both spin states below $E _ { F }$ to randomly load the QD in |↓i or |↑i. After waiting for a time $t _ { \mathrm { w a i t } }$ , the QD was biased to set $E _ { \downarrow } > E _ { F } > E _ { \uparrow }$ . Through the process of spin-to-charge conversion, an increase in the QPC current corresponds to a |↓i-spin measurement outcome, while no change in current is detected for an |↑i-spin. Similarly, initialization is achieved by pulling only the spin ground state beneath $E _ { F }$ . Single spin control is then generally implemented deep in Coulomb blockade (see Sec. III.B) to prevent loss of the electron to the reservoir when microwave fields are applied to drive the spin.

![[assets/figures/references/burkard-2023/178fd185a5460300519782c283156e2c1e5b72b6dfb3840f14f7acee8e3977c8.jpg]]  
FIG. 16 Energy-dependent tunneling for single spin initialization and readout of LD qubits. Note that the ground state in GaAs is |↑i due to its negative electron g-factor. (a) |↑i can be initialized by emptying the dot (top panel) and then applying a positive voltage pulse, such that $E _ { \downarrow } > E _ { F } > E _ { \uparrow }$ (bottom panel). With $E _ { \downarrow } > E _ { F } > E _ { \uparrow }$ an electron can only tunnel into the spin ground state. After spin manipulations, (b) spin readout is performed by pulsing back to the initialization bias condition. In this example, the presence (absence) of a tunneling event during the measurement period indicates |↓i (or |↑i).

Elzerman spin-dependent tunneling imposes several experimental constraints and must be carefully optimized to achieve high fidelity readout. First, by necessity, Elzerman readout is implemented on QDs that are adjacent to charge reservoirs. In contrast, readout of central dots in a large array would require transport of the spin to an end site of the array (see Sec. IV.F). Second, there is a competition in time-scales. Since spin readout is achieved using charge detection, the electron must have suficient time to tunnel of the QD during the readout pulse. If the tunnel rate is too fast compared with the measurement bandwidth, the charge signal can be missed, while if the rate is too slow, the spin can relax before measurement. Third, $E _ { z } \gg k _ { B } T _ { e }$ is required to initialize into the ground state, which implies operation at high field and low temperature. In practice, the spin relaxation rate $\Gamma _ { 1 } = 1 / T _ { 1 } \propto B ^ { 5 }$ in GaAs, which limits the practical field range (in addition to technical challenges associated with microwave control above 20 GHz). Finally, spin readout is destructive since the |↓i-spin is lost to the Fermi sea during tunneling. An overview of the conditions required to achieve a readout fidelity $F > 9 9 \%$ has been given by Keith et al., 2019a. Mills et al., 2021 recently achieved $F > 9 9 \%$ in Si/SiGe quantum devices.

## 2. Single-qubit gates

Coherent single spin control was first demonstrated by Koppens et al., 2006 using ESR in a GaAs DQD. By applying a source-drain bias $V _ { S D }$ across the DQD, a (1,1) polarized spin triplet state $\left( \mathrm { T } _ { + } \ \mathrm { o r } \ \mathrm { T } _ { - } \right)$ was initialized via transport in the PSB regime. Spin detection in this case occurred by measuring the DQD leakage current $I _ { \mathrm { d o t } }$ as a function of $B _ { 0 }$ and the frequency $f _ { \mathrm { a c } } = \omega / 2 \pi$ of an applied microwave magnetic field $B _ { \mathrm { a c } }$ generated by driving an ac current through a stripline fabricated adjacent to the DQD. On resonance, when $B _ { 0 } = \pm h f _ { \mathrm { a c } } / g \mu _ { B }$ for one of the spins, single spin ESR drives transitions from the triplet to singlet, lifting PSB and increasing $I _ { \mathrm { d o t } }$ . Measurements revealed a peak in $I _ { \mathrm { d o t } }$ around $B = 0$ due to hyperfine mixing of the spin states (Johnson et al., 2005b; Jouravlev and Nazarov, 2006; Koppens et al., 2006), as well as two satellite peaks following the resonance condition $B = \pm h f _ { \mathrm { a c } } / g \mu _ { B }$ [Fig. 17(a)].

The physics of how applied transverse ac magnetic fields drive coherent spin rotations follows conventional ESR. The transverse ac field may be assumed to point along ˆx, i.e. $B _ { 1 } ( t ) \hat { x } = B _ { \mathrm { a c } } \cos ( \omega t + \phi ) \hat { x } _ { \mathrm { m } }$ , where $\phi$ is a phase relative to a local oscillator. The efective Hamil tonian in the rotating frame [see App. A] is then $\tilde { H } =$ $( g \mu _ { B } B _ { 0 } - \hbar \omega ) S ^ { z } + g \mu _ { B } ( B _ { 1 } / 2 ) \bar { S } ^ { x }$ . The first term vanishes when the electron spin is driven on resonance (with ¯hω = $g \mu _ { B } B _ { 0 } )$ and the electron spin coherently rotates between |↑i and |↓i at the Rabi frequency $f _ { \mathrm { R a b i } } = g \mu _ { B } B _ { 1 } / ( 2 h )$ In the Bloch sphere representation of the LD qubit [see Fig. 2], the static $B _ { 0 }$ field points along the z-axis and leads to Larmor precession of the spin, while the transverse field $B _ { 1 } ( t )$ points along the x-axis for $\phi = 0$ and yields a $\sigma ^ { x }$ rotation.

For Koppens et al., 2006, 2008, Rabi oscillations at frequencies up to ∼10 MHz were achieved, but were highly damped in this first experiment due to hyperfine interactions [lower image in Fig. $\mathrm { 1 7 ( a ) ] }$ which move the spin out of resonance and lead to imperfect rotations on the Bloch sphere. Hyperfine coupling is discussed in greater detail in Sec. VI. Later silicon-based ESR devices devices (Pla et al., 2012; Veldhorst et al., 2014) achieved comparable Rabi frequencies in a system with reduced hyperfine coupling.

Single-spin control based on ESR raises questions on how to selectively control one qubit in an array. In some LD-based architectures, only global single-spin control is possible (Jones et al., 2016), but these require high dot-to-dot uniformity. Tunable and selective single qubit rotations require a unique Larmor resonance for each qubit, for example by engineering magnetic field gradients across the device (Pioro-Ladriere et al., 2008) or through voltage-tunable g-factors (Veldhorst et al., 2014). A key concern of any ESR approach is power dissipation, as device heating often limits the maximum Rabi frequency that can be obtained, motivating new designs for resonators and approaches for local control with global fields (Vahapoglu et al., 2021).

One year after ESR control of a single spin in a GaAs QD was shown, Nowack et al., 2007 achieved electrically driven single spin rotations using EDSR with the intrinsic SOC of GaAs. An ac voltage excitation applied to a gate electrode shifted the orbital wave function, and coherent Rabi oscillations were again detected by measuring $I _ { \mathrm { d o t } }$ in the PSB regime [Fig. 17(b)]. The highest Rabi frequency achieved was 4.7 MHz; nevertheless, this important demonstration spurred the investigation of electrical control in strong spin-orbit systems (see Sec. V.E.2) and added weight to the development of EDSR in the “artificial SOC” created by magnetic field gradients (Tokura et al., 2006). The transition from ESR to gradient-enabled EDSR not only afords more speed, but it also provides a clear mechanism for selectivity, since the ac driving field can be applied directly to a QD gate electrode.

![[assets/figures/references/burkard-2023/9170aff3e475a5ec8cbbe4490fe1690b9acaf19749a4d59de9114dc92a67f5c7.jpg]]

![[assets/figures/references/burkard-2023/e00df82c045c38c74d50131924c68f896660e9bfe2b1a5f6b21bbee800f44dbd.jpg]]

![[assets/figures/references/burkard-2023/37d4a4224173a65f9ac7388d3c8a9de600232dd4d89ebb5b1454e8f2656468f8.jpg]]

![[assets/figures/references/burkard-2023/cd34343c0eb79730b874f87b4b02f99db14a416258b52385e309fc7c490c4287.jpg]]  
FIG. 17 Single spin rotations driven with: (a) an ac magnetic field generated by a coplanar waveguide (Koppens et al., 2006), (b) an ac electric field in the presence of intrinsic SOC (Nowack et al., 2007), and (c) an ac electric field in the presence of synthetic SOC (a magnetic field gradient) (Pioro-Ladriere et al., 2008; Tokura et al., 2006). (d) Low power EDSR in a field gradient can be achieved in the flopping-mode regime of a DQD (Benito et al., 2019a; Croot et al., 2020).

Pioro-Ladriere et al., 2008 demonstrated the feasibil ity of electrically driving spin rotations using a magnetic field gradient resulting from a fabricated Co micromagnet. A time-dependent gate voltage $V _ { \mathrm { a c } }$ periodically moved the electron in the inhomogeneous field of the micromagnet and spin rotations were detected in the PSB leakage current [Fig. 17(c)]. The longitudinal magnetic field gradient from the magnet allowed the EDSR transitions of both spins to be spectrally resolved. Yoneda et al., 2014 built upon these results by demonstrating >100 MHz Rabi frequencies, measuring Rabi chevrons in the time-domain, and achieving Z-gates in the field gradient.

A larger displacement of the electron spin in the magnetic field gradient can be achieved in a DQD at $\epsilon =$ 0, which is known as the “flopping-mode” (Croot et al., 2020). As illustrated by the measurements in Fig. 17(d), the power required to achieve an EDSR Rabi frequency $f _ { \mathrm { R a b i } } = 6$ MHz is reduced by a factor of ∼250 at  = 0 compared to the far-detuned single dot regime. Floppingmode operation may greatly reduce power requirements in larger QD device architectures.

## 3. Two-qubit gates

LD qubits use voltage-controlled exchange for twoqubit gates (see Sec. IV), which was first shown to coherently couple two single-spins by Petta et al., 2005 (Fig. 18a). In this experiment fast ∼ 200 ps exchange oscillations were observed in a GaAs DQD. Time-domain control of J(t) was also used to measure the inhomogeneous spin dephasing time $T _ { 2 } ^ { * } \sim 1 0$ ns and the spinecho decay time $T _ { 2 } \sim 1 \mu \mathrm { s }$ . Many aspects of Petta et al., 2005 were later repeated in Si/SiGe by Maune et al., 2012, Fig. 18b, with longer coherence times and improved exchange coherence; the limiters of coherence for exchange oscillations will be discussed in Sec. VI. These early results only featured singlet-triplet readout by PSB; Nowack et al., 2011 extended these results to a GaAs DQD that allowed for independent single-shot readout of each spin with a fidelity of 86%.

True LD operation requires the ability to do both single-spin rotations for single-qubit gates and exchange operations for two-qubit gates, completing a universal control set. The exchange Hamiltonian of Eq. (1) couples |↑↓i to |↓↑i; an exchange π pulse (activating exchange for a time $\tau = \pi \hbar / J )$ realizes a SWAP gate, while an exchange π/2 pulse generates the entangling square-root of swap gate SWAP. The efect of exchange can be seen by writing Eq. (1) as the projection operator on the spin-singlet state, $H = - J | \mathrm { S } \rangle \langle \mathrm { S } |$ , with the resulting unitary $U ( \phi ) = \exp ( - i \phi | \mathrm { S } \rangle \langle \mathrm { S } | ) = \mathbb { 1 } + ( e ^ { i \phi } - 1 ) | \mathrm { S } \rangle \langle \mathrm { S } |$ . For $\phi = J \tau / \hbar \tau$ π we find $U ( \pi ) = 1 - 2 | \mathrm { S } \rangle \langle \mathrm { S } | = \mathrm { S W A P }$ while for $\phi = \pi / 2$ we have $U ( \pi / 2 ) = ( 1 + i ) \mathbb { 1 } / 2 + ( 1 - i ) \mathrm { S W A P } / 2 =$ √<sub>SWAP. Using this interaction and single-qubit rota-</sub> tions separately, the CNOT gate (up to a global phase) could then be obtained using the sequence CNOT = $e ^ { { - i \pi S _ { 2 } ^ { y } } / { 2 } } e ^ { { i \pi S _ { 1 } ^ { z } } / { 2 } } e ^ { { - i \pi S _ { 2 } ^ { z } } / { 2 } } \sqrt { \mathrm { S W A P } } e ^ { { i \pi S _ { 1 } ^ { z } } } \sqrt { \mathrm { S W A P } } e ^ { { i \pi S _ { 2 } ^ { y } } / { 2 } }$ (Loss and DiVincenzo, 1998).

In practice, however, exchange coupling and local magnetic fields typically act on a register of spin qubits simul taneously, e.g. in devices with magnetic field gradients or g-factor variations (Brunner et al., 2011). Considering two exchange-coupled spins, we can investigate this situation with the Heisenberg Hamiltonian Eq. (1) where $i , j = 1 , 2$ such that $H = J \mathbf { S } _ { 1 } \cdot \mathbf { S } _ { 2 } + g \mu _ { B } ( \mathbf { B } _ { 1 } \cdot \mathbf { S } _ { 1 } + \mathbf { B } _ { 2 } \cdot \mathbf { S } _ { 2 } )$ 2 where for simplicity we have assumed that the g-factor is the same for both sites, although similar principles may be applied with dot-varying g-factors (Jock et al., 2018; Tanttu et al., 2019). Taking the magnetic field direction to be the same on both sites $( \mathrm { i } . \mathrm { e } . \hat { z } ) , H =$ $J { \bf S } _ { 1 } \cdot { \bf S } _ { 2 } + B ( S _ { 1 } ^ { z } + S _ { 2 } ^ { z } ) + \Delta B ( S _ { 1 } ^ { z } - S _ { 2 } ^ { z } ) / 2 ,$ with $B =$ $g \mu _ { B } ( B _ { 1 } + B _ { 2 } ) / 2 = g \mu _ { B } B ^ { z } { \mathrm { ~ a n d ~ } } \Delta B = g \mu _ { B } ( B _ { 1 } - B _ { 2 } ) =$ $g \mu _ { B } \Delta B ^ { z }$ As this Hamiltonian includes two, potentially indepedently controllable non-commuting terms, a variety of adiabatic and diabatic control options exist for achieving entangling two-qubit gates. For example, the direct time evolution of this Hamiltonian with all terms held constant generates the CZ (or CPHASE) gate, $U _ { \mathrm { C Z } } = \mathrm { d i a g } ( 1 , 1 , 1 , - 1 ) = i \exp ( - i \tau H / \hbar )$ , for a gate time $\tau = 2 \pi k / \Omega$ where $\hbar \Omega = \sqrt { J ^ { 2 } + \Delta B ^ { 2 } }$ with $k = 1 , 2 , \dots$ and $J = ( k - n - 2 m - 1 / 2 ) \hbar \Omega / k$ with n, m integers, and $B = ( n + 1 / 2 ) \hbar \Omega / 2 k$ (Burkard et al., 1999b). A simple case is $k = 1$ and $n = m = 0$ where CZ can be realized for arbitrary $\Delta B \ne 0$ , with $B = \Delta B / 2 \sqrt { 3 } , J = 2 \Delta B / \sqrt { 3 }$ and $\tau = \pi \hbar / J$ When combined with single-qubit rotations, this gate lends itself to the implementation of the CNOT gate. An equivalent version of a CZ gate can also be derived from a two-site hopping model (Meunier et al., 2011).

![[assets/figures/references/burkard-2023/b24c6219f1b299281a1db46569d889dab7cb41bdcb7bf07ef20e56a3bc6e5eab.jpg]]  
FIG. 18 Coherent exchange oscillations as first observed in a DQD using PSB readout for (a) GaAs (Petta et al., 2005) and (b) SiGe (Maune et al., 2012).

Watson et al., 2018 utilized a dc exchange pulse to implement a CZ gate in the large magnetic field gradient regime. Veldhorst et al., 2015b demonstrated full twoqubit control in SiMOS, achieving selective spin control by voltage-shifting the g-factors and therefore the ESR resonance frequencies of the two qubits. Fast CZ gates were implemented by pulsing on exchange. Zajac et al., 2018 demonstrated a resonantly driven CNOT gate by lowering the energy of antiparallel spin states (|↑↓i, |↓↑i) relative to the parallel spin states (|↑↑i, |↓↓i) with exchange while applying a single microwave pulse (Russ et al., 2018b). As each of these experiments also included site-selective single-spin initialization, control, and readout, full-gate sets for LD qubits were demonstrated in all cases.

## 4. Limits of fidelity - randomized benchmarking

The transition to Si/SiGe spin qubits from GaAs has resulted in higher overall operation fidelities for LD qubit control. Kawakami et al., 2014 demonstrated spin control in a Si/SiGe DQD with a Co micromagnet, observing $f _ { \mathrm { R a b i } } \sim 5$ MHz and measuring $T _ { 2 }$ and $T _ { 2 } ^ { * }$ using spin-echo and Ramsey pulse sequences, and later single-qubit randomized benchmarking with 98.1% fidelity (Kawakami et al., 2016). Using ESR for RB, Veldhorst et al., 2014 showed a single-qubit control fidelity of 99.6% in a $^ { 2 8 } \mathrm { S i \mathrm { - } }$ MOS device, included in Fig. 24. Similarly, Takeda et al., 2016 reported fidelities of 99.6% using EDSR in a field gradient in natural-Si/SiGe devices. Veldhorst et al., 2015b extended these results to a SiMOS DQD, where selective ESR control of two spins was achieved. Zajac et al., 2018 used RB to demonstrate single-qubit fidelities of 99.3% and 99.7% in a two-qubit Si/SiGe device. Isotopic enrichment has led to continued increases in the single-qubit gate fidelity, as discussed in Sec. V.A.4. Using isotopically enriched ${ \mathrm { S i } } / { \mathrm { S i G e } } ,$ Yoneda et al., 2018 achieved single-qubit fidelities exceeding 99.9%. Characterization of the electrical noise in this device indicates coherence is limited by charge motion in the presence of the micromagnet field gradient. Yang et al., 2019 achieved single-qubit Cliford fidelities of 99.96% in a SiMOS device using improved pulse engineering. Recently, Xue et al., 2021a reported single-gate fidelities of 99.69% in a Si/SiGe QD notable for being operated by a cryogenic control chip.

Early attempts to characterize two-qubit gate fidelities employed quantum state tomography. Zajac et al., 2018 used the resonant CNOT gate to generate a Bell state with fidelity $F = 7 8 \%$ . Watson et al., 2018 achieved similar Bell state fidelities using decoupled CZ gates. Both of these experiments had to correct the tomography for significant SPAM errors. Huang et al., 2019 more rigorously characterized two-qubit gate fidelities using RB in a SiMOS DQD, with an average Cliford (CROT) gate fidelity of 94.7% (98%) achieved in a regime with alwayson exchange. Xue et al., 2019 implemented a variation on RB called character RB, enabling the interleaving of a two-qubit gate amongst single-qubit Clifords, and obtained two-qubit gate fidelity estimates of 92%. Xue et al., 2021b recently achieved a two-qubit gate fidelity of 99.5% using pulsed exchange. In the regime of always-on exchange, Noiri et al., 2021 have also achieved RB with >99% two-qubit gates. High fidelity overall operation of two qubits in a six QD device has been obtained by Mills et al., 2021, with sequential single spin rotation $F$ >99.9%, simultaneous single spin rotation $F > 9 9 \%$ , and a two-qubit CZ $F > 9 9 . 8 \%$ . SPAM errors in this demonstration were $< 3 \%$ . Fidelities are expected to further increase with reduced charge noise and higher levels of isotopic enrichment.

Eforts to control hole spins in Ge/GeSi heterostructures have advanced significantly in a short period of time. Due to strong SOC, hole spins can be manipulated electrically without the need for a separate ESR drive line or micromagnet. The smaller efective mass of holes in Ge also relaxes nanofabrication requirements, as the QDs are larger than in Si. Hendrickx et $a l .$ , 2020a achieved short ${ \sim } 2 0$ ns single hole-spin rotations with $F > 9 9 . 3 \%$ and a two qubit exchange gate. Multi-qubit operations have been implemented in a ${ \mathrm { ~ 2 ~ } } \times { \mathrm { ~ 2 ~ G e ~ } }$ QD array, culminating in the generation of a four-qubit Greenberger-Horne-Zeilinger state (Hendrickx et al., 2021).

## B. Donor spin qubits

When Kane, 1998 was published, it was diferent from contemporary proposals based on QDs since basic GaAs QD devices had already been fabricated (Kouwenhoven and Marcus, 1998). While doped Si is common, the isolation of single donors in close proximity to gated nanostructures for single-electron control and measurement presented novel fabrication challenges. A number of groups have faced this challenge using bottomup scanning-tunneling-microscopy (STM) lithography on hydrogen passivated silicon surfaces, enabling the placement of atoms nearly one-at-a-time into designated locations as both qubits and gates (Bussmann et al., 2015; Lyding et al., 1994; Schofield et al., 2003). Alternatively, (Morello et al., 2010) has shown that the approach of detected ion-implantation of P into MOS-style devices allows single-donor-spin measurement and subsequent control. Electrostatically gated dot-donor devices are also being explored (Harvey-Collard et $a l .$ , 2017), and may provide unique opportunities for nuclear spin readout and coupling to microwave photons (Mielke et al., 2021). The ion implantation and STM lithography approaches have both shown steady progress in controlling single electron spin states, the nuclear spin of the donor, and the exchange coupling between donors, as we discuss in this section, concluding with a discussion of gate fidelities.

## 1. Donor electron spin control and readout

Morello et $a l .$ , 2010 used the Elzerman energydependent tunneling approach to spin initialization and readout discussed in Sec. V.A.1, borrowing heavily from developments in QDs [Fig. 19(a)]. A single electron transistor (SET) was fabricated next to a $9 0 \times 9 0$ nm region that was implanted with P donors, and voltage control of a nearby plunger gate was used to control the electronic state of the donor. Single shot measurements allowed mapping of the electron spin lifetime as a function of magnetic field, with $T _ { 1 } = 6 :$ s obtained at $B = 1 . 5 \mathrm { T }$ , and the spin readout visibility was estimated to be around 92%. Two years later, Pla et al., 2012 showed coherent Rabi oscillations of a single donor electron spin in a natural-Si substrate [Fig. 19(b)]. These oscillations were highly damped due to hyperfine interactions, reminiscent of the first GaAs QD single-spin Rabi oscillations (Koppens et al., 2006). The use of a simple Hahn echo pulse sequence extended the coherence time out to 200 µs.

![[assets/figures/references/burkard-2023/a48d1a29cd3b9db2fffb4a5902153507558c327441b8f0ac97e150f1b49b8a18.jpg]]

![[assets/figures/references/burkard-2023/7b3daebaf5f8da2ece78f1c066b520457310f5009e7681a068912b3691813293.jpg]]

![[assets/figures/references/burkard-2023/b7b6478d0959675a3e442b5c398e27be27e7764cf2bac6926f3b4b3880a107f0.jpg]]  
FIG. 19 a) Single shot readout of a donor-bound electron spin (Morello et al., 2010). b) Rabi oscillations of a donorbound electron spin (Pla et al., 2012). c) Coherent control of exchange-coupled donor electron spins (He et al., 2019).

The STM lithography approach achieved similar results: Broome et al., 2017 placed a small cluster of donor atoms next to a SET also defined using STM lithography, and demonstrated $F = 9 8 . 4 \%$ single-shot readout of a donor singlet-triplet qubit. Koch et al., 2019 later achieved an average measurement fidelity of $F = 9 7 . 9 \%$ for single spin Elzerman readout using a SET, and Keith et al., 2019b showed $F = 9 7 \%$ measurement fidelity with a 1.5 µs SET measurement time. Dispersive gate-based sensing has also been explored, but as with QD systems, dispersive sensing yields lower fidelities and measurement bandwidths. Pakkiam et al., 2018 dispersively probed a donor singlet-triplet qubit with a moderate fidelity $F =$ 82.9% and 3 kHz bandwidth.

Tettamanzi et al., 2017 took a first step towards donor quantum control by demonstrating pulse spectroscopy of a single P atom at frequencies up to 13 GHz. These experiments demonstrated that microwave signals could be transmitted down heavily doped P leads in silicon. Hile et al., 2018 later probed ESR spectra of a single P donor and 2P molecule, and Koch et al., 2019 then extended these results to single shot measurements of a single P donor qubit using a SET.

## 2. Donor nuclear spin control and readout

In Kane, 1998, the qubit is the $\mathrm { ^ { 3 1 } P }$ nuclear spin, not the electron; the electron is used for read-out and control leveraging the $\mathrm { ^ { 3 1 } P }$ hyperfine coupling of A ≈ 114 MHz (Sec. III.F). Pla et al., 2013 accessed the nuclear spin by using an ESR measurement time much less than the nuclear spin flip time. This device was able to resolve ESR transition frequencies that jumped between $f _ { \Uparrow } = g \mu _ { B } B / h + A / 2$ and $f _ { \Downarrow } = g \mu _ { B } B / h - A / 2$ These jumps were interpreted as being due to flips of the nuclear spin state (denoted by ⇑ and ⇓). A broadband antenna on the device allowed for direct driving of the donor atom nuclear spin, with dephasing times $1 0 ^ { 4 }$ times longer than for the donor electron spin. In a followup experiment in $^ { 2 8 } \mathrm { S i }$ , nuclear spin control with a fidelity exceeding 99.99% was demonstrated. Muhonen et al., 2014 showed Carr-Purcell-Meiboom-Gill (CPMG) dynamic decoupling pulse sequences extended the nuclear spin coherence time beyond 30 sec. Laucht et $a l .$ , 2015 showed that the Larmor resonances of each donor site could be selectively controlled by pushing the electron closer to its $\mathrm { ^ { 3 1 } P }$ using a gate, as proposed by Kane, enabling a global ESR field to selectively control one site at a time.

Recently, Asaad et al., 2020 demonstrated coherent control of the $^ { 1 2 3 } \mathrm { S b }$ donor. The $\mathrm { ^ { 3 1 } P }$ donor is a nuclear spin $I = 1 / 2$ system, but nuclei with spin $I > 1 / 2$ such as $I = 7 / 2 \ ^ { 1 2 \mathrm { { 3 } } } \mathrm { { S b } }$ allow for richer and more complicated control possibilities. The uniform Zeeman splitting between adjacent states of diferent m is shifted by the electric quadrupole interaction due to local strain, allowing individual addressability of all $2 I + 1 = 8$ nuclear spin transitions. Modulation of these quadrupole splittings by an ac electric field drives Rabi oscillations between transitions, and a dephasing time $T _ { 2 } ^ { * } \approx 9 2$ ms was demonstrated.

## 3. Two-qubit gates

Kane, 1998 proposed coupling between donor nuclear spin qubits could be mediated via exchange between the electron spins on each donor, but it was soon noted that atomic-scale oscillations in exchange due to multi-valley interference would render this interaction highly sensitive to atomic placement (Gamble et $a l .$ , 2015; Joecker et al., 2020; Koiller et $a l .$ , 2001; Wellard et al., 2003), requiring either an architecture tolerant of such variation, extremely careful donor placement, or the use of asymmetric donor clusters with more than one phosphorous atom (Wang et al., 2016). A variety of demonstrations of exchange on various donor devices have helped show a range of possibilities beyond Kane’s original proposal. Weber et $a l .$ , 2014 used donor devices fabricated with STM-based lithography to show exchange and PSB of two electrons on the same donor site, Gorman et al., 2016 demonstrated methods to calibrate tunnel couplings, and Broome et al., 2017 performed high-fidelity singlet-triplet (PSB) readout. With suficient control over the donor positions and of tunnel couplings, Broome et al., 2018 was able to observe two-electron correlations and (He et al., 2019) showed fast coherent exchange oscillations between donor clusters [Fig. 19(c)]. As with the first exchange oscillations in GaAs and Si/SiGe DQDs, the oscillations were heavily damped due to charge noise (Maune et al., 2012; Petta et al., 2005).

An alternative coupling relevant to donors is the magnetic dipole-dipole coupling between electrons, as its long-range, magnetic nature avoids the atomic precision fabrication requirement for exchange. Proposals to exploit this interaction through isotopic engineering and implanted donors employ a variety of methods to manage the interaction, including selective ionization and mechanical motion (Hill et al., 2015; Ladd et al., 2002; O’Gorman et al., 2016; de Sousa et al., 2004), however execution of any such proposal will require devices with exquisite coherence.

## 4. Limits of fidelity - randomized benchmarking

The demanding nanoscale fabrication requirements of donor devices have impeded their progress relative to gate-defined QDs. QCVV results are so far limited to ion-implanted devices, which are capable of supporting impressive quantum control fidelities. Muhonen et al., 2015 performed comprehensive measurements of the electron and nuclear spin qubit gate fidelities using 1Q RB, included in Fig. 24. Average electron spin gate fidelities exceeded 99.95%, while the nuclear spin fidelity was 99.99%. The dependence of the fidelity on pulse power and shape in these early experiments suggests the overall fidelities are limited by quantum control hardware constraints, not the intrinsic performance of the qubit.

Recent characterization of two P ion-implanted donors coupled by a single electron using gate set tomography (GST) have demonstrated single-qubit fidelities of up to 99.93% and two-qubit fidelities of 99.2% (Madzik et al., 2021). GST allows for the distinction of coherent (stochastic) errors that transfer amplitude (probability) to erroneous states, as well as relational errors, where the errors incurred are dependent on the history of prior gate operations. Madzik et al., 2021 found evidence for coherent ZZ errors that were attributed to of-resonant leakage of microwave power near ESR frequencies. While an exchange gate has been demonstrated with an STM fabricated device (He et al., 2019), the fidelities are too low to support QCVV protocols. Quantitative characterization of the exchange gate through RB remains an important goal for the donor spin qubit platform.

## C. Singlet-triplet qubits

The early demonstration of coherent exchange in a GaAs DQD (Petta et al., 2005) showed not only the potential for two-qubit operations of LD qubits, but also basic single-axis control of the $\mathrm { S T _ { 0 } }$ qubit. The data in Fig. 18 show that the DQD level detuning  enables control over the exchange coupling $J ,$ which is the energy separation between the S and $\mathrm { { T _ { 0 } } }$ qubit states, as discussed in Sec. IV. In these early demonstrations, the longitudinal magnetic field gradient experienced by the two spins, $\Delta B ^ { z }$ , which lifts the degeneracy between the flip-flop states $\begin{array} { r } { | \uparrow \downarrow \rangle = \frac { 1 } { \sqrt { 2 } } \left( | \mathrm { S } \rangle + | \mathrm { T } _ { 0 } \rangle \right) } \end{array}$ and $\begin{array} { r } { | \downarrow \uparrow \rangle = \frac { 1 } { \sqrt { 2 } } \left( | \mathrm { T } _ { 0 } \rangle - | \mathrm { S } \rangle \right) } \end{array}$ ), was provided by the random hyperfine fields of nuclear spins in the device.

Figure 20 also shows that at a particular value of $\epsilon ,$ the |Si and $| \mathrm { T } _ { + } \rangle$ states become degenerate, where $J$ compensates the Zeeman splitting between triplet-states, $E _ { Z }$ . Near this detuning, the $\mathrm { S T _ { + } }$ qubit is formed. Here again we have the controllable qubit energy splitting $E _ { S T _ { + } } = E _ { z } - J$ and the transverse coupling $\Delta _ { \mathrm { S T } }$ can be introduced by various mechanisms such as microscopic hyperfine or spin-orbit interactions (Nichol et $a l .$ , 2015; Petta et $a l .$ , 2010; Stepanenko et $a l .$ , 2012; Taylor et $a l .$ 2007). For the $\mathrm { S T _ { + } }$ qubit we are assuming a device made with a negative g-factor material, such as GaAs, where $| \mathrm { T } _ { + } \rangle$ is lower in energy than |T<sub>−</sub>i; for a positive g-factor material (e.g. Si), the natural choice is a ST qubit.

## 1. Initialization and readout

$\mathrm { S T _ { 0 } }$ and $\mathrm { S T _ { + } }$ qubit demonstrations (Botzem et al., 2018; Foletti et al., 2009; Maune et al., 2012; Petta et $a l .$ 2005) use PSB for initialization and readout (Sec. IV.E). The high-fidelity of PSB initialization and readout in DQDs is enabled by the large exchange coupling in the (2,0) charge configuration. The energy splitting from the singlet ground state to the excited (2, 0) triplet states was shown to be meV or higher in energy in GaAs and tens to hundreds of µeV higher in energy in Si QDs, as discussed in Sec. IV.A. These energy scales are larger than $k _ { B } T _ { e }$ at typical electron temperatures. Following initial ization, the electrons are usually separated via tunneling to the (1,1) charge state.

Experiments have leveraged adiabatic and nonadiabatic separation to complete qubit control [see the energy level diagram in Fig. 20(a)]. When electron separation occurs rapidly with respect to any magnetic gradients, tunneling preserves the spin state, so an initialized singlet remains a singlet (Botzem et $a l . ,$ 2018; Foletti et $a l .$ 2009; Maune et al., 2012; Petta et al., 2005). If the separation occurs slowly with respect to magnetic gradients, the singlet state transitions to the lower-energy spin-zero product state (Foletti et $a l .$ , 2009; Petta et al., 2005). Hence two orthogonal $\mathrm { S } – T _ { 0 } – \mathrm { q u b i t }$ basis initializations are available, and pulsing detuning  or tunnel coupling $t _ { c }$ enables characterization of the exchange coupling. The spin-to-charge conversion ofered by PSB reduces spin readout to dot-selective charge readout. A significant number of optimizations have been explored to increase readout speed and fidelity (Barthel et al., 2010, 2009; Borjans et al., 2021a; Connors et al., 2020; Noiri et al., 2020; Reilly et al., 2007). A key trade-of is that while larger gradient B-fields can drive faster single qubit operations, these persistent gradients reduce the fidelity of PSB readout due to enhanced spin relaxation (Barthel et al., 2012). Latched readout protocols first demonstrated with charge qubits (Petersson et $a l .$ , 2010) have been extended to singlet-triplet qubits and can overcome this limitation (Orona et al., 2018; Studenikin et $a l .$ 2 2012).

![[assets/figures/references/burkard-2023/c2ef97ad45153a03dae46c690382e40b62effa4904444d61921687e8a5c567ac.jpg]]

![[assets/figures/references/burkard-2023/950a94fee402858652dbb37e5042e9bf4ec582061952bae53277276569074ba5.jpg]]

![[assets/figures/references/burkard-2023/5b08593d28ddeac8e7b3a08ad371e08116fdf62d5b0d56cf13360e9b80402308.jpg]]

![[assets/figures/references/burkard-2023/125b701a7f895e21b41fe6ac77b4bff9711934f6b60fc0477ff479a9eaa46d8b.jpg]]  
FIG. 20 a) Energy-level diagram for two electrons in a DQD.  is the energy level detuning, and (1, 1) and (2, 0) indicate the DQD charge configurations. The Zeeman and exchange splittings are $g ^ { * } \mu _ { B } B$ and $J ( \epsilon )$ where B denotes the magnetic field. The spin states are $\begin{array} { r } { | \mathrm { S } \rangle = \frac { 1 } { \sqrt { 2 } } ( | \uparrow \downarrow \rangle - | \downarrow \uparrow \rangle ) } \end{array}$ $| \mathrm { T _ { 0 } } \rangle ~ = ~ \frac { 1 } { \sqrt { 2 } } \left( | \uparrow \downarrow \rangle + | \downarrow \uparrow \rangle \right)$ ), $| \mathrm { T } _ { + } \rangle ~ = ~ | { \uparrow \uparrow } \rangle$ , and $| \mathrm { T } _ { - } \rangle ~ = ~ | \downarrow \downarrow \rangle$ Singlet-triplet oscillations driven by: b) g-factor diferences between dots (Liu et al., 2021), c) micromagnets (Wu et al., 2014), and d) dynamic nuclear polarization (Foletti et $a l .$ 2009).

## 2. Single-qubit gates

As described in Sec. II.C, the Hamiltonian (Eq. 2) governing the control of $\mathrm { S T _ { 0 } }$ qubits includes an exchangedriven $\sigma ^ { z }$ term and a $\sigma ^ { x }$ term that is set by an efective magnetic field gradient. Full two-axis control of the $\mathrm { S T _ { 0 } }$ qubit Bloch vector therefore requires control of exchange, which can be achieved by adjusting interdot barrier heights or DQD level detunings, and magnetic field gradients. Approaches to generate the required magnetic field gradients are varied and include dynamic nuclear polarization (DNP) (Bluhm et al., 2010a; Foletti et al., 2009), the use of permanent micromagnets (Fogarty et al., 2018; Wu et al., 2014), g-factor diferences (Jock et al., 2018; Liu et al., 2021), or spin-valley coupling (Jock et al., 2021). Data acquired using some of these approaches are shown in Figs. 20(b–d). We elaborate on these approaches below.

For gate-defined spin qubits, typical exchange couplings are in the MHz to GHz range. Coherent exchange rotations are achieved by applying fast gate voltage pulses (<1 ns to 10’s of ns). Voltage pulses of the opposite sign applied to the DQD plunger gates can rapidly change the detuning to configurations with large $^ { J , }$ as first demonstrated by Petta et al., 2005. Such control at fixed tunnel coupling is capable of generating arbitrary single qubit gates (Hanson and Burkard, 2007). However, detuning-controlled exchange oscillations are vulnerable to charge noise, and the number of coherent oscillations is typically around 10 (Dial et al., 2013; Fogarty et al., 2018; He et al., 2019; Maune et al., 2012; Petta et al., 2005). Exchange oscillations can also be observed with larger numbers of electrons in the QDs, in configurations where the inner electrons form a “frozen core” (Barnes et al., 2011; Higginbotham et al., 2014a).

Bertrand et al., 2015 and Martins et al., 2016, working in GaAs DQDs, and Reed et al., 2016, working in isotopically enhanced Si TQDs, showed that improved qubit control results when the barrier height between electrons is pulsed to smaller values, as simulated in Fig. 13. The improvement occurs because the Coulomb-dominated ex change coupling is first-order insensitive to potential fluctuations in this “symmetric” mode. As a result, the quality factor of exchange oscillations is higher than that for detuning-controlled oscillations, although the magnitude of the required voltage pulses is also significantly higher. Both of these methods of creating exchange coupling suffice to generate $\sigma ^ { z }$ rotations on the $\mathrm { S T _ { 0 } }$ Bloch sphere. In principle, both methods can also be used to control $\mathrm { S T _ { + } }$ qubits, though detuning sweeps have been more frequently used in these systems (Petta et al., 2010; Ribeiro et al., 2010).

Full control of the $\mathrm { S T _ { 0 } }$ and $\mathrm { S T _ { + } }$ qubit Bloch vectors also requires an efective magnetic field gradient for $\sigma ^ { x }$ rotations. The use of hyperfine field is particularly convenient for GaAs QDs, due to the many spinful nuclei. A challenge with using hyperfine as a basis of control is that, as discussed in detail in Sec. VI.B, the nuclear hyperfine field fluctuates randomly because the nuclear Zeeman energy is so small, typically less than 1 mK for fields of order 1 T, and magnetic dipole-dipole interactions lead to nuclear spin difusion. However, various mechanisms can be employed to enhance and stabilize the nuclear polarization via the electron spins (Bluhm et al., 2010a; Foletti et al., 2009; Nichol et al., 2017;

Petta et al., 2008; Shulman et al., 2012). These processes are collectively called dynamic nuclear polarization (DNP) (Abragam and Goldman, 1978).

In singlet-triplet qubits, DNP usually involves the degeneracy point between the |Si and $| \mathrm { T } _ { + } \rangle$ states. This degeneracy is lifted by a transverse gradient (Nichol et al., 2015; Petta et al., 2010; Stepanenko et $a l .$ , 2012; Taylor et $a l .$ , 2007), which is typically generated via the hyperfine interaction between the electron and nuclear spins [Fig. 20(a)]. As the DQD is adiabatically detuned across the ST<sub>+</sub> avoided crossing, the electrons transition from |Si to $| \mathrm { T } _ { + } \rangle$ via the transverse Overhauser field and a nuclear spin must change its state to conserve angular momentum in the electron-nuclear subsystem (Brataas and Rashba, 2011; Neder et $a l .$ , 2014; Ribeiro and Burkard, 2009). If repeated rapidly enough, this process can flip a large number of nuclear spins and can be used to “pump” both the average $\frac { 1 } { 2 } \big ( B _ { 1 } ^ { z } + B _ { 2 } ^ { z } \big )$ (Petta et al., 2008) and diference $( B _ { 2 } ^ { z } - B _ { 1 } ^ { z } )$ longitudinal magnetic fields of the DQD (Bluhm et al., 2010a; Foletti et al., 2009; Nichol et al., 2015, 2017; Shulman et al., 2012). It is not surprising that the average field should be afected, if one assumes that this process flips nuclear spins in both dots with approximately the same probability. However, the underlying mechanism that builds up the diference field remains remains an active area of theoretical re search (Gullans et al., 2010, 2013).

In addition to dynamic nuclear polarization, micromagnets can also be used to generate $\sigma ^ { x }$ rotations (Fogarty et $a l . . .$ , 2018; Wu et $a l .$ , 2014). Although additional fabrication is required, micromagnets eliminate the requirement for DNP, which adds experimental overhead. In Si ST qubits, $g -$ factor diferences between dots can naturally lead to the existence of a $\sigma ^ { x }$ term, even in the presence of a uniform magnetic field (Kerckhof et al., 2021; Liu et al., 2021). Finally, when the Zeeman energy equals a valley splitting, the resonance that occurs between diferent valley states, together with spin-valley coupling, can also enable rapid $\sigma ^ { x }$ rotations in Si ST qubits (Jock et al., 2021).

Dynamical decoupling experiments illustrate the potential for using fluctuating hyperfine fields for full $\mathrm { S T _ { 0 } }$ control. Bluhm et al., 2010b and Malinowski et al., 2017a have used exchange pulses to decouple $\mathrm { S T _ { 0 } }$ qubits from magnetic noise, resulting in nearly a 5 order of magnitude improvement in coherence. These experiments, in addition to later studies in SiGe (Kerckhof et al., 2021), also uncover the spectrum of the Overhauser field, revealing the significance of the Larmor precession of the individual nuclei (Neder et $a l .$ , 2011). Stabilized magnetic gradients also enable decoupling $\mathrm { S T _ { 0 } }$ qubits from charge noise (Dial et al., 20 $s ;$ Shulman et al., 2014) as well as charge noise spectroscopy (Connors et $a l .$ , 2021; Dial et al., 2013; Jock et al., 2021).

For $\mathrm { S T _ { + } }$ qubits, the $\sigma ^ { x }$ interaction typically comes from transverse magnetic gradients (Nichol et al., 2015;

![[assets/figures/references/burkard-2023/70409fb518e360abb1a98e39ee2780d5d4e0353685aa2c81b1dacb7e2f93c831.jpg]]

![[assets/figures/references/burkard-2023/799c6ab09d441f93454a402e2a306a5afb2f46103344527b277cba038103cdd0.jpg]]  
FIG. 21 Two-qubit operations in $\mathrm { S T _ { 0 } }$ qubits. a) Bell-state fidelity during a capacitive entangling operation between two ST<sub>0</sub> qubits, from (Shulman et al., 2012). b) Concurrence during during a two-qubit operation between capacitivelycoupled resonantly-driven $\mathrm { S T _ { 0 } }$ qubits, from (Nichol et al., 2017).

Petta et $a l .$ , 2010; Stepanenko et al., 2012; Taylor et $a l .$ 2007) which can be created via hyperfine fields or micromagnets. However, unlike longitudinal gradients, transverse gradients are not amenable to DNP and are thus dificult to stabilize. Transverse gradients also contain spectral components at the Larmor precession frequencies of the individual nuclei (Nichol et al., 2015); as a result, the naturally occurring hyperfine polarization is typically not stable enough to generate usable xrotations. Spin-orbit coupling can also induce a $\mathrm { S T _ { + } }$ splitting (Nichol et $a l .$ , 2015; Stepanenko et al., 2012), but detuning charge noise in this case can create substantial decoherence. As an alternative to conventional qubit manipulation, repeated Landau-Zener sweeps through the avoided crossing have been proposed as a mechanism to achieve universal control of ST qubits (Petta et al., 2010; Ribeiro et al., 2010). The axis of rotation on the Bloch sphere in this mode is controlled by the timing of two consecutive Landau-Zener sweeps.

In part to avoid issues associated with charge noise, a variant of the $\mathrm { S T _ { 0 } }$ qubit, the “resonantly-driven $\mathrm { S T _ { 0 } }$ qubit,” which is related to the “flip-flop qubit,” (Tosi et al., 2017) has been developed (Klauser et al., 2006; Nichol et al., 2017; Shulman et al., 2014; Takeda et al., 2020). This qubit’s basis states |↑↓i and |↓↑i are equal superpositions of the original singlet and triplet states. In such a resonantly-driven $\mathrm { S T _ { 0 } }$ qubit, a large magnetic gradient, either from a micromagnet or hyperfine fields, generates the primary qubit energy splitting. An oscillating voltage applied to a plunger or barrier gate creates an oscillating exchange splitting. If driven at a frequency corresponding to the magnetic gradient, this oscillating exchange coupling can drive transitions. Because the qubit energy splitting does not depend on electric fields, decoherence due to charge noise can be suppressed.

## 3. Two-qubit gates

van Weperen et al., 2011 measured the shift in the exchange oscillation frequency of one $\mathrm { S T _ { 0 } }$ qubit due to changes in the charge configuration of another nearby $\mathrm { S T _ { 0 } }$ qubit, providing the capacitive interaction for a two qubit gate (Taylor et al., 2005). The electrostatic interaction translates to spin, as with spin initialization and readout, via PSB. Consider two $\mathrm { S T _ { 0 } }$ qubits in close proximity. The first qubit will, depending on its state (singlet or triplet), have a slightly diferent charge configuration $[ ( 0 , 2 ) \mathrm { o r } \ ( 1 , 1 ) ]$ . As a result, the second qubit experiences a diferent electrostatic potential and thus energy splitting J depending on the state of the first qubit. This leads to an efective Ising interaction between the two $\mathrm { S T _ { 0 } }$ qubits of the form $H _ { \mathrm { i n t } } \propto ( d J _ { 1 } / d \mu _ { 1 } ) ( d J _ { 2 } / d \mu _ { 2 } ) ( \sigma ^ { z } -$ $I ) \otimes ( \sigma ^ { z } \ : - \ : I )$ (Shulman et al., 2012; Stepanenko and Burkard, 2007; Taylor et al., 2005), which can be used to implement, for instance, a CZ gate [see Fig. 21].

Charge noise adversely impacts the performance of this capacitive coupling mechanism. Low-frequency charge noise may be refocused by applying spin-echo-like pulses to both qubits, using stabilized magnetic gradients (Dial et al., 2013; Shulman et al., 2012). If refocusing pulses are applied to both qubits simultaneously, single-qubit dephasing is substantially reduced, while the two-qubit interaction is preserved. Nichol et al., 2017 partially overcame charge-noise limitations this way using the resonantly-driven $\mathrm { S T _ { 0 } }$ qubit, where $\Delta B ^ { z } \gg J ,$ . Although the qubit in this regime is sensitive to fluctuating nuclear fields, nuclear spin noise can be refocused much more efectively than charge noise (Bluhm et al., 2010b). One complication with this approach, not present in the static $\mathrm { S T _ { 0 } }$ qubit case, is that the form and magnitude of the coupling depends on the frequencies of the two qubits (Calderon-Vargas and Kestner, 2018). By exploiting DNP, Nichol et $a l . .$ 2017 tuned the qubit energies to resonance, and performed a rotary echo to suppress low-frequency noise. Neighboring $\mathrm { S T _ { 0 } }$ qubits can also be coupled via the exchange interaction (Cerfontaine et al., 2020b; Klinovaja et al., 2012; Levy, 2002; Li et $a l .$ , 2012; Wardrop and Doherty, 2014) and experimental investigations of this approach have recently been initiated (Qiao et al., 2021a).

## 4. Limits of fidelity - randomized benchmarking

Single-qubit gate fidelities for conventional $\mathrm { S T _ { 0 } }$ qubits exceed 99.5% in GaAs qubits, as measured via RB using stabilized hyperfine gradients (Cerfontaine et al., 2020a). Based on simulations, the gate infidelities were attributed to charge noise. For resonantly-driven $\mathrm { S T _ { 0 } }$ qubits in GaAs, single-qubit gate fidelities are ∼99% as measured via RB, likely limited by both hyperfine and charge noise (Nichol et al., 2017).

Two-qubit operations for GaAs $\mathrm { S T _ { 0 } }$ qubits have so far only been assessed through state and process tomography. For conventional $\mathrm { S T _ { 0 } }$ qubits, the maximum Bellstate fidelity is about 70% (Shulman et al., 2012), limited by charge noise. For resonantly-driven $\mathrm { S T _ { 0 } }$ qubits, the maximum entangling gate fidelity is about 90% (Nichol et al., 2017), as measured via process tomography, with a corresponding Bell-state fidelity above 90%. A limitation associated with single- and two-qubit state tomography in $\mathrm { S T _ { 0 } }$ qubits is that the required tomographic rotations can be dificult to tune precisely (Nichol et al., 2017; Shulman et al., 2012; Takahashi et al., 2013).

## D. Exchange-only qubits

A necessary first step in developing TQDs, identified early as the minimum system size for EO control (Bacon et $a l .$ , 2000; DiVincenzo et al., 2000), was the determination of the voltage bias conditions for populating each dot with a single spin, and the identification of charge regimes enabling initialization, readout, and control (Gaudreau et al., 2009, 2006; Granger et al., 2010; Pan et al., 2012; Schr¨oer et al., 2007). The familiar twodimensional charge stability “honeycomb” of the DQD becomes a three dimensional cell structure in gate voltage space. For pairs of TQDs, six-dot arrays require calibration, necessitating even more complex, multidimensional bias tuning procedures to populate each QD with a single charge. Recently, automation and machine learning have been brought to bear on this problem (Botzem et al., 2018; van Diepen et al., 2018; Hsiao et al., 2020; Mills et al., 2019a; Zwolak et al., 2020).

## 1. Initialization and readout

For initialization and readout of TQD EO qubits, two of the QDs are used and subject to the same PSB procedure employed for $\mathrm { S T _ { 0 } }$ qubits (DiVincenzo et al., 2000; Jones et al., 2019; Maune et al., 2012; Petta et al., 2005). In both cases, the initialization procedure creates a singlet state |Si as described in Sec. V.C.1; for the $\mathrm { S T _ { 0 } }$ qubit, this is exactly one of the qubit states, |0i. For a TQD, a third spin is present in a third dot, but this third spin need not be initialized. As detailed in Sec. II.D, the encoded |1i state in the TQD case is a superposition of two of the triplet states; since Pauli blockade is based on spin parity, it distinguishes between singlet and triplet (but not triplet projections), which sufices for TQD qubit readout via PSB. Importantly, however, a TQD qubit has a third leaked state, with total angular momentum $S = 3 / 2$ , which is also composed of a superposition of triplet states of the two dots undergoing Pauli blockade. Therefore, a leaked state has the same PSB readout signature as the encoded |1i state.

TQDs present a convenient way to assess exchange for a single pair of QDs, even when full qubit control is not available. By initializing a singlet on one pair of dots (1 and 2), and then pulsing exchange on a second overlapping pair (2 and 3), a “triple-dot Rabi” experiment enables the measurement of coherent exchange oscillations without using magnetic field gradients. Laird et al., 2010 demonstrated such oscillations for early pulsed EO qubit experiments in GaAs, and Reed et al., 2016 used it for the development of exchange sweet-spots in isotopically enhanced Si TQDs. Unlike single-spin or singlet-triplet coherent oscillations, exchange oscillations decay due to a combination of charge noise and hyperfine dephasing, due to the ability of the encoded qubit to dephase into degenerate leakage states during exchange (Ladd, 2012).

## 2. Exchange-only single-qubit gates

Early coherent measurements of TQD states employed Landau-Zener transitions (Gaudreau et al., 2012; Poulin-Lamarre et al., 2015), as utilized for $\mathrm { S T _ { + } }$ qubits (Sec. V.C). Such experiments validate energy level structure using tools familiar from DQD qubits, but they do not exploit true EO operation; indeed they explicitly rely on mechanisms other than exchange to traverse anticross ings.

The EO modality takes its power from the ability to operate by idling qubits in a degenerate, non-evolving decoherence free subsystem or subspace, and then lifting selective singlet-triplet degeneracies with pulsed pairwise exchange (Andrews et al., 2019; Bacon et al., 2000; Di-Vincenzo et al., 2000). In contrast to LD and resonant $\mathrm { S T _ { 0 } }$ qubits that use oscillating fields for quantum control, EO systems rely on the control of energy splittings which are dynamically increased and decreased by changing the trapping potential of electrons.

The TQD EO qubit is defined only by whether the first two spins are in a singlet state |Si or any triplet state |Ti. Time-domain control of the exchange interaction $J _ { 1 2 } ( t )$ lowers the energy of the singlet state relative to any of the triplets, and therefore when pulsed on for a duration T provides a phase such that $\alpha | 0  + \beta | 1  $ $\begin{array} { r } { \alpha \left| 0 \right. + \exp \left( - \frac { i } { \hbar } \int _ { 0 } ^ { T } J ( t ) d t \right) \beta \left| 1 \right. } \end{array}$ . This interaction may be taken as a rotation of the encoded qubit about ˆz.

Complete control of the EO qubit is accomplished by pulsing another overlapping pair, say dots 2 and 3. To assess the geometric efect of exchange between these two dots, one may use angular momentum recoupling coeficients [Racah or Wigner $6 j$ coeficients (Varshalovich et al., 1988)], i.e. the matrix elements $\langle S _ { 1 2 } , S _ { 3 } , S _ { 1 2 3 } | S _ { 1 } , S _ { 2 3 } , S _ { 1 2 3 } \rangle$ , where $S _ { j k } .$ <sub>··</sub> refers to the total angular momentum of spins $j , k , \ldots$ . For $S _ { j } =$ $1 / 2$ and $S _ { j k }$ being either 0 or 1 for singlet or triplet, these coeficients amount to a rotation of angle $2 \pi / 3$ about the y-axis from the singlet-triplet basis along the z-axis to an axis defined by unit vector $\hat { n } = \cos ( 2 \pi / 3 ) \hat { z } - \sin ( 2 \pi / 3 ) \hat { x }$ The encoded qubit under exchange $J _ { 2 3 }$ between spins 2 and 3 therefore rotates about this ˆn axis. At most 4 pulses are needed to perform an arbitrary Bloch sphere rotation under these geometric constraints (Lowenthal,

![[assets/figures/references/burkard-2023/4c98710b23bc02f561d8378ad08fb43a49cda6a5c41b0164e408030181578542.jpg]]  
FIG. 22 Gradient-free exchange oscillations from an isotopically enhanced Si/SiGe TQD (Eng et al., 2015). At very negative detunings, dots 2 and 3 are exchange-coupled and exchange oscillations are geometrically interpreted as a qubit rotation about ˆn (see Fig. 2c); at less negative detunings, dots 1 and 2 are coupled, geometrically interpreted as rotation about ˆz. Exchange increases exponentially with detuning. At $\epsilon = - 7 ~ \mathrm { m V }$ , both exchange couplings are active as would be required for operation in the RX reigime.

1972), generalized Euler angles for such constructions are known (Chatzisavvas et al., 2009), and a table of solutions for the 24 single-qubit Clifords using 17 distinct angles and an average exchange-pulse count of 2.7 may be found in Andrews et al., 2019.

Medford et al., 2013a demonstrated complete EO qubit control in GaAs TQD. Here $J _ { 1 2 } ( t )$ and $J _ { 2 3 } ( t )$ were controlled, sweeping the integrated phase during the exchange pulses. Singlet-triplet read-out via PSB was performed, and a self-consistent tomography technique showed the basic operation was consistent with theory. Unfortunately, the decoherence free subsystem predicating EO control depends on homogeneous magnetic fields which maintain the total angular momentum of the spins, $S _ { 1 2 3 }$ , as a conserved quantum number. Inhomogeneous magnetic fields, which are strong in GaAs due to hyperfine interactions (see Sec. VI.B) prevent more than a few operations before leakage of the encoded qubit. A promising route to mitigate hyperfine efects is to implement EO systems in isotopically purified Si. Eng et al., 2015, Fig. 22, first demonstrated the longest composite single-qubit sequence (the 4-pulse π rotation about the yˆ axis) in a Si/SiGe QW structure with <sup>29</sup>Si content reduced to 800 ppm. Calibrated operation of all composite gates for the 24 Cliford operations was later shown by Andrews et al., 2019 and will be further discussed in Sec. V.D.5.

## 3. Resonant-exchange single-qubit gates

EO control in GaAs is more practical when multiple exchange interactions are constantly active, such as in the RX mode of operation (see Medford et al., 2013b and Taylor et al., 2013 and Sec. II.D). Such a qubit results from tuning a TQD to a regime where $J _ { 1 2 } ( t )$ and $J _ { 2 3 } ( t )$ are simultaneously active [see Fig. 22]. RX application is directly analogous to the rotating-frame Hamiltonian for single-spins (Appendix A), enabling the use of familiar rotating-frame RF sequences for decoupling and dynamic compensation. As such, multipulse dynamical decoupling is a viable technique to mitigate hyperfine ef fects (Malinowski et al., 2017b).

In Si/SiGe, the valley degree of freedom has enabled a hybrid between RX and EO only qubits. As discussed in Sec. II.E, when two of the three electrons occupy a common dot whose valley splitting is within reach of microwave control, the resulting qubit has the same spinencoding as an EO qubit, but the singlet and triplet states of the doubly-occupied QDs are perpetually split in energy by the valley splitting, analogous to the always-on exchange of the RX qubit. A combination of microwave control, as in the RX qubit, and pulsed exchange, as in the EO qubit, similarly allow biasing to low charge-noise regions and complete qubit control, with demonstrations in isotopically natural Si showing fidelities in the mid 90% range (Kim et al., 2014; Koh et al., 2012; Shi et al., 2012, 2014).

## 4. Two-qubit gates

There are three strategies for EO two-qubit gates. One is to exploit the singlet-triplet character of the EO encoding and use capacitive charge-coupling in the high detuning regime, as discussed in Sec. V.A.3. This would be possible both for EO and RX qubits, admit a wide variety of two-qubit gating modalities (Pal et al., 2014, 2015), and be able to exploit long-distance transmission line couplers (Srinivasa et al., 2016). Doherty and Wardrop, 2013 proposed a second strategy for the RX qubit modality, in which large exchange values are maintained within each TQD qubit, and a smaller exchange is activated to couple the two EO qubits. The lowest order perturbative efect of the small inter-qubit exchange generates an entangling gate, with leakage efects occurring at higher order in the ratio of the inter- to intra-qubit exchange. Both of these coupling mechanisms are susceptible to charge noise.

The third method is to use true EO sequences between spins, in which charge-noise sensitivity during the twoqubit gate is no worse than that between spins during single-qubit operations. Schemes using a combination of single-pair and multi-pair exchange for the four-spin qubit were shown by Bacon et $a l .$ , 2000, and pairwise entangling exchange sequences for the three-spin qubit were proposed by DiVincenzo et $a l .$ , 2000 in the same year, although this latter sequence presents another subtle dificulty. The decoherence-free subsystem of a TQD is insensitive at the single-qubit level to its total spin projection $m = m _ { 1 } + m _ { 2 } + m _ { 3 }$ , which may take values ±1/2 in the $S _ { 1 2 3 } = 1 / 2$ encoded subspace. This total spin projection is referred to as the “gauge spin” and may be left unpolarized in single-qubit experiments. However, when two such qubits are combined, the two gauge spins may combine into a singlet or triplet states, and the action of intra-qubit exchange will behave diferently in these two distinct subsystems. The sequential gate from Di-Vincenzo et al., 2000 requires the gauge-spins to be in a triplet state, which would most likely be achieved via spin polarization. Such polarization is generally not available in an EO system.

Fortunately, Fong and Wandzura, 2011 derived a sequential gauge-independent CNOT sequence. It has the same entangling action on the two-qubit encoded subsystem regardless of whether gauge spins are in singlet or triplet subspaces. Such gauge invariance also means they function equivalently on four-spin EO qubits as three-spin EO qubits. This sequence has a core gaugeinvariant structure consisting of 12 π/2-pulses pairwise connecting five of the six spins spins (i.e. spin SWAP gates), some number of π-pulses to SWAP spins into place to achieve a particular connectivity of spins (Setiawan et al., 2014), and some number of single-qubit pulses to convert to a desired operation. The CNOT gate implemented in a linear device architecture then summed to 22 pulses (Fong and Wandzura, 2011). It was shown by Zeuch and Bonesteel, 2016 that the core entangling part of this gate may be decomposed into three uses of a primitive 5-spin sequence which swaps two spins depending on the encoded state of a single EO qubit; this decomposition and other constructions may lead to other two-qubit gate constructions beyond the Fong-Wandzura sequence family (Zeuch and Bonesteel, 2020). Other constructions based on decoupling concepts have also been proposed (van Meter and Knill, 2019). Given the perexchange error observed in Andrews et al., 2019, a Fong-Wandzura CNOT sequence may have reasonable fidelity in existing device configurations, but it requires 6 dots with 5 well-calibrated exchange axes and suficient valley splitting across the device. New gate designs and Si/SiGe heterostructures with larger valley splittings may soon enable such a demonstration.

## 5. Limits of fidelity - randomized benchmarking

Andrews et al., 2019 performed RB using a TQD in an isotopically enhanced Si/SiGe QW device using overlapping aluminum gates. The RB procedure was modified by randomly choosing whether a sequence of Clifords composed to identity or $\sigma ^ { x }$ . Recalling that a measurement of a triplet state may correspond either to encoded |1i, which responds to exchange, or to a $S _ { 1 2 3 } = 3 / 2$ leakage state, which does not, the presence of leakage could be deduced on average over many random sequences. An error-rate per Cliford of 0.35% was observed, with half of the error resulting from leakage. Ha et al., 2021 performed the same experiment using the SLEDGE architecture for similar Si/SiGe QW, and observed an error-rate per Cliford of 0.12%.

The fidelity in this experiment depended on the details of the quantum control sequence. With substantial “idle time” added between calibrated exchange pulses, error was limited by hyperfine dephasing which occurs due to leakage between degenerate $S _ { 1 2 3 } = 1 / 2 , 3 / 2$ states. If pulses are applied more quickly, the leakage per Cliford improves by simply outracing the leakage process, but another error limit is then reached due to the dynamic miscalibration of exchange pulses. The limitations of such an error is a key outcome of RB, as it may be hard to observe in state or process tomography experiments, and it is “contextual” (i.e. it depends on the control sequence employed). Improved pulse delivery to the qubit as well as increased isotopic enhancement should further improve EO qubit operation fidelities. The results however are very promising for exchange-based gates in silicon QDs in isotopically enhanced materials, as the noncontextual, non-hyperfine error from exchange pulses themselves (e.g. due to charge noise, see Sec. VI), which occur an average of 2.7 times per Cliford gate, is substantially less than $1 0 ^ { - 3 }$ in this experiment.

## E. Alternative material platforms

Spin qubits have been realized predominantly using electrons in GaAs and Si, with recent encouraging results from holes in Ge as well. In this subsection we review results from several other materials systems, shown in Fig. 23, that have been investigated as suitable platforms for spin-based quantum information processing.

## 1. Carbon nanotubes

Carbon (C) is another group IV element that naturally occurs mostly in the form of a I = 0 isotope (the natural abundance of $^ { 1 2 } \mathrm { C }$ is 99%). One can therefore expect long electron spin decoherence times since the deleterious efects of the hyperfine coupling will be weak. The fact that the valence electrons of C are in the atomic p-shell further reduces the hyperfine coupling (see Sec. VI).

Carbon nanotubes (CNTs) are a one-dimensional form of carbon with an electronic bandstructure that can be either metallic or semiconducting (Laird et al., 2015). The presence of a band gap in semiconducting CNTs allows for the formation of QDs using electrostatic gating (Sapmaz et al., 2006). Kuemmeth et al., 2008 measured the spin and valley degeneracies of single electrons in a QD formed in a clean CNT, as well as their coupling via spin-orbit interaction due to the CNT curvature. PSB in the transport through a CNT DQD (P´alyi and Burkard,

![[assets/figures/references/burkard-2023/f7bcc59abe08ce850a138cf606c2c1a48675575abf242af09ded2e9a6616f810.jpg]]  
FIG. 23 a) Nanowire spin-orbit qubit, from (Nadj-Perge et $a l .$ , 2010). b) Spin-orbit qubit in SiMOS DQD, from (Jock et $a l .$ , 2018). c) Carbon nanotube qubit, from (Cubaynes et al., 2019). d) Four-qubit quantum processor based on holes in Ge/SiGe (Hendrickx et al., 2021).

2010) enables measurement of the spin relaxation and dephasing times in $^ { 1 3 } \mathrm { C } \mathrm { . }$ -enriched (Churchill et al., 2009) and natural (Pei et al., 2012) CNTs. Pei et $a l .$ , 2012 and Laird et al., 2013 realized mixed spin-valley qubits in bent single-walled CNT devices, and Cubaynes et al., 2019 observed the coupling of an electron spin localized in a CNT QD to a microwave cavity.

## 2. Spin-orbit qubits

As described in Sec. III.D and Sec. V.A.2, electrical control of single spins can be achieved using the intrin sic SOC of a material and electrical driving. The theory for EDSR in a spin-orbit field predicts an efective ac magnetic field strength that is inversely proportional to $\lambda _ { \mathrm { S O } }$ , with a Rabi frequency that is proportional to the electronic g-factor (Golovach et al., 2006). While $\lambda _ { \mathrm { S O } } ~ \sim ~ 8$ µm in GaAs, heavier III/V compound semiconductors have a much shorter λ . For example $\lambda _ { \mathrm { S O } }$ = 100 nm for InSb and 400 nm for InAs. In addition, the bulk electronic g-factor is 15 in InAs and 50 in InSb. These factors, combined with the small efective mass, resulted in the development of spin-orbit qubits beyond early demonstrations in GaAs (Nowack et al., 2007).

Nadj-Perge et al., 2010 implemented EDSR in a bottom-gated InAs nanowire DQD. Due to the strong spin-orbit coupling present in InAs, the g-factors for the left and right dots were diferent, allowing for selective control of each spin. Fast Rabi frequencies were achieved $f _ { R } = 5 8 \mathrm { M H z }$ , but as in GaAs, the Rabi oscillations were strongly damped due to hyperfine coupling. Ramsey decay times $T _ { 2 } ^ { * } = 8$ ns and spin-echo coherence times $T _ { 2 }$ $= 5 0$ ns were extracted. Possible reasons for the short $T _ { 2 }$ relative to that observed in $\mathrm { G a A s }$ include the large, quadrupolar-split nuclear spin $I = 9 / 2$ of indium and charge noise.

These experiments have been extended to diferent operating regimes and materials platforms. Schroer et $a l . .$ 2011 used EDSR to spectroscopically probe the strong anisotropy of the electronic $g -$ factor in a InAs nanowire DQD. In a related experiment, Nadj-Perge et $a l .$ , 2012 performed spectroscopy of InSb spin qubits in the twoelectron regime with highly anisotropic g-factors. Spectroscopy of the energy levels as a function of magnetic field allowed for a direct measurement of the spin-orbit gap $\Delta _ { \mathrm { S O } }$ , which was largest when the external magnetic field was parallel to the nanowire axis. Subsequently, it was shown that the EDSR driving mechanism strongly depends on the DQD energy level detuning (Stehlik et $a l .$ 2014). While early experiments performed EDSR at high level detuning in efectively a single QD regime, EDSR when driven around $\epsilon = 0$ exhibited a standard single photon resonance condition $h f = g \mu _ { B } B$ as well as multiple harmonics $n h f = g \mu _ { B } B$ , with $n$ as high as 8. An even-odd dependence in the strength of the PSB leakage current was also observed. These observations were attributed to Landau-Zener physics, where near $\epsilon = 0$ the DQD is repeatedly driven through avoided crossings in the energy level diagram (Nadj-Perge et al., 2010; Petersson et al., 2012; Schroer et al., 2012, 2011). Similarly, Jock et $a l .$ , 2018, 2021 observed large spin-orbit and spin-valley couplings in SiMOS devices, leading to demonstrations of DQD spin-orbit singlet-triplet qubits. The stronger spin-orbit interaction of valence band states has also led to further experiments in Si and Ge hole qubits, described below.

## 3. Holes in Si and Ge/GeSi

Hole spin qubits have shown rapid progress in recent years, particularly in Si and Ge (Scappucci et al., 2021). Holes have several attractive features: stronger SOI (and hence faster EDSR) as well as weaker nuclear hyperfine coupling, low in-plane efective mass, and the absence of degenerate valleys. However, the degenerate p-like states and SOI lead to strong band mixing. Strain and confinement further complicate the band mixing; the HH versus LH nature of the ground state difers for planar and nanowire devices, and strong structure- and tuneup dependence of key parameters is expected.

Si holes can be confined in MOS QDs due to the large valence band ofset (Ando et al., 1982) and it is even possible to make ambipolar devices capable of confining electrons or holes (Betz et al., 2014). Early demonstrations of PSB in planar (Li et al., 2015) and SOI nanowire (Bohuslavskyi et al., 2016) hole devices, followed by a qubit demonstration in the latter platform (Maurand et al., 2016), have occurred in the few-hole regime. The relatively short $T _ { 2 } ^ { * } = 6 0$ ns implies that decoherence is not hyperfine-limited at present. Recent work showing shell filling (Liles et al., 2018) and single-hole g-tensor measurements in a planar MOS dot (Liles et al., 2020) are promising for single-hole coherent operation. In general, the observation of highly voltage-sensitive anisotropic gtensors in MOS QDs (Crippa et al., 2018; Liles et al., 2020) and Ge nanowires (Brauns et al., 2016) demonstrate the microscopic complexity of these devices. For few-hole Si nanowire MOSFET devices, it is predicted that g-tensor resonance can yield Rabi frequencies exceeding 600 MHz (Voisin et al., 2016). 400 MHz Rabi frequencies have been achieved with hole spin qubits fabricated in Ge/Si core/shell nanowires, with wide tunabil ity of the SOC strength, Rabi frequency, and electronic g-factor (Froning et al., 2021).

Holes in Ge have demonstrated promise on several fronts. Higginbotham et al., 2014b showed extrinsic noise-dominated measurements of $T _ { 2 } ^ { * } = 1 8 0$ ns in a $\mathrm { G e / S i }$ core/shell nanowire and Watzinger et al., 2018 demonstrated single-qubit control in the few-hole regime of Ge hut nanowire DQDs on Si. Recently, more emphasis has fallen on planar $\mathrm { G e / G e S i }$ QWs; the compressive strain in such wells enforces a HH ground subband, with a HH-LH splitting of 10–50 meV and the in-plane efective mass is predicted to be about 0.06m<sub>0</sub> (Sch¨afler, 1997; Terrazos et al., 2021). The low disorder of this system and its ability to leverage design concepts and infrastructure from GaAs and Si/SiGe devices has enabled rapid experimental progress in the last few years.

Hendrickx et al., 2020a demonstrated single- and twoqubit operation in the multi-hole regime with a singlequbit fidelity of 99.3%. These results were quickly followed by reports of a single-hole qubit (Hendrickx et al., 2020b), singlet-triplet qubit (Jirovec et al., 2021), and hole manipulation in a 2x2 array (Hendrickx et al., 2021; Lawrie et al., 2020; van Riggelen et al., 2021). Dephasing times out to 1 µs and $T _ { 1 } > 3 2$ ms have been reported. As the theoretical hyperfine limits for Ge holes are not yet quantified, more work is needed to understand whether nuclear spins or transduced charge noise is the dominant dephasing mechanism.

## F. Discussion

Figure 24 plots single- and two-qubit RB data drawn from many, but not all, recent publications on a common axis. Return probability P (that is, probability of returning to the n-qubit initialized state) is shown; some works report the diference y between a measured return and a measured spin flip, which is converted here to return probability with the unbiased model $P \approx 1 / 2 ^ { n } + ( 1 - 1 / 2 ^ { n } ) y$ . The x-axis counts the number of Cliford gates prior to a single (uncounted) recovery Cliford. The fidelities indicated are per-Cliford-gate, which may include multiple primitive gates depending on the control modality. As can be seen, there is significant variance in the state preparation and measurement (SPAM) fidelity, approximately indicated by the intercept at 0 Clifords, but recent spin-qubit fidelities, indicated by the decay rates of the exponential curves, are rather similar. As randomized benchmarking requires a substantial amount of elements of a qubit apparatus to behave correctly, a key conclusion here is that all spin qubit technologies we have discussed have passed a critical test of showing the practical reality of performing quantum gates. Fidelities still have room for improvement, but values greater than 99% for basic gates are now firmly established across the semiconductor qubit community, and continue to advance.

![[assets/figures/references/burkard-2023/a3a1295f9bf89921f12bf51852af352d91ddabcee937efeb1655a06ed3ef354a.jpg]]  
FIG. 24 Fidelity of single qubit (a) and two qubit (b) gates in Si as evaluated by randomized benchmarking (RB). In each experiment, an initial qubit state is prepared, random sequences of N random Cliford gates $C _ { j }$ are applied, a single Cliford recovery $C _ { R }$ is applied to each random sequence which would, in absence of error, return the qubit or qubits to their initial state, and a read-out is performed. The initialstate probability is plotted as a function of N. Experimental data shown use diferent initialization, readout, and Cliford implementations, but in all cases a least-squares fit to an exponential decay with N provides a fidelity benchmark. A measure of state preparation and measurement (SPAM) fidelity is indicated by where each decay starts and saturates. Ideally each nQ RB curve would saturate to return probability $1 / 2 ^ { n }$ as $N  \infty$ , but leakage and SPAM errors generally lead to other saturation values. Note that two-qubit Cliford operations generally involve multiple two-qubit entangling, SWAP, and/or single-qubit gates.

## VI. DEPHASING AND DECOHERENCE

In the previous section, we assessed the operation and performancce of each major qubit type. For semiconductor qubits, the fidelity is limited by some dephasing or decoherence process. Consider the first exchange oscillations observed in GaAs and Si/SiGe (reproduced in Fig. 18). The first oscillation in each trace corresponds to a π-pulse, which may be considered a SWAP gate for an LD qubit, or a Z-gate for a $\mathrm { S T _ { 0 } }$ or EO qubit. Critically, the visibility of this fringe is imperfect, and its reduction is a rough measure of the infidelity of the associated gate. The loss of visibility is evident both as a function of time and as exchange is reduced. Why does the fringe visibility decay at the rate it decays? What noise process is responsible for making these qubits imperfect, and if we identify that noise process, how may it be eliminated to improve fidelity? In this section we review the decoherence processes that are most relevant to semiconductor spin qubits.

The processes leading to decoherence may be classified into a few important categories. In a relaxation process, nondegenerate spin sublevels exchange magnetic energy with the environment (via phonons, photons, etc.). In pure dephasing, random energy-conserving elastic processes dynamically alter the phase of the qubit. For inhomogeneous dephasing, a single qubit’s phase remains steady for long periods of time but is poorly synchronized with either a clock, another qubit, or with itself a significant period of time later. In the context of the Bloch equations, which describe NMR, the timescales corresponding to these efects are $T _ { 1 }$ (relaxation), $T _ { 2 }$ (decoherence), and $T _ { 2 } ^ { * }$ (inhomogeneous dephasing) (Abragam, 1961; Slichter, 2010; Vandersypen and Chuang, 2005). “Rotating frame” analogs of these timescales, which are relevant during coherent driving, include $T _ { 2 , R }$ (the timescale for the decay of Rabi oscillations) and $T _ { 1 \rho }$ (the timescale for decay when driving spins along a parallel rotating-frame axis).

While the Bloch equations successfully describe the dynamics observed in many ensemble NMR and ESR experiments, the phenomenological exponential decay they describe is seldom observed for semiconductor spin qubits (e.g. the time decay in Fig. 18 is Gaussian). An improved language for describing dephasing and decoherence phenomena in terms of the power spectral density (PSD) of the responsible environmental noise mechanism and the filter on that noise provided by the experiment which probes that decoherence mechanism, is the filter function formalism (Ithier et al., 2005). We briefly review this formalism in VI.A, and then proceed to describe some of the most prominent physical noise sources that cause dephasing and decoherence in spin qubits (see Fig. 25). Many, more thorough reviews of the formalism are available; for example, see Chirolli and Burkard, 2008.

## A. Filter function formalism

## 1. T via noise correlation function

A basic model for noise impacting spin qubits is captured by a spin’s coupling to a noisy magnetic field, via Hamiltonian $H _ { \mathrm { n o i s e } } = - \hbar { \bf b } ( t ) \cdot { \bf S }$ , where b is a vector angular frequency describing a stationary, zero-mean noise process. For example, if the noise is a literal fluctuating magnetic field $\delta \mathbf { B } ( t ) , \mathbf { b } ( t ) = g \mu _ { B } \delta \mathbf { B } ( t ) / \hbar$ and if b is parallel to a large applied magnetic field, $b ( t ) = | \mathbf { b } ( t ) |$ is the fluctuation of the spin’s Larmor frequency.

Starting from this Hamiltonian, if we presume an applied magnetic field along the z axis providing spin Zeeman splitting ¯hω<sub>0</sub>, and define $b ^ { \pm } ( t ) = b ^ { x } ( t ) \pm i b ^ { y } ( t )$ , then Bloch-Redfield-Wangsness (BRW) theory (Abragam, 1961) approximates that $T _ { 1 }$ at temperatures $T ~ \ll$ $\hbar \omega _ { L } / k _ { B }$ is given by

$$
\begin{array}{r l} \frac {1}{T _ {1}} & = \frac {1}{4} \int_ {- \infty} ^ {\infty} \left(\langle b ^ {-} (0) b ^ {+} (t) \rangle + \langle b ^ {+} (0) b ^ {-} (t) \rangle\right) e ^ {- i \omega_ {L} t} d t \\ & = \frac {1}{2} S _ {b} ^ {\perp} (\omega_ {L}). \end{array} \tag {27}
$$

Exponential relaxation at rate $1 / T _ { 1 }$ is due to the density of noise in transverse fluctuating magnetic fields at the Larmor frequency $\omega _ { L }$ , an intuitive result given that noise at $\omega _ { L }$ is required to overcome the Zeeman splitting $E _ { Z } = \hbar \omega _ { L }$ between opposite spin states.

In the context of BRW theory, energy-conserving dephasing processes are described as exponential decay with rate $1 / T _ { 2 } ;$

$$
\frac {1}{T _ {2}} = \frac {1}{2 T _ {1}} + \int_ {- \infty} ^ {\infty} \langle b ^ {z} (0) b ^ {z} (t) \rangle d t.\tag{28}
$$

Here, the dephasing rate depends on the spectral density of longitudinal noise at zero frequency $S _ { b } ^ { z z } ( 0 )$ . This expression suggests that only true dc noise contributes to dephasing. As discussed in the next section, however, noise at low frequencies also contributes to dephasing. The filter-function formalism provides a prescription for understanding how such noise contributes to dephasing.

## 2. Filter function derivation

The concept of a filter function has been formalized in a quantum information theory context for qubits by Ithier et al., 2005, Uhrig, 2007, Cywinski et al., 2008, and Green et al., 2012. Notable extensions and higher-order corrections, especially for the slow noise processes typical of spin qubits, are detailed in Barnes et al., 2016. The filter function derivation utilizes an interaction picture, in which S acquires time dependence due to the action of the control of some experiment,

![[assets/figures/references/burkard-2023/11352b21629aae5039abcde215421d7591d45928a85e96c7bb0115d50cb43525.jpg]]  
FIG. 25 Decoherence and relaxation mechanisms for spin qubits in semiconductor QDs or donors. The electronic spin state is indicated in blue, the electronic confinement potential (wavefunction) as a function of position in black (pink). Energy levels are shown as horizontal black bars. $\mathrm { ( a ) - ( c ) }$ Decoherence and relaxation mechanisms for a LD qubit, (d)–(f) for singlet-triplet qubits in DQDs. (a) Spin relaxation through emission (absorption) of energy quanta (blue, e.g. phonons) to or from the environment. (b) Charge noise (blue) leading to a fluctuating confinement potential and electronic wavefunction. When SOI is present, charge noise leads to spin dephasing. (c) Electron spin dephasing due to the hyperfine coupling to nuclear spins (blue). (d) Singlet-triplet spin relaxation. (e) Charge noise afecting detuning . (f) Charge noise afecting interdot tunneling $t _ { c } .$

$$
\tilde {\mathbf {S}} (t) = U _ {\mathrm{control}} ^ {\dagger} (t) \mathbf {S} U _ {\mathrm{control}} (t).\tag{29}
$$

As a result of $\tilde { H } _ { \mathrm { n o i s e } } ( t ) = \mathbf { b } ( t ) \cdot \tilde { \mathbf { S } } ^ { z } ( t )$ , a spin or qubit evolves according to a quantum process during a total time $T \ \rho ( T ) = \Lambda [ \rho ( 0 ) ]$ . If Λ is decomposed into a Choi matrix $\begin{array} { r } { \Lambda [ \rho ] = \sum _ { j k } \lambda ^ { j k } \sigma ^ { j } \rho \sigma ^ { k } } \end{array}$ , for Pauli matrices $\sigma ^ { j }$ and including the $\sigma ^ { 0 }$ as the identity matrix, then the infidelity of this noise process is taken as $1 - \lambda ^ { 0 0 }$ which is cast into a decay function $\exp [ - \chi ( T ) ]$ ]. Using cumulant expansion considerations, $\chi ( T )$ is expanded to second order in the noise field ${ \bf b } ( t )$ and filter functions $F ^ { \alpha \beta } ( \omega T )$ depend on $U _ { \mathrm { c o n t r o l } }$ (Cywinski et al., 2008) and are defined to satisfy

$$
\chi (T) = \int_ {0} ^ {\infty} \frac {d \omega}{2 \pi \omega^ {2}} \sum_ {\alpha , \beta = x, y, z} F ^ {\alpha \beta} (\omega T) S _ {b} ^ {\alpha \beta} (\omega),\tag{30}
$$

where the single-sided noise spectral density corresponds to the noise-correlation function via

$$
S _ {b} ^ {\alpha \beta} (\omega) = 2 \int_ {- \infty} ^ {\infty} \langle b ^ {\alpha} (0) b ^ {\beta} (t) \rangle \cos (\omega t) d t, \qquad \omega > 0.\tag{31}
$$

In the most commonly encountered situation where ω<sub>0</sub> $\gg \ | { \bf b } |$ , one appeals to a rotating reference frame in which the perpendicular terms $b ^ { \pm } ( t )$ oscillate at frequency ω<sub>0</sub>, and therefore integrate to noise contributions of order $| \mathbf { b } / \omega _ { 0 } | ^ { 2 }$ , which we neglect. For dominant noise terms, which we discuss later in this section, this secular approximation is valid for applied magnetic fields above a few mT, and in some cases remains valid even in fields as low as the Earth’s magnetic field. However, transverse noise terms should not be forgotten, as they do play roles in multi-pulse experiments in regimes in which pulses occur at rates comparable to ω<sub>0</sub>, e.g., in fast-pulsing and low-magnetic field cases. It’s often assumed that the control pulses described in $U _ { \mathrm { c o n t r o l } }$ are instantaneous π-pulses about an axis orthogonal to the z-axis, from which it follows that $\tilde { S } ^ { z } ( t )$ may be written as $\tilde { S } ^ { z } ( t ) = r ( t ) S ^ { z }$ , where $r ( t )$ takes only the values ±1, switching between the two for each π pulse. Under these simplifications, only z components of b and only $S _ { b } ^ { z z }$ are important, and we may therefore drop component superscripts. Moreover, it may easily be derived that the filter function $F ( \omega ) = F ^ { z z } ( \omega )$ is simply

$$
F (\omega T) = \left| \frac {\omega}{2} \int_ {0} ^ {T} r (t) e ^ {i \omega t} d t \right| ^ {2}.\tag{32}
$$

## 3. Dephasing time $T _ { 2 } ^ { * }$

With the filter function derived, we are now in a position to calculate dephasing (decoherence) rates $T _ { 2 } ^ { * } ~ ( T _ { 2 } )$ $T _ { 2 } ^ { * }$ is the rate of decay during a “free evolution” experiment, analogous to a free-induction decay experiment in magnetic resonance. For single-spin qubits, in which measurements of $S ^ { z }$ are performed (see Sec. II.A), the relevant experiment is a time-ensemble of Ramsey experiments, in which the spin is prepared along an axis orthogonal to a large applied field using a single RF pulse, precession happens for a swept time duration $T _ { : }$ , and the spin then undergoes a second RF pulse of known phase, mapping the xy-plane precession onto the ensemble-measured observable $\langle S ^ { z } \rangle$ . In either case, $r ( t )$ is constant for the duration $T ,$ and $F ( \omega )$ is proportional to sin $\boldsymbol { \mathrm { l } } ^ { 2 } ( \omega T / 2 )$ . For very slow noise phenomena $( \mathrm { i . e . }$ , when $S _ { b } ( \omega )$ is strongly peaked near $\omega = 0 ,$ , as it is for hyperfine noise to be discussed in Sec. VI.B), the shape of the decay curve $\exp [ - \chi ( t ) ]$ then predicts decay of oscillations going as $\exp [ - ( t / T _ { 2 } ^ { * } ) ^ { 2 } ]$ , which defines $T _ { 2 } ^ { * }$ . More generally, the structure of the low-frequency noise may lead to a power law decay, $\exp [ - ( t / T _ { 2 } ^ { * } ) ^ { \alpha } ]$ , including $\alpha \ = \ 1$ for white noise; either way, $T _ { 2 } ^ { * }$ is defined via $\chi ( T _ { 2 } ^ { * } ) = 1$

The interpretation of $T _ { 2 } ^ { * }$ defined above requires some care, as spin qubit systems often violate the assumption of ergodicity (i.e. that a series of Ramsey measurements made sequentially in time accurately reflects an ensemble average.) For example, for $S _ { b } ( f ) \propto 1 / f ^ { \alpha }$ , and without a low-frequency cutof, $\chi ( T )$ diverges. The usual resolution of this divergence is to introduce a low-frequency cut-of determined by the total amount of time used to average an experiment. Formal treatments of such low-frequency cut-ofs can be found in Burkard, 2009, Barnes et $a l . .$ 2016, and Madzik et $a l .$ , 2020. Eng et $a l .$ , 2015 and Jock et al., 2018 in particular presented measured $T _ { 2 } ^ { * }$ as a function of averaging time in $\mathrm { S i / S i G e }$ and SiMOS dots, and in both the logarithmic dependence on averaging time expected for $1 / f ^ { \alpha }$ noise is observed. For a spin qubit in GaAs, the dephasing time was measured to be dependent on the acquisition time (Delbecq et al., 2016). In short, a measurement of $T _ { 2 } ^ { * }$ for a qubit does not by itself indicate an intrinsic property of the qubit, as it depends on experimental averaging details.

The relationship between $T _ { 2 } ^ { * }$ and the overall performance of a qubit depends critically on control. Since $T _ { 2 } ^ { * }$ results from very slow drifts in the qubit frequency, it is well known that it can be compensated for via dynamical decoupling or noise compensation sequences. For GaAs spin qubits, $T _ { 2 } ^ { * } \sim 1 0$ ns (see Sec. VI.B), meaning that noise compensation is critical for scaling into useful processors. For silicon, $T _ { 2 } ^ { * }$ is generally much longer.

## 4. Decoherence time $T _ { 2 }$ and rotating frame timescales

If compensation is employed, its eficacy will depend on how quickly $S _ { b } ( \omega )$ reduces with ω relative to the available speed of control. This eficacy is somewhat captured by the parameter $T _ { 2 }$ , often taken as the $1 / e$ point $( \chi ( T _ { 2 } ) =$ 1) for decay in the Hahn spin-echo experiment, in which the Ramsey experiment described above is interrupted halfway by a single π-pulse applied orthogonal to the z-axis. Then $r ( t )$ has one switch from +1 to −1, and $F ( \omega ) = 4 \sin ^ { 4 } ( \omega T / 4 )$ . Since $F ( \omega ) \propto \omega ^ { 4 }$ as $\omega  0$ , the Hahn echo cancels noise at $\omega = 0$ and passes noise at higher frequency. Once again, $T _ { 2 }$ is defined relative to the experiment used to measure it (Cywinski et al., 2008).

Coherent driving of a spin will also extend pulse sequence times, as Rabi flopping at frequency $f _ { \mathrm { R a b i } }$ acts as continuous dynamical decoupling. Two types of noise may be relevant. First, there may be noise on the control field itself, e.g. $f _ { \mathrm { R a b i } } = f _ { \mathrm { R a b i } } ( t )$ due to charge noise in EDSR, and second, noise from spurious magnetic fields such as Overhauser fields. If the phase of the microwave signal causes rotations about an axis on the Bloch sphere equator and if the spin is initialized along $\hat { z } ,$ the decay time of Rabi oscillation is $T _ { 2 , R } ,$ which is diferent in general from the $T _ { 2 } ^ { * }$ of a freely evolving spin. If the spin is initialized along an axis on the Bloch sphere equator and then driven along that same axis, the associated decay timescale is $T _ { 1 \rho } .$ If $f _ { \mathrm { R a b i } } ( t ) \gg \int S _ { b } ( \omega ) d \omega$ , the decay exponent $\chi ( T )$ for either experiment is likely to be limited by noise on $f _ { \mathrm { R a b i } } ( t )$ , with a filter function comparable to that for $T _ { 1 }$ above and relating to $f _ { \mathrm { R a b i } } ( t ) \mathrm { \mathrm { { s } } }$ phase stability. If $f _ { \mathrm { R a b i } }$ is highly stable and only a transverse magnetic noise $b ( t )$ is present, this experiment will correspond to shifting the filter function for noise on b by $- f _ { \mathrm { R a b i } }$ , which leads to drastically slower decay for the same amount of noise $S _ { b } ( \omega )$

## 5. Filters for multi-spin qubits

Natural generalizations of the filter function formal ism may be made for qubits composed of several spins $( \mathrm { S T } _ { 0 } , \mathrm { E O } , \mathrm { e t c . } )$ . In this case generalized spin-operators and magnetic fields are defined (see Table II), which may be related back to physical spin operators usually with suitable sums over QDs (Kerckhof et al., 2021). A key diference relative to LD qubits, however, arises from the fact that both $\mathrm { S T _ { 0 } }$ and EO qubits are degenerate when idle. This means the $T _ { 2 } ^ { * }$ and $T _ { 2 }$ experiments track dephasing for two degenerate levels (a two-spin singlet state is prepared, allowed to mix with triplet due to noise, and compared again to a singlet). As observed experimentally by (Johnson et $a l .$ , 2005b; Koppens et $a l .$ , 2005), rapid hyperfine mixing can occur at very low magnetic fields, where any direction of b is important in each dot, leading to more complex filter functions (Kerckhof et $a l .$ 2021). In these qubits, the analog of a Rabi experiment involves preparing two spins in a coherent superposition of degenerate singlet and triplet states, and then driving oscillations between them with a DC voltage bias that induces exchange. Oscillations occur at frequency $^ { J , }$ and dephasing occurs due to noise on $J ( t )$ , with decay envelope given by the filter function equations above, replacing $S _ { b } ( \omega )$ with $S _ { J } ( \omega )$ . A constant pulse still has filter function proportional to $\sin ^ { 2 } ( \omega T / T )$ , and modifications employing π-pulses or rotating-frame-type experiments are also possible (Dial et al., 2013; Eng et al., 2015), enabling characterization of the charge noise $S _ { J } ( \omega )$

## 6. Non-Markovian and contextual noise

The filter function formalism presented assumes an independent, stationary noise source. However, dephasing, decoherence, and relaxation timescales have been observed to depend on the very control sequences used to measure them, due to such phenomena as RF heating, DNP (Sec. V.C), and pulse-driven nuclear spin dynamics (Kerckhof et al., 2021; Madzik et al., 2020); such measurement-induced back-action is not easily accounted for in filter function theory. Just as important, dephasing of qubits is made relative to a clock or a timed control sequence. If that clock or control sequence dephases, it is equivalent to the qubit dephasing from a quantum control standpoint. Unfortunately, measurements of long dephasing and decoherence times are a necessary but not suficient criterion for high fidelity qubit control.

## B. Spin dephasing due to hyperfine interactions

Burkard et al., 1999a and Coish and Loss, 2004 and Coish and Loss, 2005 predicted that dephasing due to the hyperfine interaction between an electron spin and the spins of many lattice nuclei in the host crystal would be a significant challenge to spin qubits. Indeed, early experiments in GaAs DQDs extracted $T _ { 2 } ^ { * } \sim 1 0$ ns and $T _ { 2 } \sim 1 ~ \mu \mathrm { s }$ (Petta et al., 2005). Fortunately, hyperfine induced spin dephasing can be mitigated by a variety of methods, including isotopic purification, nuclear polarization, and dynamic decoupling. In this section, we overview the physics of the hyperfine interaction in QDs and donors, including nuclear dynamics, followed by a summary of nuclear-limited measurements of $T _ { 2 } ^ { * }$ and $T _ { 2 }$ Despite significant research in understanding hyperfine dynamics (Chekhovich et al., 2013), questions remain about the ultimate limits of hyperfine coherence and the fundamental timescales for nuclear spin dynamics.

The dominant efect of nuclear spins is static dephasing mediated by the hyperfine interaction [Eq. (12)], impacting $T _ { 2 } ^ { * }$ . In this case, $T _ { 2 , \infty } ^ { * }$ depends on $\sigma _ { b } ^ { 2 }$ , the variance of the magnetic field experienced by electron spins due to full randomization of the nuclear magnetization. The variance of the efective angular-frequency magnetic field $\mathbf { b } = A _ { k } \mathbf { I } _ { k }$ for an ensemble of independent nuclei, all with spin $I ,$ is summed:

$$
\sigma_ {b} ^ {2} = \frac {I (I + 1)}{3} \sum_ {k} A _ {k} ^ {2}.\tag{33}
$$

The factor of 3 in the denominator is relevant at high field, where the $I _ { k } ^ { + } S ^ { - }$ flip-flop terms average away at a timescale negligibly short relative to dephasing experiments. At zero field, all three nuclear spin directions are of relevance and $\sigma _ { b } ^ { 2 }$ is three times higher.

Nuclear fluctuations are very slow in both GaAs and Si (of order 1 ms) relative to the $\mu \mathrm { s }$ timescales of qubit coherence measurements (Ladd et $a l .$ , 2005; Madzik et al., 2020; Reilly et al., 2010). As such, $S _ { b } ( \omega )$ is strongly peaked at $\omega = 0$ and the Ramsey decay is Gaussian. For a LD qubit, the envelope decay for an experiment lasting time $T$ , following Eq. (30), goes as $\mathrm { e x p } \big \{ - \sigma _ { b } ^ { 2 } T ^ { 2 } / 2 \big \}$ and $T _ { 2 , \infty } ^ { * } = \sqrt { 2 } / \sigma _ { b }$ . For a $\mathrm { S T _ { 0 } }$ qubit, the assumed independent, identical distributions of static noisy fields from two dots have adding variances, and $\mathrm { S T _ { 0 } }$ FID (in which a singlet is prepared, allowed to evolve for time $T ,$ , and then measured) decays as $\exp \left\{ - \sigma _ { b } ^ { 2 } T ^ { 2 } \right\}$ , with $T _ { 2 , \infty } ^ { * } = 1 / \sigma _ { b }$

All Ga and As isotopes have nuclear spin $I = 3 / 2$ leading to $T _ { 2 , \infty } ^ { * } \sim 1 0$ ns (Petta et al., 2005). In Si, however, only 4.7% of naturally occurring Si isotopes feature non-zero nuclear spin $( ^ { 2 9 } \mathrm { S i } , I { = } 1 / 2 )$ , and in Ge only 7.8% of naturally occurring isotopes $( ^ { 7 3 } \mathrm { G e } , I { = } 9 / 2 )$ have nonzero spin. The reduced number of spin carrying nuclei in natural Si (no enrichment) leads to a significant improvement in $T _ { 2 , \infty } ^ { * }$ . Further increases are feasible using isotopic enrichment, which was demonstrated as far back as 1958, when a $\mathrm { ^ { 3 1 } P }$ -doped sample with under 1200 ppm $^ { 2 9 } \mathrm { S i }$ was observed to have longer $T _ { 2 } ^ { * }$ than a natural sample using ensemble ESR (Feher et al., 1958; Gordon and Bowers, 1958).

In addition to isotopic content, the overall size of the electronic wavefunction also impacts $\sigma _ { b } ^ { 2 }$ . With the envelope wavefunction overlapping many nuclear sites, $\operatorname { E q . }$ (33) leads to

$$
T _ {2, \infty} ^ {*} \propto \sigma_ {b} ^ {- 1} \propto \sqrt {\frac {N}{p _ {I}}},\tag{34}
$$

where $N$ is the total number of nuclei for which $| \psi ( \mathbf { r } _ { k } ) | ^ { 2 }$ is larger than some threshold and $p _ { I }$ is the probability that a given lattice nucleus has spin. Therefore, in the manynuclei limit, electronic wavefunctions enveloping a larger number of spin-carrying nuclei have a longer dephasing time, due to averaging over more nuclear spins. This occurs because the individual $A _ { k }$ diminish as the electron wavefunction spreads out over more nuclear spins. However, this scaling cannot extend to very small wavefunctions, since $T _ { 2 } ^ { * }$ cannot go to zero. In fact, for small dots with low $p _ { I }$ , the value of $T _ { 2 , \infty } ^ { * }$ varies widely from device to device [the standard deviation of $1 / ( T _ { 2 , \infty } ^ { * } ) ^ { 2 }$ scales as $p _ { I } ( 1 - p _ { I } ) \dot { / } N ^ { 3 } ]$ Whether dephasing occurs quickly or slowly will depend randomly on how often spinful nuclei are located in regions of the electron wavefunction in which $| \psi ( \mathbf { r } _ { k } ) | ^ { 2 }$ is high. In a device such as $\mathrm { a \ ^ { 3 1 } P }$ donor, it is plausible to have only one spinful nucleus, the $\mathrm { ^ { 3 1 } P }$ nucleus itself, which may be coherently controlled and rarely undergoes randomization. Under these circumstances our approximations for the ergodic $T _ { 2 , \infty } ^ { * }$ do not apply (Madzik et al., 2020).

In order to observe a pure dephasing efect on a single qubit due to nuclear spins, the nuclear spins cannot be frozen; they must fluctuate on the timescale of the measurement. Moreover, if nuclear hyperfine efects limit $T _ { 2 } .$ and if we wish to compensate for nuclear dephasing, some notion of how quickly nuclei change their polarization state is required. In a dense, homogeneous crystal of nuclear spins, flip-flops driven by the dipole-dipole interaction happen frequently, causing Brownian spin difusion with a noise spectrum $S _ { b } ( f )$ scaling as $1 / f ^ { 2 }$ (Abragam, 1961). In sparse spin systems and in the presence of field gradients and highly localized dot or donor electrons, the strength of this coupling varies drastically between nuclear spin-pairs, as it depends on the inverse cube of the distance between randomly placed nuclei and any changes in their local magnetic field due to field gradients or the hyperfine field of electron spins. Hence pairs will have varying flip-flop rates, and the noise spectrum $S _ { b } ( f )$ might be expected to be closer more $1 / f ,$ as anticipated from a broad range of two-level fluctuators. Such a spectrum is observed in silicon systems (Eng et al., 2015; Madzik et $a l .$ , 2020). Solving with more rigor the problem of how coupled nuclear spins impact the coherence of a central electron spin, the “central spin problem,” depends on the rich and eficacious use of many-bodyphysics approximations. Theoretical headway on this problem occurred in the spin-qubit context employing coupled-cluster expansion techniques, which were able to theoretically predict Hahn $T _ { 2 }$ values in silicon donor and other systems (Witzel et al., 2010), but still do not capture all relevant efects, especially the very slow dynamics governing $T _ { 2 } ^ { * }$

Experimental measurements of spin coherence have been performed in a variety of systems. In GaAs QDs, $T _ { 2 }$ $\sim 1 ~ \mu \mathrm { s }$ for the $\mathrm { S T _ { 0 } }$ qubit (Petta et al., 2005). Koppens et al., 2008 measured $T _ { 2 } = 5 0 0$ ns in GaAs using ESR. In silicon with <50 ppm $^ { 2 9 } \mathrm { S i }$ content, ensemble ESR measurements of electrons bound to $\mathrm { 3 i _ { P } }$ donors yielded $T _ { 2 }$ ≈ 2 s (Tyryshkin et al., 2012). Again, in isotopically enriched Si, Saeedi et $a l .$ , 2013 demonstrated an ensemble nuclear spin coherence time of over 39 minutes. Hahn echo measurements of $T _ { 2 }$ in electron spin qubits in isotopically purified silicon at fields greater than 100 mT gave comparable results, showing coherence times on the order of 1 ms in the small donor system (with larger hyperfine gradients) (Muhonen et al., 2014), of order 1.2 ms in the somewhat larger SiMOS dot systems (Veldhorst et al., 2014), and of order 30 µs to 1 ms in the larger Si/SiGe QD systems (Kawakami et al., 2014; Kerckhof et al., 2021; Sigillito et al., 2019a). Stano and Loss, 2021 have compiled a thorough list of coherence times measured in semiconductor spin qubits to-date. Some of these studies involve samples with micromagnets for EDSR, where the $T _ { 2 }$ and $T _ { 2 } ^ { * }$ values are not limited by nuclear spins at all, but rather by charge noise transduced to magnetic noise due the the micromagnet field gradient.We address such efects in Sec. VI.D.

## C. Phonon-mediated spin relaxation

As discussed in Sec. VI.A.1, spin relaxation requires energy exchange with the environment. For typical QD spin splittings, this often occurs via the emission of acoustic phonons coupled with a spin-mixing perturbation such as spin-orbit, hyperfine, or external magnetic gradient (Hanson et al., 2007; Zwanenburg et al., 2013). In polar semiconductors such as $\mathrm { G a A s } .$ , the dominant phonon interaction is piezoelectric (Khaetskii and Nazarov, 2001). In nonpolar materials like Si, the deformation potential plays a key role (Tahan and Joynt, 2014). For single-phonon-mediated decay, the spin relaxation rate Eq. 27 can be expressed in Fermi golden rule form as

$$
\frac {1}{T _ {1}} = \frac {2 \pi}{\hbar} | \langle \tilde {\uparrow} | H _ {p} | \tilde {\downarrow} \rangle | ^ {2} \rho (\Delta E),\tag{35}
$$

where $\rho ( \Delta E )$ is the density of modes (photon or phonon) at the level splitting $\Delta E$ , equal to the Zeeman splitting for single-spin relaxation, and the electron-phonon interaction $H _ { p }$ couples the spin states |<sup>˜</sup>↑i, |<sup>˜</sup>↓i, which are renormalized by the spin-mixing mechanism.

Evaluation of these rates for spin-orbit-mediated decay under the dipole approximation (valid for small energies) leads to characteristic scaling laws $1 / T _ { 1 } \ \propto \ B ^ { 5 }$ and $B ^ { 7 }$ , respectively, for piezoelectric-limited and deformation potential-limited one-phonon relaxation, in good agreement with single-spin $T _ { 1 }$ measurements in GaAs (Fujisawa et al., 2002; Hanson et al., 2003) and Si (Xiao et al., 2010). The same microscopic interactions contribute to singlet-triplet decay in single QDs and DQDs; however, since the relevant spin splitting in those cases is usually exchange- rather than Zeeman-limited, and the excited state structure is strongly dependent on Coulomb interactions and confinement potential, the scaling and bias dependencies can change drastically (Danon, 2013; Golovach et al., 2008; Meunier et al., 2007).

One recent development is the observation of spin relaxation “hot spots” when the spin splitting is resonant with another excited level. Hot spots are especially relevant in Si QDs where typical valley splittings of order 100 $\mu \mathrm { e V }$ can equal Zeeman energies at Tesla-scale magnetic fields. Similar to spin-orbit coupling, spinvalley coupling admixes the excited spin states with valley states of opposite spin, which then decay to the ground state via phonon or photon emission (Huang and Hu, 2014b). Valley relaxation is generally dominated by valley-orbit mixing due to interfacial disorder and is typically much faster than pure spin relaxation (Penthorn et al., 2020; Tahan and Joynt, 2014). This leads to large enhancements in the single-spin relaxation rate when the spin and valley splittings are brought into resonance by tuning the magnetic field; relaxation suppression or “cold spots” due to the interplay of disorder are also possi ble (Hosseinkhani and Burkard, 2021; Yang et al., 2013). The Zeeman energy of relaxation hot spots can be used to directly measure valley splittings in Si QDs (Petit et al., 2018; Yang et al., 2013). Spin-valley efects also play an important role in donor spin relaxation, as thoroughly discussed in Tahan and Joynt, 2014 and Zwanenburg et al., 2013; the weak interactions in these systems allow observations of spin lifetimes of up to 30 s in donor states (Watson et al., 2017). Electric field-induced spinorbit coupling can also significantly enhance the donor spin relaxation rate (Weber et al., 2018).

In general, spin lifetimes are shortened when spincharge hybridization is enhanced. The spin-valley hotspots described above are one such example of this; another is the enhancement of interdot spin relaxation observed in GaAs DQDs at particular detunings where the excited spin state of one dot is resonant with an orbital energy in the other (Srinivasa et al., 2013). The directional dependence of SOC also leads to an anisotropic dependence of spin $T _ { 1 }$ on the in-plane magnetic field orientation (Scarlino et al., 2014). Furthermore, external magnetic gradients can provide a “synthetic” spin-orbit field that contributes to spin relaxation. In the dipole approximation limit, $1 / T _ { 1 } \propto B ^ { 5 }$ for deformation potential interactions due to a fixed external gradient. Experimentally, spin relaxation rates at high fields in micromagnet devices tend to increase more slowly (Borjans et al., 2019; Hollmann et al., 2020), possibly due to phonon bottleneck efects at these energies.

Hyperfine interactions provide yet another pathway for spin relaxation. Coupling of an electron with local nuclear spins admixes spin states of diferent orbitals (Erlingsson and Nazarov, 2002), enabling relaxation via phonon or photon emission. The resulting single-spin relaxation rate scales as $B ^ { 3 }$ or $B ^ { 5 }$ for piezoelectric and deformation potential phonons, respectively. Hyperfineinduced relaxation in Si QDs is typically expected to be negligible due to the paucity of spinful nuclei (Tahan and Joynt, 2014). Camenzind et al., 2018 observe long spin $T _ { 1 }$ of around $5 7 \pm 1 5 \ :$ s in a GaAs QD at $B = 0 . 6 - 0 . 7$ T, increasing as $B ^ { 3 }$ at low fields and insensitive to field orientation, strongly suggesting hyperfine-limited relaxation. Hyperfine-induced relaxation can also lift Pauli spin blockade at low magnetic fields, as observed experimentally for (1,1) triplet decay in a GaAs DQD as a function of detuning (Johnson et al., 2005b).

Single-phonon relaxation processes typically dominate at low temperatures, but two-phonon processes can become relevant at high temperatures. This leads to distinct temperature scalings which are observed in spin lifetime measurements above 200 mK in SiMOS (Petit et al., 2018) and Si/SiGe QDs (Borjans et al., 2019). At small spin splittings, e.g., low magnetic fields for single spins or modest exchange splittings in singlet-triplet states, phonon-assisted decay is suppressed by the reduced density of states and (in Si) suppression of deformation potential coupling at long wavelengths. In such cases the dominant relaxation process may instead be mediated by charge noise, as described below.

Overall, the long spin lifetimes in semiconductors mean that current spin qubit gate fidelities are rarely limited by $T _ { 1 }$ . In contrast, spin relaxation can lead to errors in spin readout when the readout time becomes comparable to $T _ { 1 }$ . The rich physics of spin relaxation rewards close study as it ofers many insights into the microscopic physics of spin qubits.

## D. Charge noise

Charge noise can significantly limit the performance of spin qubits. In principle, a spin does not interact with fluctuating electric fields, but for all qubits we have discussed in this article, there is some form of spin-to-charge coupling, allowing charge noise to dephase, decohere, or otherwise reduce the operational fidelity of spin qubits. Charge noise generally refers to random electric fields which occur at the spin location, which may be caused by fluctuating defect states in the device gate stack, by crystal deformations from phonons (Hu, 2011), by spurious voltage noise transmitted through control gates, or by random charge motion from anywhere else in the device, such as the measurement channel. Semiconductor charge noise processes typically have a $1 / f$ noise spectral density (Dutta and Horn, 1981), but white noise (e.g. Johnson-Nyquist noise) may also be present, usually at lower levels than $1 / f$ noise. Noise sources can to some extent be distinguished by how their spectral character translates to relaxation (via the filter function formalism discussed in Sec. VI.A) and their temperature dependence (Beaudoin and Coish, 2015).

Although $1 / f$ noise varies significantly from device to device, measurements in GaAs dots, SiMOS dots, Si donors near MOS gates, and $\mathrm { S i / S i G e }$ dots all see charge-noise induced energy fluctuations in the range of $A _ { \mu } = 0 . 1 - 1 0 ~ \mu \mathrm { e V } / \sqrt \mathrm { H z }$ at 1 Hz, meaning the chemical potential of the charge carrying the spin has noise spectral density $S _ { \mu } ( f ) = A _ { \mu } ^ { 2 } ( 1 \mathrm { H z } / f )$ (Connors et al., 2021; Freeman et al., 2016; Mi et al., 2018b; Petersson et al., 2010).

Charge noise can afect spin qubits via the large magnetic field gradients that enable EDSR for LD qubits (III.D). The stray electric fields of charge noise translate directly to a fluctuating magnetic field, and in turn to fluctuations in both Zeeman splitting and in the transverse driving field, and therefore impacting all relaxation parameters $T _ { 1 } , T _ { 2 } ^ { * } , T _ { 2 } , T _ { 1 \rho }$ and $T _ { 2 , R } .$ . For instance, Borjans et al., 2019 and Hollmann et al., 2020 show the

T<sub>1</sub> dependence of a Si/SiGe spin qubit in a large gradient is weakly field-dependent at low magnetic fields, strongly suggesting $1 / f$ or Johnson noise-limited relaxation at these low energies.

Charge noise as translated to spin by gradients or by spin-orbit efects (Huang and Hu, 2014a) may also be observed in multipulse-sequence noise spectroscopy (Sec. VI.A). Nakajima et $a l .$ , 2020 examined a GaAs device, Kawakami et $a l . .$ , 2016 an isotopically natural Si/SiGe dot; Yoneda et al., 2018 a 800 ppm <sup>29</sup>Si/SiGe dot, and Struck et $a l .$ , 2020 a 60 ppm <sup>29</sup>Si/SiGe dot. In all of these cases, the large micromagnet-induced gradient results in both $T _ { 2 } ^ { * }$ and $T _ { 2 }$ being limited by $1 / f$ charge noise. In contrast, noise spectroscopy performed on natural and 800 ppm Si/SiGe dots with no micromagnet (Kerckhof et $a l .$ , 2021) show $T _ { 2 } ^ { * }$ and $T _ { 2 }$ limited by hyperfine efects, although in Si these still have $1 / f$ character as discussed in Sec. VI.B. Chan et al., 2018 use noise spectroscopy in a SiMOS quantum device and find a predominantly 1/f-charge-noise limited spectrum; in this case charge noise couples to the spin due to intrinsic spin-orbit or spin-valley efects. Petit et $a l .$ , 2018 observe Johnson noise-limited spin $T _ { 1 }$ at Zeeman energies below the valley splitting in a SiMOS device without a micromagnet. Hole qubits also feature large spin-orbit fields and therefore have $T _ { 2 } ^ { * }$ and $T _ { 2 }$ times limited by charge noise (Hendrickx et al., 2020b; Maurand et $a l .$ , 2016).

EO qubits in Si/SiGe may not sufer from SOI or field gradient efects, but are still susceptible to charge noise, since they utilize an exchange coupling J that is a sensitive function of the wavefunction overlap between two spins. Although fluctuations in the confinement potential may come from multiple sources, we may refer to it as though it arises from fluctuations in gate voltages $V _ { k }$ . The exchange noise may therefore be written as $\begin{array} { r } { \delta J = \sum _ { k } ( \partial J / \partial V _ { k } ) \delta V _ { k } } \end{array}$ , and hence for $1 / f$ charge noise has a noise spectrum from the noisy voltages,

$$
S _ {J} (f) = \sum_ {k} \left| \frac {\partial J}{\partial V _ {k}} \right| ^ {2} S _ {V _ {k}} (f).\tag{36}
$$

The partial derivatives $\partial J / \partial V _ { k }$ quantify the sensitivity to charge noise (Hu and Das Sarma, 2006) and may be estimated through the Fermi-Hubbard ansatz (Culcer and Zimmerman, 2013), Heitler-London/Hund-Milliken estimates (Culcer et al., 2009), or FCI calculations (Sec. IV.C). They may also be measured to make a map of sensitivity to charge noise in bias space (Dial et $a l .$ 2013; Martins et al., 2016; Reed et al., 2016), enabling an empirical search for operating regions of low chargenoise sensitivity (called “sweet spots”).

Approximately, the simplest Fermi-Hubbard model ansatz asserts that gates directly above the QDs impact the chemical potential $\mu _ { j }$ of dot $j$ via a constant factor known as the lever arm $\alpha _ { V }$ , hence $\partial \mu _ { j } / \partial V _ { k } = e \alpha _ { V } \delta _ { j k }$ The dependence of tunnel couplings on gate voltages is more complex, but is typically assumed to be an exponential function of some linear sum of voltages, in which case $\partial t _ { c } / \partial V _ { k } \propto t _ { c }$ . Under this model, one finds that in a DQD in the weak exchange limit, sensitivity to charge noise is maximized at high detuning and minimized at $\epsilon = 0 ;$ the latter condition means that the chemical potential of two dots are held equal, leaving only weaker tunnel-coupling noise (Bertrand et al., 2015; Martins et al., 2016; Reed et al., 2016; Taylor et al., 2007). We caution however that at high exchange and for simultaneous exchange across more than two dots, simple Fermi-Hubbard models are inaccurate at estimating charge noise sensitivity, as dot electrons merge into a regime in which exchange may be dominated by multi-dot orbital energies not parameterized by these models (Pan et al., 2020); see Sec. IV.C.

Recently, charge noise spectral densities in Si $\mathrm { S T _ { 0 } }$ qubits have confirmed a nearly $1 / f$ spectrum over as many as 13 decades of frequency in both Si/SiGe (Connors et al., 2021) and SiMOS (Jock et al., 2018). Moreover, temperature and fabrication dependencies of the $1 / f$ noise amplitude point to fluctuations in materials or interfaces in the gate-stack, as opposed to noise emanating from the bulk of the semiconductor or instrumentation.

In aggregate, the last 20 years of spin qubit research have indicated that, while material choices and judicious engineering of charge noise sensitivity may improve charge-noise-induced decoherence, the underlying sources of $1 / f$ charge noise are unlikely to be completely removed from semiconductor devices (unlike hyperfine noise, which may be eliminated with suficient isotopic enrichment). The ease of control which comes from micromagnet-induced EDSR or RX qubits comes at the cost of persistent sensitivity to ever-present charge noise. When only SOC is at play, as in hole qubits and highfield SiMOS systems, relaxation and decoherence due to charge noise may be lower, and it may be lowest in the nearly gradient-free and low spin-orbit environment of low-field $\mathrm { S T _ { 0 } }$ or EO qubits, but it is still activated during exchange pulsing and therefore provides some limit to control fidelity. The balance of the speed and convenience of qubit control against sensitivity to charge noise remains a key design space for semiconductor spin qubits across multiple materials and modalities.

## VII. HYBRID SYSTEMS

The short-ranged nature of exchange coupling (see Sec. IV.A) is most eficiently applied to implement two-qubit gates between nearest neighbor spin qubits. However, it has been shown experimentally that fully connected quantum information processors can operate with higher fidelities as compared with systems which only provide nearest-neighbor coupling (Linke et al., 2017). Beyond the advantage of high-connectivity for quantum computing, the coupling of stationary qubits to mobile photonic qubits could form the basis of widespread quantum networks (Kimble, 2008). Some approaches for achieving long-range coupling of spin qubits are briefly outlined in Sec. IV.F. This section is focused on one particularly promising approach, namely the development of hybrid devices consisting of semiconductor QDs embedded in a microwave cavity, to achieve longrange coupling of spin qubits and high-fidelity readout.

## A. Overview of superconducting circuit QED

Hybrid quantum systems consisting of QDs embedded in microwave cavities are an outgrowth of the field of circuit quantum electrodynamics (cQED). The main physical concepts associated with cQED were first explored by atomic physicists in the field of cavity quantum electrodynamics (cavity QED) (Haroche and Raimond, 2006; Mabuchi and Doherty, 2002; Miller et al., 2005; Walther et al., 2006). In cavity QED, a two-level atom with transition frequency $\omega _ { a }$ is coupled to an optical cavity with a resonance frequency $\omega _ { c } .$ . The photonic mode and atom interact through the electric dipole interaction $H _ { \mathrm { { i n t } } } ~ =$ $- e { \bf E } \cdot { \bf d }$ , where E is the cavity electric field at the position of the atom and d is the dipole moment associated with the atomic transition.

The Jaynes-Cummings Hamiltonian $H _ { \mathrm { J C } } = \hbar \omega _ { c } a ^ { \dagger } a +$ $\hbar \omega _ { a } \sigma ^ { z } / 2 + \hbar g ( a \sigma ^ { + } + a ^ { \dagger } \sigma ^ { - } )$ describes the system dynamics in cases where the rotating wave approximation is appropriate (Jaynes and Cummings, 1963). Here $a ^ { \dagger } ( a )$ are the photon creation(annihilation) operators, $\sigma ^ { z }$ describes the state of the atom, and $\sigma ^ { + } ( \sigma ^ { - } )$ are atomic raising(lowering) operators. When $\omega _ { a } = \omega _ { c } .$ , the atom and cavity can exchange an excitation at a rate set by the vacuum Rabi frequency g. In the energy domain, the light-atom coupling manifests itself as the vacuum Rabi splitting between energy eigenstates formed as coherent superpositions that are part atom and part photon. It is directly observable in the cavity transmission in the strong coupling regime, where g exceeds the cavity decay rate κ and the atomic dephasing rate γ.

In the early 2000s, significant eforts were made to demonstrate cavity-QED physics in solid state systems. Strong-coupling physics was observed in systems consisting of self-assembled QDs embedded in a distributed Bragg reflector cavity (Yoshie et al., 2004), self-assembled QDs embedded in a photonic crystal cavity (Reithmaier et al., 2004), and a superconducting Cooper pair box (Wallraf et al., 2004) or flux (Chiorescu et $a l .$ , 2004) qubit embedded in a microwave cavity. These seminal experiments demonstrated that a superconducting artificial atom could be coherently coupled to a microwave frequency photon in the strong-coupling regime with an interaction precisely described by the Jaynes-Cummings Hamiltonian (Blais et al., 2007, 2004). For a review of cQED physics with superconducting qubits, see (Blais et al., 2020, 2021).

The energy scales associated with gate-defined QDs (charge transitions in a DQD and the Zeeman energy of a single spin in a moderate field $B = 0 . 2 5 \ \mathrm { T } )$ are nicely matched with the energy of microwave frequency photons $f = 5 - 1 5$ GHz. Rapid developments in the cQED architecture led to growing interest in QD cQED and a number of theoretical proposals for physical implementations (Benito et al., 2017, 2019b, 2016; Burkard and Imamoglu, 2006; Childress et $a l .$ , 2004; Hu et $a l .$ , 2012; Jin et $a l .$ , 2012; Kerman, 2013; Russ and Burkard, 2015b; Russ et al., 2016; Tosi et al., 2014). Beyond coupling to charge through the electric dipole interaction, semiconductor QDs allow for cavity coupling to electron spins, long-range spin-spin interactions, and possibly even nuclear spin state readout. The main modes of interaction are described in the next section.

## B. Coherent interactions in quantum dot circuit QED

In this section we review the theory of charge-photon coupling, spin-photon coupling, and cavity-mediated spin-spin interactions in hybrid quantum systems consisting of semiconductor DQDs embedded in microwave cavities. The experimental signatures of coherent interactions in each of these cases are also presented.

## 1. Charge-photon coupling

The physics of a single electron confined in a semiconductor DQD is described by a charge qubit Hamiltonian $H _ { 0 } = ( \epsilon / 2 ) \tau ^ { z } + t _ { c } \tau ^ { x }$ , where  is the DQD level detuning, $t _ { c }$ is the interdot tunnel coupling, and the matrices $\tau ^ { x }$ and $\tau ^ { z }$ are Pauli matrices (see Appendix A) operating on the charge state of the qubit, i.e. $\tau ^ { z } | L \rangle = \tau ^ { z } | ( 1 , 0 ) \rangle =$ $| ( 1 , 0 ) \rangle$ and $\tau ^ { z } | R \rangle = \tau ^ { z } | ( 0 , 1 ) \rangle = - | 0 , 1 ) \rangle$ . The cavity electric field $E _ { \mathrm { c a v } } = E _ { 0 } ( a + a ^ { \dagger } )$ ) couples to the charge dipole moment of an electron confined in a DQD through the interaction term $H _ { \mathrm { i n t } } = \hbar g _ { c } ( a + a ^ { \dagger } ) \tau ^ { z }$ . The charge-photon interaction strength $\begin{array} { r } { g _ { c } = e E _ { 0 } d . } \end{array}$ where $d$ is the interdot spacing, and $E _ { 0 }$ is the amplitude of the vacuum electric field fluctuations in the cavity, which characterizes the strength of the charge-photon interaction (Burkard et al., 2020). Diagonalizing $H _ { 0 } ,$ , transforming $H _ { \mathrm { i n t } }$ into the eigenbasis of $H _ { 0 } .$ , moving into a frame rotating at probe frequency $f _ { p } ,$ and making the rotating-wave approximation yields the transverse coupling Hamiltonian $\begin{array} { r } { H = { \frac { 1 } { 2 } } \Omega \tau ^ { z } + \dot { \tilde { g } } _ { c } ( a \tau ^ { + } + a ^ { \dagger } \tau ^ { - } ) + \Delta a ^ { \dagger } a } \end{array}$ . Here, $\Omega = \sqrt { \epsilon ^ { 2 } + 4 t _ { c } ^ { 2 } }$ is the charge qubit transition energy, $\tilde { g } _ { c } = g _ { 0 } t _ { c } / \Omega$ is the coupling strength, and $\Delta = 2 \pi ( f _ { c } - f _ { p } )$ is the detuning between the cavity resonance frequency $f _ { c } = \omega _ { c } / 2 \pi$ and the probe frequency. Note that from a practical perspective, Ω is first-order insensitive to charge noise at $\epsilon =$

0. Conveniently, the coupling strength $\tilde { g } _ { c }$ is maximal at the interdot charge transition $( \epsilon = 0 )$ as well. Inputoutput theory (Benito et al., 2017; Burkard et al., 2020; Collett and Gardiner, 1984) is used to calculate the cavity response. In the steady-state limit $\dot { a } = \dot { \tau } _ { - } = 0$ , the transmission amplitude through the cavity is

$$
A = \frac {- i \sqrt {\kappa_ {1} \kappa_ {2}}}{\Delta - \frac {i \kappa}{2} + \tilde {g} _ {c} \chi} = | A | e ^ {i \delta \phi},\tag{37}
$$

with the electric susceptibility $\chi = \tilde { g } _ { c } / ( - \Omega + 2 \pi f _ { p } + i \gamma / 2 )$ and the photon loss rates $\kappa _ { 1 , 2 }$ at the cavity ports 1 and 2, where $\kappa = \kappa _ { 1 } + \kappa _ { 2 } + \kappa _ { i }$ and $\kappa _ { i }$ denotes the intrinsic photon loss rate. In terms of the resonator frequency and quality factor $Q _ { c } , \kappa / ( 2 \pi ) = f _ { c } / Q _ { c }$

Strong coupling between the qubit and cavity will occur when $\tilde { g } _ { c } ^ { 2 } > ( \gamma _ { c } ^ { 2 } + ( \kappa / 2 ) ^ { 2 } ) / 2$ , where $\gamma _ { c } / ( 2 \pi )$ is the charge qubit decoherence rate. When $\gamma$ is dominated by inhomogeneous dephasing of the qubit, $\gamma / ( 2 \pi ) = 1 / T _ { 2 } ^ { * }$ In the strong coupling regime, the cavity resonance splits into two separate vacuum Rabi peaks separated by $2 \tilde { g } _ { c }$ as shown in Fig. 26. It is challenging to reach the strong coupling regime because in semiconductor systems the qubit decoherence rate γ can be sizeable, e.g., several tens of MHz for GaAs. This can be overcome by increasing $\tilde { g } _ { c }$ or by suppressing $\gamma$ . Both strategies have successfully been implemented to reach the strong coupling regime: an enhancement of $\tilde { g } _ { c } \propto E _ { 0 } \propto \sqrt { Z }$ to a GaAs DQD was achieved by increasing the impedance $Z = { \sqrt { L / C } }$ of the resonator (Stockklauser et al., 2017), while a reduction of $\gamma$ was possible using a Si DQD (Mi et al., 2017a).

## 2. Spin-photon coupling

For spin qubits, one is ultimately interested in coupling the spin to the cavity mode. While for optical cavities, SOC in the valence band of III-V semiconductors can enable spin-photon coupling (Imamoglu et al., 1999), the coupling to microwave photons requires mechanisms acting entirely in the conduction (valence) band for electrons (holes). Spin-charge hybridization using SOC or magnetic field gradients allows for a sizeable coupling between the electron spin and the cavity electric field (Burkard et al., 2020). In particular, the coupling of a floppingmode spin qubit via spin-charge hybridization using a magnetic field gradient $\Delta B ^ { x } = B _ { 1 } ^ { x } - B _ { 2 } ^ { x }$ in a Si DQD can be described by the additional term $( { \bar { \Delta } } B ^ { x } / 2 ) \sigma ^ { x } \tau ^ { z }$ in the single-electron Hamiltonian $H _ { 0 }$ (Benito et $a l . , 2 0 1 7 )$ The direction of this gradient field is perpendicular to the homogeneous magnetic field $B ^ { z } = ( B _ { 1 } ^ { z } + B _ { 2 } ^ { z } ) / 2$ described by the Zeeman term $( B ^ { z } / 2 ) \sigma ^ { z }$

Transforming $H _ { \mathrm { i n t } }$ into the eigenbasis of $H _ { 0 } ,$ one obtains a coupling of the form $\begin{array} { r l r } { H _ { \mathrm { i n t } } } & { { } = } & { g _ { c } ( a \ + } \end{array}$ $\textstyle { a ^ { \dag } } ) \sum _ { n , m = 0 } ^ { 3 } d _ { n m } | n \rangle \langle m |$ , where the sum represents the electric dipole operator in the spin-charge-hybridized

![[assets/figures/references/burkard-2023/ff852293ff80af0c211a98e44abe855c240bc435a211e6b12ca876cdea6621eb.jpg]]

B  
![[assets/figures/references/burkard-2023/aea7314252909eb6479d4107cac5ec120085861bd077f8b00808f7dfc054c020.jpg]]  
FIG. 26 Cavity transmission for a charge qubit coupled to a superconducting microwave resonator, from (Mi et al., 2017a). (a) As the double-dot detuning is swept across the tunneling transition, the charge qubit frequency comes into resonance with the cavity frequency. As a result of the strong coupling between the cavity and charge qubit, the system hybridizes, and two distinct transmission peaks separated by the vacuum Rabi splitting are observed. The eigenenergies of the uncoupled system are shown in dashed lines, and the eigenergies of the coupled system are shown in solid lines. (b) Cavity transmission at two diferent values of detuning, with theoretical predictions overlaid.

DQD eigenbasis |ni. For microwave transmission through the cavity one finds again Eq. (37) with the susceptibility $\begin{array} { r } { \chi = \sum _ { n = 0 } ^ { 3 } \sum _ { j = 1 } ^ { 3 - n } d _ { n , n + j } \chi _ { n , n + j } } \end{array}$ and $\chi _ { i j }$ follows from the stationary limit of the quantum master equation. The relevant low-energy eigenstates of $H _ { 0 } { \mathrm { ~ a r e ~ } } | 0 \rangle \approx | - , \downarrow \rangle$ and $| 1 \rangle \approx \cos ( \Phi / 2 ) | - , \uparrow \rangle + \sin ( \Phi / 2 ) | + , \downarrow \rangle$ with the spin-orbit mixing angle Φ = arctan $( \Delta B ^ { x } / ( 2 t _ { c } - B ^ { z } ) )$ (in the symmetric case where $\epsilon = 0 )$ and hybridized orbital states $| \pm \rangle = ( | ( 1 , 0 ) \rangle \pm | ( 0 , 1 ) \rangle ) / \sqrt { 2 }$ . The dipole transition matrix element for the predominantly spin-like transition between these two states is $d _ { 0 1 } \approx - \sin ( \Phi / 2 )$ , whereas charge-like transitions to the next higher state are less important but can lead to an asymmetry in the vacuum Rabi peaks. The resulting spin-photon coupling in this simplest two-level description and within the rotatingwave approximation can be described with a Jaynes-Cummings model

$$
H = \hbar \Omega_ {s} \sigma^ {z} + \hbar \omega_ {c} a ^ {\dagger} a + g _ {s} \sigma^ {x} (a + a ^ {\dagger}),\tag{38}
$$

![[assets/figures/references/burkard-2023/ad77a16426b1cff8a56c046c6bc3a547e2d4dc0ad2cd18b4a388ffbdb51f92ef.jpg]]  
FIG. 27 Cavity transmission for a single-spin qubit coupled to a superconducting microwave resonator, from (Samkharadze et al., 2018). As the magnetic field is swept, the spin qubit comes into resonance with the cavity at about 6.03 GHz, and the qubit-cavity coupling splits the cavity resonance into two hybrid spin-photon modes. The characteristic vacuum Rabi splitting indicates the strong coupling regime.

where $\Omega _ { s }$ is the spin qubit transition frequency, and the spin-photon coupling $g _ { s } \approx g _ { c } | d _ { 0 1 } | \approx g _ { c } | \mathrm { s i n } ( \Phi / 2 )$ |. A strength of this architecture is the electrical tunability of the spin-charge admixture via the inter-dot tunnel coupling $t _ { c }$

Strong spin-photon coupling will occur when $g _ { s } \mathrm { ~ \tiny ~ > ~ }$ $\gamma _ { s } , \kappa ,$ where $\gamma _ { s }$ is the spin deocherence rate. Remarkably, this condition is not identical with the strong coupling condition for charge, and in fact, the spin-photon system can be in the strong coupling regime while the chargephoton system is not. A key signature of strong coupling, split vacuum Rabi peaks, has been observed in microwave transmission through a superconducting Nb cavity with an embedded Si DQD (Mi et $a l .$ , 2017b). A similar experiment with NbTiN superconducting circuitry has also reached the strong coupling regime (Samkharadze et al., 2018) [see Fig. 27]. The coupling of RX qubits to an electromagnetic cavity (Russ et al., 2016) has been realized using a TQD in GaAs coupled to a NbTiN superconducting cavity (Landig et al., 2018).

## 3. Cavity-mediated spin-spin interactions

The coherent coupling Eq. (38) of individual submicron scale spin qubits to a single cavity mode extend ing over 100 µm or more lends itself to the pairwise coupling of spin qubits over distances much longer than their typical nearest-neighbor separation. The exchange of virtual cavity photons in the dispersive limit gives rise to an efective coupling between spin qubits of the form

$$
H _ {I} = \frac {g _ {s} ^ {2}}{\Delta} \left(\sigma_ {1} ^ {+} \sigma_ {2} ^ {-} + \sigma_ {1} ^ {-} \sigma_ {2} ^ {+}\right),\tag{39}
$$

with the detuning $\Delta = \Omega _ { s } - \omega _ { c }$ (Benito et $a l .$ , 2019b; Warren et al., 2019). The transverse (XY) coupling Eq. (39) is known to generate the universal iSWAP (Imamoglu et al., 1999) and iSWAP gates (Schuch and Siewert, 2003). Cavity photon loss and qubit decoherence imply opposing requirements for the degree of spincharge mixing, the optimum being defined by the ratio $\kappa / \gamma _ { c }$ (Benito et al., 2019a). Fast and high-fidelity twoqubit gates in the presence of realistic charge noise have been supported by numerical calculations (Warren et al., 2019).

![[assets/figures/references/burkard-2023/9b62f10b8d2b6419fccebee0b8f89be3f8c36550046603a783dd2d8f913e43d9.jpg]]  
FIG. 28 Resonant cavity-mediated spin-spin interactions, from (Borjans et al., 2020). (a) Calculated spin resonance frequencies vs angle of the applied magnetic field, which changes the total magnetic field at the location of each qubit. At an external field of 106.3 mT and an angle of approximately $5 . 5 ^ { \circ }$ 2 both qubits come into resonance with the cavity. (b) Measured cavity transmission vs angle, showing an avoided crossing between both qubits and the resonator at the expected angle.

One challenge with experiments demonstrating cavitymediated coupling between single spins involves bringing multiple spin qubits into resonance with each other and a cavity. For example, diferences in qubit-micromagnet positioning of around ten nanometers, which are within typical fabrication tolerances, can easily detune two single-spin qubits from each other, even at the same value of the external magnetic field. To surmount this challenge, the micromagnets on diferent qubits can be fabricated at an angle with respect to each other (Astner et al., 2017; Borjans et $a l .$ , 2020; Harvey-Collard et al., 2021). By adjusting the angle and magnitude of the external magnetic field, the two spins can be brought into resonance with each other and the cavity. When two qubits, instead of just one, are tuned into resonance with the same cavity, an enhancement of the spin-photon coupling rate $g _ { s }$ is observed (Fig. 28), as reported for single electrons in Si DQDs coupled to both Nb (Borjans et al., 2020) and NbTiN superconducting resonators (Harvey-Collard et al., 2021). Moreover, when both spins are detuned from the cavity but in reso nance with each other, an avoided crossing between spins due to the cavity-mediated dispersive coupling can be ob served (Harvey-Collard et al., 2021). Microwave-photonmediated coupling between charge qubits has also been demonstrated (van Woerkom et al., 2018).

## C. Applications for readout

Cavity coupled QDs can be readily probed be measuring the transmission through, or reflection from, the microwave cavity. Measurements are generally performed in the dispersive regime, where the detuning between the QD transition frequency and cavity photon is greater than the cavity linewidth, $| \omega _ { a } - \omega _ { c } | \gg \kappa .$ , where $\omega _ { a }$ is the (charge or spin) qubit frequency. In this dispersive (i.e. of-resonant) regime, the Jaynes-Cummings Hamiltonian simplifies to the form H $\approx \hbar \left( \omega _ { c } + \chi _ { d } \sigma ^ { z } \right) \left( a ^ { \dagger } a + 1 / 2 \right) +$ $\hbar \omega _ { a } \sigma ^ { z } / 2$ with the dispersive shift $\begin{array} { r } { \chi _ { d } = \frac { g ^ { 2 } } { \omega _ { a } - \omega _ { c } } } \end{array}$ . The first term in the Hamiltonian gives insight into the nature of the measurement. The bare cavity photon energy (energy in the absence of a qubit) $\hbar \omega _ { c }$ is shifted by an amount $\chi _ { d }$ that depends on the state of the qubit.

Detection of charge states using microwave photons has been demonstrated in GaAs, InAs, carbon nanotube and Si/SiGe DQDs (Frey et al., 2012; Mi et al., 2017a; Petersson et $a l .$ , 2012; Viennot et al., 2016). The dispersive shift can be detected by probing the cavity transmission amplitude $| A |$ or phase shift $\delta \phi .$ . Measurements of $\delta \phi$ as a function of the DQD gate voltages can be used to map out DQD charge stability diagrams and quantitatively extract the interdot tunnel coupling $t _ { c }$ and the chargequbit coupling rate $g _ { c }$ . High speed and high sensitivity real-time charge detection have benefited from the adop tion of nearly quantum limited superconducting parametric amplifiers. Stehlik et al. demonstrated “video mode” acquisition of DQD charge stability diagrams in 20 ms (Stehlik et al., 2015). It is also possible to use the cavity response at a single dot-to-lead charge transition for charge state readout with a very large signal-to-noise ratio of >450 and an integration time around 1 $\mu \mathrm { s }$ (Borjans et al., 2021a)

Cavity readout of spin states can be achieved using at least two diferent approaches. In the first approach, the Pauli exclusion principle is used to distinguish spin singlet and spin triplet states in a two-electron DQD. Pauli blocking is evident in the magnetic field dependence of the cavity response. With $B = 0$ , the spin singlet state is the ground state and tunneling from S(1,1) to S(2,0) leads to a large cavity response. In contrast, when $g \mu _ { B } B > t _ { c } ,$ the polarized spin triplet state $\mathrm { T _ { + } }$ (or $\mathrm { { T _ { - } } , }$ , depending on the sign of the $g { \mathrm { - f a c t o r } } )$ becomes the ground state near the charge transition. Due to Pauli blockade, charge tunneling from $\mathrm { { T } _ { + } ( 1 , 1 ) }$ to $\mathrm { T } _ { + } ( 2 , 0 )$ is forbidden, and there is no cavity response. The magnetic field dependence of the interdot charge transition signal can thereby be used to determine the charge parity of a DQD interdot charge transition (Schroer et al., 2012). Control of two-electron spin states at a large DQD detuning, followed by cavity readout at zero detuning, has been used to distinguish singlet and triplet spin states in an InAs DQD (Petersson et $a l .$ , 2012) and later in a cavity-coupled Si/SiGe DQD (Zheng et al., 2019). Using an ancilla dot capacitively coupled to a singlet-triplet qubit has led to singlet-triplet spin state readout with a fidelity of 99.2% (Borjans et al., 2021a).

![[assets/figures/references/burkard-2023/c6632bf08914c149698fd8a8616fc403df591266eb8ab9d438144510c8893f49.jpg]]  
FIG. 29 Cavity-mediated single-spin readout from (Mi et al., 2018a). (a) Cavity response vs magnetic field, showing the single-spin resonance frequency. (b) Electron-spin-resonance line at B =92.18 mT. (c) Pulse sequence to detect single-spin Rabi oscillations via the cavity resonance. (d) Rabi oscillations measured through the cavity dispersive shift.

A second approach for spin state readout in the oneelectron regime of a DQD utilizes spin-photon coupling and the dispersive interaction. For a spin interacting with a cavity photon, the dispersive shift is $\chi _ { d } \sigma ^ { z }$ . Dispersive readout of a single electron spin state using cQED was first demonstrated using a cavity-coupled Si/SiGe DQD (Mi et $a l . . .$ 2018a). Figure 29 shows the cavity phase response as a function of magnetic field and microwave probe frequency. The spin-photon detuning dependence is clearly evident in the data, with the phase shift changing sign as the spin is taken through resonance with the cavity. The magnitude of the dispersive shift also decreases with detuning, as expected from the $1 / \Delta$ dependence in the dispersive form of the Jaynes-Cummings Hamiltonian. Rabi oscillations of a single spin have been measured by probing the cavity with a microwave tone after the spin was driven with a microwave field. The signal-to-noise ratio of the dispersive readout of a single spin in a DQD coupled to a microwave cavity has been analyzed and optimized in (D’Anjou and Burkard, 2019).

## D. New avenues of research in cQED

Cavity-coupled QDs have enormous potential for applications in quantum information science. In the span of just several years, coherent charge-photon and spinphoton interactions have been demonstrated, as well as evidence for long-range cavity mediated spin-spin interactions. Future research is likely to extend these results to spin-spin coupling in the dispersive limit, a timedomain demonstration of a cavity mediated two-qubit gate, and extensions to larger quantum networks. There is also the potential for cQED to probe the nuclear spin degree of freedom in dot-donor systems (Mielke et al., 2021).

![[assets/figures/references/burkard-2023/93f056f3b0b46717d0e20d31e1773ee01be2b2a5fcad471af102720bf4c6d7b9.jpg]]  
FIG. 30 Cavity-mediated coupling between a triplet-dot resonant exchange qubit and a transmon superconducting qubit, from (Landig et al., 2019). Here, a superconducting cavity is driven near its resonance frequency of about 5.6 GHz. The y axis indicates the drive frequency of the resonance exchange qubit, and the x axis corresponds to changes in the electrochemical potential of the middle dot, which changes the overall energy of the spin qubit. The color scale indicates the transmission through the cavity. The gray dashed lines indicate the eigenenergies of the system in the absence of coupling, and the red dashed lines indicate the eigenenergies of the system including the coupling

Within the field of quantum information processing, hybrid systems employing cQED approaches may enable new forms of quantum information processors which could benefit from the advantages of diferent platforms. For example, recent work illustrates the feasibility of coupling spin qubits to superconducting qubits through microwave resonators, see Fig. 30 (Landig et al., 2019; Scarlino et al., 2019). A challenge for future hybrid systems such as these will be to ensure strong enough coupling rates to simultaneously capitalize on the benefits of the separate plaftorms while not introducing excess decoehrence.

Hybrid quantum systems have had a major impact on the field of mesoscopic physics as well. For example, voltage biased DQDs have been shown to emit microwave photons (Bruhat et al., 2016; Liu et al., 2014; Stockklauser et al., 2015), and even enable the creation of a maser (Liu et al., 2015). Given the sensitivity with which charge state physics can be probed, signatures of electron-phonon coupling in suspended nanowire DQDs have been observed (Hartke et al., 2018). Kondo physics has been explored (Desjardins et al., 2017) and there is potential to probe Majorana modes as well (Dartiailh et al., 2017). In Si/SiGe DQDs, cQED has proven to be very useful as a quantitative probe of valley splitting and intervalley coupling (Borjans et al., 2021b; Burkard and Petta, 2016; Mi et al., 2017c). Looking ahead to the fu ture, microwave spectroscopy may provide insight into a broader class of materials systems (Gramse et al., 2017; Lee et al., 2021; Shim et al., 2019) and qubit functionalities (de Lange et al., 2015; Larsen et al., 2015; van Woerkom et al., 2017).

## VIII. OUTLOOK

Semiconductor spin qubits are uniquely positioned to benefit from the technologies that are available for classical semiconductor-based information processing devices. The most important observation is that no single roadblock stands in the way of reaching the types of yields now driving the industry of Si CMOS for classical information processing. Fidelities for both single-qubit and multi-qubit gates appear to be limited by processes with clear routes for reduction, such as judicious bias regimes for reducing sensitivity to charge noise and isotopic enhancement for reducing magnetic noise (Mills et al., 2021; Noiri et al., 2021; Xue et al., 2021b). Readout visibilities and speeds have also improved substantially in the past few years (Borjans et al., 2021a; Madzik et al., 2021; Mills et al., 2021).

A clear advantage of semiconductor spin qubits is therefore the potential for their massive scaling and miniaturization. Due to their small size, semiconductor spin qubits have the distinction of having the most stringent demands on fabrication in comparison to superconducting qubits, trapped ion qubits, and photonic qubits. As a result, the route to large arrays of spin qubits has been slower, as numerous problems have had to be overcome to more reliably yield qubit arrays (Ha et al., 2021; Zajac et al., 2016). In the past decade the progress not just for the most heroic of devices but also for the yielding of routine device arrays from many groups in many countries and using many diferent control strategies have indicated a clear positive trend. The number of demonstrations of coherent operation published worldwide has grown accordingly.

It seems too early to say which type of spin qubit (LD, ST<sub>0</sub>, EO, etc.), spin qubit carrier (electron, hole, or nucleus), and material (Si, Ge, etc.), or which combination thereof, will end up being optimal for realizing a functioning large-scale quantum processor. While LD qubits ofer eficient use of the available resources and high robustness against charge noise, ST and EO qubits allow for baseband electrical control, in the case of EO qubits without the need for SOC or on-chip micromagnets. While Si ofers extremely high coherence, Ge allows for spin-orbit engineering of electrically controlled qubit operations. The extremely long coherence time of nuclear spins can be contrasted with the readily available fast exchange coupling between electronic spins.

Even if fault-tolerant quantum computers are many years away, qubits serve as our most sensitive solid-state electrometers and magnetometers, and in the case of semiconductor spin qubits, they serve this role within the workhorse materials underpinning the most pervasive information processing technology in modern society. Advances in the understanding of semiconductor device physics are at least one guaranteed outcome in the pursuit of future scalable quantum computers based on semiconductor spin qubits.

Until fault-tolerant quantum computation can be realized, computational demonstrations using noisy intermediate-scale quantum (NISQ) devices provide valuable proofs of principle (Preskill, 2018). Examples that can be tackled with noisy devices are simulations of condensed matter and quantum chemistry as well as optimization problems. Analog quantum simulations of condensed matter systems with three to four spin qubits have been demonstrated (Dehollain et al., 2020; van Diepen et al., 2021; Hensgens et al., 2017). On the level of two qubits, the variational quantum eigensolver method (Xue et al., 2021b) as well as small quantum algorithms (Noiri et al., 2021) have been implemented.

Ultimately, the utility of spin qubits, and in fact all other quantum computing platforms, lies in their ability to reach quantum fault-tolerance, since practical appli cations depend on a scale demanding lower-error operation than will be possible without quantum error correction. It is not clear when we can declare any qubit is good enough for fault-tolerance, since many estimates of fault-tolerant thresholds, for example for the popular surface code (Fowler et al., 2012), make geometric layout and error-correlation assumptions which are certainly not consistent with semiconductor spin qubits as presently operated. Nearer-term approaches to error corrected logical qubits may nonetheless be pursued, even in strictly one-dimensional qubit arrays using the methodologies and geometries presently under study (Jones et al., 2016), from which we may anticipate significant discovery, not only about the pathways to scalable quantum computers, but also to serendipitous advances in the understanding of the physics of solid-state devices.

## Appendix A: Spin Rotation Gates

In this article we have discussed multiple encodings of spin-qubits in terms of spin-operators S, which are typically represented as Pauli operators. However, we reserve the notation of Pauli operators represented as

Pauli matrices,

$$
\sigma^ {x} = \left( \begin{array}{c c} 0 & 1 \\ 1 & 0 \end{array} \right), \quad \sigma^ {y} = \left( \begin{array}{c c} 0 & - i \\ i & 0 \end{array} \right), \quad \sigma^ {z} = \left( \begin{array}{c c} 1 & 0 \\ 0 & - 1 \end{array} \right),
$$

for the two encoded states of qubits |0i and |1i. Canonical quantum computing is accomplished by application of unitary qubit rotations generated by Pauli operators, i.e. single-qubit operations

$$
R _ {\mathbf {n}} (\theta) = e ^ {- i \mathbf {n} \cdot \pmb {\sigma} \theta / 2}\tag{A1}
$$

and two-qubit operations such as the controlled-Z operation

$$
U _ {\mathrm{CZ}} = e ^ {- i (\pi / 4) (1 - \sigma^ {z}) \otimes (1 - \sigma^ {z})}.\tag{A2}
$$

Two-qubit gates for semiconductor spin qubits are generally drawn from two families, the controlled-rotations such as controlled-NOT and controlled-Z which resul from single-qubit rotations of the two-qubit unitary $\exp ( - i \theta \sigma _ { 1 } ^ { z } \sigma _ { 2 } ^ { z } )$ , with $\theta = \pi / 4$ for a fully entangling gate; and fractional swaps, which result from single-qubit rotations of the two-qubit unitary $\exp ( - i \theta \pmb { \sigma } _ { 1 } \cdot \pmb { \sigma } _ { 2 } )$ , with a swap at $\theta = \pi / 4$ <sub>and a fully entangling</sub> √<sub>swap at</sub> $\theta = \pi / 8$

A π-pulse with unitary $R _ { \mathbf { n } } ( \pi )$ applies −in · σ, so if n is along x, y, or z this is a Pauli operator with an overall phase. A Pauli-operator or π-pulse applies ±1 to the two eigenstates of a qubit in the associated basis. In the twospin singlet-triplet basis, a π pulse of the exchange operator, $U = \exp \{ - i \pi { \bf S } _ { 1 } \cdot { \bf S } _ { 2 } \}$ applies a spin-swap, which from the antisymmetry of the spin-pair for the singlet and symmetry for the triplet states, applies a −1 phase to singlet and so is analogous to the Pauli operations for singlet-triplet and exchange-only systems. Exchange occurring for arbitrary duration generates a superposition of swapping and not swapping spins, so that

$$
\exp \{- i \theta \mathbf {S} _ {1} \cdot \mathbf {S} _ {2} \} \sim \exp \{- i \sigma^ {z} \theta / 2 \} = R _ {\mathbf {z}} (\theta).\tag{A3}
$$

Single qubits driven by RF signals (e.g. single-spin qubits controlled by ESR or EDSR, RX qubits, etc.) use a rotating frame for single-qubit control. This means that the laboratory-frame Hamiltonian for qubit j is

$$
H _ {j} (t) = \frac {\hbar \omega_ {j}}{2} \sigma^ {z} + \hbar \Omega \cos (\omega t + \phi) \sigma^ {x},\tag{A4}
$$

where ω is the driving frequency, $\phi$ is the drive phase relative to a local oscillator, and Ω is proportional to the amplitude of the driving RF or microwave field. In a rotating-frame analysis, we presume the driving frequency ω is close to the qubit resonant frequency $\omega _ { j }$ and both of these are always much larger than the Rabi frequnecy Ω. Under these assumptions we transform $H _ { j }$ and other operators to a frame rotating at the drive frequency ω and local oscillator phase for each qubit,

$$
\begin{array}{l} \tilde {H} _ {j} (t) = e ^ {i \omega t \sigma^ {z} / 2} \left[ H _ {j} (t) - \frac {\hbar \omega}{2} \sigma^ {z} \right] e ^ {- i \omega t \sigma^ {z} / 2} \\ = \frac {\hbar}{2} \left[ (\omega_ {j} - \omega) \sigma^ {z} + \Omega \{[ 1 + \cos (2 \omega t) ] [ \sigma^ {x} \cos \phi + \sigma^ {y} \sin \phi ] - \sin (2 \omega t) [ \sigma^ {x} \sin \phi + \sigma^ {y} \cos \phi ] \} \right] \end{array} \tag {A5}
$$

The terms oscillating at frequency 2ω with amplitude Ω, when $\Omega \ll \omega ,$ , are generally negligible; the lowest-order efect of these terms is the Bloch-Siegert shift(Abragam, 1961) which amounts to a slight detuning of the resonance of order $( \Omega / \omega ) ^ { 2 }$ . As such, these terms are generally dropped, resulting in the nominally time-independent rotating-frame Hamiltonian

$$
\tilde {H} _ {j} = \frac {\hbar}{2} [ \Omega (\sigma^ {x} \cos \phi + \sigma^ {y} \sin \phi) + \Delta \omega_ {j} \sigma^ {z} ]\tag{A6}
$$

for which $U = \mathrm { e x p } \Bigl ( - i \tilde { H } _ { j } t / \hbar \Bigr )$ enables any single qubit rotation $R _ { \mathbf { n } } ( \theta )$ via control of the amplitude Ω, phase φ, and detuning ∆ω of the drive frequency. Since phase φ is relative to a local oscillator, a z-axis rotation is generally accomplished by a frame-shift, in which the phase of the local oscillator is updated without touching the qubit.

## ACKNOWLEDGMENTS

We thank John B. Carpenter of HRL Laboratories, LLC for assistance generating the figures in this manuscript. GB and JRP acknowledge the support of Army Research Ofice Grant No. W911NF-15-1-0149. GB also acknowledges funding from the European Union under Grant Agreement No. 951852 (Quantum Technology Flagship / QLSI) and German Research Foundation (Deutsche Forschungsgemeinschaft, DFG) under project number 450396347. JMN acknowledges support of Army Research Ofice Grant Nos. W911NF-16-1-0260 and W911NF-19-1-0167 and Ofice of Ofice of Naval Research Grant No. N00014-20-1-2424. The views and conclusions contained in this document are those of the authors and should not be interpreted as representing the oficial policies, either expressed or implied, of the Army Research Ofice or the U.S. Government. The U.S. Government is authorized to reproduce and distribute reprints for Government purposes notwithstanding any copyright notation herein.

## REFERENCES

Abragam, A. (1961), The Principles of Nuclear Magnetism, International series of monographs on physics (Clarendon Press).

Abragam, A., and M. Goldman (1978), Rep. Prog. Phys. 41, 395.

Abram, R., and M. Jaros (1989), Band Structure Engineering in Semiconductor Microstructures (Plenum Press).

Ando, T., A. B. Fowler, and F. Stern (1982), Rev. Mod. Phys. 54, 437.

Andrews, R. W., C. Jones, M. D. Reed, A. M. Jones, S. D. Ha, M. P. Jura, J. Kerckhof, M. Levendorf, S. Meenehan, S. T. Merkel, A. Smith, B. Sun, A. J. Weinstein, M. T. Rakher, T. D. Ladd, and M. G. Borselli (2019), Nat. Nanotechnol. 14, 747.

Angus, S. J., A. J. Ferguson, A. S. Dzurak, and R. G. Clark (2007), Nano Lett. 7, 2051.

Ansaloni, F., A. Chatterjee, H. Bohuslavskyi, B. Bertrand, L. Hutin, M. Vinet, and F. Kuemmeth (2020), Nat. Commun. 11, 6399.

Asaad, S., V. Mourik, B. Joecker, M. A. I. Johnson, A. D. Baczewski, H. R. Firgau, M. T. Madzik, V. Schmitt, J. J. Pla, F. E. Hudson, K. M. Itoh, J. C. McCallum, A. S. Dzurak, A. Laucht, and A. Morello (2020), Nature 579, 205.

Assali, L. V., H. M. Petrilli, R. B. Capaz, B. Koiller, X. Hu, and S. D. Sarma (2011), Phys. Rev. B 83 (16), 165301.

Astner, T., S. Nevlacsil, N. Peterschofsky, A. Angerer, S. Rotter, S. Putz, J. Schmiedmayer, and J. Majer (2017), Phys. Rev. Lett. 118, 140502.

Baart, T. A., T. Fujita, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2017), Nature Nano. 12, 26.

Baart, T. A., S. Shafiei, F. Takafumi, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2016), Nature Nano. 11, 330.

Bacon, D., J. Kempe, D. A. Lidar, and K. B. Whaley (2000), Phys. Rev. Lett. 85, 1758.

Bakker, M. A., S. Mehl, T. Hiltunen, A. Harju, and D. P. DiVincenzo (2015), Phys. Rev. B 91, 155425.

Barnes, E., J. P. Kestner, N. T. T. Nguyen, and S. Das Sarma (2011), Phys. Rev. B 84, 235309.

Barnes, E., M. S. Rudner, F. Martins, F. K. Malinowski, C. M. Marcus, and F. Kuemmeth (2016), Phys. Rev. B 93, 121407.

Barthel, C., M. Kjærgaard, J. Medford, M. Stopa, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2010), Phys. Rev. B 81, 161308.

Barthel, C., J. Medford, H. Bluhm, A. Yacoby, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2012), Phys. Rev. B 85, 035306.

Barthel, C., D. J. Reilly, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2009), Phys. Rev. Lett. 103, 160503.

Barufa, F., P. Stano, and J. Fabian (2010a), Phys. Rev. B 82, 045311.

Barufa, F., P. Stano, and J. Fabian (2010b), Phys. Rev. Lett. 104, 126401.

Bastard, G. (1991), Wave Mechanics Applied to Semiconductor Heterostructures (Wiley).

Beaudoin, F., and W. A. Coish (2015), Phys. Rev. B 91, 165432.

Benito, M., X. Croot, C. Adelsberger, S. Putz, X. Mi, J. R. Petta, and G. Burkard (2019a), Phys. Rev. B 100, 125430.

Benito, M., X. Mi, J. M. Taylor, J. R. Petta, and G. Burkard (2017), Phys. Rev. B 96, 235434.

Benito, M., J. R. Petta, and G. Burkard (2019b), Phys. Rev. B 100, 081412.

Benito, M., M. J. A. Schuetz, J. I. Cirac, G. Platero, and G. Giedke (2016), Phys. Rev. B 94, 115404.

Bertrand, B., H. Flentje, S. Takada, M. Yamamoto, S. Tarucha, A. Ludwig, A. D. Wieck, C. B¨auerle, and T. Meunier (2015), Phys. Rev. Lett. 115, 096801.

Bertrand, B., S. Hermelin, S. Takada, M. Yamamoto, S. Tarucha, A. Ludwig, A. D. Wieck, C. B¨auerle, and T. Meunier (2016), Nature Nano. 11, 672.

Betz, A. C., M. F. Gonzalez-Zalba, G. Podd, and A. J. Ferguson (2014), Appl. Phys. Lett. 105, 153113.

van Beveren, L. H. W., R. Hanson, I. T. Vink, F. H. L. Koppens, L. P. Kouwenhoven, and L. M. K. Vandersypen (2005), New J. Phys. 7, 182.

Blais, A., J. Gambetta, A. Wallraf, D. I. Schuster, S. M. Girvin, M. H. Devoret, and R. J. Schoelkopf (2007), Phys. Rev. A 75, 032329.

Blais, A., S. M. Girvin, and W. D. Oliver (2020), Nature Physics 16 (3), 247.

Blais, A., A. L. Grimsmo, S. M. Girvin, and A. Wallraf (2021), Rev. Mod. Phys. 93, 025005.

Blais, A., R.-S. Huang, A. Wallraf, S. M. Girvin, and R. J. Schoelkopf (2004), Phys. Rev. A 69, 062320.

Bluhm, H., S. Foletti, D. Mahalu, V. Umansky, and A. Yacoby (2010a), Phys. Rev. Lett. 105, 216803.

Bluhm, H., S. Foletti, I. Neder, M. S. Rudner, D. Mahalu, V. Umansky, and A. Yacoby (2010b), Nat. Phys. 7, 109.

Bohuslavskyi, H., D. Kotekar-Patil, R. Maurand, A. Corna, S. Barraud, L. Bourdet, L. Hutin, Y.-M. Niquet, X. Jehl, S. De Franceschi, M. Vinet, and M. Sanquer (2016), Appl. Phys. Lett. 109, 193101.

Borjans, F., X. G. Croot, X. Mi, M. J. Gullans, and J. R. Petta (2020), Nature 577, 195.

Borjans, F., X. Mi, and J. Petta (2021a), Phys. Rev. Applied 15, 044052.

Borjans, F., D. M. Zajac, T. M. Hazard, and J. R. Petta (2019), Phys. Rev. Applied 11, 044063.

Borjans, F., X. Zhang, X. Mi, G. Cheng, N. Yao, C. Jackson, L. Edge, and J. Petta (2021b), PRX Quantum 2, 020309.

Borselli, M. G., R. S. Ross, A. A. Kiselev, E. T. Croke, K. S. Holabird, P. W. Deelman, L. D. Warren, I. Alvarado-Rodriguez, I. Milosavljevic, F. C. Ku, W. S. Wong, A. E. Schmitz, M. Sokolich, M. F. Gyure, and A. T. Hunter (2011), Appl. Phys. Lett. 98, 375202.

Bose, S. (2003), Phys. Rev. Lett. 91, 207901.

Bose, S. (2007), Contemp. Phys. 48, 13.

Bottcher, C. G. L., S. P. Harvey, S. Fallahi, G. C. Gardner, M. J. Manfra, U. Vool, S. D. Bartlett, and A. Yacoby (2021), arXiv:2107.10269.

Botzem, T., M. D. Shulman, S. Foletti, S. P. Harvey, O. E. Dial, P. Bethke, P. Cerfontaine, R. P. G. McNeil, D. Mahalu, V. Umansky, A. Ludwig, A. Wieck, D. Schuh, D. Bougeard, A. Yacoby, and H. Bluhm (2018), Phys. Rev. Applied 10, 054026.

Boykin, T. B., G. Klimeck, M. Friesen, S. N. Coppersmith, P. von Allmen, F. Oyafuso, and S. Lee (2004), Phys. Rev. B 70, 165325.

Braakman, F. R., P. Barthelemy, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2013), Nature Nano. 8, 432.

Bracker, A. S., E. A. Stinaf, D. Gammon, M. E. Ware, J. G. Tischler, A. Shabaev, A. L. Efros, D. Park, D. Gershoni, V. L. Korenev, and I. A. Merkulov (2005), Phys. Rev. Lett. 94, 047402.

Brataas, A., and E. I. Rashba (2011), Phys. Rev. B 84, 045301.

Brauns, M., J. Ridderbos, A. Li, E. P. A. M. Bakkers, and F. A. Zwanenburg (2016), Phys. Rev. B 93, 121408.

Broome, M. A., S. K. Gorman, M. G. House, S. J. Hile, J. G. Keizer, D. Keith, C. D. Hill, T. F. Watson, W. J. Baker, L. C. L. Hollenberg, and M. Y. Simmons (2018), Nat. Commun. 9, 980.

Broome, M. A., T. F. Watson, D. Keith, S. K. Gorman, M. G. House, J. G. Keizer, S. J. Hile, W. Baker, and M. Y. Simmons (2017), Phys. Rev. Lett. 119, 046802.

Bruhat, L. E., J. J. Viennot, M. C. Dartiailh, M. M. Desjardins, T. Kontos, and A. Cottet (2016), Phys. Rev. X 6, 021014.

Brunner, R., Y.-S. Shin, T. Obata, M. Pioro-Ladri\`ere, T. Kubo, K. Yoshida, T. Taniyama, Y. Tokura, and S. Tarucha (2011), Phys. Rev. Lett. 107, 146801.

Burkard, G. (2009), Phys. Rev. B 79, 125317.

Burkard, G., M. J. Gullans, X. Mi, and J. R. Petta (2020), Nat. Rev. Phys. 2, 129.

Burkard, G., and A. Imamoglu (2006), Phys. Rev. B 74, 041307.

Burkard, G., D. Loss, and D. P. DiVincenzo (1999a), Phys. Rev. B 59, 2070.

Burkard, G., D. Loss, D. P. DiVincenzo, and J. A. Smolin (1999b), Phys. Rev. B 60, 11404.

Burkard, G., and J. R. Petta (2016), Phys. Rev. B 94, 195305.

Bussmann, E., M. Rudolph, G. S. Subramania, S. Misra, S. M. Carr, E. Langlois, J. Dominguez, T. Pluym, M. P. Lilly, and M. S. Carroll (2015), Nanotechnol. 26, 085701.

Calder´on, M. J., B. Koiller, and S. Das Sarma (2006), Phys. Rev. B 74, 045310.

Calderon-Vargas, F. A., and J. P. Kestner (2018), Phys. Rev. B 97, 125311.

Camenzind, L. C., L. Yu, P. Stano, J. D. Zimmerman, A. C. Gossard, D. Loss, and D. M. Zumbuhl (2018), Nat. Commun. 9, 3454.

Campos Venuti, L., C. Degli Esposti Boschi, and M. Roncaglia (2006), Phys. Rev. Lett. 96, 247206.

Cayao, J., M. Benito, and G. Burkard (2020), Phys. Rev. B 101, 195438.

Cerfontaine, P., T. Botzem, J. Ritzmann, S. S. Humpohl, A. Ludwig, D. Schuh, D. Bougeard, A. D. Wieck, and H. Bluhm (2020a), Nat. Commun. 11, 4144.

Cerfontaine, P., R. Otten, M. A. Wolfe, P. Bethke, and H. Bluhm (2020b), Phys. Rev. B 101, 155311.

Chan, K. W., W. Huang, C. H. Yang, J. C. C. Hwang, B. Hensen, T. Tanttu, F. E. Hudson, K. M. Itoh, A. Laucht, A. Morello, and A. S. Dzurak (2018), Phys. Rev. Applied 10, 044017.

Chan, K. W., H. Sahasrabudhe, W. Huang, Y. Wang, H. C. Yang, M. Veldhorst, J. C. C. Hwang, F. A. Mohiyaddin, F. E. Hudson, K. M. Itoh, A. Saraiva, A. Morello, A. Laucht, R. Rahman, and A. S. Dzurak (2021), Nano Lett. 21, 1517.

Chatzisavvas, K. C., G. Chadzitaskos, C. Daskaloyannis, and S. G. Schirmer (2009), Phys. Rev. A 80, 052329.

Chekhovich, E. A., M. N. Makhonin, A. I. Tartakovskii, A. Yacoby, H. Bluhm, K. C. Nowack, and L. M. K. Vandersypen (2013), Nature Mater. 12, 494.

Chen, E. H., K. Raach, A. Pan, A. A. Kiselev, E. Acuna, J. Z. Blumof, T. Brecht, M. D. Choi, W. Ha, D. R. Hulbert, M. P. Jura, T. E. Keating, R. Noah, B. Sun, B. J. Thomas, M. G. Borselli, C. Jackson, M. T. Rakher, and R. S. Ross (2021), Phys. Rev. Applied 15, 044033.

Childress, L., and R. Hanson (2013), MRS Bull. 38, 134.

Childress, L., A. S. Sorensen, and M. D. Lukin (2004), Phys. Rev. A 69, 042302.

Childs, A. M., and W. van Dam (2010), Rev. Mod. Phys. 82, 1.

Chiorescu, I., P. Bertet, K. Semba, Y. Nakamura, C. J. P. M. Harmans, and J. E. Mooij (2004), Nature 431, 159.

Chirolli, L., and G. Burkard (2008), Adv. Phys. 57, 225.

Churchill, H. O. H., F. Kuemmeth, J. W. Harlow, A. J. Bestwick, E. I. Rashba, K. Flensberg, C. H. Stwertka, T. Taychatanapat, S. K. Watson, and C. M. Marcus (2009), Phys. Rev. Lett. 102, 166802.

Chutia, S., M. Friesen, and R. Joynt (2006), Phys. Rev. B 73, 241304.

Ciorga, M., A. S. Sachrajda, P. Hawrylak, C. Gould, P. Zawadzki, S. Jullian, Y. Feng, and Z. Wasilewski (2000), Phys. Rev. B 61, R16315.

Coish, W. A., and D. Loss (2004), Phys. Rev. B 70, 195340.

Coish, W. A., and D. Loss (2005), Phys. Rev. B 72, 125337.

Colless, J. I., A. C. Mahoney, J. M. Hornibrook, A. C. Doherty, H. Lu, A. C. Gossard, and D. J. Reilly (2013), Phys. Rev. Lett. 110, 046805.

Collett, M. J., and C. W. Gardiner (1984), Phys. Rev. A 30, 1386.

Connors, E. J., J. J. Nelson, and J. M. Nichol (2020), Phys. Rev. Applied 13, 024019.

Connors, E. J., J. J. Nelson, and J. M. Nichol (2021), arXiv:2103.02448.

Cottet, A., and T. Kontos (2010), Phys. Rev. Lett. 105, 160502.

Crippa, A., R. Maurand, L. Bourdet, D. Kotekar-Patil, A. Amisse, X. Jehl, M. Sanquer, R. Lavi´eville, H. Bohuslavskyi, L. Hutin, S. Barraud, M. Vinet, Y.-M. Niquet, and S. De Franceschi (2018), Phys. Rev. Lett. 120, 137702.

Croot, X. G., X. Mi, S. Putz, M. Benito, F. Borjans, G. Burkard, and J. R. Petta (2020), Phys. Rev. Research 2, 012006(R).

Cubaynes, T., M. R. Delbecq, M. C. Dartiailh, R. Assouly, M. M. Desjardins, L. C. Contamin, L. E. Bruhat, Z. Leghtas, F. Mallet, A. Cottet, and T. Kontos (2019), npj Quantum Inf. 5, 47.

Culcer, D., X. Hu, and S. Das Sarma (2009), Appl. Phys. Lett. 95, 073102.

Culcer, D., X. Hu, and S. D. Sarma (2010), Physical Review B 82 (20), 205315.

Culcer, D., and N. M. Zimmerman (2013), Appl. Phys. Lett. 102, 232108.

Cywinski, L., R. M. Lutchyn, C. P. Nave, and S. Das Sarma (2008), Phys. Rev. B 77, 174509.

D’Anjou, B., and G. Burkard (2019), Phys. Rev. B 100, 245427.

Danon, J. (2013), Phys. Rev. B 88, 075306.

Dartiailh, M. C., T. Kontos, B. Dou¸cot, and A. Cottet (2017), Phys. Rev. Lett. 118, 126803.

Das Sarma, S., M. Freedman, and C. Nayak (2006), Phys. Today 59, 32.

Das Sarma, S., M. Freedman, and C. Nayak (2015), npj Quantum Info. 1, 15001.

Datta, S. (1986), Surface acoustic wave devices (Prentice-Hall).

De Greve, K., P. L. McMahon, D. Press, T. D. Ladd, D. Bisping, C. Schneider, M. Kamp, L. Worschech, S. H¨ofling, A. Forchel, and Y. Yamamoto (2011), Nat. Phys. 7, 872.

Deelman, P. W., L. F. Edge, and C. A. Jackson (2016), MRS Bull. 41, 224.

Dehollain, J. P., U. Mukhopadhyay, V. P. Michal, Y. Wang, B. Wunsch, C. Reichl, W. Wegscheider, M. S. Rudner,

E. Demler, and L. M. K. Vandersypen (2020), Nature 579, 528.

Delbecq, M. R., T. Nakajima, P. Stano, T. Otsuka, S. Amaha, J. Yoneda, K. Takeda, G. Allison, A. Ludwig, A. D. Wieck, and S. Tarucha (2016), Phys. Rev. Lett. 116, 046802.

Deng, K., and E. Barnes (2020), Phys. Rev. B 102, 035427.

Deng, K., F. A. Calderon-Vargas, N. J. Mayhall, and E. Barnes (2018), Phys. Rev. B 97, 245301.

Desjardins, M. M., J. J. Viennot, M. C. Dartiailh, L. E. Bruhat, M. R. Delbecq, M. Lee, M.-S. Choi, A. Cottet, and T. Kontos (2017), Nature 545, 71.

Dial, O. E., M. D. Shulman, S. P. Harvey, H. Bluhm, V. Umansky, and A. Yacoby (2013), Phys. Rev. Lett. 110, 146804.

DiCarlo, L., H. J. Lynch, A. C. Johnson, L. I. Childress, K. Crockett, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2004), Phys. Rev. Lett. 92, 226801.

van Diepen, C. J., P. T. Eendebak, B. T. Buijtendorp, U. Mukhopadhyay, T. Fujita, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2018), Appl. Phys. Lett. 113, 033101.

van Diepen, C. J., T.-K. Hsiao, U. Mukhopadhyay, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2021), Phys. Rev. X 11, 041025.

DiVincenzo, D. P. (1995), Science 270, 255.

DiVincenzo, D. P. (1998), Proc. R. Soc. Lond., A Math. Phys. Sci. 454, 261.

DiVincenzo, D. P. (2000), Fortschr. Phys. 48, 771.

DiVincenzo, D. P., D. Bacon, J. Kempe, G. Burkard, and K. B. Whaley (2000), Nature 408, 339.

Doherty, A. C., and M. P. Wardrop (2013), Phys. Rev. Lett. 111, 050503.

Doherty, M. W., N. B. Manson, P. Delaney, F. Jelezko, J. Wrachtrup, and L. C. L. Hollenberg (2013), Phys. Rep. 528, 1.

Dutta, P., and P. M. Horn (1981), Rev. Mod. Phys. 53, 497.

Ekert, A., and R. Jozsa (1996), Rev. Mod. Phys. 68, 733.

Elzerman, J. M., R. Hanson, J. S. Greidanus, L. H. Willems van Beveren, S. De Franceschi, L. M. K. Vandersypen, S. Tarucha, and L. P. Kouwenhoven (2003), Phys. Rev. B 67, 161308.

Elzerman, J. M., R. Hanson, L. H. Willems van Beveren, B. Witkamp, L. M. K. Vandersypen, and L. P. Kouwenhoven (2004), Nature 430, 431.

Eng, K., T. D. Ladd, A. Smith, M. G. Borselli, A. A. Kiselev, B. H. Fong, K. S. Holabird, T. M. Hazard, B. Huang, P. W. Deelman, I. Milosavljevic, A. E. Schmitz, R. S. Ross, M. F. Gyure, and A. T. Hunter (2015), Sci. Adv. 1, 1500214.

Ercan, H. E., S. N. Coppersmith, and M. Friesen (2021), arXiv:2105.10645.

Erlingsson, S. I., and Y. V. Nazarov (2002), Phys. Rev. B 66, 155327.

Fedele, F., A. Chatterjee, S. Fallahi, G. C. Gardner, M. J. Manfra, and F. Kuemmeth (2021), PRX Quantum 2, 040306.

Feher, G. (1959), Phys. Rev. 114, 1219.

Feher, G., J. P. Gordon, E. Buehler, E. A. Gere, and C. D. Thurmond (1958), Phys. Rev. 109, 221.

Ferdous, R., E. Kawakami, P. Scarlino, M. P. Nowak, D. R. Ward, D. E. Savage, M. G. Lagally, S. N. Coppersmith, M. Friesen, M. A. Eriksson, L. M. K. Vandersypen, and R. Rahman (2018), npj Quantum Inf. 4, 26.

Feynman, R. P. (1982), Int. J. Theor. Phys. 21, 467.

Field, M., C. G. Smith, M. Pepper, D. A. Ritchie, J. E. F.

Frost, G. A. C. Jones, and D. G. Hasko (1993), Phys. Rev. Lett. 70, 1311.

Flindt, C., A. S. Sørensen, and K. Flensberg (2006), Phys. Rev. Lett. 97, 240501.

Fogarty, M. A., K. W. Chan, B. Hensen, W. Huang, T. Tanttu, C. H. Yang, A. Laucht, M. Veldhorst, F. E. Hudson, K. M. Itoh, D. Culcer, T. D. Ladd, A. Morello, and A. S. Dzurak (2018), Nat. Commun. 9, 4370.

Foletti, S., H. Bluhm, D. Mahalu, V. Umansky, and A. Yacoby (2009), Nature Phys. 5, 903.

Fong, B. H., and S. M. Wandzura (2011), Quantum Info. Comput. 11, 1003.

Fowler, A. G., M. Mariantoni, J. M. Martinis, and A. N. Cleland (2012), Phys. Rev. A 86, 032324.

Freeman, B. M., J. S. Schoenfield, and H. Jiang (2016), Appl. Phys. Lett. 108, 253108.

Frey, T., P. J. Leek, M. Beck, A. Blais, T. Ihn, K. Ensslin, and A. Wallraf (2012), Phys. Rev. Lett. 108, 046807.

Friesen, M., A. Biswas, X. Hu, and D. Lidar (2007), Phys. Rev. Lett. 98, 230503.

Friesen, M., and S. N. Coppersmith (2010), Phys. Rev. B 81, 115324.

Friesen, M., J. Ghosh, M. A. Eriksson, and S. N. Coppersmith (2017), Nat. Commun. 8, 15923.

Froning, F. N. M., L. C. Camenzind, O. A. H. van der Molen, A. Li, E. P. A. M. Bakkers, D. M. Zumbuhl, and F. R. Braakman (2021), Nat. Nanotechnol. 16, 308.

Fuechsle, M., J. A. Miwa, S. Mahapatra, H. Ryu, S. Lee, O. Warschkow, L. C. L. Hollenberg, G. Klimeck, and M. Y. Simmons (2012), Nat. Nanotechnol. 7, 242.

Fujisawa, T., D. G. Austing, Y. Tokura, Y. Hirayama, and S. Tarucha (2002), Nature 419, 278.

Fujita, T., T. A. Baart, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2017), npj Quant. Info. 3, 22.

Gamble, J. K., P. Harvey-Collard, N. T. Jacobson, A. D. Baczewski, E. Nielsen, L. Maurer, I. Monta˜no, M. Rudolph, M. S. Carroll, C. H. Yang, A. Rossi, A. S. Dzurak, and R. P. Muller (2016), Appl. Phys. Lett. 109, 253101.

Gamble, J. K., N. T. Jacobson, E. Nielsen, A. D. Baczewski, J. E. Moussa, I. Monta˜no, and R. P. Muller (2015), Phys. Rev. B 91, 235318.

Gaudreau, L., G. Granger, A. Kam, G. C. Aers, S. A. Studenikin, P. Zawadzki, M. Pioro-Ladriere, Z. R. Wasilewski, and A. S. Sachrajda (2012), Nature Phys. 8, 54.

Gaudreau, L., A. Kam, G. Granger, S. A. Studenikin, P. Zawadzki, and A. S. Sachrajda (2009), Appl. Phys. Lett. 95, 193101.

Gaudreau, L., S. A. Studenikin, A. S. Sachrajda, P. Zawadzki, A. Kam, J. Lapointe, M. Korkusinski, and P. Hawrylak (2006), Phys. Rev. Lett. 97, 036807.

Geyer, S., L. C. Camenzind, L. Czornomaz, V. Deshpande, A. Fuhrer, R. J. Warburton, D. M. Zumb¨uhl, and A. V. Kuhlmann (2021), Appl. Phys. Lett. 118, 104004.

Golovach, V. N., M. Borhani, and D. Loss (2006), Phys. Rev. B 74, 165319.

Golovach, V. N., A. Khaetskii, and D. Loss (2008), Phys. Rev. B 77, 045328.

Golub, L. E., and E. L. Ivchenko (2004), Phys. Rev. B 69 (11), 115333.

Gonzalez-Zalba, M. F., S. Barraud, A. J. Ferguson, and A. C. Betz (2015), Nat. Commun. 6, 6084.

Gordon, J. P., and K. D. Bowers (1958), Phys. Rev. Lett. 1, 368.

Gorman, S. K., M. A. Broome, J. G. Keizer, T. F. Watson,

S. J. Hile, W. J. Baker, and M. Y. Simmons (2016), New J. Phys. 18, 053041.

Gramse, G., A. K¨olker, T. Lim, T. J. Z. Stock, H. Solanki, S. R. Schofield, E. Brinciotti, G. Aeppli, F. Kienberger, and N. J. Curson (2017), Sci. Adv. 3, e1602586.

Granger, G., L. Gaudreau, A. Kam, M. Pioro-Ladri\`ere, S. A. Studenikin, Z. R. Wasilewski, P. Zawadzki, and A. S. Sachrajda (2010), Phys. Rev. B 82, 075304.

Green, T., H. Uys, and M. J. Biercuk (2012), Phys. Rev. Lett. 109, 020501.

Greentree, A. D., J. H. Cole, A. R. Hamilton, and L. C. L. Hollenberg (2004), Phys. Rev. B 70, 235317.

Gullans, M., J. J. Krich, J. M. Taylor, H. Bluhm, B. Halperin, C. M. Marcus, M. Stopa, A. Yacoby, and M. D. Lukin (2010), Phys. Rev. Lett. 104, 226807.

Gullans, M., J. J. Krich, J. M. Taylor, B. Halperin, and M. D. Lukin (2013), Phys. Rev. B 88, 035309.

Gullans, M. J., and J. R. Petta (2020), Phys. Rev. B 102, 155404.

Gustafsson, M., T. Aref, A. Kockum, M. Ekstrom, G. Johansson, and P. Delsing (2014), Science 346, 207.

Gyure, M. F., A. A. Kiselev, R. S. Ross, R. Rahman, and C. G. Van de Walle (2021), MRS Bull. 46, 634.

Ha, W., S. D. Ha, M. D. Choi, Y. Tang, A. E. Schmitz, M. P. Levendorf, K. Lee, J. M. Chappell, T. S. Adams, D. R. Hulbert, E. Acuna, R. S. Noah, J. W. Matten, M. P. Jura, J. A. Wright, M. T. Rakher, and M. G. Borselli (2021), Nano Lett. , (in press).

Hada, Y., and M. Eto (2003), Phys. Rev. B 68, 155322.

Hanson, R., and G. Burkard (2007), Phys. Rev. Lett. 98, 050502.

Hanson, R., L. P. Kouwenhoven, J. R. Petta, S. Tarucha, and L. M. K. Vandersypen (2007), Rev. Mod. Phys. 79, 1217.

Hanson, R., B. Witkamp, L. M. K. Vandersypen, L. H. W. van Beveren, J. M. Elzerman, and L. P. Kouwenhoven (2003), Phys. Rev. Lett. 91, 196802.

Haroche, S., and J. M. Raimond (2006), Exploring the Quantum: Atoms, Cavities, and Photons (Oxford Univ. Press, Oxford).

Hartke, T. R., Y.-Y. Liu, M. J. Gullans, and J. R. Petta (2018), Phys. Rev. Lett. 120, 097701.

Harvey-Collard, P., J. Dijkema, G. Zheng, A. Sammak, G. Scappucci, and L. M. Vandersypen (2021), arXiv:2108.01206.

Harvey-Collard, P., N. T. Jacobson, C. Bureau-Oxton, R. M. Jock, V. Srinivasa, A. M. Mounce, D. R. Ward, J. M. Anderson, R. P. Manginell, J. R. Wendt, T. Pluym, M. P. Lilly, D. R. Luhman, M. Pioro-Ladri\`ere, and M. S. Carroll (2019), Phys. Rev. Lett. 122, 217702.

Harvey-Collard, P., N. T. Jacobson, M. Rudolph, J. Dominguez, G. A. Ten Eyck, J. R. Wendt, T. Pluym, J. K. Gamble, M. P. Lilly, M. Pioro-Ladri\`ere, and M. S. Carroll (2017), Nat. Commun. 8, 1029.

Hatano, T., S. Amaha, T. Kubo, Y. Tokura, Y. Nishi, Y. Hirayama, and S. Tarucha (2008), Phys. Rev. B 77, 241301.

Hayashi, T., T. Fujisawa, H. D. Cheong, Y. H. Jeong, and Y. Hirayama (2003), Phys. Rev. Lett. 91, 226804.

He, Y., S. K. Gorman, D. Keith, L. Kranz, J. G. Keizer, and M. Y. Simmons (2019), Nature 571, 371.

Helsen, J., ingo Roth, E. Onorati, A. Werner, and J. Eisert (2020), arXiv:2010.07974.

Hendrickx, N. W., D. P. Franke, A. Sammak, G. Scappucci, and M. Veldhorst (2020a), Nature 577, 487.

Hendrickx, N. W., W. I. L. Lawrie, L. Petit, A. Sammak,

G. Scappucci, and M. Veldhorst (2020b), Nature Comm. 11, 3478.

Hendrickx, N. W., W. I. L. Lawrie, M. Russ, F. v. Riggelen, S. L. d. Snoo, R. N. Schouten, A. Sammak, G. Scappucci, and M. Veldhorst (2021), Nature 591, 580.

Hensgens, T., T. Fujita, L. Janssen, X. Li, C. J. Van Diepen, C. Reichl, W. Wegscheider, S. Das Sarma, and L. M. K. Vandersypen (2017), Nature 548, 70.

Higginbotham, A. P., F. Kuemmeth, M. P. Hanson, A. C. Gossard, and C. M. Marcus (2014a), Phys. Rev. Lett. 112, 026801.

Higginbotham, A. P., T. W. Larsen, J. Yao, H. Yan, C. M. Lieber, C. M. Marcus, and F. Kuemmeth (2014b), Nano Lett. 14, 3582.

Hile, S. J., L. Fricke, M. G. House, E. Peretz, C. Y. Chen, Y. Wang, M. Broome, S. K. Gorman, J. G. Keizer, R. Rahman, and M. Y. Simmons (2018), Sci. Adv. 4, eaaq1459.

Hill, C. D., E. Peretz, S. J. Hile, M. G. House, M. Fuechsle, S. Rogge, M. Y. Simmons, and L. C. L. Hollenberg (2015), Science Advances 1 (9), e1500707, publisher: American Association for the Advancement of Science.

Hofmann, A., V. Maisi, T. Kr¨ahenmann, C. Reichl, W. Wegscheider, K. Ensslin, and T. Ihn (2017), Phys. Rev. Lett. 119, 176807.

Hollmann, A., T. Struck, V. Langrock, A. Schmidbauer, F. Schauer, T. Leonhardt, K. Sawano, H. Riemann, N. V. Abrosimov, D. Bougeard, and L. R. Schreiber (2020), Phys. Rev. Applied 13, 034068.

Hosseinkhani, A., and G. Burkard (2021), Phys. Rev. B 104, 085309.

Hu, X. (2011), Phys. Rev. B 83, 165322.

Hsiao, T. K., C. J. van Diepen, U. Mukhopadhyay, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2020), Phys. Rev. Applied 13, 054018.

Hu, X., and S. Das Sarma (2000), Phys. Rev. A 61, 062301.

Hu, X., and S. Das Sarma (2001), Phys. Rev. A 64, 042312.

Hu, X., and S. Das Sarma (2006), Phys. Rev. Lett. 96, 100501.

Hu, X., Y.-x. Liu, and F. Nori (2012), Phys. Rev. B 86, 035314.

Huang, P., and X. Hu (2014a), Phys. Rev. B 89, 195302.

Huang, P., and X. Hu (2014b), Phys. Rev. B 90, 235315.

Huang, W., C. H. Yang, K. W. Chan, T. Tanttu, B. Hensen, R. C. C. Leon, M. A. Fogarty, J. C. C. Hwang, F. E. Hudson, K. M. Itoh, A. Morello, A. Laucht, and A. S. Dzurak (2019), Nature 569, 532.

Imamoglu, A., D. D. Awschalom, G. Burkard, D. P. DiVincenzo, D. Loss, M. Sherwin, and A. Small (1999), Phys. Rev. Lett. 83, 4204.

Ithier, G., E. Collin, P. Joyez, P. J. Meeson, D. Vion, D. Esteve, F. Chiarello, A. Shnirman, Y. Makhlin, J. Schriefl, and G. Schon (2005), Phys. Rev. B 72, 134519.

Jadot, B., P. Mortemousque, E. Chanrion, V. Thiney, A. Ludwig, A. Wieck, M. Urdampilleta, C. Bauerle, and T. Meunier (2021), Nature Nano. 16, 570.

Jaynes, E., and F. Cummings (1963), Proc. IEEE 51, 89.

Jin, P.-Q., M. Marthaler, A. Shnirman, and G. Sch¨on (2012), Phys. Rev. Lett. 108, 190506.

Jirovec, D., A. Hofmann, A. Ballabio, P. M. Mutter, G. Tavani, M. Botifoll, A. Crippa, J. Kukucka, O. Sagi, F. Martins, J. Saez-Mollejo, I. Prieto, M. Borovkov, J. Arbiol, D. Chrastina, G. Isella, and G. Katsaros (2021), Nat. Mater. 20, 1106.

Jock, R. M., N. T. Jacobson, P. Harvey-Collard, A. M. Mounce, V. Srinivasa, D. R. Ward, J. Anderson,

R. Manginell, J. R. Wendt, M. Rudolph, T. Pluym, J. K. Gamble, A. D. Baczewski, W. M. Witzel, and M. S. Carroll (2018), Nature Comm. 9, 1768.

Jock, R. M., N. T. Jacobson, M. Rudolph, D. R. Ward, M. S. Carroll, and D. R. Luhman (2021), arXiv:2102.12068.

Joecker, B., A. D. Baczewski, J. K. Gamble, J. J. Pla, A. Saraiva, and A. Morello (2020), arXiv:2012.06293.

Johnson, A. C., J. R. Petta, and C. M. Marcus (2005a), Phys. Rev. B 72, 165308.

Johnson, A. C., J. R. Petta, J. M. Taylor, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2005b), Nature 435, 925.

Jones, A., E. Pritchett, E. Chen, T. Keating, R. Andrews, J. Blumof, L. De Lorenzo, K. Eng, S. Ha, A. Kiselev, S. Meenehan, S. Merkel, J. Wright, L. Edge, R. Ross, M. Rakher, M. Borselli, and A. Hunter (2019), Phys. Rev. Applied 12, 014026.

Jones, C., M. F. Gyure, T. D. Ladd, M. A. Fogarty, A. Morello, and A. S. Dzurak (2016), Phys. Rev. X 8, 021058.

Jordan, S. (2021), “The quantum algorithm zoo,” Available at http://math.nist.gov/quantum/zoo/ (2021/04/26).

Jouravlev, O. N., and Y. V. Nazarov (2006), Phys. Rev. Lett. 96, 176804.

Kandel, Y. P., H. Qiao, S. Fallahi, G. C. Gardner, M. J. Manfra, and J. M. Nichol (2019), Nature 573, 553.

Kandel, Y. P., H. Qiao, S. Fallahi, G. C. Gardner, M. J. Manfra, and J. M. Nichol (2021), Nature communications 12 (1), 1.

Kane, B. E. (1998), Nature 393, 133.

Kastner, M. A. (1992), Rev. Mod. Phys. 64, 849.

Kato, Y., R. C. Myers, D. C. Driscoll, A. C. Gossard, J. Levy, and D. D. Awschalom (2003), Science 299, 1201.

Kavokin, K. V. (2001), Phys. Rev. B 64, 075305.

Kavokin, K. V. (2004), Phys. Rev. B 69, 075302.

Kawakami, E., T. Jullien, P. Scarlino, D. R. Ward, D. E. Savage, M. G. Lagally, V. V. Dobrovitski, M. Friesen, S. N. Coppersmith, M. A. Eriksson, and L. M. K. Vandersypen (2016), Proc. Natl. Acad. Sci. 113, 11738.

Kawakami, E., P. Scarlino, D. R. Ward, F. R. Braakman, D. E. Savage, M. G. Lagally, M. Friesen, S. N. Coppersmith, M. A. Eriksson, and L. M. K. Vandersypen (2014), Nat. Nanotechnol. 9, 666.

Keith, D., S. K. Gorman, L. Kranz, Y. He, J. G. Keizer, M. A. Broome, and M. Y. Simmons (2019a), New J. Phys. 21, 063011.

Keith, D., M. G. House, M. B. Donnelly, T. F. Watson, B. Weber, and M. Y. Simmons (2019b), Phys. Rev. X 9, 041003.

Keller, M., A. Eichenberger, J. Martinis, and N. Zimmerman (1999), Science 285, 1706.

Keller, M. W., J. M. Martinis, N. M. Zimmerman, and A. H. Steinbach (1996), Appl. Phys. Lett. 69, 1804.

Kempe, J., D. Bacon, D. A. Lidar, and K. B. Whaley (2001), Phys. Rev. A 63, 042307.

Kerckhof, J., B. Sun, B. H. Fong, C. Jones, A. A. Kiselev, D. W. Barnes, R. S. Noah, E. Acuna, M. Akmal, S. D. Ha, J. A. Wright, B. J. Thomas, C. A. C. Jackson, L. F. Edge, K. Eng, R. S. Ross, and T. D. Ladd (2021), PRX Quantum 2, 010347.

Kerman, A. J. (2013), New J. Phys. 15, 123011.

Khaetskii, A. V., and Y. V. Nazarov (2001), Phys. Rev. B 64, 125316.

Kim, D., Z. Shi, C. B. Simmons, D. R. Ward, J. R. Prance, T. S. Koh, J. K. Gamble, D. E. Savage, M. G. Lagally,

M. Friesen, S. N. Coppersmith, and M. A. Eriksson (2014), Nature 511, 70.

Kimble, H. J. (2008), Nature 453, 1023.

Klauser, D., W. A. Coish, and D. Loss (2006), Phys. Rev. B 73, 205302.

Klinovaja, J., D. Stepanenko, B. I. Halperin, and D. Loss (2012), Phys. Rev. B 86, 085423.

Koch, M., J. G. Keizer, P. Pakkiam, D. Keith, M. G. House, E. Peretz, and M. Y. Simmons (2019), Nat. Nanotechnol. 14, 137.

Kogan, A., S. Amasha, D. Goldhaber-Gordon, G. Granger, M. A. Kastner, and H. Shtrikman (2004), Phys. Rev. Lett. 93, 166602.

Koh, T. S., J. K. Gamble, M. Friesen, M. A. Eriksson, and S. N. Coppersmith (2012), Phys. Rev. Lett. 109, 250503.

Koiller, B., X. Hu, and S. Das Sarma (2001), Phys. Rev. Lett. 88, 027903.

Koiller, B., X. Hu, and S. Das Sarma (2002), Phys. Rev. B 66, 115201.

Koppens, F. H. L., C. Buizert, K. J. Tielrooij, I. T. Vink, K. C. Nowack, T. Meunier, L. P. Kouwenhoven, and L. M. K. Vandersypen (2006), Nature 442, 766.

Koppens, F. H. L., J. A. Folk, J. M. Elzerman, R. Hanson, L. H. W. van Beveren, I. T. Vink, H. P. Tranitz, W. Wegscheider, L. P. Kouwenhoven, and L. M. K. Vandersypen (2005), Science 309, 1346.

Koppens, F. H. L., K. C. Nowack, and L. M. K. Vandersypen (2008), Phys. Rev. Lett. 100, 236802.

Koski, J. V., A. J. Landig, M. Russ, J. C. Abadillo-Uriel, P. Scarlino, B. Kratochwil, C. Reichl, W. Wegscheider, G. Burkard, M. Friesen, S. N. Coppersmith, A. Wallraf, K. Ensslin, and T. Ihn (2020), Nat. Phys. 16, 642.

Kouwenhoven, L., D. G. Austing, and S. Tarucha (2001), Rep. Prog. Phys. 64, 701.

Kouwenhoven, L., and C. Marcus (1998), Phys. World 11, 35.

Kroutvar, M., Y. Ducommun, D. Heiss, M. Bichler, D. Schuh, G. Abstreiter, and J. J. Finley (2004), Nature 432, 81.

Kuemmeth, F., S. Ilani, D. C. Ralph, and P. L. McEuen (2008), Nature 452, 448.

Kyriakidis, J., and G. Burkard (2007), Phys. Rev. B 75, 115324.

Ladd, T. D. (2012), Phys. Rev. B 86, 125408.

Ladd, T. D., J. R. Goldman, F. Yamaguchi, Y. Yamamoto, E. Abe, and K. M. Itoh (2002), Phys. Rev. Lett. 89, 017901.

Ladd, T. D., D. Maryenko, Y. Yamamoto, E. Abe, and K. M. Itoh (2005), Phys. Rev. B 71, 014401.

Lai, N. S., W. H. Lim, C. H. Yang, F. A. Zwanenburg, W. A. Coish, F. Qassemi, A. Morello, and A. S. Dzurak (2011), Sci. Rep. 1, 110.

Laird, E. A., F. Kuemmeth, G. A. Steele, K. Grove-Rasmussen, J. Nyg˚ard, K. Flensberg, and L. P. Kouwenhoven (2015), Rev. Mod. Phys. 87, 703.

Laird, E. A., F. Pei, and L. P. Kouwenhoven (2013), Nat. Nanotechnol. 8 (8), 565.

Laird, E. A., J. M. Taylor, D. P. DiVincenzo, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2010), Phys. Rev. B 82, 075403.

Landauer, R. (1991), Phys. Today 44, 23.

Landig, A. J., J. V. Koski, P. Scarlino, U. C. Mendes, A. Blais, C. Reichl, W. Wegscheider, A. Wallraf, K. Ensslin, and T. Ihn (2018), Nature 560, 179.

Landig, A. J., J. V. Koski, P. Scarlino, C. M¨uller, J. C. Abadillo-Uriel, B. Kratochwil, C. Reichl, W. Wegscheider, S. N. Coppersmith, M. Friesen, A. Wallraf, T. Ihn, and

K. Ensslin (2019), Nat. Commun. 10, 5037.

de Lange, G., B. van Heck, A. Bruno, D. J. van Woerkom, A. Geresdi, S. R. Plissard, E. P. A. M. Bakkers, A. R. Akhmerov, and L. DiCarlo (2015), Phys. Rev. Lett. 115, 127002.

Larsen, T. W., K. D. Petersson, F. Kuemmeth, T. S. Jespersen, P. Krogstrup, J. Nyg˚ard, and C. M. Marcus (2015), Phys. Rev. Lett. 115, 127001.

Laucht, A., J. T. Muhonen, F. A. Mohiyaddin, R. Kalra, J. P. Dehollain, S. Freer, F. E. Hudson, M. Veldhorst, R. Rahman, G. Klimeck, K. M. Itoh, D. N. Jamieson, J. C. Mc-Callum, A. S. Dzurak, and A. Morello (2015), Sci. Adv. 1, e1500022.

Lawrie, W. I. L., H. G. J. Eenink, N. W. Hendrickx, J. M. Boter, L. Petit, S. V. Amitonov, M. Lodari, B. Paquelet Wuetz, C. Volk, S. G. J. Philips, G. Droulers, N. Kalhor, F. van Riggelen, D. Brousse, A. Sammak, L. M. K. Vandersypen, G. Scappucci, and M. Veldhorst (2020), Appl. Phys. Lett. 116, 080501.

Lee, D., S. Meyer, S. Gong, R. Lu, and K. Lai (2021), arXiv:2110.00162.

Levy, J. (2002), Phys. Rev. Lett. 89, 147902.

Li, R., X. Hu, and J. Q. You (2012), Phys. Rev. B 86, 205306.

Li, R., F. E. Hudson, A. S. Dzurak, and A. R. Hamilton (2015), Nano Lett. 15, 7314.

Lidar, D. A., I. L. Chuang, and K. B. Whaley (1998), Phys. Rev. Lett. 81, 2594.

Lieb, E., and D. Mattis (1962), Phys. Rev. 125, 164.

Liles, S. D., R. Li, C. H. Yang, F. E. Hudson, M. Veldhorst, A. S. Dzurak, and A. R. Hamilton (2018), Nat. Commun. 9, 3255.

Liles, S. D., F. Martins, D. S. Miserev, A. A. Kiselev, I. D. Thorvaldson, M. J. Rendell, I. K. Jin, F. E. Hudson, M. Veldhorst, K. M. Itoh, O. P. Sushkov, T. D. Ladd, A. S. Dzurak, and A. R. Hamilton (2020), arXiv:2012.04985.

Linke, N. M., D. Maslov, M. Roetteler, S. Debnath, C. Figgatt, K. A. Landsman, K. Wright, and C. Monroe (2017), Proc. Nat. Acad. Sci. 114, 3305.

Liu, Y.-Y., L. A. Orona, S. F. Neyens, E. R. MacQuarrie, M. A. Eriksson, and A. Yacoby (2021), Phys. Rev. Applied 16, 024029.

Liu, Y.-Y., K. D. Petersson, J. Stehlik, J. M. Taylor, and J. R. Petta (2014), Phys. Rev. Lett. 113, 036801.

Liu, Y.-Y., J. Stehlik, C. Eichler, M. J. Gullans, J. M. Taylor, and J. R. Petta (2015), Science 347, 285.

Liu, Z.-H., O. Entin-Wohlman, A. Aharony, and J. Q. You (2018), Phys. Rev. B 98, 241303.

Loss, D., and D. P. DiVincenzo (1998), Phys. Rev. A 57, 120. Lowenthal, F. (1972), Can. J. Math. 24, 713.

Lyding, J. W., T. Shen, J. S. Hubacek, J. R. Tucker, and G. C. Abeln (1994), Appl. Phys. Lett. 64, 2010.

Mabuchi, H., and A. C. Doherty (2002), Science 298, 1372.

Macklin, C., K. O’Brien, D. Hover, M. E. Schwartz, V. Bolkhovsky, X. Zhang, W. D. Oliver, and I. Siddiqi (2015), Science 350, 307.

Madzik, M. T., T. D. Ladd, F. E. Hudson, K. M. Itoh, A. M. Jakob, B. C. Johnson, J. C. McCallum, D. N. Jamieson, A. S. Dzurak, A. Laucht, and A. Morello (2020), Sci. Adv. 6, eaba3442.

Madzik, M. T., A. Serwan, A. Youssry, B. Yoecker, K. M. Rudinger, E. Nielsen, K. C. Young, T. J. Proctor, A. D. Baczewski, A. Laucht, V. Schmitt, F. E. Hudson, K. M. Itoh, A. M. Jakob, B. C. Johnson, D. N. Jamieson, A. S. Dzurak, C. Ferrie, R. Blume-Kohout, and A. Morello

(2021), arXiv:2106.03082.

Magesan, E., J. M. Gambetta, and J. Emerson (2011), Phys. Rev. Lett. 106, 180504.

Majer, J., J. M. Chow, J. M. Gambetta, J. Koch, B. R. Johnson, S. J. A., L. Frunzio, D. I. Schuster, A. A. Houck, A. Wallraf, A. Blais, M. H. Devoret, S. M. Girvin, and R. J. Schoelkopf (2007), Nature 449, 443.

Mak, W. Y., F. Sfigakis, K. Das Gupta, O. Klochan, H. E. Beere, I. Farrer, J. P. Grifiths, G. A. C. Jones, A. R. Hamilton, and D. A. Ritchie (2013), Appl. Phys. Lett. 102, 103507.

Malinowski, F. K., F. Martins, P. D. Nissen, E. Barnes, Cywi´nski Lukasz, M. S. Rudner, S. Fallahi, G. C. Gardner, M. J. Manfra, C. M. Marcus, and F. Kuemmeth (2017a), Nat. Nanotechnol. 12, 16.

Malinowski, F. K., F. Martins, P. D. Nissen, S. Fallahi, G. C. Gardner, M. J. Manfra, C. M. Marcus, and F. Kuemmeth (2017b), Phys. Rev. B 96, 045443.

Malinowski, F. K., F. Martins, T. B. Smith, S. D. Bartlett, A. C. Doherty, P. D. Nissen, S. Fallahi, G. C. Gardner, M. J. Manfra, C. M. Marcus, and F. Kuemmeth (2019), Nat. Commun. 10, 1196.

Manfra, M. J. (2014), Annu. Rev. Condens. Matter Phys. 5, 347.

Martins, F., F. K. Malinowski, P. D. Nissen, E. Barnes, S. Fallahi, G. C. Gardner, M. J. Manfra, C. M. Marcus, and F. Kuemmeth (2016), Phys. Rev. Lett. 116, 116801.

Martins, F., F. K. Malinowski, P. D. Nissen, S. Fallahi, G. C. Gardner, M. J. Manfra, C. M. Marcus, and F. Kuemmeth (2017), Phys. Rev. Lett. 119, 227701.

Maune, B. M., M. G. Borselli, B. Huang, T. D. Ladd, P. W. Deelman, K. S. Holabird, A. A. Kiselev, I. Alvarado-Rodriguez, R. S. Ross, A. E. Schmitz, M. Sokolich, C. A. Watson, M. F. Gyure, and A. T. Hunter (2012), Nature 481, 344.

Maurand, R., X. Jehl, D. Kotekar-Patil, A. Corna, H. Bohuslavskyi, R. Lavieville, L. Hutin, S. Barraud, M. Vinet, M. Sanquer, and S. De Franceschi (2016), Nat. Commun. 7, 13575.

McJunkin, T., E. R. MacQuarrie, L. Tom, S. F. Neyens, J. P. Dodson, B. Thorgrimsson, J. Corrigan, H. E. Ercan, D. E. Savage, M. G. Lagally, R. Joynt, S. N. Coppersmith, M. Friesen, and M. A. Eriksson (2021), arXiv:2104.08232.

McNeil, R. P. G., M. Kataoka, C. J. B. Ford, C. H. W. Barnes, D. Anderson, G. A. C. Jones, I. Farrer, and D. A. Ritchie (2011), Nature 477, 439.

Medford, J., J. Beil, J. M. Taylor, S. D. Bartlett, A. C. Doherty, E. I. Rashba, D. P. DiVincenzo, H. Lu, A. C. Gossard, and C. M. Marcus (2013a), Nat. Nanotechnol. 8, 654.

Medford, J., J. Beil, J. M. Taylor, E. I. Rashba, H. Lu, A. C. Gossard, and C. M. Marcus (2013b), Phys. Rev. Lett. 111, 050501.

Melnikov, D. V., and J.-P. Leburton (2006), Phys. Rev. B 73, 155301.

Meunier, T., V. E. Calado, and L. M. K. Vandersypen (2011), Phys. Rev. B 83, 121403.

Meunier, T., I. T. Vink, L. H. W. van Beveren, K.-J. Tielrooij, R. Hanson, F. H. L. Koppens, H. P. Tranitz, W. Wegscheider, L. P. Kouwenhoven, and L. M. K. Vandersypen (2007), Phys. Rev. Lett. 98, 126601.

Mi, X., M. Benito, S. Putz, D. M. Zajac, J. M. Taylor, G. Burkard, and J. R. Petta (2018a), Nature 555, 599.

Mi, X., J. V. Cady, D. M. Zajac, P. W. Deelman, and J. R. Petta (2017a), Science 355, 156.

Mi, X., J. V. Cady, D. M. Zajac, J. Stehlik, L. F. Edge, and J. R. Petta (2017b), Appl. Phys. Lett. 110, 043502.

Mi, X., S. Kohler, and J. R. Petta (2018b), Phys. Rev. B 98, 161404.

Mi, X., C. G. Peterfalvi, G. Burkard, and J. R. Petta (2017c), Phys. Rev. Lett. 119, 176803.

Mielke, J., J. R. Petta, and G. Burkard (2021), PRX Quantum 2, 020347.

Miller, R., T. E. Northup, K. M. Birnbaum, A. Boca, A. D. Boozer, and H. J. Kimble (2005), J. Phys. B 38, S551.

Mills, A. R., M. M. Feldman, C. Monical, P. J. Lewis, K. W. Larson, A. M. Mounce, and J. R. Petta (2019a), Appl. Phys. Lett. 115, 113501.

Mills, A. R., C. R. Guinn, M. J. Gullans, A. J. Sigillito, M. M. Feldman, E. Nielsen, and J. R. Petta (2021), arXiv:2111.11937.

Mills, A. R., D. M. Zajac, M. J. Gullans, F. J. Schupp, T. M. Hazard, and J. R. Petta (2019b), Nat. Commun. 10, 1063.

Mohseni, M., A. T. Rezakhani, and D. A. Lidar (2008), Phys. Rev. A 77, 032322.

Montanaro, A. (2016), npj Quantum Inf. 2, 1.

Morello, A., J. J. Pla, F. A. Zwanenburg, K. W. Chan, K. Y. Tan, H. Huebl, M. Mottonen, C. D. Nugroho, C. Yang, J. A. van Donkelaar, A. D. C. Alves, D. N. Jamieson, C. C. Escott, L. C. L. Hollenberg, R. G. Clark, and A. S. Dzurak (2010), Nature 467, 687.

Mortemousque, P.-A., E. Chanrion, B. Jadot, H. Flentje, A. Ludwig, A. D. Wieck, M. Urdampilleta, C. B¨auerle, and T. Meunier (2021), Nat. Nanotechnol. 16, 296.

Mourik, V., K. Zuo, S. M. Frolov, S. R. Plissard, E. P. A. M. Bakkers, and L. P. Kouwenhoven (2012), Science 336, 1003.

Muhonen, J. T., J. P. Dehollain, A. Laucht, F. E. Hudson, R. Kalra, T. Sekiguchi, K. M. Itoh, D. N. Jamieson, J. C. McCallum, A. S. Dzurak, and A. Morello (2014), Nat. Nanotechnol. 9, 986.

Muhonen, J. T., A. Laucht, S. Simmons, J. P. Dehollain, R. Kalra, F. E. Hudson, S. Freer, K. M. Itoh, D. N. Jamieson, J. C. McCallum, A. S. Dzurak, and A. Morello (2015), J. Phys. Condens. Matter 27, 154205.

Mutter, P. M., and G. Burkard (2021), Phys. Rev. Research 3, 013194.

Nadj-Perge, S., S. M. Frolov, E. P. A. M. Bakkers, and L. P. Kouwenhoven (2010), Nature 468, 1084.

Nadj-Perge, S., V. S. Pribiag, J. W. G. van den Berg, K. Zuo, S. R. Plissard, E. P. A. M. Bakkers, S. M. Frolov, and L. P. Kouwenhoven (2012), Phys. Rev. Lett. 108, 166801.

Nakajima, T., A. Noiri, K. Kawasaki, J. Yoneda, P. Stano, S. Amaha, T. Otsuka, K. Takeda, M. R. Delbecq, G. Allison, A. Ludwig, A. D. Wieck, D. Loss, and S. Tarucha (2020), Phys. Rev. X 10, 011060.

Nakaoka, T., S. Tarucha, and Y. Arakawa (2007), Phys. Rev. B 76, 041301.

Neder, I., M. S. Rudner, H. Bluhm, S. Foletti, B. I. Halperin, and A. Yacoby (2011), Phys. Rev. B 84, 035441.

Neder, I., M. S. Rudner, and B. I. Halperin (2014), Physical Review B 89, 085403.

Nestoklon, M. O., E. L. Ivchenko, J.-M. Jancu, and P. Voisin (2008), Phys. Rev. B 77, 155328.

Nichol, J. M., S. P. Harvey, M. D. Shulman, A. Pal, V. Umansky, E. I. Rashba, B. I. Halperin, and A. Yacoby (2015), Nat. Commun. 6, 7682.

Nichol, J. M., L. A. Orona, S. P. Harvey, S. Fallahi, G. C. Gardner, M. J. Manfra, and A. Yacoby (2017), npj Quant. Info. 3, 3.

Nielsen, E., E. Barnes, J. P. Kestner, and S. Das Sarma (2013), Phys. Rev. B 88, 195131.

Nielsen, E., J. K. Gamble, K. Rudinger, T. Scholten, K. Young, and R. Blume-Kohout (2021), Quantum 5, 557.

Nielsen, E., R. Rahman, and R. P. Muller (2012), Journal of Applied Physics 112 (11), 114304.

Nielsen, M. A., and I. L. Chuang (2000), Quantum Computation and Quantum Information (Cambridge University Press).

Noiri, A., K. Takeda, T. Nakajima, T. Kobayashi, A. Sammak, G. Scappucci, and S. Tarucha (2021), arXiv:2108.02626.

Noiri, A., K. Takeda, J. Yoneda, T. Nakajima, T. Kodera, and S. Tarucha (2020), Nano Lett. 20, 947.

Nowack, K. C., F. H. L. Koppens, Y. V. Nazarov, and L. M. K. Vandersypen (2007), Science 318, 1430.

Nowack, K. C., M. Shafiei, M. Laforest, G. E. D. K. Prawiroatmodjo, L. R. Schreiber, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2011), Science 333, 1269.

Oh, S., M. Friesen, and X. Hu (2010), Phys. Rev. B 82, 140403.

Ono, K., D. G. Austing, Y. Tokura, and S. Tarucha (2002), Science 297, 1313.

Orona, L. A., J. M. Nichol, S. P. Harvey, C. G. L. Bøttcher, S. Fallahi, G. C. Gardner, M. J. Manfra, and A. Yacoby (2018), Phys. Rev. B 98, 125404.

O’Gorman, J., N. H. Nickerson, P. Ross, J. J. Morton, and S. C. Benjamin (2016), npj Quantum Information 2 (1), 1, bandiera abtest: a Cc license type: cc by Cg type: Nature Research Journals Number: 1 Primary atype: Research Publisher: Nature Publishing Group Subject term: Quantum information;Quantum physics Subject term id: quantum-information;quantum-physics.

Paget, D., G. Lampel, B. Sapoval, and V. I. Safarov (1977), Phys. Rev. B 15, 5780.

Pakkiam, P., A. Timofeev, M. House, M. Hogg, T. Kobayashi, M. Koch, S. Rogge, and M. Simmons (2018), Phys. Rev. X 8, 041032.

Pal, A., E. I. Rashba, and B. I. Halperin (2014), Phys. Rev. X 4, 011012.

Pal, A., E. I. Rashba, and B. I. Halperin (2015), Phys. Rev. B 92, 125409.

P´alyi, A., and G. Burkard (2010), Phys. Rev. B 82, 155424.

Pan, A., T. E. Keating, M. F. Gyure, E. J. Pritchett, S. Quinn, R. S. Ross, T. D. Ladd, and J. Kerckhof (2020), Quantum Sci. Technol. 5, 034005.

Pan, H., M. G. House, X. Hao, and H. W. Jiang (2012), Appl. Phys. Lett. 100, 263109.

Pantelides, S. T. (1978), Rev. Mod. Phys. 50, 797.

Pei, F., E. A. Laird, G. A. Steele, and L. P. Kouwenhoven (2012), Nat. Nanotechnol. 7, 630.

Penthorn, N. E., J. S. Schoenfield, L. F. Edge, and H. Jiang (2020), Phys. Rev. Applied 14, 054015.

Petersson, K., J. Petta, H. Lu, and A. Gossard (2010), Phys. Rev. Lett. 105, 246804.

Petersson, K. D., L. W. McFaul, M. D. Schroer, M. Jung, J. M. Taylor, A. A. Houck, and J. R. Petta (2012), Nature 490, 380.

Petit, L., J. Boter, H. Eenink, G. Droulers, M. Tagliaferri, R. Li, D. Franke, K. Singh, J. Clarke, R. Schouten, V. Dobrovitski, L. Vandersypen, and M. Veldhorst (2018), Phys. Rev. Lett. 121, 076801.

Petta, J. R., A. C. Johnson, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2004), Phys. Rev. Lett. 93, 186802.

Petta, J. R., A. C. Johnson, J. M. Taylor, E. Laird, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2005), Science 309, 2180.

Petta, J. R., H. Lu, and A. C. Gossard (2010), Science 327, 669.

Petta, J. R., and D. C. Ralph (2001), Phys. Rev. Lett. 87, 266801.

Petta, J. R., and D. C. Ralph (2002), Phys. Rev. Lett. 89, 156802.

Petta, J. R., J. M. Taylor, A. C. Johnson, A. Yacoby, M. D. Lukin, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2008), Phys. Rev. Lett. 100, 067601.

Philippopoulos, P., S. Chesi, and W. A. Coish (2020), Phys. Rev. B 101, 115302.

Pioro-Ladriere, M., T. Obata, Y. Tokura, Y. S. Shin, T. Kubo, K. Yoshida, T. Taniyama, and S. Tarucha (2008), Nat. Phys. 4, 776.

Pla, J. J., K. Y. Tan, J. P. Dehollain, W. H. Lim, J. J. L. Morton, D. N. Jamieson, A. S. Dzurak, and A. Morello (2012), Nature 489, 541.

Pla, J. J., K. Y. Tan, J. P. Dehollain, W. H. Lim, J. J. L. Morton, F. A. Zwanenburg, D. N. Jamieson, A. S. Dzurak, and A. Morello (2013), Nature 496, 334.

Poulin-Lamarre, G., J. Thorgrimson, S. A. Studenikin, G. C. Aers, A. Kam, P. Zawadzki, Z. R. Wasilewski, and A. S. Sachrajda (2015), Phys. Rev. B 91, 125417.

Prada, M., G. Klimeck, and R. Joynt (2011), New J. Phys. 13, 013009.

Preskill, J. (2018), Quantum 2, 79.

Qiao, H., Y. P. Kandel, K. Deng, S. Fallahi, G. C. Gardner, M. J. Manfra, E. Barnes, and J. M. Nichol (2020), Phys. Rev. X 10, 031006.

Qiao, H., Y. P. Kandel, J. S. V. Dyke, S. Fallahi, G. C. Gardner, M. J. Manfra, E. Barnes, and J. M. Nichol (2021a), Nat. Commun. 12, 2142.

Qiao, H., Y. P. Kandel, S. Fallahi, G. C. Gardner, M. J. Manfra, X. Hu, and J. M. Nichol (2021b), Phys. Rev. Lett. 126, 017701.

Rashba, E. I., and A. L. Efros (2003), Phys. Rev. Lett. 91, 126405.

Reed, M. D., B. M. Maune, R. W. Andrews, M. G. Borselli, K. Eng, M. P. Jura, A. A. Kiselev, T. D. Ladd, S. T. Merkel, I. Milosavljevic, E. J. Pritchett, M. T. Rakher, R. S. Ross, A. E. Schmitz, A. Smith, J. A. Wright, M. F. Gyure, and A. T. Hunter (2016), Phys. Rev. Lett. 116, 110402.

Reilly, D. J., C. M. Marcus, M. P. Hanson, and A. C. Gossard (2007), Appl. Phys. Lett. 91, 162101.

Reilly, D. J., J. M. Taylor, J. R. Petta, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2010), Phys. Rev. Lett. 104, 236802.

Reimann, S. M., and M. Manninen (2002), Rev. Mod. Phys. 74, 1283.

Reithmaier, J. P., G. S¸ek, A. L¨ofler, C. Hofmann, S. Kuhn, S. Reitzenstein, L. V. Keldysh, V. D. Kulakovskii, T. L. Reinecke, and A. Forchel (2004), Nature 432, 197.

Ribeiro, H., and G. Burkard (2009), Phys. Rev. Lett. 102, 216802.

Ribeiro, H., J. R. Petta, and G. Burkard (2010), Phys. Rev. B 82, 115445.

van Riggelen, F., N. W. Hendrickx, W. I. L. Lawrie, M. Russ, A. Sammak, G. Scappucci, and M. Veldhorst (2021), Appl. Phys. Lett. 118, 044002.

Rontani, M. (2006), J. Chem. Phys. 124, 124102.

Roth, L. M. (1960), Phys. Rev. 118, 1534.

Ruskov, R., M. Veldhorst, A. S. Dzurak, and C. Tahan (2018), Phys. Rev. B 98, 245424.

Russ, M., and G. Burkard (2015a), Phys. Rev. B 91, 235411.

Russ, M., and G. Burkard (2015b), Phys. Rev. B 92, 205412.

Russ, M., F. Ginzel, and G. Burkard (2016), Phys. Rev. B 94, 165411.

Russ, M., J. R. Petta, and G. Burkard (2018a), Phys. Rev. Lett. 121, 177701.

Russ, M., D. M. Zajac, A. J. Sigillito, F. Borjans, J. M. Taylor, J. R. Petta, and G. Burkard (2018b), Phys. Rev. B 97, 085421.

Saeedi, K., S. Simmons, J. Z. Salvail, P. Dluhy, H. Riemann, N. V. Abrosimov, P. Becker, H.-J. Pohl, J. J. L. Morton, and M. L. W. Thewalt (2013), Science 342, 830.

Sala, A., and J. Danon (2017), Phys. Rev. B 95, 241303.

Salfi, J., B. Voisin, A. Tankasala, J. Bocquel, M. Usman, M. Simmons, L. Hollenberg, R. Rahman, and S. Rogge (2018), Phys. Rev. X 8, 031049.

Samkharadze, N., G. Zheng, N. Kalhor, D. Brousse, A. Sammak, U. C. Mendes, A. Blais, G. Scappucci, and L. M. K. Vandersypen (2018), Science 359, 1123.

Sapmaz, S., P. Jarillo-Herrero, L. P. Kouwenhoven, and H. S. J. van der Zant (2006), Semi. Sci. Tech. 21, S52.

Saraiva, A. L., M. J. Calder´on, X. Hu, S. Das Sarma, and B. Koiller (2009), Phys. Rev. B 80, 081305.

Saraiva, A. L., M. J. Calder´on, and B. Koiller (2007), Phys. Rev. B 76, 233302.

Scappucci, G., C. Kloefel, F. A. Zwanenburg, D. Loss, M. Myronov, J.-J. Zhang, S. De Franceschi, G. Katsaros, and M. Veldhorst (2021), Nat. Rev. Mater. 6, 926.

Scarlino, P., E. Kawakami, P. Stano, M. Shafiei, C. Reichl, W. Wegscheider, and L. Vandersypen (2014), Phys. Rev. Lett. 113, 256802.

Scarlino, P., D. J. Van Woerkom, U. C. Mendes, J. V. Koski, A. J. Landig, C. K. Andersen, S. Gasparinetti, C. Reichl, W. Wegscheider, K. Ensslin, et al. (2019), Nat. Commun. 10, 1.

Sch¨afler, F. (1997), Semicond. Sci. Technol. 12, 1515.

Schoelkopf, R. J., P. Wahlgren, A. A. Kozhevnikov, P. Delsing, and D. E. Prober (1998), Science 280, 1238.

Schofield, S. R., N. J. Curson, M. Y. Simmons, F. J. Rueß, T. Hallam, L. Oberbeck, and R. G. Clark (2003), Phys. Rev. Lett. 91, 136104.

Schr¨oer, D., A. D. Greentree, L. Gaudreau, K. Eberl, L. C. L. Hollenberg, J. P. Kotthaus, and S. Ludwig (2007), Phys. Rev. B 76, 075306.

Schroer, M. D., M. Jung, K. D. Petersson, and J. R. Petta (2012), Phys. Rev. Lett. 109, 166804.

Schroer, M. D., K. D. Petersson, M. Jung, and J. R. Petta (2011), Phys. Rev. Lett. 107, 176811.

Schuch, N., and J. Siewert (2003), Phys. Rev. A 67, 032301.

Seidler, I., T. Struck, R. Xue, N. Focke, S. Trellenkamp, H. Bluhm, and L. R. Schreiber (2021), arXiv:2108.00879.

Setiawan, F., H.-Y. Hui, J. P. Kestner, X. Wang, and S. D. Sarma (2014), Phys. Rev. B 89, 085314.

Shi, Z., C. B. Simmons, J. R. Prance, J. K. Gamble, T. S. Koh, Y.-P. Shim, X. Hu, D. E. Savage, M. G. Lagally, M. A. Eriksson, M. Friesen, and S. N. Coppersmith (2012), Phys. Rev. Lett. 108, 140503.

Shi, Z., C. B. Simmons, D. R. Ward, J. R. Prance, X. Wu, T. S. Koh, J. K. Gamble, D. E. Savage, M. G. Lagally, M. Friesen, S. N. Coppersmith, and M. A. Eriksson (2014), Nat. Commun. 5, 3020.

Shim, Y.-P., R. Ruskov, H. M. Hurst, and C. Tahan (2019),

Appl. Phys. Lett. 114, 152105.

Shim, Y.-P., and C. Tahan (2016), Phys. Rev. B 93, 121410.

Shim, Y.-P., and C. Tahan (2018), Phys. Rev. B 97, 155402.

Shor, P. W. (1997), SIAM J. Comp. 26, 1484.

Shulman, M. D., O. E. Dial, S. P. Harvey, H. Bluhm, V. Umansky, and A. Yacoby (2012), Science 336, 202.

Shulman, M. D., S. P. Harvey, J. M. Nichol, S. D. Bartlett, A. C. Doherty, V. Umansky, and A. Yacoby (2014), Nat. Commun. 5, 5156.

Sigillito, A., J. Loy, D. Zajac, M. Gullans, L. Edge, and J. Petta (2019a), Phys. Rev. Applied 11, 061006.

Sigillito, A. J., M. J. Gullans, L. F. Edge, M. Borselli, and J. R. Petta (2019b), npj Quant. Info. 5, 110.

Sillanpaa, M. A., J. I. Park, and R. W. Simmonds (2007), Nature 449, 438.

Slichter, C. P. (2010), Principles of Magnetic Resonance (Springer).

Smith, J. S., A. Budi, M. C. Per, N. Vogt, D. W. Drumm, L. C. L. Hollenberg, J. H. C. Cole, and S. P. Russo (2017), Sci. Rep. 7, 6010.

de Sousa, R., and S. Das Sarma (2003), Phys. Rev. B 68, 155330.

de Sousa, R., J. D. Delgado, and S. Das Sarma (2004), Phys. Rev. A 70, 052304.

de Sousa, R., X. Hu, and S. Das Sarma (2001), Phys. Rev. A 64, 042307.

Srinivasa, V., K. C. Nowack, M. Shafiei, L. M. K. Vandersypen, and J. M. Taylor (2013), Phys. Rev. Lett. 110, 196803.

Srinivasa, V., J. M. Taylor, and C. Tahan (2016), Phys. Rev. B 94, 205421.

Stano, P., and J. Fabian (2005), Phys. Rev. B 72, 155410.

Stano, P., and D. Loss (2021), arXiv:2107.06485.

Stehlik, J., Y.-Y. Liu, C. M. Quintana, C. Eichler, T. R. Hartke, and J. R. Petta (2015), Phys. Rev. Applied 4, 014018.

Stehlik, J., M. D. Schroer, M. Z. Maialle, M. H. Degani, and J. R. Petta (2014), Phys. Rev. Lett. 112, 227601.

Stepanenko, D., and G. Burkard (2007), Phys. Rev. B 75, 085324.

Stepanenko, D., M. S. Rudner, B. I. Halperin, and D. Loss (2012), Phys. Rev. B 85, 075416.

Stockklauser, A., V. F. Maisi, J. Basset, K. Cujia, C. Reichl, W. Wegscheider, T. Ihn, A. Wallraf, and K. Ensslin (2015), Phys. Rev. Lett. 115, 046802.

Stockklauser, A., P. Scarlino, J. V. Koski, S. Gasparinetti, C. K. Andersen, C. Reichl, W. Wegscheider, T. Ihn, K. Ensslin, and A. Wallraf (2017), Phys. Rev. X 7, 011030.

Struck, T., A. Hollmann, F. Schauer, O. Fedorets, A. Schmidbauer, K. Sawano, H. Riemann, N. V. Abrosimov, L. Cywinski, D. Bougeard, and L. Schreiber (2020), npj Quant. Info. 6, 40.

Studenikin, S. A., J. Thorgrimson, G. C. Aers, A. Kam, P. Zawadzki, Z. R. Wasilewski, A. Bogan, and A. S. Sachrajda (2012), Appl. Phys. Lett. 101, 233101.

Szabo, A., and N. S. Ostlund (1996), Modern Quantum Chemistry: Introduction to Advanced Electronic Structure Theory (Dover Publications).

Tahan, C., and R. Joynt (2014), Phys. Rev. B 89, 075302.

Takahashi, M., S. D. Bartlett, and A. C. Doherty (2013), Phys. Rev. A 88, 022120.

Takeda, K., J. Kamioka, T. Otsuka, J. Yoneda, T. Nakajima, M. R. Delbecq, S. Amaha, G. Allison, T. Kodera, S. Oda, and S. Tarucha (2016), Sci. Adv. 2, 1600694.

Takeda, K., A. Noiri, J. Yoneda, T. Nakajima, and S. Tarucha (2020), Phys. Rev. Lett. 124, 117701.

Tankasala, A., J. Salfi, J. Bocquel, B. Voisin, M. Usman, G. Klimeck, M. Y. Simmons, L. C. L. Hollenberg, S. Rogge, and R. Rahman (2018), Phys. Rev. B 97 (19), 195301.

Tanttu, T., B. Hensen, K. W. Chan, C. H. Yang, W. W. Huang, M. Fogarty, F. Hudson, K. Itoh, D. Culcer, A. Laucht, A. Morello, and A. Dzurak (2019), Phys. Rev. X 9, 021028.

Taylor, J. M., H.-A. Engel, W. Dur, A. Yacoby, C. M. Marcus, P. Zoller, and M. D. Lukin (2005), Nat. Phys. 1, 177.

Taylor, J. M., J. R. Petta, A. C. Johnson, A. Yacoby, C. M. Marcus, and M. D. Lukin (2007), Phys. Rev. B 76, 035315.

Taylor, J. M., V. Srinivasa, and J. Medford (2013), Phys. Rev. Lett. 111, 050502.

Terrazos, L. A., E. Marcellina, Z. Wang, S. N. Coppersmith, M. Friesen, A. R. Hamilton, X. Hu, B. Koiller, A. L. Saraiva, D. Culcer, and R. B. Capaz (2021), Phys. Rev. B 103, 125201.

Tettamanzi, G. C., S. J. Hile, M. G. House, M. Fuechsle, S. Rogge, and M. Y. Simmons (2017), ACS Nano 11, 2444.

Tokura, Y., W. G. van der Wiel, T. Obata, and S. Tarucha (2006), Phys. Rev. Lett. 96, 047202.

Tosi, G., F. A. Mohiyaddin, H. Huebl, and A. Morello (2014), AIP Adv. 4, 087122.

Tosi, G., F. A. Mohiyaddin, V. Schmitt, S. Tenberg, R. Rahman, G. Klimeck, and A. Morello (2017), Nat. Commun. 8, 450.

Tracy, L. A., T. W. Hargett, and J. L. Reno (2014), Appl. Phys. Lett. 104, 123101.

Trif, M., V. N. Golovach, and D. Loss (2008), Phys. Rev. B 77, 045434.

Tyryshkin, A. M., S. Tojo, J. J. L. Morton, H. Riemann, N. V. Abrosimov, P. Becker, H.-J. Pohl, T. Schenkel, M. L. W. Thewalt, K. M. Itoh, and S. A. Lyon (2012), Nat. Mater. 11, 143.

Uhrig, G. S. (2007), Phys. Rev. Lett. 98, 100504.

Urdampilleta, M., D. J. Niegemann, E. Chanrion, B. Jadot, C. Spence, P.-A. Mortemousque, C. B¨auerle, L. Hutin, B. Bertrand, S. Barraud, R. Maurand, M. Sanquer, X. Jehl, S. De Franceschi, M. Vinet, and T. Meunier (2019), Nat. Nano. 14, 737.

Vahapoglu, E., J. P. Slack-Smith, R. C. C. Leon, W. H. Lim, F. E. Hudson, T. Day, T. Tanttu, C. H. Yang, A. Laucht, A. S. Dzurak, and J. J. Pla (2021), Sci. Adv. 7, eabg9158.

van Meter, J. R., and E. Knill (2019), Phys. Rev. A 99, 042331.

Vandersypen, L. M. K., H. Bluhm, J. S. Clarke, A. S. Dzurak, R. Ishihara, A. Morello, D. J. Reilly, L. R. Schreiber, and M. Veldhorst (2017), npj Quantum Inf. 3, 34.

Vandersypen, L. M. K., and I. L. Chuang (2005), Rev. Mod. Phys. 76, 1037.

Varshalovich, D. A., A. N. Moskalev, and V. K. Khersonskii (1988), Quantum Theory of Angular Momentum (World Scientific).

Veldhorst, M., J. C. C. Hwang, C. H. Yang, A. W. Leenstra, B. de Ronde, J. P. Dehollain, J. T. Muhonen, F. E. Hudson, K. M. Itoh, A. Morello, and A. S. Dzurak (2014), Nat. Nanotechnol. 9, 981.

Veldhorst, M., R. Ruskov, C. H. Yang, J. C. C. Hwang, F. E. Hudson, M. E. Flatt´e, C. Tahan, K. M. Itoh, A. Morello, and A. S. Dzurak (2015a), Phys. Rev. B 92, 201401.

Veldhorst, M., C. H. Yang, J. C. C. Hwang, W. Huang, J. P. Dehollain, J. T. Muhonen, S. Simmons, A. Laucht, F. E.

Hudson, K. M. Itoh, A. Morello, and A. S. Dzurak (2015b), Nature 526, 410.

Venitucci, B., L. Bourdet, D. Pouzada, and Y. Niquet (2018), Phys. Rev. B 98, 155319.

Viennot, J. J., M. R. Delbecq, L. E. Bruhat, M. C. Dartiailh, M. M. Desjardins, M. Baillergeau, A. Cottet, and T. Kontos (2016), Compt. Rend. Phys. 17, 705.

Vink, I. T., T. Nooitgedagt, R. N. Schouten, L. M. K. Vandersypen, and W. Wegscheider (2007), Appl. Phys. Lett. 91, 123512.

Vion, D., A. Aassime, A. Cottet, P. Joyez, H. Pothier, C. Urbina, D. Esteve, and M. H. Devoret (2002), Science 296, 886.

Vitanov, N. V., A. A. Rangelov, B. W. Shore, and K. Bergmann (2017), Rev. Mod. Phys. 89, 015006.

Voisin, B., R. Maurand, S. Barraud, M. Vinet, X. Jehl, M. Sanquer, J. Renard, and S. De Franceschi (2016), Nano Lett. 16, 88.

Volk, C., A. M. J. Zwerver, U. Mukhopadhyay, P. T. Eendebak, C. J. van Diepen, J. P. Dehollain, T. Hensgens, T. Fujita, C. Reichl, W. Wegscheider, and L. M. K. Vandersypen (2019), npj Quantum Inf. 5, 29.

Wallraf, A., D. I. Schuster, A. Blais, L. Frunzio, R. S. Huang, J. Majer, S. Kumar, S. M. Girvin, and R. J. Schoelkopf (2004), Nature 431, 162.

Walther, H., B. T. H. Varcoe, B.-G. Englert, and T. Becker (2006), Rep. Prog. Phys. 69, 1325.

Wang, Y., A. Tankasala, L. C. L. Hollenberg, G. Klimeck, M. Y. Simmons, and R. Rahman (2016), npj Quantum Info. 2, 16008.

Warburton, R. J. (2013), Nat. Mater. 12, 483.

Wardrop, M. P., and A. C. Doherty (2014), Phys. Rev. B 90, 045418.

Warren, A., E. Barnes, and S. E. Economou (2019), Phys. Rev. B 100, 161303.

Watson, T. F., S. G. J. Philips, E. Kawakami, D. R. Ward, P. Scarlino, M. Veldhorst, D. E. Savage, M. G. Lagally, M. Friesen, S. N. Coppersmith, M. A. Eriksson, and L. M. K. Vandersypen (2018), Nature 555, 633.

Watson, T. F., B. Weber, Y.-L. Hsueh, L. C. L. Hollenberg, R. Rahman, and M. Y. Simmons (2017), Sci. Adv. 3, e1602811.

Watzinger, H., J. Kukuˇcka, L. Vukuˇsi´c, F. Gao, T. Wang, F. Sch¨afler, J.-J. Zhang, and G. Katsaros (2018), Nat. Commun. 9, 3902.

Weber, B., Y.-L. Hsueh, T. F. Watson, R. Li, A. R. Hamilton, L. C. L. Hollenberg, R. Rahman, and M. Y. Simmons (2018), npj Quantum Inf. 4, 61.

Weber, B., Y. H. M. Tan, S. Mahapatra, T. F. Watson, H. Ryu, R. Rahman, L. C. L. Hollenberg, G. Klimeck, and M. Y. Simmons (2014), Nat. Nanotechnol. 9, 430.

Wellard, C. J., L. C. L. Hollenberg, F. Parisoli, L. M. Kettle, H.-S. Goan, J. A. L. McIntosh, and D. N. Jamieson (2003), Phys. Rev. B 68, 195209.

van Weperen, I., B. D. Armstrong, E. A. Laird, J. Medford, C. M. Marcus, M. P. Hanson, and A. C. Gossard (2011), Phys. Rev. Lett. 107, 030506.

West, A., B. Hensen, A. Jouan, T. Tanttu, C.-H. Yang, A. Rossi, M. F. Gonzalez-Zalba, F. Hudson, A. Morello, D. J. Reilly, and A. S. Dzurak (2019), Nat. Nanotechnol. 14, 437.

White, Z., and G. Ramon (2018), Phys. Rev. B 97, 045306.

van der Wiel, W. G., S. De Franceschi, J. M. Elzerman, T. Fujisawa, S. Tarucha, and L. P. Kouwenhoven (2002), Rev.

Mod. Phys. 75, 1.

van der Wiel, W. G., M. Stopa, T. Kodera, T. Hatano, and S. Tarucha (2006), New J. Phys. 8, 28.

Wilson, D. K., and G. Feher (1961), Phys. Rev. 124, 1068.

Witzel, W. M., M. S. Carroll, A. Morello, L. Cywi´nski, and S. Das Sarma (2010), Phys. Rev. Lett. 105, 187602.

Witzel, W. M., X. Hu, and S. Das Sarma (2007), Phys. Rev. B 76, 035212.

van Woerkom, D. J., A. Proutski, B. van Heck, D. Bouman, J. I. Vayryne, L. I. Glazman, P. Krogstrup, J. Nygard, L. P. Kouwenhoven, and A. Geresdi (2017), Nat. Phys. 13, 876.

van Woerkom, D. J., P. Scarlino, J. H. Ungerer, C. M¨uller, J. V. Koski, A. J. Landig, C. Reichl, W. Wegscheider, T. Ihn, K. Ensslin, et al. (2018), Phys. Rev. X 8, 041018.

W´ojcik, A., T. Luczak, P. Kurzy´nski, A. Grudka, T. Gdala, and M. Bednarska (2005), Phys. Rev. A 72, 034303.

Wu, X., D. R. Ward, J. R. Prance, D. Kim, J. K. Gamble, R. T. Mohr, Z. Shi, D. E. Savage, M. G. Lagally, M. Friesen, S. N. Coppersmith, and M. A. Eriksson (2014), Proc. Natl. Acad. Sci. 111, 11938.

Xiao, M., M. G. House, and H. W. Jiang (2010), Phys. Rev. Lett. 104, 096801.

Xiao, M., I. Martin, E. Yablonovitch, and H. W. Jiang (2004), Nature 430, 435.

Xue, X., B. Patra, J. P. G. van Dijk, N. Samkharadze, S. Subramanian, A. Corna, B. Paquelet Wuetz, C. Jeon, F. Sheikh, E. Juarez-Hernandez, B. P. Esparza, H. Rampurawala, B. Carlton, S. Ravikumar, C. Nieva, S. Kim, H.-J. Lee, A. Sammak, G. Scappucci, M. Veldhorst, F. Sebastiano, M. Babaie, S. Pellerano, E. Charbon, and L. M. K. Vandersypen (2021a), Nature 593, 205.

Xue, X., M. Russ, N. Samkharadze, B. Undseth, A. Sammak, G. Scappucci, and L. M. K. Vandersypen (2021b), arXiv:2107.00628.

Xue, X., T. Watson, J. Helsen, D. Ward, D. Savage, M. Lagally, S. Coppersmith, M. Eriksson, S. Wehner, and L. Vandersypen (2019), Phys. Rev. X 9, 021011.

Yang, C., K. Chan, R. Harper, W. Huang, T. Evans, J. Hwang, B. Hensen, A. Laucht, T. Tanttu, F. Hudson, et al. (2019), Nat. Electron. 2, 151.

Yang, C. H., A. Rossi, R. Ruskov, N. S. Lai, F. A. Mohiyaddin, S. Lee, C. Tahan, G. Klimeck, A. Morello, and A. S. Dzurak (2013), Nat. Commun. 4, 2069.

Yannouleas, C., and U. Landman (2002), J. Phys. Condens. Matter. 14, L591.

Yoneda, J., W. Huang, M. Feng, C. H. Yang, K. W. Chan, T. Tanttu, W. Gilbert, R. Leon, F. Hudson, K. Itoh, et al. (2021), Nat. Commun. 12, 1.

Yoneda, J., T. Otsuka, T. Nakajima, T. Takakura, T. Obata, M. Pioro-Ladri\`ere, H. Lu, C. J. Palmstrøm, A. C. Gossard, and S. Tarucha (2014), Phys. Rev. Lett. 113, 267601.

Yoneda, J., K. Takeda, T. Otsuka, T. Nakajima, M. R. Delbecq, G. Allison, T. Honda, T. Kodera, S. Oda, Y. Hoshi, N. Usami, K. M. Itoh, and S. Tarucha (2018), Nat. Nanotechnol. 13, 102.

Yoshie, T., A. Scherer, J. Hendrickson, G. Khitrova, H. M. Gibbs, G. Rupper, C. Ell, O. B. Shchekin, and D. G. Deppe (2004), Nature 432, 200.

Yu, P. Y., and M. Cardona (2010), Fundamentals of Semiconductors (Springer, Berlin).

Yugova, I. A., A. Greilich, D. R. Yakovlev, A. A. Kiselev, M. Bayer, V. V. Petrov, Y. K. Dolgikh, D. Reuter, and A. D. Wieck (2007), Phys. Rev. B 75, 245302.

Zajac, D. M., T. M. Hazard, X. Mi, E. Nielsen, and J. R. Petta (2016), Phys. Rev. Applied 6, 054013.

Zajac, D. M., A. J. Sigillito, M. Russ, F. Borjans, J. M. Taylor, G. Burkard, and J. R. Petta (2018), Science 359, 439.

Zeuch, D., and N. E. Bonesteel (2016), Phys. Rev. A 93, 010303.

Zeuch, D., and N. E. Bonesteel (2020), Phys. Rev. B 102, 075311.

Zhang, L., J.-W. Luo, A. Saraiva, B. Koiller, and A. Zunger (2013), Nat. Commun. 4, 2396.

Zhao, R., T. Tanttu, K. Y. Tan, B. Hensen, K. W. Chan, J. C. C. Hwang, R. C. C. Leon, C. H. Yang, W. Gilbert, F. E. Hudson, K. M. Itoh, A. A. Kiselev, T. D. Ladd, A. Morello, A. Laucht, and A. S. Dzurak (2019), Nat. Commun. 10, 5500.

Zheng, G., N. Samkharadze, M. L. Noordam, N. Kalhor, D. Brousse, A. Sammak, G. Scappucci, and L. M. K. Vandersypen (2019), Nat. Nanotechnol. 14, 742.

Zumb¨uhl, D. M., C. M. Marcus, M. P. Hanson, and A. C. Gossard (2004), Phys. Rev. Lett. 93, 256801.

Zutic, I., J. Fabian, and S. Das Sarma (2004), Rev. Mod. Phys. 76, 323.

Zwanenburg, F. A., A. S. Dzurak, A. Morello, M. Y. Simmons, L. C. L. Hollenberg, G. Klimeck, S. Rogge, S. N. Coppersmith, and M. A. Eriksson (2013), Rev. Mod. Phys. 85, 961.

Zwerver, A. M. J., T. Kr¨ahenmann, T. F. Watson, L. Lampert, H. C. George, R. Pillarisetty, S. A. Bojarski, P. Amin, S. V. Amitonov, J. M. Boter, R. Caudillo, D. Corras-Serrano, J. P. Dehollain, G. Droulers, E. M. Henry, R. Kotlyar, M. Lodari, F. Luthi, D. J. Michalak, B. K. Mueller, S. Neyens, J. Roberts, N. Samkharadze, G. Zheng, O. K. Zietz, G. Scappucci, M. Veldhorst, L. M. K. Vandersypen, and J. S. Clarke (2021), arXiv:2101.12650.

Zwolak, J. P., T. McJunkin, S. S. Kalantre, J. Dodson, E. MacQuarrie, D. Savage, M. Lagally, S. Coppersmith, M. A. Eriksson, and J. M. Taylor (2020), Phys. Rev. Appl. 13, 034075.
