#!/usr/bin/env js
function myReplace(str, before, after) {
  var arr=after.split("");                   
  if(before[0].match(/[A-Z]/)){
    arr[0]=arr[0].toUpperCase();
  } else {
    arr[0]=arr[0].toLowerCase();
  }
  after=arr.join('&#39;);
  return str.replace(new RegExp(before),after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

