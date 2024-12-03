package main

import "fmt"

const LIMIT = 4_000_000

func isEven(number int) bool {
	return number%2 == 0
}

func getFibSequence(limit int) []int {
	fibSequence := []int{1,2}
	for {
		lastTwo := fibSequence[len(fibSequence)-2:]
		first, second := lastTwo[0], lastTwo[1]
		term := first + second
		if term > limit {
			break
		}
		fibSequence = append(fibSequence, term)
	}
	return fibSequence
}

func main() {
	fmt.Println(getFibSequence(100))
}