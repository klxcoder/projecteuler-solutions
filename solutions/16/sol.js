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
  return nStr;
}
const power = getPower(15);
const sumDigits = getSumDigits(power);
console.log(sumDigits);