assert(confirmEnding("Bastian", "n") === true, 'message: <code>confirmEnding("Bastian", "n")</code> should return true.');
assert(confirmEnding("Connor", "n") === false, 'message: <code>confirmEnding("Connor", "n")</code> should return false.');
assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false, 'message: <code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.');
assert(confirmEnding("He has to give me a new name", "name") === true, 'message: <code>confirmEnding("He has to give me a new name", "name")</code> should return true.');
assert(confirmEnding("Open sesame", "same") === true, 'message: <code>confirmEnding("Open sesame", "same")</code> should return true.');
assert(confirmEnding("Open sesame", "pen") === false, 'message: <code>confirmEnding("Open sesame", "pen")</code> should return false.');
assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false, 'message: <code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.');
assert(!/\.endsWith\(.*?\)\s*?;/.test(code), 'message: Do not use the built-in method <code>.endsWith()</code> to solve the challenge.');
