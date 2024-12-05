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
console.log(getPrimeNumbers(2, [2]));
console.log(getPrimeNumbers(4, [2, 3]));
console.log(getPrimeNumbers(8, [2, 3, 5, 7]));
console.log(getPrimeNumbers(16, [2, 3, 5, 7, 11, 13]));