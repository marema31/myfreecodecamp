#!/usr/bin/env js

function findLongestWord(str) {
  arr=str.split(" ");
  str=arr.reduce(function(longuest,word){
    if (longuest.length<word.length){
      return word;
    } else {
      return longuest;
    }
  });
  return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

