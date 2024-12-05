# greatest common divisor
def gcd(a, b):
  if a==0:
    return b
  if b==0:
    return a
  if a>b:
    return gcd(a-b, b)
  else:
    return gcd(b-a, a)

# least common multiple
def lcm(a, b):
  return int(a * b / gcd(a, b))

def getAnswer(n):
  answer = 1
  for num in range(2, n+1):
    answer = lcm(answer, num)
  return answer

answer = getAnswer(10)
print(answer)