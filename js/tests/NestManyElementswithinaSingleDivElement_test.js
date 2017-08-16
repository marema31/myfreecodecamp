assert($("div").children("p").length > 1, 'message: Nest your <code>p</code> elements inside your <code>div</code> element.');
assert($("div").children("ul").length > 0, 'message: Nest your <code>ul</code> element inside your <code>div</code> element.');
assert($("div").children("ol").length > 0, 'message: Nest your <code>ol</code> element inside your <code>div</code> element.');
assert(code.match(/<\/div>/g) && code.match(/<\/div>/g).length === code.match(/<div>/g).length, 'message: Make sure your <code>div</code> element has a closing tag.');
