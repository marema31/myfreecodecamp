assert(testStrictNotEqual(17) === "Equal", 'message: <code>testStrictNotEqual(17)</code> should return "Equal"');
assert(testStrictNotEqual("17") === "Not Equal", 'message: <code>testStrictNotEqual("17")</code> should return "Not Equal"');
assert(testStrictNotEqual(12) === "Not Equal", 'message: <code>testStrictNotEqual(12)</code> should return "Not Equal"');
assert(testStrictNotEqual("bob") === "Not Equal", 'message: <code>testStrictNotEqual("bob")</code> should return "Not Equal"');
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0, 'message: You should use the <code>!==</code> operator');
