---
title: Quantum computation with quantum dots
description: 自旋量子比特的开山之作：提出以量子点中单电子自旋为量子比特、用交换相互作用与局域磁场实现通用量子逻辑的完整方案。
aliases:
 - loss-divincenzo-1998
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">自旋量子比特的开山之作：提出以量子点中单电子自旋为量子比特、用交换相互作用与局域磁场实现通用量子逻辑的完整方案。</div>

> [!info] 文献信息
> D. Loss & D. P. DiVincenzo, “Quantum computation with quantum dots”, Physical Review A **57**, 120 (1998).
> [arXiv:cond-mat/9701055](https://arxiv.org/abs/cond-mat/9701055) · [DOI:10.1103/PhysRevA.57.120](https://doi.org/10.1103/PhysRevA.57.120)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Daniel Loss<sup>a,b∗</sup> and David P. DiVincenzo<sup>a,c†</sup>

<sup>a</sup>Institute for Theoretical Physics, University of California, Santa Barbara, CA 93106-4030, USA

<sup>b</sup>Department of Physics and Astronomy, University of Basel, Klingelbergstrasse 82, 4056 Basel,

Switzerland

<sup>c</sup>IBM Research Division, T. J. Watson Research Center, P. O. Box 218, Yorktown Heights, NY

10598, USA

(November 26, 2024)

## Abstract

We propose a new implementation of a universal set of one- and two-qubit gates for quantum computation using the spin states of coupled single-electron quantum dots. Desired operations are efected by the gating of the tunneling barrier between neighboring dots. Several measures of the gate quality are computed within a newly derived spin master equation incorporating decoherence caused by a prototypical magnetic environment. Dot-array experiments which would provide an initial demonstration of the desired non-equilibrium spin dynamics are proposed.

1996 PACS: 03.65.Bz, 75.10.Jm, 73.61.-r, 89.80.+h

Typeset using REVT<sub>E</sub>X

## I. INTRODUCTION

The work of the last several years has greatly clarified both the theoretical potential and the experimental challenges of quantum computation [1]. In a quantum computer the state of each bit is permitted to be any quantum-mechanical state of a qubit (two-level quantum system). Computation proceeds by a succession of “two-qubit quantum gates” [2], coherent interactions involving specific pairs of qubits, by analogy to the realization of ordinary digital computation as a succession of boolean logic gates. It is now understood that the time evolution of an arbitrary quantum state is intrinsically more powerful computationally than the evolution of a digital logic state (the quantum computation can be viewed as a coherent superposition of digital computations proceeding in parallel).

Shor has shown [3] how this parallelism may be exploited to develop polynomial-time quantum algorithms for computational problems, such as prime factoring, which have previously been viewed as intractable. This has sparked investigations into the feasibility of the actual physical implementation of quantum computation. Achieving the conditions for quantum computation is extremely demanding, requiring precision control of Hamiltonian operations on well-defined two-level quantum systems, and a very high degree of quantum coherence [4]. In ion-trap systems [5], and in cavity quantum electrodynamic experiments [6], quantum computation at the level of an individual two-qubit gate has been demonstrated; however, it is unclear whether such atomic-physics implementations could ever be scaled up to do truly large-scale quantum computation, and some have speculated that solid-state physics, the scientific mainstay of digital computation, would ultimately provide a suitable arena for quantum computation as well. The initial realization of the model that we introduce here would correspond to only a modest step towards the realization of quantum computing, but it would at the same time be a very ambitious advance in the study of controlled non-equilibrium spin dynamics of magnetic nanosystems, and could point the way towards more extensive studies to explore the large-scale quantum dynamics envisioned for a quantum computer.

## II. QUANTUM-DOT IMPLEMENTATION OF TWO-QUBIT GATES

In this report we develop a detailed scenario for how quantum computation may be achieved in a coupled quantum dot system [7]. In our model the qubit is realized as the spin of the excess electron on a single-electron quantum dot, see Fig. 1. We introduce here a novel mechanism for two-qubit quantum-gate operation that operates by a purely electrical gating of the tunneling barrier between neighboring quantum dots, rather than by spectroscopic manipulation as in other models. Controlled gating of the tunneling barrier between neighboring single-electron quantum dots in patterned two-dimensional electrongas structures has already been achieved experimentally using a split-gate technique [8]. If the barrier potential is “high”, tunneling is forbidden between dots, and the qubit states are held stably without evolution in time (t). If the barrier is pulsed to a “low” voltage, the usual physics of the Hubbard model [9] says that the spins will be subject to a transient Heisenberg coupling,

$$
H _ {s} (t) = J (t) \vec {S} _ {1} \cdot \vec {S} _ {2},\tag{1}
$$

where $\begin{array} { r } { J ( t ) = \frac { 4 t _ { 0 } ^ { 2 } ( t ) } { u } } \end{array}$ is the time-dependent exchange constant [10] which is produced by the turning on and of of the tunneling matrix element $t _ { 0 } ( t )$ . Here u is the charging energy of a single dot, and $\vec { S } _ { i }$ is the spin- $- 1 / 2$ operator for dot i.

Eq. (1) will provide a good description of the quantum-dot system if several conditions are met: 1) Higher-lying single particle states of the dots can be ignored; this requires $\Delta E \gg k T$ , where $\Delta E$ is the level spacing and T is the temperature. 2) The time scale $\tau _ { s }$ for pulsing the gate potential “low” should be longer than $\hbar / \Delta E$ , in order to prevent transitions to higher orbital levels. 3) $u > t _ { 0 } ( t )$ for all $t ;$ this is required for the Heisenberg-exchange approximation to be accurate. 4) The decoherence time Γ<sup>−1</sup> should be much longer than the switching time $\tau _ { s }$ . Much of the remainder of the paper will be devoted to a detailed analysis of the efect of a decohering environment. We expect that the spin-1/2 degrees of freedom in quantum dots should generically have longer decoherence times than charge degrees of freedom, since they are insensitive to any environmental fluctuations of the electric potential. However, while charge transport in such coupled quantum dots has received much recent attention [11,8] we are not aware of investigations on their non-equilibrium spin dynamics as envisaged here. Thus, we will carefully consider the efect of magnetic coupling to the environment.

