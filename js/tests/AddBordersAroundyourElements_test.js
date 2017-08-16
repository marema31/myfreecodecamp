assert($("img").hasClass("smaller-image"), 'message: Your <code>img</code> element should have the class <code>smaller-image</code>.');
assert($("img").hasClass("thick-green-border"), 'message: Your <code>img</code> element should have the class <code>thick-green-border</code>.');
assert($("img").hasClass("thick-green-border") && parseInt($("img").css("border-top-width"), 10) >= 8 && parseInt($("img").css("border-top-width"), 10) <= 12, 'message: Give your image a border width of <code>10px</code>.');
assert($("img").css("border-right-style") === "solid", 'message: Give your image a border style of <code>solid</code>.');
assert($("img").css("border-left-color") === "rgb(0, 128, 0)", 'message: The border around your <code>img</code> element should be green.');
