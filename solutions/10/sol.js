const LIMIT = 2_000_000

const getPrimes = (limit) => {
  const isPrimes = new Array(limit).fill(true);
  isPrimes[0] = false;
  isPrimes[1] = false;
  for (let num = 2; num < limit; num++) {
    if (isPrimes[num]) {
      let next = num * 2;
      while (next < limit) {
        isPrimes[next] = false;
        next += num;
      }
    }
  }
  const primes = [];
  for (let index = 0; index < isPrimes.length; index++) {
    if (isPrimes[index]) {
      primes.push(index);
    }
  }
  return primes;
}

const getSum = (primes) => primes.reduce((sum, prime) => sum + prime, 0);

const primes = getPrimes(LIMIT);
const sum = getSum(primes);
console.log(sum);