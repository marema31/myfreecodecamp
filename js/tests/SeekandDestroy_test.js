assert.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1], 'message: <code>destroyer([1, 2, 3, 1, 2, 3], 2, 3)</code> should return <code>[1, 1]</code>.');
assert.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1], 'message: <code>destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)</code> should return <code>[1, 5, 1]</code>.');
assert.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1], 'message: <code>destroyer([3, 5, 1, 2, 2], 2, 3, 5)</code> should return <code>[1]</code>.');
assert.deepEqual(destroyer([2, 3, 2, 3], 2, 3), [], 'message: <code>destroyer([2, 3, 2, 3], 2, 3)</code> should return <code>[]</code>.');
assert.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"], 'message: <code>destroyer(["tree", "hamburger", 53], "tree", 53)</code> should return <code>["hamburger"]</code>.');
