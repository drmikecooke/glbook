# glsp.py: code to solve GL BVP and plot psi and b.

import numpy as np
from scipy.integrate import solve_bvp
import matplotlib.pyplot as plt

def nat(h): # natural BC with applied magnetizing field h
  return 0,h

def inf(): # 'infinity' BC with b=da=0 f=1 at 'infinity'
  return 0,0

def nrm(r,h): # normal metal BC with parameter r.
  return (r,h)

def BC(Y,r,h): # boundary condition (based on two items: r metal parameter,applied field h)
  return [Y[1]-r*Y[0],Y[3]-h]

def glsol(kappa,A,B):
  a,ra,ha=A
  b,rb,hb=B
  nodes=5
  def dY(x,Y): # Y=[f,df,a,b=da]
    f,df,a,b = Y
    return np.vstack((df, kappa*kappa*f*(f**2+a**2-1),b,a*f**2))
  def bc(Ya, Yb):
    return np.array(BC(Ya,ra,ha)+BC(Yb,rb,hb))
  rng=[a, b]
  x = np.linspace(*rng, nodes)
  Y = np.vstack([np.ones(x.size),np.zeros((3, x.size))])
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