#!/usr/bin/env js
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    return range.reduce(function(previousValue, currentValue) {
    var gcdPrevCurr = gcd(previousValue, currentValue);
    return (previousValue * currentValue) / gcdPrevCurr;
    });

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);

