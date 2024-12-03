package main

import "fmt"

const LIMIT = 4_000_000

func isEven(number int) bool {
	return number%2 == 0
}

func getFibSequence(limit int) []int {
	fibSequence := []int{1,2}
	return fibSequence
}

func main() {
	fmt.Println(getFibSequence(100))
}