#!/bin/bash

is_palindromic() {
  local start=0
  local end=$(( ${#1} - 1 ))
  while [ $start -lt $end ]; do
    start_char=${1:$start:1}
    end_char=${1:$end:1}
    if [ $start_char != $end_char ]; then
      return 0
    fi
    ((start++))
    ((end--))
  done
  return 1
}

get_answer() {
  local start=$1
  local end=$2
  local i
  local j
  local product
  local max_length=0
  local max_product=0
  for ((i=$start; i<=$end; i++)) ; do
    for ((j=i; j<=end; j++)); do
      product=$(($i*$j))
      is_palindromic $product
      if [ $? -eq 1 ]; then
        if [ $product -gt $max_product ]; then
          max_product=$product
          max_length=${#product}
        fi
      fi
    done
  done
  echo $max_product
}

get_answer 10 99