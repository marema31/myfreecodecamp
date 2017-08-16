assert($("div.row:has(h2)").length > 0 && $("div.row:has(img)").length > 0, 'message: Your <code>h2</code> element and topmost <code>img</code> element should both be nested together within a <code>div</code> element with the class <code>row</code>.');
assert($("div.col-xs-4:has(img)").length > 0, 'message: Nest your topmost <code>img</code> element within a <code>div</code> with the class <code>col-xs-4</code>.');
assert($("div.col-xs-8:has(h2)").length > 0, 'message: Nest your <code>h2</code> element within a <code>div</code> with the class <code>col-xs-8</code>.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure each of your <code>div</code> elements has a closing tag.');
