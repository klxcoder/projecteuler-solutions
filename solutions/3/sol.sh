#!/bin/bash

LIMIT=600851475143

get_primes() {
  isPrimes=()
  isPrimes[0]=0
  isPrimes[1]=0
  for (( i=2; i<=$1; i++ )); do
    isPrimes[$i]=1
  done
  square_root=$(awk "BEGIN {print int(sqrt($1))}")
  primes=()
  for (( i=2; i<=$square_root; i++ )); do
    if [ ${isPrimes[$i]} -eq 1 ]; then
      for (( j=$i*$i; j<=$1; j+=i )); do
        isPrimes[$j]=0
      done
    fi
  done
   for (( i=$1; i>=2; i-- )); do
    if [ ${isPrimes[$i]} -eq 1 ]; then
      primes+=($i)
    fi
  done
  echo "${primes[@]}"
}

get_answer() {
  square_root=$(awk "BEGIN {print int(sqrt($1))}")
  primes=($(get_primes $square_root))
  for prime in ${primes[@]}; do
    if [ $(( $1 % $prime )) -eq 0 ]; then
      echo $prime
      break
    fi  
  done
}

get_answer 13195