If $\Gamma ^ { - 1 }$ is long, then the ideal of quantum computing may be achieved, wherein the efect of the pulsed Hamiltonian is to apply a particular unitary time evolution operator $\begin{array} { r } { U _ { s } ( t ) = T \exp \{ - i \int _ { 0 } ^ { t } H _ { s } ( t ^ { \prime } ) d t ^ { \prime } \} } \end{array}$ to the initial state of the two spins: $| \Psi ( t ) \rangle = U _ { s } | \Psi ( 0 ) \rangle$ . The pulsed Heisenberg coupling leads to a special form for $U _ { s }$ : For a specific duration $\tau _ { s }$ of the spin-spin coupling such that $\begin{array} { r } { \int d t J ( t ) = J _ { 0 } \tau _ { s } = \pi } \end{array}$ (mod 2π) [12], $U _ { s } ( J _ { 0 } \tau _ { s } = \pi ) = U _ { s w }$ is the “swap” operator: if $| i j \rangle$ labels the basis states of two spins in the $S _ { z } { \mathrm { - b a s i s } }$ with $i , j = 0 ;$ , 1, then $U _ { s w } | i j \rangle = | j i \rangle$ . Because it conserves the total angular momentum of the system, $U _ { s w }$ is not by itself suficient to perform useful quantum computations, but if the interaction is pulsed on for just half the duration, the resulting “square root of swap” is very useful as a fundamental quantum gate: for instance, a quantum XOR gate is obtained by a simple sequence of operations:

$$
U _ {X O R} = e ^ {i \frac {\pi}{2} S _ {1} ^ {z}} e ^ {- i \frac {\pi}{2} S _ {2} ^ {z}} U _ {s w} ^ {\frac {1}{2}} e ^ {i \pi S _ {1} ^ {z}} U _ {s w} ^ {\frac {1}{2}},\tag{2}
$$

where $e ^ { i \pi S _ { 1 } ^ { z } }$ etc. are single-qubit operations only, which can be realized e.g. by applying local magnetic fields (see Sec. III B) [13]. It has been established that XOR along with single-qubit operations may be assembled to do any quantum computation [2]. Note that the XOR of Eq. (2) is given in the basis where it has the form of a conditional phase-shift operation; the standard XOR is obtained by a simple basis change for qubit 2 [2].

## III. THE MASTER EQUATION

We will now consider in detail the non-ideal action of the swap operation when the two spins are coupled to a magnetic environment. A new master equation model is obtained that explicitly accounts for the action of the environment during switching — to our knowledge, the first treatment of this efect. We use a Caldeira-Leggett type model in which a set of harmonic oscillators are coupled linearly to the system spins by $\begin{array} { r } { H _ { i n t } = \lambda \sum _ { i = 1 , 2 } \vec { S _ { i } } \cdot \vec { b _ { i } } } \end{array}$ Here, $\begin{array} { r } { b _ { i } ^ { j } = \sum _ { \alpha } g _ { \alpha } ^ { i j } ( a _ { \alpha , i j } + a _ { \alpha , i j } ^ { \dagger } ) } \end{array}$ is a fluctuating quantum field whose free motion is governed by the harmonic oscillator Hamiltonian $\begin{array} { r } { H _ { B } = \sum \omega _ { \alpha } ^ { i j } a _ { \alpha , i j } ^ { \dagger } a _ { \alpha , i j } } \end{array}$ , where $a _ { \alpha , i j } ^ { \dagger } / a _ { \alpha , i j }$ are bosonic creation/annihilation operators (with $j = x , y , z )$ , and $\omega _ { \alpha } ^ { i j }$ are the corresponding frequencies with spectral distribution function $\begin{array} { r } { J _ { i j } ( \omega ) = \pi \sum _ { \alpha } ( g _ { \alpha } ^ { i j } ) ^ { 2 } \delta ( \omega - \omega _ { \alpha } ) } \end{array}$ [14]. The system and environment are initially uncorrelated with the latter in thermal equilibrium described by the canonical density matrix $\rho _ { B }$ with temperature T. We assume for simplicity that the environment acts isotropically and is equal and independent on both dots. We do not consider this to be a microscopically accurate model for these as-yet-unconstructed quantum dot systems, but rather as a generic phenomenological description of the environment of a spin, which will permit us to explore the complete time dependence of the gate action on the single coupling constant λ and the controlled parameters of $H _ { s } ( t )$ [15].

## A. Swap gate

The quantity of interest is the system density matrix $\rho ( t ) = T r _ { B } \bar { \rho } ( t )$ which we obtain by tracing out the environment degrees of freedom. The full density matrix $\bar { \rho }$ itself obeys the von Neumann equation,

$$
\dot {\bar {\rho}} (t) = - i [ H, \bar {\rho} ] \equiv - i \mathcal {L} \bar {\rho},\tag{3}
$$

where

$$
\mathcal {L} = \mathcal {L} _ {s} (t) + \mathcal {L} _ {i n t} + \mathcal {L} _ {B}\tag{4}
$$

denotes the Liouvillian [16] corresponding to the full Hamiltonian

$$
H = H _ {s} (t) + H _ {i n t} + H _ {B}.\tag{5}
$$

Our goal is to find the linear map (superoperator) (t) which connects the input state of the gate $\rho _ { 0 } = \rho ( t = 0 )$ with the output state $\rho ( t )$ after time $t > \tau _ { s }$ has elapsed, $\rho ( t ) = \mathcal { V } ( t ) \rho _ { 0 }$ $\mathcal { V } ( t )$ must satisfy three physical conditions: 1) trace preservation $T r _ { s } \mathcal { V } \rho = 1$ , where $T r _ { s }$ denotes the system trace, 2) Hermiticity preservation $( \mathcal { V } \rho ) ^ { \dagger } = \mathcal { V } \rho .$ , and 3) complete positivity, $( \gamma _ { \otimes { 1 _ { B } } } ) \bar { \rho } \geq 0$ . Using the Zwanzig master equation approach [16] we sketch the derivation for V <sup>in</sup> <sup>the</sup> <sup>Born</sup> <sup>and</sup> <sup>Markov</sup> <sup>approximation</sup> <sup>which</sup> <sup>respects</sup> <sup>these</sup> <sup>three</sup> <sup>conditions.</sup> <sup>The</sup> <sup>novel</sup> situation we analyze here is unusual in that $H _ { s }$ is explicitly time-dependent and changes abruptly in time. It is this fact that requires a separate treatment for times $t \leq \tau _ { s }$ and $t > \tau _ { s }$ . To implement this time scale separation and to preserve positivity it is best to start from the exact master equation in pure integral form,

$$
\rho (t) = \mathcal {U} _ {s} (t, 0) \rho_ {0} - \int_ {0} ^ {t} d \sigma \int_ {0} ^ {\sigma} d \tau \mathcal {U} _ {s} (t, \sigma) \mathcal {M} (\sigma , \tau) \rho (\tau),\tag{6}
$$

where

