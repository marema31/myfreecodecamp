assert(phoneticLookup("alpha") === 'Adams', 'message: <code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>');
assert(phoneticLookup("bravo") === 'Boston', 'message: <code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>');
assert(phoneticLookup("charlie") === 'Chicago', 'message: <code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>');
assert(phoneticLookup("delta") === 'Denver', 'message: <code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>');
assert(phoneticLookup("echo") === 'Easy', 'message: <code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>');
assert(phoneticLookup("foxtrot") === 'Frank', 'message: <code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>');
assert(typeof phoneticLookup("") === 'undefined', 'message: <code>phoneticLookup("")</code> should equal <code>undefined</code>');
assert(!/case|switch|if/g.test(code), 'message: You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements'); 
