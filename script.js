var weather = (function () {
    var location = {
        lat: "lat",
        lon: "long"
    }
  
    var api = function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var url = "api.openweathermap.org/data/2.5/weather?lat=" +
                           location.lat + "&lon=" + location.lon +
                           "&APPID=058e4fada3e29a7594f7a287dcad121d"
            }
        }
    };
  
    return {
        render: function() {
        
        },
        
        toF: function() {
          
        },
    
        toC: function() {
          
        }
    }
}());