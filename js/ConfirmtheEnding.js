#!/usr/bin/env js

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  endstr=str.substr(str.length-target.length,target.length);
  return target==endstr;
}

confirmEnding("Bastian", "n");

