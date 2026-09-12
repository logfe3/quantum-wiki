---
title: Strong spin-photon coupling in silicon
description: 硅量子点自旋与超导腔光子的强耦合：自旋–光子接口使远程自旋相干耦合与腔助读出成为可能。
aliases:
 - samkharadze-2018
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">硅量子点自旋与超导腔光子的强耦合：自旋–光子接口使远程自旋相干耦合与腔助读出成为可能。</div>

> [!info] 文献信息
> N. Samkharadze *et al.*, “Strong spin-photon coupling in silicon”, Science **359**, 1123 (2018).
> [arXiv:1711.02040](https://arxiv.org/abs/1711.02040) · [DOI:10.1126/science.aar4054](https://doi.org/10.1126/science.aar4054)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

N. Samkharadze<sup>∗</sup>,<sup>1</sup> G. Zheng<sup>∗</sup>,<sup>1</sup> N. Kalhor,<sup>1</sup> D. Brousse,<sup>2</sup> A. Sammak,<sup>2</sup>

U. C. Mendes,<sup>3</sup> A. Blais,<sup>3,</sup> <sup>4</sup> G. Scappucci,<sup>1</sup> and L. M. K. Vandersypen<sup>1</sup>

<sup>1</sup>QuTech and Kavli Institute of Nanoscience, Delft University of Technology, Lorentzweg 1, 2628 CJ Delft, The Netherlands

<sup>2</sup>QuTech and Netherlands Organization for Applied Scientific Research (TNO), Stieltjesweg 1 2628 CK Delft, The Netherlands

<sup>3</sup>Institut quantique and D´epartment de Physique,

Universit´e de Sherbrooke, Sherbrooke, Qu´ebec J1K 2R1, Canada

<sup>4</sup>Canadian Institute for Advanced Research, Toronto, ON, Canada

(Dated: November 7, 2017)

We report the strong coupling of a single electron spin and a single microwave photon. The electron spin is trapped in a silicon double quantum dot and the microwave photon is stored in an on-chip high-impedance superconducting resonator. The electric field component of the cavity photon couples directly to the charge dipole of the electron in the double dot, and indirectly to the electron spin, through a strong local magnetic field gradient from a nearby micromagnet. This result opens the way to the realization of large networks of quantum dot based spin qubit registers, removing a major roadblock to scalable quantum computing with spin qubits.

Light-matter interaction has had profound impact on the development of quantum theory starting from the discovery of the photo-electric efect [1]: one single photon can release one single electron from a solid provided the photon energy exceeds the electron binding energy of the material. This observation demonstrates that light consists of quanta, but does not rely on a coherent interaction between light and matter. In cavity quantum electrodynamics, a photon is stored in a cavity so that its interaction with a resonant atom or other two-level system in the cavity is enhanced to the point where a single quantum of energy is exchanged coherently between the cavity photon mode and the atom [2]. This regime is known as the strong-coupling regime and has been achieved across a wide range of experimental platforms, from atoms to superconducting qubits and self-assembled quantum dots, using either optical or microwave photons [3–8]. Given that cavities extend over macroscopic distances, the coherent cavity-atom interaction can be used to indirectly couple well separated atoms coherently, ofering a path to scalable quantum computing.

This prospect has motivated extensive theoretical and experimental work to achieve the strong-coupling regime with gate-defined semiconductor quantum dots, a leading platform for the realization of quantum circuits [9–12]. Recently, strong coupling has been reported between a microwave photon and a charge qubit formed in a double quantum dot, an impressive achievement given the small electric dipole of a double dot and the short-lived charge qubit coherence [13–15]. Even more challenging, but also more desirable, is the strong coupling to a single electron spin [16]. Compared to the electron charge, the electron spin has far superior coherence properties, but its direct interaction with the cavity magnetic field is exceedingly small [17]. Therefore, one must resort to indirect interaction of the electron spin to the cavity electric field by hybridization of the spin with the electron charge degree of freedom, without compromising spin coherence too severely in the process [18–21]. For a single spin, spin-charge hybridization can be achieved in a controlled way via a transverse magnetic field gradient [22–27].

Here we report the observation of vacuum Rabi split ting of a single electron spin resonant with an on-chip microwave cavity, the telltale sign of strong coupling. We show how the spin-photon coupling strength is controlled by the charge qubit settings and extract all the relevant coupling strengths and decay rates. At a spin-photon coupling strength of 10 MHz, we observe cavity and spin decay rates of 4.1 and 1.8 MHz, respectively.

Figure 1 shows device images and a device schematic (see also Fig. S1). The superconducting cavity consists of a NbTiN coplanar resonator with a narrow center conductor and remote ground planes (Fig. 1A,B), capacitively coupled to a feed line. The cavity resonator is wrapped in a square shape and its two ends are connected to two Al gates that extend over the quantum dot locations. The resonator materials choice and dimensions give it a high characteristic impedance of about 1 kΩ that enhances the coupling $g _ { c }$ to the double dot charge dipole [14, 28], and make it resilient to in-plane magnetic fields of over 6 T [28]. The double quantum dot (DQD) is formed electrostatically in an undoped Si/SiGe quantum well (natural isotopic abundance), using a single layer of Al gates (Fig. 1C). A positive bias on a gate accumulates electrons in the quantum well underneath, a negative bias repels electrons (Fig. S1D). An in-plane magnetic field $\boldsymbol { B _ { \mathrm { e x t } } }$ induces a Zeeman splitting on an electron in the DQD. Two Cobalt micromagnets placed near the quantum dots (Fig. S1B,C) produce a local gradient in the static magnetic field. As a result, when an electron oscillates between the two dots, it experiences an oscillating transverse magnetic field, providing the necessary (indirect) spin-charge hybridization that allows an electric field to couple to the spin [22–24] (Fig. 1E).

We apply a probe tone to the feed line at frequency $f _ { p }$ and record the transmission through the feed line (unless indicated, all transmission plots show the normalised amplitude of the transmission through the feed line). With the DQD tuned to keep the electron fixed in one of the dots, the transmission shows a dip for $f _ { p }$ near 6.05 GHz, the bare resonance frequency $f _ { r }$ of the NbTiN resonator (Fig. 2B square symbol). From the linewidth, we find the bare resonator decay rate $\kappa _ { r } / 2 \pi = 2 . 7$ MHz, with an internal loss rate $\kappa _ { i n t } / 2 \pi = 1 . 5$ MHz. In what follows, we monitor the transmission through the feed line at low probe power (below -125 dBm, corresponding to $< 1$ photon in the resonator) to tune up the DQD, characterize the charge-photon interaction, and study spinphoton coupling.

![[assets/figures/references/samkharadze-2018/ce5a952afddeca23e1699356450259461261e0f3834d27580e45c82f97aae48e.jpg]]

![[assets/figures/references/samkharadze-2018/0913576100d56eef8c3abf5d27712db859e06e6b43c61d4519cce51db9701348.jpg]]

![[assets/figures/references/samkharadze-2018/7f419c8dbdb68f922898775dbefe31b35911a6bd17aa56b16636942b46957ef9.jpg]]

<sub>)</sub>C  
![[assets/figures/references/samkharadze-2018/4e8e43c74a3381fcf21b7a794db2883caf1867a119da4c1444f176b40d277dd0.jpg]]  
D  
FIG. 1. Device images and schematic (A) Scanning electron micrograph of a segment of the NbTiN resonator center conductor. (B) Optical micrograph of the resonator (square shape) adjacent to the feed line (top) and double dot (right). The yellow square in the center is a bond pad to bias gate B. (C) Scanning electron micrograph showing the gates used to form the double quantum dot (white dotted circles indicate dot positions). The purple and red colored gates are connected to the resonator ends. (D) Schematic cross-section of the quantum dot along the red dashed line in panel (d), showing the Si quantum well with SiGe bufer and barrier layers, and the $\mathrm { { A l } _ { 2 } \mathrm { { O } _ { 3 } } }$ and $\mathrm { S i N } _ { x }$ dielectrics separating the substrate from the Al gates and Co micromagnets. In the experiment, a single electron moves in the double dot potential landscape (grey line) in response to the resonator electric field, $E _ { r . } \ \mathrm { ~ A ~ }$ magnetic field is applied in the plane of the quantum well. The Co micromagnets create an additional magnetic field component, with a diferent orientation between the two dots. (E) The DQD energy levels as a function of DQD misalignment. Near $\epsilon = 0$ , the left and right dot levels hybridize, forming bonding and anti-bonding states that define a charge qubit [29]. Each of the DQD levels is split by the Zeeman energy. The micromagnet causes spin and orbital levels to hybridize as well.

