#!/bin/bash

LIMIT=600851475143

get_smaller() {
  n=$1
  k=$2
  while [ $((n%k)) -eq 0 ]; do
    n=$(($n/$k))
  done
  echo $n
}

get_answer() {
  n=$1
  k=2
  while [ true ]; do
    n=$(get_smaller $n $k)
    if [ $n -eq 1 ]; then
      echo $k
      break
    fi
    k=$(($k+1))
  done
}

get_answer $LIMIT