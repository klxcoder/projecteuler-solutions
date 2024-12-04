// All prime numbers below 20
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19]

// Greatest common divisor
const gcd = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;
  if (a > b) return gcd(a % b, b);
  if (a < b) return gcd(b % a, a);
}

// Least common multiple
const lcm = (a, b) => a * b / gcd(a, b);

const getAnswer = (limit) => {
  let answer = 1;
  for (let num = 2; num <= limit; num++) {
    answer = lcm(answer, num);
  }
  return answer;
}

const answer = getAnswer(20);
console.log(answer);