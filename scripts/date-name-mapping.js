weatherApp.getDayOfWeek = function (day) {
  var DAYS_IN_WEEK = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return DAYS_IN_WEEK[day];
}

weatherApp.getShortDayOfWeek = function (day) {
  var SHORT_NAME_DAYS_IN_WEEK = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  return SHORT_NAME_DAYS_IN_WEEK[day];
}

weatherApp.getMonthName = function (month) {
  var MONTHS_IN_YEAR = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return MONTHS_IN_YEAR[month];
}
