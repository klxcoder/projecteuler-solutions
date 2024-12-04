const sumOfSquares = (n) => {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    sum += num * num;
  }
  return sum;
}

const squareOfSum = (n) => {
  const sum = n * (n + 1) / 2;
  return sum * sum;
}

const getAnswer = (n) => squareOfSum(n) - sumOfSquares(n);

const answer = getAnswer(100);
console.log(answer);