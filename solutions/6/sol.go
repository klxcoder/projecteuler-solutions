package main

import (
	"fmt"
)

func sumOfSquares(n int) int {
	sum := 0
	for num := 1; num <= n; num++ {
		sum += num * num
	}
	return sum
}

func main() {
	fmt.Print(sumOfSquares(10))
}
