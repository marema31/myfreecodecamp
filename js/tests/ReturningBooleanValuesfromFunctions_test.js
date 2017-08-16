assert(isLess(10,15) === true, 'message: <code>isLess(10,15)</code> should return <code>true</code>');
assert(isLess(15, 10) === false, 'message: <code>isLess(15,10)</code> should return <code>false</code>');
assert(!/if|else/g.test(code), 'message: You should not use any <code>if</code> or <code>else</code> statements');
