assert(!$("h2").attr("style"), 'message: Remove the style attribute from your <code>h2</code> element.');
assert($("style") && $("style").length > 1, 'message: Create a <code>style</code> element.');
assert($("h2").css("color") === "rgb(0, 0, 255)", 'message: Your <code>h2</code> element should be blue.');
assert(code.match(/h2\s*\{\s*color\s*:.*;\s*\}/g), 'message: Ensure that your stylesheet <code>h2</code> declaration is valid with a semicolon and closing brace.');
assert(code.match(/<\/style>/g) && code.match(/<\/style>/g).length === (code.match(/<style((\s)*((type|media|scoped|title|disabled)="[^"]*")?(\s)*)*>/g) || []).length, 'message: Make sure all your <code>style</code> elements are valid and have a closing tag.');
