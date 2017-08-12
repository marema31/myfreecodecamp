#!/usr/bin/env js
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
       count++;
       break;
      case 10:
      case 'J&#39;:
      case &#39;Q&#39;:
      case &#39;K&#39;:
      case &#39;A&#39;:
       count--;
       break;
  }  
  if (count>0){
  return count + " Bet"; 
  }
  return count + " Hold";

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc(&#39;K&#39;); cc(&#39;A&#39;);

