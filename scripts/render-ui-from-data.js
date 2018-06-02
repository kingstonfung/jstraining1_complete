weatherApp.renderCurrentWeatherInformation = function (data) {
  var cityElement = document.querySelector('.city');
  cityElement.innerHTML = data.city + ', ' + data.country;

  var mainTemperatureElement = document.querySelector('.main-temperature .value');
  mainTemperatureElement.innerHTML = data.temperature;

  var mainTemperatureIconElement = document.querySelector('.main-icon.wi');
  mainTemperatureIconElement.classList.add('wi-owm-' + data.icon);

  var currentTimeElement = document.querySelector('.current-time');
  var now = new Date();
  var dayOfWeek = weatherApp.getDayOfWeek(now.getDay());
  var monthName = weatherApp.getMonthName(now.getMonth());
  currentTimeElement.innerHTML = dayOfWeek + ', ' + monthName + ' ' + now.getDate() + ', ' + now.getFullYear();

  var currentConditionElement = document.querySelector('.current-condition');
  currentConditionElement.innerHTML = data.condition;

  var windSpeedElement = document.querySelector('.wind .value');
  windSpeedElement.innerHTML = data.wind;

  var humidityElement = document.querySelector('.humidity .value');
  humidityElement.innerHTML = data.humidity;

  weatherApp.adjustAppBackgroundColor(data.temperature);
  weatherApp.displayErrorMessage('');
};
