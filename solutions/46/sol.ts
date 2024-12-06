const isComposite: (n: number) => boolean = (n) => {
  const squareRoot = Math.floor(Math.sqrt(n));
  for (let num = 2; num <= squareRoot; num++) {
    if (n % num === 0)
      return true;
  }
  return false;
}

const getAnswer: () => number = () => {
  let num = 5;
  while (true) {
    if (isComposite(num)) {
      return num;
    }
    num += 2;
  }
}

const answer = getAnswer();
console.log(answer);