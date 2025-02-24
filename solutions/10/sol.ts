const isPrime = (n: number): boolean => {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  if (n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0) return false;
    if (n % (i + 2) === 0) return false;
  }
  return true;
}

const getAnswer = (limit: number): number => {
  let sum = 0;
  if (limit > 2) sum = 2;
  for (let num = 3; num < limit; num += 2) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

console.log(getAnswer(17));
console.log(getAnswer(2_000_000));