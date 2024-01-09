---
jupytext:
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.16.0
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Basic GL bvp code



```{include} live.md
```

## Basic usage

The functions (glsol,glplot) defined above solve the GL BVP with boundary conditions given in the A and B parameters, and with kappa given by . . . well, kappa. The tex parameter in glplot allows some T{sub}`E`X labelling of the plots ($\psi,b$). The boundary conditions are defined in terms of a $x$ position and a function imposing conditions on the $\psi,\psi',a,b$ fields. We have (for now):

1. Natural boundary: $\psi'=0$, and $b=a'=h$.
2. Infinite boudary: $\psi'=0$, and $b=a'=0$.
3. Normal metal boundary: $\psi'=r\psi$, and $b=a'=h$, with some parameter $r$.
4. Superconducting boundary with b field decaying exponentially.
   
These functions are used in the code blocks below to model with a uniform applied field $h_0$ at $x=0$ of half infinite superconductor in region x&gt;0. We look at a simple situation with an applied field $h$ at $x=0$ being damped (hopefully) by the GL equations out to &lsquo;infinity&rsquo; ($x=6$ seems to give an appropriate result). We also set the $\psi$/f field to 1 as the initial guess, avoiding the zero solution to the equations. I hope the plots below demonstrate the sort of range of behaviors. A number of calls to gl adds extra $f,b$ plots.

```{code-cell} ipython3
---
editable: true
jp-MarkdownHeadingCollapsed: true
slideshow:
  slide_type: ''
---
# basic usage vacuum boundary at $x=0$. As published the applied field is critical.

import matplotlib.pyplot as plt
from glcd import glplot,nat,SC

hc=1/2**(1/2)
for k in range(-2,3):
  kappa=2**k
  glplot(kappa,nat(0,hc),SC(6),f"\kappa={kappa:.2f}") # natural boundary x=0,superconducting at x=6 (x 'large')
plt.xlabel("x")
plt.title(f"$h_0={hc:.2f}$")
plt.legend()
plt.show()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---
# basic usage vacuum boundary at $x=0$. The kappa value is at the critical point between types I and II behaviour.

import matplotlib.pyplot as plt
from glcd import glplot,nat,SC

kappa=1/2**(1/2)
N=5
for k in range(N):
  h0=k/N
  glplot(kappa,nat(0,h0),SC(6),f"h_0={h0:.2f}")
plt.xlabel("x")
plt.title(f"$\kappa={kappa:.2f}$")
plt.legend()
plt.show()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
