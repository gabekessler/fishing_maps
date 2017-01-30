// If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 18
  });
  var infoWindow = new google.maps.InfoWindow({map: map});

  window.mapControl = new CoreMap(map, infoWindow);
  window.mapControl.getCurrent();
  map.addListener('click', function(e) {
    window.mapControl.placeMarkerAndPanTo(e.latLng);
  });
}
