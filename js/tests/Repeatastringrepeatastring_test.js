assert(repeatStringNumTimes("*", 3) === "***", 'message: <code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.');
assert(repeatStringNumTimes("abc", 3) === "abcabcabc", 'message: <code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.');
assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", 'message: <code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.');
assert(repeatStringNumTimes("abc", 1) === "abc", 'message: <code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.');
assert(repeatStringNumTimes("*", 8) === "********", 'message: <code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.');
assert(repeatStringNumTimes("abc", -2) === "", 'message: <code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.');
