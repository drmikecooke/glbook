# Scaling the Ginzburg-Landau equations

A gauge-invariant free energy with order parameter $\Psi\propto \left<\psi_\downarrow(\mathbf x)\psi_\uparrow(\mathbf x)\right>$ has the form:

$$F[\Psi,\Psi^*]=\int d^d\mathbf x \left[a|\Psi|^2+\frac 12b|\Psi|^4+K\left|\left(\mathbf\nabla+\frac{ie^*}{\hbar c}\mathbf A\right)\Psi\right|^2+\frac 1{8\pi}(\mathbf\nabla\times\mathbf A)^2\right]$$

The _charge_ of the pairs in the condensate is $q=-e^*=-2e$. All of the parts are assumed to be time independent, so $\mathbf E=0$ &mdash; no electric field.

Gauge invariance is invariance under:

$$\Psi\rightarrow\Psi e^{i\alpha(\mathbf x)},\mathbf A\rightarrow\mathbf A-\frac{\hbar c}{e^*}\nabla \alpha$$

so with $\mathbf D=\mathbf\nabla+\frac{ie^*}{\hbar c}\mathbf A$, $\mathbf D\Psi\rightarrow e^{i\alpha(\mathbf x)}\mathbf D\Psi$, so the $K$ term is invariant. The other terms are obviously invariant, given that $\nabla\times\nabla\alpha=0$ for _any_ scalar function $\alpha$.

The _Ginzburg-Landau (G-L) equations_ are derived by minimizing the free energy:

$$\frac{\delta F}{\delta\Psi^*}=a\Psi+b|\Psi|^2\Psi-KD^2\Psi=0$$

$$\frac{\delta F}{\delta\mathbf A}=\frac{2Ke^*}{\hbar c}\left[\frac1{2i}(\Psi^*\mathbf\nabla\Psi-\Psi\mathbf\nabla\Psi^*)+\frac{e^*}{\hbar c}|\Psi|^2\mathbf A\right]+\frac1{4\pi}\mathbf\nabla\times\mathbf B=0$$

with $\mathbf B=\nabla\times\mathbf A$. The last equation, combined with the Amp&egrave;re-Maxwell law $\mathbf\nabla\times\mathbf B=4\pi\mathbf j/c$ gives:

$$\mathbf j=-\frac{2Ke^*}{\hbar }\left[\frac1{2i}(\Psi^*\mathbf\nabla\Psi-\Psi\mathbf\nabla\Psi^*)+\frac{e^*}{\hbar c}|\Psi|^2\mathbf A\right]$$

## Constant order parameter $\Psi$

The easiest part is:

$$\mathbf j=-\frac{2Ke^{*2}}{\hbar^2c }|\Psi|^2\mathbf A$$

In the London theory we have:

$$\mathbf j_s=-\frac c{4\pi \lambda_L^2}\mathbf A$$

which with the Amp&egrave;re-Maxwell law, and the vector calculus identity, $\mathbf\nabla\times\mathbf\nabla\times\mathbf B=-\nabla^2\mathbf B$, gives $\nabla^2\mathbf B=\mathbf B/\lambda_L^2$. In one dimension, this entails exponential damping of the magnetic field, $\mathbf B$, over the distance scale of the London penetration depth $\lambda_L$, the Meissner effect.

Comparing the London and the Ginzburg-Landau theories:

$$\frac1{\lambda_L^2}=8\pi K|\Psi|^2\left(\frac{e^*}{\hbar c}\right)^2$$

Since we are considering a steady state, current conservation is $\mathbf \nabla\cdot\mathbf j=0$, and we have also $\mathbf \nabla\cdot\mathbf A=0$.

This reduces the first G-L equation to $a\Psi+b|\Psi|^2\Psi=0$. The parameter $b$ is positive, but  if superconductivity is a possibility, $a$ must be negative, otherwise $\Psi=0$ is the only solution. With superconductivity $|\Psi|^2=-a/b$.