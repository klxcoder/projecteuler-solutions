const getPrimeFactors = (n) => {
  const arr = []
  let k = 2;
  while (n !== 1) {
    if (n % k === 0) {
      arr.push(k);
      while (n % k === 0) {
        n /= k
      }
    }
    k++
  }
  return arr
}

console.log(getPrimeFactors(644))