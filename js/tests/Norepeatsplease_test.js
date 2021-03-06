assert.isNumber(permAlone('aab'), 'message: <code>permAlone("aab")</code> should return a number.');
assert.strictEqual(permAlone('aab'), 2, 'message: <code>permAlone("aab")</code> should return 2.');
assert.strictEqual(permAlone('aaa'), 0, 'message: <code>permAlone("aaa")</code> should return 0.');
assert.strictEqual(permAlone('aabb'), 8, 'message: <code>permAlone("aabb")</code> should return 8.');
assert.strictEqual(permAlone('abcdefa'), 3600, 'message: <code>permAlone("abcdefa")</code> should return 3600.');
assert.strictEqual(permAlone('abfdefa'), 2640, 'message: <code>permAlone("abfdefa")</code> should return 2640.');
assert.strictEqual(permAlone('zzzzzzzz'), 0, 'message: <code>permAlone("zzzzzzzz")</code> should return 0.');
assert.strictEqual(permAlone('a'), 1, 'message: <code>permAlone("a")</code> should return 1.');
assert.strictEqual(permAlone('aaab'), 0, 'message: <code>permAlone("aaab")</code> should return 0.');
assert.strictEqual(permAlone('aaabb'), 12, 'message: <code>permAlone("aaabb")</code> should return 12.');
