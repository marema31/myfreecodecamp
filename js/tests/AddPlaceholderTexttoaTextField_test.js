assert($("input[placeholder]").length > 0, 'message: Add a <code>placeholder</code> attribute text <code>input</code> element.');
assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi), 'message: Set the value of your placeholder attribute to "cat photo URL".');
assert($("input[type=text]").length > 0 && code.match(/<input((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>/gi), 'message: The finished <code>input</code> element should have valid syntax.');
