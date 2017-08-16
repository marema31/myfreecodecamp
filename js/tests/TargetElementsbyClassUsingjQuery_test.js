assert($(".well").hasClass("animated") && $(".well").hasClass("shake"), 'message: Use the jQuery <code>addClass&#40&#41</code> function to give the classes <code>animated</code> and <code>shake</code> to all your elements with the class <code>well</code>.');
assert(!code.match(/class\.\*animated/g), 'message: Only use jQuery to add these classes to the element.');
