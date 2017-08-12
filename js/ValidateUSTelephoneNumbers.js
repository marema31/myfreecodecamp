#!/usr/bin/env js
function telephoneCheck(str) {
  str=str.replace(/ /g,"");
  if(str.match(/[^\d-()]/)){
    return false;          
               }
  if (str.match(/^1?\d\d\d-?\d\d\d-?\d\d\d\d$/)){  
    return true;
  }
  if (str.match(/^1?\(\d\d\d\)-?\d\d\d-?\d\d\d\d$/)){  
    return true;
  }

  // Good luck!
  return false;
}



telephoneCheck("1 (555) 555-5555");

