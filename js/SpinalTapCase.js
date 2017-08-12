#!/usr/bin/env js
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str=str.split(&#39;&#39;).map(function(val,index){
    if(val.match(/[A-Z]/) && index !=0){
                 return &#39; &#39;+val.toLowerCase();
                 }
    if(val=="_"){
      return " ";
    }
       return val.toLowerCase();
  }).join(&#39;&#39;);
  return str.replace(/\s+/g,"-");
}

spinalCase(&#39;This Is Spinal Tap&#39;);

