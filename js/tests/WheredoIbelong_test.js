assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3, 'message: <code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return <code>3</code>.');
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2, 'message: <code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return <code>2</code>.');
assert(getIndexToIns([40, 60], 50) === 1, 'message: <code>getIndexToIns([40, 60], 50)</code> should return <code>1</code>.');
assert(getIndexToIns([3, 10, 5], 3) === 0, 'message: <code>getIndexToIns([3, 10, 5], 3)</code> should return <code>0</code>.');
assert(getIndexToIns([5, 3, 20, 3], 5) === 2, 'message: <code>getIndexToIns([5, 3, 20, 3], 5)</code> should return <code>2</code>.');
assert(getIndexToIns([2, 20, 10], 19) === 2, 'message: <code>getIndexToIns([2, 20, 10], 19)</code> should return <code>2</code>.');
assert(getIndexToIns([2, 5, 10], 15) === 3, 'message: <code>getIndexToIns([2, 5, 10], 15)</code> should return <code>3</code>.');
