assert(myStr === "This is the first sentence. This is the second sentence.", 'message: <code>myStr</code> should have a value of <code>This is the first sentence. This is the second sentence.</code>');
assert(code.match(/\w\s*\+=\s*["']/g).length > 1 && code.match(/\w\s*\=\s*["']/g).length > 1, 'message: Use the <code>+=</code> operator to build <code>myStr</code>');
