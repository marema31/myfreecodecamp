assert(typeof randomWholeNum() === "number" && (function(){var r = randomWholeNum();return Math.floor(r) === r;})(), 'message: The result of <code>randomWholeNum</code> should be a whole number.');
assert(code.match(/Math.random/g).length > 1, 'message: You should be using <code>Math.random</code> to generate a random number.');
assert(code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10\s*?/g) || code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g), 'message: You should have multiplied the result of <code>Math.random</code> by 10 to make it a number that is between zero and nine.');
assert(code.match(/Math.floor/g).length > 1, 'message: You should use <code>Math.floor</code> to remove the decimal part of the number.');
