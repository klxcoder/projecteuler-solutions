package main

import (
	"fmt"
	"strconv"
	"strings"
)

const LIMIT = 1_000_000

func getStr(n int) string {
	var builder strings.Builder
	builder.Grow(n * 7)
	for num:=1; num<=n; num++ {
		builder.WriteString(strconv.Itoa(num))
		if builder.Len() > n {
			break
		}
	}
	return builder.String()
}

func getAnswer() int {
	str := getStr(LIMIT)
	answer := 1
	for num:=1; num<=LIMIT; num*=10 {
		answer *= int(str[num-1] - '0')
	}
	return answer
}

func main() {
	answer := getAnswer()
	fmt.Print(answer)
}