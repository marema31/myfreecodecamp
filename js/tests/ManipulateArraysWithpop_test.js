assert((function(d){if(d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray), 'message: <code>myArray</code> should only contain <code>[["John", 23]]</code>.');
assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code), 'message: Use <code>pop()</code> on <code>myArray</code>');
assert((function(d){if(d[0] == 'cat' && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray), 'message: <code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.');
