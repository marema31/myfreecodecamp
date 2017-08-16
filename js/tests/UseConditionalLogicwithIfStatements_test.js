assert(typeof trueOrFalse === "function", 'message: <code>trueOrFalse</code> should be a function');
assert(typeof trueOrFalse(true) === "string", 'message: <code>trueOrFalse(true)</code> should return a string');
assert(typeof trueOrFalse(false) === "string", 'message: <code>trueOrFalse(false)</code> should return a string');
assert(trueOrFalse(true) === "Yes, that was true", 'message: <code>trueOrFalse(true)</code> should return "Yes, that was true"');
assert(trueOrFalse(false) === "No, that was false", 'message: <code>trueOrFalse(false)</code> should return "No, that was false"');
