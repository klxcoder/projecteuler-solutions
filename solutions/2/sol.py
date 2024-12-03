LIMIT = 4_000_000

def is_even(term):
  return term % 2 == 0

def get_fib_sequence(limit):
  fib_sequence = [1, 2]
  while True:
    first, second = fib_sequence[-2:]
    term = first + second
    if(term > limit):
      break
    fib_sequence.append(term)
  return fib_sequence

def get_sum(fib_sequence):
  sum = 0
  for term in fib_sequence:
    if(is_even(term)):
      sum += term
  return sum

fib_sequence = get_fib_sequence(LIMIT)
sum = get_sum(fib_sequence)
print(sum)