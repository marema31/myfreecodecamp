assert(($("h1").length > 0), 'message: Create an <code>h1</code> element.');
assert(($("h1").length > 0 && $("h1").text().match(/hello world/i)), 'message: Your <code>h1</code> element should have the text <code>Hello World</code>.');
assert(code.match(/<\/h1>/g) && code.match(/<h1/g) && code.match(/<\/h1>/g).length === code.match(/<h1/g).length, 'message: Make sure your <code>h1</code> element has a closing tag.');
assert(($("body").css("color") === "rgb(0, 128, 0)"), 'message: Give your <code>body</code> element the <code>color</code> property of <code>green</code>.');
assert(($("body").css("font-family").match(/Monospace/i)), 'message: Give your <code>body</code> element the <code>font-family</code> property of <code>Monospace</code>.');
assert(($("h1").length > 0 && $("h1").css("font-family").match(/monospace/i)), 'message: Your <code>h1</code> element should inherit the font <code>Monospace</code> from your <code>body</code> element.');
assert(($("h1").length > 0 && $("h1").css("color") === "rgb(0, 128, 0)"), 'message: Your <code>h1</code> element should inherit the color green from your <code>body</code> element.');
