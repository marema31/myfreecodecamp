assert($("h2").css("color") === "rgb(255, 0, 0)", 'message: Your <code>h2</code> element should be red.');
assert($("h2").hasClass("red-text"), 'message: Your <code>h2</code> element should have the class <code>red-text</code>.');
assert(code.match(/\.red-text\s*\{\s*color\s*:\s*red;\s*\}/g), 'message: Your stylesheet should declare a <code>red-text</code> class and have its color set to red.');
assert($("h2").attr("style") === undefined, 'message: Do not use inline style declarations like <code>style="color&#58; red"</code> in your <code>h2</code> element.');
