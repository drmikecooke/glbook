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

which with the Amp&egrave;re-Maxwell law, and the vector calculus identity, $\mathbf\nabla\times\mathbf\nabla\times\mathbf B=-\nabla^2\mathbf B$, gives $\nabla^2\mathbf B=\mathbf B/\lambda_L^2$. In one dimension, this entails exponential damping to zero, the Meissner effect, of the magnetic field, $\mathbf B$, over the distance scale of the London penetration depth $\lambda_L$.

Comparing the London and the Ginzburg-Landau theories:

$$\frac1{\lambda_L^2}=8\pi K|\Psi|^2\left(\frac{e^*}{\hbar c}\right)^2$$

Since we are considering a steady state, current conservation is $\mathbf \nabla\cdot\mathbf j=0$, and we have also $\mathbf \nabla\cdot\mathbf A=0$. This reduces the first G-L equation to $a\Psi+b|\Psi|^2\Psi=0$. The parameter $b$ is positive, but  if superconductivity is a possibility, $a$ must be negative, otherwise $\Psi=0$ is the only solution. With superconductivity $|\Psi|^2=-a/b$ is the state contributing the lowest free energy density, $-a^2/2b$. The $\Psi=0$ state, of course, has zero free energy.

By considering a constant order parameter, one is choosing a gauge. A gauge tranformation would create an equivalent solution where the order parameter was constant in amplitude, but not phase. Also, the divergence of $\mathbf A$ would not be zero.

## Critical applied magnetic field

There is no possibility of coexistence of a magnetic field with a constant non-zero order parameter &mdash; the two fields have to interact and come to a non-constant compromise over a distance of order $\lambda_L$. The (free) energy density of a constant magnetic field is $\mathbf B^2/8\pi$.

Maxwell&rsquo;s equations in matter are traditionally posed in terms of applied fields $\mathbf{H,D}$, and local fields, $\mathbf{B,E}$, that are the response to the applied fields. Concentrating on the magnetic behaviour, the differential of the free energy density $f$ is composed as:

$$df=-sdT+\frac1{4\pi}\mathbf H\cdot d\mathbf B$$

We note this is posed in terms of differentials of a relatively easy factor to control and change (temperature, $T$) and one we can&rsquo;t (local magnetic field, $\mathbf B$).

To make life easier, we Legendre transform to the Gibbs free energy density: $g=f-\mathbf H\cdot \mathbf B/4\pi$:

$$dg=-sdT-\frac1{4\pi}\mathbf B\cdot d\mathbf H$$

The relation between $\mathbf B$ and $\mathbf H$ is $\mathbf B=\mathbf H+4\pi\mathbf M$, where $\mathbf M$ is the magnetisation density. In a superconductor, the Meissner effect gives $\mathbf B=0$, and $\mathbf H=-4\pi\mathbf M$, perfect diamagnetism. In the normal metal state without anti-/ferro-magnetism ($\mathbf M\approx0$), $\mathbf B\approx\mathbf H$.

The Gibbs free energy density for the superconducting state is $g_s=-a^2/2b$, since integrating $-\mathbf B\cdot d\mathbf H/4\pi$  up to $\mathbf H$ with $\mathbf B=0$ gives zero.

The normal metal Gibbs density has zero contribution from the $\Psi$ order parameter, but integrating $-\mathbf B\cdot d\mathbf H/4\pi$ with $\mathbf B=\mathbf H$ gives $g_n=-\mathbf H^2/8\pi$.

Magnetic materials favour states with the lowest Gibbs energy density. The critical field is $H_c=4\pi a^2/2b$, where $g_n=g_s$. Below this field the superconducting state is favoured, above it the normal state.

```{note}
I note some confusion in myself about these canonical calculations: while the applied field magnitude $H$ is below $H_c$, the $dH$ integration has $B=0$, since the material is in the superconducting state. But this is not taken account of in the &ldquo;normal&rdquo; calculation. Is it because these are only notional calculations? Will studying the G-L system help overcome this confusion? Is there some sort of hysteresis. Is there a transition region?
```