To characterize the charge-photon interaction, we tune the DQD to a regime where the electron can move back and forth between the two dots in response to the cavity electric field. Such motion is possible whenever the electrochemical potentials of the two dots are aligned, i.e. where it costs equal energy for an electron to be in either dot. This occurs for specific combinations of gate voltages, seen as the short bright lines in Fig. 2A, where the charge-photon interaction modifies the transmission [31]. We focus on the lower left line, which corresponds to the last electron in the DQD.

B  
![[assets/figures/references/samkharadze-2018/c2d9a6ec3acdd2cc17ee80dbc7adf8d2b3a83d906955964a2012a40f4332d8ca.jpg]]

![[assets/figures/references/samkharadze-2018/55f7d2f79da3e79e27036fb9c448161b86c26abd0d44f8c5336b0a1e55fef9c4.jpg]]

![[assets/figures/references/samkharadze-2018/a62e47781280ca4fda16cd361158773871fbad7b02d280b7b62579b9ef44ac8d.jpg]]

![[assets/figures/references/samkharadze-2018/a7fc8730689123f48e1176e34d6452172bd68ba36b464fdc7f9b74f195422a8c.jpg]]

![[assets/figures/references/samkharadze-2018/0d61213c767d707904440198ee4538897513d566a248046979457d4a085be119.jpg]]  
FIG. 2. Strong spin-photon coupling. (A) Transmission as a function of two gate voltages that control the potential of the two dots. At the four bright lines, the electron can move between the dots. The dashed lines connecting the short lines indicate alignment of a dot with a reservoir electrochemical potential. Labels indicate the electron number in the two dots. (B) Transmission as a function of  (along the full white line in panel $\mathrm { A } )$ and $f _ { p } .$ . At large ||, we measure the bare resonator transmission (square symbol). Near $\epsilon = 0$ , the DQD charge qubit interacts dispersively with the cavity frequency, leading to a characteristic frequency shift (triangle symbol). (C) Transmission as a function of $B _ { \mathrm { e x t } }$ and $f _ { p }$ . When $B _ { \mathrm { e x t } }$ makes the spin spitting resonant with the resonator frequency (star symbol), a clear avoided crossing occurs, which we attribute to the strong coupling of a single spin and a single photon. The dotted line shows the expected spin splitting for a spin in silicon. (D) Line cut through panel C at the position of the green vertical line (red data points) and line cut at 110 mT (blue points). The red data shows clear vacuum Rabi splitting. (E) Similar to C but with the DQD misaligned, so the electron cannot move between the two dots. The spin-photon coupling is no longer visible. (F) Schematic representation of the transmission resonance of the superconducting cavity. The bare transmission resonance (square) is shifted dispersively by its interaction with the charge qubit (triangle), and splits when it is resonant with the spin qubit (star).

