// greatest common divisor
function gcd(a: number, b: number): number {
  if (a === 0) return b;
  if (a >= b) {
    return gcd(a % b, b);
  } else {
    return gcd(b % a, a);
  }
}

function lcm(a: number, b: number): number {
  return a * b / gcd(a, b);
}

function getAnswer(n: number): number {
  let answer = 1;
  for (let num = 2; num <= n; num++) {
    answer = lcm(answer, num);
  }
  return answer;
}

const answer = getAnswer(10);
console.log(answer);