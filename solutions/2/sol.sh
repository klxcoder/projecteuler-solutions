#!/bin/bash

LIMIT=4000000

get_answer() {
  a=1
  b=2
  sum=2
  while [ true ]; do
    c=$((a + b))
    if [ $c -gt $1 ]; then
      break
    fi
    if [ $((c % 2)) -eq 0 ]; then
      sum=$((sum + c))  
    fi
    a=$b
    b=$c
  done
  echo $sum
}

get_answer $LIMIT