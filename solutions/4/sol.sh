#!/bin/bash

is_palindromic() {
  local start=0
  local end=$(( ${#1} - 1 ))
  while [ $start -lt $end ]; do
    ((start++))
    ((end--))
  done
  echo $1 $start $end
}

get_answer() {
  local start=$1
  local end=$2
  local i
  local j
  for ((i=$start; i<=$end; i++)) ; do
    for ((j=i; j<=end; j++)); do
      product=$(($i*$j))
      is_palindromic $product
    done
  done
}

get_answer 10 12