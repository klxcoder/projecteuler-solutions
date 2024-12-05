const N = 1000;

const getPower = (n) => {
  let result = 1n;
  while (n--) {
    result *= 2n;
  }
  return result;
}
const getSumDigits = (n) => {
  const nStr = n.toString();
  let sum = 0;
  for (const char of nStr) {
    sum += char * 1;
  }
  return sum;
}
const power = getPower(N);
const sumDigits = getSumDigits(power);
console.log(sumDigits);