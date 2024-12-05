const N = 20;

const getAnswer = (n) => {
  const arr = new Array(n + 1).fill(true).map(() => new Array(n + 1).fill(-1));
  for (let index = 0; index <= n; index++) {
    arr[0][index] = 1;
    arr[index][0] = 1;
  }
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= n; col++) {
      arr[row][col] = arr[row - 1][col] + arr[row][col - 1];
    }
  }
  return arr[n][n];
}

const answer = getAnswer(N);
console.log(answer);