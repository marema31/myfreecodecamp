assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"], 'message: <code>steamrollArray([[["a"]], [["b"]]])</code> should return <code>["a", "b"]</code>.');
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4], 'message: <code>steamrollArray([1, [2], [3, [[4]]]])</code> should return <code>[1, 2, 3, 4]</code>.');
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4], 'message: <code>steamrollArray([1, [], [3, [[4]]]])</code> should return <code>[1, 3, 4]</code>.');
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4], 'message: <code>steamrollArray([1, {}, [3, [[4]]]])</code> should return <code>[1, {}, 3, 4]</code>.');
