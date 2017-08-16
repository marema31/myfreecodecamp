assert($("img[src='https://bit.ly/fcc-relaxing-cat']").attr('class') === "smaller-image", 'message: Your <code>img</code> element should have the class <code>smaller-image</code>.');
assert($("img").width() === 100, 'message: Your image should be 100 pixels wide. Browser zoom should be at 100%.');
