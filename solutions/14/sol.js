const getChainLength = (startingNumber) => {
  let count = 1;
  while (startingNumber !== 1) {
    if (startingNumber % 2 === 0) {
      startingNumber /= 2;
    } else {
      startingNumber = 3 * startingNumber + 1;
    }
    count++;
  }
  return count;
}

console.log(getChainLength(1))
console.log(getChainLength(2))
console.log(getChainLength(4))
console.log(getChainLength(8))
console.log(getChainLength(16))
console.log(getChainLength(13))