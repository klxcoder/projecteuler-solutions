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

for (let num = 1; num <= 28; num++) {
  console.log(num, getDivisorCount(num));
}