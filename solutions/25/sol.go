package main

import (
	"fmt"
	"math/big"
)

const DIGIT = 1000

func getAnser(digit int) int {
	a := new(big.Int)
	b := new(big.Int)

	a.SetString("1", 10)
	b.SetString("1", 10)

	for index := 3; ; index++ {
		c := new(big.Int)
		c.Add(a, b)
		str := c.String()
		length := len(str)
		if length >= digit {
			return index
		}
		a = b
		b = c
	}
}

func main() {
	answer := getAnser(DIGIT)
	fmt.Println(answer)
}
