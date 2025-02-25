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

const getAnswer = (k) => {
  let count = 0
  let n = 1
  while (true) {
    const primeFactors = getPrimeFactors(n)
    if (primeFactors.length === k) {
      count++
      if (count === k) {
        return n - k + 1
      }
    } else {
      count = 0
    }
    n++
  }
}

console.log(getAnswer(1))
console.log(getAnswer(2))
console.log(getAnswer(3))
console.log(getAnswer(4))