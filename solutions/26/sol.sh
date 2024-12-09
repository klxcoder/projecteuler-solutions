#!/bin/bash

get_recurring_cycle() {
  echo "get_recurring_cycle for number $1"
  declare -A flags
  remainder=1
  while true; do
    a=$((remainder * 10))
    digit=$(($a/$1))
    remainder=$(($a%$1))
    if [ ${flags[$remainder]} ]; then
      break
    else
      echo "digit = $digit"
      echo "remainder = $remainder"
    fi
    flags[$remainder]=1

  done
}

get_recurring_cycle 2
get_recurring_cycle 3
get_recurring_cycle 4
get_recurring_cycle 5
get_recurring_cycle 6