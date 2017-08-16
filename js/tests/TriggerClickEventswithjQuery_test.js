assert(code.match(/\$\s*?\(\s*?(?:'|")\#getMessage(?:'|")\s*?\)\s*?\.on\s*?\(\s*?(?:'|")click(?:'|")\s*?\,\s*?function\s*?\(\s*?\)\s*?\{/gi), 'message: Bind the click event to the button with the ID of <code>getMessage</code>');
assert(code.match(/\n*?\s*?\}\n*?\s*?\);/gi) && code.match(/\n*?\s*?\}\);/gi).length >= 2, 'message: Be sure to close your functions with <code>}&#41;;</code>');
