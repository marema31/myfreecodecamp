assert($("body").css("background-color") === "rgb(0, 0, 0)", 'message: Your <code>body</code> element should have a black background.');
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/ig), 'message: Use <code>rgb</code> to give your <code>body</code> element a color of black. For example <code>body { background-color&#58; rgb&#40;255&#44; 165&#44; 0&#41;; }</code>');