$$
\mathcal {U} _ {i} (t, t ^ {\prime}) = T \exp \{- i \int_ {t ^ {\prime}} ^ {t} d \tau \mathcal {L} _ {i} (\tau) \},\tag{7}
$$

where $i = s , \ B$ , int, or $q .$ Here $q$ indicates the projected Liouvillian

$$
\mathcal {L} _ {q} = (1 - P) \mathcal {L} = (1 - \rho_ {B} T r _ {B}) \mathcal {L}.\tag{8}
$$

Also, the “memory kernel” is

$$
\mathcal {M} (\sigma , \tau) = T r _ {B} \mathcal {L} _ {i n t} \mathcal {U} _ {q} (\sigma , \tau) \mathcal {L} _ {i n t} \rho_ {B}.\tag{9}
$$

We solve (6) in the Born approximation and for $t \gg \tau _ { s }$ . To this end the time integrals are split up into three parts, 1) $0 \le \tau \le \sigma \le \tau _ { s } < t , 2 ) 0 \le \tau \le \tau _ { s } \le \sigma < t$ , and 3) $0 \leq \tau _ { s } \leq \tau \leq \sigma < t$ . Keeping only leading terms in $\tau _ { s }$ we retain the contribution from interval 2) as it is proportional to $\tau _ { s }$ , whereas we can drop interval 1) which leads to higherorder terms. But note that terms containing $J _ { 0 } \tau _ { s }$ must be kept to all orders [12]. Interval 3) is independent of $\tau _ { s }$ .

Rewriting the expressions and performing a Born approximation (i.e., keeping only lowest order terms in $\lambda ^ { 2 } )$ with subsequent Markov approximation we find, for $t \geq \tau _ { s }$ 2

$$
\mathcal {V} (t) = e ^ {- (t - \tau_ {s}) \mathcal {K} _ {3}} \mathcal {U} _ {s} (\tau_ {s}) \left(1 - \mathcal {K} _ {2}\right),\tag{10}
$$

where $\mathcal { U } _ { i } ( \tau _ { s } ) = \mathcal { U } _ { i } ( \tau _ { s } , 0 ) , \mathcal { K } _ { 2 }$ describes the efect of the environment during the switching,

$$
\begin{array}{r l} & {\mathcal {K} _ {2} = \mathcal {U} _ {s} ^ {\dagger} (\tau_ {s}) \int_ {0} ^ {\tau_ {s}} d \tau \int_ {0} ^ {\infty} d t} \\ & {\qquad \times T r _ {B} \mathcal {L} _ {i n t} \mathcal {U} _ {s} (\tau) \mathcal {U} _ {B} (t) \mathcal {L} _ {i n t} \rho_ {B} \mathcal {U} _ {s} (\tau_ {s} - \tau),} \end{array}\tag{11}
$$

while

$$
\mathcal {K} _ {3} = \int_ {0} ^ {\infty} d t T r _ {B} \mathcal {L} _ {i n t} \mathcal {U} _ {B} (t) \mathcal {L} _ {i n t} \rho_ {B}\tag{12}
$$

is independent of $H _ { s }$ . We also note that $\mathcal { U } _ { s } ( 1 - \mathcal { K } _ { 2 } )$ has a simple interpretation as being the “transient contribution” which changes the initial value $\rho _ { 0 }$ at $t = 0$ to $\mathcal { U } _ { s } ( \tau _ { s } ) ( 1 - \mathcal { K } _ { 2 } ) \rho _ { 0 }$ at $t = \tau _ { s }$ . We show in the Appendix that, to leading order, our superoperator  indeed satisfies all three conditions stated above, in particular complete positivity. Such a proof for spins with an explicit time-dependent and direct interaction, Eq. (1), is not simply related to the case of a master equation for non-interacting spins (and without explicit time-dependence) considered in the literature (see for example [17,16]). We also note that the above Born and Markov approximations could also be introduced in the master equation in the more usual diferential-integral representation. However, it is well-known from studies in noninteracting spin problems [18] that in this case the resulting propagator is in general no longer completely positive.

Next, we evaluate the above superoperators more explicitly, obtaining

$$
\mathcal {K} _ {2} \rho = (\Gamma + i \Delta) \sum_ {i} \int_ {0} ^ {\tau_ {s}} d \tau [ \vec {S} _ {i} (\tau_ {s}), \cdot \vec {S} _ {i} (\tau) \rho ] + h. c.,\tag{13}
$$

$$
\mathcal {K} _ {3} \rho = \Gamma (3 \rho - 2 \sum_ {i} \vec {S} _ {i} \rho \cdot \vec {S} _ {i}),\tag{14}
$$

where $\Gamma , \Delta$ are real and given by

$$
\Gamma = \frac {\lambda^ {2}}{\pi} \int_ {0} ^ {\infty} d t \int_ {0} ^ {\infty} d \omega J (\omega) \cos (\omega t) \coth (\frac {\omega}{2 k _ {B} T}),\tag{15}
$$

$$
\Delta = \frac {\lambda^ {2}}{\pi} \int_ {0} ^ {\infty} d t \int_ {0} ^ {\infty} d \omega J (\omega) \sin (\omega t).\tag{16}
$$

In our model, the transverse and longitudinal relaxation or decoherence rates of the system spins are the same and given by Γ. For instance, for ohmic damping with $J ( \omega ) = \eta \omega$ 2 we get $\Gamma = \lambda ^ { 2 } \eta k _ { B } T$ and $\Delta = \lambda ^ { 2 } \eta \omega _ { c } / \pi$ , with $\omega _ { c }$ some high frequency cut-of. Requiring for consistency that $\Gamma \tau _ { s } , \Delta \tau _ { s } \ll 1$ we find that $\displaystyle \mathcal { K } _ { 2 }$ is in fact a small correction. However, we emphasize again that, to our knowledge, this is the first time that any analysis of this $\displaystyle \mathcal { K } _ { 2 }$ term, describing the action of the environment during the finite time that the system Hamiltonian is switched on, has been given.

For further evaluation of we adopt a matrix representation, defined by

$$
\mathcal {V} _ {a b | c d} = (e _ {a b}, \mathcal {V} e _ {c d}) \equiv T r _ {s} e _ {a b} ^ {\dagger} \mathcal {V} e _ {c d},\tag{17}
$$

where $\{ e _ { a b } | a , b = 1 , . . , 4 \}$ is an orthonormal basis, i.e. $( e _ { a b } , e _ { c d } ) = \delta _ { a c } \delta _ { b d }$ . In this notation we then have

$$
\rho (t) _ {a b} = \sum_ {c, d} \mathcal {V} _ {a b | c d} (\rho_ {0}) _ {c d}\tag{18}
$$

