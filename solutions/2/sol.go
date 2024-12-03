package main

import "fmt"

const LIMIT = 4_000_000

func isEven(number int) bool {
	return number%2 == 0
}

func main() {
	fmt.Println(isEven(10))
	fmt.Println(isEven(11))
}