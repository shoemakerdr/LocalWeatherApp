document.addEventListener("DOMContentLoaded", function() {
  console.log("Document loaded");
  // getUrl();
  // // gets current location and assigns url-- calls getApi function with url
  // function getUrl() {
  //   console.log("getting URL");
  //   navigator.geolocation.getCurrentPosition(success);
  
  //   console.log("I think I have the URL");
  //   function success(position) {
  //     let locUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + 
  //                   position.coords.latitude + "&lon=" + 
  //                   position.coords.longitude + 
  //                   "&APPID=058e4fada3e29a7594f7a287dcad121d";
  //     console.log("Got URL");
  //     getApi(locUrl);
  //   }
  // }
  
  getURL("http://freegeoip.net/json/");
  
  // takes url and makes http request to get API JSON object-- calls render 
  // function with object
  function getURL(url) {
    console.log("getting URL");
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
    let file = JSON.parse(req.responseText);
    let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + 
              file.city + "," + 
              file.country_code + 
              "&APPID=058e4fada3e29a7594f7a287dcad121d";
    console.log(apiUrl);
    getAPI(apiUrl);
  });
    req.open("GET", url, true);
    req.send();
  }
  
  function getAPI(url) {
    console.log("getting API JSON file");
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
    let file = JSON.parse(req.responseText);
    console.log("got file");
    render(file);
  });
    req.open("GET", url, true);
    req.send();
  }
  
  // takes weather API object and renders all DOM elements
  function render(apiObj) {
    function const city = document.getElementById("city_name");
    city.textContent = apiObj.name;
    const celsius = Math.round((Number(apiObj.main.temp)) - 273.15);
    const fahrenheit = Math.round((celsius * 9 / 5) + 32);
    const temperature = document.getElementById("temperature");
    const celsiusElem = document.createElement("p");
    const fahrenheitElem = document.createElement("p");
  }
});
  
/*
{
  "coord":{"lon":-87.65,"lat":41.87},
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp":289.04,
    "pressure":1016,
    "humidity":39,
    "temp_min":286.15,
    "temp_max":291.15
  },
  "visibility":16093,
  "wind": {
    "speed":4.6,"deg":110
  },
  "clouds": {
    "all":75
  },
  "dt":1493045700,
  "sys": {
    "type":1,
    "id":961,
    "message":0.0108,
    "country":"US",
    "sunrise":1493031317,
    "sunset":1493080952
  },
  "id":4887398,
  "name":"Chicago",
  "cod":200
}
*/