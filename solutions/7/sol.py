import math

LIMIT = 10_001

def get_prime_numbers(n, head_prime_numbers):
  """
  Get all prime numbers from 0 to n*2 (inclusive).

  Parameters:
  n (int): The upper limit multiplier for finding primes (range is 0 to n*2).
  head_prime_numbers (list[int]): All prime numbers from 0 to n (inclusive).

  Returns:
  list[int]: A list of prime numbers between 0 and n*2 (inclusive).
  """
  double = n * 2
  is_primes = [True] * (double + 1)
  tail_prime_numbers = []
  for prime_number in head_prime_numbers:
    num = prime_number * 2
    while num <= double:
      is_primes[num] = False
      num = num + prime_number
  for num in range(n+1, double+1):
    if is_primes[num]:
      tail_prime_numbers.append(num)
  return head_prime_numbers + tail_prime_numbers

def get_answer(limit):
  n = 2
  arr = [2]
  while len(arr) < limit:
    arr = get_prime_numbers(n, arr)
    n = n * 2
  return arr[limit-1]
print(get_answer(LIMIT))