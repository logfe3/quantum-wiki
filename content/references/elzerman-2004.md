---
title: Single-shot read-out of an individual electron spin in a quantum dot
description: 首次实现量子点中单电子自旋的单发读出：能量选择性隧穿 + QPC 实时监测，定义了 spin-to-charge 读出的标准范式。
aliases:
 - elzerman-2004
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">首次实现量子点中单电子自旋的单发读出：能量选择性隧穿 + QPC 实时监测，定义了 spin-to-charge 读出的标准范式。</div>

> [!info] 文献信息
> J. M. Elzerman *et al.*, “Single-shot read-out of an individual electron spin in a quantum dot”, Nature **430**, 431 (2004).
> [arXiv:cond-mat/0411232](https://arxiv.org/abs/cond-mat/0411232) · [DOI:10.1038/nature02693](https://doi.org/10.1038/nature02693)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

J.M. Elzerman, R. Hanson, L.H. Willems van Beveren, B. Witkamp, L.M.K. Vandersypen, and L.P. Kouwenhoven

Kavli Institute of Nanoscience Delft and ERATO Mesoscopic Correlation Project, Delft University of Technology, PO Box 5046, 2600 GA Delft, The Netherlands

Spin is a fundamental property of all elementary particles. Classically it can be viewed as a tiny magnetic moment, but a measurement of an electron spin along the direction of an external magnetic field can have only two outcomes: parallel or anti-parallel to the field [1]. This discreteness reflects the quantum mechanical nature of spin. Ensembles of many spins have found diverse applications ranging from magnetic resonance imaging [2] to magneto-electronic devices [3], while individual spins are considered as carriers for quantum information. Read-out of single spin states has been achieved using optical techniques [4], and is within reach of magnetic resonance force microscopy [5]. However, electrical read-out of single spins [6-13] has so far remained elusive. Here, we demonstrate electrical single-shot measurement of the state of an individual electron spin in a semiconductor quantum dot [14]. We use spinto-charge conversion of a single electron confined in the dot, and detect the single-electron charge using a quantum point contact; the spin measurement visibility is ∼ 65%. Furthermore, we observe very long single-spin energy relaxation times (up to ∼ 0.85 ms at a magnetic field of 8 Tesla), which are encouraging for the use of electron spins as carriers of quantum information.

## 1 Measuring electron spin in quantum dots

In quantum dot devices, single electron charges are easily measured. Spin states in quantum dots, however, have only been studied by measuring the average signal from a large ensemble of electron spins [17-22]. In contrast, the experiment presented here aims at a single-shot measurement of the spin orientation (parallel or antiparallel to the field, denoted as spin-↑ and spin-↓, respectively) of a particular electron; only one copy of the electron is available, so no averaging is possible. The spin measurement relies on spin-to-charge conversion [20, 21] followed by charge measurement in a single-shot mode [15, 16]. Figure 1a schematically shows a single electron spin confined in a quantum dot (circle). A magnetic field is applied to split the spin-↑ and spin-↓ states by the Zeeman energy. The dot potential is then tuned such that if the electron has spin-↓ it will leave, whereas it will stay on the dot if it has spin-↑. The spin state has now been correlated with the charge state, and measurement of the charge on the dot will reveal the original spin state.

## 2 Implementation

This concept is implemented using a structure [23] (Fig. 1b) consisting of a quantum dot in close proximity to a quantum point contact (QPC). The quantum dot is used as a box to trap a single electron, and the QPC is operated as a charge detector in order to determine whether the dot contains an electron or not. The quantum dot is formed in the two-dimensional electron gas (2DEG) of a GaAs/AlGaAs heterostructure by applying negative voltages to the metal surface gates M, R, and T. This depletes the 2DEG below the gates and creates a potential minimum in the centre, that is, the dot (indicated by a dotted white circle). We tune the gate voltages such that the dot contains either zero or one electron (which we can control by the voltage applied to gate P). Furthermore, we make the tunnel barrier between gates R and T suficiently opaque that the dot is completely isolated from the drain contact on the right. The barrier to the reservoir on the left is set [24] to a tunnel rate ${ T \approx ( 0 . 0 5 \ \mathrm { m s ) ^ { - 1 } } }$ . When an electron tunnels on or of the dot, it changes the electrostatic potential in its vicinity, including the region of the nearby QPC (defined by R and Q). The QPC is set in the tunnelling regime, so that the current, $I _ { Q P C }$ , is very sensitive to electrostatic changes [25]. Recording changes in I<sub>QPC</sub> thus permits us to measure on a timescale of about 8 µs whether an electron resides on the dot or not [26]. In this way the QPC is used as a charge detector with a resolution much better than a single electron charge and a measurement timescale almost ten times shorter than 1/Γ.

The device is placed inside a dilution refrigerator, and is subject to a magnetic field of 10 T (unless noted otherwise) in the plane of the 2DEG. The measured Zeeman splitting in the dot [21], $\varDelta E z \approx \mathrm { 2 0 0 } \mu \mathrm { e V }$ , is larger than the thermal energy (25 µeV) but smaller than the orbital energy level spacing (1.1 meV) and the charging energy (2.5 meV).

a

![[assets/figures/references/elzerman-2004/0bdf8612d88b01d957dda1866c1da6a7f324954fed13ca68da08bfdd927d5bf6.jpg]]  
Fig. 1. Spin-to-charge conversion in a quantum dot coupled to a quantum point contact. (a) Principle of spin-to-charge conversion. The charge on the quantum dot, $Q _ { d o t } ,$ , remains constant if the electron spin is ↑, whereas a spin-↓ electron can escape, thereby changing $Q _ { d o t }$ . (b) Scanning electron micrograph of the metallic gates on the surface of a $\mathrm { G a A s } / \mathrm { A }$ l0<sub>.</sub>27Ga0<sub>.</sub>73As heterostructure containing a twodimensional electron gas (2DEG) 90 nm below the surface. The electron density is $2 . 9 \times 1 0 ^ { 1 5 } \ \mathrm { m ^ { - 2 } }$ . (Only the gates used in the present experiment are shown, the complete device is described in Ref. [23].) Electrical contact is made to the QPC source and drain and to the reservoir via Ohmic contacts. With a source-drain bias voltage of 1 mV, I is about 30 nA, and an individual electron tunnelling on or of the dot changes $I _ { Q P C }$ by $\sim 0 . 3$ nA. The QPC-current is sent to a room temperature current-to-voltage convertor, followed by a gain 1 isolation amplifier, an AC-coupled 40 kHz SRS650 low-pass filter, and is digitized at a rate of $2 . 2 \times 1 0 ^ { 6 }$ samples/s. With this arrangement, the step in $I _ { Q P C }$ resulting from an electron tunnelling is clearly larger than the rms noise level, provided it lasts at least 8 $\mu \mathrm { s } .$ A magnetic field, $B ,$ is applied in the plane of the 2DEG.

## 3 Two-level pulse technique

To test our single-spin measurement technique, we use an experimental procedure based on three stages: (1) empty the dot, (2) inject one electron with unknown spin, and (3) measure its spin state. The diferent stages are controlled by voltage pulses on gate $P \ ( { \mathrm { F i g . 2 a } } )$ , which shift the dot’s energy levels (Fig. 2c). Before the pulse the dot is empty, as both the spin-↑ and spin-↓ levels are above the Fermi energy of the reservoir, $E _ { F }$ . Then a voltage pulse pulls both levels below $E _ { F }$ . It is now energetically allowed for an electron to tunnel onto the dot, which will happen after a typical time $\sim T ^ { - 1 }$ The particular electron can have spin-↑ (shown in the lower diagram) or spin-↓ (upper diagram). (The tunnel rate for spin-↑ electrons is expected to be larger than that for spin-↓ electrons [27], i.e. ${ \cal T } _ { \uparrow } > { \cal T } _ { \downarrow }$ , but we do not assume this a priori.) During this stage of the pulse, lasting $t _ { w a i t }$ , the electron is trapped on the dot and Coulomb blockade prevents a second electron to be added. After $t _ { w a i t }$ the pulse is reduced, in order to position the energy levels in the read-out configuration. If the electron spin is ↑, its energy level is below $E _ { F }$ so the electron remains on the dot. If the spin is ↓, its energy level is above $E _ { F }$ , so the electron tunnels to the reservoir after a typical time ∼ $T _ { \perp } ^ { - 1 }$ . Now Coulomb blockade is lifted and an electron with spin-↑ can tunnel onto the dot. This occurs on a timescale ∼ $T _ { \uparrow } ^ { - 1 }$ (with ${ \boldsymbol { { T } } } = { \boldsymbol { { T } } } _ { \uparrow } + { \boldsymbol { { T } } } _ { \downarrow } )$ ). After $t _ { r e a d } .$ the pulse ends and the dot is emptied again.

