#!/usr/bin/env js
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var items=arr1.map(function(val){
      return val[1];
    });
    for(i=0;i<arr2.length;i++){
       var itemName=arr2[i][1];
       var j=arr1.reduce(function(res,entry,index){
        if(entry[1]==itemName) {
          return index;
        }
        return res;
      },-1);
      console.log(itemName+&#39; &#39;+ j);
       if(j==-1){
         console.log(&#39;Creating&#39;);
         items.push(itemName);

         arr1.push([arr2[i][0],itemName]);
         console.log(&#39;Created&#39;);
       } else {
         console.log(&#39;Adding&#39;);
         arr1[j][0]+=arr2[i][0];
       }
    }
    items.sort();
    arr1=items.map(function(itemName){
      var j=arr1.reduce(function(res,entry,index){
        if(entry[1]==itemName) {
          return index;
        }
        return res;
      },-1);
      return [arr1[j][0],itemName];
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);