In order to place the charge-photon interaction in the dispersive regime, we set the charge qubit splitting $f _ { c }$ in the range of 8 to 15 GHz, so that $f _ { c }$ is always well above $f _ { r }$ . We measure $f _ { c }$ using two-tone spectroscopy, as detailed below. In the dispersive regime, the chargephoton interaction results in a frequency shift of the resonator (Fig. 2F). In Fig. 2B, we observe the characteristic dependence of this dispersive shift on the DQD misalignment . At $\epsilon = 0$ , the electron can most easily move between the dots, hence the electrical susceptibility is the highest and the dispersive shift the largest (triangle). $\mathrm { A t } \ \epsilon = 0$ , the magnitude of the dispersive shift is approximated by $( g _ { c } / 2 \pi ) ^ { 2 } / ( f _ { c } - f _ { r } )$ , where the charge-photon coupling strength $g _ { c }$ is mostly fixed by design and the detuning between $f _ { c }$ and $f _ { r }$ can be adjusted. From a fit based on input-output theory [30], we extract a chargephoton coupling strength $g _ { c } / 2 \pi$ of ∼ 200 MHz.

A  
B  
![[assets/figures/references/samkharadze-2018/8cf448cc95de491fc2648858eeb34cf1e89dc23969c0c6f49626232ca793ef52.jpg]]

