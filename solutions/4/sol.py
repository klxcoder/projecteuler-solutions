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

print(is_palindromic(120))
print(is_palindromic(121))