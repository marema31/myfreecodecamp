assert.deepEqual(newArray, [1,2,3,4,5,6], 'message: You should concatenate the two arrays together.');
assert(editor.getValue().match(/\.concat\s*\(/gi), 'message: You should be using the <code>concat</code> method to merge the two arrays.');
assert(editor.getValue().match(/\[1\,2\,3\]/gi) && editor.getValue().match(/\[4\,5\,6\]/gi), 'message: You should only be using <code>concat</code> to modify the arrays.');
