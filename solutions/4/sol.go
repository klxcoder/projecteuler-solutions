package main

import (
	"fmt"
	"strconv"
)

func isPalindromic(n int) bool {
  nStr := strconv.Itoa(n)
  start := 0
  end := len(nStr) - 1
  for start < end {
    if nStr[start] != nStr[end] {
      return false
    }
    start++
    end--
  }
  return true
}

func getLargestPalindromic() int{
  largetPalindromic := 0
  for first := 999; first >= 100; first-- {
    for second := first; second >= 100; second-- {
      product := first * second
      if product > largetPalindromic && isPalindromic(product) {
        largetPalindromic = product
      }
    }
  }
  return largetPalindromic
}

func main() {
	fmt.Print(getLargestPalindromic())
}