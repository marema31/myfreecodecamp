#!/usr/bin/env js

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num<1){
    return "";
  }
  var result=[];
  for(i=0;i<num;i++){
    result.push(str);
  }
  return result.join("");
}

repeatStringNumTimes("abc", 3);

