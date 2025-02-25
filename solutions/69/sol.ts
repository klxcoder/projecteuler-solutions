const getPhiArr = (n: number) => {
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

const phiArr = getPhiArr(10);
console.log(phiArr);