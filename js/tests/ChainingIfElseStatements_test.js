assert(code.match(/else/g).length > 3, 'message: You should have at least four <code>else</code> statements');
assert(code.match(/if/g).length > 3, 'message: You should have at least four <code>if</code> statements');
assert(code.match(/return/g).length >= 1, 'message: You should have at least one <code>return</code> statement');
assert(testSize(0) === "Tiny", 'message: <code>testSize(0)</code> should return "Tiny"');
assert(testSize(4) === "Tiny", 'message: <code>testSize(4)</code> should return "Tiny"');
assert(testSize(5) === "Small", 'message: <code>testSize(5)</code> should return "Small"');
assert(testSize(8) === "Small", 'message: <code>testSize(8)</code> should return "Small"');
assert(testSize(10) === "Medium", 'message: <code>testSize(10)</code> should return "Medium"');
assert(testSize(14) === "Medium", 'message: <code>testSize(14)</code> should return "Medium"');
assert(testSize(15) === "Large", 'message: <code>testSize(15)</code> should return "Large"');
assert(testSize(17) === "Large", 'message: <code>testSize(17)</code> should return "Large"');
assert(testSize(20) === "Huge", 'message: <code>testSize(20)</code> should return "Huge"');
assert(testSize(25) === "Huge", 'message: <code>testSize(25)</code> should return "Huge"');