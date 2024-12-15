package main

import (
	"fmt"
)

// Greatest common divisor
func gcd(a int, b int) int {
	if a == 0 {
		return b
	}
	if a > b {
		return gcd(a%b, b)
	} else {
		return gcd(b%a, a)
	}
}

// Least common multiple
func lcm(a int, b int) int {
	return a * b / gcd(a, b)
}

func main() {
	answer := 1
	for num := 2; num <= 10; num++ {
		answer = lcm(answer, num)
	}
	fmt.Print(answer)
}
