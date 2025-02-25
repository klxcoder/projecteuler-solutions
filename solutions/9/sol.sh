#!/bin/bash

get_answer() {
  local a=1
  while [ true ]; do
    local b=$((a+1))
    while [ true ]; do
      local c=$(($1-a-b))
      if [ "$c" -le "$b" ]; then
        break
      fi
      if ((a*a+b*b==c*c)); then
        echo $(($a*$b*$c))
      fi
      ((b++))
    done
    ((a++))
    if [ "$a" -gt "$1" ]; then
      break
    fi
  done
}

get_answer 12
get_answer 1000