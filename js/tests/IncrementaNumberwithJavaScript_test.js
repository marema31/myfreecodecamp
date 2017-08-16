assert(myVar === 88, 'message: <code>myVar</code> should equal <code>88</code>');
assert(/myVar\s*\=.*myVar/.test(code) === false, 'message: <code>myVar = myVar</code> should be changed');
assert(/[+]{2}\s*myVar|myVar\s*[+]{2}/.test(code), 'message: Use the <code>++</code> operator');
assert(/var myVar = 87;/.test(code), 'message: Do not change code above the line');
