const LIMIT = 10_000;

const getD = (n) => {
  const squareRoot = Math.floor(Math.sqrt(n));
  const properDivisors = [1];
  for (let num = 2; num < squareRoot; num++) {
    if (n % num === 0) {
      properDivisors.push(num);
      properDivisors.push(n / num);
    }
  }
  if (squareRoot >= 2) {
    if (squareRoot * squareRoot === n) {
      properDivisors.push(squareRoot)
    } else {
      if (n % squareRoot === 0) {
        properDivisors.push(squareRoot);
        properDivisors.push(n / squareRoot);
      }
    }
  }
  return properDivisors;
}

const getSum = (arr) => {
  let sum = 0;
  for (const num of arr) sum += num;
  return sum;
}

const getAnswer = (n) => {
  const dObj = {}
  dObj[1] = 0;
  for (let num = 2; num < n; num++) {
    dObj[num] = getSum(getD(num));
  }
  return dObj;
}

const answer = getAnswer(10);
console.log(answer);
