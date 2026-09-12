---
title: Electron transport through double quantum dots
description: 双量子点输运的权威综述：电荷稳定图、偏压三角形、赝自旋与隧穿耦合的系统实验与理论框架。
aliases:
 - vanderwiel-2002
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">双量子点输运的权威综述：电荷稳定图、偏压三角形、赝自旋与隧穿耦合的系统实验与理论框架。</div>

> [!info] 文献信息
> W. G. van der Wiel *et al.*, “Electron transport through double quantum dots”, Reviews of Modern Physics **74**, 801 (2002).
> [arXiv:cond-mat/0205350](https://arxiv.org/abs/cond-mat/0205350) · [DOI:10.1103/RevModPhys.74.801](https://doi.org/10.1103/RevModPhys.74.801)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

W. G. van der Wiel <sup>∗</sup> Department of Physics and ERATO Mesoscopic Correlation Project, Tokyo University, 7-3-1 Hongo, Bunkyo-ku, Tokyo 113-0033, Japan; Department of Applied Physics and DIMES, Delft University of Technology, PO Box 5046, 2600 GA Delft, The Netherlands

S. De Franceschi and J. M. Elzerman Department of Applied Physics, DIMES, and ERATO Mesoscopic Correlation Project, Delft University of Technology, PO Box 5046, 2600 GA Delft, The Netherlands

T. Fujisawa NTT Basic Research Laboratories, Atsugi-shi, Kanagawa 243-0198, Japan

S. Tarucha

Department of Physics and ERATO Mesoscopic Correlation Project, Tokyo University, 7-3-1 Hongo, Bunkyo-ku, Tokyo 113-0033, Japan

L. P. Kouwenhoven Department of Applied Physics, DIMES, and ERATO Mesoscopic Correlation Project, Delft University of Technology, PO Box 5046, 2600 GA Delft, The Netherlands

Electron transport experiments on two lateral quantum dots coupled in series are reviewed. An introduction to the charge stability diagram is given in terms of the electrochemical potentials of both dots. Resonant tunneling experiments show that the double dot geometry allows for an accurate determination of the intrinsic lifetime of discrete energy states in quantum dots. The evolution of discrete energy levels in magnetic field is studied. The resolution allows to resolve avoided crossings in the spectrum of a quantum dot. With microwave spectroscopy it is possible to probe the transition from ionic bonding (for weak inter-dot tunnel coupling) to covalent bonding (for strong inter-dot tunnel coupling) in a double dot artificial molecule. This review on the present experimental status of double quantum dot studies is motivated by their relevance for realizing solid state quantum bits.

## Contents

I. INTRODUCTION 2   
II. Stability diagram 3   
A. Linear transport regime 3   
1. Classical theory 3   
2. Quantized states 6   
3. Experimental stability diagrams 8   
B. Non-linear transport regime 10   
1. Classical theory 10   
2. Quantized states 11   
III. Resonant tunneling 11   
IV. Magnetic field spectroscopy 17   
V. Microwave spectroscopy 18   
A. Two-level systems 19   
B. Photon assisted tunneling in weakly coupled dots 21   
C. Photon assisted tunneling in strongly coupled dots 23   
VI. CONCLUSIONS 26   
Acknowledgments 28   
Electrostatic energy of quantum dots 29   
1. Electrostatics of a system of $N$ conductors 29   
2. Single quantum dot 30   
3. Double quantum dot 31   
References 31

## I. INTRODUCTION

Quantum dots are man-made sub-micron structures in a solid, typically consisting of $1 0 ^ { 3 } – 1 0 ^ { 9 }$ atoms and a comparable number of electrons (Kouwenhoven et al., 1997). In semiconductor quantum dots all electrons are tightly bound, except for a small number of free electrons, which can range from zero to several thousands. For the quantum dot devices considered in this review, the starting point for fabrication is formed by a heterostructure consisting of diferent semiconductor materials (GaAs/AlGaAs). The free electrons are strongly confined to the interface between GaAs and AlGaAs, forming a 2-dimensional electron gas (2DEG). Confinement in the other two dimensions is accomplished by locally depleting the 2DEG, via etching techniques or metal gate electrodes. The resulting structure is weakly coupled to source and drain electrical contacts by tunnel barriers, connecting it to the outside world.

An important element of electronic transport through quantum dots is Coulomb blockade (Averin and Likharev, 1986, 1991; Grabert and Devoret, 1992; Kouwenhoven et al., 1997). An extra electron can only be added to the dot, if enough energy is provided to overcome the Coulomb repulsion between the electrons. Next to this purely classical efect, the confinement in all three directions leads to quantum efects that strongly influence electronic transport a low temperature. In particular it leads to the formation of a discrete (0D) energy spectrum, resembling that of an atom. This and other similarities have therefore lead to the name artificial atoms for quantum dots (Kastner, 1993).

The next logical step after studying individual quantum dots is to study systems of more than one dot. Where single quantum dots are regarded as ‘artificial atoms’, two quantum dots can be coupled to form an ‘artificial molecule’. Depending on the strength of the inter-dot coupling, the two dots can form ionic-like (weak tunnel coupling) or covalent-like bonds (strong tunnel coupling). In the case of ionic bonding the electrons are localized on the individual dots. The binding occurs, because a static redistribution of electrons leads to an attractive Coulomb interaction. Weakly, electrostatically coupled quantum dots with negligible inter-dot tunnel conductance are covered by orthodox Coulomb blockade theory (Averin and Likharev, 1991). In the case of covalent bonding, two electron states are quantum-mechanically coupled. The main requirement for covalent binding is that an electron can tunnel many times between the two dots in a phase-coherent way. Here the electron cannot be regarded as a particle that resides in one particular dot, but it must be thought of as a coherent wave that is delocalized over the two dots. The bonding state of a strongly coupled artificial molecule has a lower energy than the energies of the original states of the individual dots. This energy gain forms the binding force between the two dots.

The theoretical possibility to perform certain tasks in a much more eficient way using a ‘quantum computer’ instead of a ‘classical computer’, has stimulated the search for physical realizations of the basic building block of such a computer: the quantum bit. In principle, any quantum two-level system can be used as such a qubit. In particular, recent studies have put forward double quantum dots as interesting candidates for realizing qubits (Loss and DiVincenzo, 1998). The possible application of double quantum dot devices in quantum logic forms an important motivation for this work.

In this review we concentrate on electron transport through lateral double quantum dots coupled in series. All devices have been fabricated and all experiments have been performed at Delft University of Technology and NTT Basic Research Laboratories. By now there exists an extensive literature on experimental studies of electron transport through double lateral quantum dots coupled in series<sup>1</sup>, and lateral double dots coupled in parallel<sup>2</sup>. Vertical double quantum dot structures<sup>3</sup> fall outside the focus of this review. In vertical structures, the characteristics of the tunnel barriers are set by the growth parameters of the heterostructure, limiting the experimental tunability. Besides that, the gate geometry used in these devices, makes it dificult to address dots independently.

As a first step to understanding double dot systems we introduce the stability diagram (Pothier et al., 1992), or honeycomb diagram, in section II. It is a convenient tool in the analysis of double dot transport properties. Resonant tunneling experiments discussed in section III, show that the resonant widths are only determined by the lifetime of the discrete energy states, independent of the electron temperature. In section IV we discuss level spectroscopy in a magnetic field. The double dot geometry ofers suficient energy resolution to probe intra-dot level repulsion. In section V we present microwave spectroscopy measurements on a quantum dot molecule. We illustrate the transition from a weakly coupled double dot to a strongly coupled double dot, by discussing a two-level system in section

V.A. Although being a clear simplification, the mapping of the double dot on a two-level system grasps much of the physics of the experiments presented in section V. Irradiation with microwaves leads to photon assisted tunneling (PAT) (sections V.B and $\mathrm { V . C ) }$ , which turns out to be a powerful tool not only to reveal the character of the inter-dot coupling, but also to quantitatively determine the bonding strength.

## II. STABILITY DIAGRAM

In this section we introduce the stability – or honeycomb – diagram that visualizes the equilibrium charge states of two serially coupled dots.

## A. Linear transport regime

## 1. Classical theory

We start with a purely classical description in which the influence of discrete quantum states is not taken into account yet (Dixon, 1998; Pothier et al., 1992; Ruzin et al., 1992)<sup>4</sup>. The double dot is modeled as a network of resistors and capacitors $( \mathrm { F i g . ~ 1 } )$ . The number of electrons on dot 1(2) is ${ \cal N } _ { 1 ( 2 ) }$ . Each dot is capacitively coupled to

![[assets/figures/references/vanderwiel-2002/9318bdc27046eedc553469df672e5113a94bb80a6e940c9ea87318208a0f20a0.jpg]]  
FIG. 1 Network of resistors and capacitors representing two quantum dots coupled in series. The diferent elements are explained in the text. Note that tunnel barriers are characterized by a resistor and a capacitor, as indicated in the inset.

a gate voltage $V _ { g 1 ( 2 ) }$ through a capacitor $C _ { g 1 ( 2 ) }$ and to the source (S) or drain (D) contact through a tunnel barrier represented by a resistor $R _ { L ( R ) }$ and a capacitor ${ \cal C } _ { L ( R ) }$ connected in parallel. The dots are coupled to each other by a tunnel barrier represented by a resistor $R _ { m }$ and a capacitor $C _ { m }$ in parallel. The bias voltage, V, is applied to the source contact with the drain contact grounded (asymmetric bias). In this section we consider the linear transport regime, i.e. $V \approx 0 .$ . If cross-capacitances (such as between $V _ { g 1 }$ and dot 2), other voltage sources and stray capacitances are negligible, the double dot electrostatic energy reads (a full derivation is given in the appendix)

$$
\begin{array}{r l} {U (N _ {1}, N _ {2}) =} & {\frac {1}{2} N _ {1} ^ {2} E _ {C 1} + \frac {1}{2} N _ {2} ^ {2} E _ {C 2} + N _ {1} N _ {2} E _ {C m} + f (V _ {g 1}, V _ {g 2})} \\ {f (V _ {g 1}, V _ {g 2}) =} & {\frac {1}{- | e |} \{C _ {g 1} V _ {g 1} (N _ {1} E _ {C 1} + N _ {2} E _ {C m}) + C _ {g 2} V _ {g 2} (N _ {1} E _ {C m} + N _ {2} E _ {C 2}) \}} \\ & {+ \frac {1}{e ^ {2}} \{\frac {1}{2} C _ {g 1} ^ {2} V _ {g 1} ^ {2} E _ {C 1} + \frac {1}{2} C _ {g 2} ^ {2} V _ {g 2} ^ {2} E _ {C 2} + C _ {g 1} V _ {g 1} C _ {g 2} V _ {g 2} E _ {C m} \}} \end{array}\tag{1}
$$

where $E _ { C 1 ( 2 ) }$ is the charging energy of the individual dot $1 ( 2 )$ and $E _ { C m }$ is the electrostatic coupling energy. The coupling energy $E _ { C m }$ is the change in the energy of one dot when an electron is added to the other dot. These energies can be expressed in terms of the capacitances as follows

$$
E _ {C 1} = \frac {e ^ {2}}{C _ {1}} \bigg (\frac {1}{1 - \frac {C _ {m} ^ {2}}{C _ {1} C _ {2}}} \bigg); E _ {C 2} = \frac {e ^ {2}}{C _ {2}} \bigg (\frac {1}{1 - \frac {C _ {m} ^ {2}}{C _ {1} C _ {2}}} \bigg); E _ {C m} = \frac {e ^ {2}}{C _ {m}} \bigg (\frac {1}{\frac {C _ {1} C _ {2}}{C _ {m} ^ {2}} - 1} \bigg)\tag{2}
$$

Here $C _ { 1 ( 2 ) }$ is the sum of all capacitances attached to dot 1(2) including $C _ { m } \colon C _ { 1 ( 2 ) } = C _ { L ( R ) } + C _ { g 1 ( 2 ) } + C _ { m }$ . Note that $E _ { C 1 ( 2 ) }$ can be interpreted as the charging energy of the single, uncoupled dot 1(2) multiplied by a correction factor that accounts for the coupling. When $C _ { m } = 0$ , and hence $E _ { C m } = 0$ , Eq. (1) reduces to

$$
U (N _ {1}, N _ {2}) = \frac {(- N _ {1} | e | + C _ {g 1} V _ {g 1}) ^ {2}}{2 C _ {1}} + \frac {(- N _ {2} | e | + C _ {g 2} V _ {g 2}) ^ {2}}{2 C _ {2}}\tag{3}
$$

This is the sum of the energies of two independent dots. In the case when $C _ { m }$ becomes the dominant capacitance $( C _ { m } / C _ { 1 ( 2 ) }  1 )$ , the electrostatic energy is given by

$$
U (N _ {1}, N _ {2}) = \frac {[ - (N _ {1} + N _ {2}) | e | + C _ {g 1} V _ {g 1} + C _ {g 2} V _ {g 2} ] ^ {2}}{2 (\widetilde {C} _ {1} + \widetilde {C} _ {2})}\tag{4}
$$

This is the energy of a single dot with a charge $N _ { 1 } + N _ { 2 }$ and a capacitance of ${ \widetilde { C } } _ { 1 } + { \widetilde { C } } _ { 2 }$ , where $\tilde { C } _ { 1 ( 2 ) } = C _ { 1 ( 2 ) } - C _ { m }$ is ethe capacitance of dot 1(2) to the outside world. Thus, a large inter-dot capacitance $C _ { m }$ eefectively leads to one big dot.

The electrochemical potential $\mu _ { 1 ( 2 ) } ( N _ { 1 } , N _ { 2 } )$ of dot 1(2) is defined as the energy needed to add the $N _ { 1 ( 2 ) }$ th electron to dot 1(2), while having $N _ { 2 ( 1 ) }$ electrons on dot $2 ( 1 )$ . Using the expression for the total energy Eq. (1), the electrochemical potentials of the two dots ar

$$
\begin{array}{l} \mu_ {1} (N _ {1}, N _ {2}) \equiv U (N _ {1}, N _ {2}) - U (N _ {1} - 1, N _ {2}) \\ \qquad = (N _ {1} - \frac {1}{2}) E _ {C 1} + N _ {2} E _ {C m} - \frac {1}{| e |} \left(C _ {g 1} V _ {g 1} E _ {C 1} + C _ {g 2} V _ {g 2} E _ {C m}\right) \end{array}\tag{5}
$$

$$
\begin{array}{l} \mu_ {2} (N _ {1}, N _ {2}) \equiv U (N _ {1}, N _ {2}) - U (N _ {1}, N _ {2} - 1) \\ \qquad = (N _ {2} - \frac {1}{2}) E _ {C 2} + N _ {1} E _ {C m} - \frac {1}{| e |} \left(C _ {g 1} V _ {g 1} E _ {C m} + C _ {g 2} V _ {g 2} E _ {C 2}\right) \end{array}\tag{6}
$$

The change in $\mu _ { 1 } ( N _ { 1 } , N _ { 2 } )$ if, at fixed gate voltages, $N _ { 1 }$ is changed by one, $\mu _ { 1 } ( N _ { 1 } + 1 , N _ { 2 } ) - \mu _ { 1 } ( N _ { 1 } , N _ { 2 } ) = E _ { C 1 }$ , is called the addition energy of dot 1 and equals the charging energy of dot 1 in this classical regime. Similarly, the addition energy of dot 2 equals $E _ { C 2 }$ , and $\mu _ { 1 } ( N _ { 1 } , N _ { 2 } + 1 ) - \mu _ { 1 } ( N _ { 1 } , N _ { 2 } ) = \mu _ { 2 } ( N _ { 1 } + 1 , N _ { 2 } ) - \mu _ { 2 } ( N _ { 1 } , N _ { 2 } ) = E _ { C m }$ . In the next section we will discuss the addition energy in the quantum regime, where also the spacing between discrete energy levels plays a role.

From the electrochemical potentials in Eqs. (5) and (6) we construct a charge stability diagram, giving the equilib rium electron numbers $N _ { 1 }$ and $N _ { 2 }$ as a function of $V _ { g 1 }$ and $V _ { g 2 }$ . We define the electrochemical potentials of the left and right leads to be zero if no bias voltage is applied, $\mu _ { L } = \mu _ { R } = 0$ . Hence, the equilibrium charges on the dots are the largest values of $N _ { 1 }$ and $N _ { 2 }$ for which both $\mu _ { 1 } ( N _ { 1 } , N _ { 2 } )$

and $\mu _ { 2 } ( N _ { 1 } , N _ { 2 } )$ are less than zero. If either is larger than zero, electrons escape to the leads. This constraint, plus the fact that $N _ { 1 }$ and $N _ { 2 }$ must be integers, creates hexagonal domains in the $( V _ { g 1 } , V _ { g 2 } )$ -phase space in which the charge configuration is stable.

For completely decoupled dots $\left( C _ { m } = 0 \right)$ the diagram looks as in $\mathrm { F i g . ~ 2 ( a ) }$ . The gate voltage $V _ { g 1 ( 2 ) }$ changes the charge on dot 1(2), without afecting the charge on the other. If the coupling is increased, the domains become hexagonal (Fig. 2(b)). The vertices of the square domains have separated into ‘triple-points’. When $C _ { m }$ becomes the dominant capacitance $( C _ { m } / C _ { 1 ( 2 ) }  1 )$ , the triple-point separation reaches its maximum (see Fig. $2 ( \mathrm { c } ) )$ . The double dot behaves like one dot with charge $N _ { 1 } + N _ { 2 }$ , as seen from Eq. (4).

![[assets/figures/references/vanderwiel-2002/13a11695f751305e4d374c27cdba9fd752053d97b7594b1d1a040931396cfb49.jpg]]

![[assets/figures/references/vanderwiel-2002/3013f4f1c6d5c9f344f4c1b15b9c15cb824da403e9074d41b40bca5ed85b5423.jpg]]

![[assets/figures/references/vanderwiel-2002/c3ff03a006dbf7a7969126f381f794ce184f0fb4742f1b118f4185de8ee68027.jpg]]  
FIG. 2 Schematic stability diagram of the double-dot system for (a) small, (b) intermediate, and (c) large inter-dot coupling. The equilibrium charge on each dot in each domain is denoted by $( \dot { N } _ { 1 } , N _ { 2 } )$ . The two kinds of triple-points corresponding with the electron transfer process (•) and the hole transfer process (◦) are illustrated in (d). The region in the dotted square in (b) is depicted in more detail in Fig. 5.

We are considering the linear regime of conductance, implying $\mu _ { L } - \mu _ { R } = - | e | V \approx 0$ . In order to obtain a measurable current, the tunnel barriers need to be suficiently transparent. At the same time, however, the tunnel barriers need to be suficiently opaque to ensure a well-defined electron number on each dot. For double dots coupled in series, a conductance resonance is found when electrons can tunnel through both dots. This condition is met whenever three charge states become degenerate, i.e. whenever three boundaries in the honeycomb diagram meet in one point. In Fig. 2(d) two kinds of such triple-points are distinguished, (•) and (◦), corresponding to diferent charge transfer processes. At the triple point (•), the dots cycle through the sequence $( N _ { 1 } , N _ { 2 } )  ( N _ { 1 } + 1 , N _ { 2 } )  ( N _ { 1 } , N _ { 2 } + 1 )  ( N _ { 1 } , N _ { 2 } )$ which shuttles one electron through the system. This process is illustrated by the counterclockwise path e and the diagram of an electron sequentially tunneling from the left lead to the right in Fig. 2(d). At the other triple-point (◦), the sequence is $( N _ { 1 } + 1 , N _ { 2 } + 1 )  ( N _ { 1 } + 1 , N _ { 2 } )  ( N _ { 1 } , N _ { 2 } + 1 )  ( N _ { 1 } + 1 , N _ { 2 } + 1 )$ , corresponding to the clockwise path h in Fig. 2(d). This can be interpreted as the sequential tunneling of a hole in the direction opposite to the electron. The energy diference between both processes determines the separation between the triple-points (•) and (◦), and is given by $E _ { C m } ,$ as defined in Eq. (2).

The dimensions of the honeycomb cell (see Fig. 3) can be related to the capacitances using Eqs. (5) and (6). From

$$
\mu_ {1} (N _ {1}, N _ {2}; V _ {g 1}, V _ {g 2}) = \mu_ {1} (N _ {1} + 1, N _ {2}; V _ {g 1} + \Delta V _ {g 1}, V _ {g 2})\tag{7}
$$

we obtain

$$
\Delta V _ {g 1} = \frac {| e |}{C _ {g 1}}\tag{8}
$$

and similarly we can derive

$$
\Delta V _ {g 2} = \frac {| e |}{C _ {g 2}}\tag{\( (8') \}
$$

![[assets/figures/references/vanderwiel-2002/6038cac7af10707d309dce8bb004b21b6e5004b6ac51f765d8dd2b54dd8b357c.jpg]]  
FIG. 3 Schematic stability diagram showing the Coulomb peak spacings given in Eqs. (8) and (10). These spacings can be determined experimentally by connecting the triple-points.

From

$$
\mu_ {1} (N _ {1}, N _ {2}; V _ {g 1}, V _ {g 2}) = \mu_ {1} (N _ {1}, N _ {2} + 1; V _ {g 1} + \Delta V _ {g 1} ^ {m}, V _ {g 2})\tag{9}
$$

we obtain

$$
\Delta V _ {g 1} ^ {m} = \frac {| e | C _ {m}}{C _ {g 1} C _ {2}} = \Delta V _ {g 1} \frac {C _ {m}}{C _ {2}}\tag{10}
$$

and similarly we can derive

$$
\Delta V _ {g 2} ^ {m} = \frac {| e | C _ {m}}{C _ {g 2} C _ {1}} = \Delta V _ {g 2} \frac {C _ {m}}{C _ {1}}\tag{\( (10') \}
$$

However, for a full characterization of all capacitances in the system an analysis in the non-linear transport regime is required, as is discussed in section II.B.

Above we assumed that $V _ { g 1 }$ and $V _ { g 2 }$ only couple directly to the respective dots. In practice, however, there is a finite cross-capacitance from one gate to the other. The respective cross-capacitances result in a change of the slope of the charge domain boundaries in the honeycomb diagram. From Figs. 2(b) and 3 it is clear that both kinds of triple points (• and ◦) form a square lattice. However, with finite cross-capacitances the positions of the triple points move to lower $V _ { g 1 ( 2 ) }$ for increasing $V _ { g 2 ( 1 ) }$ (at constant V).

## 2. Quantized states

The discussion of the stability diagram so far has been completely classical. However, the strong confinement of electrons in the dots can lead to the formation of a discrete energy spectrum. To account for the quantized energy states in the dot, we need to incorporate their energies in the electrochemical potential. The electrochemical potential for adding an electron into energy level n of dot i is denoted by $\mu _ { i , n }$ . Within the constant interaction model, $\mu _ { i , n }$ is the sum of the classical electrochemical potential $\mu _ { i } ^ { c l a s s }$ and the single-particle energy $E _ { n } \colon \mu _ { i , n } = \mu _ { i } ^ { c l a s s } + E _ { n }$ . In the classical regime we found that the addition energy (the change in electrochemical potential needed to add an extra electron) equals the charging energy $E _ { C 1 }$ (for dot 1) or $E _ { C 2 }$ (for dot 2). In the quantum regime, the addition energy for the $( N _ { 1 } + 1 )$ th electron occupying discrete level m, with the $N _ { 1 }$ th electron occupying discrete level $n ,$ becomes

$$
\begin{array}{c} \mu_ {1, m} (N _ {1} + 1, N _ {2}) - \mu_ {1, n} (N _ {1}, N _ {2}) = E _ {C 1} + (E _ {m} - E _ {n}) \\ = E _ {C 1} + \Delta E. \end{array}\tag{11}
$$

Similarly, we find $E _ { C 2 } + \Delta E$ for the addition energy of dot 2. Note that for a (spin-)degenerate level ∆E can be zero. The dimensions of the honeycomb cell as given in Eqs. (8) and (10), and depicted in Fig. 3 for the classical regime, change as follows

$$
\Delta V _ {g 1 (2)} = \frac {| e |}{C _ {g 1 (2)}} \left(1 + \frac {\Delta E}{E _ {C 1 (2)}}\right)\tag{12}
$$

$$
\Delta V _ {g 1 (2)} ^ {m} = \frac {| e | C _ {m}}{C _ {g 1 (2)} C _ {2 (1)}} \bigg (1 + \frac {\Delta E}{E _ {C m}} \bigg)\tag{13}
$$

The electronic configuration that gives the lowest possible total energy in dot 1(2), is referred to as the dot 1(2) ground state. Any configuration with a higher total energy is referred to as an excited state. The electrochemical potential for adding the $N _ { 1 ( 2 ) } \ t$ th electron to the lowest unfilled energy level of the $( N _ { 1 ( 2 ) } - 1 )$ -electron ground state is labeled $\mu _ { 1 , 0 } ( N _ { 1 } , N _ { 2 } ) \left\{ \mu _ { 2 , 0 } ( \dot { N _ { 1 } } , N _ { 2 } ) \right\}$ . The electrochemical potential for adding the ${ \dot { N } } _ { 1 ( 2 ) } \dot { }$ th electron to a higher unfilled level of the $( N _ { 1 ( 2 ) } - 1 ) – \mathrm { e l e c t r o n }$ ground state – or to any unfilled level of an $( N _ { 1 ( 2 ) } - 1 )$ )-electron excited state – is labeled $\mu _ { 1 , 1 } ( \dot { N } _ { 1 } , \dot { N } _ { 2 } ) , \mu _ { 1 , 2 } ( N _ { 1 } , N _ { 2 } ) , \dots \left\{ \mu _ { 2 , 1 } ( N _ { 1 } , N _ { 2 } ) , \mu _ { 2 , 2 } ( N _ { 1 } , N _ { 2 } ) , \dots \right\}$

![[assets/figures/references/vanderwiel-2002/52564c0c092378038218fa0fbb4e4a353fed7374a5cc11199dac29a00d7e2cdc.jpg]]  
FIG. 4 Schematic diagram of the electrochemical potentials $\mu _ { i , n } ( N _ { 1 } , N _ { 2 } )$ in dots and leads in the linear regime. The first subscript indicates either the lead (L,R) or the dot (1,2). The second subscript refers to the nature of the dot energy state (ground state, n = 0 or nth excited state.

In Fig. 4 a schematic diagram is given, showing the electrochemical potentials in the leads and dots in the linear regime $( \mu _ { L } - \mu _ { R } = - | e | V \approx 0 )$ . The ground state electrochemical potentials $\mu _ { 1 , 0 } ( 1 , 0 )$ and $\mu _ { 2 , 0 } ( 0 , 1 )$ align within the small bias window, allowing an electron to tunnel from left to right. This is an example of an electron transfer process as depicted in Fig. 2(d). Note that an alignment of an arbitrary combination of electrochemical potentials in dot 1 and dot 2 does not necessarily lead to a current. For example, the alignment of $\mu _ { 1 , 0 } ( 1 , 0 )$ and $\mu _ { 2 , 0 } ( 1 , 1 )$ does not result in current through the double dot. In the linear regime electron transport occurs via ground states, whereas the excited states start to play a role in non-linear transport, as will be discussed in section II.B. In the following discussion of the linear regime the ground state of dot 1(2) is denoted by $\mu _ { 1 ( 2 ) } ( N _ { 1 } , N _ { 2 } )$ (without the discrete level index).

A more detailed picture of a honeycomb cell in the linear regime, marked by the dashed square in Fig. 2(b), is given in Fig. 5. The configuration of the ground-state electrochemical potentials is given in schematic diagrams on some places in the stability diagram. The dashed lines, which are extensions of the solid lines forming the honeycomb cells, help to find the position of both electrochemical potentials on a certain place. A crossing of dashed lines (as in the charge domains (0,1) and (1,0)) indicates that two electrochemical potentials align, but does not result in a current through the double dot.

![[assets/figures/references/vanderwiel-2002/85015f2841791d21d0b193c8a15ae0f68fc0873c34689d4809a8520c0793cf76.jpg]]  
FIG. 5 Region within the dotted square of Fig. 2(b), corresponding with the ‘unit cell’ of the double-dot stability diagram. Four diferent charge states can be distinguished, separated by solid lines. At the solid line connecting the two triple points, the charge states (0,1) and (1,0) are degenerate. At the other solid lines the electrochemical potential of at least one dot is zero and thus equals the electrochemical potential of the leads. The dashed lines are the extensions of the solid lines within the honeycomb cells. The triple-points lie on the crossing points between the solid lines. The schematic diagrams show the configuration of the ground-state electrochemical potentials on the corresponding place in the honeycomb diagram.

## 3. Experimental stability diagrams

Before discussing some experimental stability diagrams, we introduce the two kinds of lateral double dot devices being studied in this review. For the first type, only metal gate electrodes are used to confine the electrons in the 2DEG beneath. For the second type we use a combination of metal gates and dry etching to realize confinement.

A scanning electron microscope (SEM) image of the first device is shown in Fig. 6(a). Metal gates are deposited on top of a GaAs/AlGaAs heterostructure with a 2DEG 100 nm below the surface (van der Vaart et al., 1995). Applying a negative voltage to all gates depletes the 2DEG underneath them and forms two quantum dots. Current can flow from the large electron reservoir on the left via the three tunnel barriers induced by the gate pairs 1-F, 2-F, and 3-F to the reservoir on the right. The transmission of each tunnel barrier can be controlled individually by the voltage on gates 1, 2 or 3. A single quantum dot can be defined in the 2DEG by applying only a voltage to gates 1, 2, I and F (dot 1) or to gates 2, 3, II and F (dot 2). In this way, the individual dots can be characterized and their properties compared to those of the double dot.

The second device is schematically shown in Fig. 6(b). First a channel is defined in the 2DEG by focused-ion-beam (FIB) or electron-cyclotron-resonance (ECR) etching of an $\mathrm { A l _ { 0 . 3 } G a _ { 0 . 7 } A s / G a A s }$ modulation-doped heterostructure (Fujisawa and Tarucha, 1996). A double quantum dot can be formed by applying negative voltages to gates GL, GC and GR.

All experiments have been performed in a dilution refrigerator with a base temperature of 10 mK. The efective electron temperature in the leads is higher and can vary between ∼40 and ∼100 mK. A significant source of heating is the noise coming from the measurement electronics. The filters, used to attenuate the noise, have to be efective over a very large band width. They consist of a distributed RC network, usually a thin resistive wire going through a conducting medium such as copper powder or silver epoxy. The filters are installed at low temperature to minimize the thermal noise of the resistors inside. The filters are integrated with the sample holder in such a way that all sample wires are carefully shielded once they are filtered.

To efectively create a double quantum dot, all gate voltages need to be tuned properly. The cross capacitances between the various gate electrodes, make it dificult to vary just a single parameter without afecting the others.

![[assets/figures/references/vanderwiel-2002/494206be9bee890e0da6ae73e217a0f0aa2e1aaf605a4dc877403d85abcefd43.jpg]]  
FIG. 6 Double quantum dot devices. (a) SEM micrograph of a double dot defined by metallic gates (light gray areas). The ungated 2DEG (100 nm below the surface) has a mobility of $2 . 3 \times 1 0 ^ { 6 } ~ \mathrm { c m ^ { 2 } / ( V s ) }$ and an electron density of $1 \mathrm { \bar { . 9 } \times 1 0 ^ { 1 5 } \ \mathrm { \bar { m } ^ { - 2 } } }$ at 4.2 K. The dimensions of the dots defined by the gate pattern are $\mathrm { 3 2 0 \times 3 2 0 ~ n m ^ { 2 } }$ (dot 1, left) and 280 × 280 nm<sup>2</sup> (dot 2, right) (b) Schematic diagram of a double dot defined by a combination of dry etching and metallic gates. The carrier concentration and mobility of the ungated 2DEG (100 nm below the surface) at 1.6 K and in the dark are $3 \times 1 0 ^ { 1 1 } ~ \mathrm { c m ^ { - 2 } }$ and $8 \times 1 0 ^ { 5 }$ $\mathrm { c m } ^ { 2 } / ( \mathrm { V s } )$ , respectively. The lithographic distance between the ethched trenches (black lines), w, is typically 0.5 $\mu \mathrm { m } .$ . The efective width of the channel, $w _ { c h } ,$ can be tuned by voltages on the in-plane gates (IPGs). The gate electrodes are ∼40 nm wide $\left( l _ { g } \right)$ and are separated by $l _ { L C } = 1 6 0$ nm and $l _ { C R } = 2 2 0 \ \mathrm { n m }$ . A double quantum dot (dot 1, D1; dot 2, D2) can be formed by applying negative gate voltages to gates GL, GC and GR. A microwave field can be applied to the center gate GC.

![[assets/figures/references/vanderwiel-2002/a15dfeac3b444aacdd8712e2d8686e61acd0fed8925d839fa2a48dbad942bbfd.jpg]]  
FIG. 7 Experimental gray-scale plots of stability diagrams in a device similar to that shown in Fig. 6(b) for increasingly negative gate voltage on the middle gate electrode, GC. Dark (light) gray-scale corresponds to large (small) current through the double dot. GL is swept between -500 mV and -530 mV, GR between -840 mV and -900 mV, $\mathrm { G C } = - 6 6 0 ~ \mathrm { m V }$ (a), -670 mV (b), -690 mV (c), -700 mV (d), -710 mV (e) and -720 mV (f).

The stability diagram is of great value in setting up and characterizing a double quantum dot. Figure 7 illustrates the process of the creation of a double dot in a device similar to the one in Fig. 6(b). Starting point is the creation of a single large dot formed by the outer tunnel barriers, GL and GR. The measured stability diagram (Fig. 7(a)) resembles Fig. 2(c). The successive stability diagrams are measured for increasingly negative voltages on the middle gate electrode, GC, thus reducing the coupling between the dots. It is clearly seen that going from Fig. 7(a) to Fig. 7f, the stability diagram gradually evolves into the characteristic honeycomb structure. The edges of the honeycomb cells are visible due to of-resonance current. At the edges of a honeycomb cell, the electrochemical potential of one of the dots aligns with its neighboring lead (see Fig. 5). By a process called co-tunneling (Averin and Nazarov, 1992), transport can still take place via an intermediate virtual state. Co-tunneling processes are suppressed by increasing the tunnel barriers (i.e. making the gate voltages more negative), as can be seen from Fig. 7.

![[assets/figures/references/vanderwiel-2002/c0b4c31feb254dbfa5e936ad094773ba901d2cc1be7d4b9608e3e545990bbca9.jpg]]

![[assets/figures/references/vanderwiel-2002/10a30358da2e5e5d5a4b5615ca7662bfbaf049fec3ddc9c3db0ac6694f253155.jpg]]  
FIG. 8 (a) Experimental gray-scale plot of a stability diagram in the device of Fig. 6(a) at small bias voltage, $V = 1 5 ~ \mu \mathrm { e V }$ Dark (light) gray-scale corresponds to large (small) current through the double dot. The dashed lines indicate the honeycomb cells. (b) Region within the black rectangle of (a) at large bias voltage, $V = 1 2 0 \ \mu \mathrm { e V }$ . The triple points have grown into triangles and show clear resonant tunneling lines (black stripes), as discussed in section II.B.2. The shape of the triangles is accentuated by dashed lines.

Figure 8(a) shows a detail of a stability diagram obtained in the device shown in Fig. 6(a). The edges of the honeycomb cells are indicated by dashed lines. The triple points within the black square are well separated, whereas the other ones are still grown together. To separate also those points outside, the gate voltage on the middle barrier has to be tuned towards more negative values.

## B. Non-linear transport regime

## 1. Classical theory

We assume that the bias voltage is applied to the left lead $( \mu _ { L } = - | e | V )$ and that the right lead is grounded $( \mu _ { R }$ $= 0 )$ . The bias voltage is coupled to the double dot through the capacitance of the left lead, $C _ { L }$ , and hence also afects the electrostatic energy of the system. The bias dependence can be accounted for by replacing $C _ { g 1 ( 2 ) } V _ { g 1 ( 2 ) }$ with $C _ { g 1 ( 2 ) } V _ { g 1 ( 2 ) } + C _ { L 1 ( 2 ) } V$ in Eq. (1), where $\boldsymbol { C } _ { L 1 ( 2 ) }$ is the capacitance of the left lead to dot 1 (see Appendix $\mathrm { A } )$

The conductance regions at finite bias change from triple-points to triangularly shaped regions (Fig. 9). The conditions $- | e | V = \mu _ { L } \geq \mu _ { 1 } , \mu _ { 1 } \geq \mu _ { 2 }$ , and $\mu _ { 2 } \geq \mu _ { R } = 0$ determine the boundaries of the triangular regions. The dimensions of the triangles $\delta V _ { g 1 }$ and $\delta V _ { g 2 }$ (see Fig. 9) are related to the applied bias voltage as follows

$$
\begin{array}{r} \alpha_ {1} \delta V _ {g 1} = \frac {C _ {g 1}}{C _ {1}} | e | \delta V _ {g 1} = | e V | \\ \alpha_ {2} \delta V _ {g 1} = \frac {C _ {g 2}}{C _ {2}} | e | \delta V _ {g 2} = | e V | \end{array}\tag{14}
$$

where $\alpha _ { 1 }$ and $\alpha _ { 2 }$ are the conversion factors between gate voltage and energy. Combining Eqs. (8), (10) and (14), we can calculate the values of the total capacitances $C _ { 1 , 2 }$ C1 2 and mutual capacitance $C _ { m }$

![[assets/figures/references/vanderwiel-2002/89a57a693c731a230444930d716f16110dd7bfae4ebcdc8f77397db41f294649.jpg]]  
FIG. 9 Region within the dotted square of Fig. 2(a), corresponding to the ‘unit cell’ of the double-dot stability diagram, at finite bias voltage. The solid lines separate the charge domains. Classically, the regions of the stability diagram where current flows, are given by the gray triangles. In the case of one discrete level per dot, as in the schematic pictures, resonant tunneling is only possible along the side of the triangle that coincides with the dashed line connecting the original triple-points (• and ◦). However, also in this case inelastic tunneling and co-tunneling still contribute to a finite current within the gray triangles.

## 2. Quantized states

For suficiently large bias voltages, multiple discrete energy levels can enter the bias window. In this case, not only ground states, but also excited states contribute to the conductance. For the illustrative case of two levels per dot, the four possible alignments of the electrochemical potentials are shown in Fig. 10. Note that the electrochemical potentials are drawn for the situation where one electron is on the double dot and a second one is tunneling on to it. Due to Coulomb blockade, not less than one and not more than a total of two electrons is allowed on the double dot. The labeling of the electrochemical potentials, using the notation introduced in section II.A.2 is straightforward, except for tunneling through the excited state of dot 1 in Figs. $^ { 1 0 ( \mathrm { c } ) , \mathrm { d } }$ . Although the second electron is tunneling into the lowest level available in dot 1, this level is only accessible because dot 1 is in an excited state. For that reason, we choose the label $\mu _ { 1 , 1 } ( 2 , 0 )$ (instead of $\mu _ { 1 , 0 } ( 2 , 0 ) ,$ ). The successive alignment of ground and excited states leads to resonances within the conductance triangles, as shown in Fig. 11. The of-resonance conductance in the grey triangles is due to inelastic processes (Fujisawa et al., 1998; van der Vaart et al., 1995) and co-tunneling (Averin and Nazarov, 1992). Note that V is so large that the two triangles partly overlap.

Figure 8(b) shows the triple points within the black rectangle of Fig. 8(a) at finite bias. The triangular regions are clearly visible as well as the resonances within the triangles. The growth of the triangular regions with increasing bias voltage is illustrated in Fig. 12. Whereas only the ground state resonance is observed in Fig. 12(a), multiple resonances appear within the triangles of Fig. 12(b).

## III. RESONANT TUNNELING

In this section we discuss resonant tunneling experiments through the double dot of $\mathrm { F i g . 6 ( a ) }$ with discrete energy levels (van der Vaart et al., 1995). We show that, under appropriate conditions, the resonance widths are only determined by the lifetime of the discrete energy states, independent of the electron temperature in the leads. A small asymmetric deviation from the Lorentzian resonance shape is attributed to inelastic tunnel processes.

![[assets/figures/references/vanderwiel-2002/226aace33e4638d8383c23d2d7671825055f39bd44668c1bc070156087d810cf.jpg]]

![[assets/figures/references/vanderwiel-2002/a95c07e487a463ed232b251cd4bc7e0afae753c579d565bdb1bcb50022d8cb7c.jpg]]

![[assets/figures/references/vanderwiel-2002/64f080ea8c6a46cdb3e8ae9fd80808fe56a7322cec51bc95363528844e086b9a.jpg]]

![[assets/figures/references/vanderwiel-2002/3fb764f01f3ef30b231dde75a3bc1b10802aea761fab78da42afdd298517799d.jpg]]  
FIG. 10 Schematic diagrams showing the possible alignments of the electrochemical potentials in the case of two levels per dot. (a) The first electrochemical potentials to align correspond to the ground states of both dots, $\mathrm { G _ { 1 } }$ and $\mathrm { G } _ { 2 } .$ (b) When moving down the levels in the right dot, the next states to align are the ground state of the left dot, $\mathrm { G _ { 1 } } .$ , and the first excited state of the right dot, $\mathrm { X _ { 2 } }$ . (c) Shifting the levels of the right dot further down, results in transport through the first exited state of the left dot, $\mathrm { X } _ { 1 }$ and the right dot ground state, $\mathrm { G } _ { 2 } .$ (d) Finally, the excited states, $\mathrm { X } _ { 1 }$ and $\mathrm { X _ { 2 } }$ align.

The current-voltage (I-V) curves of the single quantum dots in Fig. 13 provide two clear signatures for the presence of both Coulomb blockade efects and discrete levels. At low bias voltages, the current through the dot is suppressed by the Coulomb blockade (Kouwenhoven et al., 1997). Increasing the bias voltage lifts the blockade. The current shows a stepwise increase: each time when an additional level enters the bias window $- | e | V$ , an extra transport channel is opened and the current increases (Foxman et al., 1993; Gu´eret et al., 1992; Johnson et al., 1992; Su et al., 1992). Hence, the voltage spacing of the current steps directly reflects the energy spacing of the levels. For the average level spacing, δ, we obtain $\delta _ { 1 } = 1 2 5 \mu \mathrm { e V }$ for dot 1 (upper inset) and $\delta _ { 2 } = 2 2 5 \mu \mathrm { e V }$ for dot 2 (lower inset). The diference in these two energies reflects the diferent lithographic sizes of the two dots (see Fig. 6(a)). Accounting for the depletion areas, we estimate that dot 1 has an efective diameter of 240 nm and contains about $N _ { 1 } = 9 0$ electrons, while dot 2 has an efective diameter of 200 nm and contains roughly $N _ { 2 } = 6 0$ electrons. Using the Fermi energy, $E _ { F }$ , at bulk density, we estimate $\delta _ { 1 } \approx 2 E _ { F } / N _ { 1 } = 1 5 0 ~ \mu \mathrm { e V }$ and $\delta _ { 2 } \approx 2 E _ { F } / N _ { 2 } = 2 3 0 ~ \mu \mathrm { e V }$ . This is in good agreement with the estimates obtained from the I-V curves. From the dimensions of the Coulomb diamonds (Kouwenhoven et al., 1997; Pothier et al., 1992) we obtain the charging energies $E _ { C }$ for adding an electron to the dot : $E _ { C 1 } = 1 . 1$ meV (dot 1) and $E _ { C 2 } = 1 . 8$ meV (dot 2).

We focus on the role of the discrete levels and consider the charging energies as constant ofsets in the transport conditions. Figure 13 shows an I-V curve of the double dot with all three tunnel barriers set in the weak-tunneling regime. The Coulomb blockade suppresses the current through the double dot at low bias voltages. At larger bias the current shows sharp resonances. The spacing of the resonances is about 250 $\mu \mathrm { e V }$ . This is of the same order as the level spacing in the single dots.

The same resonances are seen when we sweep the gate voltage. Figure 14 shows the current through the double dot versus the gate voltage on gate 1, $V _ { g 1 }$ , with $V = 2 8 0 ~ \mu \mathrm { e V }$ . This corresponds to a vertical cut through a stability diagram as shown in Fig. 12. The current shows three groups of sharp resonances separated by regions of zero current with a period $\Delta V _ { g 1 } = 9$ mV in gate voltage $V _ { g 1 }$ . With only dot 1 formed, we observe Coulomb oscillations as a function of $V _ { g 1 }$ with the same period $\Delta V _ { g 1 }$ ; each period thus corresponds to a change of one electron in dot 1, while keeping the number of electrons on dot $2 , N _ { 2 } .$ , constant. $\Delta V _ { g 1 }$ corresponds to the horizontal dimension of the honeycomb unit cell, as indicated in Fig. 3 in section II.A.1.

When elastic tunnel processes are the dominant transport mechanism, the current through the double dot is resonantly enhanced only when two levels in dot 1 and 2 align, as explained in section II.B.2. Tuning the level alignment with V or $V _ { g 1 }$ gives rise to the sharp resonances in Figs. 13 and 14. Resonant tunneling through the double dot is illustrated in the schematic potential landscape of the double dot in ${ \mathrm { F i g } } .$ . 15. This figure shows a few of the levels in dot 1 (levels 1 to 5) and dot 2 (levels α and β). The electrostatic potentials $\varphi _ { 1 }$ and ϕ<sub>2</sub> are tuned in such a way that transport through the double dot is possible only via the charge states $( N _ { 1 } , \dot { N _ { 2 } } )  ( \dot { N } _ { 1 } + 1 , N _ { 2 } )  ( N _ { 1 } , N _ { 2 } + 1 )  ( N _ { 1 } , N _ { 2 } )$ The finite bias voltage gives an electron from the left reservoir three choices to tunnel into dot 1: it can tunnel to one of the unoccupied levels 3, 4 or 5. This changes the electrostatic potential $\varphi _ { 1 }$ by the charging energy $E _ { C 1 }$ (the levels are drawn at the positions applicable after an electron has occupied one of them). When dot 1 relaxes to the ground state (the incoming electron occupying level 3), the electron can tunnel via level α to the right reservoir.

![[assets/figures/references/vanderwiel-2002/a9063f188cc906f9da17e1de87e04e5483e3c67417e7bb6f27895f420769520f.jpg]]  
FIG. 11 Schematic stability diagram corresponding to the finite-bias diagrams of Fig. 10. The black solid lines within the gray triangles correspond, from bottom to top, to the level alignments shown in Fig. 10(a)-(d), respectively.

![[assets/figures/references/vanderwiel-2002/1034c74e9ca416ba85f9445b172c7cd3e0c3d6c81c77e63dbc0654505362906d.jpg]]

![[assets/figures/references/vanderwiel-2002/1bf44def705f6a01b7128fa15bb30e45e3cc84e015c83469d6f8e6d92254e63d.jpg]]  
FIG. 12 Experimental gray-scale plots of stability diagrams in the non-linear regime, obtained in the device of Fig. $6 ( \mathrm { a } )$ . Dark (light) gray-scale corresponds to large (small) current through the double dot. The bias voltage between source and drain contacts is 200 $\mu \mathrm { V }$ (a) and 1 mV (b).

Note that if dot 1 does not immediately relax to the ground state, but remains in an excited state, with an electron occupying either level 4 or 5, electron transport through the double dot is temporarily blocked. The electron is ‘trapped’ within dot 1. Only after relaxation to the ground state a next tunnel event can occur. If the relaxation rate is small on the scale of the tunneling rates through the barriers, the inclusion of levels 4 and 5 within the bias window could therefore lead to a decrease of the current through the double dot. On the other hand, in case of fas relaxation, the enhanced tunnel probability when also the levels 4 and 5 lie within the bias window, could lead to an increase in the current. Note that next to intra-dot relaxation, also inelastic tunneling from level 4 or 5 to either level α or $\beta$ can occur. This process is accompanied by emission of a boson (usually phonons (Fujisawa et al., 1998)) and contributes to the of-resonance current in Fig. 14.

![[assets/figures/references/vanderwiel-2002/de2b2327e33fea4595a262d32cf6c07d61a4ae49b0983b3d360600967ea514a7.jpg]]  
FIG. 13 I-V curve of the double dot, showing sharp resonances in the current when two discrete levels align. Upper inset: I-V curve of dot 1. Lower inset: I-V curve of dot 2. Both insets show a suppression of the current at low voltages due to the Coulomb blockade and a stepwise increase of the current due to the discrete energy spectrum of the dot (from (van der Vaart et al., 1995)).

![[assets/figures/references/vanderwiel-2002/9e17cb7f62778f9e842e589821ffbdb94d8de8e5ae1059963fdce63978575aa4.jpg]]  
FIG. 14 Current through the double dot versus gate voltage $V _ { g 1 }$ using a bias voltage $V = 2 8 0 ~ \mu \mathrm { V } .$ Inset: The current through the double dot as a function of $V _ { g 3 }$ with $V = 1$ mV, showing that the number of resonances increases with bias voltage (from (van der Vaart et al., 1995)).

The resonances in a particular group in Fig. 14 can be identified with the energy diagram of Fig. 15. The first resonance occurs when level 3 aligns with level α (peak 3-α). This corresponds to the rightmost peak in Fig. 14. Increasing $- | e | \varphi _ { 1 }$ by making $V _ { g 1 }$ more negative, brings transport of-resonance until level 2 aligns with α (peak 2-α) followed by the third peak $3 \mathrm { - } \beta .$ Continuing to sweep $V _ { g 1 }$ increases the energy of level 3 above the electrochemical potential $\mu _ { L }$ of the left reservoir. This blocks transport and removes an electron from dot 1 permanently. The nex group of resonances is observed when $V _ { g 1 }$ is changed by one Coulomb oscillation period $\Delta V _ { g 1 }$ (see Fig. 14). Note that the number of resonances decreases in the next two groups. Sweeping $V _ { g 1 }$ also shifts the levels in dot 2, due to a small cross-capacitance between gate 1 and 2. Transport is possible until level α is shifted above $\mu _ { L } ~ ( V _ { g 1 } < - 4 7 0 ~ \mathrm { m V } )$

![[assets/figures/references/vanderwiel-2002/368ac111b81ca21e8f1d57a1ad5780b02fc48ea497a9aae38eca00900681517e.jpg]]  
FIG. 15 Schematic potential landscape of the double quantum dot, where $\mu _ { L }$ and $\mu _ { R }$ denote the electrochemical potentials of the left and right reservoirs and $V$ the bias voltage across the double dot. The 0D states in dot 1 are denoted by levels 1 to 5 and in dot 2 by levels α and $\beta$ (from (van der Vaart et al., 1995)).

The level spacing is obtained by converting gate voltage to energy (Grabert and Devoret, 1992) . This yields an energy separation of resonances $2 { - } \alpha$ and 3-α by $7 0 \mu \mathrm { e V }$ , which is the energy separation of levels 2 and 3. In the same way we find for levels α and $\beta$ a separation of $2 0 0 \ \mu \mathrm { e V }$ . Both values are in good agreement with the typical values we found above. On increasing $V ,$ , we observe that the number of resonances in a particular group increases. The inset to Fig. 14 shows approximately 11 resonances as $V _ { g 3 }$ is swept. These observations are in agreement with the resonant tunneling picture of Fig. 15: when V is larger, more levels can align.

![[assets/figures/references/vanderwiel-2002/7baca51f5943b8740b74472296d6c1d573d17a445349376db1871832f3051a2a.jpg]]  
FIG. 16 Current through the double dot of Fig. 6(a) versus the voltage on gate 3, $V _ { g 3 }$ for bias voltages, $V ,$ between 0.2 mV (lower trace) and 1.6 mV (upper trace). The traces have been given an ofset proportional to their bias voltage for clarity.

Generally, the relaxation rate to the ground state is not necessarily higher than the tunnel rate through the dot. In Fig. 16 the amplitude of the ground state resonance (see lower curve) clearly decreases with increasing bias voltage. At the same time new resonances appear, having a larger amplitude than the ground state resonance. This implies that in general transport through excited states can play a significant role.

![[assets/figures/references/vanderwiel-2002/4e525b23ad8906cfd9782df751213efee1274eeef0c7301ae42a392a4b016dde.jpg]]  
FIG. 17 Enlarged resonance measured in a second device of identical design using a bias voltage of 400 $\mu \mathrm { e V }$ . The data points (black dots) are fit to a Lorentzian line shape (solid line). For comparison we plot a thermally broadened resonance with a fitted temperature $T = 3 4$ mK (dashed line) (from (van der Vaart et al., 1995)).

When a discrete level in dot 1 is at a distance much larger than the thermal energy, $k _ { B } T$ , from the electrochemica potential of the left lead, dot 1 acts as low-temperature-pass filter for dot 2, such that only cold electrons contribute to the current (Kouwenhoven, 1995). If the energy levels in the dots are separated by more than $k _ { B } T$ , the occupation of excited states becomes suppressed. This efectively leaves the dot at zero temperature. Hence, the double dot geometry allows for an accurate measurement of the intrinsic line width of the discrete levels, which is not averaged by the Fermi-Dirac distribution of the electrons in the reservoirs. In other words, an energy resolution better than $k _ { B } T$ can be obtained. The line shape of a resonance is lorentzian when only elastic tunneling is important (Nazarov et al., 1993; Stoof, 1997). In our geometry (assuming a bias voltage suficiently large such that electrons must tunne from the left lead to the left dot to enter the system, and must tunnel from the right dot to the right lead to leave i again) the current is given by

$$
I (\Delta E) = e \frac {\Gamma_ {3} | t _ {1 2} | ^ {2}}{(\Delta E / h) ^ {2} + \frac {\Gamma_ {3} ^ {2}}{4} + | t _ {1 2} | ^ {2} \left(2 + \frac {\Gamma_ {3}}{\Gamma_ {1}}\right)}\tag{15}
$$

where $\Delta E$ is the energy diference between two discrete energy levels in the two dots, $\Gamma _ { 1 }$ is the tunnel rate from the left lead to dot $1 , | t _ { 1 2 } |$ is the modulus of the tunnel coupling between the two dots and $\Gamma _ { 3 }$ is the tunnel rate from dot 2 to the right lead. Note that for elastic tunneling the resonance width is only determined by the lifetime of the 0D states and independent of temperature.

Figure 17 shows a single resonance (black dots). The right-hand side of the peak fits very well with the lorentzian line shape of Eq. (15) (solid line), while the left-hand side shows a deviation from the lorentzian fit. The only free fit parameter is the full width at half maximum, $\mathrm { F W H M } = 5 ~ \mu \mathrm { e V }$ . From the maximum current and the width of the resonance we find with Eq. (15) a tunnel coupling $| t _ { 1 2 } | \approx 0 . 2$ µeV and a tunneling rate between the right dot and the right lead $\Gamma _ { 3 } \approx 1 0 \mu \mathrm { e V }$ . For comparison, we have fitted the resonance with a thermally broadened resonance $I ( \Delta E ) \sim \stackrel { \textstyle \sim } { \cosh } ( \Delta E / 2 k T ) ^ { - 2 }$ (dashed line) (Beenakker, 1991). The top is fit very well for $T = 3 4 ~ \mathrm { m K }$ , but there is a large deviation in both tails of the resonance. On the right-hand side, the deviation can be accounted for by the lorentzian broadening. At the left-hand side, the deviation consists of two components. The first one is the same lorentzian broadening as observed on the right-hand side. The second one, however, is an asymmetric contribution only occurring on this side of the resonance. The asymmetric contribution to the current appears at the side where an electron tunnels from a higher to a lower electrochemical potential. Upon reversing the sign of V , we find that the asymmetry appears at the other side of the resonance. As shown in Ref. (Fujisawa et $a l .$ , 1998), this is due to inelastic tunnel processes. In such a process, an electron can tunnel inelastically and spontaneously emit its energy as a photon or a phonon.

## IV. MAGNETIC FIELD SPECTROSCOPY

In this section we measure the energy evolution versus magnetic field, B, of energy states near the Fermi energy, $E _ { F }$ , in the double quantum dot shown in Fig. 6(a). As a function of B and the voltage on gate $3 , V _ { g 3 }$ , we observe crossings and anti-crossings between Coulomb peaks. The resolution is high enough that avoided crossings in the spectrum of a quantum dot can be resolved (Oosterkamp et al., 1998a). To our knowledge, these are the only existing data revealing intra-dot level repulsion in a quantum dot system.

The experiments are performed in the weak coupling limit, such that mixing between quantum states in one dot with states in the other dot or in the leads is negligible (see section V). We sweep the gate voltages over small ranges and focus on a particular charging transition; i.c. transitions between $\left( N _ { 1 } { + } 1 , N _ { 2 } \right)$ and $( N _ { 1 } , N _ { 2 } { + } 1 )$ only. Since we discuss only one transition at a time, we can, for simplicity, leave out the Coulomb energies from the discussion and concentrate on the alignment of discrete energy levels.

Using the notation introduced in section II.A.2, we label the accompanying electrochemical potentials $\mu _ { 1 , n } ( N _ { 1 } , N _ { 2 } )$ for dot 1 and $\mu _ { 2 , n } ( N _ { 1 } , N _ { 2 } )$ for dot 2 (or simply $\mu _ { 1 ( 2 ) , n } )$ . The condition for tunneling between the lowest possible states, i.e. from ground state to ground state, is $\mu _ { 1 , 0 } ( \dot { N } _ { 1 } + 1 , N _ { 2 } ) = \mu _ { 2 , 0 } ( N _ { 1 } , N _ { 2 } + 1 )$ . To tunnel from the first excited state of dot 1 to the ground state of dot 2, the condition becomes $\mu _ { 1 , 1 } ( N _ { 1 } + 1 , N _ { 2 } ) = \mu _ { 2 , 0 } ( N _ { 1 } , N _ { 2 } + 1 )$ . The changes in the electrochemical potential $\mu _ { 1 , n + 1 } - \mu _ { 1 , n }$ and $\mu _ { 2 , n + 1 } - \mu _ { 2 , n }$ are typically ∼ 150-200 $\mu \mathrm { e V }$

Figure $1 8 ( \mathrm { a } )$ shows a typical set of current traces for diferent magnetic fields while sweeping $V _ { g 3 }$ . The bias voltage $V = 1 . 2$ mV is such that several discrete levels in each dot are between the electrochemical potentials of the two leads. This is similar as in the inset to Fig. 14, but now measured for diferent magnetic fields. The change in Coulomb peak position versus $B , \Delta V _ { q 3 } ^ { p e a k } ( \Delta B )$ , is proportional to the diference in the B-evolution of the electrochemical potentials $\mu _ { 1 , n } ( B )$ and $\mu _ { 2 , n } ( B )$

$$
\begin{array}{c} \Delta \mu (\Delta B) = [ \mu_ {1, n} (B + \Delta B) - \mu_ {1, n} (B) ] - [ \mu_ {2, n} (B + \Delta B) - \mu_ {2, n} (B) ] \\ = \alpha \Delta V _ {g 3} ^ {p e a k} (\Delta B) \end{array}\tag{16}
$$

where α is the conversion factor between $V _ { g 3 }$ and the electrostatic potential of dot 2. Note that if the states $\mu _ { 1 , n } ( B )$ and $\mu _ { 2 , n } ( B )$ have the same B-dependence, the Coulomb peak position does not change. The energy resolution of $\Delta \mu ( \Delta B )$ is $\sim 5 \ \mu \mathrm { e V }$ , corresponding to $k _ { B } T \sim 5 0$ mK.

The data in Fig. $1 8 ( \mathrm { a } )$ contain several interesting features. First, we observe crossings between diferent peaks as well as anti-crossings (two are indicated by arrows). Second, pairs of peaks exhibit the same B-dependence. These are general features that we observe at several charge transitions (that is for several choices of $N _ { 1 } , N _ { 2 } )$ . Independent measurements on one of the individual dots also show states evolving in pairs below $B \sim 0 . 5 \mathrm { T }$ . The observed pairing and (anti-)crossing of the Coulomb peaks in the double dot experiments can then be explained as shown schematically in Fig. 18(b). Suppose two levels in one dot have an anti-crossing in their B-dependence. Then two paired levels in the other dot, having the same B-dependence, both probe this anti-crossing. At the points where two Coulomb peaks actually cross, two levels in dot 1 align with two levels in dot 2 simultaneously (though only one electron can tunnel at a time, due to Coulomb blockade).

For the interpretation of the data as schematically given in Fig. $1 8 ( \mathrm { b } )$ , tunneling through the excited state of dot 1 is a key ingredient. If dot 1 would relax to its ground state much faster than the tunnel rate through the barriers after an electron has tunneled onto it via $\mu _ { 1 , 1 }$ , we would only observe the two lower traces in the rightmost diagram of Fig. 18(b). However, our data suggest a relatively slow relaxation rate between the excited and ground state of dot 1. Recent experiments on (single) quantum dots have shown that indeed relaxation times can be of the order of µs or longer when relaxation to the ground state involves electron spin flips (Fujisawa et al., 2001). The condition for the relaxation rate from the excited state to the ground state in dot 2 is more subtle. The electron can tunnel onto dot 2 via $\mu _ { 2 , 1 }$ and leave dot 2 either directly or after a relaxation process from $\mu _ { 2 , 1 }$ to $\mu _ { 2 , 0 }$ has occurred (this second possibility requires $\mu _ { 2 , 0 } \geq \mu _ { R } )$ . For transport through the double dot, the relaxation rate in dot 2 does not necessarily need to be slow as well. However, if the relaxation rate would be too high, the anti-crossing as shown in the middle diagram of Fig. 18(b) would smear out. The constant level spacing $\mu _ { 1 , 1 } - \mu _ { 1 , 0 }$ in dot 1 (see left diagram of Fig. 18(b)) could be explained by an exchange energy, e.g. when the upper level would correspond to a spin singlet state and the lower level to a spin triplet (Tarucha et al., 2000).

![[assets/figures/references/vanderwiel-2002/94db163e1c2c9fa62eccf9391be135c23e0fd79fe3fbcdd7a32913d5edc1e084.jpg]]

![[assets/figures/references/vanderwiel-2002/71458b15db0bfdec16ea77f7e61db9134cfcf01152c8d8dcc76f396c71d523b9.jpg]]  
FIG. 18 (a) Current through the double dot sweeping the voltage on gate 3, $V _ { g 3 }$ , at diferent magnetic fields, B. The curves have been given an ofset for clarity. From the leftmost to the rightmost curve, B increases from 300 mT to 600 mT in 3 mT increments. The conversion factor α between $V _ { g 3 }$ and the electrostatic potential of dot $2 , \alpha = - 6 3 \ \mu \mathrm { e V / m V }$ , is determined through independent measurements from which we deduced the energy scale, indicated by the vertical arrow in the lower left corner (α does not change in this magnetic field range). (b) The first two diagrams show how levels may evolve in each of the two dots as a function of B. When these four levels are scanned along each other by sweeping $V _ { g 3 }$ , this results in peak positions as sketched in the rightmost diagram.

## V. MICROWAVE SPECTROSCOPY

In this section we present microwave (0-50 GHz) spectroscopy experiments (Fujisawa and Tarucha, $^ { 1 9 9 7 \mathrm { a } , \mathrm { b } ; }$ Kouwenhoven et al., 1997; Oosterkamp et al., 1997) on double quantum dots for diferent coupling and microwave power regimes (Oosterkamp et al., 1998b; van der Wiel et al., 1999). We use photon assisted tunneling (PAT) processes, as described in sections V.B and V.C, to measure the energy diferences between states in the two dots of the devices shown in Figs. 6(a) and 6(b). Depending on the strength of the inter-dot coupling, the two dots can form ionic-like (Blick et al., 1996; Fujisawa and Tarucha, 1997a,b; Livermore et al., 1996; van der Vaart et al., 1995) or covalent-like bonds (Blick et al., 1998; Oosterkamp et al., 1998b; van der Wiel et al., 1999). In the first case, the electrons are localized on individual dots, while in the second case, the electrons are delocalized over both dots. The covalent binding leads to a symmetric and anti-symmetric state, whose energy diference is proportional to the tunneling strength betwee

the dots.

For the microwave experiments we make use of a coaxial cable. From room temperature to the 1K-pot, a 0.085 inch semi-rigid Be-Cu (inner and outer conductor) coaxial cable is used. From the 1K-pot to the mixing chamber, we use a 0.085 inch semi-rigid stainless steel (inner and outer conductor) coax. From the mixing chamber to the sample, various types of low attenuation semi-rigid or flexible coaxial cable can be used, since here the thermal conductivity is no longer a constraint. Finally, the coaxial cable is capacitively coupled (typically through a 10 pF capacitor) to one of the gate electrodes of the sample, usually the center gate. This gate is capacitively coupled to both dots, and hence part of the incident power can generate a microwave oscillating potential across the center barrier.

## A. Two-level systems

So far, we assumed a purely electrostatic coupling between both dots, whereas tunnel coupling was neglected. However, when electrons can tunnel coherently from one dot to the other at appreciable rates, the eigenstates become delocalized, extending over the entire double dot system. In principle, these are quantum-mechanical many-body states of the two coupled dots. It is very dificult to give a full description of such a many-body system. Therefore, we discuss here the elementary case of a quantum-mechanical two-level system, which is quite adequate in grasping the physics of a tunnel-coupled double dot. Basically, we only take into account the topmost occupied level in each dot and neglect the interaction with electrons in lower energy levels.

We consider a double dot consisting of two well-separated dots, described by a total Hamiltonian $\mathbf { H _ { 0 } }$ (Cohen-Tannoudji et $a l .$ , 1977), with eigenstates $\left| \phi _ { 1 } \right.$ and $\left| \phi _ { 2 } \right.$ , and eigenenergies $E _ { 1 }$ and $E _ { 2 } \ ( \mathrm { F i g . \ 1 9 ( a ) } )$

$$
\begin{array}{r} \mathbf {H _ {0}} | \phi_ {1} \rangle = E _ {1} | \phi_ {1} \rangle \\ \mathbf {H _ {0}} | \phi_ {2} \rangle = E _ {2} | \phi_ {2} \rangle \end{array}\tag{17}
$$

We introduce a finite tunnel coupling between the levels in both dots described by the Hermitian matrix $\mathbf { T } ,$ which for simplicity (Cohen-Tannoudji et al., 1977) we assume to be purely non-diagonal

$$
\mathbf {T} = \left( \begin{array}{c c} 0 & t _ {1 2} \\ t _ {2 1} & 0 \end{array} \right), t _ {1 2} = t _ {2 1} ^ {*}, t _ {2 1} = | t _ {2 1} |   \mathrm{e} ^ {i \varphi}\tag{18}
$$

One obtains a new Hamiltonian, $\mathbf { H } = \mathbf { H _ { 0 } } + \mathbf { T }$ , with delocalized eigenstates $| \psi _ { S } \rangle$ (symmetric state) and $| \psi _ { A } \rangle$ (antisymmetric state), and eigenvalues $E _ { S }$ and $E _ { A }$

$$
\begin{array}{r} \mathbf {H} | \psi_ {S} \rangle = E _ {S} | \psi_ {S} \rangle \\ \mathbf {H} | \psi_ {A} \rangle = E _ {A} | \psi_ {A} \rangle . \end{array}\tag{19}
$$

The new eigenvalues can be expressed in terms of the eigenvalues of the uncoupled double dot and the tunnel matrix elements as follows

$$
\begin{array}{r} E _ {S} = E _ {M} - \sqrt {\frac {1}{4} (\Delta E) ^ {2} + | t _ {1 2} | ^ {2}} \\ E _ {A} = E _ {M} + \sqrt {\frac {1}{4} (\Delta E) ^ {2} + | t _ {1 2} | ^ {2}} \end{array}\tag{20}
$$

where $\begin{array} { r } { E _ { M } = \frac { 1 } { 2 } ( E _ { 1 } + E _ { 2 } ) } \end{array}$ and $\Delta E = E _ { 1 } - E _ { 2 }$ and $| t _ { 1 2 } | = | t _ { 2 1 } |$ . The eigenstates $| \psi _ { S } \rangle$ and $| \psi _ { A } \rangle$ in the basis of $\left| \phi _ { 1 } \right.$ and $\left| \phi _ { 2 } \right.$ are written

$$
\begin{array}{r l} & {| \psi_ {S} \rangle = - \sin \frac {\theta}{2} \mathrm{e} ^ {- i \varphi / 2} | \phi_ {1} \rangle + \cos \frac {\theta}{2} \mathrm{e} ^ {i \varphi / 2} | \phi_ {2} \rangle} \\ & {| \psi_ {A} \rangle = \quad \cos \frac {\theta}{2} \mathrm{e} ^ {- i \varphi / 2} | \phi_ {1} \rangle + \sin \frac {\theta}{2} \mathrm{e} ^ {i \varphi / 2} | \phi_ {2} \rangle} \end{array}\tag{21}
$$

![[assets/figures/references/vanderwiel-2002/d32b0f07079cfe0c920332971ce52d5097dfed1815963f1a7ee279f983bd80ba.jpg]]

![[assets/figures/references/vanderwiel-2002/16dc03223489234991c40bad4661e37e60ffb829b543a74d2943a360cfea807e.jpg]]  
FIG. 19 Schematic diagrams of a two-level system. (a) Unperturbed energy levels $E _ { 1 }$ and $E _ { 2 }$ (solid lines), and energy levels belonging to the symmetric state, $E _ { S }$ , and the anti-symmetric state, $E _ { A }$ . (b) Energies $E _ { S }$ and $E _ { A }$ versus the energy diference $\Delta E = E _ { 1 } - E _ { 2 }$ . For vanishing coupling $\left( \left| t _ { 1 2 } \right| \approx 0 \right)$ , the levels cross at the origin (dashed straight lines). For non-zero coupling, an ‘anti-crossing’ occurs: the curves belonging to $E _ { S }$ and $E _ { A }$ as function of $\Delta E$ are branches of a hyperbola (solid lines) whose asymptotes are the unperturbed levels (see also (Cohen-Tannoudji et al., 1977)).

with tan $\theta = 2 | t _ { 1 2 } | / \Delta E$ . Figure 19(b) shows the eigenenergies of the coupled two-level system as function of $\Delta E .$ . The renormalized energy diference, $\Delta E ^ { * }$ , is given by

$$
\Delta E ^ {*} = E _ {A} - E _ {S} = \sqrt {(\Delta E) ^ {2} + (2 | t _ {1 2} |) ^ {2}}.\tag{22}
$$

Note that the efect of the coupling is stronger for small $\Delta E .$ , i.e. close to the crossing of the unperturbed energies $E _ { 1 }$ and $E _ { 2 }$ . Where $E _ { 1 }$ and $E _ { 2 }$ cross $( \Delta E = 0 )$ , we have an anti-crossing of $E _ { A }$ and $E _ { S }$ , with $E _ { A } - E _ { S } = 2 | t _ { 1 2 } | .$ the minimum bonding–anti-bonding energy diference. For large $\Delta E .$ , the eigenenergies of the coupled double dot approach the eigenenergies of the uncoupled dots, $E _ { 1 }$ and $E _ { 2 }$ . The general solution of the time-dependent Schr¨odinger equation can be written in the form

$$
| \psi (t) \rangle = \lambda e ^ {- i E _ {A} t / \hbar} | \psi_ {A} \rangle + \mu e ^ {- i E _ {S} t / \hbar} | \psi_ {S} \rangle .\tag{23}
$$

With $\operatorname { E q . }$ (21), $| \psi ( t ) \rangle$ can be expressed in terms of $\left| \phi _ { 1 } \right.$ and $\left| \phi _ { 2 } \right.$ . Since $\left| \phi _ { 1 } \right.$ and $\left| \phi _ { 2 } \right.$ are not eigenstates of the total Hamiltonian H, they are no longer stationary states. If the system is in state $\left| \phi _ { 1 } \right.$ at time $t = 0 \ ( | \psi ( 0 ) \rangle = | \phi _ { 1 } \rangle )$ ) the probability $P _ { 1 2 } ( t )$ of finding it in the state $\left| \phi _ { 2 } \right.$ at time t is

$$
P _ {1 2} (t) = | \langle \phi_ {2} | \psi (t) \rangle | ^ {2} \frac {4 | t _ {1 2} | ^ {2}}{4 | t _ {1 2} | ^ {2} + (\Delta E) ^ {2}} \sin^ {2} \left[ \sqrt {(\Delta E) ^ {2} + (2 | t _ {1 2} |) ^ {2}} \frac {t}{2 \hbar} \right].\tag{24}
$$

Equation (24) describes a coherent charge oscillation in the double dot system.

## B. Photon assisted tunneling in weakly coupled dots

If the inter-dot coupling is weak, electrons are strongly localized on the individual dots. In section II.A.2 we saw that we expect a resonant current through the double dot system if $\mu _ { L } \geq \mu _ { 1 } = \mu _ { 2 } \geq \mu _ { R }$ . If we represent a weakly coupled double dot by a two-level system, we need the discrete energy levels $E _ { 1 }$ and $E _ { 2 }$ to align within the bia window. We will only consider the discrete, quantum contribution to the electrochemical potentials and therefore simply use the discrete level notation $E _ { 1 }$ and $E _ { 2 }$ instead of $\mu _ { 1 }$ and $\mu _ { 2 }$

An additional time-varying potential $V _ { a c } \mathrm { c o s } ( 2 \pi f t )$ can induce inelastic tunnel events when electrons exchange photons of energy $h f$ with the oscillating field (frequency, $f ,$ is typically 1-75 GHz in our experiments). This inelastic tunneling with discrete energy exchange is known as photon assisted tunneling (PAT) (Blick et al., 1995; Kouwenhoven et al., 1994a,b). PAT through a single quantum dot with well resolved discrete 0D-states is reviewed in Ref. (van der Wiel et al., 2002). PAT is an invaluable spectroscopic tool for studying the energy spectra of quantum dots. A theoretical study of PAT in double dots is given in Refs. (Hazelzet et al., 2001; Stoof and Nazarov, 1996). A voltage drop $V _ { a c } \mathrm { c o s } ( 2 \pi f t )$ across a tunnel barrier modifies the tunnel rate through the barrier as (Tien and Gordon, 1963)

$$
\widetilde {\Gamma} (E) = \sum_ {n = - \infty} ^ {\infty} \mathrm{J} _ {n} ^ {2} (\alpha) \Gamma (E + n h f)\tag{25}
$$

Here $n = 0 , \pm 1 , \pm 2 , . . . ,$ and $\widetilde \Gamma ( E )$ and $\Gamma ( E )$ are the tunnel rates at energy $E$ with and without an ac voltage, respectively. $\mathrm { J } _ { n } ^ { 2 } ( \alpha )$ eis the square of the nth order Bessel function of the first kind, evaluated at $\alpha = e V _ { a c } / h f$ , which describes the probability that an electron absorbs $( n > 0 )$ or emits $( n < 0 )$ n photons of energy $h f$ . Thus, the efect

![[assets/figures/references/vanderwiel-2002/bd55bca23b66efe6a75a87b8c3729b7ecbc1751cbea208e098fb6be18fd7f9a0.jpg]]  
FIG. 20 Squared Bessel functions of the first kind, $\mathrm { J } _ { n } ^ { 2 } ( \alpha )$ , for $n = 0 , \pm 1 , \pm 2 .$ . The inset schematically shows the development of sidebands of the original energy as a consequence of the microwave field. A positive (negative) n corresponds to the absorption (emission) of n photons during the tunnel process. Elastic tunneling corresponds to $n = 0 .$

of the interaction between a single-electron state with a classical, oscillating field is that the energy state $E$ is split in a set of states $E + n h f$ (see inset to Fig. 20). The power of PAT as a spectroscopic tool lies in the fact that PAT can only take place if the energy diference $\Delta E$ equals an integer number times the photon energy $h f \colon \Delta E = n h f .$ , see Fig. 21. For the multiple photon processes $( | n | > 1 )$ to take place, the microwave power needs to be suficiently large.

To use PAT as a spectroscopic tool, we can make use of the configurations shown in Fig. 21. In the pumping configuration (Brune et al., 1997; Staford and Wingreen, 1996), the double dot is operated at zero bias voltage.

Absorption of a photon with energy $h f = \Delta E$ leads to pumping of an electron from left to right $\left( \mathrm { F i g . ~ 2 1 ( a ) } \right)$ or vice versa $( \mathrm { F i g . 2 1 ( b ) } )$ . The advantage of this configuration is that relaxation due to spontaneous emission does not contribute to the current. Figure 22 schematically shows how the honeycomb unit cell of Fig. 5 changes in the presence of a microwave field.

Alternatively, the double dot can be operated in the large bias regime as depicted in Fig. $^ { 2 1 ( \mathrm { c } ) , \mathrm { d } }$ . In this regime, in the case of weak coupling with $| t _ { 1 2 } | \ll \Delta E , h f , \hbar \Gamma _ { L , R } .$ , the dc PAT current is given by (Stoof and Nazarov, 1996)

![[assets/figures/references/vanderwiel-2002/e3cd2d1d17aa5dbff6d195bfa490f1ebe0584139472921cfc56fa37c7f17dccf.jpg]]  
large bias configuration

![[assets/figures/references/vanderwiel-2002/c04d05c1c5beff144362cd023e7e945e878c7732d4ee280a3c1fba97aba5c9e8.jpg]]  
FIG. 21 Schematic electrochemical potential diagrams of photon assisted tunneling (PAT) in a weakly coupled double quantum dot. The upper diagrams (a) and (b) show absorption of a photon with energy $h f = \Delta E$ in the so called pumping configuration. Although $V = 0 ,$ an electron can tunnel from left to right through the dot (a), or vice versa (b). The lower diagrams show absorption (c) and (stimulated) emission (d) of a photon with energy $h f = \Delta E$ in the large bias configuration.

$$
I _ {P A T} = e | t _ {1 2} | ^ {2} \Gamma_ {R} \sum_ {n = - \infty} ^ {\infty} \mathrm{J} _ {n} ^ {2} (\alpha) / (\frac {1}{4} \Gamma_ {R} ^ {2} + (n 2 \pi f - \Delta E / h) ^ {2})\tag{26}
$$

The current is composed of a number of satellite peaks, separated by the photon energy $h f$ and all with width $\Gamma _ { R } .$ Note that the satellite peaks can become of the same order of magnitude as the main resonance, but that they have a smaller width than the main resonance. The PAT experiment described below, is performed on a weakly coupled dot in the large bias regime.

The double dot, shown in $\mathrm { F i g . 6 ( a ) }$ , is tuned such that only one level in each dot contributes to electron transport. The gate voltages are used to shift the level in dot 1 and in dot 2. The resonance in the lowest trace in Fig. 23(a) arises from the alignment of the two levels. The other traces are measured while applying a microwave signal. The satellite resonances are due to PAT processes which involve the emission (left satellite peak) or absorption (right satellite peak) of one photon. Figure 23(b) shows that the energy separation of the satellite peaks from the main peak, $\Delta E ,$ depends linearly on frequency between 1 and 50 GHz. As we will discuss below, this linearity implies that the tunnel coupling is negligible. The electrons are localized on the individual dots and they have an ionic bonding. The line proportional to $2 h f$ is taken from data at higher microwave powers where electrons absorb or emit two photons during tunneling.

As the microwave power is increased, more satellite peaks appear corresponding to the absorption of multiple photons, which are observed up to $n = 1 1$ (see Fig. 24). A high power microwave field strongly perturbs tunneling. This is reflected by the non-linear dependence of the peak heights on microwave power. In the right inset to Fig. 24 the peak heights of the main peak and the first four photon satellite peaks are shown, which agree well with the expected squared Bessel function behavior shown in Fig. 20.

![[assets/figures/references/vanderwiel-2002/fe5c55360f8a3c298e401557f7cfef8b2bb467a69f3caf006b28fde673fbb8a0.jpg]]  
FIG. 22 Schematic of a double quantum dot stability diagram in the weak coupling and linear transport regime irradiated by microwaves with frequency f. Next to the triple points, finite current is measured along the PAT lines at a distance $\delta _ { P A T }$ from the line $\mu _ { 1 } ( 1 , 0 ) = \mu _ { 2 } ( 0 , 1 )$ , where $\Delta E = h f$ . The various PAT processes are illustrated by the electrochemical potential diagrams.

## C. Photon assisted tunneling in strongly coupled dots

The large bias configuration of Figs. 21(c),d was successfully employed to study PAT in a weakly coupled double dot system. For the microwave spectroscopy of a strongly coupled double dot we will make use of the pumping configuration shown in Fig. 25. With increasing the coupling between the dots, the spontaneous emission rate from the higher level to the lower one increases as well. The advantage of the pumping configuration is that these processes are ‘filtered out’ and do not contribute to the current.

Figure $2 5 ( \mathrm { a } )$ schematically shows the symmetric and anti-symmetric states in the double dot for $\Delta E = 0$ . When microwave radiation is applied with a frequency such that $h f = \Delta E ^ { * } = E _ { A } - E _ { S } = 2 | t _ { 1 2 } |$ , electrons are pumped from the left lead to the right lead and vice versa. Since the weight of the symmetric and anti-symmetric wave function is distributed equally over both dots (see Fig. 25(a)), there is no net current. However, if we detune the levels $( | \Delta E | > 0 )$ the weight gets distributed asymmetrically as shown in Figs. ${ 2 5 ( \mathrm { b } ) , \mathrm { c } }$ and a net current is generated by applying microwave radiation matching $h f = \Delta E ^ { * }$ . Note that for frequencies $h f < 2 | t _ { 1 2 } |$ no PAT is possible.

Multi-photon processes occur if the condition $\Delta E ^ { * } = n h f \left( | n | > 1 \right)$ is met. Besides allowing for these higher order photon processes, a high power microwave field also renormalizes the tunnel coupling to a smaller value. The energy splitting $\Delta E ^ { * }$ now becomes

$$
\Delta E ^ {*} = \sqrt {(\Delta E) ^ {2} + [ 2 \mathrm{J} _ {0} (\alpha) | t _ {1 2} | ] ^ {2}}.\tag{27}
$$

The experiments for strong inter-dot coupling are performed on the device shown in Fig. $6 ( \mathrm { b } )$ . To single out the current only due to microwaves, we operate the device as an electron pump driven by photons (Brune et $a l .$ , 1997; Staford and Wingreen, 1996) (see the diagrams in Fig. 25). An electron is excited from the bonding to the anti-bonding state if the condition $h f = \Delta E ^ { * }$ is fulfilled, or conversely

$$
\Delta E = \sqrt {(h f) ^ {2} - (2 \mathrm{J} _ {0} (\alpha) | t _ {1 2} |) ^ {2}}.\tag{28}
$$

Figure 26 schematically shows the stability diagram for a strongly coupled double dot in the presence of a microwave field. Here we assume that the symmetric and anti-symmetric states can only be occupied by a single electron. In other words, we assume spinless electrons. The triple points of the weakly coupled double dot, denoted by • and ◦, develop into a black and a white crescent, respectively. The length of these crescents increases with |t |.

![[assets/figures/references/vanderwiel-2002/5ebcdcbb05be51ba3ad60bf908bd87b8c4cb7294311e86581ee9a2d1db0865e2.jpg]]

![[assets/figures/references/vanderwiel-2002/771c8a6e97013fb811d8cb83b3bfb8c1c4838d2c9a8ba105a3cf27764bd344c7.jpg]]  
FIG. 23 Weakly coupled double quantum dot in the low microwave power regime. (a) The upper schematic pictures illustrate three configurations of the discrete energy level in the left dot relative to the level in the right dot (thick solid lines). The electrochemical potentials of the leads are indicated by thinner solid lines. The bottom curve shows the current as a function of the voltage on gate 1, $V _ { g 1 }$ , (see Fig. 6(b)) for source-drain voltage, $V = 5 0 0 ~ \mu \mathrm { V }$ without applying microwaves. A single resonance occurs when two levels align. The other curves, which have been ofset for clarity, show the current when microwaves with frequency f from 4 to 10 GHz are applied. Now, two additional satellite resonances occur when the two levels are exactly a photon energy apart. The corresponding photon-assisted tunneling processes are illustrated in the upper diagrams. (b) Distance between main resonance and first two satellites as a function of the applied frequency from 1 to 50 GHz. The distance is transferred to energy through $\Delta E = \kappa \Delta V _ { g 1 }$ where κ is the appropriate capacitance ratio for our device that converts gate voltage to energy. The agreement between data points and the two solid lines, which have slopes of h and $2 h ,$ demonstrates that we observe the expected linear frequency dependence of the one and two photon processes.

Moving along the dotted line connecting the crescents from lower left to upper right, first the symmetric state aligns with the electrochemical potentials of the leads (at the black crescent). Current through the double dot is possible via the electron transfer process of Fig. 2(d). At the black square, the anti-symmetric state aligns with the leads. However, current is blocked, since an extra electron is already added to the double dot and the charging energy $E _ { C m }$ is not available yet. At the white square, the electrochemical potential for adding the second electron to the symmetric state aligns with the leads. As we assumed single occupation of the delocalized states, current is blocked here as well When arriving at the white crescent, the electrochemical potential for adding the second electron to the double do in the (empty) anti-symmetric state becomes available. This enables the hole transfer process of Fig. 2(d).

The black bars at a distance $\delta _ { P A T }$ from the dotted line connecting the crescents, denote the places where $\Delta E ^ { * } = h f$ and PAT occurs. Note that PAT is only possible if the photon energy exceeds the coupling energy, $h f \geq 2 | t _ { 1 2 } | .$ Depending on the level configuration, pumping results in a negative or positive contribution to the current, as shown in Fig. $2 7 ( \mathrm { a } )$ (here we choose $I > 0$ for an electron moving from left to right). Figure 27(b) shows a part of the corresponding stability diagram between two triple points, clearly showing the energy regions of constant charge and extra transport lines due to PAT.

Figure 28 shows measured current traces as a function of the uncoupled energy splitting ∆E, where from top to bottom the applied microwave frequency is decreased from 17 to 7.5 GHz in 0.5 GHz steps. At the highest frequencies, the distance between the pumping peaks is close to $2 \Delta E .$ . However, the peak distance decreases faster than linearly as the frequency is lowered; in fact the peaks follow the dotted hyperbola rather than the dashed straight lines. The distance goes to zero when the frequency approaches the minimum energy gap between bonding and anti-bonding states, $h f = 2 | t _ { 1 2 } |$ . The coupling between the dots can be decreased by changing the gate voltage on the center gate to more negative values, or by applying a magnetic field perpendicular to the sample. In Fig. 29(a) we plot half the spacing between the positive and negative satellite peaks as a function of frequency. The microwave power is kept as low as possible in order to meet the condition $e V _ { a c } \ll h f$ . In that case $\mathrm { J } _ { 0 } ^ { 2 } ( \alpha ) \approx 1$ and the general relation Eq. (28) reduces to

![[assets/figures/references/vanderwiel-2002/37fd99a769255f088aad73b9601bcbf8be81fa0e5a2277e5426672f08762f992.jpg]]  
FIG. 24 Weakly coupled double quantum dot in the high microwave power regime. The main graph shows current versus gate voltage. The dashed curve is without microwaves and contains only the main resonance. The solid curves are taken at 8 GHz for increasing microwave powers resulting in an increasing number of satellite peaks. At the right side of the main peak, these correspond to photon absorption. $V = 7 0 0 \mu \mathrm { V }$ and the photon energy $h f = 3 2 ~ \mu \mathrm { e V }$ at 8 GHz. At the highest power we observe 11 satellite peaks, demonstrating multiple photon absorption. (left inset) Schematic diagram showing multi-photon absorption. (right inset) Height of the first four satellite peaks as a function of the microwave amplitude. The observed dependence shows the expected Bessel function behavior given in Fig. 20.

![[assets/figures/references/vanderwiel-2002/74e3e0aea65bf925b2e4c666a7c2fd736d1a235ad0a9c36dcbad692e09e2619a.jpg]]  
FIG. 25 Schematic electrochemical potential diagrams of PAT in a strongly coupled double quantum dot in the pumping configuration. The diagrams show the symmetric state with wave function ψ<sub>S</sub> and energy $E _ { S }$ (lower dashed line), and the anti-symmetric state with wave function $\psi _ { A }$ and energy $E _ { A }$ (upper dashed line) in combination with the eigenenergies $E _ { 1 }$ and $E _ { 2 }$ of the weakly coupled double dot (solid lines). (a) $E _ { 1 } = E _ { 2 } = 0 , \Delta E ^ { * } = E _ { A } - E _ { S } = 2 | t _ { 1 2 } | .$ . Irradiation with photons with energy $h f = 2 | t _ { 1 2 } |$ leads to PAT, but the net current through the double dot remains zero. (b) $\mathrm { B y }$ lowering $- | e | \varphi _ { 1 }$ and increasing $- | e | \varphi _ { 2 }$ the weight of the wave functions is redistributed such that net electron transport from left to right occurs. (c) By increasing $- | e | \varphi _ { 1 }$ and lowering $- | e | \varphi _ { 2 }$ the weight of the wave functions is redistributed such that net electron transport from right to left occurs.

$$
\Delta E = \sqrt {(h f) ^ {2} - (2 | t _ {1 2} |) ^ {2}}.\tag{29}
$$

Diferent symbols correspond to diferent center gate voltage settings and magnetic fields. The solid lines are fits to Eq. (29). The good agreement with Eq. (29) demonstrates the control over the formation of a covalent bonding between the two dots and that the condition $e V _ { a c } \ll h f$ is satisfied.

![[assets/figures/references/vanderwiel-2002/ec44a6f4fee8b4c4ede4b734810d376ddd9f93e3c4a8ac062c24b4545d1be599.jpg]]  
FIG. 26 Schematic of a double quantum dot stability diagram in the strong coupling and linear transport regime irradiated by microwaves with frequency $f .$ The symmetric and anti-symmetric states are assumed to be singly occupied. At the solid hyperbolic lines either $\mu { s }$ or µ<sub>A</sub> equals zero, marking the separation of charge domains. At the dashed hyperbolic lines either $\mu _ { S }$ or $\mu _ { A }$ equals zero as well, but electron transport is blocked. The triple points of the weakly coupled double dot (• and ◦) develop in to the black and white crescent, respectively. At the position of the black and white square no current occurs, as explained in the text. At a distance $\delta _ { P A T }$ from the dotted line connecting the crescents, $\Delta E ^ { * } = h { \bar { f } }$ and PAT occurs. The various configurations of the electrochemical potentials are also illustrated.

We now discuss the case $e V _ { a c } \gtrsim h f$ . As can be seen in Fig. 20, J<sup>2</sup>(α) deviates from 1 in this case and cannot be neglected as before (van der Wiel et al., 1999). In Fig. 29(b) we show the power dependence for the case of a coupling of 60 µeV and a microwave frequency of 16 GHz, as indicated by the circle in Fig. 29(a) (similar results have been obtained for other couplings and microwave frequencies). The inset to Fig. 29(b) shows the measured PAT current as a function of $\Delta E$ for diferent powers. The absolute value of the microwave power at the position of the double quantum dot is unknown. Therefore, we use a relative microwave power scale, which is expressed in terms of the attenuation of the microwave source signal. The positions of the PAT peaks at the lowest power are indicated with two dashed lines. Increasing the microwave power from the lowest value, the PAT peak separation becomes larger, which is in agreement with $\operatorname { E q . }$ (28). For higher powers, multi-photon processes can also take place, which result in extra current peaks. Figure 29(b) shows half the PAT peak separation energy as function of the relative microwav power. The solid line is a fit with Eq. (28), $f = 1 6 ~ \mathrm { G H z } , 2 | t _ { 1 2 } | = 6 0 ~ \mu \mathrm { e V }$ . Because of the relative power scale, the fitting curve has been adjusted horizontally to give the best fit. We thus see that the microwave power efectively reduces the coupling between the dots. This is further illustrated by the vertical dotted line in Fig. 29(a) at $f =$ 16 GHz. At -33 dB the energy separation equals $h f .$ , which implies that the higher microwave power has efectively reduced the coupling between the dots. We can obtain an estimate of the power by noting that $\mathrm { J } _ { 0 } ^ { 2 } ( \alpha )$ has its first zero for $\alpha = { e V _ { a c } } / h f = 2 . 4$ and hence $V _ { a c } = 0 . 1 6 ~ \mathrm { m V }$

## VI. CONCLUSIONS

By coupling two quantum dots in series, we obtain a system with fundamentally diferent behavior and possibilities in comparison to a single quantum dot. In this review we have discussed the superiority of a double quantum dot system in determining the intrinsic lifetime of quantum states and in probing intra-dot level repulsion. Next to the added value as a spectroscopic instrument, the double dot manifests itself as an artificial molecule. By changing the

![[assets/figures/references/vanderwiel-2002/b1a5fcaa5c71cce4c3b88e5d63e2ce6e7ea92d3439ec4add4da00a407f12bdb9.jpg]]

![[assets/figures/references/vanderwiel-2002/df62c0a66ec79c59cfb1255fd1d923de650047827b621f843f2468a403ece2bd.jpg]]

$$
\Delta E = E _ {1} - E _ {2}
$$

FIG. 27 Strongly coupled double dot in the low-power regime. (a) Current through the double dot as function of the energy diference between the level in the left and the right dot. The current trace is taken from the stability diagram in (b) at the position indicated by the arrow. The diagrams depict the discrete levels $E _ { 1 }$ and $E _ { 2 }$ in the two dots for the case that the coupling is weak (solid lines) and the bonding and anti-bonding states in the case of strong coupling (dotted lines). The PAT processes leading to a negative (left diagram) and a positive current (right diagram) are indicated. (b) Gray-scale plot of the current through the double dot versus the energy level diference, $\Delta E ,$ and the total energy, $E _ { t }$ . The bias voltage is 6 $\mu \mathrm { V }$ and the applied microwave frequency is 16 GHz such that $h f = 6 6 ~ \mu \mathrm { e V }$ . The dashed lines divide the stability diagram in 4 regions of stable electron numbers. In between the two triple points clear features of photon-assisted tunneling are seen. The black arrow indicates the position of the trace shown in (a).

inter-dot coupling, we have been able to tune the double dot from an ionic-like bonded to a covalent-like bonded molecule.

Now that the ability to create and manipulate double quantum dots has been shown, the next challenge lies in the study and time-control of coherent phenomena in these systems. Double quantum dots have been suggested as possible candidates for building blocks of a quantum computer (Loss and DiVincenzo, 1998). We have shown that it is indeed possible to coherently couple dots, and that one can induce transitions between the extended states. The next crucial step towards quantum logic gates is to show that the coherence of the superposition is preserved on time scales much longer than the time needed for manipulating the electron wave functions. The time-resolved measurement of coherent charge oscillations in double quantum dots using pulsed gate voltages, will be an essential step in determining the dephasing time in these systems.

In addition, the role of the electron spin and its relaxation and dephasing times $( T _ { 1 }$ and $T _ { 2 } .$ , respectively) need to be characterized, as they are essential in the proposed quantum bit schemes based on coupled electron spins in double dots (Loss and DiVincenzo, 1998). The relaxation time $T _ { 1 }$ in quantum dots has been experimentally shown to exceed 10 - 100 µs if the relaxation involves a spin-flip (Fujisawa, 2002). The determination of the spin dephasing time $T _ { 2 }$ , which is the most relevant timescale for quantum computing purposes, will be an experimental challenge for the near future. We conclude that our work on double dots so far, in combination with the results on the spin relaxation times in this kind of systems, forms a promising point of departure for further study on the suitability of double quantum dots as quantum coherent devices.

![[assets/figures/references/vanderwiel-2002/7a59a384295a533e250cbfbb388397d92052b421b375bb9efddf7c8892b2379f.jpg]]  
FIG. 28 Measured pumped current through the strongly coupled double dot. Gates 1 and 3 are swept simultaneously in such a way that we vary the energy diference $\Delta E .$ . The diferent traces are taken at diferent microwave frequencies, and are ofset such that the right vertical axis gives the frequency. The main resonance is absent as we have set $V = 0 ,$ . The satellite peaks typically have an amplitude of 0.5 pA. For weakly coupled dots the satellite peaks are expected to move linearly with frequency, thereby following the straight dashed lines. In contrast, we observe that the satellite peaks follow the fitted dotted hyperbola $h f = [ \bar { \Delta } E ^ { 2 } + ( 2 \breve { | t _ { 1 2 } | } ) ^ { 2 } ] ^ { 1 / 2 }$ using the coupling $\left| t _ { 1 2 } \right|$ as a fitting parameter.

## Acknowledgments

We would like to thank R. Aguado, S.M. Cronenwett, D.C. Dixon, S. Godijn, P. Hadley, C.J.P.M. Harmans, R.V. Hijman, Y. Hirayama, K. Ishibashi, M.P. Janus, K.K. Likharev, F. Mallens, J.E. Mooij, Yu.V. Nazarov, T.H. Oosterkamp, R.M. Schouten, T.H. Stoof, M.J. Uilenreef, N.C. van der Vaart and L. Vandersypen for their help. We acknowledge financial support from the DARPA grant number DAAD19-01-1-0659 of the QuIST program, the Specially Promoted Research Grant-in-Aid for Scientific Research; the Ministry of Education, Culture, Sports, Science and Technology in Japan; the Dutch Organization for Fundamental Research on Matter (FOM); the Core Research for Evolutional Science and Technology (CREST-JST); and the European Union through a Training and Mobility of Researchers (TMR) Program network.

![[assets/figures/references/vanderwiel-2002/b640e5046db99f066a9eb88f15346e1e1a9c073cf23bc5808575742e52f4f393.jpg]]

![[assets/figures/references/vanderwiel-2002/120fcbf40070196228bbdb1a4ccd26575d230367778f4c56730bf6506ffdfa94.jpg]]  
FIG. 29 (a) Half the spacing in gate voltage between the positive and negative satellite peaks as a function of frequency for $e V _ { a c } \ll h f .$ Gate voltage spacing has been transferred to energy diference $\Delta E$ (see also figure caption Fig. 23(b)). Diferent curves correspond to diferent tunnel couplings $| t _ { 1 2 } |$ . Solid lines are theoretical fits to Eq. (29). In the limit of weak coupling, this reduces to $\Delta E = h f$ , which is indicated by the dashed line. The resulting values for $2 | t _ { 1 2 } |$ are given in the figure. The coupling is varied by applying diferent voltages to the center gate or by changing the magnetic field ( $B = 3 . 3 \mathrm { T } ; \pm \pmb { B } = 2 . 2$ T; other curves $B = 0 ~ \mathrm { T } )$ . The circle marks a coupling of 60 $\mu \mathrm { e V }$ and frequency of 16 GHz (dotted line). (b) Strongly coupled double dot $( 2 | t _ { 1 2 } | = 6 0 ~ \mu \mathrm { e V } )$ in the high microwave power regime for $f = 1 6 ~ \mathrm { G H z }$ (along dotted line in (a)). The inset shows the measured PAT current as a function of $\Delta E$ for diferent powers. The positions of the PAT peaks at the lowest power are indicated with two dashed lines. The PAT peak separation becomes larger for increasing microwave power. For higher powers, multi-photon processes can also take place, which result in extra current peaks. In the main part, half the PAT peak separation in energy as function of the relative microwave power is shown. The solid line is a fit to Eq. (28), $f = 1 6 ~ \mathrm { G H z } , 2 | t _ { 1 2 } | = 6 0 ~ \mu \mathrm { e V }$ Because of the relative power scale, the fitting curve has been adjusted horizontally to obtain the best fit.

## APPENDIX: Electrostatic energy of quantum dots

In this appendix we derive the electrostatic energy of a single and double quantum dot system. Before addressing these specific systems, we briefly discuss the method followed <sup>5</sup>.

## 1. Electrostatics of a system of N conductors

Consider a system consisting of N conductors. A capacitance can be defined between each conductor and every other conductor as well as a capacitance from each of the N conductors to ground. This results in a total of $N ( N { + } 1 ) / 2$ capacitors. The capacitor between node j and node k has a capacitance $c _ { j k }$ and stores a charge $q _ { j k }$ . The total charge on node j is the sum of the charges on all of the capacitors connected to node j

$$
Q _ {j} = \sum_ {k = 0} ^ {N} q _ {j k} = \sum_ {k = 0} ^ {N} c _ {j k} (V _ {j} - V _ {k})\tag{30}
$$

Here $V _ { j }$ is the electrostatic potential of node $j$ and ground is defined to be at zero potential, $V _ { 0 } = 0$ . The charges on the nodes are linear functions of the potentials of the nodes so this can be expressed more compactly in matrix form

$$
\overrightarrow {Q} = \mathbf {C} \overrightarrow {V}\tag{31}
$$

where C is called the capacitance matrix. A diagonal element of the capacitance matrix, $C _ { j j }$ , is the total capacitance of node j

$$
C _ {j j} = \sum_ {k = 0, k \neq j} ^ {N} c _ {j k}\tag{32}
$$

An of-diagonal element of the capacitance matrix is minus the capacitance between node $j$ and node k, $C _ { j k } = C _ { k j } =$ $- c _ { j k }$ . The electrostatic energy of this system of conductors is the sum of the electrostatic energy stored on the $N ( N + 1 ) / 2$ capacitors and can be conveniently expressed using the capacitance matrix

$$
U = \frac {1}{2} \overrightarrow {V} \cdot \mathbf {C} \overrightarrow {V} = \frac {1}{2} \overrightarrow {V} \cdot \overrightarrow {Q} = \frac {1}{2} \overrightarrow {Q} \cdot \mathbf {C} ^ {- 1} \overrightarrow {Q}\tag{33}
$$

Voltage sources can be included in the network by treating them as nodes with large capacitances to ground and large charges on them such that $V = Q / C$ . In this case, it is numerically dificult to compute the inverse of the capacitance matrix since it contains large elements. However, it is not necessary to invert the entire capacitance matrix since the voltages on the voltage sources are already known. Only the voltages on the other nodes need to be determined. These voltages can be determined by writing the relation between the charges and the voltages as

$$
\binom{\overrightarrow {Q} _ {c}}{\overrightarrow {Q} _ {v}} = \left( \begin{array}{c c} \mathbf {C _ {c c}} & \mathbf {C _ {c v}} \\ \mathbf {C _ {v c}} & \mathbf {C _ {v v}} \end{array} \right) \binom{\overrightarrow {V} _ {c}}{\overrightarrow {V} _ {v}}\tag{34}
$$

Here $\overrightarrow { Q } _ { c }$ and $\overrightarrow { V } _ { c }$ are the charges and the voltages on the charge nodes, $\vec { Q } _ { v }$ and $\scriptstyle { \overrightarrow { V } } _ { v }$ are the charges and the voltages on the voltage sources, and the capacitance matrix has been expressed in terms of four sub-matrices. The voltage on the charge nodes are then

$$
\overrightarrow {V} _ {c} = \mathbf {C} _ {\mathbf {c c}} ^ {- 1} (\overrightarrow {Q} _ {c} - \mathbf {C} _ {\mathbf {c v}} \overrightarrow {V} _ {v})\tag{35}
$$

and the electrostatic energy can be calculated with $\operatorname { E q . }$ (33).

## 2. Single quantum dot

![[assets/figures/references/vanderwiel-2002/bf8b23ac484f86ea71a04c77c0848d64e6499e471f3a9ece52cdbb28565dc542.jpg]]  
FIG. 30 Network of capacitors and voltage nodes used to calculate the electrostatic energy of a single quantum dot.

We write the total charge $Q _ { 1 }$ on the dot as the sum of the charges on all the capacitors connected to the dot (see Fig. 30)

$$
\begin{array}{l} Q _ {1} = C _ {L} (V _ {1} - V _ {L}) + C _ {g} (V _ {1} - V _ {g}) + C _ {R} (V _ {1} - V _ {R}) \Rightarrow \\ Q _ {1} + C _ {L} V _ {L} + C _ {g} V _ {g} + C _ {R} V _ {R} = C _ {1} V _ {1} \end{array}\tag{36}
$$

where $C _ { 1 }$ is the total capacitance coupled to the dot, $C _ { 1 } = C _ { L } + C _ { q } + C _ { R }$ . The capacitance matrix $\mathbf { C _ { c c } }$ only has one element. Using Eq. (33) and substituting $Q _ { 1 } = - ( N _ { 1 } - N _ { 0 } ) | e |$ , we find

$$
U (N _ {1}) = \frac {[ - (N _ {1} - N _ {0}) | e | + C _ {L} V _ {L} + C _ {g} V _ {g} + C _ {R} V _ {R} ] ^ {2}}{2 C _ {1}}\tag{37}
$$

where $N _ { 0 }$ is the number of electrons on the dot when all voltage sources are zero, which compensates the positive background charge originating from donors in the heterostructure.

## 3. Double quantum dot

![[assets/figures/references/vanderwiel-2002/0395645801024b4df95187e895716e9951deb9ce216f40de52c040685add6af8.jpg]]  
FIG. 31 Network of capacitors and voltage nodes used to calculate the electrostatic energy of a double quantum dot.

We write the total charge $Q _ { 1 ( 2 ) }$ on dot 1(2) as the sum of the charges on all the capacitors connected to dot 1(2) (see Fig. 31)

$$
\begin{array}{l} Q _ {1} = C _ {L} (V _ {1} - V _ {L}) + C _ {g 1} (V _ {1} - V _ {g 1}) + C _ {m} (V _ {1} - V _ {2}) \\ Q _ {2} = C _ {R} (V _ {2} - V _ {R}) + C _ {g 2} (V _ {2} - V _ {g 2}) + C _ {m} (V _ {2} - V _ {1}) \end{array}\tag{38}
$$

We can write this as

$$
\binom{Q _ {1} + C _ {L} V _ {L} + C _ {g 1} V _ {g 1}}{Q _ {2} + C _ {R} V _ {R} + C _ {g 2} V _ {g 2}} = \left( \begin{array}{c c} C _ {1} & - C _ {m} \\ - C _ {m} & C _ {2} \end{array} \right) \binom{V _ {1}}{V _ {2}}\tag{39}
$$

where $C _ { 2 } = C _ { R } + C _ { g 2 } + C _ { m }$ . The above expression in the form of Eq. (35) reads

$$
\binom{V _ {1}}{V _ {2}} = \frac {1}{C _ {1} C _ {2} - C _ {m} ^ {2}} \left( \begin{array}{c c} C _ {2} & C _ {m} \\ C _ {m} & C _ {1} \end{array} \right) \binom{Q _ {1} + C _ {L} V _ {L} + C _ {g 1} V _ {g 1}}{Q _ {2} + C _ {R} V _ {R} + C _ {g 2} V _ {g 2}}\tag{40}
$$

The electrostatic energy of the double dot system can now be calculated using Eq. (33). For the case $V _ { L } = V _ { R } = 0$ and $Q _ { 1 ( 2 ) } = - N _ { 1 ( 2 ) } | e |$ this becomes

$$
\begin{array}{r l} {U (N _ {1}, N _ {2}) =} & {\frac {1}{2} N _ {1} ^ {2} E _ {C 1} + \frac {1}{2} N _ {2} ^ {2} E _ {C 2} + N _ {1} N _ {2} E _ {C m} + f (V _ {g 1}, V _ {g 2})} \\ {f (V _ {g 1}, V _ {g 2}) =} & {\frac {1}{- | e |} \{C _ {g 1} V _ {g 1} (N _ {1} E _ {C 1} + N _ {2} E _ {C m}) + C _ {g 2} V _ {g 2} (N _ {1} E _ {C m} + N _ {2} E _ {C 2}) \}} \\ & {+ \frac {1}{e ^ {2}} \{\frac {1}{2} C _ {g 1} ^ {2} V _ {g 1} ^ {2} E _ {C 1} + \frac {1}{2} C _ {g 2} ^ {2} V _ {g 2} ^ {2} E _ {C 2} + C _ {g 1} V _ {g 1} C _ {g 2} V _ {g 2} E _ {C m} \}} \end{array}\tag{41}
$$

with

$$
E _ {C 1} = e ^ {2} \frac {C _ {2}}{C _ {1} C _ {2} - C _ {m} ^ {2}}; E _ {C 2} = e ^ {2} \frac {C _ {1}}{C _ {1} C _ {2} - C _ {m} ^ {2}}; E _ {C m} = e ^ {2} \frac {C _ {m}}{C _ {1} C _ {2} - C _ {m} ^ {2}}\tag{42}
$$

## References

Adourian, A. S., C. Livermore, R. M. Westervelt, K. L. Campman, and A. C. Gossard, 1996, Superlattices and Microstructure 20, 411.

Adourian, A. S., C. Livermore, R. M. Westervelt, K. L. Campman, and A. C. Gossard, 1999, Appl. Phys. Lett. 75, 424.

Amaha, S., D. G. Austing, Y. Tokura, K., Muraki, K., Ono, and S. Tarucha, 2001, Solid State Commun. 119, 183.

Austing, D. G., T. Honda, and S. Tarucha, 1997, Jpn. J. Appl. Phys. 36, 1667.

Austing, D. G., T. Honda, K., Muraki, Y. Tokura, and S. Tarucha, 1998, Physica B 249-251, 206.

Austing, D. G., H. Tamura, Y. Tokura, K., Muraki, S. Amaha, K., Ono, and S. Tarucha, 2001, Physica E 10, 112.

Averin, D. V., and K. K. Likharev, 1986, J. Low Temp. Phys. 62, 345.

Averin, D. V., and K. K. Likharev, 1991, in Mesoscopic Phenomena in Solids, edited by B. L. Altshuler, P. A. Lee, and R. A. Webb (Elsevier, Amsterdam), p. 167.

Averin, D. V., and Yu. V. Nazarov, 1992, in Single Charge Tunneling: Coulomb Blockade Phenomena in Nanostructures, edited by H. Grabert, and M. H. Devoret (Plenum Press and NATO Scientific Afairs Division, New York/London), p. 217. Beenakker, C. W. J., 1991, Phys. Rev. B 44, 1646.

Blick, R. H., R. J. Haug, D. W. van der Weide, K. von Klitzing, and K. Eberl, 1995, Appl. Phys. Lett. 67, 3924.

Blick, R. H., R. J. Haug, J. Weis, D. Pfannkuche, K. von Klitzing, and K. Eberl, 1996, Phys. Rev. B 53, 7899.

Blick, R. H., D. Pfannkuche, R. J. Haug, K. von Klitzing, and K. Eberl, 1998, Phys. Rev. Lett. 80, 4032.

Brune, Ph., C. Bruder, and H. Schoeller, 1997, Physica E 1, 216.

Cohen-Tannoudji, C., B. Diu, and F. Lalo¨e, 1977, Quantum Mechanics Volume one (John Wiley & Sons, New York).

Dixon, D. C., L. P. Kouwenhoven, P. L. McEuen, Y. Nagamune, J. Motohisa, and H. Sakaki, 1996, Phys. Rev. B 53, 12625.

Dixon, D. C., 1998, Ph.D. thesis (University of California, Berkeley).

Foxman, E. B., P. L. McEuen, U. Meirav, N. S. Wingreen, Y. Meir, P. A. Belk, N. R. Belk, M. A. Kastner, and S. J. Wind, 1993, Phys. Rev. B 47, 10020.

Fujisawa, T., and S. Tarucha, 1996, Appl. Phys. Lett. 68, 526.

Fujisawa, T., and S. Tarucha, 1997, Superlattices and Microstructures 21, 247.

Fujisawa, T., and S. Tarucha, 1997, Jpn. J. Appl. Phys. 36, 4000.

Fujisawa, T., T. H. Oosterkamp, W. G. van der Wiel, B. W. Broer, R. Aguado, S. Tarucha, and L. P. Kouwenhoven, 1998, Science 282, 932.

Fujisawa, T., Y. Tokura, and Y. Hirayama, 2001, Phys. Rev. B 63, 081304(R).

Fujisawa, T., private communication.

Grabert, H., and M. H. Devoret, 1992, Eds., Single Charge Tunneling: Coulomb Blockade Phenomena in Nanostructures (Plenum Press and NATO Scientific Afairs Division, New York/London).

Gu´eret, P., N. Blanc, R. Germann, and H. Rothuizen, 1992, Phys. Rev. Lett. 68, 1896.

Hazelzet, B. L., M. R. Wegewijs, T. H. Stoof, and Yu. V. Nazarov, 2001, Phys. Rev. B 63, 165313.

Hofmann, F., T. Heinzel, D. A. Wharam, J. P. Kotthaus, G. B¨ohm, W. Klein, G. Tr¨ankle, and G. Weimann, 1995, Phys. Rev. B 51, 13872.

Ishibashi, K., T. H. Oosterkamp, R. V. Hijman, and L. P. Kouwenhoven, 1998, Jpn. J. Appl. Phys. 37, 7161.

Jeong, H., A. M. Chang, and M. R. Melloch, 2001, Science 293, 2221.

Johnson, A. T., L. P. Kouwenhoven, W. de Jong, N. C. van der Vaart, C. J. P. M. Harmans, and C. T. Foxon, 1992, Phys. Rev. Lett. 69, 1592.

Kastner, M., 1993, Phys. Today 46, 24.

Kemerink, M., and L. W. Molenkamp, 1994, Appl. Phys. Lett. 65, 1012.

Kouwenhoven, L. P., S. Jauhar, K. McCormick, D. C. Dixon, and P. L. McEuen, 1994, Phys. Rev. B 50, 2019.

Kouwenhoven, L. P., S. Jauhar, J. Orenstein, P. L. McEuen, Y. Nagamune, J. Motohisa, and H. Sakaki, 1994, Phys. Rev. Lett. 73, 3443.

Kouwenhoven, L. P., 1995, Science 268, 1440.

Kouwenhoven, L. P., C. M. Marcus, P. L. McEuen, S. Tarucha, R. M. Westervelt, and N. S. Wingreen, 1997, in Mesoscopic Electron Transport, edited by L. L. Sohn, L. P. Kouwenhoven, and G. Sch¨on (Kluwer Academic Publishers, Dordrecht/Boston/London), Series E: Applied Sciences - Vol. 345, p. 105-214.

Livermore, C., C. H. Crouch, R. M. Westervelt, K. L. Campman, and A. C. Gossard, 1996, Science 274, 1332.

Loss, D., and D. P. DiVincenzo, 1998, Phys. Rev. A 57, 120-126.

Molenkamp, L. W., K. Flensberg, and M. Kemerink, 1995, Phys. Rev. Lett. 75, 4282.

Nazarov, Yu. V., 1993, Physica B 189, 57.

Oosterkamp, T. H., L. P. Kouwenhoven, A. E. A. Koolen, N. C. van der Vaart, and C. J. P. M. Harmans, 1997, Phys. Rev. Lett. 78, 1536.

Oosterkamp, T. H., S. F. Godijn, M. J. Uilenreef, Yu. V. Nazarov, N. C. van der Vaart, and L. P. Kouwenhoven, 1998, Phys. Rev. Lett. 80, 4951.

Oosterkamp, T. H., T. Fujisawa, W. G. van der Wiel, K. Ishibashi, R. V. Hijman, S. Tarucha, and L. P. Kouwenhoven, 1998, Nature 395, 873.

Pothier, H., P. Lafarge, C. Urbina, D. Est\`eve, and M. H. Devoret, 1992, Europhys. Lett. 17, 249.

Reed, M. A., J. N. Randall, J. H. Luscombe, W. R. Frensley, R.J. Aggarwal, R. J. Matyi, T. M. Moore, and A. E. Wetsel, 1989, Adv. Solid State Phys. 29, 267.

Ruzin, I. M., V. Chandrasekhar, E. I. Levin, and L. I. Glazman, 1992, Phys. Rev. B 45, 13469.

Schmidt, T., R. J. Haug, K. von Klitzing, A. F¨orster, and H. L. L¨uth, 1997, Phys. Rev. Lett. 78, 1544.

Staford, C. A., and N. S. Wingreen, 1996, Phys. Rev. Lett. 76, 1916.

Stoof, T. H., and Yu. V. Nazarov, 1996, Phys. Rev. B 53, 1050.

Stoof, T. H., 1997, Ph.D. thesis (Delft University of Technology, The Netherlands).

Su, B., V. J. Goldman, and J. E., Cunningham, 1992, Science 255, 313.

Tarucha, S., T. Fujisawa, K., Ono, D. G. Austing, T. H., Oosterkamp, W. G. van der Wiel, and L. P. Kouwenhoven, 1999, Microelectroninc Engineering 47, 101.

Tarucha, S., D. G. Austing, Y., Tokura, W. G. van der Wiel, and L. P. Kouwenhoven, 2000, Phys. Rev. Lett. 84, 2485.

Tewordt, M., H. Asahi, V. J. Law, R. T. Syme, M. J. Kelly, D. A. Ritchie, A. Churchill, J. E. F. Frost, R. H. Hughes, and G. A. C. Jones, 1992, Appl. Phys. Lett. 60, 595.

Tien, P. K., and J. R. Gordon, 1963, Phys. Rev. 129, 647.

van der Vaart, N. C., S. F. Godijn, Yu. V. Nazarov, C. J. P. M. Harmans, and J. E. Mooij, 1995, Phys. Rev. Lett. 74, 4702.

Waugh, F. R., M. J. Berry, D. J. Mar, R. M. Westervelt, K. L. Campman, and A. C. Gossard, 1995, Phys. Rev. Lett. 75, 705.

Waugh, F. R., M. J. Berry, C. H. Crouch, C. Livermore, D. J. Mar, R. M. Westervelt, K. L. Campman, and A. C. Gossard, 1996, Phys. Rev. B 53, 1413.

van der Wiel, W. G., T. Fujisawa, T. H. Oosterkamp, and L. P. Kouwenhoven, 1999, Physica B 272, 31.

van der Wiel, W. G., T. H. Oosterkamp, S. De Franceschi, C. J. P. M. Harmans, and L. P. Kouwenhoven, 2002, eprint 2002.
