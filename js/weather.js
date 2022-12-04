function onGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(`You live in latitude ${latitude} and longitude ${longitude}`);
}

function onGeoError() {
  alert("We can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

// api key 55bdb56638c52da714c1e18937cd7c6f
