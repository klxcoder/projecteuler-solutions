const T: (n: number) => number = (n) => n * (n + 1) / 2

const P: (n: number) => number = (n) => n * (3 * n - 1) / 2

const H: (n: number) => number = (n) => n * (2 * n - 1)

const getAnswer: () => number = () => {
  const indexes = [2, 2, 2]
  const fs = [T, P, H]
  while (true) {
    if (fs[0](indexes[0]) === fs[1](indexes[1]) && fs[0](indexes[0]) === fs[2](indexes[2])) {
      if (fs[0](indexes[0]) !== 40755) {
        return fs[0](indexes[0]);
      }
    }
    let minIndex = 0;
    for (let index = 1; index <= 2; index++) {
      if (fs[index](indexes[index]) < fs[0](indexes[0])) {
        minIndex = index;
      }
    }
    indexes[minIndex]++;
  }
}

const answer = getAnswer();
console.log(answer);