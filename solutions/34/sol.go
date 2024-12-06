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

func getSumFactorialDigits(n int) int {
	sum := 0
	for {
		if n == 0 {
			return sum
		}
		sum += getFactorial(n % 10)
		n = int(n / 10)
	}
}

func main() {
	fmt.Println(getSumFactorialDigits((9)))
	fmt.Println(getSumFactorialDigits((99)))
	fmt.Println(getSumFactorialDigits((999)))
	fmt.Println(getSumFactorialDigits((9999)))
	fmt.Println(getSumFactorialDigits((99999)))
	fmt.Println(getSumFactorialDigits((999999)))  // 2177280
	fmt.Println(getSumFactorialDigits((9999999))) // 2540160
	// curious number < 9999999
}
