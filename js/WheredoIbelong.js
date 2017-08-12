#!/usr/bin/env js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.sort(function(a,b){
           return a-b;
           });
  for(i=0;i<arr.length;i++){
    if(arr[i]>=num){
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
