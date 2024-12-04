const LIMIT = 500;

const getDivisorCount = (n) => {
  const squareRoot = Math.floor(Math.sqrt(n));
  let count = 0;
  for (let k = 1; k <= squareRoot; k++) {
    if (n % k === 0) {
      count += 2;
    }
  }
  return count;
}

const getAnswer = (limit) => {
  let sum = 1;
  for (let num = 2; ; num++) {
    sum += num;
    const divisorCount = getDivisorCount(sum);
    if (divisorCount > limit) {
      return sum;
    }
  }
}

const answer = getAnswer(LIMIT);
console.log(answer);