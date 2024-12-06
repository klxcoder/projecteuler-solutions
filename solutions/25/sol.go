package main

import (
	"fmt"
)

func getAnser(digit int) int {
	a := 1
	b := 1
	for index := 0; index < digit; index++ {
		c := a + b
		fmt.Println(c)
		a = b
		b = c
	}
	return 0
}

func main() {
	answer := getAnser(20)
	fmt.Println(answer)
}
