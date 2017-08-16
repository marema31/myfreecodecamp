assert.isTrue((/<em>#target4<\/em>/gi).test($("#target4").html()), 'message: Emphasize the text in your <code>target4</code> button by adding HTML tags.');
assert($("#target4") && $("#target4").text() === '#target4', 'message: Make sure the text is otherwise unchanged.');
assert.isFalse((/<em>/gi).test($("h3").html()), 'message: Do not alter any other text.');
assert(code.match(/\.html\(/g), 'message: Make sure you are using <code>.html()</code> and not <code>.text()</code>.');
assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/), 'message: Make sure to select <code>button id="target4"</code> with jQuery.');
