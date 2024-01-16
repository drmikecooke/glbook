# Polar exploration

The polar coordinates defined by $(x,y)=(\rho\cos\theta,\rho\sin\theta)$ allow us to explore two-dimensional problems. With the magnetic field in the $z$-direction, we hope to find useful solutions exhibiting cylindrical symmetry with the $\psi,\mathbf a$ fields not depending on $z$.

First off we have:

$$b_z=(\mathbf{\nabla}\times\mathbf a)_z=\frac{\partial a_y}{\partial x}-\frac{\partial a_x}{\partial y}$$

If we define normalized orthgonal unit vectors (ignoring the $z$ coordinate):

$$\hat{\mathbf e}_\rho=(\cos\theta,\sin\theta)$$

$$\hat{\mathbf e}_\theta=(-\sin\theta,\cos\theta)$$

We define components of the $a$ field in this basis: $a_\rho=\mathbf a\cdot\hat{\mathbf e}_\rho$, $a_\theta=\mathbf a\cdot\hat{\mathbf e}_\theta$, so $a_x=a_\rho\cos\theta-a_\theta\sin\theta$ and $a_y=a_\rho\sin\theta+a_\theta\cos\theta$.

We also want to partially differentiate with respect to polar coordination:

$$\frac\partial{\partial\rho}=\cos\theta\frac\partial{\partial x}+\sin\theta\frac\partial{\partial y}$$

$$\frac\partial{\partial\theta}=-\rho\sin\theta\frac\partial{\partial x}+\rho\cos\theta\frac\partial{\partial y}$$

or inverting:

$$\frac\partial{\partial x}=\frac1{\rho}\left[\rho\cos\theta\frac\partial{\partial\rho}-\sin\theta\frac\partial{\partial\theta}\right]$$

$$\frac\partial{\partial y}=\frac1{\rho}\left[\rho\sin\theta\frac\partial{\partial\rho}+\cos\theta\frac\partial{\partial\theta}\right]$$

Applying these to the defined coordinates:

$$b_z&=\frac1{\rho}\left[\rho\frac{\partial a_\theta}{\partial\rho}+a_\theta-\frac{\partial a_\rho}{\partial\theta}\right] \\
&=\frac1{\rho}\left[\frac{\partial[\rho a_\theta]}{\partial\rho}-\frac{\partial a_\rho}{\partial\theta}\right] $$(polarb)

This formula can be understood from the point of view of Stokes theorem applied to a quasi-rectangle bounded by lines $\rho,\rho+d\rho,\theta,\theta+d\theta$. The flux through the 'rectangle', $b_z\rho d\rho d\theta$, is equal to the line integral of $\mathbf a\cdot d\mathbf r$ around the perimeter in a counter-clockwise direction:

$$[a_\rho(\bar\rho,\theta)-a_\rho(\bar\rho,\theta+d\theta)]d\rho+[(\rho+d\rho)a_\theta(\rho+d\rho,\bar\theta)-\rho a_\theta(\rho,\bar\theta)]d\theta$$

The bars indicate some sort of average is being taken (i.e. not a rigorous determination) as representative. Assuming the quasi-rectangle is small, this is of order:

$$\left[\frac{\partial[\rho a_\theta]}{\partial\rho}-\frac{\partial a_\rho}{\partial\theta}\right]d\rho d\theta$$

Comparing with the flux, we get {eq}`polarb`.

## Magnetic field in a vortex

If we assume $a_\rho=0$ and $a_\theta$ is a function of $\rho$, we get a radially dependent magnetic field $b$, which can model flux tubes in superconducting material.

Now, the second GL equation:

$$\nabla\times(\nabla\times\mathbf a-\mathbf h)+|\psi|^2\mathbf a-\frac i{2\kappa}(\psi^*\mathbf\nabla\psi-\psi\mathbf\nabla\psi^*)=0$$

has a $\theta$ component, assuming $\mathbf h$ uniform:

$$-\frac{d}{d\rho}\left[\frac1\rho \frac{d [\rho a_\theta]}{d \rho}\right]+|\psi|^2 a_\theta-\frac i{2\kappa\rho}\left(\psi^*\frac{\partial\psi}{\partial\theta}-\psi\frac{\partial\psi^*}{\partial\theta}\right)=0$$

The $\rho$ component just involves $\psi$:

$$-\frac i{2\kappa}\left(\psi^*\frac{\partial\psi}{\partial\rho}-\psi\frac{\partial\psi^*}{\partial\rho}\right)=0$$

We are here _not_ assuming that $\psi$ is real. Let it be separated into amplitude and phase, $\psi=\alpha\exp(i\phi)$. Then:

$$-\frac i{2\kappa}(\psi^*\mathbf\nabla\psi-\psi\mathbf\nabla\psi^*)=\frac{\alpha^2}{\kappa}\mathbf\nabla\phi$$

Hence:

$$\frac{\partial\phi}{\partial\rho}=0$$.

So $\phi(\theta)$. But:

$$\alpha^2\frac{d\phi}{d\theta}=\kappa\rho\left[\frac{d}{d\rho}\left[\frac1\rho \frac{d [\rho a_\theta]}{d \rho}\right]-\alpha^2 a_\theta\right]$$