![[assets/figures/references/elzerman-2004/ff8a5a851477099d0185ab00fd86dd06e71fe7d6ae5e93d460ec742f0eda5501.jpg]]  
Fig. 2. Two-level pulse technique used to inject a single electron and measure its spin orientation. (a) Shape of the voltage pulse applied to gate P. The pulse level is 10 mV during $t _ { w a i t }$ and 5 mV during $t _ { r e a d }$ (which is 0.5 ms for all measurements). (b) Schematic QPC pulse-response if the injected electron has spin-↑ (solid line) or spin-↓ (dotted line; the diference with the solid line is only seen during the read-out stage). Arrows indicate the moment an electron tunnels into or out of the quantum dot. (c) Schematic energy diagrams for spin-↑ $\left( E _ { \uparrow } \right)$ and spin-↓ $( E _ { \downarrow } )$ during the diferent stages of the pulse. Black vertical lines indicate the tunnel barriers. The tunnel rate between the dot and the QPC-drain on the right is set to zero. The rate between the dot and the reservoir on the left is tuned to a specific value, Γ. If the spin is ↑ at the start of the read-out stage, no change in the charge on the dot occurs during $t _ { r e a d }$ . In contrast, if the spin is ↓, the electron can escape and be replaced by a spin-↑ electron. This charge transition is detected in the QPC-current (dotted line inside red circle in (b)).