![[assets/figures/references/samkharadze-2018/3e0d6ea9894693439bae028fe1806f58a064c23befb41d535ae65dbecc7d77a7.jpg]]  
D

![[assets/figures/references/samkharadze-2018/32fd0ebc25a7d1f5b9183ac579e58a2e8b2e715dd0419bcc26c7e261369b73d6.jpg]]

![[assets/figures/references/samkharadze-2018/61c54ff9d41973c391bb640494ee0a61bf58e80daa7a498e53b55ab90f054c5a.jpg]]  
FIG. 3. Two-tone spectroscopy of the charge and spin qubit (A) Transmission at $f _ { p } = 6 . 0 4 1$ GHz as a function of DQD misalignment  and the frequency of a second tone (pump frequency) that is applied to gate LP. When the second tone is in resonance with the charge qubit splitting (white dotted line), the steady-state occupation of the charge qubit is changed, and due to the charge-photon coupling, this is reflected in a modified dispersive shift of the resonator. (B) Line cut at $\epsilon = 0$ , from which we extract a charge qubit dephasing rate of 52 MHz. (C) Transmission (phase response) at $f _ { p } = 6 . 0 4 3$ GHz as a function of $\boldsymbol { B } _ { \mathrm { e x t } }$ and the pump frequency applied to gate LP. When the pump frequency is in resonance with the spin qubit splitting, the steady-state occupation of the spin qubit is changed, and due to the spin-photon coupling, this is reflected in a modified response of the resonator. The slope of the response corresponds to a spin with $g _ { L } = 2 ,$ as expected. (D) Line cut at $B _ { \mathrm { e x t } } = 1 0 0 . 1$ mT, from which we extract a spin qubit dephasing rate of 1.4 MHz.

To probe coherent spin-photon coupling, we keep the charge sector parameters constant so that the interaction with charge remains dispersive. By varying $B _ { \mathrm { e x t } }$ , we control the spin splitting such that the interaction with the spin goes from dispersive to resonant. On resonance, spin and photon hybridize (Fig. 2F triangle). Experimentally, we record the transmission through the feed line as a function of the strength of an in-plane magnetic field $\boldsymbol { B } _ { \mathrm { e x t } }$ (the total field is the vector sum of external field and the micromagnet stray field) and the probe frequency $f _ { p }$ applied to the feed line. As expected, the cavity resonance seen in transmission is (nearly) independent of $B _ { \mathrm { e x t } }$ at large spin-resonator detuning. When the spin splitting approaches resonance with the resonator frequency, we observe a strong response in the form of an anti-crossing (Fig. 2C). The slope $f / B _ { \mathrm { e x t } }$ of the slanted branch corresponds to $g _ { L } \mu _ { B }$ , with µ<sub>B</sub> the Bohr magneton and $g _ { L } \approx 2$ the Land´e g-factor of an electron spin in Si. The observed avoided crossing is thus a clear signature of the coherent hybridization of the spin qubit with a single microwave photon.

The line cut, indicated by the dashed green line in Fig. 2C and shown in Fig. 2D, reveals two well separated peaks. This feature is known as the vacuum Rabi splitting and is the hallmark of strong coherent spin-photon coupling. The peak separation is about 26 MHz, corresponding to a spin-photon coupling strength $g _ { s } / 2 \pi$ of 13 MHz. The cavity decay rate can be extracted independently from the linewidth away from spin-photon resonance, here $\kappa / 2 \pi = 5 . 4$ MHz (here the cavity dispersively interacts with the charge, so $\kappa > \kappa _ { r } ~ [ 3 1 ] )$ . The spin dephasing rate $\gamma _ { s } / 2 \pi = 2 . 5$ MHz is independently obtained from two-tone spectroscopy of the spin transition (discussed next). We observe that $g _ { s } > \kappa , \gamma _ { s }$ , satisfying the condition for strong coupling of a single electron spin to a single microwave photon.

