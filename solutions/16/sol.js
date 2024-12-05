const getPower = (n) => {
  let result = 1n;
  while (n--) {
    result *= 2n;
  }
  return result;
}
const power = getPower(15);
console.log(power);