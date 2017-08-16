assert($("h1").hasClass("pink-text"), 'message: Your <code>h1</code> element should have the class <code>pink-text</code>.');
assert($("h1").hasClass("blue-text"), 'message: Your <code>h1</code> element should have the class <code>blue-text</code>.');
assert($("h1").attr("id") === "orange-text", 'message: Your <code>h1</code> element should have the id of <code>orange-text</code>.');
assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi), 'message: Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.');
assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important;[^\.]*\}/g), 'message: Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.');
assert($("h1").css("color") === "rgb(255, 192, 203)", 'message: Your <code>h1</code> element should be pink.');
