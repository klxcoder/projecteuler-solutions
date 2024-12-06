package main

import (
	"fmt"
	"strconv"
)

func getStr(n int) string {
	str := ""
	for num:=1; num<=n; num++ {
		str += strconv.Itoa(num)
	}
	return str
}

func main() {
	fmt.Print(getStr(20))
}