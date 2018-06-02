weatherApp.adjustAppBackgroundColor = function (temperature) {
  var className = '';
  if (temperature < 15) {
    className = 'cool';
  } else if (temperature > 15 && temperature < 25) {
    className = 'warm';
  } else if (temperature > 25) {
    className = 'hot';
  }

  document.querySelector('body').setAttribute('class', className);
}
