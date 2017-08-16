assert(typeof myArray == 'object', 'message: <code>myArray</code> should be an <code>array</code>.');
assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string', 'message: The first item in <code>myArray</code> should be a <code>string</code>.');
assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number', 'message: The second item in <code>myArray</code> should be a <code>number</code>.');