Two-tone spectroscopy of the charge and spin qubits allows us to independently extract the respective qubit splittings and dephasing rates. In Fig. 3A,B the second tone is resonant with the charge qubit splitting around 11.1 GHz, with a dependence on  described by $h f _ { c } = \sqrt { 4 t _ { c } ^ { 2 } + \epsilon ^ { 2 } }$ , with $t _ { c }$ the interdot tunnel coupling and h Planck’s constant, see the white dotted line (neglecting spin-charge hybridization). In this case, we extract from the linewidth a charge qubit dephasing rate $\gamma _ { c } / 2 \pi$ of 52 MHz. In Fig. 3C,D, we sweep the second tone through the spin resonance condition while keeping the spin-photon system in the dispersive regime. We observe a linear dependence of spin splitting on $B _ { \mathrm { e x t } } ,$ with a slope corresponding to $g _ { L } = 2$ , as expected. At $2 t _ { c } / h = 1 2 . 6$ GHz, we extract $\gamma _ { s } / 2 \pi = 1 . { \it \Omega }$ 4 MHz from the linewidth. This is somewhat larger than the ∼ 0.3 MHz single-spin dephasing rates observed in a single Si/SiGe quantum dot [11, 12, 23], as can be expected given that an electron in a DQD at $\epsilon = 0$ is more susceptible to charge noise, which afects spin coherence through the magnetic field gradient [25–27].

The spin-photon hybridization can be controlled with gate voltages. Indeed, by moving away from $\epsilon = 0$ , the photon and charge no longer hybridize, and then also the spin-photon coupling vanishes, as expected (Fig. 2E). Furthermore, at $\epsilon = 0$ the spin-photon coupling strength can be approximated as $g _ { s } = g _ { c } \Delta B _ { x } / ( 2 t _ { c } - f _ { r } )$ (provided the magnetic field profile is symmetric relative to the DQD) [25–27]. Here $\Delta B _ { x }$ is the diference in the transverse field between the two dots. Starting from large $t _ { c } ,$ reducing $t _ { c }$ increases charge-photon admixing, and thus indirectly spin-photon coupling as well, as seen experimentally in Figs. 4B-D. With increased charge-photon admixing, the asymmetry in the intensity of the two branches also increases, as expected in this system composed of photon, charge and spin [27], and an additional feature appears close to the lower branch (discussed in the Supplementary Information). The variation of $g _ { s }$ with $t _ { c }$ is summarised in Fig. 4A. However, as seen in the same figure, with lower $t _ { c }$ the spin decay rate $\gamma _ { s }$ increases as well, as does the cavity decay rate κ [27]. Ultimately, we wish to maximize the peak separation over linewidth, $2 g _ { s } / ( \gamma _ { s } + \kappa / 2 )$ . In this respect, there is an optimal choice of tunnel coupling, as seen from Fig. 4A.

A  
![[assets/figures/references/samkharadze-2018/f33c726cf5041b9a9e1b6ec4e01f5afb28065dcc4d336e1eb0525f8abd9674a5.jpg]]

![[assets/figures/references/samkharadze-2018/6ac2205cb2a20d7e0fb3308647020bb286e3c41df6ea1de7343466fc3efdff54.jpg]]

![[assets/figures/references/samkharadze-2018/06f0214a013e14bb4371536d37d44b7ee70f2479b6bf649576027436a66961d9.jpg]]  
E  
C

![[assets/figures/references/samkharadze-2018/520aa255cb697de6a63565e65f7c735e22ab55a2585247559d70308941bd4940.jpg]]

![[assets/figures/references/samkharadze-2018/32444c7f0eafcfa7db73a9b49d5276eb8b08eab138875a4af43728b63190176a.jpg]]  
D

![[assets/figures/references/samkharadze-2018/56b0eb9d41c773548ae324af4e8005619017b756db376b0ea316e9cfc4e552b1.jpg]]  
FIG. 4. Control of the spin-photon coupling. (A) The dependence on DQD tunnel coupling of $g _ { s } , \kappa , \gamma _ { s }$ (upper panel) and the ratio of peak splitting to linewidth $2 g _ { s } / ( \gamma _ { s } + \kappa / 2 )$ (lower panel). While all three separate quantities increase with lower $2 t _ { c } ,$ , the ratio $2 g _ { s } / ( \gamma _ { s } + \kappa / 2 )$ , which is the most relevant quantity, shows an optimum value around $f _ { c } = 1 0 ~ \mathrm { G H z }$ . (B-D) Similar data to Fig. 2C for three diferent values of DQD tunnel coupling, as indicated. (E) Transmission as a function of $\boldsymbol { B _ { \mathrm { e x t } } }$ and . Where the blue band is interrupted, the Zeeman splitting is resonant with the (dispersively shifted) resonator.

