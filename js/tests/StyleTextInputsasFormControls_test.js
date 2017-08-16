assert($("button[type=\"submit\"]").hasClass("btn btn-primary"), 'message: Give the submit button in your form the classes <code>btn btn-primary</code>.');
assert($("button[type=\"submit\"]:has(i.fa.fa-paper-plane)").length > 0, 'message: Add a <code>&#60;i class="fa fa-paper-plane"&#62;&#60;/i&#62;</code> within your submit <code>button</code> element.');
assert($("input[type=\"text\"]").hasClass("form-control"), 'message: Give the text <code>input</code> in your form the class <code>form-control</code>.');
assert(code.match(/<\/i>/g) && code.match(/<\/i/g).length > 3, 'message: Make sure each of your <code>i</code> elements has a closing tag.');
