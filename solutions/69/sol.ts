const getPhiArr = (n: number): number[] => {
  const phiArr: number[] = Array(n + 1).fill(true).map((_, index) => index);
  for (let x = 2; x <= n; x++) {
    if (phiArr[x] == x) {
      for (let y = x; y <= n; y += x) {
        phiArr[y] = phiArr[y] * (x - 1) / x
      }
    }
  }
  return phiArr;
}

const getAnswer = (limit: number): number => {
  const phiArr = getPhiArr(limit);
  let maxValue = 0;
  let answer = 0;
  for (let n = 2; n <= limit; n++) {
    const currentValue = n / phiArr[n]
    if (currentValue > maxValue) {
      maxValue = currentValue;
      answer = n;
    }
  }
  return answer;
}

console.log(getAnswer(1_000_000));