assert($("#target4").length === 0, 'message: Use jQuery to remove your <code>target4</code> element from your page.');
assert(code.match(/id="target4/g), 'message: Only use jQuery to remove this element.');
