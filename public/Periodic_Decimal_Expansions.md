Of the many differences between rational and irrational numbers, one that I've always found interesting is the character of their decimal expansions. Rational decimal expansions are always eventually periodic, meaning at some point they repeat over and over again, e.g. $\frac{1}{6} = 0.1666\dots$ On the other hand irrational numbers exhibit the opposite behavior, that is, their expansions are always aperiodic and thus never become a repeating sequence e.g. $\pi = 3.1415\dots$

To prove this we will first show that a number with an eventually periodic decimal expansion must be rational, then we will show the converse, that when expanding a rational number the outcome is always eventually periodic.

# Preliminaries
We can define a decimal expansion for some non-negative real number using the following equation, $x=\sum_{i=0}^ka_ib^i + \sum_{i=1}^\infty a_{-i}b^{-i}$ where $b$ is our base and each $a_i$ is an integer such that $0 \leq a_i < b$ Since a number's decimal expansion is the same regardless of sign, any mention of decimal expansions for negative numbers will be excluded.

Consider some $x$ in the interval $[0,1)$, with an expansion defined similarly by $x =a_1b^{-1} + yb^{-1}$, where $a_1 = \lfloor bx \rfloor$ To calculate such an expansion we can use the following recursive relations (this will not be proved here see [PlanetMath: Existence and Uniqueness of Decimal Expansions](https://planetmath.org/existenceanduniquenessofdecimalexpansion)):

$$
\begin{align*}
    &y_i = a_ib^{-1} + y_{i+1}b^{-1},\\\\
    &0\leq a_i =\lfloor by_i\rfloor < b, \\\\
    &0 \leq y_i < 1,\\\\
    &y_1=x
\end{align*}
$$

This is effectively a formalized version of long division. 
# Proof: Eventually Periodic Decimal Expansions Are Rational
Let $x$ be a real number strictly between $0$ and $1$ with an eventually periodic decimal expansion, $\sum_{i=1}^\infty a_{-i}b^{-i}$ Since $x$ is eventually periodic we can separate its expansion into its non-repeating and repeating patterns, $x = \sum_{i=1}^m a_{-i}b^{-i} + \sum_{i=m+1}^\infty a_{-i}b^{-i}$ Since both patterns can be represented by a finite number of digits, the expansion can instead be written with each as integers. So let $y = b^m\sum_{i=1}^m a_{-i}b^{-i}$ and $z = b^{m+n}\sum_{i=m+1}^{m+n} a_{-i}b^{-i}$ where $m$ and $n$ represent the number of digits in each, then $x = b^{-m}y + b^{-m}\sum_{k=1}^\infty zb^{-kn}$ Then we have,

$$
\begin{align*}
    &x = b^{-m}y + b^{-m}\sum_{k=1}^\infty z b^{-kn} \\\\
    &b^mx = y + \sum_{k=1}^\infty z b^{-kn}\\\\
    &b^mx - y = \sum_{k=1}^\infty z b^{-kn} \\\\
    &b^{m+n}x - b^ny = \sum_{k=1}^\infty z b^{n-kn} \\\\
    &b^{m+n}x - b^ny = z + \sum_{k=1}^\infty z b^{-kn}\\\\
    &b^{m+n}x - b^ny = z + b^mx - y \\\\
    &b^{m+n}x - b^mx = z + b^ny - y \\\\
\end{align*}
$$

and finally,  

$$
x = \frac{z + b^ny - y}{b^{m+n}-b^m}
$$

therefore $x$ must be rational.  

While the property is proved above for $0<x<1$, it is can be easily extended to those larger than 1. Let $x$ be a real number greater than 1 with an eventually periodic decimal expansion. Then we can say $x=\sum_{i=0}^ka_ib^i + \sum_{i=1}^\infty a_{-i}b^{-i}$ The first term is simply an integer and the second is a real number between 0 and 1, so $x$ is rational since it is the sum of 2 rationals.

# Proof: Rationality Implies An Eventually Periodic Expansion
Consider some rational number $x$ in the interval $[0,1)$ Then $x = \frac{p}{q} = a_1b^{-1} + yb^{-1}$, where $a_1 = \lfloor bx \rfloor$ and $p,q \in \mathbb{Z}, q\neq 0$ Now using our recursive relations we can begin calculating $y_i$,

$$
\begin{align*}
    &x=y_1=\frac{p}{q} = a_1b^{-1} + y_{2}b^{-1}\\\\
    &\frac{bp-a_1q}{q} = y_{2},\\\\
    &y_2= a_2b^{-1} + y_{3}b^{-1}\\\\
    &\frac{b^2p-ba_1q-a_2q}{q} = y_{3},\\\\
\end{align*}
$$

continuing this process we get

$$
    \frac{b^{i-1}p-b^{i-2}a_1q-\dots-ba_{i-1}q - a_iq}{q} = y_{i}
$$

Notice the numerator will always be an integer, and since $0\leq y_i < 1$ an integer less than $q$. Since there are finitely many integers which the numerator can be, it's clear it must repeat at some point. If our numerator repeats then there exists some $y_i = y_{i+k} = y_{i+2k} = \dots$ so our expansion repeats infinitely. Therefore a rational number must have an eventually periodic decimal expansion.

# Conclusion
As was shown a number is rational if and only if it has an eventually periodic decimal expansion. I spent a lot of time thinking about this, specifically the second half. The first part was heavily inspired by a simple proof which uses arithmetic to show that $1=.\bar9$ The second half proved more difficult since I couldn't assume there was a structure in the expansion to take advantage of, but once I found a simple formalization of division it became more straightforward.