with  being a $1 6 \times 1 6$ matrix.

Note that $\kappa _ { 2 , 3 }$ and $\mathcal { U } _ { s }$ are not simultaneously diagonal. However, since $\mathcal { K } _ { 3 } ( 1 , \vec { S } _ { i } ) =$ $2 \Gamma ( 0 , \vec { S } _ { i } )$ we see that exp $\{ - ( t - \tau _ { s } ) \kappa _ { 3 } \}$ is diagonal in the “polarization basis” $\left\{ e _ { a b } ^ { p } \right. =$ $e _ { a } ^ { 1 } e _ { b } ^ { 2 } ; e _ { 1 , . . , 4 } ^ { i } \ = \ ( 1 / \sqrt { 2 } , \sqrt { 2 } S _ { i } ^ { x } , \sqrt { 2 } S _ { i } ^ { y } , \sqrt { 2 } S _ { i } ^ { z } ) , i \ = \ 1 , 2 \}$ , while $\mathcal { L } _ { s }$ and thus $\mathcal { U } _ { s }$ are diagonal in the “multiplet basis” $\{ e _ { \alpha \beta } ^ { m } ~ = ~ | \alpha \rangle \langle \beta | , \alpha , \beta ~ = ~ 1 , . . . , 4 ; | 1 \rangle ~ = ~ ( | 0 1 \rangle ~ - ~ | 1 0 \rangle ) / \sqrt { 2 } , | 2 \rangle ~ =$ $( | 0 1 \rangle + | 1 0 \rangle ) / \sqrt { 2 } , | 3 \rangle = | 0 0 \rangle , | 4 \rangle = | 1 1 \rangle \}$ , with

$$
\mathcal {U} _ {s} (t) _ {\alpha \beta | \alpha^ {\prime} \beta^ {\prime}} = \delta_ {\alpha \alpha^ {\prime}} \delta_ {\beta \beta^ {\prime}} e ^ {- i t (E _ {\alpha} ^ {m} - E _ {\beta} ^ {m})},\tag{19}
$$

where $E _ { 1 } ^ { m } = - 3 J _ { 0 } / 4 , E _ { 2 , 3 , 4 } ^ { m } = J _ { 0 } / 4$ are the singlet and triplet eigenvalues. Lastly, $\displaystyle \mathcal { K } _ { 2 }$ is most easily evaluated also in the multiplet basis; after some calculation we find that $\mathcal { K } _ { 2 } = \mathcal { K } _ { 2 } ^ { d } - \mathcal { K } _ { 2 } ^ { n d }$ , with

$$
(\mathcal {K} _ {2} ^ {d}) _ {\alpha \beta | \gamma \delta} = \sum_ {i, \alpha^ {\prime}} [ \delta_ {\alpha \gamma} \langle \delta | \vec {S} _ {i} | \alpha^ {\prime} \rangle \cdot \langle \alpha^ {\prime} | \vec {S} _ {i} | \beta \rangle k _ {\alpha^ {\prime} \alpha^ {\prime} | \delta \beta} ^ {*} + \delta_ {\beta \delta} \langle \alpha | \vec {S} _ {i} | \alpha^ {\prime} \rangle \cdot \langle \alpha^ {\prime} | \vec {S} _ {i} | \gamma \rangle k _ {\alpha^ {\prime} \alpha^ {\prime} | \gamma \alpha} ],\tag{20}
$$

$$
(\mathcal {K} _ {2} ^ {n d}) _ {\alpha \beta | \gamma \delta} = \sum_ {i} \langle \alpha | \vec {S} _ {i} | \gamma \rangle \cdot \langle \delta | \vec {S} _ {i} | \beta \rangle \left(k _ {\alpha \beta | \gamma \delta} + (k _ {\beta \alpha | \delta \gamma}) ^ {*}\right).\tag{21}
$$

Here

$$
\begin{array}{r l} {k _ {\alpha \beta | \gamma \delta} = (\Gamma + i \Delta) e ^ {i (E _ {\delta} ^ {m} - E _ {\beta} ^ {m}) \tau_ {s}} \int_ {0} ^ {\tau_ {s}} d \tau e ^ {i (E _ {\alpha} ^ {m} - E _ {\gamma} ^ {m}) \tau}} \\ & {= \frac {1}{2 \omega_ {\alpha \gamma}} [ \Gamma c _ {\delta \beta} - \Delta s _ {\delta \beta} + i (\Gamma s _ {\delta \beta} + \Delta c _ {\delta \beta}) ] [ s _ {\alpha \gamma} + i (1 - c _ {\alpha \gamma}) ],} \\ {c _ {i j} = \cos (\tau_ {s} \omega_ {i j}), s _ {i j} = \sin (\tau_ {s} \omega_ {i j}), \omega_ {i j} = E _ {i} ^ {m} - E _ {j} ^ {m}.} \end{array}
$$

Using the above matrix notation, we can write explicitly

$$
\mathcal {V} _ {\alpha \beta | \gamma \delta} = \sum_ {a, b, \alpha^ {\prime}, \beta^ {\prime}} (C _ {a b | \alpha \beta}) ^ {*} (e ^ {- (t - \tau_ {s}) \mathcal {K} _ {3}}) _ {a b | a b} C _ {a b | \alpha^ {\prime} \beta^ {\prime}} e ^ {- i \tau_ {s} (E _ {\alpha^ {\prime}} ^ {m} - E _ {\beta^ {\prime}} ^ {m})} (1 - \mathcal {K} _ {2}) _ {\alpha^ {\prime} \beta^ {\prime} | \gamma \delta},\tag{22}
$$

where $C _ { a b | \alpha \beta } ~ = ~ ( e _ { a b } ^ { p } , e _ { \alpha \beta } ^ { m } )$ is the unitary basis change between the polarization and the multiplet basis.

## B. One-bit gates

We now repeat the preceding analysis for single-qubit rotations such as $e ^ { i \frac { \pi } { 2 } S _ { i } ^ { z } }$ as required in Eq. (2). Such rotations can be achieved if a magnetic field $\vec { H } _ { i }$ could be pulsed exclusively onto spin i, perhaps by a scanning-probe tip. An alternative way, which would become attractive if further advances are made in the synthesis of nanostructures in magnetic semiconductors [19], is to use, as indicated in Fig. 1(a), an auxiliary dot (FM) made of an insulating, ferromagnetically-ordered material that can be connected to dot 1 (or dot 2) by the same kind of electrical gating as discussed above [8]. If the the barrier between dot 1 and dot FM were lowered so that the electron’s wavefunction overlaps with the magnetized region for a fixed time $\tau _ { s } .$ , the Hamiltonian for the qubit on dot 1 will contain a Zeeman term during that time. For all earlier and later times the magnetic field seen by the qubit should be zero; any stray magnetic field from the dot FM at neighboring dots 1, 2, etc. could be made small by making FM part of a closure domain or closed magnetic circuit.

