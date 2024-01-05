---
jupyter:
  jupytext:
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.16.0
  kernelspec:
    display_name: Python 3 (ipykernel)
    language: python
    name: python3
---

<!-- #region editable=true slideshow={"slide_type": ""} -->
# Basic code

```{include} live.md
```

We look at the system:

$$\frac{\psi''}{\kappa^2}-(a^2+\psi^2-1)\psi=0$$(glcode:GL1)

$$-a''+h'+\psi^2a=0$$(glcode:GL2)

with boundary conditions:

$$\psi'=r\psi$$(glcode:BC)

$$a'=h_0$$

We assume the applied field is uniform, so $h'=0$.

```{admonition} Is the boundary condition particularly relevant?
:class: tip, dropdown
Since the assumptions that $\psi$ is real, and that the gauge potential points perpendicular to $\hat{\mathbf x}$, automatically give $\mathbf n\cdot\mathbf j=0$, is the boundary condition necessary except to keep scipy happy?

Looking at {doc}`../theory/oned` we see that $\psi'=0$, along with $a'=h$, are &lsquo;natural&rsquo;boundary conditions.
```
<!-- #endregion -->

```python editable=false slideshow={"slide_type": ""} tags=["thebe-init", "hide-cell"]
# make sure scipy is available in thebe: numpy and matplotlib available by default
%pip install scipy
```

<!-- #region editable=true slideshow={"slide_type": ""} -->
## Module for GL plots

I would normally put the code below in a module to add Ginzburg-Landau plots. However, the Thebe code running site doesn't seem to allow me to point at the book's directories.
<!-- #endregion -->

```python editable=true slideshow={"slide_type": ""} tags=["thebe-init", "hide-cell"]
import numpy as np
from scipy.integrate import solve_bvp
import matplotlib.pyplot as plt

def glsol(kappa,A,B):
  a,ba,ra=A
  b,bb,rb=B
  nodes=5
  def dY(x,Y): # Y=[f,df,a,b=da]
    f,df,a,b = Y
    return np.vstack((df, kappa*kappa*f*(f**2+a**2-1),b,a*f**2))
  def bc(Ya, Yb):
    return np.array([Ya[1]-ra*Ya[0], Yb[1]-rb*Yb[0], Ya[3]-ba,Yb[3]-bb])
  rng=[a, b]
  x = np.linspace(*rng, nodes)
  Y = np.zeros((4, x.size))
  for k in range(x.size): # initialize f to 1
    Y[0,k]=1
  return solve_bvp(dY, bc, x, Y)

def glplot(kappa,A,B,tex):
  sol=glsol(kappa,A,B)
  if sol.success:
    x_plot = np.linspace(A[0],B[0], 100)
    y_plot = sol.sol(x_plot)[0] # f
    plt.plot(x_plot, y_plot,label=f"$\psi: {tex}$")
    y_plot = sol.sol(x_plot)[3] # b=da
    plt.plot(x_plot, y_plot,label=f"$b: {tex}$")
    return True
  raise ValueError(sol.message)
```

<!-- #region editable=true slideshow={"slide_type": ""} -->
## Basic usage

We look at a simple situation with an applied field $h$ at $x=0$ being damped (hopefully) by the GL equations out to &lsquo;infinity&rsquo; ($x=6$ seems to give an appropriate result). We also set the $\psi$/f field to 1 as the initial guess, avoiding the zero solution to the equations.
<!-- #endregion -->

```python editable=true slideshow={"slide_type": ""}
# basic usage vacuum boundary at $x=0$.

h0=1/2**(1/2)
a,ba,ra=0,h0,0
b,bb,rb=6,0,0

for k in range(-2,3):
  kappa=2**k
  glplot(kappa,(a,ba,ra),(b,bb,rb),f"\kappa={kappa:.2f}")
plt.xlabel("x")
plt.title(f"$h_0={h0:.2f}$")
plt.legend()
plt.show()
```

```python editable=true slideshow={"slide_type": ""}
# basic usage vacuum boundary at $x=0$.

kappa=1/2**(1/2)
b,bb,rb=6,0,0
N=5
for k in range(N):
  h0=k/N
  glplot(kappa,(0,h0,0),(b,bb,rb),f"h_0={h0:.2f}")
plt.xlabel("x")
plt.title(f"$\kappa={kappa:.2f}$")
plt.legend()
plt.show()
```

```python editable=true slideshow={"slide_type": ""}

```
