assert(code.match(/if/g).length === 1, 'message: You should only have one <code>if</code> statement in the editor');
assert(/else/g.test(code), 'message: You should use an <code>else</code> statement');
assert(testElse(4) === "5 or Smaller", 'message: <code>testElse(4)</code> should return "5 or Smaller"');
assert(testElse(5) === "5 or Smaller", 'message: <code>testElse(5)</code> should return "5 or Smaller"');
assert(testElse(6) === "Bigger than 5", 'message: <code>testElse(6)</code> should return "Bigger than 5"');
assert(testElse(10) === "Bigger than 5", 'message: <code>testElse(10)</code> should return "Bigger than 5"');
assert(/var result = "";/.test(code) && /return result;/.test(code), 'message: Do not change the code above or below the lines.');
