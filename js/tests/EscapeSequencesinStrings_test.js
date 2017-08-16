assert(myStr === "FirstLine\n\\SecondLine\\\rThirdLine", 'message: <code>myStr</code> should have encoded text with the proper escape sequences and no spacing.');
assert(myStr.match(/\n/g).length == 1, 'message: <code>myStr</code> should have one newline character <code>\n</code>');
assert(myStr.match(/\r/g).length == 1, 'message: <code>myStr</code> should have one carriage return character <code>\r</code>');
assert(myStr.match(/\\/g).length == 2, 'message: <code>myStr</code> should have two correctly escaped backslash characters <code>\\</code>');
