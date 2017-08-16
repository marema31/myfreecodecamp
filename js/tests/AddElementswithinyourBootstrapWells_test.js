assert($("div.well").children("button").length > 5, 'message: Nest three <code>button</code> elements within each of your <code>div</code> elements with class <code>well</code>.');
assert($("button") && $("button").length > 5, 'message: You should have a total of 6 <code>button</code> elements.');
assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, 'message: Make sure all your <code>button</code> elements have closing tags.');
