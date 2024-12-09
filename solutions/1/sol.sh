#!/bin/bash

get_answer() {
  sum=0
  for ((i=1; i<=$1-1; i++)); do
    if (( i % 3 ==0 || i % 5 == 0 )); then
      sum=$((sum+i))
    fi
  done
  echo $sum
}

get_answer 10