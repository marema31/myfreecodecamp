assert(typeof randomFraction() === "number", 'message: <code>randomFraction</code> should return a random number.');
assert((randomFraction()+''). match(/\./g), 'message: The number returned by <code>randomFraction</code> should be a decimal.');
assert(code.match(/Math\.random/g).length >= 0, 'message: You should be using <code>Math.random</code> to generate the random decimal number.');
