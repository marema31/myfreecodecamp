assert.deepEqual(fearNotLetter("abce"), "d", 'message: <code>fearNotLetter("abce")</code> should return "d".');
assert.deepEqual(fearNotLetter("abcdefghjklmno"), "i", 'message: <code>fearNotLetter("abcdefghjklmno")</code> should return "i".');
assert.isUndefined(fearNotLetter("bcd"), 'message: <code>fearNotLetter("bcd")</code> should return undefined.');
assert.isUndefined(fearNotLetter("yz"), 'message: <code>fearNotLetter("yz")</code> should return undefined.');
