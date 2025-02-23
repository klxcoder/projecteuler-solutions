package main

import "fmt"

func nextPermutation(arr []int) []int {
	n := len(arr)
	i := n - 2
	for i >= 0 && arr[i] >= arr[i+1] {
		i--
	}
	if i < 0 {
		return nil
	}
	k := i + 1
	for j := i + 1; j < n; j++ {
		if arr[j] > arr[i] && arr[j] < arr[k] {
			k = j
		}
	}
	tmp := arr[i]
	arr[i] = arr[k]
	arr[k] = tmp
	i++
	j := n - 1
	for i < j {
		tmp := arr[i]
		arr[i] = arr[j]
		arr[j] = tmp
		i++
		j--
	}
	return arr
}

func main() {
	// arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	arr := [5]int{1, 3, 5, 4, 2}
	nextArr := nextPermutation(arr[:])
	fmt.Print(nextArr) // [1 4 2 3 5]
}
