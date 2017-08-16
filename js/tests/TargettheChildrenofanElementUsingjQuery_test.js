assert($("#right-well").children().css("color") === 'rgb(255, 165, 0)', 'message: All children of <code>#right-well</code> should have orange text.');
assert(code.match(/\.children\(\)\.css/g), 'message: You should use the <code>children&#40&#41</code> function to modify these elements.');
assert(code.match(/<div class="well" id="right-well">/g), 'message: Only use jQuery to add these classes to the element.');
