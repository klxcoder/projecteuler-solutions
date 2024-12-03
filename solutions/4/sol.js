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

console.log(isPalindromic(120))
console.log(isPalindromic(121))