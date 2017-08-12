#!/usr/bin/env js
function pairwise(arr, arg) {
  var index = [];

  for(var a=0;a<arr.length;a++) {
   
    for (var i = 1; i < arr.length; i++) {
     

      if (arr[a] + arr[i] === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        index.push(+a, +i);
        break;
      }
    }
  }

  if (index.length >= 1) {
    
    return index.reduce(function(a, b) {
      return a + b;
    });
  } else
      return 0;
}

pairwise([1,4,2,3,0,5], 7);

