const LIMIT = 2_000_000

const getPrimes = () => {

}

const getSum = (primes) => primes.reduce((sum, prime) => sum + prime, 0);

const sum = getSum([1, 2, 100]);
console.log(sum);