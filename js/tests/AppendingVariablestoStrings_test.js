assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2, 'message: <code>someAdjective</code> should be set to a string at least 3 characters long');
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0, 'message: Append <code>someAdjective</code> to <code>myStr</code> using the <code>+=</code> operator');
