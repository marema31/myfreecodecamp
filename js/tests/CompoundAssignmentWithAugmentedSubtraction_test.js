assert(a === 5, 'message: <code>a</code> should equal <code>5</code>');
assert(b === -6, 'message: <code>b</code> should equal <code>-6</code>');
assert(c === 2, 'message: <code>c</code> should equal <code>2</code>');
assert(code.match(/-=/g).length === 3, 'message: You should use the <code>-=</code> operator for each variable');
assert(/var a = 11;/.test(code) && /var b = 9;/.test(code) && /var c = 3;/.test(code), 'message: Do not modify the code above the line');
