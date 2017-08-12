#!/usr/bin/env jsfunction Fibs(suite,limit)
{
  a=suite[suite.length-2];
  b=suite[suite.length-1];
  if(a+b>limit){
    return suite;
  }
  suite.push(a+b);
  return Fibs(suite,limit);
}

function sumFibs(num) {
  var suite=Fibs([1,1],num);
  var result=suite.reduce(function(res,val){
    if(val%2 ==1){
      return res+val;
    }
    return res;
  });
  return result;
}

sumFibs(4);

