assert(code.match(/console\.log\(typeof[\( ]["'].*["']\)?\);/), 'message: You should <code>console.log</code> the <code>typeof</code> a string.');
assert(code.match(/console\.log\(typeof[\( ]\d+\.?\d*\)?\);/), 'message: You should <code>console.log</code> the <code>typeof</code> a number.');
assert(code.match(/console\.log\(typeof[\( ]\[\]\)?\);/), 'message: You should <code>console.log</code> the <code>typeof</code> an array.');
assert(code.match(/console\.log\(typeof[\( ]\{\}\)?\);/), 'message: You should <code>console.log</code> the <code>typeof</code> an object.');
