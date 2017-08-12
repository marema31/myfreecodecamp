#!/usr/bin/env js
function steamrollArray(arr) {
  var flatArr=[];
  arr.map(function(val){
    if(Array.isArray(val)){
      var rArr=steamrollArray(val);
      flatArr=flatArr.concat(rArr);
    }
    else
    {
      flatArr.push(val);
    }
  });
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

