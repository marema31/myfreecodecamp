assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10, 'message: <code>studlyCapVar</code> is defined and has a value of <code>10</code>');
assert(typeof properCamelCase !== 'undefined' && properCamelCase === "A String", 'message: <code>properCamelCase</code> is defined and has a value of <code>"A String"</code>');
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000, 'message: <code>titleCaseOver</code> is defined and has a value of <code>9000</code>');
assert(code.match(/studlyCapVar/g).length === 2, 'message: <code>studlyCapVar</code> should use camelCase in both declaration and assignment sections.');
assert(code.match(/properCamelCase/g).length === 2, 'message: <code>properCamelCase</code> should use camelCase in both declaration and assignment sections.');
assert(code.match(/titleCaseOver/g).length === 2, 'message: <code>titleCaseOver</code> should use camelCase in both declaration and assignment sections.');
