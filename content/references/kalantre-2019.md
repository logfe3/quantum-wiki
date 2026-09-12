---
title: Machine learning techniques for state recognition and auto-tuning in quantum dots
description: 把稳定图识别与自动调点形式化为机器学习问题的代表作：模拟训练数据 + 神经网络识别蜂窝图的流水线。
aliases:
 - kalantre-2019
tags:
 - 参考文献
date: 2026-09-12
---

<div class="entry-lead">把稳定图识别与自动调点形式化为机器学习问题的代表作：模拟训练数据 + 神经网络识别蜂窝图的流水线。</div>

> [!info] 文献信息
> S. S. Kalantre *et al.*, “Machine learning techniques for state recognition and auto-tuning in quantum dots”, npj Quantum Information **5**, 21 (2019).
> [arXiv:1712.04914](https://arxiv.org/abs/1712.04914) · [DOI:10.1038/s41534-018-0118-7](https://doi.org/10.1038/s41534-018-0118-7)
> 原文为 arXiv 预印本版本的机器可读转换，公式与图注以原文为准；本页仅作站内索引与全文查阅，引用请以正式出版物为准。

## 全文

Sandesh S. Kalantre,1, 2, 3, ∗ Justyna P. Zwolak,2, 3 Stephen Ragole,2, 4 Xingyao Wu,2, 4 Neil M. Zimmerman,3 M. D. Stewart, Jr.,3 and Jacob M. Taylor2, 3, 4, 5, †

1Department of Physics, Indian Institute of Technology - Bombay, Mumbai, 400076, India 2Joint Center for Quantum Information and Computer Science, University of Maryland, College Park, MD, 20742, USA 3National Institute of Standards and Technology, Gaithersburg, MD, 20899, USA 4Joint Quantum Institute, University of Maryland, College Park, MD, 20742, USA 5Research Center for Advanced Science and Technology, University of Tokyo, Meguro-ku, Tokyo 153-8904, Japan (Dated: February 16, 2018)

Recent progress in building large-scale quantum devices for exploring quantum computing and simulation paradigms has relied upon effective tools for achieving and maintaining good experimental parameters, i.e., tuning up devices. In many cases, including in quantum-dot based architectures, the parameter space grows substantially with the number of qubits, and may become a limit to scalability. Fortunately, machine learning techniques for pattern recognition and image classification using so-called deep neural networks have shown surprising successes for computer-aided understanding of complex systems. In this work, we use deep and convolutional neural networks to characterize states and charge configurations of semiconductor quantum dot arrays when one can only measure a current-voltage characteristic of transport through such a device. For simplicity, we model a semiconductor nanowire connected to leads and capacitively coupled to depletion gates using the Thomas-Fermi approximation and Coulomb blockade physics. We then generate labeled training data for the neural networks, and find at least 90 % accuracy for charge and state identification for single and double dots purely from the dependence of the nanowire’s conductance upon gate voltages. Using these characterization networks, we can then optimize the parameter space to achieve a desired configuration of the array, a technique we call ‘auto-tuning’. Finally, we show how such techniques can be implemented in an experimental setting by applying our approach to an experimental data set, and outline further problems in this domain, from using charge sensing data to extensions to full one and two-dimensional arrays, that can be tackled with machine learning.

Keywords: semiconductor quantum computation; quantum dots; machine learning; convolutional neural networks; auto-tuning

# I. INTRODUCTION

Tremendous progress in realizing high-quality quantum bits at the few qubit level has opened a window for new challenges in quantum computing: developing the necessary classical control techniques to scale systems to larger sizes. A variety of approaches [1–9] rely upon tuning individual quantum bits into the proper regime of operation. In semiconductor quantum computing, devices now have tens of individual electrostatic and dynamical gate [4, 10–17] voltages which must be carefully set to isolate the system to the single electron regime and to realize good qubit performance. A similar problem arises in the control of ion positions in segmented ion traps [18–21]. Preliminary work to automate the laborious task of tuning such systems has primarily focused on fine tuning of analog parameters [22, 23] using techniques from regression analysis and quantum control theory. At the same time, tremendous progress in automated classification suggests such techniques may be used [24–26] to bootstrap the experimental effort from a de novo device to a fully tuned device, replacing the gross-scale heuristics, developed by experimentalists to deal with tuning of parameters particular to experiments.

In this work, we specifically consider the control problems associated with electrostatically defined quantum dots (QDs) present at the interface of semiconductor devices [27]. Each quantum dot is defined using voltages applied to metallic gate electrodes acting as depletion gates which confine a discrete number of electrons to a set of islands. We use machine learning (ML) and numerical optimization techniques to efficiently explore the multidimensional gate voltage space to find a desired island configuration, a technique we call ‘auto-tuning’. Toward this end, we use ML to recognize the number of dots generated in the experiment.

In order to improve on the accuracy, we work with convolutional neural networks (CNNs) [25, 28]. CNNs are a class of artificial neural networks designed for efficient pattern recognition and classification of images. When trained on high quality simulated data, CNNs can learn to identify the number of QDs. Once the neural network is trained to recognize dot configurations, we can recast the problem of finding a required configuration as an optimization problem. As a result, a neural network coupled to a optimization routine presents itself as a solution for determining a suitable set of gate voltages.

Training of a machine learning algorithm necessitates the existence of a physical model to qualitatively mimic experimental output and provide a large, fully labeled data set. In this paper, we develop a model for transport in gate-defined quantum dots and train neural networks to identify number of islands under a given gate voltage configuration. We also describe the auto-tuning problem in the double-dot to single dot transition regime. Finally, we discuss the performance of the recognition and autotuning for both simulated and experimental data. We report over 90 % accuracy for with very simple neural network architectures on all these problems, where accuracy is defined as the fraction of times when the predicted configuration agreed with the pre-assigned label.

This paper is organized as follows. In Section II, we motivate the problems associated with tuning of quantum dot arrays and their relation to ML problems. In Section III, we present the physical setup for our devices and the model for transport calculations. In Section IV, we start with a toy example of using a neural network to learn Coulomb blockade and identify charge states of a single quantum dot. The charge and state identification problem for a double dot and its solution using CNNs is presented in Section V. In Section VI, we define the autotuning problem and its resolution. In Section VII, we test our trained CNN for state identification and autotuning on experimental data. In Section VIII, we describe how the machine learning techniques described in this work can be incorporated in an experimental setting and speculate on further problems that can be potentially solved using neural networks for quantum dots. Finally, we present our conclusions in Section IX.

# II. MOTIVATION

Electrostatically defined quantum dots offer a means of localizing electrons in a solid-state environment. A generic device, consisting of a linear array of dots in a two-dimensional electron gas (2DEG), is presented in Fig. 1(a). Gate electrodes on top are used to confine electron density to certain regions, forming islands of electrons. The ends of the linear array are connected to reservoirs of electrons, i.e., contacts, which are assumed to be kept at a fixed chemical potential.

By applying suitable voltages to the gates, it is possible to define a one dimensional potential profile $V ( x )$ . Alternating regions of electron density islands and barriers are formed, depending on the relation between the chemical potential and the electrostatic potential $V ( x )$ (Fig. 1(b)). Barrier gates are used to control tunneling between the islands while the plunger gates control the depths of the potential wells.

A fixed number of islands requires a specific number of gates. Since the voltage on each gate can be set independently, the state space for the gate voltages is $\mathbb { R } ^ { m }$ , with m denoting the number of gates. By suitable choices of the gate voltages, it is possible to have a certain number of islands, each with a certain number of charges along the nanowire. We refer to the number of islands as the state. Though having a large number of gates implies a higher degree of control, it also presents a challenge in determining appropriate values for the gate voltages, given a required configuration [4].

Standard techniques of assigning voltages to the gates rely on heuristics and experimental intuition. Such techniques, however, present practical difficulties in implementation when the number of gates increases beyond a modest number. Hence, it is desirable to have a technique, given a desired configuration of the device, to determine an appropriate voltage set without the need for actual intervention by an experimenter.

Machine learning (ML) [29] is an algorithmic paradigm in artificial intelligence and computer science to learn patterns in data without explicitly programming about the characteristic features of those patterns. An important task in machine learning is classification of data into categories, generically referred to as a classification problem. The algorithm learns about the categories from a dataset and produces a model that can assign previously unseen inputs to those categories.

In supervised learning models, ML algorithms rely on labels identifying each data point to learn to classify data from a predefined and known representative subset (training data) into assumed categories (thus the term supervised). Once trained, the algorithm then generalizes to an unknown data set, called the test set. Deep neural networks (DNNs) i.e., neural networks with multiple hidden layers, can be used to classify complex data into categories with high accuracy of over 90 % [25].

![[assets/figures/references/kalantre-2019/ea5d77f332ae538edd500d75079bcdc44de84040a6783f83e940f454e6b45938.jpg]]

![[assets/figures/references/kalantre-2019/e48a10ef919de9dcda2e3d837f600a2912b59d0068cbf16ca2b2279001761d7a.jpg]]  
FIG. 1. (a) A generic nanowire connected to contacts with top gates. $\mu _ { 1 }$ and $\mu _ { 2 }$ are the chemical potentials of the contacts. (b) Potential profile $V ( x )$ along the nanowire. Alternating set of barrier and plunger gates create a potential profile $V ( x )$ along the nanowire. $( N _ { 1 } , N _ { 2 } , N _ { 3 }$ , and $N _ { 4 }$ are the number of electrons on each island. Electrons can tunnel through the barriers between adjacent islands or the contacts. The filled blue areas denote regions of electron density.)

The central aim of this work is to enable an automated approach to navigation and tuning of quantum dot devices in the multidimensional space of gate voltages. Here, we define auto-tuning specifically as finding appropriate values for the gate electrodes to achieve a particular configuration. Identification of the state of the device is the first step in the tuning process. In light of the requirement for learning the state to achieve tuning and the success achieved with DNNs for data classification, we propose to use DNNs to determine charges and states of quantum dots. Once it is achieved, auto-tuning is reduced to an optimization problem to the required state and can be done with standard optimization routines.

# III. PHYSICAL MODEL OF A NANOWIRE

A prerequisite for training of neural networks is the availability of a training data set which mimics the expected characteristics from a test set. We develop a model for electron transport under the Thomas-Fermi approximation to calculate electron density n(x) and current I (see Appendix A for details). This model allows us to construct a capacitance model for the islands given a potential landscape $V ( x )$ and the fixed Fermi level of the contacts. The potential profile, in turn, is determined by the voltages set on the gates (Appendix C).

An infinitesimal bias is assumed to exist between the contacts. The discreteness in the number of electrons in the islands, along with inter-electronic Coulomb repulsion, leads to transport being blockaded across the nanowire. The charge configuration changes when there are two or more degenerate charge states. Such a degeneracy in energy leads to electron flow across the leads, i.e., current at an infinitesimal bias.

We model electron transport using a Markov chain among the charge states $\left( N _ { 1 } , N _ { 2 } , \ldots , N _ { k } \right)$ of the k islands. $N _ { i }$ represents the number of electrons on the $i ^ { t h }$ island. The rate of going from one state to another is calculated under a thermal selection rule set by the energy of the two configurations evaluated from the capacitance model and the tunneling rate. The tunneling rate is modeled as a product of the Wentzel-Kramers-Brillouin (WKB) tunnel probability [30] across the barrier and classical attempt rate of electrons in the islands. From the steady state configuration of the Markov chain, we calculate the current for a given potential landscape V (x) (Appendix B). In all, this simplistic approach provides the minimum model to reproduce basic charge configurations and transport characteristics qualitatively for linear arrays of quantum dots.

As a check on the qualitative performance of our model, we consider 3-gate and 5-gate configurations, as shown in Fig. 2a and 3a, respectively. We consider a single island (two islands) defined using three (five) electrostatic gates, $V _ { B i } .$ with $i = 1 , 2 \ ( i = 1 , 2 , 3 )$ and $V _ { P j }$ with $j = 1 \ ( j = 1 , 2 )$ . By changing the depth of the wells, electrons can tunnel in or out of the islands. At a given value of the gate voltage, a fixed integer number of electrons are assumed to exist on each island. Current flows through the device when two charge states have the same energy predicted by the capacitance model. In such a state, electrons tunnel through one of the contacts into the island (or tunnel between islands for a 5-gate device) and tunnel out of the island through another contact. The direction of the electron flow is set by the sign of the bias applied across the leads.

![[assets/figures/references/kalantre-2019/11f1a94c8f25ef18bd49b6070072f4bfcaa3d14f8fbebdfedf507e716b613db2.jpg]]

(b)   
![[assets/figures/references/kalantre-2019/d0086bafe59357ae6e2c5f5b0883efcf7ce4d2eb06840d7eb9ed986c5546efb6.jpg]]

(c)   
![[assets/figures/references/kalantre-2019/dc4ab6865ee0312ab2bba8b3412f26c40e58bc39b2763f2f0751bb41a7c40ad1.jpg]]  
FIG. 2. (a) A single dot device model. (b) Potential profile $V ( x )$ along the nanowire with a single dot. (c) Simulated current and electron number N for a single dot exhibiting Coulomb blockade as a function of plunger gate voltage $V _ { P }$ for a 3-gate device

In the simulation for the 3-gate device (Fig. 2(a) and 2(b), a single dot is present along the nanowire. The contact chemical potentials are fixed to $\mu _ { 1 } = \mu _ { 2 } =$ 100.0 meV with respect to the conduction band minimum. An infinitesimal bias of $1 0  { \mu \mathrm { e V } }$ is present across the leads. The barrier gates are assumed to be kept at a fixed voltage with $V _ { B 1 } = V _ { B 2 } = - 2 0 0 \mathrm { m V }$ . The third gate, $V _ { P }$ , is swept from 0 mV to 350 mV.

As can be seen in the current trace in Fig. $2 ( \mathrm { c ) }$ , Coulomb blockade is reproduced. Our model also allows us to predict the most probable charge configuration from the Markov chain analysis. We see that the charge configuration jumps to a different state exactly at the position of the current peaks. The steady increase in the height of current peaks is a result of lowering of the tunnel barriers on increasing $V _ { P }$ . The decrease in spacing between adjacent current peaks with increasing values of $V _ { P }$ is due to a slow increase in the capacitance of the dot with increasing electron number.

![[assets/figures/references/kalantre-2019/3a1ecab2c2103cf12b14e1a7d61fa9495f928896c58f618499d39df24bca5243.jpg]]

![[assets/figures/references/kalantre-2019/1fac94cbcab283f336408f6ee2f8a20f4a846a274d656b5e389243d338808bb2.jpg]]

![[assets/figures/references/kalantre-2019/68849752e68859086927154d1b3e9fb753392cc7233227401a522b02b38c47e2.jpg]]

![[assets/figures/references/kalantre-2019/1464e5c733b1b8e20f6994f10d1f2d432d8a0c08a9e865542bd46cf1f65d835e.jpg]]  
FIG. 3. (a) A 5-gate device used to model a double dot. (b) Potential profile $V ( x )$ with charges $N _ { 1 }$ and $N _ { 2 }$ on the two dots. (c) Simulated current flow at triple points and (d) honey-comb charge stability diagram in the space of plunger gate voltages $\left( V _ { P 1 } , V _ { P 2 } \right)$ from the Thomas-Fermi model described in appendix A

For the 5-gates device, (Fig. 3(a)), the barrier voltages are set to $V _ { B 1 } = V _ { B 2 } = V _ { B 3 } = - 2 0 0 \mathrm { m V }$ . These values were chosen so that the device operates in a double dot configuration (Fig. 3(b)). We calculate the current as function of the two plunger gate voltages, $V _ { P 1 }$ and $V _ { P 2 }$ . We reproduce the expected features for such a system [27], current flow only at triple points and honeycomb-shaped fixed-charge contours.(Fig. 3(c) and $\mathrm { 3 ( d ) } )$ .

We note that while more sophisticated models should be used in future studies, we find our approach to be sufficient for showing how ML can help with the challenges outlined in Sec. II.

# IV. LEARNING COULOMB BLOCKADE

We start our analysis from investigation of whether a machine can learn to identify the charge on a single quantum dot, given the current as a function of $V _ { P }$ $\left( { \mathrm { F i g . ~ 2 ( c ) } } \right)$ . Formally, we define the broader problem of Learning Coulomb Blockade as:

# Problem P1: Charge Identification

Given I(V), find a map M such that

$$
\mathcal {M}: I (\boldsymbol {V}) \to \boldsymbol {C S} (\boldsymbol {V}),
$$

where I is the current at infinitesimal bias, V denotes the vector of voltages applied to the gates and CS is a vector of number of electrons on each island.

In the case of a single dot, only one gate voltage, $V _ { p } ,$ is varied and the charge state is simply the number of electrons on the dot. Hence, V and CS are scalars. It is easy to see that this just amounts to learning to integrate the current characteristics and scaling to the appropriate charge number (Fig. 4(a)).

We generated a training data set for 1000 distinct realizations of the dots. Each sample point is a current and charge state vs. $V _ { P }$ characteristic. Across the samples, parameters such as the gate positions, widths and heights are sampled from a Gaussian distribution with mean values in the parameter set (standard deviation for the Gaussian was set to 0.05 times the mean value) (see Appendix D for details). Fig. 4(b) and $4 ( \mathrm { c } )$ show sample current and charge data, respectively, of 100 such dots. The rationale behind generating a large dataset for the dots is twofold: having a variation in the dot parameters models the variations in different dots that are used in experiments and it presents a way to generate a generic training dataset for learning.

The machine learning problem is intended to map the current, given in Fig. 4(b), to the charge state, shown in Fig.4(c). One can think of this as a regression problem from the vector of current values to the vector of charge values.

We used a deep neural network with three hidden layers [31] and achieved 91% accuracy for the charge state values (see Appendix E for a description of the computing environment). Here, the accuracy for a single currentgate voltage curve (see Fig. 4(d) and Fig. 4(e)) is calculated from the predicted charge state from the neural network and the charge state from the Thomas-Fermi model over the gate-voltage range. This accuracy is them averaged over all the samples to produce an accuracy for the test set. The size of input and output layers correspond to the number of points in the I(V) and CS(V). We used a 512 point input and 512 point output layer. The result from the output layer was rounded to the nearest integer to get the charge state. The hidden layers comprised 1024, 256 and 12 neurons, respectively. The outcome of the training is a set of biases and weights corresponding to each neuron that allow the calculation of the final output.

![[assets/figures/references/kalantre-2019/328b0ab585eea7d52aa48ddb760f707ff583331442a894f5503160ca66d3e655.jpg]]

![[assets/figures/references/kalantre-2019/2705ba2de8dd08eba001b97397698440070d3acb0d71dbeecec19941febcc0e2.jpg]]

![[assets/figures/references/kalantre-2019/1e0259b02e798530dbf810848e8f041b46ee7ea451976fc10d3ac85de998e72b.jpg]]  
FIG. 4. (a) Overview of the ML problem of going from current to charge state for a single dot (b) Current vs VP data for 100 different dots. Each row represents a separate device with distinct gate positions and physical parameters sampled from a Gaussian distribution around a mean set of parameters (appendix D). (c) Corresponding charge vs $V _ { P }$ data for current data from (b). (d) A sample current vs $V _ { P }$ curve given as input to the trained DNN. (e) The output from the DNN showing the predicted and actual charge states for sample in (d).

Interestingly, we observed that a successive decrease in the number of neurons across the hidden layers was critical to achieving a respectable accuracy. This suggests a redundancy of information encoded in the current characteristics that the network must learn to ignore when estimating the charge states.

We can visualize the learning by means of a validation set at the end of a fixed number of training epochs. We observed that in the initial training stages, the network learning the charge boundaries in the plunger voltage space of an average dot and then slowly starts to learn to identify charge states of individual dot samples.

We note that the problem identified above suffers from the charge-offset problem in the real world since the initial number of electrons on the dot might be unidentified. Hence, the network trained as a solution to Problem P1 has limited applicability in experimental settings but nevertheless exemplifies that machine learning can, in principle, be applied to charge identification.

The charge number identification on the single dot also offers a trivial solution to identifying the state of the single dot. If the charge on the dot is non-zero, we can then conclude that a single dot exists whereas a zero charge implies a no dot device. The identification of state of the device with multiple islands from the current presents additional possibilities which we describe in the next section.

# V. LEARNING STATE

The state is the number of distinct dots or islands that exist in the nanowire. We now consider a 5 gate device which can exist in 4 possible dot configurations: Quantum Point Contact or a Barrier, single dot (SD), double dot (DD) and a short circuit (SC) (see Fig. 3(a) for the device model and Fig. 5(a) for the possible dot configurations). Different states are reached by changing the voltages $V _ { P 1 }$ and $V _ { P 2 }$ . The voltages $V _ { B 1 }$ , $V _ { B 2 }$ and $V _ { B 3 }$ are all fixed $\mathrm { t o \mathrm { ~ - } 2 0 0 m V }$ .

To quantify the definition of a dot configuration, we define a probability vector p at each point in the V space. The elements of p correspond to the probability of being in each of the configurations as described above, i.e., $\pmb { p } =$ (SC, Barrier, SD, DD). For example, for a state of a single dot, the probability vector $\pmb { p } = ( 0 , 0 , 1 . 0 , 0 )$ . For a region in V space, p is defined as the average of the probability vectors for the points in the region.

We are interested in determining the dot configuration (i.e., distinguishing between SC, Barrier, SD and DD) for a given set of barrier and plunger gate voltages. Formally, we define the problem as follows:

# Problem P2: State Identification for full region Given I(V), find the probability vector p at each point in the given voltage space.

We generated a training set of 1000 gate configurations. Each sample point is the full two-dimensional map $( 1 0 0 \times 1 0 0$ points) from the space of plunger gate voltages $( V _ { P 1 } , V _ { P 2 } )$ to current (see Fig. 5(b) for an example of such map). A state map corresponding the the current map presented in Fig. 5(b) is shown in Fig. 5(c). The states are calculated via the electron density predicted from Thomas-Fermi model. The number of distinct charge islands in the electron density separated by regions of zero electron density corresponding to the barriers is used to infer the state of the nanowire (see Appendix A). Note that there is more than one way for some of the configurations to exist. For instance, lower voltages on the barrier B2 with respect to the barriers B1 and B3 or higher voltages on B1 and B2 as compared to $\mathrm { B 3 ; }$ all lead to a single dot configuration (see Fig. 3(a)). Analogously to the single dot case, gate and physical parameters are sampled from a Gaussian distribution with mean values in parameter set (see Appendix D).

![[assets/figures/references/kalantre-2019/04b1d6297bc71a6029034eeac704aba1565c302a34870911ad66b80177376a09.jpg]]

![[assets/figures/references/kalantre-2019/8514189e3a17a54b92889aca34a604d5e1355860c24468a2e13475c0339dbf0d.jpg]]

![[assets/figures/references/kalantre-2019/ec36bf97be231e6dd0f5f79c0aba311bbfc4e573fbf1dcf2b1631c078d8f845f.jpg]]  
FIG. 5. (a) Possible states in the 5-gate device depending on the choices of the plunger gate voltages (b) Current vs $( V _ { P 1 } , V _ { P 2 } )$ exhibiting varied features in the current depending on the underlying state of the nanowire. (c) State vs $( V _ { P 1 } , V _ { P 2 } )$

We note that Problem P2 is a regression problem from the I(V ) space to the space of probability vectors. The aim is to go from Fig. 5(b) to ${ \mathrm { F i g . ~ 5 ( c ) } }$ . We used a similar neural network with three hidden layers that we employed for the single dot problem. The input and output layers are now of the size equal to number of points in the $\overset { \underset { \mathrm { ~ \large ~ . ~ } } { } } { \underset { \mathrm { ~ \large ~ . ~ } } { } } ( V )$ and $C S ( V )$ relationships, i.e., $1 0 0 \times 1 0 0$ points. It was possible to achieve 91 % on state values i.e., it was possible to reproduce the state map in Fig. 5(c) across different devices with the state label agreeing to 91 % with the actual values.

As far as tuning the device is considered, it is not very useful to know to probability vector at each point in the voltage space. Hence, we move to defining a probability vector for a sub-region as opposed to a single point in the voltage space.

# VI. AUTO-TUNING

We define the process of finding a range of gate voltage values in which the device is in a specific configuration as auto-tuning. The ability to characterize the state at any point in the voltage subspace provides a promising starting point for the automated tuning of the device to a particular state. In particular, having an automated protocol for achieving stable desired electron state would allow for efficient control and manipulation of the few electron configurations. In practice, auto-tuning compromises of two steps: (i) identifying the current state of the device and (ii) optimizing the voltage configuration to achieve a desired state. The steps are then repeated until the expected state is reached. For a device with m gates, this leads to a problem of finding a m dimensional cuboid in the space of the m gate voltages. From a machine learning perspective, the recognition and tuning of the state can be expressed as the following two problems:

Problem P3a: State Identification for sub-region Given $I ( V )$ , find the average probability vector of the region.

Problem P3b: Auto-tuning: Given the $I ( V )$ characteristics, an initial subregion in V space and a desired dot configuration, find (tune to) a subregion with the desired dot configuration.

The idea behind auto-tuning in a two-dimensional space is presented in Fig. 6. For the case of 5-gate double dot device, defined in Sec. V, we consider the restricted problem with two gates $V _ { P 1 }$ and $V _ { P 2 }$ being controlled and the barrier gates remained fixed (see $\mathrm { F i g . 3 ( a ) } ,$ . We start out in a double dot region and the desired dot configuration is set to be a single dot region.

# A. State learning

As mentioned earlier, the first step in the auto-tuning process is the recognition of the existing configuration of the device. In a typical experiment one has access only to a limited voltage regime, decided upon by the experimentalist. Such a region can be thought of as a sub-image of the two-dimensional gate voltage map mentioned in Sec. V. The identification of the state of the device is an image classification task, with categories representing the different states of the nanowire (i.e., SC, Barrier, SD and DD).

![[assets/figures/references/kalantre-2019/be4b9348ec824ef0451558f1aafd9dc2fdff2be0bf666bd12192bb711c30e9fd.jpg]]

![[assets/figures/references/kalantre-2019/83d91bc69e85f90a4433d7034ef30aea78e78ffc3554a6af95abb0ea2721d8f4.jpg]]

![[assets/figures/references/kalantre-2019/ecc07068f79d755585da839e43a574c55f1bfa06f1ecbc6bacf759485abf427b.jpg]]  
FIG. 6. (a) Idea behind auto tuning with I and II being the starting and ending sub regions respectively. (b) Sub-regions encountered by the optimizer when auto-tuning to the single dot region, i.e., the destination probability vector p0 being set to (0, 0, 1, 0). (c) Starting sub region (d) End sub region

Such problems have been successfully solved by convolutional neural networks (CNNs). CNNs have one or more sets of convolutional and pooling layers, that precede the series of hidden layers (see Fig. 7(a)). A convolutional layer consists of a number of fixed size kernels which are convolved with the input. The number of kernels in a layer is referred to as the number of features in that layer. The weights in the kernel are determined by the training on the dataset. In order to reduce dimensionality of the input for faster operation and to effectively learn larger scale features in the input, a convolutional layer is generally followed by a pooling layer. A pooling layer takes in a sub-region in the input and replaces it by an effective element in that region. A common pooling strategy is to let the effective element be the maximum element in the sub-region which leads to the notion of a max-pooling layer.

![[assets/figures/references/kalantre-2019/e8b97c948946551e06918f22a0bddc9b449ecbe0a72922baa2d843c480c48172.jpg]]

![[assets/figures/references/kalantre-2019/5bf228cc77e52f5f6060cf40dabd860df985941d70accca8f9f21208814ea85d.jpg]]

![[assets/figures/references/kalantre-2019/1f6cf4ca60a13742ffae8a7b464cde750bc38de87587efcbfc476042afd6742e.jpg]]  
FIG. 7. (a) Design of the CNN for sub-region identification. 30×30 pixel images are used as input to the CNN (b) Current data and (d) probability vector predicted when sub-region is of double dot type. (c) Current data and (e) probability vector predicted when sub-region of single dot type. The axes ticks denote the pixel index.

The training set for the voltage subspace learning was generated based on the set of 1000 full two-dimensional maps of I vs $( V _ { P 1 } , V _ { P 2 } )$ from Sec. V. 50 000 sub-maps of a fixed size (30 × 30 pixel) were generated. 90 % of the 50 000 samples were used as the training set and the rest were used to evaluate the performance of the network. The network achieved 96 % accuracy in prediction of the state. Two examples of the sub-maps and corresponding probability vectors from the evaluation stage are presented in Fig. 7(b), (c) and Fig. 7(d), (e) respectively.

For the training, we used two convolutional layers with kernels of size [5, 5]. The layers both had 16 features. Each convolutional layer was followed by a max-pooling layer, wherein the pool size was set to [2, 2]. The two hidden layers consisted of 1024 and 256 neurons. Rectified linear units (ReLU) with a dropout rate of 0.5 were used as neurons. Dropout regularization was introduced to avoid over-fitting [32]. Finally, an Adam optimizer was used to speed up the training process [33].

We found that the introduction of the convolutional layers was crucial in achieving better results in terms of both accuracy and efficiency. Here, accuracy is defined with the prediction of the state with the highest probability and efficiency is defined in terms of training time. We note that the state is predicted from the highest probability, though it might be possible that this highest probability is less than 0.5 (see Fig. 7(d) and Fig. 7(e)). Introducing more hidden layers did not affect the accuracy as much as introducing convolutional layers; this indicates that classification over the features seems to be a simpler task than producing an effective representation for the features.

# B. Tuning the device

Having the state of the device identified for a subregion, the procedure of auto-tuning corresponds to a simple optimization problem. Let p be the probability vector of a given sub-region and $\scriptstyle { p _ { 0 } }$ be the desired probability vector. Define $\delta ( { \pmb p } , { \pmb p } _ { 0 } ) = | { \pmb p } - { \pmb p } _ { 0 } |$ , where | · | denotes the vector norm. The problem of auto-tuning is then equivalent to minimization of $\delta ( \pmb { p } , \pmb { p } _ { 0 } )$ over the space of gate voltages V.

We used COBYLA from the Python package SciPy [34] as a numerical optimizer. The probability vector p was calculated using the neural network described in Sec. VI A. The starting region was set initially in a double dot region, as can be seen in Fig. 6(c). Around 15- 30 evaluations of the probability vector using the CNN were required to ultimately find the required sub-region (Fig. 6(d), II in Fig. 6(a)) depending on the position of the initial subregion. The starting region was varied over the space of $( V _ { P 1 } , V _ { P 2 } )$ and in each case it was possible to auto-tune to the required sub region.

# VII. WORKING WITH EXPERIMENTAL DATA

We ran the CNN with the set of weights and biases established during the training on the simulated dataset described in Sec. VI A on an experimental dataset for a 3-gate device from our group [35]; the device is as described in [36], and the measurements are very similar to those presented in [37]. The device used in the experiment had two barrier gates (B1 and B2) and one plunger gate (P). In this device, the barrier gates were also used as generic plunger gates. By choosing appropriate voltage values for the plunger (P) gate, the device could be operated as a single dot or a double dot device. The measured data consisted of 2D differential conductance maps in the space of barrier gate voltages $( V _ { B 1 }$ and $V _ { B 2 } )$ for varied but fixed values of the plunger voltage $( V _ { P } )$ . Since the qualitative features are similar for a current map and a differential conductance map, we could feed in the differential conductance output into the CNN.

# A. Identification of state in experimental Data

For state identification, we considered small regions in the space of barrier voltage for a fixed plunger so that in each of the maps the device was in only one of the states, single or double dot. The maps were then taken at different values of the plunger voltage, ranging from −0.76 V to −0.60 V. The barrier gates are varied from −1.44 V to −1.34 V. Fig. 8(a) shows the 2D maps for different values of the plunger voltage. A gradual transition from a single dot device to a double dot device is seen.

Since our model produces the current value only qualitatively, the experimental data had to be re-scaled (by a constant number) prior to feeding into the CNN to match the simulated data. The CNN characterizes the state present in the device through a probability vector. Results for different values of the plunger voltage are shown in Fig. 8(b). As can be seen, our CNN can effectively distinguish a single dot and a double dot state from the current maps.

# B. Auto-tuning of the device to a double dot state

Since the device state could be predicted with reasonable accuracy, we considered tuning gate voltages from one state to another based on the experimental data. For this part, a dataset with a larger variation in barrier voltages was used. Figure 9 shows 2D maps of differential conductance vs the barrier gate voltages $( V _ { B 1 }$ and $V _ { B 2 } )$ for four different values of the plunger voltage. 2D sub-regions of these maps were used as input to the CNN in the tuning procedure.

We considered the auto-tuning of all three gate voltages (two barriers and the plunger). The final tuned state was set to a double dot region. See Fig. 10 for a visualization of the auto-tuning process. Two kinds of initial regions were considered: a single dot region (Fig. 11(a)) and a region with no current (Fig. 11(c)). In both cases, it was possible to find a set of barrier and plunger gate voltages that map to a double dot state (Fig. 11(b) and Fig. 11(d)). Effectively, the CNN predicted the probability vector describing the device state (sec. V) from maps at different plunger voltages and the optimizer tuned the probability vector to a required form (in this case, a double dot).

![[assets/figures/references/kalantre-2019/adf1dd5cc01a0fa81c075e6b1fbab8cbc9744f57f59e78fd0006bbf60b9ada7e.jpg]]

![[assets/figures/references/kalantre-2019/01944b462ea614612c927691bdd9415daea0294c10796d75d93de75edd7cf21e.jpg]]  
FIG. 8. (a) Experimental data at different values of the plunger gate exhibiting a transition from a single dot state to a double dot state. (b) The predicted state probability by the CNN as a function of $V _ { p } .$ . A clear transition is seen from single dot state to double dot state as is intuitively seen in the experimental data. The probabilities predicted from the CNN for the other states (barrier and short circuit) are smaller in comparison to the single or double dot probabilities and hence only the highest two probabilities corresponding to these states are shown for clarity.

We used the same optimizer as described in Sec. VI B. The tuning process was completed within 40 to 50 iterations, depending on the initial region. Hence, the CNN coupled with an optimizer can be used with data from actual experiments for auto-tuning the device state.

# VIII. DISCUSSION

# A. Neural Networks in an Experimental Setting

We describe how a generalized auto-tuner neural network can be implemented in an experiment to automatically adjust the parameters of the device to an expected state. Consider a quantum dot device with a set of gate voltages V . We showed that a neural network can be trained to predict a probability vector p describing the state of an arbitrary sub-region in the V space. This predicted vector $^ { p , }$ together with a destination probability vector, can be then fed to an optimizer controlling the space parameters in order to obtained the desired single or double dot state.

![[assets/figures/references/kalantre-2019/f555e55ed569f0d220b3eeb6975283f27c8b604cd48b29a5fb7973776315b356.jpg]]  
FIG. 9. Experimental data from the same device with a wider variation in the barrier gate voltages. Differential conductance is measured as a function of the barrier gate voltages $( V _ { B 1 }$ and $V _ { B 2 } )$ and is plotted for four different values of the plunger voltage. The device shows a gradual transition from a a single dot current characteristics to a double dot current characteristics for more negative values of the plunger voltage.

In particular, let’s assume that p0 is the probability vector of the desired state. Starting in a random region of the voltage space, the trained CNN can predict a probability vector p for this region. A fitness function δ is then used to compare the predicted probability vector p and the destination vector $p _ { 0 }$ . By minimizing $\delta ,$ the auto-tuning of the device takes place. An optimizer determines an optimal set of parameters that leads to a new sub-region. The process is then repeated until the fitness has been minimized to a particular value.

Since, the entire voltage space in V does not have to be explored, this implies a saving in terms of experimental time. Also the process does not use human intervention at any step in the tuning of the dot signifying the use of auto in our definition of the auto-tuning problem.

# B. Further Problems

We have presented novel techniques towards tuning of quantum dot devices. Given that building scalable quantum computing devices is now on the horizon, we hope that such methods will present themselves as natural subroutines for construction of real devices and will do away the need to rely on heuristics. Hence, we outline further problems that are more realistic and useful in an experimental setting and can be potentially tackled with machine learning.

![[assets/figures/references/kalantre-2019/dcfbf3bddd4f97b0c9b5ad5fe30f50bbb380a35bb985ffba1e75d240157a75ae.jpg]]  
FIG. 10. The idea behind auto-tuning in the three dimensional space of two barrier and plunger gate voltages. The successive squares represent the sub-regions encountered in the tuning process which are fed as input to the CNN. The arrow represents the direction of movement in going from an initial region to a final region. See Fig. 9 for the $V _ { B 1 }$ and $V _ { B 2 }$ range.

# Problem P4: Inductive Learning

Moving to learning and auto-tuning of multiple dots will present new challenges as a result of the higher dimensional space of gate voltages. This curse of dimensionality might detrimentally affect the design of autotuning algorithms. Pattern recognition in dimensions greater than 2 has not been studied extensively. Instead we propose a different solution that can be generalized based on an inductive strategy. We refer to it as inductive learning.

In Inductive Learning, we make use of the fact that gates which are spatially far apart are likely to be loosely coupled to each other. Hence, a strategy emerges in which we use the auto-tuning algorithm to tune the first two barrier gates. A second type of neural network will be used to tune the plunger gate. This will be repeated until all the single dots formed by 2 barriers and a plunger are tuned to the required configurations.

# Problem P5: Charge Tuning

(a)   
![[assets/figures/references/kalantre-2019/1a69618eeb224d61acfd3a7001354d640f9494ec34dadd5c09d3bca970cc6b1f.jpg]]  
(b)

![[assets/figures/references/kalantre-2019/2be3a35aa0a158bdccd26ed7a4571b7bd24f3faaf7704a83690076eec222653a.jpg]]

![[assets/figures/references/kalantre-2019/52fd3edfa8955811ca20df346a44fe24585e3a80c43a19c2a29831f36ecaba52.jpg]]

(c)   
![[assets/figures/references/kalantre-2019/bc647287c3d4464765f12e983dc75406e131ec1b0cdfd274d60cc5f1d6805fbe.jpg]]

(d)   
![[assets/figures/references/kalantre-2019/3ddf95494ee06719882f89ca66f3d38e795393d06fc2484a315f33d02cc3bdd0.jpg]]  
FIG. 11. (a) The initial region $( V _ { P } = - 0 . 6 4 \mathrm { V } )$ set in a single dot region. (b) The optimizer coupled with the CNN tunes the device to a double dot state $( V _ { P } = - 0 . 7 3 \mathrm { V } )$ i.e. the destination probability vector $p _ { 0 }$ being set to $( 0 , 0 , 0 , 1 )$ . (c) The initial region set to a region $( V _ { P } = - 0 . 6 6 \ : \mathrm { V } )$ with no current through the device.(d) The final state is again a double dot $( V _ { P } = - 0 . 7 2 \ : \mathrm { V } )$ as required.

The capacitance matrix is an effective model of the device and it determines the quantitative size of features in the current output. For instance, in the case of a single dot, the capacitance matrix can be directly related to the charging energy of the device. For the double dot, the capacitance matrix elements determine the size of the honeycomb hexagons. Hence, establishing a learning algorithm for the capacitance matrix is the next logical step. A capacitance matrix along with the voltage values of the gate can be used to estimate the charge on the device. Estimation of the charge can then be coupled with an optimizer to tune the device to required charge values exactly like tuning the state as described in this paper. We refer to this process of learning the capacitance matrix and tuning the charge on the device as Charge Tuning.

We remark here that these further problems and any other that might arise may require different types of machine learning algorithms beyond just deep and convolutional neural networks described in this paper.

# IX. CONCLUSION

We have described a bare-bones physical model to calculate the capacitance matrix for a linear array of gate defined quantum dots. We used a Markov chain model amongst the charge to simulate transport characteristics under infinitesimal bias. Our model can qualitatively reproduce the current vs gate voltage characteristics observed in experiments.

This model was used to train deep neural networks to learn the charge and state of single quantum dots from their current characteristics. We used a convolutional neural network to identify state of a double quantum dot device from two-dimensional current maps in the space of gate voltages. We defined the auto-tuning problem for quantum dot devices and described strategies for tuning single and double dot devices. The trained networks were tested on experimental data and successfully distinguished the single and double dot device states. We also demonstrated auto-tuning in a three-dimensional space of barrier & gate voltages on an experimental dataset.

Finally, we described how an auto-tuner network might be incorporated in an experiment and outlined further problems in tuning of quantum dot devices. Moreover, our work presents an example of machine learning techniques, specifically convolutional neural networks, fruitfully applied to experiments, thereby paving a path for similar approaches to a wide range of experiments in physics.

# ACKNOWLEDGMENTS

We thank Eric Shirley and Michael Gullans of NIST for helpful discussions. SSK acknowledges financial support from the S. N. Bose Fellowship. We acknowledge funding from the NSF Physics Frontier Center at the JQI and the Army Research Laboratory funded CDQI. Any mention of commercial products is for information only; it does not imply recommendation or endorsement by NIST.

[1] R. Li, L. Petit, D. P. Franke, J. P. Dehollain, J. Helsen, M. Steudtner, N. K. Thomas, Z. R. Yoscovits, K. J. Singh, S. Wehner, L. M. K. Vandersypen, J. S. Clarke, and M. Veldhorst. A Crossbar Network for Silicon Quantum Dot Qubits. arXiv:1711.03807, 2017.   
[2] T. Karzig, C. Knapp, R. M. Lutchyn, P. Bonderson, M. B. Hastings, C. Nayak, J. Alicea, K. Flensberg, S. Plugge, Y. Oreg, C. M. Marcus, and M. H. Freedman. Scalable designs for quasiparticle-poisoningprotected topological quantum computation with Majorana zero modes. Physical Review B, 95(23):1–34, 2017.   
[3] C. Neill, P. Roushan, K. Kechedzhi, S. Boixo, S. V. Isakov, V. Smelyanskiy, R. Barends, B. Burkett, Y. Chen, Z. Chen, B. Chiaro, A. Dunsworth, A. Fowler, B. Foxen, R. Graff, E. Jeffrey, J. Kelly, E. Lucero, A. Megrant, J. Mutus, M. Neeley, C. Quintana, D. Sank, A. Vainsencher, J. Wenner, T. C. White, H. Neven, and J. M. Martinis. A blueprint for demonstrating quantum supremacy with superconducting qubits. arXiv:1709.06678, 2017.   
[4] D. M. Zajac, T. M. Hazard, X. Mi, E. Nielsen, and J. R. Petta. Scalable gate architecture for a one-dimensional array of semiconductor spin qubits. Phys. Rev. Applied, 6:054013, 2016.   
[5] M. Saffman. Quantum computing with atomic qubits and Rydberg interactions: Progress and challenges. Journal of Physics B: Atomic, Molecular and Optical Physics, 49(20), 2016.   
[6] E. A. Sete, W. J. Zeng, and C. T. Rigetti. A functional architecture for scalable quantum computing. In 2016 IEEE International Conference on Rebooting Computing, ICRC 2016 - Conference Proceedings, 2016.   
[7] A. Blais, R. S. Huang, A. Wallraff, S. M. Girvin, and R. J. Schoelkopf. Cavity quantum electrodynamics for superconducting electrical circuits: An architecture for quantum computation. Physical Review A - Atomic, Molecular, and Optical Physics, 69(6):1–14, 2004.   
[8] K. R. Brown, J. Kim, and C. Monroe. Co-Designing a Scalable Quantum Computer with Trapped Atomic Ions. arXiv:1602.02840, 2016.   
[9] H. Bernien, S. Schwartz, A. Keesling, H. Levine, A. Omran, H. Pichler, S. Choi, A. S. Zibrov, M. Endres,

M. Greiner, V. Vuleti, and M. Lukin. Probing manybody dynamics on a 51-atom quantum simulator. Nature, 551:579–584, 2017.   
[10] M. A. Fogarty, K. W. Chan, B. Hensen, W. Huang, T. Tanttu, C. H. Yang, A. Laucht, M. Veldhorst, F. E. Hudson, K. M. Itoh, D. Culcer, A. Morello, and A. S. Dzurak. Integrated silicon qubit platform with singlespin addressability, exchange control and robust singleshot singlet-triplet readout. arXiv:1708.03445, 2017.   
[11] F. K. Malinowski, F.o Martins, P. D. Nissen, S. Fallahi, G. C. Gardner, M. J. Manfra, C. M. Marcus, and F. Kuemmeth. Symmetric operation of the resonant exchange qubit. Physical Review B, 96(4):1–6, 2017.   
[12] M. D. Reed, B. M. Maune, R. W. Andrews, M. G. Borselli, K. Eng, M. P. Jura, A. A. Kiselev, T. D. Ladd, S. T. Merkel, I. Milosavljevic, E. J. Pritchett, M. T. Rakher, R. S. Ross, A. E. Schmitz, A. Smith, J. A. Wright, M. F. Gyure, and A. T. Hunter. Reduced Sensitivity to Charge Noise in Semiconductor Spin Qubits via Symmetric Operation. Physical Review Letters, 116(11):1–6, 2016.   
[13] C. Jones, M. A. Fogarty, A. Morello, M. F. Gyure, A. S. Dzurak, and Th. D. Ladd. A logical qubit in a linear array of semiconductor quantum dots. arXiv:1608.06335, 2016.   
[14] M. Veldhorst, H. G. J. Eenink, C. H. Yang, and A. S. Dzurak. Silicon CMOS architecture for a spin-based quantum computer. arXiv:1609.09700, 2016.   
[15] J. M. Nichol, L. A. Orona, S. P. Harvey, S. Fallahi, G. C. Gardner, M. J. Manfra, and A. Yacoby. High-fidelity entangling gate for double-quantum-dot spin qubits. npj Quantum Information, 3(1), 2017.   
[16] M. R. Delbecq, T. Nakajima, T. Otsuka, S. Amaha, J. D. Watson, M. J. Manfra, and S. Tarucha. Full control of quadruple quantum dot circuit charge states in the single electron regime. Applied Physics Letters, 104(18):1–4, 2014.   
[17] G. Tosi, F. A. Mohiyaddin, V. Schmitt, S. Tenberg, R. Rahman, G. Klimeck, and A. Morello. Silicon quantum processor with robust long-distance qubit couplings. Nature Communications, 8(1), 2017.   
[18] A. Bermudez, X. Xu, R. Nigmatullin, J. O’Gorman, V. Negnevitsky, P. Schindler, T. Monz, U. G. Poschinger,

C. Hempel, J. Home, F. Schmidt-Kaler, M. Biercuk, R. Blatt, S. Benjamin, and M. M¨uller. Assessing the progress of trapped-ion processors towards fault-tolerant quantum computation. arXiv:1705.02771, 2017.   
[19] H. A. F¨urst, M. H. Goerz, U. G. Poschinger, M. Murphy, S. Montangero, T. Calarco, F. Schmidt-Kaler, K. Singer, and C. P. Koch. Controlling the transport of an ion: Classical and quantum mechanical solutions. New Journal of Physics, 16, 2014.   
[20] J. Alonso, F. M. Leupold, B. C. Keitch, and J. P. Home. Quantum control of the motional states of trapped ions through fast switching of trapping potentials. New Journal of Physics, 15:023001, 2013.   
[21] S. A. Schulz, U. Poschinger, F. Ziesel, and F. Schmidt-Kaler. Sideband cooling and coherent dynamics in a microchip multi-segmented ion trap. New Journal of Physics, 10:1–18, 2008.   
[22] T. F. Watson, S. G. J. Philips, E. Kawakami, D. R. Ward, P. Scarlino, M. Veldhorst, D. E. Savage, M. G. Lagally, Mark Friesen, S. N. Coppersmith, M. A. Eriksson, and L. M. K. Vandersypen. A programmable two-qubit quantum processor in silicon. arXiv:1708.04214, 2, 2017.   
[23] T. A. Baart, P. T. Eendebak, C. Reichl, W. Wegscheider, and L. M.K. Vandersypen. Computer-automated tuning of semiconductor double quantum dots into the singleelectron regime. Applied Physics Letters, 108(21):1–9, 2016.   
[24] C. Szegedy, W. Liu, Y. Jia, P. Sermanet, S. Reed, D. Anguelov, D. Erhan, V. Vanhoucke, and A. Rabinovich. Going deeper with convolutions. In 2015 IEEE Conference on Computer Vision and Pattern Recognition (CVPR), pages 1–9, 2015.   
[25] A. Krizhevsky, I. Sutskever, and G. E. Hinton. Imagenet classification with deep convolutional neural networks. In F. Pereira, C. J. C. Burges, L. Bottou, and K. Q. Weinberger, editors, Advances in Neural Information Processing Systems 25, pages 1097–1105. Curran Associates, Inc., 2012.   
[26] Y. LeCun, L. Bottou, Y. Bengio, and P. Haffner. Gradient-based learning applied to document recognition. Proceedings of the IEEE, 86(11):2278–2323, 1998.   
[27] W. G. Van Der Wiel. Electron transport through double quantum dots. Reviews of Modern Physics, 75(January):1–22, 2003.   
[28] Y. LeCun, Y. Bengio, and G. Hinton. Deep learning. Nature, 512:436–444, 2015.   
[29] Ian Goodfellow, Yoshua Bengio, and Aaron Courville. Deep Learning. MIT Press, 2016. http://www. deeplearningbook.org.   
[30] E. Merzbacher. Quantum Mechanics. Wiley, 1998.   
[31] M. A. Nielsen. Neural Networks and Deep Learning. Determination Press, 2015.   
[32] G. E. Hinton, N. Srivastava, A. Krizhevsky, I. Sutskever, and R. Salakhutdinov. Improving neural networks by preventing co-adaptation of feature detectors. arXiv:1207.0580, 2012.   
[33] D. P. Kingma and J. Ba. Adam: A method for stochastic optimization. arXiv:1412.6980, 2014.   
[34] M. J. D. Powell. Direct search algorithms for optimization calculations. Acta Numerica, 7:287–336, 1998.   
[35] Location of experimental data: Elwood: \internal\SET\protect\_data\wet\protect\_DR\ MeasurementDiagnostics\12\protect\_4NR\data; files are May1 1 to 16.dat and Apr24 1 to 49.dat.

[36] P. J. Koppinen, M. D. Stewart, and Neil M. Zimmerman. Fabrication and electrical characterization of fully CMOS-compatible si single-electron Devices. IEEE Transactions on Electron Devices, 60(1):78–83, 2013.   
[37] A. Fujiwara, N. M. Zimmerman, Y. Ono, and Y. Takahashi. Current quantization due to single-electron transfer in Si-wire charge-coupled devices. Applied Physics Letters, 84(8):1323–1325, 2004.   
[38] S. Lundqvist and N. H. March. Theory of the Inhomogeneous Electron Gas. 1983.   
[39] Mart´ın Abadi, Ashish Agarwal, Paul Barham, Eugene Brevdo, Zhifeng Chen, Craig Citro, Greg S. Corrado, Andy Davis, Jeffrey Dean, Matthieu Devin, Sanjay Ghemawat, Ian Goodfellow, Andrew Harp, Geoffrey Irving, Michael Isard, Yangqing Jia, Rafal Jozefowicz, Lukasz Kaiser, Manjunath Kudlur, Josh Levenberg, Dan Man´e, Rajat Monga, Sherry Moore, Derek Murray, Chris Olah, Mike Schuster, Jonathon Shlens, Benoit Steiner, Ilya Sutskever, Kunal Talwar, Paul Tucker, Vincent Vanhoucke, Vijay Vasudevan, Fernanda Vi´egas, Oriol Vinyals, Pete Warden, Martin Wattenberg, Martin Wicke, Yuan Yu, and Xiaoqiang Zheng. TensorFlow: Large-scale machine learning on heterogeneous systems, 2015. Software available from tensorflow.org.

# Appendix A: Thomas-Fermi Capacitance Model

# 1. Calculation of electron density under Thomas-Fermi approximation

We model the electron density as an inhomogeneous electron gas originally used in the statistical theory of Thomas and Fermi for atoms [38]. In this theory, properties of a homogeneous electron gas are applied locally to the inhomogeneous electron gas. This assumption is referred to as the Thomas-Fermi (TF) approximation and is justified when the electron density or the potential acting on it do not change appreciably over a characteristic electron wavelength.

An externally created potential V (x), e.g. from gates, is assumed to be given. Electron density n(x) is treated as the dynamical variable to be found in the theory. A Fermi level $\mu _ { F }$ is given for the electron gas. For the purposes of simulations presented in this paper, we assume a electron density $n ( x )$ on a finite one dimensional grid. (Fig. 1(b))

Consider a Fermi sea with Fermi energy $\mu _ { F }$ . Let the bottom of the conduction band be at energy $\epsilon _ { \mathrm { 0 } }$ . In the absence of an external potential, the electron density in the conduction band can be calculated as,

$$
n = \int_ {\epsilon_ {0}} ^ {\infty} \frac {g (\epsilon)}{1 + e ^ {\beta (\epsilon - E _ {F})}} d \epsilon \tag {A1}
$$

where $g ( \epsilon )$ is the density of states in the conduction band and $\beta$ is the inverse temperature.

Due to the presence of an external potential, the conduction band minimum shifts in energy. Moreover, the electron density produces an effective potential due to the Coulomb self-interaction. As a result, the band minimum is modified as,

$$
\epsilon_ {0} ^ {\prime} (x) = \epsilon_ {0} - e V (x) + \int K (x, x ^ {\prime}) n (x ^ {\prime}) d x ^ {\prime} \qquad (\mathrm{A2})
$$

where $\epsilon _ { 0 } ^ { \prime } ( x )$ is the new spatially varying band minimum, $\mathrm { V } ( \mathrm { x } )$ is the externally applied potential and $K ( x , x ^ { \prime } ) =$ √ K0(x−x0)2+σ2 gives the Coulomb energy between points $\frac { K _ { 0 } } { \sqrt { ( x - x ^ { \prime } ) ^ { 2 } + \sigma ^ { 2 } } }$ K0 x and $x ^ { \prime } . \ K _ { 0 }$ sets the energy scale of the interaction. A softening parameter σ has been added to the denominator and serves a twofold purpose: it models the effective one-dimensional interaction for a higher dimensional gas of electrons as would be present in the device and prevents a numerical singularity at $\boldsymbol { x } \ = \ x ^ { \prime }$ . $\textstyle \int K ( x , x ^ { \prime } ) { \bar { n } } ( x ^ { \prime } ) d x ^ { \prime }$ gives the effective Coulomb potential created as a result of the electron density $n ( x )$ . Since the effects of the electron density on the conduction band minimum are also included, equation A1 with the modified band minimum, equation A2, provide a selfconsistent calculation of the electron density $n ( x )$ .

In our calculations, we assume a two-dimensional electron gas (2DEG) to model the electron density of states. The density of states for a 2DEG, $\begin{array} { r } { g ( \epsilon ) = g _ { 0 } = \frac { m * } { \pi \hbar ^ { 2 } } } \end{array}$ is equal to a constant. Equation A1 was solved in an iterative fashion. The starting solution was taken as $n ( x ) = 0$ which was plugged in A2. The modified band minimum was then used to calculate the $n ( x )$ using A1. This iteration was repeated until the density $n ( x )$ converged. The strength of the Coulomb interaction was increased in a linear fashion to its required strength for a fixed initial number of iterations to avoid pathologies associated with numerical convergence in the self-consistent calculation.

The device is assumed to be connected to large reservoirs of electrons present as the contacts. The contacts are assumed to be kept at a fixed and equal chemical potential $\mu = \mu _ { F }$ . As an approximation, in the absence of gate potentials the conduction band minimum of the entire one dimensional device is assumed to be a constant function of x, being equal to chemical potential of the contacts. Intuitively, the points where $V ( x ) = \mu _ { F }$ are the classical turning points for the electrons and differentiate regions of islands and barriers. The regions where $\mu > V ( x )$ constitute islands of electrons and the rest where $\mu < V ( x )$ (classically forbidden regions) as forming barrier regions between islands.

# 2. Calculation of a capacitance model

Consider a system of m conductors. A capacitance can be defined between each conductor and every other conductor as well as a capacitance from each conductor to ground. The relation between charges on the islands and their electrostatic potential can then be conveniently expressed with a capacitance matrix C of size $m \times m$ .

$$
\boldsymbol {Q} = \mathbb {C} \boldsymbol {V} \tag {A3}
$$

Q is the vector of charges on each conductor and V is a vector with the voltage on each conductor with respect to a ground potential. The conductors are coupled capacitively to fixed voltages which act as gates in the actual device. The electrostatic energy E of the system of conductors can be expressed as:

$$
E = \frac {1}{2} (\boldsymbol {Q} - \boldsymbol {Z}) ^ {T} \mathbb {C} ^ {- 1} (\boldsymbol {Q} - \boldsymbol {Z}) \tag {A4}
$$

where Z is the vector of induced charges due to the gates.

The physics of transport in electrostatically coupled quantum dots with negligible inter-dot tunnel conductance can be described by an orthodox Coulomb blockade theory [27]. We work with a purely classical description of the electron density islands in our one dimensional system without the inclusion of discrete quantum states. We regard them as a system of conductors having a discrete number of electrons and influencing the charges on each other via a capacitance matrix.

A capacitance model of the system is defined as tuple $( \mathbb { C } , Z )$ where C is the capacitance matrix of the islands and Z is the vector of induced charges. We wish to establish a procedure to calculate a capacitance model for islands formed in our system.

Electron density $n ( x )$ is calculated using equation A1. Assume that the electron density is such that it is nonzero in certain regions (the islands) and zero between the islands $\left( \mathrm { F i g . 1 ( b ) } \right)$ . Z is then calculated by integrating the electron density over each island and is treated as the charge induced by the gate potentials in the capacitance model.

Let Q be the vector of charges on each island. Since the number of electrons on each island is assumed to be an integer, each element of Q is an integer times the electronic charge as opposed to elements of Z which can take arbitrary real values. The energy E of a charge configuration is given as:

$$
E = (\boldsymbol {Q} - \boldsymbol {Z}) ^ {T} \left(\frac {1}{2 \mathbb {C}}\right) ^ {- 1} (\boldsymbol {Q} - \boldsymbol {Z}) \tag {A5}
$$

$$
= \sum_ {i, j} E _ {i, j} (\boldsymbol {Q} - \boldsymbol {Z}) _ {i} (\boldsymbol {Q} - \boldsymbol {Z}) _ {j} \tag {A6}
$$

where $\begin{array} { r } { \left( \frac { 1 } { 2 \mathcal { C } } \right) _ { i , j } ^ { - 1 } = E _ { i , j } } \end{array}$

The energy calculated using this capacitance model is a manifestation of the kinetic energy of the Fermi sea in each island and the Coulomb interaction between the islands. We can use this correspondence to calculate the inverse capacitance matrix elements $E _ { i , j }$ using the Coulomb interaction potential $K ( x , x ^ { \prime } )$ and the electron density $n ( x )$ .

$$
E _ {i, j} = \frac {c _ {k} \delta_ {i , j} \int_ {i} n (x) ^ {2} d x + \int_ {i} \int_ {j} K (x , x ^ {\prime}) n (x) n (x ^ {\prime}) d x}{\left(\int_ {i} n (x) d x\right) \left(\int_ {j} n (x) d x\right)} \tag {A7}
$$

where $\delta _ { i , j }$ is the Kroneckor delta function and $c _ { k }$ is the coefficient which sets the scale for kinetic energy of the Fermi sea in each island. The integration subscript $\textstyle \int _ { i }$ denotes that the integration is to be performed only over the extent of the $i ^ { \mathrm { t h } }$ island. The denominator has been added to normalize with the total number of electrons on each island.

Determination of the elements $E _ { i , j }$ and $z$ amount to determination of the capacitance model for the islands.

# 3. Calculation of equilibrium charge distribution

Once the capacitance model has been calculated, we calculate energies of charge configurations closest to the induced charges values, Z, while constraining the number of electrons on each island to be integers. The equilibrium charge configuration is set to the one with the lowest energy.

# Appendix B: Markov Chain Model for mesoscopic transport in the semi-classical regime

In order to simulate transport characteristics and calculate a current given a potential profile $V ( x )$ , we introduce a Markov chain model. The actual physics included in this abstract model is calculated using the Thomas-Fermi approximation defined in appendix A. We assume that the contacts are kept under an infinitesimal bias so that the current flow can be modeled by an elastic tunneling Hamiltonian. The tunnel rates are estimated using the WKB approximation.

# 1. Graph definitions and construction

Consider a system with k islands where each island is assumed to have $N _ { d i }$ electrons $( i \ = \ 0 , 1 , 2 , . . . , k )$ . $N _ { d } = ( N _ { d 1 } , . . . , N _ { d k } )$ is referred to as a charge configuration of the islands. Let $G = ( V , E )$ be a directed graph. Each node $v \in V$ is a charge configuration as defined above. An edge exists between two nodes if they are connected by an electron tunneling event, either across adjacent islands or through the leads. We introduce an order p of the graph model which is defined such that $| N _ { d i } - \mathbb { Z } _ { i } | \leq p \quad \forall i = 1 , . . , k .$ .

Each graph is constructed in a breadth-first fashion from a starting node. The charge configuration Z as defined in appendix A is used as a starting node for the constructing the graph. All charge configurations which can be reached from this state by a single electron tunneling event are found and are added to the set of nodes. This procedure is recursively repeated for the new nodes added to the graph until no new nodes can be added under the order p of the graph model.

In this work, all Markov chain graphs are constructed to order $p = 1$ implying only single electron tunneling events. In future works, tunneling of multiple electrons, i.e., co-tunneling, can be incorporated by going to higher orders in the graph model.

![[assets/figures/references/kalantre-2019/aa34840efa54b73d392f4baf460cbedfa636b3ec45b40c0a4499a63345c6cdf5.jpg]]  
FIG. 12. An example of a Markov chain model for a double quantum dot

Fig. 12 shows an example of a simple state diagram for Markov chain in case of a double dot, with arrows representing the possible state transitions.

# 2. Calculation of edge weights

For two adjacent edges, the rate of going from one node to another is modeled as a product of two factors: a selection rule set by the capacitance model energies and a WKB tunnel rate. The rate for going from node 1 to 2 (arb. units) is given as:

$$
R _ {1 \rightarrow 2} = f _ {T} (E _ {2} - E _ {1}) \frac {p _ {W K B}}{\tau} \tag {B1}
$$

where $\begin{array} { r } { f _ { T } ( E ) = \frac { 1 } { 1 + \exp { \frac { E } { k T } } } } \end{array}$ 1+exp E is the Fermi function at temperature $T , E _ { 2 }$ and $E _ { 1 }$ are the capacitance model energies calculated for the charge configurations of nodes 2 and 1 respectively, pWKB is the WKB tunnel probability and $\begin{array} { r } { \tau = \frac { l _ { d o t } } { v _ { e } } } \end{array}$ , is the classical travel timescale inside a dot for an electron $( l _ { d o t }$ is the dot size and $v _ { e }$ is the classical electron velocity).

The WKB tunnel probability pWKB is calculated by treating the electron as a free particle of energy equal to the Fermi level $\mu _ { F }$ moving in a effective potential including inter-electron repulsion $V _ { e } ( x ) = \bar { V } ( x ) +$ $\textstyle \int K ( x , x ^ { \prime } ) n ( { \bar { x } } ^ { \prime } ) d x ^ { \prime }$ . The tunneling probability is then computed as follows:

$$
p _ {W K B} = \exp \left(- \int \frac {\sqrt {2 (V _ {e} (x) - \mu)}}{\hbar} d x\right) \tag {B2}
$$

where the range of integration extends over the barrier region adjacent to the two locations through which the electron travels. The classical travel time scale, τ , is calculated by treating the electron as a non-relativistic particle with kinetic energy $\mu _ { F }$ and calculating the time it would take for the electron to transverse the extent of each island.

# 3. Current calculation

Once the graph has been constructed and all edges have been assigned their requisite weights, calculation of the current proceeds by calculation of a stationary state of the Markov chain. Current I (in arbitrary units) is given as:

$$
I = \sum_ {(u, v), u \neq v} R _ {u \rightarrow v} p (u) - R _ {v \rightarrow u} p (v) \tag {B3}
$$

where the sum is over sets of nodes $( u , v )$ such that the transition from u to v corresponds to an electron transfer in a particular fixed direction (say left to right in the device) and $p ( u )$ is the stationary probability of being on a node u.

Calculation of the stationary state is equivalent to finding the nullspace of the Markov matrix of the graph. Numerically, we calculated it using singular value decomposition (SVD) of the matrix by means of the LAPACK routine gesdd from numpy.linalg library.

# Appendix C: Gate model

We assumed the top gates as cylindrical conductors of radius $r _ { 0 }$ kept at a height h from the electrons. This leads to a potential varying logarithmically with the distance from the gate. A set of 4 parameters define each gate $( V _ { 0 } , x _ { 0 } , r _ { 0 } , h )$ ). The profile for each gate is given as:

$$
V (x) = \frac {V _ {0}}{\log h / r _ {0}} \log \frac {\sqrt {(x - x _ {0}) ^ {2} + h ^ {2}}}{r _ {0}} \exp - \frac {| x - x _ {0} |}{\sigma_ {s c}} \tag {C1}
$$

where $x _ { 0 }$ defines the gate position, $V _ { 0 }$ sets the height of the potential profile at $x = x _ { 0 }$ . h controls the width of the profile. The term $e ^ { - \frac { | x - x _ { 0 } | } { \sigma _ { s c } } }$ has been added to take into account the screening due to the electron density present in the semiconductor. We used $\sigma _ { s c } = 2 0 $ nm which is equal to the separation between adjacent gates.

# Appendix D: Device Parameters

The following mean set of parameters was used for generating the datasets described in this work (for detailed description of the symbols see the appendix A and appendix C). They were randomly sampled from a Gaussian distribution with the mean values listed in the table. The standard deviation was set to 0.05 times the mean value. The idea behind generating the dataset in this fashion is to be able to train on all possible kinds of devices that one might expect in a lab as well as have the learning and tuning procedures robust against differences and imperfections across different devices.

For both set of devices, we used the common physical parameters, $K _ { 0 } = \mathrm { 1 0 m e V }$ (sets the strength of the Coulomb interaction), $\sigma = ~ 2$ nm (prevents blowup at $x = 0$ in the interaction), $g _ { 0 } = 0 . 5 \mathrm { e V } ^ { - 1 } \mathrm { n m } ^ { - 1 }$ (sets the scale for the density of states) and $c _ { k } = 1$ meV nm (kinetic term for the 2DEG). These values were chosen so that the quantum dots were in the few electron (1 to 10 electrons) regime.

# 1. 3-gate device dataset

The current and charge were calculated as a function of the plunger gate voltage, $V _ { P }$ , while the barrier gates, $( V _ { B 1 }$ and $\bar { V _ { B 2 } } )$ were held fixed. The total extent of the device was (−40, 40) nm.

<table><tr><td>Gate</td><td> $V_0$  (mV)</td><td> $x_0$  (nm)</td><td> $h$  (nm)</td><td> $r_0$  (nm)</td></tr><tr><td> $b1$ </td><td>-200</td><td>-20</td><td>50</td><td>5</td></tr><tr><td> $p$ </td><td>(0,400)</td><td>0</td><td>50</td><td>5</td></tr><tr><td> $b2$ </td><td>-200</td><td>20</td><td>50</td><td>5</td></tr></table>

# 2. 5-gate device dataset

The current and charge were calculated as a function of $( V _ { P 1 } , V _ { P 2 } )$ . The total extent of the device was (−60, 60) nm.

<table><tr><td>Gate</td><td> $V_0$  (mV)</td><td> $x_0$  (nm)</td><td>h (nm)</td><td> $r_0$  (nm)</td></tr><tr><td>b1</td><td>-200</td><td>-40</td><td>50</td><td>5</td></tr><tr><td>p1</td><td>(0,400)</td><td>-20</td><td>50</td><td>5</td></tr><tr><td>b2</td><td>-200</td><td>0</td><td>50</td><td>5</td></tr><tr><td>p2</td><td>(0,400)</td><td>20</td><td>50</td><td>5</td></tr><tr><td>b3</td><td>-200</td><td>40</td><td>50</td><td>5</td></tr></table>

# Appendix E: Computing environment and TensorFlow parameters

We used TensorFlow, a machine learning API developed by Google to build and train the neural networks described in this work [39]. tf.estimator and tf.layers modules were used to create the deep and convolutional networks respectively.

The authors acknowledge the University of Maryland supercomputing resources (http://hpcc.umd.edu) made available for conducting the research reported in this paper.

All machine learning computations were performed on a 2015 Macbook Air laptop with 1.8GHz dual-core Intel Core i5 processor and 4 GB of RAM. No explicit GPU was used in training the neural networks, though in future studies with higher dimensions, it might be a necessity.