The expected QPC-response, $\varDelta I _ { Q P C }$ , to such a two-level pulse is the sum of two contributions (Fig. 2b). First, due to a capacitive coupling between pulse-gate and $\mathrm { Q P C } , \varDelta I _ { Q P C }$ will change proportionally to the pulse amplitude. Thus, $\varDelta I _ { Q P C }$ versus time resembles a two-level pulse. Second, $\varDelta I _ { Q P C }$ tracks the charge on the dot, i.e. it goes up whenever an electron tunnels of the dot, and it goes down by the same amount when an electron tunnels on the dot. Therefore, if the dot contains a spin-↓ electron at the start of the read-out stage, $\varDelta I _ { Q P C }$ should go up and then down again. We thus expect a characteristic step in $\varDelta I _ { Q P C }$ during $t _ { r e a d }$ for spin-↓ (dotted trace inside red circle). In contrast, $\varDelta I _ { Q P C }$ should be flat during $t _ { r e a d }$ for a spin-↑ electron. Measuring whether a step is present or absent during the read-out stage constitutes our spin measurement.

## 4 Tuning the quantum dot into the read-out configuration

To perform spin read-out, $V _ { M }$ has to be fine-tuned so that the position of the energy levels with respect to $E _ { F }$ is as shown in Fig. 2c. To find the correct settings, we apply a two-level voltage pulse and measure the $\mathrm { Q P C }$ -response for increasingly negative values of $V _ { M } \ ( \mathrm { F i g . \ 3 a } )$ . Four diferent regions in $V _ { M }$ can be identified (separated by white dotted lines), with qualitatively diferent QPC-responses. The shape of the typical QPC-response in each of the four regions (Fig. 3b) allows us to infer the position of $E _ { \uparrow }$ and $E _ { \downarrow }$ with respect to $E _ { F }$ during all stages of the pulse (Fig. 3c).

In the top region, the QPC-response just mimics the applied two-level pulse, indicating that here the charge on the dot remains constant throughout the pulse. This implies that $E _ { \uparrow }$ remains below $E _ { F }$ for all stages of the pulse, thus the dot remains occupied with one electron. In the second region from the top, tunnelling occurs, as seen from the extra steps in $\varDelta I _ { Q P C }$ . The dot is empty before the pulse, then an electron is injected during $t _ { w a i t }$ , which escapes after the pulse. This corresponds to an energy level diagram similar to before, but with $E _ { \uparrow }$ and $E _ { \downarrow }$ shifted up due to the more negative value of $V _ { M }$ in this region. In the third region from the top, an electron again tunnels on the dot during $t _ { w a i t }$ , but now it can escape already during $t _ { r e a d } .$ , irrespective of its spin. Finally, in the bottom region no electron-tunneling is seen, implying that the dot remains empty throughout the pulse.

Since we know the shift in $V _ { M }$ corresponding to shifting the energy levels by $\varDelta E _ { Z }$ [24], we can set $V _ { M }$ to the optimum position for the spin read-out experiment (indicated by the arrow). For this setting, the energy levels are as shown in Fig. 2c, i.e. $E _ { F }$ is approximately in the middle between $E _ { \uparrow }$ and $E _ { \downarrow }$ during the read-out stage.

![[assets/figures/references/elzerman-2004/1ef39aa086037405b7d11922cc007a7a835fff4a4ccede0c5d727dbbc179985b.jpg]]

