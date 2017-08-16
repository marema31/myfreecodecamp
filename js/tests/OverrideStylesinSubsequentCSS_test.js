assert($("h1").hasClass("pink-text"), 'message: Your <code>h1</code> element should have the class <code>pink-text</code>.');
assert($("h1").hasClass("blue-text"), 'message: Your <code>h1</code> element should have the class <code>blue-text</code>.');
assert($(".pink-text").hasClass("blue-text"), 'message: Both <code>blue-text</code> and <code>pink-text</code> should belong to the same <code>h1</code> element.');
assert($("h1").css("color") === "rgb(0, 0, 255)", 'message: Your <code>h1</code> element should be blue.');
