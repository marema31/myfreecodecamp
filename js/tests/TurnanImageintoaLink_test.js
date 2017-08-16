assert($("a").children("img.smaller-image").length > 0, 'message: Nest the existing <code>img</code> element within an <code>a</code> element.');
assert(new RegExp("#").test($("a").children("img").parent().attr("href")), 'message: Your <code>a</code> element should be a dead link with a <code>href</code> attribute set to <code>#</code>.');
assert(code.match(/<\/a>/g) && code.match(/<a/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, 'message: Make sure each of your <code>a</code> elements has a closing tag.');
