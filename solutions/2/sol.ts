const LIMIT = 4_000_000

const isEven: (term: number) => boolean = (term) => term % 2 === 0;

const getFibSequence: (limit: number) => number[] = (limit) => {
  const fibSequence: number[] = [1, 2];
  while (true) {
    const [first, second] = fibSequence.slice(-2);
    const term: number = first + second;
    if (term > limit) break;
    fibSequence.push(term);
  }
  return fibSequence
}

const fibSequence = getFibSequence(100);
console.log(fibSequence);