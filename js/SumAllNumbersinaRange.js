#!/usr/bin/env js

function sumAll(arr) {
  var min=arr[0];
  var max=arr[1];
  if(arr[0]>arr[1]){
    min=arr[1];
    max=arr[0];
  }
  var allValues=Array.apply(0, Array(max-min+1))
        .map(function (element, index) { 
          return index + min;  
      });
  var total=allValues.reduce(function(r,v){
    return r+v;
  });
  return total;
}

sumAll([5, 10]);

