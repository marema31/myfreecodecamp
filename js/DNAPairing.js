#!/usr/bin/env js
var pairs={
           'A': 'T',
           'T': 'A',
           'C': 'G',
           'G': 'C',
          };

function pairElement(str) {
  return str.split('').map(function(val){
    return [val,pairs[val]];
  });
}

pairElement("GCG");