b  
c  
![[assets/figures/references/elzerman-2004/0171ffa7d982c6850a5b386fa250652841f7a8306c73f2e506d1c49ea84aa0ba.jpg]]  
Fig. 3. Tuning the quantum dot into the spin read-out configuration. We apply a two-stage voltage pulse as in Fig. 2a $( t _ { w a i t } = 0 . 3 \mathrm { m s } , t _ { r e a d } = 0 . 5$ ms), and measure the QPC-response for increasingly negative values of $V _ { M }$ . (a) QPC-response (in colourscale) versus $V _ { M }$ . Four diferent regions in $V _ { M }$ can be identified (separated by white dotted lines), with qualitatively diferent QPC-responses. (b) Typical QPC-response in each of the four regions. This behaviour can be understood from the energy levels during all stages of the pulse. (c) Schematic energy diagrams showing $E _ { \uparrow }$ and $E _ { \downarrow }$ with respect to $E _ { F }$ before and after the pulse (blue), during $t _ { w a i t }$ (orange) and during t (purple), for four values of $V _ { M }$ . For the actual spin read-out experiment, $V _ { M }$ is set to the optimum position (indicated by the arrow in a).

## 5 Single-shot read-out of one electron spin

Figure 4a shows typical experimental traces of the pulse-response recorded after proper tuning of the DC gate voltages (see Fig. 3). We emphasize that each trace involves injecting one particular electron on the dot and subsequently measuring its spin state. Each trace is therefore a single-shot measurement. The traces we obtain fall into two diferent classes; most traces qualitatively resemble the one in the top panel of Fig. 4a, some resemble the one in the bottom panel. These two typical traces indeed correspond to the signals expected for a spin-↑ and a spin-↓ electron (Fig. 2b), a strong indication that the electron in the top panel of Fig. 4a was spin-↑ and in the bottom panel spin-↓. The distinct signature of the two types of responses in $\varDelta I _ { Q P C }$ permits a simple criterion for identifying the spin [28]: if $\varDelta I _ { Q P C }$ goes above the threshold value (red line in Fig. 4a and chosen as explained below), we declare the electron ‘spin-down’; otherwise we declare it ‘spin-up’. Fig. 4b shows the read-out section of twenty more ‘spin-down’ traces, to illustrate the stochastic nature of the tunnel events.

a  
![[assets/figures/references/elzerman-2004/d10944351007037bc42367a18c664f18ebb32ec047212e2931369e9854a1348f.jpg]]

b  
![[assets/figures/references/elzerman-2004/2bf68a41d3ee9830543603105a997fbc6211056a6d0d5a2b8d3919ecd969985b.jpg]]

![[assets/figures/references/elzerman-2004/37dac3aca5a77bc59161210fcf9e97e6f0f9f74fb537743bfc91947af3f80fc1.jpg]]

c  
![[assets/figures/references/elzerman-2004/d035f2c8493ddd4958aeab4db23b144c79ce647f8b6dca08547c6ce7a482f9b3.jpg]]

![[assets/figures/references/elzerman-2004/109aa260fd9619554bdae9fc09c3d9f9ddda0f50f3efbf27f8ad1af994561149.jpg]]  
Fig. 4. Single-shot read-out of one electron spin. (a) Time-resolved QPC measurements. Top panel: an electron injected during $t _ { w a i t }$ is declared ‘spin-up’ during $t _ { r e a d }$ . Bottom panel: the electron is declared ‘spin-down’. (b) Examples of ‘spindown’ traces (for $t _ { w a i t } = 0 . 1 ~ \mathrm { m s } )$ . Only the read-out segment is shown, and traces are ofset for clarity. The time when $\varDelta I _ { Q P C }$ first crosses the threshold, $t _ { d e t e c t } ,$ is recorded to make the histogram in Fig. 7a. (c) Fraction of ‘spin-down’ traces versus $t _ { w a i t } ,$ out of $6 2 5$ traces for each waiting time. Open circle: spin-down fraction using modified pulse shape (d). Red solid line: exponential fit to the data. Inset: $T _ { 1 }$ versus B. (d) Typical QPC-signal for a ‘reversed’ pulse, with the same amplitudes as in Fig. 2a, but the order of the two stages reversed, so that only a spin-↑ electron can be injected. The fraction of traces nevertheless declared ‘spin-down’ gives an independent measure of the ‘dark count’ probability. This fraction is plotted as the open circle in (c) and is used in the exponential fit with an associated value of $t _ { w a i t }$ $= 1 0$ ms $\left( \mathrm { i . e . } > > T _ { 1 } \right)$ . The blue threshold is used in ${ \mathrm { F i g . } }$ 7b

a  
![[assets/figures/references/elzerman-2004/aa280ea55caf687cfb155ccda239afb7cd916d4cbf374cc8ec8bbfc6e9eac06d.jpg]]

