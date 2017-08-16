#!/usr/bin/env js
var cashValue = [
  { name: 'ONE HUNDRED', val: 100.00},
  { name: 'TWENTY', val: 20.00},
  { name: 'TEN', val: 10.00},
  { name: 'FIVE', val: 5.00},
  { name: 'ONE', val: 1.00},
  { name: 'QUARTER', val: 0.25},
  { name: 'DIME', val: 0.10},
  { name: 'NICKEL', val: 0.05},
  { name: 'PENNY', val: 0.01}
];

function checkCashRegister(price, cash, cid) {
  //To avoid rounding error, convert all to pennies
  var changeValue=cash*100-price*100;
  var change=[];
  var cashTotal=cid.reduce(function(res,val){
    return res+val[1]*100;
  },0);
  if(changeValue>cashTotal){
    return "Insufficient Funds";
  }
  if(changeValue==cashTotal){
    return "Closed";
  }
  for(var i=cid.length-1;i>=0;i--){
    var unitValue=cashValue.reduce(function(res,val){
      if(val.name==cid[i][0]){
        return val.val*100;
      } else {
        return res;
      }
    });
    var units=0;
    while(changeValue>=unitValue && cid[i][1]*100>units*unitValue ){
      units++;
      changeValue=changeValue-unitValue;
    }
    if(units>0){
      change.push([cid[i][0],units*unitValue/100]);    
    }
  }
  console.log(change);
  console.log(changeValue);
  if(changeValue>0){
    return "Insufficient Funds";
  }
  
  return change;
}

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);



