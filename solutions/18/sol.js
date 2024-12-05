const EXAMPLE_ARR = [
  [3],
  [7, 4],
  [2, 4, 6],
  [8, 5, 9, 3]
]

const PROBLEM_ARR = [
  [75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20, 4, 82, 47, 65],
  [19, 1, 23, 75, 3, 34],
  [88, 2, 77, 73, 7, 63, 67],
  [99, 65, 4, 28, 6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],
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
const answer = getAnswer(PROBLEM_ARR);
console.log(answer);