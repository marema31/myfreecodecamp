assert(typeof a === 'number' && a === 6, 'message: <code>a</code> should be defined and have a value of <code>6</code>');
assert(typeof b === 'number' && b === 15, 'message: <code>b</code> should be defined and have a value of <code>15</code>');
assert(!/undefined/.test(c) && c === "I am a String!", 'message: <code>c</code> should not contain <code>undefined</code> and should have a value of "I am a String!"');
assert(/a = a \+ 1;/.test(code) && /b = b \+ 5;/.test(code) && /c = c \+ " String!";/.test(code), 'message: Do not change code below the line');
