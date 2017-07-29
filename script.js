document.addEventListener("DOMContentLoaded", function() {

  getURL("https://cors-anywhere.herokuapp.com/http://freegeoip.net/json/");

  // takes url string and makes http request to get new url string for API
  // call-- calls getAPI function with new url
  function getURL(url) {
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
    let file = JSON.parse(req.responseText);
    let apiUrl = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=" +
              file.city + "," +
              file.country_code +
              "&APPID=058e4fada3e29a7594f7a287dcad121d";
    getAPI(apiUrl);
  });
    req.open("GET", url, true);
    req.send();
  }

  // takes url and makes http request to get API JSON object-- calls render
  // function with object
  function getAPI(url) {
    const req = new XMLHttpRequest();
    req.addEventListener("load", () => {
    let file = JSON.parse(req.responseText);
    render(file);
    bindEvents();
  });
    req.open("GET", url, true);
    req.send();
  }

  // takes weather API object and renders all DOM elements
  function render(apiObj) {
    addCity();
    addTemperatures();
    addIcon();

    // renders city and country code
    function addCity() {
      let city = document.getElementById("city_name");
      city.textContent = apiObj.name + ", " + apiObj.sys.country;
    }

    // renders both celsius and fahrenheit temperature elements but only
    // displays celsius element
    function addTemperatures() {
      const tempDiv = document.getElementById("temperature");
      const celsius = Math.round((Number(apiObj.main.temp)) - 273.15);
      const fahrenheit = Math.round((celsius * 9 / 5) + 32);
      function createTemperatureElement(temp, measure) {
        const tempElement = document.createElement("p");
        const measureElement = document.createElement("span");
        measureElement.innerHTML = (measure === "C") ?
          "&#8451" :
          "&#8457";
         tempElement.textContent = temp;
         tempElement.appendChild(measureElement);
         return tempElement;
      }
      const cTemp = createTemperatureElement(celsius, "C");
      cTemp.style.display = "none";
      const fTemp = createTemperatureElement(fahrenheit, "F");
      fTemp.style.display = "inline";
      tempDiv.appendChild(cTemp);
      tempDiv.appendChild(fTemp);
    }
    function addIcon() {
      const iconDiv = document.getElementById("icon");
      const iconCode = apiObj.weather[0].icon;
      const iconAlt = apiObj.weather[0].description;
      console.log(iconAlt);
      const imageElement = (function createImageElement() {
        const image = document.createElement("img");
        image.src = "http://openweathermap.org/img/w/" + iconCode + ".png";
        console.log(image.src);
        image.alt = iconAlt;
        return image;
      })();
      iconDiv.appendChild(imageElement);
    }
  }

  // binds click handler to temperature div
  function bindEvents() {
    const tempWrapper = document.getElementById("temperature");
    tempWrapper.addEventListener("click", switchTemp);
    function switchTemp() {
      const temps = tempWrapper.childNodes;
      temps.forEach(function(temp){
        if (temp.style.display === "none")
          temp.style.display = "inline";
        else temp.style.display = "none";
      });
    }
  }
});
