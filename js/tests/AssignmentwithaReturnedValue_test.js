assert(processed === 2, 'message: <code>processed</code> should have a value of <code>2</code>');
assert(/processed\s*=\s*processArg\(\s*7\s*\)\s*;/.test(code), 'message: You should assign <code>processArg</code> to <code>processed</code>');
