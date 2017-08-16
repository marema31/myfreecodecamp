assert($('.red-text').css('color') === 'rgb(255, 0, 0)', 'message: Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.');
assert(code.match(/\.red-text\s*?{\s*?color:\s*?#FF0000\s*?;\s*?}/gi), 'message: Use the <code>hex code</code> for the color red instead of the word <code>red</code>.');
assert($('.green-text').css('color') === 'rgb(0, 255, 0)', 'message: Give your <code>h1</code> element with the text <code>I am green!</code> the <code>color</code> green.');
assert(code.match(/\.green-text\s*?{\s*?color:\s*?#00FF00\s*?;\s*?}/gi), 'message: Use the <code>hex code</code> for the color green instead of the word <code>green</code>.');
assert($('.dodger-blue-text').css('color') === 'rgb(41, 152, 228)', 'message: Give your <code>h1</code> element with the text <code>I am dodger blue!</code> the <code>color</code> dodger blue.');
assert(code.match(/\.dodger-blue-text\s*?{\s*?color:\s*?#2998E4\s*?;\s*?}/gi), 'message: Use the <code>hex code</code> for the color dodger blue instead of the word <code>dodgerblue</code>.');
assert($('.orange-text').css('color') === 'rgb(255, 165, 0)', 'message: Give your <code>h1</code> element with the text <code>I am orange!</code> the <code>color</code> orange.');
assert(code.match(/\.orange-text\s*?{\s*?color:\s*?#FFA500\s*?;\s*?}/gi), 'message: Use the <code>hex code</code> for the color orange instead of the word <code>orange</code>.');
