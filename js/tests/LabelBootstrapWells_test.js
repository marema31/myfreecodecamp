assert($(".col-xs-6").children("h4") && $(".col-xs-6").children("h4").length > 1, 'message: Add an <code>h4</code> element to each of your <code>&#60;div class="col-xs-6"&#62;</code> elements.');
assert(new RegExp("#left-well","gi").test($("h4").text()), 'message: One <code>h4</code> element should have the text <code>#left-well</code>.');
assert(new RegExp("#right-well","gi").test($("h4").text()), 'message: One <code>h4</code> element should have the text <code>#right-well</code>.');
assert(code.match(/<\/h4>/g) && code.match(/<h4/g) && code.match(/<\/h4>/g).length === code.match(/<h4/g).length, 'message: Make sure all your <code>h4</code> elements have closing tags.');
