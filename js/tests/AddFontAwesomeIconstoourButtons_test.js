assert($("i").is(".fa.fa-thumbs-up"), 'message: Add an <code>i</code> element with the classes <code>fa</code> and <code>fa-thumbs-up</code>.');
assert($("i.fa-thumbs-up").parent().text().match(/Like/gi) && $(".btn-primary > i").is(".fa.fa-thumbs-up"), 'message: Your <code>fa-thumbs-up</code> icon should be located within the Like button.');
assert($("button").children("i").length > 0, 'message: Nest your <code>i</code> element within your <code>button</code> element.');
assert(code.match(/<\/i>/g), 'message: Make sure your <code>i</code> element has a closing tag.');
