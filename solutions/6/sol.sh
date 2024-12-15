#!/bin/bash

sumOfSquares() {
  local sum=0
  local num
  for num in $(seq 1 $1); do
    sum=$((sum+num*num))
  done
  echo $sum
}

get_answer() {
  sumOfSquares $1
}

get_answer 10