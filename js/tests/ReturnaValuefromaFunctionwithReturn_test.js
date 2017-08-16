assert(typeof timesFive === 'function', 'message: <code>timesFive</code> should be a function');
assert(timesFive(5) === 25, 'message: <code>timesFive(5)</code> should return <code>25</code>');
assert(timesFive(2) === 10, 'message: <code>timesFive(2)</code> should return <code>10</code>');
assert(timesFive(0) === 0, 'message: <code>timesFive(0)</code> should return <code>0</code>');
