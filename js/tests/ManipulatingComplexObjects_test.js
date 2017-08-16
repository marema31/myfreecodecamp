assert(Array.isArray(myMusic), 'message: <code>myMusic</code> should be an array');
assert(myMusic.length > 1, 'message: <code>myMusic</code> should have at least two elements');
assert(typeof myMusic[1] === 'object', 'message: <code>myMusic[1]</code> should be an object');
assert(Object.keys(myMusic[1]).length > 3, 'message: <code>myMusic[1]</code> should have at least 4 properties');
assert(myMusic[1].hasOwnProperty('artist') && typeof myMusic[1].artist === 'string', 'message: <code>myMusic[1]</code> should contain an <code>artist</code> property which is a string');
assert(myMusic[1].hasOwnProperty('title') && typeof myMusic[1].title === 'string', 'message: <code>myMusic[1]</code> should  contain a <code>title</code> property which is a string');
assert(myMusic[1].hasOwnProperty('release_year') && typeof myMusic[1].release_year === 'number', 'message: <code>myMusic[1]</code> should contain a <code>release_year</code> property which is a number');
assert(myMusic[1].hasOwnProperty('formats') && Array.isArray(myMusic[1].formats), 'message: <code>myMusic[1]</code> should contain a <code>formats</code> property which is an array');
assert(myMusic[1].formats.every(function(item) { return (typeof item === "string")}) && myMusic[1].formats.length > 1, 'message: <code>formats</code> should be an array of strings with at least two elements');
