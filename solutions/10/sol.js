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

const primes = getPrimes(10);
console.log(primes);
// const sum = getSum([1, 2, 100]);
// console.log(sum);