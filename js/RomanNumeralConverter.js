#!/usr/bin/env js
var convert = [
              ['','I','II','III','IV','V','VI','VII','VIII','IX'],
              ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
              ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
              ['','M','MM','MMM']
              ];

function convertToRoman(num) {
 var arr=num.toString().split('').reverse();
 var result="";
  for(i=0;i<arr.length;i++){
    result=convert[i][arr[i]]+result;
  }
 return result;
}

convertToRoman(36);

