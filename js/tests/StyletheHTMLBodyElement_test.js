assert($("body").css("background-color") === "rgb(0, 0, 0)", 'message: Give your <code>body</code> element the <code>background-color</code> of black.');
assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), 'message: Make sure your CSS rule is properly formatted with both opening and closing curly brackets.');
assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), 'message: Make sure your CSS rule ends with a semi-colon.');
