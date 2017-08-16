assert($('.target:even').hasClass('animated') && $('.target:even').hasClass('shake'), 'message: All the <code>target</code> elements that computer considers even should shake.');
assert(code.match(/\:even/g), 'message: You should use the <code>&#58;even</code> function to modify these elements.');
assert(code.match(/<button class="btn btn-default target" id="target3">/g), 'message: Only use jQuery to add these classes to the element.');
