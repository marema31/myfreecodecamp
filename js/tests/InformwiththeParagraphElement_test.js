assert(($("p").length > 0), 'message: Create a <code>p</code> element.');
assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), 'message: Your <code>p</code> element should have the text "Hello Paragraph".');
assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, 'message: Make sure your <code>p</code> element has a closing tag.');
