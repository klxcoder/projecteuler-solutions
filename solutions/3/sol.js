const N = 600851475143;

function getSmaller(n, k) {
  while (n % k === 0) n /= k;
  return n;
}

function getLargestPrimeFactor(n) {
  let k = 2;
  while (true) {
    n = getSmaller(n, k);
    if (n === 1) return k;
    k++;
  }
}

console.log(getLargestPrimeFactor(600851475143));