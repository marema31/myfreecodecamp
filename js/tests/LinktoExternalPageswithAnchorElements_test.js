assert((/cat photos/gi).test($("a").text()), 'message: Your <code>a</code> element should have the <code>anchor text</code> of "cat photos".');
assert(/http:\/\/freecatphotoapp\.com/gi.test($("a").attr("href")), 'message: You need an <code>a</code> element that links to <code>http&#58;//freecatphotoapp<wbr>.com</code>');
assert(code.match(/<\/a>/g) && code.match(/<\/a>/g).length === code.match(/<a/g).length, 'message: Make sure your <code>a</code> element has a closing tag.');
