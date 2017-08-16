assert((/Top 3 things cats hate:/i).test($("ol").prev().text()), 'message: You should have an ordered list for "Top 3 things cats hate:"');
assert((/Things cats love:/i).test($("ul").prev().text()), 'message: You should have an unordered list for "Things cats love:"');
assert.equal($("ul li").length, 3, 'message: You should have three <code>li</code> elements within your <code>ul</code> element.');
assert.equal($("ol li").length, 3, 'message: You should have three <code>li</code> elements within your <code>ol</code> element.');
assert(code.match(/<\/ul>/g) && code.match(/<\/ul>/g).length === code.match(/<ul>/g).length, 'message: Make sure your <code>ul</code> element has a closing tag.');
assert(code.match(/<\/ol>/g) && code.match(/<\/ol>/g).length === code.match(/<ol>/g).length, 'message: Make sure your <code>ol</code> element has a closing tag.');
assert(code.match(/<\/li>/g) && code.match(/<li>/g) && code.match(/<\/li>/g).length === code.match(/<li>/g).length, 'message: Make sure your <code>li</code> element has a closing tag.');
