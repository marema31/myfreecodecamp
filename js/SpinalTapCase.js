#!/usr/bin/env js

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str=str.split('').map(function(val,index){
    if(val.match(/[A-Z]/) && index !=0){
                 return ' '+val.toLowerCase();
                 }
    if(val=="_"){
      return " ";
    }
       return val.toLowerCase();
  }).join('');
  return str.replace(/\s+/g,"-");
}

spinalCase('This Is Spinal Tap');

