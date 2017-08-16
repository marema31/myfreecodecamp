assert(testLessThan(0) === "Under 25", 'message: <code>testLessThan(0)</code> should return "Under 25"');
assert(testLessThan(24) === "Under 25", 'message: <code>testLessThan(24)</code> should return "Under 25"');
assert(testLessThan(25) === "Under 55", 'message: <code>testLessThan(25)</code> should return "Under 55"');
assert(testLessThan(54) === "Under 55", 'message: <code>testLessThan(54)</code> should return "Under 55"');
assert(testLessThan(55) === "55 or Over", 'message: <code>testLessThan(55)</code> should return "55 or Over"');
assert(testLessThan(99) === "55 or Over", 'message: <code>testLessThan(99)</code> should return "55 or Over"');
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1, 'message: You should use the <code>&lt;</code> operator at least twice');
