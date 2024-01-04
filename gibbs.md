---
jupytext:
  formats: md:myst,ipynb
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

# Gibbs free energy

## Critical applied magnetic field

There is no possibility of coexistence of a magnetic field with a constant non-zero order parameter &mdash; the two fields have to interact and come to a non-constant compromise over a distance of order $\lambda_L$. The (free) energy density of a constant magnetic field is $\mathbf B^2/8\pi$.

Maxwell&rsquo;s equations in matter are traditionally posed in terms of applied fields $\mathbf{H,D}$ (magnetizing, displacement), and local/vacuum magnetic and  electric fields, $\mathbf{B,E}$, that are the response to the applied fields. Concentrating on the magnetic behaviour, the differential of the free energy density $f$ is composed as:

$$df=-sdT+\frac1{4\pi}\mathbf H\cdot d\mathbf B$$

We note this is posed in terms of differentials of a relatively easy factor to control and change (temperature, $T$) and one we can&rsquo;t (local magnetic field, $\mathbf B$).

To make life easier, we Legendre transform to the Gibbs free energy density: $g=f-\mathbf H\cdot \mathbf B/4\pi$:

$$dg=-sdT-\frac1{4\pi}\mathbf B\cdot d\mathbf H$$

The relation between $\mathbf B$ and $\mathbf H$ is $\mathbf B=\mathbf H+4\pi\mathbf M$, where $\mathbf M$ is the magnetisation density. In a superconductor, the Meissner effect gives $\mathbf B=0$, and $\mathbf H=-4\pi\mathbf M$, perfect diamagnetism. In the normal metal state without anti-/ferro-magnetism ($\mathbf M\approx0$), $\mathbf B\approx\mathbf H$.

The Gibbs free energy density for the superconducting state is $g_s=-a^2/2b$, since integrating $-\mathbf B\cdot d\mathbf H/4\pi$  up to $\mathbf H$ with $\mathbf B=0$ gives zero.

The normal metal Gibbs density has zero contribution from the $\Psi$ order parameter, but integrating $-\mathbf B\cdot d\mathbf H/4\pi$ with $\mathbf B=\mathbf H$ gives $g_n=-\mathbf H^2/8\pi$.

```{note}
Isn&rsquo;t another way to get this, assuming $\Psi=0$: the G-L free energy $f_n=\mathbf B^2/8\pi=\mathbf H^2/8\pi$ so $g_n=f_n-\mathbf H\cdot\mathbf B/4\pi=-\mathbf H^2/8\pi$?
```

Magnetic materials favour states with the lowest Gibbs energy density. The critical field is $H_c=\sqrt{8\pi a^2/2b}$, where $g_n=g_s$. Below this field the superconducting state is favoured, above it the normal state.

```{note}
I note some confusion in myself about these canonical calculations: while the applied field magnitude $H$ is below $H_c$, the $dH$ integration to my mind has $B=0$, since the material is in the superconducting state. But this is not taken account of in the &ldquo;normal&rdquo; calculation above. Is it because these are only notional calculations? Will studying the G-L system help overcome this confusion? Is there some sort of hysteresis? Is there a transition region? Also the free energy is stripped down to just cover magnetic properties &mdash; there is presumably things going on that change with temperature: vibrations and so on. The $a$ and $b$ parameters are also temperature dependent, of course.
```


Since it is commonly referred to in Arovas (in various forms) we have:

$$g_s-g_n=-a^2/2b+\mathbf H^2/8\pi$$

Once the diffence becomes positive, the phase chooses the normal metal state as having lower Gibbs free energy.

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

import matplotlib.pyplot as plt
import numpy as np

a2_b=2
H_c=(8*np.pi*a2_b)**(1/2)
H=np.linspace(0,2*H_c,40)
Dg_sn=-a2_b+H**2/(8*np.pi)
fig,ax=plt.subplots()
ax.plot(H,Dg_sn)
ax.plot()
plt.title(f"$H_c={H_c:.2f}$")
ymin, ymax = ax.get_ylim()
ax.vlines(H_c,ymin,0)
xmin, xmax = ax.get_xlim()
ax.hlines(0,xmin,H_c)
ax.set_ylim(ymin, ymax)
ax.set_xlim(xmin, xmax)
plt.xlabel("H")
plt.ylabel("$g_s-g_n$")
plt.show()
```

```{code-cell} ipython3
---
editable: true
slideshow:
  slide_type: ''
---

```
