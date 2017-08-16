assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?button\s*?(?:'|")/gi), 'message: Use the <code>$&#40"button"&#41</code> selector.');
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?\.btn\s*?(?:'|")/gi), 'message: Use the <code>$&#40".btn"&#41</code> selector.');
assert(code.match(/\$\s*?\(\s*?(?:'|")\s*?#target1\s*?(?:'|")/gi), 'message: Use the <code>$&#40"#target1"&#41</code> selector.');
assert(code.match(/addClass/g) && code.match(/addClass\(\s*?('|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, 'message: Only add one class with each of your three selectors.');
assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), 'message: Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.');
assert(!code.match(/class.*animated/g), 'message: Only use jQuery to add these classes to the element.');
