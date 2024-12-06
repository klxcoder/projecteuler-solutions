package main

import (
	"fmt"
	"math/big"
)

func getAnser(digit int) int {
	a := new(big.Int)
	b := new(big.Int)

	a.SetString("1", 10)
	b.SetString("1", 10)

	for index := 0; index < digit; index++ {
		c := new(big.Int)
		c.Add(a, b)
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
