# Type I perturbation theory

We assume $\kappa^2\ll1$ in {eq}`oned:GL1`.

$$\frac{\psi''}{\kappa^2}-(a^2+\psi^2-1)\psi=0$$

Hence, we perturb $\psi=\sum_k\kappa^{2k}\psi_k$ and similarly for $a$. Since the equations have non-linear couplings, high orders become increasingly difficult to extract by hand. However, the lowest order is just $\psi_0''=0$, so there is a linear dependence on $x$. Combined with a natural boundary condition, $\psi_0'=0$ anywhere, we determine that $\psi_0$ is constant.

For a constant external field ($h'=0$) the magnetic field zero-order equation is (from {eq}`oned:GL2`):

$$-a_0''+\psi_0^2a_0=0$$

The solutions to this linear equation can be expressed in terms of exponentials or hyperbolic functions. We have boundary conditions that $b=a_0'=h_0$ with $h_0$ the applied field. For boundaries at $x=\pm d/2$ we have $a_0=h_0\sinh(\psi_0x)/\psi_0\cosh(\psi_0d/2)$ and $b_0=h_0\cosh(\psi_0x)/\cosh(\psi_0d/2)$.

These equations don't determine, as yet, the value of $\psi_0$ in terms of $h_0$. We need to consider the first order equation:

$$\psi_1''=(a_0^2+\psi_0^2-1)\psi_0$$

To get the constraint, we can either appeal to the apparatus of linear operator theory and the Fredholm alternative (as does {cite}`arovas`), or we observe that the first integral, giving $\psi_1'$ is zero at $\pm d/2$, and so:

$$\int_{-d/2}^{+d/2}(a_0^2+\psi_0^2-1)\psi_0dx=0$$(const)

We need $\int_0^x\sinh^2(\xi)d\xi=(\sinh(2x)-2x)/4$. We get a relation between $h_0$ and $\psi_0$:

$$h_0^2=2\frac{\psi_0^2(1-\psi_0^2)\cosh^2(\psi_0d/2)}{\sinh(\psi_0d)/\psi_0d-1}$$(h0psi)

(mag)=
## Magnetization

The magnetization is related as $b=h+4\pi m$.The average of $b$ over $d$ thickness, $\bar b$, is $h_0\tanh(\psi_0d/2)/(\psi_0d/2)$, so the average magnetization is:

$$\bar m=\frac {h_0}{4\pi}\left[\frac{\tanh(\psi_0d/2)}{\psi_0d/2}-1\right]$$

For large $\psi_0d/2$, $\bar m\rightarrow -h_0/4\pi$.

For small $\psi_0d/2$, the first term of the Taylor expansion of $\tanh$ cancels against the constant, but at next order, avoiding getting into Bernoulli numbers, $\bar m\approx -h_0(\psi_0d)^2/48\pi$.

Also we can apply similar reasoning to {eq}`h0psi` with $\cosh\approx1$, and $\sinh(x)\approx x+x^3/6$, to give $h_0^2\approx12(1-\psi_0^2)/d^2$, or

$$\psi_0^2=1-\frac{(h_0d)^2}{12}$$(smalld) 

allowing us to infer $\bar m\approx -(h_0d)^2(1-(h_0d)^2/12)/48\pi$.

## Gibbs energies

{cite}`arovas` gives the full energy difference from the normal state in the form:

$$G_s-G_n=\frac{H_c^2\lambda_L^3}{4\pi}\int_{-d/2}^{+d/2}dx\left[-\psi^2+\frac12\psi^4+(b-h_0)^2+\left|\left(\frac{\mathbf\nabla}\kappa+i\mathbf a\right)\psi\right|^2\right]$$

Using the constraint, {eq}`const`, enables the reduced form with constant $\psi_0$:

$$G_s-G_n=\frac{H_c^2\lambda_L^3}{4\pi}\int_{-d/2}^{+d/2}dx\left[-\frac12\psi_0^4+(b_0-h_0)^2\right]$$

So all that's left is to integrate $b_0=a_0'$ (already done for $\bar m$ calculation) and $b_0^2$:

$$\int_{-d/2}^{+d/2}b_0(x)dx=[a_0]_{-d/2}^{+d/2}=\frac{2h_0}{\psi_0}\tanh(\psi_0d/2)$$

$$\int_{-d/2}^{+d/2}(b_0(x))^2dx&=[a_0a_0']_{-d/2}^{+d/2}-\int_{-d/2}^{+d/2}a_0a_0''dx \\
&=h_0[a_0]_{-d/2}^{+d/2}-\int_{-d/2}^{+d/2}(\psi_0a_0)^2dx$$

But from the {eq}`const` constraint, we have:

$$\int_{-d/2}^{+d/2}a_0^2dx=(1-\psi_0^2)d$$

Assembling the bits:

$$G_s-G_n&=\frac{H_c^2\lambda_L^3}{4\pi}\int_{-d/2}^{+d/2}dx\left[-\frac12\psi_0^4+(b_0-h_0)^2\right] \\
&=\frac{H_c^2\lambda_L^3d}{4\pi}\left[-\psi_0^2+\frac12\psi_0^4+h_0^2\left(1-\frac{\tanh(\psi_0d/2)}{\psi_0d/2}\right)\right]$$(dgpert)

We must remember that $h_0$ and $\psi_0$ are connected by the constraint {eq}`h0psi`.

In the limit of large $d$, where $\psi_0=1-\epsilon$ with $\epsilon$ small, we can use $\cosh(x)\approx\sinh(x)\approx\exp(x)/2$:

$$h_0^2\approx2\epsilon d\implies \epsilon\approx\frac{h_0^2}{2d}$$

The $\epsilon$ small assumption requires small $h_0$, and large $d$. Also, it only provides a suitable approximation while $G_s<G_n$, and so up to $h_c$ where $G_s=G_n$. This gives a leading appoximation ($\tanh(x)\approx1$):

$$G_s-G_n\approx\frac{H_c^2\lambda_L^3d}{4\pi}\left[-\frac12+h_0^2\left(1-\frac{2}{d}\right)\right]$$

hence $h_c^2\approx1/2(1-2/d)\approx 1/2(1+2/d)$

The small $d$ limit from {eq}`smalld` and $\tanh(x)\approx x-x^3/3$ gives:

$$G_s-G_n&\approx\frac{H_c^2\lambda_L^3d}{4\pi}\left[-\frac12\psi_0^4\right]\\
&=\frac{H_c^2\lambda_L^3d}{4\pi}\left[-\frac12\left(1-\frac{(h_0d)^2}{12}\right)^2\right]$$

The critical field in this limit is given by $h_c^2\approx 12/d^2$, and the superconducting phase has $\psi_0\approx 0$, so the transition is second order.

If we just assume $\psi_0$ small, we have:

$$(h_0d)^2\approx (1-\psi_0^2)\left(12 + \frac{12 \psi_0^{2} d^{2}}{5} + \frac{81 \psi_0^{4} d^{4}}{700} + O\left(\psi_0^{6}\right)\right)$$

$$\frac{(h_0d)^2}{12}\approx 1 + \psi_0^{2} \left(\frac{d^{2}}{5} - 1\right) + \psi_0^{4} \cdot \left(\frac{27 d^{4}}{2800} - \frac{d^{2}}{5}\right) + O\left(\psi_0^{6}\right)$$

Inserting in 

$$G_s-G_n\approx \frac{H_c^2\lambda_L^3d}{4\pi}\left[\psi_0^{4} \left(\frac{d^{2}}{10} - \frac{1}{2}\right) + O\left(\psi_0^{6}\right)\right]$$

We note that once $d^2>5$, the difference becomes positive for $\psi_0\rightarrow0$, and hence the transition to the normal state must occur sooner, a first order transition.