package main

import (
	"fmt"
	"strconv"
)

func isPalindromic(n int) bool {
  nStr := strconv.Itoa(n)
  start := 0
  end := len(nStr) - 1;
  for start < end {
    if nStr[start] != nStr[end] {
      return false
    }
    start++;
    end--;
  }
  return true;
}

func main() {
	fmt.Println(isPalindromic(120))
	fmt.Println(isPalindromic(121))
}