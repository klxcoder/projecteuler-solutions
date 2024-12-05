const T: (n: number) => number = (n) => n * (n + 1) / 2

const P: (n: number) => number = (n) => n * (3 * n - 1) / 2

const H: (n: number) => number = (n) => n * (2 * n - 1)

for (let n = 1; n < 10; n++) {
  console.log(T(n), P(n), H(n));
}