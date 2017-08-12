#!/usr/bin/env js
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var result=[];
  for(i=0;i<(arr.length/size);i++){
    var sub=[];
    for(j=0;j<size && i*size+j <arr.length;j++){
      sub.push(arr[i*size+j]);
    }
    result.push(sub);
  }
  return result;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

