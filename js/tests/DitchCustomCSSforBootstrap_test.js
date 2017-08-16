assert(!$("h2").hasClass("red-text"), 'message: Your h2 element should no longer have the class <code>red-text</code>.');
assert($("h2").hasClass("text-primary"), 'message: Your h2 element should now have the class <code>text-primary</code>.');
assert(!$("p").css("font-family").match(/monospace/i), 'message: Your paragraph elements should no longer use the font <code>Monospace</code>.');
assert(!$("img").hasClass("smaller-image"), 'message: Remove the <code>smaller-image</code> class from your top image.');
assert($(".img-responsive").length > 1, 'message: Add the <code>img-responsive</code> class to your top image.');
