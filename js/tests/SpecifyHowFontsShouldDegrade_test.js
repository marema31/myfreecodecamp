assert($("h2").css("font-family").match(/^"?lobster/i), 'message: Your h2 element should use the font <code>Lobster</code>.');
assert($("h2").css("font-family").match(/lobster.*,.*monospace/i), 'message: Your h2 element should degrade to the font <code>Monospace</code> when <code>Lobster</code> is not available.');
assert(new RegExp("<!--", "gi").test(code), 'message: Comment out your call to Google for the <code>Lobster</code> font by putting <code>&#60!--</code> in front of it.');
assert(new RegExp("-->", "gi").test(code), 'message: Be sure to close your comment by adding <code>--&#62;</code>.');
