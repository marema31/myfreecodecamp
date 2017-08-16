assert(typeof sumAll([1, 4]) === 'number', 'message: <code>sumAll([1, 4])</code> should return a number.');
assert.deepEqual(sumAll([1, 4]), 10, 'message: <code>sumAll([1, 4])</code> should return 10.');
assert.deepEqual(sumAll([4, 1]), 10, 'message: <code>sumAll([4, 1])</code> should return 10.');
assert.deepEqual(sumAll([5, 10]), 45, 'message: <code>sumAll([5, 10])</code> should return 45.');
assert.deepEqual(sumAll([10, 5]), 45, 'message: <code>sumAll([10, 5])</code> should return 45.');
