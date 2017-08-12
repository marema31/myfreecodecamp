#!/usr/bin/env jsvar alphabet="abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(str) {
  firstLetter=alphabet.indexOf(str[0]);
  for(i=0;i<str.length;i++){
    if(str[i]!=alphabet[firstLetter+i]){
      return alphabet[firstLetter+i];
    }
  }
  return undefined;
}

fearNotLetter("abce");

