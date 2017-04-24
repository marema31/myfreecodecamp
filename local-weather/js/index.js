var background = {
  "Thunderstorm": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Lightning3.jpg",
  "Drizzle": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Deszcz.JPG/1920px-Deszcz.JPG",
  "Rain": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Deszcz.JPG/1920px-Deszcz.JPG",
  "Snow": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Katarina_kyrka_och_kyrkogård_January_2013.jpg/2560px-Katarina_kyrka_och_kyrkogård_January_2013.jpg",
  "Atmosphere": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Päiksetõus_rabas.jpg",
  "Clear": "http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Fishing_Pole.jpg/2560px-Fishing_Pole.jpg",
  "Clouds": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cloudy_sky_i.jpg/1280px-Cloudy_sky_i.jpg",
  "Extreme": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Tornado0_-_NOAA.jpg"
};

function toCelsius(temp) {
  return (temp - 32) * 5 / 9;
}

function toFahrenheit(temp) {
  return temp * 9 / 5 + 32;
}

$(document).ready(function() {
  $.getJSON("http://ipinfo.io/json", function(json) {
    $("#city").text(json.city + "," + json.country);

    //The openweathermap API is only available in http
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var appid = "&APPID=32809a51e843ae5bf0ce46f0051ffe4d";
    var city = $("#city").text();
    $.getJSON(api + city + appid, function(json) {
      $("#description").text(json.weather[0].description);
      var temp = json.main.temp - 273.15;
      var unit = $("#unit").text();
      if (unit == "F") {
        temp = toFahrenheit(temp);
      }
      $("#temp").text(Math.floor(temp));
      var iconName = json.weather[0].icon;
      var icon = "http://openweathermap.org/img/w/" + iconName + ".png";
      $("#icon").attr("src", icon);  
      if (iconName[iconName.length - 1] == "d") {
        $("#weather-box").css("background-color", "#fff2cc");
      } else {
        $("#weather-box").css("background-color", "#9494b8");
      }
      var back = background[json.weather[0].main];
      $("body").css("background-image", "url(" + back + ")");
    });
  });

  $("#unit").on("click", function() {
    var temp = $("#temp").text();
    var unit = $("#unit").text();
    if (unit == "C") {
      temp = toFahrenheit(temp);
      unit = "F";
    } else {
      temp = toCelsius(temp);
      unit = "C";
    }
    $("#temp").text(Math.floor(temp));
    $("#unit").text(unit);
  });
});