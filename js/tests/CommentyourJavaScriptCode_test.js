assert(code.match(/(\/\/)...../g), 'message: Create a <code>//</code> style comment that contains at least five letters.');
assert(code.match(/(\/\*)[\w\W]{5,}(?=\*\/)/gm), 'message: Create a <code>/* */</code> style comment that contains at least five letters.');
assert(code.match(/(\*\/)/g), 'message: Make sure that you close the comment with a <code>*/</code>.');
