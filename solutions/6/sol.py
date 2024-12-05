def sum_of_squares(n):
  sum = 0
  for num in range(1, n+1):
    sum = sum + num * num
  return sum

def square_of_sum(n):
  sum = int(n * (n+1) / 2)
  return sum * sum

print(sum_of_squares(10))
print(square_of_sum(10))