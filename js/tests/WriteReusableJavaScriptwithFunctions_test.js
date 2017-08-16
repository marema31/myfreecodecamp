assert(typeof reusableFunction === 'function', 'message: <code>reusableFunction</code> should be a function');
assert("Hi World" === logOutput, 'message: <code>reusableFunction</code> should output "Hi World" to the dev console');
assert(/^\s*reusableFunction\(\)\s*;/m.test(code), 'message: Call <code>reusableFunction</code> after you define it');
