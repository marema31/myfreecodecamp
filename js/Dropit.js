#!/usr/bin/env js
function dropElements(arr, func) {
  while(arr && !func(arr[0])){
    arr.shift();
  }
  
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });

