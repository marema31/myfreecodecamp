assert($("img").length > 0, 'message: Your page should have an image element.');
assert(new RegExp("\/\/bit.ly\/fcc-relaxing-cat", "gi").test($("img").attr("src")), 'message: Your image should have a <code>src</code> attribute that points to the kitten image.');
assert(code.match(/alt\s*?=\s*?(\"|\')[\s\w\.\,\!]+?(\"|\')/), 'message: Your image element <strong>must</strong> have an <code>alt</code> attribute.');
