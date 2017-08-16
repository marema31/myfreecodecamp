assert(switchOfStuff("a") === "apple", 'message: <code>switchOfStuff("a")</code> should have a value of "apple"');
assert(switchOfStuff("b") === "bird", 'message: <code>switchOfStuff("b")</code> should have a value of "bird"');
assert(switchOfStuff("c") === "cat", 'message: <code>switchOfStuff("c")</code> should have a value of "cat"');
assert(switchOfStuff("d") === "stuff", 'message: <code>switchOfStuff("d")</code> should have a value of "stuff"');
assert(switchOfStuff(4) === "stuff", 'message: <code>switchOfStuff(4)</code> should have a value of "stuff"');
assert(!/else/g.test(code) || !/if/g.test(code), 'message: You should not use any <code>if</code> or <code>else</code> statements');
assert(code.match(/break/g).length > 2, 'message: You should have at least 3 <code>break</code> statements');
