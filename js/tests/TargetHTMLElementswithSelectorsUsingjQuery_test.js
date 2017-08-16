assert($("button").hasClass("animated") && $("button").hasClass("bounce"), 'message: Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>bounce</code> to your <code>button</code> elements.');
assert(!code.match(/class.*animated/g), 'message: Only use jQuery to add these classes to the element.');
