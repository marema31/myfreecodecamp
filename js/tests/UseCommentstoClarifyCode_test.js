assert(code.match(/^\s*<!--/), 'message: Start a comment with <code>&#60;!--</code> at the top of your HTML.');
assert(code.match(/<!--(?!(>|->|.*-->.*this line))\s*.*this line.*\s*-->/gi), 'message: Your comment should have the text <code>Only change code above this line</code>.');
assert(code.match(/-->.*\n+.+/g), 'message: Be sure to close your comment with <code>--&#62;</code>.');
assert(code.match(/<!--/g).length === code.match(/-->/g).length, 'message: You should have the same number of comment openers and closers.');
