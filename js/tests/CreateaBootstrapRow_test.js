assert(($("div").length > 1) && ($("div.row h3.text-primary").length == 0) && ($("div.row + h3.text-primary").length == 0) && ($("h3.text-primary + div.row").length > 0), 'message: Add a <code>div</code> element below your <code>h3</code> element.');
assert($("div").hasClass("row"), 'message: Your <code>div</code> element should have the class <code>row</code>');
assert($("div.container-fluid div.row").length > 0, 'message: Your <code>row div</code> should be nested inside the <code>container-fluid div</code>');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure your <code>div</code> element has a closing tag.');
