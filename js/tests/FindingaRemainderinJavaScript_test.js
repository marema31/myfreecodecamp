assert(/var\s+?remainder/.test(code), 'message: The variable <code>remainder</code> should be initialized');
assert(remainder === 2, 'message: The value of <code>remainder</code> should be <code>2</code>');
assert(/\s+?remainder\s*?=\s*?.*%.*;/.test(code), 'message: You should use the <code>%</code> operator');
