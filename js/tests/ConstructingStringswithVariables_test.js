assert(typeof myName !== 'undefined' && myName.length > 2, 'message: <code>myName</code> should be set to a string at least 3 characters long');
assert(code.match(/["']\s*\+\s*myName\s*\+\s*["']/g).length > 0, 'message: Use two <code>+</code> operators to build <code>myStr</code> with <code>myName</code> inside it');
