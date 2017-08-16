assert(new RegExp("googleapis", "gi").test(code), 'message: Import the <code>Lobster</code> font.');
assert($("h2").css("font-family").match(/lobster/i), 'message: Your <code>h2</code> element should use the font <code>Lobster</code>.');
assert($("p").css("font-family").match(/monospace/i), 'message: Your <code>p</code> element should still use the font <code>Monospace</code>.');
