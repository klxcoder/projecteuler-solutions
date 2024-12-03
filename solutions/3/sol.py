N = 600851475143

def get_smaller(n, k):
  while n % k == 0:
    n = int(n/k)
  return n

def get_largest_prime_factor(n):
  k = 2
  while True:
    n = get_smaller(n, k)
    if n==1:
      return k
    k+=1

print(get_largest_prime_factor(N))