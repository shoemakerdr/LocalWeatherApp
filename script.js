var weather = (function () {
  var coord = {
	  lat: 0,
	  long: 0
  };
  
  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    coord.lat = position.coords.latitude;
    coord.long = position.coords.longitude;
  }
  
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 
            coord.lat + "&lon=" + coord.long + 
            "&APPID=058e4fada3e29a7594f7a287dcad121d";

  var api = function() {
    var req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return JSON.parse(req.responseText);
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