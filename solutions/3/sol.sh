#!/bin/bash

LIMIT=600851475143

get_answer() {
  square_root=$(awk "BEGIN {print int(sqrt($1))}")
  echo $square_root
}

get_answer $LIMIT # 775146