![[assets/figures/references/elzerman-2004/af0c1871375f1ad32d18b088199187fd7957b88759c72bb2c3f336d3f6b512d3.jpg]]  
Fig. 5. Measurement of the spin-relaxation time as in Fig. 4c, but at diferent magnetic fields. Averaging the results of an exponential fit (as shown) over three similar measurements yields (a), $T _ { 1 } ~ = ~ ( 0 . 8 5 \pm 0 . 1 1 )$ ms at $^ \textrm { \scriptsize 8  T }$ and (b), $T _ { 1 } =$ $( 0 . 1 2 \pm 0 . 0 3 )$ ms at 14 T.

The random injection of spin-↑ and spin-↓ electrons prevents us from checking the outcome of any individual measurement. Therefore, in order to further establish the correspondence between the actual spin state and the outcome of our spin measurement, we change the probability to have a spin-↓ at the beginning of the read-out stage, and compare this with the fraction of traces in which the electron is declared ‘spin-down’. As $t _ { w a i t }$ is increased, the time between injection and read-out, t<sub>hold</sub>, will vary accordingly $( t _ { h o l d } \approx t _ { w a i t } )$ The probability for the spin to be ↓ at the start of $t _ { r e a d }$ will thus decay exponentially to zero, since electrons in the excited spin state will relax to the ground state $\left( k _ { B } T < < \Delta E _ { Z } \right)$ . For a set of 15 values of $t _ { w a i t }$ we take 625 traces for each $t _ { w a i t }$ , and count the fraction of traces in which the electron is declared ‘spin-down’ (Fig. 4c). The fact that the expected exponential decay is clearly reflected in the data confirms the validity of the spin read-out procedure.

We extract a single-spin energy relaxation time, $T _ { 1 }$ , from fitting the datapoints in Fig. 4c (and two other similar measurements) to $\alpha { + } C \exp ( - t _ { w a i t } / T _ { 1 } )$ and obtain an average value of $T _ { 1 } \approx ( 0 . 5 5 \pm 0 . 0 7 )$ ms at 10 Tesla. This is an order of magnitude longer than the lower bound on $T _ { 1 }$ established earlier [21], and clearly longer than the time needed for the spin measurement (of order $1 / T _ { \downarrow } \approx 0 . 1 1$ ms). A similar experiment at 8 Tesla gives $T _ { 1 } \approx ( 0 . 8 5 \pm 0 . 1 1 )$ ms and at 14 Tesla we find $T _ { 1 } \approx ( 0 . 1 2 \pm 0 . 0 3 )$ ms (Fig. 5). More experiments are needed in order to test the theoretical prediction that relaxation at high magnetic fields is dominated by spin-orbit interactions [29, 30, 31], with smaller contributions resulting from hyperfine interactions with the nuclear spins [29, 32] (cotunnelling is insignificant given the very small tunnel rates). We note that the obtained values for $T _ { 1 }$ refer to our entire device under active operation: i.e. a single spin in a quantum dot subject to continuous charge detection by a $\mathrm { Q P C }$

![[assets/figures/references/elzerman-2004/7d82967984285774d4eaabf195ed898534c5a41d656f6585ee5f086fe47cf97a.jpg]]

b  
![[assets/figures/references/elzerman-2004/e7e4fb2cd419533b5c0f537fcb735a54ca724ca95f358925e9fe41839e496e38.jpg]]  
Fig. 6. Setting the injection threshold. (a) Example of QPC-signal for the shortest waiting time used (0.1 ms). The blue horizontal line indicates the injection threshold. Injection is declared successful if the QPC-signal is below the injection threshold for a part or all of the last 45 µs before the end of the injection stage $( t _ { w a i t } )$ . Traces in which injection was not successful, i.e. no electron was injected during $t _ { w a i t } .$ are disregarded. (b) Fraction of traces in which injection was successful, out of a total of 625 taken for each waiting time. The threshold chosen for analysing all data is indicated by the vertical blue line.

## 6 Measurement fidelity

For applications in quantum information processing it is important to know the accuracy, or fidelity, of the single-shot spin read-out. The measurement fidelity is characterised by two parameters, α and $\beta$ (inset to Fig. 7a), which we now determine for the data taken at 10 T.

The parameter α corresponds to the probability that the QPC-current exceeds the threshold even though the electron was actually $\operatorname { s p i n - } \uparrow$ , for instance due to thermally activated tunnelling or electrical noise (similar to ‘dark counts’ in a photon detector). The combined probability for such processes is given by the saturation value of the exponential fit in Fig. 4c, $\alpha ,$ which depends on the value of the threshold current. We analyse the data in Fig. 4c using diferent thresholds, and plot α in Fig. 7b.

