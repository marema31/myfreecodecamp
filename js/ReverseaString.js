#!/usr/bin/env js

function reverseString(str) {
  var array=str.split("");
  str=array.reverse().join("");
  return str;
}

reverseString("hello");

