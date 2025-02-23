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

func getFlip(arr []int) []int {
	arrCopy := make([]int, len(arr))
	for i := 0; i < len(arr); i++ {
		arrCopy[i] = len(arr) + 1 - arr[i]
	}
	return arrCopy
}

func getNumber(arr []int) int {
	base := 1
	number := 0
	for i := len(arr) - 1; i >= 0; i-- {
		number += arr[i] * base
		base *= 10
	}
	return number
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
	arr := []int{1, 2, 3, 4, 5, 6, 7}
	nextArr := arr[:]
	for {
		flip := getFlip(nextArr)
		number := getNumber((flip))
		if isPrime(number) {
			fmt.Println(number)
			break
		}
		nextArr = nextPermutation(nextArr[:])
		if nextArr == nil {
			break
		}
	}
}
