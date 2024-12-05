const MOD = 10_000_000_000

const pow = (n) => {
  let result = 1;
  for (let index = 0; index < n; index++) {
    result = (result * n) % MOD;
  }
  return result;
}

const getAnswer = (n) => {
  for (let num = 1; num <= n; num++) {
    console.log(num, pow(num));
  }
}

const answer = getAnswer(10);
console.log(answer);