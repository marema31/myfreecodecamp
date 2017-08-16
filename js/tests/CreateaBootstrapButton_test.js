assert(new RegExp("like","gi").test($("button").text()), 'message: Create a new <code>button</code> element with the text "Like".');
assert($("button").hasClass("btn"), 'message: Your new button should have the class <code>btn</code>.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure all your <code>button</code> elements have a closing tag.');
