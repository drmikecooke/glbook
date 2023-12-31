# Current

We remember that:

$$\mathbf j=-\frac{2Ke^*}{\hbar }\left[\frac1{2i}(\Psi^*\mathbf\nabla\Psi-\Psi\mathbf\nabla\Psi^*)+\frac{e^*}{\hbar c}|\Psi|^2\mathbf A\right]$$

This can be rewritten:

$$\mathbf j=-\frac{2Ke^*}{\hbar }\text {Re}\left[\Psi^*\left(\frac1i\mathbf\nabla\Psi+\frac{e^*}{\hbar c}\mathbf A\Psi\right)\right]$$

This leads to the suggestion of a condition:

$$\mathbf n\cdot\left(\frac{\hbar}i\nabla+\frac{e^*}c\mathbf A\right)\Psi=ir\Psi$$

as useful for a boundary where one would like $\mathbf n\cdot\mathbf j=0$. The value $r=0$ would be appropriate for a superconductor boundary condition with a vacuum. Non-zero values could be relevant for boundaries with normal metals.

:::{admonition} Some disagreements with {cite:p}`arovas`!
:class: tip, dropdown
The critical current section of {cite:p}`arovas` has some problems for me. Arovas seems to continue with the constant $\Psi_0$ assumption, but includes a (constant?) gauge potential $\mathbf A$ to give a free energy density:

$$f=a|\Psi_0|^2+\frac12 b|\Psi_0|^4+K\left(\frac{e^*}{\hbar c}\right)^2\mathbf A^2|\Psi_0|^2$$

Minimizing with respect to $|\Psi_0|$ gives:

$$|\Psi_0|^2=-\frac{a+K\left(\frac{e^*}{\hbar c}\right)^2\mathbf A^2}{b}$$

We are assuming that the material is superconducting, so $a<0$.

What I don't understand at this point is that Arovas puts this into the current formula to get:

$$\mathbf j=\left(\frac{2Ke^{*2}}{\hbar^2c }\right)\frac{a+K\left(\frac{e^*}{\hbar c}\right)^2\mathbf A^2}{b}\mathbf A$$

But isn&rsquo;t this current zero because the magnetic field is zero and hence $\mathbf j=c\mathbf\nabla\times\mathbf B/4\pi=0$? Hence the only consistent value for $\mathbf A$ in this gauge is zero? The same result comes from minimizing $f$ with respect to $\mathbf A$, does it not?

Instead Arovas &ldquo;extremizes&rdquo; the current with respect to the magnitude $A$. This occurs when:

```{math}
:label: A2
A^2=-\frac a{3K\left(\frac{e^*}{\hbar c}\right)^2}
```

:class:dropdown
Arovas&rsquo; &ldquo;critical current&rdquo; is:

$$j_c=\frac{4}{3\sqrt3}\frac{e^{*}}{\hbar}\frac{K^{1/2}(-a)^{3/2}}b$$

I disagree also with {cite:p}`arovas`&rsquo;s factor, which I think derives from an incorrect substitution of the final $A$ which is a square-root, but cancelling the squared term in equation {eq}`A2` as if it is not to be square-rooted. Some dimensional analysis would sort this aspect out, but I am not sure it is worth the effort!

:::