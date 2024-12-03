package main

import "fmt"

const N = 600851475143

func getSmaller(n int, k int) int {
  for n % k == 0 {
		n = int(n/k)
	}
  return n
}

func getLargestPrimeFactor(n int) int {
  k := 2
  for {
    n = getSmaller(n, k)
    if n == 1 {
			return k
		}
    k++;
  }
}

func main() {
	fmt.Print(getLargestPrimeFactor(100))
}