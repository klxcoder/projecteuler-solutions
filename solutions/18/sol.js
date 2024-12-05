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
    for (let col = 1; col < row; col++) {
      sumArr[row][col] = arr[row][col] + Math.max(sumArr[row - 1][col - 1], sumArr[row - 1][col]);
    }
    sumArr[row][row] = arr[row][row] + sumArr[row - 1][row - 1];
  }
  let answer = 0;
  for (let col = 0; col < n; col++) {
    if (sumArr[n - 1][col] > answer) {
      answer = sumArr[n - 1][col];
    }
  }
  return answer;
}
const answer = getAnswer(EXAMPLE_ARR);
console.log(answer);