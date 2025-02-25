package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
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

func getArr(n int) [][]int {
	arr := make([][]int, n)
	file, err := os.Open("triangle.txt")
	if err != nil {
		fmt.Println("Error opening file:", err)
		return nil
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	i := 0
	for scanner.Scan() {
		line := scanner.Text()
		strNumbers := strings.Split(line, " ")
		arr[i] = make([]int, i+1)
		for j, strNumber := range strNumbers {
			arr[i][j], _ = strconv.Atoi(strNumber)
		}
		i++
		if i == n {
			break
		}
	}

	if err := scanner.Err(); err != nil {
		fmt.Println("Error reading file:", err)
	}
	return arr
}

func main() {
	arr1 := [][]int{
		{3},
		{7, 4},
		{2, 4, 6},
		{8, 5, 9, 3},
	}
	fmt.Println(getAnswer(arr1))
	arr2 := getArr(100)
	fmt.Println(getAnswer(arr2))
}
