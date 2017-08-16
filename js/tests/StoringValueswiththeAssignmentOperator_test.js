assert(/var a;/.test(code) && /var b = 2;/.test(code), 'message: Do not change code above the line');
assert(typeof a === 'number' && a === 7, 'message: <code>a</code> should have a value of 7');
assert(typeof b === 'number' && b === 7, 'message: <code>b</code> should have a value of 7');
assert(/b\s*=\s*a\s*;/g.test(code), 'message: <code>a</code> should be assigned to <code>b</code> with <code>=</code>');
