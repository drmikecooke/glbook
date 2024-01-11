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

only has a $\theta$ component, and assuming $\mathbf h$ uniform:

$$-\frac{d^2 [\rho a_\theta]}{d \rho^2}+|\psi|^2 a_\theta-\frac i{2\kappa\rho}\left(\psi^*\frac{\partial\psi}{\partial\theta}-\psi\frac{\partial\psi^*}{\partial\theta}\right)=0$$