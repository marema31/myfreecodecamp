assert(!code.match(/e"\);/g) && !code.match(/t"\);/g), 'message: Delete all three of your jQuery functions from your <code>document ready function</code>.');
assert(code.match(/<script>/g), 'message: Leave your <code>script</code> element intact.');
assert(code.match(/\$\(document\)\.ready\(function\(\)\s?\{/g), 'message: Leave your <code>$&#40document&#41.ready&#40function&#40&#41 {</code> to the beginning of your <code>script</code> element.');
assert(code.match(/\n\s+?\}\);/g), 'message: Leave your "document ready function" closing <code>&#125;&#41;</code> intact.');
assert(code.match(/<\/script>/g) && code.match(/<script/g) && code.match(/<\/script>/g).length === code.match(/<script/g).length, 'message: Leave your <code>script</code> element closing tag intact.');
