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
		if builder.Len() > LIMIT {
			break
		}
	}
	return builder.String()
}

func main() {
	fmt.Print(len(getStr(LIMIT)))
}