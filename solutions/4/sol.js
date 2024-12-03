const isPalindromic = (n) => {
  const nStr = n.toString();
  let start = 0;
  let end = nStr.length - 1;
  while (start < end) {
    if (nStr[start] !== nStr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

const getLargestPalindromic = () => {
  let largetPalindromic = 0;
  for (let first = 999; first >= 100; first--) {
    for (let second = first; second >= 100; second--) {
      const product = first * second;
      if (product > largetPalindromic && isPalindromic(product)) {
        largetPalindromic = product;
      }
    }
  }
  return largetPalindromic;
}

console.log(getLargestPalindromic())