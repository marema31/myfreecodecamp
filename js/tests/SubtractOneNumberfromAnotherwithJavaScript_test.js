assert(difference === 12, 'message: Make the variable <code>difference</code> equal 12.');
assert((code).match(/difference/g).length === 1,'message: Only change the first line');
assert(/\d+\s*-\s*\d+/.test(code),'message: Use the <code>-</code> operator');
