assert(typeof playerNumber === 'number', 'message: <code>playerNumber</code> should be a number');
assert(typeof player === 'string', 'message: The variable <code>player</code> should be a string');
assert(player === 'Montana', 'message: The value of <code>player</code> should be "Montana"');
assert(/testObj\s*?\[.*?\]/.test(code),'message: You should use bracket notation to access <code>testObj</code>');
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code),'message: You should be using the variable <code>playerNumber</code> in your bracket notation');
