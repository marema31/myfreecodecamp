#!/usr/bin/env js
function diffArray(arr1, arr2) {
  var found=[];
  var newArr1=arr1.filter(function(val){
    for(i=0;i<arr2.length;i++){
      if(arr2[i]==val){
        found.push(val);
        return false;
      }
    }
    return true;
  });
  var newArr2=arr2.filter(function(val){
        for(i=0;i<found.length;i++){
      if(found[i]==val){
        return false;
      }
    }
    return true;
  });
  var newArr=newArr1.concat(newArr2);
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

