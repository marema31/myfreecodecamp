assert($("div.row:has(input[type=\"checkbox\"])").length > 0, 'message: Nest all of your checkboxes inside one <code>div</code> with the class <code>row</code>.');
assert($("div.col-xs-4:has(input[type=\"checkbox\"])").length > 2, 'message: Nest each of your checkboxes inside its own <code>div</code> with the class <code>col-xs-4</code>.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure each of your <code>div</code> elements has a closing tag.');
