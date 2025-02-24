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

func getAnswer(n int) int {
	begin := int(math.Pow(10, float64(n-1)))
	end := int(math.Pow(10, float64(n))) - 1
	count := 0
	for i := begin; i <= end; i++ {
		if len(getAllPrimes(i)) == n {
			count++
			if count == n {
				return i - n + 1
			}
		} else {
			count = 0
		}
	}
	return -1
}

func main() {
	fmt.Println(getAnswer(2))
	fmt.Println(getAnswer(3))
	fmt.Println(getAnswer(4))
}
