assert(new RegExp("info","gi").test($("button").text()), 'message: Create a new <code>button</code> element with the text "Info".');
assert($("button.btn-block.btn").length > 1, 'message: Both of your Bootstrap buttons should have the <code>btn</code> and <code>btn-block</code> classes.');
assert($("button").hasClass("btn-info"), 'message: Your new button should have the class <code>btn-info</code>.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure all your <code>button</code> elements have a closing tag.');
