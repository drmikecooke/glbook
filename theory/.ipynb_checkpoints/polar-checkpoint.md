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

## Radial magnetic field

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

$$\alpha^2\left(\frac n{\kappa\rho}+a_\theta\right)=\frac{d}{d\rho}\left[\frac1\rho \frac{d [\rho a_\theta]}{d \rho}\right]=a_\theta''+\frac{a_\theta'}{\rho}-\frac{a_\theta}{\rho^2}$$