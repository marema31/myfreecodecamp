assert(nextInLine([],1) === 1, 'message: <code>nextInLine([], 1)</code> should return <code>1</code>');
assert(nextInLine([2],1) === 2, 'message: <code>nextInLine([2], 1)</code> should return <code>2</code>');
assert(nextInLine([5,6,7,8,9],1) === 5, 'message: <code>nextInLine([5,6,7,8,9], 1)</code> should return <code>5</code>');
nextInLine(testArr, 10); assert(testArr[4] === 10, 'message: After <code>nextInLine(testArr, 10)</code>, <code>testArr[4]</code> should be <code>10</code>');
