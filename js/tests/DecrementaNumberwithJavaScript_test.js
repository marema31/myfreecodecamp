assert(myVar === 10, 'message: <code>myVar</code> should equal <code>10</code>');
assert(/[-]{2}\s*myVar|myVar\s*[-]{2}/.test(code), 'message: Use the <code>--</code> operator on <code>myVar</code>');
assert(/var myVar = 11;/.test(code), 'message: Do not change code above the line');
