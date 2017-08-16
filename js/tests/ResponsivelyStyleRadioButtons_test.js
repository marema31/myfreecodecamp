assert($("div.row:has(input[type=\"radio\"])").length > 0, 'message: Nest all of your radio buttons inside one <code>div</code> with the class <code>row</code>.');
assert($("div.col-xs-6:has(input[type=\"radio\"])").length > 1, 'message: Nest each of your radio buttons inside its own <code>div</code> with the class <code>col-xs-6</code>.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure each of your <code>div</code> elements has a closing tag.');
