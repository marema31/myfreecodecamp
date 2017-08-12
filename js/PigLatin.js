#!/usr/bin/env js
function translatePigLatin(str) {
  if(str[0].match(/[aeiouy]/)){
    return str+"way";
  }
  var arr=str.split("");
  var result=arr;
  for(i=0;i<arr.length && (! str[i].match(/[aeiouy]/));i++){
    var letter=arr.shift();
    arr.push(letter);
  }
  return arr.join('&#39;)+"ay";
}

translatePigLatin("consonant");

