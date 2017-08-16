#!/usr/bin/env js

function uniteUnique(arr) {
  var result=[''];
  arr=Array.prototype.slice.call(arguments);
  for(i=0;i<arr.length;i++){
      for(j=0;j<arr[i].length;j++){
  

        var isfound=result.reduce(function(res,val){
          return res || (val==arr[i][j]);
        });
        if(!isfound){
          result.push(arr[i][j]);
        }
      }
  }
  result.shift();
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