In either case, the spin is rotated and the corresponding Hamiltonian is given by

$$
\int_ {0} ^ {\tau_ {s}} d t H _ {s} ^ {H} = \sum_ {i = 1} ^ {2} \omega_ {i} \tau_ {s} S _ {i} ^ {z},\tag{23}
$$

with $\omega _ { i } = g \mu _ { B } H _ { i } ^ { z }$ , where we assume that the H-field acting on spin i is along the z-axis. The calculation proceeds along the same line as the one described above: Just as in Eq. (10), the expression obtained for the superoperator is

$$
\mathcal {V} _ {H} (t) = e ^ {- (t - \tau_ {s}) \mathcal {K} _ {3}} \mathcal {U} _ {s} ^ {H} (\tau_ {s}) \left(1 - \mathcal {K} _ {2} ^ {H}\right).\tag{24}
$$

$\displaystyle \mathcal { K } _ { 3 }$ is exactly the same as before, Eq. (14). $\mathcal { U } _ { s } ^ { H } ( \tau _ { s } )$ is again given by Eq. (7) with the modification that the Liouvillian (see Eq. (4)) corresponding to the magnetic field Hamiltonian of Eq. (23) is used rather than that for the exchange Hamiltonian $H _ { s }$ (Eqs. (5) and (1)). The explicit matrix representation is

$$
\big (\mathcal {U} _ {s} ^ {H} (\tau_ {s}) \big) _ {r s | r ^ {\prime} s ^ {\prime}} = \delta_ {r r ^ {\prime}} \delta_ {s s ^ {\prime}} e ^ {- i \sum_ {i = 1} ^ {2} (E _ {r} ^ {i} - E _ {s} ^ {i}) \tau_ {s}}.\tag{25}
$$

Here we are employing another basis, the $S _ { z }$ -basis for the two spins $\{ e _ { r s } ^ { z } = | r \rangle \langle s | , \ r , s =$ $1 , 2 , 3 , 4 ; | s \rangle = | 0 0 \rangle , | 0 1 \rangle , | 1 0 \rangle , | 1 1 \rangle \}$ . The energies are

$$
\begin{array}{l} \{E _ {r} ^ {1} \} = \{E _ {1, 2, 3, 4} ^ {1} \} = \frac {\omega_ {1}}{2} \{1, 1, - 1, - 1 \}, \\ \{E _ {r} ^ {2} \} = \{E _ {1, 2, 3, 4} ^ {2} \} = \frac {\omega_ {2}}{2} \{1, - 1, 1, - 1 \}. \end{array}\tag{26}
$$

The $\mathcal { K } _ { 2 } ^ { H }$ calculation also proceeds as before (see Eq. (13)) using the new Hamiltonian; the result is ${ \cal K } _ { 2 } ^ { H } = { \cal K } _ { 2 } ^ { H , d } - { \cal K } _ { 2 } ^ { H , n d }$ , with

$$
(\mathcal {K} _ {2} ^ {H, d}) _ {r s | t u} = \sum_ {i, r ^ {\prime}} \left(\delta_ {r t} \langle u | \vec {S} _ {i} | r ^ {\prime} \rangle \cdot \langle r ^ {\prime} | \vec {S} _ {i} | s \rangle (k _ {r ^ {\prime} r ^ {\prime} | u s} ^ {i}) ^ {*} + \delta_ {s u} \langle r | \vec {S} _ {i} | r ^ {\prime} \rangle \cdot \langle r ^ {\prime} | \vec {S} _ {i} | t \rangle k _ {r ^ {\prime} r ^ {\prime} | t r} ^ {i}\right),\tag{27}
$$

$$
(\mathcal {K} _ {2} ^ {H, n d}) _ {r s | t u} = \sum_ {i} \langle r | \vec {S} _ {i} | t \rangle \cdot \langle u | \vec {S} _ {i} | s \rangle \left(k _ {r s | t u} ^ {i} + (k _ {s r | u t} ^ {i}) ^ {*}\right).\tag{28}
$$

Here

$$
\begin{array}{r l} k _ {r s | t u} ^ {i} = & (\Gamma + i \Delta) e ^ {i (E _ {u} ^ {i} - E _ {s} ^ {i}) \tau_ {s}} \int_ {0} ^ {\tau_ {s}} d \tau e ^ {i (E _ {r} ^ {i} - E _ {t} ^ {i}) \tau} \\ = & \frac {1}{2 \omega_ {r t} ^ {i}} [ \Gamma c _ {u s} ^ {i} - \Delta s _ {u s} ^ {i} + i (\Gamma s _ {u s} ^ {i} + \Delta c _ {u s} ^ {i}) ] [ s _ {r t} ^ {i} + i (1 - c _ {r t} ^ {i}) ], \\ c _ {i j} ^ {k} = & \cos (\tau_ {s} \omega_ {i j} ^ {k}), s _ {i j} ^ {k} = \sin (\tau_ {s} \omega_ {i j} ^ {k}), \omega_ {i j} ^ {k} = E _ {i} ^ {k} - E _ {j} ^ {k}. \end{array}\tag{29}
$$

The $E ^ { k } \mathrm { ^ s }$ are from Eq. (26). Finally, the explicit matrix form for $\mathcal { V } ^ { H }$ may be written

$$
\mathcal {V} _ {a b | a ^ {\prime} b ^ {\prime}} ^ {H} = \sum_ {r, s, r ^ {\prime}, s ^ {\prime}} (e ^ {- (t - \tau_ {s}) \mathcal {K} _ {3}}) _ {a b | a b} (D _ {r s | a b}) ^ {*} e ^ {- i \sum_ {i = 1} ^ {2} \tau_ {s} (E _ {r} ^ {i} - E _ {s} ^ {i})} (1 - \mathcal {K} _ {2} ^ {H}) _ {r s | r ^ {\prime} s ^ {\prime}} D _ {r ^ {\prime} s ^ {\prime} | a ^ {\prime} b ^ {\prime}},\tag{30}
$$

where $D _ { r s | a b } \ = \ ( e _ { r s } ^ { z } , e _ { a b } ^ { p } )$ is now the unitary basis change between the $S _ { z }$ basis and the polarization basis.

## C. Numerical study for swap gate and XOR gate

