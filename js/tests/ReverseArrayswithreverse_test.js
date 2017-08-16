assert.deepEqual(newArray, [7,6,5,4,3,2,1], 'message: You should reverse the array.');
assert(editor.getValue().match(/\.reverse\s*\(\)/gi), 'message: You should use the <code>reverse</code> method.');
assert(editor.getValue().match(/\[1\,2\,3\,4\,5\,6\,7/gi), 'message: You should only be using <code>reverse</code> to modify <code>array</code>.');
