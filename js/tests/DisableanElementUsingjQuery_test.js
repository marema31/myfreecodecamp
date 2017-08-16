assert($("#target1") && $("#target1").prop("disabled"), 'message: Disable your <code>target1</code> button.');
assert($("#target2") && !$("#target2").prop("disabled"), 'message: Do not disable any other buttons.');
assert(!code.match(/disabled>/g), 'message: Only use jQuery to add these classes to the element.');
