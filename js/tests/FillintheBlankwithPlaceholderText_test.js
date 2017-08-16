assert.isTrue((/Kitty(\s)+ipsum/gi).test($("p").text()), 'message: Your <code>p</code> element should contain the first few words of the provided <code>kitty ipsum text</code>.');
