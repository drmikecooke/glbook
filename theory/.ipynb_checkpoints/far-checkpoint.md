# Far out

We want to consider here the asymptotic regions where either the scaled order parameter $\psi$ is either fully superconducting, $|\psi|^2=1$, or normal, $\psi=0$.

## 1D

In the 1D problem, covering the semi-infinite ($x\in(0,\infty)$) and infinite problems ($x\in(-\infty,\infty)$), we assume a uniform applied field ($h'=0$). This is a sort of warm up for sorting out the errors in the vortex solution.

### a

The gauge potential GL equation is:

$$-a''+\psi^2a=0$$(a)

In a fully superconducting region $a$ becomes exponential, and in the asymptotic region we expect the magnetic field $b=da/dx$ to tend to zero, and we have to choose the gauge potential that also tends to zero. If the superconducting region is at $+\infty$, we therefore have $a\propto\exp(-x)$.

In a normal region with $\psi=0$ the equation {eq}`a` becomes $a''=0$, and the gauge potential linear in $x$, with slope the applied field $h=da$.

### $\psi$

We need to consider how the order parameter, $\psi$, deviates from superconductivity or normality. 

$$\frac{\psi''}{\kappa^2}-(a^2+\psi^2-1)\psi=0$$

For $a=0$ this becomes:

$$\frac{\psi''}{\kappa^2}-(\psi^2-1)\psi=0$$

Multiplying by $\psi'$, one can reduce to a separable first-order differential equation, like in going from Newton's equations to energy conservation. In my head, I think I see an elliptic integral, which presumably could be inverted to give an elliptic function solution (with imaginary argument?)?

For our purposes, it is better to linearize around 1, with $\delta\psi=\psi-1$:

$$\frac{\delta\psi''}{\kappa^2}-2\psi\approx0$$

This gives again exponential behaviour, but dependent on the $\kappa$ scale, $\delta\psi\propto\exp(-\sqrt2\kappa x)$. We also expect $\delta\psi$ to be negative so that $\psi\rightarrow1$ from below. There is an equivalent solution with $\psi\rightarrow-1$ from above, related by a global gauge transformation, so $a$ would be unaffected.

The normal region is more ticklish, since the $a^2$ term would eventually dominate the behaviour. A WKB type approach might be useful, but I will leave off for now.