assert(typeof sumFibs(1) === "number", 'message: <code>sumFibs(1)</code> should return a number.');
assert.deepEqual(sumFibs(1000), 1785, 'message: <code>sumFibs(1000)</code> should return 1785.');
assert.deepEqual(sumFibs(4000000), 4613732, 'message: <code>sumFibs(4000000)</code> should return 4613732.');
assert.deepEqual(sumFibs(4), 5, 'message: <code>sumFibs(4)</code> should return 5.');
assert.deepEqual(sumFibs(75024), 60696, 'message: <code>sumFibs(75024)</code> should return 60696.');
assert.deepEqual(sumFibs(75025), 135721, 'message: <code>sumFibs(75025)</code> should return 135721.');
