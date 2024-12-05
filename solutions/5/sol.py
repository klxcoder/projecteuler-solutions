# greatest common divisor
def gcd(a, b):
  if a==0:
    return b
  if b==0:
    return a
  if a>b:
    return gcd(a-b, b)
  else:
    return gcd(b-a, a)

# least common multiple
def lcm(a, b):
  return int(a * b / gcd(a, b))

print(lcm(4, 6))
print(lcm(5, 10))