N = 600851475143

def get_smaller(n, k):
  while n % k == 0:
    n = int(n/k)
  return n

print(getSmaller(100, 2))