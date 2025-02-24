package main

import (
	"fmt"
	"math"
)

var K = int(math.Pow(10, 10))

func getProduct(n int) int {
	product := 1
	for i := 0; i < n; i++ {
		product = (product * n) % K
	}
	return product
}

func getAnswer(n int) int {
	answer := 0
	for i := 1; i <= n; i++ {
		answer = (answer + getProduct(i)) % K
	}
	return answer
}

func main() {
	fmt.Println(getAnswer((10)))
	fmt.Println(getAnswer((1000)))
}
