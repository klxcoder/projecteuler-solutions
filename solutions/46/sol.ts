const isComposite: (n: number) => boolean = (n) => {
  const squareRoot = Math.floor(Math.sqrt(n));
  for (let num = 2; num <= squareRoot; num++) {
    if (n % num === 0)
      return true;
  }
  return false;
}

const isPerfectSquare: (n: number) => boolean = (n) => {
  const squareRoot = Math.floor(Math.sqrt(n));
  return squareRoot * squareRoot === n;
}

const getEquation: (n: number, primeNumbers: number[]) => string = (n, primeNumbers) => {
  for (const primeNumber of primeNumbers) {
    let result = n - primeNumber;
    if (result % 2 === 0) {
      result = Math.floor(result / 2);
      if (isPerfectSquare(result)) {
        return `${n} = ${primeNumber} + 2 x ${result} x ${result}`
      }
    }
  }
  return ''
}

const getAnswer: () => number = () => {
  let num = 5;
  const primeNumbers = [2, 3]
  while (true) {
    if (isComposite(num)) {
      const equation = getEquation(num, primeNumbers);
      if (equation) {
        console.log(equation)
      } else {
        return num;
      }
    } else {
      primeNumbers.push(num)
    }
    num += 2;
  }
}

const answer = getAnswer();
console.log(answer);