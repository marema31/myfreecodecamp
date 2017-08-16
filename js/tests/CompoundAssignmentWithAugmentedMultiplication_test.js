assert(a === 25, 'message: <code>a</code> should equal <code>25</code>');
assert(b === 36, 'message: <code>b</code> should equal <code>36</code>');
assert(c === 46, 'message: <code>c</code> should equal <code>46</code>');
assert(code.match(/\*=/g).length === 3, 'message: You should use the <code>*=</code> operator for each variable');
assert(/var a = 5;/.test(code) && /var b = 12;/.test(code) && /var c = 4\.6;/.test(code), 'message: Do not modify the code above the line');
