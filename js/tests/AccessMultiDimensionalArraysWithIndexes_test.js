assert(myData === 8, 'message: <code>myData</code> should be equal to <code>8</code>.');
assert(/myArray\[\d+\]\[\d+\]/g.test(code), 'message: You should be using bracket notation to read the value from <code>myArray</code>.');
assert(/myData\s*?=\s*?myArray\[\d+\]\[\d+\]\s*?;/g.test(code), 'message: You should only be reading one value from <code>myArray</code>.');
