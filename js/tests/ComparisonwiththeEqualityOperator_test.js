assert(testEqual(10) === "Not Equal", 'message: <code>testEqual(10)</code> should return "Not Equal"');
assert(testEqual(12) === "Equal", 'message: <code>testEqual(12)</code> should return "Equal"');
assert(testEqual("12") === "Equal", 'message: <code>testEqual("12")</code> should return "Equal"');
assert(code.match(/==/g) && !code.match(/===/g), 'message: You should use the <code>==</code> operator');
