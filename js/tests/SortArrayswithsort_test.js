assert.deepEqual(array, [21, 12, 2, 1], 'message: You should have sorted the array from largest to smallest.');
assert(editor.getValue().match(/\[1,\s*12,\s*21,\s*2\];/gi), 'message: You should only be using <code>sort</code> to modify the array.');
assert(editor.getValue().match(/\.sort\s*\(/g), 'message: You should have made use of the <code>sort</code> method.');
