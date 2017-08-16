assert(gloveBoxContents === "maps", 'message: <code>gloveBoxContents</code> should equal "maps"');
assert(/=\s*myStorage\.car\.inside\[("|')glove box\1\]/g.test(code), 'message: Use dot and bracket notation to access <code>myStorage</code>');
