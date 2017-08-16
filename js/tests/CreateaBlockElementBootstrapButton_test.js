assert($("button").hasClass("btn"), 'message: Your button should still have the class <code>btn</code>.');
assert($("button").hasClass("btn-block"), 'message: Your button should have the class <code>btn-block</code>.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure all your <code>button</code> elements have a closing tag.');
