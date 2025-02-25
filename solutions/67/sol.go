package main

import (
	"fmt"
)

func getAnswer(arr [][]int) [][]int {
	n := len(arr)
	for i := 1; i < n; i++ {
		arr[i][0] += arr[i-1][0]
		arr[i][i] += arr[i-1][i-1]
	}
	return arr
}

func main() {
	arr := [][]int{
		{3},
		{7, 4},
		{2, 4, 6},
		{8, 5, 9, 3},
	}
	fmt.Println(getAnswer(arr))
}
