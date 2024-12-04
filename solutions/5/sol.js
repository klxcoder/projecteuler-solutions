// All prime numbers below 20
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19]

// Greatest common divisor
const gcd = (a, b) => {
  if (a === b) return a;
  if (a > b) return gcd(a - b, b);
  if (a < b) return gcd(b - a, a);
}

console.log(gcd(24, 60));
console.log(gcd(48, 18));
console.log(gcd(1, 18));