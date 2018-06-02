weatherApp.getWeatherData = function (coordinates, currentWeatherCallback, forecastCallback) {
  var networkMethod = 'GET';
  var API_KEY = 'abb695648274743abff28bd89d04ed01';
  var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&&appid=' + API_KEY + '&';
  if (typeof coordinates !== 'string') {
    weatherURL += 'lat=' + coordinates.lat + '&lon=' + coordinates.long;
  } else {
    weatherURL += 'q=' + coordinates;
  }

  var getCurrentWeatherInfo = function () {
    var networkRequest = new XMLHttpRequest();

    networkRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        currentWeatherCallback(this.responseText);
      } else if (this.readyState === 4) {
        weatherApp.displayErrorMessage('Erorr fetching weather info for ' + coordinates.toString());
        throw new Error('Erorr fetching weather info for ' + coordinates.toString());
      }
    }

    networkRequest.open(networkMethod, weatherURL);
    networkRequest.send();
  };

  var getForecastWeatherInfo = function () {
    var networkRequest = new XMLHttpRequest();

    networkRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        forecastCallback(this.responseText);
      } else if (this.readyState === 4) {
        throw new Error('Erorr fetching forecast info for ' + coordinates.toString());
      }
    }

    networkRequest.open(networkMethod, weatherURL.replace('/weather?', '/forecast/daily?cnt=5&'));
    networkRequest.send();
  };

  getForecastWeatherInfo();
  getCurrentWeatherInfo();
}
