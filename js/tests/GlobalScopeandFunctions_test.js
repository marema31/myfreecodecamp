assert(typeof myGlobal != "undefined", 'message: <code>myGlobal</code> should be defined');
assert(myGlobal === 10, 'message: <code>myGlobal</code> should have a value of <code>10</code>');
assert(/var\s+myGlobal/.test(code), 'message: <code>myGlobal</code> should be declared using the <code>var</code> keyword');
assert(typeof oopsGlobal != "undefined" && oopsGlobal === 5, 'message: <code>oopsGlobal</code> should have a value of <code>5</code>');
assert(!/var\s+oopsGlobal/.test(code), 'message: Do not declare <code>oopsGlobal</code> using the <code>var</code> keyword');
