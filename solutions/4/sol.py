def is_palindromic(n):
  nStr = str(n)
  start = 0
  end = len(nStr) - 1
  while start < end:
    if nStr[start] != nStr[end]:
      return False
    start += 1
    end -= 1
  return True

def get_largest_palindromic():
  largest_palindromic = 0
  for first in range(999, 99, -1):
    for second in range(first, 99, -1):
      product = first * second
      if product > largest_palindromic and is_palindromic(product):
        largest_palindromic = product
  return largest_palindromic

print(get_largest_palindromic())