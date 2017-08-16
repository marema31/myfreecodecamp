assert($(".target:nth-child(2)").hasClass("animated") && $(".target:nth-child(2)").hasClass("bounce"), 'message: The second element in your <code>target</code> elements should bounce.');
assert(code.match(/\:nth-child\(/g), 'message: You should use the <code>&#58;nth-child&#40&#41</code> function to modify these elements.');
assert(code.match(/<button class="btn btn-default target" id="target2">/g), 'message: Only use jQuery to add these classes to the element.');
