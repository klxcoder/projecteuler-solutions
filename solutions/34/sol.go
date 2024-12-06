package main

import "fmt"

const LIMIT = 9999999

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

func getAnswer(limit int) int {
	sum := 0
	for num := 10; num <= limit; num++ {
		if num == getSumFactorialDigits(num) {
			sum += num
		}
	}
	return sum
}

func main() {
	answer := getAnswer(LIMIT)
	fmt.Print(answer)
}
