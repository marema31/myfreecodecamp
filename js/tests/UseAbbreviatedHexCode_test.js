assert($('.red-text').css('color') === 'rgb(255, 0, 0)', 'message: Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.');
assert(code.match(/\.red-text\s*?{\s*?color:\s*?#F00\s*?;\s*?}/gi), 'message: Use the abbreviate <code>hex code</code> for the color red instead of the hex code <code>#FF0000</code>.');
assert($('.green-text').css('color') === 'rgb(0, 255, 0)', 'message: Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.');
assert(code.match(/\.green-text\s*?{\s*?color:\s*?#0F0\s*?;\s*?}/gi), 'message: Use the abbreviated <code>hex code</code> for the color green instead of the hex code <code>#00FF00</code>.');
assert($('.cyan-text').css('color') === 'rgb(0, 255, 255)', 'message: Give your <code>h1</code> element with the text <code>I am cyan!</code> the <code>color</code> cyan.');
assert(code.match(/\.cyan-text\s*?{\s*?color:\s*?#0FF\s*?;\s*?}/gi), 'message: Use the abbreviated <code>hex code</code> for the color cyan instead of the hex code <code>#00FFFF</code>.');
assert($('.fuchsia-text').css('color') === 'rgb(255, 0, 255)', 'message: Give your <code>h1</code> element with the text <code>I am fuchsia!</code> the <code>color</code> fuchsia.');
assert(code.match(/\.fuchsia-text\s*?{\s*?color:\s*?#F0F\s*?;\s*?}/gi), 'message: Use the abbreviated <code>hex code</code> for the color fuchsia instead of the hex code <code>#FF00FF</code>.');
