assert(!/\\/g.test(code), 'message: Remove all the <code>backslashes</code> (<code>\</code>)');
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2, 'message: You should have two single quotes <code>&#39;</code> and four double quotes <code>&quot;</code>');
assert(myStr === '<a href="http://www.example.com" target="_blank">Link</a>', 'message: Only remove the backslashes <code>\</code> used to escape quotes.');
