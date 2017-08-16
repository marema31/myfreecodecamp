assert(($("h1").length === 0), 'message: Comment out your <code>h1</code> element so that it is not visible on your page.');
assert(($("h2").length > 0), 'message: Leave your <code>h2</code> element uncommented so that it is visible on your page.');
assert(($("p").length === 0), 'message: Comment out your <code>p</code> element so that it is not visible on your page.');
assert(code.match(/-->/g).length > 1, 'message: Be sure to close each of your comments with <code>--&#62;</code>.');
assert((code.match(/<([a-z0-9]){1,2}>/g)[0]==="<h1>" && code.match(/<([a-z0-9]){1,2}>/g)[1]==="<h2>" && code.match(/<([a-z0-9]){1,2}>/g)[2]==="<p>") , 'message: Do not change the order of the <code>h1</code> <code>h2</code> or <code>p</code> in the code.');
