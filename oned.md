# One dimensional problems

We assume the dimension is Cartesian, $x$ say; also, that the order parameter, $\psi$, can be chosen real by a gauge transformation. Since the gauge potential, $\mathbf a$, only varies with $x$, the curl, $\mathbf\nabla\times\mathbf a=\mathbf b$, must be perpendicular to $\hat{\mathbf x}$.

The second scaled G-L equation {eq}`scaling:GL2`:

$$\nabla\times(\nabla\times\mathbf a-\mathbf h)+|\psi|^2\mathbf a-\frac i{2\kappa}(\psi^*\mathbf\nabla\psi-\psi\mathbf\nabla\psi^*)=0$$

with real $\psi$ reduces to:

$$\nabla\times(\nabla\times\mathbf a-\mathbf h)+|\psi|^2\mathbf a=0$$(GL2)

Where $\psi$ is non-zero, and $\mathbf a,\mathbf h$ varying only in the $\hat{\mathbf x}$ direction, we find that $\mathbf a$ is also perpendicular to $\hat{\mathbf x}$.

We could try maintaining a two-dimensional gauge potential (would this be consistent?), but for now we will assume that $\mathbf a=a\hat{\mathbf y}$, and that $\mathbf h=h\hat{\mathbf z}$. Using $'$ to represent $d/dx$, equation {eq}`GL2` becomes:

$$-a''+h'+\psi^2a=0$$

We note that:

$$\mathbf b=b\hat{\mathbf z}=a'\hat{\mathbf z}=\mathbf\nabla\times\mathbf a\implies b=a'$$

With these assumptions, {eq}`scaling:GL1` becomes:

$$\frac{\psi''}{\kappa^2}-(a^2+\psi^2-1)\psi=0$$

Boundaries are such that $\mathbf n=\pm\hat{\mathbf x}$. The vacuum boundary condition {eq}`scaling:BC` is just a differential condition:

$$\psi'=0$$

For a boundary with a normal metal, one might consider:

$$\psi'=r\psi$$

## Energy considerations

The free energy per unit area from {eq}`scaling:free`:

$$F_1[\psi,\psi^*,\mathbf a]=\frac {H_c^2}{4\pi}\lambda_L^d\int d^d\mathbf r \left[-\psi^2+\frac 12\psi^4+\left(\frac{\psi'}{\kappa}\right)^2+(a\psi)^2+(a')^2\right]$$

and the Gibbs version from {eq}`scaling:gibbs`:

$$G_1[\psi,\psi^*,\mathbf a]=\frac {H_c^2}{4\pi}\lambda_L^d\int d^d\mathbf r \left[-\psi^2+\frac 12\psi^4+\left(\frac{\psi'}{\kappa}\right)^2+(a\psi)^2+(a')^2-2ha'\right]$$

A &lsquo;natural&rsquo; boundary condition is $\psi'=0$, arising from the partial integration of the $\psi$ variation of the $\psi'$ term. The natural boundary condition for the $a$ variation is $a'=h$.
