assert(typeof convertToF(0) === 'number', 'message: <code>convertToF(0)</code> should return a number');
assert(convertToF(-30) === -22, 'message: <code>convertToF(-30)</code> should return a value of <code>-22</code>');
assert(convertToF(-10) === 14, 'message: <code>convertToF(-10)</code> should return a value of <code>14</code>');
assert(convertToF(0) === 32, 'message: <code>convertToF(0)</code> should return a value of <code>32</code>');
assert(convertToF(20) === 68, 'message: <code>convertToF(20)</code> should return a value of <code>68</code>');
assert(convertToF(30) === 86, 'message: <code>convertToF(30)</code> should return a value of <code>86</code>');