The parameter $\beta$ corresponds to the probability that the QPC-current stays below the threshold even though the electron was actually spin-↓ at the start of the read-out stage. Unlike $\alpha , \beta$ cannot be extracted directly from the exponential fit (note that the fit parameter $C = p ( 1 - \alpha - \beta )$ contains two unknowns: $p = { \varGamma _ { \downarrow } } / { ( \varGamma _ { \uparrow } + \varGamma _ { \downarrow } ) }$ and β). We therefore estimate $\beta$ by analysing the two processes that contribute to it. First, a spin-↓ electron can relax to spin-↑ before spin-to-charge conversion takes place. This occurs with probability $\beta _ { 1 } = 1 / ( 1 + T _ { 1 } T _ { \downarrow } )$ ). From a histogram (Fig. 7a) of the actual detection time, $t _ { d e t e c t }$ (see Fig. 4b), we find $T _ { \perp } ^ { - 1 } \approx 0 . { \dot { 1 } } 1$ ms, yielding $\beta _ { 1 } \approx 0 . 1 7$ . Second, if the spin-↓ electron does tunnel of the dot but is replaced by a spin-↑ electron within about $8 ~ \mu \mathrm { s }$ , the resulting QPC-step is too small to be detected. The probability that a step is missed, $\beta _ { 2 } .$ , depends on the value of the threshold. It can be determined by applying a modified (‘reversed’) pulse (Fig. 4d). For such a pulse, we know that in each trace an electron is injected in the dot, so there should always be a step at the start of the pulse. The fraction of traces in which this step is nevertheless missed, i.e. $\varDelta I _ { Q P C }$ stays below the threshold (blue line in Fig. 4d), gives $\beta _ { 2 }$ . We plot $1 - \beta _ { 2 }$ in Fig. 7b (open circles). The resulting total fidelity for spin-↓ is given by $1 - \beta \approx ( 1 - \beta _ { 1 } ) ( 1 - \beta _ { 2 } ) + ( \alpha \beta _ { 1 } )$ . The last term accounts for the case when a spin-↓ electron is flipped to spin-↑, but there is nevertheless a step in $\varDelta I _ { Q P C }$ due to the dark-count mechanism [33]. In Fig. 7b we also plot the extracted value of $1 - \beta$ as a function of the threshold.

![[assets/figures/references/elzerman-2004/ee27a9762cfdda3a63fe4715f76b7acd9873127157c6f8af2ef6ed1b0dba3506.jpg]]

b  
![[assets/figures/references/elzerman-2004/399075c6cb692207dae9df16126b040168c53219e05ffbf9116d1b36ec36c515.jpg]]  
Fig. 7. Measurement fidelity. (a) Histogram showing the distribution of detection times, $t _ { d e t e c t } ,$ in the read-out stage (see Fig. 4b for a definition of $t _ { d e t e c t } )$ . The exponential decay is due to spin-↓ electrons tunnelling out of the dot $\left( \mathrm { r a t e } = { \cal T } _ { \downarrow } \right)$ and due to spin flips during the read-out stage $\mathrm { ( r a t e = 1 / } T _ { 1 } )$ . Solid line: exponential fit with a decay time $( { T _ { \downarrow } + 1 / T _ { 1 } } ) ^ { - 1 }$ of 0.09 ms. Given that $T _ { 1 } = 0 . 5 5$ ms, this yields $T _ { \iota } ^ { - 1 } \approx 0 . 1 1$ ms. Inset: fidelity parameters. A spin-↑ electron is declared ‘up’ or ‘down with probability $1 - \alpha$ or α, respectively. A spin-↓ electron is declared ‘down’ (d) or $\mathrm { { ^ 6 } u p ^ { \prime } \ u p } ( \mathrm { u } )$ with probability $1 - \beta$ or $\beta ,$ , respectively. (b) Filled dark circles represent $\alpha ,$ obtained from the saturation value of exponential fits as in Fig. 4c for diferent values of the read-out threshold. $\mathrm { A }$ current of 0.54 nA (0.91 nA) corresponds to the average value of $\varDelta I _ { Q P C }$ when the dot is occupied (empty) during $t _ { r e a d }$ . Open circles: measured fraction of ‘reverse-pulse’ traces in which $\varDelta I _ { Q P C }$ crosses the injection threshold (blue line in Fig. 4d). This fraction approximates $1 - \beta _ { 2 } ,$ , where $\beta _ { 2 }$ is the probability of identifying a spin-↓ electron as ‘spin-up’ due to the finite bandwidth of the measurement setup. Red circles: total fidelity for the spin-↓ state, $1 - \beta ,$ calculated using $\beta _ { 1 } = 0 . 1 7$ . The vertical red line indicates the threshold for which the visibility $1 - \alpha - \beta$ (diference between filled circles and open squares) is maximal. This threshold value of 0.73 nA is used in the analysis of Fig. 4.