Having diagonalized the problem, we can now calculate any system observable; the required matrix calculations are involved and complete evaluation is done with Mathematica. We will consider three parameters (s, F, and P in Fig. 2) relevant for characterizing the gate operation. We first perform this analysis for the swap operation introduced above.

The swap operation would provide a useful experimental test for the gate functionality: Let us assume that at $t = 0$ spin 2 is (nearly) polarized, say, along the z-axis, while spin 1 is (nearly) unpolarized, i.e. $\rho _ { 0 } = ( 1 + 2 S _ { 2 } ^ { z } ) / 4$ . This can be achieved, e.g., by selective optical excitation, or by an applied magnetic field with a strong spatial gradient. Next we apply a swap operation by pulsing the exchange coupling such that $J _ { 0 } \tau _ { s } = \pi$ , and observe the resulting polarization of spin 1 described by

$$
\langle S _ {1} ^ {z} (t) \rangle = \frac {1}{2} \mathcal {V} (t) _ {4 1 | 1 4},\tag{31}
$$

where is evaluated in the polarization basis. After time $\tau _ { s }$ spin 1 is almost fully polarized (whereas spin 2 is now unpolarized) and, due to the environment, decays exponentially with rate of order Γ. To make the signal Eq. (31) easily measurable by conventional magnetometry, we can envisage a set-up consisting of a large array of identical, non-interacting pairs of dots as indicated in Fig. 1(b).

To further characterize the gate performance we follow Ref. [20] and calculate the gate fidelity $F = \overline { { \langle \psi _ { 0 } \vert \mathcal { U } ^ { \dagger } ( \tau _ { s } ) \rho ( t ) \vert \psi _ { 0 } \rangle } }$ , and the gate purity $P = \overline { { T r _ { s } [ \rho ( t ) ] ^ { 2 } } }$ , where the overbar means average over all initial system states $| \psi _ { 0 } \rangle$ <sup>.</sup> <sup>Expressing</sup> V <sup>in</sup> <sup>the</sup> <sup>multiplet</sup> <sup>basis</sup> <sup>and</sup> <sup>using</sup> trace and Hermiticity preservation we find

$$
F (t) = \frac {1}{6} + \frac {1}{2 4} \mathrm{Re} [ \sum_ {\alpha} \mathcal {V} _ {\alpha \alpha | \alpha \alpha} + \sum_ {\alpha , \beta} \mathcal {V} _ {\alpha \beta | \alpha \beta} e ^ {i \tau_ {s} (E _ {\alpha} ^ {m} - E _ {\beta} ^ {m})} ],\tag{32}
$$

$$
P (t) = \frac {1}{2 4} \sum_ {i, k, k ^ {\prime}} [ | \mathcal {V} _ {k k ^ {\prime} | i i} | ^ {2} + \sum_ {j} (\mathcal {V} _ {k k ^ {\prime} | i i} \mathcal {V} _ {k k ^ {\prime} | j j} ^ {*} + | \mathcal {V} _ {k k ^ {\prime} | i j} | ^ {2}) ]\tag{33}
$$

(in fact, the expression for $P ( t )$ holds in any basis). Evaluations of these functions for specific parameter values are shown in Fig. 2. For the parameters shown, the efect of the environment during the switching, i.e. $\displaystyle \mathcal { K } _ { 2 }$ in Eq. (10), is on the order of a few percent.

The dimensionless parameters used here would, for example, correspond to the following actual physical parameters: if an exchange constant $J _ { 0 } = 8 0 \mu \mathrm { e V } \approx 1 K$ were achievable, then pulse durations of $\tau _ { s } \approx 2 5 \mathrm { p s }$ and decoherence times of $\Gamma ^ { - 1 } \approx 1$ .4ns would be needed; such parameters, and perhaps much better, are apparently achievable in solid-state spin systems [19].

As a final application, we calculate the full XOR by applying the corresponding superoperators in the sequence associated with the one on the r.h.s. of Eq. (2). We use the same dimensionless parameters as above, and as before we then calculate the gate fidelity and the gate purity. Some representative results of this calculation are plotted in the inset of Fig. 2(b). To attain the $\pi / 2$ single-bit rotations of Eq. (2) in a $\tau _ { s }$ of 25ps would require a magnetic field $H \approx 0 . 6 T$ , which would be readily available in the solid state.

## IV. DISCUSSION

As a final remark about the decoherence problem, we would note that the parameters which we have chosen in the presentation of our numerical work, which we consider to be realistic for known nanoscale semiconductor materials, of course fall far, far lower than the 0.99999 levels which are presently considered desirable by quantum-computation theorists [1]; still, the achievement of even much lesser quality quantum gate operation would be a tremendous advance in the controlled, non-equilibrium time-evolution of solid-state spin systems, and could point the way to the devices which could ultimately be used in a quantum computer.

Considering the situation more broadly, we are quite aware that our proposal for quantum dot quantum computation relies on simultaneous further advances in the experimental techniques of semiconductor nano-fabrication, magnetic semiconductor synthesis, single electronics, and perhaps in scanning-probe techniques. Still, we also strongly feel that such proposals should be developed seriously, and taken seriously, in the present, since we believe that many aspects of the present proposal are testable in the not-too-distant future. This is particularly so for the demonstration of the swap action on an array of dot pairs. Such a demonstration would be of clear interest not only for quantum computation, but would also represent a new technique for exploring the non-equilibrium dynamics of spins in quantum dots.

To make the quantum-dot idea a complete proposal for quantum computation, we need to touch on several other important features of quantum-computer operation. As our guideline we follow the five requirements laid out by one of us [4]: 1) identification of well-defined qubits; 2) reliable state preparation; 3) low decoherence; 4) accurate quantum gate operations; 5) strong quantum measurements. Items 1, 3, and 4 have been very thoroughly considered above. We would now like to propose several possible means by which requirements 2 and 5, for state preparation (read in) and quantum measurement (read out), may be satisfied.

One scheme for qubit measurement which we suggest involves a switchable tunneling (T in Fig. 1(a)) into a supercooled paramagnetic dot (PM). When the measurement is to be performed, the electron tunnels (this will be real tunneling, not the virtual tunneling used for the swap gate above) into PM, nucleating from the metastable phase a ferromagnetic domain whose magnetization direction could be measured by conventional means. The orientation (θ, φ) of this magnetization vector is a “pointer” which measures the spin direction; it is a generalized measurement in which the measurement outcomes form a continuous set rather than having two discrete values. Such a case is covered by the general formalism of positiveoperator-valued (POV) measurements [21]. If there is no magnetic anisotropy in dot PM, then symmetry dictates that the positive measurement operators would be projectors into the over-complete set of spin-1/2 coherent states

