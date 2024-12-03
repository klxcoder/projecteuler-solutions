package main

import "fmt"

const N = 600851475143;

func getSmaller(n int, k int) int {
  for n % k == 0 {
		n = int(n/k)
	}
  return n;
}

func main() {
	fmt.Print(getSmaller(100, 2))
}