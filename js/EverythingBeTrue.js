#!/usr/bin/env js

function truthCheck(collection, pre) {
  return collection.reduce(function(res,val){
    if(!val.hasOwnProperty(pre) || !val[pre]){
      return false;
    }
    return res;
  },true);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

