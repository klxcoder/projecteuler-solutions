const MOD = 10_000_000_000
const LIMIT = 1000;

const pow = (n) => {
  let result = 1;
  for (let index = 0; index < n; index++) {
    result = (result * n) % MOD;
  }
  return result;
}

const getAnswer = (n) => {
  let answer = 0;
  for (let num = 1; num <= n; num++) {
    answer = (answer + pow(num)) % MOD;
  }
  return answer;
}

const answer = getAnswer(LIMIT);
console.log(answer);