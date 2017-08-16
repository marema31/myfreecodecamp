assert($("ul").length > 0, 'message: Create a <code>ul</code> element.');
assert($("ul li").length > 2, 'message: You should have three <code>li</code> elements within your <code>ul</code> element.');
assert(code.match(/<\/ul>/gi) && code.match(/<ul/gi) && code.match(/<\/ul>/gi).length === code.match(/<ul/gi).length, 'message: Make sure your <code>ul</code> element has a closing tag.');
assert(code.match(/<\/li>/gi) && code.match(/<li[\s>]/gi) && code.match(/<\/li>/gi).length === code.match(/<li[\s>]/gi).length, 'message: Make sure your <code>li</code> elements have closing tags.');
