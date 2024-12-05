def gcd(a, b):
  if a==0:
    return b
  if b==0:
    return a
  if a>b:
    return gcd(a-b, b)
  else:
    return gcd(b-a, a)

print(gcd(12, 16))
print(gcd(9, 28))