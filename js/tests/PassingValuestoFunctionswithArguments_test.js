assert(typeof functionWithArgs === 'function', 'message: <code>functionWithArgs</code> should be a function');
if(typeof functionWithArgs === "function") { capture(); functionWithArgs(1,2); uncapture(); } assert(logOutput == 3, 'message: <code>functionWithArgs(1,2)</code> should output <code>3</code>');
if(typeof functionWithArgs === "function") { capture(); functionWithArgs(7,9); uncapture(); } assert(logOutput == 16, 'message: <code>functionWithArgs(7,9)</code> should output <code>16</code>');
assert(/^\s*functionWithArgs\s*\([\w\W]+\)\s*;/m.test(code), 'message: Call <code>functionWithArgs</code> after you define it.');
