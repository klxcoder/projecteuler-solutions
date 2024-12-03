const LIMIT = 4_000_000;

const isEven = (term) => term % 2 === 0;

const getFibSequence = (limit) => {
  const fibSequence = [1, 2];

  while (true) {
    const [first, second] = fibSequence.slice(-2);
    const term = first + second;
    if (term > limit) break;
    fibSequence.push(term);
  }

  return fibSequence;
}

const fibSequence = getFibSequence(LIMIT);

let sum = 0;
for (const term of fibSequence) {
  if (isEven(term)) sum += term;
}

console.log(sum);