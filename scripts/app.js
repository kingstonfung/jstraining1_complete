weatherApp = {};

document.addEventListener('DOMContentLoaded', function () {
  var onGeoDataReceived = function (coordinates) {
    weatherApp.getWeatherData(coordinates, onCurrentWeatherDataReceived, onForecastWeatherDataReceived);
  };

  var onCurrentWeatherDataReceived = function (data) {
    try {
      var weatherData = JSON.parse(data);
      var sanitizedData = weatherApp.santizeCurrentWeatherData(weatherData);
      weatherApp.renderCurrentWeatherInformation(sanitizedData);
    } catch (error) {
      var errorMessage = 'Error parsing weather data with reason:' + error.message;
      weatherApp.displayErrorMessage(errorMessage);
      throw new Error(errorMessage);
    }
  };

  var onForecastWeatherDataReceived = function (data) {
    try {
      var forecastData = JSON.parse(data);
      var sanitizedData = weatherApp.santizeForecastWeatherData(forecastData);
      weatherApp.renderForecastWeatherInformation(sanitizedData);
    } catch (error) {
      var errorMessage = 'Error parsing forecast data with reason:' + error.message;
      weatherApp.displayErrorMessage(errorMessage);
      throw new Error(errorMessage);
    }
  };

  document.querySelector('form .button').addEventListener('click', function (evt) {
    var searchValue = document.querySelector('.searchbar').value;
    weatherApp.getWeatherData(searchValue, onCurrentWeatherDataReceived, onForecastWeatherDataReceived);
    evt.preventDefault();
  });

  weatherApp.geoDetection(onGeoDataReceived);
});
