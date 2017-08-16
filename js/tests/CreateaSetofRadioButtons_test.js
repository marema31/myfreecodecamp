assert($('input[type="radio"]').length > 1, 'message: Your page should have two radio button elements.');
assert($('label > input[type="radio"]').filter("[name='indoor-outdoor']").length > 1, 'message: Give your radio buttons the <code>name</code> attribute of <code>indoor-outdoor</code>.');
assert($('label > input[type="radio"]:only-child').length > 1, 'message: Each of your two radio button elements should be nested in its own <code>label</code> element.');
assert((code.match(/<\/label>/g) && code.match(/<label/g) && code.match(/<\/label>/g).length === code.match(/<label/g).length), 'message: Make sure each of your <code>label</code> elements has a closing tag.');
assert($("label").text().match(/indoor/gi), 'message: One of your radio buttons should have the label <code>indoor</code>.');
assert($("label").text().match(/outdoor/gi), 'message: One of your radio buttons should have the label <code>outdoor</code>.');
