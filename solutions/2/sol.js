// const LIMIT = 4_000_000;
const LIMIT = 100;

const isEven = (term) => term % 2 === 0;

const fibSequence = [1, 2];

while (true) {
  const [first, second] = fibSequence.slice(-2);
  const term = first + second;
  if (term > LIMIT) break;
  fibSequence.push(term);
}

console.log(fibSequence);