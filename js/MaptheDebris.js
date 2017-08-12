#!/usr/bin/env jsfunction findOrb(alt){
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return Math.round(2 * Math.PI * Math.sqrt(Math.pow(alt+earthRadius, 3)/GM));
  }
function orbitalPeriod(arr) {

  arr=arr.map(function(val){
    return {name:val.name,orbitalPeriod:findOrb(val.avgAlt)};
  });
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

