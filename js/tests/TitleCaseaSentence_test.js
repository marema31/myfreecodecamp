assert(typeof titleCase("I'm a little tea pot") === "string", 'message: <code>titleCase("I&#39;m a little tea pot")</code> should return a string.');
assert(titleCase("I'm a little tea pot") === "I'm A Little Tea Pot", 'message: <code>titleCase("I&#39;m a little tea pot")</code> should return "I&#39;m A Little Tea Pot".');
assert(titleCase("sHoRt AnD sToUt") === "Short And Stout", 'message: <code>titleCase("sHoRt AnD sToUt")</code> should return "Short And Stout".');
assert(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") === "Here Is My Handle Here Is My Spout", 'message: <code>titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")</code> should return "Here Is My Handle Here Is My Spout".');
