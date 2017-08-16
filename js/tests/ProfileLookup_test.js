assert(lookUpProfile('Kristian','lastName') === "Vos", 'message: <code>"Kristian", "lastName"</code> should return <code>"Vos"</code>');
assert.deepEqual(lookUpProfile("Sherlock", "likes"), ["Intriguing Cases", "Violin"], 'message: <code>"Sherlock", "likes"</code> should return <code>["Intriguing Cases", "Violin"]</code>');
assert(typeof lookUpProfile("Harry", "likes") === "object", 'message: <code>"Harry","likes"</code> should return an array');
assert(lookUpProfile("Bob", "number") === "No such contact", 'message: <code>"Bob", "number"</code> should return "No such contact"');
assert(lookUpProfile("Akira", "address") === "No such property", 'message: <code>"Akira", "address"</code> should return "No such property"');
