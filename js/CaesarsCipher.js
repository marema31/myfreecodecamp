#!/usr/bin/env js
function rot13(str) { // LBH QVQ VG!
  var result="";
  for(i=0;i<str.length;i++){
    var code=str.charCodeAt(i);
    if(code <"A".charCodeAt(0) ||code > "Z".charCodeAt(0)){
      result+=str[i];
    }
    else {
      code-=13;
      if(code < "A".charCodeAt(0)){
        code+=26;
      }
      result+=String.fromCharCode(code);
    }
  }
  return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC ");