$$
| \theta , \phi \rangle = \cos {\frac {\theta}{2}} | 0 \rangle + e ^ {i \phi} \sin {\frac {\theta}{2}} | 1 \rangle .\tag{34}
$$

A 75%-reliable measurement of spin-up and spin-down is obtained if the magnetization direction $( \theta , \phi )$ in the upper hemisphere is interpreted as up, and in the lower hemisphere as down; this is so simply because

$$
\frac {1}{2 \pi} \int_ {U} d \Omega | \langle 0 | \theta , \phi \rangle | ^ {2} = \frac {3}{4}.\tag{35}
$$

Here $^ { 6 } U ^ { 5 }$ denotes integration over the upper hemisphere and $2 \pi$ is the normalization constant for the coherent states.

Another approach which would potentially give a 100% reliable measurement requires a spin-dependent, switchable “spin valve” tunnel barrier (SV) of the type mentioned e.g. in Ref. [22]. When the measurement is to be performed, SV is switched so that only an up-spin electron passes into semiconductor dot 3. Then the presence of an electron on 3, measured by electrometer $\mathcal { E } _ { : }$ , would provide a measurement that the spin had been “up.” It is well known now how to create nanoscale single-electron electrometers with exquisite sensitivity (down to $1 0 ^ { - 8 }$ of one electron) [23].

We need only discuss the state-preparation problem briefly. For many applications in quantum computing, only a simple initial state, such as all spins up, needs to be created. Obviously, such a state is achieved if the system is cooled suficiently in a uniform applied magnetic field; acceptable spin polarizations of electron spins are readily achievable at cryogenic temperatures. If a specific arrangement of up and down spins were needed as the starting state, these could be created by a suitable application of the reverse of the spin-valve measurement apparatus.

## ACKNOWLEDGMENTS

We are grateful to D. D. Awschalom, H.-B. Braun, T. Brun and G. Burkard for useful discussions. This research was supported in part by the National Science Foundation under Grant No. PHY94-07194.

# APPENDIX A: COMPLETE POSITIVITY OF TIME-EVOLUTION<sup>SUPEROPERATOR</sup> V

Here we sketch the proof that the superoperator  in Eq. (10) is completely positive. We analyze the $\displaystyle \mathcal { K } _ { 3 }$ term first. We write

$$
e ^ {- \tau \mathcal {K} _ {3}} = \lim _ {N \to \infty} \left(1 - \frac {\tau}{N} \mathcal {K} _ {3}\right) ^ {N}.\tag{A1}
$$

It is suficient to prove that the infinitesimal operator is completely positive. It is straightforward to show, using Eq. (14), that

$$
\left(1 - \frac {\tau}{N} \mathcal {K} _ {3}\right) \rho = Z _ {3} ^ {\dagger} \cdot \rho Z _ {3} + O \left((\tau / N) ^ {2}\right).\tag{A2}
$$

Here $Z _ { 3 }$ is the seven-component vector operator

$$
Z _ {3} = \left(1 - \frac {\tau}{2 N} \sum_ {k = 1} ^ {6} B _ {k} ^ {\dagger} B _ {k}, \sqrt {\frac {\tau}{N}} \mathbf {B}\right),\tag{A3}
$$

where

$$
\mathbf {B} = (B _ {1}, \dots , B _ {6}) = \sqrt {2 \Gamma} (\vec {S} _ {1}, \vec {S} _ {2}).\tag{A4}
$$

Note that for this case $B _ { k } ^ { \dagger } = B _ { k }$ and $\begin{array} { r } { \sum _ { k = 1 } ^ { 6 } B _ { k } ^ { \dagger } B _ { k } = 3 \Gamma } \end{array}$

We recall that it is easy to prove that any superoperator $s$ of the form

$$
\mathcal {S} \rho = Z ^ {\dagger} \rho Z\tag{A5}
$$

as in the first term of Eq. (A2) is completely positive. Indeed, considering its action on any state vector of the system plus environment $\phi ,$ and taking a positive $\rho$ we get

$$
(\phi , \mathcal {S} \rho \phi) = (\phi , Z ^ {\dagger} \rho Z \phi) = (Z \phi , \rho Z \phi) \geq 0 \forall \phi .\tag{A6}
$$

Next we consider the $1 - \kappa _ { 2 }$ term of Eq. (10). Starting from Eq. (13), we put this term in a form corresponding to the completely-positive form Eq. (A5). We find

$$
(1 - \mathcal {K} _ {2}) \rho = Z _ {2} ^ {\dagger} \cdot \rho Z _ {2} + O \left(\lambda^ {4}, \tau_ {s} ^ {2}, (\lambda^ {2} \tau_ {s}) ^ {2}\right),\tag{A7}
$$

with $Z _ { 2 }$ being the vector operator

$$
Z _ {2} = (1 + Y ^ {\dagger} \cdot X ^ {\dagger}, X - Y ^ {\dagger})\tag{A8}
$$

with

$$
X = - (\Gamma + i \Delta) \left(\vec {S} _ {1} (\tau_ {s}), \vec {S} _ {2} (\tau_ {s})\right),\tag{A9}
$$

$$
Y = \int_ {0} ^ {\tau_ {s}} d \tau (\vec {S} _ {1} (\tau), \vec {S} _ {2} (\tau)).\tag{A10}
$$

So, from the same arguments as above, Eq. (A7) establishes that $1 - \kappa _ { 2 }$ is completely positive up to the order of accuracy discussed in the text.

Finally, we note that the other two general conditions for a physical superoperator also follow immediately: Trace preservation of  follows from the fact that a Liouvillian $\mathcal { L }$ appears to the left in the basic equations for $\displaystyle \mathcal { K } _ { 2 }$ , Eq. (11), and $\displaystyle \mathcal { K } _ { 3 }$ , Eq. (12). Trace preservation is also reflected in the fact that $Z _ { 2 } \cdot Z _ { 2 } ^ { \dagger } = 1$ and $Z _ { 3 } \cdot Z _ { 3 } ^ { \dagger } = 1$ to leading order. The form Eq. (A5) also obviously preserves Hermiticity of the density operator; this is also clear from the forms of Eqs. (13) and (14).

## REFERENCES

[1] S. Lloyd, Science 261 1589 (1993); C. H. Bennett, Physics Today 48 (10), 24 (1995); D. P. DiVincenzo, Science 269, 255 (1995); A. Barenco, Contemp. Phys. 37, 375 (1996).

[2] A. Barenco et al., Phys. Rev. A 52, 3457 (1995).

