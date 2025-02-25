const getPhiArr = (n: number) => {
  const phiArr: number[] = Array(n + 1).fill(true).map((_, index) => index)
  return phiArr;
}

const phiArr = getPhiArr(10);
console.log(phiArr);