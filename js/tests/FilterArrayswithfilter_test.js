assert.deepEqual(oldArray, [1,2,3,4,5,6,7,8,9,10], 'message: You should not change the original array.');
assert.deepEqual(newArray, [1,2,3,4,5], 'message: You should have filtered out all values from the array that are greater than 5.');
assert(editor.getValue().match(/array\.filter\s*\(/gi), 'message: You should be using the <code>filter</code> method to create a new array.');
assert(editor.getValue().match(/\[1\,2\,3\,4\,5\,6\,7\,8\,9\,10\]/gi), 'message: You should only be using <code>filter</code> to make the new array.');
