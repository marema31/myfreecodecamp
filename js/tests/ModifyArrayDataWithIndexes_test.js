assert((function(){if(typeof myArray != 'undefined' && myArray[0] == 3 && myArray[1] == 2 && myArray[2] == 3){return true;}else{return false;}})(), 'message: <code>myArray</code> should now be [3,2,3].');
assert((function(){if(code.match(/myArray\[0\]\s*=\s*/g)){return true;}else{return false;}})(), 'message: You should be using correct index to modify the value in <code>myArray</code>.');