We now choose the optimal value of the threshold as the one for which the visibility $1 - \alpha - \beta$ is maximal (red vertical line in Fig. 7b). For this setting, $\alpha \approx 0 . 0 7 , \beta _ { 1 } \approx 0 . 1 7 , \beta _ { 2 } \approx 0 . 1 5$ , so the measurement fidelity for the spin-↑ and the spin-↓ state $\mathrm { i s \sim 0 . 9 3 }$ and $\sim 0 . 7 2$ respectively. The measurement visibility in a single-shot measurement is thus at present 65%.

Significant improvements in the spin measurement visibility can be made by lowering the electron temperature (smaller α) and especially by making the charge measurement faster (smaller $\beta )$ . Already, the demonstration of singleshot spin read-out and the observation of $T _ { 1 }$ of order 1 ms are encouraging results for the use of electron spins as quantum bits.

We thank D. P. DiVincenzo, H. A. Engel, T. Fujisawa, V. Golovach, Y. Hirayama, D. Loss, T. Saku, R. Schouten, and S. Tarucha for technical support and helpful discussions. This work was supported by a Specially Promoted Research Grant-in-Aid from the Japanese Ministry of Education, the DARPA-QUIST program, the ONR, the EU-RTN network on spintronics, and the Dutch Organisation for Fundamental Research on Matter (FOM).

## References

1. Sakurai, J. J. Modern Quantum Mechanics. Addison-Wesley (Reading MA, USA, 1994).

2. Wehrli, F. W. The origins and nature of nuclear magnetic resonance imaging. Physics Today 6, 34 (1992).

3. Wolf, S. A. et al. Spintronics: a spin-based electronics vision for the future. Science 294, 1488-1495 (2001).

4. Blatt, R. and Zoller, P. Quantum Jumps. Eur. J. Phys. 9, 250-279 (1988).

5. Mamin, H. J., Budakian, R., Chui, B. W. and Rugar, D. Detection and manipulation of statistical polarization in small spin ensembles. Phys. Rev. Lett. 91, 207604 (2003).

6. Loss, D. and DiVincenzo, D. P. Quantum computation with quantum dots. Phys. Rev. A 57, 120-126 (1998).

7. Kane, B. E. A silicon-based nuclear spin quantum computer. Nature 393, 133- 137 (1998).

8. Vandersypen, L. M. K. et al. Quantum computing with electron spins in quantum dots, in Quantum Computing and Quantum Bits in Mesoscopic Systems, Kluwer Academic/Plenum Publishers (New York, 2003). See also http://xxx.lanl.gov/abs/quant-ph/0207059 (2002).

9. Xiao, M., Martin, I. and Jiang, H. W. Probing the spin state of a single electron trap by random telegraph signal. Phys. Rev. Lett. 91, 078301 (2003).

10. Friesen, M., Tahan, C., Joynt, R., and Eriksson, M. A. Spin readout and initialization in a semiconductor quantum dot. Phys. Rev. Lett. 92, 037901 (2004).

11. Engel, H. et al. Measurement eficiency and n-shot read out of spin qubits. http://xxx.lanl.gov/abs/cond-mat/0309023 (2003).

12. Ionicioiu, R. and Popescu, A. E. Single spin measurement using spin-orbita entanglement. http://xxx.lanl.gov/abs/quant-ph/0310047 (2003).

13. Greentree, A. D., Hamilton, A. R., Hollenberg, L. C. L. and Clark, R. G. Electrical readout of a spin qubit without double occupancy. http://xxx.lanl.gov/abs/cond-mat/0403449 (2004).

14. Kouwenhoven, L. P., Austing, D. G. and Tarucha, S. Few-electron quantum dots. Rep. Prog. Phys. 64, 701-736 (2001).

15. Lu, W., Ji, Z., Pfeifer, L., West, K. W. and Rimberg, A. J. Real-time detection of electron tunnelling in a quantum dot. Nature 423, 422 (2003).

16. Fujisawa, T., Hayashi, T., Hirayama, Y., Cheong, H. D. and Jeong, Y. H. Electron counting of single-electron tunnelling current. Appl. Phys. Lett. 84, 2343 (2004).

