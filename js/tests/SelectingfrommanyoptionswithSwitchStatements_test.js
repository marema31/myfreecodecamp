assert(caseInSwitch(1) === "alpha", 'message: <code>caseInSwitch(1)</code> should have a value of "alpha"');
assert(caseInSwitch(2) === "beta", 'message: <code>caseInSwitch(2)</code> should have a value of "beta"');
assert(caseInSwitch(3) === "gamma", 'message: <code>caseInSwitch(3)</code> should have a value of "gamma"');
assert(caseInSwitch(4) === "delta", 'message: <code>caseInSwitch(4)</code> should have a value of "delta"');
assert(!/else/g.test(code) || !/if/g.test(code), 'message: You should not use any <code>if</code> or <code>else</code> statements');
assert(code.match(/break/g).length > 2, 'message: You should have at least 3 <code>break</code> statements');