Since the left hand side is a function only of $\theta$, and the right only of $\rho$, it must be a constant $\nu$. We thus have $\psi=\alpha\exp(i\nu\theta)$, dropping a constant term in the exponent, which can be removed by a global gauge transformation. We expect $\psi$ to be single valued, which restricts $\nu$ to be an integer $n\in\mathbb Z$.

The equation with this new information can be written:

$$\alpha^2\left(\frac n{\kappa\rho}+a_\theta\right)=\frac{d}{d\rho}\left[\frac1\rho \frac{d [\rho a_\theta]}{d \rho}\right]=a_\theta''+\frac{a_\theta'}{\rho}-\frac{a_\theta}{\rho^2}$$(polar:GL2)

## Energy

The Gibbs energy is:

$$G[\psi,\psi^*,\mathbf a]=\frac {H_c^2}{4\pi}\lambda_L^d\int d^d\mathbf r \left[-|\psi|^2+\frac 12|\psi|^4+\left|\left(\frac{\mathbf\nabla}{\kappa}+i\mathbf a\right)\psi\right|^2+(\mathbf\nabla\times\mathbf a)^2-2\mathbf h\cdot\mathbf\nabla\times\mathbf a\right]$$

We already have the relevant $z$ component of $\nabla\times\mathbf a$ as:

$$b_z=\frac1\rho\frac{d[\rho a_\theta]}{d\rho}=a_\theta'+\frac {a_\theta}\rho$$

We have $\psi=\alpha\exp(in\theta)$. We now need the radial and angular dependence of the gradient:

$$\hat{\mathbf e}_\rho\cdot\mathbf\nabla=\frac\partial{\partial\rho}$$

$$\hat{\mathbf e}_\theta\cdot\mathbf\nabla=\frac1\rho\frac\partial{\partial\theta}$$

Hence:

$$\left(\frac{\mathbf\nabla}{\kappa}+i\mathbf a\right)\psi=\exp(in\theta)\left[\hat{\mathbf e}_\rho\frac{\alpha'}\kappa+i\hat{\mathbf e}_\theta\alpha\left(a_\theta+\frac n{\kappa\rho}\right)\right]$$

The Gibbs energy per unit length in the $z$ direction becomes:

$$G[\alpha,a_\theta]=\frac {H_c^2}{4\pi}\lambda_L^d\int 2\pi\rho d\rho \left[-\alpha^2+\frac 12\alpha^4+\left(\frac{\alpha'}\kappa\right)^2+\alpha^2\left(a_\theta+\frac n{\kappa\rho}\right)^2+\left(\frac1\rho\frac{d[\rho a_\theta]}{d\rho}\right)^2-\frac{2h}\rho\frac{d[\rho a_\theta]}{d\rho}\right]$$

Varying the $a_\theta$ field, remembering the $2\pi\rho$ factor, and assuming $h$ constant, we get the equation {eq}`polar:GL2`.

The $\alpha$ variation gives:

$$\alpha''+\frac{\alpha'}\rho=\left(\alpha^2+\left(a_\theta+\frac n{\kappa\rho}\right)^2-1\right)\alpha$$(polar:GL1)

For solutions of the GL equations, the free energy becomes, after a partial integration of the $\alpha'$-dependent term and substitution of $\alpha''$:

$$G[\alpha,a_\theta]=\frac {H_c^2}{4\pi}\lambda_L^d\int 2\pi\rho d\rho \left[-\frac 12\alpha^4+b_z^2-2hb_z\right]$$

## Flux quantization

The magnetic flux throuugh the vortex is:

$$\phi_n&=\int_0^\infty 2\pi\rho d\rho b_z\\
&=\int_0^\infty 2\pi\ d\rho \frac{d[\rho a_\theta]}{d\rho}\\
&=[2\pi\rho a_\theta]^\infty_0$$

This result is essentially Stokes' theorem. Unless $a_\theta$ is singlular as $\rho\rightarrow0$, the contribution of the lower limit is zero. For now, we will assume this is not the case. In the far region we expect $\alpha\rightarrow1$, and considering {eq}`polar:GL1`, we derive:

$$\left(a_\theta+\frac n{\kappa\rho}\right)^2\alpha\rightarrow\left(a_\theta+\frac n{\kappa\rho}\right)^2\rightarrow0$$

since the derivatives should also tend to zero. Hence $\phi_n=-2\pi n/\kappa$ is quantized in units of $2pi/\kappa$. Hopefully a bit of descaling will get us proper flux quantization? 

$$\mathbf x=\lambda_L \mathbf r$$

$$\mathbf A=\sqrt2\lambda_LH_c\mathbf a$$

so, descaled: $\Phi_n=-\sqrt8\lambda_L^2H_c\pi n/\kappa$. But:

$$H_c=\frac{\phi_L}{\sqrt8\pi\xi\lambda_L}$$

We also need to remember: $\kappa=\lambda_L/\xi$ and  the flux quantum $\phi_L=hc/e^*$. Hence $\Phi_n=-n\phi_L$. Phew! We could have made the dependence positive on $n$ if we had chosen the opposite phase of the order parameter.