#!/usr/bin/env js

function palindrome(str) {
  // Good luck!
  str=str.toLowerCase().replace(/[^\da-z]/g,"");
  revstr=str.split("").reverse().join("");
  return str==revstr;
}



palindrome("eye");

