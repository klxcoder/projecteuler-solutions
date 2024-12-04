const sumOfSquares = (n) => {
  let sum = 0;
  for (let num = 1; num <= n; num++) {
    sum += num * num;
  }
  return sum;
}

console.log(sumOfSquares(10));