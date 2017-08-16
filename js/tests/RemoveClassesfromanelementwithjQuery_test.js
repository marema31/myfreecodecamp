assert($(".btn-default").length === 0, 'message: Remove the <code>btn-default</code> class from all of your <code>button</code> elements.');
assert(code.match(/btn btn-default/g), 'message: Only use jQuery to remove this class from the element.');
assert(code.match(/\.[\v\s]*removeClass[\s\v]*\([\s\v]*('|")\s*btn-default\s*('|")[\s\v]*\)/gm), 'message: Only remove the <code>btn-default</code> class.');
