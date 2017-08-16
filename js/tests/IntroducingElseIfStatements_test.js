assert(code.match(/else/g).length > 1, 'message: You should have at least two <code>else</code> statements');
assert(code.match(/if/g).length > 1, 'message: You should have at least two <code>if</code> statements');
assert(testElseIf(0) === "Smaller than 5", 'message: <code>testElseIf(0)</code> should return "Smaller than 5"');
assert(testElseIf(5) === "Between 5 and 10", 'message: <code>testElseIf(5)</code> should return "Between 5 and 10"');
assert(testElseIf(7) === "Between 5 and 10", 'message: <code>testElseIf(7)</code> should return "Between 5 and 10"');
assert(testElseIf(10) === "Between 5 and 10", 'message: <code>testElseIf(10)</code> should return "Between 5 and 10"');
assert(testElseIf(12) === "Greater than 10", 'message: <code>testElseIf(12)</code> should return "Greater than 10"');
