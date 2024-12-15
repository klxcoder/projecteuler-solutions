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
// lcm

func main() {
	fmt.Print(gcd(10, 12))
}
