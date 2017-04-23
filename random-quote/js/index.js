  $(document).ready(function() {

    $("#getQuote").on("click", function() {
//On codepen you must add the crossorigin      $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
      $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
        $("#quote").text(json.quoteText);
        $("#author").text(json.quoteAuthor);
      });
    });
  });
