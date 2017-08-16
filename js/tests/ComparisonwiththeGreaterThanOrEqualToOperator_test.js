assert(testGreaterOrEqual(0) === "9 or Under", 'message: <code>testGreaterOrEqual(0)</code> should return "9 or Under"');
assert(testGreaterOrEqual(9) === "9 or Under", 'message: <code>testGreaterOrEqual(9)</code> should return "9 or Under"');
assert(testGreaterOrEqual(10) === "10 or Over", 'message: <code>testGreaterOrEqual(10)</code> should return "10 or Over"');
assert(testGreaterOrEqual(11) === "10 or Over", 'message: <code>testGreaterOrEqual(11)</code> should return "10 or Over"');
assert(testGreaterOrEqual(19) === "10 or Over", 'message: <code>testGreaterOrEqual(19)</code> should return "10 or Over"');
assert(testGreaterOrEqual(100) === "20 or Over", 'message: <code>testGreaterOrEqual(100)</code> should return "20 or Over"');
assert(testGreaterOrEqual(21) === "20 or Over", 'message: <code>testGreaterOrEqual(21)</code> should return "20 or Over"');
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1, 'message: You should use the <code>&gt;=</code> operator at least twice');
