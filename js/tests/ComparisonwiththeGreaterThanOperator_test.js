assert(testGreaterThan(0) === "10 or Under", 'message: <code>testGreaterThan(0)</code> should return "10 or Under"');
assert(testGreaterThan(10) === "10 or Under", 'message: <code>testGreaterThan(10)</code> should return "10 or Under"');
assert(testGreaterThan(11) === "Over 10", 'message: <code>testGreaterThan(11)</code> should return "Over 10"');
assert(testGreaterThan(99) === "Over 10", 'message: <code>testGreaterThan(99)</code> should return "Over 10"');
assert(testGreaterThan(100) === "Over 10", 'message: <code>testGreaterThan(100)</code> should return "Over 10"');
assert(testGreaterThan(101) === "Over 100", 'message: <code>testGreaterThan(101)</code> should return "Over 100"');
assert(testGreaterThan(150) === "Over 100", 'message: <code>testGreaterThan(150)</code> should return "Over 100"');
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1, 'message: You should use the <code>&gt;</code> operator at least twice');
