let weather = (function () {
  let coord = {
	  lat: 0,
	  long: 0
  };
  
  let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + 
            coord.lat + "&lon=" + coord.long + 
            "&APPID=058e4fada3e29a7594f7a287dcad121d";
  
  const getCoords = function() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      coord.lat = position.coords.latitude;
      coord.long = position.coords.longitude;
    }
  }
  
  const api = (function() {
    getCoords();
    const req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return JSON.parse(req.responseText);
  })();

  return {
    render: function() {

    },

    toF: function() {

    },

    toC: function() {

    }
  };
})();