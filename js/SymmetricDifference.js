#!/usr/bin/env jsfunction diff(arr1,arr2){
  return arr1.filter(function(val){
      for(var i=0;i<arr2.length;i++){
        if(val==arr2[i]){
          return false;
        }
      }
      return true;
    },[]);  
}

function sym(args) {
  var rArgs=args;
  for(var i=1;i<arguments.length;i++){
    args=rArgs;
    rArgs=diff(rArgs,arguments[i]);
    rArgs=rArgs.concat(diff(arguments[i],args));
  }
  rArgs=rArgs.filter(function (value, index, self) { 
    return self.indexOf(value) === index;
});
return rArgs.sort();
}


sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
