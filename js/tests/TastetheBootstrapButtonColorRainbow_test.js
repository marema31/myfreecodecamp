assert($("button").hasClass("btn-primary"), 'message: Your button should have the class <code>btn-primary</code>.');
assert($("button").hasClass("btn-block") && $("button").hasClass("btn"), 'message: Your button should still have the <code>btn</code> and <code>btn-block</code> classes.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure all your <code>button</code> elements have a closing tag.');
