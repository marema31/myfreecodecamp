#!/usr/bin/env js
function largestOfFour(arr) {
  // You can do this!
  arr=arr.map(function(val){
    return val.reduce(function(largest,val){
      if (largest<val){
        return val;
      }
      return largest;
    });
  });
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

