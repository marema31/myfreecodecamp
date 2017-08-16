assert(typeof hatValue === 'string' , 'message: <code>hatValue</code> should be a string');
assert(hatValue === 'ballcap' , 'message: The value of <code>hatValue</code> should be <code>"ballcap"</code>');
assert(typeof shirtValue === 'string' , 'message: <code>shirtValue</code> should be a string');
assert(shirtValue === 'jersey' , 'message: The value of <code>shirtValue</code> should be <code>"jersey"</code>');
assert(code.match(/testObj\.\w+/g).length > 1, 'message: You should use dot notation twice');
