assert($('input[type="checkbox"]').length > 2, 'message: Your page should have three checkbox elements.');
assert($('label > input[type="checkbox"]:only-child').length > 2, 'message: Each of your three checkbox elements should be nested in its own <code>label</code> element.');
assert(code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length, 'message: Make sure each of your <code>label</code> elements has a closing tag.');
assert($('label > input[type="checkbox"]').filter("[name='personality']").length > 2, 'message: Give your checkboxes the <code>name</code> attribute of <code>personality</code>.');
