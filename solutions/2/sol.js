// const LIMIT = 4_000_000;
const LIMIT = 100;

const isEven = (term) => term % 2 === 0;

const fib_sequence = [1, 2];

while (true) {
  const [first, second] = fib_sequence.slice(-2);
  const term = first + second;
  if (term > LIMIT) break;
  fib_sequence.push(term);
}

console.log(fib_sequence);