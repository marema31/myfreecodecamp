assert($("#right-well").children("#target5").length > 0, 'message: Your <code>target5</code> element should be inside your <code>right-well</code>.');
assert($("#left-well").children("#target5").length > 0, 'message: A copy of your <code>target5</code> element should also be inside your <code>left-well</code>.');
assert(!code.match(/class.*animated/g), 'message: Only use jQuery to move these elements.');
