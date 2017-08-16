assert(myStr === "This is the start. This is the end.", 'message: <code>myStr</code> should have a value of <code>This is the start. This is the end.</code>');
assert(code.match(/(["']).*(["'])\s*\+\s*(["']).*(["'])/g).length > 1, 'message: Use the <code>+</code> operator to build <code>myStr</code>');
assert(/var\s+myStr/.test(code), 'message: <code>myStr</code> should be created using the <code>var</code> keyword.');
assert(/myStr\s*=/.test(code), 'message: Make sure to assign the result to the <code>myStr</code> variable.');
