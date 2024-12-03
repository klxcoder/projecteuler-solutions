const N = 600851475143

function getSmaller(n, k) {
  while (n % k === 0) n /= k;
  return n;
}

console.log(getSmaller(1000, 2));