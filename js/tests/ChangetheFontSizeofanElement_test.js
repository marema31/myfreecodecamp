assert($("p").length > 1, 'message: You need 2 <code>p</code> elements with Kitty Ipsum text.');
assert(code.match(/<\/p>/g) && code.match(/<\/p>/g).length === code.match(/<p/g).length, 'message: Make sure each of your <code>p</code> elements has a closing tag.');
assert.isTrue((/Purr\s+jump\s+eat/gi).test($("p").text()), 'message: Your <code>p</code> element should contain the first few words of the provided additional <code>kitty ipsum text</code>.');
assert($("p:eq(0)").attr("class") === "red-text", 'message: The first <code>p</code> element should have the class <code>red-text</code>.');
assert($("p:eq(1)").attr("class") === undefined, 'message: Do not add a class attribute to the second <code>p</code> element.');
assert(parseInt($("p:not([class])").css("font-size"), 10) > 15, 'message: Between the <code>style</code> tags, give the <code>p</code> elements <code>font-size</code> of <code>16px</code>. Browser and Text zoom should be at 100%.');
