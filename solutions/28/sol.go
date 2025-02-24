package main

import (
	"fmt"
)

func getAnswer(n int) []int {
	arr := []int{1}
	k := 3
	number := 1
	for k <= n {
		for i := 0; i < 4; i++ {
			number += k - 1
			arr = append(arr, number)
		}
		k += 2
	}
	return arr
}

func main() {
	fmt.Println(getAnswer(1))
	fmt.Println(getAnswer(3))
	fmt.Println(getAnswer(5))
	fmt.Println(getAnswer(7))
}
