assert($("div.row > div.col-xs-6").length > 1, 'message: Nest two <code>div class="col-xs-6"</code> elements within your <code>div class="row"</code> element.');
assert(code.match(/<\/div>/g) && code.match(/<div/g) && code.match(/<\/div>/g).length === code.match(/<div/g).length, 'message: Make sure all your <code>div</code> elements have closing tags.');
