#!/usr/bin/env js

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var lookedProp=Object.keys(source);
  arr=collection.filter(function(val){
    for(i=0;i<lookedProp.length;i++) {
      var key=lookedProp[i];
      if(! val.hasOwnProperty(key)){
      return false;
    }
    if(val[key]!=source[key]){
      return false;
    }  
    }
    return true;
  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

