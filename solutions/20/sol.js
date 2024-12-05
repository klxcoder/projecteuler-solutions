const getFactorial = (n) => {
  let factorial = 1n;
  for (let num = 2n; num <= n; num++) {
    factorial *= num;
  }
  return factorial;
}
const factorial = getFactorial(10);
console.log(factorial);