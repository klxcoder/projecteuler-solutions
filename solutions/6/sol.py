def sum_of_squares(n):
  sum = 0
  for num in range(1, n+1):
    sum = sum + num * num
  return sum

print(sum_of_squares(10))