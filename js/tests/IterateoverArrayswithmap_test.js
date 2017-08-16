assert.deepEqual(oldArray, [1,2,3,4,5], 'message: You should not change the original array.');
assert.deepEqual(newArray, [4,5,6,7,8], 'message: You should add three to each value in the array.');
assert(editor.getValue().match(/\.map\s*\(/gi), 'message: You should be making use of the <code>map</code> method.');
assert(editor.getValue().match(/\[1\,2\,3\,4\,5\]/gi), 'message: You should only modify the array with <code>map</code>.');