[3] P. Shor, Proc. 35th Annual Symposium on the Foundations of Computer Science (IEEE Press, Los Alamitos, 1994) p. 124.

[4] D. P. DiVincenzo, Report No. cond-mat/9612126, and in Mesoscopic Electron Transport, eds. L. Kouwenhoven, G. Schoen, and L. Sohn, NATO ASI series, to be published.

[5] J.-I. Cirac and P. Zoller, Phys. Rev. Lett. 74, 4091 (1995); J.-I. Cirac, T. Pellizzari, and P. Zoller, Science 273, 1207 (1996); C. Monroe et al., ibid. 75, 4714 (1995).

[6] Q. A. Turchette et al., Phys. Rev. Lett. 75, 4710 (1995).

[7] There has been some earlier speculation on how coupled quantum wells might be used in quantum-scale information processing: see R. Landauer, Science 272, 1914 (1996); A. Barenco et al., Phys. Rev. Lett. 74, 4083 (1995).

[8] C. Livermore et al., Science 274, 1332 (1996); F. R. Waugh et al., Phys. Rev. B 53, 1413 (1996); F. R. Waugh et al., Phys. Rev. Lett. 75, 705 (1995).

[9] N. W. Ashcroft and N. D. Mermin, Solid State Physics (Saunders, Philadelphia, 1976), Chap. 32.

[10] We can also envisage a superexchange mechanism to obtain a Heisenberg interaction by using three aligned quantum dots where the middle one has a higher energy level (by the amount ǫ) such that the electron spins of the outer two dots are also Heisenberg coupled, but now with the exchange coupling being $J = 4 t _ { 0 } ^ { 4 } ( 1 / \epsilon ^ { 2 } u + 1 / 2 \epsilon ^ { 3 } )$

[11] L.I. Glazman and K.A. Matveev, Sov. Phys. JETP 71, 1031 (1990); C.A. Staford and S. Das Sarma, Phys. Rev. Lett. 72, 3590 (1994).

[12] We assume for simplicity that the shape of the applied pulse is roughly rectangular with $J _ { 0 } \tau _ { s }$ constant.

[13] We note that explicitly $\begin{array} { r } { U _ { X O R } = \frac { 1 } { 2 } + S _ { 1 } ^ { z } + S _ { 2 } ^ { z } - 2 S _ { 1 } ^ { z } S _ { 2 } ^ { z } } \end{array}$ , with the corresponding XOR Hamiltonian, $\begin{array} { r } { \int _ { 0 } ^ { t } d t ^ { \prime } H _ { X O R } = \pi [ 1 - 2 S _ { 1 } ^ { z } - 2 S _ { 2 } ^ { z } + 4 S _ { 1 } ^ { z } S _ { 2 } ^ { z } ] / 4 } \end{array}$ . An alternative way to achieve the XOR operation is given by $U _ { X O R } = e ^ { i \pi S _ { 1 } ^ { z } } U _ { s w } ^ { - \frac { 1 } { 2 } } e ^ { - i \frac { \pi } { 2 } S _ { 1 } ^ { z } } U _ { s w } e ^ { i \frac { \pi } { 2 } S _ { 1 } ^ { z } } U _ { s w } ^ { \frac { 1 } { 2 } }$ . This form has the potential advantage that the single qubit operations involve only spin 1.

[14] A simple discussion of the consequences of decoherence models of this type may be found in I. L. Chuang, R. Laflamme, P. Shor, and W. H. Zurek, Science 270, 1633 (1995).

[15] For a microscopic discussion of dissipation in quantum dots concerning the charge degrees of freedom see, e.g., H. Schoeller and G. Sch¨on, Phys. Rev. B50, 18436 (1994); Physica B203, 423 (1994).

[16] E. Fick and G. Sauermann, The Quantum Statistics of Dynamic Processes, Springer Series in Solid-State Sciences 86 (Springer-Verlag, Berlin, 1990).

[17] E. B. Davies, Quantum Theory of Open Systems, Academic Press, New York (1976).

[18] M. Celio and D. Loss, Physica A 150, 769 (1989).

[19] S. A. Crooker et al., Phys. Rev. Lett. 77, 2814 (1996).

[20] J. F. Poyatos, J.-I. Cirac, and P. Zoller, Phys. Rev. Lett. 78, 390 (1997); Report No. quant-ph/9611013.

[21] A. Peres, Quantum Theory: Concepts and Methods (Kluwer, Dordrecht, 1993).

[22] G. Prinz, Physics Today 45 (4), 58 (1995).

[23] M. Devoret, D. Est\`eve, and Ch. Urbina, Nature 360, 547 (1992).

![[assets/figures/references/loss-divincenzo-1998/117732ca95b71204be3e16db2e8da171a7d2e0d1fd448c95560326cc908fd8ae.jpg]]  
FIG. 1. a) Schematic top view of two coupled quantum dots labeled 1 and 2, each containing one single excess electron (e) with spin $1 / 2 .$ The tunnel barrier between the dots can be raised or lowered by setting a gate voltage “high” (solid equipotential contour) or “low” (dashed equipotential contour). In the low state virtual tunneling (dotted line) produces a time-dependent Heisenberg exchange J(t). Hopping to an auxiliary ferromagnetic dot (FM) provides one method of performing single-qubit operations. Tunneling (T) to the paramagnetic dot (PM) can be used as a POV read out with 75% reliability; spin-dependent tunneling (through “spin valve” SV) into dot 3 can lead to spin measurement via an electrometer . b) Proposed experimental setup for initial test of swap-gate operation in an array of many non-interacting quantum-dot pairs. Left column of dots is initially unpolarized while right one is polarized; this state can be reversed by a swap operation (see Eq. (31)).

![[assets/figures/references/loss-divincenzo-1998/f315ec988498093e4023dff4a4023090b8cbc9ddf89d7f8db86c39e865d524cf.jpg]]  
FIG. 2. a) Swap polarization $\mathrm { s } \equiv 2 \langle S _ { 1 } ^ { z } ( t ) \rangle$ (see Eq. (31)), gate fidelity F, and gate purity P vs. Γt for “swap” using parameters $J _ { 0 } \tau _ { s } = \pi , \Gamma \tau _ { s } = 0 . 0 1 7$ , and $\Delta \tau _ { s } = - 0 . 0 1 4 5$ . b) The same for XOR obtained using the four operations in Eq. (2) (the final two single-spin operations done simultaneously). The same parameters and scales as in (a) are used; the pulse-to-pulse time is taken to be $3 \tau _ { s }$ . Γt is measured from the end of the fourth pulse.
