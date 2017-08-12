#!/usr/bin/env js
function myLocalScope() {
  'use strict&#39;;
  var myVar="toto";
  
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test


