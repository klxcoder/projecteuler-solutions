package main

import (
	"fmt"
)

func getFactorial(n int) int {
	result := 1
	for num := 2; num <= n; num++ {
		result *= num
	}
	return result
}

func main() {
	fmt.Println(getFactorial((1)))
	fmt.Println(getFactorial((4)))
	fmt.Println(getFactorial((5)))
	fmt.Println(getFactorial((9)))
}
