# https://chatgpt.com/share/67bbd49e-af5c-8010-bff1-1ca1ca6e778a
import math

# find blue with the equation (blue/total)*((blue-1)/(total-1)) = 1/2
def getBlue(total):
  a = 2
  b = -2
  c = -total * (total - 1)

  discriminant = b**2 - 4*a*c
  delta = int(math.isqrt(discriminant))

  if discriminant != delta * delta:
    return -1

  blue = (-b + delta) // (2 * a)
  return blue

def getAnswer(total):
  while True:
    blue = getBlue(total)
    if blue == -1:
      total += 1
    else:
      return blue

print(getAnswer(21))
print(getAnswer(85 + 35))
print(getAnswer(10**12 + 1))  # impossible