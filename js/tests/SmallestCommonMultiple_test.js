assert.deepEqual(typeof smallestCommons([1, 5]), 'number', 'message: <code>smallestCommons([1, 5])</code> should return a number.');
assert.deepEqual(smallestCommons([1, 5]), 60, 'message: <code>smallestCommons([1, 5])</code> should return 60.');
assert.deepEqual(smallestCommons([5, 1]), 60, 'message: <code>smallestCommons([5, 1])</code> should return 60.');
assert.deepEqual(smallestCommons([1, 13]), 360360, 'message: <code>smallestCommons([1, 13])</code> should return 360360.');
assert.deepEqual(smallestCommons([23, 18]), 6056820, 'message: <code>smallestCommons([23, 18])</code> should return 6056820.');
