const LIMIT = 1_000_000;

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

const getLongestChain = (limit) => {
  const longestChain = {
    startingNumber: 1,
    longestChainLength: 1,
  }
  for (let num = 1; num < limit; num++) {
    const chainLength = getChainLength(num);
    if (chainLength > longestChain.longestChainLength) {
      longestChain.startingNumber = num;
      longestChain.longestChainLength = chainLength;
    }
  }
  return longestChain;
}

console.log(getLongestChain(LIMIT).startingNumber);