Finally, we study how close together the charge and spin sweet spots occur, where the relevant frequency (charge or spin) is to first order insensitive to the DQD

[1] A. Einstein, Ann. Phys. 17, 132-148 (1905).

[2] S. Haroche and J.-M. Raimond, Exploring the Quantum: Atoms, Cavities, and Photons (Oxford University Press, New York, 2006).

[3] R. J. Thompson, G. Rempe, and H. J. Kimble, Phys. Rev. Lett. 68 1132 (1992).

misalignment. The charge sweet spot is seen in Fig. 2B, at $\epsilon = 0$ and $f _ { p } = 6 . 0 3 ~ \mathrm { G H z }$ . If the micromagnets are placed symmetrically with respect to the DQD (as in Fig. 1D), the total magnetic field magnitude is symmetric around the center of the DQD. In this case, the spin splitting has no first order dependence on  at $\epsilon = 0$ and the charge and spin sweet spots coincide. For asymmetrically placed magnets, the spin sweet spot occurs away from $\epsilon = 0$ . To find the spin sweet spot, we vary  and $\boldsymbol { B } _ { \mathrm { e x t } }$ at $f _ { p } = 6 . 0 3$ GHz (Fig. 4E). Throughout the blue band, $f _ { p }$ is resonant with the cavity frequency (in the dispersive charge-photon regime). Where the blue band is interrupted, the magnetic field brings the spin on resonance with the cavity photon, spin and photon hybridize, and the transmission is modified. As expected, we see that this spin-photon resonance condition slightly shifts in magnetic field as a function  [24]. The value of  where this shift has no first order dependence on  occurs close to $\epsilon = 0$ , i.e. the spin sweet spot lies close to the charge sweet spot.

The strong coupling of spin and photon not only opens up a new range of physics experiments but is also the crucial requirement for coupling spin qubits at a distance via a superconducting resonator. Given the large dimensions of the resonators compared to the double dot dimensions, multiple spin qubits can interact to and via the same resonator, enabling scalable networks of interconnected spin qubit registers [32]. Importantly, the spin-photon coupling can be switched on or of on nanosecond timescales using gate voltage pulses that control the double dot misalignment and tunnel coupling, facilitating on-demand coupling of one or more spins to a common resonator.

∗ These authors contributed equally to this work.

## ACKNOWLEDGMENTS

We thank J. Taylor, P. Scarlino, A. Yacoby, J. Kroll and members of the spin qubit team at QuTech for useful discussions, and L. Kouwenhoven and his team for access to NbTiN films. This research was undertaken thanks in part to funding from the European Research Council (ERC Synergy Quantum Computer Lab), the Dutch Foundation for Scientific Research (NWO through the Casimir Research School), Intel Corporation, the Canada First Research Excellence Fund and NSERC.

[4] M. Brune, F. Schmidt-Kaler, A. Maali, J. Dreyer, E. Hagley, J. M. Raimond, and S. Haroche, Phys. Rev. Lett. 76, 1800 (1996).

[5] A. Wallraf, D. I. Schuster, A. Blais, L. Frunzio, R.-S. Huang, J. Majer, S. Kumar, S. M. Girvin, and R. J. Schoelkopf, Nature 431, 162 (2004).

[6] I. Chiorescu, P. Bertet, K. Semba, Y. Nakamura, C. J. P. M. Harmans, and J. E. Mooij, Nature 431, 159 (2004).

[7] J. P. Reithmaier, G. Sek, A. Lofler, C. Hofmann, S. Kuhn, S. Reitzenstein, L. V. Keldysh, V. D. Kulakovskii, T. L. Reinecke, and A. Forchel, Nature 432, 197 (2004).

[8] T. Yoshie, A. Scherer, J. Hendrickson, G. Khitrova, H. M. Gibbs, G. Rupper, C. Ell, O. B. Shchekin, and D. G. Deppe, Nature 432, 200 (2004).

[9] D. Shulman, O. E. Dial, S. P. Harvey, H. Bluhm, V. Umansky, and A. Yacoby, Science 336, 202-205 (2012).

