assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP", 'message: <code>rot13("SERR PBQR PNZC")</code> should decode to <code>"FREE CODE CAMP"</code>');
assert(rot13("SERR CVMMN!") === "FREE PIZZA!", 'message: <code>rot13("SERR CVMMN!")</code> should decode to <code>"FREE PIZZA!"</code>');
assert(rot13("SERR YBIR?") === "FREE LOVE?", 'message: <code>rot13("SERR YBIR?")</code> should decode to <code>"FREE LOVE?"</code>');
assert(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.") === "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.", 'message: <code>rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")</code> should decode to <code>"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."</code>');
