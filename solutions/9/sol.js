const getTriplet = (n) => {
  for (let a = 1; a <= n; a++) {
    for (let b = a + 1; b <= n; b++) {
      const c = n - a - b;
      if (c <= b) break;
      if (a * a + b * b === c * c) {
        return [a, b, c]
      }
    }
  }
}

const getProduct = ([a, b, c]) => a * b * c;

const triplet = getTriplet(12);
console.log(triplet);
const product = getProduct(triplet);
console.log(product);