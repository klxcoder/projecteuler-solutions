arr = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
]

n = len(arr)

for i in range(1, n):
  arr[i][0] += arr[i-1][0]
  arr[i][i] += arr[i-1][i-1]

print(arr)