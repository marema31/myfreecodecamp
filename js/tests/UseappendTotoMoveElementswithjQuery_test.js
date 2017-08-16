assert($("#left-well").children("#target2").length === 0, 'message: Your <code>target2</code> element should not be inside your <code>left-well</code>.');
assert($("#right-well").children("#target2").length > 0, 'message: Your <code>target2</code> element should be inside your <code>right-well</code>.');
assert(!code.match(/class.*animated/g), 'message: Only use jQuery to move these elements.');