[10] M. Veldhorst, C. H. Yang, J. C. C. Hwang, W. Huang, J. P. Dehollain, J. T. Muhonen, S. Simmons, A. Laucht, F. E. Hudson, K. M. Itoh, A. Morello, and A. S. Dzurak, Nature 526, 410 (2015).

[11] T. F. Watson, S. G. J. Philips, E. Kawakami, D. R. Ward, P. Scarlino, M. Veldhorst, D. E. Savage, M. G. Lagally, Mark Friesen, S. N. Coppersmith, M. A. Eriksson, L. M. K. Vandersypen, arXiv:1708.04214.

[12] D. M. Zajac, A. J. Sigillito, M. Russ, F. Borjans, J. M. Taylor, G. Burkard, J. R. Petta, arXiv:1708.03530.

[13] X. Mi, J. V. Cady, D. M. Zajac, P. W. Deelman, and J. R. Petta, Science 335, 156 (2017).

[14] A. Stockklauser, P. Scarlino, J. V. Koski, S. Gasparainetti, C. K. Andersen, C. Reichl, W. Wegscheider, T. Ihn, K. Ennslin, and A. Wallraf, Phys. Rev. X 7, 011030 (2017).

[15] L. E. Bruhat, T. Cubaynes, J.J. Viennot, M. C. Dartiailh, M.M. Desjardins, A. Cottet, T. Kontos, arXiv:1612.05214.

[16] X. Mi, M. Benito, S. Putz, D. M. Zajac, J. M. Taylor, G. Burkard, J. R. Petta, arXiv:1710.03265.

[17] P. Haikka, Y. Kubo, A. Bienfait, P. Bertet, K. Mølmer, Phys. Rev. A 95 022306 (2017).

[18] L. Childress, A. S. Sørensen, and M. D. Lukin, Phys. Rev. A 69, 042302 (2004).

[19] G. Burkard and A. Imamoglu, Phys. Rev. B 74, 041307 (2006).

[20] M. Trif, V. N. Golovach, and D. Loss, Phys. Rev. B 77, 045434 (2008).

[21] A. Cottet and T. Kontos, Phys. Rev. Lett. 105, 160502 (2010).

[22] M. Pioro-Ladri\`ere, Y. Tokura, T. Obata, T. Kubo, S. Tarucha, Appl. Phys. Lett. 90, 024105 (2007).

[23] E. Kawakami, P. Scarlino, D. R. Ward, F. R. Braakman, D. E. Savage, M. G. Lagally, Mark Friesen, S. N. Coppersmith, M. A. Eriksson, L. M. K. Vandersypen, Nat. Nanotechnol. 9, 666 (2014).

[24] J. J. Viennot, M. C. Dartiailh, A. Cottet, T. Kontos, Science 349, 408 (2015).

[25] X. Hu, Y.-X. Liu, and F. Nori, Phys. Rev. B 86, 035314 (2012).

[26] F. Beaudoin, D. Lachance-Quirion, W. A. Coish, M. Pioro-Ladri\`ere, Nanotechnology 27, 464003 (2016).

[27] M. Benito, X. Mi, J. M. Taylor, J. R. Petta, Guido Burkard, arXiv:1710.02508.

[28] N. Samkharadze, A. Bruno, P. Scarlino, G. Zheng, D. P. DiVincenzo, L. DiCarlo, L. M. K. Vandersypen, Phys. Rev. Applied 5, 044004 (2016).

[29] T. Hayashi, T. Fujisawa, H. D. Cheong, Y. H. Jeong, Y. Hirayama, Phys. Rev. Lett. 91, 226804 (2003).

[30] K. D. Petersson, L. W. McFaul, M. D. Schroer, M. Jung, J. M. Taylor, A. A. Houck, J. R. Petta, Nature 490, 380 (2012).

[31] T. Frey, P. J. Leek, M. Beck, A. Blais, T. Ihn, K. Ensslin, and A. Wallraf, Phys. Rev. Lett. 108, 046807 (2012).

[32] L. M. K. Vandersypen, H. Bluhm, J. S. Clarke, A. S. Dzurak, R. Ishihara, A. Morello, D. J. Reilly, L. R. Schreiber and M. Veldhorst, npj Q. Info. 3, 34 (2017).
