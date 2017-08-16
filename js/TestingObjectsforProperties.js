#!/usr/bin/env js

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (!myObj.hasOwnProperty(checkProp)){
    return "Not Found";
  }
  return myObj[checkProp];
}

// Test your code by modifying these values
checkObj("gift");

