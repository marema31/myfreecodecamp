assert($("div").hasClass("container-fluid"), 'message: Your <code>div</code> element should have the class <code>container-fluid</code>.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure each of your <code>div</code> elements has a closing tag.');
assert($("div").children("h3").length >0, 'message: Nest your <code>h3</code> element inside a <code>div</code> element.');
