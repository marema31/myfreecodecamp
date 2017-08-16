assert($("form") && $("form").children("input") && $("form").children("input").length > 0, 'message: Nest your text input element within a <code>form</code> element.');
assert($("form").attr("action") === "/submit-cat-photo", 'message: Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>/submit-cat-photo</code>');
assert(code.match(/<\/form>/g) && code.match(/<form/g) && code.match(/<\/form>/g).length === code.match(/<form/g).length, 'message: Make sure your <code>form</code> element has a closing tag.');
