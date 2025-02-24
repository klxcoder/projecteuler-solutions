package main

import (
	"fmt"
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

func main() {
	primes := getAllPrimes(100)
	fmt.Println(primes)
}
