assert($("h1").hasClass("pink-text"), 'message: Your <code>h1</code> element should have the class <code>pink-text</code>.');
assert($("h1").hasClass("blue-text"), 'message: Your <code>h1</code> element should have the class <code>blue-text</code>.');
assert($("h1").attr("id") === "orange-text", 'message: Give your <code>h1</code> element the id of <code>orange-text</code>.');
assert(code.match(/#orange-text\s*{/gi), 'message: Create a CSS declaration for your <code>orange-text</code> id');
assert(!code.match(/<h1.*style.*>/gi), 'message: Do not give your <code>h1</code> any <code>style</code> attributes.');
assert($("h1").css("color") === "rgb(255, 165, 0)", 'message: Your <code>h1</code> element should be orange.');
