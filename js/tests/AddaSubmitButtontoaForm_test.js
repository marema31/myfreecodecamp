assert($("form").children("button").length > 0, 'message: Your form should have a button inside it.');
assert($("button").attr("type") === "submit", 'message: Your submit button should have the attribute <code>type</code> set to <code>submit</code>.');
assert($("button").text().match(/^\s*submit\s*$/gi), 'message: Your submit button should only have the text "Submit".');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure your <code>button</code> element has a closing tag.');
