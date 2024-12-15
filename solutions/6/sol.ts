const sumOfSquares: (n: number) => number = (n) => {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    sum += num * num;
  }
  return sum;
}

const squareOfSum: (n: number) => number = (n) => {
  const sum = n * (n + 1) / 2;
  return sum * sum;
}

const getAnswer: (n: number) => number = (n) => {
  return squareOfSum(n) - sumOfSquares(n)
}

console.log(getAnswer(10))