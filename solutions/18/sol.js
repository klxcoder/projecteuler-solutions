const EXAMPLE_ARR = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
]

const getAnswer = (arr) => {
  const n = arr.length;
  const sumArr = new Array(n).fill(true).map(() => new Array(n).fill(0));
  sumArr[0][0] = arr[0][0];
  for (let row = 1; row < n; row++) {
    sumArr[row][0] = arr[row][0] + sumArr[row - 1][0];
    //
    sumArr[row][row] = arr[row][row] + sumArr[row - 1][row - 1];
  }
  return sumArr;
}
const answer = getAnswer(EXAMPLE_ARR);
console.log(answer);