# Scaling the equations

We have two length scales:
```{math}
:label: lambda2
\frac1{\lambda_L^2}=8\pi K|\Psi|^2\left(\frac{e^*}{\hbar c}\right)^2
```

and $\xi=\sqrt{K/-a}$.

The magnetic field has associated the flux quantum $\phi_L=hc/e^*$ (determined almost by universal constants modulo the Cooper pairing theory) and the critical field $H_c=\sqrt{8\pi a^2/2b}$.

The four quantities $\lambda_L,\xi,\phi_L,H_c$ are likely objects that are easier to determine in experiment. The G-L free energy only contains three parameters, so one hopes the theoretical parameters can be associated with experiment. We also have $|\Psi|^2=-a/b$ in the uniformly superconducting state.

We can start by writing equation {eq}`lambda2` as:

$$\frac1{\lambda_L^2}=2 \xi^2H_c^2\left(\frac{2\pi}{\phi_L}\right)^2$$

This gives:

$$H_c=\frac{\phi_L}{\sqrt8\pi\xi\lambda_L}$$

The flux is the magnetic field integrated over an area, so the dimensions match.

{cite:p}`arovas` gives the following scaled quantities, which should ease numerical analysis:

$$\Psi=\sqrt{\frac{-a}b}\psi$$

$$\mathbf x=\lambda_L \mathbf r$$

$$\mathbf A=\sqrt2\lambda_LH_c\mathbf a$$

We also define $\kappa=\lambda_L/\xi$.

Now to rescale the basic free energy:

$$F[\Psi,\Psi^*,\mathbf A]=\int d^d\mathbf x \left[a|\Psi|^2+\frac 12b|\Psi|^4+K\left|\left(\mathbf\nabla+\frac{ie^*}{\hbar c}\mathbf A\right)\Psi\right|^2+\frac 1{8\pi}(\mathbf\nabla\times\mathbf A)^2\right]$$

in these terms:

$$F[\psi,\psi^*,\mathbf a]=\frac {H_c^2}{4\pi}\lambda_L^d\int d^d\mathbf r \left[-|\psi|^2+\frac 12|\psi|^4+\left|\left(\frac1{\kappa}\mathbf\nabla+i\mathbf a\right)\psi\right|^2+(\mathbf\nabla\times\mathbf a)^2\right]$$(scaling:free)

:::{admonition} Note on appropriate dimensions
:class: tip, dropdown
Since we have used vector calculus equations, and will continue thus, we probably don&rsquo;t have the freedom to move from $d=3$ without recasting geometrically using differential forms and Hodge duals etc.
:::
To get the Gibbs energy we subtract the density $\mathbf B\cdot\mathbf H/4\pi$ from the free energy:

$$G[\psi,\psi^*,\mathbf a]=\frac {H_c^2}{4\pi}\lambda_L^d\int d^d\mathbf r \left[-|\psi|^2+\frac 12|\psi|^4+\left|\left(\frac{\mathbf\nabla}{\kappa}+i\mathbf a\right)\psi\right|^2+(\mathbf\nabla\times\mathbf a)^2-2\mathbf h\cdot\mathbf\nabla\times\mathbf a\right]$$(scaling:gibbs)

where $\mathbf H=\sqrt2H_c\mathbf h$. Hence the scaled critical field is $h_c=1/\sqrt2$.

The {ref}`abbr:G-L` equations on minimizing $G$ with respect to $\psi,\mathbf a$ become:

$$\left(\frac{\nabla}{\kappa}+i\mathbf a\right)^2\psi+\psi-|\psi|^2\psi=0$$(scaling:GL1)

$$\nabla\times(\nabla\times\mathbf a-\mathbf h)+|\psi|^2\mathbf a-\frac i{2\kappa}(\psi^*\mathbf\nabla\psi-\psi\mathbf\nabla\psi^*)=0$$(scaling:GL2)

:::{admonition} Useful vector calculus
:class: tip, dropdown
Some identities to recast the differential operators through the divergence theorem away from the minimizing variations:

$$\mathbf\nabla\cdot (\mathbf A\times\mathbf B)=\mathbf\nabla\times\mathbf A\cdot\mathbf B-\mathbf\nabla\times\mathbf B\cdot\mathbf B$$

$$\mathbf\nabla\cdot(\psi\mathbf A)=\psi\mathbf\nabla\cdot\mathbf A+(\mathbf\nabla\psi)\cdot\mathbf A$$
:::

The $\partial\Omega$ boundary condition becomes:

$$\mathbf n\cdot(\mathbf\nabla+i\kappa\mathbf a)\psi|_{\partial\Omega}=0$$(scaling:BC)