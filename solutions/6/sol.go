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

func squareOfSum(n int) int {
	sum := n * (n + 1) / 2
	return sum * sum
}

func getAnswer(n int) int {
	return squareOfSum(n) - sumOfSquares(n)
}

func main() {
	fmt.Println(getAnswer(10))
}
