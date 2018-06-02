weatherApp.santizeCurrentWeatherData = function (data) {
  return {
    icon: data.weather[0].id,
    temperature: Math.round(data.main.temp),
    city: data.name,
    country: data.sys.country,
    condition: data.weather[0].description,
    wind: data.wind.speed,
    humidity: data.main.humidity
  }
};

weatherApp.santizeForecastWeatherData = function (data) {
  var createSingleDayData = function (singleDayData) {
    return {
      high: Math.round(singleDayData.temp.max),
      low: Math.round(singleDayData.temp.min),
      icon: singleDayData.weather[0].id
    }
  };

  var forecastList = [];

  for (var i = 0; i < data.list.length; i++) {
    forecastList.push(createSingleDayData(data.list[i]));
  }

  return forecastList;
};

weatherApp.renderForecastWeatherInformation = function (data) {
  var htmlBlock = `
    <div class="block">
      <h3 class="secondary">Tue</h3>
      <h2 class="high">14</h2>
      <h4 class="secondary">11</h4>
    </div>
  `;

  var html = '';
  var nowDayOfWeek = new Date().getDay() + 1;

  for (var i = 0; i < data.length; i++) {
    if ((nowDayOfWeek + 1) > 6) nowDayOfWeek = 0;
    html += `
      <div class="block">
        <h3 class="secondary">${weatherApp.getShortDayOfWeek(nowDayOfWeek++)}</h3>
        <span class="wi wi-owm-${data[i].icon}"></span>
        <h2 class="high">${data[i].high}</h2>
        <h4 class="secondary">${data[i].low}</h4>
      </div>
    `;
  }

  document.querySelector('.forecast').innerHTML = html;
}
