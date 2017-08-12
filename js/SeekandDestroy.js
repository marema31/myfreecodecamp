#!/usr/bin/env js
function destroyer(arr) {
  // Remove all the values
  var filters=Array.from(arguments);
  filters.shift();
  arr=arr.filter(function(val){
    for(i=0;i<filters.length;i++){
      if(val==filters[i]){
        return false;
      }
    }
    return true;
  });
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

