import math

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

print(get_prime_numbers(2, [2]))
print(get_prime_numbers(4, [2, 3]))
print(get_prime_numbers(8, [2, 3, 5, 7]))