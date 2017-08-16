assert(code.match(/navigator\.geolocation\.getCurrentPosition/gi), 'message: You should make use of <code>navigator.geolocation</code> to access the users current location.');
assert(code.match(/position\.coords\.latitude/gi), 'message: You should make use of <code>position.coords.latitude</code> to display the users&#39; latitudinal location.');
assert(code.match(/position\.coords\.longitude/gi), 'message: You should make use of <code>position.coords.longitude</code> to display the users&#39; longitudinal location.');
assert(code.match(/\$\(\s*"#data"\s*\)\s*\.html\([.\w\W]*?\);/gi), 'message: You should display the users&#39; position within the <code>data</code> div element');
