weatherApp.geoDetection = function (callback) {
  var FALLBACK_COORDINATES = {
    lat: 53.541621,
    long: -113.486238
  };

  var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  var onGeoDetectSuccessful = function (position) {
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    callback({ lat: crd.latitude, long: crd.longitude });
  }

  var onGeoDetectFailed = function (error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);

    callback(FALLBACK_COORDINATES);
  }

  // navigator.geolocation.getCurrentPosition(onGeoDetectSuccessful, onGeoDetectFailed, options);
  callback(FALLBACK_COORDINATES);
}
