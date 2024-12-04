const LIMIT = 2_000_000

const getPrimes = (limit) => {
  const flags = new Array(limit).fill(false);
  return flags;
}

const getSum = (primes) => primes.reduce((sum, prime) => sum + prime, 0);

const primes = getPrimes(3);
console.log(primes);
// const sum = getSum([1, 2, 100]);
// console.log(sum);