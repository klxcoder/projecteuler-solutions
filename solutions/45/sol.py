# 1*n*n + 1*n - 2*T(n) = 0
# 3*n*n - 1*n - 2*P(n) = 0
# H(n) = n*(2*n-1)

import math

def is_integer_number(x):
  return math.floor(x) == x

def solveQuadratic(a, b, c):
  d = b*b - 4*a*c
  if d < 0:
    return []
  if d==0:
    x = -b / (2*a)
    if is_integer_number(x):
      return [x]
    return []
  delta = math.sqrt(d)
  x1 = (-b + delta) / (2 * a)
  x2 = (-b - delta) / (2 * a)
  arr = []
  if is_integer_number(x1) and x1 > 0:
    arr.append(math.floor(x1))
  if is_integer_number(x2) and x2 > 0:
    arr.append(math.floor(x2))
  return arr

print(solveQuadratic(1, 1, -2 * 40755))
print(solveQuadratic(3, -1, -2 * 40755))