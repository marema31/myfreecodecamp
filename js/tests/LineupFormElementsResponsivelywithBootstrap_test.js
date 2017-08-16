assert($("div.row:has(input[type=\"text\"])").length > 0 &&  $("div.row:has(button[type=\"submit\"])").length > 0, 'message: Nest your form submission button and text input in a div with class <code>row</code>.');
assert($("div.col-xs-7:has(input[type=\"text\"])").length > 0, 'message: Nest your form text input in a div with the class <code>col-xs-7</code>.');
assert($("div.col-xs-5:has(button[type=\"submit\"])").length > 0, 'message: Nest your form submission button in a div with the class <code>col-xs-5</code>.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure each of your <code>div</code> elements has a closing tag.');
