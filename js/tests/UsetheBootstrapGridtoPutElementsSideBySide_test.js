assert($("div.row:has(button)").length > 0, 'message: Your buttons should all be nested within the same <code>div</code> element with the class <code>row</code>.');
assert($("div.col-xs-4:has(button)").length > 2, 'message: Each of your Bootstrap buttons should be nested within its own <code>div</code> element with the class <code>col-xs-4</code>.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure each of your <code>button</code> elements has a closing tag.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure each of your <code>div</code> elements has a closing tag.');
