assert.deepEqual(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap", 'message: <code>spinalCase("This Is Spinal Tap")</code> should return <code>"this-is-spinal-tap"</code>.');
assert.strictEqual(spinalCase('thisIsSpinalTap'), "this-is-spinal-tap", 'message: <code>spinalCase("thisIsSpinal<wbr>Tap")</code> should return <code>"this-is-spinal-tap"</code>.');
assert.strictEqual(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show", 'message: <code>spinalCase("The_Andy_<wbr>Griffith_Show")</code> should return <code>"the-andy-griffith-show"</code>.');
assert.strictEqual(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh", 'message: <code>spinalCase("Teletubbies say Eh-oh")</code> should return <code>"teletubbies-say-eh-oh"</code>.');
assert.strictEqual(spinalCase("AllThe-small Things"), "all-the-small-things", 'message: <code>spinalCase("AllThe-small Things")</code> should return <code>"all-the-small-things"</code>.');
