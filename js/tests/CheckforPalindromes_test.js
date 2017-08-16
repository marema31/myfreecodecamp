assert(typeof palindrome("eye") === "boolean", 'message: <code>palindrome("eye")</code> should return a boolean.');
assert(palindrome("eye") === true, 'message: <code>palindrome("eye")</code> should return true.');
assert(palindrome("_eye") === true, 'message: <code>palindrome("_eye")</code> should return true.');
assert(palindrome("race car") === true, 'message: <code>palindrome("race car")</code> should return true.');
assert(palindrome("not a palindrome") === false, 'message: <code>palindrome("not a palindrome")</code> should return false.');
assert(palindrome("A man, a plan, a canal. Panama") === true, 'message: <code>palindrome("A man, a plan, a canal. Panama")</code> should return true.');
assert(palindrome("never odd or even") === true, 'message: <code>palindrome("never odd or even")</code> should return true.');
assert(palindrome("nope") === false, 'message: <code>palindrome("nope")</code> should return false.');
assert(palindrome("almostomla") === false, 'message: <code>palindrome("almostomla")</code> should return false.');
assert(palindrome("My age is 0, 0 si ega ym.") === true, 'message: <code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.');
assert(palindrome("1 eye for of 1 eye.") === false, 'message: <code>palindrome("1 eye for of 1 eye.")</code> should return false.');
assert(palindrome("0_0 (: /-\ :) 0-0") === true, 'message: <code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.');
assert(palindrome("five|\_/|four") === false, 'message: <code>palindrome("five|\_/|four")</code> should return false.');