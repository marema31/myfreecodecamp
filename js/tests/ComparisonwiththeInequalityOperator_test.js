assert(testNotEqual(99) === "Equal", 'message: <code>testNotEqual(99)</code> should return "Equal"');
assert(testNotEqual("99") === "Equal", 'message: <code>testNotEqual("99")</code> should return "Equal"');
assert(testNotEqual(12) === "Not Equal", 'message: <code>testNotEqual(12)</code> should return "Not Equal"');
assert(testNotEqual("12") === "Not Equal", 'message: <code>testNotEqual("12")</code> should return "Not Equal"');
assert(testNotEqual("bob") === "Not Equal", 'message: <code>testNotEqual("bob")</code> should return "Not Equal"');
assert(code.match(/(?!!==)!=/), 'message: You should use the <code>!=</code> operator');
