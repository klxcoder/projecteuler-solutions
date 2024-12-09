#!/bin/bash

get_recurring_cycle() {
  declare -A flags
  remainder=1
  result="0."
  index=1
  while true; do
    a=$((remainder * 10))
    if [ ${flags[$a]} ] || [ "$remainder" == "0" ]; then
      if [ "$remainder" == "0" ]; then
        echo "$1 $result 0"
      else
        length=$((index-${flags[$a]}))
        echo "$1 $result $length"
      fi
      break
    fi
    flags[$a]=$index
    digit=$(($a/$1))
    result="$result$digit"
    remainder=$(($a%$1))
    index=$((index+1))
  done
}

get_recurring_cycle 2
get_recurring_cycle 3
get_recurring_cycle 4
get_recurring_cycle 5
get_recurring_cycle 6
get_recurring_cycle 7
get_recurring_cycle 8
get_recurring_cycle 9
get_recurring_cycle 10