assert($("p span") && $("p span").length > 0, 'message: Your <code>span</code> element should be inside your <code>p</code> element.');
assert($("p span") && $("p span").text().match(/love/i), 'message: Your <code>span</code> element should have the text <code>love</code>.');
assert($("span").hasClass("text-danger"), 'message: Your <code>span</code> element should have class <code>text-danger</code>.');
assert(code.match(/<\/span>/g) && code.match(/<span/g) && code.match(/<\/span>/g).length === code.match(/<span/g).length, 'message: Make sure your <code>span</code> element has a closing tag.');
