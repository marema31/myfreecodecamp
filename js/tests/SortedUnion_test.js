assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4], 'message: <code>uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])</code> should return <code>[1, 3, 2, 5, 4]</code>.');
assert.deepEqual(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]), [1, 3, 2, [5], [4]], 'message: <code>uniteUnique([1, 3, 2], [1, [5]], [2, [4]])</code> should return <code>[1, 3, 2, [5], [4]]</code>.');
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5], 'message: <code>uniteUnique([1, 2, 3], [5, 2, 1])</code> should return <code>[1, 2, 3, 5]</code>.');
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]), [1, 2, 3, 5, 4, 6, 7, 8], 'message: <code>uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])</code> should return <code>[1, 2, 3, 5, 4, 6, 7, 8]</code>.');
