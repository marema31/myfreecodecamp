assert.deepEqual(slasher([1, 2, 3], 2), [3], 'message: <code>slasher([1, 2, 3], 2)</code> should return <code>[3]</code>.');
assert.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3], 'message: <code>slasher([1, 2, 3], 0)</code> should return <code>[1, 2, 3]</code>.');
assert.deepEqual(slasher([1, 2, 3], 9), [], 'message: <code>slasher([1, 2, 3], 9)</code> should return <code>[]</code>.');
assert.deepEqual(slasher([1, 2, 3], 4), [], 'message: <code>slasher([1, 2, 3], 4)</code> should return <code>[]</code>.');
assert.deepEqual(slasher(['burgers', 'fries', 'shake'], 1), ['fries', 'shake'], 'message: <code>slasher(["burgers", "fries", "shake"], 1)</code> should return <code>["fries", "shake"]</code>.');
assert.deepEqual(slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5), ['cheese', 4], 'message: <code>slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)</code> should return <code>["cheese", 4]</code>.');
