get_recurring_cycle() {
  while true; do
    awk "BEGIN { print 1 / $1 }"
    if [ true ]; then
      break
    fi
  done
}

get_recurring_cycle 2
get_recurring_cycle 3
get_recurring_cycle 4
get_recurring_cycle 5
get_recurring_cycle 6