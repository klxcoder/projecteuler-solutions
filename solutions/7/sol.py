def get_prime_numbers(n, arr):
  """
  Get all prime numbers from 0 to n*2 (inclusive).

  Parameters:
  n (int): The upper limit multiplier for finding primes (range is 0 to n*2).
  arr (list[int]): All prime numbers from 0 to n (inclusive).

  Returns:
  list[int]: A list of prime numbers between 0 and n*2 (inclusive).
  """
  is_primes = [True] * (n * 2 + 1)
  return is_primes

prime_numbers = get_prime_numbers(2, [2])
print(prime_numbers)