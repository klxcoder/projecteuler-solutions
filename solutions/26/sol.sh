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

get_answer() {
  max_value=0
  max_length=0
  for i in $(eval echo {2..$1}); do
    output=($(get_recurring_cycle $i))
    if [ ${output[2]} -gt $max_length ]; then
      max_value=$i
      max_length=${output[2]}
    fi
  done
  echo $max_value
}

get_answer 10