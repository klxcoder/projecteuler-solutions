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
  return sumArr;
}
const answer = getAnswer(EXAMPLE_ARR);
console.log(answer);