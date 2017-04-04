var weather = (function () {
  var location = {
    lat: "lat",
    lon: "long"
  };
  
  var url = "http://samples.openweathermap.org/data/2.5/weather?lat=" + 
            location.lat + "&lon=" + location.lon + 
            "&APPID=058e4fada3e29a7594f7a287dcad121d";

  var api = function() {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    req.responseText;
  };

  return {
    render: function() {

    },

    toF: function() {

    },

    toC: function() {

    }
  };
})();