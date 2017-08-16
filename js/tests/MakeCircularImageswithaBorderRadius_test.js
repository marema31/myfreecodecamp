assert(parseInt($("img").css("border-top-left-radius")) > 48, 'message: Your image should have a border radius of <code>50&#37;</code>&#44; making it perfectly circular.');
assert(code.match(/50%/g), 'message: Be sure to use a percentage instead of a pixel value.');
