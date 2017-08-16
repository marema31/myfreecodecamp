assert(($("h2").length > 0), 'message: Create an <code>h2</code> element.');
assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, 'message: Make sure your <code>h2</code> element has a closing tag.');
assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), 'message: Your <code>h2</code> element should have the text "CatPhotoApp".');
assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), 'message: Your <code>h1</code> element should have the text "Hello World".');
