#!/bin/bash

# Greatest common divisor
gcd() {
  if [ $1 -eq 0 ]; then
    echo $2
    return 0
  fi
  if [ "$1" -gt "$2" ]; then
    gcd $(( $1 % $2 )) "$2"
  else
    gcd $(( $2 % $1 )) "$1"
  fi
}

# Least common multiple
lcm() {
  local g=$(gcd $1 $2)
  echo $(( $1 * $2 / $g ))
}

get_answer() {
  lcm $1 $2
}

get_answer 10 12