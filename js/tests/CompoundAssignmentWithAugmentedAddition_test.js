assert(a === 15, 'message: <code>a</code> should equal <code>15</code>');
assert(b === 26, 'message: <code>b</code> should equal <code>26</code>');
assert(c === 19, 'message: <code>c</code> should equal <code>19</code>');
assert(code.match(/\+=/g).length === 3, 'message: You should use the <code>+=</code> operator for each variable');
assert(/var a = 3;/.test(code) && /var b = 17;/.test(code) && /var c = 12;/.test(code), 'message: Do not modify the code above the line');
