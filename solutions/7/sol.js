const K = 10_001;

/**
 * Get all prime numbers from 0 to n*2
 * @param {*} n 
 * @param {*} headPrimeNumbers all prime numbers from 0 to n
 */
const getPrimeNumbers = (n, headPrimeNumbers) => {
  const length = 2 * n + 1;
  const isPrimes = new Array(length).fill(true);
  for (const primeNumber of headPrimeNumbers) {
    let num = primeNumber;
    while (num < length) {
      isPrimes[num] = false;
      num += primeNumber;
    }
  }
  const tailPrimeNumbers = [];
  for (let num = n + 1; num < length; num++) {
    if (isPrimes[num]) {
      tailPrimeNumbers.push(num);
    }
  }
  return [...headPrimeNumbers, ...tailPrimeNumbers];
}

const getAnswer = (k) => {
  let n = 2;
  let primeNumbers = [2];
  while (primeNumbers.length < k) {
    primeNumbers = getPrimeNumbers(n, primeNumbers);
    n *= 2;
  }
  return primeNumbers[k - 1];
}

const answer = getAnswer(K);
console.log(answer);