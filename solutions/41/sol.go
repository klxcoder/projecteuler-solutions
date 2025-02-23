package main

import "fmt"

func main() {
	// arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	arr := [...]int{1, 3, 5, 4, 2}
	n := 5
	i := 3
	for i >= 0 && arr[i] >= arr[i+1] {
		i--
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
	fmt.Print(arr) // [1 4 2 3 5]
}
