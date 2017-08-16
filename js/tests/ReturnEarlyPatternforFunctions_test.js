assert(typeof abTest(2,2) === 'number' , 'message: <code>abTest(2,2)</code> should return a number');
assert(abTest(2,2) === 8 , 'message: <code>abTest(2,2)</code> should return <code>8</code>');
assert(abTest(-2,2) === undefined , 'message: <code>abTest(-2,2)</code> should return <code>undefined</code>');
assert(abTest(2,-2) === undefined , 'message: <code>abTest(2,-2)</code> should return <code>undefined</code>');
assert(abTest(2,8) === 18 , 'message: <code>abTest(2,8)</code> should return <code>18</code>');
assert(abTest(3,3) === 12 , 'message: <code>abTest(3,3)</code> should return <code>12</code>');
