#!/usr/bin/env js
function titleCase(str) {
  var arr=str.split(" ");
  arr=arr.map(function(val){
    var va=val.toLowerCase().split("");
    va[0]=va[0].toUpperCase();
    return va.join('&#39;);
  });
  return arr.join(" ");
}

titleCase("I&#39;m a little tea pot");

