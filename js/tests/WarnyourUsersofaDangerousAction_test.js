assert(new RegExp("Delete","gi").test($("button").text()), 'message: Create a new <code>button</code> element with the text "Delete".');
assert($("button.btn-block.btn").length > 2, 'message: All of your Bootstrap buttons should have the <code>btn</code> and <code>btn-block</code> classes.');
assert($("button").hasClass("btn-danger"), 'message: Your new button should have the class <code>btn-danger</code>.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure all your <code>button</code> elements have a closing tag.');
