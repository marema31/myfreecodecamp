assert(testLessOrEqual(0) === "Smaller Than or Equal to 12", 'message: <code>testLessOrEqual(0)</code> should return "Smaller Than or Equal to 12"');
assert(testLessOrEqual(11) === "Smaller Than or Equal to 12", 'message: <code>testLessOrEqual(11)</code> should return "Smaller Than or Equal to 12"');
assert(testLessOrEqual(12) === "Smaller Than or Equal to 12", 'message: <code>testLessOrEqual(12)</code> should return "Smaller Than or Equal to 12"');
assert(testLessOrEqual(23) === "Smaller Than or Equal to 24", 'message: <code>testLessOrEqual(23)</code> should return "Smaller Than or Equal to 24"');
assert(testLessOrEqual(24) === "Smaller Than or Equal to 24", 'message: <code>testLessOrEqual(24)</code> should return "Smaller Than or Equal to 24"');
assert(testLessOrEqual(25) === "25 or More", 'message: <code>testLessOrEqual(25)</code> should return "25 or More"');
assert(testLessOrEqual(55) === "25 or More", 'message: <code>testLessOrEqual(55)</code> should return "25 or More"');
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1, 'message: You should use the <code>&lt;=</code> operator at least twice');
