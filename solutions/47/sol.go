package main

import (
	"fmt"
	"math"
)

func getAllPrimes(n int) []int {
	arr := []int{}
	for i := 2; n != 1; i++ {
		if n%i == 0 {
			arr = append(arr, i)
			for n%i == 0 {
				n /= i
			}
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
	fmt.Println(getAllPrimes(644))
	fmt.Println(getAllPrimes(645))
	fmt.Println(getAllPrimes(646))
}
