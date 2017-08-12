#!/usr/bin/env js
function sumPrimes(num) {
  var primes=[2];
  for(i=3;i<=num;i++){
    isPrime=true;
    for(j=0;j<primes.length;j++){
      if(i%primes[j]===0){
          isPrime=false;
      }
    }
    if(isPrime){
      primes.push(i);     
    }
  }
  num=primes.reduce(function(res,val){
    return res+val;
  });
  return num;
}

sumPrimes(10);

