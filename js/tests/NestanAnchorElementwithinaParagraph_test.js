assert($("a[href=\"http://www.freecatphotoapp.com\"]").length > 0, 'message: You need an <code>a</code> element that links to "http://www.freecatphotoapp.com".');
assert($("a").text().match(/cat\sphotos/gi), 'message: Your <code>a</code> element should have the anchor text of "cat photos"');
assert($("p") && $("p").length > 2, 'message: Create a new <code>p</code> element around your <code>a</code> element.');
assert($("a[href=\"http://www.freecatphotoapp.com\"]").parent().is("p"), 'message: Your <code>a</code> element should be nested within your new <code>p</code> element.');
assert($("a[href=\"http://www.freecatphotoapp.com\"]").parent().text().match(/View\smore\s/gi), 'message: Your <code>p</code> element should have the text "View more " (with a space after it).');
assert(!$("a").text().match(/View\smore/gi), 'message: Your <code>a</code> element should <em>not</em> have the text "View more".');
assert(code.match(/<\/p>/g) && code.match(/<p/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, 'message: Make sure each of your <code>p</code> elements has a closing tag.');
assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, 'message: Make sure each of your <code>a</code> elements has a closing tag.');
