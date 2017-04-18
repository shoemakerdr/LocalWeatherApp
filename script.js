var weather = (function () {

  navigator.geolocation.getCurrentPosition(success);

  function success(position) {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" +
              position.coords.latitude + "&lon=" + position.coords.latitude +
              "&APPID=058e4fada3e29a7594f7a287dcad121d";

    var api = function() {
      var req = new XMLHttpRequest();
      req.open("GET", url, false);
      req.send(null);
      return JSON.parse(req.responseText);
    };

  }

  return {
    render: function() {

    },

    toF: function() {

    },

    toC: function() {

    }
  };
})();
