const N = 100;

const getFactorial = (n) => {
  let factorial = 1n;
  for (let num = 2n; num <= n; num++) {
    factorial *= num;
  }
  return factorial;
}
const getSumDigits = (n) => {
  const nStr = n.toString();
  let sum = 0;
  for (const char of nStr) {
    sum += char * 1;
  }
  return sum;
}
const factorial = getFactorial(N);
const sum = getSumDigits(factorial);
console.log(sum);