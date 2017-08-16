assert(code.match(/var\s*total\s*=\s*0\s*;/), 'message: <code>total</code> should be declared and initialized to 0');
assert(total === 20, 'message: <code>total</code> should equal 20');
assert(code.match(/for\s*\(/g).length > 1 && code.match(/myArr\s*\[/), 'message: You should use a <code>for</code> loop to iterate through <code>myArr</code>');
assert(!code.match(/total[\s\+\-]*=\s*(\d(?!\s*;)|[1-9])/g), 'message: Do not set <code>total</code> to 20 directly');
