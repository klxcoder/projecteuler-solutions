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

func isPrime(n int) bool {
	if n < 2 {
		return false
	}
	if n == 2 || n == 3 {
		return true
	}
	if n%2 == 0 || n%3 == 0 {
		return false
	}
	for i := 5; i*i <= n; i += 6 {
		if n%i == 0 || n%(i+2) == 0 {
			return false
		}
	}
	return true
}

func main() {
	// arr := [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	arr := [5]int{1, 3, 5, 4, 2}
	nextArr := nextPermutation(arr[:])
	fmt.Print(nextArr) // [1 4 2 3 5]
	for i := 1; i <= 20; i++ {
		if isPrime(i) {
			fmt.Println(i)
		}
	}
}
