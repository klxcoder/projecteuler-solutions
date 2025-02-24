package main

import (
	"fmt"
)

func getAnswer(n int) int {
	sum := 1
	k := 3
	number := 1
	for k <= n {
		for i := 0; i < 4; i++ {
			number += k - 1
			sum += number
		}
		k += 2
	}
	return sum
}

func main() {
	fmt.Println(getAnswer(5))
	fmt.Println(getAnswer(1001))
}
