#!/usr/bin/env js

function addTogether() {
  if(!Number.isFinite(arguments[0])){
    return undefined;
  }
  if(arguments.length ==1){
    var a=arguments[0]
    return function(val){
      if(Number.isFinite(val)){
        return val+a;
      }
      return undefined;
    };
  }
  if(!Number.isFinite(arguments[1])){
    return undefined;
  }
  return arguments[0]+arguments[1];
}

addTogether(2)(3);

