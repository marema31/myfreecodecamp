assert(typeof myVar === 'undefined', 'message: No global <code>myVar</code> variable');
assert(/var\s+myVar/.test(code), 'message: Add a local <code>myVar</code> variable');
