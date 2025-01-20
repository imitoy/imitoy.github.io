题目：

已知曲线 $C: \dfrac{x^2}{4}+\dfrac{y^2}{3}=1$ ，过点 $P(0, 1)$ 的直线 $l$ 与 $C$ 交与$M$ 、 $N$ 两点，点 $A(1, 1)$ ，求$S_{△AMN}$ 的取值范围。

首先一定是要**设方程联立**：

设直线 $l: y=kx+1$ 

联立 

$\begin{equation}\left\{\begin{aligned}y=kx+1 \\\dfrac{x^2}{4}+\dfrac{y^2}{3}=1\end{aligned}\right.\end{equation}$


得到 $(3+4k^2)x^2+8kx-8=0$ 

所以 $x_1+x_2=\dfrac{-8k}{3+4k^2}$ ， $x_1x_2=\dfrac{-8}{3+4k^2}$  

所以 $A$ 到 $MN$ 的距离 $d=\dfrac{k}{\sqrt{k^2+1}}$ 

$MN$ 的长度 $\begin{align}|MN|&=\sqrt{k^2+1}\sqrt{(x_1+x_2)^2-4x_1x_2}\\&=\sqrt{k^2+1}·\dfrac{4\sqrt{12k^2+6}}{3+4k^2}\end{align}$ 
则 
$\begin{align}S_{△AMN}&=\dfrac{1}{2}d|MN|\\&=2\sqrt{6}·\dfrac{k\sqrt{2k^2+1}}{3+4k^2}\end{align}$ 

接下来就可以配凑了

把下面平方，都放到根号下：

$\begin{align}\dfrac{k\sqrt{2k^2+1}}{3+4k^2}=\sqrt{\dfrac{2k^4+k^2}{16k^4+24k^2+9}}\end{align}$ 

根据 $4$ 次方配，在式子的上面先乘 $8$ ，得到$\sqrt{\dfrac{16k^4+8k^2}{16k^4+24k^2+9}}$ 

然后一步步加减把上面和下面约掉：

$\begin{align}&=\sqrt{\dfrac{16k^4+8k^2}{16k^4+24k^2+9}}\\&=\sqrt{\dfrac{16k^4+24k^2+9-16k^2-9}{16k^4+24k^2+9}}\\&=\sqrt{\dfrac{16k^4+24k^2+9}{16k^4+24k^2+9}-\dfrac{16k^2+9}{(4k^2-3)^2}}\\&=\sqrt{1-\dfrac{16k^2+12-3}{(4k^2+3)^2}}\\&=\sqrt{\dfrac{3}{(4k^2+3)^2}-\dfrac{4}{4k^2+3}+1}\end{align}$

上面乘了 $8$ ，所以最后算的时候把 $2\sqrt{2}$ 挪到根号里

$\begin{align}S_{△AMN}&=2\sqrt{6}·\dfrac{k\sqrt{2k^2+1}}{3+4k^2}\\&=\sqrt{3}·\sqrt{\dfrac{16k^4+8k^2}{16k^4+24k^2+9}}\\&=\sqrt{3}·\sqrt{\dfrac{3}{(4k^2+3)^2}-\dfrac{4}{4k^2+3}+1}\end{align}$

最后就能根据二次函数求解。