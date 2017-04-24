//var url="https://crossorigin.me/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=max&exintro=1&explaintext=1&gsrsearch=";
var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exsentences=1&exlimit=max&exintro=1&explaintext=1&gsrsearch=";

$(document).ready(function() {
  $("#filter").keyup(function() {
    search();
  });
});

function search() {
  var filter = encodeURI($("#filter").val());
  if (filter.length <1){
    $("#results").css('display','none');
    return;
  }
  $.ajax({
    url: url+filter,
    dataType: 'jsonp',
    type: 'POST',
    headers: {
      'Api-User-Agent': 'Marema/1.0'
    },
    success: function(json) {
      $("#results").empty();
      
      Object.keys(json.query.pages).forEach(function (key) {
        var rhtml="<div class='result'><h2>";
        rhtml+="<a href='https://en.wikipedia.org/wiki/";
        rhtml+=json.query.pages[key].title;
        rhtml+="' target='_blank'>";
        rhtml+=json.query.pages[key].title;
        rhtml+="</a></h2>";
        rhtml+="<p>";
        rhtml+=json.query.pages[key].extract;
        rhtml+="</p>";    
        rhtml+="</div>";
        $("#results").append(rhtml);      });
      $("#results").css('display','block');
    }
  });
}