assert($("h1").hasClass("pink-text"), 'message: Your <code>h1</code> element should have the class <code>pink-text</code>.');
assert(code.match(/\.pink-text\s*\{\s*color\s*:\s*pink\s*;\s*\}/g), 'message: Your <code>&#60;style&#62;</code> should have a <code>pink-text</code> CSS class with its color set to pink.');
assert($("h1").css("color") === "rgb(255, 192, 203)", 'message: Your <code>h1</code> element should be pink.');