17. Weis, J., Haug, R. J., von Klitzing, K. and Ploog, K. Lateral transport through a single quantum dot with a magnetic field parallel to the current. Surf. Sci. 305, 664 (1994).

18. Kouwenhoven, L. P. et al. Excitation spectra of circular, few-electron quantum dots. Science 278, 1788 (1997).

19. Ciorga, M. et al. Readout of a single electron spin based quantum bit by current detection. Physica E 11, 35 (2001).

20. Fujisawa, T., Austing, D. G., Tokura, Y., Hirayama, Y. and Tarucha, S. Allowed and forbidden transitions in artificial hydrogen and helium atoms. Nature 419, 278-281 (2002).

21. Hanson, R. et al. Zeeman energy and spin relaxation in a one-electron quantum dot. Phys. Rev. Lett. 91, 196802 (2003).

22. Folk, J. A., Potok, R. M., Marcus, C. M. and Umansky, V. A gate-controlled bidirectional spin filter using quantum coherence. Science 299, 679 (2003).

23. Elzerman, J. M. et al. Few-electron quantum dot circuit with integrated charge read out. Phys. Rev. B 67, R161308 (2003).

24. Elzerman, J. M., Hanson, R., Willems van Beveren, L. H., Vandersypen, L. M. K. and Kouwenhoven, L. P. Excited-state spectroscopy on a nearly-closed quantum dot via charge detection. Appl. Phys. Lett. 84, 4617-4619 (2004).

25. Field, M. et al. Measurements of Coulomb blockade with a noninvasive voltage probe. Phys. Rev. Lett. 70, 1311 (1993).

26. Vandersypen, L. M. K., Elzerman, J. M., Schouten, R. N., Willems van Beveren, L. H., Hanson, R. and Kouwenhoven, L. P. Real-time detection of single electron tunneling using a quantum point contact, Appl. Phys. Lett., in the press (2004). See also http://xxx.lanl.gov/abs/cond-mat/0407121 (2004).

27. Hanson, R. et al. Semiconductor few-electron quantum dot operated as a bipolar spin filter. Phys. Rev. B, in the press (2004). See also http://xxx.lanl.gov/abs/cond-mat/011414 (2003)

28. The automated data analysis procedure first corrects for the ofset of each trace. This ofset, resulting from low-frequency interference signals and charge switches, is found by making a histogram of the QPC current during the readout stage of a particular trace. The histogram typically displays a peak due to fluctuations around the average value corresponding to an occupied dot. The center of a gaussian fit to the histogram gives the ofset. Then each trace is checked to make sure that an electron was injected during the injection stage,

by evaluating if the signal goes below the injection threshold (blue horizonta line in Fig. 6a). If not, the trace is disregarded. Finally, to determine if a trace corresponds to ‘spin-up’ or ‘spin-down’, we disregard all points that lie below the previous point (since these could correspond to points on the falling pulse flank at the end of the injection stage), and check if any of the remaining points are above the threshold.

29. Khaetskii, A. V. and Nazarov, Y. V. Spin-flip transitions between Zeeman sublevels in semiconductor quantum dots. Phys. Rev. B 64, 125316 (2001).

30. Golovach, V. N., Khaetskii, A. and Loss, D. Phonon-induced decay of the electron spin in quantum dots. http://xxx.lanl.gov/abs/cond-mat/0310655 (2003).

31. Woods, L. M., Reinecke, T. L. and Lyanda-Geller, Y. Spin relaxation in quantum dots. Phys. Rev. B 66, 161318(R) (2002).

32. Erlingsson, S. I. and Nazarov, Y. V. Hyperfine-mediated transitions between a Zeeman split doublet in GaAs quantum dots: The role of the internal field. Phys. Rev. B 66, 155327 (2002).

33. Let us assume there is a spin-↓ electron on the dot at the start of the read-out stage. The probability that the ↓-electron tunnels out (i.e. that it does not relax to spin-↑) is given by $1 - \beta _ { 1 }$ . The probability that this tunnel event is detected (i.e. is not too fast) is given by $1 - \beta _ { 2 }$ . Therefore, the probability that a spin-↓ electron tunnels out and is detected, is $( 1 - \beta _ { 1 } ) ( 1 - \beta _ { 2 } )$ . In addition, there is the possibility that the ↓-electron relaxes, with probability $\beta _ { 1 }$ , but a step in the QPC signal is nevertheless detected, with probability $\alpha ,$ due to the ‘dark count mechanism. Therefore, the total probability that a spin-↓ electron is declared ‘spin-down’ is given by $( 1 - \beta _ { 1 } ) ( 1 - \beta _ { 2 } ) + ( \alpha \beta _ { 1 } )$ approximately.
