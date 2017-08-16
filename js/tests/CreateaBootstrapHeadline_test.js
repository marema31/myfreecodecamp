assert($("h3") && $("h3").length > 0, 'message: Add a <code>h3</code> element to your page.');
assert(code.match(/<\/h3>/g) && code.match(/<h3/g) && code.match(/<\/h3>/g).length === code.match(/<h3/g).length, 'message: Make sure your <code>h3</code> element has a closing tag.');
assert($("h3").hasClass("text-primary"), 'message: Your <code>h3</code> element should be colored by applying the class <code>text-primary</code>');
assert($("h3").hasClass("text-center"), 'message: Your <code>h3</code> element should be centered by applying the class <code>text-center</code>');
assert.isTrue((/jquery(\s)+playground/gi).test($("h3").text()), 'message: Your <code>h3</code> element should have the text <code>jQuery Playground</code>.');
