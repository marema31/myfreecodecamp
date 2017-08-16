function insertUserRow(user,logo,link,status)
{
   var content =  "<div class='infos' id='info-"+user+"'>"
       content += "  <div class='col-xs-4'>";
       content += "    <img class='logo' src='"+logo+"'></img>";
       content += "    <span class='text username'><a href='"+link+"' target='_blank'>"+user+"</a></span>";
       content += "  </div>";
       content += "  <div class='col-xs-8'>";
       content += "    <span class='text' id='game-"+user+"'></span>"
       content += "  </div>";
       content += "</div>";
  $('#list').append(content);
}

function getUserInfos(user) 
{
      $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+user,
      function(json) {  
        if(json.status)
          insertUserRow(user,json.logo,json.url);
          getUserStatus(user);
      });
}

function getUserStatus(user)
{
      $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/"+user,
      function(json) {  
        
        if(json.stream) 
        {
            $("#info-"+user).addClass("active");
            $("#info-"+user).removeClass("inactive");
            $("#game-"+user).html("<strong>"+json.stream.game+":</strong> <i>"+json.stream.channel.status+"</i>");
        }
        else
        {
            $("#info-"+user).addClass("inactive");
            $("#info-"+user).removeClass("active");
            $("#game-"+user).html("<i>offline</i>");
        }
               
      });
}

$(document).ready(function() {
   var streamers= [  "magic", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
        
   for(var i=0; i<streamers.length; i++)
   {
     getUserInfos(streamers[i]);
   }
   $(".selector").click(function() {
    $(".selector").removeClass("selected");
    $(this).addClass("selected");
    var status = $(this).attr('id');
    if (status === "all") {
      $(".active, .inactive").removeClass("hidden");
    } else if (status === "online") {
      $(".active").removeClass("hidden");
      $(".inactive").addClass("hidden");
    } else {
      $(".inactive").removeClass("hidden");
      $(".active").addClass("hidden");
    }
  })
});