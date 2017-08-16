assert($("h1").hasClass("pink-text"), 'message: Your <code>h1</code> element should have the class <code>pink-text</code>.');
assert($("h1").hasClass("blue-text"), 'message: Your <code>h1</code> element should have the class <code>blue-text</code>.');
assert($("h1").attr("id") === "orange-text", 'message: Your <code>h1</code> element should have the id of <code>orange-text</code>.');
assert(code.match(/<h1[\s\S]*?style/gi) && code.match(/<h1[\s\S]*?style[\s\S]*?color\s*?:/gi), 'message: Give your <code>h1</code> element the inline style of <code>color&#58; white</code>.');
assert($("h1").css("color") === "rgb(255, 255, 255)", 'message: Your <code>h1</code> element should be white.');
