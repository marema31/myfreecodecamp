assert($("h1").length > 0, 'message: Make your <code>h1</code> element visible on your page by uncommenting it.');
assert($("h2").length > 0, 'message: Make your <code>h2</code> element visible on your page by uncommenting it.');
assert($("p").length > 0, 'message: Make your <code>p</code> element visible on your page by uncommenting it.');
assert(!/-->/gi.test(code.replace(/ *<!--.*\n/g,'')), 'message: Be sure to delete all trailing comment tags&#44; i.e. <code>--&#62;</code>.');
