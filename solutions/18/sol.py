arr = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3],
]

n = len(arr)

for i in range(1, n):
  arr[i][0] += arr[i-1][0]
  for j in range(1, i):
    arr[i][j] += max(arr[i-1][j-1],arr[i-1][j])
  arr[i][i] += arr[i-1][i-1]

answer = 0
for i in range(n):
  answer = max(answer, arr[n-1][i])

print(answer)