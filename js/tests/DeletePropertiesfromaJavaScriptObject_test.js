assert(typeof myDog === "object" && myDog.tails === undefined, 'message: Delete the property <code>"tails"</code> from <code>myDog</code>.');
assert(code.match(/"tails": 1/g).length > 1, 'message: Do not modify the <code>myDog</code> setup');
