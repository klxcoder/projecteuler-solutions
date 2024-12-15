#!/bin/bash

sumOfSquares() {
  local num
  for num in $(seq 1 $1); do
    echo $num
  done
}

get_answer() {
  sumOfSquares $1
}

get_answer 10