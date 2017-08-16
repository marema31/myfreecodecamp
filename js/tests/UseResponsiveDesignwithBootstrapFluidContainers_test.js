assert($("div").hasClass("container-fluid"), 'message: Your <code>div</code> element should have the class <code>container-fluid</code>.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure your <code>div</code> element has a closing tag.');
assert($(".container-fluid").children().length >= 8, 'message: Make sure you have nested all HTML elements in <code>.container-fluid</code>.');
