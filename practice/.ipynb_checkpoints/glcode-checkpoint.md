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

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
tags: [thebe-init, hide-cell]
---
# %load glsp.py
# glsp.py: code to solve GL BVP and plot psi and b.

import numpy as np
from scipy.integrate import solve_bvp
import matplotlib.pyplot as plt

def nat(x,h): # natural BC with applied magnetizing field h
  def BC(Y):
    return [Y[1],Y[3]-h]
  return (x,BC)

def inf(x): # 'infinity' BC with b=da=0 f=1 or 0 at x='infinity'
  def BC(Y):
    return [Y[1],Y[3]]
  return (x,BC)

def nrm(x,r,h): # normal metal BC with parameter r.
  def BC(Y):
    return [Y[1]-r*Y[0],Y[3]-h]
  return (x,BC)

def SCP(x): # superconducting psi=1,b proportional to exp(-x), for x going to +infinity.
  def BC(Y):
    return [Y[1]+2**(1/2)*kappa*(Y[0]-1),Y[3]+Y[2]]
  return (x,BC)

def NCM(x,h): # normal psi=0 with applied field h
  def BC(Y):
    r2=Y[2]**2+Y[0]**2-1
    return [Y[1]-kappa*r2**(1/2)*Y[0],Y[3]-h]
  return (x,BC)

def glsol(kappa,A,B):
  xa,AB=A
  xb,BB=B
  nodes=5
  def dY(x,Y): # Y=[f,df,a,b=da]
    f,df,a,b = Y
    return np.vstack((df, kappa*kappa*f*(f**2+a**2-1),b,a*f**2))
  def bc(Ya, Yb):
    return np.array(AB(Ya)+BB(Yb))
  rng=[xa, xb]
  X = np.linspace(*rng, nodes)
  Y0=[1 if x<0 else 1 for x in X]
  Y = np.vstack([Y0,np.zeros((3, X.size))])
  return solve_bvp(dY, bc, X, Y)

def glplot(kappa,A,B,tex):
  sol=glsol(kappa,A,B)
  x_plot = np.linspace(A[0],B[0], 100)
  y_plot = sol.sol(x_plot)[0] # f
  plt.plot(x_plot, y_plot,label=f"$\psi: {tex}$")
  y_plot = sol.sol(x_plot)[3] # b=da
  plt.plot(x_plot, y_plot,label=f"$b: {tex}$")
  if not sol.success:
    print(f"kappa={kappa},tex={tex}:",sol.message)
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

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

hc=1/2**(1/2)
for k in range(-2,3):
  kappa=2**k
  glplot(kappa,nat(0,hc),SCP(6),f"\kappa={kappa:.2f}") # natural boundary x=0,superconducting at x=6 (x 'large')
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

kappa=1/2**(1/2)
N=5
for k in range(N):
  h0=k/N
  glplot(kappa,nat(0,h0),SCP(6),f"h_0={h0:.2f}")
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
