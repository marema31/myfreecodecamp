assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9], 'message: <code>bouncer([7, "ate", "", false, 9])</code> should return <code>[7, "ate", 9]</code>.');
assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"], 'message: <code>bouncer(["a", "b", "c"])</code> should return <code>["a", "b", "c"]</code>.');
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [], 'message: <code>bouncer([false, null, 0, NaN, undefined, ""])</code> should return <code>[]</code>.');
assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2], 'message: <code>bouncer([1, null, NaN, 2, undefined])</code> should return <code>[1, 2]</code>.');
