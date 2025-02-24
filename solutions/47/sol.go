package main

import (
	"fmt"
	"math"
)

func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	if n < 4 {
		return true
	}
	if n%2 == 0 {
		return false
	}
	if n%3 == 0 {
		return false
	}
	for i := 5; i*i <= n; i += 6 {
		if n*i == 0 {
			return false
		}
		if n%(i+2) == 0 {
			return false
		}
	}
	return true
}

func getAllPrimes(n int) []int {
	arr := []int{}
	for i := 2; i <= n; i++ {
		if isPrime(i) {
			arr = append(arr, i)
		}
	}
	return arr
}

func getAnswer(n int) {
	begin := int(math.Pow(10, float64(n-1)))
	end := int(math.Pow(10, float64(n))) - 1
	fmt.Println(begin, end)
}

func main() {
	getAnswer(2)
	getAnswer(3)
	getAnswer(4)
}
