assert($("form").attr("id") === "cat-photo-form", 'message: Give your <code>form</code> element the id of <code>cat-photo-form</code>.');
assert($("#cat-photo-form").css("background-color") === "rgb(0, 128, 0)", 'message: Your <code>form</code> element should have the <code>background-color</code> of green.');
assert(code.match(/<form.*cat-photo-form.*>/gi) && code.match(/<form.*cat-photo-form.*>/gi).length > 0, 'message: Make sure your <code>form</code> element has an <code>id</code> attribute.');
assert(!code.match(/<form.*style.*>/gi) && !code.match(/<form.*class.*>/gi), 'message: Do not give your <code>form</code> any <code>class</code> or <code>style</code> attributes.');
