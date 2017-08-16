assert(testStrict(10) === "Not Equal", 'message: <code>testStrict(10)</code> should return "Not Equal"');
assert(testStrict(7) === "Equal", 'message: <code>testStrict(7)</code> should return "Equal"');
assert(testStrict("7") === "Not Equal", 'message: <code>testStrict("7")</code> should return "Not Equal"');
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0, 'message: You should use the <code>===</code> operator');
