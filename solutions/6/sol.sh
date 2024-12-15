#!/bin/bash

sumOfSquares() {
  local sum=0
  local num
  for num in $(seq 1 $1); do
    sum=$((sum+num*num))
  done
  echo $sum
}

squareOfSum() {
  local sum=$(($1*($1+1)/2))
  echo $((sum*sum))
}

get_answer() {
  local first_number=$(squareOfSum $1)
  local second_number=$(sumOfSquares $1)
  echo $((first_number-second_number))
}

get_answer 100