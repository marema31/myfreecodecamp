assert(a === 4, 'message: <code>a</code> should equal <code>4</code>');
assert(b === 27, 'message: <code>b</code> should equal <code>27</code>');
assert(c === 3, 'message: <code>c</code> should equal <code>3</code>');
assert(code.match(/\/=/g).length === 3, 'message: You should use the <code>/=</code> operator for each variable');
assert(/var a = 48;/.test(code) && /var b = 108;/.test(code) && /var c = 33;/.test(code), 'message: Do not modify the code above the line');
