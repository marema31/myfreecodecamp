assert(typeof entreeValue === 'string' , 'message: <code>entreeValue</code> should be a string');
assert(entreeValue === 'hamburger' , 'message: The value of <code>entreeValue</code> should be <code>"hamburger"</code>');
assert(typeof drinkValue === 'string' , 'message: <code>drinkValue</code> should be a string');
assert(drinkValue === 'water' , 'message: The value of <code>drinkValue</code> should be <code>"water"</code>');
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1, 'message: You should use bracket notation twice');
