package main

import (
	"fmt"
)

func getAnswer(arr [][]int) int {
	n := len(arr)
	for i := 1; i < n; i++ {
		arr[i][0] += arr[i-1][0]
		for j := 1; j < i; j++ {
			arr[i][j] += max(arr[i-1][j-1], arr[i-1][j])
		}
		arr[i][i] += arr[i-1][i-1]
	}
	answer := 0
	for i := 0; i < n; i++ {
		answer = max(answer, arr[n-1][i])
	}
	return answer
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
