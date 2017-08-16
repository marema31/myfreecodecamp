assert($("img").length === 2, 'message: You should have a total of two images.');
assert($("img:eq(1)").hasClass("img-responsive"), 'message: Your new image should be below your old one and have the class <code>img-responsive</code>.');
assert(!$("img:eq(1)").hasClass("smaller-image"), 'message: Your new image should not have the class <code>smaller-image</code>.');
assert($("img:eq(1)").attr("src") === "https://bit.ly/fcc-running-cats", 'message: Your new image should have a <code>src</code> of <code>https&#58;//bit.ly/fcc-running-cats</code>.');
assert(code.match(/<img/g) && code.match(/<img[^<]*>/g).length === 2 && code.match(/<img/g).length === 2, 'message: Make sure your new <code>img</code> element has a closing angle bracket.');
