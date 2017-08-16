assert($("img").hasClass("thick-green-border"), 'message: Your image element should have the class "thick-green-border".');
assert(parseInt($("img").css("border-top-left-radius")) > 8, 'message: Your image should have a border radius of <code>10px</code>');
