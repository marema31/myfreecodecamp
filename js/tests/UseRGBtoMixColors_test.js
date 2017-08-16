assert($('.red-text').css('color') === 'rgb(255, 0, 0)', 'message: Give your <code>h1</code> element with the text <code>I am red!</code> the <code>color</code> red.');
assert(code.match(/\.red-text\s*?{\s*?color:\s*?rgb\(\s*?255\s*?,\s*?0\s*?,\s*?0\s*?\)\s*?;\s*?}/gi), 'message: Use <code>rgb</code> for the color red.');
assert($('.orchid-text').css('color') === 'rgb(218, 112, 214)', 'message: Give your <code>h1</code> element with the text <code>I am orchid!</code> the <code>color</code> orchid.');
assert(code.match(/\.orchid-text\s*?{\s*?color:\s*?rgb\(\s*?218\s*?,\s*?112\s*?,\s*?214\s*?\)\s*?;\s*?}/gi), 'message: Use <code>rgb</code> for the color orchid.');
assert($('.blue-text').css('color') === 'rgb(0, 0, 255)', 'message: Give your <code>h1</code> element with the text <code>I am blue!</code> the <code>color</code> blue.');
assert(code.match(/\.blue-text\s*?{\s*?color:\s*?rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\)\s*?;\s*?}/gi), 'message: Use <code>rgb</code> for the color blue.');
assert($('.sienna-text').css('color') === 'rgb(160, 82, 45)', 'message: Give your <code>h1</code> element with the text <code>I am sienna!</code> the <code>color</code> sienna.');
assert(code.match(/\.sienna-text\s*?{\s*?color:\s*?rgb\(\s*?160\s*?,\s*?82\s*?,\s*?45\s*?\)\s*?;\s*?}/gi), 'message: Use <code>rgb</code> for the color sienna.');
