#!/bin/bash

get_answer() {
  start=$1
  end=$2
  for ((i=$start; i<=$end; i++)) ; do
    for ((j=i; j<=end; j++)); do
      echo $i $j
    done
  done
}

get_answer 10 12